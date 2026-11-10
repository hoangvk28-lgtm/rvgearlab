export const guideSlug = "best-synthetic-sleeping-bags-for-winter";
export const guideTitle = "2 Best Synthetic Sleeping Bags For Winter in 2026";
export const metaTitle = "Best Synthetic Sleeping Bags For Winter in 2026";
export const metaDescription = "Best synthetic sleeping bags for winter: a -30 degree base-camp mummy and a roomy 0 degree backpacking mummy compared on weight, cut and stated details.";
export const mainKeyword = "best synthetic sleeping bags for winter";
export const introParagraphs = [
  "Winter bags need a stated cold rating, thick synthetic fill and a hood that closes. Only two listings in our search fit, and they split into a heavy base-camp bag and a roomier backpacking-style mummy.",
  "We lead with the TETON Altos-S because it is the one you can imagine carrying, and keep the Browning for the deepest cold. Both are synthetic, which suits damp winter nights."
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
    "id": "best-synthetic-sleeping-bags-for-winter-1",
    "rank": 1,
    "badge": "Best Carryable Pick",
    "name": "Teton Altos-S 0 Degree Sleeping Bag for Adults; Lightweight Warm Mummy Sleeping Bag for Camping",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/311MLWC3MPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075JD2WGZ?tag=rvgearlab-amz-20",
    "description": "The TETON Altos-S is a mummy rated by the brand at 0 degrees, with a built-out footbox and extra shoulder and leg room. The listing highlights a water-resistant, breathable build and a compression sack with strong straps.\n\nAgainst the Browning, it is the practical one: a normal mummy shape in the 0 degree class where the Browning chases -30 with far more bulk. Its roomier cut lets you sleep in layers.\n\nIt suits restless sleepers and broad-shouldered hikers who camp in wet winter weather. A mid-range price makes it a fair step into a 0 degree class.",
    "specs": [
      "Built-out footbox, roomy cut",
      "More shoulder and leg room",
      "Compression sack included"
    ],
    "pros": [
      "Roomier cut for restless sleepers",
      "Water-resistant, breathable shell",
      "Compression sack with strap system",
      "Mid-range price for the 0 degree class"
    ],
    "cons": [
      "Weight and fill are not listed",
      "Hand wash only"
    ],
    "bestFor": "Winter hikers who sleep restlessly",
    "take": "A roomy 0 degree mummy that fits in a pack more easily than the Browning.",
    "catch": "The listing prints no weight, fill or packed size, so compare it before a long trip."
  },
  {
    "id": "best-synthetic-sleeping-bags-for-winter-2",
    "rank": 2,
    "badge": "Best for Deep Cold",
    "name": "Browning Camping Denali -30° Mummy Sleeping Bag",
    "price": "$147.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31HdmVIMi0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09QDQGHDM?tag=rvgearlab-amz-20",
    "description": "The Browning Denali is a mummy titled -30 degrees with TechLoft Silver synthetic insulation, 122 oz of it, in a two-layer offset design. The shell is 210T nylon diamond ripstop, and the whole bag weighs 9 lb 9 oz.\n\nIt is the colder choice by 30 degrees on the label and carries a lot more fill than the Altos-S. The chest baffle and mesh pocket add comfort on frozen nights.\n\nIt suits expedition-style campers using a sled or camping near their vehicle. The synthetic fill tolerates frost and damp.",
    "specs": [
      "-30 degree titled mummy",
      "TechLoft Silver synthetic fill",
      "9 lb 9 oz, 122 oz fill"
    ],
    "pros": [
      "Lowest rating in this list",
      "Synthetic fill tolerates damp better than down",
      "Two-layer offset build limits cold spots",
      "Roomy 86 by 38 inch mummy"
    ],
    "cons": [
      "Very heavy for carrying on foot",
      "Bulky for a backpack"
    ],
    "bestFor": "Sled and base-camp winter trips",
    "take": "The coldest bag in the guide, with its weight and fill fully printed.",
    "catch": "At 9 lb 9 oz it is a base-camp bag that a long trek will punish."
  }
];

