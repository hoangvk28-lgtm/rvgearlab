export const guideSlug = "best-sub-zero-mummy-sleeping-bags";
export const guideTitle = "5 Best Sub Zero Mummy Sleeping Bags in 2026";
export const metaTitle = "Best Sub Zero Mummy Sleeping Bags in 2026";
export const metaDescription = "Five mummy-style sleeping bags and systems for sub-zero nights, from Browning's -30F Denali to a goose down AKMAX and a military-style 4-piece sleep system.";
export const mainKeyword = "best sub zero mummy sleeping bags";
export const introParagraphs = [
  "Sub-zero camping is a different sport: the cost of a wrong bag is frostbite, not discomfort. The five options here cover synthetic mummies labelled -20F and -30F, a goose down bag rated down to -13F, a military-issue down bag and a layered 4-piece system.",
  "Printed ratings at this level are maker labels, so each pick is described with what the listing actually says about fill, weight and structure. Expect to carry a lot of weight, and plan a very warm pad."
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
    "id": "best-sub-zero-mummy-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Browning Camping Denali -30° Mummy Sleeping Bag",
    "price": "$147.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31HdmVIMi0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09QDQGHDM?tag=rvgearlab-amz-20",
    "description": "The Browning Denali wraps 122 oz of TechLoft Silver synthetic fill in a two-layer offset construction, with an integrated chest baffle, full-length zipper baffle and 210T nylon diamond ripstop shell. It measures 86 x 38 inches and weighs 9 lb 9 oz.\n\nA -30F title is the lowest label here, and the offset layers are designed to limit cold spots in a way the Browning Discover -20 does not describe. Synthetic fill keeps working through frost and damp, which down cannot promise.\n\nBest for winter campers who haul gear by sled or park beside camp. The internal mesh pocket keeps small items warm overnight.",
    "specs": [
      "-30F title, TechLoft Silver",
      "122 oz fill, 9 lb 9 oz",
      "86 x 38 inch mummy"
    ],
    "pros": [
      "Lowest label in this list",
      "Synthetic fill tolerates frost",
      "Offset layers limit cold spots",
      "Roomy 86 x 38 inch cut"
    ],
    "cons": [
      "Very heavy for carrying on foot",
      "Bulky for a backpack"
    ],
    "bestFor": "Sled and base-camp winter camping",
    "take": "The lowest label in this list, with 122 oz of synthetic fill in offset layers.",
    "catch": "At 9 lb 9 oz it is a base-camp bag, not a pack carry."
  },
  {
    "id": "best-sub-zero-mummy-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Value Sub-Zero",
    "name": "Browning Discover -20° Sleeping Bag",
    "price": "$119.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/314XJA7pIKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGDVC5MN?tag=rvgearlab-amz-20",
    "description": "The Browning Discover is rated to -20F and uses TechLoft Silver synthetic insulation in a tapered mummy shape. A draft collar, chest baffle and full-length zipper baffle seal out cold air, and the shell is water-resistant polyester with a stuff sack.\n\nIt costs less than the Browning Denali -30 and any other sub-zero pick here, with a 10 degree warmer label. The listing prints no weight or dimensions, so it is the leaner-spec option.\n\nA fit for winter campers who want a sub-zero synthetic at the lowest price. Pair it with a high R-value pad.",
    "specs": [
      "-20F rated mummy",
      "TechLoft Silver synthetic",
      "Draft collar, zipper baffle"
    ],
    "pros": [
      "Sub-zero label at a low price",
      "Synthetic fill handles damp",
      "Draft collar and zipper baffle",
      "Stuff sack included"
    ],
    "cons": [
      "No weight or size printed",
      "Label only, no ISO figure"
    ],
    "bestFor": "Budget sub-zero camping",
    "take": "The cheapest true sub-zero label in this list, with synthetic insulation.",
    "catch": "Without a printed weight or size, check the product page before a long carry."
  },
  {
    "id": "best-sub-zero-mummy-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Light Sub-Zero",
    "name": "AKMAX Down Mummy Sleeping Bag -13°F Cold Weather Camping Backpacking",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/518UdHykkUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B095BVFTJ9?tag=rvgearlab-amz-20",
    "description": "AKMAX prints a -13 to 23F range for this goose down mummy and describes a water-resistant nylon shell and a snug cut. The weight is listed at 2.37 kg, or 5.2 lb.\n\nAt 5.2 lb it is far lighter than the Browning Denali -30 or the military ECW, which makes it the practical sub-zero pick for hikers. The 23F upper end of the range is a reminder that the label is a limit.\n\nGreat for winter backpackers who want a light bag for mountaineering trips. Goose down packs smaller than synthetic.",
    "specs": [
      "-13 to 23F range",
      "Goose down, snug mummy",
      "5.2 lb, water-resistant shell"
    ],
    "pros": [
      "Lightest sub-zero pick",
      "Goose down packs small",
      "Water-resistant nylon shell",
      "Snug cut limits drafts"
    ],
    "cons": [
      "Fill power is not printed",
      "Down loses warmth when wet"
    ],
    "bestFor": "Winter backpackers and climbers",
    "take": "The lightest sub-zero pick at 5.2 lb with goose down fill.",
    "catch": "Fill power is not printed, and the 23F end of the range is the comfort figure."
  },
  {
    "id": "best-sub-zero-mummy-sleeping-bags-4",
    "rank": 4,
    "badge": "Best Surplus Down",
    "name": "Very Warm Military US Army Subzero Extreme Cold Weather ECW Down GI Sleeping Bag",
    "price": "$365.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51ez9BeGLdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B018TAEWDS?tag=rvgearlab-amz-20",
    "description": "This listing sells a military-issue extreme cold weather bag with a water-repellent poplin cotton shell and 80% down, 20% polyester fill. It runs 84 inches long, 30 inches wide at the top and 14 inches at the bottom, and weighs 8 lb.\n\nIt is the most expensive option here, and the listing stresses that bags are stored uncompressed to keep full loft. A drawcord hood and mummy shape keep warmth in, and the weight sits between the AKMAX Down Mummy -13F and the Browning Denali -30.\n\nSuited to collectors, hunters and cold-weather campers who value issue-grade construction. Check condition before buying.",
    "specs": [
      "Military ECW mummy, 80% down",
      "84 x 30 inch, 8 lb",
      "Poplin cotton shell"
    ],
    "pros": [
      "Down and polyester fill blend",
      "Drawcord hood and mummy shape",
      "Stored uncompressed for full loft",
      "Issue-grade cold weather design"
    ],
    "cons": [
      "Priciest option in this list",
      "No printed temperature rating"
    ],
    "bestFor": "Surplus and hunting camps",
    "take": "A military-style extreme cold weather down bag with an 80% down fill.",
    "catch": "At 8 lb with a cotton shell it is heavy, and the listing gives no temperature figure."
  },
  {
    "id": "best-sub-zero-mummy-sleeping-bags-5",
    "rank": 5,
    "badge": "Best Layered System",
    "name": "MT Modular Sleep System 4-Piece Tactical Sleeping Bag Set",
    "price": "$249.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fRflPpdTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FHJPJ9RX?tag=rvgearlab-amz-20",
    "description": "MT sells a four-piece sleep system with a patrol bag, an intermediate cold weather bag, a waterproof bivy cover and a compression sack. The bags use a front zip and the system layers together for sub-zero use.\n\nUnlike the single bags here, it lets you add or remove layers as temperatures change, and the vacuum compression sack with an air-release valve is a 70D TPU build that the listing says saves 66% of the space. The system fits USGI pouches and rucksacks.\n\nBest for campers who want flexibility, from a light patrol bag in fall to all three pieces in a deep freeze. It suits the user who wants one purchase to cover a whole year.",
    "specs": [
      "Patrol, intermediate, bivy, sack",
      "Front-zip redesign",
      "Vacuum compression sack"
    ],
    "pros": [
      "Layers combine for sub-zero use",
      "Use each bag separately",
      "Waterproof bivy cover included",
      "Vacuum sack saves space"
    ],
    "cons": [
      "Highest price after the ECW bag",
      "No temperature rating printed"
    ],
    "bestFor": "Flexible four-season use",
    "take": "A military-style layered system you can adapt to the night.",
    "catch": "It is four pieces, not a single mummy, and the listing prints no ratings."
  }
];

