export const guideSlug = "best-instant-tents";
export const guideTitle = "3 Best Instant Tents in 2026";
export const metaTitle = "Best Instant Tents in 2026";
export const metaDescription = "Best instant tents compared across a 4 person X-frame, a Coleman 4 to 10 person family and a 6/8 person cabin, for first-time and car campers.";
export const mainKeyword = "best instant tents";
export const introParagraphs = [
  "An instant tent trades poles for a frame that stays attached to the fabric, so pitching becomes one unfold and a few stakes. That convenience comes with bulk, and sizes run from a four-person to an eight-person tent.",
  "Three tents are covered here, chosen for different jobs: a tough four-person X-frame, an established-brand family tent and a tall cabin. The picks differ in size and packed bulk more than in how quickly they go up."
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
    "id": "best-instant-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "FanttikOutdoor Alpha C4 Ultra Camping Tent 4 Person Pop Up Instant Cabin Setup in 60 Seconds Portable Hub Tent",
    "price": "$186.19",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41qtFPpYBlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D2W12RYZ?tag=rvgearlab-amz-20",
    "description": "Fanttik's Alpha C4 Ultra is a 4 person tent measuring 94 by 94 inches, with a pop-up X-frame, a removable rain cover and a 300D bottom fabric. The packed length is 57.8 inches, which the listing says is 9.8 inches shorter than typical tents.\n\nIt has the sturdiest stated floor and the shortest listed pack here, and the Coleman Tent offers more size options. Sealed seams at doors and windows are named.\n\nIt suits campers who want a tough instant tent that goes up in about a minute. The boxy walls help with headroom.",
    "specs": [
      "94 x 94 in, X-frame",
      "300D bottom, sealed seams",
      "57.8 in packed length"
    ],
    "pros": [
      "300D bottom fabric is tougher than most",
      "Short 57.8 inch packed length",
      "Boxy walls for good headroom",
      "Removable rain cover"
    ],
    "cons": [
      "Only sleeps four",
      "Priciest of the three"
    ],
    "bestFor": "Tough car-camping trips for four",
    "take": "The sturdiest floor and compact pack in the group.",
    "catch": "At the top of the price range, and sized only for four."
  },
  {
    "id": "best-instant-tents-2",
    "rank": 2,
    "badge": "Best Trusted Brand",
    "name": "Coleman 4/6/8/10 Person Instant Camping Tent with 1-Minute Setup",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31NsFyuHaWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7QK1N81?tag=rvgearlab-amz-20",
    "description": "Coleman's family listing brings pre-attached poles, an integrated rainfly and Polyguard 2X double-thick fabric. It is an 8 by 7 ft design in the 4 person size, and setup runs from one to five minutes.\n\nColeman sells sizes from 4 to 10 person on one listing, a wider range than the PEAK Tent's 6 and 8. Its integrated rainfly also improves airflow.\n\nIt suits campers who want one brand across different group sizes. The double-thick fabric adds some reassurance.",
    "specs": [
      "8 x 7 ft, 4 person size",
      "Polyguard 2X fabric",
      "Integrated rainfly"
    ],
    "pros": [
      "Sizes from 4 to 10 person",
      "Double-thick Polyguard 2X fabric",
      "Integrated rainfly improves airflow",
      "Set up in as fast as a minute"
    ],
    "cons": [
      "Smaller floor than the Fanttik",
      "Check the size on the page"
    ],
    "bestFor": "Brand-focused campers",
    "take": "A familiar name with a size to match any group.",
    "catch": "The listing mixes setup times from one to five minutes."
  },
  {
    "id": "best-instant-tents-3",
    "rank": 3,
    "badge": "Best Cabin Headroom",
    "name": "PEAK OUTDOORS Instant Tent 6/8 Person Tents for Camping",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31eIxXXAsyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GS58XBC1?tag=rvgearlab-amz-20",
    "description": "The PEAK OUTDOORS 6/8 Person tent features a 74 inch center height in the 6 person size and galvanized metal poles. The 190T polyester has a PU 2000mm coating with waterproof tape on the rainfly seams.\n\nIt undercuts the Fanttik Tent and Coleman Tent on price and has a large mesh roof. The listing says the rainfly can come off for stargazing at night.\n\nIt suits campers who want a tall cabin and a stated waterproof rating at the lowest price here. The mesh roof makes it good for warm nights.",
    "specs": [
      "74 in center height",
      "190T PU 2000mm fabric",
      "Large mesh roof"
    ],
    "pros": [
      "Stated PU 2000mm waterproof rating",
      "Standing height inside",
      "Mesh roof for stargazing",
      "Lowest price of the three"
    ],
    "cons": [
      "Page covers two sizes",
      "Less sealed-seam detail on the base"
    ],
    "bestFor": "Budget cabin campers",
    "take": "A tall cabin with a stated waterproof rating at the lowest price.",
    "catch": "Choose carefully, since the page covers 6 and 8 person versions."
  }
];

