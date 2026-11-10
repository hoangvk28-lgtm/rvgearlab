export const guideSlug = "best-rv-inverter-for-solar";
export const guideTitle = "4 Best RV Inverter For Solar in 2026";
export const metaTitle = "Best RV Inverter For Solar in 2026";
export const metaDescription = "Four inverters for RV solar systems, from 24V hybrid units with built-in MPPT to a 12V inverter charger, with voltage matching and daily energy math.";
export const mainKeyword = "best rv inverter for solar";
export const introParagraphs = [
  "An RV solar system lives or dies on voltage and current compatibility, not on the panel wattage printed on the box. A hybrid inverter with a built-in solar charge controller can save you a separate component, but only if its PV input voltage and charge current match your array and your battery bank. These four picks include two 24V hybrids, a 12V inverter charger and a plain 12V inverter. Each section says what daily energy to expect so the sizing is grounded in reality."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41WZr+MgBUL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-inverter-for-solar-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "LANDERPOW 4000W Hybrid Solar All in One Inverter Charger-24V DC to 120V AC",
    "price": "$359.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41WZr+MgBUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GY437K8K?tag=rvgearlab-20",
    "description": "The LANDERPOW 4000W is a 24V hybrid solar inverter charger with pure sine output, a built-in 140A MPPT solar charge controller and PV, battery and utility AC inputs. At $359.99 it combines the inverter and controller into one box, which saves wiring and space in an RV bay.\n\nIt costs $20.00 less than the SRGFTS 4000W and $295.44 below the Renogy 2000W inverter charger. The 140A MPPT figure means roughly 3,300W of charging power at a 24V bank, so a large array can be fully used. Pick this if you plan a 24V lithium bank. Caveat: PV voltage limits are not listed, so verify them against your panel string before ordering.",
    "specs": [
      "4000W pure sine, 24V",
      "140A built-in MPPT",
      "PV, battery, utility inputs"
    ],
    "pros": [
      "Built-in 140A MPPT replaces a separate charge controller",
      "Accepts PV, battery and utility AC input",
      "Costs $20 less than the SRGFTS at the same rating"
    ],
    "cons": [
      "Only works with a 24V battery bank, not 12V",
      "Maximum PV voltage is not listed"
    ],
    "bestFor": "24V bank with a large array"
  },
  {
    "id": "best-rv-inverter-for-solar-2",
    "rank": 2,
    "badge": "Runner-Up",
    "name": "SUMRY Hybrid Solar Inverter",
    "price": "$379.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31cF0-z9JrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH9VVD93?tag=rvgearlab-20",
    "description": "The SRGFTS SUMRY is a 24V hybrid pure sine inverter rated 4000W with 8000W peak, a 6.25 inch glass-cover LCD with touch buttons, and the ability to run from PV without a battery in daytime. At $379.99 it matches the LANDERPOW on output and adds a large readable screen.\n\nIt costs $20.00 more than the LANDERPOW 4000W and $275.44 less than the Renogy 2000W. The PV-without-battery feature is useful if the bank is down but sunshine is strong. Pick this if you value the display and daytime PV running. Caveat: the excerpt does not state the MPPT amp rating or PV voltage window, so confirm both with the seller.",
    "specs": [
      "4000W rated, 8000W peak",
      "24V pure sine hybrid",
      "6.25 inch LCD display"
    ],
    "pros": [
      "Runs from PV in daytime even without a battery",
      "Large 6.25 inch touch display shows system status",
      "8000W peak output handles compressor and motor starts"
    ],
    "cons": [
      "Costs $20 more than the LANDERPOW",
      "MPPT current rating is not listed"
    ],
    "bestFor": "24V system with daytime PV running"
  },
  {
    "id": "best-rv-inverter-for-solar-3",
    "rank": 3,
    "badge": "Best 12V Inverter Charger",
    "name": "Renogy 2000w Pure Sine Wave Inverter Charger 12V DC to 120V AC Surge 6000w",
    "price": "$655.43",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iv-ro4N0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07PQR8HVQ?tag=rvgearlab-20",
    "description": "The Renogy 2000W is a 12V pure sine inverter charger with 6000W surge and a 4-stage battery charger covering GEL, AGM, SLA and flooded batteries. At $655.43 it is the most expensive pick per watt, but it is a 12V solution that fits an existing RV with a 12V bank and a separate solar controller.\n\nIt costs $275.44 more than the SRGFTS 4000W and $425.44 more than the OLTEANP 2500W, and it has no built-in solar controller. Pick this if you want a 12V inverter charger that also charges from shore power and pairs with a Renogy controller. Caveat: 2000W limits you to one big appliance.",
    "specs": [
      "2000W, 6000W surge",
      "12V pure sine wave",
      "4-stage charger"
    ],
    "pros": [
      "4-stage charger supports several battery types",
      "6000W surge covers compressor and motor loads easily",
      "Fits an existing 12V solar controller setup"
    ],
    "cons": [
      "Most expensive per watt at $655.43",
      "No solar controller built in, so add one separately"
    ],
    "bestFor": "12V coach with a separate controller"
  },
  {
    "id": "best-rv-inverter-for-solar-4",
    "rank": 4,
    "badge": "Best Budget",
    "name": "2500W Pure Sine Wave Power Inverter with Transfer Switch for RV",
    "price": "$229.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YnjfEt7yL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DF7BTYKP?tag=rvgearlab-20",
    "description": "The OLTEANP 2500W is a 12V pure sine inverter with a 12ms automatic transfer switch, rated 2500W continuous and 5000W peak. At $229.99 it handles AC loads in a solar RV when paired with a separate charge controller.\n\nIt is $130.00 under the LANDERPOW 4000W and $425.44 below the Renogy 2000W, but it has no solar controller or listed charger. Pick this if your solar controller is already installed and you just need inverter power. Caveat: 2500W at 12V draws about 208 amps, so cabling is the hidden cost.",
    "specs": [
      "2500W, 5000W peak",
      "12ms transfer switch",
      "12V pure sine wave"
    ],
    "pros": [
      "Transfer switch hands off between shore and battery",
      "5000W peak covers short motor starts",
      "Lowest price among the 2500W-plus picks"
    ],
    "cons": [
      "No solar controller or charger listed",
      "About 208A draw at 12V needs thick cable"
    ],
    "bestFor": "Existing solar controller, inverter only"
  }
];

