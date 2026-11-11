export const guideSlug = "best-extension-cords-under-20";
export const guideTitle = "6 Best Extension Cords Under 20 in 2026";
export const metaTitle = "Best Extension Cords Under 20 in 2026";
export const metaDescription = "Best extension cords under $20: six 20 to 50 ft 16-gauge outdoor and indoor cords compared on length, grounding and weather ratings for camping.";
export const mainKeyword = "best extension cords under 20";
export const introParagraphs = [
  "Under $20 you can buy a 50 foot grounded outdoor cord, but every pick here is 16 gauge and rated for 13 amps. That is fine for lights, a fan, a phone charger and a laptop, and not for a space heater or an air conditioner.",
  "I compared the six on length, grounding, jacket type and the cost per foot. The budget corner that matters most is the gauge, so the guide explains what 16 gauge can and cannot run and which cords cut the grounding pin."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/home-golden-hour-campsite.webp";
export const heroImageAlt = "Dome tent and hammock at a forest campsite at golden hour";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-extension-cords-under-20-1",
    "rank": 1,
    "badge": "Best Value Under $20",
    "name": "Amazon Basics 50-Foot 3-Prong Indoor/Outdoor Extension Cord",
    "price": "$19.44",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41cTwckXquL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00OS7ETIA?tag=rvgearlab-amz-20",
    "description": "Amazon Basics is a 50 foot grounded cord with a 3-prong plug, rated for 13 amps, 1625 watts and 125 volts. Its 16-gauge all-copper wire sits under a vinyl jacket that resists moisture, abrasion and sunlight, and it is ETL certified.\n\nAt about $19 it costs a little more than the GE 40 ft and gives you 10 extra feet. It is the longest cord here and the only one that is both grounded and rated for indoor and outdoor use, so it reaches a distant campsite post cleanly.\n\nIt suits a campsite pedestal or a picnic table far from the post. Use it with lights, a fan and chargers.",
    "specs": [
      "50 ft, 16 gauge, 13A",
      "ETL certified, grounded",
      "Vinyl jacket, all copper"
    ],
    "pros": [
      "Longest reach in the guide",
      "Grounded three-prong plug",
      "Resists moisture and sunlight",
      "ETL certification"
    ],
    "cons": [
      "16 gauge limits heavy loads",
      "Bulky to coil"
    ],
    "bestFor": "Far campsite posts",
    "take": "The best mix of length and grounding under $20.",
    "catch": "Fifty feet of thin wire loses voltage under heavy loads."
  },
  {
    "id": "best-extension-cords-under-20-2",
    "rank": 2,
    "badge": "Best Mid-Length Outdoor",
    "name": "GE Outdoor Extension Cord",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41m2tgAVzDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DJDGQK32?tag=rvgearlab-amz-20",
    "description": "GE's 40 ft cord is a 16AWG grounded three-wire cord rated 125V, 13A and 1625W. It has a double-insulated PVC jacket and a one-piece molded plug, and its green finish blends into grass and gardens.\n\nAt about $17 it costs $2 less than the Amazon Basics 50 ft and gives up 10 feet. It is a better fit than the 20 ft GE for a campsite with a longer gap.\n\nIt suits a lawn or campsite where the pedestal is a bit farther than 20 feet. It is lower profile on grass.",
    "specs": [
      "40 ft, 16AWG, 13A",
      "Double-insulated PVC jacket",
      "One-piece molded plug"
    ],
    "pros": [
      "Green color blends into grass",
      "Molded plug resists pulling",
      "Double-insulated jacket",
      "Grounded three-wire"
    ],
    "cons": [
      "Shorter than the 50 ft pick",
      "16 gauge limits heavy loads"
    ],
    "bestFor": "Mid-length reaches",
    "take": "A grounded outdoor cord in a camouflage color.",
    "catch": "It is still thin wire for heavy appliances."
  },
  {
    "id": "best-extension-cords-under-20-3",
    "rank": 3,
    "badge": "Best Short Outdoor",
    "name": "GE Outdoor Extension Cord Waterproof",
    "price": "$12.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41PUEfViLgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D5G1BCQN?tag=rvgearlab-amz-20",
    "description": "GE's 20 ft cord shares the 16AWG, 125V, 13A and 1625W rating of its longer sibling, with a double-insulated PVC jacket and a one-piece molded plug. It is green, so it hides on a lawn.\n\nAt about $13 it costs $4 less than the GE 40 ft and covers half the distance. A shorter cord loses less power than the 50 ft cords.\n\nIt suits a tent beside a post or a table near the site. Pick it when length is not an issue.",
    "specs": [
      "20 ft, 16AWG, 13A",
      "Double-insulated PVC jacket",
      "One-piece molded plug"
    ],
    "pros": [
      "Short run loses little power",
      "Grounded three-wire",
      "Molded plug resists pulling",
      "Easy to coil"
    ],
    "cons": [
      "Only 20 ft",
      "16 gauge limits heavy loads"
    ],
    "bestFor": "Short outdoor runs",
    "take": "A compact outdoor cord at a low price.",
    "catch": "Measure the gap to the post first."
  },
  {
    "id": "best-extension-cords-under-20-4",
    "rank": 4,
    "badge": "Best Multi-Outlet",
    "name": "Energeaster 16/3 20 Ft 3 Outlet Extension Cord Outdoor/Indoor",
    "price": "$15.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41d00WDnU8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D73BFX1J?tag=rvgearlab-amz-20",
    "description": "Energeaster is a 20 foot 16/3 SJTW cord with three outlets, rated 13A and 1625W and listed ETL and cETL. It has IP65 sealing, stays flexible in the cold and ships with a hook-and-loop strap.\n\nAt about $17 it is the only pick here with three outlets, which helps at a campsite with one post. The single 13A limit is shared across all three sockets.\n\nIt suits a camp setup with a lamp, fan and chargers. It handles cold mornings.",
    "specs": [
      "20 ft, 16/3 SJTW, 3 outlets",
      "13A, 1625W, ETL/cETL",
      "IP65, flexible in cold"
    ],
    "pros": [
      "Three outlets on one cord",
      "Stays flexible in the cold",
      "Strap holds the coil",
      "IP65 sealing"
    ],
    "cons": [
      "13A limit is shared",
      "16 gauge is thin"
    ],
    "bestFor": "Camp lamp and charger setups",
    "take": "A cord that doubles as a small power strip.",
    "catch": "Add up the watts before you fill all three."
  },
  {
    "id": "best-extension-cords-under-20-5",
    "rank": 5,
    "badge": "Best High-Visibility",
    "name": "Southwire Woods 50ft Outdoor Extension Cord",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51dvmQVBGeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B000KKLOOG?tag=rvgearlab-amz-20",
    "description": "Southwire Woods is a 50 foot, 16-gauge SJTW cord in bright orange for weatherproof outdoor work. It has two prongs, so it is a 16/2 cord without a ground.\n\nAt about $18 it costs a little less than the Amazon Basics 50 ft, and the bright color reduces trip risk. It gives up the grounding pin.\n\nIt suits lawn tools and string lights where a grounded plug is not needed. The color helps at night.",
    "specs": [
      "50 ft, 16 gauge, SJTW",
      "Bright orange jacket",
      "16/2, two prong"
    ],
    "pros": [
      "Visible at night",
      "Weatherproof jacket",
      "Full 50 ft reach",
      "Low price"
    ],
    "cons": [
      "No grounding pin",
      "Not for appliances"
    ],
    "bestFor": "Lawn tools and lights",
    "take": "A visible long cord for ungrounded gear.",
    "catch": "Do not use it with grounded appliances."
  },
  {
    "id": "best-extension-cords-under-20-6",
    "rank": 6,
    "badge": "Best Lowest Price",
    "name": "Amazon Basics Extension Cord",
    "price": "$9.17",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hMMaGS4ML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075BNXVGS?tag=rvgearlab-amz-20",
    "description": "Amazon Basics 20 ft is a white indoor cord rated 13A and 125V in 16 AWG. It accepts both 2- and 3-prong plugs and is meant for consumer electronics, tools and media gear.\n\nAt about $9 it is the cheapest pick, and it covers the same 20 feet as the energeaster for about $8 less. It is meant for indoor use, so keep it inside the camper.\n\nIt suits a van or RV interior. Do not leave it outdoors.",
    "specs": [
      "20 ft, 16 AWG, 13A",
      "White indoor jacket",
      "Plugs into any 3-prong outlet"
    ],
    "pros": [
      "Lowest price here",
      "Fits 2- and 3-prong plugs",
      "Simple design",
      "Good for RV interiors"
    ],
    "cons": [
      "Indoor use only",
      "No weather rating"
    ],
    "bestFor": "Inside a camper",
    "take": "The cheap inside cord.",
    "catch": "Keep it dry and off the ground."
  }
];

