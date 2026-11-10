export const guideSlug = "best-rv-inverter-for-air-conditioner";
export const guideTitle = "3 Best RV Inverter For Air Conditioner in 2026";
export const metaTitle = "Best RV Inverter For Air Conditioner in 2026";
export const metaDescription = "Which RV inverter can start an air conditioner? AIMS 2000W inverter charger, EGSCATEE 2500W and Sunwheel 4000W compared on surge, DC amps and transfer.";
export const mainKeyword = "best rv inverter for air conditioner";
export const introParagraphs = [
  "An RV air conditioner is the hardest load an inverter will see. A 13,500 BTU rooftop unit often runs near 1,400 to 1,800 watts and its compressor can briefly pull several times that at startup unless it has a soft start. On the DC side, 2,000 watts means 170 amps or more at 12V. We picked three pure sine inverters with different strengths, and explain which one pairs with a soft start AC and which would need a larger battery bank or a higher voltage system."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/51OwO8qqdbL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-inverter-for-air-conditioner-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "2500W Pure Sine Wave Inverter",
    "price": "$219.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51OwO8qqdbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GT4FPNPH?tag=rvgearlab-20",
    "description": "The EGSCATEE 2500W is a pure sine wave inverter with 5,000W peak and a built-in automatic transfer switch that changes over in approximately 12 ms. It has a hardwired AC terminal block, a remote controller, dual cooling fans and about 3 AWG cables of 1.97 ft in the box.\n\nAt $219.99 it costs $722.01 less than the AIMS 2000W and adds 500W continuous. It does not charge batteries. Pick this if you want an AC capable inverter with a built-in transfer switch. Caveat: 3 AWG short cables suit shorter runs, and 2,500W at 12V draws over 210 amps.",
    "specs": [
      "2500W pure sine, 5000W peak",
      "Built-in ATS, about 12 ms",
      "Hardwire terminals, remote"
    ],
    "pros": [
      "Built-in transfer switch changes over in about 12 ms",
      "2,500W covers a soft start 13.5K BTU AC",
      "Remote controller included in the box"
    ],
    "cons": [
      "Does not charge batteries, per the listing",
      "2,500W draws over 210 amps at 12V"
    ],
    "bestFor": "Hardwired AC with a soft start"
  },
  {
    "id": "best-rv-inverter-for-air-conditioner-2",
    "rank": 2,
    "badge": "Best for Inverter Charger",
    "name": "AIMS 2000W 12V Pure Sine Inverter Charger w/Transfer Switch 120V Backup",
    "price": "$942.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41LLGgCCYeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00I36K1VQ?tag=rvgearlab-20",
    "description": "The AIMS 2000W is a low frequency pure sine inverter charger with 6,000W surge for up to 20 seconds, a 70 amp charger with LiFePO4 profile and a transfer switch. Its heavy transformer design is built for inductive loads such as AC compressors.\n\nAt $942 it costs $722.01 more than the EGSCATEE 2500W, but that price includes a 70A charger and a 20 second surge, a long window for compressor starts. Pick this if you want charging and switching in one box. Caveat: 2,000W continuous is tight for a 13.5K BTU unit without soft start.",
    "specs": [
      "2000W continuous, 6000W surge",
      "Surge lasts 20 seconds",
      "70A charger, transfer switch"
    ],
    "pros": [
      "6,000W surge for 20 seconds helps compressor starts",
      "70A charger supports LiFePO4 and AGM",
      "Transformer design handles inductive loads well"
    ],
    "cons": [
      "Costs $722.01 more than EGSCATEE 2500W",
      "2,000W continuous is tight for larger AC units"
    ],
    "bestFor": "All in one charger, inverter and transfer switch"
  },
  {
    "id": "best-rv-inverter-for-air-conditioner-3",
    "rank": 3,
    "badge": "Best Budget Headroom",
    "name": "SUNWHEEL 4000W Pure Sine Wave Inverter",
    "price": "$199.88",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51ErB8SKw6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CJXY9YFK?tag=rvgearlab-20",
    "description": "The Sunwheel 4000W is a pure sine inverter with 4,000W continuous and 8,000W peak at startup, efficiency over 90% and protections for undervoltage, overvoltage, overheating and overload. It ships with 4 cables and 6 fuses.\n\nAt $199.88 it is $20.11 cheaper than the EGSCATEE 2500W and has 1,500W more continuous rating, but it has no transfer switch or charger. Pick this if you run two AC units on a large bank. Caveat: at 12V, full load pulls over 330 amps, so use 24V or a very big lithium bank.",
    "specs": [
      "4000W continuous, 8000W peak",
      "Pure sine, over 90% efficient",
      "Cables and 6 fuses included"
    ],
    "pros": [
      "8,000W peak covers a hard compressor start",
      "$20.11 cheaper than EGSCATEE with more power",
      "Cables and fuses included in the box"
    ],
    "cons": [
      "No transfer switch or charger in the listing",
      "Full load pulls over 330 amps at 12V"
    ],
    "bestFor": "Large banks and two AC units"
  }
];

