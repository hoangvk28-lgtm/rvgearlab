export const guideSlug = "best-chlorine-water-purification-tablets";
export const guideTitle = "3 Best Chlorine Water Purification Tablets in 2026";
export const metaTitle = "Best Chlorine Water Purification Tablets in 2026";
export const metaDescription = "Best chlorine water purification tablets compared on dose, count, wait time and standards cited, with plain notes on contact time and what tablets miss.";
export const mainKeyword = "best chlorine water purification tablets";
export const introParagraphs = [
  "Chlorine tablets are the lightest water treatment you can carry, and sodium dichloroisocyanurate (NaDCC) is the usual active ingredient. They kill bacteria and viruses when given enough contact time, but they leave the water cloudy and do not filter out grit.",
  "Only three listings here are clearly chlorine-type tablets, since the other popular brand is iodine-based and is not covered. Each is compared on tablet size, count, wait time and what the listing says about standards."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/furniture-chairs-campfire-night.webp";
export const heroImageAlt = "Two people in folding chairs around a campfire in autumn woods";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-chlorine-water-purification-tablets-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Aquatabs 49mg Water Purification Tablets",
    "price": "$11.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/5137dzgLG1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B007W5D13O?tag=rvgearlab-20",
    "description": "The Aquatabs 49mg is a 30-pack of NaDCC tablets that the listing says removes 99.9999 percent of bacteria and 99.99 percent of viruses. It is EPA registered and certified to NSF/ANSI standard 60, and the water has no unpleasant taste, color or odor unlike iodine-based products.\n\nIt is the only pick here that cites both an EPA registration and an NSF/ANSI standard, which gives it the best paper trail of the three. The line also comes as a 397mg 100-pack that the listing says purifies 4 gallons in 30 minutes.\n\nTravelers and backpackers who want a documented tablet will find it here. The small tablets weigh almost nothing in a first aid kit.",
    "specs": [
      "EPA registered, NSF/ANSI 60",
      "99.9999% bacteria, 99.99% viruses",
      "30-count pack"
    ],
    "pros": [
      "EPA registration and NSF/ANSI 60 cited",
      "Virus and bacteria removal stated",
      "No iodine taste",
      "Light and cheap per treatment"
    ],
    "cons": [
      "Only 30 tablets in the pack",
      "Does not remove sediment or grit"
    ],
    "bestFor": "Documented backpacking treatment",
    "take": "The best-documented tablet, with an EPA registration and an NSF standard on the listing.",
    "catch": "It needs full contact time, often 30 minutes or more, and won't clear cloudy water."
  },
  {
    "id": "best-chlorine-water-purification-tablets-2",
    "rank": 2,
    "badge": "Best Value Count",
    "name": "Water Purification Tablets",
    "price": "$22.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41jwQuu6VHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FFB2JSXH?tag=rvgearlab-20",
    "description": "The ROZJOVU is a 100-count bottle of NaDCC tablets that the listing says purifies up to 4 gallons in 30 minutes to 1 hour, leaving no aftertaste, color or odor. The listing gives a shelf life of up to 5 years.\n\nIt gives you more than three times the tablets of the Aquatabs 49mg pack for under twice the price. The listing is also upfront that its time estimate excludes cryptosporidium.\n\nFamily campers and emergency kits get the most from the large count and long shelf life. One bottle can sit in a car kit for years.",
    "specs": [
      "100 NaDCC tablets",
      "Up to 4 gal in 30 to 60 min",
      "Up to 5 year shelf life"
    ],
    "pros": [
      "100 tablets in a bottle",
      "5 year shelf life listed",
      "No aftertaste, color or odor",
      "Treats up to 4 gallons"
    ],
    "cons": [
      "Excludes cryptosporidium",
      "No EPA or NSF standard named"
    ],
    "bestFor": "Large stock and storage",
    "take": "A big, long-shelf-life bottle for families and emergency kits.",
    "catch": "The listing excludes cryptosporidium, so pair it with a filter in giardia-prone water."
  },
  {
    "id": "best-chlorine-water-purification-tablets-3",
    "rank": 3,
    "badge": "Best Effervescent",
    "name": "Water Purification Tablets",
    "price": "$21.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31wodRstAoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H8XRYZ6T?tag=rvgearlab-20",
    "description": "The Fastimals is a 100-count bottle of NaDCC tablets with a fast-dissolving effervescent formula designed to limit changes to taste and odor. The listing says to add the recommended number of tablets for your water volume and wait 30 minutes before use.\n\nIt suits containers from small bottles to larger storage, per the listing, and costs slightly less than the ROZJOVU. The effervescent tablet dissolves without stirring.\n\nRV owners and campers who treat both bottles and tanks will like the flexible dosing. The tablet fizzes apart without any stirring.",
    "specs": [
      "100 NaDCC tablets",
      "Effervescent, fast dissolving",
      "30-minute wait"
    ],
    "pros": [
      "100-count bottle",
      "Fast-dissolving tablet",
      "Scales to bottles or larger containers",
      "Slightly cheaper than the ROZJOVU"
    ],
    "cons": [
      "No standard or EPA registration named",
      "Dose varies by volume, read the label"
    ],
    "bestFor": "Mixed water volumes",
    "take": "A fizzy tablet that works from a bottle to a storage container.",
    "catch": "Dose depends on water volume, so read the label before treating a large container."
  }
];

