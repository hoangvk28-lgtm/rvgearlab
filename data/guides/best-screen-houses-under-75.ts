export const guideSlug = "best-screen-houses-under-75";
export const guideTitle = "4 Best Screen Houses Under 75 in 2026";
export const metaTitle = "Best Screen Houses Under 75 in 2026";
export const metaDescription = "Best screen houses under $75 compared on floor size, weight and mesh coverage, for campers who want a bug-free sitting room on a small budget.";
export const mainKeyword = "best screen houses under 75";
export const introParagraphs = [
  "A screen house is a mesh-walled room that keeps mosquitoes off your picnic table, and under $75 the choices are simple pole-and-mesh designs. Few good options sit under this price, so the question is how much floor you need and how much setup work you will tolerate.",
  "Four screen houses made the list, from a 71 inch cube to a nearly 10 foot square. They are ranked by usable floor space, packed weight and how well each handles light rain and sun."
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
    "id": "best-screen-houses-under-75-1",
    "rank": 1,
    "badge": "Best Value Under $75",
    "name": "Abahub Portable Screen House Tent for 4-6 Person",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/510SlNpd0WL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWQH4GBF?tag=rvgearlab-20",
    "description": "The Abahub screen house is 9.8 by 9.8 by 6.7 feet and is rated for 4 to 6 people, with two doors and a manual pole setup. The packed weight is about 6.6 pounds, and it folds small enough to store in a closet.\n\nIt has the biggest floor in the group by a wide margin, more than the 8.2 by 6.9 foot MAIZOA hexagon and the 75 by 51 inch MAIZOA box. Two doors keep air moving, and the weight stays under 7 pounds.\n\nA good home for four who want a sitting room with real elbow space. Pitch it on grass, a patio or a campsite pad.",
    "specs": [
      "9.8 x 9.8 x 6.7 ft room",
      "About 6.6 lb packed",
      "Two doors, manual setup"
    ],
    "pros": [
      "Largest floor in the group",
      "Light at about 6.6 pounds",
      "Two doors for cross-breeze",
      "Folds small for storage"
    ],
    "cons": [
      "Manual setup takes some practice",
      "Four people fit best"
    ],
    "bestFor": "Families of four",
    "take": "The biggest floor you can buy for under $75, in a light package.",
    "catch": "Plan on a first practice pitch at home before your trip."
  },
  {
    "id": "best-screen-houses-under-75-2",
    "rank": 2,
    "badge": "Best Lightest Room",
    "name": "MAIZOA Screen House Tent 8 x 7 Ft Mesh Net",
    "price": "$55.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51x+Y7pAj9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H8N69PQP?tag=rvgearlab-20",
    "description": "The MAIZOA 8x7 is a six-sided screen room measuring 8.2 by 6.9 by 5.2 feet, rated for 4 to 6 people with minimalist furniture. It weighs 4.4 pounds, packs to 17.8 by 6.5 by 6.2 inches and goes up on three crossing fiberglass poles.\n\nThe hexagon weighs about 2 pounds less than the Abahub and packs shorter than any other pick. It gives less floor than the Abahub 9.8 ft Square.\n\nIt suits campers who carry gear in a bag and want a small table's worth of mesh-wrapped space. The 360 degree mesh keeps the view open.",
    "specs": [
      "8.2 x 6.9 x 5.2 ft hexagon",
      "4.4 lb, 17.8 in packed",
      "Three fiberglass poles"
    ],
    "pros": [
      "Only 4.4 pounds",
      "Packs to about 18 inches",
      "Fits minimalist furniture",
      "360 degree mesh for views"
    ],
    "cons": [
      "Takes about 10 minutes to assemble",
      "Roof is only 5.2 feet tall"
    ],
    "bestFor": "Light packers",
    "take": "The lightest, smallest-packing room of the four.",
    "catch": "At 5.2 feet tall, you cannot stand in the middle."
  },
  {
    "id": "best-screen-houses-under-75-3",
    "rank": 3,
    "badge": "Best Compact Box",
    "name": "MAIZOA Portable Screen House Tent for 4-6 Person",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51mzSmqp65L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H8N17T55?tag=rvgearlab-20",
    "description": "The MAIZOA box is 75 by 51 by 75 inches with a waterproof and sun-blocking fabric top and large mesh sides. It is built for camping, courtyards and backyard gatherings, and beginners can assemble it without special tools.\n\nIts 75 inch height lets most adults stand, which beats the 5.2 foot hexagon and gives more headroom per square foot than the Abahub. Its footprint is the smallest of the group apart from the cube.\n\nSolo campers and couples after a small mesh room with real headroom will like it. The beige look suits patios and campsites.",
    "specs": [
      "75 x 51 x 75 in box",
      "Waterproof, sun-blocking top",
      "Large mesh sides"
    ],
    "pros": [
      "75 inch height lets you stand",
      "Large mesh sides for views",
      "Simple tool-free assembly",
      "Small footprint fits tight patios"
    ],
    "cons": [
      "Small floor for four adults",
      "Fabric top gives light rain cover only"
    ],
    "bestFor": "Couples and small patios",
    "take": "A tall, compact room that fits a patio table for two.",
    "catch": "A 51 inch depth fits a table and two chairs, not more."
  },
  {
    "id": "best-screen-houses-under-75-4",
    "rank": 4,
    "badge": "Lowest-Price Screen Room",
    "name": "Screen House Tent",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51-+5oLNU3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GS8SBKQL?tag=rvgearlab-20",
    "description": "This screen room measures 71 by 51 by 65 inches and is sold for 2 to 3 people, with a space that can fit 4 to 5 for a picnic. It uses 210D Oxford cloth and a frame of 13mm high-strength poles, with large mesh windows on all four sides.\n\nIt costs less than every other pick and sets up tool-free with detachable poles. The Oxford top is heavier than the thin fabrics on the larger rooms.\n\nIt suits picnics, tea breaks and backyard seating where the goal is a bug-free corner. Four-sided mesh gives a 360 degree view.",
    "specs": [
      "71 x 51 x 65 in cube",
      "210D Oxford, 13mm poles",
      "Mesh on all four sides"
    ],
    "pros": [
      "Lowest price in the group",
      "Tool-free detachable poles",
      "Mesh on all four sides",
      "Sturdy 210D Oxford top"
    ],
    "cons": [
      "Small footprint for a crowd",
      "Roof is 65 inches tall"
    ],
    "bestFor": "Backyard picnics",
    "take": "The cheapest way to get a bug-free corner.",
    "catch": "It fits two to three adults comfortably, not a table of six."
  }
];

