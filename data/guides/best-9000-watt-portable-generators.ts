export const guideSlug = "best-9000-watt-portable-generators";
export const guideTitle = "2 Best 9000 Watt Portable Generators in 2026";
export const metaTitle = "Best 9000 Watt Portable Generators in 2026";
export const metaDescription = "Best 9000 watt class portable generators compared on fuel options, 50A outlets, noise and start type for large RVs and whole-home essentials.";
export const mainKeyword = "best 9000 watt portable generators";
export const introParagraphs = [
  "A 9000 watt class generator is what you buy to run two air conditioners or an essentials circuit from a transfer switch. Few listings use the exact 9000 figure, and the two machines here state 12,000 peak watts instead, so they are the nearest fit rather than an exact match.",
  "Only two models qualify, both inverter generators from the same maker that differ by fuel. They were compared on stated fuel options, noise, outlets and the start system, and the guide says plainly that few listings target this exact size."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/furniture-chairs-by-tent.webp";
export const heroImageAlt = "Two folding camping chairs beside a tent in a redwood forest";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-9000-watt-portable-generators-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Westinghouse 12000 Peak Watt Dual Fuel Portable Inverter Generator",
    "price": "$1899.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41GpGdbkvrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQMZZ47V?tag=rvgearlab-amz-20",
    "description": "The Westinghouse iGen12000DFc is a dual fuel inverter generator rated at 12,000 peak watts with remote electric start, a 457cc engine and as low as 64 dBA in Eco mode. It has a 50A outlet and an L14-30R twist lock, both transfer switch ready, with an LED data center and under 3 percent THD.\n\nIt keeps to gasoline and propane and costs less than the tri-fuel iGen12000TFc, which makes it the simpler of the two. The listing quotes fuel savings of up to 50 percent against traditional generators.\n\nIt suits owners who want inverter-grade power and low noise for whole-home essentials or a large RV. A key fob start suits cold mornings.",
    "specs": [
      "12,000 peak watts, dual fuel",
      "As low as 64 dBA, Eco mode",
      "50A outlet, under 3% THD"
    ],
    "pros": [
      "Low noise for its size at 64 dBA",
      "Under 3% THD for electronics",
      "Gas and propane options",
      "LED data center shows run time"
    ],
    "cons": [
      "Running watts are not stated here",
      "Priced at the high end for a generator"
    ],
    "bestFor": "Quiet home backup and large RVs",
    "take": "The better value of two big inverter generators. Choose it unless you have a natural gas line.",
    "catch": "The listing leads with peak, not running, watts."
  },
  {
    "id": "best-9000-watt-portable-generators-2",
    "rank": 2,
    "badge": "Best Tri-Fuel",
    "name": "Westinghouse 12000 Peak Watt Tri-Fuel Portable Inverter Generator",
    "price": "$1949.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51XUzND8ZCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F9LHST5Z?tag=rvgearlab-amz-20",
    "description": "The Westinghouse iGen12000TFc is a tri-fuel inverter generator rated at 12,000 peak watts, running on gasoline, propane or natural gas. It shares the 457cc engine, 64 dBA Eco mode, 50A outlet and data center of its dual fuel sibling, and includes a remote start key fob with a battery and 12V charger.\n\nIt is the only one that runs on natural gas, which suits a home with a gas line and a transfer switch. Compared with the iGen12000DFc, it adds a third fuel for a higher price.\n\nIt suits households that want extended runtime from natural gas or propane during long outages. It has the same under 3 percent THD.",
    "specs": [
      "12,000 peak watts, tri-fuel",
      "Gas, propane or natural gas",
      "64 dBA, 50A outlet"
    ],
    "pros": [
      "Runs on natural gas as well",
      "Quiet inverter output",
      "Under 3% THD for electronics",
      "Transfer switch ready outlets"
    ],
    "cons": [
      "Higher price than the dual fuel sibling",
      "Running watts are not stated here"
    ],
    "bestFor": "Home backup with natural gas",
    "take": "The most flexible fuel choice, ideal if a gas line runs to the house.",
    "catch": "It costs more than its dual fuel sibling."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated output",
    "description": "Noted the peak watts and whether running watts appear in the listing."
  },
  {
    "title": "Fuel options",
    "description": "Compared gasoline, propane and natural gas support."
  },
  {
    "title": "Outlets",
    "description": "Checked for 50A RV and transfer switch outlets."
  },
  {
    "title": "Start and noise",
    "description": "Looked at key fob start and stated noise levels."
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
    "subheading": "By Fuel Supply",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Gasoline and propane",
          "Westinghouse iGen12000DFc",
          "Dual fuel, key fob start"
        ],
        [
          "Home with natural gas",
          "Westinghouse iGen12000TFc",
          "Tri-fuel including natural gas"
        ],
        [
          "Large RV with a 50A cord",
          "Westinghouse iGen12000DFc",
          "50A outlet"
        ],
        [
          "Long outage with a gas line",
          "Westinghouse iGen12000TFc",
          "Natural gas runtime"
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
          "$1890 to $1900",
          "Westinghouse iGen12000DFc"
        ],
        [
          "$1940 to $1950",
          "Westinghouse iGen12000TFc"
        ]
      ]
    }
  },
  {
    "subheading": "Dual fuel vs tri-fuel",
    "cards": [
      {
        "label": "Dual fuel",
        "text": "The Westinghouse iGen12000DFc runs on gasoline or propane and costs less."
      },
      {
        "label": "Tri-fuel",
        "text": "The Westinghouse iGen12000TFc adds natural gas for long outages and costs more."
      }
    ],
    "note": "Most buyers should default to the Westinghouse iGen12000DFc unless a natural gas line is available."
  },
  {
    "subheading": "By Noise and Power",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Quiet operation",
          "Westinghouse iGen12000DFc"
        ],
        [
          "Clean electronics power",
          "Westinghouse iGen12000TFc"
        ],
        [
          "Remote key fob start",
          "Westinghouse iGen12000DFc"
        ]
      ]
    }
  },
  {
    "subheading": "For Whole-Home Essentials Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Transfer switch ready outlets and a 50A plug"
      },
      {
        "label": "In this comparison",
        "text": "The Westinghouse iGen12000TFc and Westinghouse iGen12000DFc both list 50A and L14-30R outlets that are transfer switch ready."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Westinghouse iGen12000TFc if you can connect natural gas and want long outage runtime."
      },
      {
        "label": "Save if",
        "text": "Save with the Westinghouse iGen12000DFc if gasoline and propane are enough."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Peak versus running watts",
    "explanation": "A generator labeled 12,000 peak will hold less continuously, often 9000 to 10,000 on gasoline. Add up the running load of two air conditioners, a fridge and lights, and size to the running figure. Look in the listing for the continuous number before buying."
  },
  {
    "criterion": "Propane and natural gas derating",
    "explanation": "Propane and natural gas give lower output than gasoline, so the continuous watts drop on those fuels. A listing that gives only gasoline numbers leaves you guessing. Check the derated figures in the manual."
  },
  {
    "criterion": "50A and transfer switch outlets",
    "explanation": "A 14-50R outlet matches a 50A RV cord, while an L14-30R twist lock suits a transfer switch or interlock kit. A wrong plug will not connect without an adapter. Check the outlet list against your cord."
  },
  {
    "criterion": "Weight and portability",
    "explanation": "Large inverter units are heavy, and wheels or a cart matter for moving them. Plan to lift them with two people. Check the weight and handle design."
  },
  {
    "criterion": "Noise and placement",
    "explanation": "A 64 dBA figure applies in Eco mode at low load. At full load, noise is higher. Keep the unit outdoors, 20 feet from tents and doors, with the exhaust pointed away."
  }
];

export const faq = [
  {
    "q": "How many watts do two RV air conditioners need?",
    "a": "Two 13,500 BTU units can need around 3500 running watts plus a start surge. Soft start devices help. A 12,000 peak inverter generator has room for that if the continuous rating allows."
  },
  {
    "q": "Can I connect it to my house?",
    "a": "Only through a transfer switch or interlock kit installed by a qualified electrician. Never back-feed through an outlet. The listings state the outlets are transfer switch ready."
  },
  {
    "q": "Is an inverter worth it at this size?",
    "a": "It gives clean, quiet power but costs more than open-frame units. If you run electronics or live near neighbors, it pays off."
  },
  {
    "q": "How do I start it?",
    "a": "Use the key fob, push button or recoil on the units that list those options. Connect loads once it settles."
  },
  {
    "q": "How do I store it?",
    "a": "Add stabilizer or run the fuel out, use a breathable cover and start it every few months. Never run it under a closed cover."
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
