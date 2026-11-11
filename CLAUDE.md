# RV Gear Lab — CLAUDE.md

@AGENTS.md

> **History note.** This project was cloned from an earlier site ("Hardcastle's RV" / DeskFinds).
> This file was rewritten on 2026-11-10 to match the actual RV Gear Lab codebase. If you find a
> stale reference to Hardcastle's, DeskFinds, desks, chairs, offices or monitors anywhere in
> `lib/`, `components/`, `scripts/` or `data/`, treat it as a leftover bug and fix it. See
> §20 "Known leftovers from the cloned project".

---

## 0. Communication Rules

- **Always address the user as "cậu"** in every response, without exception.
- **Every internal `<Link>` from `next/link` must include `prefetch={false}`, no exceptions.** Next.js
  prefetches every link in viewport by default; on a site with 2,700+ guide pages, Header, Footer,
  related-guides blocks and card grids each fire background prefetches that get billed as Vercel ISR
  Read Units with no real pageview behind them. On the predecessor site this ran ~50x actual GA
  pageviews. When writing or generating ANY new page/component with a `<Link>`, add `prefetch={false}`
  by default — do not rely on remembering to add it later at scale.

---

## 1. Project Overview

- **Site name:** `SITE_NAME = "RV Gear Lab"` (note the spaces) in `lib/seo.ts`
- **Live domain:** `https://www.rvgearlab.com` (www canonical; non-www 301 in `next.config.ts`)
- **Twitter handle:** `@rvgearlab` (`TWITTER_HANDLE` in `lib/seo.ts`)
- **Business model:** Amazon affiliate. Site link tag is **`rvgearlab-amz-20`**, defined once as
  `AMAZON_TAG` in `lib/affiliate.ts`. Build links with `buildAmazonUrl(asin)`; render stored links
  through `withAmazonTag(url)` so a stale tag in stored data can never reach a live href.
- **Tracking tag note (2026-11-10):** the only Amazon tag for this site is `rvgearlab-amz-20`. The old
  tags `rvgearlab-20` and `theofficejournal-20` were replaced everywhere (data, scripts, docs, legal
  pages). Never reintroduce them or any other site's tag.
- **Niche / audience:** US RV owners **and** campers — travel trailers, fifth wheels, motorhomes,
  plus tents, sleep systems, camp kitchens and trail gear.
- **Google Analytics:** `process.env.NEXT_PUBLIC_GA_ID` (`app/layout.tsx`). Analytics stay off until
  the env var is set. There is no hardcoded GA ID — do not add one.

### Silos — URL is `/<silo>/<slug>`, there is no `/guide/<slug>` page route

`data/silos.ts` defines two **silo groups** and 14 silos:

| Group `rv` | Group `camping` |
|---|---|
| `power-electrical` | `tents-shelter` |
| `water-plumbing` | `sleep-gear` |
| `towing-leveling` | `camp-kitchen` |
| `rv-care` | `camp-power` |
| `interior-comfort` | `camp-furniture` |
| `camping-travel` | `campsite-gear` |
|  | `packs-hiking` |
|  | `clothing-footwear` |

Each silo has its own route pair: `app/(site)/<silo>/page.tsx` (hub) and
`app/(site)/<silo>/[slug]/page.tsx` (article). `app/(site)/guide/[slug]/page.tsx` still exists as a
legacy/fallback route; **new content is addressed at `/<silo>/<slug>`**, and old `/guide/<slug>` URLs
are 301'd to their silo URL in `next.config.ts`.

### Two content types

1. **Informational guides** ("how to / explained"): 450 RV entries in `data/informational-guides.ts`
   plus 70 camping entries in `data/informational-guides.camping.generated.ts` (re-exported from the
   same module). Shape: `slug`, `silo`, `title`, `metaTitle`, `description`, `dek`, `directAnswer`,
   `keyTakeaways`, `sections`, `faq`, `sources`, `related`, optional `contentFile` / `heroImage`.
   Long-form markdown bodies live in `public/content/informational/<slug>.md`. Rendered by
   `components/guide/InformationalGuidePage.tsx`.
   `InformationalSilo` is a union of all 14 silo slugs — add new silos there too.
2. **"Best X" roundup guides**: one data file per guide at `data/guides/<slug>.ts`, plus a registry
   entry in `data/guides.ts`. **2,747 guides currently registered.** Rendered by
   `components/guide/RichGuidePage.tsx`, resolved through `data/guides-index.generated.ts`.
   Reference file shape: any recently deepened file, e.g. `data/guides/best-rv-range-hood-fan.ts`.

---

## 2. Tech Stack & Architecture

### Framework & Language
- **Next.js `16.2.6`** — this is NOT the standard Next.js 14/15 you know; read
  `node_modules/next/dist/docs/` before writing framework code. See `AGENTS.md`.
- **React `19.2.4`**, **TypeScript `^5`**, **Tailwind CSS `^4`** with `@tailwindcss/postcss`
  (v4 has breaking changes vs v3).

### Routes that actually exist

```
app/
├── layout.tsx                  # Root layout — fonts, GA (env-gated), global metadata
├── globals.css
├── robots.ts                   # Dynamic robots.txt
├── sitemap.ts                  # Dynamic sitemap (Supabase + static fallback)
├── not-found.tsx
├── api/cron/ping-indexnow/     # Daily Vercel cron (vercel.json, 03:00 UTC)
├── api/cron/ping-supabase/     # Keeps the free-tier Supabase project from pausing
└── (site)/
    ├── page.tsx                # Homepage
    ├── layout.tsx
    ├── <silo>/page.tsx         # 14 silo hubs
    ├── <silo>/[slug]/page.tsx  # 14 silo article routes (ISR)
    ├── guide/page.tsx          # Guides index
    ├── guide/all/page.tsx
    ├── guide/[slug]/page.tsx   # Legacy/fallback guide route
    ├── author/[slug]/page.tsx
    ├── about/ affiliate-disclosure/ contact/ how-we-review/ privacy-policy/
```

