export const guideSlug = "best-lifepo4-portable-power-stations-for-camping";
export const guideTitle = "2 Best LIFEPO4 Portable Power Stations in 2026";
export const metaTitle = "Best LIFEPO4 Portable Power Stations in 2026";
export const metaDescription = "Best LiFePO4 portable power stations compared on cycle life, output, charging speed and weight, with notes on which listings name the chemistry.";
export const mainKeyword = "best lifepo4 portable power stations";
export const introParagraphs = [
  "LiFePO4 (lithium iron phosphate) cells are the chemistry most buyers want in a portable station because they tolerate thousands of charge cycles. Not every listing names its chemistry, though, so that has to be checked before paying.",
  "Only two stations qualify here. One names automotive-grade LiFePO4 outright, while the other is a faster and stronger unit whose listing text does not name the cell type, so it is labeled as the nearest fit."
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
    "id": "best-lifepo4-portable-power-stations-1",
    "rank": 1,
    "badge": "Best Named LiFePO4",
    "name": "LIBRIDS Portable Power Station C600",
    "price": "$239.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RxbMjWhZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H9RWG765?tag=rvgearlab-20",
    "description": "The LIBRIDS C600 is built with automotive-grade LiFePO4 cells that the listing rates for more than 4,000 charge cycles while keeping over 80 percent of capacity. It stores 640Wh and lists 600W rated AC output, 1,200W surge, 4 AC outlets, 8 ports and a 10ms UPS switchover.\n\nIt is the only pick that names LiFePO4 and a cycle count directly, at roughly half the price of the BLUETTI Elite 100 V2. Four recharge routes, including solar and a gas generator, give it the more flexible charging menu.\n\nIt suits first-time buyers and light RV or cabin users who want a long-lasting battery for lights, fans, laptops and a small fridge. The 10ms UPS also covers a router or TV during short outages.",
    "specs": [
      "640Wh automotive-grade LiFePO4",
      "600W rated, 1,200W surge",
      "10ms UPS, 4 AC outlets"
    ],
    "pros": [
      "LiFePO4 named with 4,000+ cycles",
      "Four AC outlets and 8 ports",
      "Four ways to recharge",
      "10ms UPS switchover for outages"
    ],
    "cons": [
      "600W rating cannot run big appliances",
      "Smaller capacity than the BLUETTI"
    ],
    "bestFor": "A long-life LiFePO4 starter",
    "take": "The clear LiFePO4 choice here, and a long-life one on paper. Great for light loads.",
    "catch": "The 600W limit rules out kettles, heaters and hair dryers."
  },
  {
    "id": "best-lifepo4-portable-power-stations-2",
    "rank": 2,
    "badge": "Best Power and Speed",
    "name": "BLUETTI Elite 100 V2 Portable Power Station for Camping 1024Wh 1800W",
    "price": "$489.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RMFsLYB-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F42CSQWG?tag=rvgearlab-20",
    "description": "The BLUETTI Elite 100 V2 stores 1,024Wh and lists 1,800W rated AC output, 2,700W in Power Lifting mode, 11 ports and a 10ms UPS. It reaches 80 percent charge in roughly 45 minutes with 1,200W TurboBoost AC charging, weighs 25 pounds and has Wi-Fi and Bluetooth app control.\n\nIt carries three times the rated output of the LIBRIDS C600 and almost two-thirds more storage. A silent mode at 30dB makes it livable indoors.\n\nIt suits campers and home-backup buyers who need to run a heavier appliance and refill fast. The compact 17L body and hidden handle keep it easy to carry.",
    "specs": [
      "1,024Wh, 1,800W rated",
      "2,700W Power Lifting mode",
      "80% in 45 min, 25 lb"
    ],
    "pros": [
      "1,800W output for heavy loads",
      "80 percent charge in about 45 minutes",
      "30dB silent mode",
      "App control with OTA updates"
    ],
    "cons": [
      "Cell chemistry not named on the listing",
      "Priced near double the LIBRIDS"
    ],
    "bestFor": "Fast refills and bigger loads",
    "take": "The more capable station of the pair. Check that the chemistry meets your LiFePO4 requirement.",
    "catch": "The listing does not name the cell chemistry, so ask before paying a LiFePO4 premium."
  }
];

