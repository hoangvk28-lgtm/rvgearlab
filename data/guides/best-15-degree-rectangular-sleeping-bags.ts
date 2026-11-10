export const guideSlug = "best-15-degree-rectangular-sleeping-bags";
export const guideTitle = "2 Best 15 Degree Rectangular Sleeping Bags in 2026";
export const metaTitle = "Best 15 Degree Rectangular Sleeping Bags in 2026";
export const metaDescription = "Two roomy cold-weather bags for 15F campers: the Coleman Dunnock 20F Big n Tall and the Londtren XXL with a 0F to 15F rating.";
export const mainKeyword = "best 15 degree rectangular sleeping bags";
export const introParagraphs = [
  "Few listings pair a 15 degree figure with a roomy cut, so this guide covers the two that come closest: a Coleman Dunnock labeled 20F and a Londtren labeled 0F to 15F. Neither listing uses the word rectangular, but their wide, flannel-lined builds are the ones campers want when a mummy feels tight.",
  "We compared them on size, fit height and what each says about warmth, so the choice is between a name-brand cotton bag and a larger, lower-cost option."
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
    "id": "best-15-degree-rectangular-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Londtren Large 0 Degree Sleeping Bags for Adults Cold Weather Sleeping Bag Camping Winter Below Zero 20 15 Fla",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51CwZgAyc3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DHXP3LKP?tag=rvgearlab-amz-20",
    "description": "Londtren lists a temperature rating of 0F to 15F and a comfort rating of 20F to 55F on this 90 x 40 inch bag. It has a flannel lining, zipper draft tubes, a thickened shoulder warmer and a drawstring hood, and the 210T shell is waterproof.\n\nNext to the Coleman Dunnock, it is longer and wider, fits people up to 7 ft, and its rating range brackets 15F. The Coleman is the one with the brand-backed construction.\n\nPick it for tall or broad campers who want room and a label that includes 15F. It costs less than the Coleman.",
    "specs": [
      "0 to 15F rated, 90 x 40 inch",
      "Flannel lining, draft tubes",
      "210T waterproof shell"
    ],
    "pros": [
      "Rating range includes 15F",
      "Fits campers up to 7 ft",
      "Thickened shoulder warmer",
      "Costs less than the Coleman"
    ],
    "cons": [
      "Two rating ranges to sort out",
      "No fill weight on the listing"
    ],
    "bestFor": "Tall and broad campers",
    "take": "A big and tall flannel bag whose rating range includes 15F.",
    "catch": "The listing gives both a rating and a comfort range, so judge it by the warmer comfort figure."
  },
  {
    "id": "best-15-degree-rectangular-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Brand Name",
    "name": "Coleman Dunnock 20°F Big ‘n Tall Sleeping Bag",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hCyk-j8LL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00363PSKK?tag=rvgearlab-amz-20",
    "description": "Coleman's Dunnock is rated to 20F and fits adults up to 6 ft 4 in. Its Fiberlock construction, cotton cover, cotton flannel liner and Thermolock draft tube are all named on the listing, along with a patented 2-way ZipPlow zipper.\n\nIt sits closer to 15F than most bags and uses named construction details, where the Londtren relies on size. The machine-washable cotton build feels soft and dries slowly.\n\nA fit for campers who prefer a known brand and a cotton feel. Wash it after muddy trips.",
    "specs": [
      "20F rated, up to 6 ft 4 in",
      "Fiberlock, Thermolock draft tube",
      "Cotton flannel liner"
    ],
    "pros": [
      "Named construction details",
      "Zipper snag protection",
      "Machine washable",
      "Brand-known warranty support"
    ],
    "cons": [
      "Heavy and bulky to carry",
      "Cotton cover is slow to dry"
    ],
    "bestFor": "Brand-focused car campers",
    "take": "A name-brand 20F bag with named construction features.",
    "catch": "Its 20F figure suggests cool nights, not deep winter, and it fits only up to 6 ft 4 in."
  }
];

