export const guideSlug = "best-power-banks-under-75";
export const guideTitle = "4 Best Power Banks Under 75 in 2026";
export const metaTitle = "Best Power Banks Under 75 in 2026";
export const metaDescription = "Best power banks under $75: four 25,000 to 70,000mAh and AC outlet banks compared on 100W laptop charging, capacity and airline limits.";
export const mainKeyword = "best power banks under 75";
export const introParagraphs = [
  "Seventy-five dollars is where a power bank can charge a laptop. The four picks here run from about $46 to $67 and include a 100W USB-C bank, two huge 70,000mAh banks and a LiFePO4 bank with a real AC outlet.",
  "Few good options sit at this price beyond these four, so each one fills a different role. The notes explain which you need and what each trades away."
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
    "id": "best-power-banks-under-75-1",
    "rank": 1,
    "badge": "Best Value Under $75",
    "name": "INIU Laptop Power Bank",
    "price": "$66.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41pvsOQmE5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJ8L7HVH?tag=rvgearlab-20",
    "description": "INIU delivers 100W through USB-C from a 25,000mAh pack, enough to take a 14 inch laptop from 20 to 72 percent in half an hour. It is described as airline approved, comes with a 0.4 foot 100W cable and is 30 percent smaller than a soda can.\n\nAt about $67 it costs the most of the four and is the one that fast-charges a laptop and a phone at once. The 70,000mAh banks hold nearly three times the energy and are limited to 25W to 30W.\n\nChoose it for a laptop, tablet and phone on a flight or a trip. It also runs a gaming handheld for several hours.",
    "specs": [
      "25,000mAh, 100W USB-C",
      "Laptop 20 to 72% in 30 min",
      "0.4 ft 100W cable included"
    ],
    "pros": [
      "100W output charges a laptop fast",
      "Airline approved capacity",
      "100W cable in the box",
      "Smaller than a soda can"
    ],
    "cons": [
      "Short 0.4 foot cable",
      "Smaller capacity than the 70,000mAh banks"
    ],
    "bestFor": "Laptops on the move",
    "take": "The only bank here that charges a laptop at full speed.",
    "catch": "Pack a longer 100W cable."
  },
  {
    "id": "best-power-banks-under-75-2",
    "rank": 2,
    "badge": "Best Big Capacity",
    "name": "Portable Charger 70800mAh Power Bank with 3 Built-in Cable",
    "price": "$53.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31XUKBs66CL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FZBTMM28?tag=rvgearlab-20",
    "description": "LanLuk is a 70,800mAh bank with three built-in cables for iOS, USB-C and Micro, three ports including two USB-A QC ports and a 25W PD USB-C output. It charges six devices at once, refills through two options and weighs about 642g at 6.02 by 2.75 by 1.69 inches.\n\nAt about $54 it holds about 2.8 times the INIU's energy for $13 less, and it is limited to 25W so it will not run a laptop quickly. It also exceeds airline limits.\n\nChoose it for a family camp where phones, tablets and a headlamp all need charging for five days. The built-in cables avoid a tangle.",
    "specs": [
      "70,800mAh, 25W PD USB-C",
      "Three built-in cables",
      "Charges six devices at once"
    ],
    "pros": [
      "70,800mAh holds many charges",
      "Three built-in cables",
      "Charges six devices at once",
      "25W PD fast charging"
    ],
    "cons": [
      "Cannot fly (over 160Wh)",
      "Heavy at about 1.4 lb"
    ],
    "bestFor": "Family car camps",
    "take": "The biggest battery for the money here.",
    "catch": "Not for carrying on a plane."
  },
  {
    "id": "best-power-banks-under-75-3",
    "rank": 3,
    "badge": "Best Budget Big Bank",
    "name": "Portable Charger 70000mAh Power Bank Fast Charging",
    "price": "$45.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31xmP4jX3KL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FHCTS7DT?tag=rvgearlab-20",
    "description": "Liahomco is a 70,000mAh bank with five outputs, including two 30W USB ports, an LCD readout and a lanyard. It targets groups that need many charges in one pack.\n\nAt about $46 it costs $8 less than the LanLuk and has a slightly lower capacity with two 30W ports that charge faster. It is heavier than the INIU and recharges slowly from empty.\n\nChoose it for a group camp with several phones and tablets. The LCD tells you what is left at a glance.",
    "specs": [
      "70,000mAh, five outputs",
      "Two 30W USB outputs",
      "LCD readout, lanyard"
    ],
    "pros": [
      "Huge capacity for a group",
      "Two 30W ports",
      "LCD shows remaining power",
      "Lanyard for carrying"
    ],
    "cons": [
      "Heavy and bulky for a pocket",
      "Cannot fly"
    ],
    "bestFor": "Group camping",
    "take": "The cheapest big bank here.",
    "catch": "Recharge it a day early."
  },
  {
    "id": "best-power-banks-under-75-4",
    "rank": 4,
    "badge": "Best AC Outlet",
    "name": "Portable Power Station 122.8Wh",
    "price": "$59.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41vZtm9ylGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DR89VFT8?tag=rvgearlab-20",
    "description": "SinKeu pairs a UL-certified 122.8Wh LiFePO4 pack, good for 3500 or more cycles, with 150W of continuous AC for laptops, cameras and mini-fridges under 100W. It weighs 4 lb, has pass-through charging and measures about 7.5 by 4.5 inches.\n\nAt about $59 it is the only pick with an AC outlet, which runs a laptop brick, a camera charger or a CPAP-class load. It is heavier than any USB bank and holds less than the 70,000mAh packs.\n\nChoose it if you need real wall power on a trip. It suits car camping and cabins.",
    "specs": [
      "122.8Wh LiFePO4, 3500 cycles",
      "150W continuous AC",
      "4 lb, pass-through charging"
    ],
    "pros": [
      "AC outlet for any plug-in device",
      "LiFePO4 rated for 3500 cycles",
      "UL-certified battery",
      "Pass-through charging"
    ],
    "cons": [
      "4 lb is heavy for a bank",
      "Capacity is modest"
    ],
    "bestFor": "Car camps needing AC",
    "take": "A bank with a real wall outlet.",
    "catch": "Do not plan on a fridge for hours."
  }
];

