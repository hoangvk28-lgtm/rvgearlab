export const guideSlug = "best-edc-flashlights-for-camping";
export const guideTitle = "5 Best Edc Flashlights For Camping in 2026";
export const metaTitle = "Best Edc Flashlights For Camping in 2026";
export const metaDescription = "Best EDC flashlights for camping compared on pocket size, lumens, charging, UV and red light, for campers who want one small light on every trip.";
export const mainKeyword = "best edc flashlights for camping";
export const introParagraphs = [
  "An everyday-carry flashlight earns its keep in the pocket, not on the shelf: it needs to be small, clip securely and be bright enough for camp chores. At camp, the useful extras are a magnet for hands-free work, USB-C charging and a red or low mode that does not wreck night vision.",
  "Five pocket lights are compared, from an OLIGHT with white, red and UV sources to a 400-lumen WUBEN. The two WUBEN G5 listings are one product, so they appear once."
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
    "id": "best-edc-flashlights-for-camping-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "OLIGHT ArkPro Lite EDC Pocket Flashlight Rechargeable with UV Light",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31-3nWtaarL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FGJG1V2N?tag=rvgearlab-amz-20",
    "description": "The OLIGHT ArkPro Lite carries three light sources: up to 1200 lumens of white light, a 365nm UV light at 1000mW and a red light. It charges by magnetic cable or USB-C, and the listing quotes up to 10 days of continuous light from a full charge.\n\nIt is the only pick with a red light, and it matches the HOTLIGH ZF8313's UV source. The flat shape has anti-slip texture and a two-way pocket clip.\n\nIt suits campers who want a premium pocket light for map reading and night vision. The red light preserves night vision without being seen from afar.",
    "specs": [
      "1200 lumens, red, 365nm UV",
      "Magnetic or USB-C charging",
      "Flat shape, two-way clip"
    ],
    "pros": [
      "Red light for night vision",
      "1200 lumens in a flat body",
      "Magnetic or USB-C charging",
      "Color-coded battery indicators"
    ],
    "cons": [
      "Highest price of the five",
      "UV and red add buttons to learn"
    ],
    "bestFor": "Premium pocket carry",
    "take": "A premium pocket light with red and UV sources for campers who like options.",
    "catch": "Mode choices take a minute to learn in the dark."
  },
  {
    "id": "best-edc-flashlights-for-camping-2",
    "rank": 2,
    "badge": "Best Pocket Throw",
    "name": "Guardtier M70 EDC Flashlight",
    "price": "$20.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/416RCU1MkeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F28L87F6?tag=rvgearlab-amz-20",
    "description": "The Guardtier M70 lists 1100 lumens and a throw of 177 meters from a 6500K LED, with Turbo, High, Medium, Low and Strobe modes. An 800mAh non-removable battery charges in about 2 hours by USB-C for up to 20 hours of use, and the body is 3.8 inches long and weighs 2.1 ounces.\n\nIt lists the longest stated throw of the five at 177 meters, ahead of the HOTLIGH's 144 meters, and it is one of the lightest. The aerospace-grade aluminum has a Type III coating rated from -40C to 60C.\n\nIt suits campers who want a credit-card-length light with real reach. A double-click shortcut jumps to Turbo.",
    "specs": [
      "1100 lumens, 177 m throw",
      "800mAh USB-C, 2 hour charge",
      "3.8 in, 2.1 oz"
    ],
    "pros": [
      "177 meter listed throw",
      "2.1 ounce pocket body",
      "Double-click Turbo shortcut",
      "Rated -40C to 60C"
    ],
    "cons": [
      "Non-removable 800mAh battery",
      "No red mode listed"
    ],
    "bestFor": "Reach in a small body",
    "take": "The pocket light with the longest stated throw at a very low weight.",
    "catch": "The built-in battery cannot be swapped on the trail."
  },
  {
    "id": "best-edc-flashlights-for-camping-3",
    "rank": 3,
    "badge": "Best Magnetic Multi",
    "name": "HOTLIGH ZF8313 Rechargeable Flashlight",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Sgi6zbRlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH2DLXBG?tag=rvgearlab-amz-20",
    "description": "The HOTLIGH ZF8313 lists 2000 lumens with a 144 meter beam, a 2000mAh battery with Type-C charging in about 2 hours, and an IPX6 rating. A magnetic body, a sidelight with full-color RGB breathing modes and a UV light source are also listed.\n\nIt has the highest lumen listing and the biggest battery of the pocket lights, with an IPX6 rating that beats the OLIGHT's unlisted splash rating. The RGB side effect doubles as a signal or tent mood light.\n\nIt suits campers who want a magnet to hang the light hands-free from a tent frame. The UV mode checks for scorpions and stains.",
    "specs": [
      "2000 lumens, 144 m beam",
      "2000mAh Type-C, IPX6",
      "Magnetic, RGB side light, UV"
    ],
    "pros": [
      "2000 lumens listed",
      "Magnetic body for hands-free",
      "IPX6 water jets",
      "UV and RGB side light"
    ],
    "cons": [
      "Lumen figure is peak only",
      "Thick alloy body is larger"
    ],
    "bestFor": "Hands-free magnet work",
    "take": "A magnetic, high-output pick that hangs from tent poles.",
    "catch": "Treat the 2000 lumens as a brief peak, not a steady output."
  },
  {
    "id": "best-edc-flashlights-for-camping-4",
    "rank": 4,
    "badge": "Best Compact Clip",
    "name": "WUBEN G5 Rechargeable EDC Flashlight",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bTf4haRnL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DT6SS412?tag=rvgearlab-amz-20",
    "description": "The WUBEN G5 offers up to 400 lumens from a dual-LED setup with three white modes, a 180-degree rotatable lamp head and clip, Type-C charging and a magnetic base. The listing describes a slide-to-charge design that works in the dark.\n\nIts rotating head turns the light into a work lamp on a hat brim, which no other pick can. It is also the lowest brightness of the five at 400 lumens and one of the cheapest.\n\nIt suits campers who want a small, clip-on light for hat, collar or tailgate. Another listing of the same G5 is folded into this pick.",
    "specs": [
      "400 lumens, rotating head",
      "Type-C, slide-to-charge",
      "Magnetic base and clip"
    ],
    "pros": [
      "180 degree rotating head and clip",
      "Magnetic base for hands-free",
      "Slide-to-charge Type-C",
      "Dual LED with RGB options"
    ],
    "cons": [
      "Lowest output of the five",
      "No UV or red mode named"
    ],
    "bestFor": "Hat or collar clip",
    "take": "A compact clip light that points where you need it.",
    "catch": "400 lumens suit chores, not distance."
  },
  {
    "id": "best-edc-flashlights-for-camping-5",
    "rank": 5,
    "badge": "Best AAA Value",
    "name": "GearLight LED Tactical Flashlights High Lumens",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+gNP-ZkBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07VNCWZBF?tag=rvgearlab-amz-20",
    "description": "The GearLight TAC set includes two lights measuring 5.31 by 1.48 by 1.48 inches, with AAA battery holders (batteries not included), tubes, lanyards and belt clips. The military-grade aluminum is water-resistant and listed to survive a 10-foot drop.\n\nIt is the one pick that runs on common AAA cells and the only two-pack, which the OLIGHT and Guardtier cannot match. It trades recharging for simplicity and has a longer body than the Guardtier.\n\nIt suits campers who want a no-charging, drop-tested pair for the glove box and the pack. One-touch operation keeps it simple.",
    "specs": [
      "Two lights, AAA battery holders",
      "10-foot drop tested",
      "Belt clips and lanyards"
    ],
    "pros": [
      "Two lights in the set",
      "Takes common AAA cells",
      "10-foot drop listed",
      "Belt clips included"
    ],
    "cons": [
      "Batteries not included",
      "No lumen number named"
    ],
    "bestFor": "Simple, battery-powered pair",
    "take": "A rugged two-pack that runs on AAA cells.",
    "catch": "The listing gives no lumen output, so brightness is a guess."
  }
];

