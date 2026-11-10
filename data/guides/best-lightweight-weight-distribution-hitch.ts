export const guideSlug = "best-lightweight-weight-distribution-hitch";
export const guideTitle = "2 Best Lightweight Weight Distribution Hitch in 2026";
export const metaTitle = "Best Lightweight Weight Distribution Hitch";
export const metaDescription = "A two-hitch shortlist for buyers who want a lighter weight distribution setup: Andersen's chain hitch and Husky's trunnion hitch, with what each listing states.";
export const mainKeyword = "best lightweight weight distribution hitch";
export const introParagraphs = [
  "Neither listing here states the hitch's weight, so no pick can be called lightweight on its own numbers. What the listings do say is how each is built: Andersen uses tension chains instead of spring bars and Husky uses trunnion bars with a cast head.",
  "This is a shortlist of two, written honestly. Compare the stated ratings with your trailer's loaded tongue weight, and ask the seller for the shipping weight if weight is the deciding factor."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31H44nTokeL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-lightweight-weight-distribution-hitch-1",
    "rank": 1,
    "badge": "Chain Design",
    "name": "ANDERSEN HITCHES",
    "price": "$789.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31H44nTokeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B009V70ZP8?tag=rvgearlab-20",
    "description": "Andersen's weight distribution hitch uses a friction cone and tension chains instead of spring bars and is rated 10,000 lb GTWR and 1,400 lb tongue weight. Andersen's weight distribution hitch uses a friction cone and tension chain design in place of spring bars and is listed at 10,000 lb GTWR and 1,400 lb tongue weight with a 4-inch drop and 2-inch ball. The listing says the system requires no grease.\n\nIt states more tongue weight than Husky 33301 and a grease-free design, but costs more. Its listing gives no weight.\n\nBest for an owner who wants a chain system and can accept the premium. It suits owners who want a lighter chain-style system and can accept the premium price.",
    "specs": [
      "10K GTWR, 1,400 lb TW",
      "4 inch drop or rise, 2 inch ball",
      "Grease-free chain system"
    ],
    "pros": [
      "Friction cone and tension chain design needs no grease",
      "Chains attach and adjust faster than spring bars",
      "Stated 4 inch drop or rise"
    ],
    "cons": [
      "Premium price",
      "Fixed 4 inch drop or rise"
    ],
    "bestFor": "Chain system"
  },
  {
    "id": "best-lightweight-weight-distribution-hitch-2",
    "rank": 2,
    "badge": "Trunnion Design",
    "name": "Husky Towing Weight Distribution Hitch 33301",
    "price": "$527.58",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31U+J5WC1yL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FRS8PDZ9?tag=rvgearlab-20",
    "description": "Husky's 33301 is a trunnion hitch rated 8,000 lb GTW and 400 to 800 lb tongue weight with a cast head and hardened trunnions. Husky's 33301 is a trunnion bar weight distribution hitch rated 400 to 800 lb tongue weight and 8,000 lb gross trailer weight, with a 2 inch shank and factory-installed ball. It combines weight distribution and sway control in one unit.\n\nIt states a lower rating than Andersen 10K 2in and costs less. Its listing gives no weight.\n\nBest for a trailer under 8,000 lb that wants built-in sway control. It is a good match for trailers with a tongue weight in the middle of its range, so check the frame width limit in the listing.",
    "specs": [
      "8,000 lb GTW, 400 to 800 lb TW",
      "Trunnion bar with sway control",
      "Factory pre-installed ball"
    ],
    "pros": [
      "Combines weight distribution and sway control",
      "Cast head with hardened trunnions",
      "Hitch ball pre-installed and torqued",
      "Stated 400 to 800 lb tongue weight range"
    ],
    "cons": [
      "Listing mentions specific trailer frame limits",
      "Priced above basic kits"
    ],
    "bestFor": "Trunnion with sway"
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight claims",
    "description": "Neither listing states a hitch weight, so none is claimed."
  },
  {
    "title": "Stated ratings",
    "description": "Gross trailer weight and tongue weight figures were compared."
  },
  {
    "title": "Build",
    "description": "Chain and trunnion designs were described as listed."
  },
  {
    "title": "Sway features",
    "description": "Built-in sway control was noted where listed."
  },
  {
    "title": "Price",
    "description": "The premium for the chain design was noted."
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
    "subheading": "By Tongue Weight",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "400 to 800 lb",
          "Husky 33301",
          "States 400 to 800 lb."
        ],
        [
          "Up to 1,400 lb",
          "Andersen 10K 2in",
          "1,400 lb tongue weight."
        ],
        [
          "Trailer up to 8,000 lb",
          "Husky 33301",
          "8,000 lb."
        ],
        [
          "Trailer up to 10,000 lb",
          "Andersen 10K 2in",
          "10,000 lb GTWR."
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
          "$520 to $530",
          "Husky 33301"
        ],
        [
          "$780 to $790",
          "Andersen 10K 2in"
        ]
      ]
    }
  },
  {
    "subheading": "Chain vs Trunnion Bar",
    "cards": [
      {
        "label": "Chain",
        "text": "Chains attach quickly and need no grease. Andersen 10K 2in is the example."
      },
      {
        "label": "Trunnion bar",
        "text": "Trunnion bars slide in from the side. Husky 33301 is the example."
      }
    ],
    "note": "Choose Husky 33301 for a lighter trailer and Andersen 10K 2in for a chain system."
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
          "About $525",
          "Husky 33301"
        ],
        [
          "About $790",
          "Andersen 10K 2in"
        ],
        [
          "Premium chain",
          "Andersen 10K 2in"
        ],
        [
          "Mid-price trunnion",
          "Husky 33301"
        ]
      ]
    }
  },
  {
    "subheading": "For Hand Handling Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for the shipping weight, which neither listing states."
      },
      {
        "label": "In this comparison",
        "text": "Neither Husky 33301 nor Andersen 10K 2in states it."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more for a chain system, where Andersen 10K 2in leads."
      },
      {
        "label": "Save if",
        "text": "Save with Husky 33301."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "No weight stated",
    "explanation": "Neither Andersen 10K 2in nor Husky 33301 lists the weight of the hitch. A lightweight claim cannot be checked. Ask the seller for the shipping weight."
  },
  {
    "criterion": "Chain versus bars",
    "explanation": "Andersen uses tension chains in place of spring bars, which the listing says attach and adjust faster. Husky uses trunnion spring bars. The weight difference is not stated, so do not assume."
  },
  {
    "criterion": "Rating match",
    "explanation": "Andersen 10K 2in states 10,000 lb and 1,400 lb tongue weight, and Husky 33301 states 8,000 lb and 400 to 800 lb. Match the loaded trailer. A lower rating suits a lighter trailer."
  },
  {
    "criterion": "Sway control",
    "explanation": "Husky 33301 combines weight distribution and sway control, while Andersen's listing mentions a friction cone and chains. Each handles sway differently. Read the manual."
  },
  {
    "criterion": "Maintenance",
    "explanation": "Andersen's listing says no grease is needed. Husky's trunnions are hardened. Check each maker's care advice."
  }
];

