export const guideSlug = "best-power-banks-under-100";
export const guideTitle = "5 Best Power Banks Under 100 in 2026";
export const metaTitle = "Best Power Banks Under 100 in 2026";
export const metaDescription = "Best power banks under $100: five laptop-class and AC-outlet banks compared on output, capacity, flight limits and cable for camping and travel.";
export const mainKeyword = "best power banks under 100";
export const introParagraphs = [
  "A $100 budget buys either a laptop-class USB-C bank or a bank with a real AC outlet. The five picks run from about $52 to $90 and cover 20,000 to 27,000mAh banks and small power-station-style banks with 88 to 146Wh.",
  "This is the tier where a power bank can replace a laptop charger and run small plug-in gear. The notes explain which parts of the extra money you need."
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
    "id": "best-power-banks-under-100-1",
    "rank": 1,
    "badge": "Best Value Under $100",
    "name": "Portable Power Bank with AC Outlet",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41CQeTs7kzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLFY6TGQ?tag=rvgearlab-amz-20",
    "description": "Paopaoyu stores 27,000mAh (98Wh) and has a 100W AC outlet, a 65W PD USB-C port for input and output, and is TSA compliant, FCC and CE certified. At 98Wh it sits just under the 100Wh airline limit.\n\nAt about $90 it stores about 10Wh more than the MARBERO while staying under the airline line, and it adds 65W USB-C power. The UGREEN costs $38 less and has no AC outlet, and the MARBERO costs $33 less.\n\nChoose it for a laptop, a camera and phone on a flight or road trip. It runs a standard laptop brick from the wall socket.",
    "specs": [
      "27,000mAh (98Wh), 100W AC",
      "65W PD USB-C in and out",
      "TSA compliant, FCC and CE"
    ],
    "pros": [
      "AC outlet runs a standard laptop brick",
      "65W PD USB-C for laptops",
      "Under 100Wh for flights",
      "FCC and CE certified"
    ],
    "cons": [
      "Heavier than USB-only banks",
      "100W AC outlet limits big loads"
    ],
    "bestFor": "Flights and trips with AC gear",
    "take": "A bank that flies and has a wall outlet.",
    "catch": "Do not plug in a kettle or hair dryer."
  },
  {
    "id": "best-power-banks-under-100-2",
    "rank": 2,
    "badge": "Best USB-C Only",
    "name": "UGREEN Nexode 100W 20000mAh Power Bank",
    "price": "$52.23",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31CXgItzozL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C3GTMX5M?tag=rvgearlab-amz-20",
    "description": "UGREEN's Nexode holds 20,000mAh with 100W USB-C output, 65W input for recharging, a digital display and three ports (two USB-C and a USB-A). It is compact for its capacity.\n\nAt about $52 it is the cheapest pick that charges a laptop at full speed and a third cheaper than the Paopaoyu. It has no AC outlet, so it suits USB-C devices only.\n\nChoose it for a USB-C laptop, a phone and a tablet. The 65W input refills it fast.",
    "specs": [
      "20,000mAh, 100W USB-C",
      "65W input recharge",
      "Two USB-C, one USB-A, display"
    ],
    "pros": [
      "100W output for laptops",
      "65W input refills quickly",
      "Digital display",
      "Compact for 20,000mAh"
    ],
    "cons": [
      "No built-in cables",
      "Output drops when ports share"
    ],
    "bestFor": "USB-C laptops and phones",
    "take": "A fast, compact laptop bank at about $52.",
    "catch": "Bring a 100W cable."
  },
  {
    "id": "best-power-banks-under-100-3",
    "rank": 3,
    "badge": "Best Capacity For USB-C",
    "name": "INIU Laptop Power Bank",
    "price": "$66.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+1PxfYX8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJ8HTS9R?tag=rvgearlab-amz-20",
    "description": "INIU holds 25,000mAh with 100W output and EV-grade cells that the maker rates at a genuine 25,000mAh. Half an hour on it lifts a 14 inch laptop by over 50 points and an iPhone 17 Pro Max by about 57 points, and it can keep a Steam Deck or ROG Ally going for hours.\n\nAt about $67 it costs $15 more than the UGREEN and carries 5,000mAh more. A 0.4 foot 100W cable is included.\n\nChoose it for a gaming handheld, a laptop and a phone on a flight. It fits in a bag.",
    "specs": [
      "25,000mAh, 100W USB-C",
      "Laptop 20 to 77% type charge speed",
      "0.4 ft 100W cable"
    ],
    "pros": [
      "100W for laptops and handhelds",
      "25,000mAh is airline safe",
      "Cable included",
      "EV-grade cells"
    ],
    "cons": [
      "Short cable",
      "No AC outlet"
    ],
    "bestFor": "Laptops and handheld gaming",
    "take": "The biggest USB-C bank under $100.",
    "catch": "Pack a longer cable."
  },
  {
    "id": "best-power-banks-under-100-4",
    "rank": 4,
    "badge": "Best Light AC Bank",
    "name": "MARBERO Portable Power Station with AC Outlet 100W Solar Generator 88.8Wh",
    "price": "$56.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41wZl-HiHhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DYV2GH2S?tag=rvgearlab-amz-20",
    "description": "MARBERO is a 2.27 lb pack of 88.8Wh (24,000mAh) with a 110V AC outlet rated 100W continuous (150W surge), 60W two-way PD USB-C and pass-through charging. It recharges to full in 2 hours over USB-C and has a flashlight rated up to 20.7 hours.\n\nAt about $57 it is about $33 cheaper than the Paopaoyu and has the lightest body. It is the best pick for a tent with a mini fan and string lights.\n\nChoose it if you want AC power on a budget and light weight. It stays under the airline limit.",
    "specs": [
      "88.8Wh, 100W AC, 150W surge",
      "60W PD USB-C two-way",
      "2.27 lb, flashlight"
    ],
    "pros": [
      "Real AC outlet at 2.27 lb",
      "60W USB-C recharges in 2 hours",
      "Pass-through charging",
      "20.7 hour flashlight"
    ],
    "cons": [
      "100W AC limit",
      "Less capacity than the Paopaoyu"
    ],
    "bestFor": "Tent fan and string lights",
    "take": "A light AC bank for small loads.",
    "catch": "Plan around 100W."
  },
  {
    "id": "best-power-banks-under-100-5",
    "rank": 5,
    "badge": "Best Largest Capacity",
    "name": "Portable Power Station",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41v-K6eu6gL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D947C332?tag=rvgearlab-amz-20",
    "description": "Apowking holds 146Wh (39,600mAh) with two 110V AC outlets at 100W (200W peak), seven outputs and a dual LED flashlight. It can also be recharged by a 13 to 23V solar panel that is sold separately.\n\nAt about $80 it holds 50 percent more than the Paopaoyu and has two AC outlets, and it is too big for a flight at 146Wh. It weighs more than the other banks.\n\nChoose it for a car camp with a laptop, a fan and phones. It runs from a panel.",
    "specs": [
      "146Wh, 100W AC (200W peak)",
      "Two AC outlets, seven outputs",
      "13 to 23V solar input"
    ],
    "pros": [
      "Two AC outlets",
      "146Wh covers many charges",
      "Solar recharge option",
      "Dual LED flashlight"
    ],
    "cons": [
      "Over 100Wh so airline approval is needed",
      "Heavier than banks"
    ],
    "bestFor": "Car camping with AC loads",
    "take": "The most capacity and two outlets under $100.",
    "catch": "Panel not included."
  }
];

