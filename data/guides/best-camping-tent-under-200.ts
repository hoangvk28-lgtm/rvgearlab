export const guideSlug = "best-camping-tent-under-200";
export const guideTitle = "5 Best Camping Tent Under 200 in 2026";
export const metaTitle = "Best Camping Tent Under 200 in 2026";
export const metaDescription = "Best camping tents under $200: five picks from a 2.76 lb ultralight to an 8 person screen-porch tunnel, with what the stated numbers say.";
export const mainKeyword = "best camping tent under 200";
export const introParagraphs = [
  "Under $200, camping tents split into two groups: light backpacking shelters and big family car-camping tents. The price lets you pick a good one in either group, as long as you match the tent to the trip.",
  "These five span from a 1 or 2 person ultralight to an 8 person screen-porch tunnel. They are ordered by how clearly the listing proves its weather and size claims."
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
    "id": "best-camping-tent-under-200-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Coleman Sundome Camping Tent with Rainfly",
    "price": "$114.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31PIc2XOSmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7QFZNS7?tag=rvgearlab-amz-20",
    "description": "The Coleman Sundome 6 person tent has a 6 foot center height and fits two queen-size airbeds. It uses the WeatherTec system with welded corners and inverted seams, plus large windows and a ground vent for airflow.\n\nCompared with the PORTAL, it is a simpler dome that pitches in about 10 minutes. Against the Reactive Outdoor, it holds many more people.\n\nIt suits families who want a dependable tent from a known brand. Standing height inside makes changing clothes easy.",
    "specs": [
      "6 person, 6 ft center height",
      "WeatherTec welded corners",
      "Large windows, ground vent"
    ],
    "pros": [
      "Fits two queen airbeds",
      "Standing headroom",
      "Welded corners and inverted seams",
      "Windows and ground vent"
    ],
    "cons": [
      "Heavy and bulky to carry",
      "Packs as a car-camping tent only"
    ],
    "bestFor": "Family car camping",
    "take": "The dependable all-rounder under $200. Great for weekend trips.",
    "catch": "It is for car camping, not hiking."
  },
  {
    "id": "best-camping-tent-under-200-2",
    "rank": 2,
    "badge": "Best Screen Room",
    "name": "PORTAL 8 Person Family Camping Tent with Screen Porch",
    "price": "$166.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31pFyed24YL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CGZZJSLH?tag=rvgearlab-amz-20",
    "description": "The PORTAL 8 person tunnel tent measures 20 feet by 8 feet with a 76 inch center height and a screen room. It uses 66D fabric with a water-resistant coating, a removable rainfly and improved fiberglass poles.\n\nCompared with the Coleman Sundome 6P, it adds a 6 foot screen porch and sleeps more. Against the Reactive Outdoor, it is a large group tent.\n\nIt suits big families who want a bug-free living area as well as sleeping space. It fits two full-size airbeds and extra gear.",
    "specs": [
      "20 x 8 ft with screen room",
      "66D fabric, removable fly",
      "Mesh ceiling, doors, windows"
    ],
    "pros": [
      "Built-in screen room",
      "Fits two full-size airbeds",
      "Mesh ceiling and windows ventilate well",
      "Improved fiberglass poles"
    ],
    "cons": [
      "Tunnel tents need careful guying",
      "Large to pitch and store"
    ],
    "bestFor": "Large groups wanting a screen room",
    "take": "The most space for the price. Allow time to set it up.",
    "catch": "It takes a few people to pitch."
  },
  {
    "id": "best-camping-tent-under-200-3",
    "rank": 3,
    "badge": "Best Ultralight",
    "name": "Naturehike Star Trail Ultralight Backpacking Tent",
    "price": "$159.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31bPCXq3cOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G2LBTWWV?tag=rvgearlab-amz-20",
    "description": "The Naturehike Star Trail weighs 2.76 pounds for the two-person version and compacts to 17.7 by 5.1 inches. It has a 10D nylon outer tent with PU1500mm+ and a 20D nylon floor and footprint with PU3000mm.\n\nCompared with the Night Cat, it is lighter and packs smaller. Against the Coleman Sundome 6P, it is a backpacking shelter that fits a pack.\n\nIt suits hikers who want a light two-person tent with a full mesh inner. Elevated clearance helps airflow.",
    "specs": [
      "2.76 lb, packs 17.7 x 5.1 in",
      "10D fly PU1500mm+, floor PU3000mm",
      "Full-mesh inner tent"
    ],
    "pros": [
      "Light at 2.76 pounds",
      "Packs to 17.7 x 5.1 inches",
      "Footprint with PU3000mm floor",
      "Full-coverage mesh inner"
    ],
    "cons": [
      "Thin 10D fabric needs care",
      "Fly rating is modest"
    ],
    "bestFor": "Hikers wanting low weight",
    "take": "The lightest tent here. Treat the thin fabric gently.",
    "catch": "Ultralight fabric tears more easily than heavier polyester."
  },
  {
    "id": "best-camping-tent-under-200-4",
    "rank": 4,
    "badge": "Best Instant Solo",
    "name": "Reactive Outdoor Tent",
    "price": "$149.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41jJGFqDRwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BR789JDV?tag=rvgearlab-amz-20",
    "description": "The Reactive Outdoor 3 Second Tent uses a self-locking mechanism to pop up in seconds and has a 3000mm hydrostatic head rating with taped seams. The tent bag has an extra wide opening with buckle straps.\n\nCompared with the Naturehike Star Trail, it pitches far faster. Against the Night Cat, it is a pop-up with taped seams and a clear 3000mm rating.\n\nIt suits solo campers who want instant setup. It also works for beach and festival use.",
    "specs": [
      "Self-locking pop-up frame",
      "3000mm hydrostatic head",
      "Taped seams, wide-mouth bag"
    ],
    "pros": [
      "Sets up in seconds by one person",
      "3000mm rating is stated",
      "Taped seams keep water out",
      "Easy to repack"
    ],
    "cons": [
      "Pop-up frame is less wind-proof",
      "One-person capacity"
    ],
    "bestFor": "Solo campers wanting speed",
    "take": "The fastest tent to pitch. Use it in calm weather.",
    "catch": "A pop-up frame is more affected by wind than a pole tent."
  },
  {
    "id": "best-camping-tent-under-200-5",
    "rank": 5,
    "badge": "Best Budget",
    "name": "Night Cat Backpacking Tent for One 1 to 2 Persons Lightweight Waterproof Camping Hiking Tent for Adults Kids S",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31uxxwrBNWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07WR1V29Y?tag=rvgearlab-amz-20",
    "description": "The Night Cat 1 to 2 person tent has inner dimensions of 7.0 by 3.8 by 3.6 feet and weighs 2 kg (4.4 pounds). It uses PU 3000mm polyester with taped seams and fiberglass poles in protective cases.\n\nCompared with the Naturehike Star Trail, it costs far less and weighs more. Against the Reactive Outdoor, it uses a standard pole frame.\n\nIt suits budget solo hikers. The pole cases protect your hands and the package is compact.",
    "specs": [
      "4.4 lb, 7.0 x 3.8 x 3.6 ft",
      "PU 3000mm polyester",
      "Pole cases protect hands"
    ],
    "pros": [
      "Lowest cost",
      "3000mm rating stated",
      "Taped seams",
      "Packs to 16.5 x 4.7 inches"
    ],
    "cons": [
      "Tight for two adults",
      "Fiberglass poles are less durable"
    ],
    "bestFor": "Budget solo hikers",
    "take": "A cheap, rain-ready solo tent.",
    "catch": "Two adults will find it very snug."
  }
];

