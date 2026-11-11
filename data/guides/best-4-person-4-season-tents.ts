export const guideSlug = "best-4-person-4-season-tents";
export const guideTitle = "2 Best 4 Person 4 Season Tents in 2026";
export const metaTitle = "Best 4 Person 4 Season Tents in 2026";
export const metaDescription = "Best 4-person 4-season tents compared on how each listing states its season rating, poles, fabric and extras, for groups camping in cold or snowy weather.";
export const mainKeyword = "best 4 person 4 season tents";
export const introParagraphs = [
  "Very few four-person tents are labeled 4-season, and only two listings here say so. One is a freestanding family tent with aluminum poles, and the other is a hot tent with a stove jack and a snow skirt.",
  "Because only two genuine picks qualify, the guide says so up front and compares them on the numbers each listing gives, with the closest alternatives left to the 3-season guide."
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
    "id": "best-4-person-4-season-tents-1",
    "rank": 1,
    "badge": "Best Freestanding Pick",
    "name": "GEERTOP Waterproof 4 Person 4 Season Family Camping Tent",
    "price": "$159.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/315hnF8OAkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08KZXNVP8?tag=rvgearlab-amz-20",
    "description": "The GEERTOP is titled as a 4-person, 4-season family tent with a PU3000mm rainfly, a PU5000mm Oxford floor and fully taped seams. The interior measures 6.9 by 7.8 feet, and lightweight aluminum poles build a freestanding frame with two large doors and dual vents.\n\nIt costs less than half the Naturehike and sets up in minutes with a conventional frame. The Naturehike adds a stove jack, which this one lacks.\n\nIt suits cold-weather campers who want a standard tent without special gear. Breathable mesh panels help reduce condensation.",
    "specs": [
      "4-season, 6.9x7.8 ft",
      "PU3000 fly, PU5000 floor",
      "Aluminum poles, two doors"
    ],
    "pros": [
      "Clear 4-season label",
      "Strong 5000mm floor",
      "Aluminum freestanding frame",
      "Two doors and dual vents"
    ],
    "cons": [
      "No stove jack for winter heat",
      "Interior is tight for four adults"
    ],
    "bestFor": "Cold-weather car camping",
    "take": "A conventional 4-season tent with strong fabric numbers.",
    "catch": "Four adults will find the floor snug."
  },
  {
    "id": "best-4-person-4-season-tents-2",
    "rank": 2,
    "badge": "Best Winter Hot Tent",
    "name": "Naturehike Massif Hot Tent with Stove Jack",
    "price": "$359.28",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31xUuw8FYGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLXQDRTV?tag=rvgearlab-amz-20",
    "description": "The Naturehike Massif is a hot tent with a stove jack and a snow skirt that blocks wind and snow. It measures 16.7 by 8.36 by 5.9 feet with a removable inner of 88.6 by 51.2 inches, and it uses 30D silicone-coated polyester at 3000mm with aluminum poles.\n\nIt adds a stove jack, hall and snow skirt that the GEERTOP cannot, and it costs about twice as much. Its lightweight fabric keeps the pack size small.\n\nIt suits winter campers who plan to heat the tent with a stove. The two-room layout gives a hall.",
    "specs": [
      "4-season hot tent with stove jack",
      "16.7x8.36 ft with hall",
      "30D silicone, 3000mm"
    ],
    "pros": [
      "Stove jack for winter heat",
      "Snow skirt blocks wind",
      "Spacious hall and inner",
      "Compact pack size"
    ],
    "cons": [
      "Priciest of the two",
      "Silicone fabric needs careful stove use"
    ],
    "bestFor": "Winter stove campers",
    "take": "A true winter hot tent with a stove jack and snow skirt.",
    "catch": "Plan stove safety carefully, and check fabric heat limits."
  }
];

