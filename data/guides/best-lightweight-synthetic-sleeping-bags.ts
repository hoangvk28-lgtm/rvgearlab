export const guideSlug = "best-lightweight-synthetic-sleeping-bags";
export const guideTitle = "3 Best Lightweight Synthetic Sleeping Bags in 2026";
export const metaTitle = "Best Lightweight Synthetic Sleeping Bags in 2026";
export const metaDescription = "Best lightweight synthetic sleeping bags: three bags with printed weights compared on range, packed size and fill, for hikers who skip down.";
export const mainKeyword = "best lightweight synthetic sleeping bags";
export const introParagraphs = [
  "Synthetic bags give up some weight to down, yet they stay warm when damp and cost far less. A lightweight synthetic should print its weight, and only three bags in the search results clearly do while staying under about 3 lb.",
  "Heavier synthetic bags in the results, at 3.9 lb and 4 lb, were left out because they are not light. The three below span a 1.7 lb summer envelope to a 40F mummy with a compression sack."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/sleep-tent-sleeping-bag.webp";
export const heroImageAlt = "Camper sitting inside a tent next to an unrolled sleeping bag";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-lightweight-synthetic-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Kelty Cosmic Synthetic Fill 40 Degree Backpacking Sleeping Bag with Compression Straps",
    "price": "$77.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/319sFnqrvkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082P5VGGT?tag=rvgearlab-amz-20",
    "description": "Kelty gives the Cosmic Synthetic 40 a printed total weight of 2 lb 6 oz and a 24 oz fill of Cirroloft synthetic insulation. It stuffs to 15 by 8 inches uncompressed and includes a compression sack with straps, a spacious footbox and a stash pocket.\n\nIt is the only mummy here, and it is rated to 40F, which beats the ECOOPRO's 55 to 60F range and the MalloMe's 50F floor. Against both envelopes it holds heat better and weighs more than the ECOOPRO.\n\nIt suits hikers who want a real mummy cut with printed numbers. Add a liner for cooler mornings.",
    "specs": [
      "2 lb 6 oz, 24 oz fill",
      "15 by 8 in stuff size",
      "Cirroloft synthetic, 40 degrees"
    ],
    "pros": [
      "Total weight and stuff size printed",
      "Integrated compression stuff sack",
      "Spacious footbox",
      "Stash pocket for small items"
    ],
    "cons": [
      "Rated 40 degrees, not for cold snaps",
      "Needs a compressed roll for small packs"
    ],
    "bestFor": "Printed numbers, three-season hiking",
    "take": "The best pack-planning bag here, with a mummy cut and a 40F rating.",
    "catch": "At 40 degrees it suits summer and shoulder seasons only."
  },
  {
    "id": "best-lightweight-synthetic-sleeping-bags-2",
    "rank": 2,
    "badge": "Lightest Synthetic",
    "name": "ECOOPRO Warm Weather Sleeping Bag",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fu3se401L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B011AZ3O9W?tag=rvgearlab-amz-20",
    "description": "The ECOOPRO envelope measures 83 by 30 inches and weighs 1.7 lb, compressing to 11 inches in height. It uses a waterproof nylon shell and a polyester lining, and the maker states a 55 to 60F range.\n\nIt sets the lowest weight in the group, around 0.7 lb under the Kelty. An envelope shape opens flat and zips easily, and it leaks more heat on cool nights than the Kelty mummy.\n\nIt suits summer hikers and scouts after the lightest synthetic on the list. The carrying sack comes included.",
    "specs": [
      "83 by 30 in, 1.7 lb",
      "Compresses to 11 in height",
      "55 to 60F range"
    ],
    "pros": [
      "Weighs 1.7 lb",
      "Waterproof nylon shell",
      "Breathable polyester lining",
      "Carry sack included"
    ],
    "cons": [
      "Range is only 55 to 60F",
      "Narrow 30 inch width"
    ],
    "bestFor": "Summer hikes and scouts",
    "take": "The lightest synthetic bag, for warm nights only.",
    "catch": "Its 55F-plus range makes it a summer-only bag."
  },
  {
    "id": "best-lightweight-synthetic-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Washable Pick",
    "name": "MalloMe Sleeping Bags for Adults Cold Weather & Warm",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51qQDjjjrwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B077XNG72Y?tag=rvgearlab-amz-20",
    "description": "The MalloMe is rated for 50 to 77F, weighs about 3 lb and suits a 6 ft adult. Its waterproof shell wipes clean, the whole bag is machine washable and the zippers are double-sided and snag-free.\n\nIt is the heaviest of the three and the warmest-weather one, yet it is the simplest to keep clean after a muddy weekend. The same listing works for teens and adults.\n\nIt suits casual hikers and families who value easy care over weight. It costs a little more than the ECOOPRO and well under the Kelty.",
    "specs": [
      "50 to 77F rated",
      "About 3 lb, fits 6 ft",
      "Wipe-clean waterproof shell"
    ],
    "pros": [
      "Fits adults up to 6 feet",
      "Wipe-clean outer shell",
      "Machine washable",
      "Weight and range both stated"
    ],
    "cons": [
      "Warm-weather rating only",
      "Fill is not named"
    ],
    "bestFor": "Easy-care family hikes",
    "take": "A forgiving, easy-clean bag for warm nights.",
    "catch": "At about 3 lb it is heavy for a hiker."
  }
];

