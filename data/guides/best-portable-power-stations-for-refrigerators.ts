export const guideSlug = "best-portable-power-stations-for-refrigerators";
export const guideTitle = "3 Best Portable Power Stations For Refrigerators in 2026";
export const metaTitle = "Best Portable Power Stations For Refrigerators";
export const metaDescription = "Best portable power stations for refrigerators compared on standby draw, UPS switchover, output and capacity for outages, RV trips and camping.";
export const mainKeyword = "best portable power stations for refrigerators";
export const introParagraphs = [
  "A refrigerator is a stubborn load: it cycles on and off all day, and its compressor needs a surge to start. The best station for one balances low idle draw, enough output to start the compressor and enough watt-hours to last the outage.",
  "Three distinct stations are compared. One is the purpose-built slim BLUETTI FridgePower, sold in several variants that count as a single line here, and the other two are general stations judged on the same fridge needs."
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
    "id": "best-portable-power-stations-for-refrigerators-1",
    "rank": 1,
    "badge": "Best Fridge-Built",
    "name": "BLUETTI FridgePower Portable Power Station",
    "price": "$949.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31z4HFhmY9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GX1GHYMM?tag=rvgearlab-20",
    "description": "The BLUETTI FridgePower is built exclusively for fridge backup, with 2,016Wh of LFP storage, 1,800W rated output and a 4W standby draw that the listing says runs 26 percent longer than same-capacity rivals. A 10ms DualGuard UPS switch keeps the fridge running through a blackout, and a slim 75mm body fits most kitchen gaps.\n\nIt is the only pick designed around a refrigerator, with storm alerts and Alexa and Google Home support. Next to the Elite 400 it stores about half the energy, with a lower idle draw and a much lower price.\n\nIt suits households that want a fridge-only outage plan and a sump pump or chest freezer as a second load. An expandable 4,032Wh version of the same line is also sold.",
    "specs": [
      "2,016Wh LFP, 1,800W output",
      "4W standby draw",
      "10ms DualGuard UPS"
    ],
    "pros": [
      "Low 4W standby draw",
      "Slim 75mm body fits kitchen gaps",
      "Storm alerts and voice control",
      "Runs sump pumps and chest freezers"
    ],
    "cons": [
      "Less capacity than the Elite 400",
      "Built for home use more than camping"
    ],
    "bestFor": "Fridge backup at home",
    "take": "The most fridge-minded design here. Choose it if the fridge is the main load.",
    "catch": "It is shaped for kitchens, so it is a poor fit for a campsite."
  },
  {
    "id": "best-portable-power-stations-for-refrigerators-2",
    "rank": 2,
    "badge": "Best Long Outage",
    "name": "BLUETTI Elite 400 Portable Power Station 3840Wh LiFePO4 Battery 2600W",
    "price": "$1399.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Bn2bAImBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G8Y8DCC1?tag=rvgearlab-20",
    "description": "The BLUETTI Elite 400 stores 3,840Wh of LiFePO4 with 2,600W rated output and 3,900W surge, 9 ports and an easy-roll trolley system. It reaches 80 percent charge in 70 minutes with 2,800W AC and solar input, and switches over in 15ms.\n\nWith nearly double the storage of the FridgePower, it will run a fridge for days rather than hours. It also moves around easily on its trolley, which the slimmer FridgePower does not offer.\n\nIt suits households with a fridge and a freezer, a few lights and a router who want several days of outage coverage. It also suits RV owners with larger loads.",
    "specs": [
      "3,840Wh LiFePO4, 2,600W",
      "3,900W surge, 15ms switchover",
      "80% charge in 70 minutes"
    ],
    "pros": [
      "Largest capacity of the three",
      "2,600W handles a fridge and power tools",
      "Easy-roll trolley system",
      "Fast 70 minute charge to 80 percent"
    ],
    "cons": [
      "Costs far more than the other two",
      "Too big for a weekend trip"
    ],
    "bestFor": "Multi-day outages",
    "take": "The pick for days without grid power and a fridge plus a freezer.",
    "catch": "It is the priciest of the three and heavy to move without the trolley."
  },
  {
    "id": "best-portable-power-stations-for-refrigerators-3",
    "rank": 3,
    "badge": "Best Camping Fridge",
    "name": "BLUETTI Elite 100 V2 Portable Power Station for Camping 1024Wh 1800W",
    "price": "$489.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RMFsLYB-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F42CSQWG?tag=rvgearlab-20",
    "description": "The BLUETTI Elite 100 V2 stores 1,024Wh with 1,800W rated AC output, 2,700W in Power Lifting mode and a 10ms UPS. It reaches 80 percent in about 45 minutes, weighs 25 pounds and offers a 30dB silent mode.\n\nAt 25 pounds it is by far the easiest to carry, and its price is roughly half that of the FridgePower. It runs a fridge for a shorter stretch because of its 1,024Wh.\n\nIt suits campers with a 12V or small AC fridge and anyone who wants a quiet backup for a mini fridge. The silent mode keeps noise down in a tent or bedroom.",
    "specs": [
      "1,024Wh, 1,800W rated",
      "10ms UPS, 30dB silent mode",
      "80% in 45 min, 25 lb"
    ],
    "pros": [
      "Light at 25 pounds",
      "Quiet 30dB mode",
      "1,800W covers compressor starts",
      "App control with OTA updates"
    ],
    "cons": [
      "Only 1,024Wh of storage",
      "Runs a fridge for hours, not days"
    ],
    "bestFor": "Camping and mini fridge use",
    "take": "A light, quiet unit for a weekend away. It covers a fridge for a night, not a week.",
    "catch": "Capacity is modest for a full-size fridge across several days."
  }
];

