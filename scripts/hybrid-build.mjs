// Hybrid pipeline: merges a compact model-written JSON (reasoning prose only) with Stage A facts
// and script-built parts (title, metaTitle, specs, budget table, related links, product names, images)
// into scripts/p2-content/<slug>.mjs, ready for gen-p2-batch.mjs.
// Usage: node scripts/hybrid-build.mjs <facts-dir> <prose-dir> [slug,slug,...]
import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { resolve } from "path";

const [factsDir, proseDir, only] = process.argv.slice(2);
const slugs = only ? only.split(",") : readdirSync(proseDir).filter((f) => f.endsWith(".json")).map((f) => f.slice(0, -5));
// Live guides only: files still carrying the lastUpdated "2026-10-02" stub marker are treated as
// missing by gen-p2-batch, so linking to them fails validation.
const guides = new Set(readdirSync("data/guides").filter((f) => !readFileSync("data/guides/" + f, "utf8").includes('lastUpdated = "2026-10-02"')).map((f) => f.replace(/\.ts$/, "")));
const content = new Set(readdirSync("scripts/p2-content").map((f) => f.replace(/\.mjs$/, "")));
// Small words stay lowercase mid-title ("Composting Toilet for RV", not "For RV").
const titleCase = (s) => _titleCase(s).replace(/(?<=\S) (For|With|And|Or|Of|In|On|To|A|An|The|Vs) (?=\S)/g, (m) => m.toLowerCase());
const _titleCase = (s) => s.replace(/\b(rv|ac|dc|ems|ups|psi|tpms|mppt|pwm|cpap|bms|usb|lifepo4|wfco|tt)\b/gi, (m) => m.toUpperCase()).replace(/\b([a-z])/g, (m) => m.toUpperCase()).replace(/(\d+)Ah\b/i, "$1Ah").replace(/(\d+)wh\b/i, "$1Wh");
const wc = (s) => s.trim().split(/\s+/).length;
// slug -> silo for guides already in the registry (subcategorySlug is the silo for RV guides)
const REG_SILO = {};
for (const m of readFileSync("data/guides.ts", "utf8").matchAll(/slug: "([^"]+)",\s*categorySlug: "(?:rv|camping)",\s*subcategorySlug: "([^"]+)"/g)) REG_SILO[m[1]] = m[2];

