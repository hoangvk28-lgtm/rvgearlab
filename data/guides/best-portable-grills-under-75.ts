export const guideSlug = "best-portable-grills-under-75";
export const guideTitle = "5 Best Portable Grills Under 75 in 2026";
export const metaTitle = "Best Portable Grills Under 75 in 2026";
export const metaDescription = "Best portable grills under $75: five charcoal, propane and electric grills compared on cooking area, fuel and carry size for camping and tailgating.";
export const mainKeyword = "best portable grills under 75";
export const introParagraphs = [
  "Seventy-five dollars is the first tier where size stops being the main limit. The five picks here run from about $43 to $70, and they cover charcoal, propane and a plug-in electric grill.",
  "Over the $50 tier you gain cooking area up to 319 square inches, a lid thermometer and a cover. The notes explain what that is worth and where a smaller, cheaper grill is the better call."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/kitchen-camp-stove-coffee.webp";
export const heroImageAlt = "Single-burner camp stove brewing coffee on a riverside rock";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-portable-grills-under-75-1",
    "rank": 1,
    "badge": "Best Value Under $75",
    "name": "IRONYAK Portable Charcoal Grill",
    "price": "$69.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Z-ibVOqGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H7R3BNG7?tag=rvgearlab-amz-20",
    "description": "IRONYAK is an 18 inch tabletop charcoal grill with 319 square inches of chrome-plated cooking space, a built-in lid thermometer and reinforced legs. It works as a grill or a smoker and has a removable ash pan and a nylon cover in the box.\n\nAt about $69 it offers the largest cooking area in this guide and a cover that the others lack. The Charbroil propane grill is easier to light, while this one gives twice the room for the money.\n\nFamilies and groups of four who cook on charcoal will get the most from it. It needs basic tools to assemble.",
    "specs": [
      "18 inch, 319 sq in cooking area",
      "Lid thermometer, grill or smoker",
      "Removable ash pan, cover included"
    ],
    "pros": [
      "Largest cooking area of the five",
      "Lid thermometer for temperature control",
      "Includes a custom-fit cover",
      "Removable ash pan for cleanup"
    ],
    "cons": [
      "Needs basic tools to assemble",
      "Charcoal takes time to light"
    ],
    "bestFor": "Families grilling for four",
    "take": "The most cooking space and the most extras for the price.",
    "catch": "Plan 15 minutes of assembly out of the box."
  },
  {
    "id": "best-portable-grills-under-75-2",
    "rank": 2,
    "badge": "Best Simple Propane",
    "name": "Charbroil Portable Convective 1-Burner Propane Gas Grill",
    "price": "$54.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31tA6QBVsTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00004TBJ4?tag=rvgearlab-amz-20",
    "description": "The Charbroil Portable Convective is a one-burner propane grill with 190 square inches of cooking space and porcelain-coated grates. It runs on liquid propane and has a compact footprint of about 15 by 24 inches.\n\nAt about $54 it is the cheapest gas grill in this budget and carries a name that shows up in many camp kitchens. The IRONYAK has more space and the Outvita needs no fuel.\n\nCampers who want gas without paying for features will like the simple burner. It suits tailgates and RV sites.",
    "specs": [
      "190 sq in cooking space",
      "Porcelain-coated grates",
      "Compact 15 x 24 inch footprint"
    ],
    "pros": [
      "Gas lights fast and holds heat",
      "Porcelain grates clean easily",
      "Compact for a trunk",
      "One-burner simplicity"
    ],
    "cons": [
      "Single burner only",
      "Few features"
    ],
    "bestFor": "Tailgates and RV sites",
    "take": "A plain, reliable propane grill at a modest price.",
    "catch": "A propane cylinder is a separate purchase."
  },
  {
    "id": "best-portable-grills-under-75-3",
    "rank": 3,
    "badge": "Best For Powered Sites",
    "name": "Outvita Outdoor/Indoor Electric Grill",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ZReqr7aIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H797M5H5?tag=rvgearlab-amz-20",
    "description": "Outvita is a 1600W electric grill with a removable stand, an interlocking hood and bowl and chrome-plated grates over stainless heating tubes. It cooks up to 10 burgers at a time and has a waterproof plug.\n\nAt about $70 it is the most expensive pick, and it needs no charcoal, propane or flare-up management. It needs a 1600W power source, so it suits campgrounds with hookups or a large power station.\n\nRV owners on powered sites, apartment dwellers and anyone who bans open flames will like it. Smoke is minimal.",
    "specs": [
      "1600W electric, 10 burgers",
      "Removable stand, hood and bowl",
      "Chrome grates, stainless elements"
    ],
    "pros": [
      "No charcoal or propane needed",
      "Fits 10 burgers at once",
      "Removable stand for storage",
      "Waterproof plug"
    ],
    "cons": [
      "Needs a 1600W power source",
      "Not for off-grid camping"
    ],
    "bestFor": "Powered campsites and RV hookups",
    "take": "A smoke-free option for sites with power.",
    "catch": "Do not plan on running it from a small power station."
  },
  {
    "id": "best-portable-grills-under-75-4",
    "rank": 4,
    "badge": "Best Small Charcoal",
    "name": "Joyfair Portable Charcoal Grill with Thermometer",
    "price": "$42.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Iylx6J+GL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BW3BLTWX?tag=rvgearlab-amz-20",
    "description": "The Joyfair is a cylindrical charcoal grill with a powder-coated body, a lid thermometer and a 13.5 by 8.8 inch cooking rack. A triangular leg structure and a wooden handle keep it stable and cool to touch.\n\nNear $43, the Joyfair is the lowest priced here and the smallest, with a thermometer the Charbroil lacks. The IRONYAK offers more than twice the surface for $26 more.\n\nSolo campers and couples who want temperature control in a small package will like it. It slides into a trunk corner.",
    "specs": [
      "Lid thermometer, 13.5 x 8.8 inch rack",
      "Powder-coated body",
      "Triangular legs, wooden handle"
    ],
    "pros": [
      "Lid thermometer reads temperature",
      "Powder coating resists rust",
      "Wooden handle stays cool",
      "Compact cylinder shape"
    ],
    "cons": [
      "Small cooking area",
      "Serves one to three people"
    ],
    "bestFor": "Solo campers and couples",
    "take": "A compact grill with temperature control.",
    "catch": "Do not expect to feed a family from it."
  },
  {
    "id": "best-portable-grills-under-75-5",
    "rank": 5,
    "badge": "Best 2-in-1 Valve",
    "name": "BESTFIRE Portable Propane Gas Grill with New 2-in-1 Valve",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41SMvpyNioL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GC4YWR7J?tag=rvgearlab-amz-20",
    "description": "The BESTFIRE has a valve that connects to a 20 lb tank or a small cylinder, an adjustable regulator and foldable legs. It has 165.36 square inches of porcelain-coated cooking area.\n\nIt costs about $50, $4 less than the Charbroil, and its dual valve is the feature that sets it apart. The Charbroil has more cooking area, and this one has flexible fuel options.\n\nCampers who already own a 20 lb tank and also carry small cylinders will use both. It suits backyard and campsite cooking.",
    "specs": [
      "2-in-1 valve, 20 lb or small cylinder",
      "165.36 sq in porcelain grates",
      "Adjustable regulator, foldable legs"
    ],
    "pros": [
      "Takes two tank sizes",
      "Adjustable regulator",
      "Folding legs",
      "Porcelain-coated cooking surface"
    ],
    "cons": [
      "Valve needs a press-and-twist action",
      "Smaller area than the Charbroil"
    ],
    "bestFor": "Flexible propane use",
    "take": "A flexible gas grill at a moderate price.",
    "catch": "Check connections for leaks every time."
  }
];

