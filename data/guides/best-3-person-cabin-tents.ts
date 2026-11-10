export const guideSlug = "best-3-person-cabin-tents";
export const guideTitle = "3 Best 3 Person Cabin Tents in 2026";
export const metaTitle = "Best 3 Person Cabin Tents in 2026";
export const metaDescription = "Best 3-person cabin tents compared: three straight-wall tents rated for 3 to 4 campers, with floor size, height and weatherproofing notes.";
export const mainKeyword = "best 3 person cabin tents";
export const introParagraphs = [
  "A 3-person cabin tent trades a dome's sloping walls for a box shape, which gives standing room along the edges. Listings rarely call a tent '3 person' outright, so the picks here are rated 3 to 4 or 4 and are judged on how three sleepers actually fit.",
  "We compared floor size, center height, fabric rating and ventilation on three straight-wall tents. All three are partial fits, since the closest matches on the market are sold as 4-person tents, and their listings say how many fit with gear."
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
    "id": "best-3-person-cabin-tents-1",
    "rank": 1,
    "badge": "Best Dedicated 3-4 Person",
    "name": "Vidalido 3-4 Person Tent with 1 Mesh Door and 2 Large Mesh Window",
    "price": "$139.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31p8T+eYNiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FNM88FS9?tag=rvgearlab-20",
    "description": "The Vidalido is listed for 3 to 4 people and measures 7.8 by 7.8 feet by 70.8 inches high, or 60.8 square feet. It uses 190D polyester and 150D Oxford with a 1200mm polyurethane coating, and the floor fits a queen air mattress or 3 to 4 sleeping bags.\n\nIt is the only pick whose listing says 3 to 4, and the floor is square, wider than the CORE and UNP's 8 by 7 ft plan on one side. Two people can set it up in about 5 to 8 minutes.\n\nIt suits a family of three who want a lobby for sitting out of the rain. One mesh door, two large mesh windows and a mesh top handle the airflow.",
    "specs": [
      "7.8 x 7.8 ft, 70.8 inch peak",
      "190D and 150D, 1200mm coating",
      "1 mesh door, 2 windows, mesh top"
    ],
    "pros": [
      "Rated for 3 to 4 people",
      "Square floor fits a queen or sleeping bags",
      "Large lobby for sitting out of the rain",
      "Two-person setup in 5 to 8 minutes"
    ],
    "cons": [
      "70.8 inch height is lower than the others",
      "Only one door"
    ],
    "bestFor": "Families of three",
    "take": "The closest true match for a group of three.",
    "catch": "At 70.8 inches high, adults stoop near the walls."
  },
  {
    "id": "best-3-person-cabin-tents-2",
    "rank": 2,
    "badge": "Best Brand-Name Pick",
    "name": "CORE 4 Person Cabin Tent",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YLYvWCB5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07YBFTJTR?tag=rvgearlab-20",
    "description": "The CORE 4-person cabin tent measures 8 by 7 feet with a 72-inch center height and a nearly straight-wall design. The listing says it fits one queen air bed and comfortably holds 2 people with gear or up to 4 without gear.\n\nWeather defense comes from H2O Block fabric rated 1200mm, plus taped rainfly seams, guylines and steel stakes. A gear loft with storage pockets is also built in, and the UNP matches its footprint while the Vidalido has a slightly larger square floor.\n\nIt suits a family of three that packs light. The stated 2-with-gear and 4-without capacity brackets three sleepers.",
    "specs": [
      "8 x 7 ft, 72 inch center",
      "H2O Block, 1200mm, taped rainfly",
      "Gear loft, storage pockets"
    ],
    "pros": [
      "Taped rainfly and sealed seams",
      "Gear loft and storage pockets",
      "Steel stakes and guylines included",
      "Adjustable lower vents and mesh ceiling"
    ],
    "cons": [
      "Comfort limit is 2 people with gear",
      "Costs more than the Vidalido and UNP"
    ],
    "bestFor": "Light-packing families of three",
    "take": "A well-equipped tent with a clear capacity guide.",
    "catch": "Three sleepers with gear will find it snug, per the listing's own capacity figures."
  },
  {
    "id": "best-3-person-cabin-tents-3",
    "rank": 3,
    "badge": "Best Low-Cost Pick",
    "name": "UNP 2/4/6/8 Person Tent",
    "price": "$94.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Qy-usMKjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJRZ1P38?tag=rvgearlab-20",
    "description": "The UNP listing covers a 2, 4, 6 and 8 person size family, and the 4-person tent is 8 by 7 by 72 inches with nearly straight walls. It weighs 13 lb, uses four steel leg poles and has one large mesh door, two mesh windows and a mesh top.\n\nIt matches the CORE's floor and height at a much lower price, with a one-year warranty. The listing says one person can set it up in about 5 minutes.\n\nIt suits a budget family of three. The light frame makes car camping easy.",
    "specs": [
      "8 x 7 x 72 inch, 4-person size",
      "13 lb, four steel leg poles",
      "1 mesh door, 2 windows, 1-year warranty"
    ],
    "pros": [
      "Lowest price of the three",
      "13 lb is light for a cabin tent",
      "Four steel legs give a firm frame",
      "One-year warranty"
    ],
    "cons": [
      "Listing covers many sizes",
      "Weatherproofing detail is thin"
    ],
    "bestFor": "Budget car camping",
    "take": "The cheapest cabin tent that still fits three.",
    "catch": "Fabric rating is not listed in the details, so check the rainfly specifics."
  }
];

