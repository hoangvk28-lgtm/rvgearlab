export const guideSlug = "best-down-sleeping-bags";
export const guideTitle = "5 Best Down Sleeping Bags in 2026";
export const metaTitle = "Best Down Sleeping Bags in 2026";
export const metaDescription = "Best down sleeping bags compared on fill power, down weight, packed size and printed temperature ranges for backpacking and camping.";
export const mainKeyword = "best down sleeping bags";
export const introParagraphs = [
  "Down gives more warmth per ounce than any other fill, and the five lines here span from a 0.94 lb ultralight to a 550 fill power staple with ISO ratings. The right one depends on whether you value the lightest carry or the clearest temperature data.",
  "Variants of each line were merged, and the ranking weighs fill power, down weight, listed weight, packed size and printed ratings. Where a listing prints no rating, that is flagged."
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
    "id": "best-down-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "SYWSKW Large Down Sleeping Bag with Pillow for Backpacking",
    "price": "$99.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31d97oh-wkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJ2TQKR7?tag=rvgearlab-amz-20",
    "description": "The SYWSKW is a 680 fill power RDS-certified duck down bag, 86.6 by 33.5 inches with widened shoulders, a YKK zipper, reflective drawcords and an 80 g detachable pillow. It compresses to 7.08 by 11.8 inches and comes in 1.1 lb, 1.76 lb and 2.65 lb fill models.\n\nIt combines high fill power, a wide cut and three warmth tiers at a price below the Naturehike Snowbird and Kelty. The pillow is built into the system.\n\nIt suits backpackers and couples who want a flexible down bag in one line. The 1.1 lb model is for three to four seasons and the heavier ones for colder trips.",
    "specs": [
      "680FP RDS duck down",
      "86.6 x 33.5 in, pillow",
      "1.1, 1.76 or 2.65 lb fill"
    ],
    "pros": [
      "680 fill power down",
      "Wide 33.5 inch shoulders",
      "Three fill tiers",
      "Detachable 80 g pillow"
    ],
    "cons": [
      "No ISO rating printed",
      "Weight depends on the tier"
    ],
    "bestFor": "Flexible backpacking and couples",
    "take": "A high-fill, wide-cut down bag with a pillow and three warmth tiers.",
    "catch": "The listing prints no temperature figure, so choose a tier by your coldest night."
  },
  {
    "id": "best-down-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Ultralight",
    "name": "Naturehike Ultralight Backpacking Down Sleeping Bag for Adults",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31MBnHUaB6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVY2Q33Z?tag=rvgearlab-amz-20",
    "description": "The Naturehike CW-EXT uses RDS-certified goose down in a 10D PFAS-free nylon shell. The L size weighs 1.09 lb and the M size 0.94 lb, and it unfolds into a down blanket or layers inside a larger bag.\n\nIt is by far the lightest bag here and a different kind of product from the SYWSKW. It prints no temperature rating and is priced above it.\n\nIt suits ultralight hikers who want a summer-to-shoulder-season layer. Plan on warm clothing for cool nights.",
    "specs": [
      "0.94 lb M, 1.09 lb L",
      "RDS goose down",
      "10D PFAS-free nylon shell"
    ],
    "pros": [
      "Lightest bag in the list",
      "Real goose down compresses small",
      "Unfolds into a down blanket",
      "Layers inside a larger bag"
    ],
    "cons": [
      "No temperature rating printed",
      "10D shell needs gentle handling"
    ],
    "bestFor": "Ultralight and layering",
    "take": "The lightest down bag here, built as a flexible layer.",
    "catch": "With no printed rating, treat it as a warm-weather or layering piece."
  },
  {
    "id": "best-down-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Wind Barrier",
    "name": "Naturehike 0 Degree RDS Down Mummy Sleeping Bag for Adults",
    "price": "$139.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31cIas4OpyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FHWMD68K?tag=rvgearlab-amz-20",
    "description": "The Naturehike Snowbird comes in SP400, SP700 and SP1000 models using RDS and IDS certified 650 fill power down, with a three-dimensional wind barrier along the zipper and a YKK two-way zipper. The quoted model carries an ISO comfort figure of 29 degrees F with an 18 degree F limit.\n\nIt targets cold spots at the zipper better than the QEZER or SYWSKW and offers three warmth models. It costs more than both.\n\nIt suits cold sleepers who want ISO-style figures and a draft barrier. The SP1000 is the coldest option.",
    "specs": [
      "650FP RDS and IDS down",
      "ISO comfort 29F, limit 18F",
      "SP400, SP700, SP1000"
    ],
    "pros": [
      "Wind barrier blocks zipper cold spots",
      "ISO comfort and limit figures",
      "Three warmth models",
      "Traceable certified down"
    ],
    "cons": [
      "Costs more than the SYWSKW",
      "Lower models skip the collar"
    ],
    "bestFor": "Cold sleepers needing a draft barrier",
    "take": "A draft-sealed, documented down bag for colder trips.",
    "catch": "Quoted figures are well above 0 degrees, so pick the right model."
  },
  {
    "id": "best-down-sleeping-bags-4",
    "rank": 4,
    "badge": "Best Verified Limits",
    "name": "Kelty Cosmic 20 Down Mummy Sleeping Bag for Backpacking",
    "price": "$189.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Ypf-hGnNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSPKCJZK?tag=rvgearlab-amz-20",
    "description": "The Kelty Cosmic 20 uses 550 fill power RDS-traceable down in recycled shell and liner fabrics with PFAS-free DWR. It prints an ISO limit rating of 21 degrees F and an extreme of -11 degrees F, with Short, Regular and Long sizes fitting up to 5 ft 6, 6 ft and 6 ft 6.\n\nIt is the only bag here with an ISO extreme figure, and the lowest fill power. It costs the most.\n\nIt suits campers who want a proven, tested down bag in a choice of lengths. Sizes step up 6 inches at a time.",
    "specs": [
      "550FP RDS down",
      "ISO limit 21F, extreme -11F",
      "Short, Regular, Long"
    ],
    "pros": [
      "ISO limit and extreme printed",
      "Three length options",
      "PFAS-free recycled fabrics",
      "Dual-direction zippers"
    ],
    "cons": [
      "Highest price in the list",
      "Lowest fill power here"
    ],
    "bestFor": "Verified-limit backpacking",
    "take": "The best verified limits in the group, in three lengths.",
    "catch": "The lowest fill power here means more weight for the same loft."
  },
  {
    "id": "best-down-sleeping-bags-5",
    "rank": 5,
    "badge": "Best Value",
    "name": "QEZER Down Sleeping Bag for Adults",
    "price": "$75.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Kdo1-9pCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D6YF51KY?tag=rvgearlab-amz-20",
    "description": "The QEZER is a semi-rectangular 600 fill power duck down bag measuring 85.04 by 31.5 inches, weighing 1.68 lb and packing to 9.84 by 5.51 inches. It prints a comfort range of 45 to 61 degrees F and a limit of 36 degrees F, with a foot zipper and chest insulation. A 3.18 lb version of the line is rated colder.\n\nIt costs the least of the five and prints more figures than the Naturehike CW-EXT. It is far milder than the Kelty.\n\nIt suits warm-weather backpackers on a tight budget. The heavier tier suits colder nights.",
    "specs": [
      "600FP, 1.68 lb",
      "Comfort 45 to 61F, limit 36F",
      "Packs 9.84 x 5.51 in"
    ],
    "pros": [
      "Lowest price in the list",
      "Weight and pack size printed",
      "Comfort and limit figures printed",
      "Foot zipper for venting"
    ],
    "cons": [
      "Comfort range is mild, 45F and up",
      "Semi-rectangular is bulkier"
    ],
    "bestFor": "Budget warm-weather down",
    "take": "Real down with honest numbers at the lowest price.",
    "catch": "Its 45F comfort floor makes it a warm-weather bag."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fill power",
    "description": "Loft per ounce."
  },
  {
    "title": "Down weight",
    "description": "Total insulation."
  },
  {
    "title": "Weight and pack size",
    "description": "Listed values."
  },
  {
    "title": "Printed ratings",
    "description": "ISO or brand figures."
  },
  {
    "title": "Price",
    "description": "Cost against detail."
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
          "Flexible, couples",
          "SYWSKW 680FP Down with Pillow",
          "Three tiers, wide cut."
        ],
        [
          "Ultralight",
          "Naturehike CW-EXT Goose Down",
          "0.94 lb M."
        ],
        [
          "Cold sleeper",
          "Naturehike Snowbird SP Down",
          "Wind barrier."
        ],
        [
          "Verified limits",
          "Kelty Cosmic 20 ISO Down",
          "ISO -11F extreme."
        ],
        [
          "Budget",
          "QEZER 600FP Down 1.68 lb",
          "Lowest price."
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
          "$70 to $100",
          "QEZER 600FP Down 1.68 lb or SYWSKW 680FP Down with Pillow"
        ],
        [
          "$130 to $150",
          "Naturehike Snowbird SP Down or Naturehike CW-EXT Goose Down"
        ],
        [
          "$180 to $190",
          "Kelty Cosmic 20 ISO Down"
        ]
      ]
    }
  },
  {
    "subheading": "Ultralight vs Warmth",
    "cards": [
      {
        "label": "Ultralight",
        "text": "Lowest weight, little warmth data. The Naturehike CW-EXT Goose Down is lightest."
      },
      {
        "label": "Warmth",
        "text": "More fill and ratings. The Naturehike Snowbird SP Down and Kelty Cosmic 20 ISO Down print figures."
      }
    ],
    "note": "Choose the SYWSKW 680FP Down with Pillow as a balance."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Near $76",
          "QEZER 600FP Down 1.68 lb"
        ],
        [
          "Near $99",
          "SYWSKW 680FP Down with Pillow"
        ],
        [
          "Near $140",
          "Naturehike Snowbird SP Down"
        ],
        [
          "Near $150",
          "Naturehike CW-EXT Goose Down"
        ],
        [
          "Near $190",
          "Kelty Cosmic 20 ISO Down"
        ]
      ]
    }
  },
  {
    "subheading": "Three-Season Backpacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A fill power of 600 or more and a printed range."
      },
      {
        "label": "In this comparison",
        "text": "The SYWSKW 680FP Down with Pillow lists 680FP, and the QEZER 600FP Down 1.68 lb prints comfort and limit figures."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Kelty Cosmic 20 ISO Down for verified limits, or the Naturehike CW-EXT Goose Down for the lowest weight."
      },
      {
        "label": "Save if",
        "text": "Save with the QEZER 600FP Down 1.68 lb for real down at the lowest price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fill power and amount",
    "explanation": "Fill power is loft per ounce, and the down weight is the total insulation. The SYWSKW offers 680FP in 1.1 to 2.65 lb tiers, and the Kelty 550FP. Compare both numbers."
  },
  {
    "criterion": "Printed ratings",
    "explanation": "ISO ratings are test-based, while brand figures are claims. The Kelty prints ISO limit 21F and extreme -11F, and the QEZER prints comfort and limit. Favor printed figures."
  },
  {
    "criterion": "Weight and pack size",
    "explanation": "Light down bags are the point. The Naturehike CW-EXT lists 0.94 lb in M and the QEZER 1.68 lb. Check storage dimensions too."
  },
  {
    "criterion": "Draft control",
    "explanation": "Cold sneaks through the zipper. The Snowbird lists a wind barrier, and the SYWSKW a YKK zipper. Look for a barrier or collar."
  },
  {
    "criterion": "Moisture care",
    "explanation": "Down loses loft when wet. Use a dry sack and shells with DWR such as the Kelty. Store loose, not compressed."
  }
];

export const faq = [
  {
    "q": "What fill power should I buy?",
    "a": "Around 600 to 680 is a strong middle. The SYWSKW 680FP Down with Pillow lists 680FP, and the Kelty is 550."
  },
  {
    "q": "Is goose down better than duck?",
    "a": "Not by label. The Naturehike CW-EXT Goose Down names goose, while others name duck. Check fill power."
  },
  {
    "q": "Do I need an ISO rating?",
    "a": "It helps, since it is test-based. The Kelty Cosmic 20 ISO Down prints one."
  },
  {
    "q": "How do I stop drafts?",
    "a": "Use the collar and zipper barrier. The Naturehike Snowbird SP Down lists a wind barrier."
  },
  {
    "q": "How do I wash down?",
    "a": "Use a down cleaner in a front-loader on gentle and dry on low with tennis balls. Check the care label."
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
