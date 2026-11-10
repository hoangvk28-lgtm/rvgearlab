export const guideSlug = "best-50-degree-mummy-sleeping-bags";
export const guideTitle = "2 Best 50 Degree Mummy Sleeping Bags in 2026";
export const metaTitle = "Best 50 Degree Mummy Sleeping Bags in 2026";
export const metaDescription = "Two hooded bags for 50F nights: the Bessport mummy with a 50 to 68F comfort range and the Amazon Basics 50F, with notes on how to read the ratings.";
export const mainKeyword = "best 50 degree mummy sleeping bags";
export const introParagraphs = [
  "Mummy bags labeled 50 degrees are rare, because tapered hooded bags are usually built for colder nights. This guide has two picks: a Bessport mummy whose listing gives a 50 to 68F comfort range, and an Amazon Basics bag rated for 50F and above with an integrated hood.",
  "Colder-rated mummies from Coleman and TETON were left out, since a 0F or 20F bag is far too warm for a 50F night. The guide keeps to the two that match the temperature and explains how to read each number."
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
    "id": "best-50-degree-mummy-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Bessport Mummy Sleeping Bag",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41kGiiAVfWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07XBJ9C6D?tag=rvgearlab-20",
    "description": "Bessport sells a mummy bag whose listing states a 50 to 68F comfort range and a 32F limit, with 15F printed as an extreme figure in the title. The 210T ripstop polyester shell is water repellent, and the girth measures 63, 50.3 and 33 inches at shoulder, hip and foot.\n\nOnly this bag names the mummy shape and prints girth figures, so fit is easy to judge. A drawstring hood, an insulated footbox and double SBS zippers with an anti-snag slider add to the design, and it weighs 3.6 lb.\n\nA strong choice for campers who want a hooded mummy for mild nights and some cold margin. It fits adults from 6 feet 1 inch to 6 feet 6 inches.",
    "specs": [
      "50 to 68F comfort range",
      "Girth 63, 50.3 and 33 in",
      "210T ripstop shell, 3.6 lb"
    ],
    "pros": [
      "Comfort range includes 50F",
      "Girth measurements are printed",
      "Insulated footbox and hood",
      "Double SBS zippers, anti-snag slider"
    ],
    "cons": [
      "Fill type is not named",
      "The 15F figure is extreme, not comfort"
    ],
    "bestFor": "Tall mild-weather campers",
    "take": "A hooded mummy with measured girth and a comfort range that includes 50F.",
    "catch": "Fill and weight beyond 3.6 lb are not named, and the 15F title figure is an extreme limit."
  },
  {
    "id": "best-50-degree-mummy-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Budget Pick",
    "name": "Amazon Basics Sleeping Bags for Adults",
    "price": "$22.64",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31-iGbt0YsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G63GJZJV?tag=rvgearlab-20",
    "description": "Amazon Basics rates this 84 x 31.5 inch bag for 50F and above, with an integrated hood and synthetic fill. The shell is 100% GRS certified recycled post-consumer polyester, and a compression carry sack is included.\n\nNext to the Bessport 3-4 Season Mummy, it costs less than half as much and is machine washable. It also unzips into a blanket, which the Bessport does not list.\n\nA fit for first-time campers and summer trips who want the cheapest hooded bag with a stated 50F rating. Integrated loops make bundling easy.",
    "specs": [
      "Rated 50F and above",
      "84 x 31.5 in, hooded",
      "GRS recycled polyester"
    ],
    "pros": [
      "Lowest price in the group",
      "Integrated hood",
      "Machine washable",
      "Unzips into a blanket"
    ],
    "cons": [
      "Basic design",
      "Warm weather only"
    ],
    "bestFor": "Summer starters",
    "take": "The cheapest hooded 50F bag, certified recycled and machine washable.",
    "catch": "The listing does not call it a mummy, and it is for nights at or above 50F only."
  }
];

