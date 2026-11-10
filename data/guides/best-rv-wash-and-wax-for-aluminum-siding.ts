export const guideSlug = "best-rv-wash-and-wax-for-aluminum-siding";
export const guideTitle = "3 Best RV Wash And Wax For Aluminum Siding in 2026";
export const metaTitle = "Best RV Wash And Wax For Aluminum Siding in 2026";
export const metaDescription = "Three products for aluminum RV siding: one concentrated wash and wax and two metal polishes, with honest notes on what each can and cannot do.";
export const mainKeyword = "best rv wash and wax for aluminum siding";
export const introParagraphs = [
  "Aluminum siding is a different job from fiberglass. A wash and wax cleans and adds a thin layer, but oxidized aluminum that has gone chalky needs a polish that removes the oxidation, and the two products are not interchangeable.",
  "Only three products fit the set, so this is a short list. One is a true wash and wax, and two are metal polishes sold for chrome and aluminum, which suit trim and bare metal rather than painted siding; each entry says where it applies."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41Yk02ZpoHL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-wash-and-wax-for-aluminum-siding-1",
    "rank": 1,
    "badge": "Best Wash and Wax",
    "name": "Griot's Garage Wash and Wax for RVs",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Yk02ZpoHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FBXRR7CX?tag=rvgearlab-20",
    "description": "Griot's Garage Wash and Wax is a concentrated, pH-balanced soap with carnauba wax for RVs, campers, trailers and boats. The listing says one ounce makes a gallon of wash solution and that it works on paint, chrome, vinyl, plastic and rubber.\n\nAgainst the two polishes, it is the only pick meant for regular washing, and it maintains rather than corrects. It does not claim to remove oxidation, so chalky aluminum needs a separate step.\n\nBest for routine washing of sound or painted aluminum siding. The listing does not name aluminum, so test a small area first.",
    "specs": [
      "Concentrated pH-balanced wash",
      "1 oz makes a gallon",
      "Carnauba wax layer"
    ],
    "pros": [
      "Wash and wax in one step",
      "1 ounce per gallon dilution",
      "pH-balanced, scratch-free suds claim",
      "Works on paint, chrome, vinyl, rubber"
    ],
    "cons": [
      "Aluminum is not named on the listing",
      "Does not remove oxidation"
    ],
    "bestFor": "Routine washing"
  },
  {
    "id": "best-rv-wash-and-wax-for-aluminum-siding-2",
    "rank": 2,
    "badge": "Best Oxidation Remover",
    "name": "3D Metal Polish",
    "price": "$20.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41BXhcCx4WL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0007RVLOA?tag=rvgearlab-20",
    "description": "3D Metal Polish is a heavy-duty polish for aluminum, chrome, brass, copper and silver that says it breaks down oxidation and tarnish without old-school abrasives. It applies by hand with a microfiber towel or with a polisher on large surfaces.\n\nAgainst Chemical Guys Heavy Metal, it leads on oxidation and tarnish claims and has no sealant note. Against Griot's Wash and Wax, it corrects rather than maintains.\n\nBest for bare, oxidized aluminum panels and trim. It is not a wash, and it should not go on painted or clear-coated siding without a test.",
    "specs": [
      "Metal polish for aluminum",
      "Removes oxidation, tarnish",
      "Hand or polisher"
    ],
    "pros": [
      "Names aluminum and oxidation directly",
      "No old-school abrasives claimed",
      "Works by hand or with a polisher",
      "No odor or residue claimed"
    ],
    "cons": [
      "Not a wash product",
      "Polish needs real effort on large siding"
    ],
    "bestFor": "Oxidized bare aluminum"
  },
  {
    "id": "best-rv-wash-and-wax-for-aluminum-siding-3",
    "rank": 3,
    "badge": "Best Polish with Sealant",
    "name": "Chemical Guys",
    "price": "$19.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411Mm31BsIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00FALVXEQ?tag=rvgearlab-20",
    "description": "Chemical Guys Heavy Metal Polish is a 16 oz polish for chrome, aluminum and stainless that removes oxidation, tarnish and rust stains and leaves a protective sealant. The listing says it helps resist future oxidation and grime on wheels, trim and railings.\n\nAgainst 3D Metal Polish, it adds a protective seal but is aimed at automotive and marine trim. Against Griot's Wash and Wax, it is a polish, not a soap.\n\nBest for aluminum trim, rails and bumpers where the seal helps. It is not meant for whole painted wall panels.",
    "specs": [
      "16 oz metal polish",
      "Removes oxidation and stains",
      "Protective sealant included"
    ],
    "pros": [
      "Includes a protective sealant",
      "Removes oxidation, tarnish and rust stains",
      "Names aluminum, chrome and stainless",
      "Suited to trim and railings"
    ],
    "cons": [
      "Not a wash product",
      "Aimed at car and marine trim"
    ],
    "bestFor": "Trim and rails"
  }
];

