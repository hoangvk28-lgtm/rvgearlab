export const guideSlug = "best-backpacking-sleeping-bags-for-tall-campers";
export const guideTitle = "2 Best Backpacking Sleeping Bags For Tall Campers in 2026";
export const metaTitle = "Best Backpacking Sleeping Bags For Tall Campers";
export const metaDescription = "Two backpacking bags that fit tall sleepers: the Kelty Cosmic 20 Down in Long for 6 ft 6 in and the VENTURE 4TH XXL at 90 x 39 inches.";
export const mainKeyword = "best backpacking sleeping bags for tall campers";
export const introParagraphs = [
  "Backpacking bags are cut tight to save weight, and few listings state a fit for tall sleepers. This guide covers two that do: the Kelty Cosmic 20 Down in the Long size, fit for sleepers to 6 feet 6 inches, and the VENTURE 4TH XXL at 90 x 39 inches.",
  "Because the list is short, the guide spends its length on how to measure a long bag against your height, and on the weight tradeoff between a down mummy and a roomy synthetic bag."
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
    "id": "best-backpacking-sleeping-bags-for-tall-campers-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Kelty Cosmic 20 Down Mummy Sleeping Bag for Backpacking",
    "price": "$197.07",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Ypf-hGnNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSPJR61T?tag=rvgearlab-amz-20",
    "description": "The Kelty Cosmic 20 Down is a 550 fill power down mummy with recycled nylon and polyester taffeta shell and liner finished with PFAS-free water repellent. Each size up adds 6 inches of length, with the Long fitting sleepers up to 6 feet 6 inches, and the ISO limit rating is 21F with an ISO extreme rating of -11F.\n\nCompared with the VENTURE 4TH XXL, it is the more compressible option and the one with stated ISO ratings. Dual-direction zippers and traceable RDS down add to the design.\n\nA strong match for tall backpackers who want a true trail bag with documented ratings. It is a Kelty classic with a long record.",
    "specs": [
      "550 fill power RDS down",
      "ISO limit 21F, extreme -11F",
      "Long fits to 6 ft 6 in"
    ],
    "pros": [
      "Long size fits to 6 ft 6 in",
      "ISO limit and extreme ratings printed",
      "Traceable RDS-certified down",
      "PFAS-free recycled fabrics"
    ],
    "cons": [
      "Costs far more than the VENTURE",
      "Tapered cut is snug for wide shoulders"
    ],
    "bestFor": "Tall trail backpackers",
    "take": "A long down bag with documented ISO ratings and a recycled shell.",
    "catch": "It costs several times as much as the VENTURE 4TH XXL, and the ISO limit is not a comfort number."
  },
  {
    "id": "best-backpacking-sleeping-bags-for-tall-campers-2",
    "rank": 2,
    "badge": "Best Budget XXL",
    "name": "VENTURE 4TH 3-Season XXL Backpacking Sleeping Bag for Camping",
    "price": "$54.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51geP2yX+pL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B097YXGTHQ?tag=rvgearlab-amz-20",
    "description": "VENTURE 4TH's XXL bag measures 90 x 39 inches and states a 30 to 70F range for 3-season use. The shell is water-resistant polyester, it is machine washable, and it packs into an included compression sack.\n\nAgainst the Kelty Cosmic 20 Down Long, it is much cheaper and roomier through the body. Anti-snag zippers and a lifetime replacement guarantee add value.\n\nA good pick for tall campers who want space and a low price for three-season trips. The extra room lets you roll over.",
    "specs": [
      "90 x 39 in XXL",
      "30 to 70F range",
      "Anti-snag zippers"
    ],
    "pros": [
      "Roomy 90 x 39 inch body",
      "Printed 30 to 70F range",
      "Lifetime replacement guarantee",
      "Machine washable"
    ],
    "cons": [
      "No packed weight printed",
      "Bulkier than a down mummy"
    ],
    "bestFor": "Tall budget campers",
    "take": "A cheap 90 x 39 inch bag with a printed 30 to 70F range.",
    "catch": "It is heavier and bulkier than a down mummy, and no weight is printed."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fit height",
    "description": "We read the stated fit heights and lengths, since tall sleepers need exact numbers."
  },
  {
    "title": "Rating",
    "description": "We compared ISO ratings against a printed temperature range."
  },
  {
    "title": "Weight and bulk",
    "description": "We weighed the carry cost of a long bag."
  },
  {
    "title": "Insulation",
    "description": "We noted down against synthetic."
  },
  {
    "title": "Price",
    "description": "We compared cost for the extra length."
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
    "subheading": "By Trip",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Multi-day backpacking",
          "Kelty Cosmic 20 Down Long",
          "Down mummy, fits to 6 ft 6 in"
        ],
        [
          "Car camping with room",
          "VENTURE 4TH XXL 3-Season",
          "90 x 39 inch body"
        ],
        [
          "Cool nights near 20F",
          "Kelty Cosmic 20 Down Long",
          "ISO limit 21F"
        ],
        [
          "Warm trips on a budget",
          "VENTURE 4TH XXL 3-Season",
          "30 to 70F range"
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
          "VENTURE 4TH XXL 3-Season"
        ],
        [
          "$190 to $200",
          "Kelty Cosmic 20 Down Long"
        ]
      ]
    }
  },
  {
    "subheading": "Down Mummy vs Roomy Synthetic",
    "cards": [
      {
        "label": "Down mummy",
        "text": "The Kelty Cosmic 20 Down Long compresses small and holds a 21F ISO limit."
      },
      {
        "label": "Roomy synthetic",
        "text": "The VENTURE 4TH XXL 3-Season offers a wide 39 inch body at a low price."
      }
    ],
    "note": "Choose the Kelty Cosmic 20 Down Long for the trail and the VENTURE 4TH XXL 3-Season for comfort."
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
          "Around 55 dollars",
          "VENTURE 4TH XXL 3-Season"
        ],
        [
          "Around 200 dollars",
          "Kelty Cosmic 20 Down Long"
        ]
      ]
    }
  },
  {
    "subheading": "6 ft 4 in and Taller Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated fit height or a body length above 88 inches."
      },
      {
        "label": "In this comparison",
        "text": "The Kelty Cosmic 20 Down Long fits to 6 feet 6 inches, and the VENTURE 4TH XXL 3-Season measures 90 x 39 inches."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Kelty Cosmic 20 Down Long if you carry the bag far and want ISO ratings."
      },
      {
        "label": "Save if",
        "text": "Save with the VENTURE 4TH XXL 3-Season, which gives room for far less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "How long a bag you need",
    "explanation": "A bag should be about 6 inches longer than you so your feet do not press on the end. A Long that fits to 6 feet 6 inches suits sleepers up to that height. Measure yourself and compare to the printed fit height."
  },
  {
    "criterion": "Girth for tall bodies",
    "explanation": "Tall campers often have broader shoulders too, and a tapered bag can pinch. A wider 39 inch bag gives room. Check the printed width or girth."
  },
  {
    "criterion": "ISO ratings",
    "explanation": "ISO ratings split into limit and extreme figures. The 21F limit is for a compact sleeper and is not a comfort number. Plan for comfort above that."
  },
  {
    "criterion": "Weight penalty of length",
    "explanation": "Every extra inch adds fabric and fill. A Long down bag still weighs less than a roomy synthetic bag. Compare printed weights."
  },
  {
    "criterion": "Pad length",
    "explanation": "A long bag needs a long pad, or your feet hang off. Match the pad to your height. Check pad lengths separately."
  }
];

export const faq = [
  {
    "q": "Does a tall camper need a Long bag?",
    "a": "If you are within about 6 inches of the regular's fit height, yes. A Kelty Long fits to 6 feet 6 inches. Short bags press on your feet."
  },
  {
    "q": "What mistake do tall campers make?",
    "a": "They buy a regular size to save weight. Cold feet follow. Choose a long or XXL bag."
  },
  {
    "q": "Is the Kelty worth over the VENTURE?",
    "a": "If you hike, yes, for the weight and the ISO ratings. For car camping, the VENTURE 4TH XXL 3-Season is cheaper and roomier."
  },
  {
    "q": "How do I check fit?",
    "a": "Lie down in the bag and check that your head and feet do not touch the ends. Do it at home. Return it if needed."
  },
  {
    "q": "How do I store a long bag?",
    "a": "Store it loose in a large sack. Wash only as the tag directs. Dry it fully."
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
