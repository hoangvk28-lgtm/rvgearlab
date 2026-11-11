export const guideSlug = "best-canvas-tents-for-glamping";
export const guideTitle = "3 Best Canvas Tents For Glamping in 2026";
export const metaTitle = "Best Canvas Tents For Glamping in 2026";
export const metaDescription = "Best canvas tents for glamping compared on bell tent size, stove jack, groundsheet and finish for comfortable basecamp stays.";
export const mainKeyword = "best canvas tents for glamping";
export const introParagraphs = [
  "Glamping canvas tents are about living space: a tall center pole, a sewn-in groundsheet and room for a real bed. All three picks here are bell or yurt-style tents with a stove jack, sold for glamping stays rather than quick overnights.",
  "They were ranked on stated diameter and height, groundsheet design, ventilation and the finish named on the listing. Prices run from about 300 to 650 dollars, which is the real range for a cotton bell tent."
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
    "id": "best-canvas-tents-for-glamping-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "WHITEDUCK Regatta Canvas Bell Tent w/Stove Jack",
    "price": "$653.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41cE0xEHinL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07MZQ7BH2?tag=rvgearlab-amz-20",
    "description": "The WHITEDUCK Regatta is made from breathable performance canvas with a PFC-free water-resistant finish. It includes a sewn-in groundsheet, a fire-retardant stove jack, mesh windows, roof vents, poles and a tool kit.\n\nAgainst the VANFOND it has taller standard walls at 2 ft 7 in, higher than average for bell tents. Compared with the ShinHye it adds two-layer doors and windows plus an electrical cable outlet.\n\nIt suits glamping couples and families who plan to stay in a heated, powered tent for several nights. The listing calls it four-season.",
    "specs": [
      "Wall height 2 ft 7 in",
      "Sewn-in groundsheet, stove jack",
      "Electrical cable outlet"
    ],
    "pros": [
      "Walls taller than typical bell tents",
      "Two-layer doors and windows",
      "Cable outlet for charging",
      "Everything included, tool kit too"
    ],
    "cons": [
      "Priciest of the three",
      "No waterproof rating in mm"
    ],
    "bestFor": "Powered, heated glamping stays",
    "take": "The most complete bell tent here, with taller walls and a cable port.",
    "catch": "At the highest price here, it costs about 144 dollars more than the VANFOND."
  },
  {
    "id": "best-canvas-tents-for-glamping-2",
    "rank": 2,
    "badge": "Best Queen-Bed Space",
    "name": "VANFOND Canvas Bell Tent",
    "price": "$509.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/319uuK7PBmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRVVZQML?tag=rvgearlab-amz-20",
    "description": "The VANFOND measures 16.4 ft across with a 9.9 ft top height and a 5.6 ft door. The listing says it fits a queen bed plus two blow-up mattresses, and it includes a sewn-in PVC groundsheet and a 5 inch stove jack.\n\nAgainst the WHITEDUCK it has the larger stated footprint and costs less. Compared with the ShinHye it has a detachable groundsheet and roll-up walls for 360-degree airflow.\n\nIt suits families who want a bed in a canvas tent and open sides in summer. The listing quotes about 25 minutes to pitch.",
    "specs": [
      "16.4 ft diameter, 9.9 ft top",
      "Fits queen bed and two mattresses",
      "Detachable groundsheet"
    ],
    "pros": [
      "Spacious 5 m footprint",
      "Roll-up walls for summer airflow",
      "Detachable groundsheet",
      "About 25 minutes to pitch"
    ],
    "cons": [
      "Short 23.6 inch side wall",
      "No waterproof rating stated"
    ],
    "bestFor": "Queen bed and extra mattresses",
    "take": "A big, mid-priced bell tent that holds a real bed plus extras.",
    "catch": "Low side walls limit usable floor near the edges."
  },
  {
    "id": "best-canvas-tents-for-glamping-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "ShinHye Canvas Bell Tent Yurt Tent 4 Seasons for Camping 100% Cotton Glamping Tents with Stove Jack",
    "price": "$299.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Tm2t--HKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DT9TVL9B?tag=rvgearlab-amz-20",
    "description": "The ShinHye is 100 percent cotton with a PU 5000mm waterproof rating and a PE floor against ground moisture. It is sold in four sizes, and the 3 m version has a 9.85 ft diameter and a 7.22 ft top height.\n\nIt costs about 210 dollars less than the VANFOND and has the only waterproof number printed of the three. Compared with the WHITEDUCK it costs about 350 dollars less and still includes a stove jack, mesh windows and roof vents.\n\nIt suits glamping beginners who want a cotton bell tent without paying 500 dollars or more. Pitching is a lay-flat, peg and center pole job.",
    "specs": [
      "100% cotton, PU 5000mm",
      "3 m size: 9.85 ft wide",
      "Stove jack and sewn-in floor"
    ],
    "pros": [
      "Lowest price of the three",
      "PU 5000mm waterproof rating stated",
      "Four sizes to choose from",
      "Stove jack and roof vents included"
    ],
    "cons": [
      "3 m size has only 1.9 ft side walls",
      "Entry 3 m size is compact"
    ],
    "bestFor": "First glamping tent on a budget",
    "take": "The cheapest cotton bell tent here, with a clearly stated 5000mm rating.",
    "catch": "Four sizes are listed, so check which diameter you select."
  }
];

