export const guideSlug = "best-20000mah-power-banks";
export const guideTitle = "5 Best 20000mah Power Banks in 2026";
export const metaTitle = "Best 20000mah Power Banks in 2026";
export const metaDescription = "Best 20000mAh power banks compared on output wattage, built-in cables, port count and size for campers who need several phone charges.";
export const mainKeyword = "best 20000mah power banks";
export const introParagraphs = [
  "A 20000mAh power bank is the multi-day option for a camper without a vehicle: it refills a modern phone about four times and still fits in a daypack. Output wattage, built-in cables and port count then decide how convenient it is.",
  "Five 20000mAh models made the shortlist, from a 30W Anker with a built-in cable to a bank with four built-in cables. They were compared on stated wattage, cable design, ports, size and safety features."
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
    "id": "best-20000mah-power-banks-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Anker Power Bank",
    "price": "$42.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31N5U6ekY4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DSZKKJTK?tag=rvgearlab-amz-20",
    "description": "The Anker 20,000mAh bank lists 45W output, dual built-in USB-C cables rated for over 10,000 bends, a USB-C port and a USB-A port. It weighs 12.85 oz, lists 4 full charges for a typical phone and can charge four devices at once.\n\nIt has 15W more output than the Anker Zolo 20K and a second built-in cable, for the same price. Compared with the INIU 45W, it adds a second built-in cable and a USB-A port.\n\nIt suits campers who share power across a couple of phones and a tablet. The built-in cables keep the pack cord-free.",
    "specs": [
      "20,000mAh, 45W output",
      "Dual built-in USB-C cables",
      "USB-C plus USB-A ports"
    ],
    "pros": [
      "Two built-in cables rated for 10,000 bends",
      "Charges four devices at once",
      "About four full phone charges",
      "Same price as the 30W Zolo"
    ],
    "cons": [
      "12.85 oz is not pocket-light",
      "Fixed cables cannot be swapped"
    ],
    "bestFor": "Sharing between a few devices",
    "take": "A solid all-rounder with 45W, two built-in cables and four device ports.",
    "catch": "Total output is shared across ports, so a laptop plus phone will not both reach full speed."
  },
  {
    "id": "best-20000mah-power-banks-2",
    "rank": 2,
    "badge": "Best Compact",
    "name": "INIU 20000mAh Portable Charger",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41glK5k1v8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DCZ56QNL?tag=rvgearlab-amz-20",
    "description": "The INIU 20000mAh model uses TinyCell battery technology to be 30 percent smaller than comparable banks, with 45W output and a built-in braided USB-C cable tested for 10,000 plus bends. It is TSA compliant and lists about 4 full phone charges.\n\nIt is the lowest priced 45W bank here, and its small size sets it apart from the Anker and NOBIS. Unlike the Anker it carries a single built-in cable.\n\nIt suits travelers who want 20000mAh without the bulk. The listing says 45W output saves 15 minutes over traditional 22.5W banks.",
    "specs": [
      "20,000mAh, 45W, TinyCell",
      "Built-in braided USB-C cable",
      "TSA compliant"
    ],
    "pros": [
      "30 percent smaller than standard 20K banks",
      "Lowest price among the 45W models",
      "Braided cable tested over 10,000 bends",
      "Travel-ready capacity"
    ],
    "cons": [
      "Single built-in cable limits sharing",
      "No USB-A port named"
    ],
    "bestFor": "Compact travel pack",
    "take": "The smallest 45W 20K, with a tough built-in cable.",
    "catch": "The cable is fixed, so a break leaves only the USB port."
  },
  {
    "id": "best-20000mah-power-banks-3",
    "rank": 3,
    "badge": "Best 30W Pick",
    "name": "Anker Zolo Power Bank",
    "price": "$42.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31I0Ym5iexL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZ9LH53B?tag=rvgearlab-amz-20",
    "description": "The Anker Zolo 20K gives 30W output, 20W input and a built-in 5.98 inch USB-C cable rated for 10,000 plus bends. ActiveShield 2.0 monitors temperature 3 million times a day, and the pack lists about 4 iPhone 15 charges.\n\nIt trails the Anker 45W by 15W and drops the second cable, at the same price. Compared with the INIU, it adds temperature monitoring.\n\nIt suits campers who want Anker's temperature management and a simple one-cable layout. Samsung phones are listed at 3.79 charges.",
    "specs": [
      "20,000mAh, 30W two-way",
      "5.98 inch built-in cable",
      "ActiveShield 2.0"
    ],
    "pros": [
      "Temperature monitoring adjusts output",
      "30W is quick for phones",
      "Built-in cable cannot be forgotten",
      "Two-way USB-C charging"
    ],
    "cons": [
      "Same price as the faster Anker 45W",
      "Only one built-in cable"
    ],
    "bestFor": "Phones and tablets with safety focus",
    "take": "The temperature-managed Zolo, simple and quick for phones.",
    "catch": "The 45W Anker offers more for the same price."
  },
  {
    "id": "best-20000mah-power-banks-4",
    "rank": 4,
    "badge": "Best Four-Port Pick",
    "name": "NOBIS Portable Charger 45W 20000mAh Power Bank Fast Charging",
    "price": "$32.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/316bUJGWcCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D63HF7Z4?tag=rvgearlab-amz-20",
    "description": "The NOBIS bank has 20000mAh, PD 3.0 and QC 4.0 protocols, two USB-A outputs and two Type-C ports. The Type-C port supports 45W both in and out, and it can charge four devices at once.\n\nIt has no built-in cable, so it relies on your own cords, unlike the Anker and INIU. It costs less than the Anker 45W.\n\nIt suits campers who already carry good cables and want four ports. Two-way 45W lets the bank refill from a fast charger.",
    "specs": [
      "20,000mAh, PD 3.0 and QC 4.0",
      "Two USB-A plus two Type-C",
      "45W in and out"
    ],
    "pros": [
      "Four outputs charge four devices",
      "45W two-way charging",
      "Supports PD 3.0 and QC 4.0",
      "Airline-approved capacity"
    ],
    "cons": [
      "No built-in cables",
      "Third-party brand with fewer details"
    ],
    "bestFor": "Own-cable campers",
    "take": "A four-port bank with 45W in and out for people who bring their own cables.",
    "catch": "Pack a cable, since none is built in."
  },
  {
    "id": "best-20000mah-power-banks-5",
    "rank": 5,
    "badge": "Best Built-In Cables",
    "name": "Orfeika 20000mAh Power Bank",
    "price": "$30.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31zOMTEIFBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F9KZR2BB?tag=rvgearlab-amz-20",
    "description": "The Orfeika bank carries 4 built-in cables (3 output and 1 input), 6 outputs in all and 20W PD charging. The listing says it is 35 percent heavier than a standard bank while doubling the capacity, and it can charge six devices at once.\n\nIt has the most outputs here and the most built-in cables, unlike the 45W models. Its 20W PD sits below the Anker and INIU.\n\nIt suits families who charge many devices at one time. An iPhone 16 reaches 50 percent in about 45 minutes.",
    "specs": [
      "20,000mAh, 6 outputs",
      "4 built-in cables",
      "20W PD, dual USB-C"
    ],
    "pros": [
      "Six devices charge at once",
      "Four built-in cables cover most phones",
      "Dual USB-C ports",
      "Costs less than both Anker banks"
    ],
    "cons": [
      "Only 20W fast charging",
      "Bulkier with so many cables"
    ],
    "bestFor": "Families and groups",
    "take": "The cable-free choice with six outputs for a whole camp group.",
    "catch": "It charges slower than the 45W pair."
  }
];

