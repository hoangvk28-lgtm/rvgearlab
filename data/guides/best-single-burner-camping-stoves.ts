export const guideSlug = "best-single-burner-camping-stoves";
export const guideTitle = "5 Best Single Burner Camping Stoves in 2026";
export const metaTitle = "Best Single Burner Camping Stoves in 2026";
export const metaDescription = "Best single burner camping stoves compared on BTU, fuel, pan size and wind protection, for solo campers, couples and backup cooking.";
export const mainKeyword = "best single burner camping stoves";
export const introParagraphs = [
  "A single burner is the simplest camp kitchen: one pan, one flame and a minute to set up. Five tabletop stoves are compared here, split between propane and butane, and all built around a stable base rather than a pocket-sized head.",
  "The picks are ordered by how well each handles a real pan: pan size, wind protection and safety listings come first. Run any of them outdoors only, on a level surface, with the fuel clear of the flame."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/kitchen-campfire-skillet.webp";
export const heroImageAlt = "Breakfast cooking in a cast iron skillet over a campfire";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-single-burner-camping-stoves-1",
    "rank": 1,
    "badge": "Best Overall Single Burner",
    "name": "Coleman Cascade 18 1-Burner Camping Stove",
    "price": "$82.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31LySLQ7LBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09HN31PCH?tag=rvgearlab-amz-20",
    "description": "The Coleman Cascade 18 is an 8,000 BTU propane cooktop that fits a 12 inch pan. A rotary igniter, a flip-over grate and an aluminized steel top come with it, and the burner works with an optional grill or griddle accessory.\n\nRuntime is up to 2.5 hours on high from one 16 oz propane cylinder, well beyond a butane cartridge. It costs the most of the group and is the only one that handles a 12 inch pan.\n\nA classic for couples who cook with a full-size skillet at the campsite. A regulator stores on top of the stove.",
    "specs": [
      "8,000 BTU propane",
      "Fits a 12 inch pan",
      "Up to 2.5 hours on high"
    ],
    "pros": [
      "Fits a 12 inch pan",
      "Up to 2.5 hours on one cylinder",
      "Easy-clean aluminized steel top",
      "Works with grill or griddle accessory"
    ],
    "cons": [
      "Priciest of the five",
      "Cylinder sold separately"
    ],
    "bestFor": "Couples with a big pan",
    "take": "An 8,000 BTU propane stove for 12 inch pans with up to 2.5 hours of runtime.",
    "catch": "It is the priciest of the five, and propane cylinders are sold separately."
  },
  {
    "id": "best-single-burner-camping-stoves-2",
    "rank": 2,
    "badge": "Best Butane With Case",
    "name": "Coleman Classic 1-Burner Butane Stove",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/316vjyh7SnL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09HMZH8Z6?tag=rvgearlab-amz-20",
    "description": "The Coleman Classic 1-Burner uses 8.8 oz butane cylinders for 7,650 BTU, with Instastart ignition and a wind baffle. A large base and a porcelain-coated removable grate fit a 10 inch pan.\n\nIt trades the long propane runtime of the Cascade 18 for a smaller, lighter cooker that comes in a carry case. A cylinder lasts up to 1.25 hours on high.\n\nRight for picnics, roadside lunches and casual camps in mild weather. The grate lifts out for cleaning.",
    "specs": [
      "7,650 BTU butane",
      "Instastart ignition",
      "Fits a 10 inch pan"
    ],
    "pros": [
      "Matchless Instastart ignition",
      "Wind baffle shields flame",
      "Removable porcelain-coated grate",
      "Carry case included"
    ],
    "cons": [
      "Butane weakens in cold",
      "About 1.25 hours per cylinder"
    ],
    "bestFor": "Picnics and mild-weather camps",
    "take": "A 7,650 BTU butane stove with matchless ignition, a wind baffle and a carry case.",
    "catch": "Butane weakens in cold, and a cylinder lasts only about 1.25 hours on high."
  },
  {
    "id": "best-single-burner-camping-stoves-3",
    "rank": 3,
    "badge": "Best Warranty and Certification",
    "name": "JoChef Portable Butane Camping Stove",
    "price": "$22.93",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51HnBG25+wL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H5881DKX?tag=rvgearlab-amz-20",
    "description": "The JoChef has a brass single burner, a windshield, a hard shell carrying case and a three-year warranty. The listing says it is CSA certified with a safety lock, a pressure sensor that cuts the flame and a gas leakage guard.\n\nBeside the Coleman Classic it lists CSA certification and a longer warranty, with a reinforced frame for pans up to 10 inches wide. At 3.1 pounds it is no backpacking stove, and the listing gives no BTU number.\n\nA sound choice for families who want a certified, protected butane stove. It runs on butane.",
    "specs": [
      "Brass burner, windshield",
      "CSA certified",
      "3-year warranty"
    ],
    "pros": [
      "CSA certified, per the listing",
      "Triple safety system",
      "Hard-shell case",
      "3-year warranty"
    ],
    "cons": [
      "No BTU rating listed",
      "3.1 pounds is heavy for hiking"
    ],
    "bestFor": "Safety-minded families",
    "take": "A CSA certified brass-burner butane stove with a windshield, hard case and 3-year warranty.",
    "catch": "No BTU rating is listed, and 3.1 pounds is heavy for a hike."
  },
  {
    "id": "best-single-burner-camping-stoves-4",
    "rank": 4,
    "badge": "Best Value Butane",
    "name": "Gas One Portable Butane Camping Stove with Case: Automatic Ignition",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/310zJ+RVtBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08WTNVPB7?tag=rvgearlab-amz-20",
    "description": "The Gas One Butane Stove is a 7,650 BTU single burner for 8 oz butane canisters. Its listing claims CSA approval, piezo ignition, safety shut-off and an ejection feature that triggers at 0.7 kilogram force.\n\nIt costs much less than the Coleman Classic and has the same BTU, with a carrying case and manual. It lists no wind baffle.\n\nA good backup stove or a tailgate cooker for casual use. Quiet burn, outdoor only.",
    "specs": [
      "7,650 BTU butane burner",
      "CSA approved per listing",
      "Piezo ignition, safety shut-off"
    ],
    "pros": [
      "CSA approved per the listing",
      "Automatic piezo ignition",
      "Safety shut-off system",
      "Carrying case included"
    ],
    "cons": [
      "Butane loses punch in cold weather",
      "Outdoor use only"
    ],
    "bestFor": "Tailgates and backup cooking",
    "take": "A budget 7,650 BTU butane burner with CSA approval claimed, shutoff and a case.",
    "catch": "Butane loses punch in the cold, and no wind baffle is listed."
  },
  {
    "id": "best-single-burner-camping-stoves-5",
    "rank": 5,
    "badge": "Best Compact Propane",
    "name": "Coleman Bottletop Propane Stove",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41PHUHg9-WL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0009PUR5E?tag=rvgearlab-amz-20",
    "description": "The Coleman Bottletop sits directly on a 16.4 ounce propane cylinder, with a regulator, wind baffles and an adjustable burner for an 8 inch pan. It lists up to 10,000 total BTU and up to 2.5 hours of runtime.\n\nThe burner and base separate from the cylinder, so it stores smaller than the Cascade 18. It handles a smaller pan.\n\nA tidy pick for camps with a small skillet and a love for propane. A three-year limited warranty comes with it.",
    "specs": [
      "Up to 10,000 BTU propane",
      "Fits an 8 inch pan",
      "Regulator, wind baffles"
    ],
    "pros": [
      "Regulator steadies output",
      "Wind baffles shield the flame",
      "Separates from cylinder for storage",
      "3-year limited warranty"
    ],
    "cons": [
      "Fits only an 8 inch pan",
      "Heavier than canister-top stoves"
    ],
    "bestFor": "Small-pan propane cooks",
    "take": "A bottletop propane burner with a regulator and wind baffles that separates for storage.",
    "catch": "It fits only an 8 inch pan, and it is heavier than canister-top stoves."
  }
];

