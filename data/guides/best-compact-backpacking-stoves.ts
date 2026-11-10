export const guideSlug = "best-compact-backpacking-stoves";
export const guideTitle = "5 Best Compact Backpacking Stoves in 2026";
export const metaTitle = "Best Compact Backpacking Stoves in 2026";
export const metaDescription = "Best compact backpacking stoves compared by packed size, weight and what fits in the box, from a 2x2x3 inch burner to nesting cook kits.";
export const mainKeyword = "best compact backpacking stoves";
export const introParagraphs = [
  "Compact is about volume as much as weight: a stove that packs to the size of a deck of cards leaves room for a pot, a canister and lunch. The five picks here range from a single burner to full nesting kits, so packed dimensions get as much attention as ounces.",
  "They are ranked by how little pack space each takes for what it does. Every one is for outdoor cooking only, with the canister threaded on carefully and the stove kept away from tent fabric."
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
    "id": "best-compact-backpacking-stoves-1",
    "rank": 1,
    "badge": "Best Overall Compact Burner",
    "name": "MSR PocketRocket 2 Ultralight Camping and Backpacking Stove",
    "price": "$49.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412+dzwvEQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N5O7551?tag=rvgearlab-amz-20",
    "description": "The MSR PocketRocket 2 weighs 2.6 ounces and packs down to a 2 x 2 x 3 inch bundle inside its protective case. Maker's figure for one liter of water is 3.5 minutes, with no priming or preheating.\n\nIt is the smallest and lightest stove here by a wide margin, and serrated pot supports take a wide range of pot sizes. Next to the Odoland 3500W Windproof it costs more and adds no windshield.\n\nA superb match for minimalists who already own a pot and want a burner that vanishes in a pocket. Unfolded it spans 4.8 inches square and 3.6 inches high.",
    "specs": [
      "2.6 oz, 2 x 2 x 3 in folded",
      "1 L in 3.5 minutes",
      "Isobutane-propane canisters"
    ],
    "pros": [
      "Only 2.6 ounces",
      "Boils a liter in 3.5 minutes",
      "No priming or preheating needed",
      "Protective case included"
    ],
    "cons": [
      "No igniter listed",
      "No windshield built in"
    ],
    "bestFor": "Minimalist backpackers",
    "take": "A 2.6 ounce burner that folds to 2 by 2 by 3 inches and boils a liter in 3.5 minutes.",
    "catch": "No igniter is listed, and the burner has no windshield of its own."
  },
  {
    "id": "best-compact-backpacking-stoves-2",
    "rank": 2,
    "badge": "Best Windproof Compact",
    "name": "Odoland 3500W Windproof Camp Stove Camping Gas Stove with Fuel Canister Adapter",
    "price": "$23.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oxFcZEApL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0829RKQXZ?tag=rvgearlab-amz-20",
    "description": "The Odoland 3500W is a folding stove with a built-in windshield, piezo ignition and a flame controller. A boil of 1 liter in around 3 minutes is claimed, and it takes 7/16 thread propane, butane or mixed canisters through two connectors.\n\nIt adds the windshield and igniter that the MSR PocketRocket 2 lacks, and it costs less. Its folded dimensions are not given, so it is bulkier on paper than the MSR.\n\nA strong value for hikers who want built-in wind protection and a lighter-free start. A carry case is included.",
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
    "bestFor": "Windy-trail hikers",
    "take": "A foldable 3,500 W stove with a windshield, piezo igniter and two canister connectors.",
    "catch": "Boil time changes with weather and pot, and the folded size is not stated."
  },
  {
    "id": "best-compact-backpacking-stoves-3",
    "rank": 3,
    "badge": "Best Flat-Packing Wood Stove",
    "name": "Kuvik Titanium Wood Stove",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41aPJtKsHJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08NLVKHPP?tag=rvgearlab-amz-20",
    "description": "Kuvik makes its wood burner from Grade-1 titanium, and the 6.25 by 5 by 5 inch firebox flattens to 0.2 inch. A case holds the 6.8 ounce stove and keeps soot off other gear.\n\nUnlike the gas picks it needs no canister, and flat storage lets it ride against a pack frame. A rack on top takes a range of pot and pan sizes.\n\nGood for backpackers in wooded areas who want to drop fuel weight altogether. Tabs slot together without tools.",
    "specs": [
      "Grade-1 titanium",
      "Flat at 0.2 inch",
      "Weighs 6.8 ounces"
    ],
    "pros": [
      "Flat at 0.2 inch thick",
      "Burns twigs, no canister",
      "Tabs lock without tools",
      "Case keeps soot contained"
    ],
    "cons": [
      "No simmer control",
      "Fire rules may apply"
    ],
    "bestFor": "Wood-fire minimalists",
    "take": "A 0.2 inch thick titanium wood stove that needs no fuel canister.",
    "catch": "Wood fire gives rough heat control, and fire rules may apply."
  },
  {
    "id": "best-compact-backpacking-stoves-4",
    "rank": 4,
    "badge": "Best Nesting Cook System",
    "name": "Odoland Camping Pots with Heat Exchanger Camping Cooking Set with Portable Camping Stove Camping Mess Kit Incl",
    "price": "$40.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41XqM5TM8eL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CR4W66C3?tag=rvgearlab-amz-20",
    "description": "The Odoland Heat Exchanger Kit has nine pieces: a 1,300 W stove, 0.6 and 0.8 liter pots, a canister stabilizer, a 16 ounce mug and a utensil set in a mesh bag. It weighs 660 grams and packs to about 4.9 by 6.6 inches.\n\nCompared with the single burners, it gives you a full cook system that nests into itself. The heat exchanger design is said to raise efficiency by 30 percent and boil 0.5 liter in about 2 minutes.\n\nA neat choice for first-time backpackers who want everything in a single purchase. The stabilizer steadies the canister.",
    "specs": [
      "1300 W stove, two pots",
      "Canister stabilizer included",
      "660 g total weight"
    ],
    "pros": [
      "Pots, mug and utensils included",
      "Heat exchanger saves fuel",
      "Stabilizer steadies the canister",
      "Packs into a mesh bag"
    ],
    "cons": [
      "Small pots limit meal size",
      "Output claims are the maker's own"
    ],
    "bestFor": "First-time kit buyers",
    "take": "A nine-piece nesting system with two pots, a mug, a stabilizer and a heat-exchange stove.",
    "catch": "The pots hold only 0.6 and 0.8 liters, and the efficiency figure is the maker's own."
  },
  {
    "id": "best-compact-backpacking-stoves-5",
    "rank": 5,
    "badge": "Best Budget Kit",
    "name": "Odoland Camping Cookware Mess Kit",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41F0AAPilZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07Q5WCNDJ?tag=rvgearlab-amz-20",
    "description": "The Odoland 6-piece set bundles a folding stove with two non-stick anodized aluminum pots, a spork, a wiping cloth and a bag. Pot and stove handles fold, and all of it packs together with room left over for a gas tank.\n\nIt is the cheaper cousin of the Odoland Heat Exchanger Kit, with fewer pieces and no mug or utensil set. It still gives you a pot, a stove and a place to carry them.\n\nA sound entry kit for beginners and kids' trips on a budget. The mesh bag keeps pieces together.",
    "specs": [
      "6 pieces including stove",
      "Two non-stick pots",
      "Room to pack gas tank"
    ],
    "pros": [
      "Nests with room for fuel",
      "Includes spork and cloth",
      "Foldable pot handles",
      "Low price"
    ],
    "cons": [
      "No cups or plates",
      "Simple burner control"
    ],
    "bestFor": "Beginner budget kit",
    "take": "A six-piece cook set with two pots and a stove at a low price.",
    "catch": "There are no cups or plates, and burner control is simple."
  }
];

