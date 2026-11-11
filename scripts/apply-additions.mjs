// Additive deepening: splice NEW text into an existing guide without rewriting it.
// Usage: node scripts/apply-additions.mjs <patchDir> [--write]
//
// Unlike scripts/apply-deepen.mjs (which regenerates the whole file from a full
// content JSON), this only ever ADDS: one more paragraph to a thin product
// description, longer FAQ answers or extra FAQ entries, and thicker Decision
// guide intros/rows. Product facts (asin, name, price, imageUrl, amazonUrl,
// specs, pros, cons, rank, badge) are never touched, and every other export in
// the file is left byte-for-byte alone.
//
// Patch file: <patchDir>/<slug>.json
// {
//   "descAdd": { "<ASIN>": "one new paragraph, 45-90 words" },
//   "bestFor": { "<ASIN>": "the use cases this pick is for, 6-16 words" },
//   "faqA":    { "<existing question, verbatim>": "longer answer, 3-5 sentences" },
//   "faqAdd":  [ { "q": "...", "a": "3-5 sentences" } ],
//   "htc":     [ { "subheading": "<existing subheading, verbatim>",
//                  "intro": "1-2 sentences", "note": "one line",
//                  "addRows": [ ["cell","cell","cell"] ] } ]
// }
// Every key is optional; omit what a guide does not need.
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const patchDir = args[0];
const WRITE = args.includes("--write");
if (!patchDir) { console.error("usage: apply-additions.mjs <patchDir> [--write]"); process.exit(1); }

