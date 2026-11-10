export const guideSlug = "best-butane-backpacking-stoves";
export const guideTitle = "5 Best Butane Backpacking Stoves in 2026";
export const metaTitle = "Best Butane Backpacking Stoves in 2026";
export const metaDescription = "Best butane backpacking stoves compared on weight class, wind handling, thread type and cold limits, for hikers who burn butane canisters.";
export const mainKeyword = "best butane backpacking stoves";
export const introParagraphs = [
  "Butane canisters are cheap and easy to find in the US, and they carry more heat per ounce than propane, which is why plenty of backpackers use them. The catch is the cold: butane stops vaporizing near freezing, so these stoves are for mild-weather trips.",
  "Five stoves are compared by output, thread and adapter details, and how each deals with wind. Three are near-identical 3,000 W minis, so the ranking rests on the details each listing actually prints."
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
    "id": "best-butane-backpacking-stoves-1",
    "rank": 1,
    "badge": "Best High Output",
    "name": "Chef Master Portable Butane Camping Stove",
    "price": "$64.05",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51mLu5ekUgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01HUOEGM6?tag=rvgearlab-20",
    "description": "The Chef Master 15K lists 15,000 BTU from a butane burner with a built-in double wind guard around the head. An in-line regulator and a pressure-sensing shut-off stop gas flow if pressure climbs too high.\n\nIt out-muscles the 3,000 W minis on stated heat, and its hard-shell case can be set beside the burner as an extra windbreak. The price is the highest in this guide, and the case adds bulk to a pack.\n\nFits basecamp backpackers and car-supported hikers who cook real meals in big pots. The wind guard works well on exposed ridges.",
    "specs": [
      "15,000 BTU butane",
      "Double wind guard",
      "In-line regulator, shut-off"
    ],
    "pros": [
      "Strong 15,000 BTU output",
      "Wind guard around the burner",
      "Pressure-sensing shut-off",
      "Hard case doubles as windbreak"
    ],
    "cons": [
      "Priciest stove in this guide",
      "Butane weak in cold"
    ],
    "bestFor": "Group cooking in wind",
    "take": "A 15,000 BTU butane burner with a double wind guard and a hard case that doubles as a windbreak.",
    "catch": "It costs more than the other stoves here and is bigger than a pocket burner."
  },
  {
    "id": "best-butane-backpacking-stoves-2",
    "rank": 2,
    "badge": "Best Detail on Butane Cold Limits",
    "name": "Camping Stove",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/416UlsILBhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08B1QTW1J?tag=rvgearlab-20",
    "description": "The QUALIALL is a foldable stainless steel mini stove that the listing says boils 34 ounces of water in 3 to 5 minutes. A butane adapter tip and two emergency blankets come with it, plus a carrying pouch.\n\nIt stands out because the listing spells out the drawback: below 32 degrees Fahrenheit butane stays liquid, so warm the canister or use a mix. It also gives a safety reminder to close the knob before screwing on the canister.\n\nA practical choice for weekend backpackers and kayakers who read the fine print and want a stainless build. The foldable supports save pack space.",
    "specs": [
      "Stainless steel, foldable",
      "34 oz boil in 3-5 minutes",
      "Adapter tip and blankets"
    ],
    "pros": [
      "Stainless steel build",
      "Boil time listed at 3 to 5 minutes",
      "Cold-weather limit spelled out",
      "Adapter and two blankets included"
    ],
    "cons": [
      "Fails near freezing on pure butane",
      "Listing is wordy and varied by pack"
    ],
    "bestFor": "Weekend trips in mild weather",
    "take": "A stainless folding stove with honest cold-weather guidance and extras in the box.",
    "catch": "Butane stops working near freezing, so it needs a warm canister or a blend below 32 F."
  },
  {
    "id": "best-butane-backpacking-stoves-3",
    "rank": 3,
    "badge": "Best Cheap Twin-Pack Option",
    "name": "THTYBROS Portable Camping Stove with Piezo Ignition",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41SDjzWzfTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F1M9BZC1?tag=rvgearlab-20",
    "description": "The THTYBROS is a 3,000 W stove on an aircraft-grade aluminum base with a honeycomb windproof mesh. Its 9.5 cm burner head suits pots near 20 cm for one to three people, and it works with 7/16 threaded EN417 butane or butane-propane canisters.\n\nCompared with the AOTU it carries almost the same specs at the same low price, and the listing mentions a twin-pack option for sharing. It is not compatible with propane-only canisters.\n\nGood for budget hikers and kids' trips who might want two stoves. It folds to 4 by 5 by 8 cm.",
    "specs": [
      "3,000 W, 9.5 cm head",
      "Folds to 4 x 5 x 8 cm",
      "7/16 thread, EN417"
    ],
    "pros": [
      "Rock-bottom price",
      "Honeycomb windproof mesh",
      "Folds to a tiny box",
      "Twin-pack option"
    ],
    "cons": [
      "Not for propane-only canisters",
      "No weight listed"
    ],
    "bestFor": "Budget pairs and spares",
    "take": "A tiny 3,000 W stove at rock-bottom price, with a twin-pack option.",
    "catch": "It will not fit propane-only canisters, and the listing gives no weight."
  },
  {
    "id": "best-butane-backpacking-stoves-4",
    "rank": 4,
    "badge": "Best Budget Backpacking Stove",
    "name": "AOTU Portable Camping Stoves Backpacking Stove with Piezo Ignition Stable Support Wind-Resistance Camp Stove f",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hybCmWPwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07NJYV3NP?tag=rvgearlab-20",
    "description": "The AOTU is a 3,000 W stove with an aluminum alloy body, a honeycomb windproof net and a piezo ignition. The adjustable valve runs from full boil to a simmer, and the 9.5 cm head suits a 20 cm pot.\n\nNext to the THTYBROS it is nearly identical on paper, and both carry the same EN417 thread note. Against the Chef Master 15K it gives up output and a hard case for a far lower cost and a smaller pack footprint.\n\nA reliable low-cost choice for first-time backpackers who need one stove and little else. It packs into a small box.",
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
    "bestFor": "First backpacking stove",
    "take": "A compact 3,000 W piezo stove with a simmer valve for the lowest price.",
    "catch": "The listing gives no weight, and the stove will not fit propane canisters."
  },
  {
    "id": "best-butane-backpacking-stoves-5",
    "rank": 5,
    "badge": "Best Fuel Flexibility",
    "name": "Small Backpacking Stove Portable Camping Stove Burner with Butane Adapter",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41NyE2N5X9S._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B092QS9DX7?tag=rvgearlab-20",
    "description": "The Caudblor is a small backpacking stove with fold-out pot supports and a control valve that is said to give smooth flame adjustment. It comes with an adapter so it can run on butane cylinders and 1 lb propane bottles.\n\nUnlike the other butane picks it can step up to a bigger propane bottle when the weather turns cold. A wider base is meant to give more room for a skillet than the minis.\n\nA good option for backpackers and bike-packers who want a butane stove now and a bigger fuel option later. It stows in a zipper case.",
    "specs": [
      "Butane adapter included",
      "Fits 1 lb propane bottles",
      "Wide fold-out pot supports"
    ],
    "pros": [
      "Adapter fits 1 lb propane bottles",
      "Wider base than most minis",
      "Zipper case included",
      "Simple flame control valve"
    ],
    "cons": [
      "No BTU or weight listed",
      "Terse listing details"
    ],
    "bestFor": "Bike-packers needing options",
    "take": "A small stove with a wider base and an adapter for 1 lb propane bottles.",
    "catch": "The listing gives no BTU or weight figure, so power and carry weight are unknown."
  }
];

