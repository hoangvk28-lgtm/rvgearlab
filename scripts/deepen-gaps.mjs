// Find and export ONLY the thin spots of a guide, for additive deepening.
// Usage:
//   node scripts/deepen-gaps.mjs --audit <out.json>              # rank every guide by thinness
//   node scripts/deepen-gaps.mjs --tasks <outDir> <slug> [...]   # per-slug task file for an agent
//
// A task file carries just the three places worth adding to: product descriptions
// under DESC_MIN words, FAQ answers under FAQ_MIN words, and Decision guide
// sub-sections under HTC_MIN words. Everything already thick is left out, so the
// agent never pays input tokens to read text it will not change.
import fs from "node:fs";
import path from "node:path";

const DESC_MIN = 130;   // words per product description
const FAQ_MIN = 45;     // words per answer
const HTC_MIN = 55;     // words per Decision guide sub-section

const wc = (t) => (String(t).match(/[A-Za-z0-9][\w'’.$%-]*/g) || []).length;
function locate(src, name) {
  const m = new RegExp(`^export const ${name}[^=]*=\\s*`, "m").exec(src);
  if (!m) return null;
  const rest = src.slice(m.index + m[0].length);
  const end = rest.search(/\n(export|$)/);
  return (end === -1 ? rest : rest.slice(0, end)).replace(/;\s*$/, "");
}
const J = (src, name) => { const b = locate(src, name); if (!b) return null; try { return JSON.parse(b); } catch { return undefined; } };

function read(slug) {
  const p = `data/guides/${slug}.ts`;
  if (!fs.existsSync(p)) return null;
  const src = fs.readFileSync(p, "utf8");
  const products = J(src, "products");
  if (!products) return { slug, legacy: true };
  return { slug, src, products, faq: J(src, "faq") || [], htc: J(src, "howToChoose") || [],
    title: (/^export const guideTitle = ("(?:[^"\\]|\\.)*");/m.exec(src) || [])[1],
    keyword: (/^export const mainKeyword = ("(?:[^"\\]|\\.)*");/m.exec(src) || [])[1] };
}

const mode = process.argv[2];
if (mode === "--audit") {
  const rows = [];
  for (const f of fs.readdirSync("data/guides").filter((x) => x.endsWith(".ts"))) {
    const g = read(f.slice(0, -3));
    if (!g || g.legacy) continue;
    const thinDesc = g.products.filter((p) => wc(p.description) < DESC_MIN).length;
    const thinFaq = g.faq.filter((e) => wc(e.a) < FAQ_MIN).length;
    const thinHtc = g.htc.filter((s) => wc(JSON.stringify(s)) < HTC_MIN).length;
    rows.push({ slug: g.slug, products: g.products.length, thinDesc, thinFaq, thinHtc,
      faqN: g.faq.length,
      descWords: g.products.reduce((a, p) => a + wc(p.description), 0),
      faqWords: wc(JSON.stringify(g.faq)), htcWords: wc(JSON.stringify(g.htc)),
      gapScore: thinDesc * 60 + thinFaq * 35 + thinHtc * 40 });
  }
  rows.sort((a, b) => b.gapScore - a.gapScore);
  fs.writeFileSync(process.argv[3], JSON.stringify(rows, null, 1));
  console.log(`audited ${rows.length} guides -> ${process.argv[3]}`);
  console.log(`thin product descriptions (<${DESC_MIN}w): ${rows.reduce((a, r) => a + r.thinDesc, 0)} across ${rows.filter((r) => r.thinDesc).length} guides`);
  console.log(`thin faq answers (<${FAQ_MIN}w): ${rows.reduce((a, r) => a + r.thinFaq, 0)} across ${rows.filter((r) => r.thinFaq).length} guides`);
  console.log(`thin decision-guide sections (<${HTC_MIN}w): ${rows.reduce((a, r) => a + r.thinHtc, 0)} across ${rows.filter((r) => r.thinHtc).length} guides`);
} else if (mode === "--tasks") {
  const outDir = process.argv[3];
  fs.mkdirSync(outDir, { recursive: true });
  let n = 0;
  for (const slug of process.argv.slice(4)) {
    const g = read(slug);
    if (!g || g.legacy) { console.error(`SKIP ${slug}: missing or legacy product shape`); continue; }
    const task = {
      slug, guideTitle: g.title && JSON.parse(g.title), mainKeyword: g.keyword && JSON.parse(g.keyword),
      productNames: g.products.map((p) => p.name),
      needDescParagraph: g.products.filter((p) => wc(p.description) < DESC_MIN).map((p) => ({
        asin: /dp\/([A-Z0-9]{10})/.exec(p.amazonUrl)?.[1], name: p.name, price: p.price,
        specs: p.specs, pros: p.pros, cons: p.cons, words: wc(p.description),
        currentDescription: p.description })),
      needLongerAnswer: g.faq.filter((e) => wc(e.a) < FAQ_MIN).map((e) => ({ q: e.q, words: wc(e.a), currentAnswer: e.a })),
      faqCount: g.faq.length,
      needThickerSection: g.htc.filter((s) => wc(JSON.stringify(s)) < HTC_MIN).map((s) => ({
        subheading: s.subheading, words: wc(JSON.stringify(s)), currentIntro: s.intro || null,
        tableHeaders: s.table?.headers || null, rowCount: s.table?.rows?.length ?? null,
        cardLabels: s.cards?.map((c) => c.label) || null, hasNote: Boolean(s.note) })),
    };
    fs.writeFileSync(path.join(outDir, `${slug}.json`), JSON.stringify(task, null, 1));
    n++;
  }
  console.log(`wrote ${n} task files to ${outDir}`);
} else {
  console.error("usage: deepen-gaps.mjs --audit <out.json> | --tasks <outDir> <slug>...");
  process.exit(1);
}
