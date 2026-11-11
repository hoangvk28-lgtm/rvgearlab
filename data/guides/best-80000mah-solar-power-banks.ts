export const guideSlug = "best-80000mah-solar-power-banks";
export const guideTitle = "3 Best 80000mah Solar Power Banks in 2026";
export const metaTitle = "Best 80000mah Solar Power Banks in 2026";
export const metaDescription = "Three 80000mAh power banks for camping compared on solar input, ports, AC output and safety limits, with plain notes on what the tiny panels can do.";
export const mainKeyword = "best 80000mah solar power banks";
export const introParagraphs = [
  "Very few listings combine an 80000mAh capacity with a solar panel, so this is a three-product guide. Two Feidyns banks carry a small emergency panel, and the Volessence adds a 130W AC outlet and takes outside charging instead.",
  "Each bank was compared on stated capacity, output wattage, port count, built-in solar claims, water rating and carry rules. At about 296 watt-hours these units sit above common airline limits, so the guide flags that too."
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
    "id": "best-80000mah-solar-power-banks-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "80000mAh Power Bank 35W Fast Charging Wireless Solar Charger",
    "price": "$56.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UDnkpDr8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GTLM4DGS?tag=rvgearlab-amz-20",
    "description": "The Feidyns 7-port bank pairs an 80000mAh cell, 35W fast charging over PD and QC 3.0, a 15W wireless pad and seven ports in total. A 5W solar panel provides emergency input, and a 300 lumen LED with an SOS strobe sits beside an IP66 rated body.\n\nCompared with the 9-port Feidyns, it adds the wireless pad and a brighter light for a slightly higher price. Against the Volessence, it is far cheaper and carries a panel, while the Volessence gives a 130W AC outlet.\n\nIt suits campers who want a rugged hub to charge phones, a tablet and earbuds across a long weekend. A strap rated for a 200 lb pull hangs it from a tent loop.",
    "specs": [
      "80000mAh, 35W PD and QC 3.0",
      "15W wireless pad, 7 ports",
      "300 lumen LED, IP66, 5W panel"
    ],
    "pros": [
      "IP66 rain and dust rating",
      "Wireless pad on top",
      "300 lumen LED with SOS strobe",
      "Strap rated for a 200 lb pull"
    ],
    "cons": [
      "Solar panel is for emergencies only",
      "No AC outlet for laptops or small appliances"
    ],
    "bestFor": "A rugged phone hub for long weekends",
    "take": "The best-equipped Feidyns, with a wireless pad and a bright light.",
    "catch": "The 5W panel is a backup, so charge it from a wall or car first."
  },
  {
    "id": "best-80000mah-solar-power-banks-2",
    "rank": 2,
    "badge": "Best Budget",
    "name": "Feidyns 80000mAh Solar Battery Charger",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41E6GkrnQ-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GZW2TZXC?tag=rvgearlab-amz-20",
    "description": "The Feidyns 9-port bank lists an 80000mAh cell, 35W fast charging, built-in USB-C and Lightning cables and nine ports in all. It has a 5W emergency solar panel, a 200 lumen LED with SOS strobe and an IP66 body.\n\nThe cheapest bank in the trio also stands alone with both cables built in. Against the 7-port Feidyns, it adds two more ports and loses the wireless pad and some LED brightness.\n\nIt suits groups and families who charge many devices at once, such as phones, a drone and earbuds. The built-in cables save loose wires in a bag.",
    "specs": [
      "80000mAh, 35W PD and QC 3.0",
      "9 ports, built-in USB-C and Lightning",
      "200 lumen LED, IP66, 5W panel"
    ],
    "pros": [
      "Lowest price on the list",
      "Nine ports for group charging",
      "Built-in USB-C and Lightning cables",
      "IP66 rain and dust rating"
    ],
    "cons": [
      "No wireless charging pad",
      "5W solar input is for emergencies only"
    ],
    "bestFor": "Group charging on a budget",
    "take": "The cheapest 80000mAh bank here, with built-in cables and nine ports.",
    "catch": "The solar panel is a minimal backup, so plan on wall or car charging."
  },
  {
    "id": "best-80000mah-solar-power-banks-3",
    "rank": 3,
    "badge": "Best for AC and Laptops",
    "name": "Volessence 80000mAh/296Wh Portable Power Bank with AC Outlet 130W",
    "price": "$259.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31gsvE+KfBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BY7Z9N1B?tag=rvgearlab-amz-20",
    "description": "The Volessence lists 80000mAh at 296Wh, with a 100W USB-C PD port and a 110V AC outlet rated at 130W. It supports pass-through charging, has an LED display for input and output power and offers four ways to recharge, including a 19V DC input and a 65W USB-C input.\n\nIt is the only bank here with an AC outlet, which lets it run a laptop charger or a small appliance. Against the Feidyns pair, it drops the built-in panel and costs several times more.\n\nIt suits campers who work on a laptop or run a small device and want a bank closer to a mini power station. The display shows real-time watts and charge level.",
    "specs": [
      "80000mAh, 296Wh",
      "100W USB-C PD, 130W AC outlet",
      "Pass-through charging, LED display"
    ],
    "pros": [
      "130W AC outlet for small devices",
      "100W USB-C PD for laptops",
      "Pass-through charging while recharging",
      "Display shows input and output watts"
    ],
    "cons": [
      "No built-in solar panel is listed",
      "Priciest of the three by a wide margin"
    ],
    "bestFor": "Laptop and small appliance power",
    "take": "The only bank here with an AC outlet and a 100W USB-C port.",
    "catch": "It needs a separate solar panel or wall charger, and the listing does not describe a panel."
  }
];

