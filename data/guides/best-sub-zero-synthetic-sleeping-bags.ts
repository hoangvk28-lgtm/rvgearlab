export const guideSlug = "best-sub-zero-synthetic-sleeping-bags";
export const guideTitle = "4 Best Sub Zero Synthetic Sleeping Bags in 2026";
export const metaTitle = "Best Sub Zero Synthetic Sleeping Bags in 2026";
export const metaDescription = "Four synthetic sleeping bags for the coldest nights: Browning's -30F Denali and -20F Discover, plus 0F-class Big Agnes Echo Park and TETON Celsius bags.";
export const mainKeyword = "best sub zero synthetic sleeping bags";
export const introParagraphs = [
  "Synthetic fill matters most when frost and condensation are part of the trip, because it keeps insulating when it picks up moisture. Only two bags on Amazon pair a synthetic fill with a true sub-zero label, so this guide adds two 0F-class bags as nearest fits and says so.",
  "The Browning pair carry the coldest labels and the most fill. The Big Agnes Echo Park and TETON Celsius trade depth of cold for comfort features, so a buyer can choose between a deep-freeze bag and a roomy 0F one."
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
    "id": "best-sub-zero-synthetic-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Browning Camping Denali -30° Mummy Sleeping Bag",
    "price": "$147.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31HdmVIMi0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09QDQGHDM?tag=rvgearlab-amz-20",
    "description": "Browning stuffs the Denali with 122 oz of TechLoft Silver synthetic fibers laid in two offset layers, topped with a 210T nylon diamond ripstop shell. The bag measures 86 x 38 inches, weighs 9 lb 9 oz and includes an integrated chest baffle and full-length zipper baffle.\n\nIts -30F title is the lowest in this group, and the offset layer design is aimed at eliminating cold spots that a single-layer synthetic like the Browning Discover -20 can leave. It is far bigger and heavier than the TETON Celsius Regular.\n\nA good fit for sub-zero campers who sled-haul or park at camp. The internal mesh pocket keeps small items from freezing.",
    "specs": [
      "-30F label, synthetic fill",
      "122 oz fill, 9 lb 9 oz",
      "Offset layers, chest baffle"
    ],
    "pros": [
      "Coldest label of the four",
      "Synthetic fill tolerates frost",
      "Chest and zipper baffles",
      "Mesh pocket for small items"
    ],
    "cons": [
      "Very heavy for carrying on foot",
      "Bulky for a backpack"
    ],
    "bestFor": "Deep cold with a vehicle or sled",
    "take": "The lowest label here and the most synthetic fill.",
    "catch": "At 9 lb 9 oz it is a base-camp bag, and bulky for a pack."
  },
  {
    "id": "best-sub-zero-synthetic-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Value Sub-Zero",
    "name": "Browning Discover -20° Sleeping Bag",
    "price": "$119.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/314XJA7pIKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGDVC5MN?tag=rvgearlab-amz-20",
    "description": "Browning rates the Discover to -20F and fills it with TechLoft Silver synthetic insulation in a tapered mummy. The listing names a draft collar, a chest baffle, a full-length zipper baffle and a water-resistant polyester shell, plus a stuff sack.\n\nIt sells for far less than the Browning Denali -30 and the Big Agnes Echo Park 0, and it still carries a sub-zero label. The listing leaves out weight and size, which the Denali prints.\n\nA smart choice for winter campers who want sub-zero synthetic insulation without the top price. A thick pad is a must.",
    "specs": [
      "-20F rated tapered mummy",
      "TechLoft Silver synthetic",
      "Collar and zipper baffles"
    ],
    "pros": [
      "Sub-zero label at a lower price",
      "Synthetic fill tolerates frost",
      "Draft collar and baffles",
      "Stuff sack included"
    ],
    "cons": [
      "No weight or size printed",
      "Label only, no tested rating"
    ],
    "bestFor": "Budget sub-zero synthetic",
    "take": "A sub-zero synthetic mummy at the lowest price in this group.",
    "catch": "Without a printed weight or size, confirm both before a long carry."
  },
  {
    "id": "best-sub-zero-synthetic-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Comfort Features",
    "name": "Big Agnes Echo Park",
    "price": "$249.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31GcKtOHxLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DSPG728B?tag=rvgearlab-amz-20",
    "description": "Big Agnes sizes the Echo Park for larger campers who want room, with FireLine Max Eco recycled polyester insulation, a Padlok system and a Cinch Pad Sleeve. An oversized draft collar, a zipper draft tube, double zippers and hand pockets round it out.\n\nIt runs a 0 degree label, a notch milder than the Browning bags, and the Park Series bags mate together. The Padlok sleeve keeps you from sliding off your pad, which the Browning Denali -30 does not offer.\n\nBest for larger campers and couples who want a pad-attached bed for base camp. It costs the most here.",
    "specs": [
      "0 degree, FireLine Max Eco",
      "Padlok pad sleeve",
      "Oversized draft collar"
    ],
    "pros": [
      "Pad sleeve stops sliding",
      "Recycled polyester insulation",
      "Double zippers mate with other bags",
      "Hand pockets and stash pocket"
    ],
    "cons": [
      "Highest price in this list",
      "Weight is not stated"
    ],
    "bestFor": "Roomy base-camp comfort",
    "take": "Pad-attached, roomy, recycled-fill bag that also mates with a partner's.",
    "catch": "The listing prints no weight, so assume a car-camping bag."
  },
  {
    "id": "best-sub-zero-synthetic-sleeping-bags-4",
    "rank": 4,
    "badge": "Best Budget 0F Class",
    "name": "Teton Celsius Regular",
    "price": "$84.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31bXUQJbSAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N7ZACIW?tag=rvgearlab-amz-20",
    "description": "The Celsius Regular from TETON carries a 0 degree class label and layers its fiber fill in two sheets. Draft tubes and a flannel-style polyester lining add comfort, and the hood and stuff sack are included.\n\nIt is the lowest-cost bag with a 0 degree label, and the only one that suits both adults and kids. The listing prints no weight or comfort figure, which the Browning Denali -30 supplies.\n\nA fair pick for campers who want a cold-class label on a tight budget. Fluffing the bag and using a camp pad help it perform.",
    "specs": [
      "0 degree class, fiber fill",
      "Poly-flannel lining",
      "Draft tubes, stuff sack"
    ],
    "pros": [
      "Lowest cost with a cold label",
      "Draft tubes hold warm air",
      "Soft flannel lining",
      "Fits adults and kids"
    ],
    "cons": [
      "No weight or pack size printed",
      "Not a true sub-zero bag"
    ],
    "bestFor": "Budget 0F-class camping",
    "take": "A 0F-class bag with draft tubes and a flannel lining at the lowest price.",
    "catch": "The listing prints no weight or comfort rating, and it is not a sub-zero bag."
  }
];