export const howWeEvaluated = [
  {
    "title": "Printed ratings",
    "description": "Each listing was read for the number it prints and whether it is a label or a tested figure."
  },
  {
    "title": "Fill type",
    "description": "Synthetic, goose down and down-polyester blends were compared for damp behavior and weight."
  },
  {
    "title": "Weight and carry",
    "description": "Printed weights were compared, since sub-zero bags run heavy."
  },
  {
    "title": "Cold-air control",
    "description": "Draft collars, baffles and hoods were compared."
  },
  {
    "title": "Honest scope",
    "description": "Fit with the keyword was weighed: the military bag and the 4-piece set are nearest fits."
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
    "subheading": "By Cold and Carry",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Deep cold near -30F, base camp",
          "Browning Denali -30",
          "122 oz synthetic fill"
        ],
        [
          "Budget sub-zero",
          "Browning Discover -20",
          "-20F label, lowest price"
        ],
        [
          "Backpacking or mountaineering",
          "AKMAX Down Mummy -13F",
          "5.2 lb goose down"
        ],
        [
          "Surplus and hunting camps",
          "Military ECW Down Bag",
          "80% down, 8 lb"
        ],
        [
          "Layered flexibility",
          "MT Modular 4-Piece System",
          "Patrol, intermediate and bivy"
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
          "$110 to $130",
          "Browning Discover -20 or AKMAX Down Mummy -13F"
        ],
        [
          "$140 to $250",
          "Browning Denali -30 or MT Modular 4-Piece System"
        ],
        [
          "$360 to $370",
          "Military ECW Down Bag"
        ]
      ]
    }
  },
  {
    "subheading": "Synthetic vs Down",
    "cards": [
      {
        "label": "Synthetic",
        "text": "The Browning Denali -30 and Browning Discover -20 keep working when frost builds up."
      },
      {
        "label": "Down",
        "text": "The AKMAX Down Mummy -13F and Military ECW Down Bag weigh less for the warmth but need dry handling."
      }
    ],
    "note": "Choose the Browning Denali -30 for damp winters and the AKMAX Down Mummy -13F when you carry it."
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
          "Browning Discover -20"
        ],
        [
          "Low-mid cost, light",
          "AKMAX Down Mummy -13F"
        ],
        [
          "Mid cost, lowest label",
          "Browning Denali -30"
        ],
        [
          "High cost, layered",
          "MT Modular 4-Piece System"
        ],
        [
          "Highest cost, surplus down",
          "Military ECW Down Bag"
        ]
      ]
    }
  },
  {
    "subheading": "Sub-Zero Shoppers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed sub-zero label, a named fill and a weight that fits how you travel."
      },
      {
        "label": "In this comparison",
        "text": "The Browning Denali -30 prints -30F and 122 oz of synthetic fill at 9 lb 9 oz, and the AKMAX Down Mummy -13F prints -13 to 23F at 5.2 lb."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Browning Denali -30 or the MT Modular 4-Piece System for the deepest cold and flexibility."
      },
      {
        "label": "Save if",
        "text": "Save with the Browning Discover -20 or AKMAX Down Mummy -13F if your lows stay above -15F."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What a sub-zero label means",
    "explanation": "A -20F or -30F title is a maker label and rarely a comfort figure. Comfort often sits 20 to 30 degrees warmer. Plan on using a sub-zero bag at 0 to 10F, not -30F."
  },
  {
    "criterion": "Synthetic versus down at sub-zero",
    "explanation": "Down is lighter but loses warmth when wet, and frost is a real hazard at low temperatures. Synthetic keeps working when damp but weighs more. Pick synthetic for damp, down for weight."
  },
  {
    "criterion": "Weight and how you travel",
    "explanation": "A 9 lb bag is fine on a sled or beside a truck and awful on a ridge. Check the weight in the listing and match it to how you travel. Subtract two pounds if you can use a down bag."
  },
  {
    "criterion": "Baffles and draft tubes",
    "explanation": "In cold, leaks along the zipper and neck cost heat faster than fill does. Chest baffles, zipper baffles and draft collars are the parts to check. Look for them in the listing."
  },
  {
    "criterion": "Pad and layering",
    "explanation": "At sub-zero temperatures, the ground steals heat through the pad. Use R 5 or higher, or stack pads. A good pad matters more than the last 10 degrees on the bag."
  }
];

export const faq = [
  {
    "q": "Can I trust a -30F label?",
    "a": "Treat it as a limit label. Real comfort is warmer. Plan on using the bag at 0 to 10F."
  },
  {
    "q": "What mistake do cold campers make?",
    "a": "They buy the lowest label and ignore the pad. A thin pad cancels the bag. Plan an R 5 pad."
  },
  {
    "q": "Is the Denali worth the extra weight?",
    "a": "If you sled-haul or car camp, yes. The Browning Denali -30 has the most fill. For carrying, the AKMAX Down Mummy -13F is lighter."
  },
  {
    "q": "How does the 4-piece system work?",
    "a": "You layer the patrol bag, intermediate bag and bivy as the temperature drops. The MT Modular 4-Piece System can also be used piece by piece. Check zipper compatibility."
  },
  {
    "q": "How do I dry a bag in the cold?",
    "a": "Air it in sunlight when you can and turn it inside out. Do not stuff it damp. Store it loose at home."
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
