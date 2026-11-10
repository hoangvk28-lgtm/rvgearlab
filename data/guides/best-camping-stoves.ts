export const guideSlug = "best-camping-stoves";
export const guideTitle = "6 Best Camping Stoves in 2026";
export const metaTitle = "Best Camping Stoves in 2026";
export const metaDescription = "Camping stoves compared: two-burner propane campsite stoves from 20,000 to 150,000 BTU, a butane tabletop and a compact backpacking burner.";
export const mainKeyword = "best camping stoves";
export const introParagraphs = [
  "A camping stove is the heart of a campsite kitchen, and the right one depends on how many mouths you feed and where you cook. Two-burner propane stoves handle family meals, while butane or small burners suit quick trips.",
  "At RV Gear Lab, we compared these six by listed BTU output, burner count, wind protection and portability. The list runs from heavy-duty cookers to a tiny backpacking burner so you can match power to your plans."
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
    "id": "best-camping-stoves-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Camp Chef Explorer 2-Burner Outdoor Camping Stove",
    "price": "$159.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Ntprn1juL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0006VORDY?tag=rvgearlab-20",
    "description": "Camp Chef Explorer is a two-burner propane stove with dual 30,000 BTU cast-aluminum burners for 60,000 total BTUs. A three-sided windscreen and detachable steel legs come with an included hose.\n\nIt brings the most balanced mix of power and wind protection here, with a sturdier frame than the budget Flame King. It sets up fast at camp or tailgates.\n\nFamily campers who cook breakfast and dinner every day will find it the most dependable pick. The legs come off for packing.",
    "specs": [
      "Two 30,000 BTU burners",
      "Three-sided windscreen",
      "Detachable steel legs"
    ],
    "pros": [
      "60,000 total BTUs",
      "Built-in wind protection",
      "Hose included",
      "Legs detach for storage"
    ],
    "cons": [
      "Highest price here",
      "Bulky for small cars"
    ],
    "bestFor": "Family camp kitchens",
    "take": "The standard campsite cooker, with power and wind protection.",
    "catch": "Takes real space in a trunk."
  },
  {
    "id": "best-camping-stoves-2",
    "rank": 2,
    "badge": "Best Mid-Price Two-Burner",
    "name": "Gas One Propane Double Burner Two Burner Camp Stove Outdoor High Pressure Propane 2 Burner Adjustable PSI Regu",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41t0XfUrwIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B093N8JYTR?tag=rvgearlab-20",
    "description": "Gas One B-4545 is a propane double burner with two burner heads and an adjustable 0-5 PSI regulator hose. The build is rugged and designed to last.\n\nIt costs less than the Camp Chef Explorer and keeps things simple with a plain, open top. The adjustable regulator lets you set flame strength.\n\nCampers who cook with a large pot or skillet will like the open top and sturdy frame. The sturdy frame keeps big pots steady.",
    "specs": [
      "Two burner heads",
      "0-5 PSI adjustable regulator",
      "Rugged frame"
    ],
    "pros": [
      "Adjustable regulator hose",
      "Two burners for a full meal",
      "Rugged build",
      "Lower price than Camp Chef"
    ],
    "cons": [
      "No built-in windscreen",
      "Needs a propane supply"
    ],
    "bestFor": "Budget family cooks",
    "take": "A solid two-burner at a friendlier price.",
    "catch": "Bring a windscreen for breezy sites."
  },
  {
    "id": "best-camping-stoves-3",
    "rank": 3,
    "badge": "Best High-Output Burner",
    "name": "ROVSUN 2 Burner Outdoor Propane Gas Stove with Adjustable Regulator",
    "price": "$80.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410UoHTfj9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07NZ5PGZB?tag=rvgearlab-20",
    "description": "ROVSUN lists two separate burners at 75,000 BTU each for 150,000 BTU total. The flame is adjustable through a CSA listed regulator and a front knob.\n\nIt is the highest-output stove here, far beyond the Camp Chef at 60,000 BTU. Legs come off in minutes for transport.\n\nLarge group cooks, boil-pot fans and fish fry crews will like the sheer power. It is better for big pots than quick breakfasts.",
    "specs": [
      "Two 75,000 BTU burners",
      "CSA listed regulator",
      "Removable legs"
    ],
    "pros": [
      "Huge heat for big pots",
      "Front knob flame control",
      "Legs detach quickly",
      "Low price for the power"
    ],
    "cons": [
      "More heat than most camp meals need",
      "High-pressure setup is not for beginners"
    ],
    "bestFor": "Big pots and groups",
    "take": "The most power per dollar for large batches.",
    "catch": "Not a gentle simmer stove."
  },
  {
    "id": "best-camping-stoves-4",
    "rank": 4,
    "badge": "Best Stove and Grill Combo",
    "name": "Flame King VT-101 2-Burner Portable Camping Stove Grill",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rbKhLjh4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0844HH4TL?tag=rvgearlab-20",
    "description": "Flame King VT-101 is a two-burner portable stove with 20,000 BTUs total, two wind guards on the sides and a lid that converts into a third wind panel. It is built to be lightweight and compact.\n\nIt is the lightest two-burner here and carries a lower price than the Camp Chef. The lid doubles as wind protection when open.\n\nCouples and small families who want a compact two-burner for car camping will like the size. It tucks into a small trunk with room to spare.",
    "specs": [
      "20,000 BTU two burners",
      "3-sided wind blocking panels",
      "Lightweight and compact"
    ],
    "pros": [
      "Lighter than other two-burners",
      "Wind panels built in",
      "Compact for small cars",
      "Low price"
    ],
    "cons": [
      "Lower output than rivals",
      "Smaller cooking space"
    ],
    "bestFor": "Couples",
    "take": "The tidy, portable two-burner.",
    "catch": "Smaller cooking surface."
  },
  {
    "id": "best-camping-stoves-5",
    "rank": 5,
    "badge": "Best Compact Butane",
    "name": "Gas One Portable Butane Camping Stove with Case: Automatic Ignition",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/310zJ+RVtBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08WTNVPB7?tag=rvgearlab-20",
    "description": "Gas One portable butane stove delivers 7,650 BTU with automatic piezo ignition and a safety shut-off. It carries CSA approval and comes with a case.\n\nIt is the best choice in the list for tabletop cooking and picnics, with precise heat control that suits simmering. It costs far less than any two-burner here.\n\nCamping couples and tailgaters will like how simple it is. The included case keeps it clean in a gear bin.",
    "specs": [
      "7,650 BTU butane",
      "Automatic piezo ignition",
      "CSA approved with case"
    ],
    "pros": [
      "Piezo ignition",
      "Safety shut-off",
      "Precise heat control",
      "Comes with a carry case"
    ],
    "cons": [
      "Only one burner",
      "Butane fades in cold"
    ],
    "bestFor": "Simple tabletop cooking",
    "take": "A neat single burner for easy meals.",
    "catch": "Slower in cold weather."
  },
  {
    "id": "best-camping-stoves-6",
    "rank": 6,
    "badge": "Best Backpacking Burner",
    "name": "AOTU Portable Camping Stoves Backpacking Stove with Piezo Ignition Stable Support Wind-Resistance Camp Stove f",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hybCmWPwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07NJYV3NP?tag=rvgearlab-20",
    "description": "AOTU is a small backpacking burner with a lightweight aluminum alloy base and piezo ignition. An adjustable control valve takes the flame from maximum heat down to a simmer.\n\nIt is the lowest-cost pick in the group and the only one built for carrying on foot. Its fire board suits a 20 cm pot for one to three people.\n\nHikers and backpackers who need a cheap, compact backup burner will like it. It packs into the corner of a bag.",
    "specs": [
      "Aluminum alloy burner base",
      "Piezo ignition",
      "Fits a 20 cm pot"
    ],
    "pros": [
      "Lowest price here",
      "Adjustable simmer control",
      "Light aluminum build",
      "Sized for 1 to 3 people"
    ],
    "cons": [
      "Small pot support",
      "Basic wind protection"
    ],
    "bestFor": "Backpackers",
    "take": "A lightweight stove for solo hikers.",
    "catch": "Not suited to large pots."
  }
];

