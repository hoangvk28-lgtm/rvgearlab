export const guideSlug = "best-agm-deep-cycle-batteries";
export const guideTitle = "6 Best Agm Deep Cycle Batteries in 2026";
export const metaTitle = "Best Agm Deep Cycle Batteries in 2026";
export const metaDescription = "Best AGM deep cycle batteries for camping compared on capacity, group size, self-discharge and dual-purpose starting, from 35Ah to 200Ah.";
export const mainKeyword = "best agm deep cycle batteries";
export const introParagraphs = [
  "AGM deep cycle batteries sit between flooded lead-acid and lithium: sealed, spill-proof, no watering and happy on their side or in a vibrating vehicle. They still weigh a lot and should not be run flat, so the question is how much usable capacity each size actually gives a camper.",
  "Six AGM batteries from 35Ah to 200Ah were compared on stated capacity, group size, cycle claims, self-discharge and charging notes. Dual-purpose starting batteries are included only where the listing says they also deep cycle."
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
    "id": "best-agm-deep-cycle-batteries-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Renogy 12 Volt 200Ah Deep Cycle AGM Battery",
    "price": "$251.38",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31hWBJ9YLXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075RGX1WR?tag=rvgearlab-amz-20",
    "description": "The Renogy 200Ah AGM battery uses absorbent glass mat separators and valve-regulated construction, with a monthly self-discharge listed below 3 percent at 77 degrees F. Quinary alloy plates support discharge currents up to 10 times the rated capacity.\n\nIt carries twice the capacity of the Renogy 100Ah and the Weize 100Ah. Compared with the dual-purpose Mighty Max it is a pure house battery for solar and trailer banks.\n\nIt suits larger campers and solar setups where one large battery beats two smaller ones. The stable low-temperature performance is listed too.",
    "specs": [
      "12V 200Ah AGM",
      "Under 3% monthly self-discharge",
      "Up to 10x discharge current"
    ],
    "pros": [
      "200Ah is the largest capacity here",
      "Sealed, maintenance free design",
      "Low self-discharge for storage",
      "Handles low temperatures"
    ],
    "cons": [
      "Very heavy for one person",
      "Highest price in the list"
    ],
    "bestFor": "Solar and trailer banks",
    "take": "The biggest capacity AGM here, for larger off-grid setups.",
    "catch": "Weight is not stated on the listing, so plan for a heavy lift."
  },
  {
    "id": "best-agm-deep-cycle-batteries-2",
    "rank": 2,
    "badge": "Best Dual-Purpose Pick",
    "name": "Mighty Max Battery MM-G31M",
    "price": "$249.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41AQrCOTTqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7LQ87LG?tag=rvgearlab-amz-20",
    "description": "The Mighty Max MM-G31M is a Group 31M AGM with 110Ah, 825 CCA and 1000 marine cranking amps. It lists up to 700 cycles at 50 percent depth of discharge.\n\nIt starts an engine and runs a camp load, which the Renogy batteries do not claim. Compared with the Weize 27M it offers 18Ah more capacity and a higher CCA figure.\n\nIt suits van and boat campers who want one battery for the starter and the house. Group 31M size fits many tray layouts.",
    "specs": [
      "12V 110Ah, Group 31M",
      "825 CCA, 1000 MCA",
      "700 cycles at 50% DoD"
    ],
    "pros": [
      "Starts engines and runs gear",
      "110Ah capacity",
      "700 cycles at 50% depth stated",
      "Marine-style construction"
    ],
    "cons": [
      "Dual-purpose compromises deep cycling",
      "High price for the capacity"
    ],
    "bestFor": "Vans and boats",
    "take": "A single battery for both starting and house loads.",
    "catch": "Dual-purpose batteries tolerate fewer deep cycles than pure deep cycle designs."
  },
  {
    "id": "best-agm-deep-cycle-batteries-3",
    "rank": 3,
    "badge": "Best for Fast Charging",
    "name": "Weize Dual Purpose AGM Battery BCI Group 27M",
    "price": "$189.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UbW9RSctL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRQRMKFC?tag=rvgearlab-amz-20",
    "description": "The Weize BCI Group 27M offers 92Ah, 580 CCA and 175 RC in a sealed AGM case that the listing calls marine and RV. It lists quick charging at a constant 14.4V and claims 20 times more vibration resistance than flooded batteries.\n\nIt is cheaper than the Mighty Max and rated a little lower in Ah. Compared with the Weize 100Ah it adds starting power in exchange for pure deep cycle use.\n\nIt suits RV and boat owners with a limited battery tray and some engine starting needs. The charging voltage guidance is clearly given.",
    "specs": [
      "12V 92Ah, Group 27M",
      "580 CCA, 175 RC",
      "Quick-charge profile"
    ],
    "pros": [
      "Starting and deep cycle in one",
      "Quick-charge capable at 14.4V",
      "Vibration resistant",
      "Cheaper than the Mighty Max"
    ],
    "cons": [
      "92Ah is below the 100Ah picks",
      "Dual-purpose use limits deep cycling"
    ],
    "bestFor": "RV and boat with a starter",
    "take": "A dual-purpose AGM with a clear charging profile.",
    "catch": "Charge at the listed constant voltage to avoid overcharge."
  },
  {
    "id": "best-agm-deep-cycle-batteries-4",
    "rank": 4,
    "badge": "Best Pure Deep Cycle",
    "name": "Weize Deep Cycle AGM 12 Volt 100Ah Battery",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bqV6Wt2oL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07SW353M8?tag=rvgearlab-amz-20",
    "description": "The Weize 12V 100Ah AGM measures 12.99 by 6.73 by 8.43 inches, with 1 to 3 percent self-discharge per month and a 1150A maximum discharge current. Charging runs from 14 to 122 degrees F and discharging from 5 to 122.\n\nIt costs a bit more than the Renogy 100Ah and lists a higher discharge current than the Renogy's 1100A. Against the Weize 27M it is purely a deep cycle battery.\n\nIt suits solar, trailer and trolling motor users who want a 100Ah standard size. Storage is easier thanks to the low self-discharge.",
    "specs": [
      "12V 100Ah AGM",
      "1150A max discharge current",
      "12.99 x 6.73 x 8.43 in"
    ],
    "pros": [
      "100Ah standard size",
      "Low monthly self-discharge",
      "1150A maximum discharge current",
      "Maintenance free sealed AGM"
    ],
    "cons": [
      "Charging stops below 14 degrees F",
      "About the same price as the Renogy"
    ],
    "bestFor": "Solar and trailers",
    "take": "A solid 100Ah AGM with clear size and temperature specs.",
    "catch": "Do not charge it below the listed temperature."
  },
  {
    "id": "best-agm-deep-cycle-batteries-5",
    "rank": 5,
    "badge": "Best Value 100Ah",
    "name": "Renogy 12 Volt 100Ah Deep Cycle AGM Battery",
    "price": "$166.24",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31soCn59teL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075RFXHYK?tag=rvgearlab-amz-20",
    "description": "The Renogy 100Ah AGM supports unlimited series and up to four parallel connections, with a 1100A five-second discharge. The listing says it can run a fridge, microwave and CPAP, and it works from -4 to 140 degrees F.\n\nIt is cheaper than the Weize 100Ah and the widest operating temperature in the group. Against the 200Ah Renogy it halves the capacity and costs less.\n\nIt suits campers who build a bank from several 100Ah batteries. Parallel up to four batteries gives 400Ah.",
    "specs": [
      "12V 100Ah AGM",
      "Series unlimited, parallel up to 4",
      "-4 to 140 degrees F"
    ],
    "pros": [
      "Series and parallel friendly",
      "Wide operating temperature",
      "Cheaper than the Weize",
      "Powers fridge and CPAP"
    ],
    "cons": [
      "Heavy for a 100Ah",
      "Not a starting battery"
    ],
    "bestFor": "Building a battery bank",
    "take": "A flexible 100Ah building block at a fair price.",
    "catch": "A microwave draws heavy current, so check the inverter and cables first."
  },
  {
    "id": "best-agm-deep-cycle-batteries-6",
    "rank": 6,
    "badge": "Best Compact Pack",
    "name": "Daakmax 12V 35ah Deep Cycle AGM Battery Rechargeable SLA Maintenance-Free Batteries for Camping RV Off-Grid Sy",
    "price": "$134.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-lhsIsWsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H55NR3HW?tag=rvgearlab-amz-20",
    "description": "The Daakmax is a pack of two 12V 35Ah AGM batteries in ABS cases with M6 zinc-plated bolts. The listing names use in camping, RVs, UPS backup, marine and off-grid solar.\n\nIt is the smallest and cheapest total capacity, 70Ah for the pair. Compared with a single 100Ah it lets you move the weight in two lighter pieces.\n\nIt suits tent campers, kayak setups and small lighting and phone-charging loads. Wiring in parallel gives 70Ah.",
    "specs": [
      "Two 12V 35Ah AGM batteries",
      "ABS casing, M6 bolts",
      "Pack of 2"
    ],
    "pros": [
      "Two lighter batteries instead of one",
      "Leak-proof AGM design",
      "Easy M6 bolt wiring",
      "Lowest cost in the list"
    ],
    "cons": [
      "Only 35Ah each",
      "Needs parallel wiring for 70Ah"
    ],
    "bestFor": "Light loads and small rigs",
    "take": "A light, cheap pair for small loads.",
    "catch": "Not enough for a fridge overnight."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Amp-hours from 35Ah to 200Ah."
  },
  {
    "title": "Dual-purpose versus deep cycle",
    "description": "Starting and deep cycle claims."
  },
  {
    "title": "Self-discharge",
    "description": "Stated monthly figures."
  },
  {
    "title": "Temperature range",
    "description": "Listed charge and discharge limits."
  },
  {
    "title": "Wiring",
    "description": "Series and parallel notes."
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
          "Large solar bank",
          "Renogy 200Ah AGM",
          "200Ah in one battery."
        ],
        [
          "Van with engine starting",
          "Mighty Max 31M AGM",
          "825 CCA and 110Ah."
        ],
        [
          "RV or boat with limited tray",
          "Weize 27M Dual-Purpose AGM",
          "92Ah with 580 CCA."
        ],
        [
          "Standard 100Ah solar",
          "Weize 100Ah AGM",
          "Pure deep cycle with 1150A."
        ],
        [
          "Building a bank",
          "Renogy 100Ah AGM",
          "Parallel up to four."
        ],
        [
          "Light loads",
          "Daakmax 35Ah AGM 2-Pack",
          "Two light batteries."
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
          "$130 to $170",
          "Daakmax 35Ah AGM 2-Pack or Renogy 100Ah AGM"
        ],
        [
          "$160 to $190",
          "Weize 100Ah AGM or Weize 27M Dual-Purpose AGM"
        ],
        [
          "$240 to $260",
          "Mighty Max 31M AGM or Renogy 200Ah AGM"
        ]
      ]
    }
  },
  {
    "subheading": "Dual-Purpose vs Pure Deep Cycle",
    "cards": [
      {
        "label": "Dual-purpose",
        "text": "Can start an engine and run a load, but limits deep cycling. The Mighty Max 31M AGM and Weize 27M Dual-Purpose AGM are this type."
      },
      {
        "label": "Pure deep cycle",
        "text": "Built for repeated deep discharge. The Renogy 200Ah AGM, Weize 100Ah AGM, Renogy 100Ah AGM and Daakmax 35Ah AGM 2-Pack suit solar and house banks."
      }
    ],
    "note": "Pick a pure deep cycle like the Weize 100Ah AGM for house loads and a dual-purpose only if one battery must do both."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "Top capacity",
          "Renogy 200Ah AGM"
        ],
        [
          "Dual-purpose mid",
          "Mighty Max 31M AGM"
        ],
        [
          "Standard 100Ah",
          "Weize 100Ah AGM"
        ],
        [
          "Value 100Ah",
          "Renogy 100Ah AGM"
        ],
        [
          "Lowest total cost",
          "Daakmax 35Ah AGM 2-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Solar and Trailer Banks",
    "cards": [
      {
        "label": "Look for",
        "text": "Stated series and parallel limits plus a sensible temperature range."
      },
      {
        "label": "In this comparison",
        "text": "The Renogy 100Ah AGM states parallel up to four and the Renogy 200Ah AGM gives big capacity."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Renogy 200Ah AGM for big banks or the Mighty Max 31M AGM if one battery must start and power."
      },
      {
        "label": "Save if",
        "text": "Save with the Renogy 100Ah AGM or Daakmax 35Ah AGM 2-Pack for lighter use."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Usable capacity",
    "explanation": "AGM batteries last longest if you use only about half of their rated amp-hours. A 100Ah battery gives roughly 50Ah before recharging. Size your bank by the daily watt-hours you use, then double it."
  },
  {
    "criterion": "Dual-purpose versus deep cycle",
    "explanation": "Dual-purpose batteries can start an engine and run a few loads, but they tolerate fewer deep discharges. Pure deep cycle models like the Weize 100Ah AGM handle repeated discharge. Check which label the listing uses."
  },
  {
    "criterion": "Charging profile",
    "explanation": "AGM wants a controlled charge, often about 14.4V. Overcharging dries the mat and shortens life, and an incorrect charger can damage it. Use a charger or controller set for AGM."
  },
  {
    "criterion": "Series, parallel and fusing",
    "explanation": "Connect batteries of the same make, size and age. Put a fuse near each positive terminal and use cables sized for the current. Never mix chemistries."
  },
  {
    "criterion": "Weight, temperature and safety",
    "explanation": "AGM is heavy, so plan the lift. Cold limits charging, and listings give the safe temperature range. Keep terminals covered, since a short can cause fire."
  }
];

export const faq = [
  {
    "q": "How much AGM battery do I need?",
    "a": "Add the watt-hours you use per day, divide by 12 for amp-hours, then double for the depth-of-discharge limit. A fridge and lights may need 100Ah or more. A Renogy 200Ah AGM covers bigger systems."
  },
  {
    "q": "What is the common mistake?",
    "a": "Mixing old and new batteries or different brands in one bank. They charge unevenly and shorten life. Buy matched batteries together."
  },
  {
    "q": "Is AGM worth it over lithium?",
    "a": "AGM costs less up front and tolerates a lot, but weighs more and gives less usable capacity. For occasional use the Weize 100Ah AGM is fine. Heavy daily cycling favors lithium."
  },
  {
    "q": "How do I wire two batteries in parallel?",
    "a": "Connect positives together and negatives together using equal-length cables, then fuse each positive. The Renogy 100Ah AGM supports up to four in parallel. Charge them as one bank."
  },
  {
    "q": "How do I store one?",
    "a": "Charge it fully, disconnect loads and store cool. Low self-discharge, like the Weize 100Ah AGM's listed monthly figure, means it holds charge but still needs top-ups. Check voltage every few months."
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
