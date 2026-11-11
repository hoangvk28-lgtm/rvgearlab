export const guideSlug = "best-portable-power-stations-for-starlink-mini";
export const guideTitle = "2 Best Portable Power Stations For Starlink Mini in 2026";
export const metaTitle = "Best Portable Power Stations For Starlink Mini";
export const metaDescription = "Two battery power stations built for Starlink Mini compared on capacity, stated runtime, ports, stand design and weather rating for camp internet.";
export const mainKeyword = "best portable power stations for starlink mini";
export const introParagraphs = [
  "Starlink Mini needs steady DC power at camp, and a battery built for it saves cable and adapter fuss. Only two such battery stations were found with clear listings, so this is a short, focused guide.",
  "They were compared on capacity, stated runtime, output ports, charging, stand or case and weather rating. Runtime depends on usage and signal conditions, so treat 8 hours as a best-case figure."
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
    "id": "best-portable-power-stations-for-starlink-mini-1",
    "rank": 1,
    "badge": "Best Capacity",
    "name": "288Wh LiFePO4 Battery Pack for Starlink Mini",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31eIf4rHOuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GLY6B9BY?tag=rvgearlab-amz-20",
    "description": "The GENDOME StarGrid is a 288Wh LiFePO4 battery built for Starlink Mini, listed at up to 8 hours of runtime depending on usage. Its USB-C and DC ports both support 60W in and out, a full charge takes about 5 hours from one port, and using both cuts that to about 2.5 hours.\n\nIt stores 99Wh more than the ROVEDGE, which is 189Wh, and adds a custom carry case. LiFePO4 cells and a BMS guard against overcharge, overheating and short circuits.\n\nIt suits campers who want the most stored energy and a case that keeps the dish and cables together. Solar and car charging are listed.",
    "specs": [
      "288Wh LiFePO4, up to 8 h",
      "USB-C and DC, 60W in and out",
      "Stand and carry case"
    ],
    "pros": [
      "288Wh is the larger battery",
      "Fast 2.5 hour dual-port charge",
      "Carry case included",
      "LiFePO4 with BMS protection"
    ],
    "cons": [
      "No weather rating is stated",
      "Solar input details are not listed"
    ],
    "bestFor": "Longest camp sessions",
    "take": "The larger, cheaper battery with a case. Choose it for longer sessions and tidy storage.",
    "catch": "The listing does not state a water or dust rating."
  },
  {
    "id": "best-portable-power-stations-for-starlink-mini-2",
    "rank": 2,
    "badge": "Best Weather Protection",
    "name": "ROVEDGE MK-1 Portable Power Station for Starlink Mini",
    "price": "$239.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Bk3qHCecL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H7J8XTX7?tag=rvgearlab-amz-20",
    "description": "The ROVEDGE MK-1 holds 189Wh (51,300mAh) in nine cells and is listed at up to 8 hours for Starlink Mini under typical conditions. It delivers 30V DC directly, has a built-in fold-out tripod and a visible orange status ring.\n\nIts IP67 housing with an aluminum frame operates from -20C to 50C, a protection level the GENDOME does not state. Pass-through charging is supported and the battery doubles as the stand.\n\nIt suits campers who face rain, dust or cold and want battery and tripod in one body. The status ring shows charging and output at a glance.",
    "specs": [
      "189Wh, 51,300mAh",
      "30V DC output, tripod stand",
      "IP67, -20C to 50C"
    ],
    "pros": [
      "IP67 weather rating",
      "Battery and tripod in one",
      "Direct 30V DC output",
      "Pass-through charging"
    ],
    "cons": [
      "Smaller than the GENDOME",
      "Costs more than the GENDOME"
    ],
    "bestFor": "Wet, dusty or cold camps",
    "take": "The rugged, weather-ready option. Pick it when conditions are rough.",
    "catch": "It stores less energy and costs more."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity and runtime",
    "description": "We compared stated Wh and the runtime each listing quotes for Starlink Mini."
  },
  {
    "title": "Charging and ports",
    "description": "USB-C, DC ports, pass-through and charge times were compared."
  },
  {
    "title": "Stand and carry",
    "description": "Built-in stands and cases were compared."
  },
  {
    "title": "Weather rating",
    "description": "IP ratings and operating temperatures were compared."
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
    "subheading": "By Camp Condition",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Long sessions, tidy storage",
          "GENDOME StarGrid 288Wh",
          "288Wh and a carry case."
        ],
        [
          "Rain, dust or cold",
          "ROVEDGE MK-1",
          "IP67 and -20C to 50C."
        ],
        [
          "Quick recharge between trips",
          "GENDOME StarGrid 288Wh",
          "Dual-port 2.5 hour charge."
        ],
        [
          "Built-in tripod",
          "ROVEDGE MK-1",
          "Battery and tripod in one."
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
          "$190 to $200",
          "GENDOME StarGrid 288Wh"
        ],
        [
          "$230 to $240",
          "ROVEDGE MK-1"
        ]
      ]
    }
  },
  {
    "subheading": "Capacity vs Weather Protection",
    "cards": [
      {
        "label": "Capacity",
        "text": "The GENDOME StarGrid 288Wh stores more energy and charges faster."
      },
      {
        "label": "Protection",
        "text": "The ROVEDGE MK-1 trades capacity for IP67 and a built-in tripod."
      }
    ],
    "note": "Pick the GENDOME StarGrid 288Wh for dry camps and the ROVEDGE MK-1 for exposed ones."
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
          "Lower price",
          "GENDOME StarGrid 288Wh"
        ],
        [
          "Higher price for IP67",
          "ROVEDGE MK-1"
        ]
      ]
    }
  },
  {
    "subheading": "For Van and RV Internet Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Pass-through charging, a stable stand and enough Wh for a work day."
      },
      {
        "label": "In this comparison",
        "text": "The GENDOME StarGrid 288Wh lists 288Wh and a case. The ROVEDGE MK-1 lists pass-through and a tripod."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ROVEDGE MK-1 if your camps see rain, dust or cold."
      },
      {
        "label": "Save if",
        "text": "Save with the GENDOME StarGrid 288Wh, which costs less and stores more."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watt-hours and runtime",
    "explanation": "Watt-hours measure stored energy, and runtime is Wh divided by the dish's draw. An 8 hour figure from 189 to 288Wh implies a modest draw, but real use varies. Plan extra capacity for cold nights and heavy use."
  },
  {
    "criterion": "Output type",
    "explanation": "Starlink Mini accepts DC power, and a purpose-built battery supplies the right voltage with the right connector. A generic power bank may need a cable and enough wattage. Check the listing's stated voltage and compatibility."
  },
  {
    "criterion": "Pass-through charging",
    "explanation": "Pass-through lets you charge the battery while it powers the dish. That helps with solar or a vehicle during the day. Look for the words pass-through in the listing."
  },
  {
    "criterion": "Weather rating",
    "explanation": "Rain and dust can stop a dish. An IP67 rating means sealed against dust and brief immersion. Check the IP number and temperature range."
  },
  {
    "criterion": "Charging time",
    "explanation": "A battery that takes 6 hours to charge is hard to reuse on a short trip. Dual-port charging halves the time. Check the stated charge time and the wattage of your charger."
  },
  {
    "criterion": "Stand and cable management",
    "explanation": "A built-in stand and case cut the number of loose parts. A tripod holds the dish level and off wet ground. Check what is included."
  }
];

export const faq = [
  {
    "q": "Can I use any power bank with Starlink Mini?",
    "a": "Not always. The dish needs the right voltage and enough wattage, and a cable may be needed. A purpose-built battery avoids guesswork. Check Starlink's own power requirements."
  },
  {
    "q": "What mistake do campers make with Starlink Mini power?",
    "a": "Underestimating runtime. Cold weather and a weak signal can raise draw. Carry extra capacity."
  },
  {
    "q": "Is the ROVEDGE worth it over the GENDOME?",
    "a": "Only if you need IP67 and a built-in tripod. The GENDOME StarGrid 288Wh stores more for less."
  },
  {
    "q": "How do I set up the dish on a battery?",
    "a": "Place the battery on level ground, connect the supplied cable and power on. Position the dish with a clear view of the sky. Keep connectors dry."
  },
  {
    "q": "How do I keep the battery healthy?",
    "a": "Charge it before storage and avoid heat. Use it every few months. Keep it dry."
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