export const howWeEvaluated = [
  {
    "title": "Active ingredient",
    "description": "We confirmed each product is a NaDCC or chlorine-type tablet, and excluded iodine products."
  },
  {
    "title": "Standards named",
    "description": "We looked for EPA registration and NSF/ANSI references on the listing."
  },
  {
    "title": "Count and shelf life",
    "description": "We compared tablet counts, shelf life and what each pack treats."
  },
  {
    "title": "Contact time",
    "description": "We noted the wait time each listing gives, including its caveats."
  },
  {
    "title": "Taste and handling",
    "description": "We compared taste, odor and dissolving notes."
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
    "subheading": "By Trip Length",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Short trip, one or two people",
          "Aquatabs 49mg",
          "30 tablets with the best paper trail."
        ],
        [
          "Family stock, long storage",
          "ROZJOVU NaDCC 100",
          "100 tablets and a 5 year shelf life."
        ],
        [
          "RV or large containers",
          "Fastimals NaDCC 100",
          "Scales from bottles to larger tanks."
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
          "Aquatabs 49mg"
        ],
        [
          "$20 to $30",
          "Fastimals NaDCC 100"
        ],
        [
          "$20 to $30",
          "ROZJOVU NaDCC 100"
        ]
      ]
    }
  },
  {
    "subheading": "Small Pack vs Bulk Bottle",
    "cards": [
      {
        "label": "Small pack",
        "text": "The Aquatabs 49mg comes as 30 tablets, with EPA and NSF/ANSI 60 cited, for light travel."
      },
      {
        "label": "Bulk bottle",
        "text": "The ROZJOVU NaDCC 100 and Fastimals NaDCC 100 give 100 tablets each for stock and emergencies."
      }
    ],
    "note": "Choose the Aquatabs 49mg for travel and a bulk bottle for stock."
  },
  {
    "subheading": "By Standards",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Wants EPA and NSF cited",
          "Aquatabs 49mg"
        ],
        [
          "Wants 5 year shelf life",
          "ROZJOVU NaDCC 100"
        ],
        [
          "Wants fast dissolving",
          "Fastimals NaDCC 100"
        ]
      ]
    }
  },
  {
    "subheading": "For Backpacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated wait time, a stated dose per volume and the active ingredient named."
      },
      {
        "label": "In this comparison",
        "text": "The Aquatabs 49mg cites EPA registration and NSF/ANSI 60, while the ROZJOVU NaDCC 100 and Fastimals NaDCC 100 name NaDCC and a 30-minute wait."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Aquatabs 49mg if you want a tablet that cites an EPA registration and an NSF/ANSI standard for travel."
      },
      {
        "label": "Save if",
        "text": "Save with the ROZJOVU NaDCC 100 or Fastimals NaDCC 100 if you want a large bottle for home storage and car kits."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Contact time",
    "explanation": "Chlorine needs time to kill organisms, and a 30-minute wait is a common minimum. Cold or cloudy water needs longer. Look for the stated wait on the listing and set a timer."
  },
  {
    "criterion": "What tablets miss",
    "explanation": "Chlorine tablets are slow against cryptosporidium and do nothing for grit or chemicals. The ROZJOVU listing excludes cryptosporidium from its time estimate. For murky or giardia-heavy water, filter first, then treat."
  },
  {
    "criterion": "Dose and volume",
    "explanation": "One tablet treats a set volume, and the right dose depends on the product. Aquatabs 49mg suits small volumes, and larger tablets treat gallons. Check the dose per liter or gallon on the label."
  },
  {
    "criterion": "Standards cited",
    "explanation": "EPA registration means the product is registered for water treatment in the US. NSF/ANSI 60 covers drinking water treatment chemicals. Look for a registration number or standard on the listing."
  },
  {
    "criterion": "Shelf life and storage",
    "explanation": "Tablets lose strength if stored in heat or humidity. Keep them sealed in their original container. Check the listing for a shelf life, such as the 5 years on the ROZJOVU."
  }
];

export const faq = [
  {
    "q": "How long should I wait after adding a tablet?",
    "a": "Wait at least 30 minutes, and longer for cold or cloudy water. The ROZJOVU lists 30 minutes to 1 hour. Set a timer and do not drink early."
  },
  {
    "q": "Do chlorine tablets kill viruses?",
    "a": "The Aquatabs 49mg listing states virus removal. The other two listings do not state it. Check the listing for the word virus."
  },
  {
    "q": "Can I use tablets in cloudy water?",
    "a": "Filter or strain it first, since particles shield organisms from chlorine. Let sediment settle, pour through cloth, then treat. Cloudy water needs a longer wait."
  },
  {
    "q": "Is the chlorine taste harmful?",
    "a": "It is mild, and the listings describe little to no aftertaste. Let treated water stand open for a few minutes, or pour between containers. Add flavor after the wait."
  },
  {
    "q": "How should I store the tablets?",
    "a": "Keep them in the original sealed container, away from heat and moisture. Do not transfer them to loose bags. Check the date on the label."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Water Purification Tablets",
    "href": "/packs-hiking/best-water-purification-tablets"
  },
  {
    "title": "Best Water Purification Tablets For Drinking Water",
    "href": "/packs-hiking/best-water-purification-tablets-for-drinking-water"
  },
  {
    "title": "Best Water Purification Tablets For Hiking",
    "href": "/packs-hiking/best-water-purification-tablets-for-hiking"
  }
];
