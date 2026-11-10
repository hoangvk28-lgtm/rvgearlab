export const guideSlug = "best-12-person-pop-up-tents";
export const guideTitle = "3 Best 12 Person Pop Up Tents in 2026";
export const metaTitle = "Best 12 Person Pop Up Tents in 2026";
export const metaDescription = "Best 12-person pop-up tents compared on setup time, floor size, room dividers and weather build, for large groups who want an instant cabin.";
export const mainKeyword = "best 12 person pop up tents";
export const introParagraphs = [
  "Twelve-person instant cabins are a small field, and only three listings state the capacity outright. All three share an 18 by 10 foot footprint, so the choice comes down to price, dividers and the weather numbers.",
  "The three picks are ordered by value first and features second. Each was read for setup time, fabric rating and how the interior is divided."
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
    "id": "best-12-person-pop-up-tents-1",
    "rank": 1,
    "badge": "Best Value Instant Cabin",
    "name": "FanttikOutdoor Zeta C12 Pro Max Instant Cabin Tent 12 Person Camping Tent Setup in 90 Seconds with Rainfly & W",
    "price": "$319.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JT64z+27L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DHXD4C7K?tag=rvgearlab-20",
    "description": "The Fanttik Zeta C12 Pro Max is an instant cabin tent measuring 216 by 120 inches, large enough for 12 people by industry standards. It fits three queen air mattresses, sets up in about 90 seconds with two people, and has a removable canopy, window mesh on four sides, vents at the floor and a mesh ceiling.\n\nIt costs about a fifth less than the CORE 12 instant cabin and far less than the CORE 3-room. The CORE models add room dividers and guylines, which this one does not list.\n\nIt suits large families who want a quick pitch at a lower price. Pre-installed poles and body let two people extend and anchor it.",
    "specs": [
      "216x120 in, 12-person size",
      "Setup in about 90 seconds",
      "Mesh on four sides plus ceiling"
    ],
    "pros": [
      "Lowest price of the three",
      "Two people set it up fast",
      "Floor vents and ceiling mesh",
      "Removable canopy"
    ],
    "cons": [
      "No room dividers listed",
      "Fits three queens, not four"
    ],
    "bestFor": "Value-focused big groups",
    "take": "A big instant cabin at the lowest price of the three.",
    "catch": "Dividers and guylines are not listed."
  },
  {
    "id": "best-12-person-pop-up-tents-2",
    "rank": 2,
    "badge": "Best Rooms and Weather",
    "name": "CORE 12 Person Instant Cabin Tent with 2 Minute Setup",
    "price": "$399.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41K7jXz6G1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07DRQH7RQ?tag=rvgearlab-20",
    "description": "The CORE 12-Person Instant Cabin has an 18 by 10 foot footprint, an 80 inch peak and room for four queen air beds. Poles come pre-attached and lock in about two minutes, and the 1200mm H20 Block fabric pairs with a taped rainfly, sealed seams, guylines and steel stakes.\n\nIt holds one more queen bed than the Fanttik and adds two room dividers for up to three spaces. The CORE 3-room costs roughly 45 percent more.\n\nIt suits groups who want privacy zones and stronger weather listing. The listing says it fits six comfortably with gear.",
    "specs": [
      "18x10 ft, 80 in center",
      "H20 Block 1200mm fabric",
      "Two dividers, up to three rooms"
    ],
    "pros": [
      "Four queen air beds",
      "Two dividers for up to three rooms",
      "Fully taped rainfly",
      "Guylines and steel stakes included"
    ],
    "cons": [
      "Costs more than the Fanttik",
      "Twelve is a max, six comfortable"
    ],
    "bestFor": "Groups wanting separate rooms",
    "take": "The middle option with dividers, taped fly and guylines.",
    "catch": "The comfortable number is closer to six."
  },
  {
    "id": "best-12-person-pop-up-tents-3",
    "rank": 3,
    "badge": "Best Gear Storage",
    "name": "CORE 12 Person Instant Cabin Tent",
    "price": "$579.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31gBvVhXzvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G54DFXY3?tag=rvgearlab-20",
    "description": "The CORE 3-Room Instant Cabin covers an 18 by 10 foot footprint with three queen air beds inside. Its H20 Block fabric is rated 1200mm, and the full rainfly forms a vestibule for gear storage outside the sleeping space.\n\nIt has the same footprint as the other CORE model with a vestibule from the full fly, and it costs the most of the three. The Fanttik gives similar space for far less.\n\nIt suits groups with a lot of luggage who want it out of the sleeping area. Pre-attached poles set it up in two minutes or less.",
    "specs": [
      "18x10 ft, three-room layout",
      "Full fly with gear vestibule",
      "H20 Block 1200mm fabric"
    ],
    "pros": [
      "Vestibule keeps gear dry",
      "Three-room layout",
      "Two-minute setup",
      "Sealed and taped weather build"
    ],
    "cons": [
      "Highest price of the three",
      "Fits three queens, one fewer"
    ],
    "bestFor": "Gear-heavy groups",
    "take": "A vestibule and three rooms for groups with lots of gear.",
    "catch": "It costs far more than the Fanttik for the same footprint."
  }
];

