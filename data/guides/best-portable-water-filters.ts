export const guideSlug = "best-portable-water-filters";
export const guideTitle = "5 Best Portable Water Filters in 2026";
export const metaTitle = "Best Portable Water Filters in 2026";
export const metaDescription = "Five portable water filters: three electric pumps and two straw packs, with notes on what each listing claims to remove.";
export const mainKeyword = "best portable water filters";
export const introParagraphs = [
  "Portable water filters split into two camps: straws you sip from and electric pumps that fill a bottle. The five picks here cover both, and the useful comparison is what the listing says it removes, how fast it moves water and how long the filter lasts.",
  "Claims vary a lot. Some listings name viruses while others stop at bacteria and parasites, so each entry quotes what is printed. Anything not stated is flagged as a buyer tip, not assumed."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/furniture-chairs-by-tent.webp";
export const heroImageAlt = "Two folding camping chairs beside a tent in a redwood forest";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-portable-water-filters-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ITEHIL Portable Electric Water Filter",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KBbctj54L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVYT85FW?tag=rvgearlab-20",
    "description": "ITEHIL combines an Ahlstrom membrane with a pre-stage ultrafiltration to reach a stated 0.01 micron precision. The listing says it filters out 99.99% of heavy metals, bacteria and viruses, runs from a 5200 mAh battery for about 4 hours and moves 700 ml per minute.\n\nIt names viruses, which the straw filters here do not, and the filter cartridge is listed for up to 1,000 liters. Charging works through USB-C or solar, with 30 minutes of sun said to be enough to power it up.\n\nA strong choice for campers who want a push-button pump that also charges a phone and acts as a survival tool. A hook lets it hang.",
    "specs": [
      "0.01 micron, names viruses",
      "700 ml/min, 5200 mAh battery",
      "1,000 liter cartridge life"
    ],
    "pros": [
      "Names bacteria, viruses and heavy metals",
      "Push-button pump, no squeezing",
      "USB-C and solar charging",
      "Hook for hanging"
    ],
    "cons": [
      "Needs battery charge",
      "Cartridge needs replacing every few months"
    ],
    "bestFor": "Campers who want powered filtering",
    "take": "A powered pump that names viruses and charges from USB-C or solar.",
    "catch": "The listing says to replace the cartridge about every six months, so factor in filter costs."
  },
  {
    "id": "best-portable-water-filters-2",
    "rank": 2,
    "badge": "Best Hand-Crank Backup",
    "name": "3-in-1 Portable Electric Water Filter for Survival Kit & Emergency",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-thM3B6oL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H3DY4NJB?tag=rvgearlab-20",
    "description": "Thmomex sells a 3-in-1 pump that moves a steady 800 ml per minute at the press of a button and recharges by USB-C, an integrated solar panel or a built-in hand-crank dynamo. It lists a 5,000 liter filter core and an 8-layer path of PP cotton, carbon and ultrafiltration membranes.\n\nThe hand crank is unique here, so the pump keeps working when sun and wall power are gone, and the cartridge life is the longest in the group. It weighs 360 grams and has an LED light and a storage pouch.\n\nBest for emergency kits and long trips where power may run out. The multiple charging options are the draw.",
    "specs": [
      "800 ml/min, push-button",
      "5,000 liter filter core",
      "360 g with LED light"
    ],
    "pros": [
      "Hand-crank backup for power",
      "5,000 liter filter core",
      "Built-in LED light",
      "Eight-layer filtration path"
    ],
    "cons": [
      "Listing names no test protocol",
      "360 g is heavier than a straw"
    ],
    "bestFor": "Emergency kits and long trips",
    "take": "A push-button pump with a hand-crank backup and a long-life filter core.",
    "catch": "No viruses or test protocol are named, so treat it as a bacteria and particle filter."
  },
  {
    "id": "best-portable-water-filters-3",
    "rank": 3,
    "badge": "Best Compact Pump",
    "name": "BKLES Portable Electric Water Filter for Survival",
    "price": "$57.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41sLth4EpPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BGLHX2JK?tag=rvgearlab-20",
    "description": "BKLES builds the BK2000 around a high-torque magnetic motor, a double 0.01 micron filter and a six-level path. It weighs 350 g (12 oz), packs into a storage bag and has a 1.5 meter hose and an emergency feature set.\n\nThe listing claims 99.999% accuracy, a precision claim that the Thmomex does not print, and the unit is lighter than the ITEHIL. A multifunctional bag lets it clip to a belt or pack.\n\nA good fit for hikers and campers who want a small electric pump at a lower price. It also suits fishing and emergency kits.",
    "specs": [
      "Double 0.01 micron, six levels",
      "350 g with storage bag",
      "1.5 meter hose"
    ],
    "pros": [
      "Compact and light at 350 g",
      "Double 0.01 micron filtration",
      "Quiet magnetic motor",
      "1.5 meter hose reaches water"
    ],
    "cons": [
      "Needs charging",
      "Listing does not name viruses"
    ],
    "bestFor": "Hikers and anglers",
    "take": "A compact 350 g electric pump with a double 0.01 micron filter.",
    "catch": "Check the battery and cartridge life on the product page before relying on it."
  },
  {
    "id": "best-portable-water-filters-4",
    "rank": 4,
    "badge": "Best Straw Pack",
    "name": "Practical Survival Reusable Emergency Water Filter Straws",
    "price": "$79.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51knEkQEf9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09LDFR8HX?tag=rvgearlab-20",
    "description": "The Practical Survival box holds five reusable straws, 8 inches and 2 ounces apiece. Its listing puts bacteria removal above 99.99%, naming E. coli and Legionella, and parasite removal above 99.99%, naming Giardia and Cryptosporidium.\n\nFive straws mean a whole family or emergency group is covered, and each lasts up to 1,800 gallons, which the listing frames as up to 10 years. They need no batteries, which the electric pumps do.\n\nGreat for families and preppers who want a lot of filters for a fair price. Keep spares in cars, packs and kits.",
    "specs": [
      "Five 2 oz reusable straws",
      "Over 99.99% bacteria, parasites",
      "Up to 1,800 gallons each"
    ],
    "pros": [
      "Five filters per pack",
      "Names E. coli and Giardia",
      "Up to 1,800 gallons each",
      "BPA-free, FDA-compliant"
    ],
    "cons": [
      "Sipping only, no bottle filling",
      "Listing names no test protocol"
    ],
    "bestFor": "Families and emergency kits",
    "take": "Five reusable straws with named bacteria and parasite claims and up to 1,800 gallons each.",
    "catch": "They are sip-only straws, and the listing names no test protocol."
  },
  {
    "id": "best-portable-water-filters-5",
    "rank": 5,
    "badge": "Best Documented Straw",
    "name": "Membrane Solutions Personal Water Filter Straw S1",
    "price": "$34.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/519Wee6T08L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07SYYQZDN?tag=rvgearlab-20",
    "description": "Membrane Solutions sells four 5-stage straw filters, each 7.1 inches long and 2 ounces, with a 0.1 micron membrane and coconut shell carbon. The listing names three NSF/ANSI standards (42, 372 and 401) and gives a test report number.\n\nIt documents standards that the Practical Survival straws do not, and it threads onto a 28 mm bottle for easy drinking. Flow is listed at up to 500 ml per minute.\n\nBest for hikers who want a pocket filter with named standards and a taste-improving carbon stage. The four-pack covers a small group.",
    "specs": [
      "Four 7.1 in, 2 oz straws",
      "0.1 micron, five stages",
      "NSF/ANSI 42, 372, 401 named"
    ],
    "pros": [
      "Names NSF/ANSI 42, 372 and 401",
      "Cites a test report number",
      "Fits 28 mm threaded bottles",
      "Carbon stage for taste"
    ],
    "cons": [
      "Lifespan figure not stated",
      "Four straws, not five"
    ],
    "bestFor": "Hikers who like documentation",
    "take": "Names NSF/ANSI 42, 372 and 401 and cites a test report number.",
    "catch": "The listing does not state a lifespan figure, and four straws is fewer than five."
  }
];

