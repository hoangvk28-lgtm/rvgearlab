export const guideSlug = "best-lightweight-camping-tents";
export const guideTitle = "4 Best Lightweight Camping Tents in 2026";
export const metaTitle = "Best Lightweight Camping Tents in 2026";
export const metaDescription = "Best lightweight camping tents compared on stated weight, packed size, pole material and weather build for hikers and light car campers.";
export const mainKeyword = "best lightweight camping tents";
export const introParagraphs = [
  "A lightweight camping tent earns the name in the numbers: a stated weight, a small packed size and aluminum or fiberglass poles that do not add bulk. Some listings print the weight and some only say lightweight in the title, so the list separates the two.",
  "Four tents made the cut, from a 4.4 lb solo clip tent to a 5.5 lb two-person with aluminum poles. They were ranked by how clearly each listing states weight, floor size and weather rating together."
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
    "id": "best-lightweight-camping-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Forceatt Tent for 2 Person is Waterproof and Windproof",
    "price": "$75.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31LJHCY0T9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08F7HQHXQ?tag=rvgearlab-amz-20",
    "description": "The Forceatt weighs 5.5 lb and has an 88.6 by 53.1 inch floor with a 43.3 inch interior height. It uses 7001 series aluminum poles, a welded floor and a 3000mm waterproof rating, with two D-shaped doors and two vestibules.\n\nAgainst the Night Cat it sleeps two instead of one and adds a second vestibule for gear. Compared with the BISINNA it prints an exact weight and a waterproof index, and it costs more than any other tent here.\n\nIt suits two hikers who want to count ounces without losing a door each. A large mesh window and two ceiling vents help it vent.",
    "specs": [
      "5.5 lb, 7001 aluminum poles",
      "88.6 x 53.1 in floor",
      "3000mm rating, welded floor"
    ],
    "pros": [
      "Weight is printed as 5.5 lb",
      "Two doors and two vestibules",
      "Aluminum poles keep the packed bulk down",
      "Pitches in about 3 minutes"
    ],
    "cons": [
      "Priciest of the four",
      "Floor is snug for two large adults"
    ],
    "bestFor": "Two-person hiking pairs",
    "take": "The best-documented lightweight two-person tent here, with weight, floor and rating all stated.",
    "catch": "At 53.1 inches wide, two wide sleeping pads leave little spare floor."
  },
  {
    "id": "best-lightweight-camping-tents-2",
    "rank": 2,
    "badge": "Best Solo Weight",
    "name": "Night Cat Upgraded Backpacking Tents 1 2 Persons Easy Clip Setup Camping Tent Adults Scouts Heavy Rainproof Co",
    "price": "$38.86",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41e2F-BIeiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CCV98MM9?tag=rvgearlab-amz-20",
    "description": "The Night Cat is the lightest tent here at a stated 4.4 lb, and it packs to 16.5 by 4.7 by 4.7 inches. The 210T taffeta fly and 150D oxford floor are both rated PU 3000 with taped seams, and the poles attach with clips instead of sleeves.\n\nAgainst the Forceatt it saves over a pound, and it sleeps one adult plus, per the listing, one child. Compared with the BISINNA it has the smaller packed size and a faster clip pitch.\n\nIt suits a solo hiker or a parent and child on a short trail. The roof mesh and a rainfly looped to the roof cut bug and rain problems.",
    "specs": [
      "4.4 lb, packs 16.5 in long",
      "210T fly and 150D floor, PU 3000",
      "Clip pole setup"
    ],
    "pros": [
      "Lightest tent in the group",
      "Packs to 16.5 x 4.7 x 4.7 inches",
      "Both fly and floor rated PU 3000",
      "Clips replace fiddly pole sleeves"
    ],
    "cons": [
      "Sized for one adult",
      "Fiberglass poles flex more than aluminum"
    ],
    "bestFor": "Solo hikers on short trails",
    "take": "The lightest and most compact tent here, built around a one-person floor.",
    "catch": "The 7 by 3.8 ft footprint is one adult plus, at most, a child."
  },
  {
    "id": "best-lightweight-camping-tents-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "OLIXIS Camping Tent 2 Person",
    "price": "$26.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41jly-iZ5nL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GR4YJXTP?tag=rvgearlab-amz-20",
    "description": "The OLIXIS is listed at 5.8 lb in the 2-person size and 8.7 lb in the 4-person size, and folds into a compact carry bag. It adds a mesh door, a side window, dual skylights and a ground vent to a classic dome with a 110 g PE groundsheet.\n\nIt is the cheapest here and weighs about 0.3 lb more than the Forceatt. Against the BISINNA it states its weight and uses fiberglass poles with 7 stakes and 6 guy ropes.\n\nIt suits car campers and fishing trips where price counts for more than ounces. A pole layout simple enough for a 3 to 5 minute pitch helps beginners.",
    "specs": [
      "5.8 lb in 2-person size",
      "Four ventilation points",
      "7 stakes, 6 guy ropes"
    ],
    "pros": [
      "Lowest price of the four",
      "Weight stated for both sizes",
      "Mesh door, skylights and ground vent",
      "Pitches in about 3 to 5 minutes"
    ],
    "cons": [
      "Fiberglass poles, not aluminum",
      "No waterproof rating in mm"
    ],
    "bestFor": "Budget car camping and fishing",
    "take": "A light, cheap dome that suits short trips better than long treks.",
    "catch": "The listing covers two sizes, so choose 2-person to get the 5.8 lb weight."
  },
  {
    "id": "best-lightweight-camping-tents-4",
    "rank": 4,
    "badge": "Best Aluminum Stakes",
    "name": "BISINNA 2/4 Person Camping Tent Lightweight Waterproof Backpacking Tent",
    "price": "$46.54",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31T6nIpD4XS._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07NVDNX3Q?tag=rvgearlab-amz-20",
    "description": "The BISINNA uses a 190T polyester taffeta body, two aluminum poles and 10 aluminum pegs, and the listing calls it a lightweight hiking tent. It unfolds to roughly 102 by 83 by 47 inches, with two D-shaped doors and a free-standing design.\n\nAgainst the Forceatt it costs about 29 dollars less and shares the two-door layout. Compared with the OLIXIS it swaps fiberglass for aluminum poles and adds aluminum stakes.\n\nIt suits budget hikers who want a free-standing pitch that one person can manage. The bag holds the inner tent, flysheet, poles, ropes and stakes.",
    "specs": [
      "Two aluminum poles, 10 stakes",
      "2 D-shaped doors",
      "Free-standing design"
    ],
    "pros": [
      "Aluminum poles and aluminum pegs",
      "Two doors with dual zippers",
      "Free-standing, one-person pitch",
      "Large mesh sections for airflow"
    ],
    "cons": [
      "No weight printed on the listing",
      "190T fabric is thinner than rivals"
    ],
    "bestFor": "Budget hikers wanting aluminum",
    "take": "A budget free-standing tent with an all-aluminum frame and stake kit.",
    "catch": "The listing prints no weight, so the lightweight label is unquantified."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated weight",
    "description": "Printed weights from 4.4 lb to 5.8 lb were compared, and tents with no weight were marked down."
  },
  {
    "title": "Packed size",
    "description": "Folded length and bag size were compared for backpack and trunk fit."
  },
  {
    "title": "Pole and stake material",
    "description": "Aluminum and fiberglass frames and stake kits were compared for weight and strength."
  },
  {
    "title": "Weather rating",
    "description": "PU ratings, taped seams and welded floors were compared for rain protection."
  },
  {
    "title": "Floor for the weight",
    "description": "Floor area per pound was compared so a light tent still has sleeping room."
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
          "Two hikers counting ounces",
          "Forceatt 2-Person Backpacking Tent",
          "5.5 lb with aluminum poles and two vestibules."
        ],
        [
          "Solo hiker or parent and child",
          "Night Cat 1-2 Person Clip Tent",
          "4.4 lb and a 16.5 inch pack."
        ],
        [
          "Car camping on a tight budget",
          "OLIXIS 2-Person Dome Tent",
          "Lowest price, 5.8 lb stated."
        ],
        [
          "Want an all-aluminum kit",
          "BISINNA 2-4 Person Backpacking Tent",
          "Aluminum poles and 10 aluminum pegs."
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
          "$20 to $40",
          "OLIXIS 2-Person Dome Tent or Night Cat 1-2 Person Clip Tent"
        ],
        [
          "$40 to $80",
          "BISINNA 2-4 Person Backpacking Tent or Forceatt 2-Person Backpacking Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Aluminum vs Fiberglass Poles",
    "cards": [
      {
        "label": "Aluminum",
        "text": "Forceatt 2-Person Backpacking Tent and BISINNA 2-4 Person Backpacking Tent use aluminum poles, which handle wind and repeat pitching better."
      },
      {
        "label": "Fiberglass",
        "text": "Night Cat 1-2 Person Clip Tent and OLIXIS 2-Person Dome Tent use fiberglass, which keeps cost down but flexes and splinters more."
      }
    ],
    "note": "Choose Forceatt 2-Person Backpacking Tent if you hike regularly, and fiberglass for occasional trips."
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
          "Under 30 dollars",
          "OLIXIS 2-Person Dome Tent"
        ],
        [
          "30 to 40 dollars",
          "Night Cat 1-2 Person Clip Tent"
        ],
        [
          "40 to 50 dollars",
          "BISINNA 2-4 Person Backpacking Tent"
        ],
        [
          "Around 75 dollars",
          "Forceatt 2-Person Backpacking Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For Weight-Conscious Hikers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "a printed weight under about 6 lb, aluminum poles and a packed length near 16 inches"
      },
      {
        "label": "In this comparison",
        "text": "Night Cat 1-2 Person Clip Tent gives 4.4 lb and a 16.5 inch pack, and Forceatt 2-Person Backpacking Tent gives 5.5 lb for two."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Forceatt 2-Person Backpacking Tent if two people will share it, since it prints weight, floor and a 3000mm rating together."
      },
      {
        "label": "Save if",
        "text": "Save with OLIXIS 2-Person Dome Tent or Night Cat 1-2 Person Clip Tent if trips are short or solo. Both cost under 40 dollars."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Weight on the listing",
    "explanation": "A tent's weight should be a number, not an adjective. A 4.4 to 5.8 lb two-person tent is a light target, while a tent with no figure could be much heavier. Look for lb or kg in the title or bullets, and check whether it counts stakes and bag."
  },
  {
    "criterion": "Pole material",
    "explanation": "Aluminum poles flex back and resist snapping, while fiberglass is cheaper and heavier for its strength. That difference shows up in wind and in repeated pitching. Look for a series number or the word aluminum in the specs."
  },
  {
    "criterion": "Waterproof rating",
    "explanation": "A PU 3000mm figure means the fabric resists water pressure up to that level before leaking. Seam tape matters as much as the number because seams are where light tents leak. Look for both a mm rating and taped or welded seams."
  },
  {
    "criterion": "Packed dimensions",
    "explanation": "Weight and bulk are different problems. A 4.7 inch wide bundle slides in a pack pocket, while a 10 inch bundle eats pack space. Look for packed length and diameter, not just a bag photo."
  },
  {
    "criterion": "Floor size per person",
    "explanation": "A two-person floor near 53 inches wide fits two pads with no gap. Light tents often cut width to save fabric. Compare the floor width in the listing with the sum of your pad widths."
  }
];

