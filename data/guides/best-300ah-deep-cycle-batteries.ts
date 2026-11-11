export const guideSlug = "best-300ah-deep-cycle-batteries";
export const guideTitle = "6 Best 300Ah Deep Cycle Batteries in 2026";
export const metaTitle = "Best 300Ah Deep Cycle Batteries in 2026";
export const metaDescription = "Best 300Ah deep cycle batteries compared on BMS rating, cold-charging protection, size and expansion, for campers building a large LiFePO4 bank.";
export const mainKeyword = "best 300ah deep cycle batteries";
export const introParagraphs = [
  "A 300Ah battery stores about 3840Wh at 12V, enough to run a 50W camp fridge for days or feed an inverter that powers a coffee maker and a few small appliances. At that size, the choice between LiFePO4 models comes down to BMS current, cold-charge protection, physical dimensions and how easily you can add a second battery.",
  "Six 300Ah LiFePO4 batteries are compared here, five at 12V and one 24V model. Each was judged on the BMS rating it lists, low-temperature behavior, size and weight where stated, and expansion options."
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
    "id": "best-300ah-deep-cycle-batteries-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Redodo 12V 300Ah Deep Cycle LiFePO4 Battery",
    "price": "$519.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41eYvt2pK8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F13LXMG2?tag=rvgearlab-amz-20",
    "description": "The Redodo lists 12V 300Ah capacity at 3.84kWh, with 2560W continuous output and five BMS protections. It is designed to replace six 12V 100Ah AGM batteries in a Group 6D size battery box, and up to 16 units can be linked for a 61.44kWh system.\n\nAgainst the TEMGO 300Ah, it states a continuous output figure and a clear drop-in size reference. Compared with the ECOBOSS 300Ah, it focuses on fridge runtime and appliance loads rather than cycle count.\n\nIt suits a camper replacing a stack of lead-acid batteries who wants one drop-in bank. The listing's 3-day fridge runtime example makes the capacity easy to picture.",
    "specs": [
      "12V 300Ah, 3.84kWh",
      "2560W continuous output",
      "Group 6D size box fit"
    ],
    "pros": [
      "Drop-in size for a Group 6D box",
      "2560W continuous output is listed",
      "Five BMS protections are named",
      "Expandable up to 16 units"
    ],
    "cons": [
      "Pricier than the other 12V 300Ah picks",
      "Costs far more than the NebuQuic"
    ],
    "bestFor": "Replacing multiple lead-acid batteries",
    "take": "A confident main bank for a camper going all-in on lithium. The drop-in size and 2560W output make it practical.",
    "catch": "Costs more than the budget 300Ah picks."
  },
  {
    "id": "best-300ah-deep-cycle-batteries-2",
    "rank": 2,
    "badge": "Best Monitoring",
    "name": "TEMGO 12V 300Ah LiFePO4 Lithium Battery with Blutooth & APP Monitoring Rechargeable 3840Wh Energy",
    "price": "$454.85",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41lene1Uy0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C6XK8GBG?tag=rvgearlab-amz-20",
    "description": "The TEMGO lists 12V 300Ah LiFePO4 at 3840Wh with a 200A BMS, Bluetooth and app monitoring, and low-temperature protection. It weighs 54.67 lbs, about a third of a lead-acid battery of similar capacity, and can mount in any position.\n\nCompared with the Redodo 300Ah, it adds Bluetooth monitoring and costs less. Against the ECOBOSS 300Ah, it lists a weight figure and mounting flexibility.\n\nIt fits a camper who wants to watch state of charge from a phone. The any-position mount helps in tight van or boat installs.",
    "specs": [
      "12V 300Ah, 3840Wh",
      "200A BMS with Bluetooth",
      "54.67 lb weight listed"
    ],
    "pros": [
      "Bluetooth app tracks battery status",
      "Weighs 54.67 lbs",
      "Can be mounted in any position",
      "200A BMS covers overcharge and short circuit"
    ],
    "cons": [
      "Listing cites a 1-year service life",
      "Higher price than the budget picks"
    ],
    "bestFor": "Phone-monitored camper bank",
    "take": "A well-featured 12V 300Ah with app monitoring. Choose it if you want to read battery data from your phone.",
    "catch": "The listing mentions a one-year service life, so check the warranty terms."
  },
  {
    "id": "best-300ah-deep-cycle-batteries-3",
    "rank": 3,
    "badge": "Best Cycle Life",
    "name": "ECOBOSS 12V 300Ah LiFePO4 Battery",
    "price": "$386.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41nrsRXnc+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GSZVNTD6?tag=rvgearlab-amz-20",
    "description": "The ECOBOSS lists 15000+ cycles with a 200A smart BMS and 3840Wh of capacity. It stops charging below 32F and resumes at 41F, supports up to 4S4P expansion to 51.2V 1200Ah and carries an IP65 rating.\n\nCompared with the TEMGO 300Ah, it lists a stated cold-charge cutoff temperature and IP65 protection. Against the NebuQuic 300Ah, it lists a larger cycle count figure and costs more.\n\nIt suits a camper in a variable climate who wants clear cold-weather behavior. The IP65 rating suits boat and trailer-tongue mounting.",
    "specs": [
      "12V 300Ah, 3840Wh",
      "200A BMS, 15000+ cycles",
      "IP65, charge cutoff at 32F"
    ],
    "pros": [
      "Charge cutoff and restart temperatures are listed",
      "IP65 protection is stated",
      "Supports 4S4P expansion",
      "24-hour support is offered"
    ],
    "cons": [
      "Costs more than the NebuQuic and ECIENWELL",
      "Charging pauses below freezing"
    ],
    "bestFor": "Cold-climate camping",
    "take": "A clear choice for cold mornings because the listing spells out charge limits. IP65 adds confidence in damp bays.",
    "catch": "It will not accept charge below 32F until it warms."
  },
  {
    "id": "best-300ah-deep-cycle-batteries-4",
    "rank": 4,
    "badge": "Best Compact Specs",
    "name": "12V 300Ah Lithium LiFePO4 Battery",
    "price": "$329.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41sYUd3LV0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DCZQHML8?tag=rvgearlab-amz-20",
    "description": "The ECIENWELL lists 12V 300Ah at 3840Wh with a 200A BMS. It measures 15.12 x 7.64 x 10.03 inches, weighs about 54.45 lbs and supports 4P4S expansion to a 61.44kWh system.\n\nCompared with the TEMGO 300Ah, it lists full dimensions and costs less. Next to the NebuQuic 300Ah, it lists an automotive grade cell claim and recycled-material content.\n\nIt suits a camper who wants to measure the fit before ordering. The dimensions let you measure a bay or box in advance.",
    "specs": [
      "12V 300Ah, 3840Wh",
      "15.12 x 7.64 x 10.03 inches",
      "200A BMS, 4P4S expansion"
    ],
    "pros": [
      "Full dimensions are listed",
      "Weighs about 54.45 lbs",
      "Expansion to 61.44kWh is listed",
      "Lead-free materials are stated"
    ],
    "cons": [
      "Cycle and warranty details are thin",
      "No Bluetooth monitor named"
    ],
    "bestFor": "Fit-checked installs",
    "take": "A good value 300Ah with clear dimensions. Check the measurements against your bay before ordering.",
    "catch": "No built-in monitor is named in the listing."
  },
  {
    "id": "best-300ah-deep-cycle-batteries-5",
    "rank": 5,
    "badge": "Best Value",
    "name": "NebuQuic 12V 300Ah LiFePO4 Lithium Battery",
    "price": "$319.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41AsY1Y5-5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G5JW1KXQ?tag=rvgearlab-amz-20",
    "description": "The NebuQuic lists 12V 300Ah with a 200A BMS, EV-grade A+ cells and a 4P4S internal layout. Low-temperature protection activates below -20C, and the case measures 7.59 x 9.84 x 15.04 inches.\n\nCompared with the ECIENWELL 300Ah, it lists a 10-year lifespan and cycle figures at several depths. Its price is the lowest in this group.\n\nIt suits a budget-minded camper building a first big bank. The depth-of-discharge cycle figures help estimate lifespan.",
    "specs": [
      "12V 300Ah, 200A BMS",
      "EV-grade A+ cells",
      "4000+ cycles at 100% DOD"
    ],
    "pros": [
      "Lowest price among the six",
      "Cycle counts listed at three depths",
      "4P4S layout is stated",
      "Low-temp protection is listed"
    ],
    "cons": [
      "Cycle figure is at full depth",
      "Listing gives fewer monitoring details than the TEMGO"
    ],
    "bestFor": "A first large lithium bank",
    "take": "The most affordable 12V 300Ah in the group. A solid pick if you size your usage to the stated depth-of-discharge figures.",
    "catch": "Its 4000+ cycle figure is at full depth, so compare it with other listings carefully."
  },
  {
    "id": "best-300ah-deep-cycle-batteries-6",
    "rank": 6,
    "badge": "Best 24V Bank",
    "name": "CYCCLEVOLT 24V 300Ah",
    "price": "$809.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41PraBBELnL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H86NLHSK?tag=rvgearlab-amz-20",
    "description": "The CYCCLEVOLT is a 24V 300Ah (314Ah) LiFePO4 battery with 8038Wh, a 200A BMS, Bluetooth 5.0 app control and low-temperature cut-off. It can be wired up to 2S4P for larger capacities.\n\nCompared with the 12V picks, it doubles the voltage, which halves current for the same power and pairs with a 24V inverter. It is the only 24V option in the group.\n\nIt suits a large camper, van or cabin that runs a 24V system. The 8038Wh capacity is far above the 12V models.",
    "specs": [
      "24V 300Ah (314Ah)",
      "8038Wh capacity",
      "200A BMS with Bluetooth"
    ],
    "pros": [
      "Over 8kWh in one battery",
      "Bluetooth app control",
      "Halves current vs a 12V bank",
      "Expandable to 2S4P"
    ],
    "cons": [
      "Highest price of the six",
      "Needs a 24V inverter and charger"
    ],
    "bestFor": "24V off-grid systems",
    "take": "Choose it only if your system is 24V. The capacity and monitoring are strong, but the price and voltage narrow the audience.",
    "catch": "It is not a drop-in for a 12V camper."
  }
];

