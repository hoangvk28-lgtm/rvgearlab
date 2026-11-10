export const guideSlug = "best-deep-cycle-batteries-under-200";
export const guideTitle = "6 Best Deep Cycle Batteries Under 200 in 2026";
export const metaTitle = "Best Deep Cycle Batteries Under 200 in 2026";
export const metaDescription = "Best deep cycle batteries under $200: six 12V lithium, AGM and gel batteries from 75Ah to 120Ah compared on capacity, cranking power and weight.";
export const mainKeyword = "best deep cycle batteries under 200";
export const introParagraphs = [
  "Two hundred dollars is the first price where a deep cycle battery can store over 1000Wh. The six picks here range from a 120Ah lithium marine battery to 75Ah gel and AGM units and two dual-purpose AGMs that can also start an engine.",
  "The list is ranked by stored energy per dollar and by how many jobs a battery can do. A lithium leads, and the dual-purpose AGMs show when a battery that starts an engine and runs a trolling motor is worth the extra weight."
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
    "id": "best-deep-cycle-batteries-under-200-1",
    "rank": 1,
    "badge": "Best Value Under $200",
    "name": "12V 120Ah LiFePO4 Marine Battery with Bluetooth APP",
    "price": "$170.55",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51t2w1cxvYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GRGPF7QX?tag=rvgearlab-20",
    "description": "GOKWH is a 12.8V 120Ah LiFePO4 marine battery that stores 1536Wh. It has a Bluetooth 5.0 app, a 100A BMS and low-temperature protection, in a Group 24 case.\n\nAt about $171 it stores 60 percent more than the 75Ah VEVOR AGM for about the same money. The app shows charge, voltage and current, which the AGM and gel picks cannot.\n\nIt suits a boat, camper or van that needs real capacity and monitoring. It is the best amp-hour value here.",
    "specs": [
      "12.8V 120Ah, 1536Wh",
      "Bluetooth 5.0 app",
      "100A BMS, cold protection"
    ],
    "pros": [
      "Stores 1536Wh",
      "App tracks charge and current",
      "Low-temperature protection",
      "Group 24 size"
    ],
    "cons": [
      "Needs a lithium charger",
      "Heavier packs of 120Ah need a sturdy tray"
    ],
    "bestFor": "Boats and camper banks",
    "take": "The most stored energy and monitoring under $200.",
    "catch": "A lithium-compatible charger is required."
  },
  {
    "id": "best-deep-cycle-batteries-under-200-2",
    "rank": 2,
    "badge": "Best AGM Pick",
    "name": "VEVOR 12V 75Ah Deep Cycle Battery",
    "price": "$169.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/317dTo3pzBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FHWM1TF7?tag=rvgearlab-20",
    "description": "VEVOR is a 12V 75Ah sealed AGM battery rated for 300 to 1500 cycles between 30 and 100 percent depth of discharge. It accepts a maximum charge current of 15A and includes low-temperature protection for use from -4F to 140F.\n\nAt about $170 it costs about the same as the GOKWH 120Ah and stores 45Ah less. It keeps up to 65 percent of its charge after 12 months, so it stores better than a flooded battery.\n\nIt suits a tight budget that needs a standard lead-acid charger. It is also easier to charge in cold weather.",
    "specs": [
      "12V 75Ah sealed AGM",
      "300-1500 cycles",
      "-4F to 140F range"
    ],
    "pros": [
      "Wide temperature range",
      "Low self-discharge in storage",
      "Sealed and maintenance-free",
      "Works with standard AGM chargers"
    ],
    "cons": [
      "Less capacity than the lithium",
      "Heavy for its size"
    ],
    "bestFor": "Cold-climate camping",
    "take": "A conventional AGM that is easy to charge.",
    "catch": "Cycle life is a fraction of lithium."
  },
  {
    "id": "best-deep-cycle-batteries-under-200-3",
    "rank": 3,
    "badge": "Best Gel Pick",
    "name": "ExpertPower 12V 75Ah Gel Deep Cycle Solar Battery",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51J22rFEFFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08FPVRXBZ?tag=rvgearlab-20",
    "description": "ExpertPower is a sealed 12V 75Ah gel battery with an impact-resistant housing and a standard terminal layout. The gel electrolyte prevents spills, so it can be mounted in several orientations.\n\nAt about $170 it costs the same as the VEVOR 75Ah AGM and tolerates vibration better. It trails the GOKWH 120Ah on capacity.\n\nIt suits a solar kit or boat where vibration and orientation matter. It arrives ready to install.",
    "specs": [
      "12V 75Ah sealed gel",
      "Impact-resistant housing",
      "Standard terminals"
    ],
    "pros": [
      "Mounts in several orientations",
      "Handles shock and vibration",
      "Spill-proof sealed gel",
      "Ready to install"
    ],
    "cons": [
      "Needs a gel-safe charger",
      "Less capacity than lithium"
    ],
    "bestFor": "Solar and boat kits",
    "take": "A rugged gel battery for vibrating installs.",
    "catch": "Do not charge it with an AGM profile."
  },
  {
    "id": "best-deep-cycle-batteries-under-200-4",
    "rank": 4,
    "badge": "Best Dual-Purpose",
    "name": "UPLUS BCI Group 24M Dual Purpose AGM Marine Battery 12V 79AH 550CCA",
    "price": "$151.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ErUzfS4yL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FDQRKM25?tag=rvgearlab-20",
    "description": "UPLUS is a Group 24M dual-purpose AGM marine battery rated 12V 79Ah with 550 cold cranking amps and 150 reserve capacity. It starts engines up to 350 horsepower and resists vibration.\n\nAt about $190 it costs more than the VEVOR 75Ah and does the extra job of starting an engine. It stores less than the GOKWH 120Ah.\n\nIt suits a boat with one battery doing both jobs. Space-saving is its main point.",
    "specs": [
      "12V 79Ah AGM, 550 CCA",
      "150 RC, Group 24M",
      "Vibration-resistant plates"
    ],
    "pros": [
      "Starts engines and runs electronics",
      "Resists wave pounding",
      "Thick cast plates",
      "Saves a second battery"
    ],
    "cons": [
      "Less deep-cycle life than a true deep cycle",
      "Heavy lead-acid weight"
    ],
    "bestFor": "Single-battery boats",
    "take": "One battery that starts the motor and runs the gear.",
    "catch": "Dual-purpose batteries do not like deep drains."
  },
  {
    "id": "best-deep-cycle-batteries-under-200-5",
    "rank": 5,
    "badge": "Best Larger AGM",
    "name": "Banshee Group 27M AGM Marine Deep Cycle Battery",
    "price": "$199.55",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410vqB+4loL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B088X5SHK7?tag=rvgearlab-20",
    "description": "Banshee is a Group 27M AGM marine battery rated 12V 90Ah with 600 cold cranking amps and a 185 minute reserve capacity. It has a carry handle and SAE terminals.\n\nAt about $200 it is at the cap and stores 15Ah more than the VEVOR 75Ah. The Mighty Max MM-G24M gives the same capacity in a smaller Group 24M case.\n\nIt suits a boat or camper that needs 90Ah and a start-capable battery. It is sealed and needs no watering.",
    "specs": [
      "12V 90Ah AGM, 600 CCA",
      "185 minute reserve capacity",
      "Carry handle, SAE terminals"
    ],
    "pros": [
      "600 cold cranking amps",
      "Sealed AGM, no watering",
      "Carry handle",
      "185 minute reserve capacity"
    ],
    "cons": [
      "Costs the full budget",
      "Heavy lead-acid weight"
    ],
    "bestFor": "Boats and larger campers",
    "take": "A start-capable 90Ah AGM at the top of the budget.",
    "catch": "Lead-acid weight adds up at 90Ah."
  },
  {
    "id": "best-deep-cycle-batteries-under-200-6",
    "rank": 6,
    "badge": "Best Cranking Power",
    "name": "Mighty Max Battery MM-G24M",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418st-JvIXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G83YHSRK?tag=rvgearlab-20",
    "description": "Mighty Max MM-G24M is a 12V 90Ah Group 24M deep-cycle marine AGM that delivers 550 CCA, 700 CA and 700 marine cranking amps. It is dual-purpose, so it can start an engine and power electronics.\n\nAt about $200 it matches the Banshee 27M in price and capacity and trades 50 CCA for higher marine cranking amps. It is smaller in Group 24M size.\n\nIt suits a boat that needs strong starts and deep cycling from one battery. It handles cold well.",
    "specs": [
      "12V 90Ah AGM, 550 CCA",
      "700 CA and 700 MCA",
      "Group 24M dual-purpose"
    ],
    "pros": [
      "Strong marine cranking amps",
      "Dual-purpose design",
      "Group 24M size",
      "Sealed AGM"
    ],
    "cons": [
      "Costs the full budget",
      "Heavy lead-acid weight"
    ],
    "bestFor": "Boats that need hard starts",
    "take": "A powerful dual-purpose AGM for a boat.",
    "catch": "Do not drain a dual-purpose battery to zero."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity per dollar",
    "description": "Amp-hours from 75Ah to 120Ah were set against the price of each battery."
  },
  {
    "title": "Chemistry",
    "description": "LiFePO4, AGM and gel were compared for weight, cycle life and charger needs."
  },
  {
    "title": "Cranking power",
    "description": "Cold cranking and marine cranking amps were compared for the dual-purpose picks."
  },
  {
    "title": "Monitoring and protection",
    "description": "The Bluetooth app, BMS and low-temperature protection were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is at or under $200, and the top pick offers the most stored energy for the money."
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
          "House battery with monitoring",
          "GOKWH 120Ah LiFePO4",
          "1536Wh with an app."
        ],
        [
          "Cold-climate AGM",
          "VEVOR 75Ah AGM",
          "-4F to 140F range."
        ],
        [
          "Vibration-heavy solar or boat",
          "ExpertPower 75Ah Gel",
          "Rugged sealed gel."
        ],
        [
          "One battery that starts and runs gear",
          "UPLUS 24M Dual",
          "550 CCA."
        ],
        [
          "Larger AGM, 90Ah",
          "Banshee 27M AGM",
          "600 CCA and 185 minutes."
        ],
        [
          "Hard marine starts",
          "Mighty Max MM-G24M",
          "700 marine cranking amps."
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
          "$160 to $170",
          "VEVOR 75Ah AGM or ExpertPower 75Ah Gel"
        ],
        [
          "$170 to $190",
          "GOKWH 120Ah LiFePO4 or UPLUS 24M Dual"
        ],
        [
          "$190 to $200",
          "Banshee 27M AGM or Mighty Max MM-G24M"
        ]
      ]
    }
  },
  {
    "subheading": "Lithium vs lead-acid",
    "cards": [
      {
        "label": "Lithium",
        "text": "The GOKWH 120Ah LiFePO4 stores the most, weighs the least and has an app, but needs a lithium charger."
      },
      {
        "label": "Lead-acid",
        "text": "The VEVOR 75Ah AGM, ExpertPower 75Ah Gel, UPLUS 24M Dual, Banshee 27M AGM and Mighty Max MM-G24M work with common chargers and offer cranking power on the dual-purpose ones."
      }
    ],
    "note": "Most buyers who only need house power should take the GOKWH 120Ah LiFePO4."
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
          "About $170",
          "GOKWH 120Ah LiFePO4"
        ],
        [
          "About $170",
          "VEVOR 75Ah AGM"
        ],
        [
          "About $170",
          "ExpertPower 75Ah Gel"
        ],
        [
          "About $190",
          "UPLUS 24M Dual"
        ],
        [
          "About $200",
          "Banshee 27M AGM"
        ],
        [
          "About $200",
          "Mighty Max MM-G24M"
        ]
      ]
    }
  },
  {
    "subheading": "For a trolling motor and boat accessories specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a Group 24 or 27 size, enough amp-hours for a day of motor use and cranking power if one battery must start the engine."
      },
      {
        "label": "In this comparison",
        "text": "The GOKWH 120Ah LiFePO4 gives the longest runtime. The Mighty Max MM-G24M adds 700 marine cranking amps if the same battery must start the engine."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you need cranking power: the Mighty Max MM-G24M and Banshee 27M AGM both start engines, and the UPLUS 24M Dual adds a 24M size."
      },
      {
        "label": "Save if",
        "text": "Save if you only need house power: the GOKWH 120Ah LiFePO4 gives the most capacity, and the VEVOR 75Ah AGM is the budget lead-acid choice."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What $200 buys",
    "explanation": "At this price a lithium battery of 120Ah now competes with lead-acid at 75 to 90Ah. That means you can store about 1536Wh instead of about 900Wh, with less weight. Decide whether you need cranking power before choosing, since lithium here is deep-cycle only, and note that the lithium pick here has no cranking rating at all so you can compare the two chemistries fairly."
  },
  {
    "criterion": "Deep cycle vs dual-purpose",
    "explanation": "A deep cycle battery tolerates repeated deep drains, while a dual-purpose battery trades some of that for starting power. Draining a dual-purpose battery below 50 percent shortens its life. Check whether the battery lists cold cranking amps, which signals a starter, and treat those as the batteries to avoid draining deeply before you buy."
  },
  {
    "criterion": "Cold cranking and reserve",
    "explanation": "Cold cranking amps (CCA) show how hard a battery can crank an engine in cold, and reserve capacity shows how many minutes it can run a 25A load. A 550 CCA battery starts most outboards up to 350 horsepower. Check CCA against your engine's requirement."
  },
  {
    "criterion": "Charger and cycle life",
    "explanation": "Lithium needs a lithium profile at about 14.4 to 14.6V, AGM needs an AGM profile and gel needs a lower gel one. A wrong profile cuts the life of any battery. Check what your charger and solar controller support and the cycle claim that sits beside it in the specifications, since lead-acid and lithium need different voltages."
  },
  {
    "criterion": "Weight and Group size",
    "explanation": "Group size, such as 24M or 27M, defines the case footprint and fits standard trays. A 90Ah lead-acid battery weighs around 55 to 65 lb, while a 120Ah lithium weighs far less. Measure your tray before you order and allow room for terminal clearance and a strap or hold-down."
  },
  {
    "criterion": "Monitoring",
    "explanation": "A Bluetooth app that shows voltage, current and state of charge helps avoid draining a battery too far. It also helps find a parasitic load. Check whether the app exists for your phone, and whether it works without a subscription since some brands lock features behind an account."
  }
];

