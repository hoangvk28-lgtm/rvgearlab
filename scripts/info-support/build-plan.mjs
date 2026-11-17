// Builds plan.json for the support-informational batch: dedupe vs existing info
// guides, pick Best money pages + related info links per topic. Zero LLM tokens.
// Usage: node scripts/info-support/build-plan.mjs
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dir = path.join(root, "scripts/info-support");
const rows = fs.readFileSync(path.join(dir, "topics.tsv"), "utf8").trim().split(/\r?\n/).slice(1)
  .map((l) => { const [silo, slug, title, imageQuery, bestMatch] = l.split("\t"); return { silo, slug, title, imageQuery, bestMatch: bestMatch.split(",") }; });

// Best guides: slug + silo + title from registry
const reg = fs.readFileSync(path.join(root, "data/guides.ts"), "utf8");
const best = [];
for (const m of reg.matchAll(/title: "([^"]+)"[\s\S]*?slug: "([^"]+)"[\s\S]*?subcategorySlug: "([^"]+)"/g)) best.push({ title: m[1], slug: m[2], silo: m[3] });

// Existing informational guides
const infoTxt = fs.readFileSync(path.join(root, "data/informational-guides.ts"), "utf8") +
  fs.readFileSync(path.join(root, "data/informational-guides.camping.generated.ts"), "utf8");
const info = [...infoTxt.matchAll(/"slug": "([^"]+)",\s*"silo": "([^"]+)",\s*"title": "([^"]+)"/g)].map((m) => ({ slug: m[1], silo: m[2], title: m[3] }));
const infoSlugs = new Set(info.map((i) => i.slug));

const words = (s) => new Set(s.split("-").filter((w) => w.length > 2 && !["how", "the", "and", "for", "you", "your", "what", "camping", "choose"].includes(w)));
const jac = (a, b) => { const A = words(a), B = words(b); const i = [...A].filter((x) => B.has(x)).length; return i / (A.size + B.size - i || 1); };
const hash = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

const plan = [], warn = [];
const usage = new Map();
for (const r of rows) {
  if (infoSlugs.has(r.slug)) { warn.push(`DUP slug exists: ${r.slug}`); continue; }
  const near = info.filter((i) => jac(i.slug, r.slug) >= 0.6);
  if (near.length) warn.push(`NEAR ${r.slug} ~ ${near.map((n) => n.slug).join(", ")}`);
  let cands = best.filter((b) => r.bestMatch.some((k) => new RegExp(`(^|-)${k}(s|es)?(-|$)`).test(b.slug)));
  const same = cands.filter((b) => b.silo === r.silo);
  if (same.length >= 5) cands = same;
  // prefer least-used so sibling info pages spread across the cluster, rotate by slug hash
  const off = hash(r.slug) % Math.max(cands.length, 1);
  cands = [...cands.slice(off), ...cands.slice(0, off)].sort((a, b) => (usage.get(a.slug) || 0) - (usage.get(b.slug) || 0));
  const money = cands.slice(0, 8);
  money.forEach((b) => usage.set(b.slug, (usage.get(b.slug) || 0) + 1));
  if (money.length < 5) warn.push(`THIN money pages (${money.length}): ${r.slug}`);
  const relInfo = info.filter((i) => i.silo === r.silo).map((i) => ({ ...i, s: jac(i.slug, r.slug) }))
    .sort((a, b) => b.s - a.s).slice(0, 4);
  const sibs = rows.filter((x) => x.silo === r.silo && x.slug !== r.slug).slice(0, 3);
  plan.push({
    ...r,
    moneyPages: money.map((b) => ({ title: b.title, href: `/${b.silo}/${b.slug}` })),
    relatedInfo: [...relInfo.map((i) => ({ title: i.title, href: `/${i.silo}/${i.slug}` })), ...sibs.map((s) => ({ title: s.title, href: `/${s.silo}/${s.slug}` }))],
  });
}
fs.writeFileSync(path.join(dir, "plan.json"), JSON.stringify(plan, null, 2));
console.log(`plan: ${plan.length} topics, best guides ${best.length}, info ${info.length}`);
console.log(warn.join("\n"));
