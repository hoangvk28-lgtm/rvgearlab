// Inserts `targeted: true` images from images.json into articles that have fewer than 2 images.
// Each image goes after the first paragraph under an evenly spaced body H2 (never FAQ/sources/credits),
// and gets a credit line under "## Image credits". Zero LLM tokens.
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const images = JSON.parse(fs.readFileSync(path.join(root, "scripts/info-support/images.json"), "utf8"));
const mdDir = path.join(root, "public/content/informational");
const alt = (i) => (i.description && i.description.length < 140 ? i.description : i.title)
  .replace(/\(\d{6,}\)|\b[A-Z0-9]{6,}\b|\d{4}-\d{2}-\d{2}|geograph\.org\.uk.*$|[_]+/g, " ").replace(/\s+/g, " ").replace(/[–—]/g, ",").trim();
const credit = (i) => `- "${i.title.replace(/[–—]/g, ",")}" by ${i.author.replace(/[–—]/g, ",")}, ${i.licenseUrl ? `[${i.license}](${i.licenseUrl})` : i.license}, via [${i.source}](${i.filePage}).`;

for (const [slug, list] of Object.entries(images)) {
  const file = path.join(mdDir, `${slug}.md`);
  if (!fs.existsSync(file)) continue;
  let md = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const placed = [...md.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map((m) => m[1]);
  if (placed.length >= 2) continue;
  const add = list.filter((i) => i.targeted && !placed.includes(i.src)).slice(0, 2 - placed.length + (placed.length === 0 ? 1 : 0));
  if (!add.length) continue;
  const lines = md.split("\n");
  const h2 = lines.map((l, n) => [l, n]).filter(([l]) => /^## /.test(l) && !/frequently asked|faq|sources|image credits|common mistakes/i.test(l)).map(([, n]) => n);
  const slots = add.map((_, k) => h2[Math.min(h2.length - 1, Math.floor(((k + 1) * h2.length) / (add.length + 1)))]);
  // insert bottom-up so earlier indexes stay valid
  [...add.map((img, k) => [img, slots[k]])].sort((a, b) => b[1] - a[1]).forEach(([img, at]) => {
    let p = at + 1; while (p < lines.length && lines[p].trim() === "") p++;   // first paragraph
    while (p < lines.length && lines[p].trim() !== "") p++;                   // end of it
    lines.splice(p, 0, "", `![${alt(img)}](${img.src})`);
  });
  md = lines.join("\n").replace(/^.*No photographs are used in this article\.?.*\n?/gim, "");
  if (!/^## Image credits/im.test(md)) md = md.trimEnd() + "\n\n## Image credits\n";
  md = md.replace(/(## Image credits[^\n]*\n)([\s\S]*)$/i, (_, h, rest) => `${h}${rest.trimEnd() ? rest.trimEnd() + "\n" : ""}${add.map(credit).join("\n")}\n`);
  fs.writeFileSync(file, md);
  console.log(`${slug}: +${add.length} -> ${placed.length + add.length}`);
}
