export const guideSlug = "best-portable-gravity-water-filters";
export const guideTitle = "2 Best Portable Gravity Water Filters in 2026";
export const metaTitle = "Best Portable Gravity Water Filters in 2026";
export const metaDescription = "Two portable gravity water filters at opposite ends of the size range: the 10 liter MSR AutoFlow XL for groups and a Waterdrop straw-and-bag set for pairs.";
export const mainKeyword = "best portable gravity water filters";
export const introParagraphs = [
  "Portable gravity filters trade time for effort: you hang a bag, wait and collect clean water with no pumping. The two that stand out on Amazon are a 10 liter group system and a small straw-and-bag set.",
  "Countertop stainless systems in the same search are home units, so they are left out. What remains is a short list, with a clear split between hauling water for a group and filtering for a pair."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/furniture-chairs-by-tent.webp";
export const heroImageAlt = "Two folding camping chairs beside a tent in a redwood forest";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-portable-gravity-water-filters-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "MSR AutoFlow XL 10-Liter Group Backpacking and Camping Gravity Water Filter",
    "price": "$139.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31h1ukAa0BL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQRWJZX5?tag=rvgearlab-20",
    "description": "MSR built the AutoFlow XL around a 10 liter bag, aimed at big backpacking parties and basecamps. The listing says it flows at 1.75 liters per minute with no pumping and removes bacteria at 99.9999% and protozoa at 99.9%, along with dirt.\n\nIt holds far more than the Waterdrop set, and a film reservoir with a sediment trap keeps grit out of the filter. A hang strap and bag clip make it easy to hang, and the storage bag has a PFAS-free water-repellent finish.\n\nBest for groups of four or more that share a basecamp. One person can fill it while the rest set up.",
    "specs": [
      "10 liter gravity reservoir",
      "1.75 L per minute flow",
      "Sediment trap, flat-base bag"
    ],
    "pros": [
      "Large 10 liter reservoir",
      "Quick flow with no pumping",
      "Sediment trap in the bag",
      "PFAS-free water-repellent bag"
    ],
    "cons": [
      "Highest price of the two",
      "Bulky for solo trips"
    ],
    "bestFor": "Group basecamps",
    "take": "A 10 liter reservoir with a 1.75 L/min flow and a sediment trap.",
    "catch": "It is a big system and priciest here, so it suits groups more than solo hikers."
  },
  {
    "id": "best-portable-gravity-water-filters-2",
    "rank": 2,
    "badge": "Best Small Set",
    "name": "Waterdrop Gravity Water Filter Straw",
    "price": "$53.70",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VY51vsm7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09285L8JL?tag=rvgearlab-20",
    "description": "Waterdrop sells a filter straw together with a 1.5 gallon gravity bag, built around a 0.1 micron ultrafiltration membrane. The listing gives a life of up to 1,400 gallons, a flow of up to 700 ml per minute and a backwash function that restores flow.\n\nIt costs a small fraction of the MSR AutoFlow XL and fits in a pack pocket, while the straw can also connect to bottles. The bag holds a fraction of the MSR's reservoir, so it serves one or two people.\n\nA fit for solo hikers and pairs who want a hang-and-wait filter on a budget. At camp the bag stands in for a gravity setup, and on the trail the straw works alone.",
    "specs": [
      "1.5 gallon gravity bag",
      "0.1 micron ultrafiltration",
      "Backwash straw"
    ],
    "pros": [
      "Bag and straw in one set",
      "Listed life up to 1,400 gallons",
      "Backwash restores flow",
      "Straw also connects to bottles"
    ],
    "cons": [
      "Small bag for groups",
      "Flow up to 700 ml per minute"
    ],
    "bestFor": "Solo hikers and pairs",
    "take": "A low-cost straw and 1.5 gallon bag set that fits in a pocket.",
    "catch": "The bag holds far less than 10 liters, and flow tops out at 700 ml per minute."
  }
];

