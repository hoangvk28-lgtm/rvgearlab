export const guideSlug = "best-deep-cycle-batteries-for-solar-camping-setups";
export const guideTitle = "6 Best Deep Cycle Batteries For Solar Camping Setups in 2026";
export const metaTitle = "Best Deep Cycle Batteries For Solar Camping";
export const metaDescription = "Best deep cycle batteries for solar camping setups, comparing AGM, gel and lithium banks by charge profile, capacity and expansion.";
export const mainKeyword = "best deep cycle batteries for solar camping setups";
export const introParagraphs = [
  "Pairing a battery with solar panels asks more of it than plain plug-in use: it has to accept a charge controller's profile, cycle every day and ideally grow when you add panels. The right pick depends on whether you want cheap lead acid or a lighter lithium bank that you can expand.",
  "Six batteries were compared here: three AGM, one gel, one lithium 24V and one lithium twin pack. The comparison focused on stated capacity, chemistry, expansion limits, low-temperature handling and how each one pairs with a solar charge controller."
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
    "id": "best-deep-cycle-batteries-for-solar-camping-setups-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "2 Packs 12V 150Ah Max LiFePO4 Battery With 100A BMS 15000+ Deep Cycles",
    "price": "$368.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410zMRKjDPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GKFKXSKL?tag=rvgearlab-20",
    "description": "The DUMFUME set includes two 12V 150Ah LiFePO4 batteries, each with a 100A BMS and each measuring 10.04 by 7.68 by 9.84 inches at 43 lb. The pair can be wired in parallel for 300Ah or in series for higher voltage, and it expands to a 4S4P bank.\n\nAgainst the Renogy 200Ah AGM it offers more usable capacity from lithium chemistry and lower weight per amp hour. Compared with the VEVOR 24V, it stays on 12V so it fits ordinary camper gear.\n\nIt suits solar campers building a house bank in stages, since the second battery is already in the box. The independent low-temperature cut-off protects charging in winter.",
    "specs": [
      "Two 12V 150Ah LiFePO4",
      "100A BMS each",
      "4S4P expansion"
    ],
    "pros": [
      "Two batteries ready for a parallel bank",
      "Independent low-temp charge cutoff on each",
      "Expandable to a 48V system",
      "About 43 lb per battery"
    ],
    "cons": [
      "Energy storage only, not for engine starting",
      "Cost is high for a pair"
    ],
    "bestFor": "Expandable 12V solar banks",
    "take": "A two-battery lithium bank to start with, built for solar growth.",
    "catch": "Listed for energy storage only, so keep it away from engine starting."
  },
  {
    "id": "best-deep-cycle-batteries-for-solar-camping-setups-2",
    "rank": 2,
    "badge": "Best 24V Solar Pick",
    "name": "VEVOR 24V 100Ah LiFePO4 Lithium Battery",
    "price": "$369.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iT88YEnfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FL7H6FCT?tag=rvgearlab-20",
    "description": "The VEVOR 24V is a 100Ah LiFePO4 battery with a 29.2V to 20V range and a 50A BMS. Its listing says it can expand to 20.48kWh and fully charge in about 5 hours.\n\nCompared with the DUMFUME pair, it runs at 24V, which halves current for the same wattage and suits bigger solar arrays. Against the AGM picks it adds more cycles at 4000 or more and is far lighter.\n\nIt suits 24V solar or RV systems already built around a 24V inverter. A solar array and a 24V charge controller pair naturally with it.",
    "specs": [
      "24V 100Ah LiFePO4",
      "50A max discharge",
      "Expands to 20.48kWh"
    ],
    "pros": [
      "24V lowers current for bigger arrays",
      "4000+ cycles listed",
      "Five-layer 50A BMS protection",
      "Charges fully in about 5 hours"
    ],
    "cons": [
      "50A discharge limit caps heavy loads",
      "Needs a 24V system"
    ],
    "bestFor": "24V solar and RV systems",
    "take": "A tidy 24V lithium module for people who already run 24V.",
    "catch": "Fuse and size cables to the 50A limit, and keep inverters within it."
  },
  {
    "id": "best-deep-cycle-batteries-for-solar-camping-setups-3",
    "rank": 3,
    "badge": "Best High-Capacity AGM",
    "name": "Renogy 12 Volt 200Ah Deep Cycle AGM Battery",
    "price": "$251.38",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31hWBJ9YLXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075RGX1WR?tag=rvgearlab-20",
    "description": "The Renogy 200Ah AGM is a sealed lead acid battery with quinary alloy plates and a discharge current up to ten times the rated capacity. Its listing quotes self-discharge below 3% per month and stable discharge below 32F.\n\nIt doubles the capacity of the Renogy 100Ah in one case and costs less per amp hour than the lithium picks. Against the ExpertPower gel it offers twice the capacity at a similar price level.\n\nIt suits solar campers on a budget who accept lead acid weight and half-depth discharge. A long shelf life suits seasonal use.",
    "specs": [
      "12V 200Ah AGM",
      "Under 3% monthly self-discharge",
      "Works below 32F"
    ],
    "pros": [
      "Twice the capacity of the 100Ah AGMs",
      "Low self-discharge for seasonal storage",
      "Sealed and maintenance free",
      "High discharge current ability"
    ],
    "cons": [
      "Heavy for the capacity",
      "Usable capacity is about half"
    ],
    "bestFor": "Budget solar bank",
    "take": "The cheapest way here to get 200Ah for a fixed solar bank.",
    "catch": "AGM is heavy and should be strapped down in a ventilated space."
  },
  {
    "id": "best-deep-cycle-batteries-for-solar-camping-setups-4",
    "rank": 4,
    "badge": "Best Entry-Level AGM",
    "name": "Renogy 12 Volt 100Ah Deep Cycle AGM Battery",
    "price": "$166.24",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31soCn59teL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075RFXHYK?tag=rvgearlab-20",
    "description": "The Renogy 100Ah AGM supports series wiring and up to four in parallel, with a 1100A five second maximum discharge and an operating range from -4F to 140F. The listing says it can power fridges, microwaves and CPAP machines.\n\nIt is the lowest priced battery in this comparison and the smaller sibling of the Renogy 200Ah. Next to the ExpertPower gel it offers a wider listed temperature range and a clear parallel limit.\n\nIt suits a small solar camper that just needs a starter bank, perhaps one panel and a charge controller. Expanding in parallel later is straightforward.",
    "specs": [
      "12V 100Ah AGM",
      "-4F to 140F range",
      "Up to 4 in parallel"
    ],
    "pros": [
      "Lowest price in this comparison",
      "Parallel limit clearly stated",
      "Wide operating temperature range",
      "Sealed, no watering needed"
    ],
    "cons": [
      "About 50Ah usable in practice",
      "Heavier than lithium of the same size"
    ],
    "bestFor": "Starter solar bank",
    "take": "A cheap, well-documented 100Ah AGM to begin a solar bank.",
    "catch": "Do not discharge lead acid far below half capacity if you want long life."
  },
  {
    "id": "best-deep-cycle-batteries-for-solar-camping-setups-5",
    "rank": 5,
    "badge": "Best Gel Pick",
    "name": "ExpertPower EXP-100 GEL Deep Cycle Battery",
    "price": "$230.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4117VhMEyOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B8TTYX1K?tag=rvgearlab-20",
    "description": "The ExpertPower EXP-100 is a 12V 100Ah sealed gel battery sized 13.11 by 6.81 inches in footprint and sold for solar, RV, marine and trolling motor use. It is spill-proof, maintenance free and rechargeable.\n\nGel chemistry differs from the AGM Renogy and VEVOR batteries because gel needs a lower charge voltage, which matters when programming a solar controller. Next to the lithium picks it is cheaper and heavier.\n\nIt suits solar campers who want a spill-proof sealed battery and will set the controller to a gel profile. A tent camper who stores the battery in a car trunk benefits from the sealed case.",
    "specs": [
      "12V 100Ah gel",
      "Sealed, spill-proof",
      "Solar and RV use"
    ],
    "pros": [
      "Gel chemistry is spill-proof",
      "Maintenance free sealed design",
      "Suits solar, RV and marine banks",
      "Mid-priced among lead acid picks"
    ],
    "cons": [
      "Needs a gel charge profile",
      "Heavy and half usable capacity"
    ],
    "bestFor": "Sealed gel solar bank",
    "take": "A leak-proof gel option if you can set your controller correctly.",
    "catch": "Gel batteries can be damaged by high charge voltages, so set the controller to a gel profile."
  },
  {
    "id": "best-deep-cycle-batteries-for-solar-camping-setups-6",
    "rank": 6,
    "badge": "Best Surge Current AGM",
    "name": "VEVOR Deep Cycle Battery",
    "price": "$179.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31PS-imPR7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CVX5SQC5?tag=rvgearlab-20",
    "description": "The VEVOR 12V 100Ah AGM measures 13.0 by 6.7 by 8.4 inches and lists a maximum discharge current of 800A within 5 seconds. It is a maintenance-free sealed AGM sold for RV, solar, marine and UPS backup use.\n\nIt sits alongside the Renogy 100Ah as a plain AGM option, with the listed high surge current as its differentiator. Next to the lithium picks it is much cheaper per battery and heavier for the capacity.\n\nIt suits budget solar builds and backup power where occasional surge current matters. A trailer owner replacing a tired AGM will find a familiar footprint.",
    "specs": [
      "12V 100Ah AGM",
      "800A for 5 seconds",
      "13.0 x 6.7 x 8.4 inches"
    ],
    "pros": [
      "High surge current rating listed",
      "Sealed AGM with no maintenance",
      "Common RV and solar footprint",
      "Priced below most batteries here"
    ],
    "cons": [
      "Self-discharge wording is vague",
      "Only about half capacity usable"
    ],
    "bestFor": "Budget solar and backup",
    "take": "A plain 100Ah AGM with a high surge rating at a low price.",
    "catch": "Check the stated self-discharge before leaving it unused for long periods."
  }
];

