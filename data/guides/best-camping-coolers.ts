export const guideSlug = "best-camping-coolers";
export const guideTitle = "4 Best Camping Coolers in 2026";
export const metaTitle = "Best Camping Coolers in 2026";
export const metaDescription = "Camping coolers compared by size and ice retention, from a 120 qt family cooler to a 16 qt weekend cooler that doubles as a seat.";
export const mainKeyword = "best camping coolers";
export const introParagraphs = [
  "The right camping cooler depends on how many people you feed and how many nights you are out. A big cooler keeps a week of food, while a small one is easier to carry and refill.",
  "At RV Gear Lab, we sorted these four hard coolers by capacity and use. We compared listed quart size, ice-hold claims, build details and how each handles the work of a campsite."
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
    "id": "best-camping-coolers-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Coleman Chiller 48-Quart Portable Cooler",
    "price": "$54.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21t-VGklUeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GFPPZKGR?tag=rvgearlab-amz-20",
    "description": "The Coleman Chiller 48 Quart uses TempLock foam insulation and is listed to stay cold up to 60 hours. It fits 31 standard 12 oz cans with 24 lbs of ice, or up to 76 cans without ice.\n\nIts tall interior stands 2-liter bottles upright, which smaller coolers cannot. It sits between the 16 quart weekend cooler and the 120 quart Igloo for size.\n\nThat makes it the all-around choice for a weekend with a couple or a small family. The size fits most car trunks.",
    "specs": [
      "48 qt, up to 60 hours cold",
      "31 cans with 24 lbs ice",
      "Fits 2-liter bottles upright"
    ],
    "pros": [
      "Up to 60 hours of cold listed",
      "Stands 2-liter bottles upright",
      "Holds 76 cans without ice",
      "Mid-range price"
    ],
    "cons": [
      "Large to pack in a small car",
      "Takes real trunk space"
    ],
    "bestFor": "Weekend family trips",
    "take": "A sensible size for most car camping weekends.",
    "catch": "Longer trips need more ice and a pre-chilled cooler."
  },
  {
    "id": "best-camping-coolers-2",
    "rank": 2,
    "badge": "Best Large Capacity",
    "name": "Igloo Polar 120 Qt. Cooler",
    "price": "$115.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31m9fbN5cpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B004QILD6W?tag=rvgearlab-amz-20",
    "description": "The Igloo Polar is a 120 quart cooler with UV inhibitors in the lid, a stain- and odor-resistant liner and a threaded drain plug for hose hookup. The big body is built for groups.\n\nIt holds far more than the 48 quart Coleman, making it the choice for big gatherings. The drain plug makes draining and cleaning easier on a long trip.\n\nFamilies, tailgaters and group campers who need to keep a lot of food cold will like the space. It is built for base camps rather than hiking in.",
    "specs": [
      "120 qt capacity",
      "UV-protected lid",
      "Threaded drain plug"
    ],
    "pros": [
      "Huge capacity for groups",
      "UV inhibitors protect the lid",
      "Odor-resistant liner",
      "Hose hookup drain"
    ],
    "cons": [
      "Highest price here",
      "Heavy when full"
    ],
    "bestFor": "Large groups",
    "take": "The biggest cooler here for a base camp.",
    "catch": "Too big for a small car trunk."
  },
  {
    "id": "best-camping-coolers-3",
    "rank": 3,
    "badge": "Best Rugged Small Cooler",
    "name": "STANLEY Outdoor Hard Cooler",
    "price": "$80.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31G8Cpp1OYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GC8J9B3C?tag=rvgearlab-amz-20",
    "description": "Stanley uses double insulation with a high-density polyethylene outer shell and a heavy-duty top handle. It is built to be durable and can double as a seat.\n\nIt is a smaller, tougher build than the Coleman Chiller 16 quart. The strings along the top let you tie it down.\n\nChoose it for kayak trips, truck beds and day trips where a tough small cooler matters. It will outlast a thin cooler.",
    "specs": [
      "16 qt hard cooler",
      "Double insulated HDPE shell",
      "Heavy-duty top handle"
    ],
    "pros": [
      "Tough HDPE outer shell",
      "Double insulation",
      "Doubles as a seat",
      "Heavy-duty handle"
    ],
    "cons": [
      "Higher price for the size",
      "Small capacity"
    ],
    "bestFor": "Rugged day trips",
    "take": "The sturdy small cooler for rough rides.",
    "catch": "Fits a day, not a long weekend for a family."
  },
  {
    "id": "best-camping-coolers-4",
    "rank": 4,
    "badge": "Best Budget Weekend Cooler",
    "name": "Coleman Chiller 16-Quart Portable Cooler with Ice Retention",
    "price": "$26.68",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31-nYwE5EVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GFPDT9V2?tag=rvgearlab-amz-20",
    "description": "Coleman Chiller 16 Quart is listed to stay cold for 36 hours with TempLock foam insulation. It holds 11 standard 12 oz cans with 8 lbs of ice, or up to 25 cans without ice.\n\nIt is the least expensive pick and doubles as seating, as the reinforced lid holds up to 200 lbs. It suits smaller groups than the 48 quart.\n\nIt is a good fit for a night or two out, a tailgate or a solo campsite. It is light enough to carry with one hand.",
    "specs": [
      "16 qt, up to 36 hours cold",
      "11 cans with 8 lbs ice",
      "Lid holds up to 200 lbs"
    ],
    "pros": [
      "Lowest price here",
      "36-hour cold listed",
      "Lid works as a seat",
      "Small and easy to carry"
    ],
    "cons": [
      "Only fits a small crew",
      "Short ice time"
    ],
    "bestFor": "Solo and couples",
    "take": "An easy, low-cost cooler for short trips.",
    "catch": "Not built for multi-day trips."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Compared quart size and can counts against group size."
  },
  {
    "title": "Ice retention",
    "description": "Looked at listed hours of cold for each cooler."
  },
  {
    "title": "Build",
    "description": "Compared insulation and shell details."
  },
  {
    "title": "Extras",
    "description": "Looked at drains, handles and seat use."
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
    "subheading": "By Group Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Solo or couple, 1 to 2 nights",
          "Coleman Chiller 16 Qt",
          "11 cans with 8 lbs ice."
        ],
        [
          "Rugged day trips",
          "Stanley 16 Qt",
          "Double insulated shell."
        ],
        [
          "Family weekend",
          "Coleman Chiller 48 Qt",
          "31 cans with 24 lbs ice."
        ],
        [
          "Large group",
          "Igloo Polar 120 Qt",
          "120 qt capacity."
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
          "$20 to $60",
          "Coleman Chiller 16 Qt or Coleman Chiller 48 Qt"
        ],
        [
          "$80 to $120",
          "Stanley 16 Qt or Igloo Polar 120 Qt"
        ]
      ]
    }
  },
  {
    "subheading": "Small vs Large",
    "cards": [
      {
        "label": "Small",
        "text": "Easy to carry and quick to cool. Coleman Chiller 16 Qt and Stanley 16 Qt are the small picks."
      },
      {
        "label": "Large",
        "text": "Holds more food and ice. Coleman Chiller 48 Qt and Igloo Polar 120 Qt are the large picks."
      }
    ],
    "note": "Most campers should default to Coleman Chiller 48 Qt unless they camp solo."
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
          "Toughest build",
          "Stanley 16 Qt"
        ],
        [
          "Seat use",
          "Coleman Chiller 16 Qt"
        ],
        [
          "Hose drain",
          "Igloo Polar 120 Qt"
        ]
      ]
    }
  },
  {
    "subheading": "For Weekend Car Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A listed hold time around 2 days and a quart size that fits your trunk."
      },
      {
        "label": "In this comparison",
        "text": "Coleman Chiller 48 Qt lists 60 hours cold, and 31 cans with ice."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Stanley 16 Qt or Igloo Polar 120 Qt for build or capacity."
      },
      {
        "label": "Save if",
        "text": "Save with Coleman Chiller 16 Qt for a short trip."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Cooler size",
    "explanation": "A 16 quart cooler suits one or two people for a weekend, while 48 quarts fits a family. Size up if you are camping more than two nights. Check the quart rating in the listing."
  },
  {
    "criterion": "Ice retention claims",
    "explanation": "Listed hours of cold depend on pre-chilling, ice amount and opening the lid. A 36-hour claim means about a day and a half in ideal conditions. Pre-chill the cooler and pack ice generously."
  },
  {
    "criterion": "Insulation and shell",
    "explanation": "Double-wall insulation and a thick shell hold temperature longer. The extra layers slow heat from reaching your food, which matters in hot sun. Look in the listing for insulation type and wall details."
  },
  {
    "criterion": "Drain and cleaning",
    "explanation": "A drain plug lets you empty meltwater and clean the cooler easily. A threaded plug connects to a hose. Check for a drain in the specs."
  },
  {
    "criterion": "Weight and carrying",
    "explanation": "A big cooler can weigh a lot when full. Ice and food can add dozens of pounds to a big cooler. Check the handle design and think about how far you will carry it."
  }
];

export const faq = [
  {
    "q": "What size cooler do I need for camping?",
    "a": "About 16 quarts for one or two people for a night or two, and 48 quarts for a family weekend. Size up for longer trips."
  },
  {
    "q": "How do I keep ice longer?",
    "a": "Pre-chill the cooler, pack ice generously and keep the lid closed. Keep it in the shade. Drain meltwater only when needed."
  },
  {
    "q": "Is a pricier cooler worth it?",
    "a": "Stanley 16 Qt costs more for a tougher build. For casual trips, Coleman Chiller 16 Qt is enough."
  },
  {
    "q": "How do I pack a cooler?",
    "a": "Layer ice at the bottom, then food, then more ice on top. Keep raw meat separate."
  },
  {
    "q": "How do I clean a cooler?",
    "a": "Drain, wash with mild soap and dry with the lid open. Odor-resistant liners like Igloo Polar 120 Qt help."
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
