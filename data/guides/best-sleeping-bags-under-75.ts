export const guideSlug = "best-sleeping-bags-under-75";
export const guideTitle = "5 Best Sleeping Bags Under 75 in 2026";
export const metaTitle = "Best Sleeping Bags Under 75 in 2026";
export const metaDescription = "Best sleeping bags under $75: what a bigger budget adds over a $30 bag, from a 15F mummy to a 30F cool-weather bag, compared on rating, size and warmth.";
export const mainKeyword = "best sleeping bags under 75";
export const introParagraphs = [
  "Seventy-five dollars is where sleeping bags start to carry real cold-weather ratings, but only a few bags in this price range are worth the money. Two of them have genuine warmth upgrades, and three are cheaper picks that stay on the list so you can see what the extra $20 to $30 buys.",
  "The list runs from a mummy rated down to 15F to a basic summer bag under $20. Moving up the list adds insulation and a mummy cut, and moving down saves weight and money while narrowing the temperature range."
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
    "id": "best-sleeping-bags-under-75-1",
    "rank": 1,
    "badge": "Best Value Under $75",
    "name": "Amazon Basics 30°F Cool Weather Sleeping Bag for Adults",
    "price": "$36.40",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31vFqjneCaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BKKZ9VRB?tag=rvgearlab-20",
    "description": "The Amazon Basics bag is rated for 30F cool weather, measures 75 by 33 inches and uses hollow fiber insulation with a tricot fiber liner. It converts to a quilt and comes with a stuff sack, and the zipper has extra webbing to prevent snags.\n\nIt sits in the middle of the budget and gives the best balance of warmth and price, with a real 30F rating that the cheaper bags lack. The Bessport goes colder and costs more, while the TANSTRIDER and NewDoar cover only warm nights.\n\nIt suits car campers and families who camp from early spring to late fall. At 75 inches long it suits adults near 6 feet tall.",
    "specs": [
      "30F cool weather rating",
      "75 x 33 inch, hollow fiber fill",
      "Converts to a quilt"
    ],
    "pros": [
      "Real 30F rating at a fair price",
      "Converts into a quilt",
      "Zipper webbing prevents snags",
      "Soft tricot liner"
    ],
    "cons": [
      "75 inch length is short for tall campers",
      "Heavier than ultralight bags"
    ],
    "bestFor": "Spring to fall car camping",
    "take": "The sensible all-round bag for most campers under this cap.",
    "catch": "At 75 inches it is a snug fit for anyone over 6 feet."
  },
  {
    "id": "best-sleeping-bags-under-75-2",
    "rank": 2,
    "badge": "Best Cold-Weather Pick",
    "name": "Bessport Mummy Sleeping Bag",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41e3bnxlOpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07V5HSB91?tag=rvgearlab-20",
    "description": "The Bessport is a mummy bag with a 15 to 45F range for 3 to 4 seasons, a 210T ripstop polyester shell and quilted construction. It has an insulated footbox, double SBS zippers with an anti-snag slider and a girth of 63 inches at the shoulder, 50.3 at the hip and 33 at the foot.\n\nIt is the warmest bag on the list and the only one with a stated range reaching down to 15F. It costs about $13 more than the Amazon Basics and is cut for tall sleepers up to 6 feet 6 inches.\n\nIt suits cold-weather campers, hunters and fall hikers who want a snug mummy that traps heat. It is the bag to buy if nights drop below freezing.",
    "specs": [
      "15 to 45F, mummy cut",
      "210T ripstop, insulated footbox",
      "Fits adults up to 6 ft 6 in"
    ],
    "pros": [
      "Rated down to 15F",
      "Fits sleepers up to 6 ft 6 in",
      "Quilted insulated footbox",
      "Double zippers with anti-snag slider"
    ],
    "cons": [
      "Mummy cut feels snug",
      "Costs the most of the five"
    ],
    "bestFor": "Cold nights and fall camping",
    "take": "The warmest bag under $75 for campers who sleep near freezing.",
    "catch": "A mummy cut is narrower than a rectangular bag, so restless sleepers may feel boxed in."
  },
  {
    "id": "best-sleeping-bags-under-75-3",
    "rank": 3,
    "badge": "Best Budget Four-Season",
    "name": "tuphen- Sleeping Bags for Adults Kids Boys Girls Backpacking Hiking Camping Microfiber Liner",
    "price": "$19.94",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41G70u6vjuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0851GVCBX?tag=rvgearlab-20",
    "description": "The tuphen is a 29.5 by 86.6 inch bag rated at 5 to 25C, roughly 41 to 77F, with a comfortable band of 17 to 24C. It has a microfiber liner, a two-way zipper and a carry bag.\n\nIt is one of the cheapest bags here and gives a long 86.6 inch cut, which the Amazon Basics at 75 inches lacks. Its temperature range stays on the warm side, so it works from late spring to early fall rather than in true cold.\n\nIt suits tall campers and families who want a long bag on a tight budget. Sleepers up to roughly 6 feet 3 inches have room.",
    "specs": [
      "5 to 25C rated, 86.6 inches",
      "Microfiber liner",
      "Two-way zipper"
    ],
    "pros": [
      "Long 86.6 inch cut fits tall campers",
      "Microfiber liner feels soft",
      "Two-way zipper for venting",
      "Packs into a carry bag"
    ],
    "cons": [
      "Warm range, about 41 to 77F",
      "Narrow 29.5 inch width"
    ],
    "bestFor": "Tall campers on a budget",
    "take": "A long, low-cost bag for mild weather.",
    "catch": "The narrow cut and warm range limit it to summer and early fall."
  },
  {
    "id": "best-sleeping-bags-under-75-4",
    "rank": 4,
    "badge": "Best Ultralight Pick",
    "name": "Ultralight 1.5lbs Sleeping Bag 50-70°F for Warm Weather-Blue",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ITLrJK8JL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F83BP6VQ?tag=rvgearlab-20",
    "description": "Weight comes in at 1.5 lb for the NewDoar, which squeezes into a bundle of 11.8 by 6.5 inches. Its 380T ripstop nylon shell, heavy-duty compression sack and joinable two-way zippers come with a 50 to 70F range.\n\nThis is the lightest and smallest bag on the list, and it costs about $10 less than the Amazon Basics. It gives up the warmth of the Amazon Basics and the Bessport and carries a medium size only.\n\nIt suits summer backpackers who count every ounce. It is a poor choice for cool nights.",
    "specs": [
      "Packs to 11.8 x 6.5 inches",
      "380T ripstop nylon shell",
      "50 to 70F range"
    ],
    "pros": [
      "Lightest and smallest of the five",
      "Ripstop shell resists tears",
      "Zips to a second bag",
      "Packs very small"
    ],
    "cons": [
      "Rated for 50 to 70F only",
      "Medium size only"
    ],
    "bestFor": "Summer backpacking",
    "take": "The bag to carry when the forecast stays warm and weight matters.",
    "catch": "It carries little insulation, so cool nights are a stretch."
  },
  {
    "id": "best-sleeping-bags-under-75-5",
    "rank": 5,
    "badge": "Best Cheapest Draft-Collar Bag",
    "name": "TANSTRIDER Sleeping Bags for Adults",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41imdQSdq+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FQ4ZBCYC?tag=rvgearlab-20",
    "description": "Cut at 31.5 by 86.6 inches, the TANSTRIDER lists a 55 to 60F comfort range and a 40F limit. It adds a draft collar, separate foot zippers, a water-resistant shell and a compression sack.\n\nIt is the cheapest bag in the five and the only budget pick with a draft collar and foot zippers. The Amazon Basics costs about twice as much and adds a real cool-weather rating.\n\nIt suits summer campers who want a roomy bag at the lowest price. Anyone up to about 6 feet 1 inch has room.",
    "specs": [
      "31.5 x 86.6 inch cut",
      "Comfort 55 to 60F, limit 40F",
      "Draft collar, foot zippers"
    ],
    "pros": [
      "Lowest price of the five",
      "Draft collar blocks neck drafts",
      "Foot zippers vent the feet",
      "Roomy cut for tall campers"
    ],
    "cons": [
      "Comfort range starts at 55F",
      "Water-resistant, not waterproof"
    ],
    "bestFor": "Summer budget camping",
    "take": "A roomy, cheap bag for the warm months.",
    "catch": "The 55F comfort figure means it is a summer bag."
  }
];

