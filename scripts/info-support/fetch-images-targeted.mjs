// Second-chance image sourcing for slugs that still lack images: hand-picked queries,
// each with the words an image's title/description/tags must contain. Appends to images.json
// under the key "<slug>" with a `targeted: true` flag. Zero LLM tokens.
import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "scripts/info-support");
const outFile = path.join(dir, "images.json");
const out = JSON.parse(fs.readFileSync(outFile, "utf8"));
const used = new Set(Object.values(out).flat().map((i) => i.filePage));
const UA = "RVGearLabImageSourcing/1.0 (editorial illustration lookup)";
const OK_LIC = /^(cc0|cc[ -]by(-sa)?([ -]?\d|$)|public domain|pd|pdm)/i;
const BAD = /logo|icon|diagram|\bmap\b|chart|flag|screenshot|patent|drawing|clipart|military|army|soldier|weapon|nuclear|coal|power plant|power station/i;
const strip = (h = "") => h.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const has = (text, words) => { const t = text.toLowerCase(); return words.every((w) => w.split("|").some((alt) => t.includes(alt))); };

// slug: [[query, required words (each "a|b" = either)], ...]
const T = {
  "how-many-watts-do-you-need-for-camping": [["portable power station", ["portable", "power"]], ["camping electric hookup", ["camp"]], ["camping lantern night tent", ["camp|tent"]]],
  "how-to-run-a-generator-safely-at-a-campsite": [["portable generator", ["portable", "generator"]], ["honda generator", ["generator"]], ["carbon monoxide detector", ["carbon monoxide"]]],
  "suv-tent-vs-rooftop-tent": [["roof tent car", ["tent"]], ["rooftop tent", ["tent"]], ["car camping tent", ["tent"]]],
  "instant-tent-vs-traditional-tent": [["pop up tent", ["tent"]], ["dome tent poles", ["tent"]], ["tent pitching", ["tent"]]],
  "how-to-choose-a-screen-house": [["screen tent", ["tent|shelter|gazebo"]], ["gazebo camping", ["gazebo"]], ["camping canopy", ["canopy|gazebo"]]],
  "how-to-ventilate-a-tent-in-summer": [["tent mesh window", ["tent"]], ["tent summer camping", ["tent"]], ["tent interior", ["tent"]]],
  "how-to-choose-a-sleeping-bag-for-kids": [["child sleeping bag", ["sleeping bag"]], ["children camping tent", ["child|kid", "camp|tent"]], ["family camping", ["camp"]]],
  "how-to-choose-a-camping-pillow": [["inflatable pillow", ["pillow"]], ["travel pillow", ["pillow"]], ["sleeping bag tent", ["sleeping bag"]]],
  "camping-cot-weight-capacity-and-size": [["camp bed", ["bed|cot"]], ["folding cot", ["cot"]], ["camp cot", ["cot|camp bed"]]],
  "merino-vs-synthetic-base-layers": [["merino sheep wool", ["merino|wool"]], ["thermal underwear", ["underwear|base layer|thermal"]], ["wool yarn", ["wool"]]],
  "how-to-layer-clothing-for-camping": [["hiker jacket mountain", ["hik|trek"]], ["fleece jacket", ["fleece"]], ["hikers trail winter", ["hik"]]],
  "how-to-choose-hiking-pants": [["hikers trail", ["hik"]], ["trekking hikers", ["trek|hik"]], ["cargo pants", ["pants|trousers"]]],
  "how-to-wash-and-reproof-a-rain-jacket": [["rain jacket", ["jacket"]], ["raincoat", ["raincoat|rain coat|jacket"]], ["hiker rain", ["rain"]]],
  "water-filter-vs-water-purifier": [["portable water filter", ["filter"]], ["water purification", ["water", "purif|filter"]], ["drinking water stream", ["water"]]],
  "how-to-use-a-filter-straw": [["lifestraw", ["lifestraw|straw"]], ["water filter straw", ["straw|filter"]], ["drinking water stream hiker", ["water"]]],
  "how-to-use-trekking-poles": [["trekking poles hiker", ["pole"]], ["nordic walking poles", ["pole|nordic walking"]], ["hiking poles", ["pole"]]],
  "hard-cooler-vs-soft-cooler": [["cooler box", ["cooler|cool box|coolbox"]], ["coolbox", ["cool"]], ["ice chest", ["ice chest|cooler"]]],
  "how-to-store-water-at-a-campsite": [["water container", ["water", "container|jerrycan|jug|canister"]], ["jerrycan", ["jerrycan|jerry can"]], ["water jug", ["jug"]]],
  "how-cell-signal-boosters-work-in-an-rv": [["cell tower", ["tower|mast"]], ["mobile phone antenna", ["antenna"]], ["recreational vehicle antenna", ["antenna|vehicle"]]],
  "how-a-campground-wifi-extender-works": [["wifi antenna", ["antenna"]], ["wireless router", ["router"]], ["campground", ["campground|campsite"]]],
  "how-to-choose-an-rv-outdoor-rug": [["outdoor rug", ["rug|mat|carpet"]], ["recreational vehicle campsite awning", ["awning|recreational vehicle|caravan"]], ["caravan awning", ["awning"]]],
  "how-to-plan-an-rv-route": [["motorhome highway", ["motorhome|recreational vehicle|rv"]], ["recreational vehicle road", ["vehicle|motorhome"]], ["caravan road trip", ["caravan|motorhome"]]],
  "rv-converter-vs-inverter-vs-inverter-charger": [["power inverter", ["inverter"]], ["battery charger", ["charger"]], ["recreational vehicle electrical", ["electric|battery"]]],
  "how-to-choose-rv-internet-hardware": [["wireless router", ["router"]], ["mobile hotspot", ["hotspot|modem|router"]], ["recreational vehicle satellite dish", ["dish|antenna"]]],
};