export const howWeEvaluated = [
  {
    "title": "Packed size",
    "description": "We compared the dimensions each listing prints for the folded stove or nested kit."
  },
  {
    "title": "Weight",
    "description": "We noted listed weights and which listings give none."
  },
  {
    "title": "Fuel type",
    "description": "We separated canister burners from the wood stove."
  },
  {
    "title": "Wind and ignition",
    "description": "We checked for windshields and igniters."
  },
  {
    "title": "What is in the box",
    "description": "We counted pots, cases and accessories in the kits."
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
    "subheading": "By Pack Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Smallest possible burner",
          "MSR PocketRocket 2",
          "2 x 2 x 3 inches"
        ],
        [
          "Windshield and igniter",
          "Odoland 3500W Windproof",
          "Built-in windshield, piezo"
        ],
        [
          "Wood fuel, flat pack",
          "Kuvik Titanium Stove",
          "0.2 inch thick"
        ],
        [
          "All-in-one nesting system",
          "Odoland Heat Exchanger Kit",
          "Nine pieces, 660 g"
        ],
        [
          "Cheapest full kit",
          "Odoland 6pc Set",
          "Stove and two pots"
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
          "Odoland 3500W Windproof or Odoland 6pc Set"
        ],
        [
          "$30 to $50",
          "Kuvik Titanium Stove or Odoland Heat Exchanger Kit"
        ],
        [
          "$40 to $50",
          "MSR PocketRocket 2"
        ]
      ]
    }
  },
  {
    "subheading": "Burner Only vs Kit",
    "cards": [
      {
        "label": "Burner only",
        "text": "The MSR PocketRocket 2, Odoland 3500W Windproof and Kuvik Titanium Stove need your own pot."
      },
      {
        "label": "Cook kit",
        "text": "The Odoland Heat Exchanger Kit and Odoland 6pc Set include pots and a bag."
      }
    ],
    "note": "Choose the MSR PocketRocket 2 if you own a pot, and the Odoland Heat Exchanger Kit if you do not."
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
          "Lowest cost",
          "Odoland 3500W Windproof"
        ],
        [
          "Low cost, full kit",
          "Odoland 6pc Set"
        ],
        [
          "Mid price, wood",
          "Kuvik Titanium Stove"
        ],
        [
          "Mid price, nesting",
          "Odoland Heat Exchanger Kit"
        ],
        [
          "Highest price, lightest",
          "MSR PocketRocket 2"
        ]
      ]
    }
  },
  {
    "subheading": "Overnight Trips Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Packed size, a fast boil and an igniter or a lighter in your kit."
      },
      {
        "label": "In this comparison",
        "text": "The MSR PocketRocket 2 boils a liter in 3.5 minutes and folds to 2 by 2 by 3 inches."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the MSR PocketRocket 2 for the smallest, lightest burner."
      },
      {
        "label": "Save if",
        "text": "Save with the Odoland 3500W Windproof or Odoland 6pc Set."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Packed volume",
    "explanation": "Weight gets all the attention but volume decides how much else fits. The PocketRocket 2 folds to 2 by 2 by 3 inches, the Kuvik to 0.2 inch thick. Check printed dimensions, not just the word compact."
  },
  {
    "criterion": "Nesting kits",
    "explanation": "A kit that nests puts the stove, canister and cup in one pot. The Odoland Heat Exchanger Kit packs to about 4.9 by 6.6 inches. Add up what you would otherwise buy separately before judging price."
  },
  {
    "criterion": "Wind protection",
    "explanation": "A compact stove with no windshield burns more fuel in a breeze. The Odoland 3500W Windproof builds one in. For others, carry a foil windscreen."
  },
  {
    "criterion": "Fuel thread",
    "explanation": "Most stoves here use 7/16 thread canisters. Check the thread and the canister blend. Never force a canister that does not thread easily."
  },
  {
    "criterion": "Boil time claims",
    "explanation": "Boil times on listings are best-case numbers. The PocketRocket 2 lists 3.5 minutes for a liter, the Odoland 3500W lists around 3 minutes. Weather, altitude and pot shape change the result."
  }
];

export const faq = [
  {
    "q": "Can a compact stove run big pots?",
    "a": "Small burners support big pots but tip more easily. Check the pot support size. The MSR PocketRocket 2 has serrated supports for many pot sizes."
  },
  {
    "q": "What mistake do buyers make with compact stoves?",
    "a": "They buy the smallest burner and forget wind. Add a windscreen or choose one with a built-in shield. Keep the flame away from tent walls."
  },
  {
    "q": "Is the MSR PocketRocket 2 worth it over a budget stove?",
    "a": "For weight and pack space, yes. The Odoland 3500W Windproof costs less and adds a shield and igniter. Both boil quickly."
  },
  {
    "q": "How do I fit the stove and canister together?",
    "a": "Nest the stove in a pot with a small canister if the pot is large enough. Pad it to avoid rattling. Keep the canister upright when packing."
  },
  {
    "q": "How do I clean the stove?",
    "a": "Let it cool, brush off soot and wipe the burner head. Keep fuel connections dry. Store it in its case."
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
