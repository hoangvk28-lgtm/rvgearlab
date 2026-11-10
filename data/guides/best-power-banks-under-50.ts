export const guideSlug = "best-power-banks-under-50";
export const guideTitle = "5 Best Power Banks Under 50 in 2026";
export const metaTitle = "Best Power Banks Under 50 in 2026";
export const metaDescription = "Best power banks under $50: five 10,000 to 50,000mAh banks compared on capacity, size, built-in cables and airline limits for multi-day camping.";
export const mainKeyword = "best power banks under 50";
export const introParagraphs = [
  "Fifty dollars is the capacity tier. It buys 20,000mAh with 45W output, or 50,000mAh banks that recharge a phone ten times, at the price of weight and a flight restriction.",
  "The five picks here run from about $10 to $33. The notes explain the tradeoff between mAh on the label, the weight you carry and what you can bring on a plane."
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
    "id": "best-power-banks-under-50-1",
    "rank": 1,
    "badge": "Best Value Under $50",
    "name": "INIU 20000mAh Portable Charger",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41glK5k1v8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DCZ56QNL?tag=rvgearlab-amz-20",
    "description": "INIU holds 20,000mAh with 45W output and TinyCell technology that makes it about 30 percent smaller than standard 20,000mAh banks. It has a built-in braided USB-C cable tested over 10,000 bends and is TSA compliant.\n\nAt about $30 it costs $3 more than the NOBIS from the last tier and builds in the cable. The 50,000mAh banks hold more than twice the energy and weigh about 0.7 lb, and they cannot fly.\n\nChoose it for a two or three day trip where weight and flight rules matter. It charges a phone, a tablet and a small laptop.",
    "specs": [
      "20,000mAh, 45W, TinyCell",
      "Built-in braided USB-C cable",
      "TSA compliant"
    ],
    "pros": [
      "30 percent smaller than standard 20K banks",
      "45W covers phone, tablet and laptop",
      "Braided cable tested to 10,000 bends",
      "Flight-safe capacity"
    ],
    "cons": [
      "Single built-in cable limits sharing",
      "Costs more than the 10,000mAh banks"
    ],
    "bestFor": "Two to three day trips and flights",
    "take": "The best balance of size, speed and capacity.",
    "catch": "Bring a spare cable for a second device."
  },
  {
    "id": "best-power-banks-under-50-2",
    "rank": 2,
    "badge": "Best High Capacity",
    "name": "50000mAh Portable Charger",
    "price": "$33.22",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41pKMteGu5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWM43LJS?tag=rvgearlab-amz-20",
    "description": "YBYP packs a rated 50,000mAh into a body 4.2 inches long that weighs 0.7 lb. It has four built-in cables, 22.5W output and an LED percentage display.\n\nAt about $33 it holds more than twice the energy of the INIU and costs $3 more. A 50,000mAh pack is about 185Wh at the usual 3.7V, which is above the 160Wh airline ceiling, so it travels by car only.\n\nChoose it for a camp where you charge phones, lights and a tablet for four or five days. Four built-in cables mean no tangle.",
    "specs": [
      "50,000mAh, 0.7 lb, 4.2 inches",
      "Four built-in cables",
      "22.5W output, LED display"
    ],
    "pros": [
      "Rated for 50,000mAh in a small body",
      "Four built-in cables",
      "LED shows exact percentage",
      "22.5W fast charging"
    ],
    "cons": [
      "Cannot fly (about 185Wh)",
      "Real capacity is likely below the label"
    ],
    "bestFor": "Long car-camping trips",
    "take": "The biggest battery under $50 for a car camp.",
    "catch": "Treat 50,000mAh as a rating, not a promise."
  },
  {
    "id": "best-power-banks-under-50-3",
    "rank": 3,
    "badge": "Best Value 50K",
    "name": "Portable Charger Power Bank 50000mAh",
    "price": "$22.94",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TBSvpYS8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H267CFCN?tag=rvgearlab-amz-20",
    "description": "Binli is a 50,000mAh bank that is 30 percent smaller and 15 percent lighter than traditional high-capacity banks, at 0.75 lb and about 4.4 by 2.8 by 1.2 inches. It has four built-in cables for Micro-B, USB-C and other connectors, 22.5W charging, an LED display and 8-layer safety protection.\n\nAt about $23 it costs $10 less than the YBYP for the same rated capacity. It has a bigger body and a slightly slower marketing claim of 55 percent charge in 30 minutes on a phone.\n\nChoose it for the lowest price per mAh in the guide. It suits road trips and base camps.",
    "specs": [
      "50,000mAh, 0.75 lb",
      "Four built-in cables, 22.5W",
      "LED display, 8-layer safety"
    ],
    "pros": [
      "Rated 50,000mAh for about $23",
      "Four built-in cables",
      "LED digital display",
      "8-layer safety protection"
    ],
    "cons": [
      "Cannot fly (about 185Wh)",
      "Real capacity likely below the rating"
    ],
    "bestFor": "Lowest cost per mAh",
    "take": "A cheap 50,000mAh bank for the car.",
    "catch": "Do not plan on flying with it."
  },
  {
    "id": "best-power-banks-under-50-4",
    "rank": 4,
    "badge": "Best Compact Fast Charger",
    "name": "INIU 10000mAh 45W Fast Charging Portable Charger",
    "price": "$20.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41GzEENvuwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CB1FW5FC?tag=rvgearlab-amz-20",
    "description": "INIU is a 10,000mAh bank that is 40 percent smaller than standard banks and puts out 45W, enough to take an iPhone 17 Pro Max to 76 percent in 30 minutes. A detachable 0.4 foot braided cable is included and it is TSA compliant.\n\nAt about $22 it is a third the capacity of the YBYP and the fastest charger of the small banks. The VEEKTOMX costs $12 less and is slower.\n\nChoose it for a day hike or a flight, where size and speed matter more than days of power. It fits in a pocket.",
    "specs": [
      "10,000mAh, 45W output",
      "40% smaller, detachable cable",
      "TSA compliant"
    ],
    "pros": [
      "45W output in a pocket-size body",
      "Replaceable detachable cable",
      "Flight-safe and TSA compliant",
      "Charges a tablet in 30 minutes"
    ],
    "cons": [
      "About two phone charges",
      "Short 0.4 foot cable"
    ],
    "bestFor": "Day hikes and flights",
    "take": "The fastest pocket bank in this guide.",
    "catch": "Carry a longer cable too."
  },
  {
    "id": "best-power-banks-under-50-5",
    "rank": 5,
    "badge": "Best Cheapest Slim",
    "name": "Portable Charger 10000mAh",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31nKssgxmfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GXK1KYFQ?tag=rvgearlab-amz-20",
    "description": "VEEKTOMX holds 10,000mAh in a 4.57 by 2.83 by 0.66 inch body weighing 6.4 oz. It has 22.5W PD 3.0 and QC 3.0 output, a USB-C port with input and output, a USB-A port, an LED level indicator and CE, RoHS and FCC certification.\n\nAt about $10 it is the lowest price in the guide and the lightest. It has half the capacity of the INIU 20000mAh for a third of the price.\n\nChoose it for an emergency spare bank in a day pack. It is airline friendly.",
    "specs": [
      "10,000mAh, 22.5W PD and QC",
      "4.57 x 2.83 x 0.66 inches, 6.4 oz",
      "USB-C in and out, USB-A"
    ],
    "pros": [
      "Only 6.4 oz",
      "22.5W PD and QC 3.0",
      "LED level indicator",
      "CE, RoHS and FCC certified"
    ],
    "cons": [
      "No built-in cable",
      "Small capacity"
    ],
    "bestFor": "Emergency spare",
    "take": "A light backup bank for about $10.",
    "catch": "Treat it as a spare."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Banks from 10,000 to 50,000mAh were compared."
  },
  {
    "title": "Weight and size",
    "description": "Weights from 6.4 oz to 0.75 lb were compared."
  },
  {
    "title": "Charging speed",
    "description": "Output from 22.5W to 45W was compared."
  },
  {
    "title": "Cable design",
    "description": "Built-in and detachable cables were noted."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is under $50, and the top pick has the best mix of speed, size and flight legality."
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
          "Flights and day hikes",
          "INIU 20000mAh 45W",
          "74Wh, flight-safe, 45W."
        ],
        [
          "Long car camp",
          "YBYP 50000mAh Compact",
          "Four cables, 50,000mAh."
        ],
        [
          "Cheapest 50,000mAh",
          "Binli 50000mAh",
          "About $23."
        ],
        [
          "Fast pocket bank",
          "INIU 10000mAh 45W",
          "45W in a small body."
        ],
        [
          "Emergency spare",
          "VEEKTOMX 10000mAh Slim",
          "6.4 oz."
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
          "$0 to $30",
          "VEEKTOMX 10000mAh Slim or INIU 10000mAh 45W"
        ],
        [
          "$20 to $30",
          "Binli 50000mAh or INIU 20000mAh 45W"
        ],
        [
          "$30 to $40",
          "YBYP 50000mAh Compact"
        ]
      ]
    }
  },
  {
    "subheading": "Flight-safe vs car-camp",
    "cards": [
      {
        "label": "Flight-safe",
        "text": "The INIU 20000mAh 45W, INIU 10000mAh 45W and VEEKTOMX 10000mAh Slim stay under 100Wh and fly in carry-on."
      },
      {
        "label": "Car-camp",
        "text": "The YBYP 50000mAh Compact and Binli 50000mAh hold about 185Wh, too much for a plane. They suit road trips."
      }
    ],
    "note": "Most buyers should take the INIU 20000mAh 45W, and car campers the Binli 50000mAh."
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
          "About $10",
          "VEEKTOMX 10000mAh Slim"
        ],
        [
          "About $22",
          "INIU 10000mAh 45W"
        ],
        [
          "About $23",
          "Binli 50000mAh"
        ],
        [
          "About $30",
          "INIU 20000mAh 45W"
        ],
        [
          "About $33",
          "YBYP 50000mAh Compact"
        ]
      ]
    }
  },
  {
    "subheading": "For a family car camp specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for 50,000mAh for many phones, four built-in cables and an LED display."
      },
      {
        "label": "In this comparison",
        "text": "The YBYP 50000mAh Compact has four cables and 50,000mAh, and the Binli 50000mAh costs less."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a flight-safe 45W bank, which is what the INIU 20000mAh 45W provides at about $30. The next tier adds 100W banks for laptops."
      },
      {
        "label": "Save if",
        "text": "Save if you want the cheapest capacity, since the Binli 50000mAh costs about $23 and the VEEKTOMX 10000mAh Slim about $10."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Airline watt-hour limit",
    "explanation": "Airlines allow carry-on lithium banks up to 100Wh, and up to 160Wh with approval, and nothing above that. A 20,000mAh bank is about 74Wh, while 50,000mAh is about 185Wh, which is over the limit. Check the Wh figure on the bank's label before you fly."
  },
  {
    "criterion": "Real capacity",
    "explanation": "The mAh figure is the rated cell capacity at 3.7V, and a bank delivers about 65 to 70 percent of it to your device after conversion losses. Very small banks with huge labels often deliver less. Treat a 50,000mAh label as roughly 30,000 to 35,000mAh usable."
  },
  {
    "criterion": "Weight",
    "explanation": "A 10,000mAh bank weighs 6 to 8 oz, a 20,000mAh bank about 12 oz and a 50,000mAh bank 0.7 lb or more. Weight matters for hikes but not for a car camp. Check the weight against how far you carry it, and a 50,000mAh bank adds the weight of a small water bottle, which is easy in a car and a burden on a trail."
  },
  {
    "criterion": "Built-in cables",
    "explanation": "Four built-in cables mean no spares to lose, but a broken cable cannot be replaced. A detachable cable can be swapped for a few dollars. Check which connectors the built-in cables use, and cables built into a bank are usually 4 to 6 inches long, so allow for propping the bank on a pack strap."
  },
  {
    "criterion": "Output wattage",
    "explanation": "A 22.5W output takes a phone to 55 to 65 percent in 30 minutes, while 45W can also charge a tablet. Many 50,000mAh banks are limited to 22.5W because of heat. Check your device's maximum charging speed, and a laptop that needs 65W will charge very slowly or not at all from a 22.5W bank."
  },
  {
    "criterion": "Recharge time",
    "explanation": "A 50,000mAh bank on a 22.5W input takes 8 to 12 hours to refill, while a 10,000mAh bank on 45W takes about 1.5 hours. Slow recharge matters if you only have an evening at a powered site. Check the input wattage, so refill the bank before you leave, because a bank that is half full at the trailhead gives half the days."
  }
];

