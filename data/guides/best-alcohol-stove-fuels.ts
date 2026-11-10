export const guideSlug = "best-alcohol-stove-fuels";
export const guideTitle = "3 Best Alcohol Stove Fuels in 2026";
export const metaTitle = "Best Alcohol Stove Fuels in 2026";
export const metaDescription = "Best fuels for alcohol and spirit stoves compared on fuel type, listed burn time and intended use, with notes on what each pairs with.";
export const mainKeyword = "best alcohol stove fuels";
export const introParagraphs = [
  "Alcohol stoves are only as good as the fuel you pour in, and the options range from liquid ethanol to gel and solid tablets. Each behaves differently, burns for a different time and suits a different stove.",
  "Three fuels are described clearly enough to compare here. A collapsible solid-fuel stove also showed up in the results, but it is hardware and not fuel, so it is left out."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/kitchen-campfire-skillet.webp";
export const heroImageAlt = "Breakfast cooking in a cast iron skillet over a campfire";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-alcohol-stove-fuels-1",
    "rank": 1,
    "badge": "Best Liquid Fuel",
    "name": "ROUNDFIRE Premium 6 x 1 Liter",
    "price": "$59.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51vX+IJclCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09KXZM2D8?tag=rvgearlab-20",
    "description": "Roundfire Bioethanol is a six-liter pack of six 1-liter bottles of 96 percent ethanol. The listing calls it smokeless, odorless and ash free, and names fireplaces, burners, spirit burners and stoves as uses.\n\nIt is the only liquid ethanol fuel here, so it fits open-cup spirit burners that the gel and tablets do not suit. Against the Swissmar gel it pours easily and can refill an open burner.\n\nIt suits campers with spirit burners and anyone who wants a clean-burning plant-derived fuel. The six-pack means a season of fuel.",
    "specs": [
      "96% ethanol, 6 x 1 liter",
      "Smokeless, odorless, ash free",
      "Spirit burner compatible"
    ],
    "pros": [
      "High-purity 96 percent ethanol",
      "Clean-burning with no ash",
      "Six bottles in one pack",
      "Plant-derived fuel"
    ],
    "cons": [
      "Bulky for backpacking",
      "Highest price in the group"
    ],
    "bestFor": "Spirit burners and stoves",
    "take": "The best pour-in fuel for open-cup alcohol burners.",
    "catch": "Six liters is heavy and costly to carry on foot."
  },
  {
    "id": "best-alcohol-stove-fuels-2",
    "rank": 2,
    "badge": "Best Backpacking Pack",
    "name": "Solid Fuel Tablets Fire Starter",
    "price": "$9.70",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41qla3IVIuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FP54F6MJ?tag=rvgearlab-20",
    "description": "The QPQ Solid Fuel Tablets come as a 20-piece set made from natural paraffin wax. Each tablet burns up to 15 minutes, lights with a match or lighter, and leaves no residue, according to the listing.\n\nThey are named for solid fuel stoves, Esbit-style stoves and tabletop fire pits, and they need no kindling. Unlike liquid fuels they cannot spill in a pack.\n\nThey suit light hikers who want a simple, spill-free fuel for a solid-fuel stove. Twenty tablets cover many short boils.",
    "specs": [
      "20 tablets, 15 min each",
      "Paraffin wax, no residue",
      "Esbit-style stoves"
    ],
    "pros": [
      "No spills in the pack",
      "Lights with a match or lighter",
      "Cheap and compact",
      "Clean burn, no residue"
    ],
    "cons": [
      "Not a liquid alcohol fuel",
      "Short 15 minute burn per tablet"
    ],
    "bestFor": "Solid fuel stoves",
    "take": "Spill-proof fuel for light solo boils.",
    "catch": "They fit solid-fuel stoves, not open-cup liquid burners."
  },
  {
    "id": "best-alcohol-stove-fuels-3",
    "rank": 3,
    "badge": "Best Gel Fuel",
    "name": "Swissmar Fire Gel Refill",
    "price": "$11.85",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41p5q7P967L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0081FK4H0?tag=rvgearlab-20",
    "description": "Swissmar Fire Gel is a 16.9 oz methanol-based fuel gel made in Canada. The listing gives a burn of 45 to 60 minutes, an easy-pour bottle and a nozzle with a fire mitigation device against flashback.\n\nIt burns far longer than the 15 minute tablets, which suits slow simmering. The listing names fondue burners and portable stoves, so it is a fit for gel-rated burners.\n\nIt suits fondue, chafing dish and portable stove users who want a long, steady flame. Indoor and outdoor use is listed.",
    "specs": [
      "16.9 oz methanol-based gel",
      "Burns 45 to 60 minutes",
      "Flashback nozzle"
    ],
    "pros": [
      "Long 45 to 60 minute burn",
      "Easy-pour bottle",
      "Includes a safety pour nozzle",
      "Made in Canada"
    ],
    "cons": [
      "Methanol fumes need ventilation",
      "Not for open-cup burners"
    ],
    "bestFor": "Gel burners and chafing dishes",
    "take": "A long-burning gel for fondue and gel-rated stoves.",
    "catch": "Use only in burners made for gel."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fuel type",
    "description": "We compared liquid, gel and solid options and the stoves each suits."
  },
  {
    "title": "Burn time",
    "description": "We noted listed burn times per fill or tablet."
  },
  {
    "title": "Packaging",
    "description": "We compared sizes and pack formats for travel."
  },
  {
    "title": "Safety features",
    "description": "We checked nozzles, seals and clean-burning claims."
  },
  {
    "title": "Value",
    "description": "We compared price against volume."
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
    "subheading": "By Stove Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Open-cup spirit burner",
          "Roundfire Bioethanol",
          "Liquid 96 percent ethanol."
        ],
        [
          "Solid fuel stove",
          "QPQ Solid Tablets",
          "Tablets fit Esbit-style stoves."
        ],
        [
          "Gel burner or fondue",
          "Swissmar Fire Gel",
          "Gel burns 45 to 60 minutes."
        ],
        [
          "Backpacking",
          "QPQ Solid Tablets",
          "Small, spill-proof tablets."
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
          "QPQ Solid Tablets"
        ],
        [
          "$10 to $20",
          "Swissmar Fire Gel"
        ],
        [
          "$50 to $60",
          "Roundfire Bioethanol"
        ]
      ]
    }
  },
  {
    "subheading": "Liquid vs Solid",
    "cards": [
      {
        "label": "Liquid",
        "text": "Roundfire Bioethanol pours into open burners and gives easy flame control, but spills if tipped."
      },
      {
        "label": "Solid",
        "text": "QPQ Solid Tablets are compact and spill-proof, with a short burn."
      }
    ],
    "note": "Choose Roundfire Bioethanol for car camping and QPQ Solid Tablets for the trail."
  },
  {
    "subheading": "By Burn Length",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Quick boils",
          "QPQ Solid Tablets"
        ],
        [
          "Long simmer",
          "Swissmar Fire Gel"
        ],
        [
          "Flexible pours",
          "Roundfire Bioethanol"
        ],
        [
          "Stockpiling",
          "Roundfire Bioethanol"
        ]
      ]
    }
  },
  {
    "subheading": "For Alcohol Stove Owners Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A fuel your stove is rated for."
      },
      {
        "label": "In this comparison",
        "text": "The Roundfire Bioethanol names spirit burners and stoves."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Roundfire Bioethanol if you cook often."
      },
      {
        "label": "Save if",
        "text": "Save with QPQ Solid Tablets for occasional trips."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fuel form",
    "explanation": "Liquid fuel pours into open burners, gel suits gel-rated burners and solid tablets suit tablet stoves. The wrong pairing is the most common mistake. Match the fuel to your stove."
  },
  {
    "criterion": "Burn time",
    "explanation": "Longer burns mean fewer refills. A tablet burns about 15 minutes, a gel about 45 to 60. Plan fuel for your meals."
  },
  {
    "criterion": "Purity",
    "explanation": "Higher purity ethanol burns cleaner with less soot. The Roundfire Bioethanol lists 96 percent. Check the purity line."
  },
  {
    "criterion": "Packaging",
    "explanation": "Heavy bottles suit car camping, small tablets suit backpacking. Weigh your fuel before a trip. Pack fuel in sealed bags."
  },
  {
    "criterion": "Safety",
    "explanation": "Alcohol flames are hard to see in daylight. Keep fuel away from hot stoves. Refill only when cool."
  }
];

