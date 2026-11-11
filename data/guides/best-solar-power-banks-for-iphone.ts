export const guideSlug = "best-solar-power-banks-for-iphone";
export const guideTitle = "3 Best Solar Power Banks For Iphone in 2026";
export const metaTitle = "Best Solar Power Banks For Iphone in 2026";
export const metaDescription = "Best solar power banks for iPhone, compared on USB-C fast charging, Qi wireless pads, built-in Lightning cables and capacity.";
export const mainKeyword = "best solar power banks for iphone";
export const introParagraphs = [
  "An iPhone can fast charge over USB-C and over Qi wireless, so a solar bank for iPhone should offer at least one of the two. Three models are compared here, from a 10000mAh pocket bank to a 20000mAh unit with Lightning, USB-C and USB-A cables.",
  "The three were compared on USB-C wattage, wireless pads, built-in Lightning cables and capacity. A panel on any of them is a slow top-up, so the cable and wattage set the ranking."
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
    "id": "best-solar-power-banks-for-iphone-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Solar Power Bank 20000mAh",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Vr6MQDySL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GQT25KXS?tag=rvgearlab-amz-20",
    "description": "The YELOMIN lists 20000mAh with 22.5W Quick Charge that tops a phone to roughly 75 percent in about 30 minutes. Three cables (USB-C, Lightning and USB-A) are built in, with dual Type-C and USB-A output ports and dual LEDs with three modes.\n\nIt is the only pick with a named built-in Lightning cable, and it posts the highest wattage of the three. The ERRBBIC adds a wireless pad where this model relies on cables.\n\nIt suits an iPhone owner who wants a Lightning cable on board and a fast refill. The panel gives a safety-net top-up.",
    "specs": [
      "20000mAh, 22.5W fast charge",
      "Built-in USB-C, Lightning, USB-A",
      "Dual LEDs, 3 modes"
    ],
    "pros": [
      "Built-in Lightning cable",
      "22.5W Quick Charge",
      "Phone to about 75 percent in 30 minutes",
      "Dual LED flashlights"
    ],
    "cons": [
      "No wireless pad listed",
      "Solar charging is slow"
    ],
    "bestFor": "iPhones with Lightning",
    "take": "The iPhone-friendly pick, with Lightning on board and the highest wattage.",
    "catch": "Newer USB-C iPhones need no Lightning cable, so the extra cable matters most for older models."
  },
  {
    "id": "best-solar-power-banks-for-iphone-2",
    "rank": 2,
    "badge": "Best Compact",
    "name": "BLAVOR Solar Power Bank 10",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51ojDGHzXCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07T2NRK8G?tag=rvgearlab-amz-20",
    "description": "The BLAVOR lists a 10000mAh pack with a 20W USB-C port, plus Qi wireless charging and an IPX5 rating. The listing quotes 65 percent on an iPhone 15 within half an hour.\n\nSmallest and lightest of the three, it carries half the cell of the others. It adds Qi wireless, which the YELOMIN skips.\n\nA pocket-bank fan with an iPhone will like the fast USB-C port and the wireless pad. The IPX5 body handles splashes.",
    "specs": [
      "10000mAh, 20W USB-C",
      "Qi wireless charging",
      "IPX5, lithium-cobalt cells"
    ],
    "pros": [
      "20W USB-C fills an iPhone 15 to 65 percent fast",
      "Qi wireless pad",
      "IPX5 water and dust protection",
      "Compact and light"
    ],
    "cons": [
      "Only 10000mAh",
      "Wireless is slower than a cable"
    ],
    "bestFor": "Pocket carry",
    "take": "A small bank with fast USB-C and a wireless pad.",
    "catch": "The panel is tiny, so charge by wall."
  },
  {
    "id": "best-solar-power-banks-for-iphone-3",
    "rank": 3,
    "badge": "Best Budget Wireless",
    "name": "Solar Charger Power Bank 20000mAh",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51+rn1PO2NL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H153HTD2?tag=rvgearlab-amz-20",
    "description": "The ERRBBIC lists 20000mAh with 15W fast charging to 60 percent in 30 minutes, a wireless pad and three built-in cables for six devices. A solar panel serves as a safety net.\n\nIt costs less than the YELOMIN and BLAVOR and adds a wireless pad on a 20000mAh cell. The 15W port is slower than the other two.\n\nIt suits an iPhone user who wants cable-free charging and a large cell for a low price. Six devices can charge from the three built-in cables and ports.",
    "specs": [
      "20000mAh, 15W fast charge",
      "Wireless pad, 3 cables",
      "Solar panel"
    ],
    "pros": [
      "Lowest price of the three",
      "Wireless pad for iPhone and Android",
      "Three built-in cables",
      "Phone to 60 percent in 30 minutes"
    ],
    "cons": [
      "Slowest fast-charge port of the three",
      "Cable types are not itemized"
    ],
    "bestFor": "Budget cable-free charging",
    "take": "A budget bank with wireless and a big cell.",
    "catch": "Confirm the built-in cable types before relying on a Lightning lead."
  }
];

