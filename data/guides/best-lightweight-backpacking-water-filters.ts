export const guideSlug = "best-lightweight-backpacking-water-filters";
export const guideTitle = "3 Best Lightweight Backpacking Water Filters in 2026";
export const metaTitle = "Best Lightweight Backpacking Water Filters";
export const metaDescription = "Best lightweight backpacking water filters: a fast Platypus QuickDraw, a flat Katadyn BeFree AC and a TRAILGO pump compared on flow, weight claims and format.";
export const mainKeyword = "best lightweight backpacking water filters";
export const introParagraphs = [
  "Only three listings in our search fit a light, pack-friendly filter, and they are very different. Two are squeeze systems that pack flat, and one is a pump kit.",
  "We ordered them by flow and by how well each page supports a lightweight claim. The pump is the heavy outlier and is included as the group option."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/lighting-headlamp-tent.webp";
export const heroImageAlt = "Camper wearing a headlamp in front of a tent at night";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-lightweight-backpacking-water-filters-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Platypus Quickdraw Ultralight 1 Liter Backpacking Water Filter System",
    "price": "$54.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ucXpPwdaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CL8L5RPQ?tag=rvgearlab-amz-20",
    "description": "The Platypus QuickDraw is a 1 liter ultralight system that squeezes at 3 liters per minute and runs at 1.75 liters per minute as a gravity filter. A ConnectCap threads onto any 28mm bottle, and the wide-mouth reservoir has a handle for quick filling.\n\nIts squeeze flow is the fastest listed here, ahead of the Katadyn BeFree AC at 2 liters per minute. It packs smaller than a gravity bag and cleans by shaking or backflushing with no tools.\n\nIt suits thru-hikers and backpackers who want speed and small pack space. Fill, thread and drink.",
    "specs": [
      "1 liter squeeze reservoir",
      "3 liters per minute squeeze flow",
      "Threads onto 28mm bottles"
    ],
    "pros": [
      "Fastest squeeze flow printed",
      "Threads onto any 28mm bottle",
      "Wide mouth fills quickly",
      "Cleans with no tools"
    ],
    "cons": [
      "Costs more than basic squeezes",
      "Not a purifier"
    ],
    "bestFor": "Thru-hikers and fast hikers",
    "take": "The fastest and most flexible squeeze filter here.",
    "catch": "It costs more than simple squeeze filters and the page does not claim viruses."
  },
  {
    "id": "best-lightweight-backpacking-water-filters-2",
    "rank": 2,
    "badge": "Best Flat Pack",
    "name": "Katadyn BeFree AC 2-Stage Filter Collapsible Travel Water Bottle 1L",
    "price": "$42.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31dP3ZCwEFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075X5R67T?tag=rvgearlab-amz-20",
    "description": "The Katadyn BeFree AC is a collapsible bottle of 1 liter, filtering through hollow fibers (0.1 micron) and a carbon stage. The page lists 2 liters per minute and a capacity of up to 1,000 liters.\n\nIt folds flat when empty and cleans by shaking or swishing, which is simpler than the Platypus backflush. The carbon stage targets taste.\n\nIt suits backpackers who want a fill-and-squeeze bottle that rides flat in a pack. The cleaning routine takes seconds.",
    "specs": [
      "1 liter collapsible bottle",
      "0.1 micron plus carbon",
      "Up to 1,000 liters"
    ],
    "pros": [
      "Flows 2 liters per minute",
      "Shake-clean, no backflushing",
      "Packs flat when empty",
      "Carbon stage for taste"
    ],
    "cons": [
      "Lower lifespan than some filters",
      "Priciest of the squeeze options"
    ],
    "bestFor": "Pack-space-conscious hikers",
    "take": "The simplest flat-packing option.",
    "catch": "Its 1,000 liter life is modest and it costs more than basic squeezes."
  },
  {
    "id": "best-lightweight-backpacking-water-filters-3",
    "rank": 3,
    "badge": "Best Group Pump",
    "name": "Trailgo Pro Portable Water Filter for Camping",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51U5YkHN7BL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZF46VG2?tag=rvgearlab-amz-20",
    "description": "The TRAILGO Pro is the pump in this trio, rated for a group of four to six at 1.5 liters a minute. Its layers are a coarse screen, cotton and an ultrafiltration membrane, and hoses, clamps and a carry bag arrive with it.\n\nIt is the complete kit and the heaviest by nature, while the other two are squeezes. It serves a camp better than a bottle.\n\nIt suits families and groups who camp at a base and need water fast. Setup takes minutes.",
    "specs": [
      "Hand pump kit",
      "Three-stage filtration",
      "1.5 liters per minute"
    ],
    "pros": [
      "Pumps 1.5 liters per minute",
      "Complete kit in the box",
      "Reusable pre-filter",
      "Replacement cartridges available"
    ],
    "cons": [
      "Weight is not printed",
      "Bulkier than squeeze filters"
    ],
    "bestFor": "Groups and base camps",
    "take": "The group option when squeezing one bottle at a time is too slow.",
    "catch": "No weight is printed, and a pump kit is not a lightweight setup."
  }
];

