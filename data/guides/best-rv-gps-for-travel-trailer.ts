export const guideSlug = "best-rv-gps-for-travel-trailer";
export const guideTitle = "2 Best RV Gps For Travel Trailer in 2026";
export const metaTitle = "Best RV Gps For Travel Trailer in 2026";
export const metaDescription = "Two Garmin RV 795 options compared for travel trailer towing, covering vehicle profiles, grade alerts and bundle contents.";
export const mainKeyword = "best rv gps for travel trailer";
export const introParagraphs = [
  "Towing a travel trailer changes what a GPS needs to know. The combined length, the trailer height and the tow vehicle's rating all matter, and a unit has to save a profile that fits the whole setup.",
  "This page covers a pair of the Garmin RV 795, one standalone and one bundle with extras. They share the same routing, so the choice comes down to what comes in the box and how you plan to mount and update the unit."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/51fDsjEbFNL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-gps-for-travel-trailer-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Garmin RV 795 GPS Navigator 7\" High-Resolution RV GPS Navigator Bundle",
    "price": "$473.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51fDsjEbFNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F3LYFLYT?tag=rvgearlab-20",
    "description": "The Garmin RV 795 SD Bundle includes the RV 795, a microSDXC Ultra 64GB card, a cleaning kit, a USB card reader and USB charging adapters. The listing describes custom routing for the RV size and weight and an RV parks and services directory.\n\nAgainst the standalone Garmin RV 795, it adds a 64GB memory card, a card reader and chargers. Against any phone-based app, it is a dedicated screen with an RV-specific profile.\n\nIt is the better pick for travel trailer owners who want the card and cables for extra maps. Buyers focused on owners who want extra storage will find it a sensible match.",
    "specs": [
      "RV 795 with 64GB card",
      "Custom RV routing",
      "RV parks directory"
    ],
    "pros": [
      "Includes a 64GB microSDXC card",
      "USB adapters and card reader included",
      "Custom routing for RV size and weight",
      "Preloaded RV parks directory"
    ],
    "cons": [
      "Higher price than the standalone",
      "Extras may be unneeded"
    ],
    "bestFor": "Owners who want extra storage"
  },
  {
    "id": "best-rv-gps-for-travel-trailer-2",
    "rank": 2,
    "badge": "Best Value",
    "name": "Garmin RV 795",
    "price": "$449.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41WEtc8c5jL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09ZJXYL6W?tag=rvgearlab-20",
    "description": "The Garmin RV 795 is a 7 inch RV navigator with custom routing based on the size and weight of your RV or trailer. It adds BirdsEye satellite imagery and a preloaded RV park directory.\n\nAgainst the bundle, it is the same unit at a lower price without the card and cables. Against a phone, it keeps a dedicated screen with a saved trailer profile.\n\nIt is the best fit for travel trailer owners who want the core navigator at the lowest price. It earns its slot for core trailer navigation.",
    "specs": [
      "7 inch touchscreen",
      "Custom RV routing",
      "BirdsEye satellite imagery"
    ],
    "pros": [
      "Routing for RV and trailer size and weight",
      "Large 7 inch bright screen",
      "BirdsEye satellite imagery",
      "Preloaded RV park directory"
    ],
    "cons": [
      "No memory card in the box",
      "No spare chargers or memory card"
    ],
    "bestFor": "Core trailer navigation"
  }
];

