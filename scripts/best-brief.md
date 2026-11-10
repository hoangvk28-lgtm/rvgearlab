# Writer brief: Hardcastle's RV "best" guide prose JSON
Write ONE JSON file per slug at <prose-dir>/<slug>.json. Read only: the facts file <facts-dir>/<slug>.json and the cluster research file. No WebSearch, no other repo files.
Use ALL 6 picks from facts (any order; rank 1 = your top pick). Never invent specs, ratings, review counts or test results. Never write "we tested/tried/measured", "in our lab". No em/en dashes anywhere (use commas, periods, parentheses). Do not mention Amazon ratings, review counts, or popularity. Price is shown by the site; don't state exact prices in prose except budget ranges.
Each sibling article in the cluster has a different angle (given below); write from that angle, don't produce generic regulator copy.

Schema:
{
 "metaDescription": "120-160 chars, one sentence, what the guide covers and who it helps",
 "intro": ["para 1 (2-3 sentences, angle-specific)", "para 2 (2-3 sentences, how this list was chosen in your own words; vary structure from sibling articles)"],
 "products": [{
   "asin": "...", "short": "2-3 word name used in tables, e.g. 'RVGUARD Valve' (must start with brand)",
   "badge": "e.g. 'Best Overall', 'Best Budget' (unique per guide)",
   "d": ["opening para: role in this list + 1-2 real specs from features", "positioning para: concrete tradeoff vs the pick above/below by name", "verdict para: best-for buyer + honest caveat"],
   "specs": ["2-6 word key point", "...", "..."] (3 items, from feature bullet labels/facts),
   "pros": [3-4 items, each 6-14 words, plain friendly language, real facts],
   "cons": [2-3 items, each 6-14 words, real tradeoffs],
   "bestFor": "short phrase"
 }],
 "howWeEvaluated": [4-5 {"title":"...","description":"1-2 sentences, angle-specific methodology; 'we evaluated/compared listings', never testing"}],
 "criteria": [5-6 {"criterion":"3-6 words","explanation":"3-4 sentences: what it is; why it concretely matters; how to check it on the listing"}],
 "howToChoose": {
   "primary": {"subheading":"By <primary attribute>","rows":[["situation","<short name>","why"], 4-5 rows]},
   "tradeoff": {"subheading":"<A> vs <B>","a":{"label":"A","text":"mechanism + which picks (by short name)"},"b":{...},"note":"one-line recommendation naming a pick"},
   "axis2": {"subheading":"...","header":"column label","rows":[["preference","<short name>"], 3-5 rows]},
   "useCase": {"subheading":"For <use case> Specifically","lookFor":"spec to check","inComparison":"which named pick and why"},
   "spendMore": "reasoning naming specific picks", "save": "reasoning naming specific picks"
 },
 "faq": [5 {"q":"...","a":"2-4 sentences"}] covering: compatibility/requirements, common mistake, X worth it over Y, setup how-to, maintenance/edge case
}
Every table row and every card text must contain at least one pick's "short" name verbatim.

## Never expose the drafting process (hard fail in gen-p2-batch.mjs)
Write as an editor who knows the product category. The reader must never learn that you worked from a fact sheet. Forbidden phrasing includes: "we saw", "we reviewed", "we have", "we found", "the text/excerpt/bullets/features/facts/data we...", "in the features/facts/excerpt/data", "facts provided", "the pool", "candidates", "not listed in the features".
When a spec is missing, say it plainly as a buyer tip: "The listing does not state the gauge range, so confirm it before buying" or "No NSF or CSA mark is named on the listing". Never "not stated in the text we saw".

## Depth bar (from pilot review)
- Each of the 3 "d" paragraphs must be 2-3 full sentences (not 1). The positioning paragraph names the neighbouring pick(s) and the concrete mechanism that separates them.
- Pros must be real product facts; a price-only pro ("Lowest price here") is allowed at most once per guide.
- Angle: derive each slug's angle from its keyword (feature, use case, vehicle, stage count, etc.) and make intro, criteria, howToChoose and FAQ specific to it. Siblings in the same cluster must not share intro sentences, criteria labels, or FAQ questions word for word.

## Reusing prior reviews (facts "prior" field)
Some picks carry `prior: {guide, text}`: the description that product already has in another guide on the site. Reuse its facts to save effort, but never copy its sentences: rewrite all 3 paragraphs for this guide's angle and siblings, with different sentence structure. Pros/cons/specs may repeat facts but should not be the identical list.

## "d" renders as "Why it made the shortlist" (positive case only, from Round 3 batch 3)
The 3 "d" paragraphs are shown on the page under "Why it made the shortlist". Write them as the case FOR the pick: (1) what it is and its key real specs, (2) where it beats or differs from named neighbouring picks, (3) who it is best for. Do NOT put caveats, missing specs, "costs more", "confirm/verify", "however/but/though" or other limitations in "d"; those belong only in "cons" (and FAQ/criteria where relevant). The page also filters such sentences out, so any limitation written in "d" is wasted tokens.
