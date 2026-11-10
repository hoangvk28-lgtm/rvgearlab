// ── Homepage presentation mapping (RV Gear Lab) ───────────────────────
// PRESENTATION CONFIG ONLY. Every entry references an EXISTING guide or
// product by slug — nothing here creates records or content. Missing slugs are
// skipped at render time, and a guide is never shown twice on the page.
//
// FALLBACK NOTE: "mostRead" is an editorial selection, not analytics-driven —
// replace with real pageview ranking once a data source exists.

export type ArticleFormat = "Buying Guide" | "Review" | "Explainer" | "Ideas" | "How-To";

export interface HomepageArticleRef {
  slug: string;
  /** Optional eyebrow override; otherwise derived from the guide. */
  format?: ArticleFormat;
}

export const homepageEditorial = {
  /** First slug that exists wins. */
  featured: {
    candidates: ["best-power-stations-for-rvs", "best-portable-power-stations-for-camping", "best-solar-generator-for-rv"],
    eyebrow: "Featured Guide",
    headline: "The Best Power Stations for Your RV",
    dek: "We compare battery capacity, inverter output, 30-amp compatibility and solar charging so you can match a power station to the loads you actually run, from the fridge to the roof AC.",
    byline: "Bowen Higgins",
  },
  latest: [
    { slug: "best-camping-tents", format: "Buying Guide" },
    { slug: "best-portable-air-conditioners-for-rvs", format: "Buying Guide" },
    { slug: "best-camping-stoves", format: "Buying Guide" },
  ] as HomepageArticleRef[],
  mostRead: [
    { slug: "best-quietest-portable-generator-for-rv" },
    { slug: "best-backpacking-tents" },
    { slug: "best-50-amp-rv-generator-transfer-switch" },
    { slug: "best-camping-sleeping-bags" },
    { slug: "best-dehumidifiers-for-rvs" },
    { slug: "best-camping-chairs" },
  ] as HomepageArticleRef[],
  departments: [
    {
      id: "power-electrical",
      title: "RV Power & Electrical",
      href: "/power-electrical",
      topics: ["Power Stations", "Inverter Generators", "Solar Generators", "Transfer Switches", "30/50 Amp"],
      articles: [
        { slug: "best-solar-generator-for-rv-30-amp", format: "Buying Guide" },
        { slug: "best-portable-power-station-with-30-amp-rv-plug" },
        { slug: "best-50-amp-solar-generator-for-rv" },
        { slug: "best-inverter-generators" },
        { slug: "best-lifepo4-portable-power-stations" },
      ] as HomepageArticleRef[],
    },
    {
      id: "tents-shelter",
      title: "Tents & Shelter",
      href: "/tents-shelter",
      topics: ["Family Tents", "Backpacking Tents", "4-Season Tents", "Canopies", "Tarps"],
      articles: [
        { slug: "best-6-person-family-camping-tents", format: "Buying Guide" },
        { slug: "best-4-season-canvas-tents" },
        { slug: "best-backpacking-tents-for-2-people" },
        { slug: "best-ultralight-camping-tents" },
        { slug: "best-4-season-tent-for-family" },
      ] as HomepageArticleRef[],
    },
    {
      id: "interior-comfort",
      title: "RV Interior & Comfort",
      href: "/interior-comfort",
      topics: ["Microwaves", "Air Fryers", "Ice Makers", "Heaters", "Air Conditioners"],
      articles: [
        { slug: "best-microwaves-for-rvs", format: "Buying Guide" },
        { slug: "best-air-fryers-for-rvs" },
        { slug: "best-ice-makers-for-rvs" },
        { slug: "best-space-heaters-for-rvs" },
      ] as HomepageArticleRef[],
    },
  ],
  workspaceIdeas: {
    title: "Sleep Gear",
    href: "/sleep-gear",
    articles: [
      { slug: "best-backpacking-sleeping-bags", format: "Buying Guide" },
      { slug: "best-camping-cots-for-adults" },
      { slug: "best-sleeping-pad-for-side-sleepers" },
      { slug: "best-backpacking-sleeping-bags-for-kids" },
    ] as HomepageArticleRef[],
  },
  workBetter: {
    title: "Camp Kitchen",
    href: "/camp-kitchen",
    articles: [
      { slug: "best-backpacking-stoves" },
      { slug: "best-soft-coolers" },
      { slug: "best-camping-coffeemakers" },
      { slug: "best-backpacking-cookpots" },
    ] as HomepageArticleRef[],
  },
  /** Product-level picks are added once review pages exist. */
  editorsPicksFallback: [] as { slug: string; useCase: string }[],
};

export const shoppingCategories = [
  { icon: "battery", label: "RV Power", note: "Power stations, generators", href: "/power-electrical" },
  { icon: "drop", label: "RV Water", note: "Washers, dishwashers", href: "/water-plumbing" },
  { icon: "hitch", label: "Towing", note: "Hitches, levelers, TPMS", href: "/towing-leveling" },
  { icon: "wrench", label: "RV Care", note: "Sealants, covers, upkeep", href: "/rv-care" },
  { icon: "tent", label: "Tents", note: "Family, backpacking, 4-season", href: "/tents-shelter" },
  { icon: "sleep", label: "Sleep Gear", note: "Bags, pads, cots", href: "/sleep-gear" },
  { icon: "pot", label: "Camp Kitchen", note: "Stoves, coolers, coffee", href: "/camp-kitchen" },
  { icon: "chair", label: "Camp Furniture", note: "Chairs, tables, hammocks", href: "/camp-furniture" },
] as const;

export type CategoryIconName = (typeof shoppingCategories)[number]["icon"];
