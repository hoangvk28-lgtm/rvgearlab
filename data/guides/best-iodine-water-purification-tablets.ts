export const guideSlug = "best-iodine-water-purification-tablets";
export const guideTitle = "3 Best Iodine Water Purification Tablets in 2026";
export const metaTitle = "Best Iodine Water Purification Tablets in 2026";
export const metaDescription = "Best iodine water purification tablets and the iodine-free alternatives, compared on dose, contact time and taste for hikers and emergency kits.";
export const mainKeyword = "best iodine water purification tablets";
export const introParagraphs = [
  "Few Amazon listings name iodine as the active ingredient, so this guide is honest about what is actually on offer. Potable Aqua is the long-running tablet people associate with iodine, and two chlorine-based tablets cover buyers who want to avoid the iodine taste.",
  "Only three products qualify, so each is explained by dose, wait time and what the listing says it targets. Tablets are a backup treatment for clear water, and they need full contact time before you drink."
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
    "id": "best-iodine-water-purification-tablets-1",
    "rank": 1,
    "badge": "Best for Hiking Kits",
    "name": "Potable Aqua Water Purification Tablets",
    "price": "$12.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51lfUdR5pNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01GPK4LVW?tag=rvgearlab-20",
    "description": "Potable Aqua ships two bottles of 50 tablets. The listing says the tablets make water bacteriologically suitable to drink and work against Giardia lamblia when used as directed.\n\nOf the three picks it is the cheapest per tablet and the only one split across two bottles, so a damp bottle ruins half the supply at most. The listing leaves the active ingredient unnamed, yet this brand is traditionally the iodine option, so read the bottle label for dose and wait time.\n\nA classic for hiking kits and glove boxes where cost and small packaging matter. Clear water works best.",
    "specs": [
      "Two bottles of 50 tablets",
      "Giardia lamblia listed",
      "Bacteriologically suitable water"
    ],
    "pros": [
      "Lowest price for 100 tablets",
      "Two bottles split the supply",
      "Giardia lamblia named on listing",
      "Long-established brand"
    ],
    "cons": [
      "No contact time on listing",
      "Iodine taste and cautions may apply"
    ],
    "bestFor": "Budget hiking kits",
    "take": "The lowest price per tablet here, split across two bottles for a hiking kit.",
    "catch": "The listing does not state contact time or virus removal, and iodine taste is a known trade-off."
  },
  {
    "id": "best-iodine-water-purification-tablets-2",
    "rank": 2,
    "badge": "Best for Large Containers",
    "name": "Aquatabs Water Purification Tablets",
    "price": "$36.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41PR4yq3z3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09FFQN924?tag=rvgearlab-20",
    "description": "The Aquatabs 397mg tablet comes in a pack of 100, and one tablet treats 4 gallons in 30 minutes according to the listing. The maker says the taste, color and odor are not like iodine tablets.\n\nWhere Potable Aqua is sized for bottles, one Aquatabs tablet is sized for a tank or a big jug, so it stretches much farther. It is an iodine-free chlorine tablet, which is the main reason to pick it over the Potable Aqua.\n\nIdeal for van or RV tanks, group trips and emergency barrels where a bottle-sized dose would be fiddly. A hundred tablets last a long time.",
    "specs": [
      "397mg tablet, 100 count",
      "4 gallons in 30 minutes",
      "No iodine taste claim"
    ],
    "pros": [
      "One tablet treats four gallons",
      "100 tablets in the pack",
      "Maker claims no iodine taste",
      "Suits tanks and barrels"
    ],
    "cons": [
      "Too much for a single bottle",
      "Not individually sealed"
    ],
    "bestFor": "RV tanks and group trips",
    "take": "One tablet treats 4 gallons, so a 100 pack covers tanks, jugs and big groups.",
    "catch": "A single tablet is too strong for one bottle, so it is clumsy for solo day hikes."
  },
  {
    "id": "best-iodine-water-purification-tablets-3",
    "rank": 3,
    "badge": "Best Iodine-Free Option",
    "name": "500mg Water Purification Tablets",
    "price": "$33.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31rpFfzSKgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H8XVSZ5Z?tag=rvgearlab-20",
    "description": "Fastimals sells 100 tablets of 500mg NaDCC (sodium dichloroisocyanurate) in a fast-dissolving effervescent form. Directions call for the tablet count that matches your water volume, then a 30 minute rest.\n\nIt is a direct alternative to the Potable Aqua for buyers avoiding iodine, and its dose scales from bottles to larger storage containers. The effervescent tablets are meant to keep taste and odor changes small.\n\nIt suits travelers and families who dislike the taste of iodine and want a single bottle for many uses. The 30-minute wait is spelled out on the listing.",
    "specs": [
      "500mg NaDCC, 100 count",
      "Iodine-free formula",
      "30 minute wait"
    ],
    "pros": [
      "Iodine-free NaDCC formula",
      "Effervescent, dissolves quickly",
      "30 minute wait stated",
      "Works for bottles and containers"
    ],
    "cons": [
      "Costs more than Potable Aqua",
      "Per-gallon dose is not given"
    ],
    "bestFor": "Iodine-free travel kits",
    "take": "An iodine-free NaDCC tablet with a clear 30-minute wait and effervescent dissolving.",
    "catch": "It costs more per tablet than the Potable Aqua and the listing does not give a per-gallon dose."
  }
];

