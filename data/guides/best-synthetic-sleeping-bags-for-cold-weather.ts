export const guideSlug = "best-synthetic-sleeping-bags-for-cold-weather";
export const guideTitle = "2 Best Synthetic Sleeping Bags For Cold Weather in 2026";
export const metaTitle = "Best Synthetic Sleeping Bags For Cold Weather";
export const metaDescription = "Best synthetic sleeping bags for cold weather: a -30 degree expedition mummy and a roomy connectable bag compared, with weight and rating tradeoffs.";
export const mainKeyword = "best synthetic sleeping bags for cold weather";
export const introParagraphs = [
  "Cold weather is where synthetic fill earns its keep, because frost and breath moisture do less harm to it than to down. Only two listings fit this need, and they sit at opposite ends: a heavy expedition mummy and a roomy bag with a comfort figure of 30F.",
  "Read the Browning as the true cold-weather pick and the WKFAMOUT as a cool-night bag. We kept both because they serve different buyers, and we say so plainly where a listing claims more than its details support."
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
    "id": "best-synthetic-sleeping-bags-for-cold-weather-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Browning Camping Denali -30° Mummy Sleeping Bag",
    "price": "$147.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31HdmVIMi0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09QDQGHDM?tag=rvgearlab-20",
    "description": "The Browning Denali is a mummy titled -30 degrees with TechLoft Silver synthetic fill in a two-layer offset build. It carries 122 oz of fill, weighs 9 lb 9 oz in total and measures 86 by 38 inches, with a 210T nylon ripstop shell.\n\nNo other bag in this guide approaches its cold margin, and the chest baffle helps stop heat from escaping at the zipper. Against the WKFAMOUT it is built for winter, where the WKFAMOUT is built for space.\n\nIt suits winter campers who haul gear by sled or park beside camp. The internal mesh pocket holds small items overnight.",
    "specs": [
      "-30 degree titled mummy",
      "TechLoft Silver synthetic fill",
      "9 lb 9 oz, 122 oz fill"
    ],
    "pros": [
      "Coldest label in this list",
      "Synthetic fill handles frost and damp",
      "Two-layer offset build limits cold spots",
      "Roomy 86 by 38 inch cut"
    ],
    "cons": [
      "Very heavy for carrying on foot",
      "Bulky for a backpack"
    ],
    "bestFor": "Winter camps with a sled or a car",
    "take": "The coldest label in the guide, for trips where weight is not the limit.",
    "catch": "At 9 lb 9 oz it is a base-camp bag, and a long carry will punish your shoulders."
  },
  {
    "id": "best-synthetic-sleeping-bags-for-cold-weather-2",
    "rank": 2,
    "badge": "Best Roomy Option",
    "name": "WKFAMOUT 0 Degree Sleeping Bags Waterproof for Adults",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/417NnOhOHzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GHXVMR19?tag=rvgearlab-20",
    "description": "The WKFAMOUT opens to 90 by 39 inches for campers up to 6 ft 7 in. Its quilted dual-layer synthetic fill is machine washable, and the page states a 30F comfort rating.\n\nCompared with the Browning, it is far lighter to carry and cheaper, and it can zip to a second bag for couples. It is the better fit for chilly rather than freezing nights.\n\nIt suits big and tall campers and couples who camp from a vehicle in fall. The wide cut leaves room for layers.",
    "specs": [
      "90 x 39 in, comfort 30F",
      "Zips to a double bag",
      "Compression sack with straps"
    ],
    "pros": [
      "Very roomy 90 x 39 inch cut",
      "Zips together with a second bag",
      "Machine washable quilted build",
      "Compression sack included"
    ],
    "cons": [
      "Title says 0 degree, bullet says 30F",
      "Bulkier than a mummy"
    ],
    "bestFor": "Couples and big campers, cool nights",
    "take": "A wide, washable bag that pairs with a second one.",
    "catch": "The title says 0 degree while the listing states 30F comfort, so trust the 30F."
  }
];

