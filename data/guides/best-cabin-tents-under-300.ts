export const guideSlug = "best-cabin-tents-under-300";
export const guideTitle = "6 Best Cabin Tents Under 300 in 2026";
export const metaTitle = "Best Cabin Tents Under 300 in 2026";
export const metaDescription = "Best cabin tents under $300 compared on floor size, setup time and weather sealing, from a 2-minute instant cabin to a 14-person two-room tent.";
export const mainKeyword = "best cabin tents under 300";
export const introParagraphs = [
  "Under $300 the choice is between instant cabins that save time and large hand-built cabins that save money per square foot. Both work, but they suit different campers and different sites.",
  "Six cabins are ranked from the best instant-versus-size balance to the largest floor. Each is judged on stated dimensions, fabric rating, setup effort and what the extra spend delivers over a $200 cabin."
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
    "id": "best-cabin-tents-under-300-1",
    "rank": 1,
    "badge": "Best Value",
    "name": "CORE 9 Person Instant Cabin Tent",
    "price": "$249.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Zj-W5I+ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00VFH1RQS?tag=rvgearlab-amz-20",
    "description": "The CORE cabin has a floor of roughly fourteen by nine feet under a 78 inch peak, fits two queen air beds and goes up in about two minutes because the poles are pre-attached. H2O Block 1200mm fabric, a taped fly and sealed seams keep rain out.\n\nIt has the best balance of pitch speed and weather sealing in the list, ahead of the Fanttik on seam detail and the KTT on speed. It gives up floor to the 16 ft KTT.\n\nFamilies who value time at camp will like it. Storage pockets keep small items organized.",
    "specs": [
      "14 by 9 ft, 78 in peak",
      "Pre-attached poles, 2 minutes",
      "1200mm fabric, taped fly"
    ],
    "pros": [
      "Two-minute setup",
      "Taped fly and sealed seams",
      "Room for two queen air beds",
      "Storage pockets inside"
    ],
    "cons": [
      "Heavy and bulky packed",
      "Nine-person label assumes no gear"
    ],
    "bestFor": "Time-short families",
    "take": "The best mix of speed and weather sealing.",
    "catch": "Comfortable capacity is about four people with gear."
  },
  {
    "id": "best-cabin-tents-under-300-2",
    "rank": 2,
    "badge": "Largest Floor",
    "name": "KTT Extra Large Tent 12-14 Person",
    "price": "$249.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41XZyxzAv5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FRWY36S1?tag=rvgearlab-amz-20",
    "description": "The KTT is a 16 ft by 11 ft cabin with a 7.4 ft peak that fits four full air mattresses and sleeps 12 to 14. Two rooms, three doors, three windows, a large rear window and two top windows supply light and air.\n\nIt offers the biggest floor in the list and a 7.4 ft ceiling. The CORE is faster, and the 12-person KTT is cheaper.\n\nLarge groups and multi-family trips will use all of it. Hand assembly takes time.",
    "specs": [
      "16 ft by 11 ft, 7.4 ft peak",
      "Two rooms, three doors",
      "Rear and top windows"
    ],
    "pros": [
      "Biggest floor in the list",
      "7.4 ft ceiling",
      "Rear and top windows",
      "Corner hooks for lamps"
    ],
    "cons": [
      "Hand assembly takes time",
      "Needs a large flat pad"
    ],
    "bestFor": "Large groups",
    "take": "The largest cabin in the group, aimed at multi-family trips.",
    "catch": "Plan an hour for the first pitch."
  },
  {
    "id": "best-cabin-tents-under-300-3",
    "rank": 3,
    "badge": "Fastest Large Pitch",
    "name": "FanttikOutdoor Zeta C10 Pro 10 Person Tent for Camping Setup in 60s",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Fe1rEMrPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CR19JW7M?tag=rvgearlab-amz-20",
    "description": "The Fanttik cabin covers 168 by 120 inches and sets up in under 60 seconds. Mesh panels line every side, floor vents and a screened ceiling move air, and a channel at the door drains water away.\n\nIt pitches faster than the CORE and holds ten for sleeping only, with five comfortable with gear. The CORE has more detailed seam sealing.\n\nFamilies who want a very quick setup will like it. Pull zippers gently.",
    "specs": [
      "168 by 120 in, 60-second setup",
      "Mesh on four sides",
      "Tub-style base"
    ],
    "pros": [
      "Pitches in under 60 seconds",
      "Mesh on every side",
      "Drainage channel",
      "Tub-style base"
    ],
    "cons": [
      "Large bag",
      "Zippers need care"
    ],
    "bestFor": "Quick family stops",
    "take": "A fast, breezy cabin with a drainage channel.",
    "catch": "Five people with gear is the realistic limit."
  },
  {
    "id": "best-cabin-tents-under-300-4",
    "rank": 4,
    "badge": "Best Hand-Built Value",
    "name": "KTT Extra Large Tent 12 Person",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/416cjawrvOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08MDTJTZP?tag=rvgearlab-amz-20",
    "description": "The KTT 12P covers a fourteen by ten foot floor under a 6.58 ft ceiling and fits four air beds. Two rooms, three doors and three windows, all with mesh, come standard.\n\nIt costs less than the CORE and far less than the 14-person KTT. The trade-off is that poles are not pre-attached, so the pitch takes real work.\n\nLarge families on a budget will like the volume. Repair patches and buckles are in the box.",
    "specs": [
      "14 by 10 ft, 6.58 ft ceiling",
      "Two rooms, three doors",
      "Repair patches included"
    ],
    "pros": [
      "Fits four full air mattresses",
      "Two rooms split sleeping areas",
      "Mesh on doors and windows",
      "Repair patches in the box"
    ],
    "cons": [
      "Hand assembly takes time",
      "Heavy for one person"
    ],
    "bestFor": "Budget families",
    "take": "The cheaper way to get a large two-room cabin.",
    "catch": "Expect the first pitch to take well over twenty minutes."
  },
  {
    "id": "best-cabin-tents-under-300-5",
    "rank": 5,
    "badge": "Best for Rain, Small Group",
    "name": "Happy Travel Tent 4 Person Tents for Camping",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41MUwytM0FL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FHQBQZ2R?tag=rvgearlab-amz-20",
    "description": "The four-person Happy Travel cabin spans eight by seven feet with a 75 inch peak and a 3000mm waterproof rating. A mesh body, removable fly and electrical port come with it.\n\nIt costs about a third of the CORE and has the highest stated rain rating in the list. The floor is the smallest here, so it suits couples and one child.\n\nSmall families who camp in showery climates will like the value. It is also the easiest to carry.",
    "specs": [
      "Eight by seven ft floor",
      "3000mm rain rating",
      "E-port and mesh body"
    ],
    "pros": [
      "3000mm stated waterproof rating",
      "Lowest cost in the list",
      "75 inch peak",
      "E-port for a fan cord"
    ],
    "cons": [
      "Small floor for four adults",
      "Single room only"
    ],
    "bestFor": "Small families",
    "take": "The budget cabin with the best stated rain rating.",
    "catch": "Four adults will be crowded, so plan on three."
  },
  {
    "id": "best-cabin-tents-under-300-6",
    "rank": 6,
    "badge": "Best Porch Cabin",
    "name": "Portal 8 Person Tents for Camping",
    "price": "$132.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31j+pwSvDuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DFCFR5VG?tag=rvgearlab-amz-20",
    "description": "The Portal measures about fourteen feet by eight under an 80 inch ceiling, with two rooms and a porch roughly as long as the tent. Ground vents, six windows and taped seams finish the build.\n\nIts porch is larger than anything else here and its rooms are separate. The CORE pitches faster, while the Portal gives more room to sit outside.\n\nFamilies who want a living area will like the layout. Fiberglass and steel poles hold the frame.",
    "specs": [
      "About 14 ft by 8 ft, 80 in peak",
      "Two rooms and a deep porch",
      "Taped seams, ground vents"
    ],
    "pros": [
      "Largest porch in the list",
      "Two rooms with separate doors",
      "Fully taped seams",
      "Ground vents cut condensation"
    ],
    "cons": [
      "Slower pitch than instant cabins",
      "Needs a flat site"
    ],
    "bestFor": "Porch lovers",
    "take": "A two-room cabin with a living-area porch.",
    "catch": "Plan on about fifteen minutes with a helper."
  }
];

