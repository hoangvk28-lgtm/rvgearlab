// Fetches up to 4 freely licensed, topic-relevant images per topic for article illustration.
// Sources: Wikimedia Commons, then Openverse (Flickr etc.). Only CC0 / CC BY / CC BY-SA /
// public domain (commercial use allowed). Stores author + license + source page for the
// "Image credits" note. Zero LLM tokens. Resumable: topics with >=3 images are skipped.
// Usage: node scripts/info-support/fetch-images.mjs
import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "scripts/info-support");
const plan = JSON.parse(fs.readFileSync(path.join(dir, "plan.json"), "utf8"));
const outFile = path.join(dir, "images.json");
const out = fs.existsSync(outFile) ? JSON.parse(fs.readFileSync(outFile, "utf8")) : {};
const used = new Set(Object.values(out).flat().map((i) => i.filePage));
const UA = "RVGearLabImageSourcing/1.0 (editorial illustration lookup)";
const OK_LIC = /^(cc0|cc[ -]by(-sa)?([ -]?\d|$)|public domain|pd|by(-sa)?$|pdm)/i;
const BAD = /logo|icon|diagram|\bmap\b|chart|flag|coat of arms|screenshot|patent|drawing|military|army|soldier|\bwar\b|weapon|clipart|clip art|power plant|power station,|nuclear|coal|besab|bnasab|spacecraft|satellite/i;
const STOP = new Set(["camping", "camp", "outdoor", "for", "the", "and", "rv", "of"]);
const strip = (h = "") => h.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const stem = (w) => w.toLowerCase().replace(/(ies)$/, "y").replace(/(es|s)$/, "");

// Relevance: text must contain every word of the topic's primary product term.
// Must contain every product-term word AND at least one image-query word not in the product term
// (so "power station" alone cannot match a coal plant: "portable" is also required).
function relevant(text, t) {
  const words = text.toLowerCase().split(/[^a-z0-9]+/).map(stem);
  const need = t.bestMatch[0].split("-").filter((w) => !STOP.has(w)).map(stem);
  const extra = t.imageQuery.split(" ").map(stem).filter((w) => !STOP.has(w) && !need.includes(w));
  return need.every((n) => words.includes(n)) && (process.env.RELAX || extra.length === 0 || extra.some((e) => words.includes(e)));
}

async function getJson(u) {
  for (let a = 0; a < 3; a++) {
    try { const r = await fetch(u, { headers: { "User-Agent": UA } }); if (r.ok) return await r.json(); } catch {}
    await sleep(3000 * (a + 1));
  }
  return null;
}

async function commons(q, t) {
  const u = new URL("https://commons.wikimedia.org/w/api.php");
  Object.entries({ action: "query", format: "json", generator: "search", gsrsearch: `${q} filetype:bitmap`, gsrnamespace: "6", gsrlimit: "50",
    prop: "imageinfo", iiprop: "url|size|mime|extmetadata", iiurlwidth: "1280" }).forEach(([k, v]) => u.searchParams.set(k, v));
  const j = await getJson(u);
  return Object.values(j?.query?.pages ?? {}).sort((x, y) => x.index - y.index).flatMap((p) => {
    const ii = p.imageinfo?.[0]; if (!ii) return [];
    const md = ii.extmetadata ?? {};
    const title = p.title.replace(/^File:/, "").replace(/\.\w+$/, "");
    const description = strip(md.ImageDescription?.value).slice(0, 200);
    if (!/jpeg|png/.test(ii.mime) || ii.width < 900 || !relevant(`${title} ${description} ${strip(md.Categories?.value)}`, t)) return [];
    return [{ src: ii.thumburl || ii.url, title, description, author: strip(md.Artist?.value).slice(0, 80) || "Unknown author",
      license: strip(md.LicenseShortName?.value), licenseUrl: md.LicenseUrl?.value ?? "", filePage: ii.descriptionurl, source: "Wikimedia Commons" }];
  });
}

async function openverse(q, t) {
  const u = new URL("https://api.openverse.org/v1/images/");
  Object.entries({ q, license_type: "commercial", page_size: "40", mature: "false" }).forEach(([k, v]) => u.searchParams.set(k, v));
  const j = await getJson(u);
  return (j?.results ?? []).flatMap((r) => {
    const text = `${r.title ?? ""} ${(r.tags ?? []).map((x) => x.name).join(" ")}`;
    if ((r.width ?? 0) < 900 || !relevant(text, t)) return [];
    const lic = r.license === "cc0" || r.license === "pdm" ? r.license.toUpperCase() : `CC ${r.license.toUpperCase()} ${r.license_version ?? ""}`.trim();
    return [{ src: r.url, title: r.title ?? "", description: "", author: r.creator || "Unknown author", license: lic,
      licenseUrl: r.license_url ?? "", filePage: r.foreign_landing_url, source: r.source === "flickr" ? "Flickr" : (r.provider ?? "Openverse") }];
  });
}

function take(cands, n) {
  const got = [];
  for (const c of cands) {
    if (got.length >= n) break;
    if (!OK_LIC.test(c.license) || BAD.test(`${c.title} ${c.description}`) || used.has(c.filePage)) continue;
    used.add(c.filePage); got.push(c);
  }
  return got;
}

for (const t of plan) {
  if (out[t.slug]?.length >= (process.env.RELAX ? 2 : 3)) continue;
  const term = t.bestMatch[0].replace(/-/g, " ");
  let imgs = (out[t.slug] ?? []); imgs = imgs.concat(take(await commons(t.imageQuery, t), 4 - imgs.length));
  for (const [fn, q] of [[commons, term], [openverse, t.imageQuery], [openverse, term]]) {
    if (imgs.length >= 3) break;
    await sleep(700);
    imgs = imgs.concat(take(await fn(q, t), 4 - imgs.length));
  }
  out[t.slug] = imgs;
  fs.writeFileSync(outFile, JSON.stringify(out, null, 2));
  console.log(`${imgs.length} ${t.slug} :: ${imgs.map((i) => i.title.slice(0, 40)).join(" | ")}`);
  await sleep(700);
}
const short = plan.filter((t) => (out[t.slug]?.length ?? 0) < 2).map((t) => t.slug);
console.log(`done. topics with <2 images: ${short.length} ${short.join(", ")}`);
