export const guideSlug = "best-lithium-battery-camping-fans";
export const guideTitle = "3 Best Lithium Battery Camping Fans in 2026";
export const metaTitle = "Best Lithium Battery Camping Fans in 2026";
export const metaDescription = "Best lithium battery camping fans compared on named battery chemistry, capacity, build and weather rating, with notes on what listings do not state.";
export const mainKeyword = "best lithium battery camping fans";
export const introParagraphs = [
  "Most rechargeable camping fans use lithium-based packs, yet few listings name the chemistry outright. This guide leads with the one fan that says lithium-ion and adds two rechargeable fans for comparison, and it says plainly where the chemistry goes unstated.",
  "The picks were compared on named battery type, capacity, runtime, build and weather rating. Few listings spell out the cell chemistry, so a buyer should confirm it with the maker."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/power-station-campsite.webp";
export const heroImageAlt = "Jeep camp with a tent, solar panels and a portable power station at a pine forest campsite";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-lithium-battery-camping-fans-1",
    "rank": 1,
    "badge": "Best Named Lithium",
    "name": "iLiving 18\" Rechargeable Battery Operated Camping Floor Fan",
    "price": "$97.63",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/513OLp95I3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BZBQMNVP?tag=rvgearlab-20",
    "description": "The iLiving 18 inch floor fan lists a built-in lithium-ion battery pack that lasts through the day, a full metal casing, metal fan guards and a metal blade for high air volume. It has an IPX4 indoor and outdoor rating and a USB port for phones.\n\nIt is the only pick that names lithium-ion and it is also the largest fan, at 18 inches. It costs more than twice the others, which reflects the metal build.\n\nIt suits campers and workshop users who want a high-volume floor fan with a rated body. Local customer service is listed.",
    "specs": [
      "Built-in lithium-ion pack",
      "18 inch metal blade and casing",
      "IPX4 rating, USB port"
    ],
    "pros": [
      "Names lithium-ion battery outright",
      "Metal build resists knocks",
      "IPX4 rating for splashes",
      "USB port charges phones"
    ],
    "cons": [
      "Priciest fan in the list",
      "Capacity and runtime are not stated here"
    ],
    "bestFor": "Large floor-fan cooling",
    "take": "The one fan here that names its lithium-ion pack, in a rugged metal body.",
    "catch": "The listing gives no mAh or hours figure, so confirm runtime before relying on it."
  },
  {
    "id": "best-lithium-battery-camping-fans-2",
    "rank": 2,
    "badge": "Best Capacity",
    "name": "FRIZCOL 3-in-1 Camping Fan",
    "price": "$29.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51fuC7He8AL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HCBFW1ZK?tag=rvgearlab-20",
    "description": "The FRIZCOL fits 24,000mAh of rechargeable cells into its body and quotes 11 to 60 hours of use. Four speeds, a 3950 rpm motor, sub-30 dB noise, three timers and a two-level lamp make it a full-featured tent fan.\n\nIt has the largest named capacity here and a clear runtime range, which the iLiving does not give. The listing says advanced cell technology and does not name the chemistry.\n\nIt suits campers who want a big rechargeable pack at a low price. Timers keep it from running all night.",
    "specs": [
      "24,000mAh, 11 to 60 hours",
      "Under 30 dB, 3950 rpm",
      "3 timers, 2 LED levels"
    ],
    "pros": [
      "Largest named capacity here",
      "Quiet at under 30 dB",
      "Three timers for sleep",
      "Low price for a big pack"
    ],
    "cons": [
      "Battery chemistry is not named",
      "Wide runtime range"
    ],
    "bestFor": "Big rechargeable pack on a budget",
    "take": "A large rechargeable pack at the lowest price here.",
    "catch": "Ask the maker which chemistry the pack uses."
  },
  {
    "id": "best-lithium-battery-camping-fans-3",
    "rank": 3,
    "badge": "Best Extras",
    "name": "3 in 1 Battery Powered Fan with Bluetooth Speaker",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51F1gxdijDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GXVDDMP6?tag=rvgearlab-20",
    "description": "The HZTzone lists a 20,000mAh battery with up to 20 hours of airflow, a Type-C input, a USB output and a hand crank. It adds an FM radio, white and RGB lighting, 7 blades with a brushless motor and a twist-off grille.\n\nIt offers a hand crank backup that neither the iLiving nor the FRIZCOL has. The listing does not name the battery chemistry.\n\nIt suits campers who want a rechargeable fan with radio and lighting extras. The Type-C input matches modern cables.",
    "specs": [
      "20,000mAh, 20 hours",
      "Hand crank and Type-C input",
      "FM radio, white and RGB light"
    ],
    "pros": [
      "Hand crank gives a backup charge",
      "Type-C charging input",
      "Radio and two light modes",
      "Brushless motor with 7 blades"
    ],
    "cons": [
      "Battery chemistry is not named",
      "Extras shorten battery life"
    ],
    "bestFor": "Fan with radio and crank",
    "take": "A rechargeable fan with a crank and entertainment extras.",
    "catch": "Chemistry is not named, so confirm it with the maker."
  }
];

