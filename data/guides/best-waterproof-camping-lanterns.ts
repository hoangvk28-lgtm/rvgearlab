export const guideSlug = "best-waterproof-camping-lanterns";
export const guideTitle = "3 Best Waterproof Camping Lanterns in 2026";
export const metaTitle = "Best Waterproof Camping Lanterns in 2026";
export const metaDescription = "Three camping lanterns with stated IPX4 to IPX5 water ratings compared on brightness, battery and carry weight for rainy campsites.";
export const mainKeyword = "best waterproof camping lanterns";
export const introParagraphs = [
  "Few camping lanterns state a real water rating, so this guide covers the three that do. None is rated for submersion, so they suit rain and splashes at a campsite rather than a dunk in a lake.",
  "The ratings here are IPX4 and IPX5, which describe splash and water-jet resistance. Each pick was compared on that rating, light output, power source and how it hangs."
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
    "id": "best-waterproof-camping-lanterns-1",
    "rank": 1,
    "badge": "Best Water Rating",
    "name": "2 Pack Camping Lantern",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ljO8xpUoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09MJTRT3H?tag=rvgearlab-amz-20",
    "description": "The BOBKID is a two-pack of USB rechargeable lanterns with an IPX5 waterproof rating and up to 1000 lumens. Each lantern lists six modes, a 6.93 by 3.15 inch body and a weight of 0.77 lb.\n\nIt carries the highest water rating of the three, one step above the IPX4 of the CAPETRONIX and Energizer. It also supplies two lanterns, so one can light a tent and the other the kitchen area.\n\nIt suits campers who want a spare light in wet weather without paying for a single large lantern. The included 5V USB cable and drop-resistant ABS body suit rough handling.",
    "specs": [
      "IPX5, up to 1000 lumens",
      "Two lanterns, 0.77 lb each",
      "Built-in USB rechargeable"
    ],
    "pros": [
      "IPX5 rating is the highest here",
      "Two lanterns in the box",
      "USB cable included",
      "Drop-resistant ABS body"
    ],
    "cons": [
      "Battery capacity is not listed",
      "Brightness is lower per light than the CAPETRONIX"
    ],
    "bestFor": "Wet-weather pairs",
    "take": "The best water rating of the three and two lights per pack. Pick it when rain is likely and you want a spare.",
    "catch": "The listing does not state battery capacity or per-mode runtime."
  },
  {
    "id": "best-waterproof-camping-lanterns-2",
    "rank": 2,
    "badge": "Best Brightness",
    "name": "Camping Lantern",
    "price": "$32.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41EYSwx1tSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B5WKNNFP?tag=rvgearlab-amz-20",
    "description": "Two COB panels give the CAPETRONIX a 3200 lumen peak, powered by a 4600mAh cell and a Type-C charging cable. Its IPX4 body shrugs off splashes from any direction, and the mode list runs from high to low plus two red settings.\n\nIt has the highest output of the group and the biggest battery, ahead of the BOBKID at up to 1000 lumens. Its folding hooks and 7 by 4 inch body at about 1.2 lb pack smaller than its brightness suggests.\n\nIt suits campers who want one strong light for a campsite that also charges a phone from the pack. The red steady and strobe modes help in night signaling.",
    "specs": [
      "3200 lumens, double COB",
      "4600mAh, phone charging",
      "IPX4, red modes, 1.2 lb"
    ],
    "pros": [
      "Highest lumens of the three",
      "Charges a phone from the pack",
      "Folding hooks and compact body",
      "Red steady and strobe modes"
    ],
    "cons": [
      "IPX4 is a lower rating than IPX5",
      "No warm white mode named"
    ],
    "bestFor": "Bright base-camp light",
    "take": "The strongest light here, with a phone-charging battery. Use it as the main camp lamp under cover.",
    "catch": "IPX4 handles splashes, so keep it under an awning in heavy rain."
  },
  {
    "id": "best-waterproof-camping-lanterns-3",
    "rank": 3,
    "badge": "Best Tough Build",
    "name": "Energizer WeatheReady PRO-360 LED Camping Lantern",
    "price": "$20.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31VtI8SJexL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09329QHWN?tag=rvgearlab-amz-20",
    "description": "The Energizer PRO-360 puts out 500 lumens on high with all-around illumination across a room-sized area. It is IPX4 water resistant, survives drops from up to 1 meter and has a shatterproof lens.\n\nIt is the toughest of the three on impact, a rating the BOBKID and CAPETRONIX do not state. It trails the CAPETRONIX on output, at 500 against 3200 lumens.\n\nIt suits families who want a trusted brand for the tent and the power-outage drawer. The shatterproof lens is a help around kids.",
    "specs": [
      "500 lumens on high",
      "IPX4, 1 meter drop rating",
      "Shatterproof lens"
    ],
    "pros": [
      "Drop rated to 1 meter",
      "Shatterproof lens",
      "Lights a large room",
      "Known brand build"
    ],
    "cons": [
      "Per-mode runtime is not stated",
      "Water rating is IPX4 only"
    ],
    "bestFor": "Rough-handled family gear",
    "take": "A rugged, simple lantern from a known brand. Good for kids and for the emergency drawer.",
    "catch": "The listing does not give a battery type or runtime per mode."
  }
];

