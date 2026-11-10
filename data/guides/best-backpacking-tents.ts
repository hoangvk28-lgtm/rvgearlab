export const guideSlug = "best-backpacking-tents";
export const guideTitle = "6 Best Backpacking Tents in 2026";
export const metaTitle = "Best Backpacking Tents in 2026";
export const metaDescription = "Best backpacking tents compared on listed weight, floor space, seam taping and doors for trail trips, from solo shelters to two-person freestanding tents.";
export const mainKeyword = "best backpacking tents";
export const introParagraphs = [
  "A backpacking tent earns its place by balancing weight against livable space, and the honest way to compare is with the numbers on the listing: packed weight, floor area, peak height and how the seams are sealed. Cheap tents often skip one of those figures entirely.",
  "Six tents were chosen from two-person freestanding models to a solo budget shelter, covering the major price tiers. Where a listing gives a weight, floor size or waterproof rating, those figures are used, and where it does not, the gap is noted."
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
    "id": "best-backpacking-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Marmot Crane Creek 2P Tent",
    "price": "$229.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ce510v9lL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0754SP75F?tag=rvgearlab-20",
    "description": "The Marmot Crane Creek 2P offers 32 sq ft of floor, a seam-taped floor, a seam-taped polyester fly and 7000 series aluminum poles. Two large D-shaped doors and two overhead vestibules are listed, and the tent is made without PFAS.\n\nIt carries the most trusted brand name and the most storage here, with a vestibule for each person. Compared with the Kelty Grand Mesa it adds a PFAS-free claim and a second door, while the Kelty lists a precise packed weight.\n\nIt suits backpackers who want proven two-person features and good gear storage. A footprint is not included.",
    "specs": [
      "32 sq ft, 2 D-shaped doors",
      "Seam-taped floor and fly",
      "7000 series aluminum poles"
    ],
    "pros": [
      "Two doors and two vestibules",
      "Fully seam-taped floor and fly",
      "PFAS-free construction",
      "7000 series aluminum poles"
    ],
    "cons": [
      "Highest price of the six",
      "Footprint sold separately"
    ],
    "bestFor": "Reliable two-person trips",
    "take": "The best-equipped two-person tent here, with a door and vestibule per camper.",
    "catch": "The listing does not state a packed weight, so check it before a long hike."
  },
  {
    "id": "best-backpacking-tents-2",
    "rank": 2,
    "badge": "Best Light Freestanding",
    "name": "Kelty Grand Mesa 2P Backpacking Tent",
    "price": "$149.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41830Z1JijL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082P6RMBC?tag=rvgearlab-20",
    "description": "The Kelty Grand Mesa 2P has an 85 by 57 inch floor, 30 sq ft of interior and a 44 inch peak. It packs to 16 by 7 by 7 inches at 4 lb 7 oz, with 68D polyester floor and fly, fully seam-taped, and Quick Corners for easy poles.\n\nIt states a precise packed weight, which the Marmot omits. Compared with the Naturehike it has a taller peak and a freestanding aluminum pole design.\n\nIt suits trail hikers who want a freestanding, 3 season tent from a known brand. An EZ-Zip vestibule provides covered storage.",
    "specs": [
      "85 x 57 in floor, 44 in peak",
      "4 lb 7 oz packed weight",
      "68D polyester, seam-taped"
    ],
    "pros": [
      "4 lb 7 oz stated weight",
      "Freestanding aluminum poles",
      "Quick Corners speed up pitching",
      "Fully seam-taped construction"
    ],
    "cons": [
      "One vestibule only",
      "Smaller floor than the Marmot"
    ],
    "bestFor": "Freestanding backpacking",
    "take": "A precise-weight, freestanding two-person tent from a trail brand.",
    "catch": "One door and one vestibule means shared entry."
  },
  {
    "id": "best-backpacking-tents-3",
    "rank": 3,
    "badge": "Best Value Name Brand",
    "name": "Kelty Discovery Trail Backpacking Tent",
    "price": "$129.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31f8O5c9RhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B096SYW1KP?tag=rvgearlab-20",
    "description": "The Kelty Discovery Trail line lists 2P at 4 lb 5 oz minimum weight, 33 sq ft of floor and a 42 inch peak. It has a taped seam, single door and single vestibule, two poles, a fly vent and DWR/PFC-free fabrics.\n\nIt undercuts the Grand Mesa on price and states a lower minimum weight. Compared with the Night Cat it has a more established brand and a fly vent.\n\nIt suits first-time backpackers who want a name-brand tent at a modest price. Pre-attached guylines and Quick Corners ease setup.",
    "specs": [
      "2P: 4 lb 5 oz, 33 sq ft",
      "42 in peak, 2 poles",
      "Single door, single vestibule"
    ],
    "pros": [
      "Lower weight than the Grand Mesa",
      "Pre-attached guylines",
      "Fly vent reduces condensation",
      "Fluorocarbon-free fabric finishes"
    ],
    "cons": [
      "Single door",
      "Listing covers 1P to 3P sizes"
    ],
    "bestFor": "First backpacking tent",
    "take": "A budget-friendly Kelty with a stated 4 lb 5 oz weight.",
    "catch": "Choose the 2P size on the listing, since it covers 1P, 2P and 3P."
  },
  {
    "id": "best-backpacking-tents-4",
    "rank": 4,
    "badge": "Best Double-Layer Value",
    "name": "Naturehike Cloud up Base Backpacking Tent",
    "price": "$95.20",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31CI68aYl9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DJX7RT3H?tag=rvgearlab-20",
    "description": "The Naturehike Cloud Up Base is a double-layer two-person tent weighing 4.25 lb without footprint and packing to 15.7 by 5.1 by 5.1 inches. Its 210T polyester carries a PU3000mm+ rating with all corners and seams taped, and a ventilation window was added above the front door.\n\nIt includes a footprint and a ventilation upgrade over the base Cloud Up. Compared with the Kelty Grand Mesa it has a lower 41.3 inch peak and costs a bit less.\n\nIt suits hikers who want a light double-wall tent with a footprint included. The B3 mesh inner gives airflow.",
    "specs": [
      "4.25 lb, 82.7 x 49.2 x 41.3 in",
      "PU3000mm+, taped seams",
      "Footprint included"
    ],
    "pros": [
      "4.25 lb without footprint",
      "PU3000mm+ with taped seams",
      "Footprint included",
      "Added ventilation window"
    ],
    "cons": [
      "Narrow 49.2 inch floor",
      "No vestibule detail on the listing"
    ],
    "bestFor": "Light double-wall hiking",
    "take": "A light, footprint-included double-wall tent at a moderate price.",
    "catch": "A 49 inch width fits two narrow pads with no spare room."
  },
  {
    "id": "best-backpacking-tents-5",
    "rank": 5,
    "badge": "Best Budget Two-Person",
    "name": "Night Cat 2-Persons Backpacking Tent: Waterproof Lightweight Camping Tent for Two People Hiking Outdoor Mounta",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41QhQdeJlfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FVLLTDPG?tag=rvgearlab-20",
    "description": "Night Cat's two-person model sleeps two inside roughly 6.8 ft of length, on two aluminum poles, with a door and a vestibule on each side. Its rainfly covers the whole tent, the floor is welded and the seams are taped.\n\nIt gives two doors and two vestibules at a price near the solo tents. Compared with the Naturehike it adds a second vestibule and leaves weight unlisted.\n\nIt suits budget hikers who want two doors for two people. Dual ceiling vents and full mesh walls help ventilation.",
    "specs": [
      "About 6.8 ft long, two doors",
      "Dual vestibules, aluminum poles",
      "Welded floor, full rainfly"
    ],
    "pros": [
      "Two doors and two vestibules",
      "Welded waterproof floor",
      "Ceiling vents for airflow",
      "Quick solo pitch"
    ],
    "cons": [
      "No weight on the listing",
      "Lower brand pedigree"
    ],
    "bestFor": "Budget two-person trips",
    "take": "The cheapest way to get two doors and two vestibules.",
    "catch": "Without a stated weight, check the packed size before a long hike."
  },
  {
    "id": "best-backpacking-tents-6",
    "rank": 6,
    "badge": "Best Solo Budget",
    "name": "Night Cat Backpacking Tent for One 1 to 2 Persons Lightweight Waterproof Camping Hiking Tent for Adults Kids S",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31uxxwrBNWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07WR1V29Y?tag=rvgearlab-20",
    "description": "Night Cat's one-to-two person dome is a 4.4 lb single-wall design about 7 ft long. Taped seams and a PU 3000mm polyester shell keep out rain, and pole cases protect the fiberglass frame.\n\nIt is the cheapest tent here and fits one hiker with gear. Compared with the Night Cat 2-person it is narrower and uses fiberglass instead of aluminum.\n\nIt suits solo hikers or a parent with a child. Setup takes about 1 to 2 minutes, per the listing.",
    "specs": [
      "4.4 lb solo dome",
      "Single wall, taped seams",
      "Fiberglass poles in cases"
    ],
    "pros": [
      "Lowest price of the six",
      "Taped seams and PU rated shell",
      "Compact folded poles",
      "Fast 1 to 2 minute setup"
    ],
    "cons": [
      "Fiberglass poles break more easily",
      "Tight for two adults"
    ],
    "bestFor": "Solo or parent and child",
    "take": "The cheapest tent in the list, sized for one hiker.",
    "catch": "Fiberglass poles save money but are less tough than aluminum."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight",
    "description": "Listed weights were compared."
  },
  {
    "title": "Floor space",
    "description": "Listed dimensions and peak height."
  },
  {
    "title": "Seam taping",
    "description": "Taped or welded seams and floors."
  },
  {
    "title": "Doors and vestibules",
    "description": "Entry and storage layouts."
  },
  {
    "title": "Price tier",
    "description": "Cost per person."
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
    "subheading": "By Hiker Profile",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Two hikers who value storage",
          "Marmot Crane Creek 2P",
          "Door and vestibule per hiker."
        ],
        [
          "Known weight, freestanding",
          "Kelty Grand Mesa 2P",
          "4 lb 7 oz."
        ],
        [
          "First tent, name brand",
          "Kelty Discovery Trail",
          "4 lb 5 oz minimum."
        ],
        [
          "Light double-wall with footprint",
          "Naturehike Cloud Up Base",
          "4.25 lb."
        ],
        [
          "Budget for two",
          "Night Cat 2-Person",
          "Two doors and vestibules."
        ],
        [
          "Solo hiker",
          "Night Cat 1-2 Person",
          "4.4 lb, lowest price."
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
          "$30 to $60",
          "Night Cat 1-2 Person or Night Cat 2-Person"
        ],
        [
          "$110 to $130",
          "Naturehike Cloud Up Base or Kelty Discovery Trail"
        ],
        [
          "$140 to $230",
          "Kelty Grand Mesa 2P or Marmot Crane Creek 2P"
        ]
      ]
    }
  },
  {
    "subheading": "Freestanding vs Fiberglass Budget",
    "cards": [
      {
        "label": "Aluminum pole tents",
        "text": "Lighter and tougher. The Marmot Crane Creek 2P, Kelty Grand Mesa 2P, Naturehike Cloud Up Base and Night Cat 2-Person use aluminum."
      },
      {
        "label": "Fiberglass pole tents",
        "text": "Cheaper but heavier on the poles and easier to snap. The Night Cat 1-2 Person uses fiberglass."
      }
    ],
    "note": "Choose aluminum like the Kelty Grand Mesa 2P for regular trips, and fiberglass only for light budget use."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "Premium",
          "Marmot Crane Creek 2P"
        ],
        [
          "Mid-high",
          "Kelty Grand Mesa 2P"
        ],
        [
          "Mid",
          "Kelty Discovery Trail"
        ],
        [
          "Low-mid",
          "Naturehike Cloud Up Base"
        ],
        [
          "Lowest",
          "Night Cat 1-2 Person"
        ]
      ]
    }
  },
  {
    "subheading": "Weekend Trail Trips",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated weight under 4.5 lb and a taped fly and floor."
      },
      {
        "label": "In this comparison",
        "text": "The Kelty Discovery Trail lists 4 lb 5 oz and a taped seam, and the Kelty Grand Mesa 2P lists 4 lb 7 oz."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Marmot Crane Creek 2P for storage and brand, or the Kelty Grand Mesa 2P for freestanding comfort."
      },
      {
        "label": "Save if",
        "text": "Save with the Kelty Discovery Trail or Night Cat 2-Person."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Weight and who carries it",
    "explanation": "A two-person tent around 4 to 5 lb is a good target, since two hikers can split it. Listings that give an exact packed weight are easier to trust. Check whether footprints or stakes are included in the number."
  },
  {
    "criterion": "Floor space and peak height",
    "explanation": "Two adults on standard pads need about 50 inches of width. A 42 to 44 inch peak lets you sit up. Compare listed dimensions rather than the person label."
  },
  {
    "criterion": "Seams and floors",
    "explanation": "Taped or welded seams and a bathtub floor keep water out of the stitching. A rating of 3000mm suits steady rain. Look for both on the listing."
  },
  {
    "criterion": "Doors, vestibules and entry",
    "explanation": "Two doors mean no climbing over a partner at night, and a vestibule keeps wet boots out of the sleeping area. Single-door tents save weight. Check the layout."
  },
  {
    "criterion": "Freestanding versus staked",
    "explanation": "Freestanding tents pitch on rock and can be moved. Staked designs weigh less. Choose by the terrain you expect."
  }
];

export const faq = [
  {
    "q": "What weight should a backpacking tent be?",
    "a": "Roughly 3 to 5 lb for two people is typical. The Kelty Discovery Trail lists 4 lb 5 oz. Split the weight between two hikers."
  },
  {
    "q": "What is the common mistake?",
    "a": "Buying on person count. Two adults in a 2 person tent have little spare room. Check dimensions like the Kelty Grand Mesa 2P's 85 by 57 inch floor."
  },
  {
    "q": "Is a name-brand tent worth the price?",
    "a": "For longer trips and stated weights, yes, like the Marmot Crane Creek 2P. For occasional use, the Night Cat 2-Person is enough."
  },
  {
    "q": "How do I pitch a freestanding tent?",
    "a": "Lay out the body, assemble the poles, clip or sleeve them, raise the frame, and stake the corners. Add the fly and guy lines. Practice once at home."
  },
  {
    "q": "How do I dry the tent after rain?",
    "a": "Shake off water, hang the fly and body in shade or wind, and pack only when fully dry. Store loosely."
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
