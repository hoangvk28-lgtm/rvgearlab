// Depth gate for writer prose JSON (CLAUDE.md §17 "full depth"). Usage: node scripts/check-prose-depth.mjs <prose-dir>
import { readFileSync, readdirSync } from "fs";
const dir = process.argv[2];
const sents = (s) => (String(s).match(/[^.!?]+[.!?]+/g) || []).length;
let bad = 0;
for (const f of readdirSync(dir).filter((x) => x.endsWith(".json"))) {
  const d = JSON.parse(readFileSync(dir + "/" + f, "utf8"));
  const h = d.howToChoose || {};
  const parts = [...(d.intro || []), ...(d.products || []).flatMap((p) => p.d || []), ...(d.criteria || []).map((c) => c.explanation), ...(d.howWeEvaluated || []).map((x) => x.description), JSON.stringify(h), ...(d.faq || []).flatMap((q) => [q.q, q.a])];
  const total = parts.join(" ").length;
  const issues = [];
  if (total < 11000) issues.push(`total ${total} < 11000`);
  const shortD = (d.products || []).flatMap((p) => p.d || []).filter((x) => sents(x) < 2).length;
  if (shortD) issues.push(`${shortD} d-paragraphs < 2 sentences`);
  const shortC = (d.criteria || []).filter((c) => sents(c.explanation) < 4).length;
  if (shortC) issues.push(`${shortC} criteria < 4 sentences`);
  const shortF = (d.faq || []).filter((q) => sents(q.a) < 3).length;
  if (shortF) issues.push(`${shortF} faq answers < 3 sentences`);
  if ((d.faq || []).length < 5) issues.push("faq < 5");
  console.log(`${issues.length ? "FAIL" : "ok  "} ${f.replace(/\.json$/, "").padEnd(48)} ${total}${issues.length ? "  " + issues.join("; ") : ""}`);
  if (issues.length) bad++;
}
process.exitCode = bad ? 1 : 0;
