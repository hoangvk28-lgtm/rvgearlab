export const guideSlug = "best-40-000mah-camping-fans";
export const guideTitle = "3 Best 40 000mah Camping Fans in 2026";
export const metaTitle = "Best 40 000mah Camping Fans in 2026";
export const metaDescription = "Best 40,000mAh camping fans compared on pack size, swappable batteries, runtime and lighting, with one true 40,000mAh fan and near-size alternates.";
export const mainKeyword = "best 40 000mah camping fans";
export const introParagraphs = [
  "A 40,000mAh camping fan is a big battery for multi-night trips with no hookup, and only one current listing names that exact size. This guide leads with it and adds two near-size alternates, which it labels clearly.",
  "Each pick was compared on listed pack size, runtime on low and high, swappable batteries, timers and lighting. The size claim is the first filter."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/home-golden-hour-campsite.webp";
export const heroImageAlt = "Dome tent and hammock at a forest campsite at golden hour";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-40-000mah-camping-fans-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Sireck 40000mAh Camping Fan",
    "price": "$42.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JxnlOV9wL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GHR2DJK9?tag=rvgearlab-amz-20",
    "description": "The Sireck lists a 40,000mAh pack with up to 80 hours on the lowest setting and 24 hours on high. It is a 10-inch fan with 5 speeds, a digital battery indicator, remote control, a timer and an LED lantern with 3 brightness levels.\n\nIt is the only true 40,000mAh listing here, with a larger fan and a longer low-speed runtime than the 36,000mAh Korbot. Compared with the FRIZCOL it carries more than 1.5 times the pack.\n\nIt suits campers on multi-night trips who want strong airflow and a lantern in one hanging unit. The 45 and 90 degree oscillation spreads air across a tent.",
    "specs": [
      "40,000mAh, 80 hours low",
      "10-inch fan, 5 speeds",
      "Digital indicator, LED lantern"
    ],
    "pros": [
      "Up to 80 hours on low listed",
      "Larger 10-inch fan",
      "Digital display shows remaining charge",
      "Remote, timer and lantern included"
    ],
    "cons": [
      "Takes a long time to recharge",
      "Battery is not swappable"
    ],
    "bestFor": "Multi-night off-grid camping",
    "take": "The pick for long trips with no power, with a big pack and a big fan.",
    "catch": "A large pack takes a long time to refill from a small charger."
  },
  {
    "id": "best-40-000mah-camping-fans-2",
    "rank": 2,
    "badge": "Nearest Swappable Pack",
    "name": "36000mAh Camping Fan",
    "price": "$40.84",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51F+sj+k-HL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GHRHKWJD?tag=rvgearlab-amz-20",
    "description": "The Korbot lists a 36,000mAh capacity built from two detachable 18,000mAh batteries that can be swapped, with a 120 hour runtime claim. It has 2 LED brightness levels, a timer, low-noise operation and a hook with adjustable angle.\n\nIt is a near-size alternate to the Sireck, giving up about 10% of the capacity for swappable packs. Compared with the FRIZCOL it carries a much larger total pack and a hook.\n\nIt suits campers who want to charge one battery while the other runs. The two-pack design also lets you carry a spare.",
    "specs": [
      "36,000mAh, two 18,000mAh packs",
      "Swappable batteries, 120H claim",
      "Timer and 2 LED levels"
    ],
    "pros": [
      "Swappable batteries extend runtime",
      "Large combined capacity",
      "Timer for overnight use",
      "Cheaper than the Sireck"
    ],
    "cons": [
      "Not a true 40,000mAh fan",
      "Fewer details on airflow and fan size"
    ],
    "bestFor": "Swappable battery camping",
    "take": "A near-40,000mAh alternate that lets you swap packs on the go.",
    "catch": "At 36,000mAh it is slightly below the Sireck."
  },
  {
    "id": "best-40-000mah-camping-fans-3",
    "rank": 3,
    "badge": "Nearest Budget",
    "name": "FRIZCOL 3-in-1 Camping Fan",
    "price": "$29.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51fuC7He8AL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HCBFW1ZK?tag=rvgearlab-amz-20",
    "description": "The FRIZCOL carries a 24,000mAh pack that the listing ties to 11 to 60 hours of use, and it spins at 3950 rpm while staying under 30 dB. Three timer presets, two lamp levels, a tiltable head and non-slip feet round out the body.\n\nIt is the lowest priced fan and about two thirds the capacity of the Korbot. The listing frames it as a 3-in-1 fan for camping, fishing and picnics.\n\nIt suits campers who want a mid-size pack at a low price and do not need the largest capacity. Under-30 dB operation helps at night.",
    "specs": [
      "24,000mAh, 11 to 60 hours",
      "3950 rpm, under 30 dB",
      "3 timers, 2 LED levels"
    ],
    "pros": [
      "Lowest price in the list",
      "Quiet at under 30 dB",
      "Three timers for overnight use",
      "Two LED brightness levels"
    ],
    "cons": [
      "Only 24,000mAh, well below 40,000",
      "Wide runtime range, 11 to 60 hours"
    ],
    "bestFor": "Budget big-battery fan",
    "take": "A low-cost fan with a mid-size pack for shorter trips.",
    "catch": "At 24,000mAh it is not a 40,000mAh fan."
  }
];

