export const guideSlug = "best-solar-generators-under-150";
export const guideTitle = "5 Best Solar Generators Under 150 in 2026";
export const metaTitle = "Best Solar Generators Under 150 in 2026";
export const metaDescription = "Best solar generators under $150: five power station and solar panel kits compared on battery size, AC output and panel wattage for light camping.";
export const mainKeyword = "best solar generators under 150";
export const introParagraphs = [
  "A solar generator is a power station sold with a foldable panel, and $150 buys the smallest kits. The five here run from about $114 to $140, with 88 to 155Wh batteries and 30 to 40W panels, which is enough for phones, a tablet, lights and a small fan.",
  "Moving toward the cap adds panel size, AC output and a longer cable, and the notes explain what each step adds. None of these runs a fridge or a heater, and a 30W panel recovers only about 100Wh on a clear day."
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
    "id": "best-solar-generators-under-150-1",
    "rank": 1,
    "badge": "Best Value Under $150",
    "name": "200W Solar Powered Generator",
    "price": "$119.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51ueD7s3b6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FBS5KZKB?tag=rvgearlab-amz-20",
    "description": "Powkey bundles a 146Wh power station with a 40W foldable solar panel and two 110V pure sine wave AC outlets rated up to 200W. It has four USB outputs and charges from a wall outlet in 5 to 6 hours, from a 12V car port or from the supplied panel.\n\nAt about $120 it gives the only 200W pure sine wave AC output in this range and a bigger panel than the MARBERO kits. The Apowking costs $6 less and tops out at 100W.\n\nWeekend campers who want a pure sine wave outlet for a laptop and a small fan will like it. The 40W panel recovers more per sunny day than the 30W kits.",
    "specs": [
      "146Wh, 200W pure sine AC",
      "40W foldable solar panel",
      "Two AC outlets, four USB"
    ],
    "pros": [
      "200W pure sine wave AC outlets",
      "40W panel is the largest here",
      "Three recharge methods",
      "Four USB outputs"
    ],
    "cons": [
      "Only 146Wh of storage",
      "Wall charge takes 5 to 6 hours"
    ],
    "bestFor": "Weekend laptop and fan use",
    "take": "The best mix of AC output and panel size under $150.",
    "catch": "A 40W panel needs a full sunny day to refill it."
  },
  {
    "id": "best-solar-generators-under-150-2",
    "rank": 2,
    "badge": "Cheapest Kit",
    "name": "Solar Powered Generator 100W",
    "price": "$113.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41QABmA8V1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G24B6VW6?tag=rvgearlab-amz-20",
    "description": "This kit pairs a 146Wh (39,600mAh) power station with a 40W solar panel rated at 20.5 percent efficiency. It has seven outlets, including two 110V AC sockets within 100W (200W peak), and a dual LED flashlight with strobe and SOS modes.\n\nAt about $114 it is the cheapest kit and has the same 146Wh capacity and panel as the Powkey. The Powkey adds a 200W AC rating for $6 more.\n\nFirst-time buyers who want a complete kit for phones and lights will like the price. It also suits a bug-out bag.",
    "specs": [
      "146Wh, 100W (200W peak) AC",
      "40W panel, 20.5% efficiency",
      "Seven outlets, dual LED light"
    ],
    "pros": [
      "Lowest price for a complete kit",
      "Same 40W panel as the Powkey",
      "Seven outlets",
      "Dual LED flashlight with SOS"
    ],
    "cons": [
      "100W AC limit",
      "Less clear brand support"
    ],
    "bestFor": "Phones, lights and bug-out kits",
    "take": "A bargain kit for small charging jobs.",
    "catch": "Keep your load under 100W."
  },
  {
    "id": "best-solar-generators-under-150-3",
    "rank": 3,
    "badge": "Most Portable Kit",
    "name": "MARBERO Solar Generator 150W Peak 150Wh Portable Power Station with Solar Panel Included Camping Power Supply ",
    "price": "$119.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51FUgussgOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DWRS3T87?tag=rvgearlab-amz-20",
    "description": "MARBERO pairs a 155Wh power station of 2.8 lb with a foldable 30W solar panel that weighs 1.8 lb and has 21.5 to 23.5 percent conversion efficiency. It offers AC, DC and USB outputs for phones, lights and small gear.\n\nAt about $120 it matches the Powkey on price and weighs under 5 lb total, and its panel is 10W smaller. It is the lightest complete kit in this range.\n\nHikers with a car, bikers and travelers who care about weight will like it. A 30W panel suits patient charging.",
    "specs": [
      "155Wh station, 150W peak",
      "30W foldable panel, 21.5-23.5%",
      "2.8 lb station, 1.8 lb panel"
    ],
    "pros": [
      "Under 5 lb for the whole kit",
      "High-efficiency panel cells",
      "AC, DC and USB outputs",
      "Compact for a daypack"
    ],
    "cons": [
      "30W panel recovers slowly",
      "150W peak limits AC gear"
    ],
    "bestFor": "Weight-conscious travelers",
    "take": "The lightest complete solar kit here.",
    "catch": "A cloudy day gives you very little charge."
  },
  {
    "id": "best-solar-generators-under-150-4",
    "rank": 4,
    "badge": "Best Cable Length",
    "name": "MARBERO 155Wh Solar Generator with Solar Panel Included 30W Solar Panel Kit",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51rdx5r-ukL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FLJV238G?tag=rvgearlab-amz-20",
    "description": "This MARBERO kit includes a 155Wh station, a 30W solar panel and a power converter, with a 6.5 ft integrated panel cable, so the panel can sit in sun while the station stays in shade or a tent. Outputs are two 100W AC sockets, a QC3.0 USB-A, two USB-A ports, a USB-C, three DC outputs and a car port.\n\nAt about $123 it costs $3 more than the 150Wh MARBERO and offers more outputs and the longer cable. The Powkey has the larger panel.\n\nCampers who park the panel away from the tent will like the cable. It suits car camping and roadside emergencies.",
    "specs": [
      "155Wh, two 100W AC outlets",
      "30W panel with 6.5 ft cable",
      "3-mode LED flashlight"
    ],
    "pros": [
      "6.5 ft cable keeps the station in shade",
      "Two 100W AC outlets",
      "Many output types",
      "3-mode flashlight with SOS"
    ],
    "cons": [
      "30W panel is slow",
      "100W AC limit"
    ],
    "bestFor": "Car camping with shaded storage",
    "take": "A solid kit with the best panel cable.",
    "catch": "Cloud cover cuts the charge sharply."
  },
  {
    "id": "best-solar-generators-under-150-5",
    "rank": 5,
    "badge": "Most Expensive Kit",
    "name": "HOWEASY Solar Generator 120W，Portable Power Station with 30W Solar Panel",
    "price": "$139.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41m6WQbnhoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DX118RR7?tag=rvgearlab-amz-20",
    "description": "HOWEASY's H120 has an 88Wh battery with a 120W output (150W peak), a 30W solar panel and eight ports: two AC sockets, an 18W USB-C, two QC 3.0 USB and two DC ports. The folded panel measures 9.7 by 11.3 by 0.8 inches.\n\nAt about $140 it costs the most and holds the least energy of the five, so you are paying for the compact panel and the port count. The Powkey gives 146Wh for $20 less.\n\nCampers who want a very small kit for night lights and a mini fan will like it. The compact panel fits a daypack.",
    "specs": [
      "88Wh, 120W (150W peak) AC",
      "30W panel, 9.7 x 11.3 inches folded",
      "Eight output ports"
    ],
    "pros": [
      "Very compact panel",
      "Eight ports including USB-C",
      "Quiet operation",
      "30W solar input"
    ],
    "cons": [
      "Only 88Wh of storage",
      "Costs the most for the least energy"
    ],
    "bestFor": "Night lights and mini fans",
    "take": "A tiny kit for very light use.",
    "catch": "Buy the Powkey if you want more energy."
  }
];

