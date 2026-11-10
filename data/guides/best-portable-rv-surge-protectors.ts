export const guideSlug = "best-portable-rv-surge-protectors";
export const guideTitle = "4 Best Portable RV Surge Protectors in 2026";
export const metaTitle = "Best Portable RV Surge Protectors in 2026";
export const metaDescription = "Best portable RV surge protectors compared on 30 and 50 amp ratings, joules, fault detection, waterproof covers and price.";
export const mainKeyword = "best portable rv surge protectors";
export const introParagraphs = [
  "A portable RV surge protector plugs in between the pedestal and your cord, so it moves between rigs and costs far less than a hardwired unit. Four models are covered across 30 amp and 50 amp service, from a basic Progressive to a Progressive EMS unit and an orange GEARGO.",
  "The units were compared on amp rating, joules, fault detection, display and weather protection. A portable unit sits at the pedestal, so a cable lock is a sensible add-on."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/furniture-chairs-by-tent.webp";
export const heroImageAlt = "Two folding camping chairs beside a tent in a redwood forest";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-portable-rv-surge-protectors-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Progressive Industries EMS-PT30X Portable RV Surge Protector",
    "price": "$146.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410Z5nA8S4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N0W4CZ8?tag=rvgearlab-amz-20",
    "description": "Rated 30 amp, 120V and 3,600W, the EMS-PT30X soaks up 1,790 joules and pairs that with an electrical management system. Its watch list covers voltage swings, ground and neutral faults, reversed polarity, a miswired pedestal, accidental 240V and frequency drift.\n\nIt lists the broadest fault list of the four and adds thermal protection, a weather shield and a display readable in low light. It costs the most of the group.\n\nIt suits a 30A owner who wants the strongest fault detection in a portable body. The weather shield keeps rain off the display.",
    "specs": [
      "30A, 3,600W, 1,790J",
      "Electrical management system",
      "Made in USA, Lexan housing"
    ],
    "pros": [
      "Long list of fault detections",
      "Thermal protection and weather shield",
      "Display readable in low light",
      "Made in the USA"
    ],
    "cons": [
      "Highest price in the group",
      "Lower joule rating than budget units"
    ],
    "bestFor": "30A owners",
    "take": "The detection-focused portable pick.",
    "catch": "The joule figure is below the budget units."
  },
  {
    "id": "best-portable-rv-surge-protectors-2",
    "rank": 2,
    "badge": "Best 50A Portable",
    "name": "Progressive Industries SSP-50XL Portable RV Smart Surge Protector",
    "price": "$68.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xaBDuq-yL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B015Y9A4HU?tag=rvgearlab-amz-20",
    "description": "The SSP-50XL is a portable smart surge protector for 50 amp, 120-240V service with 12,000W capacity and 1,650 joules. Alerts cover high or low voltage, ground and neutral faults, polarity reversal and surge failure, with AC frequency protection.\n\nIt is the only 50A pick here, and it costs far less than the 30A EMS unit. Its fault list is shorter than the EMS-PT30X.\n\nIt suits a 50A coach owner who wants a Progressive-made portable unit at a modest price. Frequency monitoring is part of the package.",
    "specs": [
      "50A, 12,000W, 1,650J",
      "Voltage and wiring fault detection",
      "Frequency protection"
    ],
    "pros": [
      "Only 50A pick in this list",
      "Fault detection list included",
      "Frequency protection",
      "Price below the 30A EMS"
    ],
    "cons": [
      "Lower joules than 50A budget units",
      "No app"
    ],
    "bestFor": "50A coaches",
    "take": "A modest-priced 50A portable unit.",
    "catch": "The joule rating is lower than newer budget units."
  },
  {
    "id": "best-portable-rv-surge-protectors-3",
    "rank": 3,
    "badge": "Best Value 30A",
    "name": "Progressive Industries SSP-30XL Portable RV Smart Surge Protector",
    "price": "$51.55",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41T7u17wX+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B015Y9MX38?tag=rvgearlab-amz-20",
    "description": "The SSP-30XL is a portable smart surge protector rated 30 amp, 120V and 3,600W, absorbing 825 joules. Its warnings include voltage swings, ground and neutral faults, polarity reversal, surge failure and frequency issues.\n\nIt is the lowest priced Progressive of the three and has the lowest joule rating. It gives less than the EMS-PT30X in fault depth.\n\nA 30A camper wanting a trusted brand at a small price is the target. The unit adds frequency protection beyond basic surge control.",
    "specs": [
      "30A, 3,600W, 825J",
      "Fault warnings",
      "Frequency protection"
    ],
    "pros": [
      "Lowest price of the Progressive units",
      "Fault warning list",
      "Frequency protection",
      "Trusted brand"
    ],
    "cons": [
      "Only 825 joules",
      "No automatic shutoff named"
    ],
    "bestFor": "Budget 30A from a known brand",
    "take": "A basic Progressive for a small outlay.",
    "catch": "Low joule rating."
  },
  {
    "id": "best-portable-rv-surge-protectors-4",
    "rank": 4,
    "badge": "Best Rugged Budget",
    "name": "GEARGO RV Surge Protectors 30 Amp RV Circuit Analyzer",
    "price": "$33.30",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41NU4tSRcLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B38DJ5Z9?tag=rvgearlab-amz-20",
    "description": "The GEARGO lists 12,000 joules with a circuit analyzer for wiring faults, V-1 flame-retardant material and an IP68 waterproof cover. It has ergonomic grip handles and a right-angle connector, plus a 3-year warranty.\n\nThe lowest price of the four goes with the highest joule figure among the 30A units. The orange body is easy to spot in the dark.\n\nA 30A camper wanting a visible, waterproof unit at a low price is the target. The analyzer checks the pedestal.",
    "specs": [
      "12,000J, IP68, analyzer",
      "V-1 flame-retardant material",
      "3-year warranty"
    ],
    "pros": [
      "Lowest price of the four",
      "IP68 waterproof cover",
      "3-year warranty",
      "Right-angle plug saves space"
    ],
    "cons": [
      "No auto shutoff is named",
      "No EMS fault detail"
    ],
    "bestFor": "Rugged budget 30A",
    "take": "A cheap, visible unit with a 3-year warranty.",
    "catch": "No auto shutoff is named, so check the pedestal first."
  }
];

