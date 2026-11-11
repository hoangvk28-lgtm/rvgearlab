export const guideSlug = "best-solar-power-banks-with-wireless-charging";
export const guideTitle = "2 Best Solar Power Banks With Wireless Charging in 2026";
export const metaTitle = "Best Solar Power Banks With Wireless Charging";
export const metaDescription = "Best solar power banks with wireless charging compared on capacity, output wattage, Qi pad and panel size, with a clear note that solar only trickle charges.";
export const mainKeyword = "best solar power banks with wireless charging";
export const introParagraphs = [
  "A solar power bank with a wireless pad sounds like the perfect camp gadget, though the small built-in panel only trickles in charge. Two listings fit the brief, one huge 80000mAh bank and one light 20000mAh model.",
  "They were compared on capacity, output, wireless pad, panel and weather protection. The guide treats solar as an emergency top-up, never as the main way to charge."
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
    "id": "best-solar-power-banks-with-wireless-charging-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "80000mAh Power Bank 35W Fast Charging Wireless Solar Charger",
    "price": "$56.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UDnkpDr8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GTLM4DGS?tag=rvgearlab-amz-20",
    "description": "The Feidyns carries 80000mAh and tops out at 35W on its fastest port, with a 15W wireless pad among seven ports. Its 5W panel is there for emergencies, and the casing adds an IP66 rating plus a 300 lumen light that can flash SOS.\n\nAgainst the Luvknit, it holds four times the capacity and charges faster. The IP66 rating also protects it against rain and dust.\n\nIt suits car campers and groups who want one big bank for several phones and a tablet. Its LED and SOS strobe add safety.",
    "specs": [
      "80000mAh, 35W PD",
      "15W wireless pad, 7 ports",
      "300 lumen LED, IP66"
    ],
    "pros": [
      "35W is the top output here",
      "IP66 rain and dust protection",
      "300 lumen LED with SOS strobe",
      "Wireless pad included"
    ],
    "cons": [
      "Solar panel is for emergencies only",
      "Priciest and heaviest"
    ],
    "bestFor": "Group trips with many devices",
    "take": "The most capable bank here, with a fast port and weather protection.",
    "catch": "At 80000mAh it exceeds airline carry-on limits, so it stays in the car."
  },
  {
    "id": "best-solar-power-banks-with-wireless-charging-2",
    "rank": 2,
    "badge": "Best Budget",
    "name": "Luvknit Solar Charger Power Bank 20000mAh",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/513DmxvOuXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GXHTW5N4?tag=rvgearlab-amz-20",
    "description": "Three cables (Lightning, Type-C and USB-A) are fixed into the Luvknit's 20000mAh body, next to two USB-A sockets, a Type-C port and a Qi pad. It carries a solar panel, a three-mode LED flashlight and a shockproof, waterproof, dustproof ABS body.\n\nCompared with the Feidyns, it is far lighter and much cheaper, with cables built in so nothing gets lost. It trades capacity and speed for portability.\n\nIt suits day hikers and weekend campers who want a cheap bank with wireless charging and its own cables. The panel is only an emergency top-up.",
    "specs": [
      "20000mAh, Qi wireless",
      "3 built-in cables",
      "Solar panel, 3-mode LED"
    ],
    "pros": [
      "Qi wireless pad included",
      "Three built-in cables",
      "Shockproof and waterproof body",
      "Low price"
    ],
    "cons": [
      "Much smaller capacity",
      "Wireless charging is slow"
    ],
    "bestFor": "Short trips and day hikes",
    "take": "The light, cheap alternative with built-in cables.",
    "catch": "About a quarter of the capacity of the Feidyns."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Stated mAh figures were compared."
  },
  {
    "title": "Output speed",
    "description": "Highest port wattage and wireless pad speed were noted."
  },
  {
    "title": "Solar panel",
    "description": "Panel wattage was weighed with realistic expectations."
  },
  {
    "title": "Weather protection",
    "description": "IP ratings and shockproof claims were compared."
  },
  {
    "title": "Cables and extras",
    "description": "Built-in cables and lights were noted."
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
    "subheading": "By Trip Length",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Weekend car camping",
          "Feidyns 80000mAh",
          "Capacity for days."
        ],
        [
          "Day hike",
          "Luvknit 20000mAh Wireless",
          "Light with cables built in."
        ],
        [
          "Charging a tablet",
          "Feidyns 80000mAh",
          "35W top port."
        ],
        [
          "Overnight phone top-up",
          "Luvknit 20000mAh Wireless",
          "Qi pad included."
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
          "Luvknit 20000mAh Wireless"
        ],
        [
          "$50 to $60",
          "Feidyns 80000mAh"
        ]
      ]
    }
  },
  {
    "subheading": "Big Bank vs Light Bank",
    "cards": [
      {
        "label": "Big bank",
        "text": "A large bank gives days of power in the car. The Feidyns 80000mAh is this type."
      },
      {
        "label": "Light bank",
        "text": "A small bank travels easily and flies. The Luvknit 20000mAh Wireless is this type."
      }
    ],
    "note": "Pick the Feidyns 80000mAh for car camping and the Luvknit 20000mAh Wireless for hiking."
  },
  {
    "subheading": "By Weather Exposure",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Rain and dust",
          "Feidyns 80000mAh"
        ],
        [
          "Dry tent use",
          "Luvknit 20000mAh Wireless"
        ],
        [
          "Shockproof body",
          "Luvknit 20000mAh Wireless"
        ]
      ]
    }
  },
  {
    "subheading": "Wireless Charging at Camp",
    "cards": [
      {
        "label": "Look for",
        "text": "A Qi pad, a stated wattage and a body that handles dew."
      },
      {
        "label": "In this comparison",
        "text": "The Feidyns 80000mAh lists a 15W wireless pad and IP66, and the Luvknit 20000mAh Wireless lists a Qi pad."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Feidyns 80000mAh if you want capacity, speed and IP66."
      },
      {
        "label": "Save if",
        "text": "Save with the Luvknit 20000mAh Wireless for short trips."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Solar reality",
    "explanation": "A small panel on a bank adds a trickle of charge at best. A 5W panel may take days to fill a big bank. Treat solar as an emergency top-up and plug in to charge."
  },
  {
    "criterion": "Wireless speed",
    "explanation": "Qi pads are slower and less efficient than cables. A 15W pad suits overnight top-ups. Use a cable when speed matters."
  },
  {
    "criterion": "Capacity and airline limits",
    "explanation": "Airlines generally limit carry-on banks to about 100Wh. An 80000mAh bank is well above that. Estimate Wh by multiplying mAh by 3.7V and dividing by 1000."
  },
  {
    "criterion": "IP rating",
    "explanation": "IP66 handles dust and strong water jets. Lower ratings handle splashes only. Look for an IP figure on the listing."
  },
  {
    "criterion": "Built-in cables",
    "explanation": "Built-in cables save you from forgetting one. They can also wear out. Check which connectors are included."
  }
];

export const faq = [
  {
    "q": "Can a solar bank recharge itself in the sun?",
    "a": "Only slowly. The built-in panels are small, so treat them as an emergency top-up. The Feidyns 80000mAh lists a 5W panel."
  },
  {
    "q": "What is the common mistake?",
    "a": "Relying on the panel as the main charger. Plug in before the trip. Use solar only if stranded."
  },
  {
    "q": "Is the Feidyns worth it over the Luvknit?",
    "a": "For groups, yes. The Feidyns 80000mAh holds more and charges faster. The Luvknit 20000mAh Wireless is easier to carry."
  },
  {
    "q": "How do I use wireless charging?",
    "a": "Place the phone centered on the pad. Remove thick cases. Use a cable if charging is slow."
  },
  {
    "q": "How do I store a solar bank?",
    "a": "Keep it partly charged, cool and dry. Avoid hot cars. Top it up every few months."
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
