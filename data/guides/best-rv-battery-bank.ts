export const guideSlug = "best-rv-battery-bank";
export const guideTitle = "4 Best RV Battery Bank in 2026";
export const metaTitle = "Best RV Battery Bank in 2026";
export const metaDescription = "RV battery bank picks for real expansion: Power Queen 200Ah, Redodo 320Ah Mini, Renogy 200Ah AGM and a VMAX 6V pair compared on usable energy and bank wiring.";
export const mainKeyword = "best rv battery bank";
export const introParagraphs = [
  "A battery bank is more than a bigger battery. It is the decision of how many volts, which chemistry and how you will wire it, because series strings and parallel strings fail in different ways. We picked four options that cover the main paths: one large 12V lithium, a compact 320Ah lithium, a 200Ah AGM and a pair of 6V golf cart style AGMs. For each one we focus on usable energy, expansion limits and the hidden wiring cost of building a bank."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41rltUYpeuL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-battery-bank-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Power Queen 12V 200Ah PLUS LiFePO4 Lithium Battery with 200A BMS for RV",
    "price": "$439.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rltUYpeuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09FSYCXGS?tag=rvgearlab-amz-20",
    "description": "The Power Queen 12V 200Ah PLUS stores 2,560Wh in roughly 55 lbs and carries a 200A BMS. The listing claims up to 95% usable capacity and lets you connect up to 4 in series (48V) or 4 in parallel (800Ah), which makes it a flexible base for a growing bank.\n\nAt $439.99 it is $143.69 above the Renogy AGM, but the usable energy is far higher. It costs $250.00 less than the Redodo 320Ah, though with 120Ah less capacity. Pick this if you want a bank you can add to later. Caveat: the listing does not give dimensions, so measure space against the actual size.",
    "specs": [
      "12V 200Ah, 2,560Wh",
      "200A BMS, about 55 lb",
      "Expands to 4P or 4S"
    ],
    "pros": [
      "2,560Wh in about 55 lbs, light for the energy",
      "Expands to 800Ah with four in parallel",
      "Up to 95% usable capacity per the listing"
    ],
    "cons": [
      "Dimensions are not stated",
      "$143.69 more than a 200Ah AGM"
    ],
    "bestFor": "A bank you plan to expand"
  },
  {
    "id": "best-rv-battery-bank-2",
    "rank": 2,
    "badge": "Best Compact",
    "name": "Redodo 12V 320Ah Mini LiFePO4 RV Battery",
    "price": "$689.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tHhe5UyzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GFN1FXN1?tag=rvgearlab-amz-20",
    "description": "The Redodo 12V 320Ah Mini LiFePO4 is sized 32% smaller than standard 300Ah batteries and the listing says one unit replaces six 12V 100Ah lead acid batteries. It claims 1kWh per day for 4 days and 4,000 to 15,000 cycles, with Bluetooth monitoring of voltage and state of charge.\n\nIt costs $250.00 more than the Power Queen 200Ah and gives 120Ah more capacity in one case, which means no parallel wiring. Pick this if you have one compartment and want the biggest single battery. Caveat: one big battery is a single point of failure, unlike a bank of two.",
    "specs": [
      "12V 320Ah Mini LiFePO4",
      "32% smaller than 300Ah",
      "Bluetooth, 4,000 to 15,000 cycles"
    ],
    "pros": [
      "320Ah in one case avoids parallel wiring",
      "Listing says it replaces six 100Ah lead acid",
      "Bluetooth shows voltage and state of charge"
    ],
    "cons": [
      "Costs $250.00 more than the Power Queen",
      "One battery means one point of failure"
    ],
    "bestFor": "One compartment, maximum capacity"
  },
  {
    "id": "best-rv-battery-bank-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "Renogy 12 Volt 200Ah Deep Cycle AGM Battery",
    "price": "$296.30",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31hWBJ9YLXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075RGX1WR?tag=rvgearlab-amz-20",
    "description": "The Renogy 12V 200Ah AGM is a sealed deep cycle battery with a self discharge rate below 3% at 77F and a listed ability to deliver up to 10 times its rated capacity in amps. At $296.30 it is the cheapest route to 200Ah.\n\nCompared with the Power Queen 200Ah it is $143.69 cheaper, but lead acid normally gives about half its rating, so 200Ah behaves like roughly 100Ah. Pick this if your converter charges lead acid only and you rarely dry camp. Caveat: the listing gives no weight, and a 200Ah AGM is very heavy.",
    "specs": [
      "12V 200Ah AGM",
      "Under 3% monthly self discharge",
      "Maintenance free, sealed"
    ],
    "pros": [
      "Cheapest way to reach 200Ah at $296.30",
      "Sealed AGM needs no watering or venting care",
      "Low self discharge keeps charge in storage"
    ],
    "cons": [
      "Only about 100Ah usable before wear speeds up",
      "Weight is not listed and will be high"
    ],
    "bestFor": "Tight budgets and lead acid chargers"
  },
  {
    "id": "best-rv-battery-bank-4",
    "rank": 4,
    "badge": "Best for Series Banks",
    "name": "Qty 2: VMAX XTR6-235 6 Volt 235Ah Group GC2 AGM Deep Cycle Battery. Capacity: 235Ah; Energy: 1.62kWH Each; Res",
    "price": "$739.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41nSq2FiOxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07GZWMGZ2?tag=rvgearlab-amz-20",
    "description": "The VMAX XTR6-235 listing is for two 6V Group GC2 AGM batteries, each 235Ah and 1.62kWh. Wired in series they form a 12V bank with 235Ah, and at $739.98 for the pair they are the most expensive pick here.\n\nThey cost $299.99 more than the Power Queen 200Ah yet need a lead acid charge profile and heavy interconnect cables. Pick this if you already run 6V golf cart style batteries and want a proven series layout. Caveat: you must replace both together, and the pair is heavy and tall.",
    "specs": [
      "Two 6V 235Ah GC2 AGM",
      "1.62kWh each per title",
      "Series wired to 12V"
    ],
    "pros": [
      "Two 6V batteries wired in series give 12V 235Ah",
      "Golf cart size is easy to add as a matching pair",
      "Sealed AGM design needs no watering"
    ],
    "cons": [
      "Costs $299.99 more than the Power Queen 200Ah",
      "Pair is heavy and needs series interconnect cables"
    ],
    "bestFor": "6V series banks with a lead acid charger"
  }
];

