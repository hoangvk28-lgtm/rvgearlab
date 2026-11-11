export const guideSlug = "best-hiking-boots-under-75";
export const guideTitle = "5 Best Hiking Boots Under 75 in 2026";
export const metaTitle = "Best Hiking Boots Under 75 in 2026";
export const metaDescription = "Best hiking boots under $75: five men's and women's mid-top boots compared on suede and leather uppers, midsoles, waterproofing and weight.";
export const mainKeyword = "best hiking boots under 75";
export const introParagraphs = [
  "Seventy-five dollars buys suede and leather uppers, cushioned EVA midsoles and real toe protection, a clear step up from the entry-level boots near $40. The five picks cost about $32 to $60 and include two men's NORTIV 8 boots, an Amazon Essentials boot, a women's mesh boot and a leather combat-style boot.",
  "They were compared on upper material, waterproofing, midsole cushioning, outsole traction and weight. The ranking favors the boot that gives the most protection for the money, and the notes explain what the extra $25 over the under-$50 tier adds in practice."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/footwear-boots-rocky-trail.webp";
export const heroImageAlt = "Hiking boots on a rocky mountain trail";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-hiking-boots-under-75-1",
    "rank": 1,
    "badge": "Best Value Under $75",
    "name": "NORTIV 8 Men's Waterproof Lightweight Hiking Boots",
    "price": "$45.54",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/416JGWvc7YL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D53KTRTC?tag=rvgearlab-amz-20",
    "description": "The NORTIV 8 Suede Mid combines a waterproof membrane with soft suede leather, a rubber toe guard and a reinforced heel. A multi-directional traction outsole, a removable insole and a shock-absorbent MD midsole round out the build.\n\nAt about $46 it costs $14 less than the NORTIV 8 Ankle High and uses real suede in place of the synthetic uppers common under $40. The toe cap and reinforced heel protect against rocks and stumbles.\n\nIt suits hikers who want a protective, waterproof boot without paying for a premium brand. It covers hiking, hunting, camping and fishing.",
    "specs": [
      "Waterproof membrane, suede leather",
      "Rubber toe cap, reinforced heel",
      "MDT outsole, MD midsole"
    ],
    "pros": [
      "Suede leather resists wear",
      "Toe cap and heel protect on rocks",
      "Multi-directional traction outsole",
      "Removable insole and cushioned midsole"
    ],
    "cons": [
      "Break-in time on suede",
      "Heavier than mesh boots"
    ],
    "bestFor": "Protective all-round hiking",
    "take": "A real suede boot with waterproofing for under $50.",
    "catch": "Suede needs a break-in period and a water-repellent treatment."
  },
  {
    "id": "best-hiking-boots-under-75-2",
    "rank": 2,
    "badge": "Best Cushioned Midsole",
    "name": "NORTIV 8 Men's Ankle High Waterproof Hiking Boots",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41AVGmhQDwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07L5KBYYY?tag=rvgearlab-amz-20",
    "description": "The NORTIV 8 Ankle High has removable shock-absorbent insoles, lightweight flexible EVA midsoles for cushioning and energy return, and high-quality rubber soles with advanced traction. It suits hiking, hunting, camping, climbing, fishing and everyday work.\n\nAt about $60 it is the priciest boot here and costs $14 more than the Suede Mid. The EVA midsole is the standout, reducing foot fatigue over a long day.\n\nIt suits hikers and workers who spend hours on their feet. The ankle-high cut gives support.",
    "specs": [
      "Ankle-high cut, rubber sole",
      "EVA midsole, energy return",
      "Removable shock-absorbing insole"
    ],
    "pros": [
      "EVA midsole reduces foot fatigue",
      "Removable insole supports the arch",
      "Slip-resistant rubber sole",
      "Ankle-high cut supports the joint"
    ],
    "cons": [
      "Highest price among the five",
      "Heavier than the mesh boot"
    ],
    "bestFor": "Long days on your feet",
    "take": "Pay for the cushioned midsole if you hike or work long days.",
    "catch": "Costs the most of the five, so it only pays off on long days."
  },
  {
    "id": "best-hiking-boots-under-75-3",
    "rank": 3,
    "badge": "Best Easy-Lace Pick",
    "name": "Amazon Essentials Men's Waterproof Hiking Boot with Memory Foam Insole",
    "price": "$48.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Mol45lUjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FNS5RQ8W?tag=rvgearlab-amz-20",
    "description": "The Amazon Essentials hiking boot has a nylon and PU suede upper with a full internal waterproof bladder, a padded collar, flex notches that cradle the ankle and a molded memory foam insole. A pull tab and quick-lace system help getting it on, and reflective details aid low-light visibility.\n\nAt about $49 it costs $3 more than the NORTIV 8 Suede Mid and replaces real suede with a synthetic upper. The padded collar and memory foam insole make it comfortable out of the box.\n\nIt suits casual hikers who want easy on-off lacing and a soft feel. It works for camp and town.",
    "specs": [
      "Waterproof bladder, nylon and PU suede",
      "Padded collar, flex notches",
      "Pull tab, quick-lace, memory foam"
    ],
    "pros": [
      "Comfortable out of the box",
      "Quick-lace system and pull tab",
      "Full internal waterproof bladder",
      "Reflective details"
    ],
    "cons": [
      "Synthetic upper wears faster",
      "Less foot protection than the NORTIV 8"
    ],
    "bestFor": "Casual hikes and camp",
    "take": "A soft, easy boot that needs little break-in.",
    "catch": "Synthetic upper and a lighter toe guard."
  },
  {
    "id": "best-hiking-boots-under-75-4",
    "rank": 4,
    "badge": "Best Lightweight Women Pick",
    "name": "NORTIV 8 Women's Lightweight Ankle Hiking Boots",
    "price": "$39.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Pl8uelzRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D473ZDTB?tag=rvgearlab-amz-20",
    "description": "This women's NORTIV 8 boot weighs 12.3 oz per shoe, with EVA insoles, mesh paneling for ventilation and Oxford fabric with TPU patches in high-wear areas. A tongue design blocks debris and the upper offers four hours of static water resistance.\n\nAt about $40 it costs $6 less than the Suede Mid and weighs far less than any boot here. It is breathable and water-resistant rather than waterproof.\n\nIt suits women who want a light, ventilated boot for dry-weather trails. The color-block design suits town too.",
    "specs": [
      "12.3 oz per shoe",
      "Mesh and TPU patches",
      "Four hours static water resistance"
    ],
    "pros": [
      "Very light at 12.3 oz",
      "Mesh ventilation keeps feet cool",
      "TPU patches resist abrasion",
      "Debris-blocking tongue"
    ],
    "cons": [
      "Water-resistant, not waterproof",
      "Less ankle protection"
    ],
    "bestFor": "Dry-weather women's hikes",
    "take": "A light, breezy boot for dry trails.",
    "catch": "Water resistance lasts only about four hours of static testing."
  },
  {
    "id": "best-hiking-boots-under-75-5",
    "rank": 5,
    "badge": "Best Trail-to-Town Leather",
    "name": "Athlefit Women's Lace-Up Work Hiking Combat Ankle Boots Khaki Size 7.5",
    "price": "$32.29",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41i29w54WFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DTHJDTSS?tag=rvgearlab-amz-20",
    "description": "The Athlefit is a women's lace-up ankle boot in durable waterproof leather with a padded collar, metal eyelets and a non-slip build. Its firm 1.2 inch heel adds a little height.\n\nAt about $32 it carries the lowest price here and is the only boot styled for work or combat. The 1.2 inch heel sits higher than the flatter hiking soles on the NORTIV 8 pair.\n\nIt suits women who need a waterproof boot for short walks, camp chores and town. The leather wipes clean.",
    "specs": [
      "Waterproof leather, lace-up",
      "Padded collar, metal eyelets",
      "1.2 inch heel"
    ],
    "pros": [
      "Lowest price in this guide",
      "Waterproof leather upper",
      "Padded collar for comfort",
      "Works from trail to town"
    ],
    "cons": [
      "Fashion-leaning, not a true hiking build",
      "Raised heel is less stable on steep ground"
    ],
    "bestFor": "Short walks and town wear",
    "take": "A stylish, waterproof boot for easy terrain.",
    "catch": "The raised heel is less stable on steep ground."
  }
];

