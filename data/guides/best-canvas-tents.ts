export const guideSlug = "best-canvas-tents";
export const guideTitle = "6 Best Canvas Tents in 2026";
export const metaTitle = "Best Canvas Tents in 2026";
export const metaDescription = "Best canvas tents compared: six cotton and cotton blend cabin, bell and wall tents, covering size, stove readiness, floors and care for families and glampers.";
export const mainKeyword = "best canvas tents";
export const introParagraphs = [
  "Canvas tents trade pack weight for breathability, insulation and a feel that synthetic tents struggle to match. The real questions are how much the tent weighs and how it handles rain, and whether it needs a stove or a seasoning step.",
  "Six canvas tents were kept, from a Kodiak cabin lodge to a budget bell tent. They are ranked by fabric type, floor design and how plainly each listing states its limits."
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
    "id": "best-canvas-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Kodiak Canvas Flex-Bow Canvas Tent Deluxe 10x10 ft",
    "price": "$699.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31pBN+5jfCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B001O02TK4?tag=rvgearlab-amz-20",
    "description": "The Kodiak Flex-Bow Deluxe is a 10 ft by 10 ft, 6-person tent in Hydra-Shield 100 percent cotton duck canvas that is durable, watertight and breathable. It has a 6 ft 6 in ceiling, two D-shaped doors with YKK zippers, four no-see-um mesh windows and a Flex-Bow frame that one person can set up.\n\nIt costs less than the Cabin Lodge and offers a quick single-person pitch. Bell tents use a center pole, while this one stands on a flex-bow frame with straight walls.\n\nIt suits campers who want a serious canvas tent without a huge investment. The frame keeps the fabric taut.",
    "specs": [
      "10 x 10 ft, 6.5 ft ceiling",
      "Hydra-Shield cotton duck",
      "Flex-Bow, one-person setup"
    ],
    "pros": [
      "Watertight, breathable cotton duck",
      "One-person Flex-Bow setup",
      "Two D-doors with YKK zippers",
      "Four no-see-um windows"
    ],
    "cons": [
      "Priced in the top tier",
      "Canvas is heavy to carry"
    ],
    "bestFor": "Serious canvas, mid size",
    "take": "A quick-pitch canvas tent with premium fabric and a solid frame.",
    "catch": "Canvas weighs far more than nylon, so this is a car-camping tent."
  },
  {
    "id": "best-canvas-tents-2",
    "rank": 2,
    "badge": "Best Premium Lodge",
    "name": "Kodiak Canvas 12x12 Cabin Lodge Tent SR",
    "price": "$999.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31iCmC9bdAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G56CBJHF?tag=rvgearlab-amz-20",
    "description": "The Kodiak Cabin Lodge SR is a 12 ft by 12 ft tent with a 7.5 ft peak and vertical walls. It uses Hydra-Shield cotton duck, a 13.5 oz vinyl sewn-in welded floor, a 5 inch stove jack, 6 no-see-um windows and 2 vents, and a galvanized 1-inch steel frame.\n\nIts price tops this group, and it holds up to 8 people (4 when using a stove). Next to the Flex-Bow it adds a stove jack and a steel frame.\n\nIt suits families who want a long-term, stove-ready canvas lodge. The vents can stay open during rain.",
    "specs": [
      "12x12 ft, 7.5 ft peak",
      "13.5 oz vinyl floor",
      "Stove jack, steel frame"
    ],
    "pros": [
      "Stove-ready 5 inch jack",
      "Galvanized steel frame",
      "Vents stay open in rain",
      "Welded vinyl sewn-in floor"
    ],
    "cons": [
      "Highest price in this group",
      "Stove sold separately"
    ],
    "bestFor": "Long stays and cold seasons",
    "take": "The premium canvas lodge, built for stoves and snow.",
    "catch": "The stove is sold separately, and four people is the stove capacity."
  },
  {
    "id": "best-canvas-tents-3",
    "rank": 3,
    "badge": "Best Bell Tent",
    "name": "WHITEDUCK Regatta Canvas Bell Tent w/Stove Jack",
    "price": "$653.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41cE0xEHinL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07MZQ7BH2?tag=rvgearlab-amz-20",
    "description": "The WHITEDUCK Regatta is a bell tent in breathable performance canvas with a PFC-free water-repellent finish and an arctic-ready stove jack. The kit adds a sewn-in groundsheet, mesh windows, roof vents, poles, a tool kit and a weatherproof bag, and the standard wall height is 2 ft 7 in.\n\nThe price is below either Kodiak, and the sidewall is higher than on many bell tents. Against the WildFinder it has a brand history in bell tents.\n\nIt suits glampers who want a full package. Two-layer doors and windows add weather cover, and an electrical outlet is built in.",
    "specs": [
      "Performance canvas bell",
      "Sewn-in groundsheet, jack",
      "2 ft 7 in wall height"
    ],
    "pros": [
      "Complete package with tool kit",
      "Two-layered doors and windows",
      "Electrical cable outlet",
      "Stove jack included"
    ],
    "cons": [
      "Center pole limits layout",
      "Canvas is heavy"
    ],
    "bestFor": "Glamping and long weekends",
    "take": "A complete bell tent with taller walls and a stove jack.",
    "catch": "The center pole sits in the middle of the floor."
  },
  {
    "id": "best-canvas-tents-4",
    "rank": 4,
    "badge": "Best Large Bell Tent",
    "name": "WildFinder 16.5 Ft Canvas Bell Tent",
    "price": "$474.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51WjVLiipdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G52BR9LM?tag=rvgearlab-amz-20",
    "description": "The WildFinder bell tent has 55 inch vertical sidewalls and a 9.2 ft peak. It uses a 210G TC cotton roof for lower condensation, has 8 mesh windows and doors, a removable floor and a pre-installed stove jack.\n\nIt is the largest tent here and costs well under the Kodiak Cabin Lodge. Against the WHITEDUCK it has a bigger footprint and uses TC cotton on the roof.\n\nIt suits groups that want a yurt-style bell tent with room to stand. A positioning sheet helps align the pegs.",
    "specs": [
      "16.5 ft, 9.2 ft peak",
      "55 in sidewalls",
      "210G TC cotton roof"
    ],
    "pros": [
      "Tall 55 inch sidewalls",
      "Eight mesh windows and doors",
      "Pre-installed stove jack",
      "Removable floor and roll-up walls"
    ],
    "cons": [
      "Heavy to move and pitch",
      "TC cotton is a blend"
    ],
    "bestFor": "Large groups, glamping",
    "take": "A big, tall bell tent for groups at a moderate cost.",
    "catch": "A tent this size needs a large flat area and time to pitch."
  },
  {
    "id": "best-canvas-tents-5",
    "rank": 5,
    "badge": "Best Budget Large Bell",
    "name": "WaldZimmer 13ft Green Canvas Bell Tent with Stove Jack & Removable Floor",
    "price": "$311.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51ahVWjmrwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C1GJJTG7?tag=rvgearlab-amz-20",
    "description": "The WaldZimmer bell tent is 4 m across with an 8.2 ft top height and a 5 ft door. It uses polycotton canvas, double-layer windows, a pre-cut chimney opening for a stove and a removable floor, and fits 4 to 5 people.\n\nIt is the second-cheapest tent here and has a pre-cut chimney opening. Against the VEVOR it holds more people at a higher price.\n\nIt suits families who want a roomy bell tent on a modest budget. The listing is open that the fabric has no PU coating.",
    "specs": [
      "4 m diameter, 8.2 ft top",
      "Polycotton, double windows",
      "Pre-cut chimney opening"
    ],
    "pros": [
      "Fits 4 to 5 people",
      "Pre-cut chimney opening",
      "Double-layer windows",
      "Removable floor"
    ],
    "cons": [
      "No PU coating, avoid long rain",
      "Not for deep winter"
    ],
    "bestFor": "Family bell tent, dry weather",
    "take": "A roomy, low-cost bell tent with a stove opening.",
    "catch": "Do not leave it in rain for long, per the listing."
  },
  {
    "id": "best-canvas-tents-6",
    "rank": 6,
    "badge": "Best Budget Pick",
    "name": "VEVOR Canvas Bell Tent",
    "price": "$176.94",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51bHi72LDfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H32WC7RT?tag=rvgearlab-amz-20",
    "description": "The VEVOR bell tent is 9.84 ft across with a 6.6 ft peak and fits 2 to 3 people. It uses thickened poly-cotton canvas, reinforced stitching and galvanized metal poles, with mesh windows, top vents, a stove jack and a silicone fire mat.\n\nIt is the cheapest tent here and the smallest. Against the WaldZimmer it holds fewer people.\n\nIt suits couples who want to try a bell tent. The kit comes with stakes, guy lines and a PVC groundsheet.",
    "specs": [
      "9.84 ft, 6.6 ft peak",
      "Poly-cotton, metal poles",
      "Stove jack, fire mat"
    ],
    "pros": [
      "Lowest price in the group",
      "Includes silicone fire mat",
      "PVC groundsheet and stakes",
      "Roll-up sidewalls"
    ],
    "cons": [
      "Listing says it is not waterproof",
      "Holds only 2 to 3 people"
    ],
    "bestFor": "Couples trying canvas",
    "take": "The cheapest bell tent, with a fire mat for stove use.",
    "catch": "The listing is clear that it is not waterproof."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fabric",
    "description": "Cotton duck, TC cotton and poly-cotton were compared on breathability and weight."
  },
  {
    "title": "Waterproofing",
    "description": "Hydra-Shield, PFC-free finishes and no-coating warnings were noted."
  },
  {
    "title": "Floor and frame",
    "description": "Sewn-in floors, steel frames and center poles were compared."
  },
  {
    "title": "Size and capacity",
    "description": "Floors from 9.84 ft to 16.5 ft and headroom were compared."
  },
  {
    "title": "Stove readiness",
    "description": "Stove jacks, fire mats and pre-cut chimneys were counted."
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
    "subheading": "By Camp Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Fast pitch, mid size",
          "Kodiak Flex-Bow Deluxe 10x10",
          "One-person Flex-Bow setup."
        ],
        [
          "Long stays, stove",
          "Kodiak Canvas 12x12 Cabin Lodge",
          "Steel frame and welded vinyl floor."
        ],
        [
          "Glamping bell tent",
          "WHITEDUCK Regatta Bell Tent",
          "Complete kit and 2 ft 7 in walls."
        ],
        [
          "Group of six or more",
          "WildFinder 16.5 ft Canvas Bell Tent",
          "55 inch sidewalls."
        ],
        [
          "Budget family bell",
          "WaldZimmer 13 ft Canvas Bell Tent",
          "4 to 5 people, pre-cut chimney."
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
          "$170 to $320",
          "VEVOR 9.84 ft Canvas Bell Tent or WaldZimmer 13 ft Canvas Bell Tent"
        ],
        [
          "$470 to $660",
          "WildFinder 16.5 ft Canvas Bell Tent or WHITEDUCK Regatta Bell Tent"
        ],
        [
          "$690 to $1000",
          "Kodiak Flex-Bow Deluxe 10x10 or Kodiak Canvas 12x12 Cabin Lodge"
        ]
      ]
    }
  },
  {
    "subheading": "Cabin Frame vs Bell Tent",
    "cards": [
      {
        "label": "Cabin frame",
        "text": "Kodiak Flex-Bow Deluxe 10x10 and Kodiak Canvas 12x12 Cabin Lodge use straight walls and frames for more usable floor."
      },
      {
        "label": "Bell tent",
        "text": "WHITEDUCK Regatta Bell Tent, WildFinder 16.5 ft Canvas Bell Tent, WaldZimmer 13 ft Canvas Bell Tent and VEVOR 9.84 ft Canvas Bell Tent use a center pole and a round floor."
      }
    ],
    "note": "Choose Kodiak Flex-Bow Deluxe 10x10 for most campers, and a bell tent for the look and a lower price."
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
          "VEVOR 9.84 ft Canvas Bell Tent"
        ],
        [
          "300 to 650 dollars",
          "WaldZimmer 13 ft Canvas Bell Tent"
        ],
        [
          "475 to 650 dollars, larger",
          "WildFinder 16.5 ft Canvas Bell Tent"
        ],
        [
          "Premium",
          "Kodiak Canvas 12x12 Cabin Lodge"
        ]
      ]
    }
  },
  {
    "subheading": "For First-Time Canvas Campers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "a tent that pitches with one person and a clear care guide"
      },
      {
        "label": "In this comparison",
        "text": "Kodiak Flex-Bow Deluxe 10x10 pitches with one person, while WHITEDUCK Regatta Bell Tent includes a tool kit."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you camp long stays or in cold, because Kodiak Canvas 12x12 Cabin Lodge adds the stove jack, steel frame and welded floor. Kodiak Flex-Bow Deluxe 10x10 is the quicker pitch."
      },
      {
        "label": "Save if",
        "text": "Save with VEVOR 9.84 ft Canvas Bell Tent or WaldZimmer 13 ft Canvas Bell Tent if you camp in dry weather. Both cost under 320 dollars."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Cotton duck vs blends",
    "explanation": "Cotton duck is pure cotton and swells when wet to seal itself. Poly-cotton and TC blends dry faster and weigh less. Check the fabric on the listing."
  },
  {
    "criterion": "Waterproof claims",
    "explanation": "Canvas is naturally water-repellent. Some listings state no PU coating and warn against long rain. Look for treatment names and warnings."
  },
  {
    "criterion": "Sewn-in floor",
    "explanation": "A sewn-in floor keeps bugs and water out. A removable floor adds flexibility. Check which you get."
  },
  {
    "criterion": "Frame type",
    "explanation": "A steel frame handles wind and snow better than a center pole. Bell tents use a center pole. Check the frame details."
  },
  {
    "criterion": "Weight and packing",
    "explanation": "Canvas tents weigh far more than nylon. Plan for two people. Check packed size."
  },
  {
    "criterion": "Stove jack",
    "explanation": "A stove jack is a heat-resistant opening for a stovepipe. You still need a stove and safety gear. Check for a fire mat or a size note."
  }
];

export const faq = [
  {
    "q": "Are canvas tents waterproof?",
    "a": "Canvas is water-repellent, and cotton duck swells to seal in rain. Some listings warn against long rain. Kodiak states Hydra-Shield is watertight."
  },
  {
    "q": "What is the common canvas tent mistake?",
    "a": "Packing it away wet. Mildew grows fast. Dry the canvas before storing."
  },
  {
    "q": "Is Kodiak worth it over a bell tent?",
    "a": "It costs far more and adds pure cotton duck, a frame and a welded floor. WildFinder 16.5 ft Canvas Bell Tent gives more space for less. Pay for Kodiak for durability."
  },
  {
    "q": "How do I set up a bell tent?",
    "a": "Lay it flat, peg the corners, raise the center pole and adjust the guy lines. Two people take about 25 to 30 minutes."
  },
  {
    "q": "How do I care for canvas?",
    "a": "Brush off dirt, dry it fully and store it loose. Avoid detergent. Check seams each season."
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
