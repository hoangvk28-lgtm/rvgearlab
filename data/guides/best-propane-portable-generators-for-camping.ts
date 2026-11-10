export const guideSlug = "best-propane-portable-generators-for-camping";
export const guideTitle = "3 Best Propane Portable Generators For Camping in 2026";
export const metaTitle = "Best Propane Portable Generators For Camping";
export const metaDescription = "Best propane portable generators for camping compared on propane running watts, noise, 30A outlets and CO protection for RVs and campsites.";
export const mainKeyword = "best propane portable generators for camping";
export const introParagraphs = [
  "A propane-capable generator lets you run on the same tank as your stove and grill, and propane stores for years without going stale. Output on propane is lower than on gasoline, so the derated watts matter more than the headline rating.",
  "Three dual fuel generators made the list, which is all that targets this need clearly. They were compared on stated propane watts, noise, outlets and the safety features each listing names."
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
    "id": "best-propane-portable-generators-for-camping-1",
    "rank": 1,
    "badge": "Best Value",
    "name": "Westinghouse 4650 Peak Watt Dual Fuel Portable Generator",
    "price": "$399.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51prSXmo6VL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B099KR6PTG?tag=rvgearlab-20",
    "description": "The Westinghouse 4650 Dual Fuel delivers 3600 rated watts on gasoline and 3240 on propane, with 4650 peak. A 4 gallon tank with a fuel gauge gives up to 14 hours per tank, and a 212cc cast iron sleeve engine includes low-oil and CO shutdown.\n\nNothing else here costs less, and it still carries an RV-ready TT-30R outlet, a 5-20R duplex and an L5-30R twist lock, all with rubber covers. Its propane rating is the highest of the three, 40 watts above the BILT HARD.\n\nIt suits RV owners who want a 30A hookup and propane flexibility with a 3-year limited warranty. The gauge and long tank help avoid middle-of-the-night refills.",
    "specs": [
      "3600W gas, 3240W propane",
      "TT-30R and L5-30R outlets",
      "CO and low-oil shutdown"
    ],
    "pros": [
      "Lowest price of the three",
      "Highest propane watts of the three",
      "Up to 14 hours per tank",
      "Three-year limited warranty"
    ],
    "cons": [
      "No noise rating on the listing",
      "No electric start is named"
    ],
    "bestFor": "RV owners watching cost",
    "take": "A solid dual-fuel workhorse for less money. Choose it for value and the biggest tank.",
    "catch": "The listing gives no decibel rating, so check quiet-hours rules."
  },
  {
    "id": "best-propane-portable-generators-for-camping-2",
    "rank": 2,
    "badge": "Best Parallel Option",
    "name": "BILT HARD Dual Fuel Gas & Propane Powered Generator 4500W",
    "price": "$469.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41G43h8vW5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DN69P3Z9?tag=rvgearlab-20",
    "description": "The BILT HARD gives 3500 rated watts on gasoline and 3200 on propane from a 141cc air-cooled engine, with 4500 and 4150 peak. The listing quotes under 3 percent THD, a fully enclosed body at 58 dBA from 23 feet and a CO sensor that shuts the engine down.\n\nOnly this unit offers a parallel option, joining two units with a kit sold separately to double output. Next to the Westinghouse 4650 Dual it is quieter on paper and cleaner on power.\n\nIt suits campers who want to start small and add a second unit later for an air conditioner. RV-ready and 30A outlets are listed.",
    "specs": [
      "3500W gas, 3200W propane",
      "58 dBA at 23 feet",
      "Parallel capable, kit separate"
    ],
    "pros": [
      "Parallel option doubles power later",
      "Under 3% THD for electronics",
      "Enclosed body at 58 dBA",
      "Built-in CO sensor"
    ],
    "cons": [
      "Parallel kit is not included",
      "Needs a second unit to double"
    ],
    "bestFor": "Campers who may add a second unit",
    "take": "A quiet dual-fuel inverter with a path to more power. A smart start for small RVs.",
    "catch": "Doubling output means buying a second generator and the kit."
  },
  {
    "id": "best-propane-portable-generators-for-camping-3",
    "rank": 3,
    "badge": "Best Pure Sine",
    "name": "ERAYAK 4500W Dual-Fuel Portable Inverter Generator for Home Use",
    "price": "$559.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41S2h7L6c7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D5XZ9JMZ?tag=rvgearlab-20",
    "description": "The ERAYAK lists 4500 peak and 3500 rated watts on gasoline, and 4050 peak and 3150 rated on propane. A gas-priority system switches to gasoline when propane runs low, and the pure sine output holds THD between 0.2 and 1.2 percent.\n\nIt states a 58 dBA figure at quarter load and weighs 54 pounds, with a compact 19.88 by 16.93 by 20.25 inch body. Its THD is far tighter than the under 3 percent quoted by the BILT HARD.\n\nIt suits RV owners who want 30A power with the cleanest sine wave at a modest weight. Gasoline is the first fuel, with propane as the fallback.",
    "specs": [
      "3500W gas, 3150W propane",
      "58 dBA at quarter load",
      "54 lb, auto fuel switch"
    ],
    "pros": [
      "Automatic fuel switching",
      "Pure sine with very low THD",
      "Compact body, 54 pounds",
      "30A RV-ready outlet"
    ],
    "cons": [
      "Highest price of the three",
      "Propane rating is lower than gas"
    ],
    "bestFor": "Clean power for RV electronics",
    "take": "A compact, ultra-clean dual-fuel inverter. Pay for the sine wave quality.",
    "catch": "Gas is the priority fuel, so propane acts as backup."
  }
];