export const howWeEvaluated = [
  {
    "title": "Length and gauge",
    "description": "Cord length from 20 to 50 ft was set against 16-gauge wire and the 13A rating."
  },
  {
    "title": "Grounding",
    "description": "Three-prong grounded plugs were separated from the two-prong cord."
  },
  {
    "title": "Jacket and weather",
    "description": "Outdoor, indoor and IP65 rated jackets were compared."
  },
  {
    "title": "Outlets",
    "description": "Single-outlet and three-outlet designs were compared for campsites."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is at or under $20, and the top pick offers the most reach and grounding for the money."
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
    "subheading": "By campsite need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Far campsite post, grounded",
          "Amazon Basics 50 ft",
          "50 ft, grounded."
        ],
        [
          "Mid-length reach on grass",
          "GE 40 ft Outdoor",
          "Green, grounded."
        ],
        [
          "Short run to a table",
          "GE 20 ft Outdoor",
          "About $13."
        ],
        [
          "Lamp, fan and charger",
          "energeaster 3-Outlet",
          "Three outlets."
        ],
        [
          "Lawn lights at night",
          "Southwire 50 ft Orange",
          "Bright jacket."
        ],
        [
          "Inside an RV",
          "Amazon Basics 20 ft Indoor",
          "About $9."
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
          "$0 to $20",
          "Amazon Basics 20 ft Indoor or GE 20 ft Outdoor"
        ],
        [
          "$10 to $20",
          "GE 40 ft Outdoor or energeaster 3-Outlet"
        ],
        [
          "$10 to $20",
          "Southwire 50 ft Orange or Amazon Basics 50 ft"
        ]
      ]
    }
  },
  {
    "subheading": "Grounded vs ungrounded",
    "cards": [
      {
        "label": "Grounded",
        "text": "The Amazon Basics 50 ft, GE 40 ft Outdoor, GE 20 ft Outdoor, energeaster 3-Outlet and Amazon Basics 20 ft Indoor carry a ground wire."
      },
      {
        "label": "Ungrounded",
        "text": "The Southwire 50 ft Orange has only two prongs, so keep it for double-insulated tools and lights."
      }
    ],
    "note": "Most campers should take the Amazon Basics 50 ft."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $9",
          "Amazon Basics 20 ft Indoor"
        ],
        [
          "About $13",
          "GE 20 ft Outdoor"
        ],
        [
          "About $17",
          "GE 40 ft Outdoor"
        ],
        [
          "About $17",
          "energeaster 3-Outlet"
        ],
        [
          "About $18",
          "Southwire 50 ft Orange"
        ],
        [
          "About $19",
          "Amazon Basics 50 ft"
        ]
      ]
    }
  },
  {
    "subheading": "For a tent campsite specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a grounded outdoor jacket and enough length to reach the post without stretching."
      },
      {
        "label": "In this comparison",
        "text": "The Amazon Basics 50 ft covers most distances, and the energeaster 3-Outlet gives three outlets for a lamp, fan and chargers."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want the longest reach and grounding: the Amazon Basics 50 ft and GE 40 ft Outdoor both offer it at near the top of the cap."
      },
      {
        "label": "Save if",
        "text": "Save if your run is short: the GE 20 ft Outdoor and Amazon Basics 20 ft Indoor cost $13 or less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Gauge and amp rating",
    "explanation": "A 16 gauge cord is rated for 13 amps, about 1625 watts, but only at short lengths. Longer runs lose voltage and heat up under a heavy load. Look at the AWG number on the cord label, because a lower number means thicker wire and a bigger AWG number than 16 means thinner, weaker wire."
  },
  {
    "criterion": "Length and voltage drop",
    "explanation": "Every extra foot adds resistance, so a 50 foot 16 gauge cord drops more voltage than a 20 foot one at the same load. For a lamp or a phone charger that is trivial, but for a fan motor it can matter. Buy the shortest cord that reaches."
  },
  {
    "criterion": "Grounded vs ungrounded",
    "explanation": "A three-prong cord carries a ground wire that protects against faults. A two-prong 16/2 cord does not, so it should only run double-insulated or low-risk gear. Check the plug shape and the wire count on the label before you plug in a tool, since an adapter that removes the ground pin defeats the protection."
  },
  {
    "criterion": "Jacket and weather rating",
    "explanation": "SJTW stands for a jacket suited to cold and wet service. An indoor cord has a thinner jacket and should stay inside. Look for the letters W or the words outdoor or IP65 on the cord, and keep any cord with a thin white jacket indoors on the label, since a missing mention usually means indoor only."
  },
  {
    "criterion": "Outlet count",
    "explanation": "A cord with three outlets lets you run a lamp, a fan and a charger from one post. The 13A limit is shared across all three. Add up the watts of your devices before you fill them and compare the total with the 1625 watt limit stamped on the cord."
  },
  {
    "criterion": "Plug strain relief",
    "explanation": "The molded plug takes the daily pulling when you move a cord. A strain relief that survives thousands of bends lasts longer. Look for a one-piece molded plug in the description, and give each plug a gentle tug when you buy to test the grip since a cracked plug is the usual reason a cord is retired."
  }
];

