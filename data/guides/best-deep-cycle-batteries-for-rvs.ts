export const guideSlug = "best-deep-cycle-batteries-for-rvs";
export const guideTitle = "4 Best Deep Cycle Batteries For Rvs in 2026";
export const metaTitle = "Best Deep Cycle Batteries For Rvs in 2026";
export const metaDescription = "Best deep cycle batteries for RVs compared on chemistry, group size, weight, cold-charging limits and 12V 100Ah capacity for house banks.";
export const mainKeyword = "best deep cycle batteries for rvs";
export const introParagraphs = [
  "An RV house battery runs the lights, water pump, furnace fan and fridge control board while the engine is off. The big choice is between sealed AGM and lithium iron phosphate, which trade price and cold tolerance for weight and usable capacity.",
  "Four 12V 100Ah batteries were compared: two AGM and two LiFePO4. Group size, weight, listed temperature limits, BMS protections and charging guidance decided the order, since all four share the same headline capacity."
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
    "id": "best-deep-cycle-batteries-for-rvs-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "12V 100Ah LiFePO4 Battery",
    "price": "$179.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51z6WGt3HJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FN3TVVD8?tag=rvgearlab-20",
    "description": "The Super Empower is a 12.8V 100Ah LiFePO4 battery in BCI Group 24 size, measuring 6.49 by 10.24 by 8.98 inches and weighing 21.6 lb. It has M8 terminals, Grade A cells and a built-in low-temperature function that pauses charging below 32 degrees F.\n\nIt is the lightest pick and the only one that is a drop-in Group 24 fit. Compared with the VEMDIA it is smaller in footprint and carries named charging options for solar, generator and alternator.\n\nIt suits RV owners swapping a tired lead-acid battery for lighter lithium without rebuilding the box. Discharge stops at -4 degrees F and resumes above 41 degrees F.",
    "specs": [
      "12.8V 100Ah LiFePO4, Group 24",
      "21.6 lb, 6.49 x 10.24 x 8.98 in",
      "Low-temperature charge cutoff"
    ],
    "pros": [
      "21.6 lb drop-in Group 24 size",
      "Pauses charging below 32 F",
      "Works with MPPT and PWM lithium mode",
      "M8 terminals"
    ],
    "cons": [
      "Price above the AGM options",
      "Needs a lithium charge profile"
    ],
    "bestFor": "Weight-conscious upgrades",
    "take": "A lighter lithium swap that fits a standard Group 24 tray.",
    "catch": "Charging stops in freezing weather, which matters for winter camping."
  },
  {
    "id": "best-deep-cycle-batteries-for-rvs-2",
    "rank": 2,
    "badge": "Best Value Lithium",
    "name": "12V 100Ah LiFePO4 Lithium Battery Deep Cycle for RV",
    "price": "$145.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41IQBJwAjvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FPYNK8WW?tag=rvgearlab-20",
    "description": "The VEMDIA is a 12V 100Ah LiFePO4 battery in Group 31 size, weighing 24 lb. A 100A smart BMS guards against overcharge, over-discharge, over-current and short circuits, with 15,000 cycles at 60 percent DoD listed.\n\nIt costs less than the Super Empower and the AGM Weize. Compared with the Renogy AGM it weighs a fraction and lists a much longer cycle life.\n\nIt suits RV and trolling motor users who want lithium at a lower price. Fast charging in about 5 hours at 14.6V and 20A is listed.",
    "specs": [
      "12V 100Ah LiFePO4, Group 31",
      "100A smart BMS, 24 lb",
      "15,000 cycles at 60% DoD"
    ],
    "pros": [
      "Lowest price in the list",
      "100A BMS with four protections",
      "Cycle life listed at 15,000",
      "Charges in about 5 hours with 20A"
    ],
    "cons": [
      "Group 31 size may not fit Group 24 trays",
      "Needs a lithium charger"
    ],
    "bestFor": "Budget lithium upgrade",
    "take": "The cheapest lithium here, with a strong BMS.",
    "catch": "Check the tray dimensions, since Group 31 is larger than Group 24."
  },
  {
    "id": "best-deep-cycle-batteries-for-rvs-3",
    "rank": 3,
    "badge": "Best AGM Pick",
    "name": "Weize Deep Cycle AGM 12 Volt 100Ah Battery",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bqV6Wt2oL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07SW353M8?tag=rvgearlab-20",
    "description": "The Weize 12V 100Ah AGM measures 12.99 by 6.73 by 8.43 inches, with 1 to 3 percent monthly self-discharge and a 1150A maximum discharge current. Charging works from 14 to 122 degrees F.\n\nIt is higher priced than the VEMDIA and Renogy and lists the highest discharge current of the AGM pair. Compared with the lithium picks it uses a plain AGM charge profile and gives up the weight savings.\n\nIt suits RV owners who want a sealed, low-maintenance battery without a lithium charger. Low self-discharge helps when the rig sits in storage.",
    "specs": [
      "12V 100Ah AGM",
      "1150A max discharge",
      "12.99 x 6.73 x 8.43 in"
    ],
    "pros": [
      "No lithium charger required",
      "Low monthly self-discharge",
      "Sealed and maintenance free",
      "1150A discharge current"
    ],
    "cons": [
      "Much heavier than lithium",
      "Usable capacity is about half"
    ],
    "bestFor": "Storage-heavy rigs",
    "take": "A conventional AGM choice for owners who skip lithium.",
    "catch": "Lead-acid style batteries should not be drained below about half."
  },
  {
    "id": "best-deep-cycle-batteries-for-rvs-4",
    "rank": 4,
    "badge": "Best Parallel Bank",
    "name": "Renogy 12 Volt 100Ah Deep Cycle AGM Battery",
    "price": "$166.24",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31soCn59teL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075RFXHYK?tag=rvgearlab-20",
    "description": "The Renogy 12V 100Ah AGM supports series connections without limit and parallel connections up to four batteries. It works from -4 to 140 degrees F and lists a 1100A five-second discharge.\n\nIt costs less than the Weize 100Ah and works in a wider temperature range than the lithium picks' charge limits. Compared with the Super Empower it weighs more and lacks a BMS.\n\nIt suits campers who build a larger bank from several identical batteries. The listing says it can run a fridge, microwave and CPAP.",
    "specs": [
      "12V 100Ah AGM",
      "Parallel up to four",
      "-4 to 140 degrees F"
    ],
    "pros": [
      "Parallel up to four batteries",
      "Works in freezing temperatures",
      "Cheaper than the Weize AGM",
      "Powers fridge and CPAP"
    ],
    "cons": [
      "Heavy compared with lithium",
      "No BMS protection"
    ],
    "bestFor": "Larger battery banks",
    "take": "A flexible AGM for building banks, cheaper than the Weize.",
    "catch": "Microwaves draw high current, so size the inverter and cables."
  }
];

