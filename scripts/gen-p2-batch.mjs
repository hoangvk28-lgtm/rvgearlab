// Usage: node scripts/gen-p2-batch.mjs pool.json scripts/p2-content
// Stage A/C of the best-guide pipeline: merges hand-written content modules (scripts/p2-content/<slug>.mjs)
// with cached Amazon pool data, emits data/guides/<slug>.ts + registry entries, and runs mechanical checks.
import { readFileSync, writeFileSync, readdirSync, existsSync, appendFileSync } from "fs";
import { resolve } from "path";
import { pathToFileURL } from "url";

import { statSync } from "fs";
const pool = {};
if (statSync(process.argv[2]).isDirectory()) {
  for (const f of readdirSync(process.argv[2]).filter((x) => x.endsWith(".json"))) {
    for (const [k, v] of Object.entries(JSON.parse(readFileSync(resolve(process.argv[2], f), "utf8")))) pool[f + ":" + k] = v;
  }
} else Object.assign(pool, JSON.parse(readFileSync(process.argv[2], "utf8")));
const dir = resolve(process.argv[3]);
const TAG = "hardcastlesrv-20";
const byAsin = {};
for (const items of Object.values(pool)) for (const it of items) byAsin[it.asin] ??= it;

const existing = new Set(readdirSync("data/guides").filter((f) => !readFileSync("data/guides/" + f, "utf8").includes('lastUpdated = "2026-10-02"')).map((f) => f.replace(/\.ts$/, "")));
const files = readdirSync(dir).filter((f) => f.endsWith(".mjs")).sort();
const mods = [];
const ONLY = process.env.ONLY ? process.env.ONLY.split(",") : null;
for (const f of files) {
  if (ONLY && !ONLY.includes(f.replace(/\.mjs$/, ""))) continue;
  try { mods.push((await import(pathToFileURL(resolve(dir, f)).href + "?t=" + Date.now())).default); }
  catch (e) { console.log("IMPORT ERROR " + f + ": " + e.message); }
}
const batchSlugs = new Set(files.map((f) => f.replace(/\.mjs$/, "")));
const errors = [];
const err = (slug, msg) => errors.push(`${slug}: ${msg}`);
const wc = (s) => s.trim().split(/\s+/).length;
const DASH = /[—–]/;
// Copy must read as editorial knowledge, never expose the drafting process (source excerpts, fact files, candidate pools).
const LEAK = /\bwe (saw|reviewed|have|found|could see|were given)\b|\b(text|excerpt|bullets?|features|facts|data|details|listings?) we\b|\bin the (features|facts|data|excerpt|bullets|text)\b|\bfacts (provided|here|given)\b|\bthe (pool|facts)\b|\bthe data\b(?! (sheet|plate|label|tag|plan|plans|cap|allowance))|\b(of the|the) candidates\b|\bcandidates we\b|\bnot (listed|stated|given|shown) in the (features|facts|text|bullets|excerpt|data)\b/i;

function walk(v, fn) {
  if (typeof v === "string") fn(v);
  else if (Array.isArray(v)) v.forEach((x) => walk(x, fn));
  else if (v && typeof v === "object") Object.values(v).forEach((x) => walk(x, fn));
}