export const howWeEvaluated = [
  {
    "title": "USB-C wattage",
    "description": "Fast-charge wattage was compared for iPhone."
  },
  {
    "title": "Wireless pad",
    "description": "Qi wireless support was noted."
  },
  {
    "title": "Cables",
    "description": "Lightning and USB-C cables were compared."
  },
  {
    "title": "Capacity",
    "description": "Stated mAh was compared."
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
    "subheading": "By iPhone Setup",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Older iPhone with Lightning",
          "YELOMIN 20000mAh Lightning",
          "Built-in Lightning cable."
        ],
        [
          "Pocket carry, fast USB-C",
          "BLAVOR 10000mAh Wireless",
          "20W and compact."
        ],
        [
          "Wireless on a budget",
          "ERRBBIC 20000mAh Wireless",
          "Wireless pad at the lowest price."
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
          "ERRBBIC 20000mAh Wireless"
        ],
        [
          "$20 to $30",
          "YELOMIN 20000mAh Lightning"
        ],
        [
          "$20 to $30",
          "BLAVOR 10000mAh Wireless"
        ]
      ]
    }
  },
  {
    "subheading": "Cable vs wireless",
    "cards": [
      {
        "label": "Cable charging",
        "text": "Faster and more efficient. The YELOMIN 20000mAh Lightning and BLAVOR 10000mAh Wireless fit here."
      },
      {
        "label": "Wireless charging",
        "text": "Convenient but slower. The ERRBBIC 20000mAh Wireless and BLAVOR 10000mAh Wireless fit here."
      }
    ],
    "note": "Most iPhone users should pick the YELOMIN 20000mAh Lightning."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Choose",
        "Recommended pick"
      ],
      "rows": [
        [
          "Fastest port",
          "YELOMIN 20000mAh Lightning"
        ],
        [
          "Smallest",
          "BLAVOR 10000mAh Wireless"
        ],
        [
          "Lowest price",
          "ERRBBIC 20000mAh Wireless"
        ]
      ]
    }
  },
  {
    "subheading": "For Camping With an iPhone Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A fast USB-C or Lightning cable and a stated charge time."
      },
      {
        "label": "In this comparison",
        "text": "The YELOMIN 20000mAh Lightning lists a built-in Lightning cable and 22.5W."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the YELOMIN 20000mAh Lightning if you use a Lightning iPhone."
      },
      {
        "label": "Save if",
        "text": "Save with the ERRBBIC 20000mAh Wireless if you want wireless."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What iPhones accept",
    "explanation": "Recent iPhones charge fast over USB-C Power Delivery, and Qi wireless at lower speeds. A 20W port is enough for a full-speed charge. Check your iPhone model's maximum input."
  },
  {
    "criterion": "Lightning or USB-C",
    "explanation": "Older iPhones need a Lightning cable, while recent iPhones use USB-C. A bank with built-in Lightning saves a cable but cannot be replaced if it breaks. Check which cables the listing names."
  },
  {
    "criterion": "Wireless on a bank",
    "explanation": "A Qi pad works with iPhones from the 8 onward. It is slower than a cable and wastes energy. Use it for earbuds and watches."
  },
  {
    "criterion": "Solar panel reality",
    "explanation": "The panel on a bank adds a small trickle. It is not a way to charge an iPhone in a day. Charge by wall first."
  },
  {
    "criterion": "Capacity per iPhone",
    "explanation": "A 10000mAh bank gives about two iPhone charges and a 20000mAh bank about four. Charge counts shrink with heat and age, so treat the listing figure as a best case. Read the charge count on the listing."
  }
];

export const faq = [
  {
    "q": "Do I need a Lightning cable?",
    "a": "Older iPhones do and newer ones use USB-C. Check your model."
  },
  {
    "q": "Will it fast charge my iPhone?",
    "a": "Fast charging needs a USB-C PD port and a USB-C cable. Check the iPhone model."
  },
  {
    "q": "Is wireless worth it?",
    "a": "It is convenient but slower. Use a cable when speed matters."
  },
  {
    "q": "Can solar charge my iPhone?",
    "a": "Only slowly. Use the panel as a backup."
  },
  {
    "q": "How many charges do I get?",
    "a": "A 20000mAh bank gives about four. Real numbers vary."
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
