# Deepen brief (standing version) — RV Gear Lab

You rewrite EXISTING guides so the rendered article grows from ~1,800-2,200 words to 3,000+,
WITHOUT changing which products are reviewed.

## Cost rules — read these first, they are why this brief exists
1. **Do not write a generator script.** No Python, no Node, no templating layer. Edit each JSON
   directly. Every previous batch that built a generator spent 30-40% of its budget on the tooling
   and produced no better prose.
2. **Do not write your own validator.** The repo has two, they are authoritative, and your own will
   disagree with them:
   - `node scripts/apply-deepen.mjs <OUT_DIR>` (dry run) — structural and compliance gate.
   - `node scripts/deepen-lint.mjs <OUT_DIR>` — rendered word count, sentences the page will silently
     drop, and 8-word runs shared between your files.
   Run both, fix what they report, re-run. Stop when both are clean. Nothing else needs checking.
3. **Do not re-read a file you just wrote** and do not print file contents to inspect them. Use the
   two scripts above.
4. **Do not run WebSearch.** Your cluster research file is the only outside input.

## Input and output
- `FACTS_DIR/<slug>.json` — the mined product facts: asin, name, price, specs, pros, cons. These are
  the only product facts that exist. Never invent a spec, a certification, a rating or a review count.
- `RESEARCH` — one markdown file of cluster facts, given in your task.
- Write `OUT_DIR/<slug>.json`, one per slug, with exactly this shape:

```
{ "metaTitle": "<= 46 chars, e.g. 'Best X in 2026'",
  "metaDescription": "120-160 chars, one sentence, unique per slug",
  "introParagraphs": [3 strings, 90-130 words each],
  "products": [ { "asin": "<from facts, same order>", "name": "<from facts>", "badge": "...",
                  "bestFor": "short phrase",
                  "description": "para1\n\npara2\n\npara3",
                  "specs": [3 items, 5-12 words], "pros": [3-4 items, 6-14 words],
                  "cons": [2-3 items, 6-14 words] } ],
  "howWeEvaluated": [5 { "title": "...", "description": "3-4 sentences" }],
  "buyingCriteria": [6 { "criterion": "3-6 words", "explanation": "4-5 sentences" }],
  "howToChoose": [6 sections, see below],
  "faq": [6 { "q": "...", "a": "3-5 sentences" }],
  "bottomLine": [2 strings, 45-75 words each] }
```
`bottomLine` MUST be an array. RichGuidePage calls `.map()` on it, so a plain string type-checks fine
and serves an HTTP 500 page.

## Depth bar
- `buyingCriteria` explanations: (1) what the spec is in plain terms, (2) a concrete consequence with a
  real number or threshold, (3) how to verify it on the listing. Six genuinely distinct axes.
- `howToChoose`, exactly 6 sections in order, each with a 1-2 sentence `intro`:
  1. By <primary attribute> — `table`, 4-5 rows. 2. By Budget — `table`, this guide's real prices.
  3. <A> vs <B> — exactly 2 `cards` + a one-line `note`. 4. A second decision axis, not budget and not
  a rephrasing of #1 — `table`. 5. For <use case> Specifically — 2 `cards` labeled "Look for" /
  "In this comparison". 6. When to Spend More — 2 `cards` labeled "Spend more if" / "Save if".
  Every row and card text must contain a real product name from that slug's own facts file.
- Product `description`: 3 paragraphs of 55-85 words. (1) what it is and its role here, with 1-2 real
  specs; (2) how it compares to the pick above or below it, by name, naming the real mechanism;
  (3) who it is for.
- `faq` angles: compatibility, common mistake, is-X-worth-it-over-Y, setup, maintenance, edge case.

## The description trap
The page drops any sentence in `description` matching a limitation regex, so negatives there cost you
words and tell the reader nothing. Keep every description sentence arguing FOR the pick and put the
negatives in `cons`, where they render. Banned inside `description` only: however, but, though,
although, only, lacks, missing, not listed/stated/included/specified, doesn't, isn't, cannot, can't,
verify, confirm, check the/with/before, caveat, drawback, trade-off, costs more, pricier, more
expensive, heavier, bulkier, louder, shorter, smaller, fewer, premium, twice, double, downside, watch
for, keep in mind, be aware, read the, unfortunately, skip it, catch, weak, omits, leaves out, treat
it/this, no remote, no display, before buying. `deepen-lint.mjs` lists any you miss.

## Forbidden everywhere
Em dash and en dash. "we tested" / "we tried" / "we measured" / "in our lab" (use "we evaluated",
"we compared listings", "based on product specs"). Any phrase exposing the drafting process ("the
facts we reviewed", "not listed in the features", "of the candidates we reviewed", "the pool"). A bare
URL path in prose. Amazon star ratings or review counts. Fabricated statistics or standards. The brand
is "RV Gear Lab", never "RVGearLab".

## Cross-article distinctness
Your slugs are near-synonyms; that is the main risk. Each has an assigned angle in your task, and
intro, criteria labels, subheadings, FAQ questions and bottomLine must all read from THAT angle. A
numeric claim in a title (3 GPM, 0.2 micron, under $75) is a real constraint the article must reason
about. `deepen-lint.mjs` reports shared 8-word runs; table headers are fine, prose is not.

## Finish
Report one line per slug: its rendered word count from `deepen-lint.mjs`, and anything you could not
satisfy. Do not merge; the orchestrator runs `--write`.
