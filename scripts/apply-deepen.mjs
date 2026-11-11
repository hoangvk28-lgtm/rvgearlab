// Merge a per-slug deepen content file into data/guides/<slug>.ts, mechanically.
// Usage: node scripts/apply-deepen.mjs <contentDir> [--pools <poolDir>] [--write]
// Content file: <contentDir>/<slug>.json
// Product facts (price/image/amazonUrl) come from the pool JSON or the existing guide file,
// never from the content file, so prose work can never corrupt product data.
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const contentDir = args[0];
const poolDir = args.includes("--pools") ? args[args.indexOf("--pools") + 1] : null;
const WRITE = args.includes("--write");
if (!contentDir) {
  console.error("usage: apply-deepen.mjs <contentDir> [--pools <dir>] [--write]");
  process.exit(1);
}

const LEAK = /not stated in the (text|facts)|the (excerpt|text|facts) we (saw|reviewed)|in the facts provided|not listed in the features|of the candidates we reviewed|the listing does not state|features we (saw|reviewed)|the pool\b/i;
const TESTED = /\bwe (tested|tried|measured)\b|in our lab|hands-on test/i;
const DASH = /[—–]/;
const TAG = "rvgearlab-amz-20";
const J = (v) => JSON.stringify(v, null, 2);

function existingBlock(src, name) {
  const m = new RegExp(`^export const ${name}\\b`, "m").exec(src);
  if (!m) return null;
  const rest = src.slice(m.index);
  const n = rest.slice(1).search(/^export (const|interface|type)/m);
  return n === -1 ? rest : rest.slice(0, n + 1);
}
function strOf(src, name) {
  const m = new RegExp(`^export const ${name} = ("(?:[^"\\\\]|\\\\.)*");`, "m").exec(src);
  return m ? JSON.parse(m[1]) : null;
}

