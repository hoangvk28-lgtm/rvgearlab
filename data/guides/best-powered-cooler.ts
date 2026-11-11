export const guideSlug = "best-powered-cooler";
export const guideTitle = "6 Best Powered Cooler in 2026";
export const metaTitle = "Best Powered Cooler in 2026";
export const metaDescription = "Powered 12V coolers and portable fridges compared by capacity, dual-zone control and power options, from 19 qt to 61 qt for car camping and overlanding.";
export const mainKeyword = "best powered cooler";
export const introParagraphs = [
  "A powered cooler is a compressor fridge that runs on your vehicle's 12V outlet or a wall plug, so food stays cold without ice. That means no soggy sandwiches and more room for groceries on longer trips.",
  "At RV Gear Lab, we compared these six on capacity, temperature range, cooling speed and the power options listed. They range from a 19 quart personal fridge to a 61 quart dual-zone for week-long overlanding."
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
    "id": "best-powered-cooler-1",
    "rank": 1,
    "badge": "Best Large Dual Zone",
    "name": "Feelfunn 12 Volt Refrigerator Car Fridge 61QT Dual Zone Electric Cooler",
    "price": "$239.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/416X6KCtLkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FLXD1MSC?tag=rvgearlab-amz-20",
    "description": "Feelfunn 61 Quart is a 12 volt refrigerator with two independently controlled zones from minus 4 to 68 degrees F. It is listed to cool from 77 degrees F ambient to 32 degrees F in about 15 minutes with a compressor system.\n\nThe two zones let you run a freezer side and a fridge side at once, which the single-zone EUHOMY models cannot. It runs at about 45dB and includes four fixing holes to secure it in a vehicle.\n\nOverlanders and families on long trips will like having both frozen and chilled space. The tie-down holes make it a good fit for truck beds and SUVs.",
    "specs": [
      "61 qt dual zone",
      "-4F to 68F range",
      "45dB, four fixing holes"
    ],
    "pros": [
      "Two independent zones",
      "Cools to 32F in about 15 minutes",
      "Quiet 45dB operation",
      "Fixing holes for vehicle mounting"
    ],
    "cons": [
      "Highest price here",
      "Large footprint in a small car"
    ],
    "bestFor": "Long overlanding trips",
    "take": "The most capable fridge here for freezer and fridge storage.",
    "catch": "Takes serious cargo space."
  },
  {
    "id": "best-powered-cooler-2",
    "rank": 2,
    "badge": "Best Large Single Zone",
    "name": "EUHOMY 48QT 12 Volt Refrigerator",
    "price": "$229.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rbgMN-IvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BYZNH4NX?tag=rvgearlab-amz-20",
    "description": "EUHOMY 48 Quart is a 12 volt portable fridge and freezer with a range of minus 4 to 68 degrees F. A compressor cools from 68 degrees F to 32 degrees F in about 15 minutes.\n\nIt includes both 12/24V DC and 110/240V AC adapters, so you can power it from a car or from a wall at home. It is a step smaller and cheaper than the Feelfunn 61 quart.\n\nWeekend campers and van travelers will like the capacity for more than a few cans. The AC adapter doubles it as a home cooler.",
    "specs": [
      "48 qt compressor fridge",
      "-4F to 68F range",
      "12/24V DC and AC adapters"
    ],
    "pros": [
      "Big 48 qt interior",
      "DC and AC adapters included",
      "Fast cooling to 32F",
      "Works in car or at home"
    ],
    "cons": [
      "Single zone only",
      "Heavy when loaded"
    ],
    "bestFor": "Weekend family trips",
    "take": "A roomy fridge with both car and wall power.",
    "catch": "One temperature across the whole box."
  },
  {
    "id": "best-powered-cooler-3",
    "rank": 3,
    "badge": "Best Mid-Size Dual Zone",
    "name": "Feelfunn 12 Volt Refrigerator Car Fridge 40QT Dual Zone Electric Cooler",
    "price": "$219.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Yb8mFqcKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FLX846J2?tag=rvgearlab-amz-20",
    "description": "Feelfunn 40 Quart keeps the dual-zone design with separate temperature control from minus 4 to 68 degrees F. The compressor cools from 77 degrees F to 32 degrees F in about 15 minutes and runs at 45dB.\n\nIt brings the freezer-plus-fridge layout of the 61 quart in a package that fits more cars. It also has four fixing holes to secure it for travel.\n\nCouples on road trips will like carrying frozen meat and fresh drinks together. The mid-size body leaves room for a cooler bag beside it.",
    "specs": [
      "40 qt dual zone",
      "-4F to 68F range",
      "15 minutes to cool"
    ],
    "pros": [
      "Dual zones in a smaller body",
      "Quiet 45dB operation",
      "Secures with fixing holes",
      "Cools fast"
    ],
    "cons": [
      "Smaller capacity than the 61 qt",
      "Costs more than single-zone rivals"
    ],
    "bestFor": "Couples on road trips",
    "take": "The dual-zone option that fits a normal car.",
    "catch": "Less space per zone."
  },
  {
    "id": "best-powered-cooler-4",
    "rank": 4,
    "badge": "Best Energy Saver",
    "name": "BougeRV 12v refrigerator 30 Quart",
    "price": "$207.56",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41riJKW7TvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BPM7C8RT?tag=rvgearlab-amz-20",
    "description": "BougeRV CR28 is a 30 quart 12 volt fridge with a range of minus 8 to 50 degrees F. Its ECO energy-saving mode brings operating power to about 60W, and the listing says it cools to 32 degrees F in about 15 minutes.\n\nIt carries a 2-year tech support and runs on a smaller battery draw than larger models like the EUHOMY 48 quart. The wider freezer range goes lower than the others.\n\nSolo campers and weekend travelers will like the low power draw. It is easier on a vehicle battery.",
    "specs": [
      "30 qt, -8F to 50F range",
      "ECO mode about 60W",
      "2-year tech support"
    ],
    "pros": [
      "ECO mode for low power draw",
      "Fast cooling to 32F",
      "Freezes down to -8F",
      "Two-year support"
    ],
    "cons": [
      "Smaller interior",
      "Narrower top temperature range"
    ],
    "bestFor": "Solo and weekend trips",
    "take": "A thrifty fridge for small power systems.",
    "catch": "Top temperature is 50F, not 68F."
  },
  {
    "id": "best-powered-cooler-5",
    "rank": 5,
    "badge": "Best Compact With App",
    "name": "EUHOMY 23QT 12 Volt Refrigerator",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41kzk0bVX8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H7XCBHY7?tag=rvgearlab-amz-20",
    "description": "EUHOMY 23 Quart is a compact 12 volt cooler with app control, a powerful compressor and a magnetic lid seal. It ships with 100/240V AC and 12/24V DC adapters and 2-year tech support.\n\nThe app lets you check and change temperature from your phone, which none of the larger picks list. The magnetic lid closes tight for good insulation.\n\nCouples and day trippers will like the phone control. It fits between seats.",
    "specs": [
      "23 qt compressor cooler",
      "App temperature control",
      "Magnetic lid seal"
    ],
    "pros": [
      "Phone app control",
      "Magnetic lid seal",
      "AC and DC adapters",
      "Two-year tech support"
    ],
    "cons": [
      "Small capacity",
      "Costs more per quart"
    ],
    "bestFor": "Day trips and couples",
    "take": "A small fridge with smart control.",
    "catch": "Not for week-long trips."
  },
  {
    "id": "best-powered-cooler-6",
    "rank": 6,
    "badge": "Best Smallest Fridge",
    "name": "EUHOMY 19QT 12 Volt Refrigerator",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41wBkBJy0tL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C4H82CHZ?tag=rvgearlab-amz-20",
    "description": "EUHOMY 19 Quart shares the app control, compressor and magnetic lid design of the 23 quart in a smaller body. It includes both AC and DC adapters and 2-year tech support.\n\nIt is the smallest and cheapest here and fits under a seat or in a tight cargo area. The cooling system keeps drinks and snacks cold.\n\nSolo travelers, commuters and lunch-and-drinks users will like the small footprint. It slides easily onto a back seat footwell.",
    "specs": [
      "19 qt compressor cooler",
      "App control",
      "Magnetic seal lid"
    ],
    "pros": [
      "Smallest footprint",
      "Lowest price",
      "App control",
      "AC and DC adapters"
    ],
    "cons": [
      "Tiny capacity",
      "Too small for groceries"
    ],
    "bestFor": "Solo travelers",
    "take": "A lunch-sized fridge.",
    "catch": "Fits only a day of food."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Compared quarts against group size."
  },
  {
    "title": "Zone control",
    "description": "Looked at dual-zone versus single-zone."
  },
  {
    "title": "Temperature range",
    "description": "Compared minimum and maximum temperatures."
  },
  {
    "title": "Power options",
    "description": "Considered DC, AC and energy-saving modes."
  },
  {
    "title": "Mounting and noise",
    "description": "Looked at tie-downs and decibel ratings."
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
          "Week-long overlanding",
          "Feelfunn 61 Qt",
          "Dual zone, 61 qt."
        ],
        [
          "Family weekend",
          "EUHOMY 48 Qt",
          "48 qt with AC adapter."
        ],
        [
          "Couples road trip",
          "Feelfunn 40 Qt",
          "Dual zone, 40 qt."
        ],
        [
          "Solo weekend",
          "BougeRV 30 Qt",
          "ECO mode."
        ],
        [
          "Day trip",
          "EUHOMY 23 Qt",
          "App control."
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
          "$140 to $150",
          "EUHOMY 23 Qt or EUHOMY 19 Qt"
        ],
        [
          "$200 to $220",
          "BougeRV 30 Qt or Feelfunn 40 Qt"
        ],
        [
          "$220 to $240",
          "EUHOMY 48 Qt or Feelfunn 61 Qt"
        ]
      ]
    }
  },
  {
    "subheading": "Dual Zone vs Single Zone",
    "cards": [
      {
        "label": "Dual zone",
        "text": "Two temperatures at once for freezer and fridge. Feelfunn 61 Qt and Feelfunn 40 Qt do this."
      },
      {
        "label": "Single zone",
        "text": "One temperature across the box and a simpler design. EUHOMY 48 Qt, BougeRV 30 Qt, EUHOMY 23 Qt and EUHOMY 19 Qt are single zone."
      }
    ],
    "note": "Most campers should default to EUHOMY 48 Qt unless they need a freezer side."
  },
  {
    "subheading": "By Power Priority",
    "table": {
      "headers": [
        "If you want",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest power draw",
          "BougeRV 30 Qt"
        ],
        [
          "AC and DC adapters",
          "EUHOMY 48 Qt"
        ],
        [
          "App control",
          "EUHOMY 23 Qt"
        ]
      ]
    }
  },
  {
    "subheading": "For Overlanding Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A dual-zone fridge with tie-down holes and low noise."
      },
      {
        "label": "In this comparison",
        "text": "Feelfunn 61 Qt lists four fixing holes and 45dB noise."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Feelfunn 61 Qt for dual zones."
      },
      {
        "label": "Save if",
        "text": "Save with EUHOMY 19 Qt."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Capacity",
    "explanation": "A 19 quart fridge holds lunch and drinks, while 61 quarts holds a week of groceries. Size it to your group and trip length. Pay attention to usable space, since compressors and walls eat into the stated size. Check the quart rating on the listing."
  },
  {
    "criterion": "Dual zone or single zone",
    "explanation": "Dual zones let you freeze meat on one side and chill drinks on the other. Single zones are simpler and cheaper. Check whether the listing says two independent temperature controls."
  },
  {
    "criterion": "Power draw and battery",
    "explanation": "Compressor fridges draw power from a 12V outlet, and ECO modes save battery. Look for the wattage and any low-voltage cutoff. Plan for a second battery on multi-day trips."
  },
  {
    "criterion": "Temperature range",
    "explanation": "A range down to minus 4 degrees F can act as a freezer, while a 50 degree top suits colder food only. A narrow range limits what you can freeze or keep. Check the stated minimum and maximum before buying."
  },
  {
    "criterion": "Noise and mounting",
    "explanation": "A 45dB fridge is quiet enough to sleep near. Fixing holes help secure it on bumpy roads. Check decibel and mounting details."
  }
];

export const faq = [
  {
    "q": "What is a powered cooler?",
    "a": "A compressor fridge that runs on 12V DC or AC power, so it keeps food cold without ice. It cools fast and holds a set temperature. It needs a power source."
  },
  {
    "q": "How much power does a 12V fridge use?",
    "a": "Draw varies by size and mode, and BougeRV 30 Qt lists about 60W in ECO mode. Run it from a car outlet while driving. Use a battery or power station at camp."
  },
  {
    "q": "Is a powered cooler worth it over ice?",
    "a": "For multi-day trips, yes, since you skip ice runs and keep food dry. For short trips, an ice cooler is cheaper. Consider your power setup."
  },
  {
    "q": "How do I set up a 12V fridge in a car?",
    "a": "Place it on level ground, secure it with straps and plug it in. Pre-cool it at home. Keep vents clear."
  },
  {
    "q": "How do I maintain a 12V fridge?",
    "a": "Clean the interior with mild soap and dry it. Leave the lid ajar in storage. Check the seal."
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