export const howWeEvaluated = [
  {
    "title": "Claims",
    "description": "Each listing's removal claims were quoted, with a note on those that name viruses."
  },
  {
    "title": "Format",
    "description": "Electric pumps and straws were compared for speed and ease."
  },
  {
    "title": "Capacity",
    "description": "Cartridge lives and straw lives were compared where printed."
  },
  {
    "title": "Power",
    "description": "Battery, solar, USB and hand-crank options were compared."
  },
  {
    "title": "Honest scope",
    "description": "Only one listing names viruses, and the others are labelled as bacteria and parasite filters."
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
          "Powered pump that names viruses",
          "ITEHIL Electric 0.01 Micron",
          "0.01 micron, names viruses"
        ],
        [
          "Emergency kit with a hand-crank",
          "Thmomex 3-in-1 Electric",
          "Crank, solar or USB-C"
        ],
        [
          "Small electric pump",
          "BKLES BK2000 Electric",
          "350 g with storage bag"
        ],
        [
          "Family straw pack",
          "Practical Survival Straws",
          "Five straws, 1,800 gallons each"
        ],
        [
          "Documented standards",
          "Membrane Solutions Straw S1",
          "NSF/ANSI 42, 372, 401 named"
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
          "$30 to $60",
          "Membrane Solutions Straw S1 or BKLES BK2000 Electric"
        ],
        [
          "$60 to $80",
          "Thmomex 3-in-1 Electric or Practical Survival Straws"
        ],
        [
          "$80 to $90",
          "ITEHIL Electric 0.01 Micron"
        ]
      ]
    }
  },
  {
    "subheading": "Electric Pump vs Straw",
    "cards": [
      {
        "label": "Electric pump",
        "text": "The ITEHIL Electric 0.01 Micron, Thmomex 3-in-1 Electric and BKLES BK2000 Electric fill bottles and need power."
      },
      {
        "label": "Straw",
        "text": "The Practical Survival Straws and Membrane Solutions Straw S1 need no power and weigh 2 ounces."
      }
    ],
    "note": "Choose the Membrane Solutions Straw S1 for hiking and the ITEHIL Electric 0.01 Micron for camp."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest cost",
          "Membrane Solutions Straw S1"
        ],
        [
          "Low-mid cost, compact pump",
          "BKLES BK2000 Electric"
        ],
        [
          "Mid cost, hand-crank",
          "Thmomex 3-in-1 Electric"
        ],
        [
          "Higher cost, five straws",
          "Practical Survival Straws"
        ],
        [
          "Higher cost, names viruses",
          "ITEHIL Electric 0.01 Micron"
        ]
      ]
    }
  },
  {
    "subheading": "Portable Filter Shoppers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A named list of what is removed, a stated flow rate and a filter life in liters or gallons."
      },
      {
        "label": "In this comparison",
        "text": "The ITEHIL Electric 0.01 Micron names viruses with 700 ml/min and 1,000 liters, and the Practical Survival Straws name E. coli and Giardia with 1,800 gallons each."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ITEHIL Electric 0.01 Micron or Practical Survival Straws for virus claims or a multi-straw kit."
      },
      {
        "label": "Save if",
        "text": "Save with the Membrane Solutions Straw S1 or BKLES BK2000 Electric for simple, documented filtering."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What the listing removes",
    "explanation": "Some listings name bacteria and parasites only, and others add viruses and heavy metals. A 0.1 micron straw targets bacteria and protozoa, while a 0.01 micron claim reaches smaller particles. Quote the listing's exact words."
  },
  {
    "criterion": "Straw or pump",
    "explanation": "A straw filters one sip at a time, while a pump fills a bottle. Pumps need batteries or cranks, and straws need nothing but a mouth. Choose by group size and power access."
  },
  {
    "criterion": "Filter life",
    "explanation": "A straw rated to 1,800 gallons outlasts a cartridge rated to 1,000 liters, which is about 264 gallons. Cartridge cost matters over time. Check the stated life and the replacement cost."
  },
  {
    "criterion": "Power sources",
    "explanation": "USB-C, solar and hand-crank each help in different places. A hand crank saves you when the sun and outlet fail. Look for battery size and charging options."
  },
  {
    "criterion": "Standards and test reports",
    "explanation": "NSF/ANSI numbers and test report references are checkable, while a bare percentage is not. Look for named standards. Treat a lone percentage with caution."
  }
];