**There is no `/admin`, no `/reviews`, no `/compare`, no `/categories`, no `/deals` route in this
project.** The admin panel was removed (it was a Vercel build-time cost). `lib/admin-auth.ts`,
`lib/*-store.ts`, `data/products.ts` and `data/categories.ts` survive as library/seed code that other
modules still import — do not write new pages against them without checking they render anywhere.
`robots.ts` still disallows `/admin` and `/api/` defensively; leave that in place.

### Data Sources
- **Supabase** (`@supabase/supabase-js`) via `createAdminClient()` in `lib/supabase/server.ts`, gated
  behind `isSupabaseConfigured()`. Used by `app/sitemap.ts` and the `lib/public-*.ts` readers. If env
  vars are missing the app silently falls back to static data instead of crashing.
- **Static data files** under `data/` are the primary source for guide content.

### ISR
- Guide/silo article routes: `export const revalidate = 604800` (7 days).
- `generateStaticParams()` pre-renders known slugs.

---

## 3. Canonical Domain Rules

- **Canonical domain is always `https://www.rvgearlab.com`** (www, never bare `rvgearlab.com`).
- Non-www → www redirect lives in `next.config.ts` (`has: [{ type: "host", value: "rvgearlab.com" }]`,
  `permanent: true` → 301). Do not remove it.
- `NEXT_PUBLIC_SITE_URL` must be `https://www.rvgearlab.com` in production. `lib/seo.ts` strips a
  trailing slash and uses `||` (not `??`) so a set-but-empty Vercel env var falls through to the
  hardcoded default instead of crashing `new URL("")`. Keep that `||`.
- All canonical URLs are built via `buildMetadata({ path })` — never construct them manually.
  `alternates.canonical` is always set inside `buildMetadata()`.
- No trailing slashes on internal canonicals or `href` values (`trailingSlash` is not enabled).
- All schema, sitemap and OG URLs must use `www.rvgearlab.com`.

---

## 4. SEO Metadata Rules

Always use `buildMetadata()` from `lib/seo.ts`:

```ts
buildMetadata({
  title, description, path,
  image?, noIndex?, type?: "website" | "article",
})
```

### Title Rules
- **Never** manually append `| RV Gear Lab` — `buildMetadata()` does it, and uses `{ absolute: ... }`
  so the root layout's `%s | RV Gear Lab` template cannot double-suffix it.
- **Hard budget: `metaTitle` ≤ 46 characters.** The suffix `" | RV Gear Lab"` is **14 characters**,
  and the rendered title must stay ≤ 60. Run the real check — `metaTitle.length + 14 <= 60` — do not
  eyeball it. (The predecessor project shipped an 87-guide batch at 65–80 chars by eyeballing.)
  Prefer `"Best X in 2026"` / `"Best X, Reviewed (2026)"` over longer qualifier patterns.

### Description Rules
- **Hard budget: 120–160 characters, no exceptions.** Run
  `120 <= metaDescription.length <= 160` before finalizing.
- Unique per page; never reuse `SITE_DESCRIPTION`.
- One tight sentence on what the guide covers and who it helps. Save the deeper advisory angle for
  `introParagraphs` and `buyingCriteria`, not the meta description.

### OG Images
- Default fallback `public/og-default.png`, must be 1200×630.
- `buildMetadata()` detects `startsWith("http")` and passes absolute URLs through unchanged; relative
  paths get `SITE_URL` prefixed.

### noIndex
- Any draft or non-published content must pass `noIndex: true`.

---

## 5. Structured Data / Schema Rules

**Guide pages:** `Article` + `BreadcrumbList` + `ItemList`.
- `Article`: headline, description, datePublished, dateModified, author, publisher,
  mainEntityOfPage, image (only a real URL).
- `BreadcrumbList`: Home → silo hub → guide title.
- `ItemList`: picks by **name + URL only** — no prices, no ratings.

### Strictly Forbidden
- **`FAQPage` schema** on commercial/affiliate pages.
- **`AggregateRating`** built from editorial scores, or any invented `ratingCount` / `reviewCount`.
- **`Review` schema** claiming hands-on testing — we do not claim hands-on testing.
- **`Product` schema** populated with only `name`/`description`/`url`.
- Fake `price` / `priceRange` in any schema.
- `Organization.sameAs` pointing at profiles that are not actively maintained.

### Author Schema
From `getAuthorByName()` in `data/authors.ts`. `isPerson: true` → `"@type": "Person"` with
`url: ${SITE_URL}/author/${slug}`; otherwise `"@type": "Organization"`. Current authors: Bowen Higgins
(person), Danny Walker (person), RV Gear Lab Editors (organization). Never invent an author URL that
has no page.

---

## 6. Affiliate Compliance Rules

- All outbound affiliate links must carry `rel="noopener noreferrer sponsored"` and, for Amazon browse
  links, `target="_blank"`.
- Every page with affiliate links shows `<AffiliateDisclosureBar>`
  (`components/affiliate/AffiliateDisclosureBar.tsx`), above the fold on guide pages.
- Disclosure wording is **centralised in `lib/affiliate.ts`** as `DISCLOSURE_SHORT` and
  `DISCLOSURE_FULL`. Do not hardcode disclosure copy in a component; import the constant.
  `DISCLOSURE_SHORT` = _"RV Gear Lab earns a small commission on qualifying Amazon purchases at no
  extra cost to you."_
- `/affiliate-disclosure` must stay accessible and linked from the footer.
- **Every `amazonUrl` written to the site must be `https://www.amazon.com/dp/<ASIN>?tag=rvgearlab-amz-20`.**
  The Creators/PA API credentials in `.env.local` are tied to a *different* partner tag used only for
  querying — that tag must never appear in shipped data. Grep for it before committing a batch.
