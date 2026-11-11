export const guideSlug = "best-gravity-water-filters-for-backpacking";
export const guideTitle = "5 Best Gravity Water Filters For Backpacking in 2026";
export const metaTitle = "Best Gravity Water Filters For Backpacking";
export const metaDescription = "Best gravity water filters for backpacking compared on reservoir size, flow, lifespan and test standards for base camps, groups and solo hikers.";
export const mainKeyword = "best gravity water filters for backpacking";
export const introParagraphs = [
  "A gravity filter hangs from a branch, lets water fall through a hollow fiber cartridge and fills your bottles while you set up camp. It trades weight for effortless output, which is why it suits groups and base camps more than ultralight solo trips.",
  "Five systems are compared here, from a 1 gallon solo set to a 10 liter group system. None of the listings states virus removal, so these are bacteria and protozoa filters for typical backcountry water."
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
    "id": "best-gravity-water-filters-for-backpacking-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Platypus GravityWorks Group Camping Water Filter System",
    "price": "$154.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31-zos+CmNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CV9ZRYCM?tag=rvgearlab-amz-20",
    "description": "The Platypus GravityWorks is a 6 liter gravity system with a 6 liter dirty reservoir, a 6 liter clean reservoir, a hollow fiber microfilter, hoses, a shutoff clamp and a storage sack. The listing says it meets EPA and NSF guidelines, with protozoa removal at 99.9 percent and bacteria at 99.9999 percent, and delivers six liters in under four minutes.\n\nIt names a test standard and a clear fill time that the Membrane Solutions 1 Gal and MultiSavePuls 3L do not. The storage sack uses a PFAS-free DWR coating.\n\nIt suits family and group camping where the whole party drinks and cooks from the same supply. The clean reservoir keeps filtered water ready to pour.",
    "specs": [
      "6 L dirty and 6 L clean bags",
      "Six liters in under 4 minutes",
      "EPA and NSF guidelines listed"
    ],
    "pros": [
      "Names EPA and NSF test guidelines",
      "Six liters in under four minutes",
      "Dirty and clean 6 L reservoirs",
      "Hoses and clamp included"
    ],
    "cons": [
      "Highest price of the five",
      "Bulky for solo hikers"
    ],
    "bestFor": "Family and group camps",
    "take": "The best-documented group gravity system, with a quick fill time.",
    "catch": "At the top price and with two 6 L bags, it is more than a solo hiker needs."
  },
  {
    "id": "best-gravity-water-filters-for-backpacking-2",
    "rank": 2,
    "badge": "Best for Large Groups",
    "name": "MSR AutoFlow XL 10-Liter Group Backpacking and Camping Gravity Water Filter",
    "price": "$139.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31h1ukAa0BL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQRWJZX5?tag=rvgearlab-amz-20",
    "description": "The MSR AutoFlow XL is a 10 liter gravity system for large backpacking and base camp parties. The maker lists 1.75 liters per minute without pumping, with protozoa and particulates filtered out at 99.9 percent and bacteria at 99.9999 percent, and a sediment trap built into the bag.\n\nIt holds more than three times the volume of the Katadyn BeFree Gravity, at a similar flow rate. Against the Platypus GravityWorks it has the bigger reservoir and a flat-base bag.\n\nIt suits groups of four or more who share a base camp. A separate hang strap and clip make hanging easier.",
    "specs": [
      "10 liter gravity system",
      "1.75 L per minute flow",
      "Sediment trap, flat-base bag"
    ],
    "pros": [
      "Large 10 liter reservoir",
      "Fast flow with no pumping",
      "Sediment trap in the bag",
      "PFAS-free DWR storage bag"
    ],
    "cons": [
      "Second-highest price",
      "Bulky for solo trips"
    ],
    "bestFor": "Groups of four or more",
    "take": "The biggest reservoir here, built for large base camps.",
    "catch": "A 10 liter system is overkill for one or two people."
  },
  {
    "id": "best-gravity-water-filters-for-backpacking-3",
    "rank": 3,
    "badge": "Best Lightweight System",
    "name": "Katadyn BeFree Gravity Water Filter 3L for Camping",
    "price": "$79.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31RygeapsYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07H3X962R?tag=rvgearlab-amz-20",
    "description": "The Katadyn BeFree Gravity pairs a 0.1 micron EZ-Clean hollow fiber filter with a 3 liter collapsible bag. The listing gives up to 2 liters per minute, up to 1,000 liters of capacity, and cleaning by shaking or swishing.\n\nIt packs flat and weighs far less than the MSR AutoFlow XL or the Platypus GravityWorks, which makes it the choice for two or three people. The routine is simple: fill, hang and drink.\n\nIt suits duos and trios who want gravity filtering without a large kit. It folds flat once emptied.",
    "specs": [
      "3 L bag, 0.1 micron",
      "Up to 2 L per minute",
      "Up to 1,000 L capacity"
    ],
    "pros": [
      "Packs flat when empty",
      "Fast flow up to 2 liters per minute",
      "Cleans by shaking, no tools",
      "Fill, hang and drink"
    ],
    "cons": [
      "3 liters limits a larger group",
      "No virus removal stated"
    ],
    "bestFor": "Two to three people",
    "take": "A packable gravity set for small parties.",
    "catch": "Three liters means a second fill when four people share."
  },
  {
    "id": "best-gravity-water-filters-for-backpacking-4",
    "rank": 4,
    "badge": "Best Solo System",
    "name": "Membrane Solutions 1 Gal Gravity Water Filter",
    "price": "$32.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Dke1WZd2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CN6L5KLT?tag=rvgearlab-amz-20",
    "description": "The Membrane Solutions 1 Gallon (3.8 liter) gravity system lists NSF/ANSI 42, 372 and 401, and a four-stage filter that stacks 0.1 micron hollow fibers, activated carbon and two PP fiber layers. The listing gives a flow of up to 500 ml per minute and a filter life of up to 1,320 gallons (5,000 L).\n\nIt backflushes through a standard water bottle with no syringe and can be used as a gravity filter, a straw or a bottle-compatible filter. It lists a longer life than the Katadyn BeFree Gravity.\n\nIt suits solo hikers and pairs who want a standards-listed gravity set that doubles as a straw. The multiple modes make it a flexible kit piece.",
    "specs": [
      "1 gallon (3.8 L) bag",
      "NSF/ANSI 42, 372, 401 listed",
      "Up to 500 ml per minute"
    ],
    "pros": [
      "Names NSF/ANSI 42, 372 and 401",
      "1,320 gallon filter life",
      "Backflushes with no syringe",
      "Works as gravity, straw or bottle filter"
    ],
    "cons": [
      "Slower flow than the BeFree Gravity",
      "Small 3.8 liter reservoir"
    ],
    "bestFor": "Solo hikers and pairs",
    "take": "A standards-listed solo gravity set with a long filter life.",
    "catch": "At 500 ml per minute it is slow, so hang it while you set up camp."
  },
  {
    "id": "best-gravity-water-filters-for-backpacking-5",
    "rank": 5,
    "badge": "Best Budget Pick",
    "name": "Gravity Water Filter Straw 3L",
    "price": "$20.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iqcbKxsxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FD7D186Q?tag=rvgearlab-amz-20",
    "description": "The MultiSavePuls is a 3 liter gravity bag with a built-in 0.1 micron hollow fiber filter listed as removing microplastics, sand and sediment along with 99.9999 percent of harmful substances. It states FDA, food-grade and BPA-free materials and includes a sediment collector at the bottom.\n\nIt holds the same 3 liters as the Katadyn BeFree Gravity and costs far less. The sediment collector helps with silty sources.\n\nIt suits anyone after a no-frills gravity bag for cooking and hydration water. The built-in filter needs no assembly.",
    "specs": [
      "3 L bag, 0.1 micron",
      "Hollow fiber filter",
      "Sediment collector at base"
    ],
    "pros": [
      "Lowest price of the five",
      "3 liter bag per fill",
      "Sediment collector for silty water",
      "Food-grade, BPA-free materials"
    ],
    "cons": [
      "No flow rate or lifespan listed",
      "Needs settling time before filtering"
    ],
    "bestFor": "Budget gravity filtering",
    "take": "The cheapest 3 liter gravity set, with a sediment collector.",
    "catch": "The listing prints neither a flow rate nor a lifespan, so it is hard to compare."
  }
];

