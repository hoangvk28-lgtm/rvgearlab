export const guideSlug = "best-compact-screen-houses";
export const guideTitle = "4 Best Compact Screen Houses in 2026";
export const metaTitle = "Best Compact Screen Houses in 2026";
export const metaDescription = "Best compact screen houses compared on packed size, weight and footprint, for small patios, balconies and trips where space is tight.";
export const mainKeyword = "best compact screen houses";
export const introParagraphs = [
  "A compact screen house has to do two things at once: leave room on a small patio and disappear into a trunk or closet. That makes packed size and freestanding design matter more than a big person count.",
  "Four mesh shelters were compared here on stated footprint, packed dimensions and weight, and how each anchors itself. Sizes run from a one-person 5.9 ft tent to an 8 ft room for a small table."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/home-golden-hour-campsite.webp";
export const heroImageAlt = "Dome tent and hammock at a forest campsite at golden hour";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-compact-screen-houses-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Lenotos Pop Up Screen House",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51rxYh+Ct9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GC546BN4?tag=rvgearlab-20",
    "description": "The Lenotos 6x6 Screen House is a pop-up with a 6.5 ft interior height and a unique folding mechanism for roughly one-minute setup. It folds into a 27 inch disc just 2 inches thick and includes eight stakes, four sandbags and eight guylines.\n\nIt has the best anchoring kit of the four and a one-minute pitch against the MAIZOA's ten, plus dual zipper doors and gear hooks inside. The MAIZOA 8x7 Screen House gives more floor, while the SMOOTOR Screen House needs no stakes at all.\n\nIt suits campers and patio owners who want a slim, fast, wind-ready room for two or three. Its dual-layer walls add closable windows for privacy.",
    "specs": [
      "6 x 6 ft, 6.5 ft high",
      "27 in disc, 2 in thick",
      "8 stakes, 4 sandbags, 8 guylines"
    ],
    "pros": [
      "Folds to a thin 27 inch disc",
      "One-minute setup claim",
      "Dual zippered doors, gear hooks",
      "Complete anchoring kit included"
    ],
    "cons": [
      "Only 6 by 6 ft of floor",
      "Fits two or three at most"
    ],
    "bestFor": "Small patios and beach trips",
    "take": "A thin disc fold and a full anchoring kit in one compact room.",
    "catch": "Its 6 by 6 ft floor holds a couple of chairs, not a table."
  },
  {
    "id": "best-compact-screen-houses-2",
    "rank": 2,
    "badge": "Best Lightweight Pack",
    "name": "MAIZOA Screen House Tent 8 x 7 Ft Mesh Net",
    "price": "$55.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51x+Y7pAj9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H8N69PQP?tag=rvgearlab-20",
    "description": "The MAIZOA 8x7 Screen House is a six-sided room measuring 8.2 by 6.9 by 5.2 ft, rated for 4 to 6 people with minimalist furniture. It weighs 4.4 pounds and packs to 17.8 by 6.5 by 6.2 inches, and three fiberglass poles cross over to assemble it.\n\nIt gives a little more floor than the Lenotos 6x6 Screen House and a shorter pack than that tent's 27 inch disc. The 360 degree mesh screens keep the view open.\n\nIt suits campers who pack into a bag and want a small table's worth of space. The three-pole cross design is simple to learn.",
    "specs": [
      "8.2 x 6.9 x 5.2 ft",
      "4.4 lbs, 17.8 in packed",
      "Three fiberglass poles"
    ],
    "pros": [
      "Weighs only 4.4 pounds",
      "Packs to about 18 inches long",
      "Fits minimalist furniture",
      "360 degree mesh for views"
    ],
    "cons": [
      "Takes about 10 minutes to assemble",
      "Roof is only 5.2 feet tall"
    ],
    "bestFor": "Backpack and bike trips",
    "take": "The lightest, smallest-packing room of the four with more floor than a 6x6.",
    "catch": "A 5.2 ft roof means no standing in the middle."
  },
  {
    "id": "best-compact-screen-houses-3",
    "rank": 3,
    "badge": "Best Stake-Free Room",
    "name": "2-4 Person Portable Screen House",
    "price": "$52.84",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41uqgnNMlaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWCS6S9S?tag=rvgearlab-20",
    "description": "The SMOOTOR 2-4 Person Screen House is a freestanding mesh tent with a removable floor that needs no stakes. Its straight walls give enough height to stand and move around, and it is rated for three seasons and for indoor or outdoor use.\n\nIt is the one pick that works on concrete, balconies and decks, where stakes are impossible. Compared with the Lenotos 6x6 Screen House it trades the pop-up fold for an anchor-free structure.\n\nIt suits balcony and patio owners who cannot hammer in stakes. The listing also pitches it for indoor use.",
    "specs": [
      "Freestanding, no stakes",
      "Removable floor",
      "2 to 4 person, 3-season"
    ],
    "pros": [
      "Needs no stakes on hard surfaces",
      "Removable floor cleans easily",
      "Tall enough to stand in",
      "Indoor-outdoor use"
    ],
    "cons": [
      "Packed size not listed",
      "3-season rating only"
    ],
    "bestFor": "Balconies, decks and concrete patios",
    "take": "Freestanding design for places where you cannot stake.",
    "catch": "Without a stated packed size, measure storage space first."
  },
  {
    "id": "best-compact-screen-houses-4",
    "rank": 4,
    "badge": "Best Solo Screen House",
    "name": "Abahub Portable Screen House Tent for 1/2 Person",
    "price": "$38.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51xA5ZHsQEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GKCXND8S?tag=rvgearlab-20",
    "description": "The Abahub Screen House for 1 or 2 people has a 5.9 by 4.3 by 5.2 ft interior and weighs 4 pounds packed. It has two doors and one window, and the listing says it is most comfortable for one person.\n\nIt is the smallest and cheapest of the four and uses a classic manual assembly. Compared with the MAIZOA 8x7 Screen House it covers less than half the floor.\n\nIt suits solo campers who want a bug-proof reading nook. A window and two doors keep air moving in a tiny footprint.",
    "specs": [
      "5.9 x 4.3 x 5.2 ft",
      "4 lbs packaged",
      "2 doors, 1 window"
    ],
    "pros": [
      "Lowest price of the four",
      "Only 4 pounds",
      "Two doors and a window",
      "Small enough for a backpack"
    ],
    "cons": [
      "Comfortable for one person",
      "Manual setup needs experience"
    ],
    "bestFor": "Solo campers",
    "take": "A tiny, cheap bug room for one person.",
    "catch": "Treat it as a one-person room, even though the listing says 1 or 2."
  }
];

