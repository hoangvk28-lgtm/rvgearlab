export const guideSlug = "best-5000w-solar-generators";
export const guideTitle = "3 Best 5000w Solar Generators in 2026";
export const metaTitle = "Best 5000w Solar Generators in 2026";
export const metaDescription = "Best 5000W solar generators compared on rated versus peak watts, capacity and charging for whole-home backup, RVs and cabins.";
export const mainKeyword = "best 5000w solar generators";
export const introParagraphs = [
  "A 5000W solar generator can mean 5,000W of continuous output, a 5,000W peak or a 5,000Wh battery. Only careful reading of each listing tells you which, and the answer changes what the unit can run.",
  "Three models stand in for the 5000W search. Only one lists more than 5,000W continuous output, and the others use 5,000 as a capacity or surge figure."
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
    "id": "best-5000w-solar-generators-1",
    "rank": 1,
    "badge": "Best Rated 5000W+",
    "name": "Jackery Solar Generator 5000 Plus and 2x200W Panels",
    "price": "$3729.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41k-qip9YhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWM1V7P6?tag=rvgearlab-20",
    "description": "The Jackery Solar Generator 5000 Plus lists 7,200W rated output, 14,400W surge, 5,040Wh and support for both 120V and 240V. It includes two 200W panels, accepts up to 4,000W of solar, expands to 60kWh and pairs with a 60A Smart Transfer Switch.\n\nIts rated output tops 5,000W, which no other pick manages, and its surge is far above the ALLPOWERS R2500 V2. Its panels are an advantage over the EcoVolt P5000 Plus, which lists none.\n\nA whole house with a well pump or a dryer is the use this unit is built to serve. The 13 day backup claim is for essential loads.",
    "specs": [
      "7,200W rated, 14,400W surge",
      "5,040Wh, expands to 60kWh",
      "2 x 200W panels, 120V/240V"
    ],
    "pros": [
      "Only rated output above 5,000W",
      "Panels included in the kit",
      "240V and a transfer switch option",
      "Expands to 60kWh"
    ],
    "cons": [
      "Highest price of the three",
      "Not a portable camp unit"
    ],
    "bestFor": "Whole-home 5000W-plus",
    "take": "The only genuine 5000W-class machine here. Good for a house.",
    "catch": "Its price and size suit a fixed home setup."
  },
  {
    "id": "best-5000w-solar-generators-2",
    "rank": 2,
    "badge": "Best 5,120Wh Value",
    "name": "P5000 Plus 5120Wh Portable Power Station",
    "price": "$1499.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OkvDQjtIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GTCZLRWY?tag=rvgearlab-20",
    "description": "The EcoVolt P5000 Plus stores 5,120Wh in automotive-grade LiFePO4 cells with a 3,600W pure sine wave inverter, a 20-year lifespan claim and an EPS switchover under 0.01 seconds. AC charging is 1,800W, with 1,000W of solar input and a 0 to 100 percent charge in 2.2 hours.\n\nIt holds slightly more energy than the Jackery 5000 Plus at less than half the price, and rates 3,600W continuous. It lists five AC outlets and 15 ports.\n\nIt suits cabin and home-backup buyers who want 5,000Wh of storage at a lower price. The long runtime suits fridges and lights for days.",
    "specs": [
      "5,120Wh LiFePO4, 3,600W",
      "2.2 hour full recharge",
      "Five AC outlets, EPS"
    ],
    "pros": [
      "Biggest battery at 5,120Wh",
      "Lower price than the Jackery",
      "1,800W AC and 1,000W solar input",
      "EPS under 0.01 seconds"
    ],
    "cons": [
      "3,600W rated is below 5,000W",
      "No panels included"
    ],
    "bestFor": "5kWh storage on a budget",
    "take": "The value pick for stored energy. It is a battery first and a power unit second.",
    "catch": "Its output limit rules out the biggest appliances."
  },
  {
    "id": "best-5000w-solar-generators-3",
    "rank": 3,
    "badge": "Best 5000W Peak",
    "name": "ALLPOWERS R2500 V2 Portable Power Station 2500W",
    "price": "$799.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41qvIqkSgSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F313G9PV?tag=rvgearlab-20",
    "description": "The ALLPOWERS R2500 V2 lists 2,500W continuous with a 5,000W peak from a 1,920Wh LiFePO4 battery. It charges to 80 percent in 1 hour and fully in 1.3 hours, has 4 AC outlets, 13 ports in all and a UPS under 15ms.\n\nIt is the lowest in cost and the smallest in capacity, with a 5,000W figure that is a peak only. Next to the EcoVolt P5000 Plus it charges fast and stores far less.\n\nIt suits renters and RV owners who want a 5,000W surge to start motors. The 100W USB-C ports charge laptops quickly.",
    "specs": [
      "1,920Wh LiFePO4, 2,500W",
      "5,000W peak, 15ms UPS",
      "80% in 1 hour"
    ],
    "pros": [
      "Fast 1.3 hour full charge",
      "5,000W peak for motor starts",
      "Two 100W USB-C ports",
      "Lowest price of the three"
    ],
    "cons": [
      "5,000W is a peak, not continuous",
      "Smallest battery of the three"
    ],
    "bestFor": "Peak power on a budget",
    "take": "A small, fast unit with a big surge. Plan on 2,500W continuous.",
    "catch": "Capacity is under 2kWh, so heavy loads drain it quickly."
  }
];

