/**
 * Reusable IndexNow submitter. Notifies Bing + Yandex about new/changed URLs.
 *
 * Usage:
 *   node scripts/indexnow.mjs <slug1> <slug2> ...     # submit specific guide slugs
 *   node scripts/indexnow.mjs --auto                  # auto-detect from the last git commit
 *   node scripts/indexnow.mjs --auto --since=HEAD~5   # auto-detect since a specific ref
 *   node scripts/indexnow.mjs <slug> --dry-run        # print the URLs, submit nothing
 *
 * Content on this site lives at /<silo>/<slug>, never /guide/<slug> (that path
 * 308-redirects). Each slug's silo is resolved from its registry entry in
 * data/guides.ts, falling back to data/informational-guides*.ts, so the URLs
 * submitted here match what app/sitemap.ts advertises.
 *
 * Rate limit: 10,000 URLs per request.
 */
import { execSync } from "child_process";
import fs from "node:fs";

const HOST = "www.rvgearlab.com";
const KEY = process.env.INDEXNOW_KEY || "93cc4d00bcba4400ad7a916061dcef95";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const SILOS = new Set([
  "power-electrical", "water-plumbing", "towing-leveling", "rv-care",
  "interior-comfort", "camping-travel", "tents-shelter", "sleep-gear",
  "camp-kitchen", "camp-power", "camp-furniture", "campsite-gear",
  "packs-hiking", "clothing-footwear",
]);

/** slug -> silo, built once from the registry and the informational data. */
function buildSiloIndex() {
  const index = new Map();

  // data/guides.ts: { slug: "...", categorySlug: "...", subcategorySlug: "..." }
  const registry = fs.readFileSync("data/guides.ts", "utf8");
  const entryRe =
    /slug:\s*"([^"]+)"[\s\S]{0,400}?categorySlug:\s*"([^"]+)"[\s\S]{0,200}?subcategorySlug:\s*"([^"]+)"/g;
  for (const m of registry.matchAll(entryRe)) {
    const [, slug, categorySlug, subcategorySlug] = m;
    // Mirrors siloForGuide() in lib/migrated-silos.ts: subcategory wins, then category.
    const silo = SILOS.has(subcategorySlug)
      ? subcategorySlug
      : SILOS.has(categorySlug)
        ? categorySlug
        : undefined;
    if (silo && !index.has(slug)) index.set(slug, silo);
  }

  // Informational guides carry their silo directly.
  for (const file of [
    "data/informational-guides.ts",
    "data/informational-guides.camping.generated.ts",
  ]) {
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file, "utf8");
    for (const m of src.matchAll(/"slug":\s*"([^"]+)",\s*"silo":\s*"([^"]+)"/g)) {
      if (!index.has(m[1])) index.set(m[1], m[2]);
    }
  }

  return index;
}

function slugsFromGitDiff(sinceRef) {
  const range = sinceRef ?? "HEAD~1";
  let diffOutput;
  try {
    diffOutput = execSync(`git diff --name-status ${range} HEAD`, { encoding: "utf-8" });
  } catch {
    console.error(`Could not diff against ${range}, falling back to last commit only.`);
    diffOutput = execSync(`git show --name-status --format="" HEAD`, { encoding: "utf-8" });
  }

  const slugs = new Set();
  for (const line of diffOutput.split("\n")) {
    const match = line.match(/^[AM]\s+data\/guides\/(.+)\.ts$/);
    if (match) slugs.add(match[1]);
    const pageMatch = line.match(/^[AM]\s+app\/\(site\)\/[a-z-]+\/(.+)\/page\.tsx$/);
    if (pageMatch) slugs.add(pageMatch[1]);
  }
  return [...slugs];
}

const args = process.argv.slice(2);
const isAuto = args.includes("--auto");
const sinceArg = args.find((a) => a.startsWith("--since="));
const sinceRef = sinceArg ? sinceArg.split("=")[1] : undefined;
const isDryRun = args.includes("--dry-run");

let guideSlugs;
if (isAuto) {
  guideSlugs = slugsFromGitDiff(sinceRef);
  console.log(`Auto-detected ${guideSlugs.length} changed guide(s) from git diff.`);
} else {
  guideSlugs = args.filter((a) => !a.startsWith("--"));
}

if (guideSlugs.length === 0) {
  console.log("No guide URLs to submit. Exiting without pinging IndexNow.");
  process.exit(0);
}

const siloIndex = buildSiloIndex();
const urlList = [];
const unresolved = [];
for (const slug of guideSlugs) {
  const silo = siloIndex.get(slug);
  if (silo) urlList.push(`https://${HOST}/${silo}/${slug}`);
  else unresolved.push(slug);
}

if (unresolved.length) {
  // Submitting a guessed URL would send search engines to a 404, so skip instead.
  console.error(`Skipping ${unresolved.length} slug(s) with no silo in data/guides.ts:`);
  for (const s of unresolved) console.error(`  ${s}`);
}

if (urlList.length === 0) {
  console.log("No resolvable URLs. Exiting without pinging IndexNow.");
  process.exit(0);
}

if (urlList.length > 10000) {
  console.error(`${urlList.length} URLs exceeds the IndexNow per-request limit of 10,000.`);
  process.exit(1);
}

console.log(`${isDryRun ? "Would ping" : "Pinging"} IndexNow with ${urlList.length} URL(s):`);
for (const u of urlList) console.log(`  ${u}`);

if (isDryRun) {
  console.log("--dry-run: nothing submitted.");
  process.exit(0);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

if (res.ok) {
  console.log(`OK IndexNow accepted -- HTTP ${res.status}`);
  console.log(`  ${urlList.length} URL(s) submitted to Bing + Yandex`);
} else {
  const body = await res.text();
  console.error(`FAILED IndexNow rejected -- HTTP ${res.status}: ${body}`);
  process.exit(1);
}
