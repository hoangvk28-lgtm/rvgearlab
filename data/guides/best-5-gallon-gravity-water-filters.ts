export const guideSlug = "best-5-gallon-gravity-water-filters";
export const guideTitle = "2 Best 5 Gallon Gravity Water Filters in 2026";
export const metaTitle = "Best 5 Gallon Gravity Water Filters in 2026";
export const metaDescription = "Best 5 gallon class gravity water filters for RV bases, cabins and off-grid camps, comparing a bucket system with a 6 gallon countertop unit.";
export const mainKeyword = "best 5 gallon gravity water filters";
export const introParagraphs = [
  "Few listings target this exact size. Two genuine gravity systems sit in the 5 to 6 gallon range: the OutbackWater bucket system and the Crown Berkey. Garden-hose filters that fill jugs and stands that hold a dispenser are a different product and are left out.",
  "These are stationary systems for a camp kitchen, RV or cabin, not pack gear. Each is judged on reservoir size, filter life, how many stages the water passes through and what the listing says it removes."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/home-golden-hour-campsite.webp";
export const heroImageAlt = "Dome tent and hammock at a forest campsite at golden hour";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-5-gallon-gravity-water-filters-1",
    "rank": 1,
    "badge": "Best for Off-Grid and Rain Water",
    "name": "Outback Emergency Water Filter System with Extra Filter Set",
    "price": "$299.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Ove6BeoTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07R637B6Y?tag=rvgearlab-20",
    "description": "OutbackWater builds its system in a compact 5 gallon bucket. Water poured into the upper chamber passes through a 4-stage chain: net pre-filter, sleeve pre-filter, Nano pre-filter and a multi-media cartridge. The listing claims up to 24 gallons per day.\n\nCompared with the Crown Berkey it uses a plastic bucket and is aimed squarely at lake, river, stream and stored rainwater, not tap water. Every stage is replaceable, and the version listed here bundles an extra filter set.\n\nA solid fit for RV bases, hunting camps and cabins where power cuts or boil advisories are a real possibility. It sets up in minutes and stores away between uses.",
    "specs": [
      "5 gallon bucket design",
      "4 replaceable stages",
      "Up to 24 gallons per day"
    ],
    "pros": [
      "Works with no power or pumps",
      "Four replaceable filter stages",
      "Handles lake, river and rain water",
      "Spare filter set included here"
    ],
    "cons": [
      "Plastic bucket body",
      "No standard certification named"
    ],
    "bestFor": "Off-grid cabins and RV bases",
    "take": "A 5 gallon bucket filter with four replaceable stages and a spare filter set.",
    "catch": "The listing does not name an NSF mark or a virus claim, so treat it as a bacteria and sediment filter and add treatment if viruses are a worry."
  },
  {
    "id": "best-5-gallon-gravity-water-filters-2",
    "rank": 2,
    "badge": "Best Capacity and Filter Life",
    "name": "Crown Berkey Gravity-Fed Stainless Steel Countertop Water Filter System 6 Gallon with 2 Authentic Black Berkey",
    "price": "$478.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31CXq1lK2iL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B001CJM646?tag=rvgearlab-20",
    "description": "The Crown Berkey is a stainless steel countertop gravity system holding 6 gallons and shipping with two Black Berkey BB9-2 elements. Each pair of elements is listed at up to 6,000 gallons before replacement.\n\nAgainst the OutbackWater 5 Gallon it holds a little more water and carries a much longer filter life, plus independent lab testing for over 200 contaminants. A separate version adds fluoride and arsenic reduction elements for tap water.\n\nGreat for a long-stay RV, a family cabin or a home emergency stash where one big stainless reservoir is welcome. The steel body is sturdier than a bucket.",
    "specs": [
      "6 gallon stainless body",
      "Two Black Berkey BB9-2 elements",
      "Up to 6,000 gallons per pair"
    ],
    "pros": [
      "Stainless steel reservoir",
      "Elements listed for 6,000 gallons",
      "Tested for 200+ contaminants by labs",
      "Countertop use, no electricity"
    ],
    "cons": [
      "High price compared with a bucket",
      "Large and heavy when full"
    ],
    "bestFor": "Long stays and families",
    "take": "A large stainless unit whose Black Berkey elements list up to 6,000 gallons per pair.",
    "catch": "It costs well more than a bucket system and is bulky, so it is not for tight RV storage."
  }
];

