export const guideSlug = "best-40-degree-synthetic-sleeping-bags";
export const guideTitle = "3 Best 40 Degree Synthetic Sleeping Bags in 2026";
export const metaTitle = "Best 40 Degree Synthetic Sleeping Bags in 2026";
export const metaDescription = "Three 40F bags for warm-weather camping: Kelty Cosmic Synthetic, the budget Kelty Mistral and the Coleman Biscayne, with advice on synthetic fill.";
export const mainKeyword = "best 40 degree synthetic sleeping bags";
export const introParagraphs = [
  "Synthetic fill is the safer choice when a tent gets damp, and 40F is the classic summer and shoulder-season rating. Few listings state both clearly, so this guide covers three bags: a Kelty Cosmic Synthetic that names its fill, a Kelty Mistral that names Cloudloft, and a Coleman that does not name its fill.",
  "Because the list is short, each entry says plainly what the listing does and does not state. That keeps the choice honest for a first bag or a spare."
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
    "id": "best-40-degree-synthetic-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Kelty Cosmic Synthetic Fill 40 Degree Backpacking Sleeping Bag with Compression Straps",
    "price": "$77.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/319sFnqrvkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082P5VGGT?tag=rvgearlab-amz-20",
    "description": "Kelty prints the numbers on the Cosmic Synthetic: 24 oz of Cirroloft synthetic fill, a 2 lb 6 oz total weight and a 15 x 8 inch uncompressed stuff size. The 40 degree regular fits sleepers up to 6 feet, and an integrated compression sack is included.\n\nNext to the Kelty Mistral, it documents fill weight and packed size, so you can plan a pack around it. A spacious footbox and a stash pocket for a phone or headlamp are details the Coleman Biscayne does not list.\n\nA strong pick for summer backpackers and shoulder-season campers who want synthetic insulation they can read on paper. It suits damp climates where down is a worry.",
    "specs": [
      "40 degree synthetic, 24 oz fill",
      "2 lb 6 oz total weight",
      "15 x 8 in stuff size"
    ],
    "pros": [
      "Fill, weight and stuff size printed",
      "Integrated compression stuff sack",
      "Spacious footbox",
      "Stash pocket for small items"
    ],
    "cons": [
      "Rated only to 40 degrees",
      "Needs compression for small packs"
    ],
    "bestFor": "Summer synthetic backpackers",
    "take": "The only pick that prints fill weight, total weight and stuff size.",
    "catch": "At 40 degrees it is a warm-night bag, so cold snaps need something warmer."
  },
  {
    "id": "best-40-degree-synthetic-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Budget Kelty",
    "name": "Kelty Mistral Down Sleeping Bag",
    "price": "$69.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31a4bmitvsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DT282KB7?tag=rvgearlab-amz-20",
    "description": "The Mistral is a Kelty 3-season bag rated 40 degrees in the regular size, with 68D recycled taffeta polyester on shell and liner. The bullets name Cloudloft synthetic insulation and an offset quilt pattern that spreads fill evenly.\n\nIt costs less than the Kelty Cosmic Synthetic 40 and gives up the printed fill weight and stuff size. The offset quilt layout is a construction detail the Cosmic does not list.\n\nA good fit for casual campers who want Kelty quality at a lower price. The listing title says down, so read the fill label to be sure.",
    "specs": [
      "40 degree, Cloudloft fill",
      "68D recycled taffeta",
      "Offset quilt layout"
    ],
    "pros": [
      "Named Cloudloft synthetic insulation",
      "Recycled polyester shell and liner",
      "Offset quilting avoids cold spots",
      "Lower price than the Cosmic"
    ],
    "cons": [
      "Title says down, bullets say synthetic",
      "No weight or stuff size printed"
    ],
    "bestFor": "Budget Kelty buyers",
    "take": "A Kelty 40 degree bag with an evenly quilted layout at a lower cost.",
    "catch": "The title and bullets describe the fill differently, so read the tag before buying."
  },
  {
    "id": "best-40-degree-synthetic-sleeping-bags-3",
    "rank": 3,
    "badge": "Best for Tall Campers",
    "name": "Coleman Biscayne Big & Tall 40°F Sleeping Bag",
    "price": "$58.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41b6YDnnQDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D63ZTMH1?tag=rvgearlab-amz-20",
    "description": "The Coleman Biscayne is a 40F bag that fits adults up to 6 feet 4 inches. It has a Thermolock draft tube along the zipper, locking fasteners for rolling, and a stuff sack in the box.\n\nIt is the roomiest fit here and the lowest in price of the three, with machine washable care. The Kelty bags list their fill by name, which this listing leaves out.\n\nA sensible pick for taller campers who car camp in mild weather and do not need a pack-friendly size. It cleans easily in a home washer.",
    "specs": [
      "40F, fits to 6 ft 4 in",
      "Thermolock draft tube",
      "Machine washable"
    ],
    "pros": [
      "Fits campers to 6 ft 4 in",
      "Draft tube along the zipper",
      "Machine washable",
      "Locking fasteners ease packing"
    ],
    "cons": [
      "Fill type is not named",
      "No weight or packed size printed"
    ],
    "bestFor": "Tall car campers",
    "take": "The tallest fit and the easiest care of the three.",
    "catch": "The listing never names the fill, so check the tag for synthetic before relying on it."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fill clarity",
    "description": "We checked whether each listing names its insulation or leaves the reader guessing."
  },
  {
    "title": "Printed numbers",
    "description": "We looked for fill weight, total weight and stuff size, which let you plan a pack."
  },
  {
    "title": "Rating scope",
    "description": "We read the 40 degree figure as a season-limited number and noted the season label."
  },
  {
    "title": "Fit height",
    "description": "We compared stated sleeper heights, since a short bag chills your feet."
  },
  {
    "title": "Care and price",
    "description": "We weighed washing instructions and price between the three."
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
    "subheading": "By Camping Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Backpacking on a summer trip",
          "Kelty Cosmic Synthetic 40",
          "Prints weight and stuff size"
        ],
        [
          "Budget car camping",
          "Kelty Mistral 40F",
          "Lower price with named synthetic fill"
        ],
        [
          "Tall camper in a car camp",
          "Coleman Biscayne 40F Big & Tall",
          "Fits to 6 ft 4 in"
        ],
        [
          "Damp climate, want named fill",
          "Kelty Cosmic Synthetic 40",
          "Names Cirroloft synthetic"
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
          "Coleman Biscayne 40F Big & Tall"
        ],
        [
          "$60 to $70",
          "Kelty Mistral 40F"
        ],
        [
          "$70 to $80",
          "Kelty Cosmic Synthetic 40"
        ]
      ]
    }
  },
  {
    "subheading": "Named Fill vs Unnamed Fill",
    "cards": [
      {
        "label": "Named",
        "text": "The Kelty Cosmic Synthetic 40 and Kelty Mistral 40F both name their insulation, so you know what you are buying."
      },
      {
        "label": "Unnamed",
        "text": "The Coleman Biscayne 40F Big & Tall does not name its fill on the listing, so you rely on the tag and brand."
      }
    ],
    "note": "Choose the Kelty Cosmic Synthetic 40 for documented synthetic fill and the Coleman Biscayne 40F Big & Tall for a long fit at a low price."
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
          "Under 60 dollars",
          "Coleman Biscayne 40F Big & Tall"
        ],
        [
          "60 to 70 dollars",
          "Kelty Mistral 40F"
        ],
        [
          "Over 70 dollars, best documentation",
          "Kelty Cosmic Synthetic 40"
        ]
      ]
    }
  },
  {
    "subheading": "Damp-Weather Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A named synthetic fill and a water-resistant shell."
      },
      {
        "label": "In this comparison",
        "text": "The Kelty Cosmic Synthetic 40 names Cirroloft, and the Kelty Mistral 40F lists a recycled taffeta shell with Cloudloft fill."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Kelty Cosmic Synthetic 40 if you carry the bag and want printed weight and stuff size."
      },
      {
        "label": "Save if",
        "text": "Save with the Coleman Biscayne 40F Big & Tall for car camping, where pack size does not matter."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What synthetic fill does well",
    "explanation": "Synthetic insulation keeps more warmth when damp and dries faster than down. It is also easier to wash and usually costs less. Look for a named fill such as Cirroloft or Cloudloft rather than a vague label like polyester fiber."
  },
  {
    "criterion": "What 40 degrees means",
    "explanation": "A 40 degree rating is a lower limit for a typical sleeper, so comfort sits warmer. It suits summer and mild fall nights. Treat it as a summer bag and carry a liner for cool spells."
  },
  {
    "criterion": "Fill weight and packed size",
    "explanation": "Fill weight tells you how much insulation is inside, and stuff size tells you how much pack space it takes. A bag with 24 oz of fill and a 15 x 8 inch stuff size is easy to plan around. If a listing prints neither, weigh and measure it yourself."
  },
  {
    "criterion": "Quilted layout",
    "explanation": "How the fill is stitched decides whether cold spots form at the seams. Offset quilting spreads the fill evenly, while shifting fill leaves thin areas. Check the listing for the construction method by name."
  },
  {
    "criterion": "Fit and footbox",
    "explanation": "A tight footbox pins your toes and chills them. Look for a stated fit height and a spacious or natural footbox. Taller campers should compare the printed length to their own."
  }
];

export const faq = [
  {
    "q": "Is a 40 degree synthetic bag enough for summer?",
    "a": "Yes for most summer nights and mild shoulder seasons. Below about 45F you will want a liner or layers. The Kelty Cosmic Synthetic 40 is labeled 2-season for that reason."
  },
  {
    "q": "What do buyers get wrong about synthetic bags?",
    "a": "They assume all synthetic fill is the same. Fill weight, quilting and shell all change warmth. Compare the printed numbers, not just the word synthetic."
  },
  {
    "q": "Is the Kelty Cosmic worth over the Mistral?",
    "a": "If you backpack, yes, because it prints weight and stuff size. For car camping, the Kelty Mistral 40F is cheaper and does the basics. Read the fill label on either."
  },
  {
    "q": "How do I set up a bag in a tent?",
    "a": "Shake it out before bed so the fill lofts, and lay it over a pad. Keep it off damp tent walls. Use the compression sack only for transport."
  },
  {
    "q": "How do I store a synthetic bag?",
    "a": "Store it loose in a large breathable sack, not compressed. Wash on gentle cold if the label allows, as the Coleman Biscayne 40F Big & Tall states. Dry it fully first."
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
