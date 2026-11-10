export const guideSlug = "best-blackout-instant-tents";
export const guideTitle = "3 Best Blackout Instant Tents in 2026";
export const metaTitle = "Best Blackout Instant Tents in 2026";
export const metaDescription = "Best blackout instant tents compared on light-blocking fabric, setup time, floor size and rain rating for family sleep-in camping.";
export const mainKeyword = "best blackout instant tents";
export const introParagraphs = [
  "A blackout instant tent combines a pre-attached frame that pitches in about a minute with a dark fabric that keeps morning light from waking a family at 6 a.m. Three tents here pair the two ideas, from a 6-person model to a 14 by 10 ft 10-person.",
  "They were ranked on how clearly each listing states the blackout claim, the setup time, the floor size and the rain rating. Prices run from about 160 to 280 dollars, so the real choice is size."
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
    "id": "best-blackout-instant-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "EVER ADVANCED 10 Person Instant Camping Tent with Blackout Design",
    "price": "$280.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/517yaBmyvOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FX4L87XZ?tag=rvgearlab-amz-20",
    "description": "The EVER ADVANCED 10-person tent has a 14 by 10 ft floor with a 78 inch center, a pre-attached frame that sets up in 3 to 5 minutes and a light-blocking fabric made for late sleepers. A 4000mm water-resistant coating and fully taped seams back it for rain, with 2 doors and 5 zippered mesh windows.\n\nAgainst the 6-person tents it has the bigger floor. Compared with the TIMBER RIDGE it states 4000mm where that tent states 2000mm.\n\nIt suits large families who want to sleep in and need room for gear. An overhead net roof gives 360-degree airflow, and interior pockets hold small gear.",
    "specs": [
      "14 x 10 ft, 78 in center",
      "Blackout fabric, 3 to 5 minute pitch",
      "4000mm coating, taped seams"
    ],
    "pros": [
      "Largest floor of the three",
      "4000mm water-resistant coating",
      "Fully taped seams and a rainfly",
      "Five zippered mesh windows"
    ],
    "cons": [
      "Highest price of the three",
      "Setup is 3 to 5 minutes, not 1"
    ],
    "bestFor": "Large sleep-in families",
    "take": "The roomiest blackout tent with the strongest stated rain rating.",
    "catch": "The listing says blackout filters most light, not all of it."
  },
  {
    "id": "best-blackout-instant-tents-2",
    "rank": 2,
    "badge": "Best Fast Pitch",
    "name": "EVER ADVANCED 6 Person Camping Tent",
    "price": "$161.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410w6Eos1zL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CH81KHF8?tag=rvgearlab-amz-20",
    "description": "The EVER ADVANCED 6-person tent opens to a 9 by 9 ft floor with a 73 inch peak and folds to a bag about 47.6 inches long. The blackout fabric keeps out most temperature changes as well as light, and one person can set it up in 60 seconds.\n\nIt costs about 120 dollars less than the 10-person model and states a 60 second pitch. Against the TIMBER RIDGE it is about 2 dollars more and adds a skylight.\n\nPick it for a pair or a young family that wants a dark tent pitched in a minute. Three zippered mesh roll-up windows plus a net window overhead help airflow.",
    "specs": [
      "9 x 9 ft, 73 in, 60 second setup",
      "Blackout fabric, skylight",
      "Folds to a 47.6 inch bag"
    ],
    "pros": [
      "One-person 60 second setup",
      "Blackout fabric also cuts heat swings",
      "Skylight for daytime vision",
      "Power pass-through, storage bags"
    ],
    "cons": [
      "No water rating on the listing",
      "Six sleepers is a squeeze"
    ],
    "bestFor": "Small families wanting quick dark nights",
    "take": "A fast-pitching blackout tent with a power pass-through.",
    "catch": "It prints no waterproof number, so check the rating first."
  },
  {
    "id": "best-blackout-instant-tents-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "TIMBER RIDGE 6 Person Blackout Design Camping Tent",
    "price": "$159.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51795lU63xL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DL93R15F?tag=rvgearlab-amz-20",
    "description": "The TIMBER RIDGE is a 9 by 9 ft by 72 inch tent whose blackout design blocks over 90 percent of sunlight. It has a 2000mm water-resistant rating, fiberglass poles and a one-person 60 second setup with pre-attached poles.\n\nIts price is the lowest of the group, and it alone quantifies its blackout at over 90 percent. Compared with the 10-person EVER ADVANCED it has a smaller floor and a lower rain rating.\n\nIt suits budget buyers who want a measured light-block claim. The listing says it fits six sleeping bags and four people comfortably.",
    "specs": [
      "9 x 9 ft, blocks 90% of light",
      "2000mm rating, fiberglass poles",
      "60 second one-person setup"
    ],
    "pros": [
      "Blocks over 90 percent of sunlight",
      "2000mm water-resistant rating",
      "60 second pre-attached pole setup",
      "Bag is about 47.6 inches long"
    ],
    "cons": [
      "Honest comfort is four people",
      "Fiberglass poles, not aluminum"
    ],
    "bestFor": "Budget sleep-in camping",
    "take": "The only tent here with a quantified blackout figure, at the lowest price.",
    "catch": "The listing suggests four people for comfort, not six."
  }
];

