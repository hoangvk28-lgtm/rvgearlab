export const guideSlug = "best-compact-double-sleeping-bags";
export const guideTitle = "3 Best Compact Double Sleeping Bags in 2026";
export const metaTitle = "Best Compact Double Sleeping Bags in 2026";
export const metaDescription = "Three two-person bags marketed as compact: ETGLCOZY XL Queen, BISINNA with two pillows and AGEMORE flannel, with what compact really means for a double.";
export const mainKeyword = "best compact double sleeping bags";
export const introParagraphs = [
  "A double sleeping bag is never tiny, so compact here means one that compresses into a carry bag and splits or rolls up easily. This guide covers three listings that use that language: the ETGLCOZY, the BISINNA and the AGEMORE.",
  "None of them prints a packed size, so the guide ranks on the features that make a double easy to move: a compression or storage sack, a splitting layout and washable fabric."
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
    "id": "best-compact-double-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ETGLCOZY XL Queen Size 2 Person Double Sleeping Bag for Adults",
    "price": "$56.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41qlC0ajXbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0969VG225?tag=rvgearlab-amz-20",
    "description": "ETGLCOZY sells an XL queen double whose two zipper tracks turn it into a pair of single bags or a pair of blankets. A soft flannel liner and a Thermolock draft tube are built in, and a bottom ventilation zipper helps manage heat.\n\nAgainst the BISINNA and AGEMORE, it has the most documented construction: the draft tube, the flannel liner and a waterproof fabric are all named. It comes with a storage bag and is machine washable.\n\nA strong pick for couples and families who want a flexible double that packs reasonably small. It converts into two singles.",
    "specs": [
      "Dual zippers, converts to two",
      "Flannel liner, Thermolock tube",
      "Bottom ventilation zipper"
    ],
    "pros": [
      "Converts to two bags or blankets",
      "Thermolock draft tube cuts heat loss",
      "Bottom vent for warm nights",
      "Machine washable"
    ],
    "cons": [
      "No packed size or weight printed",
      "No temperature range printed"
    ],
    "bestFor": "Flexible couples",
    "take": "A convertible double with a draft tube, flannel liner and bottom vent.",
    "catch": "The listing prints no packed size, weight or temperature range."
  },
  {
    "id": "best-compact-double-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Roomy Pick",
    "name": "BISINNA Double Sleeping Bag for Adults Two Person Camping Sleeping Bag",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41urQutEKpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DTN9775M?tag=rvgearlab-amz-20",
    "description": "BISINNA measures 86.6 x 59 inches, with a 190T polyester shell, a soft pongee lining and hollow fiber fill. Two attached pillows and an adjustable hood come built in, and the bag rolls up for storage.\n\nIt prints the longest size of the three, which suits tall users, and it adds pillows the ETGLCOZY and AGEMORE do not list. It costs a bit more than the ETGLCOZY.\n\nA good fit for couples who want pillows and extra length in one bag. Machine washing is allowed.",
    "specs": [
      "86.6 x 59 in queen size",
      "190T shell, hollow fiber fill",
      "Two attached pillows"
    ],
    "pros": [
      "Prints the longest size",
      "Two pillows attached",
      "Adjustable hood",
      "Machine washable"
    ],
    "cons": [
      "No temperature range printed",
      "No weight or packed size printed"
    ],
    "bestFor": "Tall couples",
    "take": "A queen-size double with built-in pillows and a hood.",
    "catch": "The pillows add bulk, and the listing prints no rating."
  },
  {
    "id": "best-compact-double-sleeping-bags-3",
    "rank": 3,
    "badge": "Best for Cool Nights",
    "name": "AGEMORE Cotton Flannel Double Sleeping Bag for Camping",
    "price": "$66.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41jCUckGCZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRGTSVJL?tag=rvgearlab-amz-20",
    "description": "AGEMORE lines this double with brushed cotton flannel under a 210T water-resistant shell and lists a 32 to 59F design range. The bag compresses into its carry sack and splits into two singles with zippers on both sides.\n\nAlone among the three, it states a temperature range, which the ETGLCOZY and BISINNA leave out. It costs more than the ETGLCOZY.\n\nA good choice for couples who camp in cool spring and fall weather. The flannel adds a soft feel.",
    "specs": [
      "32 to 59F design range",
      "210T shell, flannel lining",
      "Splits into two singles"
    ],
    "pros": [
      "Range reaches down to 32F",
      "Splits into two single bags",
      "Water-resistant shell",
      "Compresses into a sack"
    ],
    "cons": [
      "Flannel lining adds bulk",
      "Costs more than the ETGLCOZY"
    ],
    "bestFor": "Cool-weather couples",
    "take": "The only compact double here with a printed range, down to 32F.",
    "catch": "The flannel lining adds bulk and the listing prints no weight."
  }
];

