export const guideSlug = "best-collapsible-camping-lanterns";
export const guideTitle = "2 Best Collapsible Camping Lanterns in 2026";
export const metaTitle = "Best Collapsible Camping Lanterns in 2026";
export const metaDescription = "Best collapsible camping lanterns compared on lumens, battery type and collapsed size, with only two lines of collapsible lanterns qualifying here.";
export const mainKeyword = "best collapsible camping lanterns";
export const introParagraphs = [
  "A collapsible lantern pulls up to light and pushes down to switch off, and it packs flat in a drawer or a pocket. Few listings in this niche qualify, so this guide covers two genuine lines and says so plainly.",
  "The two picks run on AA or AAA cells, with a 190 lumen lantern sold in packs and a pocket-size lantern collapsing under four inches. They were compared on lumens, battery type, collapsed size and weather rating."
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
    "id": "best-collapsible-camping-lanterns-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Lepro LED Camping Lanterns",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41EYZRqBVzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08BFC87D2?tag=rvgearlab-amz-20",
    "description": "The Lepro lantern lists 190 lumens with 360 degree illumination, instant on and off by pulling up and pushing down, and IPX4 splash protection. It runs on 3 AA batteries per lantern that are not included, and it is sold here in a 4-pack, with a 2-pack of the same line also available.\n\nIts listing alone gives a lumen figure and a weather rating, which the KPKJOO does not list. A four-lantern set lights a family tent plus a table.\n\nIt suits families and groups who want several simple lanterns for a campsite. The pull-up brightness control is easy to use in the dark.",
    "specs": [
      "190 lumens, 360 degree light",
      "3 AA batteries, pull-up switch",
      "IPX4, 4-pack"
    ],
    "pros": [
      "Stated 190 lumen output",
      "IPX4 splash protection",
      "Four lanterns in the pack",
      "Pull-up brightness control"
    ],
    "cons": [
      "AA batteries are not included",
      "190 lumens is modest for a big tent"
    ],
    "bestFor": "Family and group camping",
    "take": "A simple, stated-output lantern set for several tents.",
    "catch": "Batteries are sold separately, so budget for 12 AAs."
  },
  {
    "id": "best-collapsible-camping-lanterns-2",
    "rank": 2,
    "badge": "Best Pocket Size",
    "name": "KPKJOO Lantern Collapsible Camping Light",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410u64+eH4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DPVKJHGW?tag=rvgearlab-amz-20",
    "description": "The KPKJOO collapses to 2.67 inches wide by 3.74 inches tall, smaller than a mobile phone, and runs on AAA batteries. It uses energy-efficient LED technology and is listed for tents, power outages and emergency kits.\n\nIt is the smaller of the two, which makes it a glove-box or pocket light. It does not state lumens, unlike the Lepro.\n\nIt suits campers and drivers who want a tiny emergency light. The collapsible design extends for full illumination.",
    "specs": [
      "2.67 by 3.74 inches collapsed",
      "AAA battery powered",
      "Collapsible LED lantern"
    ],
    "pros": [
      "Smaller than a mobile phone",
      "Fits a glove box or pocket",
      "AAA batteries are common",
      "Hands-free portable light"
    ],
    "cons": [
      "Lumens and runtime are not stated",
      "No weather rating is listed"
    ],
    "bestFor": "Pocket and glove-box emergency light",
    "take": "A tiny lantern for emergency kits and pockets.",
    "catch": "No lumens, runtime or weather rating is stated."
  }
];

export const howWeEvaluated = [
  {
    "title": "Collapsed size",
    "description": "Listed collapsed dimensions were compared."
  },
  {
    "title": "Brightness",
    "description": "Stated lumens were compared."
  },
  {
    "title": "Battery type",
    "description": "AA and AAA cell use was compared."
  },
  {
    "title": "Weather rating",
    "description": "IPX4 and unrated listings were noted."
  },
  {
    "title": "Pack size",
    "description": "Single lanterns and multi-packs were noted."
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
    "subheading": "By Use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Family tent and table",
          "Lepro Collapsible Lantern 4-Pack",
          "Four lanterns at 190 lumens."
        ],
        [
          "Pocket or glove box",
          "KPKJOO Collapsible Lantern",
          "Under 4 inches collapsed."
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
          "KPKJOO Collapsible Lantern"
        ],
        [
          "$20 to $30",
          "Lepro Collapsible Lantern 4-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "AA vs AAA",
    "cards": [
      {
        "label": "AA",
        "text": "The Lepro Collapsible Lantern 4-Pack uses 3 AA cells per lantern, which hold more charge."
      },
      {
        "label": "AAA",
        "text": "The KPKJOO Collapsible Lantern uses AAA cells, which are common but smaller."
      }
    ],
    "note": "Most campers should pick the Lepro Collapsible Lantern 4-Pack for tents."
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
          "Around $19 for one",
          "KPKJOO Collapsible Lantern"
        ],
        [
          "Around $28 for four",
          "Lepro Collapsible Lantern 4-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Emergency Kits Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A lantern that uses common cells and stores flat."
      },
      {
        "label": "In this comparison",
        "text": "The KPKJOO Collapsible Lantern lists AAA cells and a phone-sized body, and the Lepro Collapsible Lantern 4-Pack lists IPX4."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Lepro Collapsible Lantern 4-Pack if you want a stated lumen figure and a four-lantern set."
      },
      {
        "label": "Save if",
        "text": "Save with the KPKJOO Collapsible Lantern if you want a single pocket light."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Pull-up brightness control",
    "explanation": "Collapsible lanterns switch on as you pull them up, and the extension sets the brightness. It is quick in the dark and never needs a button hunt. Check how the switch works on the listing."
  },
  {
    "criterion": "AA versus AAA cells",
    "explanation": "AA cells hold more energy than AAA, so an AA lantern lasts longer. AAA suits smaller lanterns. Check the cell type and count."
  },
  {
    "criterion": "Lumens and tent size",
    "explanation": "About 190 lumens lights a small tent, and a family tent needs two lanterns. Lumens matter more than LED count. Check for a lumen figure."
  },
  {
    "criterion": "Collapsed size",
    "explanation": "A lantern that collapses under 4 inches fits a pocket or a glove box. A larger collapsed lantern fits a pack. Check the collapsed size, not the extended size."
  },
  {
    "criterion": "Weather protection",
    "explanation": "IPX4 handles splashes and light rain. An unrated lantern needs a dry spot. Look for the code."
  }
];

export const faq = [
  {
    "q": "Are collapsible lanterns bright?",
    "a": "They give a soft, wide glow, such as 190 lumens on the Lepro Collapsible Lantern 4-Pack. They suit tents and tables, not trails."
  },
  {
    "q": "What is the common mistake?",
    "a": "Buying batteries last. Both lanterns need cells that are not included. Pack spares."
  },
  {
    "q": "Is a 4-pack worth it?",
    "a": "If you camp with family, yes, because one per tent and one for the table is handy. For solo trips, a single lantern is enough."
  },
  {
    "q": "How do I use it?",
    "a": "Pull the top up to switch on and extend. Push down to dim or switch off. Hang it from the tent loop."
  },
  {
    "q": "How do I maintain it?",
    "a": "Remove cells before storage. Wipe the shell and keep it dry. Fold it flat."
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
