export const guideSlug = "best-compact-camping-sleeping-bags";
export const guideTitle = "3 Best Compact Camping Sleeping Bags in 2026";
export const metaTitle = "Best Compact Camping Sleeping Bags in 2026";
export const metaDescription = "Three compact warm-weather bags that pack small for camping: WERTYCITY at 6.9 inches, REDCAMP at 1.5 lb and ECOOPRO at 11 inches, with what to check.";
export const mainKeyword = "best compact camping sleeping bags";
export const introParagraphs = [
  "A compact camping bag is one that stuffs into a small sack and leaves room in the trunk or pack. This guide covers three warm-weather options that print their packed size and weight: the WERTYCITY, the REDCAMP and the ECOOPRO.",
  "All three are summer-only bags with ranges that start around 55 to 59F, so the guide is honest about the trade: you gain pack space and lose cold-weather margin."
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
    "id": "best-compact-camping-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "WERTYCITY Warm Weather Sleeping Bag",
    "price": "$25.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TF2SEPBFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07SR1SCTC?tag=rvgearlab-amz-20",
    "description": "WERTYCITY's warm-weather bag compresses to 6.9 inches in height and weighs about 1.54 lb. The listing gives a nylon outer, a soft imitation silk cotton filling and a polyester pongee lining, with comfort stated at 59F.\n\nIt packs smaller than the ECOOPRO and the REDCAMP, and two bags can be zipped together to make a double. The pack is the smallest of the three by a clear margin.\n\nA strong match for campers who prize pack space and camp only in hot weather. It also suits travelers.",
    "specs": [
      "About 1.54 lb",
      "6.9 inches packed height",
      "Comfort at 59F"
    ],
    "pros": [
      "Smallest packed height printed",
      "Weighs about 1.54 pounds",
      "Zips to a second bag",
      "Low price"
    ],
    "cons": [
      "Comfort figure is 59F",
      "Only for hot nights"
    ],
    "bestFor": "Hot-weather campers",
    "take": "The smallest packed size here, at 6.9 inches, in a 1.54 lb bag.",
    "catch": "Comfort is stated at 59F, so only hot nights suit it."
  },
  {
    "id": "best-compact-camping-sleeping-bags-2",
    "rank": 2,
    "badge": "Best for Warmer Range",
    "name": "REDCAMP Ultra Lightweight Compact Sleeping Bag for Backpacking",
    "price": "$23.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41WY5-7QZbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01NCIPCCC?tag=rvgearlab-amz-20",
    "description": "REDCAMP measures this bag at 75 x 32.7 inches and 1.5 lb, and it fits adults up to 6 feet. The listing gives a comfort of 68F with a range of 59 to 77F, and the package measures 7.9 x 4.7 inches.\n\nIts two-way zippers allow two bags to join into a double, or open as a quilt for summer use. A 365-day limited warranty backs it, which the ECOOPRO and WERTYCITY do not list.\n\nGood for hot-summer campers who want a quilt option and a printed pack size. The internal stuff pocket holds small items.",
    "specs": [
      "1.5 lb, 75 x 32.7 in",
      "Range 59 to 77F, comfort 68F",
      "7.9 x 4.7 in package"
    ],
    "pros": [
      "Lightest listed weight at 1.5 lb",
      "Two-way zippers join two bags",
      "Opens as a quilt",
      "365-day limited warranty"
    ],
    "cons": [
      "Range starts at 59F",
      "75 inch length fits to about 6 ft"
    ],
    "bestFor": "Hot-summer quilt campers",
    "take": "A 1.5 lb bag that opens into a quilt and carries a one-year warranty.",
    "catch": "The 59F low end and 75 inch length limit it to hot nights and average heights."
  },
  {
    "id": "best-compact-camping-sleeping-bags-3",
    "rank": 3,
    "badge": "Best for Longer Fit",
    "name": "ECOOPRO Warm Weather Sleeping Bag",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fu3se401L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B011AZ3O9W?tag=rvgearlab-amz-20",
    "description": "ECOOPRO's envelope bag is 83 x 30 inches with a nylon outer and a polyester lining, with a stated 55 to 60F range. It compresses to 11 inches tall, weighs 1.7 lb and ships with a compression sack.\n\nIt is the longest of the three, so it fits taller sleepers better than the REDCAMP or the WERTYCITY. It is also the heaviest and bulkiest of the trio.\n\nA fit for taller campers who want a compact warm-weather bag. Scouts and travelers use it often.",
    "specs": [
      "1.7 lb, 11 inches tall",
      "55 to 60F range",
      "83 x 30 in envelope cut"
    ],
    "pros": [
      "Longest cut of the three",
      "Compression sack included",
      "Waterproof nylon outer",
      "Packed height printed"
    ],
    "cons": [
      "Range is only 55 to 60F",
      "Largest packed size here"
    ],
    "bestFor": "Taller hot-weather campers",
    "take": "The longest bag here, at 83 inches, with a compression sack.",
    "catch": "The 55 to 60F range is warm only, and 30 inches is narrow."
  }
];

