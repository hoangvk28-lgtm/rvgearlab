export const guideSlug = "best-backpacking-stoves-for-winter";
export const guideTitle = "5 Best Backpacking Stoves For Winter in 2026";
export const metaTitle = "Best Backpacking Stoves For Winter in 2026";
export const metaDescription = "Best backpacking stoves for winter, comparing remote-hose canister, wood-burning and hot tent options for cold-weather camps.";
export const mainKeyword = "best backpacking stoves for winter";
export const introParagraphs = [
  "Winter changes the stove problem: cold canisters lose pressure, wind steals heat and hands get clumsy. Only a couple of listings talk about freezing weather directly, so this guide mixes a hose-fed canister stove with wood-burning stoves that do not rely on gas at all.",
  "Five picks are ranked by how much each one does for cold-weather cooking, from the hose-fed Cafelite to a hot tent stove built for heating. Every one of them burns fuel and makes carbon monoxide, so cook outdoors or in a vented setup only."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/kitchen-camp-stove-coffee.webp";
export const heroImageAlt = "Single-burner camp stove brewing coffee on a riverside rock";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-backpacking-stoves-for-winter-1",
    "rank": 1,
    "badge": "Best for Freezing Weather",
    "name": "CAFELITE Backpacking Stove",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OKuwDPDCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H3KCVBXF?tag=rvgearlab-amz-20",
    "description": "The Cafelite splits the burner from the canister with a 39.4 inch braided hose and a 15,000 BTU direct-injection flame. Its listing says the split design keeps gas output stable in freezing environments and lists use in winter camping.\n\nCompared with the AOTU Piezo it carries a carbon steel stand rated for 55 pounds of cookware, a windproof swirl burner and an external igniter pen instead of a built-in piezo. It also fits both threaded isobutane/propane canisters and long butane tanks with the supplied adapter.\n\nA strong choice for winter backpackers and motorcycle campers who want the canister away from the flame and a rigid case. The kit includes a hose, adapter, igniter and pot support.",
    "specs": [
      "15,000 BTU, 39.4 inch hose",
      "55 lb carbon steel stand",
      "External igniter pen"
    ],
    "pros": [
      "Canister sits away from the flame",
      "Stand holds up to 55 pounds",
      "Wind-resistant swirl burner",
      "Rigid EVA case included"
    ],
    "cons": [
      "Bulkier than a screw-on stove",
      "Hose and adapter add parts"
    ],
    "bestFor": "Freezing-weather canister cooks",
    "take": "A hose-fed 15,000 BTU burner whose listing names winter and freezing use.",
    "catch": "The hose, adapter and carbon steel stand make it bulkier than a screw-on pocket stove."
  },
  {
    "id": "best-backpacking-stoves-for-winter-2",
    "rank": 2,
    "badge": "Best Ultralight Wood Option",
    "name": "Kuvik Titanium Wood Stove",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41aPJtKsHJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08NLVKHPP?tag=rvgearlab-amz-20",
    "description": "The Kuvik is a Grade-1 titanium wood stove that assembles to 6.25 by 5 by 5 inches and collapses to 0.2 inch. It weighs 6.8 ounces and comes with a carrying case that keeps soot off the rest of your pack.\n\nUnlike the Cafelite it needs no canister, so cold-soaked gas is never an issue; twigs and sticks are the fuel. It is a bare firebox, which means less heat control than the gas picks.\n\nFits winter hikers in forested terrain who want a wood fire and no fuel to carry. The listing calls it fit for winter survival kits.",
    "specs": [
      "Grade-1 titanium",
      "Collapses to 0.2 inch",
      "6.25 x 5 x 5 inch assembled"
    ],
    "pros": [
      "Collapses to 0.2 inch thick",
      "Grade-1 titanium",
      "Burns wood, no canister",
      "Tab-and-slot setup"
    ],
    "cons": [
      "No simmer control",
      "Fire restrictions may apply"
    ],
    "bestFor": "Forested winter hikes",
    "take": "A 6.8 ounce titanium wood stove that burns twigs and never worries about cold gas.",
    "catch": "Wood fire gives rough heat control, and local fire rules or snow cover may limit use."
  },
  {
    "id": "best-backpacking-stoves-for-winter-3",
    "rank": 3,
    "badge": "Best Budget Gas Stove",
    "name": "AOTU Portable Camping Stoves Backpacking Stove with Piezo Ignition Stable Support Wind-Resistance Camp Stove f",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hybCmWPwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07NJYV3NP?tag=rvgearlab-amz-20",
    "description": "The AOTU is a 3,000 W canister stove with an adjustable valve that runs from a hot boil down to a simmer. The burner is aluminum alloy with a honeycomb windproof net, and the threaded port takes 7/16 canisters of butane or a butane-propane mix.\n\nAt the lowest price here it is the plain gas choice next to the Cafelite 15000 BTU, with no hose and no winter claim of its own. A burner platform of 9.5 by 9.5 cm suits one to three people.\n\nA sensible budget stove for shoulder-season trips where you will warm the canister in your jacket. Fold-away parts pack into a small box.",
    "specs": [
      "Suits 1 to 3 people",
      "3000 W, piezo ignition",
      "Small box, 7/16 thread"
    ],
    "pros": [
      "Lowest price of the five",
      "Igniter included",
      "Wind net around the burner",
      "Compact box"
    ],
    "cons": [
      "Does not fit propane canisters",
      "No weight is listed"
    ],
    "bestFor": "Budget shoulder-season trips",
    "take": "The cheapest gas stove here, with a simmer valve and a windscreen net.",
    "catch": "The listing says nothing about cold performance and does not fit propane-only canisters."
  },
  {
    "id": "best-backpacking-stoves-for-winter-4",
    "rank": 4,
    "badge": "Best Wood Stove With Grid",
    "name": "REDCAMP Wood Burning Folding Camp Stove Stainless Steel Grid",
    "price": "$20.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51kUZkyzcnL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07VHMZTJ1?tag=rvgearlab-amz-20",
    "description": "The REDCAMP is a stainless steel wood-burning stove that unfolds to 8.3 by 5.9 by 5.5 inches and folds to 1.5 inches thick. A stainless grid backing plate creates a stable cooking platform, and it burns leaves and twigs.\n\nIt weighs 1.9 pounds, well above the 6.8 ounce Kuvik Titanium Stove, in exchange for a lower price and steel in place of titanium. A carry bag comes with the stove.\n\nA budget wood-burning pick for car-supported winter trips where weight matters less. The cuboid body gives pots a steady base.",
    "specs": [
      "1.9 lb stainless steel",
      "Folds to 1.5 inches thick",
      "Grid backing plate"
    ],
    "pros": [
      "Grid plate makes a stable platform",
      "Folded size is listed",
      "Carry bag included",
      "Burns leaves and twigs"
    ],
    "cons": [
      "Heaviest stove here at 1.9 lb",
      "Protective film must be removed first"
    ],
    "bestFor": "Budget winter wood fires",
    "take": "A steel wood stove with a stable grid at a low cost.",
    "catch": "At 1.9 pounds it is the heaviest stove of the group, and the protective film must be removed first."
  },
  {
    "id": "best-backpacking-stoves-for-winter-5",
    "rank": 5,
    "badge": "Best for Heating a Hot Tent",
    "name": "Portable Hot Tent Wood Stove",
    "price": "$109.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41dj8udLdPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G5PYWD3P?tag=rvgearlab-amz-20",
    "description": "The Zarkind is a 304 stainless steel wood stove with foldable legs, a detachable chimney pipe, a spark arrestor and a glass window. The listing positions it for hot tents, winter camping and ice fishing shelters, with a large firebox for longer burns.\n\nIt is the only pick here built to heat a shelter as well as cook, which separates it from every stove above. It costs the most of the five and is aimed at base camps rather than ultralight trips.\n\nRight for hot tent campers and ice fishers who want warmth and a cooktop in one. The airtight sealing helps hold heat and limit smoke.",
    "specs": [
      "304 stainless steel",
      "Detachable chimney, spark arrestor",
      "Glass window, foldable legs"
    ],
    "pros": [
      "Heats a tent as well as cooks",
      "Spark arrestor built in",
      "Foldable legs and detachable chimney",
      "Large firebox for longer burns"
    ],
    "cons": [
      "Highest price of the five",
      "Weight not listed"
    ],
    "bestFor": "Hot tent and ice fishing",
    "take": "A stainless hot tent stove that heats and cooks, with chimney and spark arrestor.",
    "catch": "It needs a tent with a stove jack and a CO alarm, and the listing gives no weight."
  }
];