export const howWeEvaluated = [
  {
    "title": "Footprint and height",
    "description": "Stated diameters, top heights and side walls were compared across bell sizes."
  },
  {
    "title": "Stove jack and heat",
    "description": "Stove jack presence and opening size were compared for cold-weather glamping."
  },
  {
    "title": "Groundsheet",
    "description": "Sewn-in or detachable groundsheets and their materials were compared."
  },
  {
    "title": "Fabric and finish",
    "description": "Cotton, performance canvas and PU ratings were compared."
  },
  {
    "title": "Airflow",
    "description": "Windows, roof vents and roll-up walls were compared for summer comfort."
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
    "subheading": "By Glamping Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Powered, heated stays",
          "WHITEDUCK Regatta Bell Tent",
          "Stove jack and electrical cable outlet."
        ],
        [
          "Queen bed plus extras",
          "VANFOND 5M Bell Tent",
          "16.4 ft diameter, queen bed fit."
        ],
        [
          "First cotton bell on a budget",
          "ShinHye Cotton Bell Tent",
          "Cotton with PU 5000mm, lowest price."
        ],
        [
          "Taller walls",
          "WHITEDUCK Regatta Bell Tent",
          "2 ft 7 in standard wall."
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
          "$290 to $300",
          "ShinHye Cotton Bell Tent"
        ],
        [
          "$500 to $510",
          "VANFOND 5M Bell Tent"
        ],
        [
          "$650 to $660",
          "WHITEDUCK Regatta Bell Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Fixed Floor vs Detachable Floor",
    "cards": [
      {
        "label": "Sewn-in",
        "text": "WHITEDUCK Regatta Bell Tent and ShinHye Cotton Bell Tent keep bugs and drafts out at the base."
      },
      {
        "label": "Detachable",
        "text": "VANFOND 5M Bell Tent has a detachable groundsheet and roll-up walls for summer airflow."
      }
    ],
    "note": "Choose VANFOND 5M Bell Tent if you camp in warm weather, and a sewn-in floor otherwise."
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
          "Under 300 dollars",
          "ShinHye Cotton Bell Tent"
        ],
        [
          "Around 500 dollars",
          "VANFOND 5M Bell Tent"
        ],
        [
          "Around 650 dollars",
          "WHITEDUCK Regatta Bell Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For Couples With a Queen Bed Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "a diameter near 16 ft and a stated bed fit"
      },
      {
        "label": "In this comparison",
        "text": "VANFOND 5M Bell Tent states a queen bed plus two mattresses at 16.4 ft."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on WHITEDUCK Regatta Bell Tent for taller walls, a cable outlet and complete kit, or VANFOND 5M Bell Tent for space."
      },
      {
        "label": "Save if",
        "text": "Save with ShinHye Cotton Bell Tent if it is your first glamping tent and a smaller footprint suits you."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Diameter and center height",
    "explanation": "A bell tent's floor space comes from its diameter, and a 16 ft one sleeps far more than a 10 ft one. The center pole sets headroom, but the side wall sets usable edge space. Look for both numbers and sketch your bed against them."
  },
  {
    "criterion": "Stove jack",
    "explanation": "A stove jack is a fire-retardant port in the wall that lets a wood stove pipe exit safely. It extends a bell tent into cold nights, but the stove itself is sold separately. Look for the jack size, such as 5 inches, and check it fits your chimney."
  },
  {
    "criterion": "Sewn-in groundsheet",
    "explanation": "A sewn-in floor keeps bugs and moisture out and stops drafts at the base. A detachable floor adds flexibility in summer. Check whether the floor is PVC or PE and how thick it is."
  },
  {
    "criterion": "Cotton vs performance canvas",
    "explanation": "Cotton canvas breathes better than polyester and keeps the interior cooler, but it needs seasoning and drying. A PU or performance coating adds water resistance. Look for the finish and any mm rating."
  },
  {
    "criterion": "Ventilation for living space",
    "explanation": "A tent you live in for days needs roof vents and mesh windows so condensation does not build up. Roll-up walls help in summer. Count the vents and check the windows have mesh."
  },
  {
    "criterion": "Setup time and weight",
    "explanation": "A 16 ft bell tent takes more than one person and about 25 minutes by the listing's account. Canvas is heavy, so plan for vehicle transport. Check the packed weight before you commit."
  }
];

export const faq = [
  {
    "q": "Do bell tents need a stove?",
    "a": "No, a stove is optional. The jack lets you add one later. All three picks include a stove jack."
  },
  {
    "q": "What is the common glamping tent mistake?",
    "a": "Buying a size by person count. Measure the bed and check the diameter. VANFOND 5M Bell Tent lists a queen bed fit."
  },
  {
    "q": "Is the WHITEDUCK worth it over the ShinHye?",
    "a": "It costs about 350 dollars more and adds taller walls, a cable outlet and two-layer doors. ShinHye Cotton Bell Tent has a stated PU 5000mm rating and the smaller footprint. Pay for the WHITEDUCK for multi-night stays."
  },
  {
    "q": "How do I pitch a bell tent?",
    "a": "Lay it flat, peg the walls and raise the center pole. Then adjust the guy ropes evenly. Two people make it easier."
  },
  {
    "q": "How do I care for a canvas tent?",
    "a": "Dry it fully before packing to avoid mildew. Brush off dirt rather than scrubbing. Keep it out of long rain exposure until the canvas has swelled."
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
