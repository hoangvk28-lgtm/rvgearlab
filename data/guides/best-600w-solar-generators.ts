export const guideSlug = "best-600w-solar-generators";
export const guideTitle = "3 Best 600w Solar Generators in 2026";
export const metaTitle = "Best 600w Solar Generators in 2026";
export const metaDescription = "Best 600W solar generators compared on continuous output, LiFePO4 capacity, included panel wattage and recharge speed for camping and short outages.";
export const mainKeyword = "best 600w solar generators";
export const introParagraphs = [
  "A 600W solar generator sits one step above the phone-and-laptop class: it can run a fan, a car fridge or a small TV alongside the electronics. The catch is that panels are small and battery sizes range from 288Wh to 640Wh.",
  "Three LiFePO4 stations earned a place. Two ship with a foldable panel, and one is a bare station for those who already own solar, so panel wattage and battery size drive the order."
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
    "id": "best-600w-solar-generators-1",
    "rank": 1,
    "badge": "Best Overall 600W Kit",
    "name": "DaranEner 600W 576Wh Portable Power Station with 100W Foldable Solar Panel",
    "price": "$379.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413q6loDz0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G3WRF3KM?tag=rvgearlab-20",
    "description": "The DaranEner kit lists a 576Wh LiFePO4 battery with 600W continuous output and 1,200W peak, bundled with a 100W foldable monocrystalline panel rated at 25 percent efficiency. It recharges fully in 1.1 hours from 550W AC and has 7 ports with two fast USB-C charging ports, a car socket and a built-in UPS.\n\nIt stores double the 288Wh of the Daran 80W kit and ships with a bigger panel than that kit. Its single AC outlet is the trade for that size, where the other two give more outlets.\n\nThis kit is for campers wanting the most solar input and battery in the 600W class. Cells are rated for 3,500-plus cycles.",
    "specs": [
      "576Wh LiFePO4, 600W, 1,200W peak",
      "100W foldable panel included",
      "1.1 hour AC recharge"
    ],
    "pros": [
      "Largest panel and battery of the three",
      "Full AC recharge in 1.1 hours",
      "Two 100W USB-C PD ports",
      "3,500+ cycle LiFePO4 cells"
    ],
    "cons": [
      "Just one AC outlet",
      "Costs more than the LIBRIDS"
    ],
    "bestFor": "A complete 600W solar kit",
    "take": "The best-equipped kit here. Choose it if you want solar and capacity together.",
    "catch": "A single AC outlet limits how many AC devices you can plug in."
  },
  {
    "id": "best-600w-solar-generators-2",
    "rank": 2,
    "badge": "Best Value Station",
    "name": "LIBRIDS Portable Power Station C600",
    "price": "$239.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RxbMjWhZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H9RWG765?tag=rvgearlab-20",
    "description": "The LIBRIDS C600 packs 640Wh of automotive-grade LiFePO4 with 600W rated AC output, up to 1,200W surge, 4 AC outlets and a 10ms UPS. It recharges in about 1.5 hours and accepts a solar panel through an XT60 port, a car port or a gas generator.\n\nIt holds more energy than either Daran kit and costs the least, with four AC outlets where the 576Wh kit has one. It ships without a solar panel, so panels are an added cost.\n\nIt suits home backup and camping buyers who already own panels or plan to buy their own. The 4,000-plus cycle rating suits regular use.",
    "specs": [
      "640Wh LiFePO4, 600W, 1,200W surge",
      "4 AC outlets, 10ms UPS",
      "XT60 solar input, 1.5 hour charge"
    ],
    "pros": [
      "Biggest battery of the three",
      "Four AC outlets and 8 ports",
      "10ms UPS switchover",
      "Lowest price of the three"
    ],
    "cons": [
      "No solar panel in the box",
      "600W cannot run kettles or heaters"
    ],
    "bestFor": "Capacity and outlets on a budget",
    "take": "The value pick if you bring panels. It stores the most and costs the least.",
    "catch": "The listing includes no panel, so budget for one."
  },
  {
    "id": "best-600w-solar-generators-3",
    "rank": 3,
    "badge": "Best Compact Kit",
    "name": "Daran Portable Power Station 600W with 80W Solar Panel",
    "price": "$373.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/517QK0tC86L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G6352TK4?tag=rvgearlab-20",
    "description": "The Daran kit combines a 288Wh LiFePO4 battery with an 80W solar panel, delivering 600W continuous with 1,200W surge across 2 AC outlets, USB-C at up to 100W, extra USB ports and a 120W car outlet. It recharges to 80 percent in about 2 hours on 120W AC and to full in 4 to 5 hours on the panel.\n\nIt is the smallest battery of the three, at half the 576Wh kit, yet it is the only one of the trio whose listing names a 60W car refrigerator as a load. The LIBRIDS C600 offers more storage for less money.\n\nIt suits car campers and short trips who want the lightest setup with a panel in the box. The 3,500-plus cycle cells rate it for ten years of regular use.",
    "specs": [
      "288Wh LiFePO4, 600W, 1,200W surge",
      "80W solar panel included",
      "2 AC outlets, 100W USB-C PD"
    ],
    "pros": [
      "80W solar panel included",
      "Two AC outlets and several USB ports",
      "3,500+ cycle LiFePO4 cells",
      "Runs a 60W car fridge"
    ],
    "cons": [
      "Smallest battery of the three",
      "Priced above the LIBRIDS with less storage"
    ],
    "bestFor": "Short trips with a panel",
    "take": "A compact kit that puts a panel in the box. Choose it for weekends away.",
    "catch": "At 288Wh, a 600W load lasts well under half an hour."
  }
];

