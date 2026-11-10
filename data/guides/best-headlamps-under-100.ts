export const guideSlug = "best-headlamps-under-100";
export const guideTitle = "5 Best Headlamps Under 100 in 2026";
export const metaTitle = "Best Headlamps Under 100 in 2026";
export const metaDescription = "Best headlamps under $100: five rechargeable, waterproof headlamps from a 1000-lumen aluminum SLONIK to IPX8 dive-grade lights, compared for camp use.";
export const mainKeyword = "best headlamps under 100";
export const introParagraphs = [
  "A headlamp budget of $100 is far more than camp tasks need, so the useful question is what the money buys beyond a basic lamp. Here it buys metal housings, sealed waterproofing, long runtimes and extra modes.",
  "Several of these lamps are built for diving, so they are judged here on how they work at a campsite: beam, runtime, headband comfort and weather sealing. The ordering favors lamps that make sense on a trail first."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/gear-lit-tent-night.webp";
export const heroImageAlt = "Tent lit from inside in the middle of a forest at night";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-headlamps-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "SLONIK Headlamp Rechargeable",
    "price": "$34.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51xyQZ62LGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07D27L1NR?tag=rvgearlab-amz-20",
    "description": "The SLONIK is a rechargeable headlamp rated at 1,000 lumens with a 60 foot beam, six brightness levels and three modes. It has an aero-grade aluminum body that is dustproof and IPX4 water resistant, and a lamp head that swivels up and down 90 degrees.\n\nIt is the only pick here built primarily as a trail and camp headlamp rather than a diving light. It detaches from the nylon headband to work as a hand flashlight, and the single-button control is easy in gloves.\n\nIt fits campers, hikers and anyone who wants a metal-bodied headlamp for night camp chores. The six levels let you save battery for late evenings.",
    "specs": [
      "1,000 lumens, 60 foot beam",
      "Aluminum body, IPX4, 90 degree tilt",
      "Detaches from headband"
    ],
    "pros": [
      "Six brightness levels and three modes",
      "Aluminum body is dustproof",
      "Lamp detaches as a hand flashlight",
      "Tilts 90 degrees"
    ],
    "cons": [
      "IPX4 handles splashes, not submersion",
      "Beam range is modest"
    ],
    "bestFor": "Camping and hiking",
    "take": "A proper trail headlamp with a metal body. It tilts and detaches for camp chores.",
    "catch": "IPX4 is rain-ready, not submersible."
  },
  {
    "id": "best-headlamps-under-100-2",
    "rank": 2,
    "badge": "Best Runtime",
    "name": "PRUBOVI Headlamp Rechargeable",
    "price": "$20.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41b+Hot26XL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CN4JWGRZ?tag=rvgearlab-amz-20",
    "description": "The PRUBOVI is a rechargeable headlamp with three lighting modes, a spotlight and floodlight adjustment switch and up to 40 hours of runtime on a low setting. An aerospace aluminum front housing adds durability.\n\nIt is the only pick in the group that can also charge a phone through USB at 5V 1A, which suits an emergency kit. Compared with the SLONIK it adds the flood and spot switch and a longer low-mode runtime.\n\nIt fits campers who take multi-night trips and want to charge a lamp rarely. The spotlight and flood switch handles both distance and close tasks.",
    "specs": [
      "Up to 40 hours on low",
      "Spot and flood switch",
      "Aluminum front, USB power-out"
    ],
    "pros": [
      "Up to 40 hours on low mode",
      "Spot and flood adjustment switch",
      "Can power a phone over USB",
      "Aluminum front housing"
    ],
    "cons": [
      "The 100,000 lumen label is not realistic",
      "Few other specs listed"
    ],
    "bestFor": "Multi-night trips",
    "take": "A long-runtime lamp with a spot and flood switch. Good for a week of camp.",
    "catch": "Ignore the headline lumen number and judge it by runtime."
  },
  {
    "id": "best-headlamps-under-100-3",
    "rank": 3,
    "badge": "Best Waterproof",
    "name": "Goldengulf Rechargeable Aluminum Waterproof Diving Swimming Hiking Camping Hunting Fishing Headlamp Underwater",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/6135ju01QiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075JF7HZ8?tag=rvgearlab-amz-20",
    "description": "The Goldengulf is an aluminum-alloy headlamp listed as waterproof up to 100 meters with an on-off switch. It ships with a rechargeable battery and charger, and the listing names diving, camping, hiking, hunting and fishing.\n\nIts sealed body is far more waterproof than the IPX4 SLONIK, so it suits wet camps and kayaking. It has a simple on-off design with no fiddly modes.\n\nIt fits paddlers, river campers and anyone who gets caught in storms. The included charger means it is ready to use out of the box.",
    "specs": [
      "Aluminum alloy, 100 meter waterproof",
      "Rechargeable battery and charger",
      "On-off switch"
    ],
    "pros": [
      "Waterproof up to 100 meters",
      "Aluminum alloy body",
      "Battery and charger included",
      "Simple on-off switch"
    ],
    "cons": [
      "Few details on brightness or runtime",
      "Dive-style, bulkier on a head"
    ],
    "bestFor": "Wet-weather camps and paddling",
    "take": "The most waterproof pick for the price. Great for rain and river trips.",
    "catch": "The listing gives few brightness details."
  },
  {
    "id": "best-headlamps-under-100-4",
    "rank": 4,
    "badge": "Best Bright Modes",
    "name": "GRABOYY Diving Headlamp",
    "price": "$39.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413DLPp9OCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09JNRN149?tag=rvgearlab-amz-20",
    "description": "The GRABOYY is an IPX8 rechargeable headlamp with a single-button switch for high, low and strobe modes. The switch flashes red when the battery is almost out, and the lamp lists applications for camping, fishing and hiking.\n\nIt adds a power indicator that the Goldengulf lacks and pairs it with IPX8 sealing. The three-mode switch is simple to use with cold hands.\n\nIt suits campers who want a battery warning and strong waterproofing. The three modes cover work, walking and signaling.",
    "specs": [
      "IPX8 waterproof, rechargeable",
      "High, low and strobe modes",
      "Red low-battery indicator"
    ],
    "pros": [
      "IPX8 waterproof sealing",
      "Red flash warns of low battery",
      "Three modes on one button",
      "Rechargeable battery with low warning"
    ],
    "cons": [
      "Diving-style housing is bulky",
      "Lumen claim is a marketing figure"
    ],
    "bestFor": "Wet climates",
    "take": "A sealed lamp with a battery warning. Good for stormy weekends.",
    "catch": "It is built for water first and trails second."
  },
  {
    "id": "best-headlamps-under-100-5",
    "rank": 5,
    "badge": "Best Rotation",
    "name": "Oreq LED Rechargeable Headlamp",
    "price": "$33.74",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41833R-0vaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B6JFCMGL?tag=rvgearlab-amz-20",
    "description": "The Oreq is a rechargeable headlamp listed at IPX8 up to 100 meters, with five modes (low, medium, high, SOS and flashing) and a head that rotates 180 degrees. It is made from aviation aluminum with a hard anodized shell.\n\nIt has the most modes and the widest tilt of the group, ahead of the GRABOYY's three modes. The listing names camping, swimming, hiking and fishing as uses.\n\nIt fits campers who want flexibility to point light exactly where they need it. The anodized shell stands up to sand and salt.",
    "specs": [
      "IPX8 up to 100 meters",
      "Five modes, 180 degree rotation",
      "Aviation aluminum shell"
    ],
    "pros": [
      "Five modes including SOS",
      "Rotates 180 degrees",
      "IPX8 waterproof",
      "Hard anodized aluminum shell"
    ],
    "cons": [
      "Built for diving, not trails",
      "Bright claim is a marketing figure"
    ],
    "bestFor": "Wet camping with tilt needs",
    "take": "The most adjustable of the sealed lamps. Good for tasks and signaling.",
    "catch": "Dive-style design is less compact on a trail."
  }
];

