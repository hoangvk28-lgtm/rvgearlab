export const guideSlug = "best-2-person-4-season-tents";
export const guideTitle = "3 Best 2 Person 4 Season Tents in 2026";
export const metaTitle = "Best 2 Person 4 Season Tents in 2026";
export const metaDescription = "Best 2 person 4 season tents compared on weight, snow skirts, waterproof rating and floor size for couples camping in cold, wet or windy weather.";
export const mainKeyword = "best 2 person 4 season tents";
export const introParagraphs = [
  "Four season tents for two trade ventilation for storm resistance: a snow skirt, stronger poles and a fly that reaches the ground. The honest question is how much real weather protection a budget listing delivers, so this guide leans on the specs each listing actually states.",
  "Only three distinct tents qualified: the OneTigris Stella, which sells two near-identical listings that were collapsed into one pick, and two GEERTOP models. Each is sold as 4 season for two people, and they differ in weight, floor size and whether blackout fabric is part of the package."
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
    "id": "best-2-person-4-season-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "OneTigris Stella 4 Season Camping Tent Backpacking 2 Person Waterproof Lightweight Easy Setup Instant 3000mm W",
    "price": "$167.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31EePpwi53L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F52BNCN3?tag=rvgearlab-20",
    "description": "The OneTigris Stella uses a 20D nylon outer with a single-layer silicone coating, a 40D nylon bottom and a 3000mm waterproof rating. It weighs 4.8 lb, sets up at 6.9 by 4.1 by 3.7 ft and includes 10 stakes and four guy lines.\n\nIt is the lightest tent here, about 2 lb under the GEERTOP Backpacking, and it adds a removable blackout outer tent. Compared with the GEERTOP Blackout it is much lighter to carry and has a smaller floor.\n\nIt suits backpackers who want a two-person tent with a mesh inner for airflow. Poles cross at the top of the dome and anchor at the four corners.",
    "specs": [
      "4.8 lb, 6.9 x 4.1 x 3.7 ft",
      "20D silicone nylon, 3000mm",
      "Removable blackout outer"
    ],
    "pros": [
      "Lightest tent in this list",
      "3000mm waterproof rating",
      "Mesh inner tent for airflow",
      "Removable blackout outer"
    ],
    "cons": [
      "Smaller floor than the GEERTOP tents",
      "No snow skirt named on the listing"
    ],
    "bestFor": "Light 4 season backpacking",
    "take": "The lightest 4 season tent for two, with a removable outer.",
    "catch": "The listing does not name a snow skirt, so winter pitches need extra snow protection."
  },
  {
    "id": "best-2-person-4-season-tents-2",
    "rank": 2,
    "badge": "Best for Snow Pitches",
    "name": "GEERTOP 2 Person Backpacking Tent",
    "price": "$94.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31n2AyjI--L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B016QS5NEC?tag=rvgearlab-20",
    "description": "The GEERTOP backpacking tent has a 210T ripstop polyester fly with a PU3000mm coating, fully taped seams and an extended snow skirt. Inside it measures 82.6 by 55 by 45 inches with dual vestibules, and it weighs 6.9 lb packed to 17 by 7 by 7 inches.\n\nIt names a snow skirt and taped seams, which the Stella does not, at 2.1 lb more weight. Compared with the GEERTOP Blackout it is 0.8 lb lighter and costs less.\n\nIt suits couples who need snow-ready skirt coverage and room for boots in the vestibules. The two-pole clip-on frame pitches quickly.",
    "specs": [
      "6.9 lb, 82.6 x 55 x 45 in",
      "PU3000mm fly, taped seams",
      "Snow skirt, dual vestibules"
    ],
    "pros": [
      "Extended snow skirt",
      "Fully taped seams",
      "Dual vestibules for gear",
      "Two-pole clip-on setup"
    ],
    "cons": [
      "Heavier than the Stella",
      "Floor is moderately tight for two"
    ],
    "bestFor": "Snowy weekend pitches",
    "take": "A snow-skirted two-person tent with taped seams at a fair price.",
    "catch": "At 6.9 lb it is heavier than the Stella for long hikes."
  },
  {
    "id": "best-2-person-4-season-tents-3",
    "rank": 3,
    "badge": "Best for Daytime Sleep",
    "name": "GEERTOP 2 Person Blackout Camping Tent",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31UyFh5K4kL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJRZB7JT?tag=rvgearlab-20",
    "description": "The GEERTOP Blackout adds blackout fabric with a heat-insulating layer to a 4-season freestanding design with a full-coverage snow skirt. It measures 82.6 by 55 by 45 inches, weighs about 7.7 lb and packs to 17.3 by 6.7 by 6.7 inches.\n\nIt is the only blackout design here, which helps with shift work and bright summer mornings. Compared with the GEERTOP Backpacking it adds fabric weight and cost in exchange for darkness.\n\nIt suits campers who sleep during the day or in long daylight. Two small vestibules and two aluminum poles complete the layout.",
    "specs": [
      "7.7 lb, 82.6 x 55 x 45 in",
      "Blackout fabric, snow skirt",
      "Two aluminum poles, freestanding"
    ],
    "pros": [
      "Blackout fabric for daytime sleep",
      "Full-coverage snow skirt",
      "Freestanding two-pole setup",
      "Two vestibules"
    ],
    "cons": [
      "Heaviest of the three",
      "Small vestibules"
    ],
    "bestFor": "Shift workers and light sleepers",
    "take": "The darkest tent here, with a full snow skirt.",
    "catch": "Weight limits it to short hikes or car-supported trips."
  }
];

