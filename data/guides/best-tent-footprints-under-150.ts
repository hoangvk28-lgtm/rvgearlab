export const guideSlug = "best-tent-footprints-under-150";
export const guideTitle = "5 Best Tent Footprints Under 150 in 2026";
export const metaTitle = "Best Tent Footprints Under 150 in 2026";
export const metaDescription = "Best tent footprints under $150: five ground tarps, from a 2-person MSR to tailored Gazelle and CORE big-tent sheets, compared on fit and value.";
export const mainKeyword = "best tent footprints under 150";
export const introParagraphs = [
  "Raising the cap to $150 does not buy a better universal footprint so much as it opens the door to sheets cut for large and specific tents. The five here run from about $30 to just under $95, and they split between a compact 2-person footprint and big-tent floor guards.",
  "The ranking asks what the extra budget over a $75 universal sheet actually buys. The top spot goes to the footprint with the best fit-for-money across tent sizes, and the larger sheets are placed by which tent they suit."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/home-golden-hour-campsite.webp";
export const heroImageAlt = "Dome tent and hammock at a forest campsite at golden hour";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-tent-footprints-under-150-1",
    "rank": 1,
    "badge": "Best Value Under $150",
    "name": "MSR Universal Tent Footprint",
    "price": "$49.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/91HaauPhWpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CS48M6S3?tag=rvgearlab-amz-20",
    "description": "The MSR Universal Footprint is a large 2-person sheet that fits the Zoic 2, Remote 2, Guideline Pro 2 and Hubba Tour 2 tents or any similar size. It weighs about 0.5 pounds and measures 85 by 51 inches.\n\nIt costs about $50, roughly $30 more than a basic ripstop sheet, and it carries the only spec sheet here written around backpacking tents. It is much lighter than the Kodiak 10x10 or the CORE 16.5x11.5, which are camp-only sheets.\n\nIt suits two-person tent owners who hike to camp and want a trusted brand footprint. It also fits other tents near 85 by 51 inches.",
    "specs": [
      "85 x 51 in, 0.5 lb",
      "Fits four MSR 2P tents",
      "Lightweight and durable"
    ],
    "pros": [
      "Weighs only about half a pound",
      "Fits several MSR tent models",
      "Protects against water and wear",
      "Packs to 10 inch length"
    ],
    "cons": [
      "Too small for family tents",
      "Costs more than generic sheets"
    ],
    "bestFor": "2-person backpacking tents",
    "take": "The pick for hikers who want a light, brand-matched footprint.",
    "catch": "Check your tent footprint, since it is cut for MSR 2-person floors."
  },
  {
    "id": "best-tent-footprints-under-150-2",
    "rank": 2,
    "badge": "Best Heavy-Duty Tarp",
    "name": "Ground Tarp for Kodiak Canvas Tents",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51FCQH8VujL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G4BL8RCV?tag=rvgearlab-amz-20",
    "description": "The Kodiak Ground Tarp is a 10 by 10 foot sheet at 11 mil thickness, with rustproof aluminum grommets, plastic-reinforced corners and a rope-reinforced welded hem. It is waterproof, UV resistant and tear resistant.\n\nIt costs about $30, the cheapest here, and it is far thicker than the ripstop of the MSR Universal 2P Large. It is heavy, which suits drive-up camping and canvas tents more than hiking.\n\nIt suits owners of smaller Kodiak canvas tents and anyone who wants a tough ground cover for a tent. The thick poly also works as a picnic sheet.",
    "specs": [
      "10 x 10 ft, 11 mil",
      "Aluminum grommets",
      "Welded rope hem"
    ],
    "pros": [
      "Thick 11 mil body resists punctures",
      "Rustproof aluminum grommets",
      "Rope-reinforced welded hem",
      "Lowest price in the group"
    ],
    "cons": [
      "Heavy and stiff to pack",
      "Sized for Kodiak tents"
    ],
    "bestFor": "Canvas and car-camping tents",
    "take": "A tough, cheap ground tarp for tents that stay put.",
    "catch": "Skip it for backpacking, where the weight adds up fast."
  },
  {
    "id": "best-tent-footprints-under-150-3",
    "rank": 3,
    "badge": "Best For Cabin Tents",
    "name": "CORE Outdoor Tent Footprints",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31r3K+kx+ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09HY9WL2Z?tag=rvgearlab-amz-20",
    "description": "The CORE Footprint measures 16 feet 6 inches by 11 feet 6 inches and is cut for the CORE 11-person cabin tent. Elastic loops at all corners make staking quick.\n\nIt costs about $50, the same as the MSR Universal 2P Large, and it is the largest sheet in this guide. It protects a big cabin floor from water and tears, and it also serves as a ground sheet at the picnic table.\n\nIt suits owners of the CORE 11-person cabin tent. It is too big to be useful with a smaller tent.",
    "specs": [
      "16.5 x 11.5 ft footprint",
      "Fits CORE 11 person cabin",
      "Elastic corner loops"
    ],
    "pros": [
      "Sized for an 11-person tent",
      "Elastic loops speed up staking",
      "Adds water and tear protection",
      "Doubles as a picnic ground sheet"
    ],
    "cons": [
      "Fits only one cabin tent model",
      "Bulky to pack"
    ],
    "bestFor": "11-person cabin tents",
    "take": "A big, matched floor guard for the CORE cabin tent.",
    "catch": "It only fits one tent model."
  },
  {
    "id": "best-tent-footprints-under-150-4",
    "rank": 4,
    "badge": "Best For 6-Person Tents",
    "name": "Marmot Footprint for Midpines 6-Person Tent",
    "price": "$60.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ILyZVOWkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B079MHFGKT?tag=rvgearlab-amz-20",
    "description": "The Marmot Footprint is cut for the Midpines 6-person tent. Corner stakeouts attach to the tent, and the sheet protects the floor from rocks, sticks and abrasion.\n\nIt costs about $60, above the CORE 16.5x11.5 Footprint and the MSR Universal 2P Large, and it is a smaller step up from them than the Gazelle sheets. Its price buys an exact floor match for a mid-size family tent.\n\nIt suits Midpines 6-person owners who camp on rocky ground. It is a floor guard and no more.",
    "specs": [
      "Cut for Midpines 6-person",
      "Corner stakeouts",
      "Protects floor from rocks"
    ],
    "pros": [
      "Matches the tent floor",
      "Attaches at the corners",
      "Guards against abrasion",
      "A good fit for mid-size family tents"
    ],
    "cons": [
      "Fits only the Midpines tent",
      "Costs more than the CORE sheet"
    ],
    "bestFor": "Midpines 6P owners",
    "take": "Right for one tent, wrong for every other.",
    "catch": "It is of no use to anyone who does not own the Midpines tent."
  },
  {
    "id": "best-tent-footprints-under-150-5",
    "rank": 5,
    "badge": "Best 300D For Large Tents",
    "name": "Gazelle Tents™",
    "price": "$94.81",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31GmOkBB4FL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08Z4CPDL5?tag=rvgearlab-amz-20",
    "description": "The Gazelle T4 Plus footprint is 300D Oxford polyester rated to 3,000mm hydrostatic head. Four tack-down stakes and a carry bag come with it.\n\nIt costs about $95, nearly double the CORE 16.5x11.5 Footprint, and it is the only footprint here with a stated waterproof rating. That rating is what the extra money buys over the other big-tent sheets.\n\nIt suits Gazelle T4 Plus and T8 owners who camp in wet weather. It is made for 8-person tents.",
    "specs": [
      "300D Oxford, 3000mm HH",
      "4 tack-down stakes",
      "Fits T4 Plus and T8"
    ],
    "pros": [
      "Stated 3,000mm waterproof rating",
      "Stakes hold it while you pitch",
      "Durable Oxford weave",
      "Carry bag included"
    ],
    "cons": [
      "Highest price in the group",
      "Fits only two Gazelle models"
    ],
    "bestFor": "Gazelle T4 Plus and T8",
    "take": "Pay this much only if you own a tent it is cut for.",
    "catch": "It is over-spec for any tent smaller than 8 persons."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fit for your tent",
    "description": "Each sheet was checked against the tent sizes and models it is cut for."
  },
  {
    "title": "Material and thickness",
    "description": "Thin ripstop, 11 mil poly and 300D Oxford were compared on durability."
  },
  {
    "title": "Pack weight",
    "description": "Backpacking sheets were separated from drive-up sheets."
  },
  {
    "title": "Stated waterproof rating",
    "description": "Only sheets with a stated rating were credited with a figure."
  },
  {
    "title": "Price against the cap",
    "description": "All five sit under $150, and the winner was chosen for value."
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
    "subheading": "By tent type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "2-person backpacking tent",
          "MSR Universal 2P Large",
          "About 0.5 lb and MSR-sized."
        ],
        [
          "Drive-up canvas or small tent",
          "Kodiak 10x10 Ground Tarp",
          "11 mil thickness and welded hem."
        ],
        [
          "CORE 11-person cabin tent",
          "CORE 16.5x11.5 Footprint",
          "Cut to the cabin floor."
        ],
        [
          "Midpines 6-person tent",
          "Marmot Midpines 6P Footprint",
          "Floor-shaped and staked at corners."
        ],
        [
          "Gazelle T4 Plus or T8",
          "Gazelle T4 Plus Footprint",
          "3,000mm rating and stakes."
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
          "$20 to $50",
          "Kodiak 10x10 Ground Tarp or MSR Universal 2P Large"
        ],
        [
          "$40 to $60",
          "CORE 16.5x11.5 Footprint or Marmot Midpines 6P Footprint"
        ],
        [
          "$90 to $100",
          "Gazelle T4 Plus Footprint"
        ]
      ]
    }
  },
  {
    "subheading": "Light footprint vs heavy tarp",
    "cards": [
      {
        "label": "Light footprint",
        "text": "The MSR Universal 2P Large weighs about 0.5 pound and suits hikers with a 2-person tent."
      },
      {
        "label": "Heavy tarp",
        "text": "The Kodiak 10x10 Ground Tarp, CORE 16.5x11.5 Footprint and Gazelle T4 Plus Footprint add thickness and area at the cost of bulk."
      }
    ],
    "note": "Choose the MSR Universal 2P Large if you carry it and the heavier sheets if you drive."
  },
  {
    "subheading": "By price tier",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $30",
          "Kodiak 10x10 Ground Tarp"
        ],
        [
          "About $50",
          "MSR Universal 2P Large"
        ],
        [
          "About $50",
          "CORE 16.5x11.5 Footprint"
        ],
        [
          "About $60",
          "Marmot Midpines 6P Footprint"
        ],
        [
          "About $95",
          "Gazelle T4 Plus Footprint"
        ]
      ]
    }
  },
  {
    "subheading": "For large family tents specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a footprint cut to your tent make and model, with corner loops and stated thickness or rating."
      },
      {
        "label": "In this comparison",
        "text": "The CORE 16.5x11.5 Footprint covers a cabin tent for about $50, while the Gazelle T4 Plus Footprint adds a 3,000mm rating at a higher tier."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you own a big tent and camp in rain: the Gazelle T4 Plus Footprint adds a stated 3,000mm rating, and the Marmot Midpines 6P Footprint gives an exact floor cut for a mid-size tent."
      },
      {
        "label": "Save if",
        "text": "Save if your tent is small or you rarely see mud: the Kodiak 10x10 Ground Tarp is about $30 and thick, and the MSR Universal 2P Large protects a 2-person tent for about $50."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What extra budget buys",
    "explanation": "Above $75, you stop buying a generic sheet and start buying a cut for a specific tent or a documented waterproof rating. A $30 sheet and a $95 sheet may both keep mud off, but only the second matches the floor of a large tent exactly. Decide whether fit or price matters more for your tent."
  },
  {
    "criterion": "Measure the tent floor",
    "explanation": "Footprints work best when they are 1 to 2 inches smaller than the floor on each side, because overhang channels rain beneath the tent. Measure the floor of your own tent, then compare with the dimensions in the product title. A 16.5 by 11.5 foot sheet will swamp a tent with a 10 by 10 foot floor."
  },
  {
    "criterion": "Hydrostatic head rating",
    "explanation": "A rating in millimeters shows how much water pressure a coating holds back. At 3,000mm, a coated Oxford footprint copes with pooled water beneath a heavy tent, while a thin sheet with no rating is only a dirt barrier. Look for the number in the title or specs."
  },
  {
    "criterion": "Weight if you hike",
    "explanation": "An MSR-style 0.5 pound footprint is carryable on a trail, while an 11 mil poly sheet or a 300D Oxford footprint is a car-camp item. Add the footprint weight to your base weight before you commit. If you drive to camp, weight matters far less."
  },
  {
    "criterion": "Anchoring and corners",
    "explanation": "Elastic loops, stake-out tabs and tack-down stakes keep a footprint from shifting when you step on the tent floor. A sheet without them can slide and bunch up beneath your sleeping area. Look at the corners in the product photos and at the included-items line to see which anchors come with it."
  }
];