export const howWeEvaluated = [
  {
    "title": "Chemistry",
    "description": "AGM versus LiFePO4."
  },
  {
    "title": "Size and weight",
    "description": "Group 24 and Group 31, and listed weights."
  },
  {
    "title": "Cold behavior",
    "description": "Temperature limits."
  },
  {
    "title": "Protection",
    "description": "BMS and fusing."
  },
  {
    "title": "Capacity",
    "description": "Usable amp-hours."
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
    "subheading": "By Upgrade Goal",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Swap into a Group 24 tray",
          "Super Empower Group 24 LiFePO4",
          "Group 24 drop-in at 21.6 lb."
        ],
        [
          "Cheap lithium",
          "VEMDIA 100Ah LiFePO4",
          "Lowest price."
        ],
        [
          "Sealed AGM, no lithium charger",
          "Weize 100Ah AGM",
          "Maintenance free."
        ],
        [
          "Building a big bank",
          "Renogy 100Ah AGM",
          "Parallel up to four."
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
          "$140 to $170",
          "VEMDIA 100Ah LiFePO4 or Renogy 100Ah AGM"
        ],
        [
          "$160 to $180",
          "Weize 100Ah AGM or Super Empower Group 24 LiFePO4"
        ]
      ]
    }
  },
  {
    "subheading": "AGM vs Lithium",
    "cards": [
      {
        "label": "AGM",
        "text": "Sealed and proven, using existing chargers, but heavy. The Weize 100Ah AGM and Renogy 100Ah AGM are AGM."
      },
      {
        "label": "Lithium",
        "text": "Light with a long cycle life but a lithium charger required. The Super Empower Group 24 LiFePO4 and VEMDIA 100Ah LiFePO4 are lithium."
      }
    ],
    "note": "Choose the Super Empower Group 24 LiFePO4 for weight and AGM like the Renogy 100Ah AGM to keep an existing charger."
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
          "Premium lithium",
          "Super Empower Group 24 LiFePO4"
        ],
        [
          "Budget lithium",
          "VEMDIA 100Ah LiFePO4"
        ],
        [
          "AGM, higher",
          "Weize 100Ah AGM"
        ],
        [
          "AGM, lower",
          "Renogy 100Ah AGM"
        ]
      ]
    }
  },
  {
    "subheading": "Winter RV Use",
    "cards": [
      {
        "label": "Look for",
        "text": "A listed low-temperature range and a battery that charges safely."
      },
      {
        "label": "In this comparison",
        "text": "The Renogy 100Ah AGM lists -4 to 140 degrees F, and the Super Empower Group 24 LiFePO4 pauses charging below freezing."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Super Empower Group 24 LiFePO4 for a drop-in swap with cold-charge protection."
      },
      {
        "label": "Save if",
        "text": "Save with the VEMDIA 100Ah LiFePO4 for lithium, or Renogy 100Ah AGM for AGM."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "AGM versus LiFePO4",
    "explanation": "AGM costs less up front and works with most existing chargers, while LiFePO4 weighs far less and allows deeper discharge. Lithium needs a matching charge profile. Pick by weight, budget and winter use."
  },
  {
    "criterion": "Usable capacity",
    "explanation": "AGM lasts longest when used to about 50 percent depth of discharge, so 100Ah delivers roughly 50Ah. LiFePO4 can usually use most of its rating. Size the bank by daily watt-hours."
  },
  {
    "criterion": "Group size and tray fit",
    "explanation": "Group 24 and Group 31 differ in length and height, so measure your tray. A drop-in fit saves rewiring. Check dimensions and terminal type on the listing."
  },
  {
    "criterion": "Cold weather and charging",
    "explanation": "Lithium charging pauses below freezing on batteries with a low-temperature function, which the Super Empower lists. AGM can charge more widely, within the listed range. Check winter use first."
  },
  {
    "criterion": "BMS, fuses and wiring",
    "explanation": "A built-in BMS protects lithium cells from overcharge, over-discharge and short circuits. Fuse the positive lead near the battery and use matched cables. Never mix chemistries in one bank."
  }
];

export const faq = [
  {
    "q": "How big a battery does an RV need?",
    "a": "Add your daily watt-hours and divide by 12, then size for the depth-of-discharge limit. A lights and fan load may fit one 100Ah battery, while a fridge and inverter need more. Buy extra in parallel."
  },
  {
    "q": "What is the common mistake?",
    "a": "Mixing a lithium battery into an AGM bank or using the wrong charger profile. The Super Empower Group 24 LiFePO4 needs a lithium setting. Set the charger before connecting."
  },
  {
    "q": "Is lithium worth the price?",
    "a": "For weight and cycle life, yes, such as the VEMDIA 100Ah LiFePO4. AGM like the Weize 100Ah AGM is cheaper and simpler. Choose by use pattern."
  },
  {
    "q": "How do I replace a house battery?",
    "a": "Disconnect the negative first, then the positive, swap the battery, and reconnect positive then negative. Fuse the positive near the battery. Check the charger profile."
  },
  {
    "q": "How do I protect it in winter?",
    "a": "Keep lithium above freezing when charging, or insulate it, and top up AGM before storage. Disconnect loads. The Renogy 100Ah AGM's low-temperature range helps."
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
