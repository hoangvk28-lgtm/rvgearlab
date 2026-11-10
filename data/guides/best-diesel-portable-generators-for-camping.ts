export const guideSlug = "best-diesel-portable-generators-for-camping";
export const guideTitle = "2 Best Diesel Portable Generators For Camping in 2026";
export const metaTitle = "Best Diesel Portable Generators For Camping";
export const metaDescription = "Two diesel portable generators sized for large rigs and remote camps, compared on watts, tank size, outlets and start features, with plain notes on cost.";
export const mainKeyword = "best diesel portable generators for camping";
export const introParagraphs = [
  "Diesel generators are rare in camping because they are heavy and expensive, so only two listings fit this list. Both are jobsite-grade machines with Yanmar engines that suit big motorhomes, base camps and long off-grid stays more than a weekend tent.",
  "They were compared on stated starting watts, tank size, runtime, outlets, start system and safety shutoffs. Neither listing states a weight or a CO sensor, so both need careful placement and a plan for moving them."
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
    "id": "best-diesel-portable-generators-for-camping-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Generac 5",
    "price": "$4249.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TnmP5lzlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B010T243GU?tag=rvgearlab-amz-20",
    "description": "The Generac XD5000E lists 5,500 starting watts from a Yanmar LW series 435cc air-cooled direct injection diesel engine. A 12 gallon tank is said to give 32.4 hours of run time at 50 percent load, total harmonic distortion is 6 percent, and the steel frame has a lifting eye and a 1-1/4 inch steel cradle.\n\nIt has the larger tank and the much longer runtime claim, and it costs well below the Energypac. Against the Energypac, it adds a lifting eye and a stated THD figure.\n\nIt suits large rig owners and remote base camps that want days of runtime from a single fill. The 6 percent THD figure suits tools and most appliances.",
    "specs": [
      "5,500 starting watts, Yanmar LW 435cc",
      "12 gal, 32.4 h at 50% load",
      "6% THD, steel cradle, lifting eye"
    ],
    "pros": [
      "32.4 hour runtime at half load",
      "12 gallon diesel tank",
      "Yanmar air-cooled engine",
      "Lifting eye for moving it"
    ],
    "cons": [
      "Weight is not listed",
      "Outlet types are not listed in the main bullets"
    ],
    "bestFor": "Remote base camps and large rigs",
    "take": "A long-running diesel with a huge tank and a Yanmar engine.",
    "catch": "It is an industrial machine, and its weight and outlets are not printed."
  },
  {
    "id": "best-diesel-portable-generators-for-camping-2",
    "rank": 2,
    "badge": "Best Outlets and Start",
    "name": "6KW Diesel Generator",
    "price": "$5871.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+wW-R-YRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FN12DL7K?tag=rvgearlab-amz-20",
    "description": "The Energypac is a 6KW diesel generator with a Yanmar L100 9.3HP air-cooled engine, electric start with a recoil backup, an automatic voltage regulator and a 3.5 gallon tank with about 8 hours of run time. Outlets include a 120V duplex, a 120V 30A twist-lock, a 240V 20A twist-lock and a 12V DC receptacle at 8.3A.\n\nIt lists a 6KW rating and a full outlet panel, with a battery and a roll bar skid included. Compared with the Generac, it has a much smaller tank and costs more.\n\nIt suits RV owners who want a 30 amp twist-lock and 240V outlet plus electric start. A key switch and low oil shutdown are listed.",
    "specs": [
      "6KW diesel, Yanmar L100 9.3HP",
      "Electric start with recoil backup",
      "120V 30A, 240V 20A, 12V DC outlets"
    ],
    "pros": [
      "6KW rating with a full outlet panel",
      "Electric start plus recoil",
      "Automatic voltage regulator",
      "Low oil shutdown and key switch"
    ],
    "cons": [
      "Small 3.5 gallon tank, about 8 hours",
      "Priciest unit on the list"
    ],
    "bestFor": "A 30 amp twist-lock RV feed",
    "take": "A 6KW diesel with electric start and a full outlet panel.",
    "catch": "A 3.5 gallon tank means refueling after about 8 hours."
  }
];