export const howWeEvaluated = [
  {
    "title": "Setup time",
    "description": "Seconds or minutes."
  },
  {
    "title": "Floor size",
    "description": "Length and width."
  },
  {
    "title": "Dividers",
    "description": "Rooms and privacy."
  },
  {
    "title": "Weather build",
    "description": "Fly, seams and mm."
  },
  {
    "title": "Stakes and guylines",
    "description": "Included anchors."
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
    "subheading": "By Group Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Low price",
          "Fanttik Zeta C12 Pro Max",
          "Lowest of the three."
        ],
        [
          "Private rooms",
          "CORE 12-Person Instant Cabin",
          "Two dividers."
        ],
        [
          "Gear storage",
          "CORE 12-Person 3-Room Instant Cabin",
          "Full fly vestibule."
        ],
        [
          "Fast pitch",
          "Fanttik Zeta C12 Pro Max",
          "About 90 seconds."
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
          "$310 to $320",
          "Fanttik Zeta C12 Pro Max"
        ],
        [
          "$390 to $400",
          "CORE 12-Person Instant Cabin"
        ],
        [
          "$570 to $580",
          "CORE 12-Person 3-Room Instant Cabin"
        ]
      ]
    }
  },
  {
    "subheading": "Value vs Features",
    "cards": [
      {
        "label": "Value",
        "text": "Lower price and fewer extras. The Fanttik Zeta C12 Pro Max is the example."
      },
      {
        "label": "Features",
        "text": "Dividers, vestibule and guylines. The CORE 12-Person Instant Cabin and CORE 12-Person 3-Room Instant Cabin have them."
      }
    ],
    "note": "Most groups should take the CORE 12-Person Instant Cabin."
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
          "About $320",
          "Fanttik Zeta C12 Pro Max"
        ],
        [
          "About $400",
          "CORE 12-Person Instant Cabin"
        ],
        [
          "About $580",
          "CORE 12-Person 3-Room Instant Cabin"
        ],
        [
          "Under $400",
          "Fanttik Zeta C12 Pro Max"
        ]
      ]
    }
  },
  {
    "subheading": "For Large Families Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A footprint near 18 by 10 feet, dividers and 1200mm fabric."
      },
      {
        "label": "In this comparison",
        "text": "The CORE 12-Person Instant Cabin has two dividers and 1200mm fabric."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the CORE 12-Person Instant Cabin if you want dividers and guylines. The CORE 12-Person 3-Room Instant Cabin adds a vestibule."
      },
      {
        "label": "Save if",
        "text": "Save with the Fanttik Zeta C12 Pro Max for the lowest price. It sets up in about 90 seconds."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Check the capacity claim",
    "explanation": "Twelve means a maximum row of bags, not a comfortable family. Compare the floor with the queen air beds the listing names. Plan for six to eight."
  },
  {
    "criterion": "Compare dividers",
    "explanation": "Dividers create private rooms for kids and adults. A tent without them is one big space. Check the listing."
  },
  {
    "criterion": "Look at weather details",
    "explanation": "1200mm fabric and taped seams handle rain. A fly vestibule keeps gear dry. Read the build."
  },
  {
    "criterion": "Think about wind",
    "explanation": "Instant cabins are tall and catch wind. Guylines and steel stakes matter. Look for included anchors."
  },
  {
    "criterion": "Weigh the setup",
    "explanation": "Two people pitch in about two minutes. A solo pitch is harder. Check the setup notes."
  }
];

export const faq = [
  {
    "q": "Do 12-person pop-up tents sleep twelve?",
    "a": "Only in a tight row. The listings suggest about six comfortable. Plan accordingly."
  },
  {
    "q": "What is the common mistake?",
    "a": "Ignoring wind. Instant cabins are tall. Use all the guylines."
  },
  {
    "q": "Is the 3-room worth the price?",
    "a": "Only if you want the vestibule. The cheaper CORE has dividers too."
  },
  {
    "q": "How do I pitch one?",
    "a": "Two people extend the frame, lock the legs and stake the corners. Add the fly last. About two minutes."
  },
  {
    "q": "How do I dry it?",
    "a": "Open all doors, air in the sun and wipe the floor. Pack dry. Store loosely."
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