export const howWeEvaluated = [
  {
    "title": "Output wattage",
    "description": "Stated outputs of 20W to 45W were compared."
  },
  {
    "title": "Cable design",
    "description": "Built-in, dual and absent cables were noted."
  },
  {
    "title": "Ports",
    "description": "USB-C and USB-A counts were compared."
  },
  {
    "title": "Size and weight",
    "description": "Listed ounces and dimensions were compared."
  },
  {
    "title": "Safety features",
    "description": "Temperature monitoring and protocol support were noted."
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
    "subheading": "By Group Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Solo camper with phone and tablet",
          "Anker 20K 45W Dual Cable",
          "Two built-in cables and 45W."
        ],
        [
          "Smallest pack",
          "INIU 45W 20000mAh",
          "30 percent smaller body."
        ],
        [
          "Temperature-managed pack",
          "Anker Zolo 20K 30W",
          "ActiveShield 2.0 monitoring."
        ],
        [
          "Own cables, four ports",
          "NOBIS 45W 20000mAh",
          "Two USB-A and two Type-C."
        ],
        [
          "Family with many devices",
          "Orfeika 20000mAh 4-Cable",
          "Six outputs at once."
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
          "INIU 45W 20000mAh or Orfeika 20000mAh 4-Cable"
        ],
        [
          "$30 to $50",
          "NOBIS 45W 20000mAh or Anker 20K 45W Dual Cable"
        ],
        [
          "$40 to $50",
          "Anker Zolo 20K 30W"
        ]
      ]
    }
  },
  {
    "subheading": "Built-In Cables vs Open Ports",
    "cards": [
      {
        "label": "Built-in cables",
        "text": "Cables stay attached, so nothing gets lost. The Anker 20K 45W Dual Cable, INIU 45W 20000mAh and Orfeika 20000mAh 4-Cable work this way."
      },
      {
        "label": "Open ports",
        "text": "Ports let you reuse any cable and replace broken ones. The NOBIS 45W 20000mAh is the clearest example."
      }
    ],
    "note": "Most campers should pick the Anker 20K 45W Dual Cable and keep one spare cable."
  },
  {
    "subheading": "By Fast Charging Speed",
    "table": {
      "headers": [
        "Speed",
        "Recommended pick"
      ],
      "rows": [
        [
          "45W output",
          "Anker 20K 45W Dual Cable"
        ],
        [
          "30W output",
          "Anker Zolo 20K 30W"
        ],
        [
          "20W output with the most cables",
          "Orfeika 20000mAh 4-Cable"
        ]
      ]
    }
  },
  {
    "subheading": "Multi-Day Trips Without Power Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "About four phone charges, a quick-recharge input and a weight you can carry."
      },
      {
        "label": "In this comparison",
        "text": "The Anker 20K 45W Dual Cable lists four charges and the NOBIS 45W 20000mAh takes 45W input."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Anker 20K 45W Dual Cable for the speed and the built-in cables."
      },
      {
        "label": "Save if",
        "text": "Save with the Orfeika 20000mAh 4-Cable or INIU 45W 20000mAh if you want lower cost and still need four charges."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 20000mAh delivers",
    "explanation": "A 20000mAh bank delivers about 12000 to 14000mAh of usable energy after conversion at 5 volts. That is how listings arrive at about 4 phone charges. Check the charges-per-phone line."
  },
  {
    "criterion": "Built-in cables versus ports",
    "explanation": "Built-in cables save weight and tangles, yet they limit you to the connector types they include. Ports let you use any cable. Check that the built-in cable type matches your devices."
  },
  {
    "criterion": "Shared output",
    "explanation": "A bank's wattage is split between ports when several are in use, so a 45W bank may give only 20W to a phone when a laptop is plugged in. Look for a per-port and total figure. Charge your most important device first."
  },
  {
    "criterion": "Weight and size",
    "explanation": "20000mAh is roughly 12 to 15 oz, which is noticeable on a long hike but fine for car camping. Small designs trade price for size. Check the weight and dimensions."
  },
  {
    "criterion": "Temperature and safety",
    "explanation": "Lithium batteries heat up when charging fast and dislike freezing temperatures. Packs with temperature monitoring adjust output to stay safe. Check the listing for named protections such as overheat control."
  }
];

export const faq = [
  {
    "q": "How many phones can 20000mAh charge?",
    "a": "About four charges for one phone, or one charge each for four phones. The Anker Zolo 20K 30W lists about 4 charges for an iPhone 15. Tablets use more."
  },
  {
    "q": "What is the common mistake with 20000mAh banks?",
    "a": "Assuming the capacity is all usable and ignoring heat. Fast charging in a hot tent loses energy. Keep the bank shaded."
  },
  {
    "q": "Is 45W worth it over 30W?",
    "a": "For a phone, 30W is plenty. 45W helps with tablets and small laptops. The Anker 20K 45W Dual Cable costs the same as the Anker Zolo 20K 30W."
  },
  {
    "q": "How do I recharge a 20000mAh bank?",
    "a": "Use a USB-C wall charger of 20W or more, and expect several hours. The NOBIS 45W 20000mAh accepts 45W input. Charge it overnight."
  },
  {
    "q": "Can I take it on a plane?",
    "a": "Yes in carry-on, since 20000mAh is under the usual airline limit. The INIU 45W 20000mAh lists TSA compliance. Do not pack it in checked bags."
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
