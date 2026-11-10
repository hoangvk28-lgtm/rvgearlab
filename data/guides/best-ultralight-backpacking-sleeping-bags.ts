export const guideSlug = "best-ultralight-backpacking-sleeping-bags";
export const guideTitle = "3 Best Ultralight Backpacking Sleeping Bags in 2026";
export const metaTitle = "Best Ultralight Backpacking Sleeping Bags (2026)";
export const metaDescription = "Best ultralight backpacking sleeping bags: three light bags compared on printed weight, packed size and temperature figures, with an honest read on each claim.";
export const mainKeyword = "best ultralight backpacking sleeping bags";
export const introParagraphs = [
  "True ultralight bags are scarce on Amazon at a sensible price, so this guide is short and picks the nearest fits. One prints a real weight under two pounds, one is a hooded mummy that skips weight details, and one calls itself ultralight at over three pounds.",
  "We ordered them by how well the listing backs the ultralight claim with numbers. Treat all three as warm-weather or three-season bags, and put your money into a pad if the nights run cold."
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
    "id": "best-ultralight-backpacking-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "WERTYCITY Warm Weather Sleeping Bag",
    "price": "$24.54",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fBoVWzp0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01GDGS6K0?tag=rvgearlab-20",
    "description": "The WERTYCITY prints about 1.54 lb and a compressed height of 6.9 inches, a pair of numbers that few cheap bags offer. It pairs a nylon outer with a polyester pongee lining, and the filling is described as imitation silk cotton.\n\nNext to the TETON LEEF it is the only one with a real weight, and against the JEAOUIA it is less than half the carried load. Two of these bags zip together into a double, which suits couples.\n\nIt suits hot-weather hikers, scouts and travelers who value a tiny roll over warmth. The breathable lining helps on muggy nights.",
    "specs": [
      "About 1.54 lb",
      "6.9 in compressed height",
      "59 degree F comfort figure"
    ],
    "pros": [
      "Compresses to 6.9 inches high",
      "Two bags zip into a double",
      "Breathable pongee lining",
      "Low price"
    ],
    "cons": [
      "Comfort figure is only 59 degrees F",
      "Slightly heavier than the Naturehike"
    ],
    "bestFor": "Hot-weather hikers and travelers",
    "take": "The only pick that backs its light claim with a weight under two pounds.",
    "catch": "Its comfort figure is 59 degrees F, so it is a summer bag."
  },
  {
    "id": "best-ultralight-backpacking-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Cold Option",
    "name": "Teton LEEF Lightweight Mummy Sleeping Bag Perfect for Camping",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31r1A1K2zeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09LMNHNZQ?tag=rvgearlab-20",
    "description": "The TETON LEEF is a lightweight mummy that comes with a compression sack and a design aimed at hiking and backpacking. Buyers choose from three sizes and from 0, 20 and 30 degree versions.\n\nIt is the only pick here sold with a cold-weather option, and size choices let a shorter or taller hiker dial in the fit. The listing prints no weight or fill, so the lightness is a claim rather than a number.\n\nIt suits hikers who want a mummy that packs small at a friendly price. Choose the 0, 20 or 30 degree version by your coldest night.",
    "specs": [
      "Mummy shape, three sizes",
      "0, 20, 30 degree options",
      "Compression sack included"
    ],
    "pros": [
      "Three sizes for a better fit",
      "Roomier mummy cut",
      "Compression sack included",
      "Aimed at hiking and backpacking"
    ],
    "cons": [
      "No fill or weight listed",
      "Rating is a brand label"
    ],
    "bestFor": "Hikers wanting a size and warmth choice",
    "take": "The only one with several sizes and temperature labels.",
    "catch": "No weight or fill weight is printed, so you cannot compare it to the WERTYCITY."
  },
  {
    "id": "best-ultralight-backpacking-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Budget Roomy",
    "name": "Sleeping Bags for Adults Backpacking",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rMizl3PjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08PTT92SN?tag=rvgearlab-20",
    "description": "The JEAOUIA is sold as an ultralight bag, with a listed pack weight of 3.3 lb and a compressed size from 7.9 to 14.2 inches. It measures 31.5 by 86.6 inches, uses a 190T nylon shell with a pongee lining and offers a foot zipper and a drawstring hood.\n\nIt is the roomiest of the three and the heaviest by far, so it fits the ultralight label loosely. Its design range of 50 to 68F places it among the warm-weather bags.\n\nIt suits budget hikers on short trips who want room, vents and a hood at a very low price. The shell wipes clean.",
    "specs": [
      "3.3 lb, 7.9 to 14.2 in packed",
      "31.5 x 86.6 in cut",
      "50 to 68F design range"
    ],
    "pros": [
      "Foot zipper vents warm nights",
      "Drawstring hood holds heat",
      "Wipes clean easily",
      "Very low price"
    ],
    "cons": [
      "3.3 lb is heavy for the label",
      "Height limit is 5 ft 11 in"
    ],
    "bestFor": "Budget hikers on short summer trips",
    "take": "A roomy bag with vent and hood features for very little money.",
    "catch": "At 3.3 lb it is not ultralight, and it fits campers only up to 5 ft 11 in."
  }
];