export const howWeEvaluated = [
  {
    "title": "Season claim",
    "description": "Only listings sold as 4 season were kept."
  },
  {
    "title": "Weather features",
    "description": "Snow skirts, taped seams and waterproof ratings."
  },
  {
    "title": "Weight",
    "description": "Listed weights."
  },
  {
    "title": "Floor size",
    "description": "Listed dimensions."
  },
  {
    "title": "Extras",
    "description": "Blackout fabric and vestibules."
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
    "subheading": "By Conditions",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Light weight, mild winter",
          "OneTigris Stella 2P",
          "4.8 lb with 3000mm."
        ],
        [
          "Snow pitches",
          "GEERTOP 2-Person Backpacking",
          "Extended snow skirt."
        ],
        [
          "Daytime sleep",
          "GEERTOP 2-Person Blackout",
          "Blackout fabric."
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
          "$90 to $100",
          "GEERTOP 2-Person Backpacking"
        ],
        [
          "$100 to $110",
          "GEERTOP 2-Person Blackout"
        ],
        [
          "$160 to $170",
          "OneTigris Stella 2P"
        ]
      ]
    }
  },
  {
    "subheading": "Single vs Extended Snow Skirt",
    "cards": [
      {
        "label": "Snow skirt",
        "text": "A skirt that lays flat on snow. The GEERTOP 2-Person Backpacking and GEERTOP 2-Person Blackout list one."
      },
      {
        "label": "No skirt listed",
        "text": "A lighter build with no skirt named. The OneTigris Stella 2P is this type."
      }
    ],
    "note": "Choose the GEERTOP 2-Person Backpacking for snow and the OneTigris Stella 2P for light weight."
  },
  {
    "subheading": "By Weight Limit",
    "table": {
      "headers": [
        "Weight",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under 5 lb",
          "OneTigris Stella 2P"
        ],
        [
          "About 7 lb",
          "GEERTOP 2-Person Backpacking"
        ],
        [
          "Accepts 7.7 lb for blackout",
          "GEERTOP 2-Person Blackout"
        ]
      ]
    }
  },
  {
    "subheading": "Cold-Weather Backpacking",
    "cards": [
      {
        "label": "Look for",
        "text": "A listed snow skirt and taped seams."
      },
      {
        "label": "In this comparison",
        "text": "The GEERTOP 2-Person Backpacking lists both and weighs 6.9 lb."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the GEERTOP 2-Person Blackout if darkness matters, or the OneTigris Stella 2P for light weight."
      },
      {
        "label": "Save if",
        "text": "Save with the GEERTOP 2-Person Backpacking for snow-ready coverage at a lower price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What makes a tent 4 season",
    "explanation": "A true 4 season tent has stronger poles, a fly that reaches the ground and a snow skirt to block spindrift. Ventilation is reduced to hold heat. Check the listing for the skirt and pole details."
  },
  {
    "criterion": "Waterproof rating and seams",
    "explanation": "3000mm handles heavy rain, and taped seams keep water out of the stitching. Silicone-coated nylon sheds snow well. Look for the rating and the seam detail."
  },
  {
    "criterion": "Condensation in cold",
    "explanation": "Cold nights cause breath moisture to freeze on tent walls. Vents and a gap under the fly lower it. Check for vents even in a 4 season tent."
  },
  {
    "criterion": "Weight and packed size",
    "explanation": "Winter tents weigh more than 3 season models. The Stella is 4.8 lb while the GEERTOP Blackout is 7.7 lb. Pick based on how far you carry it."
  },
  {
    "criterion": "Snow loads and pitching",
    "explanation": "Light snow is manageable, but a heavy load needs the snow cleared. Stake out guy lines and orient the door away from wind. Do not treat budget tents as expedition shelters."
  }
];

export const faq = [
  {
    "q": "Is a 4 season tent good in summer?",
    "a": "It works, but with less ventilation. Open the vents and mesh doors on the GEERTOP 2-Person Backpacking. The OneTigris Stella 2P has a mesh inner for airflow."
  },
  {
    "q": "What is the common mistake?",
    "a": "Expecting expedition performance from a budget 4 season tent. Check poles and guy lines, and pitch with care. These tents suit mild winter use."
  },
  {
    "q": "Is the blackout version worth it?",
    "a": "If you sleep during the day, yes, as with the GEERTOP 2-Person Blackout. Otherwise it adds weight and cost without much benefit."
  },
  {
    "q": "How do I pitch in snow?",
    "a": "Stamp a flat platform, stake the corners and snow skirt with buried objects, and guy out the fly. Keep the door sheltered. Clear snow from the walls."
  },
  {
    "q": "How do I limit condensation?",
    "a": "Open vents, avoid cooking inside and keep wet gear in the vestibule. Wipe the walls in the morning. Dry the tent before storage."
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
