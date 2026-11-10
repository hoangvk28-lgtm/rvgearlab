export const guideSlug = "best-hiking-daypack-under-100";
export const guideTitle = "5 Best Hiking Daypack Under 100 in 2026";
export const metaTitle = "Best Hiking Daypack Under 100 in 2026";
export const metaDescription = "Best hiking daypacks under $100: 14L to 40L day bags with rain covers, packable designs and padded straps that cost a fraction of that ceiling.";
export const mainKeyword = "best hiking daypack under 100";
export const introParagraphs = [
  "A daypack under $100 is easy to find, and every pick here costs well under that ceiling. The more useful question is what you actually carry: a quick water-and-snack bag, or a roomy 40L that holds layers, lunch and a camera.",
  "These five run from a 14L ultralight foldable to a 40L pack with a rain cover. They are ranked by how well each handles a full day on the trail."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/hiking-backpacker-mountain.webp";
export const heroImageAlt = "Hiker with a loaded backpack climbing a mountain trail";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-hiking-daypack-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Maelstrom 40L Hiking Backpack",
    "price": "$35.91",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51tHsFlkBOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09P1HZRXH?tag=rvgearlab-amz-20",
    "description": "The Maelstrom 40L is built from rip-stop 210D nylon that the listing calls water resistant, tear resistant and wear resistant. It comes with a rain cover, a thicker padded back, breathable mesh shoulder straps and reflective prints, with elastic side holders for gear.\n\nCompared with the FENGDONG, it adds a rain cover and a more padded back panel. Against the packable bags, it is a structured pack that holds its shape.\n\nIt suits day hikers who carry layers, lunch and a camera. Several pockets keep gear organized.",
    "specs": [
      "40L rip-stop 210D nylon",
      "Rain cover included",
      "Padded back, reflective prints"
    ],
    "pros": [
      "Rain cover comes in the box",
      "Thick padding on back and straps",
      "Rip-stop nylon resists tears",
      "Reflective prints for safety"
    ],
    "cons": [
      "Bulky for short walks",
      "Basic frame, no hip belt listed"
    ],
    "bestFor": "Day hikers carrying layers",
    "take": "The most complete day pack under the ceiling. A great all-weather starter.",
    "catch": "At 40L it is more than a short walk needs, so it can feel bulky."
  },
  {
    "id": "best-hiking-daypack-under-100-2",
    "rank": 2,
    "badge": "Best Foldable 40L",
    "name": "FENGDONG 40L Waterproof Lightweight Outdoor Daypack Hiking",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51UPeq-braL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07T9LR6DH?tag=rvgearlab-amz-20",
    "description": "The FENGDONG 40L measures 20.5 by 13 by 7.1 inches, weighs 1.9 pounds and folds into its own pocket. High-density water-resistant polyester, ventilated mesh padding on the straps and back and multiple compartments make up the build.\n\nCompared with the Maelstrom, it folds away and costs a bit less. Against the MIYCOO 35L, it has a more padded back and a bigger capacity.\n\nIt suits hikers who want a full-size day pack that also packs down for travel. Extra thick fabric resists tears.",
    "specs": [
      "40L, 1.9 lb",
      "Folds into its own pocket",
      "Water-resistant polyester"
    ],
    "pros": [
      "Folds into its pocket for travel",
      "Ventilated mesh padding",
      "Large 40L capacity",
      "Tear-resistant thick fabric"
    ],
    "cons": [
      "No rain cover listed",
      "Folded size still bulky"
    ],
    "bestFor": "Hikers who also travel",
    "take": "A big day pack that tucks away. A good value at a low price.",
    "catch": "It does not list a rain cover, so bring a liner for wet days."
  },
  {
    "id": "best-hiking-daypack-under-100-3",
    "rank": 3,
    "badge": "Best Packable",
    "name": "MIYCOO Ultralight Packable Backpack",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-ExJ3QLBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7VXT59K?tag=rvgearlab-amz-20",
    "description": "The MIYCOO is a 35L packable backpack with IPX4 water-resistant fabric and three compartments, including a wet pocket. It folds into its inner pocket, weighs about half as much as a phone and carries a survival whistle with lockable zipper clips.\n\nCompared with the Maelstrom, it is far lighter and cheaper. Against the AiryLeben 14L, it more than doubles the capacity.\n\nIt suits budget hikers who want a light bag for easy trails. It also tucks into a suitcase.",
    "specs": [
      "35L, folds into pocket",
      "IPX4 water-resistant fabric",
      "Wet compartment, whistle"
    ],
    "pros": [
      "Very light and packable",
      "Splash-resistant IPX4 fabric",
      "Wet compartment for damp gear",
      "Whistle on the chest strap"
    ],
    "cons": [
      "Little padding for heavy loads",
      "No rain cover listed"
    ],
    "bestFor": "Budget hikers on easy trails",
    "take": "A cheap and cheerful day bag. Best with a light load.",
    "catch": "Padding is thin, so keep it under a few pounds."
  },
  {
    "id": "best-hiking-daypack-under-100-4",
    "rank": 4,
    "badge": "Best Light Short Hikes",
    "name": "AiryLeben 14L Small Hiking Backpack",
    "price": "$19.03",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41AH5CxMR4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H5B1FP4D?tag=rvgearlab-amz-20",
    "description": "The AiryLeben 14L weighs 0.68 pounds and folds into a built-in pouch. A zippered phone sleeve sits on the right shoulder strap, with reflective strips, breathable mesh straps and an emergency whistle, and it is hydration bladder compatible.\n\nCompared with the MIYCOO 35L, it is much smaller and tidier for short hikes. Against the WATERFLY Sling, it carries more and uses two shoulders.\n\nIt suits short hikes and days where you only need water and a snack. The shoulder phone sleeve is handy for photos.",
    "specs": [
      "14L, 0.68 lb",
      "Phone pocket on the strap",
      "Bladder compatible, whistle"
    ],
    "pros": [
      "Quick phone access on the strap",
      "Hydration bladder compatible",
      "Light at 0.68 pounds",
      "Folds into its own pouch"
    ],
    "cons": [
      "14L is too small for layers",
      "Basic padding"
    ],
    "bestFor": "Short hikes with a bladder",
    "take": "A tidy small pack that works with a bladder. Great for quick trips.",
    "catch": "It holds only essentials, not a full day kit."
  },
  {
    "id": "best-hiking-daypack-under-100-5",
    "rank": 5,
    "badge": "Best Sling Option",
    "name": "WATERFLY Crossbody Sling Backpack Sling Bag Travel Hiking Chest Bag Daypack",
    "price": "$21.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TLoC8+ujL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07TB11KMW?tag=rvgearlab-amz-20",
    "description": "The WATERFLY Sling is a crossbody bag measuring 7 by 3.5 by 15 inches, with a front zipper pocket and a buckle pocket for an iPad mini or phone. A reversible shoulder strap connects to three D-rings, and the listing mentions a hidden earphone hole.\n\nIt is the quickest bag here to reach. Compared with the AiryLeben, it keeps items at the front rather than on the back.\n\nIt suits walkers who prefer a light one-shoulder bag. It also works for easy trails and city strolls.",
    "specs": [
      "7 x 3.5 x 15 inch crossbody",
      "Reversible three D-ring strap",
      "Hidden earphone hole"
    ],
    "pros": [
      "Quick front access",
      "Reversible left or right strap",
      "Breathable back and strap",
      "Light and low cost"
    ],
    "cons": [
      "Too small for water bottles and layers",
      "One-shoulder carry limits load"
    ],
    "bestFor": "Easy walks and trail strolls",
    "take": "A tiny, handy bag. Pair it with a larger pack for real hikes.",
    "catch": "Capacity is minimal, so it does not replace a day pack."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Listed liters were weighed against a full day of water, food and layers."
  },
  {
    "title": "Padding and straps",
    "description": "Back panels, shoulder straps and chest straps were compared for comfort."
  },
  {
    "title": "Weather protection",
    "description": "Rain covers and fabric water resistance were weighed for changing conditions."
  },
  {
    "title": "Value",
    "description": "All five are far under $100, so features per dollar decided the order."
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
    "subheading": "By Hike Length",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Full day, layers and lunch",
          "Maelstrom 40L Rain Cover",
          "40L with a rain cover."
        ],
        [
          "Full day, also travels",
          "FENGDONG 40L",
          "40L that folds into its pocket."
        ],
        [
          "Easy trail, light budget",
          "MIYCOO 35L",
          "35L packable with a wet pocket."
        ],
        [
          "Short hike with a bladder",
          "AiryLeben 14L",
          "Bladder compatible at 0.68 pounds."
        ],
        [
          "Quick walk, essentials only",
          "WATERFLY Sling",
          "Front access crossbody."
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
          "$10 to $20",
          "MIYCOO 35L or AiryLeben 14L"
        ],
        [
          "$20 to $30",
          "WATERFLY Sling or FENGDONG 40L"
        ],
        [
          "$30 to $40",
          "Maelstrom 40L Rain Cover"
        ]
      ]
    }
  },
  {
    "subheading": "Structured Pack vs Foldable Bag",
    "cards": [
      {
        "label": "Structured",
        "text": "Holds its shape and carries load better. The Maelstrom 40L Rain Cover is the main example."
      },
      {
        "label": "Foldable",
        "text": "Packs into a pouch for travel. The FENGDONG 40L, MIYCOO 35L and AiryLeben 14L fold away."
      }
    ],
    "note": "Most hikers should choose the Maelstrom 40L Rain Cover for all-weather days."
  },
  {
    "subheading": "By Price Tier",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $20",
          "AiryLeben 14L"
        ],
        [
          "Around $17",
          "MIYCOO 35L"
        ],
        [
          "Around $22",
          "WATERFLY Sling"
        ],
        [
          "Around $28 to $36",
          "FENGDONG 40L"
        ]
      ]
    }
  },
  {
    "subheading": "For Rainy Day Hikes Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A included rain cover and water-resistant fabric."
      },
      {
        "label": "In this comparison",
        "text": "The Maelstrom 40L Rain Cover includes a cover and the MIYCOO 35L lists IPX4 fabric."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Maelstrom 40L Rain Cover if you hike in changing weather, since the rain cover and padded back earn their cost."
      },
      {
        "label": "Save if",
        "text": "Save with the MIYCOO 35L or AiryLeben 14L if your hikes are easy and dry, since both are light and cheap."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What $100 buys",
    "explanation": "A daypack under $100 can include padded straps, a rain cover and decent fabric. Every pick here costs far less. Spend the saved money on a real water bottle or bladder."
  },
  {
    "criterion": "Capacity for a day",
    "explanation": "Short walks need 10 to 15L, and full days with layers need 20 to 30L. A 40L bag is more than most day hikes use. Check the liters and think about your actual kit."
  },
  {
    "criterion": "Rain protection",
    "explanation": "Water-resistant fabric sheds light rain, and a rain cover covers the rest. The Maelstrom 40L includes one. Bring a liner or dry bag for anything that must stay dry."
  },
  {
    "criterion": "Padding and breathability",
    "explanation": "Mesh padding keeps your back cooler, and thick foam shoulder straps spread the load. Wide straps matter more than thin foam. Check for padded straps and a ventilated back panel in the listing."
  },
  {
    "criterion": "Packability",
    "explanation": "A foldable bag like the FENGDONG 40L or MIYCOO 35L packs into a suitcase. Check the folded size on the listing. A structured pack feels better on long hikes."
  }
];

