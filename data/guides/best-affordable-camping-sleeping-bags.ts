export const guideSlug = "best-affordable-camping-sleeping-bags";
export const guideTitle = "3 Best Affordable Camping Sleeping Bags in 2026";
export const metaTitle = "Best Affordable Camping Sleeping Bags in 2026";
export const metaDescription = "Three sleeping bags near or under 30 dollars: PTEROMY, ECOOPRO and OBTANIM, with what a low price gets you and where corners get cut.";
export const mainKeyword = "best affordable camping sleeping bags";
export const introParagraphs = [
  "Affordable bags can cover a summer weekend if you match the rating to the night. This guide covers three that cost between roughly 19 and 28 dollars: the PTEROMY with a stated comfort range, the ECOOPRO envelope bag and the OBTANIM, which claims 4-season use.",
  "At this price, the useful questions are how honestly the temperature range is printed and what the shell and lining are made of. The list ranks by documentation, not by a promise of warmth."
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
    "id": "best-affordable-camping-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "PTEROMY Sleeping Bags for Adults",
    "price": "$23.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51zDRBxzXfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DX6WYJF7?tag=rvgearlab-20",
    "description": "PTEROMY prints a comfort range of 50 to 80F and a recommended limit of 40 to 90F, with double S-shaped stitching and hollowfiber cotton filling. The listing gives a product weight of 1.35 kg and includes a compression bag.\n\nIt is the only bag in this price band that states both a comfort range and a limit, which makes the number easy to plan around. A spun cotton inner lining, an adjustable drawstring hood, a Velcro pocket and a bottom vent zipper add comfort.\n\nA strong value for spring, summer and fall campers on a tight budget. The bag is machine washable.",
    "specs": [
      "50 to 80F comfort range",
      "1.35 kg stated weight",
      "Hollowfiber, cotton lining"
    ],
    "pros": [
      "Comfort range and limit both printed",
      "Weight printed at 1.35 kg",
      "Soft spun cotton lining",
      "Bottom zipper vents heat"
    ],
    "cons": [
      "Comfort range starts at 50F",
      "Not for near-freezing nights"
    ],
    "bestFor": "Budget three-season campers",
    "take": "The one cheap bag that prints both a comfort range and a recommended limit.",
    "catch": "Comfort starts at 50F, so near-freezing nights are too cold for it."
  },
  {
    "id": "best-affordable-camping-sleeping-bags-2",
    "rank": 2,
    "badge": "Best for Hot Weather",
    "name": "ECOOPRO Warm Weather Sleeping Bag",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fu3se401L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B011AZ3O9W?tag=rvgearlab-20",
    "description": "ECOOPRO's envelope bag measures 83 x 30 inches, with a nylon outer, polyester lining and a stated 55 to 60F range. It compresses to 11 inches tall and weighs 1.7 lb, and a compression sack is included.\n\nNext to the PTEROMY Hollowfiber, it is lighter and packs smaller, and it gives a clear packed height. The 30 inch width is slim, which saves weight for hot-weather trips.\n\nA fit for scouts, hot-weather campers and travelers who want a cheap compact bag. A waterproof nylon exterior sheds dew.",
    "specs": [
      "1.7 lb, 11 inches tall",
      "55 to 60F range",
      "83 x 30 in envelope cut"
    ],
    "pros": [
      "Light at 1.7 lb",
      "Compression sack included",
      "Waterproof nylon outer",
      "Packed height printed"
    ],
    "cons": [
      "Range is only 55 to 60F",
      "30 inches is narrow"
    ],
    "bestFor": "Hot-weather and travel use",
    "take": "A 1.7 lb envelope bag with a printed packed height of 11 inches.",
    "catch": "Its 55 to 60F range is warm weather only, and 30 inches is narrow."
  },
  {
    "id": "best-affordable-camping-sleeping-bags-3",
    "rank": 3,
    "badge": "Lowest Price",
    "name": "Camping Sleeping Bags for Adults Kids Waterproof Lightweight Sleeping Bag for Cold Weather or Warm Backpacking",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+S3seRetL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B4DJGQJD?tag=rvgearlab-20",
    "description": "OBTANIM is the lowest-priced bag here, made with a polyester exterior, double microfiber fill and a 100% polyester lining. The listing calls it a 4-season bag and says it keeps users warm at temperatures close to freezing, with a waterproof double-layer design.\n\nWhere the PTEROMY and ECOOPRO print numbers, this listing leans on season claims, so its low price comes with fewer facts. It suits kids, indoor use and sleepovers as well as camping.\n\nA pick for the tightest budgets and casual use. Treat the 4-season label as marketing and plan for mild nights.",
    "specs": [
      "4-season claim, microfiber fill",
      "100% polyester lining",
      "Waterproof double layer"
    ],
    "pros": [
      "Lowest price of the three",
      "Soft polyester lining",
      "Suits kids and adults",
      "Waterproof double-layer design"
    ],
    "cons": [
      "No temperature range or weight printed",
      "Season claim is not a rating"
    ],
    "bestFor": "Kids, sleepovers, backup bag",
    "take": "The cheapest bag here, good for casual and indoor use.",
    "catch": "The listing prints no rating or weight, so keep it to mild nights."
  }
];

