export const guideSlug = "best-hot-tents";
export const guideTitle = "3 Best Hot Tents in 2026";
export const metaTitle = "Best Hot Tents in 2026";
export const metaDescription = "Best hot tents compared on size, stove jack design and listed weight, for campers choosing a first tent that can safely hold a wood stove.";
export const mainKeyword = "best hot tents";
export const introParagraphs = [
  "A hot tent is an ordinary tent with a heat-resistant opening for a stove pipe, and the choice between models comes down to size, weight and how the jack and fabric are built. The three tents below cover a large modular family shelter, a mid-size four-season dome and a light hammock-friendly tent.",
  "Listings for stoves that appeared next to these tents were left out, because a stove is an accessory and not a tent. What remains were compared on listed floor size, weight, waterproof detail and stove jack description."
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
    "id": "best-hot-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ABORON Hot Tent with Stove Jack",
    "price": "$135.62",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51xXtcQqVJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H6PYPJYJ?tag=rvgearlab-amz-20",
    "description": "The ABORON is a 2 to 4 person four-season tent with 68 sq ft of interior and a stove jack described as compatible with most camping stoves. The fabric is PU3000mm waterproof with reinforced seams, and large mesh windows help control condensation.\n\nIt states a floor area and a waterproof number, where the REDCAMP states weight and the Naturehike Dune states modes. It sits well below the Dune on price and a little above the REDCAMP.\n\nIt suits a couple or small group that wants a first hot tent with a real stove jack and a quick setup. It also works for road trips and weekend camps.",
    "specs": [
      "68 sq ft interior",
      "PU3000mm waterproof",
      "Stove jack for most stoves"
    ],
    "pros": [
      "Stated 68 sq ft floor area",
      "PU3000mm fabric with reinforced seams",
      "Large mesh windows cut condensation",
      "Packs for backpacks and road trips"
    ],
    "cons": [
      "Weight is not given in the listing",
      "Pipe size is not named"
    ],
    "bestFor": "First hot tent for 2 to 4",
    "take": "A clear floor area and a waterproof number at a mid price.",
    "catch": "The listing gives no weight or pipe diameter, so check both."
  },
  {
    "id": "best-hot-tents-2",
    "rank": 2,
    "badge": "Best Light Option",
    "name": "REDCAMP Large Hammock Hot Tent with Stove Jack for Camping",
    "price": "$107.19",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31D0O9UeYQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DMN3RS51?tag=rvgearlab-amz-20",
    "description": "The REDCAMP measures 11.8 x 6.6 x 6.2 ft and weighs 7.9 lb, with 210T polyester grid fabric and two stove jack openings for compatible wood or pellet stoves. Both doors use a three-zipper design, and six stainless triangular attachment points help it hold in wind.\n\nIt is the lightest tent here with a stated weight and the lowest price of the three. Compared with the ABORON it gives a longer, narrower footprint, and against the Dune it gives a fraction of the price.\n\nIt suits hammock campers and lightweight hot-tent users who want a long shelter with two jacks. The dual jacks allow a stove on either end.",
    "specs": [
      "7.9 lb listed weight",
      "11.8 x 6.6 x 6.2 ft",
      "Two stove jack openings"
    ],
    "pros": [
      "Stated weight of 7.9 pounds",
      "Two stove jacks for stove placement",
      "Three-zipper doors for hammock setups",
      "Lowest price in this list"
    ],
    "cons": [
      "Narrow 6.6 ft width for sleeping pads",
      "Waterproof rating is not named"
    ],
    "bestFor": "Hammock and lightweight users",
    "take": "A light, two-jack tent that works for hammocks and ground sleepers.",
    "catch": "The listing names no waterproof rating."
  },
  {
    "id": "best-hot-tents-3",
    "rank": 3,
    "badge": "Best Modular Shelter",
    "name": "Naturehike Dune Hot Tent with Stove Jack",
    "price": "$354.29",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31D7h6NN-NL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FPXBNJB6?tag=rvgearlab-amz-20",
    "description": "The Naturehike Dune measures 14.5 x 9.1 x 6.8 ft and offers four camping modes, from fully enclosed to full mesh. It adds three more setups with a canopy, six mesh doors and a fiberglass stove jack that the listing says resists yellowing.\n\nIt is by far the roomiest tent in the list and the only one with convertible modes. The ABORON undercuts it on price by a wide margin, while the REDCAMP undercuts it on weight.\n\nIt fits families and groups who want a shelter that shifts from winter hot tent to summer screen house. The canopy extends shade and rain cover.",
    "specs": [
      "14.5 x 9.1 x 6.8 ft living space",
      "Four camping modes",
      "Fiberglass stove jack"
    ],
    "pros": [
      "Roomiest size by a wide margin",
      "Four modes plus canopy setups",
      "Six mesh doors for airflow",
      "Stove jack that resists yellowing"
    ],
    "cons": [
      "Highest price in the list",
      "Large size means a long pitch"
    ],
    "bestFor": "Families and year-round use",
    "take": "A roomy modular tent that works in winter and summer.",
    "catch": "The spend is high and the footprint is large."
  }
];