export const faq = [
  {
    "q": "Do portable filters remove viruses?",
    "a": "Only the ITEHIL listing names viruses. The straws name bacteria and parasites. Treat for viruses if the source needs it."
  },
  {
    "q": "What do campers get wrong about electric filters?",
    "a": "They forget to charge them. A hand-crank like the Thmomex 3-in-1 Electric helps. Carry a backup."
  },
  {
    "q": "Is the ITEHIL worth the price over the straws?",
    "a": "If you want fast filling and a virus claim, yes. For hiking, a Membrane Solutions Straw S1 is lighter and cheaper."
  },
  {
    "q": "How do I use a straw filter?",
    "a": "Dip it in clear water and sip, or screw it on a 28 mm bottle. Blow the water back out and keep it dry. Replace when flow slows."
  },
  {
    "q": "How do I store these?",
    "a": "Dry them and keep them from freezing. Charge the electric pumps every few months. Store in the pouch."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Portable Gravity Water Filters",
    "href": "/packs-hiking/best-portable-gravity-water-filters"
  },
  {
    "title": "Best Affordable Backpacking Water Filters",
    "href": "/packs-hiking/best-affordable-backpacking-water-filters"
  },
  {
    "title": "Best Backpacking Water Filters For Viruses",
    "href": "/packs-hiking/best-backpacking-water-filters-for-viruses"
  }
];
