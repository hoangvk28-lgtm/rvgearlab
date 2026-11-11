// Report what a deepened guide will ACTUALLY render, before it is merged.
// Usage: node scripts/deepen-lint.mjs <contentDir> [slug...]
//
// components/guide/editorial/GuideProductPick.tsx drops any sentence in a product
// `description` that matches its LIMITATION regex. A file can therefore pass tsc,
// merge cleanly and still lose a few hundred words at render time. This prints the
// rendered word count per slug, every sentence that would be dropped (fix those by
// rewriting, never by weakening the regex), and any 8-word run shared between two
// files in the batch.
import fs from "node:fs";
const LIMITATION = /\b(caveat|catch|downside|drawback|limitation|trade-?off|weak(er|ness)?|lacks?|lacking|missing|omit(s|ted)?|not (listed|stated|named|given|included|specified|published|clear|mentioned|confirmed)|does ?n[o']t|doesn't|is ?n[o']t|isn't|cannot|can't|no (stated|listed|published|named|warranty|gauge|app|remote|display)|leaves? out|thin(ner)? (spec|listing|detail)|costs? (more|extra)|pricier|more expensive|heavier|bulkier|louder|shorter|smaller|fewer|less (detail|info|document)|confirm|verify|check (the|with|before)|ask the seller|skip (it|this)|however|unfortunately|though|although|but|only|twice|double|premium|treat (it|the|this)|listing claim|cut off|before (buying|ordering|you buy)|read the|be aware|keep in mind|watch (for|out))\b/i;
const SPLIT = /(?<=[.!?]["')\]]?)\s+(?=[A-Z0-9"'(])/;
const wc = (t) => (t.match(/[A-Za-z0-9][\w'’.$%-]*/g) || []).length;
const dir = process.argv[2];
const files = process.argv.slice(3).length ? process.argv.slice(3).map(s=>s+".json") : fs.readdirSync(dir).filter(f=>f.endsWith(".json"));
const texts = {};
for (const f of files) {
  const c = JSON.parse(fs.readFileSync(`${dir}/${f}`, "utf8"));
  let rendered = 0, dropped = 0, samples = [];
  for (const p of c.products) for (const para of (p.description||"").split("\n\n")) for (const s of para.split(SPLIT)) {
    if (!s.trim()) continue;
    if (LIMITATION.test(s)) { dropped++; if (samples.length<2) samples.push(s.trim().slice(0,70)); } else rendered += wc(s);
  }
  const ed = ["introParagraphs","howWeEvaluated","howToChoose","buyingCriteria","faq","bottomLine"].map(k=>JSON.stringify(c[k]??"").replace(/"[a-zA-Z]+":/g," ")).join(" ");
  const other = JSON.stringify(c.products.map(p=>({n:p.name,s:p.specs,pr:p.pros,co:p.cons,b:p.bestFor})));
  const total = wc(ed)+rendered+wc(other);
  texts[f] = ed + " " + c.products.map(p=>p.description).join(" ");
  console.log(`${total>=3000?"OK ":"LOW"} ${f.replace(/\.json$/,"").padEnd(42)} rendered=${total} droppedSentences=${dropped}${samples.length?"  e.g. "+samples[0]:""}`);
}
// 8-word duplicate runs across files
const norm = (t)=>t.toLowerCase().replace(/[^a-z0-9 ]+/g," ").split(/\s+/).filter(Boolean);
const seen = new Map(); let dups=0;
for (const [f,t] of Object.entries(texts)) {
  const w = norm(t); const local=new Set();
  for (let i=0;i+8<=w.length;i++){ const g=w.slice(i,i+8).join(" "); if(local.has(g))continue; local.add(g);
    if(seen.has(g)&&seen.get(g)!==f){ if(dups<60)console.log("DUP8:",seen.get(g),"|",f,"|",g); dups++; } else seen.set(g,f); }
}
console.log("cross-file 8-word duplicate runs:", dups);