export const howWeEvaluated = [
  {
    "title": "Floor area",
    "description": "Interior dimensions and square footage were compared for real sleeping room."
  },
  {
    "title": "Stove jack design",
    "description": "The jack material and stove compatibility were read from each listing."
  },
  {
    "title": "Weight and pack size",
    "description": "Stated weights were compared where given."
  },
  {
    "title": "Fabric and waterproofing",
    "description": "Denier, coating and waterproof numbers were weighed."
  },
  {
    "title": "Ventilation",
    "description": "Mesh panels and doors were counted for moisture control."
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
          "Couple, first hot tent",
          "ABORON Hot Tent",
          "68 sq ft with a waterproof rating."
        ],
        [
          "Solo or hammock camper",
          "REDCAMP Hammock Hot Tent",
          "7.9 lb with two jacks."
        ],
        [
          "Family or group",
          "Naturehike Dune",
          "14.5 ft long with modular modes."
        ],
        [
          "Weekend road trips",
          "ABORON Hot Tent",
          "Packs for backpacks and car."
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
          "$100 to $110",
          "REDCAMP Hammock Hot Tent"
        ],
        [
          "$130 to $140",
          "ABORON Hot Tent"
        ],
        [
          "$350 to $360",
          "Naturehike Dune"
        ]
      ]
    }
  },
  {
    "subheading": "Compact Tent vs Modular Shelter",
    "cards": [
      {
        "label": "Compact",
        "text": "The ABORON Hot Tent and REDCAMP Hammock Hot Tent are smaller, lighter and cheaper, and they heat faster."
      },
      {
        "label": "Modular",
        "text": "The Naturehike Dune gives a large living space with canopy modes, but it costs more and takes more effort to pitch."
      }
    ],
    "note": "Most first-time buyers should start with the ABORON Hot Tent."
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
          "Lowest spend",
          "REDCAMP Hammock Hot Tent"
        ],
        [
          "Mid spend",
          "ABORON Hot Tent"
        ],
        [
          "Top spend",
          "Naturehike Dune"
        ]
      ]
    }
  },
  {
    "subheading": "For Cold-Weather Campers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stove jack, a waterproof number and enough vents."
      },
      {
        "label": "In this comparison",
        "text": "The ABORON Hot Tent lists PU3000mm and mesh windows, and the Naturehike Dune lists six mesh doors."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Naturehike Dune if you want room and modular modes."
      },
      {
        "label": "Save if",
        "text": "Save with the REDCAMP Hammock Hot Tent for a light tent, or the ABORON Hot Tent for the best value."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Jack and stove match",
    "explanation": "A stove jack is an opening, not approval for a stove. The stove maker and tent maker must agree on pipe diameter and clearance. Look for the pipe diameter in the listing and match it to the stove manual."
  },
  {
    "criterion": "Carbon monoxide risk",
    "explanation": "Burning wood in a tent produces carbon monoxide, which is odorless. Always keep vents open and use a battery CO alarm. This is general safety guidance, not a listing claim."
  },
  {
    "criterion": "Clearance and spark risk",
    "explanation": "Flames and hot pipes ignite fabric. Keep stoves on a fireproof base and a spark arrestor on the chimney. Look for fire-retardant fabric mentions and a fireproof mat."
  },
  {
    "criterion": "Size for stove plus gear",
    "explanation": "A stove takes floor and walk space. Allow roughly 15 sq ft for the stove and clearance. Compare the listed square footage with your party size."
  },
  {
    "criterion": "Condensation control",
    "explanation": "Warm interiors meet cold walls and create drips. Mesh vents and a double wall reduce this. Look for roof vents and mesh windows."
  },
  {
    "criterion": "Weight and carry",
    "explanation": "Stove tents run heavier than normal tents, so the stove, pipe and fuel come on top. A tent near 8 pounds suits sled or walk-in trips better than a larger shelter. Check the stated weight and packed size before you buy."
  }
];

export const faq = [
  {
    "q": "Can I use any stove in a hot tent?",
    "a": "No. Use a stove that the tent and stove makers approve for the jack size. The ABORON Hot Tent lists compatibility with most stoves, but check the pipe diameter."
  },
  {
    "q": "What is the biggest hot tent mistake?",
    "a": "Sleeping with the stove burning. Carbon monoxide can build up, so keep vents open and use an alarm."
  },
  {
    "q": "Is the Dune worth the extra cost over the ABORON?",
    "a": "Choose the Dune for size and canopy modes. The ABORON gives a clear value for couples and small groups."
  },
  {
    "q": "How do I set up a stove in a hot tent?",
    "a": "Pitch taut, place the stove on a fireproof base, run the pipe through the jack and fit a spark arrestor. Keep gear clear."
  },
  {
    "q": "How do I care for a hot tent after use?",
    "a": "Let it cool, brush off ash and dry the fabric fully. Inspect the jack for scorching before the next trip."
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
