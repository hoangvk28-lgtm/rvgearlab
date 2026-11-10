export const guideSlug = "best-8000-watt-portable-generators";
export const guideTitle = "2 Best 8000 Watt Portable Generators in 2026";
export const metaTitle = "Best 8000 Watt Portable Generators in 2026";
export const metaDescription = "Best 8000 watt portable generators compared on engine size, outlets, fuel type and CO protection for big campsites, RVs and home backup.";
export const mainKeyword = "best 8000 watt portable generators";
export const introParagraphs = [
  "An 8000 watt generator is the size where a camper can start a 30 amp RV air conditioner, a few tools and a kitchen circuit together. It is also big and heavy enough that outlet layout, fuel type and carbon monoxide protection matter more than the headline number.",
  "Few listings state this size clearly, so the shortlist is two generators: an electric-start Briggs and Stratton and a dual fuel WEN. They were compared on stated surge and rated watts, receptacles, tank size and safety features."
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
    "id": "best-8000-watt-portable-generators-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "WEN 8000-Watt 120V/240V Dual Fuel Portable Generator",
    "price": "$623.17",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51tss4IH3iL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZGTHDJF?tag=rvgearlab-20",
    "description": "The WEN DF8000X is a 340cc dual fuel unit rated at 8000 surge and 6500 rated watts on gasoline, and 7200 surge and 5850 rated watts on propane. It has electric start, a 6.7 gallon tank for up to 10.5 hours at half load, a wheel kit and a CO Watchdog shutdown sensor.\n\nAgainst the Briggs and Stratton it adds propane operation and a carbon monoxide shutoff, and it carries a lower price. Its outlet set includes a TT-30R RV receptacle and an L14-30R twist lock for a transfer switch.\n\nIt suits campers and homeowners who want to run the same generator on gas or a propane tank. The listing also names it as RV-ready.",
    "specs": [
      "8000 surge, 6500 rated watts",
      "Gas and propane, CO shutdown",
      "TT-30R and L14-30R outlets"
    ],
    "pros": [
      "Runs on gasoline or propane",
      "CO Watchdog shuts it off automatically",
      "RV-ready TT-30R outlet plus transfer-switch plug",
      "Electric start with wheel kit included"
    ],
    "cons": [
      "Propane output is lower than gasoline output",
      "Heavy, and it is a loud open-frame unit"
    ],
    "bestFor": "Dual fuel RV and backup power",
    "take": "The more flexible 8000 watt option, with propane and CO shutoff plus RV outlets.",
    "catch": "Rated watts sit under the headline 8000, and propane gives about 650W less than gas."
  },
  {
    "id": "best-8000-watt-portable-generators-2",
    "rank": 2,
    "badge": "Best Engine Brand",
    "name": "Briggs & Stratton 8000 Watt Portable Generator with Power Surge and Electric Start",
    "price": "$1199.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fsbusIn6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0845XVNY2?tag=rvgearlab-20",
    "description": "The Briggs and Stratton 8000 watt generator uses a 420cc Briggs and Stratton engine with Power Surge technology, electric start and a remote choke. Its panel has four GFCI 120V outlets and one 120/240V 30A locking outlet, and the 7 gallon metal tank is rated for 9 hours at 50 percent load.\n\nCompared with the WEN it has a larger engine and a metal tank, which suits long run times and rugged use. It runs on gasoline only, while the WEN adds propane and a CO sensor.\n\nIt suits buyers who want a proven engine brand for home backup and large campsites. Power Surge handles the starting load of motor-driven tools and appliances.",
    "specs": [
      "420cc Briggs engine, electric start",
      "Four GFCI plus 120/240V 30A",
      "7 gal metal tank, 9 hours"
    ],
    "pros": [
      "Larger 420cc engine from a major brand",
      "Metal fuel tank is durable",
      "Four GFCI outlets plus locking 30A",
      "Power Surge helps start motors"
    ],
    "cons": [
      "Gasoline only, no propane option",
      "No CO shutoff is named on the listing"
    ],
    "bestFor": "Home backup and long job-site days",
    "take": "A big-engine gasoline generator with a sturdy metal tank and plenty of GFCI outlets.",
    "catch": "It costs nearly twice as much as the WEN and the listing does not state a CO shutdown feature."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated watts",
    "description": "Surge and rated watts were separated on gasoline and propane."
  },
  {
    "title": "Fuel options",
    "description": "Gasoline-only and dual fuel designs were compared."
  },
  {
    "title": "Outlets",
    "description": "The RV, locking and GFCI receptacles were counted."
  },
  {
    "title": "Run time",
    "description": "Tank size and half-load hours were compared."
  },
  {
    "title": "Safety features",
    "description": "CO shutdown and breaker protection were noted."
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
    "subheading": "By Use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "RV with 30A air conditioner",
          "WEN DF8000X Generator",
          "TT-30R outlet and dual fuel."
        ],
        [
          "Home backup through a transfer switch",
          "WEN DF8000X Generator",
          "L14-30R twist lock receptacle."
        ],
        [
          "Long job-site or storm days",
          "Briggs & Stratton 8000W Generator",
          "Larger engine and metal tank."
        ],
        [
          "Many tools plugged in at once",
          "Briggs & Stratton 8000W Generator",
          "Four GFCI outlets plus a locking 30A."
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
          "$620 to $630",
          "WEN DF8000X Generator"
        ],
        [
          "$1190 to $1200",
          "Briggs & Stratton 8000W Generator"
        ]
      ]
    }
  },
  {
    "subheading": "Dual Fuel vs Gasoline Only",
    "cards": [
      {
        "label": "Dual fuel",
        "text": "A dual fuel generator can run on propane, which stores well and burns cleaner, with slightly lower output. The WEN DF8000X Generator is the dual fuel pick."
      },
      {
        "label": "Gasoline only",
        "text": "A gasoline-only generator keeps full output and a simpler design. The Briggs & Stratton 8000W Generator follows this approach."
      }
    ],
    "note": "Most campers should pick the WEN DF8000X Generator for its fuel flexibility and CO shutoff."
  },
  {
    "subheading": "By Safety Features",
    "table": {
      "headers": [
        "Priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Automatic CO shutdown",
          "WEN DF8000X Generator"
        ],
        [
          "Breaker protection and GFCI outlets",
          "Briggs & Stratton 8000W Generator"
        ],
        [
          "Wheel kit included",
          "WEN DF8000X Generator"
        ]
      ]
    }
  },
  {
    "subheading": "Large RV Campsites Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A TT-30R outlet, a stated rated wattage and an automatic CO shutdown."
      },
      {
        "label": "In this comparison",
        "text": "The WEN DF8000X Generator lists all three, while the Briggs & Stratton 8000W Generator brings a bigger engine for heavy tools."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Briggs & Stratton 8000W Generator if you want the larger engine and metal tank for long, heavy-use days."
      },
      {
        "label": "Save if",
        "text": "Save with the WEN DF8000X Generator, which costs less and adds propane and a CO shutoff."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rated watts versus surge watts",
    "explanation": "The rated number is what the generator can supply continuously, while the surge number is a short burst for motor starting. An 8000 watt label may refer to surge, so the rated number is the one to size against. Check the listing for both figures."
  },
  {
    "criterion": "Carbon monoxide risk",
    "explanation": "Generators produce carbon monoxide that can be deadly in tents, campers and garages. Never run one inside or near a tent or an open window, and keep it several feet away on open ground. A built-in CO shutoff, like the WEN Watchdog sensor, adds a layer of safety but does not replace distance and a separate CO alarm."
  },
  {
    "criterion": "Outlet layout for RVs",
    "explanation": "A 30 amp RV connects through a TT-30 receptacle, and a home transfer switch usually needs a twist-lock outlet. A generator with only 120V household outlets needs adapters and cannot handle the full load. Check that the exact receptacles you need are named."
  },
  {
    "criterion": "Fuel type and runtime",
    "explanation": "Gasoline stores energy densely but goes stale, while propane stores for years and burns cleaner. Dual fuel models trade a little output for that flexibility. Compare the half-load run time and the tank size against how long you expect to run."
  },
  {
    "criterion": "Weight and wheel kit",
    "explanation": "Large generators are heavy, and a wheel kit saves real effort when moving it from truck to site. Check the listing for the dry weight and for whether wheels and handles are included. A unit without wheels may need two people."
  }
];

