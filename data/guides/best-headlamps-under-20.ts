export const guideSlug = "best-headlamps-under-20";
export const guideTitle = "6 Best Headlamps Under 20 in 2026";
export const metaTitle = "Best Headlamps Under 20 in 2026";
export const metaDescription = "Best headlamps under $20: six rechargeable and AAA headlamps from 230 to 1000 lumens compared on beam, motion sensor and runtime for camping.";
export const mainKeyword = "best headlamps under 20";
export const introParagraphs = [
  "Twenty dollars is a generous headlamp budget, and the picks range from a $8 rechargeable to a motion-sensor model near the cap. Several arrive as two-packs, so one purchase can light a pair of campers.",
  "I ranked the six by usable features per dollar, then by runtime, beam style and water rating. The notes explain where claimed lumen figures overstate real use and which headlamps pair a red light with the white one."
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
    "id": "best-headlamps-under-20-1",
    "rank": 1,
    "badge": "Best Value Under $20",
    "name": "Everbeam H6 Pro LED Head Torch Headlamp",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ML--iW4VL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07PF5VCMH?tag=rvgearlab-amz-20",
    "description": "Everbeam H6 Pro is a 650 lumen headlamp that reaches a tested 126 m. It has five modes, a motion sensor you operate by waving a hand, a 1200mAh built-in battery and an IPX4 weather rating.\n\nAt about $19 it sits at the top of the range and costs $11 more than the VAVOFO 500. It offers the most polished feature set of the six, with 6.5 hours on white light and 2.5 hours on high.\n\nIt suits campers who need a hands-free switch with muddy or gloved hands. The red mode saves night vision.",
    "specs": [
      "650 lumens, 126 m beam",
      "Wave motion sensor",
      "1200mAh, IPX4"
    ],
    "pros": [
      "Motion sensor switches without touching",
      "6.5 hours on white light",
      "Red mode keeps night vision",
      "IPX4 weather rating"
    ],
    "cons": [
      "Costs near the cap",
      "High mode drains in 2.5 hours"
    ],
    "bestFor": "Hands-free use",
    "take": "A feature-rich headlamp at the top of the budget.",
    "catch": "Use the low mode to stretch runtime."
  },
  {
    "id": "best-headlamps-under-20-2",
    "rank": 2,
    "badge": "Best Cheapest Rechargeable",
    "name": "VAVOFO LED Headlamp Flashlight",
    "price": "$7.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41erQ1zdOFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FVWX7V5C?tag=rvgearlab-amz-20",
    "description": "VAVOFO is a 500 lumen rechargeable headlamp with a 100 m reach and a zoom from a 5 degree spot to a 120 degree flood. It has a red light, stepless dimming and an IPX4 rating.\n\nAt about $8 it is the cheapest pick, and the Everbeam H6 Pro costs more than twice as much. It has a small 500mAh battery that runs 3 to 7 hours.\n\nIt suits a campsite headlamp for cooking and walking to the toilet. The zoom changes with the task.",
    "specs": [
      "500 lumens, 100 m reach",
      "5 to 120 degree zoom",
      "Red light, IPX4"
    ],
    "pros": [
      "Zoom from spot to flood",
      "Red light for night vision",
      "Stepless dimming",
      "Lowest price in the guide"
    ],
    "cons": [
      "Small 500mAh battery",
      "3 to 7 hour runtime"
    ],
    "bestFor": "Everyday campsite chores",
    "take": "A zoomable rechargeable for about $8.",
    "catch": "Charge it before every trip."
  },
  {
    "id": "best-headlamps-under-20-3",
    "rank": 3,
    "badge": "Best AAA Pack",
    "name": "Energizer LED Headlamp PRO",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41evvXVMkIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BN4HDWQ2?tag=rvgearlab-amz-20",
    "description": "The Energizer pack contains two headlamps that each deliver 260 lumens and an 80 meter beam. Three modes with 10 to 100 percent dimming cover spot and wide light, and an IPX4 rating handles light rain.\n\nAt about $15 it costs $7 more than the VAVOFO and gives you two lamps, and each runs on AAA cells you can swap anywhere. Each lamp has less light than the VAVOFO.\n\nIt suits a pair of campers or a lamp plus a backup. AAA cells never need a power outlet.",
    "specs": [
      "260 lumens, 80 m beam",
      "Three modes, 10-100% dimming",
      "IPX4 water resistant"
    ],
    "pros": [
      "Two lamps in one pack",
      "Dimming from 10 to 100 percent",
      "Spot and wide modes",
      "Swappable AAA cells"
    ],
    "cons": [
      "Lower lumens than the VAVOFO",
      "Needs spare AAA cells"
    ],
    "bestFor": "Two campers",
    "take": "Two reliable lamps for one low price.",
    "catch": "Pack spare AAA cells."
  },
  {
    "id": "best-headlamps-under-20-4",
    "rank": 4,
    "badge": "Best Dual Power",
    "name": "Lepro Dual Power Headlamp USB-C Charge & AAA Battery Motion Sensor",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4169wP7awbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GCYYMLRM?tag=rvgearlab-amz-20",
    "description": "Lepro's Dual Power headlamp charges by USB-C or runs on three AAA batteries as a backup. It has a wave motion sensor and ten lighting modes, including seven white options, and gives up to 30 hours in low flood and 4 hours on spot.\n\nAt about $20 it is the priciest pick and costs $1 more than the Everbeam H6 Pro. It is the only headlamp here that falls back on AAA cells when the battery dies.\n\nIt suits long trips where charging is uncertain. The ten modes cover reading to hiking.",
    "specs": [
      "USB-C plus 3x AAA backup",
      "Wave motion sensor",
      "10 modes, 30 hours low"
    ],
    "pros": [
      "Falls back on AAA cells",
      "30 hours on low flood",
      "Motion sensor",
      "Ten lighting modes"
    ],
    "cons": [
      "Costs the full budget",
      "Spot mode lasts only 4 hours"
    ],
    "bestFor": "Long trips",
    "take": "A headlamp that never leaves you without power.",
    "catch": "Do not leave AAA cells inside in storage."
  },
  {
    "id": "best-headlamps-under-20-5",
    "rank": 5,
    "badge": "Best Two-Pack",
    "name": "ABUSVEX Headlamp Rechargeable 2PCS",
    "price": "$18.66",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/419jLilf-EL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CGV3ZSZN?tag=rvgearlab-amz-20",
    "description": "ABUSVEX is a two-pack of USB-C rechargeable headlamps that claim up to 1000 lumens with five main modes. Both ship in one set.\n\nAt about $19 it costs about the same as the Everbeam H6 Pro and gives two lamps. The lumen claim is the highest in the guide.\n\nIt suits a pair of campers who want matching lamps. Use the lower modes for runtime.",
    "specs": [
      "Two headlamps, USB-C",
      "Up to 1000 lumens claimed",
      "Five main modes"
    ],
    "pros": [
      "Two lamps in one set",
      "USB-C charging",
      "Highest claimed brightness here",
      "Five modes"
    ],
    "cons": [
      "Lumen claim is the top mode only",
      "Small battery in each lamp"
    ],
    "bestFor": "Pairs of campers",
    "take": "A pair of rechargeable lamps for the price of one.",
    "catch": "Treat 1000 lumens as a burst figure."
  },
  {
    "id": "best-headlamps-under-20-6",
    "rank": 6,
    "badge": "Best Tilt and Zoom",
    "name": "Staaricc Super Bright Headlamp Rechargeable High Lumen/Head lamp for Adults",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41yR9stVrWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F6XMBW49?tag=rvgearlab-amz-20",
    "description": "Staaricc is a rechargeable headlamp with a zoom that goes from flood to spot, four modes (high, low, strobe, SOS) and USB-C charging. The head tilts from 0 to 90 degrees in an aluminum shell.\n\nAt about $17 it undercuts the Lepro by $2 and offers a metal body that the plastic lamps lack. It has no red light.\n\nIt suits a camper who wants a sturdier body. The tilt aims the beam at a book or a pot.",
    "specs": [
      "Zoom flood to spot",
      "Type-C, 0-90 degree tilt",
      "Aluminum shell, four modes"
    ],
    "pros": [
      "Zoom from flood to spot",
      "Type-C charging",
      "0 to 90 degree tilt",
      "Aluminum shell"
    ],
    "cons": [
      "No red light",
      "Four modes only"
    ],
    "bestFor": "Sturdy everyday use",
    "take": "A metal-bodied zoom headlamp.",
    "catch": "Check the strap for your head size."
  }
];

