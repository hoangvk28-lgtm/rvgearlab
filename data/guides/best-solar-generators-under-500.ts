export const guideSlug = "best-solar-generators-under-500";
export const guideTitle = "5 Best Solar Generators Under 500 in 2026";
export const metaTitle = "Best Solar Generators Under 500 in 2026";
export const metaDescription = "Best solar generators under $500: five LiFePO4 and bundled-panel power stations compared on capacity, battery life and solar readiness for camping.";
export const mainKeyword = "best solar generators under 500";
export const introParagraphs = [
  "Five hundred dollars buys two different things: a big 1 kWh battery with no panel, or a smaller battery bundled with the panel to recharge it. This guide sorts the five best examples so you can pick the one that matches how you camp.",
  "The picks run from about $320 to $400. Moving up from the $300 tier mostly buys LiFePO4 cells, faster charging and a name-brand warranty, and the notes below say when that is worth paying for."
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
    "id": "best-solar-generators-under-500-1",
    "rank": 1,
    "badge": "Best Value Under $500",
    "name": "STARYLINE 1000W Portable Power Station 1024Wh LiFePO4 for Outdoor & Home",
    "price": "$329.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41D55awBh3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVJKMV8J?tag=rvgearlab-amz-20",
    "description": "STARYLINE pairs a 1024Wh LiFePO4 battery with 1000W of continuous AC output across two 110V outlets. It has a 60W USB-C PD jack, a pair of USB-A outputs, a 27.73 lb body and a 6-layer BMS, and the cells are rated for 3000 or more cycles.\n\nIt carries the most energy of the five and uses long-life cells that the bargain GRECELL-class units skip, for about $330. Against the Jackery Explorer 500 v2 it holds twice the watt-hours and costs $70 less, and it weighs twice as much.\n\nBuy it for a fridge, CPAP and laptop run over a long weekend, or for home outage backup. It takes up to 300W of solar input, so a 200W panel is an easy add-on.",
    "specs": [
      "1024Wh LiFePO4, 3000+ cycles",
      "1000W AC, 6-layer BMS",
      "27.73 lb, 300W solar input"
    ],
    "pros": [
      "Over 1 kWh of LiFePO4 storage",
      "Two AC outlets at 1000W total",
      "Accepts up to 300W of solar",
      "Long-life cells for seasonal use"
    ],
    "cons": [
      "Heavy at nearly 28 lb",
      "No panel in the bundle"
    ],
    "bestFor": "Long weekends and outage backup",
    "take": "The most battery and the longest-lasting cells under the cap.",
    "catch": "Treat it as a car-to-site unit, not a carry-in."
  },
  {
    "id": "best-solar-generators-under-500-2",
    "rank": 2,
    "badge": "Best Premium Build",
    "name": "Jackery Explorer 500 v2 Portable Power Station",
    "price": "$399.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31pF6rBmLYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FR555DVH?tag=rvgearlab-amz-20",
    "description": "Jackery Explorer 500 v2 stores 512Wh in a LiFePO4 pack rated for 6000 cycles, with 500W AC output and a 1000W surge. It weighs 14 lb, charges from 0 to 80 percent in 52 minutes from the wall and has a 10ms UPS mode.\n\nThe cycle rating is double that of the STARYLINE, and the 14 lb weight is half. In return it holds half the energy and costs about $70 more, so the premium is for engineering, not capacity.\n\nChoose it if you camp often, carry the unit to the site and want the best battery life in the guide. It also works as a desk-side UPS at home.",
    "specs": [
      "512Wh LiFePO4, 6000 cycles",
      "500W AC, 1000W surge",
      "14 lb, 52 minute 80% charge"
    ],
    "pros": [
      "6000 cycles rated, about 10 years",
      "Light at 14 lb",
      "Fast 52 minute charge to 80 percent",
      "10ms UPS for desk gear"
    ],
    "cons": [
      "Half the capacity of the 1000W units",
      "Costs more per watt-hour"
    ],
    "bestFor": "Frequent campers who carry gear",
    "take": "Built to last years of weekend use.",
    "catch": "Capacity is the price you pay for the weight."
  },
  {
    "id": "best-solar-generators-under-500-3",
    "rank": 3,
    "badge": "Best Panel Bundle",
    "name": "500W Portable Power Station with 100W Solar Panel",
    "price": "$399.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41EyE7Se8JL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GYP8PS1L?tag=rvgearlab-amz-20",
    "description": "This bundle combines a 519.48Wh station with a 100W monocrystalline panel rated at 18V and the adapters to connect it. The station gives 500W of pure sine wave AC with a 1000W peak, ten ports and a 60W USB-C output.\n\nNo other pick here ships with a panel as large as 100W, which saves a purchase of $70 to $100. The Jackery Solar Gen 300 kit includes a smaller 40W panel, and the STARYLINE and EBL leave the panel out.\n\nIt suits campers who want to arrive, unfold the panel and run for a weekend with no extra shopping. A 100W panel adds about 300 to 400Wh on a sunny day.",
    "specs": [
      "519.48Wh, 500W AC, 1000W peak",
      "100W panel, 18V",
      "10 ports, 60W USB-C"
    ],
    "pros": [
      "100W panel included in the box",
      "Adapters for common connectors",
      "Ten outputs for devices",
      "Pure sine wave output"
    ],
    "cons": [
      "Lithium-ion cells wear faster",
      "Heavier with panel and cables"
    ],
    "bestFor": "Ready-to-use weekend setup",
    "take": "Everything in one box for about $400.",
    "catch": "Expect fewer cycles than LiFePO4 units."
  },
  {
    "id": "best-solar-generators-under-500-4",
    "rank": 4,
    "badge": "Best Budget Capacity",
    "name": "EBL Portable Power Station 1000W Solar Generator 999Wh for Home Backup",
    "price": "$319.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41qTAzcOjJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GLMFTY1B?tag=rvgearlab-amz-20",
    "description": "EBL holds 999Wh and puts out 1000W continuous from a single 120V AC outlet, with two 12V DC ports, a 10A car socket, a 60W PD USB-C, quick-charge USB-A ports and a 10W Qi pad. It accepts solar input from 12 to 26V at up to 8A.\n\nAt about $320 it matches the STARYLINE on capacity for $10 less, and it shares its slow 7 to 8 hour wall charge with the other 1 kWh units. It has one AC outlet instead of two.\n\nPick it if you want the lowest price on a full kilowatt-hour and plan mostly DC and USB loads. Its LCD turns off after 20 seconds to save power.",
    "specs": [
      "999Wh, 1000W AC outlet",
      "12-26V, 8A solar input",
      "60W USB-C, wireless pad"
    ],
    "pros": [
      "999Wh for about $320",
      "Rich DC and USB output mix",
      "Pass-through charging while in use",
      "Hibernates after 8 hours of low load"
    ],
    "cons": [
      "Single AC outlet only",
      "Wall charging takes 7 to 8 hours"
    ],
    "bestFor": "Cheapest 1 kWh option",
    "take": "Large capacity at the lowest price in this guide.",
    "catch": "Do not plan on two AC appliances at once."
  },
  {
    "id": "best-solar-generators-under-500-5",
    "rank": 5,
    "badge": "Best Brand-Name Kit",
    "name": "Jackery Solar Generator 300 and 40W Solar Panel",
    "price": "$339.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41S0DhkhCvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G429L5B4?tag=rvgearlab-amz-20",
    "description": "Jackery's Solar Generator 300 kit includes a 292Wh LiFePO4 station and a 40W panel. It outputs 300W (600W surge) pure sine wave AC, has a 100W USB-C PD port and weighs 7.5 lb, with cells rated for 4000 or more cycles.\n\nSmallest and lightest of the five, it also carries the best-known service network. The GRECELL bundle has a 100W panel and double the capacity, so this one is a choice for weight and warranty.\n\nBackpackers with a car, small-van travelers and anyone who values the Jackery name and long cell life will like it. It runs phones, laptops, lights and a CPAP.",
    "specs": [
      "292Wh LiFePO4, 4000+ cycles",
      "300W AC, 600W surge",
      "7.5 lb, 40W panel included"
    ],
    "pros": [
      "Light at 7.5 lb",
      "LiFePO4 cells rated for 4000 cycles",
      "100W USB-C PD port",
      "Panel, wall and car chargers in the box"
    ],
    "cons": [
      "40W panel refills slowly",
      "Small capacity for fridge use"
    ],
    "bestFor": "Light trips and van travel",
    "take": "A compact, long-lived kit from an established name.",
    "catch": "Capacity is far below the 1 kWh units."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Watt-hours ranged from 292Wh to 1024Wh, and capacity was ranked against price first."
  },
  {
    "title": "Battery chemistry",
    "description": "LiFePO4 and lithium-ion cells were separated and cycle ratings compared from 3000 to 6000."
  },
  {
    "title": "Panel and solar input",
    "description": "Whether a panel is included and the maximum solar input were compared across the five."
  },
  {
    "title": "Weight",
    "description": "Weights from 7.5 lb to 27.73 lb decide who can carry the unit from car to site."
  },
  {
    "title": "Price against the cap",
    "description": "All five sit at or under $500, and the top pick is the best watt-hours-and-cycles value, not the cheapest."
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
    "subheading": "By trip length",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Long weekend with a fridge",
          "STARYLINE 1000W",
          "1024Wh stretches over 2 to 3 days."
        ],
        [
          "Frequent trips, carry in by hand",
          "Jackery Explorer 500 v2",
          "14 lb with 6000 cycles."
        ],
        [
          "Weekend, panel needed",
          "GRECELL 500W Panel Bundle",
          "100W panel is in the box."
        ],
        [
          "Cheapest 1 kWh of storage",
          "EBL 1000W",
          "999Wh at the lowest price."
        ],
        [
          "Light travel with brand support",
          "Jackery Solar Gen 300 Kit",
          "7.5 lb with a 40W panel."
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
          "$310 to $330",
          "EBL 1000W or STARYLINE 1000W"
        ],
        [
          "$330 to $400",
          "Jackery Solar Gen 300 Kit or Jackery Explorer 500 v2"
        ],
        [
          "$390 to $400",
          "GRECELL 500W Panel Bundle"
        ]
      ]
    }
  },
  {
    "subheading": "LiFePO4 vs lithium-ion",
    "cards": [
      {
        "label": "LiFePO4",
        "text": "These cells last 3000 to 6000 cycles and hold up in heat. The STARYLINE 1000W, Jackery Explorer 500 v2 and Jackery Solar Gen 300 Kit use them."
      },
      {
        "label": "Lithium-ion",
        "text": "Lithium-ion packs are lighter and cheaper but wear out sooner, usually in the hundreds of cycles. The GRECELL 500W Panel Bundle and EBL 1000W use this chemistry."
      }
    ],
    "note": "Frequent campers should take a LiFePO4 pick, with the STARYLINE 1000W the best balance of price and capacity."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Budget band",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $320",
          "EBL 1000W"
        ],
        [
          "About $330",
          "STARYLINE 1000W"
        ],
        [
          "About $340",
          "Jackery Solar Gen 300 Kit"
        ],
        [
          "About $400",
          "Jackery Explorer 500 v2"
        ],
        [
          "About $400",
          "GRECELL 500W Panel Bundle"
        ]
      ]
    }
  },
  {
    "subheading": "For fridge and CPAP use specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for 900Wh or more and pure sine wave output, so a 60W fridge and a CPAP both run overnight."
      },
      {
        "label": "In this comparison",
        "text": "The STARYLINE 1000W gives 1024Wh and the EBL 1000W gives 999Wh, both enough for two nights of a small fridge and CPAP."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want 6000 cycles and a light body, since the Jackery Explorer 500 v2 trades capacity for engineering. The GRECELL 500W Panel Bundle also rewards a bit more spending by including a 100W panel."
      },
      {
        "label": "Save if",
        "text": "Save if you will use the unit a few times a year, because the EBL 1000W gives 999Wh for about $320 and the STARYLINE 1000W gives LiFePO4 at about $330."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Capacity against cycles",
    "explanation": "A 1024Wh LiFePO4 battery rated for 3000 cycles delivers about 3 megawatt-hours over its life, while a 512Wh pack at 6000 cycles delivers about the same. That is why a more expensive, smaller Jackery can be a fair deal over ten years. Look at both numbers and multiply them to compare real lifetime energy."
  },
  {
    "criterion": "Panel size in the bundle",
    "explanation": "A 100W panel recovers around 300 to 400Wh on a sunny day, a 40W panel about 120 to 160Wh. A bundle with a 40W panel on a 292Wh station needs two days to refill. Compare the panel watts with the battery size, and aim for a panel of at least a third of the battery watt-hours."
  },
  {
    "criterion": "AC outlet count and wattage",
    "explanation": "Two AC outlets let you run a laptop and a fan without a power strip, while one outlet needs an extension. Continuous output of 500W suits a fan, TV and lights, while 1000W suits a coffee maker or a small induction cooker for short bursts. Look for the continuous wattage and outlet count in the specs, not only the peak figure."
  },
  {
    "criterion": "Weight and carry",
    "explanation": "Moving from 500Wh to 1 kWh nearly doubles the weight: 14 lb for the Explorer 500 v2 against 27.73 lb for the STARYLINE. At 28 lb you want a handle and a short carry, ideally car to table. Read the lb figure and imagine lifting it to a picnic table."
  },
  {
    "criterion": "Charging speed",
    "explanation": "Wall charging takes 52 minutes to 80 percent on the Jackery but 7 to 8 hours on the 1000W EBL. Fast charging matters when you cannot count on a long sunny day, and it turns a drive into a top-up. Look for the 0 to 80 percent time and the solar input in watts."
  }
];

