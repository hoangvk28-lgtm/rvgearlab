export const guideSlug = "best-xl-mummy-sleeping-bags";
export const guideTitle = "2 Best Xl Mummy Sleeping Bags in 2026";
export const metaTitle = "Best Xl Mummy Sleeping Bags in 2026";
export const metaDescription = "Two extra-long cold-weather mummy sleeping bags, the ALPS Mountaineering Blaze 0 XL and the TETON Celsius XL 0F, for tall campers who want a mummy's warmth.";
export const mainKeyword = "best xl mummy sleeping bags";
export const introParagraphs = [
  "Extra-long mummy bags are rare, because the taper that makes a mummy warm also makes it hard to scale up. Two product lines on Amazon do it clearly: the ALPS Mountaineering Blaze in 86 x 36 inches and the TETON Celsius in XL and XXL cuts.",
  "Both are 0F-class synthetic bags aimed at cold-weather camping. The TETON line comes in several sizes and ratings, so this guide treats it as one pick and points to the variants in the FAQ."
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
    "id": "best-xl-mummy-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ALPS Mountaineering Blaze 0° XL Sleeping Bag",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31f3WKJuk9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FG4P1Q7D?tag=rvgearlab-amz-20",
    "description": "The ALPS Mountaineering Blaze 0 XL measures 86 x 36 inches and weighs 6 lb 7 oz, with 76 oz of TechLoft Silver synthetic insulation in a two-layer offset design. A polyester ripstop shell, a contoured hood, an insulated chest baffle and #8 separating zippers complete the build.\n\nThe offset layers are designed to eliminate cold spots, and the printed fill weight and stuffed size of 20 x 13 inches give it more detail than the TETON Celsius XL 0F. A standard stuff sack is included.\n\nA great fit for tall winter campers who want a mummy shape and a documented fill weight. It suits car camping and short carries.",
    "specs": [
      "86 x 36 inch XL mummy",
      "76 oz TechLoft Silver fill",
      "6 lb 7 oz, stuffs 20 x 13 in"
    ],
    "pros": [
      "Weight, fill weight and stuffed size printed",
      "Offset layers reduce cold spots",
      "Insulated chest baffle and hood",
      "Smooth #8 separating zippers"
    ],
    "cons": [
      "6 lb 7 oz is a heavy carry",
      "No comfort or limit rating printed"
    ],
    "bestFor": "Tall winter campers",
    "take": "An XL mummy with a printed fill weight and offset layers to limit cold spots.",
    "catch": "At 6 lb 7 oz it suits car camping and short hauls, not long hikes."
  },
  {
    "id": "best-xl-mummy-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Budget XL",
    "name": "Teton Celsius XL 0F Sleeping Bag; Great for Family Camping; Free Stuff Sack",
    "price": "$106.33",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31FDTatuWJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B006J7ZMTM?tag=rvgearlab-amz-20",
    "description": "TETON offers the Celsius XL at 90 x 36 inches with a 0F class label, a flannel-style polyester interior and a rounded mummy hood. Double-layer fiber fill and draft tubes work together, and it unzips at the top or bottom for venting.\n\nIt is longer than the ALPS Blaze 0 XL by four inches and costs less, and it comes in left-zip and right-zip versions that can be paired for a double. The listing prints no fill weight or total weight.\n\nA reasonable pick for tall campers who want a long mummy at a lower price. Hang loops preserve loft in storage.",
    "specs": [
      "90 x 36 inch XL mummy",
      "0F class, double-layer fill",
      "Left or right zip options"
    ],
    "pros": [
      "Longer 90 inch cut",
      "Lower price than the ALPS",
      "Left and right zip versions mate",
      "Hang loops preserve loft"
    ],
    "cons": [
      "No weight or fill weight printed",
      "0F is a class label, not a comfort figure"
    ],
    "bestFor": "Tall campers on a budget",
    "take": "A 90 inch cold-class mummy that costs less than the ALPS Blaze.",
    "catch": "The listing prints no weight, so treat it as a car-camping bag."
  }
];

