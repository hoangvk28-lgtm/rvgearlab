export const guideSlug = "best-camping-tent-under-100";
export const guideTitle = "5 Best Camping Tent Under 100 in 2026";
export const metaTitle = "Best Camping Tent Under 100 in 2026";
export const metaDescription = "Best camping tents under $100: five budget tents from a 4-person instant cabin to a 2.2 lb one-person bivy, with notes on what $100 buys.";
export const mainKeyword = "best camping tent under 100";
export const introParagraphs = [
  "Under $100 you can buy a dry, easy-to-pitch camping tent for one to four people, as long as you accept simple fabrics and basic poles. The key is picking the right size and being honest about the weather.",
  "The five picks cover instant cabin, dome and solo bivy designs. Each is ordered by how well it matches a common camping style."
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
    "id": "best-camping-tent-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "4 Person Instant Tents for Camping Setup in 50s",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41i0yAesF5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GD6Z2HCS?tag=rvgearlab-amz-20",
    "description": "The Purebox 4 person instant tent has pre-attached poles and sets up in about 50 seconds. It measures 8.04 by 8.04 feet with a 59 inch center height, and uses 2000mm PU-coated fabric with taped seams.\n\nCompared with the CAMEL CROWN, it offers a faster pitch and a cabin-like shape. Against the Wakeman, it sleeps four and has a mesh ceiling.\n\nIt suits families and groups who value quick setup at the car. Mesh windows and a mesh ceiling improve airflow.",
    "specs": [
      "4 person, 8.04 x 8.04 ft",
      "Instant setup in about 50 seconds",
      "2000mm PU, taped seams"
    ],
    "pros": [
      "Pitches in about a minute",
      "Roomy 8 by 8 foot floor",
      "Taped seams with 2000mm fabric",
      "Mesh windows and ceiling"
    ],
    "cons": [
      "Pre-attached poles add weight",
      "Not meant for hiking"
    ],
    "bestFor": "Families at the car",
    "take": "The fastest and roomiest pick under $100.",
    "catch": "It is heavy and bulky for any carry."
  },
  {
    "id": "best-camping-tent-under-100-2",
    "rank": 2,
    "badge": "Best Size Range",
    "name": "CAMEL CROWN Tents for Camping 2/3/4/5 Person Camping Dome Tent",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31lbFBXxP+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08RJ92BGM?tag=rvgearlab-amz-20",
    "description": "The CAMEL CROWN dome is sold in 2, 3, 4 and 5 person sizes, with a polyester outer shell, 8.5mm glass fiber poles and a PU2000 150D Oxford floor. It has a double-layer dual-purpose top and mosquito-proof screens.\n\nCompared with the Purebox, it is a standard dome with a choice of sizes. Against the Wind Tour, it adds guy ropes and a double layer.\n\nIt suits campers who want to match tent size to group size. Easy assembly takes only a few minutes.",
    "specs": [
      "2 to 5 person sizes",
      "PU2000 150D Oxford floor",
      "Double layer, mosquito screens"
    ],
    "pros": [
      "Four size options",
      "Oxford floor resists wear",
      "Mosquito screens block bugs",
      "Quick assembly"
    ],
    "cons": [
      "Fiberglass frame is less durable",
      "Shared listing across sizes"
    ],
    "bestFor": "Groups of any size",
    "take": "A flexible dome. Check the person count before ordering.",
    "catch": "The listing covers four sizes, so pick carefully."
  },
  {
    "id": "best-camping-tent-under-100-3",
    "rank": 3,
    "badge": "Best Solo Light",
    "name": "TGpao Easy Set Up Ultralight 1 Person Bivy Tent for Camping",
    "price": "$84.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VmjAIuWrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FNPVH7DB?tag=rvgearlab-amz-20",
    "description": "The TGpao is a one-person bivy tent that weighs 2.2 pounds, with 7001 aluminum poles and a compact carry bag. The outer tent lists 2000 to 3000mm waterproofing and the floor PU2000, with a freestanding 7-section pole frame.\n\nCompared with the other tents, it is a solo shelter and much lighter. Against the Wind Tour, it adds freestanding aluminum poles and more waterproofing detail.\n\nIt suits solo campers who want a very light shelter. The listing says it fits people under 6 ft 4 in.",
    "specs": [
      "2.2 lb, 7001 aluminum poles",
      "2000 to 3000mm outer, PU2000 floor",
      "Freestanding, 80 x 230 cm"
    ],
    "pros": [
      "Light at 2.2 pounds",
      "Freestanding aluminum frame",
      "Stated waterproof numbers",
      "Fits people up to 6 ft 4 in"
    ],
    "cons": [
      "Only one person fits",
      "Narrow interior"
    ],
    "bestFor": "Solo light packers",
    "take": "A very light solo shelter at a low price.",
    "catch": "It sleeps one person and little else."
  },
  {
    "id": "best-camping-tent-under-100-4",
    "rank": 4,
    "badge": "Best Light Two-Person",
    "name": "Wind Tour Easy Setup Breathable Mesh Tent for Backpacking & Outdoor Green",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/315z9lTAP+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJ9DYMXT?tag=rvgearlab-amz-20",
    "description": "The Wind Tour is a two-person tent that weighs 2.56 pounds and measures 77 by 57 by 41 inches. It uses 190T polyester and a 150D Oxford floor, with fiberglass poles and an included storage bag.\n\nCompared with the Wakeman, it is lighter and more compact. Against the TGpao, it fits two people.\n\nIt suits warm-weather campers who want a light two-person for festivals or hikes. A mesh design keeps airflow strong.",
    "specs": [
      "2.56 lb, 77 x 57 x 41 inches",
      "190T polyester, 150D floor",
      "Fiberglass poles, storage bag"
    ],
    "pros": [
      "Light for a two-person",
      "Mesh design breathes well",
      "Oxford floor resists tears",
      "Quick pole setup"
    ],
    "cons": [
      "Fiberglass poles are less durable",
      "Mesh gives less rain cover"
    ],
    "bestFor": "Warm-weather duos",
    "take": "The lightest two-person under $100.",
    "catch": "It suits warm and dry nights best."
  },
  {
    "id": "best-camping-tent-under-100-5",
    "rank": 5,
    "badge": "Best Basic Two-Person",
    "name": "2 Person Camping Tent with Rain Fly and Carrying Bag",
    "price": "$25.63",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41V04YYaPYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07YP7JWRN?tag=rvgearlab-amz-20",
    "description": "The Wakeman two-person tent has a D-style door, two fiberglass poles, a removable rain fly and an interior storage pocket. The dual-layer door has an inner screen and an outer zipped layer.\n\nCompared with the Wind Tour, it adds a removable fly and a storage pocket. Against the Purebox, it is for two and carries well in a bag.\n\nIt suits casual campers who want a simple, cheap shelter. Setup and takedown are quick.",
    "specs": [
      "D-style door, removable fly",
      "Two fiberglass poles",
      "Interior storage pocket"
    ],
    "pros": [
      "Removable rain fly",
      "Interior pocket for small gear",
      "Dual-layer door",
      "Easy setup and takedown"
    ],
    "cons": [
      "No waterproof rating listed",
      "Fiberglass poles"
    ],
    "bestFor": "Casual weekend duos",
    "take": "A cheap, simple tent for easy trips.",
    "catch": "Few numbers are given, so use it in fair weather."
  }
];

