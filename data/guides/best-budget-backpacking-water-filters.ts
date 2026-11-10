export const guideSlug = "best-budget-backpacking-water-filters";
export const guideTitle = "3 Best Budget Backpacking Water Filters in 2026";
export const metaTitle = "Best Budget Backpacking Water Filters in 2026";
export const metaDescription = "Three backpacking water filters at three price points, from a Katadyn BeFree AC squeeze bottle to a TRAILGO hand pump and a serviceable MSR MiniWorks EX.";
export const mainKeyword = "best budget backpacking water filters";
export const introParagraphs = [
  "Budget is relative with water filters, because a cheap filter that clogs after a season costs more than a good one. The three picks here run from a squeeze bottle near the bottom of the market to a hand pump that serves a group, and a premium pump that the maker backs for life.",
  "Each one filters bacteria and protozoa, according to its listing, and none claims virus removal. The comparison focuses on cost per liter, ease of use and what each listing actually documents."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/hiking-backpacker-mountain.webp";
export const heroImageAlt = "Hiker with a loaded backpack climbing a mountain trail";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-budget-backpacking-water-filters-1",
    "rank": 1,
    "badge": "Best Overall Budget",
    "name": "Katadyn BeFree AC 2-Stage Filter Collapsible Travel Water Bottle 1L",
    "price": "$42.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31dP3ZCwEFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075X5R67T?tag=rvgearlab-20",
    "description": "Katadyn's BeFree AC folds down from a 1 liter soft bottle and screws on a hollow fiber element rated at 0.1 micron, with a carbon stage for taste. Its listing quotes 2 L/min of flow and a life of about 1,000 liters.\n\nIt is the cheapest here by a wide margin and the easiest to maintain, because you shake or swish it clean with no tools. It packs flat, which neither the TRAILGO Pro nor the MSR MiniWorks EX can do.\n\nBest for solo hikers who fill from streams and skip the pumping. The carbon stage takes the edge off flavor.",
    "specs": [
      "1 L collapsible bottle, 0.1 micron",
      "2 L per minute flow",
      "Up to 1,000 L capacity"
    ],
    "pros": [
      "Fast 2 liter per minute flow",
      "Shake-clean, no backflushing",
      "Packs flat when empty",
      "Carbon stage for taste"
    ],
    "cons": [
      "1,000 L life is modest",
      "Serves one person at a time"
    ],
    "bestFor": "Solo hikers on a budget",
    "take": "The lowest-priced filter here, fast at 2 L/min and shake-clean.",
    "catch": "Its 1,000 liter life is modest, and it serves only one drinker."
  },
  {
    "id": "best-budget-backpacking-water-filters-2",
    "rank": 2,
    "badge": "Best Group Value",
    "name": "Trailgo Pro Portable Water Filter for Camping",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51U5YkHN7BL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZF46VG2?tag=rvgearlab-20",
    "description": "The TRAILGO Pro is worked by hand and runs water through three stages, starting with a 5 micron screen and ending at an ultrafiltration membrane. Listed at 1.5 liters a minute for 4 to 6 people, it arrives with tubes, clamps and a carry bag.\n\nWhere the Katadyn BeFree AC serves one person, this one is built for a group, and the washable pre-filter extends the cartridge. It costs about twice the BeFree and a third less than the MSR MiniWorks EX.\n\nA fit for family trips and shared camps where several people drink at once. Spare cartridges can be bought when the first one wears out.",
    "specs": [
      "Hand pump, 1.5 L per minute",
      "Three-stage filtration",
      "Tubes, clamps and carry bag"
    ],
    "pros": [
      "Pumps 1.5 liters per minute",
      "Complete kit in the box",
      "Reusable pre-filter",
      "Replacement cartridges available"
    ],
    "cons": [
      "Weight is not printed",
      "Lifespan in liters not printed"
    ],
    "bestFor": "Families and base-camp groups",
    "take": "A complete group pump kit at a price well under the MSR.",
    "catch": "Weight and cartridge life are not printed."
  },
  {
    "id": "best-budget-backpacking-water-filters-3",
    "rank": 3,
    "badge": "Best Long-Term Value",
    "name": "MSR MiniWorks EX Backpacking and Camping Water Filter",
    "price": "$125.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413SXT-Qh1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQRVKT6C?tag=rvgearlab-20",
    "description": "The MSR MiniWorks EX is a microfilter pump with a replaceable carbon and ceramic cartridge. It pumps one liter per minute, meets NSF protocol P231 for 99.9999% of bacteria and 99.9% of protozoa, and one cartridge treats up to 2,000 liters.\n\nIt is the only filter here with a named test protocol, and it can be serviced and rebuilt for years, which spreads the higher cost across many trips. It is the priciest of the three at 1 pound and 7.5 x 2.75 inches.\n\nBest for backpackers who want a durable, serviceable pump with a tested standard behind it and a limited lifetime warranty. It rewards frequent use.",
    "specs": [
      "1 L per minute, NSF P231",
      "2,000 liter cartridge",
      "7.5 x 2.75 in, 1 lb"
    ],
    "pros": [
      "Names NSF protocol P231",
      "2,000 liter cartridge life",
      "Limited lifetime warranty",
      "Carbon and ceramic cartridge"
    ],
    "cons": [
      "Heavier than squeeze filters",
      "Highest price of the three"
    ],
    "bestFor": "Frequent backpackers",
    "take": "A tested, serviceable pump with a 2,000 liter cartridge and a lifetime warranty.",
    "catch": "At 1 lb and the highest price, it is a commitment compared with a squeeze filter."
  }
];