export const howWeEvaluated = [
  {
    "title": "Real floor space",
    "description": "We compared stated floor dimensions and what each listing says fits inside, since a 4-person label is not a 3-person promise."
  },
  {
    "title": "Standing room",
    "description": "Center height and straight-wall claims were compared."
  },
  {
    "title": "Weather protection",
    "description": "Hydrostatic ratings, taped seams and rainflies were noted where listed."
  },
  {
    "title": "Ventilation",
    "description": "Mesh doors, windows and tops were compared."
  },
  {
    "title": "Price",
    "description": "Cost was set against floor size and features."
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
    "subheading": "By Group",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Family of three, wants a lobby",
          "Vidalido 3-4 Person Cabin Tent",
          "Rated 3 to 4 with a large lobby."
        ],
        [
          "Three who pack light",
          "CORE 4-Person Cabin Tent",
          "2 with gear, 4 without by the listing."
        ],
        [
          "Budget car camping",
          "UNP 4-Person Cabin Tent",
          "Lowest price, 13 lb."
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
          "$90 to $100",
          "UNP 4-Person Cabin Tent"
        ],
        [
          "$130 to $140",
          "Vidalido 3-4 Person Cabin Tent"
        ],
        [
          "$140 to $150",
          "CORE 4-Person Cabin Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Dedicated 3-4 vs 4-Person Label",
    "cards": [
      {
        "label": "3-4 rating",
        "text": "Vidalido 3-4 Person Cabin Tent is rated for three or four and has a square floor."
      },
      {
        "label": "4-person rating",
        "text": "CORE 4-Person Cabin Tent and UNP 4-Person Cabin Tent are rated for four with an 8 by 7 foot floor, which suits three comfortably."
      }
    ],
    "note": "Most groups of three should default to CORE 4-Person Cabin Tent for weather detail, or Vidalido 3-4 Person Cabin Tent for the lobby."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price",
          "UNP 4-Person Cabin Tent"
        ],
        [
          "Mid-range",
          "Vidalido 3-4 Person Cabin Tent"
        ],
        [
          "Weather detail and loft",
          "CORE 4-Person Cabin Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For Family Car Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A floor about 8 by 7 feet, a center near 72 inches and a rainfly."
      },
      {
        "label": "In this comparison",
        "text": "CORE 4-Person Cabin Tent gives a taped rainfly and loft, and Vidalido 3-4 Person Cabin Tent gives a bigger lobby."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you camp in wet weather, since CORE 4-Person Cabin Tent lists a taped rainfly, sealed seams and a gear loft."
      },
      {
        "label": "Save if",
        "text": "Save if you camp in fair weather, because UNP 4-Person Cabin Tent and Vidalido 3-4 Person Cabin Tent cost much less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rated capacity vs real capacity",
    "explanation": "Brands rate a tent by how many sleeping bags fit shoulder to shoulder, with no gear. A tent rated for 4 sleeps three comfortably with room for bags. Look for a capacity figure with gear on the listing, as CORE gives."
  },
  {
    "criterion": "Floor dimensions",
    "explanation": "An 8 by 7 foot floor is 56 square feet, and a 7.8 by 7.8 foot floor is 60.8. Three adults on pads need around 20 square feet each with packs. Compare the numbers on the listing."
  },
  {
    "criterion": "Center height",
    "explanation": "A 72 inch center lets most adults stand, while 70.8 inches gives less room at the walls. Straight walls help the corners. Check the height and wall description."
  },
  {
    "criterion": "Waterproofing",
    "explanation": "A 1200mm rating is a basic rain defense. Taped seams and a full rainfly are what stop leaks in sustained rain. Check for taped seams on the listing."
  },
  {
    "criterion": "Ventilation",
    "explanation": "A mesh ceiling lets hot air escape, and lower vents bring cool air from the ground. A tent with one door has less cross-flow. Check the mesh count."
  },
  {
    "criterion": "Weight and setup",
    "explanation": "Weight sets how far you can carry the tent from the car. Setup time of 5 to 8 minutes matters at dusk. Check the weight and the setup claim on the listing."
  }
];

export const faq = [
  {
    "q": "Is a 4-person tent big enough for three?",
    "a": "Yes, a 4-person cabin tent has room for three people and some gear. CORE's own listing says it holds 2 with gear or 4 without. Choose a bigger size if you carry bulky gear."
  },
  {
    "q": "What air mattress fits a 3-person cabin tent?",
    "a": "A queen fits in the 8 by 7 foot CORE and the Vidalido's 7.8 by 7.8 foot floor. Three adults usually need two pads or a mix. Measure the floor."
  },
  {
    "q": "Is a cabin tent better than a dome for three?",
    "a": "Cabin tents give more standing room and straighter walls, and they weigh more. A dome is lighter and wind-stable. Choose by comfort over weight."
  },
  {
    "q": "How do I set up a cabin tent?",
    "a": "Lay out the footprint, assemble the poles and clip the body on. Fit the rainfly, stake corners and guy the lines. Two people shorten the job."
  },
  {
    "q": "How do I keep a cabin tent dry?",
    "a": "Stake the rainfly tight, keep it off the tent body and use the vents. Seam tape helps. Dry it before packing."
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
