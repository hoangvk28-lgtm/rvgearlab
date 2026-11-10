export const guideSlug = "best-4-season-mummy-sleeping-bags";
export const guideTitle = "2 Best 4 Season Mummy Sleeping Bags in 2026";
export const metaTitle = "Best 4 Season Mummy Sleeping Bags in 2026";
export const metaDescription = "Best 4 season mummy sleeping bags: only two listings fit, a synthetic Bessport and a 550-fill down Clostnature, with their printed ratings explained.";
export const mainKeyword = "best 4 season mummy sleeping bags";
export const introParagraphs = [
  "Few mummy bags on Amazon print a real four-season claim, so this guide holds two picks and says so. One is a synthetic bag whose title advertises a 15 to 45F extreme range, and the other is a low-priced 550-fill down bag with a stated weight.",
  "Neither listing names a testing standard, so treat the cold figures as brand claims and plan around the warmer numbers. If you expect nights below freezing, add a liner, a warm pad and dry layers, or step up to a bag with an ISO rating."
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
    "id": "best-4-season-mummy-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Bessport Mummy Sleeping Bag",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41R1vMsDCmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07V6JMWYP?tag=rvgearlab-amz-20",
    "description": "The Bessport is a synthetic mummy whose title advertises a 15 to 45F extreme range for 3-4 season use. Body text gives a comfort range starting at 50F, so the title number is the limit rather than the comfort figure.\n\nThe stated fit is adults from 6 ft 1 to 6 ft 6, with a shoulder girth of 63 inches, a hip girth of 50.3 inches and a foot girth of 33 inches. Compared with the Clostnature it uses a 210T water-repellent ripstop shell and a soft taffeta liner.\n\nIt suits tall campers who want a synthetic mummy that tolerates damp. A satisfaction guarantee is stated on the listing.",
    "specs": [
      "15 to 45F extreme claim",
      "Suits 6 ft 1 to 6 ft 6",
      "210T water-repellent ripstop"
    ],
    "pros": [
      "Girth numbers are all printed",
      "Quilted build with insulated footbox",
      "Ripstop shell with water repellency",
      "Satisfaction guarantee stated"
    ],
    "cons": [
      "Comfort starts near 50F",
      "Weight not printed"
    ],
    "bestFor": "Tall campers on a budget",
    "take": "A synthetic 3-4 season mummy with a 15 to 45F extreme claim and generous girth figures.",
    "catch": "The cold figure is an extreme claim, and the body text starts comfort near 50F."
  },
  {
    "id": "best-4-season-mummy-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Down Option",
    "name": "Clostnature 20D 550 Fill Power Mummy Down Sleeping Bag for Adults",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31v31Uuw2iL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FDQ8B7LT?tag=rvgearlab-amz-20",
    "description": "Clostnature loads this mummy with 840 g of 550-fill white duck down in independent channels, wrapped in 20D nylon with a DWR coating. The listing states 3.08 lb, an 82.6 by 31.5 inch size and a packed size of 15 by 7.8 inches.\n\nIt carries down where the Bessport relies on synthetic fill, and its printed weight and packed size make it easier to plan a pack around. No ISO rating or temperature figure appears, so it cannot be compared to the Bessport's 15 to 45F claim.\n\nIt suits backpackers who want real down at a low price and will provide their own judgment on temperature. A warm pad makes up for the missing rating.",
    "specs": [
      "840 g of 550-fill down",
      "3.08 lb, 15 x 7.8 in packed",
      "Independent down channels"
    ],
    "pros": [
      "Genuine duck down at a low price",
      "Weight and packed size printed",
      "Channels keep down from shifting",
      "20D nylon with DWR coating"
    ],
    "cons": [
      "No temperature rating printed",
      "Fill power is only 550"
    ],
    "bestFor": "Budget down for cool nights",
    "take": "Real 550-fill duck down at a low price, with weight and packed size printed.",
    "catch": "No temperature rating is printed, so it is a cool-weather bag, not a verified four-season one."
  }
];