export const faq = [
  {
    "q": "Can I take a 50,000mAh bank on a plane?",
    "a": "No. At 3.7V it is about 185Wh, above the 160Wh airline limit, and carry-on banks over 100Wh need approval. The YBYP 50000mAh Compact and Binli 50000mAh must travel by car. The INIU 20000mAh 45W is under the limit, and ship them or leave them at home if you fly."
  },
  {
    "q": "Is a 50,000mAh label accurate?",
    "a": "Rarely in full. Usable output is about 65 to 70 percent of the rating, and very small cases often deliver less. Expect 30,000 to 35,000mAh of usable charge from either 50,000mAh bank. It is still enough for about 8 phone charges, and cold weather cuts the output further."
  },
  {
    "q": "Which bank charges a tablet fastest?",
    "a": "The INIU 20000mAh 45W and INIU 10000mAh 45W, which push 45W through USB-C. The 22.5W banks charge a tablet at about half the speed. Use a USB-C cable rated for 45W or more and a short cable wastes less."
  },
  {
    "q": "How do I recharge a 50,000mAh bank?",
    "a": "Use a 20W or larger USB-C charger, and plan on 8 to 12 hours. It will not recharge quickly from a car socket either. Charge it overnight before the trip and keep the bank off bedding while it charges."
  },
  {
    "q": "Are built-in cables a good idea?",
    "a": "They are handy and reduce clutter, but a broken cable is hard to fix and each cable fits only one connector type. The INIU 20000mAh 45W has one built-in USB-C cable, and the YBYP 50000mAh Compact has four."
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
