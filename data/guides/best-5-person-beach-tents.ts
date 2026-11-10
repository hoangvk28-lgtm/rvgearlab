export const guideSlug = "best-5-person-beach-tents";
export const guideTitle = "2 Best 5 Person Beach Tents in 2026";
export const metaTitle = "Best 5 Person Beach Tents in 2026";
export const metaDescription = "Best 5-person beach tents compared on stated capacity, size, sun rating and setup, for families sharing shade on sand with two to four adults.";
export const mainKeyword = "best 5 person beach tents";
export const introParagraphs = [
  "Only two beach tent listings state a capacity near five people, and both are pop-up sun shelters rather than sleeping tents. Both are meant for shade, a changing space and a place to keep the kids out of the glare.",
  "Their stated capacity differs, with one listing saying 4 to 5 and the other 5 to 6, so the question is how many adults sit comfortably. The picks were compared on that wording, the floor, the sun rating and the setup."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-lakeside-campsite.webp";
export const heroImageAlt = "Colorful tents pitched beside a misty mountain lake";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-5-person-beach-tents-1",
    "rank": 1,
    "badge": "Best for Five or Six",
    "name": "Oileus XX-Large 5-6 Person Waterproof Pop-Up Beach Tent",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bPnNWJw-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09Y1MBMYY?tag=rvgearlab-amz-20",
    "description": "The Oileus XXL is a pop-up beach tent labeled for 5 to 6 people, with a listed size of 98.4 by 55 by 58 inches. It uses 210T polyester with a 3000mm PU coating and a 99% UV block, with 9mm fiberglass poles.\n\nIt has the larger capacity and the stronger water rating of the two, and it adds an awning and three windows. The WolfWise sells for roughly half the price and has a deeper front porch.\n\nIt suits families of two adults and up to four kids who want one big pop-up shade. It weighs about 5 lbs and folds in under 30 seconds.",
    "specs": [
      "5 to 6 person pop-up",
      "3000mm PU, 99% UV block",
      "About 5 lbs, 30-second fold"
    ],
    "pros": [
      "Biggest stated capacity",
      "Light at about 5 lbs",
      "Awning plus three windows",
      "Water rating of 3000mm"
    ],
    "cons": [
      "Sized for 4 adults and 2 kids in practice",
      "Costs more than the WolfWise"
    ],
    "bestFor": "Families of five or six",
    "take": "The larger of the two, built for a full family sharing shade.",
    "catch": "Real comfort is four adults plus two kids, not six adults."
  },
  {
    "id": "best-5-person-beach-tents-2",
    "rank": 2,
    "badge": "Best Budget Shade",
    "name": "WolfWise Instant Beach Tent",
    "price": "$47.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TIy8BQP8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07ZFC9CWW?tag=rvgearlab-amz-20",
    "description": "The WolfWise is an instant beach tent for 4 to 5 people that opens when a spring system is released. It measures 98.4 by 53.1 by 53.1 inches with a 51.1 inch front porch, and it uses UPF 50+ water-repellent polyester silver-coated inside.\n\nIts price is roughly half the Oileus figure and it has a deeper porch. It also has a zippered door and window, which the other tent only describes as a pop-up with windows.\n\nIt suits a smaller crew that needs private space for changing and a shaded spot for resting. One person can set it up.",
    "specs": [
      "4 to 5 person pop-up",
      "UPF 50+, silver-coated inside",
      "Zipper door and window"
    ],
    "pros": [
      "Lowest price",
      "Zippered door for privacy",
      "Deep front porch",
      "Easy one-person setup"
    ],
    "cons": [
      "Smaller than the Oileus",
      "Water-repellent, not a rain rating"
    ],
    "bestFor": "Budget families of four",
    "take": "A lower-cost pop-up with a private zipper door.",
    "catch": "It is a 4 to 5 person tent, so five adults will not fit."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated capacity",
    "description": "The person count in the title."
  },
  {
    "title": "Floor size",
    "description": "Length, width, height."
  },
  {
    "title": "Sun rating",
    "description": "UPF and UV block."
  },
  {
    "title": "Setup",
    "description": "Pop-up or poles."
  },
  {
    "title": "Privacy",
    "description": "Doors and windows."
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
    "subheading": "By Group Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Four adults and two kids",
          "Oileus XXL Beach Tent",
          "5 to 6 person label and awning."
        ],
        [
          "Four to five people",
          "WolfWise 4-5 Person Beach Tent",
          "Stated 4 to 5 capacity."
        ],
        [
          "Changing privacy",
          "WolfWise 4-5 Person Beach Tent",
          "Zipper door and window."
        ],
        [
          "Light carry",
          "Oileus XXL Beach Tent",
          "About 5 lbs."
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
          "$40 to $50",
          "WolfWise 4-5 Person Beach Tent"
        ],
        [
          "$80 to $90",
          "Oileus XXL Beach Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Bigger vs Cheaper",
    "cards": [
      {
        "label": "Bigger",
        "text": "More width and an awning. The Oileus XXL Beach Tent costs more."
      },
      {
        "label": "Cheaper",
        "text": "Lower price with a porch. The WolfWise 4-5 Person Beach Tent is the example."
      }
    ],
    "note": "Most families of five should take the Oileus XXL Beach Tent."
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
          "Under $50",
          "WolfWise 4-5 Person Beach Tent"
        ],
        [
          "About $90",
          "Oileus XXL Beach Tent"
        ],
        [
          "Privacy first",
          "WolfWise 4-5 Person Beach Tent"
        ],
        [
          "Rain possible",
          "Oileus XXL Beach Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For Beach Families Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated capacity of 5 or more, a UPF rating and anchor points for sand."
      },
      {
        "label": "In this comparison",
        "text": "The Oileus XXL Beach Tent lists 5 to 6 people, 99% UV block and fiberglass poles."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Oileus XXL Beach Tent if you have five or six people and want a 3000mm rating. It gives more width."
      },
      {
        "label": "Save if",
        "text": "Save with the WolfWise 4-5 Person Beach Tent when you have four people and a tight budget. It is about half the price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Read the capacity claim",
    "explanation": "A 5-person beach tent often means five seated people with no gear. Compare the interior width in inches with the number of chairs or mats you plan to bring. Under 60 inches wide is tight for five."
  },
  {
    "criterion": "Check the UPF rating",
    "explanation": "UPF 50+ is a standard sun-protection rating, and a silver coating helps reflect heat. A tent that only says UV protection gives no number to judge. Look for the rating in the feature list."
  },
  {
    "criterion": "Plan for wind and sand",
    "explanation": "Sandbag pockets or stakes are needed in breeze. A light pop-up shelter can lift easily. Look for anchor points."
  },
  {
    "criterion": "Consider privacy",
    "explanation": "A zipper door and window turn a shade into a changing room. Mesh windows ventilate. Check the listing."
  },
  {
    "criterion": "Match weight to carry",
    "explanation": "A 5 lb tent is easy to carry across dunes. Heavier tents with poles are more work. Look for the weight in the listing."
  }
];

export const faq = [
  {
    "q": "Do 5-person beach tents sleep five?",
    "a": "They are shade shelters, not sleeping tents. They seat five people. Do not plan overnight use."
  },
  {
    "q": "What is the common mistake?",
    "a": "Ignoring wind. Light shelters can lift on a breezy beach. Fill the sandbags and stake the corners."
  },
  {
    "q": "Is the larger tent worth it?",
    "a": "Yes for five or six. It lists more width and a stronger water rating. For four people the cheaper tent works."
  },
  {
    "q": "How do I set it up?",
    "a": "Release the spring or open the frame, stake or fill the sandbags and open the doors. Face the door away from wind. It takes seconds."
  },
  {
    "q": "How do I clean sand from it?",
    "a": "Shake it out, rinse with fresh water and dry fully. Fold loosely. Avoid storing wet."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Tents",
    "href": "/tents-shelter/best-backpacking-tents"
  },
  {
    "title": "Best Camping Tents",
    "href": "/tents-shelter/best-camping-tents"
  },
  {
    "title": "Best Tent Stakes",
    "href": "/tents-shelter/best-tent-stakes"
  },
  {
    "title": "Best 4 Season Tent Under 200",
    "href": "/tents-shelter/best-4-season-tent-under-200"
  }
];