export const howWeEvaluated = [
  {
    "title": "Battery size",
    "description": "Capacities from 88 to 155Wh were compared against the devices each could run."
  },
  {
    "title": "Panel wattage",
    "description": "Panels of 30 and 40W were compared for how much they add per day."
  },
  {
    "title": "AC output",
    "description": "100 to 200W AC ratings and pure sine wave were compared."
  },
  {
    "title": "Portability",
    "description": "Weights and folded sizes were compared."
  },
  {
    "title": "Price",
    "description": "Prices were compared with the whole kit contents."
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
    "subheading": "By what you power",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Laptop and small fan",
          "Powkey 146Wh Kit",
          "200W pure sine wave AC."
        ],
        [
          "Phones and lights on a budget",
          "146Wh 100W Kit",
          "About $114."
        ],
        [
          "Lightest kit",
          "MARBERO 150Wh Kit",
          "Under 5 lb."
        ],
        [
          "Panel away from the tent",
          "MARBERO 155Wh Kit",
          "6.5 ft cable."
        ],
        [
          "Tiny night-light setup",
          "HOWEASY H120 Kit",
          "Compact panel and 8 ports."
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
          "$110 to $120",
          "146Wh 100W Kit or Powkey 146Wh Kit"
        ],
        [
          "$110 to $130",
          "MARBERO 150Wh Kit or MARBERO 155Wh Kit"
        ],
        [
          "$130 to $140",
          "HOWEASY H120 Kit"
        ]
      ]
    }
  },
  {
    "subheading": "30W panel vs 40W panel",
    "cards": [
      {
        "label": "30W panel",
        "text": "A 30W panel weighs less and folds smaller, and it recovers about 100Wh on a clear day. The MARBERO 150Wh Kit, MARBERO 155Wh Kit and HOWEASY H120 Kit use 30W panels."
      },
      {
        "label": "40W panel",
        "text": "A 40W panel recovers about a third more per day and costs a few dollars more. The Powkey 146Wh Kit and 146Wh 100W Kit use 40W panels."
      }
    ],
    "note": "Most campers should buy the Powkey 146Wh Kit for the larger panel."
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
          "Around $114",
          "146Wh 100W Kit"
        ],
        [
          "Around $120",
          "Powkey 146Wh Kit"
        ],
        [
          "Around $120 for weight",
          "MARBERO 150Wh Kit"
        ],
        [
          "Around $123",
          "MARBERO 155Wh Kit"
        ],
        [
          "Around $140",
          "HOWEASY H120 Kit"
        ]
      ]
    }
  },
  {
    "subheading": "For weekend tent camping specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for at least 140Wh, a 40W panel and pure sine wave AC, and keep the station dry and outside the sleeping area when charging."
      },
      {
        "label": "In this comparison",
        "text": "The Powkey 146Wh Kit has 146Wh, 40W of panel and pure sine AC, and the MARBERO 155Wh Kit adds a 6.5 ft panel cable."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want to run a mini fridge or a CPAP, which needs 300Wh or more and moves you to the next price tier. Under $150 the Powkey 146Wh Kit is the best balance."
      },
      {
        "label": "Save if",
        "text": "Save if you only charge phones and lights, since the 146Wh 100W Kit costs about $114 and includes a 40W panel."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Battery size in watt-hours",
    "explanation": "Watt-hours measure stored energy, and a 146Wh battery runs a 10W light for about 12 hours or a 40W fan for about 3 hours. These kits cover phones, lights and tablets, not appliances. Look for the Wh figure in the title and divide it by your device watts."
  },
  {
    "criterion": "Panel size and sun",
    "explanation": "A 30W panel in strong sun yields roughly 100Wh over a clear day, while a 40W panel yields about 130Wh. That means a 146Wh station may need a full day or more to refill. Look for the panel watts and plan on 4 to 5 hours of strong sun."
  },
  {
    "criterion": "Pure sine wave AC",
    "explanation": "Pure sine wave output is gentler on laptops and chargers than modified sine wave, which can run warm and hum. A 200W rating also lets you run a small fan and a laptop together without tripping overload protection. Look for the words pure sine wave in the description, and check the continuous watts rather than the peak figure."
  },
  {
    "criterion": "Panel cable and placement",
    "explanation": "A longer panel cable lets you keep the station in shade while the panel sits in the sun, which protects the battery from heat. A short cable forces both into the sun. Look for the cable length, such as 6.5 ft, in the title or bullets."
  },
  {
    "criterion": "Weight and folding",
    "explanation": "A 2.8 lb station and a 1.8 lb panel fit in a daypack, while larger kits need a bag or a car. The folded panel size matters for storage, since a panel that is 10 by 11 inches is easier to stow than one the size of a laptop bag. Look for the weights and folded dimensions in the product details."
  }
];

