export const guideSlug = "best-rechargeable-headlamps-for-hiking";
export const guideTitle = "6 Best Rechargeable Headlamps For Hiking in 2026";
export const metaTitle = "Best Rechargeable Headlamps For Hiking in 2026";
export const metaDescription = "Best rechargeable headlamps for hiking compared on weight, battery, water rating and brightness modes, from Black Diamond to budget two-packs.";
export const mainKeyword = "best rechargeable headlamps for hiking";
export const introParagraphs = [
  "Hikers need a rechargeable headlamp that is light on the head, bright enough for the trail and tough in rain. Black Diamond makes the premium pair here, while sofirn, Curtsod, Staaricc and Lepro cover lower price points.",
  "Six rechargeable headlamps are compared. Where a title claims 99,000 lumens, the write-up leans on mode lists, battery and water rating instead, since those are the useful figures for a hike."
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
    "id": "best-rechargeable-headlamps-for-hiking-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "BLACK DIAMOND Storm 500-R Headlamp",
    "price": "$73.88",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/3182M7LqPnL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GT6LRNP7?tag=rvgearlab-amz-20",
    "description": "The Black Diamond Storm 500-R produces up to 500 lumens from an integrated 2,400mAh lithium-ion battery charged over micro-USB. Modes include full strength, dimming, strobe and red night vision, and the housing withstands heavy rain and snow.\n\nIt has the biggest battery of the Black Diamond pair and more output than the Spot 400-R. Proximity and distance settings suit camp tasks and trail.\n\nIt suits hikers and climbers who want a rugged, trusted lamp in harsh weather. The low-profile fit stays stable on active pursuits.",
    "specs": [
      "500 lumens, 2,400mAh Li-ion",
      "Dimming, strobe, red modes",
      "Rain and snow proof, micro-USB"
    ],
    "pros": [
      "500 lumens with dimming",
      "2,400mAh battery",
      "Red night-vision mode",
      "Rugged waterproof housing"
    ],
    "cons": [
      "Highest price of the six",
      "Charges by micro-USB, not USB-C"
    ],
    "bestFor": "Harsh-weather hiking",
    "take": "The premium rugged lamp for hard weather and long days.",
    "catch": "Micro-USB cables are older and easy to damage."
  },
  {
    "id": "best-rechargeable-headlamps-for-hiking-2",
    "rank": 2,
    "badge": "Best IP67 Value",
    "name": "BLACK DIAMOND Spot 400-R Headlamp",
    "price": "$54.88",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41j5pvMtb1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09NQK87MN?tag=rvgearlab-amz-20",
    "description": "The Black Diamond Spot 400-R delivers up to 400 lumens from a 1,500mAh lithium-ion battery with micro-USB charging and an IP67 rating for 30 minutes of submersion. Dimming, strobe, red and lock modes are listed.\n\nIt has a lock mode and an explicit IP67 rating, which the Storm 500-R describes only as rugged waterproof. It costs less than the Storm.\n\nIt suits hikers who want an IP67 lamp at a lower price. The lock mode prevents drain in a pack.",
    "specs": [
      "400 lumens, 1,500mAh",
      "IP67, lock mode",
      "Dimming, strobe, red modes"
    ],
    "pros": [
      "IP67 submersion rating",
      "Lock mode prevents accidental drain",
      "Dimming and red modes",
      "Lower price than the Storm"
    ],
    "cons": [
      "Smaller 1,500mAh battery",
      "Micro-USB charging"
    ],
    "bestFor": "IP67 on a lower budget",
    "take": "The Black Diamond with a clear IP67 rating at a lower price.",
    "catch": "Battery is smaller, so carry a power bank on long trips."
  },
  {
    "id": "best-rechargeable-headlamps-for-hiking-3",
    "rank": 3,
    "badge": "Best Metal USB-C",
    "name": "sofirn Headlamp",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41q05SBxD+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07NJ9PCJC?tag=rvgearlab-amz-20",
    "description": "The sofirn headlamp uses two LEDs for a listed 1200 lumens maximum with five modes, a hidden USB-C port and a non-removable lithium-ion battery. The aircraft-grade aluminum case with a hard-anodized finish weighs about 2.9 ounces.\n\nIt combines an aluminum case with USB-C and costs far less than the Black Diamond pair. The waterproof claim is listed in general terms.\n\nIt suits hikers who want a tough, simple lamp at a middle price. The adjustable headband fits most heads.",
    "specs": [
      "1200 lumens, two LEDs",
      "Hidden USB-C, aluminum case",
      "2.9 oz, five modes"
    ],
    "pros": [
      "USB-C charging",
      "Aluminum case with hard anodizing",
      "Five modes",
      "2.9 ounce weight"
    ],
    "cons": [
      "Water rating not specified",
      "Non-removable battery"
    ],
    "bestFor": "Tough, simple hiking",
    "take": "A tough metal lamp with USB-C at a mid price.",
    "catch": "No IP rating is given, so keep it out of heavy rain."
  },
  {
    "id": "best-rechargeable-headlamps-for-hiking-4",
    "rank": 4,
    "badge": "Best Motion Pair",
    "name": "Curtsod Rechargeable LED Headlamp 2-Pack",
    "price": "$32.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/511-xTQIpyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G3H3CW38?tag=rvgearlab-amz-20",
    "description": "The Curtsod 2-Pack has a motion sensor activated by a 2 second long press, three modes (high beam, low beam, strobe) and a 90-degree adjustable focus. A rear battery indicator, 4 to 6 hour charging and a cushioned elastic headband are listed.\n\nIt gives two lamps with a battery gauge, which the Staaricc and Lepro listings do not name. The 99,000 lumen title is a marketing figure and should be ignored.\n\nIt suits hikers who want hand-wave control and a spare lamp. The cushioning reduces forehead pressure.",
    "specs": [
      "Two lamps, motion sensor",
      "Rear battery indicator",
      "90-degree adjustable focus"
    ],
    "pros": [
      "Two lamps per pack",
      "Battery indicator on the back",
      "Motion sensor for gloves",
      "Cushioned headband"
    ],
    "cons": [
      "99,000 lumen title is not realistic",
      "Battery capacity is not stated"
    ],
    "bestFor": "Spare lamp and gesture control",
    "take": "A budget pair with a battery gauge and gesture control.",
    "catch": "Judge it by modes and cushioning, not the title."
  },
  {
    "id": "best-rechargeable-headlamps-for-hiking-5",
    "rank": 5,
    "badge": "Best Budget Zoom",
    "name": "Staaricc Super Bright Headlamp Rechargeable High Lumen/Head lamp for Adults",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41yR9stVrWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F6XMBW49?tag=rvgearlab-amz-20",
    "description": "The Staaricc headlamp offers four modes (high, low, strobe, SOS), an adjustable focus from flood to spot and Type-C charging with non-detachable high-capacity batteries. The aviation-grade aluminum shell tilts from 0 to 90 degrees.\n\nIt zooms where the sofirn does not, and it costs less. The aluminum shell is chosen for heat dissipation.\n\nIt suits budget hikers who want a zoomable aluminum lamp with Type-C. The heat-dissipating body suits long use.",
    "specs": [
      "Zoom flood to spot",
      "Type-C, 0 to 90 degree tilt",
      "Aluminum shell, four modes"
    ],
    "pros": [
      "Zoom from flood to spot",
      "Type-C charging",
      "0 to 90 degree tilt",
      "Aviation-grade aluminum"
    ],
    "cons": [
      "Battery capacity not stated",
      "Water rating not stated"
    ],
    "bestFor": "Budget zoom lamp",
    "take": "A cheap zoomable aluminum lamp with Type-C.",
    "catch": "Treat it as a camp lamp until you see an IP rating."
  },
  {
    "id": "best-rechargeable-headlamps-for-hiking-6",
    "rank": 6,
    "badge": "Best Lightweight Budget",
    "name": "Lepro LED Headlamp Rechargeable IPX4 Waterproof Headlight 5 Modes",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31J7T5G5IjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01DNDMSLY?tag=rvgearlab-amz-20",
    "description": "The Lepro single lists 300-lumen LEDs reaching 500 feet, three white levels and two red modes, and up to 30 hours on a USB-C charge. It weighs 2.86 ounces, has a 45-degree tilt and an IPX4 rating.\n\nIt is the cheapest and lightest rechargeable lamp here, and it lists a clear 30 hour runtime. It has less output than the sofirn.\n\nIt suits budget hikers and kids who want a light, simple lamp. A polyethylene coating protects against drops.",
    "specs": [
      "300 lumens, 500 ft reach",
      "30 hours per charge",
      "2.86 oz, IPX4"
    ],
    "pros": [
      "Lowest price of the six",
      "30 hour runtime",
      "Two red modes",
      "2.86 ounce weight"
    ],
    "cons": [
      "IPX4 splash rating only",
      "Lower output than sofirn"
    ],
    "bestFor": "Budget day hikes",
    "take": "A cheap, light lamp with a clear runtime for easy trails.",
    "catch": "Charging adapter is not included."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight and fit",
    "description": "Listed weights and band designs were compared."
  },
  {
    "title": "Battery",
    "description": "Stated mAh and cell type were compared."
  },
  {
    "title": "Charging",
    "description": "USB-C and micro-USB were noted."
  },
  {
    "title": "Weather",
    "description": "IP ratings were weighed."
  },
  {
    "title": "Value",
    "description": "Price against features."
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
    "subheading": "By Trip",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Harsh weather, long days",
          "Black Diamond Storm 500-R",
          "500 lumens and a large battery."
        ],
        [
          "Wet trips, lower budget",
          "Black Diamond Spot 400-R",
          "IP67 and lock mode."
        ],
        [
          "Tough metal case, USB-C",
          "sofirn 1200-Lumen",
          "Aluminum and USB-C."
        ],
        [
          "Easy day hikes",
          "Lepro Single",
          "Cheapest and light."
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
          "$0 to $20",
          "Lepro Single or Staaricc Zoom"
        ],
        [
          "$20 to $40",
          "sofirn 1200-Lumen or Curtsod 2-Pack"
        ],
        [
          "$50 to $80",
          "Black Diamond Spot 400-R or Black Diamond Storm 500-R"
        ]
      ]
    }
  },
  {
    "subheading": "Premium vs Budget",
    "cards": [
      {
        "label": "Premium",
        "text": "The Black Diamond Storm 500-R and Spot 400-R list battery sizes, ratings and modes."
      },
      {
        "label": "Budget",
        "text": "The Curtsod 2-Pack, Staaricc Zoom and Lepro Single cost less and list fewer details."
      }
    ],
    "note": "Most serious hikers should choose the Black Diamond Spot 400-R and save on the rest."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest spend",
          "Lepro Single"
        ],
        [
          "Low spend, zoom",
          "Staaricc Zoom"
        ],
        [
          "Mid-range pair",
          "Curtsod 2-Pack"
        ],
        [
          "Pay for brand and IP67",
          "Black Diamond Spot 400-R"
        ]
      ]
    }
  },
  {
    "subheading": "For Rainy Hikes Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "An IP67 or IPX6 rating and a sealed charge port."
      },
      {
        "label": "In this comparison",
        "text": "The Black Diamond Spot 400-R lists IP67 for 30 minutes of submersion."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Black Diamond Storm 500-R if you hike in storms and need more output. The Spot 400-R is the lower-cost IP67 option."
      },
      {
        "label": "Save if",
        "text": "Save with the Lepro Single or Staaricc Zoom for easy trails. Both cost little and cover basics."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Battery size",
    "explanation": "A 2,400mAh Black Diamond cell gives more runtime than a 1,500mAh one, but also adds weight. Look for mAh in the listing. Most lamps list nothing."
  },
  {
    "criterion": "Charge port",
    "explanation": "USB-C is common and reversible, while micro-USB is older. Hikers carrying one cable for a phone and lamp prefer USB-C. Check the port."
  },
  {
    "criterion": "Waterproof rating",
    "explanation": "IP67 survives brief submersion, IPX4 handles splashes. For wet trips, a stated IP67 or IPX6 is best. Check the letters."
  },
  {
    "criterion": "Lock mode",
    "explanation": "A lock mode stops the lamp from turning on in a pack and draining the battery. The Black Diamond Spot 400-R lists one. Look for the words lock mode."
  },
  {
    "criterion": "Lumen claims",
    "explanation": "Titles with 99,000 lumens are not real for a headlamp. Look for mode lists and runtimes instead. Compare tested brands."
  }
];

export const faq = [
  {
    "q": "Is a rechargeable headlamp good for backpacking?",
    "a": "Yes, if you carry a power bank or can charge at the trailhead. Plan one charge per two nights. For long trips, AAA lamps are easier."
  },
  {
    "q": "How long does a headlamp charge last?",
    "a": "Listings quote 8 to 30 hours on lower modes and far less on high. Plan for the mode you use. Carry a power bank."
  },
  {
    "q": "Do I need red light for hiking?",
    "a": "It is helpful at camp for map reading and keeps night vision. Most lamps here include red. Check the mode list."
  },
  {
    "q": "What does IPX4 mean?",
    "a": "It means splash resistance from any direction. It does not cover heavy rain or submersion. IP67 does."
  },
  {
    "q": "How do I keep the lamp from turning on in my pack?",
    "a": "Use the lock mode if the lamp has one, or pack it with the lens inward. Check the manual. Charge it before you go."
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
