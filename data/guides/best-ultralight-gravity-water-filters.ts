export const guideSlug = "best-ultralight-gravity-water-filters";
export const guideTitle = "4 Best Ultralight Gravity Water Filters in 2026";
export const metaTitle = "Best Ultralight Gravity Water Filters in 2026";
export const metaDescription = "Four ultralight gravity water filters, led by the Platypus QuickDraw 3L with a P231 protocol claim and a 0.8 lb miniwell kit for gram counters.";
export const mainKeyword = "best ultralight gravity water filters";
export const introParagraphs = [
  "Ultralight gravity filters are really small hollow-fiber filters paired with a thin bag or a bottle you already carry. The hard questions are flow rate, what the filter claims to remove and how much the whole kit weighs.",
  "The four here cover a protocol-tested squeeze-and-gravity kit, a multi-use LifeStraw, a straw-and-bag set and a 0.8 lb inline filter. Only some list weights, so each entry says what is and is not printed."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/lighting-headlamp-tent.webp";
export const heroImageAlt = "Camper wearing a headlamp in front of a tent at night";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-ultralight-gravity-water-filters-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Platypus QuickDraw Ultralight 3 Liter Backpacking Gravity Water Filter System",
    "price": "$99.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ZpVyXzYrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CL8VPKC3?tag=rvgearlab-amz-20",
    "description": "The Platypus QuickDraw Ultralight 3L is a gravity system with a fast 3 L/min flow when squeezed and 1.75 L/min under gravity. A ConnectCap threads onto 28mm bottles, and the kit adds adapters for wide- and narrow-mouth bottles and a CPC connector that fits many hydration reservoirs.\n\nThe filter family is individually tested to the NSF and EPA P231 protocol, for 99.9999% of bacteria and 99.9% of protozoa, according to the QuickDraw listings. The flow is faster than the LifeStraw Peak Gravity 3L or Waterdrop set, and it works as a squeeze filter too.\n\nA strong choice for fast-and-light hikers who want a tested filter that fits the gear they carry. It suits small groups.",
    "specs": [
      "3 L/min squeezed, 1.75 gravity",
      "28mm ConnectCap, CPC connector",
      "NSF and EPA P231 protocol"
    ],
    "pros": [
      "Fast flow for a gravity system",
      "Fits bottles and hydration reservoirs",
      "Individually tested to P231 protocol",
      "Shake-to-clean backflush"
    ],
    "cons": [
      "Weight is not printed on the listing",
      "Priciest of the four"
    ],
    "bestFor": "Fast-and-light hikers",
    "take": "A fast, tested system that threads onto bottles and hydration reservoirs.",
    "catch": "The listing prints no weight, so compare it before a gram-counting trip."
  },
  {
    "id": "best-ultralight-gravity-water-filters-2",
    "rank": 2,
    "badge": "Best Multi-Use",
    "name": "LifeStraw Peak Compact Gravity Water Filter",
    "price": "$65.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21IR+c4dkLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09SBPPFW2?tag=rvgearlab-amz-20",
    "description": "The LifeStraw Peak Compact Gravity pairs a 3 liter bag with a redesigned membrane and a purpose-made backwash tool. Its listing quotes bacteria and parasite removal rates and says it works as a gravity setup, a squeeze bottle, a straw or an inline filter on a bottle.\n\nIt beats the Platypus QuickDraw 3L on versatility and costs less, and the backwash accessory keeps flow up against sand and silt. It does not list a virus claim.\n\nGood for hikers who want one filter that does several jobs. A solo hiker or a couple will find the 3 liter bag adequate.",
    "specs": [
      "3 L bag, four use modes",
      "Bacteria and parasite claims",
      "Custom backwash accessory"
    ],
    "pros": [
      "Backwash accessory restores flow",
      "Gravity, squeeze or straw use",
      "Bacteria and parasite claims listed",
      "Compact in a pack"
    ],
    "cons": [
      "Only 3 liters per fill",
      "No virus claim listed"
    ],
    "bestFor": "Versatile solo and couple use",
    "take": "Four modes in one kit: gravity, squeeze, straw or bottle filter.",
    "catch": "The 3 liter bag needs several fills for more than two, and no virus claim is listed."
  },
  {
    "id": "best-ultralight-gravity-water-filters-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "Waterdrop Gravity Water Filter Straw",
    "price": "$53.70",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VY51vsm7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09285L8JL?tag=rvgearlab-amz-20",
    "description": "Waterdrop includes a filter straw and a 1.5 gallon gravity bag in this set, with a 0.1 micron ultrafiltration membrane. The listing gives up to 1,400 gallons of life, up to 700 ml per minute of flow and a backwash function.\n\nIt costs well below the Platypus QuickDraw 3L and LifeStraw Peak Gravity 3L, and the straw also connects to bottles. The 1.5 gallon bag holds more than either 3 liter system.\n\nBest for budget hikers who want a bag, a straw and a backwash in one low-cost box. It suits pairs and light trips.",
    "specs": [
      "1.5 gallon gravity bag",
      "0.1 micron ultrafiltration",
      "Straw with backwash"
    ],
    "pros": [
      "Bag and straw in one set",
      "Life up to 1,400 gallons",
      "Backwash restores flow",
      "Bigger bag than the 3 L kits"
    ],
    "cons": [
      "Slower flow than the Platypus",
      "Weight is not printed"
    ],
    "bestFor": "Budget gravity filtering",
    "take": "The most water per bag at a low price, with a straw included.",
    "catch": "Flow tops out at 700 ml per minute, and the weight is not printed."
  },
  {
    "id": "best-ultralight-gravity-water-filters-4",
    "rank": 4,
    "badge": "Best Listed Weight",
    "name": "miniwell Gravity Water Filter Ultralight Multi-Purpose Hiking Accessories Optional Emergency kit TUV Certified",
    "price": "$25.80",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/311OGfRC77L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07QQJM6JR?tag=rvgearlab-amz-20",
    "description": "The miniwell gravity kit weighs 0.8 pounds as a whole system and filters up to 2,000 liters, according to its listing. The L630 filter screws onto 28mm bottles, the bladder has a slidelock wide-mouth opening and a lifetime guarantee backs the set.\n\nNo other kit in this list prints a whole-system weight, which makes this one the easiest to plan around. The filter backflushes with a supplied collapsible bottle, and a syringe is included.\n\nGreat for gram counters who want a known weight and a long filter life at a low price. It also fits emergency kits.",
    "specs": [
      "0.8 lb whole system",
      "Filters up to 2,000 liters",
      "Lifetime guarantee"
    ],
    "pros": [
      "Whole-system weight is printed",
      "2,000 liter filter life",
      "Backflush with the supplied bottle",
      "Lifetime guarantee"
    ],
    "cons": [
      "No bacteria or protozoa test claim listed",
      "Bladder size is not stated"
    ],
    "bestFor": "Gram-counting hikers",
    "take": "A 0.8 lb whole-system kit with a printed filter life and a lifetime guarantee.",
    "catch": "Its listing is silent on test protocols, so check the manufacturer's page for claims."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight",
    "description": "Printed whole-system and filter weights were compared; only some listings give them."
  },
  {
    "title": "Flow",
    "description": "Squeeze and gravity flow rates were compared where printed."
  },
  {
    "title": "Claims",
    "description": "Bacteria, protozoa, parasite and protocol claims were noted, with virus claims flagged as absent."
  },
  {
    "title": "Compatibility",
    "description": "Bottle threads, hydration connectors and bladder designs were compared."
  },
  {
    "title": "Cleaning",
    "description": "Backflush tools and methods were compared."
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
    "subheading": "By Hiker Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Fast-and-light, tested filter",
          "Platypus QuickDraw 3L",
          "3 L/min squeezed, P231 protocol"
        ],
        [
          "One filter, many modes",
          "LifeStraw Peak Gravity 3L",
          "Gravity, squeeze, straw or bottle"
        ],
        [
          "Budget with a larger bag",
          "Waterdrop Gravity Straw",
          "1.5 gallon bag, straw included"
        ],
        [
          "Known whole-system weight",
          "miniwell L630 Kit",
          "0.8 lb printed"
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
          "$20 to $60",
          "miniwell L630 Kit or Waterdrop Gravity Straw"
        ],
        [
          "$60 to $100",
          "LifeStraw Peak Gravity 3L or Platypus QuickDraw 3L"
        ]
      ]
    }
  },
  {
    "subheading": "Tested Protocol vs Printed Weight",
    "cards": [
      {
        "label": "Tested protocol",
        "text": "The Platypus QuickDraw 3L cites P231 testing and fast flow."
      },
      {
        "label": "Printed weight",
        "text": "The miniwell L630 Kit prints 0.8 lb for the whole system."
      }
    ],
    "note": "Choose the Platypus QuickDraw 3L for a tested claim and the miniwell L630 Kit for a known weight."
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
          "miniwell L630 Kit"
        ],
        [
          "Low-mid cost, big bag",
          "Waterdrop Gravity Straw"
        ],
        [
          "Mid cost, multi-use",
          "LifeStraw Peak Gravity 3L"
        ],
        [
          "Higher cost, fast and tested",
          "Platypus QuickDraw 3L"
        ]
      ]
    }
  },
  {
    "subheading": "Ultralight Hikers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed weight, a gravity flow rate near 1.75 L/min and a bottle thread that matches your gear."
      },
      {
        "label": "In this comparison",
        "text": "The miniwell L630 Kit prints 0.8 lb, and the Platypus QuickDraw 3L prints 1.75 L/min under gravity with 28mm threading."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Platypus QuickDraw 3L for faster flow and a tested claim."
      },
      {
        "label": "Save if",
        "text": "Save with the miniwell L630 Kit or Waterdrop Gravity Straw if price and weight matter more than a protocol claim."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Flow rate in the field",
    "explanation": "A filter that flows at 3 L/min squeezed and 1.75 L/min by gravity saves minutes at every stop. Slow filters tempt hikers to skip treating water. Check flow rates for both modes."
  },
  {
    "criterion": "Printed weight",
    "explanation": "Ounces matter on an ultralight trip, but many listings leave weight out. A printed whole-system weight, such as 0.8 lb, lets you plan. Treat a missing weight as an unknown."
  },
  {
    "criterion": "What the filter claims",
    "explanation": "Protocol tests such as NSF and EPA P231 are about bacteria and protozoa. A 0.1 micron membrane is similar. None of these listings claims viruses. Check what the listing names."
  },
  {
    "criterion": "Compatibility",
    "explanation": "A filter that screws onto a 28mm bottle fits many common bottles. A CPC connector fits some hydration reservoirs. Look for thread and connector details."
  },
  {
    "criterion": "Backflushing",
    "explanation": "Fine filters clog over time. A syringe or a squeeze backflush restores flow. Look for a cleaning method in the box."
  }
];