export const howWeEvaluated = [
  {
    "title": "Charge profile",
    "description": "Chemistries were compared on how they pair with solar charge controllers, including gel, AGM and LiFePO4 profiles."
  },
  {
    "title": "Capacity and expansion",
    "description": "Amp hours, voltage and the stated series and parallel limits were compared for a growing solar bank."
  },
  {
    "title": "Cold performance",
    "description": "Operating range and low-temperature charge protection were compared where listed."
  },
  {
    "title": "Weight and usable capacity",
    "description": "Lead acid and lithium packs were compared on the energy they realistically deliver."
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
    "subheading": "By Solar Setup",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Growing 12V bank",
          "DUMFUME 12V 150Ah 2-Pack",
          "Two lithium batteries to expand from"
        ],
        [
          "24V solar array",
          "VEVOR 24V 100Ah Lithium",
          "24V halves the current for the same watts"
        ],
        [
          "Largest budget capacity",
          "Renogy 12V 200Ah AGM",
          "200Ah in one sealed case"
        ],
        [
          "Starter panel kit",
          "Renogy 12V 100Ah AGM",
          "Lowest cost AGM with clear parallel limits"
        ],
        [
          "Spill-proof battery in the trunk",
          "ExpertPower EXP-100 GEL",
          "Sealed gel needs a gel profile"
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
          "$160 to $180",
          "Renogy 12V 100Ah AGM or VEVOR 12V 100Ah AGM"
        ],
        [
          "$230 to $260",
          "ExpertPower EXP-100 GEL or Renogy 12V 200Ah AGM"
        ],
        [
          "$360 to $370",
          "DUMFUME 12V 150Ah 2-Pack or VEVOR 24V 100Ah Lithium"
        ]
      ]
    }
  },
  {
    "subheading": "Lead Acid vs Lithium",
    "cards": [
      {
        "label": "Lead acid",
        "text": "Renogy 12V 200Ah AGM, Renogy 12V 100Ah AGM, VEVOR 12V 100Ah AGM and ExpertPower EXP-100 GEL cost less and charge with familiar profiles. They weigh more and should only be discharged about halfway."
      },
      {
        "label": "Lithium",
        "text": "DUMFUME 12V 150Ah 2-Pack and VEVOR 24V 100Ah Lithium weigh far less and list thousands of cycles. They require a lithium charge profile and have a BMS that sets current limits."
      }
    ],
    "note": "Most solar campers should default to the DUMFUME 12V 150Ah 2-Pack unless budget limits the choice to one of the Renogy AGM batteries."
  },
  {
    "subheading": "By Budget Style",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Cheapest starting point",
          "Renogy 12V 100Ah AGM"
        ],
        [
          "Most capacity for lead acid money",
          "Renogy 12V 200Ah AGM"
        ],
        [
          "Sealed and spill-proof",
          "ExpertPower EXP-100 GEL"
        ],
        [
          "High surge current",
          "VEVOR 12V 100Ah AGM"
        ]
      ]
    }
  },
  {
    "subheading": "For Roof Solar Banks Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A charge profile that matches your controller, a stated parallel or series limit, and a temperature range that fits your trips."
      },
      {
        "label": "In this comparison",
        "text": "Renogy 12V 100Ah AGM states a parallel limit and a -4F to 140F range, while DUMFUME 12V 150Ah 2-Pack states a 4S4P expansion limit and cold-charge protection."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the DUMFUME 12V 150Ah 2-Pack or VEVOR 24V 100Ah Lithium if weight, cycle life and expansion matter more than the up-front price."
      },
      {
        "label": "Save if",
        "text": "Save with the Renogy 12V 100Ah AGM to start small, or the Renogy 12V 200Ah AGM if you need maximum capacity at lead acid prices."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Controller profile must match chemistry",
    "explanation": "Solar charge controllers have settings for AGM, gel, flooded and lithium, and each uses a different absorption and float voltage. Gel is the most sensitive to high voltage. Check the battery listing for its charge voltage and match the controller before you connect anything."
  },
  {
    "criterion": "Usable capacity beats rated capacity",
    "explanation": "A 100Ah lead acid battery is typically cycled to about half to last, giving around 50Ah. Lithium listings often claim use down to near full discharge. Compare watt hours of usable energy, not just the number printed on the label."
  },
  {
    "criterion": "Daily cycling life",
    "explanation": "Solar camping cycles the battery every day, so the cycle count at your depth of discharge matters more than the headline figure. AGM lasts hundreds of cycles at 50%, while lithium listings claim thousands. Look for cycle ratings stated with a depth of discharge."
  },
  {
    "criterion": "Expansion limits",
    "explanation": "Some batteries state how many can go in parallel or series, such as four in parallel or a 4S4P bank. Mixing old and new batteries or different chemistries shortens life. Buy matching batteries and keep cable lengths equal."
  },
  {
    "criterion": "Fusing and venting",
    "explanation": "Place a fuse or breaker close to the battery positive terminal and size it to the cable. Lead acid batteries can release hydrogen while charging, so keep them in a ventilated space away from a tent or sleeping area. Secure each battery so it cannot shift in a vehicle."
  }
];

