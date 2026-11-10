// Depth check for Best guides. Usage: npx tsx scripts/depth-check.mjs <slug> [slug...]
// Fails (exit 1) when any section is below the minimum depth agreed for RV Gear Lab.
import { pathToFileURL } from "node:url";
import path from "node:path";

const W = (s = "") => String(s).split(/\s+/).filter(Boolean).length;
const DASH = /[–—]/;
const LEAK = /\b(we (tested|tried|measured|saw|reviewed|found)|in our lab|the (listing|excerpt|bullets|facts|pool|candidates)\b|not (listed|stated) in|facts provided|seller says)/i;

let bad = 0;
for (const slug of process.argv.slice(2)) {
  const m = await import(pathToFileURL(path.resolve(`data/guides/${slug}.ts`)).href);
  const errs = [];
  const all = JSON.stringify(m);
  if (DASH.test(all)) errs.push("contains em/en dash");
  const leak = all.match(LEAK); if (leak) errs.push(`process/testing leak: "${leak[0]}"`);
  const intro = (m.introParagraphs ?? []).join(" ");
  if ((m.introParagraphs ?? []).length < 3 || W(intro) < 150) errs.push(`intro ${W(intro)}w/${(m.introParagraphs ?? []).length}p (need >=3 paragraphs, >=150w)`);
  for (const p of m.products ?? []) {
    if (W(p.description) < 120 || p.description.split(/\n\n/).length < 2) errs.push(`product ${p.id} description ${W(p.description)}w (need >=120w, 2-3 paragraphs)`);
    if ((p.pros ?? []).length < 3) errs.push(`product ${p.id} pros ${p.pros?.length} (need >=3)`);
    if ((p.cons ?? []).length < 2) errs.push(`product ${p.id} cons ${p.cons?.length} (need >=2)`);
    if (W(p.bestFor) < 4) errs.push(`product ${p.id} bestFor too short`);
  }
  const bc = m.buyingCriteria ?? [];
  if (bc.length < 5) errs.push(`buyingCriteria ${bc.length} (need >=5)`);
  bc.forEach((c, i) => W(c.explanation) < 60 && errs.push(`criterion ${i + 1} ${W(c.explanation)}w (need >=60)`));
  const he = m.howWeEvaluated ?? [];
  if (he.length < 4) errs.push(`howWeEvaluated ${he.length} (need >=4)`);
  he.forEach((c, i) => W(c.description) < 35 && errs.push(`howWeEvaluated ${i + 1} ${W(c.description)}w (need >=35)`));
  const hc = m.howToChoose ?? [];
  if (hc.length < 6) errs.push(`howToChoose ${hc.length} sections (need 6)`);
  hc.forEach((s, i) => {
    if (W(s.intro) < 25) errs.push(`howToChoose ${i + 1} intro ${W(s.intro)}w (need >=25)`);
    (s.table?.rows ?? []).forEach((r, j) => W(r.join(" ")) < 10 && errs.push(`howToChoose ${i + 1} row ${j + 1} too thin (${W(r.join(" "))}w, need >=10)`));
    (s.cards ?? []).forEach((c, j) => W(c.text) < 30 && errs.push(`howToChoose ${i + 1} card ${j + 1} ${W(c.text)}w (need >=30)`));
  });
  const faq = m.faq ?? [];
  if (faq.length < 5) errs.push(`faq ${faq.length} (need >=5)`);
  faq.forEach((f, i) => W(f.a) < 45 && errs.push(`faq ${i + 1} answer ${W(f.a)}w (need >=45)`));
  const bl = m.bottomLine ?? [];
  if (bl.length < 2 || W(bl.join(" ")) < 80) errs.push(`bottomLine ${W(bl.join(" "))}w (need 2 paragraphs, >=80w)`);
  const md = m.metaDescription ?? "";
  if (md.length < 120 || md.length > 160) errs.push(`metaDescription ${md.length} chars (need 120-160)`);
  if ((m.relatedGuides ?? []).length < 2) errs.push("relatedGuides < 2");
  const total = W(all.replace(/https?:[^"]+/g, ""));
  console.log(`${errs.length ? "FAIL" : "PASS"} ${slug} (~${total} words)`);
  errs.forEach((e) => console.log("   - " + e));
  if (errs.length) bad++;
}
process.exit(bad ? 1 : 0);