export const howWeEvaluated = [
  {
    "title": "Job type",
    "description": "We separated routine washing from oxidation correction."
  },
  {
    "title": "Aluminum naming",
    "description": "We checked which listings name aluminum."
  },
  {
    "title": "Protection",
    "description": "We noted waxes and sealants."
  },
  {
    "title": "Surface limits",
    "description": "We noted where each product should not be used."
  },
  {
    "title": "Honesty",
    "description": "We did not treat a wash and wax as an oxidation fix."
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
    "subheading": "By Aluminum Problem",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Routine dirt on sound siding",
          "Griot's Wash and Wax",
          "Concentrated pH-balanced wash with wax."
        ],
        [
          "Chalky oxidized bare aluminum",
          "3D Metal Polish",
          "Names aluminum oxidation removal."
        ],
        [
          "Aluminum trim and rails",
          "Chemical Guys Heavy Metal",
          "Polish with a protective sealant."
        ],
        [
          "Wash first, polish after",
          "Griot's Wash and Wax",
          "Wash step before any polish."
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
          "Chemical Guys Heavy Metal"
        ],
        [
          "$10 to $20",
          "Griot's Wash and Wax"
        ],
        [
          "$20 to $30",
          "3D Metal Polish"
        ]
      ]
    }
  },
  {
    "subheading": "Wash and Wax vs Metal Polish",
    "cards": [
      {
        "label": "Wash and wax",
        "text": "Griot's Wash and Wax cleans and adds carnauba, so it suits regular upkeep. It does not remove oxidation."
      },
      {
        "label": "Metal polish",
        "text": "3D Metal Polish and Chemical Guys Heavy Metal cut oxidation and tarnish but are for bare metal and trim. They are not soaps."
      }
    ],
    "note": "Most owners should wash with Griot's Wash and Wax and use 3D Metal Polish only on oxidized bare aluminum."
  },
  {
    "subheading": "By Surface",
    "table": {
      "headers": [
        "Surface",
        "Recommended pick"
      ],
      "rows": [
        [
          "Painted siding",
          "Griot's Wash and Wax"
        ],
        [
          "Bare aluminum panel",
          "3D Metal Polish"
        ],
        [
          "Trim and bumpers",
          "Chemical Guys Heavy Metal"
        ]
      ]
    }
  },
  {
    "subheading": "For Older Aluminum-Sided Trailers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A wash for dirt, a polish for oxidation and a test patch before any polish touches the wall, as the Griot's Wash and Wax listing shows."
      },
      {
        "label": "In this comparison",
        "text": "Griot's Wash and Wax handles the dirt and 3D Metal Polish handles bare oxidation. Never mix them in one step."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Chemical Guys Heavy Metal or 3D Metal Polish if oxidation is the real problem and the metal is bare."
      },
      {
        "label": "Save if",
        "text": "Save with Griot's Wash and Wax if the siding is sound and you only need routine washing."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Wash versus polish",
    "explanation": "A wash and wax maintains a sound finish, while a metal polish removes surface oxidation. Using a soap on chalky aluminum leaves the chalk. Decide which problem you have."
  },
  {
    "criterion": "Aluminum named on the label",
    "explanation": "Aluminum reacts differently than paint or fiberglass. A listing that names it gives you a claim to rely on. Search the title and bullets for aluminum."
  },
  {
    "criterion": "Painted versus bare siding",
    "explanation": "Many RV sidings are painted or clear coated aluminum, and polish can cut through the coating. Bare metal tolerates polish better. Test a hidden spot before polishing a wall."
  },
  {
    "criterion": "Sealant or wax layer",
    "explanation": "A sealant or carnauba layer slows new oxidation, but it wears over a season. Plan to reapply. Look for the protection type named."
  },
  {
    "criterion": "Dilution and cost",
    "explanation": "A concentrate that dilutes to a gallon costs little per wash, while a polish costs more per square foot. Compare per use. Read the dilution and coverage."
  },
  {
    "criterion": "Application effort",
    "explanation": "Polishing large siding by hand is slow, and a machine can burn a coating. Match the product to the size of the job. Look for hand or polisher notes."
  }
];

export const faq = [
  {
    "q": "Can a wash and wax remove aluminum oxidation?",
    "a": "No. Griot's Wash and Wax does not claim to. Use 3D Metal Polish on bare oxidized aluminum."
  },
  {
    "q": "Can I polish painted aluminum siding?",
    "a": "Be careful, since polish can cut through paint or clear coat. Test a hidden spot and prefer the wash for painted walls."
  },
  {
    "q": "Is 3D Metal Polish worth more than Griot's Wash and Wax?",
    "a": "They do different jobs. Use the polish for oxidation and the wash for upkeep."
  },
  {
    "q": "How do I apply metal polish to siding?",
    "a": "Wash and dry the panel, apply a small amount with a microfiber towel and buff in sections. Follow the label."
  },
  {
    "q": "Why only three products?",
    "a": "Few listings named aluminum siding clearly. The set is short rather than padded."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best RV Wash And Wax",
    "href": "/rv-care/best-rv-wash-and-wax"
  },
  {
    "title": "Best RV Wash And Wax For Fiberglass",
    "href": "/rv-care/best-rv-wash-and-wax-for-fiberglass"
  },
  {
    "title": "Best RV Cleaner",
    "href": "/rv-care/best-rv-cleaner"
  },
  {
    "title": "Best RV Roof Coating",
    "href": "/rv-care/best-rv-roof-coating"
  }
];
