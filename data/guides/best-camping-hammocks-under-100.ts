export const guideSlug = "best-camping-hammocks-under-100";
export const guideTitle = "5 Best Camping Hammocks Under 100 in 2026";
export const metaTitle = "Best Camping Hammocks Under 100 in 2026";
export const metaDescription = "Best camping hammocks under $100: five hammocks from a 3-in-1 hammock tent to a 16 oz single, compared on bug protection, weather cover and weight.";
export const mainKeyword = "best camping hammocks under 100";
export const introParagraphs = [
  "A hammock under $100 can be a $25 parachute-nylon sling or a full hammock tent with a mosquito net and rain fly, and the gap is shelter, not comfort. The five here run from about $25 to $90 and weigh from 16 oz to 2.5 pounds.",
  "The ranking asks what the extra money over a $30 hammock buys: a bug net, a rain fly, tree straps and a spreader bar. The top spot goes to the best complete hammock system near the cap, and the lighter plain hammocks are placed by weight and price."
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
    "id": "best-camping-hammocks-under-100-1",
    "rank": 1,
    "badge": "Best Value Under $100",
    "name": "Rivenlo Camping Hammock Tent with Mosquito Net & RainFly",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Y-G67ryuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJCCSJDQ?tag=rvgearlab-amz-20",
    "description": "The Rivenlo is a 3-in-1 camping hammock tent in 70D nylon that weighs 1.2 kg and holds 200 kg. It includes a mosquito net with two foldable aluminum support poles, a rain fly, two carabiners and two 110 inch tree straps with 10 loops.\n\nIt costs about $90, around $20 more than the Sunyear Net and Fly, and it is the only pick whose net is held off your face by poles. The poles add bulk compared with the plain hammocks.\n\nIt suits backpackers who want bug and rain protection in one kit. It flips over to work as an ordinary tree hammock.",
    "specs": [
      "3-in-1 hammock tent, 70D nylon",
      "Net poles, rain fly, 2.5 lb",
      "110 inch straps with 10 loops"
    ],
    "pros": [
      "Poles keep the net off your face",
      "Rain fly and net included",
      "Straps with 10 adjustment loops",
      "Converts to other modes"
    ],
    "cons": [
      "Poles add bulk",
      "Costs the most of the five"
    ],
    "bestFor": "Backpacking in buggy weather",
    "take": "The complete hammock tent system under $100.",
    "catch": "Add a sleeping pad or underquilt for cold nights."
  },
  {
    "id": "best-camping-hammocks-under-100-2",
    "rank": 2,
    "badge": "Best Mid-Priced Combo",
    "name": "Sunyear Camping Hammock-Hammocks with Net and Rain Fly Tarp",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oHC2bwtcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09PL34LYF?tag=rvgearlab-amz-20",
    "description": "The Sunyear includes a hammock, a bug net and a rain fly tarp in oxford and net fabric, with adjustable ropes and hooks that connect to tree straps. It comes in a 118 by 78 inch size rated for 600 pounds and a 106 by 55 inch size rated for 500 pounds.\n\nIt costs about $70, $20 less than the Rivenlo 3-in-1, and it adds a tarp-style fly with a triangle design to block sideways rain. The Sunyear is heavier and less refined than the Rivenlo.\n\nIt suits weekend campers who prefer one box with everything. The double size fits two people.",
    "specs": [
      "Hammock, net and rain fly",
      "118 x 78 in, 600 lb rating",
      "Adjustable ropes with hooks"
    ],
    "pros": [
      "Net and rain fly in one kit",
      "Large double size option",
      "600 pound rating",
      "Free replacement for defects"
    ],
    "cons": [
      "Heavier than a plain hammock",
      "Net quality varies with size"
    ],
    "bestFor": "Weekend kits and couples",
    "take": "A solid all-in-one for about $70.",
    "catch": "Choose the size before you order."
  },
  {
    "id": "best-camping-hammocks-under-100-3",
    "rank": 3,
    "badge": "Best Budget Double",
    "name": "Covacure Camping Hammock",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51+FKCapb+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVMZM2CC?tag=rvgearlab-amz-20",
    "description": "The Covacure is a 210T parachute nylon double hammock measuring 9.5 by 4.6 feet that holds 772 pounds and weighs 1.93 pounds. It includes tree straps and a carry bag.\n\nIt costs about $25, a third of the Sunyear Net and Fly, and it gives double-hammock room for the lowest price. It has no net or fly.\n\nIt suits campers who want a simple, roomy hammock for relaxing. It packs small.",
    "specs": [
      "210T parachute nylon, 9.5 x 4.6 ft",
      "772 lb capacity, 1.93 lb",
      "Tree straps and bag included"
    ],
    "pros": [
      "Roomy double for the price",
      "772 pound capacity",
      "Quick-drying parachute nylon",
      "Straps and bag included"
    ],
    "cons": [
      "No net or rain fly",
      "Heavier than the Wise Owl"
    ],
    "bestFor": "Relaxing and day trips",
    "take": "The cheapest roomy hammock.",
    "catch": "Add a fly for rain."
  },
  {
    "id": "best-camping-hammocks-under-100-4",
    "rank": 4,
    "badge": "Best Light Single",
    "name": "Wise Owl Outfitters Camping Hammock",
    "price": "$31.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/516RoZ+5OcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01E3EHRVS?tag=rvgearlab-amz-20",
    "description": "The Wise Owl Single hammock measures 9 by 4.5 feet with triple stitching and 9 foot straps with a 5-loop adjustment, and the whole kit weighs 16 oz. It holds up to 500 pounds.\n\nIt costs about $32, a bit more than the Covacure, and it weighs about half as much. It has no net or fly, which is how it stays so light.\n\nIt suits backpackers who want a light hammock without frills. It folds small.",
    "specs": [
      "9 x 4.5 ft, triple stitching",
      "9 ft straps, 5-loop adjust",
      "16 oz total, 500 lb"
    ],
    "pros": [
      "Hammock plus straps weigh 16 oz",
      "Triple-stitched seams",
      "Straps tuned in 5 steps",
      "Folds small"
    ],
    "cons": [
      "No net or rain fly",
      "Single size only"
    ],
    "bestFor": "Light backpacking",
    "take": "The light single for adding your own fly.",
    "catch": "Pair it with a tarp."
  },
  {
    "id": "best-camping-hammocks-under-100-5",
    "rank": 5,
    "badge": "Best Flat-Lay Design",
    "name": "Portable Outdoor Camping Hammock with Spreader Bar",
    "price": "$28.15",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51hBbAeM12L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H8N3PK4R?tag=rvgearlab-amz-20",
    "description": "The Spreader Bar Hammock uses a breathable mesh bed held flat by a spreader bar, rated for 550 pounds at 490 grams and offering a 72 inch lying area. It comes with a carry bag and straps.\n\nIt costs about $28, near the Covacure Double, and the bar keeps the surface flatter than a gathered hammock. The bar is awkward to pack and the lying area suits users to about 5 feet 9.\n\nIt suits campers who dislike the banana shape. Mesh stays cool in summer.",
    "specs": [
      "Spreader bar, mesh fabric",
      "550 lb rating, 490 g",
      "72 inch lying area"
    ],
    "pros": [
      "Spreader bar keeps the surface flat",
      "Mesh fabric stays cool",
      "550 pound rating",
      "Light at 490 grams"
    ],
    "cons": [
      "72 inch lying area suits users to 5 feet 9",
      "Spreader bar is awkward to pack"
    ],
    "bestFor": "Summer relaxing",
    "take": "A flatter hammock for short-to-medium campers.",
    "catch": "Tall users should look elsewhere."
  }
];

