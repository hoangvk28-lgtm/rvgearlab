export const guideSlug = "best-camping-lanterns-under-20";
export const guideTitle = "6 Best Camping Lanterns Under 20 in 2026";
export const metaTitle = "Best Camping Lanterns Under 20 in 2026";
export const metaDescription = "Best camping lanterns under $20: six solar, rechargeable and AA lanterns compared on lumens, runtime and the extras that $20 buys over $10.";
export const mainKeyword = "best camping lanterns under 20";
export const introParagraphs = [
  "Twenty dollars is the top of the lantern bargain bin, and the extra ten dollars over a $10 lantern buys a bigger battery, a solar panel or a pocketable build. The six here run from about $10 to $20 and use three power types: rechargeable USB, solar hybrid and plain AA batteries.",
  "The ranking asks what the last few dollars add: brightness you can trust, runtime that lasts a weekend and a design that packs small. The top spot goes to the lantern with the most useful features at the cap, and the cheapest two-packs are placed by the number of lights they give."
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
    "id": "best-camping-lanterns-under-20-1",
    "rank": 1,
    "badge": "Best Value Under $20",
    "name": "Energizer S-500 Hybrid Power",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TrXM3L7lL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DB67KH4P?tag=rvgearlab-amz-20",
    "description": "The Energizer S-500 is a hybrid lantern that runs on 3 AA batteries or a rechargeable lithium-ion pack charged by its solar panel or USB. It offers High, Low and Night modes, puts out up to 500 lumens of 360-degree light on the rechargeable battery and collapses with a handle and hook.\n\nIt costs about $18, around $2 less than the Glocusent Pocket Lantern, and it is the brightest and the only pick with both solar and AA backup. The Glocusent has a bigger battery and a longer runtime.\n\nIt suits car campers and power outage kits where a backup fuel source matters. Hang it in a tent or on a picnic table.",
    "specs": [
      "Up to 500 lumens on High",
      "3 AA or solar and USB charging",
      "Collapsible with hook"
    ],
    "pros": [
      "Brightest lantern in this guide",
      "AA backup when solar is weak",
      "Charges by solar or USB",
      "Collapses with a carry handle"
    ],
    "cons": [
      "Bulkier than the pocket lanterns",
      "Three modes only"
    ],
    "bestFor": "Car camping and outages",
    "take": "The most flexible, brightest lantern under $20.",
    "catch": "Max brightness needs the rechargeable pack, not AA batteries."
  },
  {
    "id": "best-camping-lanterns-under-20-2",
    "rank": 2,
    "badge": "Best Pocket Lantern",
    "name": "Glocusent 400H Camping Lantern",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41g2DGqLKLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGHCPRVQ?tag=rvgearlab-amz-20",
    "description": "The Glocusent is a 5000mAh rechargeable lantern with 60 LEDs in a semi-cylindrical design that covers 161 square feet. It has five brightness levels, three colors with an SOS mode and Type-C charging, and it weighs 5.4 ounces in a 3.2 inch cube.\n\nAt about $20 it uses the full budget, $2 above the Energizer S-500 Hybrid, and it runs up to 120 hours on a charge. It has reverse charging for phones, which the Energizer lacks.\n\nIt suits backpackers and tent campers who want a small lantern with a long runtime. The warm 3000K mode is easy on the eyes.",
    "specs": [
      "5000mAh, Type-C, reverse charging",
      "5.4 oz, 3.2 inch cube",
      "Five levels, three colors"
    ],
    "pros": [
      "Very light and pocketable",
      "Up to 120 hours on a charge",
      "Reverse charging for phones",
      "Warm, white and SOS modes"
    ],
    "cons": [
      "Lower peak brightness than the Energizer",
      "Costs the full budget"
    ],
    "bestFor": "Backpacking and tents",
    "take": "The best small lantern for long trips, with a phone-charging bonus.",
    "catch": "It is not a floodlight for a big campsite."
  },
  {
    "id": "best-camping-lanterns-under-20-3",
    "rank": 3,
    "badge": "Best Multi-Mode Lantern",
    "name": "Blukar 116 LED Camping Lantern Rechargeable",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31RwcpGDvBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CBV87CYX?tag=rvgearlab-amz-20",
    "description": "The Blukar uses 116 LED beads with a 360-degree beam, seven lighting modes and a 4800mAh built-in battery that lasts 10 to 48 hours. It folds and expands, with a body that adjusts 90 degrees.\n\nIt costs about $17, a dollar less than the Energizer S-500 Hybrid, and it offers more modes than any other pick with side, bottom and full-light settings. The battery is not removable, so it does not take AAs like the Energizer.\n\nIt suits campers who want light aimed where they need it, such as on a table or tent floor. The adjustable body works as a task light.",
    "specs": [
      "116 LEDs, 360 degree beam",
      "7 lighting modes",
      "4800mAh, 10 to 48 hours"
    ],
    "pros": [
      "Seven light modes",
      "Rechargeable 4800mAh battery",
      "Adjustable angle",
      "Folds and expands"
    ],
    "cons": [
      "Battery is not removable",
      "Strobe mode adds little"
    ],
    "bestFor": "Tent and table lighting",
    "take": "A flexible task and area lantern.",
    "catch": "The sealed battery cannot be swapped for AAs."
  },
  {
    "id": "best-camping-lanterns-under-20-4",
    "rank": 4,
    "badge": "Best Two-Pack Backup",
    "name": "Etekcity LED Camping Lanterns",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4105+8kDSkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00XM8HTIS?tag=rvgearlab-amz-20",
    "description": "The Etekcity set includes two collapsible lanterns with 30 LEDs that reach 154 lumens and run up to 50 hours on 3 AA batteries. The ABS body strengthens for knocks, and you adjust brightness by changing the height.\n\nIt costs about $17, close to the Blukar 116 LED, and it gives two lanterns, so one lights the tent and one lights the kitchen. Each is dimmer than the Energizer S-500 Hybrid.\n\nIt suits families and emergency kits that need two simple lights. AA batteries are easy to find.",
    "specs": [
      "Two lanterns, 154 lumens each",
      "Collapsible, up to 50 hours",
      "Strengthened ABS body"
    ],
    "pros": [
      "Two lanterns at a low price",
      "Collapses flat",
      "Up to 50 hours on AAs",
      "Dimmable by height"
    ],
    "cons": [
      "Needs AA batteries",
      "Dimmer than rechargeables"
    ],
    "bestFor": "Families and outage kits",
    "take": "Two simple lanterns for one price.",
    "catch": "Batteries are not included."
  },
  {
    "id": "best-camping-lanterns-under-20-5",
    "rank": 5,
    "badge": "Best Cheap Two-Pack",
    "name": "ILEEDear LED Camping Lantern",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41lYJ7l-Q-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BNZB7WNX?tag=rvgearlab-amz-20",
    "description": "The ILEEDear two-pack gives collapsible battery lanterns that put out 350 lumens at three brightness levels of 20, 50 and 100 percent with a 360-degree glow. The build is rugged and water resistant.\n\nIt costs about $10, nearly half the Energizer S-500 Hybrid, and the pair has the highest lumen figure of the AA lanterns. It uses plain batteries and has no solar panel.\n\nIt suits kids, backup kits and campers who will leave a lantern in the car. The collapsed body slips into a glovebox.",
    "specs": [
      "350 lumens, 2-pack",
      "20, 50, 100 percent levels",
      "360 degree light"
    ],
    "pros": [
      "Two lanterns in one set",
      "Highest lumens of the AA lanterns",
      "Three brightness levels",
      "Collapses small"
    ],
    "cons": [
      "Needs AA batteries",
      "No rechargeable option"
    ],
    "bestFor": "Backup and kids",
    "take": "The cheapest way to get two lanterns.",
    "catch": "It is a basic battery lantern with no extras."
  },
  {
    "id": "best-camping-lanterns-under-20-6",
    "rank": 6,
    "badge": "Best Brightness Per Dollar",
    "name": "VAVOFO 20W LED Camping Lantern Rechargeable",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ltDmReucL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GDWKCV4C?tag=rvgearlab-amz-20",
    "description": "The VAVOFO is a 20W lantern with 25 LEDs rated at 1200 lumens, a 3000mAh battery with Type-C charging and stepless dimming. It weighs 150 grams, carries an IP65 rating and has an emergency flash mode.\n\nIt costs about $10, around half the Energizer S-500 Hybrid, and its lumen claim is the highest here. It runs about 5 hours at maximum, which is much less than the Glocusent Pocket Lantern.\n\nIt suits tent campers who need strong light for a quick chore such as cooking. Dim it for a longer evening.",
    "specs": [
      "1200 lumens, 25 LEDs",
      "3000mAh, Type-C charging",
      "Stepless dimming, 150 g"
    ],
    "pros": [
      "Very high lumen rating",
      "Stepless dimming trades light for runtime",
      "150 grams, easy to carry",
      "IP65 water resistance"
    ],
    "cons": [
      "About 5 hours at maximum",
      "Peak lumens last briefly"
    ],
    "bestFor": "Short bright jobs",
    "take": "A very cheap, very bright small lantern.",
    "catch": "Treat the 1200 lumen claim as a ceiling."
  }
];

