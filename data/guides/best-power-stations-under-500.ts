export const guideSlug = "best-power-stations-under-500";
export const guideTitle = "6 Best Power Stations Under 500 in 2026";
export const metaTitle = "Best Power Stations Under 500 in 2026";
export const metaDescription = "Best power stations under $500: six 500 to 1,056Wh portable power stations compared on capacity, AC output and cell life for camping and short outages.";
export const mainKeyword = "best power stations under 500";
export const introParagraphs = [
  "Five hundred dollars reaches both the 500Wh class and the first 1,000Wh stations, and the six picks here run from about $170 to $500. The big decision is whether you want a cheaper half-kilowatt-hour unit or a full 1,000Wh model that runs a fridge overnight.",
  "At the low end you get LiFePO4 cells and 500W AC at a fraction of the price, and at the cap you get 1,800W output and 45 minute charging. The notes explain what that jump is worth and which pick offers the best use of the money."
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
    "id": "best-power-stations-under-500-1",
    "rank": 1,
    "badge": "Best Value Under $500",
    "name": "Anker SOLIX C1000 Portable Power Station with Car Charging Cable",
    "price": "$469.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41DXVul+maL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C5C89QKZ?tag=rvgearlab-amz-20",
    "description": "Anker's SOLIX C1000 holds 1,056Wh in a LiFePO4 battery rated for 3,000 cycles with 1,800W AC output (2,400W with SurgePad) across 11 ports. It charges to 80 percent in 43 minutes and takes up to 600W of solar input to refill in about 1.8 hours.\n\nAt about $500 it is the most expensive pick and the one that handles a fridge, a coffee maker and a laptop together. The EcoFlow Delta 3 Classic costs $1 less with a similar capacity, and this one adds a faster solar input.\n\nCampers with an RV or a large tent who want a full night of fridge power will like it. It also suits short home outages.",
    "specs": [
      "1,056Wh LiFePO4, 3,000 cycles",
      "1,800W AC (2,400W SurgePad)",
      "43 minute 80% charge, 600W solar"
    ],
    "pros": [
      "1,056Wh capacity",
      "1,800W AC output",
      "Up to 600W of solar input",
      "43 minute 80 percent recharge"
    ],
    "cons": [
      "Costs the most of the six",
      "Heavy for a short carry"
    ],
    "bestFor": "Fridge, coffee maker and laptop together",
    "take": "The best mix of capacity, output and charge speed under $500.",
    "catch": "Do not run a space heater from it."
  },
  {
    "id": "best-power-stations-under-500-2",
    "rank": 2,
    "badge": "Best Fast-Charge Pick",
    "name": "EF ECOFLOW Portable Power Station Delta 3 Classic",
    "price": "$498.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31F8BqUk3HL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FQVC4RF5?tag=rvgearlab-amz-20",
    "description": "EcoFlow's Delta 3 Classic is a 1,024Wh LiFePO4 station with 1800W AC output (3600W surge), a 100W USB-C port and a charge from 0 to 80 percent in 45 minutes. Its UPS switchover is under 10ms and it can expand to 2600W with X-Boost.\n\nAt about $499 it sits at the cap with the Anker SOLIX C1000 and offers a UPS function the Anker does not list. The two are close in capacity and AC output.\n\nCampers who also want a backup for a router, a PC or a medical device will like the UPS. It suits home backup as well.",
    "specs": [
      "1,024Wh LiFePO4, 1,800W AC",
      "3,600W surge, X-Boost",
      "0 to 80% in 45 minutes, UPS under 10ms"
    ],
    "pros": [
      "1,800W AC with 3,600W surge",
      "0 to 80 percent in 45 minutes",
      "UPS under 10ms",
      "LiFePO4 for long cell life"
    ],
    "cons": [
      "Price near the cap",
      "No solar panel included"
    ],
    "bestFor": "Home backup and camping",
    "take": "A strong all-round station with a UPS function.",
    "catch": "It is as heavy as it looks."
  },
  {
    "id": "best-power-stations-under-500-3",
    "rank": 3,
    "badge": "Best Mid-Size Brand",
    "name": "EF ECOFLOW Portable Power Station RIVER 2 Pro",
    "price": "$368.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31fGKfidOAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BVLPGS79?tag=rvgearlab-amz-20",
    "description": "EcoFlow's River 2 Pro holds 768Wh with 800W output and X-Boost to 1600W, 11 outlets and a LiFePO4 battery rated for more than 3,000 cycles. It recharges from an AC outlet in 70 minutes and up to 220W of solar fills it in about 3.5 hours.\n\nAt about $369 it costs $130 less than the Delta 3 Classic and holds 256Wh less. It is the lighter and cheaper way to a brand-name 768Wh station.\n\nCampers who want a mid-size station for a fridge and lights will like it. It is easier to carry than the 1,000Wh units.",
    "specs": [
      "768Wh LiFePO4, 800W AC",
      "X-Boost to 1,600W",
      "70 minute AC recharge"
    ],
    "pros": [
      "800W AC with X-Boost to 1,600W",
      "11 outlets",
      "70 minute AC recharge",
      "LiFePO4 cells, 3,000+ cycles"
    ],
    "cons": [
      "Smaller than the 1,000Wh picks",
      "Costs $370"
    ],
    "bestFor": "Mid-size camping power",
    "take": "A mid-size EcoFlow at a lower price.",
    "catch": "It holds 256Wh less than the Delta."
  },
  {
    "id": "best-power-stations-under-500-4",
    "rank": 4,
    "badge": "Cheapest 1,000Wh",
    "name": "GRECELL 999Wh Solar Generator 1000W Portable Power Station for Outdoor",
    "price": "$319.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41W9wae+RPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BBGB594W?tag=rvgearlab-amz-20",
    "description": "GRECELL offers a 999Wh battery with 1,000W pure sine wave AC output (2,000W surge), two AC sockets, three USB QC ports, a USB-C PD 60W port, two DC ports, a car port and a wireless charging pad, 10 outputs in all. A built-in MPPT controller supports solar recharge.\n\nAt about $320 it costs about $180 less than the Anker and delivers 1,000W instead of 1,800W. The brand is less established, and the price per watt-hour is the lowest.\n\nCampers who want 1,000Wh for a fridge and lights and have a tight budget will like it. It also suits a home backup.",
    "specs": [
      "999Wh, 1,000W (2,000W surge)",
      "10 outputs, wireless pad",
      "MPPT solar controller"
    ],
    "pros": [
      "1,000Wh at a low price",
      "Ten outputs including wireless",
      "Pure sine wave AC",
      "MPPT for solar"
    ],
    "cons": [
      "Newer brand than the EcoFlow and Anker",
      "Lower 1,000W AC output"
    ],
    "bestFor": "Budget 1,000Wh buyers",
    "take": "The cheapest route to a full kilowatt-hour.",
    "catch": "Compare its 1,000W output with your appliance watts first."
  },
  {
    "id": "best-power-stations-under-500-5",
    "rank": 5,
    "badge": "Best Mid-Range 500W",
    "name": "EBL Portable Power Station 500w",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41P2dHAe-SL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DPFL1CH3?tag=rvgearlab-amz-20",
    "description": "EBL packs 519Wh (140,400mAh) into a 14.1 lb station with two 120V pure sine wave AC outlets rated 500W (1,000W peak), three USB-A QC ports and a 10-port layout. It recharges in 6 to 9 hours from a 100W solar panel and 7 to 8 hours from a car outlet.\n\nAt about $200 it costs $30 more than the ANTPO and uses standard lithium. The ANTPO uses LiFePO4 and charges faster.\n\nCampers who want a 500W station with plenty of ports will like it. It suits car camping and small appliances.",
    "specs": [
      "519Wh, 500W (1,000W peak)",
      "Two pure sine AC, 10 ports",
      "14.1 lb"
    ],
    "pros": [
      "519Wh at about $200",
      "Two 120V pure sine AC outlets",
      "Ten output ports",
      "Built-in BMS"
    ],
    "cons": [
      "Not LiFePO4",
      "Slower recharge than the ANTPO"
    ],
    "bestFor": "Car camping and small appliances",
    "take": "A mid-range 500W station with many ports.",
    "catch": "Choose LiFePO4 if you will use it often."
  },
  {
    "id": "best-power-stations-under-500-6",
    "rank": 6,
    "badge": "Best Budget LiFePO4",
    "name": "ANTPO 500W Portable Power Station",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413JL-PoS+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HBVJFZBW?tag=rvgearlab-amz-20",
    "description": "ANTPO is a 512Wh LiFePO4 station with a 500W (1,000W surge) pure sine wave inverter, PD 60W USB-C, QC3.0 and car outlets. The cells are rated for 3,500 or more cycles, and an AC charge from 0 to 80 percent takes about an hour from a 500W wall input.\n\nNear $170, the ANTPO costs less than any other pick and is the only 500Wh class unit with LiFePO4 at this price. A retro oil-can design makes it stand out at camp.\n\nWeekend campers and van owners who want a long-life 500W station will like it. It powers a laptop, lights and a mini fridge.",
    "specs": [
      "512Wh LiFePO4, 3,500+ cycles",
      "500W (1,000W surge) pure sine",
      "0-80% in 1 hour"
    ],
    "pros": [
      "LiFePO4 at the lowest price",
      "500W pure sine wave AC",
      "1 hour charge to 80 percent",
      "PD 60W USB-C"
    ],
    "cons": [
      "Smaller than the 1,000Wh units",
      "Oil-can styling is bulky"
    ],
    "bestFor": "Weekend campers and van owners",
    "take": "The cheapest long-life 500Wh station.",
    "catch": "It will not run a 1,000W appliance."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Capacities from 512Wh to 1,056Wh were compared against the appliances each could run."
  },
  {
    "title": "AC output",
    "description": "Continuous and surge watts from 500W to 1,800W were compared."
  },
  {
    "title": "Battery chemistry",
    "description": "LiFePO4 and standard lithium were compared on cycle life."
  },
  {
    "title": "Recharge speed",
    "description": "AC and solar recharge times were compared."
  },
  {
    "title": "Price per watt-hour",
    "description": "Prices were divided by capacity to find the best value."
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
    "subheading": "By what you plan to run",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Laptop, lights and mini fridge",
          "ANTPO 512Wh",
          "500W and LiFePO4 for about $170."
        ],
        [
          "500W with many ports",
          "EBL 519Wh",
          "Ten ports and 519Wh."
        ],
        [
          "Mid-size brand name",
          "EcoFlow River 2 Pro",
          "768Wh and 800W."
        ],
        [
          "A full kilowatt-hour on a budget",
          "GRECELL 999Wh",
          "999Wh for about $320."
        ],
        [
          "Fridge and coffee maker together",
          "Anker SOLIX C1000",
          "1,800W AC and 1,056Wh."
        ],
        [
          "Router and PC backup",
          "EcoFlow Delta 3 Classic",
          "UPS under 10ms."
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
          "$160 to $200",
          "ANTPO 512Wh or EBL 519Wh"
        ],
        [
          "$310 to $370",
          "GRECELL 999Wh or EcoFlow River 2 Pro"
        ],
        [
          "$490 to $500",
          "EcoFlow Delta 3 Classic or Anker SOLIX C1000"
        ]
      ]
    }
  },
  {
    "subheading": "500Wh vs 1,000Wh",
    "cards": [
      {
        "label": "500Wh",
        "text": "A 500Wh station weighs 14 to 15 lb and runs a laptop, lights and a mini fridge for a night. The ANTPO 512Wh and EBL 519Wh are in this class."
      },
      {
        "label": "1,000Wh",
        "text": "A 1,000Wh station runs a fridge for two nights and powers 1,000W or more of gear. The Anker SOLIX C1000, EcoFlow Delta 3 Classic and GRECELL 999Wh are in this class, with the EcoFlow River 2 Pro in between."
      }
    ],
    "note": "Most campers should buy the ANTPO 512Wh, and RV or outage users should buy the Anker SOLIX C1000."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Spend",
        "Recommended pick"
      ],
      "rows": [
        [
          "Around $170",
          "ANTPO 512Wh"
        ],
        [
          "Around $200",
          "EBL 519Wh"
        ],
        [
          "Around $320",
          "GRECELL 999Wh"
        ],
        [
          "Around $369",
          "EcoFlow River 2 Pro"
        ],
        [
          "Around $499",
          "EcoFlow Delta 3 Classic"
        ],
        [
          "Around $500",
          "Anker SOLIX C1000"
        ]
      ]
    }
  },
  {
    "subheading": "For an RV or van with a fridge specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for at least 700Wh, a 120V AC output of 800W or more and solar input of at least 200W."
      },
      {
        "label": "In this comparison",
        "text": "The EcoFlow River 2 Pro offers 768Wh and 220W solar, and the Anker SOLIX C1000 offers 1,056Wh and 600W solar."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a full 1,000Wh with high output, which is what the Anker SOLIX C1000 and EcoFlow Delta 3 Classic add at about $500. The jump from the ANTPO 512Wh is about $330."
      },
      {
        "label": "Save if",
        "text": "Save if you run laptops, lights and a mini fridge, since the ANTPO 512Wh at about $170 covers it with LiFePO4 cells."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Appliance watts and hours",
    "explanation": "A mini fridge draws about 50 to 100W while running, a CPAP 30 to 60W and a laptop 60W, so 1,000Wh runs them all for 8 to 12 hours. A 1,500W kettle drains it in under half an hour. Look at both watts and watt-hours and add your devices."
  },
  {
    "criterion": "Continuous vs surge",
    "explanation": "A 1,800W station runs a 1,500W coffee maker or a 1,200W microwave, while a 500W station cannot run either, even briefly. Surge watts only cover the short startup peak of motors. Look for the continuous rating in the title and match it to your highest-watt appliance with some headroom."
  },
  {
    "criterion": "LiFePO4 and cycles",
    "explanation": "LiFePO4 cells last 3,000 to 3,500 cycles, which is about 10 years of regular use, compared with 500 to 800 cycles for standard lithium-ion. That gap decides the cost per year if you take the station out every weekend. Look for LiFePO4 or LFP in the description, especially if you will use the station weekly, and treat unspecified chemistry as lithium-ion."
  },
  {
    "criterion": "Charge speed",
    "explanation": "A 500W AC input refills 512Wh in about an hour, while a 100W input needs 6 to 9 hours, which matters on a trip with a short stop. Fast charging is also useful before a storm. Look for the AC input watts and the time to 80 percent in the product details, and compare them with how you will recharge."
  },
  {
    "criterion": "Solar input",
    "explanation": "A 600W solar input refills 1,056Wh in about 1.8 hours of full sun, while a 100W input takes 6 to 9 hours. Check the maximum solar watts and the voltage range before buying a panel. Look for MPPT and the input limit in the specs."
  }
];

