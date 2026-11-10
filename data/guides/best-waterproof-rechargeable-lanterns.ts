export const guideSlug = "best-waterproof-rechargeable-lanterns";
export const guideTitle = "4 Best Waterproof Rechargeable Lanterns in 2026";
export const metaTitle = "Best Waterproof Rechargeable Lanterns in 2026";
export const metaDescription = "Best waterproof rechargeable lanterns compared on stated IP rating, brightness, battery and design for rainy camps, boats and porches.";
export const mainKeyword = "best waterproof rechargeable lanterns";
export const introParagraphs = [
  "Waterproof is the most overused word on a lantern listing, and the only number that tells you what it means is the IP rating. A splash-resistant IP44 is a different tool from an IP68 lantern that can go under water.",
  "Four rechargeable lanterns with a named IP rating made the list. They were ranked by the rating each one states, then by output, battery and how the lantern is meant to be used in the wet."
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
    "id": "best-waterproof-rechargeable-lanterns-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Glocusent 106 LED Camping Lights",
    "price": "$21.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ZxachS9EL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09KRQRRFL?tag=rvgearlab-20",
    "description": "The Glocusent 106 lists a true IP68 waterproof rating, 1200 lumens from 106 LEDs and five brightness levels. It has a 5000mAh battery that charges over USB-C, three color temperatures (3000K, 4000K and 6000K) and an SOS mode.\n\nIt has the highest water rating of the four, which sits two steps above the IP44 claims of the Wondrastical, AYL and Tubicen. It is also far more compact, at 2.2 x 2.2 x 5.6 inches and 8.5 ounces.\n\nIt suits kayak trips, rainy-season campers and anyone who wants a lantern that tolerates immersion. The USB-C port charges from a power bank or a small solar panel.",
    "specs": [
      "IP68 rating, 1200 lumens",
      "5000mAh, USB-C charging",
      "3000K to 6000K and SOS"
    ],
    "pros": [
      "IP68 is the highest rating here",
      "Compact 8.5 ounce body",
      "Three color temperatures plus SOS",
      "Large 5000mAh battery"
    ],
    "cons": [
      "Higher cost than the IP44 options",
      "No built-in hook is named"
    ],
    "bestFor": "Rain, rivers and rough use",
    "take": "The only lantern of the four with a rating built for immersion. Pick it when the weather and the water decide the purchase.",
    "catch": "Immersion-rated lanterns still need a closed charging port when wet."
  },
  {
    "id": "best-waterproof-rechargeable-lanterns-2",
    "rank": 2,
    "badge": "Best Brightness",
    "name": "LED Camping Lantern Rechargeable",
    "price": "$44.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413XCSzVJTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09YT5D357?tag=rvgearlab-20",
    "description": "The AYL lists 1800 lumens from 46 LED bulbs, a 4400mAh battery that serves as a power bank and IP44 protection. Four light modes cover daylight, warm light, both and flash, all dimmable.\n\nIt has the most light of the four, 600 lumens above the Glocusent 106 Lantern. It also gives the phone-charging role that the Wondrastical and Tubicen do not list.\n\nIt suits car campers and storm-prep kits that need a bright lantern plus a charger. A slip-proof handle makes hanging simple, and it stays at home on a covered porch.",
    "specs": [
      "1800 lumens, 46 LEDs",
      "4400mAh power bank",
      "IP44, four light modes"
    ],
    "pros": [
      "Highest lumens of the four",
      "Doubles as a phone power bank",
      "Warm and daylight modes",
      "Up to 12 hours per charge"
    ],
    "cons": [
      "IP44 gives splash protection only",
      "Top lumens apply to the brightest mode"
    ],
    "bestFor": "Bright light for a covered camp",
    "take": "A lot of light and a power bank for a modest cost. Keep it under an awning, not in a downpour.",
    "catch": "Twelve hours is a best case, not the time at full brightness."
  },
  {
    "id": "best-waterproof-rechargeable-lanterns-3",
    "rank": 3,
    "badge": "Best Ambiance",
    "name": "2 Pack Bronze Vintage 4 Modes Rechargeable Lanterns with Remote Control",
    "price": "$35.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51+3xB0UirL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQW32H2M?tag=rvgearlab-20",
    "description": "The Wondrastical pair gives each lantern a 1200mAh battery that charges in 2.5 hours and runs up to 10 hours. Four modes mix a flickering flame effect with warm, neutral and cold white, and a remote sets timers such as dusk-on and dawn-off.\n\nIt is the only pick with a remote control and a flame mode, which turn it into a patio light rather than a work light. The ABS body carries an IP44 rating for porch hooks, branches and pergolas.\n\nIt suits campers who want atmosphere around a site or a porch more than raw output. A bronze vintage look finishes the style.",
    "specs": [
      "IP44, 1200mAh, 2.5 hour charge",
      "Flame light, three white tones",
      "Remote with dusk-on timer"
    ],
    "pros": [
      "Remote control from a distance",
      "Flickering flame mode for ambiance",
      "Dusk-on and dawn-off timers",
      "Two lanterns in the set"
    ],
    "cons": [
      "Splash protection only at IP44",
      "Low lumens for work light"
    ],
    "bestFor": "Porch and campsite ambiance",
    "take": "A pair of decorative lanterns that can stay out in damp weather. Not the pick for working light.",
    "catch": "Brightness is soft, so it will not light a large area."
  },
  {
    "id": "best-waterproof-rechargeable-lanterns-4",
    "rank": 4,
    "badge": "Best Table Lamp",
    "name": "Tubicen Rechargeable Table Lamp Outdoor Portable Lantern IP44 Waterproof",
    "price": "$35.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41wiTuPTp-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DT1196ZX?tag=rvgearlab-20",
    "description": "The Tubicen is a cordless outdoor table lamp with a nickel-finish metal body and frosted shade, sized 4.5 inches across and 8.7 inches tall. Its 4000mAh battery gives up to 80 hours at minimum brightness, and the IP44 rating gives splash protection.\n\nFour-level touch dimming with memory (100, 50, 15 and 5 percent) gives a smoother glow than the fixed modes on the AYL 1800LM Lantern. It uses a 3000K warm glow, which suits dining outside better than the daylight modes of the others.\n\nIt suits glampers and RV owners who want a table light that looks at home on a picnic table or patio. A no-slip handle lets it move from the table to the tent.",
    "specs": [
      "4000mAh, 80 hours at lowest",
      "IP44, 4-level touch dimming",
      "3000K warm glow, 4.5 x 8.7 in"
    ],
    "pros": [
      "Up to 80 hours at minimum",
      "Warm 3000K light for dining",
      "Touch dimming remembers the level",
      "Handle for easy carrying"
    ],
    "cons": [
      "Heavier and bulkier than a camp lantern",
      "IP44 means splash protection only"
    ],
    "bestFor": "Outdoor dining and glamping",
    "take": "Looks like a lamp, works like a lantern. The best choice for the table.",
    "catch": "It is bulky for backpacks and tent hanging."
  }
];