const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".json"));
let fail = 0;
let ok = 0;
for (const f of files) {
  const slug = f.replace(/\.json$/, "");
  const c = JSON.parse(fs.readFileSync(path.join(contentDir, f), "utf8"));
  const guidePath = `data/guides/${slug}.ts`;
  const errs = [];
  if (!fs.existsSync(guidePath)) {
    console.error(`SKIP ${slug}: no existing guide file`);
    fail++;
    continue;
  }
  const src = fs.readFileSync(guidePath, "utf8");

  // --- product facts: pool first, else existing file ---
  const facts = {};
  const poolFile = poolDir && path.join(poolDir, slug + ".json");
  if (poolFile && fs.existsSync(poolFile)) {
    for (const p of JSON.parse(fs.readFileSync(poolFile, "utf8")).picks) {
      facts[p.asin] = {
        price: `$${Number(p.price).toFixed(2)}`,
        imageUrl: p.imageUrl,
        amazonUrl: `https://www.amazon.com/dp/${p.asin}?tag=${TAG}`,
      };
    }
  }
  const prodBlk = existingBlock(src, "products") || "";
  for (const m of prodBlk.matchAll(/\{[\s\S]*?\n {2}\}/g)) {
    const o = m[0];
    const a = /\/dp\/([A-Z0-9]{10})/.exec(o);
    if (!a) continue;
    const img = /"?imageUrl"?:\s*"([^"]+)"/.exec(o);
    const pr = /"?price"?:\s*"([^"]+)"/.exec(o);
    facts[a[1]] = {
      price: facts[a[1]]?.price ?? (pr && pr[1]),
      imageUrl: facts[a[1]]?.imageUrl ?? (img && img[1]),
      amazonUrl: `https://www.amazon.com/dp/${a[1]}?tag=${TAG}`,
    };
  }

  // --- build products[] ---
  const products = (c.products || []).map((p, i) => {
    const fx = facts[p.asin];
    if (!fx) errs.push(`product ${p.asin}: no price/image facts (not in pool or existing file)`);
    if (fx && !fx.imageUrl) errs.push(`product ${p.asin}: missing imageUrl`);
    if (!p.specs?.length) errs.push(`product ${p.asin}: specs is empty`);
    if ((p.pros || []).length < 3) errs.push(`product ${p.asin}: needs 3-4 pros`);
    const paras = (p.description || "").split("\n\n").filter((x) => x.trim().length > 20);
    if (paras.length < 2) errs.push(`product ${p.asin}: description needs 2-3 paragraphs`);
    return {
      id: `${slug}-${i + 1}`,
      rank: i + 1,
      badge: p.badge || "",
      name: p.name,
      price: fx?.price ?? null,
      rating: null,
      reviews: null,
      imageUrl: fx?.imageUrl ?? "",
      amazonUrl: fx?.amazonUrl ?? "",
      description: p.description,
      specs: p.specs,
      pros: p.pros,
      cons: p.cons,
      bestFor: p.bestFor || "",
    };
  });
  if (products.length < 4) errs.push(`only ${products.length} products (need 5-6)`);

  // --- editorial checks ---
  const metaTitle = c.metaTitle ?? strOf(src, "metaTitle");
  const metaDescription = c.metaDescription ?? strOf(src, "metaDescription");
  if (metaTitle && metaTitle.length + 14 > 60) errs.push(`metaTitle ${metaTitle.length} chars: +14 suffix exceeds 60`);
  if (metaDescription && (metaDescription.length < 120 || metaDescription.length > 160)) {
    errs.push(`metaDescription ${metaDescription.length} chars (need 120-160)`);
  }
  if (!c.bottomLine) errs.push("missing bottomLine");
  else if (!Array.isArray(c.bottomLine) || c.bottomLine.some((x) => typeof x !== "string")) {
    errs.push("bottomLine must be an array of paragraph strings (RichGuidePage calls .map() on it)");
  } else if (c.bottomLine.length < 2) errs.push("bottomLine needs 2+ paragraphs");
  if ((c.faq || []).length < 5 || (c.faq || []).length > 6) errs.push(`faq has ${(c.faq || []).length} entries (need 5-6)`);
  for (const q of c.faq || []) if (!q.q || !q.a) errs.push("faq entry must use { q, a }");
  if ((c.howToChoose || []).length !== 6) errs.push(`howToChoose has ${(c.howToChoose || []).length} sub-sections (need exactly 6)`);
  const heads = (c.howToChoose || []).map((s) => s.subheading);
  if (new Set(heads).size !== heads.length) errs.push("howToChoose has duplicate subheadings");
  if ((c.buyingCriteria || []).length < 5) errs.push(`buyingCriteria has ${(c.buyingCriteria || []).length} (need 5-6)`);
  for (const b of c.buyingCriteria || []) {
    if ((b.explanation || "").split(/[.!?]\s/).length < 3) errs.push(`buyingCriteria "${b.criterion}": needs 3-4 sentences`);
  }

  // every howToChoose row/card must resolve to a real product name
  const names = products.map((p) => p.name).filter(Boolean);
  const resolves = (t) =>
    names.some((n) => t.includes(n) || t.includes(n.split(/\s+/).slice(0, 2).join(" ")));
  for (const s of c.howToChoose || []) {
    for (const row of s.table?.rows || []) {
      if (!row.some(resolves)) errs.push(`howToChoose "${s.subheading}": row names no real pick: ${row[0]}`);
    }
    for (const card of s.cards || []) {
      if (!resolves(card.text)) errs.push(`howToChoose "${s.subheading}": card "${card.label}" names no real pick`);
    }
  }

  // forbidden language
  const allText = J({ ...c, products: undefined }) + J(c.products || []);
  if (DASH.test(allText)) errs.push("contains an em dash or en dash");
  if (TESTED.test(allText)) errs.push('contains a hands-on testing claim ("we tested/tried/measured")');
  if (LEAK.test(allText)) errs.push("contains a drafting-process leak phrase");
  for (const p of c.products || []) {
    if (/caveat|however|but it|though|lacks|only has|does not|verify/i.test(p.description)) {
      errs.push(`product ${p.asin}: limitation sentence in description (move it to cons)`);
    }
  }

  const edChars = ["introParagraphs", "howWeEvaluated", "howToChoose", "buyingCriteria", "faq", "bottomLine"]
    .map((k) => J(c[k] ?? ""))
    .join("")
    .replace(/"[a-zA-Z]+":/g, "").length;
  if (edChars < 11000) errs.push(`editorial body only ${edChars} chars (target 13000-14500)`);

  if (errs.length) {
    console.error(`FAIL ${slug} (${edChars} ed chars)\n  - ${errs.join("\n  - ")}`);
    fail++;
    continue;
  }

  const relBlk = existingBlock(src, "relatedGuides");
  const relatedGuides = relBlk
    ? relBlk.replace(/^export const relatedGuides[^=]*=\s*/, "").replace(/;\s*$/, "").trim()
    : "[]";

  const out = `export const guideSlug = ${J(slug)};
export const guideTitle = ${J(c.guideTitle ?? strOf(src, "guideTitle"))};
export const metaTitle = ${J(metaTitle)};
export const metaDescription = ${J(metaDescription)};
export const mainKeyword = ${J(c.mainKeyword ?? strOf(src, "mainKeyword"))};
export const introParagraphs = ${J(c.introParagraphs)};
export const lastUpdated = ${J(new Date().toISOString().slice(0, 10))};
export const readTime = ${J(c.readTime ?? strOf(src, "readTime") ?? "12 min")};
export const heroImage = ${J(products[0]?.imageUrl ?? strOf(src, "heroImage"))};

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = ${J(products)};

export const howWeEvaluated = ${J(c.howWeEvaluated)};

export interface HowToChooseSection {
  subheading: string; intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = ${J(c.howToChoose)};

export const buyingCriteria = ${J(c.buyingCriteria)};

export const faq = ${J(c.faq)};

export const bottomLine = ${J(c.bottomLine)};

export const relatedGuides: { href: string; title: string }[] = ${relatedGuides};
`;
  if (WRITE) fs.writeFileSync(guidePath, out);
  console.log(`OK   ${slug}  products=${products.length} edChars=${edChars}${WRITE ? " WRITTEN" : " (dry run)"}`);
  ok++;
}
console.log(`\n${ok} ok, ${fail} failed`);
process.exit(fail ? 1 : 0);
