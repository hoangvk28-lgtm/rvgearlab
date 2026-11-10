export const guideSlug = "best-backpacking-water-filters";
export const guideTitle = "6 Best Backpacking Water Filters in 2026";
export const metaTitle = "Best Backpacking Water Filters in 2026";
export const metaDescription = "Best backpacking water filters compared by format, flow, lifespan and what each listing says it removes, from squeeze bottles to pumps and purifiers.";
export const mainKeyword = "best backpacking water filters";
export const introParagraphs = [
  "Backpacking water treatment comes in four formats: squeeze, pump, gravity and press, and each trades weight, speed and effort differently. The best choice depends on how many people you filter for and how cloudy your water sources are.",
  "These six cover each format with a clear role. Only the GRAYL GeoPress describes virus removal as a purifier, and the Membrane Solutions straw names the NSF/ANSI standards it cites, so the rest are best treated as bacteria and protozoa filters."
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
    "id": "best-backpacking-water-filters-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Katadyn BeFree AC 2-Stage Filter Collapsible Travel Water Bottle 1L",
    "price": "$42.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31dP3ZCwEFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075X5R67T?tag=rvgearlab-20",
    "description": "The Katadyn BeFree AC is a 1 liter collapsible bottle that pairs a hollow fiber membrane rated at 0.1 micron with an activated carbon stage. Flow is listed at 2 liters per minute and capacity at 1,000 liters, and shaking it clean replaces any backflushing.\n\nIt is the fastest-flowing squeeze system here and needs no tools or setup, unlike the TRAILGO Pro pump or the Waterdrop Gravity set. It collapses flat when empty, which is why it works for running vests as well as backpacks.\n\nIt suits solo backpackers who want fast, easy filtering on the go. It packs flat so it takes almost no space.",
    "specs": [
      "1 L collapsible bottle",
      "0.1 micron, 2 L per minute",
      "Up to 1,000 L capacity"
    ],
    "pros": [
      "Fast 2 liter per minute flow",
      "Shake-clean, no backflushing",
      "Collapses flat when empty",
      "Carbon stage for taste"
    ],
    "cons": [
      "One person at a time",
      "Capacity is lower than the Waterdrop"
    ],
    "bestFor": "Solo backpackers",
    "take": "The simplest high-flow filter for solo hikers.",
    "catch": "At 1,000 liters it wears out sooner than the straw and gravity options."
  },
  {
    "id": "best-backpacking-water-filters-2",
    "rank": 2,
    "badge": "Best Purifier",
    "name": "GRAYL GeoPress 24 oz Water Purifier & Water Filter Bottle",
    "price": "$99.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31MbTYqEWdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C1JHC2M6?tag=rvgearlab-20",
    "description": "The GRAYL GeoPress is a 24 oz press bottle that the listing says removes viruses, bacteria and protozoa, plus particulates, microplastics and, by adsorption, chemicals, PFAS and heavy metals. It needs no pump, hose, batteries or waiting, and the replaceable cartridge is good for 65 gallons (250 L).\n\nIt is the only pick here that claims virus removal, so it covers international travel where the filters do not. Compared with the Katadyn BeFree AC it purifies a smaller 24 oz batch, in return for broader coverage.\n\nIt suits backpackers and travelers who may drink from sources where viruses are a concern, such as heavily used or untrusted water. Press, drink and go, with nothing to assemble.",
    "specs": [
      "Purifier: viruses, bacteria, protozoa",
      "24 oz press bottle",
      "Cartridge for 65 gallons"
    ],
    "pros": [
      "Listing states virus removal",
      "Press bottle needs no setup",
      "Adsorbs chemicals and heavy metals",
      "Replaceable cartridge"
    ],
    "cons": [
      "Only 24 oz per press",
      "Cartridge life of 65 gallons is short"
    ],
    "bestFor": "Virus-risk travel",
    "take": "A press-style purifier for places where viruses are a concern.",
    "catch": "The 65 gallon cartridge is the shortest lifespan on the page, so you will replace it often."
  },
  {
    "id": "best-backpacking-water-filters-3",
    "rank": 3,
    "badge": "Best Hand Pump",
    "name": "Katadyn Hiker Pro Transparent Hand Pump Water Filter",
    "price": "$99.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31JUVa+MtUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075TTTX2R?tag=rvgearlab-20",
    "description": "The Katadyn Hiker Pro is an 11.2 ounce hand pump with a 0.2 micron glass fiber cartridge rated for 1,150 liters and a flow of 1 liter per minute. It adds activated carbon for taste, a filter protector, a pre-filter on the intake hose and a transparent body that shows the cartridge.\n\nIt handles silty water and shallow sources better than the squeeze systems because the hose reaches in. Compared with the TRAILGO Pro it is the tougher, better-documented pump at a higher price.\n\nIt suits backpackers who filter cloudy or murky water on long trips. The transparent body makes it easy to see when the cartridge needs attention.",
    "specs": [
      "11.2 oz, 1 L per minute",
      "0.2 micron glass fiber",
      "1,150 liter cartridge life"
    ],
    "pros": [
      "Transparent body shows cartridge condition",
      "Pre-filter and carbon improve taste",
      "Pumps from shallow water",
      "1,150 liter rated cartridge"
    ],
    "cons": [
      "Heavier than squeeze and straw filters",
      "Pumping takes effort for large volumes"
    ],
    "bestFor": "Murky water and long trips",
    "take": "A durable pump for dirty water that keeps working.",
    "catch": "At 11.2 oz it is the heaviest solo filter on the page."
  },
  {
    "id": "best-backpacking-water-filters-4",
    "rank": 4,
    "badge": "Best Group Pump",
    "name": "Trailgo Pro Portable Water Filter for Camping",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51U5YkHN7BL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZF46VG2?tag=rvgearlab-20",
    "description": "The TRAILGO Pro is a hand pump with a listed flow of 1.5 liters per minute that the listing says serves a group of four to six. It has three stages: a 5 micron pre-filter, a PP cotton stage and an ultrafiltration membrane, and it includes tubes, clamps, a reusable pre-filter and a carry bag.\n\nIt is the complete kit here, with nothing extra to buy, and it pumps faster than the Katadyn Hiker Pro. Replacement cartridges are available per the listing.\n\nIt suits families and groups who camp at a base and need a lot of water quickly. Setup takes minutes with the included tubes and clamps.",
    "specs": [
      "1.5 L per minute pump",
      "5 micron, PP cotton, UF stages",
      "Tubes, clamps, carry bag"
    ],
    "pros": [
      "Pumps 1.5 liters per minute",
      "Complete kit in the box",
      "Reusable pre-filter",
      "Replacement cartridges available"
    ],
    "cons": [
      "Weight is not printed",
      "Lifespan in liters is not printed"
    ],
    "bestFor": "Group pumping at camp",
    "take": "A ready-to-pump kit for groups with fast flow.",
    "catch": "The listing prints neither weight nor lifespan, so check both before a long trip."
  },
  {
    "id": "best-backpacking-water-filters-5",
    "rank": 5,
    "badge": "Best Gravity Set",
    "name": "Waterdrop Gravity Water Filter Straw",
    "price": "$42.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bUntigrYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B086QNLBB4?tag=rvgearlab-20",
    "description": "The Waterdrop Gravity set pairs a 0.1 micron ultrafiltration straw with a 1.5 gallon gravity-fed bag. The straw is rated up to 5,300 liters at a flow of up to 700 ml per minute, with a backwash function and detachable ends.\n\nIt filters hands-free once the bag is hung, which suits camp chores more than the Katadyn BeFree AC or the pumps. Its 5,300 liter life is the longest of the filters here.\n\nIt suits groups and base-camp cooks who want filtered water without effort. The straw also connects to bottles.",
    "specs": [
      "0.1 micron, 5,300 L rating",
      "1.5 gal gravity bag",
      "Up to 700 ml per minute"
    ],
    "pros": [
      "Hands-free gravity filtering",
      "5,300 liter lifespan listed",
      "Backwash keeps the filter clean",
      "Straw works on bottles as well"
    ],
    "cons": [
      "Needs a branch to hang",
      "Gravity bag adds bulk"
    ],
    "bestFor": "Camp cooking and groups",
    "take": "A hands-free gravity set with the longest listed lifespan.",
    "catch": "It takes time to filter a bottle, and it needs a place to hang the bag."
  },
  {
    "id": "best-backpacking-water-filters-6",
    "rank": 6,
    "badge": "Best Multi-Pack",
    "name": "Membrane Solutions Personal Water Filter Straw S1",
    "price": "$34.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/519Wee6T08L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07SYYQZDN?tag=rvgearlab-20",
    "description": "The Membrane Solutions Straw S1 comes as a four-pack of 7.1 inch, 2 ounce straws with a 0.1 micron pore size and a 5-stage design. The listing says it meets NSF/ANSI 42, 372 and 401 and removes 99.9999 percent of total coliforms, with a flow of up to 16.9 fl oz per minute.\n\nIt fits any 28 mm threaded bottle and includes a carbon stage, so it works as a bottle-top filter. Four straws cost less than a single Katadyn BeFree AC, which makes it the easy pick for a group.\n\nIt suits families and scout groups who want one personal filter per person. Each straw is small enough to ride in a pocket.",
    "specs": [
      "Four 2 oz straws",
      "0.1 micron, NSF/ANSI 42, 372, 401",
      "Fits 28 mm bottles"
    ],
    "pros": [
      "Four filters in one pack",
      "Cites NSF/ANSI 42, 372 and 401",
      "Fits standard 28 mm bottles",
      "Carbon stage for taste"
    ],
    "cons": [
      "Sipping or bottle-top use only",
      "Lifespan figure is not stated"
    ],
    "bestFor": "Families and groups",
    "take": "Four standards-cited straws for the price of one bottle filter.",
    "catch": "The straws filter one drink at a time, so cooking water is slow."
  }
];

