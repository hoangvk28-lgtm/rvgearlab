export const guideSlug = "best-30-degree-down-sleeping-bags";
export const guideTitle = "3 Best 30 Degree Down Sleeping Bags in 2026";
export const metaTitle = "Best 30 Degree Down Sleeping Bags in 2026";
export const metaDescription = "Three 30F down bags: NEMO Disco 30, Kelty Galactic Down 30 and Naturehike Snowbird, compared on fill, price and ISO limits.";
export const mainKeyword = "best 30 degree down sleeping bags";
export const introParagraphs = [
  "Down is the standard fill for a 30F bag because it packs small and stays light for the warmth. Three listings fit: the premium NEMO Disco 30, the mid-priced Kelty Galactic Down 30, and the value-priced Naturehike Snowbird.",
  "We compared them on stated fill power, certifications and any rating numbers on the listing. The three represent a clear price ladder, which makes the choice mostly about how much you want to spend."
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
    "id": "best-30-degree-down-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Kelty Galactic Down 30 Degree Sleeping Bag",
    "price": "$186.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KUCskCT3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B096SYGLMF?tag=rvgearlab-20",
    "description": "Kelty fills the Galactic with 21 oz of 550 fill power RDS-traceable down and rates it 30 degrees. The listing gives a weight of 2 lb 14 oz, a stuffed size of 15 x 8 inches, a fit for sleepers to 6 ft and a stuff sack.\n\nIt sits between the NEMO and the Naturehike on price and gives printed weight, fill weight and packed size that neither of the others lists. Two-way zippers vent the feet, and two bags can zip together.\n\nA well-rounded pick for backpackers who want a trusted brand and clear specs. PFC-free fabrics are a plus.",
    "specs": [
      "550FP RDS down, 21 oz",
      "2 lb 14 oz, packs small",
      "Zips together for two"
    ],
    "pros": [
      "Prints weight, fill and packed size",
      "RDS-traceable down",
      "Two-way zippers vent the feet",
      "Zips to a second bag"
    ],
    "cons": [
      "Shape is not named",
      "Fits sleepers up to 6 ft"
    ],
    "bestFor": "All-round backpackers",
    "take": "A mid-priced 30F down bag with the clearest printed specs.",
    "catch": "It fits only to 6 ft, and the listing does not name the shape."
  },
  {
    "id": "best-30-degree-down-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Budget Pick",
    "name": "Naturehike 0 Degree RDS Down Mummy Sleeping Bag for Adults",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31bPw0GKabL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJ35S8KJ?tag=rvgearlab-20",
    "description": "Naturehike offers a 650 fill power RDS and IDS certified down mummy in three models, SP400, SP700 and SP1000. This listing prints an ISO comfort rating of 39F and a limit rating of 30F, and the comfort scale across models runs from about 38.84F to 12.55F.\n\nIt costs the least here and offers 650 fill power, which beats the Kelty's 550. The SP400 model lacks the neck collar and wind strip that the SP700 and SP1000 add, so choose the model with the warmth you need.\n\nChoose it for budget-minded backpackers who value certified down and ISO figures. Match the model to the warmth you need.",
    "specs": [
      "650FP RDS and IDS certified down",
      "ISO comfort 39F, limit 30F",
      "Models SP400, SP700, SP1000"
    ],
    "pros": [
      "More fill power than the Kelty",
      "Lowest price here",
      "Prints ISO comfort and limit",
      "YKK two-way zipper"
    ],
    "cons": [
      "The SP400 lacks a collar and wind strip",
      "Comfort is 39F, not 30F"
    ],
    "bestFor": "Budget backpackers",
    "take": "A certified 650FP down bag with ISO figures at the lowest cost.",
    "catch": "The 30F figure is a limit, with comfort at 39F, so plan on a warmer minimum."
  },
  {
    "id": "best-30-degree-down-sleeping-bags-3",
    "rank": 3,
    "badge": "Best for Comfort",
    "name": "NEMO Equipment Disco Down Sleeping Bag",
    "price": "$299.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41paZr1Jh5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FY3TF2YR?tag=rvgearlab-20",
    "description": "NEMO's Disco 30 is a men's regular wide down bag filled with 650 fill power hydrophobic, PFAS-free, RDS-certified down. Its spoon shape adds room at the elbows and knees, Thermo Gill vents extend the comfort range and a Blanket Fold collar blocks drafts.\n\nIt is the most comfort-oriented pick, and the vents make it work across a wider range than the Kelty or Naturehike. The roomy cut suits side sleepers.\n\nChoose it for sleepers who find mummy bags tight and who want a bag that adapts. Open the vents on warmer evenings.",
    "specs": [
      "650 fill RDS down, spoon shape",
      "Thermo Gill vents",
      "Blanket Fold draft collar"
    ],
    "pros": [
      "Spoon shape for elbows and knees",
      "Vents widen the comfort range",
      "Oversized draft collar",
      "Hydrophobic, PFAS-free down"
    ],
    "cons": [
      "Highest price of the three",
      "No weight or ISO figures printed"
    ],
    "bestFor": "Side sleepers",
    "take": "A roomy, vented 30F down bag with a plush collar.",
    "catch": "It is the priciest pick, and the listing prints no weight or ISO figures."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fill and certification",
    "description": "We compared fill power, RDS or IDS certification and water treatment."
  },
  {
    "title": "Rating numbers",
    "description": "We looked for ISO or EN comfort and limit figures."
  },
  {
    "title": "Weight and pack",
    "description": "We noted printed weight and packed size."
  },
  {
    "title": "Shape",
    "description": "We compared mummy, spoon and cut."
  },
  {
    "title": "Price ladder",
    "description": "We placed the three on a price ladder."
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
          "Clear specs, trusted brand",
          "Kelty Galactic Down 30",
          "Weight, fill and size printed"
        ],
        [
          "Lowest cost for certified down",
          "Naturehike Snowbird 650FP",
          "Lowest price, 650FP"
        ],
        [
          "Side sleeper wants room",
          "NEMO Disco 30",
          "Spoon shape"
        ],
        [
          "Wants ISO figures",
          "Naturehike Snowbird 650FP",
          "ISO comfort 39F, limit 30F"
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
          "Naturehike Snowbird 650FP"
        ],
        [
          "$180 to $190",
          "Kelty Galactic Down 30"
        ],
        [
          "$290 to $300",
          "NEMO Disco 30"
        ]
      ]
    }
  },
  {
    "subheading": "Premium Brand vs Value Down",
    "cards": [
      {
        "label": "Premium",
        "text": "The NEMO Disco 30 and Kelty Galactic Down 30 come from established outdoor brands with detailed features."
      },
      {
        "label": "Value",
        "text": "The Naturehike Snowbird 650FP costs far less and prints certified down and ISO ratings."
      }
    ],
    "note": "Choose the Kelty Galactic Down 30 as the default and the Naturehike Snowbird 650FP for the lowest cost."
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
          "Naturehike Snowbird 650FP"
        ],
        [
          "Mid price",
          "Kelty Galactic Down 30"
        ],
        [
          "Highest price",
          "NEMO Disco 30"
        ]
      ]
    }
  },
  {
    "subheading": "30F Down Backpacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed weight, a fill power and a limit rating."
      },
      {
        "label": "In this comparison",
        "text": "The Kelty Galactic Down 30 prints 2 lb 14 oz and 550FP, while the Naturehike Snowbird 650FP prints a limit of 30F."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the NEMO Disco 30 if you sleep on your side and want venting."
      },
      {
        "label": "Save if",
        "text": "Save with the Naturehike Snowbird 650FP for certified down at the lowest cost."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Comfort vs limit at 30F",
    "explanation": "A 30F label is often the limit, with comfort 10 to 15 degrees warmer. The Naturehike prints both numbers, 39F and 30F. Use comfort to plan, and limit for emergencies."
  },
  {
    "criterion": "Fill power",
    "explanation": "Higher fill power gives more loft per ounce. A 650FP bag can feel warmer than a 550FP bag of the same weight. Compare fill power and fill weight together."
  },
  {
    "criterion": "Responsible sourcing",
    "explanation": "RDS and IDS certifications trace down to farms with welfare standards. They do not affect warmth. Look for them if sourcing matters to you."
  },
  {
    "criterion": "Cut and room",
    "explanation": "A mummy saves weight and a spoon shape gives knee and elbow room. Side sleepers often prefer the spoon. Read the cut description."
  },
  {
    "criterion": "Model options",
    "explanation": "Some brands sell multiple models under one title. Models can differ by more than 20 degrees in comfort. Check which model your price and rating belong to, so the warmth you expect matches the bag you receive."
  }
];

export const faq = [
  {
    "q": "Is 30F down enough for fall camping?",
    "a": "For early and mid fall, yes with a pad. For late fall, choose a colder bag or add a liner. Comfort runs warmer than the label."
  },
  {
    "q": "What mistake do buyers make with down bags?",
    "a": "They compress them in storage. The loft then flattens and warmth drops. Store them loose."
  },
  {
    "q": "Is the NEMO worth the extra cost?",
    "a": "If you want room and vents, yes. For minimum cost and clear specs, the Kelty or Naturehike suffice."
  },
  {
    "q": "How do I keep down dry?",
    "a": "Use a dry bag in the pack and avoid sleeping against wet tent walls. Dry in the sun if damp."
  },
  {
    "q": "How do I wash a down bag?",
    "a": "Use a down-safe cleaner, a front-loading machine and low heat. Add clean tennis balls when drying."
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
