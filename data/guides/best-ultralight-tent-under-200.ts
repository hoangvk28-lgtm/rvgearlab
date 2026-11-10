export const guideSlug = "best-ultralight-tent-under-200";
export const guideTitle = "5 Best Ultralight Tent Under 200 in 2026";
export const metaTitle = "Best Ultralight Tent Under 200 in 2026";
export const metaDescription = "Best ultralight tents under $200: five light backpacking tents compared on stated weight, packed size, rain ratings and freestanding setup.";
export const mainKeyword = "best ultralight tent under 200";
export const introParagraphs = [
  "A $200 ceiling is where ultralight tents get real. Weights drop under 4 lb, fly fabrics move to 10D and 20D nylon, and brands start to print packed sizes you can actually compare.",
  "Five tents make the cut, ordered by how well each balances stated weight, weather protection and floor space. Where a listing gives no weight, the pick sits lower in the order."
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
    "id": "best-ultralight-tent-under-200-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Naturehike Star Trail Ultralight Backpacking Tent",
    "price": "$159.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31bPCXq3cOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G2LBTWWV?tag=rvgearlab-20",
    "description": "The Naturehike Star Trail is a two person tent that the listing weighs at 2.76 lb and packs to 17.7 by 5.1 inches. The fly is 10D nylon with PU1500 mm or more, and the inner floor and footprint use 20D nylon at PU3000 mm.\n\nIt is the lightest two person shelter in this guide, ahead of the 3.97 lb Naturehike Cloud-Up 2 by more than a pound. The inner space of 82.7 by 51.2 by 39.3 inches gives a sitting-height center.\n\nIt suits backpackers who share a tent, or solo hikers who want a roomy 2-person tent at a solo carry weight. Full mesh walls and a three minute setup keep the pitch simple.",
    "specs": [
      "2.76 lb, 17.7 x 5.1 inch pack",
      "10D fly, PU1500 mm and up",
      "82.7 x 51.2 inch inner"
    ],
    "pros": [
      "Lightest two person tent here",
      "Compact 17.7 inch packed length",
      "Full mesh inner for airflow",
      "Three minute pitch"
    ],
    "cons": [
      "Fly rating lower than the Cloud-Up",
      "Thin 10D fabric needs careful handling"
    ],
    "bestFor": "Weight-first couples or roomy solo hikers",
    "take": "The lightest two person shelter here. It rewards careful handling.",
    "catch": "The 10D fly is a lighter, more delicate fabric than the 20D alternatives."
  },
  {
    "id": "best-ultralight-tent-under-200-2",
    "rank": 2,
    "badge": "Best Weather Protection",
    "name": "Naturehike Cloud-Up 2 Person Tent Lightweight Backpacking Tent with Footprint",
    "price": "$159.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31KI2nvfQfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D31F6PBB?tag=rvgearlab-20",
    "description": "The Naturehike Cloud-Up 2 is a freestanding two person tent in 20D nylon with a silicone coating and a PU4000 mm waterproof rating. The pack size is 15.7 by 5.1 by 5.1 inches, the weight is 3.97 lb, and a footprint is included.\n\nNext to the Naturehike Star Trail, it gives up about 1.2 lb for a much higher stated rain rating and a more durable 20D fabric. Compared with the ALPS Lynx 1, it carries a two person floor of 82.7 by 49.2 inches at a lower weight.\n\nIt suits backpackers who hike in changeable weather and want a freestanding, easy pitch. The front window vent cuts condensation.",
    "specs": [
      "3.97 lb, 15.7 x 5.1 inch pack",
      "PU4000 mm silicone-coated 20D",
      "Footprint included"
    ],
    "pros": [
      "High stated rain rating",
      "Freestanding double wall design",
      "Footprint in the box",
      "Window vent reduces condensation"
    ],
    "cons": [
      "About 1.2 lb heavier than the Star Trail",
      "Interior length is only 82.7 inches"
    ],
    "bestFor": "Backpackers who hike in changeable weather",
    "take": "The most weather-ready tent here. It trades a little weight for protection.",
    "catch": "Tall hikers will find 82.7 inches of length close to the limit."
  },
  {
    "id": "best-ultralight-tent-under-200-3",
    "rank": 3,
    "badge": "Best Brand-Backed Solo",
    "name": "ALPS Mountaineering Lynx 1-Person Tent",
    "price": "$114.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/416z7msx0TL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B081R35BXY?tag=rvgearlab-20",
    "description": "The ALPS Lynx 1 is a freestanding one person tent that weighs 4 lb 1 oz with two aluminum poles. The fly is 75D 185T with a 1500 mm coating, the floor is 2000 mm poly taffeta, and the half-mesh walls help airflow.\n\nCompared with the Naturehike Cloud-Up 2, it is a solo tent at about the same weight, so it has less floor space and a clear vestibule. Against the Reactive 3 Second, it uses a conventional pole frame that is simple to repair.\n\nIt suits solo backpackers who want a freestanding tent from a known mountaineering brand. The vestibule and mesh pockets keep gear organized.",
    "specs": [
      "4 lb 1 oz, two aluminum poles",
      "1500 mm fly, 2000 mm floor",
      "Vestibule and mesh pockets"
    ],
    "pros": [
      "Freestanding with two aluminum poles",
      "Vestibule keeps boots and a pack dry",
      "Mesh pockets and a gear loft",
      "Established outdoor brand"
    ],
    "cons": [
      "Heaviest weight in this guide",
      "Only 1500 mm of fly protection"
    ],
    "bestFor": "Solo trips with a known brand",
    "take": "A dependable solo tent at a modest weight. It is not the lightest.",
    "catch": "The 1500 mm fly is the lowest rating in this guide."
  },
  {
    "id": "best-ultralight-tent-under-200-4",
    "rank": 4,
    "badge": "Best for Speed",
    "name": "Reactive Outdoor Tent",
    "price": "$149.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41jJGFqDRwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BR789JDV?tag=rvgearlab-20",
    "description": "The Reactive 3 Second is a pop-up tent with a self-locking structure, a 3000 mm HH rating and fully taped seams. One person can set it up in seconds, and the bag has an extra wide opening with buckle straps.\n\nWhere the ALPS Lynx 1 needs poles threaded, this tent just pulls up and locks, so it is the fastest to pitch of anyone here. It is unlike the Naturehike options in that no weight or packed size appears in the listing.\n\nIt suits campers who prize speed and an easy bag over the lowest possible weight. It is good for short trips and festival-style camps.",
    "specs": [
      "Self-locking pop-up frame",
      "3000 mm HH rating, taped seams",
      "Wide-opening buckle bag"
    ],
    "pros": [
      "Pitches in seconds by one person",
      "Fully taped seams",
      "Easy to repack in the bag",
      "Double layer design"
    ],
    "cons": [
      "No weight stated on the listing",
      "Pop-up frames pack bulkier than pole tents"
    ],
    "bestFor": "Fast pitching on short trips",
    "take": "The quickest tent to pitch. It is not a pack-weight pick.",
    "catch": "No weight or packed size is given, so it is not shown to be ultralight."
  },
  {
    "id": "best-ultralight-tent-under-200-5",
    "rank": 5,
    "badge": "Best Budget Length",
    "name": "camppal 1 Person Tent for Camping Hiking Mountain Hunting Backpacking Tents 4 Season Resistance to Windproof R",
    "price": "$76.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31LnrN9TvOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B078ZZ5QPX?tag=rvgearlab-20",
    "description": "The camppal Long Solo is a one person tent with an 8.2 ft long inner and a 3500 to 4000 mm waterproof rating. A single aluminum pole holds it up, the listing notes seam taping on zippers and corners, and the fly cites CPAI-84 fire retardant fabric.\n\nIt is the most affordable tent in this guide, which leaves money in the budget for a footprint. Compared with the ALPS Lynx 1, it states a much higher rain rating and a longer inner tent, with no weight given.\n\nIt suits tall or budget-minded solo campers who need length and rain protection. Setup is described as about three minutes.",
    "specs": [
      "8.2 ft long inner tent",
      "3500 to 4000 mm rating",
      "Single aluminum pole"
    ],
    "pros": [
      "Longest inner tent here",
      "High stated rain rating",
      "Seam-taped zippers and corners",
      "Lowest cost in the group"
    ],
    "cons": [
      "No packed weight is listed",
      "Narrow 2.95 ft width"
    ],
    "bestFor": "Tall solo campers on a budget",
    "take": "The best length and rain rating for the money. It is not a proven ultralight.",
    "catch": "The listing gives no weight, so compare it as a lightweight solo shelter."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated weight",
    "description": "Only tents with a weight in pounds were treated as proof of ultralight status."
  },
  {
    "title": "Packed size",
    "description": "Packed dimensions were compared to judge pack space."
  },
  {
    "title": "Rain rating",
    "description": "Fly and floor millimeter ratings were compared, with taped seams noted."
  },
  {
    "title": "Setup and structure",
    "description": "Freestanding, single-pole and pop-up frames were compared for setup speed and repair."
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
    "subheading": "By Hiking Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Lowest carried weight, two people",
          "Naturehike Star Trail",
          "2.76 lb stated and 17.7 inch pack."
        ],
        [
          "Changeable mountain weather",
          "Naturehike Cloud-Up 2",
          "PU4000 mm rain rating and a footprint."
        ],
        [
          "Solo hiker, known brand",
          "ALPS Lynx 1",
          "Freestanding with a vestibule."
        ],
        [
          "Fast pitching",
          "Reactive 3 Second",
          "Pop-up lock frame sets up in seconds."
        ],
        [
          "Tall solo hiker on a budget",
          "camppal Long Solo",
          "8.2 ft inner tent length."
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
          "$70 to $120",
          "camppal Long Solo or ALPS Lynx 1"
        ],
        [
          "$140 to $160",
          "Reactive 3 Second or Naturehike Star Trail"
        ],
        [
          "$150 to $160",
          "Naturehike Cloud-Up 2"
        ]
      ]
    }
  },
  {
    "subheading": "Pole Frame vs Pop-Up",
    "cards": [
      {
        "label": "Pole Frame",
        "text": "Pole tents are lighter and pack smaller, and a bent pole is easy to splint. Naturehike Star Trail, Naturehike Cloud-Up 2, ALPS Lynx 1 and camppal Long Solo use poles."
      },
      {
        "label": "Pop-Up",
        "text": "A pop-up locks open in seconds with no poles to thread, but it packs bulkier. Reactive 3 Second is the pop-up pick."
      }
    ],
    "note": "Most backpackers should pick a pole tent such as Naturehike Cloud-Up 2 unless setup speed is the only goal."
  },
  {
    "subheading": "By Number of Sleepers",
    "table": {
      "headers": [
        "Sleepers",
        "Recommended pick"
      ],
      "rows": [
        [
          "Two people, lightest carry",
          "Naturehike Star Trail"
        ],
        [
          "Two people, stormy trips",
          "Naturehike Cloud-Up 2"
        ],
        [
          "One person, freestanding",
          "ALPS Lynx 1"
        ],
        [
          "One person, rain and length",
          "camppal Long Solo"
        ]
      ]
    }
  },
  {
    "subheading": "For Weekend Backpacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated weight under 4 lb, a packed size near 17 inches and a rain rating of at least 1500 mm."
      },
      {
        "label": "In this comparison",
        "text": "The Naturehike Star Trail lists 2.76 lb and 17.7 by 5.1 inches, which suits a weekend pack better than the heavier ALPS Lynx 1."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Naturehike Star Trail or Naturehike Cloud-Up 2 if you carry your tent far, since stated light weight and higher rain ratings are what you pay for."
      },
      {
        "label": "Save if",
        "text": "Save with the camppal Long Solo if you camp near the car or hike short distances, since a long inner tent and strong rain rating cost less than the lighter models."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Weight and packed size together",
    "explanation": "A weight tells you what you carry, and a packed size tells you where it goes. A 2 to 4 lb tent that packs near 18 inches long fits easily inside most packs. Check the listing for both and compare them against your pack volume."
  },
  {
    "criterion": "Fabric denier and durability",
    "explanation": "Denier measures yarn thickness, so 10D is thinner and lighter than 20D or 75D. Thin fabric saves ounces but tears more easily and needs gentler campsites. Look for the denier on the fly and floor, and a footprint to protect the floor."
  },
  {
    "criterion": "Waterproof rating by area",
    "explanation": "A fly rating of 1500 to 3000 mm covers ordinary rain, and floors should be higher because your weight presses on them. Taped seams matter as much as the number. Check both ratings and a note on seam taping."
  },
  {
    "criterion": "Interior size and sitting height",
    "explanation": "An 82.7 by 51.2 inch floor gives two people sleeping room, and a center height near 40 inches lets you sit upright. Tall campers need the length in inches. Compare the listing length to your height."
  },
  {
    "criterion": "Freestanding vs not",
    "explanation": "A freestanding tent holds its shape without stakes, which is handy on rock and sand. Non-freestanding tents save weight but need stakes to stand. Check the listing for the word freestanding."
  },
  {
    "criterion": "Condensation control",
    "explanation": "Double wall designs and vent windows reduce the damp that builds inside a tent overnight. Full mesh walls help in warm weather but let in cold drafts. Look for a vent, a mesh inner and a double layer."
  }
];

