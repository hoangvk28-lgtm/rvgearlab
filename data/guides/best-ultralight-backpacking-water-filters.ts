export const guideSlug = "best-ultralight-backpacking-water-filters";
export const guideTitle = "4 Best Ultralight Backpacking Water Filters in 2026";
export const metaTitle = "Best Ultralight Backpacking Water Filters (2026)";
export const metaDescription = "Best ultralight backpacking water filters compared on weight, flow, lifespan and test protocols, from a 5 oz squeeze filter to a collapsible bottle.";
export const mainKeyword = "best ultralight backpacking water filters";
export const introParagraphs = [
  "At the ultralight end, a water filter should disappear into your pack and still filter a liter in about a minute. The leaders are squeeze filters that thread onto standard 28 mm bottles, plus collapsible bottles that fold flat.",
  "Four filters are compared here on printed weight and size, flow rate and what each listing says about testing. A few ultralight options are missing because their listings print no weight or no test standard."
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
    "id": "best-ultralight-backpacking-water-filters-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Platypus QuickDraw Ultralight 2 Liter Backpacking Water Filter System",
    "price": "$79.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31VLs4KkHDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CL83ZRBZ?tag=rvgearlab-20",
    "description": "The Platypus QuickDraw 2L System pairs a hollow fiber filter with a 2 liter reservoir, a ConnectCap and a hose that fits CPC reservoirs such as the Big Zip Evo and most HydraPak reservoirs. The listing gives a flow of 3 liters per minute when squeezed and 1.75 liters per minute under gravity, and says each filter meets the NSF and EPA P231 protocol for 99.9999 percent of bacteria and 99.9 percent of protozoa.\n\nIt flows faster than the Katadyn BeFree AC or MSR TrailShot and is the only pick that is both a squeeze and a gravity system. The filter-only QuickDraw is also sold separately for use on bottles.\n\nIt suits ultralight backpackers who want fast flow and a tested filter that fills any reservoir. The 2 liter dirty bag doubles as a reservoir.",
    "specs": [
      "3 L per minute squeezed",
      "1.75 L per minute under gravity",
      "NSF and EPA P231 protocol"
    ],
    "pros": [
      "Fast 3 L per minute flow",
      "Squeeze or gravity use",
      "Names NSF and EPA P231 protocol",
      "Fills CPC hydration reservoirs"
    ],
    "cons": [
      "Weight is not printed",
      "Priced above the filter-only version"
    ],
    "bestFor": "Fast ultralight filtering",
    "take": "The fastest-flowing, best-documented ultralight system here.",
    "catch": "The listing does not print a weight, so compare it with the 5 oz TrailShot before a gram-counting trip."
  },
  {
    "id": "best-ultralight-backpacking-water-filters-2",
    "rank": 2,
    "badge": "Best Pocket Size",
    "name": "MSR TrailShot Ultralight Backpacking and Camping Squeeze Water Filter",
    "price": "$62.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/312F6KhwnJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N7GC9Z6?tag=rvgearlab-20",
    "description": "The MSR TrailShot is a 5 ounce, 6 by 2.4 inch squeeze filter that the listing says filters one liter in 60 seconds with one hand. It uses hollow fiber technology effective against bacteria at 99.9999 percent and protozoa at 99.9 percent, filters up to 2,000 liters and uses no iodine or chlorine.\n\nIt is the only pick with a printed weight and size, and its 2,000 liter life is twice the Katadyn BeFree AC's. It fits in a stash pocket for trail runners, hikers and mountain bikers.\n\nIt suits trail runners and ultralight hikers who want a tiny filter with a printed weight. It threads onto common bottles or sips direct.",
    "specs": [
      "5 oz, 6 x 2.4 in",
      "1 liter in 60 seconds",
      "Up to 2,000 liters"
    ],
    "pros": [
      "Printed 5 oz weight",
      "1 liter in 60 seconds",
      "Up to 2,000 liter life",
      "Drink from source or fill bottle"
    ],
    "cons": [
      "Slower than the QuickDraw",
      "No test protocol named"
    ],
    "bestFor": "Trail runners and hikers",
    "take": "A tiny, documented filter with a long cartridge life.",
    "catch": "One liter per minute is slower than the QuickDraw's squeeze flow."
  },
  {
    "id": "best-ultralight-backpacking-water-filters-3",
    "rank": 3,
    "badge": "Best Collapsible Bottle",
    "name": "Katadyn BeFree AC 2-Stage Filter Collapsible Travel Water Bottle 1L",
    "price": "$42.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31dP3ZCwEFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075X5R67T?tag=rvgearlab-20",
    "description": "Katadyn builds the BeFree AC around a 1 liter soft bottle with an activated carbon stage, rated for 2 liters per minute and up to 1,000 liters of capacity. It collapses flat to fit running shorts, cycling jerseys, vests and packs, and cleans by shaking.\n\nIt combines filter and bottle in one, which saves a separate container. It has half the cartridge life of the TrailShot, in return for a bottle that folds away.\n\nIt suits runners and hikers who want filter and bottle in one. Nothing extra needs to be carried.",
    "specs": [
      "1 L collapsible bottle",
      "2 L per minute, 1,000 L",
      "Carbon stage"
    ],
    "pros": [
      "Filter and bottle in one",
      "Fast 2 liter per minute flow",
      "Collapses flat",
      "Cleans by shaking"
    ],
    "cons": [
      "Half the life of the TrailShot",
      "Weight is not printed"
    ],
    "bestFor": "Combined bottle and filter",
    "take": "A bottle and filter in one that folds away.",
    "catch": "The 1,000 liter capacity is the shortest of the four."
  },
  {
    "id": "best-ultralight-backpacking-water-filters-4",
    "rank": 4,
    "badge": "Best Budget Pick",
    "name": "Bachgold Squeeze Filtered Water Bottle",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iDbQRWnDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FQCFV3PC?tag=rvgearlab-20",
    "description": "The Bachgold Squeeze is a folding Swiss-made filter bottle with a nanofiber adsorption layer and a hollow fiber membrane with 0.2 micron pores. The listing says it is ultralight, folds to pocket size and restores flow by rinsing.\n\nIt is the cheapest pick, and the listing prints no weight, flow or lifespan figures to compare with the others. Its pore size is coarser than the 0.1 micron rating of the BeFree.\n\nIt suits first-time ultralight hikers who want the lowest-cost folding filter. It tucks away in a pocket.",
    "specs": [
      "0.2 micron hollow fiber",
      "Folds to pocket size",
      "Rinse to restore flow"
    ],
    "pros": [
      "Lowest price of the four",
      "Folds flat to pocket size",
      "Rinse to restore flow",
      "Swiss design"
    ],
    "cons": [
      "No weight or flow figure printed",
      "Coarser 0.2 micron pores"
    ],
    "bestFor": "First ultralight filter",
    "take": "A very cheap folding filter bottle for casual use.",
    "catch": "With no weight, flow or lifespan printed, it is hard to compare for serious ultralight use."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight and size",
    "description": "We compared printed weights and dimensions and flagged where none is given."
  },
  {
    "title": "Flow rate",
    "description": "We lined up printed flow rates for squeeze and gravity use."
  },
  {
    "title": "Test protocol",
    "description": "We checked which listings name NSF and EPA P231 and which state only percentages."
  },
  {
    "title": "Lifespan",
    "description": "We compared cartridge life in liters."
  },
  {
    "title": "Format",
    "description": "We matched threaded filters, systems and collapsible bottles to the way ultralighters carry water."
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
    "subheading": "By Carry Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Soft bottles and reservoirs",
          "Platypus QuickDraw 2L System",
          "Squeeze or gravity with a hose."
        ],
        [
          "Tiny pocket filter",
          "MSR TrailShot",
          "5 oz and 6 x 2.4 inches."
        ],
        [
          "No extra bottle needed",
          "Katadyn BeFree AC",
          "Collapsible 1 liter bottle."
        ],
        [
          "Lowest cost",
          "Bachgold Squeeze",
          "Cheapest folding filter."
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
          "$10 to $50",
          "Bachgold Squeeze or Katadyn BeFree AC"
        ],
        [
          "$60 to $80",
          "MSR TrailShot or Platypus QuickDraw 2L System"
        ]
      ]
    }
  },
  {
    "subheading": "System vs Bottle",
    "cards": [
      {
        "label": "Threaded systems",
        "text": "The Platypus QuickDraw 2L System and MSR TrailShot attach to your own bottles or reservoirs, and flow is faster."
      },
      {
        "label": "Filter bottles",
        "text": "The Katadyn BeFree AC and Bachgold Squeeze combine filter and bottle for simplicity, at the cost of a fixed bottle."
      }
    ],
    "note": "Choose the Platypus QuickDraw 2L System for speed and the Katadyn BeFree AC for simplicity."
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
          "Pay for tested speed",
          "Platypus QuickDraw 2L System"
        ],
        [
          "Mid-price, long life",
          "MSR TrailShot"
        ],
        [
          "Lowest cost",
          "Bachgold Squeeze"
        ]
      ]
    }
  },
  {
    "subheading": "For Ultralight Hikers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed weight, a flow of 1 liter per minute or faster and a named test protocol."
      },
      {
        "label": "In this comparison",
        "text": "The MSR TrailShot prints 5 oz and one liter in 60 seconds, and the Platypus QuickDraw 2L System names the P231 protocol."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Platypus QuickDraw 2L System for the fastest flow and a named protocol, or the MSR TrailShot for a documented 5 ounce weight."
      },
      {
        "label": "Save if",
        "text": "Save with the Bachgold Squeeze if you are a casual hiker, or the Katadyn BeFree AC if you want a mid-price bottle."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Printed weight",
    "explanation": "Ultralight hikers count ounces, so a listing that prints a weight is easier to trust. The MSR TrailShot lists 5 ounces. Look for a printed weight and whether it includes the bottle or reservoir."
  },
  {
    "criterion": "Flow rate",
    "explanation": "A flow of 3 liters per minute squeezes quickly, and 1 liter per minute is slower. Flow drops as the filter clogs. Check both the printed rate and the cleaning method."
  },
  {
    "criterion": "Standard and protocol",
    "explanation": "NSF and EPA P231 is a bacteria and protozoa test protocol. The Platypus QuickDraw 2L System names it. Prefer a named protocol over a bare percentage."
  },
  {
    "criterion": "Thread compatibility",
    "explanation": "A threaded filter must match your bottle, and 28 mm threads fit many soft and soda bottles. A mismatch means it will not seal. Check the thread size on the listing."
  },
  {
    "criterion": "Lifespan and clog",
    "explanation": "A 2,000 liter filter, like the TrailShot, lasts many trips, while a 1,000 liter filter wears out sooner. Silty water clogs any filter early. Look for the stated life and plan to pre-filter cloudy water."
  }
];

export const faq = [
  {
    "q": "What is the lightest filter here?",
    "a": "The MSR TrailShot lists 5 ounces. The others do not print a weight. Weigh your setup before you go."
  },
  {
    "q": "Can the QuickDraw thread onto my bottle?",
    "a": "The Platypus QuickDraw thread design fits 28 mm bottles and reservoirs per its listing. Check your bottle's threads. Keep the ConnectCap for hose use."
  },
  {
    "q": "How do I clean an ultralight filter?",
    "a": "The QuickDraw lists shake to clean or backflush. The BeFree lists shake or swish. Follow the maker's steps."
  },
  {
    "q": "Do ultralight filters remove viruses?",
    "a": "None of the listings states virus removal. Use a purifier or tablets abroad. Check for the word virus."
  },
  {
    "q": "Will the filter freeze?",
    "a": "Frozen hollow fibers can crack. Keep the filter in your jacket on cold nights. Replace any filter that may have frozen."
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