export const howWeEvaluated = [
  {
    "title": "Output wattage",
    "description": "Output from 60W to 100W USB-C and 100W AC was compared."
  },
  {
    "title": "Capacity",
    "description": "Capacity from 88.8Wh to 146Wh and 20,000 to 27,000mAh was compared."
  },
  {
    "title": "Flight limits",
    "description": "Wh against the 100Wh airline limit was checked."
  },
  {
    "title": "Ports",
    "description": "AC outlets, USB-C input and output and cables were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is under $100, and the top pick combines an AC outlet with flight legality."
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
          "Flight with AC gear",
          "Paopaoyu 27000mAh AC Bank",
          "98Wh and a 100W AC outlet."
        ],
        [
          "USB-C laptop",
          "UGREEN Nexode 100W 20K",
          "100W at about $52."
        ],
        [
          "Laptop and handheld gaming",
          "INIU 25000mAh 100W",
          "25,000mAh at 100W."
        ],
        [
          "Tent fan on a budget",
          "MARBERO 88.8Wh AC Bank",
          "2.27 lb AC bank."
        ],
        [
          "Car camp with two outlets",
          "Apowking 146Wh AC Station",
          "146Wh, two outlets."
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
          "$50 to $60",
          "UGREEN Nexode 100W 20K or MARBERO 88.8Wh AC Bank"
        ],
        [
          "$60 to $80",
          "INIU 25000mAh 100W or Apowking 146Wh AC Station"
        ],
        [
          "$80 to $90",
          "Paopaoyu 27000mAh AC Bank"
        ]
      ]
    }
  },
  {
    "subheading": "USB-C bank vs AC bank",
    "cards": [
      {
        "label": "USB-C",
        "text": "The UGREEN Nexode 100W 20K and INIU 25000mAh 100W are light and efficient. They charge USB-C devices only."
      },
      {
        "label": "AC",
        "text": "The Paopaoyu 27000mAh AC Bank, MARBERO 88.8Wh AC Bank and Apowking 146Wh AC Station power any plug-in device. They weigh more."
      }
    ],
    "note": "Most buyers with a USB-C laptop should take the UGREEN Nexode 100W 20K."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Budget band",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $52",
          "UGREEN Nexode 100W 20K"
        ],
        [
          "About $57",
          "MARBERO 88.8Wh AC Bank"
        ],
        [
          "About $67",
          "INIU 25000mAh 100W"
        ],
        [
          "About $80",
          "Apowking 146Wh AC Station"
        ],
        [
          "About $90",
          "Paopaoyu 27000mAh AC Bank"
        ]
      ]
    }
  },
  {
    "subheading": "For flying with a laptop specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for under 100Wh, 65W or more USB-C PD and TSA compliance."
      },
      {
        "label": "In this comparison",
        "text": "The Paopaoyu 27000mAh AC Bank is 98Wh with 65W PD, and the INIU 25000mAh 100W is 100W."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you need an AC outlet that still flies, which the Paopaoyu 27000mAh AC Bank provides at about $90. Spend on the Apowking 146Wh AC Station only for car camping."
      },
      {
        "label": "Save if",
        "text": "Save if your laptop uses USB-C, since the UGREEN Nexode 100W 20K costs about $52."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Wh limit for flights",
    "explanation": "Airlines allow banks up to 100Wh in carry-on, and a 27,000mAh bank at 3.6V is about 98Wh, right at the line. A 146Wh bank needs approval and cannot fly on many airlines. Check the Wh on the label before you pack, and the airline decides, so a bank at the line may be refused by one agent and accepted by another."
  },
  {
    "criterion": "USB-C vs AC",
    "explanation": "USB-C banks charge laptops efficiently and weigh less, while AC outlets run a standard laptop brick and other plug-in devices at 10 to 20 percent loss. A 100W AC outlet cannot run a kettle. Check which ports your gear needs, so a USB-C laptop charger and a USB-C bank are the lighter pairing and an AC bank the more flexible."
  },
  {
    "criterion": "Continuous vs peak watts",
    "explanation": "A 100W continuous AC outlet with a 150W surge runs a laptop brick (65W) and a fan, not a hair dryer. Peak ratings last a second. Check the continuous watts, and a coffee maker or hair dryer of 800W or more is beyond every bank here."
  },
  {
    "criterion": "Recharge speed",
    "explanation": "A 65W USB-C input refills a 20,000mAh bank in about 1.5 hours, while a 60W input fills the MARBERO in 2 hours. A slow charger takes all night. Check the input wattage and the charger you need, and a bank that takes 8 hours to refill will not be ready for a morning departure after an evening charge."
  },
  {
    "criterion": "Solar input",
    "explanation": "A bank that accepts a 13 to 23V panel can recharge off-grid. A 100W panel adds about 300Wh a day. Check the input voltage range, and the panel must be in the 13 to 23V range and have a plug that fits the bank, and check the plug type too."
  },
  {
    "criterion": "Weight",
    "explanation": "A USB-C bank weighs about 1 lb, while AC banks weigh 2 to 4 lb. Weight matters if you carry it. Check the lb figure, and a 4 lb AC bank in a hiking pack is hard to justify, while in a car it is invisible."
  }
];

