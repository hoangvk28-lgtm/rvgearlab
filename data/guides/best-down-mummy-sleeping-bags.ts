export const guideSlug = "best-down-mummy-sleeping-bags";
export const guideTitle = "3 Best Down Mummy Sleeping Bags in 2026";
export const metaTitle = "Best Down Mummy Sleeping Bags in 2026";
export const metaDescription = "Best down mummy sleeping bags compared on fill power, down weight, ISO ratings and packed size, with three true down lines on the market here.";
export const mainKeyword = "best down mummy sleeping bags";
export const introParagraphs = [
  "Down mummies give the most warmth per ounce, and only three lines here name real duck down and print enough detail to compare. A fourth listing in the search results used polyester fill and was left out.",
  "They are ranked on fill power and down weight, printed ISO or brand ratings, weight and packed size, with QEZER's two fill tiers treated as one line."
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
    "id": "best-down-mummy-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Kelty Cosmic 20 Down Mummy Sleeping Bag for Backpacking",
    "price": "$189.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Ypf-hGnNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSPKCJZK?tag=rvgearlab-amz-20",
    "description": "The Kelty Cosmic 20 is a 550 fill power RDS-traceable down mummy in recycled nylon and polyester taffeta with PFAS-free DWR. It prints an ISO limit rating of 21 degrees F, an ISO extreme rating of -11 degrees F and lengths for Short, Regular and Long sleepers.\n\nIt is the only bag here with ISO figures, and its dual-direction zippers and silky fabrics are more refined than the QEZER's. It costs more than every other pick.\n\nIt suits backpackers who want a proven down mummy with verified limits. Size choice matters because each size adds 6 inches.",
    "specs": [
      "550 FP RDS down mummy",
      "ISO limit 21F, extreme -11F",
      "Short, Regular, Long"
    ],
    "pros": [
      "ISO limit and extreme ratings printed",
      "Traceable RDS down",
      "PFAS-free DWR recycled shell",
      "Three length options"
    ],
    "cons": [
      "Highest price in the list",
      "550 fill power is the lowest here"
    ],
    "bestFor": "Rated, traceable down mummy",
    "take": "The only down mummy here with ISO figures.",
    "catch": "The ISO limit is 21F, so comfort is warmer than that."
  },
  {
    "id": "best-down-mummy-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Lightest",
    "name": "HLITMOUT Mummy Down Sleeping Bag with Pillow for Backpacking",
    "price": "$96.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31zqqRbeRuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GCY58RRV?tag=rvgearlab-amz-20",
    "description": "The HLITMOUT uses RDS-certified white duck down at 680 fill power in a 400T 40D nylon shell, with 0.88 lb or 1.1 lb of down depending on the version. The 0.88 lb version weighs 2.16 lb including a pillow.\n\nIt has the highest fill power of the three and the lowest stated weight. It adds side zipper pockets and a pillow, and it costs less than the Kelty.\n\nIt suits backpackers who want the lightest down mummy with the highest fill power. It prints no temperature rating.",
    "specs": [
      "680 FP RDS duck down",
      "2.16 lb with pillow",
      "400T 40D water-repellent nylon"
    ],
    "pros": [
      "Highest fill power at 680FP",
      "Weighs 2.16 lb with pillow",
      "Inner zipper loop, side pockets",
      "Compression sack included"
    ],
    "cons": [
      "No temperature rating printed",
      "Down weight depends on the version"
    ],
    "bestFor": "Light fast-and-light trips",
    "take": "The highest fill power and lowest weight of the group.",
    "catch": "The listing prints no temperature rating, so choose the 1.1 lb version for colder nights."
  },
  {
    "id": "best-down-mummy-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Value Down",
    "name": "QEZER Down Mummy Sleeping Bag for Adults",
    "price": "$123.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41um4BWRCYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DBVL1CRC?tag=rvgearlab-amz-20",
    "description": "The QEZER is a 600+ fill power duck down mummy sized 84.65 by 31.89 inches with a wide trapezoidal foot box. The 2.2 lb down version weighs 3.64 lb and stores at 14.96 by 7.48 inches, while a 1.1 lb version weighs 2.34 lb and stores at 13.78 by 6.3 inches.\n\nIt costs less than the Kelty and prints weights and pack sizes for both fill tiers. Its zippers can attach to a second bag.\n\nIt suits spring to autumn backpackers who want real down at a moderate price. The listing also calls it suitable for cold winter weather.",
    "specs": [
      "600+ FP duck down",
      "2.2 lb or 1.1 lb fill",
      "84.65 x 31.89 inch mummy"
    ],
    "pros": [
      "Weights and pack sizes both listed",
      "Two fill tiers to choose from",
      "Wide trapezoidal foot box",
      "Zips to a second bag"
    ],
    "cons": [
      "No ISO rating printed",
      "3.64 lb in the heavy version"
    ],
    "bestFor": "Moderate-budget down",
    "take": "Real down at a moderate price, with clear weight data.",
    "catch": "No temperature figure is printed, so match the fill tier to your trip."
  }
];

