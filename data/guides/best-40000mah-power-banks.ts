export const guideSlug = "best-40000mah-power-banks";
export const guideTitle = "5 Best 40000mah Power Banks in 2026";
export const metaTitle = "Best 40000mah Power Banks in 2026";
export const metaDescription = "Best 40000mAh power banks compared on laptop-class output, built-in cables, solar and flashlight extras for car camping and base camp.";
export const mainKeyword = "best 40000mah power banks";
export const introParagraphs = [
  "A 40000mAh power bank is a ground-camp tool: big enough to refill phones for a week, but too heavy and, at the top end, too large to fly with. The choices come down to output wattage, built-in cables and the extras that make a bank useful after dark.",
  "Five 40000mAh models made the shortlist, from a 65W laptop-capable pack to a budget 22.5W bank. They were compared on stated wattage, ports, cables, weather protection and the airline note each listing carries."
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
    "id": "best-40000mah-power-banks-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "65W Power Bank 40000mAh Laptop Portable Charger Battery Pack",
    "price": "$45.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iuptkk+3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FN3YRXX4?tag=rvgearlab-20",
    "description": "The REWONDER lists 40,000mAh (154Wh) with 65W PD output for laptops, an integrated handle, silicone covers over the ports and a splash-resistant shell. It also has an LED flashlight with three brightness levels and works with Steam Deck and ROG Ally handhelds.\n\nIt is the only bank here that reaches laptop-class 65W and it is also the priciest. Against the other four, its handle and port covers suit dusty campsites.\n\nIt suits car campers and van users who want to run a laptop or handheld for days. The listing says it is built for ground use.",
    "specs": [
      "40000mAh, 154Wh, 65W PD",
      "Handle and silicone port covers",
      "LED flashlight, three levels"
    ],
    "pros": [
      "65W output can charge laptops",
      "Carry handle and dust covers for rough use",
      "Built-in flashlight with three levels",
      "Works with Steam Deck and ROG Ally"
    ],
    "cons": [
      "Exceeds airline limit, ground use only",
      "Needs a 5A E-Marker cable for full speed"
    ],
    "bestFor": "Laptops and handhelds at camp",
    "take": "The laptop-capable choice, built with a handle and dust covers for rough camp use.",
    "catch": "Peak 65W needs a single port and a 5A E-Marker cable that is sold separately."
  },
  {
    "id": "best-40000mah-power-banks-2",
    "rank": 2,
    "badge": "Best Solar Extras",
    "name": "MINRISE Solar Power Bank 40000mAh",
    "price": "$33.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Xcqpec6NL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DZH8RBTD?tag=rvgearlab-20",
    "description": "The MINRISE is a solar-topped 40,000mAh bank with 20W PD, three built-in output cables (Type-C, iOS and Micro USB) and a built-in USB-A input. It has an ABS shell with silicone corners, a silicone port cover and two LED flashlights with up to 165 feet of reach.\n\nIt adds solar and a lighting kit that the 22.5W banks lack, at a lower output than the FlyKangaroo's 30W. The built-in cables cover most older phones.\n\nIt suits campers who want a bank that works as a light and tops up slowly in the sun. Solar input is a trickle, so wall or USB charging is the main route.",
    "specs": [
      "40000mAh, 20W PD, solar panel",
      "3 built-in cables plus USB-A",
      "Dual flashlights, 165 ft reach"
    ],
    "pros": [
      "Solar panel gives a sunny-day trickle",
      "Three built-in output cables",
      "Dual LED flashlights",
      "Silicone corners and port cover"
    ],
    "cons": [
      "20W output is mid speed",
      "Solar charging is very slow"
    ],
    "bestFor": "Camp light and backup",
    "take": "A rugged bank with built-in cables, solar and two flashlights for night use.",
    "catch": "Use solar as a top-up only, since a bank this size needs many sunny days."
  },
  {
    "id": "best-40000mah-power-banks-3",
    "rank": 3,
    "badge": "Best Fast 40K",
    "name": "FlyKangaroo Portable Charger Power Bank 40000mAh",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41zetQEZ-NL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FQMJL8C8?tag=rvgearlab-20",
    "description": "The FlyKangaroo lists 40,000mAh with PD 30W and QC 4.0, two USB outputs, a USB-C port for input and output, a micro USB input and an LED display. It reports 61 percent charge for an iPhone in about 30 minutes.\n\nIt outputs 10W more than the MINRISE and 7.5W more than the 22.5W banks, and it costs less than both REWONDER and MINRISE. It has no built-in cables, so it relies on your own.\n\nIt suits campers who want quicker phone and tablet charging from a big bank. Three devices can charge together.",
    "specs": [
      "40000mAh, PD 30W, QC 4.0",
      "2 USB, USB-C in and out",
      "LED percentage display"
    ],
    "pros": [
      "30W output is the fastest below laptop class",
      "Three devices at once",
      "Percentage display on the front",
      "Lower price than the solar and 65W picks"
    ],
    "cons": [
      "No built-in cables",
      "Micro USB input is dated"
    ],
    "bestFor": "Quick tablet and phone refills",
    "take": "The speed pick under the laptop class, with a percentage display.",
    "catch": "Bring cables for every device you plan to charge."
  },
  {
    "id": "best-40000mah-power-banks-4",
    "rank": 4,
    "badge": "Best Built-In Cables",
    "name": "Eliegntist Portable Charger 40000mAh Power Bank",
    "price": "$24.55",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41baGe+tS7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H3323M79?tag=rvgearlab-20",
    "description": "The Eliegntist carries 40,000mAh with PD 22.5W and QC 4.0, three built-in cables (iOS, Type-C and USB-A) and an LED display accurate to 1 percent. It uses a high-density polymer battery for a smaller body.\n\nIt adds cables that the FlyKangaroo lacks and costs a little less. Compared with the MINRISE, it has no flashlight or solar panel.\n\nIt suits campers who want a no-fuss bank that leaves cords at home. The 1 percent display shows remaining energy.",
    "specs": [
      "40000mAh, PD 22.5W",
      "Three built-in cables",
      "1 percent LED display"
    ],
    "pros": [
      "Built-in iOS and Type-C cables",
      "Display accurate to 1 percent",
      "Quick charging with PD 22.5W",
      "Priced near the bottom of the list"
    ],
    "cons": [
      "No weather protection is named",
      "22.5W is slower than the FlyKangaroo"
    ],
    "bestFor": "Cord-free camp charging",
    "take": "A simple bank with three built-in cables and a precise gauge.",
    "catch": "Fixed cables cannot be replaced if one fails."
  },
  {
    "id": "best-40000mah-power-banks-5",
    "rank": 5,
    "badge": "Best Budget",
    "name": "Portable Charger Power Bank 40000mah Fast Charging",
    "price": "$22.44",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31QuWyH2rTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DG8KH68D?tag=rvgearlab-20",
    "description": "The RONEGN lists 40,000mAh with 22.5W USB-C and 20W iOS fast charging, three outputs and two inputs, and a safety system with a soft-touch finish. It weighs more than a pocket bank, in keeping with its size.\n\nIts price is the lowest of the five, and its output matches the Eliegntist at 22.5W. Without built-in cables or a flashlight, it relies on your own cords.\n\nIt suits budget campers who want maximum capacity at the lowest cost. Three devices can charge together from the outputs.",
    "specs": [
      "40000mAh, 22.5W USB-C",
      "3 outputs and 2 inputs",
      "Soft-touch safe battery pack"
    ],
    "pros": [
      "Lowest price of the five",
      "22.5W with 20W iOS fast charging",
      "Three outputs, two inputs",
      "Multi-protection safety system"
    ],
    "cons": [
      "No built-in cables",
      "Fewer extras than the other four"
    ],
    "bestFor": "Low-cost capacity",
    "take": "The cheapest 40K, with everything basic and nothing extra.",
    "catch": "The listing gives few dimensions, so check its size before packing."
  }
];

