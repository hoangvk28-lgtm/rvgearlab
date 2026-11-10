export const guideSlug = "best-propane-rv-water-heater";
export const guideTitle = "3 Best Propane RV Water Heater in 2026";
export const metaTitle = "Best Propane RV Water Heater in 2026";
export const metaDescription = "Three propane RV water heaters compared, a Suburban 6 gallon tank and two tankless units, by burner output, recovery and 12 volt needs.";
export const mainKeyword = "best propane rv water heater";
export const introParagraphs = [
  "Propane water heaters work anywhere you can carry fuel, but a tank and a tankless unit behave very differently. A tank keeps a reserve and recovers slowly, while a tankless unit heats on demand and needs 12 volts for its controls.",
  "Only three picks made this list, one tank and two tankless units. Never trust a headline flow rate without a stated temperature rise, and follow the maker's venting and install rules."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/514TLfNQdfL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-propane-rv-water-heater-1",
    "rank": 1,
    "badge": "Best Overall Tank",
    "name": "Suburban SW6D 6-Gallon RV Water Heater",
    "price": "$440.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/514TLfNQdfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01NBTVDBC?tag=rvgearlab-20",
    "description": "Suburban SW6D is a 6 gallon propane water heater with direct spark ignition, a porcelain-lined steel tank and a replaceable anode rod. The listing says an optional electric element adds campsite power use.\n\nAgainst FOGATTI InstaShower 7, it stores hot water instead of heating on demand. Against Ranein 65K, it needs no 12 volt controls for a fan.\n\nIt is the best match for owners who want a proven Suburban tank. Think of it as the pick for standard tank replacement.",
    "specs": [
      "6 gallon propane, DSI",
      "Porcelain-lined tank",
      "Replaceable anode rod"
    ],
    "pros": [
      "Known RV brand",
      "Replaceable anode rod",
      "Direct spark ignition",
      "Optional electric element"
    ],
    "cons": [
      "Small 6 gallon tank",
      "Electric element is optional"
    ],
    "bestFor": "Standard tank replacement"
  },
  {
    "id": "best-propane-rv-water-heater-2",
    "rank": 2,
    "badge": "Best 48K Tankless",
    "name": "FOGATTI InstaShower 7 RV Tankless Water Heater",
    "price": "$419.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Vwida+QtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BML288XM?tag=rvgearlab-20",
    "description": "FOGATTI InstaShower 7 is a 48,000 BTU propane tankless heater with a stated 2.5 GPM. The listing says it is CSA certified with forced exhaust, auto shutoff and freeze protection, with a high-altitude mode to 9,800 feet.\n\nAgainst Ranein 65K, it has a lower burner and a lower price. Against Suburban SW6D, it heats on demand.\n\nIt suits families who want tankless without the largest burner. Buyers focused on mid-size households will find it a sensible match.",
    "specs": [
      "48,000 BTU propane tankless",
      "2.5 GPM stated",
      "CSA certified per listing"
    ],
    "pros": [
      "CSA certified per the listing",
      "High-altitude mode to 9,800 feet",
      "Relief valve and remote included",
      "Anti-scald protection"
    ],
    "cons": [
      "Flow has no stated temperature rise",
      "Needs 12V power to run"
    ],
    "bestFor": "Mid-size households"
  },
  {
    "id": "best-propane-rv-water-heater-3",
    "rank": 3,
    "badge": "Best High-Output Tankless",
    "name": "Ranein RV Tankless Water Heater",
    "price": "$399.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UTi9wwvSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7GKVWT9?tag=rvgearlab-20",
    "description": "Ranein RA65EH is a 65,000 BTU propane tankless heater with a stated 3.9 GPM and CSA wording. The listing says it replaces most Suburban and Atwood 6, 10 and 12 gallon heaters in a 12.8 inch opening and has a remote showing gas use, voltage and flow.\n\nAgainst FOGATTI InstaShower 7, it has far more burner. Against Suburban SW6D, it heats on demand.\n\nIt suits big households and long showers. It earns its slot for large households.",
    "specs": [
      "65,000 BTU, 3.9 GPM stated",
      "CSA wording in title",
      "Remote shows gas, voltage, flow"
    ],
    "pros": [
      "65,000 BTU burner",
      "Remote shows gas use and voltage",
      "Replaces 6, 10 and 12 gallon tanks",
      "Flame-failure shutoff stated"
    ],
    "cons": [
      "Exterior door not included",
      "Flow has no stated temperature rise"
    ],
    "bestFor": "Large households"
  }
];

