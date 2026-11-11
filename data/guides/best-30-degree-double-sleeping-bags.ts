export const guideSlug = "best-30-degree-double-sleeping-bags";
export const guideTitle = "3 Best 30 Degree Double Sleeping Bags in 2026";
export const metaTitle = "Best 30 Degree Double Sleeping Bags in 2026";
export const metaDescription = "Three two-person bags for 30F camping: AGEMORE Flannel Double, VENTURE 4TH Double and TETON Mammoth, compared on range, size and weight.";
export const mainKeyword = "best 30 degree double sleeping bags";
export const introParagraphs = [
  "Couples who camp near freezing want a double bag with a lower end of about 30F, a width that lets two adults turn over, and a weight they can still lift into the car. Three listings meet that brief: an AGEMORE flannel double, a VENTURE 4TH double stated for 30 to 70F, and a colder-rated TETON Mammoth.",
  "We compared them on stated range, shared width, weight and how each splits or opens. With only three real fits, the guide also explains what to check on any double."
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
    "id": "best-30-degree-double-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "AGEMORE Cotton Flannel Double Sleeping Bag for Camping",
    "price": "$66.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41jCUckGCZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRGTSVJL?tag=rvgearlab-amz-20",
    "description": "AGEMORE lines this queen-size double with brushed flannel and covers it with a 210T high-count water-resistant polyester shell. The listing states a 32 to 59F design range, and zippers on both sides let it split into two singles.\n\nIts range starts closer to 30F than the TETON Mammoth's heavier build and gives more width than the VENTURE. The bag compresses tightly for storage and puffs up in use.\n\nA strong choice for couples who want flexibility between one big bag and two singles. The flannel lining feels warm against the skin.",
    "specs": [
      "Flannel lining, 210T shell",
      "32 to 59F design range",
      "Splits into two singles"
    ],
    "pros": [
      "Range starts near 30F",
      "Splits into two single bags",
      "Water-resistant shell",
      "Compresses for storage"
    ],
    "cons": [
      "No weight printed",
      "Flannel adds bulk"
    ],
    "bestFor": "Flexible couples",
    "take": "A flannel double with a printed 32F lower range that splits into singles.",
    "catch": "No weight is printed, and the flannel lining adds bulk when packed."
  },
  {
    "id": "best-30-degree-double-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Budget Pick",
    "name": "VENTURE 4TH Double 3-Season Backpacking Sleeping Bag",
    "price": "$64.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41W4ToCwJQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B081VYH9HR?tag=rvgearlab-amz-20",
    "description": "VENTURE 4TH sells this double with a stated 30 to 70F range, a water-resistant polyester shell, a two-way zipper and an included compression sack. The listing says it is sized for sleepers under 6 ft and carries a lifetime replacement guarantee.\n\nIts price is the lowest of the three, and it states the exact 30F lower end this guide targets. The 5 ft 11 in fit height is the limit, since the AGEMORE accepts taller sleepers.\n\nChoose it for average-height couples who want a low-cost double. The guarantee adds peace of mind.",
    "specs": [
      "30 to 70F stated range",
      "Fits campers to 5 ft 11 in",
      "Lifetime replacement guarantee"
    ],
    "pros": [
      "Lowest price of the three",
      "States the 30F lower end",
      "Lifetime replacement guarantee",
      "Compression sack included"
    ],
    "cons": [
      "Fit height tops out at 5 ft 11 in",
      "No weight printed"
    ],
    "bestFor": "Average-height couples on a budget",
    "take": "The lowest-cost double with a stated 30 to 70F range.",
    "catch": "Anyone over 5 ft 11 in will find it short."
  },
  {
    "id": "best-30-degree-double-sleeping-bags-3",
    "rank": 3,
    "badge": "Best for Extra Margin",
    "name": "Teton Mammoth",
    "price": "$188.50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413oLSXJNoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N0DOTWW?tag=rvgearlab-amz-20",
    "description": "TETON's Mammoth is a 0 degree double measuring 94 x 62 inches, with a poly-flannel lining, tubes against drafts at the zipper and shoulders, and a compression sack. It unzips on each side and across the bottom for easy access.\n\nIts 0 degree label gives the largest margin at 30F, and it offers the most room by far. The weight is higher than the AGEMORE and VENTURE, which suits vehicle camping.\n\nChoose it for couples who want a cushion of warmth and plenty of space. Plan on dedicated storage space.",
    "specs": [
      "0 degree label, 94 x 62 inch",
      "Poly-flannel lining",
      "Draft tubes, compression sack"
    ],
    "pros": [
      "Large margin below 30F",
      "Roomiest of the three",
      "Draft tubes seal zipper and shoulders",
      "Unzips on three sides"
    ],
    "cons": [
      "Highest price here",
      "No comfort figure printed"
    ],
    "bestFor": "Couples wanting extra margin",
    "take": "A 0 degree double with the most space and draft control.",
    "catch": "It costs the most and is a bulky vehicle bag, with a label only and no comfort figure."
  }
];

