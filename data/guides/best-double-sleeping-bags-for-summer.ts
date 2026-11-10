export const guideSlug = "best-double-sleeping-bags-for-summer";
export const guideTitle = "2 Best Double Sleeping Bags For Summer in 2026";
export const metaTitle = "Best Double Sleeping Bags For Summer in 2026";
export const metaDescription = "Two doubles for cool summer nights: the VENTURE 4TH rated 30 to 70F and the AGEMORE flannel at 41 to 59F, with how to keep two people from overheating.";
export const mainKeyword = "best double sleeping bags for summer";
export const introParagraphs = [
  "Few double sleeping bags are built for hot weather, and the two listings that come closest are sold for three-season use: the VENTURE 4TH Double with a 30 to 70F range, and the AGEMORE Flannel Double with a 41 to 59F design range. Neither is a hot-night bag by itself, but both can work in summer when nights are cool or the bag is used as a quilt.",
  "The guide explains how to use a three-season double in summer, since the trick is venting and unzipping rather than buying a thinner bag. Both open flat or split into two singles."
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
    "id": "best-double-sleeping-bags-for-summer-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "VENTURE 4TH Double 3-Season Backpacking Sleeping Bag",
    "price": "$64.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41W4ToCwJQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B081VYH9HR?tag=rvgearlab-20",
    "description": "VENTURE 4TH states a range of 30 to 70F for this double, which is the only one here that reaches into the 70s. A breathable design and a two-way zipper let you adjust airflow, and a water-resistant polyester shell and a compression sack are included.\n\nAgainst the AGEMORE Flannel Double, it has the higher top end for warm nights and a lifetime replacement guarantee. It also costs a little less.\n\nA good pick for couples who camp in summer at elevation or in the mountains where nights run cool. It fits campers up to 5 feet 11 inches.",
    "specs": [
      "30 to 70F stated range",
      "Two-way zipper vents airflow",
      "Fits campers to 5 ft 11 in"
    ],
    "pros": [
      "Range reaches 70F",
      "Two-way zipper adjusts airflow",
      "Lifetime replacement guarantee",
      "Compression sack included"
    ],
    "cons": [
      "Fit height stops at 5 ft 11 in",
      "No packed weight printed"
    ],
    "bestFor": "Summer couples at elevation",
    "take": "The one double here whose stated range reaches 70F, with a two-way zipper to vent.",
    "catch": "Fit tops out at 5 feet 11 inches, and no weight is printed."
  },
  {
    "id": "best-double-sleeping-bags-for-summer-2",
    "rank": 2,
    "badge": "Best for Cool Summer Nights",
    "name": "AGEMORE Cotton Flannel Double Sleeping Bag for Camping",
    "price": "$66.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51z0CN852PL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B077TC9NS5?tag=rvgearlab-20",
    "description": "The AGEMORE double pairs a 210T water-resistant polyester exterior with a brushed cotton flannel interior, and its design range is listed as 41 to 59F. Zippers on both sides open it into two single bags or one wide quilt.\n\nIt runs cooler in range than the VENTURE 4TH Double 3-Season, so it suits summer nights that drop into the 40s and 50s rather than hot ones. The flannel lining makes it comfortable on bare skin.\n\nA fit for couples who camp in cool-summer regions and want a cozy flannel double. It compresses into its carry bag.",
    "specs": [
      "41 to 59F design range",
      "210T shell, brushed flannel",
      "Opens into a wide quilt"
    ],
    "pros": [
      "Soft flannel lining",
      "Water-resistant polyester shell",
      "Splits into two single bags",
      "Compresses into a carry bag"
    ],
    "cons": [
      "Range tops out at 59F",
      "Flannel is warm on hot nights"
    ],
    "bestFor": "Cool-summer campers",
    "take": "A flannel double for nights in the 40s and 50s that opens into a wide quilt.",
    "catch": "Its 41 to 59F range does not cover hot nights, and no limit rating is printed."
  }
];

