export const guideSlug = "best-cooler";
export const guideTitle = "4 Best Cooler in 2026";
export const metaTitle = "Best Cooler in 2026";
export const metaDescription = "Coolers compared for camping and day trips: a 52 qt Coleman, a zipperless hard-body soft cooler, a collapsible 30-can bag and a 9 qt personal cooler.";
export const mainKeyword = "best cooler";
export const introParagraphs = [
  "The best cooler depends on what you pack and how you carry it. A 52 quart hard cooler feeds a family, while a soft or collapsible bag is easier to haul on a hike.",
  "At RV Gear Lab, we compared these four on capacity, style and how they handle ice. We included both hard and soft options so you can match a cooler to the way you camp."
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
    "id": "best-cooler-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Coleman Classic Insulated Portable Cooler",
    "price": "$54.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31nqCbhcT4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07XMMB6SG?tag=rvgearlab-20",
    "description": "Coleman Classic is a 52 quart cooler that holds up to 80 cans. Swing-up handles ease carrying, and the lid has molded cup holders with drains that fit up to a 30 oz tumbler.\n\nIt offers the most capacity of the four and the simplest design, a plain hard box that is easy to load. Compared with the soft options, it takes more space and suits car camping.\n\nThat makes it the dependable choice for a family weekend. The cup holders turn the lid into a handy table.",
    "specs": [
      "52 qt, up to 80 cans",
      "Swing-up handles",
      "Cup holders with drains"
    ],
    "pros": [
      "Holds up to 80 cans",
      "Swing-up handles",
      "Lid cup holders",
      "Low price for the size"
    ],
    "cons": [
      "Bulky when full",
      "Hard-sided only"
    ],
    "bestFor": "Family car camping",
    "take": "The straightforward cooler for most trips.",
    "catch": "Takes up real trunk space."
  },
  {
    "id": "best-cooler-2",
    "rank": 2,
    "badge": "Best Zipperless Cooler",
    "name": "Titan 16 Can Zipperless HardBody Cooler",
    "price": "$59.22",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-sNjqgt4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BLM3MK31?tag=rvgearlab-20",
    "description": "Titan 16 Can cooler has a patented zipperless flip-open lid for quick access, with Deep Freeze insulation and a radiant heat barrier. It is listed to keep ice up to 2 days.\n\nA soft-sided design makes it lighter than the Coleman Classic, and the flip-top lid is faster than a zipper. It holds 16 cans, which suits a couple.\n\nIt is a smart pick for day trips, picnics and kayak outings where easy access matters. It also suits short camping trips.",
    "specs": [
      "16 can capacity",
      "Zipperless flip-open lid",
      "Keeps ice up to 2 days"
    ],
    "pros": [
      "Fast flip-open lid",
      "Radiant heat barrier",
      "Keeps ice up to 2 days",
      "Easy to carry"
    ],
    "cons": [
      "Smaller capacity",
      "Not as rigid as hard coolers"
    ],
    "bestFor": "Couples and day trips",
    "take": "A quick-access cooler for short outings.",
    "catch": "Smaller than a family cooler."
  },
  {
    "id": "best-cooler-3",
    "rank": 3,
    "badge": "Best Collapsible",
    "name": "Maelstrom 30Can Collapsible Soft Cooler Bag",
    "price": "$26.92",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Lr+tkRv6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CPFGZ5PD?tag=rvgearlab-20",
    "description": "Maelstrom is a 30-can collapsible soft cooler measuring about 14.43 by 8.97 by 10.14 inches. Five insulated layers and a leakproof design are listed to keep cold up to 24 hours.\n\nIt folds flat, which a hard cooler cannot, and it has multiple pockets and a bottle opener. It holds more cans than the Titan.\n\nBeach days, hikes and road trips are where it shines. It stores in the closet between trips.",
    "specs": [
      "30 can collapsible cooler",
      "5 insulated layers, leakproof",
      "Pockets and bottle opener"
    ],
    "pros": [
      "Collapses flat",
      "Leakproof design",
      "Multiple pockets",
      "Low price"
    ],
    "cons": [
      "Cold lasts hours, not days",
      "Soft sides bend"
    ],
    "bestFor": "Beach and hike",
    "take": "A packable bag cooler for day outings.",
    "catch": "Short cold time."
  },
  {
    "id": "best-cooler-4",
    "rank": 4,
    "badge": "Best Personal Cooler",
    "name": "Coleman Chiller 9-Quart Portable Cooler",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31q3fCsFZGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGV77CXV?tag=rvgearlab-20",
    "description": "Coleman Chiller 9 Quart uses TempLock foam insulation to keep drinks icy for 24 hours. It fits 4 standard 12 oz cans with 4 lbs of ice, or up to 9 cans without ice.\n\nIt weighs only 2.9 lbs empty, making it the smallest and lightest of the group. It is the cheapest cooler here.\n\nA good fit for lunch, a solo hike or a kid's picnic. It fits easily in a backpack-sized space.",
    "specs": [
      "9 qt, 24 hours cold",
      "4 cans with 4 lbs ice",
      "2.9 lbs empty"
    ],
    "pros": [
      "Light at 2.9 pounds",
      "Lowest price",
      "24 hours cold listed",
      "Easy to carry"
    ],
    "cons": [
      "Only holds a few cans",
      "Too small for groups"
    ],
    "bestFor": "Lunch and solo trips",
    "take": "A tiny cooler for personal use.",
    "catch": "Not for group meals."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Compared quarts and can counts."
  },
  {
    "title": "Style",
    "description": "Hard-sided versus soft and collapsible."
  },
  {
    "title": "Cold retention",
    "description": "Looked at listed hours of cold."
  },
  {
    "title": "Carrying",
    "description": "Considered handles and weight."
  },
  {
    "title": "Price",
    "description": "Weighed size against cost."
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
    "subheading": "By Trip",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Family weekend",
          "Coleman Classic 52 Qt",
          "80 cans."
        ],
        [
          "Day trip",
          "Titan 16 Can HardBody",
          "Flip lid."
        ],
        [
          "Beach or hike",
          "Maelstrom 30-Can Soft",
          "Collapses flat."
        ],
        [
          "Lunch",
          "Coleman Chiller 9 Qt",
          "2.9 lbs."
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
          "Maelstrom 30-Can Soft or Coleman Chiller 9 Qt"
        ],
        [
          "$50 to $60",
          "Coleman Classic 52 Qt or Titan 16 Can HardBody"
        ]
      ]
    }
  },
  {
    "subheading": "Hard vs Soft",
    "cards": [
      {
        "label": "Hard",
        "text": "More rigid and holds up under load. Coleman Classic 52 Qt and Coleman Chiller 9 Qt are hard-sided."
      },
      {
        "label": "Soft",
        "text": "Lighter and packable. Titan 16 Can HardBody and Maelstrom 30-Can Soft are soft."
      }
    ],
    "note": "Most campers should default to Coleman Classic 52 Qt."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "If you want",
        "Recommended pick"
      ],
      "rows": [
        [
          "Easy access",
          "Titan 16 Can HardBody"
        ],
        [
          "Packs flat",
          "Maelstrom 30-Can Soft"
        ],
        [
          "Lightest",
          "Coleman Chiller 9 Qt"
        ]
      ]
    }
  },
  {
    "subheading": "For Beach Days Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A leakproof bag that collapses flat."
      },
      {
        "label": "In this comparison",
        "text": "Maelstrom 30-Can Soft is leakproof and collapsible."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Coleman Classic 52 Qt for capacity."
      },
      {
        "label": "Save if",
        "text": "Save with Coleman Chiller 9 Qt."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Capacity for your group",
    "explanation": "A 9 quart cooler holds a lunch for one, while 52 quarts holds a weekend of food for a family. Too small forces extra ice runs, and too big wastes space in the car. Check the quarts or can count in the listing and match it to your group."
  },
  {
    "criterion": "Hard or soft body",
    "explanation": "Hard coolers resist crushing and usually hold ice longer, while soft or collapsible ones are light and store flat. The choice changes how you pack the car or the kayak. Check the style in the product title."
  },
  {
    "criterion": "Listed cold retention",
    "explanation": "Hours of cold depend on how much ice you pack and how often the lid opens. A 24-hour claim means about a day under good conditions, and a 2-day claim needs a pre-chilled cooler. Pack extra ice and read the stated hours."
  },
  {
    "criterion": "Lid access and leaks",
    "explanation": "A flip-open or zipperless lid gets you a drink quickly, and a leakproof liner keeps meltwater off the car seat. Zippers can jam with sand. Look for lid style and leakproof wording."
  },
  {
    "criterion": "Weight and carrying",
    "explanation": "Ice and food add a lot of weight, so handles matter. A 2.9 pound empty cooler is easy to carry anywhere, while a 52 quart cooler needs two hands. Check the empty weight and the handle type."
  }
];

export const faq = [
  {
    "q": "What size cooler do I need?",
    "a": "A 9 quart cooler suits lunch or a short hike, and 16 to 30 cans covers a couple for a day. For a family weekend, Coleman Classic 52 Qt fits up to 80 cans. Size up if you camp for longer."
  },
  {
    "q": "Is a soft cooler as good as a hard cooler?",
    "a": "Soft coolers like Titan 16 Can HardBody and Maelstrom 30-Can Soft are easier to carry but usually hold cold for hours to a couple of days. Hard coolers handle longer trips. Choose by trip length."
  },
  {
    "q": "How do I keep ice longer?",
    "a": "Pre-chill the cooler and your food before packing, and fill empty space with ice. Keep it shaded and avoid opening the lid. Drain meltwater only when needed."
  },
  {
    "q": "How do I pack a cooler?",
    "a": "Layer ice at the bottom, then food, then more ice on top. Keep raw meat in sealed bags away from ready-to-eat items. Pack drinks you grab often near the top."
  },
  {
    "q": "How do I clean a cooler?",
    "a": "Empty it, wash with mild soap and warm water, and rinse. Dry it with the lid open so odors do not build up. A baking soda rinse helps with smells."
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
