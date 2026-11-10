export const guideSlug = "best-trail-running-shoes-for-hiking-and-running";
export const guideTitle = "5 Best Trail Running Shoes For Hiking And Running in 2026";
export const metaTitle = "Best Trail Running Shoes For Hiking And Running";
export const metaDescription = "Best trail running shoes for hiking and running: ALTRA, ASICS, Saucony and NORTIV trail shoes compared for grip, cushioning and all-around use.";
export const mainKeyword = "best trail running shoes for hiking and running";
export const introParagraphs = [
  "Plenty of people want one shoe that handles a morning trail run and a Saturday hike. That shoe needs real lugs for grip, enough cushion for impact and an upper that survives brush and rocks.",
  "This list leans toward runners who also hike. Picks were compared on outsole lugs, midsole cushioning, upper durability and how clearly the listing describes its trail features."
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
    "id": "best-trail-running-shoes-for-hiking-and-running-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ALTRA Men's Lone Peak 8 Trail Running Shoe",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/310vZovK6GL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DKLL5H1V?tag=rvgearlab-20",
    "description": "The ALTRA Lone Peak 8 is a men's trail runner with a MaxTrac outsole and TrailClaw lugs, a ripstop mesh upper and a lightweight EGO midsole. It is zero-drop with a wide toe box and a 25mm stack height.\n\nAgainst the Saucony Excursion TR15, it adds a wide toe box and zero-drop geometry. Compared with the ASICS Gel-Venture 11, it uses a ripstop upper for abrasion resistance.\n\nIt suits runners who like natural foot shape and long, rough days. The EGO midsole gives high rebound energy return.",
    "specs": [
      "MaxTrac outsole, TrailClaw lugs",
      "Zero-drop, wide toe box",
      "Ripstop mesh upper"
    ],
    "pros": [
      "Wide toe box lets toes splay",
      "Ripstop upper resists abrasion",
      "Plush 25mm stack for long days",
      "Lugs grip dirt, gravel and rock"
    ],
    "cons": [
      "Highest price in this list",
      "Zero-drop needs an adjustment period"
    ],
    "bestFor": "Long trail days",
    "take": "A trail running classic that also hikes well. Roomy toe box and strong grip.",
    "catch": "Zero-drop can strain calves if you are new to it."
  },
  {
    "id": "best-trail-running-shoes-for-hiking-and-running-2",
    "rank": 2,
    "badge": "Best Cushioned Value",
    "name": "ASICS Men's Gel-Venture 11 Running Shoes",
    "price": "$69.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31mKhBC5IRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FF2Y49QY?tag=rvgearlab-20",
    "description": "The ASICS Gel-Venture 11 is a men's trail runner with rearfoot GEL cushioning, AMPLIFOAM PLUS midsole foam and an OrthoLite Hybrid Max Lite sockliner. It has a mesh upper and a molded rubber outsole.\n\nAgainst the ALTRA Lone Peak 8, it uses a conventional heel drop and a gel pad. Compared with the Saucony, it adds a heel gel insert.\n\nIt suits runners who land on their heels and want shock absorption. The listing notes it runs small.",
    "specs": [
      "Rearfoot GEL cushioning",
      "AMPLIFOAM PLUS midsole",
      "OrthoLite sockliner"
    ],
    "pros": [
      "Gel pad softens heel strike",
      "Softer foam than standard",
      "Sockliner manages moisture",
      "Lower price than the ALTRA"
    ],
    "cons": [
      "Listing says it runs small",
      "Less specific trail details"
    ],
    "bestFor": "Heel-striking trail runners",
    "take": "A cushioned, well-priced trail shoe. Size up from your usual.",
    "catch": "The listing flags that it runs small."
  },
  {
    "id": "best-trail-running-shoes-for-hiking-and-running-3",
    "rank": 3,
    "badge": "Best Rugged Outsole",
    "name": "Saucony Men's Excursion TR15 Trail Running Shoe",
    "price": "$59.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41pPxyxeA5S._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08PDSRRSG?tag=rvgearlab-20",
    "description": "The Saucony Excursion TR15 has carbon rubber lugs for grip, VERSARUN cushioning at a moderate stack and a trail-specific mesh upper with supportive overlays. Parts of the shoe use recycled materials.\n\nAgainst the ASICS Gel-Venture 11, it leans on a carbon rubber outsole for durability. Compared with the NORTIV 8 Men's, it has a more protective upper.\n\nIt suits runners who want a durable, versatile trail shoe at a moderate price. The overlays lock the foot in place.",
    "specs": [
      "Carbon rubber lugs",
      "VERSARUN cushioning",
      "Trail mesh with overlays"
    ],
    "pros": [
      "Carbon rubber lugs last",
      "Overlays protect from debris",
      "Moderate stack for stability",
      "Recycled materials"
    ],
    "cons": [
      "Little cushioning detail",
      "Not a wide fit"
    ],
    "bestFor": "Mixed trail running and hiking",
    "take": "A durable trail shoe at a fair price. Strong lugs.",
    "catch": "It does not list a wide toe box or gel features."
  },
  {
    "id": "best-trail-running-shoes-for-hiking-and-running-4",
    "rank": 4,
    "badge": "Best Budget Men's",
    "name": "NORTIV 8 Men's Trail Running Walking Shoes",
    "price": "$51.29",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41EX+1jlQ2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H7BNZM4D?tag=rvgearlab-20",
    "description": "The NORTIV 8 Men's is a trail running and walking shoe with a flexible EVA midsole, a full rubber outsole with 4mm lugs and a TPU toe. The mesh upper is breathable.\n\nAgainst the Saucony, it adds a TPU toe at a lower price. Compared with the ALTRA, it has a conventional heel.\n\nIt suits men who want trail running, trekking and camping from one affordable shoe. The listing says it works as everyday footwear.",
    "specs": [
      "EVA midsole, 4mm lugs",
      "TPU toe protection",
      "Breathable mesh upper"
    ],
    "pros": [
      "TPU toe guards against roots",
      "Full rubber outsole",
      "Light and flexible",
      "Low price"
    ],
    "cons": [
      "Basic EVA cushioning",
      "Mesh is not waterproof"
    ],
    "bestFor": "Budget trail running",
    "take": "A simple, affordable trail shoe with toe protection.",
    "catch": "The EVA midsole is basic compared with branded foams."
  },
  {
    "id": "best-trail-running-shoes-for-hiking-and-running-5",
    "rank": 5,
    "badge": "Best Budget Women's",
    "name": "NORTIV 8 Women's Breathable Trail Running Shoes",
    "price": "$53.18",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/317vfb2EpBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H7BXRCM2?tag=rvgearlab-20",
    "description": "The NORTIV 8 Women's has a flexible EVA midsole, a full rubber outsole with 4mm lugs and a reinforced TPU toe cap. The listing describes a breathable mesh upper that suits runs, hikes and everyday wear.\n\nAgainst the ASICS Gel-Venture 11, it adds a toe cap at a lower price. Compared with the NORTIV 8 Men's, it is cut for women.\n\nIt suits women who want trail running and hiking in one shoe. It pairs easily with casual clothes.",
    "specs": [
      "EVA midsole, 4mm lugs",
      "TPU toe cap",
      "Breathable mesh upper"
    ],
    "pros": [
      "Toe cap protects from bumps",
      "Grips wet paths",
      "Light flexible midsole",
      "Casual look"
    ],
    "cons": [
      "Basic cushioning",
      "Mesh breathes but does not shed rain"
    ],
    "bestFor": "Women trail runners and hikers",
    "take": "A good women's trail shoe at a friendly price.",
    "catch": "The cushioning is simple for long runs."
  }
];

