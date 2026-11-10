export const guideSlug = "best-flashlights-under-20";
export const guideTitle = "6 Best Flashlights Under 20 in 2026";
export const metaTitle = "Best Flashlights Under 20 in 2026";
export const metaDescription = "Best flashlights under $20: six rechargeable, solar and multi-pack flashlights compared on beam focus, runtime and water rating for camping.";
export const mainKeyword = "best flashlights under 20";
export const introParagraphs = [
  "Twenty dollars buys a good camping flashlight and often two or four of them in one pack. The six picks here run from a $8 two-pack to a $17 four-pack, and all of them have a zoomable beam or a rechargeable battery.",
  "I ranked them by usable features per dollar, then by water rating, mode count and how many lights come in the box. The notes explain why a lumen number alone tells you little and where the cheapest packs cut corners."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/lighting-headlamp-tent.webp";
export const heroImageAlt = "Camper wearing a headlamp in front of a tent at night";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-flashlights-under-20-1",
    "rank": 1,
    "badge": "Best Value Under $20",
    "name": "RECHOO Tactical Flashlight 4 Pack",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51IuXUETdML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BBF161CY?tag=rvgearlab-amz-20",
    "description": "RECHOO is a four-pack of zoomable aluminum flashlights that claim 1500 lumens, five modes and an IP65 water rating. The telescoping head moves the beam from a wide flood to a tight spot.\n\nAt about $17 it costs $4 more than the Victoper 2-Pack in the rechargeable line and delivers four lights, so each costs about $4. The metal body is sturdier than the plastic IFTHFOUR.\n\nIt suits a family or a group site where every tent needs a light. Keep one in the car, one in the tent and one by the bed.",
    "specs": [
      "Four-pack, 1500 lumens claimed",
      "Zoomable, five modes",
      "IP65, aluminum body"
    ],
    "pros": [
      "Four lights for one price",
      "Zoomable beam from flood to spot",
      "IP65 water rating",
      "Aluminum body"
    ],
    "cons": [
      "Uses cells that must be bought",
      "Lumen claim is for the top mode"
    ],
    "bestFor": "Families and groups",
    "take": "Four sturdy lights for the price of one good flashlight.",
    "catch": "Stock spare cells for the pack."
  },
  {
    "id": "best-flashlights-under-20-2",
    "rank": 2,
    "badge": "Best Single Rechargeable",
    "name": "DARKBEAM 2800 High Lumens Flashlights with LED Power Display",
    "price": "$11.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41aiTtA0MML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GZ3D5CMD?tag=rvgearlab-amz-20",
    "description": "DARKBEAM is a USB-C rechargeable flashlight that claims up to 2800 lumens and a 600 ft beam. It has adjustable focus, a digital power display, three modes and a mini 5.3 inch body weighing 4.02 oz.\n\nAt about $12 it costs $5 less than the RECHOO 4-Pack and gives one light with a battery gauge, which the four-pack lacks. It shows how much charge remains.\n\nIt suits a solo camper who wants one dependable light. The power display prevents surprises.",
    "specs": [
      "2800 lumens claimed, 600 ft",
      "Digital power display",
      "5.3 in, 4.02 oz, USB-C"
    ],
    "pros": [
      "Digital battery display",
      "USB-C rechargeable",
      "Adjustable focus",
      "Pocket-size 4.02 oz"
    ],
    "cons": [
      "Single light only",
      "Lumen claim is for the top mode"
    ],
    "bestFor": "Solo campers",
    "take": "A pocket flashlight with a battery gauge.",
    "catch": "Top mode drains the battery quickly."
  },
  {
    "id": "best-flashlights-under-20-3",
    "rank": 3,
    "badge": "Best Rechargeable Pair",
    "name": "Victoper 2026 Upgraded Rechargeable Flashlight 2 Pack",
    "price": "$12.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41B8z7KFg-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FQ9WSCSD?tag=rvgearlab-amz-20",
    "description": "Victoper's Rechargeable 2-Pack gives two USB-rechargeable zoomable flashlights with a stated reach of 656 ft. They offer high, medium and strobe modes in a hard-anodized alloy body.\n\nAt about $13 it costs $3 more than the other Victoper 2-Pack and adds USB charging, so you buy no cells. It has fewer modes than the five-mode pack.\n\nIt suits a couple who want matching rechargeable lights. Charge both before a trip.",
    "specs": [
      "Two USB-rechargeable lights",
      "Zoom, 656 ft reach",
      "High, medium, strobe modes"
    ],
    "pros": [
      "No cells to buy",
      "Zoomable beam",
      "Tough hard-anodized alloy",
      "Two lights in the pack"
    ],
    "cons": [
      "Only three modes",
      "Needs recharging between trips"
    ],
    "bestFor": "Couples",
    "take": "A rechargeable pair for about $13.",
    "catch": "Keep both charged."
  },
  {
    "id": "best-flashlights-under-20-4",
    "rank": 4,
    "badge": "Best Five-Mode Pair",
    "name": "Victoper LED Flashlight 2 Pack",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51-WqcraUbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09PMKBHF1?tag=rvgearlab-amz-20",
    "description": "Victoper's 2-Pack lists five modes, a zoomable beam and a reach of up to 656 ft in a hard-anodized alloy. Both lights ship in one pack.\n\nAt about $10 it costs $3 less than the rechargeable Victoper and adds two modes. It is the budget pair for people who already own spare cells.\n\nIt suits a camper who wants a spare. Zoom suits both reading and spotting.",
    "specs": [
      "656 ft reach, five modes",
      "Zoomable, hard-anodized alloy",
      "Two lights in the pack"
    ],
    "pros": [
      "Two lights at a low price",
      "Type 3 hard-anodized finish",
      "Zoomable with five modes",
      "Cheaper than the rechargeable pair"
    ],
    "cons": [
      "Needs separate cells",
      "Shorter reach than the DARKBEAM"
    ],
    "bestFor": "Budget pairs",
    "take": "A five-mode pair for about $10.",
    "catch": "Buy cells before the trip."
  },
  {
    "id": "best-flashlights-under-20-5",
    "rank": 5,
    "badge": "Best Solar Backup",
    "name": "IFTHFOUR High Lumens Solar Flashlight",
    "price": "$9.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51sNziwDmPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DWZR12GM?tag=rvgearlab-amz-20",
    "description": "IFTHFOUR is a solar flashlight with four lighting modes, including a spotlight, a red searchlight and a work light. It charges by solar or USB in 2 to 3 hours, doubles as a power bank and has an IPX5 water rating.\n\nAt about $10 it costs $2 less than the DARKBEAM and can charge itself in the sun, which no other pick can. Its ABS and PC body is lighter than the metal lights.\n\nIt suits an emergency kit or a car glovebox. Solar charging helps when power is out.",
    "specs": [
      "Solar and USB charging",
      "Four modes, red searchlight",
      "IPX5, power-bank function"
    ],
    "pros": [
      "Charges in the sun",
      "Red searchlight mode",
      "Doubles as a power bank",
      "IPX5 water rating"
    ],
    "cons": [
      "Plastic body",
      "Solar charging is slow"
    ],
    "bestFor": "Emergency kits",
    "take": "A flashlight that recharges itself in the sun.",
    "catch": "Do not rely on solar alone."
  },
  {
    "id": "best-flashlights-under-20-6",
    "rank": 6,
    "badge": "Best Cheapest Pair",
    "name": "VTech Tactical 2pack LED Flashlight High Lumens",
    "price": "$7.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51TDva7fH0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CMGQZLPW?tag=rvgearlab-amz-20",
    "description": "VTech Tactical is a two-pack of zoomable rechargeable flashlights with five settings (low, medium, high, strobe and SOS). They claim 100 to 1000 lumens and resist splashes from any angle.\n\nAt about $8 it is the cheapest pick and costs $2 less than the Victoper 2-Pack. It also adds SOS.\n\nIt suits a spare pair for a glovebox and a tent. The SOS mode is handy in an emergency.",
    "specs": [
      "Two rechargeable lights",
      "Five settings including SOS",
      "Zoomable, splash resistant"
    ],
    "pros": [
      "Lowest price in the guide",
      "Two lights in the pack",
      "SOS and strobe modes",
      "Splash resistant"
    ],
    "cons": [
      "Splash resistant only",
      "Claimed lumen range is wide"
    ],
    "bestFor": "Spare lights",
    "take": "The cheapest pair of rechargeable lights.",
    "catch": "Do not dunk them."
  }
];