export const howWeEvaluated = [
  {
    "title": "Cold-weather label",
    "description": "We compared the degree figures and noted where the title and the details disagree."
  },
  {
    "title": "Fill and weight",
    "description": "We looked at fill type, fill weight and total weight where printed."
  },
  {
    "title": "Moisture handling",
    "description": "We considered how each synthetic build copes with frost and condensation."
  },
  {
    "title": "Fit and room",
    "description": "We compared cut, length and the room for layers."
  },
  {
    "title": "Use case",
    "description": "We matched each bag to sled, base-camp or vehicle camping."
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
    "subheading": "By Winter Severity",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Deep winter, sled camping",
          "Browning Denali -30",
          "-30 degree title with 122 oz of fill"
        ],
        [
          "Cool autumn nights from the car",
          "WKFAMOUT Big and Tall",
          "30F comfort figure at lower weight"
        ],
        [
          "Couples zipping bags together",
          "WKFAMOUT Big and Tall",
          "Side zippers join two bags"
        ],
        [
          "Wet snow and frost",
          "Browning Denali -30",
          "TechLoft Silver synthetic with a chest baffle"
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
          "WKFAMOUT Big and Tall"
        ],
        [
          "$140 to $150",
          "Browning Denali -30"
        ]
      ]
    }
  },
  {
    "subheading": "Mummy vs Wide Cut",
    "cards": [
      {
        "label": "Mummy",
        "text": "The Browning Denali -30 tapers to hold heat and stays warm in frost. It is heavy and costs more."
      },
      {
        "label": "Wide Cut",
        "text": "The WKFAMOUT Big and Tall gives room for layers and joins a second bag. Its comfort figure is milder."
      }
    ],
    "note": "Choose the Browning Denali -30 for true winter, and the WKFAMOUT Big and Tall for chilly nights with company."
  },
  {
    "subheading": "By Carry Method",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Pulled on a sled",
          "Browning Denali -30"
        ],
        [
          "Loaded in a car trunk",
          "WKFAMOUT Big and Tall"
        ],
        [
          "Shared by two people",
          "WKFAMOUT Big and Tall"
        ]
      ]
    }
  },
  {
    "subheading": "Deep-Cold Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a titled temperature, a named synthetic fill and a stated fill weight."
      },
      {
        "label": "In this comparison",
        "text": "The Browning Denali -30 names TechLoft Silver fill at 122 oz, and the WKFAMOUT Big and Tall prints a 30F comfort figure."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Browning Denali -30 if you camp in deep winter and can haul 9 lb 9 oz."
      },
      {
        "label": "Save if",
        "text": "Save with the WKFAMOUT Big and Tall if your nights stay in the 30s and you want a washable bag."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Label against comfort",
    "explanation": "A -30 degree title and a 30F comfort rating describe very different nights. Read the detail lines, because titles often quote the most flattering number. Plan around the comfort figure and add a margin."
  },
  {
    "criterion": "Weight of cold",
    "explanation": "The Browning's 9 lb 9 oz is the cost of its rating. Warmer bags weigh more because they hold more fill. Decide whether you carry the bag or drag it."
  },
  {
    "criterion": "Synthetic in frost",
    "explanation": "Breath moisture freezes in a bag in sub-freezing nights. Synthetic fill tolerates that better than down, though no bag shrugs it off completely. Air the bag out each morning."
  },
  {
    "criterion": "Pad matters more",
    "explanation": "Cold ground pulls heat from the underside, where bag fill is crushed. A pad with a high stated R-value does more than extra fill. Check the pad before you upgrade the bag."
  },
  {
    "criterion": "Room for layers",
    "explanation": "A cold sleeper wears insulation inside the bag, so a snug mummy can compress itself. The Browning's 38 inch width and the WKFAMOUT's 39 inch width give space. Check the width before you pick."
  }
];

export const faq = [
  {
    "q": "Is a synthetic bag good for the cold?",
    "a": "Yes, because it keeps insulating when damp, and frost is a form of damp. It is heavier than down for the same warmth."
  },
  {
    "q": "What mistake do buyers make with the WKFAMOUT?",
    "a": "They trust the title's 0 degree claim over the 30F comfort figure in the details. Plan for 30F."
  },
  {
    "q": "Is the Browning Denali worth it over the WKFAMOUT?",
    "a": "Only if you sleep in the deep cold. For fall and early winter from a car, the WKFAMOUT is easier to live with."
  },
  {
    "q": "How do I use a bag this heavy?",
    "a": "Keep it on a sled or in a vehicle, and compress it only for transport. Air it daily to dry out breath moisture."
  },
  {
    "q": "Can I zip two bags together?",
    "a": "The WKFAMOUT lists side zippers that join with a second bag. Match zipper sides before you buy a pair."
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
