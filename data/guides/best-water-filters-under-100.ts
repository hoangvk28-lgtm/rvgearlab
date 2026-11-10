export const guideSlug = "best-water-filters-under-100";
export const guideTitle = "5 Best Water Filters Under 100 in 2026";
export const metaTitle = "Best Water Filters Under 100 in 2026";
export const metaDescription = "Best water filters under $100: five under-sink filters compared on filter life, certifications and install for cabins, vans and a camper's home base.";
export const mainKeyword = "best water filters under 100";
export const introParagraphs = [
  "A hundred dollars buys a serious under-sink filter, and the five picks here run from about $51 to $100 with rated lives of one to five years. All connect to a cold water line, so they suit a cabin, a tiny home, a van build or the kitchen you return to between trips.",
  "Moving toward the cap adds filter life and contaminant coverage, and the notes explain what a year of extra life or an extra certification is worth. None of these is a purifier for untreated water."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/home-golden-hour-campsite.webp";
export const heroImageAlt = "Dome tent and hammock at a forest campsite at golden hour";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-water-filters-under-100-1",
    "rank": 1,
    "badge": "Best Value Under $100",
    "name": "Waterdrop 15UA Under Sink Water Filter System",
    "price": "$51.29",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Di5SxQhbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B083NR5DVY?tag=rvgearlab-amz-20",
    "description": "The Waterdrop 15UA is rated for 19,000 gallons or 2 years on municipal water, with a multistage design that reduces PFAS, lead and chlorine and a 20 times larger dirt-holding area. Its materials are BPA-free and lead-free and certified by IAPMO against NSF/ANSI 372.\n\nAt about $51 it is the cheapest pick here and doubles the one-year life of the CuZn UC-100 for $19 less. The Orvexa lasts longer, and this one has the best certification record at the low end.\n\nCabin and van owners who want certified filtration and a two-year change cycle will like it. Replacement filters cost under $36.",
    "specs": [
      "19,000 gallons or 2 years",
      "Reduces PFAS, lead and chlorine",
      "IAPMO certified to NSF/ANSI 372"
    ],
    "pros": [
      "Two-year rated life",
      "Low purchase price",
      "Larger dirt-holding area resists clogging",
      "Lead-free, BPA-free materials"
    ],
    "cons": [
      "Cold water only",
      "Replacement filter costs about $36"
    ],
    "bestFor": "Cabins and van builds",
    "take": "The best mix of certification, life and price under $100.",
    "catch": "Shut it off before long trips, as the maker advises."
  },
  {
    "id": "best-water-filters-under-100-2",
    "rank": 2,
    "badge": "Best Long Capacity",
    "name": "PUREPLUS Under Sink Water Filter System",
    "price": "$58.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Il86xGL1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08ZSNVF1W?tag=rvgearlab-amz-20",
    "description": "PUREPLUS is rated for 22,000 gallons or 5 years by IAPMO and certified to NSF/ANSI 42 and lead-free to NSF/ANSI 372. A 6-in-1 composite filter and quick-connect fittings keep installation simple, and it fits 1/2 or 3/8 inch faucets.\n\nAt about $59 it costs $8 more than the Waterdrop 15UA and lasts more than twice as long on paper. The Orvexa offers 50,000 gallons for $33 more, so this is the mid-priced long-life pick.\n\nHouseholds that cook and drink a lot of filtered water will like the long life. It also suits a family in a tiny home.",
    "specs": [
      "22,000 gallons, 5 years",
      "NSF/ANSI 42 and 372",
      "6-in-1 composite filter"
    ],
    "pros": [
      "Five-year rated life",
      "Chlorine claim of 99.99 percent",
      "Quick-connect install",
      "Fits 1/2 or 3/8 inch faucets"
    ],
    "cons": [
      "Cold water only",
      "More filter than a single camper needs"
    ],
    "bestFor": "Families using lots of water",
    "take": "A long-life filter at a mid-range price.",
    "catch": "The life rating assumes municipal water."
  },
  {
    "id": "best-water-filters-under-100-3",
    "rank": 3,
    "badge": "Best Mineral-Friendly",
    "name": "CuZn UC-100 Under Sink Water Filter",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/310UFfeeImL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH11CFGB?tag=rvgearlab-amz-20",
    "description": "The CuZn UC-100 is a 3-stage filter using micro sift membranes, KDF-55 and coconut shell carbon, rated for 10,000 gallons or one year. It reduces PFAS, PFOA and PFOS, lead and chlorine and leaves beneficial minerals in the water.\n\nIt costs about $70, the highest price of the shortest-life filters here, and the DIY inline design needs no drilling. The Waterdrop 15UA lasts twice as long for less.\n\nBuyers who prefer the CuZn brand and its tap-water mineral retention will like it. It installs under a kitchen or bathroom sink.",
    "specs": [
      "10,000 gallons or 1 year",
      "KDF-55 and coconut carbon",
      "Reduces PFAS, lead, chlorine"
    ],
    "pros": [
      "Keeps beneficial minerals",
      "No drilling needed",
      "All parts included",
      "Tests against PFAS and lead"
    ],
    "cons": [
      "One-year life at $70",
      "Does not reduce TDS"
    ],
    "bestFor": "Mineral-conscious buyers",
    "take": "A good filter that costs more than similar one-year options.",
    "catch": "The one-year life makes it the weakest value."
  },
  {
    "id": "best-water-filters-under-100-4",
    "rank": 4,
    "badge": "Best Per-Gallon Value",
    "name": "Orvexa Under Counter Water Filter",
    "price": "$91.65",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31QOuQhsFiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H3H4BBJR?tag=rvgearlab-amz-20",
    "description": "Orvexa is rated for up to 50,000 gallons or 5 years and uses micro-sediment membranes, KDF-55 media and coconut shell carbon. It connects to a standard 3/8 inch cold water line and is marketed as NSF certified with lead-free compliance.\n\nAt about $92 it is nearly double the 15UA price and carries the highest capacity rating of the five. The cost per gallon is lowest here if you use that much water.\n\nLarge households and cabins with heavy use will like the 50,000 gallon figure. It saves yearly filter changes.",
    "specs": [
      "50,000 gallons or 5 years",
      "Micro-sediment, KDF-55, carbon",
      "3/8 inch cold line"
    ],
    "pros": [
      "Highest rated capacity here",
      "Compact inline design saves space",
      "Connects to a standard 3/8 inch line",
      "Five years between changes"
    ],
    "cons": [
      "Costs nearly twice the 15UA",
      "Cold water only"
    ],
    "bestFor": "Heavy-use households",
    "take": "The lowest cost per gallon if you use a lot of water.",
    "catch": "You pay upfront for capacity you may not need."
  },
  {
    "id": "best-water-filters-under-100-5",
    "rank": 5,
    "badge": "Best Two-Year CuZn",
    "name": "CuZn Under Sink Water Filter for Sink Faucet",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31wHXkt8JcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH15SZ3Q?tag=rvgearlab-amz-20",
    "description": "The CuZn UC-150 is a 3-stage under-sink filter rated for 20,000 gallons or 2 years. It uses micro sift membranes, KDF-55 and coconut shell carbon, and it reduces PFAS, PFOA and PFOS, lead and chlorine.\n\nAt about $100 it sits at the cap and doubles the life of the UC-100 for about $30 more. The Waterdrop 15UA has a similar 2-year life for half the price.\n\nBuyers who want the CuZn design with a two-year change cycle will like it. It installs inline without drilling.",
    "specs": [
      "20,000 gallons or 2 years",
      "3-stage filtration",
      "No drilling, all parts included"
    ],
    "pros": [
      "Two-year rated life",
      "Keeps beneficial minerals",
      "No-drill inline install",
      "Tested to reduce PFAS and lead"
    ],
    "cons": [
      "Costs about double the 15UA",
      "Does not reduce TDS"
    ],
    "bestFor": "CuZn fans wanting two years",
    "take": "A two-year CuZn at the top of the budget.",
    "catch": "Waterdrop gives the same life for less."
  }
];

