export const guideSlug = "best-canvas-tents-under-100";
export const guideTitle = "2 Best Canvas Tents Under 100 in 2026";
export const metaTitle = "Best Canvas Tents Under 100 in 2026";
export const metaDescription = "Best canvas tents under $100: two genuine canvas options, a 2 to 4 person cabin dome and a cotton teepee, with honest advice on what $100 can buy.";
export const mainKeyword = "best canvas tents under 100";
export const introParagraphs = [
  "Few good canvas tents sit under $100. Real cotton canvas is heavy and costly, and bell tents with stove jacks start well above this cap, so only two canvas-style tents qualify here: a 2 to 4 person cabin dome at about $90 and a cotton teepee at about $73.",
  "That narrow field makes the choice simple, and the page spends its effort on what $100 can and cannot do. The dome suits fair-weather family camping, the teepee suits backyards and dry camps, and anyone needing a four-season canvas tent should look at the higher-priced guides."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-camper-by-tent.webp";
export const heroImageAlt = "Camper standing next to a tent at a campsite";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-canvas-tents-under-100-1",
    "rank": 1,
    "badge": "Best Value Under $100",
    "name": "Canvas Tent",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/5145OWkjyFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H4ZXMKCK?tag=rvgearlab-20",
    "description": "The Canvas Cabin Dome is a 2 to 4 person dome tent with fully taped seams, a wrap-around bathtub floor and a sturdy frame. It has a large D-shaped front door and big ventilation windows.\n\nIt costs about $90, roughly $17 more than the cotton teepee, and it is the only pick with a sewn-in floor and taped seams. That floor and those seams keep out ground dampness and rain in a way an open teepee cannot.\n\nIt suits family campers who want a standard dome layout and a sealed floor for weekend trips in mild weather. Pair it with a footprint to protect the floor.",
    "specs": [
      "2 to 4 person dome",
      "Taped seams, bathtub floor",
      "D-shaped door, vent windows"
    ],
    "pros": [
      "Wrap-around bathtub floor",
      "Large D-shaped door for easy entry",
      "Fully taped seams",
      "Big windows for airflow"
    ],
    "cons": [
      "Three-season shelter only",
      "No stove jack for cold camps"
    ],
    "bestFor": "Fair-weather family camping",
    "take": "The only camping-ready canvas option under $100, with a sealed floor.",
    "catch": "The tent has no stove jack, so skip it for cold camps."
  },
  {
    "id": "best-canvas-tents-under-100-2",
    "rank": 2,
    "badge": "Best Backyard Canvas Tent",
    "name": "Large Teepee Tent for Kids & Adults with LED Light",
    "price": "$72.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51anm71tp4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GKZQYXFZ?tag=rvgearlab-20",
    "description": "The Cotton Canvas Teepee is built on extra-long 86.6 inch solid wood poles that make room for 2 adults and 3 kids. High-density cotton canvas with vine LED lights covers the frame, and a reinforced top connector holds the poles.\n\nIt costs about $73, around $17 less than the Canvas Cabin Dome, and it is the only pick with real cotton canvas, wood poles and built-in lighting. It sets up and packs down quickly, and it has no sewn-in floor.\n\nIt suits backyard campouts, kids' sleepovers and dry-weather glamping where the look and feel of canvas matter. Treat it as a fair-weather shelter and add a ground tarp.",
    "specs": [
      "Cotton canvas, solid wood poles",
      "86.6 inch poles, sleeps 2 adults and 3 kids",
      "Vine LED lights"
    ],
    "pros": [
      "Real cotton canvas feel",
      "Solid wood poles are sturdy",
      "Built-in LED vine lights",
      "Quick to set up and pack"
    ],
    "cons": [
      "No sewn-in floor",
      "Made for dry-weather use"
    ],
    "bestFor": "Backyards and dry camps",
    "take": "A canvas tent with style and room for a family, at a low price.",
    "catch": "It is not built for a rainy night."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fabric type",
    "description": "Cotton canvas and canvas-style claims were compared."
  },
  {
    "title": "Floor and seams",
    "description": "Sewn-in floors and taped seams were checked."
  },
  {
    "title": "Capacity",
    "description": "Sleeping capacity and headroom were compared."
  },
  {
    "title": "Weather use",
    "description": "Three-season and dry-weather limits were noted."
  },
  {
    "title": "Price against the cap",
    "description": "Both tents are under $100."
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
    "subheading": "By use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Weekend family camping",
          "Canvas Cabin Dome",
          "Sealed floor and taped seams."
        ],
        [
          "Backyard campout",
          "Cotton Canvas Teepee",
          "Cotton canvas and LED lights."
        ],
        [
          "Damp ground",
          "Canvas Cabin Dome",
          "Wrap-around bathtub floor."
        ],
        [
          "Kids' sleepover",
          "Cotton Canvas Teepee",
          "Room for 2 adults and 3 kids."
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
          "$70 to $80",
          "Cotton Canvas Teepee"
        ],
        [
          "$80 to $90",
          "Canvas Cabin Dome"
        ]
      ]
    }
  },
  {
    "subheading": "Dome vs teepee",
    "cards": [
      {
        "label": "Dome",
        "text": "The Canvas Cabin Dome has a sewn-in floor, taped seams and a D-door."
      },
      {
        "label": "Teepee",
        "text": "The Cotton Canvas Teepee has real cotton canvas and a tall peak but no floor."
      }
    ],
    "note": "Choose the Canvas Cabin Dome for camping and the Cotton Canvas Teepee for backyard use."
  },
  {
    "subheading": "By price tier",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $73",
          "Cotton Canvas Teepee"
        ],
        [
          "About $90",
          "Canvas Cabin Dome"
        ]
      ]
    }
  },
  {
    "subheading": "For beginners specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a sewn-in floor, taped seams and a stated capacity."
      },
      {
        "label": "In this comparison",
        "text": "The Canvas Cabin Dome includes all three, and the Cotton Canvas Teepee adds quick setup."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a bell tent or a stove jack: neither the Canvas Cabin Dome nor the Cotton Canvas Teepee offers either, and the higher-priced canvas guides cover that."
      },
      {
        "label": "Save if",
        "text": "Save if you only need a backyard tent: the Cotton Canvas Teepee at about $73 is plenty."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Canvas vs polyester",
    "explanation": "Cotton canvas breathes well and feels sturdy, but it is heavy and must be dried fully to avoid mildew, while polyester tents are lighter and cheaper but trap more condensation. Some budget tents sold as canvas are actually treated polyester or a blend. Check the fabric weight in grams per square meter in the product details before you assume a tent is true cotton canvas."
  },
  {
    "criterion": "Floor and ground protection",
    "explanation": "A sewn-in bathtub floor keeps out ground water, insects and drafts, while a floorless teepee needs a separate ground tarp or it lets damp rise into your bedding. Choose a floor if you camp on wet grass or sandy soil. Look for the words bathtub floor or attached floor in the product title and specs."
  },
  {
    "criterion": "Seams and waterproofing",
    "explanation": "Taped seams seal the needle holes where water would otherwise seep through, and untreated canvas relies on the fibers swelling when wet to shed rain, which takes a few soakings. A new cotton tent can drip at the seams during its first storms. Look for taped seams and a stated waterproof rating, and season or re-treat canvas before a rainy trip."
  },
  {
    "criterion": "Capacity and headroom",
    "explanation": "A 2 to 4 person dome fits two adults and gear comfortably, while a teepee gives a tall peak in the middle and little standing room at the edges. Count sleeping pads rather than people when you read the capacity. Look for the floor size and peak height in the specs, and subtract a person for every bulky air mattress."
  },
  {
    "criterion": "Weight and setup",
    "explanation": "Cotton canvas and wood poles make a tent heavy, so these two tents suit car camping and the backyard rather than a hike. Setup takes a few minutes with practice, and a first pitch at home saves frustration at camp. Check the packed weight and the pole material in the details before you carry one far from the car."
  }
];

