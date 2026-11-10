export const guideSlug = "best-lightweight-backpacking-sleeping-bags";
export const guideTitle = "2 Best Lightweight Backpacking Sleeping Bags in 2026";
export const metaTitle = "Best Lightweight Backpacking Sleeping Bags";
export const metaDescription = "Best lightweight backpacking sleeping bags: two warm-weather bags compared on stated weight, packed size and shell, plus a note on thin listings.";
export const mainKeyword = "best lightweight backpacking sleeping bags";
export const introParagraphs = [
  "Few Amazon listings that fit this need actually print a weight, so this guide is short and honest about it. Two bags qualify as genuine fits, and both are built for warm nights, not for frost.",
  "One prints 1.7 lb and a packed height, and the other leans on a compression sack and a roomy cut. Read them as summer and low-cost three-season options, then add a liner or pad if your trips run cooler."
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
    "id": "best-lightweight-backpacking-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ECOOPRO Warm Weather Sleeping Bag",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fu3se401L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B011AZ3O9W?tag=rvgearlab-20",
    "description": "The ECOOPRO Warm Weather bag is an 83 by 30 inch envelope with a nylon shell and a polyester lining. The listing prints 1.7 lb and a compressed height of 11 inches, which are the two numbers a pack-weight planner needs.\n\nNext to the VENTURE 4TH it is far narrower and lighter, so it takes less room in a pack and less of the weight budget. The compression sack and the smooth zipper make it quick to stuff and unpack at camp.\n\nIt suits solo hikers and bikepackers on summer routes who count ounces. The waterproof shell sheds dew and light spray at a low cost.",
    "specs": [
      "83 by 30 in envelope",
      "1.7 lb, 11 in compressed",
      "55 to 60F range"
    ],
    "pros": [
      "Weighs 1.7 lb, packed height listed",
      "Waterproof nylon shell",
      "Compression sack included",
      "Sizes offered at 83 and 86 inches"
    ],
    "cons": [
      "Range is only 55 to 60F",
      "Narrow 30 inch width"
    ],
    "bestFor": "Summer hikers counting ounces",
    "take": "The lighter and smaller of the two, and the only one with a printed weight.",
    "catch": "Its 55 to 60F range keeps it in summer territory, and the 30 inch width is snug."
  },
  {
    "id": "best-lightweight-backpacking-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Roomy Budget",
    "name": "VENTURE 4TH 3-Season XXL Camping Sleeping Bag",
    "price": "$54.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51PJsmQApJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0897D54RX?tag=rvgearlab-20",
    "description": "The VENTURE 4TH XXL measures 90 by 39 inches, rated 30F to 70F, with a polyester shell that resists wear and moisture. It ships with a compression sack and a lifetime replacement guarantee.\n\nCompared with the ECOOPRO, it gives you a full extra 9 inches of width and a colder low end of the range. It also folds into its sack for short carries, and the shell wipes clean.\n\nIt fits larger or restless sleepers who walk in a short way and want space more than low weight. The guarantee adds peace of mind at a modest price.",
    "specs": [
      "90 x 39 inch XXL size",
      "30F to 70F rated",
      "Lifetime replacement guarantee"
    ],
    "pros": [
      "Very wide for rolling over",
      "Water-resistant easy-clean shell",
      "Lifetime replacement guarantee",
      "Low price"
    ],
    "cons": [
      "Large and heavy for hiking",
      "Wide cut leaves air gaps"
    ],
    "bestFor": "Big sleepers on short hikes",
    "take": "A wide, forgiving bag for short walk-ins and mixed car trips.",
    "catch": "No weight is printed and the 39 inch width packs bigger than the ECOOPRO."
  }
];