export const howWeEvaluated = [
  {
    "title": "Compressor start",
    "description": "We compared peak or surge ratings and their duration against a typical AC compressor start."
  },
  {
    "title": "Continuous headroom",
    "description": "We matched continuous watts against a 13,500 BTU unit's running draw."
  },
  {
    "title": "DC side",
    "description": "We converted watts to battery amps at 12V to flag cable and bank needs."
  },
  {
    "title": "Switching and charging",
    "description": "We noted whether each listing includes a transfer switch, charger and remote."
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
    "subheading": "By Air Conditioner Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Soft start 13.5K BTU rooftop",
          "EGSCATEE 2500W",
          "Continuous watts fit, 5,000W peak"
        ],
        [
          "Standard 13.5K BTU without soft start",
          "Sunwheel 4000W",
          "8,000W peak handles compressor kick"
        ],
        [
          "Small 9K to 10K BTU unit",
          "AIMS 2000W",
          "20 second surge, includes charger"
        ],
        [
          "Two AC units on a big bank",
          "Sunwheel 4000W",
          "4,000W continuous"
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
          "$190 to $200",
          "Sunwheel 4000W"
        ],
        [
          "$210 to $220",
          "EGSCATEE 2500W"
        ],
        [
          "$940 to $950",
          "AIMS 2000W"
        ]
      ]
    }
  },
  {
    "subheading": "Inverter Only vs Inverter Charger",
    "cards": [
      {
        "label": "Inverter only",
        "text": "EGSCATEE 2500W and Sunwheel 4000W convert DC to AC and are cheaper, but need a separate converter or charger."
      },
      {
        "label": "Inverter charger",
        "text": "AIMS 2000W adds a 70A charger and transfer switch, which simplifies install but costs far more per watt."
      }
    ],
    "note": "Most owners should default to a cheaper inverter plus their existing converter, unless wiring is being redone."
  },
  {
    "subheading": "By Battery Voltage",
    "table": {
      "headers": [
        "Best pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "12V lithium bank, 400Ah or more",
          "EGSCATEE 2500W"
        ],
        [
          "12V bank, 200Ah",
          "AIMS 2000W"
        ],
        [
          "Upgrading to 24V",
          "Sunwheel 4000W"
        ],
        [
          "Existing lead acid bank",
          "AIMS 2000W"
        ]
      ]
    }
  },
  {
    "subheading": "For Soft Start Air Conditioners Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A continuous rating about 1.5x the AC running watts, plus a stated surge time so the compressor start does not trip the inverter."
      },
      {
        "label": "In this comparison",
        "text": "EGSCATEE 2500W fits a soft start unit running near 1,500W. AIMS 2000W states a 20 second surge, which suits a compressor start, but its continuous rating is the limit."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on AIMS 2000W if you want charger, inverter and switching in one box with a 20 second surge."
      },
      {
        "label": "Save if",
        "text": "Save with Sunwheel 4000W at $199.88 if your bank is large and you have a separate converter."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "AC running and startup watts",
    "explanation": "The AC nameplate lists running amps, and multiplying by 120V gives running watts. A compressor can briefly draw 3 to 5 times that at startup unless soft started. Look at the nameplate, not the BTU number."
  },
  {
    "criterion": "DC amps at the battery",
    "explanation": "At 12V, 2,000W needs roughly 170 to 185 amps and 2,500W over 210. Lower voltage battery sags and cables heat. Check that your battery BMS and cable gauge can carry it."
  },
  {
    "criterion": "Surge duration",
    "explanation": "A surge rating is only useful for its duration: AIMS lists 6,000W for up to 20 seconds, while others list peak power without a time. Compressors need time to ramp. Look for a stated duration."
  },
  {
    "criterion": "Transfer switch and pass-through",
    "explanation": "A transfer switch moves your loads between shore power and inverter automatically. EGSCATEE lists about 12 ms and AIMS includes one. Without it, you must switch manually."
  },
  {
    "criterion": "Hardwire versus plug-in",
    "explanation": "AC loads run through breakers, and an AC wired to the panel needs a hardwired inverter. EGSCATEE has a terminal block. Check that the listing mentions terminals, not just outlets."
  }
];

export const faq = [
  {
    "q": "Can a 2000W inverter start a 13.5K BTU AC?",
    "a": "Only if the unit has a soft start. Without one the startup draw can exceed 2,000W."
  },
  {
    "q": "How long will a battery bank run an AC?",
    "a": "A 1,500W AC pulls roughly 125 amps from 12V, so a 400Ah lithium bank lasts about 3 hours."
  },
  {
    "q": "Is 12V enough for an RV air conditioner?",
    "a": "It is possible but demanding. Many installers prefer 24V or 48V to reduce amps."
  },
  {
    "q": "Does the EGSCATEE charge my batteries?",
    "a": "No. The listing states it is not a power source and cannot charge batteries."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Compact RV Inverter",
    "href": "/power-electrical/best-compact-rv-inverter"
  },
  {
    "title": "Best Pure Sine Wave Inverter For RV",
    "href": "/power-electrical/best-pure-sine-wave-inverter-for-rv"
  },
  {
    "title": "Best Quiet RV Inverter",
    "href": "/power-electrical/best-quiet-rv-inverter"
  },
  {
    "title": "Best RV Inverter For Boondocking",
    "href": "/power-electrical/best-rv-inverter-for-boondocking"
  }
];