export const howWeEvaluated = [
  {
    "title": "Output and size",
    "description": "We compared stated BTU or watts and the burner head size."
  },
  {
    "title": "Fuel thread",
    "description": "We checked the thread type and which canisters each stove accepts."
  },
  {
    "title": "Wind handling",
    "description": "We looked for wind guards, meshes and cases that double as windbreaks."
  },
  {
    "title": "Cold limits",
    "description": "We noted which listings explain how butane behaves near freezing."
  },
  {
    "title": "Extras",
    "description": "We recorded adapters, cases and other items in the box."
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
    "subheading": "By Trip Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Group meals in wind",
          "Chef Master 15K",
          "15,000 BTU, wind guard"
        ],
        [
          "Weekend trip, stainless build",
          "QUALIALL Foldable",
          "Stainless, boil time listed"
        ],
        [
          "Budget minimalist",
          "AOTU Piezo",
          "Lowest price, simmer valve"
        ],
        [
          "Two stoves for a pair",
          "THTYBROS 3000W",
          "Twin-pack option"
        ],
        [
          "Option to move to propane",
          "Caudblor Adapter Stove",
          "Fits 1 lb propane bottles"
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
          "$0 to $10",
          "QUALIALL Foldable or THTYBROS 3000W"
        ],
        [
          "$0 to $20",
          "AOTU Piezo or Caudblor Adapter Stove"
        ],
        [
          "$60 to $70",
          "Chef Master 15K"
        ]
      ]
    }
  },
  {
    "subheading": "Butane-Only vs Propane Option",
    "cards": [
      {
        "label": "Butane-only",
        "text": "The AOTU Piezo and THTYBROS 3000W work with butane and blends but not propane-only canisters."
      },
      {
        "label": "Propane option",
        "text": "The Caudblor Adapter Stove can attach to 1 lb propane bottles through its adapter."
      }
    ],
    "note": "Pick the AOTU Piezo for simple mild-weather trips and the Caudblor Adapter Stove if cold is possible."
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
          "Low price, twin option",
          "THTYBROS 3000W"
        ],
        [
          "Mid price, adapter",
          "Caudblor Adapter Stove"
        ],
        [
          "Highest price, high output",
          "Chef Master 15K"
        ]
      ]
    }
  },
  {
    "subheading": "Weekend Hikes in Mild Weather Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A small box, a simmer valve and a stated thread type."
      },
      {
        "label": "In this comparison",
        "text": "The AOTU Piezo and THTYBROS 3000W fold to 4 by 5 by 8 cm and list their 7/16 thread."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Chef Master 15K for output and wind protection."
      },
      {
        "label": "Save if",
        "text": "Save with the AOTU Piezo or THTYBROS 3000W for the lowest cost."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Butane in the cold",
    "explanation": "Pure butane stops turning to gas around freezing, so the flame dies. Warm the canister in a pocket or use a butane-propane blend. The QUALIALL listing states the 32 degree limit directly."
  },
  {
    "criterion": "Thread and adapter",
    "explanation": "Most stoves use a 7/16 EN417 thread. Some accept only butane or blends and not propane-only canisters, as with the AOTU and THTYBROS. Check the thread note before you buy fuel."
  },
  {
    "criterion": "Burner head size",
    "explanation": "A head near 9.5 cm suits pots around 20 cm across. A wider pot can tip. Match the head to the pot you carry."
  },
  {
    "criterion": "Wind guard",
    "explanation": "Wind is the biggest fuel waster on a stove with a bare flame. A mesh, guard or foil windscreen can raise efficiency. The Chef Master 15K has a double wind guard."
  },
  {
    "criterion": "Safe canister handling",
    "explanation": "Turn the knob fully off before threading a canister, then check for leaks. Never use these stoves in a tent. Keep the canister away from the flame."
  }
];

export const faq = [
  {
    "q": "Can I use butane in cold weather?",
    "a": "Pure butane struggles near freezing. Keep the canister warm or choose a butane-propane blend. The QUALIALL listing says butane stays liquid below 32 F."
  },
  {
    "q": "What mistake do buyers make with butane stoves?",
    "a": "They buy propane-only canisters. Check that the stove lists 7/16 EN417 butane or blend canisters. Never force a canister that will not thread."
  },
  {
    "q": "Is the Chef Master 15K worth it over a mini stove?",
    "a": "If you cook for groups or in wind, yes. The mini stoves cost much less and weigh less. Choose by pot size and trip length."
  },
  {
    "q": "How do I set up a butane stove?",
    "a": "Close the knob, thread the canister in until snug, set it on level ground and open the valve a little before lighting. Check for gas smell. Use a windscreen."
  },
  {
    "q": "How do I store the stove?",
    "a": "Remove the canister, wipe the burner and fold the supports. Keep it in its case or box. Store canisters away from heat."
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