export const faq = [
  {
    "q": "Can I get a real canvas bell tent for under $100?",
    "a": "Not really. True canvas bell tents with stove jacks start well above this budget. The Canvas Cabin Dome and Cotton Canvas Teepee are the two canvas-style tents in this price range, and neither is meant for winter camping. For a bell tent, look at the higher-priced canvas guides."
  },
  {
    "q": "What do campers get wrong about cheap canvas tents?",
    "a": "They assume canvas means waterproof. Untreated cotton leaks until it seasons, and cheap tents may be treated polyester sold as canvas. Check for taped seams and a stated rating, and pitch the tent at home to test it before a rainy trip."
  },
  {
    "q": "Is the dome better than the teepee?",
    "a": "For camping, yes. The Canvas Cabin Dome has a sewn-in floor, taped seams and a D-shaped door, so it handles damp ground and light rain. The Cotton Canvas Teepee is better for a backyard look and kids' sleepovers than for a night in the woods."
  },
  {
    "q": "How do I set up a cabin dome?",
    "a": "Lay the footprint down first, assemble the poles, thread them through the sleeves and stake the corners. Pitch the door away from the wind and guy out the sides in gusts. Practice once at home so you know how the frame fits together."
  },
  {
    "q": "How do I dry and store a canvas tent?",
    "a": "Dry it fully in the sun before packing, because damp canvas mildews within days and smells. Store it loosely in a dry place, not in a sealed plastic tub. Wipe off dirt and check the seams after each trip."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Canvas Tents",
    "href": "/tents-shelter/best-canvas-tents"
  },
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
  }
];
