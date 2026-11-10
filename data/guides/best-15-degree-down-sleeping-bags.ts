export const guideSlug = "best-15-degree-down-sleeping-bags";
export const guideTitle = "2 Best 15 Degree Down Sleeping Bags in 2026";
export const metaTitle = "Best 15 Degree Down Sleeping Bags in 2026";
export const metaDescription = "Two premium down bags for 15F nights: the NEMO Disco 15 with spoon shape and Thermo Gill vents, and the zipperless Sierra Designs Cloud 20.";
export const mainKeyword = "best 15 degree down sleeping bags";
export const introParagraphs = [
  "Only two down bags on Amazon sit squarely at 15F, and both come from outdoor brands that print real specifications. The NEMO Disco carries a 15F label in its title, and the Sierra Designs Cloud 20 lists an ISO limit rating of 15F.",
  "Because the shortlist is small, this guide is less a ranking than a decision between two very different designs: a roomy spoon-shaped bag with vents, and a zipperless ultralight quilt-style mummy."
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
    "id": "best-15-degree-down-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Sierra Designs Cloud 20 Degree Down Sleeping Bag",
    "price": "$249.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31F2Ik1MEJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GMSBHQ8S?tag=rvgearlab-20",
    "description": "Sierra Designs fills the Cloud 20 with 16.4 oz of 800 fill power DriDown inside a 15D nylon ripstop shell, and it weighs 1 lb 13.3 oz on the trail. The listing gives an ISO comfort rating of 26F and an ISO limit of 15F.\n\nIt is the lighter of the two and the only pick that prints standard ISO numbers, so the 15F figure is a tested limit rather than a label. The oversized integrated comforter and rear pad sleeve suit side sleepers and restless sleepers.\n\nA fit for backpackers who want real ultralight performance near 15F. The zipperless design rewards a short learning curve.",
    "specs": [
      "800 fill DriDown, 16.4 oz",
      "ISO comfort 26F, limit 15F",
      "Trail weight 1 lb 13.3 oz"
    ],
    "pros": [
      "Prints ISO comfort and limit ratings",
      "800 fill DriDown handles damp air",
      "Pad sleeve keeps bag on mat",
      "Roomy integrated comforter"
    ],
    "cons": [
      "Zipperless design takes practice",
      "Costs less than the NEMO but still premium"
    ],
    "bestFor": "Ultralight backpackers",
    "take": "The lightest, best-documented 15F down bag, with ISO ratings on the listing.",
    "catch": "The zipperless layout can feel odd at first, and ISO comfort sits at 26F, so the bag is a 15F limit bag."
  },
  {
    "id": "best-15-degree-down-sleeping-bags-2",
    "rank": 2,
    "badge": "Best for Comfort",
    "name": "NEMO Equipment Disco Down Sleeping Bag",
    "price": "$329.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oUpv2w2cL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FY3WF7SJ?tag=rvgearlab-20",
    "description": "NEMO's Disco 15 is a men's regular wide down bag filled with 650 fill power hydrophobic, PFAS-free, RDS-certified down. Its spoon cut gives the elbows and knees extra space, and Thermo Gill vents join a Blanket Fold draft collar.\n\nAgainst the Sierra Designs Cloud 20, it favors roominess and venting over minimum weight. The vents and multistage zipper widen the comfort range, so it handles warm and cold nights from one bag.\n\nPick it for side sleepers and restless sleepers who find mummy bags confining. It is the priciest option here.",
    "specs": [
      "650 fill RDS down, spoon shape",
      "Thermo Gill vents",
      "Blanket Fold draft collar"
    ],
    "pros": [
      "Spoon shape for elbows and knees",
      "Vents widen the comfort range",
      "Oversized draft collar blocks cold",
      "Hydrophobic, RDS-certified down"
    ],
    "cons": [
      "Priciest pick here",
      "No weight or ISO figures printed"
    ],
    "bestFor": "Side sleepers who want room",
    "take": "A roomy spoon-shaped down bag with vents and a plush collar.",
    "catch": "The listing prints no weight and no ISO ratings, and this is the pricier of the two."
  }
];

