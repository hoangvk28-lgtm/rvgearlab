export const guideSlug = "best-backpacking-sleeping-bags-under-200";
export const guideTitle = "2 Best Backpacking Sleeping Bags Under 200 in 2026";
export const metaTitle = "Best Backpacking Sleeping Bags Under 200 in 2026";
export const metaDescription = "Best backpacking sleeping bags under $200: two mild-weather picks compared on stated range, weight and shell, with what a $200 ceiling really buys here.";
export const mainKeyword = "best backpacking sleeping bags under 200";
export const introParagraphs = [
  "A $200 ceiling is generous for a backpacking bag, yet very few listings that match this need turn up on Amazon at the top of that budget. Only two bags qualify as genuine fits here, and both land far below the cap, so you can spend the leftover on a pad or a liner.",
  "Both are three-season bags rated for mild nights, not winter. Treat this page as a short list for spring-to-fall hiking, and read the temperature figures before you assume anything colder."
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
    "id": "best-backpacking-sleeping-bags-under-200-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Naturehike Lightweight Compact Sleeping Bag",
    "price": "$36.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41pfBY+ln-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B071XXR2Y8?tag=rvgearlab-20",
    "description": "The Naturehike envelope bag weighs 1.68 lb and packs into a compression sack. It measures 80.7 by 33.5 inches and uses an 80 gram per square meter synthetic silk-cotton fill, with listed ratings of 59F and 32F.\n\nOf the two, it is lighter and wider, which is why it takes the top spot for most hikers. The rectangular cut gives a restless sleeper room to roll that a mummy does not.\n\nIt suits warm-season hikers and bikepackers who want to carry under two pounds. A compression sack is included for packing.",
    "specs": [
      "1.68 lb, compressible",
      "80.7 by 33.5 inch envelope",
      "Listed 59F and 32F ratings"
    ],
    "pros": [
      "Under two pounds in weight",
      "Roomy cut for restless sleepers",
      "Compression sack for packing",
      "Lists a figure down to 32F"
    ],
    "cons": [
      "Envelope shape sheds heat in cold",
      "No named rating standard"
    ],
    "bestFor": "Warm-season hikers",
    "take": "The light, roomy pick for warm to cool nights.",
    "catch": "Treat 59F as the comfortable end and bring layers below about 45F."
  },
  {
    "id": "best-backpacking-sleeping-bags-under-200-2",
    "rank": 2,
    "badge": "Best Rugged Mummy",
    "name": "OneTigris Bushcrafter’s Sleeping Bags",
    "price": "$59.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YJtb5N+IL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CKVXNBCQ?tag=rvgearlab-20",
    "description": "The OneTigris Bushcrafter's is a mummy for spring, summer and fall nights, with a range of about 46 to 59F. It uses a 300T pongee shell, a 190T lining, 7 oz of polycotton fill, YKK anti-snag zippers and a cord-stopped hood.\n\nNext to the Naturehike Envelope it trades weight for a sturdier shell and a tapered cut that keeps heat closer to the body. The zippers and hood are better finished than most listings at this price.\n\nIt suits campers who want a rugged bag for bushcraft and shoulder-season trips. The water-repellent shell handles damp ground.",
    "specs": [
      "Mummy, 46F to 59F rated",
      "300T shell, YKK zippers",
      "Cord-stopped hood"
    ],
    "pros": [
      "Sturdy 300T shell",
      "Anti-snag YKK zippers",
      "Cord-stopped hood seals in heat",
      "Water-repellent shell"
    ],
    "cons": [
      "Rated for mild nights only",
      "Polycotton fill is heavier than synthetic"
    ],
    "bestFor": "Bushcraft and shoulder seasons",
    "take": "A tough mummy for hikers who are rough on gear.",
    "catch": "Its range means it is not a winter bag."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated range",
    "description": "We compared the temperature figures on each page and marked which are comfort numbers."
  },
  {
    "title": "Carry weight",
    "description": "We looked at listed weights and fill types, since backpackers feel every pound."
  },
  {
    "title": "Build quality",
    "description": "We compared shell denier, zipper brand and hood details."
  },
  {
    "title": "Fit",
    "description": "We compared length, width and cut for different body types."
  },
  {
    "title": "Budget fit",
    "description": "We weighed what each bag offers against the $200 ceiling."
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
    "subheading": "By Season",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Summer and warm shoulder nights",
          "Naturehike Envelope",
          "1.68 lb with a 59F listed figure"
        ],
        [
          "Spring and fall nights near 46F",
          "OneTigris Bushcrafter",
          "46 to 59F mummy with a 300T shell"
        ],
        [
          "Restless sleeper wanting space",
          "Naturehike Envelope",
          "80.7 by 33.5 inch rectangular cut"
        ],
        [
          "Rough use around a campfire",
          "OneTigris Bushcrafter",
          "Water-repellent 300T shell and YKK zippers"
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
          "$30 to $40",
          "Naturehike Envelope"
        ],
        [
          "$50 to $60",
          "OneTigris Bushcrafter"
        ]
      ]
    }
  },
  {
    "subheading": "Envelope vs Mummy",
    "cards": [
      {
        "label": "Envelope",
        "text": "The Naturehike Envelope gives room and weighs 1.68 lb. It leaks heat from the shoulders on cold nights."
      },
      {
        "label": "Mummy",
        "text": "The OneTigris Bushcrafter tapers to hold heat and has a hood that cinches. It carries more weight because of its polycotton fill."
      }
    ],
    "note": "Choose the Naturehike Envelope for light, warm-season hikes, and the OneTigris Bushcrafter for cooler nights."
  },
  {
    "subheading": "By Budget Left Over",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Spend the least, keep most for a pad",
          "Naturehike Envelope"
        ],
        [
          "Spend a little more for durability",
          "OneTigris Bushcrafter"
        ]
      ]
    }
  },
  {
    "subheading": "Spring and Fall Hiking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a stated figure at or below 45F, a hood and a sturdy zipper."
      },
      {
        "label": "In this comparison",
        "text": "The OneTigris Bushcrafter lists 46 to 59F with a cord-stopped hood and YKK zippers, while the Naturehike Envelope lists 32F as a limit-style number."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the OneTigris Bushcrafter if your trips run into cool autumn nights and you want a hood and a tougher shell."
      },
      {
        "label": "Save if",
        "text": "Save with the Naturehike Envelope if you hike in warm weather and want to keep your pack under two pounds for the bag."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What $200 really buys",
    "explanation": "For the same money you can find mid-tier synthetic or entry-level down bags in specialty stores. Amazon listings tend to cluster far below $100, so a $200 ceiling mostly lets you pick on build and rating rather than price. Check whether the extra budget is better spent on a pad."
  },
  {
    "criterion": "Read the temperature numbers",
    "explanation": "A bag labeled 3-season may list a comfort figure above 45F. The Naturehike Envelope lists 59F and 32F, which usually mean comfort and limit. Read both numbers and decide which night you are shopping for."
  },
  {
    "criterion": "Fill type and weight",
    "explanation": "Polycotton fill, as in the OneTigris Bushcrafter, is cheaper and tougher but heavier than synthetic fill. Weight on the Naturehike Envelope is listed at 1.68 lb, while the OneTigris listing prints no weight. Look for a printed weight before you commit."
  },
  {
    "criterion": "Shape and heat",
    "explanation": "Mummy bags use less fabric around the body and hold heat better. Envelope bags give room but let heat escape at the shoulders. Pick shape by the coldest night you plan to see."
  },
  {
    "criterion": "Zipper and hood quality",
    "explanation": "A snagging zipper ruins a cold night. YKK zippers and a cord-stopped hood, as on the OneTigris Bushcrafter, are signs of finish work. Check the listing for zipper brand and hood description."
  },
  {
    "criterion": "Pad pairing",
    "explanation": "Sleeping bag insulation compresses under your body, so the pad does most of the work from below. A pad with a stated R-value adds more warmth than a pricier bag. Leave some budget for it."
  }
];

export const faq = [
  {
    "q": "Is a $200 backpacking bag a good idea?",
    "a": "A $200 budget can buy better bags than these two, but the listings found here are modest. These two fit warm-weather and shoulder-season trips and leave money for a pad."
  },
  {
    "q": "What is a common mistake with mild-weather bags?",
    "a": "Assuming the 32F figure is comfortable. The Naturehike Envelope lists 59F and 32F, so treat 59F as the comfortable end and add layers lower."
  },
  {
    "q": "Is the OneTigris Bushcrafter worth it over the Naturehike Envelope?",
    "a": "If you want a mummy cut, YKK zippers and a rugged shell, yes. The Naturehike Envelope is lighter and roomier, and it costs less."
  },
  {
    "q": "How should I pack either bag?",
    "a": "Use the included sack and stuff the bag in without folding. Keep it in a dry bag in the pack's lower section."
  },
  {
    "q": "How do I extend either bag's range?",
    "a": "Add a liner, sleep in base layers and use a pad with a stated R-value. These steps add a few degrees but do not turn a mild bag into a winter one."
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
