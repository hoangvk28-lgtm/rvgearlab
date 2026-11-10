export const guideSlug = "best-camping-tables-under-50";
export const guideTitle = "5 Best Camping Tables Under 50 in 2026";
export const metaTitle = "Best Camping Tables Under 50 in 2026";
export const metaDescription = "Best camping tables under $50: five compact folding tables and two-packs compared on tabletop size, weight, height and storage for small campsites.";
export const mainKeyword = "best camping tables under 50";
export const introParagraphs = [
  "Fifty dollars buys a small, light camping table, but not a full family dining table. The five picks here cost about $21 to $32 and mostly have tops between 14 and 24 inches wide, so they suit coffee, a stove or snacks rather than a six-person dinner.",
  "They were compared on tabletop size, weight, folded size, height and extras like side racks and storage nets. The ranking favors the table that gives the most usable surface and storage for the price, and notes where the cheapest options run out of space."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/furniture-chairs-by-tent.webp";
export const heroImageAlt = "Two folding camping chairs beside a tent in a redwood forest";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-camping-tables-under-50-1",
    "rank": 1,
    "badge": "Best Value Under $50",
    "name": "Titanker Small Camping Table Foldable 2ft",
    "price": "$31.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41PP3ImkUpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQYJV24G?tag=rvgearlab-amz-20",
    "description": "The Titanker 2ft opens to 24.4 by 16.3 inches at 20.9 inches high and folds to 12.2 by 16.3 by 2.7 inches. It is 90 percent aluminum with a density-board top, weighs about 6 lb and adds side racks and a storage net for 50 percent more storage.\n\nAt about $32 it sits just above the hediya two-pack and gives the largest single top in this guide. Compared with the Grope, it weighs more and adds racks and a net, so cups and snacks have a place that is not the tabletop.\n\nIt suits two to four people who want one sturdy table for cards, coffee and a stove. The folded slab slips behind a seat or into a trunk.",
    "specs": [
      "24.4 by 16.3 inch top, 6 lb",
      "Aluminum frame, density-board top",
      "Side racks and storage net"
    ],
    "pros": [
      "Largest single top here",
      "Side racks add storage",
      "Folds to 2.7 inches thick",
      "Aluminum frame resists rust"
    ],
    "cons": [
      "Heavier than the compact tables",
      "Top is small for a full meal"
    ],
    "bestFor": "Couples and small groups",
    "take": "A sturdy two-foot table with built-in storage for the money.",
    "catch": "At 6 lb it is heavier than the pack-down tables."
  },
  {
    "id": "best-camping-tables-under-50-2",
    "rank": 2,
    "badge": "Best Height Adjustable",
    "name": "WildFinder Folding Grill Table",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41N1pVSIsWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVN9HJG6?tag=rvgearlab-amz-20",
    "description": "The WildFinder is a 2 by 1.3 foot grill table with three heights of 10.2, 19.6 and 27.5 inches and a heat-resistant metal mesh top. It has a triangular frame with non-slip feet and unfolds in seconds without tools.\n\nAt about $30 it costs less than the Titanker 2ft and adds height adjustment that the Titanker 2ft lacks. The top is smaller than the Titanker's, so it suits a stove or small grill more than a dinner spread.\n\nIt suits campers who want one table for a stove at ground level and a prep surface at standing height. The mesh top handles hot pots.",
    "specs": [
      "10.2, 19.6 or 27.5 inch heights",
      "Heat-resistant metal mesh top",
      "Triangular frame, non-slip feet"
    ],
    "pros": [
      "Three adjustable heights",
      "Metal mesh top handles heat",
      "Non-slip feet grip uneven ground",
      "Sets up in seconds"
    ],
    "cons": [
      "Smallest surface here",
      "Light frame for heavy grills"
    ],
    "bestFor": "Stoves and small grills",
    "take": "The only pick here that raises to standing height.",
    "catch": "Small top and a light frame, so keep heavy grills off it."
  },
  {
    "id": "best-camping-tables-under-50-3",
    "rank": 3,
    "badge": "Best Two-Table Pack",
    "name": "hediya 2 Pack Camping Table Foldable",
    "price": "$32.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41LYTJB4INL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GCDTYX7V?tag=rvgearlab-amz-20",
    "description": "The hediya set includes two aluminum folding tables, each weighing 2.46 lb with a 16.5 by 13.9 inch top. Triangular support structures and 14 mm legs hold each table, and each sets up without tools.\n\nAt about $30 for two tables it works out to $15 each, below the Titanker 2ft. Two tables can sit side by side for more room, which a single table cannot do.\n\nIt suits families who want a spot beside each chair. The two together weigh less than one larger table.",
    "specs": [
      "Two tables, 2.46 lb each",
      "16.5 by 13.9 inch tops",
      "14 mm legs, triangular braces"
    ],
    "pros": [
      "Two tables in one pack",
      "Only 2.46 lb each",
      "Toolless setup",
      "Pair can sit side by side"
    ],
    "cons": [
      "Small tops hold little",
      "Not for heavy cookware"
    ],
    "bestFor": "Families with several chairs",
    "take": "Two light side tables for the price of one.",
    "catch": "Small tops and light frames limit what you can put on them."
  },
  {
    "id": "best-camping-tables-under-50-4",
    "rank": 4,
    "badge": "Best Compact Pair",
    "name": "Opliy 2-Pack Portable Camping Table",
    "price": "$29.68",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41B9i3NSgIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GTVKNSJW?tag=rvgearlab-amz-20",
    "description": "The Opliy pair uses a titanium-coated steel alloy at 2.64 lb each with 14 mm legs and a 17 mm frame, rated to hold 75 lb. Each table unfolds to 15.7 by 13.8 by 11.8 inches and folds to 15.8 by 6.7 by 6.7 inches with a carry bag.\n\nAt about $30 it costs the same as the hediya and sits lower at 11.8 inches, which pairs with low backpacking chairs. The waterproof, scratch-resistant top wipes clean after sauce or sand.\n\nIt suits campers who sit low and want a table that fits their chair height. The pair fits under a car seat.",
    "specs": [
      "2.64 lb each, holds 75 lb",
      "Waterproof wipe-clean top",
      "Folds to 15.8 by 6.7 inches"
    ],
    "pros": [
      "Low height matches camp chairs",
      "Waterproof top wipes clean",
      "Holds up to 75 lb",
      "Carry bag included"
    ],
    "cons": [
      "Low height is awkward for standing",
      "Small tops"
    ],
    "bestFor": "Low camp chairs",
    "take": "A pair of low tables that sit at the right height for backpacking chairs.",
    "catch": "The 11.8 inch height is too low for prep standing up."
  },
  {
    "id": "best-camping-tables-under-50-5",
    "rank": 5,
    "badge": "Best Lightest Pick",
    "name": "Grope Portable Camping Table",
    "price": "$20.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OeGXi70EL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07V2NWMRR?tag=rvgearlab-amz-20",
    "description": "The Grope is an aluminum folding table with a painted waterproof top, a hinge design with foot caps and a carry bag. The small size weighs 1.88 lb and sets up without tools.\n\nAt about $21 it is the cheapest table here and the lightest of the group. It gives up the side racks of the Titanker 2ft and the height options of the WildFinder.\n\nIt suits solo campers and hikers who want a quick side table. It also works at the beach.",
    "specs": [
      "1.88 lb aluminum, small size",
      "Painted waterproof top",
      "Hinges with foot caps"
    ],
    "pros": [
      "Lightest table in this guide",
      "Aluminum legs do not fold or bend",
      "Waterproof top wipes clean",
      "Carry bag included"
    ],
    "cons": [
      "Smallest surface here",
      "No storage"
    ],
    "bestFor": "Solo trips and the beach",
    "take": "The lightest, cheapest side table for solo campers.",
    "catch": "Small and without storage."
  }
];

