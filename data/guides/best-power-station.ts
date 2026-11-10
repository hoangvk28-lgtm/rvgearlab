export const guideSlug = "best-power-station";
export const guideTitle = "6 Best Power Station in 2026";
export const metaTitle = "Best Power Station in 2026";
export const metaDescription = "Portable power stations compared for camping: 128Wh to 1,024Wh LiFePO4 and lithium models for phones, lights, fridges and CPAP at the campsite.";
export const mainKeyword = "best power station";
export const introParagraphs = [
  "A portable power station is a big battery with outlets, and it runs everything from phone chargers to a small fridge or CPAP at camp. Capacity in watt-hours tells you how long it lasts, and output in watts tells you what it can run.",
  "At RV Gear Lab, we compared six stations from 128Wh to 1,024Wh by capacity, output, weight and battery chemistry. Pick by the devices you plan to run, not the biggest number on the box."
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
    "id": "best-power-station-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Anker SOLIX C1000 Gen 2 Portable Power Station",
    "price": "$499.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41LPWKTY8CL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FN7MSY4L?tag=rvgearlab-20",
    "description": "Anker SOLIX C1000 Gen 2 has 1,024Wh of capacity and delivers 2,000W (3,000W peak) through 10 ports. HyperFlash recharging reaches a full charge in 49 minutes at 1,600W.\n\nIt has more than three times the capacity of the 288Wh and 292Wh stations here, so it can run a small fridge or a heater overnight. The fast recharge turns a short stop at home into a full battery.\n\nCar campers and RV travelers who want real power will like the capacity and 10 ports. It also sits quietly at home as an outage backup.",
    "specs": [
      "1,024Wh, 2,000W output",
      "10 ports, 3,000W peak",
      "49 minute recharge"
    ],
    "pros": [
      "Big 1,024Wh capacity",
      "2,000W output",
      "49 minute full recharge",
      "Ten ports for many devices"
    ],
    "cons": [
      "Highest price here",
      "Heavy to carry far"
    ],
    "bestFor": "Fridges and CPAP",
    "take": "The one to buy if you want a real power source at camp.",
    "catch": "Not a station to carry on a hike."
  },
  {
    "id": "best-power-station-2",
    "rank": 2,
    "badge": "Best Lightweight Classic",
    "name": "Jackery Explorer 300 Portable Power Station",
    "price": "$259.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-Ey75o-WL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082TMBYR6?tag=rvgearlab-20",
    "description": "Jackery Explorer 300 has 292Wh of capacity, weighs 7.5 lbs and has two AC outlets, a 100W USB-C PD port, two USB-A ports and a 120W car port. It uses LiFePO4 chemistry rated for over 4,000 charge cycles.\n\nThe LiFePO4 cells give it a long lifespan, which the cheaper 192Wh DaranEner also offers at lower capacity. It powers six devices at once.\n\nWeekend campers who run phones, lights and a laptop will like the size and the cycle life. It slips into a trunk next to the cooler.",
    "specs": [
      "292Wh LiFePO4 battery",
      "7.5 lbs, 6 outputs",
      "100W USB-C PD port"
    ],
    "pros": [
      "Over 4,000 cycle life",
      "Light at 7.5 pounds",
      "Two AC outlets",
      "100W USB-C port"
    ],
    "cons": [
      "High price for 292Wh",
      "Too small for appliances"
    ],
    "bestFor": "Weekend camping",
    "take": "A light, long-lived station for small devices.",
    "catch": "Costs more per watt-hour."
  },
  {
    "id": "best-power-station-3",
    "rank": 3,
    "badge": "Best Mid-Power Portable",
    "name": "BLUETTI Elite 30 V2 Portable Power Station 288Wh 600W LFP Solar Generator",
    "price": "$249.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YTEqBbTsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F42HLLSC?tag=rvgearlab-20",
    "description": "BLUETTI Elite 30 V2 has 288Wh of LFP capacity, 600W continuous output and 1,500W surge power in a 9.4 lb body. UltraCell technology and smart cooling cut power consumption by 50%.\n\nThe 600W output is double what the listing says others offer, so it can run a small cooker or heater that the Jackery cannot. It stays portable at 9.4 lbs.\n\nCampers who need to run a few higher-draw gadgets will like the output. The surge rating helps with devices that kick on hard.",
    "specs": [
      "288Wh LFP, 600W output",
      "1,500W surge",
      "9.4 lbs"
    ],
    "pros": [
      "600W continuous output",
      "1,500W surge power",
      "LFP battery chemistry",
      "Smart cooling"
    ],
    "cons": [
      "Costs about the same as Jackery 300",
      "Slightly heavier"
    ],
    "bestFor": "Higher-draw gadgets",
    "take": "A portable station with real output.",
    "catch": "Capacity is small for the watts."
  },
  {
    "id": "best-power-station-4",
    "rank": 4,
    "badge": "Best Mid-Capacity Value",
    "name": "Portable Power Station 500W",
    "price": "$179.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hnRsSVogL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B9H8W8HP?tag=rvgearlab-20",
    "description": "GRECELL is a 500W pure sine wave station with 519.48Wh capacity and up to 10 simultaneous devices. It offers USB-C PD 60W and USB-A QC 18W fast charging.\n\nIt has nearly double the capacity of the 288Wh BLUETTI at a lower price. It is the best amount of storage per dollar here.\n\nCampers on a budget who want more hours of power will like it. Charge it before the trip and run lights and fans all weekend.",
    "specs": [
      "519.48Wh, 500W pure sine",
      "10 simultaneous devices",
      "60W USB-C PD"
    ],
    "pros": [
      "Large 519Wh capacity",
      "Pure sine wave output",
      "10 device outputs",
      "Low price for capacity"
    ],
    "cons": [
      "Heavier than small stations",
      "Lower output than Bluetti"
    ],
    "bestFor": "Budget capacity",
    "take": "The most watt-hours for the money.",
    "catch": "Battery chemistry is not named on the listing."
  },
  {
    "id": "best-power-station-5",
    "rank": 5,
    "badge": "Best Budget LiFePO4",
    "name": "DaranEner Portable Power Station",
    "price": "$109.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41cRxC-B-dL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C6K5ZPNJ?tag=rvgearlab-20",
    "description": "DaranEner is a 192Wh LiFePO4 station with 300W output (600W surge) and pure sine wave AC. It lists over 3,500 cycles and recharges by AC wall (up to 100W), car charger or solar.\n\nLiFePO4 at this price is unusual, and it costs less than the Jackery and Bluetti with a similar cycle life. It is small enough to carry anywhere.\n\nBudget buyers who want a long-lived battery will like it. It handles lights and chargers without drama.",
    "specs": [
      "192Wh LiFePO4, 300W",
      "600W surge, pure sine",
      "3,500+ cycles"
    ],
    "pros": [
      "LiFePO4 for long life",
      "Pure sine wave AC",
      "Recharges by wall, car or solar",
      "Low price"
    ],
    "cons": [
      "Small capacity",
      "Slow 100W wall charging"
    ],
    "bestFor": "Phones and lights",
    "take": "A cheap, long-lived mini station.",
    "catch": "Not for fridges."
  },
  {
    "id": "best-power-station-6",
    "rank": 6,
    "badge": "Best Airline-Friendly Mini",
    "name": "BLUETTI Elite 10 Mini Portable Power Station",
    "price": "$113.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31VvYAA+NUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FS6429MD?tag=rvgearlab-20",
    "description": "BLUETTI Elite 10 Mini is a 128Wh station that weighs 4.0 lbs and is palm-sized with an ergonomic handle. It has a built-in 10ms UPS and 350W bypass output.\n\nIt is the smallest and lightest here, and the listing calls it airline friendly. It replaces about four standard power banks.\n\nHikers and flyers who want a bigger bank for phones and cameras will like it. It rides in a backpack without a second thought.",
    "specs": [
      "128Wh, 200W output",
      "4.0 lbs, palm-sized",
      "10ms UPS, 350W bypass"
    ],
    "pros": [
      "Only 4.0 pounds",
      "Airline-friendly size",
      "UPS backup function",
      "Cheapest here"
    ],
    "cons": [
      "Smallest capacity",
      "200W output limit"
    ],
    "bestFor": "Hikers and travelers",
    "take": "The smallest, lightest station here.",
    "catch": "Runs only small gear."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity in watt-hours",
    "description": "Compared Wh across stations."
  },
  {
    "title": "Output in watts",
    "description": "Looked at continuous and surge output."
  },
  {
    "title": "Battery chemistry",
    "description": "Considered LiFePO4 versus standard lithium."
  },
  {
    "title": "Weight",
    "description": "Compared carry weight."
  },
  {
    "title": "Ports and charging",
    "description": "Looked at ports and recharge speeds."
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
    "subheading": "By Power Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Fridge or CPAP",
          "Anker SOLIX C1000 Gen 2",
          "1,024Wh."
        ],
        [
          "Phones and laptop",
          "Jackery Explorer 300",
          "Light, 292Wh."
        ],
        [
          "Higher-draw gadgets",
          "BLUETTI Elite 30 V2",
          "600W."
        ],
        [
          "Best capacity per dollar",
          "GRECELL 500W",
          "519Wh."
        ],
        [
          "Phones only",
          "BLUETTI Elite 10 Mini",
          "4.0 lbs."
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
          "$100 to $120",
          "DaranEner 192Wh or BLUETTI Elite 10 Mini"
        ],
        [
          "$170 to $250",
          "GRECELL 500W or BLUETTI Elite 30 V2"
        ],
        [
          "$250 to $500",
          "Jackery Explorer 300 or Anker SOLIX C1000 Gen 2"
        ]
      ]
    }
  },
  {
    "subheading": "Big Station vs Mini Station",
    "cards": [
      {
        "label": "Big station",
        "text": "Runs fridges and heaters but weighs more. Anker SOLIX C1000 Gen 2 and GRECELL 500W are the larger picks."
      },
      {
        "label": "Mini station",
        "text": "Carries anywhere and runs small gear. Jackery Explorer 300, BLUETTI Elite 30 V2, DaranEner 192Wh and BLUETTI Elite 10 Mini are the smaller picks."
      }
    ],
    "note": "Most campers should default to Jackery Explorer 300 unless they need a fridge."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "If you want",
        "Recommended pick"
      ],
      "rows": [
        [
          "Fast recharge",
          "Anker SOLIX C1000 Gen 2"
        ],
        [
          "Lowest price",
          "BLUETTI Elite 10 Mini"
        ],
        [
          "LiFePO4 on a budget",
          "DaranEner 192Wh"
        ]
      ]
    }
  },
  {
    "subheading": "For Car Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "At least 300Wh and AC outlets."
      },
      {
        "label": "In this comparison",
        "text": "Jackery Explorer 300 lists two AC outlets and a car port."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Anker SOLIX C1000 Gen 2 for fridges."
      },
      {
        "label": "Save if",
        "text": "Save with DaranEner 192Wh."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Capacity in watt-hours",
    "explanation": "Watt-hours tell you how much energy the battery holds, so 128Wh runs phones for days while 1,024Wh can run a small fridge overnight. Divide the Wh by your device's watts for a rough runtime. Check the Wh figure on the listing and expect somewhat less in real use."
  },
  {
    "criterion": "Output in watts",
    "explanation": "Output is the most a station can supply at once, and a 300W station cannot run a 1,000W heater. Add up the devices you will use together before choosing. Check both continuous and surge watts on the listing."
  },
  {
    "criterion": "Battery chemistry",
    "explanation": "LiFePO4 batteries often list 3,500 to 4,000 charge cycles, far more than older lithium types. That matters if you plan to use the station for many seasons. Look for LiFePO4 or LFP in the product title."
  },
  {
    "criterion": "Weight and carrying",
    "explanation": "A 4 pound station fits a daypack, while a 1,000Wh station needs a firm grip and a trunk. Heavier stations usually hold more power. Check the listed weight and handle design."
  },
  {
    "criterion": "Charging options",
    "explanation": "Wall, car and solar input all help, and a faster AC recharge shortens downtime. Solar input watts limit how fast panels can refill it. Check the input watts and the charge methods named on the product page."
  }
];