export const howWeEvaluated = [
  {
    "title": "Filter life",
    "description": "Rated gallons from 10,000 to 50,000 and years from 1 to 5 were compared."
  },
  {
    "title": "Certifications",
    "description": "NSF/ANSI 42, 372 and IAPMO statements were compared."
  },
  {
    "title": "Contaminant claims",
    "description": "PFAS, lead and chlorine reduction claims were compared."
  },
  {
    "title": "Installation",
    "description": "Drill-free and quick-connect designs were compared."
  },
  {
    "title": "Yearly cost",
    "description": "Replacement prices and rated lives were compared to find yearly running costs."
  }
];

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By how long you want between changes",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Change every year",
          "CuZn UC-100",
          "Keeps minerals, one-year rating."
        ],
        [
          "Change every two years",
          "Waterdrop 15UA",
          "2 years for about $51."
        ],
        [
          "Two years with a CuZn design",
          "CuZn UC-150",
          "20,000 gallons."
        ],
        [
          "Change every five years",
          "PUREPLUS 22K",
          "22,000 gallons and 5 years."
        ],
        [
          "Heavy use for years",
          "Orvexa 5-Year",
          "50,000 gallon capacity."
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "$50 to $60",
          "Waterdrop 15UA or PUREPLUS 22K"
        ],
        [
          "$60 to $100",
          "CuZn UC-100 or Orvexa 5-Year"
        ],
        [
          "$90 to $100",
          "CuZn UC-150"
        ]
      ]
    }
  },
  {
    "subheading": "Short life vs long life",
    "cards": [
      {
        "label": "Short life",
        "text": "A one- or two-year filter costs less upfront and changes more often. The CuZn UC-100 is a one-year filter, and the Waterdrop 15UA and CuZn UC-150 last two years."
      },
      {
        "label": "Long life",
        "text": "A five-year filter costs more up front and saves changes. The PUREPLUS 22K and Orvexa 5-Year are the long-life options."
      }
    ],
    "note": "Most campers should buy the Waterdrop 15UA, and heavy water users should consider the Orvexa 5-Year."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Spend",
        "Recommended pick"
      ],
      "rows": [
        [
          "Around $51",
          "Waterdrop 15UA"
        ],
        [
          "Around $59",
          "PUREPLUS 22K"
        ],
        [
          "Around $70",
          "CuZn UC-100"
        ],
        [
          "Around $92",
          "Orvexa 5-Year"
        ],
        [
          "Around $100",
          "CuZn UC-150"
        ]
      ]
    }
  },
  {
    "subheading": "For a cabin or tiny home specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a cold-line fit, a rated life of at least two years and an NSF or IAPMO listing."
      },
      {
        "label": "In this comparison",
        "text": "The Waterdrop 15UA is IAPMO certified with a 2-year life, and the PUREPLUS 22K is rated to 22,000 gallons."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you use a lot of water, which makes the Orvexa 5-Year the lowest cost per gallon at about $92. Over $100 you also get dedicated faucets and extra stages."
      },
      {
        "label": "Save if",
        "text": "Save if you use a small amount of water, since the Waterdrop 15UA at about $51 already lasts two years."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Cost per year",
    "explanation": "A $51 system with a $36 two-year filter costs about $18 per year to run, while a $70 system with a one-year filter costs more. Divide the replacement filter price by its rated years to compare. Look for the replacement model and price before you buy, and add the system price spread over five years."
  },
  {
    "criterion": "Certification wording",
    "explanation": "IAPMO and NSF both test filters, and a filter listed to NSF/ANSI 42 or 372 meets those specific standards for taste or lead-free materials. Marketing terms like NSF-compliant or independently tested can mean much less than a listed standard. Look for the exact standard number and the testing body named in the description, and be wary of a filter that gives neither."
  },
  {
    "criterion": "PFAS and lead claims",
    "explanation": "PFAS and lead are reduced by carbon and ion-exchange media, but the claim only matters if a standard covers it, such as NSF/ANSI 53 or 58. A filter that says reduces PFAS without a standard is a weaker claim. Look for the standard next to each contaminant."
  },
  {
    "criterion": "TDS and minerals",
    "explanation": "Carbon filters keep beneficial minerals like calcium and magnesium, and they do not lower TDS, the total dissolved solids that cause a flat or salty taste in hard water. A filter that leaves minerals in suits drinking water, while one that removes them suits a different goal. Look for the words does not reduce TDS or retains minerals in the product notes."
  },
  {
    "criterion": "Water line type",
    "explanation": "Under-sink filters need a cold water line and a faucet with a 3/8 or 1/2 inch connection, and hot lines or very low pressure cause leaks or poor flow. In a van or cabin, confirm that the line comes from a pressurized pump or city supply. Look for the connection size and a minimum pressure rating, and check your line before you order."
  }
];