export const howWeEvaluated = [
  {
    "title": "Burner output",
    "description": "Compared listed BTU totals and per-burner output."
  },
  {
    "title": "Burner count",
    "description": "Matched one or two burners to meal size."
  },
  {
    "title": "Wind protection",
    "description": "Looked at windscreens and wind panels."
  },
  {
    "title": "Portability",
    "description": "Considered legs, cases and weight."
  },
  {
    "title": "Price",
    "description": "Weighed cost against output."
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
    "subheading": "By Cooking Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Family breakfast and dinner",
          "Camp Chef Explorer",
          "60,000 BTU with windscreen."
        ],
        [
          "Budget two-burner",
          "Gas One B-4545",
          "Adjustable regulator."
        ],
        [
          "Big pots and boils",
          "ROVSUN 150K BTU",
          "150,000 BTU."
        ],
        [
          "Small car, couple",
          "Flame King VT-101",
          "Compact 20,000 BTU."
        ],
        [
          "Picnic tabletop",
          "Gas One Butane",
          "7,650 BTU."
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
          "$0 to $30",
          "AOTU Backpacking Stove or Gas One Butane"
        ],
        [
          "$40 to $90",
          "Flame King VT-101 or ROVSUN 150K BTU"
        ],
        [
          "$80 to $160",
          "Gas One B-4545 or Camp Chef Explorer"
        ]
      ]
    }
  },
  {
    "subheading": "Propane vs Butane",
    "cards": [
      {
        "label": "Propane",
        "text": "Propane works in more weather and gives more power. Camp Chef Explorer, Gas One B-4545, ROVSUN 150K BTU and Flame King VT-101 use it."
      },
      {
        "label": "Butane",
        "text": "Butane is compact and simple. Gas One Butane is the butane pick."
      }
    ],
    "note": "Most campers should default to Camp Chef Explorer."
  },
  {
    "subheading": "By Portability",
    "table": {
      "headers": [
        "If you want",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lightest",
          "AOTU Backpacking Stove"
        ],
        [
          "Case included",
          "Gas One Butane"
        ],
        [
          "Detachable legs",
          "Camp Chef Explorer"
        ]
      ]
    }
  },
  {
    "subheading": "For Windy Campsites Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Built-in wind panels or a three-sided windscreen."
      },
      {
        "label": "In this comparison",
        "text": "Camp Chef Explorer has a three-sided windscreen, and Flame King VT-101 has panels."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Camp Chef Explorer for features."
      },
      {
        "label": "Save if",
        "text": "Save with Gas One B-4545."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "BTU output",
    "explanation": "BTU is a measure of heat output, and more BTU boils water faster. A 20,000 BTU two-burner can cook a family meal, while 150,000 BTU is built for giant pots. Check the BTU number in the listing and match it to your biggest pot."
  },
  {
    "criterion": "Burner count",
    "explanation": "Two burners let you cook a pot and a pan at the same time, which speeds up dinner. One burner is enough for couples who cook one dish at a time. Count the dishes you usually make before choosing."
  },
  {
    "criterion": "Wind protection",
    "explanation": "Wind steals heat and wastes fuel, so a stove with panels cooks faster outdoors. Built-in guards beat loose screens. Look in the listing for wind panels or a windscreen."
  },
  {
    "criterion": "Regulator and ignition",
    "explanation": "An adjustable regulator lets you control flame strength, and piezo ignition lights the burner without matches. High-pressure stoves rely on the regulator hose. Look for the regulator type and ignition details on the product page."
  },
  {
    "criterion": "Fuel and safety marks",
    "explanation": "Propane works in more temperatures than butane, and butane is compact. Safety shut-offs and CSA approval add confidence. Check the listing for approvals and the fuel type."
  }
];

export const faq = [
  {
    "q": "What size camping stove do I need?",
    "a": "A two-burner suits most families because you can cook two dishes at once. A single burner fits couples or backpackers. Match the burner count to your meals."
  },
  {
    "q": "Do I need a regulator for a propane stove?",
    "a": "High-pressure stoves like Gas One B-4545 and ROVSUN 150K BTU come with a regulator hose. It controls the gas flow to the burner. Check connections before lighting."
  },
  {
    "q": "Is a high-BTU stove worth it?",
    "a": "Only if you cook with very large pots or want fast boils for a crowd. ROVSUN 150K BTU gives huge power but more than most camp meals need. For everyday cooking, Camp Chef Explorer is plenty."
  },
  {
    "q": "How do I set up a propane camp stove?",
    "a": "Attach the legs, connect the hose to the propane tank and open the valve slowly. Light the burner and set the flame. Always cook outdoors in open air."
  },
  {
    "q": "How do I clean a camp stove?",
    "a": "Let it cool, then wipe grates and burners with a damp cloth. Clear food from the burner holes. Store it dry and covered."
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