const LEAK = /not stated in the (text|facts)|the (excerpt|text|facts) we (saw|reviewed)|in the facts provided|not listed in the features|of the candidates we reviewed|features we (saw|reviewed)|the pool\b/i;
const TESTED = /\bwe (tested|tried|measured)\b|in our lab|hands-on test/i;
const DASH = /[—–]/;
// mirrors components/guide/editorial/GuideProductPick.tsx
const LIMITATION = /\b(caveat|catch|downside|drawback|limitation|trade-?off|weak(er|ness)?|lacks?|lacking|missing|omit(s|ted)?|not (listed|stated|named|given|included|specified|published|clear|mentioned|confirmed)|does ?n[o']t|doesn't|is ?n[o']t|isn't|cannot|can't|no (stated|listed|published|named|warranty|gauge|app|remote|display)|leaves? out|thin(ner)? (spec|listing|detail)|costs? (more|extra)|pricier|more expensive|heavier|bulkier|louder|shorter|smaller|fewer|less (detail|info|document)|confirm|verify|check (the|with|before)|ask the seller|skip (it|this)|however|unfortunately|though|although|but|only|twice|double|premium|treat (it|the|this)|listing claim|cut off|before (buying|ordering|you buy)|read the|be aware|keep in mind|watch (for|out))\b/i;
const SPLIT = /(?<=[.!?]["')\]]?)\s+(?=[A-Z0-9"'(])/;
const wc = (t) => (t.match(/[A-Za-z0-9][\w'’.$%-]*/g) || []).length;

function locate(src, name) {
  const m = new RegExp(`^export const ${name}[^=]*=\\s*`, "m").exec(src);
  if (!m) return null;
  const start = m.index + m[0].length;
  const rest = src.slice(start);
  const end = rest.search(/\n(export|$)/);
  const raw = (end === -1 ? rest : rest.slice(0, end)).replace(/;\s*$/, "");
  return { start, end: start + raw.length, raw };
}

let ok = 0, fail = 0;
for (const file of fs.readdirSync(patchDir).filter((f) => f.endsWith(".json"))) {
  const slug = file.replace(/\.json$/, "");
  const guidePath = `data/guides/${slug}.ts`;
  const errs = [];
  if (!fs.existsSync(guidePath)) { console.error(`SKIP ${slug}: no such guide`); fail++; continue; }
  const patch = JSON.parse(fs.readFileSync(path.join(patchDir, file), "utf8"));
  let src = fs.readFileSync(guidePath, "utf8");

  const allNew = JSON.stringify(patch);
  if (DASH.test(allNew)) errs.push("contains an em dash or en dash");
  if (TESTED.test(allNew)) errs.push("contains a hands-on testing claim");
  if (LEAK.test(allNew)) errs.push("contains a drafting-process leak phrase");

  const edits = []; // [start, end, newText]
  let addedWords = 0;

  // ---- product descriptions: append one paragraph, facts untouched ----
  if ((patch.descAdd && Object.keys(patch.descAdd).length) || (patch.bestFor && Object.keys(patch.bestFor).length)) {
    const loc = locate(src, "products");
    if (!loc) errs.push("no products block");
    else {
      let products;
      try { products = JSON.parse(loc.raw); } catch { errs.push("products block is not plain JSON (legacy shape, needs a hand edit)"); }
      if (products) {
        const before = JSON.stringify(products.map((p) => ({ ...p, description: undefined, bestFor: undefined })));
        for (const [asin, para] of Object.entries(patch.descAdd || {})) {
          const p = products.find((x) => (x.amazonUrl || "").includes(asin));
          if (!p) { errs.push(`descAdd ${asin}: no such product in this guide`); continue; }
          const w = wc(para);
          if (w < 40 || w > 100) errs.push(`descAdd ${asin}: paragraph is ${w} words (need 45-90)`);
          for (const s of para.split(SPLIT)) {
            if (s.trim() && LIMITATION.test(s)) errs.push(`descAdd ${asin}: this sentence is dropped at render, rewrite it or move it to cons: "${s.trim().slice(0, 80)}"`);
          }
          if (p.description.includes(para.slice(0, 40))) { errs.push(`descAdd ${asin}: paragraph already present`); continue; }
          p.description = `${p.description}\n\n${para}`;
          addedWords += w;
        }
        for (const [asin, text] of Object.entries(patch.bestFor || {})) {
          const p = products.find((x) => (x.amazonUrl || "").includes(asin));
          if (!p) { errs.push(`bestFor ${asin}: no such product in this guide`); continue; }
          const w = wc(text);
          if (w < 5 || w > 18) errs.push(`bestFor ${asin}: ${w} words (need 6-16: the use cases, not a label)`);
          const badge = (p.badge || "").replace(/^Best\s+/i, "").trim().toLowerCase();
          if (badge && text.trim().toLowerCase() === badge) errs.push(`bestFor ${asin}: just repeats the badge`);
          if (/[.!?]$/.test(text.trim()) === false) errs.push(`bestFor ${asin}: should end with a period`);
          p.bestFor = text.trim();
        }
        const after = JSON.stringify(products.map((p) => ({ ...p, description: undefined, bestFor: undefined })));
        if (before !== after) errs.push("product facts changed; this script may only add description and bestFor text");
        edits.push([loc.start, loc.end, JSON.stringify(products, null, 2)]);
      }
    }
  }

  // ---- faq: longer answers and extra entries ----
  if (patch.faqA || patch.faqAdd) {
    const loc = locate(src, "faq");
    if (!loc) errs.push("no faq block");
    else {
      let faq;
      try { faq = JSON.parse(loc.raw); } catch { errs.push("faq block is not plain JSON"); }
      if (faq) {
        for (const [q, a] of Object.entries(patch.faqA || {})) {
          const e = faq.find((x) => x.q === q);
          if (!e) { errs.push(`faqA: no entry with this question: "${q.slice(0, 60)}"`); continue; }
          const sents = a.split(SPLIT).filter((s) => s.trim()).length;
          if (sents < 3) errs.push(`faqA "${q.slice(0, 40)}": ${sents} sentences (need 3-5)`);
          if (wc(a) <= wc(e.a)) errs.push(`faqA "${q.slice(0, 40)}": new answer is not longer than the old one`);
          addedWords += wc(a) - wc(e.a);
          e.a = a;
        }
        for (const e of patch.faqAdd || []) {
          if (!e.q || !e.a) { errs.push("faqAdd entry must use { q, a }"); continue; }
          if (faq.some((x) => x.q === e.q)) { errs.push(`faqAdd: duplicate question "${e.q.slice(0, 50)}"`); continue; }
          const sents = e.a.split(SPLIT).filter((s) => s.trim()).length;
          if (sents < 3) errs.push(`faqAdd "${e.q.slice(0, 40)}": ${sents} sentences (need 3-5)`);
          faq.push({ q: e.q, a: e.a });
          addedWords += wc(e.a) + wc(e.q);
        }
        if (faq.length < 5 || faq.length > 6) errs.push(`faq would end with ${faq.length} entries (need 5-6)`);
        edits.push([loc.start, loc.end, JSON.stringify(faq, null, 2)]);
      }
    }
  }

  // ---- howToChoose: thicker intros, notes and extra rows ----
  if (patch.htc?.length) {
    const loc = locate(src, "howToChoose");
    if (!loc) errs.push("no howToChoose block");
    else {
      let htc;
      try { htc = JSON.parse(loc.raw); } catch { errs.push("howToChoose block is not plain JSON"); }
      if (htc) {
        const names = (() => {
          const pl = locate(src, "products");
          try { return JSON.parse(pl.raw).map((p) => p.name); } catch { return []; }
        })();
        const resolves = (t) => names.some((n) => t.includes(n) || t.includes(n.split(/\s+/).slice(0, 2).join(" ")));
        for (const s of patch.htc) {
          const sec = htc.find((x) => x.subheading === s.subheading);
          if (!sec) { errs.push(`htc: no sub-section called "${s.subheading}"`); continue; }
          if (s.intro) { if (wc(s.intro) <= wc(sec.intro || "")) errs.push(`htc "${s.subheading}": intro is not longer than the old one`); addedWords += wc(s.intro) - wc(sec.intro || ""); sec.intro = s.intro; }
          if (s.note) { addedWords += wc(s.note) - wc(sec.note || ""); sec.note = s.note; }
          for (const row of s.addRows || []) {
            if (!sec.table) { errs.push(`htc "${s.subheading}": has no table to add rows to`); break; }
            if (row.length !== sec.table.headers.length) { errs.push(`htc "${s.subheading}": row has ${row.length} cells, table has ${sec.table.headers.length} columns`); continue; }
            if (!row.some(resolves)) { errs.push(`htc "${s.subheading}": new row names no real pick: ${row[0]}`); continue; }
            sec.table.rows.push(row);
            addedWords += wc(row.join(" "));
          }
        }
        if (htc.length !== 6) errs.push(`howToChoose would have ${htc.length} sub-sections (need 6)`);
        edits.push([loc.start, loc.end, JSON.stringify(htc, null, 2)]);
      }
    }
  }

  if (!edits.length) errs.push("patch adds nothing");
  if (errs.length) { console.error(`FAIL ${slug}\n  - ${errs.join("\n  - ")}`); fail++; continue; }

  for (const [start, end, text] of edits.sort((a, b) => b[0] - a[0])) src = src.slice(0, start) + text + src.slice(end);
  if (WRITE) fs.writeFileSync(guidePath, src);
  console.log(`OK   ${slug}  +${addedWords} words${WRITE ? " WRITTEN" : " (dry run)"}`);
  ok++;
}
console.log(`\n${ok} ok, ${fail} failed`);