export const faq = [
  {
    "q": "What battery size do I need for a solar camping setup?",
    "a": "Add up the watts of every device and the hours you run it each day to get watt hours. A 12V 100Ah battery holds about 1200Wh, but only half of that is practical in lead acid. Size the bank for one to two days of use plus a reserve."
  },
  {
    "q": "Can I use any deep cycle battery with a solar charge controller?",
    "a": "Only if the controller supports the battery chemistry. Most controllers have AGM, gel, flooded and lithium profiles. Gel and lithium are the most sensitive to wrong settings, so check the voltage the listing recommends."
  },
  {
    "q": "Is lithium worth it for solar camping?",
    "a": "Lithium is lighter, holds more usable energy and lasts for more cycles, which matters when it cycles daily. Lead acid is cheaper up front and works with common chargers. If you camp in cold weather, remember that lithium charging may stop near freezing."
  },
  {
    "q": "How do I wire two batteries into one solar bank?",
    "a": "Parallel wiring joins positives and negatives for more capacity at the same voltage. Use identical batteries, equal cable lengths and a fuse on each positive lead. Do not mix chemistries or ages."
  },
  {
    "q": "How do I look after a solar battery over winter?",
    "a": "Charge it fully and store it in a cool, dry place with loads disconnected. Lead acid should be topped up every few months to avoid sulfation. Lithium should be stored partly charged and kept out of freezing temperatures where possible."
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
