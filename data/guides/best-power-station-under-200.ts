export const guideSlug = "best-power-station-under-200";
export const guideTitle = "5 Best Power Station Under 200 in 2026";
export const metaTitle = "Best Power Station Under 200 in 2026";
export const metaDescription = "Best power stations under $200: five 128 to 192Wh stations with 200W AC outlets, compared on capacity, battery type, weight and recharge speed.";
export const mainKeyword = "best power station under 200";
export const introParagraphs = [
  "With a $200 ceiling you can have a 200W AC outlet, a few USB-C ports and an LED light in a single box. These stations run laptops, routers, CPAP-adjacent gear and small fans for a night or a weekend.",
  "All five are rated 200W, so they are compared on stored energy, weight, battery chemistry and how fast they refill. Differences are real even when the headline wattage matches."
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
    "id": "best-power-station-under-200-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "BLUETTI Elite 10 Mini Portable Power Station",
    "price": "$113.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31hwYU94RjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FS6CBVZG?tag=rvgearlab-amz-20",
    "description": "The BLUETTI Elite 10 Mini is a 128Wh station with a 200W AC outlet, 100W USB-C fast charging and a built-in 10ms UPS with 350W bypass output. It weighs 4.0 lbs and fits in a backpack.\n\nIt recharges at 150W from AC and is listed as full in 70 minutes, which is far quicker than the 4 to 7 hours of the others. Bluetooth app control and three lighting modes add polish.\n\nIt fits anyone who wants a router and laptop backup at home and a camp station on weekends. The UPS function keeps devices running during a blackout.",
    "specs": [
      "128Wh, 200W AC, 4.0 lbs",
      "10ms UPS, 350W bypass",
      "150W AC recharge in 70 minutes"
    ],
    "pros": [
      "Recharges from AC in about 70 minutes",
      "Built-in UPS with 350W bypass",
      "Bluetooth app control",
      "100W USB-C fast charging"
    ],
    "cons": [
      "Smaller 128Wh capacity",
      "Highest price in the group"
    ],
    "bestFor": "Home backup plus camping",
    "take": "The fastest to refill and the only one with a UPS. Great for laptops and routers.",
    "catch": "Capacity is lower than the 192Wh option."
  },
  {
    "id": "best-power-station-under-200-2",
    "rank": 2,
    "badge": "Best Capacity",
    "name": "200W Portable Power Station",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Eg7EkHYHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GLYDTZHZ?tag=rvgearlab-amz-20",
    "description": "The Powkey R180 stores 192Wh in LiFePO4 cells and lists a 200W AC outlet, two USB ports, a USB-C port and two DC outputs. It weighs 4.7 lbs, measures 7.1 x 5.3 x 5.5 inches and has a foldable handle and a dual-white LED light.\n\nIt holds the most energy of the five, about 50% more than the BLUETTI. LiFePO4 chemistry adds longer life compared with standard lithium-ion.\n\nIt fits campers who put runtime first and do not need UPS or fast recharge. The foldable handle makes it easy to carry between sites.",
    "specs": [
      "192Wh LiFePO4, 200W AC",
      "4.7 lbs, foldable handle",
      "Dual white LED light"
    ],
    "pros": [
      "Largest capacity at 192Wh",
      "LiFePO4 chemistry",
      "Foldable handle for carrying",
      "Dual-white LED emergency light"
    ],
    "cons": [
      "Slower recharge than the BLUETTI",
      "Heavier than the BLUETTI"
    ],
    "bestFor": "Maximum runtime",
    "take": "The most energy for the price. Pick it if you camp for several days.",
    "catch": "No fast recharge or UPS here."
  },
  {
    "id": "best-power-station-under-200-3",
    "rank": 3,
    "badge": "Best Display",
    "name": "Portable Power Station 200W",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41jaOhajS1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07T48L6CF?tag=rvgearlab-amz-20",
    "description": "The Flashfish holds 151Wh (40,800mAh) with a 200W AC outlet, two DC ports, two QC3.0 USB ports and a USB port. A LCD shows remaining power and separate AC and DC buttons keep controls simple.\n\nIt recharges by wall adapter in 4 to 4.5 hours, by car charger in about 5 hours and by a compatible Flashfish 60W panel in 5 to 6 hours. It automatically shuts off in case of overload.\n\nIt fits campers who want a straightforward station with clear controls. The wide set of ports covers phones, lights and small gear.",
    "specs": [
      "151Wh (40,800mAh), 200W AC",
      "LCD shows remaining power",
      "Wall, car or solar recharge"
    ],
    "pros": [
      "LCD display shows power left",
      "Separate AC and DC buttons",
      "BMS protection with auto shutoff",
      "Recharge by wall, car or solar"
    ],
    "cons": [
      "Solar panel sold separately",
      "Slower recharge than the BLUETTI"
    ],
    "bestFor": "Simple controls for campers",
    "take": "A clear display and separate buttons make this easy to use. Solid middle choice.",
    "catch": "It stores less than the Powkey R180."
  },
  {
    "id": "best-power-station-under-200-4",
    "rank": 4,
    "badge": "Best Peak Power",
    "name": "MARBERO 200W Portable Power Station 148Wh Camping Solar Generator Laptop Power Bank with AC Outlet 110V",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41H27zmeiLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B8HMDRYZ?tag=rvgearlab-amz-20",
    "description": "The MARBERO M822 has a 148Wh battery with a 110V AC inverter rated 200W and 270W max, two QC3.0 USB-A ports, two more USB-A ports and a PD USB-C port. Two LED flashlights act as a camping lantern.\n\nIt can be recharged by wall outlet in about 7 hours or by car adapter in about 9. The 270W max headroom lets it start devices with a brief surge.\n\nIt fits campers who want lighting and charging in one box. The top and side lights double as a tent lantern.",
    "specs": [
      "148Wh, 200W AC (270W max)",
      "Two LED lanterns",
      "PD USB-C, QC3.0 ports"
    ],
    "pros": [
      "270W surge headroom",
      "Two LED flashlights built in",
      "PD USB-C and QC3.0 ports",
      "Charges by wall or car"
    ],
    "cons": [
      "Recharge takes about 7 hours",
      "Slower to refill than the BLUETTI"
    ],
    "bestFor": "Lighting plus charging",
    "take": "A camp-friendly station with built-in lights. Handles brief surges.",
    "catch": "Plan on a long wall recharge."
  },
  {
    "id": "best-power-station-under-200-5",
    "rank": 5,
    "badge": "Best Light and Compact",
    "name": "Portable Power Station 200W",
    "price": "$88.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41a0xhn+KaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C1SN5YD8?tag=rvgearlab-amz-20",
    "description": "The Powkey 146Wh unit produces pure sine wave AC at 200W, with seven output ports and three recharge options. It weighs 3.0 lbs, measures 7.87 x 1.81 x 5.71 inches and ships with a carry handbag.\n\nIt is the lightest and slimmest of the five and the lowest priced. Pure sine wave output suits sensitive electronics such as laptops and camera chargers.\n\nIt fits backpackers, travelers and anyone who wants the lightest option. The handbag keeps cables with the unit.",
    "specs": [
      "146Wh, 200W pure sine wave",
      "3.0 lbs, carry handbag",
      "Seven ports, three recharge options"
    ],
    "pros": [
      "Only 3.0 lbs",
      "Pure sine wave AC output",
      "Seven output ports",
      "Carry handbag included"
    ],
    "cons": [
      "Capacity is the second lowest",
      "Not a UPS"
    ],
    "bestFor": "Light travel",
    "take": "The lightest and lowest-cost option. Good for a trip with a laptop.",
    "catch": "It is best for short outings."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Watt-hours."
  },
  {
    "title": "Weight",
    "description": "Pounds."
  },
  {
    "title": "Recharge",
    "description": "Hours."
  },
  {
    "title": "Battery",
    "description": "LiFePO4 or Li-ion."
  },
  {
    "title": "Extras",
    "description": "UPS and lights."
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
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Fast recharge and UPS",
          "BLUETTI Elite 10 Mini",
          "150W AC, 10ms UPS"
        ],
        [
          "Maximum runtime",
          "Powkey R180 192Wh",
          "192Wh LiFePO4"
        ],
        [
          "Clear controls",
          "Flashfish 151Wh",
          "LCD and separate buttons"
        ],
        [
          "Lighting and surge",
          "MARBERO M822 148Wh",
          "270W max, two LEDs"
        ],
        [
          "Lightest",
          "Powkey 146Wh Pure Sine",
          "3.0 lbs"
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
          "$80 to $100",
          "Powkey 146Wh Pure Sine or Powkey R180 192Wh"
        ],
        [
          "$90 to $100",
          "Flashfish 151Wh or MARBERO M822 148Wh"
        ],
        [
          "$110 to $120",
          "BLUETTI Elite 10 Mini"
        ]
      ]
    }
  },
  {
    "subheading": "UPS and Fast Charge vs Raw Capacity",
    "cards": [
      {
        "label": "UPS and Fast Charge",
        "text": "Quick refills and blackout protection. BLUETTI Elite 10 Mini."
      },
      {
        "label": "Raw Capacity",
        "text": "More Wh for the same price. Powkey R180 192Wh, Flashfish 151Wh, MARBERO M822 148Wh and Powkey 146Wh Pure Sine."
      }
    ],
    "note": "Most buyers should choose BLUETTI Elite 10 Mini unless runtime matters most."
  },
  {
    "subheading": "By Use",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Home router backup",
          "BLUETTI Elite 10 Mini"
        ],
        [
          "Weekend camping",
          "Powkey R180 192Wh"
        ],
        [
          "Travel",
          "Powkey 146Wh Pure Sine"
        ],
        [
          "Tent lighting",
          "MARBERO M822 148Wh"
        ]
      ]
    }
  },
  {
    "subheading": "For Home Blackouts Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A UPS switchover, 200W AC and a fast refill so you are ready for the next outage."
      },
      {
        "label": "In this comparison",
        "text": "BLUETTI Elite 10 Mini lists a 10ms UPS with 350W bypass and recharges in about 70 minutes."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on BLUETTI Elite 10 Mini if you need UPS and quick refills."
      },
      {
        "label": "Save if",
        "text": "Save with Powkey 146Wh Pure Sine or Flashfish 151Wh for simple camping."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watt-hours and runtime",
    "explanation": "A 200W outlet tells you what it can run, but watt-hours tell you for how long. A 192Wh station runs a 50W laptop for about three hours. Compare Wh, not just watts."
  },
  {
    "criterion": "Recharge speed",
    "explanation": "A station that takes 7 hours on the wall is hard to reuse between days. 150W AC charging refills a small station in about an hour. Check the recharge time in the listing."
  },
  {
    "criterion": "UPS function",
    "explanation": "A UPS switches to battery in milliseconds when power fails, which keeps routers and desktop PCs running. Few stations in this price range have it. Look for a stated switchover time such as 10ms."
  },
  {
    "criterion": "Battery chemistry",
    "explanation": "LiFePO4 cells tolerate more cycles than standard lithium-ion. Not every listing names the chemistry. Look for LiFePO4 and a cycle count."
  },
  {
    "criterion": "Pure sine wave",
    "explanation": "Pure sine wave output is smoother for laptops and small appliances. Modified sine wave can cause buzzing or heat in some devices. Check for pure sine wave in the specs."
  },
  {
    "criterion": "Portability and weight",
    "explanation": "A 4 lb station fits a backpack, while a 5 lb station is a hand carry. A dense brick of battery can feel heavy after a long walk. For travel, check the dimensions and weight."
  }
];

export const faq = [
  {
    "q": "What can a 200W power station run?",
    "a": "Laptops, routers, lights, fans, phone chargers and low-draw gear that stays under 200W. It cannot run kettles, heaters or hair dryers."
  },
  {
    "q": "Is a UPS function worth it on a power station?",
    "a": "If you use it for a router or a desktop PC, yes. BLUETTI Elite 10 Mini lists a 10ms switchover."
  },
  {
    "q": "Is LiFePO4 worth it over lithium-ion at this price?",
    "a": "For frequent use, yes. Powkey R180 192Wh lists LiFePO4 for longer cycle life."
  },
  {
    "q": "How do I recharge a power station quickly?",
    "a": "Use the AC adapter at its highest rate. BLUETTI Elite 10 Mini supports 150W AC charging."
  },
  {
    "q": "How should I store a power station?",
    "a": "Keep it cool and dry and charge it to about half every few months. Avoid leaving it in a hot car."
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
