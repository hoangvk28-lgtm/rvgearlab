export const guideSlug = "best-dual-fuel-inverter-generators-for-camping";
export const guideTitle = "6 Best Dual Fuel Inverter Generators For Camping in 2026";
export const metaTitle = "Best Dual Fuel Inverter Generators For Camping";
export const metaDescription = "Best dual fuel inverter generators for camping compared on gas versus propane output, runtime, noise figures and CO shutdown, from 1600W to 5100W.";
export const mainKeyword = "best dual fuel inverter generators for camping";
export const introParagraphs = [
  "A dual fuel inverter generator burns gasoline or propane, which matters at a campsite where a 20 lb propane tank is easier to store and carry than a can of gas. The catch is that propane almost always means a drop in output, so the useful spec is the rated watts on each fuel.",
  "Six dual fuel inverter generators were compared on gas and propane ratings, runtime, noise figures, outlets and CO protection. Every unit must run outdoors, well away from tents and campers, whichever fuel you choose."
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
    "id": "best-dual-fuel-inverter-generators-for-camping-1",
    "rank": 1,
    "badge": "Best for Big Power",
    "name": "WEN 6800-Watt Dual Fuel RV-Ready Electric Start Portable Inverter Generator with Fuel Shut Off and CO Watchdog",
    "price": "$798.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413AI-l4XIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DVF1RPCJ?tag=rvgearlab-amz-20",
    "description": "The WEN lists 6800 surge and 5100 rated watts on gasoline and 6000 surge and 4500 rated on propane. A bonded-neutral 240V configuration, an L14-30R receptacle and a TT-30R RV outlet are included, and a CO Watchdog shuts the unit down on dangerous levels.\n\nIt is the most powerful pick, offering 1100 more rated gas watts than the ERAYAK. Compared with the BILT HARD 5500W it adds a 240V outlet and electric start.\n\nIt suits RV owners who run two air conditioners or charge an electric vehicle at Level 2 low power. Wheels and a telescoping handle make it movable.",
    "specs": [
      "5100 rated watts gas, 4500 propane",
      "240V L14-30R plus TT-30R",
      "CO Watchdog shutdown"
    ],
    "pros": [
      "Highest output of the six",
      "240V and RV outlets",
      "CO Watchdog shutdown",
      "Wheels and telescoping handle"
    ],
    "cons": [
      "Priciest and heaviest of the six",
      "No decibel figure on the listing"
    ],
    "bestFor": "Big RVs and EV backup",
    "take": "The only pick with 240V output and enough watts for large rigs.",
    "catch": "Heavy and expensive, so it only pays off for large loads."
  },
  {
    "id": "best-dual-fuel-inverter-generators-for-camping-2",
    "rank": 2,
    "badge": "Best Propane Runtime",
    "name": "Champion 4000-Watt Dual Fuel RV Ready Portable Inverter Generator",
    "price": "$731.66",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41zlMnJ0QvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D6SQR1L1?tag=rvgearlab-amz-20",
    "description": "The Champion lists 4000 starting and 3000 running watts on gasoline with up to 10 hours of runtime, and 2700 running watts on propane for up to 25 hours. Noise is 64 dBA from 23 ft, and CO Shield shuts the unit down automatically.\n\nIt has the longest stated propane runtime and a named CO shutdown. Compared with the PowerSmart it is louder on paper and costs more, with a TT-30R outlet in exchange.\n\nIt suits campers who want propane for storage and a recognised brand. Parallel use with a Champion unit is possible with a kit.",
    "specs": [
      "3000 running watts gas, 2700 propane",
      "64 dBA from 23 ft",
      "25 hours on propane"
    ],
    "pros": [
      "25 hours on propane",
      "CO Shield auto shutoff",
      "TT-30R and 20A outlets with <3% THD",
      "Parallel ready with a kit"
    ],
    "cons": [
      "64 dBA is louder than others here",
      "Parallel kit sold separately"
    ],
    "bestFor": "Long propane runs",
    "take": "A propane-first choice with CO Shield and a long runtime.",
    "catch": "The listing states 64 dBA, higher than the 58 to 60 dBA competitors."
  },
  {
    "id": "best-dual-fuel-inverter-generators-for-camping-3",
    "rank": 3,
    "badge": "Best Auto-Switch",
    "name": "ERAYAK 4500W Dual-Fuel Portable Inverter Generator for Home Use",
    "price": "$559.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41S2h7L6c7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D5XZ9JMZ?tag=rvgearlab-amz-20",
    "description": "The ERAYAK lists 4500 peak and 3500 rated watts on gasoline, and 4050 peak and 3150 rated on propane. A gas-priority system auto-switches to gasoline when propane runs low, and the pure sine output holds THD between 0.2 and 1.2 percent.\n\nIt is quieter on paper at 58 dBA at quarter load than the Champion's 64 dBA. Compared with the WEN 6800W it weighs only 54 lb and has less output.\n\nIt suits RV owners who want 30A power at a modest weight. The compact 19.88 by 16.93 by 20.25 inch body fits tight storage bays.",
    "specs": [
      "3500 rated watts gas, 3150 propane",
      "58 dBA at quarter load",
      "54 lb, auto fuel switch"
    ],
    "pros": [
      "Automatic fuel switching",
      "58 dBA at quarter load",
      "Pure sine with very low THD",
      "54 lb, compact"
    ],
    "cons": [
      "Mid-high price",
      "Propane rating is lower than gas"
    ],
    "bestFor": "RV 30A power",
    "take": "A light, quiet dual fuel with an automatic fuel switch.",
    "catch": "Switching priority is gas first, so propane is the backup."
  },
  {
    "id": "best-dual-fuel-inverter-generators-for-camping-4",
    "rank": 4,
    "badge": "Best Certified Pick",
    "name": "PowerSmart 3800 Watt Dual Fuel Inverter Generator for Home Use",
    "price": "$469.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4192C502DML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HGD5GGMC?tag=rvgearlab-amz-20",
    "description": "The PowerSmart lists 3300 running watts on gasoline and 3100 on propane. It runs at 59 dBA in Eco Mode, 8 hours on its 1.3 gal tank or up to 24 hours on a 20 lb propane tank, with CO and low-oil shutdowns.\n\nIt names ANSI/PGMA G300 and UL2201 compliance, which none of the others list. Compared with the Champion it is quieter on paper and cheaper.\n\nIt suits campers who want certification and long propane runs. A 30A twist-lock, a 20A outlet, a 12V DC port and two USB ports are on the panel.",
    "specs": [
      "3300 running gas, 3100 propane",
      "59 dBA in Eco Mode",
      "ANSI/PGMA G300 and UL2201"
    ],
    "pros": [
      "Named ANSI and UL certifications",
      "24 hours on a 20 lb propane tank",
      "CO sensor and low-oil shutdown",
      "Small output drop on propane"
    ],
    "cons": [
      "No RV TT-30R outlet listed",
      "Weight is not stated"
    ],
    "bestFor": "Certified, long-run camping",
    "take": "The most certification-forward dual fuel pick in the list.",
    "catch": "Check the 30A twist-lock fits your cord, since no TT-30R is named."
  },
  {
    "id": "best-dual-fuel-inverter-generators-for-camping-5",
    "rank": 5,
    "badge": "Best Value Big Unit",
    "name": "BILT HARD 5500W Dual Fuel Inverter Generator",
    "price": "$415.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51ucAFBoKIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HGR2586Z?tag=rvgearlab-amz-20",
    "description": "The BILT HARD lists 5500 starting and 4000 running watts on gasoline and 5000 starting and 3600 running on LPG. A 160cc engine, a digital display with volts, amps and runtime, a TT-30R RV outlet and CO auto-shutoff are named.\n\nIt offers more rated watts than the PowerSmart at a lower price. Compared with the WEN 6800W it lacks the 240V outlet and costs far less.\n\nIt suits RV and home-backup campers who want 4000 running watts at a moderate price. Parallel connectors let two identical units pair.",
    "specs": [
      "4000 running gas, 3600 LPG",
      "160cc, digital display",
      "TT-30R and CO auto-shutoff"
    ],
    "pros": [
      "4000 running watts for the price",
      "Digital display of runtime and watts",
      "CO auto-shutoff and low-oil protection",
      "TT-30R RV outlet"
    ],
    "cons": [
      "No decibel figure listed",
      "1.14 gal tank limits runtime"
    ],
    "bestFor": "Value RV power",
    "take": "A strong value for RV owners needing 4000 running watts.",
    "catch": "Without a stated noise figure, expect more noise than the inverter-quiet picks."
  },
  {
    "id": "best-dual-fuel-inverter-generators-for-camping-6",
    "rank": 6,
    "badge": "Best Compact Pick",
    "name": "Pulsar 2",
    "price": "$429.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51VD+BT-qDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07J5HD8L9?tag=rvgearlab-amz-20",
    "description": "The Pulsar lists 2200 peak and 1800 rated watts on gas and 2000 peak and 1600 rated watts on LPG from an 80cc, 3 HP engine. It is rated at 60 dB, has two 120V 15A outlets and a USB port, and offers parallel capability.\n\nIt is the smallest pick in output and engine size. Against the PowerSmart it has lower output and no named CO sensor.\n\nIt suits solo campers who want a small entry point to propane. The CARB-compliant listing also covers California.",
    "specs": [
      "1800 rated gas, 1600 LPG",
      "60 dB, parallel capable",
      "CARB compliant"
    ],
    "pros": [
      "Smallest output class here",
      "Small 80cc engine, 60 dB",
      "Parallel capable",
      "CARB compliant"
    ],
    "cons": [
      "No CO sensor listed",
      "Only two 15A outlets"
    ],
    "bestFor": "Solo campers",
    "take": "A small, entry-level way to try dual fuel inverter power.",
    "catch": "Output is small, so a fridge plus microwave exceeds it."
  }
];