export const howWeEvaluated = [
  {
    "title": "Chemistry named",
    "description": "Checked whether each listing names LiFePO4 and a cycle rating, and marked those that do not."
  },
  {
    "title": "Output and capacity",
    "description": "Compared rated AC watts, surge watts and watt-hours."
  },
  {
    "title": "Charging speed",
    "description": "Looked at AC, solar and car charging figures and the stated time to a full or 80 percent charge."
  },
  {
    "title": "Weight and ports",
    "description": "Noted stated weight, port counts and UPS switchover time."
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
          "Longest named cycle life on a budget",
          "LIBRIDS C600",
          "Names LiFePO4 and 4,000+ cycles"
        ],
        [
          "Running a kettle or air fryer",
          "BLUETTI Elite 100 V2",
          "1,800W rated output"
        ],
        [
          "Fast refills between stops",
          "BLUETTI Elite 100 V2",
          "80 percent in about 45 minutes"
        ],
        [
          "Lights, fans and a laptop",
          "LIBRIDS C600",
          "600W is plenty for small loads"
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
          "$230 to $240",
          "LIBRIDS C600"
        ],
        [
          "$480 to $490",
          "BLUETTI Elite 100 V2"
        ]
      ]
    }
  },
  {
    "subheading": "Named LiFePO4 vs unnamed chemistry",
    "cards": [
      {
        "label": "Named LiFePO4",
        "text": "The LIBRIDS C600 states LiFePO4 cells and a cycle rating, so you know the lifespan you are buying."
      },
      {
        "label": "Unnamed chemistry",
        "text": "The BLUETTI Elite 100 V2 lists stronger output and faster charging but does not name its cells, so ask the seller before assuming LiFePO4."
      }
    ],
    "note": "Most buyers who require LiFePO4 should default to the LIBRIDS C600 unless they need the Elite 100 V2 output."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lower price",
          "LIBRIDS C600"
        ],
        [
          "Higher price for more power",
          "BLUETTI Elite 100 V2"
        ]
      ]
    }
  },
  {
    "subheading": "For Long-Term Cabin Backup Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A named LiFePO4 pack and a UPS switchover"
      },
      {
        "label": "In this comparison",
        "text": "The LIBRIDS C600 names its cells and cycle rating, and both it and the BLUETTI Elite 100 V2 list a 10ms UPS."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BLUETTI Elite 100 V2 if you want 1,800W output, 45 minute charging to 80 percent and quiet operation."
      },
      {
        "label": "Save if",
        "text": "Save with the LIBRIDS C600 if your loads stay under 600W and you want the cell type named on the listing."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "LiFePO4 versus standard lithium",
    "explanation": "LiFePO4 cells (lithium iron phosphate) typically list 3,000 or more cycles and tolerate heat better, while standard lithium-ion cells wear faster. They are slightly heavier for the same energy. Check the listing title or bullets for the word LiFePO4 or LFP rather than assuming."
  },
  {
    "criterion": "Cycle count and what it means",
    "explanation": "A cycle count such as 4,000 means the battery keeps about 80 percent capacity after that many full charges. Used weekly, 4,000 cycles outlasts the rest of the station. Look for a stated figure and a retained-capacity percentage next to it."
  },
  {
    "criterion": "Output you actually need",
    "explanation": "Rated output decides which appliances can run, while surge covers short motor starts. A 600W unit powers lights, laptops and a fan, and an 1,800W unit adds a kettle or air fryer. Add up the watts of devices you run together before choosing."
  },
  {
    "criterion": "Charging speed matters on trips",
    "explanation": "Fast AC charging refills a unit at a motel or campground, and solar input stretches off-grid time. Compare the maximum input watts and the time to 80 percent. If the listing shows only a full-charge time, plan for the last 20 percent to be slower."
  },
  {
    "criterion": "Temperature and storage",
    "explanation": "Most lithium cells will not charge safely below freezing, and heat shortens life. Check the listed operating range, and store the unit at partial charge in a cool dry place. A battery management system (BMS) is the safeguard to look for in the specs."
  }
];

export const faq = [
  {
    "q": "Is LiFePO4 worth it over standard lithium?",
    "a": "For frequent use, usually yes, because LiFePO4 lists thousands of cycles and handles heat better. For occasional trips, the difference matters less. The LIBRIDS C600 lists more than 4,000 cycles."
  },
  {
    "q": "Does the BLUETTI Elite 100 V2 use LiFePO4?",
    "a": "The listing text does not name the cell chemistry. Ask BLUETTI or the seller to confirm before buying if LiFePO4 is a requirement."
  },
  {
    "q": "Can these run a fridge during an outage?",
    "a": "Both have a 10ms UPS switchover, and a small fridge draws well under their output ratings. Check your fridge's starting watts, since compressors surge when they start."
  },
  {
    "q": "How do I charge in a car?",
    "a": "Use the car port with the supplied cable, and keep the engine running if the draw is high. The LIBRIDS C600 lists car charging among its four recharge methods."
  },
  {
    "q": "How should I store a LiFePO4 station?",
    "a": "Keep it dry at roughly half charge, away from heat. Top it up every few months so the battery management system keeps the cells balanced."
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