export const howWeEvaluated = [
  {
    "title": "Voltage compatibility",
    "description": "We checked battery voltage and, where listed, the PV input details of each unit."
  },
  {
    "title": "Solar integration",
    "description": "We compared built-in MPPT against needing a separate controller."
  },
  {
    "title": "Daily energy fit",
    "description": "We estimated daily solar energy against the load each inverter can serve."
  },
  {
    "title": "Value",
    "description": "We compared price against capacity and what else you must buy."
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
          "24V lithium bank, large array",
          "LANDERPOW 4000W",
          "Built-in 140A MPPT matches big arrays"
        ],
        [
          "24V bank, want a big display",
          "SRGFTS 4000W",
          "6.25 inch LCD and PV-without-battery running"
        ],
        [
          "12V bank with separate controller",
          "Renogy 2000W",
          "Inverter charger for 12V systems"
        ],
        [
          "12V bank, inverter only",
          "OLTEANP 2500W",
          "Transfer switch at the lowest price"
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
          "$220 to $360",
          "OLTEANP 2500W or LANDERPOW 4000W"
        ],
        [
          "$370 to $660",
          "SRGFTS 4000W or Renogy 2000W"
        ]
      ]
    }
  },
  {
    "subheading": "Hybrid Inverter vs Separate Components",
    "cards": [
      {
        "label": "Hybrid",
        "text": "One box does inverting and solar charging, saving space. LANDERPOW 4000W and SRGFTS 4000W are examples."
      },
      {
        "label": "Separate components",
        "text": "A controller plus inverter lets you upgrade each. Renogy 2000W and OLTEANP 2500W fit here."
      }
    ],
    "note": "Most new 24V installs should default to the LANDERPOW 4000W."
  },
  {
    "subheading": "By Array Size",
    "table": {
      "headers": [
        "Best pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under 400W of panels, 12V",
          "OLTEANP 2500W"
        ],
        [
          "400 to 800W of panels, 12V",
          "Renogy 2000W"
        ],
        [
          "800W or more, 24V",
          "LANDERPOW 4000W"
        ],
        [
          "1,000W or more with big display",
          "SRGFTS 4000W"
        ]
      ]
    }
  },
  {
    "subheading": "For Daily Energy Planning Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Panel watts times roughly 4 peak sun hours times 0.75 system efficiency gives daily watt-hours; compare to your load total."
      },
      {
        "label": "In this comparison",
        "text": "A 800W array yields about 2,400Wh daily, which LANDERPOW 4000W can use fully; Renogy 2000W suits smaller arrays."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the SRGFTS 4000W if you want the large display and PV-without-battery running."
      },
      {
        "label": "Save if",
        "text": "Save with the OLTEANP 2500W if a solar controller is already installed."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Voltage and current match",
    "explanation": "A solar controller must accept your array's voltage and deliver your bank's charge current. A 140A controller at 24V is about 3,300W of charge. Check PV voltage limits on the spec sheet."
  },
  {
    "criterion": "Daily energy math",
    "explanation": "Panel watts times about 4 sun hours times 0.75 gives daily output. A 400W array yields about 1,200Wh. Compare to your load in watt-hours."
  },
  {
    "criterion": "Hybrid versus separate",
    "explanation": "A hybrid saves space but ties inverter and controller together. If one fails, both go. Weigh the convenience against flexibility."
  },
  {
    "criterion": "Battery chemistry",
    "explanation": "Lithium iron phosphate, AGM and flooded lead acid batteries each want a different charge voltage profile, and a wrong setting shortens battery life or leaves it undercharged. Charging a lithium bank on a lead acid profile is a common and costly mistake. Look for LiFePO4 or your chemistry named in the listing, and confirm the settings are adjustable."
  },
  {
    "criterion": "Cable current",
    "explanation": "Watts divided by battery volts gives current. A 24V bank halves it compared to 12V. Size cable and fuse to that number."
  }
];

export const faq = [
  {
    "q": "Do I need a separate solar charge controller?",
    "a": "Not with the LANDERPOW 4000W or SRGFTS 4000W, which are hybrids. The Renogy 2000W and OLTEANP 2500W need one."
  },
  {
    "q": "Can I run from solar without a battery?",
    "a": "The SRGFTS 4000W lists daytime PV running without a battery. Others do not."
  },
  {
    "q": "How much energy does a 400W array make daily?",
    "a": "About 1,200Wh with 4 sun hours and typical losses."
  },
  {
    "q": "Is 24V better than 12V for solar?",
    "a": "Yes for larger arrays, since current is halved."
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
