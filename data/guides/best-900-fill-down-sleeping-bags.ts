export const guideSlug = "best-900-fill-down-sleeping-bags";
export const guideTitle = "2 Best 900 Fill Down Sleeping Bags in 2026";
export const metaTitle = "Best 900 Fill Down Sleeping Bags in 2026";
export const metaDescription = "Two premium bags whose listings state 900 fill power down: the Sea to Summit Spark Pro and the Therm-a-Rest Parsec, with advice on fill power and price.";
export const mainKeyword = "best 900 fill down sleeping bags";
export const introParagraphs = [
  "Only two lines on Amazon state 900 fill power in their listings, and both come from top-end brands: the Sea to Summit Spark Pro, sold in 15F and 30F versions, and the Therm-a-Rest Parsec 0F. Everything else called down on the shelf sits at 850 or lower, so those were left out.",
  "A 900 fill power bag is a specialist tool for people who count ounces. The guide explains what that number buys, what it does not, and how the two picks differ on rating and price."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/sleep-tent-sleeping-bag.webp";
export const heroImageAlt = "Camper sitting inside a tent next to an unrolled sleeping bag";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-900-fill-down-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Sea to Summit Spark Pro Ultralight Down Sleeping Bag",
    "price": "$689.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31IrZyCtl0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GDP8D44W?tag=rvgearlab-20",
    "description": "The Spark Pro is a 3-season mummy rated 15F for backpacking, bikepacking and touring, filled with 900+ fill power down that is Responsible Down Standard certified. The down is treated with Ultra-Dry Down for moisture, and the shell is a featherweight 10D nylon with a PFC-free DWR finish.\n\nAgainst the Therm-a-Rest Parsec, it gives a 15F rating at a higher list price, and a sibling version rated 30F is sold for 2-season use. Full box baffles, a YKK Free Flow Zip system and a footbox zipper keep weight low while managing heat.\n\nA top choice for ultralight backpackers who want a documented 900+ fill bag for three seasons. A lifetime guarantee backs the product.",
    "specs": [
      "900+ fill power RDS down",
      "15F, 3-season mummy",
      "10D nylon shell, full box baffles"
    ],
    "pros": [
      "900+ fill power, RDS certified",
      "Ultra-Dry Down treated for moisture",
      "Free Flow zip with footbox zipper",
      "Lifetime guarantee"
    ],
    "cons": [
      "Priciest bag on the list",
      "No weight figure printed"
    ],
    "bestFor": "Ultralight three-season backpackers",
    "take": "The 900+ fill bag with the fullest documentation and a lifetime guarantee.",
    "catch": "It carries the highest price here, and the 30F sibling suits only two seasons."
  },
  {
    "id": "best-900-fill-down-sleeping-bags-2",
    "rank": 2,
    "badge": "Best for Cold Weather",
    "name": "Therm-a-Rest Parsec 0F/-18C Down Backpacking Sleeping Bag",
    "price": "$649.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31AVJIBLHAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GQLX8CKG?tag=rvgearlab-20",
    "description": "The Parsec is a 0F (-18C) down bag for 4-season fast-and-light camping, filled with 900-fill RDS-certified and PFAS-free hydrophobic down. A zoned baffle design puts down where you need it and trims weight.\n\nIt runs 15 degrees colder than the Sea to Summit Spark Pro 15F and costs less than that bag. A Toe-asis foot warmer pocket and a YKK anti-snag zipper with one-handed operation are the standout features.\n\nBest for winter and shoulder-season backpackers who want 900-fill down in a 0F bag. It compresses small for its warmth.",
    "specs": [
      "900-fill RDS hydrophobic down",
      "0F, 4-season",
      "Toe-asis foot warmer pocket"
    ],
    "pros": [
      "0F rating for winter",
      "900-fill, PFAS-free hydrophobic down",
      "Zoned baffles save weight",
      "Foot warmer pocket for toes"
    ],
    "cons": [
      "Too warm for summer use",
      "No weight or fit printed"
    ],
    "bestFor": "Cold-weather backpackers",
    "take": "A 900-fill 0F bag with a built-in foot warmer pocket.",
    "catch": "It is a cold-weather bag, so it will overheat on warm nights."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fill power stated",
    "description": "We kept only bags whose listings state a 900 or 900+ fill power."
  },
  {
    "title": "Down sourcing",
    "description": "We noted RDS certification and moisture treatments."
  },
  {
    "title": "Rating range",
    "description": "We compared 15F and 0F ratings and the seasons they cover."
  },
  {
    "title": "Construction",
    "description": "We read baffle design, zippers and footbox features."
  },
  {
    "title": "Cost",
    "description": "We compared price against rating."
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
    "subheading": "By Season",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Warm three-season hikes",
          "Sea to Summit Spark Pro 15F",
          "15F, 3-season mummy"
        ],
        [
          "Winter and shoulder season",
          "Therm-a-Rest Parsec 0F",
          "0F, 4-season"
        ],
        [
          "Bikepacking and touring",
          "Sea to Summit Spark Pro 15F",
          "Listed for bikepacking"
        ],
        [
          "Cold feet",
          "Therm-a-Rest Parsec 0F",
          "Toe-asis foot warmer pocket"
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
          "$640 to $650",
          "Therm-a-Rest Parsec 0F"
        ],
        [
          "$680 to $690",
          "Sea to Summit Spark Pro 15F"
        ]
      ]
    }
  },
  {
    "subheading": "Three-Season vs Four-Season",
    "cards": [
      {
        "label": "Three-season",
        "text": "The Sea to Summit Spark Pro 15F suits spring to fall with full box baffles."
      },
      {
        "label": "Four-season",
        "text": "The Therm-a-Rest Parsec 0F adds winter capability with zoned baffles and a foot warmer."
      }
    ],
    "note": "Choose the Sea to Summit Spark Pro 15F for most trips, and the Therm-a-Rest Parsec 0F only if you camp in real cold."
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
          "Around 650 dollars, cold weather",
          "Therm-a-Rest Parsec 0F"
        ],
        [
          "Around 690 dollars, 3-season",
          "Sea to Summit Spark Pro 15F"
        ]
      ]
    }
  },
  {
    "subheading": "Ultralight Trips Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated 900 fill power, an RDS certification and a lifetime guarantee."
      },
      {
        "label": "In this comparison",
        "text": "The Sea to Summit Spark Pro 15F lists 900+ fill, RDS and a lifetime guarantee, and the Therm-a-Rest Parsec 0F lists 900-fill RDS down."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Sea to Summit Spark Pro 15F if you want a three-season ultralight bag with a lifetime guarantee."
      },
      {
        "label": "Save if",
        "text": "Save with the Therm-a-Rest Parsec 0F only if you need the 0F rating; otherwise a cheaper 650 fill bag is enough."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 900 fill power buys",
    "explanation": "Fill power measures how much space an ounce of down fills. A 900 figure means more loft per ounce, which saves weight. It does not mean the bag is warmer unless the fill weight is high too."
  },
  {
    "criterion": "Fill power versus fill weight",
    "explanation": "A bag with 900 fill and little down can sleep colder than a 650 bag with more. The rating tells you the total warmth. Treat fill power as a weight-saving number."
  },
  {
    "criterion": "Responsible down certification",
    "explanation": "RDS certification shows how the down was sourced. It is stated on both listings. Look for a named standard on any premium down bag."
  },
  {
    "criterion": "Moisture treatment",
    "explanation": "Hydrophobic treatments help down handle humidity and light moisture. Neither treated down is waterproof. Keep the bag in a dry sack and out of rain."
  },
  {
    "criterion": "Rating versus price",
    "explanation": "A premium bag costs hundreds of dollars. Pay for the rating you will use. A 15F bag in July is wasted money."
  }
];