export const howWeEvaluated = [
  {
    "title": "Format fit",
    "description": "We compared squeeze, pump, gravity and press formats and who each suits best."
  },
  {
    "title": "What it removes",
    "description": "We checked what each listing claims about bacteria, protozoa and viruses and treated virus claims separately."
  },
  {
    "title": "Flow and lifespan",
    "description": "We lined up printed flow rates and lifespans in liters or gallons."
  },
  {
    "title": "Weight and bulk",
    "description": "We noted printed weights and which formats are pack-friendly."
  },
  {
    "title": "Maintenance",
    "description": "We compared cleaning steps, from shake to backwash to cartridge change."
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
          "Solo backpacker",
          "Katadyn BeFree AC",
          "2 L per minute and shake-clean."
        ],
        [
          "Solo traveler in virus-risk areas",
          "GRAYL GeoPress",
          "Describes virus removal."
        ],
        [
          "Murky water, long trip",
          "Katadyn Hiker Pro",
          "Pre-filter and a hose that reaches shallow water."
        ],
        [
          "Groups of four to six",
          "TRAILGO Pro",
          "Pumps 1.5 L per minute."
        ],
        [
          "Base camp, hands-free",
          "Waterdrop Gravity",
          "Gravity bag and 5,300 L straw."
        ],
        [
          "Family, one per person",
          "Membrane Solutions Straw S1",
          "Four straws in a pack."
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
          "$30 to $50",
          "Membrane Solutions Straw S1 or Katadyn BeFree AC"
        ],
        [
          "$40 to $90",
          "Waterdrop Gravity or TRAILGO Pro"
        ],
        [
          "$90 to $100",
          "GRAYL GeoPress or Katadyn Hiker Pro"
        ]
      ]
    }
  },
  {
    "subheading": "Pump vs Squeeze",
    "cards": [
      {
        "label": "Pump and gravity",
        "text": "The Katadyn Hiker Pro, TRAILGO Pro and Waterdrop Gravity move more water for groups and handle silt better, but they weigh more."
      },
      {
        "label": "Squeeze and straw",
        "text": "The Katadyn BeFree AC and Membrane Solutions Straw S1 are lighter and simpler for one person."
      }
    ],
    "note": "Choose the Katadyn BeFree AC for solo trips and the TRAILGO Pro for groups."
  },
  {
    "subheading": "By Water Source",
    "table": {
      "headers": [
        "Source",
        "Recommended pick"
      ],
      "rows": [
        [
          "Clear mountain stream",
          "Katadyn BeFree AC"
        ],
        [
          "Silty or murky water",
          "Katadyn Hiker Pro"
        ],
        [
          "Questionable or foreign water",
          "GRAYL GeoPress"
        ]
      ]
    }
  },
  {
    "subheading": "For Multi-Day Backpacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated lifespan in liters, a stated weight and a cleaning method that works in the field."
      },
      {
        "label": "In this comparison",
        "text": "The Katadyn Hiker Pro lists 11.2 oz and 1,150 liters, and the Waterdrop Gravity lists 5,300 liters with a backwash function."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the GRAYL GeoPress if you travel where viruses are a concern, or on the Katadyn Hiker Pro if you filter silty water for many days."
      },
      {
        "label": "Save if",
        "text": "Save with the Membrane Solutions Straw S1 or the Katadyn BeFree AC if you drink from clear mountain streams and want the lightest setup."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Filter or purifier",
    "explanation": "A filter removes bacteria and protozoa, and a purifier also removes viruses. The GRAYL GeoPress is the only pick that describes virus removal. In most North American backcountry water a filter is enough, but a purifier is safer abroad."
  },
  {
    "criterion": "Format and group size",
    "explanation": "A solo hiker is well served by a squeeze bottle or straw, while four people sharing a pot need a pump or gravity set. The wrong format makes water chores take all evening. Count how many liters you need per night."
  },
  {
    "criterion": "Lifespan and cartridge cost",
    "explanation": "Lifespan ranges from 65 gallons for a GRAYL cartridge to 5,300 liters for a Waterdrop straw. A cheap filter that wears out quickly costs more per liter. Compare the stated lifespan and the cost of a replacement."
  },
  {
    "criterion": "Flow and silty water",
    "explanation": "Flow rates on the box are for clear water. Silty streams slow every filter and clog pores, which is why a pre-filter or pump helps. Look for a stated pre-filter and a cleaning method."
  },
  {
    "criterion": "Standards cited",
    "explanation": "A listing that names NSF/ANSI standards is more checkable than one that only claims percentages. The Membrane Solutions straw cites NSF/ANSI 42, 372 and 401. Read which standard is named and what it covers."
  }
];

export const faq = [
  {
    "q": "Do I need a purifier for the US backcountry?",
    "a": "Usually a filter is enough, since the main concerns are bacteria and protozoa. Viruses matter more abroad. The GRAYL GeoPress describes virus removal."
  },
  {
    "q": "Can I use a pump for a group of four?",
    "a": "Yes, the TRAILGO Pro lists a flow of 1.5 liters per minute for four to six people. Pumping a few liters takes a few minutes. Share the pumping."
  },
  {
    "q": "Which is best for silty water?",
    "a": "A pump with a pre-filter, such as the Katadyn Hiker Pro, handles silt best. Let the water settle first when you can. Clean the filter often."
  },
  {
    "q": "How do I clean a gravity filter?",
    "a": "Use the backwash function on the Waterdrop Gravity straw, which the listing describes. Do this after dirty water. Dry the straw before you store it."
  },
  {
    "q": "Can I use these for cooking water?",
    "a": "Yes, filtering is enough for most cooking when boiling is not needed. Gravity sets and pumps make it faster. Always keep the dirty and clean sides separate."
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
    "title": "Best Bottle Water Filters For Backpacking",
    "href": "/packs-hiking/best-bottle-water-filters-for-backpacking"
  }
];
