export const guideSlug = "best-30-amp-solar-generators-for-rvs";
export const guideTitle = "3 Best 30 Amp Solar Generators For Rvs in 2026";
export const metaTitle = "Best 30 Amp Solar Generators For Rvs in 2026";
export const metaDescription = "Best 30 amp solar generators for RVs compared on TT-30 outlet, watt-hours, solar input and charging for campers who skip the hookup.";
export const mainKeyword = "best 30 amp solar generators for rvs";
export const introParagraphs = [
  "A 30 amp RV connects through a TT-30 inlet, so a solar generator with a TT-30 outlet or cable can power the rig without adapters. The big question then becomes how much battery you need and how you plan to recharge it.",
  "Three BLUETTI systems fit this need, from a 2304Wh unit with a panel to a 3014Wh and a 2764Wh expandable system. Each was compared on the TT-30 or 30A connection, capacity, output and charging methods the listing names."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/power-station-campsite.webp";
export const heroImageAlt = "Jeep camp with a tent, solar panels and a portable power station at a pine forest campsite";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-30-amp-solar-generators-for-rvs-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "BLUETTI Solar Generator Elite 300 & Charger 2 Alternator Charger 3014.4Wh",
    "price": "$1599.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YF-n2JswL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GKSKGKLX?tag=rvgearlab-20",
    "description": "The BLUETTI Elite 300 stores 3014Wh and delivers 2400W continuous with a 4800W surge. It has a dedicated TT-30 RV outlet, a 12V/30A DC output and a less than 10ms UPS, and the listing pairs it with a 1200W Charger 2 alternator charger (shipped separately).\n\nAgainst the Apex 300 it costs far less, and against the AC200PL it holds about 700Wh more. The alternator charger can refill it in about 3.2 hours while driving.\n\nIt suits full-time travelers who drive often and want to recharge from the vehicle. The listing calls it a compact 3kWh unit.",
    "specs": [
      "3014Wh, 2400W, TT-30 outlet",
      "1200W alternator charging",
      "12V/30A DC output"
    ],
    "pros": [
      "Dedicated TT-30 RV outlet needs no adapter",
      "Recharges from the alternator in about 3.2 hours",
      "Largest single-unit capacity here",
      "Under 10ms UPS switchover"
    ],
    "cons": [
      "Alternator charger ships separately",
      "No panel is included"
    ],
    "bestFor": "RVers who drive between camps",
    "take": "A high-capacity unit with a TT-30 outlet and fast vehicle charging.",
    "catch": "It carries a high price even before panels are added."
  },
  {
    "id": "best-30-amp-solar-generators-for-rvs-2",
    "rank": 2,
    "badge": "Best Kit With Panel",
    "name": "BLUETTI AC200PL Solar Generator & 350W Solar Panel Included 2304Wh LiFePO4",
    "price": "$1799.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ZqpeGyApL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FR8DZ98L?tag=rvgearlab-20",
    "description": "The BLUETTI AC200PL holds 2304Wh in LiFePO4 cells and listed with a 350W solar panel (shipped separately). It has four AC outlets, a 30A TT30 port, a 48V/8A DC port, two 100W PD ports and 11 ports in all.\n\nIt costs a little more than the Elite 300 and lists a panel in the package, which the Elite does not. AC input of 2400W refills it from 0 to 80 percent in about an hour.\n\nIt suits campers who want a TT30 port and a panel in one purchase. The battery is rated for 3000 plus cycles, or about 10 years.",
    "specs": [
      "2304Wh LiFePO4, TT30 port",
      "350W panel in the kit",
      "3000 plus cycle rating"
    ],
    "pros": [
      "Panel included in the listing",
      "11 ports including TT30 and PD",
      "Fast AC charging in about an hour",
      "BMS protects against overcharging and shorts"
    ],
    "cons": [
      "Smallest battery of the three",
      "350W solar needs 5 to 10 hours to charge"
    ],
    "bestFor": "Solar kit buyers who want a panel",
    "take": "The only pick here whose listing includes a solar panel, with a TT30 port built in.",
    "catch": "Large 30A loads will drain 2304Wh faster than the bigger pair."
  },
  {
    "id": "best-30-amp-solar-generators-for-rvs-3",
    "rank": 3,
    "badge": "Best for Expansion",
    "name": "BLUETTI Apex 300 Solar Generator & B300K with TT-30 30A Cable Power Station",
    "price": "$2999.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41T4iOjuSLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJ1YTBKR?tag=rvgearlab-20",
    "description": "The BLUETTI Apex 300 is a 2764.8Wh system sold with a B300K and a TT-30 30A cable. It offers 3840W of power, 120V/240V simultaneous output, 2400W of built-in solar input and expansion to 58kWh with additional batteries.\n\nIt is the most expandable pick and the only one here with 240V output. Parallel units reach 5.5 to 8.3kWh, and it costs nearly double the Elite 300.\n\nIt suits RVers who want a home-scale system that grows over time. The listing names 6000 plus cycles and a 17-year lifespan.",
    "specs": [
      "2764.8Wh, 3840W, 120V/240V",
      "TT-30 30A cable included",
      "Expands to 58kWh"
    ],
    "pros": [
      "Dual 120V and 240V output",
      "Expands far beyond the base battery",
      "Highest solar input of the three",
      "6000 plus cycle second-generation LiFePO4"
    ],
    "cons": [
      "Most expensive by a wide margin",
      "Overbuilt for a weekend camper"
    ],
    "bestFor": "Large rigs and whole-home backup",
    "take": "The expandable choice for big rigs and home backup, with the highest output.",
    "catch": "The base unit holds less than the Elite 300 despite the higher price."
  }
];

