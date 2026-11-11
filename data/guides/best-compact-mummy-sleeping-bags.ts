export const guideSlug = "best-compact-mummy-sleeping-bags";
export const guideTitle = "2 Best Compact Mummy Sleeping Bags in 2026";
export const metaTitle = "Best Compact Mummy Sleeping Bags in 2026";
export const metaDescription = "Two compact hooded bags: the Nature Link mummy at 2.87 lb and the wearable Sportneer at 4.4 lb, with packed sizes and ranges for small-space campers.";
export const mainKeyword = "best compact mummy sleeping bags";
export const introParagraphs = [
  "Compact mummy bags usually sit in the ultralight tier, and few budget listings name both the shape and a packed size. This guide has two picks: the Nature Link, a true mummy at 2.87 lb with a printed 42 to 55F range, and the Sportneer, a hooded wearable bag with a printed pack size.",
  "The Sportneer's listing does not use the word mummy, so it is the nearest fit rather than a perfect one. The guide says plainly where each bag helps and where it falls short."
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
    "id": "best-compact-mummy-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Nature Link Lightweight Mummy Sleeping Bag 2.87lbs",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/319F9kyHxgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D12GY1RL?tag=rvgearlab-amz-20",
    "description": "Nature Link sells a mummy bag filled with 300 g per square meter of imitation silk cotton, with a stated comfort range of 42 to 55F. The shell and lining are 20D nylon, the shell is ripstop and water-repellent, and the bag weighs 2.87 lb.\n\nIt is the lighter of the two by far and the only one that names the mummy shape. The 86.6 x 29.5 inch cut fits regular to tall sleepers, and an extra-insulated foot box keeps toes warm.\n\nA strong match for backpackers who want a compact mummy at a low price. It is fully machine washable.",
    "specs": [
      "2.87 lb, 20D ripstop nylon",
      "42 to 55F comfort range",
      "86.6 x 29.5 in cut"
    ],
    "pros": [
      "Weight and range both printed",
      "Insulated foot box",
      "Machine washable",
      "Fits regular to tall sleepers"
    ],
    "cons": [
      "Range starts at 42F",
      "Imitation silk cotton fill, not down"
    ],
    "bestFor": "Budget backpackers",
    "take": "A true mummy with a printed weight, range and insulated foot box.",
    "catch": "The 42F low end suits spring through early fall only."
  },
  {
    "id": "best-compact-mummy-sleeping-bags-2",
    "rank": 2,
    "badge": "Best for Moving Around",
    "name": "Sportneer Wearable Sleeping Bag for Adults & Kids",
    "price": "$35.09",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ulkFGKoHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BJ2HRCSG?tag=rvgearlab-amz-20",
    "description": "Sportneer sells a wearable hooded bag with arm zippers, rated for 32 to 65F, with hollow fiber insulation. The listing gives a 4.4 lb weight and a compressed size of 15.7 x 9.5 inches, with a compression sack included.\n\nAgainst the Nature Link, it covers a colder low end of 32F and lets you use your hands without leaving the bag. A snap-secured zipper and an adjustable drawcord hood keep heat in.\n\nA fit for stadium seats, car camps and cold mornings when you need to move. It is machine washable.",
    "specs": [
      "Wearable, arm zippers",
      "32 to 65F, hollow fiber",
      "Packs 15.7 x 9.5 inches"
    ],
    "pros": [
      "Arm zippers free your hands",
      "Weight and pack size printed",
      "Colder end of range, 32F",
      "Adjustable hood, snap zipper"
    ],
    "cons": [
      "4.4 lb is heavy for hiking",
      "Mummy shape is not named"
    ],
    "bestFor": "Car campers and spectators",
    "take": "A wearable 32 to 65F bag with arm zippers and a printed pack size.",
    "catch": "At 4.4 lb it is heavy for hiking, so it suits car camps better."
  }
];