- Do not claim brand partnership, sponsorship or paid "best" designation.
- Do not write "we tested" or "we tried" (see §7).
- Do not invent discount codes or coupon claims.
- Do not use Amazon images in raw `<img>` tags outside Amazon PA API terms.

### Allowed Image Domains (`next.config.ts` `remotePatterns`)
`*.supabase.co/storage/v1/object/public/**`, `images.unsplash.com`, `images.pexels.com`,
`m.media-amazon.com` (PA-API-compliant usage only).

---

## 7. Content & Editorial Rules

### Honesty Policy — Non-Negotiable
- **Never write "we tested", "we tried", "in our lab", "we measured".**
- Approved: "we evaluated", "we researched", "based on verified buyer feedback", "based on product
  specs", "our analysis".
- All scores are editorial assessments from structured criteria, not measurements.

### MANDATORY: Copy must never expose the drafting process
Lines like "not stated in the text we saw", "the excerpt we reviewed", "in the facts provided", "not
listed in the features", "of the candidates we reviewed", "the pool" tell the reader the article was
written from a fact sheet. Write as an editor who knows the category; state a missing spec as a buyer
tip: _"The listing does not state the gauge range, so confirm it before buying."_
`scripts/gen-p2-batch.mjs` hard-fails on a `LEAK` regex covering these phrases. **Do not weaken that
regex to make a batch pass — rewrite the sentence.** Older P2/P3 guides still contain these phrases
and need a retrofit pass.

### Guide page section order
`RichGuidePage.tsx` renders, top to bottom:

```
Breadcrumbs → header → affiliate disclosure → hero image
→ Comparison Table (products[])
→ intro paragraphs (introParagraphs)
→ "N Criteria to Look For Before Buying a [Product]"  (buyingCriteria[])
→ jump nav
→ individual product review sections
→ "How We Evaluated These [Products]"  (howWeEvaluated[])
→ "How to Choose the Right [Products]"  (howToChoose[])   ← the content-gap section
→ FAQ (faq[])
→ Bottom Line (bottomLine)
→ Amazon browse CTA
→ Related guides (relatedGuides[])
```

`howWeEvaluated` and `howToChoose` are **two separate sections**, both after the reviews, in that
order, both before the FAQ. Never merge them.

### Content-Gap Research Step — MANDATORY, never skip
Before drafting `buyingCriteria`, `faq` or `howWeEvaluated` for a **new** guide:
1. Run a `WebSearch` for the guide's `mainKeyword` plus "buying guide" / "how to choose" / "vs" / a
   safety or regulatory angle. For a batch, research **once per topic cluster** (4-6 searches for a
   whole niche), not once per guide.
2. Identify buyer knowledge that is missing, vague or wrong on typical top-ranking pages —
   measurement pitfalls, spec trade-offs, the actual scope of a cited standard (verify it applies to
   this exact product category), common buyer mistakes.
3. Encode 2-4 findings per guide as specific `buyingCriteria` entries with real numbers/thresholds.
4. Cite findings naturally as established buying knowledge. Never write "according to a study".
5. **Never fabricate a statistic, standard or regulation.** If the search didn't back it, leave it out.

Does not require retrofitting published guides unless the user asks.

### `buyingCriteria[]` — substantive paragraphs, 5-6 distinct axes
Each `explanation` is a **3-4+ sentence paragraph**:
1. **What it is** — the spec in plain terms, assuming no jargon knowledge.
2. **Why it concretely matters** — a specific consequence. _"a coin-cell battery costs a couple of
   dollars to replace and lasts about a year, while a sealed rechargeable battery can't be swapped and
   eventually forces you to replace the whole unit"_ is the bar; _"battery type matters"_ is not.
