export const guideSlug = "best-filtered-water-bottles-for-backpacking";
export const guideTitle = "3 Best Filtered Water Bottles For Backpacking in 2026";
export const metaTitle = "Best Filtered Water Bottles For Backpacking";
export const metaDescription = "Best filtered water bottles for backpacking: a GRAYL press purifier, a carbon-stage Katadyn BeFree and a budget Bachgold compared on claims and upkeep.";
export const mainKeyword = "best filtered water bottles for backpacking";
export const introParagraphs = [
  "Few listings fit a filtered bottle built for the trail, so this guide is short and compares three very different designs. One is a rigid press purifier, one is a collapsible 1 liter bottle with a carbon stage, and one is a budget squeeze bottle.",
  "We ordered them by what each page documents about pathogens, capacity and cleaning. Only the GRAYL lists virus removal, so it leads for travel."
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
    "id": "best-filtered-water-bottles-for-backpacking-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "GRAYL GeoPress 24 oz Water Purifier & Water Filter Bottle",
    "price": "$99.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31lM9bTxc-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09256L6JT?tag=rvgearlab-amz-20",
    "description": "The GRAYL GeoPress presses 24 oz (710 ml) of water through a cartridge with no pump, hose or battery. The listing names viruses such as rotavirus and hepatitis A, bacteria such as E. coli and protozoa such as giardia among what it removes.\n\nNo other bottle here lists viruses, and the page adds that it adsorbs PFAS, pesticides and heavy metals. Next to the Katadyn BeFree AC, it is rigid and treats less per fill, and its cartridge is rated for 65 gallons, about 250 liters.\n\nIt suits hikers who drink from questionable sources and travelers who want a purifier in bottle form. Press and drink.",
    "specs": [
      "Purifier: viruses, bacteria, protozoa",
      "24 oz (710 ml) per press",
      "Cartridge good for 65 gallons"
    ],
    "pros": [
      "Listing names viruses it removes",
      "No pump, hose or batteries",
      "Adsorbs PFAS, pesticides and metals",
      "Replaceable cartridge"
    ],
    "cons": [
      "Only 24 oz per press",
      "Cartridge is a running cost"
    ],
    "bestFor": "Hikers drinking unknown water",
    "take": "The one that names viruses, so it covers the most sources.",
    "catch": "Rigid body and only 24 oz per press, and the cartridge adds a running cost."
  },
  {
    "id": "best-filtered-water-bottles-for-backpacking-2",
    "rank": 2,
    "badge": "Best Packable",
    "name": "Katadyn BeFree AC 2-Stage Filter Collapsible Travel Water Bottle 1L",
    "price": "$52.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Ldfq7OnDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DT9J7MBC?tag=rvgearlab-amz-20",
    "description": "The Katadyn BeFree AC is a collapsible one-liter bottle with a two-stage filter that removes sediment, fine particles and microplastics, plus an activated carbon stage that reduces chlorine and odors. The carbon stage is removable for faster flow in clear backcountry water.\n\nCompared with the GRAYL, it holds a full liter and packs flat with a flip cap and integrated carabiner handle. It cleans by shaking or swishing in water, with no backflushing or tools.\n\nIt suits solo hikers and travelers who want to improve both stream and tap water. The modular carbon stage adapts to the source.",
    "specs": [
      "1 liter collapsible bottle",
      "Removable activated carbon stage",
      "Shake or swish to clean"
    ],
    "pros": [
      "Holds a full liter per fill",
      "Removable carbon stage",
      "Shake-clean, no tools",
      "Flip cap and carabiner handle"
    ],
    "cons": [
      "Does not list viruses",
      "Costs more than a basic squeeze bottle"
    ],
    "bestFor": "Solo hikers and tap-water travelers",
    "take": "A flexible one liter bottle that handles streams and tap water.",
    "catch": "The page does not claim virus removal, so it is for backcountry sources."
  },
  {
    "id": "best-filtered-water-bottles-for-backpacking-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "Bachgold Squeeze Filtered Water Bottle",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iDbQRWnDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FQCFV3PC?tag=rvgearlab-amz-20",
    "description": "The Bachgold Squeeze is a folding bottle from Switzerland with a nanofiber adsorption layer behind a hollow fiber membrane of 0.2 micron. The page says it folds to pocket size, restores flow by rinsing and needs no replacement cartridge.\n\nCheapest here, it is also the sole bottle making a pocket-size claim. Against the BeFree AC, its pores are coarser and its page prints no flow or lifespan figures.\n\nIt suits first-time hikers who want the lowest-cost folding filter. It tucks away easily.",
    "specs": [
      "Nanofiber layer plus hollow fiber",
      "0.2 micron membrane",
      "Folds to pocket size"
    ],
    "pros": [
      "Lowest price of the three",
      "Folds flat to pocket size",
      "Rinse to restore flow",
      "Swiss design"
    ],
    "cons": [
      "No weight or flow figure printed",
      "Coarser 0.2 micron pores"
    ],
    "bestFor": "First-time hikers on a budget",
    "take": "The cheapest way to carry a filter in a pocket.",
    "catch": "The page prints no flow, weight or lifespan, so expect to learn it by use."
  }
];