export const howWeEvaluated = [
  {
    "title": "Reservoir size",
    "description": "We compared the stated gallons, noting that one system is 5 gallons and the other is 6."
  },
  {
    "title": "Filter life",
    "description": "We looked at the stated gallons per element or cartridge and how often replacements are needed."
  },
  {
    "title": "Stages and testing",
    "description": "We recorded the number of stages and any independent testing mentioned."
  },
  {
    "title": "Water sources",
    "description": "We noted whether the listing mentions lake, river, rain or tap water use."
  },
  {
    "title": "Setup and storage",
    "description": "We looked at how each unit sets up and how much space it takes."
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
    "subheading": "By Setup",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "RV bay or camp table with limited space",
          "OutbackWater 5 Gallon",
          "Compact 5 gallon bucket"
        ],
        [
          "Cabin kitchen counter",
          "Crown Berkey 6 Gallon",
          "Stainless steel countertop unit"
        ],
        [
          "Lake or rain water source",
          "OutbackWater 5 Gallon",
          "Four-stage chain with nets and sleeves"
        ],
        [
          "Long stay, high daily use",
          "Crown Berkey 6 Gallon",
          "6,000 gallons per element pair"
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
          "$290 to $300",
          "OutbackWater 5 Gallon"
        ],
        [
          "$470 to $480",
          "Crown Berkey 6 Gallon"
        ]
      ]
    }
  },
  {
    "subheading": "Bucket vs Stainless Countertop",
    "cards": [
      {
        "label": "Bucket system",
        "text": "The OutbackWater 5 Gallon is a plastic bucket with a layered filter stack. It is light and stores away."
      },
      {
        "label": "Stainless countertop",
        "text": "The Crown Berkey 6 Gallon is a heavy steel reservoir with long-life elements. It stays on the counter."
      }
    ],
    "note": "Choose the OutbackWater 5 Gallon for mobile or stored use, and the Crown Berkey 6 Gallon for a fixed home base."
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
          "Lower price, spare filter set included",
          "OutbackWater 5 Gallon"
        ],
        [
          "Higher price, longest filter life",
          "Crown Berkey 6 Gallon"
        ]
      ]
    }
  },
  {
    "subheading": "RV Boondocking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A compact reservoir, a stated daily output and no power requirement."
      },
      {
        "label": "In this comparison",
        "text": "The OutbackWater 5 Gallon lists up to 24 gallons per day in a bucket, while the Crown Berkey 6 Gallon needs counter space."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Crown Berkey 6 Gallon when the system will sit on a counter for months."
      },
      {
        "label": "Save if",
        "text": "Save with the OutbackWater 5 Gallon when you need a stowable unit for occasional trips."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "True reservoir volume",
    "explanation": "Gravity systems have an upper chamber that you fill by pouring, so its size sets how much water you get per refill. A 5 gallon bucket and a 6 gallon countertop unit are close in size but not identical. Check the number in the product title and the shape of the reservoir."
  },
  {
    "criterion": "Filter life per set",
    "explanation": "The filter element wears out after a stated volume of water. The Crown Berkey lists up to 6,000 gallons per pair, while the OutbackWater lists daily output rather than lifetime. Work out your monthly gallons to see how often you will replace."
  },
  {
    "criterion": "Contaminant claims",
    "explanation": "Gravity filters are described differently on every listing, from 200 contaminants tested to bacteria and sediment. Only count what a listing explicitly names. If viruses or chemicals matter, look for a stated standard or add a treatment step."
  },
  {
    "criterion": "Source water",
    "explanation": "Some systems target tap water, others lake and rain water. The OutbackWater lists lakes, rivers, streams and stored rain, which means heavy sediment. Use a clean pre-filter or net when you feed it surface water."
  },
  {
    "criterion": "Stable setup",
    "explanation": "A gravity unit needs a level, stable surface and a place to catch filtered water. A countertop or table works, and a spigot sets how you fill. Make sure your rig has the counter space before you buy."
  }
];

export const faq = [
  {
    "q": "Is a gravity filter safe for lake water?",
    "a": "The OutbackWater listing says it filters water from lakes, rivers and streams. The listing does not name a virus or standards claim, so add a treatment step if you are unsure of the source. Always pre-filter visible sediment first."
  },
  {
    "q": "What mistake do buyers make with gravity filters?",
    "a": "They put the unit on an uneven surface or let filtered water sit open. Level the base and keep a clean lidded container under the spigot."
  },
  {
    "q": "Is the Crown Berkey worth it over a bucket system?",
    "a": "If you will use it daily for months, yes. The long element life and stainless body pay back over time. For a few trips a year, a bucket system costs less."
  },
  {
    "q": "How do I prime a gravity filter?",
    "a": "Elements usually need a priming step before first use, so follow the maker's instructions. Fill the upper chamber slowly and wait for steady flow. Discard the first batch if directed."
  },
  {
    "q": "How do I maintain a gravity filter?",
    "a": "Rinse the upper chamber and clean the pre-filters regularly. Replace elements by volume or when flow drops. Store the unit dry and covered between trips."
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