export const faq = [
  {
    "q": "How many watt-hours do I need for camping?",
    "a": "About 200 to 300Wh covers phones, lights and a laptop for a weekend. A small fridge or CPAP wants closer to 1,000Wh. Add up your devices before choosing."
  },
  {
    "q": "What does LiFePO4 mean?",
    "a": "It is a lithium iron phosphate battery chemistry known for long life, often 3,500 or more cycles. Jackery Explorer 300 and DaranEner 192Wh list it. It tends to be safer and heavier."
  },
  {
    "q": "Can I run a fridge on a power station?",
    "a": "A small 12V or compact fridge can run on a larger station like Anker SOLIX C1000 Gen 2 for many hours. Smaller stations will drain quickly. Check the fridge's watts first."
  },
  {
    "q": "How do I recharge a power station at camp?",
    "a": "Use a car charger while driving, a wall outlet before you leave or solar panels at camp. Panels recharge slowly in clouds. Plan extra time."
  },
  {
    "q": "Can I take a power station on a plane?",
    "a": "Airlines limit lithium batteries, often to around 100Wh in carry-on bags. A 128Wh station may exceed that. Check airline rules before you fly."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Portable Solar Panels",
    "href": "/camp-power/best-portable-solar-panels"
  },
  {
    "title": "Best Solar Power Bank",
    "href": "/camp-power/best-solar-power-bank"
  },
  {
    "title": "Best Portable Solar Panels For Home",
    "href": "/camp-power/best-portable-solar-panels-for-home"
  },
  {
    "title": "Best Power Station Under 100",
    "href": "/camp-power/best-power-station-under-100"
  }
];
