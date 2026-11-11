export const guideSlug = "best-bottle-water-filters-for-backpacking";
export const guideTitle = "3 Best Bottle Water Filters For Backpacking in 2026";
export const metaTitle = "Best Bottle Water Filters For Backpacking (2026)";
export const metaDescription = "Best bottle water filters for backpacking compared on bottle size, micron rating, flow and weight, with notes on what each listing does and does not state.";
export const mainKeyword = "best bottle water filters for backpacking";
export const introParagraphs = [
  "A filter bottle lets you fill from a stream and drink without any other gear, which is why squeeze bottles took over from pumps for many solo hikers. The trade is volume: most hold a liter or less and you refill often.",
  "Few listings target filter bottles for backpacking in this exact form, so this guide covers three collapsible squeeze bottles from a name brand, a 1 liter budget bottle with a lab-condition claim, and a Swiss-made two-stage option. None of them describes virus removal."
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
    "id": "best-bottle-water-filters-for-backpacking-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Katadyn BeFree Collapsible Water Filter Bottle 0.6L",
    "price": "$37.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/3158xWeiMDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01M0MZ7NI?tag=rvgearlab-amz-20",
    "description": "The Katadyn BeFree 0.6L is a collapsible bottle that weighs just 59 g and filters through 0.1 micron hollow fibers. Flow is rated at 2 liters per minute over a 1,000 liter life, and the maker says shaking or swishing is all the cleaning it needs.\n\nIt is the lightest and fastest-flowing pick here, and it folds flat to fit a running vest or pocket. It holds less than the JEYOGO 1L, which is the price of the lower weight.\n\nIt suits trail runners, ultralight backpackers and day hikers who refill at every stream. It disappears into a vest pocket.",
    "specs": [
      "0.6 L collapsible bottle",
      "0.1 micron, 2 L per minute",
      "Weighs 59 g"
    ],
    "pros": [
      "Fast 2 liter per minute flow",
      "Weighs only 59 grams",
      "Shake-clean, no backflushing",
      "Folds flat when empty"
    ],
    "cons": [
      "Holds only 0.6 liters",
      "1,000 liter capacity is limited"
    ],
    "bestFor": "Ultralight and trail running",
    "take": "The lightest, fastest bottle filter here, made for light refills.",
    "catch": "At 0.6 liters it demands frequent refills on long dry stretches."
  },
  {
    "id": "best-bottle-water-filters-for-backpacking-2",
    "rank": 2,
    "badge": "Best 1 Liter Pick",
    "name": "JEYOGO 1L Collapsible Water Filter Bottle",
    "price": "$28.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21dYs6xEEdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GQB33YCD?tag=rvgearlab-amz-20",
    "description": "The JEYOGO is a 1 liter collapsible bottle with 0.1 micron hollow fiber filtration inside a flexible 0.4 mm BPA-free TPU body. The listing says it removes more than 99.9999 percent of total coliform under lab conditions at the start of life, with a flow of up to 1 liter per minute.\n\nIt holds more than the Katadyn BeFree 0.6L and adds a filter integrity check, which lets you test the filter after a drop or freeze. It also cleans by shaking, with no syringe needed.\n\nIt suits backpackers who want a full liter per fill and a way to test the filter after rough handling. The wide TPU body is easy to roll up when empty.",
    "specs": [
      "1 L collapsible bottle",
      "0.1 micron, up to 1 L per minute",
      "Filter integrity check"
    ],
    "pros": [
      "1 liter per fill",
      "Filter integrity check after drops",
      "Shake-clean, no syringe",
      "0.4 mm BPA-free TPU body"
    ],
    "cons": [
      "Slower flow than the Katadyn",
      "Lifespan in liters is not stated"
    ],
    "bestFor": "Longer stretches between refills",
    "take": "A 1 liter bottle with an integrity check for peace of mind.",
    "catch": "The listing prints no lifespan in liters, so track how long you have used it."
  },
  {
    "id": "best-bottle-water-filters-for-backpacking-3",
    "rank": 3,
    "badge": "Best Budget Pick",
    "name": "Bachgold Squeeze Filtered Water Bottle",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41sZ0APFhzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FQJ9CR8Y?tag=rvgearlab-amz-20",
    "description": "The Bachgold Squeeze is a Swiss-made squeeze bottle whose filter pairs a nanofiber adsorption layer with a 0.2 micron hollow fiber membrane. It stays leak-resistant when closed and folds to pocket size.\n\nIt is the lowest-priced pick and is described as needing no replacement cartridges, only a rinse to restore flow. Its 0.2 micron membrane is coarser than the 0.1 micron rating of the Katadyn BeFree 0.6L and JEYOGO 1L.\n\nIt suits casual hikers and travelers who want a first filter bottle at the lowest cost. The leak-resistant cap lets it ride in a daypack.",
    "specs": [
      "0.2 micron hollow fiber",
      "Electro-adsorptive nanofiber layer",
      "Swiss designed and made"
    ],
    "pros": [
      "Lowest price of the three",
      "Leak-resistant when closed",
      "Rinse to restore flow",
      "Folds flat to pocket size"
    ],
    "cons": [
      "Larger 0.2 micron membrane",
      "No capacity or flow figure listed"
    ],
    "bestFor": "First filter bottle",
    "take": "A cheap, simple filter bottle that folds into a pocket.",
    "catch": "Without a printed capacity or flow rate, performance is harder to compare."
  }
];

