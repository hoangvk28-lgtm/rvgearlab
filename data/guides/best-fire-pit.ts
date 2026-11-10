export const guideSlug = "best-fire-pit";
export const guideTitle = "6 Best Fire Pit in 2026";
export const metaTitle = "Best Fire Pit in 2026";
export const metaDescription = "Wood-burning fire pits compared by size and features, from 22 inch portable bowls to 43 inch fire pit tables with grills, for campsites and backyards.";
export const mainKeyword = "best fire pit";
export const introParagraphs = [
  "A fire pit anchors the evening, whether it sits in a campground or a backyard. The right size depends on how many people gather and whether you want to cook on it.",
  "At RV Gear Lab, we compared these six wood-burning fire pits by diameter, grill options, safety accessories and build. Most are home-and-campsite pits rather than ultralight gear, and campground rules on open fires still apply."
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
    "id": "best-fire-pit-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "OutVue 36 Inch Fire Pit with 2 Grills",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/61pZEVS54oL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C64VCSKN?tag=rvgearlab-amz-20",
    "description": "OutVue is a 36 inch wood-burning fire pit with two cooking grills, a lid and a tabletop. The grills are height adjustable and swivel 360 degrees, and the pit holds up to 20 lb of wood.\n\nIt offers more cooking flexibility than the smaller bowls and sits between the 32 inch tables and the 43 inch FansaFurn. The lid and tabletop turn it into a table when not burning.\n\nFamilies who want to cook and sit around the fire will like the 3-in-1 design. It makes a strong centerpiece.",
    "specs": [
      "36 inch, 2 swivel grills",
      "Lid and tabletop included",
      "Holds up to 20 lb wood"
    ],
    "pros": [
      "Two height-adjustable grills",
      "Lid turns it into a table",
      "Holds up to 20 lb of wood",
      "Roaring fire warmth"
    ],
    "cons": [
      "Heavy to move",
      "Takes patio-size space"
    ],
    "bestFor": "Family fire nights",
    "take": "The most useful all-round pit with grills and a lid.",
    "catch": "Bulky for a small car."
  },
  {
    "id": "best-fire-pit-2",
    "rank": 2,
    "badge": "Best Large Pit",
    "name": "43\" Fire Pit",
    "price": "$90.62",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51fESmtewjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G35GL4WW?tag=rvgearlab-amz-20",
    "description": "FansaFurn is a 43 inch 3-in-1 fire pit with two removable grill plates that rotate 360 degrees. A high-temperature protective coating guards against rust.\n\nAt 43 inches it is the biggest in the group, with room for a larger crowd than the 36 inch OutVue. It is also the second most affordable of the large pits.\n\nGroup gatherings and backyard parties will like the space. The grills let you cook for a crowd.",
    "specs": [
      "43 inch fire pit",
      "Two rotating grill plates",
      "Rust-resistant coating"
    ],
    "pros": [
      "Biggest fire bowl here",
      "Removable rotating grills",
      "Rust-resistant coating",
      "Fair price"
    ],
    "cons": [
      "Large footprint",
      "Hard to move"
    ],
    "bestFor": "Large groups",
    "take": "The roomy pick for big gatherings.",
    "catch": "Needs a lot of space."
  },
  {
    "id": "best-fire-pit-3",
    "rank": 3,
    "badge": "Best Safety Accessories",
    "name": "Quilushey 32 Inch Fire Pit Table with Fire Poker & Spark Screen",
    "price": "$71.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51ZG-dmZBPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F8Q363R5?tag=rvgearlab-amz-20",
    "description": "Quilushey is a 32 inch square fire pit table that works as a wood-burning fire pit, a BBQ grill or an ice bucket cooler. It includes a spark screen mesh cover and a fire poker.\n\nIt is the one that ships with the safety accessories, which the OutVue does not list. Heavy-duty iron with a powder-coated black finish stands up to weather.\n\nPatio and campsite hosts who care about stray sparks will like the screen and poker. The poker keeps hands away from the coals.",
    "specs": [
      "32 inch square fire pit table",
      "Spark screen and fire poker",
      "Powder-coated heavy iron"
    ],
    "pros": [
      "Spark screen included",
      "Fire poker included",
      "Heavy-duty iron",
      "Works as grill or cooler"
    ],
    "cons": [
      "Smaller than OutVue",
      "Iron is heavy"
    ],
    "bestFor": "Safety-minded hosts",
    "take": "A complete kit with a spark screen and poker.",
    "catch": "Square shape needs tidy log sizes."
  },
  {
    "id": "best-fire-pit-4",
    "rank": 4,
    "badge": "Best Deep Bowl",
    "name": "EcoNook 32 inch Square Outdoor Fire Pit Table with Spark Screen",
    "price": "$62.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51GGvpuufxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DBKNMD89?tag=rvgearlab-amz-20",
    "description": "EcoNook is a 32 inch square fire pit table with a fire bowl 24 inches wide and 4.6 inches deep. The frame uses thicker iron, with triangular reinforcements on each leg.\n\nThe deeper bowl holds more wood than shallower pits like the Quilushey. It includes a spark screen.\n\nCampers who burn bigger logs will like the capacity. The reinforced legs add stability.",
    "specs": [
      "24 in wide, 4.6 in deep bowl",
      "Thicker iron frame",
      "Includes spark screen"
    ],
    "pros": [
      "Deep bowl holds more wood",
      "Reinforced legs",
      "Spark screen included",
      "Low price"
    ],
    "cons": [
      "No grill included",
      "Heavy for transport"
    ],
    "bestFor": "Log burners",
    "take": "The deeper bowl for longer burns.",
    "catch": "No built-in cooking grate."
  },
  {
    "id": "best-fire-pit-5",
    "rank": 5,
    "badge": "Best Portable Pit",
    "name": "Gas One 22 in Outdoor",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41aOqxYDdPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09VS4NGQC?tag=rvgearlab-amz-20",
    "description": "Gas One 22 inch wood-burning fire pit has a durable alloy steel build with a mesh lid and a fire picker. Rust-resistant construction is built to last.\n\nIt is the most portable of the pits here, and it is smaller and cheaper than the 32 inch tables. The mesh lid helps contain sparks.\n\nCampers who want a compact fire for a small site will like it. The fire picker makes tending logs easy.",
    "specs": [
      "22 inch alloy steel pit",
      "Mesh lid and fire picker",
      "Rust-resistant build"
    ],
    "pros": [
      "Compact and portable",
      "Mesh lid contains sparks",
      "Rust-resistant steel",
      "Low price"
    ],
    "cons": [
      "Small fire bowl",
      "Fewer extras"
    ],
    "bestFor": "Small sites",
    "take": "A tidy pit for car camping.",
    "catch": "Small bowl needs short logs."
  },
  {
    "id": "best-fire-pit-6",
    "rank": 6,
    "badge": "Best Budget Pit",
    "name": "GasOne 23 in Outdoor",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41mk8-cBqwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZM51SW5?tag=rvgearlab-amz-20",
    "description": "Gas One 23 inch wood-burning fire pit uses durable alloy steel and keeps the same simple construction as the 22 inch. It is a small fire pit meant to create a welcoming atmosphere.\n\nIt is the cheapest pit here and a hair larger than the 22 inch model. It is the simplest choice for casual fires.\n\nBudget campers and backyard users will like the price. It is a good starter pit for a first season of fires.",
    "specs": [
      "23 inch alloy steel pit",
      "Rust-resistant build",
      "Small wood burning bowl"
    ],
    "pros": [
      "Lowest price here",
      "Simple steel build",
      "Small footprint",
      "Easy to store"
    ],
    "cons": [
      "No mesh lid listed",
      "Basic design"
    ],
    "bestFor": "Budget fires",
    "take": "The cheapest way to have a fire.",
    "catch": "Fewer accessories."
  }
];

