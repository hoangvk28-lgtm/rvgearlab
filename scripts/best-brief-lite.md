# Writer brief (LITE): Hardcastle's RV "best" guide prose JSON, about half the length of best-brief.md
Same rules as scripts/best-brief.md (no invented specs, no "we tested", no em/en dashes, no ratings/review counts/popularity, never expose the drafting process, "d" argues only FOR the pick, limitations go in cons). Only the length changes. Target: about 700-800 words of prose per guide.

Write ONE JSON file per slug at <prose-dir>/<slug>.json. Read only the facts file for that slug. One Write call per file.

{
 "short": "lite",
 "metaDescription": "120-160 chars",
 "intro": ["ONE paragraph, 2-3 sentences, angle-specific"],
 "products": [{   // 3-5 picks, ranked; keep only genuine matches
   "asin": "...", "short": "Brand + model, 2-3 words", "badge": "unique per guide",
   "d": ["ONE paragraph, 2-3 sentences: what it is + 1-2 real specs + why it beats a named neighbour + who it suits"],
   "specs": ["2-6 word key point" x3],
   "pros": [3 items, 6-14 words each],
   "cons": [2 items, 6-14 words each],
   "bestFor": "short phrase"
 }],
 "howWeEvaluated": [3 {"title":"...","description":"1 sentence"}],
 "criteria": [4 {"criterion":"3-6 words","explanation":"2 sentences: what it is and why it matters; how to check it on the listing"}],
 "howToChoose": {
   "primary": {"subheading":"By <attribute>","rows":[["situation","<short>","why (max 8 words)"] x3]},
   "tradeoff": {"subheading":"A vs B","a":{"label":"A","text":"1-2 sentences naming picks"},"b":{"label":"B","text":"1-2 sentences naming picks"},"note":"one line naming a pick"},
   "axis2": {"subheading":"By <other axis>","header":"label","rows":[["preference","<short>"] x3]},
   "useCase": {"subheading":"For <use> Specifically","lookFor":"1 sentence","inComparison":"1 sentence naming a pick"},
   "spendMore": "1 sentence naming a pick", "save": "1 sentence naming a pick"
 },
 "faq": [3 {"q":"...","a":"2 sentences"}]   // compatibility, common mistake, setup or maintenance
}
Every table row and card text must contain a pick's "short" name verbatim. Siblings in the same cluster must not share sentences, criteria labels or FAQ questions.
