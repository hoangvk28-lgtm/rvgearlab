export const guideSlug = "best-waterproof-4-season-tents";
export const guideTitle = "3 Best Waterproof 4 Season Tents in 2026";
export const metaTitle = "Best Waterproof 4 Season Tents in 2026";
export const metaDescription = "Best waterproof 4-season tents compared on stated waterproof ratings, floor and fly fabrics, snow skirts and stove jack options for wet cold camping.";
export const mainKeyword = "best waterproof 4 season tents";
export const introParagraphs = [
  "A four-season label tells you a tent is built for wind and snow, but waterproofing is a separate question: it depends on the fly's millimeter rating, the floor's rating and whether the seams are taped. Winter camping is wetter than most people expect, because snow melts and condensation builds inside.",
  "Only three tents in this price range name both a four-season design and a waterproof construction in their listings: a double-wall hot tent, a canvas-style bell tent and an ultralight dome. They were compared on stated ratings, fabric weights, poles and stove readiness."
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
    "id": "best-waterproof-4-season-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Naturehike Dune Hot Tent with Stove Jack",
    "price": "$254.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/315pbQi7y5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLXVVP8K?tag=rvgearlab-20",
    "description": "The Naturehike Dune is a double-layer 4-season hot tent with a stove jack and a snow skirt. Its fly is 75D polyester with silver coating rated 3000mm waterproof, its floor is 150D Oxford rated 4000mm with seam-taped corners, and the poles are 7001 aluminum. The removable inner measures 86.6 by 59 by 63 inches and the whole package weighs about 16.5 lb.\n\nIt has the highest floor rating in this list at 4000mm and the only snow skirt, while the OneTigris Stella lists a 3000mm rating on a much lighter nylon fly. Against the VEVOR bell tent, it is a double-wall dome with a removable inner, so condensation stays off the sleepers.\n\nIt suits winter campers who want a taped, rated floor and a stove jack in a tent a couple can still carry to a trailhead. The vestibule holds boots and wet gear out of the sleeping area.",
    "specs": [
      "3000mm fly, 4000mm floor",
      "Snow skirt and stove jack",
      "7001 aluminum poles"
    ],
    "pros": [
      "4000mm floor with taped corners",
      "Snow skirt helps block wind and snow",
      "Double wall with removable inner",
      "Aluminum poles for wind"
    ],
    "cons": [
      "Highest price of the three",
      "About 16.5 lb is heavy for a solo pack"
    ],
    "bestFor": "Snow camping with a stove",
    "take": "The best-documented waterproof build, with a rated floor and snow skirt.",
    "catch": "Use only a stove approved for use in a tent of this type, with plenty of clearance and a CO alarm."
  },
  {
    "id": "best-waterproof-4-season-tents-2",
    "rank": 2,
    "badge": "Best for Groups",
    "name": "VEVOR Oxford Bell Tent",
    "price": "$212.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51oS7o+ynGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H3V57CGD?tag=rvgearlab-20",
    "description": "The VEVOR is a 13.12 ft bell tent for 3 to 4 people with an 8.2 ft peak, waterproof Oxford fabric, a top rain cover and a PVC groundsheet that is zipped and detachable. It includes a stove jack and a silicone fire mat, galvanized steel poles, mesh windows, top vents and roll-up sidewalls.\n\nIt stands tall enough to walk around in, which neither the Naturehike nor the OneTigris can do, and it costs less than the Naturehike. The trade is that its listing gives no millimeter rating for the fabric, where the others do.\n\nIt suits groups and families who want a standing-height winter base for cooking and hanging out. The top rain cover and PVC floor handle rain and wet ground.",
    "specs": [
      "13.12 ft bell, 8.2 ft peak",
      "Oxford fabric with rain cover",
      "Stove jack and fire mat"
    ],
    "pros": [
      "Stand-up height of 8.2 feet",
      "Includes stove jack and silicone fire mat",
      "Detachable PVC groundsheet",
      "Roll-up sidewalls and top vents"
    ],
    "cons": [
      "No waterproof mm rating stated",
      "Heavy galvanized poles and Oxford fabric"
    ],
    "bestFor": "Group winter base camp",
    "take": "A standing-height hot-tent bell for groups, without a published mm rating.",
    "catch": "Confirm which stove and stovepipe are suited to the jack before lighting anything."
  },
  {
    "id": "best-waterproof-4-season-tents-3",
    "rank": 3,
    "badge": "Best Lightweight",
    "name": "OneTigris Stella 4 Season Camping Tent Backpacking 2 Person Waterproof Lightweight Easy Setup Instant 3000mm W",
    "price": "$167.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31EePpwi53L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F52BNCN3?tag=rvgearlab-20",
    "description": "The OneTigris Stella is a 2-person 4-season tent with a 20D nylon silicone-coated outer, 40D nylon bottom and a 3000mm waterproof rating. It weighs 4.8 lb, packs to 21.7 by 6.3 inches and has a removable blackout outer over a mesh inner.\n\nAt 4.8 lb it weighs about a quarter of the Naturehike while matching its 3000mm fly rating. It has no stove jack, which makes it the pick for cold camping without a stove, and it costs the least of the three.\n\nIt suits backpackers and cyclists who need a waterproof four-season shell they can carry. Flexible poles anchor to all four floor corners for a fast pitch.",
    "specs": [
      "3000mm waterproof rating",
      "4.8 lb, packs 21.7 inches",
      "20D nylon, 40D floor"
    ],
    "pros": [
      "Only 4.8 lb to carry",
      "3000mm waterproof rating stated",
      "Removable blackout outer",
      "Quick crossing-pole setup"
    ],
    "cons": [
      "No stove jack for heated use",
      "Setup size is small at 6.9 x 4.1 ft"
    ],
    "bestFor": "Backpacking in wet cold",
    "take": "A light, waterproof shell for people who do not need a stove.",
    "catch": "The 4.1 ft width suits two people only if they are close friends."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated waterproof ratings",
    "description": "Millimeter ratings on the fly and floor were compared where the listing gives them."
  },
  {
    "title": "Fabric and seams",
    "description": "Fabric weights and seam taping were compared as the listings describe them."
  },
  {
    "title": "Four-season features",
    "description": "Snow skirts, vestibules, vents and pole materials were compared for wind and snow."
  },
  {
    "title": "Heat and packing",
    "description": "Stove jack provision, listed weight and packed size were compared."
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
    "subheading": "By Trip Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Snow camping with a stove",
          "Naturehike Dune Hot Tent",
          "Snow skirt, 4000mm floor, stove jack"
        ],
        [
          "Group base camp",
          "VEVOR Oxford Bell Tent",
          "8.2 ft peak, stove jack, fire mat"
        ],
        [
          "Backpacking in wet cold",
          "OneTigris Stella 2-Person",
          "4.8 lb with 3000mm rating"
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
          "$160 to $170",
          "OneTigris Stella 2-Person"
        ],
        [
          "$210 to $220",
          "VEVOR Oxford Bell Tent"
        ],
        [
          "$250 to $260",
          "Naturehike Dune Hot Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Double Wall Dome vs Bell Tent",
    "cards": [
      {
        "label": "Dome",
        "text": "Naturehike Dune Hot Tent and OneTigris Stella 2-Person are lower and shed wind, and the Dune keeps condensation off with a removable inner."
      },
      {
        "label": "Bell tent",
        "text": "VEVOR Oxford Bell Tent stands tall and sleeps more people but is heavier and gives no waterproof mm rating."
      }
    ],
    "note": "Most solo and couple winter campers should default to the Naturehike Dune Hot Tent, unless weight dictates the OneTigris Stella 2-Person."
  },
  {
    "subheading": "By Heating Plan",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Wood stove inside",
          "Naturehike Dune Hot Tent"
        ],
        [
          "Stove for a group",
          "VEVOR Oxford Bell Tent"
        ],
        [
          "No stove, body heat only",
          "OneTigris Stella 2-Person"
        ]
      ]
    }
  },
  {
    "subheading": "For Wet Winter Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated mm rating for the fly and floor, taped seams and vents for condensation."
      },
      {
        "label": "In this comparison",
        "text": "Naturehike Dune Hot Tent states 3000mm for the fly and 4000mm for the floor with taped corners, and OneTigris Stella 2-Person states 3000mm."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Naturehike Dune Hot Tent for the best-documented waterproofing and a snow skirt, or the VEVOR Oxford Bell Tent if standing room and group size matter."
      },
      {
        "label": "Save if",
        "text": "Save with the OneTigris Stella 2-Person if you do not need a stove, or accept the VEVOR Oxford Bell Tent's missing mm rating for the larger space."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fly and floor ratings",
    "explanation": "A hydrostatic head such as 3000mm resists steady rain, while a 4000mm floor handles wet ground and snow melt. Look for ratings on both the fly and the floor. A listing with no millimeter figure gives you nothing to compare."
  },
  {
    "criterion": "Taped seams",
    "explanation": "Water enters at seams before it comes through the fabric. Seam-taped corners and a bathtub floor matter as much as the rating. Check for the words taped or sealed in the listing."
  },
  {
    "criterion": "Condensation",
    "explanation": "Winter tents trap moisture from breath, so a double wall or good vents are vital. A single wall without vents can drip on sleepers. Open top vents slightly even when it is cold."
  },
  {
    "criterion": "Stove safety",
    "explanation": "If a tent has a stove jack, use only a stove and pipe set that the tent maker approves. Keep clearance from fabric, ventilate and run a carbon monoxide alarm. Never use a stove in a tent without a stove jack."
  },
  {
    "criterion": "Weight and pole strength",
    "explanation": "Aluminum poles flex in wind, while galvanized steel is stiffer and heavier. A 16 lb tent is fine for a vehicle but heavy for a pack. Match weight to how far you carry it."
  }
];

export const faq = [
  {
    "q": "What does a 3000mm waterproof rating mean?",
    "a": "It means the fabric resists a 3000mm column of water pressure before leaking, enough for steady rain. Higher numbers suit heavier rain or wet ground. Check the rating on both the fly and the floor."
  },
  {
    "q": "Can I use a wood stove in any four-season tent?",
    "a": "No. Only use a stove in a tent with a stove jack, and only a stove and pipe the maker approves. Keep clearance, ventilate and use a carbon monoxide alarm. Never sleep with a stove burning."
  },
  {
    "q": "Is a hot tent worth it over a plain four-season tent?",
    "a": "A stove makes winter camping far more comfortable but adds weight, risk and cost. Backpackers usually skip it. Car campers and groups gain the most."
  },
  {
    "q": "How do I reduce condensation in a winter tent?",
    "a": "Open top vents a little, keep wet gear in the vestibule and avoid cooking inside without ventilation. A double wall helps. Wipe the walls in the morning."
  },
  {
    "q": "How do I dry a tent after a snowy trip?",
    "a": "Shake off snow, hang the tent to dry fully and store it loose. Check seams and zippers. Reseal worn seams if needed."
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