export const howWeEvaluated = [
  {
    "title": "What 5000 means",
    "description": "Separated 5,000W continuous output, 5,000W peak and 5,000Wh capacity on each listing."
  },
  {
    "title": "Capacity",
    "description": "Compared stated watt-hours."
  },
  {
    "title": "Charging",
    "description": "Looked at AC and solar input and recharge times."
  },
  {
    "title": "Backup features",
    "description": "Noted UPS or EPS switchover and 120V/240V support."
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
    "subheading": "By Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Whole-home loads above 5,000W",
          "Jackery 5000 Plus",
          "7,200W rated"
        ],
        [
          "5kWh storage for fridges and lights",
          "EcoVolt P5000 Plus",
          "5,120Wh"
        ],
        [
          "Motor starts and fast refills",
          "ALLPOWERS R2500 V2",
          "5,000W peak, 1.3 hour charge"
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
          "$790 to $800",
          "ALLPOWERS R2500 V2"
        ],
        [
          "$1490 to $1500",
          "EcoVolt P5000 Plus"
        ],
        [
          "$3720 to $3730",
          "Jackery 5000 Plus"
        ]
      ]
    }
  },
  {
    "subheading": "Output vs storage",
    "cards": [
      {
        "label": "Output",
        "text": "The Jackery 5000 Plus runs big appliances, but costs the most."
      },
      {
        "label": "Storage",
        "text": "The EcoVolt P5000 Plus holds more energy at a lower price but caps at 3,600W."
      }
    ],
    "note": "Most buyers should default to the EcoVolt P5000 Plus unless they need 240V or more than 3,600W."
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
          "Largest spend",
          "Jackery 5000 Plus"
        ],
        [
          "Mid spend",
          "EcoVolt P5000 Plus"
        ],
        [
          "Lowest spend",
          "ALLPOWERS R2500 V2"
        ]
      ]
    }
  },
  {
    "subheading": "For Home Backup Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated UPS switchover and enough Wh"
      },
      {
        "label": "In this comparison",
        "text": "The EcoVolt P5000 Plus lists an EPS under 0.01 seconds, and the Jackery 5000 Plus names a transfer switch."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Jackery 5000 Plus for 240V and 7,200W."
      },
      {
        "label": "Save if",
        "text": "Save with the ALLPOWERS R2500 V2 if surge matters more than capacity."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watts versus watt-hours",
    "explanation": "Watts measure how much a unit can supply at once, while watt-hours measure how long it can supply it. A 5,120Wh battery with 3,600W output runs a 3,600W load for about an hour. Read both numbers on every listing."
  },
  {
    "criterion": "Peak versus continuous",
    "explanation": "A peak rating covers a brief startup spike, while continuous is what holds up. The ALLPOWERS R2500 V2 lists 5,000W peak but 2,500W continuous. Look for the word rated."
  },
  {
    "criterion": "240V output",
    "explanation": "Big appliances such as well pumps use 240V. Check that the listing says 120V and 240V, as the Jackery 5000 Plus does. Skip it if all your loads are 120V."
  },
  {
    "criterion": "Solar input",
    "explanation": "Maximum solar input in watts sets the fastest refill. A 1,000W input is enough for a long day, and 4,000W is faster. Match panel voltage to the station."
  },
  {
    "criterion": "Transfer switch",
    "explanation": "A house panel can only be fed through an approved transfer switch or inlet, never through a normal outlet. This protects both the grid workers and your equipment. Ask the maker for the right accessory and use an electrician."
  }
];

export const faq = [
  {
    "q": "Is any pick a true 5000W continuous unit?",
    "a": "Only the Jackery 5000 Plus lists more than 5,000W rated output, at 7,200W. The EcoVolt P5000 Plus rates 3,600W and the ALLPOWERS R2500 V2 rates 2,500W continuous."
  },
  {
    "q": "Can I run a house?",
    "a": "With a transfer switch and proper wiring, the Jackery 5000 Plus is built for it. The others cover essentials only."
  },
  {
    "q": "Is 5,120Wh worth it over 1,920Wh?",
    "a": "For multi-day backup, yes, since stored energy sets the run time. For short outages, the ALLPOWERS R2500 V2 is enough."
  },
  {
    "q": "How do I connect panels?",
    "a": "Plug them into the solar input with the right cable. Stay within the listed voltage limit, and keep panels clean."
  },
  {
    "q": "How do I store them?",
    "a": "Keep them at partial charge in a cool dry place. Top them up every few months."
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
