export const guideSlug = "best-rv-battery-for-boondocking";
export const guideTitle = "7 Best RV Batteries for Boondocking in 2026";
export const metaTitle = "Best RV Batteries for Boondocking (2026)";
export const metaDescription = "We compared 200Ah to 400Ah lithium RV batteries for boondocking by usable energy, BMS output, solar recharge, and expandability for multi-day off-grid stays.";
export const mainKeyword = "best rv battery for boondocking";
export const introParagraphs = [
  "Boondocking means days without hookups, often running an inverter, a 12V compressor fridge, fans, and devices entirely from batteries and solar. For that kind of camping, a single 100Ah battery rarely lasts, and the battery bank becomes the heart of the rig rather than a backup.",
  "We focused this roundup on high-capacity LiFePO4 batteries from 200Ah up to a 400Ah bank, from ECO-WORTHY, LiTime, GOKWH, HQST, ELEFAST, DUMFUME, and CyperOcean. We evaluated usable watt-hours, continuous BMS current for inverter loads, solar charging guidance, expandability, cold-charge protection, and physical size, along with buyer feedback from off-grid users."
];
export const lastUpdated = "2026-10-01";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/4152WgrC3+L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-battery-for-boondocking-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ECO-WORTHY EnergyRock 12V 280Ah Metal Case LiFePO4 Battery",
    "price": "$529.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4152WgrC3+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G79296WJ?tag=rvgearlab-20",
    "description": "ECO-WORTHY's EnergyRock packs 280Ah of LiFePO4 into a heavy-duty metal enclosure with four mounting feet, so it can bolt straight into a bay without a separate battery box. It includes a 200A BMS with Bluetooth monitoring, low-temperature charge protection, and a physical switch to cut output during storage.\n\nIt ranks first because it gives the best balance of capacity, ruggedness, and boondocking-specific features: the metal case resists road vibration and the maker publishes exact solar settings (14.6V absorption, float disabled). Compared with the GOKWH 320Ah, it holds less energy but offers sturdier construction and a cutoff switch.\n\nBest for full-time and long-stay boondockers who run an inverter and want one battery to anchor a solar system. The caveat is size; measure your bay, since a 280Ah unit is much larger than a group 31.",
    "specs": [
      "12V 280Ah, about 3584Wh",
      "200A BMS, Bluetooth",
      "Metal case with mounting feet"
    ],
    "pros": [
      "280Ah covers multi-day stays with a fridge",
      "Metal case mounts directly, no battery box",
      "On/off switch prevents storage drain",
      "Clear solar controller settings published"
    ],
    "cons": [
      "Ships in multiple packages",
      "Large and heavy compared with 200Ah picks"
    ],
    "bestFor": "Full-time boondockers with solar and an inverter"
  },
  {
    "id": "best-rv-battery-for-boondocking-2",
    "rank": 2,
    "badge": "Best Compact 200Ah",
    "name": "LiTime 12V 200Ah Mini LiFePO4 Battery with Bluetooth",
    "price": "$629.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TU+jCREwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GS8FRF41?tag=rvgearlab-20",
    "description": "LiTime's 200Ah Mini measures 13.11 x 6.93 x 10.04 inches, small enough to fit group 31 trays, and weighs 44.5 pounds. It supports 200A continuous discharge with a 1000A surge, low-temperature cutoff, and Bluetooth monitoring through the LiTime app.\n\nIt ranks second because it solves the most common boondocking upgrade problem, doubling capacity without enlarging the battery box. Against the ECO-WORTHY 280Ah, you give up 80Ah but gain a much smaller footprint; against cheaper 200Ah picks like the HQST, you pay for the compact size and app.\n\nBest for travel trailer owners with a single group 31 tongue box. The caveat is price: it costs about twice the HQST 200Ah, so it only makes sense if space is your real limit.",
    "specs": [
      "12V 200Ah, 44.5 lbs",
      "Fits group 31 trays",
      "200A continuous, 1000A surge"
    ],
    "pros": [
      "200Ah fits in a group 31 tray",
      "44.5 lbs is light for 200Ah",
      "6000+ cycles at 100% depth of discharge",
      "Expands to 51.2V 800Ah for big systems"
    ],
    "cons": [
      "Highest price among the 200Ah picks",
      "Bluetooth needs a charger to activate first"
    ],
    "bestFor": "Rigs with a group 31 box that need double capacity"
  },
  {
    "id": "best-rv-battery-for-boondocking-3",
    "rank": 3,
    "badge": "Most Capacity per Battery",
    "name": "GOKWH 12V 320Ah LiFePO4 Battery with Bluetooth",
    "price": "$402.91",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/414yp1sGveL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GD1934FB?tag=rvgearlab-20",
    "description": "GOKWH's 320Ah battery stores 4096Wh, the most of any single battery in this roundup. It includes a 200A BMS with low-temperature protection, Bluetooth that reports cycle count and temperature, and the maker estimates about 13 hours to recharge from a 600W solar array.\n\nIt ranks third because although it beats the ECO-WORTHY on capacity, the listing omits dimensions and weight, which matter when planning a bay. Its 200A BMS matches the ECO-WORTHY but limits sustained 12V output to about 2400W, despite the listing's 3000W inverter claim.\n\nBest for boondockers with large solar arrays who want to stay out a week or more. The caveat is to confirm size with the seller and size your inverter to the BMS rating, not the marketing.",
    "specs": [
      "12V 320Ah, 4096Wh",
      "200A BMS",
      "Up to 4P4S expansion"
    ],
    "pros": [
      "4096Wh is the most energy in one battery here",
      "Rated for 8000+ deep cycles",
      "Bluetooth reports cycle count and temperature",
      "Recharges from 600W of solar in about 13 hours"
    ],
    "cons": [
      "200A BMS limits a 3000W inverter on 12V",
      "No published dimensions or weight"
    ],
    "bestFor": "Boondockers wanting maximum energy from a single battery"
  },
  {
    "id": "best-rv-battery-for-boondocking-4",
    "rank": 4,
    "badge": "Best Value 200Ah",
    "name": "HQST 12V 200Ah LiFePO4 Battery Kit (2 x 100Ah) with LED Meter",
    "price": "$321.30",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VgGo5WwrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLP78VCH?tag=rvgearlab-20",
    "description": "HQST's kit is two 12V 100Ah LiFePO4 batteries for 2560Wh total, each weighing just 21 pounds with 100A continuous discharge and 4000+ cycles. The BMS suspends charging below 23F or above 140F and stops discharging below 5F.\n\nIt ranks fourth because it offers 200Ah at a low price and splits the weight into two manageable units. Compared with the LiTime 200Ah Mini, it needs two trays and parallel wiring, but costs about half as much. Wired in parallel, the pair supports about 200A combined.\n\nBest for value-focused boondockers with two battery trays. The caveat is the 23F charge cutoff: most LiFePO4 guidance says to avoid charging below 32F, so treat this as a backstop and avoid charging in freezing weather.",
    "specs": [
      "Two 12V 100Ah, 2560Wh total",
      "Charge cutoff below 23F",
      "21 lbs per battery"
    ],
    "pros": [
      "Two 21 lb batteries are easy to lift",
      "Separate low and high temperature protection",
      "Expands to 16 batteries for big banks",
      "10-year quality commitment from the maker"
    ],
    "cons": [
      "100A per battery, needs parallel for big loads",
      "Charge cutoff at 23F, not 32F"
    ],
    "bestFor": "Budget boondockers wanting two easy-to-lift batteries"
  },
  {
    "id": "best-rv-battery-for-boondocking-5",
    "rank": 5,
    "badge": "Best for Heavy Loads",
    "name": "ELEFAST 12V 200Ah LiFePO4 Battery with Smart BMS and Bluetooth",
    "price": "$329.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OQF+XE2SL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DLXXRHHL?tag=rvgearlab-20",
    "description": "ELEFAST's 200Ah battery stores 2560Wh and its BMS tolerates a 600A one-second inrush, then recovers from overload protection automatically within 30 seconds. It includes Bluetooth monitoring, low-temperature protection, and lists UL and IEC testing with five years of after-sales support.\n\nIt ranks fifth because the listing cites both a 200A and a 100A BMS, which makes its real continuous output unclear compared with the clearly rated ECO-WORTHY and LiTime picks. The surge tolerance is the reason to choose it over the HQST for compressor fridges or microwaves.\n\nBest for boondockers whose inverter loads have hard startup surges. The caveat is to confirm the continuous BMS rating with the seller before pairing it with a large inverter.",
    "specs": [
      "12V 200Ah, 2560Wh",
      "600A 1-second surge",
      "Bluetooth monitoring"
    ],
    "pros": [
      "Handles 600A inrush for motor and compressor starts",
      "Auto-recovers from overload in 30 seconds",
      "Expands up to 20480Wh",
      "UL and IEC tested, 5 years of support"
    ],
    "cons": [
      "Listing contradicts itself on BMS rating",
      "Marketing focuses on trolling motors"
    ],
    "bestFor": "Boondockers running inverter loads with high startup surges"
  },
  {
    "id": "best-rv-battery-for-boondocking-6",
    "rank": 6,
    "badge": "Best Weatherproof",
    "name": "DUMFUME 12V 200Ah LiFePO4 Battery, 200A BMS, IP65",
    "price": "$317.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Q+BW6+fsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DLGPVF4Z?tag=rvgearlab-20",
    "description": "DUMFUME's 200Ah battery weighs 58.86 pounds, carries an IP65 rating for dust and moisture, and has a 200A BMS. The BMS stops charging below 32F while allowing discharge down to -4F, and the maker publishes 4000+ cycles at 100% depth of discharge and 6000+ at 80%.\n\nIt ranks sixth because, compared with the ELEFAST, it lacks Bluetooth, but its weatherproof case and clear temperature specs make it a sensible pick for exposed mounting. Against the HQST kit, it puts 200Ah in one case with a stronger 200A BMS, though in a longer footprint.\n\nBest for boondockers in desert dust or rainy climates with an exposed battery box. The caveat is shape: the case is about 21 inches long, so measure your space carefully.",
    "specs": [
      "12V 200Ah, 58.86 lbs",
      "IP65 rated case",
      "Charge stops below 32F"
    ],
    "pros": [
      "IP65 rating resists dust and moisture",
      "Clear 32F charge cutoff, discharges to -4F",
      "Published cycle counts at 60, 80, and 100% DoD",
      "UL and UN38.3 certified, 5-year warranty"
    ],
    "cons": [
      "Long case may not fit standard trays",
      "No Bluetooth app for monitoring charge"
    ],
    "bestFor": "Exposed tongue boxes and dusty desert camps"
  },
  {
    "id": "best-rv-battery-for-boondocking-7",
    "rank": 7,
    "badge": "Best 400Ah Bank",
    "name": "CyperOcean 12V 100Ah LiFePO4 Group 31 Battery (4 Pack, 400Ah)",
    "price": "$659.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/518FQC8g0hL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HHHD2QLW?tag=rvgearlab-20",
    "description": "CyperOcean's four-pack provides four batch-matched 12V 100Ah group 31 batteries, which wired in parallel make a 400Ah, 12V bank weighing 91.28 pounds total. Each has a 32F low-temperature charge cutoff, 6000+ cycle rating, and the pack includes extra M8 bolts for stacked cables.\n\nIt ranks last only because it is the most complex install; for capacity it beats every single battery here. Compared with the GOKWH 320Ah, it gives 80Ah more and spreads current across four BMS units, but needs four trays, busbars, and careful equal-length wiring.\n\nBest for fifth-wheels and Class A owners who want to run air conditioning or a residential fridge off grid. The caveat is installation: plan for busbars, proper fusing, and a shunt monitor to track the whole bank.",
    "specs": [
      "Four 12V 100Ah, batch matched",
      "400Ah in parallel, 91.28 lbs",
      "32F charge cutoff"
    ],
    "pros": [
      "Batch-matched cells for a balanced 400Ah bank",
      "Each battery fits a standard group 31 tray",
      "91 lbs total for 400Ah",
      "Two sets of M8 bolts for stacked cables"
    ],
    "cons": [
      "Needs room for four trays and busbars",
      "Wiring four batteries adds cost and complexity"
    ],
    "bestFor": "Large rigs building a 400Ah bank for air conditioning"
  }
];

