export const guideSlug = "best-2-person-ultralight-tents";
export const guideTitle = "5 Best 2 Person Ultralight Tents in 2026";
export const metaTitle = "Best 2 Person Ultralight Tents in 2026";
export const metaDescription = "Best 2 person ultralight tents compared on stated weight, packed size and fabric denier, for two backpackers splitting a shelter on long trail days.";
export const mainKeyword = "best 2 person ultralight tents";
export const introParagraphs = [
  "Two backpackers can share one tent and split the load, which is why a 2 person ultralight shelter should weigh close to 4 pounds before you split it. The tents below were compared on listed weight, packed size, fabric denier and what the listing says about waterproofing and wind.",
  "Five tents are ranked. Two give the lightest stated weights, one gives a minimum trail weight for the stripped-down setup, and two budget options are described honestly where the listing leaves weight out."
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
    "id": "best-2-person-ultralight-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Naturehike Cloud-Up 2 Person Tent Lightweight Backpacking Tent with Footprint",
    "price": "$127.20",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31tyngKIW0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FXMD5T81?tag=rvgearlab-amz-20",
    "description": "The Naturehike Cloud-Up weighs 3.97 lb on its listing and packs to 15.7 x 5.1 x 5.1 inches. It uses 20D silicone nylon with a PU4000mm waterproof rating, taped seams and an 82.7 x 49.2 x 41.3 inch interior, and it includes a footprint.\n\nIt undercuts the Star River on weight by only a hair, while adding a stated waterproof number and a footprint in the box. Compared with the Clostnature it is about a pound lighter, and the added ventilation window above the front door helps with condensation.\n\nIt suits two hikers who want a documented light freestanding tent with a footprint. The two-layer build leaves air between fly and inner.",
    "specs": [
      "3.97 lb, 15.7 x 5.1 x 5.1 in",
      "20D nylon, PU4000mm",
      "Footprint included"
    ],
    "pros": [
      "Stated weight under 4 pounds",
      "PU4000mm with taped corners and seams",
      "Footprint comes with the tent",
      "Added ventilation window over the door"
    ],
    "cons": [
      "Interior is only 49.2 inches wide",
      "Narrow for two wide sleeping pads"
    ],
    "bestFor": "Freestanding trail tent for two",
    "take": "A 3.97 lb freestanding tent with a footprint and a stated rating.",
    "catch": "The 49 inch width is snug for two wide pads."
  },
  {
    "id": "best-2-person-ultralight-tents-2",
    "rank": 2,
    "badge": "Best Vestibule Space",
    "name": "Naturehike UL Star River 2 Person Backpacking Tent",
    "price": "$116.79",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Y0JFkPsAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D31GK3SC?tag=rvgearlab-amz-20",
    "description": "The Naturehike UL Star River is built from 15D ultralight nylon and weighs about 4.07 lb with a 15.7 x 5.1 inch pack size. The inner tent measures 82.7 x 51.2 x 41.3 inches, and awning-style vestibules extend the outer tent to 86.6 x 57.1 x 43.3 inches.\n\nIt trades a fraction of a pound against the Cloud-Up for wider inner space and larger vestibules. The separate bags for each part let the two hikers split the load.\n\nIt suits partners who want a place for wet gear and an awning to cook under in the rain. Triangle storage space sits between the inner and the fly.",
    "specs": [
      "About 4.07 lb, 15D nylon",
      "Inner 82.7 x 51.2 x 41.3 in",
      "Awning-style vestibules"
    ],
    "pros": [
      "Under 4.1 pounds on the listing",
      "Wide vestibules for gear",
      "Each part packs in its own bag",
      "Large interior pockets"
    ],
    "cons": [
      "No waterproof millimeter rating listed",
      "15D fabric needs careful handling"
    ],
    "bestFor": "Hikers who split loads",
    "take": "A light tent with big vestibules and split-load packaging.",
    "catch": "The listing gives no waterproof number, and 15D fabric is delicate."
  },
  {
    "id": "best-2-person-ultralight-tents-3",
    "rank": 3,
    "badge": "Best Documented Waterproofing",
    "name": "ATEPA Voyage 2 Person Backpacking Tent",
    "price": "$132.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iP+YTFPUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQZWBRXF?tag=rvgearlab-amz-20",
    "description": "The ATEPA Voyage is a 2 person tent with 20D silicone nylon, fully taped seams and a 4000mm waterproof rating. It uses a single-pole 7001 aluminum alloy frame, B3 mesh, dual ceiling vents and double D-shaped doors, plus removable side storage panels.\n\nIts single-pole freestanding frame and ceiling lantern hook are unique in this list. The Cloud-Up states a weight where this listing states none.\n\nIt suits two campers who want four-season rated fabric and storage panels. Reflective guy lines and stake heads help at night.",
    "specs": [
      "20D silicone nylon, 4000mm",
      "Single-pole aluminum frame",
      "Fully taped seams"
    ],
    "pros": [
      "Stated 4000mm rating with taped seams",
      "Single-pole freestanding setup",
      "Removable storage panels",
      "Reflective guy lines and stakes"
    ],
    "cons": [
      "No weight on the listing",
      "Frame uses one pole, a single point of failure"
    ],
    "bestFor": "Four-season rated for two",
    "take": "A 4000mm tent with a single-pole frame and smart storage.",
    "catch": "The listing gives no weight, so ask the seller."
  },
  {
    "id": "best-2-person-ultralight-tents-4",
    "rank": 4,
    "badge": "Best Trail Weight Detail",
    "name": "Clostnature 2 Person Lightweight Backpacking Tent",
    "price": "$43.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41AhE1GLeWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BZ81SJHL?tag=rvgearlab-amz-20",
    "description": "The Clostnature 2 person tent weighs 5.33 lb in full, with a minimum trail weight of 4.38 lb for just the fly, inner and poles. Its PU5000 coated polyester shell, two aluminum poles and an emergency pole repair kit come in a package about 220 cm long.\n\nIt is the only listing here with a minimum trail weight, and it is much cheaper than the Naturehike tents. The Cloud-Up is about a pound lighter in full trim.\n\nIt suits budget-minded pairs who will strip the kit to save weight. Removing the fly gives stargazing in clear weather.",
    "specs": [
      "5.33 lb, 4.38 lb trail weight",
      "PU5000 polyester",
      "Aluminum stakes"
    ],
    "pros": [
      "Trail weight spelled out",
      "High PU5000 rating",
      "Repair kit and aluminum stakes",
      "Low price for a freestanding two-person"
    ],
    "cons": [
      "Heavier than the Naturehike tents",
      "Polyester fly is heavier than nylon"
    ],
    "bestFor": "Budget pairs who strip weight",
    "take": "A budget tent that tells you its trail weight.",
    "catch": "Full weight is over 5 lb, not truly ultralight."
  },
  {
    "id": "best-2-person-ultralight-tents-5",
    "rank": 5,
    "badge": "Best Budget Dome",
    "name": "ShinHye Backpacking Tent 2 Person",
    "price": "$62.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31j1UGcPPGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DR8TS7X6?tag=rvgearlab-amz-20",
    "description": "The ShinHye dome pairs a 210T polyester fly with a 210D Oxford floor and fine no-see-um mesh, all on a freestanding two-pole aluminum frame. SBS zippers, two large doors, a one-year warranty and three size options round out the listing.\n\nIt sits well below the Naturehike and ATEPA tents on price and shows no stated weight. Compared with the Clostnature it is a similar budget dome, sold as a family of sizes.\n\nIt suits pairs on a tight budget who want a freestanding dome for easy pitching. Large mesh sections boost airflow.",
    "specs": [
      "210T polyester, 210D Oxford",
      "Two aluminum poles, SBS zippers",
      "Sold in 2, 3 and 4 person sizes"
    ],
    "pros": [
      "Freestanding two-pole setup",
      "Large mesh and two doors",
      "One-year warranty",
      "Low price for a freestanding dome"
    ],
    "cons": [
      "No weight or waterproof rating listed",
      "Oxford floor adds weight"
    ],
    "bestFor": "Budget-conscious pairs",
    "take": "A budget dome sold as a family of sizes.",
    "catch": "Ultralight is in the title, but no weight is listed."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated weight",
    "description": "Listed total and trail weights were compared, and missing numbers were noted."
  },
  {
    "title": "Packed size",
    "description": "Folded dimensions were compared for pack fit."
  },
  {
    "title": "Fabric and waterproofing",
    "description": "Denier, coatings and millimeter ratings were weighed."
  },
  {
    "title": "Interior and vestibule",
    "description": "Width, length and gear space were checked for two sleepers."
  },
  {
    "title": "Frame and setup",
    "description": "Pole count, material and freestanding design were compared."
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
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Lightest documented with footprint",
          "Naturehike Cloud-Up",
          "3.97 lb with a footprint."
        ],
        [
          "Wet gear and cooking space",
          "Naturehike Star River",
          "Awning-style vestibules."
        ],
        [
          "Best documented waterproofing",
          "ATEPA Voyage",
          "4000mm with taped seams."
        ],
        [
          "Budget and a trail weight figure",
          "Clostnature 2P UL",
          "4.38 lb trail weight."
        ],
        [
          "Dome in several sizes",
          "ShinHye 2P",
          "Sold in 2, 3 and 4 person sizes."
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
          "$40 to $70",
          "Clostnature 2P UL or ShinHye 2P"
        ],
        [
          "$110 to $130",
          "Naturehike Star River or Naturehike Cloud-Up"
        ],
        [
          "$130 to $140",
          "ATEPA Voyage"
        ]
      ]
    }
  },
  {
    "subheading": "Nylon vs Polyester Fabric",
    "cards": [
      {
        "label": "Nylon",
        "text": "The Naturehike Cloud-Up, Naturehike Star River and ATEPA Voyage use nylon in 15D to 20D, which is lighter and silicone coated but costs more."
      },
      {
        "label": "Polyester",
        "text": "The Clostnature 2P UL and ShinHye 2P use polyester, which is cheaper and heavier but easy to find in budget models."
      }
    ],
    "note": "Most weight-minded pairs should choose the Naturehike Cloud-Up and leave polyester for budget shoppers."
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
          "Lowest spend",
          "ShinHye 2P"
        ],
        [
          "Low spend, trail weight",
          "Clostnature 2P UL"
        ],
        [
          "Mid spend",
          "Naturehike Star River"
        ],
        [
          "Mid spend, documented",
          "Naturehike Cloud-Up"
        ],
        [
          "Upper spend",
          "ATEPA Voyage"
        ]
      ]
    }
  },
  {
    "subheading": "For Thru-Hiking Pairs Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated total weight below about 4.5 lb, a stated packed size and a waterproof figure."
      },
      {
        "label": "In this comparison",
        "text": "The Naturehike Cloud-Up gives 3.97 lb and PU4000mm, and the Naturehike Star River gives 4.07 lb."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Naturehike Cloud-Up for the best documented weight, or the ATEPA Voyage for a 4000mm rating."
      },
      {
        "label": "Save if",
        "text": "Save with the Clostnature 2P UL or ShinHye 2P if you accept extra weight."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Total weight vs trail weight",
    "explanation": "Total weight includes stakes, guy lines and stuff sacks, and trail weight strips them. A 4 lb tent that splits between two packs is 2 lb each. Look for both numbers in the listing and calculate your split."
  },
  {
    "criterion": "Fabric denier",
    "explanation": "Lower denier means lighter fabric but less abrasion resistance. 15D nylon saves weight but punctures more easily than 20D. Check the denier and use a footprint on rough ground."
  },
  {
    "criterion": "Waterproof rating",
    "explanation": "A rating of 3000 to 4000mm handles sustained rain. A tent with no number leaves you guessing. Check the listing for the millimeter figure and for taped seams."
  },
  {
    "criterion": "Width for two pads",
    "explanation": "Many ultralight two-person tents are 49 to 51 inches wide, which fits two standard pads edge to edge. Wide pads overlap. Check the listed width against your pads."
  },
  {
    "criterion": "Vestibule size",
    "explanation": "Two sets of packs and boots need space outside the sleeping area. Large awning vestibules also give cooking cover in rain. Check the vestibule area in square feet if listed."
  },
  {
    "criterion": "Freestanding frame",
    "explanation": "A freestanding frame stands without stakes, so it pitches on rock or platforms. Single-pole frames are lighter but offer fewer backup points. Check pole count and material."
  }
];

export const faq = [
  {
    "q": "Is 4 pounds ultralight for two people?",
    "a": "It is a common target for a two-person shelter. Split between two packs, the Naturehike Cloud-Up is under 2 lb each."
  },
  {
    "q": "What is the common ultralight tent mistake?",
    "a": "Ignoring the footprint and floor denier. A thin floor punctures. Use the footprint included with the Cloud-Up or buy one."
  },
  {
    "q": "Is the Cloud-Up worth it over the Clostnature?",
    "a": "The Cloud-Up is about a pound lighter and lists PU4000mm, while the Clostnature costs far less. Choose the Cloud-Up for long trips."
  },
  {
    "q": "How do I pitch a freestanding ultralight tent?",
    "a": "Connect the poles, clip or sleeve the inner, add the fly and stake the vestibules. Stake the corners even in calm weather."
  },
  {
    "q": "How do I care for a nylon ultralight tent?",
    "a": "Dry it fully, avoid storing it compressed and wipe the silicone coating gently. Patch tears with repair tape."
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
