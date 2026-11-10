export const guideSlug = "best-car-power-inverters";
export const guideTitle = "5 Best Car Power Inverters in 2026";
export const metaTitle = "Best Car Power Inverters in 2026";
export const metaDescription = "Best car power inverters from 300W plug-ins to 1000W pure sine units, compared on waveform, outlets, displays and protections for road and camp use.";
export const mainKeyword = "best car power inverters";
export const introParagraphs = [
  "A car power inverter can be a pocket-size plug for a laptop or a 1000W box wired to a battery, and the two are not interchangeable. This list covers both ends, so the first job is matching the connection style to what you need to run.",
  "Five inverters were compared on continuous watts, waveform claims, outlets, displays and the protections each listing names. The range runs from a 300W plug-in to a pure sine 1000W unit, which keeps the picks distinct rather than five near-identical adapters."
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
    "id": "best-car-power-inverters-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "FT feiteeng 1000W Pure Sine Wave Inverter 12V DC to 120V AC Power Inverter",
    "price": "$68.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41akEgZqJKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GKQYJ6QM?tag=rvgearlab-20",
    "description": "The FT feiteeng lists 1000W continuous and 2000W surge as pure sine wave, with up to 95 percent conversion efficiency. An LED screen shows input and output voltage and real-time protection, with a fault-code system for problems.\n\nIt is the only pick that combines a pure sine claim with a diagnostic readout. Compared with the OLTEANP it adds the fault-code system, and against the POWERFUEL it trades extra outlets for cleaner power.\n\nIt suits campers and tradespeople who run sensitive gear from a vehicle battery. Six protections are listed, including reverse polarity.",
    "specs": [
      "1000W pure sine, 2000W surge",
      "Up to 95% efficiency",
      "LED screen with fault codes"
    ],
    "pros": [
      "Pure sine for sensitive electronics",
      "95 percent conversion efficiency",
      "LED readout with fault codes",
      "Six protections including reverse polarity"
    ],
    "cons": [
      "Needs a direct battery connection",
      "Priciest of the five"
    ],
    "bestFor": "Sensitive gear on a battery",
    "take": "A high-efficiency pure sine unit with a diagnostic screen.",
    "catch": "At 1000W, it should be wired to a battery with thick cables and a fuse."
  },
  {
    "id": "best-car-power-inverters-2",
    "rank": 2,
    "badge": "Best for Camping Use",
    "name": "1000W Power Inverter 12V DC to 110V/120V AC Car Converter for Vehicles",
    "price": "$59.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iXQ6oro1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D8T8Q92V?tag=rvgearlab-20",
    "description": "The OLTEANP supplies 1000W continuous and 2000W peak, with two AC outlets, a 36W USB-C port and a fast USB port. An LCD shows voltage and protection codes such as overload and high voltage.\n\nIt is cheaper than the FT feiteeng and has a USB-C port the FT lacks. Compared with the POWERFUEL it provides continuous watts rather than a peak-only figure.\n\nIt suits road trips, truck sleeping and tailgating, which the listing names. Six safety protections and temperature-controlled cooling are standard.",
    "specs": [
      "1000W continuous, 2000W peak",
      "36W USB-C plus USB",
      "Two AC outlets, LCD"
    ],
    "pros": [
      "Continuous rating clearly stated",
      "36W USB-C fast port",
      "LCD displays protection codes",
      "Temperature-controlled fan"
    ],
    "cons": [
      "No pure sine claim",
      "Needs battery wiring for full power"
    ],
    "bestFor": "Truck sleepers and tailgaters",
    "take": "A well-priced 1000W with USB-C and protection codes.",
    "catch": "Standard output suits chargers, tools and lights but not every motor load."
  },
  {
    "id": "best-car-power-inverters-3",
    "rank": 3,
    "badge": "Best for Many Outlets",
    "name": "1200W Peak Power Inverter",
    "price": "$48.44",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41SS4qlb34L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVHGJ418?tag=rvgearlab-20",
    "description": "The POWERFUEL lists 1200W peak with three AC outlets, one Type-C and three USB ports. It has a temperature-controlled fan, a real-time LCD and a six-way protection set.\n\nIt has the most ports of the five. The listing also names deep-cycle battery connection to power lights, routers and fans, which sets it apart from the plug-ins.\n\nIt suits families who charge many devices at once on a road trip. The figure is a peak rating, so check the continuous number before loading it.",
    "specs": [
      "1200W peak, 3 AC outlets",
      "Type-C plus three USB",
      "LCD with six protections"
    ],
    "pros": [
      "Three AC outlets plus four USB ports",
      "LCD shows voltage and battery level",
      "Quiet fan runs only when needed",
      "Six-way protection"
    ],
    "cons": [
      "Listing states peak, not continuous",
      "No pure sine claim"
    ],
    "bestFor": "Charging a full family",
    "take": "The most ports for the money, aimed at multi-device charging.",
    "catch": "Without a continuous figure, size your loads conservatively."
  },
  {
    "id": "best-car-power-inverters-4",
    "rank": 4,
    "badge": "Best Plug-In Pick",
    "name": "BESTEK 400W Car Power Inverter DC 12V to AC 110V Car Charger Plug Adapter",
    "price": "$28.48",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Y6bTcKOLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GKTTYHCK?tag=rvgearlab-20",
    "description": "The BESTEK gives 400W through dual 110V AC outlets plus a 30W PD USB-C and a QC 3.0 USB-A port in an iPhone-sized body. A 40 amp fuse and ETL certification are listed.\n\nIt is the only certified plug-in here and the least complex to set up. Compared with the DrimMek it has more output and a named fuse.\n\nIt suits drivers who charge laptops, tablets and cameras from the console. The 32-pin plug cord is long enough for most seats.",
    "specs": [
      "400W, dual AC outlets",
      "30W PD plus QC 3.0",
      "40 amp fuse, ETL certified"
    ],
    "pros": [
      "ETL certified",
      "Named 40 amp fuse",
      "iPhone-size body",
      "Plugs into any cigarette socket"
    ],
    "cons": [
      "Vehicle socket limits real output",
      "No pure sine claim"
    ],
    "bestFor": "Easiest plug-in setup",
    "take": "A certified, fused plug-in for everyday charging.",
    "catch": "A cigarette socket usually supports far less than 400W."
  },
  {
    "id": "best-car-power-inverters-5",
    "rank": 5,
    "badge": "Best Budget",
    "name": "300W Car Power Inverter 12V to 110V Car Outlet Adapter",
    "price": "$23.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xYWZ79ZYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D69KNQSJ?tag=rvgearlab-20",
    "description": "The DrimMek is a compact 300W plug-in with multiple ports, a quiet fan and overload and short-circuit protection. It is built to sit in a glove box or console.\n\nIt is the cheapest option in this list. Compared with the BESTEK it has lower output and no named fuse.\n\nIt suits occasional travelers who charge a laptop or phone. A one-year replacement-only guarantee is listed.",
    "specs": [
      "300W, multi-port",
      "Quiet cooling fan",
      "Overload and short-circuit protection"
    ],
    "pros": [
      "Lowest price in the list",
      "Compact enough for a glove box",
      "Quiet fan",
      "One-year replacement guarantee"
    ],
    "cons": [
      "Replacement-only guarantee, no repairs",
      "Few port details on the listing"
    ],
    "bestFor": "Occasional trips",
    "take": "The cheapest way to get AC power in a car.",
    "catch": "Limited output suits chargers only."
  }
];