export const howWeEvaluated = [
  {
    "title": "Rating clarity",
    "description": "We checked whether each listing prints ISO or EN numbers or only a label."
  },
  {
    "title": "Down quality",
    "description": "We compared fill power, treatment and certification."
  },
  {
    "title": "Shape and room",
    "description": "We weighed mummy against spoon shape for side sleepers."
  },
  {
    "title": "Weight",
    "description": "We noted any printed trail weight."
  },
  {
    "title": "Vent and draft features",
    "description": "We looked at vents, zippers and collars."
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
    "subheading": "By Sleeper Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Ultralight backpacker",
          "Sierra Designs Cloud 20",
          "1 lb 13.3 oz trail weight"
        ],
        [
          "Side sleeper wanting room",
          "NEMO Disco 15",
          "Spoon shape and wide cut"
        ],
        [
          "Wants printed ISO ratings",
          "Sierra Designs Cloud 20",
          "ISO comfort 26F, limit 15F"
        ],
        [
          "Warm sleeper who needs venting",
          "NEMO Disco 15",
          "Thermo Gill vents"
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
          "$240 to $250",
          "Sierra Designs Cloud 20"
        ],
        [
          "$320 to $330",
          "NEMO Disco 15"
        ]
      ]
    }
  },
  {
    "subheading": "Zipperless Quilt Style vs Spoon-Shape Mummy",
    "cards": [
      {
        "label": "Zipperless",
        "text": "The Sierra Designs Cloud 20 has no main zipper, saving weight and drafts."
      },
      {
        "label": "Spoon shape",
        "text": "The NEMO Disco 15 adds elbow and knee room plus vents."
      }
    ],
    "note": "Choose the Sierra Designs Cloud 20 for weight and the NEMO Disco 15 for roominess."
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
          "Lower cost of the two",
          "Sierra Designs Cloud 20"
        ],
        [
          "Higher cost, roomier",
          "NEMO Disco 15"
        ]
      ]
    }
  },
  {
    "subheading": "15F Backpacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed ISO limit near 15F and a trail weight."
      },
      {
        "label": "In this comparison",
        "text": "The Sierra Designs Cloud 20 prints an ISO limit of 15F and a trail weight of 1 lb 13.3 oz."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the NEMO Disco 15 if you sleep on your side and want the vents."
      },
      {
        "label": "Save if",
        "text": "Save with the Sierra Designs Cloud 20, which costs less and weighs less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "ISO comfort vs limit",
    "explanation": "ISO testing reports a comfort rating and a lower limit. A 15F limit is usually 10 degrees colder than comfort. Choose by comfort for sleeping well and limit for emergencies."
  },
  {
    "criterion": "Fill power and treatment",
    "explanation": "Higher fill power means more loft per ounce, and treated down resists damp air. The Sierra uses 800 fill DriDown and the NEMO uses 650 fill hydrophobic down. Check the number on the listing."
  },
  {
    "criterion": "Spoon shape vs mummy",
    "explanation": "A spoon shape adds room for knees and elbows, which helps side sleepers. A mummy is lighter and holds heat better. Read the cut description in the listing."
  },
  {
    "criterion": "Zipperless vs full zipper",
    "explanation": "A zipperless bag saves weight and seals well but takes practice. A full zipper with vents gives temperature control. Check how the listing describes entry and exit."
  },
  {
    "criterion": "Sizing",
    "explanation": "Down bags come in regular, long and wide cuts. A wrong length leaves cold spots at the feet. Match your height to the listed fit."
  }
];

export const faq = [
  {
    "q": "Is a 15F down bag warm enough for winter?",
    "a": "It suits cold autumn and mild winter nights with a pad. Comfort sits warmer than the limit. For hard winter, choose a colder rating."
  },
  {
    "q": "What mistake do buyers make with ratings?",
    "a": "They treat the limit as comfort. Use the comfort figure instead. Add layers."
  },
  {
    "q": "Is the NEMO worth the extra cost?",
    "a": "If you want space and vents, yes. For minimum weight, the Sierra is better. Match your sleeping style."
  },
  {
    "q": "How do I enter a zipperless bag?",
    "a": "Slide in feet first and pull the comforter over you. Practice at home. Adjust the pad sleeve."
  },
  {
    "q": "How do I care for these bags?",
    "a": "Wash with a down-safe cleaner on gentle cycles and dry with tennis balls. Store loose. Avoid fabric softener."
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
