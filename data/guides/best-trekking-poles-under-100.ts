export const guideSlug = "best-trekking-poles-under-100";
export const guideTitle = "5 Best Trekking Poles Under 100 in 2026";
export const metaTitle = "Best Trekking Poles Under 100 in 2026";
export const metaDescription = "Best trekking poles under $100: carbon and aluminum poles compared on weight per pole, folding size, grips and locks for backpacking on a budget.";
export const mainKeyword = "best trekking poles under 100";
export const introParagraphs = [
  "Under $100 you can now buy carbon fiber poles, which was not true a few years ago. The real trade-off is no longer price versus quality but carbon's lighter weight against the folding size and grip choices of aluminum.",
  "All five poles here sit well under the ceiling, and the ranking weighs weight per pole, locking system and packed length. Weights are the numbers each listing gives, not our own scale readings."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/hiking-backpacker-mountain.webp";
export const heroImageAlt = "Hiker with a loaded backpack climbing a mountain trail";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-trekking-poles-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "100% Carbon Fiber Trekking Poles by USA Brand",
    "price": "$53.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51SHDi2rQHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01C60REBO?tag=rvgearlab-20",
    "description": "The Hiker Hunger Outfitters carbon poles are made of 3K 100% carbon fiber and weigh 7.6 ounces each. They extend from 24 to 55 inches with quick flip locks, a moisture-wicking cork grip and a nonslip EVA foam extension for steep climbs.\n\nAt 7.6 ounces each they are the lightest pair here, ahead of the KINGGEAR at 8.2 ounces. The flip locks are described as more secure than twist locks or folding poles that can slide.\n\nIt suits backpackers who want to cut ounces and keep the grip choice of cork and foam. The listing adds a 1-year warranty.",
    "specs": [
      "7.6 oz each, 3K carbon",
      "24 to 55 in flip locks",
      "Cork grip, EVA extension"
    ],
    "pros": [
      "Lightest pair here at 7.6 ounces each",
      "Wide 24 to 55 inch range",
      "Cork grip with foam extension for steep slopes",
      "1-year warranty"
    ],
    "cons": [
      "Does not fold down as small as the aluminum models",
      "Highest price in this group"
    ],
    "bestFor": "Backpackers trimming weight",
    "take": "The best poles at this budget if weight is your main goal.",
    "catch": "They collapse in two sections rather than folding, so packed length is longer."
  },
  {
    "id": "best-trekking-poles-under-100-2",
    "rank": 2,
    "badge": "Best Accessory Kit",
    "name": "KINGGEAR 100% Carbon Fiber Trekking Poles for Hiking",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/414T8uMoxVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CFV1LPG9?tag=rvgearlab-20",
    "description": "The KINGGEAR carbon poles weigh 8.2 ounces each and adjust from 90 to 135 centimeters with metal flip locks. They come with snow plates, mud plates, Nordic walking buffer tips, rubber tips and a carry bag.\n\nCompared with the Hiker Hunger Carbon, they include more accessories and cost less. The ergonomic cork grips have a nonslip EVA foam extension under them.\n\nThey suit hikers who walk in mud and snow and want baskets in the box. The metal locks resist wear.",
    "specs": [
      "8.2 oz each, carbon fiber",
      "90 to 135 cm, metal flip locks",
      "Snow, mud plates and tips"
    ],
    "pros": [
      "Metal flip locks resist wear",
      "Snow and mud plates included",
      "Cork grips with EVA extension",
      "Lower price than the other carbon poles"
    ],
    "cons": [
      "Slightly heavier than the Hiker Hunger Carbon",
      "Brand details are thin on the listing"
    ],
    "bestFor": "Mud and snow hikers",
    "take": "A good-value carbon pair with the extras already in the bag.",
    "catch": "At 8.2 ounces each they weigh a bit more than the lightest pair."
  },
  {
    "id": "best-trekking-poles-under-100-3",
    "rank": 3,
    "badge": "Best Compact Fold",
    "name": "Premium Foldable Hiking Poles by USA Brand",
    "price": "$35.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51dHa76t3aL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D88HWNWZ?tag=rvgearlab-20",
    "description": "The Hiker Hunger Foldable poles use aircraft-grade aluminum and collapse to 15 inches. They weigh 9.95 ounces in the short version and 10.7 ounces in the long, with metal flip locks, reinforced joints and cork or EVA foam grips.\n\nThey pack smaller than any carbon pair here, and the two size ranges (100 to 120 cm and 115 to 135 cm) fit most heights. Compared with the Trekology, they are slightly lighter.\n\nThey suit travelers who fly with poles or tuck them into a daypack. The cork and foam grip options suit different hand preferences.",
    "specs": [
      "Folds to 15 in, aluminum",
      "9.95 or 10.7 oz each",
      "Two size ranges"
    ],
    "pros": [
      "Folds to 15 inches for bags",
      "Two size ranges fit most hikers",
      "Reinforced joints, metal flip locks",
      "Lower price than the carbon poles"
    ],
    "cons": [
      "Heavier than the carbon poles",
      "Fixed ranges are narrower than the carbon 24 to 55 inch span"
    ],
    "bestFor": "Travelers and day hikers",
    "take": "The best poles for a suitcase or small pack.",
    "catch": "You must pick the short or long size before buying."
  },
  {
    "id": "best-trekking-poles-under-100-4",
    "rank": 4,
    "badge": "Best Value Aluminum",
    "name": "Trekology Trek-Z Hiking Trekking Poles",
    "price": "$32.79",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Peu8SebvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07Q7G8CT7?tag=rvgearlab-20",
    "description": "The Trekology Trek-Z poles use aircraft-grade aluminum at 10.4 ounces each for the 100 to 120 cm size and 10.8 ounces for 115 to 135 cm. They fold to 15 inches in a tri-fold system, with a 20 cm adjustment range and metal lock caps on reinforced joints.\n\nThey cost a little less than the Hiker Hunger Foldable and carry the same 15 inch pack size. Against the Trekology cork version, they have a lighter listed weight.\n\nThey suit beginners who want a folding pair at a low price. The tri-fold design fits checked luggage.",
    "specs": [
      "10.4 or 10.8 oz each",
      "Folds to 15 in tri-fold",
      "20 cm adjustment range"
    ],
    "pros": [
      "Folds to 15 inches",
      "Metal lock caps on reinforced joints",
      "Lower price than the Hiker Hunger poles",
      "Fits checked luggage"
    ],
    "cons": [
      "Heavier than carbon poles",
      "Only a 20 cm adjustment range"
    ],
    "bestFor": "First-time buyers",
    "take": "A dependable folding pair for the lowest cost.",
    "catch": "Pick the size for your height since adjustment is only 20 cm."
  },
  {
    "id": "best-trekking-poles-under-100-5",
    "rank": 5,
    "badge": "Best Natural Grip",
    "name": "TREKOLOGY Trek-Z Cork Grip Trekking Poles",
    "price": "$31.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51An5El62sL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH3VHB81?tag=rvgearlab-20",
    "description": "The Trekology Cork poles have a natural cork grip that absorbs hand moisture and a note that the grip has a slight rotational flex. They adjust from 110 to 130 centimeters with metal flip locks, fold to 15 inches and weigh 11.5 ounces each.\n\nThey carry a natural cork grip that stays dry on long days, which makes it the pure cork option here. Against the Hiker Hunger Foldable, they cover one height span in a single model.\n\nThey suit hikers with sweaty hands who prefer cork. The retractable tri-fold system packs easily.",
    "specs": [
      "11.5 oz each, aluminum",
      "110 to 130 cm",
      "Natural cork grip"
    ],
    "pros": [
      "Cork absorbs hand moisture",
      "Folds to a portable 15 inches",
      "Metal flip locks",
      "Single size range covers many heights"
    ],
    "cons": [
      "Heaviest poles in the group",
      "Cork grip has slight rotational flex"
    ],
    "bestFor": "Hikers with sweaty hands",
    "take": "Pick this for the cork grip, not for weight.",
    "catch": "At 11.5 ounces each they weigh the most here."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight per pole",
    "description": "Each listing was compared on stated weight in ounces, since lighter poles save energy over thousands of steps."
  },
  {
    "title": "Packed length",
    "description": "Folded or collapsed length was compared for packing and flights."
  },
  {
    "title": "Locks and joints",
    "description": "Lock type and joint reinforcement were weighed for reliability."
  },
  {
    "title": "Grips and extras",
    "description": "Cork and foam grips and included baskets were compared for comfort and terrain."
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
          "Lowest weight",
          "Hiker Hunger Carbon",
          "7.6 ounces each."
        ],
        [
          "Mud and snow accessories",
          "KINGGEAR Carbon",
          "Plates and tips included."
        ],
        [
          "Smallest folded size",
          "Hiker Hunger Foldable",
          "Folds to 15 inches."
        ],
        [
          "Beginner folding pair",
          "TREKOLOGY Trek-Z",
          "Folds to 15 inches at a low price."
        ],
        [
          "Sweaty hands",
          "TREKOLOGY Cork",
          "Natural cork grip."
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
          "TREKOLOGY Cork or TREKOLOGY Trek-Z"
        ],
        [
          "$30 to $40",
          "Hiker Hunger Foldable or KINGGEAR Carbon"
        ],
        [
          "$50 to $60",
          "Hiker Hunger Carbon"
        ]
      ]
    }
  },
  {
    "subheading": "Carbon vs Aluminum",
    "cards": [
      {
        "label": "Carbon",
        "text": "Lighter, with less swing weight, and more brittle under impact. The Hiker Hunger Carbon and KINGGEAR Carbon fall here."
      },
      {
        "label": "Aluminum",
        "text": "Heavier but flexes, and folds smaller. The Hiker Hunger Foldable, TREKOLOGY Trek-Z and TREKOLOGY Cork fall here."
      }
    ],
    "note": "Most backpackers should pick the Hiker Hunger Carbon, and travelers should pick the Hiker Hunger Foldable."
  },
  {
    "subheading": "By Budget Tier",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "Upper budget carbon",
          "Hiker Hunger Carbon"
        ],
        [
          "Mid budget carbon",
          "KINGGEAR Carbon"
        ],
        [
          "Mid budget folding",
          "Hiker Hunger Foldable"
        ],
        [
          "Low budget folding",
          "TREKOLOGY Trek-Z"
        ]
      ]
    }
  },
  {
    "subheading": "For Backpacking Trips Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Low weight per pole and flip locks."
      },
      {
        "label": "In this comparison",
        "text": "The Hiker Hunger Carbon lists 7.6 ounces each with a 24 to 55 inch range, which suits long carries."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Hiker Hunger Carbon if you backpack and want the lowest weight."
      },
      {
        "label": "Save if",
        "text": "Save with the TREKOLOGY Trek-Z if you hike occasionally and want a folding pair."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Carbon versus aluminum",
    "explanation": "Carbon is lighter, often by two to three ounces per pole, but can crack if it is hit hard. Aluminum bends instead of snapping. The listed weights here run from 7.6 to 11.5 ounces."
  },
  {
    "criterion": "Flip locks beat twist locks",
    "explanation": "Flip locks clamp the sections and are easier to adjust with gloves. The listings here call them more secure than twist locks. Look for metal flip locks, not plastic."
  },
  {
    "criterion": "Folding size matters for travel",
    "explanation": "Folding poles pack to 15 inches, while two-section collapsing poles are longer. The aluminum Hiker Hunger Foldable and Trek-Z both fold to 15 inches. Check the folded length against your pack."
  },
  {
    "criterion": "Grip material",
    "explanation": "Cork absorbs sweat and conforms to the hand, while foam is lighter and warmer. The Hiker Hunger Carbon adds a foam extension below the cork. Look at the grip and extension on the listing."
  },
  {
    "criterion": "Height range",
    "explanation": "Poles should let your elbow rest at about 90 degrees on flat ground. The Hiker Hunger Foldable sells two ranges, 100 to 120 cm and 115 to 135 cm. Choose by height."
  }
];