export const howWeEvaluated = [
  {
    "title": "Tabletop size",
    "description": "Surfaces from small 14 inch tops to 24 inch tops were compared."
  },
  {
    "title": "Weight",
    "description": "Weights from 1.88 to 6 lb were compared."
  },
  {
    "title": "Height",
    "description": "Fixed and adjustable heights were compared against camp chairs."
  },
  {
    "title": "Storage",
    "description": "Side racks, nets and mesh tops were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick sits at or under $50, and the top pick offers the most usable surface per dollar."
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
    "subheading": "By use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Couples, coffee and cards",
          "Titanker 2ft",
          "Largest top with side racks."
        ],
        [
          "Stove at any height",
          "WildFinder Grill Table",
          "Three heights and a heat-resistant top."
        ],
        [
          "Family seating, one per person",
          "hediya 2-Pack",
          "Two tables, 2.46 lb each."
        ],
        [
          "Low backpacking chairs",
          "Opliy 2-Pack",
          "11.8 inch height, holds 75 lb."
        ],
        [
          "Solo trips, beach",
          "Grope Aluminum",
          "1.88 lb and about $21."
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
          "Grope Aluminum or Opliy 2-Pack"
        ],
        [
          "$20 to $30",
          "hediya 2-Pack or WildFinder Grill Table"
        ],
        [
          "$30 to $40",
          "Titanker 2ft"
        ]
      ]
    }
  },
  {
    "subheading": "Single table vs pair",
    "cards": [
      {
        "label": "Single table",
        "text": "The Titanker 2ft, WildFinder Grill Table and Grope Aluminum give one surface."
      },
      {
        "label": "Pair",
        "text": "The hediya 2-Pack and Opliy 2-Pack give two small tables you can place beside each chair."
      }
    ],
    "note": "Take the Titanker 2ft for a shared table and a pair for individual spots."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $21",
          "Grope Aluminum"
        ],
        [
          "About $30",
          "hediya 2-Pack"
        ],
        [
          "About $30, low pair",
          "Opliy 2-Pack"
        ],
        [
          "About $30, adjustable",
          "WildFinder Grill Table"
        ],
        [
          "About $32",
          "Titanker 2ft"
        ]
      ]
    }
  },
  {
    "subheading": "For solo backpacking trips specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a table under 3 lb that folds under 16 inches and fits a pack pocket."
      },
      {
        "label": "In this comparison",
        "text": "The Grope Aluminum weighs 1.88 lb and is the lightest pick. The Opliy 2-Pack gives two low tables for a chair."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you need storage or a big top: the Titanker 2ft adds side racks and a storage net at about $32."
      },
      {
        "label": "Save if",
        "text": "Save if you only need a small side table: the Grope Aluminum at about $21 is the lightest, and the hediya 2-Pack gives two for under $30."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Tabletop size for your group",
    "explanation": "A 24 by 16 inch top fits two plates and a drink, while a 16 by 14 inch top fits one plate or a stove. For more than two people, use two tables or a three-foot model. Measure your stove or plate set before buying."
  },
  {
    "criterion": "Height versus camp chairs",
    "explanation": "A table near 20 inches suits a regular camp chair, while one at 11.8 inches pairs with low backpacking chairs. A mismatch means leaning forward to eat or reaching up to cook, which gets tiring over a whole evening. Check the seat height of your chair against the table height, and add a few inches for elbow room."
  },
  {
    "criterion": "Weight versus stability",
    "explanation": "A 2 lb table is easy to carry but can tip on uneven ground, while a 6 lb table sits steadier under a full pot. Wide triangular legs and non-slip feet add stability at any weight. Press down on a corner when you set it up, and keep heavy items near the center of the top."
  },
  {
    "criterion": "Heat resistance",
    "explanation": "A metal mesh top handles hot pots and small stoves, while density board or plastic can warp or scorch under direct heat. The WildFinder Grill Table is built for heat, and board tops need a mat. Keep a stove centered, use a heat-safe mat on any board top, and never leave a lit stove unattended."
  },
  {
    "criterion": "Folded size",
    "explanation": "A table that folds to 2.7 inches thick slides behind a car seat, while a rolled or box-shaped table needs a bag and floor space. Folded size matters more than weight when the trunk is full. Check the folded dimensions against your trunk or pack pocket before buying, and leave an inch of margin."
  },
  {
    "criterion": "Waterproof top",
    "explanation": "A waterproof or painted top wipes clean after spilled sauce, coffee or rain, while bare board soaks up liquid and can swell. This matters because camp tables get messy fast and often stay wet overnight. Wipe the top after every use, dry it before folding, and avoid leaving a board-topped table out in rain."
  }
];