export const howWeEvaluated = [
  {
    "title": "Printed labels",
    "description": "Each listing's cold-weather label was noted, with a flag for those that are only 0F-class."
  },
  {
    "title": "Fill type",
    "description": "Synthetic insulation types were compared for loft and damp behavior."
  },
  {
    "title": "Cold control",
    "description": "Baffles, collars, tubes and hoods were compared for stopping drafts."
  },
  {
    "title": "Weight and size",
    "description": "Printed weights and dimensions were compared where given."
  },
  {
    "title": "Honest scope",
    "description": "Two true sub-zero synthetics were found, so two 0F-class bags were added and described as nearest fits."
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
    "subheading": "By Cold Level",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Deep cold near -30F",
          "Browning Denali -30",
          "122 oz synthetic fill"
        ],
        [
          "Sub-zero on a budget",
          "Browning Discover -20",
          "-20F label"
        ],
        [
          "Roomy pad-attached base camp",
          "Big Agnes Echo Park 0",
          "Padlok system"
        ],
        [
          "Budget 0F class",
          "TETON Celsius Regular 0F",
          "0 degree class, lowest cost"
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
          "$80 to $120",
          "TETON Celsius Regular 0F or Browning Discover -20"
        ],
        [
          "$140 to $250",
          "Browning Denali -30 or Big Agnes Echo Park 0"
        ]
      ]
    }
  },
  {
    "subheading": "True Sub-Zero vs 0F Class",
    "cards": [
      {
        "label": "True sub-zero",
        "text": "The Browning Denali -30 and Browning Discover -20 carry labels below zero."
      },
      {
        "label": "0F class",
        "text": "The Big Agnes Echo Park 0 and TETON Celsius Regular 0F stop at a 0 degree label."
      }
    ],
    "note": "Choose the Browning Denali -30 for the deepest cold and the Big Agnes Echo Park 0 for comfort in mild winters."
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
          "TETON Celsius Regular 0F"
        ],
        [
          "Low-mid cost, sub-zero",
          "Browning Discover -20"
        ],
        [
          "Mid cost, lowest label",
          "Browning Denali -30"
        ],
        [
          "Highest cost, comfort features",
          "Big Agnes Echo Park 0"
        ]
      ]
    }
  },
  {
    "subheading": "Sub-Zero Synthetic Shoppers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A named synthetic fill, a label below zero and draft control parts like baffles."
      },
      {
        "label": "In this comparison",
        "text": "The Browning Denali -30 names TechLoft Silver synthetic with chest and zipper baffles, and the Browning Discover -20 names the same fill."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Browning Denali -30 or Big Agnes Echo Park 0 for fill volume or comfort."
      },
      {
        "label": "Save if",
        "text": "Save with the Browning Discover -20 for a sub-zero label or the TETON Celsius Regular 0F for a 0F class."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Sub-zero labels versus comfort",
    "explanation": "A -20F title is a limit for survival, not comfort, and comfort sits 20 to 30 degrees warmer. Treat these bags as 0 to 10F bags in practice. Look for the words comfort and limit."
  },
  {
    "criterion": "Synthetic fill and frost",
    "explanation": "Breath and sweat freeze inside a bag, so fill that tolerates moisture is safer. Synthetic loses less warmth when damp than down. Check that the listing names a synthetic and a fiber type."
  },
  {
    "criterion": "Layered construction",
    "explanation": "Offset or double-layer designs prevent cold spots at seams. Single-layer bags have stitch lines that run straight through the insulation. Look for offset or double-layer wording."
  },
  {
    "criterion": "Weight and bulk",
    "explanation": "Sub-zero synthetic bags weigh 6 to 10 lb and take up a big stuff sack. Decide how you travel before buying. Check printed weights."
  },
  {
    "criterion": "Pad compatibility",
    "explanation": "At sub-zero, a bag's bottom compresses and the pad does the work. A pad sleeve or a high R-value pad stops slipping and heat loss. Look for pad sleeves and plan R 5 or higher."
  }
];

export const faq = [
  {
    "q": "Is synthetic better than down for sub-zero?",
    "a": "In damp or frosty conditions, yes. Synthetic keeps working when it picks up moisture. Down is lighter if you can keep it dry."
  },
  {
    "q": "What do campers get wrong about -30F bags?",
    "a": "They plan to sleep at -30F. The label is a limit, so expect comfort near 0 to 10F. Add a pad and layers."
  },
  {
    "q": "Is the Echo Park worth it over the Browning bags?",
    "a": "If you want room and a pad sleeve, yes. The Big Agnes Echo Park 0 costs more and has a milder label."
  },
  {
    "q": "Can kids use these?",
    "a": "The TETON Celsius Regular 0F is listed for adults and kids. The others are adult-sized. Check sizes before buying."
  },
  {
    "q": "How do I keep fill lofty?",
    "a": "Store loose, not compressed. Dry after each trip. Wash only per the tag."
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