export const howWeEvaluated = [
  {
    "title": "Named chemistry",
    "description": "Listings naming lithium-ion were separated from those that only say rechargeable."
  },
  {
    "title": "Capacity",
    "description": "Listed mAh figures were compared."
  },
  {
    "title": "Build",
    "description": "Metal and ABS bodies were compared."
  },
  {
    "title": "Weather rating",
    "description": "IPX4 and unrated listings were noted."
  },
  {
    "title": "Extras",
    "description": "USB ports, cranks and lights were noted."
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
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Named lithium-ion and a rated body",
          "iLiving 18in Lithium Floor Fan",
          "Names lithium-ion and IPX4."
        ],
        [
          "Maximum capacity",
          "FRIZCOL 24000mAh Fan",
          "24,000mAh at a low price."
        ],
        [
          "Extras and backup charging",
          "HZTzone 3-in-1 Fan",
          "Hand crank and radio."
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
          "FRIZCOL 24000mAh Fan"
        ],
        [
          "$30 to $40",
          "HZTzone 3-in-1 Fan"
        ],
        [
          "$90 to $100",
          "iLiving 18in Lithium Floor Fan"
        ]
      ]
    }
  },
  {
    "subheading": "Floor Fan vs Tent Fan",
    "cards": [
      {
        "label": "Floor fan",
        "text": "The iLiving 18in Lithium Floor Fan moves a lot of air at 18 inches and suits open spaces."
      },
      {
        "label": "Tent fan",
        "text": "The FRIZCOL 24000mAh Fan and HZTzone 3-in-1 Fan hang or stand in a tent."
      }
    ],
    "note": "Most campers should take a tent fan like the FRIZCOL 24000mAh Fan unless they need floor-fan volume."
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
          "Around $30",
          "FRIZCOL 24000mAh Fan"
        ],
        [
          "Around $40",
          "HZTzone 3-in-1 Fan"
        ],
        [
          "Around $98",
          "iLiving 18in Lithium Floor Fan"
        ]
      ]
    }
  },
  {
    "subheading": "Cold-Weather Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A named chemistry and a charging temperature range."
      },
      {
        "label": "In this comparison",
        "text": "The iLiving 18in Lithium Floor Fan names lithium-ion, and the other two list rechargeable packs with unstated chemistry."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the iLiving 18in Lithium Floor Fan if you want a named lithium-ion pack, a metal body and an IPX4 rating."
      },
      {
        "label": "Save if",
        "text": "Save with the FRIZCOL 24000mAh Fan if you only need a big rechargeable pack and not a named chemistry."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Named chemistry",
    "explanation": "A listing that says lithium-ion tells you the pack type, while rechargeable battery alone does not. Lithium-ion packs are light and hold charge in storage. Look for the chemistry name in the first bullets."
  },
  {
    "criterion": "Charging temperature",
    "explanation": "Lithium packs should not be charged below freezing, and heat shortens their life. Charge indoors in cold weather. Check the manual for a charging range."
  },
  {
    "criterion": "Capacity and runtime",
    "explanation": "The mAh figure is only half the story, since runtime depends on motor draw. A 24,000mAh fan lists 11 to 60 hours. Compare hours at low and high speed."
  },
  {
    "criterion": "Weather rating",
    "explanation": "IPX4 handles splashes, and unrated fans need shelter. Look for the code. A metal body adds weight."
  },
  {
    "criterion": "Storage care",
    "explanation": "Lithium packs last longer stored at about half charge in a cool place. Top them up every few months. Do not leave a fan in a hot car."
  }
];

export const faq = [
  {
    "q": "Are all rechargeable camping fans lithium?",
    "a": "Most use lithium-based packs, but many listings do not say. The iLiving 18in Lithium Floor Fan names lithium-ion outright. Ask the maker if chemistry matters."
  },
  {
    "q": "What mistake do buyers make?",
    "a": "Charging a lithium pack in freezing weather. It can damage the cells. Charge indoors."
  },
  {
    "q": "Is a named lithium pack worth paying for?",
    "a": "If you care about storage life and safety, a named chemistry is reassuring. For casual use, a large pack is enough. See the large battery fans guide."
  },
  {
    "q": "How do I charge it?",
    "a": "Use the supplied cable and a regulated adapter. The HZTzone 3-in-1 Fan accepts Type-C. Unplug when full."
  },
  {
    "q": "How do I store it?",
    "a": "Keep it cool and dry at about half charge. Top up every few months. Keep it out of a hot car."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Portable Solar Panels",
    "href": "/camp-power/best-portable-solar-panels"
  },
  {
    "title": "Best Power Station",
    "href": "/camp-power/best-power-station"
  },
  {
    "title": "Best Solar Power Bank",
    "href": "/camp-power/best-solar-power-bank"
  },
  {
    "title": "Best Portable Solar Panels For Home",
    "href": "/camp-power/best-portable-solar-panels-for-home"
  }
];