export const howWeEvaluated = [
  {
    "title": "Size",
    "description": "Compared diameters and bowl depth."
  },
  {
    "title": "Cooking options",
    "description": "Looked at grills and tabletops."
  },
  {
    "title": "Safety accessories",
    "description": "Considered spark screens, pokers and lids."
  },
  {
    "title": "Build",
    "description": "Compared iron, alloy steel and coatings."
  },
  {
    "title": "Portability",
    "description": "Weighed footprint and weight."
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
    "subheading": "By Group Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Large group",
          "FansaFurn 43 Inch",
          "43 inch bowl."
        ],
        [
          "Family cooking",
          "OutVue 36 Inch",
          "Two grills."
        ],
        [
          "Couple with spark control",
          "Quilushey 32 Inch",
          "Spark screen and poker."
        ],
        [
          "Small site",
          "Gas One 22 Inch",
          "Portable."
        ],
        [
          "Budget",
          "Gas One 23 Inch",
          "Lowest price."
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
          "$30 to $50",
          "Gas One 23 Inch or Gas One 22 Inch"
        ],
        [
          "$60 to $80",
          "EcoNook 32 Inch or Quilushey 32 Inch"
        ],
        [
          "$90 to $100",
          "FansaFurn 43 Inch or OutVue 36 Inch"
        ]
      ]
    }
  },
  {
    "subheading": "Table Style vs Bowl Style",
    "cards": [
      {
        "label": "Table style",
        "text": "Larger with grills and lids. OutVue 36 Inch, FansaFurn 43 Inch, Quilushey 32 Inch and EcoNook 32 Inch fit this group."
      },
      {
        "label": "Bowl style",
        "text": "Smaller and more portable. Gas One 22 Inch and Gas One 23 Inch are bowls."
      }
    ],
    "note": "Most buyers should default to OutVue 36 Inch."
  },
  {
    "subheading": "By Feature",
    "table": {
      "headers": [
        "If you want",
        "Recommended pick"
      ],
      "rows": [
        [
          "Spark screen and poker",
          "Quilushey 32 Inch"
        ],
        [
          "Deep bowl",
          "EcoNook 32 Inch"
        ],
        [
          "Mesh lid",
          "Gas One 22 Inch"
        ]
      ]
    }
  },
  {
    "subheading": "For Dry Campsites Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A spark screen or mesh lid."
      },
      {
        "label": "In this comparison",
        "text": "Quilushey 32 Inch and Gas One 22 Inch both include screens."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on OutVue 36 Inch for features."
      },
      {
        "label": "Save if",
        "text": "Save with Gas One 23 Inch."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fire bowl size",
    "explanation": "A 22 inch bowl suits a small group, while 36 to 43 inches fits a crowd. Check the diameter and depth in the listing. Bigger bowls burn longer logs."
  },
  {
    "criterion": "Cooking grill",
    "explanation": "Swiveling grills let you cook over the fire, which is great for hot dogs and burgers. Not every pit includes one. Check the listing for grills."
  },
  {
    "criterion": "Spark control",
    "explanation": "A mesh lid or spark screen contains embers, which matters in dry conditions. Always check campground fire rules. Look for screens and pokers."
  },
  {
    "criterion": "Frame and finish",
    "explanation": "Thicker iron with a powder or high-temperature coating resists rust. Reinforced legs add stability. Weak coatings flake and rust quickly after a season outside. Check the material and finish in the listing."
  },
  {
    "criterion": "Weight and transport",
    "explanation": "Large iron pits weigh a lot, while 22 inch pits fit easily in a car trunk. Moving a heavy pit across a lawn or site is a real chore. Check the listed dimensions and think about how you will carry it."
  }
];

