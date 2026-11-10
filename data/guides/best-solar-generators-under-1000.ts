export const guideSlug = "best-solar-generators-under-1000";
export const guideTitle = "5 Best Solar Generators Under 1000 in 2026";
export const metaTitle = "Best Solar Generators Under 1000 in 2026";
export const metaDescription = "Best solar generators under $1000: five 1 kWh power stations and panel bundles compared on output, cycle life, charging speed and backup features.";
export const mainKeyword = "best solar generators under 1000";
export const introParagraphs = [
  "A $1000 budget puts you in the 1 kWh class where a power station can run a fridge, a laptop desk and a CPAP at once. The five picks here cost from about $400 for a bare unit to $939 for a two-panel bundle.",
  "Across that range the battery size barely changes, near 1024 to 1070Wh. What you pay for is charging speed, cell life, bundled solar panels and smart backup features, and the notes spell out which of those deserve your money."
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
    "id": "best-solar-generators-under-1000-1",
    "rank": 1,
    "badge": "Best Value Under $1000",
    "name": "DJI Power 1000 V2 Portable Power Station",
    "price": "$399.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/316qDSmExmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FD9Z5F3S?tag=rvgearlab-20",
    "description": "DJI Power 1000 V2 holds 1024Wh in an LFP battery and lists 2600W of stable output, which is enough to run kettles, cookers and power tools. It recharges to 80 percent in 37 minutes, runs as quietly as 26 dB and has dual 140W USB-C ports for 280W of total USB-C power.\n\nIt costs about $400, roughly half of the Jackery bundles, and it matches or beats them on output and charge speed. What it lacks is a panel in the box, which the Jackery kits include.\n\nBuy it if you will recharge mostly from the wall or already own panels and care about quiet and fast turnaround. It suits camper vans and outage backup.",
    "specs": [
      "1024Wh LFP, 2600W output",
      "80% charge in 37 minutes",
      "26 dB quiet, dual 140W USB-C"
    ],
    "pros": [
      "Charges to 80 percent in 37 minutes",
      "Quiet at about 26 dB for sleeping",
      "Dual 140W USB-C for laptops",
      "Compact for 1 kWh of LFP"
    ],
    "cons": [
      "No solar panel included",
      "Brand has a shorter record in power stations"
    ],
    "bestFor": "Van builds and quiet nights",
    "take": "The strongest specs for the money in this guide.",
    "catch": "Add panels separately if you want off-grid solar."
  },
  {
    "id": "best-solar-generators-under-1000-2",
    "rank": 2,
    "badge": "Best Solar Input",
    "name": "Anker SOLIX C1000 Portable Power Station with Car Charging Cable",
    "price": "$469.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41DXVul+maL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C5C89QKZ?tag=rvgearlab-20",
    "description": "Anker SOLIX C1000 stores 1056Wh in a LiFePO4 pack rated for 3000 cycles and outputs 1800W AC (2400W with SurgePad) across 11 ports. It charges to 80 percent in 43 minutes and takes up to 600W of solar input.\n\nIt costs about $100 more than the DJI and offers a bigger panel input and a proven brand. The DJI has a higher output rating and faster 80 percent charge, and the Anker pulls ahead if you plan a big panel array.\n\nPick it if you want a well-known brand and strong solar charging without paying for a bundle. It suits RV weekends and home backup.",
    "specs": [
      "1056Wh LiFePO4, 3000 cycles",
      "1800W AC, 2400W SurgePad",
      "43 minute 80% charge, 600W solar"
    ],
    "pros": [
      "Up to 600W of solar input",
      "11 ports for devices",
      "1800W AC with SurgePad boost",
      "Established brand and service"
    ],
    "cons": [
      "Heavy for a short carry",
      "No panel in the box"
    ],
    "bestFor": "Big-panel solar charging",
    "take": "A solid all-rounder that takes a lot of sun.",
    "catch": "Allow two hands for lifting it."
  },
  {
    "id": "best-solar-generators-under-1000-3",
    "rank": 3,
    "badge": "Best Home Backup Kit",
    "name": "Jackery HomePower 1000 v2 Solar Generator and 200W Solar Panel",
    "price": "$749.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31FQnnZQjWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H7HPTDMC?tag=rvgearlab-20",
    "description": "Jackery's HomePower 1000 v2 kit adds a 200W solar panel to a 1024Wh LiFePO4 station with 1500W of pure sine wave AC from three outlets. A 10ms UPS and 3,000V surge shield protect desktops and routers, and the cells are rated for 6000 or more cycles.\n\nIt costs about $750 against $400 for the DJI, which pays for the 200W panel, the 6000 cycle battery and a 50 minute full charge in emergency mode. The Plus v2 adds expansion and four AC outlets for a further $120.\n\nChoose it if outage backup matters more than raw output, and you want a panel included. It suits home offices, medical devices and RV storage.",
    "specs": [
      "1024Wh LiFePO4, 1500W AC",
      "10ms UPS, 3kV surge shield",
      "6000+ cycles, 200W panel"
    ],
    "pros": [
      "6000 cycle LiFePO4 battery",
      "200W panel included",
      "10ms UPS for desktops and routers",
      "Full charge in 50 minutes"
    ],
    "cons": [
      "Lower AC output than the 1800W units",
      "About $350 more than the DJI"
    ],
    "bestFor": "Home backup with solar included",
    "take": "The best value kit for backup and long life.",
    "catch": "Panels are rated for open sun, not shade."
  },
  {
    "id": "best-solar-generators-under-1000-4",
    "rank": 4,
    "badge": "Best For Expansion",
    "name": "Jackery Solar Generator 1000 Plus v2 200W Solar Panel",
    "price": "$869.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31FECM5Xx+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HF4JKGMC?tag=rvgearlab-20",
    "description": "Jackery's 1000 Plus v2 kit starts at 1024Wh and expands to 11kWh with up to five add-on battery packs. It has 1800W of AC across four outlets on two independently controlled circuits, 140W USB-C, a 10ms UPS and a 200W panel, with a 5-year warranty.\n\nThe extra outlets and smart load management let you assign critical loads to one circuit and cut off the rest. For that, it costs about $120 more than the HomePower 1000 v2 and adds more AC power.\n\nChoose it if you plan to grow the system into a full home or cabin backup. Battery packs are sold separately, so start small and add as needed.",
    "specs": [
      "1024Wh LiFePO4, 1800W AC",
      "Expandable to 11kWh",
      "200W panel, 5-year warranty"
    ],
    "pros": [
      "Expands to 11kWh with add-on packs",
      "Four AC outlets on two circuits",
      "Smart load management",
      "Works down to about 14F"
    ],
    "cons": [
      "Add-on batteries cost extra",
      "Higher price than HomePower"
    ],
    "bestFor": "A system that grows over time",
    "take": "The only one here that can scale up to a home system.",
    "catch": "Budget for expansion packs later."
  },
  {
    "id": "best-solar-generators-under-1000-5",
    "rank": 5,
    "badge": "Best Two-Panel Bundle",
    "name": "Jackery Solar Generator 1000 v2 with 2x100W Solar Panel",
    "price": "$939.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Ii3eXWiHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D66VD3X4?tag=rvgearlab-20",
    "description": "Jackery's Explorer 1000 v2 kit pairs a 1070Wh LiFePO4 station with two 100W solar panels. It outputs 1500W AC with a 3000W surge, charges 0 to 100 percent in about one hour in emergency mode and runs for 4000 cycles to 70 percent capacity.\n\nTwo 100W panels give the same 200W as the single panels in the other kits, and each panel folds smaller and can be angled separately. It is the most expensive pick at about $939, and the HomePower costs about $190 less for a similar station.\n\nPick it if you want flexible panel placement, such as one on a roof and one on the ground. It suits van and RV owners.",
    "specs": [
      "1070Wh LiFePO4, 1500W, 3000W surge",
      "Two 100W panels included",
      "1 hour emergency charge"
    ],
    "pros": [
      "Two 100W panels set up separately",
      "3000W surge starts motors",
      "Fast one-hour emergency charge",
      "Three pure sine wave AC ports"
    ],
    "cons": [
      "Highest price in the guide",
      "1070Wh limits long fridge runs"
    ],
    "bestFor": "Flexible panel placement",
    "take": "A good bundle for vans, at the top of the budget.",
    "catch": "Plan on paying for the convenience of two panels."
  }
];