export const howWeEvaluated = [
  {
    "title": "Profile setup",
    "description": "We compared how each listing describes RV and trailer profile entry."
  },
  {
    "title": "Bundle contents",
    "description": "Included accessories were compared."
  },
  {
    "title": "Warnings",
    "description": "Grade, curve and weight alerts were compared."
  },
  {
    "title": "Map updates",
    "description": "Update wording was compared."
  },
  {
    "title": "Price",
    "description": "Bundle versus standalone price was compared."
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
    "subheading": "By Buyer Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Want memory card and cables",
          "Garmin RV 795 Bundle SD",
          "Card and adapters included."
        ],
        [
          "Want lowest price",
          "Garmin RV 795",
          "Core unit only."
        ],
        [
          "Tow with multiple setups",
          "Garmin RV 795 Bundle SD",
          "Saved profiles."
        ],
        [
          "Mount in tow vehicle",
          "Garmin RV 795",
          "Compact 7 inch."
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
          "$440 to $450",
          "Garmin RV 795"
        ],
        [
          "$470 to $480",
          "Garmin RV 795 Bundle SD"
        ]
      ]
    }
  },
  {
    "subheading": "Bundle vs Standalone",
    "cards": [
      {
        "label": "Bundle",
        "text": "Garmin RV 795 Bundle SD includes a 64GB card, card reader and chargers."
      },
      {
        "label": "Standalone",
        "text": "Garmin RV 795 is the same unit at a lower price."
      }
    ],
    "note": "Most trailer owners should buy the Garmin RV 795 unless they want the card in Garmin RV 795 Bundle SD."
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
          "Lower cost",
          "Garmin RV 795"
        ],
        [
          "Extras included",
          "Garmin RV 795 Bundle SD"
        ],
        [
          "Saved profiles",
          "Garmin RV 795"
        ],
        [
          "Memory card",
          "Garmin RV 795 Bundle SD"
        ]
      ]
    }
  },
  {
    "subheading": "For Towing a Trailer Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A saved profile for the combined rig and warnings for grades, as on Garmin RV 795."
      },
      {
        "label": "In this comparison",
        "text": "Both Garmin units save profiles. Garmin RV 795 Bundle SD adds a memory card. Check the posted clearance on every route."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Garmin RV 795 Bundle SD if you want the card and chargers."
      },
      {
        "label": "Save if",
        "text": "Save with Garmin RV 795 if you only need the navigator."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Trailer profile",
    "explanation": "Travel trailers add length and height to the tow vehicle. Garmin lets you save profiles for multiple vehicles or trailers. Enter the tow vehicle and trailer total length."
  },
  {
    "criterion": "Grade and curve alerts",
    "explanation": "Steep grades and sharp curves matter when towing. The 795 lists these warnings. Look for the alert list on the listing."
  },
  {
    "criterion": "Bundle accessories",
    "explanation": "A memory card and card reader help load extra maps. Extra storage lets you carry more detailed maps or files. Without it, you rely on the built-in memory. Check the bundle contents on the listing."
  },
  {
    "criterion": "Mounting",
    "explanation": "A trailer rig has a long hood and a dash far from the driver. Check the mount and cable length in the box. A short cable can force an awkward dash route."
  },
  {
    "criterion": "Map updates",
    "explanation": "Stale maps miss detours and closures. A trailer cannot easily turn around. Check for update wording on the listing."
  },
  {
    "criterion": "Park directory",
    "explanation": "A directory helps find sites with room for your length. Some sources show traveler ratings. Check the sources named on the listing."
  }
];

export const faq = [
  {
    "q": "Do I need a special GPS to tow a trailer?",
    "a": "A unit that accepts trailer size, such as the Garmin RV 795, avoids bad routes. Follow posted signs."
  },
  {
    "q": "What mistake do trailer owners make?",
    "a": "Entering only the tow vehicle height. Include the trailer."
  },
  {
    "q": "Is the bundle worth over the standalone?",
    "a": "Only if you want the 64GB card and chargers. The navigator itself is the same."
  },
  {
    "q": "How do I set a trailer profile?",
    "a": "Open vehicle settings and enter size and weight for the trailer. Save one for each setup."
  },
  {
    "q": "How often should I update maps?",
    "a": "Check before every long trip. Connect to Wi-Fi or a computer and follow the prompts."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best RV Gps",
    "href": "/camping-travel/best-rv-gps"
  },
  {
    "title": "Best Free RV Gps App",
    "href": "/camping-travel/best-free-rv-gps-app"
  },
  {
    "title": "Best RV Gps App",
    "href": "/camping-travel/best-rv-gps-app"
  },
  {
    "title": "Best RV Gps App For Android",
    "href": "/camping-travel/best-rv-gps-app-for-android"
  }
];
