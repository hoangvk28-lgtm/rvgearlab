export const guideSlug = "best-propane-canister-stoves";
export const guideTitle = "4 Best Propane Canister Stoves in 2026";
export const metaTitle = "Best Propane Canister Stoves in 2026";
export const metaDescription = "Best propane canister stoves that burn 1 lb propane cylinders or mixed canisters, compared on BTU, wind protection and runtime.";
export const mainKeyword = "best propane canister stoves";
export const introParagraphs = [
  "Propane holds its pressure in cold air better than butane, which makes it the safer fuel for shoulder-season camping. Four stoves in this guide burn propane or a propane blend: a bottletop cooker, two dual fuel cookers and a foldable mixed-canister burner.",
  "Standalone fuel canisters and butane-only stoves are left out. The four picks are ranked by heat output, how the propane connects and what protects the flame, with outdoor-only use and a flat, stable base assumed for all of them."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/kitchen-campfire-skillet.webp";
export const heroImageAlt = "Breakfast cooking in a cast iron skillet over a campfire";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-propane-canister-stoves-1",
    "rank": 1,
    "badge": "Best Propane-Only Cooker",
    "name": "Coleman Bottletop Propane Stove",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41PHUHg9-WL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0009PUR5E?tag=rvgearlab-amz-20",
    "description": "The Coleman Bottletop screws onto a 16.4 ounce propane cylinder, and the burner and base separate from the bottle for compact storage. It lists up to 10,000 total BTU, a pressure regulator and wind baffles, with a single adjustable burner for an 8 inch pan.\n\nRuntime is up to 2.5 hours on high from one cylinder, longer than a small butane cartridge allows. It is simpler and cheaper than the dual fuel cookers, and has less output than the GasOne 15K Dual Fuel.\n\nA good fit for cool-weather campers who want a stable, propane-only stove. A three-year limited warranty comes with it.",
    "specs": [
      "Up to 10,000 BTU propane",
      "Pressure regulator, wind baffles",
      "Up to 2.5 hours on high"
    ],
    "pros": [
      "Regulator holds output in cold",
      "Wind baffles shield the flame",
      "Up to 2.5 hours on one cylinder",
      "Separates from the bottle for storage"
    ],
    "cons": [
      "Heavier than canister-top stoves",
      "Propane cylinders sold separately"
    ],
    "bestFor": "Cool-weather campers",
    "take": "A bottletop propane cooker with a regulator, wind baffles and up to 2.5 hours of runtime.",
    "catch": "It is heavier than canister-top stoves, and propane cylinders are sold separately."
  },
  {
    "id": "best-propane-canister-stoves-2",
    "rank": 2,
    "badge": "Best High Output",
    "name": "GasOne 15",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Lp-nhy+YL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09RN22HDQ?tag=rvgearlab-amz-20",
    "description": "Rated at 15,000 BTU, the GasOne 15K feeds from a propane cylinder through the adapter that ships with it, or from a butane cartridge. Four corner windblockers surround the burner head.\n\nA cartridge ejection feature and gas cut-off protect against irregular pressure. It outputs more than the Coleman Bottletop and costs more.\n\nSuits campers who boil large pots on propane. A case comes with it.",
    "specs": [
      "15,000 BTU, dual fuel",
      "Windblocker on four corners",
      "Piezo ignition, safety ejection"
    ],
    "pros": [
      "Strong single-burner output",
      "Windblocker protects the flame",
      "Dual fuel flexibility",
      "Carrying case included"
    ],
    "cons": [
      "One burner only",
      "Fuel is not included"
    ],
    "bestFor": "Large-pot cooks",
    "take": "A 15,000 BTU burner that runs on propane through a supplied adapter and shields its flame on four corners.",
    "catch": "It cooks one pot at a time, and fuel is not included."
  },
  {
    "id": "best-propane-canister-stoves-3",
    "rank": 3,
    "badge": "Best Value Dual Fuel",
    "name": "Gas One GS-3400P Propane or Butane Stove Dual Fuel Stove Portable Camping Stove",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JavTsgoZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01HQRD8EO?tag=rvgearlab-amz-20",
    "description": "Gas One's GS-3400P feeds from a propane cylinder through its converter regulator, or from butane. Its heat dial, piezo lighter and ejection feature keep operation simple.\n\nIt is the least expensive of the propane-capable cookers here, giving up the wind baffles and output of the others. A carrying case is included.\n\nA sensible entry for campers testing propane. Pack it with a lighter as backup.",
    "specs": [
      "Butane or propane dual fuel",
      "Piezo ignition, adjustable dial",
      "Cartridge ejection safety"
    ],
    "pros": [
      "Runs on butane or propane",
      "Pressure sensor ejects cartridge",
      "Adjustable heat dial",
      "Includes carrying case"
    ],
    "cons": [
      "Fuel not included",
      "Larger than butane-only stoves"
    ],
    "bestFor": "Entry-level propane cooks",
    "take": "The cheapest propane-capable cooker here, with a converter regulator and case.",
    "catch": "Fuel is sold separately and it takes more room than a butane-only stove."
  },
  {
    "id": "best-propane-canister-stoves-4",
    "rank": 4,
    "badge": "Best Foldable Mixed Canister",
    "name": "Odoland 3500W Windproof Camp Stove Camping Gas Stove with Fuel Canister Adapter",
    "price": "$23.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oxFcZEApL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0829RKQXZ?tag=rvgearlab-amz-20",
    "description": "The Odoland 3500W collapses for carrying and keeps a windshield attached, plus piezo lighting and a flame knob. It accepts 7/16 thread propane or mixed canisters, with two connectors to match different gas tanks.\n\nIt is the smallest of the four and cheaper than the Coleman. The listing's boil quote is about 3 minutes for 1 liter.\n\nA decent match for hikers and picnickers who prefer screw-on canisters over a bottletop. A case is included.",
    "specs": [
      "Up to 3500W output",
      "About 3 minutes to boil 1L",
      "Windshield, piezo ignition"
    ],
    "pros": [
      "Quick 3 minute boil per the listing",
      "Windshield design for breezy sites",
      "Piezo ignition and flame control",
      "Carry case and canister adapter"
    ],
    "cons": [
      "Boil time varies with weather",
      "Smaller base than Coleman"
    ],
    "bestFor": "Foldable mixed-canister burner",
    "take": "A collapsible 3,500 W burner that screws onto propane or mixed canisters and blocks wind.",
    "catch": "Boil times vary with weather and the pot, and the folded size is not printed."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fuel connection",
    "description": "We checked how each stove attaches to propane."
  },
  {
    "title": "Output",
    "description": "We compared stated BTU or watts."
  },
  {
    "title": "Wind protection",
    "description": "We noted baffles, blockers and shields."
  },
  {
    "title": "Runtime",
    "description": "We recorded runtime claims where given."
  },
  {
    "title": "Safety",
    "description": "We noted regulators and ejection features."
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
    "subheading": "By Fuel Setup",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Propane cylinder, cool nights",
          "Coleman Bottletop Stove",
          "Regulator and wind baffles"
        ],
        [
          "Big pots on propane",
          "GasOne 15K Dual Fuel",
          "15,000 BTU"
        ],
        [
          "First propane stove",
          "Gas One GS-3400P",
          "Lowest price"
        ],
        [
          "Threaded mixed canisters",
          "Odoland 3500W Windproof",
          "Two connectors"
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
          "$20 to $30",
          "Odoland 3500W Windproof or Gas One GS-3400P"
        ],
        [
          "$30 to $60",
          "Coleman Bottletop Stove or GasOne 15K Dual Fuel"
        ]
      ]
    }
  },
  {
    "subheading": "Bottletop vs Canister Stove",
    "cards": [
      {
        "label": "Bottletop",
        "text": "The Coleman Bottletop Stove sits on a cylinder and is stable."
      },
      {
        "label": "Canister or adapter",
        "text": "The Odoland 3500W Windproof, GasOne 15K Dual Fuel and Gas One GS-3400P use canisters or adapters."
      }
    ],
    "note": "Most cool-weather campers should choose the Coleman Bottletop Stove."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price",
          "Odoland 3500W Windproof"
        ],
        [
          "Low price, dual fuel",
          "Gas One GS-3400P"
        ],
        [
          "Mid price, bottletop",
          "Coleman Bottletop Stove"
        ],
        [
          "Higher price, 15K BTU",
          "GasOne 15K Dual Fuel"
        ]
      ]
    }
  },
  {
    "subheading": "Cool-Weather Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A regulator, wind baffles and a fuel that holds pressure in the cold."
      },
      {
        "label": "In this comparison",
        "text": "The Coleman Bottletop Stove lists a regulator and wind baffles."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the GasOne 15K Dual Fuel for output."
      },
      {
        "label": "Save if",
        "text": "Save with the Odoland 3500W Windproof or Gas One GS-3400P."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Propane in the cold",
    "explanation": "Propane keeps its pressure at lower temperatures than butane, so the flame stays steady. A regulator helps further. Pick propane for cool nights."
  },
  {
    "criterion": "Canister or cylinder",
    "explanation": "A 1 lb propane cylinder is cheap and widely sold, while a threaded canister is smaller. Check the connection before buying. The Coleman Bottletop uses a cylinder."
  },
  {
    "criterion": "Runtime",
    "explanation": "Runtime is how long a cylinder lasts on high. The Coleman lists up to 2.5 hours. Multiply by the number of meals to plan fuel."
  },
  {
    "criterion": "Wind protection",
    "explanation": "Wind steals heat and can blow out the flame. Baffles, blockers or shields help. Choose a stove that lists one."
  },
  {
    "criterion": "Adapter needs",
    "explanation": "Dual fuel stoves need an adapter or regulator for propane. Check whether it is in the box. Never force a connection."
  }
];