export const howWeEvaluated = [
  {
    "title": "Output and ports",
    "description": "AC output from 1500W to 2600W, USB-C wattage and outlet counts were compared."
  },
  {
    "title": "Battery life",
    "description": "Cycle ratings from 3000 to 6000 cycles were ranked, since they set the useful life."
  },
  {
    "title": "Charging speed",
    "description": "Wall charge time to 80 percent and the maximum solar input were compared."
  },
  {
    "title": "Bundled solar",
    "description": "Whether a panel or two are in the box changes the real price by $150 to $250."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is under $1000, and the ranking weights features per dollar over the lowest price."
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
    "subheading": "By priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Fast, quiet, and cheap",
          "DJI Power 1000 V2",
          "37 minute charge at about $400."
        ],
        [
          "Strong solar input",
          "Anker SOLIX C1000",
          "600W solar and 11 ports."
        ],
        [
          "Home outage backup with panel",
          "Jackery HomePower 1000 v2 Kit",
          "10ms UPS with a 200W panel."
        ],
        [
          "Plan to grow later",
          "Jackery 1000 Plus v2 Kit",
          "Expands to 11kWh."
        ],
        [
          "Van with roof and ground panels",
          "Jackery 1000 v2 Two-Panel Kit",
          "Two 100W panels."
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
          "$390 to $500",
          "DJI Power 1000 V2 or Anker SOLIX C1000"
        ],
        [
          "$740 to $870",
          "Jackery HomePower 1000 v2 Kit or Jackery 1000 Plus v2 Kit"
        ],
        [
          "$930 to $940",
          "Jackery 1000 v2 Two-Panel Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Kit vs bare station",
    "cards": [
      {
        "label": "Kits",
        "text": "The Jackery HomePower 1000 v2 Kit, 1000 Plus v2 Kit and 1000 v2 Two-Panel Kit include panels, so they charge from the sun on arrival. They cost $350 to $540 more than the bare units."
      },
      {
        "label": "Bare stations",
        "text": "The DJI Power 1000 V2 and Anker SOLIX C1000 cost $400 to $500 and give more charging speed per dollar. You choose and buy panels separately."
      }
    ],
    "note": "Most buyers should take the DJI Power 1000 V2 and add a 200W panel for the lowest total cost."
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
          "About $400",
          "DJI Power 1000 V2"
        ],
        [
          "About $500",
          "Anker SOLIX C1000"
        ],
        [
          "About $750",
          "Jackery HomePower 1000 v2 Kit"
        ],
        [
          "About $870",
          "Jackery 1000 Plus v2 Kit"
        ],
        [
          "About $940",
          "Jackery 1000 v2 Two-Panel Kit"
        ]
      ]
    }
  },
  {
    "subheading": "For home outage backup specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a 10ms UPS, at least 1000Wh of LiFePO4, and enough outlets for a router, fridge and lights."
      },
      {
        "label": "In this comparison",
        "text": "The Jackery HomePower 1000 v2 Kit has a 10ms UPS and 3kV surge shield, and the Jackery 1000 Plus v2 Kit adds two switchable circuits."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a panel in the box and 6000 cycles, which is what the Jackery HomePower 1000 v2 Kit delivers at about $750. Spend to the top for the Jackery 1000 Plus v2 Kit only if you plan to expand."
      },
      {
        "label": "Save if",
        "text": "Save if you can bring your own panels, because the DJI Power 1000 V2 gives 1024Wh and 2600W of output for about $400 and the Anker SOLIX C1000 costs about $500."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Cycle rating and years",
    "explanation": "A battery rated for 3000 cycles lasts about 8 years with weekly full cycles, while 6000 cycles lasts closer to 16. Brands usually quote the percent of capacity left at that cycle count, often 70 or 80 percent. Compare the cycle number and the capacity retained, not just the headline cycles."
  },
  {
    "criterion": "Continuous vs surge power",
    "explanation": "Continuous output is what the inverter can sustain, while surge only covers a motor starting for a second or two. A 1500W station runs a kettle or microwave, and 1800W runs a small portable heater for short stretches. Look for the continuous AC figure and treat surge as a start-up margin."
  },
  {
    "criterion": "Charging speed",
    "explanation": "Fast wall charging, 37 to 50 minutes to 80 percent, turns a lunch stop into a refill, while slow charging can take 7 to 8 hours. A fast charger also needs a strong wall circuit, and a standard 15A outlet limits you to about 1440W. Check the wall input watts and the time to 80 percent."
  },
  {
    "criterion": "Solar input ceiling",
    "explanation": "A 600W solar input refills 1 kWh in about 2 hours of full sun, while a 200W input needs most of 2 days. A bundle's panel is a floor, not a ceiling. Check the maximum solar input in watts and volts before buying extra panels."
  },
  {
    "criterion": "UPS and surge protection",
    "explanation": "A UPS mode switches to the battery in 10ms or less, which keeps a PC or CPAP from rebooting during an outage, while slower switchover of 20 to 30ms can restart a desktop. Surge shielding adds protection from voltage spikes on a shaky campground pedestal. Look for the switchover time in milliseconds in the specs, not just the words 'backup power'."
  },
  {
    "criterion": "Warranty and support",
    "explanation": "Warranties run from 2 to 5 years, with some brands covering cells for the full term and others only the electronics. A long warranty only counts if the maker has a US support team and ships replacements promptly. Read the warranty terms, note who pays shipping on a 25 lb box, and check where returns are handled."
  }
];