export const howWeEvaluated = [
  {
    "title": "Usable Energy for Multi-Day Stays",
    "description": "We ranked batteries by usable watt-hours, since boondockers usually need 2000Wh or more to cover a fridge, lights, and devices across a couple of cloudy days."
  },
  {
    "title": "Continuous BMS Output",
    "description": "We checked the continuous BMS current, which caps the inverter you can run, and flagged listings with unclear or conflicting ratings."
  },
  {
    "title": "Solar Charging Guidance",
    "description": "We gave credit for published charge settings and solar recharge estimates, since solar is how most boondockers refill their bank."
  },
  {
    "title": "Expandability and Fit",
    "description": "We compared physical size and series or parallel limits, because boondocking banks often grow over time."
  },
  {
    "title": "Cold Weather Protection",
    "description": "We confirmed low-temperature charge cutoffs, since high-desert and mountain boondocking often means freezing nights."
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
    "subheading": "By Daily Energy Use",
    "intro": "Estimate your daily watt-hours, then pick a battery that covers at least two days.",
    "table": {
      "headers": [
        "Daily use",
        "Recommended pick"
      ],
      "rows": [
        [
          "Up to 1000Wh (lights, fans, devices)",
          "HQST 200Ah"
        ],
        [
          "1000 to 1500Wh (adds 12V fridge)",
          "ECO-WORTHY 280Ah"
        ],
        [
          "1500 to 2000Wh (inverter use, CPAP)",
          "GOKWH 320Ah"
        ],
        [
          "Over 2000Wh (air conditioner, residential fridge)",
          "CyperOcean 4 Pack"
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
          "About $320",
          "HQST 200Ah or DUMFUME 200Ah"
        ],
        [
          "About $330",
          "ELEFAST 200Ah"
        ],
        [
          "About $400",
          "GOKWH 320Ah"
        ],
        [
          "About $530",
          "ECO-WORTHY 280Ah"
        ],
        [
          "About $630 to $660",
          "LiTime 200Ah Mini or CyperOcean 4 Pack"
        ]
      ]
    }
  },
  {
    "subheading": "One Large Battery vs Several Smaller Ones",
    "cards": [
      {
        "label": "One large battery",
        "text": "Simplest wiring, one BMS, and fewer connections to fail, but heavy and harder to fit. In this roundup: ECO-WORTHY 280Ah, GOKWH 320Ah, LiTime 200Ah Mini, ELEFAST 200Ah, DUMFUME 200Ah."
      },
      {
        "label": "Several smaller batteries",
        "text": "Each unit is light and fits standard trays, and current is shared across multiple BMS units, but it needs parallel wiring and busbars. In this roundup: HQST 200Ah, CyperOcean 4 Pack."
      }
    ],
    "note": "Choose one large battery if you have a single bay big enough; choose multiple units if lifting weight or tray size is the limit."
  },
  {
    "subheading": "By Inverter Size",
    "table": {
      "headers": [
        "Inverter",
        "Recommended pick"
      ],
      "rows": [
        [
          "1000W or less",
          "HQST 200Ah (one battery)"
        ],
        [
          "Up to 2000W",
          "ECO-WORTHY 280Ah or LiTime 200Ah Mini"
        ],
        [
          "Hard surge loads like a microwave",
          "ELEFAST 200Ah"
        ],
        [
          "3000W and up",
          "CyperOcean 4 Pack"
        ]
      ]
    }
  },
  {
    "subheading": "For Desert and Dusty Boondocking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "An IP65 or similar rated case, a solid hold-down, and a BMS that cuts charging below 32F for cold desert nights."
      },
      {
        "label": "In this comparison",
        "text": "The DUMFUME 200Ah has an IP65 case and a clearly stated 32F charge cutoff, making it the best fit for exposed tongue boxes on BLM land."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You boondock for weeks with an inverter, which makes the ECO-WORTHY 280Ah or CyperOcean 4 Pack worth the extra cost."
      },
      {
        "label": "Save if",
        "text": "You boondock on weekends with modest loads, where the HQST 200Ah covers two days for about half the price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Size the Bank to Your Daily Watt-Hours",
    "explanation": "Add up what you run each day: a 12V compressor fridge, lights, fans, water pump, and devices. Multiply amp-hours by 12.8 to get watt-hours, so a 200Ah LiFePO4 battery is about 2560Wh. Aim for at least two days of use so a cloudy day does not leave you dark, and check the Wh figure in each listing."
  },
  {
    "criterion": "Continuous BMS Rating vs Inverter Size",
    "explanation": "The BMS limits how much current the battery can supply continuously. At 12V, a 200A BMS supports roughly 2000 to 2400W, so a 3000W inverter needs either a bigger BMS or multiple batteries. Find the continuous BMS rating in the listing, not the surge figure, and match it to your inverter."
  },
  {
    "criterion": "Solar Charging Settings",
    "explanation": "LiFePO4 typically charges to about 14.4 to 14.6V and does best without a long float. If your solar controller is set for lead acid, the battery may never fully charge. Look for published absorption and float settings in the listing and check that your controller lets you program them."
  },
  {
    "criterion": "Cold Weather Charging",
    "explanation": "Boondocking in high desert or mountains often means freezing nights, and LiFePO4 should not be charged below 32F. A BMS cutoff prevents damage but also stops solar charging until the battery warms up. If you camp below freezing often, look for an explicit cutoff temperature, and consider mounting the battery inside the heated space."
  },
  {
    "criterion": "Physical Size and Weight",
    "explanation": "High-capacity batteries vary widely in shape; some 200Ah units fit group 31 trays, while others are over 20 inches long. Weight affects tongue weight and whether one person can install it. Compare listed dimensions with your bay, and consider multiple smaller batteries if a single large unit will not fit."
  },
  {
    "criterion": "Monitoring",
    "explanation": "RV panel voltage meters are nearly useless with lithium because voltage stays flat until the battery is almost empty. Bluetooth BMS apps or a shunt-based monitor show real state of charge. Check whether the listing includes Bluetooth, and budget for a shunt monitor if you are building a multi-battery bank."
  }
];