export const howWeEvaluated = [
  {
    "title": "Setup",
    "description": "Compared instant, hand-built and pop-up cabins."
  },
  {
    "title": "Floor",
    "description": "Compared stated dimensions."
  },
  {
    "title": "Weather",
    "description": "Looked at taped seams and fly."
  },
  {
    "title": "Ventilation",
    "description": "Counted mesh windows and vents."
  },
  {
    "title": "Value",
    "description": "Weighed floor and speed."
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
          "Quick pitch and weather seal",
          "CORE 9P Instant Cabin",
          "Two-minute setup."
        ],
        [
          "Biggest floor",
          "KTT 14P Two-Room Cabin",
          "16 ft by 11 ft."
        ],
        [
          "Fastest large pitch",
          "Fanttik Zeta C10 Pro Cabin",
          "Under a minute."
        ],
        [
          "Budget large cabin",
          "KTT 12P Two-Room Hand-Built",
          "Four air beds."
        ],
        [
          "Rainy small group",
          "Happy Travel 4P Tall Cabin",
          "3000mm."
        ],
        [
          "Porch",
          "Portal 8P Porch Cabin",
          "Large porch."
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
          "$90 to $140",
          "Happy Travel 4P Tall Cabin or Portal 8P Porch Cabin"
        ],
        [
          "$190 to $220",
          "KTT 12P Two-Room Hand-Built or Fanttik Zeta C10 Pro Cabin"
        ],
        [
          "$240 to $270",
          "CORE 9P Instant Cabin or KTT 14P Two-Room Cabin"
        ]
      ]
    }
  },
  {
    "subheading": "Instant vs Hand-Built",
    "cards": [
      {
        "label": "Instant",
        "text": "Instant cabins pitch fast. The CORE 9P Instant Cabin and Fanttik Zeta C10 Pro Cabin are examples."
      },
      {
        "label": "Hand-built",
        "text": "Hand-built cabins cost less. The KTT 14P Two-Room Cabin, KTT 12P Two-Room Hand-Built and Portal 8P Porch Cabin are examples."
      }
    ],
    "note": "Pick the CORE 9P Instant Cabin for speed."
  },
  {
    "subheading": "By Group",
    "table": {
      "headers": [
        "Priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Family of four",
          "CORE 9P Instant Cabin"
        ],
        [
          "Two families",
          "KTT 14P Two-Room Cabin"
        ],
        [
          "Couple with child",
          "Happy Travel 4P Tall Cabin"
        ],
        [
          "Budget six",
          "KTT 12P Two-Room Hand-Built"
        ]
      ]
    }
  },
  {
    "subheading": "For Rainy Climates Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Taped seams and a full fly."
      },
      {
        "label": "In this comparison",
        "text": "The CORE 9P Instant Cabin and Portal 8P Porch Cabin have taped seams."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the CORE 9P Instant Cabin for speed."
      },
      {
        "label": "Save if",
        "text": "Save with the KTT 12P Two-Room Hand-Built."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Instant versus hand-built",
    "explanation": "Instant cabins pitch in a minute or two with pre-attached poles, but they weigh more and the bag is long. Hand-built cabins pack smaller and cost less per square foot. Decide by how much time you have at camp and whether you can carry a bulky bag."
  },
  {
    "criterion": "Capacity labels",
    "explanation": "A 9 or 14 person rating counts sleeping bags laid side by side with no gear in the tent. Count air beds instead: two queen beds suit four people comfortably. Plan the layout on paper using your actual bed sizes, and add a few feet of aisle."
  },
  {
    "criterion": "Taped seams and fly coverage",
    "explanation": "Taped seams stop leaks at the stitching, where water enters first. A fly that reaches the ground adds protection from wind-driven rain. Look for the word taped in the title and check how low the fly hangs, and keep spare stakes since a tight fly pulls hard on every anchor point in a gust."
  },
  {
    "criterion": "Ventilation layout",
    "explanation": "Mesh windows on several sides, floor vents and a mesh ceiling reduce condensation and heat. Count the openings and check they can be closed in cold weather. A cabin with no vents feels clammy by morning, and note that vents also help the tent dry faster after a wet night."
  },
  {
    "criterion": "Floor drainage",
    "explanation": "A tub-style base curves up the wall so splashes do not enter, and a channel at the door keeps puddles out. Both help on wet ground. Look for them in the product images and pitch on a slight rise, and add a ground sheet cut smaller than the floor so water cannot channel beneath it."
  }
];

