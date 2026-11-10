export const guideSlug = "best-3000w-solar-generators";
export const guideTitle = "2 Best 3000w Solar Generators in 2026";
export const metaTitle = "Best 3000w Solar Generators in 2026";
export const metaDescription = "Best 3000W solar generators compared on continuous versus surge output, capacity and charging for RVs, cabins and home backup.";
export const mainKeyword = "best 3000w solar generators";
export const introParagraphs = [
  "Few portable solar generators deliver 3000W continuously, and listings that say 3000W usually mean a short surge. Reading the fine print on rated output decides whether a heater or air conditioner will actually run.",
  "Only two models qualify, both with surge ratings above 3000W and neither with 3000W continuous output. They are compared on what each really delivers and what you would pay for it."
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
    "id": "best-3000w-solar-generators-1",
    "rank": 1,
    "badge": "Best Overall 3000W Surge",
    "name": "UDPOWER S2400 Portable Power Station",
    "price": "$699.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41FKpIkddIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GY6XTZPG?tag=rvgearlab-20",
    "description": "The UDPOWER S2400 stores 2,083Wh in LiFePO4 cells rated for over 4,000 cycles and lists 2,400W rated output with a 3,000W peak. It has 6 AC outlets and 15 outputs in total, a UPS switchover under 0.01 seconds and a 41 pound body measuring 15.8 by 9.5 by 10.1 inches with dual handles.\n\nIt carries about twice the storage of the EcoFlow DELTA 3 Classic. The EcoFlow charges faster, while this one holds the energy longer.\n\nIt suits RV and home-backup buyers who want a long-lasting battery and plenty of outlets. The 3,000W peak starts motors and compressors.",
    "specs": [
      "2,083Wh LiFePO4, 2,400W",
      "3,000W peak, 6 AC outlets",
      "41 lb, 4,000+ cycles"
    ],
    "pros": [
      "Over 4,000 charge cycles listed",
      "Six AC outlets, 15 outputs",
      "UPS under 0.01 seconds",
      "Dual-handle 41 pound body"
    ],
    "cons": [
      "3,000W is a peak, not continuous",
      "Two listings at different prices"
    ],
    "bestFor": "RV and home backup with many outlets",
    "take": "A big LiFePO4 battery with a 3,000W peak. Plan around 2,400W continuous.",
    "catch": "Continuous output is 2,400W, so a sustained 3000W load will exceed it."
  },
  {
    "id": "best-3000w-solar-generators-2",
    "rank": 2,
    "badge": "Best Fast-Charge Kit",
    "name": "EF ECOFLOW Solar Generator Delta 3 Classic with 220W Solar Panel",
    "price": "$699.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31k4M4wngWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FRMQPZF6?tag=rvgearlab-20",
    "description": "The EcoFlow DELTA 3 Classic kit includes a 1,024Wh station and a 220W solar panel, with 1,800W output and 3,600W surge, expandable to 2,600W with X-Boost. It charges 0 to 80 percent in 45 minutes with X-Stream AC and fully on solar in 5.8 hours with the panel, and the UPS switches in under 10ms.\n\nIts 3,600W surge exceeds the UDPOWER S2400's 3,000W peak, and its 45 minute AC charge is far faster. Storage is about half, so it suits shorter runs.\n\nIt suits weekend RV and cabin users who want a panel in the box and quick wall charging. X-Boost lets it run some higher-wattage appliances.",
    "specs": [
      "1,024Wh, 1,800W, 3,600W surge",
      "0 to 80% in 45 minutes",
      "220W solar panel included"
    ],
    "pros": [
      "3,600W surge, higher than the UDPOWER",
      "Fast 45 minute AC charging",
      "220W panel in the kit",
      "Under 10ms UPS for PCs and routers"
    ],
    "cons": [
      "Only 1,024Wh of storage",
      "Station and panel may ship separately"
    ],
    "bestFor": "Quick refills with a panel",
    "take": "A faster-charging, smaller unit with a better surge. Choose it for short, powerful bursts.",
    "catch": "At 1,024Wh, heavy loads drain it in under an hour."
  }
];