export const faq = [
  {
    "q": "Can a 1 kWh station run a refrigerator all night?",
    "a": "Yes for a standard fridge averaging 100 to 150W, which uses about 1 to 1.5 kWh a day. Any pick here covers about 7 to 9 hours of a full-size fridge. Pair it with a 200W panel to refill during the day."
  },
  {
    "q": "What is the difference between 1500W and 1800W models?",
    "a": "The inverter limit decides which appliances run. A 1500W unit like the Jackery HomePower 1000 v2 Kit handles a kettle or microwave, while 1800W units like the Anker SOLIX C1000 add a bit of headroom for a heater or a coffee maker. Tally the combined wattage of what you plan to run at once."
  },
  {
    "q": "Is it worth paying extra for expansion?",
    "a": "Only if you foresee a bigger load. The Jackery 1000 Plus v2 Kit expands to 11kWh but battery packs cost extra, so you pay twice. If your needs are fixed at about a day of power, a bare DJI Power 1000 V2 is cheaper."
  },
  {
    "q": "How should I connect panels?",
    "a": "Use panels whose open-circuit voltage stays within the station's input range, and connect them with the supplied cables or the maker's adapter. The Anker SOLIX C1000 accepts up to 600W. Park the panels in direct sun and avoid shade on any cell."
  },
  {
    "q": "Can I leave the station plugged in all the time?",
    "a": "Most can, and the UPS-equipped units are made for it. Pass-through use keeps the battery at 100 percent, which shortens life slightly, so unplug it for storage or switch to a battery-saver mode if the app offers one."
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
