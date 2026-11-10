export const guideSlug = "best-running-sunglasses-under-100";
export const guideTitle = "3 Best Running Sunglasses Under 100 in 2026";
export const metaTitle = "Best Running Sunglasses Under 100 in 2026";
export const metaDescription = "Best running sunglasses under $100: QALLY, IKTOD and AJBAY polarized wraparound pairs compared for weight, nose fit and lens protection.";
export const mainKeyword = "best running sunglasses under 100";
export const introParagraphs = [
  "Running sunglasses live or die on weight and grip. A pair that bounces or slides down a sweaty nose gets left at home, no matter how good the lenses are.",
  "The search returned several color listings of the same QALLY and AJBAY models, so this list holds three distinct pairs. They were compared on frame weight, nose pad design, lens coating and what comes in the box, and all sit far below $100."
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
    "id": "best-running-sunglasses-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Polarized Running Sunglasses for Men Women Ultra-Comfort",
    "price": "$19.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31A+GGjNYyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H3TNY354?tag=rvgearlab-amz-20",
    "description": "The AJBAY Ultra-Light weighs 22g and uses a flexible TR90 frame with a sleek semi-rimless wraparound design. TAC polarized lenses list 99.9% UV400 protection and shatterproof impact resistance, and adjustable nose pads contour to your bridge.\n\nCompared with the QALLY Flex Frame, it uses a semi-rimless design for a wider view. Against the IKTOD 3-Pack, it concentrates on one well-specified pair.\n\nIt suits runners who want a barely-there feel. The listing names running, cycling, baseball, hiking and fishing.",
    "specs": [
      "22g TR90 frame",
      "TAC polarized, 99.9% UV400",
      "Adjustable nose pads"
    ],
    "pros": [
      "22g frame is barely noticeable",
      "Adjustable nose pads contour to your bridge",
      "Shatterproof TAC lenses",
      "Semi-rimless design widens the view"
    ],
    "cons": [
      "Semi-rimless frame offers less lens edge protection",
      "No case details on the listing"
    ],
    "bestFor": "Long runs and rides",
    "take": "The lightest, best-specified pair here. Adjustable pads help keep it in place.",
    "catch": "Semi-rimless frames can feel less sturdy in a fall."
  },
  {
    "id": "best-running-sunglasses-under-100-2",
    "rank": 2,
    "badge": "Best Lens Coating",
    "name": "QALLY Polarized Sports Sunglasses for Men Women",
    "price": "$18.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41LjOa-wbXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G4BVTCPY?tag=rvgearlab-amz-20",
    "description": "The QALLY Flex Frame lists TAC HD polarized lenses with 99% UV400 protection and a featherlight, heat-resistant frame with non-slip nose pads. A hydrophobic coating is described as waterproof and smudge-resistant, and the lenses are rated CAT.3, which the listing says lets 8 to 18 percent of visible light through.\n\nCompared with the AJBAY Ultra-Light, it adds a hydrophobic coating and a stated CAT.3 category. Against the IKTOD 3-Pack, it is a single pair with a more detailed lens description.\n\nIt suits runners who sweat and run in bright light. The listing names cycling, golf, fishing and hiking.",
    "specs": [
      "TAC HD polarized, CAT.3",
      "Hydrophobic lens coating",
      "Flex frame, non-slip nose pads"
    ],
    "pros": [
      "Hydrophobic coating sheds sweat and spray",
      "CAT.3 lenses for bright light",
      "Non-slip nose pads",
      "Heat-resistant flexible frame"
    ],
    "cons": [
      "Weight is not stated",
      "Same model appears in many color listings"
    ],
    "bestFor": "Bright, sweaty runs",
    "take": "The best lens detail in this group. Good for bright light and sweat.",
    "catch": "The listing does not give a frame weight."
  },
  {
    "id": "best-running-sunglasses-under-100-3",
    "rank": 3,
    "badge": "Best Multi-Pack",
    "name": "IKTOD 3 Pack Running Sunglasses for Women Polarized Mens Sunglasses UV Protection for Cycling Baseball Fishing",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41j3ddKWTaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FR4KTVJY?tag=rvgearlab-amz-20",
    "description": "The IKTOD 3-Pack includes three pairs of polarized wraparound sunglasses with UV400 coating, three microfiber bags, three cleaning cloths, three lanyards and a polarizing test card. The listing describes an ultra-light frame made for extended wear and movement.\n\nCompared with the AJBAY Ultra-Light, it gives more pairs with fewer stated specs. Against the QALLY Flex Frame, it adds lanyards and spares.\n\nIt suits families, clubs and runners who lose or scratch pairs. The listing mentions baseball, fishing and driving.",
    "specs": [
      "Three pairs with UV400 coating",
      "Lanyards and microfiber bags",
      "Polarizing test card"
    ],
    "pros": [
      "Three pairs cover spares and sharing",
      "Lanyards keep pairs on your neck",
      "Polarizing test card included",
      "Lowest cost per pair"
    ],
    "cons": [
      "Frame weight is not listed",
      "Fewer technical specs than the single pairs"
    ],
    "bestFor": "Spares and sharing",
    "take": "A multi-pack for runners who lose pairs. Lanyards and spares included.",
    "catch": "Less technical detail than the other two."
  }
];

