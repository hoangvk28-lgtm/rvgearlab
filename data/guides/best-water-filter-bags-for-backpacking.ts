export const guideSlug = "best-water-filter-bags-for-backpacking";
export const guideTitle = "3 Best Water Filter Bags For Backpacking in 2026";
export const metaTitle = "Best Water Filter Bags For Backpacking in 2026";
export const metaDescription = "Best water filter bags for backpacking: one complete SimPure gravity set and two bags for your own filter compared on capacity, threads and included parts.";
export const mainKeyword = "best water filter bags for backpacking";
export const introParagraphs = [
  "Few listings fit this exact need, so this guide is honest about it. One pick is a complete gravity set with its filter, and the other two are collection bags that attach to a filter you already own.",
  "We ordered them by completeness and by what each page states about threads and materials. Buy the bags only if you already own a compatible 28 mm threaded filter."
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
    "id": "best-water-filter-bags-for-backpacking-1",
    "rank": 1,
    "badge": "Best Complete Set",
    "name": "SimPure Portable Gravity-Fed Water Filter with 3L Bag",
    "price": "$32.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41zASVVW96L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07Y4XX65M?tag=rvgearlab-20",
    "description": "The SimPure is a gravity set with a 3 liter TPU bag and a three-stage filter of 0.1 micron hollow fiber, 5 micron coconut shell GAC and 0.2 micron PP fiber. The page lists a 5,000 liter lifespan, 27 liters per hour and a 2.8 oz filter.\n\nOnly this pick ships with a filter, so you hang it and drink. The filter can also serve alone as a personal straw, or take an extension tube for more reach.\n\nIt suits campers who want a ready bag-and-filter set for cooking and bottle filling. Hang it from a strap.",
    "specs": [
      "3 liter TPU bag with filter",
      "5,000 liter lifespan listed",
      "Filter weighs 2.8 oz"
    ],
    "pros": [
      "Filter included in the box",
      "5,000 liter lifespan listed",
      "Carbon stage for taste",
      "Hangs hands-free"
    ],
    "cons": [
      "Needs a place to hang the bag",
      "Slower than a pump"
    ],
    "bestFor": "Campers wanting a ready set",
    "take": "The only one here that includes a filter.",
    "catch": "You need a branch or hook, and flow is moderate."
  },
  {
    "id": "best-water-filter-bags-for-backpacking-2",
    "rank": 2,
    "badge": "Best Big Bag",
    "name": "Burtrail Ultra Gravity Water Bag",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41F17a9BqgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DHGXTCPJ?tag=rvgearlab-20",
    "description": "The Burtrail Ultra is a food-grade TPU gravity bag listed as 2 gallons or 8 liters, with a double-soldered seam. The kit includes an adjustable strap, a connecting hose, a flow regulator and a mesh storage bag.\n\nIt is the largest bag here and works with filters named on the page, such as the SP128 Mini and SP129 Squeeze. Compared with the Vecto, it turns a straw filter into a gravity system.\n\nIt suits groups who already own a compatible filter and want a big reservoir. A wide mouth speeds filling.",
    "specs": [
      "8 liter food-grade TPU bag",
      "Strap, hose and regulator included",
      "Works with listed Sawyer filters"
    ],
    "pros": [
      "Large capacity",
      "Hose and flow regulator included",
      "Wide mouth for quick fills",
      "Double-soldered seams"
    ],
    "cons": [
      "No filter included",
      "Bulky for solo trips"
    ],
    "bestFor": "Groups with their own filter",
    "take": "A big, complete-bag kit for people who own a filter.",
    "catch": "It holds no filter, so you must buy one."
  },
  {
    "id": "best-water-filter-bags-for-backpacking-3",
    "rank": 3,
    "badge": "Best Light Bag",
    "name": "Vecto Water Collection and Filtration Bag 2 Liter Orange",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31lYate4SrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07QBQ894L?tag=rvgearlab-20",
    "description": "The Cnoc Vecto is a 2 liter collection bag that threads onto filters with a 28 mm neck, such as the Sawyer Squeeze and the HydroBlu VersaFlow. The page lists a wide opening, a tethered cap, a slider and a breaking point of 220 lbs.\n\nSmallest and lightest of the three, it collects water in streams where bottles are awkward. Compared with the Burtrail, it is a squeeze-and-scoop bag, not a gravity reservoir.\n\nIt suits solo hikers with a compatible filter who want an easy scoop bag. It is simple to clean and dry.",
    "specs": [
      "2 liter bag with 28 mm neck",
      "Wide opening, tethered cap",
      "220 lb breaking point"
    ],
    "pros": [
      "Lightweight and compact",
      "Wide opening for easy filling",
      "Easy to clean and dry",
      "Tethered cap and slider"
    ],
    "cons": [
      "No filter included",
      "Small for groups"
    ],
    "bestFor": "Solo hikers with their own filter",
    "take": "A light scoop bag for streams.",
    "catch": "It holds only 2 liters and needs a filter you already own."
  }
];

