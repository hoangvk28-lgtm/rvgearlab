export const guideSlug = "best-8-person-cabin-tents";
export const guideTitle = "3 Best 8 Person Cabin Tents in 2026";
export const metaTitle = "Best 8 Person Cabin Tents in 2026";
export const metaDescription = "Best 8-person cabin tents compared on floor size, porch design, room dividers and weather build for large family and group camping.";
export const mainKeyword = "best 8 person cabin tents";
export const introParagraphs = [
  "An eight-person cabin tent lives or dies by its floor plan. The label counts sleeping bags in a row, so the real test is how many air mattresses fit and whether a divider and a porch make the space livable.",
  "Three tents made it onto the list after the listings were checked for a stated 8-person rating, a measured floor and real weather details. Each takes a different approach to porch space, rooms and cost."
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
    "id": "best-8-person-cabin-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Portal 8 Person Tents for Camping",
    "price": "$132.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31j+pwSvDuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DFCFR5VG?tag=rvgearlab-20",
    "description": "The Portal 8-person cabin is 14 ft by 8 ft with an 80 inch center height and fits three full-size air beds. A 2-room layout with separate doors, a 14 ft by 7.5 ft porch, six mesh windows and two E-ports sit alongside a gear loft, mud mat and room divider.\n\nAgainst the DMH it adds two rooms with their own doors and a bigger covered porch, and costs less. Next to the UNP it adds ports, a loft and taped seams.\n\nIt suits families that want private rooms and a covered entry. The listing shows the most camper-friendly features of the three.",
    "specs": [
      "14 x 8 ft, 80 in peak",
      "2 rooms, big porch",
      "Two E-ports, loft, mud mat"
    ],
    "pros": [
      "Two rooms with separate doors",
      "Large covered porch",
      "Two E-ports for power",
      "Fully taped seams and rainfly"
    ],
    "cons": [
      "Floor is 8 ft wide",
      "Porch is not sleeping space"
    ],
    "bestFor": "Families wanting rooms",
    "take": "Two rooms, a big porch and E-ports for less than the screen-porch rival.",
    "catch": "The 8 ft width limits air bed layout to three beds in a row."
  },
  {
    "id": "best-8-person-cabin-tents-2",
    "rank": 2,
    "badge": "Best Screen Porch",
    "name": "DMH OUTDOORS 8 Person Tents for Camping Large Cabin Tent with Screen Porch",
    "price": "$151.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JaL0vcI5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G6L1WY6P?tag=rvgearlab-20",
    "description": "The DMH 8-person tent has a (12+5) by 10 ft floor area with an 86 inch center height and a screened-in porch. One mesh door, three mesh windows and a mesh top ventilate it, and the listing names a rain-resistant E-Port, tent skirt and taped seams.\n\nAgainst the Portal, the porch is a true screened room that stops bugs. Compared with the UNP, it adds the skirt and an overhead mesh loft, and costs a little more.\n\nIt suits campers in buggy areas who sit outside most of the evening. The tall 86 inch wall is the highest here.",
    "specs": [
      "(12+5) x 10 ft floor",
      "86 in center height",
      "Screened porch, E-Port"
    ],
    "pros": [
      "Tallest peak at 86 inches",
      "Screened porch keeps bugs out",
      "E-Port and tent skirt",
      "Mesh pockets and overhead loft"
    ],
    "cons": [
      "Costs more than the other two",
      "Porch space does not count as sleeping"
    ],
    "bestFor": "Buggy-season campsites",
    "take": "A screened living room and the tallest ceiling in this trio.",
    "catch": "The listing sells it in several colors, so pick the color that suits you."
  },
  {
    "id": "best-8-person-cabin-tents-3",
    "rank": 3,
    "badge": "Best Budget Pick",
    "name": "UNP 8 Person Tents for Camping Waterproof Family Cabin Tent with Rainfly",
    "price": "$129.19",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ray88LD3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DFYHQ8WT?tag=rvgearlab-20",
    "description": "The UNP 8-person tent measures 12 ft by 9 ft by 80 inches with two mesh doors, six mesh windows and a mesh top. A 1000mm polyurethane coating, 4 steel leg poles and a 1-year warranty are listed, and the pack weighs about 26.8 lb.\n\nIt is the lowest-priced tent here. Compared with the Portal it has two doors and no porch or divider.\n\nIt suits budget campers who want an eight-person floor and plenty of airflow. The listing itself says six people with gear is the most comfortable use.",
    "specs": [
      "12 x 9 x 80 in",
      "1000mm PU coating",
      "2 doors, 6 windows"
    ],
    "pros": [
      "Lowest price of the three",
      "Two doors and six windows",
      "One-year warranty listed",
      "Fits two air mattresses"
    ],
    "cons": [
      "Comfort is six people with gear",
      "Weighs about 26.8 lb"
    ],
    "bestFor": "Budget family trips",
    "take": "The cheapest 8-person cabin, with a two-door, six-window layout.",
    "catch": "A 1000mm rating suits fair weather, and the pack is heavy at 26.8 lb."
  }
];

