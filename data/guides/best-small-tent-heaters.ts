export const guideSlug = "best-small-tent-heaters";
export const guideTitle = "3 Best Small Tent Heaters in 2026";
export const metaTitle = "Best Small Tent Heaters in 2026";
export const metaDescription = "Best small tent heaters compared: three compact camping heaters that run off 1 lb tanks or canisters, with fuel, output and safety notes.";
export const mainKeyword = "best small tent heaters";
export const introParagraphs = [
  "A small tent holds heat in a small volume, so a compact heater with modest BTU often does the job. The three heaters here are all hand-sized and run from a small propane or butane tank.",
  "We sorted them by tank type, stated output, ignition and any extras like a hardshell case or cooking surface. Every one burns gas, so the ventilation notes below apply to all three."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-lakeside-campsite.webp";
export const heroImageAlt = "Colorful tents pitched beside a misty mountain lake";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-small-tent-heaters-1",
    "rank": 1,
    "badge": "Best Compact Dual-Fuel",
    "name": "INTCOLL Portable 1 lb Propane & Iso-Butane Heater",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Iytj3+yLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F9FFYZPS?tag=rvgearlab-amz-20",
    "description": "The Intcoll heater works with 1 lb propane tanks and ISO-butane canisters, with an included connector. A one-click self-ignition button, a foldable anti-tip base and a hardshell carrying case come with it.\n\nNext to the Caynel and GasCalorix it adds a hard case and a 12-month warranty. Its listing alone names an anti-tip base.\n\nIt suits a backpacker or car camper with a small tent. The stable base and easy light make it simple to use.",
    "specs": [
      "1 lb propane or ISO-butane",
      "Self-ignition, anti-tip base",
      "Hardshell case, 12-month warranty"
    ],
    "pros": [
      "Works with propane or ISO-butane",
      "One-click self-ignition",
      "Foldable anti-tip base for stability",
      "Hardshell case for travel"
    ],
    "cons": [
      "No BTU figure on the listing",
      "Gas heater still needs ventilation"
    ],
    "bestFor": "Backpacking and small tents",
    "take": "A stable, easy-to-light dual-fuel heater with a hard case.",
    "catch": "The listing gives no heat output, so judge it by tank size and tent volume."
  },
  {
    "id": "best-small-tent-heaters-2",
    "rank": 2,
    "badge": "Best Heater and Stove",
    "name": "Caynel 2 in 1 Portable Propane Heater and Stove",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KpkiJFv1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CH7V9JMJ?tag=rvgearlab-amz-20",
    "description": "The Caynel is a 2-in-1 portable propane heater and stove with a maximum output of up to 9000 BTU. It lists a cooking temperature range of 935 to 1110 degrees F and an adjustable fire valve.\n\nIt carries the lowest price tag and is the only one that cooks as well as heats. The 9000 BTU headline figure is the highest stated here, as the other two listings give no BTU number.\n\nIt suits a minimalist who wants one small unit. It warms hands and heats a meal.",
    "specs": [
      "Up to 9000 BTU",
      "2-in-1 heater and stove",
      "Adjustable fire valve"
    ],
    "pros": [
      "Heats and cooks in one unit",
      "Highest stated BTU in this list",
      "Adjustable fire valve",
      "Lowest price of the three"
    ],
    "cons": [
      "Open flame demands extra care",
      "Cooking use needs a safe surface"
    ],
    "bestFor": "Solo campers, heat and cook",
    "take": "The cheapest way to carry a heater and a mini stove.",
    "catch": "The 9000 BTU peak is a maximum, so it burns fuel fast at full output."
  },
  {
    "id": "best-small-tent-heaters-3",
    "rank": 3,
    "badge": "Best Guarded Heater",
    "name": "Portable Propane Heater for Camping Outdoor",
    "price": "$31.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413iaJZoriL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FF9W8WCW?tag=rvgearlab-amz-20",
    "description": "The GasCalorix is a radiant propane heater that the listing says reaches up to 200 square feet with two heat settings on a control knob. It uses 1 lb propane tanks, which are not included, and has a protective front grill.\n\nCompared with the Intcoll it adds a front grill and a cylinder stand without listing butane. It costs more than the Intcoll or Caynel.\n\nIt suits a camper who wants a guarded radiant face. The listing says to use it in well-ventilated areas.",
    "specs": [
      "Radiant, up to 200 sq ft",
      "Two heat settings",
      "Front grill, cylinder stand"
    ],
    "pros": [
      "Protective grill covers the heater face",
      "Two heat settings on one knob",
      "Cylinder stand keeps the tank upright",
      "Quick heating claimed"
    ],
    "cons": [
      "Tanks sold separately",
      "Propane only, no butane option"
    ],
    "bestFor": "Radiant warmth with a guard",
    "take": "A guarded, simple propane heater.",
    "catch": "The 200 square foot figure is for open space, so run it low in a small tent."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fuel and tank size",
    "description": "We compared the 1 lb propane and butane options and any connector needed."
  },
  {
    "title": "Stated heat output",
    "description": "BTU figures were noted where the listing gave them."
  },
  {
    "title": "Ignition and stability",
    "description": "Self-ignition, anti-tip bases and cylinder stands were compared."
  },
  {
    "title": "Carry case and size",
    "description": "Cases and compact designs were noted for packing."
  },
  {
    "title": "Price",
    "description": "Cost was set against output and features."
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
    "subheading": "By Tent Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Solo tent, wants stability",
          "Intcoll Dual Fuel Heater",
          "Anti-tip base and one-click ignition."
        ],
        [
          "Two-person tent, wants a stated number",
          "Caynel 2-in-1 Heater",
          "Lists up to 9000 BTU."
        ],
        [
          "Solo camper who also cooks",
          "Caynel 2-in-1 Heater",
          "Heater and stove up to 9000 BTU."
        ],
        [
          "Wants a guard grill",
          "GasCalorix Propane Heater",
          "Front grill and a cylinder stand."
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
          "Caynel 2-in-1 Heater"
        ],
        [
          "$20 to $30",
          "Intcoll Dual Fuel Heater"
        ],
        [
          "$30 to $40",
          "GasCalorix Propane Heater"
        ]
      ]
    }
  },
  {
    "subheading": "Dual-Fuel vs Propane-Only",
    "cards": [
      {
        "label": "Dual-fuel",
        "text": "Intcoll Dual Fuel Heater accepts both propane and ISO-butane, so you can use whatever canister you find."
      },
      {
        "label": "Propane-only",
        "text": "GasCalorix Propane Heater and Caynel 2-in-1 Heater run on propane, which burns stronger in cold."
      }
    ],
    "note": "Most small-tent campers should default to Intcoll Dual Fuel Heater for flexibility."
  },
  {
    "subheading": "By Extras",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Hard case for travel",
          "Intcoll Dual Fuel Heater"
        ],
        [
          "Cooking too",
          "Caynel 2-in-1 Heater"
        ],
        [
          "Lowest price",
          "Caynel 2-in-1 Heater"
        ],
        [
          "Cylinder stand and grill",
          "GasCalorix Propane Heater"
        ]
      ]
    }
  },
  {
    "subheading": "For Solo Backpackers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A small tank, a stable base and a case that protects it in the pack."
      },
      {
        "label": "In this comparison",
        "text": "Intcoll Dual Fuel Heater packs in a hardshell case with a foldable base, which suits a pack better than a loose heater."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more for a guarded face, since GasCalorix Propane Heater adds a front grill and cylinder stand over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "Save if you want one small tool for heat and a hot meal, because Caynel 2-in-1 Heater is the cheapest."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Tent volume and BTU",
    "explanation": "A small two-person tent holds far less air than the 200 square foot open-space claim on some listings. A modest 2,000 to 4,000 BTU is often enough, and a larger number just burns fuel faster. Look for the BTU figure and match it to the tent."
  },
  {
    "criterion": "Ventilation first",
    "explanation": "Gas heaters use the air inside the tent and release exhaust into it. Open a vent or a door flap and use a battery carbon monoxide alarm. The listings only advise well-ventilated use, so the rule is on you."
  },
  {
    "criterion": "Tank type and cold",
    "explanation": "A 1 lb propane tank works better in cold than butane, because butane loses pressure as the temperature drops. Some heaters take both. Check which fuels your heater lists."
  },
  {
    "criterion": "Stability on a tent floor",
    "explanation": "A tipped heater is a fire risk near fabric. A foldable anti-tip base or cylinder stand helps. Look for it in the listing."
  },
  {
    "criterion": "Ignition ease",
    "explanation": "A built-in ignition saves fumbling with a lighter in cold hands, and a push button is easier to work in gloves. Check for it on the listing before you rely on a separate lighter. Cold gloves make a small lighter hard to work."
  },
  {
    "criterion": "Heat and cook in one",
    "explanation": "A heater with a cooking top saves a stove but adds a flame near your gear. Use it outside or in a vestibule. Check whether the listing states a cooking range."
  }
];