export const howWeEvaluated = [
  {
    "title": "Reservoir size",
    "description": "We matched bag volume to party size, from solo to a group of six or more."
  },
  {
    "title": "Flow and fill time",
    "description": "We compared printed flow rates and fill times."
  },
  {
    "title": "Test standards",
    "description": "We checked which listings name EPA, NSF or NSF/ANSI standards."
  },
  {
    "title": "Filter life",
    "description": "We lined up the stated filter life in liters or gallons."
  },
  {
    "title": "Weight and packing",
    "description": "We noted which sets pack flat and which add bulk."
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
    "subheading": "By Party Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Solo hiker or pair",
          "Membrane Solutions 1 Gal",
          "3.8 liters with NSF/ANSI standards listed."
        ],
        [
          "Two or three people",
          "Katadyn BeFree Gravity",
          "Packs flat, up to 2 L per minute."
        ],
        [
          "Family of four to six",
          "Platypus GravityWorks 6L",
          "Six liters in under four minutes."
        ],
        [
          "Groups of four or more",
          "MSR AutoFlow XL",
          "10 liter reservoir."
        ],
        [
          "Budget",
          "MultiSavePuls 3L",
          "Cheapest 3 liter set."
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
          "$20 to $40",
          "MultiSavePuls 3L or Membrane Solutions 1 Gal"
        ],
        [
          "$70 to $140",
          "Katadyn BeFree Gravity or MSR AutoFlow XL"
        ],
        [
          "$150 to $160",
          "Platypus GravityWorks 6L"
        ]
      ]
    }
  },
  {
    "subheading": "Big Reservoir vs Packable Bag",
    "cards": [
      {
        "label": "Big reservoir",
        "text": "The Platypus GravityWorks 6L and MSR AutoFlow XL fill many bottles at once, at higher weight and cost."
      },
      {
        "label": "Packable bag",
        "text": "The Katadyn BeFree Gravity, Membrane Solutions 1 Gal and MultiSavePuls 3L pack small for solo and duo trips."
      }
    ],
    "note": "Choose the Platypus GravityWorks 6L for families and the Katadyn BeFree Gravity for small parties."
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
          "Lowest cost",
          "MultiSavePuls 3L"
        ],
        [
          "Mid cost, standards listed",
          "Membrane Solutions 1 Gal"
        ],
        [
          "Mid-to-high, packable",
          "Katadyn BeFree Gravity"
        ],
        [
          "High, big groups",
          "MSR AutoFlow XL"
        ],
        [
          "Highest, documented",
          "Platypus GravityWorks 6L"
        ]
      ]
    }
  },
  {
    "subheading": "For Base Camp Cooking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A reservoir of 3 liters or more, a sediment trap or collector and a stated flow."
      },
      {
        "label": "In this comparison",
        "text": "The MSR AutoFlow XL lists a sediment trap and 1.75 L per minute, and the Platypus GravityWorks 6L lists six liters in under four minutes."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Platypus GravityWorks 6L for documentation and speed with a family, or the MSR AutoFlow XL for a very large group."
      },
      {
        "label": "Save if",
        "text": "Save with the MultiSavePuls 3L or Membrane Solutions 1 Gal if you are solo or camping with one other person."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Party size",
    "explanation": "Gravity systems come in 1 gallon to 10 liter sizes, and the right one depends on how many people drink and cook from it. A 3 liter bag fills a couple's bottles, while a family needs 6 liters. Count your daily water and size the reservoir to it."
  },
  {
    "criterion": "Flow and fill time",
    "explanation": "Printed flow rates range from 500 ml per minute to 2 liters per minute, which changes camp chores. A slower filter is fine if you hang it while setting up. Check the flow rate and the fill time on the listing."
  },
  {
    "criterion": "Test standards",
    "explanation": "A listing that names EPA, NSF or NSF/ANSI standards is easier to check than one with only a percentage. The Platypus GravityWorks 6L names EPA and NSF guidelines, and the Membrane Solutions 1 Gal names three NSF/ANSI standards. Look for them."
  },
  {
    "criterion": "Silt and pre-filtering",
    "explanation": "Silty water clogs gravity filters, so settle it or use a sediment trap. The MSR AutoFlow XL has one in the bag, and the MultiSavePuls has a collector. Let water stand before filling."
  },
  {
    "criterion": "Hanging and backflushing",
    "explanation": "A gravity system needs a branch or hook, and a way to clean the cartridge. Shake, backflush or swish as the listing describes. Look for the cleaning method and a hang strap."
  }
];

