export const guideSlug = "best-portable-generators-under-1000";
export const guideTitle = "5 Best Portable Generators Under 1000 in 2026";
export const metaTitle = "Best Portable Generators Under 1000 in 2026";
export const metaDescription = "Best portable generators under $1000: five 3300 to 5500W gas and dual-fuel generators compared on running watts, CO safety, noise and carrying weight.";
export const mainKeyword = "best portable generators under 1000";
export const introParagraphs = [
  "A thousand dollars is the ceiling for a household-class portable generator. The five picks here run from about $550 to $999, and every one of them can power a fridge, a furnace blower and lights during an outage.",
  "What separates them is output, fuel flexibility, noise and weight. The $450 spread buys either more watts, a quieter enclosed case or dual-fuel convenience, and the notes show which one earns its price."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/furniture-chairs-by-tent.webp";
export const heroImageAlt = "Two folding camping chairs beside a tent in a redwood forest";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-portable-generators-under-1000-1",
    "rank": 1,
    "badge": "Best Value Under $1000",
    "name": "DuroMax XP5500HX 5",
    "price": "$599.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/515riPGkWVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B086Z4BMB8?tag=rvgearlab-20",
    "description": "DuroMax XP5500HX produces 5500 watts from a 210cc engine that runs on gasoline or propane. It has two 120V GFCI outlets, a 120/240V 30A twist-lock outlet, an MX2 switch that doubles the 120V power, a digital control center and a CO alert.\n\nIt costs about $599, $400 less than the Westinghouse iGen5000DFc, and offers more peak output. An open frame makes it louder and heavier, which is where the Westinghouse wins.\n\nChoose it for home backup and a big RV on a budget. All copper windings are built to last for years.",
    "specs": [
      "5500 watts, gas or propane",
      "120/240V 30A, two GFCI",
      "CO alert, MX2 switch"
    ],
    "pros": [
      "Dual fuel at about $599",
      "Copper windings for long life",
      "120/240V 30A twist-lock outlet",
      "CO alert for safety"
    ],
    "cons": [
      "Open frame is louder",
      "Heavier than inverter units"
    ],
    "bestFor": "Home backup and big RVs",
    "take": "The most power and fuel choice for the price.",
    "catch": "Needs outdoor space and distance."
  },
  {
    "id": "best-portable-generators-under-1000-2",
    "rank": 2,
    "badge": "Best Wheeled Big Output",
    "name": "GENMAX Portable Inverter Generator",
    "price": "$549.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ierJJE1zL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09QG1QQ5V?tag=rvgearlab-20",
    "description": "GENMAX pairs a 312cc engine with inverter technology for 6000 peak watts and 5250 rated. It has a steel handle and two wheels, weighs 106.9 lb, has an hour meter, LED alerts for low oil and overload and a CO detect shutdown.\n\nIt costs about $550 and has more rated power than the DuroMax. It runs on gasoline only, and the DuroMax adds propane for $50 more.\n\nChoose it for a big RV or a cabin where moving the unit on wheels matters. It carries a 1-year warranty and lifetime support.",
    "specs": [
      "6000 peak, 5250 rated watts",
      "106.9 lb with two wheels",
      "CO detect shutdown"
    ],
    "pros": [
      "5250 rated watts at about $550",
      "Wheels and handle for moving",
      "CO detect shutdown",
      "Hour meter and LED alerts"
    ],
    "cons": [
      "Gasoline only",
      "1-year warranty is short"
    ],
    "bestFor": "Heavy loads that need wheels",
    "take": "The most rated watts for the lowest price here.",
    "catch": "Plan on two people for loading."
  },
  {
    "id": "best-portable-generators-under-1000-3",
    "rank": 3,
    "badge": "Best Clean Power Mid-Size",
    "name": "Generac 3",
    "price": "$637.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/515W7jwOXEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DD1R1CXC?tag=rvgearlab-20",
    "description": "Generac delivers 2500 running and 3300 starting watts with TruePower sine wave under 3 percent THD. PowerRush gives 50 percent more starting capacity, COsense shuts it down at dangerous CO levels, and a 1.06 gallon tank gives up to 7 hours at 25 percent load.\n\nIt costs about $637, more than the DuroMax and GENMAX, for a smaller output. It is the pick with a recognized brand and automatic CO monitoring.\n\nChoose it for a fridge, lights and laptops at home or a campsite. It suits owners who want a smaller, trusted unit.",
    "specs": [
      "2500 running, 3300 starting watts",
      "COsense CO monitoring",
      "7 hours at 25% load"
    ],
    "pros": [
      "COsense monitors CO and shuts down",
      "PowerRush 50% more starting capacity",
      "Clean sine wave under 3% THD",
      "USB charging"
    ],
    "cons": [
      "Less running power than larger picks",
      "Small 1.06 gallon tank"
    ],
    "bestFor": "Household essentials with CO monitoring",
    "take": "A smaller, smarter unit from a big name.",
    "catch": "Not enough for a big RV air conditioner."
  },
  {
    "id": "best-portable-generators-under-1000-4",
    "rank": 4,
    "badge": "Best Runtime",
    "name": "EFURDEN 7000W Gas Inverter Generator",
    "price": "$699.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4160dpQTxgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HC1W23YY?tag=rvgearlab-20",
    "description": "EFURDEN offers 7000 peak and 5500 running watts from a 223cc engine with under 2 percent THD. With a 3.5 gallon tank and ECO mode it can run 11 hours on a quarter load, and it measures 23.81 by 16.92 by 22.04 inches at 89 lb.\n\nIt is the biggest output in the guide at about $700, with 250W more running power than the GENMAX. It operates at 69 dB from 23 feet.\n\nChoose it for a long outage or a big RV that needs a day of runtime on one tank. It suits owners who want to refuel less.",
    "specs": [
      "7000 peak, 5500 running watts",
      "3.5 gallon tank, 11 hours",
      "Under 2% THD, 89 lb"
    ],
    "pros": [
      "5500 running watts",
      "Up to 11 hours at 25% load",
      "Under 2% THD",
      "Compact at 89 lb"
    ],
    "cons": [
      "Gasoline only",
      "69 dB is loud"
    ],
    "bestFor": "Long outages and big loads",
    "take": "The most runtime and running watts in the guide.",
    "catch": "Keep spare fuel in an approved can."
  },
  {
    "id": "best-portable-generators-under-1000-5",
    "rank": 5,
    "badge": "Best Quiet Dual Fuel",
    "name": "Westinghouse 5000 Peak Watt Super Quiet Dual Fuel Portable Inverter Generator",
    "price": "$999.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51cs60X1ZjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B099KSY4XG?tag=rvgearlab-20",
    "description": "Westinghouse iGen5000DFc gives 5000 peak and 3900 running watts on gasoline from a 224cc 4-stroke engine with a CO sensor. It runs as low as 52 dBA, has a TT-30R RV outlet, a 5-20R outlet, two USB ports, a remote electric start and uses less than 3 percent THD power.\n\nIt costs $999, $400 more than the DuroMax, and buys quiet running, a remote start and an enclosed case. It can run in parallel with a second unit, and the parallel kit is sold separately.\n\nChoose it for an RV or a neighborhood where noise matters. It suits owners who want the quietest unit at the top of the budget.",
    "specs": [
      "5000 peak, 3900 running watts",
      "As low as 52 dBA",
      "Dual fuel, remote start, CO sensor"
    ],
    "pros": [
      "As low as 52 dBA",
      "Remote electric start",
      "CO sensor",
      "Parallel ready"
    ],
    "cons": [
      "Costs $400 more than the DuroMax",
      "Lower running watts than larger units"
    ],
    "bestFor": "Quiet RV and neighborhood use",
    "take": "The quietest big unit at the top of the budget.",
    "catch": "The price is for quiet, not for power."
  }
];