export const faq = [
  {
    "q": "Is either of these hitches lightweight?",
    "a": "Neither listing states a weight. Ask the seller for the shipping weight."
  },
  {
    "q": "Is a chain hitch lighter than spring bars?",
    "a": "Andersen's listing does not say. Chains and spring bars differ, but the weight is not stated."
  },
  {
    "q": "Is Andersen worth the premium?",
    "a": "It states 1,400 lb tongue weight and a grease-free design. Husky 33301 costs far less."
  },
  {
    "q": "How do I set up either hitch?",
    "a": "Level the trailer and tension the bars or chains until the front axle recovers about half the height lost. Recheck loaded."
  },
  {
    "q": "Which suits a smaller trailer?",
    "a": "Husky 33301 states 8,000 lb and 400 to 800 lb. It suits lighter loads."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Weight Distribution Hitch",
    "href": "/towing-leveling/best-weight-distribution-hitch"
  },
  {
    "title": "Best Weight Distribution Hitch For Travel Trailer",
    "href": "/towing-leveling/best-weight-distribution-hitch-for-travel-trailer"
  },
  {
    "title": "Best Weight Distribution Hitch With Sway Control",
    "href": "/towing-leveling/best-weight-distribution-hitch-with-sway-control"
  },
  {
    "title": "Best Weight Distribution Hitch With Integrated Sway Control",
    "href": "/towing-leveling/best-weight-distribution-hitch-with-integrated-sway-control"
  }
];
