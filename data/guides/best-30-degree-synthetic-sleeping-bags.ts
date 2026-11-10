export const guideSlug = "best-30-degree-synthetic-sleeping-bags";
export const guideTitle = "3 Best 30 Degree Synthetic Sleeping Bags in 2026";
export const metaTitle = "Best 30 Degree Synthetic Sleeping Bags in 2026";
export const metaDescription = "Three 30F bags with synthetic insulation: CORE 30 Degree XL, Kelty Callisto Kids and Retrospec Dream 30, compared on fill, size and care.";
export const mainKeyword = "best 30 degree synthetic sleeping bags";
export const introParagraphs = [
  "Synthetic fill is a good match for 30F camping, because it keeps most of its warmth when damp and shrugs off a wet tent wall. This list covers an extra-large CORE bag, a Kelty bag built for kids, and a Retrospec Dream 30 whose listing says insulated without naming the fill.",
  "Few listings combine a 30 degree label with a named synthetic fill, so the group is small and uneven. We say plainly where a listing leaves the fill or the fit unstated."
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
    "id": "best-30-degree-synthetic-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "CORE 30 Degree Adult Extra Large Sleeping Bag",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Y8mzcd8ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G3YH7GY2?tag=rvgearlab-20",
    "description": "CORE sells this adult extra-large bag with a comfort level of 30 to 50F, a polyester shell and lining, and synthetic hollow fiber fill. The listing says the fill retains insulation when wet, dries quickly and offers more heat retention and loft than standard fills.\n\nIt is the only adult pick with a named synthetic fill and a stated comfort band, so it is easy to read. An interior accessory pocket and machine washing make it practical for family trips.\n\nA good fit for adults who want a roomy, forgiving synthetic bag for three-season camping. Wash it at home after a muddy weekend.",
    "specs": [
      "30 to 50F comfort band",
      "Synthetic hollow fiber fill",
      "Machine washable"
    ],
    "pros": [
      "Fill type is named",
      "Keeps insulation when wet",
      "Dries quickly",
      "Interior accessory pocket"
    ],
    "cons": [
      "No weight or packed size printed",
      "Comfort band stops at 30F"
    ],
    "bestFor": "Adults on three-season trips",
    "take": "An extra-large synthetic bag whose listing names the fill and the comfort band.",
    "catch": "The listing prints no weight, and a 30F comfort floor means cold snaps need a liner."
  },
  {
    "id": "best-30-degree-synthetic-sleeping-bags-2",
    "rank": 2,
    "badge": "Best for Kids",
    "name": "Kelty Callisto Kids 30 Degree Synthetic Insulated Sleeping Bag",
    "price": "$59.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21ukctDQI2S._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082P6Q79X?tag=rvgearlab-20",
    "description": "Kelty's Callisto Kids is a 30 degree bag with Cloud Loft synthetic insulation and a soft 190T polyester taffeta shell. It unzips completely to work as a blanket and packs into its own stuff sack.\n\nIt is the only kid-sized bag in the group, which makes it the choice for young campers, and its soft shell is easy to snuggle. The adult-sized CORE and Retrospec do not fit children well.\n\nChoose it for boys and girls at campground sleepovers and scout trips. It stuffs back into its own sack with little fuss.",
    "specs": [
      "30 degree kids bag, Cloud Loft",
      "190T polyester taffeta shell",
      "Unzips into a blanket"
    ],
    "pros": [
      "Sized for kids",
      "Named Cloud Loft synthetic",
      "Soft taffeta shell",
      "Unzips into a blanket"
    ],
    "cons": [
      "Kid-sized only",
      "Listing is short on detail"
    ],
    "bestFor": "Young campers",
    "take": "A synthetic 30 degree bag sized for children.",
    "catch": "It suits children only, and the listing prints no weight or size."
  },
  {
    "id": "best-30-degree-synthetic-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Light Adult Pick",
    "name": "Retrospec Dream 30° 30 Degree Sleeping Bag",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ju9H8ETeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZ1WCL8T?tag=rvgearlab-20",
    "description": "Retrospec sells the Dream 30 as an insulated mummy with a 30 degree label. Both shells resist water, a collar and tube block drafts, and weights are listed at 2 lb 8 oz for regular and 2 lb 10 oz for long. A stuff sack comes with it.\n\nIt is the lightest adult bag in the group on paper, and its tapered cut holds heat better than a rectangle. Differentiated draw cords and a zipped stash pocket add convenience.\n\nChoose it for hikers who want a light 30F mummy at a low price. The stash pocket keeps a phone handy.",
    "specs": [
      "30 degree insulated mummy",
      "2 lb 8 oz regular weight",
      "Draft collar and draft tube"
    ],
    "pros": [
      "Lightest adult bag on paper",
      "Draft collar and tube",
      "Tapered cut retains heat",
      "Zipped stash pocket"
    ],
    "cons": [
      "Fill type is not named",
      "Tapered cut limits roll-over room"
    ],
    "bestFor": "Light-focused hikers",
    "take": "A light tapered 30F bag with draft collar and tube.",
    "catch": "The listing says insulated but does not name the fill."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fill named",
    "description": "We noted which listing states a synthetic fill."
  },
  {
    "title": "Rating",
    "description": "We compared stated 30F figures or comfort bands."
  },
  {
    "title": "Size",
    "description": "We separated adult and kid sizing."
  },
  {
    "title": "Weight",
    "description": "We used printed weights."
  },
  {
    "title": "Care",
    "description": "We checked washing instructions."
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
    "subheading": "By Camper",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Adult, three-season family trips",
          "CORE 30 Degree XL",
          "Named synthetic, 30 to 50F"
        ],
        [
          "Child, sleepovers and scouts",
          "Kelty Callisto Kids 30",
          "Kid-sized Cloud Loft"
        ],
        [
          "Light-focused hiker",
          "Retrospec Dream 30",
          "2 lb 8 oz regular"
        ],
        [
          "Tall adult needing length",
          "Retrospec Dream 30",
          "Long size listed"
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
          "$50 to $60",
          "Kelty Callisto Kids 30"
        ],
        [
          "$50 to $60",
          "CORE 30 Degree XL"
        ],
        [
          "$50 to $60",
          "Retrospec Dream 30"
        ]
      ]
    }
  },
  {
    "subheading": "Roomy XL vs Tapered Mummy",
    "cards": [
      {
        "label": "Roomy XL",
        "text": "The CORE 30 Degree XL gives extra room and a forgiving fill."
      },
      {
        "label": "Tapered",
        "text": "The Retrospec Dream 30 holds heat better per pound."
      }
    ],
    "note": "Choose the CORE 30 Degree XL for comfort and the Retrospec Dream 30 for weight."
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
          "Lowest price, kids",
          "Kelty Callisto Kids 30"
        ],
        [
          "Low price, XL adult",
          "CORE 30 Degree XL"
        ],
        [
          "Low price, light mummy",
          "Retrospec Dream 30"
        ]
      ]
    }
  },
  {
    "subheading": "Damp 30F Nights Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A named synthetic fill and a water-resistant shell."
      },
      {
        "label": "In this comparison",
        "text": "The CORE 30 Degree XL names synthetic hollow fiber that keeps insulation when wet, and the Retrospec Dream 30 lists water-resistant shells."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Retrospec Dream 30 only if weight matters."
      },
      {
        "label": "Save if",
        "text": "Save with the CORE 30 Degree XL for adults or the Kelty Callisto Kids 30 for children."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Why synthetic at 30F",
    "explanation": "Synthetic fill keeps working when damp, which happens often near freezing from condensation. It costs less than down and washes easily. Check that the listing names the fill, not only the word insulated."
  },
  {
    "criterion": "Comfort band",
    "explanation": "A band such as 30 to 50F tells you the coldest comfortable night. A single label may be a limit. Look for a band or comfort figure."
  },
  {
    "criterion": "Adult vs kids sizing",
    "explanation": "A kid bag is shorter and narrower, which cuts weight and cost. It will not fit adults. Check the age and height range in the listing."
  },
  {
    "criterion": "Draft collar and tube",
    "explanation": "A collar seals the neck and a tube seals the zipper. Together they cut heat loss on cool nights. Check that the listing names both."
  },
  {
    "criterion": "Wet-weather behavior",
    "explanation": "Water-resistant shells shed light moisture, but they are not waterproof. Keep bags off wet ground. Check the shell description."
  }
];

export const faq = [
  {
    "q": "Is synthetic better than down at 30F?",
    "a": "In damp conditions, yes, because synthetic fill keeps working when wet. In dry cold, down is lighter and packs smaller. Choose by weather and budget."
  },
  {
    "q": "What mistake do buyers make with kid and adult bags?",
    "a": "They buy a kid bag for a teenager or an adult bag for a small child. A bag that is too big wastes warmth, and one that is too small cramps feet. Check the height range on the listing."
  },
  {
    "q": "Is the Retrospec worth it over the CORE?",
    "a": "If weight matters, yes, since it prints 2 lb 8 oz and has a tapered cut. If you want room and a named synthetic fill, the CORE is the better choice."
  },
  {
    "q": "How do I set up the bag at camp?",
    "a": "Fluff the insulation, lay it over an insulated pad and zip up. Keep the bag off wet ground with a tarp or footprint. Use the draw cords if the bag has a hood."
  },
  {
    "q": "How do I wash a synthetic bag?",
    "a": "Machine wash gently with mild detergent, then dry fully on low heat. Skip fabric softener. Store it loose."
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
