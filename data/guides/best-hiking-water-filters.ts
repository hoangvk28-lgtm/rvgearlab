export const guideSlug = "best-hiking-water-filters";
export const guideTitle = "5 Best Hiking Water Filters in 2026";
export const metaTitle = "Best Hiking Water Filters in 2026";
export const metaDescription = "Best hiking water filters: a pump, a group kit, a palm-size Sawyer and two straw packs compared on stated flow, lifespan and the standards each listing names.";
export const mainKeyword = "best hiking water filters";
export const introParagraphs = [
  "Hikers have three basic choices, a pump, an inline filter or a straw, and this guide has all three. The five here run from a 2 oz inline filter to a complete pump kit that serves a group.",
  "We ordered them by how well each page documents flow, lifespan and testing. All five target bacteria and protozoa, and none states virus removal, so tablets are a good backup for international trips."
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
    "id": "best-hiking-water-filters-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Sawyer Products SP120 Mini Water Filtration System",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41soU5PB4hL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B000FAGUKO?tag=rvgearlab-amz-20",
    "description": "The Sawyer Mini weighs 2 oz and fits in your palm. The page lists removal of 99.99999 percent of bacteria and 99.9999 percent of protozoa, a 0.1 micron rating and a lifespan of up to 100,000 gallons.\n\nIt attaches to a pouch, a standard 28 mm bottle or a hydration pack, or you can drink through it directly. That flexibility is what sets it apart from the straws, which only filter at your mouth.\n\nIt suits hikers who want the lightest, most adaptable filter at a low price. A cleaning plunger comes in the box.",
    "specs": [
      "2 oz inline filter",
      "0.1 micron rating",
      "Up to 100,000 gallons stated"
    ],
    "pros": [
      "Weighs only 2 ounces",
      "100,000 gallon rating stated",
      "Fits 28 mm bottles and pouches",
      "Cleaning plunger included"
    ],
    "cons": [
      "Needs a pouch or bottle to fill",
      "Plunger needed to clean it"
    ],
    "bestFor": "Gram-counting hikers",
    "take": "The lightest, most flexible filter here, at a low price.",
    "catch": "It is only the filter, so you supply the pouch or bottle."
  },
  {
    "id": "best-hiking-water-filters-2",
    "rank": 2,
    "badge": "Best Pump",
    "name": "Katadyn Hiker Pro Transparent Hand Pump Water Filter",
    "price": "$99.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31JUVa+MtUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075TTTX2R?tag=rvgearlab-amz-20",
    "description": "The Katadyn Hiker Pro is a hand pump microfilter of 11.2 oz that delivers 1 liter per minute. Inside sits a glass fiber cartridge at 0.2 micron, rated for 1,150 liters, backed by carbon, a filter protector and an intake pre-filter.\n\nA transparent body shows the cartridge, which makes it the clearest to service. It fills a bottle or reservoir directly, with no squeezing like the Sawyer.\n\nIt suits backpackers filtering silty or murky water who like a pump that reaches into shallow sources. Setup takes three steps.",
    "specs": [
      "11.2 oz hand pump",
      "0.2 micron glass fiber cartridge",
      "1,150 liter rating"
    ],
    "pros": [
      "Transparent body shows cartridge condition",
      "Pre-filter and carbon improve taste",
      "Pumps from shallow water",
      "1,150 liter rating"
    ],
    "cons": [
      "Heavier than inline filters",
      "Slower than a squeeze system"
    ],
    "bestFor": "Hikers drinking silty water",
    "take": "A durable pump for shallow, silty sources.",
    "catch": "At 11.2 oz it weighs more than the Sawyer and flows at 1 liter per minute."
  },
  {
    "id": "best-hiking-water-filters-3",
    "rank": 3,
    "badge": "Best for Groups",
    "name": "Trailgo Pro Portable Water Filter for Camping",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51U5YkHN7BL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZF46VG2?tag=rvgearlab-amz-20",
    "description": "The TRAILGO Pro pumps water through three layers: a coarse 5 micron screen, PP cotton and an ultrafiltration membrane. Flow is given as 1.5 liters a minute, and the box adds tubes, clamps, a washable first-stage screen and a bag for it all.\n\nIt pumps faster than the Katadyn Hiker Pro and, per the page, serves a group of four to six. Nothing else needs buying, which cannot be said of the Sawyer Mini.\n\nIt suits families and base-camp groups that need a lot of water quickly. Replacement cartridges are available.",
    "specs": [
      "Hand pump, 1.5 liters per minute",
      "Three-stage filtration",
      "Tubes, clamps and carry bag"
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
    "bestFor": "Families and group camps",
    "take": "The complete kit for feeding a crowd.",
    "catch": "Weight and lifespan are not printed, so it may be heavy for solo trips."
  },
  {
    "id": "best-hiking-water-filters-4",
    "rank": 4,
    "badge": "Best Documented Straw",
    "name": "Membrane Solutions Personal Water Filter Straw S1",
    "price": "$34.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/519Wee6T08L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07SYYQZDN?tag=rvgearlab-amz-20",
    "description": "The Membrane Solutions Straw S1 pack holds four straws, each 7.1 inches long and 2 oz, filtering at 0.1 micron through five stages with coconut shell carbon. The page names NSF/ANSI 42, 372 and 401, cites a test report and gives a peak flow near 16.9 fl oz a minute.\n\nNo other straw here names standards and a report, and this one fits any 28 mm bottle thread. Compared with the Practical Survival straws it gives fewer straws and better paperwork.\n\nIt suits families and hikers who want claims they can check. The carbon stage helps taste.",
    "specs": [
      "Four 7.1 inch, 2 oz straws",
      "0.1 micron, five stages",
      "NSF/ANSI 42, 372 and 401 named"
    ],
    "pros": [
      "Names NSF/ANSI 42, 372 and 401",
      "Cites a test report number",
      "Fits 28 mm threaded bottles",
      "Carbon stage for taste"
    ],
    "cons": [
      "Lifespan figure not stated",
      "Four straws, not five"
    ],
    "bestFor": "Families and backup kits",
    "take": "A four-pack where the claims can be checked.",
    "catch": "No lifespan is stated, and a straw is slow for filling bottles."
  },
  {
    "id": "best-hiking-water-filters-5",
    "rank": 5,
    "badge": "Best Value Pack",
    "name": "Practical Survival Reusable Emergency Water Filter Straws",
    "price": "$79.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51knEkQEf9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09LDFR8HX?tag=rvgearlab-amz-20",
    "description": "The Practical Survival pack includes five reusable straws of 8 inches and 2 oz each. The page says each removes over 99.99 percent of bacteria such as E. coli and Legionella and over 99.99 percent of parasites such as Giardia and Cryptosporidium.\n\nEach straw is rated up to 1,800 gallons, framed as up to ten years of drinking water for an average person. That is more straws and a longer rating than the Membrane Solutions pack.\n\nIt suits scout troops, families and emergency kits that want one straw per person. They are small enough to tuck into a pocket.",
    "specs": [
      "Five 8 inch, 2 oz straws",
      "99.99 percent bacteria and parasites",
      "Up to 1,800 gallons each"
    ],
    "pros": [
      "Five filters per pack",
      "Names E. coli and Giardia",
      "Up to 1,800 gallons each",
      "BPA-free materials"
    ],
    "cons": [
      "No named test standard",
      "Straws only filter at your mouth"
    ],
    "bestFor": "Troops, families and kits",
    "take": "The most straws and the longest rating per piece.",
    "catch": "No test standard is named, so the claims rest on the maker's word."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated micron rating",
    "description": "We compared the pore sizes each listing prints."
  },
  {
    "title": "Flow and lifespan",
    "description": "We noted printed flow rates and lifespans in liters or gallons."
  },
  {
    "title": "Named testing",
    "description": "We marked which pages name NSF, EPA or a report."
  },
  {
    "title": "Weight",
    "description": "We compared printed weights and what is in the box."
  },
  {
    "title": "Format",
    "description": "We weighed pumps, inline filters and straws as hiking tools."
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
    "subheading": "By Hiking Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Ultralight solo hiker",
          "Sawyer Mini",
          "2 oz and 100,000 gallon rating"
        ],
        [
          "Silty or shallow sources",
          "Katadyn Hiker Pro",
          "Hand pump with a pre-filter and carbon"
        ],
        [
          "Group camping",
          "TRAILGO Pro",
          "1.5 liters per minute with a complete kit"
        ],
        [
          "Family backups",
          "Practical Survival Straws",
          "Five straws per pack"
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
          "$10 to $40",
          "Sawyer Mini or Membrane Solutions Straw S1"
        ],
        [
          "$70 to $90",
          "Practical Survival Straws or TRAILGO Pro"
        ],
        [
          "$90 to $100",
          "Katadyn Hiker Pro"
        ]
      ]
    }
  },
  {
    "subheading": "Filter Alone vs Complete Kit",
    "cards": [
      {
        "label": "Filter Alone",
        "text": "The Sawyer Mini weighs 2 oz and needs your own pouch or bottle."
      },
      {
        "label": "Complete Kit",
        "text": "The TRAILGO Pro and the Katadyn Hiker Pro include hoses and pumps for shallow water."
      }
    ],
    "note": "Choose the Sawyer Mini to save weight, and the TRAILGO Pro when you want everything in one box."
  },
  {
    "subheading": "By Documentation",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Named standards",
          "Membrane Solutions Straw S1"
        ],
        [
          "Biggest lifespan number",
          "Sawyer Mini"
        ],
        [
          "Most straws for the money",
          "Practical Survival Straws"
        ]
      ]
    }
  },
  {
    "subheading": "Stream-Fed Hikes Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a micron rating and a way to fill a bottle."
      },
      {
        "label": "In this comparison",
        "text": "The Sawyer Mini lists 0.1 micron and fits a 28 mm bottle, and the Katadyn Hiker Pro lists a 0.2 micron cartridge."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Katadyn Hiker Pro or the TRAILGO Pro if you drink from silty water or feed a group."
      },
      {
        "label": "Save if",
        "text": "Save with the Sawyer Mini or the Practical Survival Straws when weight and cost matter."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Pump, inline or straw",
    "explanation": "A pump pulls from shallow water, an inline filter attaches to a pouch, and a straw filters at your mouth. Each suits a different hiker. Decide how you will fill before you buy."
  },
  {
    "criterion": "Pore size",
    "explanation": "A 0.1 micron rating blocks bacteria and protozoa, and 0.2 micron is slightly coarser. Neither stops viruses. Find the micron number on the page."
  },
  {
    "criterion": "Rated lifespan",
    "explanation": "Lifespans run from 1,150 liters to 100,000 gallons. A big number saves money, though real life depends on water quality. Check the unit, since liters and gallons differ."
  },
  {
    "criterion": "Named testing",
    "explanation": "Standards such as NSF/ANSI show outside testing. Look for the standard numbers and a report on the page. A claim with no standard rests on the maker."
  },
  {
    "criterion": "Backflushing and cleaning",
    "explanation": "Filters clog with silt. Plungers, shake cleaning and backflushing restore flow. Check what the box includes."
  }
];