export const howWeEvaluated = [
  {
    "title": "Frame weight",
    "description": "Stated frame weight and material were compared first, since running magnifies every gram."
  },
  {
    "title": "Nose fit",
    "description": "Adjustable and non-slip nose pads were weighed."
  },
  {
    "title": "Lens protection",
    "description": "Polarization, UV400 and lens category claims were compared."
  },
  {
    "title": "Durability",
    "description": "Impact-resistant lenses and flexible frames were checked."
  },
  {
    "title": "Value",
    "description": "Price per pair and accessories were compared."
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
    "subheading": "By Run Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Long runs, lightest feel",
          "AJBAY Ultra-Light",
          "22g with adjustable nose pads."
        ],
        [
          "Bright, sweaty runs",
          "QALLY Flex Frame",
          "Hydrophobic coating and CAT.3."
        ],
        [
          "Spares for training groups",
          "IKTOD 3-Pack",
          "Three pairs with lanyards."
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
          "$10 to $20",
          "AJBAY Ultra-Light"
        ],
        [
          "$10 to $20",
          "IKTOD 3-Pack"
        ],
        [
          "$10 to $20",
          "QALLY Flex Frame"
        ]
      ]
    }
  },
  {
    "subheading": "Semi-Rimless vs Full Frame",
    "cards": [
      {
        "label": "Semi-rimless",
        "text": "Wider view and lighter feel. The AJBAY Ultra-Light uses a semi-rimless design."
      },
      {
        "label": "Full frame",
        "text": "More lens edge protection and a sturdier feel. The QALLY Flex Frame and IKTOD 3-Pack fit here."
      }
    ],
    "note": "Most runners should choose the AJBAY Ultra-Light unless they run in rough terrain."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest cost per pair",
          "IKTOD 3-Pack"
        ],
        [
          "Low, lens coating",
          "QALLY Flex Frame"
        ],
        [
          "Low, lightest",
          "AJBAY Ultra-Light"
        ]
      ]
    }
  },
  {
    "subheading": "For Sweaty Runs Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Non-slip or adjustable nose pads and a coating that sheds sweat."
      },
      {
        "label": "In this comparison",
        "text": "The QALLY Flex Frame has non-slip nose pads and a hydrophobic coating."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the AJBAY Ultra-Light or QALLY Flex Frame for a specified frame and lens."
      },
      {
        "label": "Save if",
        "text": "Save with the IKTOD 3-Pack if you lose or scratch glasses."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Frame weight",
    "explanation": "A 22g frame sits lightly while a heavier frame bounces with each stride. Weight matters most over long runs. Look for a gram figure on the listing."
  },
  {
    "criterion": "Nose pad design",
    "explanation": "Adjustable or non-slip nose pads stop glasses from sliding when sweat builds. A fixed nose bridge can slip. Look for adjustable or non-slip wording."
  },
  {
    "criterion": "Polarization and UV400",
    "explanation": "Polarized lenses cut glare off pavement and water, and UV400 coatings block UVA and UVB rays. They are separate features and both should be stated. Look for both terms."
  },
  {
    "criterion": "Lens category",
    "explanation": "A category rating such as CAT.3 describes how much visible light passes through, and 3 suits bright sun. A missing category leaves you guessing. Look for a category number."
  },
  {
    "criterion": "Impact resistance",
    "explanation": "Shatterproof TAC lenses and flexible TR90 frames resist breaks from drops and falls. Cheap rigid frames can snap. Look for TR90 and shatterproof wording."
  },
  {
    "criterion": "What is in the box",
    "explanation": "Cases, cloths and lanyards add value and protect lenses. A pair with no case scratches in a bag. Check the contents list."
  }
];

export const faq = [
  {
    "q": "Do I need polarized lenses for running?",
    "a": "They cut glare off wet roads, though they can make some screens look dim. The AJBAY Ultra-Light and QALLY Flex Frame both list polarization."
  },
  {
    "q": "What is the biggest mistake with running sunglasses?",
    "a": "Choosing by looks without checking weight. The AJBAY Ultra-Light lists 22g."
  },
  {
    "q": "Is a multi-pack worth it?",
    "a": "If you lose pairs, yes. The IKTOD 3-Pack includes three pairs and lanyards."
  },
  {
    "q": "How do I adjust the nose pads?",
    "a": "Gently squeeze or spread the pads with clean fingers. The AJBAY Ultra-Light has adjustable pads."
  },
  {
    "q": "How do I clean lenses?",
    "a": "Rinse with water, then wipe with a microfiber cloth. Avoid paper towels, which scratch coatings."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Cycling Sunglasses Under 100",
    "href": "/clothing-footwear/best-cycling-sunglasses-under-100"
  },
  {
    "title": "Best Cycling Sunglasses Under 50",
    "href": "/clothing-footwear/best-cycling-sunglasses-under-50"
  },
  {
    "title": "Best Sport Sunglasses Under 100",
    "href": "/clothing-footwear/best-sport-sunglasses-under-100"
  }
];