export const faq = [
  {
    "q": "Is it safe to run a small gas heater in a tent?",
    "a": "The listings advise ventilation and name no tent-specific rating. Burning gas uses the tent's air and releases exhaust inside, so a carbon monoxide alarm and open vents are needed. Many campers use a small heater only to pre-warm a tent before bed."
  },
  {
    "q": "What size tent can a small heater warm?",
    "a": "A compact heater suits a solo or two-person tent best. A larger tent can lose heat faster than the heater supplies it. Match BTU to tent volume."
  },
  {
    "q": "Is dual-fuel worth it over propane-only?",
    "a": "Dual-fuel lets you use butane when propane is not at hand, as with Intcoll. Propane-only models are simpler and often hotter in cold weather. The choice depends on fuel availability."
  },
  {
    "q": "How do I attach the tank?",
    "a": "Screw the 1 lb tank or canister onto the connector until snug, following the listing. Use the adapter if the heater needs one. Light it outdoors."
  },
  {
    "q": "How do I keep a gas heater working in cold weather?",
    "a": "Keep the tank warm, as butane loses pressure when it gets cold. Store it inside a jacket before use. Check the fuel level before the night."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Tents",
    "href": "/tents-shelter/best-camping-tents"
  },
  {
    "title": "Best Tent Stakes",
    "href": "/tents-shelter/best-tent-stakes"
  },
  {
    "title": "Best 4 Season Tent Under 200",
    "href": "/tents-shelter/best-4-season-tent-under-200"
  },
  {
    "title": "Best 4 Season Tent Under 300",
    "href": "/tents-shelter/best-4-season-tent-under-300"
  }
];