export const howWeEvaluated = [
  {
    "title": "Standby draw",
    "description": "Compared stated idle power, since a fridge runs all day and small drains add up."
  },
  {
    "title": "UPS switchover",
    "description": "Checked the listed switchover time between wall power and battery."
  },
  {
    "title": "Output for compressor starts",
    "description": "Looked at rated and surge watts, since compressors draw more when starting."
  },
  {
    "title": "Capacity and size",
    "description": "Compared stated watt-hours, weight and how easily the unit moves."
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
    "subheading": "By Outage Length",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "A night or a weekend",
          "BLUETTI Elite 100 V2",
          "1,024Wh covers a mini fridge"
        ],
        [
          "One to two days with a full fridge",
          "BLUETTI FridgePower",
          "2,016Wh and low standby"
        ],
        [
          "Several days with fridge and freezer",
          "BLUETTI Elite 400",
          "3,840Wh capacity"
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
          "$480 to $490",
          "BLUETTI Elite 100 V2"
        ],
        [
          "$940 to $950",
          "BLUETTI FridgePower"
        ],
        [
          "$1390 to $1400",
          "BLUETTI Elite 400"
        ]
      ]
    }
  },
  {
    "subheading": "Purpose-built fridge unit vs general station",
    "cards": [
      {
        "label": "Purpose-built",
        "text": "The BLUETTI FridgePower has a slim body, low standby and storm alerts, so it stays out of the way and sips power."
      },
      {
        "label": "General station",
        "text": "The BLUETTI Elite 400 and Elite 100 V2 move to camp and work with tools and electronics as well as a fridge."
      }
    ],
    "note": "Most home buyers should default to the BLUETTI FridgePower unless they also camp."
  },
  {
    "subheading": "By Portability",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lightest",
          "BLUETTI Elite 100 V2"
        ],
        [
          "Rolls on a trolley",
          "BLUETTI Elite 400"
        ],
        [
          "Fits behind a fridge",
          "BLUETTI FridgePower"
        ]
      ]
    }
  },
  {
    "subheading": "For Camping and RV Fridges Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A light unit with enough output for a compressor start"
      },
      {
        "label": "In this comparison",
        "text": "The BLUETTI Elite 100 V2 weighs 25 pounds with 1,800W of output, and the BLUETTI Elite 400 rolls on a trolley for larger RV fridges."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BLUETTI Elite 400 for multi-day outages, or the BLUETTI FridgePower for the lowest standby draw and fridge-specific design."
      },
      {
        "label": "Save if",
        "text": "Save with the BLUETTI Elite 100 V2 if you only need a night or a weekend of mini fridge power."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fridge runtime math",
    "explanation": "A fridge averages far less than its label wattage because the compressor cycles. Divide the station's watt-hours by the fridge's average watts for a rough runtime. Look for the fridge's yearly kWh on its energy label and divide by 365 days for daily Wh."
  },
  {
    "criterion": "Starting surge",
    "explanation": "A compressor can draw several times its running watts for a moment when it starts. The station's rated output must cover this, or it will trip. Check the surge rating on the station against the fridge's start watts."
  },
  {
    "criterion": "Standby draw of the station",
    "explanation": "An inverter that stays on burns power even with no load. A low standby figure, such as 4W, saves hours of fridge time over a long outage. Look for the idle draw in the specs."
  },
  {
    "criterion": "UPS switchover",
    "explanation": "A fast UPS switch, such as 10ms to 15ms, keeps a fridge and a router running through an outage. It does not protect food if the unit sits unplugged. Look for the word UPS or EPS and a millisecond figure."
  },
  {
    "criterion": "Pure sine wave and safe operation",
    "explanation": "Compressors and electronics run best on pure sine wave output. Keep the station in a ventilated spot, off the floor if water is possible. Never place it where flooding is likely."
  }
];

export const faq = [
  {
    "q": "How long will a power station run a fridge?",
    "a": "Divide the watt-hours by the fridge's average watts. A fridge averaging 60W would run about 17 hours on 1,024Wh before losses, so more capacity extends this."
  },
  {
    "q": "Is the FridgePower a good camping choice?",
    "a": "It is built for kitchens, with a 75mm slim body. For camping, the BLUETTI Elite 100 V2 is lighter and easier to carry."
  },
  {
    "q": "Is a bigger station worth it over a smaller one?",
    "a": "If you must keep a fridge and a freezer going for days, yes. For a night or a mini fridge, a 1,000Wh class unit is enough."
  },
  {
    "q": "How do I connect a fridge?",
    "a": "Plug the fridge straight into an AC outlet on the station, not through a thin extension cord. Make sure the rated output exceeds the fridge's starting watts."
  },
  {
    "q": "What about long-term storage?",
    "a": "Store the station at partial charge indoors, away from heat. Top up every few months so it is ready."
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