export const howWeEvaluated = [
  {
    "title": "Gas and propane ratings",
    "description": "Rated watts on both fuels were compared."
  },
  {
    "title": "Runtime",
    "description": "Hours per tank on each fuel."
  },
  {
    "title": "Noise",
    "description": "Stated dBA figures."
  },
  {
    "title": "Safety",
    "description": "CO shutdown, certifications and low-oil protection."
  },
  {
    "title": "Outlets",
    "description": "TT-30R, twist-lock and 240V options."
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
    "subheading": "By Rig",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Large RV or EV backup",
          "WEN 6800W Dual Fuel",
          "5100 rated watts with 240V."
        ],
        [
          "Mid-size RV, 30A",
          "BILT HARD 5500W Dual Fuel",
          "4000 running watts with TT-30R."
        ],
        [
          "Light RV with auto fuel switch",
          "ERAYAK 4500W Dual Fuel",
          "3500 rated watts at 54 lb."
        ],
        [
          "Long propane trip",
          "Champion 4000W Dual Fuel",
          "25 hours on propane."
        ],
        [
          "Certified camp power",
          "PowerSmart 3800W Dual Fuel",
          "ANSI and UL named."
        ],
        [
          "Solo camper",
          "Pulsar 2200W Dual Fuel",
          "Smallest dual fuel."
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
          "$410 to $430",
          "BILT HARD 5500W Dual Fuel or Pulsar 2200W Dual Fuel"
        ],
        [
          "$460 to $560",
          "PowerSmart 3800W Dual Fuel or ERAYAK 4500W Dual Fuel"
        ],
        [
          "$730 to $800",
          "Champion 4000W Dual Fuel or WEN 6800W Dual Fuel"
        ]
      ]
    }
  },
  {
    "subheading": "Propane vs Gasoline as Main Fuel",
    "cards": [
      {
        "label": "Propane",
        "text": "Stores for years, burns cleaner and is easy to carry, at a 10 to 15 percent output drop. The Champion 4000W Dual Fuel and PowerSmart 3800W Dual Fuel list long propane runtimes."
      },
      {
        "label": "Gasoline",
        "text": "Full output and cheap, but stale fuel is a nuisance. The BILT HARD 5500W Dual Fuel and WEN 6800W Dual Fuel run at their highest ratings on gas."
      }
    ],
    "note": "Choose propane as the main fuel with the Champion 4000W Dual Fuel, and gas with the WEN 6800W Dual Fuel."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "Premium",
          "WEN 6800W Dual Fuel"
        ],
        [
          "Upper mid",
          "Champion 4000W Dual Fuel"
        ],
        [
          "Mid",
          "ERAYAK 4500W Dual Fuel"
        ],
        [
          "Value big unit",
          "BILT HARD 5500W Dual Fuel"
        ],
        [
          "Entry",
          "Pulsar 2200W Dual Fuel"
        ]
      ]
    }
  },
  {
    "subheading": "Quiet-Hours Campgrounds",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated dBA at 23 ft and an Eco mode."
      },
      {
        "label": "In this comparison",
        "text": "The ERAYAK 4500W Dual Fuel lists 58 dBA at quarter load, and the PowerSmart 3800W Dual Fuel lists 59 dBA in Eco Mode."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the WEN 6800W Dual Fuel for 240V and big output, or the Champion 4000W Dual Fuel for the longest propane run."
      },
      {
        "label": "Save if",
        "text": "Save with the Pulsar 2200W Dual Fuel or BILT HARD 5500W Dual Fuel depending on size."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rated watts on each fuel",
    "explanation": "Propane usually lowers output by 10 to 15 percent, and the listing should give both ratings. Size the generator by the propane figure if that is your main fuel. Starting watts only matter for the short surge."
  },
  {
    "criterion": "Propane tank runtime",
    "explanation": "A 20 lb tank runs a 3000W-class generator for roughly a day at light load, and less at full load. Listed hours are usually quoted at 25 percent load. Bring a spare tank for long trips."
  },
  {
    "criterion": "Carbon monoxide safety",
    "explanation": "Never run a generator in a tent, camper, garage or near an open window. Keep it outdoors and downwind, away from sleeping areas. Use a battery CO alarm even if the generator has a built-in sensor."
  },
  {
    "criterion": "Outlets for your gear",
    "explanation": "A TT-30R serves a 30A RV cord, while a 240V L14-30R feeds a 240V device. Household 20A outlets handle camp gear. Check the outlet type against your cord adapters."
  },
  {
    "criterion": "Noise and certification",
    "explanation": "A stated dBA at 23 ft is more useful than a quiet label. ANSI/PGMA G300 and UL2201 are safety and performance standards worth reading on a listing. Quiet hours differ by campground."
  }
];

export const faq = [
  {
    "q": "Does propane reduce output?",
    "a": "Yes. The WEN 6800W Dual Fuel drops from 5100 to 4500 rated watts on propane, and the Champion 4000W Dual Fuel from 3000 to 2700. Size by the propane figure."
  },
  {
    "q": "What is the common mistake?",
    "a": "Running a generator close to a tent for noise or convenience. Place it outdoors, downwind and as far as the cord allows. Add a CO alarm in the sleeping area."
  },
  {
    "q": "Is dual fuel worth over gas-only?",
    "a": "For storage and long propane runs, yes, as the Champion 4000W Dual Fuel shows. For short trips, gas-only units cost less. Weigh output loss."
  },
  {
    "q": "How do I switch fuels?",
    "a": "Follow the manual: shut the unit down, then connect the propane hose or open the gas valve as directed. Units like the ERAYAK 4500W Dual Fuel switch automatically. Use a rated regulator hose."
  },
  {
    "q": "How do I store a dual fuel generator?",
    "a": "Run the fuel out or stabilize it, disconnect the propane tank and store in a dry place. Keep tanks upright and outdoors. Start it periodically."
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
