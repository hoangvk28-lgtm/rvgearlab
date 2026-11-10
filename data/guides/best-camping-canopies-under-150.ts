export const guideSlug = "best-camping-canopies-under-150";
export const guideTitle = "4 Best Camping Canopies Under 150 in 2026";
export const metaTitle = "Best Camping Canopies Under 150 in 2026";
export const metaDescription = "Best camping canopies under $150, compared on sidewall design, tube strength, fabric rating and wheeled bags, for buyers who want more than a bare 10x10.";
export const mainKeyword = "best camping canopies under 150";
export const introParagraphs = [
  "A $150 canopy budget buys a different class than $75 or $100: sidewalls, a wheeled bag and a longer warranty, instead of just a roof. Even so, only four canopies in this range pass the bar here, and the list shows where the extra money actually goes.",
  "They are ordered by how much utility each adds beyond shade. The GVDV comes first because it pairs a full sidewall set with a warranty, while the cheapest pick, the Zeny, stays on the list as the sensible no-frills option."
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
    "id": "best-camping-canopies-under-150-1",
    "rank": 1,
    "badge": "Best Value Under $150",
    "name": "GVDV 10x10 Pop Up Tent with 4 Sidewalls",
    "price": "$119.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41aC5PNm+4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H4Y85WKR?tag=rvgearlab-20",
    "description": "The GVDV is a 10 by 10 foot canopy with four sidewalls, a one-push lock and three height settings, giving 100 square feet of shade. It uses a 210D silver-coated Oxford top rated UPF 50+, a rust-resistant steel frame, integrated vents, a wheeled storage bag and a 12-month warranty.\n\nWarranty cover and a wheeled bag arrive together on this one, which is why it takes first place. The Vinabilia gives a similar sidewall set for less money, and the NatureNook gives a larger floor.\n\nIt suits campers who want shade, walls and some manufacturer backing for regular use. The roof has vents, which helps with heat build-up when the walls are closed.",
    "specs": [
      "10x10 ft with four sidewalls",
      "210D UPF 50+ silver-coated top",
      "12-month warranty, wheeled bag"
    ],
    "pros": [
      "Includes a 12-month warranty",
      "Wheeled bag makes carrying easier",
      "Integrated vents release heat",
      "Three height settings"
    ],
    "cons": [
      "Costs about $20 more than the Vinabilia",
      "Two people recommended for setup"
    ],
    "bestFor": "Regular camping use with walls",
    "take": "The strongest all-round package here, with walls, vents and warranty cover together.",
    "catch": "Setup is easier with two people, so it is not an ideal solo canopy."
  },
  {
    "id": "best-camping-canopies-under-150-2",
    "rank": 2,
    "badge": "Best Value Sidewalls",
    "name": "10x10 Pop Up Canopy Tent with Sidewalls",
    "price": "$98.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JmXRQY+kL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G6DPMKSM?tag=rvgearlab-20",
    "description": "Vinabilia's 10 by 10 foot canopy has four removable sidewalls, a one-push center lock and three heights. It uses 25 by 25 millimeter main tubing and 22 by 11 millimeter crossbars, and packs under 31 pounds.\n\nIt costs about $33 less than the GVDV, and it gives the same sidewall set and a similar frame. You lose the warranty and the wheeled bag, which is the price of the lower tag.\n\nIt suits budget buyers who want walls at the lowest cost in this range. It fits a table and chairs for six to eight people.",
    "specs": [
      "Four removable sidewalls",
      "25mm main tube, one-push center lock",
      "Packs under 31 lb"
    ],
    "pros": [
      "Walls included at a lower price",
      "Compact frame at under 31 lb",
      "Center lock simplifies setup",
      "Fits a table and chairs"
    ],
    "cons": [
      "No wheeled bag",
      "Two people needed to raise it"
    ],
    "bestFor": "Cost-conscious wall buyers",
    "take": "A lighter-weight way to get walls than the GVDV, with fewer extras.",
    "catch": "The frame is lighter, so anchor it carefully in wind."
  },
  {
    "id": "best-camping-canopies-under-150-3",
    "rank": 3,
    "badge": "Best Large Screen Gazebo",
    "name": "Gazebo Pop up Canopy Tent for Camping 12x12 FT Screen Tent Outdoor Shade Portable Canopy with Awnings Outdoor ",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41zuxIMY8uL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F247JGQ3?tag=rvgearlab-20",
    "description": "The NatureNook is a 12 by 12 foot pop-up gazebo in 300D polyester that is waterproof to 5000 millimeters. It adds an awning, sidewalls, roll-up wind panels and zipper vents.\n\nIt covers the most ground of the four and handles rain better than the 210D tops, thanks to the higher water rating. It is also the heaviest, so it favors vehicle camping over carrying.\n\nIt suits families who want a screened living room at the campsite, since the panels keep bugs out while the awning adds shade. It has no floor for sleeping, and it shelters up to eight people at a table.",
    "specs": [
      "12x12 ft, 300D polyester",
      "5000mm waterproof rating",
      "Awning, sidewalls and wind panels"
    ],
    "pros": [
      "Largest floor of the group",
      "Higher waterproof rating than 210D tops",
      "Awning extends the shaded area",
      "Zipper vents for airflow"
    ],
    "cons": [
      "Bulkier and heavier to move",
      "Setup takes longer than a 10x10"
    ],
    "bestFor": "Family camps and group meals",
    "take": "A shelter more than a shade top, and the right choice for larger groups.",
    "catch": "Give yourself extra time to set it up and anchor it."
  },
  {
    "id": "best-camping-canopies-under-150-4",
    "rank": 4,
    "badge": "Best Budget Canopy",
    "name": "ZENY 10x10 Pop Up Canopy Tent",
    "price": "$44.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31zGVyDiTxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B5TYQFLT?tag=rvgearlab-20",
    "description": "The Zeny is a 10 by 10 foot straight-leg canopy with about 96 square feet of shade, a 210D Oxford top, three push-button heights and a wheeled 600D carry bag. Stakes and ropes are included.\n\nIt is the least expensive pick in the group, and its price is less than half the GVDV. It has no sidewalls or warranty, so it only handles shade.\n\nIt suits campers who prefer to spend the savings on other gear and only need an open canopy. Pair it with weights on windy days.",
    "specs": [
      "96 sq ft straight-leg design",
      "210D Oxford top",
      "Wheeled 600D carry bag"
    ],
    "pros": [
      "Lowest price in the group",
      "Wheeled bag included",
      "Three push-button heights",
      "Straight legs keep a tidy footprint"
    ],
    "cons": [
      "No sidewalls",
      "No sandbags in the kit"
    ],
    "bestFor": "Open-air shade on a tight budget",
    "take": "The cheapest way to cover a camp table, and a good choice for fair-weather trips.",
    "catch": "No walls, so wind and rain reach everyone under it."
  }
];

