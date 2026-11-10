export const guideSlug = "best-solar-power-bank-for-home";
export const guideTitle = "4 Best Solar Power Bank For Home in 2026";
export const metaTitle = "Best Solar Power Bank For Home in 2026";
export const metaDescription = "Best solar power banks for home: four picks from a 10,000mAh bank to a 146Wh station, compared on outage use, capacity and recharge options.";
export const mainKeyword = "best solar power bank for home";
export const introParagraphs = [
  "At home, a solar power bank is a blackout tool. It needs to keep phones, a router and a few lights alive for a day or two, and it should be charged and ready in a drawer.",
  "These four cover that job at different scales, from a small phone charger to a 146Wh AC station. The notes below say which blackout needs each can actually meet."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/power-station-campsite.webp";
export const heroImageAlt = "Jeep camp with a tent, solar panels and a portable power station at a pine forest campsite";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-solar-power-bank-for-home-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Portable Power Station",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413fl9apkgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQLX82NQ?tag=rvgearlab-amz-20",
    "description": "This 146Wh (39,600mAh) station has seven outputs including two 110V AC outlets within 100W and a 200W peak. It can recharge from a 13 to 23V solar panel sold separately and has a dual LED flashlight with SOS.\n\nIt runs a small lamp, a laptop charger or a modem, which a phone bank cannot. A BMS handles voltage and temperature protection.\n\nIt fits households that want a first blackout kit. Keep it in a closet and top it up each season.",
    "specs": [
      "146Wh, AC outlets, 7 outputs",
      "13-23V solar input",
      "Dual LED SOS flashlight"
    ],
    "pros": [
      "Two AC outlets for home gear",
      "146Wh covers a night of basics",
      "Seven outputs",
      "LED light for blackouts"
    ],
    "cons": [
      "No built-in panel",
      "Needs wall charging first"
    ],
    "bestFor": "Router, laptop and lights",
    "take": "The one that can run actual home devices. Pick it for a drawer kit.",
    "catch": "It needs a panel purchase for solar use."
  },
  {
    "id": "best-solar-power-bank-for-home-2",
    "rank": 2,
    "badge": "Best Capacity",
    "name": "FEELLE Solar Power Bank 50000mAh Magnetic Portable Charger with Hand Crank",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51ubzYX8VhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H33SHVPW?tag=rvgearlab-amz-20",
    "description": "The FEELLE offers 50,000mAh on a lithium polymer battery, with 15W magnetic wireless charging, four built-in cables and a hand crank. It can power up to six devices at once.\n\nCompared with the Nuynix it adds a crank and magnetic wireless charging at a higher price. It stores more phone charges than the BLAVOR and fits a family kit.\n\nIt suits families who want several phones charged during a blackout. The built-in cables keep everyone from fighting over cords.",
    "specs": [
      "50,000mAh, 15W wireless",
      "4 cables, 6 devices at once",
      "Hand crank, compass"
    ],
    "pros": [
      "50,000mAh for family phones",
      "Powers six devices at once",
      "Hand crank backup",
      "Magnetic wireless charging"
    ],
    "cons": [
      "Large, takes space in a drawer",
      "Solar panel is slow"
    ],
    "bestFor": "Family phone charging",
    "take": "A big phone battery with a crank for backup. Good for family emergencies.",
    "catch": "It cannot run a lamp or router."
  },
  {
    "id": "best-solar-power-bank-for-home-3",
    "rank": 3,
    "badge": "Best Budget Capacity",
    "name": "Nuynix Solar Power Bank 49800mAh",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41BlGmYpv2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FSRRGP11?tag=rvgearlab-amz-20",
    "description": "The Nuynix packs 49,800mAh with a 15W USB-C fast-charging port, multiple USB ports and an LED flashlight. It can be recharged by USB or by solar as a supplemental source and is covered by a 12 month limited warranty.\n\nIt is the lowest priced of the group, with a warranty that the FEELLE listing does not mention. It gives up the hand crank and wireless charging.\n\nIt suits budget-conscious households who want a big bank for phones. The USB-C port charges quickly while the others handle spare devices.",
    "specs": [
      "49,800mAh, 15W USB-C",
      "Multiple USB ports, LED light",
      "12-month warranty"
    ],
    "pros": [
      "49,800mAh at the lowest price",
      "15W USB-C fast charge",
      "12-month limited warranty",
      "LED flashlight"
    ],
    "cons": [
      "No crank or wireless",
      "Solar is supplemental"
    ],
    "bestFor": "Budget phone backup",
    "take": "A big bank at a low cost. A solid drawer pick.",
    "catch": "It lacks the extras of the FEELLE."
  },
  {
    "id": "best-solar-power-bank-for-home-4",
    "rank": 4,
    "badge": "Best Small Bank",
    "name": "BLAVOR Solar Power Bank 10",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51FO3FenTyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07FDXDB3W?tag=rvgearlab-amz-20",
    "description": "The BLAVOR 10,000mAh bank has a USB-C output with 20W fast charging, wireless charging and a lithium-cobalt battery the listing says gives 50% more cycles than a normal lithium polymer battery. It is IPX5 waterproof, dustproof and shockproof.\n\nIt is by far the smallest, which makes it easy to keep in a bag. A flame-retardant ABS and PC shell adds safety.\n\nIt fits individuals who want a pocket bank for daily use and outages. The wireless pad makes bedside charging easy.",
    "specs": [
      "10,000mAh, 20W USB-C",
      "Wireless charging, IPX5",
      "Lithium-cobalt battery"
    ],
    "pros": [
      "Pocket size for everyday carry",
      "20W USB-C fast charging",
      "IPX5 waterproof",
      "Flame-retardant case"
    ],
    "cons": [
      "Only 10,000mAh",
      "Charges about two phones"
    ],
    "bestFor": "Daily carry",
    "take": "A small bank you can leave in a bag. A smart secondary kit item.",
    "catch": "It will not carry a family through a long outage."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity for outages",
    "description": "mAh and Wh."
  },
  {
    "title": "AC outlet",
    "description": "Home gear."
  },
  {
    "title": "Recharge options",
    "description": "Wall, solar, crank."
  },
  {
    "title": "Safety",
    "description": "Case and cells."
  },
  {
    "title": "Storage",
    "description": "Ready charge."
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
    "subheading": "By Outage Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Router and lamp",
          "146Wh Home Backup Station",
          "AC outlets"
        ],
        [
          "Family phones",
          "FEELLE 50000mAh Home",
          "50,000mAh and crank"
        ],
        [
          "Budget phones",
          "Nuynix 49800mAh",
          "49,800mAh, lowest cost"
        ],
        [
          "Pocket carry",
          "BLAVOR 10,000mAh",
          "Smallest bank"
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
          "Nuynix 49800mAh or BLAVOR 10,000mAh"
        ],
        [
          "$60 to $80",
          "FEELLE 50000mAh Home or 146Wh Home Backup Station"
        ]
      ]
    }
  },
  {
    "subheading": "AC Station vs Phone Banks",
    "cards": [
      {
        "label": "AC Station",
        "text": "Runs real home gear. 146Wh Home Backup Station."
      },
      {
        "label": "Phone Banks",
        "text": "Phone and USB charging only. FEELLE 50000mAh Home, Nuynix 49800mAh and BLAVOR 10,000mAh."
      }
    ],
    "note": "Most homes should keep 146Wh Home Backup Station plus one phone bank."
  },
  {
    "subheading": "By Household Size",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Single person",
          "BLAVOR 10,000mAh"
        ],
        [
          "Couple",
          "Nuynix 49800mAh"
        ],
        [
          "Family",
          "FEELLE 50000mAh Home"
        ],
        [
          "Work from home",
          "146Wh Home Backup Station"
        ]
      ]
    }
  },
  {
    "subheading": "For Short Blackouts Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A pre-charged bank, an AC outlet if you need a router and a flashlight."
      },
      {
        "label": "In this comparison",
        "text": "146Wh Home Backup Station has two AC outlets and a flashlight."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on 146Wh Home Backup Station if you need AC."
      },
      {
        "label": "Save if",
        "text": "Save with Nuynix 49800mAh for phones."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match capacity to the outage",
    "explanation": "A 10,000mAh bank gives two phone charges, a 50,000mAh bank gives ten, and a 146Wh station can run a modem for hours. Estimate how many devices you need. Check capacity in the listing."
  },
  {
    "criterion": "Do you need AC",
    "explanation": "Routers, lamps and laptop chargers need AC, and phone banks do not provide it. A 146Wh station gives two AC outlets. Check the output list."
  },
  {
    "criterion": "Recharge options",
    "explanation": "Solar is slow, so a wall recharge before the storm is key. A crank adds a last resort. Check the input types."
  },
  {
    "criterion": "Case and cell safety",
    "explanation": "A flame-retardant case, a BMS and an IP rating help in a home kit. Cheap cells without protection can overheat in a hot closet. Check named protections."
  },
  {
    "criterion": "Storage and readiness",
    "explanation": "Lithium cells lose charge in storage, so top up every few months. Keep it where you can find it in the dark. Store at room temperature."
  },
  {
    "criterion": "Warranty",
    "explanation": "A 12 month warranty is worth noting on a bank you plan to keep. Banks that sit for months can fail quietly. Check warranty length."
  }
];

export const faq = [
  {
    "q": "Is a solar power bank enough for a blackout?",
    "a": "For phones, yes. For a router or lamp you need an AC unit like 146Wh Home Backup Station."
  },
  {
    "q": "Can solar recharge a power bank at home?",
    "a": "Slowly, in direct sun. Charge the bank by wall before storms."
  },
  {
    "q": "Is a hand crank worth it?",
    "a": "As a last resort, yes. FEELLE 50000mAh Home has one, but expect slow output."
  },
  {
    "q": "How do I keep a power bank ready for outages?",
    "a": "Store it charged and top it up every few months. Keep it away from heat."
  },
  {
    "q": "How many phone charges do I get?",
    "a": "Roughly two from 10,000mAh and more than ten from 50,000mAh. Conversion losses lower both numbers."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Portable Solar Panels",
    "href": "/camp-power/best-portable-solar-panels"
  },
  {
    "title": "Best Power Station",
    "href": "/camp-power/best-power-station"
  },
  {
    "title": "Best Solar Power Bank",
    "href": "/camp-power/best-solar-power-bank"
  },
  {
    "title": "Best Portable Solar Panels For Home",
    "href": "/camp-power/best-portable-solar-panels-for-home"
  }
];