export const howWeEvaluated = [
  {
    "title": "Floor size",
    "description": "Compared floors from a 71 by 51 inch box to a 9.8 foot square."
  },
  {
    "title": "Weight and pack",
    "description": "Ranked packed weight from 4.4 to about 7 pounds."
  },
  {
    "title": "Mesh coverage",
    "description": "Looked at mesh sides, doors and roof fabric."
  },
  {
    "title": "Headroom",
    "description": "Compared ceiling heights from 5.2 to 6.7 feet."
  },
  {
    "title": "Price",
    "description": "Ranked value between $40 and $56."
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
    "subheading": "By Group",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Family of four",
          "Abahub 9.8 ft Square",
          "Biggest floor."
        ],
        [
          "Backpack-style camper",
          "MAIZOA 8x7 Hexagon",
          "4.4 pounds."
        ],
        [
          "Couple on a patio",
          "MAIZOA 75 in Box",
          "Tall and compact."
        ],
        [
          "Picnic for two or three",
          "Screen Cube 71 in",
          "Lowest price."
        ],
        [
          "Group of six",
          "Abahub 9.8 ft Square",
          "Largest floor under $75."
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
          "Screen Cube 71 in or MAIZOA 75 in Box"
        ],
        [
          "$50 to $60",
          "Abahub 9.8 ft Square or MAIZOA 8x7 Hexagon"
        ]
      ]
    }
  },
  {
    "subheading": "Hexagon vs Box",
    "cards": [
      {
        "label": "Hexagon",
        "text": "A six-sided room uses crossing poles and packs small, but the roof slopes. The MAIZOA 8x7 Hexagon is a hexagon."
      },
      {
        "label": "Box",
        "text": "A rectangular room has vertical walls and more headroom at the edges. The Abahub 9.8 ft Square, MAIZOA 75 in Box and Screen Cube 71 in are boxes."
      }
    ],
    "note": "Choose a box such as the Abahub 9.8 ft Square unless pack weight is your priority."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $40, picnic corner",
          "Screen Cube 71 in"
        ],
        [
          "About $48, tall box",
          "MAIZOA 75 in Box"
        ],
        [
          "About $56, light",
          "MAIZOA 8x7 Hexagon"
        ],
        [
          "About $56, big floor",
          "Abahub 9.8 ft Square"
        ]
      ]
    }
  },
  {
    "subheading": "Campsite Dining Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A floor of at least 8 by 8 feet and a roof over 6 feet."
      },
      {
        "label": "In this comparison",
        "text": "The Abahub 9.8 ft Square gives 9.8 feet and a 6.7 foot roof, while the MAIZOA 8x7 Hexagon fits a small table."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend up to the cap on the Abahub 9.8 ft Square for space, or on the MAIZOA 8x7 Hexagon if you hike in."
      },
      {
        "label": "Save if",
        "text": "Save with the Screen Cube 71 in or MAIZOA 75 in Box for a couple's corner."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Floor space for your table",
    "explanation": "A folding picnic table with four chairs needs about 8 by 8 feet, while a two-person bistro set fits in 5 by 5 feet. Measure your furniture and add a foot on each side for walking. Compare actual dimensions, not the 4 to 6 person label."
  },
  {
    "criterion": "Roof height",
    "explanation": "A 5.2 foot roof means crouching, while a 6.7 foot roof lets most adults stand near the center. Pole tents slope toward the edges, so usable height is less than the peak. Check the stated height and your own, because taller campers feel a low roof fast."
  },
  {
    "criterion": "Fabric on top",
    "explanation": "A thin mesh roof lets in rain, while a PU-coated polyester top blocks sun and light showers. A PU4000 rating shades you and sheds a drizzle but does not make the room a rain shelter. Look for the roof fabric in the product details, and plan to bring a tarp for heavy rain."
  },
  {
    "criterion": "Setup and weight",
    "explanation": "A screen house with crossing poles can take 10 to 15 minutes alone the first time, and less once you know the pattern. Lighter rooms carry easier, while heavier rooms hold up better in wind. Check the packed weight on the page, and practice at home before the trip."
  },
  {
    "criterion": "Wind and staking",
    "explanation": "Mesh rooms act like sails in gusts, so stake every corner and tie the guy lines as soon as the frame stands. On a deck or patio use sandbags or water jugs on each leg instead. Take the room down before a storm rolls in, because poles bend and mesh tears."
  }
];