export const faq = [
  {
    "q": "Are carbon poles worth it under $100?",
    "a": "They cut ounces per pole and reduce fatigue. They can crack under hard impact. The KINGGEAR is the lowest-cost carbon pair here."
  },
  {
    "q": "Do I need two poles?",
    "a": "Two poles share load and balance. One is fine for casual walks. Sold in pairs, these sets are the standard."
  },
  {
    "q": "How do I set the pole height?",
    "a": "Hold the grip with your elbow at about 90 degrees on flat ground. Lengthen for downhill and shorten for uphill. Lock the flip levers firmly."
  },
  {
    "q": "How do I pack folding poles?",
    "a": "Fold and strap them or slide into a bag. The Trek-Z folds to 15 inches. Check the lock caps before each trip."
  },
  {
    "q": "How do I look after poles?",
    "a": "Rinse mud and let them dry before storing. Check the locks and tips often. Replace worn tips."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Hiking Baby Carrier For 6 Month Old",
    "href": "/packs-hiking/best-hiking-baby-carrier-for-6-month-old"
  },
  {
    "title": "Best Hiking Umbrella For Sun",
    "href": "/packs-hiking/best-hiking-umbrella-for-sun"
  },
  {
    "title": "Best Hiking Watches For Men",
    "href": "/packs-hiking/best-hiking-watches-for-men"
  },
  {
    "title": "Best Umbrella For Wind And Rain",
    "href": "/packs-hiking/best-umbrella-for-wind-and-rain"
  }
];