export const howWeEvaluated = [
  {
    "title": "Compactness",
    "description": "We looked for sacks, compression and layouts that help moving a double."
  },
  {
    "title": "Temperature data",
    "description": "We checked which listings print a range."
  },
  {
    "title": "Convertibility",
    "description": "We noted which bags split into singles or blankets."
  },
  {
    "title": "Size",
    "description": "We read printed dimensions."
  },
  {
    "title": "Price",
    "description": "We compared cost for a two-person bag."
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
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Maximum flexibility",
          "ETGLCOZY XL Queen",
          "Converts to two bags or blankets"
        ],
        [
          "Extra length and pillows",
          "BISINNA Queen Double",
          "86.6 inches with pillows"
        ],
        [
          "Cool nights with a printed range",
          "AGEMORE Flannel Double",
          "32 to 59F"
        ],
        [
          "Warm nights and ventilation",
          "ETGLCOZY XL Queen",
          "Bottom vent zipper"
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
          "ETGLCOZY XL Queen"
        ],
        [
          "$60 to $70",
          "AGEMORE Flannel Double"
        ],
        [
          "$60 to $70",
          "BISINNA Queen Double"
        ]
      ]
    }
  },
  {
    "subheading": "Flannel Liner vs Light Liner",
    "cards": [
      {
        "label": "Flannel",
        "text": "The AGEMORE Flannel Double and ETGLCOZY XL Queen use flannel, for warmth and softness."
      },
      {
        "label": "Light",
        "text": "The BISINNA Queen Double uses pongee lining for a lighter, smaller roll."
      }
    ],
    "note": "Choose the ETGLCOZY XL Queen for versatility and the BISINNA Queen Double for the lighter lining."
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
          "Lowest price",
          "ETGLCOZY XL Queen"
        ],
        [
          "Mid price, printed range",
          "AGEMORE Flannel Double"
        ],
        [
          "Highest price",
          "BISINNA Queen Double"
        ]
      ]
    }
  },
  {
    "subheading": "Couples Who Pack Light Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A storage sack, washable fabric and a layout that splits."
      },
      {
        "label": "In this comparison",
        "text": "The ETGLCOZY XL Queen includes a storage bag and splits into two, and the AGEMORE Flannel Double compresses into its sack."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the AGEMORE Flannel Double if you camp in cool weather and want a printed range."
      },
      {
        "label": "Save if",
        "text": "Save with the ETGLCOZY XL Queen, the cheapest and the most flexible."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What compact means for a double",
    "explanation": "A double bag is large, and the best you can expect is a bag that rolls into a sack. Expect a bundle the size of a large duffel. Check whether the listing prints dimensions."
  },
  {
    "criterion": "Temperature ranges",
    "explanation": "Only one of these three prints a range. A listing with no range gives you nothing to plan against. Treat unstated bags as warm-weather only."
  },
  {
    "criterion": "Splitting layout",
    "explanation": "A double that splits into two singles lets you reuse it on solo trips. Dual zippers and two-way zippers help. Check the listing for splitting."
  },
  {
    "criterion": "Lining and bulk",
    "explanation": "Flannel feels soft but adds bulk. Pongee and polyester pack smaller. Choose by how often you move the bag."
  },
  {
    "criterion": "Washing",
    "explanation": "Doubles collect dirt. Machine-washable bags are easier to keep clean. Check that your washer is large enough."
  }
];

export const faq = [
  {
    "q": "Are compact doubles really compact?",
    "a": "Not like a single. They roll into a large sack. Expect a bundle about the size of a duffel."
  },
  {
    "q": "What mistake do couples make?",
    "a": "They forget the range. Only the AGEMORE Flannel Double prints one. Without it, assume warm weather only."
  },
  {
    "q": "Is the AGEMORE worth over the ETGLCOZY?",
    "a": "If you camp near 40F, yes. The ETGLCOZY XL Queen is cheaper and converts into blankets. Choose by the weather."
  },
  {
    "q": "How do I split a double?",
    "a": "Unzip the shared edge, then zip each half to its own side if it splits. Test it at home. The AGEMORE Flannel Double and ETGLCOZY XL Queen list this feature."
  },
  {
    "q": "How do I wash a double?",
    "a": "Use a large front-loading washer on gentle. Dry on low. Check each care tag."
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
