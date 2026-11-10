export const guideSlug = "best-deep-cycle-batteries-under-300";
export const guideTitle = "6 Best Deep Cycle Batteries Under 300 in 2026";
export const metaTitle = "Best Deep Cycle Batteries Under 300 in 2026";
export const metaDescription = "Best deep cycle batteries under $300: six 12V lithium and AGM batteries from 90Ah to 300Ah compared on capacity, BMS rating and cranking power.";
export const mainKeyword = "best deep cycle batteries under 300";
export const introParagraphs = [
  "Three hundred dollars is where deep cycle batteries jump from weekend size to full-time RV capacity. The six picks here include two 200Ah and 300Ah lithium batteries, a 100Ah dual-purpose AGM and a 100Ah lithium for under $140.",
  "The list ranks each battery on stored energy per dollar, then on protection, expandability and cold-weather behavior. The step from $200 to $300 mostly buys a lot more amp-hours, so capacity leads the ranking."
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
    "id": "best-deep-cycle-batteries-under-300-1",
    "rank": 1,
    "badge": "Best Value Under $300",
    "name": "ECOBOSS 12V 200Ah LiFePO4 Battery Deep Cycle Lithium Battery",
    "price": "$269.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iUcLqUNOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H334QPRF?tag=rvgearlab-20",
    "description": "ECOBOSS packs 200Ah of lithium iron phosphate into a 12V case, with a 200A BMS inside and an IP65 enclosure rating. Charging pauses at 32F and resumes as the cells warm, and a 4S4P layout allows expansion.\n\nAt about $270 it stores about 2560Wh, twice the GOKWH 120Ah, and it costs less than the GSIKE 300Ah by $30. The BMS handles 200A, which is enough for a 2000W inverter.\n\nIt suits an RV or van that needs a full-size house battery. It shrugs off dust and splashes thanks to the IP65 rating.",
    "specs": [
      "12V 200Ah, 200A BMS",
      "IP65 enclosure",
      "Charge pause at 32F"
    ],
    "pros": [
      "200A BMS supports big inverters",
      "IP65 dust and splash rating",
      "Stops charging in freezing weather",
      "Expands in series and parallel"
    ],
    "cons": [
      "Fewer features than pricier packs",
      "Heavy for a single lift"
    ],
    "bestFor": "Full-time RV capacity",
    "take": "A big, protected lithium at a fair price.",
    "catch": "Bring a thick cable and fuse for a 200A draw."
  },
  {
    "id": "best-deep-cycle-batteries-under-300-2",
    "rank": 2,
    "badge": "Best Biggest Bank",
    "name": "GSIKE IX 12.8V 300Ah LiFePO4 Battery",
    "price": "$299.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41IuZxo+q+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H8RCWCJX?tag=rvgearlab-20",
    "description": "GSIKE is a 12.8V 300Ah LiFePO4 battery that stores 4019Wh and claims 6000 cycles at 80 percent depth of discharge. A 100A smart BMS protects it, and it expands in a 4P4S layout.\n\nAt about $300 it stores 50 percent more than the ECOBOSS 200Ah and costs $30 more. The 100A BMS limit caps output near 1280W, below the ECOBOSS rating.\n\nIt suits boondockers who want days of energy and moderate loads. It leaves no room under the cap.",
    "specs": [
      "12.8V 300Ah, 4019Wh",
      "100A smart BMS",
      "4P4S expansion"
    ],
    "pros": [
      "Stores 4019Wh in one battery",
      "6000 cycles at 80 percent depth",
      "Smart BMS guards the cells",
      "Expands to larger banks"
    ],
    "cons": [
      "100A BMS limits big inverters",
      "Costs the full budget"
    ],
    "bestFor": "Boondocking with modest loads",
    "take": "The most stored energy under $300.",
    "catch": "The 100A limit rules out a large inverter."
  },
  {
    "id": "best-deep-cycle-batteries-under-300-3",
    "rank": 3,
    "badge": "Best Budget Lithium",
    "name": "12V 100Ah LiFePO4 Lithium Battery",
    "price": "$138.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410B4ygtH9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FT9Z1PGK?tag=rvgearlab-20",
    "description": "This 12V 100Ah Group 31 LiFePO4 battery weighs 24 lb and has a 100A smart BMS. It fully charges in about 5 hours on a 14.6V charger and carries a 15,000-cycle claim at 60 percent discharge.\n\nAt about $139 it costs half as much as the ECOBOSS and stores half as much. It is the only pick here that fits a standard Group 31 tray.\n\nIt suits a small camper or a second battery. Stack two to match the ECOBOSS.",
    "specs": [
      "12V 100Ah LiFePO4",
      "100A smart BMS",
      "Group 31, 24 lb"
    ],
    "pros": [
      "Fits a Group 31 tray",
      "24 lb, easy to lift",
      "Fast lithium charging",
      "Lowest price in the guide"
    ],
    "cons": [
      "Half the capacity of the 200Ah",
      "Needs a lithium charger"
    ],
    "bestFor": "Small campers",
    "take": "The cheapest lithium here, in a standard size.",
    "catch": "A lithium-compatible charger is required."
  },
  {
    "id": "best-deep-cycle-batteries-under-300-4",
    "rank": 4,
    "badge": "Best Dual-Purpose",
    "name": "Mighty Max Battery MM-G27M",
    "price": "$229.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fqXu0oO2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7M82Q7K?tag=rvgearlab-20",
    "description": "Mighty Max MM-G27M is a Group 27M marine AGM at 12V and 100Ah, with 800 CCA and 850 MCA. It is rated for 700 cycles at half discharge and works as a dual-purpose battery.\n\nAt about $230 it costs less than the ECOBOSS and stores less than half as much while also starting an engine. The Mighty Max MM-G24M holds 90Ah for $30 less.\n\nIt suits a boat where a single battery both starts the motor and cycles. The sealed AGM needs no maintenance.",
    "specs": [
      "12V 100Ah, Group 27M",
      "800 CCA, 850 MCA",
      "700 cycles at 50% DoD"
    ],
    "pros": [
      "Strong cranking amps",
      "Sealed, no maintenance",
      "Dual-purpose use",
      "700 cycles at 50 percent depth"
    ],
    "cons": [
      "Less than half the ECOBOSS capacity",
      "Lead-acid weight"
    ],
    "bestFor": "Boats that need starts",
    "take": "A start-capable AGM at a mid price.",
    "catch": "Dual-purpose batteries dislike deep drains."
  },
  {
    "id": "best-deep-cycle-batteries-under-300-5",
    "rank": 5,
    "badge": "Best Smaller AGM",
    "name": "Mighty Max Battery MM-G24M",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418st-JvIXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G83YHSRK?tag=rvgearlab-20",
    "description": "Mighty Max MM-G24M is a 12V 90Ah Group 24M marine AGM that delivers 550 CCA, 700 CA and 700 marine cranking amps. It combines deep-cycle capacity with engine starting.\n\nAt about $200 it costs $30 less than the MM-G27M and stores 10Ah less. The Group 24M case is also smaller.\n\nIt suits a smaller boat or a camper where space is tight. It handles moderate cycling.",
    "specs": [
      "12V 90Ah AGM, 550 CCA",
      "700 CA, 700 MCA",
      "Group 24M dual-purpose"
    ],
    "pros": [
      "Strong marine cranking amps",
      "Dual-purpose design",
      "Smaller Group 24M case",
      "Sealed AGM"
    ],
    "cons": [
      "Small capacity at this cap",
      "Lead-acid weight"
    ],
    "bestFor": "Smaller boats",
    "take": "A smaller start-capable AGM.",
    "catch": "Do not drain it to zero."
  },
  {
    "id": "best-deep-cycle-batteries-under-300-6",
    "rank": 6,
    "badge": "Best Monitored Pick",
    "name": "12V 120Ah LiFePO4 Marine Battery with Bluetooth APP",
    "price": "$170.55",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51t2w1cxvYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GRGPF7QX?tag=rvgearlab-20",
    "description": "GOKWH is a 12.8V 120Ah LiFePO4 marine battery that stores 1536Wh. It has a Bluetooth 5.0 app, a 100A BMS and low-temperature protection.\n\nAt about $171 it costs $100 less than the ECOBOSS and is the only pick with an app. It stores 80Ah less than the ECOBOSS.\n\nIt suits a boat or van that needs monitoring. The app tracks charge, voltage and current.",
    "specs": [
      "12.8V 120Ah, 1536Wh",
      "Bluetooth 5.0 app",
      "100A BMS, cold protection"
    ],
    "pros": [
      "App tracks charge and current",
      "Low-temperature protection",
      "Group 24 size",
      "Lower price than the 200Ah"
    ],
    "cons": [
      "Less capacity than the 200Ah",
      "Needs a lithium charger"
    ],
    "bestFor": "Boats and vans with monitoring",
    "take": "The only app-monitored battery in this tier.",
    "catch": "Check the charger profile first."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity per dollar",
    "description": "Amp-hours from 90Ah to 300Ah were set against the price of each battery."
  },
  {
    "title": "Protection rating",
    "description": "BMS current limits, enclosure ratings and cold cutoffs were compared."
  },
  {
    "title": "Expandability",
    "description": "Series and parallel limits were compared for growing a bank."
  },
  {
    "title": "Cranking power",
    "description": "Cold cranking and marine cranking amps were compared on the AGM picks."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is at or under $300, and the top pick gives a full-size bank for the money."
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
    "subheading": "By what you run",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Full-time RV, big inverter",
          "ECOBOSS 200Ah LiFePO4",
          "200A BMS."
        ],
        [
          "Boondocking, modest loads",
          "GSIKE 300Ah LiFePO4",
          "4019Wh."
        ],
        [
          "Small camper, tight budget",
          "100Ah LiFePO4 Group 31",
          "About $139."
        ],
        [
          "Boat that must start an engine",
          "Mighty Max MM-G27M",
          "800 CCA."
        ],
        [
          "Smaller boat, 90Ah",
          "Mighty Max MM-G24M",
          "Group 24M."
        ],
        [
          "Monitoring from a phone",
          "GOKWH 120Ah LiFePO4",
          "Bluetooth app."
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
          "$130 to $180",
          "100Ah LiFePO4 Group 31 or GOKWH 120Ah LiFePO4"
        ],
        [
          "$190 to $230",
          "Mighty Max MM-G24M or Mighty Max MM-G27M"
        ],
        [
          "$260 to $300",
          "ECOBOSS 200Ah LiFePO4 or GSIKE 300Ah LiFePO4"
        ]
      ]
    }
  },
  {
    "subheading": "Lithium vs lead-acid",
    "cards": [
      {
        "label": "Lithium",
        "text": "The ECOBOSS 200Ah LiFePO4, GSIKE 300Ah LiFePO4, 100Ah LiFePO4 Group 31 and GOKWH 120Ah LiFePO4 weigh far less and offer thousands of cycles."
      },
      {
        "label": "Lead-acid",
        "text": "The Mighty Max MM-G27M and MM-G24M start engines and work with common chargers, but store far less."
      }
    ],
    "note": "Most buyers should take the ECOBOSS 200Ah LiFePO4 for house power."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $139",
          "100Ah LiFePO4 Group 31"
        ],
        [
          "About $171",
          "GOKWH 120Ah LiFePO4"
        ],
        [
          "About $200",
          "Mighty Max MM-G24M"
        ],
        [
          "About $230",
          "Mighty Max MM-G27M"
        ],
        [
          "About $270",
          "ECOBOSS 200Ah LiFePO4"
        ],
        [
          "About $300",
          "GSIKE 300Ah LiFePO4"
        ]
      ]
    }
  },
  {
    "subheading": "For a full-time RV with an inverter specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a 200A BMS, an enclosure rating and cold-weather protection."
      },
      {
        "label": "In this comparison",
        "text": "The ECOBOSS 200Ah LiFePO4 has a 200A BMS for a 2000W inverter. The GSIKE 300Ah LiFePO4 stores more but is limited to 100A."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want days of energy: the GSIKE 300Ah LiFePO4 stores 4019Wh, and the ECOBOSS 200Ah LiFePO4 adds the stronger BMS."
      },
      {
        "label": "Save if",
        "text": "Save if you only need a small bank: the 100Ah LiFePO4 Group 31 costs about $139, and the Mighty Max MM-G24M adds cranking power for $200."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What $300 buys",
    "explanation": "At this cap you can buy up to 300Ah of lithium or 200Ah with a stronger BMS. That is about 2560Wh to 4019Wh, enough for a fridge, lights and a fan for days. Decide how many days you want between charges before you choose, and write down the daily watt-hours you use so the choice is based on numbers rather than a feeling."
  },
  {
    "criterion": "BMS current rating",
    "explanation": "The battery management system sets the maximum current. A 100A BMS supports about 1280W at 12.8V, while a 200A BMS supports about 2560W. Match the BMS to your inverter size, and check the figure in the specifications and remember that a surge rating is not the same as a continuous one, so ask about both."
  },
  {
    "criterion": "Series and parallel limits",
    "explanation": "Some lithium batteries can be linked in parallel for more capacity and in series for 24V or 48V. A 4S4P rating allows up to four in each direction. Check the limits if you plan to grow a bank, and remember that all batteries in a bank should share the same age, brand and charge state."
  },
  {
    "criterion": "Cold weather",
    "explanation": "Charging a lithium battery below freezing can damage it, so look for low-temperature protection that pauses charging at 32F. Lead-acid tolerates cold charging but loses capacity. Check the cutoff and resume temperature, which is usually written near the battery management system details rather than the headline specs."
  },
  {
    "criterion": "Dual-purpose vs deep cycle",
    "explanation": "A dual-purpose battery can start an engine and run electronics, but tolerates fewer deep drains than a pure deep-cycle battery. A lithium pack cannot normally start an engine. Check CCA and marine cranking amps if you need both jobs and compare it with the starting current your engine manual calls for, with a margin of about 25 percent."
  },
  {
    "criterion": "Weight and fit",
    "explanation": "A 200Ah lithium weighs about 40 to 50 lb, and 300Ah more. Group size, such as 31 or 27M, decides whether it fits a tray. Measure your space and plan for hold-downs as well as cable bend radius and the room needed to open a compartment lid."
  }
];

