export const guideSlug = "best-power-station-under-100";
export const guideTitle = "6 Best Power Station Under 100 in 2026";
export const metaTitle = "Best Power Station Under 100 in 2026";
export const metaDescription = "Best power stations under $100: six small 90 to 192Wh stations with 100W AC outlets, compared on capacity, battery type and what they can run.";
export const mainKeyword = "best power station under 100";
export const introParagraphs = [
  "Under $100 you are buying a small power station, not a whole-home generator. These units run phones, laptops, lights and small fans, and they are the cheapest way to get an AC outlet on a camping trip.",
  "The six here hold between about 90 and 192Wh, and most are rated at 100W of AC output. They are ordered by usable capacity, battery chemistry and extras, with honest notes on what 100W can and cannot run."
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
    "id": "best-power-station-under-100-1",
    "rank": 1,
    "badge": "Best Capacity",
    "name": "Portable Power Station 192Wh Outdoor Generator with AC Outlet 100W",
    "price": "$73.71",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31FBcuGw68L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DKFR196Q?tag=rvgearlab-amz-20",
    "description": "This station has a 192Wh capacity and 100W rated output with 200W surge, in a 4.6 x 4.6 x 7 inch body weighing 3.9 lbs. It has one AC outlet, two USB-C, two USB-A and two DC ports, and the LiFePO4 cells are rated for over 3,000 cycles.\n\nIt stores about twice the energy of the 89.6Wh units, which is the main reason it ranks first. The LED light with an SOS mode adds an emergency lantern.\n\nIt fits campers who want to keep a laptop and phones going across a long weekend. The compact size fits in a day pack.",
    "specs": [
      "192Wh, 100W AC (200W surge)",
      "LiFePO4, 3,000+ cycles",
      "3.9 lbs, 7 ports, LED SOS"
    ],
    "pros": [
      "192Wh holds twice the energy of the 89.6Wh units",
      "LiFePO4 cells rated for 3,000+ cycles",
      "Seven ports including 2 USB-C",
      "LED light with SOS mode"
    ],
    "cons": [
      "No brand name in the listing",
      "100W cap limits larger devices"
    ],
    "bestFor": "Long weekend camping",
    "take": "The most energy for the least money. Great for keeping a laptop and phones alive.",
    "catch": "It cannot run a space heater or a kettle."
  },
  {
    "id": "best-power-station-under-100-2",
    "rank": 2,
    "badge": "Best Flight-Friendly",
    "name": "DaranEner R100",
    "price": "$75.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41wrmdLv1TL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FGJ9N7HD?tag=rvgearlab-amz-20",
    "description": "The DaranEner R100 holds 89.6Wh with a 100W AC outlet (200W peak) and seven ports. LiFePO4 cells are listed for over 3,000 cycles and four charging methods include solar, car, USB-C and wall.\n\nIt is designed to meet FAA carry-on limits, which sets it apart from the 192Wh unit. It is also the one with the most recharging options of the group.\n\nIt fits travelers who want an AC outlet in a carry-on. It also works for road trips and short camping stays.",
    "specs": [
      "89.6Wh, 100W AC (200W peak)",
      "LiFePO4, 3,000+ cycles",
      "FAA carry-on compliant"
    ],
    "pros": [
      "FAA carry-on compliant size",
      "LiFePO4 cells for long life",
      "Four ways to recharge",
      "Seven ports"
    ],
    "cons": [
      "89.6Wh runs out fast",
      "No solar panel included"
    ],
    "bestFor": "Flights and road trips",
    "take": "A small, safe battery you can fly with. It handles laptops and phones for a day.",
    "catch": "Capacity is half of the 192Wh unit."
  },
  {
    "id": "best-power-station-under-100-3",
    "rank": 3,
    "badge": "Best USB-C Power",
    "name": "Portable Power Station 89.6Wh Two-Way Fast Charging with AC 100W",
    "price": "$71.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/416bxqLh9PL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FFZJFBYH?tag=rvgearlab-amz-20",
    "description": "The R101 holds 89.6Wh and lists USB-C1 input of 65W and USB-C1 output of 100W, compared with the older R100 at 45W in and 15W out. The 6.5 x 3.3 x 4 inch body is about the size of a venti coffee cup.\n\nWhere the R100 model lists 15W from its USB-C port, the R101 can power a laptop directly at 100W. It also supports four ways to recharge.\n\nIt fits travelers with USB-C laptops who want fast two-way charging. The small size slides into a bag.",
    "specs": [
      "89.6Wh, 100W AC (200W peak)",
      "USB-C 100W out, 65W in",
      "TSA-friendly venti cup size"
    ],
    "pros": [
      "USB-C outputs 100W for laptops",
      "USB-C input up to 65W",
      "Four ways to self-recharge",
      "Compact size for flights"
    ],
    "cons": [
      "Same 89.6Wh capacity as the R100",
      "No brand name in the title"
    ],
    "bestFor": "USB-C laptop users",
    "take": "A tiny station that charges a laptop fast over USB-C. A good pick for travel.",
    "catch": "It stores only 89.6Wh."
  },
  {
    "id": "best-power-station-under-100-4",
    "rank": 4,
    "badge": "Best Two-Outlet Value",
    "name": "Portable Power Station 120W",
    "price": "$67.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TQRbhEFxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLVHPGDZ?tag=rvgearlab-amz-20",
    "description": "The ZeroKor 120W unit has a 97.6Wh (26,400mAh) lithium-ion pack and two 120W max AC outlets, plus DC, USB, QC and USB-C ports. A built-in BMS covers short circuit, over-current, over-voltage, overload and overheating protection.\n\nIt is slightly larger in capacity than the 89.6Wh units and gives two AC outlets, which the single-outlet models do not. It can be recharged by solar panel, wall adapter or USB-C.\n\nIt fits campers who want two AC outlets for a laptop and a small fan. The screen shows what is left in the battery.",
    "specs": [
      "97.6Wh, two 120W AC outlets",
      "Lithium-ion, built-in BMS",
      "Solar, wall or USB-C recharge"
    ],
    "pros": [
      "Two 120W AC outlets",
      "Built-in BMS protections",
      "Screen display shows status",
      "Three ways to recharge"
    ],
    "cons": [
      "Lithium-ion, not LiFePO4",
      "Solar panel not included"
    ],
    "bestFor": "Two AC devices at once",
    "take": "Two AC outlets at a low cost. Handy for a laptop and a fan.",
    "catch": "Total output is still limited to about 120W."
  },
  {
    "id": "best-power-station-under-100-5",
    "rank": 5,
    "badge": "Best Entry Station",
    "name": "ZeroKor Portable Power Station 100W Outdoor Power Pack with 110V AC Outlet",
    "price": "$79.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xqWDIBbAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CXJ8S9Q9?tag=rvgearlab-amz-20",
    "description": "The ZeroKor 100W unit lists two 100W max AC outlets, a DC port, two USB ports, a QC USB port and a USB-C port in a lightweight lithium-ion pack. It has a screen display and BMS protection.\n\nIt is similar to the ZeroKor 120W with a slightly lower output rating. The screen display shows what is left, so you do not guess at runtime.\n\nIt fits first-time buyers who want a power station for phones and lights. Recharging works by solar panel, wall adapter or other adapters.",
    "specs": [
      "100W, two AC outlets",
      "Lithium-ion pack, BMS",
      "Screen display, three recharge ways"
    ],
    "pros": [
      "Two 100W AC outlets",
      "Screen display shows status",
      "Built-in BMS protection",
      "Lightweight pack"
    ],
    "cons": [
      "Capacity not clearly listed",
      "Lithium-ion pack, not LiFePO4"
    ],
    "bestFor": "First-time buyers",
    "take": "A simple, low-cost station for phones and lights. Good first buy.",
    "catch": "Check the stated Wh before relying on it."
  },
  {
    "id": "best-power-station-under-100-6",
    "rank": 6,
    "badge": "Best Budget",
    "name": "powkey 100W PD Laptop Rechargeable Power Station with USB-C Cable",
    "price": "$35.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412gXcDsASL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DPPC9SL5?tag=rvgearlab-amz-20",
    "description": "The powkey 100W station has a 96Wh LiFePO4 battery and 100W of total output with 100W pure sine wave, USB-C PD and multiple ports that charge up to four devices at once. A 12 month warranty and a USB-C cable with a lanyard are included.\n\nIt is the lowest priced station here and pairs LiFePO4 cells with a pure sine wave output. It focuses on laptops and phones.\n\nIt fits students, commuters and campers who just need a laptop charge. The lanyard and USB-C cable come in the box.",
    "specs": [
      "96Wh LiFePO4, 100W output",
      "Pure sine wave, USB-C PD",
      "12-month warranty"
    ],
    "pros": [
      "LiFePO4 battery at a low price",
      "Pure sine wave output",
      "Charges four devices at once",
      "12-month warranty"
    ],
    "cons": [
      "Built for laptops, not appliances",
      "Fewer ports than larger units"
    ],
    "bestFor": "Laptop and phone charging",
    "take": "The cheapest way to a LiFePO4 power station. Good for a laptop.",
    "catch": "It is closer to a power bank than a camp generator."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Watt-hours."
  },
  {
    "title": "Output",
    "description": "Watts."
  },
  {
    "title": "Battery",
    "description": "LiFePO4 or Li-ion."
  },
  {
    "title": "Ports",
    "description": "AC and USB-C."
  },
  {
    "title": "Recharge",
    "description": "Solar, wall, car."
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
    "subheading": "By Trip Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Long weekend camping",
          "192Wh 100W Station",
          "192Wh stores the most"
        ],
        [
          "Flying with a station",
          "DaranEner R100",
          "FAA carry-on compliant"
        ],
        [
          "USB-C laptop users",
          "R101 Two-Way Station",
          "100W USB-C output"
        ],
        [
          "Two AC devices",
          "ZeroKor 120W Station",
          "Two 120W AC outlets"
        ],
        [
          "Tightest budget",
          "powkey 100W Laptop Station",
          "LiFePO4 for the least"
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
          "$30 to $70",
          "powkey 100W Laptop Station or ZeroKor 120W Station"
        ],
        [
          "$70 to $80",
          "R101 Two-Way Station or 192Wh 100W Station"
        ],
        [
          "$70 to $80",
          "DaranEner R100 or ZeroKor 100W Station"
        ]
      ]
    }
  },
  {
    "subheading": "LiFePO4 vs Lithium-Ion",
    "cards": [
      {
        "label": "LiFePO4",
        "text": "Longer life and better heat tolerance. 192Wh 100W Station, DaranEner R100 and powkey 100W Laptop Station."
      },
      {
        "label": "Lithium-Ion",
        "text": "Lower cost and a standard choice. ZeroKor 120W Station and ZeroKor 100W Station."
      }
    ],
    "note": "Most buyers should choose 192Wh 100W Station for the capacity and LiFePO4."
  },
  {
    "subheading": "By Device",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Phone and lights only",
          "ZeroKor 100W Station"
        ],
        [
          "Laptop",
          "powkey 100W Laptop Station"
        ],
        [
          "Laptop and fan",
          "ZeroKor 120W Station"
        ],
        [
          "Drone batteries",
          "R101 Two-Way Station"
        ]
      ]
    }
  },
  {
    "subheading": "For Camping Weekends Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "At least 150Wh, a 100W AC outlet and a way to recharge in the field."
      },
      {
        "label": "In this comparison",
        "text": "192Wh 100W Station gives the most energy, and DaranEner R100 can be recharged from solar or car."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on 192Wh 100W Station if you need long run time."
      },
      {
        "label": "Save if",
        "text": "Save with powkey 100W Laptop Station or ZeroKor 100W Station for short outings."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watt-hours decide runtime",
    "explanation": "Watt-hours measure stored energy, so a 192Wh station runs a 50W laptop for roughly three hours after losses. A 90Wh unit runs it for under two. Check the Wh figure, not just mAh, since mAh depends on voltage."
  },
  {
    "criterion": "Output watts and surge",
    "explanation": "A 100W rating runs phones, laptops and LED lights. It does not run space heaters, hair dryers or kettles, which draw 1,000W or more. Check both rated and peak output."
  },
  {
    "criterion": "Battery chemistry",
    "explanation": "LiFePO4 cells last for thousands of cycles and tolerate heat better than standard lithium-ion. Standard lithium-ion cells cost less but wear sooner. Look for LiFePO4 and a cycle number in the listing."
  },
  {
    "criterion": "Port mix",
    "explanation": "AC outlets run household plugs, USB-C PD runs laptops directly and DC runs 12V gear. A station with two AC outlets helps if you plug in a fan and a charger. Match ports to your devices."
  },
  {
    "criterion": "Flight rules",
    "explanation": "Batteries under 100Wh are generally allowed in carry-on bags, which is why 89.6Wh units are popular for travel. Anything larger has stricter limits. Check airline rules before flying."
  },
  {
    "criterion": "What the budget gets you",
    "explanation": "Under $100 means small capacity, 100W-class output and plastic housings. Warranty terms are short. Choose based on what you actually need to power."
  }
];

export const faq = [
  {
    "q": "What can a 100W power station run?",
    "a": "Phones, tablets, laptops, LED lights, small fans and low-draw gear that stays under 100W. It cannot run kettles, microwaves or heaters."
  },
  {
    "q": "Can I take a power station on a plane?",
    "a": "Batteries under 100Wh are generally allowed in carry-on bags. DaranEner R100 is listed as FAA carry-on compliant at 89.6Wh. Always confirm with your airline."
  },
  {
    "q": "Is LiFePO4 worth it over lithium-ion at this price?",
    "a": "Yes if you will use it often, since LiFePO4 handles more cycles. 192Wh 100W Station lists over 3,000 cycles."
  },
  {
    "q": "How do I charge a power station while camping?",
    "a": "Use a solar panel, a car socket or a wall adapter before you leave. DaranEner R100 supports four recharge methods."
  },
  {
    "q": "How do I store a power station?",
    "a": "Keep it about half to two-thirds full in a cool, dry place and top it up every few months. Do not leave it in a hot car."
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
