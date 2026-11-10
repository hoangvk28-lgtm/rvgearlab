export const guideSlug = "best-80w-foldable-solar-panels";
export const guideTitle = "2 Best 80w Foldable Solar Panels in 2026";
export const metaTitle = "Best 80w Foldable Solar Panels in 2026";
export const metaDescription = "Best 80W foldable solar panels compared on ports, weight, folded size and warranty for phones, tablets and small camp batteries.";
export const mainKeyword = "best 80w foldable solar panels";
export const introParagraphs = [
  "Few listings target exactly 80W in a foldable format, and the two that do split cleanly by what they charge. One is a multi-port panel with a real folded size and warranty, and the other is a low-cost dual USB panel with a built-in regulator.",
  "They were compared on stated wattage, output types, weight and folded size, weather rating, and the accessories in the box. A short list is the honest result, so each pick is described in detail."
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
    "id": "best-80w-foldable-solar-panels-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "MHPOWOS 80W Portable Solar Panel Charger with USB C",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VXP8HkOfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DR1YXSXQ?tag=rvgearlab-amz-20",
    "description": "The MHPOWOS 80W weighs 5.89 lbs and folds to 12.5 by 9.6 by 2.5 inches, with a 5A DC output plus USB-C and USB-A ports. It uses 23 percent efficient ETFE monocrystalline cells with IP65 protection and a 5-in-1 connector covering XT60, DC5521, DC35135, DC7909 and DC8020.\n\nAgainst the Yosoo, it adds a DC output, USB-C and a stated warranty. The box also includes four carabiners and a 2-in-1 USB cable.\n\nIt suits campers who juggle phones, a small station and a camera. The 12-month warranty is named on the listing.",
    "specs": [
      "80W, 23% ETFE panel",
      "DC, USB-C and USB-A",
      "5-in-1 connector, IP65"
    ],
    "pros": [
      "Three output types in one panel",
      "5-in-1 connector fits many stations",
      "12-month warranty named",
      "Four carabiners for hanging"
    ],
    "cons": [
      "IP65 rating is below IP68 panels",
      "At 5.89 lbs it is not ultralight"
    ],
    "bestFor": "Mixed gear and a small station",
    "take": "A well-equipped 80W panel with DC, USB-C and USB-A and a stated warranty.",
    "catch": "At 5.89 lbs it suits car camping more than ultralight trips."
  },
  {
    "id": "best-80w-foldable-solar-panels-2",
    "rank": 2,
    "badge": "Best Budget",
    "name": "80W Portable Foldable Monocrystalline Solar Panel Dual USB Output for Camping RV Fishing",
    "price": "$47.19",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/310vO3FZ82L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DL537Y51?tag=rvgearlab-amz-20",
    "description": "The Yosoo is an 80W monocrystalline folding panel with dual USB output, an ETFE folding-bag design and a built-in voltage regulator. It lists integrated kickstands, carabiners and casing for flat, angled or hanging use.\n\nIt costs a lot less than the MHPOWOS and puts its protections up front. Compared with the MHPOWOS, its dual USB ports simultaneously handle 12V and 5V devices.\n\nIt suits budget campers who want an 80W panel for phones and small gadgets. The kickstands set the panel angle quickly.",
    "specs": [
      "80W monocrystalline ETFE",
      "Dual USB output",
      "Built-in voltage regulator"
    ],
    "pros": [
      "Lowest price among 80W options",
      "Built-in voltage regulator named",
      "Kickstands and carabiners included",
      "Dual outputs charge two devices"
    ],
    "cons": [
      "Weight and folded size are not listed",
      "No USB-C port is named"
    ],
    "bestFor": "Budget phone and gadget charging",
    "take": "A budget 80W with a built-in regulator and kickstands.",
    "catch": "Without weight or folded size on the listing, measure your pack space before relying on it."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated wattage",
    "description": "Listings were filtered for an exact 80W rating."
  },
  {
    "title": "Output types",
    "description": "USB-C, USB-A and DC outputs were compared."
  },
  {
    "title": "Weight and fold",
    "description": "Stated weight and folded size were noted, and missing figures flagged."
  },
  {
    "title": "Weather rating",
    "description": "IP ratings and ETFE surfaces were compared."
  },
  {
    "title": "Box contents",
    "description": "Connectors, carabiners and warranty terms were counted."
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
    "subheading": "By Gear",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Phones, camera and small station",
          "MHPOWOS 80W Panel",
          "DC, USB-C and USB-A with a 5-in-1 connector."
        ],
        [
          "Budget phones and gadgets",
          "Yosoo 80W Panel",
          "Dual USB with a built-in regulator."
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
          "Yosoo 80W Panel"
        ],
        [
          "$80 to $90",
          "MHPOWOS 80W Panel"
        ]
      ]
    }
  },
  {
    "subheading": "Multi-Port vs Dual USB",
    "cards": [
      {
        "label": "Multi-port",
        "text": "A panel with DC, USB-C and USB-A feeds both a station and personal devices. The MHPOWOS 80W Panel works this way."
      },
      {
        "label": "Dual USB",
        "text": "A panel with two USB outputs keeps things simple and cheap. The Yosoo 80W Panel works this way."
      }
    ],
    "note": "Most campers should choose the MHPOWOS 80W Panel unless budget is the only concern."
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
          "Higher budget, warranty",
          "MHPOWOS 80W Panel"
        ],
        [
          "Lowest budget",
          "Yosoo 80W Panel"
        ]
      ]
    }
  },
  {
    "subheading": "Phone and Gadget Charging Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A USB-C port for modern phones, a stated folded size, and a regulator or protections list."
      },
      {
        "label": "In this comparison",
        "text": "The MHPOWOS 80W Panel adds USB-C and a 5.89 lb stated weight, while the Yosoo 80W Panel names a built-in regulator."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the MHPOWOS 80W Panel if you want DC, USB-C and a stated warranty in one panel."
      },
      {
        "label": "Save if",
        "text": "Save with the Yosoo 80W Panel if you only charge phones and small gadgets."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 80W can charge",
    "explanation": "An 80W panel gives roughly 50 to 65 watts in good sun, enough for phones, tablets, a camera and small power banks. A small power station fills slowly. Match the panel to the battery you want it to refill."
  },
  {
    "criterion": "Ports on the panel",
    "explanation": "A USB-C port charges modern phones and tablets faster than a basic USB-A port, and a DC output feeds a small station. Check the port list and the amp rating of each. Do not assume USB-C means fast charging."
  },
  {
    "criterion": "Voltage regulation",
    "explanation": "A built-in regulator steadies output so devices see a stable voltage as the sun varies. Panels without one can send uneven power to sensitive gear. Look for a regulator or protection list on the listing."
  },
  {
    "criterion": "Weight and folded size",
    "explanation": "An 80W panel runs around 4 to 6 pounds, and folded size decides whether it fits a pack. If the listing omits weight or dimensions, measure your space first. Ask the seller before relying on it for packing."
  },
  {
    "criterion": "Connectors for stations",
    "explanation": "Small stations use DC5521, DC7909, DC8020 or XT60, and a panel needs the right tip. A 5-in-1 connector covers many models. Match your station's input before ordering."
  }
];

export const faq = [
  {
    "q": "Can an 80W panel run a power station?",
    "a": "It can charge a small station, only slowly. A mid-size station needs a bigger panel. Use the MHPOWOS 80W Panel for stations that accept DC input."
  },
  {
    "q": "What is the biggest mistake with small panels?",
    "a": "Ignoring ports. Buying a dual USB panel and then needing a DC cable is a common letdown. Match the outputs to your gear."
  },
  {
    "q": "Is the MHPOWOS worth the extra cost over the Yosoo?",
    "a": "If you want DC, USB-C and a warranty, yes. For basic phone charging, the Yosoo 80W Panel is enough."
  },
  {
    "q": "How do I set up a foldable 80W panel?",
    "a": "Unfold it in sun, set the kickstands or hang it, and plug your device in. Keep the panel clean and in direct light. Shade across any section reduces output."
  },
  {
    "q": "How do I store a foldable panel?",
    "a": "Wipe it dry, fold along the seams and keep it in its bag. Do not store it under heavy gear. Check ports for dirt before trips."
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
