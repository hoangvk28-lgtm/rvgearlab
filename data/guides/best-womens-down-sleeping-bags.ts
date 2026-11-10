export const guideSlug = "best-womens-down-sleeping-bags";
export const guideTitle = "2 Best Womens Down Sleeping Bags in 2026";
export const metaTitle = "Best Womens Down Sleeping Bags in 2026";
export const metaDescription = "Best women's down sleeping bags: the NEMO Disco and the Kelty Cosmic 20 Women's compared on shape, fill power, ratings and price.";
export const mainKeyword = "best womens down sleeping bags";
export const introParagraphs = [
  "Women's-specific down bags are a small field on Amazon, and two lines stand out here: the NEMO Disco and the Kelty Cosmic 20 Women's. Two synthetic women's and budget bags that showed up in the raw results were dropped, since this guide is about down.",
  "The Disco is offered in several temperature and width versions and is treated as one pick. The Kelty lists ISO figures, which makes the two easy to compare on warmth per dollar."
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
    "id": "best-womens-down-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "NEMO Equipment Disco Down Sleeping Bag",
    "price": "$299.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31GkrNruWAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DK7PW7HF?tag=rvgearlab-amz-20",
    "description": "The NEMO Disco Women's uses a spoon shape with extra room at the elbows and knees and fills it with 650 FP hydrophobic, PFAS-free, RDS-certified down. Thermo Gill vents and an oversized Blanket Fold draft collar manage warmth through a multistage zipper system.\n\nIt offers more features than the Kelty: vents that fine-tune the comfort range and a collar that blocks drafts or releases heat. It is available as a 15F Regular, a 15F Regular Wide and a 30F Regular, so you can choose rating and width.\n\nIt suits side sleepers and campers who toss and turn and want fine control over warmth. The recycled construction and RDS down suit buyers who care about sourcing.",
    "specs": [
      "650FP hydrophobic RDS down",
      "Spoon shape, Thermo Gill vents",
      "15F or 30F versions"
    ],
    "pros": [
      "Spoon shape for elbows and knees",
      "Vents fine-tune warmth",
      "Oversized draft collar",
      "RDS-certified hydrophobic down"
    ],
    "cons": [
      "Several times the Kelty price",
      "Weight not printed"
    ],
    "bestFor": "Side sleepers who want control",
    "take": "A spoon-shaped women's down bag with 650FP RDS down, Thermo Gill vents and a draft collar.",
    "catch": "It costs far more than the Kelty, and no weight is printed."
  },
  {
    "id": "best-womens-down-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Value",
    "name": "Kelty Cosmic 20 Down Mummy Sleeping Bag for Backpacking",
    "price": "$189.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31aurJ0qYNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSPJKBWR?tag=rvgearlab-amz-20",
    "description": "Kelty fills the Cosmic 20 Women's with 550 FP RDS-traceable down inside recycled nylon and polyester taffeta, finished with PFAS-free DWR. Dual-direction zippers are listed, along with an ISO limit rating of 21 degrees and an extreme rating of -11 degrees.\n\nIt costs a fraction of the NEMO and prints standardized ISO numbers, which the NEMO bullets do not. Sizes step in 6 inch increments, from Short up to Long, and the traceable down carries a tag you can scan.\n\nIt suits backpackers who want a trusted down bag with clear ratings at a moderate price. The Short and Regular fits cover petite and average women.",
    "specs": [
      "550FP RDS-traceable down",
      "ISO limit 21F, extreme -11F",
      "Three lengths offered"
    ],
    "pros": [
      "ISO limit and extreme printed",
      "Three length options",
      "PFAS-free recycled fabrics",
      "Dual-direction zippers"
    ],
    "cons": [
      "Lower fill power than the NEMO",
      "No venting system listed"
    ],
    "bestFor": "Value-minded backpackers",
    "take": "A 550FP women's down bag with ISO limit 21F and extreme -11F at a moderate price.",
    "catch": "It has lower fill power than the NEMO and fewer venting features."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fit and shape",
    "description": "We compared women's cuts, widths and lengths."
  },
  {
    "title": "Fill power and sourcing",
    "description": "We looked at fill power and RDS traceability."
  },
  {
    "title": "Rating",
    "description": "We read the ISO or brand ratings each listing gives."
  },
  {
    "title": "Ventilation",
    "description": "We noted vents, collars and zippers."
  },
  {
    "title": "Value",
    "description": "We compared price against features."
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
          "Spoon shape and venting",
          "NEMO Disco Women's",
          "Thermo Gill vents and spoon cut"
        ],
        [
          "ISO ratings on the listing",
          "Kelty Cosmic 20 Women's",
          "ISO limit 21F, extreme -11F"
        ],
        [
          "Lower price",
          "Kelty Cosmic 20 Women's",
          "Fraction of the NEMO price"
        ],
        [
          "Wide hips or shoulders",
          "NEMO Disco Women's",
          "Regular Wide version"
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
          "$180 to $190",
          "Kelty Cosmic 20 Women's"
        ],
        [
          "$290 to $300",
          "NEMO Disco Women's"
        ]
      ]
    }
  },
  {
    "subheading": "Spoon Shape vs Mummy Cut",
    "cards": [
      {
        "label": "Spoon Shape",
        "text": "The NEMO Disco Women's gives room at elbows and knees for side sleepers, with a bit more bulk."
      },
      {
        "label": "Mummy Cut",
        "text": "The Kelty Cosmic 20 Women's tapers to save weight and heat, and it is snugger."
      }
    ],
    "note": "Choose the NEMO Disco Women's for side sleeping, and the Kelty Cosmic 20 Women's for efficient warmth."
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
          "Lower price",
          "Kelty Cosmic 20 Women's"
        ],
        [
          "Higher price, premium features",
          "NEMO Disco Women's"
        ]
      ]
    }
  },
  {
    "subheading": "Side Sleepers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a spoon or roomy cut with room at the elbows and knees."
      },
      {
        "label": "In this comparison",
        "text": "The NEMO Disco Women's uses a spoon shape with room at the elbows and knees."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the NEMO Disco Women's for the spoon shape, vents and 650FP RDS down."
      },
      {
        "label": "Save if",
        "text": "Save with the Kelty Cosmic 20 Women's if you want ISO numbers at a lower price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Shape and room",
    "explanation": "A women's bag is cut with female proportions in mind. The NEMO Disco uses a spoon shape and the Kelty a mummy cut. Pick what suits your sleep position."
  },
  {
    "criterion": "Fill power",
    "explanation": "Higher fill power gives more loft per ounce. The NEMO lists 650 FP and the Kelty 550. Higher numbers pack smaller."
  },
  {
    "criterion": "ISO ratings",
    "explanation": "ISO figures give a limit and extreme from a standard test. The Kelty prints 21F and -11F. Look for them on any cold-weather bag."
  },
  {
    "criterion": "Venting",
    "explanation": "Down bags can overheat. The NEMO lists Thermo Gill vents and a Blanket Fold collar. Choose vents if you sleep warm."
  },
  {
    "criterion": "Length options",
    "explanation": "A bag that is too long wastes heat. The Kelty offers Short, Regular and Long in 6 inch steps. Match length to your height."
  }
];

export const faq = [
  {
    "q": "Do women need a women's sleeping bag?",
    "a": "Many find them a better fit, since they are shorter and shaped for hips. Compare the listed lengths and cuts."
  },
  {
    "q": "What mistake do buyers make with down bags?",
    "a": "They buy by temperature label alone. Check ISO numbers where printed."
  },
  {
    "q": "Is the NEMO worth it over the Kelty?",
    "a": "For side sleepers and warm sleepers, yes. The Kelty costs far less."
  },
  {
    "q": "How do I use the NEMO vents?",
    "a": "Open the multistage zipper to vent heat. Close it again to hold warmth."
  },
  {
    "q": "How do I wash a down bag?",
    "a": "Use a down-safe cleaner and a gentle front-loading cycle. Dry thoroughly on low heat."
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
