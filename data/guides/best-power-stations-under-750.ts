export const guideSlug = "best-power-stations-under-750";
export const guideTitle = "6 Best Power Stations Under 750 in 2026";
export const metaTitle = "Best Power Stations Under 750 in 2026";
export const metaDescription = "Best power stations under $750: six 1,000 to 2,000Wh LiFePO4 units for camping and RV backup, compared on capacity, output and what extra budget buys.";
export const mainKeyword = "best power stations under 750";
export const introParagraphs = [
  "Seven hundred and fifty dollars is the point where a power station stops being a phone charger and starts running a fridge, a CPAP and a coffee maker for a weekend. The six here hold from 1,070Wh to 2,150Wh and cost from about $500 to $650.",
  "The ranking asks what the last $150 buys beyond a 1 kWh unit: more watt-hours, more AC output, a faster recharge or expansion. The top spot goes to the best capacity per dollar, and the premium picks are placed by the feature you pay for."
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
    "id": "best-power-stations-under-750-1",
    "rank": 1,
    "badge": "Best Value Under $750",
    "name": "EBL 2400W Portable Power Station LiFePO4 Battery for Home Use",
    "price": "$658.32",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Rscin7aaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQZT4SP8?tag=rvgearlab-20",
    "description": "The EBL 2400W is a LiFePO4 station with 1,843.2Wh of capacity and 2,400W of AC output across four AC ports. It switches to backup power in 0.1 seconds and lasts 3,500 cycles or more.\n\nIt costs about $552, roughly $98 less than the Anker SOLIX S2000, and it delivers 2,400W against the Anker's 1,500W. It holds less than the Anker's 2,010Wh, which is the trade for the lower price and stronger output.\n\nIt suits campers and RVers who want to run a microwave or a small space heater from the battery. The four AC ports let you power several devices at once.",
    "specs": [
      "1,843.2Wh, 2,400W, 4 AC ports",
      "0.1 second backup switchover",
      "LiFePO4, 3,500+ cycles"
    ],
    "pros": [
      "Large 1,843Wh for the price",
      "Strong 2,400W AC output",
      "0.1 second switchover to backup",
      "LiFePO4 cells, 3,500+ cycles"
    ],
    "cons": [
      "55 lbs is hard to carry far",
      "Slower recharge than the Anker"
    ],
    "bestFor": "RV and home backup",
    "take": "The most output and capacity per dollar below the cap.",
    "catch": "At 55 pounds it is a car-camp unit."
  },
  {
    "id": "best-power-stations-under-750-2",
    "rank": 2,
    "badge": "Best Largest Capacity",
    "name": "Anker SOLIX S2000 Portable Power Station",
    "price": "$649.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oUWN32k+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GY4TQ2P8?tag=rvgearlab-20",
    "description": "The Anker SOLIX S2000 stores 2,010Wh in LFP cells, outputs 1,500W with a 3,000W peak and accepts up to 400W of solar input. It carries a 10,000-cycle rating.\n\nIt costs about $650, the top of the group's realistic range and about $98 above the EBL 2400W Station, and it has the longest cycle life here. It gives lower AC output than the EBL or Lipower 2400W.\n\nIt suits long off-grid stays and fridge backup where capacity matters more than raw wattage. A big LFP pack lasts for many years.",
    "specs": [
      "2010Wh LFP, 1500W output",
      "3000W peak, 400W solar input",
      "10,000-cycle rating"
    ],
    "pros": [
      "Big 2,010Wh capacity",
      "Listed 35-hour fridge backup claim",
      "10,000 cycle LFP rating",
      "Six ways to recharge"
    ],
    "cons": [
      "1,500W output limits big appliances",
      "No UPS switch time is named"
    ],
    "bestFor": "Long outages",
    "take": "Choose it for the longest run time and the longest battery life.",
    "catch": "It will not run a 2,000W appliance."
  },
  {
    "id": "best-power-stations-under-750-3",
    "rank": 3,
    "badge": "Best Highest Capacity",
    "name": "Lipower 2400W Portable Power Station",
    "price": "$649.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Ft8DZeyvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H5BL8YRJ?tag=rvgearlab-20",
    "description": "The Lipower holds 2,150Wh in LiFePO4 cells and delivers 2,400W pure sine wave with a 4,000W surge. It switches to battery in under 10ms and lasts 3,500 cycles or more.\n\nIt costs about $650, nearly the same as the Anker SOLIX S2000, and it pairs more capacity with a higher AC output. It is described as 20 percent lighter than same-capacity packs, and it recharges from the wall in about 1.5 hours.\n\nIt suits households and RVers who want one unit to carry a fridge, CPAP and microwave through a blackout. It accepts up to 800W of solar input.",
    "specs": [
      "2,150Wh LiFePO4",
      "2,400W, 4,000W surge",
      "Under 10ms UPS switchover"
    ],
    "pros": [
      "Biggest capacity in the group",
      "2,400W output runs a microwave",
      "Under 10 ms UPS switch",
      "Recharges from the wall in about 1.5 hours"
    ],
    "cons": [
      "Unfamiliar brand",
      "Heavy for its size"
    ],
    "bestFor": "Blackout backup",
    "take": "The most capacity and output at the top of the budget.",
    "catch": "It costs about the same as the better-known Anker."
  },
  {
    "id": "best-power-stations-under-750-4",
    "rank": 4,
    "badge": "Best Expandable Pick",
    "name": "ABOK Ark2000 1536Wh 2000W Portable Power Station",
    "price": "$599.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41J42iP7mSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FRSCP2VS?tag=rvgearlab-20",
    "description": "The ABOK Ark2000 offers 1,536Wh with 2,000W of continuous pure sine output and a 2,400W A-Boost mode. You can add an Ark2000E expansion battery to reach 3,072Wh or two to reach 4,608Wh.\n\nIt costs about $599, nearly $50 above the EBL 2400W Station, and it is the only pick that can grow in capacity later. It charges from 0 to 80 percent in 55 minutes on 1,500W AC, and it has 8 ports.\n\nIt suits buyers who expect their needs to grow, such as a van conversion or a cabin. The 10ms UPS keeps routers and computers running.",
    "specs": [
      "1,536Wh, 2,000W, 2,400W boost",
      "Expandable to 4,608Wh",
      "0 to 80% in 55 minutes"
    ],
    "pros": [
      "Add expansion batteries later",
      "2,000W continuous output",
      "55 minutes to 80 percent",
      "8 ports and a 10 ms UPS"
    ],
    "cons": [
      "Expansion batteries cost extra",
      "Smaller than the EBL base unit"
    ],
    "bestFor": "Growing systems",
    "take": "Buy this if you plan to expand rather than replace.",
    "catch": "Expansion packs add cost."
  },
  {
    "id": "best-power-stations-under-750-5",
    "rank": 5,
    "badge": "Best Fast-Charging Mid Pick",
    "name": "DYNESS 1536Wh Portable Power Station",
    "price": "$499.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41quCRDeXiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GYD6V3JW?tag=rvgearlab-20",
    "description": "The DYNESS 1536Wh is a LiFePO4 station with 1,800W of pure sine output, built-in UPS and an app. It charges to 80 percent in 50 minutes on AC and in about 1.2 hours on up to 1,200W of solar.\n\nIt costs about $500, the lowest in the group and $52 below the EBL 2400W Station, and its solar input is the highest listed. It stores less than the EBL.\n\nIt suits campers who want quick turnarounds between sites. The app lets you watch and control outputs.",
    "specs": [
      "1,536Wh, 1,800W pure sine",
      "50 min to 80% on AC",
      "Up to 1,200W solar input"
    ],
    "pros": [
      "80 percent in 50 minutes",
      "1,200W solar input charges fast",
      "Built-in UPS backup",
      "App control and monitoring"
    ],
    "cons": [
      "Less capacity than the EBL",
      "Lesser-known brand"
    ],
    "bestFor": "Fast recharge between sites",
    "take": "A fast-charging 1.5 kWh unit at the lowest price here.",
    "catch": "It stores 300Wh less than the EBL."
  },
  {
    "id": "best-power-stations-under-750-6",
    "rank": 6,
    "badge": "Best Known Brand",
    "name": "Jackery Explorer 1000 v2 Portable Power Station",
    "price": "$499.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31+D1tNXreL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7PPG25F?tag=rvgearlab-20",
    "description": "The Jackery Explorer 1000 v2 holds 1,070Wh with a 1,500W output and 3,000W surge. Its LiFePO4 battery is rated to hold 70 percent of its capacity through 4,000 charge cycles, and a one-hour emergency charge fills it from 0 to 100 percent.\n\nIt costs about $499, level with the DYNESS 1536Wh, and it holds the least energy of the six. The app offers a 30 dB quiet overnight charging mode, and it has three pure sine AC ports.\n\nIt suits campers who want a familiar brand and a compact unit. It runs a fridge for several hours.",
    "specs": [
      "1,070Wh, 1,500W AC",
      "LiFePO4, 4,000 cycles to 70%",
      "1 hour emergency charge"
    ],
    "pros": [
      "4,000 cycles to 70 percent health",
      "One hour emergency charge",
      "Three AC ports",
      "30 dB quiet charging mode"
    ],
    "cons": [
      "Smallest capacity of the six",
      "Pricey per watt-hour"
    ],
    "bestFor": "Weekend camping",
    "take": "Pick it for the brand and fast charge, not for the capacity.",
    "catch": "The base unit holds under 1.1 kWh."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity in Wh",
    "description": "Watt-hours were compared, as was cost per Wh."
  },
  {
    "title": "AC output",
    "description": "Continuous and surge watts were checked."
  },
  {
    "title": "Battery chemistry",
    "description": "LiFePO4 cycle life was compared."
  },
  {
    "title": "Recharge speed",
    "description": "AC and solar charging times were compared."
  },
  {
    "title": "Price against the cap",
    "description": "All six are under $750."
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
          "Microwave or space heater at camp",
          "EBL 2400W Station",
          "2,400W AC output."
        ],
        [
          "Longest runtime for the money",
          "Anker SOLIX S2000",
          "2,010Wh and 10,000 cycles."
        ],
        [
          "Maximum capacity",
          "Lipower 2400W 2150Wh",
          "2,150Wh and 2,400W."
        ],
        [
          "Plan to grow later",
          "ABOK Ark2000",
          "Expandable to 4,608Wh."
        ],
        [
          "Quick turnarounds",
          "DYNESS 1536Wh",
          "80 percent in 50 minutes."
        ],
        [
          "Familiar brand, weekend trips",
          "Jackery Explorer 1000 v2",
          "Compact with 4,000 cycle life."
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
          "$490 to $500",
          "Jackery Explorer 1000 v2 or DYNESS 1536Wh"
        ],
        [
          "$550 to $600",
          "EBL 2400W Station or ABOK Ark2000"
        ],
        [
          "$640 to $650",
          "Anker SOLIX S2000 or Lipower 2400W 2150Wh"
        ]
      ]
    }
  },
  {
    "subheading": "Big capacity vs fast charging",
    "cards": [
      {
        "label": "Big capacity",
        "text": "The Lipower 2400W 2150Wh, Anker SOLIX S2000 and EBL 2400W Station store 1,843 to 2,150Wh for multi-day runs."
      },
      {
        "label": "Fast charging",
        "text": "The DYNESS 1536Wh, ABOK Ark2000 and Jackery Explorer 1000 v2 refill in about an hour."
      }
    ],
    "note": "Choose the EBL 2400W Station if you stay put and the DYNESS 1536Wh if you move daily."
  },
  {
    "subheading": "By price tier",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $499",
          "Jackery Explorer 1000 v2"
        ],
        [
          "About $500",
          "DYNESS 1536Wh"
        ],
        [
          "About $552",
          "EBL 2400W Station"
        ],
        [
          "About $599",
          "ABOK Ark2000"
        ],
        [
          "About $650",
          "Anker SOLIX S2000"
        ],
        [
          "About $650",
          "Lipower 2400W 2150Wh"
        ]
      ]
    }
  },
  {
    "subheading": "For fridge and CPAP backup specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a UPS switchover of 10ms or less, pure sine wave and 1,500Wh or more."
      },
      {
        "label": "In this comparison",
        "text": "The EBL 2400W Station switches in 0.1 seconds, and the Lipower 2400W 2150Wh and ABOK Ark2000 list 10ms UPS."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you run a fridge or heater: the EBL 2400W Station adds 2,400W, and the Lipower 2400W 2150Wh and Anker SOLIX S2000 add capacity."
      },
      {
        "label": "Save if",
        "text": "Save if you only charge devices: the Jackery Explorer 1000 v2 at about $499 and the DYNESS 1536Wh at about $500 suit weekend trips."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watt-hours vs watts",
    "explanation": "Watt-hours (Wh) tell you how long the battery lasts, while watts tell you how much it can power at once. A 1,843Wh station with 2,400W output can run a 1,000W microwave for roughly 1.5 hours. Check both numbers against your biggest appliance and how long you want it to run."
  },
  {
    "criterion": "Continuous vs surge",
    "explanation": "Surge watts last only a fraction of a second to start a motor, while continuous watts are what the unit delivers for hours. A fridge may spike to 800W for a moment and then settle near 150W, so the surge rating matters only at start-up. Match the continuous output to your largest steady load, and read both figures in the product title or specs."
  },
  {
    "criterion": "LiFePO4 cycle life",
    "explanation": "LiFePO4 chemistry is typically rated for 3,500 to 10,000 charge cycles, which is several times what older lithium-ion packs deliver. A higher cycle count means the station stays useful for a decade of weekly use, so the extra rating is real money saved later. Look for LiFePO4 and a stated cycle figure in the product details before comparing prices."
  },
  {
    "criterion": "Recharge speed and solar input",
    "explanation": "Fast AC charging refills a unit in about an hour, and 800 to 1,200W of solar input lets you recharge off-grid in a few hours of strong sun. A slow charger leaves you without power the next morning, which hurts when you move camp often. Check both the AC and solar input ratings, and size your panels to match."
  },
  {
    "criterion": "Weight and expansion",
    "explanation": "A 55 pound station is hard to carry far, while a smaller unit that accepts expansion batteries lets you start small and add capacity later. Decide whether the unit lives in a van or cabin or moves every day, since weight rules out some of these for solo carrying. Look at the stated weight and whether matching expansion packs exist."
  }
];

