export const guideSlug = "best-rechargeable-emergency-lanterns";
export const guideTitle = "2 Best Rechargeable Emergency Lanterns in 2026";
export const metaTitle = "Best Rechargeable Emergency Lanterns in 2026";
export const metaDescription = "Best rechargeable emergency lanterns compared on power sources, lumens, battery size and weather rating, for camping trips and home outages alike.";
export const mainKeyword = "best rechargeable emergency lanterns";
export const introParagraphs = [
  "An emergency lantern has to work when the grid is down, so what matters is how many ways it can charge. Two listings fit this brief, one with a big power bank battery and one with three power sources.",
  "They were compared on power sources, stated lumens, battery size, water protection and packing. A missing spec appears as a buyer tip."
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
    "id": "best-rechargeable-emergency-lanterns-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "LED Camping Lantern Rechargeable",
    "price": "$44.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413XCSzVJTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09YT5D357?tag=rvgearlab-20",
    "description": "This AYL puts out 1800 lumens through 46 LEDs and keeps a 4400mAh cell that can top up a phone in a blackout. It carries an IP44 splash rating, and its dimmable modes range from daylight and warm white to a flash signal.\n\nCompared with the LETMY, it throws far more light from a single lantern and doubles as a phone charger in an outage. It charges by cable only.\n\nIt suits families and campers who want one bright lantern that also keeps a phone alive. Up to 12 hours per charge is listed.",
    "specs": [
      "1800 lumens, 46 LEDs",
      "4400mAh power bank",
      "IP44, four light modes"
    ],
    "pros": [
      "Highest lumens in the guide",
      "Doubles as a phone power bank",
      "Warm and daylight modes",
      "Up to 12 hours per charge"
    ],
    "cons": [
      "IP44 gives splash protection only",
      "Top lumens apply to the brightest mode"
    ],
    "bestFor": "Bright lantern plus phone power",
    "take": "A lot of light and a power bank in one lantern for a modest cost.",
    "catch": "Twelve hours is a best case, not the time at full brightness."
  },
  {
    "id": "best-rechargeable-emergency-lanterns-2",
    "rank": 2,
    "badge": "Best Multi-Pack",
    "name": "LETMY 4 Pack Camping Lantern",
    "price": "$28.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Kc5vhBgzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08Y8X8JPF?tag=rvgearlab-20",
    "description": "The LETMY set gives four collapsible lanterns that can run on solar, USB charging or AA batteries. A COB LED gives 360 degree light and the listing describes a water-resistant, tough body for outdoor leisure.\n\nAgainst the AYL, it spreads light across four lanterns instead of one big one and adds the solar and AA options. Having three power sources is a real advantage in a long outage.\n\nIt suits households that want one lantern per room or per tent. The collapsible design is made to pack small.",
    "specs": [
      "Solar, USB and AA power",
      "COB LED, 360 degree light",
      "Collapsible, 4-pack"
    ],
    "pros": [
      "Three power sources in each lantern",
      "Four lanterns per set",
      "Collapsible and compact",
      "Solar works when the grid is down"
    ],
    "cons": [
      "No lumen figure is shown here",
      "No battery size is stated"
    ],
    "bestFor": "One lantern per room in an outage",
    "take": "Four lanterns that charge from sun, USB or AA cells.",
    "catch": "Brightness per lantern is modest next to a single big lantern."
  }
];

