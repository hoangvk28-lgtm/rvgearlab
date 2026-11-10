export const guideSlug = "best-screen-houses";
export const guideTitle = "6 Best Screen Houses in 2026";
export const metaTitle = "Best Screen Houses in 2026";
export const metaDescription = "Best screen houses for camping and patios compared on size, magnetic doors, floors and setup, for bug-free dining and lounging.";
export const mainKeyword = "best screen houses";
export const introParagraphs = [
  "A screen house is a mesh room for sitting, dining and keeping bugs off your food. Sizes run from a solo 10 foot square to a 13 by 13 ft room, and the biggest differences are the doors, floor treatment and how hard the frame is to assemble.",
  "Six models were compared on stated dimensions, door type, floor design and weight. They cover pop-up, color-coded pole and classic builds, so the picks suit different levels of setup patience."
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
    "id": "best-screen-houses-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "TAILGATERZ Magnetic Screen House",
    "price": "$99.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+2lGoWjRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00KJNLYFS?tag=rvgearlab-20",
    "description": "The TAILGATERZ Magnetic Screen House is 11 by 9 by 7.5 ft with front and back magnetic doors and large mesh walls. A perimeter floor design lets you set it directly over a picnic table, and a mud mat sits at the entry.\n\nIt has the most thoughtful dining features of the six and a color-coded steel and fiberglass frame that simplifies assembly. Against the DMH Screen House it costs much less.\n\nIt suits tailgaters and campers who eat outdoors and want mud and bugs left outside. The color-coded poles keep setup instructions simple.",
    "specs": [
      "11 x 9 x 7.5 ft",
      "Magnetic front and back doors",
      "Perimeter floor, mud mat"
    ],
    "pros": [
      "Perimeter floor works over a picnic table",
      "Built-in mud mat at the entry",
      "Color-coded frame eases setup",
      "Magnetic doors close by themselves"
    ],
    "cons": [
      "Pole frame takes longer than a pop-up",
      "Not as large as the CAMPROS"
    ],
    "bestFor": "Tailgates and picnic-table dining",
    "take": "The best dining setup, with a table floor and a mud mat.",
    "catch": "It uses poles, so setup takes longer than a pop-up."
  },
  {
    "id": "best-screen-houses-2",
    "rank": 2,
    "badge": "Best for Movie Nights",
    "name": "DMH OUTDOORS Screen House Tent 13x9FT with Netting Mesh & 2 Magnetic Doors",
    "price": "$142.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51q6o5NbKNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CVXLBBRR?tag=rvgearlab-20",
    "description": "The DMH Screen House is 13 by 9 by 7.5 ft and gives nearly 120 square feet of shade with all-around mesh panels. Two magnetic doors and an included projection screen are listed.\n\nCompared with the TAILGATERZ Screen House it matches the 7.5 ft height and adds a projection screen in the box. It costs more than the TAILGATERZ Screen House.\n\nIt suits families who use the screen room for outdoor movies and want tall headroom. The two magnetic doors suit people carrying snacks.",
    "specs": [
      "13 x 9 x 7.5 ft",
      "Two magnetic doors",
      "Projection screen included"
    ],
    "pros": [
      "Projection screen included",
      "7.5 ft center height",
      "Two self-closing magnetic doors",
      "All-around mesh ventilation"
    ],
    "cons": [
      "Priciest of the six",
      "Pole assembly takes time"
    ],
    "bestFor": "Outdoor movie nights",
    "take": "A tall screen room with a projection screen for family movies.",
    "catch": "The extra screen adds to the price."
  },
  {
    "id": "best-screen-houses-3",
    "rank": 3,
    "badge": "Best 6-Sided Gazebo",
    "name": "Breezestival 10x10 ft Pop-Up Canopy Tent",
    "price": "$104.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51D9xjX66qL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H5PFZSM4?tag=rvgearlab-20",
    "description": "The Breezestival is a 10 by 10 ft six-sided gazebo with a 300D Oxford top, B3 netting and a rugged steel frame. It comes with six detachable wind cloths, two of which have mesh windows, plus stakes and guy ropes.\n\nIt is the only pick here that doubles as a covered gazebo, since the wind cloths can close it up. Compared with the Alvantor Screen House it adds weather panels.\n\nIt suits campers who need a shelter that works for both bugs and wind. Two of the wind cloths include mesh windows for airflow.",
    "specs": [
      "10 x 10 ft hexagon",
      "300D Oxford top, B3 netting",
      "Six detachable wind cloths"
    ],
    "pros": [
      "Wind cloths close the sides",
      "300D Oxford roof",
      "Steel frame with stakes and ropes",
      "Instant pop-up deployment"
    ],
    "cons": [
      "No packed weight listed",
      "Costs more than TAILGATERZ"
    ],
    "bestFor": "Campers who face wind",
    "take": "A pop-up screen room that can close up in wind.",
    "catch": "The listing gives no packed weight."
  },
  {
    "id": "best-screen-houses-4",
    "rank": 4,
    "badge": "Best Lightweight",
    "name": "Alvantor Pop Up House Tent",
    "price": "$135.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51CokL0v5BL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F1TK96FT?tag=rvgearlab-20",
    "description": "The Alvantor Pop Up Screen House is 10 by 10 by 7 ft, weighs 15 pounds and has a fiberglass frame that pops open automatically. Its roof has UPF 50+ protection, and four mesh walls give 360 degree ventilation.\n\nIt is the lightest 10 by 10 ft room here and adds hooks for clothes or backpacks. Compared with the Breezestival Screen Gazebo it gives up weather panels to save weight.\n\nIt suits campers who carry the room a distance from the car. The hooks give you somewhere to hang a daypack.",
    "specs": [
      "10 x 10 x 7 ft",
      "15 lbs, fiberglass frame",
      "UPF 50+ roof, mesh walls"
    ],
    "pros": [
      "Only 15 pounds",
      "Automatic pop-up frame",
      "Hooks for hanging gear",
      "360 degree mesh ventilation"
    ],
    "cons": [
      "No wind cloths or sunshades listed",
      "Costs more than Breezestival"
    ],
    "bestFor": "Lightweight carry",
    "take": "Lightest of the big rooms, with a pop-up frame.",
    "catch": "Wind panels and sunshades are not listed."
  },
  {
    "id": "best-screen-houses-5",
    "rank": 5,
    "badge": "Best Large Value",
    "name": "CAMPROS CP Screen House Tent 13 x 13 Ft Screened Mesh Net Wall Canopy",
    "price": "$75.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KW7sXApNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BS3KZD84?tag=rvgearlab-20",
    "description": "The CAMPROS 13x13 Screen House stands 86 inches at the center, with a 190T polyester roof and one optional sun wall. Stakes, tie downs and a bag come in the box, and there is no attached floor.\n\nIt is the largest footprint here and costs far less than the DMH Screen House. The listing says three people can set it up in about 10 minutes.\n\nIt suits groups who want maximum room at a low price and have help for setup. The optional sun wall blocks low-angle sun on one side.",
    "specs": [
      "13 x 13 ft, 86 in center",
      "190T polyester roof",
      "Bag, stakes, tie downs included"
    ],
    "pros": [
      "Largest footprint of the six",
      "86 inch center height",
      "Optional sun wall",
      "Stakes and tie downs included"
    ],
    "cons": [
      "Needs three people and 10 minutes",
      "No attached floor"
    ],
    "bestFor": "Groups wanting maximum space",
    "take": "The biggest floor per dollar, if you can bring help.",
    "catch": "Three people are needed to pitch it."
  },
  {
    "id": "best-screen-houses-6",
    "rank": 6,
    "badge": "Best Budget",
    "name": "Abahub Portable Screen House Tent for 4-6 Person",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/510SlNpd0WL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWQH4GBF?tag=rvgearlab-20",
    "description": "The Abahub Screen House is 9.8 by 9.8 by 6.7 ft and rated for 4 to 6, with a listed packed weight of 6.6 pounds. It has two doors and classic manual assembly that the listing says suits some setup experience.\n\nIt is the cheapest and lightest here, and its two doors keep air moving. The CAMPROS 13x13 Screen House offers far more floor.\n\nIt suits backpack-style campers who want the lightest screen room. The two doors provide cross-ventilation on warm days.",
    "specs": [
      "9.8 x 9.8 x 6.7 ft",
      "6.6 lb packed weight",
      "Two doors"
    ],
    "pros": [
      "Lowest price of the six",
      "Only 6.6 pounds packed",
      "Two doors for airflow",
      "Folds compactly for storage"
    ],
    "cons": [
      "Manual setup needs experience",
      "Most comfortable with four"
    ],
    "bestFor": "Budget and lightweight campers",
    "take": "A very light, cheap screen room for small groups.",
    "catch": "Four people fit best, and assembly takes some skill."
  }
];

