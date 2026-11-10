export const guideSlug = "best-alcohol-stove-kits";
export const guideTitle = "2 Best Alcohol Stove Kits in 2026";
export const metaTitle = "Best Alcohol Stove Kits in 2026";
export const metaDescription = "Best alcohol stove kits compared on listed weight, boil time, stand design and what ships in the box, with an honest note on how few listings qualify.";
export const mainKeyword = "best alcohol stove kits";
export const introParagraphs = [
  "An alcohol stove kit bundles the burner with a stand and sometimes a fuel bottle, so you can start cooking out of the box. Few listings on Amazon describe a true kit, and several lean on vague branding.",
  "Only two genuine kits are described well enough to compare here. A propane-and-butane stove also appeared in the results, but it is not an alcohol stove, so it is left out."
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
    "id": "best-alcohol-stove-kits-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Camping Alcohol Gas Stove",
    "price": "$94.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41q+RnQcjSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HKPKP476?tag=rvgearlab-20",
    "description": "This kit is a mini alcohol burner that weighs only 3.51 oz and uses copper tube vaporization. The listing says it boils about 500 ml of water in around 7 minutes on denatured alcohol of 95 percent or more, not included.\n\nIt comes in two options, one with the windproof stand and an upgraded set that adds an empty bottle, rubber ring and storage bag. That stated boil time puts a number on performance that the Anodized Hiking Kit does not give.\n\nIt suits backpackers and tackle-box anglers who want a palm-sized burner with a stated boil time. The windproof stand supports small cookware.",
    "specs": [
      "3.51 oz, copper vaporization",
      "Boils 500 ml in about 7 min",
      "Windproof stand, bottle option"
    ],
    "pros": [
      "Boil time is stated",
      "Smaller than a palm",
      "Two kit options available",
      "Windproof stand included"
    ],
    "cons": [
      "Highest price in the group",
      "Fuel is not included"
    ],
    "bestFor": "Backpacking and fishing",
    "take": "A tiny kit with a boil time you can plan around.",
    "catch": "It costs more than the other listing here, and fuel is not included."
  },
  {
    "id": "best-alcohol-stove-kits-2",
    "rank": 2,
    "badge": "Best Budget Kit",
    "name": "High-Power Portable Mini Outdoor Spirit Burner & Alcohol Stove",
    "price": "$55.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41GIUcoZzrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWN1WG81?tag=rvgearlab-20",
    "description": "The Anodized Hiking Kit is a mini alcohol stove and stable stand made of anodized aluminum and stainless steel. A stainless windproof hearth shelf is listed, and it runs on liquid or solid alcohol.\n\nIt is aimed at minimalist hikers, anglers and coffee brewers who want to skip canisters. The listing gives no weight or boil time, which is a gap next to the Copper Vaporizer Kit.\n\nIt suits casual campers who want a low-cost alcohol stove with a stainless shelf. A slightly cheaper variant of the same kit is also listed.",
    "specs": [
      "Anodized aluminum and stainless",
      "Windproof hearth shelf",
      "Liquid or solid alcohol"
    ],
    "pros": [
      "Takes liquid or solid alcohol",
      "Stainless windproof hearth shelf",
      "Lower price than the copper kit",
      "Pocket-sized for packs"
    ],
    "cons": [
      "No weight is stated",
      "No boil time is stated"
    ],
    "bestFor": "Casual coffee and tea breaks",
    "take": "A basic, low-cost kit for easy camp coffee.",
    "catch": "The listing does not give a weight or boil time."
  }
];

