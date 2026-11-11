// Build a SLIM facts file per slug for a deepening agent.
// Usage: node scripts/deepen-facts.mjs <outDir> <slug> [slug...]
//
// Why slim: a deepening agent rewrites every editorial field and every product
// description from scratch, so shipping it the guide's current prose costs input
// tokens for text it will discard. This emits only the mined product facts it
// cannot invent (name, asin, price, specs, pros, cons) plus the current meta, at
// roughly a tenth of the size of a full content dump.
import fs from "node:fs";
import path from "node:path";

const [outDir, ...slugs] = process.argv.slice(2);
if (!outDir || !slugs.length) {
  console.error("usage: deepen-facts.mjs <outDir> <slug> [slug...]");
  process.exit(1);
}
fs.mkdirSync(outDir, { recursive: true });

function blk(src, name) {
  const m = new RegExp(`^export const ${name}[^=]*=\\s*`, "m").exec(src);
  if (!m) return null;
  const rest = src.slice(m.index + m[0].length);
  const end = rest.search(/\n(export|$)/);
  return rest.slice(0, end === -1 ? undefined : end).replace(/;\s*$/, "");
}
const str = (src, name) => {
  const m = new RegExp(`^export const ${name} = ("(?:[^"\\\\]|\\\\.)*");`, "m").exec(src);
  return m ? JSON.parse(m[1]) : null;
};

let n = 0;
for (const slug of slugs) {
  const p = `data/guides/${slug}.ts`;
  if (!fs.existsSync(p)) { console.error(`SKIP ${slug}: no such guide`); continue; }
  const src = fs.readFileSync(p, "utf8");
  const products = JSON.parse(blk(src, "products"));
  const out = {
    slug,
    guideTitle: str(src, "guideTitle"),
    mainKeyword: str(src, "mainKeyword"),
    currentMetaTitle: str(src, "metaTitle"),
    products: products.map((x) => ({
      asin: /dp\/([A-Z0-9]{10})/.exec(x.amazonUrl)?.[1] ?? null,
      name: x.name,
      price: x.price,
      specs: x.specs ?? [],
      pros: x.pros ?? [],
      cons: x.cons ?? [],
    })),
  };
  fs.writeFileSync(path.join(outDir, `${slug}.json`), JSON.stringify(out, null, 1));
  n++;
}
console.log(`wrote ${n} facts files to ${outDir}`);