export const faq = [
  {
    "q": "Can I use these fire pits at a campground?",
    "a": "Check campground rules first, since some require a fixed fire ring or ban open flames in dry weather. These pits suit private campsites and backyards best. Never leave a fire unattended."
  },
  {
    "q": "What size fire pit do I need?",
    "a": "A 22 inch pit suits two or three people, while 32 inches handles a small group. Pits of 36 to 43 inches fit a crowd. Choose by how many people will sit around it."
  },
  {
    "q": "Is a fire pit with grills worth it?",
    "a": "Yes if you cook, since OutVue 36 Inch and FansaFurn 43 Inch have swiveling grill plates. Plain bowls like Gas One 22 Inch are simpler and cheaper. Pick by whether you want cooking."
  },
  {
    "q": "How do I start a fire safely?",
    "a": "Place the pit on level, non-flammable ground away from tents and trees, and keep water nearby. Start with small kindling and add logs slowly. Use a spark screen in windy or dry weather."
  },
  {
    "q": "How do I clean a fire pit?",
    "a": "Wait until the ashes are completely cold, then scoop them into a metal container. Wipe the bowl and keep it covered from rain. Check for rust before storing."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
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
  },
  {
    "title": "Best Camping Coffeemakers",
    "href": "/camp-kitchen/best-camping-coffeemakers"
  }
];