export const faq = [
  {
    "q": "Can an 8000 watt generator run an RV air conditioner?",
    "a": "Usually yes for a single 30 amp RV air conditioner, since the rated output is far above its running watts. The WEN DF8000X Generator names a TT-30R outlet for it. Add up every load running at once."
  },
  {
    "q": "What is the biggest mistake with generators at camp?",
    "a": "Running one too close to a tent or camper. Carbon monoxide travels, so keep the unit well away and downwind, outdoors only. A CO alarm in the sleeping area is a smart addition."
  },
  {
    "q": "Is dual fuel worth it over gasoline only?",
    "a": "For camping and storm backup, yes, because propane stores for years and does not gum up the carburetor. The WEN DF8000X Generator accepts both. The Briggs & Stratton 8000W Generator suits those who always have gasoline."
  },
  {
    "q": "How do I connect it to a 30 amp RV?",
    "a": "Use a 30 amp RV cord from the TT-30R outlet to the RV inlet, with the RV breakers off during connection. Start the generator first, then switch the RV loads on. Use a cord rated for outdoor use and the right gauge."
  },
  {
    "q": "How do I maintain a large portable generator?",
    "a": "Change the oil on schedule, keep the air filter clean and run the unit regularly. Treat or drain stale fuel before storage. Store it dry and level."
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