export const howWeEvaluated = [
  {
    "title": "Active ingredient",
    "description": "We separated tablets by what the listing names, since only one is sold on an iodine reputation."
  },
  {
    "title": "Dose and volume",
    "description": "We compared how many liters or gallons one tablet treats."
  },
  {
    "title": "Contact time",
    "description": "We recorded any wait time printed on the listing, because tablets need it before drinking."
  },
  {
    "title": "Taste claims",
    "description": "We noted what each listing says about taste and odor."
  },
  {
    "title": "Packaging",
    "description": "We looked at bottle count and size for a pack or a vehicle."
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
    "subheading": "By Trip",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Solo hike, bottle-sized doses",
          "Potable Aqua 2-Bottle Pack",
          "Two bottles of 50 tablets"
        ],
        [
          "Group or camper tank",
          "Aquatabs 397mg 100 Pack",
          "4 gallons per tablet"
        ],
        [
          "Taste-sensitive family",
          "Fastimals 500mg NaDCC",
          "Iodine-free formula"
        ],
        [
          "Emergency kit on a budget",
          "Potable Aqua 2-Bottle Pack",
          "Lowest cost for 100 tablets"
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
          "$30 to $40",
          "Fastimals 500mg NaDCC"
        ],
        [
          "$30 to $40",
          "Aquatabs 397mg 100 Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Iodine vs Chlorine",
    "cards": [
      {
        "label": "Iodine-based",
        "text": "The Potable Aqua 2-Bottle Pack is the classic iodine option with a strong taste and cautions for pregnancy and thyroid issues."
      },
      {
        "label": "Chlorine-based",
        "text": "The Aquatabs 397mg 100 Pack and Fastimals 500mg NaDCC use chlorine chemistry and avoid iodine taste."
      }
    ],
    "note": "Most people should choose the Fastimals 500mg NaDCC unless low price pushes them to the Potable Aqua 2-Bottle Pack."
  },
  {
    "subheading": "By Container Size",
    "table": {
      "headers": [
        "Container",
        "Recommended pick"
      ],
      "rows": [
        [
          "Water bottle",
          "Fastimals 500mg NaDCC"
        ],
        [
          "Bladder or big jug",
          "Aquatabs 397mg 100 Pack"
        ],
        [
          "Mixed travel kit",
          "Potable Aqua 2-Bottle Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Backcountry Emergency Backup Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated contact time and a sealed bottle that fits in a first-aid kit."
      },
      {
        "label": "In this comparison",
        "text": "The Fastimals 500mg NaDCC states a 30-minute wait, while the Potable Aqua 2-Bottle Pack is the smallest to carry."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Aquatabs 397mg 100 Pack for tanks, or on the Fastimals 500mg NaDCC for iodine-free taste."
      },
      {
        "label": "Save if",
        "text": "Save with the Potable Aqua 2-Bottle Pack if you accept the iodine taste."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Iodine versus chlorine",
    "explanation": "Iodine tablets and chlorine-based tablets such as NaDCC both disinfect water, but they taste different and differ in cautions. Iodine is generally not advised for pregnancy or thyroid conditions, so check with a doctor first. Read the active ingredient on the bottle."
  },
  {
    "criterion": "Contact time",
    "explanation": "Tablets need time to work, often thirty minutes or more in clear water. Cold or cloudy water needs longer. Always follow the label, and note that the Aquatabs and Fastimals listings both state 30 minutes."
  },
  {
    "criterion": "Dose per volume",
    "explanation": "Dose per liter or gallon decides how far a bottle goes. The Aquatabs 397mg tablet treats 4 gallons while many other tablets treat a liter. Check the dose against the container you actually carry."
  },
  {
    "criterion": "What tablets do not remove",
    "explanation": "Tablets do not remove sediment, chemicals or heavy metals. Pre-filter cloudy water through a cloth first. Treat them as a backup beside a filter, not a replacement for it."
  },
  {
    "criterion": "Shelf life and storage",
    "explanation": "Once opened, moisture can spoil tablets. A two-bottle pack such as Potable Aqua limits the damage. Keep them sealed in a dry place and check the date."
  }
];

export const faq = [
  {
    "q": "Are iodine tablets safe for everyone?",
    "a": "No. Iodine is generally not advised for pregnancy, thyroid conditions or iodine sensitivity. Ask a doctor, or choose a chlorine-based tablet such as the Aquatabs 397mg 100 Pack."
  },
  {
    "q": "What mistake do buyers make with tablets?",
    "a": "They drink before the wait is over. Time the full contact period, longer in cold water. Skipping it leaves the treatment unfinished."
  },
  {
    "q": "Is the Fastimals 500mg NaDCC worth it over Potable Aqua?",
    "a": "If taste matters or iodine is a concern, yes. The Potable Aqua 2-Bottle Pack costs less per tablet. Both are backups for clear water."
  },
  {
    "q": "How do I use water purification tablets?",
    "a": "Fill a clean container, add the number of tablets the label gives for the volume, and wait the stated time. Shake gently to help them dissolve. Pour a little through the cap threads so the threads are treated."
  },
  {
    "q": "Do tablets kill everything?",
    "a": "Labels name specific organisms, such as Giardia lamblia on the Potable Aqua listing. They do not remove sediment or chemicals. Use a filter first for cloudy water."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Chlorine Water Purification Tablets",
    "href": "/packs-hiking/best-chlorine-water-purification-tablets"
  },
  {
    "title": "Best Water Purification Tablets",
    "href": "/packs-hiking/best-water-purification-tablets"
  },
  {
    "title": "Best Water Purification Tablets For Drinking Water",
    "href": "/packs-hiking/best-water-purification-tablets-for-drinking-water"
  }
];
