export const guideSlug = "best-5-person-ultralight-tents";
export const guideTitle = "2 Best 5 Person Ultralight Tents in 2026";
export const metaTitle = "Best 5 Person Ultralight Tents in 2026";
export const metaDescription = "Best 5-person ultralight tents compared on stated capacity, weight clues, fabric and setup, for groups who want to keep a large shelter as light as possible.";
export const mainKeyword = "best 5 person ultralight tents";
export const introParagraphs = [
  "Almost no brand makes a true five-person ultralight tent, and only one listing here uses ultralight language at all. That leaves a short list where the honest question is how light a shelter for five can realistically get.",
  "Two picks made the list, a premium five-person backpacking tent from a big-name ultralight line and a five-pound pop-up shade shelter. They are very different tools, and each was compared on listed capacity, weight clues and fabric."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-camper-by-tent.webp";
export const heroImageAlt = "Camper standing next to a tent at a campsite";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-5-person-ultralight-tents-1",
    "rank": 1,
    "badge": "Best True Ultralight",
    "name": "Big Agnes Copper Spur UL",
    "price": "$949.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41D9fu6rsLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DSLZ2MYX?tag=rvgearlab-20",
    "description": "The Big Agnes Copper Spur UL is a five-person freestanding backpacking tent from a line that uses HyperBead fabric technology. Awning-style doors, the TipLok buckle that combines pole-tip capture with fly attachment and stake-out, and interior pockets round out the design.\n\nIt is the only pick sold as a backpacking tent, and it is the only one built around a high-volume freestanding frame. The Oileus is far cheaper and lighter, and it works as a shade shelter rather than a backpacking tent.\n\nIt suits groups of up to five who split the load and pay for low weight and weather protection. Awning doors give a protected entry in rain.",
    "specs": [
      "Five-person freestanding",
      "HyperBead fabric technology",
      "TipLok buckle, awning doors"
    ],
    "pros": [
      "Real ultralight line design",
      "Freestanding with generous volume",
      "Awning doors protect the entry",
      "Interior pockets for small gear"
    ],
    "cons": [
      "Price near the top of any tent",
      "No packed weight in the listing"
    ],
    "bestFor": "Groups that split the carry",
    "take": "The only true backpacking tent for five on this list.",
    "catch": "The price is high and the weight is not stated, so check the spec sheet."
  },
  {
    "id": "best-5-person-ultralight-tents-2",
    "rank": 2,
    "badge": "Best Light Shade Shelter",
    "name": "Oileus XX-Large 5-6 Person Waterproof Pop-Up Beach Tent",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bPnNWJw-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09Y1MBMYY?tag=rvgearlab-20",
    "description": "The Oileus is a pop-up shelter labeled for 5 to 6 people that weighs about 5 lbs and folds in under 30 seconds. It measures 98.4 by 55 by 58 inches, with 210T polyester at a 3000mm PU rating and 9mm fiberglass poles.\n\nIt is far lighter than any tent for five and a small fraction of the Big Agnes price. The tradeoff is a shade shelter shape with an awning in place of a vestibule.\n\nIt suits a group that wants a light, fast shelter for a day trip, a beach or a trailhead. An awning and three windows help with airflow.",
    "specs": [
      "5 to 6 person, about 5 lbs",
      "210T polyester, PU3000mm",
      "9mm fiberglass poles"
    ],
    "pros": [
      "Only about 5 lbs",
      "Folds in under 30 seconds",
      "Awning and three windows",
      "Large capacity for the price"
    ],
    "cons": [
      "A shade shelter more than a bed",
      "Not built for backpacking nights"
    ],
    "bestFor": "Day trips with a crowd",
    "take": "A five-pound shelter for a crowd, if all you need is shade.",
    "catch": "The floor and wind rating suit day use, not nights in a storm."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "How the listing counts five."
  },
  {
    "title": "Weight clues",
    "description": "Listed weight or line name."
  },
  {
    "title": "Fabric",
    "description": "Ultralight or standard."
  },
  {
    "title": "Pole system",
    "description": "Aluminum or fiberglass."
  },
  {
    "title": "Weather",
    "description": "Waterproof numbers."
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
          "Five-person backpacking night",
          "Big Agnes Copper Spur UL 5",
          "True backpacking tent."
        ],
        [
          "Day trip with shade",
          "Oileus 5-6 Person Pop-Up",
          "About 5 lbs."
        ],
        [
          "Rain and wind",
          "Big Agnes Copper Spur UL 5",
          "Awning doors and full fly."
        ],
        [
          "Cheapest light shelter",
          "Oileus 5-6 Person Pop-Up",
          "Low price."
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
          "$80 to $90",
          "Oileus 5-6 Person Pop-Up"
        ],
        [
          "$940 to $950",
          "Big Agnes Copper Spur UL 5"
        ]
      ]
    }
  },
  {
    "subheading": "Tent vs Shade Shelter",
    "cards": [
      {
        "label": "Tent",
        "text": "Gives a floor, fly and weather cover. The Big Agnes Copper Spur UL 5 is the example."
      },
      {
        "label": "Shade shelter",
        "text": "Gives quick cover and low weight. The Oileus 5-6 Person Pop-Up works this way."
      }
    ],
    "note": "Take the Big Agnes Copper Spur UL 5 for nights out and the Oileus 5-6 Person Pop-Up for days."
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
          "About $90",
          "Oileus 5-6 Person Pop-Up"
        ],
        [
          "Around $950",
          "Big Agnes Copper Spur UL 5"
        ],
        [
          "Splitting weight",
          "Big Agnes Copper Spur UL 5"
        ],
        [
          "Single carrier",
          "Oileus 5-6 Person Pop-Up"
        ]
      ]
    }
  },
  {
    "subheading": "For Group Backpackers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A five-person label, a freestanding frame and a listed ultralight line."
      },
      {
        "label": "In this comparison",
        "text": "The Big Agnes Copper Spur UL 5 is a five-person freestanding backpacking tent."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Big Agnes Copper Spur UL 5 if you plan overnight trips with five people. It is the only real tent here."
      },
      {
        "label": "Save if",
        "text": "Save with the Oileus 5-6 Person Pop-Up if you only need shade. It weighs about 5 lbs."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Define ultralight",
    "explanation": "Ultralight usually means a very low weight per person, and five-person tents rarely reach it. A listing that gives no weight cannot be called ultralight on its own. Look for an actual number in ounces or pounds."
  },
  {
    "criterion": "Split the load",
    "explanation": "A five-person tent is best carried by several hikers who each take a part. Poles, fly and body can be divided. Check whether the tent breaks into parts."
  },
  {
    "criterion": "Check the fabric tech",
    "explanation": "Lighter fabrics such as the HyperBead coating sacrifice some toughness for weight. They need a footprint and careful use. Read the care notes."
  },
  {
    "criterion": "Compare capacity honestly",
    "explanation": "Five sleeping pads side by side need about 125 inches of width. Most tents for five are tight. Compare the floor width."
  },
  {
    "criterion": "Match the shelter to the trip",
    "explanation": "A shade shelter is light and useless in a storm. A backpacking tent protects but weighs and costs more. Choose based on nights out."
  }
];

export const faq = [
  {
    "q": "Do five-person ultralight tents exist?",
    "a": "Rarely. The Big Agnes Copper Spur UL 5 is the closest real tent here. Most light shelters sleep two or three."
  },
  {
    "q": "What is the common mistake?",
    "a": "Reading a capacity number as comfort. Five people fit only as a tight row. Plan for four with gear."
  },
  {
    "q": "Is the Big Agnes worth the price?",
    "a": "For repeated backpacking trips with a group, it can be. For occasional use a heavier tent costs far less."
  },
  {
    "q": "How do I carry it?",
    "a": "Split poles, fly and body across hikers. Pack the fabric loosely. Stuff sacks help."
  },
  {
    "q": "How do I protect the fabric?",
    "a": "Use a footprint, avoid sharp rocks and dry fully before packing. Check seams. Store loosely."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Tents",
    "href": "/tents-shelter/best-backpacking-tents"
  },
  {
    "title": "Best Camping Tents",
    "href": "/tents-shelter/best-camping-tents"
  },
  {
    "title": "Best Tent Stakes",
    "href": "/tents-shelter/best-tent-stakes"
  },
  {
    "title": "Best 4 Season Tent Under 200",
    "href": "/tents-shelter/best-4-season-tent-under-200"
  }
];
