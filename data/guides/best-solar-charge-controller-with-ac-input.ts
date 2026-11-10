export const guideSlug = "best-solar-charge-controller-with-ac-input";
export const guideTitle = "6 Best Solar Charge Controller With AC Input in 2026";
export const metaTitle = "Best Solar Charge Controller With AC Input";
export const metaDescription = "Six hybrid inverter chargers with solar MPPT and AC input for shore or generator power, covering 12V, 24V and 48V banks and output voltage differences.";
export const mainKeyword = "best solar charge controller with ac input";
export const introParagraphs = [
  "Solar charge controllers do not take AC power, so an AC input means a hybrid inverter-charger that adds a battery charger and often a transfer switch. This guide compares six such units, from an 1800W 12V model to a 12000W 48V split-phase system.",
  "This guide emphasizes listings that state utility or grid charging, and this guide flags output voltage and system size. The largest units are home-scale products rather than RV equipment."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31eXlkCeNYL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-solar-charge-controller-with-ac-input-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "SUNGOLDPOWER UL1741 5000W Hybrid Solar Inverter",
    "price": "$699.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31eXlkCeNYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FL7CF58H?tag=rvgearlab-20",
    "description": "SUNGOLDPOWER's 5000W is a 48V hybrid inverter with an 80A MPPT and a 40A AC charger, with four charging and four output modes. SUNGOLDPOWER's 5000W 48V hybrid inverter converts to 110/120V AC and combines an 80A MPPT solar charger with a 40A AC battery charger. Four charging modes (AC priority, solar priority, only solar, mains and solar) and four output modes are listed, with up to 5500W and 500V of PV input.\n\nIt outputs more than Renogy 3500W Hybrid but is bigger. UL1741 is named in the title.\n\nBest for a large 48V rig. It is the strongest AC-plus-solar option for a large 48V off-grid rig with 120V loads.",
    "specs": [
      "5000W hybrid inverter, 48V",
      "80A MPPT, 40A AC charger",
      "UL1741 listed"
    ],
    "pros": [
      "UL1741 listing named in the title",
      "Four charging and four output modes",
      "Runs a 4HP motor load per the listing",
      "Takes over if mains or solar drops out"
    ],
    "cons": [
      "Needs a 48V battery bank",
      "Large for a typical trailer"
    ],
    "bestFor": "Large 48V hybrid"
  },
  {
    "id": "best-solar-charge-controller-with-ac-input-2",
    "rank": 2,
    "badge": "Best Brand",
    "name": "Renogy 3500W Hybrid Solar Inverter Charger 48V DC to 120V AC",
    "price": "$499.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/311d6iKWahL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HKFYZ8DL?tag=rvgearlab-20",
    "description": "Renogy's 3500W hybrid has an 80A/150V MPPT and a 40A battery charger at 120V output. Renogy's 3500W hybrid inverter charger converts 48V DC to 120V AC with 7000W peak surge and integrates an 80A/150V MPPT solar controller and a 40A battery charger. Idle draw is listed at 48W, falling to 25W in power-saving mode.\n\nIt is smaller than SUNGOLDPOWER 5000W and priced lower. It needs a 48V bank.\n\nBest for a mid-size 48V rig. It is a clean, 120V-output option for a 48V bank where solar and shore or generator AC both need to charge.",
    "specs": [
      "3500W hybrid inverter, 48V",
      "80A/150V MPPT built in",
      "40A AC battery charger"
    ],
    "pros": [
      "Pure sine wave with 7000W peak surge",
      "80A MPPT and 40A charger in one unit",
      "48W idle draw, 25W in power-saving mode",
      "Uninterruptible supply if AC or solar fails"
    ],
    "cons": [
      "Needs a 48V battery bank",
      "Pricier than 24V hybrids"
    ],
    "bestFor": "Mid-size 48V"
  },
  {
    "id": "best-solar-charge-controller-with-ac-input-3",
    "rank": 3,
    "badge": "Best 24V",
    "name": "SUMRY Hybrid Solar Inverter Charger 3600W DC24V to AC110V Voltage Converter",
    "price": "$309.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31KO5hNchYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH9G2MXP?tag=rvgearlab-20",
    "description": "SUMRY's 3600W is a 24V hybrid with a 120A MPPT and a 100A AC battery charger. The SUMRY hybrid inverter charger turns 24V DC into 110V AC at 3600W (7200W peak) and has a built-in 120A MPPT controller. It works with most 24V batteries (AGM, gel, lead-acid and lithium-ion) and lets you set the charging and output priority for solar, battery or utility.\n\nIt has a stronger AC charger than Renogy 3500W Hybrid but a 24V bank. The listing is home-oriented.\n\nBest for a 24V system that wants utility priority. It is a mid-power 24V option when you want to prioritize solar over utility power.",
    "specs": [
      "3600W hybrid inverter, 24V",
      "120A MPPT built in",
      "110/120V pure sine output"
    ],
    "pros": [
      "7200W peak with 3600W continuous",
      "Works with or without a battery",
      "Configurable charging and output priority",
      "Pure sine output for general appliances"
    ],
    "cons": [
      "Needs a 24V battery bank",
      "Home-oriented design, not RV-specific"
    ],
    "bestFor": "24V with AC"
  },
  {
    "id": "best-solar-charge-controller-with-ac-input-4",
    "rank": 4,
    "badge": "Best 12V",
    "name": "DATOUBOSS Solar Inverter 1800W12V to 120V Built‑in 100A MPPT Solar Charger",
    "price": "$239.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41QoYt5LhsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HJZRRQ2M?tag=rvgearlab-20",
    "description": "DATOUBOSS's 1800W is a 12V to 120V inverter with dual 100A MPPT that draws utility power when needed. DATOUBOSS packs an 1800W 12V-to-120V pure sine inverter and dual 100A MPPT controllers into one case. The listing cites 99.9% tracking efficiency and a clear LCD with multi-color LEDs, and says it draws utility power when solar and battery are not enough.\n\nIt is the only 12V choice here but is much smaller than SUMRY 3600W.\n\nBest for a 12V RV with modest AC loads. It is the only 12V option in this set with 120V output, but add up your appliance wattage first.",
    "specs": [
      "1800W inverter, 12V to 120V",
      "Dual 100A MPPT built in",
      "LCD with color LEDs"
    ],
    "pros": [
      "12V input, matching most RV battery banks",
      "120V pure sine wave output",
      "Dual MPPT controllers with 99.9% tracking listed",
      "Clear LCD and multi-color LED indicators"
    ],
    "cons": [
      "1800W is modest for AC appliances",
      "Add up your load before buying"
    ],
    "bestFor": "12V hybrid"
  },
  {
    "id": "best-solar-charge-controller-with-ac-input-5",
    "rank": 5,
    "badge": "Best Home-Scale",
    "name": "12000W All in One Solar Hybrid Inverter with WiFi",
    "price": "$1049.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31jVMXXRkHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F9WP54ZJ?tag=rvgearlab-20",
    "description": "PROSOLI's 12000W is a 48V split-phase hybrid with two MPPT controllers and grid support. PROSOLI's 12000W unit is a 48V split-phase hybrid inverter with two built-in MPPT solar controllers and Wi-Fi monitoring. It supplies household loads from solar first, tops up from the grid when load is high, and lets up to six units be paralleled for 72kW.\n\nIt is far larger than any other pick and not RV-sized. It parallels up to six units.\n\nBest for a fixed off-grid home. It is a home-scale system and impractical for a travel trailer, so consider it only for a fixed off-grid build.",
    "specs": [
      "12000W hybrid inverter, 48V",
      "Two MPPT controllers built in",
      "Up to 6 units in parallel"
    ],
    "pros": [
      "Two built-in MPPT solar controllers",
      "Parallel up to 6 units for 72kW",
      "Touch screen with LED indicators",
      "Grid tops up automatically when load is too large"
    ],
    "cons": [
      "Sized for a house, far beyond RV needs",
      "Needs a 48V split-phase battery system"
    ],
    "bestFor": "Home-scale"
  },
  {
    "id": "best-solar-charge-controller-with-ac-input-6",
    "rank": 6,
    "badge": "Best for 230V",
    "name": "VEVOR Hybrid Solar Inverter",
    "price": "$395.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Oas+kz3bL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F1D4QGSY?tag=rvgearlab-20",
    "description": "VEVOR's 6000W is a 48V hybrid with a 120A MPPT and 220/230V output. VEVOR's 6000W hybrid inverter pairs a pure sine wave inverter with an MPPT solar controller and a Wi-Fi module, for 48V battery systems. The listing gives its output as single-phase 220/230V AC.\n\nIts listing does not spell out AC charging terms the way SUNGOLDPOWER 5000W does, so check the manual.\n\nBest for a 230V cabin. Its 220/230V output does not match standard US 120V RV outlets, so confirm the voltage before buying.",
    "specs": [
      "6000W hybrid inverter, 48V",
      "220/230V single-phase AC output",
      "Built-in MPPT and Wi-Fi"
    ],
    "pros": [
      "Combines inverter and MPPT controller",
      "Wi-Fi module for remote monitoring",
      "Designed for 48V battery systems",
      "Supports a range of battery types"
    ],
    "cons": [
      "Output is 220/230V, not US 120V",
      "Overkill for a typical RV power budget"
    ],
    "bestFor": "230V cabin"
  }
];

