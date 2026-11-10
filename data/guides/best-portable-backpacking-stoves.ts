export const guideSlug = "best-portable-backpacking-stoves";
export const guideTitle = "5 Best Portable Backpacking Stoves in 2026";
export const metaTitle = "Best Portable Backpacking Stoves in 2026";
export const metaDescription = "Best portable backpacking stoves for hikers who want one light stove they can carry anywhere, compared on weight, fuel and what is in the box.";
export const mainKeyword = "best portable backpacking stoves";
export const introParagraphs = [
  "Portable here means a stove you can forget about in the pack until dinner. These five cover the spread: an 85 gram folding burner, a classic ultralight canister stove, a pocket budget stove, a wood-burning flat-pack and a full cook set with pots included.",
  "The list is ordered by how much each one makes a trip easier to carry and cook for. Weight and folded size come from the listings, and every stove is for outdoor use only, never inside a tent."
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
    "id": "best-portable-backpacking-stoves-1",
    "rank": 1,
    "badge": "Best Lightest Folding Burner",
    "name": "Fire-Maple Greenpeak 1 Camping Stove with Piezo Ignition Portable Gas Stove",
    "price": "$19.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/312K0+YdclL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D14D7LS2?tag=rvgearlab-amz-20",
    "description": "The Fire-Maple Greenpeak 1 weighs 85 grams (3 ounces) and packs down to roughly two by three inches. It has built-in piezo ignition and uses stainless steel, ceramic, aluminum alloy and silicone in its build.\n\nThat makes it a lighter, smaller package than the MSR PocketRocket 2, with an igniter that the MSR lacks, and it is priced below it. The listing gives no boil time or output figure, so it is harder to compare on speed.\n\nA neat pick for hikers who want a tiny stove with a built-in igniter. It pairs with a Fire-Maple G3 pot, according to the listing.",
    "specs": [
      "85 g, piezo ignition",
      "Packs about 2 x 3 inches",
      "Stainless, ceramic, aluminum"
    ],
    "pros": [
      "Igniter built in",
      "Folds very small",
      "Priced below both MSR stoves",
      "Fuel-efficient design"
    ],
    "cons": [
      "No boil time listed",
      "Not compatible with the Z1 adapter"
    ],
    "bestFor": "Minimalist day and overnight hikes",
    "take": "An 85 gram stove, small enough for a coat pocket, that lights with a piezo igniter.",
    "catch": "The listing gives no boil time or output, and it does not work with the Z1 adapter."
  },
  {
    "id": "best-portable-backpacking-stoves-2",
    "rank": 2,
    "badge": "Best Proven Performer",
    "name": "MSR PocketRocket 2 Ultralight Camping and Backpacking Stove",
    "price": "$49.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412+dzwvEQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N5O7551?tag=rvgearlab-amz-20",
    "description": "The MSR PocketRocket 2 is a 2.6 ounce canister stove that folds to 2 by 2 by 3 inches and comes in a protective case. The maker's figure for boiling a liter is 3.5 minutes, and it needs no priming.\n\nIt is slightly heavier than the Fire-Maple Greenpeak 1 and costs more, in return for a documented boil time and flame control from a simmer to a rolling boil. Serrated pot supports suit a range of pots.\n\nA proven choice for hikers who want performance figures they can trust. It runs on isobutane-propane canisters.",
    "specs": [
      "2.6 oz, opens to 4.8 inches",
      "Boils 1 L in 3.5 min",
      "Supports many pot sizes"
    ],
    "pros": [
      "Boils a shared liter quickly",
      "Light enough to split the load",
      "Works with many pot shapes",
      "Case included"
    ],
    "cons": [
      "No igniter listed",
      "One burner, one pot at a time"
    ],
    "bestFor": "Hikers who cook real meals",
    "take": "A 2.6 ounce stove with a stated 3.5-minute boil and simmer-to-boil flame control.",
    "catch": "No igniter is listed, and it cooks one pot at a time."
  },
  {
    "id": "best-portable-backpacking-stoves-3",
    "rank": 3,
    "badge": "Best Budget Pocket Stove",
    "name": "AOTU Portable Camping Stoves Backpacking Stove with Piezo Ignition Stable Support Wind-Resistance Camp Stove f",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hybCmWPwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07NJYV3NP?tag=rvgearlab-amz-20",
    "description": "The AOTU is a 3,000 W stove with a piezo igniter, a honeycomb windproof net and an aluminum alloy body. Its threaded port suits butane or butane-propane canisters, and everything stows in a small plastic box.\n\nWhere the MSR PocketRocket 2 costs several times as much, the AOTU delivers a similar basic function at the lowest price here. It will not fit propane-only canisters.\n\nA smart backup or starter stove for casual hikers. The small box protects it in a pack.",
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
    "bestFor": "Starter and backup stove",
    "take": "A tiny 3,000 W stove with igniter and wind net at the lowest price.",
    "catch": "The listing gives no weight, and it will not fit propane canisters."
  },
  {
    "id": "best-portable-backpacking-stoves-4",
    "rank": 4,
    "badge": "Best Fuel-Free Option",
    "name": "Kuvik Titanium Wood Stove",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41aPJtKsHJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08NLVKHPP?tag=rvgearlab-amz-20",
    "description": "Kuvik's titanium wood stove weighs 6.8 ounces and flattens to 0.2 inch, then pops up into a 6.25 by 5 by 5 inch firebox. It burns twigs, sticks and other natural fuel, with a case that contains soot.\n\nIt trades the instant flame of the gas stoves for a stove that never needs a canister. A rack on top supports various pot and pan sizes.\n\nPick it for long trips in wooded country where fuel resupply is hard. Tabs assemble it without tools.",
    "specs": [
      "6.8 oz Grade-1 titanium",
      "Flat at 0.2 inch",
      "Burns twigs and sticks"
    ],
    "pros": [
      "No fuel to carry",
      "Flattens to 0.2 inch",
      "Tool-free tab assembly",
      "Case contains soot"
    ],
    "cons": [
      "No simmer control",
      "Fire rules may apply"
    ],
    "bestFor": "Long trips in wooded country",
    "take": "A 0.2 inch thick titanium wood stove that frees you from carrying fuel.",
    "catch": "Wood fire gives rough heat control, and fire rules may apply."
  },
  {
    "id": "best-portable-backpacking-stoves-5",
    "rank": 5,
    "badge": "Best Complete Starter Kit",
    "name": "Odoland Camping Cookware Stove Set with 1.2L/0.6L Pot and Protable Stove",
    "price": "$28.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ZUneNRI4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01MS07XPL?tag=rvgearlab-amz-20",
    "description": "The Odoland 11-piece set holds a mini stove, two non-stick aluminum pots of 1.2 and 0.6 liters, a spoon, fork, knife, 16 ounce cup and silicone sleeve, and a tank bracket. Two bags keep the kit organized.\n\nUnlike the single burners, it supplies the pots, cup and utensils, so one purchase starts a camp kitchen. The stove itself offers limited simmer control.\n\nA friendly pick for beginners who own no cookware yet. Foldable handles help it pack down.",
    "specs": [
      "11 pieces with mini stove",
      "Two non-stick pots",
      "Foldable pot and stove handles"
    ],
    "pros": [
      "Stove and cookware in one set",
      "Two non-stick pots",
      "Folding handles save space",
      "Anodized aluminum pots"
    ],
    "cons": [
      "Mini stove has limited control",
      "Non-stick coating wears"
    ],
    "bestFor": "Beginners with no cookware",
    "take": "Eleven pieces: stove, two pots, a cup, utensils and a tank bracket in two bags.",
    "catch": "The mini stove has limited simmer control, and the non-stick coating wears."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight",
    "description": "We compared printed weights and noted who prints none."
  },
  {
    "title": "Folded size",
    "description": "We recorded the dimensions each listing gives."
  },
  {
    "title": "Fuel",
    "description": "We separated canister burners, a wood stove and a cook set."
  },
  {
    "title": "Ignition",
    "description": "We noted built-in igniters."
  },
  {
    "title": "What is included",
    "description": "We checked cases, pots and utensils."
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
    "subheading": "By Hiker",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Weight-focused solo",
          "Fire-Maple Greenpeak 1",
          "85 grams"
        ],
        [
          "Want printed performance",
          "MSR PocketRocket 2",
          "3.5-minute boil"
        ],
        [
          "Backup stove",
          "AOTU Piezo",
          "Lowest price"
        ],
        [
          "Wood country",
          "Kuvik Titanium Stove",
          "No fuel to carry"
        ],
        [
          "No cookware yet",
          "Odoland 11pc Set",
          "Pots and utensils included"
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
          "$0 to $20",
          "AOTU Piezo or Fire-Maple Greenpeak 1"
        ],
        [
          "$20 to $40",
          "Odoland 11pc Set or Kuvik Titanium Stove"
        ],
        [
          "$40 to $50",
          "MSR PocketRocket 2"
        ]
      ]
    }
  },
  {
    "subheading": "Gas vs Wood",
    "cards": [
      {
        "label": "Gas",
        "text": "The Fire-Maple Greenpeak 1, MSR PocketRocket 2 and AOTU Piezo light fast and hold a flame."
      },
      {
        "label": "Wood",
        "text": "The Kuvik Titanium Stove burns found fuel and removes canister weight."
      }
    ],
    "note": "Most hikers should choose the MSR PocketRocket 2."
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
          "Low price",
          "Fire-Maple Greenpeak 1"
        ],
        [
          "Mid price, full kit",
          "Odoland 11pc Set"
        ],
        [
          "Mid price, wood",
          "Kuvik Titanium Stove"
        ],
        [
          "Higher price",
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
        "text": "A printed weight, a fast boil and an igniter."
      },
      {
        "label": "In this comparison",
        "text": "The Fire-Maple Greenpeak 1 lists 85 grams and the MSR PocketRocket 2 lists a 3.5-minute boil."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the MSR PocketRocket 2 for a proven boil time."
      },
      {
        "label": "Save if",
        "text": "Save with the AOTU Piezo or Fire-Maple Greenpeak 1."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Weight you can print",
    "explanation": "A stove's weight should be on the listing. The Greenpeak 1 lists 85 grams and the PocketRocket 2 lists 2.6 ounces. If a listing has no weight, treat it as unknown."
  },
  {
    "criterion": "Fuel logistics",
    "explanation": "Gas canisters are easy to buy but can run out, while wood stoves need dry fuel. Think about your route. Check the canister thread on every gas stove."
  },
  {
    "criterion": "Ignition",
    "explanation": "A built-in igniter saves matches but can fail. Carry a lighter anyway. The Greenpeak 1 and AOTU list igniters."
  },
  {
    "criterion": "Cookware fit",
    "explanation": "A tiny stove has tiny supports. Match the pot support width to your pot. The PocketRocket 2 lists serrated supports for many pots."
  },
  {
    "criterion": "Kit value",
    "explanation": "A cook set can be cheaper than parts. The Odoland 11pc Set supplies pots, cup and utensils. Compare what you would otherwise buy."
  }
];

export const faq = [
  {
    "q": "What fuel do these stoves use?",
    "a": "The gas stoves use canisters with 7/16 thread or the isobutane-propane type in the listing. The Kuvik burns wood. Check each listing."
  },
  {
    "q": "What mistake do buyers make with tiny stoves?",
    "a": "They buy a stove that does not fit their pot. Check pot support width. Add a windscreen."
  },
  {
    "q": "Is the MSR PocketRocket 2 worth it over cheaper stoves?",
    "a": "If you value a documented boil time and flame control, yes. The AOTU is cheaper and simpler."
  },
  {
    "q": "How do I attach the canister?",
    "a": "Make sure the valve is closed, thread the stove on gently and check for leaks. Light after the stove is secure."
  },
  {
    "q": "How do I store the stove?",
    "a": "Let it cool, fold it and keep it in its case or box. Store canisters away from heat."
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
