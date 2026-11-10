export const guideSlug = "best-flashlights-under-30";
export const guideTitle = "6 Best Flashlights Under 30 in 2026";
export const metaTitle = "Best Flashlights Under 30 in 2026";
export const metaDescription = "Best flashlights under $30: six large, mini and flexible rechargeable flashlights compared on throw, runtime and water rating for camping and repairs.";
export const mainKeyword = "best flashlights under 30";
export const introParagraphs = [
  "Moving from $20 to $30 does not buy a better pocket flashlight so much as a different kind: a big 30W hand light, a bendable work stick or a bulk set of minis. The six picks here range from a $12 pocket light to a $29 flexible stick.",
  "I ranked them by usefulness per dollar, then by runtime and water rating. The notes explain why the biggest lumen numbers on this page are marketing figures and what to look at instead."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/gear-lit-tent-night.webp";
export const heroImageAlt = "Tent lit from inside in the middle of a forest at night";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-flashlights-under-30-1",
    "rank": 1,
    "badge": "Best Value Under $30",
    "name": "Flashlight 10000 High Lumens Rechargeable 30W Super Bright LED Flash Light",
    "price": "$22.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51D0G7nU3rL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F2YPTXJ2?tag=rvgearlab-amz-20",
    "description": "Shadowhawk is a USB-C rechargeable 30W flashlight with an XHP70.2 LED chip, five modes and an adjustable-focus head. It lists a 5000 ft beam, up to 12 hours of runtime and a power indicator.\n\nAt about $23 it costs $6 more than the RECHOO 4-Pack and offers a much larger body and battery. The figure of 10,000 lumens is a marketing number for a 30W lamp, so judge it on runtime and throw.\n\nIt suits a campsite where you need to light a ridge or a trail. The power indicator helps manage the battery.",
    "specs": [
      "30W, XHP70.2 LED",
      "5000 ft beam claimed",
      "12 hours, power indicator"
    ],
    "pros": [
      "Adjustable focus for flood or throw",
      "12 hour runtime claimed",
      "USB-C rechargeable battery",
      "Power indicator on the head"
    ],
    "cons": [
      "Larger and heavier",
      "Lumen claim is marketing"
    ],
    "bestFor": "Far throws and ridge lighting",
    "take": "A big, rechargeable hand light for the campsite.",
    "catch": "Heavy for a pocket."
  },
  {
    "id": "best-flashlights-under-30-2",
    "rank": 2,
    "badge": "Best Work Light",
    "name": "Flexible LED Flashlight Stick",
    "price": "$28.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41QK4ivfTBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GPY94S32?tag=rvgearlab-amz-20",
    "description": "This is a 30 inch bendable LED flashlight stick with a hanging hook and three modes (high, medium and flash). A non-removable rechargeable battery powers it.\n\nAt about $29 it is the most expensive pick and does a job that no hand light can: it bends around an axle or hangs from a hood. The Shadowhawk beats it on throw.\n\nIt suits car and trailer repairs. Hang it and work with both hands.",
    "specs": [
      "30 in bendable stick",
      "Hanging hook",
      "Three modes, rechargeable"
    ],
    "pros": [
      "Bends into tight spaces",
      "Hands-free hanging hook",
      "Rechargeable battery",
      "Long and slim"
    ],
    "cons": [
      "Short throw",
      "Battery cannot be replaced"
    ],
    "bestFor": "Trailer and car repairs",
    "take": "A work light that bends around the job.",
    "catch": "It is not a trail light."
  },
  {
    "id": "best-flashlights-under-30-3",
    "rank": 3,
    "badge": "Best Rugged Body",
    "name": "Rechargeable LED Flashlight",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Gqrko4jdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FWKDRQW7?tag=rvgearlab-amz-20",
    "description": "This 30W flashlight claims 3937 ft of reach and 12 hours of runtime, with an adjustable focus head and an aluminum alloy body rated IP67. It is built for rain and dust.\n\nAt about $19 it costs $4 less than the Shadowhawk and has a higher water rating. The 100,000 lumen figure is not realistic for a 30W lamp, so use the reach and IP67 rating instead.\n\nIt suits a wet-weather campsite. The alloy body shrugs off knocks.",
    "specs": [
      "30W, 3937 ft claimed reach",
      "IP67 aluminum alloy",
      "12 hours, adjustable focus"
    ],
    "pros": [
      "IP67 water and dust rating",
      "Aluminum alloy body",
      "Adjustable focus",
      "Lower price than the Shadowhawk"
    ],
    "cons": [
      "Lumen claim is not realistic",
      "Heavy for pocket use"
    ],
    "bestFor": "Wet-weather camps",
    "take": "A tough waterproof 30W light.",
    "catch": "Ignore the lumen figure."
  },
  {
    "id": "best-flashlights-under-30-4",
    "rank": 4,
    "badge": "Best Group Pack",
    "name": "RECHOO Tactical Flashlight 4 Pack",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51IuXUETdML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BBF161CY?tag=rvgearlab-amz-20",
    "description": "RECHOO is a four-pack of zoomable aluminum flashlights claiming 1500 lumens, five modes and an IP65 rating. The head telescopes from a wide flood to a tight spot.\n\nAt about $17 it costs $6 less than the Shadowhawk and gives four lights. Each light is far smaller than the 30W lamps.\n\nIt suits a family, a group site or an emergency kit. One light can live in each tent.",
    "specs": [
      "Four-pack, 1500 lumens claimed",
      "Zoomable, five modes",
      "IP65 aluminum body"
    ],
    "pros": [
      "Four lights for one price",
      "Zoomable beam",
      "IP65 rating",
      "Aluminum body"
    ],
    "cons": [
      "Uses cells that must be bought",
      "Smaller throw than the 30W lamps"
    ],
    "bestFor": "Group sites",
    "take": "Four rugged lights for one price.",
    "catch": "Stock spare cells."
  },
  {
    "id": "best-flashlights-under-30-5",
    "rank": 5,
    "badge": "Best Bulk Set",
    "name": "PROLOSO 30 Pcs Mini Flashlights with Lanyard Batteries Included Handheld Flashlight Torch Set for Kids Camping",
    "price": "$16.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51hRQ0Mq5cL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DS5Q7GZT?tag=rvgearlab-amz-20",
    "description": "PROLOSO is a set of 30 mini flashlights in four colors, each 3.1 inches long and with a lanyard and batteries included. They are ready to use from the bag.\n\nAt about $17 it costs the same as the RECHOO 4-Pack and gives 30 lights, which costs about 57 cents each. It trades brightness for numbers.\n\nIt suits a scout troop, a camp event or a school trip. They are cheap enough to lose.",
    "specs": [
      "30 mini flashlights",
      "3.1 inch plastic, lanyard",
      "Batteries included"
    ],
    "pros": [
      "30 lights in one set",
      "Batteries included",
      "Lanyard on each light",
      "Four colors for kids"
    ],
    "cons": [
      "Low light output",
      "Plastic bodies"
    ],
    "bestFor": "Groups and events",
    "take": "A bulk pack for large groups.",
    "catch": "They are for close-up light only."
  },
  {
    "id": "best-flashlights-under-30-6",
    "rank": 6,
    "badge": "Best Pocket Rechargeable",
    "name": "DARKBEAM 2800 High Lumens Flashlights with LED Power Display",
    "price": "$11.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41aiTtA0MML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GZ3D5CMD?tag=rvgearlab-amz-20",
    "description": "DARKBEAM is a USB-C rechargeable flashlight with adjustable focus, three modes and a digital power display. It claims 2800 lumens and a 600 ft beam in a mini 5.3 inch body weighing 4.02 oz.\n\nAt about $12 it is the cheapest pick and costs $11 less than the Shadowhawk. It shows remaining charge, which the bigger lights offer less simply.\n\nIt suits a pocket or a belt. Choose it as the daily light.",
    "specs": [
      "2800 lumens claimed, 600 ft",
      "Power display, adjustable focus",
      "5.3 in, 4.02 oz"
    ],
    "pros": [
      "Digital battery display",
      "USB-C rechargeable",
      "Adjustable focus",
      "Pocket-size 4.02 oz"
    ],
    "cons": [
      "Short run time at top mode",
      "Smaller than the 30W lights"
    ],
    "bestFor": "Everyday pocket use",
    "take": "A pocket light with a battery gauge.",
    "catch": "Avoid the top mode for long."
  }
];

