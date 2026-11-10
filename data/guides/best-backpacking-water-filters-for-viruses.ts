export const guideSlug = "best-backpacking-water-filters-for-viruses";
export const guideTitle = "2 Best Backpacking Water Filters For Viruses in 2026";
export const metaTitle = "Best Backpacking Water Filters For Viruses";
export const metaDescription = "Best backpacking water filters for viruses compared on what each listing says it removes, capacity and format, with a plain look at how rare virus claims are.";
export const mainKeyword = "best backpacking water filters for viruses";
export const introParagraphs = [
  "Viruses are far smaller than bacteria and protozoa, so most backpacking filters, including common 0.1 micron hollow fiber models, do not remove them. A product has to be sold as a purifier, or use a different mechanism, and say so on the listing.",
  "Very few listings state virus removal, so this guide covers the two that do: a press-style purifier and a pour-through nanofiber filter. If you need more options, chemical tablets are covered in our separate tablets guide."
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
    "id": "best-backpacking-water-filters-for-viruses-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "GRAYL GeoPress 24 oz Water Purifier & Water Filter Bottle",
    "price": "$99.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31MbTYqEWdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C1JHC2M6?tag=rvgearlab-amz-20",
    "description": "The GRAYL GeoPress is a 24 oz press bottle that the listing says removes viruses such as rotavirus, norovirus and hepatitis A, bacteria such as E. coli and salmonella, and protozoa such as giardia and cryptosporidium. It also filters particulates and microplastics and adsorbs VOCs, PFAS, pesticides, heavy metals and odors.\n\nIt purifies 24 oz at a time with no pump, hose, battery or waiting, and the replaceable cartridge is good for 65 gallons (250 L). Compared with the Fusion Delta it is a bottle you press, not a pour-through cup filter.\n\nIt suits travelers and backpackers who want a single device that purifies on the spot, including from a tap or hotel sink. The press action takes seconds.",
    "specs": [
      "Viruses, bacteria, protozoa",
      "24 oz per press",
      "Cartridge for 65 gallons"
    ],
    "pros": [
      "Listing names the viruses it removes",
      "No pump, hose or batteries",
      "Adsorbs PFAS, VOCs and metals",
      "Replaceable cartridge"
    ],
    "cons": [
      "Only 24 oz per press",
      "Cartridge is the highest running cost"
    ],
    "bestFor": "International and virus-risk travel",
    "take": "The clearest purifier for viruses, with named pathogens on the listing.",
    "catch": "A 65 gallon cartridge is short, so budget for replacements on long or group trips."
  },
  {
    "id": "best-backpacking-water-filters-for-viruses-2",
    "rank": 2,
    "badge": "Best Budget Pick",
    "name": "Delta Emergency Water Filter",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413byoAVKuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BQWNPL75?tag=rvgearlab-amz-20",
    "description": "The Fusion Delta is a two-pack of pour-through emergency filters made from nanofibers, with the listing stating 99.9999 percent bacteria and 99.99 percent virus removal. You place it in a cup and pour water through it like a coffee filter, and it contains activated carbon for taste.\n\nIt costs about a quarter of the GRAYL GeoPress and weighs little enough to slip in a pocket. Compared with the GRAYL it works more slowly through a cup, and it comes as a pair.\n\nIt suits budget emergency kits and backup use, where a pocket-size virus-claimed filter matters more than speed. Having two means one can live in a go-bag and one in the car.",
    "specs": [
      "99.99% virus claim on listing",
      "Pour-through nanofiber filter",
      "Two filters per pack"
    ],
    "pros": [
      "Listing states 99.99% virus removal",
      "Two filters in the pack",
      "Pocket-size and light",
      "Activated carbon for taste"
    ],
    "cons": [
      "Slow pour-through process",
      "Lifespan figure is not stated"
    ],
    "bestFor": "Emergency kits and backup",
    "take": "A low-cost backup filter that states virus removal.",
    "catch": "Pour-through filtering is slow, so it fits emergency use better than daily trail use."
  }
];

