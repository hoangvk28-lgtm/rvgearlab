export const guideSlug = "best-backpacking-tents-under-100";
export const guideTitle = "5 Best Backpacking Tents Under 100 in 2026";
export const metaTitle = "Best Backpacking Tents Under 100 in 2026";
export const metaDescription = "Best backpacking tents under $100: five budget one and two person tents with aluminum poles, taped seams and honest notes on weight and weather limits.";
export const mainKeyword = "best backpacking tents under 100";
export const introParagraphs = [
  "Under $100, a backpacking tent is a three-season shelter that makes small compromises on weight and fabric. The goal is a dry night in rain and a pack you can still carry, not a tent that handles a storm above treeline.",
  "These five run from a seam-taped two-person with aluminum poles to a classic scout A-frame. Each one is placed by what the listing proves, from stated waterproof numbers to packed weight."
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
    "id": "best-backpacking-tents-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Night Cat 2-Persons Backpacking Tent: Waterproof Lightweight Camping Tent for Two People Hiking Outdoor Mounta",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41QhQdeJlfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FVLLTDPG?tag=rvgearlab-20",
    "description": "The Night Cat two-person tent has an interior of 6.8 by 4.6 by 3.6 feet, two lightweight aluminum poles and dual vestibules. A full-coverage rainfly, a welded waterproof floor and seam-taped construction handle rain.\n\nCompared with the Amazon Basics Dome, it adds a second vestibule, aluminum poles and a floor listed as welded. Against the Night Cat 1-2P, it gives real two-person room and a rainfly that covers the whole tent.\n\nIt suits two hikers who want a rain-tight shelter at a budget price. Two D-shaped doors and interior pockets make camp life easier.",
    "specs": [
      "6.8 x 4.6 x 3.6 ft interior",
      "Two aluminum poles, dual vestibules",
      "Welded floor, seam-taped fly"
    ],
    "pros": [
      "Two vestibules keep packs outside",
      "Aluminum poles save weight",
      "Welded floor and taped seams",
      "Two D-shaped doors"
    ],
    "cons": [
      "Packed weight is not in the main bullets",
      "Only 3.6 feet tall inside"
    ],
    "bestFor": "Two hikers on a budget",
    "take": "The best-built budget two-person. Aluminum poles and two vestibules do the work.",
    "catch": "The listing does not state packed weight."
  },
  {
    "id": "best-backpacking-tents-under-100-2",
    "rank": 2,
    "badge": "Best Easy Setup",
    "name": "Amazon Basics Dome Camping Tent with Easy Setup for Hiking and Backpacking",
    "price": "$41.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31U+A9gSG-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DDSZML1C?tag=rvgearlab-20",
    "description": "The Amazon Basics Dome is a three-season, free-standing two-person tent made from coated polyester with welded seams. It has shock-corded poles that the listing says set up in under 4 minutes, plus a rainfly with a back window and cool-air port.\n\nCompared with the Night Cat 2P, it is the simpler tent with a quicker pitch, a trade that leaves out the second vestibule. Against the Stansport Scout, it is free-standing and does not need stakes to stand.\n\nIt suits first-time backpackers and weekend campers who value fast setup. The removable rainfly lets you stargaze on clear nights.",
    "specs": [
      "3 season, free-standing dome",
      "Setup in under 4 minutes",
      "Welded seams, back window"
    ],
    "pros": [
      "Free-standing, no stakes needed to pitch",
      "Quick setup in under 4 minutes",
      "Back window and port improve airflow",
      "Welded seams keep water out"
    ],
    "cons": [
      "Water-resistant fabric, not a stated rating",
      "No weight in the main bullets"
    ],
    "bestFor": "First-time weekend campers",
    "take": "The easiest tent here to pitch. It is a fair-weather companion.",
    "catch": "The listing calls the fabric water resistant, with no millimeter rating."
  },
  {
    "id": "best-backpacking-tents-under-100-3",
    "rank": 3,
    "badge": "Best Light Solo",
    "name": "Night Cat Backpacking Tent for One 1 to 2 Persons Lightweight Waterproof Camping Hiking Tent for Adults Kids S",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31uxxwrBNWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07WR1V29Y?tag=rvgearlab-20",
    "description": "The Night Cat 1 to 2 person tent measures 7.0 by 3.8 by 3.6 feet and weighs 2 kg (4.4 pounds), packing to 16.5 by 4.7 by 4.7 inches. It uses PU 3000mm polyester with taped seams and fiberglass poles covered by protective cases.\n\nNext to the Night Cat 2P, it is lighter and narrower, so it suits one hiker with gear. Against the Stansport Scout, its fly has a stated 3000mm rating.\n\nIt suits solo hikers who want a light and compact shelter. The pole cases protect hands when you pitch.",
    "specs": [
      "4.4 lb, packs 16.5 x 4.7 x 4.7",
      "PU 3000mm polyester fly",
      "Fiberglass poles with cases"
    ],
    "pros": [
      "Light at 4.4 pounds",
      "Stated 3000mm waterproof rating",
      "Packs to a compact bundle",
      "Pole cases protect hands"
    ],
    "cons": [
      "Tight for two people",
      "Fiberglass poles are less durable"
    ],
    "bestFor": "Solo backpackers",
    "take": "The best solo choice at this price. Treat it as one-person with gear.",
    "catch": "At 3.8 feet wide, a second person is a squeeze."
  },
  {
    "id": "best-backpacking-tents-under-100-4",
    "rank": 4,
    "badge": "Best Classic A-Frame",
    "name": "Stansport Scout Backpack Tent",
    "price": "$36.36",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/310mSmnsU7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0006V2B2I?tag=rvgearlab-20",
    "description": "The Stansport Scout is a classic scout troop A-frame with a 1,000mm polyurethane-coated polyester upper body, a No-See-Um mesh inner door screen and fully taped seams. The floor is polyester oxford.\n\nCompared with the Night Cat tents, it is a simpler design and a lower waterproof rating. Against the Amazon Basics Dome, it is a traditional A-frame that needs stakes to hold its shape.\n\nIt suits youth groups, scouts and car campers who want a low-cost shelter. It is easy to assemble and compact.",
    "specs": [
      "Classic A-frame, 1,000mm coating",
      "No-See-Um mesh door screen",
      "Fully taped seams"
    ],
    "pros": [
      "Fully taped seams",
      "No-See-Um mesh keeps bugs out",
      "Easy A-frame assembly",
      "Compact for storage"
    ],
    "cons": [
      "1,000mm rating is the lowest here",
      "Needs stakes to stand"
    ],
    "bestFor": "Scout troops and car campers",
    "take": "A low-risk, basic shelter. Use it in dry or mild weather.",
    "catch": "The 1,000mm coating is thin for heavy rain."
  },
  {
    "id": "best-backpacking-tents-under-100-5",
    "rank": 5,
    "badge": "Best American Made",
    "name": "2-Person Camping Tent",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41kW3X8r0yL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01IVRSGT0?tag=rvgearlab-20",
    "description": "The Wakeman 2-person tent comes with a rain fly and carrying bag, and the listing notes it is made in the USA. The fabric is nylon, and the listing describes it as built to keep you and your gear dry.\n\nCompared with the Stansport Scout, it adds a rain fly and a carry bag at a similar price. Against the Amazon Basics Dome, it leaves out the free-standing frame and stated pitch time.\n\nIt suits budget campers who care about where a tent is made. It is a no-frills pick for summer trips.",
    "specs": [
      "Nylon, rain fly included",
      "Made in the USA",
      "Carrying bag included"
    ],
    "pros": [
      "Made in the USA",
      "Rain fly and carry bag included",
      "Nylon fabric",
      "Lowest cost in the list"
    ],
    "cons": [
      "Few specs are named on the listing",
      "No waterproof rating or weight shown"
    ],
    "bestFor": "Summer budget campers",
    "take": "A basic, American-made tent. Use it for fair-weather trips.",
    "catch": "Very few specifications are listed, so it is best for dry weather."
  }
];

