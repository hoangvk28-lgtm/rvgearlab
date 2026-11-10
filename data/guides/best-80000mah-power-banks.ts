export const guideSlug = "best-80000mah-power-banks";
export const guideTitle = "3 Best 80000mah Power Banks in 2026";
export const metaTitle = "Best 80000mah Power Banks in 2026";
export const metaDescription = "Best 80000mAh power banks compared on charge count, fast-charge wattage, ports and weather features for base camps and long trips off grid.";
export const mainKeyword = "best 80000mah power banks";
export const introParagraphs = [
  "An 80000mAh power bank is a base-camp battery, not a daypack item. At roughly 296Wh it refills a phone more than a dozen times, but it is too large for airline cabins and heavy enough that ports, handles and weather protection decide how useful it is.",
  "Few listings state 80000mAh clearly, so the shortlist is three banks from three different lines. They were compared on stated capacity, fast-charge wattage, port counts, light and weather features."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/power-station-campsite.webp";
export const heroImageAlt = "Jeep camp with a tent, solar panels and a portable power station at a pine forest campsite";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-80000mah-power-banks-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "80000mAh Power Bank 35W Fast Charging Wireless Solar Charger",
    "price": "$56.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UDnkpDr8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GTLM4DGS?tag=rvgearlab-20",
    "description": "The Feidyns lists 80000mAh, 35W PD and QC 3.0 output, a 15W wireless charging pad and 7 ports including USB-C PD 3.1. It adds a 5W solar panel for emergencies, a 300 lumen LED with SOS strobe, IP66 water and dust protection and a strap that withstands a 200 lb pull.\n\nIt has the strongest output of the three at 35W, and the only wireless pad and weather rating. It costs less than the other two.\n\nIt suits campers who want a rugged base-camp bank with a light. Up to 8 devices can charge at once from a wall outlet or the bank.",
    "specs": [
      "80000mAh, 35W PD, 7 ports",
      "15W wireless pad, 5W solar",
      "300 lumen LED, IP66"
    ],
    "pros": [
      "35W is the highest output of the three",
      "15W wireless pad for cable-free charging",
      "IP66 protection against rain and dust",
      "300 lumen LED with SOS strobe"
    ],
    "cons": [
      "Solar is for emergencies only",
      "Heavy, and not allowed in the cabin"
    ],
    "bestFor": "Rugged base-camp power",
    "take": "The most complete 80K, with 35W, wireless charging and a weatherproof body.",
    "catch": "At 296Wh class capacity, it stays on the ground and out of airplane cabins."
  },
  {
    "id": "best-80000mah-power-banks-2",
    "rank": 2,
    "badge": "Best Light Bank",
    "name": "80000mAh High Capacity PD 30W Power Bank Fast Charging 22.5W Portable USB C Battery Packs with 5 Outputs & LCD",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ut8UKOeSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DFLY9B7C?tag=rvgearlab-20",
    "description": "The KONFULON lists 80000mAh (296Wh) with PD 30W and 22.5W USB output, five outputs and two inputs, and a bright LED light with SOS. It claims more than 14 full iPhone 16 charges and 11 for an iPhone 16 Pro Max.\n\nIt is 5W below the Feidyns and has no wireless pad or weather rating. It sells for more than the Relliphent and Feidyns, and it adds a light that doubles as a desk lamp.\n\nIt suits households and campers who want a bank that doubles as a lantern during outages. Five devices charge together.",
    "specs": [
      "80000mAh, 296Wh, PD 30W",
      "5 outputs, 2 inputs",
      "LED light with SOS"
    ],
    "pros": [
      "14 plus full iPhone 16 charges listed",
      "Five outputs charge five devices",
      "LED light works as a desk lamp",
      "30W PD for tablets and phones"
    ],
    "cons": [
      "Priciest of the three",
      "No weather rating named"
    ],
    "bestFor": "Outage backup with light",
    "take": "A big bank that doubles as an emergency light.",
    "catch": "The price tops the other two without adding wireless or solar."
  },
  {
    "id": "best-80000mah-power-banks-3",
    "rank": 3,
    "badge": "Best Ports",
    "name": "Relliphent 80000mAh Portable Charger",
    "price": "$65.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41E+yTJJLmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GSVM5V4Y?tag=rvgearlab-20",
    "description": "The Relliphent lists 80000mAh with 15 to 20 phone charges, 2 USB ports at 30W and a 20W USB-C port. It has 5 outputs and 2 inputs including a micro USB input, an LED display and a built-in lanyard.\n\nIt prices below the KONFULON and above the Feidyns, and it offers two 30W USB ports. The lanyard makes it easy to hang.\n\nIt suits groups who want two fast USB ports and a clear display. Phones charge to 60 percent in 30 minutes.",
    "specs": [
      "80000mAh, two 30W USB ports",
      "5 outputs, USB-C and micro inputs",
      "LED display, lanyard"
    ],
    "pros": [
      "Two 30W USB ports fast-charge two devices",
      "15 to 20 phone charges listed",
      "LED display shows remaining power",
      "Built-in lanyard for hanging"
    ],
    "cons": [
      "USB-C output is only 20W",
      "Micro USB input is dated"
    ],
    "bestFor": "Family and group sharing",
    "take": "A big shared bank with two fast ports and a lanyard.",
    "catch": "Slow input charging is the hidden cost of any 80000mAh pack."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Stated 80000mAh and 296Wh were compared."
  },
  {
    "title": "Fast charging",
    "description": "30W and 35W outputs were compared."
  },
  {
    "title": "Ports",
    "description": "Outputs, inputs and wireless options were counted."
  },
  {
    "title": "Weather and light",
    "description": "Water ratings and LED lights were noted."
  },
  {
    "title": "Portability",
    "description": "Straps, lanyards and handles were noted."
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
    "subheading": "By Camp Setup",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Rugged base camp",
          "Feidyns 80000mAh Wireless Solar",
          "IP66 and 35W output."
        ],
        [
          "Outage lantern and bank",
          "KONFULON 80000mAh PD 30W",
          "LED light with SOS."
        ],
        [
          "Group sharing",
          "Relliphent 80000mAh 30W",
          "Two 30W USB ports."
        ],
        [
          "Cable-free charging",
          "Feidyns 80000mAh Wireless Solar",
          "15W wireless pad."
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
          "Feidyns 80000mAh Wireless Solar"
        ],
        [
          "$60 to $70",
          "Relliphent 80000mAh 30W"
        ],
        [
          "$60 to $70",
          "KONFULON 80000mAh PD 30W"
        ]
      ]
    }
  },
  {
    "subheading": "Feature-Rich vs Simple",
    "cards": [
      {
        "label": "Feature-rich",
        "text": "Wireless, solar and weather protection add weight and cost. The Feidyns 80000mAh Wireless Solar leads here."
      },
      {
        "label": "Simple",
        "text": "A plain bank with ports and a light keeps things straightforward. The KONFULON 80000mAh PD 30W and Relliphent 80000mAh 30W fit this."
      }
    ],
    "note": "Most buyers should pick the Feidyns 80000mAh Wireless Solar, which costs less than both plain banks."
  },
  {
    "subheading": "By Power Priority",
    "table": {
      "headers": [
        "Priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Highest output",
          "Feidyns 80000mAh Wireless Solar"
        ],
        [
          "Brightest dedicated light",
          "Feidyns 80000mAh Wireless Solar"
        ],
        [
          "Two fast USB ports",
          "Relliphent 80000mAh 30W"
        ]
      ]
    }
  },
  {
    "subheading": "Multi-Day Base Camp Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Capacity near 80000mAh, a weather rating and enough ports for the group."
      },
      {
        "label": "In this comparison",
        "text": "The Feidyns 80000mAh Wireless Solar names IP66 and 7 ports, and the Relliphent 80000mAh 30W lists 5 outputs."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the KONFULON 80000mAh PD 30W only if the built-in light matters most."
      },
      {
        "label": "Save if",
        "text": "Save with the Feidyns 80000mAh Wireless Solar, which is cheaper and better equipped."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 80000mAh really is",
    "explanation": "80000mAh at 3.7 volts is about 296Wh, which is more than an airline allows in the cabin and roughly the size of a small power station. It refills a phone 14 or more times. Check the Wh."
  },
  {
    "criterion": "Recharge time",
    "explanation": "A bank this large takes a long time to refill from a normal charger, often 10 hours or more at 5V. Fast input, where listed, shortens that. Check the input rating."
  },
  {
    "criterion": "Output split",
    "explanation": "Banks list a headline wattage for one port and a lower total across ports. Five devices at once will each slow down. Look for per-port figures."
  },
  {
    "criterion": "Weather rating",
    "explanation": "An IP66 rating means protection from dust and strong water jets. A bank with no named rating should stay under cover. Check the listing for a named IP number."
  },
  {
    "criterion": "Solar and wireless extras",
    "explanation": "A small solar panel on a bank adds a trickle at best, and a wireless pad charges slower than a cable. They are conveniences, not main routes. Treat solar as an emergency option."
  }
];

export const faq = [
  {
    "q": "Can I fly with an 80000mAh bank?",
    "a": "No for the cabin, since it is far above airline limits. The KONFULON 80000mAh PD 30W lists 296Wh. Use it for car and base camping."
  },
  {
    "q": "What is the common mistake with huge banks?",
    "a": "Expecting a quick refill. A big bank can take most of a day to recharge. Plan to plug it in overnight, ideally with a high-wattage charger."
  },
  {
    "q": "Is 80000mAh worth it over 40000mAh?",
    "a": "Only for groups or week-long stays. The Relliphent 80000mAh 30W gives 15 to 20 phone charges. For one person, a 20K to 40K bank is easier."
  },
  {
    "q": "How do I use the solar panel?",
    "a": "Treat it as an emergency top-up in direct sun. The Feidyns 80000mAh Wireless Solar lists 5W of solar input. Charge from a wall for the main refill."
  },
  {
    "q": "How do I store it?",
    "a": "Keep it at about half charge, cool and dry. Top it up every few months. Check the seals before wet trips."
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
