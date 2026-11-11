export const guideSlug = "best-3-person-3-season-tents";
export const guideTitle = "3 Best 3 Person 3-Season Backpacking Tents in 2026";
export const metaTitle = "Best 3 Person 3-Season Backpacking Tents";
export const metaDescription = "Three-person tents for 3-season use, compared on stated season rating, floor size, packed weight and fly design for two or three adults.";
export const mainKeyword = "best 3 person 3 season tents";
export const introParagraphs = [
  "Only one listing here names 3-season use, and it says 3-4 season, which is the common wording for a mid-weight dome. The other two are 3-person tents that do not state a season, so the guide says so plainly.",
  "Three picks made the list, ranked on how clearly the season is stated, then on floor size, weight and weather build."
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
    "id": "best-3-person-3-season-tents-1",
    "rank": 1,
    "badge": "Best 3-4 Season Label",
    "name": "2-3 Person Tents for Camping 3-4 Season Windproof Camping Tent Family Tent Two Doors Double Layer with Aluminu",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31bzkIMViHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07CLMB4KC?tag=rvgearlab-amz-20",
    "description": "The Hillman is a two-door, double-layer tent titled for 2 to 3 person use in 3 to 4 seasons. It weighs 5.6 lbs, packs to 7 by 7 by 19.3 inches and is built on aluminum rods with double-stitched, taped seams.\n\nIt is the only pick that names 3-season in the title, and it is the lightest of the three. The Camppal offers a stronger fly rating, while the CAMPROS is cheaper.\n\nIt suits groups of two or three on spring through fall trips. Large mesh sections ventilate the body, and one person can pitch it in under ten minutes.",
    "specs": [
      "3-4 season, 2-3 person",
      "5.6 lbs, aluminum rods",
      "Two doors, double layer"
    ],
    "pros": [
      "States 3 to 4 season use",
      "Light at 5.6 lbs",
      "Two doors for easy access",
      "Large mesh sections for summer"
    ],
    "cons": [
      "Floor is compact for three adults",
      "No waterproof number in the listing"
    ],
    "bestFor": "Spring to fall hikers",
    "take": "The one listing that names a 3 to 4 season rating, at a light 5.6 lbs.",
    "catch": "The floor is snug for three adults with gear."
  },
  {
    "id": "best-3-person-3-season-tents-2",
    "rank": 2,
    "badge": "Best Weather Numbers",
    "name": "Camppal 2-3 Person Backpacking Tent",
    "price": "$93.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Fak4gDUJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B078Y9SCDJ?tag=rvgearlab-amz-20",
    "description": "The Camppal is a two to three person tent with a PU 3500mm fly and a 300D bathtub floor rated 4000mm. The inner measures 6.89 by 5.91 by 4.27 feet, and the aluminum poles cross in a two-pole frame.\n\nIt has the strongest water ratings of the three, and the listing calls it a 4-season tent. The Hillman is lighter, while the CAMPROS is cheaper.\n\nIt suits groups that expect rain and want aluminum poles. Two crossing poles let one person set it up.",
    "specs": [
      "PU 3500mm fly, 4000mm floor",
      "6.89x5.91x4.27 ft inner",
      "Aluminum two-pole frame"
    ],
    "pros": [
      "Strong waterproof ratings",
      "Aluminum poles with ripstop fabric",
      "Simple two-pole setup",
      "Room to sit up at 4.27 ft"
    ],
    "cons": [
      "Labeled 4-season, not 3-season",
      "Costs more than the CAMPROS"
    ],
    "bestFor": "Rainy trips",
    "take": "The strongest rain numbers, with a 4-season label.",
    "catch": "It is heavier than a pure summer tent."
  },
  {
    "id": "best-3-person-3-season-tents-3",
    "rank": 3,
    "badge": "Best Budget Dome",
    "name": "CAMPROS CP 3 Person Tent",
    "price": "$47.47",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31-qntNOuuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G2BZB5ZK?tag=rvgearlab-amz-20",
    "description": "The CAMPROS is a three-person dome with a 7 by 7 foot floor and a 47 inch center height that fits one queen mattress. It has a rainfly, sealed seams and a waterproof strip, with mesh on the top and doors.\n\nIt has the largest floor of the three and the lowest price, while it does not state a season. The Hillman is lighter, and the Camppal beats it for water numbers.\n\nIt suits three people on a car-camping trip who want a roomy dome. Two people can set it up in five minutes.",
    "specs": [
      "7x7 ft, 47 in center",
      "Fits one queen mattress",
      "Rainfly with sealed seams"
    ],
    "pros": [
      "Biggest floor of the three",
      "Lowest price",
      "Mesh top and doors for air",
      "Set up in five minutes"
    ],
    "cons": [
      "No season rating is stated",
      "Weight is not listed"
    ],
    "bestFor": "Car-camping groups of three",
    "take": "A roomy low-cost dome whose listing does not state a season.",
    "catch": "With no season label, treat it as a fair-weather tent."
  }
];