export const faq = [
  {
    "q": "Is a cheap daypack good enough?",
    "a": "For most day hikes, yes. These packs handle water, snacks and a jacket. Heavier loads call for a more supportive pack."
  },
  {
    "q": "How big should my daypack be?",
    "a": "Pick 15 to 25L for most days and 30 to 40L for extra layers. The Maelstrom 40L is on the large side. Choose by what you actually carry."
  },
  {
    "q": "Do I need a rain cover?",
    "a": "It helps keep gear dry in a downpour. The Maelstrom 40L includes one. Otherwise use a trash bag liner."
  },
  {
    "q": "Can I use a hydration bladder?",
    "a": "The AiryLeben 14L lists bladder compatibility. Check other bags for a bladder sleeve and a hose port before you buy."
  },
  {
    "q": "How do I clean the bag?",
    "a": "Wipe it with a damp cloth and let it air dry. Avoid machine washing. Store it loosely folded."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Hiking Baby Carrier For 6 Month Old",
    "href": "/packs-hiking/best-hiking-baby-carrier-for-6-month-old"
  },
  {
    "title": "Best Hiking Umbrella For Sun",
    "href": "/packs-hiking/best-hiking-umbrella-for-sun"
  },
  {
    "title": "Best Hiking Watches For Men",
    "href": "/packs-hiking/best-hiking-watches-for-men"
  },
  {
    "title": "Best Umbrella For Wind And Rain",
    "href": "/packs-hiking/best-umbrella-for-wind-and-rain"
  }
];