export const howWeEvaluated = [
  {
    "title": "Sidewalls and vents",
    "description": "Included sidewalls, roof vents and zipper panels were compared across the four canopies."
  },
  {
    "title": "Frame and warranty",
    "description": "Tube dimensions, steel finish and any manufacturer warranty were checked for each model."
  },
  {
    "title": "Fabric and UPF",
    "description": "Oxford denier, UPF rating and waterproof rating were compared."
  },
  {
    "title": "Carry and setup",
    "description": "Wheeled bags, packed weights and setup labor were weighed against real campsite use."
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
    "subheading": "By group size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Couple or solo",
          "Zeny Straight-Leg 10x10",
          "Compact 10x10 with a wheeled bag."
        ],
        [
          "Family of four",
          "GVDV 10x10 Walls",
          "100 sq ft with walls and warranty."
        ],
        [
          "Group of six to eight",
          "NatureNook 12x12 Screen",
          "Largest floor with an awning."
        ],
        [
          "Budget with walls",
          "Vinabilia 10x10 Walls",
          "Walls at a lower price."
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
          "$40 to $90",
          "Zeny Straight-Leg 10x10 or Vinabilia 10x10 Walls"
        ],
        [
          "$90 to $120",
          "NatureNook 12x12 Screen or GVDV 10x10 Walls"
        ]
      ]
    }
  },
  {
    "subheading": "Warranty vs lower price",
    "cards": [
      {
        "label": "Warranty",
        "text": "A 12-month warranty gives recourse if the frame fails in the first year. The GVDV 10x10 Walls carries it."
      },
      {
        "label": "Lower price",
        "text": "Cheaper models skip the warranty and sometimes the wheels. The Vinabilia 10x10 Walls and Zeny Straight-Leg 10x10 both cost less."
      }
    ],
    "note": "Choose the GVDV 10x10 Walls if you camp often, and the Vinabilia 10x10 Walls if you camp a few weekends a year."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Spend",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $60",
          "Zeny Straight-Leg 10x10"
        ],
        [
          "$60 to $90",
          "Vinabilia 10x10 Walls"
        ],
        [
          "$90 to $110",
          "NatureNook 12x12 Screen"
        ],
        [
          "$110 to $150",
          "GVDV 10x10 Walls"
        ]
      ]
    }
  },
  {
    "subheading": "For rainy trips specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a stated waterproof rating, sidewalls and an awning."
      },
      {
        "label": "In this comparison",
        "text": "The NatureNook 12x12 Screen lists a 5000mm rating and an awning, and the GVDV 10x10 Walls adds vents and a warranty."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you camp often and want warranty cover, which is the GVDV 10x10 Walls. If you want a larger floor with screens, the NatureNook 12x12 Screen is the step up."
      },
      {
        "label": "Save if",
        "text": "Save if you camp a few weekends a year, because the Vinabilia 10x10 Walls offers walls for roughly $33 less than the GVDV."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Warranty length",
    "explanation": "A manufacturer warranty tells you how long the seller will stand behind a frame that gets stressed by wind and repeated folding. The 12-month term on the GVDV is short compared with premium brands, but many budget canopies have none. Look for the warranty line in the product details and keep your order receipt."
  },
  {
    "criterion": "Roof vents",
    "explanation": "A vent at the top of the canopy lets hot air escape and reduces flapping in wind, which helps when the sidewalls are closed. Without vents, a walled canopy can feel stuffy in summer and can lift in gusts. Check the product details for the word vented or air vents."
  },
  {
    "criterion": "Waterproof rating",
    "explanation": "Millimeter ratings express how much water pressure a fabric resists. A 5000 millimeter rating on 300D polyester suits sustained rain, while a plain 210D Oxford top is usually only water-resistant. Look for the actual number, and remember that taped seams are part of the performance."
  },
  {
    "criterion": "Floor area per person",
    "explanation": "A 10 by 10 shades about 96 to 100 square feet, and a 12 by 12 covers around 144. For a table and six chairs, plan on at least 100 square feet, and add more if you cook under the canopy. Measure your planned layout on the ground first."
  },
  {
    "criterion": "Anchoring accessories",
    "explanation": "Stakes, wind ropes and sandbags decide how the canopy behaves in gusts. A kit without sandbags needs you to add roughly 20 pounds per leg on hard ground. Check the accessories list before purchase, and plan on about 20 pounds of ballast per leg if sandbags are missing. A canopy without weights can lift in gusts as low as 15 mph."
  }
];