export const howWeEvaluated = [
  {
    "title": "Pocket size",
    "description": "Length and weight where stated were compared."
  },
  {
    "title": "Output and throw",
    "description": "Lumens and beam distance were weighed."
  },
  {
    "title": "Charging",
    "description": "USB-C, magnetic and battery options were compared."
  },
  {
    "title": "Extras",
    "description": "Red, UV, magnet and clip features were noted."
  },
  {
    "title": "Price",
    "description": "Value against included features."
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
    "subheading": "By Camp Task",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Night map reading, red light",
          "OLIGHT ArkPro Lite",
          "Red light and a low mode."
        ],
        [
          "Pocket light with reach",
          "Guardtier M70",
          "177 meters in 2.1 ounces."
        ],
        [
          "Hands-free tent work",
          "HOTLIGH ZF8313",
          "Magnetic body with side light."
        ],
        [
          "Hat brim or collar clip",
          "WUBEN G5",
          "Rotating head and clip."
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
          "$10 to $30",
          "WUBEN G5 or Guardtier M70"
        ],
        [
          "$20 to $30",
          "HOTLIGH ZF8313 or GearLight TAC 2-Pack"
        ],
        [
          "$60 to $70",
          "OLIGHT ArkPro Lite"
        ]
      ]
    }
  },
  {
    "subheading": "Rechargeable vs AAA",
    "cards": [
      {
        "label": "Rechargeable",
        "text": "The OLIGHT ArkPro Lite, Guardtier M70, HOTLIGH ZF8313 and WUBEN G5 charge over USB-C or magnetic cable."
      },
      {
        "label": "AAA powered",
        "text": "The GearLight TAC 2-Pack takes AAA cells you can swap anywhere."
      }
    ],
    "note": "Most campers should choose a rechargeable EDC like the Guardtier M70 and carry a power bank."
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
          "Lowest spend",
          "WUBEN G5"
        ],
        [
          "Low spend, two lights",
          "GearLight TAC 2-Pack"
        ],
        [
          "Mid-range throw",
          "Guardtier M70"
        ],
        [
          "Pay for red and UV",
          "OLIGHT ArkPro Lite"
        ]
      ]
    }
  },
  {
    "subheading": "For Tent Setup Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A magnet or clip and a sustained low mode."
      },
      {
        "label": "In this comparison",
        "text": "The HOTLIGH ZF8313 has a magnetic body, while the WUBEN G5 adds a rotating head."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the OLIGHT ArkPro Lite if you want red light and UV in one flat body. It is the only pick with a red source."
      },
      {
        "label": "Save if",
        "text": "Save with the WUBEN G5 or GearLight TAC 2-Pack if you only need chores. They cost the least and cover camp tasks."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Size and weight",
    "explanation": "An EDC light should be small enough to forget. The Guardtier is 3.8 inches and 2.1 ounces, while the GearLight is 5.31 inches. Check the length and weight."
  },
  {
    "criterion": "Red light for night vision",
    "explanation": "A red mode keeps your eyes adjusted to the dark and does not wake tent mates. Only the OLIGHT lists one here. Look for red or low-output modes."
  },
  {
    "criterion": "Clip and magnet",
    "explanation": "A pocket clip and magnet free up your hands for chores. Check that the clip grips a pocket seam. Look for the words magnetic base."
  },
  {
    "criterion": "Battery type",
    "explanation": "Built-in lithium cells charge over USB-C but cannot be swapped. AAA cells can. Check what the listing says."
  },
  {
    "criterion": "Peak lumens",
    "explanation": "A 2000 lumen light may step down to a lower output within a minute or so. Sustained output is what lights your camp chores. Look for the lower levels in the mode list."
  }
];

export const faq = [
  {
    "q": "What is an EDC flashlight?",
    "a": "It is a small light you carry daily in a pocket or on a keychain. For camping, it doubles as a tent light and trail backup. Choose size and clip first."
  },
  {
    "q": "Is a red light worth it?",
    "a": "A red light preserves night vision and does not disturb sleepers. It helps for map reading and stargazing. Only some lights include it."
  },
  {
    "q": "What does the UV mode do?",
    "a": "UV helps find stains, scorpions and some marks at night. It is not required for camping. The OLIGHT and HOTLIGH include it."
  },
  {
    "q": "How do I carry it safely?",
    "a": "Use a pocket clip and keep it away from keys that could press the switch. Lock modes if available. Check it has not turned on in the pack."
  },
  {
    "q": "How do I charge it on a trip?",
    "a": "Use a power bank with a USB-C cable. The OLIGHT also charges magnetically. Keep it cool while charging."
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