export const howWeEvaluated = [
  {
    "title": "Budget weather limits",
    "description": "Each tent was read for stated waterproof numbers and seam construction."
  },
  {
    "title": "Weight and packing",
    "description": "Stated weights and packed sizes show which ones fit a hiking pack."
  },
  {
    "title": "Pole and setup",
    "description": "Aluminum versus fiberglass poles and free-standing designs affect durability and pitch time."
  },
  {
    "title": "Space and doors",
    "description": "Interior size, vestibules and doors decide how comfortable each tent is for one or two people."
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
          "Two hikers, wet climate",
          "Night Cat 2P",
          "Aluminum poles, two vestibules, taped seams."
        ],
        [
          "First-time weekend trip",
          "Amazon Basics Dome",
          "Pitches in under 4 minutes."
        ],
        [
          "Solo, weight matters",
          "Night Cat 1-2P",
          "4.4 pounds with a 3000mm fly."
        ],
        [
          "Scout group, car camp",
          "Stansport Scout",
          "Classic A-frame, No-See-Um screen."
        ],
        [
          "Lowest cost, summer",
          "Wakeman 2-Person",
          "Rain fly and carry bag included."
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
          "Wakeman 2-Person or Stansport Scout"
        ],
        [
          "$30 to $50",
          "Night Cat 1-2P or Amazon Basics Dome"
        ],
        [
          "$50 to $60",
          "Night Cat 2P"
        ]
      ]
    }
  },
  {
    "subheading": "Free-standing vs Staked",
    "cards": [
      {
        "label": "Free-standing",
        "text": "Poles hold the shape without stakes, so you can move or shake out the tent. The Amazon Basics Dome and Night Cat 2P stand this way."
      },
      {
        "label": "Staked",
        "text": "Stakes are needed to hold shape. The Stansport Scout is a staked A-frame."
      }
    ],
    "note": "Choose the Amazon Basics Dome for ease and the Night Cat 2P for details."
  },
  {
    "subheading": "By Group Size",
    "table": {
      "headers": [
        "Group",
        "Recommended pick"
      ],
      "rows": [
        [
          "Solo with gear",
          "Night Cat 1-2P"
        ],
        [
          "Two people",
          "Night Cat 2P"
        ],
        [
          "Youth group",
          "Stansport Scout"
        ]
      ]
    }
  },
  {
    "subheading": "For Rainy Backpacking Trips Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Taped seams and a stated waterproof number."
      },
      {
        "label": "In this comparison",
        "text": "The Night Cat 2P lists seam taping and a welded floor, and the Night Cat 1-2P lists 3000mm."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend toward the Night Cat 2P if you hike in rain, since it pairs a welded floor with taped seams and aluminum poles."
      },
      {
        "label": "Save if",
        "text": "Save with the Wakeman 2-Person or Stansport Scout if you camp only in dry weather, since both cost little."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What this budget buys",
    "explanation": "Under $100, a tent is generally a three-season shelter, with polyester fabric and modest waterproofing. Aluminum poles and welded floors are the mark of the better ones. Expect to give up some weight savings."
  },
  {
    "criterion": "Waterproof number",
    "explanation": "A millimeter rating, like the 3000mm on the Night Cat 1-2P, tells how much water pressure fabric resists. 1,000mm is basic, 3000mm is solid for rain. Check the number on both fly and floor."
  },
  {
    "criterion": "Seams and floor",
    "explanation": "Water gets in at the seams and the floor. Taped seams and a welded or bathtub floor, like on the Night Cat 2P, matter more than a high fabric number. Look for the words taped or welded."
  },
  {
    "criterion": "Pole material",
    "explanation": "Aluminum poles flex and survive wind, while fiberglass can splinter. Fiberglass is cheaper and heavier. Check the pole material in the listing."
  },
  {
    "criterion": "Packed weight",
    "explanation": "A 4.4 pound tent like the Night Cat 1-2P is easy to backpack. Many budget listings skip weight. If missing, assume it is heavy."
  },
  {
    "criterion": "Size honestly",
    "explanation": "A two-person tent fits two people with little room for gear. If you carry packs inside, size up or find a vestibule. The Night Cat 2P has two vestibules for exactly that."
  }
];

export const faq = [
  {
    "q": "Is a $100 backpacking tent good enough?",
    "a": "For three-season trips, yes. The Night Cat 2P lists welded floors and taped seams. For storms or snow, spend more."
  },
  {
    "q": "Do I need a footprint?",
    "a": "A footprint protects the floor from wear. A budget tent may not include one. A cheap tarp works."
  },
  {
    "q": "Which tent suits solo backpacking?",
    "a": "The Night Cat 1-2P is light and lists 4.4 pounds. A solo hiker with gear fits well. A second person will feel cramped."
  },
  {
    "q": "How do I stay dry in a budget tent?",
    "a": "Seal the seams if they are not taped and stake out the fly tight. Keep the vents open. Pitch on higher ground."
  },
  {
    "q": "Can I use a scout tent for backpacking?",
    "a": "Yes, for short trips. The Stansport Scout is compact. It is not the lightest option."
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
    "title": "Best Backpacking Tent Under 150",
    "href": "/tents-shelter/best-backpacking-tent-under-150"
  }
];
