export const guideSlug = "best-1500w-portable-power-stations-for-camping";
export const guideTitle = "3 Best 1500w Portable Power Stations in 2026";
export const metaTitle = "Best 1500w Portable Power Stations in 2026";
export const metaDescription = "Best 1500W portable power stations compared on continuous output, capacity, charge speed and chemistry for camp kitchens, RVs and outage backup.";
export const mainKeyword = "best 1500w portable power stations";
export const introParagraphs = [
  "A 1500W power station can run a small air fryer, a coffee maker or a space-saver fridge plus a laptop, which is where camp kitchens and outage kits start to feel real. Capacity decides how long that 1500W lasts, so the watt-hours matter as much as the headline figure.",
  "Two stations state 1500W exactly, and a third at 1800W is included as the nearest step up. They were compared on continuous output, capacity, charge time and what each listing says about chemistry and ports."
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
    "id": "best-1500w-portable-power-stations-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Jackery Solar Generator 1000 v2 with 2x100W Solar Panel",
    "price": "$939.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Ii3eXWiHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D66VD3X4?tag=rvgearlab-amz-20",
    "description": "The Jackery Explorer 1000 v2 lists 1500W AC output with 3000W surge, 1070Wh of LiFePO4 and a 0 to 100 percent charge in 1 hour. It has six ports, including 2 USB-C, 1 USB-A, 1 DC car port and 3 pure sine AC ports, with app control that switches between 1 hour and 1.7 hour charging.\n\nIt states the quickest full charge of the three, and its 1500W rating suits a small air fryer or coffee maker. The listing says the 1.0 model charged 7.5 times slower.\n\nIt suits campers and RV owners who want fast turnaround and a trusted brand for a weekend. The listing is a bundle with two 100W solar panels.",
    "specs": [
      "1500W AC, 3000W surge",
      "1070Wh LiFePO4, 1 hour charge",
      "3 AC ports, 2 USB-C, app control"
    ],
    "pros": [
      "Full charge in about 1 hour",
      "3000W surge for motor starts",
      "Three pure sine AC ports",
      "App switches charging modes"
    ],
    "cons": [
      "Only 1070Wh limits long runs",
      "Solar bundle raises the price"
    ],
    "bestFor": "Fast-turnaround camp and RV power",
    "take": "A fast, capable 1500W with strong brand support. The bundle makes solar easy.",
    "catch": "At 1070Wh, a 1500W load drains it in under an hour."
  },
  {
    "id": "best-1500w-portable-power-stations-2",
    "rank": 2,
    "badge": "Best Capacity",
    "name": "Anker SOLIX S2000 Portable Power Station with Power Strip",
    "price": "$779.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41w-rHqV9ML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HJDBKSY5?tag=rvgearlab-amz-20",
    "description": "The Anker SOLIX S2000 lists 2kWh of capacity with 1500W rated and 3000W peak output on LFP cells rated for 10,000 cycles and a 15-year lifespan. OptiSave technology lengthens runtime, with the listing quoting 35 hours of fridge backup and a power strip in the package.\n\nIt has about double the energy of the Jackery Explorer 1000 v2 and a much longer cycle rating. The listing says it is the smallest and lightest 2kWh station and powers most home essentials.\n\nIt suits home backup and long camp stays where capacity matters more than quick turnaround. The 10,000 cycle rating suits daily use.",
    "specs": [
      "2kWh, 1500W rated, 3000W peak",
      "LFP, 10,000 cycles, 15 years",
      "OptiSave, power strip included"
    ],
    "pros": [
      "Double the capacity of 1000Wh units",
      "10,000 cycle LFP battery",
      "35 hours of fridge backup listed",
      "Power strip in the box"
    ],
    "cons": [
      "No solar panels in this package",
      "Charge speed is not stated here"
    ],
    "bestFor": "Home backup and long stays",
    "take": "The pick when runtime matters more than speed. A durable choice for outage kits.",
    "catch": "Charging speed is not given in this listing."
  },
  {
    "id": "best-1500w-portable-power-stations-3",
    "rank": 3,
    "badge": "Best Power Headroom",
    "name": "BLUETTI Elite 100 V2 Portable Power Station for Camping 1024Wh 1800W",
    "price": "$489.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RMFsLYB-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F42CSQWG?tag=rvgearlab-amz-20",
    "description": "The BLUETTI Elite 100 V2 offers 1,024Wh of storage and 1,800W of rated AC power, stretching to 2,700W when Power Lifting mode is on. A 10ms UPS function is listed. It reaches 80 percent in about 45 minutes through 1,200W TurboBoost charging and weighs 25 pounds.\n\nIt is the 1800W nearest-fit pick, with 300W more than the Jackery Explorer 1000 v2 and the lowest price of the three. A silent mode runs at 30dB and the BLUETTI app offers Wi-Fi and Bluetooth monitoring.\n\nIt suits campers who want headroom for a kettle-class appliance or an air fryer. It also works as a desk UPS at home.",
    "specs": [
      "1,024Wh, 1,800W rated",
      "2,700W Power Lifting mode",
      "80% in 45 minutes, 25 lb"
    ],
    "pros": [
      "1,800W output covers heavy loads",
      "45 minute recharge to 80%",
      "10ms UPS and 30dB silent mode",
      "App control with OTA updates"
    ],
    "cons": [
      "Above the 1500W target",
      "25 pounds is a two-hand carry"
    ],
    "bestFor": "Heavy appliances in a small station",
    "take": "The most output per dollar of the three. A good choice for short, heavy loads.",
    "catch": "Weight and the 1,024Wh capacity limit long runs."
  }
];