export const howWeEvaluated = [
  {
    "title": "Match to trip",
    "description": "Each tent was matched to car camping or backpacking, since a $200 budget buys both."
  },
  {
    "title": "Stated numbers",
    "description": "Waterproof ratings, weights and sizes were compared where listed."
  },
  {
    "title": "Setup effort",
    "description": "Pop-up, pole and tunnel styles were compared on pitch time."
  },
  {
    "title": "Space and headroom",
    "description": "Floor size, center height and screen rooms show how comfortable each tent is."
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
          "Family car camping",
          "Coleman Sundome 6P",
          "6 foot center height."
        ],
        [
          "Large group with screen room",
          "PORTAL 8P Tunnel",
          "20 by 8 feet with a screen porch."
        ],
        [
          "Hiking, low weight",
          "Naturehike Star Trail",
          "2.76 pounds."
        ],
        [
          "Solo, instant setup",
          "Reactive Outdoor 3 Second",
          "Pops up in seconds."
        ],
        [
          "Solo, tight budget",
          "Night Cat 1-2P",
          "4.4 pounds at the lowest cost."
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
          "$30 to $120",
          "Night Cat 1-2P or Coleman Sundome 6P"
        ],
        [
          "$140 to $160",
          "Reactive Outdoor 3 Second or Naturehike Star Trail"
        ],
        [
          "$160 to $170",
          "PORTAL 8P Tunnel"
        ]
      ]
    }
  },
  {
    "subheading": "Car Camping vs Hiking",
    "cards": [
      {
        "label": "Car camping",
        "text": "Big, roomy and heavy. The Coleman Sundome 6P and PORTAL 8P Tunnel suit it."
      },
      {
        "label": "Hiking",
        "text": "Light and compact. The Naturehike Star Trail and Night Cat 1-2P suit it."
      }
    ],
    "note": "Choose the Coleman Sundome 6P for a family and the Naturehike Star Trail for hikes."
  },
  {
    "subheading": "By Group Size",
    "table": {
      "headers": [
        "Group",
        "Recommended pick"
      ],
      "rows": [
        [
          "One person",
          "Reactive Outdoor 3 Second"
        ],
        [
          "Two hikers",
          "Naturehike Star Trail"
        ],
        [
          "Six or more",
          "PORTAL 8P Tunnel"
        ]
      ]
    }
  },
  {
    "subheading": "For Weekend Family Trips Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A 6 foot center height and two queen airbeds."
      },
      {
        "label": "In this comparison",
        "text": "The Coleman Sundome 6P fits two queen airbeds with a 6 foot peak."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Naturehike Star Trail if weight matters, or the PORTAL 8P Tunnel if you want a screen room."
      },
      {
        "label": "Save if",
        "text": "Save with the Night Cat 1-2P if you hike solo on a tight budget."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Pick the trip first",
    "explanation": "A $200 tent can be a 2.76 pound backpacking tent or an 8 person family tent. Decide whether you carry it or drive it. That choice drives everything else."
  },
  {
    "criterion": "Waterproof number",
    "explanation": "A listed rating like 3000mm on the Reactive Outdoor says how much water pressure fabric resists. Check for taped seams. A missing number means caution."
  },
  {
    "criterion": "Center height",
    "explanation": "Headroom matters for families. The Coleman Sundome 6P lists 6 feet, and the PORTAL lists 76 inches. Check the number if you want to stand."
  },
  {
    "criterion": "Setup style",
    "explanation": "Pop-ups save time, while tunnels need guy lines and care. A dome is the easiest middle path. Check the listing for pitch time."
  },
  {
    "criterion": "Weight and packing",
    "explanation": "A backpacking tent like the Naturehike Star Trail packs to 17.7 by 5.1 inches. A family tent needs trunk space. Match packed size to your storage."
  },
  {
    "criterion": "Ventilation",
    "explanation": "Mesh windows and vents cut condensation. The PORTAL lists a full mesh ceiling. Look for vents."
  }
];

