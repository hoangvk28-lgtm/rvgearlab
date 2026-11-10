export const guideSlug = "best-35-ft-rv-sewer-hose";
export const guideTitle = "2 Best 35 Ft RV Sewer Hose in 2026";
export const metaTitle = "Best 35 Ft RV Sewer Hose in 2026";
export const metaDescription = "Thirty-five foot sewer reach is not sold as a single hose here, so this guide compares a 30 foot and a 20 foot option for very long dump runs.";
export const mainKeyword = "best 35 ft rv sewer hose";
export const introParagraphs = [
  "No listing in this group is sold at exactly 35 feet, so this page covers the nearest real sizes. A 35 foot need falls just above the longest single hose, which makes it a decision about reach versus extra joints.",
  "Two hoses are compared: a 30 foot TPE hose and a one-piece 20 foot kit. Each is explained by its stated length, wall and what the box includes so you can decide how to bridge the remaining distance."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/51dpznMgdLL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-35-ft-rv-sewer-hose-1",
    "rank": 1,
    "badge": "Best Longest Reach",
    "name": "30 FT Extra Long Heavy Duty Camper/RV Sewer Hose",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51dpznMgdLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GHPLV4PL?tag=rvgearlab-20",
    "description": "The AVERONR 30 ft hose is commercial-grade TPE with reinforced threaded fittings and locking bayonets. It runs 30 feet, about 12 meters, and is described as flexible in cold and snow.\n\nIt is the longest hose in the group and gets within five feet of a 35 foot route. Next to the DUMPMAN 20 Ft Kit, it adds ten feet of reach and removes the clear elbow.\n\nBest for sites with a very distant riser who plan to add a short extension. A direct match for the longest single run available.",
    "specs": [
      "30 ft commercial-grade TPE",
      "Threaded fittings, locking bayonets",
      "Cold-weather flexible"
    ],
    "pros": [
      "Longest single hose here",
      "Cold-weather flexible TPE",
      "Leak-proof locking bayonets"
    ],
    "cons": [
      "Sold at 30 ft, not 35 ft",
      "No clear elbow listed"
    ],
    "bestFor": "Longest Reach"
  },
  {
    "id": "best-35-ft-rv-sewer-hose-2",
    "rank": 2,
    "badge": "Best Complete Kit",
    "name": "DUMPMAN RV Sewer Hose Kit",
    "price": "$47.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51qVA-86IbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D46F7ZKD?tag=rvgearlab-20",
    "description": "As a single 24 mil TPE run, the DUMPMAN 20 ft kit brings its own clear 90 degree adapter that works with four inlet sizes. It is described as seamless and leak-free.\n\nIt costs less than the AVERONR 30 Ft and includes an elbow the longer hose lacks. It is fifteen feet short of 35 feet, which makes it the starter piece of a longer setup.\n\nBest for owners with a long route who want a complete first hose. A good base for a layered system.",
    "specs": [
      "20 ft one piece, 24 mil TPE",
      "Clear adapter, four inlet sizes",
      "Seamless build"
    ],
    "pros": [
      "Includes clear elbow adapter",
      "One-piece, no mid-hose joint",
      "Lower price than AVERONR"
    ],
    "cons": [
      "Fifteen feet short of 35",
      "Needs added length for far risers"
    ],
    "bestFor": "Complete Kit"
  }
];

