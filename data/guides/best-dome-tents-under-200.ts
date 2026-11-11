export const guideSlug = "best-dome-tents-under-200";
export const guideTitle = "5 Best Dome Tents Under 200 in 2026";
export const metaTitle = "Best Dome Tents Under 200 in 2026";
export const metaDescription = "Best dome tents under $200 compared across a mesh-top backpacking dome, a 6-person weather dome, a big divided dome and an instant dome for car campers.";
export const mainKeyword = "best dome tents under 200";
export const introParagraphs = [
  "Two hundred dollars covers the whole range of dome styles, from a stargazing backpacking dome to a ten-person family tent. The difference between picks is less about price and more about whether you hike in or drive to camp.",
  "Five domes are ranked here from best overall to cheapest baseline. Each is judged on stated floor size, fabric and seam details, pitching effort and the trip it fits best."
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
    "id": "best-dome-tents-under-200-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Teton Mountain Ultra Tent; 4 Person Backpacking Dome Tent for Camping; Grey",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31COGJizQ3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B085WV6HJR?tag=rvgearlab-amz-20",
    "description": "The TETON Mountain Ultra sleeps up to four and is sold in 1 to 4 person sizes. Its roof is a complete mesh dome for night-sky views, and a fitted rainfly with all-around vents closes the tent in when weather changes.\n\nIt is the only true backpacking-grade dome here, so it packs tighter than the CORE or HG. The footprint is sold separately, which adds to the cost compared with the Coleman.\n\nHikers and campers who want a four-season-minded look at the sky will enjoy it. The micro-mesh inner blocks insects.",
    "specs": [
      "Full mesh top, 360-degree fly vents",
      "Micro-mesh inner tent",
      "Four-person dome, 1-4 sizes"
    ],
    "pros": [
      "Stargazing mesh roof",
      "360-degree rainfly ventilation",
      "Micro-mesh inner blocks bugs",
      "Packs tight for hiking"
    ],
    "cons": [
      "Footprint costs extra",
      "Dome walls limit headroom"
    ],
    "bestFor": "Hikers who stargaze",
    "take": "A backpacking-grade dome with views and a vented fly.",
    "catch": "Budget for a footprint, since floor protection is not included."
  },
  {
    "id": "best-dome-tents-under-200-2",
    "rank": 2,
    "badge": "Best Family Space",
    "name": "CORE 6 Person Dome Tent with Quick Setup",
    "price": "$139.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/3156WMcVK1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DPNGT4TT?tag=rvgearlab-amz-20",
    "description": "The CORE dome has a floor near ten feet by nine and a 66 inch center, so a couple of queen air beds fit side by side. Its ball-and-socket joints speed assembly, and 1200mm H2O Block fabric sits under a taped rainfly, with sealed seams and fully zipped windows.\n\nIt offers three times the floor of the TETON and a storage-ready interior with pockets and a gear loft. The TETON wins on packed size and stargazing.\n\nFamilies wanting a roomy, weather-ready shelter will like it. Guylines and steel stakes come in the box.",
    "specs": [
      "Ten ft by nine ft floor",
      "1200mm, taped rainfly",
      "Gear loft and pockets"
    ],
    "pros": [
      "Taped rainfly and sealed seams",
      "Fits two queen beds",
      "Gear loft and storage pockets",
      "Steel stakes and guylines included"
    ],
    "cons": [
      "Three to four people fit comfortably",
      "Heavier bag"
    ],
    "bestFor": "Family weekends",
    "take": "A roomy, well-sealed dome for family camping.",
    "catch": "Nominal six-person capacity assumes sleeping bags with no gear."
  },
  {
    "id": "best-dome-tents-under-200-3",
    "rank": 3,
    "badge": "Biggest Dome",
    "name": "HG 10 Person Camping Tent Waterproof Family Dome Tent for Camping",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31wtzejDcqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GT2VG1JQ?tag=rvgearlab-amz-20",
    "description": "The HG dome has a 168 by 132 inch floor, a 74 inch peak, a removable divider curtain and an e-port. It is made from 185T polyester with a PU1000 coating and weighs 20.5 lb.\n\nIt has the biggest floor in this list and a divider that creates two rooms, which the CORE and Coleman skip. Its coating suits showers more than storms.\n\nLarge groups and multi-family trips benefit from the extra room. It pitches in about ten minutes.",
    "specs": [
      "Floor 14 ft by 11 ft",
      "Divider curtain, e-port",
      "PU1000, 20.5 lb"
    ],
    "pros": [
      "Largest floor in the group",
      "Divider creates two rooms",
      "E-port for cords",
      "Carry bag included"
    ],
    "cons": [
      "PU1000 rating is light",
      "Takes about ten minutes to pitch"
    ],
    "bestFor": "Multi-family trips",
    "take": "The biggest, most flexible floor in the group.",
    "catch": "Keep it for fair weather and carry an extra tarp."
  },
  {
    "id": "best-dome-tents-under-200-4",
    "rank": 4,
    "badge": "Fastest Setup",
    "name": "Coleman 4/6/8/10 Person Instant Camping Tent with 1-Minute Setup",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31NsFyuHaWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7QK1N81?tag=rvgearlab-amz-20",
    "description": "The Coleman instant dome is sold in four sizes, and the 4-person version measures eight feet by seven. Pre-attached poles set up in as fast as one minute, an integrated rainfly improves airflow, and Polyguard 2X double-thick fabric resists wear.\n\nIt has the fastest pitch here, and its fabric is thicker than the CORE or HG. The 4-person size is the smallest floor on the list.\n\nBeginners and quick-trip campers value the speed. The fly is integrated, so you do not carry loose parts.",
    "specs": [
      "Eight by seven ft, 4-person size",
      "Pre-attached poles, under 5 minutes",
      "Polyguard 2X fabric"
    ],
    "pros": [
      "Sets up in as fast as a minute",
      "Double-thick Polyguard 2X fabric",
      "Integrated rainfly",
      "Brand support and parts"
    ],
    "cons": [
      "Small floor in the 4-person size",
      "Four sizes share a page"
    ],
    "bestFor": "Beginners and quick trips",
    "take": "The quickest pitch with sturdy fabric, ideal for first-timers.",
    "catch": "Check the size selector before adding to the cart."
  },
  {
    "id": "best-dome-tents-under-200-5",
    "rank": 5,
    "badge": "Cheapest Baseline",
    "name": "JELUCAMP 1/2/4/6 Person Dome Tents for Camping Lightweight Backpacking Tent",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tyug8U+OL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSCWN2R7?tag=rvgearlab-amz-20",
    "description": "The JELUCAMP is a 4.3 lb two-person dome with a 7.2 ft by 4.9 ft footprint. Its PU3000 shell rides on fiberglass poles, and the door has a second mesh layer for airflow.\n\nIt costs a fraction of the other picks and covers two campers well. The TETON adds mesh and a footprint option, while the JELUCAMP sets the budget floor.\n\nOccasional campers and kids' sleepovers fit this tent. It is easy to carry.",
    "specs": [
      "4.3 lb, PU3000 polyester",
      "7.9mm fiberglass poles",
      "Double-layer mesh door"
    ],
    "pros": [
      "Lowest cost by far",
      "PU3000 coating",
      "Light 4.3 lb",
      "Double-layer door"
    ],
    "cons": [
      "Small floor",
      "Fiberglass poles"
    ],
    "bestFor": "Occasional campers",
    "take": "A rated budget dome for casual use.",
    "catch": "Choose the 2 person size."
  }
];