export const howWeEvaluated = [
  {
    "title": "Usable energy",
    "description": "We compared listed watt hours against the depth of discharge the chemistry safely allows."
  },
  {
    "title": "Expansion path",
    "description": "We checked the series and parallel limits stated in each listing before calling a pick bank ready."
  },
  {
    "title": "Wiring and weight",
    "description": "We weighed case count, listed weights and the cable complexity each layout needs."
  },
  {
    "title": "Charger match",
    "description": "We noted which picks need a lithium charge profile versus a lead acid one."
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
    "subheading": "By Daily Energy Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Under 1kWh a day, weekend trips",
          "Renogy AGM 200Ah",
          "Cheap, about 100Ah usable"
        ],
        [
          "1 to 2.5kWh a day, planning to grow",
          "Power Queen 200Ah",
          "2,560Wh and expandable to 800Ah"
        ],
        [
          "Around 3kWh a day, one compartment",
          "Redodo 320Ah Mini",
          "320Ah in one compact case"
        ],
        [
          "Already own 6V golf cart batteries",
          "VMAX 6V Pair",
          "Series pair makes a 12V 235Ah bank"
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
          "$290 to $440",
          "Renogy AGM 200Ah or Power Queen 200Ah"
        ],
        [
          "$680 to $740",
          "Redodo 320Ah Mini or VMAX 6V Pair"
        ]
      ]
    }
  },
  {
    "subheading": "Series vs Parallel",
    "cards": [
      {
        "label": "Series (raise voltage)",
        "text": "VMAX 6V Pair uses series wiring: two 6V batteries make 12V, and a mismatch between them can cause uneven charging."
      },
      {
        "label": "Parallel (add Ah)",
        "text": "Power Queen 200Ah can be paralleled up to four units for 800Ah at 12V, so each added battery is independent and easy to swap."
      }
    ],
    "note": "Most RVers should default to parallel lithium unless they already own a 6V string."
  },
  {
    "subheading": "By Charge Source",
    "table": {
      "headers": [
        "Best pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Converter only charges lead acid",
          "Renogy AGM 200Ah"
        ],
        [
          "Lithium capable inverter charger",
          "Power Queen 200Ah"
        ],
        [
          "Solar controller with LiFePO4 mode",
          "Redodo 320Ah Mini"
        ],
        [
          "Existing lead acid golf cart charger",
          "VMAX 6V Pair"
        ]
      ]
    }
  },
  {
    "subheading": "For Running an Inverter Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Enough bank current to feed the inverter. A 2,000W inverter pulls roughly 170A from a 12V bank, so check the battery's BMS or discharge rating."
      },
      {
        "label": "In this comparison",
        "text": "Power Queen 200Ah lists a 200A BMS, which covers a 2,000W inverter. Redodo 320Ah Mini adds capacity but its listing excerpt gives no continuous current."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Redodo 320Ah Mini if you only have one compartment and need the most energy per case."
      },
      {
        "label": "Save if",
        "text": "Save with Renogy AGM 200Ah if your use is occasional and your charger only supports lead acid."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Series or parallel layout",
    "explanation": "Series wiring adds voltage and parallel wiring adds amp hours, and your inverter and charger must match the result. Mixing them up can send the wrong voltage to your RV systems. Check the manual to see the maximum series and parallel count: Power Queen 200Ah lists 4S or 4P."
  },
  {
    "criterion": "Usable depth of discharge",
    "explanation": "Lead acid lasts longest when kept above about 50%, while LiFePO4 can be discharged 80% to 100% regularly. A 200Ah AGM therefore delivers about 100Ah, while a 200Ah lithium delivers closer to 190Ah. Look for the cycle life stated at 100% depth in the listing."
  },
  {
    "criterion": "BMS continuous current",
    "explanation": "The battery management system (BMS) caps how many amps the battery can deliver, and an inverter that asks for more will trip it. At 12V, 2,000W needs roughly 170A or more. Compare the BMS rating, such as the 200A on Power Queen 200Ah, with your biggest load."
  },
  {
    "criterion": "Cable and fuse cost",
    "explanation": "A bank with more current needs thicker cables, bus bars and class T fuses, which can add $100 or more. Undersized wire drops voltage and heats up. Plan the cable run before choosing a battery, and size wire to the BMS limit."
  },
  {
    "criterion": "Weight and placement",
    "explanation": "A heavy bank placed in the wrong spot changes axle load and tongue weight. Lithium like the Power Queen 200Ah is about 55 lbs for 2,560Wh, while AGM listings often do not give weight. Look for a stated weight and confirm the mounting area can hold it."
  }
];