export const faq = [
  {
    "q": "Does propane work better in the cold?",
    "a": "Yes, propane holds pressure at lower temperatures than butane. A regulator helps further. Keep cylinders upright."
  },
  {
    "q": "What mistake do buyers make with propane stoves?",
    "a": "They forget the adapter or regulator. Check that it is included. Do not mix incompatible connections."
  },
  {
    "q": "Is the Coleman Bottletop worth it over a dual fuel stove?",
    "a": "For cool weather and longer runtime, yes. The dual fuel stoves are more flexible."
  },
  {
    "q": "How do I attach the cylinder?",
    "a": "Close the valve, thread the cylinder onto the stove, check for leaks and light. Keep the cylinder upright."
  },
  {
    "q": "How do I store the stove and cylinder?",
    "a": "Detach the cylinder, wipe the burner and store both in a cool dry place. Keep cylinders away from heat."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Cookpots",
    "href": "/camp-kitchen/best-backpacking-cookpots"
  },
  {
    "title": "Best Backpacking Stoves",
    "href": "/camp-kitchen/best-backpacking-stoves"
  },
  {
    "title": "Best Camping Coffee",
    "href": "/camp-kitchen/best-camping-coffee"
  },
  {
    "title": "Best Camping Coffeemakers",
    "href": "/camp-kitchen/best-camping-coffeemakers"
  }
];