export const howWeEvaluated = [
  {
    "title": "Bug and rain cover",
    "description": "Nets and flys were compared."
  },
  {
    "title": "Weight",
    "description": "Pounds and ounces were compared."
  },
  {
    "title": "Capacity and size",
    "description": "Weight limits and dimensions were compared."
  },
  {
    "title": "Suspension",
    "description": "Straps, ropes and loops were compared."
  },
  {
    "title": "Price against the cap",
    "description": "All five are under $100."
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
    "subheading": "By trip",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Buggy backpacking",
          "Rivenlo 3-in-1",
          "Net on poles, rain fly and straps."
        ],
        [
          "Weekend kit for two",
          "Sunyear Net and Fly",
          "Net, fly and a 118 inch double."
        ],
        [
          "Roomy and cheap",
          "Covacure Double",
          "9.5 by 4.6 feet for about $25."
        ],
        [
          "Ultralight backpacking",
          "Wise Owl Single",
          "16 oz with straps."
        ],
        [
          "Flat lying",
          "Spreader Bar Hammock",
          "Mesh bed on a spreader bar."
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
          "Covacure Double or Spreader Bar Hammock"
        ],
        [
          "$30 to $70",
          "Wise Owl Single or Sunyear Net and Fly"
        ],
        [
          "$80 to $90",
          "Rivenlo 3-in-1"
        ]
      ]
    }
  },
  {
    "subheading": "Hammock tent vs plain hammock",
    "cards": [
      {
        "label": "Hammock tent",
        "text": "The Rivenlo 3-in-1 and Sunyear Net and Fly bundle a net and fly and weigh more."
      },
      {
        "label": "Plain hammock",
        "text": "The Covacure Double, Wise Owl Single and Spreader Bar Hammock weigh 16 oz to 2 pounds and need a separate tarp."
      }
    ],
    "note": "Choose the Rivenlo 3-in-1 for wet and buggy trips and the Wise Owl Single for weight."
  },
  {
    "subheading": "By price tier",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $25",
          "Covacure Double"
        ],
        [
          "About $28",
          "Spreader Bar Hammock"
        ],
        [
          "About $32",
          "Wise Owl Single"
        ],
        [
          "About $70",
          "Sunyear Net and Fly"
        ],
        [
          "About $90",
          "Rivenlo 3-in-1"
        ]
      ]
    }
  },
  {
    "subheading": "For backpacking specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a weight under 2.5 pounds, included straps and a net if bugs are likely."
      },
      {
        "label": "In this comparison",
        "text": "The Wise Owl Single weighs 16 oz, and the Rivenlo 3-in-1 adds a net and fly at 2.5 pounds."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you camp where it rains or bugs bite: the Rivenlo 3-in-1 and Sunyear Net and Fly add a net and rain fly."
      },
      {
        "label": "Save if",
        "text": "Save if you camp in dry, bug-free weather: the Covacure Double at about $25 and Wise Owl Single at about $32 are enough."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Net and rain fly",
    "explanation": "A hammock with no net invites mosquitoes in summer, and one with no rain fly leaves you wet in any shower. A tent-style hammock includes both but weighs 2 to 3 pounds. Look for the words net and rain fly in the title if you camp in wet or buggy areas."
  },
  {
    "criterion": "Weight and packed size",
    "explanation": "A plain hammock weighs 16 oz to 2 pounds, while a hammock tent with a net, fly and poles weighs 2.5 pounds or more. That weight adds up over a multi-day trek, where a pound is noticeable by afternoon. Check the stated weight in the title or specs, and decide how much shelter you actually need on the trail."
  },
  {
    "criterion": "Length and width",
    "explanation": "A hammock 9 to 10 feet long lets you lie on a diagonal and flatten out your back, while a short one forces a banana curve that strains your spine. A width of 4.5 to 5 feet gives shoulder room, and double hammocks add width. Look for the stated length and width in the specs and match them to your height."
  },
  {
    "criterion": "Tree straps",
    "explanation": "Wide straps protect tree bark and let you adjust height with loops, while thin ropes dig into trees and are banned at many parks. A 110 inch strap with 10 loops reaches most tree pairs 12 to 15 feet apart. Check the strap length and loop count in the included items, and avoid kits with only thin cord."
  },
  {
    "criterion": "Capacity and stitching",
    "explanation": "A rating of 500 to 770 pounds gives room for a double and a safety margin for a single, and triple stitching on the seams adds strength where hammocks fail. A cheap hammock can rip at the stitching with a hard sit-down. Look for the capacity and stitching type in the description before you trust a hammock with your weight."
  }
];

