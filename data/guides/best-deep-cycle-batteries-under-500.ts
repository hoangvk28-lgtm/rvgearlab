export const guideSlug = "best-deep-cycle-batteries-under-500";
export const guideTitle = "6 Best Deep Cycle Batteries Under 500 in 2026";
export const metaTitle = "Best Deep Cycle Batteries Under 500 in 2026";
export const metaDescription = "Best deep cycle batteries under $500: six 12V and 6V batteries from 100Ah to 300Ah compared on chemistry, expandability and cold-weather behavior.";
export const mainKeyword = "best deep cycle batteries under 500";
export const introParagraphs = [
  "Five hundred dollars buys either a 300Ah lithium battery or a 200Ah AGM with room to spare. The six picks here mix three lithium batteries with two 200Ah and 225Ah AGMs and one dual-purpose 100Ah, so chemistry is the real decision.",
  "Few good options sit between $300 and $500, so the extra money mostly buys lead-acid weight or a bit more lithium capacity. The list shows when each is worth it."
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
    "id": "best-deep-cycle-batteries-under-500-1",
    "rank": 1,
    "badge": "Best Value Under $500",
    "name": "GSIKE IX 12.8V 300Ah LiFePO4 Battery",
    "price": "$299.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41IuZxo+q+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H8RCWCJX?tag=rvgearlab-20",
    "description": "GSIKE stores 4019Wh in a single 12.8V 300Ah LiFePO4 case and claims 6000 cycles at 80 percent discharge. Cell protection comes from a 100A smart BMS, and a 4P4S layout allows growth.\n\nAt about $300 it holds 50 percent more than the Rvpozwer and costs $6 less. It is cheaper than the AGM picks and stores more.\n\nIt suits a van or RV that wants a large bank without paying lead-acid prices. Its weight is the trade.",
    "specs": [
      "12.8V 300Ah, 4019Wh",
      "100A smart BMS",
      "4P4S expansion"
    ],
    "pros": [
      "Largest capacity under the cap",
      "6000 cycles at 80 percent depth",
      "Smart BMS protects the cells",
      "Expands to larger banks"
    ],
    "cons": [
      "100A BMS limits big inverters",
      "Heavy single battery"
    ],
    "bestFor": "Boondocking banks",
    "take": "The most stored energy for the money.",
    "catch": "A large inverter needs a stronger BMS."
  },
  {
    "id": "best-deep-cycle-batteries-under-500-2",
    "rank": 2,
    "badge": "Best Wide Temperature Range",
    "name": "12V 200Ah LiFePO4 Lithium Battery",
    "price": "$305.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41nUI-JxlJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F1TMQX1G?tag=rvgearlab-20",
    "description": "Rvpozwer is a 12V 200Ah LiFePO4 battery that stores 2560Wh and claims 15,000 cycles. It has a 200A smart BMS and works from -20C to 65C, and it expands to 800Ah in parallel.\n\nAt about $306 it costs $36 more than the ECOBOSS and offers a wider stated temperature range. It also lists lifetime technical support.\n\nIt suits cold-climate campers and anyone planning a bigger bank. The 200A BMS handles a 2000W inverter.",
    "specs": [
      "12V 200Ah, 2560Wh",
      "200A smart BMS",
      "-20C to 65C range"
    ],
    "pros": [
      "Wide operating temperature range",
      "200A BMS for big inverters",
      "Expands up to 800Ah",
      "Lifetime technical support"
    ],
    "cons": [
      "No monitoring app",
      "Costs more than the ECOBOSS"
    ],
    "bestFor": "Cold-climate bank builders",
    "take": "A 200Ah lithium that handles cold and big loads.",
    "catch": "Add a shunt if you want monitoring."
  },
  {
    "id": "best-deep-cycle-batteries-under-500-3",
    "rank": 3,
    "badge": "Best Budget 200Ah",
    "name": "ECOBOSS 12V 200Ah LiFePO4 Battery Deep Cycle Lithium Battery",
    "price": "$269.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iUcLqUNOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H334QPRF?tag=rvgearlab-20",
    "description": "ECOBOSS offers 200Ah at 12V with IP65 sealing, a 200A BMS and a charging cutoff at 32F. Its 4S4P rating covers later expansion.\n\nAt about $270 it is the cheapest 200Ah here, $36 below the Rvpozwer. It lacks the wider temperature figure.\n\nIt suits a full-time RV on a budget. The IP65 rating helps in exposed compartments.",
    "specs": [
      "12V 200Ah, 200A BMS",
      "IP65 enclosure",
      "Charge pause at 32F"
    ],
    "pros": [
      "Lowest price among 200Ah packs here",
      "IP65 dust and splash rating",
      "200A BMS",
      "Cold charge cutoff"
    ],
    "cons": [
      "Fewer features than the Rvpozwer",
      "Heavy for a single lift"
    ],
    "bestFor": "Budget full-time RVs",
    "take": "A strong 200Ah lithium at the lowest price.",
    "catch": "Check the cold-charge cutoff in winter."
  },
  {
    "id": "best-deep-cycle-batteries-under-500-4",
    "rank": 4,
    "badge": "Best Lead-Acid Capacity",
    "name": "Renogy 12 Volt 200Ah Deep Cycle AGM Battery",
    "price": "$251.38",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31hWBJ9YLXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075RGX1WR?tag=rvgearlab-20",
    "description": "Renogy is a 12V 200Ah deep cycle AGM with a self-discharge of under 3 percent a month. It keeps working below 32F and is sealed, so it needs no water.\n\nAt about $396 it costs $90 more than the Rvpozwer and weighs far more. It stores the same 200Ah and lets you use a standard AGM charger.\n\nIt suits those who prefer lead-acid for cold climates or familiar charging. It sits fine in storage.",
    "specs": [
      "12V 200Ah AGM",
      "Under 3% monthly self-discharge",
      "Works below 32F"
    ],
    "pros": [
      "Low self-discharge in storage",
      "Sealed and maintenance-free",
      "Works below 32F",
      "Standard AGM charging"
    ],
    "cons": [
      "Heavy single battery",
      "Costs far more than lithium"
    ],
    "bestFor": "Cold-climate lead-acid fans",
    "take": "The lead-acid choice that holds charge in storage.",
    "catch": "Weight is the cost of the chemistry."
  },
  {
    "id": "best-deep-cycle-batteries-under-500-5",
    "rank": 5,
    "badge": "Best 6V Bank",
    "name": "Go Power GP-AGM-225-6V 6 Volt 225 Amp AGM Deep Cycle Battery",
    "price": "$395.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41IX5Xm14mL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HCG1VTY9?tag=rvgearlab-20",
    "description": "Go Power GP-AGM-225-6V is a 6V AGM rated 225Ah at the C20 rate, with carry handles. It is sealed and built for RV, solar and inverter banks.\n\nAt about $396 it matches the Renogy on price and stores a bit more. Two in series give 12V at 225Ah.\n\nIt suits a traditional RV bank built from two 6V batteries. Each is easier to lift than a 12V of the same size.",
    "specs": [
      "6V 225Ah AGM at C20",
      "Integrated carry handles",
      "Sealed, no watering"
    ],
    "pros": [
      "Handles ease lifting",
      "Sealed, no maintenance",
      "6V pairs form a 12V bank",
      "Made for RV and solar banks"
    ],
    "cons": [
      "Need two for 12V",
      "Costs a lot for lead-acid"
    ],
    "bestFor": "Traditional RV banks",
    "take": "A 6V option for building a classic RV bank.",
    "catch": "Buy two and wire in series."
  },
  {
    "id": "best-deep-cycle-batteries-under-500-6",
    "rank": 6,
    "badge": "Best Dual-Purpose",
    "name": "Mighty Max Battery MM-G27M",
    "price": "$229.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fqXu0oO2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7M82Q7K?tag=rvgearlab-20",
    "description": "Mighty Max MM-G27M brings 100Ah in a Group 27M case, 800 CCA and 850 MCA. Its cycle rating is 700 at half discharge.\n\nAt about $230 it is the cheapest pick besides the ECOBOSS and starts engines, which the lithium picks cannot. It stores half as much as the 200Ah packs.\n\nA boat that wants starting and cycling from one case is the natural home. Sealed construction means no watering.",
    "specs": [
      "12V 100Ah, Group 27M",
      "800 CCA, 850 MCA",
      "700 cycles at 50% DoD"
    ],
    "pros": [
      "Strong cranking amps",
      "Sealed and maintenance-free",
      "Dual-purpose use",
      "Lower price than the AGM 200Ah"
    ],
    "cons": [
      "Half the capacity of the 200Ah",
      "Lead-acid weight"
    ],
    "bestFor": "Boats that start and cycle",
    "take": "A start-capable AGM for boats.",
    "catch": "Dual-purpose batteries dislike deep drains."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity per dollar",
    "description": "Amp-hours from 100Ah to 300Ah were set against the price of each battery."
  },
  {
    "title": "Chemistry",
    "description": "LiFePO4 and AGM were compared for weight, charger needs and cold-weather behavior."
  },
  {
    "title": "Expandability",
    "description": "Series and parallel limits were compared."
  },
  {
    "title": "Cold performance",
    "description": "Temperature range and low-temperature protection were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is at or under $500, and the top pick gives the most stored energy for the money."
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
          "Largest bank, modest inverter",
          "GSIKE 300Ah LiFePO4",
          "4019Wh."
        ],
        [
          "Cold climate, 2000W inverter",
          "Rvpozwer 200Ah LiFePO4",
          "-20C to 65C."
        ],
        [
          "Budget 200Ah",
          "ECOBOSS 200Ah LiFePO4",
          "Lowest 200Ah price."
        ],
        [
          "Lead-acid, storage",
          "Renogy 200Ah AGM",
          "Under 3% self-discharge."
        ],
        [
          "Classic RV bank",
          "Go Power 6V 225Ah",
          "Buy two."
        ],
        [
          "Boat with a start",
          "Mighty Max MM-G27M",
          "800 CCA."
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
          "$220 to $270",
          "Mighty Max MM-G27M or ECOBOSS 200Ah LiFePO4"
        ],
        [
          "$290 to $310",
          "GSIKE 300Ah LiFePO4 or Rvpozwer 200Ah LiFePO4"
        ],
        [
          "$390 to $400",
          "Renogy 200Ah AGM or Go Power 6V 225Ah"
        ]
      ]
    }
  },
  {
    "subheading": "Lithium vs lead-acid",
    "cards": [
      {
        "label": "Lithium",
        "text": "The GSIKE 300Ah LiFePO4, Rvpozwer 200Ah LiFePO4 and ECOBOSS 200Ah LiFePO4 weigh less and last longer."
      },
      {
        "label": "Lead-acid",
        "text": "The Renogy 200Ah AGM, Go Power 6V 225Ah and Mighty Max MM-G27M suit familiar chargers and boats."
      }
    ],
    "note": "Most buyers should take the GSIKE 300Ah LiFePO4."
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
        ],
        [
          "About $306",
          "Rvpozwer 200Ah LiFePO4"
        ],
        [
          "About $396",
          "Renogy 200Ah AGM"
        ],
        [
          "About $396",
          "Go Power 6V 225Ah"
        ]
      ]
    }
  },
  {
    "subheading": "For a cold-climate van specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a stated low temperature range and cold-charge protection."
      },
      {
        "label": "In this comparison",
        "text": "The Rvpozwer 200Ah LiFePO4 lists -20C to 65C. The Renogy 200Ah AGM keeps working below 32F."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a wide temperature range or lead-acid: the Rvpozwer 200Ah LiFePO4 and Renogy 200Ah AGM both add that."
      },
      {
        "label": "Save if",
        "text": "Save if you only need a 200Ah bank: the ECOBOSS 200Ah LiFePO4 is $36 cheaper than the Rvpozwer 200Ah LiFePO4."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What $500 buys",
    "explanation": "The extra money over $300 buys a wide temperature range, lead-acid options and a 6V bank, not much more lithium capacity. The GSIKE 300Ah already costs about $300. Decide whether you want chemistry choice or more energy, and keep a share of the budget for cable, fuses and a battery monitor that makes the bank easier to read."
  },
  {
    "criterion": "6V vs 12V batteries",
    "explanation": "Two 6V batteries wired in series make 12V at the same amp-hours, and each is easier to lift than a 12V of the same size. A single 6V cannot power a 12V system alone. Check you are buying two, and match both batteries by age and brand so one does not carry the other."
  },
  {
    "criterion": "Temperature range",
    "explanation": "A lithium battery that works from -20C to 65C tolerates cold, but charging below freezing still needs protection. Lead-acid holds capacity worse in cold but charges more safely. Check both the discharge and charge limits and look for a stated cold-charge cutoff in the specifications rather than assuming one exists."
  },
  {
    "criterion": "BMS and inverter size",
    "explanation": "A 200A BMS supports about 2560W at 12V, and a 100A BMS about 1280W. Match the BMS to the largest inverter you plan to run. Check the continuous rating in the specifications, which is often printed next to the voltage and capacity near the top of the specifications."
  },
  {
    "criterion": "Self-discharge",
    "explanation": "A lead-acid battery loses charge in storage, and AGM loses less than flooded. Under 3 percent a month means it holds for a season. Check the rate if you store your RV, and top up lead-acid every few months if the RV sits unused for a long time."
  },
  {
    "criterion": "Parallel limits",
    "explanation": "Linking batteries in parallel multiplies capacity, but some batteries cap the count. An 800Ah figure means four 200Ah units. Check the limit before you plan growth and remember that mixing batteries of different ages shortens the life of the whole bank, and write the allowed number of units on the box before you place the order."
  }
];