export const howWeEvaluated = [
  {
    "title": "Cooking area",
    "description": "Surfaces from 13.5 by 8.8 inches to 319 square inches were compared against group size."
  },
  {
    "title": "Fuel type",
    "description": "Charcoal, propane and electric power were compared on setup, cost and where each works."
  },
  {
    "title": "Heat control",
    "description": "Thermometers, regulators and vents were compared."
  },
  {
    "title": "Size and weight",
    "description": "Folded dimensions and weights were compared."
  },
  {
    "title": "Extras",
    "description": "Covers, ash pans and valves were compared against price."
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
    "subheading": "By fuel and site",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Family of four on charcoal",
          "IRONYAK 18 Inch",
          "319 square inches and a cover."
        ],
        [
          "Simple propane at a tailgate",
          "Charbroil Convective",
          "190 square inches, one burner."
        ],
        [
          "Powered campsite or RV hookup",
          "Outvita Electric",
          "1600W plug-in grill."
        ],
        [
          "Solo or couple with temperature control",
          "Joyfair Thermometer Grill",
          "Lid thermometer in a small body."
        ],
        [
          "Mixed tank sizes",
          "BESTFIRE Propane",
          "2-in-1 valve for 20 lb or small cylinders."
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
          "$40 to $50",
          "Joyfair Thermometer Grill or BESTFIRE Propane"
        ],
        [
          "$50 to $70",
          "Charbroil Convective or IRONYAK 18 Inch"
        ],
        [
          "$60 to $70",
          "Outvita Electric"
        ]
      ]
    }
  },
  {
    "subheading": "Charcoal vs gas vs electric",
    "cards": [
      {
        "label": "Charcoal and gas",
        "text": "Charcoal gives flavor and gas gives speed and control. The IRONYAK 18 Inch and Joyfair Thermometer Grill burn charcoal, and the Charbroil Convective and BESTFIRE Propane burn propane."
      },
      {
        "label": "Electric",
        "text": "An electric grill needs no fuel and makes little smoke, which suits campgrounds with fire bans and RV hookups. The Outvita Electric is the only plug-in pick."
      }
    ],
    "note": "Most campers should buy the IRONYAK 18 Inch, and RV owners with power should consider the Outvita Electric."
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
          "Around $43",
          "Joyfair Thermometer Grill"
        ],
        [
          "Around $50",
          "BESTFIRE Propane"
        ],
        [
          "Around $54",
          "Charbroil Convective"
        ],
        [
          "Around $69",
          "IRONYAK 18 Inch"
        ],
        [
          "Around $70",
          "Outvita Electric"
        ]
      ]
    }
  },
  {
    "subheading": "For a family of four specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for at least 190 square inches, a lid and a stable base that can handle a full load of food."
      },
      {
        "label": "In this comparison",
        "text": "The IRONYAK 18 Inch has 319 square inches and a thermometer, and the Charbroil Convective has 190 square inches of porcelain-coated grate."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want gas with two burners and more than 300 square inches, which is what the next price tier delivers. The IRONYAK 18 Inch is already the biggest cooker in this range."
      },
      {
        "label": "Save if",
        "text": "Save if you cook for one or two, because the Joyfair Thermometer Grill at about $43 has a lid thermometer and a small footprint."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Choosing a fuel",
    "explanation": "Charcoal costs the least per meal and adds smoky flavor, propane lights in seconds, and electric needs no fuel but demands a power outlet. At campsites, check fire restrictions, since some ban charcoal in dry months. Pick a fuel based on your campground rules and how much setup time you accept."
  },
  {
    "criterion": "Cooking area",
    "explanation": "About 50 square inches feeds one person, so 190 square inches feeds about four and 319 feeds six or more. A grill that is too small forces you to cook in batches while food gets cold. Look for the square inch figure in the title and divide it by 50."
  },
  {
    "criterion": "Power needs of electric grills",
    "explanation": "A 1600W grill draws about 13 amps at 120 volts, which is most of a standard 15 amp circuit. Most campground hookups handle it, but small power stations do not. Look for the wattage in the title and check your power source before you buy."
  },
  {
    "criterion": "Temperature monitoring",
    "explanation": "A lid thermometer tells you when the grill is at 350 degrees for chicken or 450 for steaks, so you do not overcook. Without one, you guess. Look for a built-in thermometer, and carry a separate probe thermometer for meat if the grill lacks one."
  },
  {
    "criterion": "Cover and storage",
    "explanation": "A custom cover protects a grill from rain and dust between trips, and without one you pay about $15 to $25 extra for a universal cover. Folding legs and removable stands shrink the packed size so the grill fits a closet or trunk. Look at what is in the box, including a cover, tools and the ash pan, before comparing prices."
  }
];