export const howWeEvaluated = [
  {
    "title": "IP rating",
    "description": "Ranked each lantern by the water rating its listing states, since the code is the only precise claim."
  },
  {
    "title": "Brightness and modes",
    "description": "Compared stated lumens, color temperatures and dimming control."
  },
  {
    "title": "Battery and charging",
    "description": "Looked at mAh, charging port and the runtime each listing quotes."
  },
  {
    "title": "Form and carry",
    "description": "Considered size, weight and whether the lantern hangs, stands or sits on a table."
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
    "subheading": "By Weather Exposure",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Heavy rain, river or boat trips",
          "Glocusent 106 Lantern",
          "IP68 immersion rating"
        ],
        [
          "Under an awning or porch",
          "AYL 1800LM Lantern",
          "IP44 with the most light"
        ],
        [
          "Patio with decorative light",
          "Wondrastical 2-Pack",
          "Flame mode and remote"
        ],
        [
          "Outdoor dining",
          "Tubicen Table Lamp",
          "Warm 3000K table lamp"
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
          "$20 to $40",
          "Glocusent 106 Lantern or Wondrastical 2-Pack"
        ],
        [
          "$30 to $50",
          "Tubicen Table Lamp or AYL 1800LM Lantern"
        ]
      ]
    }
  },
  {
    "subheading": "Immersion rated vs splash protected",
    "cards": [
      {
        "label": "Immersion rated",
        "text": "The Glocusent 106 Lantern lists IP68, which is built for rain, spray and submersion."
      },
      {
        "label": "Splash protected",
        "text": "The AYL 1800LM Lantern, Wondrastical 2-Pack and Tubicen Table Lamp list IP44, which suits a sheltered spot."
      }
    ],
    "note": "Most campers should default to the Glocusent 106 Lantern unless the lantern lives under cover."
  },
  {
    "subheading": "By Light Style",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Brightest light",
          "AYL 1800LM Lantern"
        ],
        [
          "Warm table glow",
          "Tubicen Table Lamp"
        ],
        [
          "Decorative flame effect",
          "Wondrastical 2-Pack"
        ],
        [
          "Flexible color temperatures",
          "Glocusent 106 Lantern"
        ]
      ]
    }
  },
  {
    "subheading": "For Boating and Kayaking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "An IP68 rating and a compact body"
      },
      {
        "label": "In this comparison",
        "text": "The Glocusent 106 Lantern states IP68, measures 2.2 x 2.2 x 5.6 inches and charges by USB-C from a power bank."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Glocusent 106 Lantern if you will be out in real rain or near water, since IP68 is the only immersion rating in this comparison."
      },
      {
        "label": "Save if",
        "text": "Save with the AYL 1800LM Lantern or Wondrastical 2-Pack if the lantern stays under an awning or on a porch, where IP44 is enough."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Reading IP ratings",
    "explanation": "The first digit is dust protection and the second is water: IP44 means splashes from any direction, while IP68 means continuous immersion beyond a set depth. A lantern marketed as waterproof but rated IP44 will handle rain on a covered table, not a dunking. Look for the exact code in the specs and compare it with the conditions you expect."
  },
  {
    "criterion": "Charging port protection",
    "explanation": "A rating applies to a closed unit, so an open USB port is a weak point in rain or on a wet boat. Most waterproof lanterns use a rubber plug or cover that must be closed before use. Check the photos and bullets for a cover and close it every time."
  },
  {
    "criterion": "Battery capacity and honest runtime",
    "explanation": "Large figures such as 80 hours usually describe the lowest dimming step. A 4000mAh pack gives long runtime at 5 percent brightness and far less at full output. Find the mAh number, and judge the runtime at the brightness you will actually use."
  },
  {
    "criterion": "Light color and ambiance",
    "explanation": "Warm light around 3000K is easier on the eyes at a dinner table, and cool white around 6000K shows more detail for repairs. A lantern with several color temperatures covers both jobs. Look for a K value or named modes in the listing."
  },
  {
    "criterion": "Size and mounting",
    "explanation": "A compact lantern fits a pack and hangs from a tent loop, while a table lamp sits flat and stays at camp. Match the shape to how you will use it. Check the dimensions and weight, and note whether a handle or hook is included."
  }
];

export const faq = [
  {
    "q": "Is IP44 waterproof enough for camping?",
    "a": "It protects against splashes, so it handles light rain on a covered table. For heavy downpours or immersion, step up to IP68 like the Glocusent 106 Lantern."
  },
  {
    "q": "Can I leave a lantern out in the rain?",
    "a": "Only if the rating supports it and the charging port is closed. Even then, bring a lantern in when the storm is heavy. Splash protection is not the same as sustained exposure."
  },
  {
    "q": "Is IP68 worth it over IP44?",
    "a": "It is worth it if the lantern may fall in water or sit in a boat. If you only expect drizzle, IP44 lanterns such as the Tubicen Table Lamp are fine and cost less."
  },
  {
    "q": "How do I charge a waterproof lantern?",
    "a": "Dry the area around the port, open the cover, plug in and close the cover afterward. Never charge a wet lantern."
  },
  {
    "q": "How do I maintain the seals?",
    "a": "Rinse off salt or mud, keep the port cover free of grit and store the lantern dry. A damaged cover reduces the rating."
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