export const howWeEvaluated = [
  {
    "title": "Throw vs flood",
    "description": "Reach and beam focus were compared for far lighting and close work."
  },
  {
    "title": "Battery and runtime",
    "description": "Rechargeable cells and claimed runtime were compared."
  },
  {
    "title": "Water rating",
    "description": "IP67, IP65 and unrated bodies were compared."
  },
  {
    "title": "Pack contents",
    "description": "Single lights, packs and sets were separated."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is at or under $30, and the top pick delivers the most throw for the money."
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
          "Far throws, ridge lighting",
          "Shadowhawk 30W",
          "5000 ft claimed."
        ],
        [
          "Trailer and car repairs",
          "Flexible LED Stick",
          "Bends and hangs."
        ],
        [
          "Wet-weather camp",
          "30W Work Flashlight",
          "IP67."
        ],
        [
          "Group camp",
          "RECHOO 4-Pack",
          "Four lights."
        ],
        [
          "Large events",
          "PROLOSO 30 Minis",
          "30 lights."
        ],
        [
          "Everyday pocket carry",
          "DARKBEAM 2800",
          "Power display."
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
          "$10 to $20",
          "DARKBEAM 2800 or PROLOSO 30 Minis"
        ],
        [
          "$10 to $20",
          "RECHOO 4-Pack or 30W Work Flashlight"
        ],
        [
          "$20 to $30",
          "Shadowhawk 30W or Flexible LED Stick"
        ]
      ]
    }
  },
  {
    "subheading": "Big lamp vs pocket light",
    "cards": [
      {
        "label": "Big lamp",
        "text": "The Shadowhawk 30W and 30W Work Flashlight reach far and run for hours, but they are bulky."
      },
      {
        "label": "Pocket light",
        "text": "The DARKBEAM 2800, RECHOO 4-Pack and PROLOSO 30 Minis fit a pocket but throw less."
      }
    ],
    "note": "Most campers should take the Shadowhawk 30W for the campsite and a pocket light as backup."
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
          "About $12",
          "DARKBEAM 2800"
        ],
        [
          "About $17",
          "RECHOO 4-Pack"
        ],
        [
          "About $17",
          "PROLOSO 30 Minis"
        ],
        [
          "About $19",
          "30W Work Flashlight"
        ],
        [
          "About $23",
          "Shadowhawk 30W"
        ],
        [
          "About $29",
          "Flexible LED Stick"
        ]
      ]
    }
  },
  {
    "subheading": "For fixing a trailer at night specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a bendable neck, a hook and a rechargeable battery."
      },
      {
        "label": "In this comparison",
        "text": "The Flexible LED Stick bends and hangs. The 30W Work Flashlight is the alternative if you also need rain protection."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you need throw or a work light: the Shadowhawk 30W and Flexible LED Stick do those jobs."
      },
      {
        "label": "Save if",
        "text": "Save if you need a pocket light or a bulk set: the DARKBEAM 2800 is about $12 and the PROLOSO 30 Minis about $17."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Lumens and marketing",
    "explanation": "A 30W LED can produce only a few thousand real lumens, so a claim of 10,000 or 100,000 lumens is a marketing figure. Throw in feet and runtime in hours are more honest comparisons. Ignore the biggest number and look at the beam distance and battery capacity."
  },
  {
    "criterion": "Throw vs flood",
    "explanation": "Throw is how far the beam reaches, while flood is how wide it spreads. A big adjustable-focus lamp does both, while a flexible stick does neither well. Look for an adjustable head if you want one light for tree lines and tent chores and ask how far you really need to see before you pay for a big lamp."
  },
  {
    "criterion": "Battery and charge",
    "explanation": "A built-in rechargeable battery gives hours of light but cannot be swapped. A power indicator shows what is left. Check the charge port type and whether a cable is included, and a unit with a power indicator saves guessing how long it will last so a long weekend never starts with a dead light."
  },
  {
    "criterion": "Water rating",
    "explanation": "IP67 survives brief submersion, IP65 resists jets and dust, and an unrated light can fail in rain. A camp light lives outdoors. Check the IP number in the product title or bullets, and a rubber port cover is a good sign on a rechargeable light before you take the light camping in rain."
  },
  {
    "criterion": "Weight and size",
    "explanation": "A 30W lamp is bigger and heavier than a pocket light, and it needs a belt loop or bag. A mini fits a pocket but throws less. Check the length and weight in the specifications and think about whether it will ride in a pocket, a pack or the car door because a heavy lamp tires the wrist on a long walk."
  },
  {
    "criterion": "Work light features",
    "explanation": "A hanging hook, a flexible neck or a magnet frees both hands for repairs. These matter more than lumens in a garage. Look for the hook or the bendable section and keep in mind that a bendable neck holds its shape better when cold for jobs like checking a hitch or a tire."
  }
];

