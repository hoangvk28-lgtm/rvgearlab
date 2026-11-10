export const guideSlug = "best-water-purifiers-for-backpacking";
export const guideTitle = "3 Best Water Purifiers For Backpacking in 2026";
export const metaTitle = "Best Water Purifiers For Backpacking in 2026";
export const metaDescription = "Three backpacking water treatment options: the GRAYL GeoPress that names viruses, a TRAILGO hand pump and a Purewell hand pump that name bacteria and chemicals.";
export const mainKeyword = "best water purifiers for backpacking";
export const introParagraphs = [
  "Backpacking purifiers come in two flavors: a bottle that you press and drink, and a hand pump that fills your containers. The GRAYL GeoPress is the only one of the three that lists viruses by name, so it leads this guide.",
  "The TRAILGO Pro and the Purewell pump are strong filters for bacteria, protozoa and in the Purewell's case chemicals, but their listings do not claim virus removal. Each entry says what is printed, so you can pair them with a second step if you need one."
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
    "id": "best-water-purifiers-for-backpacking-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "GRAYL GeoPress 24 oz Water Purifier & Water Filter Bottle",
    "price": "$99.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31MbTYqEWdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C1JHC2M6?tag=rvgearlab-amz-20",
    "description": "GRAYL designed the GeoPress as a 24 oz bottle within a bottle: you push the inner one down by hand, and nothing else needs assembling. Its listing says it removes rotavirus, norovirus and hepatitis A, plus E. coli, Salmonella, Giardia and Cryptosporidium.\n\nNo other pick here spells out virus removal, and the page adds adsorption of VOCs, PFAS, pesticides and heavy metals. A replaceable cartridge is good for 65 gallons, or 250 liters.\n\nBest for backpackers who want one device for questionable sources and travel. Press, wait a moment and drink.",
    "specs": [
      "Purifier: viruses, bacteria, protozoa",
      "24 oz per press",
      "Cartridge good for 65 gallons"
    ],
    "pros": [
      "Names the viruses it removes",
      "No pump, hose or batteries",
      "Adsorbs PFAS, VOCs and metals",
      "Replaceable cartridge"
    ],
    "cons": [
      "Only 24 oz per press",
      "Cartridge is the biggest running cost"
    ],
    "bestFor": "Backpackers and travelers",
    "take": "Names rotavirus, norovirus and hepatitis A, with no pump, hose or battery.",
    "catch": "It treats only 24 oz per press, and the cartridge is the highest running cost."
  },
  {
    "id": "best-water-purifiers-for-backpacking-2",
    "rank": 2,
    "badge": "Best Group Pump",
    "name": "Trailgo Pro Portable Water Filter for Camping",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51U5YkHN7BL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZF46VG2?tag=rvgearlab-amz-20",
    "description": "The TRAILGO Pro is a hand pump that moves 1.5 liters per minute through a 5 micron pre-filter, PP cotton and an ultrafiltration membrane. The listing says it handles bacteria, protozoa and cysts for a group of 4 to 6 and includes tubes, clamps and a bag.\n\nWhere the GRAYL GeoPress treats 24 oz at a time, the TRAILGO Pro fills bottles and pots for several people. It does not name viruses, so it works as a filter, not a purifier.\n\nA fit for groups and base camps who want a pump with a complete kit. Replacement cartridges are sold.",
    "specs": [
      "Hand pump, 1.5 L per minute",
      "Three-stage filtration",
      "Tubes, clamps and carry bag"
    ],
    "pros": [
      "Pumps 1.5 liters per minute",
      "Complete kit in the box",
      "Reusable pre-filter",
      "Replacement cartridges available"
    ],
    "cons": [
      "Weight is not printed",
      "Lifespan in liters not printed"
    ],
    "bestFor": "Groups and base camps",
    "take": "A complete group pump that fills pots and bottles quickly.",
    "catch": "Weight and cartridge life are not printed, and viruses are not named."
  },
  {
    "id": "best-water-purifiers-for-backpacking-3",
    "rank": 3,
    "badge": "Best Budget Pump",
    "name": "Purewell Water Hand Purifier Pump with Replaceable Carbon 0.01 Micron Water",
    "price": "$42.54",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41BgM4uXJcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07NVCBWVV?tag=rvgearlab-amz-20",
    "description": "The Purewell pump runs water through a 0.01 micron hollow fiber membrane, carbon fiber, a coconut carbon rod and PP cotton. The listing gives a flow of up to 1,400 ml per minute and 3,000 liters before the carbon needs replacing.\n\nCheapest of the three, it also gets the longest cartridge life, and rubber on the base keeps it steady on the ground. The listing claims reductions in fluoride, arsenic, chlorine, lead and heavy metals, and never names viruses.\n\nGreat for budget backpackers and emergency kits who want chemical reduction and a long cartridge life. It needs no electricity.",
    "specs": [
      "0.01 micron UF membrane, four parts",
      "Up to 1,400 ml per minute",
      "3,000 liters before replacement"
    ],
    "pros": [
      "Lowest price of the three",
      "3,000 liters per cartridge",
      "Reduces chemicals and heavy metals",
      "Works without electricity"
    ],
    "cons": [
      "Does not name viruses",
      "Pump effort adds up on big volumes"
    ],
    "bestFor": "Budget and emergency kits",
    "take": "The lowest-priced pump, with a long cartridge life and chemical reduction claims.",
    "catch": "Without a virus claim, pair it with tablets if viruses are a concern."
  }
];