export const howWeEvaluated = [
  {
    "title": "Features per dollar",
    "description": "Beam focus, mode count and pack size were compared."
  },
  {
    "title": "Power source",
    "description": "Rechargeable, solar and cell-powered designs were compared."
  },
  {
    "title": "Water rating",
    "description": "IP65, IPX5 and splash-resistant bodies were separated."
  },
  {
    "title": "Body material",
    "description": "Aluminum and plastic bodies were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is at or under $20, and the top pick gives the most lights for the money."
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
    "subheading": "By camper need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Family tent, one each",
          "RECHOO 4-Pack",
          "Four lights."
        ],
        [
          "Solo camper, battery gauge",
          "DARKBEAM 2800",
          "Power display."
        ],
        [
          "Couple, rechargeable",
          "Victoper Rechargeable 2-Pack",
          "USB charging."
        ],
        [
          "Budget pair, five modes",
          "Victoper 2-Pack",
          "About $10."
        ],
        [
          "Emergency kit",
          "IFTHFOUR Solar",
          "Solar charging."
        ],
        [
          "Cheapest spare pair",
          "VTech Tactical 2-Pack",
          "About $8."
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
          "VTech Tactical 2-Pack or IFTHFOUR Solar"
        ],
        [
          "$0 to $20",
          "Victoper 2-Pack or DARKBEAM 2800"
        ],
        [
          "$10 to $20",
          "Victoper Rechargeable 2-Pack or RECHOO 4-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Pack of lights vs one good light",
    "cards": [
      {
        "label": "Packs",
        "text": "The RECHOO 4-Pack, Victoper 2-Pack, Victoper Rechargeable 2-Pack and VTech Tactical 2-Pack give several lights for one price."
      },
      {
        "label": "Single",
        "text": "The DARKBEAM 2800 and IFTHFOUR Solar are one-light options with a battery gauge or solar charging."
      }
    ],
    "note": "Most campers should take the RECHOO 4-Pack."
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
          "About $8",
          "VTech Tactical 2-Pack"
        ],
        [
          "About $10",
          "Victoper 2-Pack"
        ],
        [
          "About $10",
          "IFTHFOUR Solar"
        ],
        [
          "About $12",
          "DARKBEAM 2800"
        ],
        [
          "About $13",
          "Victoper Rechargeable 2-Pack"
        ],
        [
          "About $17",
          "RECHOO 4-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "For a car camping family specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for several lights, a water rating and a simple mode order."
      },
      {
        "label": "In this comparison",
        "text": "The RECHOO 4-Pack gives four lights with an IP65 body. The IFTHFOUR Solar is a good extra for the glovebox."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a battery gauge or a four-pack: the DARKBEAM 2800 and RECHOO 4-Pack are the best of the group."
      },
      {
        "label": "Save if",
        "text": "Save if you need a spare: the VTech Tactical 2-Pack is about $8 and the Victoper 2-Pack about $10."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Lumens vs real use",
    "explanation": "A compact flashlight at this price rarely sustains its top lumen figure for more than a few minutes. A claim of 1500 or 2800 lumens is best treated as a burst, while the low and medium modes are what you will use. Compare runtime on a mid setting rather than the highest number."
  },
  {
    "criterion": "Zoom and focus",
    "explanation": "A zoomable head lets you spread the beam into a flood for the campsite or tighten it into a spot for a far tree line. A fixed beam only does one job. Check whether the head slides to focus, as on the RECHOO, Victoper and DARKBEAM."
  },
  {
    "criterion": "Battery type",
    "explanation": "A rechargeable light saves buying cells but fails when the battery wears out or you forget a cable. A cell-powered light can be refilled anywhere. Look at the power source in the title or first bullet, and keep a spare set of cells in the same bag as the light so a dead light never ends the evening."
  },
  {
    "criterion": "Water rating",
    "explanation": "IP65 resists water jets and dust, IPX5 resists jets, and splash resistant means rain at an angle. Dunking a splash-rated light can kill it. Check the exact rating before camping near water, and treat a light with no rating as something to keep dry in a pocket before you take it near a creek or a kayak."
  },
  {
    "criterion": "Mode count",
    "explanation": "Five modes usually means low, medium, high, strobe and SOS. Strobe and SOS help in an emergency, but too many modes make a light awkward to use. Look for a simple mode order that starts on low or medium, and check that the mode button is large enough to press with a glove."
  },
  {
    "criterion": "Body and grip",
    "explanation": "An aluminum body survives drops better than plastic and sheds heat. A knurled grip stays steady with wet hands. Check the material in the product details and a hard-anodized finish resists scratches in a gear bin, because a slick body is the one you drop in a stream and the weight when you hold it in one hand."
  }
];

