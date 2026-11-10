export const guideSlug = "best-budget-ultralight-tents";
export const guideTitle = "3 Best Budget Ultralight Tents in 2026";
export const metaTitle = "Best Budget Ultralight Tents in 2026";
export const metaDescription = "Best budget ultralight tents compared on listed weight, fabric, poles and what is included, for backpackers who want to save grams and money.";
export const mainKeyword = "best budget ultralight tents";
export const introParagraphs = [
  "Ultralight gear is usually expensive, but a few tents name the word and still stay near the low end of the price range. The trade-off is almost always fabric, pole style or included extras, so this list is about which compromise suits your trips.",
  "Three tents state ultralight in their listings: a 15D nylon freestanding tent, a freestanding two-person tent with a pole repair kit and a one-person trekking pole tent. They were compared on listed weight, fabric, poles and the setup each one asks of the buyer."
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
    "id": "best-budget-ultralight-tents-1",
    "rank": 1,
    "badge": "Lightest Listed Weight",
    "name": "TOMOUNT Ultralight Backpacking Tent 15D Nylon Tent Waterproof",
    "price": "$119.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31QjIAP7f-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G5Y7WV4C?tag=rvgearlab-20",
    "description": "The TOMOUNT is an ultralight backpacking tent that weighs 3.1 lbs and packs to 16.9 by 5.9 by 5.9 inches. The rainfly is 15D silicone-coated nylon, the floor is 20D silicone-coated nylon rated 3000mm PU, and 7001 aluminum poles come pre-threaded on all four corners.\n\nIt is the lightest of the three by listed weight apart from the poleless Underwood, and it is the only one that names a 15D fly. Next to the Clostnature it saves over 2 lbs with a double-wall build and pre-threaded poles for quick pitching.\n\nIt suits weekend backpackers who want a double-wall shelter at a trail-friendly weight. Pre-threaded poles make setup simple on a dark evening.",
    "specs": [
      "3.1 lbs, 15D nylon fly",
      "PU3000mm 20D floor",
      "Pre-threaded 7001 aluminum poles"
    ],
    "pros": [
      "Lightest listed weight with poles",
      "15D silicone nylon fly",
      "Pre-threaded poles speed up setup",
      "Double-layer build helps with condensation"
    ],
    "cons": [
      "Highest price of the three",
      "Few extras named in the kit"
    ],
    "bestFor": "Weight-conscious weekends",
    "take": "The ultralight tent here that still comes with its poles and a double-wall build.",
    "catch": "It costs the most of the three, so the savings are smaller than the others."
  },
  {
    "id": "best-budget-ultralight-tents-2",
    "rank": 2,
    "badge": "Best for Two People",
    "name": "Clostnature 2 Person Lightweight Backpacking Tent",
    "price": "$43.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41AhE1GLeWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BZ81SJHL?tag=rvgearlab-20",
    "description": "The Clostnature is a freestanding 2-person tent with a total weight of 5.33 lbs and a minimum trail weight of 4.38 lbs. It measures 7 feet 3 inches by 4 feet 11 inches by 3 feet 10 inches, with a PU5000 rainfly and bathtub floor and two aluminum poles.\n\nIt is the only pick sized for two people, and the box adds an emergency kit for damaged poles along with 14 aluminum stakes. Compared with the TOMOUNT it is about 2 lbs heavier, with more floor and a higher PU rating.\n\nIt suits a couple or a solo hiker who wants extra interior room without paying much. The rainfly can come off for stargazing on clear nights.",
    "specs": [
      "5.33 lbs total, 4.38 lbs trail",
      "PU5000 fly and bathtub floor",
      "14 stakes, pole repair kit"
    ],
    "pros": [
      "Two-person floor at a budget price",
      "PU5000 fly and floor rating",
      "Pole repair kit comes in the box",
      "Rainfly can be removed for stargazing"
    ],
    "cons": [
      "Heaviest of the three",
      "Not the lightest option for solo hikers"
    ],
    "bestFor": "Couples on a budget",
    "take": "A roomy, well-equipped two-person tent at a low price and a moderate weight.",
    "catch": "At 5.33 lbs it is light for two people, not for one."
  },
  {
    "id": "best-budget-ultralight-tents-3",
    "rank": 3,
    "badge": "Lowest Price",
    "name": "1 Person Trekking Pole Tent",
    "price": "$37.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Wj05iY3EL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09J8DFDKP?tag=rvgearlab-20",
    "description": "The Underwood is a 1-person trekking pole tent that sets up with trekking poles or any stick longer than 46 inches. It has a net and fabric double-layer door, a side mesh ventilation window and a waterproof fabric.\n\nIt leaves out tent poles on purpose, which is how it stays the lowest-priced of the three and keeps pack weight down for hikers who already own poles. Next to the TOMOUNT it asks for trekking poles as part of the system.\n\nIt suits hikers who already carry trekking poles and want the least cost and weight possible. The listing includes tips for reducing condensation by staking down the vestibule.",
    "specs": [
      "1 person, no tent poles",
      "Pitches on 46 in or longer poles",
      "Net and fabric double door"
    ],
    "pros": [
      "Lowest price in the group",
      "Uses trekking poles you already own",
      "Side mesh window for airflow",
      "Double-layer door adds ventilation"
    ],
    "cons": [
      "Trekking poles not included",
      "Not freestanding, needs good stakes"
    ],
    "bestFor": "Hikers with trekking poles",
    "take": "The cheapest way to carry a shelter for solo backpackers who already use trekking poles.",
    "catch": "You must supply poles at least 46 inches long, and the tent needs staking."
  }
];