export const howWeEvaluated = [
  {
    "title": "Shape",
    "description": "We checked which listing names a mummy shape and which only mentions a hood."
  },
  {
    "title": "Weight and pack",
    "description": "We compared printed weights and packed sizes."
  },
  {
    "title": "Range",
    "description": "We compared stated ranges."
  },
  {
    "title": "Fill",
    "description": "We read the named fills."
  },
  {
    "title": "Use",
    "description": "We noted car camping versus trail use."
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
          "Backpacking on a budget",
          "Nature Link Mummy 2.87 lb",
          "2.87 lb true mummy"
        ],
        [
          "Stadium or camp chores",
          "Sportneer Wearable",
          "Arm zippers"
        ],
        [
          "Cooler nights near 32F",
          "Sportneer Wearable",
          "Range starts at 32F"
        ],
        [
          "Tall sleepers",
          "Nature Link Mummy 2.87 lb",
          "86.6 inches long"
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
          "Nature Link Mummy 2.87 lb"
        ],
        [
          "$30 to $40",
          "Sportneer Wearable"
        ]
      ]
    }
  },
  {
    "subheading": "True Mummy vs Wearable",
    "cards": [
      {
        "label": "True mummy",
        "text": "The Nature Link Mummy 2.87 lb is light and tapered for the trail."
      },
      {
        "label": "Wearable",
        "text": "The Sportneer Wearable is heavier but moves with you at camp."
      }
    ],
    "note": "Choose the Nature Link Mummy 2.87 lb for hiking and the Sportneer Wearable for car camping."
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
          "Under 30 dollars",
          "Nature Link Mummy 2.87 lb"
        ],
        [
          "Around 35 dollars",
          "Sportneer Wearable"
        ]
      ]
    }
  },
  {
    "subheading": "Small-Space Storage Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed packed size and a compression sack."
      },
      {
        "label": "In this comparison",
        "text": "The Sportneer Wearable prints 15.7 x 9.5 inches with a sack, and the Nature Link Mummy 2.87 lb prints a weight and a roomy 86.6 inch cut."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Sportneer Wearable if you need a 32F low end and hands-free use."
      },
      {
        "label": "Save if",
        "text": "Save with the Nature Link Mummy 2.87 lb, the cheaper and lighter bag."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Why mummy bags pack small",
    "explanation": "A mummy bag tapers to save fabric and fill. That makes it lighter and smaller than a rectangular bag. Check that the listing names the shape."
  },
  {
    "criterion": "Imitation silk cotton fill",
    "explanation": "This fill is a synthetic insulation, not down. It dries faster and costs less. Check that the listing names the fill and its weight."
  },
  {
    "criterion": "Comfort range",
    "explanation": "A range such as 42 to 55F tells you the nights it suits. The low end is the cold limit. Plan for lows above it."
  },
  {
    "criterion": "Wearable versus sleeping",
    "explanation": "A wearable bag lets you move but adds weight and bulk. Use it at camp, not on a long trail. Check the printed weight."
  },
  {
    "criterion": "Foot box",
    "explanation": "A well-insulated foot box protects cold toes. Without insulation there, toes chill first on a cool night. Look for it by name on the listing."
  }
];

export const faq = [
  {
    "q": "Are these true compact mummies?",
    "a": "The Nature Link Mummy 2.87 lb is. The Sportneer Wearable is hooded but the listing does not name a mummy shape. Treat it as a nearest fit."
  },
  {
    "q": "What mistake do buyers make with budget mummies?",
    "a": "They ignore the low end of the range. A 42F floor is cool for fall. Check forecast lows."
  },
  {
    "q": "Is the Nature Link worth over the Sportneer?",
    "a": "For hiking, yes, because it weighs less. For camp use, the Sportneer Wearable has arm zippers. Pick by the trip."
  },
  {
    "q": "How do I pack a mummy bag?",
    "a": "Stuff it from the foot end into the sack. Tighten the straps. Do not leave it compressed."
  },
  {
    "q": "How do I wash these bags?",
    "a": "Both are listed as machine washable. Use gentle cold and dry on low. Air dry fully."
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