export const faq = [
  {
    "q": "Can a power bank run a laptop?",
    "a": "Yes if its output meets the laptop's charger wattage. The UGREEN Nexode 100W 20K and INIU 25000mAh 100W provide 100W over USB-C, while the AC banks provide a 100W outlet for a laptop brick. Check the laptop's adapter label, and USB-C laptops are the easiest to pair."
  },
  {
    "q": "Can I fly with the Apowking 146Wh?",
    "a": "Not normally. At 146Wh it exceeds the 100Wh carry-on limit and needs airline approval up to 160Wh. The Paopaoyu 27000mAh AC Bank at 98Wh is under the limit. Check the airline's policy, and check the airline site before packing."
  },
  {
    "q": "What happens if I exceed the AC wattage?",
    "a": "The bank shuts off or trips protection, which is safe but stops the device. A 100W AC bank cannot run a 1200W hair dryer. Add up the wattage of what you plug in, and the unit restarts after you unplug the load."
  },
  {
    "q": "How long does a 98Wh bank run a laptop?",
    "a": "About 1.5 to 2 charges for a 50Wh laptop, or 3 to 4 hours of use for a 30W laptop. A gaming laptop drains it in an hour. Check your laptop's battery size, and a lighter load lasts longer."
  },
  {
    "q": "Can I charge these from a car?",
    "a": "Yes, with a 12V car USB-C adapter rated 30 to 65W. The MARBERO 88.8Wh AC Bank accepts 60W input, so a strong adapter refills it in a couple of hours. Run the engine while charging so you do not drain the car battery."
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