export const howWeEvaluated = [
  {
    "title": "Pan size",
    "description": "We compared the maximum pan size each listing states."
  },
  {
    "title": "Fuel and runtime",
    "description": "We separated propane from butane and noted runtime."
  },
  {
    "title": "Wind protection",
    "description": "We checked baffles and windshields."
  },
  {
    "title": "Safety",
    "description": "We noted certification claims and shutoffs."
  },
  {
    "title": "Carry",
    "description": "We looked at cases, weight and storage."
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
    "subheading": "By Pan Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "12 inch skillet",
          "Coleman Cascade 18",
          "Fits a 12 inch pan"
        ],
        [
          "10 inch pan",
          "Coleman Classic Butane",
          "Fits a 10 inch pan"
        ],
        [
          "Up to 10 inch with windshield",
          "JoChef Brass",
          "Reinforced frame, windshield"
        ],
        [
          "Small pan, propane",
          "Coleman Bottletop",
          "8 inch pan"
        ],
        [
          "Budget butane",
          "Gas One Butane Stove",
          "7,650 BTU"
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
          "$20 to $30",
          "JoChef Brass or Gas One Butane Stove"
        ],
        [
          "$30 to $40",
          "Coleman Classic Butane or Coleman Bottletop"
        ],
        [
          "$80 to $90",
          "Coleman Cascade 18"
        ]
      ]
    }
  },
  {
    "subheading": "Propane vs Butane",
    "cards": [
      {
        "label": "Propane",
        "text": "The Coleman Cascade 18 and Coleman Bottletop run longer and keep pressure in cool air."
      },
      {
        "label": "Butane",
        "text": "The Coleman Classic Butane, JoChef Brass and Gas One Butane Stove are compact but weaken in the cold."
      }
    ],
    "note": "Most campers should choose the Coleman Cascade 18."
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
          "Lowest price",
          "JoChef Brass"
        ],
        [
          "Low price",
          "Gas One Butane Stove"
        ],
        [
          "Mid price",
          "Coleman Classic Butane"
        ],
        [
          "Mid price, propane",
          "Coleman Bottletop"
        ],
        [
          "Highest price",
          "Coleman Cascade 18"
        ]
      ]
    }
  },
  {
    "subheading": "Solo Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A small body, a stated BTU and a case."
      },
      {
        "label": "In this comparison",
        "text": "The Coleman Classic Butane comes with a carry case, and the Coleman Bottletop separates from its cylinder."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Coleman Cascade 18 for a 12 inch pan and long runtime."
      },
      {
        "label": "Save if",
        "text": "Save with the JoChef Brass or Gas One Butane Stove."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Pan size",
    "explanation": "A single-burner stove limits what you can cook. The Cascade 18 fits 12 inches, the Classic 10 inches and the Bottletop 8 inches. Match your pan."
  },
  {
    "criterion": "Propane or butane",
    "explanation": "Propane lasts longer and works in the cold, while butane is compact. Pick based on weather. Butane suits mild trips."
  },
  {
    "criterion": "Runtime",
    "explanation": "Runtime tells you how many meals a cylinder gives. Up to 2.5 hours for propane against 1.25 hours for butane. Plan fuel by meals."
  },
  {
    "criterion": "Wind baffles",
    "explanation": "Wind baffles or a windshield keep the flame steady. Look for one on the listing. Add a screen if none."
  },
  {
    "criterion": "Certification",
    "explanation": "A listed approval such as CSA is a good sign. Only count what the listing states. The JoChef and Gas One listings state CSA."
  }
];

export const faq = [
  {
    "q": "Can I use a single-burner stove inside?",
    "a": "No. Listings state outdoor use only. Carbon monoxide is a real risk in tents and vehicles."
  },
  {
    "q": "What mistake do buyers make with single burners?",
    "a": "They choose a pan that is too big for the stove. Check the maximum pan size. Heavy pans can tip."
  },
  {
    "q": "Is the Coleman Cascade 18 worth it over a butane stove?",
    "a": "If you want a bigger pan and longer runtime, yes. The butane stoves are cheaper and smaller."
  },
  {
    "q": "How do I connect the fuel?",
    "a": "Close the valve, attach the cylinder or cartridge as shown and check for leaks. Light the burner."
  },
  {
    "q": "How do I store the stove?",
    "a": "Detach fuel, clean the grate and store it in its case. Keep it dry."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Stoves",
    "href": "/camp-kitchen/best-camping-stoves"
  },
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
  }
];