function specsFor(p) {
  const out = [];
  for (const f of p.features || []) {
    const m = f.match(/^\s*[\[【]?\s*([A-Za-z0-9][^:\]】]{3,40}?)\s*[\]】:]/);
    if (m) { const lab = m[1].replace(/[^\w\s%./"+-]/g, "").trim(); if (wc(lab) >= 2 && wc(lab) <= 6 && !/^(the|our|this)\b/i.test(lab)) out.push(lab); }
    if (out.length >= 3) break;
  }
  const nums = [...(p.title.match(/\b\d[\d,.]*\s?(W|Watt|Wh|Ah|A|Amp|V|Volt|BTU|lb|lbs)\b/gi) || [])].slice(0, 2);
  if (out.length < 2 && nums.length) out.unshift(nums.join(", ") + " rated");
  while (out.length < 2) out.push(p.brand ? `${p.brand} brand listing` : "Listed on Amazon");
  return out.slice(0, 3).map((s) => (wc(s) > 6 ? s.split(/\s+/).slice(0, 6).join(" ") : wc(s) < 2 ? s + " listed" : s));
}

function metaTitleFor(kw) {
  const base = titleCase(kw.replace(/^best /, "Best "));
  for (const t of [`${base} in 2026`, `${base} (2026)`, base]) if (t.length <= 46) return t;
  return base.slice(0, 46).replace(/\s+\S*$/, "");
}

for (const slug of slugs) {
  const facts = JSON.parse(readFileSync(resolve(factsDir, slug + ".json"), "utf8"));
  const prose = JSON.parse(readFileSync(resolve(proseDir, slug + ".json"), "utf8"));
  const byAsin = Object.fromEntries(facts.picks.map((p) => [p.asin, p]));
  const products = prose.products.map((pp) => {
    const f = byAsin[pp.asin];
    if (!f) throw new Error(`${slug}: asin ${pp.asin} not in facts`);
    const name = f.title.split(/[,|(]| [–—-] /)[0].replace(/\s*[–—]\s*/g, " ").trim().slice(0, 110);
    return { asin: pp.asin, short: pp.short, name, badge: pp.badge, d: Array.isArray(pp.d) ? pp.d : String(pp.d).split(/\n\s*\n/).map((x) => x.trim()).filter(Boolean), specs: pp.specs && pp.specs.length ? pp.specs : specsFor(f), pros: pp.pros, cons: pp.cons, bestFor: pp.bestFor, price: f.price };
  });
  const n = products.length;
  const kwTitle = titleCase(facts.keyword.replace(/^best /, ""));
  // Budget table ordered by real prices, but labelled as relative bands: CLAUDE.md 7 forbids any
  // dollar figure in page copy (it goes stale and cannot be refreshed from the API).
  const sorted = [...products].sort((a, b) => a.price - b.price);
  const tiers = [];
  const chunk = Math.ceil(sorted.length / 3);
  const BANDS = ["Entry of this shortlist", "Mid of this shortlist", "Top of this shortlist"];
  for (let i = 0, b = 0; i < sorted.length; i += chunk, b++) {
    const g = sorted.slice(i, i + chunk);
    tiers.push([BANDS[b] || BANDS[2], g.map((x) => x.short).join(" or ")]);
  }
  // Related: same-cluster siblings that exist
  const cluster = facts.cluster;
  const sib = readFileSync(process.env.SLUGS || process.env.TEMP + "/claude/rv/p3all.txt", "utf8").split("\n").map((l) => l.trim().split("|")).filter(([c, s]) => c === cluster && s && s !== slug && (guides.has(s) || content.has(s))).map(([, s]) => s);
  const extra = [...guides].filter((g) => g !== slug && g.startsWith("best-") && [cluster.toLowerCase().replace(/ — .*$/, "").split(" ").filter((w) => w.length > 2 && !["rv", "gear", "camp", "camping"].includes(w)).pop()].filter(Boolean).some((w) => g.includes(w.replace(/s$/, ""))));
  const relSlugs = [...new Set([...sib, ...extra])].slice(0, 4);
  const SILO = { "RV Kitchen Gear": "interior-comfort", "RV Organization": "interior-comfort", "Trail Gear": "packs-hiking", "Camp Coffee and Cookware": "camp-kitchen", "Campsite Tools": "campsite-gear", "Trail Clothing": "clothing-footwear", "RV Bed and Bath": "interior-comfort", "RV Plumbing and Outlets": "water-plumbing", "RV Toilet Care": "water-plumbing", "RV Tires and Wheels": "towing-leveling", "RV Steps and Jacks": "towing-leveling", "RV Awning Care": "camping-travel", "RV Theft Protection": "towing-leveling", "Outdoor Cooking": "camp-kitchen", "Camp Sleep Comfort": "sleep-gear", "Camp Chairs": "camp-furniture", "Camp Hammocks": "camp-furniture", "Dog Camping Gear": "campsite-gear", "RV Cargo Racks": "towing-leveling", "Truck Towing Mirrors": "towing-leveling", "Camp Coolers": "camp-kitchen", "RV Storage": "interior-comfort", "RV Steps": "towing-leveling", "RV Awning Gear": "camping-travel", "RV Security": "towing-leveling", "Camp Griddles": "camp-kitchen", "Camp Sleep": "sleep-gear", "RV Racks": "towing-leveling", "Towing Mirrors": "towing-leveling", "Camping Dogs": "campsite-gear", "RV Toilets": "water-plumbing", "RV Tire Care": "towing-leveling", "RV Water Pressure Regulators": "water-plumbing", "RV Water Filters": "water-plumbing", "Weight Distribution Hitches": "towing-leveling", "Sway Control Hitches": "towing-leveling", "Trailer Brake Controllers": "towing-leveling", "RV TPMS": "towing-leveling", "Weight Distribution Hitches": "towing-leveling", "Heated RV Water Hoses": "water-plumbing", "RV Fresh Water Hoses": "water-plumbing", "RV Sewer Hose Fittings": "water-plumbing", "RV Sewer Hose Supports": "water-plumbing", "RV Sewer Hoses": "water-plumbing", "RV Water Heaters": "water-plumbing", "RV Water Pump Accumulators": "water-plumbing", "RV Water Pumps": "water-plumbing", "RV Water Filters — Incremental": "water-plumbing", "RV Water Pressure Regulators — Incremental": "water-plumbing", "RV Air Conditioners": "interior-comfort", "RV Space Heaters": "interior-comfort", "RV Cleaners": "rv-care", "RV Wash & Wax": "rv-care", "RV Roof Coatings": "rv-care", "RV Roof Sealants": "rv-care", "RV Roof Repair Tapes": "rv-care", "RV GPS & Navigation": "camping-travel", "RV WiFi Boosters": "camping-travel", "RV Mattresses": "interior-comfort", "RV Mattress Toppers": "interior-comfort", "RV Vent Fans": "interior-comfort", "RV Vent Covers": "interior-comfort", "RV Catalytic Heaters": "interior-comfort", "Camping Chairs": "camping-travel", "Zero Gravity Camping Chairs": "camping-travel", "RV Outdoor Rugs": "camping-travel", "RV Routers": "camping-travel", "RV Cell Signal Boosters": "camping-travel", "Electronic RV Levelers": "towing-leveling", "RV Leveling Blocks": "towing-leveling", "RV Wheel Chocks": "towing-leveling", "RV Covers": "rv-care", "Travel Trailer Covers": "rv-care" };
  const silo = SILO[cluster] || "power-electrical";
  if (relSlugs.length < 4) {
    // Fallback for first-in-cluster hubs: link other guides in the same silo from the slug list.
    const lines = readFileSync(process.env.SLUGS || process.env.TEMP + "/claude/rv/p3all.txt", "utf8").split("\n").map((l) => l.trim().split("|"));
    for (const [c, s2] of lines) if (relSlugs.length < 4 && s2 && s2 !== slug && !relSlugs.includes(s2) && (SILO[c] || "power-electrical") === silo && (guides.has(s2) || content.has(s2))) relSlugs.push(s2);
  }
  if (relSlugs.length < 3) {
    const words = slug.replace(/^best-/, "").split("-").filter((w) => w.length > 3 && w !== "rv");
    // Only link guides that are live: gen-p2-batch treats lastUpdated "2026-10-02" stubs as missing.
    const same = Object.keys(REG_SILO).filter((g) => g !== slug && REG_SILO[g] === silo && !relSlugs.includes(g) && guides.has(g) && !readFileSync("data/guides/" + g + ".ts", "utf8").includes('lastUpdated = "2026-10-02"'));
    same.sort((a, b) => words.filter((w) => b.includes(w)).length - words.filter((w) => a.includes(w)).length);
    for (const g of same) if (relSlugs.length < 3) relSlugs.push(g);
  }
  const slugCluster = Object.fromEntries(readFileSync(process.env.SLUGS || process.env.TEMP + "/claude/rv/p3all.txt", "utf8").split("\n").map((l) => l.trim().split("|")).filter(([c, x]) => x).map(([c, x]) => [x, c]));
  const siloOf = (x) => REG_SILO[x] || (slugCluster[x] && SILO[slugCluster[x]]) || silo;
  const related = relSlugs.map((s) => ({ title: titleCase(s.replace(/^best-/, "best ").replace(/-/g, " ")), href: `/${siloOf(s)}/${s}` }));

  const h = prose.howToChoose;
  const mod = {
    short: prose.short === "lite" ? "lite" : !!prose.short, silo, slug, title: `${n} Best ${kwTitle} in 2026`, metaTitle: metaTitleFor(facts.keyword), metaDescription: prose.metaDescription,
    keyword: facts.keyword, readTime: "10 min", intro: prose.intro,
    products: products.map(({ price, ...p }) => p),
    howWeEvaluated: prose.howWeEvaluated,
    howToChoose: [
      { subheading: h.primary.subheading, table: { headers: ["Your situation", "Recommended pick", "Why"], rows: h.primary.rows } },
      { subheading: "By Budget", table: { headers: ["Budget", "Recommended pick"], rows: tiers } },
      { subheading: h.tradeoff.subheading, cards: [h.tradeoff.a, h.tradeoff.b], note: h.tradeoff.note },
      { subheading: h.axis2.subheading, table: { headers: [h.axis2.header, "Recommended pick"], rows: h.axis2.rows } },
      { subheading: h.useCase.subheading, cards: [{ label: "Look for", text: h.useCase.lookFor }, { label: "In this comparison", text: h.useCase.inComparison }] },
      { subheading: "When to Spend More", cards: [{ label: "Spend more if", text: h.spendMore }, { label: "Save if", text: h.save }] },
    ],
    criteria: prose.criteria, faq: prose.faq, related,
  };
  writeFileSync(`scripts/p2-content/${slug}.mjs`, "export default " + JSON.stringify(mod, null, 2) + ";\n");
  console.log(`built ${slug} (${n} picks, metaTitle ${mod.metaTitle.length}ch, related ${related.length})`);
}