export const howWeEvaluated = [
  {
    "title": "Size range",
    "description": "Which group sizes each listing covers."
  },
  {
    "title": "Floor quality",
    "description": "Floor fabric and sealed seams."
  },
  {
    "title": "Waterproofing",
    "description": "Waterproof ratings and rainfly design."
  },
  {
    "title": "Pack",
    "description": "Packed length where listed."
  },
  {
    "title": "Price",
    "description": "Cost per size."
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
    "subheading": "By Camper Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Rough campsites",
          "Fanttik Tent",
          "300D bottom fabric."
        ],
        [
          "Brand and size options",
          "Coleman Tent",
          "Sizes from 4 to 10 person."
        ],
        [
          "Tall cabin on a budget",
          "PEAK Tent",
          "74 in center height and PU 2000mm."
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
          "PEAK Tent"
        ],
        [
          "$140 to $150",
          "Coleman Tent"
        ],
        [
          "$180 to $190",
          "Fanttik Tent"
        ]
      ]
    }
  },
  {
    "subheading": "X-Frame vs Cabin Frame",
    "cards": [
      {
        "label": "X-frame",
        "text": "A pop-up X-frame gives boxy walls and a compact fold. The Fanttik Tent uses it."
      },
      {
        "label": "Cabin frame",
        "text": "Pre-attached poles with leg extension give a tall cabin. The PEAK Tent and Coleman Tent use it."
      }
    ],
    "note": "Pick the Fanttik Tent for durability, or the PEAK Tent for headroom."
  },
  {
    "subheading": "Group Size",
    "table": {
      "headers": [
        "Group",
        "Recommended pick"
      ],
      "rows": [
        [
          "Four people",
          "Fanttik Tent"
        ],
        [
          "Mixed sizes",
          "Coleman Tent"
        ],
        [
          "Six or eight people",
          "PEAK Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For First-Time Campers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A one-unfold pitch and a clear rainfly."
      },
      {
        "label": "In this comparison",
        "text": "The Coleman Tent has an integrated rainfly, and the Fanttik Tent has a 60 second setup claim."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Fanttik Tent for floor and pack."
      },
      {
        "label": "Save if",
        "text": "Save with the PEAK Tent if you want space and a rating."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Frame style",
    "explanation": "X-frames and attached poles unfold differently and pack to different shapes. An X-frame is square and boxy. Check the packed size."
  },
  {
    "criterion": "Floor fabric",
    "explanation": "A heavy 300D floor resists rocks and wear better than thinner fabric. Check the denier number. It matters on rough campsites."
  },
  {
    "criterion": "Waterproof number",
    "explanation": "A PU 2000mm number is a measurable rating. Combine it with taped seams. Look for both on the listing."
  },
  {
    "criterion": "Size variants",
    "explanation": "Brands such as Coleman sell several sizes on one page. Picking the wrong size changes floor space a lot. Confirm the dimensions after choosing."
  },
  {
    "criterion": "Packed length",
    "explanation": "A 57.8 inch pack suits many trunks, and the length matters more than the weight in a small car. Measure your space before ordering. Look for the packed size on the listing."
  }
];

export const faq = [
  {
    "q": "Are instant tents better than regular tents?",
    "a": "They pitch faster, though they are bulkier. For car camping that is a good trade. For hiking a poled tent is lighter."
  },
  {
    "q": "Do instant tents leak?",
    "a": "Seams are the weak point. Look for taped seams and a rainfly. The Fanttik Tent names sealed seams."
  },
  {
    "q": "Is a bigger instant tent worth it?",
    "a": "Extra size helps with gear but takes more floor space. The PEAK Tent gives a taller cabin. Match the size to your group."
  },
  {
    "q": "How do I pitch an instant tent?",
    "a": "Unfold the frame, extend the legs and add the rainfly. Stake the corners. It takes about a minute."
  },
  {
    "q": "How should I store it?",
    "a": "Dry it fully and fold it loosely. Keep the poles clean. Store it away from damp."
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