export const howWeEvaluated = [
  {
    "title": "Continuous output",
    "description": "Compared the rated AC watts and the surge figure."
  },
  {
    "title": "Capacity",
    "description": "Looked at stated watt-hours and cycle ratings."
  },
  {
    "title": "Charge speed",
    "description": "Noted the stated recharge times."
  },
  {
    "title": "Ports and extras",
    "description": "Checked AC outlets, USB-C and app control."
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
    "subheading": "By Use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Weekend camp with fast turnaround",
          "Jackery Explorer 1000 v2",
          "1 hour full charge"
        ],
        [
          "Outage backup for a fridge",
          "Anker SOLIX S2000",
          "2kWh and 35 hours fridge backup"
        ],
        [
          "Air fryer or kettle",
          "BLUETTI Elite 100 V2",
          "1,800W output"
        ],
        [
          "Solar bundle",
          "Jackery Explorer 1000 v2",
          "Two 100W panels included"
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
          "$480 to $490",
          "BLUETTI Elite 100 V2"
        ],
        [
          "$770 to $780",
          "Anker SOLIX S2000"
        ],
        [
          "$930 to $940",
          "Jackery Explorer 1000 v2"
        ]
      ]
    }
  },
  {
    "subheading": "Fast charge vs more capacity",
    "cards": [
      {
        "label": "Fast charge",
        "text": "The Jackery Explorer 1000 v2 and BLUETTI Elite 100 V2 refill within about an hour."
      },
      {
        "label": "More capacity",
        "text": "The Anker SOLIX S2000 holds 2kWh and a 10,000 cycle pack."
      }
    ],
    "note": "Most campers should default to the Jackery Explorer 1000 v2 unless runtime beats speed."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price",
          "BLUETTI Elite 100 V2"
        ],
        [
          "Highest capacity",
          "Anker SOLIX S2000"
        ],
        [
          "Highest output",
          "BLUETTI Elite 100 V2"
        ],
        [
          "Solar kit included",
          "Jackery Explorer 1000 v2"
        ]
      ]
    }
  },
  {
    "subheading": "For RV Camp Kitchens Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "1500W or more with a good surge rating"
      },
      {
        "label": "In this comparison",
        "text": "The Jackery Explorer 1000 v2 gives 1500W with 3000W surge, and the BLUETTI Elite 100 V2 gives 1800W."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Anker SOLIX S2000 if you want 2kWh and a 10,000 cycle pack."
      },
      {
        "label": "Save if",
        "text": "Save with the BLUETTI Elite 100 V2 if you want the most output for the least money and short runs are fine."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watts versus watt-hours",
    "explanation": "A 1500W rating describes how hard it can push, and watt-hours describe how long. A 1070Wh station at 1500W runs for under 40 minutes, while a 2kWh station runs about 70 minutes. Check both numbers against your appliance."
  },
  {
    "criterion": "Surge for motors",
    "explanation": "Fridge compressors and fans can draw several times their running watts at start. A 3000W surge rating covers that for a moment. Look at the peak and surge in the listing."
  },
  {
    "criterion": "Cycle life",
    "explanation": "A 3000-cycle LiFePO4 pack lasts about 8 years of daily use, and a 10,000-cycle LFP pack lasts decades on paper. If you use it often, cycles matter. Check the cycle figure and the years claimed."
  },
  {
    "criterion": "Fast charging versus storage",
    "explanation": "Rapid charging gets you back to full in an hour, but the power draw is high and needs a strong outlet. Slow charging is easier on a generator or solar setup. Check the AC input rating."
  },
  {
    "criterion": "Weight and carry",
    "explanation": "A 1000Wh class unit often weighs 25 pounds or more, which is a two-hand carry. Large units need a cart. Check weight and handle design."
  }
];

export const faq = [
  {
    "q": "What can a 1500W power station run?",
    "a": "A coffee maker, air fryer, small microwave or fridge, one at a time. Check the appliance label against the 1500W limit."
  },
  {
    "q": "How long will it run a fridge?",
    "a": "A typical fridge uses around 100 watts when cycling, so 1070Wh lasts about 8 hours and 2kWh lasts about 18. Listings quote more for efficient fridges."
  },
  {
    "q": "Is a bundle with solar panels worth it?",
    "a": "It is if you will recharge off-grid. Check that the panels' voltage range suits the station."
  },
  {
    "q": "How do I charge it fast?",
    "a": "Use a wall outlet with the supplied cable. Solar charging is slower. Keep it ventilated while charging."
  },
  {
    "q": "How do I store it?",
    "a": "Keep it at partial charge in a cool, dry place. Top it up every few months."
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
