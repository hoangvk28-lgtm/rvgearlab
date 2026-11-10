export const guideSlug = "best-portable-water-filter-for-rv";
export const guideTitle = "3 Best Portable Water Filter For RV in 2026";
export const metaTitle = "Best Portable Water Filter For RV in 2026";
export const metaDescription = "Best portable water filter systems for RVs: three VEVOR options that carry, connect to a 3/4 inch hose and work without electricity.";
export const mainKeyword = "best portable water filter for rv";
export const introParagraphs = [
  "A portable RV filter is one you can carry to the spigot, connect, fill and stow. Only three products in this comparison fit that description well, and all three are from VEVOR: a dual-stage filter, a three-stage filter and a portable softener. They share 3/4 inch fittings and a hose-friendly design.",
  "Because the three share a brand, the useful differences are the number of stages, the stated capacity and what each treats. Ranking follows that, and the list is shorter than most because three honest picks beat six padded ones."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/410DC1qH4CL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-portable-water-filter-for-rv-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "VEVOR RV Water Filter System",
    "price": "$134.91",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410DC1qH4CL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GZNRBQ4L?tag=rvgearlab-20",
    "description": "The VEVOR 3-Stage is a three-cartridge portable system with 5 micron filtration and 3/4 inch fittings. The listing claims up to 12,000 gallons of capacity, 3 GPM flow and stable pressure from 20 to 125 PSI, and says it reduces sediment, chlorine and heavy metals.\n\nCompared with the VEVOR Dual-Stage, it adds a third cartridge and a much larger stated capacity for a higher price. Against the VEVOR Softener, it is a filter, not a hardness treatment.\n\nBest for travelers who want the most filtering from a portable unit. The listing names no certification, so treat it as sediment and taste treatment.",
    "specs": [
      "12,000 gallon capacity",
      "3 GPM, 20 to 125 PSI",
      "3 cartridges, 5 micron"
    ],
    "pros": [
      "Large stated capacity of 12,000 gallons",
      "Three cartridges included",
      "Listed 3 GPM flow",
      "Lightweight and portable, per the listing"
    ],
    "cons": [
      "No certification on the listing",
      "Pricier than the dual-stage"
    ],
    "bestFor": "Frequent travelers"
  },
  {
    "id": "best-portable-water-filter-for-rv-2",
    "rank": 2,
    "badge": "Best Value Portable",
    "name": "VEVOR RV Water Filter System",
    "price": "$93.01",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51sOnZtY0cL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GZNLK7TY?tag=rvgearlab-20",
    "description": "The VEVOR Dual-Stage uses two 5 micron cartridges with 3/4 inch fittings. The listing claims 4,500 gallons of capacity, 3 GPM flow and stable pressure from 20 to 125 PSI, and says it reduces sediment, chlorine and heavy metals.\n\nIt has one stage fewer than the VEVOR 3-Stage and about a third of its stated capacity, but costs less. Compared with the VEVOR Softener, it treats particles and chlorine, not scale.\n\nA good fit for weekenders and part-time travelers who want a lighter portable system.",
    "specs": [
      "4,500 gallon capacity",
      "3 GPM, 20 to 125 PSI",
      "2 cartridges, 5 micron"
    ],
    "pros": [
      "Stated 4,500 gallon capacity",
      "3 GPM flow on the listing",
      "Two cartridges included",
      "Lower cost than the three-stage"
    ],
    "cons": [
      "No certification named",
      "Fewer stages than the 3-Stage"
    ],
    "bestFor": "Weekenders"
  },
  {
    "id": "best-portable-water-filter-for-rv-3",
    "rank": 3,
    "badge": "Best for Hard Water",
    "name": "VEVOR RV Water Softener",
    "price": "$118.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41GMYl3O0WL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CJ9DK4T2?tag=rvgearlab-20",
    "description": "The VEVOR Softener is a portable softener with 16,000 grain capacity, 3/4 inch brass fittings and a 42 inch hose. The listing describes food-grade resin that can be used for about 5 years, and says it needs no tools or electricity.\n\nIt does a different job from the two filters above: it treats hardness, not sediment or chlorine. The listing says nothing about taste or chlorine reduction.\n\nBest as an add-on for travelers who see scale. Pair it with a filter, and expect to recharge or replace the resin.",
    "specs": [
      "16,000 grain capacity",
      "3/4 inch brass fittings",
      "No electricity needed"
    ],
    "pros": [
      "Brass fittings and a 42 inch hose included",
      "Needs no tools or electricity",
      "Food-grade resin listed for about 5 years",
      "Large 3/4 inch flow connections"
    ],
    "cons": [
      "Does not target sediment or chlorine",
      "Resin eventually needs recharging"
    ],
    "bestFor": "Hard water scale"
  }
];

