export const guideSlug = "best-deep-cycle-batteries";
export const guideTitle = "6 Best Deep Cycle Batteries in 2026";
export const metaTitle = "Best Deep Cycle Batteries in 2026";
export const metaDescription = "Best deep cycle batteries for camping compared from 10Ah to 200Ah by chemistry, size and intended use, for campers sizing a power source.";
export const mainKeyword = "best deep cycle batteries";
export const introParagraphs = [
  "A deep cycle battery is built to be drained and recharged repeatedly, unlike a starter battery that delivers short bursts. For camping the first question is capacity, which here runs from a 10Ah lithium pack that powers a router to a 200Ah AGM bank for a camper.",
  "Six batteries were compared across that ladder, covering AGM and LiFePO4 chemistry. The notes below say plainly which ones are made for camp use and which are mobility or backup batteries that happen to suit small camp loads."
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
    "id": "best-deep-cycle-batteries-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Renogy 12 Volt 100Ah Deep Cycle AGM Battery",
    "price": "$166.24",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31soCn59teL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075RFXHYK?tag=rvgearlab-amz-20",
    "description": "The Renogy 100Ah is a 12V AGM battery that supports unlimited series connections and up to four in parallel. The listing names a 1100A 5-second maximum discharge, an operating range of -4 to 140 degrees F and enough output to run a fridge and a microwave.\n\nIt is the middle of the capacity ladder, with half the energy of the Renogy 200Ah and far more than the small mobility batteries. AGM construction means it needs no watering, and the listing stresses stable chemistry and minimal troubleshooting.\n\nIt suits campers building a first house battery for lights, a fridge and device charging. The 100Ah size is the usual starting point for a weekend setup.",
    "specs": [
      "12V 100Ah AGM",
      "1100A 5-second discharge",
      "-4 to 140F operating range"
    ],
    "pros": [
      "Series and parallel expansion is supported",
      "Wide temperature range is listed",
      "Sealed AGM needs no watering",
      "Powers fridge and small appliances per listing"
    ],
    "cons": [
      "Lead-acid weight is heavy",
      "Usable capacity is lower than the label"
    ],
    "bestFor": "First house battery",
    "take": "A solid 100Ah AGM battery for a weekend camp setup.",
    "catch": "Lead-acid batteries last longer if you avoid deep discharges."
  },
  {
    "id": "best-deep-cycle-batteries-2",
    "rank": 2,
    "badge": "Biggest Capacity",
    "name": "Renogy 12 Volt 200Ah Deep Cycle AGM Battery",
    "price": "$251.38",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31hWBJ9YLXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075RGX1WR?tag=rvgearlab-amz-20",
    "description": "The Renogy 200Ah is an AGM battery using thick glass mat separators and quinary alloy plates. The listing says it supports discharge currents up to 10 times its rated capacity, keeps self-discharge below 3 percent per month at 77 degrees F and performs below 32 degrees F.\n\nIt doubles the 100Ah Renogy and dwarfs the mobility batteries. Against the NERMAK lithium it offers far more energy at a lower price per amp hour.\n\nIt suits campers who plan multi-day off-grid trips with a fridge and lighting. Low self-discharge means it stores well between seasons.",
    "specs": [
      "12V 200Ah AGM",
      "Self-discharge below 3 percent a month",
      "Works below 32F"
    ],
    "pros": [
      "Largest capacity here",
      "Low monthly self-discharge",
      "Maintenance-free AGM design",
      "High discharge current for starting loads"
    ],
    "cons": [
      "Heavy single battery",
      "Costs the most of the six"
    ],
    "bestFor": "Multi-day off-grid trips",
    "take": "The biggest battery here for camps that run a fridge for several days.",
    "catch": "A 200Ah AGM is heavy, so plan for lifting and a secure mount."
  },
  {
    "id": "best-deep-cycle-batteries-3",
    "rank": 3,
    "badge": "Mid-Size Pick",
    "name": "VEVOR Deep Cycle Battery",
    "price": "$72.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JwbB+rDjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CVX7BHJ8?tag=rvgearlab-amz-20",
    "description": "The VEVOR is a 12V 40Ah AGM marine battery measuring 7.8 by 6.5 by 6.7 inches. The listing names a 400A maximum discharge within 5 seconds and sells it for mobility scooters, wheelchairs, go-karts and e-bikes.\n\nIt sits between the 20Ah UPLUS and the 100Ah Renogy and adds a marine label. Compared with the Interstate it offers more capacity at a lower price.\n\nIt suits campers running a small light and fan setup or a portable power box. Its marine rating adds some resistance to damp conditions in a boat or camper.",
    "specs": [
      "12V 40Ah AGM",
      "400A 5-second discharge",
      "7.8 x 6.5 x 6.7 inches"
    ],
    "pros": [
      "Compact size for tight spaces",
      "No maintenance needed",
      "AGM marine design resists spills",
      "Good capacity for small loads"
    ],
    "cons": [
      "Aimed at mobility, not camp banks",
      "Listing notes a high self-discharge rate"
    ],
    "bestFor": "Small portable power box",
    "take": "A compact 40Ah AGM for small camp loads like lights and fans.",
    "catch": "The title notes high self-discharge, so recharge it before storage."
  },
  {
    "id": "best-deep-cycle-batteries-4",
    "rank": 4,
    "badge": "Best Mobility Grade",
    "name": "Interstate Batteries 12V 35Ah SLA AGM Deep Cycle Battery Insert Terminal",
    "price": "$113.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YTlYD1AML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B005CLPOQM?tag=rvgearlab-amz-20",
    "description": "The Interstate DCM0035 is a 12V 35Ah sealed lead-acid AGM battery with insert terminals, made for electric wheelchairs and scooters. The listing calls it rechargeable, maintenance-free, spill-proof and valve-regulated.\n\nIt matches the VEVOR on chemistry and gives up a little capacity. Compared with the Renogy pair it targets a very different job, with a compatibility guide for named mobility brands.\n\nIt suits campers who need a dependable small AGM for a mobility device or portable setup. The 7-point quality protocol is cited in the listing.",
    "specs": [
      "12V 35Ah sealed AGM",
      "Insert terminals",
      "Spill-proof, valve-regulated"
    ],
    "pros": [
      "Spill-proof sealed design",
      "Needs no watering",
      "Named mobility compatibility guide",
      "Interstate quality protocol cited"
    ],
    "cons": [
      "Insert terminal style needs checking",
      "Mobility battery, not a camp house battery"
    ],
    "bestFor": "Mobility-grade backup",
    "take": "A sealed 35Ah AGM best known for wheelchairs, handy for small camp loads.",
    "catch": "Check the terminal style before wiring it to camp gear."
  },
  {
    "id": "best-deep-cycle-batteries-5",
    "rank": 5,
    "badge": "Compact Backup",
    "name": "UPLUS LP12-20 12V 20Ah AGM Battery",
    "price": "$35.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41e0ij+CJ1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09H1XRPYY?tag=rvgearlab-amz-20",
    "description": "The UPLUS LP12-20 is a 12V 20Ah AGM battery measuring 7.14 by 3.01 by 6.59 inches and weighing 12.46 lbs. The listing names F3 nut and bolt terminals, up to 600 cycles and uses in solar gates, emergency lighting and small solar systems.\n\nIt is the smallest lead-acid pick and costs the least of the lead-acid batteries. Against the VEVOR it halves the capacity and trims weight.\n\nIt suits campers who want a backup battery for a router, light or small fan. The F3 terminals take standard fittings.",
    "specs": [
      "12V 20Ah AGM",
      "7.14 x 3.01 x 6.59 inches",
      "Up to 600 cycles"
    ],
    "pros": [
      "Compact and light for AGM",
      "Up to 600 cycles per listing",
      "Standard F3 nut and bolt terminals",
      "Lowest price among lead-acid picks"
    ],
    "cons": [
      "Small capacity limits runtime",
      "Check fit before ordering"
    ],
    "bestFor": "Small backup power",
    "take": "A small, cheap AGM for lights, routers and backup uses.",
    "catch": "Capacity runs out quickly under any real camp load."
  },
  {
    "id": "best-deep-cycle-batteries-6",
    "rank": 6,
    "badge": "Lightest Option",
    "name": "NERMAK 12V 10Ah Lithium LiFePO4 Deep Cycle Battery with 10A BMS",
    "price": "$30.77",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VHyCoo5cL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B097BRKCQP?tag=rvgearlab-amz-20",
    "description": "The NERMAK is a 12V 10Ah LiFePO4 battery with a built-in 10A BMS and a listing that claims 2000+ cycles. It can be connected up to four in series, quick-charges at 6A, and delivers 10A continuous with 2C discharge.\n\nIt is the only lithium pick, and the title stresses how light it is. Against the AGM batteries it offers a BMS and a cycle count the lead-acid listings do not claim.\n\nIt suits campers who need a tiny reliable power source for a router, LED strip or fish finder. The listing names small UPS use under 200W.",
    "specs": [
      "12V 10Ah LiFePO4",
      "10A BMS, 2000+ cycles",
      "6A quick charge"
    ],
    "pros": [
      "Built-in BMS protection",
      "Lithium cycle life per listing",
      "Series connection supported",
      "Lowest price overall"
    ],
    "cons": [
      "Smallest capacity of the six",
      "Requires a lithium charger"
    ],
    "bestFor": "Small gear and routers",
    "take": "A tiny lithium battery for router, lights and small devices.",
    "catch": "Use a LiFePO4-compatible charger, and expect short runtimes under any load."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Amp-hour ratings from 10Ah to 200Ah were arranged as a ladder."
  },
  {
    "title": "Chemistry",
    "description": "AGM lead-acid and LiFePO4 lithium were separated."
  },
  {
    "title": "Discharge",
    "description": "Listed discharge currents and burst ratings were compared."
  },
  {
    "title": "Size and terminals",
    "description": "Dimensions, terminal types and weights were noted."
  },
  {
    "title": "Intended use",
    "description": "Camp bank, marine and mobility labels were noted."
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
    "subheading": "By Camp Load",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Fridge, lights and devices for a weekend",
          "Renogy 100Ah AGM",
          "1100A discharge and series/parallel support."
        ],
        [
          "Multi-day off-grid with a fridge",
          "Renogy 200Ah AGM",
          "200Ah with low self-discharge."
        ],
        [
          "Small fan and lights",
          "VEVOR 40Ah AGM",
          "40Ah in a compact case."
        ],
        [
          "Router and small devices",
          "NERMAK 10Ah LiFePO4",
          "10Ah lithium with a BMS."
        ],
        [
          "Backup battery",
          "UPLUS 20Ah AGM",
          "Compact 20Ah at a low price."
        ],
        [
          "Mobility device or small power box",
          "Interstate 35Ah AGM",
          "Sealed 35Ah AGM."
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
          "$30 to $40",
          "NERMAK 10Ah LiFePO4 or UPLUS 20Ah AGM"
        ],
        [
          "$70 to $120",
          "VEVOR 40Ah AGM or Interstate 35Ah AGM"
        ],
        [
          "$160 to $260",
          "Renogy 100Ah AGM or Renogy 200Ah AGM"
        ]
      ]
    }
  },
  {
    "subheading": "AGM vs LiFePO4",
    "cards": [
      {
        "label": "AGM",
        "text": "Sealed lead-acid is cheap per amp hour and heavy. The Renogy 100Ah AGM, Renogy 200Ah AGM, VEVOR 40Ah AGM, Interstate 35Ah AGM and UPLUS 20Ah AGM use it."
      },
      {
        "label": "LiFePO4",
        "text": "Lithium iron phosphate is lighter with a longer cycle life. The NERMAK 10Ah LiFePO4 is the only one here."
      }
    ],
    "note": "Pick the Renogy 100Ah AGM for a main bank and the NERMAK 10Ah LiFePO4 for small devices."
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
          "NERMAK 10Ah LiFePO4"
        ],
        [
          "Low-price AGM",
          "UPLUS 20Ah AGM"
        ],
        [
          "Mid price",
          "VEVOR 40Ah AGM"
        ],
        [
          "Big capacity",
          "Renogy 200Ah AGM"
        ]
      ]
    }
  },
  {
    "subheading": "Weekend Car Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A battery sized to your fridge and lights, a matching charger and a fuse."
      },
      {
        "label": "In this comparison",
        "text": "The Renogy 100Ah AGM covers a fridge and lights, while the VEVOR 40Ah AGM suits a small box."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Renogy 200Ah AGM if you want multi-day power for a fridge."
      },
      {
        "label": "Save if",
        "text": "Save with the UPLUS 20Ah AGM or NERMAK 10Ah LiFePO4 if you only run small devices."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Amp-hours versus runtime",
    "explanation": "Amp-hours tell you how long a battery can supply current: a 100Ah battery gives 100 amps for one hour in theory. In practice lead-acid should not be drained below about half. Check your load and plan runtime accordingly."
  },
  {
    "criterion": "AGM versus lithium",
    "explanation": "AGM batteries are sealed lead-acid, heavy and cheaper. LiFePO4 is lighter with a longer cycle life but needs a lithium-compatible charger. Check the chemistry in the title."
  },
  {
    "criterion": "Discharge current",
    "explanation": "A short burst rating such as 1100A for 5 seconds shows how well a battery handles starting loads. Camp loads are far smaller. Compare the continuous rating for your needs."
  },
  {
    "criterion": "Fusing and wiring",
    "explanation": "A battery can deliver very high current in a short circuit, so a fuse near the positive terminal is essential. Use correct cable gauge. Check terminal type before buying."
  },
  {
    "criterion": "Ventilation and charging",
    "explanation": "Lead-acid batteries can release gas during charging, so keep them ventilated. Use a charger matched to the chemistry. Look for a BMS on lithium."
  }
];

export const faq = [
  {
    "q": "What is the difference between a deep cycle and a starter battery?",
    "a": "A deep cycle battery handles repeated deep discharges. A starter battery delivers short bursts. The Renogy 100Ah AGM and Renogy 200Ah AGM are deep cycle."
  },
  {
    "q": "What is the biggest mistake?",
    "a": "Buying a battery without a matching charger. AGM and lithium need different charging profiles. Check your charger first."
  },
  {
    "q": "Is lithium worth it over AGM?",
    "a": "If weight and cycle life matter, yes. The NERMAK 10Ah LiFePO4 lists 2000+ cycles. AGM batteries like the Renogy 100Ah AGM cost less."
  },
  {
    "q": "How do I wire a deep cycle battery?",
    "a": "Use a fuse near the positive terminal, correct cable gauge and tight connections. Follow the battery's manual. Keep it ventilated."
  },
  {
    "q": "How should I store a deep cycle battery?",
    "a": "Charge it fully, disconnect loads and store it cool. The Renogy 200Ah AGM lists low self-discharge. Recharge periodically."
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