export const howWeEvaluated = [
  {
    "title": "Complete or bag only",
    "description": "We marked which pick includes a filter and which needs one."
  },
  {
    "title": "Capacity",
    "description": "We compared bag sizes in liters."
  },
  {
    "title": "Thread compatibility",
    "description": "We noted the thread sizes and filters each page names."
  },
  {
    "title": "Materials",
    "description": "We compared TPU and other materials."
  },
  {
    "title": "Included parts",
    "description": "We listed straps, hoses and storage bags."
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
    "subheading": "By Situation",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "No filter yet, want a ready set",
          "SimPure Gravity 3L",
          "Filter and 3 liter bag in the box"
        ],
        [
          "Own a Sawyer, camping with a group",
          "Burtrail Ultra Gravity Bag",
          "8 liter bag with hose and regulator"
        ],
        [
          "Own a Sawyer, hiking solo",
          "Cnoc Vecto 2L",
          "2 liter light scoop bag"
        ],
        [
          "Cooking and filling bottles in camp",
          "SimPure Gravity 3L",
          "Hands-free flow of 27 liters per hour"
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
          "Burtrail Ultra Gravity Bag"
        ],
        [
          "$20 to $30",
          "Cnoc Vecto 2L"
        ],
        [
          "$30 to $40",
          "SimPure Gravity 3L"
        ]
      ]
    }
  },
  {
    "subheading": "Complete Set vs Bag Only",
    "cards": [
      {
        "label": "Complete Set",
        "text": "The SimPure Gravity 3L includes the filter and the bag, so you need nothing else."
      },
      {
        "label": "Bag Only",
        "text": "The Burtrail Ultra Gravity Bag and the Cnoc Vecto 2L carry water to a filter you own."
      }
    ],
    "note": "Choose the SimPure Gravity 3L if you own no filter, and a bag only if you already do."
  },
  {
    "subheading": "By Capacity",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Biggest reservoir",
          "Burtrail Ultra Gravity Bag"
        ],
        [
          "Lightest scoop bag",
          "Cnoc Vecto 2L"
        ],
        [
          "Mid-size with filter",
          "SimPure Gravity 3L"
        ]
      ]
    }
  },
  {
    "subheading": "Sawyer Owners Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a 28 mm neck and a list of compatible filters."
      },
      {
        "label": "In this comparison",
        "text": "The Cnoc Vecto 2L names the Sawyer Squeeze and HydroBlu VersaFlow, and the Burtrail Ultra Gravity Bag names the SP128 Mini and SP129 Squeeze."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the SimPure Gravity 3L if you want a complete system."
      },
      {
        "label": "Save if",
        "text": "Save with the Cnoc Vecto 2L if you already own a compatible filter."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Bag with filter or bag only",
    "explanation": "A complete set works out of the box, and a bag-only product needs a filter. The SimPure includes one. Count what is in the box before you buy."
  },
  {
    "criterion": "Thread size",
    "explanation": "Most filters use a 28 mm neck. The Cnoc Vecto and the Burtrail list compatible brands. Check the filter you own against the page."
  },
  {
    "criterion": "Capacity against weight",
    "explanation": "An 8 liter bag holds more but weighs and packs larger. A 2 liter bag suits solo trips. Pick the size you will actually fill."
  },
  {
    "criterion": "Hanging gear",
    "explanation": "A gravity bag needs a hook, strap or cord. The Burtrail includes an adjustable strap. Check what is in the box."
  },
  {
    "criterion": "Virus coverage",
    "explanation": "These systems rely on the filter for germs. None of the pages claims virus removal. Carry tablets for international trips."
  }
];

export const faq = [
  {
    "q": "Do I need a bag with my filter?",
    "a": "A bag helps with gravity use and with scooping from shallow water. Straw filters work with a bottle too."
  },
  {
    "q": "What mistake do buyers make with filter bags?",
    "a": "Buying a bag without a filter or with the wrong thread. Check the neck size first."
  },
  {
    "q": "Is the SimPure worth it over a bag only?",
    "a": "If you own no filter, yes. It includes one."
  },
  {
    "q": "How do I hang a gravity bag?",
    "a": "Use the strap on a branch or pole. Keep the dirty bag high and the clean outlet below."
  },
  {
    "q": "How do I dry a bag?",
    "a": "Open it wide and hang it in the sun. Mold grows in damp bags."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Water Filter For Groups",
    "href": "/packs-hiking/best-backpacking-water-filter-for-groups"
  },
  {
    "title": "Best Water Filter For Backpacking Trip",
    "href": "/packs-hiking/best-water-filter-for-backpacking-trip"
  },
  {
    "title": "Best Affordable Backpacking Water Filters",
    "href": "/packs-hiking/best-affordable-backpacking-water-filters"
  }
];