export const faq = [
  {
    "q": "How long will a 1,800Wh power station run a fridge?",
    "a": "A typical camping fridge draws about 50 to 100W while running, so 1,843Wh in the EBL 2400W Station could last more than a day. A home fridge draws more and cycles, so expect about 1 to 2 days. Check your fridge's rated watts."
  },
  {
    "q": "What do buyers get wrong about power stations?",
    "a": "They compare watt-hours and forget watts. A big battery with a small inverter cannot start a heater or microwave, however full it is. They also forget the unit needs recharging, so match solar input to the length of your trip."
  },
  {
    "q": "Is the Anker or EBL the better value?",
    "a": "The EBL 2400W Station costs about $98 less and delivers 2,400W, enough for a microwave. The Anker SOLIX S2000 stores more energy and carries a 10,000-cycle rating. Pick the EBL for power and the Anker for capacity and longevity."
  },
  {
    "q": "How do I charge a power station from solar?",
    "a": "Connect a compatible panel to the solar input in series or parallel and watch the input wattage on the display. The ABOK Ark2000 supports two 600W panels, for example. Keep the panels in full sun and angled at the sky for the best result."
  },
  {
    "q": "How do I store a power station?",
    "a": "Keep it indoors at moderate temperatures, charged to half or more, and top it up every few months. Do not run it in a closed tent while charging or discharging heavily. Keep the vents clear of bedding and dust."
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