export const howWeEvaluated = [
  {
    "title": "Top end of the range",
    "description": "We checked which listing reaches into warm temperatures."
  },
  {
    "title": "Venting",
    "description": "We looked for zippers that help manage heat."
  },
  {
    "title": "Layout",
    "description": "We compared quilt and split layouts."
  },
  {
    "title": "Fit",
    "description": "We read printed fit heights."
  },
  {
    "title": "Price",
    "description": "We compared cost."
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
    "subheading": "By Summer Night",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Nights around 60 to 70F",
          "VENTURE 4TH Double 3-Season",
          "Range reaches 70F"
        ],
        [
          "Nights around 45 to 55F",
          "AGEMORE Flannel Double",
          "41 to 59F range"
        ],
        [
          "Use as a quilt",
          "AGEMORE Flannel Double",
          "Opens into a wide quilt"
        ],
        [
          "Vent one side",
          "VENTURE 4TH Double 3-Season",
          "Two-way zipper"
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
          "$60 to $70",
          "VENTURE 4TH Double 3-Season"
        ],
        [
          "$60 to $70",
          "AGEMORE Flannel Double"
        ]
      ]
    }
  },
  {
    "subheading": "Higher Range vs Flannel Lining",
    "cards": [
      {
        "label": "Higher range",
        "text": "The VENTURE 4TH Double 3-Season reaches 70F and vents with a two-way zipper."
      },
      {
        "label": "Flannel",
        "text": "The AGEMORE Flannel Double is cozier but runs cooler in range."
      }
    ],
    "note": "Choose the VENTURE 4TH Double 3-Season for warm nights and the AGEMORE Flannel Double for cool ones."
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
          "Lower cost, warmer top end",
          "VENTURE 4TH Double 3-Season"
        ],
        [
          "Slightly higher cost, flannel",
          "AGEMORE Flannel Double"
        ]
      ]
    }
  },
  {
    "subheading": "Hot-Weather Couples Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A top end of the range at 70F or above and a zipper that vents."
      },
      {
        "label": "In this comparison",
        "text": "The VENTURE 4TH Double 3-Season lists 70F and a two-way zipper, while the AGEMORE Flannel Double stops at 59F."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the AGEMORE Flannel Double only if you camp where summer nights drop into the 40s."
      },
      {
        "label": "Save if",
        "text": "Save with the VENTURE 4TH Double 3-Season, which costs less and reaches higher."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Why summer doubles are scarce",
    "explanation": "Two bodies generate more heat than one, so a double in summer overheats quickly. Makers sell three-season doubles and expect you to unzip them. Check the top end of the range."
  },
  {
    "criterion": "Using a double as a quilt",
    "explanation": "Unzip the bag fully and lay it over you. That keeps airflow and still blocks bugs and dew. It works on any bag that opens flat."
  },
  {
    "criterion": "Range top end",
    "explanation": "A range that stops at 59F means the bag is warm at 60F and above. A range that reaches 70F is more flexible. Look at both ends."
  },
  {
    "criterion": "Venting for two",
    "explanation": "A two-way zipper lets one sleeper vent while the other stays covered. Foot vents help too. Check the listing."
  },
  {
    "criterion": "Pad choice",
    "explanation": "A wide, thin pad cools better than a thick one in summer. Match the pad width to the bag. Check before you buy."
  }
];

export const faq = [
  {
    "q": "Is a three-season double OK for summer?",
    "a": "Yes if you unzip it and use it as a quilt on hot nights. The VENTURE 4TH Double 3-Season reaches 70F. Neither is a true hot-night bag."
  },
  {
    "q": "What mistake do couples make in summer?",
    "a": "They zip up fully on a warm night and overheat. Open the zippers and vent. Use only a sheet on hot nights."
  },
  {
    "q": "Is the VENTURE worth over the AGEMORE?",
    "a": "For warm nights, yes. For cool summers with 40s lows, the AGEMORE Flannel Double is cozier. Pick by your lows."
  },
  {
    "q": "How do I vent a double?",
    "a": "Unzip the two-way zipper from the foot. Open one side while the other stays closed. Keep bugs out with the quilt layer."
  },
  {
    "q": "How do I wash a double?",
    "a": "Check the tag and use a big washer on gentle. Dry on low. Air dry flannel fully."
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
