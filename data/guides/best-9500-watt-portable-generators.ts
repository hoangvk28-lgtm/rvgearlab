export const guideSlug = "best-9500-watt-portable-generators";
export const guideTitle = "2 Best 9500 Watt Portable Generators in 2026";
export const metaTitle = "Best 9500 Watt Portable Generators in 2026";
export const metaDescription = "Best 9500 watt portable generators compared on running watts, fuel options, CO shutdown and 50A outlets for large RVs and home backup.";
export const mainKeyword = "best 9500 watt portable generators";
export const introParagraphs = [
  "A 9500 watt generator is rated for two RV air conditioners or whole-home essentials, and it needs a 50A outlet and a plan for where it sits. Only two listings state this exact 9,500 watt peak figure, both from the same maker, so this guide is short.",
  "The two DuroMax inverter generators differ by fuel: one runs on gasoline and propane, the other adds natural gas. They were compared on stated running watts, fuel options, CO protection and outlet layout."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/furniture-chairs-campfire-night.webp";
export const heroImageAlt = "Two people in folding chairs around a campfire in autumn woods";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-9500-watt-portable-generators-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "DuroMax XP9500iH 9",
    "price": "$1999.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/513h7YRvMpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CX7DQKBG?tag=rvgearlab-amz-20",
    "description": "The DuroMax XP9500iH is a dual fuel inverter generator rated at 9,500 peak and 7,600 running watts, running on gasoline or propane. It has remote start, CO Alert auto shutdown and inverter power that the listing says suits televisions and computers.\n\nIt states the same 9,500 and 7,600 watt ratings as the XP9500iHT and costs less, since it skips natural gas. The listing positions it for emergency home power, job sites and RV camping.\n\nIt suits RV owners and households that want large-capacity inverter power with CO shutdown without paying for a third fuel. A remote start makes starting easy.",
    "specs": [
      "9,500 peak, 7,600 running watts",
      "Gas or propane, remote start",
      "CO Alert auto shutdown"
    ],
    "pros": [
      "Stated 7,600 running watts",
      "Dual fuel flexibility",
      "CO Alert shuts the unit off",
      "Inverter power for electronics"
    ],
    "cons": [
      "No natural gas option",
      "Weight and size are not stated"
    ],
    "bestFor": "RV and home backup on gas or propane",
    "take": "The better value of the two DuroMax models. Choose it unless you have a natural gas line.",
    "catch": "Weight and dimensions are not in the listing, so plan for a heavy unit."
  },
  {
    "id": "best-9500-watt-portable-generators-2",
    "rank": 2,
    "badge": "Best Tri-Fuel",
    "name": "DuroMax XP9500iHT 9",
    "price": "$2099.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ELA7wR3+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G62VGTCP?tag=rvgearlab-amz-20",
    "description": "The DuroMax XP9500iHT is a tri-fuel inverter generator rated at 9,500 peak and 7,600 running watts on gasoline. It runs on gasoline, propane or natural gas, has remote electric start, a 50 amp outlet and a built-in CO Alert shutdown.\n\nIt adds natural gas and a 50A plug for transfer switch or interlock kit connection, which the dual fuel XP9500iH does not name. The listing says it gives low total harmonic distortion for sensitive electronics.\n\nIt suits households that want whole-home backup with a natural gas supply. A key fob start and CO shutdown add convenience and a safety layer.",
    "specs": [
      "9,500 peak, 7,600 running watts",
      "Gas, propane or natural gas",
      "50A outlet, CO Alert"
    ],
    "pros": [
      "Runs on natural gas, propane or gasoline",
      "50A outlet for a transfer switch",
      "Low THD for sensitive electronics",
      "CO Alert shutdown"
    ],
    "cons": [
      "Higher price than the dual fuel model",
      "Weight and size are not stated"
    ],
    "bestFor": "Whole-home backup with natural gas",
    "take": "The more flexible of the pair, and the one for a house with a gas line.",
    "catch": "The listing gives running watts for gasoline only."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated output",
    "description": "Noted the peak and running watts on gasoline."
  },
  {
    "title": "Fuel options",
    "description": "Compared dual fuel and tri-fuel."
  },
  {
    "title": "Safety",
    "description": "Checked for CO shutdown."
  },
  {
    "title": "Outlets",
    "description": "Looked at the 50A outlet for home backup."
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
    "subheading": "By Fuel Plan",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Gasoline and propane",
          "DuroMax XP9500iH",
          "Dual fuel at a lower price"
        ],
        [
          "Natural gas supply",
          "DuroMax XP9500iHT",
          "Tri-fuel with a 50A outlet"
        ],
        [
          "Transfer switch connection",
          "DuroMax XP9500iHT",
          "50A outlet named"
        ],
        [
          "Large RV camping",
          "DuroMax XP9500iH",
          "Remote start and CO Alert"
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
          "$1990 to $2000",
          "DuroMax XP9500iH"
        ],
        [
          "$2090 to $2100",
          "DuroMax XP9500iHT"
        ]
      ]
    }
  },
  {
    "subheading": "Dual fuel vs tri-fuel",
    "cards": [
      {
        "label": "Dual fuel",
        "text": "The DuroMax XP9500iH runs on gasoline or propane and costs less."
      },
      {
        "label": "Tri-fuel",
        "text": "The DuroMax XP9500iHT adds natural gas and a named 50A outlet at a higher price."
      }
    ],
    "note": "Most buyers should default to the DuroMax XP9500iH unless a natural gas line is available."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price",
          "DuroMax XP9500iH"
        ],
        [
          "Natural gas runtime",
          "DuroMax XP9500iHT"
        ],
        [
          "Named 50A outlet",
          "DuroMax XP9500iHT"
        ]
      ]
    }
  },
  {
    "subheading": "For Large RVs Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Running watts for two air conditioners and a CO shutdown"
      },
      {
        "label": "In this comparison",
        "text": "The DuroMax XP9500iH offers 7,600 running watts with CO Alert, and the DuroMax XP9500iHT adds a 50A plug."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the DuroMax XP9500iHT if you can use natural gas or need a named 50A outlet."
      },
      {
        "label": "Save if",
        "text": "Save with the DuroMax XP9500iH if gasoline and propane are enough."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Peak versus running watts",
    "explanation": "The 9,500 peak figure covers a short start surge, while 7,600 running watts is what the unit can hold. Add up your running load, and plan on a margin. Look at the listing for both numbers and the fuel they apply to."
  },
  {
    "criterion": "Fuel derating",
    "explanation": "Propane and natural gas usually give lower output than gasoline. The 7,600 figure applies to gasoline in the listings, so assume less on gas fuels. Check the manual for the derated number."
  },
  {
    "criterion": "50A outlet and transfer switch",
    "explanation": "A 50A outlet allows connection to a transfer switch or interlock kit for whole-home backup, installed by a qualified electrician. Never connect with a cord that feeds back into a house outlet. Check the outlet list in the listing."
  },
  {
    "criterion": "CO shutdown",
    "explanation": "A CO sensor shuts the engine off when carbon monoxide builds up near the unit. It does not replace safe placement, which means outdoors and well away from doors and windows. Look for the CO feature named in the listing."
  },
  {
    "criterion": "Inverter power and noise",
    "explanation": "Inverter units give clean electricity for electronics and run quieter than open frames at light load. No decibel figure appears in either listing here. Check noise levels yourself before placing it near a campsite."
  }
];

export const faq = [
  {
    "q": "Can a 9500 watt generator run two RV air conditioners?",
    "a": "Two 13,500 BTU units can need around 3500 running watts plus start surge. The 7,600 running watts here have room for that, with soft start devices helping."
  },
  {
    "q": "Can I use it for whole-home backup?",
    "a": "Only through a properly installed transfer switch or interlock kit. The 50A outlet on the DuroMax XP9500iHT is named for that purpose."
  },
  {
    "q": "Is tri-fuel worth it over dual fuel?",
    "a": "It is if you have natural gas at the house, since it removes refueling. Otherwise the dual fuel unit costs less."
  },
  {
    "q": "Where should I run it?",
    "a": "Outdoors, 20 feet or more from doors, windows and tents, with the exhaust pointed away. Never run it in a garage or trailer."
  },
  {
    "q": "How do I keep it ready?",
    "a": "Use fuel stabilizer and start it every few months. Keep the starter battery charged for remote start."
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