export const howWeEvaluated = [
  {
    "title": "Floor plan",
    "description": "Footprints and the number of air beds each tent fits were compared."
  },
  {
    "title": "Honest eight-person fit",
    "description": "Listings that state a with-gear figure were treated as the realistic capacity."
  },
  {
    "title": "Porch design",
    "description": "Open, covered and screened porches were weighed for gear storage and bug control."
  },
  {
    "title": "Rooms and doors",
    "description": "Dividers and separate doors per room were compared for privacy."
  },
  {
    "title": "Weather and extras",
    "description": "Water ratings, taped seams, E-ports and warranty were compared."
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
    "subheading": "By Group Layout",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Two families with separate rooms",
          "Portal 8-Person Two-Room Porch",
          "Two rooms, each with its own door."
        ],
        [
          "Bug-heavy lakeside camp",
          "DMH 8-Person Screen Porch Tent",
          "Screened porch plus mesh door, windows and roof."
        ],
        [
          "Occasional weekends, tight budget",
          "UNP 8-Person Family Cabin",
          "Lowest price with six windows."
        ],
        [
          "Tallest campers",
          "DMH 8-Person Screen Porch Tent",
          "86 inch peak."
        ],
        [
          "Power for a fan or phones",
          "Portal 8-Person Two-Room Porch",
          "Two E-ports."
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
          "$120 to $130",
          "UNP 8-Person Family Cabin"
        ],
        [
          "$130 to $140",
          "Portal 8-Person Two-Room Porch"
        ],
        [
          "$150 to $160",
          "DMH 8-Person Screen Porch Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Porch vs No Porch",
    "cards": [
      {
        "label": "Porch",
        "text": "Portal 8-Person Two-Room Porch and DMH 8-Person Screen Porch Tent add a covered or screened space for gear and sitting."
      },
      {
        "label": "No porch",
        "text": "UNP 8-Person Family Cabin puts everything into the sleeping floor and costs less."
      }
    ],
    "note": "Choose Portal 8-Person Two-Room Porch for most families, and UNP 8-Person Family Cabin only for the lowest cost."
  },
  {
    "subheading": "By Weather Priority",
    "table": {
      "headers": [
        "Condition",
        "Recommended pick"
      ],
      "rows": [
        [
          "Buggy nights",
          "DMH 8-Person Screen Porch Tent"
        ],
        [
          "Warm days and airflow",
          "UNP 8-Person Family Cabin"
        ],
        [
          "Rain and cooking under cover",
          "Portal 8-Person Two-Room Porch"
        ]
      ]
    }
  },
  {
    "subheading": "For Two-Family Trips Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "two rooms with separate doors and a shared covered space"
      },
      {
        "label": "In this comparison",
        "text": "Portal 8-Person Two-Room Porch pairs two doors with a 14 ft porch, while DMH 8-Person Screen Porch Tent offers a screened sitting area."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you plan long stays, because Portal 8-Person Two-Room Porch adds two rooms and E-ports and DMH 8-Person Screen Porch Tent adds a screened room. Both fit group camping better than a plain box."
      },
      {
        "label": "Save if",
        "text": "Save with UNP 8-Person Family Cabin if you camp in fair weather. It gives an 8-person floor at the lowest price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Real 8-person capacity",
    "explanation": "An 8-person label means eight sleeping bags with no gear. A 12 x 9 ft floor fits two air beds, and a 14 x 8 ft floor fits three. Compare mattresses to people before buying."
  },
  {
    "criterion": "Porch type",
    "explanation": "A porch is a covered area outside the sleeping tent. A screened porch adds mesh walls against bugs. Look for porch dimensions on the listing."
  },
  {
    "criterion": "Room dividers",
    "explanation": "A divider splits the tent into two rooms. Each room needs its own door for real privacy. Check the door count and divider."
  },
  {
    "criterion": "Center height",
    "explanation": "The peak shows how upright you can stand. An 86 inch peak suits tall adults, and 80 inches is fine for most. Check the inches on the listing."
  },
  {
    "criterion": "Waterproof rating",
    "explanation": "A rating in millimeters shows water pressure resistance, and 1000mm suits light rain. Higher values handle storms. Look for the figure and for taped seams."
  },
  {
    "criterion": "Power access",
    "explanation": "An E-port is a small zippered opening for an extension cord. It keeps rain out and the flap closed. Check how many ports are listed."
  }
];

export const faq = [
  {
    "q": "Can eight adults sleep in an 8-person tent?",
    "a": "Not comfortably. UNP says six people with gear is most comfortable. Plan on a family of five or six."
  },
  {
    "q": "What is the common mistake with large cabins?",
    "a": "Ignoring stakes and guylines. A tall straight wall acts like a sail. Stake every corner and use the lines."
  },
  {
    "q": "Is the Portal worth it over the UNP?",
    "a": "It costs a bit more and adds a porch, two rooms and E-ports. UNP 8-Person Family Cabin has fewer extras. Pay for the Portal if you want privacy."
  },
  {
    "q": "How do I set up the divider?",
    "a": "Clip it to the roof loops and pull to floor tabs. Each room needs its own door. The Portal listing names the two doors."
  },
  {
    "q": "How do I keep the porch dry?",
    "a": "Pitch with the porch downwind and tension its guylines. Keep gear off the ground on a tarp. Check the listing for taped seams."
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