export const howWeEvaluated = [
  {
    "title": "Temperature rating",
    "description": "Stated comfort and limit ratings were compared across the five bags, with the 15F and 30F bags separated from the summer bags."
  },
  {
    "title": "Insulation and shape",
    "description": "Mummy and rectangular cuts and insulation types were compared on how much warmth each gives."
  },
  {
    "title": "Length and fit",
    "description": "Bag length and width were compared against typical adult heights."
  },
  {
    "title": "Weight and packed size",
    "description": "Weight and packed dimensions were weighed against car camping and backpacking use."
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
    "subheading": "By lowest night temperature",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Nights near 15 to 30F",
          "Bessport Mummy Bag",
          "Rated down to 15F with an insulated footbox."
        ],
        [
          "Nights around 30 to 40F",
          "Amazon Basics 30F Bag",
          "Rated for 30F cool weather."
        ],
        [
          "Warm summer nights",
          "NewDoar Ultralight",
          "1.5 lb and 50 to 70F range."
        ],
        [
          "Tall camper, mild nights",
          "tuphen Microfiber Bag",
          "86.6 inch length, 41 to 77F range."
        ],
        [
          "Tight budget",
          "TANSTRIDER Adult Bag",
          "Lowest price with a draft collar."
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
          "TANSTRIDER Adult Bag or tuphen Microfiber Bag"
        ],
        [
          "$20 to $40",
          "NewDoar Ultralight or Amazon Basics 30F Bag"
        ],
        [
          "$40 to $50",
          "Bessport Mummy Bag"
        ]
      ]
    }
  },
  {
    "subheading": "Mummy vs rectangular",
    "cards": [
      {
        "label": "Mummy",
        "text": "A mummy cut tapers to the feet to hold heat. The Bessport Mummy Bag uses this shape and goes down to 15F."
      },
      {
        "label": "Rectangular",
        "text": "A rectangular bag gives more room and unzips flat as a quilt. The Amazon Basics 30F Bag and tuphen Microfiber Bag use this style."
      }
    ],
    "note": "Most campers should buy the Amazon Basics 30F Bag, and choose the Bessport Mummy Bag only for nights near freezing."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Spend",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $20",
          "TANSTRIDER Adult Bag"
        ],
        [
          "Around $20",
          "tuphen Microfiber Bag"
        ],
        [
          "Around $28",
          "NewDoar Ultralight"
        ],
        [
          "Around $36",
          "Amazon Basics 30F Bag"
        ],
        [
          "Around $50",
          "Bessport Mummy Bag"
        ]
      ]
    }
  },
  {
    "subheading": "For cold-weather camping specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a stated 15F to 30F rating, an insulated footbox and a draft collar or hood."
      },
      {
        "label": "In this comparison",
        "text": "The Bessport Mummy Bag has a 15 to 45F range and an insulated footbox, and the Amazon Basics 30F Bag is rated for 30F cool weather."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if nights drop below 35F, since the Bessport Mummy Bag gives a 15F range and the Amazon Basics 30F Bag gives real cool-weather insulation."
      },
      {
        "label": "Save if",
        "text": "Save if you camp only in warm weather, because the TANSTRIDER Adult Bag and tuphen Microfiber Bag cost under $20 and cover summer nights."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Real temperature ratings",
    "explanation": "A sleeping bag with a 30F or 15F rating is built for colder nights, while a bag with a 50 to 70F range is a summer bag. The number in the title is often the limit, not the comfort rating. Check whether the product states both numbers, and choose a bag rated at least 10 degrees below the lowest night temperature you expect."
  },
  {
    "criterion": "Mummy vs rectangular cut",
    "explanation": "A mummy bag tapers to the feet and traps more heat, but it feels snug around the hips. A rectangular bag gives room to roll over and costs less, yet it leaks heat at the shoulders. If you camp near freezing, choose the mummy, and if you camp in mild weather, choose the roomier rectangle."
  },
  {
    "criterion": "Length for tall campers",
    "explanation": "A bag shorter than your height compresses the insulation at the feet and lets cold in. Look for a stated length of at least 6 inches more than your height. The 75 inch Amazon Basics fits up to about 6 feet, while the 86.6 inch bags fit taller adults."
  },
  {
    "criterion": "Shell and wet weather",
    "explanation": "A 210T ripstop polyester shell resists tears and sheds light moisture, while a nylon shell wipes clean. Neither is waterproof, so keep the bag in a tent. Look for the shell fabric and denier or thread count in the feature list, and treat a water-resistant claim as a splash guard."
  },
  {
    "criterion": "Weight and packed volume",
    "explanation": "A cold-weather bag weighs 3 to 4 lb and fills a large stuff sack, while a summer bag can weigh 1.5 lb. Car campers can ignore weight, but backpackers cannot. Look for the packed dimensions and weight, and plan for the extra space a warmer bag takes."
  }
];

