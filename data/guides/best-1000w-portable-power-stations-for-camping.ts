export const guideSlug = "best-1000w-portable-power-stations-for-camping";
export const guideTitle = "3 Best 1000w Portable Power Stations in 2026";
export const metaTitle = "Best 1000w Portable Power Stations in 2026";
export const metaDescription = "Best 1000W portable power stations compared on 1kWh capacity, AC output, recharge speed and weight for campers who run coolers, fans and appliances.";
export const mainKeyword = "best 1000w portable power stations";
export const introParagraphs = [
  "A 1000W power station with about 1kWh of battery can run a mini fridge, a coffee maker and a laptop in the same weekend. The choices come down to recharge speed, weight and how much output headroom you want beyond 1000W.",
  "Three 1kWh stations are compared here: a 25-pound BLUETTI rated at 1800W, a LiFePO4 STARYLINE and a lighter 999Wh GRECELL. Only three genuine fits made the cut, since several other listings repeat identical specs under different names."
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
    "id": "best-1000w-portable-power-stations-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "BLUETTI Elite 100 V2 Portable Power Station for Camping 1024Wh 1800W",
    "price": "$489.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RMFsLYB-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F42CSQWG?tag=rvgearlab-20",
    "description": "The BLUETTI Elite 100 V2 has 1,024Wh, 1,800W rated AC output and 2,700W in Power Lifting mode, with a 10ms UPS. It reaches 80% in roughly 45 minutes through 1,200W TurboBoost AC charging and weighs 25 pounds.\n\nIt is the heaviest of the four yet the most powerful, with 800W more output than the 1000W units. A silent mode runs at 30dB and the BLUETTI app offers Wi-Fi and Bluetooth monitoring.\n\nIt suits campers who want headroom for a kettle-class appliance or an air fryer. It also works as a desk UPS at home.",
    "specs": [
      "1,024Wh, 1,800W rated",
      "2,700W Power Lifting mode",
      "80% in 45 minutes, 25 lb"
    ],
    "pros": [
      "1,800W output covers heavy loads",
      "45 minute recharge to 80%",
      "10ms UPS and 30dB silent mode",
      "App control with OTA updates"
    ],
    "cons": [
      "Highest price of the four",
      "25 lb is a two-hand carry"
    ],
    "bestFor": "Heavy loads and fast refills",
    "take": "The powerhouse for campers who want headroom beyond 1000W.",
    "catch": "Weight and price are the cost of the extra output."
  },
  {
    "id": "best-1000w-portable-power-stations-2",
    "rank": 2,
    "badge": "Best LiFePO4 Value",
    "name": "STARYLINE 1000W Portable Power Station 1024Wh LiFePO4 for Outdoor & Home",
    "price": "$349.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41D55awBh3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVJKMV8J?tag=rvgearlab-20",
    "description": "The STARYLINE 1000W combines 1,024Wh of automotive-grade LiFePO4 cells with a 1000W output, two 110V AC outlets, a 60W PD USB-C port and two USB-A ports. A 6-layer BMS and 3,000 or more cycles are listed.\n\nIt is the only pick that names itself Starlink compatible and it takes up to 300W of solar input. At 27.73 pounds it is heavier than the 17-pound GRECELL.\n\nIt suits campers who want a LiFePO4 pack for outage backup and weekends. The listing says it powers routers, lights and mini fridges for two to three days.",
    "specs": [
      "1,024Wh LiFePO4, 1000W",
      "Starlink compatible, 300W solar",
      "6-layer BMS, 3,000+ cycles"
    ],
    "pros": [
      "Named LiFePO4 chemistry",
      "300W solar input",
      "Starlink compatible and low interference",
      "Three color choices"
    ],
    "cons": [
      "27.73 lb is heavy",
      "Only one 60W USB-C port"
    ],
    "bestFor": "Outage backup, weekends",
    "take": "A LiFePO4 option aimed at both camping and home backup.",
    "catch": "At nearly 28 pounds it suits a car trunk, not a trail."
  },
  {
    "id": "best-1000w-portable-power-stations-3",
    "rank": 3,
    "badge": "Best Value 1kWh",
    "name": "GRECELL 999Wh Portable Power Station 1000W for Outdoor & Home Backup",
    "price": "$299.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41kdaoQl9LL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GCF5F3ZR?tag=rvgearlab-20",
    "description": "The GRECELL 999Wh weighs 17 pounds and delivers 1000W continuous with a 2000W peak from a LiFePO4 battery. It has two 110V AC outlets, a 60W PD USB-C port, three 18W QC 3.0 USB-A ports and a 10W wireless pad.\n\nIt is 8 pounds lighter than the BLUETTI Elite 100 V2 and nearly 11 pounds lighter than the STARYLINE. The listing names triple MPPT charging with solar input up to 800W and a 2,000-cycle pack.\n\nIt suits campers who carry the box from the car to the site every trip. The listing names LiFePO4 cells and an upgraded battery management system.",
    "specs": [
      "999Wh LiFePO4, 1000W / 2000W",
      "17 lb, 10W wireless pad",
      "MPPT solar, 2,000+ cycles"
    ],
    "pros": [
      "17 lb is the lightest here",
      "Wireless charging pad",
      "MPPT solar input",
      "10 ports for devices"
    ],
    "cons": [
      "Shorter 2,000 cycle rating",
      "Lower output than BLUETTI"
    ],
    "bestFor": "Carry-in car camping",
    "take": "A light 1kWh box for people who move it a lot.",
    "catch": "Cycle life is shorter than the 3,000 cycles the STARYLINE lists."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Watt hours were compared across the 999Wh to 1,024Wh range."
  },
  {
    "title": "Output",
    "description": "Continuous, peak and Power Lifting figures were checked."
  },
  {
    "title": "Recharge",
    "description": "Stated AC and solar speeds were compared."
  },
  {
    "title": "Weight",
    "description": "Weights from 17 to 27.73 lb were compared."
  },
  {
    "title": "Chemistry",
    "description": "Named cell type and cycle counts were checked."
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
    "subheading": "By Appliance",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Air fryer or kettle-class loads",
          "BLUETTI Elite 100 V2",
          "1,800W rated output."
        ],
        [
          "Router, lights and fridge for outages",
          "STARYLINE 1000W",
          "LiFePO4 with Starlink compatibility."
        ],
        [
          "Frequent carry from car to camp",
          "GRECELL 999Wh",
          "17 lb with a wireless pad."
        ],
        [
          "Few weekends a year, lowest spend",
          "GRECELL 999Wh",
          "Lowest price and 17 lb."
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
          "$290 to $300",
          "GRECELL 999Wh"
        ],
        [
          "$340 to $350",
          "STARYLINE 1000W"
        ],
        [
          "$480 to $490",
          "BLUETTI Elite 100 V2"
        ]
      ]
    }
  },
  {
    "subheading": "Fast Recharge vs Light Weight",
    "cards": [
      {
        "label": "Fast recharge",
        "text": "The BLUETTI Elite 100 V2 refills to 80% in about 45 minutes, which suits repeated top-ups."
      },
      {
        "label": "Light weight",
        "text": "The GRECELL 999Wh weighs 17 pounds, easier to lift than the 25 pound BLUETTI Elite 100 V2 or the 27.73 pound STARYLINE 1000W."
      }
    ],
    "note": "Most campers should lean toward the GRECELL 999Wh unless fast refills matter."
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
          "Lowest spend",
          "GRECELL 999Wh"
        ],
        [
          "Mid-range LiFePO4",
          "STARYLINE 1000W"
        ],
        [
          "Pay for output and speed",
          "BLUETTI Elite 100 V2"
        ]
      ]
    }
  },
  {
    "subheading": "For Outage Backup Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A UPS switchover time, named chemistry and a 1kWh pack."
      },
      {
        "label": "In this comparison",
        "text": "The BLUETTI Elite 100 V2 lists a 10ms UPS, and the STARYLINE 1000W names LiFePO4 with Starlink compatibility."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BLUETTI Elite 100 V2 if you run heavier appliances or want the fastest refill. The STARYLINE 1000W is the pick for LiFePO4 and 300W solar input."
      },
      {
        "label": "Save if",
        "text": "Save with the GRECELL 999Wh if you only need steady 1000W for weekends. It is also the lightest of the three."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Output headroom",
    "explanation": "A 1000W station runs a coffee maker or a mini fridge but not a 1,500W kettle. The BLUETTI Elite 100 V2 rated 1,800W handles more. Check the continuous figure, not the peak."
  },
  {
    "criterion": "Watt hours as runtime",
    "explanation": "A 1kWh station runs a 60W fridge for about 12 hours after inverter loss. Heavier loads drain it much faster. Divide Wh by watts, then subtract about 20%."
  },
  {
    "criterion": "Recharge speed",
    "explanation": "A 45 minute refill to 80% changes how a trip works compared with a 7 hour overnight charge. Solar input wattage matters for multi-day camps. Look for the minutes to 80% and the solar maximum."
  },
  {
    "criterion": "Weight",
    "explanation": "Between 17 and 28 pounds, the lighter units are easier to lift from a trunk. The listing weight tells you more than the marketing. Check the pounds."
  },
  {
    "criterion": "Chemistry and cycles",
    "explanation": "LiFePO4 is the better choice for long life and heat tolerance, but not every listing names it. Compare cycles: 2,000 against 3,000 or more. Look for the chemistry in the description."
  }
];

export const faq = [
  {
    "q": "What can a 1000W station run?",
    "a": "A mini fridge, coffee maker, laptop, TV and fans fit. Hair dryers and kettles can exceed 1000W. Check each device's label."
  },
  {
    "q": "How long will 1kWh last?",
    "a": "A 60W fridge runs about 12 hours after losses. A 300W load lasts about three hours. Heavy loads drain it quickly."
  },
  {
    "q": "Are these suitable for a CPAP?",
    "a": "Confirm compatibility with the CPAP maker before relying on one. Do not rely on a runtime promise. Heated humidifiers raise the draw."
  },
  {
    "q": "How do I recharge on solar?",
    "a": "Match the panel's voltage and connector to the unit's solar input. The STARYLINE supports up to 300W. Check the manual for limits."
  },
  {
    "q": "What is Power Lifting mode?",
    "a": "BLUETTI uses it to deliver up to 2,700W by lowering voltage for resistive loads. It suits heaters and kettles but not all devices. Read the manual before using it."
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