export const faq = [
  {
    "q": "Do I need a warranty on a canopy?",
    "a": "It is useful if you camp often, because frames take stress from wind and folding. The GVDV 10x10 Walls offers 12 months, which covers a full season. Keep your receipt, and check the claim process before you buy."
  },
  {
    "q": "What is the difference between 210D and 300D?",
    "a": "Denier measures thread thickness, and a higher number generally means a thicker, tougher fabric. 300D polyester like the NatureNook 12x12 Screen resists rain and abrasion better than 210D Oxford. Always check for a waterproof rating as well."
  },
  {
    "q": "Can I add sidewalls later?",
    "a": "You can, but sidewall sets for pop-up canopies cost around $30 to $50 and must match the frame size. The Vinabilia 10x10 Walls and the GVDV 10x10 Walls include them, so you avoid a mismatch."
  },
  {
    "q": "How do I prepare a canopy for wind?",
    "a": "Lower the legs to the shortest setting, stake every corner, tie the wind ropes tight and add sandbags where stakes cannot go in. Take the canopy down if gusts reach about 20 mph. The Zeny Straight-Leg 10x10 needs added weights because the kit has no sandbags."
  },
  {
    "q": "Can a 12x12 canopy fit in a small car?",
    "a": "Often yes, but it is longer and heavier than a 10 by 10. Measure the packed length against your trunk before ordering, and plan for the NatureNook 12x12 Screen to take up a big share of a hatchback."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Canopies",
    "href": "/tents-shelter/best-camping-canopies"
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