export const howWeEvaluated = [
  {
    "title": "Season wording",
    "description": "Whether 4-season is stated."
  },
  {
    "title": "Fabric",
    "description": "mm ratings and denier."
  },
  {
    "title": "Poles",
    "description": "Aluminum or fiberglass."
  },
  {
    "title": "Winter features",
    "description": "Stove jack and skirt."
  },
  {
    "title": "Floor size",
    "description": "Inner length and width."
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
    "subheading": "By Winter Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Conventional winter tent",
          "GEERTOP 4-Person 4-Season",
          "Aluminum freestanding frame."
        ],
        [
          "Stove heating",
          "Naturehike Massif Hot Tent",
          "Stove jack and snow skirt."
        ],
        [
          "Tight budget",
          "GEERTOP 4-Person 4-Season",
          "Half the price."
        ],
        [
          "Hall and gear space",
          "Naturehike Massif Hot Tent",
          "Two-room layout."
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
          "$150 to $160",
          "GEERTOP 4-Person 4-Season"
        ],
        [
          "$350 to $360",
          "Naturehike Massif Hot Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Standard vs Hot Tent",
    "cards": [
      {
        "label": "Standard",
        "text": "A freestanding tent without a stove. The GEERTOP 4-Person 4-Season is the example."
      },
      {
        "label": "Hot tent",
        "text": "A tent with a stove jack and skirt. The Naturehike Massif Hot Tent works this way."
      }
    ],
    "note": "Take the GEERTOP 4-Person 4-Season unless you plan to use a stove."
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
          "Around $160",
          "GEERTOP 4-Person 4-Season"
        ],
        [
          "Around $360",
          "Naturehike Massif Hot Tent"
        ],
        [
          "Wind and snow",
          "Naturehike Massif Hot Tent"
        ],
        [
          "Basic cold nights",
          "GEERTOP 4-Person 4-Season"
        ]
      ]
    }
  },
  {
    "subheading": "For Winter Campers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A 4-season label, PU3000 fly and a skirt or stove jack."
      },
      {
        "label": "In this comparison",
        "text": "The Naturehike Massif Hot Tent has a snow skirt and a stove jack."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Naturehike Massif Hot Tent if you plan to heat the tent. It has the stove jack."
      },
      {
        "label": "Save if",
        "text": "Save with the GEERTOP 4-Person 4-Season for cold nights without a stove. It costs about half."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Check what 4-season means",
    "explanation": "A 4-season tent uses stronger poles and less mesh for wind and snow. A label alone does not prove it. Look for aluminum poles and a skirt."
  },
  {
    "criterion": "Compare water numbers",
    "explanation": "PU3000mm on the fly and PU5000mm on the floor suit wet snow melt. A thin floor soaks through. Read both numbers."
  },
  {
    "criterion": "Think about heating",
    "explanation": "A stove jack lets you run a wood stove, and it adds fire risk. Most tents do not allow stoves. Look for a stove jack in the listing."
  },
  {
    "criterion": "Measure the interior",
    "explanation": "Four adults in winter bags need more floor than in summer. Compare the inner size with pad widths. Assume three plus gear."
  },
  {
    "criterion": "Plan snow load",
    "explanation": "A flat roof collects snow and needs sweeping. A steep roof sheds it. Check the shape."
  }
];

export const faq = [
  {
    "q": "Are there more 4-season four-person tents?",
    "a": "Only two listings state it here. For other options see the 3-season guide. Check the wording."
  },
  {
    "q": "What is the common mistake?",
    "a": "Buying a 3-season tent for snow. Poles and fabric differ. Check the label."
  },
  {
    "q": "Is a hot tent worth it?",
    "a": "For winter camping with a stove, yes. Otherwise the standard tent costs less."
  },
  {
    "q": "How do I pitch in snow?",
    "a": "Stamp a flat spot, use snow stakes and clear the roof. Guy out the corners. Take your time."
  },
  {
    "q": "How do I dry the tent?",
    "a": "Shake off snow, dry indoors and wipe the floor. Store loosely. Check seams."
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