export const howWeEvaluated = [
  {
    "title": "Cost to own",
    "description": "Prices were compared against stated filter life to see which gives the cheapest liters."
  },
  {
    "title": "Ease of use",
    "description": "Pumping, squeezing and cleaning methods were compared."
  },
  {
    "title": "Documented claims",
    "description": "Test protocols, flow rates and capacities were noted where printed."
  },
  {
    "title": "Group fit",
    "description": "Capacity and flow were compared for solo and group use."
  },
  {
    "title": "Honest scope",
    "description": "None of these claims virus removal, and the listings do not say they do."
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
    "subheading": "By Group Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Solo hiker",
          "Katadyn BeFree AC",
          "Cheapest, 2 L/min squeeze"
        ],
        [
          "Family or base-camp group",
          "TRAILGO Pro",
          "1.5 L/min for 4 to 6 people"
        ],
        [
          "Frequent backpacker, long-term",
          "MSR MiniWorks EX",
          "Replaceable 2,000 liter cartridge"
        ],
        [
          "Taste concerns",
          "Katadyn BeFree AC",
          "Activated carbon stage"
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
          "Katadyn BeFree AC"
        ],
        [
          "$80 to $90",
          "TRAILGO Pro"
        ],
        [
          "$120 to $130",
          "MSR MiniWorks EX"
        ]
      ]
    }
  },
  {
    "subheading": "Squeeze Bottle vs Pump",
    "cards": [
      {
        "label": "Squeeze bottle",
        "text": "The Katadyn BeFree AC is light, cheap and shake-clean for one person."
      },
      {
        "label": "Pump",
        "text": "The TRAILGO Pro and MSR MiniWorks EX serve groups and shallow sources."
      }
    ],
    "note": "Choose the Katadyn BeFree AC for solo trips and the MSR MiniWorks EX if you hike often."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $50",
          "Katadyn BeFree AC"
        ],
        [
          "Around $90",
          "TRAILGO Pro"
        ],
        [
          "Around $125 and up",
          "MSR MiniWorks EX"
        ]
      ]
    }
  },
  {
    "subheading": "Budget Backpackers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A price per liter you can calculate, a stated flow rate and replaceable parts."
      },
      {
        "label": "In this comparison",
        "text": "The Katadyn BeFree AC prints 2 L/min and 1,000 L, and the MSR MiniWorks EX prints 1 L/min and a 2,000 liter replaceable cartridge."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the MSR MiniWorks EX if you hike often and want a serviceable filter."
      },
      {
        "label": "Save if",
        "text": "Save with the Katadyn BeFree AC if you hike alone and want light weight."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Price versus filter life",
    "explanation": "A 1,000 liter filter costing $43 works out near 4 cents a liter, while a 2,000 liter cartridge on a pricier pump can match or beat that over years. Cartridges are replaceable on pumps but not on squeeze bottles. Check the stated liters and the cartridge cost."
  },
  {
    "criterion": "Squeeze, pump or gravity",
    "explanation": "Squeeze filters weigh the least and cost the least, but serve one person. Pumps serve groups and handle shallow sources. Choose by who drinks and where you fill."
  },
  {
    "criterion": "What the filter removes",
    "explanation": "Hollow fiber and ceramic filters remove bacteria and protozoa. Neither listing claims viruses. Check what the listing says it removes, not the title."
  },
  {
    "criterion": "Maintenance",
    "explanation": "Squeeze bottles shake clean, while pumps need disassembly and scrubbing. A washable pre-filter helps. Look for maintenance wording."
  },
  {
    "criterion": "Group size",
    "explanation": "A squeeze bottle is slow for four people, while a pump delivers a liter every 40 seconds. Count drinkers and daily liters. Compare flow rates."
  }
];

export const faq = [
  {
    "q": "What is the cheapest reliable backpacking filter?",
    "a": "The Katadyn BeFree AC is the lowest-priced here and fast. Its 1,000 liter life is modest. It serves one person."
  },
  {
    "q": "What mistake do budget buyers make with filters?",
    "a": "They buy the cheapest and skip maintenance. A clogged filter forces you to skip treating water. Clean on schedule."
  },
  {
    "q": "Is the MSR worth the price over the BeFree?",
    "a": "If you hike often, yes. The MSR MiniWorks EX is serviceable and tested to P231. For occasional trips, the Katadyn BeFree AC is enough."
  },
  {
    "q": "Do these remove viruses?",
    "a": "None of the listings claim it. Treat for viruses if your source needs it."
  },
  {
    "q": "How do I prevent freezing damage?",
    "a": "Do not let a wet filter freeze, since ice can crack the membrane. Sleep with it in your bag. Replace it if it freezes."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Affordable Backpacking Water Filters",
    "href": "/packs-hiking/best-affordable-backpacking-water-filters"
  },
  {
    "title": "Best Backpacking Water Filters For Viruses",
    "href": "/packs-hiking/best-backpacking-water-filters-for-viruses"
  },
  {
    "title": "Best Backpacking Water Filters",
    "href": "/packs-hiking/best-backpacking-water-filters"
  }
];