export const howWeEvaluated = [
  {
    "title": "TT-30 connection",
    "description": "The TT-30 outlet or cable named on each listing was the first filter."
  },
  {
    "title": "Capacity",
    "description": "Stated Wh from 2304 to 3014 were compared."
  },
  {
    "title": "Output",
    "description": "Continuous and surge watts, and voltage options, were checked."
  },
  {
    "title": "Charging methods",
    "description": "Solar, AC and alternator charging were compared."
  },
  {
    "title": "Battery life",
    "description": "LiFePO4 cycle ratings were noted."
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
    "subheading": "By Rig Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Weekend trailer with a 30A inlet",
          "BLUETTI AC200PL Kit",
          "2304Wh with a TT30 port and a panel."
        ],
        [
          "Driving between sites often",
          "BLUETTI Elite 300",
          "1200W alternator charging."
        ],
        [
          "Large rig with 240V needs",
          "BLUETTI Apex 300 System",
          "120V and 240V output."
        ],
        [
          "Long boondocking stays",
          "BLUETTI Apex 300 System",
          "Expandable to 58kWh."
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
          "$1590 to $1600",
          "BLUETTI Elite 300"
        ],
        [
          "$1790 to $1800",
          "BLUETTI AC200PL Kit"
        ],
        [
          "$2990 to $3000",
          "BLUETTI Apex 300 System"
        ]
      ]
    }
  },
  {
    "subheading": "Fixed Capacity vs Expandable System",
    "cards": [
      {
        "label": "Fixed capacity",
        "text": "A single unit gives all its watt-hours in one box. The BLUETTI Elite 300 and BLUETTI AC200PL Kit work this way."
      },
      {
        "label": "Expandable",
        "text": "An expandable system adds batteries and charges from more sources. The BLUETTI Apex 300 System is built for it."
      }
    ],
    "note": "Most RVers should start with the BLUETTI Elite 300 and consider the BLUETTI Apex 300 System only for whole-rig plans."
  },
  {
    "subheading": "By Recharging Method",
    "table": {
      "headers": [
        "Source",
        "Recommended pick"
      ],
      "rows": [
        [
          "Alternator while driving",
          "BLUETTI Elite 300"
        ],
        [
          "Included solar panel",
          "BLUETTI AC200PL Kit"
        ],
        [
          "Generator and big solar array",
          "BLUETTI Apex 300 System"
        ]
      ]
    }
  },
  {
    "subheading": "30 Amp RV Hookup Replacement Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A named TT-30 outlet or cable and a continuous output that covers the loads you actually run."
      },
      {
        "label": "In this comparison",
        "text": "The BLUETTI Elite 300 lists a dedicated TT-30 outlet, and the BLUETTI Apex 300 System ships with a TT-30 cable."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BLUETTI Apex 300 System if you want 240V output and room to expand later."
      },
      {
        "label": "Save if",
        "text": "Save with the BLUETTI AC200PL Kit, which lists a TT30 port and a panel in one package at a lower price than the Apex 300."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "TT-30 outlet and cable",
    "explanation": "A 30 amp RV plugs into a TT-30 receptacle, and a unit with that outlet or cable avoids adapters. Some listings pair the outlet with a 12V/30A DC output for other gear. Check that the exact TT-30 name appears on the listing."
  },
  {
    "criterion": "Total watt limit",
    "explanation": "A 30 amp RV circuit can reach 3600W, but the solar generator only supplies what its output allows. A 2400W unit cannot run an air conditioner plus a microwave together. Add up running watts, and the startup surge of the air conditioner."
  },
  {
    "criterion": "Capacity and solar recharge",
    "explanation": "A 2304Wh battery holds about one day of moderate RV use, and a few hundred watts of sun refill it in a day or two. Unlike a gas generator, solar needs good weather. Check the panel input rating and charge times on the listing."
  },
  {
    "criterion": "Alternator and AC charging",
    "explanation": "Driving gives the best chance to recharge, and an alternator charger can refill a large battery in a few hours. AC charging takes about an hour on the listed units, which suits campground stops. Check which charger is included or sold separately."
  },
  {
    "criterion": "Expansion and warranty",
    "explanation": "Systems like the Apex 300 expand with extra batteries, which spreads cost over time. Cycle ratings from 3000 to over 6000 show how long a unit lasts. Check what is included in the box."
  }
];

export const faq = [
  {
    "q": "Can a solar generator run a 30 amp RV?",
    "a": "It can run what its output allows, which is far less than a full campground hookup. The BLUETTI Elite 300 gives 2400W. Check your largest appliance before connecting."
  },
  {
    "q": "What is the biggest mistake with RV solar generators?",
    "a": "Ignoring startup surge from an air conditioner. A unit may handle the running watts but not the surge. The BLUETTI Apex 300 System lists 3840W for that reason."
  },
  {
    "q": "Is the cheaper kit enough?",
    "a": "The BLUETTI AC200PL Kit suits a smaller rig, since it holds 2304Wh. The BLUETTI Elite 300 holds about 700Wh more. Pick based on how many days you stay off grid."
  },
  {
    "q": "How do I connect it to my RV?",
    "a": "Plug a TT-30 cable from the generator's TT-30 outlet into the RV inlet, with the RV loads switched off first. The BLUETTI Apex 300 System ships with that cable. Turn on loads one at a time."
  },
  {
    "q": "How do I maintain it?",
    "a": "Keep the battery between about 20 and 80 percent for storage. Store it indoors, away from freezing or high heat. Update the app firmware when prompted."
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