export const faq = [
  {
    "q": "How long will 1,000Wh run a fridge?",
    "a": "A fridge draws about 50 to 100W while running and cycles on and off, so 1,000Wh lasts 1 to 2 days. The Anker SOLIX C1000 holds 1,056Wh, which covers a weekend. A full-size household fridge draws more at startup, so check its label."
  },
  {
    "q": "Can I run a microwave on one of these?",
    "a": "A 1,000W microwave needs a station with 1,500W or more continuous, which means the Anker SOLIX C1000 or EcoFlow Delta 3 Classic. The 500W stations cannot run it. Check the microwave input watts on its label first."
  },
  {
    "q": "How do I size a solar panel?",
    "a": "Match the panel's voltage and watts to the station's solar input. The Anker SOLIX C1000 accepts up to 600W, and the EcoFlow River 2 Pro up to 220W. Charge time is capacity divided by watts."
  },
  {
    "q": "Are these safe indoors?",
    "a": "Battery power stations make no fumes, so you can use them indoors and in tents, unlike gas generators. Keep them dry and ventilated, and never cover the vents. Avoid leaving them in a hot car."
  },
  {
    "q": "How do I store a station for winter?",
    "a": "Charge it to 50 to 80 percent, store it in a cool dry place and top it up every three months. LiFePO4 units such as the ANTPO 512Wh tolerate storage better. Avoid temperatures below freezing during charging."
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
