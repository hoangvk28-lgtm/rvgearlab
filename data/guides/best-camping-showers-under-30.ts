export const guideSlug = "best-camping-showers-under-30";
export const guideTitle = "5 Best Camping Showers Under 30 in 2026";
export const metaTitle = "Best Camping Showers Under 30 in 2026";
export const metaDescription = "Best camping showers under $30: three rechargeable bucket-pump kits and two solar bags compared on runtime, spray modes and pressure for camp rinsing.";
export const mainKeyword = "best camping showers under 30";
export const introParagraphs = [
  "Thirty dollars crosses the line from gravity bags to rechargeable pump showers. Three battery kits at about $23 to $27 give real pressure from a bucket of water, while two solar bags at $10 to $14 stay as the no-power fallback.",
  "They were compared on rated runtime, battery size, spray modes, waterproofing and kit contents. The ranking rewards the shower that gives the best pressure and run time for the money, and the solar bags are scored as the cheap, power-free alternative."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/furniture-chairs-campfire-night.webp";
export const heroImageAlt = "Two people in folding chairs around a campfire in autumn woods";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-camping-showers-under-30-1",
    "rank": 1,
    "badge": "Best Value Under $30",
    "name": "Portable Shower for Camping",
    "price": "$22.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41qnslMXD7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H7BC6DQK?tag=rvgearlab-20",
    "description": "This pump shower pairs a 7800mAh battery and a copper-core motor with up to 150 minutes of steady flow. An LED display shows remaining battery power and real-time water temperature from 32F to 140F, and the kit has three spray modes of low, medium and high.\n\nAt about $23 it costs $4 less than the 180-minute model next to it and is the only pump in the group that shows the water temperature. The pump is IPX8 waterproof and sits on a base with four anti-slip suction cups.\n\nIt suits campers who want a pump shower that tells them when the water is warm enough. At 1.98 lb it fits a daypack.",
    "specs": [
      "7800mAh, up to 150 minutes",
      "LED battery and temperature display",
      "IPX8 pump, 1.98 lb"
    ],
    "pros": [
      "LED shows battery and water temperature",
      "Three spray modes",
      "Suction base grips the bucket",
      "Light at 1.98 lb"
    ],
    "cons": [
      "150 minutes is shorter than the 180-minute model",
      "Needs a bucket and water"
    ],
    "bestFor": "Warm rinses by bucket",
    "take": "The pick with the most feedback and the lowest pump price.",
    "catch": "You supply the bucket, and the water stays whatever temperature it started."
  },
  {
    "id": "best-camping-showers-under-30-2",
    "rank": 2,
    "badge": "Best Runtime",
    "name": "Portable Shower for Camping",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41nCsz+lkjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H7R5CLKY?tag=rvgearlab-20",
    "description": "This kit has a 7800mAh battery and an upgraded motor rated for up to 180 minutes per charge, charging over Type-C from a power bank or car charger. The IPX8 pump submerges in a bucket, basin or stream and runs quietly, and the shower head has three spray modes.\n\nAt about $27 it costs $4 more than the LED model and adds 30 minutes of runtime and a quieter motor. It lacks the LED temperature readout, and it comes in a mesh bag with the full kit.\n\nIt suits groups and long stays where the shower gets daily use. Type-C charging means a power bank can top it up on the road.",
    "specs": [
      "7800mAh, up to 180 minutes",
      "Type-C, IPX8 submersible pump",
      "Three spray modes, mesh bag"
    ],
    "pros": [
      "Longest rated runtime here",
      "Type-C charging from a power bank",
      "Quiet motor in a submersible pump",
      "Mesh storage bag included"
    ],
    "cons": [
      "No temperature display",
      "Costs more than the LED model"
    ],
    "bestFor": "Groups and long stays",
    "take": "Choose it when a single charge must last a whole weekend of showers.",
    "catch": "No temperature display, so test the water yourself."
  },
  {
    "id": "best-camping-showers-under-30-3",
    "rank": 3,
    "badge": "Best Complete Kit",
    "name": "Wisebean Portable Shower Rechargeable Water Pump for Camping Travel Outdoor",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41MBMuwcv+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GQXYR84M?tag=rvgearlab-20",
    "description": "The Wisebean kit gives a built-in rechargeable pump rated for 60 to 90 minutes, a 2 meter hose, a shower head and a pressure nozzle. It runs at 20W with waterproof construction and fits into a carry pouch.\n\nAt about $27 it costs the same as the 180-minute model and runs 90 to 120 minutes shorter on a charge. The pressure nozzle adds a second use for rinsing gear, pets or a dirty pot.\n\nIt suits campers who want one kit for showers and rinsing gear. The 2 meter hose lets you stand away from the bucket.",
    "specs": [
      "60 to 90 minute runtime",
      "2 meter hose, pressure nozzle",
      "20W pump, carry pouch"
    ],
    "pros": [
      "Pressure nozzle rinses gear and pets",
      "2 meter hose gives freedom",
      "Everything fits in one pouch",
      "Safe low-voltage pump"
    ],
    "cons": [
      "Shorter runtime than the 7800mAh kits",
      "No temperature readout"
    ],
    "bestFor": "Gear and pet rinsing",
    "take": "A tidy kit for campers who rinse more than themselves.",
    "catch": "Runs 60 to 90 minutes per charge, the shortest of the pump kits."
  },
  {
    "id": "best-camping-showers-under-30-4",
    "rank": 4,
    "badge": "Best No-Power Backup",
    "name": "DkOvn 2 Pack Solar Shower Bag",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-+9UeMTaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BPG2Z6NL?tag=rvgearlab-20",
    "description": "The DkOvn set is a pair of 20L solar bags with shutoff valves and hook slings, a backup that needs only water and daylight to give a gravity-fed rinse. Each bag holds enough for two short showers.\n\nAt about $14 for two bags it costs half the price of a pump kit and needs no battery or charger. The pump kits above deliver more pressure, while this pair works anywhere the sun shines.\n\nIt suits campers who want a power-free backup or a second shower for a partner. The bags pack small.",
    "specs": [
      "Two 5 gallon bags",
      "On/off switch, hook sling",
      "No battery needed"
    ],
    "pros": [
      "Two bags for one low price",
      "No battery or charger needed",
      "Packs small and light",
      "Hangs from a branch or rack"
    ],
    "cons": [
      "Water only warms with sun",
      "Gravity flow means low pressure"
    ],
    "bestFor": "Power-free backup",
    "take": "A cheap fallback that works when batteries die.",
    "catch": "Low pressure, and water stays cool on cloudy days."
  },
  {
    "id": "best-camping-showers-under-30-5",
    "rank": 5,
    "badge": "Best Cheapest Bag",
    "name": "ailker Solar Shower Bag for Camp",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JsTqO4zlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F6CKF9ML?tag=rvgearlab-20",
    "description": "The ailker is a 5 gallon (20L) bag good for about three showers, with an on/off switch, a removable hose and a hanging hook sling. Under direct sun it heats water to 105F (40C) in about 3 hours.\n\nAt about $10 it is the cheapest pick in the group and costs a third of a pump kit. The DkOvn 2-Pack gives a second bag for $4 more.\n\nIt suits first-time campers and beach trips on a very tight budget. A removable hose makes cleaning and drying easy.",
    "specs": [
      "5 gallon, about three showers",
      "105F in 3 hours of sun",
      "On/off switch, removable hose"
    ],
    "pros": [
      "Lowest price in this guide",
      "On/off switch saves water",
      "Removable hose is easy to store",
      "Hook sling for hanging"
    ],
    "cons": [
      "Lower stated peak temperature",
      "No temperature indicator"
    ],
    "bestFor": "Tight budgets",
    "take": "The cheapest way to get a warm rinse in sunny weather.",
    "catch": "Peaks near 105F, which is warm rather than hot."
  }
];