export const faq = [
  {
    "q": "Is a 100,000 lumen flashlight real?",
    "a": "No, a 30W lamp cannot produce that much light, and the 30W Work Flashlight number is a marketing figure. Judge it on reach and runtime instead. Pick a light for its beam distance, such as the Shadowhawk 30W at 5000 ft claimed."
  },
  {
    "q": "How long does a big flashlight run?",
    "a": "Often 12 hours on low and a fraction on high. The Shadowhawk 30W lists up to 12 hours, which applies to a low mode. Expect a couple of hours on high and plan on a power bank for trips longer than a weekend."
  },
  {
    "q": "Is IP67 better than IP65?",
    "a": "IP67 survives brief submersion, while IP65 resists jets. The 30W Work Flashlight has IP67 and the RECHOO 4-Pack IP65. For rain either is fine while an unrated light needs protection from splashes, so choose by how close you camp to water and the lamp should be dried after use."
  },
  {
    "q": "Are 30 mini flashlights useful?",
    "a": "For groups, yes. The PROLOSO 30 Minis give each person a light for close work, though they are dim. Use a bigger lamp for distance and lanyards help them survive a day with kids and let kids carry them instead of the good lamp."
  },
  {
    "q": "How do I charge on a trip?",
    "a": "Use a power bank or car USB port with the USB-C cable. The Shadowhawk 30W and DARKBEAM 2800 both charge that way. Charge before a trip and keep the cable in the same pouch as the light."
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
