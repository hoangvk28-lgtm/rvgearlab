#!/usr/bin/env node
// Post-build step for Cloudflare Pages. Runs after `next build` (output: "export").
//
// Writes:
//   out/_redirects                     from cloudflare/redirects.mjs (Pages limit: 2,000 static rules)
//   out/_headers                       from cloudflare/headers.txt
//   functions/guide/_guide-redirects.json
//       legacy /guide/<slug> -> /<silo>/<slug> map for functions/guide/[slug].js.
//       Built from the files actually present in out/, so it can only point at a page
//       that exists. Lives in a Function because ~3,000 guide redirects exceed the
//       _redirects limit.
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from "node:fs";
import path from "node:path";
import { redirects } from "../cloudflare/redirects.mjs";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, "$1")), "..");
const OUT = path.join(ROOT, "out");
if (!existsSync(OUT)) {
  console.error("out/ not found. Run `next build` first.");
  process.exit(1);
}

const SILOS = [
  "power-electrical", "water-plumbing", "towing-leveling", "rv-care", "interior-comfort", "camping-travel",
  "tents-shelter", "sleep-gear", "camp-kitchen", "camp-power", "camp-furniture", "campsite-gear",
  "packs-hiking", "clothing-footwear",
];

// next.config-style source -> _redirects source. ":path*" becomes a splat.
const toPagesPath = (p) => p.replace(/\/:path\*$/, "/*").replace(/:path\*/g, ":splat");
const toPagesDest = (p) => p.replace(/:path\*/g, ":splat");

const lines = [];
const guideMap = {};
for (const r of redirects) {
  if (r.has || r.missing) throw new Error(`Host/header-conditional redirect not supported in _redirects: ${r.source}`);
  const status = r.statusCode ?? (r.permanent ? 301 : 302);
  lines.push(`${toPagesPath(r.source)} ${toPagesDest(r.destination)} ${status}`);
  const m = r.source.match(/^\/guide\/([a-z0-9-]+)$/);
  if (m) guideMap[m[1]] = { to: r.destination, status };
}
if (lines.length > 2000) throw new Error(`_redirects has ${lines.length} rules; Cloudflare Pages allows 2,000.`);
writeFileSync(path.join(OUT, "_redirects"), lines.join("\n") + "\n");

{
  writeFileSync(path.join(OUT, "_headers"), readFileSync(path.join(ROOT, "cloudflare", "headers.txt"), "utf8"));
}

let guidePages = 0;
for (const silo of SILOS) {
  const dir = path.join(OUT, silo);
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".html")) continue;
    const slug = f.slice(0, -5);
    if (!guideMap[slug]) guideMap[slug] = { to: `/${silo}/${slug}`, status: 301 };
    guidePages++;
  }
}
mkdirSync(path.join(ROOT, "functions", "guide"), { recursive: true });
writeFileSync(path.join(ROOT, "functions", "guide", "_guide-redirects.json"), JSON.stringify(guideMap));

console.log(`_redirects: ${lines.length} rules; _headers written; /guide/<slug> map: ${Object.keys(guideMap).length} entries (${guidePages} silo pages).`);