export const howWeEvaluated = [
  {
    "title": "Outsole grip",
    "description": "Lug depth and rubber compounds were compared first."
  },
  {
    "title": "Cushioning",
    "description": "Midsole foam and stack height were weighed."
  },
  {
    "title": "Upper durability",
    "description": "Ripstop, overlays and toe caps were checked."
  },
  {
    "title": "Fit",
    "description": "Toe box and sizing notes were compared."
  },
  {
    "title": "Value",
    "description": "Price was compared."
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
    "subheading": "By Terrain",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Long, rough trails",
          "ALTRA Lone Peak 8",
          "MaxTrac outsole and ripstop upper."
        ],
        [
          "Hard-packed trails",
          "ASICS Gel-Venture 11",
          "Heel gel cushioning."
        ],
        [
          "Mixed rocky ground",
          "Saucony Excursion TR15",
          "Carbon rubber lugs."
        ],
        [
          "Budget men's",
          "NORTIV 8 Men's",
          "TPU toe and 4mm lugs."
        ],
        [
          "Budget women's",
          "NORTIV 8 Women's",
          "TPU toe cap."
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
          "NORTIV 8 Men's or NORTIV 8 Women's"
        ],
        [
          "$50 to $70",
          "Saucony Excursion TR15 or ASICS Gel-Venture 11"
        ],
        [
          "$80 to $90",
          "ALTRA Lone Peak 8"
        ]
      ]
    }
  },
  {
    "subheading": "Zero-Drop vs Conventional",
    "cards": [
      {
        "label": "Zero-drop",
        "text": "Natural stride, needs adaptation. ALTRA Lone Peak 8."
      },
      {
        "label": "Conventional",
        "text": "Familiar heel feel. ASICS Gel-Venture 11, Saucony Excursion TR15 and both NORTIV 8 shoes."
      }
    ],
    "note": "Most runners should choose a conventional shoe like the Saucony Excursion TR15 unless they already like zero-drop."
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
          "Premium",
          "ALTRA Lone Peak 8"
        ],
        [
          "Mid, cushioned",
          "ASICS Gel-Venture 11"
        ],
        [
          "Mid, durable",
          "Saucony Excursion TR15"
        ],
        [
          "Low",
          "NORTIV 8 Men's"
        ]
      ]
    }
  },
  {
    "subheading": "For Hiking Days Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Good grip and a protective toe."
      },
      {
        "label": "In this comparison",
        "text": "The NORTIV 8 Men's has a TPU toe and the Saucony Excursion TR15 has overlays."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ALTRA Lone Peak 8 for long, rough days."
      },
      {
        "label": "Save if",
        "text": "Save with the NORTIV 8 Men's or NORTIV 8 Women's for shorter outings."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Lug depth and rubber",
    "explanation": "Lugs bite into dirt, gravel and rock. Deeper lugs grip more but wear faster on pavement. Look for lug depth and rubber type on the listing."
  },
  {
    "criterion": "Stack height and drop",
    "explanation": "Stack height is how much cushion sits under your foot, drop is the heel to toe height difference. Low drop shoes feel more natural. Check the numbers in the listing."
  },
  {
    "criterion": "Upper protection",
    "explanation": "Ripstop and overlays resist abrasion from rocks and brush. A bare mesh tears faster. Look for ripstop or overlay wording."
  },
  {
    "criterion": "Toe box room",
    "explanation": "Feet swell on long runs and downhills. A wide toe box helps. Check for wide toe box wording."
  },
  {
    "criterion": "Sizing notes",
    "explanation": "Some shoes run small or large. The ASICS listing says it runs small. Check sizing notes before ordering."
  }
];

export const faq = [
  {
    "q": "Can I hike in trail running shoes?",
    "a": "Yes, on maintained trails with a light pack. Heavy loads still favor boots."
  },
  {
    "q": "What is zero-drop?",
    "a": "The heel and toe sit at the same height. It encourages a natural stride but takes adjustment."
  },
  {
    "q": "Do they need to be waterproof?",
    "a": "Not usually. Mesh dries fast, while waterproof uppers trap heat and sweat."
  },
  {
    "q": "How do I choose a size?",
    "a": "Check the sizing notes first, since the ASICS listing runs small. Then allow a thumb's width in front of your toes."
  },
  {
    "q": "How long do they last?",
    "a": "Lugs and foam wear with mileage. Replace them when the lugs are smooth or the foam feels flat."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Trail Running Shoes For Hiking And Walking",
    "href": "/clothing-footwear/best-trail-running-shoes-for-hiking-and-walking"
  },
  {
    "title": "Best Hiking Shoes For Womens Wide Feet",
    "href": "/clothing-footwear/best-hiking-shoes-for-womens-wide-feet"
  },
  {
    "title": "Best Hiking Shoes Under 100",
    "href": "/clothing-footwear/best-hiking-shoes-under-100"
  }
];
