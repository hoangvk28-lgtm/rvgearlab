export const guideSlug = "best-cycling-sunglasses-under-100";
export const guideTitle = "5 Best Cycling Sunglasses Under 100 in 2026";
export const metaTitle = "Best Cycling Sunglasses Under 100 in 2026";
export const metaDescription = "Best cycling sunglasses under $100: 100% shield-style frames and polarized wraparounds compared for lens coverage, venting and fit on the bike.";
export const mainKeyword = "best cycling sunglasses under 100";
export const introParagraphs = [
  "A $100 budget is enough for a name-brand cycling shield or several polarized wraparounds, so the real question is where the money goes. You can spend it on lens coverage, venting and swappable lenses, or on polarization and a feather-light frame.",
  "These five picks include two 100% shield models near the top of the budget and three polarized sets well under it. They were compared on lens shape, venting, interchangeable lenses, frame weight and fit adjustments."
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
    "id": "best-cycling-sunglasses-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "100% SPEEDCRAFT Sport Performance Cycling Sunglasses",
    "price": "$48.88",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31onRj4u3rL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09M1Y5C3L?tag=rvgearlab-amz-20",
    "description": "The 100% SPEEDCRAFT is a cycling shield with ultra HD polycarbonate lenses, a 5.5-base cylindrical lens and 360 degree visibility. Lower air scoops move air across the lens, and the interchangeable, scratch resistant lenses carry UV400 protection.\n\nAgainst the 100% S3, it lists the same lens, scoop and swap features at roughly half the price of the white S3 listing. Next to the ROCKBROS Polarized, it adds venting and swappable lenses that a one-lens wraparound cannot match.\n\nIt suits riders who want a purpose-built cycling shield without paying for the priciest finish. The silver mirror lens helps in bright light.",
    "specs": [
      "5.5-base cylindrical shield lens",
      "Lower air scoops for venting",
      "Interchangeable UV400 lenses"
    ],
    "pros": [
      "Wide field of view",
      "Scoops reduce moisture on the lens",
      "Lenses swap for changing light",
      "Impact-resistant polycarbonate"
    ],
    "cons": [
      "Mirror lens is not polarized",
      "Swap lenses may cost extra"
    ],
    "bestFor": "Dedicated road and gravel riding",
    "take": "The best value in a true cycling shield. Same lens features as the S3 for less.",
    "catch": "The listing does not mention polarization, so glare off wet roads is not cut the same way."
  },
  {
    "id": "best-cycling-sunglasses-under-100-2",
    "rank": 2,
    "badge": "Best Premium Shield",
    "name": "100% S3 Sport Performance Cycling Sunglasses",
    "price": "$91.17",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21ozVQVirpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09M1QRTYK?tag=rvgearlab-amz-20",
    "description": "The 100% S3 pairs ultra HD polycarbonate lenses with a 5.5-base cylindrical shield, 360 degree visibility and lower air scoops. The lenses are interchangeable and scratch resistant with UV400 protection, and this listing uses a HiPER blue multilayer mirror lens.\n\nAgainst the 100% SPEEDCRAFT, it lists the same optical features and shifts the difference to the frame finish and lens color. Compared with the QALLY Polarized, it pairs a shield shape with swap-ready lenses.\n\nIt suits riders who prefer the S3 frame style and a blue multilayer mirror. It sits near the top of the budget.",
    "specs": [
      "Cylindrical 5.5-base lens",
      "Lower air scoops",
      "Interchangeable scratch-resistant lenses"
    ],
    "pros": [
      "Same wide view as the SPEEDCRAFT",
      "Air scoops fight fogging",
      "Multilayer mirror lens cuts brightness",
      "Impact-resistant polycarbonate"
    ],
    "cons": [
      "Costs the most in this list",
      "Shares features with the cheaper SPEEDCRAFT"
    ],
    "bestFor": "Riders who like the S3 style",
    "take": "A pick for style preference. The performance features match the SPEEDCRAFT.",
    "catch": "It is the priciest option and offers no extra listed features over the SPEEDCRAFT."
  },
  {
    "id": "best-cycling-sunglasses-under-100-3",
    "rank": 3,
    "badge": "Best Value Polarized",
    "name": "ROCKBROS Polarized Sports Sunglasses Anti-Glare HD Cycling Sun Glasses",
    "price": "$21.29",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41U8+lmzdvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07QK5MMRX?tag=rvgearlab-amz-20",
    "description": "The ROCKBROS Polarized is a polarized, UV400 wraparound with a curved lens for wide view and wind protection. The 25 gram polycarbonate frame has rubber nose pads and adjustable ear pads.\n\nAgainst the QALLY Polarized, it adds adjustable ear pads for a secure fit. Next to the 100% SPEEDCRAFT, it costs a fraction and trades venting and swap lenses for polarization.\n\nIt suits riders who want glare reduction on a budget. The ultralight frame disappears on long rides.",
    "specs": [
      "Polarized UV400 lenses",
      "25g polycarbonate frame",
      "Adjustable rubber ear pads"
    ],
    "pros": [
      "Polarized lenses cut road glare",
      "Very light at 25g",
      "Adjustable ear pads",
      "Curved lens blocks wind"
    ],
    "cons": [
      "Only one lens included",
      "No vents are listed"
    ],
    "bestFor": "Glare-sensitive riders on a budget",
    "take": "A light polarized pair that costs very little.",
    "catch": "Without vents, it can fog on slow climbs."
  },
  {
    "id": "best-cycling-sunglasses-under-100-4",
    "rank": 4,
    "badge": "Best Water-Shedding Coating",
    "name": "QALLY Polarized Sports Sunglasses for Men Women",
    "price": "$18.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Lm09q5bwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G4BYPSN8?tag=rvgearlab-amz-20",
    "description": "The QALLY Polarized has TAC HD polarized lenses with 99 percent UV400, a hydrophobic coating and a heat-resistant flex frame. The lenses are CAT.3, meant for bright sunlight, and the nose pads are non-slip.\n\nAgainst the ROCKBROS Polarized, it adds a coating that resists smudges and water. Compared with the RIVBOS Polarized, it states its lens category and flex-frame design.\n\nIt suits riders who face bright sun and the occasional shower. The coating makes cleaning easier.",
    "specs": [
      "TAC polarized, CAT.3 lenses",
      "Hydrophobic lens coating",
      "Flex frame, non-slip nose pads"
    ],
    "pros": [
      "Coating sheds water and smudges",
      "CAT.3 handles bright sun",
      "Non-slip pads hold on climbs",
      "Heat-resistant flex frame"
    ],
    "cons": [
      "No swap lenses listed",
      "CAT.3 is too dark for dim light"
    ],
    "bestFor": "Bright rides with some drizzle",
    "take": "A coated, polarized pair for sunny and damp rides.",
    "catch": "CAT.3 lenses are too dark for dawn or tunnels."
  },
  {
    "id": "best-cycling-sunglasses-under-100-5",
    "rank": 5,
    "badge": "Best Accessory Pack",
    "name": "RIVBOS Polarized Sunglasses UV400 Protection for Men's and Women's Fishing",
    "price": "$17.58",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31hk61rfplL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09R8SGDK1?tag=rvgearlab-amz-20",
    "description": "The RIVBOS Polarized is a TR90 frame with HD polarized lenses and 100 percent UV400 protection. It ships with a case, cleaning cloth and strap.\n\nAgainst the QALLY Polarized, it adds a case and strap. Compared with the ROCKBROS Polarized, it uses a TR90 frame instead of polycarbonate.\n\nIt suits riders who also fish or hike and want one pair for everything. The strap keeps it on the neck off the bike.",
    "specs": [
      "TR90 frame, UV400 lenses",
      "HD polarized lenses",
      "Case, cloth and strap"
    ],
    "pros": [
      "Comes with case, cloth and strap",
      "TR90 frame stays light",
      "Polarized lenses cut glare",
      "Low price"
    ],
    "cons": [
      "Not cycling-specific",
      "No swap lenses or vents listed"
    ],
    "bestFor": "All-round outdoor use",
    "take": "A polarized pair with extras for mixed outdoor use.",
    "catch": "It is aimed at fishing and general use, not racing."
  }
];

