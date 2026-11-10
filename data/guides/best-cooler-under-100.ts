export const guideSlug = "best-cooler-under-100";
export const guideTitle = "4 Best Cooler Under 100 in 2026";
export const metaTitle = "Best Cooler Under 100 in 2026";
export const metaDescription = "Best coolers under $100: four hard and soft coolers from a 70-quart Coleman chest to a rolling 62-quart and a light 75-can soft cooler for any trip.";
export const mainKeyword = "best cooler under 100";
export const introParagraphs = [
  "A hundred dollars buys a lot of cooler if you stay out of the premium tier. The picks here are big, plain, insulated chests and one very large soft bag, all well under the ceiling.",
  "We compared stated ice life, capacity and handling. The Coleman models list up to 5 days of ice at 90F, which makes them the value anchors, and the Maelstrom is the portable alternative for day use."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/kitchen-campfire-skillet.webp";
export const heroImageAlt = "Breakfast cooking in a cast iron skillet over a campfire";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-cooler-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Coleman Classic Series Insulated Rolling Cooler",
    "price": "$63.73",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31A4Fh7lXdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GRWT8M6K?tag=rvgearlab-20",
    "description": "Coleman's Classic 62 quart rolling cooler keeps ice up to 5 days in temperatures as high as 90F, per the listing. It holds 101 cans without ice or 50 cans with 26 pounds of ice, and has 6 inch all-terrain wheels with tow and swing-up handles.\n\nWheels are what set it apart from the 70 quart Coleman, which has to be lifted and carried. The 62 quart size is also easier to load into a car.\n\nChoose it for family camping where the cooler has to move over sand or gravel. The tow handle makes loading simple.",
    "specs": [
      "5 days of ice at 90F",
      "101 cans without ice",
      "Six-inch all-terrain wheels"
    ],
    "pros": [
      "Up to 5 days of ice at 90F",
      "Wheels and tow handle",
      "Holds 101 cans",
      "Dual handles"
    ],
    "cons": [
      "Costs less than rotomolded coolers but is plastic",
      "Bulky when empty"
    ],
    "bestFor": "Families hauling over rough ground",
    "take": "A solid all-rounder with wheels. Best for loading and hauling.",
    "catch": "It is bulky and not built like a premium rotomolded chest."
  },
  {
    "id": "best-cooler-under-100-2",
    "rank": 2,
    "badge": "Best Capacity for the Price",
    "name": "Coleman Classic Insulated Portable Cooler",
    "price": "$71.23",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31eChrDG-2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07X8RGTHK?tag=rvgearlab-20",
    "description": "The Coleman Classic 70 quart keeps ice up to 5 days in temperatures as high as 90F and holds up to 100 cans. Swing-up handles ease carrying and lifting.\n\nIt matches the 62 quart rolling model on stated ice life, with more capacity. It has no wheels, so it asks more of whoever lifts it.\n\nChoose it if you will lift it into a vehicle and not carry it far. It suits big groups on a budget.",
    "specs": [
      "70 quart, up to 5 days ice",
      "Holds up to 100 cans",
      "Swing-up handles"
    ],
    "pros": [
      "Up to 5 days of ice at 90F",
      "Holds up to 100 cans",
      "Swing-up carry handles",
      "Lower price than the rolling model"
    ],
    "cons": [
      "No wheels",
      "Heavy when full"
    ],
    "bestFor": "Large groups on a budget",
    "take": "The most cooler for the least money. Be ready to lift it.",
    "catch": "A full 70 quart cooler is heavy without wheels."
  },
  {
    "id": "best-cooler-under-100-3",
    "rank": 3,
    "badge": "Best Marine-Style Chest",
    "name": "Igloo 54 Qt Marine Ultra Cooler",
    "price": "$54.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31lWfmMks9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B006H0L5TM?tag=rvgearlab-20",
    "description": "Igloo's 54 quart Marine Ultra has UV inhibitors to protect against sun damage, non-slip swing-up handles and a hybrid latch that is stainless steel in the hinge area. The latch is plastic in the snap area for longer life.\n\nIt is built for boats and sunny days, with more UV and latch detail than the Coleman chests. It is the lowest priced hard cooler here.\n\nChoose it for sunny campsites, fishing and boat trips. The latch holds in wet conditions.",
    "specs": [
      "54 quart marine cooler",
      "UV inhibitors",
      "Hybrid stainless latch"
    ],
    "pros": [
      "UV inhibitors resist sun damage",
      "Hybrid latch is stainless where it counts",
      "Non-slip swing-up handles",
      "Lowest price among hard coolers"
    ],
    "cons": [
      "No ice-retention claim in the summary",
      "No wheels"
    ],
    "bestFor": "Boaters and sunny campsites",
    "take": "A tough marine chest for the sun and spray. Good value.",
    "catch": "The summary offers no ice-hold claim to compare."
  },
  {
    "id": "best-cooler-under-100-4",
    "rank": 4,
    "badge": "Best Soft Cooler",
    "name": "Maelstrom 75Can Soft Cooler Bag",
    "price": "$32.11",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51N3+E0Gp+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09F733B2M?tag=rvgearlab-20",
    "description": "Maelstrom is a 75 can soft cooler that weighs just 1.8 lbs, with a 5-layer insulation structure rated for 12 hours of cold. It is 18 x 12 x 13.8 inches, with double stitching and reinforced handles, and flip-top access.\n\nIt is a fraction of the weight of any hard cooler here, and costs less. It is rated for hours, not days.\n\nChoose it for beach days and picnics. It pairs with a hard cooler for a long trip.",
    "specs": [
      "75 cans, 1.8 lbs",
      "5-layer insulation",
      "12-hour cold rating"
    ],
    "pros": [
      "Weighs only 1.8 lbs",
      "Holds 75 cans plus ice packs",
      "Flip-top access",
      "Double stitching and reinforced handles"
    ],
    "cons": [
      "Cold for about 12 hours",
      "Soft walls need ice packs"
    ],
    "bestFor": "Beach days and picnics",
    "take": "A feather-light bag for day outings. Not for a weekend on its own.",
    "catch": "Twelve hours of cold means a second cooler is needed on longer trips."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated ice life",
    "description": "Days at 90F."
  },
  {
    "title": "Capacity",
    "description": "Cans and quarts."
  },
  {
    "title": "Wheels",
    "description": "Handles and wheels."
  },
  {
    "title": "Durability",
    "description": "UV and latches."
  },
  {
    "title": "Value",
    "description": "Price versus size."
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
    "subheading": "By Trip Length",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Multi-day with wheels",
          "Coleman 62QT Rolling",
          "5 days at 90F, wheels"
        ],
        [
          "Biggest cooler for the price",
          "Coleman 70QT Classic",
          "100 cans at a low price"
        ],
        [
          "Boat and sun",
          "Igloo Marine Ultra 54",
          "UV inhibitors"
        ],
        [
          "Day trip",
          "Maelstrom 75 Can Soft",
          "1.8 lbs"
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
          "$30 to $60",
          "Maelstrom 75 Can Soft or Igloo Marine Ultra 54"
        ],
        [
          "$60 to $80",
          "Coleman 62QT Rolling or Coleman 70QT Classic"
        ]
      ]
    }
  },
  {
    "subheading": "Wheels vs Handles",
    "cards": [
      {
        "label": "Wheels",
        "text": "Easy over distance. Coleman 62QT Rolling."
      },
      {
        "label": "Handles",
        "text": "Cheaper and simpler. Coleman 70QT Classic and Igloo Marine Ultra 54."
      }
    ],
    "note": "Most people should take Coleman 62QT Rolling."
  },
  {
    "subheading": "By Price Priority",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price hard cooler",
          "Igloo Marine Ultra 54"
        ],
        [
          "Best capacity per dollar",
          "Coleman 70QT Classic"
        ],
        [
          "Easiest to move",
          "Coleman 62QT Rolling"
        ],
        [
          "Lightest",
          "Maelstrom 75 Can Soft"
        ]
      ]
    }
  },
  {
    "subheading": "For Boating and Sun Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "UV protection and a latch that survives spray. Check for a marine rating."
      },
      {
        "label": "In this comparison",
        "text": "Igloo Marine Ultra 54 has UV inhibitors and a stainless hinge latch."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Coleman 62QT Rolling for wheels."
      },
      {
        "label": "Save if",
        "text": "Save with Igloo Marine Ultra 54."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Ice life at a stated temperature",
    "explanation": "Coleman lists up to 5 days of ice at 90F on two models. That claim is conditional and best case, and real results will vary with how often you open the lid. Look for the temperature next to the days on any listing."
  },
  {
    "criterion": "Capacity you will fill",
    "explanation": "A 70 quart cooler is overkill for two people, and a half-empty one loses cold faster than a packed one. Bigger chests also need more ice, which takes space from food. Match the size to your group and the number of days."
  },
  {
    "criterion": "Wheels versus handles",
    "explanation": "A loaded 62 quart cooler weighs a lot, and wheels add little cost. If you carry it only a few steps from car to site, handles will do. Look at wheel size and handle design on the listing."
  },
  {
    "criterion": "UV and latch quality",
    "explanation": "Sun weakens plastic and cheap latches break after a season or two. UV inhibitors and stainless hinge parts help a cooler last. Look for those words on the listing if you camp or fish in strong sun."
  },
  {
    "criterion": "Soft versus hard",
    "explanation": "A soft cooler weighs about 1.8 lbs but holds cold for hours, while a hard chest holds ice for days. Pick by trip length, not by price alone. Many campers use a hard cooler for food and a soft bag for drinks."
  },
  {
    "criterion": "Lid design",
    "explanation": "A lid that closes snugly keeps cold in, and a loose one lets warm air through and shortens ice life by hours. At this price the lid and latch are where cost gets cut. Check for gasket or latch wording on the listing, and press the lid shut to feel the seal."
  }
];