3. **How to check it** — how to verify it from the actual listing ("look for the exact number in the
   title or bullets, not a marketing phrase like 'long battery life'").

Each of the 5-6 must cover a genuinely distinct axis — not two angles on "check the size". Density
comes from real reasoning, never padded filler repeated with the nouns swapped.

### `howToChoose[]` — standing 6 sub-section structure

```ts
export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}
```

1. **By [primary attribute]** — `table` mapping scenario → recommended pick (the attribute that
   matters most for the category: "By Sitting Duration", "By Rig Length", "By Season Rating").
2. **By Budget** — `table` mapping a **price band** to a recommended pick. Use this guide's own
   real ordering, but express it as a band and a relative position, never an exact figure:
   "Entry of this shortlist", "Mid of this shortlist", "Top of this shortlist", or a relative
   phrase ("roughly double the entry pick"). See **Price language** below — the exact-figure
   wording this rule used to require is now forbidden.
3. **[Option A] vs [Option B]** — a genuine binary tradeoff native to the category, `cards` with
   exactly two entries. Each side explains the mechanism and lists which picks fall in that group.
   Close with a one-line `note` recommendation.
4. **A second decision axis** — another `table`, surfacing a genuinely different buyer concern, not a
   rephrasing of #1.
5. **For [specific use case] Specifically** — `cards` with two entries labeled "Look for" and
   "In this comparison".
6. **When to Spend More** — `cards` with exactly two entries: "Spend more if" / "Save if", each tied
   to named picks.

**Every row and card across all 6 must resolve to a real product name from this guide's own
`products[]`.** If a recommendation can't be tied to an actual pick, rewrite it until it can. A row
that doesn't end in "→ therefore buy [specific product]" is not deep enough.

### Product `description` = "Why it made the shortlist"
`components/guide/editorial/GuideProductPick.tsx` renders `description` paragraphs under the heading
"Why it made the shortlist", and **drops any sentence matching its `LIMITATION` regex** (caveat, lacks,
not listed, costs more, verify, however/but/though…). So:
- **The section must only argue FOR the pick.** All limitations go in `cons` only.
- Write **2-3 full paragraphs**, split by `\n\n` (each becomes its own `<p>`):
  1. What it is + its role in this price tier/comparison, with 1-2 real named specs from the listing.
  2. How it compares to the pick immediately above or below it, naming the real mechanism
     (_"trades the steel frame of the pick above for aluminum, cutting weight by 4 lbs but dropping
     the load rating from 250 lbs to 150 lbs"_), not a vague "great value" line.
  3. An honest "best for" framing naming the exact buyer or use case.
- **Never fabricate** hands-on testing, lab results, review counts, star ratings or capacities the
  data source did not provide.
- No em dash (`—`) or en dash (`–`) anywhere.
- Do not mention review count, purchase volume or popularity signals.
- Before generating descriptions at scale, write and eyeball **one** against this bar first.

### `pros` / `cons`
- **3-4 `pros`** per product; 2-3 `cons` is fine (don't pad cons artificially).
- Each entry is a **short, friendly, scannable key point, roughly 6-14 words** — the way you'd say it
  to a friend, not a spec-sheet clause. _"Two keys included, so losing one isn't a crisis"_ beats
  _"A lifetime after-fire replacement guarantee backs the fire rating directly, not just a general
  warranty."_ If it needs a comma-separated qualifier to land, cut the qualifier.
- Still a real mined fact. Short does not mean vague — cut words, not substance.
- **Never a truncated sentence.** Amazon bullets are usually `"Label: full sentence"` or
  `"[Bracketed Label] full sentence"` — the leading label **is** the key point ("Interactive Pen",
  "Automatic Calibration"). Extract the label; only fall back to a clamped clause when there is none.
  Never end on a dangling preposition, article or conjunction ("…for", "…that", "…and").

### `specs`
2-3 short factual phrases (~5-12 words, e.g. `"46.46\"L x 19.69\"W desktop, 30\" height"`), mined
from the same feature data. **Never leave `specs: []`** — the UI drops the chip row silently with no
build error.

### `faq`
**5-6 entries, never fewer than 5.** Spread the angles: one compatibility/requirements question, one
common-mistake/gotcha, one comparison-tier ("is X worth it over Y"), one practical how-to/setup, one
edge-case or maintenance. Every answer backed by real research or mined product facts.
**Keys are `{ q, a }`** — not `{ question, answer }`.

### MANDATORY: Mine the real `features` data — and then rewrite it
Two distinct failure modes, both shipped on the predecessor site:
1. **Generic filler.** Descriptions that paraphrase rating/price/capacity with no product-specific
   detail. Before writing a single description, dump the full `features` array for every ASIN in the
   batch and actually read it. Pull 2-4 concrete facts per product — exact measurements, a named
   mechanism, a wattage/port spec, an included-accessory list, a behavior no other pick in this
   article has. **A description is not acceptable if it could be reused verbatim for a different
   product by swapping the name.**
2. **Copy-pasting.** Reading the features is only step one. Then **close the source and write from
   what you learned, in your own sentences.** Never paste an Amazon bullet's lead-in
   (`【...】`, `ALL CAPS:`, `Title Case:`) into `description`, `pros` or `cons` as if it were prose.
   Before marking a batch done, grep for tell-tale artifacts: a short capitalized phrase followed by
   `":"` inside an array value, and sentences ending mid-clause ("…with a.").

When the same ASIN reappears across sibling guides, reframe the same real facts around that article's
angle rather than copy-pasting the paragraph — but do not re-fetch data you already have cached.

### MANDATORY: Templated prose must be genuinely unique per article
A batch generator that builds `introParagraphs` from one fixed template per cluster produces
near-duplicate content across dozens of live URLs — a real thin-content / doorway-page risk, not a
stylistic nitpick. Required for any prose that appears on every article in a cluster:
1. Vary the template by the same `classify(title)` categories used for `howToChoose`/`faq`, with
   **3-5 distinct phrasings per category**, rotated so no two articles in a category read identically.
2. Swapping the product noun into an otherwise identical sentence is **not** enough variation — the
   sentence structure and reasoning must differ.
3. Before marking a batch done, run a mechanical duplicate check: extract every article's
   `introParagraphs` and grep for repeated **8+ consecutive word** runs across more than 2-3 articles.
   Any hit means the template needs more variation.

### MANDATORY: Sibling articles in a cluster must not review the identical product set
A 152-article batch on the predecessor site shipped with 106 articles (70%) having byte-identical
`products[]`, because the classifier's keyword regexes matched none of their titles and ~60% of rows
silently fell through to the same two generic queries. The pipeline is deterministic, so identical
queries produce identical articles. Nothing in the standard verification suite compares *across*
articles, so this must be an explicit extra step. For **any batch of 10+ articles sharing a category**:
1. **Audit query-assignment coverage** after generating queries: count rows that fall through to only
   the base/generic query set. A distinguishing term in a title (adjective, material, size, use case,
   numeric spec) that matches no regex branch means the classifier needs another branch.
2. **A numeric claim in a title is a checkable fact**, not just a search term. Filter candidates by
   whether their own title contains a matching (or close-tolerance) number, so a "12 ft Skeleton"
   article doesn't review arbitrary-sized skeletons. If no real product exists at that spec, exclude
   the row rather than force a mismatch.
3. **Run the cross-article duplicate check before registering/pushing**: group articles by identical
   (or same-first-3) `products[].name` lists; any group of 2+ is a real defect.
   Target for a batch: **no pair sharing more than 2 ASINs, and a distinct #1 pick.**
4. **For "Under $X" tier articles**: sort eligible candidates by price and take an **evenly spaced
   spread across the full 0..ceiling range**, not the first N in pool order — otherwise every higher
   tier re-picks the same cheap top-8.
5. Keep a **deterministic per-slug rotation** of the final candidate list (rotate by a hash-of-slug
   offset before the dedup/selection loop) as a last-resort safety net for genuine synonym titles.

This is distinct from the duplicate-prose rule above: that covers templated wording, this covers the
underlying product selection, which is the more serious defect.

### MANDATORY: Every product needs `imageUrl`; `tsc` must be clean
`next.config.ts` sets `typescript.ignoreBuildErrors: true`, so **Vercel reports "Ready" even with type
errors** — a guide once shipped a product with no `imageUrl` this way. `gen-p2-batch.mjs` rejects any
pick without an image. After every batch, `npx tsc --noEmit` must report **0 errors** before
committing. A green Vercel deploy is not evidence the code type-checks.

### Generator-script pitfalls — check *before* running a new `gen-*.mjs`
None of these throw a build or TypeScript error; they only show up as visibly wrong output.
1. **No em/en dash anywhere** in generated text — not just `description`. Run
   `grep -c "—\|–"` on the script before generating and on the output `data/guides/*.ts` after.
2. **`introParagraphs` must serialize multi-line**, ending in a bare `];` on its own line
   (`JSON.stringify(intro, null, 2)`). Single-line output makes the extraction regex greedily match
   through to the next `\n];` and dump every product field into the rendered intro as `<p>` tags —
   HTTP 200, `tsc` clean, page visibly broken.
3. **FAQ keys are `q`/`a`**, not `question`/`answer`.
4. **`specs` must never be `[]`.**
5. **`relatedGuides` must never be a hardcoded `[]`** — compute real sibling links (other price tiers
   or variants in the cluster). An empty array silently drops the Related Guides section.
6. **Never reconstruct `"Label: description"` when the captured label already ends in a colon** inside
   the bold markers (source `**Live price gate:**`) and then append another `": "` — the doubled colon
   renders as a description with a leading stray `": "`. Strip the trailing colon at the source, and
   make the downstream split defensive: `.split(/:\s*/).filter(Boolean)`.

**Always load the actual page (or `curl` + grep) after running a new gen script, before telling the
user a batch is done.** `tsc --noEmit` passing is not sufficient evidence the pages render.

### Content Tone
Direct, practical, written for people living in limited space on the road. No marketing superlatives
without specific backing. Brand name in visible copy is **"RV Gear Lab"** — never "RVGearLab",
"RV GearLab" or "Rv Gear Lab".

### Price language — never print an exact price in page copy

**Never write a specific price figure anywhere a reader can see it** — not in `introParagraphs`,
product `description`, `buyingCriteria`, `howWeEvaluated`, `howToChoose`, `faq`, `bottomLine`,
`metaTitle` or `metaDescription`. No `$169.99`, no `$169`, no "about $170", no "just under $500"
aimed at one product, and no derived figure such as "costs $16.00 less than the pick above".

**Why.** The Associates terms let us cache Amazon product data for at most 24 hours, after which it
must be refreshed from the API or stopped from being displayed, and a displayed price has to come
from the API rather than be typed in. A figure hardcoded into a guide is stale the week after it
ships and cannot be refreshed, so it is both a policy exposure and a trust problem: a reader who is
told $169 and lands on $249 does not come back. The site renders no Amazon price today — every
`<BuyButton>` says "Check price on Amazon" and sends the reader to the live listing — so the only
place a price can leak onto the page is our own prose.

**Write this instead.** Position the pick, do not price it:
- **Band within this shortlist** — "the entry pick here", "sits mid-pack on price", "the most
  expensive pick in this guide".
- **Relative to a named sibling** — "costs noticeably less than the CURT TruTrack", "roughly double
  the entry pick", "a small step up from the pick above". Name the real product so the comparison is
  checkable, exactly as the exact-figure version used to be.
- **What the money buys** — tie the step up to a mechanism, which is the part that stays true:
  "the step up buys a steel frame and a 250 lb load rating instead of 150 lb".

Relative statements survive a price change; figures do not. Keep the reasoning, drop the number.

**The `price` field stays.** `price` in `data/guides/<slug>.ts` is internal data used for ranking,
tier selection and the drift report — same status as `rating` / `reviews`. It must never be
rendered, and `RichGuidePage` does not render it. Do not add a price column, chip or badge.

**"Under $N" guides are the exception, and only in the frame.** The ceiling may appear in `slug`,
`title`, `metaTitle`, `metaDescription` and as the guide's stated scope ("every pick here lands
under $300"), because that is our editorial frame rather than a product price claim. It must still
never be attached to an individual product. These 360 guides make a promise that goes stale on its
own, so re-check them against the drift report before re-publishing.

### Amazon rating / review count display — FORBIDDEN
**Never display Amazon's star rating or review count anywhere in page content** — not in the product
badge row, not as a "Rating" column in the comparison table. Amazon's affiliate terms prohibit
republishing their customer rating/review data on third-party sites. The `rating` / `reviews` fields
may exist in `data/guides/<slug>.ts` for internal ranking, but must never be rendered. Do not
reintroduce a rating display, or an `AggregateRating`/`Review` schema populated with those numbers,
without explicit user sign-off.

---

## 8. Scoring Rules

- The editorial score is the **"RV Gear Lab Fit Score"** (see `components/guide/GuideDetail.tsx`).
- 0–10 scale, displayed to one decimal (`score.toFixed(1)`).
- Use `scoreToColor()` from `lib/utils.ts` for the color class — never hardcode colors.

| Criterion | Weight |
|---|---|
| Small-Space Fit | 25% |
| Build Quality | 20% |
| Ease of Use | 20% |
| Value for Money | 20% |
| Buyer Feedback | 15% |

Do not emit `AggregateRating` schema for Fit Scores — they are editorial, not crowd-sourced.

---

## 9. Image Rules

- Every `<Image>` needs descriptive `alt` — empty `alt=""` only for decorative SVG with
  `aria-hidden="true"`. Product images: `alt={product.name}`. Hero: `alt={guide.title}`.
- Kebab-case filenames.
- Use `next/image`, never a raw `<img>` for content images. `fill` + `sizes` for card grids, e.g.
  `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"`. `priority` on the LCP/hero image.
- OG images: 1200×630, or an absolute Supabase URL.

---

## 10. URL & Content Architecture

| Route | Purpose |
|---|---|
| `/` | Homepage |
| `/<silo>` | Silo hub (14 of them) |
| `/<silo>/<slug>` | Guide / informational article — **the canonical content URL** |
| `/guide` | All guides index |
| `/guide/all` | Full guide listing |
| `/guide/<slug>` | Legacy fallback route |
| `/author/<slug>` | Author bio |
| `/about`, `/contact`, `/how-we-review`, `/privacy-policy`, `/affiliate-disclosure` | Static pages |
| `/api/cron/*` | Vercel cron (robots-blocked) |

### Slug Rules
- Lowercase kebab-case.
- **Never change an existing slug** without adding a 301 in `next.config.ts`. The existing redirect
  block shows the pattern: when a slug moves, redirect it from `/guide/` **and from every silo
  prefix**, since the old URL may have been indexed under any of them.

### Sitemap
`app/sitemap.ts`, Supabase slugs take precedence, static data fills gaps. Sitemap at
`https://www.rvgearlab.com/sitemap.xml`.

---

## 11. Internal Linking Rules

- Every guide links to at least one related guide via `relatedGuides[]`.
- "How We Picked" links to `/how-we-review`; the disclosure bar links to `/affiliate-disclosure`.
- Author bylines link to `/author/<slug>` via `authorToSlug()` from `data/authors.ts`.
- Breadcrumbs link back to the silo hub and home.
- Before adding a `relatedGuides` href, verify the target slug exists in `data/guides.ts` or the
  informational data. Broken internal links are the easiest avoidable defect in this project.

---

## 12. SEO Fixes Already In Place — do not undo

- Non-www → www 301 in `next.config.ts`.
- A large block of slug-change 301s in `next.config.ts` (leveling ramps, cell booster, catalytic
  heater, vent fan, RV cover, etc.), each mapped from `/guide/` and all six RV silo prefixes.
- `/author` → `/about` 301.
- Double-title-suffix bug fixed via `{ absolute: fullTitle }` in `buildMetadata()`.
- No `FAQPage` schema on commercial pages.
- Security headers in `next.config.ts`: X-Frame-Options, X-Content-Type-Options, Referrer-Policy,
  Permissions-Policy, HSTS.
- `robots.ts`: AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended…) explicitly allowed;
  **Bytespider and CCBot blocked outright** — they crawled aggressively for training data without
  sending traffic and drove a large share of billed ISR Read Units. Keep them blocked.
- `/admin` and `/api/` blocked in `robots.ts`.
- Supabase + static fallback in the sitemap.
- `revalidate = 604800` on article routes.
- `ItemList` schema uses only `name` + `url`.
- Daily IndexNow cron at `/api/cron/ping-indexnow` (`vercel.json`, 03:00 UTC).
- `prefetch={false}` on every internal `<Link>`.

---

## 13. Current SEO Caution Areas

- **Slug changes** require a 301 from `/guide/<old>` *and* every silo prefix.
- **`revalidate`** is 604800; do not lower it without understanding CDN/ISR cost, and do not raise it.
- **`typescript.ignoreBuildErrors: true`** means a green Vercel deploy proves nothing. Always run
  `npx tsc --noEmit` yourself.
- **IndexNow** submits whatever `app/sitemap.ts` returns, capped at the 10,000-URL per-request limit. The sitemap is currently ~3,300 URLs; if it passes 10,000 the cron returns an error instead of submitting, and the request must be batched.
- **`m.media-amazon.com`** is in `remotePatterns` but Amazon ToS restricts hotlinking outside PA API.
- **`llms.txt` / `llms-full.txt`** in `public/` — keep updated when site structure or scope changes.
- **Static vs Supabase sync** — if a guide exists in Supabase with a slug differing from
  `data/guides.ts`, both can appear in the sitemap. Audit `app/sitemap.ts` merge logic before bulk
  publishing.

---

## 14. Build, Lint & QA Commands

```bash
npm run dev      # NODE_OPTIONS=--max-old-space-size=5120 next dev --webpack --disable-source-maps
npm run build    # NODE_OPTIONS=--max-old-space-size=4096 next build
npm run start
npm run lint     # eslint
npx tsc --noEmit # must be 0 errors — the build will NOT catch these
```

Seed scripts (Supabase): `npm run seed:products` → `seed:guides` → `seed:deals` → `seed:settings`,
in that order (guides reference product IDs).

**Note:** both `dev` and `build` need raised Node heap limits because of the guide count. A plain
`next build` will OOM.

### Pre-commit gate
1. `npx tsc --noEmit` — zero errors.
2. `npm run lint` — zero errors.
3. Verify the changed page's `<title>` has no double `| RV Gear Lab`.
4. Verify the canonical has no trailing slash.
5. Grep the diff for `smartspace`/any non-`rvgearlab-amz-20` Amazon tag, em/en dashes, "we tested",
   and the drafting-process leak phrases.
6. Grep the diff for an exact price in page copy: `grep -nE '\$[0-9]' data/guides/<slug>.ts`.
   Only the "Under $N" frame fields may match. See **Price language**.

---

## 15. Deployment & Environment

**Platform:** Vercel. Non-www → www redirect is handled at the application layer in `next.config.ts`.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL — `https://www.rvgearlab.com` |
| `NEXT_PUBLIC_GA_ID` | GA4 property; analytics are off until set |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity project ID; session recording/heatmaps are off until set |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console HTML-tag token |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role JWT — treat as a root credential |
| `INDEXNOW_KEY` | IndexNow key; **no fallback by design** (see §20) |
| `CRON_SECRET` | Guards the `/api/cron/*` routes if configured |

Creators/PA API credentials for product sourcing also live in `.env.local`.

### Secrets Policy
- **Never commit `.env.local`** — it is gitignored and holds live Supabase and API credentials.
- `.env.example` is the template for every variable the code reads; keep it in sync with placeholders only, never real values.
- Set all vars in Vercel → Project Settings → Environment Variables.

`isSupabaseConfigured()` gates every Supabase call — a build without Supabase env vars succeeds and
serves static data.

---

## 16. Agent Workflow Rules

### Before writing any code
1. Read this file.
2. Read `AGENTS.md` — Next.js 16 version-specific rules.
3. Read the source file you are about to edit. Never edit blind.
4. Check `lib/seo.ts` before adding metadata — use `buildMetadata()`.
5. Check `next.config.ts` before adding a redirect — follow the existing pattern exactly.

### Before touching routes
- Verify the slug does not already exist in `data/guides.ts` or the informational data.
- Check how `app/sitemap.ts` will pick it up.
- Remember content lives at `/<silo>/<slug>`, not `/guide/<slug>`.

### Reporting format
```
Files changed: [absolute paths]
SEO impact: [none | low | medium | high — with reason]
Redirects added: [none | list]
Schema changes: [none | describe]
Build status: [tsc clean? lint clean? page rendered?]
```

### What agents must not do
- Change the canonical domain from `www.rvgearlab.com`.
- Remove the non-www redirect or any existing 301.
- Add `AggregateRating` schema built from editorial scores.
- Write "we tested" / "we tried", or expose the drafting process.
- Ship an Amazon URL with any tag other than `rvgearlab-amz-20`.
- Remove `revalidate` from article routes without explicit instruction.
- Commit `.env.local` or any real secret.
- Rename a published slug without a 301.
- Commit or push unless the user asks.

---

## 17. Batch Workflow & Usage Optimization

### Pipeline (current, Round 2 onward)
1. **Pick rows** for one cluster per batch (20-30 guides). Check `data/guides/<slug>.ts` does not
   already exist.
2. **Source** with `node scripts/stage-a.mjs` (sourcing + selection, zero LLM tokens; per-cluster
   `q`/`must`/`ban`/`req` config; `RV_TMP` = query cache dir). Run in the background — roughly 4s per
   query.
3. **Prefilter the pool with a script before any agent reads it** — the single biggest token saving.
   Drop items with no features or image, drop wrong-spec items (voltage, Ah range, amp rating, size)
   by regex on the title, dedupe near-identical listings, trim features to the first ~5 bullets at
   ~200 chars each, cap at 10 candidates per slug. Agents get the trimmed pool, never the raw one.
4. **Research once per cluster**, not per agent: 2-3 WebSearches, write findings to a short
   `research_<cluster>.md`, pass the path to writer agents. Writer agents must not run their own
   WebSearch.
5. **Writer agents:** Sonnet for template-shaped guide writing (Opus only for tricky clusters),
   4-6 guides per agent, grouped by cluster so one agent can keep its product sets distinct. Share one
   brief file (`scripts/best-brief.md`) rather than long prompts. One validation run and one `tsc` at
   the end, not per file.
6. **Build:** `SLUGS=<cluster|slug list> node scripts/hybrid-build.mjs <facts> <prose>` (silo +
   related) → `node scripts/gen-p2-batch.mjs <pool> scripts/p2-content [--register]` (validation +
   write) → `node scripts/generate-guides-index.mjs` → `npx tsc --noEmit`.
7. **Verify:** cross-article ASIN overlap check (no pair > 2 shared ASINs, distinct #1), then curl
   every new URL for 200 + `rvgearlab-amz-20` present + no other tag + no "we tested".
8. Commit locally; push only when the user asks.

`scripts/generate-guides-index.mjs` regenerates the slug → dynamic-import map used by the article
routes. **Skipping it means the new guide's URL 404s.** It only includes files exporting the modern
`products`/`howWeEvaluated`/`howToChoose`/`buyingCriteria` shape and silently skips older ones, so it
is always safe to re-run across the whole `data/guides/` directory.

**`scripts/generate-guide-page.mjs` is legacy — do not run it for new batches.** Every literal
`app/(site)/<silo>/<slug>/page.tsx` file gets eagerly rebuilt on every deploy forever; at scale this
blew past Vercel Hobby's 45-minute build timeout. New guides render on first request via the dynamic
`[slug]` route and are ISR-cached from then on, at zero build cost.

### Deepening an existing thin guide
Thin guides are measured by the total length of the six editorial exports (`introParagraphs`,
`howWeEvaluated`, `howToChoose`, `buyingCriteria`, `faq`, `bottomLine`). The shipped thin tier sits
around 4,700–5,300 chars; **the target after deepening is 13,000–14,500 chars**, with product data
(name, price, ASIN, `imageUrl`, `amazonUrl`, `specs`, `rank`, `badge`) left completely unchanged.
Do this by writing a per-slug prose module and merging it mechanically — never by hand-editing
`data/guides/<slug>.ts`, which risks corrupting product data.

### Usage rules
- Never paste batch HTML or pool JSON into chat — reference file paths only.
- Do not `cat` large files; use `grep` / `head` / small node or python summaries. Don't re-read files
  you just wrote.
- Don't wait with chained `sleep`; background long commands and continue.
- 5-6 products per guide (7 only if the pool is strong) and 5-6 FAQs. More length past that adds
  tokens without SEO value.
- Near-synonym keywords ("for the money", "value", "budget", "on Amazon") must get distinct angles
  and product sets. Decide the angle + candidate ASINs per slug in the orchestrator before dispatch,
  so agents don't spend tokens negotiating overlap.
- Skip keywords whose prefiltered pool has fewer than 4 genuinely matching products, and report them
  to the user, instead of letting an agent hunt for them.

---

## 18. Final QA Checklist

**Build**
- [ ] `npx tsc --noEmit` — 0 errors (the Vercel build will not catch these)
- [ ] `npm run lint` — 0 errors

**Metadata**
- [ ] No double `| RV Gear Lab` in `<title>`
- [ ] `metaTitle.length + 14 <= 60`
- [ ] `120 <= metaDescription.length <= 160`, unique, not `SITE_DESCRIPTION`
- [ ] `buildMetadata()` used; canonical has no trailing slash

**Structured data**
- [ ] No `AggregateRating` from editorial scores, no `FAQPage`, no `Review` claiming testing
- [ ] `ItemList` has only `name` + `url`
- [ ] Author schema matches `isPerson` in `data/authors.ts`

**Affiliate & content**
- [ ] Every `amazonUrl` carries `tag=rvgearlab-amz-20` and nothing else
- [ ] `rel="noopener noreferrer sponsored"` on outbound links
- [ ] `<AffiliateDisclosureBar>` present
- [ ] No "we tested" / "we tried"; no drafting-process leak phrases
- [ ] No em dash or en dash
- [ ] No Amazon star rating or review count rendered
- [ ] No exact price figure in any editorial export, `metaTitle` or `metaDescription`

**Data shape**
- [ ] Every product has a non-empty `imageUrl` and `specs`
- [ ] `faq` uses `{ q, a }` and has 5-6 entries
- [ ] `relatedGuides` non-empty and every href resolves
- [ ] `howToChoose` has the 6 sub-sections, every pick named from this guide's `products[]`

**Cluster batches (10+ articles)**
- [ ] Cross-article product-set duplicate check run — no identical `products[]` between siblings
- [ ] 8+ word duplicate-phrase check run on `introParagraphs`

**Links & images**
- [ ] Every internal `<Link>` has `prefetch={false}`
- [ ] No renamed slug without a 301
- [ ] Every `<Image>` has non-empty `alt`; hero has `priority`

**Security**
- [ ] No secrets staged; `robots.ts` still blocks `/admin` and `/api/`

---

## 19. Suggested Next Steps

1. **Clean the remaining cloned-project leftovers** listed in §20 (items 4-7).
3. **Silo hub content** — give each of the 14 hubs real editorial copy and featured-guide links.
4. **Deepen the remaining thin guides** — a large share of the 2,747 roundups are still at ~5k chars
   of editorial body.
5. **Retrofit the drafting-process leak phrases** out of older P2/P3 guides.
5b. **Retrofit exact prices out of published guides.** Measured 2026-11-11: **30,645 price
   figures across 2,741 guides**, against 12,283 internal `price` fields. They are concentrated
   in product `description` paragraphs, the `howToChoose` budget table and `introParagraphs`.
   `gen-p2-batch.mjs` now blocks new ones, so this backlog is closed-ended. Rewrite to bands and
   relative comparisons per **Price language** (§7); do not simply delete the sentence, since the
   comparison it carries is the editorial value. Re-running the generator over a cluster's content
   modules lists every offending line.
5c. **Re-check the 360 `under-$N` guides against live prices.** Their ceiling is a promise made in
   the slug, title and URL, and it goes stale whether or not prose quotes a figure. Needs a drift
   report built on `scripts/sync-amazon-prices.mjs` (updates internal `price` only, renders nothing).
6. **`llms.txt` / `llms-full.txt` audit** — confirm they describe RV Gear Lab's actual structure.
7. **Footer link audit** — `/affiliate-disclosure`, `/privacy-policy`, `/how-we-review`, `/contact`
   all exist and are linked.
8. **Seed script idempotency** — confirm the seed scripts upsert rather than insert.

---

## 20. Known leftovers from the cloned project

Found during the 2026-11-10 audit. These are real bugs, not stylistic nits:

1. ~~**IndexNow is a no-op.**~~ **Fixed 2026-11-10.** Key `93cc4d00bcba4400ad7a916061dcef95`,
   verification file `public/93cc4d00bcba4400ad7a916061dcef95.txt`, and the same value as the
   `INDEXNOW_KEY` fallback in `app/api/cron/ping-indexnow/route.ts`. **Do not delete that `.txt`
   file** or submissions fail verification. The key is public by design, so it is committed.
2. ~~**`scripts/indexnow.mjs` carries the predecessor's key.**~~ **Fixed 2026-11-10.** It had
   `HOST = "www.deskfinds.com"` and the old key, so it would have pinged a different site entirely.
   It now uses this host and key, resolves each slug's silo from `data/guides.ts` (falling back to
   the informational data) so it submits `/<silo>/<slug>` rather than the 308-redirecting
   `/guide/<slug>`, **skips** any slug it cannot resolve instead of guessing a 404 URL, and supports
   `--dry-run`.
3. ~~**`VS_SLUGS` lists desk-site URLs.**~~ **Fixed 2026-11-10.** The cron route no longer builds
   its own URL list at all: it imports `app/sitemap.ts` and submits exactly what the sitemap
   advertises, so the two can never drift again. Previously it sent `/guide/<slug>` (redirects),
   `/reviews/<slug>`, `/categories/<slug>`, `/compare`, `/deals` and four desk-site VS slugs, almost
   all of which 404 here.
4. **`.gitignore` still ignores `/HardcastlesRV-*/`** — harmless, but rename it if raw batch folders
   are ever used here.
5. **`lib/admin-auth.ts` and the `lib/*-store.ts` admin-write modules survive with no admin routes.**
   Dead code; verify nothing imports them before deleting.
6. **`data/products.ts` and `data/categories.ts`** are predecessor seed data. The IndexNow route still
   iterates them. Check their contents are RV/camping before relying on them.
7. **`lib/guide-headings.ts` was already patched once** for a stale "to Your Garden or Yard" heading
   from another site (now "Your RV" / "Your Camp Setup"). When cloning a template, grep
   `components/` and `lib/` for other niches' vocabulary (garden, desk, office, chair, monitor)
   before launching content.