export const howWeEvaluated = [
  {
    "title": "Footprint and height",
    "description": "Stated size and center height."
  },
  {
    "title": "Doors and floor",
    "description": "Magnetic doors, mud mats and perimeter floors."
  },
  {
    "title": "Setup",
    "description": "Pop-up or manual assembly and the people needed."
  },
  {
    "title": "Weight",
    "description": "Weight and packed size."
  },
  {
    "title": "Price",
    "description": "Cost relative to size and extras."
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
    "subheading": "By Use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Tailgate dining",
          "TAILGATERZ Screen House",
          "Perimeter floor over a table."
        ],
        [
          "Movie nights",
          "DMH Screen House",
          "Projection screen included."
        ],
        [
          "Windy campsites",
          "Breezestival Screen Gazebo",
          "Detachable wind cloths."
        ],
        [
          "Light carry",
          "Alvantor Screen House",
          "15 pounds."
        ],
        [
          "Large groups",
          "CAMPROS 13x13 Screen House",
          "13 x 13 ft."
        ],
        [
          "Lowest cost",
          "Abahub Screen House",
          "Cheapest and lightest."
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
          "$50 to $80",
          "Abahub Screen House or CAMPROS 13x13 Screen House"
        ],
        [
          "$90 to $110",
          "TAILGATERZ Screen House or Breezestival Screen Gazebo"
        ],
        [
          "$130 to $150",
          "Alvantor Screen House or DMH Screen House"
        ]
      ]
    }
  },
  {
    "subheading": "Pop-Up vs Pole Frame",
    "cards": [
      {
        "label": "Pop-up",
        "text": "Pop-ups open in seconds. The Alvantor Screen House and Breezestival Screen Gazebo are examples."
      },
      {
        "label": "Pole frame",
        "text": "Pole frames take longer and give more rigidity. The TAILGATERZ Screen House, DMH Screen House and CAMPROS 13x13 Screen House use poles."
      }
    ],
    "note": "Choose a pop-up such as the Alvantor Screen House for speed, or a pole frame such as the CAMPROS 13x13 Screen House for size."
  },
  {
    "subheading": "Priorities",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Fastest setup",
          "Alvantor Screen House"
        ],
        [
          "Largest room",
          "CAMPROS 13x13 Screen House"
        ],
        [
          "Dining features",
          "TAILGATERZ Screen House"
        ],
        [
          "Lightest",
          "Abahub Screen House"
        ]
      ]
    }
  },
  {
    "subheading": "For Outdoor Dining Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A perimeter floor and doors you can open with full hands."
      },
      {
        "label": "In this comparison",
        "text": "The TAILGATERZ Screen House has magnetic doors and a perimeter floor for tables."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the DMH Screen House for the projection screen, or the TAILGATERZ Screen House for dining."
      },
      {
        "label": "Save if",
        "text": "Save with the Abahub Screen House or CAMPROS 13x13 Screen House."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Floor and table fit",
    "explanation": "A table needs about 6 by 3 ft plus space for chairs. A screen house around 10 by 10 ft handles this. Check dimensions for your table."
  },
  {
    "criterion": "Door type",
    "explanation": "Magnetic doors close automatically, while zippers need hands. That helps when carrying plates. Look for the door type."
  },
  {
    "criterion": "Floor design",
    "explanation": "Most screen houses have no attached floor. The TAILGATERZ has a perimeter floor and a mud mat. Check the floor details."
  },
  {
    "criterion": "Setup effort",
    "explanation": "Pop-up frames take seconds, while pole frames can take about 10 minutes and sometimes several people. That gap decides whether you use the room on short stops. Read the setup line."
  },
  {
    "criterion": "Weight",
    "explanation": "Weights range from 6.6 pounds to heavier steel frames. Weight matters if you hike from the car. Check the number."
  }
];

export const faq = [
  {
    "q": "What size screen house do I need?",
    "a": "For a table and four chairs, 10 by 10 ft is the minimum. A 13 by 13 ft room gives more comfort. Compare the stated dimensions."
  },
  {
    "q": "Do screen houses keep out rain?",
    "a": "Not fully. Their roofs shed light rain, but the walls are mesh. Check the roof wording."
  },
  {
    "q": "Is a magnetic door worth it?",
    "a": "If you carry food, yes. Doors close behind you. The TAILGATERZ Screen House and DMH Screen House use them."
  },
  {
    "q": "How do I set up a pole screen house?",
    "a": "Lay out the frame by color, raise the roof and stake the corners. The CAMPROS 13x13 Screen House suggests three people. Allow ten minutes."
  },
  {
    "q": "How do I keep a screen house from blowing away?",
    "a": "Use stakes and guy lines in every corner. Avoid high winds. Remove it in storms."
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