export const faq = [
  {
    "q": "Is lithium or AGM better under $500?",
    "a": "Lithium wins for most campers: the GSIKE 300Ah LiFePO4 stores 50 percent more than the Renogy 200Ah AGM for $90 less and weighs far less. AGM wins if your charger cannot change profile. Check your charger first, and also compare the cost of any charger changes you would need to make."
  },
  {
    "q": "Do I need two 6V batteries?",
    "a": "Yes, one 6V battery cannot power a 12V system. Wire two Go Power 6V 225Ah units in series, which keeps 225Ah at 12V. Buy identical units and replace them in pairs and use short, thick cable of equal length between them and the load."
  },
  {
    "q": "Can I charge lithium in freezing weather?",
    "a": "Not safely without low-temperature protection. The ECOBOSS 200Ah LiFePO4 pauses at 32F, and the Rvpozwer 200Ah LiFePO4 lists a range down to -20C. Check the charge limit, not just the discharge limit and consider a heater pad or insulated box if you winter in the cold."
  },
  {
    "q": "How big an inverter can the GSIKE run?",
    "a": "About 1000W continuous because of the 100A BMS. A larger load trips the BMS, so choose the Rvpozwer 200Ah LiFePO4 with a 200A BMS for a 2000W inverter. Check the continuous limit and the 200Ah lithium has the stronger BMS for that job."
  },
  {
    "q": "How do I store batteries over winter?",
    "a": "Charge lead-acid fully, since the Renogy 200Ah AGM self-discharges under 3 percent a month. Store lithium around half charge in a dry place. Disconnect loads and recharge lead-acid every few months to prevent sulfation and keep the terminals clean."
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
