export const guideSlug = "best-agm-batteries-for-camping";
export const guideTitle = "4 Best Agm Batteries For Camping in 2026";
export const metaTitle = "Best Agm Batteries For Camping in 2026";
export const metaDescription = "AGM batteries for camping compared on deep-cycle versus dual-purpose design, capacity, group size, temperature range and standby use.";
export const mainKeyword = "best agm batteries for camping";
export const introParagraphs = [
  "AGM batteries are sealed, spill-resistant lead-acid units that need no water top-ups, which makes them a common choice for trailers, cabins and boats. Four distinct AGM lines are compared here, from a 12Ah standby unit to a 200Ah house bank.",
  "They were compared on deep-cycle or dual-purpose design, capacity, size, temperature range and warranty. AGM is heavier than lithium and should not be drained below about half, so capacity math matters."
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
    "id": "best-agm-batteries-for-camping-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Interstate Batteries Marine/RV Battery 12V 100Ah 925CCA 1110CA Group 31 AGM",
    "price": "$284.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31zt+XjvDCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BHX3FBCQ?tag=rvgearlab-amz-20",
    "description": "The Interstate Group 31 is a 12V 100Ah pure lead AGM battery rated at 925CCA and 1110CA. The listing calls it a 2-in-1 that delivers cranking power and deep-cycle output, built with thick plates for repeated discharge.\n\nIt is the only pick here that serves both starting and house duty at 100Ah, ahead of the Group 24 at 70Ah. The listing claims a service life of 2 to 3 times conventional flooded types.\n\nIt suits boats and trailers that need one battery to start a motor and also run onboard gear. The Group 31 tray size fits many boxes.",
    "specs": [
      "12V 100Ah, Group 31",
      "925CCA, 1110CA, dual-purpose",
      "Pure lead AGM"
    ],
    "pros": [
      "Dual purpose: start and house",
      "100Ah in a standard group size",
      "Pure lead plates for deep cycling",
      "Established brand and sizing"
    ],
    "cons": [
      "Heavy compared with lithium",
      "Costs more than the Group 24"
    ],
    "bestFor": "Boats and trailers needing both duties",
    "take": "The most versatile AGM here for a truck-camper or boat. Choose it when one battery must do two jobs.",
    "catch": "It is a heavy lead-acid unit, and half of 100Ah is the usable range."
  },
  {
    "id": "best-agm-batteries-for-camping-2",
    "rank": 2,
    "badge": "Best House Bank",
    "name": "Renogy Deep Cycle AGM Battery 2-Pack 12 Volt 100Ah",
    "price": "$369.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31xlvdaK8VL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C9LYT6NQ?tag=rvgearlab-amz-20",
    "description": "The Renogy comes as a 2-pack of 12V 100Ah deep-cycle AGM batteries with a 2000A max discharge current and 2-year warranty. Monthly self-discharge is below 3 percent at 77F, and performance is stated from -4F to 140F.\n\nIt supplies two batteries for a 200Ah bank, which is more than a single Interstate. A 200Ah-per-battery version of the same line is also listed for larger setups.\n\nIt suits solar and trailer banks that need pure house power and long storage. No acid leaks or water refilling are listed.",
    "specs": [
      "Two 12V 100Ah deep-cycle",
      "3% monthly self-discharge",
      "-4F to 140F range, 2-year warranty"
    ],
    "pros": [
      "Two batteries in one pack",
      "Stated -4F to 140F operation",
      "Low self-discharge for storage",
      "2-year warranty named"
    ],
    "cons": [
      "Not meant for engine starting",
      "Heavy for a pair"
    ],
    "bestFor": "Solar and cabin banks",
    "take": "A pure house bank in a pair, with long-storage chemistry. Good for fixed installs.",
    "catch": "It is deep-cycle only and weighs a lot for two units."
  },
  {
    "id": "best-agm-batteries-for-camping-3",
    "rank": 3,
    "badge": "Best Compact Dual Purpose",
    "name": "Interstate Batteries Marine/RV Battery 12V 70Ah 750CCA Group 24 AGM",
    "price": "$259.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415V9jWpIoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BHTWRDNQ?tag=rvgearlab-amz-20",
    "description": "The Interstate Group 24 is a 12V 70Ah dual-purpose AGM at 750CCA built from pure non-alloy lead. The listing says it can crank a motor and power a trolling motor, with extreme deep-cycle capability.\n\nIt is smaller than the Group 31, with 70Ah against 100Ah, and fits tighter trays. It claims 2 times the life of alloy AGM batteries.\n\nIt suits small boats, tent-trailers and kayak anglers who need modest capacity in a compact case. Group 24 sizing eases swaps.",
    "specs": [
      "12V 70Ah, Group 24",
      "750CCA, dual-purpose",
      "Pure non-alloy lead"
    ],
    "pros": [
      "Compact Group 24 size",
      "Dual purpose cranking and house",
      "Pure lead construction",
      "Lower price than the Group 31"
    ],
    "cons": [
      "Less capacity than 100Ah",
      "Heavy for its energy"
    ],
    "bestFor": "Small boats and tent trailers",
    "take": "A smaller dual-purpose AGM for tight spaces. Pick it when 70Ah is enough.",
    "catch": "Only 70Ah, so usable energy is limited."
  },
  {
    "id": "best-agm-batteries-for-camping-4",
    "rank": 4,
    "badge": "Best Small Standby",
    "name": "ExpertPower EXP12120 12V 12Ah AGM Battery",
    "price": "$27.92",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41q3aBlQJxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00A82A2ZS?tag=rvgearlab-amz-20",
    "description": "The ExpertPower EXP12120 is a sealed 12V 12Ah AGM battery with F2 terminals and a high-impact ABS case. It is listed for UPS replacement, trailer breakaway systems, mobility scooters and camping power boxes.\n\nIt is the smallest AGM here, far from the 100Ah units in capacity, and the cheapest by a wide margin. It suits portable power boxes that need a compact lead-acid cell.\n\nIt suits DIY power box builders and fish finder users. The sealed design avoids leaks.",
    "specs": [
      "12V 12Ah sealed AGM",
      "F2 terminals, ABS case",
      "UPS and trailer breakaway uses"
    ],
    "pros": [
      "Smallest and cheapest AGM here",
      "Sealed leak-resistant design",
      "Shock-resistant ABS case",
      "F2 terminals fit many boxes"
    ],
    "cons": [
      "Only 12Ah of capacity",
      "Not for powering large loads"
    ],
    "bestFor": "Power boxes and fish finders",
    "take": "A compact AGM for small builds. A useful spare for light loads.",
    "catch": "12Ah runs a small load for a limited time only."
  }
];

