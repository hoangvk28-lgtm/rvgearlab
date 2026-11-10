export const guideSlug = "best-rv-leveler-for-triple-axle-trailer";
export const guideTitle = "3 Best RV Leveler For Triple Axle Trailer in 2026";
export const metaTitle = "Best RV Leveler For Triple Axle Trailer in 2026";
export const metaDescription = "Drive-on RV levelers that fit the tight tire spacing of tandem and triple axle trailers, compared on lift height, length, and wheel chock design.";
export const mainKeyword = "best rv leveler for triple axle trailer";
export const introParagraphs = [
  "Triple axle trailers pack their tires closely, so a long ramp that fits a single axle may not clear the next wheel. This guide compares three curved drive-on levelers built with compact lengths for tandem tire spacing. We evaluated each on lift height, length, and the chocks that keep the trailer from rolling."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41A8JSyduwL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-leveler-for-triple-axle-trailer-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Camco Curved Camper/RV Leveler & Wheel Chock",
    "price": "$68.75",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41A8JSyduwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07ZHNWMGL?tag=rvgearlab-20",
    "description": "The Camco Curved Camper Levelers are a pair of drive-on ramps that lift tires up to 4 inches. They use a honeycomb build in a compact length that fits tandem wheel spacing without modification, and include wheel chocks with non-slip rubber grippers.\n\nCompared with the single Camco Curved Leveler, it gives you two ramps and chocks, enough to handle an axle group on each side. It suits triple axle owners who want brand-tested, made-in-USA ramps.",
    "specs": [
      "Lifts up to 4 inches",
      "Compact tandem length",
      "Includes rubber-grip chocks"
    ],
    "pros": [
      "Compact length fits tandem tire spacing",
      "Honeycomb build is light and strong",
      "Includes chocks with non-slip rubber grippers",
      "Made in the USA with a patented design"
    ],
    "cons": [
      "Lift stops at 4 inches",
      "Triple axle may need both ramps per side"
    ],
    "bestFor": "Tandem and triple axle setups"
  },
  {
    "id": "best-rv-leveler-for-triple-axle-trailer-2",
    "rank": 2,
    "badge": "Best Budget",
    "name": "Camco Curved Camper/RV Leveler & Wheel Chock",
    "price": "$32.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41QO+i1zQBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B06XPDKJN7?tag=rvgearlab-20",
    "description": "The Camco Single Curved Leveler is one ramp that adds up to 4 inches under a tire. It uses the same compact honeycomb design as the pair and comes with a single wheel chock with non-slip rubber grippers.\n\nAgainst the Camco Curved Pair, it costs less and suits trailers where one side needs only a small lift. It fits owners who level one side only or who want to add a second ramp later.",
    "specs": [
      "One ramp, 4 inch lift",
      "Honeycomb construction",
      "Single chock with grippers"
    ],
    "pros": [
      "Single ramp lifts a tire by up to 4 inches",
      "Compact length fits tandem spacing",
      "Rubber-gripped chock helps hold position",
      "Light enough to handle with one hand"
    ],
    "cons": [
      "You need a second ramp for balanced leveling",
      "Only one chock is included"
    ],
    "bestFor": "One-sided leveling on a budget"
  },
  {
    "id": "best-rv-leveler-for-triple-axle-trailer-3",
    "rank": 3,
    "badge": "Best Fine Increments",
    "name": "OULEME 2 PK RV Leveling Blocks",
    "price": "$27.06",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/419NGtLPd1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B1HJWRW7?tag=rvgearlab-20",
    "description": "The OULEME 2 PK is a pair of curved levelers for dual axle trailers, made of HDPE with two thickened non-slip rubber pads. They level in any increment between 1/2 and 4 inches in under 5 minutes and fit tandem wheeled RVs with a compact length.\n\nCompared with the Camco Curved Pair, it describes a finer 1/2 inch increment and a very high stated tire weight limit. It suits owners who want precise adjustment and a low price for a two-pack.",
    "specs": [
      "Any increment 1/2 to 4 inches",
      "HDPE construction",
      "Two non-slip rubber pads"
    ],
    "pros": [
      "Levels in any increment from 1/2 to 4 inches",
      "Two ramps arrive in a single pack",
      "Gear mesh design reduces slipping",
      "Compact length fits tandem wheeled RVs"
    ],
    "cons": [
      "Chocks are not described in the listing",
      "Branded for dual axle rather than triple"
    ],
    "bestFor": "Fine-tuned leveling on a budget"
  }
];