const registry = [];
for (const m of mods) {
  const s = m.slug;
  if (existing.has(s)) err(s, "slug already exists in data/guides (would overwrite)");
  if (m.metaTitle.length > 48) err(s, `metaTitle ${m.metaTitle.length} > 48`);
  if (m.metaDescription.length < 120 || m.metaDescription.length > 160) err(s, `metaDescription ${m.metaDescription.length} not 120-160`);
  walk(m, (t) => {
    if (DASH.test(t)) err(s, `em/en dash in: ${t.slice(0, 60)}`);
    if (/we tested|we tried|in our lab|we measured/i.test(t)) err(s, `forbidden testing claim: ${t.slice(0, 60)}`);
    const leak = t.match(LEAK);
    if (leak) err(s, `process leak "${leak[0]}": ${t.slice(Math.max(0, leak.index - 40), leak.index + 40)}`);
  });
  const SH = !!m.short; const LT = m.short === "lite";
  if (m.criteria.length < (LT ? 4 : 5)) err(s, "criteria too few");
  m.criteria.forEach((c) => { if (c.explanation.split(/(?<=[.!?])\s+/).length < (LT ? 2 : 3)) err(s, `criterion too short: ${c.criterion}`); });
  if (m.faq.length < (LT ? 3 : SH ? 4 : 5) || m.faq.length > 6) err(s, `faq count ${m.faq.length}`);
  if (m.howToChoose.length !== 6) err(s, `howToChoose sections ${m.howToChoose.length} != 6`);
  if (m.products.length < (Number(process.env.MINP) || 5)) err(s, "products too few");
  if (m.intro.length < (SH ? 1 : 2)) err(s, "intro too short");
  if (m.howWeEvaluated.length < (LT ? 3 : 4)) err(s, "howWeEvaluated < 4");

  const shorts = m.products.map((p) => p.short);
  const names = new Set();
  const products = m.products.map((p, i) => {
    const raw = byAsin[p.asin];
    if (!raw) { err(s, `asin ${p.asin} not in pool`); return null; }
    if (raw.price == null) err(s, `asin ${p.asin} has no price`);
    if (!raw.img) err(s, `asin ${p.asin} has no image (imageUrl is required by GuideProduct)`);
    if (names.has(p.asin)) err(s, `duplicate asin ${p.asin}`);
    names.add(p.asin);
    if (p.d.length !== (LT ? 1 : SH ? 2 : 3)) err(s, `${p.short}: description paragraph count`);
    p.pros.forEach((x) => { if (wc(x) < 2 || wc(x) > 14) err(s, `${p.short} pro ${wc(x)}w: ${x}`); });
    p.cons.forEach((x) => { if (wc(x) < 2 || wc(x) > 14) err(s, `${p.short} con ${wc(x)}w: ${x}`); });
    if (p.pros.length < 3) err(s, `${p.short}: <3 pros`);
    if (p.cons.length < 2) err(s, `${p.short}: <2 cons`);
    p.specs.forEach((x) => { if (wc(x) < 2 || wc(x) > 9) err(s, `${p.short} spec ${wc(x)}w: ${x}`); });
    if (p.specs.length < 2) err(s, `${p.short}: <2 specs`);
    { const dang = p.pros.concat(p.cons, p.specs).find((x) => /\b(for|that|and|the|with|of)[.,]?$/i.test(x) || /\ba[.,]?$/.test(x)); if (dang) err(s, `${p.short}: dangling ending: ${dang}`); }
    return {
      id: `${s}-${i + 1}`, rank: i + 1, badge: p.badge, name: p.name,
      price: "$" + Number(raw.price).toFixed(2), rating: null, reviews: null,
      imageUrl: raw.img, amazonUrl: `https://www.amazon.com/dp/${p.asin}?tag=${TAG}`,
      description: p.d.join("\n\n"), specs: p.specs, pros: p.pros, cons: p.cons, bestFor: p.bestFor,
    };
  }).filter(Boolean);

  const mentions = (t) => shorts.some((x) => t.includes(x) || t.includes(x.split(" ")[0]));
  m.howToChoose.forEach((sec) => {
    if (sec.table) {
      sec.table.rows.forEach((r) => { if (!mentions(r.join(" "))) err(s, `howToChoose row names no product: ${r[0]}`); });
    }
    if (sec.cards) sec.cards.forEach((c) => { if (c.label !== "Look for" && !mentions(c.text)) err(s, `howToChoose card names no product: ${c.label}`); });
  });
  m.related.forEach((r) => {
    const rs = r.href.split("/").pop();
    if (!existing.has(rs) && !batchSlugs.has(rs)) err(s, `related slug missing: ${rs}`);
  });
  if (m.related.length < 3) err(s, "related < 3");

  const heroImage = products[0]?.imageUrl;
  const ts = `export const guideSlug = ${JSON.stringify(s)};
export const guideTitle = ${JSON.stringify(m.title)};
export const metaTitle = ${JSON.stringify(m.metaTitle)};
export const metaDescription = ${JSON.stringify(m.metaDescription)};
export const mainKeyword = ${JSON.stringify(m.keyword)};
export const introParagraphs = ${JSON.stringify(m.intro, null, 2)};
export const lastUpdated = "2026-10-02";
export const readTime = ${JSON.stringify(m.readTime ?? "11 min")};
export const heroImage = ${JSON.stringify(heroImage)};

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = ${JSON.stringify(products, null, 2)};

export const howWeEvaluated = ${JSON.stringify(m.howWeEvaluated, null, 2)};

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = ${JSON.stringify(m.howToChoose, null, 2)};

export const buyingCriteria = ${JSON.stringify(m.criteria, null, 2)};

export const faq = ${JSON.stringify(m.faq, null, 2)};

export const relatedGuides: { href: string; title: string }[] = ${JSON.stringify(m.related, null, 2)};
`;
  if (!errors.some((e) => e.startsWith(s + ":"))) {
    writeFileSync(`data/guides/${s}.ts`, ts);
    registry.push(`  {
    title: ${JSON.stringify(m.title)},
    slug: ${JSON.stringify(s)},
    categorySlug: "rv",
    subcategorySlug: ${JSON.stringify(m.silo ?? "power-electrical")},
    description: ${JSON.stringify(m.metaDescription)},
    mainKeyword: ${JSON.stringify(m.keyword)},
    subKeywords: [${JSON.stringify(m.keyword)}],
    heroImage: ${JSON.stringify(heroImage)},
    lastUpdated: "2026-10-02",
    author: "Hardcastle's RV Editors",
    readTime: ${JSON.stringify(m.readTime ?? "11 min")},
    recommendedProductIds: [],
    sections: [],
    faq: [],
    relatedGuideSlugs: [],
  },`);
  }
}

// cross-article check within this batch: product-set Jaccard
const sets = mods.map((m) => new Set(m.products.map((p) => p.asin)));
for (let i = 0; i < mods.length; i++) for (let j = i + 1; j < mods.length; j++) {
  const inter = [...sets[i]].filter((x) => sets[j].has(x)).length;
  const jac = inter / (sets[i].size + sets[j].size - inter);
  if (jac >= 0.34) errors.push(`overlap ${mods[i].slug} vs ${mods[j].slug}: Jaccard ${jac.toFixed(2)} (${inter} shared)`);
}

if (errors.length) { console.log("ERRORS:\n" + errors.join("\n")); }
console.log(`${registry.length}/${mods.length} guides written`);
if (registry.length && process.argv[4] === "--register") {
  let reg = readFileSync("data/guides.ts", "utf8");
  const idx = reg.lastIndexOf("];");
  reg = reg.slice(0, idx) + registry.join("\n") + "\n" + reg.slice(idx);
  writeFileSync("data/guides.ts", reg);
  console.log("registered " + registry.length);
}