export const faq = [
  {
    "q": "Can I use an electric grill at a campsite?",
    "a": "Only where there is a 120 volt outlet that can handle 1600W, such as a powered RV site. The Outvita Electric draws about 13 amps, so avoid sharing a circuit with a microwave or air conditioner. It is not a good fit for a small power station."
  },
  {
    "q": "Is a smoker grill worth it?",
    "a": "The IRONYAK 18 Inch works as a grill or a smoker with a lid thermometer, which helps with slow cooking. Smoking takes hours and a lot of charcoal. If you only want burgers, a simpler grill is cheaper."
  },
  {
    "q": "How long does a propane cylinder last?",
    "a": "A 1 lb cylinder lasts about 1.5 hours on a single burner like the Charbroil Convective. A 20 lb tank lasts 15 to 20 hours, and the BESTFIRE Propane can use either. Keep a spare cylinder for longer trips."
  },
  {
    "q": "How do I keep a charcoal grill from rusting?",
    "a": "Dry the grill after each use, keep it covered and empty the ash, since wet ash holds moisture against the metal and corrodes it. The IRONYAK 18 Inch includes a cover for this purpose. Store the grill indoors or under a tarp over winter."
  },
  {
    "q": "Can I grill under an awning?",
    "a": "No. Open flames and hot grills can ignite awnings and tents, and charcoal and propane produce carbon monoxide. Set the grill at least 10 feet from tents and vehicles and never run it in an enclosed space."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Cookpots",
    "href": "/camp-kitchen/best-backpacking-cookpots"
  },
  {
    "title": "Best Backpacking Stoves",
    "href": "/camp-kitchen/best-backpacking-stoves"
  },
  {
    "title": "Best Camping Coffee",
    "href": "/camp-kitchen/best-camping-coffee"
  },
  {
    "title": "Best Camping Coffeemakers",
    "href": "/camp-kitchen/best-camping-coffeemakers"
  }
];
