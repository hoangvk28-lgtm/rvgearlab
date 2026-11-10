export const guideSlug = "best-lightweight-camping-sleeping-bags";
export const guideTitle = "2 Best Lightweight Camping Sleeping Bags in 2026";
export const metaTitle = "Best Lightweight Camping Sleeping Bags in 2026";
export const metaDescription = "Best lightweight camping sleeping bags: two light synthetic bags compared on stated weight, packed size, temperature range and quilt-style use.";
export const mainKeyword = "best lightweight camping sleeping bags";
export const introParagraphs = [
  "Few camping sleeping bags print an honest weight, and only two listings here do it alongside a temperature range. Both are warm-season synthetic bags, so this guide is short and written for car campers who want an easy carry rather than trekkers chasing ounces.",
  "Each bag sits in the same weather band, roughly 43 to 60F, and both skip down. Read the verdicts for how they differ in width, packed size and how each can be opened flat."
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
    "id": "best-lightweight-camping-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Wind Tour 3 Season Lightweight Waterproof Sleeping Bag Indoor & Outdoor for Hiking Backpacking Camping Traveli",
    "price": "$18.68",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TGGcx-8TL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CB93DVJ6?tag=rvgearlab-20",
    "description": "The Wind Tour 3 Season weighs 2.2 lb and is rated for 43 to 59F. In sleep mode it measures 84.6 by 31.5 inches including an 11.8 inch hood extension, and in quilt mode it opens to 72.8 by 63 inches.\n\nThat quilt mode gives it a second life as a blanket on warm nights, which the slimmer ECOOPRO cannot do. It ships with a breathable 12 by 8 inch storage sack and costs less than the ECOOPRO.\n\nIt suits car campers and travelers who want one bag for sleeping and for lounging. The lower end of its range reaches cooler evenings than the ECOOPRO's.",
    "specs": [
      "2.2 lb total weight",
      "43 to 59F range",
      "Sleep mode and quilt mode"
    ],
    "pros": [
      "Weight and range both printed",
      "Opens into a 63 inch quilt",
      "11.8 inch hood extension",
      "Low price"
    ],
    "cons": [
      "Heavier than the ECOOPRO",
      "Storage sack is not a compression sack"
    ],
    "bestFor": "Car campers wanting a quilt mode",
    "take": "A 2.2 lb synthetic bag rated 43 to 59F that opens to a 72.8 x 63 inch quilt.",
    "catch": "It weighs more than the ECOOPRO and the sack is not a compression sack."
  },
  {
    "id": "best-lightweight-camping-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Lightest Pack",
    "name": "ECOOPRO Warm Weather Sleeping Bag",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fu3se401L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B011AZ3O9W?tag=rvgearlab-20",
    "description": "ECOOPRO lists its warm weather bag at 1.7 lb with an 11 inch compressed height, in an 83 inch long envelope shell of nylon over a polyester lining. The maker pegs the working range at 55 to 60F.\n\nWhere the Wind Tour spreads out into a quilt, the ECOOPRO stays narrow at 30 inches and saves about half a pound. A compression sack and a smooth zipper are included.\n\nIt suits solo campers who stick to warm nights and want the lightest pack. The slim cut keeps the bag small.",
    "specs": [
      "1.7 lb, 11 inches tall",
      "55 to 60F range",
      "Narrow 30 inch cut"
    ],
    "pros": [
      "Half a pound lighter than the Wind Tour",
      "Compression sack included",
      "Waterproof nylon outer",
      "Packed height printed"
    ],
    "cons": [
      "Range is only 55 to 60F",
      "30 inches is narrow"
    ],
    "bestFor": "Solo campers on warm nights",
    "take": "A 1.7 lb envelope that compresses to 11 inches tall, for hot-weather trips.",
    "catch": "Its 55 to 60F range is warm only, and 30 inches is narrow."
  }
];

