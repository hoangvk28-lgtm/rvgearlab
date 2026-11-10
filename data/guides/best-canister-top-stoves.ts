export const guideSlug = "best-canister-top-stoves";
export const guideTitle = "2 Best Canister Top Stoves in 2026";
export const metaTitle = "Best Canister Top Stoves in 2026";
export const metaDescription = "Best canister top stoves compared on listed output, ignition, pot support and weight, with an honest note on how few listings qualify.";
export const mainKeyword = "best canister top stoves";
export const introParagraphs = [
  "A canister top stove screws straight onto the fuel canister, so the burner sits on top and the whole setup is as small as a soda can. It is the classic backpacking design, and most listings use the term loosely.",
  "Only two listings genuinely describe a stove that mounts on a threaded canister, so this is a short comparison. Use both outdoors only and keep the canister out of the tent."
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
    "id": "best-canister-top-stoves-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "CAMPINGMOON Canister Top Stove 4200W Isobutane Pot Stand OD-4/OD-4-ST",
    "price": "$26.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418RkKAziYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GSVSVCMK?tag=rvgearlab-20",
    "description": "The CAMPINGMOON OD-4 is a canister top stove rated at 4200 W with a 101 mm burner head that has 490 outlets. It has a built-in pressure regulator, push-button electronic ignition and a CNC metal flame control knob.\n\nThat regulator keeps a steady blue flame as the canister empties, which the Odoland 3500W does not mention. The wide burner head spreads heat across coffee pots, pans and woks.\n\nIt suits campers who want stronger output and a steadier flame from a canister top stove. It supports pots 3.9 inches and larger and comes with a drawstring bag.",
    "specs": [
      "4200 W, 101 mm burner head",
      "Built-in pressure regulator",
      "Push-button electronic ignition"
    ],
    "pros": [
      "Higher output than the Odoland",
      "Regulator keeps flame steady",
      "Wide burner spreads heat",
      "Drawstring bag included"
    ],
    "cons": [
      "Weight is not listed",
      "Heavier build than a bare burner"
    ],
    "bestFor": "Strong, steady cooking",
    "take": "The bigger-flame canister top stove with a regulator.",
    "catch": "The listing gives no weight."
  },
  {
    "id": "best-canister-top-stoves-2",
    "rank": 2,
    "badge": "Best Budget",
    "name": "Odoland 3500W Windproof Camp Stove Camping Gas Stove with Fuel Canister Adapter",
    "price": "$23.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oxFcZEApL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0829RKQXZ?tag=rvgearlab-20",
    "description": "The Odoland 3500W is a foldable canister stove with a windshield design, piezo ignition and a flame controller. It makes up to 3500 W and the listing says it boils 1 L of water in around 3 minutes.\n\nIt comes with two connectors and is compatible with 7/16 thread single propane or butane-propane canisters (EN 417). It is the lowest priced of the two and folds into a carrying case.\n\nIt suits budget backpackers who want a built-in windshield and piezo ignition. Aluminum alloy and stainless steel make up the body.",
    "specs": [
      "3500 W, piezo ignition",
      "Windshield design",
      "Fits 7/16 thread canisters"
    ],
    "pros": [
      "Lower price than the CAMPINGMOON",
      "Built-in windshield",
      "Two connectors included",
      "Folds into a carrying case"
    ],
    "cons": [
      "No pressure regulator is listed",
      "Lower stated output"
    ],
    "bestFor": "Budget backpacking",
    "take": "A cheap, wind-aware canister stove with a carry case.",
    "catch": "Boil time varies with weather and fuel."
  }
];

export const howWeEvaluated = [
  {
    "title": "Mounting",
    "description": "We checked each listing for a canister-top mount."
  },
  {
    "title": "Output",
    "description": "We compared stated wattage."
  },
  {
    "title": "Ignition",
    "description": "We noted ignition type."
  },
  {
    "title": "Regulator",
    "description": "We checked for pressure regulation."
  },
  {
    "title": "Value",
    "description": "We compared price."
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
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Strong, steady flame",
          "CAMPINGMOON OD-4",
          "4200 W with a regulator."
        ],
        [
          "Lowest price",
          "Odoland 3500W",
          "Windshield and piezo for less."
        ],
        [
          "Wide pans and woks",
          "CAMPINGMOON OD-4",
          "101 mm burner head."
        ],
        [
          "Windy trips",
          "Odoland 3500W",
          "Windshield design."
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
          "Odoland 3500W"
        ],
        [
          "$20 to $30",
          "CAMPINGMOON OD-4"
        ]
      ]
    }
  },
  {
    "subheading": "Regulator vs Windshield",
    "cards": [
      {
        "label": "Regulator",
        "text": "The CAMPINGMOON OD-4 has a pressure regulator for a steady flame."
      },
      {
        "label": "Windshield",
        "text": "The Odoland 3500W has a built-in windshield design."
      }
    ],
    "note": "Choose the CAMPINGMOON OD-4 for steadiness and the Odoland 3500W for wind."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest cost",
          "Odoland 3500W"
        ],
        [
          "Higher output",
          "CAMPINGMOON OD-4"
        ]
      ]
    }
  },
  {
    "subheading": "For Backpacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A threaded top mount and a stated weight."
      },
      {
        "label": "In this comparison",
        "text": "Neither lists a weight, so weigh the CAMPINGMOON OD-4 or Odoland 3500W before a trip."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the CAMPINGMOON OD-4 for a regulator and higher output."
      },
      {
        "label": "Save if",
        "text": "Save with the Odoland 3500W for a windshield and piezo."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Thread type",
    "explanation": "A canister top stove screws onto a threaded canister, and most use the 7/16 thread standard. A wrong thread will not seal. Check the thread in the listing."
  },
  {
    "criterion": "Regulator",
    "explanation": "A built-in regulator keeps the flame steady as the canister empties. It helps in cold. Look for the word regulator."
  },
  {
    "criterion": "Pot support",
    "explanation": "Small supports tip large pots. Wide burner heads spread heat. Check the minimum pot width."
  },
  {
    "criterion": "Output",
    "explanation": "Wattage tells how fast water boils. 3500 to 4200 W is typical. Compare boil times."
  },
  {
    "criterion": "Wind",
    "explanation": "Wind steals heat from a canister stove and wastes fuel. A windshield or a concave burner head helps keep the flame on the pot. Check whether the listing mentions a windshield, and carry a separate screen if it does not."
  }
];

export const faq = [
  {
    "q": "What is a canister top stove?",
    "a": "It is a burner that screws directly onto a threaded fuel canister. The canister becomes the stand, which keeps the setup compact. Pots rest on the burner supports above it."
  },
  {
    "q": "Will it fit any canister?",
    "a": "Only threaded canisters of the right standard, such as the 7/16 thread the Odoland 3500W names. A wrong thread will not seal. Check the label on both the stove and the canister."
  },
  {
    "q": "Is a 4200 W stove better than a 3500 W one?",
    "a": "It boils faster, but it also burns fuel faster. For most meals the 3500 W Odoland 3500W is plenty. The CAMPINGMOON OD-4 earns its higher output with big pots and wide pans."
  },
  {
    "q": "How do I attach it safely?",
    "a": "Make sure the control valve is closed, then screw the stove onto the canister until snug. Check for leaks with soapy water, since bubbles reveal a leak. Light it outdoors."
  },
  {
    "q": "How do I carry and store it?",
    "a": "Remove it from the canister and pack it in its case or bag. Keep the canister capped and upright. Store both away from heat."
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
