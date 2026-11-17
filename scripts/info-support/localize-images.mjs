// Downloads every remote image placed in the support articles, resizes to max 1200px wide WebP,
// saves to public/images/info/<slug>-<n>.webp and rewrites the markdown src. Credits stay as-is
// (the CC licenses allow redistribution with attribution). Sequential + backoff to respect 429s.
// Resumable: already-local srcs are skipped. Zero LLM tokens.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const plan = JSON.parse(fs.readFileSync(process.env.PLAN || path.join(root, "scripts/info-support/plan.json"), "utf8"));
const outDir = path.join(root, "public/images/info");
fs.mkdirSync(outDir, { recursive: true });
const UA = "RVGearLabImageSourcing/1.0 (editorial illustration; attribution kept)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function download(url) {
  for (let a = 0; a < 6; a++) {
    try {
      const r = await fetch(url, { headers: { "User-Agent": UA } });
      if (r.ok) return Buffer.from(await r.arrayBuffer());
      if (r.status !== 429 && r.status < 500) throw new Error(`HTTP ${r.status}`);
    } catch (e) { if (String(e).includes("HTTP 4")) throw e; }
    await sleep(5000 * (a + 1));
  }
  throw new Error("retries exhausted");
}

const failed = [];
for (const t of plan) {
  const file = path.join(root, "public/content/informational", `${t.slug}.md`);
  if (!fs.existsSync(file)) continue;
  let md = fs.readFileSync(file, "utf8");
  let n = 0;
  for (const m of [...md.matchAll(/!\[([^\]]*)\]\((https?:[^)\s]+)\)/g)]) {
    n++;
    while (fs.existsSync(path.join(outDir, `${t.slug}-${n}.webp`)) && md.includes(`/images/info/${t.slug}-${n}.webp`)) n++;
    const name = `${t.slug}-${n}.webp`;
    try {
      const buf = await download(m[2]);
      await sharp(buf).rotate().resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 74 }).toFile(path.join(outDir, name));
      md = md.replace(m[0], `![${m[1]}](/images/info/${name})`);
      fs.writeFileSync(file, md);
      process.stdout.write(".");
    } catch (e) { failed.push(`${t.slug} ${m[2]} ${e.message}`); }
    await sleep(4000);
  }
}
console.log(`\nfailed ${failed.length}\n${failed.join("\n")}`);