export const howWeEvaluated = [
  {
    "title": "Real brightness",
    "description": "Lumens and beam."
  },
  {
    "title": "Waterproof rating",
    "description": "IPX4 or IPX8."
  },
  {
    "title": "Runtime",
    "description": "Hours."
  },
  {
    "title": "Comfort",
    "description": "Headband and tilt."
  },
  {
    "title": "Charging",
    "description": "USB and battery."
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
    "subheading": "By Camp Condition",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Dry trails and hiking",
          "SLONIK 1000 Lumen",
          "Aluminum, 60 foot beam"
        ],
        [
          "Multi-night trips",
          "PRUBOVI Rechargeable",
          "40 hours on low"
        ],
        [
          "Rain and river camps",
          "Goldengulf Dive-Grade",
          "100 meter waterproof"
        ],
        [
          "Battery warnings",
          "GRABOYY IPX8",
          "Red low-battery flash"
        ],
        [
          "Adjustable tilt",
          "Oreq IPX8 5-Mode",
          "180 degree rotation"
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
          "$20 to $30",
          "PRUBOVI Rechargeable or Goldengulf Dive-Grade"
        ],
        [
          "$30 to $40",
          "Oreq IPX8 5-Mode or SLONIK 1000 Lumen"
        ],
        [
          "$30 to $40",
          "GRABOYY IPX8"
        ]
      ]
    }
  },
  {
    "subheading": "Trail Headlamp vs Dive-Grade Lamp",
    "cards": [
      {
        "label": "Trail Headlamp",
        "text": "Lighter, tilting and made for walking. SLONIK 1000 Lumen and PRUBOVI Rechargeable."
      },
      {
        "label": "Dive-Grade Lamp",
        "text": "Sealed to IPX8 or 100 meters, heavier on the head. Goldengulf Dive-Grade, GRABOYY IPX8 and Oreq IPX8 5-Mode."
      }
    ],
    "note": "Most campers should choose SLONIK 1000 Lumen unless the trip is wet."
  },
  {
    "subheading": "By Waterproofing Need",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Rain only",
          "SLONIK 1000 Lumen"
        ],
        [
          "Splash and rain, long runtime",
          "PRUBOVI Rechargeable"
        ],
        [
          "Kayaking",
          "Goldengulf Dive-Grade"
        ],
        [
          "Heavy rain and water play",
          "Oreq IPX8 5-Mode"
        ]
      ]
    }
  },
  {
    "subheading": "For Wet-Weather Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "An IPX8 or 100 meter rating, a sealed switch and a way to recharge."
      },
      {
        "label": "In this comparison",
        "text": "Goldengulf Dive-Grade and GRABOYY IPX8 both list serious waterproofing."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on SLONIK 1000 Lumen if you want a trail-ready headlamp with a metal body."
      },
      {
        "label": "Save if",
        "text": "Save with Goldengulf Dive-Grade if the plan is water first."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Treat lumen numbers with care",
    "explanation": "A headlamp that lists tens of thousands of lumens is using a marketing number, since small LEDs cannot deliver that. A 1,000 lumen lamp with a beam distance is more meaningful. Compare beam distance and runtime together."
  },
  {
    "criterion": "IPX4 versus IPX8",
    "explanation": "IPX4 resists splashes and rain, while IPX8 can be submerged. Camping rarely needs IPX8, but wet trips and kayaking benefit. Check the IP number in the listing."
  },
  {
    "criterion": "Runtime on each mode",
    "explanation": "Runtime on high is short, while low can last dozens of hours. A lamp that lists runtime for each mode is easier to plan with. Look for hours on high and low."
  },
  {
    "criterion": "Headband and tilt",
    "explanation": "A lamp that tilts lets you aim the beam down at your hands. A wide, adjustable band is more comfortable than a thin strap. Check tilt range and band material."
  },
  {
    "criterion": "Charging and power out",
    "explanation": "USB charging is convenient, and a lamp that can also charge a phone is a bonus. A lamp that needs a special cable is useless when you lose it. Check the port type and charge time."
  },
  {
    "criterion": "Diving-style lamps",
    "explanation": "Dive lamps have thick seals and heavy shells. They survive abuse but are bulkier on the head. Decide if you need the waterproofing."
  }
];