async function getJson(u) {
  for (let a = 0; a < 3; a++) {
    try { const r = await fetch(u, { headers: { "User-Agent": UA } }); if (r.ok) return await r.json(); } catch {}
    await sleep(3000 * (a + 1));
  }
  return null;
}
async function commons(q) {
  const u = new URL("https://commons.wikimedia.org/w/api.php");
  Object.entries({ action: "query", format: "json", generator: "search", gsrsearch: `${q} filetype:bitmap`, gsrnamespace: "6", gsrlimit: "50",
    prop: "imageinfo", iiprop: "url|size|mime|extmetadata", iiurlwidth: "1280" }).forEach(([k, v]) => u.searchParams.set(k, v));
  const j = await getJson(u);
  return Object.values(j?.query?.pages ?? {}).sort((x, y) => x.index - y.index).flatMap((p) => {
    const ii = p.imageinfo?.[0]; if (!ii || !/jpeg|png/.test(ii.mime) || ii.width < 900) return [];
    const md = ii.extmetadata ?? {};
    return [{ src: ii.thumburl || ii.url, title: p.title.replace(/^File:/, "").replace(/\.\w+$/, ""), description: strip(md.ImageDescription?.value).slice(0, 200),
      author: strip(md.Artist?.value).slice(0, 80) || "Unknown author", license: strip(md.LicenseShortName?.value), licenseUrl: md.LicenseUrl?.value ?? "",
      filePage: ii.descriptionurl, source: "Wikimedia Commons", _text: `${p.title} ${strip(md.ImageDescription?.value)}` }];
  });
}
async function openverse(q) {
  const u = new URL("https://api.openverse.org/v1/images/");
  Object.entries({ q, license_type: "commercial", page_size: "40", mature: "false" }).forEach(([k, v]) => u.searchParams.set(k, v));
  const j = await getJson(u);
  return (j?.results ?? []).flatMap((r) => (r.width ?? 0) < 900 ? [] : [{
    src: r.url, title: r.title ?? "", description: "", author: r.creator || "Unknown author",
    license: r.license === "cc0" || r.license === "pdm" ? r.license.toUpperCase() : `CC ${r.license.toUpperCase()} ${r.license_version ?? ""}`.trim(),
    licenseUrl: r.license_url ?? "", filePage: r.foreign_landing_url, source: r.source === "flickr" ? "Flickr" : (r.provider ?? "Openverse"),
    _text: `${r.title ?? ""} ${(r.tags ?? []).map((x) => x.name).join(" ")}` }]);
}

for (const [slug, queries] of Object.entries(T)) {
  const got = [];
  for (const [q, req] of queries) {
    for (const fn of [commons, openverse]) {
      if (got.length >= 3) break;
      for (const c of await fn(q)) {
        if (got.length >= 3) break;
        if (!OK_LIC.test(c.license) || BAD.test(c._text) || used.has(c.filePage) || !has(c._text, req)) continue;
        used.add(c.filePage); delete c._text; got.push({ ...c, targeted: true });
      }
      await sleep(700);
    }
  }
  out[slug] = [...(out[slug] ?? []), ...got];
  fs.writeFileSync(outFile, JSON.stringify(out, null, 2));
  console.log(`${got.length} ${slug} :: ${got.map((g) => g.title.slice(0, 50)).join(" | ")}`);
}