export const faq = [
  {
    "q": "How long does an under-sink filter really last?",
    "a": "The rated life assumes municipal water and a steady use of about 10 gallons a day. In a cabin used on weekends, a two-year filter can last longer, and sandy water shortens it. Change it on the sooner of the gallon or time rating."
  },
  {
    "q": "Is PFAS reduction real?",
    "a": "A filter can reduce PFAS if it uses the right media and is tested to a standard that covers it. The Waterdrop 15UA, CuZn UC-100 and CuZn UC-150 all state PFAS reduction in their bullets. Look for the standard number, not only the claim."
  },
  {
    "q": "Do I need a plumber to install it?",
    "a": "Usually not. The CuZn UC-100 and Waterdrop 15UA install inline on a 3/8 inch cold line in about 3 to 10 minutes with the parts included. Shut off the water, cut the line and push in the fittings."
  },
  {
    "q": "Do these filters remove minerals?",
    "a": "No. The CuZn models and others here keep beneficial minerals and do not reduce TDS, so they target chlorine, lead and PFAS instead. For hard-water scale you need a softener or a different filter, and a scale-reducing hose filter handles the RV side of the job."
  },
  {
    "q": "What do I do when I leave for months?",
    "a": "Shut off the water supply to the filter and turn off the line before a long trip. Drain the filter in freezing weather so it does not crack. Flush it for a few minutes when you come back."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Water Filters Under 150",
    "href": "/packs-hiking/best-water-filters-under-150"
  },
  {
    "title": "Best Water Filters Under 200",
    "href": "/packs-hiking/best-water-filters-under-200"
  },
  {
    "title": "Best Water Filters Under 30",
    "href": "/packs-hiking/best-water-filters-under-30"
  }
];