export const howWeEvaluated = [
  {
    "title": "Tank or tankless",
    "description": "We separated the stored-water tank from the on-demand units."
  },
  {
    "title": "Burner output",
    "description": "BTU and stated flow figures were compared."
  },
  {
    "title": "12 volt need",
    "description": "The 12 volt requirement for tankless controls was noted."
  },
  {
    "title": "Certification",
    "description": "CSA wording was repeated only where listed."
  },
  {
    "title": "Fit",
    "description": "Cutout and door sizes were compared."
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
    "subheading": "By Household",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Standard tank swap",
          "Suburban SW6D",
          "Suburban 6 gallon."
        ],
        [
          "Mid-size tankless",
          "FOGATTI InstaShower 7",
          "48,000 BTU."
        ],
        [
          "Large household",
          "Ranein 65K",
          "65,000 BTU."
        ],
        [
          "Dry camping, simple",
          "Suburban SW6D",
          "Propane tank, no fan."
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
          "$390 to $400",
          "Ranein 65K"
        ],
        [
          "$410 to $420",
          "FOGATTI InstaShower 7"
        ],
        [
          "Around $440",
          "Suburban SW6D"
        ]
      ]
    }
  },
  {
    "subheading": "Tank vs Tankless",
    "cards": [
      {
        "label": "Tank",
        "text": "Suburban SW6D stores hot water and recovers between uses."
      },
      {
        "label": "Tankless",
        "text": "FOGATTI InstaShower 7 and Ranein 65K heat on demand with propane and 12 volts."
      }
    ],
    "note": "Most owners should choose Suburban SW6D for a swap, and Ranein 65K if tankless is wanted."
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
          "Lowest cost",
          "Suburban SW6D"
        ],
        [
          "Mid cost",
          "FOGATTI InstaShower 7"
        ],
        [
          "Higher",
          "Ranein 65K"
        ],
        [
          "Premium output",
          "Ranein 65K"
        ]
      ]
    }
  },
  {
    "subheading": "For Dry Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Propane heat and low 12 volt draw, as on Suburban SW6D."
      },
      {
        "label": "In this comparison",
        "text": "Suburban SW6D runs on propane with ignition power only. Tankless units like Ranein 65K still need battery power for controls."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Ranein 65K or Suburban SW6D for output or a known brand."
      },
      {
        "label": "Save if",
        "text": "Save with FOGATTI InstaShower 7 for a lower-cost tankless."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Tank vs tankless",
    "explanation": "A tank keeps a reserve and recovers slowly, while tankless runs until the propane stops. Tankless needs 12 volts and venting. Choose by showers per day."
  },
  {
    "criterion": "Burner output",
    "explanation": "65,000 BTU heats more water per minute than 48,000 BTU, within each listing's claims. Larger households need more. Check the BTU rating."
  },
  {
    "criterion": "Flow with temperature rise",
    "explanation": "A GPM figure needs inlet and outlet temperatures to mean anything. Winter water gives lower flow. Look for the stated rise."
  },
  {
    "criterion": "12 volt controls",
    "explanation": "Tankless fans and controls run on 12 volts. A weak battery stops the heater. Check the draw."
  },
  {
    "criterion": "Cutout and door",
    "explanation": "Tankless units fit specific openings and doors. Ranein lists a 12.8 inch opening. Measure your cutout."
  },
  {
    "criterion": "Venting and install",
    "explanation": "Propane appliances need venting and gas connections per the manual. Follow it and local codes. Check named certifications."
  }
];

export const faq = [
  {
    "q": "Do propane tankless heaters need electricity?",
    "a": "Yes, 12 volts for the fan and controls. FOGATTI InstaShower 7 and Ranein 65K both use them."
  },
  {
    "q": "What is the common mistake?",
    "a": "Ignoring the temperature rise behind GPM. A flow figure alone does not tell you the hot water temperature."
  },
  {
    "q": "Is Suburban worth more than FOGATTI?",
    "a": "For a known brand and a simple tank, yes. FOGATTI InstaShower 7 heats on demand."
  },
  {
    "q": "How do I install it?",
    "a": "Follow the manual for gas, water and venting. Use a pressure relief valve."
  },
  {
    "q": "How do I winterize it?",
    "a": "Drain the tank or follow the tankless maker's anti-freeze notes. Leaving water in a heater can crack it."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best RV Water Heater",
    "href": "/water-plumbing/best-rv-water-heater"
  },
  {
    "title": "Best RV Water Heater Replacement",
    "href": "/water-plumbing/best-rv-water-heater-replacement"
  },
  {
    "title": "Best Tankless RV Water Heater",
    "href": "/water-plumbing/best-tankless-rv-water-heater"
  },
  {
    "title": "Best Anode Rod For RV Water Heater",
    "href": "/water-plumbing/best-anode-rod-for-rv-water-heater"
  }
];