export const faq = [
  {
    "q": "Which hiking filter type is best?",
    "a": "It depends on how you fill. The Sawyer Mini suits solo hikers, a pump suits shallow water, and straws suit backups."
  },
  {
    "q": "What mistake do hikers make with inline filters?",
    "a": "Letting them freeze or skipping backflushing. Keep the filter warm and clean it on schedule."
  },
  {
    "q": "Is a pump worth it over a Sawyer?",
    "a": "For silty or shallow water, yes. For streams, the Sawyer is lighter."
  },
  {
    "q": "How do I use the Sawyer Mini?",
    "a": "Thread it onto a pouch or bottle, then squeeze or drink through it. Backflush with the plunger as the maker advises."
  },
  {
    "q": "Do these remove viruses?",
    "a": "None of the five pages claims virus removal. Add tablets or a purifier for international travel."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Water Filters For Hiking",
    "href": "/packs-hiking/best-backpacking-water-filters-for-hiking"
  },
  {
    "title": "Best Gravity Water Filters For Hiking",
    "href": "/packs-hiking/best-gravity-water-filters-for-hiking"
  },
  {
    "title": "Best Hiking Backpack For Women With Water Bladder",
    "href": "/packs-hiking/best-hiking-backpack-for-women-with-water-bladder"
  }
];
