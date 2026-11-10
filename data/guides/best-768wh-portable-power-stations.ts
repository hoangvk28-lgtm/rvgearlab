export const guideSlug = "best-768wh-portable-power-stations";
export const guideTitle = "4 Best 768Wh Portable Power Stations in 2026";
export const metaTitle = "Best 768Wh Portable Power Stations in 2026";
export const metaDescription = "Best 768Wh portable power stations compared with smaller step-down options on output, ports and weight for camping, short outages and RV trips.";
export const mainKeyword = "best 768wh portable power stations";
export const introParagraphs = [
  "Few listings hit exactly 768Wh, a size that sits between a weekend phone-and-lights box and a station that can run a fridge for a day. Two models state 768Wh, so this list pairs them with two smaller step-down units for lighter trips.",
  "The two 768Wh stations come first, followed by a 293Wh and a 288Wh unit. They were ranked on stated capacity, rated output, port count and what the listing says about battery chemistry and protection."
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
    "id": "best-768wh-portable-power-stations-1",
    "rank": 1,
    "badge": "Best Overall 768Wh",
    "name": "Anker SOLIX C800X Portable Power Station and 100W Solar Panel",
    "price": "$429.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413DK3NtbRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G6ZDP75P?tag=rvgearlab-20",
    "description": "The Anker SOLIX C800X stores 768Wh and lists 1,200W rated output with 10 ports, SurgePad technology and 3-mode built-in camping lights. It recharges to 80 percent in 2.3 hours from solar, and the listing bundle includes a 100W solar panel.\n\nIts 1,200W rating is double the 600W of the Dabbsson 600L, so it can run a kettle-class load that the other 768Wh unit cannot. The built-in lights also make it a camp lantern.\n\nThis one fits campers and RV owners wanting a single box for lights, a fridge and a few small appliances. The bundled panel makes it a complete starter kit.",
    "specs": [
      "768Wh, 1,200W rated",
      "10 ports, SurgePad",
      "Bundled 100W solar panel"
    ],
    "pros": [
      "Highest rated output of the four",
      "Built-in 3-mode camping lights",
      "Solar panel included in the bundle",
      "10 ports for many devices"
    ],
    "cons": [
      "Costs more than the Dabbsson",
      "Cell chemistry not named on the listing"
    ],
    "bestFor": "A camp and RV starter kit",
    "take": "The more capable of the two true 768Wh units. A good default for campers who want power plus lights.",
    "catch": "It costs noticeably more than the other 768Wh pick."
  },
  {
    "id": "best-768wh-portable-power-stations-2",
    "rank": 2,
    "badge": "Best Value 768Wh",
    "name": "Dabbsson 768Wh Portable Power Station",
    "price": "$299.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41BEXjgsEkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DTSPV741?tag=rvgearlab-20",
    "description": "The Dabbsson 768Wh unit uses semi-solid LiFePO4 cells with an AI-driven BMS and lists 600W rated output from 2 pure sine AC outlets, with up to 900W noted. It charges from 0 to 100 percent in 1.6 hours on AC and has 8 outputs including a 100W USB-C port.\n\nIt undercuts the Anker SOLIX C800X on price while matching its 768Wh. Its rated output is lower, and its quick AC recharge refills it in an afternoon.\n\nIt suits buyers who want 768Wh of LiFePO4 storage at a lower price for lights, laptops and a small fridge. The USB-C port handles laptops.",
    "specs": [
      "768Wh semi-solid LiFePO4",
      "600W rated, 2 AC outlets",
      "0 to 100 percent in 1.6 hours"
    ],
    "pros": [
      "Same 768Wh at a lower price",
      "Charges fully in 1.6 hours",
      "LiFePO4 with smart BMS",
      "100W USB-C port for laptops"
    ],
    "cons": [
      "Only 600W rated output",
      "Two AC outlets limit simultaneous loads"
    ],
    "bestFor": "768Wh storage on a budget",
    "take": "The cheaper way to 768Wh. Fine for electronics, lights and small fridges.",
    "catch": "A 600W rating rules out kettle-class appliances."
  },
  {
    "id": "best-768wh-portable-power-stations-3",
    "rank": 3,
    "badge": "Best Mid-Weight Step-Down",
    "name": "Portable Power Station 600W",
    "price": "$219.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fzYZ1djHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CXHVGD6B?tag=rvgearlab-20",
    "description": "The Bailibatt DW601S is a 293Wh station with one 600W pure sine AC outlet, a 100W PD USB-C port and a 24W PD USB-C port, 7 ports in all. It weighs 7.7 pounds and has an LCD that shows status plus a BMS for protection.\n\nAt less than half the capacity of the Anker SOLIX C800X it weighs far less to carry, and it costs much less. It has more USB-C power than the DaranEner 288Wh with the same single-box simplicity.\n\nIt suits weekend campers and day trippers who need a laptop and a phone charged, plus an occasional AC device. It is a step-down for people who found 768Wh too heavy.",
    "specs": [
      "293Wh, 600W pure sine AC",
      "100W and 24W PD USB-C",
      "7.7 lb with LCD"
    ],
    "pros": [
      "Light at 7.7 pounds",
      "100W PD USB-C for laptops",
      "LCD shows operating status",
      "BMS monitors temperature"
    ],
    "cons": [
      "One AC outlet only",
      "Cell chemistry not stated"
    ],
    "bestFor": "Weekend electronics and one AC device",
    "take": "A portable step-down for people who do not need 768Wh. Good for laptops and a single AC appliance.",
    "catch": "One AC outlet limits how many AC devices you can run at once."
  },
  {
    "id": "best-768wh-portable-power-stations-4",
    "rank": 4,
    "badge": "Best Budget LiFePO4",
    "name": "DARAN Portable Power Station",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41P62EDaNTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DN9QHGG8?tag=rvgearlab-20",
    "description": "The DaranEner is a 288Wh LiFePO4 station with two 350W AC outlets rated up to 600W surge and charging by wall, car or solar. Its BMS protects against overcharge, over-discharge and short circuits.\n\nIt uses the same LiFePO4 chemistry as the Dabbsson 600L at about a third of the capacity and a much lower price. Two AC outlets give it more flexibility than the single-outlet Bailibatt DW601S.\n\nIt suits first-time buyers and RV drivers who want a small LiFePO4 backup for lights, a fan and phones. It is the lowest-cost entry in this set.",
    "specs": [
      "288Wh LiFePO4",
      "2 x 350W AC, 600W surge",
      "Wall, car or solar charging"
    ],
    "pros": [
      "LiFePO4 chemistry at a low price",
      "Two AC outlets",
      "Three ways to recharge",
      "Full BMS protection set"
    ],
    "cons": [
      "Only 288Wh of storage",
      "350W rating is low for heating items"
    ],
    "bestFor": "A small, safe LiFePO4 backup",
    "take": "A simple entry unit with lithium iron phosphate cells. It will not run big appliances.",
    "catch": "The 350W rated output rules out hair dryers and kettles."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity match",
    "description": "Compared stated watt-hours against the 768Wh target and treated smaller units as step-downs."
  },
  {
    "title": "Rated output",
    "description": "Looked at stated AC watts and surge, since output decides which appliances can run."
  },
  {
    "title": "Ports and charging",
    "description": "Counted AC outlets and USB-C power, and noted solar, AC and car charging."
  },
  {
    "title": "Weight and protection",
    "description": "Checked listed weight, battery chemistry and BMS protection details."
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
          "RV or campsite with a fridge and lights",
          "Anker SOLIX C800X",
          "1,200W rated, built-in lights"
        ],
        [
          "Budget 768Wh for electronics",
          "Dabbsson 600L",
          "Same capacity, lower price"
        ],
        [
          "Weekend laptop and phone charging",
          "Bailibatt DW601S",
          "Light, with 100W PD USB-C"
        ],
        [
          "Small LiFePO4 backup",
          "DaranEner 288Wh",
          "LiFePO4 at the lowest price"
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
          "$160 to $220",
          "DaranEner 288Wh or Bailibatt DW601S"
        ],
        [
          "$290 to $430",
          "Dabbsson 600L or Anker SOLIX C800X"
        ]
      ]
    }
  },
  {
    "subheading": "True 768Wh vs smaller step-down",
    "cards": [
      {
        "label": "768Wh",
        "text": "The Anker SOLIX C800X and Dabbsson 600L give a full day of small-load power, but they weigh more and cost more."
      },
      {
        "label": "Under 300Wh",
        "text": "The Bailibatt DW601S and DaranEner 288Wh are lighter and cheaper, but only cover phones, laptops and lights."
      }
    ],
    "note": "Most buyers should default to the Anker SOLIX C800X unless they only charge small devices."
  },
  {
    "subheading": "By Weight and Budget",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest cost",
          "DaranEner 288Wh"
        ],
        [
          "Lightest to carry",
          "Bailibatt DW601S"
        ],
        [
          "Best 768Wh per dollar",
          "Dabbsson 600L"
        ],
        [
          "Most power and ports",
          "Anker SOLIX C800X"
        ]
      ]
    }
  },
  {
    "subheading": "For Short Power Outages at Home Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Enough watt-hours for a router, lights and phones"
      },
      {
        "label": "In this comparison",
        "text": "The Dabbsson 600L has 768Wh and an AC outlet pair, and the Anker SOLIX C800X adds 1,200W for slightly larger loads."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Anker SOLIX C800X if you want 1,200W output, built-in lights and a bundled solar panel."
      },
      {
        "label": "Save if",
        "text": "Save with the Dabbsson 600L for the same 768Wh, or step down to the DaranEner 288Wh if you only charge small devices."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 768Wh gets you",
    "explanation": "Watt-hours measure stored energy, so 768Wh could run a 60W device for roughly 12 hours before losses. A 50W mini fridge averaging 25W could run for more than a day. Divide the capacity by your device's average watts for a rough runtime."
  },
  {
    "criterion": "Rated output limits",
    "explanation": "A station's AC rating is the most it can supply at once, so a 600W unit cannot run a 1,000W kettle. Add up the watts of devices you want to run together and stay under the rating. Look for the figure next to AC outlet in the specs."
  },
  {
    "criterion": "Chemistry and cycle life",
    "explanation": "LiFePO4 (lithium iron phosphate) cells last for thousands of cycles and tolerate heat better than standard lithium-ion. Standard cells are lighter but wear faster. Check the title or bullets for LiFePO4 or LFP because many listings leave chemistry out."
  },
  {
    "criterion": "Pass-through and charging time",
    "explanation": "A station that can charge and power devices at the same time is useful for solar days. Charging time depends on the input watts, such as 1.6 hours on a fast AC input. Check the listed AC, solar and car input numbers."
  },
  {
    "criterion": "Weight and portability",
    "explanation": "At 768Wh a station usually weighs 20 pounds or more, while 300Wh units can fall below 10 pounds. Weight affects whether you can carry it to a picnic table or keep it in the car. If the listing omits weight, look at the dimensions and ask the seller."
  }
];

export const faq = [
  {
    "q": "Can 768Wh run a mini fridge?",
    "a": "Yes for many models, since a small fridge averages well under 100W, but check the fridge's watts. The Anker SOLIX C800X and Dabbsson 600L both have the capacity for several hours."
  },
  {
    "q": "Is 768Wh enough for a CPAP machine?",
    "a": "It depends on the device. Ask your CPAP maker about using inverter-based power, because only the maker can confirm compatibility and runtime."
  },
  {
    "q": "Is 1,200W worth it over 600W?",
    "a": "It is useful if you want to run a hot appliance or several loads at once. For laptops, lights and phones, the 600W of the Dabbsson 600L is enough."
  },
  {
    "q": "How do I charge a station on the road?",
    "a": "Use the car port, an AC wall outlet or a solar panel that matches the input range. The Anker SOLIX C800X lists 80 percent solar charging in 2.3 hours with a suitable panel."
  },
  {
    "q": "How should I store a station?",
    "a": "Keep it dry at roughly half charge and away from heat. Recharge it every few months so the cells stay healthy."
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