export const howWeEvaluated = [
  {
    "title": "Virus claim",
    "description": "We looked for an explicit statement of virus removal on each listing, since most filters do not make one."
  },
  {
    "title": "Named pathogens",
    "description": "We noted which viruses, bacteria and protozoa each listing names."
  },
  {
    "title": "Capacity and lifespan",
    "description": "We compared per-batch capacity and the lifespan each listing prints."
  },
  {
    "title": "Format",
    "description": "We matched press and pour-through formats to who uses them on the trail."
  },
  {
    "title": "Cost to run",
    "description": "We compared price and replacement-cartridge costs for typical trips."
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
    "subheading": "By Where You Travel",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "International travel, tap and hotel water",
          "GRAYL GeoPress",
          "Describes viruses, bacteria and protozoa."
        ],
        [
          "Backcountry in untrusted water",
          "GRAYL GeoPress",
          "Fast press with a named-pathogen list."
        ],
        [
          "Emergency kit backup",
          "Fusion Delta 2-Pack",
          "Two pocket-size filters with a 99.99% virus claim."
        ],
        [
          "Lowest-cost virus-claim option",
          "Fusion Delta 2-Pack",
          "Costs a fraction of the GRAYL."
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
          "Fusion Delta 2-Pack"
        ],
        [
          "$90 to $100",
          "GRAYL GeoPress"
        ]
      ]
    }
  },
  {
    "subheading": "Press vs Pour-Through",
    "cards": [
      {
        "label": "Press bottle",
        "text": "The GRAYL GeoPress purifies 24 oz in one press with no setup, but the cartridge is limited to 65 gallons."
      },
      {
        "label": "Pour-through",
        "text": "The Fusion Delta 2-Pack costs less and comes as a pair, but it is slow and needs a cup."
      }
    ],
    "note": "Choose the GRAYL GeoPress for travel and the Fusion Delta 2-Pack as a backup."
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
          "Pay once for convenience",
          "GRAYL GeoPress"
        ],
        [
          "Keep cost low",
          "Fusion Delta 2-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "For Virus Protection Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "An explicit statement of virus removal, named viruses or a percentage, and a stated capacity."
      },
      {
        "label": "In this comparison",
        "text": "The GRAYL GeoPress names rotavirus, norovirus and hepatitis A with a 65 gallon cartridge, and the Fusion Delta 2-Pack states 99.99 percent virus removal."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the GRAYL GeoPress if you travel abroad or drink from sources you cannot trust, since it names the viruses it removes."
      },
      {
        "label": "Save if",
        "text": "Save with the Fusion Delta 2-Pack if you want a backup virus-claim filter for an emergency kit and can accept slow pouring."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Filter versus purifier",
    "explanation": "A filter removes bacteria and protozoa, and a purifier is also built to remove viruses. Viruses are far smaller than the pores in a typical hollow fiber membrane. Look for the word virus on the listing, not just the word purifier."
  },
  {
    "criterion": "Where viruses matter",
    "explanation": "Virus risk is higher in regions with limited sanitation and in water downstream of human activity. In most remote North American backcountry, a filter is usually enough. Check your destination before paying for extra protection."
  },
  {
    "criterion": "Named pathogens and percentages",
    "explanation": "A good listing names the viruses it covers and gives a percentage. The GRAYL GeoPress lists rotavirus, norovirus and hepatitis A, and the Fusion Delta lists 99.99 percent. Look for specifics, and be careful with a generic claim of safe water."
  },
  {
    "criterion": "Batch size and speed",
    "explanation": "A 24 oz press purifies one bottle at a time, and a pour-through filter is slower. Plan your water needs per day and add a filter for cooking and bulk water. Read the batch size on the listing."
  },
  {
    "criterion": "Cartridge life and cost",
    "explanation": "Purifier cartridges wear out faster than hollow fiber filters. The GRAYL GeoPress cartridge is good for 65 gallons, which is about 250 liters. Check the lifespan and the replacement price before you buy."
  }
];

export const faq = [
  {
    "q": "Do most backpacking filters remove viruses?",
    "a": "No. Most use a 0.1 micron hollow fiber membrane that blocks bacteria and protozoa but not viruses. Only listings that state virus removal should be trusted for it."
  },
  {
    "q": "Is virus removal necessary in the US?",
    "a": "Usually not in remote backcountry, but it matters near populated areas or abroad. Weigh the risk for your route. When in doubt, choose a purifier or add chemical tablets."
  },
  {
    "q": "Is the GRAYL worth its price over a filter?",
    "a": "If you travel abroad or camp downstream of towns, yes. For clear mountain streams in the US, a cheaper filter is enough. The GRAYL also handles chemicals the listing names."
  },
  {
    "q": "How do I use the Fusion Delta?",
    "a": "Place the filter in a cup and pour water through it, like a coffee filter. Do not squeeze it. Use a clean cup for the output."
  },
  {
    "q": "Can I combine a filter with tablets?",
    "a": "Yes. Filter first for bacteria and protozoa, then treat with chemical tablets for viruses. Tablets need full contact time, often 30 minutes or more, per the label."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Affordable Backpacking Water Filters",
    "href": "/packs-hiking/best-affordable-backpacking-water-filters"
  },
  {
    "title": "Best Backpacking Water Filters",
    "href": "/packs-hiking/best-backpacking-water-filters"
  },
  {
    "title": "Best Bottle Water Filters For Backpacking",
    "href": "/packs-hiking/best-bottle-water-filters-for-backpacking"
  }
];