export const howWeEvaluated = [
  {
    "title": "Lens coverage",
    "description": "Lens shape and stated field of view were compared first."
  },
  {
    "title": "Ventilation",
    "description": "Air scoops and anti-fog claims were weighed."
  },
  {
    "title": "Lens options",
    "description": "Interchangeable and polarized lenses were checked."
  },
  {
    "title": "Frame and fit",
    "description": "Weights, nose pads and ear pads were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Cost relative to the $100 limit was considered."
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
    "subheading": "By Rider Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Road and gravel riders",
          "100% SPEEDCRAFT",
          "Shield lens with scoops and swap lenses."
        ],
        [
          "Riders who like the S3 style",
          "100% S3",
          "Same optics in the S3 frame."
        ],
        [
          "Glare-sensitive on a budget",
          "ROCKBROS Polarized",
          "Polarized 25g frame."
        ],
        [
          "Sunny and damp rides",
          "QALLY Polarized",
          "Hydrophobic coating and CAT.3."
        ],
        [
          "Mixed outdoor use",
          "RIVBOS Polarized",
          "Case, cloth and strap."
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
          "RIVBOS Polarized or QALLY Polarized"
        ],
        [
          "$20 to $50",
          "ROCKBROS Polarized or 100% SPEEDCRAFT"
        ],
        [
          "$90 to $100",
          "100% S3"
        ]
      ]
    }
  },
  {
    "subheading": "Shield vs Wraparound",
    "cards": [
      {
        "label": "Shield",
        "text": "Big coverage, venting and swappable lenses. 100% SPEEDCRAFT and 100% S3."
      },
      {
        "label": "Wraparound",
        "text": "Light, polarized and cheap. ROCKBROS Polarized, QALLY Polarized and RIVBOS Polarized."
      }
    ],
    "note": "Most riders should start with the 100% SPEEDCRAFT unless polarization is the priority."
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
          "Near $90, premium finish",
          "100% S3"
        ],
        [
          "Around $50",
          "100% SPEEDCRAFT"
        ],
        [
          "Around $20, polarized",
          "ROCKBROS Polarized"
        ],
        [
          "Under $20, extras",
          "RIVBOS Polarized"
        ]
      ]
    }
  },
  {
    "subheading": "For Gravel Riding Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Venting and swappable lenses for changing light."
      },
      {
        "label": "In this comparison",
        "text": "The 100% SPEEDCRAFT and 100% S3 both list lower air scoops and interchangeable lenses."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the 100% SPEEDCRAFT if you ride long and want venting and swap lenses."
      },
      {
        "label": "Save if",
        "text": "Save with the ROCKBROS Polarized if you only need glare control on short rides."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Lens shape and coverage",
    "explanation": "A cylindrical shield lens wraps around the eye, widening the view and blocking wind. A flat lens leaves gaps at the edges. Look for terms like shield, cylindrical or wraparound on the listing."
  },
  {
    "criterion": "Ventilation",
    "explanation": "Air scoops and vents move air behind the lens so sweat and breath do not fog it. Fogging blurs the road at the worst moment. Look for vent or scoop wording in the description."
  },
  {
    "criterion": "Polarized or mirror",
    "explanation": "Polarized lenses cut glare off wet roads, while a mirror coating reduces overall brightness. They solve different problems and are not the same thing. Check which one the listing names."
  },
  {
    "criterion": "Swappable lenses",
    "explanation": "Interchangeable lenses let you carry a clear or light lens for dawn and a dark one for noon. Without them you are stuck with one tint. Look for the word interchangeable."
  },
  {
    "criterion": "Frame weight and pads",
    "explanation": "A light frame with adjustable nose or ear pads stays put over bumps. A heavy slippery frame bounces. Check the stated grams and pad wording."
  }
];

