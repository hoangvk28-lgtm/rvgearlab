export const guideSlug = "best-backpacking-quilts";
export const guideTitle = "5 Best Backpacking Quilts in 2026";
export const metaTitle = "Best Backpacking Quilts in 2026";
export const metaDescription = "Best backpacking quilts compared on down or synthetic fill, listed weight, printed comfort ratings and footbox design for ultralight hikers.";
export const mainKeyword = "best backpacking quilts";
export const introParagraphs = [
  "A backpacking quilt drops the back insulation that your pad already provides, which saves weight and gives you room to move. The quilts here range from a 1 lb 11.2 oz down model to a 35 oz synthetic, and two cheaper down blankets are included as nearest fits.",
  "Each is ranked on printed comfort or limit ratings, fill and weight, and footbox and strap features. Listings that show no ISO figure are flagged so you can plan around them."
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
    "id": "best-backpacking-quilts-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Sierra Designs Cloud Quilt 20 Degree Down Backpacking Quilt",
    "price": "$199.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31lQ1OayZ4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GMS2PMWL?tag=rvgearlab-20",
    "description": "The Sierra Designs Cloud Quilt 20 is an ultralight quilt with 800 fill power DriDown, 14.78 oz of fill and a trail weight of 1 lb 11.2 oz. Its tech specs give an ISO comfort of 32 degrees F and an ISO limit of 21 degrees F, with a 15D nylon ripstop shell.\n\nIt is the only quilt here with ISO figures and a hideaway hood, and its tapered footbox and insulated hand pockets add wearability that the others lack. It costs the most of the five.\n\nIt suits thru-hikers and ultralight backpackers who sleep restlessly in mummies. Pair it with a pad rated for the same temperatures.",
    "specs": [
      "800 fill DriDown, 14.78 oz",
      "1 lb 11.2 oz trail weight",
      "ISO comfort 32F, limit 21F"
    ],
    "pros": [
      "ISO comfort and limit ratings printed",
      "800 fill DriDown handles damp better",
      "Hideaway hood and hand pockets",
      "Tapered footbox cuts drafts"
    ],
    "cons": [
      "Highest price in the list",
      "Three-season, not winter, rating"
    ],
    "bestFor": "Thru-hiking and ultralight",
    "take": "The most complete quilt here, with ISO ratings and a hood.",
    "catch": "It is a premium purchase, so budget hikers should look lower."
  },
  {
    "id": "best-backpacking-quilts-2",
    "rank": 2,
    "badge": "Best Light Down Value",
    "name": "Ultralight Sleeping Bag Top Quilt",
    "price": "$134.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41DKmGDLfTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DDD6KNW6?tag=rvgearlab-20",
    "description": "The SENSORY4U top quilt uses 850 fill power down, weighs 1.9 lb and lists a comfort rating of 30 degrees F with a survival rating of 20 degrees F. A foot box and straps for attaching to a sleeping pad are included.\n\nIt carries a higher fill power than the Sierra Designs, weighs about 3 oz more and costs far less. A hood and hand pockets are absent.\n\nIt suits backpackers who want down warmth at a lower price. The pad straps keep it from sliding.",
    "specs": [
      "850 fill power down",
      "1.9 lb, comfort 30F",
      "Foot box and pad straps"
    ],
    "pros": [
      "Higher 850 fill power",
      "Comfort 30F and survival 20F printed",
      "Foot box included",
      "Straps attach it to your pad"
    ],
    "cons": [
      "No hood or hand pockets",
      "Ratings are brand figures"
    ],
    "bestFor": "Light down on a mid budget",
    "take": "Strong down numbers at a much lower price.",
    "catch": "The ratings are the brand's own, not an ISO test."
  },
  {
    "id": "best-backpacking-quilts-3",
    "rank": 3,
    "badge": "Best Synthetic Quilt",
    "name": "OneTigris Featherlite Ultralight Sleeping Quilt",
    "price": "$67.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Dirx4B+-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07TX14FQJ?tag=rvgearlab-20",
    "description": "The OneTigris Featherlite is a synthetic quilt using SEE polyester fill, a 20D ripstop nylon shell and a 380T pongee lining, weighing 35 oz. It has a convertible footbox, a hollowed back design for use with sleeping mats and a baffled build rated down to 41 degrees F.\n\nIt is the only synthetic quilt here and the heaviest of the true quilts. It can be layered with a bag or underquilt for winter.\n\nIt suits hikers who want a durable, damp-tolerant quilt at a low price. Two near-identical listings were merged.",
    "specs": [
      "SEE polyester fill, 35 oz",
      "Convertible footbox",
      "Rated to 41F"
    ],
    "pros": [
      "Synthetic fill handles damp",
      "Convertible footbox",
      "Hollowed back works with pads",
      "Layers with a bag or underquilt"
    ],
    "cons": [
      "Rated only to 41F",
      "Heavier than the down quilts"
    ],
    "bestFor": "Budget damp-weather quilting",
    "take": "The budget synthetic quilt with a flexible footbox.",
    "catch": "Its 41F rating is cool, not cold, and the 35 oz weight is not ultralight."
  },
  {
    "id": "best-backpacking-quilts-4",
    "rank": 4,
    "badge": "Best Packable Blanket",
    "name": "Get Out Gear Down Camping Blanket",
    "price": "$67.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41U35pJ1b8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07VZLB1HL?tag=rvgearlab-20",
    "description": "The Get Out Gear down blanket uses 650 fill power down in a 20D ripstop shell with a DWR coating, measuring 80 by 54 inches and weighing 1.1 lb. Snaps convert it into a poncho.\n\nIt packs into a 5 by 12 inch stuff sack and costs far less than the Sierra Designs. It is a blanket, not a rated quilt, so it prints no temperature figure.\n\nIt suits campers who want a light down layer for camp and as a supplement to a bag. It is a nearest-fit quilt.",
    "specs": [
      "650 fill down, 1.1 lb",
      "80 x 54 inch blanket",
      "Snaps convert to a poncho"
    ],
    "pros": [
      "Light at 1.1 lb",
      "Stuff sack is 5 x 12 inches",
      "Snaps convert it to a poncho",
      "DWR-coated 20D shell"
    ],
    "cons": [
      "No temperature rating printed",
      "Blanket without a footbox"
    ],
    "bestFor": "Camp warmth and layering",
    "take": "A cheap, packable down layer for camp.",
    "catch": "It is not a rated sleeping system, so do not rely on it alone in the cold."
  },
  {
    "id": "best-backpacking-quilts-5",
    "rank": 5,
    "badge": "Best Goose Down Blanket",
    "name": "ROSE FEATHER Down Camping Blanket",
    "price": "$56.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KnKvybAiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D9GWC8R4?tag=rvgearlab-20",
    "description": "The ROSE FEATHER blanket uses 90 percent goose down with 1.1 lb of filling in a 20D nylon shell with DWR coating, reinforced stitches and snap buttons for poncho or footbox use. Corner tie-downs help you secure it.\n\nIt costs less than the Get Out Gear and names the goose down content. It prints no fill power or temperature rating.\n\nIt suits campers who want a down blanket for hammock or camp use. It is a nearest-fit quilt.",
    "specs": [
      "90% goose down, 1.1 lb fill",
      "20D nylon with DWR",
      "Snaps and corner tie-downs"
    ],
    "pros": [
      "Names 90 percent goose down",
      "Footbox and poncho snaps",
      "Corner tie-downs secure it",
      "DWR-coated shell"
    ],
    "cons": [
      "No fill power or rating printed",
      "Blanket, not a sleeping quilt"
    ],
    "bestFor": "Hammock and camp use",
    "take": "A low-cost down blanket with useful tie-downs.",
    "catch": "It prints no ratings, so treat it as a supplement."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fill",
    "description": "Down fill power or synthetic type."
  },
  {
    "title": "Rating",
    "description": "Printed ISO or brand figures."
  },
  {
    "title": "Weight",
    "description": "Listed weights."
  },
  {
    "title": "Footbox",
    "description": "Closed, convertible or none."
  },
  {
    "title": "Pad attachment",
    "description": "Straps or hollowed-back designs."
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
    "subheading": "By Hiker",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Thru-hiker",
          "Sierra Designs Cloud Quilt 20",
          "ISO 32F/21F, 1 lb 11.2 oz."
        ],
        [
          "Budget down",
          "SENSORY4U 850 Down Quilt",
          "850 fill, 1.9 lb."
        ],
        [
          "Damp weather",
          "OneTigris Featherlite Quilt",
          "Synthetic."
        ],
        [
          "Camp layer",
          "Get Out Gear Down Blanket",
          "1.1 lb."
        ],
        [
          "Hammock",
          "ROSE FEATHER Down Blanket",
          "Tie-downs."
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
          "$50 to $70",
          "ROSE FEATHER Down Blanket or OneTigris Featherlite Quilt"
        ],
        [
          "$60 to $140",
          "Get Out Gear Down Blanket or SENSORY4U 850 Down Quilt"
        ],
        [
          "$190 to $200",
          "Sierra Designs Cloud Quilt 20"
        ]
      ]
    }
  },
  {
    "subheading": "Down vs Synthetic",
    "cards": [
      {
        "label": "Down",
        "text": "Lighter and packs smaller. The Sierra Designs Cloud Quilt 20 and SENSORY4U 850 Down Quilt use down."
      },
      {
        "label": "Synthetic",
        "text": "Heavier, holds up in damp. The OneTigris Featherlite Quilt uses SEE polyester fill."
      }
    ],
    "note": "Choose the Sierra Designs Cloud Quilt 20 for dry cold and the OneTigris Featherlite Quilt for wet weather on a budget."
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
          "Near $54",
          "ROSE FEATHER Down Blanket"
        ],
        [
          "Near $66",
          "OneTigris Featherlite Quilt"
        ],
        [
          "Near $68",
          "Get Out Gear Down Blanket"
        ],
        [
          "Near $135",
          "SENSORY4U 850 Down Quilt"
        ],
        [
          "Near $200",
          "Sierra Designs Cloud Quilt 20"
        ]
      ]
    }
  },
  {
    "subheading": "Ultralight Thru-Hiking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "An ISO rating, a footbox and a weight under 2 lb."
      },
      {
        "label": "In this comparison",
        "text": "The Sierra Designs Cloud Quilt 20 prints ISO ratings and weighs 1 lb 11.2 oz, and the SENSORY4U 850 Down Quilt weighs 1.9 lb."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Sierra Designs Cloud Quilt 20 for ISO ratings and a hood."
      },
      {
        "label": "Save if",
        "text": "Save with the SENSORY4U 850 Down Quilt for down warmth at a lower price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Quilts versus bags",
    "explanation": "A quilt drops the back insulation, because the weight under you is crushed and does little. Fewer ounces carry the same warmth if your pad is warm enough. Choose a quilt only if your pad is rated for your coldest night."
  },
  {
    "criterion": "ISO ratings",
    "explanation": "An ISO comfort rating is a tested number, while a brand's comfort rating is a claim. The Sierra Designs Cloud Quilt 20 prints ISO 32F comfort and 21F limit. Prefer ISO figures when listed."
  },
  {
    "criterion": "Down versus synthetic",
    "explanation": "Down weighs less for the warmth but loses loft when wet. The OneTigris Featherlite uses synthetic fill and holds up in damp. Choose by your weather."
  },
  {
    "criterion": "Footbox and draft control",
    "explanation": "A closed footbox keeps heat near your feet. The Sierra Designs has a tapered footbox and hood, and the OneTigris has a convertible one. Look for a footbox or snap closure."
  },
  {
    "criterion": "Pad attachment",
    "explanation": "Quilt edges leak air if they slide off the pad. The SENSORY4U lists straps to attach it. Look for straps or clips."
  }
];

export const faq = [
  {
    "q": "Is a quilt warmer than a sleeping bag?",
    "a": "Not by itself. It saves weight by dropping the back insulation. The Sierra Designs Cloud Quilt 20 relies on a good pad."
  },
  {
    "q": "What pad do I need with a quilt?",
    "a": "A pad rated for your coldest night, since the quilt gives no insulation below you. Match the pad R-value to the temperature."
  },
  {
    "q": "Is a down blanket the same as a quilt?",
    "a": "No. The Get Out Gear Down Blanket and ROSE FEATHER Down Blanket print no ratings and lack a full footbox."
  },
  {
    "q": "How do I stop drafts?",
    "a": "Use the straps or clips to hold the quilt to your pad. The SENSORY4U 850 Down Quilt lists pad straps."
  },
  {
    "q": "How do I store a quilt?",
    "a": "Keep it loose in a large sack, not compressed. Wash it per the label."
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