export const faq = [
  {
    "q": "How many lumens do I need for camping?",
    "a": "Around 100 to 300 lumens covers tent chores and a campsite walk, and 500 to 1000 lumens is plenty for spotting far things. The DARKBEAM 2800 claims much more than you can sustain. Choose a light with a good low mode."
  },
  {
    "q": "Are zoomable flashlights worth it?",
    "a": "Yes, because one light does flood and spot, as the RECHOO 4-Pack and Victoper 2-Pack do. A zoomable head can be slightly less sealed than a fixed head. Keep it dry and check the sliding head glides smoothly before you rely on it."
  },
  {
    "q": "Rechargeable or cell-powered?",
    "a": "Rechargeable lights like the DARKBEAM 2800 save money but need a cable. A cell-powered pack like the Victoper 2-Pack can be refilled anywhere. Carry spare cells or a power bank and a light kept in a glovebox may lose charge over a summer."
  },
  {
    "q": "Can I trust a solar flashlight?",
    "a": "As a backup, yes. The IFTHFOUR Solar charges in 2 to 3 hours by USB and slower in the sun. Charge it fully before a trip, and use solar for emergencies and test it before every trip, since weak sun may charge it slowly."
  },
  {
    "q": "How should I store a flashlight?",
    "a": "Remove cells from lights you will not use for months, and keep rechargeable lights at half charge. Store them dry. Check the O-ring on the RECHOO 4-Pack from time to time to avoid leaking cells in the heat of a car."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Towels",
    "href": "/campsite-gear/best-camping-towels"
  },
  {
    "title": "Best Dry Bags",
    "href": "/campsite-gear/best-dry-bags"
  },
  {
    "title": "Best Camping Lanterns And Camping Lights",
    "href": "/campsite-gear/best-camping-lanterns-and-camping-lights"
  },
  {
    "title": "Best Headlamps",
    "href": "/campsite-gear/best-headlamps"
  }
];