export const howWeEvaluated = [
  {
    "title": "Runtime per charge",
    "description": "Rated minutes from 60 to 180 were compared against battery size."
  },
  {
    "title": "Spray and pressure",
    "description": "Spray modes and nozzles were compared."
  },
  {
    "title": "Waterproofing",
    "description": "IPX8 pumps were separated from gravity bags."
  },
  {
    "title": "Kit contents",
    "description": "Hoses, pouches and chargers were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick sits at or under $30, and the top pick gives the most useful pump features per dollar."
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
    "subheading": "By trip",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Warm rinses, want feedback",
          "Pump Shower 7800mAh LED",
          "LED shows temperature and battery."
        ],
        [
          "Groups, long weekend",
          "Pump Shower 7800mAh 180min",
          "180 minutes per charge."
        ],
        [
          "Rinse gear and pets",
          "Wisebean Pump Shower",
          "Pressure nozzle and 2 meter hose."
        ],
        [
          "Sun, no power",
          "DkOvn 2-Pack",
          "Two bags, no battery."
        ],
        [
          "Cheapest warm rinse",
          "ailker 20L",
          "About $10 with an on/off valve."
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
          "ailker 20L or DkOvn 2-Pack"
        ],
        [
          "$20 to $30",
          "Pump Shower 7800mAh LED or Pump Shower 7800mAh 180min"
        ],
        [
          "$20 to $30",
          "Wisebean Pump Shower"
        ]
      ]
    }
  },
  {
    "subheading": "Pump vs solar bag",
    "cards": [
      {
        "label": "Pump",
        "text": "The Pump Shower 7800mAh LED, Pump Shower 7800mAh 180min and Wisebean Pump Shower give steady pressure from any bucket, at the cost of a charge."
      },
      {
        "label": "Solar bag",
        "text": "The DkOvn 2-Pack and ailker 20L need no charger and heat water in the sun, with gentler flow."
      }
    ],
    "note": "Take the Pump Shower 7800mAh LED for shared camps and the ailker 20L for solo sunny trips."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $10",
          "ailker 20L"
        ],
        [
          "About $14, two bags",
          "DkOvn 2-Pack"
        ],
        [
          "About $23",
          "Pump Shower 7800mAh LED"
        ],
        [
          "About $27, runtime",
          "Pump Shower 7800mAh 180min"
        ],
        [
          "About $27, nozzle",
          "Wisebean Pump Shower"
        ]
      ]
    }
  },
  {
    "subheading": "For a family weekend camp specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for 150 minutes or more of runtime, a spray mode for kids and a bucket-friendly base."
      },
      {
        "label": "In this comparison",
        "text": "The Pump Shower 7800mAh 180min runs 180 minutes, and the Pump Shower 7800mAh LED shows temperature for kids."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you share the shower: the Pump Shower 7800mAh 180min adds 30 minutes of runtime over the LED model for about $4 more."
      },
      {
        "label": "Save if",
        "text": "Save if you are solo and the sun is out: the ailker 20L at about $10 or the DkOvn 2-Pack at about $14 is enough for rinsing."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Runtime and battery size",
    "explanation": "A 7800mAh battery runs a small pump for 150 to 180 minutes, which is enough for 15 to 30 short showers at 5 to 10 minutes each. A 60 to 90 minute rating suits a weekend. Match the rating to your group, and charge before leaving home."
  },
  {
    "criterion": "Pump pressure versus gravity",
    "explanation": "A pump gives a steady spray you can aim, while a gravity bag drips from a hose. Pumps need a battery and a bucket, and bags need sun and a branch. Pick a pump if you share a camp and a bag if you travel light."
  },
  {
    "criterion": "Waterproof rating",
    "explanation": "An IPX8 pump can be fully submerged in a bucket or stream, which protects it from splashes, drops and a tipped bucket. A lower rating survives only spray and can fail if the pump sits in water. Keep the charging port dry, never submerge the cable end, and check the rating before you buy."
  },
  {
    "criterion": "Charging method",
    "explanation": "Type-C charging works with a power bank, a car charger or a wall plug, so you can top up the pump on the drive to camp. Micro-USB models need an older cable that many travelers no longer carry. Check the port type before you pack, and bring a short cable that fits the pump."
  },
  {
    "criterion": "Spray modes",
    "explanation": "Three modes let you choose a gentle rinse for kids, a balanced shower or a strong flow for rinsing gear. A low mode saves battery and stretches a 5 gallon bucket across more showers. Test each mode once at home so you know which one suits your water supply and your patience."
  },
  {
    "criterion": "Water temperature",
    "explanation": "A pump does not heat water, so the shower is only as warm as the bucket you fill. A display like the one on the Pump Shower 7800mAh LED shows when the water is too cold or too hot. Pre-warm water on a stove, mix it to about 100F, and test it on your forearm before you rinse."
  }
];

