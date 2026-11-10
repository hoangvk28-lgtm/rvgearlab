export const guideSlug = "best-canvas-tents-under-150";
export const guideTitle = "3 Best Canvas Tents Under 150 in 2026";
export const metaTitle = "Best Canvas Tents Under 150 in 2026";
export const metaDescription = "Best canvas tents under $150 compared on fabric, size, floor and setup, for campers who want a real bell or bushcraft shelter at the lowest price.";
export const mainKeyword = "best canvas tents under 150";
export const introParagraphs = [
  "A $150 ceiling is where true poly-cotton canvas starts to appear, but only in smaller formats like a 10 foot bell tent or a one person bushcraft shelter. Everything else at this price is a thin fabric dressed up as canvas.",
  "Three tents are here, and they are ranked by how much real canvas, floor area and setup ease you get for the money. Few good options sit under this price, so the order matters."
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
    "id": "best-canvas-tents-under-150-1",
    "rank": 1,
    "badge": "Best Value Under $150",
    "name": "SPECRAFT 10 FT Canvas Yurt Bell Tent for 3-4 Person",
    "price": "$142.02",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/516ZWePCOjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H3TR5QBW?tag=rvgearlab-20",
    "description": "The SPECRAFT is a 10 foot canvas bell tent with a 9.8 foot diameter and 6.6 foot peak, sold for 3 to 4 people. It has mixed TC cotton fabric, aluminum poles, double doors with mesh and fabric layers and a full mesh base.\n\nIt is the roomiest pick here by a wide margin, with space for a family where the TIYASTUN fits one. It also has real canvas, which the Canvas Cabin Dome does not clearly state.\n\nIt suits small families trying canvas for the first time. The doors roll up for airflow, and a carry bag and steel stakes are in the box.",
    "specs": [
      "9.8 ft diameter, 6.6 ft peak",
      "Mixed TC cotton, aluminum poles",
      "3 to 4 person bell tent"
    ],
    "pros": [
      "Roomiest tent here by far",
      "Aluminum poles are light and stable",
      "Double doors with mesh and fabric",
      "Carry bag and steel stakes included"
    ],
    "cons": [
      "Heavier than a dome tent to carry",
      "Sleeps 3 to 4, not a big group"
    ],
    "bestFor": "Small families",
    "take": "The roomiest real canvas tent you can get at this price.",
    "catch": "There is no stove jack, so it is a mild-weather canvas tent."
  },
  {
    "id": "best-canvas-tents-under-150-2",
    "rank": 2,
    "badge": "Best Solo Bushcraft",
    "name": "TIYASTUN Hot Tent Canvas Tent Single Person Tent 4 Season Tent Camping Shelter Survival Tent Motorcycle Tent M",
    "price": "$109.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/317H0oTVm6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CYKYYRJK?tag=rvgearlab-20",
    "description": "The TIYASTUN is a one person four-season tent in poly-cotton canvas with an anti-splash coating rated to 3000mm. It is roughly 142 inches wide and 75 inches deep with a 43 inch ridge, includes a mesh inner tent and sets up in about 15 minutes.\n\nIt is built for bushcraft and hot-tent camping rather than family use, which separates it from the SPECRAFT. Its poly-cotton resists condensation better than the polyester Canvas Cabin Dome.\n\nIt suits hunters, bushcrafters and solo winter campers who want a low shelter that breathes. The front curtain opens for airflow and a stove-friendly build suits cold camps.",
    "specs": [
      "Poly-cotton, 3000mm coating",
      "141.7 x 74.8 x 43.3 in",
      "Mesh inner tent included"
    ],
    "pros": [
      "Poly-cotton breathes and limits condensation",
      "Mesh inner tent keeps bugs out",
      "Sets up in about 15 minutes",
      "Low profile handles wind"
    ],
    "cons": [
      "Sleeps only one person",
      "Low 43 inch ridge limits sitting room"
    ],
    "bestFor": "Solo bushcraft and hunting",
    "take": "A tough, low solo canvas shelter for cold-weather camping.",
    "catch": "Treat it as a one-person tent, since gear and a second sleeper do not fit."
  },
  {
    "id": "best-canvas-tents-under-150-3",
    "rank": 3,
    "badge": "Best Budget Dome Cabin",
    "name": "Canvas Tent",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/5145OWkjyFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H4ZXMKCK?tag=rvgearlab-20",
    "description": "The Canvas Cabin Dome sleeps 2 to 4 people on a roomy dome frame with a wrap-around bathtub floor and fully taped seams. A large D-shaped door and big vent windows round out the build.\n\nIt is the least expensive tent in the group and the only one with a sewn-in floor. The SPECRAFT bell is a more authentic canvas build, while the TIYASTUN offers more cold-weather capability.\n\nIt suits family campers who prefer a standard dome layout and a sealed floor in mild weather. Pair it with a footprint for extra floor protection.",
    "specs": [
      "2 to 4 person dome",
      "Taped seams, bathtub floor",
      "D-shaped door, vent windows"
    ],
    "pros": [
      "Lowest price of the three",
      "Wrap-around bathtub floor",
      "Large D-door for easy entry",
      "Seams are fully taped"
    ],
    "cons": [
      "Three-season shelter only",
      "No stove jack for cold camps"
    ],
    "bestFor": "Mild-weather family trips",
    "take": "A simple, sealed dome for family weekends at the lowest cost.",
    "catch": "Check the fabric details before buying, because it is sold as canvas without a stated weight."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fabric authenticity",
    "description": "Looked for stated TC cotton or poly-cotton blends over thin coated polyester."
  },
  {
    "title": "Size for the money",
    "description": "Compared diameter and head height against sleepers listed."
  },
  {
    "title": "Pole and frame",
    "description": "Weighed aluminum and steel poles for wind and weight."
  },
  {
    "title": "Floor and doors",
    "description": "Checked for sealed floors, mesh doors and weather flaps."
  },
  {
    "title": "Stove readiness",
    "description": "Noted whether a tent is built for cold weather and heat or is a three-season shelter only."
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
    "subheading": "By Camper",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Family of three or four",
          "SPECRAFT 10 ft Bell",
          "Largest canvas floor here."
        ],
        [
          "Solo bushcraft camper",
          "TIYASTUN Solo",
          "Low poly-cotton shelter."
        ],
        [
          "Mild-weather dome user",
          "Canvas Cabin Dome",
          "Sealed floor, lowest price."
        ],
        [
          "Cold camp with a stove",
          "TIYASTUN Solo",
          "Built for hot-tent use."
        ],
        [
          "First-time canvas buyer",
          "SPECRAFT 10 ft Bell",
          "Easy bell layout."
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
          "$80 to $90",
          "Canvas Cabin Dome"
        ],
        [
          "$100 to $110",
          "TIYASTUN Solo"
        ],
        [
          "$140 to $150",
          "SPECRAFT 10 ft Bell"
        ]
      ]
    }
  },
  {
    "subheading": "Bell Tent vs Low Bushcraft Shelter",
    "cards": [
      {
        "label": "Bell tent",
        "text": "A bell tent has a central pole and high walls, giving standing room and space for a family. The SPECRAFT 10 ft Bell is the pick."
      },
      {
        "label": "Bushcraft shelter",
        "text": "A low, long tent stakes down tight and sheds wind with a smaller footprint, but it sleeps one. The TIYASTUN Solo is this type."
      }
    ],
    "note": "Pick the SPECRAFT 10 ft Bell for family nights and the TIYASTUN Solo for solo cold-weather trips."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Near $90, dome cabin",
          "Canvas Cabin Dome"
        ],
        [
          "Around $109, solo shelter",
          "TIYASTUN Solo"
        ],
        [
          "Around $142, family bell",
          "SPECRAFT 10 ft Bell"
        ]
      ]
    }
  },
  {
    "subheading": "A First Canvas Tent Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Stated poly-cotton fabric, aluminum poles and a simple pitch."
      },
      {
        "label": "In this comparison",
        "text": "The SPECRAFT 10 ft Bell has TC cotton and aluminum poles, and the TIYASTUN Solo sets up in about 15 minutes."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend toward the cap on the SPECRAFT 10 ft Bell if you need family space, or the TIYASTUN Solo if you camp alone in cold weather."
      },
      {
        "label": "Save if",
        "text": "Save with the Canvas Cabin Dome for mild weekend trips where a sealed floor matters more than real canvas."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What the fabric is made of",
    "explanation": "True cotton canvas, poly-cotton TC and coated polyester behave very differently. Poly-cotton at 210 to 285 grams per square meter breathes, resists sparks and swells to seal when wet, while polyester sheds water but traps condensation. Look for the blend in the product title and details."
  },
  {
    "criterion": "Floor included or not",
    "explanation": "A sewn-in floor keeps bugs and ground water out, while many bell tents ship with a removable PVC floor or none at all. A bathtub floor with taped seams suits wet camps, and a removable floor suits hot weather. Check whether the floor is attached, removable or sold separately."
  },
  {
    "criterion": "Interior size and headroom",
    "explanation": "A 10 foot bell tent has a 6.6 foot peak but walls only a couple of feet high, so standing room sits near the center. A 3 to 4 person rating means sleeping pads side by side, not extra gear. Allow about 20 square feet per sleeper."
  },
  {
    "criterion": "Stove and winter readiness",
    "explanation": "A built-in stove jack is a fire-resistant opening for a wood stove pipe to pass through the wall. If a tent has none, you must not run a stove inside, since hot pipe against fabric is a fire risk. Treat any tent without a stove jack as a three-season shelter and add a CO alarm for any heater."
  },
  {
    "criterion": "Weight and carry",
    "explanation": "Canvas is heavy, so a 10 foot bell tent can weigh 40 to 60 pounds in the bag, and wet canvas weighs more. Plan on car camping or very short carries rather than hiking in. Look for the packed weight and bag dimensions before buying."
  }
];