export const faq = [
  {
    "q": "Can a 5 lb tent handle rain?",
    "a": "Yes if the fly and floor have a stated rating and taped seams. Night Cat 1-2 Person Clip Tent lists PU 3000 on both, and Forceatt 2-Person Backpacking Tent lists 3000mm. Check seams before trusting any light tent."
  },
  {
    "q": "What is the common lightweight tent mistake?",
    "a": "Trusting the word lightweight without a number. BISINNA 2-4 Person Backpacking Tent does not print a weight. Look for lb or kg before buying."
  },
  {
    "q": "Is the Forceatt worth it over the OLIXIS?",
    "a": "It costs about 49 dollars more and adds aluminum poles, a second vestibule and a printed waterproof rating. OLIXIS 2-Person Dome Tent weighs only about 0.3 lb more. Pay for the Forceatt if you hike often."
  },
  {
    "q": "How do I pitch a clip-style tent?",
    "a": "Lay out the body, feed the poles through the corner eyelets and clip the body to the frame. Then add the fly and stake the corners. Night Cat 1-2 Person Clip Tent can be done solo in a few minutes."
  },
  {
    "q": "How do I keep a light tent dry and long-lived?",
    "a": "Dry the fly and floor fully before packing, and wipe the floor of grit. Store loose, not tightly packed. Re-seal seams if you see leaking at stitching."
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
