export const guideSlug = "best-10-person-instant-tents";
export const guideTitle = "4 Best 10 Person Instant Tents in 2026";
export const metaTitle = "Best 10 Person Instant Tents in 2026";
export const metaDescription = "Best 10 person instant tents compared on real floor area, blackout fabric, room dividers and weather ratings, for big families and group trips.";
export const mainKeyword = "best 10 person instant tents";
export const introParagraphs = [
  "A tent sold for ten people almost never sleeps ten comfortably with gear, so the number on the box matters less than the floor plan behind it. Instant frames add another wrinkle, because the pre-attached poles set how tall and how wide the walls can be.",
  "Four tents are covered here, each judged by stated dimensions, how many air beds the listing says fit, and whether a divider, blackout fabric or a screened porch is part of the package. Where one listing covers a whole size family, that is noted in the pick."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-lakeside-campsite.webp";
export const heroImageAlt = "Colorful tents pitched beside a misty mountain lake";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-10-person-instant-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "CORE 10 Person Instant Cabin Tent",
    "price": "$349.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41U5wSsvalL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DPLPJYDH?tag=rvgearlab-20",
    "description": "The CORE 10 Person Instant Cabin Tent measures 14 by 10 feet with a 78 inch center height, and the listing says it fits four queen air beds. Its H20 Block fabric is rated 1200mm, with a fully taped rainfly and sealed seams.\n\nAgainst the EVER ADVANCED Tent it keeps the same 14 by 10 footprint and adds a room divider and steel stakes in the box. Compared with the Coleman Tent it is cheaper and focuses on interior layout instead of a screened porch.\n\nIt suits families who want real bed space and two separate rooms in a tent that goes up in about two minutes. Its layout is the easiest to share between two families.",
    "specs": [
      "14 x 10 ft, 78 in peak",
      "Fits four queen air beds",
      "Room divider, steel stakes"
    ],
    "pros": [
      "Four queen air beds fit inside",
      "Divider creates two private rooms",
      "Fully taped rainfly, sealed seams",
      "Storage pockets keep small items off floor"
    ],
    "cons": [
      "Rated 1200mm, below the EVER ADVANCED",
      "Realistic comfort is five with gear"
    ],
    "bestFor": "Families who share beds and gear",
    "take": "Four queen beds, a room divider and a quick two-minute setup make it the sensible group tent.",
    "catch": "The listing itself says it comfortably holds 5 with gear, with 10 only without gear."
  },
  {
    "id": "best-10-person-instant-tents-2",
    "rank": 2,
    "badge": "Best Blackout Tent",
    "name": "EVER ADVANCED 10 Person Instant Camping Tent with Blackout Design",
    "price": "$280.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/517yaBmyvOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FX4L87XZ?tag=rvgearlab-20",
    "description": "The EVER ADVANCED 10 Person tent has a 14 by 10 ft floor and a 78 inch center height, with blackout fabric that filters out most outside light. It carries a 4000mm water-resistant coating and fully taped seams.\n\nWhere the CORE 10 Tent adds a divider, this one adds darkness and the highest waterproof number in the group. It also lists two large doors, five zippered mesh windows and an overhead net roof for 360 degree airflow.\n\nIt is the tent for late sleepers and kids who nap, set up in roughly three to five minutes. Its mesh roof also keeps the air moving on warm nights.",
    "specs": [
      "Blackout light-blocking fabric",
      "4000mm water-resistant coating",
      "Two doors, five mesh windows"
    ],
    "pros": [
      "Blackout fabric helps sleep past sunrise",
      "Highest waterproof rating of the four",
      "Net roof adds airflow",
      "Pre-attached frame, 3 to 5 minute setup"
    ],
    "cons": [
      "Slower setup than the 2 minute CORE",
      "No divider listed"
    ],
    "bestFor": "Late sleepers and napping kids",
    "take": "Dark interior and a 4000mm coating for sleep-in mornings and wet weather.",
    "catch": "Setup takes three to five minutes, a little slower than the CORE."
  },
  {
    "id": "best-10-person-instant-tents-3",
    "rank": 3,
    "badge": "Best Value 10 Person",
    "name": "HINSTANT 4/6/8/10 Person Instant Tent",
    "price": "$249.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31KRgnuHaDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FQNHJHXC?tag=rvgearlab-20",
    "description": "The HINSTANT 10 person version is 14 by 10 ft like the CORE 10 Tent and raises the center height to 83 inches. It uses 190T polyester with a PU 2000mm coating, two doors, six large mesh windows and two lower vents.\n\nIt undercuts the CORE and EVER ADVANCED on price while taking the tallest walls here. The trade is a lower waterproof rating than the EVER ADVANCED, and it does not list a room divider.\n\nIt is the pick for a budget-minded group that wants headroom and plenty of ventilation. The listing covers a 4, 6, 8 and 10 person family, so choose the 10 person option.",
    "specs": [
      "14 x 10 ft, 83 in peak",
      "190T polyester, PU 2000mm",
      "Six mesh windows, two doors"
    ],
    "pros": [
      "Tallest center height of the group",
      "Six windows plus lower vents",
      "Galvanized metal pole frame",
      "Lowest price for ten-person size"
    ],
    "cons": [
      "PU 2000mm is the lowest rating",
      "Sold as a size family listing"
    ],
    "bestFor": "Budget group trips",
    "take": "The cheapest 14 x 10 ft instant tent with the most headroom.",
    "catch": "Pick the 10 person option inside the listing, since the same page covers smaller sizes."
  },
  {
    "id": "best-10-person-instant-tents-4",
    "rank": 4,
    "badge": "Best Screened Porch",
    "name": "Coleman 4/6/8/10 Person Instant Camping Tent with 1-Minute Setup",
    "price": "$379.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-RX3ibUGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7QHX9V7?tag=rvgearlab-20",
    "description": "The Coleman 4/6/8/10 Person Instant Tent listing includes a screened porch that Coleman says adds 35 percent more space than comparable 6 person dome tents. WeatherTec welded corners, inverted seams and an included rainfly are named.\n\nIt is the priciest pick and the only one with a bug-free porch, where the CORE 10 Tent and HINSTANT Tent give you only interior floor. Reflective Illumiline guy lines and a heat-reducing fabric add small practical touches.\n\nIt suits campers who want a lounge space attached to the tent. The page covers several sizes, so select the 10 person option.",
    "specs": [
      "Screened porch included",
      "WeatherTec welded corners",
      "Reflective Illumiline guy lines"
    ],
    "pros": [
      "Screened porch for bug-free lounging",
      "Welded corners, inverted seams",
      "Rainfly included in the package",
      "Setup claimed in as fast as a minute"
    ],
    "cons": [
      "Highest price among the four",
      "Size family listing, easy to misorder"
    ],
    "bestFor": "Campers wanting a bug-free porch",
    "take": "The porch is the draw, giving you a place to sit out of the bugs.",
    "catch": "Choose carefully, since the same page also sells 4, 6 and 8 person sizes."
  }
];