export const howWeEvaluated = [
  {
    "title": "AC input",
    "description": "This guide checks which listings name utility, mains or grid charging."
  },
  {
    "title": "Output voltage",
    "description": "120V, split-phase and 230V were compared."
  },
  {
    "title": "System voltage",
    "description": "12V to 48V banks were noted."
  },
  {
    "title": "MPPT size",
    "description": "Built-in MPPT ratings were compared."
  },
  {
    "title": "RV fit",
    "description": "Size was weighed against RV needs."
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
    "subheading": "By Battery Bank Voltage",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "12V bank",
          "DATOUBOSS 1800W",
          "12V to 120V with utility draw."
        ],
        [
          "24V bank",
          "SUMRY 3600W",
          "24V with a 100A AC charger."
        ],
        [
          "48V mid-size",
          "Renogy 3500W Hybrid",
          "40A AC charger."
        ],
        [
          "48V large",
          "SUNGOLDPOWER 5000W",
          "5000W with AC charging."
        ],
        [
          "48V home-scale",
          "PROSOLI 12000W",
          "12000W split-phase."
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
          "$230 to $310",
          "DATOUBOSS 1800W or SUMRY 3600W"
        ],
        [
          "$390 to $500",
          "VEVOR 6000W 48V or Renogy 3500W Hybrid"
        ],
        [
          "$690 to $1050",
          "SUNGOLDPOWER 5000W or PROSOLI 12000W"
        ]
      ]
    }
  },
  {
    "subheading": "120V vs 230V Output",
    "cards": [
      {
        "label": "120V",
        "text": "This matches US outlets. Renogy 3500W Hybrid and SUNGOLDPOWER 5000W list 110/120V output."
      },
      {
        "label": "230V",
        "text": "This needs 230V appliances. VEVOR 6000W 48V lists 220/230V output."
      }
    ],
    "note": "Choose Renogy 3500W Hybrid if you want 120V from a 48V bank."
  },
  {
    "subheading": "By Size",
    "table": {
      "headers": [
        "Size",
        "Recommended pick"
      ],
      "rows": [
        [
          "Small RV loads",
          "DATOUBOSS 1800W"
        ],
        [
          "Medium loads",
          "SUMRY 3600W"
        ],
        [
          "Large loads",
          "SUNGOLDPOWER 5000W"
        ],
        [
          "Whole home",
          "PROSOLI 12000W"
        ]
      ]
    }
  },
  {
    "subheading": "For Shore Power Backup Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for utility or grid charging and a transfer feature so power switches over smoothly."
      },
      {
        "label": "In this comparison",
        "text": "SUNGOLDPOWER 5000W lists AC charging with four charge modes, and SUMRY 3600W lists utility priority."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more for 48V capacity, where SUNGOLDPOWER 5000W or Renogy 3500W Hybrid beats the smaller units."
      },
      {
        "label": "Save if",
        "text": "Save with DATOUBOSS 1800W if your bank is 12V and loads are modest."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "AC input confirmed on the listing",
    "explanation": "A hybrid label alone does not guarantee a utility charger. Look for wording like AC charger, grid charging or mains priority, and an amp figure. If the listing is silent, ask the seller before you plan around shore power."
  },
  {
    "criterion": "Output voltage and phase",
    "explanation": "US RV outlets expect 120V, and some home-scale units are split-phase 120/240V or single-phase 220/230V. Wrong voltage damages gear. Check the output line on the listing."
  },
  {
    "criterion": "AC charger amps",
    "explanation": "SUNGOLDPOWER 5000W lists a 40A AC charger and SUMRY 3600W lists 100A. Higher amps refill the bank faster from shore or a generator. Compare charger amps to your bank size."
  },
  {
    "criterion": "Bank voltage match",
    "explanation": "These units run from 12V, 24V or 48V banks, and a typical RV is 12V. Switching means new wiring or batteries. Match your bank before you compare watts."
  },
  {
    "criterion": "Priority modes",
    "explanation": "Charging and output priority decide whether solar, battery or utility power comes first. Four listed modes give flexibility to save fuel or grid use. Look for the mode list on the listing."
  }
];