export const howWeEvaluated = [
  {
    "title": "Printed weight",
    "description": "We kept only bags that print a weight, and left out ones near 4 lb."
  },
  {
    "title": "Temperature range",
    "description": "We read the stated range on each page and noted warm-weather limits."
  },
  {
    "title": "Packed size",
    "description": "We noted stuff sizes where the listing gives them."
  },
  {
    "title": "Shell and care",
    "description": "We compared shell fabrics and washing instructions."
  },
  {
    "title": "Price fit",
    "description": "We weighed cost against weight and range."
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
    "subheading": "By Lowest Night Temperature",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Nights near 40F",
          "Kelty Cosmic Synthetic 40",
          "40 degree rating, mummy cut"
        ],
        [
          "Nights above 55F, lowest weight",
          "ECOOPRO Warm Weather",
          "1.7 lb, 55 to 60F range"
        ],
        [
          "Warm nights, easy cleaning",
          "MalloMe Year Round",
          "Machine washable, 50 to 77F"
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
          "ECOOPRO Warm Weather"
        ],
        [
          "$20 to $30",
          "MalloMe Year Round"
        ],
        [
          "$70 to $80",
          "Kelty Cosmic Synthetic 40"
        ]
      ]
    }
  },
  {
    "subheading": "Mummy vs Envelope",
    "cards": [
      {
        "label": "Mummy",
        "text": "The Kelty Cosmic Synthetic 40 tapers to hold heat and packs with a compression sack. It weighs 2 lb 6 oz."
      },
      {
        "label": "Envelope",
        "text": "The ECOOPRO Warm Weather and MalloMe Year Round are envelope bags with warm ranges. They open flat and are simpler, though cooler on cold nights."
      }
    ],
    "note": "Choose the Kelty Cosmic Synthetic 40 if nights drop near 40F, and the ECOOPRO Warm Weather if you only camp in summer."
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
          "ECOOPRO Warm Weather"
        ],
        [
          "Mid price easy care",
          "MalloMe Year Round"
        ],
        [
          "Higher price with printed numbers",
          "Kelty Cosmic Synthetic 40"
        ]
      ]
    }
  },
  {
    "subheading": "Weight-Watching Hikers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a printed weight under 3 lb and a compressed size."
      },
      {
        "label": "In this comparison",
        "text": "The ECOOPRO Warm Weather prints 1.7 lb and 11 inches compressed, and the Kelty Cosmic Synthetic 40 prints 2 lb 6 oz with a 15 by 8 inch stuff size."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Kelty Cosmic Synthetic 40 if you hike into cooler nights and want a mummy with printed numbers."
      },
      {
        "label": "Save if",
        "text": "Save with the ECOOPRO Warm Weather if your trips stay warm and you want the lightest synthetic."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Weight versus warmth",
    "explanation": "A synthetic bag trades about a pound for the same warmth as down. The Kelty at 2 lb 6 oz covers 40F, while the ECOOPRO at 1.7 lb covers 55F and up. Decide whether the extra pound buys a margin on cold nights you need."
  },
  {
    "criterion": "Stated range",
    "explanation": "Warm-weather bags print ranges starting around 50F or 55F. Mummies like the Kelty reach 40F. Read the range on the listing, since the product title may promise more."
  },
  {
    "criterion": "Mummy or envelope",
    "explanation": "A mummy wastes less air, which is why the Kelty holds heat better. An envelope is simpler and roomier. Pick by your coldest night."
  },
  {
    "criterion": "Packed size",
    "explanation": "A bag that compresses small fits a lighter pack. The ECOOPRO compresses to 11 inches in height and the Kelty stuffs to 15 by 8 inches. Check the stuff size against your pack."
  },
  {
    "criterion": "Washing and care",
    "explanation": "Synthetic bags handle machine washing better than down. The MalloMe lists machine washable construction. Use a front-loading machine and dry low."
  },
  {
    "criterion": "Liner option",
    "explanation": "A thin liner adds a few degrees and keeps the bag clean. It adds a little weight. Think of it as a cheaper alternative to a warmer bag."
  }
];

export const faq = [
  {
    "q": "Is synthetic fill good for lightweight hiking?",
    "a": "Yes for wet climates and tight budgets. The Kelty weighs 2 lb 6 oz and the ECOOPRO weighs 1.7 lb."
  },
  {
    "q": "What is the common mistake with lightweight synthetics?",
    "a": "Assuming light means warm. The lightest bag here covers only 55F and up."
  },
  {
    "q": "Is the Kelty worth it over the ECOOPRO?",
    "a": "If you camp near 40F, yes, because it is a mummy with a stated rating. For summer only, the ECOOPRO weighs less and costs less."
  },
  {
    "q": "How do I pack a synthetic bag?",
    "a": "Stuff it into the compression sack from the foot end and tighten the straps. Do not leave it compressed at home."
  },
  {
    "q": "How should I wash it?",
    "a": "Use a front-loading machine on a gentle cycle with mild detergent and dry on low. Check the care label first."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Sleeping Bags",
    "href": "/sleep-gear/best-backpacking-sleeping-bags"
  },
  {
    "title": "Best Camping Sleeping Bags",
    "href": "/sleep-gear/best-camping-sleeping-bags"
  },
  {
    "title": "Best Backpacking Pillows For Side Sleepers",
    "href": "/sleep-gear/best-backpacking-pillows-for-side-sleepers"
  },
  {
    "title": "Best Backpacking Pillow For Stomach Sleepers",
    "href": "/sleep-gear/best-backpacking-pillow-for-stomach-sleepers"
  }
];