export const howWeEvaluated = [
  {
    "title": "Compact length",
    "description": "We checked which ramps list a compact length for close tire spacing."
  },
  {
    "title": "Lift height",
    "description": "We compared the maximum lift and the fineness of adjustment."
  },
  {
    "title": "Chock design",
    "description": "We looked at included chocks and non-slip features."
  },
  {
    "title": "Pack count",
    "description": "We compared whether the listing includes one or two ramps."
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
    "subheading": "By Setup",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Level both sides of a triple axle",
          "Camco Curved Pair",
          "Two ramps with chocks included"
        ],
        [
          "Level one side only",
          "Camco Single Leveler",
          "One ramp at a lower price"
        ],
        [
          "Need fine adjustment",
          "OULEME 2 PK",
          "Any increment from 1/2 to 4 inches"
        ],
        [
          "Need chocks included",
          "Camco Curved Pair",
          "Rubber-gripped chocks come in the box"
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
          "OULEME 2 PK"
        ],
        [
          "$30 to $40",
          "Camco Single Leveler"
        ],
        [
          "$60 to $70",
          "Camco Curved Pair"
        ]
      ]
    }
  },
  {
    "subheading": "Fixed Steps vs Any Increment",
    "cards": [
      {
        "label": "Fixed steps",
        "text": "Stepped curved ramps lock into set heights. The Camco Curved Pair and Camco Single Leveler use this honeycomb design."
      },
      {
        "label": "Any increment",
        "text": "A gear mesh lets you stop between 1/2 and 4 inches. The OULEME 2 PK uses this."
      }
    ],
    "note": "Most owners should choose the Camco Curved Pair unless the OULEME 2 PK's finer control matters."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price",
          "Camco Single Leveler"
        ],
        [
          "Two ramps at a low price",
          "OULEME 2 PK"
        ],
        [
          "Brand-backed pair with chocks",
          "Camco Curved Pair"
        ]
      ]
    }
  },
  {
    "subheading": "For Triple Axle Trailers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A compact length that clears the next tire, as the Camco Curved Pair lists."
      },
      {
        "label": "In this comparison",
        "text": "The Camco Curved Pair states a compact length for tandem wheel spacing and includes chocks, which suits close triple axle tires."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Camco Curved Pair for chocks and a brand-backed design."
      },
      {
        "label": "Save if",
        "text": "Save with the Camco Single Leveler if one side needs lifting, or the OULEME 2 PK for two ramps at a lower price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Ramp length vs tire spacing",
    "explanation": "Triple axle tires sit close together, so a long ramp can touch the next tire. A compact length designed for tandem wheels clears them. Look for tandem or compact wording in the listing, and measure your gap if possible."
  },
  {
    "criterion": "Maximum lift height",
    "explanation": "Lift height is how much the ramp raises a tire, and curved levelers here reach 4 inches. If your site slopes more than that, you need blocks too. Check the stated lift against how far out of level you usually are."
  },
  {
    "criterion": "Increment control",
    "explanation": "Some levelers step in fixed increments while others let you stop anywhere. The OULEME lists any increment between 1/2 and 4 inches. Look for the increment size to avoid overshooting."
  },
  {
    "criterion": "Chocks included",
    "explanation": "A chock holds the opposite tire so the trailer cannot roll off the ramp. Camco includes rubber-gripped chocks. Check whether the listing includes them, since buying separately adds cost."
  },
  {
    "criterion": "Weight rating per tire",
    "explanation": "A triple axle trailer is heavy, so ramps must carry load per tire. The OULEME lists tires up to 35,000 pounds. Check the stated rating and compare it with your trailer's gross weight."
  }
];

export const faq = [
  {
    "q": "Do these levelers work on a triple axle trailer?",
    "a": "They are designed with a compact length for tandem spacing, so they can fit close tires. Measure the gap between your tires before buying."
  },
  {
    "q": "How many levelers do I need?",
    "a": "One per side is the minimum, and a pair is usually enough. Check your trailer's weight rating against the ramp rating."
  },
  {
    "q": "Is the Camco worth it over the OULEME?",
    "a": "Camco includes chocks and a brand name, while OULEME offers finer steps at a lower price. Choose based on which feature you need."
  },
  {
    "q": "How do I use a curved leveler?",
    "a": "Place the ramp in front of the tire, drive up slowly, and set the chock. Use a spotter and check the level before settling."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Electronic RV Leveler",
    "href": "/towing-leveling/best-electronic-rv-leveler"
  },
  {
    "title": "Best Drive On RV Levelers",
    "href": "/towing-leveling/best-drive-on-rv-levelers"
  },
  {
    "title": "Best Manual RV Leveling System",
    "href": "/towing-leveling/best-manual-rv-leveling-system"
  },
  {
    "title": "Best RV Leveler For Uneven Ground",
    "href": "/towing-leveling/best-rv-leveler-for-uneven-ground"
  }
];