export const howWeEvaluated = [
  {
    "title": "Reservoir size",
    "description": "Each system's capacity per fill was compared, from 1.5 gallons to 10 liters."
  },
  {
    "title": "Flow",
    "description": "Printed flow rates were compared."
  },
  {
    "title": "Filter claims",
    "description": "Pore size and bacteria and protozoa claims were noted."
  },
  {
    "title": "Portability",
    "description": "Bag design, hanging hardware and storage were compared."
  },
  {
    "title": "Honest scope",
    "description": "Home countertop systems were excluded, leaving two clear options."
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
    "subheading": "By Group Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Four or more at a basecamp",
          "MSR AutoFlow XL",
          "10 liters at 1.75 L/min"
        ],
        [
          "Solo or pair on a budget",
          "Waterdrop Gravity Straw",
          "1.5 gallon bag, low price"
        ],
        [
          "Filter straw for the trail",
          "Waterdrop Gravity Straw",
          "Straw works alone"
        ],
        [
          "Fast bulk filtering",
          "MSR AutoFlow XL",
          "Sediment trap and strap"
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
          "$50 to $60",
          "Waterdrop Gravity Straw"
        ],
        [
          "$130 to $140",
          "MSR AutoFlow XL"
        ]
      ]
    }
  },
  {
    "subheading": "Big Reservoir vs Small Set",
    "cards": [
      {
        "label": "Big reservoir",
        "text": "The MSR AutoFlow XL filters 10 liters at once for groups."
      },
      {
        "label": "Small set",
        "text": "The Waterdrop Gravity Straw is pocket-sized and cheap for one or two."
      }
    ],
    "note": "Choose the MSR AutoFlow XL for groups and the Waterdrop Gravity Straw for solo trips."
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
          "Lower cost",
          "Waterdrop Gravity Straw"
        ],
        [
          "Higher cost, group size",
          "MSR AutoFlow XL"
        ]
      ]
    }
  },
  {
    "subheading": "Portable Gravity Shoppers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A reservoir that matches your group, a printed flow rate and a clog-clearing method."
      },
      {
        "label": "In this comparison",
        "text": "The MSR AutoFlow XL lists 10 liters and 1.75 L/min, and the Waterdrop Gravity Straw lists 1.5 gallons and 700 ml/min."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the MSR AutoFlow XL if you filter for a group."
      },
      {
        "label": "Save if",
        "text": "Save with the Waterdrop Gravity Straw for one or two people."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Group size and capacity",
    "explanation": "A 10 liter bag fills quickly for a group, while a 1.5 gallon bag serves one or two people. Fewer, bigger fills save time. Match the reservoir to the number of drinkers."
  },
  {
    "criterion": "Flow rate",
    "explanation": "1.75 L/min means 10 liters in under six minutes, while 700 ml/min takes about fourteen. Flow drops as the filter clogs. Check the printed rates and plan to backflush."
  },
  {
    "criterion": "Pore size and claims",
    "explanation": "A 0.1 micron membrane targets bacteria and protozoa, not viruses. The MSR AutoFlow XL lists bacteria and protozoa numbers. Neither listing claims viruses, so treat if needed."
  },
  {
    "criterion": "Hanging hardware",
    "explanation": "Gravity needs height, so a strap or hook matters. A strap that cannot reach a branch leaves the bag on a rock. Look for hanging hardware by name."
  },
  {
    "criterion": "Backflush and care",
    "explanation": "Fine membranes clog, and backflushing restores flow. A straw that connects to a bottle makes that easy. Look for backwash instructions."
  }
];

export const faq = [
  {
    "q": "Are gravity filters portable enough for backpacking?",
    "a": "The Waterdrop Gravity Straw is. The MSR AutoFlow XL is better for basecamps. Choose by group size."
  },
  {
    "q": "What mistake do campers make with gravity filters?",
    "a": "They hang the bag too low and wait too long. Hang it high. Backflush when flow slows."
  },
  {
    "q": "Is the MSR worth the price over Waterdrop?",
    "a": "For groups, yes. The MSR AutoFlow XL filters 10 liters at 1.75 L/min. For one or two people, the Waterdrop Gravity Straw is enough."
  },
  {
    "q": "Do these remove viruses?",
    "a": "The listings do not claim virus removal. Treat for viruses if your source needs it."
  },
  {
    "q": "How do I store them?",
    "a": "Dry the bag and filter and keep them out of freezing temperatures when wet. Store loose. Backflush before storage."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Gravity Water Filters For Backpacking",
    "href": "/packs-hiking/best-gravity-water-filters-for-backpacking"
  },
  {
    "title": "Best Gravity Water Filters For Hiking",
    "href": "/packs-hiking/best-gravity-water-filters-for-hiking"
  },
  {
    "title": "Best 10l Gravity Water Filters",
    "href": "/packs-hiking/best-10l-gravity-water-filters"
  }
];