export const faq = [
  {
    "q": "How much bank do I need to run an RV fridge and lights?",
    "a": "A 12V compressor fridge and LED lights usually need about 40 to 80Ah per day. A single Power Queen 200Ah covers that with room to spare."
  },
  {
    "q": "Can I add more batteries later?",
    "a": "Yes, if you stay with the same model and age. Power Queen 200Ah lists up to four in parallel or series."
  },
  {
    "q": "Are 6V batteries better than 12V for a bank?",
    "a": "They are cheaper per amp hour in lead acid and common in golf carts, but they need series wiring. The VMAX pair is a good example."
  },
  {
    "q": "Will a 320Ah battery fit a standard battery tray?",
    "a": "Probably not. Redodo 320Ah Mini is 32% smaller than standard 300Ah batteries but still larger than a Group 24."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best RV Battery For Pop Up Camper",
    "href": "/power-electrical/best-rv-battery-for-pop-up-camper"
  },
  {
    "title": "Best RV Battery For Travel Trailer",
    "href": "/power-electrical/best-rv-battery-for-travel-trailer"
  },
  {
    "title": "Best Flooded Lead Acid RV Battery",
    "href": "/power-electrical/best-flooded-lead-acid-rv-battery"
  },
  {
    "title": "Best Group 24 RV Battery",
    "href": "/power-electrical/best-group-24-rv-battery"
  }
];
