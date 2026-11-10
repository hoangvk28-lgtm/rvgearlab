export const guideSlug = "best-soft-coolers";
export const guideTitle = "5 Best Soft Coolers in 2026";
export const metaTitle = "Best Soft Coolers in 2026";
export const metaDescription = "Soft coolers compared for camping, beach days and lunches: waterproof floating, 75 can flip-top, collapsible leakproof bags and a small lunch tote.";
export const mainKeyword = "best soft coolers";
export const introParagraphs = [
  "A soft cooler trades the long ice life of a hard cooler for light weight, shoulder straps and the ability to fold away. For day hikes, beach trips and car camping side duty, that trade is worth it.",
  "At RV Gear Lab, we compared these five soft coolers by capacity, insulation layers, leak protection and carrying design. They range from a tough waterproof RTIC to a plain lunch tote so you can match the bag to the outing."
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
    "id": "best-soft-coolers-1",
    "rank": 1,
    "badge": "Best Tough Soft Cooler",
    "name": "RTIC 30 Can Ultra-Tough Soft Cooler Waterproof",
    "price": "$129.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tjPAS2wFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07DX6HZZ4?tag=rvgearlab-20",
    "description": "RTIC Ultra-Tough is a 30 can waterproof soft cooler listed to keep contents cold for up to 2 days. It floats, so a drifting cooler stays reachable on a river or lake.\n\nIt is the toughest build in the group and the only one listed as waterproof and floating, which suits boats and paddling trips better than the Maelstrom bags. It is lightweight yet made for rough terrain.\n\nKayakers, anglers and rugged campers will like how much abuse it takes. It keeps ice for a full weekend.",
    "specs": [
      "30 can capacity",
      "Up to 2 days of cooling",
      "Waterproof, floats on water"
    ],
    "pros": [
      "Up to 2 days of cooling listed",
      "Floats on water",
      "Waterproof construction",
      "Tough and lightweight"
    ],
    "cons": [
      "Highest price here",
      "Fewer pockets than budget bags"
    ],
    "bestFor": "Paddling and rugged use",
    "take": "The one soft cooler that shrugs off water and rough handling.",
    "catch": "Costs several times more than budget bags."
  },
  {
    "id": "best-soft-coolers-2",
    "rank": 2,
    "badge": "Best Big Capacity",
    "name": "Maelstrom 75Can Soft Cooler Bag",
    "price": "$32.11",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51N3+E0Gp+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09F733B2M?tag=rvgearlab-20",
    "description": "Maelstrom 75 Can is a flip-top soft cooler that holds 75 cans plus 2 to 4 ice packs and weighs only 1.8 lbs. Its 5-layer structure includes 600D Oxford fabric with waterproof PVC outside, and it measures 18 by 12 by 13.8 inches.\n\nIt holds more than twice what the RTIC does, and the flip-top access beats a zipper at a crowded picnic. Double stitching and reinforced handles carry the load.\n\nGroups, beach trips and tailgates will love the space at a low price. The light weight makes it easy to haul.",
    "specs": [
      "75 can flip-top cooler",
      "5-layer insulation, 12H cold",
      "1.8 lbs, 18x12x13.8 in"
    ],
    "pros": [
      "Holds 75 cans",
      "Only 1.8 pounds",
      "Flip-top lid access",
      "Reinforced handles and stitching"
    ],
    "cons": [
      "Cold lasts hours, not days",
      "Bulky when full"
    ],
    "bestFor": "Groups and beach days",
    "take": "The best capacity for the money.",
    "catch": "Listed cold retention is 12 hours."
  },
  {
    "id": "best-soft-coolers-3",
    "rank": 3,
    "badge": "Best Collapsible",
    "name": "Maelstrom 30Can Collapsible Soft Cooler Bag",
    "price": "$26.92",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Lr+tkRv6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CPFGZ5PD?tag=rvgearlab-20",
    "description": "Maelstrom 30 Can is a collapsible leakproof soft cooler measuring about 14.4 by 9 by 10.1 inches. Five insulating layers keep contents cold for up to 24 hours, with pockets and a bottle opener on the outside.\n\nIt folds flat after the trip, which the RTIC and the 75 can bag cannot do as neatly. It is a size down from the 75 can model.\n\nDay hikers and road trippers who value storage space will like it. It lives in a drawer between trips.",
    "specs": [
      "30 can collapsible bag",
      "5 layers, leakproof",
      "Pockets and bottle opener"
    ],
    "pros": [
      "Folds flat to store",
      "Leakproof liner",
      "Pockets and opener included",
      "Low price"
    ],
    "cons": [
      "24 hour cold limit",
      "Not rigid"
    ],
    "bestFor": "Day trips",
    "take": "A packable cooler for casual outings.",
    "catch": "Soft walls crush under heavy loads."
  },
  {
    "id": "best-soft-coolers-4",
    "rank": 4,
    "badge": "Best Budget Collapsible",
    "name": "RealCool 35 Can Collapsible Soft Cooler",
    "price": "$19.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51saJxhs3FL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CWNRYXZJ?tag=rvgearlab-20",
    "description": "RealCool 35 Can is a collapsible leakproof cooler with an insulating PEVA lining and a padded adjustable shoulder strap. An elastic cord on the outside holds a lunch cloth, and the upper compartment is roomy.\n\nIt holds a few more cans than the Maelstrom 30 and costs less. The padded strap makes a full bag more comfortable to carry.\n\nBudget campers and casual hikers will like how much it offers for the price. Folding it down is quick.",
    "specs": [
      "35 can collapsible bag",
      "PEVA insulating lining",
      "Padded shoulder strap"
    ],
    "pros": [
      "Lowest price among full-size bags",
      "Padded shoulder strap",
      "Leakproof lining",
      "Outer elastic cord storage"
    ],
    "cons": [
      "Thin brand details",
      "Limited cold time"
    ],
    "bestFor": "Budget day trips",
    "take": "The cheapest way to carry cold drinks on foot.",
    "catch": "Cold retention is shorter than hard-sided bags."
  },
  {
    "id": "best-soft-coolers-5",
    "rank": 5,
    "badge": "Best Lunch Tote",
    "name": "Lifewit Medium Lunch Bag",
    "price": "$7.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/419MEWckZ7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B56CHMSC?tag=rvgearlab-20",
    "description": "Lifewit Medium Lunch Bag measures 10 by 6.7 by 8 inches and uses thermal insulated material to keep food cool or warm. The exterior is 600D water-resistant, dirt-proof Oxford fabric, and it is leakproof.\n\nIt is the smallest here and fits a lunch and a drink rather than a crowd, which makes it a better fit for a day hike than the larger bags. It is also by far the least expensive.\n\nHikers, anglers and commuters who need a personal lunch bag will like it. It tucks into a daypack.",
    "specs": [
      "10x6.7x8 inch lunch bag",
      "600D Oxford exterior",
      "Thermal insulated"
    ],
    "pros": [
      "Smallest and lightest",
      "Leakproof and water resistant",
      "Keeps food cool or warm",
      "Lowest price"
    ],
    "cons": [
      "Only fits a lunch",
      "Not for groups"
    ],
    "bestFor": "Solo day hikes",
    "take": "A personal lunch bag for day trips.",
    "catch": "Too small for a family."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Compared can counts and dimensions."
  },
  {
    "title": "Insulation layers",
    "description": "Looked at listed layers and cold retention."
  },
  {
    "title": "Leak and water protection",
    "description": "Considered waterproof, leakproof and water-resistant claims."
  },
  {
    "title": "Carrying",
    "description": "Looked at straps, handles and folding."
  },
  {
    "title": "Price",
    "description": "Weighed features against cost."
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
    "subheading": "By Outing",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Kayaking or boating",
          "RTIC 30 Can",
          "Waterproof and floats."
        ],
        [
          "Beach with a group",
          "Maelstrom 75 Can",
          "75 cans."
        ],
        [
          "Day hike, folds away",
          "Maelstrom 30 Can Collapsible",
          "Collapsible bag."
        ],
        [
          "Budget shoulder carry",
          "RealCool 35 Can",
          "Padded strap."
        ],
        [
          "Personal lunch",
          "Lifewit Lunch Bag",
          "Lunch-size tote."
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
          "$0 to $20",
          "Lifewit Lunch Bag or RealCool 35 Can"
        ],
        [
          "$20 to $40",
          "Maelstrom 30 Can Collapsible or Maelstrom 75 Can"
        ],
        [
          "$120 to $130",
          "RTIC 30 Can"
        ]
      ]
    }
  },
  {
    "subheading": "Collapsible vs Structured",
    "cards": [
      {
        "label": "Collapsible",
        "text": "Folds flat but has softer walls. Maelstrom 30 Can Collapsible and RealCool 35 Can are collapsible."
      },
      {
        "label": "Structured",
        "text": "Holds shape and handles rough use. RTIC 30 Can and Maelstrom 75 Can have more body."
      }
    ],
    "note": "Most campers should default to Maelstrom 75 Can unless they need waterproofing."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "If you want",
        "Recommended pick"
      ],
      "rows": [
        [
          "Floating cooler",
          "RTIC 30 Can"
        ],
        [
          "Lowest price full bag",
          "RealCool 35 Can"
        ],
        [
          "Smallest",
          "Lifewit Lunch Bag"
        ]
      ]
    }
  },
  {
    "subheading": "For Paddling Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A waterproof cooler that floats."
      },
      {
        "label": "In this comparison",
        "text": "RTIC 30 Can is listed as waterproof and floating."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on RTIC 30 Can for toughness."
      },
      {
        "label": "Save if",
        "text": "Save with RealCool 35 Can."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Capacity and dimensions",
    "explanation": "Can counts vary from about 4 to 75, and dimensions show if it fits your car. Size it to the number of people and meals. Check the can count and inches."
  },
  {
    "criterion": "Insulation and cold time",
    "explanation": "Multi-layer insulation slows warming, and listed hours are best-case numbers. Packing ice packs extends cold retention. Check the hours stated and pack extra ice."
  },
  {
    "criterion": "Leakproof or waterproof",
    "explanation": "Leakproof liners hold meltwater inside, while waterproof exteriors keep water out. A floating cooler needs a fully waterproof build. Look for which one the listing claims."
  },
  {
    "criterion": "Carry design",
    "explanation": "Padded shoulder straps and reinforced handles matter when the bag is full. Backpack-style bags free your hands. Check strap and handle details."
  },
  {
    "criterion": "Collapsible or rigid",
    "explanation": "Collapsible bags fold flat for storage, while rigid ones keep their shape. Think about storage space at home. Check whether the listing says collapsible."
  }
];

export const faq = [
  {
    "q": "What is a soft cooler best for?",
    "a": "Day trips, beach outings and lunches where weight matters. They are less suited to multi-day ice storage."
  },
  {
    "q": "How long do soft coolers keep ice?",
    "a": "Listed times range from about 12 hours to 2 days depending on the bag. RTIC 30 Can lists up to 2 days. Pack extra ice for the longest cold."
  },
  {
    "q": "Is a waterproof soft cooler worth the cost?",
    "a": "For paddling and boating, yes, since a floating cooler stays reachable. For picnics, a budget bag works. Match it to the water exposure."
  },
  {
    "q": "How do I pack a soft cooler?",
    "a": "Chill the contents first and use ice packs or frozen bottles. Place heavy items at the bottom. Keep the lid closed."
  },
  {
    "q": "How do I clean a soft cooler?",
    "a": "Wipe the liner with mild soap and water, then dry open. Do not machine wash. Store it unzipped."
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