export const howWeEvaluated = [
  {
    "title": "Power rating",
    "description": "Stated starting watts and kilowatts were compared."
  },
  {
    "title": "Tank and runtime",
    "description": "Tank size and runtime claims were compared."
  },
  {
    "title": "Outlets",
    "description": "Printed outlet types were compared for RV use."
  },
  {
    "title": "Start and safety",
    "description": "Electric start, recoil and shutoffs were noted."
  },
  {
    "title": "Practicality",
    "description": "Missing weights and CO sensors were flagged."
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
          "Longest runtime",
          "Generac XD5000E",
          "32.4 hours at half load."
        ],
        [
          "30 amp twist-lock and 240V",
          "Energypac 6KW",
          "Full outlet panel."
        ],
        [
          "Electric start",
          "Energypac 6KW",
          "Electric start with recoil backup."
        ],
        [
          "Lower price",
          "Generac XD5000E",
          "Lower cost than the Energypac."
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
          "$4240 to $4250",
          "Generac XD5000E"
        ],
        [
          "$5870 to $5880",
          "Energypac 6KW"
        ]
      ]
    }
  },
  {
    "subheading": "Big Tank vs Big Outlet Panel",
    "cards": [
      {
        "label": "Big tank",
        "text": "Long runtime from one fill with a lower price. The Generac XD5000E is in this group."
      },
      {
        "label": "Big outlet panel",
        "text": "More kilowatts and RV-friendly outlets with a small tank. The Energypac 6KW is in this group."
      }
    ],
    "note": "Most remote campers should pick the Generac XD5000E for runtime."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lower",
          "Generac XD5000E"
        ],
        [
          "Higher",
          "Energypac 6KW"
        ]
      ]
    }
  },
  {
    "subheading": "Remote Base Camps",
    "cards": [
      {
        "label": "Look for",
        "text": "A large tank, a durable engine and a plan for CO and weight."
      },
      {
        "label": "In this comparison",
        "text": "The Generac XD5000E lists 32.4 hours at 50 percent load from a 12 gallon tank."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Energypac 6KW for electric start and a 30 amp twist-lock outlet."
      },
      {
        "label": "Save if",
        "text": "Save with the Generac XD5000E if runtime matters more than outlets."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Why diesel",
    "explanation": "Diesel burns less fuel per kilowatt-hour than gasoline and the engines last long under steady load. It also stores better than gasoline. Diesel units cost more and weigh more, so match the machine to the stay."
  },
  {
    "criterion": "Watts and tank",
    "explanation": "A 12 gallon tank at 50 percent load gives about 32 hours, which can run a camp for days. A 3.5 gallon tank gives about 8 hours. Check the tank and the load used in the runtime claim."
  },
  {
    "criterion": "Outlet match",
    "explanation": "A 30 amp RV needs a twist-lock outlet and cord or an adapter. A mismatch means buying an adapter. Look at the outlet list on the listing and match your RV's plug."
  },
  {
    "criterion": "Carbon monoxide",
    "explanation": "Diesel exhaust also contains carbon monoxide. Run it outdoors at least 20 feet from tents, windows and vents, with the exhaust pointed away. Neither listing states a CO sensor."
  },
  {
    "criterion": "Weight and moving",
    "explanation": "Industrial diesels often weigh well over 100 pounds. A lifting eye or roll bar helps with hoists and trailers. Check the shipping weight before buying."
  }
];

export const faq = [
  {
    "q": "Are diesel generators good for camping?",
    "a": "For large rigs and remote camps, yes. For small campsites they are heavy and costly. Both picks here are jobsite-grade."
  },
  {
    "q": "What is the biggest mistake with diesel generators?",
    "a": "Underestimating weight and placement. Plan how you will move it, and keep it outdoors away from tents."
  },
  {
    "q": "Is the Energypac worth it over the Generac?",
    "a": "If you want electric start and a 30 amp twist-lock, yes. Otherwise the Generac XD5000E costs less and runs longer."
  },
  {
    "q": "How do I start a diesel generator?",
    "a": "Check oil and fuel, turn the key, and let it warm. The Energypac 6KW has electric start with recoil backup."
  },
  {
    "q": "How do I store diesel fuel?",
    "a": "Use approved containers, keep fuel clean and use stabilizer for long storage. Cold weather can gel diesel, so use winter fuel."
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