export const faq = [
  {
    "q": "Can a $30 table hold a camp stove?",
    "a": "A table with a heat-resistant top can. The WildFinder Grill Table has a metal mesh top, while density-board tops like the Titanker 2ft should use a heat mat under a stove. Keep the stove centered and never leave it unattended."
  },
  {
    "q": "What mistake do buyers make with small camp tables?",
    "a": "Many choose a table too small for their stove and plates, then balance gear on a cooler or the ground. Measure your stove and plate set before buying. The Titanker 2ft has the biggest top and side racks, which keeps small items off the tabletop."
  },
  {
    "q": "Are two small tables better than one?",
    "a": "For several chairs, yes. The hediya 2-Pack and Opliy 2-Pack cost about $30 for two tables and can sit side by side. A single larger table is better if you need to place a big pot."
  },
  {
    "q": "How do I set up a folding camp table?",
    "a": "Unfold the legs until they lock, set the top on level ground and press down to check it is stable. The WildFinder Grill Table sets up in seconds. Press a corner to test for wobble."
  },
  {
    "q": "How should I clean and store a camp table?",
    "a": "Wipe the top with a damp cloth and dry the hinges before folding so the metal does not corrode. Store it flat in its bag in a dry place so the legs do not bend. Check the joints for sand and grit before the next trip."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Showers",
    "href": "/camp-furniture/best-camping-showers"
  },
  {
    "title": "Best Camping Tables",
    "href": "/camp-furniture/best-camping-tables"
  },
  {
    "title": "Best Camping Shower With Heater",
    "href": "/camp-furniture/best-camping-shower-with-heater"
  },
  {
    "title": "Best Camping Shower With Hot Water",
    "href": "/camp-furniture/best-camping-shower-with-hot-water"
  }
];