export const faq = [
  {
    "q": "Can a dual-purpose battery run a trolling motor?",
    "a": "Yes, but not as long as a true deep cycle of the same size. The Mighty Max MM-G24M, Banshee 27M AGM and UPLUS 24M Dual handle moderate cycling. Do not drain them below 50 percent and a lithium option is better for that duty."
  },
  {
    "q": "How long will a 120Ah lithium battery run a fridge?",
    "a": "A 12V compressor fridge uses about 40 to 60 watt-hours a day in mild weather, so a 120Ah lithium holds about 1536Wh and can run one for several days. Weather and door openings change the figure. Add lights and a pump for a shorter time."
  },
  {
    "q": "Is the GOKWH 120Ah worth more than the VEVOR 75Ah?",
    "a": "Yes for house use, because it stores 60 percent more and weighs far less for about the same money. It also comes with an app. Choose the VEVOR 75Ah AGM only if your charger cannot be changed."
  },
  {
    "q": "Does a lithium battery work in the cold?",
    "a": "It can, but charging below freezing can damage the cells unless the battery has low-temperature protection. The GOKWH 120Ah LiFePO4 includes it. Lead-acid like the VEVOR 75Ah AGM tolerates cold charging better before relying on it."
  },
  {
    "q": "How do I connect two batteries?",
    "a": "Wire them in parallel with matched cables of equal length, and use batteries of the same type and age. Never mix lithium and lead-acid. Fuse each battery separately so that one weak battery does not drag the other down."
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