export const howWeEvaluated = [
  {
    "title": "Real sold length",
    "description": "Noted that no pick is sold at 35 feet and compared the nearest sizes."
  },
  {
    "title": "Wall and build",
    "description": "Compared TPE walls and fittings."
  },
  {
    "title": "Kit contents",
    "description": "Looked at included elbows and adapters."
  },
  {
    "title": "Cold behavior",
    "description": "Checked stated cold-weather flexibility."
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
    "subheading": "By how far the riser is",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Within about 30 ft",
          "AVERONR 30 Ft Hose",
          "30 ft single TPE run"
        ],
        [
          "Within about 20 ft",
          "DUMPMAN 20 Ft Kit",
          "One-piece with clear elbow"
        ],
        [
          "Over 30 ft needed",
          "AVERONR 30 Ft Hose",
          "Longest single hose, then add reach"
        ],
        [
          "Want elbow included",
          "DUMPMAN 20 Ft Kit",
          "Clear adapter in the box"
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
          "$40 to $50",
          "DUMPMAN 20 Ft Kit"
        ],
        [
          "$70 to $80",
          "AVERONR 30 Ft Hose"
        ]
      ]
    }
  },
  {
    "subheading": "Single long hose vs kit",
    "cards": [
      {
        "label": "Single long hose",
        "text": "The AVERONR 30 Ft Hose gives the most reach with the fewest joints."
      },
      {
        "label": "Complete kit",
        "text": "The DUMPMAN 20 Ft Kit brings the clear elbow and adapter for a lower cost."
      }
    ],
    "note": "Most buyers with a 35 foot route should default to the AVERONR 30 Ft Hose and add a short extension."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lower cost",
          "DUMPMAN 20 Ft Kit"
        ],
        [
          "Longer reach",
          "AVERONR 30 Ft Hose"
        ],
        [
          "Longest single hose",
          "AVERONR 30 Ft Hose"
        ]
      ]
    }
  },
  {
    "subheading": "For Very Distant Risers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "The longest stated single hose, with a plan to bridge the remaining gap."
      },
      {
        "label": "In this comparison",
        "text": "The AVERONR 30 Ft Hose is listed at 30 feet, the DUMPMAN 20 Ft Kit at 20."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if reach matters most: the AVERONR 30 Ft Hose adds ten feet."
      },
      {
        "label": "Save if",
        "text": "Save if you can move closer: the DUMPMAN 20 Ft Kit costs less and includes an elbow."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Sold length versus need",
    "explanation": "A 35 foot route cannot be met by either hose alone, because the longest single hose is 30 feet. That leaves a gap of five feet to bridge. Measure the route and plan the extra reach."
  },
  {
    "criterion": "One piece versus joined",
    "explanation": "One-piece hoses have fewer leak points than joined sections. Joining two hoses adds a coupling and a gasket to maintain. Choose compatible parts only."
  },
  {
    "criterion": "Wall thickness",
    "explanation": "The DUMPMAN lists a 24 mil TPE wall, and a thick wall resists wear on long drags. Long hoses scrape more ground than short ones. Look for the mil figure on any hose you add."
  },
  {
    "criterion": "Elbow and fittings",
    "explanation": "A clear 4-in-1 style elbow fits several inlet sizes. The AVERONR lists none, so plan one for the dump end. Check the contents list."
  },
  {
    "criterion": "Slope and support",
    "explanation": "A long hose needs a steady downhill run or it holds waste in the sags. Plan support points along the route. Do not rely on length alone."
  }
];

export const faq = [
  {
    "q": "Is there a 35 ft RV sewer hose?",
    "a": "Not among these picks. The longest single hose is 30 feet, so a 35 foot route needs added length. Plan for a short extension."
  },
  {
    "q": "Can I join hoses to reach 35 feet?",
    "a": "Join compatible hose sections only, with matching fittings. Do not mix macerator hoses with gravity hoses. Check the lug and bayonet ends first."
  },
  {
    "q": "What mistake costs the most?",
    "a": "Buying a hose that is just short and stretching it. Stretch pulls fittings loose and breaks seals. Add slack to the route."
  },
  {
    "q": "Is the longer hose worth it?",
    "a": "If the route is long, yes. The AVERONR 30 Ft Hose adds ten feet over the DUMPMAN 20 Ft Kit. For a shorter route, save the money."
  },
  {
    "q": "How do I store long hoses?",
    "a": "Collapse, cap and keep them in a large carrier. Rinse each hose first. Keep both ends capped to avoid odor."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best 10 Ft RV Sewer Hose",
    "href": "/water-plumbing/best-10-ft-rv-sewer-hose"
  },
  {
    "title": "Best 15 Ft RV Sewer Hose",
    "href": "/water-plumbing/best-15-ft-rv-sewer-hose"
  },
  {
    "title": "Best 20 Ft RV Sewer Hose",
    "href": "/water-plumbing/best-20-ft-rv-sewer-hose"
  },
  {
    "title": "Best 25 Ft RV Sewer Hose",
    "href": "/water-plumbing/best-25-ft-rv-sewer-hose"
  }
];