export const faq = [
  {
    "q": "Is a 15F bag enough for winter camping?",
    "a": "It is enough for light freezing nights, not for deep winter. The Bessport Mummy Bag has a 15 to 45F range, and the real comfort point sits higher than the lowest number. For nights below 20F, add a pad with a high R-value and a liner."
  },
  {
    "q": "What does a 30F rating mean?",
    "a": "A 30F rating describes the lowest temperature where the bag still protects an average sleeper, not where you stay comfortable. The Amazon Basics 30F Bag is a cool-weather bag, so plan on using it above 40F for comfort. Add a base layer for colder nights."
  },
  {
    "q": "Can I use a summer bag in spring?",
    "a": "Yes, with limits. The NewDoar Ultralight is rated for 50 to 70F, so it suits late spring only if nights stay above 50F. Add a liner and wear dry clothes, and move to a 30F bag if the forecast dips."
  },
  {
    "q": "How do I keep a cold-weather bag from absorbing moisture?",
    "a": "Sleep with a pad under you and keep the bag away from the tent wall, since condensation drips from the walls. Dry the bag in the sun each morning and store it loose, not compressed. Wet insulation loses much of its warmth."
  },
  {
    "q": "Is a double-zip sleeping bag worth it?",
    "a": "A two-way zipper lets you open the foot end to vent heat, and some bags zip together as a double. The NewDoar Ultralight zips to a second bag, and the Bessport Mummy Bag has double SBS zippers. It is useful on warm nights and for couples."
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
