export const guideSlug = "best-1000wh-portable-power-stations-for-camping";
export const guideTitle = "2 Best 1000Wh Portable Power Stations in 2026";
export const metaTitle = "Best 1000Wh Portable Power Stations in 2026";
export const metaDescription = "Best 1000Wh portable power stations compared on capacity, weight, ports, solar input and battery chemistry for camping and outage backup.";
export const mainKeyword = "best 1000wh portable power stations";
export const introParagraphs = [
  "A 1000Wh power station is a weekend-camp battery: it can run a 12V fridge for a day or more, recharge phones and laptops many times, or keep a router and lights going through an outage. The number to watch is usable watt-hours against your daily use, not the marketing 1000W label alone.",
  "Only two stations state a capacity right at 1000Wh in a listing, so this guide is short. They were compared on stated capacity, weight, port layout, solar input and battery protection."
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
    "id": "best-1000wh-portable-power-stations-1",
    "rank": 1,
    "badge": "Best Portable",
    "name": "1000W Portable Power Station 999Wh",
    "price": "$379.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bHa8I86iL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GD12Z4S3?tag=rvgearlab-amz-20",
    "description": "The GRECELL packs 999Wh and 1000W continuous pure sine AC output (2000W peak) into a 17 pound body. It has 10 ports, including two 120V sockets and a 60W USB-C PD port, and its automotive-grade battery is listed at 2000 or more cycles with a 10-year lifespan.\n\nIt is 10 pounds lighter than the STARYLINE 1000W, which makes it the carry-anywhere choice. Triple recharge via wall outlet, solar with MPPT or a 12V car port keeps it flexible.\n\nIt suits campers who move their power station between car, tent and cabin. The 60W USB-C port charges a MacBook Pro or flagship phone.",
    "specs": [
      "999Wh, 1000W pure sine",
      "17 lb, 10 ports",
      "2000+ cycles, MPPT solar"
    ],
    "pros": [
      "Only 17 pounds for 999Wh",
      "10 ports including 60W USB-C PD",
      "Solar, wall and car charging",
      "BMS protection and 10-year lifespan"
    ],
    "cons": [
      "Fewer cycles than LiFePO4 rivals",
      "Chemistry is not named"
    ],
    "bestFor": "Light carry for weekend camps",
    "take": "A very portable 1000Wh that fits a pack-and-go routine. The lightest way to get this much capacity.",
    "catch": "The listing names an automotive-grade battery, not LiFePO4."
  },
  {
    "id": "best-1000wh-portable-power-stations-2",
    "rank": 2,
    "badge": "Best LiFePO4 Pick",
    "name": "STARYLINE 1000W Portable Power Station 1024Wh LiFePO4 for Outdoor & Home",
    "price": "$349.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41D55awBh3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVJKMV8J?tag=rvgearlab-amz-20",
    "description": "The STARYLINE 1000W stores 1,024Wh in automotive-grade LiFePO4 cells and outputs 1000W through a pair of 110V sockets. Phones and laptops plug into its USB-C PD and USB-A ports, and a 6-layer BMS and 3000-plus cycles are listed.\n\nIt names LiFePO4 chemistry, which GRECELL's listing does not, and it states Starlink compatibility with low interference. It costs less than the GRECELL 999Wh and comes in three colors.\n\nIt suits campers who want a long-life pack for outage backup and weekends, powering routers, lights and mini fridges. The listing says that load can last two to three days.",
    "specs": [
      "1,024Wh LiFePO4, 1000W",
      "Starlink compatible, 300W solar",
      "6-layer BMS, 3,000+ cycles"
    ],
    "pros": [
      "Named LiFePO4 chemistry",
      "Up to 300W solar input",
      "Starlink compatible and low interference",
      "Three color choices"
    ],
    "cons": [
      "27.73 pounds is heavy to carry",
      "Only one 60W USB-C port"
    ],
    "bestFor": "Outage backup and long-life use",
    "take": "A solid LiFePO4 option for long-term use at a lower price. Choose it for the cycle life.",
    "catch": "At nearly 28 pounds it suits a trunk, not a trail."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Compared the stated watt-hours and continuous output."
  },
  {
    "title": "Weight",
    "description": "Noted pounds for carry."
  },
  {
    "title": "Ports and solar",
    "description": "Looked at port counts and solar input."
  },
  {
    "title": "Battery protection",
    "description": "Checked chemistry, cycles and BMS."
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
    "subheading": "By Trip Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Frequent moves, trail to car",
          "GRECELL 999Wh",
          "17 pounds"
        ],
        [
          "Outage backup at home",
          "STARYLINE 1000W",
          "LiFePO4, 3000+ cycles"
        ],
        [
          "Laptop charging on a camp table",
          "GRECELL 999Wh",
          "10 ports with 60W USB-C"
        ],
        [
          "Starlink at a cabin",
          "STARYLINE 1000W",
          "Starlink compatible"
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
          "$340 to $350",
          "STARYLINE 1000W"
        ],
        [
          "$370 to $380",
          "GRECELL 999Wh"
        ]
      ]
    }
  },
  {
    "subheading": "Light vs long-life",
    "cards": [
      {
        "label": "Light",
        "text": "The GRECELL 999Wh weighs 17 pounds and charges many devices."
      },
      {
        "label": "Long-life",
        "text": "The STARYLINE 1000W names LiFePO4 and 3000 or more cycles."
      }
    ],
    "note": "Most campers should default to the STARYLINE 1000W for value, or the GRECELL 999Wh if weight is the limit."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest weight",
          "GRECELL 999Wh"
        ],
        [
          "Lowest price",
          "STARYLINE 1000W"
        ],
        [
          "Named LiFePO4",
          "STARYLINE 1000W"
        ],
        [
          "Most ports",
          "GRECELL 999Wh"
        ]
      ]
    }
  },
  {
    "subheading": "For Camp Fridge and Lights Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Capacity near 1000Wh and pure sine output"
      },
      {
        "label": "In this comparison",
        "text": "The GRECELL 999Wh and STARYLINE 1000W both list 1000W of AC output plus USB ports for phones."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the GRECELL 999Wh if weight and a 10-port layout matter."
      },
      {
        "label": "Save if",
        "text": "Save with the STARYLINE 1000W if you want LiFePO4 and a lower price and can carry the weight."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watt-hours and real runtime",
    "explanation": "Capacity in watt-hours is the fuel tank, and the loads in watts are the burn rate. A 1000Wh station running a 100W load lasts about 8 to 9 hours after inverter losses. Divide Wh by load watts and take about 85 percent, and check the listing for the stated Wh."
  },
  {
    "criterion": "Continuous versus peak output",
    "explanation": "A 1000W continuous rating means the AC outlets can sustain 1000 watts, while the 2000W peak covers a brief start surge. A kettle or microwave can exceed the continuous limit and trip the inverter. Check the ratings against your appliance labels."
  },
  {
    "criterion": "Battery chemistry and cycles",
    "explanation": "LiFePO4 cells usually give 3000 or more cycles and tolerate heat better, while other lithium types offer fewer. Cycle count matters if you plan to use it often. Look for the chemistry name and the cycle rating."
  },
  {
    "criterion": "Solar input limits",
    "explanation": "A 300W input means panels above that wattage will not charge faster. Match your panel to the station's input range, and check the voltage window. Check the listing for the maximum solar input."
  },
  {
    "criterion": "Weight and ports",
    "explanation": "A 17 pound unit is easy to carry, while 28 pounds suits a trunk. Count the ports you need, especially USB-C PD for laptops. Check the weight and port list."
  }
];

export const faq = [
  {
    "q": "How long will a 1000Wh power station run a fridge?",
    "a": "A 12V camping fridge often draws 40 to 60 watts when cycling, so 1000Wh can last a day or two. A full-size fridge uses far more."
  },
  {
    "q": "Can I run a microwave on it?",
    "a": "A 1000W continuous rating can run a small microwave only if its input is below that. Check the appliance label."
  },
  {
    "q": "Is LiFePO4 worth it over other lithium?",
    "a": "It lasts longer in cycles and handles heat better. It is a good choice for frequent use."
  },
  {
    "q": "How do I recharge it?",
    "a": "Use the wall outlet, a car 12V port or solar panels within its input range. Keep it ventilated while charging."
  },
  {
    "q": "How do I store it?",
    "a": "Keep it at partial charge in a cool, dry place and top it up every few months. Avoid hot cars."
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