export const howWeEvaluated = [
  {
    "title": "Amp rating",
    "description": "30A and 50A were separated."
  },
  {
    "title": "Fault detection",
    "description": "The fault lists were compared."
  },
  {
    "title": "Joules",
    "description": "Surge absorption was compared."
  },
  {
    "title": "Weather",
    "description": "Covers and IP ratings were compared."
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
    "subheading": "By Rig",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "30A, strongest detection",
          "Progressive EMS-PT30X",
          "Longest fault list."
        ],
        [
          "50A coach",
          "Progressive SSP-50XL",
          "Only 50A pick."
        ],
        [
          "30A, trusted brand, low price",
          "Progressive SSP-30XL",
          "Lowest Progressive price."
        ],
        [
          "30A, rugged, visible",
          "GEARGO 12,000J IP68",
          "IP68 cover and warranty."
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
          "$30 to $60",
          "GEARGO 12,000J IP68 or Progressive SSP-30XL"
        ],
        [
          "$60 to $150",
          "Progressive SSP-50XL or Progressive EMS-PT30X"
        ]
      ]
    }
  },
  {
    "subheading": "EMS vs smart protector",
    "cards": [
      {
        "label": "EMS",
        "text": "Stronger fault detection and cutoff. The Progressive EMS-PT30X fits here."
      },
      {
        "label": "Smart protector",
        "text": "Surge and fault warnings at a lower cost. The Progressive SSP-30XL, Progressive SSP-50XL and GEARGO 12,000J IP68 fit here."
      }
    ],
    "note": "Choose the Progressive EMS-PT30X if budget allows, or the Progressive SSP-30XL on a tight one."
  },
  {
    "subheading": "By Extra",
    "table": {
      "headers": [
        "Choose",
        "Recommended pick"
      ],
      "rows": [
        [
          "IP68 cover",
          "GEARGO 12,000J IP68"
        ],
        [
          "50A",
          "Progressive SSP-50XL"
        ],
        [
          "Warranty",
          "GEARGO 12,000J IP68"
        ],
        [
          "Detection",
          "Progressive EMS-PT30X"
        ]
      ]
    }
  },
  {
    "subheading": "For Weekend Campers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A 30A or 50A match and a lockable body."
      },
      {
        "label": "In this comparison",
        "text": "The Progressive SSP-30XL is a low-cost 30A option."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Progressive EMS-PT30X for the broadest detection."
      },
      {
        "label": "Save if",
        "text": "Save with the GEARGO 12,000J IP68 or Progressive SSP-30XL."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Portable versus hardwired",
    "explanation": "A portable unit plugs in at the pedestal and is easy to move. It can be stolen, so lock it. A hardwired unit stays inside. Check what suits you."
  },
  {
    "criterion": "Joules versus fault detection",
    "explanation": "A high joule rating helps absorb surges. Fault detection and cutoff protect against bad wiring and voltage. Choose by what you worry about."
  },
  {
    "criterion": "Match your amp service",
    "explanation": "A 30A unit fits TT-30 and a 50A unit fits 14-50. A mismatch will not fit. Check your plug."
  },
  {
    "criterion": "Auto shutoff",
    "explanation": "Some units only warn of faults, others disconnect. A unit that only warns leaves the decision to you. Look for automatic cutoff on the listing."
  },
  {
    "criterion": "Locks and covers",
    "explanation": "A cable lock deters theft and a cover protects from rain. Theft is the main risk of a plug-in unit at a busy campground. Check the listing for IP rating."
  }
];

export const faq = [
  {
    "q": "Do I need a lock?",
    "a": "Yes. Portable units are easy to take. Use a cable lock."
  },
  {
    "q": "Can I use a 30A unit on a 50A rig?",
    "a": "No. Match the amp service. Check your inlet."
  },
  {
    "q": "Does the unit stop a bad pedestal?",
    "a": "Only if it disconnects. Some only warn. Check the listing."
  },
  {
    "q": "How do I test the pedestal?",
    "a": "Plug in the unit and read the lights. Do not connect if there is a fault."
  },
  {
    "q": "When do I replace it?",
    "a": "After a major surge or any damage. Joule capacity wears down over time."
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