export const howWeEvaluated = [
  {
    "title": "Kit contents",
    "description": "We checked what each listing says is in the box."
  },
  {
    "title": "Weight and boil time",
    "description": "We compared stated weights and boil times, and noted gaps."
  },
  {
    "title": "Stand design",
    "description": "We compared windproof stands and shelves."
  },
  {
    "title": "Fuel",
    "description": "We looked at fuels named and whether any is included."
  },
  {
    "title": "Value",
    "description": "We matched price to the details provided."
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
          "Stated boil time matters",
          "Copper Vaporizer Kit",
          "About 7 minutes for 500 ml."
        ],
        [
          "Casual coffee breaks",
          "Anodized Hiking Kit",
          "Simple stove and stable stand."
        ],
        [
          "Backpacking",
          "Copper Vaporizer Kit",
          "3.51 oz weight."
        ],
        [
          "Budget",
          "Anodized Hiking Kit",
          "Lower price."
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
          "$50 to $60",
          "Anodized Hiking Kit"
        ],
        [
          "$90 to $100",
          "Copper Vaporizer Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Copper Vaporizer vs Anodized Stand",
    "cards": [
      {
        "label": "Copper vaporizer",
        "text": "The Copper Vaporizer Kit uses copper tube vaporization and states a boil time."
      },
      {
        "label": "Anodized stand",
        "text": "The Anodized Hiking Kit pairs a stainless hearth shelf with an anodized body at a lower price."
      }
    ],
    "note": "Most buyers should pick the Copper Vaporizer Kit for the stated specs."
  },
  {
    "subheading": "By Fuel",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Denatured alcohol only",
          "Copper Vaporizer Kit"
        ],
        [
          "Liquid or solid alcohol",
          "Anodized Hiking Kit"
        ],
        [
          "Fuel bottle wanted",
          "Copper Vaporizer Kit"
        ],
        [
          "Cheapest",
          "Anodized Hiking Kit"
        ]
      ]
    }
  },
  {
    "subheading": "For Minimalist Hikers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated weight and boil time."
      },
      {
        "label": "In this comparison",
        "text": "The Copper Vaporizer Kit lists 3.51 oz and a 7 minute boil."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Copper Vaporizer Kit for the stated specs."
      },
      {
        "label": "Save if",
        "text": "Save with the Anodized Hiking Kit if you only brew coffee."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What the kit includes",
    "explanation": "Listings may add a bottle, ring and bag or sell the burner alone. A fuller kit saves buying parts. Read the package line."
  },
  {
    "criterion": "Boil time",
    "explanation": "A stated boil time, such as 500 ml in around 7 minutes, lets you compare. Without it, you cannot plan fuel. Look for the volume with the time."
  },
  {
    "criterion": "Stand and wind",
    "explanation": "A stand that blocks wind improves efficiency. Check it supports your pot. Windproof stands are best."
  },
  {
    "criterion": "Fuel type",
    "explanation": "Most kits use denatured alcohol of 95 percent or more. Buy it separately. Read the fuel line."
  },
  {
    "criterion": "Weight",
    "explanation": "Light kits matter on the trail. If no weight is listed, treat it as unknown. Weigh it yourself before a trip."
  }
];

export const faq = [
  {
    "q": "Why only two kits?",
    "a": "Few Amazon listings describe a genuine alcohol stove kit clearly. The rest in the results were canister or propane stoves, which are a different fuel system. We kept the list short rather than pad it."
  },
  {
    "q": "Do kits include fuel?",
    "a": "No. The Copper Vaporizer Kit states that alcohol is not included, and it names denatured alcohol of 95 percent or more. Buy a sealed bottle of fuel separately and carry it in a leak-proof container."
  },
  {
    "q": "Is the Copper Vaporizer Kit worth the higher price?",
    "a": "It is the only one here that states both a weight and a boil time, so you can plan fuel and pack weight. The Anodized Hiking Kit costs less and suits casual coffee stops. Choose by how much trip planning matters to you."
  },
  {
    "q": "How do I light an alcohol stove kit safely?",
    "a": "Set the stove on a flat, stable surface outdoors and pour a small measured amount of alcohol. Light it with a lighter or match and let the flame settle before placing a pot. Put it out by covering the burner, not by blowing on it."
  },
  {
    "q": "How do I store the kit after a trip?",
    "a": "Let it cool fully, pour out any leftover fuel, and wipe soot from the burner and stand. Pack it in its bag so the pieces do not rub against other gear. A dry kit lasts longer."
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
