export const guideSlug = "best-kids-double-sleeping-bags";
export const guideTitle = "2 Best Kids Double Sleeping Bags in 2026";
export const metaTitle = "Best Kids Double Sleeping Bags in 2026";
export const metaDescription = "Two affordable double sleeping bags that suit kids sharing a bed or a parent and child, with honest notes on weight, fill and what listings leave out.";
export const mainKeyword = "best kids double sleeping bags";
export const introParagraphs = [
  "Few double sleeping bags are built or labelled for kids, so most family listings just say adults and kids. Only two distinct products on Amazon fit that wording clearly, and this guide treats them as the starting point for siblings or a parent and child sharing a bag.",
  "Both are budget doubles, and both list sizes or variants that change weight and packed size. The advice below focuses on what matters for children: sleeping together safely, warmth for small bodies and easy handling for a family car camp."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/sleep-tent-sleeping-bag.webp";
export const heroImageAlt = "Camper sitting inside a tent next to an unrolled sleeping bag";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-kids-double-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Double Sleeping Bag for Adults Kids",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+nnIXssCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DK75WMB3?tag=rvgearlab-20",
    "description": "The Underwood Aggregator is a polyester double that the listing says is larger than queen size. It can split into two layers, each usable as a quilt or blanket, and S-shaped stitching helps hold the fill in place.\n\nOne listed size weighs 6.2 lb and compresses to about 12.7 x 14.1 x 6.5 inches, while a lighter listing shows 5.3 lb. Compared with the OBTANIM Double, it lists clearer weight and packed-size numbers and offers the quilt-or-bag flexibility that suits warm nights.\n\nA practical choice for siblings or a parent and child who want one roomy bed at the campsite. The separate layers also work for sleepovers at home.",
    "specs": [
      "Larger than queen size",
      "Splits into two layers",
      "6.2 lb, packs 12.7 x 14.1 in"
    ],
    "pros": [
      "Roomy enough for a parent and child",
      "Splits into two quilt layers",
      "Polyester shell resists dirt and water",
      "Weight and packed size printed"
    ],
    "cons": [
      "Listing prints no temperature rating",
      "Weight varies by listing size"
    ],
    "bestFor": "Siblings or parent and child",
    "take": "A roomy budget double that splits into two layers for flexible use.",
    "catch": "No temperature range is printed, so assume it suits mild or warm weather."
  },
  {
    "id": "best-kids-double-sleeping-bags-2",
    "rank": 2,
    "badge": "Best for Damp Camps",
    "name": "Double Camping Sleeping Bags for Adults Kids Waterproof Lightweight Two Person Sleeping Bag with Pillow for Co",
    "price": "$35.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41K0nMI7pTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FGN6Q973?tag=rvgearlab-20",
    "description": "OBTANIM makes this double from polyester with a double microfiber fill and a soft 100% polyester lining. The listing says a waterproof double-layer design keeps it warm in humid conditions and describes it for four-season use.\n\nIt costs a little less than the Underwood Aggregator Double and adds damp-weather language that the Aggregator does not. A pillow version is sold under a similar listing.\n\nA reasonable pick for families who camp in humid or dewy places on a tight budget. It handles hiking, biking and light camping trips.",
    "specs": [
      "Double microfiber fill",
      "Waterproof double-layer design",
      "100% polyester lining"
    ],
    "pros": [
      "Soft polyester lining",
      "Waterproof double-layer design",
      "Low price for a double",
      "Pillow version available"
    ],
    "cons": [
      "No weight or size printed",
      "Four-season claim has no printed rating"
    ],
    "bestFor": "Budget family camping",
    "take": "A budget double with a waterproof layer and a soft lining.",
    "catch": "The listing claims four-season use without a temperature figure, so check the product page before cold trips."
  }
];