export const howWeEvaluated = [
  {
    "title": "Blackout claim",
    "description": "Stated light-block figures and wording were compared across the three listings."
  },
  {
    "title": "Setup time",
    "description": "Stated pitch times from 60 seconds to 5 minutes were compared."
  },
  {
    "title": "Floor and headroom",
    "description": "Footprints from 9 by 9 to 14 by 10 ft and heights from 72 to 78 inches were compared."
  },
  {
    "title": "Water rating",
    "description": "2000mm and 4000mm ratings and taped seams were compared."
  },
  {
    "title": "Ventilation",
    "description": "Mesh windows, net roofs and skylights were compared for dark but breathable nights."
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
    "subheading": "By Family Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Large family, lots of gear",
          "EVER ADVANCED 10-Person Blackout Instant Tent",
          "14 x 10 ft floor."
        ],
        [
          "Couple or small family, fast pitch",
          "EVER ADVANCED 6-Person Blackout Cabin Tent",
          "60 second one-person setup."
        ],
        [
          "Budget, measured blackout",
          "TIMBER RIDGE 6-Person Blackout Instant Tent",
          "Blocks over 90 percent of sunlight."
        ],
        [
          "Heavy rain expected",
          "EVER ADVANCED 10-Person Blackout Instant Tent",
          "4000mm coating, taped seams."
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
          "$150 to $160",
          "TIMBER RIDGE 6-Person Blackout Instant Tent"
        ],
        [
          "$160 to $170",
          "EVER ADVANCED 6-Person Blackout Cabin Tent"
        ],
        [
          "$280 to $290",
          "EVER ADVANCED 10-Person Blackout Instant Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Quantified vs Descriptive Blackout",
    "cards": [
      {
        "label": "Quantified",
        "text": "TIMBER RIDGE 6-Person Blackout Instant Tent says it blocks over 90 percent of sunlight."
      },
      {
        "label": "Descriptive",
        "text": "EVER ADVANCED 10-Person Blackout Instant Tent and EVER ADVANCED 6-Person Blackout Cabin Tent describe light-blocking fabric without a percentage."
      }
    ],
    "note": "Choose TIMBER RIDGE 6-Person Blackout Instant Tent if you want a number."
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
          "Under 160 dollars",
          "TIMBER RIDGE 6-Person Blackout Instant Tent"
        ],
        [
          "Around 160 dollars",
          "EVER ADVANCED 6-Person Blackout Cabin Tent"
        ],
        [
          "Around 280 dollars",
          "EVER ADVANCED 10-Person Blackout Instant Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For Sleeping Past Sunrise Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "a stated light-block figure and a skylight you can close"
      },
      {
        "label": "In this comparison",
        "text": "TIMBER RIDGE 6-Person Blackout Instant Tent states over 90 percent, and EVER ADVANCED 6-Person Blackout Cabin Tent has a skylight."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on EVER ADVANCED 10-Person Blackout Instant Tent for the 14 x 10 ft floor and the 4000mm rating."
      },
      {
        "label": "Save if",
        "text": "Save with TIMBER RIDGE 6-Person Blackout Instant Tent, the cheapest here, if four people are enough."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "How blackout is stated",
    "explanation": "A blackout label ranges from a measured figure such as over 90 percent to a general phrase about filtering most light. A fabric that blocks light also helps keep a tent cooler by day. Look for a percentage, and expect a dim tent rather than total darkness."
  },
  {
    "criterion": "Ventilation in a dark tent",
    "explanation": "A dark tent is a closed tent, and without airflow condensation builds fast. Mesh windows and a net roof let you open it for air while the blackout layer stays on. Count windows and look for roof ventilation."
  },
  {
    "criterion": "Instant means pre-attached poles",
    "explanation": "An instant tent has poles already attached to the body so you lift and lock. 60 seconds is the claim for one person, and 3 to 5 minutes for a bigger tent. Compare stated times and the size."
  },
  {
    "criterion": "Water-resistant rating",
    "explanation": "A 2000mm rating handles light to moderate rain, and 4000mm handles heavier rain. Taped seams matter as much as the number. Check the mm figure and seam wording."
  },
  {
    "criterion": "Honest capacity",
    "explanation": "A tent for 6 usually fits 6 sleeping bags with no room for gear, and the listing may suggest four. Floor size is a better guide. Look for length and width, and plan on two-thirds of the stated number."
  }
];

export const faq = [
  {
    "q": "Does blackout make it totally dark?",
    "a": "No. Blackout fabric cuts most light, and the listing says it filters most. TIMBER RIDGE 6-Person Blackout Instant Tent states over 90 percent."
  },
  {
    "q": "What is the common blackout tent mistake?",
    "a": "Closing every vent. It traps heat and moisture. Keep a mesh window open."
  },
  {
    "q": "Is the 10-person worth it over a 6-person?",
    "a": "It costs about 120 dollars more and adds 14 by 10 ft, a 78 inch center and 4000mm. EVER ADVANCED 6-Person Blackout Cabin Tent pitches in 60 seconds. Pay for the 10-person for family gear."
  },
  {
    "q": "How do I set up an instant tent?",
    "a": "Unfold it, lift the center and extend the legs until the frame locks. Stake the corners and add the rainfly. Takes 1 to 5 minutes."
  },
  {
    "q": "How do I fold an instant tent?",
    "a": "Release the locks, collapse the frame and fold it into the bag. Dry the fabric first. Keep stakes in a pouch."
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
