export const guideSlug = "best-portable-water-heater-for-rv";
export const guideTitle = "Best Portable Water Heaters for RV";
export const metaTitle = "Best Portable Water Heaters for RV (2026)";
export const metaDescription = "Six portable water heaters for RV and camp showers, from propane tankless units at 1.32 to 1.58 GPM to a battery shower, compared on flow, safety and price.";
export const mainKeyword = "best portable water heater for rv";
export const introParagraphs = [
  "A portable water heater earns its keep in the places the RV's own tank cannot reach: the outdoor shower on a campsite, a cabin or a boat, a dry-camp weekend where you want to rinse off without burning through the fresh water tank and the battery, or a rig whose built-in heater has quit. The popular answer is a small propane tankless unit that fires up when water flows and stops when it does not, which means no tank to fill and no waiting for a preheat. Most of the units here weigh about 10 lb and run from a standard 20 lb propane tank.",
  "Three numbers do most of the explaining. Flow, in gallons per minute, tells you how many people can shower at once and how warm the water will feel, because the faster water moves through the burner the less it warms. Starting pressure tells you whether the heater lights from a small 12V pump or a gravity-fed bag, with listed minimums between 2.5 and 7 psi. The safety list tells you what stops the flame if flow drops or the unit gets too hot. One more option in this guide is an electric immersion heater, which solves a different problem entirely.",
  "We evaluated six heaters by flow and burner output, by the water pressure each needs to start, by the safety features and certifications named, and by the parts supplied with each unit. Prices span about $68 to $160. Several listings share the same body and nearly the same copy, so we call out where two entries look alike and rank on documented details."
];
export const lastUpdated = "2026-11-11";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41MwQfVMr-L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-portable-water-heater-for-rv-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "VANSTON 6L 1.45 GPM Propane Tankless Heater",
    "price": "$119.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41MwQfVMr-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HCP3363Y?tag=rvgearlab-amz-20",
    "description": "The VANSTON is a 6L tankless propane heater producing up to 37,500 BTU per hour and 1.45 GPM of near-instant hot water, with an adjustable temperature and an operating pressure range from 7 psi up to 145 psi. It weighs about 9 lb with a folding handle, and its six safety protections include overheat, low-flow, dry-fire and freeze protection plus a flame failure device. It costs about $120.\n\nCompared with the LiberLive just below it, the VANSTON has a broader stated pressure range and ships with a complete accessory pack that includes a shower head, a gas regulator, connectors and mounting hardware. The LiberLive offers a little more output, but the VANSTON is the lighter of the two by about 0.7 lb and gives you everything needed in the box. Against the CAMPLUX below, it trades the lower 3 psi starting pressure for a higher flow and a more generous kit.\n\nIt suits campers who run a standard garden-hose hookup or a stronger 12V pump, anyone who wants to get a shower going without hunting for fittings, and families who want stable temperature on a freeze-prone shoulder-season trip.",
    "specs": [
      "6L, 1.45 GPM, up to 37,500 BTU/hr",
      "Works from 7 psi up to 145 psi",
      "Six-point safety system with freeze protection"
    ],
    "pros": [
      "Complete accessory pack is in the box",
      "Wide 7 to 145 psi working range",
      "Freeze protection and flame failure device",
      "About 9 lb with a folding handle"
    ],
    "cons": [
      "Needs 7 psi, so a gravity bag may not light it",
      "1.45 GPM runs one shower at a time"
    ],
    "bestFor": "Campers who want a complete kit that works across a wide range of water pressure"
  },
  {
    "id": "best-portable-water-heater-for-rv-2",
    "rank": 2,
    "badge": "Best for Temperature Control",
    "name": "LiberLive 6L 1.58 GPM Propane Tankless Heater",
    "price": "$119.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31VDFwisqDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G2PQ196G?tag=rvgearlab-amz-20",
    "description": "The LiberLive is a 6L tankless propane heater rated at 41,000 BTU per hour and 1.58 GPM, with an LED digital display that shows the water temperature so you can keep it from running too hot or too cold. The body measures 11.8 by 5.1 by 17.3 inches, weighs 9.7 lb and carries a folding handle, and the listing says it is CSA certified to Canadian and US safety standards with six protections. It costs about $120.\n\nCompared with the VANSTON above it, the LiberLive adds the display and a higher heat output, which means it can warm a faster flow of water, and the price is the same. Against the two Amzgachfktch units below it, the LiberLive has the display and a lighter body, as those heaters weigh about 12 lb and have a 40,000 BTU rating. The six protections include overheat, low water flow and dry burn, among others.\n\nIt works for families who like to dial in a comfortable temperature, hunters and anglers who clean up at camp, and anyone who wants a readout instead of guessing.",
    "specs": [
      "6L, 1.58 GPM, 41,000 BTU/hr",
      "LED display with water temperature",
      "11.8 x 5.1 x 17.3 inch body, 9.7 lb"
    ],
    "pros": [
      "LED display shows real-time temperature",
      "Highest output in the group at 41,000 BTU",
      "Lighter than the other 1.58 GPM units",
      "CSA certified with six safety protections"
    ],
    "cons": [
      "Starting pressure is not in the main bullets",
      "Same price as the VANSTON without the accessory pack"
    ],
    "bestFor": "Campers who want a digital readout and the highest flow in a compact body"
  },
  {
    "id": "best-portable-water-heater-for-rv-3",
    "rank": 3,
    "badge": "Best for Low-Pressure Water Systems",
    "name": "CAMPLUX 5L 1.32 GPM Propane Tankless Heater",
    "price": "$159.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31DeCldygFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01CJPU6JI?tag=rvgearlab-amz-20",
    "description": "The CAMPLUX is a 5L tankless propane heater delivering 1.32 GPM that lights with just 3.0 psi of water pressure, which means a small 12V pump or a gravity-fed supply can drive it. The ignition runs from two D-size batteries, so it needs no electricity from the RV, and the unit weighs about 10 lb with a folding handle. The listing says it is CSA approved with six-in-one protection including overheat and anti-flame checks. It costs about $160, the highest price here.\n\nCompared with the VANSTON above it, the CAMPLUX starts at 3.0 psi against 7 psi, which is the reason to pay more if your water comes from a small pump, while the VANSTON offers more flow and a bigger kit. Against the Amzgachfktch units below it, the CAMPLUX is a 5L unit at 1.32 GPM, with the wall bracket and dolly cart sold as separate accessories for hanging or wheeling it.\n\nIt makes sense for remote cabins, van-life setups, off-grid camps and anyone using a 12V pump who needs a heater that lights from a trickle.",
    "specs": [
      "5L, 1.32 GPM, lights at 3.0 psi",
      "Ignition from two D batteries",
      "About 10 lb, CSA approved"
    ],
    "pros": [
      "Lights at only 3.0 psi of pressure",
      "Works with a small 12V pump or gravity feed",
      "No RV electricity needed for ignition",
      "Folding handle and CSA approval"
    ],
    "cons": [
      "Highest price in this comparison",
      "Lowest flow among the propane units"
    ],
    "bestFor": "Off-grid campers running a small 12V pump or a gravity-fed supply"
  },
  {
    "id": "best-portable-water-heater-for-rv-4",
    "rank": 4,
    "badge": "Best Budget Propane Unit",
    "name": "Amzgachfktch 6L 1.58 GPM Heater 40,000 BTU Kit",
    "price": "$107.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31cx2IgS8jL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F3BPXB6T?tag=rvgearlab-amz-20",
    "description": "This Amzgachfktch is a 6L tankless propane water heater delivering 1.58 GPM at up to 40,000 BTU per hour, activating at a 2.5 psi minimum starting pressure, and measuring 11.8 by 5.3 by 17.3 inches at about 12 lb. It runs from a standard 20 lb propane tank with electronic ignition powered by two D-cell batteries and lists a CSA approved regulator and six protections. It costs about $108.\n\nCompared with the other Amzgachfktch listing below it, this one is about $10 cheaper with the same 6L body, flow and pressure requirement, and its copy mentions an included accessory. Against the LiberLive above it, this one lowers the starting pressure to 2.5 psi and saves about $12, and it adds about two pounds with no digital display. The listing describes the heater as needing no preheat time and delivering hot water as soon as the tap opens.\n\nIt suits cost-conscious RVers, hunters and cabin owners who want an instant propane heater and are comfortable with a plain control layout.",
    "specs": [
      "6L, 1.58 GPM, 40,000 BTU/hr",
      "Lights at 2.5 psi, two D-cell ignition",
      "11.8 x 5.3 x 17.3 inches, about 12 lb"
    ],
    "pros": [
      "Lowest starting pressure at 2.5 psi",
      "Lowest price among 1.58 GPM propane units",
      "Runs from a standard 20 lb propane tank",
      "CSA approved regulator and six protections"
    ],
    "cons": [
      "About 2 lb heavier than the LiberLive",
      "No digital temperature display"
    ],
    "bestFor": "Budget campers who want a 6L, 1.58 GPM propane heater at about $108"
  },
  {
    "id": "best-portable-water-heater-for-rv-5",
    "rank": 5,
    "badge": "Same Heater at a Higher Price",
    "name": "Amzgachfktch 6L 1.58 GPM Heater 40,000 BTU",
    "price": "$117.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YMgOjDbhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D4JVVGGW?tag=rvgearlab-amz-20",
    "description": "This second Amzgachfktch listing describes a 6L, 1.58 GPM outdoor propane tankless heater at a maximum 40,000 BTU per hour, with the same 11.8 by 5.3 by 17.3 inch body, 12 lb weight and 2.5 psi minimum starting pressure. It uses a standard 20 lb propane tank, an electronic ignition powered by two D cells and a CSA approved regulator, and it costs about $118.\n\nCompared with the $108 listing above it, the two read almost identically on flow, output and pressure, so the extra $10 buys no documented difference, and the choice comes down to which seller you prefer. Against the BSEED below it, this heater is a gas appliance that heats water as it flows, rather than an electric immersion element in a bucket. The listing says it is suited to off-grid use, RVs, hunting, poolside use and cabins.\n\nIt makes sense only if the other listing is unavailable or you favor this seller, and for campers who want a propane heater in this class with a documented starting pressure and a standard 20 lb tank connection.",
    "specs": [
      "6L, 1.58 GPM, 40,000 BTU/hr",
      "Needs 2.5 psi minimum starting pressure",
      "Runs on a standard 20 lb propane tank"
    ],
    "pros": [
      "1.58 GPM flow for a good shower",
      "Standard 20 lb tank connection",
      "CSA approved regulator",
      "Compact 11.8 x 5.3 x 17.3 inch body"
    ],
    "cons": [
      "Costs about $10 more than the near-identical listing",
      "About 12 lb with no digital display"
    ],
    "bestFor": "Shoppers who prefer this listing's wording and are comparing sellers"
  },
  {
    "id": "best-portable-water-heater-for-rv-6",
    "rank": 6,
    "badge": "Best Non-Propane Option",
    "name": "BSEED Immersion Heater Portable Shower",
    "price": "$67.79",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51kgbCVn5rL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GF29G797?tag=rvgearlab-amz-20",
    "description": "The BSEED is a portable camping shower that pairs a 2000W stainless steel immersion water heater with an 8000mAh rechargeable battery that charges in about 3 hours and runs the pump for 120 to 180 minutes. It includes a large foldable bucket, an LED display that shows battery level and water temperature, five water flow modes and a shower head with four spray modes. It costs about $68, the lowest price here.\n\nCompared with the propane tankless units above it, the BSEED works the opposite way: you heat a bucket of water with the immersion element, then pump it through the shower head, so there is no open flame and no gas tank. Against the CAMPLUX at the top, it costs less than half as much and weighs less, and the quiet pump and suction cup base keep it stable. The 2000W element is an electric load, so plan how you will power it, with shore power, an inverter or a generator.\n\nIt suits pet baths, quick rinses at a tent camp, vehicle washing and anyone who wants hot water without carrying propane. It is not a flow-through shower for a whole family.",
    "specs": [
      "2000W stainless immersion heater",
      "8000mAh battery, 120 to 180 minutes of pump",
      "Foldable bucket, five flow modes"
    ],
    "pros": [
      "No gas, no flame, no propane tank",
      "Rechargeable pump and an LED temperature display",
      "Lowest price at about $68",
      "Works for pets, vehicles and tent camps"
    ],
    "cons": [
      "Heating a bucket takes time and power",
      "Not a continuous hot water supply for a family"
    ],
    "bestFor": "Campers who want an electric, battery-pumped bucket shower with no gas at all"
  }
];

