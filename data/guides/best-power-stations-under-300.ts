export const guideSlug = "best-power-stations-under-300";
export const guideTitle = "6 Best Power Stations Under 300 in 2026";
export const metaTitle = "Best Power Stations Under 300 in 2026";
export const metaDescription = "Best power stations under $300: six 192 to 292Wh portable power stations compared on capacity, AC output and battery type for camping and car camping.";
export const mainKeyword = "best power stations under 300";
export const introParagraphs = [
  "Three hundred dollars gets you a proper 250 to 300Wh class power station, and the six picks here run from about $122 to $290. Outputs are 300 to 600 watts, and several use long-life LiFePO4 cells.",
  "At the low end you get lithium-ion cells and fewer ports, and at the cap you get brand-name build quality and fast charging. The notes explain what each step adds and which pick makes the most of the money."
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
    "id": "best-power-stations-under-300-1",
    "rank": 1,
    "badge": "Best Value Under $300",
    "name": "AFERIY Portable Power Station 800W Peak/400W Rated",
    "price": "$189.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RgJx852vL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7TFCBKT?tag=rvgearlab-20",
    "description": "AFERIY's Nomad400 is a 256Wh LiFePO4 station with 400W rated (800W peak) AC output, a 100W USB-C PD port and a 12V car port, powering up to six devices at once. A bidirectional pure sine wave inverter supports up to 300W wall charging for a fast refill, and the cells are rated for more than 4,000 cycles.\n\nAt about $189 it holds more than the 192Wh Daran for the same price and adds a higher AC rating. The Jackery and BLUETTI cost $70 to $100 more and add brand support.\n\nWeekend campers who want LiFePO4 cells, strong AC output and a fast recharge will like it. It handles a laptop, lights and a small fan.",
    "specs": [
      "256Wh LiFePO4, 4,000+ cycles",
      "400W rated, 800W peak, pure sine",
      "100W USB-C PD, 300W wall charge"
    ],
    "pros": [
      "LiFePO4 rated for 4,000+ cycles",
      "400W continuous AC output",
      "300W wall charging refills it quickly",
      "100W USB-C for laptops"
    ],
    "cons": [
      "Lesser-known brand",
      "Weighs more than lithium-ion models"
    ],
    "bestFor": "Weekend camping and small appliances",
    "take": "The best mix of capacity, power and cell life under $300.",
    "catch": "Check that your gear stays under 400W."
  },
  {
    "id": "best-power-stations-under-300-2",
    "rank": 2,
    "badge": "Best Budget 300W",
    "name": "ENOFLO 300W Portable Power Station",
    "price": "$121.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Oo8ZguiRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BN38B5PS?tag=rvgearlab-20",
    "description": "ENOFLO is a 228Wh station with a 300W (600W surge) pure sine wave output through two 110V AC outlets, plus two DC ports, USB-A and USB-C. A built-in MPPT controller speeds recharging from a 30W or 60W solar panel, and a large rear LED lamp doubles as a camp light.\n\nAt about $122 it is the cheapest pick and runs CPAP-class devices and small fridges within its 300W limit. It uses lithium-ion cells, which wear out sooner than LiFePO4.\n\nBudget campers who want a 300W pure sine wave output will like it. It suits car camping and a small van.",
    "specs": [
      "228Wh, 300W (600W surge) pure sine",
      "Two AC, two DC, USB-A and USB-C",
      "MPPT solar controller, rear LED lamp"
    ],
    "pros": [
      "Pure sine wave AC at 300W",
      "MPPT controller speeds solar recharge",
      "Big LED lamp on the back",
      "Lowest price here"
    ],
    "cons": [
      "Lithium-ion cells wear faster",
      "Solar panel sold separately"
    ],
    "bestFor": "Budget car campers",
    "take": "A cheap 300W station with a built-in camp light.",
    "catch": "Plan on a few hundred cycles of life."
  },
  {
    "id": "best-power-stations-under-300-3",
    "rank": 3,
    "badge": "Most Capacity Under $150",
    "name": "Portable Power Station 300W",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41mlAIEyjVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HBQ26RYC?tag=rvgearlab-20",
    "description": "This unit offers a 296Wh battery with 300W continuous AC output on a pure sine wave inverter, a 100W USB-C port, a 12V 10A DC output and seven outputs in total. An MPPT controller supports solar and a 100W fast input charges it from a wall outlet.\n\nAt about $150 it gives more capacity than any pick under $190 and costs $28 more than the ENOFLO. A 360 degree camping light and a 20W flashlight with SOS are built in.\n\nCampers who want more watt-hours at a moderate price will like it. It runs a laptop, lights and a small cooler fan for a weekend.",
    "specs": [
      "296Wh, 300W pure sine",
      "100W USB-C, 12V 10A DC",
      "MPPT, 360 degree light, 20W flashlight"
    ],
    "pros": [
      "296Wh capacity at about $150",
      "100W USB-C for laptops",
      "360 degree camping light",
      "100W fast input and MPPT solar"
    ],
    "cons": [
      "Unbranded product",
      "300W limit"
    ],
    "bestFor": "Longer weekends with small gear",
    "take": "The most watt-hours for the money below $190.",
    "catch": "Support information is limited."
  },
  {
    "id": "best-power-stations-under-300-4",
    "rank": 4,
    "badge": "Best Lightweight LiFePO4",
    "name": "Daran 300W Portable Power Station",
    "price": "$189.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41afM-yvDTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GY8WY7LL?tag=rvgearlab-20",
    "description": "Daran's 192Wh station uses a LiFePO4 battery rated for 3,500 or more cycles, with two 300W (600W peak) AC outlets, two USB-C ports (60W PD), a USB-A, a car port and two DC5521 ports. It weighs 5.84 lb and charges 0 to 70 percent in 2.2 hours from a 90W AC adapter.\n\nAt about $190 it costs the same as the AFERIY with less capacity, and its strength is weight and port count. It is the lightest 300W LiFePO4 pick here.\n\nBackpackers with a car and day-hikers who want a light, safe station will like it. It slides into a bag.",
    "specs": [
      "192Wh LiFePO4, 3,500+ cycles",
      "Two 300W AC, two 60W USB-C",
      "5.84 lb, 8.4 x 5.3 x 7.4 inches"
    ],
    "pros": [
      "Light at 5.84 lb",
      "Eight ports including 60W USB-C",
      "LiFePO4 cells last 3,500+ cycles",
      "2.2 hour 0 to 70 percent charge"
    ],
    "cons": [
      "Capacity is lower than the AFERIY",
      "AC input limited to 90W"
    ],
    "bestFor": "Light packers",
    "take": "The lightest LiFePO4 station of the six.",
    "catch": "Pick the AFERIY if you need more Wh."
  },
  {
    "id": "best-power-stations-under-300-5",
    "rank": 5,
    "badge": "Best Brand Support",
    "name": "Jackery Explorer 300 Portable Power Station",
    "price": "$239.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-Ey75o-WL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082TMBYR6?tag=rvgearlab-20",
    "description": "Jackery's Explorer 300 weighs 7.5 lb and stores 292Wh in LiFePO4 cells, with a 300W rated (600W peak) inverter feeding two AC sockets. A 100W USB-C PD port, a pair of USB-A jacks and a 120W car socket round out the outputs. The cells are rated for more than 4,000 cycles, and a 100W Jackery panel recharges it to 80 percent in about 2.8 hours.\n\nAt about $259 it costs $70 more than the AFERIY and holds more capacity. Its edge is a well-known brand and a matching solar panel range.\n\nCampers who value brand support and a straightforward interface will like it. It suits RV trips and tailgating.",
    "specs": [
      "292Wh LiFePO4, 4,000+ cycles",
      "300W rated, 600W peak",
      "100W USB-C PD, 120W car port"
    ],
    "pros": [
      "More capacity than most 300W models",
      "LiFePO4 rated for 4,000+ cycles",
      "100W USB-C PD",
      "Pairs with Jackery panels"
    ],
    "cons": [
      "Costs about $70 more than the AFERIY",
      "300W continuous limit"
    ],
    "bestFor": "Brand-conscious campers",
    "take": "A well-known 300W station with good cells.",
    "catch": "You pay for the brand."
  },
  {
    "id": "best-power-stations-under-300-6",
    "rank": 6,
    "badge": "Best High-Output Pick",
    "name": "BLUETTI Elite 30 V2 Portable Power Station 288Wh 600W LFP Solar Generator",
    "price": "$249.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YTEqBbTsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F42HLLSC?tag=rvgearlab-20",
    "description": "The BLUETTI Elite 30 V2 stores 288Wh in LFP cells and delivers 600W continuous AC, with a Power Lifting mode that reaches 1500W for resistive loads. It weighs 9.4 lb and fast charges from 0 to 80 percent in 45 minutes at 380W.\n\nAt about $290 it is the priciest pick and offers twice the continuous AC watts of the 300W models. The Power Lifting mode runs gear that no other pick here can.\n\nCampers who want to run a small coffee maker or a blender will like the power. It suits RV trips and tailgating.",
    "specs": [
      "288Wh LFP, 600W continuous",
      "Power Lifting to 1500W",
      "45 minute 0 to 80% charge"
    ],
    "pros": [
      "600W continuous, twice the 300W picks",
      "Power Lifting mode to 1500W",
      "0 to 80 percent in 45 minutes",
      "LFP cells rated for long life"
    ],
    "cons": [
      "Costs the most of the six",
      "9.4 lb is the heaviest"
    ],
    "bestFor": "Higher-wattage appliances",
    "take": "The pick for running more than laptops and lights.",
    "catch": "Capacity is still 288Wh, so loads drain it fast."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Capacities from 192Wh to 296Wh were compared against devices each could run."
  },
  {
    "title": "Output",
    "description": "Continuous and surge watts from 300W to 600W were compared."
  },
  {
    "title": "Battery chemistry",
    "description": "LiFePO4, LFP and lithium-ion cells were compared for cycle life."
  },
  {
    "title": "Charging",
    "description": "Wall and solar charging speeds were compared."
  },
  {
    "title": "Weight and ports",
    "description": "Weights and port counts were compared."
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
          "Laptop, lights and a small fan",
          "AFERIY Nomad400",
          "256Wh and 400W rated."
        ],
        [
          "Budget 300W for a CPAP-class load",
          "ENOFLO 228Wh",
          "300W pure sine at about $122."
        ],
        [
          "Most watt-hours under $190",
          "296Wh 300W Station",
          "296Wh."
        ],
        [
          "Lightest LiFePO4",
          "Daran 192Wh 300W",
          "5.84 lb."
        ],
        [
          "Brand support",
          "Jackery Explorer 300",
          "292Wh and 100W panel pairing."
        ],
        [
          "Small coffee maker or blender",
          "BLUETTI Elite 30 V2",
          "600W continuous."
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
          "$120 to $150",
          "ENOFLO 228Wh or 296Wh 300W Station"
        ],
        [
          "$180 to $190",
          "AFERIY Nomad400 or Daran 192Wh 300W"
        ],
        [
          "$250 to $290",
          "Jackery Explorer 300 or BLUETTI Elite 30 V2"
        ]
      ]
    }
  },
  {
    "subheading": "LiFePO4 vs lithium-ion",
    "cards": [
      {
        "label": "LiFePO4",
        "text": "LiFePO4 cells give 3,000 or more cycles and safer chemistry, with slightly more weight. The AFERIY Nomad400, Daran 192Wh 300W, Jackery Explorer 300 and BLUETTI Elite 30 V2 use it."
      },
      {
        "label": "Lithium-ion",
        "text": "Lithium-ion cells cost less and weigh less but last fewer cycles. The ENOFLO 228Wh and 296Wh 300W Station use standard lithium cells."
      }
    ],
    "note": "Most campers should buy the AFERIY Nomad400 for the LiFePO4 life."
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
          "Around $122",
          "ENOFLO 228Wh"
        ],
        [
          "Around $150",
          "296Wh 300W Station"
        ],
        [
          "Around $189",
          "AFERIY Nomad400"
        ],
        [
          "Around $190",
          "Daran 192Wh 300W"
        ],
        [
          "Around $259",
          "Jackery Explorer 300"
        ],
        [
          "Around $290",
          "BLUETTI Elite 30 V2"
        ]
      ]
    }
  },
  {
    "subheading": "For car camping with a small fridge specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for at least 250Wh, a pure sine wave AC outlet and a rating above your fridge's running watts, typically 50 to 100W."
      },
      {
        "label": "In this comparison",
        "text": "The AFERIY Nomad400 offers 256Wh and 400W, and the Jackery Explorer 300 offers 292Wh."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want the brand support and charging speed of the Jackery Explorer 300 or the 600W output of the BLUETTI Elite 30 V2. Both add cost without adding much capacity."
      },
      {
        "label": "Save if",
        "text": "Save if you run phones, a laptop and lights, since the ENOFLO 228Wh at about $122 covers it."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watts versus watt-hours",
    "explanation": "Watts tell you what the station can run at one time, and watt-hours tell you how long it can keep going. A 600W kettle drains a 288Wh station in about 25 minutes, so high-watt gear is a poor match for small batteries. Look at both numbers in the title, and add up the devices you plan to run together."
  },
  {
    "criterion": "Continuous output",
    "explanation": "A 300W station cannot run a 400W coffee maker even for a short time, because the surge rating covers only a brief startup peak. A 600W continuous output runs more appliances without tripping its overload protection. Look for the continuous rating in the title, and match it to your highest-watt device with some headroom."
  },
  {
    "criterion": "Cycle life",
    "explanation": "LiFePO4 cells last 3,000 to 4,000 cycles, which is 8 to 10 years of regular use, while lithium-ion cells last 500 to 800 cycles. If you use a station every weekend, cycle life decides the cost per year. Look for LiFePO4 or LFP in the title."
  },
  {
    "criterion": "Recharge speed",
    "explanation": "Fast AC charging at 300W refills a 256Wh station in about an hour, and a 90W adapter takes 2 to 3 hours. Solar at 100W refills in about 3 to 4 hours of full sun. Look for the AC input watts and the maximum solar input."
  },
  {
    "criterion": "Weight",
    "explanation": "A 300W station weighs 5 to 10 lb, and every pound counts when you carry it from the car to a tent or up steps. Handles vary in comfort, and a heavier unit usually means more capacity or a bigger inverter. Look for the weight and the handle design in the product details, and compare it with how far you carry it."
  }
];