export const howWeEvaluated = [
  {
    "title": "Cold label",
    "description": "We compared the titled temperature and noted these are brand figures."
  },
  {
    "title": "Insulation",
    "description": "We looked at the fill type and the printed fill weight."
  },
  {
    "title": "Total weight",
    "description": "We compared printed weights, since winter bags are heavy by nature."
  },
  {
    "title": "Fit and cut",
    "description": "We looked at footbox, shoulder room and hood design."
  },
  {
    "title": "Winter use",
    "description": "We matched each bag to carried, sled or vehicle trips."
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
    "subheading": "By Winter Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Winter backpacking on foot",
          "TETON Altos-S",
          "0 degree mummy in a compression sack"
        ],
        [
          "Sled or base-camp trips",
          "Browning Denali -30",
          "-30 degree title with 122 oz of fill"
        ],
        [
          "Restless or broad sleepers",
          "TETON Altos-S",
          "Built-out footbox with extra shoulder room"
        ],
        [
          "Extreme cold nights",
          "Browning Denali -30",
          "Two-layer offset build and a chest baffle"
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
          "$120 to $130",
          "TETON Altos-S"
        ],
        [
          "$140 to $150",
          "Browning Denali -30"
        ]
      ]
    }
  },
  {
    "subheading": "Carry vs Drag",
    "cards": [
      {
        "label": "Carry",
        "text": "The TETON Altos-S is a 0 degree bag that fits a winter pack. Its listing prints no weight."
      },
      {
        "label": "Drag",
        "text": "The Browning Denali -30 prints 9 lb 9 oz and is better on a sled."
      }
    ],
    "note": "Choose the TETON Altos-S if you carry your bag, and the Browning Denali -30 only if you do not."
  },
  {
    "subheading": "By Comfort Priority",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Coldest rating",
          "Browning Denali -30"
        ],
        [
          "Most shoulder room",
          "TETON Altos-S"
        ],
        [
          "Easiest packing",
          "TETON Altos-S"
        ]
      ]
    }
  },
  {
    "subheading": "Wet-Snow Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a synthetic fill and a water-resistant shell."
      },
      {
        "label": "In this comparison",
        "text": "The TETON Altos-S lists a water-resistant, breathable build, and the Browning Denali -30 uses TechLoft Silver synthetic fill."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Browning Denali -30 if the forecast falls below zero and you can move 9 lb 9 oz."
      },
      {
        "label": "Save if",
        "text": "Save with the TETON Altos-S if your nights hover near 10 to 20 degrees and you carry the bag."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "A rating you can trust",
    "explanation": "Winter labels are brand figures, so they are optimistic. A 0 degree bag is usually comfortable well above 0. Add a margin of at least 15 degrees and check whether the page names a test standard."
  },
  {
    "criterion": "Fill and weight",
    "explanation": "Winter synthetic bags weigh several pounds because fill is the warmth. The Browning lists 122 oz of fill, which explains its 9 lb 9 oz weight. Find the fill weight when the listing prints one."
  },
  {
    "criterion": "Hood and draft control",
    "explanation": "Heat leaves through the face and the zipper. Look for an insulated hood, a draft collar and a zipper draft tube. Check the listing for these parts by name."
  },
  {
    "criterion": "Moisture and loft",
    "explanation": "Breath moisture builds up inside a bag in freezing nights. Synthetic fill copes better than down, but loft still drops if the bag stays damp. Dry it in the sun when you can."
  },
  {
    "criterion": "Sleeping pad pairing",
    "explanation": "Fill compresses under you, so the pad provides insulation from the ground. Pair the bag with a pad of high R-value. Check the pad's stated number before you spend more on the bag."
  }
];

export const faq = [
  {
    "q": "Is synthetic good for winter camping?",
    "a": "Yes, because it keeps insulating when damp, which is common in snow. It is heavier and bulkier than down."
  },
  {
    "q": "What is a common mistake with winter bags?",
    "a": "Trusting the number on the label. The TETON Altos-S 0 degree figure is the brand's, so plan layers and a warm pad."
  },
  {
    "q": "Is the Browning Denali worth the weight?",
    "a": "Only for deep cold. At 9 lb 9 oz, it is a bag for a sled, a truck or a hunting camp."
  },
  {
    "q": "How do I store a winter bag?",
    "a": "Loose and uncompressed, hanging or in a large sack. Compressed storage flattens the fill."
  },
  {
    "q": "How do I dry a bag in winter?",
    "a": "Turn it inside out in a warm tent or in the sun at midday. A bag that stays damp loses loft and warmth."
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