export const howWeEvaluated = [
  {
    "title": "Upper material",
    "description": "Suede, leather, synthetic and mesh uppers were compared."
  },
  {
    "title": "Waterproofing",
    "description": "Membranes, bladders and water-resistant mesh were compared."
  },
  {
    "title": "Midsole and cushioning",
    "description": "EVA and MD midsoles and insoles were compared."
  },
  {
    "title": "Protection",
    "description": "Toe caps and heel counters were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick sits at or under $75, and the top pick gives the most protection per dollar."
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
    "subheading": "By use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Rocky, wet trails",
          "NORTIV 8 Suede Mid",
          "Suede, membrane and toe cap."
        ],
        [
          "Long days on your feet",
          "NORTIV 8 Ankle High",
          "EVA midsole."
        ],
        [
          "Soft out-of-box comfort",
          "Amazon Essentials Brown",
          "Memory foam and quick-lace."
        ],
        [
          "Dry-weather women's hikes",
          "NORTIV 8 Women Mesh",
          "12.3 oz per shoe."
        ],
        [
          "Trail-to-town leather",
          "Athlefit Combat Boot",
          "Waterproof leather at about $32."
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
          "Athlefit Combat Boot or NORTIV 8 Women Mesh"
        ],
        [
          "$40 to $50",
          "NORTIV 8 Suede Mid or Amazon Essentials Brown"
        ],
        [
          "$50 to $60",
          "NORTIV 8 Ankle High"
        ]
      ]
    }
  },
  {
    "subheading": "Suede vs mesh",
    "cards": [
      {
        "label": "Suede",
        "text": "The NORTIV 8 Suede Mid and NORTIV 8 Ankle High resist wear and protect feet on rough ground."
      },
      {
        "label": "Mesh",
        "text": "The NORTIV 8 Women Mesh is light and breathable and sheds only light rain."
      }
    ],
    "note": "Take the NORTIV 8 Suede Mid for rough trails and the NORTIV 8 Women Mesh for dry days."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $32",
          "Athlefit Combat Boot"
        ],
        [
          "About $40",
          "NORTIV 8 Women Mesh"
        ],
        [
          "About $46",
          "NORTIV 8 Suede Mid"
        ],
        [
          "About $49",
          "Amazon Essentials Brown"
        ],
        [
          "About $60",
          "NORTIV 8 Ankle High"
        ]
      ]
    }
  },
  {
    "subheading": "For women hikers specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for women's sizing, a flat sole and a breathable or waterproof upper."
      },
      {
        "label": "In this comparison",
        "text": "The NORTIV 8 Women Mesh weighs 12.3 oz per shoe. The Athlefit Combat Boot adds waterproof leather."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you hike long days: the NORTIV 8 Ankle High costs about $14 more than the NORTIV 8 Suede Mid and adds an EVA midsole."
      },
      {
        "label": "Save if",
        "text": "Save if you only need a casual boot: the Athlefit Combat Boot at about $32 and the NORTIV 8 Women Mesh at about $40."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What $75 buys over $50",
    "explanation": "Extra budget over the $50 tier buys real suede or leather, a reinforced toe and heel and a cushioned EVA midsole rather than a synthetic upper. Weight and waterproofing are similar to the $40 boots, so the gain is durability and protection. Choose the feature that matches your terrain, and skip the rest."
  },
  {
    "criterion": "Suede versus synthetic uppers",
    "explanation": "Suede and leather resist abrasion and mold to your foot over time, though they need a break-in period and a water repellent. Synthetic uppers feel comfortable at once and wear faster at the toe and flex points. Treat suede with a water repellent before wet trips, and condition leather once a season."
  },
  {
    "criterion": "Midsole cushioning",
    "explanation": "An EVA midsole absorbs impact and returns some energy, which reduces foot fatigue on hard ground and long descents. A thin or flat midsole feels harsh after a few miles and sends shock to the knees. Read the midsole description, and press the boot sole with your thumb to judge how much it gives."
  },
  {
    "criterion": "Toe and heel protection",
    "explanation": "A rubber toe cap protects against rocks and stubs, and a reinforced heel adds stability and keeps the boot's shape. Fashion-style boots may lack both, which matters on rocky ground where one stumble can bruise a toe. Choose protection if you hike off-trail, and check that the toe box still has room for your toes."
  },
  {
    "criterion": "Waterproof versus water-resistant",
    "explanation": "Waterproof membranes and internal bladders block water that gets through the upper. Water-resistant mesh sheds light rain only, and four hours of static resistance is not a downpour rating. Check whether the boot says waterproof, and treat leather uppers with a repellent each season to keep them beading."
  },
  {
    "criterion": "Fit and heel height",
    "explanation": "A flat hiking sole is more stable than a raised heel on steep ground, because the heel pushes your weight forward on a descent. A 1.2 inch heel suits town and easy walks. Try boots on with hiking socks at the end of the day, when feet are largest, and walk down a slope to test heel hold."
  }
];