export const faq = [
  {
    "q": "Can I use any alcohol in an alcohol stove?",
    "a": "No. Match the fuel to the stove, because open-cup spirit burners, gel burners and solid-fuel stoves are different designs. The Roundfire Bioethanol names spirit burners, while the gel and tablets suit other burners."
  },
  {
    "q": "Is fire gel safe for camp stoves?",
    "a": "Only in burners made for gel. The Swissmar Fire Gel names fondue burners and portable stoves and includes a flashback nozzle. Keep it away from children and ventilate the area."
  },
  {
    "q": "Are solid tablets better for backpacking?",
    "a": "They are compact and spill-proof, which is why hikers like them. Each QPQ Solid Tablet burns about 15 minutes, so a long meal needs several. Carry a windscreen to save fuel."
  },
  {
    "q": "How do I refill a stove safely?",
    "a": "Wait until the stove is cool, pour away from any flame, and wipe up spills. Never refill a lit or warm stove. Alcohol flames can be hard to see in daylight."
  },
  {
    "q": "How should I store alcohol fuel?",
    "a": "Keep it sealed in its original bottle, away from heat and children. Do not decant it into drink containers. Store it outside living space when possible."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Cookpots",
    "href": "/camp-kitchen/best-backpacking-cookpots"
  },
  {
    "title": "Best Backpacking Stoves",
    "href": "/camp-kitchen/best-backpacking-stoves"
  },
  {
    "title": "Best Camping Coffee",
    "href": "/camp-kitchen/best-camping-coffee"
  },
  {
    "title": "Best Camping Coffeemakers",
    "href": "/camp-kitchen/best-camping-coffeemakers"
  }
];