export const howWeEvaluated = [
  {
    "title": "Water rating",
    "description": "We compared the stated IP rating on each listing and noted what it covers, splashes or jets."
  },
  {
    "title": "Light output",
    "description": "Listed lumens were compared along with whether the number applies to a single lantern or a set."
  },
  {
    "title": "Power and runtime",
    "description": "Battery size, charging method and any phone-charging feature were compared."
  },
  {
    "title": "Durability",
    "description": "Drop ratings and lens or body material were compared for rough campsite handling."
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
          "Heavy rain under an open awning",
          "BOBKID 2-Pack",
          "IPX5 is the highest water rating here."
        ],
        [
          "Splashes under cover, brightest light",
          "CAPETRONIX 3200LM",
          "3200 lumens with IPX4 splash protection."
        ],
        [
          "Rough handling around kids",
          "Energizer PRO-360",
          "1 meter drop rating and shatterproof lens."
        ],
        [
          "Two lights for two spots",
          "BOBKID 2-Pack",
          "A pair of lanterns in one pack."
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
          "Energizer PRO-360"
        ],
        [
          "$20 to $30",
          "BOBKID 2-Pack"
        ],
        [
          "$30 to $40",
          "CAPETRONIX 3200LM"
        ]
      ]
    }
  },
  {
    "subheading": "IPX4 vs IPX5",
    "cards": [
      {
        "label": "IPX4",
        "text": "The CAPETRONIX 3200LM and Energizer PRO-360 handle splashes from any direction, which suits rain under an awning."
      },
      {
        "label": "IPX5",
        "text": "The BOBKID 2-Pack resists low-pressure water jets, so it handles wind-driven rain better."
      }
    ],
    "note": "Choose the BOBKID 2-Pack for open sites with weather, and an IPX4 pick when the lantern stays under cover."
  },
  {
    "subheading": "By Extra Features",
    "table": {
      "headers": [
        "Feature",
        "Recommended pick"
      ],
      "rows": [
        [
          "Phone charging from the lantern",
          "CAPETRONIX 3200LM"
        ],
        [
          "Two lanterns in one pack",
          "BOBKID 2-Pack"
        ],
        [
          "Drop and shatter resistance",
          "Energizer PRO-360"
        ]
      ]
    }
  },
  {
    "subheading": "For Rainy Weekend Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "An IP rating of at least IPX4, a covered charging port and a hanging hook so the lantern stays off wet ground."
      },
      {
        "label": "In this comparison",
        "text": "The BOBKID 2-Pack lists IPX5 and two lanterns, so one can hang outside while one stays in the tent. The CAPETRONIX 3200LM adds a bright, hung main light."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the CAPETRONIX 3200LM if you want a bright camp light that also charges a phone, since its 4600mAh pack and 3200 lumens cover both jobs. The Energizer PRO-360 earns its price in a drop-prone family kit."
      },
      {
        "label": "Save if",
        "text": "Save with the BOBKID 2-Pack, which brings the highest water rating and two lights in one purchase."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What the IP rating means",
    "explanation": "The IP rating has two digits, but camping lanterns usually list only the second. IPX4 means splashing water from any direction, while IPX5 means low-pressure water jets. Neither covers submersion, which needs IPX7 or higher. Look for the exact IP number on the listing, because the word waterproof is not a rating."
  },
  {
    "criterion": "Ports and seams",
    "explanation": "Rain gets in through charging ports, battery doors and seams. A lantern with a covered port stays protected, while an open USB port can let water in. Check the listing photos for a flap and keep it closed in rain."
  },
  {
    "criterion": "Brightness you can control",
    "explanation": "Lanterns with several modes let you save battery in the rain when you only need low light. A 3200 lumen peak is rarely needed inside a tent. Look for the number of brightness steps and a low mode."
  },
  {
    "criterion": "Battery and charging",
    "explanation": "Built-in rechargeable batteries avoid opening a battery door in the rain. Capacity in mAh tells you how long it lasts, while a USB-C or micro-USB cable in the box saves a hunt for one. Check that a cable is included and what the charge time is."
  },
  {
    "criterion": "Impact resistance",
    "explanation": "A lantern that hangs from a tree or sits on a picnic table gets dropped. Some listings state a drop height, such as 1 meter, while others only say durable. A stated height is a real number you can compare."
  },
  {
    "criterion": "Hanging and standing",
    "explanation": "A good hook or folding handle keeps the light overhead and away from puddles. Lights that stand flat on the ground can sit in water. Look for hanging hooks, a base and how the body sits on a table."
  }
];

export const faq = [
  {
    "q": "Is a waterproof lantern the same as a submersible one?",
    "a": "No. IPX4 and IPX5 cover splashes and water jets, not submersion. A lantern that falls in a lake needs IPX7 or higher, which none of these list. Treat them as rain-proof, not dive-proof."
  },
  {
    "q": "What is the most common mistake when buying a waterproof lantern?",
    "a": "Trusting the word waterproof without an IP number. Marketing copy often uses it for splash resistance only. Look for the rating itself and a covered port."
  },
  {
    "q": "Is IPX5 worth it over IPX4 for camping?",
    "a": "For most trips under an awning, IPX4 is enough. In open rain or wind-driven weather, the IPX5 rating of the BOBKID 2-Pack gives more margin. It is a modest upgrade rather than a big one."
  },
  {
    "q": "How should I hang a lantern in the rain?",
    "a": "Hang it from a hook under an awning or tarp so water does not pool on the body. Keep any charging port closed. Face the light downward so rain does not stream onto the lens."
  },
  {
    "q": "How do I care for a lantern after wet use?",
    "a": "Wipe it dry and leave the port open to air before charging. Do not charge a damp lantern. Store it dry and partly charged."
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
