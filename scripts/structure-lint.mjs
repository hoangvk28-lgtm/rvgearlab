// Catch repeated SENTENCE STRUCTURE, which the 8-word duplicate check cannot see.
// Usage:
//   node scripts/structure-lint.mjs <dir>              # a patch dir or a content dir
//   node scripts/structure-lint.mjs --guides <slug>... # the live data/guides files
//
// Two guides can share no 8-word run and still read as one template: every product
// paragraph closing on "It suits owners who...", every comparison opening on
// "Against the...". This reports, per batch:
//   1. three-word sentence openers used more than MAX_OPENER times
//   2. template families (buyer-closer, comparison opener, bare "It is", spec-first)
//      used in more than MAX_SHARE of paragraphs
// Rewrite the sentences it names; do not relax the thresholds.
import fs from "node:fs";
import path from "node:path";

const MAX_OPENER = 2;   // uses of one 3-word opener per batch
const MAX_SHARE = 0.15; // share of paragraphs one template family may occupy

const SPLIT = /(?<=[.!?]["%)\]]?)\s+(?=[A-Z0-9"(])/;
const FAMILY = {
  "buyer-closer": /^(it (suits|is (the|a) (pick|option|choice|one)|fits|works best|earns|covers)|that (suits|makes it)|this (suits|is the))/i,
  "comparison-opener": /^(against|compared (with|to)|next to|versus|where the)/i,
  "bare-it-is": /^it is /i,
  "spec-first": /^(a|an|the) [0-9]/i,
};

function textsFromPatch(p) {
  return [
    ...Object.values(p.descAdd || {}),
    ...Object.values(p.faqA || {}),
    ...(p.faqAdd || []).map((e) => e.a),
    ...(p.htc || []).map((s) => [s.intro, s.note].filter(Boolean).join(" ")),
  ];
}
function textsFromContent(c) {
  return [
    ...(c.products || []).map((x) => x.description || ""),
    ...(c.introParagraphs || []),
    ...(c.faq || []).map((e) => e.a),
    ...(c.buyingCriteria || []).map((e) => e.explanation),
  ];
}

const args = process.argv.slice(2);
let batch = [];
if (args[0] === "--guides") {
  function locate(src, name) {
    const m = new RegExp(`^export const ${name}[^=]*=\\s*`, "m").exec(src);
    if (!m) return null;
    const rest = src.slice(m.index + m[0].length);
    const end = rest.search(/\n(export|$)/);
    return (end === -1 ? rest : rest.slice(0, end)).replace(/;\s*$/, "");
  }
  for (const slug of args.slice(1)) {
    const src = fs.readFileSync(`data/guides/${slug}.ts`, "utf8");
    const b = locate(src, "products");
    let ps; try { ps = JSON.parse(b); } catch { console.error(`SKIP ${slug}: legacy product shape`); continue; }
    batch.push({ name: slug, texts: ps.map((p) => p.description || "") });
  }
} else {
  const dir = args[0];
  if (!dir) { console.error("usage: structure-lint.mjs <dir> | --guides <slug>..."); process.exit(1); }
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json"))) {
    const o = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    batch.push({ name: f.replace(/\.json$/, ""), texts: o.descAdd || o.faqA || o.htc ? textsFromPatch(o) : textsFromContent(o) });
  }
}

const openers = new Map();
const families = {};
let paragraphs = 0, sentences = 0;
for (const { name, texts } of batch) {
  for (const t of texts) {
    for (const para of String(t).split("\n\n")) {
      const ss = para.split(SPLIT).map((s) => s.trim()).filter(Boolean);
      if (!ss.length) continue;
      paragraphs++;
      sentences += ss.length;
      for (const s of ss) {
        const w = s.split(/\s+/);
        if (w.length >= 4) {
          const key = w.slice(0, 3).join(" ").toLowerCase().replace(/[^a-z0-9 ]/g, "");
          if (!openers.has(key)) openers.set(key, []);
          openers.get(key).push({ slug: name, s });
        }
        for (const [fam, rx] of Object.entries(FAMILY)) {
          if (rx.test(s)) (families[fam] = families[fam] || []).push({ slug: name, s });
        }
      }
    }
  }
}

let problems = 0;
console.log(`${batch.length} files, ${paragraphs} paragraphs, ${sentences} sentences\n`);
const overused = [...openers.entries()].filter(([, v]) => v.length > MAX_OPENER).sort((a, b) => b[1].length - a[1].length);
if (overused.length) {
  console.log(`Overused 3-word openers (max ${MAX_OPENER} per batch):`);
  for (const [k, v] of overused) {
    problems += v.length - MAX_OPENER;
    console.log(`  ${String(v.length).padStart(3)}x "${k}"  ->  ${[...new Set(v.map((x) => x.slug))].slice(0, 6).join(", ")}`);
    console.log(`        e.g. ${v[0].s.slice(0, 100)}`);
  }
  console.log("");
}
for (const [fam, v] of Object.entries(families)) {
  const share = v.length / Math.max(1, paragraphs);
  const over = share > MAX_SHARE;
  if (over) problems += v.length - Math.floor(MAX_SHARE * paragraphs);
  console.log(`${over ? "OVER " : "ok   "} ${fam}: ${v.length} uses, ${(share * 100).toFixed(0)}% of paragraphs (limit ${Math.round(MAX_SHARE * 100)}%)`);
  if (over) for (const x of v.slice(0, 8)) console.log(`        ${x.slug}: ${x.s.slice(0, 95)}`);
}
console.log(`\n${problems === 0 ? "clean" : problems + " sentences need rewriting"}`);
process.exit(problems === 0 ? 0 : 1);
