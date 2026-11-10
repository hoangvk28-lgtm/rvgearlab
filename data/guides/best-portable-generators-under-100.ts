export const guideSlug = "best-portable-generators-under-100";
export const guideTitle = "5 Best Portable Generators Under 100 in 2026";
export const metaTitle = "Best Portable Generators Under 100 in 2026";
export const metaDescription = "Best portable generators under $100: five small battery power stations compared on watt-hours, AC output and weight for phones, lights and laptops.";
export const mainKeyword = "best portable generators under 100";
export const introParagraphs = [
  "Under $100 there are no gas generators, only compact battery stations that people call portable generators. They hold 89 to 192Wh, enough to charge phones, run lights and keep a laptop alive, and none will run a fridge or a heater.",
  "That is a small pool, so the five picks below are chosen to be genuinely different: one for the most watt-hours, one for LiFePO4 cells, one for DC gear, one for pocket size and one for emergencies with no sun and no outlet."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/furniture-chairs-campfire-night.webp";
export const heroImageAlt = "Two people in folding chairs around a campfire in autumn woods";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-portable-generators-under-100-1",
    "rank": 1,
    "badge": "Best Value Under $100",
    "name": "Portable Power Station 192Wh Outdoor Generator with AC Outlet 100W",
    "price": "$73.71",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31FBcuGw68L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DKFR196Q?tag=rvgearlab-amz-20",
    "description": "Akiisolo packs 192Wh into a 4.6 by 4.6 by 7 inch body that weighs 3.9 lb. It has one 100W AC outlet with a 200W surge, a pair of USB-C ports, a pair of USB-A ports, two DC jacks and an LED light with an SOS mode.\n\nAt about $74 it is the cheapest unit here and holds more than double the energy of the 88.8Wh and 89.6Wh stations. The DaranEner trades that capacity for sturdier cells and a silent fanless body.\n\nBuy it if you want the most watt-hours per dollar for charging phones, a tablet and a laptop over a weekend. It suits campers who value capacity over cell life.",
    "specs": [
      "192Wh, 100W AC (200W surge)",
      "3.9 lb, 4.6 x 4.6 x 7 inches",
      "Two USB-C, two USB-A, two DC"
    ],
    "pros": [
      "Over 2x the capacity of the small units",
      "Weighs only 3.9 lb",
      "LED light with SOS mode",
      "Seven outputs in all"
    ],
    "cons": [
      "100W AC limits what you can plug in",
      "Lithium-ion cells, not LiFePO4"
    ],
    "bestFor": "Weekend phone and laptop charging",
    "take": "The most stored energy for the least money here.",
    "catch": "Check that your gear stays under 100W."
  },
  {
    "id": "best-portable-generators-under-100-2",
    "rank": 2,
    "badge": "Best LiFePO4 Cells",
    "name": "Daran Portable Power Station 89.6Wh LiFePO4 Battery 100W",
    "price": "$75.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51RqhJSR3sL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQT5G1ZR?tag=rvgearlab-amz-20",
    "description": "DaranEner is about the size of a smartphone at 6.5 by 3.3 by 4 inches and weighs 2.54 lb. A LiFePO4 battery of 89.6Wh feeds 100W of AC (200W peak) and reaches 80 percent from empty in roughly 90 minutes, with no fan noise at all.\n\nIt holds less than half of the Akiisolo's energy and costs $16 more, which pays for long-life cells and silent running. The MARBERO 88.8Wh has a similar size and uses ordinary lithium-ion.\n\nChoose it if you plan to use the unit for years or want silent power by the bed. It suits phones, a headlamp and a small fan.",
    "specs": [
      "89.6Wh LiFePO4, 100W AC",
      "2.54 lb, fanless",
      "80% charge in 1.5 hours"
    ],
    "pros": [
      "LiFePO4 cells last for years",
      "Silent, no fan",
      "Lightest unit in the guide",
      "Quick 1.5 hour charge to 80 percent"
    ],
    "cons": [
      "Smallest capacity of the five",
      "Costs more per watt-hour"
    ],
    "bestFor": "Bedside backup and light travel",
    "take": "Quiet, tiny and built to last.",
    "catch": "A laptop gets about one charge from it."
  },
  {
    "id": "best-portable-generators-under-100-3",
    "rank": 3,
    "badge": "Best For DC Gear",
    "name": "MARBERO Portable Power Station 150Wh Camping Solar Generator Laptop Charger Power Bank with AC Outlet 110V 150",
    "price": "$94.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41dEeb6IpTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BZ7VFK25?tag=rvgearlab-amz-20",
    "description": "This MARBERO stores 150Wh (40,540mAh) and gives one AC outlet, three USB ports at 5V/2.1A, a QC3.0 port and four DC ports of 5 to 12V. Two LED flashlights sit on the side, and the package includes wall and car adapters.\n\nIt offers four DC jacks where the Akiisolo has two, which suits 12V gear such as routers, small pumps and LED strips. The Akiisolo holds 40Wh more for $21 less.\n\nBuy it if you run mostly low-voltage camping gear and want built-in lights. It suits tent campers with a 12V setup.",
    "specs": [
      "150Wh, one AC outlet",
      "Four DC ports, three USB",
      "Two LED flashlights"
    ],
    "pros": [
      "Four DC ports for 12V gear",
      "Built-in dual flashlights",
      "Wall and car adapters included",
      "Quick-charge USB port"
    ],
    "cons": [
      "Single AC outlet",
      "Priciest of the lithium-ion units"
    ],
    "bestFor": "12V camping gear",
    "take": "A DC-friendly station with lights built in.",
    "catch": "AC power is limited to one outlet."
  },
  {
    "id": "best-portable-generators-under-100-4",
    "rank": 4,
    "badge": "Best Pocket Size",
    "name": "MARBERO Portable Power Station 88.8Wh Solar Powered Generator 150W Surge",
    "price": "$83.87",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41InHhvkgJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CYXB6CF5?tag=rvgearlab-amz-20",
    "description": "MARBERO 88.8Wh measures 6.12 by 3.69 by 4.19 inches and weighs 2.27 lb, about the size of a DSLR. It gives two 100W AC outlets (150W max), two QC3.0 USB-A ports and two USB-C ports at 18W and 30W, and reaches 80 percent from the wall in 3 hours.\n\nLightest of the five, it is also the sole unit under $100 with two AC outlets, with a 150W maximum shared between them. The DaranEner gives longer cell life, and this one gives an extra outlet and USB-C power delivery.\n\nChoose it for flights, day hikes and car glove boxes. It suits people who carry a laptop, a camera and a phone.",
    "specs": [
      "88.8Wh, two 100W AC outlets",
      "2.27 lb, 6.12 x 3.69 x 4.19 in",
      "Rated for 500+ charges"
    ],
    "pros": [
      "Two AC outlets in a tiny case",
      "Lightest at 2.27 lb",
      "30W USB-C for a phone or tablet",
      "80 percent charge in 3 hours"
    ],
    "cons": [
      "Only about 500 charge cycles",
      "Smallest battery besides the Daran"
    ],
    "bestFor": "Day trips and travel",
    "take": "Two outlets in a body the size of a camera.",
    "catch": "It will not run a coffee maker."
  },
  {
    "id": "best-portable-generators-under-100-5",
    "rank": 5,
    "badge": "Best Emergency Backup",
    "name": "JLYNOWPT Hand Crank Generator",
    "price": "$94.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41z1XbcGC+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F6YP2KWV?tag=rvgearlab-amz-20",
    "description": "JLYNOWPT is a hand-crank generator with a foldable aluminum handle, a 5V/2.1A USB output and a 110V AC outlet rated 150W max. It has front and rear displays for voltage and charge level, and the crank runs at a comfortable 60 RPM.\n\nIt is the only pick that makes power with no sun and no wall outlet, so it trades speed for independence. Cranking yields a trickle compared with a wall charge for the Akiisolo.\n\nChoose it as a backup for storms and long outages, kept in a go bag with a phone or radio. It suits preparedness buyers more than daily campers.",
    "specs": [
      "Hand crank, 150W AC max",
      "5V/2.1A USB, 110V AC",
      "Foldable aluminum handle"
    ],
    "pros": [
      "Works with no sun or outlet",
      "Displays show charge level",
      "Handle folds for storage",
      "Both USB and AC outputs"
    ],
    "cons": [
      "Cranking is slow and tiring",
      "Not a daily charging source"
    ],
    "bestFor": "Storm and outage backup",
    "take": "The only pick that needs no wall, no sun and no gas.",
    "catch": "Keep a phone charge topped up the easy way too."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stored energy",
    "description": "Capacity from 88.8Wh to 192Wh was compared against price."
  },
  {
    "title": "AC output",
    "description": "One or two 100W to 150W outlets were checked against the loads campers actually carry."
  },
  {
    "title": "Battery chemistry",
    "description": "LiFePO4 and lithium-ion cells were separated for cycle life."
  },
  {
    "title": "Weight and size",
    "description": "Weights from 2.27 lb to 3.9 lb and the pocket footprint were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick sits under $100, and the top pick leads on watt-hours per dollar."
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
          "Most charges per trip",
          "Akiisolo 192Wh",
          "192Wh at the lowest price."
        ],
        [
          "Years of use, silent",
          "DaranEner 89.6Wh",
          "LiFePO4 and fanless."
        ],
        [
          "12V routers and pumps",
          "MARBERO 150Wh",
          "Four DC ports."
        ],
        [
          "Flights and day hikes",
          "MARBERO 88.8Wh",
          "2.27 lb and two AC outlets."
        ],
        [
          "Storm outages",
          "JLYNOWPT Hand Crank 150W",
          "Crank with no sun or wall."
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
          "$70 to $90",
          "Akiisolo 192Wh or MARBERO 88.8Wh"
        ],
        [
          "$80 to $100",
          "DaranEner 89.6Wh or JLYNOWPT Hand Crank 150W"
        ],
        [
          "$90 to $100",
          "MARBERO 150Wh"
        ]
      ]
    }
  },
  {
    "subheading": "LiFePO4 vs lithium-ion",
    "cards": [
      {
        "label": "LiFePO4",
        "text": "The DaranEner 89.6Wh uses LiFePO4, which holds up for about 3000 cycles and stays cooler. It costs more for each watt-hour."
      },
      {
        "label": "Lithium-ion",
        "text": "The Akiisolo 192Wh, both MARBEROs and the others use ordinary lithium-ion, which gives more capacity per dollar but fewer cycles."
      }
    ],
    "note": "Occasional campers should take the Akiisolo 192Wh, and anyone who plans years of use should pay for the DaranEner 89.6Wh."
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
          "About $74",
          "Akiisolo 192Wh"
        ],
        [
          "About $84",
          "MARBERO 88.8Wh"
        ],
        [
          "About $90",
          "DaranEner 89.6Wh"
        ],
        [
          "About $94",
          "JLYNOWPT Hand Crank 150W"
        ],
        [
          "About $95",
          "MARBERO 150Wh"
        ]
      ]
    }
  },
  {
    "subheading": "For a phone and laptop weekend specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for 150Wh or more, at least 30W of USB-C output and a charge from the wall in a few hours."
      },
      {
        "label": "In this comparison",
        "text": "The Akiisolo 192Wh offers two USB-C ports and 192Wh, and the MARBERO 88.8Wh adds a 30W USB-C."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want silent running and long cell life, which the DaranEner 89.6Wh provides for a small premium. The next tier up buys a 300W station that can run a fan or a small fridge."
      },
      {
        "label": "Save if",
        "text": "Save if you only top up phones and a headlamp, because the Akiisolo 192Wh costs about $74 and still holds nearly two full laptop charges."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watt-hours per dollar",
    "explanation": "A 192Wh unit at about $74 gives roughly 2.6Wh per dollar, while an 89.6Wh unit at about $90 gives about 1. That means a larger battery can last twice as long on a phone and a laptop for less money. Divide the capacity by the price before comparing, and be wary of mAh figures that hide the voltage."
  },
  {
    "criterion": "AC wattage ceiling",
    "explanation": "A 100W AC outlet runs a laptop charger at 65W and a small fan at 20W, but it trips on a hair dryer at 1200W or a coffee maker at 800W. Even a 150W max rating only helps with brief surges. Add up the wattage of everything you plan to plug in and stay under 80 percent of the rating."
  },
  {
    "criterion": "Cell chemistry",
    "explanation": "LiFePO4 cells such as those in the DaranEner last about 3000 cycles, while lithium-ion cells in cheaper units last about 500. For camping 10 weekends a year that is 20 years against 2. Look for the cycle rating on the product page, which matters most if you camp every weekend."
  },
  {
    "criterion": "Output types",
    "explanation": "Many camp devices run on 12V DC or USB, which are more efficient than AC because there is no inverter loss. Four DC ports suit routers and pumps, while two USB-C ports at 30W suit phones and tablets. Match the ports to your gear before buying."
  },
  {
    "criterion": "Size and weight",
    "explanation": "A 2.3 to 3.9 lb station fits a daypack, while the bulkier units need a bag of their own. Weight matters most for flights, where airlines cap lithium batteries at 100Wh in carry-on without approval, so the 88.8Wh and 89.6Wh units can fly and the 192Wh unit cannot. Check airline limits before packing."
  },
  {
    "criterion": "Recharge options",
    "explanation": "Wall charging takes 1.5 to 3 hours on the fast units and up to 7 to 9 hours on slower ones. Car charging is a good backup, and some stations accept a small solar panel. Check which charging methods are included and what is sold separately."
  }
];

