export const guideSlug = "best-lifepo4-camping-batteries";
export const guideTitle = "6 Best LIFEPO4 Camping Batteries in 2026";
export const metaTitle = "Best LIFEPO4 Camping Batteries in 2026";
export const metaDescription = "Best LiFePO4 camping batteries compared on capacity, BMS protection, cold-weather charging and size for tents, vans and small solar setups.";
export const mainKeyword = "best lifepo4 camping batteries";
export const introParagraphs = [
  "LiFePO4 (lithium iron phosphate) batteries weigh a third of lead-acid for the same capacity and hold their voltage steadily, which makes them the standard for off-grid camp power. What separates one from another is capacity, the protection built into the BMS and what the battery does in the cold.",
  "Six LiFePO4 batteries made the list, from a 10Ah light-duty pack to a 300Ah bank. They were sorted by stated capacity, BMS rating, cold-weather behavior, app monitoring and the jobs each listing names."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/home-golden-hour-campsite.webp";
export const heroImageAlt = "Dome tent and hammock at a forest campsite at golden hour";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-lifepo4-camping-batteries-1",
    "rank": 1,
    "badge": "Best Cold Weather",
    "name": "12V 100Ah LiFePO4 Battery",
    "price": "$179.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51z6WGt3HJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FN3TVVD8?tag=rvgearlab-amz-20",
    "description": "The Super Empower packs 100Ah at 12.8V into a BCI Group 24 case that weighs 21.6 lb, with M8 terminals and Grade A cells. Charging pauses automatically once the pack falls under freezing.\n\nIt is the lightest 100Ah pick here and the one that states a charging cutoff at freezing, which protects the cells in a winter camp. Its Group 24 case drops into an existing box, unlike the larger VATRER 300Ah.\n\nIt suits campers swapping a tired lead-acid battery for lithium without rebuilding the box. It names solar, generator and alternator charging.",
    "specs": [
      "12.8V 100Ah, Group 24",
      "21.6 lb, M8 terminals",
      "Pauses charging below 32 F"
    ],
    "pros": [
      "Lightest 100Ah pick listed",
      "Charging cutoff protects cells in the cold",
      "Standard Group 24 drop-in size",
      "Works with solar, generator, alternator"
    ],
    "cons": [
      "Price above AGM options",
      "Needs a lithium charge profile"
    ],
    "bestFor": "Winter camping and lead-acid swaps",
    "take": "A cold-aware, lightweight 100Ah drop-in. A strong default for most van and trailer swaps.",
    "catch": "Charging stops near freezing, so plan a warm-up or a heated spot."
  },
  {
    "id": "best-lifepo4-camping-batteries-2",
    "rank": 2,
    "badge": "Best Big Bank",
    "name": "12.8V 300Ah Self-Heating LiFePO4 Lithium Battery with APP Monitoring",
    "price": "$569.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ntErG5hKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FKYCXTMP?tag=rvgearlab-amz-20",
    "description": "The VATRER is a 12.8V 300Ah LiFePO4 battery with over 5000 cycles at 100 percent depth of discharge, a self-heating function and app monitoring. It lists an enhanced BMS guarding against over-charge, over-discharge, high and low temperature, overcurrent and short circuits.\n\nIt holds three times the capacity of the 100Ah batteries here, which is roughly 3840Wh, and it is the only one with built-in self-heating. The app shows live status in a way the CHITOLI and Super Empower do not list.\n\nIt suits van and cabin owners running a fridge, lights and a laptop for days off-grid. The self-heating helps with winter charging.",
    "specs": [
      "12.8V 300Ah, 5000+ cycles",
      "Self-heating, app monitoring",
      "Enhanced BMS protection"
    ],
    "pros": [
      "Three times the capacity of 100Ah packs",
      "Built-in self-heating for cold charging",
      "App monitoring in real time",
      "About a third the weight of lead-acid"
    ],
    "cons": [
      "Highest price of the six",
      "Large size needs a planned install"
    ],
    "bestFor": "Long off-grid stays in a van or cabin",
    "take": "A big, smart bank with real cold-weather help. Right for serious off-grid use.",
    "catch": "It is large and heavy, so plan the mounting and cable size."
  },
  {
    "id": "best-lifepo4-camping-batteries-3",
    "rank": 3,
    "badge": "Best Cycle Data",
    "name": "CHITOLI 12V 100Ah TM LiFePO4 Battery",
    "price": "$152.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bRdVjy7kL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DY72MKZ2?tag=rvgearlab-amz-20",
    "description": "The CHITOLI is a Group 24 LiFePO4 battery rated at 100Ah with a 100A smart BMS. The cycle claims climb as depth shrinks, from 4000 plus at full discharge to 15,000 at 60 percent, and the listing adds a 10-year life and a refill in about 5 hours at 20A.\n\nIt states cycle counts at three discharge depths, which the BUKNUWO and VATRER do not break out. Against the Super Empower Group 24, it offers the same case size and a stated charge time.\n\nIt suits campers who want published lifespan data and a standard Group 24 swap. It also fits trolling motor use.",
    "specs": [
      "12V 100Ah Group 24",
      "100A smart BMS",
      "4000+ cycles at full depth"
    ],
    "pros": [
      "Cycle claims at three discharge depths",
      "Standard Group 24 case",
      "100A smart BMS protection",
      "Charges in about 5 hours at 20A"
    ],
    "cons": [
      "Needs a lithium-compatible charger",
      "No cold-charging cutoff is described"
    ],
    "bestFor": "Lead-acid swap with clear lifespan data",
    "take": "A solid, well-documented 100Ah battery in a standard case. Choose it for clear numbers.",
    "catch": "Charging at 14.6V and 20A needs a lithium profile."
  },
  {
    "id": "best-lifepo4-camping-batteries-4",
    "rank": 4,
    "badge": "Best Bluetooth Monitoring",
    "name": "BUKNUWO 12V 100Ah LiFePO4 Lithium Battery with Bluetooth",
    "price": "$142.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41yLVdD9T3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GHJJN1K5?tag=rvgearlab-amz-20",
    "description": "The BUKNUWO is a 12.8V 100Ah LiFePO4 battery weighing 22 pounds, with Bluetooth 5.0 monitoring on iOS and Android. It has a 100A BMS, Grade A cells, an ABS case that is dustproof and weather resistant and support for series and parallel expansion.\n\nIts Bluetooth app gives live battery status, which the CHITOLI 100Ah and Super Empower Group 24 do not list. It also states a 95 percent utilization rate against lead-acid.\n\nIt suits campers who want to watch state of charge from a phone. The expandable series and parallel options allow a bigger bank later.",
    "specs": [
      "12.8V 100Ah, 22 lb",
      "Bluetooth 5.0 app",
      "100A BMS, ABS case"
    ],
    "pros": [
      "Bluetooth app shows live status",
      "Supports series and parallel upgrades",
      "Weighs about 22 pounds",
      "100A BMS with five protections"
    ],
    "cons": [
      "Not a Group 24 drop-in",
      "Cold-charging behavior is not described"
    ],
    "bestFor": "Phone-monitored camp power",
    "take": "A smart 100Ah battery at a moderate price. Good if you like to see the numbers.",
    "catch": "No cold-charge protection is named, so check temperatures."
  },
  {
    "id": "best-lifepo4-camping-batteries-5",
    "rank": 5,
    "badge": "Best Light-Duty Pack",
    "name": "LIPULS 12.8V 15Ah LiFePO4 Lithium Battery",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YM6RhcXLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F9WPFMHL?tag=rvgearlab-amz-20",
    "description": "The LIPULS is a 12.8V 15Ah LiFePO4 battery with 192Wh of capacity, a built-in 20A BMS and Grade A cells. It weighs 3.38 lbs, lists 4000 or more cycles and a 10-year design life and connects up to 4 in series or parallel.\n\nIt is the best size for powering fans, LED lights, fish finders and small devices without carrying a large battery. It holds 192Wh, more than the Enegitech 10Ah and far lighter than the 100Ah options.\n\nIt suits tent campers and anglers who need quiet, light, safe power for small loads. Up to 4 batteries can be linked later.",
    "specs": [
      "12.8V 15Ah, 192Wh",
      "3.38 lbs, 20A BMS",
      "4000+ cycles, expandable"
    ],
    "pros": [
      "Only 3.38 pounds",
      "20A BMS with five protections",
      "Up to 4 batteries can link",
      "Runs fans, lights and fish finders"
    ],
    "cons": [
      "Small capacity for big loads",
      "20A BMS limits high-draw gear"
    ],
    "bestFor": "Tent lighting and small loads",
    "take": "A tiny pack that runs lights and small gear for a weekend. Not for fridges or heaters.",
    "catch": "A 20A BMS caps the load, so do not run big devices."
  },
  {
    "id": "best-lifepo4-camping-batteries-6",
    "rank": 6,
    "badge": "Best Budget Pack",
    "name": "12V 10Ah LiFePO4 Lithium Battery",
    "price": "$33.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41R6TDzOlOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DSPLSBG5?tag=rvgearlab-amz-20",
    "description": "The Enegitech is a 12V 10Ah LiFePO4 battery with Grade A cells, listed at 2000 or more cycles and a lifespan up to 10 years. Its compatibility list names Garmin Striker 4 and Humminbird HELIX 5 fish finders and APC UPS models using RBC17 batteries.\n\nIt costs the least of the six and is the smallest pack, at about half the energy of the LIPULS 15Ah. The listing says it suits small UPS backup under 100W, fish finders and lighting.\n\nIt suits campers who need a simple battery for a light or a fish finder. Do not connect it in series or parallel, as the listing warns.",
    "specs": [
      "12V 10Ah, 2000+ cycles",
      "Grade A LiFePO4 cells",
      "Fits fish finders and small UPS"
    ],
    "pros": [
      "Lowest price of the six",
      "Light and small for a backpack",
      "Compatibility list for fish finders and UPS",
      "Grade A cells with 10-year design life"
    ],
    "cons": [
      "Not for series or parallel use",
      "Only 10Ah, so it suits tiny loads"
    ],
    "bestFor": "Fish finders and small lights",
    "take": "A basic, inexpensive lithium pack for tiny loads. Do not use it as a camp power bank.",
    "catch": "The listing says not to connect these in series or parallel."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity and energy",
    "description": "Compared the stated Ah and, where useful, watt-hours."
  },
  {
    "title": "BMS protection",
    "description": "Looked at the BMS rating and the protections named."
  },
  {
    "title": "Cold behavior",
    "description": "Noted charging cutoffs, self-heating and temperature wording."
  },
  {
    "title": "Size and expansion",
    "description": "Considered case size, weight and series or parallel support."
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
    "subheading": "By Camp Setup",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Winter van or trailer swap",
          "Super Empower Group 24",
          "Pauses charging below 32 F"
        ],
        [
          "Long off-grid stays",
          "VATRER 300Ah",
          "300Ah with self-heating"
        ],
        [
          "Standard box swap with data",
          "CHITOLI 100Ah",
          "Group 24 case, cycle data"
        ],
        [
          "Phone-monitored 100Ah",
          "BUKNUWO 100Ah",
          "Bluetooth app"
        ],
        [
          "Tent lights and fans",
          "LIPULS 15Ah",
          "192Wh at 3.38 lbs"
        ],
        [
          "Fish finder or light",
          "Enegitech 10Ah",
          "Compatibility list, low cost"
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
          "$30 to $40",
          "Enegitech 10Ah or LIPULS 15Ah"
        ],
        [
          "$140 to $160",
          "BUKNUWO 100Ah or CHITOLI 100Ah"
        ],
        [
          "$170 to $600",
          "Super Empower Group 24 or VATRER 300Ah"
        ]
      ]
    }
  },
  {
    "subheading": "One big battery vs several small ones",
    "cards": [
      {
        "label": "One big battery",
        "text": "The VATRER 300Ah holds three times the 100Ah options and centralizes the BMS, wiring and app."
      },
      {
        "label": "Several small batteries",
        "text": "The BUKNUWO 100Ah and LIPULS 15Ah allow series and parallel growth, so you can add capacity as needs rise."
      }
    ],
    "note": "Most campers should default to a single 100Ah such as the Super Empower Group 24 unless they need multi-day runtime."
  },
  {
    "subheading": "By Monitoring and Protection",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Bluetooth app",
          "BUKNUWO 100Ah"
        ],
        [
          "Self-heating",
          "VATRER 300Ah"
        ],
        [
          "Cold-charge cutoff",
          "Super Empower Group 24"
        ],
        [
          "Cycle data at depths",
          "CHITOLI 100Ah"
        ]
      ]
    }
  },
  {
    "subheading": "For Winter Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A low-temperature charge cutoff or self-heating function"
      },
      {
        "label": "In this comparison",
        "text": "The VATRER 300Ah has built-in self-heating, and the Super Empower Group 24 pauses charging below 32 degrees F."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the VATRER 300Ah if you want self-heating, a big bank and app monitoring for multi-day off-grid use."
      },
      {
        "label": "Save if",
        "text": "Save with the Enegitech 10Ah or LIPULS 15Ah if your loads are small lights and fans, or a 100Ah such as the CHITOLI 100Ah for a standard swap."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Capacity and Wh math",
    "explanation": "Multiply Ah by 12.8V to get watt-hours: 100Ah is about 1280Wh, and 300Ah is about 3840Wh. Divide that by your load in watts to estimate runtime, then leave a margin. Check the Ah figure in the title and note whether the listing states a usable capacity."
  },
  {
    "criterion": "BMS current rating",
    "explanation": "The built-in battery management system sets the maximum continuous current, such as 20A or 100A. A 15Ah pack with a 20A BMS cannot run a 300W load, since that would pull around 25A at 12V. Match the BMS rating to your largest load, and check it in the listing."
  },
  {
    "criterion": "Charging below freezing",
    "explanation": "Lithium iron phosphate cells can be damaged by charging below 32 degrees F, so a BMS cutoff or a self-heating function protects them. Without it, charging stops or, in a poorly protected battery, harms the cells. Look for low-temperature charge protection in the listing."
  },
  {
    "criterion": "Chemistry and charger match",
    "explanation": "A lithium battery wants a lithium charge profile around 14.4V to 14.6V, not a lead-acid profile with equalization. Many solar controllers and chargers have a lithium setting. Check your charger before buying, and use correctly sized wire and a fuse."
  },
  {
    "criterion": "Cycles and warranty claims",
    "explanation": "A claim of 4000 or 5000 cycles describes a depth of discharge, often 100 percent, and cycle counts rise at shallower depths. Compare like with like. Look for the depth stated and the warranty term in the listing."
  }
];

export const faq = [
  {
    "q": "Can I swap a lead-acid battery for LiFePO4?",
    "a": "Often yes if the case size and charger allow. Group 24 batteries such as the Super Empower and CHITOLI are sized for that swap. Update the charger to a lithium profile."
  },
  {
    "q": "Is it safe to charge LiFePO4 in the cold?",
    "a": "Not below freezing unless the battery protects itself. The Super Empower Group 24 pauses charging below 32 degrees F, and the VATRER 300Ah has self-heating. Check the listing for cold behavior."
  },
  {
    "q": "Is a 300Ah battery worth it over 100Ah?",
    "a": "It is worth it for multi-day use with a fridge. A single 100Ah, about 1280Wh, runs lights, a fan and phone charging. Weight and cost scale with capacity."
  },
  {
    "q": "How do I connect these safely?",
    "a": "Use wire sized for the BMS current, add a fuse near the battery and tighten terminals to the stated torque. Never connect packs of different capacity in series or parallel."
  },
  {
    "q": "How do I store LiFePO4 over winter?",
    "a": "Store at partial charge in a cool, dry place and check it every few months. Avoid long storage when full or empty."
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