export const howWeEvaluated = [
  {
    "title": "Bottle size",
    "description": "We compared bottle volume against how often a backpacker would have to refill."
  },
  {
    "title": "Micron rating",
    "description": "We checked the printed membrane rating and any lab-condition claims on bacteria."
  },
  {
    "title": "Flow and cleaning",
    "description": "We lined up flow rates and the cleaning method, from shake to rinse."
  },
  {
    "title": "Weight and packing",
    "description": "We noted printed weights and how flat each bottle folds."
  },
  {
    "title": "Durability checks",
    "description": "We looked for features that help you tell when a filter has failed."
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
    "subheading": "By Refill Pattern",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Frequent stream refills, minimal weight",
          "Katadyn BeFree 0.6L",
          "59 g and 2 L per minute."
        ],
        [
          "Longer gaps between sources",
          "JEYOGO 1L Filter Bottle",
          "1 liter per fill."
        ],
        [
          "Occasional use, lowest cost",
          "Bachgold Squeeze",
          "Lowest price and a pocket fold."
        ],
        [
          "Rough handling, want a test",
          "JEYOGO 1L Filter Bottle",
          "Filter integrity check."
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
          "$20 to $30",
          "JEYOGO 1L Filter Bottle"
        ],
        [
          "$30 to $40",
          "Katadyn BeFree 0.6L"
        ]
      ]
    }
  },
  {
    "subheading": "Smaller vs Larger Bottle",
    "cards": [
      {
        "label": "0.6 liter",
        "text": "The Katadyn BeFree 0.6L is lighter and folds smaller, but it needs more refills."
      },
      {
        "label": "1 liter",
        "text": "The JEYOGO 1L Filter Bottle holds more per fill and adds an integrity check, at a little more weight."
      }
    ],
    "note": "Choose the Katadyn BeFree 0.6L for ultralight hiking and the JEYOGO 1L Filter Bottle for dry stretches."
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
          "Lowest cost",
          "Bachgold Squeeze"
        ],
        [
          "Mid-priced, 1 liter",
          "JEYOGO 1L Filter Bottle"
        ],
        [
          "Highest-priced, lightest",
          "Katadyn BeFree 0.6L"
        ]
      ]
    }
  },
  {
    "subheading": "For Backpackers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed flow rate, a stated micron rating and a shake or rinse cleaning method."
      },
      {
        "label": "In this comparison",
        "text": "The Katadyn BeFree 0.6L lists 2 L per minute and 0.1 micron, and the JEYOGO 1L Filter Bottle lists 1 L per minute and 0.1 micron."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Katadyn BeFree 0.6L if weight and flow matter most and you refill often. The JEYOGO 1L Filter Bottle is a mid-priced choice if you want one liter per fill and an integrity check."
      },
      {
        "label": "Save if",
        "text": "Save with the Bachgold Squeeze if you hike casually and want a first filter bottle."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Bottle volume",
    "explanation": "A squeeze bottle holds between half a liter and a liter, and you refill from the source often. On dry stretches, volume matters more than weight. Check the capacity and carry a second bottle for dry camps."
  },
  {
    "criterion": "Micron rating",
    "explanation": "A 0.1 micron membrane blocks bacteria and protozoa, and a 0.2 micron membrane is coarser. Bacteria are generally larger than both, but tighter is more precise. Look for the rating and any lab-condition qualifier."
  },
  {
    "criterion": "Flow and squeeze effort",
    "explanation": "A listed flow of 2 liters per minute is fast, and 1 liter per minute is workable. Real flow depends on water clarity and filter age. Look for the printed flow and plan to clean the filter when flow slows."
  },
  {
    "criterion": "Cleaning without tools",
    "explanation": "Shake or rinse cleaning avoids carrying a syringe on the trail. The JEYOGO and Katadyn bottles both describe shake cleaning. Check the cleaning method before you buy."
  },
  {
    "criterion": "Freeze and drop damage",
    "explanation": "Hollow fibers can crack if the filter freezes or is dropped hard, and the damage is invisible. A filter integrity check lets you test it, and otherwise you replace a suspect filter. Look for the check on the listing."
  }
];

export const faq = [
  {
    "q": "Do these remove viruses?",
    "a": "None of the listings states virus removal. They are for bacteria and protozoa. For travel abroad choose a purifier."
  },
  {
    "q": "How long does a bottle filter last?",
    "a": "The Katadyn BeFree 0.6L lists 1,000 liters. The JEYOGO 1L Filter Bottle and Bachgold Squeeze do not state a lifespan. Track your use."
  },
  {
    "q": "Can I put drink mix in a filter bottle?",
    "a": "No. Only plain water should pass through the filter, and sweet mixes can clog and spoil it. Add mix after filtering."
  },
  {
    "q": "How do I clean a filter bottle?",
    "a": "Shake or swish it, as the Katadyn and JEYOGO listings describe, and rinse the Bachgold. Dry it before storage. Never wash with soap through the membrane."
  },
  {
    "q": "Will the bottle freeze solid?",
    "a": "It can in cold weather, and freezing can crack the filter. Keep it in your jacket or sleeping bag on freezing nights. Test or replace after a hard freeze."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Filter Bottles Water Filters For Backpacking",
    "href": "/packs-hiking/best-filter-bottles-water-filters-for-backpacking"
  },
  {
    "title": "Best Affordable Backpacking Water Filters",
    "href": "/packs-hiking/best-affordable-backpacking-water-filters"
  },
  {
    "title": "Best Backpacking Water Filters For Viruses",
    "href": "/packs-hiking/best-backpacking-water-filters-for-viruses"
  }
];