export const howWeEvaluated = [
  {
    "title": "Printed weight",
    "description": "We checked which listings state a weight, because ounces are what make a bag lightweight."
  },
  {
    "title": "Stated range",
    "description": "We compared the temperature figures and noted which end is the comfort number."
  },
  {
    "title": "Packed size",
    "description": "We looked at compressed height and the stuff sack provided."
  },
  {
    "title": "Shell and lining",
    "description": "We compared the outer fabric, water resistance and lining feel."
  },
  {
    "title": "Fit for the job",
    "description": "We judged how each bag serves a walking trip rather than a campsite."
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
          "Summer overnight with a small pack",
          "ECOOPRO Warm Weather",
          "1.7 lb printed and 11 inch packed height"
        ],
        [
          "Short walk-in from the car",
          "VENTURE 4TH XXL",
          "90 by 39 inches with a compression sack"
        ],
        [
          "Nights near 55 to 60F",
          "ECOOPRO Warm Weather",
          "Range printed at 55 to 60F"
        ],
        [
          "Tall or restless sleeper",
          "VENTURE 4TH XXL",
          "Extra width for rolling"
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
          "ECOOPRO Warm Weather"
        ],
        [
          "$50 to $60",
          "VENTURE 4TH XXL"
        ]
      ]
    }
  },
  {
    "subheading": "Narrow Envelope vs Wide Rectangle",
    "cards": [
      {
        "label": "Narrow Envelope",
        "text": "The ECOOPRO Warm Weather is 30 inches wide, so it packs small and holds heat close. It has less space to turn."
      },
      {
        "label": "Wide Rectangle",
        "text": "The VENTURE 4TH XXL spans 39 inches and gives full room to roll. It packs bigger and weighs more."
      }
    ],
    "note": "Choose the ECOOPRO Warm Weather for carried miles, and the VENTURE 4TH XXL when the car is close."
  },
  {
    "subheading": "By Temperature Comfort",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Warmest low end of the range",
          "VENTURE 4TH XXL"
        ],
        [
          "Lowest weight in the pack",
          "ECOOPRO Warm Weather"
        ],
        [
          "Smallest packed volume",
          "ECOOPRO Warm Weather"
        ]
      ]
    }
  },
  {
    "subheading": "Weight-Conscious Hiking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a printed weight and a compressed height on the listing."
      },
      {
        "label": "In this comparison",
        "text": "The ECOOPRO Warm Weather states 1.7 lb and 11 inches, while the VENTURE 4TH XXL prints neither."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the VENTURE 4TH XXL if you need the 30F low end and the roomier cut for mixed trips."
      },
      {
        "label": "Save if",
        "text": "Save with the ECOOPRO Warm Weather if your trips stay in warm weather and weight matters more than space."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "A weight that is printed",
    "explanation": "A lightweight claim means little until the listing shows a number. The ECOOPRO prints 1.7 lb, which lets you plan the pack. Look for ounces or pounds on the page and treat silence as a reason to ask."
  },
  {
    "criterion": "Temperature range",
    "explanation": "Warm-weather bags can list ranges near 55 to 60F, while 3-season bags may reach 30F. The gap decides whether you need a liner. Read both ends and match them to your coldest night."
  },
  {
    "criterion": "Width against warmth",
    "explanation": "A wider bag, like the 39 inch VENTURE 4TH, lets you roll but leaves more air to warm. A 30 inch envelope holds heat better and packs smaller. Check the listed width before you pick."
  },
  {
    "criterion": "Compressed height",
    "explanation": "The packed size decides which pack and which compartment holds it. The ECOOPRO states 11 inches in height. Compare that figure with the space left after your tent and food."
  },
  {
    "criterion": "Shell and care",
    "explanation": "Nylon shells shed dew, and polyester ones resist wear. A wipe-clean surface matters more than lofty fabric on a short summer route. Read the outer material line on the listing."
  },
  {
    "criterion": "Pad pairing",
    "explanation": "Most warmth loss goes to the ground, so the pad matters as much as the bag. A pad with a stated R-value covers what a thin summer bag cannot. Budget for both."
  }
];

export const faq = [
  {
    "q": "Is the ECOOPRO really a lightweight bag?",
    "a": "Its listing prints 1.7 lb and an 11 inch packed height, which is light for a synthetic bag. It is only rated for warm nights, so it fits summer routes."
  },
  {
    "q": "What mistake do buyers make with budget lightweight bags?",
    "a": "They read the lowest number as a comfort figure. Treat the warm end of any printed range as the comfortable one and add layers below it."
  },
  {
    "q": "Is the VENTURE 4TH XXL worth it over the ECOOPRO?",
    "a": "If you want width and a 30F low end, yes. It gives up weight and packed size, so it suits car-based trips more than long carries."
  },
  {
    "q": "How do I pack either bag?",
    "a": "Stuff the bag into the compression sack without folding it, then cinch the straps evenly. Store it loose at home so the fill keeps its loft."
  },
  {
    "q": "How do I stretch the range of a warm-weather bag?",
    "a": "Add a liner, wear dry base layers and use a pad with a stated R-value. These steps add a few degrees, but they do not turn a summer bag into a winter one."
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