export const faq = [
  {
    "q": "Do I need a panel to use a solar generator?",
    "a": "No. Any station can recharge from a wall outlet or a car socket, and the panel adds off-grid recharging. The GRECELL 500W Panel Bundle and Jackery Solar Gen 300 Kit include one, while the STARYLINE 1000W and EBL 1000W need a separate one."
  },
  {
    "q": "How long will a 1 kWh unit run a fridge?",
    "a": "A small 12V or 110V cooler drawing 50W averages about 20 hours on 1000Wh after inverter losses, and a CPAP adds 40 to 60Wh a night. The STARYLINE 1000W and EBL 1000W suit this, and the Jackery 500 v2 lasts about half as long."
  },
  {
    "q": "Is 6000 cycles worth paying more for?",
    "a": "If you camp 40 weekends a year, 6000 cycles lasts decades, but 3000 cycles still lasts about 8 years. The Jackery Explorer 500 v2 earns its price if you want the lightest pack and the best warranty, not just cycles."
  },
  {
    "q": "Can I connect any panel to these?",
    "a": "Only if the panel's voltage and connector match the station. The EBL 1000W accepts 12 to 26V at up to 8A, and the STARYLINE 1000W accepts up to 300W. Match the open-circuit voltage to the input limit before plugging in, and use the supplied adapters."
  },
  {
    "q": "Can I use one while it charges?",
    "a": "Pass-through charging works on the EBL 1000W and most picks here, but it generates heat and some units reduce charging speed under load. Use the fan, keep vents clear and avoid covering the station in a car on hot days."
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