export const howWeEvaluated = [
  {
    "title": "Printed weight",
    "description": "We compared the weight each listing prints."
  },
  {
    "title": "Temperature range",
    "description": "We read the stated ranges and compared the cold ends."
  },
  {
    "title": "Pack size",
    "description": "We checked sack sizes and compressed heights."
  },
  {
    "title": "Versatility",
    "description": "We noted quilt modes and opening options."
  },
  {
    "title": "Fit",
    "description": "We looked at width and length."
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
          "Hot-weather solo trip",
          "ECOOPRO Slim Envelope",
          "1.7 lb and 11 inch compressed height"
        ],
        [
          "Cool-evening car camp",
          "Wind Tour 3 Season",
          "43 to 59F rated range"
        ],
        [
          "Bag that doubles as a quilt",
          "Wind Tour 3 Season",
          "Opens to 72.8 x 63 inches"
        ],
        [
          "Tightest pack",
          "ECOOPRO Slim Envelope",
          "Compression sack included"
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
          "Wind Tour 3 Season"
        ],
        [
          "$20 to $30",
          "ECOOPRO Slim Envelope"
        ]
      ]
    }
  },
  {
    "subheading": "Compression Sack vs Storage Sack",
    "cards": [
      {
        "label": "Compression Sack",
        "text": "The ECOOPRO Slim Envelope squeezes down to 11 inches tall, which helps a full pack."
      },
      {
        "label": "Storage Sack",
        "text": "The Wind Tour 3 Season comes in a breathable 12 by 8 inch sack, which is easy to store and takes more room."
      }
    ],
    "note": "Choose the ECOOPRO Slim Envelope for the pack, and the Wind Tour 3 Season for car trips."
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
          "Lowest price",
          "Wind Tour 3 Season"
        ],
        [
          "Higher price, lighter",
          "ECOOPRO Slim Envelope"
        ]
      ]
    }
  },
  {
    "subheading": "Car Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a quilt mode and a range that covers cool evenings."
      },
      {
        "label": "In this comparison",
        "text": "The Wind Tour 3 Season opens to a quilt and lists 43 to 59F."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ECOOPRO Slim Envelope if weight and packed height matter."
      },
      {
        "label": "Save if",
        "text": "Save with the Wind Tour 3 Season if you want a quilt option and a cooler range."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Printed weight",
    "explanation": "A lightweight claim needs a number. The ECOOPRO lists 1.7 lb and the Wind Tour 2.2 lb. Prefer listings that print one."
  },
  {
    "criterion": "Cold end of the range",
    "explanation": "The cold end sets how far into spring and fall you can camp. The Wind Tour lists 43F and the ECOOPRO 55F. Match it to your coldest night."
  },
  {
    "criterion": "Sack type",
    "explanation": "A compression sack shrinks the bag and a storage sack only holds it. The ECOOPRO includes a compression sack, and the Wind Tour includes a breathable sack. Pick by how tight your pack is."
  },
  {
    "criterion": "Quilt mode",
    "explanation": "A bag that opens flat doubles as a blanket. The Wind Tour opens to 72.8 by 63 inches. Look for dimensions in both modes."
  },
  {
    "criterion": "Width",
    "explanation": "A narrow bag is lighter and a wide one is roomier. The Wind Tour is 31.5 inches and the ECOOPRO 30. Compare to your build."
  }
];

export const faq = [
  {
    "q": "Is a lightweight camping bag warm enough?",
    "a": "Only for warm nights. The ranges here run from 43 or 55F upward, so add a liner for cool evenings."
  },
  {
    "q": "What mistake do buyers make with light bags?",
    "a": "They buy by weight alone. Check the cold end of the range."
  },
  {
    "q": "Is the ECOOPRO worth it over the Wind Tour?",
    "a": "For ounces and packed size, yes. The Wind Tour costs less and adds a quilt mode."
  },
  {
    "q": "How do I use quilt mode?",
    "a": "Unzip the bag fully and spread it flat. Use it as a blanket over a pad."
  },
  {
    "q": "How do I store a lightweight bag?",
    "a": "Keep it loose in a large sack at home so the fill keeps loft. Wash it only when needed."
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
