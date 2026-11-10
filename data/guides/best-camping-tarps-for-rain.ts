export const guideSlug = "best-camping-tarps-for-rain";
export const guideTitle = "3 Best Camping Tarps For Rain in 2026";
export const metaTitle = "Best Camping Tarps For Rain in 2026";
export const metaDescription = "Best camping tarps for rain compared on coating ratings, seams, tie-out points and coverage for staying dry at campsites in wet weather.";
export const mainKeyword = "best camping tarps for rain";
export const introParagraphs = [
  "A rain tarp is a roof made of tensioned fabric, so the numbers that matter are its coating rating, how many tie-out points it has and how much ground it covers. Sheet size alone does not keep you dry.",
  "Three tarps made the list, each with a stated waterproof rating or sealing method in its listing. Duplicate colour versions of the same FREE SOLDIER tarp were merged into one pick."
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
    "id": "best-camping-tarps-for-rain-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Gold Armour Rainfly Tarp Hammock",
    "price": "$35.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41EM7nhQa7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07C3PWWX7?tag=rvgearlab-20",
    "description": "The Gold Armour rainfly has a 5,000mm waterproof rating, 33 tie-down points and 2 centerlines. The package includes stakes, ropes and tensioners, and it comes in several sizes from 8 ft up to 14.7 ft.\n\nIts 5,000mm rating is the highest of the three, and the 33 tie-outs give far more pitch options than the FREE SOLDIER's 19 guy points. Compared with the GEERTOP, it trades some coverage area for more rating.\n\nBackpackers and campers who want one rain shelter for a wide range of pitches will like it. The size options let you match the tarp to the group.",
    "specs": [
      "5,000mm waterproof rating",
      "33 tie-down points",
      "Stakes, ropes, tensioners"
    ],
    "pros": [
      "Highest waterproof rating listed",
      "33 tie-downs for many pitches",
      "Multiple sizes to choose",
      "Stakes and tensioned ropes included"
    ],
    "cons": [
      "Size must be chosen carefully",
      "Fabric weight is not named"
    ],
    "bestFor": "Flexible rain shelters",
    "take": "The highest-rated rain tarp here, with the most tie-out points.",
    "catch": "The listing offers several sizes, so picking the right one decides how dry you stay."
  },
  {
    "id": "best-camping-tarps-for-rain-2",
    "rank": 2,
    "badge": "Best Coverage",
    "name": "GEERTOP 17 x 10 ft Camping Tarp",
    "price": "$51.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ozLOrD9LL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09MTMQF98?tag=rvgearlab-20",
    "description": "The GEERTOP covers 172 sq ft in 17 x 10 ft of 210T ripstop polyester with a PU3000mm coating. Reinforced corners, webbing edge construction and multiple tie-out points are included, along with reflective guylines and aluminum stakes.\n\nIt is the largest of the three and the only one aimed at family camping and vehicle camping. Against the Gold Armour it gives more area with a lower waterproof rating.\n\nFamilies and groups who need rain cover for a table and chairs benefit most. The reflective guylines help you see them in the dark.",
    "specs": [
      "17 x 10 ft, 172 sq ft",
      "210T ripstop, PU3000mm",
      "Reflective guylines, stakes"
    ],
    "pros": [
      "Biggest coverage of the three",
      "Reinforced corners and webbing edges",
      "Reflective guylines help at night",
      "Aluminum stakes included"
    ],
    "cons": [
      "Lower rating than the Gold Armour",
      "Highest price of the three"
    ],
    "bestFor": "Family rain shelter",
    "take": "The largest rain tarp, built for tables and families.",
    "catch": "At 17 x 10 ft, it needs strong anchor trees or poles at both ends."
  },
  {
    "id": "best-camping-tarps-for-rain-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "FREE SOLDIER Waterproof Camping Tarp Shelter Awning",
    "price": "$33.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VqRwUyp4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DZ2D3K4T?tag=rvgearlab-20",
    "description": "The FREE SOLDIER is a 118 by 126 inch ripstop polyester tarp with a 3000 PU waterproof rating, heat-sealed seams and a reinforced ridgeline seam. It has 19 guy points and ships with four tensioned guylines plus a stuff sack.\n\nIt covers two people and is the least costly of the three. Against the GEERTOP it gives less area and still keeps the heat-sealed seams.\n\nSolo and two-person campers who want a compact rain roof use it well. It is also sold in brown with a 210T fabric listing.",
    "specs": [
      "10 x 10.5 ft, PU 3000",
      "Heat-sealed seams",
      "19 guy points, 4 lines"
    ],
    "pros": [
      "Heat-sealed seams stop leaks",
      "Reinforced ridgeline seam",
      "19 guy points",
      "Lowest price in this group"
    ],
    "cons": [
      "Covers about two people only",
      "Stakes are not listed in the kit"
    ],
    "bestFor": "Solo and two-person camps",
    "take": "A compact rain roof with sealed seams at the lowest price.",
    "catch": "Stakes are not named in the listing, so bring your own."
  }
];

