export const guideSlug = "best-water-purification-tablets";
export const guideTitle = "2 Best Water Purification Tablets in 2026";
export const metaTitle = "Best Water Purification Tablets in 2026";
export const metaDescription = "Best water purification tablets compared on active ingredient, virus claims, contact time and packaging, with plain notes on iodine versus chlorine tablets.";
export const mainKeyword = "best water purification tablets";
export const introParagraphs = [
  "Purification tablets are the lightest backup you can carry, but they are not all the same. Chlorine-type tablets such as Aquatabs and iodine tablets such as Potable Aqua differ in taste, virus claims and who should use them.",
  "Only two product lines are covered here, because the other listings in this category are size variants of the same two. The Aquatabs line also comes in a 397mg tablet that the listing says purifies 4 gallons in 30 minutes, and in 50 and 100 count packs."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/furniture-chairs-by-tent.webp";
export const heroImageAlt = "Two folding camping chairs beside a tent in a redwood forest";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-water-purification-tablets-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Aquatabs 49mg Water Purification Tablets",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hmcr5QMmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09B2TVKGB?tag=rvgearlab-amz-20",
    "description": "The Aquatabs 49mg 100-Pack lists 99.9999 percent removal of bacteria and 99.99 percent of viruses, with each tablet individually sealed in a foil strip. The listing says treated water has no unpleasant taste, color or odor, unlike iodine-based products.\n\nVirus removal is stated for this pack and not for the Potable Aqua, and the foil strips protect each tablet from humidity in a disaster kit or bug-out bag. The line also comes in a 50 count pack at a lower price.\n\nIt suits backpackers, travelers and kit builders who want a tablet that states virus removal and does not taste of iodine. The sealed strips tear open one at a time.",
    "specs": [
      "99.99% virus claim",
      "Foil-sealed tablets, 100 count",
      "No iodine taste"
    ],
    "pros": [
      "Listing states virus removal",
      "Individually foil-sealed tablets",
      "No iodine taste or color",
      "100 tablets per pack"
    ],
    "cons": [
      "Higher price than the Potable Aqua",
      "Does not clear cloudy water"
    ],
    "bestFor": "Travel and kits",
    "take": "A tablet that states virus removal and avoids iodine taste.",
    "catch": "It needs a full wait of 30 minutes or more, and won't clear sediment."
  },
  {
    "id": "best-water-purification-tablets-2",
    "rank": 2,
    "badge": "Best Budget Pick",
    "name": "Potable Aqua Water Purification Tablets",
    "price": "$12.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51lfUdR5pNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01GPK4LVW?tag=rvgearlab-amz-20",
    "description": "The Potable Aqua pack includes two bottles of 50 tablets each. The listing says they make water bacteriologically suitable to drink and are effective against Giardia lamblia when used as directed.\n\nNext to the Aquatabs 49mg 100-Pack it carries the same 100 tablets at roughly half the price, which makes it the cheap bulk choice. The listing names Giardia and says nothing about viruses.\n\nIt suits budget campers and emergency kits where cost matters most and the water is likely clear. Splitting the tablets between two bottles spreads the risk of spoilage.",
    "specs": [
      "Two bottles of 50 tablets",
      "Giardia lamblia effective",
      "Bacteriologically suitable"
    ],
    "pros": [
      "Lowest price for 100 tablets",
      "Two bottles split the supply",
      "Names Giardia lamblia",
      "Long-established tablet"
    ],
    "cons": [
      "Listing does not state virus removal",
      "Iodine tablets suit short-term use only"
    ],
    "bestFor": "Low-cost kit backup",
    "take": "The cheaper way to stock 100 tablets for clear-water emergencies.",
    "catch": "Iodine-based tablets are not for everyone, so check the label if you have thyroid issues or are pregnant."
  }
];

