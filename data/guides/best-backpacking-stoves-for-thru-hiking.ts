export const guideSlug = "best-backpacking-stoves-for-thru-hiking";
export const guideTitle = "4 Best Backpacking Stoves For Thru Hiking in 2026";
export const metaTitle = "Best Backpacking Stoves For Thru Hiking in 2026";
export const metaDescription = "Best backpacking stoves for thru-hiking compared on weight, boil time, fuel availability and durability for long trails with few resupply stops.";
export const mainKeyword = "best backpacking stoves for thru hiking";
export const introParagraphs = [
  "Thru-hikers carry a stove for weeks, so weight and fuel matter more than bells and whistles. Canister fuel is easy to find in trail towns, which is why these canister stoves dominate.",
  "Four stoves are listed for lightweight backpacking, from 2.5 oz to a windproof folder. Carry a lighter, and cook only outdoors."
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
    "id": "best-backpacking-stoves-for-thru-hiking-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Optimus Crux Lite Ultralight Backpacking Stove",
    "price": "$52.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41yBMwbxvPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00WFFSFZ0?tag=rvgearlab-20",
    "description": "The Optimus Crux Lite weighs 2.5 oz (72 g) and delivers a 3000 W burner for 3-minute boils and precise simmering. It is compatible with EN417 butane, isobutane or propane cartridges.\n\nRemoving the folding mechanism trims 11 g from the original Crux, and it is the lightest canister stove in the Optimus lineup. It matches the MSR PocketRocket 2 on size while claiming a stronger burner.\n\nIt suits thru-hikers and alpine climbers who weigh every gram. Optimus has made stoves since 1899.",
    "specs": [
      "2.5 oz (72 g)",
      "3000 W burner",
      "EN417 butane, isobutane, propane"
    ],
    "pros": [
      "Lightest here at 72 g",
      "3 minute boils",
      "Simmer control",
      "Works with several cartridge gases"
    ],
    "cons": [
      "Does not fold",
      "Pricier than budget stoves"
    ],
    "bestFor": "Gram-counting thru-hikers",
    "take": "A stripped-down stove for long trails.",
    "catch": "It has no folding mechanism, so keep the supports in mind when packing."
  },
  {
    "id": "best-backpacking-stoves-for-thru-hiking-2",
    "rank": 2,
    "badge": "Best Proven Choice",
    "name": "MSR PocketRocket 2 Ultralight Camping and Backpacking Stove",
    "price": "$49.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412+dzwvEQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N5O7551?tag=rvgearlab-20",
    "description": "The MSR PocketRocket 2 comes in at 2.6 oz and takes about 3.5 minutes to bring a liter to a boil, according to MSR. It burns isobutane-propane canisters and skips priming, which keeps trail routines simple.\n\nIt is widely sold in trail towns and has serrated pot supports for many pot shapes. Next to the Crux Lite it is slightly heavier and folds smaller.\n\nIt suits first-time thru-hikers who want a stove that is easy to replace on trail. A protective case is included.",
    "specs": [
      "2.6 oz, folds to 2x2x3 inches",
      "Boils 1 L in 3.5 min",
      "No priming needed"
    ],
    "pros": [
      "Easy to replace along the trail",
      "Folds small",
      "Simple simmer to boil control",
      "Case included"
    ],
    "cons": [
      "Slightly heavier than the Crux Lite",
      "No igniter listed"
    ],
    "bestFor": "First thru-hike",
    "take": "A well-known stove that is easy to replace if lost.",
    "catch": "It has no igniter."
  },
  {
    "id": "best-backpacking-stoves-for-thru-hiking-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "AOTU Portable Camping Stoves Backpacking Stove with Piezo Ignition Stable Support Wind-Resistance Camp Stove f",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hybCmWPwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07NJYV3NP?tag=rvgearlab-20",
    "description": "The AOTU is a 3000 W canister stove with piezo ignition, a control valve and a windproof aluminum honeycomb net. It packs to 4 by 5 by 8 cm and fits 7/16 thread butane or butane-propane canisters.\n\nIt costs a fraction of the Crux Lite and is the only stove here that lists a plastic storage box. The honeycomb net doubles as a wind shield.\n\nIt suits budget hikers who want an igniter and a spare. The listing does not fit propane-only canisters.",
    "specs": [
      "3000 W, piezo ignition",
      "Packs to 4x5x8 cm",
      "Plastic storage box"
    ],
    "pros": [
      "Built-in igniter",
      "Very low price",
      "Windproof net",
      "Compact box"
    ],
    "cons": [
      "No weight listed",
      "Not for propane-only canisters"
    ],
    "bestFor": "Budget or spare stove",
    "take": "The cheap thru-hike backup with its own igniter.",
    "catch": "Weight is not listed, so check before relying on it."
  },
  {
    "id": "best-backpacking-stoves-for-thru-hiking-4",
    "rank": 4,
    "badge": "Best Windproof Folder",
    "name": "Odoland 3500W Windproof Camp Stove Camping Gas Stove with Fuel Canister Adapter",
    "price": "$23.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oxFcZEApL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0829RKQXZ?tag=rvgearlab-20",
    "description": "The Odoland 3500W is a foldable stove rated up to 3500 W, with a built-in wind guard, a piezo igniter and a flame controller. Its listing gives about 3 minutes for 1 L of water.\n\nTwo connectors cover different canister types, and a carrying case is included. Output is the highest rated figure in this group.\n\nIt suits hikers who cook in wind and want a built-in windshield. It is a good second stove for group trips.",
    "specs": [
      "3500 W, windshield design",
      "Piezo ignition",
      "Two canister connectors"
    ],
    "pros": [
      "Built-in windshield",
      "Piezo ignition",
      "Two connectors included",
      "Carrying case"
    ],
    "cons": [
      "No weight listed",
      "Bulkier than the minimalist stoves"
    ],
    "bestFor": "Windy trails",
    "take": "A windproof folder with the strongest rated output here.",
    "catch": "The listing does not state a weight."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight",
    "description": "We compared stated weights."
  },
  {
    "title": "Fuel",
    "description": "We checked cartridge compatibility."
  },
  {
    "title": "Boil time",
    "description": "We compared stated times."
  },
  {
    "title": "Ignition",
    "description": "We noted igniters."
  },
  {
    "title": "Durability",
    "description": "We compared build and support designs."
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
    "subheading": "By Hiker Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Gram counter",
          "Optimus Crux Lite",
          "72 g."
        ],
        [
          "First thru-hike",
          "MSR PocketRocket 2",
          "Easy to replace on trail."
        ],
        [
          "Budget with igniter",
          "AOTU Piezo",
          "Piezo for less."
        ],
        [
          "Windy ridges",
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
          "$0 to $30",
          "AOTU Piezo or Odoland 3500W"
        ],
        [
          "$40 to $60",
          "MSR PocketRocket 2 or Optimus Crux Lite"
        ]
      ]
    }
  },
  {
    "subheading": "Minimal vs Windproof",
    "cards": [
      {
        "label": "Minimal",
        "text": "The Optimus Crux Lite and MSR PocketRocket 2 weigh almost nothing."
      },
      {
        "label": "Windproof",
        "text": "The Odoland 3500W and AOTU Piezo add windshields and igniters at the cost of weight."
      }
    ],
    "note": "Most thru-hikers should choose the Optimus Crux Lite."
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
          "AOTU Piezo"
        ],
        [
          "Mid cost, proven",
          "MSR PocketRocket 2"
        ],
        [
          "Top gram saver",
          "Optimus Crux Lite"
        ],
        [
          "Wind protection",
          "Odoland 3500W"
        ]
      ]
    }
  },
  {
    "subheading": "For Long Trails Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated weight, easy refuel and a wind plan."
      },
      {
        "label": "In this comparison",
        "text": "The Optimus Crux Lite lists 72 g and the MSR PocketRocket 2 is easy to replace in trail towns."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Optimus Crux Lite to cut grams. It is the choice for serious thru-hikers."
      },
      {
        "label": "Save if",
        "text": "Save with the AOTU Piezo, but carry a lighter and check its canister thread."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Weight on a long trail",
    "explanation": "Over months, a few ounces matter. The Crux Lite lists 72 g and the PocketRocket 2 lists 2.6 oz. Weigh the stove and fuel together."
  },
  {
    "criterion": "Fuel availability",
    "explanation": "Isobutane-propane canisters are sold in most trail towns. A stove that uses them is easy to refuel. Check the thread type."
  },
  {
    "criterion": "Boil time and fuel use",
    "explanation": "Faster boils use less fuel. A 3-minute boil is typical. Look at stated times."
  },
  {
    "criterion": "Ignition reliability",
    "explanation": "Piezo igniters fail in rain and dust. Carry a lighter anyway. Check the listing."
  },
  {
    "criterion": "Wind",
    "explanation": "Wind wastes fuel on exposed ridges. A windshield or screen helps. Check what is included."
  }
];

export const faq = [
  {
    "q": "Why use canister stoves for thru-hiking?",
    "a": "Canisters are easy to find in most trail towns, and the stoves weigh next to nothing. They also light and simmer without priming. That reliability beats the savings of an alcohol stove for many hikers."
  },
  {
    "q": "Do I need a windscreen?",
    "a": "On open ridges yes, because wind wastes fuel and slows boils. Use a foil screen that stands clear of the canister. Never wrap a screen tightly around the canister, since heat can build up."
  },
  {
    "q": "Is the Crux Lite worth the money over the PocketRocket 2?",
    "a": "If you want the lowest weight, yes. The PocketRocket 2 is nearly as light and folds smaller. Most hikers will not notice the difference on trail."
  },
  {
    "q": "How do I estimate fuel for a section?",
    "a": "Count your daily boils, multiply by the stated boil time and add a reserve. Small canisters last a week of solo cooking for many hikers. Buy fuel at the last town."
  },
  {
    "q": "How do I maintain a stove on a long trail?",
    "a": "Wipe it clean after each use and check the canister seal for debris. Store it dry and away from your food. Replace any bent pot supports before they fail."
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