export const faq = [
  {
    "q": "Is a gravity filter really ultralight?",
    "a": "The filter element is, and the bag adds ounces. The miniwell L630 Kit prints 0.8 lb for the whole system. Check printed weights."
  },
  {
    "q": "What mistake do hikers make with ultralight filters?",
    "a": "They skip backflushing and then complain about flow. Clean the filter on schedule. Carry the cleaning tool."
  },
  {
    "q": "Is the Platypus worth the price over the others?",
    "a": "If you want fast flow, bottle fit and a P231 protocol claim, yes. The Platypus QuickDraw 3L costs more than the miniwell and Waterdrop sets."
  },
  {
    "q": "Do these remove viruses?",
    "a": "None of the listings claim virus removal. Treat for viruses if the source needs it."
  },
  {
    "q": "How do I use a gravity filter with a bottle?",
    "a": "Thread the clean side onto a 28mm bottle, hang the dirty bag and let gravity run. Keep the clean side off the ground. Backflush when flow drops."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Gravity Water Filters For Backpacking",
    "href": "/packs-hiking/best-gravity-water-filters-for-backpacking"
  },
  {
    "title": "Best Ultralight Backpacking Water Filters",
    "href": "/packs-hiking/best-ultralight-backpacking-water-filters"
  },
  {
    "title": "Best Gravity Water Filters For Hiking",
    "href": "/packs-hiking/best-gravity-water-filters-for-hiking"
  }
];