export const faq = [
  {
    "q": "Is the CORE really a 9-person tent?",
    "a": "Only without gear. The CORE 9P Instant Cabin fits two queen air beds and comfortably four people with gear. Treat the nine-person label as a sleeping bag count rather than a practical family size, which is the number to use when planning where everyone sleeps."
  },
  {
    "q": "Why choose an instant cabin?",
    "a": "It saves time and effort, especially when you arrive late or camp alone. The Fanttik Zeta C10 Pro Cabin and CORE 9P Instant Cabin raise in a minute or two. You pay with weight and a bulkier bag."
  },
  {
    "q": "Do large cabins need two people to pitch?",
    "a": "Usually yes, especially hand-built models like the KTT 14P Two-Room Cabin. Instant cabins can be raised by one adult but are easier with two. Plan on extra hands for staking and fly attachment, because lifting a roof frame alone is awkward and risks bending the poles."
  },
  {
    "q": "How do I improve a cabin's waterproofing?",
    "a": "Apply seam sealer to stitched seams, tension the fly and use a footprint cut slightly smaller than the floor. Re-treat the fly with a waterproofing spray each season. Pitch on a slight rise so water drains away."
  },
  {
    "q": "How do I store a large cabin tent?",
    "a": "Dry it fully in the sun, fold it loosely and keep it in a cool, dry place. Avoid leaving it compressed in its bag for months. Check poles and zippers before the next trip, and mark the bag with the tent name so poles never get separated."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Cabin Tents",
    "href": "/tents-shelter/best-cabin-tents"
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