export const howWeEvaluated = [
  {
    "title": "Running watts",
    "description": "Rated watts from 2500W to 5500W were compared against household and RV loads."
  },
  {
    "title": "Noise",
    "description": "Stated decibel levels from 52 to 69 dB were compared."
  },
  {
    "title": "Safety",
    "description": "CO sensors and shutdowns were noted."
  },
  {
    "title": "Fuel",
    "description": "Gas, dual fuel and tank size were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is under $1000, and the top pick offers the most power and flexibility for the price."
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
    "subheading": "By use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Best value for home backup",
          "DuroMax XP5500HX",
          "5500 watts, dual fuel."
        ],
        [
          "Heavy loads on wheels",
          "GENMAX 6000W",
          "5250 rated, 2 wheels."
        ],
        [
          "Smaller unit with CO monitoring",
          "Generac 3300",
          "COsense shutdown."
        ],
        [
          "Long outages",
          "EFURDEN 7000W",
          "11 hours at 25%."
        ],
        [
          "Quiet RV",
          "Westinghouse iGen5000DFc",
          "52 dBA."
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
          "$540 to $600",
          "GENMAX 6000W or DuroMax XP5500HX"
        ],
        [
          "$630 to $700",
          "Generac 3300 or EFURDEN 7000W"
        ],
        [
          "$990 to $1000",
          "Westinghouse iGen5000DFc"
        ]
      ]
    }
  },
  {
    "subheading": "Open frame vs enclosed inverter",
    "cards": [
      {
        "label": "Open frame",
        "text": "The DuroMax XP5500HX, GENMAX 6000W and EFURDEN 7000W give the most watts per dollar but are louder and heavier."
      },
      {
        "label": "Enclosed inverter",
        "text": "The Generac 3300 and Westinghouse iGen5000DFc run quieter and cleaner at a higher price per watt."
      }
    ],
    "note": "Most buyers should take the DuroMax XP5500HX, and noise-sensitive buyers the Westinghouse iGen5000DFc."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Budget band",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $550",
          "GENMAX 6000W"
        ],
        [
          "About $599",
          "DuroMax XP5500HX"
        ],
        [
          "About $637",
          "Generac 3300"
        ],
        [
          "About $700",
          "EFURDEN 7000W"
        ],
        [
          "About $999",
          "Westinghouse iGen5000DFc"
        ]
      ]
    }
  },
  {
    "subheading": "For home outage backup specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for 3500W or more running, a 30A outlet, a CO sensor and propane if you store fuel."
      },
      {
        "label": "In this comparison",
        "text": "The DuroMax XP5500HX gives 5500 watts with dual fuel, and the Generac 3300 adds COsense."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you need silence and a remote start, which the Westinghouse iGen5000DFc provides at $999. Spend on the Generac 3300 for CO monitoring in a smaller unit."
      },
      {
        "label": "Save if",
        "text": "Save if you want the most power per dollar, since the GENMAX 6000W and DuroMax XP5500HX cost about $550 to $600."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Running watts for a home",
    "explanation": "A fridge needs about 700W to start and 150W to run, a furnace blower 800W and a sump pump 1000W. A 3500W running unit covers essentials while a 5000W unit covers more. Total the loads and add 20 percent, so a 5000W running unit leaves room for a second fridge or a well pump."
  },
  {
    "criterion": "CO sensors",
    "explanation": "A CO shutdown sensor turns the generator off at dangerous CO levels, which helps if it is placed badly. It does not replace the rule to keep it 20 feet away from windows and doors. Look for a CO sensor or alert in the specs, and use a battery CO alarm inside."
  },
  {
    "criterion": "Open frame vs inverter",
    "explanation": "An open-frame unit like the DuroMax is cheaper per watt but louder, about 70 dB or more, while an enclosed inverter like the Westinghouse runs at 52 dBA. Inverters also produce cleaner power for electronics. Choose by how close the unit will be to neighbors."
  },
  {
    "criterion": "Fuel choice",
    "explanation": "Gasoline gives the most power but goes stale in 3 to 6 months. Propane stores for years and burns cleaner but gives about 10 percent less power. Dual fuel gives you both. Check the running watts on each fuel, so write down the propane running watts on the data plate before buying."
  },
  {
    "criterion": "Weight and wheels",
    "explanation": "A 90 to 110 lb generator needs wheels, a handle and often two people. Wheels matter on gravel and grass. Check the weight and the kit, and a unit near 100 lb needs wheels, a ramp for a truck bed and a second person to load it, so check the dry weight in the specs and plan how it will get from the truck to the pad on gravel or grass before you buy."
  },
  {
    "criterion": "Transfer switch and cords",
    "explanation": "Powering a house needs a transfer switch or an interlock installed by an electrician, never a backfeed cord. A 30A or 120/240V outlet matches the inlet. Check the outlet type before buying cords, and a 30A or 120/240V outlet only matters if the cord and inlet match the generator, so check the plug type on your inlet box before buying cords."
  }
];