export const howWeEvaluated = [
  {
    "title": "Floor plan",
    "description": "Stated length, width and center height compared across all four listings."
  },
  {
    "title": "Bed fit",
    "description": "Whether the listing names air-bed capacity instead of only a person count."
  },
  {
    "title": "Light and heat",
    "description": "Blackout fabric, reflective coatings and vents where described."
  },
  {
    "title": "Weather ratings",
    "description": "Waterproof coating numbers, taped seams and rainfly type."
  },
  {
    "title": "Extras",
    "description": "Dividers, porches, stakes and storage pockets that ship in the box."
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
    "subheading": "By Group Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Family of five with beds",
          "CORE 10 Tent",
          "Fits four queen beds and has a divider."
        ],
        [
          "Kids who sleep in",
          "EVER ADVANCED Tent",
          "Blackout fabric darkens the room."
        ],
        [
          "Big group on a budget",
          "HINSTANT Tent",
          "Lowest price with 83 inch walls."
        ],
        [
          "Campers who want a lounge",
          "Coleman Tent",
          "Screened porch is included."
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
          "$240 to $290",
          "HINSTANT Tent or EVER ADVANCED Tent"
        ],
        [
          "$340 to $380",
          "CORE 10 Tent or Coleman Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Divider vs Blackout",
    "cards": [
      {
        "label": "Divider",
        "text": "A room divider splits the floor into two private spaces, which suits adults and children sharing one tent. The CORE 10 Tent includes one."
      },
      {
        "label": "Blackout",
        "text": "Blackout fabric dims the interior so people can sleep past sunrise. The EVER ADVANCED Tent is built around this."
      }
    ],
    "note": "Choose the CORE 10 Tent for privacy and the EVER ADVANCED Tent if early light is the problem."
  },
  {
    "subheading": "Weather Priority",
    "table": {
      "headers": [
        "Priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Heavy rain",
          "EVER ADVANCED Tent"
        ],
        [
          "Hot, sunny climates",
          "EVER ADVANCED Tent"
        ],
        [
          "Warm nights with airflow",
          "HINSTANT Tent"
        ],
        [
          "Bugs at dusk",
          "Coleman Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For Multi-Family Weekends Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A divider, wide floor and several doors."
      },
      {
        "label": "In this comparison",
        "text": "The CORE 10 Tent gives a divider and a 14 x 10 ft floor, and the HINSTANT Tent and EVER ADVANCED Tent give two doors each."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Coleman Tent if a screened porch matters, or the CORE 10 Tent for layout."
      },
      {
        "label": "Save if",
        "text": "Save with the HINSTANT Tent if you can live with a lower waterproof rating."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Floor size versus person count",
    "explanation": "A 10 person label usually assumes sleeping bags shoulder to shoulder with no gear. A 14 by 10 ft floor is 140 square feet, which suits roughly five adults with gear. Check for a plain length and width, and for a line about air beds."
  },
  {
    "criterion": "Center height and walls",
    "explanation": "Instant tents use pre-attached poles, and those poles decide how steep the walls are. A 78 inch peak lets most adults stand in the middle, and 83 inches adds a bit more. Straight walls give more usable corners than a dome shape does. Find the center height stated in inches."
  },
  {
    "criterion": "Waterproof coating number",
    "explanation": "A figure such as 1200mm, 2000mm or 4000mm describes how much water pressure the fabric resists. Higher numbers mean better rain protection, though taped seams matter just as much. Look for both a coating number and a mention of taped or sealed seams."
  },
  {
    "criterion": "Room divider and privacy",
    "explanation": "A divider turns one large room into two, which helps parents and kids or two families share one tent. Not every ten-person tent includes one. Check the bullet list for the word divider, and note whether the divider is sewn in or removable."
  },
  {
    "criterion": "Size family listings",
    "explanation": "Some pages sell one tent in 4, 6, 8 and 10 person versions under one title. Ordering the wrong variation gives you a much smaller tent. Confirm the exact floor dimensions after you pick the size on the product page."
  }
];

export const faq = [
  {
    "q": "How many people really fit in a 10 person instant tent?",
    "a": "The two CORE and EVER ADVANCED listings share a 14 by 10 ft floor, and CORE says about five with gear. Ten is possible only with sleeping bags and no gear. Plan on half the stated number."
  },
  {
    "q": "Can I use a regular rug or queen air bed inside?",
    "a": "Yes, the CORE 10 Tent listing says four queen air beds fit. Measure your mattress before you buy. Remember to leave space for the door."
  },
  {
    "q": "Is an instant tent worth it over a standard cabin tent?",
    "a": "The main gain is setup speed, since poles come attached and the frame unfolds. The tradeoff is a heavy, bulky pack. For stable car camping it is usually worth it."
  },
  {
    "q": "How do I set one up with two people?",
    "a": "Stake the corners, then lift and extend the leg poles until they click. Add the rainfly last. Practice once at home first."
  },
  {
    "q": "How do I stop an instant tent leaking at the seams?",
    "a": "Use the fully taped rainfly and stake the guy lines tight. Check zippers and corners before a rain trip. Dry the tent before folding it."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Tents",
    "href": "/tents-shelter/best-camping-tents"
  },
  {
    "title": "Best Tent Stakes",
    "href": "/tents-shelter/best-tent-stakes"
  },
  {
    "title": "Best 4 Season Tent Under 200",
    "href": "/tents-shelter/best-4-season-tent-under-200"
  },
  {
    "title": "Best 4 Season Tent Under 300",
    "href": "/tents-shelter/best-4-season-tent-under-300"
  }
];