export const faq = [
  {
    "q": "Does a pump shower heat the water?",
    "a": "No. A pump moves water from a bucket through the shower head and does not heat it. Pre-warm water on a stove or in a kettle, then pour it into the bucket. The LED model shows the temperature so you can check."
  },
  {
    "q": "What mistake do campers make with pump showers?",
    "a": "Many run the pump dry, which can burn out the motor. Keep the pump submerged while it runs, and stop when the bucket is nearly empty. The suction base on the LED model helps keep it in place."
  },
  {
    "q": "Is a pump shower worth it over a solar bag?",
    "a": "If you share a camp, yes. A pump delivers steady pressure for about 150 to 180 minutes per charge, while a solar bag gives one or two showers per fill. A solar bag is cheaper and needs no charging."
  },
  {
    "q": "How do I charge a camping shower pump?",
    "a": "Plug a Type-C cable into the pump and a power bank, car charger or wall adapter, and charge until the indicator shows full. Keep the port dry while charging. Top it up before every trip."
  },
  {
    "q": "How should I clean and store a camp shower pump?",
    "a": "Rinse the pump and hose with clean water, let them dry, and store them in the mesh bag with the battery about half charged. Keep the kit out of hot cars. Recharge every few months."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Showers",
    "href": "/camp-furniture/best-camping-showers"
  },
  {
    "title": "Best Camping Tables",
    "href": "/camp-furniture/best-camping-tables"
  },
  {
    "title": "Best Camping Shower With Heater",
    "href": "/camp-furniture/best-camping-shower-with-heater"
  },
  {
    "title": "Best Camping Shower With Hot Water",
    "href": "/camp-furniture/best-camping-shower-with-hot-water"
  }
];