export const faq = [
  {
    "q": "Is a footprint worth buying for a big tent?",
    "a": "A big-tent floor is expensive and heavy, so a footprint is cheap protection for it. The CORE 16.5x11.5 Footprint costs about $50 and takes the rock and mud abuse instead of the floor. Sheets cut to the model also stop edge rain from pooling."
  },
  {
    "q": "Can I use a footprint made for another tent?",
    "a": "Only if the dimensions are within 1 to 2 inches smaller than your floor. The MSR Universal 2P Large fits similar-size tents, but the Gazelle T4 Plus Footprint is cut only for the T4 Plus and T8. Always measure before ordering."
  },
  {
    "q": "Is the MSR worth the same money as the CORE?",
    "a": "They serve different tents, so it depends on size. The MSR is a light 2-person sheet for hikers, and the CORE is a huge sheet for cabin tents. Pick by your tent, not by brand."
  },
  {
    "q": "How do I pitch the tent on a footprint?",
    "a": "Lay the footprint flat, stake or loop the corners, then pitch the tent on top and tuck any overhang under. The Gazelle T4 Plus Footprint comes with tack-down stakes to hold it while you set up. Smooth out wrinkles so water does not pool."
  },
  {
    "q": "How do I maintain a footprint?",
    "a": "Brush off dirt after each trip and let the sheet dry fully before folding. Store it flat or rolled loosely so coatings do not crack. Poly sheets such as the Kodiak 10x10 Ground Tarp can be hosed down."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Tent Footprints",
    "href": "/tents-shelter/best-tent-footprints"
  },
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
  }
];