export const howWeEvaluated = [
  {
    "title": "Brightness",
    "description": "Lumen figures were compared, and peak claims were noted."
  },
  {
    "title": "Runtime",
    "description": "Battery size and stated hours were compared."
  },
  {
    "title": "Power type",
    "description": "USB, solar and AA lanterns were separated."
  },
  {
    "title": "Size and weight",
    "description": "Packed size and weight were compared."
  },
  {
    "title": "Price against the cap",
    "description": "All six are under $20."
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
    "subheading": "By use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Car camping and outages",
          "Energizer S-500 Hybrid",
          "500 lumens with solar and AA backup."
        ],
        [
          "Backpacking",
          "Glocusent Pocket Lantern",
          "5.4 oz with a 5000mAh battery."
        ],
        [
          "Tent task lighting",
          "Blukar 116 LED",
          "Seven modes and an adjustable body."
        ],
        [
          "Two lights for a family",
          "Etekcity 2-Pack",
          "Two 154 lumen lanterns."
        ],
        [
          "Cheapest pair",
          "ILEEDear 2-Pack",
          "350 lumens and two lanterns."
        ],
        [
          "Short, bright jobs",
          "VAVOFO 20W",
          "1200 lumen peak claim."
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
          "ILEEDear 2-Pack or VAVOFO 20W"
        ],
        [
          "$10 to $20",
          "Etekcity 2-Pack or Blukar 116 LED"
        ],
        [
          "$10 to $20",
          "Energizer S-500 Hybrid or Glocusent Pocket Lantern"
        ]
      ]
    }
  },
  {
    "subheading": "Rechargeable vs AA",
    "cards": [
      {
        "label": "Rechargeable",
        "text": "The Glocusent Pocket Lantern, Blukar 116 LED and VAVOFO 20W run on built-in batteries charged by USB-C."
      },
      {
        "label": "AA or hybrid",
        "text": "The Etekcity 2-Pack and ILEEDear 2-Pack use AAs, and the Energizer S-500 Hybrid takes AAs or a rechargeable pack."
      }
    ],
    "note": "Choose the Energizer S-500 Hybrid for flexibility and the Glocusent Pocket Lantern for runtime."
  },
  {
    "subheading": "By price tier",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $10",
          "ILEEDear 2-Pack"
        ],
        [
          "About $10",
          "VAVOFO 20W"
        ],
        [
          "About $17",
          "Blukar 116 LED"
        ],
        [
          "About $17",
          "Etekcity 2-Pack"
        ],
        [
          "About $18",
          "Energizer S-500 Hybrid"
        ],
        [
          "About $20",
          "Glocusent Pocket Lantern"
        ]
      ]
    }
  },
  {
    "subheading": "For backpacking specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a stated weight under 8 ounces, a rechargeable battery and a stated runtime."
      },
      {
        "label": "In this comparison",
        "text": "The Glocusent Pocket Lantern weighs 5.4 ounces, and the VAVOFO 20W weighs 150 grams."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want solar, AA backup or a long runtime: the Energizer S-500 Hybrid adds solar and AA, and the Glocusent Pocket Lantern adds 5000mAh."
      },
      {
        "label": "Save if",
        "text": "Save if you only need a backup light: the ILEEDear 2-Pack is about $10 for two, and the VAVOFO 20W is about $10 for one very bright light."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Lumens and use",
    "explanation": "A tent needs about 100 to 200 lumens, a camp table 300 to 500, and anything higher is for a large area. A 1200 lumen claim on a tiny lantern is a peak figure that lasts a short time. Look for the lumen figure on the high setting and the runtime on that setting."
  },
  {
    "criterion": "Runtime at brightness",
    "explanation": "Runtime depends on brightness, so a lantern that lasts 120 hours on low may last only 5 hours on high. A 5000mAh battery lasts longer than a 3000mAh one at the same brightness. Look for hours on both low and high in the product details."
  },
  {
    "criterion": "Rechargeable vs AA",
    "explanation": "A rechargeable lantern saves battery cost but goes dark at the worst moment if you forget to charge it before the trip. An AA lantern can be refreshed anywhere with spare batteries, which is why outage kits favor them. A hybrid such as the Energizer S-500 Hybrid takes both, so check which power types a lantern supports and pack accordingly."
  },
  {
    "criterion": "Solar and charging",
    "explanation": "A small solar panel recharges a lantern slowly, so treat it as a backup top-up rather than the main charger, especially under tree cover. USB-C charging is faster and works with any power bank or car port. Look at the stated charge time in the product details, for example about 3.5 hours for the Glocusent, and charge before you leave."
  },
  {
    "criterion": "Weather and build",
    "explanation": "IPX5 or IP65 ratings resist splashes and rain, but no lantern in this guide is meant to be submerged. A collapsible body packs flat in a glovebox, and a sturdy hook decides whether it hangs steadily in wind. Check the water rating and the hanging hardware in the description before you rely on a lantern in a storm."
  }
];