export const faq = [
  {
    "q": "Does a screen house stop rain?",
    "a": "Not fully. The Abahub 9.8 ft Square has a PU4000 top that sheds light rain, but the mesh sides let wind-driven rain in. Add a tarp over the roof for storms, and keep gear inside dry on a cot or table."
  },
  {
    "q": "Can I pitch it on a deck or patio?",
    "a": "Yes, with sandbags or weights on the legs, since you cannot stake into wood or pavers. Use water jugs or sandbags to hold each corner, and check the wind forecast before you leave the room unattended."
  },
  {
    "q": "Is the Abahub bigger than the MAIZOA?",
    "a": "Yes, the Abahub 9.8 ft Square covers about 96 square feet, while the MAIZOA 8x7 Hexagon covers about 57. The MAIZOA weighs less and packs smaller, so choose by whether floor space or pack size matters more to you."
  },
  {
    "q": "How do I set up a pole screen house alone?",
    "a": "Lay out the poles, thread them through the sleeves and flex them into the corners one at a time. Stake the corners, then pull the guy lines tight. Practicing at home once cuts the time on the campsite in half."
  },
  {
    "q": "How do I care for mesh?",
    "a": "Rinse the mesh and fabric with fresh water after dusty or salty trips, then let everything dry completely before folding. Store the room loosely in its bag away from sharp objects, and patch small holes with mesh repair tape."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Screen Houses",
    "href": "/tents-shelter/best-screen-houses"
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