export const howWeEvaluated = [
  {
    "title": "Voltage and capacity",
    "description": "We checked the nominal voltage and listed capacity of each battery."
  },
  {
    "title": "BMS rating",
    "description": "We compared the continuous current rating and protections of the battery management system."
  },
  {
    "title": "Cold behavior",
    "description": "We looked for stated low-temperature charge limits."
  },
  {
    "title": "Size and weight",
    "description": "We compared dimensions and weight where listed."
  },
  {
    "title": "Expansion",
    "description": "We looked at how many units each listing says can be linked."
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
    "subheading": "By Camper Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Replace lead-acid with a drop-in",
          "Redodo 300Ah",
          "Group 6D size and 2560W output"
        ],
        [
          "Phone monitoring",
          "TEMGO 300Ah",
          "Bluetooth app control"
        ],
        [
          "Cold mornings",
          "ECOBOSS 300Ah",
          "32F charge cutoff stated"
        ],
        [
          "Know the dimensions first",
          "ECIENWELL 300Ah",
          "Full size and weight listed"
        ],
        [
          "Lowest-cost 12V",
          "NebuQuic 300Ah",
          "Lowest price of the six"
        ],
        [
          "24V system",
          "CYCCLEVOLT 24V",
          "24V with 8038Wh"
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
          "$310 to $330",
          "NebuQuic 300Ah or ECIENWELL 300Ah"
        ],
        [
          "$380 to $460",
          "ECOBOSS 300Ah or TEMGO 300Ah"
        ],
        [
          "$510 to $810",
          "Redodo 300Ah or CYCCLEVOLT 24V"
        ]
      ]
    }
  },
  {
    "subheading": "12V vs 24V",
    "cards": [
      {
        "label": "12V",
        "text": "12V banks match most RV and van wiring and standard inverters. Redodo 300Ah, TEMGO 300Ah, ECOBOSS 300Ah, ECIENWELL 300Ah and NebuQuic 300Ah are 12V."
      },
      {
        "label": "24V",
        "text": "24V halves current for the same power and needs a matching inverter and charger. CYCCLEVOLT 24V is the 24V option."
      }
    ],
    "note": "Most campers should default to a 12V pick like the Redodo 300Ah unless they run a 24V system."
  },
  {
    "subheading": "By Monitoring and Fit",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Bluetooth app",
          "TEMGO 300Ah"
        ],
        [
          "Known dimensions",
          "ECIENWELL 300Ah"
        ],
        [
          "IP65 enclosure",
          "ECOBOSS 300Ah"
        ],
        [
          "Replaces six AGMs",
          "Redodo 300Ah"
        ]
      ]
    }
  },
  {
    "subheading": "For Winter Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated low-temperature charge cutoff and a BMS that protects against cold charging."
      },
      {
        "label": "In this comparison",
        "text": "The ECOBOSS 300Ah lists a 32F cutoff and resume at 41F, which is the clearest cold-weather behavior in the group."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a drop-in with high output or a 24V bank, which points to the Redodo 300Ah or CYCCLEVOLT 24V."
      },
      {
        "label": "Save if",
        "text": "Save if you want the lowest price, since the NebuQuic 300Ah and ECIENWELL 300Ah offer 12V 300Ah for less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 300Ah means in watt-hours",
    "explanation": "At 12V, 300Ah is about 3840Wh. A 50W fridge could run for dozens of hours on that, but a 1000W kettle drains it in under four hours. Convert your loads to watts and divide into 3840 to estimate runtime."
  },
  {
    "criterion": "BMS current rating",
    "explanation": "The BMS cuts power if current exceeds its limit. A 200A BMS can supply roughly 2560W at 12V, which suits an inverter near 2000W. Match the BMS rating to the inverter size and note any surge limit."
  },
  {
    "criterion": "Cold-charge protection",
    "explanation": "LiFePO4 cells can be damaged by charging below freezing. Some listings state cutoff at 32F or lower, others at -4F. Check the specific cold-charge limit if you camp in winter."
  },
  {
    "criterion": "Inverter and fusing",
    "explanation": "A battery this big needs a fuse near the terminal and cables sized for the inverter. A 2000W load pulls over 160A at 12V. Match fuse and cable gauge to the highest current."
  },
  {
    "criterion": "Ventilation and charging",
    "explanation": "LiFePO4 does not vent like flooded lead-acid, but chargers and inverters still run warm. Keep the bank dry and ventilated, and use a charger with a lithium profile. Check the charge voltage in the listing."
  },
  {
    "criterion": "Parallel and series expansion",
    "explanation": "Several listings allow linking multiple batteries in series or parallel. Mixed ages or models can unbalance the bank. Check the maximum expansion in the listing and use identical units."
  }
];

export const faq = [
  {
    "q": "Can I charge a 300Ah LiFePO4 battery in freezing weather?",
    "a": "Not safely. Charging below 32F can damage the cells, which is why the ECOBOSS 300Ah and others include cold cutoffs. Warm the battery first or use a heated model."
  },
  {
    "q": "What is the biggest mistake with a 300Ah bank?",
    "a": "Undersizing the cables and fuse. At 2000W the draw exceeds 160A, so use thick cable and a fuse rated for it. Keep runs short."
  },
  {
    "q": "Is 300Ah worth it over 100Ah?",
    "a": "If you run a fridge, a CPAP and an inverter for days, yes. A 100Ah battery holds only 1280Wh, so you would need three. The Redodo 300Ah replaces six AGM batteries by its own listing."
  },
  {
    "q": "How do I connect a 12V 300Ah battery to an inverter?",
    "a": "Fuse the positive close to the battery, use cable sized for the inverter and tighten the terminals. Turn the inverter off first, then switch on."
  },
  {
    "q": "How do I store a battery this size?",
    "a": "Charge it to a partial level, keep it dry and out of freezing temperatures, and disconnect loads. Check the voltage every month or two."
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