export const faq = [
  {
    "q": "Can I run a space heater on these cords?",
    "a": "No, a 1500W heater uses nearly the full 1625W limit of a 16 gauge cord and can overheat it. Use a heavier 12 or 14 gauge cord for heat. Keep heaters off thin cords like the Amazon Basics 50 ft."
  },
  {
    "q": "Is a 50 ft cord worse than a 20 ft one?",
    "a": "It loses more voltage, so lights and fans run fine but motors may lug. The Amazon Basics 50 ft is fine for lights and chargers. Use the GE 20 ft Outdoor if the gap is short on both ends before you buy."
  },
  {
    "q": "Can I leave a cord outside overnight?",
    "a": "Only if it is an outdoor-rated cord such as the GE 40 ft Outdoor, and the plug connection is kept off the wet ground. Never leave the Amazon Basics 20 ft Indoor out in rain. Cover connections with a cord cover."
  },
  {
    "q": "How do I coil an extension cord?",
    "a": "Use an over-under coil to avoid twists, and loosen it before use so it does not heat when loaded. Do not wrap tightly around a hand. The energeaster 3-Outlet ships with a strap for this and pull the cord out straight before you use it under load."
  },
  {
    "q": "How do I check a cord is safe?",
    "a": "Inspect the jacket and plugs for cracks, and replace any cord that feels warm in use. Look for a listing mark such as ETL or UL. Do not use a cord with a bent prong and test the plug fit in your outlet."
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