export const faq = [
  {
    "q": "Are cheap Coleman coolers good?",
    "a": "They are good value for weekend trips. Coleman lists up to 5 days of ice at 90F on these models, though real results depend on use. They do not match rotomolded coolers for toughness."
  },
  {
    "q": "Is wheels worth it?",
    "a": "If you walk more than a short distance with a full load, yes. A full 62 quart cooler is heavy, and wheels save your back. For a short hop from car to site, handles are enough."
  },
  {
    "q": "Soft or hard cooler?",
    "a": "Hard coolers last days and soft ones last hours. For a weekend of food, take a hard cooler. For a beach day or picnic, a light soft bag is easier."
  },
  {
    "q": "How do I pack a cooler?",
    "a": "Pre-chill the cooler, fill it with cold items and put ice on top. Keep raw meat at the bottom in sealed containers. Fill any empty space so less warm air sits above the ice."
  },
  {
    "q": "How do I clean it?",
    "a": "Drain it, rinse with mild soapy water and dry it with the lid open. A splash of diluted vinegar helps with odors. Store it with the lid ajar."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Cooler",
    "href": "/camp-kitchen/best-cooler"
  },
  {
    "title": "Best Backpacking Cookpots",
    "href": "/camp-kitchen/best-backpacking-cookpots"
  },
  {
    "title": "Best Backpacking Stoves",
    "href": "/camp-kitchen/best-backpacking-stoves"
  },
  {
    "title": "Best Camping Coffee",
    "href": "/camp-kitchen/best-camping-coffee"
  }
];