export const howWeEvaluated = [
  {
    "title": "Flow and output",
    "description": "We compared stated flow from 1.32 to 1.58 GPM and burner output from 37,500 to 41,000 BTU per hour, since these set how warm the water feels and how many people can use it."
  },
  {
    "title": "Starting pressure and pump compatibility",
    "description": "A heater that needs 7 psi will not light from a gravity bag, while one that starts at 2.5 or 3.0 psi will. We looked for stated minimums and for the pressure range each unit supports."
  },
  {
    "title": "Safety systems",
    "description": "We credited listings that name overheat, low-flow, dry-fire and freeze protection and a flame failure device, and noted CSA claims. Propane heaters in this class are intended for outdoor use."
  },
  {
    "title": "What is in the box",
    "description": "A shower head, gas regulator, connectors and mounting hardware save a trip to the store, so we compared the kits and accessories."
  },
  {
    "title": "Weight, size and price",
    "description": "Weights run from about 9 to 12 lb and prices from about $68 to $160, and we noted where two listings share the same body at different prices."
  }
];

export interface HowToChooseSection {
  subheading: string; intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Water Supply and Pressure",
    "intro": "The pressure your system delivers decides which heaters can light at all, so start there.",
    "table": {
      "headers": [
        "Your water supply",
        "Recommended pick",
        "Why it fits"
      ],
      "rows": [
        [
          "Gravity bag or very small pump",
          "CAMPLUX 5L 1.32 GPM Propane Tankless Heater",
          "Lights at only 3.0 psi"
        ],
        [
          "12V pump delivering a modest 2.5 to 5 psi",
          "Amzgachfktch 6L 1.58 GPM Heater 40,000 BTU Kit",
          "Activates at a 2.5 psi starting pressure"
        ],
        [
          "Garden hose or a stronger pump",
          "VANSTON 6L 1.45 GPM Propane Tankless Heater",
          "Works from 7 psi up to 145 psi"
        ],
        [
          "Pressurized hookup with a need for temperature control",
          "LiberLive 6L 1.58 GPM Propane Tankless Heater",
          "An LED display shows the water temperature"
        ],
        [
          "No pressure at all, just a bucket",
          "BSEED Immersion Heater Portable Shower",
          "A battery pump moves bucket water through the shower head"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "The six options run from about $68 to $160. This table uses the real prices on this page.",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick",
        "What you get"
      ],
      "rows": [
        [
          "Under $70",
          "BSEED Immersion Heater Portable Shower",
          "An electric bucket shower with a rechargeable pump for $67.79"
        ],
        [
          "About $108",
          "Amzgachfktch 6L 1.58 GPM Heater 40,000 BTU Kit",
          "The lowest-priced 1.58 GPM propane heater at $107.99"
        ],
        [
          "About $120",
          "VANSTON 6L 1.45 GPM Propane Tankless Heater",
          "A kit with shower head and regulator for $119.99, or the LiberLive at $119.99 with a display"
        ],
        [
          "About $160",
          "CAMPLUX 5L 1.32 GPM Propane Tankless Heater",
          "A 3.0 psi start for small pumps at $159.99"
        ]
      ]
    }
  },
  {
    "subheading": "Propane Tankless vs Electric Bucket Heater",
    "intro": "The two ways to heat water on the road are different in almost every respect, so they are worth separating clearly.",
    "cards": [
      {
        "label": "Propane tankless heater",
        "text": "A flow-through burner heats water as it passes and keeps going as long as the tank lasts, which suits showers and sinks for several people. It must be used outdoors with a 20 lb tank. The VANSTON 6L, LiberLive 6L, CAMPLUX 5L and both Amzgachfktch 6L heaters are in this group."
      },
      {
        "label": "Electric immersion bucket heater",
        "text": "An immersion element heats a bucket of water, and a battery pump delivers it, so there is no flame or gas. It needs power to heat and is limited to a bucket of water at a time. The BSEED Immersion Heater Portable Shower is the pick in this group."
      }
    ],
    "note": "Choose a propane tankless heater for showers and sinks, and the BSEED for small jobs such as pet baths and quick rinses."
  },
  {
    "subheading": "By Flow and Number of Users",
    "intro": "A second axis is how many people need hot water and how quickly.",
    "table": {
      "headers": [
        "Use",
        "Recommended pick",
        "Reason"
      ],
      "rows": [
        [
          "Strongest flow for a longer shower",
          "LiberLive 6L 1.58 GPM Propane Tankless Heater",
          "1.58 GPM at 41,000 BTU per hour"
        ],
        [
          "Balanced flow with a complete kit",
          "VANSTON 6L 1.45 GPM Propane Tankless Heater",
          "1.45 GPM with a shower head and regulator"
        ],
        [
          "Single user on a small pump",
          "CAMPLUX 5L 1.32 GPM Propane Tankless Heater",
          "1.32 GPM at a 3.0 psi start"
        ],
        [
          "Budget 1.58 GPM flow",
          "Amzgachfktch 6L 1.58 GPM Heater 40,000 BTU Kit",
          "The same flow for $107.99"
        ],
        [
          "Pet and vehicle washing",
          "BSEED Immersion Heater Portable Shower",
          "Five flow modes from a bucket"
        ]
      ]
    }
  },
  {
    "subheading": "For Off-Grid Camping Specifically",
    "intro": "Off-grid use puts the most weight on starting pressure and independence from RV power.",
    "cards": [
      {
        "label": "Look for",
        "text": "A low starting pressure of 3 psi or less, ignition from D batteries instead of RV power, a folding handle, and safety protections that include low-flow and flame failure, as on the VANSTON 6L."
      },
      {
        "label": "In this comparison",
        "text": "The CAMPLUX 5L at 3.0 psi and the Amzgachfktch units at 2.5 psi light from small pumps and use D-cell ignition, while the VANSTON needs 7 psi."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "The price spread is about $90, and what it buys is pressure flexibility and a better kit.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You use a small pump, want a digital readout or want a full accessory pack. The CAMPLUX 5L at $159.99, the LiberLive 6L at $119.99 and the VANSTON 6L at $119.99 each add one of those."
      },
      {
        "label": "Save if",
        "text": "You need an occasional warm rinse. The Amzgachfktch 6L Heater Kit at $107.99 and the BSEED Immersion Heater at $67.79 handle that for less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Flow rate in gallons per minute",
    "explanation": "Flow tells you how much hot water you get each minute, and the heater can only add so much heat to a given flow, so higher flow means cooler water on a cold day. A 1.5 GPM heater handles one shower well, while two sinks and a shower together will strain it. Look for the GPM figure in the title or bullets and compare it to how many fixtures you will run at once."
  },
  {
    "criterion": "Starting pressure and pump match",
    "explanation": "A tankless heater needs a minimum water pressure before its flow sensor lights the burner, and that minimum ranges here from 2.5 psi to 7 psi. A gravity bag or a small pump may not reach 7 psi, and the heater simply will not fire. Look for the minimum starting pressure, and match it to your pump's rated output."
  },
  {
    "criterion": "Burner output and temperature rise",
    "explanation": "BTU per hour is the heat the burner can produce, and it sets how far the water temperature can rise at a given flow. A 37,500 or 41,000 BTU unit raises cold water a good deal at a shower flow, and less on a very cold day or at high flow. Look for the BTU rating, and expect lukewarm water in cold weather."
  },
  {
    "criterion": "Safety protections and certification",
    "explanation": "A propane heater has an open flame, so the safety system matters. Overheat, low-flow, dry-fire and freeze protection and a flame failure device each stop the burner in a different fault, and CSA certification means a recognized testing body reviewed it. Look for the specific protections named, use the heater only outdoors, and keep the area clear of combustibles."
  },
  {
    "criterion": "Ignition, power and fuel",
    "explanation": "Most portable propane heaters use electronic ignition powered by two D batteries and run from a standard 20 lb tank with a regulator. That gives independence from the RV battery but means a dead pair of D cells leaves you cold. Check the ignition type and the regulator, and keep spare batteries in the kit."
  },
  {
    "criterion": "Kit contents, weight and portability",
    "explanation": "A heater that comes with the shower head, regulator and connectors saves time and money, and one that needs separate hardware adds cost. Weight matters when you carry it to a site, and a folding handle helps. Compare the kit lists and the stated weight, from about 9 to 12 lb for the propane units."
  }
];

export const faq = [
  {
    "q": "Can I use a portable propane water heater inside my RV?",
    "a": "No. Listings describe these heaters as outdoor units, and combustion appliances need ventilation and distance from combustibles. Use them outside, away from awnings and tent walls, and consider a carbon monoxide alarm in your RV for any gas appliance nearby."
  },
  {
    "q": "Why will my heater not light?",
    "a": "Common causes are low water pressure, a depleted pair of D batteries, a kinked hose or a blocked inlet screen. Check the minimum starting pressure, which ranges from 2.5 psi on the Amzgachfktch to 7 psi on the VANSTON, and make sure your pump meets it."
  },
  {
    "q": "What is the most common mistake with a portable heater?",
    "a": "Pairing a high-minimum-pressure heater with a weak pump or gravity feed. A heater that needs 7 psi will not fire from a small bag, so match the heater's starting pressure to your water system before buying."
  },
  {
    "q": "Is the LiberLive worth the same price as the VANSTON?",
    "a": "It depends on what you value. The LiberLive adds an LED temperature display and more output, while the VANSTON gives you a complete accessory pack and a wider stated pressure range. Both cost about $120."
  },
  {
    "q": "How do I protect a heater from freezing?",
    "a": "Drain all water from the heater and hoses after use and store it in a dry place. The VANSTON and others list freeze protection, but that is not a substitute for draining before a cold night. Never leave water inside during freezing weather."
  },
  {
    "q": "Which propane tank do I need?",
    "a": "The Amzgachfktch listings say the heater runs on a standard 20 lb liquid propane tank through a CSA approved regulator. Other units list a gas regulator and connectors in the box. Confirm the connection type against your tank before you buy."
  }
];

export const bottomLine = "For most RV campers, the VANSTON is the best portable water heater, with a wide pressure range, solid safety features and a complete accessory pack in the box. The LiberLive is the choice if you want a temperature readout and the highest output, the CAMPLUX suits small pumps and gravity feed, the Amzgachfktch Heater Kit is the budget propane option and the BSEED is a gas-free bucket shower for light jobs. Match the heater to your water pressure first, use it outdoors only and plan your power or propane before the trip.";

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best 10 Gallon RV Water Heater",
    "href": "/water-plumbing/best-10-gallon-rv-water-heater"
  },
  {
    "title": "Best 12 Gallon RV Water Heater",
    "href": "/water-plumbing/best-12-gallon-rv-water-heater"
  },
  {
    "title": "Best 4 Gallon RV Water Heater",
    "href": "/water-plumbing/best-4-gallon-rv-water-heater"
  },
  {
    "title": "Best 42000 Btu RV Tankless Water Heater",
    "href": "/water-plumbing/best-42000-btu-rv-tankless-water-heater"
  }
];