export const howWeEvaluated = [
  {
    "title": "Active ingredient",
    "description": "We separated chlorine-type tablets from iodine tablets, since taste and suitability differ."
  },
  {
    "title": "Virus claim",
    "description": "We checked which listing states virus removal."
  },
  {
    "title": "Packaging",
    "description": "We looked at foil sealing, bottle splits and tablet counts."
  },
  {
    "title": "Contact time",
    "description": "We noted the wait time that each listing assumes."
  },
  {
    "title": "Cost per treatment",
    "description": "We worked out the cost per tablet and per liter for each pack."
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
    "subheading": "By Trip Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "International travel",
          "Aquatabs 49mg 100-Pack",
          "States 99.99% virus removal."
        ],
        [
          "Backpacking backup",
          "Aquatabs 49mg 100-Pack",
          "Foil-sealed and light."
        ],
        [
          "Budget emergency kit, clear water",
          "Potable Aqua 2-Bottle Pack",
          "Cheap 100 tablets."
        ],
        [
          "Hiking where Giardia is the concern",
          "Potable Aqua 2-Bottle Pack",
          "Names Giardia lamblia."
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
          "Potable Aqua 2-Bottle Pack"
        ],
        [
          "$20 to $30",
          "Aquatabs 49mg 100-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Chlorine-Type vs Iodine",
    "cards": [
      {
        "label": "Chlorine-type",
        "text": "The Aquatabs 49mg 100-Pack avoids iodine taste and states virus removal."
      },
      {
        "label": "Iodine",
        "text": "The Potable Aqua 2-Bottle Pack costs less per tablet but is iodine-based and suited to short-term use."
      }
    ],
    "note": "Most buyers should choose the Aquatabs 49mg 100-Pack unless budget is the only concern."
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
          "Potable Aqua 2-Bottle Pack"
        ],
        [
          "Mid cost, more features",
          "Aquatabs 49mg 100-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "For Backcountry Kits Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated wait time, a stated virus claim and individually sealed tablets."
      },
      {
        "label": "In this comparison",
        "text": "The Aquatabs 49mg 100-Pack states virus removal and has foil-sealed tablets, and the Potable Aqua 2-Bottle Pack gives two bottles of 50."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Aquatabs 49mg 100-Pack if you travel abroad or dislike iodine taste."
      },
      {
        "label": "Save if",
        "text": "Save with the Potable Aqua 2-Bottle Pack if you only need a cheap backup for clear water."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Chlorine or iodine",
    "explanation": "Aquatabs are a chlorine-type tablet, and Potable Aqua is a long-standing iodine tablet. Iodine can leave a taste and is not recommended for some people, such as those with thyroid conditions or who are pregnant. Read the label and choose the active ingredient that suits you."
  },
  {
    "criterion": "Virus claims",
    "explanation": "A tablet should state virus removal if you plan to use it abroad. The Aquatabs 49mg 100-Pack lists 99.99 percent virus removal, and the Potable Aqua listing names Giardia lamblia only. Look for the word virus."
  },
  {
    "criterion": "Contact time",
    "explanation": "A tablet needs time to work, usually 30 minutes or more, and cold water takes longer. Drinking early defeats the point. Set a timer and read the label."
  },
  {
    "criterion": "Cloudy water",
    "explanation": "Tablets do not clear sediment, and particles can shield organisms from the disinfectant. Strain or filter cloudy water first, then treat. Look for the label guidance on turbid water."
  },
  {
    "criterion": "Packaging and shelf life",
    "explanation": "Foil-sealed tablets keep better than loose tablets in a bottle that is opened often. Heat and humidity shorten shelf life. Check the packaging and any date on the label."
  }
];

export const faq = [
  {
    "q": "How long do I wait after dropping in a tablet?",
    "a": "Wait at least 30 minutes, and longer for cold or cloudy water. Follow the label. Do not drink early."
  },
  {
    "q": "Do tablets kill cryptosporidium?",
    "a": "Chlorine and iodine tablets are weak against cryptosporidium, and neither listing here makes that claim. Filter first if it is a concern. Treat tablets as a second layer."
  },
  {
    "q": "Who should avoid iodine tablets?",
    "a": "People with thyroid conditions, iodine allergies, or who are pregnant should avoid them, and use is generally limited to short periods. Check with a doctor. Chlorine-type tablets such as Aquatabs avoid iodine."
  },
  {
    "q": "Can I use tablets in a hydration bladder?",
    "a": "Treat the water in a bottle first, then pour it in. Tablets can leave taste in a bladder. Rinse the bladder after."
  },
  {
    "q": "Do the tablets expire?",
    "a": "They lose strength with heat and humidity. Keep them sealed and cool. The foil strips on the Aquatabs protect each tablet."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Chlorine Water Purification Tablets",
    "href": "/packs-hiking/best-chlorine-water-purification-tablets"
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