export const howWeEvaluated = [
  {
    "title": "Solar claim",
    "description": "Listings with a built-in panel were separated from those that need outside charging."
  },
  {
    "title": "Output wattage",
    "description": "Printed PD and AC wattage figures were compared against laptop and phone needs."
  },
  {
    "title": "Port count",
    "description": "Total ports and built-in cables were noted for group use."
  },
  {
    "title": "Rugged features",
    "description": "Water rating, strap and light were compared for outdoor use."
  },
  {
    "title": "Carry rules",
    "description": "Watt-hour size was weighed against typical airline limits."
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
    "subheading": "By Charging Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Phones, tablets and a wireless pad",
          "Feidyns 7-Port",
          "35W output, 15W pad and seven ports."
        ],
        [
          "Many devices at once",
          "Feidyns 9-Port",
          "Nine ports and built-in cables."
        ],
        [
          "Laptop or small appliance",
          "Volessence 296Wh",
          "100W USB-C and a 130W AC outlet."
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
          "$40 to $50",
          "Feidyns 9-Port"
        ],
        [
          "$50 to $60",
          "Feidyns 7-Port"
        ],
        [
          "$250 to $260",
          "Volessence 296Wh"
        ]
      ]
    }
  },
  {
    "subheading": "Built-In Panel vs Outside Charging",
    "cards": [
      {
        "label": "Built-in panel",
        "text": "A small panel adds a trickle in the sun but is too slow to fill the bank. The Feidyns 7-Port and Feidyns 9-Port are in this group."
      },
      {
        "label": "Outside charging",
        "text": "Wall, car or a separate panel is how this bank fills, and it recharges quickly. The Volessence 296Wh is in this group."
      }
    ],
    "note": "Most campers should pick the Feidyns 7-Port unless they need an AC outlet."
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
          "Lowest cost",
          "Feidyns 9-Port"
        ],
        [
          "Mid-priced hub",
          "Feidyns 7-Port"
        ],
        [
          "Near mini power station",
          "Volessence 296Wh"
        ]
      ]
    }
  },
  {
    "subheading": "Week-Long Camping With Phones and a Tablet",
    "cards": [
      {
        "label": "Look for",
        "text": "A bank with at least 35W output, an IP rating and enough capacity for several full phone charges."
      },
      {
        "label": "In this comparison",
        "text": "The Feidyns 7-Port and Feidyns 9-Port both list 80000mAh with 35W output and IP66 protection."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Volessence 296Wh if you charge a laptop or run a small AC device, or on the Feidyns 7-Port for the wireless pad."
      },
      {
        "label": "Save if",
        "text": "Save with the Feidyns 9-Port, which has the lowest price and the most ports."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What a tiny solar panel does",
    "explanation": "A 5W panel adds a trickle of charge. At best it adds a few watt-hours a day, while an 80000mAh bank holds about 296 watt-hours. Treat the panel as an emergency top-up and charge the bank from a wall or car before you leave."
  },
  {
    "criterion": "Capacity math",
    "explanation": "80000mAh at a nominal 3.7 volts is roughly 296 watt-hours before conversion losses. Real delivered energy is lower, often 70 to 85 percent. A phone battery of about 15 Wh would charge perhaps 15 times, so check the listing's stated count."
  },
  {
    "criterion": "Output wattage",
    "explanation": "A 35W USB-C port suits phones and tablets and charges a laptop slowly. A 100W port suits most laptops, and a 130W AC outlet covers a laptop brick or small fan. Look for the maximum output per port and the total across all ports."
  },
  {
    "criterion": "Flying with it",
    "explanation": "Airlines generally limit carry-on power banks to 100 Wh without approval and about 160 Wh with it. A 296 Wh bank exceeds both. Check airline rules before travel and plan to drive."
  },
  {
    "criterion": "Heat and storage",
    "explanation": "Lithium banks should not sit in a hot car or direct sun, and charging below freezing can damage them. Store at about half charge when idle. Look for overheating and short-circuit protection on the listing."
  }
];

export const faq = [
  {
    "q": "Can an 80000mAh bank run a camping fridge?",
    "a": "Not reliably. The Feidyns banks list USB outputs, while the Volessence 296Wh offers 130W AC, which is below the draw of most compressor fridges at startup. Check the fridge's rated watts first."
  },
  {
    "q": "What is the biggest mistake with solar power banks?",
    "a": "Relying on the panel to refill the bank. A 5W panel is a trickle charger, so charge from a wall or car before you go."
  },
  {
    "q": "Is the Volessence worth it over the Feidyns banks?",
    "a": "If you need an AC outlet or a 100W USB-C port, yes. The Volessence 296Wh powers a laptop and small gear, while the Feidyns 7-Port and Feidyns 9-Port are cheaper phone hubs."
  },
  {
    "q": "How do I charge an 80000mAh bank fully?",
    "a": "Use a wall adapter or the highest-wattage input the listing names. The Volessence 296Wh lists a DC input that fills it in 4.5 hours, and the Feidyns banks take longer on a standard adapter."
  },
  {
    "q": "Can I fly with an 80000mAh bank?",
    "a": "Probably not in carry-on. Many airlines limit power banks to 100 Wh, or about 160 Wh with approval, and these banks hold around 296 Wh. Check with your airline before traveling."
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
