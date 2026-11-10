export const guideSlug = "best-30-degree-mummy-sleeping-bags";
export const guideTitle = "2 Best 30 Degree Mummy Sleeping Bags in 2026";
export const metaTitle = "Best 30 Degree Mummy Sleeping Bags in 2026";
export const metaDescription = "Two mummy bags for 30F camping and hiking: the Retrospec Dream 30 for light weight and the TETON LEEF 20F for a roomier cut.";
export const mainKeyword = "best 30 degree mummy sleeping bags";
export const introParagraphs = [
  "Only two listings pair a mummy shape with a 30F-class rating at a budget price: the Retrospec Dream 30 and the TETON LEEF, sold in 0, 20 and 30 degree options. Both are tapered, hooded mummies that pack down for hiking and car camping alike.",
  "That makes this a short, honest comparison. We looked at printed weight, hood and draft features, and how each listing describes fit."
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
    "id": "best-30-degree-mummy-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Retrospec Dream 30° 30 Degree Sleeping Bag",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ju9H8ETeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZ1WCL8T?tag=rvgearlab-20",
    "description": "Retrospec labels the Dream 30 as a 30 degree insulated mummy and lists water-resistant inner and outer shells, a draft collar, and a draft tube. The regular weighs 2 lb 8 oz, the long weighs 2 lb 10 oz, and a stuff sack is included.\n\nThe 30 degree label matches the guide directly, where the LEEF sold here is the 20F option. Differentiated draw cords adjust the hood in the dark, and a zipped stash pocket keeps a phone close.\n\nA light, simple choice for hikers and car campers who want a 30F mummy at a low price. Choose the long size for sleepers over 6 ft.",
    "specs": [
      "30 degree insulated mummy",
      "2 lb 8 oz regular weight",
      "Draft collar and draft tube"
    ],
    "pros": [
      "Label matches 30 degrees directly",
      "Printed weight under 3 lb",
      "Differentiated draw cords",
      "Zipped stash pocket"
    ],
    "cons": [
      "Fill type is not named",
      "Water resistant, not waterproof"
    ],
    "bestFor": "Light hikers and car campers",
    "take": "A light 30F mummy with draft collar, draft tube and a printed weight.",
    "catch": "The listing does not name the insulation, so synthetic is likely but unstated."
  },
  {
    "id": "best-30-degree-mummy-sleeping-bags-2",
    "rank": 2,
    "badge": "Best for Roomy Mummy",
    "name": "Teton LEEF Lightweight Mummy Sleeping Bag Perfect for Camping",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31RYywqgUQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09LMNT52L?tag=rvgearlab-20",
    "description": "This listing is the 20F version of the TETON LEEF, which also comes in 0 and 30 degree ratings and three sizes. A roomier tapered cut packs down small in the included compression sack.\n\nIts 20F label sits colder than the Retrospec's, which gives margin if you expect nights below 30F. The roomier cut suits sleepers who dislike a snug mummy.\n\nChoose it for campers who want extra margin and a more relaxed fit. Pick the size that matches your height, and store it loose at home.",
    "specs": [
      "20F mummy, roomier design",
      "0, 20 and 30 degree options",
      "Compression sack included"
    ],
    "pros": [
      "Colder label than the Retrospec",
      "Roomier mummy cut",
      "Three sizes available",
      "Compression sack included"
    ],
    "cons": [
      "No weight or fill listed",
      "Rating is a brand label"
    ],
    "bestFor": "Campers wanting extra margin",
    "take": "A roomier 20F mummy that doubles as a 30F option with margin.",
    "catch": "No fill or weight is printed, so judge the 20F label with caution."
  }
];

export const howWeEvaluated = [
  {
    "title": "Rating",
    "description": "We compared labels with 30F."
  },
  {
    "title": "Weight",
    "description": "We used printed weights."
  },
  {
    "title": "Draft control",
    "description": "We checked collars, tubes and hoods."
  },
  {
    "title": "Fit",
    "description": "We compared cut and size options."
  },
  {
    "title": "Price",
    "description": "We compared relative cost."
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
    "subheading": "By Camper",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Wants a literal 30 degree label",
          "Retrospec Dream 30",
          "30 degree title"
        ],
        [
          "Wants margin below 30F",
          "TETON LEEF 20F",
          "20F label"
        ],
        [
          "Tall sleeper",
          "Retrospec Dream 30",
          "Long size listed"
        ],
        [
          "Prefers roomier mummy",
          "TETON LEEF 20F",
          "Roomier design"
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
          "Retrospec Dream 30"
        ],
        [
          "$70 to $80",
          "TETON LEEF 20F"
        ]
      ]
    }
  },
  {
    "subheading": "Exact 30F Label vs Colder Margin",
    "cards": [
      {
        "label": "Exact label",
        "text": "The Retrospec Dream 30 matches 30F and is lighter."
      },
      {
        "label": "Margin",
        "text": "The TETON LEEF 20F gives a colder label and a roomier cut."
      }
    ],
    "note": "Choose the Retrospec Dream 30 for 30F trips and the TETON LEEF 20F for extra margin."
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
          "Lower price",
          "Retrospec Dream 30"
        ],
        [
          "Higher price, margin",
          "TETON LEEF 20F"
        ]
      ]
    }
  },
  {
    "subheading": "30F Hiking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed weight and a draft collar."
      },
      {
        "label": "In this comparison",
        "text": "The Retrospec Dream 30 lists 2 lb 8 oz and a draft collar."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the TETON LEEF 20F for the colder label and roomier cut."
      },
      {
        "label": "Save if",
        "text": "Save with the Retrospec Dream 30."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "30F label vs comfort",
    "explanation": "A 30F mummy is rated for survival near 30F, with comfort 10 degrees warmer. Plan trips that stay above 40F. Look for a comfort statement."
  },
  {
    "criterion": "Weight and fill",
    "explanation": "A mummy under 3 lb is light for car or trail. Fill type affects damp performance. Look for a named fill and printed weight."
  },
  {
    "criterion": "Draft collar and tube",
    "explanation": "A draft collar seals the neck and a tube seals the zipper. Together they cut heat loss on cool nights. Check both are named."
  },
  {
    "criterion": "Fit and length",
    "explanation": "Regular and long sizes fit different heights. Too short leaves cold feet. Match your height to the listed size."
  },
  {
    "criterion": "Hood cords",
    "explanation": "A hood with separate cords is easy to adjust in the dark. This matters in cold wind. Look for the cord design in the listing."
  }
];

export const faq = [
  {
    "q": "Is a 30F mummy warm enough for fall?",
    "a": "For early fall, yes with an insulated pad and layers. For colder nights, choose the 20F LEEF or add a liner. Comfort sits warmer than the label."
  },
  {
    "q": "What mistake do campers make with mummies?",
    "a": "They buy a size that is too short and press their feet against the end. That compresses insulation and cools the toes. Check the fit height before you order."
  },
  {
    "q": "Is the LEEF worth it over the Retrospec?",
    "a": "If you want margin below 30F and a roomier cut, yes. If you want the lowest weight and cost, the Retrospec Dream 30 is enough."
  },
  {
    "q": "How do I use the draw cords on a mummy hood?",
    "a": "Pull the main cord to close the hood around your face and leave the breathing hole open. Use the second cord to cinch the draft collar. Keep your face out of the bag to avoid condensation."
  },
  {
    "q": "How do I store a mummy bag?",
    "a": "Keep it loose in a large sack or hang it by the loops. Compression for months flattens the loft. Dry it fully before storage."
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