export const faq = [
  {
    "q": "How many watt-hours do I need?",
    "a": "Add up your daily loads: a compressor fridge uses 40 to 60Wh, lights 20 to 40Wh, and a laptop about 50Wh. Multiply by days between charges. The ECOBOSS 200Ah LiFePO4 holds about 2560Wh, which covers several days and then add 20 percent for losses in the inverter and cabling."
  },
  {
    "q": "Can I run a 2000W inverter from a 100A BMS?",
    "a": "Not for long. A 2000W load at 12V draws over 160 amps, which trips a 100A BMS such as the GSIKE 300Ah LiFePO4. Choose the ECOBOSS 200Ah LiFePO4 with its 200A BMS, or split the load across two batteries, or split the load across two inverters wired to two batteries."
  },
  {
    "q": "Is a dual-purpose AGM worth it over lithium?",
    "a": "Only if one battery must start an engine, as with a boat. The Mighty Max MM-G27M gives 800 CCA but stores far less than the ECOBOSS 200Ah LiFePO4. For house power, lithium is the better value and the extra weight of lead-acid plus the cost of a second battery for the house."
  },
  {
    "q": "How do I wire two batteries together?",
    "a": "Use identical batteries and cables of equal length. Parallel wiring keeps 12V and doubles capacity, and series wiring adds voltage. Check the maximum parallel and series counts in the specifications and a fuse on each battery positive for safety."
  },
  {
    "q": "What does IP65 mean?",
    "a": "It means the enclosure is dust-tight and protected from water jets. That helps in an exposed compartment, as with the ECOBOSS 200Ah LiFePO4. It does not mean the battery is waterproof for immersion, so it still needs a vent path and secure mounting."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Deep Cycle Batteries",
    "href": "/camp-power/best-deep-cycle-batteries"
  },
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
  }
];