export const faq = [
  {
    "q": "Do I need a gravity filter or a squeeze filter?",
    "a": "For groups and cooking, gravity is easier since it fills while you work. For solo hiking a squeeze filter is lighter. It depends on party size."
  },
  {
    "q": "What do I hang it from?",
    "a": "A branch, tree strap or hook. The MSR AutoFlow XL includes a hang strap and clip. Bring a short cord just in case."
  },
  {
    "q": "How do I clean a gravity filter?",
    "a": "Shake or backflush as the listing describes. The Membrane Solutions 1 Gal backflushes through a bottle with no syringe. Do this after silty water."
  },
  {
    "q": "Can I use it with a bladder?",
    "a": "Some systems connect to a clean reservoir or bottle. The Platypus GravityWorks 6L has a clean bag. Check the connection before the trip."
  },
  {
    "q": "Do they remove viruses?",
    "a": "None of the listings states virus removal. Use tablets or a purifier abroad. Treat these as bacteria and protozoa filters."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Affordable Backpacking Water Filters",
    "href": "/packs-hiking/best-affordable-backpacking-water-filters"
  },
  {
    "title": "Best Backpacking Water Filters For Viruses",
    "href": "/packs-hiking/best-backpacking-water-filters-for-viruses"
  },
  {
    "title": "Best Backpacking Water Filters",
    "href": "/packs-hiking/best-backpacking-water-filters"
  }
];