export const howWeEvaluated = [
  {
    "title": "Portability",
    "description": "We compared the stated build, weight claims and hose connections, since portable means you carry it."
  },
  {
    "title": "Stated capacity",
    "description": "Gallons and grain figures were compared on the listings."
  },
  {
    "title": "Flow and pressure",
    "description": "Flow and pressure ranges were compared for stable use at campground pressure."
  },
  {
    "title": "Claim limits",
    "description": "We noted that none of the three listings names an NSF standard."
  },
  {
    "title": "Function",
    "description": "Filtering and softening were compared as separate jobs."
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
    "subheading": "By Water Problem",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Heavy sediment and chlorine taste",
          "VEVOR 3-Stage",
          "Three stages and 12,000 gallons listed."
        ],
        [
          "Light-duty weekends, sediment and chlorine",
          "VEVOR Dual-Stage",
          "Two stages and 4,500 gallons."
        ],
        [
          "White scale on fixtures",
          "VEVOR Softener",
          "16,000 grain resin."
        ],
        [
          "Both hard water and taste problems",
          "VEVOR Softener",
          "Run it ahead of one of the two filters."
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
          "$90 to $100",
          "VEVOR Dual-Stage"
        ],
        [
          "$110 to $120",
          "VEVOR Softener"
        ],
        [
          "$130 to $140",
          "VEVOR 3-Stage"
        ]
      ]
    }
  },
  {
    "subheading": "Filter vs Softener",
    "cards": [
      {
        "label": "Filter",
        "text": "A filter catches particles and chlorine with cartridges. Here: VEVOR 3-Stage and VEVOR Dual-Stage."
      },
      {
        "label": "Softener",
        "text": "A softener removes hardness minerals with resin. Here: VEVOR Softener."
      }
    ],
    "note": "Most travelers should start with the VEVOR Dual-Stage and add the VEVOR Softener only if scale shows up."
  },
  {
    "subheading": "By Trip Frequency",
    "table": {
      "headers": [
        "Frequency",
        "Recommended pick"
      ],
      "rows": [
        [
          "Weekend trips",
          "VEVOR Dual-Stage"
        ],
        [
          "Full-season travel",
          "VEVOR 3-Stage"
        ],
        [
          "Trips to hard-water regions",
          "VEVOR Softener"
        ]
      ]
    }
  },
  {
    "subheading": "For Quick Campsite Setup Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "3/4 inch fittings, a stated GPM and no power requirement."
      },
      {
        "label": "In this comparison",
        "text": "All three use 3/4 inch fittings, and the VEVOR Softener adds a 42 inch hose and says it needs no electricity."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you cover many miles: the VEVOR 3-Stage has the largest stated capacity at 12,000 gallons."
      },
      {
        "label": "Save if",
        "text": "Save if you travel occasionally: the VEVOR Dual-Stage is the cheaper filter, and you can skip the VEVOR Softener until scale appears."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fittings and hose size",
    "explanation": "Portable units use 3/4 inch garden hose fittings. Brass fittings resist leaks better than plastic. Check the thread type and that a hose is included if you need one."
  },
  {
    "criterion": "Weight and carry",
    "explanation": "Cartridge systems are heavier when full of water. Look for a stated weight and a handle. A single compact unit is easier to store than three canisters."
  },
  {
    "criterion": "Flow rate and pressure",
    "explanation": "A stated GPM and PSI range tells you if it handles campground pressure. A rating of 20 to 125 PSI covers most hookups. Keep a regulator ahead of it."
  },
  {
    "criterion": "Capacity and refill",
    "explanation": "Gallons per cartridge set decide how often you restock. Compare the stated gallons and your monthly use. For softeners, grain capacity decides how long before regeneration."
  },
  {
    "criterion": "Filter vs softener",
    "explanation": "A filter treats sediment and chlorine, while a softener treats hardness. If you have scale, a filter alone will not help. Read the listing for the specific job."
  }
];

export const faq = [
  {
    "q": "What makes an RV filter portable?",
    "a": "It connects to a hose with 3/4 inch fittings, needs no power and can be stowed. All three VEVOR picks fit that description."
  },
  {
    "q": "What mistake do buyers make with portable filters?",
    "a": "Expecting them to cure hard water. The VEVOR 3-Stage and Dual-Stage handle sediment and chlorine, so scale needs the VEVOR Softener."
  },
  {
    "q": "Is the VEVOR 3-Stage worth it over the Dual-Stage?",
    "a": "If you travel a lot, yes. It states 12,000 gallons against 4,500, but for a few trips a year, the Dual-Stage is enough."
  },
  {
    "q": "How do I set up a portable filter?",
    "a": "Connect the spigot to the regulator, attach the inlet hose to the filter, then run the outlet to your RV. Flush the new cartridges for a few minutes."
  },
  {
    "q": "How do I store one between trips?",
    "a": "Drain it, let it dry and keep it out of freezing weather. Water left inside can crack a housing."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best RV Water Filter",
    "href": "/water-plumbing/best-rv-water-filter"
  },
  {
    "title": "Best RV Water Filter System",
    "href": "/water-plumbing/best-rv-water-filter-system"
  },
  {
    "title": "Best Inline RV Water Filter",
    "href": "/water-plumbing/best-inline-rv-water-filter"
  },
  {
    "title": "Best 2 Stage RV Water Filter",
    "href": "/water-plumbing/best-2-stage-rv-water-filter"
  }
];