export const howWeEvaluated = [
  {
    "title": "Output wattage",
    "description": "Stated outputs from 20W to 65W were compared."
  },
  {
    "title": "Airline note",
    "description": "Listed Wh and flight notes were read."
  },
  {
    "title": "Built-in cables",
    "description": "Cables and ports were counted."
  },
  {
    "title": "Extras",
    "description": "Solar, flashlights and handles were noted."
  },
  {
    "title": "Weather protection",
    "description": "Port covers and shell materials were compared."
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
    "subheading": "By Device",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Laptop or handheld",
          "REWONDER 65W 40000mAh",
          "65W PD output."
        ],
        [
          "Phone and a camp light",
          "MINRISE Solar 40000mAh",
          "Two flashlights and solar."
        ],
        [
          "Phones and tablets quickly",
          "FlyKangaroo 40000mAh PD 30W",
          "30W PD with a display."
        ],
        [
          "Leaving cords at home",
          "Eliegntist 40000mAh Built-In Cables",
          "Three built-in cables."
        ],
        [
          "Lowest cost",
          "RONEGN 40000mAh 22.5W",
          "Cheapest 40K here."
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
          "RONEGN 40000mAh 22.5W or Eliegntist 40000mAh Built-In Cables"
        ],
        [
          "$20 to $40",
          "FlyKangaroo 40000mAh PD 30W or MINRISE Solar 40000mAh"
        ],
        [
          "$40 to $50",
          "REWONDER 65W 40000mAh"
        ]
      ]
    }
  },
  {
    "subheading": "Laptop Class vs Phone Class",
    "cards": [
      {
        "label": "Laptop class",
        "text": "A 65W bank runs a laptop for a long camp stay. The REWONDER 65W 40000mAh is the only one here."
      },
      {
        "label": "Phone class",
        "text": "20W to 30W banks charge phones and tablets quickly. The MINRISE Solar 40000mAh, FlyKangaroo 40000mAh PD 30W, Eliegntist 40000mAh Built-In Cables and RONEGN 40000mAh 22.5W fit here."
      }
    ],
    "note": "Most campers should pick the FlyKangaroo 40000mAh PD 30W, unless a laptop must run at camp."
  },
  {
    "subheading": "By Extras",
    "table": {
      "headers": [
        "Extra",
        "Recommended pick"
      ],
      "rows": [
        [
          "Handle and dust covers",
          "REWONDER 65W 40000mAh"
        ],
        [
          "Solar panel and flashlights",
          "MINRISE Solar 40000mAh"
        ],
        [
          "Percentage display",
          "FlyKangaroo 40000mAh PD 30W"
        ],
        [
          "Built-in iOS cable",
          "Eliegntist 40000mAh Built-In Cables"
        ]
      ]
    }
  },
  {
    "subheading": "Car Camping and Base Camp Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A listed output of 22.5W or more, a clear display and a body built to ride in a gear bin."
      },
      {
        "label": "In this comparison",
        "text": "The REWONDER 65W 40000mAh has a handle and port covers, and the FlyKangaroo 40000mAh PD 30W has a display."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the REWONDER 65W 40000mAh if a laptop or a handheld has to run from the bank."
      },
      {
        "label": "Save if",
        "text": "Save with the RONEGN 40000mAh 22.5W or Eliegntist 40000mAh Built-In Cables if phones are the only load."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watt-hours and flights",
    "explanation": "Airlines generally cap carry-on batteries at 100Wh, and a 40000mAh pack is around 148Wh, which is over that. Some listings say plainly that the bank is for ground use. Check the Wh on the listing before flying."
  },
  {
    "criterion": "65W versus phone speeds",
    "explanation": "A 65W port can run a laptop, while 22.5W and 30W are phone and tablet speeds. Peak output often needs a single port and a specific cable. Look for the cable requirement in the listing."
  },
  {
    "criterion": "Built-in versus own cables",
    "explanation": "Built-in cables remove clutter but add bulk and a breakage point. Banks without them rely on your own cords. Check which connectors the built-in cables include."
  },
  {
    "criterion": "Solar on a power bank",
    "explanation": "The small panel on a solar bank only adds a trickle, so it is a backup, not a charger. A full recharge by sun alone can take days. Count it as an emergency top-up."
  },
  {
    "criterion": "Rough-use protection",
    "explanation": "Silicone port covers, rubber corners and a handle help at dusty campsites. IPX ratings matter only if the listing names one. Check for the covers or a stated rating."
  }
];

export const faq = [
  {
    "q": "Can I fly with a 40000mAh power bank?",
    "a": "Usually not in the cabin, since most airline limits sit near 100Wh. The REWONDER 65W 40000mAh lists 154Wh and says it is for ground use. Check the airline rules."
  },
  {
    "q": "What is the common mistake with large banks?",
    "a": "Buying a 40K bank for hiking and finding it too heavy. They are for car and base camp. Pick a 10K to 20K bank for the trail."
  },
  {
    "q": "Is solar worth it on a power bank?",
    "a": "It is a trickle backup only. The MINRISE Solar 40000mAh adds a panel, but plan to recharge by wall or USB. Use the panel when you have no other option."
  },
  {
    "q": "How do I get full 65W from the REWONDER?",
    "a": "Use a single port, a 5A USB-C cable with an E-Marker chip and a 65W-capable charger. The cable is sold separately. Sharing ports reduces output."
  },
  {
    "q": "How do I store a large bank?",
    "a": "Keep it cool, dry and partly charged. Top it up every few months. Avoid leaving it in a hot car."
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