export const howWeEvaluated = [
  {
    "title": "Length and width",
    "description": "Each listing's printed length and width were compared, since XL means room."
  },
  {
    "title": "Fill details",
    "description": "Named fills, fill weights and layer designs were noted where given."
  },
  {
    "title": "Ratings",
    "description": "Cold labels were compared, with a note on those that are only a class label."
  },
  {
    "title": "Weight and pack",
    "description": "Printed weights and stuffed sizes were compared."
  },
  {
    "title": "Honest scope",
    "description": "Only two distinct XL mummy lines were found, so the list is short."
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
    "subheading": "By Tall-Camper Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Printed fill and weight",
          "ALPS Blaze 0 XL",
          "76 oz fill, 6 lb 7 oz"
        ],
        [
          "Longest cut at a lower price",
          "TETON Celsius XL 0F",
          "90 inches long"
        ],
        [
          "Couples pairing two bags",
          "TETON Celsius XL 0F",
          "Left and right zip options"
        ],
        [
          "Reducing cold spots",
          "ALPS Blaze 0 XL",
          "Two-layer offset design"
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
          "$100 to $110",
          "TETON Celsius XL 0F"
        ],
        [
          "$140 to $150",
          "ALPS Blaze 0 XL"
        ]
      ]
    }
  },
  {
    "subheading": "Offset Layers vs Double-Layer Fiber",
    "cards": [
      {
        "label": "Offset layers",
        "text": "The ALPS Blaze 0 XL uses two offset layers of TechLoft Silver to cover seams."
      },
      {
        "label": "Double-layer fiber",
        "text": "The TETON Celsius XL 0F uses double-layer fiber with draft tubes."
      }
    ],
    "note": "Choose the ALPS Blaze 0 XL for documented fill and the TETON Celsius XL 0F for price and length."
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
          "Lower cost, longest",
          "TETON Celsius XL 0F"
        ],
        [
          "Higher cost, printed fill",
          "ALPS Blaze 0 XL"
        ]
      ]
    }
  },
  {
    "subheading": "Tall Mummy Shoppers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed length near 90 inches, a named fill and a hood with draft control."
      },
      {
        "label": "In this comparison",
        "text": "The TETON Celsius XL 0F prints 90 x 36 inches and the ALPS Blaze 0 XL prints 86 x 36 inches with a chest baffle."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ALPS Blaze 0 XL for printed fill weight and offset layers."
      },
      {
        "label": "Save if",
        "text": "Save with the TETON Celsius XL 0F, which costs less and is four inches longer."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Length versus taper",
    "explanation": "A longer mummy needs more taper to stay warm, so a 90 inch bag is not simply a bigger 80 inch one. Check both length and width, and look for a hood and draft tubes. Compare the printed numbers."
  },
  {
    "criterion": "Offset versus single-layer fill",
    "explanation": "Single-layer insulation has seams where cold passes through. Two offset layers cover those seams. Look for the words offset or double-layer on the listing."
  },
  {
    "criterion": "Fill weight",
    "explanation": "The ounces of insulation inside tell you more than the label does. A bag with 76 oz of fill carries real loft. Look for fill weight, and treat a missing figure as a gap."
  },
  {
    "criterion": "Left or right zip",
    "explanation": "A left-zip and a right-zip bag can pair into a double, while two of the same side cannot. If you plan to share, check which side you need. Look for the zip side in the listing."
  },
  {
    "criterion": "Pad and ground cold",
    "explanation": "The ground steals heat through the bag bottom. A long bag needs a long pad. Plan an R 4 or higher pad for 0F-class bags."
  }
];

export const faq = [
  {
    "q": "Is the Blaze warmer than the Celsius?",
    "a": "Both are 0F-class labels. The ALPS Blaze 0 XL prints 76 oz of fill, while the TETON Celsius XL 0F prints none. Compare fill if you can."
  },
  {
    "q": "What do tall campers get wrong with mummy bags?",
    "a": "They buy by length and ignore width. An 86 inch mummy that is too narrow compresses the fill. Check both."
  },
  {
    "q": "Is there a milder TETON version?",
    "a": "Yes. The Celsius line also has a +20F XL version and an XXL 0 degree version. Pick by your lows and your size."
  },
  {
    "q": "Can two bags join?",
    "a": "TETON sells left-zip and right-zip Celsius XL bags that mate together. The ALPS listing does not mention joining. Check zip side."
  },
  {
    "q": "How do I store them?",
    "a": "Keep them loose in a large sack. Do not compress for months. Air them after damp trips."
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
