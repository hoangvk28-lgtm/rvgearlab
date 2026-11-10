export const guideSlug = "best-water-purification-tablets-for-hiking";
export const guideTitle = "3 Best Water Purification Tablets For Hiking in 2026";
export const metaTitle = "Best Water Purification Tablets For Hiking";
export const metaDescription = "Best water purification tablets for hiking: Aquatabs 49mg foil strips, a 397mg bulk bottle and Potable Aqua compared on weight, dose and stated pathogen claims.";
export const mainKeyword = "best water purification tablets for hiking";
export const introParagraphs = [
  "Tablets are the lightest water treatment a hiker can carry, and three distinct products fit this need. Two are Aquatabs, in a 49mg foil-strip format and a 397mg bulk format, and one is the older Potable Aqua bottle.",
  "We ordered them by documentation and trail practicality. Every tablet needs contact time, and cloudy water needs filtering first."
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
    "id": "best-water-purification-tablets-for-hiking-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Aquatabs 49mg Water Purification Tablets",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iPR-3+5aL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09FRBSKC7?tag=rvgearlab-amz-20",
    "description": "The Aquatabs 49mg 50-Pack arrives in individually sealed foil strips. Its page states both bacteria and virus removal, at 99.9999 and 99.99 percent, and adds that treated water avoids the harsh flavor of iodine products.\n\nThe strips keep tablets dry in a pack, which a loose bottle cannot match. One 49mg tablet treats a small volume, so it fits a bottle rather than a tank.\n\nIt suits backpackers who want a light backup with documented claims. Pair it with a filter for silty water.",
    "specs": [
      "49mg foil-strip tablets",
      "Bacteria and virus removal stated",
      "No unpleasant taste or odor"
    ],
    "pros": [
      "Foil strips keep tablets dry",
      "Virus and bacteria removal stated",
      "No iodine taste",
      "Weighs almost nothing"
    ],
    "cons": [
      "Does not remove silt",
      "Small dose needs counting per bottle"
    ],
    "bestFor": "Backpackers wanting a documented backup",
    "take": "Light, sealed and documented, the one to carry in a first-aid pouch.",
    "catch": "Silt and grit stay in the water, so strain cloudy sources first."
  },
  {
    "id": "best-water-purification-tablets-for-hiking-2",
    "rank": 2,
    "badge": "Best Budget",
    "name": "Potable Aqua Water Purification Treatment",
    "price": "$8.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4143T43Jt4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B001949TKS?tag=rvgearlab-amz-20",
    "description": "Potable Aqua is a 50-tablet bottle that the listing says is effective against Giardia lamblia when used as directed. It makes questionable water bacteriologically suitable to drink for camping, hiking and travel.\n\nIt is the cheapest per bottle here and has a long history as a hiker's backup. The page names Giardia and does not state viruses, unlike the Aquatabs pages.\n\nIt suits budget hikers who drink from clear sources. Read the label for iodine cautions.",
    "specs": [
      "50-tablet bottle",
      "Effective against Giardia lamblia",
      "Bacteriologically suitable water"
    ],
    "pros": [
      "Lowest price per bottle",
      "Names Giardia lamblia",
      "Long-established tablet",
      "Small enough for a day pack"
    ],
    "cons": [
      "Virus removal is not stated",
      "Open bottle gets damp"
    ],
    "bestFor": "Budget hikers on clear sources",
    "take": "A cheap, known name for clear backcountry water.",
    "catch": "The page does not claim viruses, and an open bottle is less protected than foil strips."
  },
  {
    "id": "best-water-purification-tablets-for-hiking-3",
    "rank": 3,
    "badge": "Best for Groups",
    "name": "Aquatabs Water Purification Tablets",
    "price": "$36.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41PR4yq3z3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09FFQN924?tag=rvgearlab-amz-20",
    "description": "Each 397mg tablet in this 100-pack is stated to treat 4 gallons in 30 minutes. A bullet on the listing even calls it a hiking water purifier for backpacking use.\n\nOne tablet treats a whole four gallons, which is far more than a hiker's bottle needs. It makes more sense for groups and base camps than for a solo hike.\n\nIt suits scout troops and base-camp groups who treat large containers. A hundred tablets last a long season.",
    "specs": [
      "397mg tablet, 100 count",
      "Treats 4 gallons in 30 minutes",
      "No iodine taste or odor"
    ],
    "pros": [
      "Treats four gallons per tablet",
      "100 count lasts a season",
      "No iodine aftertaste",
      "Good for group containers"
    ],
    "cons": [
      "Too strong for a single bottle",
      "Bulkier than foil strips"
    ],
    "bestFor": "Groups and base camps",
    "take": "A large-dose tablet for groups with big containers.",
    "catch": "One tablet is far more than a solo bottle needs."
  }
];