export const faq = [
  {
    "q": "Is a tent under 200 light enough for backpacking?",
    "a": "Yes. The Naturehike Star Trail weighs 2.76 lb and packs to 17.7 inches, which fits any backpacking load. Heavier models like the ALPS Lynx 1 at 4 lb 1 oz are still reasonable."
  },
  {
    "q": "What is the common mistake with ultralight tents?",
    "a": "Ignoring fabric thickness. Thin 10D fabric on the Naturehike Star Trail saves weight but needs a footprint and gentle sites. Choose fabric by where you pitch, not only by weight."
  },
  {
    "q": "Is a 2 person tent worth it as a solo tent?",
    "a": "Often yes. A two person tent like the Naturehike Cloud-Up 2 gives room for gear and a change of clothes for a modest weight gain. If every ounce counts, a solo tent is lighter."
  },
  {
    "q": "How do I set up a freestanding tent?",
    "a": "Lay the footprint, assemble the poles, clip or sleeve them into the inner tent and raise the frame. Then attach the fly and stake out the corners. The Naturehike Cloud-Up 2 sets up this way in a few minutes."
  },
  {
    "q": "How do I care for a thin nylon tent?",
    "a": "Dry it fully before storage and keep it out of long sun exposure. Brush off sand before folding. Use a footprint on rough ground to protect the floor."
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
