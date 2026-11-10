export const guideSlug = "best-family-canvas-tents";
export const guideTitle = "4 Best Family Canvas Tents in 2026";
export const metaTitle = "Best Family Canvas Tents in 2026";
export const metaDescription = "Best family canvas tents compared on stated capacity, floor size, frame type and stove readiness for car camping with kids and gear.";
export const mainKeyword = "best family canvas tents";
export const introParagraphs = [
  "A family canvas tent trades packability for room, headroom and a heavier fabric that handles heat and wind. These four range from a compact 10 ft bell for 3 to 4 people to a 12 by 12 ft cabin lodge for up to 8.",
  "They were compared on stated sleeping capacity, floor shape, frame material and stove readiness. Prices run from about 140 to 1,000 dollars, so budget decides more than anything else."
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
    "id": "best-family-canvas-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Kodiak Canvas 12x12 Cabin Lodge Tent SR",
    "price": "$999.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31iCmC9bdAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G56CBJHF?tag=rvgearlab-amz-20",
    "description": "The Kodiak Canvas Cabin Lodge has a 12 by 12 ft footprint, vertical walls and a 7.5 ft peak. It uses Hydra-Shield 100 percent cotton duck canvas, a 13.5 oz vinyl sewn-in floor with welded seams and a galvanized 1 inch steel tube frame.\n\nAgainst the WaldZimmer it states a sleeping count of 8, or 4 when using a stove, and carries six windows and two vents. Compared with the bell tents it has vertical walls for standing anywhere inside.\n\nIt suits families who want a durable cabin with stove readiness for cold shoulder seasons. A 5 inch stove jack is built in, with the stove sold separately.",
    "specs": [
      "12 x 12 ft, 7.5 ft peak",
      "Hydra-Shield cotton duck",
      "5 in stove jack, steel frame"
    ],
    "pros": [
      "Vertical walls give stand-anywhere room",
      "Welded-seam vinyl floor",
      "Six windows and two rain-proof vents",
      "Galvanized steel frame and stainless loops"
    ],
    "cons": [
      "Highest price of the four",
      "Stove cuts capacity from 8 to 4"
    ],
    "bestFor": "Durable cabin for cold seasons",
    "take": "The sturdiest family canvas tent here, with a steel frame and stove jack.",
    "catch": "Capacity drops to 4 people when a stove is in use."
  },
  {
    "id": "best-family-canvas-tents-2",
    "rank": 2,
    "badge": "Best Wall-Tent Value",
    "name": "WaldZimmer Cotton Canvas Wall Tent w/Steel Frame PVC Floor Rainfly",
    "price": "$699.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41SxFCObM5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G4C313P6?tag=rvgearlab-amz-20",
    "description": "The WaldZimmer is a polycotton canvas wall tent with a steel frame, a PVC floor and a separate rainfly. The listing says it fits 6 to 8 people and describes four steel wires, double-layer doors and rainproof eaves.\n\nIt costs about 300 dollars less than the Kodiak and ships with 33 pegs and 21 wind ropes. Compared with the Dream House it is a wall tent with straight sides instead of a bell.\n\nIt suits families who want a wall-tent shape at a lower price. The listing calls it four-season, with canvas insulating against temperature swings.",
    "specs": [
      "Steel frame, PVC floor",
      "6 to 8 people",
      "33 pegs, 21 wind ropes"
    ],
    "pros": [
      "Steel frame with four stabilizing wires",
      "Rainproof eaves plus extra rainfly",
      "Double-layer door and windows",
      "Large peg and rope count"
    ],
    "cons": [
      "No floor size on the listing",
      "Not for long overnight rain"
    ],
    "bestFor": "Wall tent shape on less money",
    "take": "A wall tent with a steel frame and big capacity at a mid price.",
    "catch": "The listing warns not to leave it in rain overnight or for long."
  },
  {
    "id": "best-family-canvas-tents-3",
    "rank": 3,
    "badge": "Best Big Bell Tent",
    "name": "Dream House Outdoor Waterproof Cotton Canvas Family Camping Bell Tent",
    "price": "$559.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51bcdTkRjDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B088FJKCQH?tag=rvgearlab-amz-20",
    "description": "The Dream House bell tent has a 285 gsm cotton canvas cover with PU coating rated 3000mm and sealed seams. The floor is 540 gsm PVC and zips off, and four roof vents ventilate it.\n\nAgainst the SPECRAFT it offers a 6 m diameter option and a stated 285 gsm fabric. Compared with the Kodiak it uses a single center pole, so the floor stays open while the walls slope.\n\nIt suits large families who want a spacious circular living area. Toggles and loops let you roll up the side walls.",
    "specs": [
      "285gsm cotton, PU 3000mm",
      "540gsm detachable PVC floor",
      "Four roof vents"
    ],
    "pros": [
      "Sizes from 3 m up to 6 m",
      "Zip-off heavy PVC floor",
      "Roll-up side walls with toggles",
      "Sealed seams, PU 3000mm"
    ],
    "cons": [
      "Door zipper is not watertight",
      "Listing spans several sizes"
    ],
    "bestFor": "Large circular family space",
    "take": "A spacious bell tent in a heavy cotton with a clear waterproof number.",
    "catch": "The listing says the zipper is not watertight, so use the cap on the door pole."
  },
  {
    "id": "best-family-canvas-tents-4",
    "rank": 4,
    "badge": "Best Budget",
    "name": "SPECRAFT 10 FT Canvas Yurt Bell Tent for 3-4 Person",
    "price": "$142.02",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/516ZWePCOjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H3TR5QBW?tag=rvgearlab-amz-20",
    "description": "The SPECRAFT is a 10 ft bell with a 9.8 ft diameter and 6.6 ft height, sold for 3 to 4 people. It uses mixed TC cotton, aluminum poles, double doors and a full mesh base.\n\nIt costs about a seventh of what the Kodiak does. Compared with the Dream House it has a stated 6.6 ft height and aluminum poles.\n\nIt suits small families trying canvas for the first time. Two-layer doors can be rolled up to boost airflow.",
    "specs": [
      "9.8 ft wide, 6.6 ft tall",
      "Mixed TC cotton, aluminum poles",
      "3 to 4 people"
    ],
    "pros": [
      "Lowest price of the four",
      "Aluminum poles for stability",
      "Double doors, mesh and fabric",
      "Carry bag and steel stakes included"
    ],
    "cons": [
      "Only sleeps 3 to 4",
      "No stove jack mentioned"
    ],
    "bestFor": "Small families on a budget",
    "take": "The cheapest way into a family canvas bell tent.",
    "catch": "Sized for 3 to 4 people, so larger groups need a bigger tent."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated capacity",
    "description": "Sleeping counts from 3 to 8 were compared, including the stove cut on the Kodiak."
  },
  {
    "title": "Floor and headroom",
    "description": "Footprints from 9.8 to 12 ft and peaks from 6.6 to 7.5 ft were compared."
  },
  {
    "title": "Frame and build",
    "description": "Steel frames, aluminum poles and center pole designs were compared."
  },
  {
    "title": "Canvas and floor",
    "description": "Cotton weights, PU ratings and floor materials were compared."
  },
  {
    "title": "Heat readiness",
    "description": "Stove jacks and the capacity limits they bring were compared."
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
          "Family of 6 to 8 who want a cabin",
          "Kodiak Canvas 12x12 Cabin Lodge",
          "Rated for up to 8, 7.5 ft peak."
        ],
        [
          "Wall-tent shape at lower cost",
          "WaldZimmer Cotton Canvas Wall Tent",
          "6 to 8 people, steel frame."
        ],
        [
          "Large circular space",
          "Dream House 6 m Cotton Bell Tent",
          "6 m bell option, PU 3000mm."
        ],
        [
          "Couple with two kids",
          "SPECRAFT 10 ft Canvas Yurt Bell Tent",
          "3 to 4 people, lowest price."
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
          "$140 to $560",
          "SPECRAFT 10 ft Canvas Yurt Bell Tent or Dream House 6 m Cotton Bell Tent"
        ],
        [
          "$690 to $1000",
          "WaldZimmer Cotton Canvas Wall Tent or Kodiak Canvas 12x12 Cabin Lodge"
        ]
      ]
    }
  },
  {
    "subheading": "Frame Tent vs Bell Tent",
    "cards": [
      {
        "label": "Frame tent",
        "text": "Kodiak Canvas 12x12 Cabin Lodge and WaldZimmer Cotton Canvas Wall Tent use steel frames and straight walls for standing room at the edges."
      },
      {
        "label": "Bell tent",
        "text": "Dream House 6 m Cotton Bell Tent and SPECRAFT 10 ft Canvas Yurt Bell Tent use a center pole for open floor and quick setup."
      }
    ],
    "note": "Choose Kodiak Canvas 12x12 Cabin Lodge for a cabin feel, and a bell for a lower price."
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
          "Under 200 dollars",
          "SPECRAFT 10 ft Canvas Yurt Bell Tent"
        ],
        [
          "Around 560 dollars",
          "Dream House 6 m Cotton Bell Tent"
        ],
        [
          "Around 700 dollars",
          "WaldZimmer Cotton Canvas Wall Tent"
        ],
        [
          "Around 1,000 dollars",
          "Kodiak Canvas 12x12 Cabin Lodge"
        ]
      ]
    }
  },
  {
    "subheading": "For Cold Shoulder-Season Trips Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "a stove jack and a stated with-stove capacity"
      },
      {
        "label": "In this comparison",
        "text": "Kodiak Canvas 12x12 Cabin Lodge has a 5 inch stove jack and a 4-person count with a stove."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Kodiak Canvas 12x12 Cabin Lodge for the steel frame, welded floor and stove readiness."
      },
      {
        "label": "Save if",
        "text": "Save with SPECRAFT 10 ft Canvas Yurt Bell Tent if your family is 3 to 4 people, or WaldZimmer Cotton Canvas Wall Tent for more room."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Capacity under stove use",
    "explanation": "A stove takes floor and clearance, so a tent rated for 8 may sleep only 4 with one running. Kodiak states exactly that. Check whether the listing gives a with-stove number."
  },
  {
    "criterion": "Frame vs center pole",
    "explanation": "A steel frame supports vertical walls and snow load, while a single center pole gives open floor but sloping walls. Frame tents weigh more. Check the frame material and whether corner clearance suits cots."
  },
  {
    "criterion": "Canvas weight and finish",
    "explanation": "Heavier canvas breathes and lasts longer, but needs drying. A PU rating such as 3000mm shows water resistance. Look for gsm and the mm number."
  },
  {
    "criterion": "Floor material",
    "explanation": "A PVC floor lasts, and a welded floor seam stops leaks. A zip-off floor adds summer airflow. Check thickness in oz or gsm."
  },
  {
    "criterion": "Setup time and effort",
    "explanation": "A big canvas tent takes two or more people and can take 25 minutes or longer. Steel frames add hardware to carry. Plan a trial pitch at home."
  }
];

export const faq = [
  {
    "q": "Can a family of 8 use the Kodiak?",
    "a": "The listing says up to 8, or 4 with a stove. Plan on 8 for sleeping bags only. Kodiak Canvas 12x12 Cabin Lodge is the one with a stated limit."
  },
  {
    "q": "What is the common family canvas mistake?",
    "a": "Skipping a trial pitch. Canvas takes time and hands. Test at home before the trip."
  },
  {
    "q": "Is canvas worth it over a nylon tent?",
    "a": "Canvas breathes and handles heat and wind better, but it is heavy and slower to pitch. These tents run 140 to 1,000 dollars. Pay for canvas if you camp from a vehicle."
  },
  {
    "q": "How do I pitch a bell tent?",
    "a": "Lay it flat, stake the perimeter and raise the center pole. Then adjust the guy ropes evenly. Two adults can do it in 25 minutes."
  },
  {
    "q": "How do I store a canvas tent?",
    "a": "Dry it fully before packing. Use a breathable bag in a cool dry spot. Check seams for mildew each season."
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
