export const guideSlug = "best-ultralight-down-sleeping-bags";
export const guideTitle = "2 Best Ultralight Down Sleeping Bags in 2026";
export const metaTitle = "Best Ultralight Down Sleeping Bags in 2026";
export const metaDescription = "Best ultralight down sleeping bags: a goose down bag and an 850 fill power top quilt compared on weight, fill and stated ratings, for hikers who count ounces.";
export const mainKeyword = "best ultralight down sleeping bags";
export const introParagraphs = [
  "Down is the lightest insulation per ounce, and the two listings that fit this need both lean on it. They are different kinds of product: a bag that unfolds into a blanket, and a top quilt that straps to your pad.",
  "Neither is a cold-weather answer by itself, and we say so where the listing gives no rating. Read this as a short list for summer and shoulder-season trips."
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
    "id": "best-ultralight-down-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Ultralight Sleeping Bag Top Quilt",
    "price": "$134.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41DKmGDLfTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DDD6KNW6?tag=rvgearlab-20",
    "description": "The SENSORY4U is a top quilt with 850 fill power down, a printed weight of 1.9 lb, a comfort rating of 30F and a survival rating of 20F. A foot box and pad straps are included.\n\nCompared with the Naturehike, it is the only one that prints temperature figures and the only one with a known fill power. It weighs more than the Naturehike, and it gives you a real rating to plan around.\n\nIt suits backpackers who want down warmth at a moderate price. The straps keep it from sliding off your pad.",
    "specs": [
      "850 fill power down",
      "1.9 lb, comfort 30F",
      "Foot box and pad straps"
    ],
    "pros": [
      "850 fill power down",
      "Comfort and survival ratings printed",
      "Foot box included",
      "Pad straps stop sliding"
    ],
    "cons": [
      "No hood or hand pockets",
      "Ratings are brand figures"
    ],
    "bestFor": "Backpackers wanting down warmth",
    "take": "A real fill power and printed ratings at a moderate price.",
    "catch": "The ratings are the brand's own and there is no hood or hand pocket."
  },
  {
    "id": "best-ultralight-down-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Weight",
    "name": "Naturehike Ultralight Backpacking Down Sleeping Bag for Adults",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31MBnHUaB6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVY2Q33Z?tag=rvgearlab-20",
    "description": "The Naturehike CW-EXT is filled with RDS-certified goose down and wrapped in a thin 10D nylon shell free of PFAS. It weighs 1.09 lb in size L and 0.94 lb in size M.\n\nIt is the lightest pick here by more than half a pound, and it can open out as a down blanket or slip inside a bigger bag as a warm layer. Next to the SENSORY4U, it trades printed ratings for lower weight.\n\nIt suits ultralight hikers who want a layer for summer and shoulder season. Pair it with warm clothing for cool nights.",
    "specs": [
      "0.94 lb M, 1.09 lb L",
      "RDS goose down",
      "10D PFAS-free nylon shell"
    ],
    "pros": [
      "Lightest bag in the list",
      "Real goose down compresses small",
      "Unfolds into a down blanket",
      "Layers inside a larger bag"
    ],
    "cons": [
      "No temperature rating printed",
      "10D shell needs gentle handling"
    ],
    "bestFor": "Gram-counting hikers",
    "take": "The lightest down option, flexible as a blanket or a layer.",
    "catch": "No temperature rating is printed, and the 10D shell needs gentle handling."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fill type",
    "description": "We compared which listings name the down and its fill power."
  },
  {
    "title": "Printed weight",
    "description": "We checked weights by size and what each includes."
  },
  {
    "title": "Stated ratings",
    "description": "We noted which listings print temperature figures and which do not."
  },
  {
    "title": "Shell fabric",
    "description": "We looked at shell denier and finish for durability and care."
  },
  {
    "title": "Format",
    "description": "We weighed bag, quilt and blanket formats for how they suit a pad."
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
    "subheading": "By Trip Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Spring and fall nights near 30F",
          "SENSORY4U 850 Down Quilt",
          "30F comfort and 20F survival printed"
        ],
        [
          "Lowest weight summer trip",
          "Naturehike CW-EXT Down",
          "0.94 lb in size M"
        ],
        [
          "Layer inside a heavier bag",
          "Naturehike CW-EXT Down",
          "Unfolds into a down blanket"
        ],
        [
          "Quilt-style sleeping on a pad",
          "SENSORY4U 850 Down Quilt",
          "Foot box and pad straps"
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
          "$130 to $140",
          "SENSORY4U 850 Down Quilt"
        ],
        [
          "$140 to $150",
          "Naturehike CW-EXT Down"
        ]
      ]
    }
  },
  {
    "subheading": "Quilt vs Bag",
    "cards": [
      {
        "label": "Quilt",
        "text": "The SENSORY4U 850 Down Quilt skips the back insulation and straps to a pad. It saves weight and gives airflow."
      },
      {
        "label": "Bag",
        "text": "The Naturehike CW-EXT Down is a mummy-style bag that also opens as a blanket. It is lighter."
      }
    ],
    "note": "Choose the SENSORY4U 850 Down Quilt for rated shoulder-season warmth, and the Naturehike CW-EXT Down for the lowest weight."
  },
  {
    "subheading": "By Rating Need",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "A printed rating",
          "SENSORY4U 850 Down Quilt"
        ],
        [
          "Lowest weight",
          "Naturehike CW-EXT Down"
        ],
        [
          "Flexible layering",
          "Naturehike CW-EXT Down"
        ]
      ]
    }
  },
  {
    "subheading": "Gram-Counting Hikers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a printed fill power and a weight by size."
      },
      {
        "label": "In this comparison",
        "text": "The SENSORY4U 850 Down Quilt prints 850 fill power, and the Naturehike CW-EXT Down prints 0.94 lb and 1.09 lb."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the SENSORY4U 850 Down Quilt if you want a rating to plan around and a foot box."
      },
      {
        "label": "Save if",
        "text": "Save weight with the Naturehike CW-EXT Down if your trips stay warm."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fill power",
    "explanation": "Fill power measures loft per ounce, and higher numbers mean more warmth for the same weight. The SENSORY4U states 850. Look for the number on the listing, because it is easy to inflate in marketing."
  },
  {
    "criterion": "Responsible down",
    "explanation": "Down labels such as RDS tell you the birds were treated humanely. The Naturehike lists RDS-certified goose down. Check for a certification name on the page."
  },
  {
    "criterion": "Rating or no rating",
    "explanation": "A printed comfort figure helps you plan, even if it is a brand figure. The Naturehike prints none, so use it as a layer. Add a margin to any rating you find."
  },
  {
    "criterion": "Fragile shells",
    "explanation": "Ultralight shells use thin fabric, such as 10D nylon. They snag on rough ground and bark. Handle them gently and keep sharp gear away."
  },
  {
    "criterion": "Wet down",
    "explanation": "Down loses loft when it gets wet. Keep it in a waterproof sack and avoid condensation in the tent. Check whether the listing mentions a water-resistant treatment."
  }
];

export const faq = [
  {
    "q": "Is down worth it for ultralight hiking?",
    "a": "Yes, since it offers the most warmth per ounce. It costs more and needs dry handling."
  },
  {
    "q": "What is a common mistake with down quilts?",
    "a": "Ignoring drafts. A quilt relies on a snug fit to your pad, so use the straps on the SENSORY4U."
  },
  {
    "q": "Is the SENSORY4U worth it over the Naturehike?",
    "a": "If you want a rating and 850 fill power, yes. If you want the lightest roll, the Naturehike wins."
  },
  {
    "q": "How do I pack a down quilt?",
    "a": "Stuff it loosely into a dry bag rather than rolling tightly. Compressing it all day flattens the loft."
  },
  {
    "q": "How do I keep down dry?",
    "a": "Use a waterproof stuff sack, avoid condensation and air it out at lunch. Never store it compressed."
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
