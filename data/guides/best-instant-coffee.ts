export const guideSlug = "best-instant-coffee";
export const guideTitle = "6 Best Instant Coffee in 2026";
export const metaTitle = "Best Instant Coffee in 2026";
export const metaDescription = "Instant coffee for camping and backpacking compared: single-serve sticks, freeze-dried servings and jars from Nescafe, Folgers, Mount Hagen and more.";
export const mainKeyword = "best instant coffee";
export const introParagraphs = [
  "Instant coffee is the lightest way to make a camp morning bearable. You only need hot water, a mug and a spoon, and nothing needs to be washed afterward.",
  "At RV Gear Lab, we compared six instant options by format, roast and how easy each is to pack. Sticks and sachets win for backpacking, while jars give the best value for car camping."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/kitchen-camp-stove-coffee.webp";
export const heroImageAlt = "Single-burner camp stove brewing coffee on a riverside rock";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-instant-coffee-1",
    "rank": 1,
    "badge": "Best Single-Serve Sticks",
    "name": "Mount Hagen 25 Count Single Serve Instant Coffee Packets",
    "price": "$11.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51HGhWmYo6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01F24EL5S?tag=rvgearlab-amz-20",
    "description": "Mount Hagen comes as 25 single-serve sticks of organic medium roast Arabica. The packets are pocket sized, so one stick equals one mug with no measuring.\n\nCompared with the jars, sticks stay dry and portion themselves, which helps on windy mornings. It sits above the other picks for taste claims, being billed as award-winning organic instant.\n\nThat makes it a favorite for hikers who want an easy cup without a scoop. A handful of sticks weighs almost nothing.",
    "specs": [
      "25 single-serve sticks",
      "Organic medium roast Arabica",
      "Pocket-size packets"
    ],
    "pros": [
      "No measuring needed",
      "Organic Arabica beans",
      "Light and packable",
      "Award-winning claim on listing"
    ],
    "cons": [
      "Higher cost per cup than jars",
      "Packets create trash"
    ],
    "bestFor": "Backpackers",
    "take": "The cleanest, lightest way to get a good cup.",
    "catch": "Pack out every empty stick."
  },
  {
    "id": "best-instant-coffee-2",
    "rank": 2,
    "badge": "Best Hot or Cold Option",
    "name": "Freeze Dried Instant Coffee Cold Brew Coffee for Outdoor",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Rb78APwJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H4YGD8GB?tag=rvgearlab-amz-20",
    "description": "Taplabs offers 18 individual servings of freeze-dried Arabica instant coffee that dissolves in hot or cold water within seconds. Each serving comes in a compact package built for outdoor travel.\n\nWhere the sticks are hot-water oriented, this one works in a cold water bottle too. That suits warm-weather hikes where a fire is too much effort.\n\nIt is a smart match for cold-brew fans who also want a hot cup at camp. The packets stow flat in a mug.",
    "specs": [
      "18 individual freeze-dried servings",
      "Dissolves in hot or cold water",
      "Premium Arabica"
    ],
    "pros": [
      "Works with cold water",
      "Individual packets",
      "Dissolves in seconds",
      "Portable for outdoor travel"
    ],
    "cons": [
      "Highest price here",
      "Smaller count than sticks"
    ],
    "bestFor": "Cold-brew hikers",
    "take": "The flexible pick for hot or cold coffee.",
    "catch": "Costs more per serving."
  },
  {
    "id": "best-instant-coffee-3",
    "rank": 3,
    "badge": "Best Jar for Groups",
    "name": "NESCAFÉ CLÁSICO Instant Coffee",
    "price": "$13.48",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41MGa2A8dbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH5VSYFG?tag=rvgearlab-amz-20",
    "description": "Nescafe Clasico is a 14.1 ounce jar of dark roast instant coffee made with beans from around the world. It dissolves quickly for a bold, classic cup.\n\nA big jar covers a whole camping week for a family, and it costs less per cup than any of the packets. It is the right size for a camp kitchen box.\n\nCar campers who share the pot will love the volume. Just scoop what you need.",
    "specs": [
      "14.1 oz jar",
      "Dark roast instant",
      "World-sourced beans"
    ],
    "pros": [
      "Big jar for many cups",
      "Bold dark roast",
      "Low cost per cup",
      "Dissolves quickly"
    ],
    "cons": [
      "Needs a spoon",
      "Jar is bulky for hiking"
    ],
    "bestFor": "Family car camping",
    "take": "The best value for coffee drinkers who camp a lot.",
    "catch": "Too heavy for a long hike."
  },
  {
    "id": "best-instant-coffee-4",
    "rank": 4,
    "badge": "Best Espresso-Style Jar",
    "name": "NESCAFÉ Gold Espresso Intense Instant Coffee",
    "price": "$10.18",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41mA1ujsGaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRJT1YK9?tag=rvgearlab-amz-20",
    "description": "Nescafe Gold Espresso Intense is a 3.5 ounce jar made with golden-roasted Arabica beans and café-style crema. It is ready in an instant without equipment.\n\nCompared with Nescafe Clasico, the espresso intensity gives a stronger, smoother cup in a smaller jar. It is a good size for a weekend.\n\nIt is a good pick for anyone who likes a concentrated drink or wants to build a camp latte. Add hot milk and it turns into a camp latte.",
    "specs": [
      "3.5 oz jar",
      "Golden-roasted Arabica",
      "Café-style crema"
    ],
    "pros": [
      "Intense espresso flavor",
      "Crema on top",
      "Smaller jar for weekends",
      "Ready in an instant"
    ],
    "cons": [
      "Fewer cups per jar",
      "Needs a spoon"
    ],
    "bestFor": "Espresso lovers",
    "take": "A stronger cup from a small jar.",
    "catch": "A small jar runs out on a long trip."
  },
  {
    "id": "best-instant-coffee-5",
    "rank": 5,
    "badge": "Best Familiar Taste",
    "name": "Folgers Classic Roast Instant Coffee",
    "price": "$8.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41A7mbdcSJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01LB1J9BW?tag=rvgearlab-amz-20",
    "description": "Folgers Classic Roast Instant comes in an 8 ounce jar and is smooth enough to drink hot or iced. The limited-edition packaging marks America's 250th anniversary.\n\nIt is a familiar flavor, and it costs less than the premium sticks or the Nescafe Gold. The jar is a middle size between the big Clasico and small espresso jar.\n\nIt is a good value for campers who want a familiar morning cup. One jar keeps a couple going all weekend.",
    "specs": [
      "8 oz Classic Roast jar",
      "Hot or iced",
      "Smooth flavor"
    ],
    "pros": [
      "Familiar flavor",
      "Works hot or iced",
      "Medium jar size",
      "Low price"
    ],
    "cons": [
      "Needs a spoon",
      "Plain flavor"
    ],
    "bestFor": "Budget coffee fans",
    "take": "The familiar pick for easy mornings.",
    "catch": "Not the boldest cup here."
  },
  {
    "id": "best-instant-coffee-6",
    "rank": 6,
    "badge": "Best Budget Jar",
    "name": "365 by Whole Foods Market",
    "price": "$6.62",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xtqiHpZLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B074HCGPHQ?tag=rvgearlab-amz-20",
    "description": "365 by Whole Foods Market Dark Roast instant comes in a 3.5 ounce jar. It is a simple, affordable jar for a quick cup.\n\nIt is the lowest-cost option and sits a notch smaller than Folgers. The dark roast suits black coffee.\n\nA good match for weekend campers who want an easy, low-cost jar. It tucks easily into a camp kitchen bin.",
    "specs": [
      "3.5 oz jar",
      "Dark roast",
      "Instant coffee in a jar"
    ],
    "pros": [
      "Lowest price here",
      "Dark roast flavor",
      "Small jar fits a gear bin",
      "Dissolves in hot water"
    ],
    "cons": [
      "Sparse product details",
      "Small jar"
    ],
    "bestFor": "Weekend campers",
    "take": "The cheapest way to get coffee at camp.",
    "catch": "Not many cups per jar."
  }
];