export const faq = [
  {
    "q": "Can I power my house with one of these?",
    "a": "You can power essentials such as a fridge, lights and a furnace blower, but only through a transfer switch or interlock installed by an electrician. Never plug a generator into a wall outlet. A 5000W unit like the DuroMax XP5500HX covers many homes' essentials."
  },
  {
    "q": "How do I store propane for a generator?",
    "a": "Keep cylinders upright outdoors in a ventilated spot, away from heat and flames. The DuroMax XP5500HX and Westinghouse iGen5000DFc run on propane through a regulator. Never store a propane tank indoors, and replace a cylinder that is rusted or past its 12 year date."
  },
  {
    "q": "Why does the CO alert matter?",
    "a": "Generators produce carbon monoxide that can drift into a home through doors and windows. A CO shutdown sensor, as on the GENMAX 6000W, turns the unit off at dangerous levels. Keep it 20 feet away and use a battery CO alarm."
  },
  {
    "q": "How loud are these generators?",
    "a": "The Westinghouse iGen5000DFc runs as low as 52 dBA, while the EFURDEN 7000W is 69 dB at 23 feet and open-frame units can be louder. A 10 dB difference sounds twice as loud. Check your area's noise rules."
  },
  {
    "q": "How often should I run a generator?",
    "a": "Run it for 10 to 15 minutes under load every month and change the oil on the maker's schedule. Stabilize the fuel before storage. A neglected carburetor is the top reason a generator fails to start."
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
