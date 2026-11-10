export const guideSlug = "best-camping-batteries-for-rvs";
export const guideTitle = "4 Best Camping Batteries For Rvs in 2026";
export const metaTitle = "Best Camping Batteries For Rvs in 2026";
export const metaDescription = "Camping batteries for RVs compared across bolt-in AGM banks, a home-scale LFP power station set and a compact plug-in power station for small loads.";
export const mainKeyword = "best camping batteries for rvs";
export const introParagraphs = [
  "RV owners have two routes for battery power, a bolt-in 12V bank wired into the coach or a plug-in power station that runs gear through outlets. This short guide compares four options across both routes, from a 400Ah AGM pair to a 230Wh plug-in unit.",
  "Each was compared on capacity, how it connects, charging routes and what the listing says it can run. The picks are very different sizes, so match the pick to your daily watt-hours first."
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
    "id": "best-camping-batteries-for-rvs-1",
    "rank": 1,
    "badge": "Best Bolt-In Bank",
    "name": "Renogy Deep Cycle AGM Battery 2-Pack 12 Volt 200Ah",
    "price": "$805.91",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41gF-O89ppL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CHS2P3W4?tag=rvgearlab-amz-20",
    "description": "The Renogy comes as a pair of 12V 200Ah deep-cycle AGM batteries, with 2000A max discharge current and a 2-year warranty. The listing states performance from -4F to 140F and monthly self-discharge below 3 percent at 77F.\n\nThat is 400Ah of nominal capacity, far more stored energy than the Interstate or the GRECELL. Sealed, valve-regulated cells mean no water refilling.\n\nIt suits full-time and long-stay RVers who want to wire a house bank into the coach. The cold-weather range is useful in shoulder seasons.",
    "specs": [
      "Two 12V 200Ah deep-cycle",
      "2000A max discharge",
      "-4F to 140F, 2-year warranty"
    ],
    "pros": [
      "400Ah of stored capacity",
      "Stated -4F to 140F operation",
      "No water refilling",
      "Low self-discharge in storage"
    ],
    "cons": [
      "Very heavy for a pair",
      "Lead-acid has limited usable depth"
    ],
    "bestFor": "Long stays with wired-in power",
    "take": "The biggest bolt-in capacity in the guide. Pick it for a permanent house bank.",
    "catch": "Lead-acid should be used to about half, so 400Ah gives roughly 200Ah usable."
  },
  {
    "id": "best-camping-batteries-for-rvs-2",
    "rank": 2,
    "badge": "Best Single Battery",
    "name": "Interstate Batteries Marine/RV Battery 12V 100Ah 925CCA 1110CA Group 31 AGM",
    "price": "$284.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31zt+XjvDCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BHX3FBCQ?tag=rvgearlab-amz-20",
    "description": "The Interstate Group 31 is a 12V 100Ah AGM rated 925CCA, built as both a cranking and deep-cycle battery. Its pure lead plates are stated to last 2 to 3 times longer than flooded types.\n\nIt is one battery rather than a pair, so it replaces a single RV house or chassis battery in a Group 31 tray. It carries a recognised brand name.\n\nIt suits small trailers and campers whose box already takes a Group 31. The dual-purpose design adds starting duty.",
    "specs": [
      "12V 100Ah Group 31 AGM",
      "925CCA dual-purpose",
      "Pure lead plates"
    ],
    "pros": [
      "Drop-in Group 31 size",
      "Dual-purpose cranking and cycling",
      "Recognised brand",
      "Lower cost than the pair"
    ],
    "cons": [
      "Only 100Ah",
      "Heavy lead-acid weight"
    ],
    "bestFor": "Replacing a single RV battery",
    "take": "A like-for-like single battery for trailers. Good for refresh jobs.",
    "catch": "Usable capacity is about 50Ah at a 50 percent depth."
  },
  {
    "id": "best-camping-batteries-for-rvs-3",
    "rank": 3,
    "badge": "Best Home-Scale Power",
    "name": "GROWATT HELIOS 3600 Home Battery Backup Combo with Double Voltage Hub",
    "price": "$3199.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415aZI0g+0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DKWXX136?tag=rvgearlab-amz-20",
    "description": "The GROWATT HELIOS 3600 combo is two 3600Wh LFP power stations that can run in parallel for 240V and 7200W. Each unit takes 2000W of solar and fills in about 1.5 hours with AC and DC hybrid charging, with app control and sub-15ms switchover.\n\nIt is the highest-output option here by a wide margin, and capacity expands to 36kWh. That dwarfs the 230Wh GRECELL.\n\nIt suits large rigs with big solar arrays and sedentary base camps that want home-scale power. The combo is sold as a home backup system.",
    "specs": [
      "2 x 3600Wh LFP, 7200W",
      "2000W solar charging each",
      "App control, expandable"
    ],
    "pros": [
      "Huge 7200W parallel output",
      "LFP chemistry",
      "Fast 1.5 hour charging",
      "Expandable up to 36kWh"
    ],
    "cons": [
      "Heavy home-scale equipment",
      "Very high price"
    ],
    "bestFor": "Large rigs and base camps",
    "take": "The only home-scale option, strong for big solar. Overkill for most RVs.",
    "catch": "It is sold as home backup and is far larger than most RVs need."
  },
  {
    "id": "best-camping-batteries-for-rvs-4",
    "rank": 4,
    "badge": "Best Compact Plug-In",
    "name": "GRECELL Portable Power Station 330W",
    "price": "$153.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413+XfLom5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQNNCVCX?tag=rvgearlab-amz-20",
    "description": "The GRECELL is a 330W (600W surge) power station with 230.88Wh and one pure sine AC outlet. Its ports include a 60W USB-C PD, three USB-A, a car port, two DC5521 and a 5W wireless pad.\n\nIt is the smallest and most portable unit in the guide, and it can recharge from a wall, car or solar. A built-in LED flashlight and BMS protections come standard.\n\nIt suits RVers who want a grab-and-go power source for phones, laptops and a fan. The pure sine wave suits sensitive gear.",
    "specs": [
      "230.88Wh, 330W pure sine",
      "60W USB-C PD, 1 AC",
      "Wall, car or solar charging"
    ],
    "pros": [
      "Portable plug-in power",
      "Pure sine wave output",
      "Many port types",
      "Three charging modes"
    ],
    "cons": [
      "Only 230Wh of energy",
      "Cannot run big appliances"
    ],
    "bestFor": "Phones, laptops and fans",
    "take": "A small backup for gadgets, not for the RV itself. Great as a second battery.",
    "catch": "330W output will not run an air conditioner or microwave."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity and usable energy",
    "description": "We compared stated Ah or Wh and noted usable portions for lead-acid."
  },
  {
    "title": "Connection type",
    "description": "Bolt-in banks and plug-in power stations were treated as separate routes."
  },
  {
    "title": "Charging routes",
    "description": "Solar, AC, DC and alternator options were compared."
  },
  {
    "title": "Weight and size",
    "description": "Group size and portability were compared."
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
    "subheading": "By RV Size and Loads",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Full-time rig, wired-in power",
          "Renogy AGM 200Ah 2-Pack",
          "400Ah of nominal capacity."
        ],
        [
          "Single-battery refresh",
          "Interstate Group 31 AGM",
          "Group 31 drop-in 100Ah."
        ],
        [
          "Big solar and high loads",
          "GROWATT HELIOS 3600 Combo",
          "7200W parallel output."
        ],
        [
          "Phones, laptop and fan",
          "GRECELL 330W",
          "230Wh plug-in unit."
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
          "$150 to $290",
          "GRECELL 330W or Interstate Group 31 AGM"
        ],
        [
          "$800 to $3200",
          "Renogy AGM 200Ah 2-Pack or GROWATT HELIOS 3600 Combo"
        ]
      ]
    }
  },
  {
    "subheading": "Bolt-In Battery vs Power Station",
    "cards": [
      {
        "label": "Bolt-in",
        "text": "The Renogy AGM 200Ah 2-Pack and Interstate Group 31 AGM wire into the RV's 12V system."
      },
      {
        "label": "Power station",
        "text": "The GROWATT HELIOS 3600 Combo and GRECELL 330W plug into outlets and need no RV wiring."
      }
    ],
    "note": "Most RVs should wire a bolt-in bank like the Renogy AGM 200Ah 2-Pack and add a GRECELL 330W for portable gadgets."
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
          "Under $200",
          "GRECELL 330W"
        ],
        [
          "$250 to $300",
          "Interstate Group 31 AGM"
        ],
        [
          "Over $800",
          "Renogy AGM 200Ah 2-Pack"
        ],
        [
          "Premium home-scale",
          "GROWATT HELIOS 3600 Combo"
        ]
      ]
    }
  },
  {
    "subheading": "For Boondocking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Enough Ah or Wh for a full day, solar input and cold-weather range."
      },
      {
        "label": "In this comparison",
        "text": "The Renogy AGM 200Ah 2-Pack lists -4F to 140F operation. The GROWATT HELIOS 3600 Combo adds 2000W solar input per unit for heavy off-grid use."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Renogy AGM 200Ah 2-Pack for a wired-in bank, or the GROWATT HELIOS 3600 Combo if you need home-scale power."
      },
      {
        "label": "Save if",
        "text": "Save with the GRECELL 330W for gadget power or the Interstate Group 31 AGM for a single battery swap."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Daily watt-hour math",
    "explanation": "Add up your devices' watts times hours per day to get daily watt-hours. A 400Ah lead-acid bank offers about 2400Wh usable at 12V, while a 230Wh station covers a phone and laptop day. Compare this total with each pick's stored energy."
  },
  {
    "criterion": "Bolt-in vs plug-in",
    "explanation": "A bolt-in battery feeds the RV's 12V system and lights, while a plug-in power station feeds outlets. They are not interchangeable without wiring. Decide which route your rig and loads use."
  },
  {
    "criterion": "Usable capacity",
    "explanation": "Lead-acid should be drained only to about half, while LFP can usually go deeper. Check the stated depth of discharge. A 100Ah AGM gives about 50Ah in practice."
  },
  {
    "criterion": "Charging sources",
    "explanation": "Solar, shore power, alternator and generator can all charge, but each battery accepts different rates. A 2000W solar input needs a big array. Check the charger or solar input limits."
  },
  {
    "criterion": "Output and surge",
    "explanation": "Continuous output sets which appliances run, and surge covers starts. 330W cannot run a microwave, but 7200W can. Match output to your highest load."
  },
  {
    "criterion": "Weight, fit and safety",
    "explanation": "Batteries are heavy and need secure mounting, fusing and ventilation in an RV. Measure the compartment. Follow the listing's installation guidance."
  }
];

export const faq = [
  {
    "q": "How big a battery do I need for an RV?",
    "a": "Add up daily watt-hours and divide by usable capacity. A day of lights and a fridge can need over 1000Wh. Size up for cloudy days."
  },
  {
    "q": "What mistake do RV owners make with batteries?",
    "a": "Buying a starter battery for house use. Choose deep-cycle or dual-purpose. Check the listing wording."
  },
  {
    "q": "Is the Renogy pair worth it over the Interstate?",
    "a": "If you boondock, the extra capacity helps. A single Interstate Group 31 AGM suits weekend trips."
  },
  {
    "q": "How do I install a house battery safely?",
    "a": "Mount it securely, fuse the positive cable near the battery and size the wire for the load. Keep it ventilated. Follow the maker's instructions."
  },
  {
    "q": "How do I store RV batteries over winter?",
    "a": "Charge them fully and disconnect loads. Keep them in a dry place above freezing. Top them up monthly with a maintainer."
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
