export const guideSlug = "best-collapsible-solar-lanterns";
export const guideTitle = "5 Best Collapsible Solar Lanterns in 2026";
export const metaTitle = "Best Collapsible Solar Lanterns in 2026";
export const metaDescription = "Best collapsible solar lanterns compared on packed size, solar and USB charging, brightness and backup power for packs, tents and outage kits.";
export const mainKeyword = "best collapsible solar lanterns";
export const introParagraphs = [
  "A collapsible solar lantern solves the two biggest packing problems at once: it folds small and it never needs a fuel canister. The trade is brightness, since a flat or pull-up lantern holds a smaller battery than a rigid camp lantern.",
  "Five lanterns that collapse or inflate flat made the list, from a pull-up hybrid to a 1 inch folding light. They were ranked by packed size, charging routes, stated brightness and what each listing says about weather resistance."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/lighting-headlamp-tent.webp";
export const heroImageAlt = "Camper wearing a headlamp in front of a tent at night";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-collapsible-solar-lanterns-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Energizer S-500 Hybrid Power",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TrXM3L7lL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DB67KH4P?tag=rvgearlab-amz-20",
    "description": "The Energizer S-500 runs on 3 AA batteries or a solar-rechargeable lithium-ion battery that also charges over USB. It lists up to 500 lumens of 360 degree light on High with the rechargeable battery, plus Low and Night Light modes.\n\nIt has the most light of the five, far above the 300 lumens of the DIBMS 2-Pack and the 200 lumens of the LuminAID Max. The AA fallback means it keeps working when the sun is not, which the Solis Convene and BioLite Luci Original cannot do.\n\nIt suits car campers and outage kits that want a bright collapsible lantern with a battery safety net. A handle and bottom hook cover carrying and hanging.",
    "specs": [
      "500 lumens on High",
      "3 AA or solar rechargeable pack",
      "Collapsible with handle and hook"
    ],
    "pros": [
      "Brightest of the five",
      "AA backup when solar is unavailable",
      "Solar and USB recharging",
      "Handle and hook for carrying and hanging"
    ],
    "cons": [
      "500 lumens applies with the rechargeable pack only",
      "Bulkier than the inflatable options"
    ],
    "bestFor": "Bright, collapsible and backed up",
    "take": "The most capable collapsible lantern here, with three ways to keep it lit. Our default for tents and outage drawers.",
    "catch": "Full 500 lumen output needs the rechargeable battery, not AAs."
  },
  {
    "id": "best-collapsible-solar-lanterns-2",
    "rank": 2,
    "badge": "Best Value Pair",
    "name": "DIBMS 2-Pack Solar Camping Lantern",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41IMDDa7SqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CHJ4RCLF?tag=rvgearlab-amz-20",
    "description": "The DIBMS pair uses six LED chips for a stated 300 lumens each, with a pull-up collapsible design that works as a lantern or table lamp. A 1600mAh battery charges by USB in about 4 hours (cable included) or by solar in 9 hours of direct sun.\n\nIt states more light than the LuminAID Max and costs far less per lantern than the Energizer S-500 Hybrid. Each unit weighs 8.02 ounces and is rated IPX4.\n\nIt suits families and cabins that want a collapsible lantern for each room or tent. The pair can be set across a site or kept as a backup set.",
    "specs": [
      "300 lumens, 1600mAh",
      "USB 4 hours, solar 9 hours",
      "IPX4, 8.02 oz, stretchable"
    ],
    "pros": [
      "Two lanterns in one pack",
      "300 lumens per lantern",
      "Cable included, USB charges in 4 hours",
      "Folding hook and flat packing"
    ],
    "cons": [
      "IPX4 offers splash protection only",
      "Solar charging needs 9 hours of direct sun"
    ],
    "bestFor": "A pair for tents and cabins",
    "take": "Two decent lanterns at a low price per unit. Good for a family or a spare set.",
    "catch": "Solar top-up is slow, so charge by USB before a trip."
  },
  {
    "id": "best-collapsible-solar-lanterns-3",
    "rank": 3,
    "badge": "Best Phone Charger",
    "name": "LuminAID Max 2-in-1 Inflatable Solar LED Camping Lantern & Phone Charger",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31NibOTsqfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CVYMMHJ4?tag=rvgearlab-amz-20",
    "description": "The LuminAID Max is an expandable solar lantern and phone charger, listed at 200 lumens with a Turbo mode. It has a 5V 2.1A output that charges most phones from 75 to 100 percent, weighs under 10 ounces and carries an IP67 rating.\n\nIt is the only pick here that doubles as a backup battery for phones, which sets it apart from the BioLite Luci Original and Solis Convene. It also states a rating two steps above the IPX4 of the DIBMS 2-Pack.\n\nIt suits backpackers and travelers who want a lantern that also charges a phone. Full solar recharge takes 16 to 20 hours of direct sunlight.",
    "specs": [
      "200 lumens, Turbo mode",
      "5V 2.1A phone output",
      "IP67, under 10 oz"
    ],
    "pros": [
      "Charges phones from the pack",
      "IP67 dust and water rating",
      "Light, flat-packing design",
      "Solar or USB recharging"
    ],
    "cons": [
      "Highest price of the five",
      "Full solar charge takes 16 to 20 hours"
    ],
    "bestFor": "A lantern that also charges phones",
    "take": "A premium 2-in-1 for trips with no outlet. Worth it if phone power is part of your plan.",
    "catch": "Solar alone is slow, so plan a USB top-up too."
  },
  {
    "id": "best-collapsible-solar-lanterns-4",
    "rank": 4,
    "badge": "Best Packable",
    "name": "BioLite Luci Original Camping Lantern",
    "price": "$29.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31LYL67kJDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DTM36WPB?tag=rvgearlab-amz-20",
    "description": "The BioLite Luci Original is an inflatable lantern with a 1000mAh lithium-ion battery that delivers up to 24 hours of light per charge. It gives up to 65 lumens of cool white light, weighs 4.4 ounces and collapses to 1 inch.\n\nIt is the smallest folded size of the five, well under the Energizer S-500 Hybrid and the DIBMS 2-Pack. It also carries an IP67 rating and handles up to 150 pounds of pressure, which suits a rough pack.\n\nIt suits backpackers and kayakers who count every ounce. Solar or USB-C recharging keeps it flexible.",
    "specs": [
      "65 lumens, 24 hours",
      "4.4 oz, collapses to 1 inch",
      "IP67, solar or USB-C"
    ],
    "pros": [
      "Very light at 4.4 ounces",
      "Collapses to 1 inch",
      "IP67 and 150 pound pressure rating",
      "Solar and USB-C recharging"
    ],
    "cons": [
      "Soft output of 65 lumens",
      "Cool white only"
    ],
    "bestFor": "Ultralight backpacking",
    "take": "The most packable light of the five. It is a tent light, not a camp light.",
    "catch": "Only 65 lumens, so it is a tent and table light."
  },
  {
    "id": "best-collapsible-solar-lanterns-5",
    "rank": 5,
    "badge": "Best Budget",
    "name": "Solis Convene Solar Camping Lanterns-Collapsible Camping Essentials",
    "price": "$18.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41nXTiKdFzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C57HGB8C?tag=rvgearlab-amz-20",
    "description": "The Solis Convene is a collapsible lantern made of composite rubber that passed a 10,000-time stretch and compression test. A 500mAh polymer lithium battery charges by a 0.25W solar panel or 5V Micro USB, and the body lists IP65 protection with three brightness levels.\n\nIt sits near the bottom on price and carries a stronger weather rating than the DIBMS 2-Pack. Its battery is the smallest here, which keeps it light.\n\nIt suits budget campers and kids who need a rugged, lightweight tent light. A top handle and single-touch control keep it simple.",
    "specs": [
      "500mAh, 0.25W solar panel",
      "IP65, three brightness levels",
      "Composite rubber, Micro USB"
    ],
    "pros": [
      "Low price for a single lantern",
      "IP65 weather rating",
      "Stretch-tested rubber body",
      "Single-touch three levels"
    ],
    "cons": [
      "Smallest battery of the five",
      "Micro USB is an older connector"
    ],
    "bestFor": "A rugged budget tent light",
    "take": "A cheap, tough lantern for kids and spare kits. Do not expect long runtime.",
    "catch": "No lumen output is given, and the 500mAh pack is small."
  }
];