export const howWeEvaluated = [
  {
    "title": "Pathogens named",
    "description": "We compared which pages name bacteria, viruses and Giardia."
  },
  {
    "title": "Format",
    "description": "We weighed sealed strips against open bottles for trail use."
  },
  {
    "title": "Dose",
    "description": "We noted the volume each tablet treats."
  },
  {
    "title": "Taste",
    "description": "We checked claims about taste and odor."
  },
  {
    "title": "Weight",
    "description": "We considered how little each option adds to a pack."
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
          "Solo hike with one bottle",
          "Aquatabs 49mg 50-Pack",
          "Foil strips with a small dose"
        ],
        [
          "Budget day hikes",
          "Potable Aqua 50",
          "Low price per bottle"
        ],
        [
          "Scout troop or base camp",
          "Aquatabs 397mg 100-Pack",
          "One tablet treats four gallons"
        ],
        [
          "Backup for a filter",
          "Aquatabs 49mg 50-Pack",
          "Virus and bacteria removal stated"
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
          "$0 to $10",
          "Potable Aqua 50"
        ],
        [
          "$10 to $20",
          "Aquatabs 49mg 50-Pack"
        ],
        [
          "$30 to $40",
          "Aquatabs 397mg 100-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Foil Strips vs Bottle",
    "cards": [
      {
        "label": "Foil Strips",
        "text": "The Aquatabs 49mg 50-Pack seals each tablet and keeps it dry in a pack."
      },
      {
        "label": "Bottle",
        "text": "Potable Aqua 50 and Aquatabs 397mg 100-Pack come in bottles that let in air and humidity once opened."
      }
    ],
    "note": "Choose the Aquatabs 49mg 50-Pack for most hikes, and the 397mg bottle only for groups."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest cost",
          "Potable Aqua 50"
        ],
        [
          "Best paperwork",
          "Aquatabs 49mg 50-Pack"
        ],
        [
          "Most tablets",
          "Aquatabs 397mg 100-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Backcountry Streams Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for sealed packaging, a stated pathogen list and a clear dose."
      },
      {
        "label": "In this comparison",
        "text": "The Aquatabs 49mg 50-Pack lists foil strips and viruses, and the Potable Aqua 50 names Giardia."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Aquatabs 49mg 50-Pack for sealed strips and a documented claim."
      },
      {
        "label": "Save if",
        "text": "Save with the Potable Aqua 50 for clear water on short trips."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Dose per bottle",
    "explanation": "A 49mg tablet treats a bottle and a 397mg tablet treats four gallons. Hikers carrying one bottle waste the larger dose. Check the volume on the label."
  },
  {
    "criterion": "Foil or bottle",
    "explanation": "Foil strips keep each tablet dry, and open bottles let humidity in. Damp tablets go stale. Look at the packaging description."
  },
  {
    "criterion": "Contact time",
    "explanation": "Tablets need time, often 30 minutes, and cold water needs more. Plan stops around the wait. Read the label for your water."
  },
  {
    "criterion": "Pathogen claims",
    "explanation": "Pages differ on viruses, bacteria and Giardia. The Aquatabs pages state viruses and bacteria, and Potable Aqua names Giardia. Match the claim to your trip."
  },
  {
    "criterion": "Silty water",
    "explanation": "Tablets work poorly in cloudy water. Strain it through a bandana first. A filter plus tablets is the strongest combination."
  }
];

export const faq = [
  {
    "q": "Can tablets replace a filter on a hike?",
    "a": "They treat the germs but not silt. A filter plus tablets covers both, and the Aquatabs pages state viruses."
  },
  {
    "q": "What mistake do hikers make with tablets?",
    "a": "Not waiting. Contact time is not optional, and cold water needs longer."
  },
  {
    "q": "Is the Aquatabs 397mg worth it for solo hiking?",
    "a": "Usually not, since its dose is built for four gallons. The 49mg strips fit a bottle."
  },
  {
    "q": "How do I carry tablets?",
    "a": "Keep them in their foil or sealed bottle inside a zip bag. Moisture ruins them."
  },
  {
    "q": "Do tablets change taste?",
    "a": "Aquatabs pages state no unpleasant taste or odor. Potable Aqua pages mention iodine taste, so a taste fix may be needed."
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
