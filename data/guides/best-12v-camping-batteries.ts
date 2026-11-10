export const guideSlug = "best-12v-camping-batteries";
export const guideTitle = "5 Best 12v Camping Batteries in 2026";
export const metaTitle = "Best 12v Camping Batteries in 2026";
export const metaDescription = "Best 12V camping batteries compared on amp-hours, chemistry, built-in BMS and size, for campers powering lights, fridges and electronics off-grid.";
export const mainKeyword = "best 12v camping batteries";
export const introParagraphs = [
  "A 12V camping battery is only as useful as its amp-hours, its chemistry and the protection built in. Multiply volts by amp-hours and you get watt-hours, which is the number that tells you how long a light or a fridge will run.",
  "Five 12V batteries made the list, from a 100Ah LiFePO4 with a 100A BMS to a 7Ah sealed lead-acid. They were compared on stated capacity, cycle life, protection circuits, series or parallel limits and the devices each listing names."
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
    "id": "best-12v-camping-batteries-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "12V 100Ah LiFePO4 Lithium Battery BIC Group 31 with 100A BMS 1280Wh",
    "price": "$149.29",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41D-MVVOU-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FBRNSM3G?tag=rvgearlab-20",
    "description": "The yeagulch is a 12V 100Ah Group 31 LiFePO4 battery with a 100A BMS and 1280Wh of capacity. The listing cites up to 4,000 cycles at 100% depth of discharge, a flat discharge curve and a weight of 21.6 lbs.\n\nIt carries about eight times the energy of the 12Ah LiTime and many times the ExpertPower. Series or parallel wiring is allowed for up to four units, which the small batteries also list.\n\nIt suits campers building a real off-grid system for lights, a fridge and a small inverter. It pairs well with a solar charge controller set for LiFePO4.",
    "specs": [
      "12V 100Ah, 1280Wh",
      "100A BMS, Group 31",
      "21.6 lbs, 4,000 cycles"
    ],
    "pros": [
      "Largest capacity of the five",
      "Flat discharge curve holds voltage",
      "Listing says two thirds lighter than lead-acid",
      "Up to four units can be linked"
    ],
    "cons": [
      "Not a starting or golf cart battery",
      "Highest price of the five"
    ],
    "bestFor": "Off-grid camp systems",
    "take": "The one to buy if you are building a true camp power system.",
    "catch": "The listing says not to use it as a starting battery, so keep it on the camp side."
  },
  {
    "id": "best-12v-camping-batteries-2",
    "rank": 2,
    "badge": "Best Compact",
    "name": "LiTime 12V 12Ah Mini LiFePO4 Battery for Camping Fish Finder Toys LED",
    "price": "$62.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31U2UuZA6EL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BNKZPL6V?tag=rvgearlab-20",
    "description": "The LiTime is a 12V 12Ah mini LiFePO4 battery with a 12A BMS covering overcharge, over-discharge, current, temperature and short circuits. It lists 4000+ cycles at 100% depth of discharge and CE, RoHS and FCC certification.\n\nIt holds a little more than the 10Ah Nermak units and has a stated certification list. It works for a fish finder, LED lights and small gear.\n\nIt suits campers who power a few lights or a small speaker. The compact body sits in a gear box.",
    "specs": [
      "12V 12Ah, 12A BMS",
      "4000+ cycles at 100% DOD",
      "CE, RoHS, FCC certified"
    ],
    "pros": [
      "BMS protects against five fault types",
      "Certification list on the listing",
      "Long stated cycle life",
      "Small enough for a gear bin"
    ],
    "cons": [
      "12A BMS limits high-draw loads",
      "Too small for a fridge"
    ],
    "bestFor": "Lights and small gear",
    "take": "A small LiFePO4 with real protections for LED and fish finder use.",
    "catch": "A 12A limit means it will not run an inverter or compressor."
  },
  {
    "id": "best-12v-camping-batteries-3",
    "rank": 3,
    "badge": "Best Pair",
    "name": "Nermak 2 Pack 12V 10Ah Lithium Ion LiFePO4 Deep Cycle Battery",
    "price": "$55.57",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41IKSf30K9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09H3FG1D5?tag=rvgearlab-20",
    "description": "The Nermak gives two 12V 10Ah LiFePO4 batteries with built-in BMS, 2000+ cycles and a 5A quick charge. Each supports up to 10A continuous discharge, and up to four identical units can link in series or parallel.\n\nA pair means a spare for lights and a spare for a router or camera. Against the single LiTime, the two units give more total capacity.\n\nIt suits campers who run LED strips, a 12V router or a trail camera. The listing names RV and outdoor camping among its uses.",
    "specs": [
      "Two 12V 10Ah batteries",
      "5A charge, 10A discharge",
      "2000+ cycles, BMS"
    ],
    "pros": [
      "Two batteries in one purchase",
      "10A continuous discharge",
      "5A quick charge",
      "Link up to four units"
    ],
    "cons": [
      "10A limit rules out big loads",
      "Cycle life is shorter than the LiTime"
    ],
    "bestFor": "Lights and routers",
    "take": "A cost-effective pair for small 12V jobs at camp.",
    "catch": "Do not link units of different ages or charge levels."
  },
  {
    "id": "best-12v-camping-batteries-4",
    "rank": 4,
    "badge": "Best Portable Pack",
    "name": "Talentcell Rechargeable 12V 6000mAh/5V 12000mAh DC Output Lithium ion Battery Pack for LED Strip/CCTV Camera/T",
    "price": "$33.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41uyT5cEmEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00ME3ZH7C?tag=rvgearlab-20",
    "description": "The Talentcell is a lithium-ion pack with a 12V DC output and a 5V USB output, listed at 66.6Wh (11.1V 6000mAh). Five LED indicators show charge, and a 12.6V 1A wall charger and splitter cable come in the box.\n\nIt is the only portable pack here and the most mobile in the group. Its 12V output swings from 12.6 down to 9V, unlike the steady output of a LiFePO4 battery.\n\nIt suits campers who power a camera, LED strip or modem. A DC5521 plug connects the output.",
    "specs": [
      "66.6Wh, 12V and 5V outputs",
      "Five LED charge indicators",
      "Charger and splitter included"
    ],
    "pros": [
      "12V and 5V outputs in one pack",
      "Charge indicator with five LEDs",
      "Charger and splitter included",
      "Light enough to carry"
    ],
    "cons": [
      "12V output voltage is not constant",
      "66.6Wh limits runtime"
    ],
    "bestFor": "Cameras and LED strips",
    "take": "A grab-and-go pack for small 12V gear.",
    "catch": "Check that your device tolerates a 9 to 12.6V range."
  },
  {
    "id": "best-12v-camping-batteries-5",
    "rank": 5,
    "badge": "Best Budget",
    "name": "ExpertPower EXP1270",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rqv+Co8yL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B003S1RQ2S?tag=rvgearlab-20",
    "description": "The ExpertPower EXP1270 is a 12V 7Ah sealed lead-acid battery with F1 terminals, a maintenance-free case and a spill-proof design. It replaces a range of 1270 batteries and suits alarms, UPS units and power wheels.\n\nIt costs the least here and covers small loads for the lowest spend. LiFePO4 options hold more usable energy per pound.\n\nIt suits campers who want a cheap spare for a small light or an alarm. A rugged ABS case resists vibration.",
    "specs": [
      "12V 7Ah, SLA",
      "F1 terminals, spill-proof",
      "Rugged ABS case"
    ],
    "pros": [
      "Lowest price of the five",
      "Spill-proof, maintenance-free",
      "Fits standard F1 terminals",
      "Replaces many 1270 batteries"
    ],
    "cons": [
      "Heavier per watt-hour than lithium",
      "Short cycle life next to LiFePO4"
    ],
    "bestFor": "Cheap spare",
    "take": "A simple, cheap lead-acid for small jobs.",
    "catch": "Discharging it deeply shortens its life, so keep loads small."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity in Ah and Wh",
    "description": "Compared stated amp-hours and converted to watt-hours using the 12V rating."
  },
  {
    "title": "Chemistry and cycle life",
    "description": "Looked at LiFePO4, lithium-ion and sealed lead-acid, with stated cycle counts."
  },
  {
    "title": "Protection circuits",
    "description": "Read BMS ratings and the faults they cover."
  },
  {
    "title": "Series and parallel limits",
    "description": "Noted how many units can link."
  },
  {
    "title": "Size and weight",
    "description": "Compared dimensions and weights."
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
    "subheading": "By Load",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Fridge and inverter system",
          "yeagulch 100Ah LiFePO4",
          "1280Wh and a 100A BMS."
        ],
        [
          "LEDs and fish finder",
          "LiTime 12Ah LiFePO4",
          "12A BMS with five protections."
        ],
        [
          "Router and camera",
          "Nermak 10Ah 2-Pack",
          "Two units with 10A discharge."
        ],
        [
          "Portable 12V and USB",
          "Talentcell 12V Pack",
          "66.6Wh with 12V and 5V."
        ],
        [
          "Cheap spare",
          "ExpertPower 7Ah SLA",
          "Lowest price."
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
          "$10 to $40",
          "ExpertPower 7Ah SLA or Talentcell 12V Pack"
        ],
        [
          "$60 to $70",
          "LiTime 12Ah LiFePO4 or Nermak 10Ah 2-Pack"
        ],
        [
          "$140 to $150",
          "yeagulch 100Ah LiFePO4"
        ]
      ]
    }
  },
  {
    "subheading": "LiFePO4 vs Sealed Lead-Acid",
    "cards": [
      {
        "label": "LiFePO4",
        "text": "The yeagulch 100Ah LiFePO4, LiTime 12Ah LiFePO4 and Nermak 10Ah 2-Pack are lighter and list thousands of cycles with a BMS."
      },
      {
        "label": "Sealed lead-acid",
        "text": "The ExpertPower 7Ah SLA costs less but weighs more per watt-hour and has a shorter cycle life."
      }
    ],
    "note": "Most campers should choose LiFePO4 like the LiTime 12Ah LiFePO4, with the ExpertPower 7Ah SLA only for a cheap spare."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $25",
          "ExpertPower 7Ah SLA"
        ],
        [
          "Under $70",
          "Talentcell 12V Pack"
        ],
        [
          "Mid-range LiFePO4",
          "LiTime 12Ah LiFePO4"
        ],
        [
          "Full system",
          "yeagulch 100Ah LiFePO4"
        ]
      ]
    }
  },
  {
    "subheading": "For Camp Lighting Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A capacity of 10Ah to 12Ah and a BMS rated for the lights' current."
      },
      {
        "label": "In this comparison",
        "text": "The LiTime 12Ah LiFePO4 lists a 12A BMS and 4000+ cycles, which suits LED lights."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the yeagulch 100Ah LiFePO4 if you run a fridge or inverter."
      },
      {
        "label": "Save if",
        "text": "Save with the LiTime 12Ah LiFePO4 or ExpertPower 7Ah SLA for small loads."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Amp-hours and watt-hours",
    "explanation": "Multiply volts by amp-hours to get watt-hours: 12V times 100Ah is 1200Wh, or 1280Wh at the 12.8V LiFePO4 nominal. A 12V 10Ah battery is about 120Wh, enough for lights but not a fridge. Find the Ah in the title and compute Wh for your load."
  },
  {
    "criterion": "Chemistry",
    "explanation": "LiFePO4 offers thousands of cycles, a flat voltage curve and safer behaviour than other lithium types. Sealed lead-acid is cheaper but heavier and only gives about half its rated capacity safely. Check the listing for the chemistry name."
  },
  {
    "criterion": "BMS current rating",
    "explanation": "A battery management system cuts power when current or temperature exceeds limits. A 12A BMS will shut down under an inverter load, while 100A can run larger loads. Look for the BMS amp rating."
  },
  {
    "criterion": "Charging temperature",
    "explanation": "Most lithium batteries should not be charged below freezing unless they state low-temperature protection. Cold nights matter for a camp battery. Check whether the listing mentions a low-temperature cutoff."
  },
  {
    "criterion": "Wire gauge and fusing",
    "explanation": "High current needs thick wire and a fuse near the battery. A 100A battery on thin wire can overheat. Match the wire gauge to the load and fuse at the positive terminal."
  },
  {
    "criterion": "Series and parallel",
    "explanation": "Linking batteries raises voltage in series or capacity in parallel. Mismatched units can damage each other. Check how many identical units the listing allows."
  }
];

export const faq = [
  {
    "q": "How long will a 12V battery run my gear?",
    "a": "Divide watt-hours by the load in watts. The yeagulch 100Ah LiFePO4 holds 1280Wh, so a 50W load runs far longer than on a 12Ah battery. Leave a margin for inverter losses."
  },
  {
    "q": "What is the common mistake?",
    "a": "Using a small battery on a big load. A LiTime 12Ah LiFePO4 cannot run an inverter safely because its BMS limits current. Match battery size to load."
  },
  {
    "q": "Is LiFePO4 worth it over lead-acid?",
    "a": "For regular camping, yes. It weighs less and lists thousands of cycles. The ExpertPower 7Ah SLA suits only light, occasional use."
  },
  {
    "q": "How do I charge a 12V camp battery?",
    "a": "Use a charger or solar controller set for the chemistry. Do not charge lithium below freezing. Use a fuse and the right wire gauge."
  },
  {
    "q": "How do I store a battery?",
    "a": "Store it partly charged in a cool, dry place. Lithium packs should not sit empty. Check it every few months."
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