export const faq = [
  {
    "q": "Do I need polarized lenses for cycling?",
    "a": "Polarization cuts glare off roads and water. Some riders find it dims bike computer screens, so try both if you can."
  },
  {
    "q": "What does UV400 mean?",
    "a": "It means the lenses block UVA and UVB light up to 400 nanometers. All five picks list UV400 or 100 percent UV protection."
  },
  {
    "q": "Are swappable lenses worth it?",
    "a": "They help if you ride dawn, noon and dusk. The two 100% models list interchangeable lenses, while the polarized picks do not."
  },
  {
    "q": "How do I stop lenses from fogging?",
    "a": "Choose vented frames and keep air moving. Avoid wiping dry lenses, which can scratch them."
  },
  {
    "q": "How should I clean cycling sunglasses?",
    "a": "Rinse grit off with water, then wipe with a microfiber cloth. Avoid paper towels, which can scratch coatings."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Cycling Sunglasses Under 50",
    "href": "/clothing-footwear/best-cycling-sunglasses-under-50"
  },
  {
    "title": "Best Cycling Sunglasses For Heavy Sweaters",
    "href": "/clothing-footwear/best-cycling-sunglasses-for-heavy-sweaters"
  },
  {
    "title": "Best Running Sunglasses Under 100",
    "href": "/clothing-footwear/best-running-sunglasses-under-100"
  }
];