export const howWeEvaluated = [
  {
    "title": "Budget reality",
    "description": "Each tent was compared on stated fabric, poles and seams for what a $100 ceiling can buy."
  },
  {
    "title": "Fit to group",
    "description": "Capacity and floor size were compared against the number of campers."
  },
  {
    "title": "Setup effort",
    "description": "Instant, dome and bivy designs differ in pitch time."
  },
  {
    "title": "Weight and packing",
    "description": "Stated weights decide which tents suit a carry."
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
    "subheading": "By Group Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Family of four, car camping",
          "Purebox 4P Instant",
          "8 by 8 foot floor, 50 second setup."
        ],
        [
          "Group, choose your size",
          "CAMEL CROWN Dome",
          "2 to 5 person options."
        ],
        [
          "Solo, light",
          "TGpao 1P Bivy",
          "2.2 pounds, aluminum poles."
        ],
        [
          "Two, light and breathable",
          "Wind Tour 2P",
          "2.56 pounds."
        ],
        [
          "Two, basic and cheap",
          "Wakeman 2P",
          "Removable fly, pocket."
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
          "$20 to $30",
          "Wakeman 2P or Wind Tour 2P"
        ],
        [
          "$30 to $90",
          "CAMEL CROWN Dome or TGpao 1P Bivy"
        ],
        [
          "$80 to $90",
          "Purebox 4P Instant"
        ]
      ]
    }
  },
  {
    "subheading": "Instant vs Dome",
    "cards": [
      {
        "label": "Instant",
        "text": "Pre-attached poles pitch in seconds but weigh more. The Purebox 4P Instant is the instant pick."
      },
      {
        "label": "Dome",
        "text": "Separate poles are lighter and cheaper but take minutes. The CAMEL CROWN Dome, Wind Tour 2P and Wakeman 2P are domes."
      }
    ],
    "note": "Choose the Purebox 4P Instant if speed matters, and a dome if you want to carry it."
  },
  {
    "subheading": "By Carry Distance",
    "table": {
      "headers": [
        "How far you walk",
        "Recommended pick"
      ],
      "rows": [
        [
          "Car camping",
          "Purebox 4P Instant"
        ],
        [
          "Short hike",
          "Wind Tour 2P"
        ],
        [
          "Solo hike",
          "TGpao 1P Bivy"
        ]
      ]
    }
  },
  {
    "subheading": "For First-Time Campers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Easy setup and a size that matches your group."
      },
      {
        "label": "In this comparison",
        "text": "The Purebox 4P Instant lists a 50-second setup and a 4 person size."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend toward the Purebox 4P Instant if you camp with a family, since it gives the most room and fastest pitch."
      },
      {
        "label": "Save if",
        "text": "Save with the Wakeman 2P if you camp as a pair in good weather, since it costs the least."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What this budget buys",
    "explanation": "Under $100, you can buy a simple, dry shelter, not a storm-proof one. Fiberglass poles and polyester fabric are common. Expect to use it in fair or mild weather."
  },
  {
    "criterion": "Choosing size",
    "explanation": "Tents are rated tight. A two-person tent fits two pads with little space. If you carry gear in, size up one person."
  },
  {
    "criterion": "Setup style",
    "explanation": "Instant tents like the Purebox 4P Instant save time, while domes like the CAMEL CROWN Dome take a few minutes. Choose by patience and group size. Check the listing for the stated pitch time."
  },
  {
    "criterion": "Waterproof number",
    "explanation": "A listed millimeter rating, like the 2000mm on the Purebox 4P Instant, says how much water pressure fabric resists. 2000mm is basic. Check for taped seams."
  },
  {
    "criterion": "Weight and carry",
    "explanation": "A 2.2 pound TGpao is a hike-ready shelter, while a pre-pole cabin tent is for the car. Match weight to your trip. Look for a stated weight."
  },
  {
    "criterion": "Pole material",
    "explanation": "Aluminum poles last longer than fiberglass. The TGpao lists 7001 aluminum. Check the listing."
  }
];

export const faq = [
  {
    "q": "Is a $100 tent worth it?",
    "a": "Yes, for fair weather. The Purebox 4P Instant lists taped seams. For storms, spend more."
  },
  {
    "q": "Can I use a tent for one person?",
    "a": "Yes, but size matters. The TGpao 1P Bivy is a solo shelter. Others are more spacious."
  },
  {
    "q": "How do I waterproof a cheap tent?",
    "a": "Seal seams with seam sealer and use a footprint. Pitch the fly tight. Avoid low spots."
  },
  {
    "q": "How do I choose a size?",
    "a": "Count campers and add one for gear. A 4 person tent fits a family. Check floor dimensions."
  },
  {
    "q": "Do instant tents last?",
    "a": "They are fine for car camping. Pre-attached poles can wear. Store it dry."
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
