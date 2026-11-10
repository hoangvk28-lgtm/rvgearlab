export const guideSlug = "best-double-rectangular-sleeping-bags";
export const guideTitle = "2 Best Double Rectangular Sleeping Bags in 2026";
export const metaTitle = "Best Double Rectangular Sleeping Bags in 2026";
export const metaDescription = "Two roomy queen-style double sleeping bags, the ETGLCOZY XL and the AGEMORE flannel, with advice on size, splitting and ventilation for couples.";
export const mainKeyword = "best double rectangular sleeping bags";
export const introParagraphs = [
  "Rectangular doubles are the standard way two people share a sleeping bag, and only two listings on Amazon fit the keyword cleanly: the ETGLCOZY XL Queen and the AGEMORE Cotton Flannel Double. Neither listing uses the word rectangular, so check the product photos for the cut before buying.",
  "Both are flat-cut queen doubles built for couples and families, so the guide compares them on the things that decide comfort: convertibility, temperature honesty and ventilation."
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
    "id": "best-double-rectangular-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ETGLCOZY XL Queen Size Double Sleeping Bag for 2 Adults Camping",
    "price": "$56.84",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411iU5r8l1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DH2WGKD9?tag=rvgearlab-amz-20",
    "description": "ETGLCOZY sells an XL queen double for two adults that converts into two separate bags or two blankets through a dual-zipper system. Construction includes soft flannel inside, a Thermolock tube along the zipper and a vent zipper at the foot.\n\nAgainst the AGEMORE, it adds a named draft tube and a bottom vent, and it converts into blankets as well as singles. It also comes with a storage bag and is machine washable.\n\nA good choice for couples and families who want a flexible, spacious bed for two. The waterproof fabric resists damp.",
    "specs": [
      "Dual zippers, converts to two",
      "Flannel liner, draft tube",
      "Machine washable"
    ],
    "pros": [
      "Becomes two bags or two blankets",
      "Thermolock draft tube",
      "Bottom vent zipper",
      "Machine washable"
    ],
    "cons": [
      "No fit height printed",
      "No temperature range printed"
    ],
    "bestFor": "Couples and families",
    "take": "An XL queen that converts to two bags or two blankets, with a draft tube.",
    "catch": "The listing prints no fit height or temperature range."
  },
  {
    "id": "best-double-rectangular-sleeping-bags-2",
    "rank": 2,
    "badge": "Best for Stated Range",
    "name": "AGEMORE Cotton Flannel Double Sleeping Bag",
    "price": "$66.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51jFot28IYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F43QK29X?tag=rvgearlab-amz-20",
    "description": "AGEMORE lines this double with brushed flannel cotton and a 210T water-resistant polyester exterior, and states a design range of 41 to 59F. Zippers on both sides let it work as one extra-large bag or two single bags.\n\nIt is the one of the pair that prints a temperature range, which gives you something to plan against. The listing says it compresses tightly for packing and puffs up when in use.\n\nA solid fit for couples camping in mild spring and fall weather. The flannel feels soft against skin.",
    "specs": [
      "41 to 59F design range",
      "210T shell, flannel lining",
      "Splits into two singles"
    ],
    "pros": [
      "Temperature range is printed",
      "Water-resistant shell",
      "Splits into two single bags",
      "Compresses for packing"
    ],
    "cons": [
      "Range starts at 41F",
      "Size is not printed"
    ],
    "bestFor": "Mild-weather couples",
    "take": "The double with a printed 41 to 59F range and a soft flannel lining.",
    "catch": "The range starts at 41F, and the listing prints no size."
  }
];

export const howWeEvaluated = [
  {
    "title": "Size for two",
    "description": "We looked for printed dimensions and queen-size claims."
  },
  {
    "title": "Convertibility",
    "description": "We compared how each bag splits or opens."
  },
  {
    "title": "Temperature data",
    "description": "We checked which listing prints a range."
  },
  {
    "title": "Ventilation",
    "description": "We looked at vents and zipper layouts."
  },
  {
    "title": "Care",
    "description": "We noted washing instructions."
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
          "Flexibility and blankets",
          "ETGLCOZY XL Flannel",
          "Converts to two bags or blankets"
        ],
        [
          "A printed temperature range",
          "AGEMORE Flannel Double",
          "41 to 59F design range"
        ],
        [
          "Foot venting",
          "ETGLCOZY XL Flannel",
          "Bottom vent zipper"
        ],
        [
          "Soft flannel and splitting",
          "AGEMORE Flannel Double",
          "Brushed flannel, splits in two"
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
          "ETGLCOZY XL Flannel"
        ],
        [
          "$60 to $70",
          "AGEMORE Flannel Double"
        ]
      ]
    }
  },
  {
    "subheading": "Draft Tube vs Printed Range",
    "cards": [
      {
        "label": "Draft tube",
        "text": "The ETGLCOZY XL Flannel names a Thermolock draft tube and a bottom vent."
      },
      {
        "label": "Printed range",
        "text": "The AGEMORE Flannel Double names a 41 to 59F range instead."
      }
    ],
    "note": "Choose the ETGLCOZY XL Flannel for construction details and the AGEMORE Flannel Double for the stated range."
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
          "ETGLCOZY XL Flannel"
        ],
        [
          "A little more for the range",
          "AGEMORE Flannel Double"
        ]
      ]
    }
  },
  {
    "subheading": "Car Camping Couples Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Printed dimensions, a vent and a layout that splits."
      },
      {
        "label": "In this comparison",
        "text": "The ETGLCOZY XL Flannel lists a vent and converts to blankets, and the AGEMORE Flannel Double splits into two bags."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the AGEMORE Flannel Double if you want a temperature range printed on the listing."
      },
      {
        "label": "Save if",
        "text": "Save with the ETGLCOZY XL Flannel, the cheaper and more flexible bag."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rectangular for two",
    "explanation": "A flat-cut double has no taper, so both sleepers get the same room. It is warm enough in mild weather and roomy in all seasons. Check the product photos for the cut."
  },
  {
    "criterion": "Convertible layouts",
    "explanation": "A double that converts into two singles or two blankets adds value. Dual zippers allow both. Check how the listing describes the layout."
  },
  {
    "criterion": "Temperature honesty",
    "explanation": "A listing with no range gives you nothing to plan around. A printed 41 to 59F range tells you where it ends. Treat unstated bags as warm-weather only."
  },
  {
    "criterion": "Ventilation",
    "explanation": "A bottom zipper lets one sleeper vent a foot without opening the whole bag. That helps couples with different needs. Look for it on the listing."
  },
  {
    "criterion": "Pad width",
    "explanation": "Two sleepers need a pad as wide as the bag, or the middle gets cold. Match pad width to bag width. Check before you buy."
  }
];

export const faq = [
  {
    "q": "Is a double bag warm enough?",
    "a": "For mild weather, yes. The AGEMORE Flannel Double prints 41 to 59F. Below that, add blankets."
  },
  {
    "q": "What mistake do couples make with doubles?",
    "a": "They skip the pad. Two sleepers need a wide pad. A gap in the middle feels cold."
  },
  {
    "q": "Is the AGEMORE worth over the ETGLCOZY?",
    "a": "If you want a printed range, yes. The ETGLCOZY XL Flannel costs less and has more features. Pick by what matters."
  },
  {
    "q": "How do I convert a double into singles?",
    "a": "Unzip the shared edge and zip each half. Test it at home. The ETGLCOZY XL Flannel and AGEMORE Flannel Double both list this."
  },
  {
    "q": "How do I wash a double?",
    "a": "Use a large washer on gentle. Dry on low. Check the tags first."
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