export const howWeEvaluated = [
  {
    "title": "Rating fit",
    "description": "We kept only bags whose stated rating or comfort range includes 50F."
  },
  {
    "title": "Shape clarity",
    "description": "We checked which listings call the bag a mummy and which only mention a hood."
  },
  {
    "title": "Fit data",
    "description": "We compared printed girth, length and fit height."
  },
  {
    "title": "Rating type",
    "description": "We separated comfort, limit and extreme figures on each listing."
  },
  {
    "title": "Price and weight",
    "description": "We compared price and any printed weight."
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
    "subheading": "By Camper Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Tall camper on a mild trip",
          "Bessport 3-4 Season Mummy",
          "Fits 6 ft 1 in to 6 ft 6 in"
        ],
        [
          "First bag for summer",
          "Amazon Basics 50F",
          "Lowest price with a stated 50F"
        ],
        [
          "Want cold margin below 50F",
          "Bessport 3-4 Season Mummy",
          "Lists a 32F limit"
        ],
        [
          "Want a blanket option",
          "Amazon Basics 50F",
          "Unzips fully"
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
          "$20 to $30",
          "Amazon Basics 50F"
        ],
        [
          "$40 to $50",
          "Bessport 3-4 Season Mummy"
        ]
      ]
    }
  },
  {
    "subheading": "Mummy Shape vs Basic Hooded Bag",
    "cards": [
      {
        "label": "Named mummy",
        "text": "The Bessport 3-4 Season Mummy tapers, prints girth and has an insulated footbox."
      },
      {
        "label": "Hooded basic bag",
        "text": "The Amazon Basics 50F has a hood and a compression sack and costs less."
      }
    ],
    "note": "Choose the Bessport 3-4 Season Mummy for fit and margin, and the Amazon Basics 50F for the lowest cost."
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
          "Under 30 dollars",
          "Amazon Basics 50F"
        ],
        [
          "Around 50 dollars",
          "Bessport 3-4 Season Mummy"
        ]
      ]
    }
  },
  {
    "subheading": "Mild Nights Around 50F Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A comfort range or rating that includes 50F, plus a hood."
      },
      {
        "label": "In this comparison",
        "text": "The Bessport 3-4 Season Mummy lists 50 to 68F comfort, and the Amazon Basics 50F lists 50F and above."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Bessport 3-4 Season Mummy if you want a tapered fit, girth numbers and some cold margin."
      },
      {
        "label": "Save if",
        "text": "Save with the Amazon Basics 50F if your nights stay at or above 50F."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Why few 50F mummies exist",
    "explanation": "Tapered mummy bags are built to save heat, so most are rated colder than 50F. A 50F mummy is a niche item. Check that the number on the listing is a comfort or rating figure rather than an extreme limit."
  },
  {
    "criterion": "Comfort, limit and extreme",
    "explanation": "Comfort is where an average sleeper stays warm, limit is where they survive curled up, and extreme is a survival figure. The Bessport lists all three styles of number. Plan your night around comfort."
  },
  {
    "criterion": "Mummy versus hooded rectangle",
    "explanation": "A mummy tapers at the feet and shoulders, which traps less air. A hooded rectangle gives more room but loses more heat. Check the listing for the shape word, not just a hood."
  },
  {
    "criterion": "Girth and length",
    "explanation": "Girth at the shoulder, hip and foot tells you how snug a bag fits. A mummy that is too tight compresses insulation and chills you. Compare printed numbers with your own."
  },
  {
    "criterion": "Weight and packed size",
    "explanation": "Mild-weather mummies should weigh little, but this pair weighs more than ultralight options. Look for a printed weight on the listing. If none appears, plan for a heavier bag."
  }
];

export const faq = [
  {
    "q": "Is a 50F mummy warm enough?",
    "a": "On nights at or above 50F, yes. Colder nights need a warmer bag. The Bessport 3-4 Season Mummy lists a 32F limit."
  },
  {
    "q": "What mistake do buyers make with mummy ratings?",
    "a": "They read the extreme figure as a comfort number. The Bessport title shows 15F, which is an extreme figure. Plan around the 50 to 68F comfort range."
  },
  {
    "q": "Is the Bessport worth over the Amazon Basics?",
    "a": "If you want a mummy fit and cold margin, yes. If you camp in summer only, the Amazon Basics 50F is cheaper. Pick by your coldest night."
  },
  {
    "q": "How do I set up a mummy bag?",
    "a": "Unzip fully, slide in feet first and cinch the hood. Use a pad underneath. Vent a foot if you overheat."
  },
  {
    "q": "How should I clean it?",
    "a": "Machine wash the Amazon Basics 50F as its listing says. Wash the Bessport 3-4 Season Mummy per its tag. Air dry fully."
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