export const howWeEvaluated = [
  {
    "title": "Intended use",
    "description": "Separated backpacking domes from family car-camping domes."
  },
  {
    "title": "Floor and peak",
    "description": "Compared stated floor dimensions and center heights."
  },
  {
    "title": "Weather details",
    "description": "Looked at PU ratings, taped seams and fly design."
  },
  {
    "title": "Setup",
    "description": "Compared instant, sleeve and ball-and-socket pitching."
  },
  {
    "title": "Price tiers",
    "description": "Spread picks from budget to the top of the cap."
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
          "Backpacking and stargazing",
          "TETON Mountain Ultra 4P",
          "Mesh top and compact pack."
        ],
        [
          "Family weekend, weather",
          "CORE 6P Weather Dome",
          "Taped rainfly and gear loft."
        ],
        [
          "Big group",
          "HG 10P Divided Dome",
          "Divider curtain."
        ],
        [
          "Quick pitch, first-timer",
          "Coleman Instant 4P",
          "Pre-attached poles."
        ],
        [
          "Casual use, lowest cost",
          "JELUCAMP Dome Baseline",
          "Cheapest rated dome."
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
          "$20 to $130",
          "JELUCAMP Dome Baseline or HG 10P Divided Dome"
        ],
        [
          "$130 to $180",
          "CORE 6P Weather Dome or Coleman Instant 4P"
        ],
        [
          "$190 to $200",
          "TETON Mountain Ultra 4P"
        ]
      ]
    }
  },
  {
    "subheading": "Backpacking Dome vs Family Dome",
    "cards": [
      {
        "label": "Backpacking dome",
        "text": "A backpacking dome weighs less and packs tight. The TETON Mountain Ultra 4P and JELUCAMP Dome Baseline fit here."
      },
      {
        "label": "Family dome",
        "text": "A family dome offers floor and headroom but is heavier. The CORE 6P Weather Dome, HG 10P Divided Dome and Coleman Instant 4P belong here."
      }
    ],
    "note": "Pick the CORE 6P Weather Dome for family trips, and the TETON Mountain Ultra 4P if you carry your tent."
  },
  {
    "subheading": "By Budget Range",
    "table": {
      "headers": [
        "Priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $50",
          "JELUCAMP Dome Baseline"
        ],
        [
          "Around $130",
          "CORE 6P Weather Dome"
        ],
        [
          "Around $180",
          "Coleman Instant 4P"
        ],
        [
          "Near $200",
          "TETON Mountain Ultra 4P"
        ]
      ]
    }
  },
  {
    "subheading": "For Stargazing Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A full mesh top and a fly that can be rolled back."
      },
      {
        "label": "In this comparison",
        "text": "The TETON Mountain Ultra 4P offers a full mesh dome top and a micro-mesh inner, and a 360-degree vented fly."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the TETON Mountain Ultra 4P if you hike in, since it combines mesh views with a compact pack."
      },
      {
        "label": "Save if",
        "text": "Save with the JELUCAMP Dome Baseline for casual two-person trips."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Backpacking or car-camping design",
    "explanation": "Backpacking domes chase low weight and a small packed bag, while car-camping domes chase floor area and headroom. Neither is better, but using the wrong one is frustrating, either from carrying too much or from having no space inside. Decide how you reach camp, then match the weight and bag size to that."
  },
  {
    "criterion": "Mesh roofs and fly coverage",
    "explanation": "A full mesh roof shows the sky and cools the tent, but it only keeps rain out when the fly goes on top. Look for a fly that reaches near the ground and has vents to limit condensation. Pack the fly even on clear nights, because mountain weather changes quickly."
  },
  {
    "criterion": "Seam sealing and fabric coating",
    "explanation": "A 1200mm coating handles showers and 3000mm handles sustained rain, but a tent with neither taped seams nor a stated rating is a gamble. Seams are where water enters first. Look for the word taped in the title and a rating that applies to the fly."
  },
  {
    "criterion": "Divider curtains and rooms",
    "explanation": "A removable divider splits a large dome into two sleeping areas, which helps kids and adults who want separate space. The curtain adds fabric weight and does not block sound or light well. Check that it detaches so you can use the whole floor on smaller trips, and plan which room holds the gear."
  },
  {
    "criterion": "Pitch time and people needed",
    "explanation": "Instant domes go up in about a minute, while large divided domes may take ten minutes and two adults. Match the effort to who is at camp and how tired they will be after the drive. Solo campers should favor instant or small domes, and groups can accept longer pitches in exchange for more space."
  }
];