export const howWeEvaluated = [
  {
    "title": "Season wording",
    "description": "How the listing states 3-season."
  },
  {
    "title": "Floor size",
    "description": "Length and width."
  },
  {
    "title": "Weight",
    "description": "Pounds or pack size."
  },
  {
    "title": "Water ratings",
    "description": "mm figures."
  },
  {
    "title": "Frame",
    "description": "Aluminum or fiberglass."
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
    "subheading": "By Trip Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Spring to fall hikes",
          "Hillman 2-3 Person Tent",
          "Names 3 to 4 season."
        ],
        [
          "Wet weather",
          "Camppal 2-3 Person Tent",
          "Highest water ratings."
        ],
        [
          "Car camping with space",
          "CAMPROS CP 3 Person Dome",
          "7x7 ft floor."
        ],
        [
          "Light carry",
          "Hillman 2-3 Person Tent",
          "5.6 lbs."
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
          "$40 to $50",
          "CAMPROS CP 3 Person Dome"
        ],
        [
          "$80 to $90",
          "Hillman 2-3 Person Tent"
        ],
        [
          "$90 to $100",
          "Camppal 2-3 Person Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Labeled vs Unlabeled",
    "cards": [
      {
        "label": "Labeled",
        "text": "A stated season gives a clear expectation. The Hillman 2-3 Person Tent and Camppal 2-3 Person Tent are labeled."
      },
      {
        "label": "Unlabeled",
        "text": "No season means fair-weather use. The CAMPROS CP 3 Person Dome does not state one."
      }
    ],
    "note": "Take the Hillman 2-3 Person Tent if you want a clear 3 to 4 season claim."
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
          "Under $50",
          "CAMPROS CP 3 Person Dome"
        ],
        [
          "About $90",
          "Hillman 2-3 Person Tent"
        ],
        [
          "About $95",
          "Camppal 2-3 Person Tent"
        ],
        [
          "Weather first",
          "Camppal 2-3 Person Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For Hikers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated season, aluminum poles and a weight under six pounds."
      },
      {
        "label": "In this comparison",
        "text": "The Hillman 2-3 Person Tent lists 5.6 lbs and aluminum rods."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Camppal 2-3 Person Tent if you will see rain. Its water ratings are the strongest."
      },
      {
        "label": "Save if",
        "text": "Save with the CAMPROS CP 3 Person Dome for dry car camping. It has the biggest floor."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Read the season wording",
    "explanation": "3-season means spring, summer and fall, with enough ventilation for warm nights. A 4-season label adds stronger poles and less mesh. Look for the season in the title."
  },
  {
    "criterion": "Judge floor space",
    "explanation": "A 3-person tent works best for two plus gear. Check the floor width against three pads. A 7 by 7 foot floor holds three squeezed."
  },
  {
    "criterion": "Compare water ratings",
    "explanation": "PU 3500mm on the fly is stronger than PU 2000mm. The floor should rate higher than the fly. Read both."
  },
  {
    "criterion": "Weigh the pack",
    "explanation": "A 5.6 lb tent is easy to carry. Heavier domes suit car camping. Look for weight."
  },
  {
    "criterion": "Check the frame",
    "explanation": "Aluminum poles resist wind and weigh less. Fiberglass costs less and breaks under strain. Read the pole material."
  }
];

export const faq = [
  {
    "q": "Are all three really 3-season tents?",
    "a": "Only the Hillman says 3 to 4 season. The Camppal says 4-season, and the CAMPROS gives no season. Treat the last as fair weather."
  },
  {
    "q": "What is the common mistake?",
    "a": "Assuming three adults fit comfortably. Plan for two plus gear. Check the floor."
  },
  {
    "q": "Is a 4-season tent okay for 3-season use?",
    "a": "Yes, but expect less ventilation. The Camppal covers both. It may feel warm in summer."
  },
  {
    "q": "How do I pitch a two-pole tent?",
    "a": "Lay the body, cross the poles and clip the fly. Stake the corners. One person can do it."
  },
  {
    "q": "How do I keep it dry?",
    "a": "Seal the seams if needed, use a footprint and dry the fabric. Store loosely. Avoid damp bags."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
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
  },
  {
    "title": "Best 4 Season Tent Under 200",
    "href": "/tents-shelter/best-4-season-tent-under-200"
  }
];