export const faq = [
  {
    "q": "Is a $60 hiking boot much better than a $40 one?",
    "a": "It adds suede, a cushioned midsole or a toe cap. The NORTIV 8 Ankle High has an EVA midsole that reduces fatigue on long days, and the NORTIV 8 Suede Mid adds real leather. For short hikes a $40 boot is fine, so match the spend to the miles."
  },
  {
    "q": "What mistake do buyers make with suede boots?",
    "a": "Many skip the break-in and water treatment. Wear the NORTIV 8 Suede Mid around the house and on short walks, then spray a water repellent before a wet trip. Suede feels stiff at first and softens over a week of wear."
  },
  {
    "q": "Can I hike in a combat-style boot?",
    "a": "On easy terrain, yes. The Athlefit Combat Boot has waterproof leather and a padded collar, though its 1.2 inch heel is less stable on steep ground. Choose a flat-soled boot such as the NORTIV 8 Suede Mid for rocky or sloping trails."
  },
  {
    "q": "How do I choose the right hiking boot size?",
    "a": "Measure your foot in the evening, wear hiking socks and leave a thumb's width in front of your toes. Your heel should not lift when you walk. Try boots on a slope if you can, and compare half sizes before you commit."
  },
  {
    "q": "How should I clean and store hiking boots?",
    "a": "Brush off dirt, rinse with water, remove the insoles and air dry the boots away from heat. Apply a leather conditioner or water repellent afterwards. Store them in a dry place with the laces loosened so they keep their shape."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Hiking Boots For Men Under 100",
    "href": "/clothing-footwear/best-hiking-boots-for-men-under-100"
  },
  {
    "title": "Best Hiking Boots Under 100",
    "href": "/clothing-footwear/best-hiking-boots-under-100"
  },
  {
    "title": "Best Waterproof Hiking Boots Under 100",
    "href": "/clothing-footwear/best-waterproof-hiking-boots-under-100"
  }
];