export const faq = [
  {
    "q": "How many lumens do I need for a tent?",
    "a": "About 100 to 200 lumens lights a tent for reading and sorting gear. The Etekcity 2-Pack at 154 lumens each is enough, and the Energizer S-500 Hybrid at 500 lumens fills a camp table. Higher numbers use more battery."
  },
  {
    "q": "What do campers get wrong when buying a lantern?",
    "a": "They buy by the biggest lumen claim and ignore runtime. A 1200 lumen light that lasts 5 hours at maximum cannot light a whole evening. Check the stated runtime on both high and low, and plan to run it dimmer."
  },
  {
    "q": "Is the Energizer worth about $8 more than the cheapest lantern?",
    "a": "If you want backup power, yes. The Energizer S-500 Hybrid runs on solar, USB or AA batteries and puts out up to 500 lumens on its rechargeable pack. The ILEEDear 2-Pack is a basic pair of AA lanterns for roughly half the money."
  },
  {
    "q": "How do I charge a lantern at camp?",
    "a": "Use USB-C from a power bank, a car port or a small solar panel. The Glocusent Pocket Lantern charges fully in about 3.5 hours. Solar panels charge slowly, so top the lantern up from a power bank before you head out."
  },
  {
    "q": "How do I store a camping lantern?",
    "a": "Remove the AA batteries if you will not use the lantern for months, keep rechargeable lanterns partly charged and store them dry. Wipe dirt off before folding it flat. Check the battery at the start of each season."
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
