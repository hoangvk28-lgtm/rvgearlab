export const guideSlug = "best-ultralight-camping-sleeping-bags";
export const guideTitle = "3 Best Ultralight Camping Sleeping Bags in 2026";
export const metaTitle = "Best Ultralight Camping Sleeping Bags in 2026";
export const metaDescription = "Three lightweight camping sleeping bags, from a 1.5 lb NewDoar and a 1.7 lb ECOOPRO for warm nights to a TETON Tracker rated 5F for cold camps.";
export const mainKeyword = "best ultralight camping sleeping bags";
export const introParagraphs = [
  "Ultralight sleeping bags trade warmth for weight, and the three here sit at very different points on that trade. Two are summer bags near 1.5 to 1.7 lb, and the third is a 5F mummy built for cold camps with warmth first and weight second.",
  "Only the NewDoar and ECOOPRO print a weight, so the list is honest about which is truly light. The TETON Tracker is included because it is the only cold-weather bag marketed as lightweight, and its listing prints no weight at all."
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
    "id": "best-ultralight-camping-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Ultralight 1.5lbs Sleeping Bag 50-70°F for Warm Weather-Blue",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ITLrJK8JL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F83BP6VQ?tag=rvgearlab-amz-20",
    "description": "NewDoar gives this bag a 1.5 lb weight and an 11.8 by 6.5 inch packed size, with a 380T ripstop nylon shell and a heavy-duty compression sack. Two-way zippers let two bags link into a double, and the listing puts the useful range at 50 to 70F.\n\nSmallest and lightest of the three, it is a touch trimmer than the ECOOPRO Warm Weather and in a different warmth class from the TETON Tracker 5F. The ripstop shell resists tears better than a plain nylon one.\n\nBest for backpackers on warm routes who want to save pack space. It also works for couples who want to link bags.",
    "specs": [
      "1.5 lb, small packed bundle",
      "380T ripstop nylon shell",
      "50 to 70F range"
    ],
    "pros": [
      "Lightest and smallest of the three",
      "Ripstop nylon resists tears",
      "Links with a second bag",
      "Compression sack included"
    ],
    "cons": [
      "Rated for 50 to 70F only",
      "Medium size only"
    ],
    "bestFor": "Warm-route backpacking",
    "take": "The lightest and smallest bag here, with a tear-resistant shell.",
    "catch": "Rated for 50 to 70F only, and offered in a medium size."
  },
  {
    "id": "best-ultralight-camping-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Budget Envelope",
    "name": "ECOOPRO Warm Weather Sleeping Bag",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fu3se401L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B011AZ3O9W?tag=rvgearlab-amz-20",
    "description": "ECOOPRO builds this envelope bag at 83 x 30 inches and 1.7 lb, with a waterproof nylon shell and a 100% polyester lining. It compresses to an 11 inch height and the maker pegs its working range at 55 to 60F.\n\nIt costs less than the NewDoar and keeps the weight under two pounds, with a slimmer 30 inch cut and a warmer-weather range. The listing treats it as an alternative to a down bag for summer.\n\nA fit for scouts, warm-night hikers and festival campers who want the lowest price on a light bag. Two near-identical listings were merged here.",
    "specs": [
      "83 x 30 inch envelope",
      "1.7 lb, 11 in compressed",
      "55 to 60F range"
    ],
    "pros": [
      "1.7 lb with packed height printed",
      "Waterproof nylon shell",
      "Breathable polyester lining",
      "Compression sack included"
    ],
    "cons": [
      "Range is only 55 to 60F",
      "Narrow 30 inch width"
    ],
    "bestFor": "Warm nights on a budget",
    "take": "A 1.7 lb envelope bag at the lowest price in the list.",
    "catch": "Its 55 to 60F range is warm only, and 30 inches is narrow."
  },
  {
    "id": "best-ultralight-camping-sleeping-bags-3",
    "rank": 3,
    "badge": "Best for Cold Camps",
    "name": "Teton Tracker",
    "price": "$84.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31A2IOmtyyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00DDP3DZ8?tag=rvgearlab-amz-20",
    "description": "TETON's Tracker is a 5F mummy sold as lightweight and warm, with added insulation in the footbox. The three-piece hood pulls in tight, and a full-length draft tube holds warm air in.\n\nIt is the only bag here that handles real cold, which makes it the practical choice when the NewDoar and ECOOPRO run out of range. The listing prints no weight, so judge it as a warm bag first and a light bag second.\n\nGood for cold-weather campers who want a mummy with an insulated footbox and a hood that cinches. Hang loops preserve loft in storage.",
    "specs": [
      "5F mummy, insulated footbox",
      "Three-piece hood, draft tube",
      "Compression sack, hang loops"
    ],
    "pros": [
      "Rated to 5F, far colder than the others",
      "Insulated footbox warms cold feet",
      "Draft tube blocks zipper leaks",
      "Hang loops preserve loft"
    ],
    "cons": [
      "No weight printed on the listing",
      "Heavier than the summer bags"
    ],
    "bestFor": "Cold-weather campers",
    "take": "The only bag here for real cold, with a warm footbox and a tight hood.",
    "catch": "It is not a true ultralight bag, and the listing prints no weight."
  }
];