export const howWeEvaluated = [
  {
    "title": "Packed size",
    "description": "We compared printed packed heights and package sizes."
  },
  {
    "title": "Weight",
    "description": "We read printed weights."
  },
  {
    "title": "Stated range",
    "description": "We noted where each range starts."
  },
  {
    "title": "Length",
    "description": "We compared lengths and widths."
  },
  {
    "title": "Extras",
    "description": "We looked at zippers, warranties and compression sacks."
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
    "subheading": "By Pack Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Smallest possible pack",
          "WERTYCITY Summer",
          "6.9 inches packed height"
        ],
        [
          "Quilt option and a warranty",
          "REDCAMP Ultralight 75 in",
          "Opens as a quilt, 365-day warranty"
        ],
        [
          "Taller camper",
          "ECOOPRO Slim Envelope",
          "83 inch length"
        ],
        [
          "Hot nights near 70F",
          "REDCAMP Ultralight 75 in",
          "Range reaches 77F"
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
          "$20 to $30",
          "REDCAMP Ultralight 75 in"
        ],
        [
          "$20 to $30",
          "WERTYCITY Summer"
        ],
        [
          "$20 to $30",
          "ECOOPRO Slim Envelope"
        ]
      ]
    }
  },
  {
    "subheading": "Smallest Pack vs Longest Fit",
    "cards": [
      {
        "label": "Smallest",
        "text": "The WERTYCITY Summer packs to 6.9 inches and weighs 1.54 lb."
      },
      {
        "label": "Longest",
        "text": "The ECOOPRO Slim Envelope is 83 inches long and packs to 11 inches."
      }
    ],
    "note": "Choose the WERTYCITY Summer for pack space and the ECOOPRO Slim Envelope for tall campers."
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
          "REDCAMP Ultralight 75 in"
        ],
        [
          "Mid cost, smallest pack",
          "WERTYCITY Summer"
        ],
        [
          "Highest cost, longest fit",
          "ECOOPRO Slim Envelope"
        ]
      ]
    }
  },
  {
    "subheading": "Car Camping with Little Space Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed packed height or package size and a printed weight."
      },
      {
        "label": "In this comparison",
        "text": "The WERTYCITY Summer prints 6.9 inches and 1.54 lb, and the REDCAMP Ultralight 75 in prints a 7.9 x 4.7 inch package and 1.5 lb."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ECOOPRO Slim Envelope if you are tall and need the longer cut."
      },
      {
        "label": "Save if",
        "text": "Save with the REDCAMP Ultralight 75 in, the cheapest and one of the lightest."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Packed size versus warmth",
    "explanation": "Compact bags use less fill, so they sleep cooler. The price of a 6.9 inch pack is a 59F comfort number. Choose size only if the weather matches."
  },
  {
    "criterion": "Reading packed dimensions",
    "explanation": "A packed height of 6.9 inches is not the same as a package size of 7.9 x 4.7 inches. Check what the listing measures. Compare like with like."
  },
  {
    "criterion": "Weight",
    "explanation": "A 1.5 lb bag and a 1.7 lb bag differ little in the hand. Ratings differ more. Check weight and range together."
  },
  {
    "criterion": "Length for taller sleepers",
    "explanation": "A 75 inch bag fits a sleeper of about six feet, while 83 inches gives more room. A bag shorter than you pushes insulation flat at your feet. Check printed length against your height."
  },
  {
    "criterion": "Compression and loft",
    "explanation": "Long compression flattens fill. Store the bag loose between trips. Use the sack only for transport."
  }
];

export const faq = [
  {
    "q": "Are compact bags warm enough?",
    "a": "Only for warm nights. All three start between 55 and 59F. Add layers or pick a warmer bag if lows drop."
  },
  {
    "q": "What mistake do buyers make with compact bags?",
    "a": "They buy for size and forget the rating. A small pack is useless if you are cold. Check the range first."
  },
  {
    "q": "Is the WERTYCITY worth over the ECOOPRO?",
    "a": "If pack space matters, yes. The ECOOPRO Slim Envelope is longer. Pick by space or fit."
  },
  {
    "q": "How do I pack a compact bag?",
    "a": "Stuff it into the sack from the foot end. Tighten the compression straps. Do not leave it packed for weeks."
  },
  {
    "q": "How do I care for it?",
    "a": "Wash gently if the tag allows. Dry fully. Store loose."
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