export const faq = [
  {
    "q": "Do I need an IPX8 headlamp for camping?",
    "a": "Not usually. IPX4 handles rain, but IPX8 helps on kayak trips or in storms."
  },
  {
    "q": "Are diving headlamps good for camping?",
    "a": "They work, but they are heavier on the head. Goldengulf Dive-Grade suits wet camps well."
  },
  {
    "q": "Is 1,000 lumens too bright for camp?",
    "a": "Most camp tasks need 100 to 300 lumens. SLONIK 1000 Lumen has six levels so you can dial it down."
  },
  {
    "q": "How should I charge a rechargeable headlamp?",
    "a": "Charge it before each trip and top it up every few months. PRUBOVI Rechargeable charges by USB."
  },
  {
    "q": "Why does my headlamp lose brightness fast?",
    "a": "Brightness drops as the battery drains. Use low mode when possible."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Towels",
    "href": "/campsite-gear/best-camping-towels"
  },
  {
    "title": "Best Dry Bags",
    "href": "/campsite-gear/best-dry-bags"
  },
  {
    "title": "Best Camping Lanterns And Camping Lights",
    "href": "/campsite-gear/best-camping-lanterns-and-camping-lights"
  },
  {
    "title": "Best Headlamps",
    "href": "/campsite-gear/best-headlamps"
  }
];