export const howWeEvaluated = [
  {
    "title": "Coating rating",
    "description": "Listings with a stated millimeter rating were ranked ahead of those without one."
  },
  {
    "title": "Seams",
    "description": "Heat-sealed or taped seams were credited since stitching leaks otherwise."
  },
  {
    "title": "Tie-outs and pitches",
    "description": "Tie-down counts and included cord shape how a tarp can be rigged."
  },
  {
    "title": "Coverage",
    "description": "Stated dimensions were compared against the number of people."
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
    "subheading": "By rain exposure",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Long storms, strong winds",
          "Gold Armour Rainfly Tarp",
          "5,000mm rating and 33 tie-outs"
        ],
        [
          "Family table in the rain",
          "GEERTOP 17 x 10 ft Rain Fly Tarp",
          "172 sq ft of PU3000mm cover"
        ],
        [
          "Two campers, light pack",
          "FREE SOLDIER 10 x 10.5 ft Tarp",
          "Heat-sealed seams on a compact sheet"
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
          "FREE SOLDIER 10 x 10.5 ft Tarp"
        ],
        [
          "$30 to $40",
          "Gold Armour Rainfly Tarp"
        ],
        [
          "$50 to $60",
          "GEERTOP 17 x 10 ft Rain Fly Tarp"
        ]
      ]
    }
  },
  {
    "subheading": "Big sheet vs high rating",
    "cards": [
      {
        "label": "Big sheet",
        "text": "More coverage keeps people and gear dry, but the load on anchors rises. GEERTOP 17 x 10 ft Rain Fly Tarp is the example."
      },
      {
        "label": "High rating",
        "text": "A stronger coating resists leakage under heavy downpours. Gold Armour Rainfly Tarp is the highest at 5,000mm."
      }
    ],
    "note": "For heavy rain choose Gold Armour Rainfly Tarp, and for large group coverage choose GEERTOP 17 x 10 ft Rain Fly Tarp."
  },
  {
    "subheading": "By setup flexibility",
    "table": {
      "headers": [
        "If you want",
        "Recommended pick"
      ],
      "rows": [
        [
          "The most pitch options",
          "Gold Armour Rainfly Tarp"
        ],
        [
          "Reflective guylines",
          "GEERTOP 17 x 10 ft Rain Fly Tarp"
        ],
        [
          "Simple four-line setup",
          "FREE SOLDIER 10 x 10.5 ft Tarp"
        ]
      ]
    }
  },
  {
    "subheading": "For a rain-soaked camp kitchen Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "At least 150 sq ft of coverage, a stated rating and enough tie-outs to rig a steep angle."
      },
      {
        "label": "In this comparison",
        "text": "GEERTOP 17 x 10 ft Rain Fly Tarp gives 172 sq ft with PU3000mm, and Gold Armour Rainfly Tarp adds 33 tie-outs for steep pitches."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on GEERTOP 17 x 10 ft Rain Fly Tarp if you need table-size coverage, or Gold Armour Rainfly Tarp for the highest rating and flexibility."
      },
      {
        "label": "Save if",
        "text": "Save with FREE SOLDIER 10 x 10.5 ft Tarp when you only need a two-person roof with sealed seams."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Millimeter coating rating",
    "explanation": "This figure shows how much water pressure the coating resists before it leaks, so 3000mm or 5,000mm is stronger than 1500mm. Many listings skip it. Look for the number in the title, the bullets or the spec table."
  },
  {
    "criterion": "Seam treatment",
    "explanation": "Sewn seams leave tiny holes that leak without tape or heat sealing. A great coating cannot fix that. Check for taped or heat-sealed seams."
  },
  {
    "criterion": "Tie-out points",
    "explanation": "More tie-outs let you angle the tarp low to the wind and make a ridge or lean-to. Few points limit your pitch. Look for the number of loops or guy points."
  },
  {
    "criterion": "Coverage and pitch angle",
    "explanation": "A tarp needs overhang past what you want to cover, and a steep pitch sheds water faster. Compare listed dimensions with your table or sleeping area. Look for feet or inches, not just a size name."
  },
  {
    "criterion": "Fabric type",
    "explanation": "Ripstop polyester and nylon resist tears that start at a puncture. Denier or T rating hints at weight. Look for the weave, the denier and any reinforced corners."
  }
];

export const faq = [
  {
    "q": "What rating should a rain tarp have?",
    "a": "Look for at least 3000mm, which the GEERTOP and FREE SOLDIER state, and ideally more, as the Gold Armour's 5,000mm shows. Seam sealing matters as much as the number. Skip tarps with no stated rating."
  },
  {
    "q": "What is the common rain tarp mistake?",
    "a": "Pitching it flat. A flat tarp pools water and sags, so set one end low. Keep the angle steep."
  },
  {
    "q": "Is the Gold Armour worth it over the GEERTOP?",
    "a": "For rating and pitch options, yes. For group coverage, the GEERTOP gives more area. Choose by whether size or rating matters more."
  },
  {
    "q": "How do I rig a tarp for rain?",
    "a": "Run a ridgeline between two anchors, drape the tarp and stake out the corners. Angle one side lower. Tension the guylines evenly."
  },
  {
    "q": "How do I stop condensation under a tarp?",
    "a": "Leave a gap at the ends so air moves. Avoid sealing the tarp to the ground on all sides. Dry gear outside the sleeping area."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
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
  },
  {
    "title": "Best 4 Season Tent Under 300",
    "href": "/tents-shelter/best-4-season-tent-under-300"
  }
];