export const howWeEvaluated = [
  {
    "title": "Output wattage",
    "description": "Output from 25W to 150W AC was compared."
  },
  {
    "title": "Capacity",
    "description": "Capacity from 25,000 to 70,800mAh and 122.8Wh was compared."
  },
  {
    "title": "Flight limits",
    "description": "Wh against airline limits was checked."
  },
  {
    "title": "Ports and cables",
    "description": "Built-in cables, port counts and AC outlets were noted."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is under $75, and the top pick has the best output for laptops."
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
    "subheading": "By use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Laptop and phone, flight",
          "INIU 25000mAh 100W",
          "100W and airline legal."
        ],
        [
          "Family car camp",
          "LanLuk 70800mAh",
          "70,800mAh and three cables."
        ],
        [
          "Group camp, lowest cost",
          "Liahomco 70000mAh",
          "About $46."
        ],
        [
          "Laptop brick or camera charger",
          "SinKeu 122.8Wh AC Bank",
          "150W AC outlet."
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
          "$40 to $60",
          "Liahomco 70000mAh or LanLuk 70800mAh"
        ],
        [
          "$50 to $70",
          "SinKeu 122.8Wh AC Bank or INIU 25000mAh 100W"
        ]
      ]
    }
  },
  {
    "subheading": "USB-C bank vs AC bank",
    "cards": [
      {
        "label": "USB-C bank",
        "text": "The INIU 25000mAh 100W, LanLuk 70800mAh and Liahomco 70000mAh charge USB devices efficiently with little weight."
      },
      {
        "label": "AC bank",
        "text": "The SinKeu 122.8Wh AC Bank has a 150W AC outlet for any device. It weighs 4 lb."
      }
    ],
    "note": "Most buyers should take the INIU 25000mAh 100W."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Budget band",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $46",
          "Liahomco 70000mAh"
        ],
        [
          "About $54",
          "LanLuk 70800mAh"
        ],
        [
          "About $59",
          "SinKeu 122.8Wh AC Bank"
        ],
        [
          "About $67",
          "INIU 25000mAh 100W"
        ]
      ]
    }
  },
  {
    "subheading": "For a laptop specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for 65W or more USB-C PD, or an AC outlet, and a capacity of at least 20,000mAh."
      },
      {
        "label": "In this comparison",
        "text": "The INIU 25000mAh 100W gives 100W USB-C, and the SinKeu 122.8Wh AC Bank gives 150W AC."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a laptop-capable 100W bank, which is the INIU 25000mAh 100W. The next tier brings AC outlet banks of 98Wh."
      },
      {
        "label": "Save if",
        "text": "Save if you only need phones, since the Liahomco 70000mAh costs about $46 and charges them 12 or more times."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Laptop charging wattage",
    "explanation": "A 14 inch laptop needs 65 to 100W while running and charging, so a 25W or 30W bank only slows the drain. USB-C PD 100W banks like the INIU can charge it, and AC outlets suit laptops with barrel chargers. Check your laptop's charger wattage."
  },
  {
    "criterion": "Airline limits",
    "explanation": "Carry-on banks must be under 100Wh, or up to 160Wh with approval. A 25,000mAh bank is about 93Wh and legal, while 70,000mAh is about 259Wh and banned on planes. Check the Wh figure and the airline's rules, and a 70,000mAh bank is banned from planes in both carry-on and checked luggage."
  },
  {
    "criterion": "Capacity for the weight",
    "explanation": "A 70,000mAh bank holds nearly three times the energy of a 25,000mAh bank but weighs about 1.4 lb and does not fly. Weight matters for hikes, not cars. Check the lb figure, and a bank that weighs 1.4 lb with cables is fine on a car camp but heavy for a daypack."
  },
  {
    "criterion": "AC outlets",
    "explanation": "An AC outlet lets any plug-in device charge but wastes 10 to 20 percent in conversion and adds weight. A 150W outlet runs a laptop or a camera battery charger, not a kettle. Check the continuous watts, and compare the AC outlet bank with a USB-C bank plus a laptop charger, because a USB-C setup can weigh less."
  },
  {
    "criterion": "Battery chemistry",
    "explanation": "LiFePO4 cells in the SinKeu last 3500 cycles, against about 500 for standard lithium-ion banks. For a bank used weekly that is 10 years against 1. Look for the chemistry and the cycle rating, so a LiFePO4 bank costs more now and saves money over a decade of weekend trips."
  },
  {
    "criterion": "Recharge speed",
    "explanation": "A 70,000mAh bank needs 10 to 20 hours on a 15W input, which is a night or more. A 25,000mAh bank at 100W takes about 1.5 hours. Check the input wattage and plan the recharge, and if you camp at a site without power, plan to refill the bank at home first."
  }
];