export const faq = [
  {
    "q": "Can a $100 generator run a mini-fridge or a CPAP?",
    "a": "Not reliably. A mini-fridge cycles at 40 to 60W, so 192Wh lasts about 3 hours, and a CPAP at 30 to 60W would drain the Akiisolo 192Wh in 3 to 5 hours. Ask your CPAP maker about inverter power, and consider the next price tier for overnight use."
  },
  {
    "q": "Are these safe to use inside a tent?",
    "a": "Battery stations produce no exhaust, so they are safe to use inside a tent, unlike gas generators. Keep them away from sleeping bags and out of direct sun. Never charge one while covered, and unplug it if it feels hot."
  },
  {
    "q": "Can I take these on a plane?",
    "a": "Airlines generally allow lithium batteries up to 100Wh in carry-on, which covers the MARBERO 88.8Wh and DaranEner 89.6Wh. The 150Wh and 192Wh units need airline approval or cannot fly. Check the airline's rules before you pack."
  },
  {
    "q": "How do I charge a station on a road trip?",
    "a": "Use the car adapter that comes with some units, such as the MARBERO 150Wh. A car socket gives about 10A, so charging takes several hours. Run it only with the engine on to avoid draining the car battery."
  },
  {
    "q": "How should I store these when I am not using them?",
    "a": "Keep them about half charged in a cool, dry place, and top them up every three months. Avoid hot cars and freezing garages. A lithium cell left empty for months can fail to recharge and keep them out of direct sun."
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
