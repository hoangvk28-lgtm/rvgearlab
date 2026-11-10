export const guideSlug = "best-packable-down-sleeping-bags";
export const guideTitle = "2 Best Packable Down Sleeping Bags in 2026";
export const metaTitle = "Best Packable Down Sleeping Bags in 2026";
export const metaDescription = "Two packable QEZER down sleeping bags compared on weight, pack size and printed comfort ratings, for hikers who count ounces and cubic inches.";
export const mainKeyword = "best packable down sleeping bags";
export const introParagraphs = [
  "Packable down means two things: low weight and a small stuff size. On Amazon, the clearest down bags that print both numbers are a pair of QEZER semi-rectangular models, and this guide compares them side by side.",
  "Few other down listings give real weight and packed dimensions, so the list is short on purpose. Choose between a warmer 2.16 lb version and a lighter 1.59 lb version, and decide how much cold you actually expect."
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
    "id": "best-packable-down-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Packability",
    "name": "QEZER Down Sleeping Bag for Adults",
    "price": "$75.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412Jb6Jo9iL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D6YC7YPM?tag=rvgearlab-amz-20",
    "description": "This QEZER model weighs 1.59 lb and stuffs down to a 9.84 by 5.51 inch bundle, using 600 fill power duck down in a semi-rectangular 85.04 x 31.5 inch body. The listing prints a comfort range of 45 to 61F and a limit of 36F.\n\nIt is the smaller and lighter of the pair, trimming about half a pound and a few inches of pack size from the QEZER 2.16 lb model. Double zippers, chest insulation and a foot zipper for venting match the heavier bag.\n\nGreat for summer and early fall hikers who value the smallest pack and the lowest price. Two bags in matching colors can combine into a double.",
    "specs": [
      "1.59 lb, packs 9.84 x 5.51 in",
      "600FP duck down, 45 to 61F comfort",
      "85.04 x 31.5 inch body"
    ],
    "pros": [
      "Lightest and smallest of the pair",
      "Lowest price",
      "Foot zipper for venting",
      "Pairs with a second bag"
    ],
    "cons": [
      "Comfort range starts at 45F",
      "Limit of 36F is mild"
    ],
    "bestFor": "Summer and early-fall hikers",
    "take": "The smallest, lightest packable down bag with printed ratings.",
    "catch": "A 45F comfort low end keeps it to warm-season trips."
  },
  {
    "id": "best-packable-down-sleeping-bags-2",
    "rank": 2,
    "badge": "Best for Cooler Nights",
    "name": "QEZER Down Sleeping Bag for Adults",
    "price": "$85.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Kdo1-9pCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CYP4Y9C5?tag=rvgearlab-amz-20",
    "description": "QEZER lists this bag at 2.16 lb with a packed size of 13.39 x 6.69 inches and the same 600 fill power duck down. Its comfort range is 41 to 54F with a 30F limit, in an 85.04 x 31.5 inch semi-rectangular body.\n\nIt adds about half a pound and a bigger stuff size over the Ultralight 1.59 lb model, and buys four degrees on the comfort low end and six on the limit. A foot zipper and chest insulation carry over from the lighter bag.\n\nGood for hikers who camp into fall and want the extra margin without jumping to a heavy winter bag. It remains compact for a down bag with this much fill.",
    "specs": [
      "2.16 lb, packs 13.39 x 6.69 in",
      "600FP duck down, 41 to 54F",
      "Limit of 30F"
    ],
    "pros": [
      "Comfort starts at 41F",
      "Limit of 30F",
      "Still light at 2.16 lb",
      "Double zippers and chest insulation"
    ],
    "cons": [
      "Larger and heavier than the lighter model",
      "Costs more than the 1.59 lb bag"
    ],
    "bestFor": "Fall hikers",
    "take": "A slightly warmer packable down bag that still stays under 2.2 lb.",
    "catch": "It gives up some pack size and a few dollars for the extra margin."
  }
];