export const faq = [
  {
    "q": "How long will a 256Wh power station run a mini fridge?",
    "a": "A mini fridge draws about 40 to 60W while running and cycles on and off, so a 256Wh station lasts 6 to 10 hours. The AFERIY Nomad400 and Jackery Explorer 300 can cover a night. Check your fridge's rated watts first."
  },
  {
    "q": "Can these run a coffee maker?",
    "a": "Only the BLUETTI Elite 30 V2 has the 600W continuous output that most coffee makers need. A 300W station cannot run an 800W coffee maker even briefly. Check the wattage on the appliance label before you decide."
  },
  {
    "q": "Is LiFePO4 worth it?",
    "a": "If you use the station often, yes. LiFePO4 cells last 3,000 or more cycles, versus around 500 for standard lithium-ion, so the AFERIY Nomad400 and Jackery Explorer 300 hold their capacity for years. For a station used twice a year, cheaper cells are fine."
  },
  {
    "q": "How do I charge in a car?",
    "a": "Use the 12V car port cable, which delivers about 100W, with the engine running. A 256Wh station takes 3 to 5 hours that way, so wall or solar charging before the trip is faster. Never leave a car running in an enclosed space."
  },
  {
    "q": "Where should I keep a power station when camping?",
    "a": "Keep it dry, shaded and off the ground, with a few inches of clearance for airflow. Do not run it in a sealed bag or covered with a blanket. Never use it near water or in a flooded tent."
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