export const faq = [
  {
    "q": "Can a 30W panel recharge a power station?",
    "a": "Yes, but slowly. A 30W panel recovers roughly 100Wh on a clear day, so the MARBERO 155Wh Kit needs a day and a half from empty. Top up from a wall outlet before the trip and use the panel to extend it."
  },
  {
    "q": "What can I run from these kits?",
    "a": "Phones, tablets, headlamps, lights and a small fan, within the AC watt rating. The Powkey 146Wh Kit handles up to 200W, while the 146Wh 100W Kit stops at 100W. A fridge, kettle or heater is beyond them."
  },
  {
    "q": "Is solar charging reliable?",
    "a": "In full sun it works well, and under cloud it drops sharply, sometimes to a fraction of the rated watts. Angle the panel toward the sun and keep it unshaded, and move it every couple of hours. Plan on wall charging as your backup before the trip."
  },
  {
    "q": "Can I use the station while it charges?",
    "a": "Many can, using pass-through charging, so you can run devices while the panel charges, but the station may run warm. Keep it ventilated and out of direct sun. Check the product notes for pass-through support before you rely on it."
  },
  {
    "q": "How do I store the kit?",
    "a": "Keep the battery at 50 to 80 percent charge in a dry place, and fold the panel flat so the cells are not creased. Top it up every few months. Avoid leaving the kit in a hot car, since heat shortens battery life."
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