export const howWeEvaluated = [
  {
    "title": "Kid-friendly fit",
    "description": "Each listing was read for whether it names kids, and how large the bag is for two bodies."
  },
  {
    "title": "Weight and pack size",
    "description": "Printed weights and compression sizes were noted for easy family loading."
  },
  {
    "title": "Temperature claims",
    "description": "Listings were checked for printed ratings, with missing ones flagged."
  },
  {
    "title": "Splitting and layers",
    "description": "Bags that split into two layers or singles were compared."
  },
  {
    "title": "Price tier",
    "description": "Both picks sit in the low price band, so cost is not the main variable."
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
    "subheading": "By Family Situation",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Siblings or parent and child in mild weather",
          "Underwood Aggregator Double",
          "Roomy with printed weight and size"
        ],
        [
          "Humid or dewy camps",
          "OBTANIM Double Waterproof",
          "Waterproof double-layer design"
        ],
        [
          "Sleepovers at home",
          "Underwood Aggregator Double",
          "Splits into two quilt layers"
        ],
        [
          "Budget family camping",
          "OBTANIM Double Waterproof",
          "Low price for a double"
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
          "$30 to $40",
          "OBTANIM Double Waterproof"
        ],
        [
          "$30 to $40",
          "Underwood Aggregator Double"
        ]
      ]
    }
  },
  {
    "subheading": "Split Layers vs Waterproof Layer",
    "cards": [
      {
        "label": "Split layers",
        "text": "The Underwood Aggregator Double separates into two layers that act as quilts, so it flexes with temperature."
      },
      {
        "label": "Waterproof layer",
        "text": "The OBTANIM Double Waterproof leans on a double-layer waterproof build for damp conditions."
      }
    ],
    "note": "Most families should start with the Underwood Aggregator Double unless dew and humidity are the main concern."
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
          "OBTANIM Double Waterproof"
        ],
        [
          "A little more for printed specs",
          "Underwood Aggregator Double"
        ]
      ]
    }
  },
  {
    "subheading": "Parents Sharing With a Child Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A width over 60 inches, a printed weight and a way to split the bag."
      },
      {
        "label": "In this comparison",
        "text": "The Underwood Aggregator Double is larger than queen size and splits into two layers, which suits a parent and child sharing."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend a little more on the Underwood Aggregator Double if you want printed weight and packed size."
      },
      {
        "label": "Save if",
        "text": "Save with the OBTANIM Double Waterproof if you want the lowest price and damp-weather features."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Sharing safely with a child",
    "explanation": "A double lets a parent and child share warmth, but a small child can slip toward the edges and chill. Choose a bag wide enough that both sleepers stay fully inside. Check the width and compare it with a standard queen bed at 60 inches."
  },
  {
    "criterion": "Temperature numbers for kids",
    "explanation": "Children lose heat faster than adults, so a bag labelled for adults may feel colder to them. Look for a printed comfort rating and add a warm layer. If the listing prints none, treat the bag as mild-weather only."
  },
  {
    "criterion": "Weight and loading",
    "explanation": "A double bag can weigh 5 to 6 lb, which matters when it shares trunk space with a cooler and a tent. Printed weights vary with the size you choose. Check which size the weight belongs to before comparing."
  },
  {
    "criterion": "Splitting layers",
    "explanation": "A bag that splits into two layers can be a quilt for hot nights or two covers on a bed. This also lets a child use a layer alone at a sleepover. Look for the words separate layers or two bags in the listing."
  },
  {
    "criterion": "Pad and ground cold",
    "explanation": "A thin kids' pad under a double bag leaves cold gaps along the sides. Use a pad wide enough for both sleepers, or two pads side by side. Plan the pad before blaming the bag."
  }
];

export const faq = [
  {
    "q": "Are double bags safe for kids?",
    "a": "A double bag is fine for a child old enough to sleep without smothering risk and with a parent next to them. Keep heads free of the fill and check the bag size. Ask your pediatrician for infants."
  },
  {
    "q": "What do parents get wrong with kids and doubles?",
    "a": "They assume an adults and kids bag is warm enough for a child. These listings print no temperature ratings. Add a layer and a thick pad."
  },
  {
    "q": "Is the Underwood worth the price over the OBTANIM?",
    "a": "The Underwood Aggregator Double prints weight and packed size and splits into layers. The OBTANIM Double Waterproof costs less and leans on its waterproof build. Pick by whether you want numbers or savings."
  },
  {
    "q": "Can I split these into singles?",
    "a": "The Underwood Aggregator Double separates into two layers. The OBTANIM listing does not describe splitting in its bullets. Check the product page first."
  },
  {
    "q": "How do I clean them?",
    "a": "Both are polyester, which sheds dirt, and most can be spot cleaned. Machine wash on gentle only if the care tag allows. Air dry fully before storing."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Sleeping Bags",
    "href": "/sleep-gear/best-backpacking-sleeping-bags"
  },
  {
    "title": "Best Camping Sleeping Bags",
    "href": "/sleep-gear/best-camping-sleeping-bags"
  },
  {
    "title": "Best Backpacking Pillows For Side Sleepers",
    "href": "/sleep-gear/best-backpacking-pillows-for-side-sleepers"
  },
  {
    "title": "Best Backpacking Pillow For Stomach Sleepers",
    "href": "/sleep-gear/best-backpacking-pillow-for-stomach-sleepers"
  }
];
