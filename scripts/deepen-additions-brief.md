# Additions brief — RV Gear Lab (cheap, targeted deepening)

You do NOT rewrite guides. You add text to the three places that are thin, and nothing else.
Everything already in the guide stays exactly as it is.

## Cost rules
1. Read only your task files (`TASK_DIR/<slug>.json`) and this brief. Nothing else. No WebSearch,
   no reading `data/guides/*.ts`, no reading other guides.
2. Do not write a generator script and do not write your own validator. One repo script checks
   everything: `node scripts/apply-additions.mjs <PATCH_DIR>` (dry run, no --write).
3. Do not re-read a patch file you just wrote. Run the script instead.
4. Write one patch file per slug and move on. No summaries to disk, no notes files.

## Input
Each `TASK_DIR/<slug>.json` lists only the thin spots:
- `needDescParagraph[]` — products whose "Why it made the shortlist" is short. Each gives the asin,
  name, price, specs, pros, cons and the `currentDescription` you are extending.
- `needLongerAnswer[]` — FAQ entries whose answer is short, with the question and `currentAnswer`.
- `needThickerSection[]` — Decision guide sub-sections that are thin, with the subheading, the
  current intro, the table headers and row count or card labels.
- `productNames[]` — the real picks, for naming in Decision guide rows.

## Output: `PATCH_DIR/<slug>.json`
```
{ "descAdd": { "<ASIN>": "one new paragraph, 45-90 words" },
  "faqA":    { "<question, copied verbatim from the task file>": "replacement answer, 3-5 sentences, longer than the current one" },
  "faqAdd":  [ { "q": "...", "a": "3-5 sentences" } ],
  "htc":     [ { "subheading": "<copied verbatim>", "intro": "2-3 sentences, longer than the current intro",
                 "note": "one line naming a real pick", "addRows": [ ["cell","cell","cell"] ] } ] }
```
Omit any key a slug does not need. `faqAdd` only when `faqCount` is 4, to bring it to 5.
`addRows` must match the table's column count exactly, and every new row must name a real pick.

## What each addition has to be
- **The new description paragraph** continues the existing text, so read `currentDescription` and do
  not repeat what it already says. Use a real detail from `specs`, `pros` or `cons`: a measurement,
  a named mechanism, an included accessory, a behaviour the other picks do not have. Then say who it
  suits. A paragraph that would fit any product in the category with the name swapped is a failure.
- **The longer FAQ answer** keeps the question and the existing stance, and adds the part a buyer
  actually needs: a number, a threshold, a consequence, or the step people get wrong. Not padding.
- **The thicker Decision guide section** explains why the recommendation falls out that way, naming
  the mechanism and the picks. One or two extra table rows are welcome when a real scenario is
  missing; do not invent a scenario to fill space.

## The description trap (this is what the checker fails you on)
The page silently deletes any sentence in a product description matching a limitation regex, so a
negative there costs you the sentence and tells the reader nothing. Keep every sentence in `descAdd`
arguing FOR the pick; negatives belong in cons, which you are not editing here. Banned inside
`descAdd` only: however, but, though, although, only, lacks, missing, not listed/stated/included,
doesn't, isn't, cannot, can't, verify, confirm, check the/with/before, caveat, drawback, trade-off,
costs more, pricier, more expensive, heavier, bulkier, louder, shorter, smaller, fewer, premium,
twice, double, downside, watch for, keep in mind, be aware, read the, unfortunately, skip it, catch,
weak, omits, leaves out, treat it/this, no remote, no display, before buying.
These words are fine in `faqA`, `faqAdd` and `htc`.

## Forbidden everywhere
Em dash and en dash. "we tested" / "we tried" / "we measured" / "in our lab" (say "we evaluated",
"we compared listings", "based on product specs"). Any phrase exposing the drafting process ("the
facts we reviewed", "not listed in the features", "of the candidates we reviewed", "the pool").
Amazon star ratings or review counts. Invented specs, certifications or statistics: if the task file
does not contain a fact, you do not have it. A bare URL path in prose. The brand is "RV Gear Lab".

## Distinctness — wording AND structure
Across your slugs, no 8-word run may repeat, and no three-word sentence opener may be used more than
twice in the whole batch. Two guides about similar products must not get the same added paragraph with
the noun swapped.

Structure repeats are the failure readers notice first, and the 8-word check cannot see them. Do not
close paragraph after paragraph on "It suits owners who...", "It is the pick for...", "This is the
pick for...", and do not open comparison after comparison on "Against the...", "Compared with...".
Vary where the sentence starts: lead with the buyer, with the situation, with the consequence, with
the spec, with a short imperative. `node scripts/structure-lint.mjs <PATCH_DIR>` names every sentence
that breaks this; rewrite those sentences and never relax its thresholds.

## Finish
Run both gates, fix everything they report, and re-run until both are clean:
  node scripts/apply-additions.mjs <PATCH_DIR>      # must end "0 failed"; never pass --write
  node scripts/structure-lint.mjs <PATCH_DIR>       # must end "clean" Then report one line per slug with the words added, and anything you skipped.