export const howWeEvaluated = [
  {
    "title": "Continuous versus surge",
    "description": "Separated continuous rated watts from peak or surge watts on each listing."
  },
  {
    "title": "Capacity",
    "description": "Compared stated watt-hours."
  },
  {
    "title": "Charging speed",
    "description": "Looked at AC and solar recharge times."
  },
  {
    "title": "Backup features",
    "description": "Noted UPS switchover and outlet counts."
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
          "Longest battery life and outlets",
          "UDPOWER S2400",
          "2,083Wh and 4,000+ cycles"
        ],
        [
          "Fast refills and a panel in the box",
          "EcoFlow DELTA 3 Classic",
          "45 minutes to 80 percent"
        ],
        [
          "Motor starts above 3000W",
          "EcoFlow DELTA 3 Classic",
          "3,600W surge"
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
          "$690 to $700",
          "EcoFlow DELTA 3 Classic"
        ],
        [
          "$690 to $700",
          "UDPOWER S2400"
        ]
      ]
    }
  },
  {
    "subheading": "Large capacity vs fast charging",
    "cards": [
      {
        "label": "Large capacity",
        "text": "The UDPOWER S2400 stores about twice as much, which suits home backup."
      },
      {
        "label": "Fast charging",
        "text": "The EcoFlow DELTA 3 Classic refills in minutes and ships with a panel, which suits trips."
      }
    ],
    "note": "Most buyers should default to the UDPOWER S2400 unless they need a panel and fast refills."
  },
  {
    "subheading": "By Solar Plan",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Panel in the box",
          "EcoFlow DELTA 3 Classic"
        ],
        [
          "Bring your own panels",
          "UDPOWER S2400"
        ]
      ]
    }
  },
  {
    "subheading": "For RV Appliances Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A surge rating above start watts and enough Wh"
      },
      {
        "label": "In this comparison",
        "text": "The EcoFlow DELTA 3 Classic lists 3,600W surge, and the UDPOWER S2400 lists 2,083Wh with a 3,000W peak."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the UDPOWER S2400 for double the stored energy."
      },
      {
        "label": "Save if",
        "text": "Save with the EcoFlow DELTA 3 Classic if short bursts and a panel matter more."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "3000W is usually surge",
    "explanation": "A 3000W figure on a portable station is usually a brief peak for starting motors. Continuous output is what keeps a heater or microwave running. Check which number sits next to the word rated or continuous."
  },
  {
    "criterion": "Watt-hours behind the watts",
    "explanation": "A 2,083Wh battery runs a 2,000W load for about an hour. Divide watt-hours by load watts. Choose capacity by how long the big load will run."
  },
  {
    "criterion": "Air conditioners and compressors",
    "explanation": "An RV air conditioner can need two to three times its running watts to start. Check the unit's start watts against the surge rating. Use a soft starter if the unit trips."
  },
  {
    "criterion": "Charging speed",
    "explanation": "Fast AC charging refills a unit between trips, while solar input handles off-grid days. Compare 0 to 80 percent times and solar watts. Skip units whose listing shows only a full-charge time."
  },
  {
    "criterion": "Battery chemistry and cycles",
    "explanation": "LiFePO4 cells list thousands of cycles. A stated figure, such as over 4,000, shows lifespan. Look for cell type in the title or specs."
  }
];

export const faq = [
  {
    "q": "Is any pick a true 3000W generator?",
    "a": "No. Both list a 3,000W or higher surge, but continuous output is 2,400W for the UDPOWER S2400 and 1,800W for the EcoFlow DELTA 3 Classic."
  },
  {
    "q": "Can I run an RV air conditioner?",
    "a": "Possibly, depending on the unit's start watts and the station's surge. Check both numbers and ask the maker."
  },
  {
    "q": "Is a bigger unit worth it?",
    "a": "For long outages, yes, because more watt-hours means more hours of power. For weekend trips, the smaller EcoFlow DELTA 3 Classic is fine."
  },
  {
    "q": "How do I connect the panel?",
    "a": "Plug it into the solar input with the correct cable. Stay within the listed voltage limit, and angle the panel toward the sun."
  },
  {
    "q": "How do I look after it?",
    "a": "Store it at partial charge in a cool dry place. Recharge it every few months so the cells stay healthy."
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