export const howWeEvaluated = [
  {
    "title": "Power sources",
    "description": "Solar, USB and replaceable cell options were compared for outage reliability."
  },
  {
    "title": "Brightness",
    "description": "Stated lumens and light modes were noted, where given."
  },
  {
    "title": "Battery size",
    "description": "Listed mAh and runtime were compared, plus whether the lantern doubles as a power bank."
  },
  {
    "title": "Weather protection",
    "description": "IP ratings and water-resistance claims were weighed."
  },
  {
    "title": "Packing",
    "description": "Collapsible and stackable designs were compared for kits."
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
    "subheading": "By Emergency Use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Phone charging during an outage",
          "AYL 1800LM Lantern",
          "4400mAh power bank."
        ],
        [
          "Long outage, no power",
          "LETMY 4-Pack Solar Lanterns",
          "Solar, USB and AA options."
        ],
        [
          "Lighting one big room",
          "AYL 1800LM Lantern",
          "1800 lumens from 46 LEDs."
        ],
        [
          "Lighting several rooms",
          "LETMY 4-Pack Solar Lanterns",
          "Four lanterns per set."
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
          "LETMY 4-Pack Solar Lanterns"
        ],
        [
          "$40 to $50",
          "AYL 1800LM Lantern"
        ]
      ]
    }
  },
  {
    "subheading": "One Bright Lantern vs a Multi-Pack",
    "cards": [
      {
        "label": "One bright lantern",
        "text": "One high-lumen lantern floods a room. The AYL 1800LM Lantern is the brightest here."
      },
      {
        "label": "Multi-pack",
        "text": "Several small lanterns spread light and give backups. The LETMY 4-Pack Solar Lanterns includes four."
      }
    ],
    "note": "Pick the AYL 1800LM Lantern for one big space and the LETMY 4-Pack Solar Lanterns for several."
  },
  {
    "subheading": "By Power Preference",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "USB charging only",
          "AYL 1800LM Lantern"
        ],
        [
          "Solar when off-grid",
          "LETMY 4-Pack Solar Lanterns"
        ],
        [
          "Spare AA cells",
          "LETMY 4-Pack Solar Lanterns"
        ]
      ]
    }
  },
  {
    "subheading": "Home Power Outages",
    "cards": [
      {
        "label": "Look for",
        "text": "More than one way to charge, a dimmable output and a rating for damp porches."
      },
      {
        "label": "In this comparison",
        "text": "The LETMY 4-Pack Solar Lanterns offers solar, USB and AA power, and the AYL 1800LM Lantern lists a 4400mAh battery with IP44."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the AYL 1800LM Lantern if you want one bright lantern with phone charging."
      },
      {
        "label": "Save if",
        "text": "Save with the LETMY 4-Pack Solar Lanterns if you want four lanterns with solar backup."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Redundant power sources",
    "explanation": "In a long outage, a lantern that can use solar, USB or AA cells keeps working when one option fails. A USB-only lantern needs a bank or a car. Look for the number of power sources on the listing."
  },
  {
    "criterion": "Lumens versus modes",
    "explanation": "Lumens measure total light, but modes decide how long it lasts. Use low for hours of light and high only for tasks. Check that the lantern dims."
  },
  {
    "criterion": "Battery and power bank",
    "explanation": "A lantern that doubles as a power bank can charge a phone, but doing so shortens the light. Check mAh and the output port. Keep phone charging for emergencies."
  },
  {
    "criterion": "IP rating",
    "explanation": "IP44 handles splashes and rain from any direction, but not submersion. Higher numbers mean more protection. Look for an IP figure rather than a vague word like waterproof."
  },
  {
    "criterion": "Storage and readiness",
    "explanation": "An emergency lantern needs to be charged when you reach for it. Store it where you can find it, and check it twice a year. Look for a low-battery indicator."
  }
];

export const faq = [
  {
    "q": "What makes a lantern good for emergencies?",
    "a": "Multiple ways to charge, dimming and a rating for damp conditions. The LETMY 4-Pack Solar Lanterns covers solar, USB and AA, and the AYL 1800LM Lantern covers USB with a power bank."
  },
  {
    "q": "What is the common mistake?",
    "a": "Leaving the lantern uncharged for months. Check it before storm season and after long storage. Keep a USB cable with it."
  },
  {
    "q": "Is the AYL worth it over the LETMY?",
    "a": "If you want brightness and phone charging, yes. The AYL 1800LM Lantern is brighter, while the LETMY 4-Pack Solar Lanterns offers solar backup."
  },
  {
    "q": "How do I charge the LETMY by solar?",
    "a": "Place the lantern in direct sun with the panel facing the sky. It takes a full sunny day for a good charge. Use USB if clouds roll in."
  },
  {
    "q": "How do I store lanterns?",
    "a": "Charge them partly and keep them dry and cool. Collapse the LETMY lanterns flat. Test them twice a year."
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