export const howWeEvaluated = [
  {
    "title": "Propane running watts",
    "description": "Compared the derated output on propane, not the gasoline headline."
  },
  {
    "title": "Noise and weight",
    "description": "Noted stated decibels and carry weight."
  },
  {
    "title": "Outlets",
    "description": "Checked for RV 30A outlets."
  },
  {
    "title": "Safety",
    "description": "Looked at CO sensors and low-oil shutoff."
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
    "subheading": "By Camper Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Value RV dual fuel",
          "Westinghouse 4650 Dual",
          "Lowest price, 14 hours"
        ],
        [
          "Quiet start-small unit",
          "BILT HARD 4500W",
          "58 dBA, parallel capable"
        ],
        [
          "Clean sine wave electronics",
          "ERAYAK 4500W",
          "THD 0.2 to 1.2 percent"
        ],
        [
          "30A RV hookup",
          "Westinghouse 4650 Dual",
          "TT-30R outlet"
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
          "Westinghouse 4650 Dual"
        ],
        [
          "$460 to $470",
          "BILT HARD 4500W"
        ],
        [
          "$550 to $560",
          "ERAYAK 4500W"
        ]
      ]
    }
  },
  {
    "subheading": "Open frame vs enclosed inverter",
    "cards": [
      {
        "label": "Open frame",
        "text": "The Westinghouse 4650 Dual gives high output and a big tank for the lowest price."
      },
      {
        "label": "Enclosed inverter",
        "text": "The BILT HARD 4500W and ERAYAK 4500W run quieter and cleaner at higher cost."
      }
    ],
    "note": "Most campers should default to the Westinghouse 4650 Dual unless noise or sine wave quality matters."
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
          "Westinghouse 4650 Dual"
        ],
        [
          "Parallel upgrade",
          "BILT HARD 4500W"
        ],
        [
          "Auto fuel switching",
          "ERAYAK 4500W"
        ],
        [
          "Highest propane watts",
          "Westinghouse 4650 Dual"
        ]
      ]
    }
  },
  {
    "subheading": "For RV Air Conditioners Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Propane watts above your AC load and a 30A outlet"
      },
      {
        "label": "In this comparison",
        "text": "The Westinghouse 4650 Dual offers 3240 propane watts and a TT-30R, while the BILT HARD 4500W offers 3200 propane watts."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BILT HARD 4500W or ERAYAK 4500W if you want quieter operation, parallel capability or the cleanest sine wave."
      },
      {
        "label": "Save if",
        "text": "Save with the Westinghouse 4650 Dual if value and the biggest tank matter more than noise figures."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Propane derating",
    "explanation": "Propane gives roughly 10 percent less output than gasoline on these listings, with 3240 against 3600 watts on the Westinghouse. If you plan to run a rooftop air conditioner on propane, use the lower figure. Look for the propane running watts in the listing."
  },
  {
    "criterion": "Gas-priority switching",
    "explanation": "A system that switches to gasoline when propane is low protects loads from cutting out but uses gasoline first. A unit that runs on propane until empty uses your tank differently. Check the switching behavior in the listing."
  },
  {
    "criterion": "Propane tank and hose",
    "explanation": "Most campers connect a 20 pound tank with a hose and regulator, and a tank lasts a limited time at load. A bigger tank or a refill plan matters on long stays. Check whether a hose is included."
  },
  {
    "criterion": "30A RV outlet",
    "explanation": "A TT-30R fits a 30A trailer cord directly, while an L5-30R twist lock needs an adapter. A wrong plug will not seat without an adapter. Check the outlet type before buying."
  },
  {
    "criterion": "CO safety",
    "explanation": "Propane burns cleaner but still produces carbon monoxide. Keep the generator outdoors and 20 feet from tents and doors, with a CO alarm in the sleeping area. Check the listing for a CO sensor."
  }
];

export const faq = [
  {
    "q": "Can I run an RV air conditioner on propane?",
    "a": "A 13,500 BTU unit often needs 2000 running watts plus a start surge, and all three offer over 3000 on propane. A soft start device helps."
  },
  {
    "q": "Is propane better than gasoline for a generator?",
    "a": "It stores longer and burns cleaner, but gives somewhat lower output and may cost more per hour. Many campers keep both options."
  },
  {
    "q": "What do I need to connect propane?",
    "a": "A hose and regulator rated for the unit and a standard tank. Check that the hose is included."
  },
  {
    "q": "Where do I place a propane generator?",
    "a": "Outdoors, 20 feet from tents, with the exhaust pointed away. Never run it indoors."
  },
  {
    "q": "How do I store it?",
    "a": "Disconnect the propane, close the tank valve and keep gasoline fresh with stabilizer. Run it every few months."
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