export const howWeEvaluated = [
  {
    "title": "Continuous output",
    "description": "Compared stated continuous watts and surge for each station."
  },
  {
    "title": "Battery size and chemistry",
    "description": "Noted watt-hours and LiFePO4 claims with cycle ratings."
  },
  {
    "title": "Solar panel",
    "description": "Checked included panel wattage and solar input ports."
  },
  {
    "title": "Charge speed and ports",
    "description": "Compared AC recharge times and outlet counts."
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
          "Week of camping with solar",
          "DaranEner 576Wh Kit",
          "576Wh and a 100W panel"
        ],
        [
          "Home backup with own panels",
          "LIBRIDS C600",
          "640Wh, four outlets, UPS"
        ],
        [
          "Weekend car camping",
          "Daran 80W Kit",
          "Compact with an 80W panel"
        ],
        [
          "Running two AC devices at once",
          "LIBRIDS C600",
          "Four AC outlets"
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
          "$370 to $380",
          "Daran 80W Kit"
        ],
        [
          "$370 to $380",
          "DaranEner 576Wh Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Kit with panel vs bare station",
    "cards": [
      {
        "label": "Kit with panel",
        "text": "The DaranEner 576Wh Kit and Daran 80W Kit ship with a foldable panel, so you can charge at camp on day one."
      },
      {
        "label": "Bare station",
        "text": "The LIBRIDS C600 costs less and stores more, but you must buy panels separately."
      }
    ],
    "note": "Most buyers should default to the DaranEner 576Wh Kit unless they already own solar panels."
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
          "Lowest price",
          "LIBRIDS C600"
        ],
        [
          "Mid price with panel",
          "Daran 80W Kit"
        ],
        [
          "Highest price, most gear",
          "DaranEner 576Wh Kit"
        ]
      ]
    }
  },
  {
    "subheading": "For Short Home Outages Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A UPS switchover and enough Wh for a router and lights"
      },
      {
        "label": "In this comparison",
        "text": "The DaranEner 576Wh Kit lists a built-in UPS, and the LIBRIDS C600 lists a 10ms UPS with 640Wh."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the DaranEner 576Wh Kit for the largest panel and fastest AC recharge."
      },
      {
        "label": "Save if",
        "text": "Save with the LIBRIDS C600 if you already own panels, or the Daran 80W Kit for a lighter weekend setup."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 600W runs",
    "explanation": "A 600W rating covers a fan, a laptop, a car fridge and phone chargers, but not a kettle or heater. Add the watts of everything you plan to run at once. Check the AC outlet rating on the listing, not just the headline number."
  },
  {
    "criterion": "Watt-hours decide runtime",
    "explanation": "A 576Wh battery runs a 100W load for roughly five hours before losses, and a 288Wh battery for half that. Divide watt-hours by load watts. Listings that show only mAh need converting at the battery voltage."
  },
  {
    "criterion": "Panel wattage and charging time",
    "explanation": "An 80W panel adds at most 80Wh per hour in perfect sun, so refilling 288Wh takes four to five hours on the listing's own estimate. A 100W panel is faster. Check the panel's watts and the solar input limit."
  },
  {
    "criterion": "LiFePO4 and cycle life",
    "explanation": "LiFePO4 cells last thousands of cycles and resist heat better than standard lithium-ion. A stated 3,500 or 4,000 cycle rating shows the lifespan. Look for LiFePO4 and a cycle figure in the title or bullets."
  },
  {
    "criterion": "Outlets and UPS",
    "explanation": "Several AC outlets let you run devices without a power strip, and a UPS switch keeps a router alive in an outage. Count the AC outlets and look for a millisecond figure. A single outlet works for one appliance."
  }
];

export const faq = [
  {
    "q": "Can a 600W unit run a space heater?",
    "a": "No. Most space heaters draw 1,500W, far above a 600W rating. The 1,200W surge figures only help a motor start for a moment."
  },
  {
    "q": "Is the included panel enough?",
    "a": "It tops up slowly. A 100W panel in good sun can add up to 100Wh per hour, so a 576Wh battery needs most of a day."
  },
  {
    "q": "Is a kit worth it over a bare station?",
    "a": "Yes if you do not own panels, since the DaranEner 576Wh Kit and Daran 80W Kit work out of the box. If you do own panels, the LIBRIDS C600 gives more storage for less."
  },
  {
    "q": "How do I use the UPS function?",
    "a": "Plug the router or computer into the station and keep the station plugged into the wall. When the power drops, it switches over in about 10ms."
  },
  {
    "q": "How do I store the battery?",
    "a": "Keep it at partial charge in a cool dry place. Top it up every few months so the cells stay balanced."
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