export const howWeEvaluated = [
  {
    "title": "Printed weight",
    "description": "Weights and packed sizes were compared where the listing prints them."
  },
  {
    "title": "Temperature range",
    "description": "Printed ranges were compared, since weight savings usually cost warmth."
  },
  {
    "title": "Shell and build",
    "description": "Ripstop nylon, waterproof shells and linings were noted."
  },
  {
    "title": "Packing",
    "description": "Compression sacks and packed dimensions were noted."
  },
  {
    "title": "Honest scope",
    "description": "One bag does not print a weight, so it is flagged as a cold-weather pick, not an ultralight one."
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
    "subheading": "By Trip Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Warm-route backpacking",
          "NewDoar Ultralight",
          "1.5 lb, 11.8 x 6.5 inches"
        ],
        [
          "Budget summer trips",
          "ECOOPRO Warm Weather",
          "1.7 lb at the lowest price"
        ],
        [
          "Cold nights near 5F",
          "TETON Tracker 5F",
          "5F rated mummy"
        ],
        [
          "Linking two bags",
          "NewDoar Ultralight",
          "Two-way zippers link a pair"
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
          "$20 to $30",
          "ECOOPRO Warm Weather"
        ],
        [
          "$20 to $30",
          "NewDoar Ultralight"
        ],
        [
          "$80 to $90",
          "TETON Tracker 5F"
        ]
      ]
    }
  },
  {
    "subheading": "Summer Ultralight vs Cold Mummy",
    "cards": [
      {
        "label": "Summer ultralight",
        "text": "The NewDoar Ultralight and ECOOPRO Warm Weather save weight with ranges starting at 50F and 55F."
      },
      {
        "label": "Cold mummy",
        "text": "The TETON Tracker 5F gives up weight savings to handle real cold."
      }
    ],
    "note": "Choose the NewDoar Ultralight for warm weather and the TETON Tracker 5F if nights drop toward freezing."
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
          "Lowest cost",
          "ECOOPRO Warm Weather"
        ],
        [
          "Low-mid cost, lightest",
          "NewDoar Ultralight"
        ],
        [
          "Higher cost, cold rating",
          "TETON Tracker 5F"
        ]
      ]
    }
  },
  {
    "subheading": "Weight-Conscious Campers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed weight under 2 lb, a stated packed size and a range that matches your lows."
      },
      {
        "label": "In this comparison",
        "text": "The NewDoar Ultralight prints 1.5 lb and 11.8 x 6.5 inches, while the ECOOPRO Warm Weather prints 1.7 lb and 11 inches."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the TETON Tracker 5F if you need cold-weather warmth."
      },
      {
        "label": "Save if",
        "text": "Save with the ECOOPRO Warm Weather or NewDoar Ultralight for warm summer nights."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Weight versus warmth",
    "explanation": "Every ounce saved is warmth lost, and 1.5 lb bags rated for 50 to 70F cannot handle a frosty night. Match the weight to your lowest temperature. Check the printed range, not just the weight."
  },
  {
    "criterion": "Packed size",
    "explanation": "A bag that stuffs to 11 x 6 inches fits a small pack. Larger bags take pack space even at the same weight. Check packed dimensions in the listing."
  },
  {
    "criterion": "Ripstop versus plain nylon",
    "explanation": "Ripstop weave stops small tears from spreading, which matters for a thin shell. A 380T ripstop is stronger for its weight than plain fabric. Look for ripstop wording."
  },
  {
    "criterion": "Width and breathing",
    "explanation": "A 30 inch envelope is narrow and holds heat poorly when a sleeper moves. Wider bags use more fabric but feel less confining. Check the printed width."
  },
  {
    "criterion": "Pad pairing",
    "explanation": "An ultralight bag relies on your pad for ground insulation. A thin bag over a thin pad leaves you cold. Plan an R 2 or higher pad for warm-weather trips."
  }
];

export const faq = [
  {
    "q": "What counts as an ultralight sleeping bag?",
    "a": "Generally under about two pounds. The NewDoar Ultralight and ECOOPRO Warm Weather fit that bar. Warmth drops as weight falls."
  },
  {
    "q": "What mistake do ultralight buyers make?",
    "a": "They buy the lightest bag and skip the rating. A 50F bag is useless on a 38F night. Match range to lows."
  },
  {
    "q": "Is the Tracker worth it over the NewDoar?",
    "a": "If your nights drop toward freezing, yes. The TETON Tracker 5F is rated far colder but prints no weight. For summer, the NewDoar Ultralight is lighter."
  },
  {
    "q": "Can I link two bags?",
    "a": "The NewDoar Ultralight lists two-way zippers that link two bags. You need a matching pair. Check zipper sides."
  },
  {
    "q": "How do I store them?",
    "a": "Keep them loose in a large sack, not compressed. Air them after damp trips. Wash only per the tag."
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