export const howWeEvaluated = [
  {
    "title": "Packed size",
    "description": "Compared how small each lantern folds, flattens or collapses for a pack."
  },
  {
    "title": "Charging routes",
    "description": "Looked at solar panel size, USB type and any AA backup."
  },
  {
    "title": "Brightness",
    "description": "Noted stated lumens and the brightness steps each lantern offers."
  },
  {
    "title": "Weather and durability",
    "description": "Checked the IP rating, material and any stated crush or stretch ratings."
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
          "Car camping and outages",
          "Energizer S-500 Hybrid",
          "500 lumens and AA backup"
        ],
        [
          "Family with multiple tents",
          "DIBMS 2-Pack",
          "Two 300 lumen lanterns"
        ],
        [
          "Backpacking with a phone",
          "LuminAID Max",
          "Lantern plus 5V 2.1A charger"
        ],
        [
          "Ultralight packing",
          "BioLite Luci Original",
          "Collapses to 1 inch, 4.4 ounces"
        ],
        [
          "Budget and kids",
          "Solis Convene",
          "Low price with IP65"
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
          "$10 to $20",
          "DIBMS 2-Pack or Solis Convene"
        ],
        [
          "$10 to $30",
          "Energizer S-500 Hybrid or BioLite Luci Original"
        ],
        [
          "$50 to $60",
          "LuminAID Max"
        ]
      ]
    }
  },
  {
    "subheading": "Pull-up vs inflatable",
    "cards": [
      {
        "label": "Pull-up",
        "text": "The Energizer S-500 Hybrid and DIBMS 2-Pack collapse like a bellows, which allows a bigger battery and brighter light."
      },
      {
        "label": "Inflatable",
        "text": "The BioLite Luci Original and LuminAID Max fill with air, which gives a flat, ultralight pack and rugged waterproofing."
      }
    ],
    "note": "Most campers should default to the Energizer S-500 Hybrid unless pack weight is the limit."
  },
  {
    "subheading": "By Power Preference",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "AA backup",
          "Energizer S-500 Hybrid"
        ],
        [
          "Phone charging",
          "LuminAID Max"
        ],
        [
          "USB cable in the box",
          "DIBMS 2-Pack"
        ],
        [
          "Lightest",
          "BioLite Luci Original"
        ]
      ]
    }
  },
  {
    "subheading": "For Hurricane and Outage Kits Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A collapsible light that works without sun"
      },
      {
        "label": "In this comparison",
        "text": "The Energizer S-500 Hybrid accepts 3 AA batteries, and the DIBMS 2-Pack charges by USB in about 4 hours."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Energizer S-500 Hybrid or the LuminAID Max if you want the strongest output or a phone charging port."
      },
      {
        "label": "Save if",
        "text": "Save with the DIBMS 2-Pack or Solis Convene if you need several lights or a rugged budget option."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Solar panel size and honest recharge",
    "explanation": "A small solar panel on a lantern is a trickle charger, taking 9 to 24 hours of direct sun for a full charge. It works as a backup, not a primary charger. Check the listing for the stated hours of sun and plan on USB for a reliable top-up."
  },
  {
    "criterion": "Collapse versus inflate",
    "explanation": "Collapsible lanterns pull up or stretch from a flat body, while inflatable ones fill with air and sit near paper-thin when packed. Inflatables fold smaller, but pull-up lanterns can hold a larger battery and brighter lights. Look at the listed packed size and weight."
  },
  {
    "criterion": "Stated lumens against battery size",
    "explanation": "A 65 lumen lantern can run 24 hours from a 1000mAh pack, while 500 lumens will drain a similar pack in hours. Brighter lanterns need bigger cells or AA backup. Find both the lumens and the mAh in the listing."
  },
  {
    "criterion": "Backup power options",
    "explanation": "Lanterns that accept AA batteries recover when solar and USB are not available. Rechargeable-only models depend on you carrying a power bank. Check whether AA cells are included and whether the lantern can use them for full output."
  },
  {
    "criterion": "IP rating and material",
    "explanation": "IP67 means dust-tight and able to be briefly submerged, while IP65 handles water jets and IPX4 handles splashes. Material matters too, since rubber and TPU survive crushing in a pack. Look for the code and the material in the specs."
  }
];

export const faq = [
  {
    "q": "Do collapsible solar lanterns work without sun?",
    "a": "Yes, all five list another charging route. The Energizer S-500 Hybrid takes AA batteries, and the DIBMS 2-Pack charges by USB in about 4 hours."
  },
  {
    "q": "How long does solar charging take?",
    "a": "The DIBMS 2-Pack lists 9 hours of direct sunlight and the LuminAID Max lists 16 to 20 hours. Cloudy days stretch that, so charge by USB before a trip."
  },
  {
    "q": "Is a collapsible lantern worth it over a rigid lantern?",
    "a": "It saves space and is fine for a tent or table. A rigid lantern holds a bigger battery and gives more output. Pick collapsible when pack size matters."
  },
  {
    "q": "How do I set up a collapsible lantern?",
    "a": "Pull or inflate the body until it holds shape, switch it on and hang it from the handle or hook. Put the solar panel facing the sun during the day to top up."
  },
  {
    "q": "How do I store one for the long term?",
    "a": "Charge it partially, dry it fully and fold it loosely. Keep it away from heat, and check it every few months."
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