export const howWeEvaluated = [
  {
    "title": "Pathogen claims",
    "description": "We compared which pathogens each page names and whether viruses are listed."
  },
  {
    "title": "Capacity",
    "description": "We looked at volume per fill and cartridge life."
  },
  {
    "title": "Taste and chemicals",
    "description": "We noted carbon stages and chemical adsorption claims."
  },
  {
    "title": "Packability",
    "description": "We compared a rigid bottle against two collapsible ones."
  },
  {
    "title": "Upkeep",
    "description": "We looked at how each bottle is cleaned and when parts need replacing."
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
    "subheading": "By Source",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Unknown or international water",
          "GRAYL GeoPress 24oz",
          "Lists viruses, bacteria and protozoa"
        ],
        [
          "Mountain streams and tap water",
          "Katadyn BeFree AC 1L",
          "Two-stage filter with removable carbon"
        ],
        [
          "Short hikes on a budget",
          "Bachgold Squeeze",
          "Pocket-size and lowest price"
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
          "$10 to $20",
          "Bachgold Squeeze"
        ],
        [
          "$50 to $60",
          "Katadyn BeFree AC 1L"
        ],
        [
          "$80 to $90",
          "GRAYL GeoPress 24oz"
        ]
      ]
    }
  },
  {
    "subheading": "Press vs Squeeze",
    "cards": [
      {
        "label": "Press",
        "text": "The GRAYL GeoPress 24oz purifies 24 oz per press with no waiting. It is rigid and costs more."
      },
      {
        "label": "Squeeze",
        "text": "The Katadyn BeFree AC 1L and the Bachgold Squeeze fill in seconds and pack flat. They hold more or cost less."
      }
    ],
    "note": "Choose the GRAYL GeoPress 24oz for travel, and the Katadyn BeFree AC 1L for streams."
  },
  {
    "subheading": "By Packing Style",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Smallest folded size",
          "Bachgold Squeeze"
        ],
        [
          "Biggest fill",
          "Katadyn BeFree AC 1L"
        ],
        [
          "Viruses covered",
          "GRAYL GeoPress 24oz"
        ]
      ]
    }
  },
  {
    "subheading": "Backcountry Trips Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a printed capacity and a cleaning method that needs no tools."
      },
      {
        "label": "In this comparison",
        "text": "The Katadyn BeFree AC 1L holds a liter and cleans by shaking, and the GRAYL GeoPress 24oz lists a 65 gallon cartridge."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the GRAYL GeoPress 24oz if you drink from unknown sources."
      },
      {
        "label": "Save if",
        "text": "Save with the Bachgold Squeeze for short hikes."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Filter or purifier",
    "explanation": "A filter handles bacteria and protozoa, while a purifier also handles viruses. The GRAYL is the only bottle here that lists viruses. Choose it where sanitation is questionable."
  },
  {
    "criterion": "Rigid or collapsible",
    "explanation": "Rigid bottles hold their shape, and collapsible ones pack flat. A press bottle takes space even when empty. Match the form to pack space."
  },
  {
    "criterion": "Carbon stage",
    "explanation": "Activated carbon reduces chlorine and odors, which makes tap water taste better. The Katadyn BeFree AC has it removable. Check for carbon on the listing if taste matters."
  },
  {
    "criterion": "Cartridge life",
    "explanation": "Cartridges and filters wear out. The GRAYL lists 65 gallons, while others give liters or nothing. Find the lifespan figure."
  },
  {
    "criterion": "Cleaning routine",
    "explanation": "A clogged filter slows to a trickle. Shaking, swishing or rinsing keeps flow up. Read the cleaning method before you buy."
  }
];

export const faq = [
  {
    "q": "Is a filtered bottle enough on the trail?",
    "a": "In North American backcountry, usually. Abroad, choose a purifier like the GRAYL that lists viruses."
  },
  {
    "q": "What do hikers get wrong about carbon stages?",
    "a": "They think carbon makes water safe. Carbon helps taste and chlorine, while the membrane handles germs."
  },
  {
    "q": "Is the GRAYL worth it over the Katadyn?",
    "a": "If you travel or drink from uncertain sources, yes. For clear streams, the Katadyn packs smaller."
  },
  {
    "q": "How do I use a press bottle?",
    "a": "Fill the outer bottle with water, set the inner cup on top and press down. Drink from the inner cup."
  },
  {
    "q": "How do I store a filter bottle?",
    "a": "Dry it out after use and keep it above freezing. A frozen wet filter can crack."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Filter Bottles Water Filters For Backpacking",
    "href": "/packs-hiking/best-filter-bottles-water-filters-for-backpacking"
  },
  {
    "title": "Best Backpacking Water Filter For Groups",
    "href": "/packs-hiking/best-backpacking-water-filter-for-groups"
  },
  {
    "title": "Best Water Filter For Backpacking Trip",
    "href": "/packs-hiking/best-water-filter-for-backpacking-trip"
  }
];