export const howWeEvaluated = [
  {
    "title": "Duty type",
    "description": "We separated deep-cycle house batteries from dual-purpose starters and small standby units."
  },
  {
    "title": "Capacity and size",
    "description": "Ah, group size and pack counts were compared."
  },
  {
    "title": "Temperature and storage",
    "description": "Listed temperature ranges and self-discharge rates were compared."
  },
  {
    "title": "Warranty and build",
    "description": "Warranty terms and case design were compared."
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
          "Boat or trailer with start duty",
          "Interstate Group 31 AGM",
          "Dual-purpose 100Ah with cranking."
        ],
        [
          "Fixed solar or cabin bank",
          "Renogy AGM 2-Pack",
          "Two deep-cycle 100Ah batteries."
        ],
        [
          "Small boat or tent trailer",
          "Interstate Group 24 AGM",
          "70Ah dual-purpose in a compact group size."
        ],
        [
          "Power box or fish finder",
          "ExpertPower 12V 12Ah",
          "12Ah sealed unit."
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
          "$20 to $260",
          "ExpertPower 12V 12Ah or Interstate Group 24 AGM"
        ],
        [
          "$280 to $370",
          "Interstate Group 31 AGM or Renogy AGM 2-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Dual-Purpose vs Deep-Cycle",
    "cards": [
      {
        "label": "Dual-purpose",
        "text": "The Interstate Group 31 AGM and Interstate Group 24 AGM crank engines and run gear from one battery."
      },
      {
        "label": "Deep-cycle",
        "text": "The Renogy AGM 2-Pack and ExpertPower 12V 12Ah are built for house loads and standby."
      }
    ],
    "note": "Choose a Renogy AGM 2-Pack for house power and an Interstate Group 31 AGM when one battery must start and run."
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
          "Under $60",
          "ExpertPower 12V 12Ah"
        ],
        [
          "Around $250",
          "Interstate Group 24 AGM"
        ],
        [
          "Pair for a bank",
          "Renogy AGM 2-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "For Weekend Trailer Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "About 100Ah of capacity, a standard group size and a charger-compatible AGM profile."
      },
      {
        "label": "In this comparison",
        "text": "The Interstate Group 31 AGM gives 100Ah with starting power. The Renogy AGM 2-Pack suits a fixed trailer bank."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Renogy AGM 2-Pack for a real house bank, or the Interstate Group 31 AGM for dual-purpose use."
      },
      {
        "label": "Save if",
        "text": "Save with the ExpertPower 12V 12Ah or Interstate Group 24 AGM for small loads."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Deep-cycle vs dual-purpose",
    "explanation": "Deep-cycle AGM batteries are built for repeated drain and recharge, while dual-purpose ones also crank engines. A starter-only battery can fail fast under house loads. Check the listing says deep-cycle or dual-purpose."
  },
  {
    "criterion": "Usable capacity",
    "explanation": "Lead-acid batteries last longest when drained to no more than about 50 percent. A 100Ah AGM gives roughly 50Ah usable, or 600Wh at 12V. Divide your daily watt-hours by 600 to size a bank."
  },
  {
    "criterion": "Group size and weight",
    "explanation": "Group 24, 27 and 31 sizes set the tray fit, and a 100Ah AGM often weighs 60 pounds or more. A battery that does not fit the box or is too heavy to lift is a poor buy. Check physical size and weight before ordering."
  },
  {
    "criterion": "Temperature range",
    "explanation": "AGM handles cold better than flooded batteries but loses capacity in freezing weather. A stated range such as -4F to 140F helps. Check the listed range."
  },
  {
    "criterion": "Charging requirements",
    "explanation": "AGM wants a charger with an AGM profile, and the wrong settings shorten life. Many RV converters can be set. Check the charger voltage specs."
  },
  {
    "criterion": "Series or parallel banks",
    "explanation": "Two 12V batteries in parallel double capacity, and in series double voltage. Use matched batteries and proper fusing. Mismatched banks wear unevenly."
  }
];

export const faq = [
  {
    "q": "Is AGM better than lithium for camping?",
    "a": "AGM costs less up front but is heavier and has less usable capacity. Lithium suits frequent use."
  },
  {
    "q": "What mistake do buyers make with AGM?",
    "a": "Draining it fully. Keep it above half charge for a longer life."
  },
  {
    "q": "Is the Renogy pack worth it over a single Interstate?",
    "a": "If you want a 200Ah bank, yes. A single Interstate Group 31 AGM suits dual duty."
  },
  {
    "q": "How do I connect two AGM batteries?",
    "a": "Connect positive to positive and negative to negative for parallel. Use matched batteries and equal-length cables. Fuse the bank."
  },
  {
    "q": "How do I store an AGM battery?",
    "a": "Keep it charged, cool and dry. Recharge every few months. Avoid freezing while discharged."
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