export const howWeEvaluated = [
  {
    "title": "Cold-weather claims",
    "description": "We noted which listings mention winter or freezing use and which are silent."
  },
  {
    "title": "Fuel type",
    "description": "We separated canister, wood and hot tent stoves and what each needs to run."
  },
  {
    "title": "Wind and stability",
    "description": "We compared windscreens, stands and cookware ratings."
  },
  {
    "title": "Packed size and weight",
    "description": "We recorded listed weights and collapsed sizes."
  },
  {
    "title": "Safe use",
    "description": "We checked each design for chimneys, spark control or hoses."
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
    "subheading": "By Winter Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Freezing canister cooking",
          "Cafelite 15000 BTU",
          "Hose-fed with winter claim"
        ],
        [
          "Ultralight wood cooking",
          "Kuvik Titanium Stove",
          "6.8 ounces, 0.2 inch folded"
        ],
        [
          "Budget gas stove",
          "AOTU Piezo",
          "Lowest price, simmer valve"
        ],
        [
          "Budget wood stove, car trip",
          "REDCAMP Grid Stove",
          "Stable grid, low cost"
        ],
        [
          "Hot tent heating",
          "Zarkind Hot Tent Stove",
          "Chimney, spark arrestor"
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
          "$0 to $30",
          "AOTU Piezo or REDCAMP Grid Stove"
        ],
        [
          "$20 to $40",
          "Cafelite 15000 BTU or Kuvik Titanium Stove"
        ],
        [
          "$100 to $110",
          "Zarkind Hot Tent Stove"
        ]
      ]
    }
  },
  {
    "subheading": "Gas vs Wood",
    "cards": [
      {
        "label": "Gas canister",
        "text": "The Cafelite 15000 BTU and AOTU Piezo boil quickly and simmer but lose pressure in deep cold."
      },
      {
        "label": "Wood fire",
        "text": "The Kuvik Titanium Stove, REDCAMP Grid Stove and Zarkind Hot Tent Stove burn local fuel and ignore cold-gas problems."
      }
    ],
    "note": "Choose the Cafelite 15000 BTU if you want fast boils and the wood stoves if weight and fuel supply matter."
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
          "AOTU Piezo"
        ],
        [
          "Low price, wood",
          "REDCAMP Grid Stove"
        ],
        [
          "Mid price, ultralight",
          "Kuvik Titanium Stove"
        ],
        [
          "Higher price, hose-fed",
          "Cafelite 15000 BTU"
        ],
        [
          "Highest price, heating",
          "Zarkind Hot Tent Stove"
        ]
      ]
    }
  },
  {
    "subheading": "Winter Camping With a Hot Tent Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A chimney, a spark arrestor and a stove jack on the tent."
      },
      {
        "label": "In this comparison",
        "text": "The Zarkind Hot Tent Stove includes a detachable chimney and spark arrestor, but you need to supply the tent."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Cafelite 15000 BTU for hose-fed cold cooking or the Zarkind Hot Tent Stove for heat."
      },
      {
        "label": "Save if",
        "text": "Save with the AOTU Piezo for gas or the REDCAMP Grid Stove for wood."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Cold canister performance",
    "explanation": "Gas canisters lose pressure as they cool, which weakens the flame. Keep the canister warm in a jacket pocket and use an isobutane/propane blend. The Cafelite 15000 BTU lists a split design for stable output in freezing weather."
  },
  {
    "criterion": "Stove versus heater",
    "explanation": "Cooking stoves are not tent heaters. Wood hot tent stoves such as the Zarkind have chimneys and spark arrestors for that job. Never run a canister stove inside a tent, because carbon monoxide builds up fast."
  },
  {
    "criterion": "Wind protection",
    "explanation": "Wind carries heat off the pot in winter more than in summer. A built-in windscreen net, a swirl burner or a firebox helps. Always carry a foil windscreen if the stove has none."
  },
  {
    "criterion": "Pot stability on snow",
    "explanation": "A stove can sink and tip on snow. A wide base or a stand rated for heavy cookware matters. Use a flat board or a pot stand under the stove."
  },
  {
    "criterion": "Fire rules",
    "explanation": "Many areas restrict wood fires during snow or dry seasons. Check local rules before relying on a wood stove. Carry a gas backup where rules are unclear."
  }
];

export const faq = [
  {
    "q": "Can I use a backpacking stove inside my tent in winter?",
    "a": "No. Canister and wood stoves produce carbon monoxide, and fuel is a fire risk. Cook outdoors or in a vestibule with strong airflow at your own risk. A hot tent stove with a chimney is a different setup."
  },
  {
    "q": "What mistake do winter campers make with gas stoves?",
    "a": "They leave the canister outside overnight. Cold gas gives a weak flame. Keep it warm in your jacket or sleeping bag, and use an isobutane/propane blend."
  },
  {
    "q": "Is a hose-fed stove worth it over a pocket stove?",
    "a": "If you cook in freezing weather and want the canister away from the burner, yes. The AOTU Piezo is lighter and cheaper for mild cold. Check the canister thread on each."
  },
  {
    "q": "How do I set a stove up on snow?",
    "a": "Stamp a flat platform or place a board, then set the stove and pot with care. Use a windscreen. Keep the flame low until the pot is stable."
  },
  {
    "q": "How do I maintain a wood stove?",
    "a": "Let it cool, remove ash and wipe soot before packing. Titanium and stainless resist rust. Store it in its case to keep soot off gear."
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