export const howWeEvaluated = [
  {
    "title": "Printed weight",
    "description": "We checked whether the listing states a weight, since ultralight is a weight claim."
  },
  {
    "title": "Packed size",
    "description": "We compared the compressed height or range on each page."
  },
  {
    "title": "Temperature figures",
    "description": "We compared the stated ranges and noted which are comfort figures."
  },
  {
    "title": "Features that cost ounces",
    "description": "We noted hoods, vents and zippers and weighed them against the label."
  },
  {
    "title": "Honest claim",
    "description": "We marked where the word ultralight is backed by numbers and where it is not."
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
    "subheading": "By Weight Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Lowest printed weight",
          "WERTYCITY Warm Weather",
          "About 1.54 lb printed"
        ],
        [
          "Wanting 0, 20 or 30 degree choices",
          "TETON LEEF",
          "Three label options and three sizes"
        ],
        [
          "Roomier cut on a tight budget",
          "JEAOUIA Ultralight",
          "31.5 by 86.6 inches at a very low price"
        ],
        [
          "Smallest packed roll",
          "WERTYCITY Warm Weather",
          "6.9 inch compressed height"
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
          "WERTYCITY Warm Weather"
        ],
        [
          "$20 to $30",
          "JEAOUIA Ultralight"
        ],
        [
          "$90 to $100",
          "TETON LEEF"
        ]
      ]
    }
  },
  {
    "subheading": "Summer Bag vs Mummy",
    "cards": [
      {
        "label": "Summer Bag",
        "text": "The WERTYCITY Warm Weather and the JEAOUIA Ultralight are 3-season or warm bags with comfort figures near 50 to 59F."
      },
      {
        "label": "Mummy",
        "text": "The TETON LEEF is a hooded mummy with colder labels. It prints no weight."
      }
    ],
    "note": "Choose the WERTYCITY Warm Weather for hot trips, and the TETON LEEF when nights may drop."
  },
  {
    "subheading": "By Trip Length",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Overnight in warm weather",
          "WERTYCITY Warm Weather"
        ],
        [
          "Weekend trips with varied weather",
          "TETON LEEF"
        ],
        [
          "Short trips on a very tight budget",
          "JEAOUIA Ultralight"
        ]
      ]
    }
  },
  {
    "subheading": "Weight-Shaving Hikers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a printed weight under two pounds and a compressed height."
      },
      {
        "label": "In this comparison",
        "text": "The WERTYCITY Warm Weather lists 1.54 lb and 6.9 inches, the clearest numbers in this comparison."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the TETON LEEF if you need a colder label or a size that fits a taller frame."
      },
      {
        "label": "Save if",
        "text": "Save with the WERTYCITY Warm Weather or the JEAOUIA Ultralight if your trips stay warm."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Ultralight is a number",
    "explanation": "The label ultralight has no legal meaning, so look for a weight in pounds or ounces. Under about two pounds is the usual cutoff for a light bag. Treat any page with no weight as an open question."
  },
  {
    "criterion": "Warmth against weight",
    "explanation": "Light bags use less fill, so they are rated for mild nights. The WERTYCITY lists a 59 degree F comfort figure. Match the bag to your warmest expected night, not your coldest."
  },
  {
    "criterion": "Compressed size",
    "explanation": "Packing volume matters as much as weight in a small pack. The WERTYCITY states 6.9 inches, while the JEAOUIA gives a range. Check the number against your pack's volume."
  },
  {
    "criterion": "Features add grams",
    "explanation": "Foot zippers, hoods and draft tubes add comfort and ounces. A bag that has all of them, like the JEAOUIA, weighs more. Decide which features you will actually use."
  },
  {
    "criterion": "Fit by height",
    "explanation": "Light bags often run short. The JEAOUIA lists campers up to 5 ft 11 in. Check the height limit on the page."
  }
];

export const faq = [
  {
    "q": "Is the JEAOUIA really ultralight?",
    "a": "At 3.3 lb it is lighter than a car-camp bag but heavier than most ultralight lists accept. Read it as lightweight rather than ultralight."
  },
  {
    "q": "What mistake do buyers make with ultralight claims?",
    "a": "They trust the word without a weight. Look for ounces on the listing, as the WERTYCITY provides."
  },
  {
    "q": "Is the TETON LEEF worth it over the WERTYCITY?",
    "a": "If you need a 0 or 20 degree label or a different size, yes. For hot nights the WERTYCITY is lighter and smaller."
  },
  {
    "q": "How do I pack a light bag?",
    "a": "Stuff it into the sack from the foot end and compress evenly. Keep it in a dry bag in the lower pack."
  },
  {
    "q": "How do I add warmth cheaply?",
    "a": "Add a liner, wear dry layers and use a pad with a high stated R-value. These steps add a few degrees only."
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