export const howWeEvaluated = [
  {
    "title": "Listed weight",
    "description": "Total and trail weights from each listing were compared."
  },
  {
    "title": "Fabric and rating",
    "description": "Denier, coating and waterproof ratings were noted."
  },
  {
    "title": "Pole system",
    "description": "Freestanding aluminum poles versus trekking pole setup was separated."
  },
  {
    "title": "Capacity",
    "description": "One-person and two-person floors were compared."
  },
  {
    "title": "Included extras",
    "description": "Stakes, repair kits and footprint options were counted against price."
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
          "Weekend backpacking, lightest with poles",
          "TOMOUNT 15D Tent",
          "3.1 lbs with a 15D nylon fly."
        ],
        [
          "Two people, budget-friendly",
          "Clostnature 2-Person Tent",
          "Two-person floor, PU5000 and a repair kit."
        ],
        [
          "Solo hiker with trekking poles",
          "Underwood Trekking Pole Tent",
          "Poleless design and the lowest price."
        ],
        [
          "Beginner who wants simple pitching",
          "TOMOUNT 15D Tent",
          "Pre-threaded aluminum poles."
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
          "$30 to $40",
          "Underwood Trekking Pole Tent"
        ],
        [
          "$40 to $50",
          "Clostnature 2-Person Tent"
        ],
        [
          "$110 to $120",
          "TOMOUNT 15D Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Freestanding vs Trekking Pole",
    "cards": [
      {
        "label": "Freestanding",
        "text": "A freestanding tent stands without stakes and moves easily. The TOMOUNT 15D Tent and Clostnature 2-Person Tent use aluminum poles."
      },
      {
        "label": "Trekking pole",
        "text": "A trekking pole tent saves weight and money but needs staking and your own poles. The Underwood Trekking Pole Tent is built this way."
      }
    ],
    "note": "Most first-time buyers should take the TOMOUNT 15D Tent; own trekking poles and want the cheapest option, and the Underwood Trekking Pole Tent fits."
  },
  {
    "subheading": "By Capacity",
    "table": {
      "headers": [
        "Capacity",
        "Recommended pick"
      ],
      "rows": [
        [
          "One person",
          "Underwood Trekking Pole Tent"
        ],
        [
          "One to two people",
          "TOMOUNT 15D Tent"
        ],
        [
          "Two people comfortably",
          "Clostnature 2-Person Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Budget Backpackers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Listed weight, whether poles are included and a stated waterproof rating."
      },
      {
        "label": "In this comparison",
        "text": "The TOMOUNT 15D Tent lists 3.1 lbs with poles, and the Clostnature 2-Person Tent lists PU5000 with a repair kit."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the TOMOUNT 15D Tent if pre-threaded poles and the lightest listed pole-equipped weight matter."
      },
      {
        "label": "Save if",
        "text": "Save with the Underwood Trekking Pole Tent if you already carry trekking poles."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What ultralight means here",
    "explanation": "No single weight defines ultralight, so use the listed number rather than the word. In this list weights run from about 3 to 5.3 lbs for the pole-equipped tents. Compare the weight stated with and without stakes."
  },
  {
    "criterion": "Trekking pole versus freestanding",
    "explanation": "A trekking pole tent saves weight by using your poles, but needs good staking and a flat site. A freestanding tent stands by itself and moves easily. Check whether poles are included."
  },
  {
    "criterion": "Denier and waterproof rating",
    "explanation": "Lower denier fabric weighs less and tears easier, while a higher PU rating resists rain better. A 15D fly is feather-light, and PU5000 is a heavier-duty coating. Look for both numbers on the listing."
  },
  {
    "criterion": "Capacity and floor size",
    "explanation": "A two-person tent gives room for a pack and a partner but weighs more. A one-person tent stays tight and light. Read the interior dimensions before choosing."
  },
  {
    "criterion": "Condensation and ventilation",
    "explanation": "Double-wall tents and vestibule vents reduce moisture inside. Single-wall designs and low pitches build condensation. Look for ventilation windows or mesh doors in the listing."
  }
];

export const faq = [
  {
    "q": "Is a budget ultralight tent reliable?",
    "a": "Listings give weight and waterproof numbers, but long-term durability is not stated. Pitch the tent at home first. The TOMOUNT 15D Tent and Clostnature 2-Person Tent include aluminum poles."
  },
  {
    "q": "What is the most common mistake?",
    "a": "Forgetting that a trekking pole tent needs poles. The Underwood Trekking Pole Tent does not include them. Check your pole length too."
  },
  {
    "q": "Is the TOMOUNT worth paying more for?",
    "a": "If you want a lighter pole-equipped tent with a 15D fly, yes. The Clostnature 2-Person Tent costs less and offers more floor. Choose by trip."
  },
  {
    "q": "How do I pitch a trekking pole tent?",
    "a": "Stake the corners, raise the tent on a pole at least 46 inches long, then stake out the guy lines. The Underwood Trekking Pole Tent listing explains this. Keep the vestibule tight to reduce condensation."
  },
  {
    "q": "How do I keep a light tent dry?",
    "a": "Seam seal the fly if needed and ventilate with the doors. Do not store it damp. Check the floor before each trip."
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