export const faq = [
  {
    "q": "Can I charge a laptop from a USB-C bank?",
    "a": "Yes if the bank's PD output meets the laptop's needs. The INIU 25000mAh 100W can charge most laptops at up to 100W, while the 25W and 30W banks only slow the drain. Check the laptop's charger wattage."
  },
  {
    "q": "Why can't I fly with a 70,000mAh bank?",
    "a": "At about 259Wh it exceeds the 160Wh airline maximum, and the LanLuk 70800mAh and Liahomco 70000mAh are both over it. Banks up to 100Wh fly freely and up to 160Wh with approval. Use them for car trips."
  },
  {
    "q": "What does an AC outlet bank do better?",
    "a": "It charges devices that have no USB-C option, such as a camera battery charger or an older laptop brick. The SinKeu 122.8Wh AC Bank offers 150W. It weighs 4 lb, much more than a USB bank."
  },
  {
    "q": "How do I recharge a huge bank?",
    "a": "Use the fastest charger the bank supports, such as 25W to 30W, and plan 10 to 15 hours. Charge it overnight before the trip. A slow charger can take a day and unplug it once the display reads full."
  },
  {
    "q": "Is a 100W bank worth the money?",
    "a": "If you carry a laptop, yes, because it replaces the laptop charger and lets you charge a phone at once. For phones only, a cheaper bank does the job. The INIU 25000mAh 100W costs about $67, and it can also charge a handheld game console."
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