export const howWeEvaluated = [
  {
    "title": "Features per dollar",
    "description": "Beam options, red light, motion sensor and modes were compared."
  },
  {
    "title": "Battery and runtime",
    "description": "Rechargeable, AAA and dual-power designs were compared."
  },
  {
    "title": "Water rating",
    "description": "IPX4 and unrated bodies were separated."
  },
  {
    "title": "Pack size",
    "description": "Single lamps and two-packs were compared on cost per lamp."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is at or under $20, and the top pick adds the most useful features."
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
    "subheading": "By camper type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Hands-free in the dark",
          "Everbeam H6 Pro",
          "Wave sensor."
        ],
        [
          "Tightest budget",
          "VAVOFO 500 Lumen",
          "About $8."
        ],
        [
          "Two campers, AAA",
          "Energizer Vision HD+ 2-Pack",
          "Two lamps."
        ],
        [
          "Long trips without power",
          "Lepro Dual Power",
          "AAA backup."
        ],
        [
          "A matching pair",
          "ABUSVEX 2-Pack",
          "Two USB-C lamps."
        ],
        [
          "Sturdy body",
          "Staaricc Zoom",
          "Aluminum shell."
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
          "VAVOFO 500 Lumen or Energizer Vision HD+ 2-Pack"
        ],
        [
          "$10 to $20",
          "Staaricc Zoom or ABUSVEX 2-Pack"
        ],
        [
          "$10 to $20",
          "Everbeam H6 Pro or Lepro Dual Power"
        ]
      ]
    }
  },
  {
    "subheading": "Rechargeable vs AAA",
    "cards": [
      {
        "label": "Rechargeable",
        "text": "The Everbeam H6 Pro, VAVOFO 500 Lumen, ABUSVEX 2-Pack and Staaricc Zoom charge by USB-C and need no cells."
      },
      {
        "label": "AAA",
        "text": "The Energizer Vision HD+ 2-Pack and Lepro Dual Power can run on cells you swap anywhere."
      }
    ],
    "note": "Most campers should take the Everbeam H6 Pro."
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
          "VAVOFO 500 Lumen"
        ],
        [
          "About $15",
          "Energizer Vision HD+ 2-Pack"
        ],
        [
          "About $17",
          "Staaricc Zoom"
        ],
        [
          "About $19",
          "Everbeam H6 Pro"
        ],
        [
          "About $19",
          "ABUSVEX 2-Pack"
        ],
        [
          "About $20",
          "Lepro Dual Power"
        ]
      ]
    }
  },
  {
    "subheading": "For a camp cook specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a wide flood beam, a dimmer and a red mode."
      },
      {
        "label": "In this comparison",
        "text": "The VAVOFO 500 Lumen zooms to flood and has a red mode. The Everbeam H6 Pro switches by wave when your hands are messy."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a motion sensor or AAA backup: the Everbeam H6 Pro and Lepro Dual Power add them."
      },
      {
        "label": "Save if",
        "text": "Save if you only need a light: the VAVOFO 500 Lumen is about $8 and the Energizer Vision HD+ 2-Pack gives two lamps for about $15."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Lumens vs reach",
    "explanation": "A lumen number measures total light, while reach in meters shows how far a beam travels. A 650 lumen lamp with a 126 m beam suits trails, while a 230-degree flood lamp suits chores. Look for the reach number next to the lumens and take any claim above 600 lumens as a short burst rather than a running mode."
  },
  {
    "criterion": "Runtime by mode",
    "explanation": "A headlamp may claim 30 hours, but only on its lowest setting. The Everbeam lists 6.5 hours on white and 2.5 on high. Compare runtime on the mode you will actually use and remember that cold weather shortens the number a little and aim for at least two hours on a mid setting for a night of chores."
  },
  {
    "criterion": "Rechargeable vs AAA",
    "explanation": "A rechargeable lamp needs an outlet or a power bank, while an AAA lamp can be reloaded anywhere. A dual-power model does both. Check whether the battery is built in, and a built-in cell cannot be swapped when it wears out and a power bank solves the outlet problem in a tent."
  },
  {
    "criterion": "Red light",
    "explanation": "Red light preserves night vision and does not attract insects as much as white. It is handy at a shared campsite. Look for a red mode in the description, and a lamp with red and white modes saves buying a second lamp because bright white light ruins night vision for your whole group."
  },
  {
    "criterion": "Motion sensor",
    "explanation": "A wave sensor lets you turn the lamp on or off without touching it, which helps with dirty hands. It can trigger by accident in a pack. Check whether you can turn the sensor off and see if the manual describes a lock-out so it stays off in a pack since a sensor that turns on in a bag drains the battery."
  },
  {
    "criterion": "Water rating",
    "explanation": "IPX4 resists splashes from any direction, which covers rain. An unrated lamp can fail in a downpour. Look for the IP number in the product details and treat an unrated lamp as splash-proof at best so check before a wet-weather trip, and carry a small dry bag for the lamp if rain is forecast."
  }
];

