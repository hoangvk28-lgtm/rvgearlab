export const guideSlug = "best-12v-deep-cycle-batteries";
export const guideTitle = "3 Best 12v Deep Cycle Batteries in 2026";
export const metaTitle = "Best 12v Deep Cycle Batteries in 2026";
export const metaDescription = "Best 12V deep cycle batteries compared on chemistry, group size and charging needs, for campers building a 12V house battery bank.";
export const mainKeyword = "best 12v deep cycle batteries";
export const introParagraphs = [
  "Twelve volts is the language of RV, van and tent-camp electronics, so a 12V deep cycle battery drops into lighting, fridges and inverters without a converter. The real choice is between a heavy AGM and a lighter lithium LiFePO4, and between one big battery and a pair.",
  "Three batteries cover that choice: a 200Ah AGM, a 100Ah lithium in a Group 31 case and a two-pack of Group 24 100Ah lithium batteries. They were compared on capacity, size, weight, charging profile and the temperature limits each listing states."
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
    "id": "best-12v-deep-cycle-batteries-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "12V 100Ah LiFePO4 Lithium Battery Group 31 Deep Cycle for RV Trolling Motor",
    "price": "$146.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41LTEgM99JL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FP525PFP?tag=rvgearlab-20",
    "description": "Built as a Group 31 lithium iron phosphate unit, the VEMDIA stores 100Ah at 12V, weighs 24 lbs and carries a 100A smart BMS. The listing claims 15,000+ cycles at 60 percent depth of discharge and 8,000+ cycles at 80 percent, a 5-hour charge with a 14.6V 20A charger and discharge from -4 to 140 degrees F.\n\nIt is the lowest-priced lithium here, and the listing says it is 70 percent lighter than comparable lead-acid. Against the SUPER EMPOWER pair it is one battery in a larger Group 31 shape, so measure the box before ordering.\n\nIt suits campers who want a single drop-in lithium battery for a van or camp bank. Smart BMS protections cover overcharge, over-discharge, over-current and short circuits.",
    "specs": [
      "12V 100Ah LiFePO4, Group 31",
      "100A smart BMS",
      "24 lbs, 15,000+ cycles at 60 percent"
    ],
    "pros": [
      "Lowest price among lithium picks",
      "Light for 100Ah at 24 lbs",
      "Smart BMS covers common faults",
      "Charges in about 5 hours at 20A"
    ],
    "cons": [
      "Group 31 case needs a big enough box",
      "Requires a lithium-profile charger"
    ],
    "bestFor": "Single lithium house battery",
    "take": "A lighter, long-cycle 100Ah lithium for a van or camp setup.",
    "catch": "The Group 31 size may not fit a Group 24 battery box."
  },
  {
    "id": "best-12v-deep-cycle-batteries-2",
    "rank": 2,
    "badge": "Best Two-Pack",
    "name": "12V 100Ah LiFePO4 Battery",
    "price": "$349.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xsrlCtKOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FN4BYHNX?tag=rvgearlab-20",
    "description": "The SUPER EMPOWER set is two 12.8V 100Ah LiFePO4 batteries in BCI Group 24 size, each 6.49 by 10.24 by 8.98 inches and 21.6 lbs with M8 terminals. The listing recommends a 14.4 to 14.6V lithium charger, MPPT or PWM solar in lithium mode and a low-temperature function that pauses charging below 32 degrees F.\n\nTwo batteries make up 200Ah in parallel, the same nominal size as the Renogy, with each battery weighing 21.6 lbs. It is also the only pick with a stated low-temperature charge cutoff.\n\nIt suits campers who want lithium in a standard Group 24 size, or who plan to build a 200Ah bank. Charging resumes once the battery warms above 41 degrees F.",
    "specs": [
      "2 x 12.8V 100Ah Group 24",
      "M8 terminals, 21.6 lbs each",
      "Low-temp charge cutoff at 32F"
    ],
    "pros": [
      "Two batteries give 200Ah in parallel",
      "Group 24 fits many existing boxes",
      "Low-temperature charge protection",
      "Lithium charger and solar profiles are listed"
    ],
    "cons": [
      "Higher price for the pair",
      "Needs a lithium charger and matched wiring"
    ],
    "bestFor": "200Ah lithium bank",
    "take": "A pair of Group 24 lithium batteries for a bank or two separate loads.",
    "catch": "Wire the two batteries with equal cable lengths so they share current."
  },
  {
    "id": "best-12v-deep-cycle-batteries-3",
    "rank": 3,
    "badge": "Best Single Large Battery",
    "name": "Renogy 12 Volt 200Ah Deep Cycle AGM Battery",
    "price": "$251.38",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31hWBJ9YLXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075RGX1WR?tag=rvgearlab-20",
    "description": "The Renogy 200Ah is a 12V AGM battery with quinary alloy plates, a monthly self-discharge listed below 3 percent at 77 degrees F, and performance below 32 degrees F. The listing says it handles discharge currents up to 10 times its capacity.\n\nIt matches the SUPER EMPOWER pair on 200Ah of nominal capacity in a single case at the lowest price per amp hour. Against the lithium picks it is much heavier and needs depth-of-discharge discipline.\n\nIt suits campers who want the lowest cost for a large 12V bank and are comfortable with the weight. AGM construction means no watering.",
    "specs": [
      "12V 200Ah AGM",
      "Under 3 percent monthly self-discharge",
      "Works below 32F"
    ],
    "pros": [
      "Lowest cost per amp hour here",
      "One battery gives 200Ah",
      "Sealed AGM needs no watering",
      "Low self-discharge for storage"
    ],
    "cons": [
      "Heavy single battery",
      "Usable capacity is less than the label"
    ],
    "bestFor": "Large budget bank",
    "take": "A big, simple AGM for campers who want maximum amp hours per dollar.",
    "catch": "It is heavy, so plan the mounting and lifting before buying."
  }
];