export const howWeEvaluated = [
  {
    "title": "Rating honesty",
    "description": "We checked whether each listing prints a range, a limit or only a season word."
  },
  {
    "title": "Fill and lining",
    "description": "We read the fill and lining materials."
  },
  {
    "title": "Weight and pack",
    "description": "We compared printed weight and packed height."
  },
  {
    "title": "Fit",
    "description": "We read printed sizes where given."
  },
  {
    "title": "Price",
    "description": "We kept every pick at or near the bottom of the price range."
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
    "subheading": "By Camping Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Spring and fall weekends",
          "PTEROMY Hollowfiber",
          "Prints a 50 to 80F range"
        ],
        [
          "Hot summer nights, small pack",
          "ECOOPRO Slim Envelope",
          "1.7 lb and 11 inches tall"
        ],
        [
          "Sleepovers or a backup bag",
          "OBTANIM Waterproof",
          "Lowest price"
        ],
        [
          "Machine-washable needs",
          "PTEROMY Hollowfiber",
          "Listed as machine washable"
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
          "$10 to $20",
          "OBTANIM Waterproof"
        ],
        [
          "$20 to $30",
          "PTEROMY Hollowfiber"
        ],
        [
          "$20 to $30",
          "ECOOPRO Slim Envelope"
        ]
      ]
    }
  },
  {
    "subheading": "Printed Numbers vs Season Claims",
    "cards": [
      {
        "label": "Numbers",
        "text": "The PTEROMY Hollowfiber and ECOOPRO Slim Envelope print ranges, weights and sizes."
      },
      {
        "label": "Claims",
        "text": "The OBTANIM Waterproof relies on a season label and leaves rating and weight blank."
      }
    ],
    "note": "Pick the PTEROMY Hollowfiber when you want facts, and the OBTANIM Waterproof when price is everything."
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
          "Under 20 dollars",
          "OBTANIM Waterproof"
        ],
        [
          "20 to 25 dollars",
          "PTEROMY Hollowfiber"
        ],
        [
          "25 to 30 dollars",
          "ECOOPRO Slim Envelope"
        ]
      ]
    }
  },
  {
    "subheading": "A First Camping Trip Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed comfort range and a compression sack."
      },
      {
        "label": "In this comparison",
        "text": "The PTEROMY Hollowfiber prints 50 to 80F comfort and includes a compression bag, and the ECOOPRO Slim Envelope includes a compression sack."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ECOOPRO Slim Envelope if you want a lighter bag with a printed packed height."
      },
      {
        "label": "Save if",
        "text": "Save with the OBTANIM Waterproof if the bag is for kids or mild-weather backup."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What a low price buys",
    "explanation": "A bag around 20 to 30 dollars gives a basic synthetic fill and a simple shell. Weight is higher and ratings are modest. Spend your money on a good pad instead if you can only afford one upgrade."
  },
  {
    "criterion": "Season labels versus ratings",
    "explanation": "A word like 4-season is marketing, while a comfort range is a number. Prefer listings that print the number. Look for a range with a low end and a high end."
  },
  {
    "criterion": "Comfort range",
    "explanation": "A comfort range such as 50 to 80F tells you the nights it suits. Below the low end you need layers. Match it to forecast lows."
  },
  {
    "criterion": "Weight and packed size",
    "explanation": "Cheap bags tend to be heavier. A printed weight like 1.7 lb or 1.35 kg lets you compare. Without a figure, assume more weight."
  },
  {
    "criterion": "Care",
    "explanation": "Machine-washable bags last longer on a budget. Check the listing for care notes. Dry fully before storing."
  }
];

export const faq = [
  {
    "q": "Is a cheap bag good enough for camping?",
    "a": "For summer and mild shoulder-season nights, yes. Below about 50F you need a warmer bag. The PTEROMY Hollowfiber lists a 40F recommended limit."
  },
  {
    "q": "What mistake do budget buyers make?",
    "a": "They trust season labels. The OBTANIM Waterproof calls itself 4-season without a printed rating. Read the range, not the label."
  },
  {
    "q": "Is the PTEROMY worth over the OBTANIM?",
    "a": "Yes if you want a comfort range and a stated weight. The OBTANIM Waterproof costs less but prints less. Spend a few dollars more for the printed numbers."
  },
  {
    "q": "How do I set up a cheap bag?",
    "a": "Fluff it and lay it over a pad. Use layers on a cool night. Vent with the bottom zipper on the PTEROMY Hollowfiber."
  },
  {
    "q": "How do I wash it?",
    "a": "Check the tag. The PTEROMY Hollowfiber is listed as machine washable. Dry it fully."
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