export const faq = [
  {
    "q": "Is $200 enough for a good camping tent?",
    "a": "Yes. The Coleman Sundome 6P is a proven family tent. For backpacking, the Naturehike Star Trail is light."
  },
  {
    "q": "How do I choose a size?",
    "a": "Count campers and add one for gear. A 6 person tent fits a family of four with space. Check floor size."
  },
  {
    "q": "Do I need a footprint?",
    "a": "A footprint protects the floor. The Naturehike Star Trail includes one. Others may need a tarp."
  },
  {
    "q": "How do I set up a tunnel tent?",
    "a": "Stake the ends and raise the poles. Guy out the sides. Face the low end into the wind."
  },
  {
    "q": "How do I keep a tent dry?",
    "a": "Pitch the fly taut and vent the doors. Avoid low spots. Seal seams if needed."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best 4 Season Tent Under 200",
    "href": "/tents-shelter/best-4-season-tent-under-200"
  },
  {
    "title": "Best 4 Season Tent Under 300",
    "href": "/tents-shelter/best-4-season-tent-under-300"
  },
  {
    "title": "Best 4 Season Tent For Family",
    "href": "/tents-shelter/best-4-season-tent-for-family"
  },
  {
    "title": "Best Backpacking Tents Under 100",
    "href": "/tents-shelter/best-backpacking-tents-under-100"
  }
];