export const faq = [
  {
    "q": "How much battery do I need for boondocking?",
    "a": "Most boondockers running a 12V fridge, lights, and devices use about 1000 to 1500Wh per day, so a 200Ah to 300Ah LiFePO4 battery covers one to two days. Add more if you use an inverter for a CPAP, coffee maker, or microwave. Pair the battery with enough solar to refill most of what you use daily."
  },
  {
    "q": "What is the most common boondocking battery mistake?",
    "a": "Buying a big inverter without checking the battery's BMS rating. A 3000W inverter on a 200A BMS will trip the protection under heavy load. Size the inverter to the battery's continuous output, or add batteries in parallel."
  },
  {
    "q": "Is a 280Ah battery worth it over a 200Ah?",
    "a": "If you regularly stay out more than two days or run a fridge on an inverter, yes, since the extra 80Ah adds about 1000Wh of reserve. For weekend trips with good sun, a 200Ah battery like the HQST is usually enough and costs less."
  },
  {
    "q": "How do I connect multiple lithium batteries for boondocking?",
    "a": "Wire identical batteries in parallel using equal length cables or busbars, with the main positive on one end and main negative on the other. Charge each battery fully before connecting them so they start balanced. Fuse each battery and use a shunt monitor to track the whole bank."
  },
  {
    "q": "Can I run my RV air conditioner off batteries while boondocking?",
    "a": "It is possible with a large bank, typically 400Ah or more, a 3000W inverter, and a soft start on the air conditioner. Even then, expect a few hours of runtime unless you have substantial solar. The CyperOcean 4 Pack is the pick here built for that kind of load."
  },
  {
    "q": "How do I protect lithium batteries on freezing boondocking nights?",
    "a": "Mount the battery inside the heated living space if possible, or use self-heating batteries. A low-temperature cutoff will stop charging below 32F, so solar will not refill the battery until it warms. Discharging in the cold is generally fine, so you can still run loads overnight."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best 300AH Lithium RV Battery in 2026",
    "href": "/power-electrical/best-300ah-lithium-rv-battery"
  },
  {
    "title": "Best RV Battery For Dry Camping in 2026",
    "href": "/power-electrical/best-rv-battery-for-dry-camping"
  },
  {
    "title": "Best Heated Lithium RV Battery in 2026",
    "href": "/power-electrical/best-heated-lithium-rv-battery"
  },
  {
    "title": "Best Lithium RV Battery in 2026",
    "href": "/power-electrical/best-lithium-rv-battery"
  }
];
