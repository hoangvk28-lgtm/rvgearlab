export const guideSlug = "best-power-station-for-the-money";
export const guideTitle = "3 Best Power Station For The Money in 2026";
export const metaTitle = "Best Power Station For The Money in 2026";
export const metaDescription = "Best power stations for the money: three picks from a 120W budget unit to a 600W BLUETTI, compared on capacity per dollar, output and UPS.";
export const mainKeyword = "best power station for the money";
export const introParagraphs = [
  "The best-value power station is not the cheapest one. It is the one that matches your load without paying for capacity or output you will never use.",
  "These three picks cover distinct budgets. We compare stored energy, output watts and the extras that make each worth its money."
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
    "id": "best-power-station-for-the-money-1",
    "rank": 1,
    "badge": "Best Overall Value",
    "name": "BLUETTI Elite 30 V2 Portable Power Station 288Wh 600W LFP Solar Generator",
    "price": "$249.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YTEqBbTsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F42HLLSC?tag=rvgearlab-20",
    "description": "The BLUETTI Elite 30 V2 is a 288Wh LFP station with 600W of continuous output and 1,500W surge in Power Lifting Mode. It weighs 9.4 lbs, recharges from the wall at up to 380W (0 to 80% in 45 minutes) and includes a 10ms UPS switchover.\n\nIts 600W output is twice what the other two offer, so it runs a coffee maker, small fan or CPAP in addition to phones. It is the only pick with UPS and fast wall charging.\n\nIt suits households and campers who want one station for both outages and trips. The UltraCell tech and smart cooling cut power consumption by 50% according to the listing.",
    "specs": [
      "288Wh LFP, 600W continuous",
      "1,500W surge, 10ms UPS",
      "380W wall charge, 9.4 lbs"
    ],
    "pros": [
      "600W output runs larger devices",
      "10ms UPS switchover",
      "0 to 80% recharge in 45 minutes",
      "LFP chemistry"
    ],
    "cons": [
      "Highest price of the three",
      "288Wh is still modest"
    ],
    "bestFor": "One station for outages and trips",
    "take": "The best balance of output, UPS and speed. Pay more for features you will use.",
    "catch": "It is the most expensive of the three."
  },
  {
    "id": "best-power-station-for-the-money-2",
    "rank": 2,
    "badge": "Best Mid-Range",
    "name": "Westinghouse iGen400s 400 Watt",
    "price": "$139.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/419J+SgMmpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GD91M81M?tag=rvgearlab-20",
    "description": "The Westinghouse iGen400s is a 400W, 183Wh station with nine outlets: two 120V AC, three 30W USB-C, two USB-A, a 100W USB-C and a 12V DC. It charges to 80% in about 2 hours from a 120V outlet using a 100W adaptor.\n\nIt offers more ports than the ZeroKor and a respected brand name at a mid price. It has a tri mode light and is designed for use indoors and out with no fumes or noise.\n\nIt suits households that want a quiet, fume-free backup for a laptop, a router and phones. The tri-mode light is a handy bonus in a dark house.",
    "specs": [
      "400W, 183Wh, 9 outlets",
      "100W USB-C plus 12V DC",
      "Tri-mode light, fume-free"
    ],
    "pros": [
      "Nine outlets in one unit",
      "100W USB-C port for laptops",
      "Safe indoors with no fumes",
      "Brand-name backing"
    ],
    "cons": [
      "AC adapter not included",
      "183Wh is small"
    ],
    "bestFor": "Quiet indoor backup",
    "take": "A friendly mid-price station with lots of ports. Safe to use indoors.",
    "catch": "Buy a 100W AC adapter separately."
  },
  {
    "id": "best-power-station-for-the-money-3",
    "rank": 3,
    "badge": "Best Lowest Cost",
    "name": "Portable Power Station 120W Outdoor Power Bank Generator with USB C Outlet",
    "price": "$66.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415CFljO3UL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DLGMFMV2?tag=rvgearlab-20",
    "description": "The ZeroKor 120W station has a 26,400mAh lithium-ion pack, two 120W max AC outlets, a DC port, USB, QC and USB-C ports and a built-in BMS. It recharges by solar panel, wall adapter or USB-C.\n\nIt is the lowest priced of the three and the lightest in output, which suits phones, a laptop and a small fan. A screen display shows remaining power.\n\nIt suits campers and first-time buyers who need a cheap AC outlet. The BMS covers short circuit and overload protection.",
    "specs": [
      "26,400mAh, two 120W AC outlets",
      "Built-in BMS protections",
      "Solar, wall or USB-C recharge"
    ],
    "pros": [
      "Lowest price of the three",
      "Two 120W AC outlets",
      "Screen display shows power left",
      "Built-in BMS protections"
    ],
    "cons": [
      "Only 120W of output",
      "Lithium-ion, not LFP"
    ],
    "bestFor": "Phones and a small fan",
    "take": "The cheapest way to get AC power. Good for light loads.",
    "catch": "It cannot run a kettle or a heater."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity per dollar",
    "description": "Wh."
  },
  {
    "title": "Output",
    "description": "Watts."
  },
  {
    "title": "UPS",
    "description": "Switchover."
  },
  {
    "title": "Ports",
    "description": "Outlets."
  },
  {
    "title": "Battery",
    "description": "LFP or Li-ion."
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
    "subheading": "By Budget Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Output and UPS",
          "BLUETTI Elite 30 V2",
          "600W with 10ms UPS"
        ],
        [
          "Mid-price brand name",
          "Westinghouse iGen400s",
          "Nine outlets"
        ],
        [
          "Lowest cost",
          "ZeroKor 120W Station",
          "Two AC outlets for less"
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
          "$60 to $70",
          "ZeroKor 120W Station"
        ],
        [
          "$130 to $140",
          "Westinghouse iGen400s"
        ],
        [
          "$240 to $250",
          "BLUETTI Elite 30 V2"
        ]
      ]
    }
  },
  {
    "subheading": "LFP vs Lithium-Ion",
    "cards": [
      {
        "label": "LFP",
        "text": "Longer life and better thermals. BLUETTI Elite 30 V2."
      },
      {
        "label": "Lithium-Ion",
        "text": "Lower cost and common. Westinghouse iGen400s and ZeroKor 120W Station."
      }
    ],
    "note": "Most buyers should choose BLUETTI Elite 30 V2 if the budget allows."
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
          "CPAP or coffee maker",
          "BLUETTI Elite 30 V2"
        ],
        [
          "Laptop and phones",
          "Westinghouse iGen400s"
        ],
        [
          "Phone charging",
          "ZeroKor 120W Station"
        ]
      ]
    }
  },
  {
    "subheading": "For Everyday Outage Backup Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A UPS switchover, a 600W output and fast wall charging."
      },
      {
        "label": "In this comparison",
        "text": "BLUETTI Elite 30 V2 lists all three, and Westinghouse iGen400s adds indoor safety."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on BLUETTI Elite 30 V2 for 600W output and a 10ms UPS."
      },
      {
        "label": "Save if",
        "text": "Save with ZeroKor 120W Station for phones and a laptop."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watt-hours per dollar",
    "explanation": "Divide the Wh by the price to compare value. A cheaper 120W unit and a premium 288Wh unit differ more in output and features than in capacity. Check Wh in the listing."
  },
  {
    "criterion": "Output you will actually use",
    "explanation": "A 120W station is enough for phones and a laptop. Anything with a motor or heating element needs 300W or more. Check the continuous output and the surge."
  },
  {
    "criterion": "UPS switchover",
    "explanation": "A UPS is rare at this price and protects computers and routers. A stated 10ms switchover is usually fast enough. Check if UPS is named."
  },
  {
    "criterion": "Port mix",
    "explanation": "A 100W USB-C port can charge a laptop without a wall brick. More AC outlets let you plug two devices at once. Check port counts."
  },
  {
    "criterion": "Battery chemistry",
    "explanation": "LFP cells last longer than standard lithium-ion. If you will use it for years, LFP is worth the premium. Look for LFP or LiFePO4 in the title."
  },
  {
    "criterion": "What is in the box",
    "explanation": "Some stations lack an AC adapter, so you pay extra to charge them. A bare unit can cost more in the end than a bundled one. Check what is included before comparing prices."
  }
];

export const faq = [
  {
    "q": "What is the best value in a power station?",
    "a": "The one that fits your load. BLUETTI Elite 30 V2 offers the most for features, while ZeroKor 120W Station is best for small loads."
  },
  {
    "q": "Is a more expensive station worth it?",
    "a": "If you need higher output or a UPS, yes. If you charge phones and a laptop, ZeroKor 120W Station is enough."
  },
  {
    "q": "Does Westinghouse iGen400s come with an AC adapter?",
    "a": "The listing notes that no AC power adapter is included. Plan to buy a 100W adapter for the fastest charge."
  },
  {
    "q": "Can I use a power station indoors?",
    "a": "Battery stations produce no fumes, so yes, as long as they have ventilation and are on a stable surface. Westinghouse iGen400s is listed for indoor and outdoor use."
  },
  {
    "q": "How do I extend a power station's life?",
    "a": "Avoid full discharge, store it half charged and keep it cool. LFP cells such as in BLUETTI Elite 30 V2 tolerate more cycles."
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