export const faq = [
  {
    "q": "Do I need 1000 lumens in a headlamp?",
    "a": "Rarely. 200 to 400 lumens covers camp chores and trails, and the ABUSVEX 2-Pack at up to 1000 lumens drains its small battery fast. Choose a lamp with a good low mode and check that the low mode is bright enough to read by."
  },
  {
    "q": "What does IPX4 mean?",
    "a": "IPX4 means it resists splashes from any direction, which suits rain. The Everbeam H6 Pro and VAVOFO 500 Lumen carry it. It does not allow dunking, so it is fine in rain and dangerous only in a dunk."
  },
  {
    "q": "Is a motion sensor useful?",
    "a": "Yes if your hands are busy, and no if the sensor trips in your pack. The Everbeam H6 Pro and Lepro Dual Power both have one. Turn it off for storage and decide whether touching the lamp with a muddy glove is a bigger problem."
  },
  {
    "q": "How do I extend runtime?",
    "a": "Use a lower mode and keep the lamp warm in cold weather. The Lepro Dual Power gives 30 hours on low flood. Carry a power bank for the rechargeable lamps and keep the lamp out of a freezing pocket overnight."
  },
  {
    "q": "Are two-packs worth it?",
    "a": "Yes for couples, as the Energizer Vision HD+ 2-Pack and ABUSVEX 2-Pack cost less per lamp. One lamp can stay as a spare. Check the lamps use the same charger, and share a spare charging cable between them."
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