export const howWeEvaluated = [
  {
    "title": "Down named",
    "description": "Only listings that name down count."
  },
  {
    "title": "Fill power and weight",
    "description": "Fill power and pounds of down."
  },
  {
    "title": "Ratings",
    "description": "ISO or brand figures."
  },
  {
    "title": "Weight and pack size",
    "description": "Listed weight and storage size."
  },
  {
    "title": "Fit",
    "description": "Lengths and shape."
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
    "subheading": "By Hiker",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "ISO-rated mummy",
          "Kelty Cosmic 20 Down",
          "ISO limit 21F."
        ],
        [
          "Lightest",
          "HLITMOUT 680FP Down Mummy",
          "2.16 lb with pillow."
        ],
        [
          "Moderate budget",
          "QEZER 600FP Down Mummy",
          "Weights both listed."
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
          "HLITMOUT 680FP Down Mummy"
        ],
        [
          "$120 to $130",
          "QEZER 600FP Down Mummy"
        ],
        [
          "$180 to $190",
          "Kelty Cosmic 20 Down"
        ]
      ]
    }
  },
  {
    "subheading": "Fill Power vs Down Weight",
    "cards": [
      {
        "label": "High fill power",
        "text": "Lighter for the same loft. The HLITMOUT 680FP Down Mummy has the highest fill power."
      },
      {
        "label": "More down",
        "text": "More warmth in total. The QEZER 600FP Down Mummy offers 2.2 lb of down."
      }
    ],
    "note": "Choose the HLITMOUT 680FP Down Mummy for weight and the QEZER 600FP Down Mummy for warmth per dollar."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Near $97",
          "HLITMOUT 680FP Down Mummy"
        ],
        [
          "Near $123",
          "QEZER 600FP Down Mummy"
        ],
        [
          "Near $190",
          "Kelty Cosmic 20 Down"
        ]
      ]
    }
  },
  {
    "subheading": "Three-Season Backpacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "An ISO limit or printed weight and a fill power above 550."
      },
      {
        "label": "In this comparison",
        "text": "The Kelty Cosmic 20 Down prints ISO figures, and the HLITMOUT 680FP Down Mummy lists 680FP."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Kelty Cosmic 20 Down for ISO ratings and size options."
      },
      {
        "label": "Save if",
        "text": "Save with the HLITMOUT 680FP Down Mummy for the lightest weight at a lower price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fill power versus amount",
    "explanation": "Fill power measures loft per ounce, while the down weight sets how much insulation you carry. The HLITMOUT lists 680FP with 0.88 or 1.1 lb, and the QEZER lists 600+ with 2.2 or 1.1 lb. Compare both."
  },
  {
    "criterion": "ISO ratings",
    "explanation": "An ISO rating comes from a standard test, unlike a brand label. The Kelty Cosmic 20 prints an ISO limit of 21F and extreme of -11F. Prefer ISO figures when listed."
  },
  {
    "criterion": "Weight and storage size",
    "explanation": "A light bag helps on long days. The HLITMOUT lists 2.16 lb and the QEZER 2.34 lb in the lighter version. Compare weights and storage dimensions."
  },
  {
    "criterion": "Length options",
    "explanation": "A mummy that is too short pinches your feet. The Kelty sells Short, Regular and Long. Match the size to your height."
  },
  {
    "criterion": "Water resistance",
    "explanation": "Down loses loft when wet, so DWR helps. The Kelty and HLITMOUT list water-repellent shells. Pair with a dry sack."
  }
];

export const faq = [
  {
    "q": "Is a down mummy worth it for backpacking?",
    "a": "Yes, for the weight. The HLITMOUT 680FP Down Mummy weighs 2.16 lb with a pillow."
  },
  {
    "q": "What does RDS mean?",
    "a": "The Responsible Down Standard traces the down. The Kelty and HLITMOUT listings state it. It is about sourcing."
  },
  {
    "q": "Which fill tier should I choose?",
    "a": "Take the 2.2 lb version of the QEZER 600FP Down Mummy for colder nights. The 1.1 lb version suits warmer trips."
  },
  {
    "q": "How do I keep down lofty?",
    "a": "Store it loose and dry. Use a dry sack in the field."
  },
  {
    "q": "How do I wash it?",
    "a": "Use a down cleaner in a front-loader on gentle. Dry it on low with clean tennis balls to restore loft."
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