export const howWeEvaluated = [
  {
    "title": "Rating",
    "description": "We compared stated ratings with 15F."
  },
  {
    "title": "Room",
    "description": "We checked dimensions and fit height."
  },
  {
    "title": "Construction",
    "description": "We noted named features such as draft tubes."
  },
  {
    "title": "Care",
    "description": "We checked washing instructions."
  },
  {
    "title": "Scope",
    "description": "We said plainly when the shape is not stated."
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
    "subheading": "By Camper Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Up to 7 ft tall",
          "Londtren XXL 0-15F",
          "90 x 40 inch cut"
        ],
        [
          "Up to 6 ft 4 in",
          "Coleman Dunnock 20F",
          "Stated fit"
        ],
        [
          "Wants brand support",
          "Coleman Dunnock 20F",
          "Named construction"
        ],
        [
          "Budget-minded",
          "Londtren XXL 0-15F",
          "Lower price"
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
          "Londtren XXL 0-15F"
        ],
        [
          "$90 to $100",
          "Coleman Dunnock 20F"
        ]
      ]
    }
  },
  {
    "subheading": "Brand Name vs Bigger Size",
    "cards": [
      {
        "label": "Brand",
        "text": "The Coleman Dunnock 20F uses named Fiberlock and Thermolock features."
      },
      {
        "label": "Size",
        "text": "The Londtren XXL 0-15F offers 90 x 40 inches and a 0 to 15F range."
      }
    ],
    "note": "Choose the Londtren XXL 0-15F for room and the Coleman Dunnock 20F for brand confidence."
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
          "Lower price",
          "Londtren XXL 0-15F"
        ],
        [
          "Higher price, brand name",
          "Coleman Dunnock 20F"
        ]
      ]
    }
  },
  {
    "subheading": "15F Car Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed range that includes 15F and a wide cut."
      },
      {
        "label": "In this comparison",
        "text": "The Londtren XXL 0-15F prints a 0 to 15F range and 40 inches of width."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Coleman Dunnock 20F if you value brand support."
      },
      {
        "label": "Save if",
        "text": "Save with the Londtren XXL 0-15F."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rating vs comfort",
    "explanation": "A label lists the lowest temperature the bag is meant to survive, while comfort is the warmer figure where you sleep well. The Londtren prints both, which makes it easier to judge. Use the comfort number when you plan a night, and treat the lower figure as a limit."
  },
  {
    "criterion": "Width and height",
    "explanation": "A roomy bag needs enough width that you can roll over without pulling the shell tight. Thirty-six to forty inches is the usual range for big and tall cuts. Check the stated fit height as well as width, since the Coleman stops at 6 ft 4 in."
  },
  {
    "criterion": "Cotton vs synthetic cover",
    "explanation": "A cotton cover and flannel liner feel soft and warm to the touch. They also hold moisture and dry slowly after rain or dew. Check the cover and lining material in the listing so you know how much care the bag will need."
  },
  {
    "criterion": "Draft control",
    "explanation": "Cold air leaks mostly along the zipper and around the neck. A draft tube behind the zipper and a drawstring hood close both gaps. Check that the listing names these features, since not every wide bag has them."
  },
  {
    "criterion": "Weight and bulk",
    "explanation": "Wide cotton bags are heavy and do not compress well. That matters if you carry the bag from a trunk to a campsite more than a few steps. Look for a printed weight or packed size, and plan trunk space if none appears."
  }
];

export const faq = [
  {
    "q": "Is 20F enough for 15F?",
    "a": "With a pad and layers it works for one cold night. Comfort sits warmer. Add a liner."
  },
  {
    "q": "What mistake do buyers make?",
    "a": "They ignore width. A bag too narrow compresses insulation."
  },
  {
    "q": "Is Coleman worth it over Londtren?",
    "a": "If you want a known brand, yes. Otherwise the Londtren offers more room."
  },
  {
    "q": "How do I set up the bag?",
    "a": "Lay it on a wide pad and fluff it. Zip up. Use the hood."
  },
  {
    "q": "How do I wash it?",
    "a": "Machine wash gently and dry fully. Avoid heat. Store loose."
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