export const howWeEvaluated = [
  {
    "title": "Printed temperature",
    "description": "We compared the temperature claims each listing makes and noted which ones are limits."
  },
  {
    "title": "Fill type",
    "description": "We separated synthetic from down and noted fill weight where printed."
  },
  {
    "title": "Weight and pack size",
    "description": "We checked which listing prints weight and packed dimensions."
  },
  {
    "title": "Fit",
    "description": "We looked at stated height ranges and girth figures."
  },
  {
    "title": "Shell and care",
    "description": "We compared shell denier, water repellency and liners."
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
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Synthetic fill for damp nights",
          "Bessport 3-4 Season",
          "Water-repellent ripstop with synthetic fill"
        ],
        [
          "Down at a low price",
          "Clostnature 550FP",
          "840 g of 550-fill duck down"
        ],
        [
          "Tall camper over 6 ft 1",
          "Bessport 3-4 Season",
          "Fits adults 6 ft 1 to 6 ft 6"
        ],
        [
          "Printed weight for pack planning",
          "Clostnature 550FP",
          "3.08 lb and 15 x 7.8 in packed"
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
          "Clostnature 550FP"
        ],
        [
          "$40 to $50",
          "Bessport 3-4 Season"
        ]
      ]
    }
  },
  {
    "subheading": "Synthetic vs Down",
    "cards": [
      {
        "label": "Synthetic",
        "text": "The Bessport 3-4 Season keeps insulating when damp and tolerates rough handling. It packs bigger and weighs more for the warmth."
      },
      {
        "label": "Down",
        "text": "The Clostnature 550FP packs smaller and feels lighter for its warmth. Moisture reduces its loft, so it needs dry care."
      }
    ],
    "note": "Choose the Bessport 3-4 Season for wet trips and the Clostnature 550FP for dry ones."
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
          "Lowest price",
          "Clostnature 550FP"
        ],
        [
          "Slightly higher price, synthetic",
          "Bessport 3-4 Season"
        ]
      ]
    }
  },
  {
    "subheading": "Cold-Night Backpacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for an ISO limit rating and a printed weight."
      },
      {
        "label": "In this comparison",
        "text": "Neither the Bessport 3-4 Season nor the Clostnature 550FP prints an ISO rating, but the Clostnature prints 3.08 lb."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Bessport 3-4 Season if you want the colder claim and a synthetic fill for damp nights."
      },
      {
        "label": "Save if",
        "text": "Save with the Clostnature 550FP if you want real down for cool, dry trips."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Limit versus comfort",
    "explanation": "An extreme or limit figure shows the coldest the bag is claimed to survive, not where you stay comfortable. The Bessport advertises 15 to 45F extreme, with a comfort range starting near 50F. Plan around the comfort number."
  },
  {
    "criterion": "Down or synthetic",
    "explanation": "Down is lighter for its warmth, and synthetic fill keeps working when damp. The Clostnature uses 550-fill down, while the Bessport is synthetic. Pick based on how wet your nights run."
  },
  {
    "criterion": "Girth and fit",
    "explanation": "A mummy that is too snug cuts circulation, and one that is too roomy wastes heat. The Bessport prints shoulder 63, hip 50.3 and foot 33 inches. Compare those to your own measurements."
  },
  {
    "criterion": "Weight and pack size",
    "explanation": "A cold bag is heavier, so check the numbers. The Clostnature prints 3.08 lb and 15 by 7.8 inches. Where a listing gives none, factor that into your decision."
  },
  {
    "criterion": "Ground insulation",
    "explanation": "Most cold comes up from the ground. Use a pad rated for your coldest night under either bag. Add a liner and a hat for the final few degrees."
  }
];

export const faq = [
  {
    "q": "Is a 4 season mummy bag warm enough for winter?",
    "a": "Not necessarily. The term has no standard meaning, so read the printed limit and comfort figures, and add layers and a pad."
  },
  {
    "q": "What mistake do buyers make with cold-weather bags?",
    "a": "They treat the extreme number as a comfort figure. Plan on the warmer figure and treat the cold one as a survival margin."
  },
  {
    "q": "Is the Clostnature worth it over the Bessport?",
    "a": "If you want down and a printed weight, yes. It prints no rating, while the Bessport at least advertises a cold range."
  },
  {
    "q": "How do I get the most from a mummy bag?",
    "a": "Cinch the hood, wear dry base layers and keep the draft tube behind the zipper tucked. Fluff the bag before bed to restore loft."
  },
  {
    "q": "How do I store a cold-weather bag?",
    "a": "Keep it loose in a large breathable sack, not compressed. Air it out after trips and wash only when needed."
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