export const faq = [
  {
    "q": "Can a solar controller take AC input?",
    "a": "No. Plain controllers have no AC input, so you need a hybrid inverter-charger like these."
  },
  {
    "q": "What mistake do buyers make with an AC-input hybrid inverter?",
    "a": "Buying the wrong output voltage. Check 120V versus 230V."
  },
  {
    "q": "Are these worth it for RVs?",
    "a": "Only the small ones. SUNGOLDPOWER 5000W and PROSOLI 12000W are home-scale."
  },
  {
    "q": "What is the safest way to wire an AC-input hybrid inverter?",
    "a": "Follow the manual's terminal and breaker instructions. On an AC-input hybrid inverter, double-check polarity at every terminal before powering up and use wire sized for the rated amps."
  },
  {
    "q": "How should I maintain an AC-input hybrid inverter?",
    "a": "On an AC-input hybrid inverter, tighten terminals and inspect cable insulation at the start of each season, and keep vents, fans or heat-sink surfaces free of dust. Check terminals and keep vents clear."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Solar Charge Controller",
    "href": "/power-electrical/best-solar-charge-controller"
  },
  {
    "title": "Best MPPT Solar Charge Controller",
    "href": "/power-electrical/best-mppt-solar-charge-controller"
  },
  {
    "title": "Best PWM Solar Charge Controller",
    "href": "/power-electrical/best-pwm-solar-charge-controller"
  },
  {
    "title": "Best Solar Charge Controller For RV",
    "href": "/power-electrical/best-solar-charge-controller-for-rv"
  }
];