export const howWeEvaluated = [
  {
    "title": "Waveform",
    "description": "Pure sine claims versus standard output."
  },
  {
    "title": "Continuous versus peak",
    "description": "Listings that state continuous watts were favored over peak-only ratings."
  },
  {
    "title": "Displays",
    "description": "LCD and LED readouts were compared."
  },
  {
    "title": "Ports",
    "description": "AC outlets, USB-C and USB-A counts."
  },
  {
    "title": "Protection",
    "description": "Fuses, certifications and named protections."
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
          "Sensitive electronics on a battery",
          "FT feiteeng 1000W Pure Sine",
          "Pure sine plus a diagnostic screen."
        ],
        [
          "Truck sleeping or tailgating",
          "OLTEANP 1000W Inverter",
          "1000W continuous with USB-C."
        ],
        [
          "Charging a full family",
          "POWERFUEL 1200W Peak Inverter",
          "Three AC and four USB ports."
        ],
        [
          "Console plug-in",
          "BESTEK 400W Plug-In Inverter",
          "Certified and fused."
        ],
        [
          "Occasional trips",
          "DrimMek 300W Inverter",
          "Cheapest."
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
          "DrimMek 300W Inverter or BESTEK 400W Plug-In Inverter"
        ],
        [
          "$40 to $60",
          "POWERFUEL 1200W Peak Inverter or OLTEANP 1000W Inverter"
        ],
        [
          "$60 to $70",
          "FT feiteeng 1000W Pure Sine"
        ]
      ]
    }
  },
  {
    "subheading": "Plug-In vs Wired",
    "cards": [
      {
        "label": "Plug-in",
        "text": "Quick and simple, limited by the socket fuse. The BESTEK 400W Plug-In Inverter and DrimMek 300W Inverter work this way."
      },
      {
        "label": "Wired to battery",
        "text": "Handles big loads with thick cables. The FT feiteeng 1000W Pure Sine, OLTEANP 1000W Inverter and POWERFUEL 1200W Peak Inverter suit this."
      }
    ],
    "note": "Most people do well with the BESTEK 400W Plug-In Inverter; step up only for appliances."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "Premium",
          "FT feiteeng 1000W Pure Sine"
        ],
        [
          "Mid-range 1000W",
          "OLTEANP 1000W Inverter"
        ],
        [
          "Mid-range plug-in",
          "BESTEK 400W Plug-In Inverter"
        ],
        [
          "Lowest price",
          "DrimMek 300W Inverter"
        ]
      ]
    }
  },
  {
    "subheading": "Roadside Laptop and Tool Charging",
    "cards": [
      {
        "label": "Look for",
        "text": "A named continuous rating, a fuse and a low-voltage shutoff."
      },
      {
        "label": "In this comparison",
        "text": "The OLTEANP 1000W Inverter states 1000W continuous, and the BESTEK 400W Plug-In Inverter has a named 40 amp fuse."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the FT feiteeng 1000W Pure Sine if clean power or diagnostics matter, and on the OLTEANP 1000W Inverter for USB-C plus continuous output."
      },
      {
        "label": "Save if",
        "text": "Save with the DrimMek 300W Inverter or BESTEK 400W Plug-In Inverter for everyday charging."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Continuous versus peak watts",
    "explanation": "Continuous watts is what the inverter can supply for hours, while peak is a brief surge for startup. A listing that gives only a peak figure, like a 1200W peak, says little about running loads. Choose by the continuous rating and keep a safe margin."
  },
  {
    "criterion": "Plug-in or battery wired",
    "explanation": "A cigarette socket is usually good for around 150W, so 300W and 400W plug-ins are ceilings rather than promises. A 1000W unit must be wired to a battery with thick cables and a fuse near the terminal. Decide this first."
  },
  {
    "criterion": "Pure sine wave",
    "explanation": "Pure sine output works with motors, CPAP machines and finicky electronics. Standard-wave output is fine for chargers and lights. If the listing does not say pure sine, assume it is not."
  },
  {
    "criterion": "Battery drain and engine state",
    "explanation": "Even a modest load drains a starter battery within hours with the engine off, and a 1000W load can flatten it in minutes. Run the engine, or use a separate deep-cycle battery. Look for low-voltage shutoff on the listing."
  },
  {
    "criterion": "Ventilation and fuse",
    "explanation": "Fans and metal cases carry heat away, and a named fuse protects the wiring. Do not bury the unit under bags. Never use it near flammable fumes."
  }
];

export const faq = [
  {
    "q": "Which size car inverter do I need?",
    "a": "Add up the running watts of the devices you will use together, and pick a continuous rating above that. The DrimMek 300W Inverter or BESTEK 400W Plug-In Inverter suits chargers. Choose a 1000W unit for appliances."
  },
  {
    "q": "What mistake do people make?",
    "a": "Trusting a peak rating as a running rating. The POWERFUEL 1200W Peak Inverter lists peak watts, so treat the continuous figure as lower. Check before loading it."
  },
  {
    "q": "Is pure sine worth the extra cost?",
    "a": "For motors and medical gear, yes, like the FT feiteeng 1000W Pure Sine. For charging, the OLTEANP 1000W Inverter or a plug-in is enough. Spend on sine wave only when needed."
  },
  {
    "q": "How do I install a 1000W unit?",
    "a": "Turn the inverter off, connect thick cables with a fuse near the battery, red to positive and black to negative, then switch on. Keep it ventilated. Disconnect with the unit off."
  },
  {
    "q": "Can it drain my battery?",
    "a": "Yes, so run the engine or use a deep-cycle battery. The LCD on the OLTEANP 1000W Inverter and the screen on the FT feiteeng 1000W Pure Sine help you watch voltage. Unplug it when finished."
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
