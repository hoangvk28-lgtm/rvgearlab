# Budget batch brief — RV Gear Lab

You write NEW "best budget / under $X" guides. The products are already chosen for you; you write
the editorial content module for each slug.

## Cost rules
1. No generator script, no templating layer, no hand-rolled validator. Write each module directly.
2. The repo validates: `node scripts/gen-p2-batch.mjs <POOL_DIR> <CONTENT_DIR>` (no `--register`).
   Run it, fix what it reports, re-run. That is the only check that counts.
3. Also run `node scripts/structure-lint.mjs <CONTENT_DIR>` and fix what it names.
4. Read only your facts files and this brief. No WebSearch. Do not read `data/guides/*.ts`.
5. Do not re-read a module you just wrote.

## Input
`FACTS_DIR/<slug>.json` gives the slug, its product group, its assigned **angle**, its price ceiling,
and the 6 picks with asin, name, price, specs, pros and cons. Those are all the product facts that
exist. Never invent a spec, a BTU figure, a tongue weight rating, a certification or a capacity.

## Output: `CONTENT_DIR/<slug>.mjs`
An ES module with a default export:

```js
export default {
  slug: "<slug>",
  title: "N Best ... in 2026",            // N = number of picks
  metaTitle: "...",                        // 46 chars max
  metaDescription: "...",                  // 120-160 chars
  intro: ["para 1", "para 2", "para 3"],   // 90-130 words each
  products: [{
    asin: "<from facts, same order>",
    name: "<from facts>",
    short: "Brand Model",                  // 2-3 words, must appear in howToChoose rows
    badge: "Best Overall",                 // unique within the guide
    bestFor: "Concrete uses or buyer, 6-16 words, ending in a period.",
    d: ["para 1", "para 2", "para 3"],     // 55-85 words each
    specs: ["2-9 words", ...],             // 3 items
    pros: ["2-14 words", ...],             // 3-4 items
    cons: ["2-14 words", ...],             // 2-3 items
  }],
  howWeEvaluated: [{ title, description }],  // 5 entries, 3-4 sentences each
  buyingCriteria: [{ criterion, explanation }], // 6 entries, 4-5 sentences each
  howToChoose: [ ...6 sections... ],
  faq: [{ q, a }],                          // 6 entries, 3-5 sentences each
  bottomLine: ["para 1", "para 2"],         // array, 45-75 words each
  related: [{ href: "/<silo>/<slug>", title: "..." }],  // 3-4, see below
};
```

`howToChoose` is exactly 6 sections in order, each with a 1-2 sentence `intro`:
1. By <primary attribute> — `table`, 4-5 rows. 2. By Budget — `table` using price BANDS
("Entry of this shortlist" / "Mid" / "Top"), never a figure. 3. <A> vs <B> — exactly 2 `cards` plus a one-line `note`. 4. A second decision axis, not
budget and not a rephrasing of #1 — `table`. 5. For <use case> Specifically — 2 `cards` labeled
"Look for" / "In this comparison". 6. When to Spend More — 2 `cards` labeled "Spend more if" /
"Save if". Every row and card text must contain a pick's `short` name.

`related`: 3-4 entries. Your facts file carries `silo` and a `relatedCandidates` list of real
sibling slugs in this batch; use those, as `/<silo>/<slug>`. Never invent a slug.

## What a budget article has to actually do
The price ceiling is the subject, not a filter. Every guide must answer: what does this budget buy,
what gets dropped at this price, and which buyer is right to stop here rather than spend more. Read
the real prices in your facts file to work out the ordering, then say where each pick sits WITHOUT
printing the number.

## NEVER print a price figure — this fails the batch

`gen-p2-batch.mjs` rejects any `$` figure in metaTitle, metaDescription, intro, criteria,
howWeEvaluated, howToChoose, faq, bottomLine, or a product's `d`/pros/cons. No `$169.99`, no `$169`,
no "about $170", no "just under $500" aimed at one product, and no derived figure such as "costs
$16.00 less". The only `$` allowed is the ceiling in an "under-$N" slug's own title/meta, and your
slugs are "best-budget-*", so for this batch the answer is simply: NO `$` ANYWHERE.

Why: the site renders no Amazon price at all (every CTA is a "Check price on Amazon" button), the
Associates terms only allow 24 hours of cached price data, and a typed figure is stale the week it
ships. See "Price language" in CLAUDE.md 7.

Write the position, not the number:
- Band within this shortlist: "the entry pick here", "sits mid-pack on price", "the most expensive
  pick in this guide", "the cheapest way into <category>".
- Against a NAMED sibling: "costs noticeably less than the <short name>", "roughly double the entry
  pick", "a small step up from the pick above". Name the real product so it stays checkable.
- What the money buys: tie the step up to the mechanism, which is the part that stays true. "The
  step up buys a brass body and a 0.5 micron element instead of 5 micron."

The reasoning is the value, so keep it and drop only the digits. "Half the price of the Camco for
the same 5 micron rating" is good. "Cheaper" alone is not.

Your slugs are deliberate near-synonyms ("budget X", "X under $500", "X for the money"). Each facts
file carries its own `angle` and the article must be written from it. Two guides in the same group
must not share an argument, an intro structure, a criteria label or an FAQ question.

## The description trap
The page deletes any sentence in a product `d` paragraph that matches a limitation regex, so a
negative there costs you the sentence. Keep every `d` sentence arguing FOR the pick and put negatives
in `cons`. Banned inside `d` only: however, but, though, although, only, lacks, missing, not
listed/stated/included, doesn't, isn't, cannot, can't, verify, confirm, check the/with/before,
caveat, drawback, trade-off, costs more, pricier, more expensive, heavier, bulkier, louder, shorter,
smaller, fewer, premium, twice, double, downside, watch for, keep in mind, be aware, read the,
unfortunately, skip it, catch, weak, omits, leaves out, treat it/this, before buying.

## Forbidden everywhere
Em dash and en dash. "we tested" / "we tried" / "we measured" / "in our lab" (say "we evaluated",
"we compared listings", "based on product specs"). Any phrase exposing the drafting process ("the
facts we reviewed", "the candidates", "not listed in the features", "the pool"). Amazon star ratings
or review counts. Invented numbers. Dangling fragments ending in "for", "that", "and", "the", "a".
The brand is "RV Gear Lab".

## Structure, not just wording
No three-word sentence opener more than twice across the batch. Do not close paragraph after
paragraph on "It suits owners who..." or open comparison after comparison on "Against the...".
`structure-lint.mjs` names every offender.

## Finish
Report one line per slug and anything you could not write without inventing a fact. Do not pass
`--register`; the orchestrator registers the batch.