export const faq = [
  {
    "q": "Is a $200 dome worth it over a $100 dome?",
    "a": "Yes if you need weather sealing or a specific feature. The CORE 6P Weather Dome adds taped seams and 1200mm fabric, and the TETON Mountain Ultra 4P is built for hikers. For casual fair-weather camping, a $100 dome is usually enough."
  },
  {
    "q": "Can I use a backpacking dome for car camping?",
    "a": "Yes. The TETON Mountain Ultra 4P works for car camping if you accept a smaller floor and a lower peak than a family dome. Bring a footprint, since it is not included, and a sleeping pad sized for the narrower interior."
  },
  {
    "q": "How many people really fit in a 10-person dome?",
    "a": "About six to eight with sleeping bags and little gear. The HG 10P Divided Dome has a floor of 168 by 132 inches, which holds two big air beds with a walkway. Plan on four or five people once gear is inside."
  },
  {
    "q": "How do I set up the Coleman instant dome?",
    "a": "Unfold the tent, extend the pre-attached poles and push the frame into position. The Coleman Instant 4P can go up in as fast as one minute. Stake the corners, then attach the integrated rainfly and tighten the guy lines."
  },
  {
    "q": "How should I care for a mesh-top tent?",
    "a": "Keep the fly on when rain is possible, shake dust from the mesh after each trip and let the tent dry fully before packing. Avoid sharp objects near the mesh, and store it loosely in a cool, dry place so the coating stays intact."
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