export const faq = [
  {
    "q": "Do I need a rain fly for a hammock?",
    "a": "Yes, unless you only camp in dry weather. The Rivenlo 3-in-1 includes a fly, and plain hammocks like the Wise Owl Single need a separate tarp, because rain falls straight onto the bed and soaks your bag. Pitch the fly before you need it."
  },
  {
    "q": "What do campers get wrong about hammock setup?",
    "a": "They hang it too tight. A hammock should sag at about a 30 degree angle, and a taut hang overloads the straps, the trees and your back. Hang it at about knee height so you can sit in it and step out."
  },
  {
    "q": "Is the Rivenlo worth about $20 more than the Sunyear?",
    "a": "If you want the net held off your face and a lighter, tidier kit, yes. The Rivenlo has net poles and 70D nylon, and its straps have 10 loops. The Sunyear Net and Fly costs about $20 less and comes in a larger double size."
  },
  {
    "q": "How do I hang a hammock?",
    "a": "Wrap the straps around two trees about 12 to 15 feet apart and clip the hammock to them with carabiners. Adjust the loops until it sags at about 30 degrees, and test it low to the ground first. The Rivenlo 3-in-1 has 10 loops for fine adjustment."
  },
  {
    "q": "How do I stay warm in a hammock?",
    "a": "Add an underquilt or a sleeping pad, since the air under you cools you far faster than the air above. A hammock compresses sleeping bag insulation under your weight, so the bag alone is not enough. Match the pad or underquilt to the forecast."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Sleeping Bags",
    "href": "/sleep-gear/best-backpacking-sleeping-bags"
  },
  {
    "title": "Best Camping Sleeping Bags",
    "href": "/sleep-gear/best-camping-sleeping-bags"
  },
  {
    "title": "Best Backpacking Pillows For Side Sleepers",
    "href": "/sleep-gear/best-backpacking-pillows-for-side-sleepers"
  },
  {
    "title": "Best Backpacking Pillow For Stomach Sleepers",
    "href": "/sleep-gear/best-backpacking-pillow-for-stomach-sleepers"
  }
];
