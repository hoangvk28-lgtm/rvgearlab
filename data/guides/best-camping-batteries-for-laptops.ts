export const guideSlug = "best-camping-batteries-for-laptops";
export const guideTitle = "6 Best Camping Batteries For Laptops in 2026";
export const metaTitle = "Best Camping Batteries For Laptops in 2026";
export const metaDescription = "Best camping batteries for laptops compared on watt-hours, USB-C PD wattage, AC outlets and size, for charging a laptop at camp from banks or small stations.";
export const mainKeyword = "best camping batteries for laptops";
export const introParagraphs = [
  "A laptop needs far more power than a phone, so the right camping battery depends on your charger's wattage and how many charges you want. Six options span three USB-C power banks, one 100W-class bank, and two small stations with AC outlets.",
  "They were compared on watt-hours, USB-C PD output, AC availability, size and weight. Check your laptop charger's label first, since a 65W laptop and a 140W laptop need different banks."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/home-golden-hour-campsite.webp";
export const heroImageAlt = "Dome tent and hammock at a forest campsite at golden hour";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-camping-batteries-for-laptops-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Anker Laptop Power Bank",
    "price": "$119.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31BN5UBXRJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DCBB2YTR?tag=rvgearlab-20",
    "description": "The Anker 25,000mAh bank lists 165W total output with three 100W USB-C ports, two built-in USB-C cables and a USB-A port. One cable extends up to 2.3 feet and is rated for 20,000 retractions, and the bank can charge four devices at once.\n\nAgainst the INIU and Baseus, it is the only one with three 100W ports and built-in cables. That makes it the pick for charging two laptops and a phone together.\n\nIt suits campers who share a bank between a couple of laptops and a tablet. Built-in cables mean fewer things to forget.",
    "specs": [
      "25,000mAh, 165W total",
      "Three 100W USB-C ports",
      "Two built-in USB-C cables"
    ],
    "pros": [
      "Three 100W ports charge several laptops",
      "Two built-in cables for travel",
      "Charges four devices at once",
      "Largest capacity of the banks"
    ],
    "cons": [
      "Highest price here",
      "Total output is shared between ports"
    ],
    "bestFor": "Multi-laptop charging",
    "take": "Best when two laptops and a phone share one bank, cables included.",
    "catch": "Total output is shared, so three laptops only run if the load stays within 165W."
  },
  {
    "id": "best-camping-batteries-for-laptops-2",
    "rank": 2,
    "badge": "Best Compact",
    "name": "INIU Laptop Power Bank",
    "price": "$66.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41pvsOQmE5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJ8L7HVH?tag=rvgearlab-20",
    "description": "The INIU delivers 100W from a 25000mAh pack that the listing calls airline approved and about 30 percent smaller than a soda can. A 30 minute charge takes a 14 inch MacBook Pro from 20 to 72 percent, and a 0.4 ft 100W USB-C cable is included.\n\nCompared with the Baseus, it holds more capacity at a lower price. The detachable cable avoids the breakage risk of a built-in one.\n\nIt suits travelers and campers who want one laptop charged fast from a bank that flies. The listing also names Steam Deck, ROG Ally and Legion Go.",
    "specs": [
      "25000mAh, 100W output",
      "30 min: MacBook 20 to 72%",
      "0.4 ft 100W cable included"
    ],
    "pros": [
      "25000mAh in a compact pack",
      "100W cable included",
      "Airline approved per the listing",
      "Lower price than the Baseus"
    ],
    "cons": [
      "Cable is only 0.4 ft long",
      "Battery is a fixed 25000mAh"
    ],
    "bestFor": "One laptop, fast, and flights",
    "take": "A compact 100W bank with a big cell and a cable in the box.",
    "catch": "The short cable means the bank sits next to the laptop."
  },
  {
    "id": "best-camping-batteries-for-laptops-3",
    "rank": 3,
    "badge": "Best Slim",
    "name": "Baseus Laptop Portable Charger 100W 20000mAh",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4134h1XpaKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DK8V9LSV?tag=rvgearlab-20",
    "description": "The Baseus lists 100W PD fast charging from a 20000mAh cell with two USB-C and two USB-A outputs and a real-time power display. It charges a MacBook Pro to 50 percent in 30 minutes, ships with a 100W cable and carries a 24 month warranty.\n\nAgainst the INIU, it adds a power display and a long warranty. The slim blade shape slides into a briefcase.\n\nIt suits campers and commuters who want a thin bank and a live readout. UL and IEC protection are named.",
    "specs": [
      "100W PD, 20000mAh",
      "2 USB-C, 2 USB-A, display",
      "100W cable, 24-month warranty"
    ],
    "pros": [
      "100W output with headroom",
      "100W cable included",
      "Real-time power display",
      "24 month warranty"
    ],
    "cons": [
      "Priciest 20000mAh bank on the list",
      "Capacity is 20000mAh, not larger"
    ],
    "bestFor": "Slim bank with a display",
    "take": "A slim 100W bank with a power display and warranty.",
    "catch": "Capacity is smaller than the Anker and INIU."
  },
  {
    "id": "best-camping-batteries-for-laptops-4",
    "rank": 4,
    "badge": "Best AC Outlet Bank",
    "name": "EnginStar Power Bank with AC Outlet 150W 110V Laptop Power Bank",
    "price": "$85.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41cNgC9VMoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQNYQ8X9?tag=rvgearlab-20",
    "description": "The EnginStar is a 42000mAh, 155Wh bank with one 110V AC outlet rated 150W, two DC sockets and USB ports for up to 6 devices. The listing says it charges a laptop up to 2.5 times and recharges by wall, car or a 12 to 25V solar panel.\n\nCompared with the USB-C banks, it has a real AC outlet, so a laptop charger or a small appliance plugs straight in. A 1000 cycle rating is listed.\n\nIt suits campers who want AC for the laptop's own charger and have a car or solar to refill it. It is a step toward a small power station.",
    "specs": [
      "42000mAh, 155Wh, 150W AC",
      "6 devices at once",
      "Solar, car or wall charging"
    ],
    "pros": [
      "AC outlet for laptop chargers",
      "Large 155Wh capacity",
      "Three ways to recharge",
      "1000 cycle rating listed"
    ],
    "cons": [
      "AC output limited to 150W",
      "155Wh is over the airline carry-on limit"
    ],
    "bestFor": "AC laptop charging at camp",
    "take": "A bank with an AC outlet and three ways to recharge.",
    "catch": "The 150W AC limit rules out high-wattage laptop chargers."
  },
  {
    "id": "best-camping-batteries-for-laptops-5",
    "rank": 5,
    "badge": "Best Camp Station",
    "name": "MARBERO 200W Portable Power Station 148Wh Camping Solar Generator Laptop Power Bank with AC Outlet 110V",
    "price": "$94.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41H27zmeiLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B8HMDRYZ?tag=rvgearlab-20",
    "description": "Inside the MARBERO M822 sits a 148Wh cell feeding a 110V inverter that is rated 200W with a 270W ceiling. Quick-charge QC3.0 sockets, extra USB-A outlets and a PD USB-C jack surround it, and a pair of LED flashlights double as a lantern.\n\nCompared with the EnginStar, it offers more AC headroom and built-in lights. It charges from a wall or car.\n\nIt suits campers who want light and laptop power in one box. Surge headroom of 270W helps with chargers.",
    "specs": [
      "148Wh, 200W AC (270W max)",
      "Two LED lanterns",
      "PD USB-C, QC3.0 ports"
    ],
    "pros": [
      "270W surge headroom",
      "Two LED flashlights built in",
      "PD USB-C and QC3.0 ports",
      "Charges by wall or car"
    ],
    "cons": [
      "Recharge takes about 7 hours",
      "No solar input is named"
    ],
    "bestFor": "Laptop plus camp light",
    "take": "A camp-friendly station with built-in lights.",
    "catch": "Plan on a long wall recharge."
  },
  {
    "id": "best-camping-batteries-for-laptops-6",
    "rank": 6,
    "badge": "Best Long Life",
    "name": "Daran Portable Power Station 89.6Wh LiFePO4 Battery 100W",
    "price": "$75.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51RqhJSR3sL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQT5G1ZR?tag=rvgearlab-20",
    "description": "The DaranEner is a small LiFePO4 power station with 89.6Wh, a 100W AC output (200W peak), two AC sockets, 7 output ports and four charging methods. It weighs 2.54 lb and charges from 0 to 80 percent in about 1.5 hours.\n\nAgainst the MARBERO, it uses LiFePO4 for a 3500 plus cycle rating and fanless operation. Two AC sockets let a laptop and a phone charger plug in.\n\nIt suits campers who want a long-life mini station that behaves like a bank. At under 100Wh it is airline friendly.",
    "specs": [
      "89.6Wh LiFePO4, 100W AC",
      "2 AC sockets, 7 outputs",
      "3500 plus cycle rating"
    ],
    "pros": [
      "Two AC sockets for chargers",
      "Silent, fanless operation",
      "LiFePO4 lasts 3500 plus cycles",
      "Four ways to recharge"
    ],
    "cons": [
      "2.54 lb is heavier than a bank",
      "Small capacity for long days"
    ],
    "bestFor": "Long-life mini station",
    "take": "A mini station that behaves like an AC bank, with a long-life battery.",
    "catch": "At 89.6Wh it is small for a full workday."
  }
];