export const howWeEvaluated = [
  {
    "title": "Format",
    "description": "Compared sticks, packets and jars."
  },
  {
    "title": "Roast and flavor",
    "description": "Looked at dark roast, medium and espresso styles."
  },
  {
    "title": "Servings",
    "description": "Compared serving counts and jar sizes."
  },
  {
    "title": "Packability",
    "description": "Considered weight and bulk."
  },
  {
    "title": "Price",
    "description": "Weighed cost per cup."
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
    "subheading": "By Trip Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Backpacking",
          "Mount Hagen Sticks",
          "Pocket sticks."
        ],
        [
          "Hot or cold",
          "Taplabs Freeze-Dried",
          "Dissolves in cold water."
        ],
        [
          "Family week",
          "Nescafe Clasico 14.1 Oz",
          "Big jar."
        ],
        [
          "Weekend espresso",
          "Nescafe Gold Espresso",
          "Crema."
        ],
        [
          "Familiar and cheap",
          "Folgers Classic Instant",
          "8 oz jar."
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
          "$0 to $10",
          "365 Dark Roast Instant or Folgers Classic Instant"
        ],
        [
          "$10 to $20",
          "Nescafe Gold Espresso or Mount Hagen Sticks"
        ],
        [
          "$10 to $30",
          "Nescafe Clasico 14.1 Oz or Taplabs Freeze-Dried"
        ]
      ]
    }
  },
  {
    "subheading": "Sticks vs Jars",
    "cards": [
      {
        "label": "Sticks",
        "text": "Pre-portioned and light. Mount Hagen Sticks and Taplabs Freeze-Dried are the examples."
      },
      {
        "label": "Jars",
        "text": "Cheaper per cup but bulkier. Nescafe Clasico 14.1 Oz, Nescafe Gold Espresso, Folgers Classic Instant and 365 Dark Roast Instant are jars."
      }
    ],
    "note": "Most backpackers should default to Mount Hagen Sticks."
  },
  {
    "subheading": "By Roast",
    "table": {
      "headers": [
        "If you want",
        "Recommended pick"
      ],
      "rows": [
        [
          "Dark roast",
          "Nescafe Clasico 14.1 Oz"
        ],
        [
          "Medium organic",
          "Mount Hagen Sticks"
        ],
        [
          "Espresso style",
          "Nescafe Gold Espresso"
        ]
      ]
    }
  },
  {
    "subheading": "For Cold Brew Hikes Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Freeze-dried coffee that dissolves in cold water."
      },
      {
        "label": "In this comparison",
        "text": "Taplabs Freeze-Dried dissolves in hot or cold water."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Mount Hagen Sticks or Taplabs Freeze-Dried for convenience."
      },
      {
        "label": "Save if",
        "text": "Save with 365 Dark Roast Instant."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Stick, packet or jar",
    "explanation": "Sticks and packets hold one serving each, so there is no measuring and no spilled jar in a pack. Jars cost less per cup but need a spoon and take more room. Check the packaging format in the listing and decide whether you are carrying it or driving it."
  },
  {
    "criterion": "Roast and flavor",
    "explanation": "Dark roast tastes bold and slightly bitter, medium is smoother, and espresso style is more concentrated. Instant coffee tastes different from brewed, so a roast you already like is the safest start. Check the roast named in the product title."
  },
  {
    "criterion": "Servings per package",
    "explanation": "A 25-stick box covers 25 mornings for one person, while a 14 ounce jar serves many more cups. Running out on day two is the common mistake. Count your cups per day and check the serving count or ounces on the listing."
  },
  {
    "criterion": "Cold water behavior",
    "explanation": "Some freeze-dried instant dissolves in cold water, which suits cold brew on a hot hike, while others need hot water. Always test a batch at home first. Look for a cold-water claim on the listing."
  },
  {
    "criterion": "Packaging and trash",
    "explanation": "Sticks and sachets leave small wrappers that must be packed out, while jars leave one container. Leave No Trace habits mean carrying every wrapper home. Think about waste before you buy for a long trip."
  }
];

export const faq = [
  {
    "q": "Is instant coffee a good choice for camping?",
    "a": "Yes, since it needs only hot water, a mug and a spoon, and there is nothing to wash afterward. It is also light and shelf-stable. Many campers use it on trail mornings."
  },
  {
    "q": "Can instant coffee dissolve in cold water?",
    "a": "Some freeze-dried styles do. Taplabs Freeze-Dried lists dissolving in hot or cold water within seconds. Standard jars usually need hot water for best results."
  },
  {
    "q": "Are sticks worth it over a jar?",
    "a": "On a hike, yes, because sticks portion themselves and stay dry in a pack. For car camping, a jar like Nescafe Clasico 14.1 Oz costs less per cup. Pick by how you travel."
  },
  {
    "q": "How do I make good instant coffee at camp?",
    "a": "Heat water until just off the boil, add the powder to the mug and stir. Start with one stick or a heaping teaspoon and adjust. Add milk powder or sugar if you like."
  },
  {
    "q": "How do I store instant coffee on a trip?",
    "a": "Keep jars tightly sealed and away from moisture, since damp powder clumps. Store sticks in a dry bag. Pack extra for emergencies."
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