export const faq = [
  {
    "q": "Is the SPECRAFT a real canvas tent?",
    "a": "It uses mixed TC cotton fabric, which is a poly-cotton blend, and aluminum poles. That is the common construction for modern canvas bell tents. It is a mild-weather tent because no stove jack is mentioned."
  },
  {
    "q": "What is a poly-cotton tent?",
    "a": "Poly-cotton, often called TC, blends polyester and cotton. It breathes like cotton, resists sparks better than nylon and dries faster than pure cotton. The TIYASTUN Solo adds an anti-splash coating rated to 3000mm for rain."
  },
  {
    "q": "Is the Canvas Cabin Dome better than a cheap dome?",
    "a": "It adds taped seams and a wrap-around floor, which many bargain domes skip. It does not clearly state a canvas weight, so treat it as a sealed family dome. The SPECRAFT is the better pick if canvas matters to you."
  },
  {
    "q": "How do I set up a bell tent alone?",
    "a": "Peg the floor corners first, then stand the center pole and walk the walls out one side at a time. Guy out each rope and tighten the tensioners evenly. Two people finish a 10 foot bell in about 20 minutes."
  },
  {
    "q": "How do I stop mildew on canvas?",
    "a": "Never pack a damp tent, and dry it in the sun before storing. Keep vents open on humid nights and store the tent in a breathable bag. A few hours of airing beats any spray."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Canvas Tents",
    "href": "/tents-shelter/best-canvas-tents"
  },
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
  }
];
