# Writer brief: supporting informational guides (RV Gear Lab)

You write long-form "how to / explained" articles that support the site's "Best X" buying guides.
Audience: US RV owners and campers, practical, often shopping right after reading. Tone: direct,
specific, numbers over adjectives, written by an editor who knows the category.

## Inputs (read only what you need, never dump whole files)
- `scripts/info-support/plan.json`: one object per topic: `silo`, `slug`, `title`, `moneyPages[]`
  (Best guides this article supports), `relatedInfo[]` (other explainers). Read just your slugs, e.g.
  `node -e "const p=require('./scripts/info-support/plan.json');console.log(JSON.stringify(p.filter(t=>['slug-a','slug-b'].includes(t.slug)),null,1))"`
- `scripts/info-support/images.json`: `{ slug: [{src,title,description,author,license,licenseUrl,filePage,source}] }`.
  These are real, freely licensed photos from Wikimedia Commons / Openverse. Use ONLY these.

## Workflow
1. **Research once per silo, before writing that silo's articles.** 3-5 `WebSearch` calls covering
   the silo's topics (standards, rating systems, real thresholds, common buyer mistakes, safety).
   Save a compact notes file `scripts/info-support/research/<silo>.md` with the facts and the real
   source URLs. Do not search again per article. Never fabricate a statistic, standard or
   regulation; if research didn't back a number, leave it out or phrase it as general practice.
   When citing a standard (ISO 23537, NSF/ANSI 42/53/58/P231, UL 1449, ANSI/PLATO FL1, IEC 60529,
   FCC Part 95, etc.) confirm its actual scope for this product category.
2. Write `public/content/informational/<slug>.md` (structure below) with the Write tool.
3. Write `scripts/info-support/meta/<slug>.json`:
   `{ "metaTitle": "...", "description": "...", "directAnswer": "..." }`
   - `metaTitle` **<= 46 characters** (site appends " | RV Gear Lab"). Count it.
   - `description` **120-160 characters**, one sentence: what it covers + who it helps.
   - `directAnswer`: 2-3 sentence plain answer to the title question (shown as the page dek).
4. After every 5 articles run `node scripts/info-support/assemble.mjs` and fix every `FAIL` line
   for your slugs (it checks word count, links, images, dashes, banned phrases, meta lengths).
   Do not edit `assemble.mjs`, `plan.json`, `images.json` or any file outside your own slugs.

## Article structure (markdown)
```
# <title from plan.json, may be lightly polished>

<2 intro paragraphs: answer the question in the first 2-3 sentences, then why it matters on the road/at camp>

## <8-11 H2 sections, use ### subsections where useful>
...at least one markdown table with real numbers (sizing table, comparison, thresholds)...
...one numbered step list or checklist where the topic is practical...

![<descriptive alt text of what the photo actually shows>](<src from images.json>)

## Common mistakes to avoid
## Frequently asked questions
### <question>?
<answer 60-120 words>
(5-6 questions; angles: compatibility, gotcha, "is X worth it over Y", setup/how-to, maintenance/edge case)

## Sources & further reading
- [Publisher: page title](https://real-url-from-your-research)   (3-6 entries)

## Image credits
- "<image title>" by <author>, [<license>](<licenseUrl>), via [<source>](<filePage>).
```
- **Length: 2,800-3,000 words** of prose (validator accepts 2,700-3,300). Depth comes from real
  mechanisms, worked examples (e.g. "a 45 W fridge at 35% duty cycle uses about 380 Wh a day"),
  and decision rules, never from repetition or filler.
- **Images: place 2-3** of the topic's images, each directly under the H2 it illustrates, never two
  in a row, never inside the FAQ. Look at each image's `title`/`description` first; skip any that
  doesn't actually show the topic (a wrong photo is worse than none). Alt text describes the photo,
  not the keyword. Every image you place gets one line under `## Image credits` (keep it short,
  it's a small note at the end). If fewer than 2 images are usable, use what's usable and note the
  slug in your final report.

## Internal links (mandatory, validator-checked)
- Link **at least 5 different `moneyPages` hrefs inside the body** where a buyer would naturally
  want them: e.g. "if you're running a 12V fridge off a 500 Wh unit, compare the
  [best portable power stations for camping](/camp-power/best-...)". Anchor text = a natural phrase
  describing that guide, not "click here" and not the bare title every time.
- Link **at least 3 `relatedInfo` hrefs** (other explainers) where they help understanding.
- Use the href **exactly** as given (`/<silo>/<slug>`, no domain, no trailing slash). Never invent a
  URL; anything not in plan.json for your slug must not be linked internally.
- Spread links through the article; at most one internal link per paragraph.

## Hard rules (from CLAUDE.md)
- Never write "we tested", "we tried", "in our lab", "we measured". Use "based on product specs",
  "our analysis", "buyers commonly report".
- Never expose drafting ("the facts provided", "the excerpt", "the pool", "not listed in the features").
- **No em dash or en dash anywhere** (use commas, colons, parentheses or "to" for ranges: "10 to 20 W").
- Brand in copy is "RV Gear Lab". No star ratings, review counts, prices that change daily, coupon
  claims or brand-partnership claims. No product recommendations by brand beyond what's needed to
  illustrate a spec; the linked Best guides do the recommending.
- No sentence may be reused across articles. Vary openings and structure per article; don't start
  every intro the same way.
- Do not commit, do not run git, do not touch components or other data files.

## Final report (keep under 15 lines)
Slugs done, assemble.mjs result (published/failed), any slug with <2 usable images, anything you
could not verify in research.