export const howWeEvaluated = [
  {
    "title": "Printed weight",
    "description": "Both listings print weights, so the comparison is plain: 1.59 lb versus 2.16 lb."
  },
  {
    "title": "Pack dimensions",
    "description": "Compressed sizes were compared in inches."
  },
  {
    "title": "Temperature figures",
    "description": "Comfort ranges and limits were compared, since packable bags are often bought for specific seasons."
  },
  {
    "title": "Down type",
    "description": "Both name 600 fill power duck down, so the comparison focuses on amount and shell."
  },
  {
    "title": "Price tier",
    "description": "The lighter bag costs less, so the extra money buys warmth, not weight."
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
    "subheading": "By Season",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Summer and warm nights",
          "QEZER Ultralight 1.59 lb",
          "45 to 61F comfort, smallest pack"
        ],
        [
          "Cool fall nights",
          "QEZER 2.16 lb Down",
          "41 to 54F comfort, 30F limit"
        ],
        [
          "Tight pack space",
          "QEZER Ultralight 1.59 lb",
          "9.84 x 5.51 inch packed size"
        ],
        [
          "Extra margin for shoulder seasons",
          "QEZER 2.16 lb Down",
          "Lower limit by six degrees"
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
          "$70 to $80",
          "QEZER Ultralight 1.59 lb"
        ],
        [
          "$80 to $90",
          "QEZER 2.16 lb Down"
        ]
      ]
    }
  },
  {
    "subheading": "Lighter vs Warmer",
    "cards": [
      {
        "label": "Lighter",
        "text": "The QEZER Ultralight 1.59 lb saves about half a pound and several inches of pack size."
      },
      {
        "label": "Warmer",
        "text": "The QEZER 2.16 lb Down adds margin on cool nights, with a 30F limit."
      }
    ],
    "note": "Choose the QEZER Ultralight 1.59 lb for summer weight savings, and the QEZER 2.16 lb Down if your trips push into frost."
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
          "QEZER Ultralight 1.59 lb"
        ],
        [
          "A little more for warmth",
          "QEZER 2.16 lb Down"
        ]
      ]
    }
  },
  {
    "subheading": "Ultralight Hikers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed weight under 2.5 lb, a stated packed size and a comfort range that matches your lows."
      },
      {
        "label": "In this comparison",
        "text": "The QEZER Ultralight 1.59 lb prints 1.59 lb and 9.84 x 5.51 inches, and the QEZER 2.16 lb Down prints 2.16 lb and 13.39 x 6.69 inches."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend a little more on the QEZER 2.16 lb Down if you want a 30F limit and extra margin on cool nights."
      },
      {
        "label": "Save if",
        "text": "Save with the QEZER Ultralight 1.59 lb if your trips stay above 45F."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Weight in the real world",
    "explanation": "Under 2 lb is ultralight territory for a down bag, and 2.16 lb is still light but gets noticed on a long trek. Half a pound is the weight of a full camp stove canister. Check both bag and stuff-sack weight on the listing."
  },
  {
    "criterion": "Packed size matters more than weight",
    "explanation": "A bag that packs to 9.84 x 5.51 inches fits in a small pack side pocket, while 13.39 x 6.69 inches needs a main compartment slot. Pack space often limits ultralight trips more than weight does. Look for compressed dimensions, not unrolled ones."
  },
  {
    "criterion": "Comfort versus limit",
    "explanation": "A comfort range of 45 to 61F means most sleepers stay warm in that span, while a limit of 36F is a lower safety bound. Treat the limit as survival, not comfort. Check which number the listing calls comfort."
  },
  {
    "criterion": "Fill power and quantity",
    "explanation": "Both use 600 fill power duck down, which is good but not elite. A higher fill power would pack smaller, so check that you are not paying for a premium label. Compare fill power against price when shopping."
  },
  {
    "criterion": "Shell and zippers",
    "explanation": "A 400T nylon shell with high-density stitching helps keep down inside. Double zippers keep cold air from sneaking in at night. Check for shell fabric and zipper layout, and inspect for leaks after the first night."
  }
];

export const faq = [
  {
    "q": "What makes a down bag packable?",
    "a": "Low weight, high fill power and a small stuffed size. Both QEZER bags use 600 fill power duck down and print their packed dimensions. Check the dimensions before you buy."
  },
  {
    "q": "What do hikers get wrong about packable bags?",
    "a": "They focus on weight and ignore comfort range. A 1.59 lb bag is not helpful if you shiver at 40F. Match the range to your lows."
  },
  {
    "q": "Is the 2.16 lb QEZER worth the extra weight?",
    "a": "If your nights drop to 35 to 45F, yes. The six-degree lower limit and four-degree lower comfort figure give real margin. For summer trips, the lighter bag does the job."
  },
  {
    "q": "Can these combine?",
    "a": "Both listings mention combining two bags in matching colors. You need one left and one right zipper. Check the zipper side when you order."
  },
  {
    "q": "How do I keep it packable over time?",
    "a": "Store it loose, not stuffed. Compression for months flattens down and reduces loft. Use the stuff sack only on trail days."
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