export const howWeEvaluated = [
  {
    "title": "Watt-hours",
    "description": "Stated capacity was compared, since watt-hours decide how many laptop charges you get."
  },
  {
    "title": "USB-C PD wattage",
    "description": "Port wattage was matched to typical laptop chargers."
  },
  {
    "title": "AC outlet",
    "description": "Banks and stations with AC outlets were compared with USB-C only banks."
  },
  {
    "title": "Size and flight rules",
    "description": "Weight and airline limits were noted."
  },
  {
    "title": "Cables and extras",
    "description": "Built-in cables and displays were noted."
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
    "subheading": "By Laptop Charger",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Two laptops at once",
          "Anker 25K 165W Laptop Bank",
          "Three 100W ports."
        ],
        [
          "One 100W laptop",
          "INIU 25000mAh 100W",
          "100W with cable included."
        ],
        [
          "Slim bag and live readout",
          "Baseus 100W Blade",
          "Power display and 24 month warranty."
        ],
        [
          "Laptop with its own AC brick",
          "EnginStar 155Wh AC Bank",
          "150W AC outlet."
        ],
        [
          "Camp light and laptop",
          "MARBERO M822 148Wh",
          "Two LED lights, 200W AC."
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
          "$50 to $70",
          "Baseus 100W Blade or INIU 25000mAh 100W"
        ],
        [
          "$70 to $90",
          "DaranEner 89.6Wh Station or EnginStar 155Wh AC Bank"
        ],
        [
          "$90 to $120",
          "MARBERO M822 148Wh or Anker 25K 165W Laptop Bank"
        ]
      ]
    }
  },
  {
    "subheading": "USB-C Bank vs AC Station",
    "cards": [
      {
        "label": "USB-C bank",
        "text": "A PD bank is light and efficient. The Anker 25K 165W Laptop Bank, INIU 25000mAh 100W and Baseus 100W Blade are this type."
      },
      {
        "label": "AC station",
        "text": "An AC unit runs any charger and small appliances. The EnginStar 155Wh AC Bank, MARBERO M822 148Wh and DaranEner 89.6Wh Station are this type."
      }
    ],
    "note": "Most laptop owners should pick the INIU 25000mAh 100W unless the laptop needs AC."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lower price",
          "INIU 25000mAh 100W"
        ],
        [
          "Premium multi-port",
          "Anker 25K 165W Laptop Bank"
        ],
        [
          "Long-life battery",
          "DaranEner 89.6Wh Station"
        ]
      ]
    }
  },
  {
    "subheading": "Remote Work From Camp",
    "cards": [
      {
        "label": "Look for",
        "text": "A PD output that matches your charger and enough Wh for a work session."
      },
      {
        "label": "In this comparison",
        "text": "The INIU 25000mAh 100W lists a MacBook charging figure, and the Anker 25K 165W Laptop Bank can run two laptops."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Anker 25K 165W Laptop Bank for several laptops."
      },
      {
        "label": "Save if",
        "text": "Save with the INIU 25000mAh 100W for one fast-charging laptop."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match PD wattage",
    "explanation": "Laptop chargers range from about 45W to 140W. A bank must output at least your charger's wattage to charge at full speed. Check the label on your charger."
  },
  {
    "criterion": "Watt-hours for charges",
    "explanation": "A laptop battery holds roughly 40 to 70Wh. A 90Wh bank gives roughly one charge after losses. Divide the bank's Wh by your laptop's Wh."
  },
  {
    "criterion": "Airline limits",
    "explanation": "Airlines generally limit spare batteries to about 100Wh in carry-on bags. A 155Wh unit exceeds that. Check before flying."
  },
  {
    "criterion": "AC versus USB-C",
    "explanation": "USB-C PD is efficient, while AC inverters waste power. If your laptop takes USB-C, a PD bank is better. AC helps for non-USB-C laptops."
  },
  {
    "criterion": "Pass-through and heat",
    "explanation": "Charging a bank while using it generates heat. Keep it ventilated. Avoid hot cars."
  }
];

export const faq = [
  {
    "q": "How many laptop charges does a camping battery give?",
    "a": "Divide the bank's watt-hours by your laptop's battery, then subtract losses. The EnginStar 155Wh AC Bank lists up to 2.5 laptop charges. Check your own laptop's Wh."
  },
  {
    "q": "What is the common mistake?",
    "a": "Buying a bank with less PD wattage than the laptop charger. Check the charger label. A 65W bank cannot fast charge a 100W laptop."
  },
  {
    "q": "Is the Anker worth it over the INIU?",
    "a": "For multiple devices, yes. The Anker 25K 165W Laptop Bank has three 100W ports. The INIU 25000mAh 100W costs less."
  },
  {
    "q": "How do I charge a laptop from a bank?",
    "a": "Use a USB-C PD cable rated for the wattage. Plug into the bank's top port. Watch the readout if present."
  },
  {
    "q": "How do I care for the bank?",
    "a": "Charge it partly and store it cool. Avoid leaving it in a hot car. Recharge it before each trip."
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