export const howWeEvaluated = [
  {
    "title": "True capacity",
    "description": "Listed capacities were checked first, so the true 40,000mAh fan leads and smaller packs are labeled."
  },
  {
    "title": "Runtime",
    "description": "Listed hours on low and high speed were compared."
  },
  {
    "title": "Pack design",
    "description": "Single built-in packs and swappable packs were compared."
  },
  {
    "title": "Controls",
    "description": "Timers, remotes and digital readouts were compared."
  },
  {
    "title": "Lighting",
    "description": "LED lantern levels were noted."
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
    "subheading": "By Trip Length",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Weekend trip with a big fan",
          "Sireck 40000mAh Fan",
          "80 hours on low."
        ],
        [
          "Long trip with swappable packs",
          "Korbot 36000mAh Fan",
          "Two swappable 18,000mAh packs."
        ],
        [
          "Short trips on a budget",
          "FRIZCOL 24000mAh Fan",
          "24,000mAh at the lowest price."
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
          "FRIZCOL 24000mAh Fan"
        ],
        [
          "$40 to $50",
          "Korbot 36000mAh Fan"
        ],
        [
          "$40 to $50",
          "Sireck 40000mAh Fan"
        ]
      ]
    }
  },
  {
    "subheading": "Single Pack vs Swappable Packs",
    "cards": [
      {
        "label": "Single pack",
        "text": "The Sireck 40000mAh Fan uses one large built-in battery for the longest runtime."
      },
      {
        "label": "Swappable packs",
        "text": "The Korbot 36000mAh Fan uses two detachable batteries so one can charge while the other runs."
      }
    ],
    "note": "Most campers should take a single-pack fan like the Sireck 40000mAh Fan unless they want a spare battery."
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
          "Around $30",
          "FRIZCOL 24000mAh Fan"
        ],
        [
          "Around $41",
          "Korbot 36000mAh Fan"
        ],
        [
          "Around $43",
          "Sireck 40000mAh Fan"
        ]
      ]
    }
  },
  {
    "subheading": "Multi-Night Off-Grid Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A listed 70 hours or more on low and a big recharge plan."
      },
      {
        "label": "In this comparison",
        "text": "The Sireck 40000mAh Fan lists 80 hours on low with a timer, and the Korbot 36000mAh Fan lists a 120 hour claim with swappable packs."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Sireck 40000mAh Fan if you want a true 40,000mAh pack, a digital readout and a bigger fan."
      },
      {
        "label": "Save if",
        "text": "Save with the FRIZCOL 24000mAh Fan if you camp only a night or two and do not need 40,000mAh."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "True capacity versus label",
    "explanation": "Only one listing names a single 40,000mAh pack, and others describe a combined cell total. A 36,000mAh fan made from two swappable packs is not the same as one pack. Read the title and the first bullet for the exact capacity."
  },
  {
    "criterion": "Low versus high runtime",
    "explanation": "A big pack gives 70 to 80 hours on the lowest speed and far fewer on high. Plan nights on low with a timer. A listed best-case number is the low-speed one."
  },
  {
    "criterion": "Charge time for a big pack",
    "explanation": "A 40,000mAh battery needs many hours to refill from a small charger. A 5V 2A adapter can take most of a day. Check the charge time and the adapter size on the listing."
  },
  {
    "criterion": "Weight and bulk",
    "explanation": "Large packs add weight and size, so a 10-inch fan with a big pack is heavy to hang. Check the hook rating and the fan's weight. Stand it on a table if the tent ceiling is flimsy."
  },
  {
    "criterion": "Swappable versus built-in pack",
    "explanation": "A swappable pack lets you rotate batteries during a trip, while a built-in pack must be charged in place. Swappable designs help on long trips. Check whether the second battery is included."
  }
];

export const faq = [
  {
    "q": "Do I need a 40,000mAh fan?",
    "a": "Only if you camp several nights with no recharge. The Sireck 40000mAh Fan lists 80 hours on low, so a long weekend is easy. For one night, a 20,000mAh fan is enough."
  },
  {
    "q": "What mistake do buyers make?",
    "a": "Running a big pack on high speed and expecting the low-speed runtime. High speed drains it much faster. Use low speed and a timer."
  },
  {
    "q": "Is 40,000mAh worth it over 20,000mAh?",
    "a": "For multi-night trips yes, and the extra size adds weight. For a weekend, 20,000mAh is enough. See the 20,000mAh guide for those."
  },
  {
    "q": "How do I recharge a big pack?",
    "a": "Use the supplied cable with a wall adapter or power station. Expect many hours. Charge before leaving."
  },
  {
    "q": "How do I maintain the fan?",
    "a": "Clean the blades, keep the grille dry and recharge the pack every few months in storage. Do not leave it in a hot car. Check the hook before hanging."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Portable Solar Panels",
    "href": "/camp-power/best-portable-solar-panels"
  },
  {
    "title": "Best Power Station",
    "href": "/camp-power/best-power-station"
  },
  {
    "title": "Best Solar Power Bank",
    "href": "/camp-power/best-solar-power-bank"
  },
  {
    "title": "Best Portable Solar Panels For Home",
    "href": "/camp-power/best-portable-solar-panels-for-home"
  }
];