export const howWeEvaluated = [
  {
    "title": "Footprint",
    "description": "Stated dimensions and height in feet."
  },
  {
    "title": "Packed size",
    "description": "Folded size and weight where listed."
  },
  {
    "title": "Anchoring",
    "description": "Stakes, sandbags, guylines or freestanding."
  },
  {
    "title": "Setup",
    "description": "Pop-up, pole assembly and time."
  },
  {
    "title": "Fit to purpose",
    "description": "Whether the size suits a patio, balcony or campsite."
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
    "subheading": "By Space",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Small patio",
          "Lenotos 6x6 Screen House",
          "6 by 6 ft pop-up."
        ],
        [
          "Backpack trip",
          "MAIZOA 8x7 Screen House",
          "4.4 pounds."
        ],
        [
          "Balcony or deck",
          "SMOOTOR Screen House",
          "Freestanding, no stakes."
        ],
        [
          "One person",
          "Abahub 1-2 Person Screen House",
          "Cheapest and smallest."
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
          "Abahub 1-2 Person Screen House or SMOOTOR Screen House"
        ],
        [
          "$50 to $60",
          "MAIZOA 8x7 Screen House or Lenotos 6x6 Screen House"
        ]
      ]
    }
  },
  {
    "subheading": "Pop-Up vs Pole Assembly",
    "cards": [
      {
        "label": "Pop-up",
        "text": "The Lenotos 6x6 Screen House opens in about a minute and folds into a disc."
      },
      {
        "label": "Pole assembly",
        "text": "The MAIZOA 8x7 Screen House and Abahub 1-2 Person Screen House need manual assembly."
      }
    ],
    "note": "Choose the Lenotos 6x6 Screen House for speed, and a pole design for the lowest weight."
  },
  {
    "subheading": "Surface",
    "table": {
      "headers": [
        "Surface",
        "Recommended pick"
      ],
      "rows": [
        [
          "Grass or sand",
          "Lenotos 6x6 Screen House"
        ],
        [
          "Concrete or deck",
          "SMOOTOR Screen House"
        ],
        [
          "Indoor use",
          "SMOOTOR Screen House"
        ]
      ]
    }
  },
  {
    "subheading": "For Balcony Owners Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A freestanding frame and no stakes."
      },
      {
        "label": "In this comparison",
        "text": "The SMOOTOR Screen House is freestanding and has a removable floor."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Lenotos 6x6 Screen House for its anchoring kit and quick fold."
      },
      {
        "label": "Save if",
        "text": "Save with the Abahub 1-2 Person Screen House if you camp solo."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Footprint versus furniture",
    "explanation": "A 6 by 6 ft floor holds two chairs, while 8 by 7 ft adds a small table. Check the size against your chairs. Measure your patio before ordering."
  },
  {
    "criterion": "Packed dimensions",
    "explanation": "The Lenotos folds to a 27 inch disc, and the MAIZOA packs to about 18 inches long. A longer, thinner pack fits differently from a disc. Look for the packed dimensions."
  },
  {
    "criterion": "Anchoring method",
    "explanation": "Stakes cannot go into concrete or decking. Sandbags and freestanding frames can. Look for sandbags or a freestanding label."
  },
  {
    "criterion": "Roof height",
    "explanation": "A 5.2 ft roof is too low to stand under, and a 6.5 ft roof is not. Standing room matters for longer stays. Find the height."
  },
  {
    "criterion": "Assembly time",
    "explanation": "Pop-ups take about a minute, and cross-pole designs take about 10 minutes. That affects short stops. Read the setup line."
  }
];

export const faq = [
  {
    "q": "Can I use a compact screen house on a balcony?",
    "a": "Yes, if it is freestanding. The SMOOTOR Screen House needs no stakes. Check balcony rules."
  },
  {
    "q": "How small do these fold?",
    "a": "The Lenotos 6x6 Screen House folds to a 27 inch disc, and the MAIZOA 8x7 Screen House packs to 17.8 inches long. Measure your storage."
  },
  {
    "q": "Is a 6x6 screen house big enough?",
    "a": "For two chairs and a small table, yes. The MAIZOA 8x7 Screen House gives more room. Larger groups need a bigger tent."
  },
  {
    "q": "How do I anchor a pop-up in wind?",
    "a": "Use all stakes and guylines, and add sandbags. The Lenotos 6x6 Screen House includes four. Take it down in storms."
  },
  {
    "q": "How do I clean the mesh?",
    "a": "Wipe with mild soap and water, then dry. Do not fold it damp. Store it in the bag."
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