export const howWeEvaluated = [
  {
    "title": "Lower range",
    "description": "We compared each stated range with 30F."
  },
  {
    "title": "Width and height",
    "description": "We checked shared width and fit height."
  },
  {
    "title": "Weight and pack",
    "description": "We looked for printed weight and sack details."
  },
  {
    "title": "Zip design",
    "description": "We noted splitting and unzip options."
  },
  {
    "title": "Price",
    "description": "We compared relative cost."
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
    "subheading": "By Couple",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Wants one bag or two singles",
          "AGEMORE Flannel Double",
          "Splits into two singles"
        ],
        [
          "Average height, small budget",
          "VENTURE 4TH Double 3-Season",
          "Lowest price, 30 to 70F"
        ],
        [
          "Tall partner",
          "AGEMORE Flannel Double",
          "No stated height cap"
        ],
        [
          "Cold nights below 30F",
          "TETON Mammoth 0 Degree",
          "0 degree label, 94 x 62 inches"
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
          "$60 to $70",
          "VENTURE 4TH Double 3-Season"
        ],
        [
          "$60 to $70",
          "AGEMORE Flannel Double"
        ],
        [
          "$180 to $190",
          "TETON Mammoth 0 Degree"
        ]
      ]
    }
  },
  {
    "subheading": "Flexible Double vs Fixed Heavy Double",
    "cards": [
      {
        "label": "Flexible",
        "text": "The AGEMORE Flannel Double and VENTURE 4TH Double 3-Season both state a range near 30F and are easy to store."
      },
      {
        "label": "Heavy and roomy",
        "text": "The TETON Mammoth 0 Degree trades portability for width and a colder label."
      }
    ],
    "note": "Choose the AGEMORE Flannel Double for most couples and the TETON Mammoth 0 Degree only when nights drop below 30F."
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
          "VENTURE 4TH Double 3-Season"
        ],
        [
          "Low price, flexible",
          "AGEMORE Flannel Double"
        ],
        [
          "Highest price, margin",
          "TETON Mammoth 0 Degree"
        ]
      ]
    }
  },
  {
    "subheading": "30F Couples Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated lower range near 30F and a width of 59 inches or more."
      },
      {
        "label": "In this comparison",
        "text": "The AGEMORE Flannel Double lists 32F and zippers on both sides, while the TETON Mammoth 0 Degree lists 62 inches of width."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the TETON Mammoth 0 Degree when nights may fall below 30F."
      },
      {
        "label": "Save if",
        "text": "Save with the VENTURE 4TH Double 3-Season if both campers are 5 ft 11 in or shorter."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Where the range starts",
    "explanation": "A design range such as 32 to 59F tells you the coldest night the bag handles with layers. Two sleepers add heat, though a double leaks more air than a single. Treat the low end as your limit."
  },
  {
    "criterion": "Shared width",
    "explanation": "A queen-size bag measures about 59 to 62 inches across. Narrower bags compress insulation as two bodies press together. Check the stated width, not just the word double."
  },
  {
    "criterion": "Fit height",
    "explanation": "Doubles list a maximum height, such as 5 ft 11 in. A taller partner pushes against the foot and loses warmth. Compare fit height with the taller sleeper."
  },
  {
    "criterion": "Splitting zippers",
    "explanation": "Zippers on both sides let you split a double into two singles or open it into a quilt. That helps on solo trips and warm nights. Check the listing for left and right zippers."
  },
  {
    "criterion": "Weight",
    "explanation": "A double often weighs 10 lb or more. Plan vehicle space and storage accordingly. Look for a printed weight, and assume heavy if none appears."
  }
];

export const faq = [
  {
    "q": "Is a 30F double warm enough at freezing?",
    "a": "With a pad and layers it works for most couples at freezing. Comfort stays warmer than the stated range. Add a double-wide pad."
  },
  {
    "q": "What mistake do couples make with doubles?",
    "a": "They pick a bag that is too narrow for two adults and then compress the insulation at the shoulders. They also forget the pad. Check the width and pad size together."
  },
  {
    "q": "Is the AGEMORE worth it over the VENTURE?",
    "a": "If you want a splitting design and taller fit, yes. If you want the lowest cost and the exact 30F range, the VENTURE is fine."
  },
  {
    "q": "How do I set up a double bag at camp?",
    "a": "Lay a wide pad down first, spread the bag over it and zip both sides. Fluff the insulation before bed. Make sure the tent floor is wider than the bag."
  },
  {
    "q": "How do I wash a flannel double?",
    "a": "Use a large machine on a gentle cycle with mild detergent. Dry thoroughly before storing, because damp flannel mildews. Skip bleach."
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