export const howWeEvaluated = [
  {
    "title": "Flow",
    "description": "We compared printed flow rates for squeeze, gravity and pump use."
  },
  {
    "title": "Weight claims",
    "description": "We noted which listings print a weight and which rely on adjectives."
  },
  {
    "title": "Format",
    "description": "We weighed squeeze, bottle and pump formats as pack loads."
  },
  {
    "title": "Cleaning",
    "description": "We looked at how each system is cleaned on the trail."
  },
  {
    "title": "Lifespan",
    "description": "We checked for printed lifespans in liters."
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
    "subheading": "By Trip Pace",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Thru-hike, fast stops",
          "Platypus QuickDraw",
          "3 liters per minute squeeze flow"
        ],
        [
          "Simple flat-pack bottle",
          "Katadyn BeFree AC",
          "Packs flat, shake-clean"
        ],
        [
          "Group base camp",
          "TRAILGO Pro",
          "Pump kit for four to six"
        ],
        [
          "Filling a hydration bladder",
          "Platypus QuickDraw",
          "Threads onto 28mm bottles"
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
          "$40 to $50",
          "Katadyn BeFree AC"
        ],
        [
          "$50 to $60",
          "Platypus QuickDraw"
        ],
        [
          "$80 to $90",
          "TRAILGO Pro"
        ]
      ]
    }
  },
  {
    "subheading": "Squeeze vs Pump",
    "cards": [
      {
        "label": "Squeeze",
        "text": "The Platypus QuickDraw and the Katadyn BeFree AC pack flat and fill fast."
      },
      {
        "label": "Pump",
        "text": "The TRAILGO Pro serves a group and pumps through hoses."
      }
    ],
    "note": "Choose the Platypus QuickDraw for solo speed, and the TRAILGO Pro for groups."
  },
  {
    "subheading": "By Maintenance",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "No backflushing",
          "Katadyn BeFree AC"
        ],
        [
          "Backflush or shake",
          "Platypus QuickDraw"
        ],
        [
          "Replaceable cartridge",
          "TRAILGO Pro"
        ]
      ]
    }
  },
  {
    "subheading": "Fast Thru-Hiking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a printed squeeze flow and a bottle thread."
      },
      {
        "label": "In this comparison",
        "text": "The Platypus QuickDraw lists 3 liters per minute and a 28mm thread, and the Katadyn BeFree AC lists 2 liters per minute."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Platypus QuickDraw if speed matters, or the TRAILGO Pro for groups."
      },
      {
        "label": "Save if",
        "text": "Save with the Katadyn BeFree AC when you want a simple bottle."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Printed weight",
    "explanation": "Lightweight is a claim until a weight appears. The pages here mostly describe packability rather than ounces. Look for ounces or grams on the listing."
  },
  {
    "criterion": "Flow per minute",
    "explanation": "A fast filter saves minutes at every stop. The Platypus lists 3 liters per minute squeezing, and the Katadyn 2. Find the rated flow."
  },
  {
    "criterion": "Format and space",
    "explanation": "Squeeze systems pack flat, and pumps do not. A flat pack leaves room for food. Match the format to your pack volume."
  },
  {
    "criterion": "Cleaning without tools",
    "explanation": "Trail cleaning must be easy. Shaking and swishing take seconds, and backflushing needs a clean source. Check what the page says."
  },
  {
    "criterion": "Filter, not purifier",
    "explanation": "These filters target bacteria and protozoa. None claims virus removal on its page. Add tablets for international trips."
  }
];

export const faq = [
  {
    "q": "What makes a filter lightweight?",
    "a": "A printed weight and a flat-packing format. Squeeze filters like the Platypus and Katadyn beat pumps."
  },
  {
    "q": "What mistake do hikers make with squeeze filters?",
    "a": "Squeezing dirty water back through the filter. Keep clean and dirty sides separate."
  },
  {
    "q": "Is the Platypus worth it over the Katadyn?",
    "a": "For flow and flexibility, yes. The Katadyn is simpler to clean."
  },
  {
    "q": "How do I backflush the Platypus?",
    "a": "Push clean water through the filter in the reverse direction. The maker describes the steps on the page."
  },
  {
    "q": "Can I use these in cold weather?",
    "a": "Keep them from freezing. Ice can crack hollow fibers, so sleep with the filter in your bag."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Affordable Backpacking Water Filters",
    "href": "/packs-hiking/best-affordable-backpacking-water-filters"
  },
  {
    "title": "Best Backpacking Water Filters For Viruses",
    "href": "/packs-hiking/best-backpacking-water-filters-for-viruses"
  },
  {
    "title": "Best Backpacking Water Filters",
    "href": "/packs-hiking/best-backpacking-water-filters"
  }
];