export const howWeEvaluated = [
  {
    "title": "Virus claims",
    "description": "Each listing was read for whether it names viruses and which ones."
  },
  {
    "title": "Format",
    "description": "A press bottle and two hand pumps were compared for speed, volume and effort."
  },
  {
    "title": "Capacity",
    "description": "Cartridge lives and press volumes were compared."
  },
  {
    "title": "Extras",
    "description": "Chemical reduction claims and included parts were compared."
  },
  {
    "title": "Honest scope",
    "description": "Only one listing names viruses, so the other two are labelled as filters."
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
    "subheading": "By Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Named virus protection",
          "GRAYL GeoPress",
          "Names rotavirus, norovirus, hepatitis A"
        ],
        [
          "Fill pots for a group",
          "TRAILGO Pro",
          "1.5 L per minute for 4 to 6"
        ],
        [
          "Chemical reduction on a budget",
          "Purewell Hand Pump",
          "Fluoride, arsenic, lead claims"
        ],
        [
          "No pump or battery",
          "GRAYL GeoPress",
          "Press bottle"
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
          "Purewell Hand Pump"
        ],
        [
          "$80 to $90",
          "TRAILGO Pro"
        ],
        [
          "$90 to $100",
          "GRAYL GeoPress"
        ]
      ]
    }
  },
  {
    "subheading": "Press Bottle vs Pump",
    "cards": [
      {
        "label": "Press bottle",
        "text": "The GRAYL GeoPress purifies 24 oz in seconds with no parts to assemble."
      },
      {
        "label": "Pump",
        "text": "The TRAILGO Pro and Purewell Hand Pump fill several containers."
      }
    ],
    "note": "Choose the GRAYL GeoPress for solo trips and the TRAILGO Pro for groups."
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
          "Lowest cost",
          "Purewell Hand Pump"
        ],
        [
          "Mid cost, group kit",
          "TRAILGO Pro"
        ],
        [
          "Higher cost, names viruses",
          "GRAYL GeoPress"
        ]
      ]
    }
  },
  {
    "subheading": "Backpackers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A named virus claim, a stated cartridge life and a weight you can carry."
      },
      {
        "label": "In this comparison",
        "text": "The GRAYL GeoPress names viruses with a 65 gallon cartridge, and the Purewell Hand Pump lists 3,000 liters per cartridge."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the GRAYL GeoPress if viruses are a concern or you travel abroad."
      },
      {
        "label": "Save if",
        "text": "Save with the Purewell Hand Pump or TRAILGO Pro for bacteria and protozoa."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Purifier versus filter",
    "explanation": "A purifier is expected to handle viruses, while a filter targets bacteria and protozoa. Listings blur the terms. Look for the word viruses and named examples."
  },
  {
    "criterion": "Press, pump or squeeze",
    "explanation": "A press bottle treats a single serving, while a pump fills several containers. Pick by group size and how much you cook with. Check the printed volume per cycle."
  },
  {
    "criterion": "Cartridge cost per liter",
    "explanation": "A 250 liter cartridge wears out twelve times faster than a 3,000 liter one, so running costs differ a lot. That matters on long trips and for groups. Compare the stated life in liters and the refill price."
  },
  {
    "criterion": "Chemical claims",
    "explanation": "Carbon and PFAS claims matter for travel and treated sources, not for streams. Read which chemicals are named. Check that the listing names them."
  },
  {
    "criterion": "Cold and freezing",
    "explanation": "Wet membranes crack when frozen. Keep them in your sleeping bag in cold weather. Check the freeze guidance in the manual."
  }
];

export const faq = [
  {
    "q": "Which of these removes viruses?",
    "a": "Only the GRAYL GeoPress names viruses. The others do not. Add tablets if you use a pump."
  },
  {
    "q": "What do backpackers get wrong with purifiers?",
    "a": "They rely on the title. A listing that says purifier may not name viruses. Read the removal list."
  },
  {
    "q": "Is the GRAYL worth the price over a pump?",
    "a": "If viruses matter, yes. The GRAYL GeoPress names rotavirus and norovirus. For groups, a pump moves more water."
  },
  {
    "q": "How do I use a press bottle?",
    "a": "Fill the outer bottle, press the inner one down and drink. Wait the stated time if the manual says. Clean the cartridge per instructions."
  },
  {
    "q": "How do I carry a hand pump?",
    "a": "Keep hoses coiled and dry in the bag. Rinse the pre-filter at camp. Do not let it freeze wet."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Water Filter For Groups",
    "href": "/packs-hiking/best-backpacking-water-filter-for-groups"
  },
  {
    "title": "Best Water Filter For Backpacking Trip",
    "href": "/packs-hiking/best-water-filter-for-backpacking-trip"
  },
  {
    "title": "Best Affordable Backpacking Water Filters",
    "href": "/packs-hiking/best-affordable-backpacking-water-filters"
  }
];