export const faq = [
  {
    "q": "Is 900 fill power worth the money?",
    "a": "Only if you carry the bag far and count ounces. For car camping, a cheaper bag is warmer per dollar. Both picks here cost several hundred dollars."
  },
  {
    "q": "What mistake do buyers make with fill power?",
    "a": "They assume a higher number means a warmer bag. Fill weight matters as much. Check the rating, not just the loft figure."
  },
  {
    "q": "Is the Spark Pro or Parsec better?",
    "a": "The Sea to Summit Spark Pro 15F suits three seasons, and the Therm-a-Rest Parsec 0F suits winter. Pick by the coldest night you plan to face."
  },
  {
    "q": "How do I keep a 900 fill bag lofted?",
    "a": "Store it loose in a large cotton sack. Fluff it before bed. Do not leave it compressed."
  },
  {
    "q": "How do I wash down?",
    "a": "Use a down-specific wash and a front-loading machine on gentle. Dry on low with clean tennis balls. Follow the care tag."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Sleeping Bags",
    "href": "/sleep-gear/best-backpacking-sleeping-bags"
  },
  {
    "title": "Best Camping Sleeping Bags",
    "href": "/sleep-gear/best-camping-sleeping-bags"
  },
  {
    "title": "Best Backpacking Pillows For Side Sleepers",
    "href": "/sleep-gear/best-backpacking-pillows-for-side-sleepers"
  },
  {
    "title": "Best Backpacking Pillow For Stomach Sleepers",
    "href": "/sleep-gear/best-backpacking-pillow-for-stomach-sleepers"
  }
];