export const howWeEvaluated = [
  {
    "title": "Chemistry",
    "description": "LiFePO4 and AGM were compared on weight, cycle claims and charging."
  },
  {
    "title": "Capacity",
    "description": "Amp-hour ratings and pack sizes were arranged by total available capacity."
  },
  {
    "title": "Group size",
    "description": "BCI Group 24 and Group 31 dimensions were noted for box fit."
  },
  {
    "title": "Charging",
    "description": "Listed charge voltage, charge time and temperature cutoffs were compared."
  },
  {
    "title": "BMS and protection",
    "description": "Smart BMS ratings and protections were noted."
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
    "subheading": "By Camp Bank Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "100Ah single battery",
          "VEMDIA 100Ah Group 31",
          "24 lbs with a smart BMS."
        ],
        [
          "200Ah bank in two batteries",
          "SUPER EMPOWER 2-Pack",
          "Two Group 24 batteries."
        ],
        [
          "200Ah in one battery, lowest cost",
          "Renogy 200Ah AGM",
          "200Ah in one case."
        ],
        [
          "Cold-weather camping",
          "SUPER EMPOWER 2-Pack",
          "Low-temperature charge cutoff."
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
          "$140 to $150",
          "VEMDIA 100Ah Group 31"
        ],
        [
          "$250 to $260",
          "Renogy 200Ah AGM"
        ],
        [
          "$340 to $350",
          "SUPER EMPOWER 2-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Lithium vs AGM",
    "cards": [
      {
        "label": "Lithium",
        "text": "LiFePO4 is lighter with a longer stated cycle life and needs a lithium charger. The VEMDIA 100Ah Group 31 and SUPER EMPOWER 2-Pack are lithium."
      },
      {
        "label": "AGM",
        "text": "AGM is heavy and cheap per amp hour, and tolerant of charger choices. The Renogy 200Ah AGM is the AGM option."
      }
    ],
    "note": "Pick the VEMDIA 100Ah Group 31 for one battery and the Renogy 200Ah AGM for maximum capacity per dollar."
  },
  {
    "subheading": "By Weight Priority",
    "table": {
      "headers": [
        "Priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lightest per battery",
          "SUPER EMPOWER 2-Pack"
        ],
        [
          "Single light battery",
          "VEMDIA 100Ah Group 31"
        ],
        [
          "Weight is not a concern",
          "Renogy 200Ah AGM"
        ]
      ]
    }
  },
  {
    "subheading": "Van or Camper Conversion Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A group size that fits your box, a charge profile your charger supports and a BMS."
      },
      {
        "label": "In this comparison",
        "text": "The SUPER EMPOWER 2-Pack fits Group 24 boxes, and the VEMDIA 100Ah Group 31 fits larger ones."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the SUPER EMPOWER 2-Pack if you want lithium and a 200Ah bank."
      },
      {
        "label": "Save if",
        "text": "Save with the Renogy 200Ah AGM if you want the most amp hours per dollar."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Chemistry and weight",
    "explanation": "LiFePO4 is much lighter than lead-acid for the same label capacity, and the VEMDIA listing claims 70 percent lighter. AGM costs less per amp hour. Look at the listed weight."
  },
  {
    "criterion": "Group size and box fit",
    "explanation": "A BCI group size such as Group 24 or 31 sets the case footprint. A mismatched size will not fit an existing box. Measure the box against the listing."
  },
  {
    "criterion": "Charge profile",
    "explanation": "Lithium needs a charger set to about 14.4 to 14.6V, while AGM uses a different profile. A mismatched charger can undercharge or damage the battery. Check the listing for charge voltage."
  },
  {
    "criterion": "Cold-weather charging",
    "explanation": "Lithium batteries should not be charged below freezing, so some packs have a cutoff. The SUPER EMPOWER listing states 32 degrees F. Check this if you camp in the cold."
  },
  {
    "criterion": "Fusing, BMS and ventilation",
    "explanation": "A BMS protects against overcharge and short circuits but does not replace a fuse near the battery. AGM can vent gas, so keep it ventilated. Use correct cable gauge."
  }
];

export const faq = [
  {
    "q": "Can I mix AGM and lithium batteries?",
    "a": "No. They charge differently, so keep each bank to one chemistry. The Renogy 200Ah AGM and the lithium batteries should not be paralleled."
  },
  {
    "q": "What is the biggest mistake?",
    "a": "Using the wrong charger. Lithium needs about 14.4 to 14.6V, and AGM needs its own profile. Check the listing."
  },
  {
    "q": "Is lithium worth the extra money?",
    "a": "If weight and cycle life matter, yes. The VEMDIA 100Ah Group 31 lists 15,000+ cycles at 60 percent. The Renogy 200Ah AGM costs far less per amp hour."
  },
  {
    "q": "How do I wire two 12V batteries in parallel?",
    "a": "Connect positive to positive and negative to negative with equal-length cables, and add a fuse. Follow the SUPER EMPOWER 2-Pack instructions. Keep connections tight."
  },
  {
    "q": "How should I store a deep cycle battery?",
    "a": "Store it charged, cool and disconnected from loads. Recharge periodically. The Renogy 200Ah AGM lists low self-discharge."
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
