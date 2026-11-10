export const guideSlug = "best-small-battery-camping-fans";
export const guideTitle = "2 Best Small Battery Camping Fans in 2026";
export const metaTitle = "Best Small Battery Camping Fans in 2026";
export const metaDescription = "Best small battery camping fans compared on battery type, listed runtime, noise level and size, for solo tents, hammocks and cots where space is tight.";
export const mainKeyword = "best small battery camping fans";
export const introParagraphs = [
  "A small tent does not need a big fan, it needs a quiet one that lasts the night. Two listings fit that brief well, one rechargeable with a big cell and one that runs on D batteries.",
  "They were compared on battery type, stated runtime, noise rating, speeds and size. Where the listing leaves out a weather rating or a weight, that appears as a buyer tip."
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
    "id": "best-small-battery-camping-fans-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "FRIZCOL 3-in-1 Camping Fan",
    "price": "$29.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51fuC7He8AL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HCBFW1ZK?tag=rvgearlab-amz-20",
    "description": "The FRIZCOL carries a 24000mAh battery with a listed runtime of 11 to 60 hours across four speeds. Its 3950 r/min motor stays under 30 dB, three timers and two LED levels are built in, and the head adjusts vertically in an anti-drop ABS body.\n\nAgainst the Gazeled, it is rechargeable, far quieter and adds a light. A bigger cell is why it can run a full night on a mid setting.\n\nIt suits solo campers and sleepers who want a quiet fan, a timer and a small light in one body. The timers help shut it off after you are asleep.",
    "specs": [
      "24,000mAh, 11 to 60 hours",
      "3950 r/min, under 30 dB",
      "3 timers, 2 LED levels"
    ],
    "pros": [
      "Big battery for a small fan",
      "Quiet at under 30 dB",
      "Three timers for overnight use",
      "Built-in two-level LED"
    ],
    "cons": [
      "Runtime drops a lot at top speed",
      "Light has only two levels"
    ],
    "bestFor": "Quiet fan for solo tents",
    "take": "A large battery and a very quiet motor make it the best overnight small fan.",
    "catch": "Top speed lands near the short end of the runtime range."
  },
  {
    "id": "best-small-battery-camping-fans-2",
    "rank": 2,
    "badge": "Best Without a Charger",
    "name": "Gazeled Battery Operated Fan",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/516+BwvtSnL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B083SC3XPS?tag=rvgearlab-amz-20",
    "description": "The Gazeled is a 5 inch fan powered by four D-cell batteries, which are not included. It lists 50dB noise, a head that rotates 180 degrees, a timer and a USB option as a second power source.\n\nCompared with the FRIZCOL, it needs no charging, so you can swap in fresh cells at any store along the way. It trades silence for that independence and adds no light.\n\nIt suits trips without a power source, where a dead battery needs a quick fix. A carry handle and timer keep the design simple.",
    "specs": [
      "Four D-cell batteries",
      "180 degree rotation head",
      "USB power also works"
    ],
    "pros": [
      "No charging needed",
      "Runs by USB when needed",
      "Timer and carry handle",
      "Simple, rugged design"
    ],
    "cons": [
      "D cells are not included",
      "50dB is louder than most rechargeables"
    ],
    "bestFor": "Trips without charging",
    "take": "A fan that works wherever you can buy D cells, with USB as a fallback.",
    "catch": "Top speed draws 700mA, so D cells run down faster at full power."
  }
];

export const howWeEvaluated = [
  {
    "title": "Battery type",
    "description": "Rechargeable cells were compared with replaceable D cells for logistics on remote trips."
  },
  {
    "title": "Runtime",
    "description": "Listed hours at low and high speeds were set side by side."
  },
  {
    "title": "Noise level",
    "description": "Stated decibel ratings were compared, since a noisy fan is hard to sleep with."
  },
  {
    "title": "Size and placement",
    "description": "Head angle, mounting and body size were weighed for tents and cots."
  },
  {
    "title": "Extras",
    "description": "Timers, lights and USB options were noted as secondary benefits."
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
          "Solo tent, quiet night",
          "FRIZCOL 24000mAh Fan",
          "Under 30 dB and three timers."
        ],
        [
          "Multi-day trip with no charging",
          "Gazeled D-Cell Fan",
          "Swap in D cells anywhere."
        ],
        [
          "Want a built-in light",
          "FRIZCOL 24000mAh Fan",
          "Two LED levels on the body."
        ],
        [
          "Backup if the battery dies",
          "Gazeled D-Cell Fan",
          "USB power also works."
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
          "Gazeled D-Cell Fan"
        ],
        [
          "$20 to $30",
          "FRIZCOL 24000mAh Fan"
        ]
      ]
    }
  },
  {
    "subheading": "Rechargeable vs D-Cell",
    "cards": [
      {
        "label": "Rechargeable",
        "text": "A built-in cell charges from a cable and runs quietly. The FRIZCOL 24000mAh Fan is rechargeable."
      },
      {
        "label": "D-cell",
        "text": "Replaceable cells swap in seconds and need no charger. The Gazeled D-Cell Fan uses four D cells."
      }
    ],
    "note": "Most campers should pick the FRIZCOL 24000mAh Fan unless charging is impossible."
  },
  {
    "subheading": "By Noise Tolerance",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Light sleeper",
          "FRIZCOL 24000mAh Fan"
        ],
        [
          "Noise does not matter",
          "Gazeled D-Cell Fan"
        ],
        [
          "Needs to be silent",
          "FRIZCOL 24000mAh Fan"
        ]
      ]
    }
  },
  {
    "subheading": "Solo Tents and Hammocks",
    "cards": [
      {
        "label": "Look for",
        "text": "A low dB figure, a timer and a head that points where you sleep."
      },
      {
        "label": "In this comparison",
        "text": "The FRIZCOL 24000mAh Fan lists under 30 dB with three timers, and the Gazeled D-Cell Fan offers a 180 degree head."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the FRIZCOL 24000mAh Fan if you sleep lightly and want a quiet, timed, rechargeable fan."
      },
      {
        "label": "Save if",
        "text": "Save with the Gazeled D-Cell Fan if you want a simple fan that runs on cells from any shop."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Battery type and logistics",
    "explanation": "A rechargeable fan needs a charging plan, while a D-cell fan needs spare batteries. For one weekend, either works, while a week-long trip favours whichever matches your power setup. Check whether the listing includes batteries or a charging cable."
  },
  {
    "criterion": "Noise in decibels",
    "explanation": "A quiet bedroom sits near 30 dB, and 50 dB is closer to a conversation. At night noise matters more than airflow for sleep. Look for a printed dB figure and compare it between fans."
  },
  {
    "criterion": "Runtime range",
    "explanation": "A listing that says 11 to 60 hours covers the lowest to the highest speed. Check the hours at the speed you will use, not the best case. Plan on the lower end for hot nights."
  },
  {
    "criterion": "Size for a small space",
    "explanation": "A small tent needs a fan that stands, clips or hangs without taking floor space. Check for a stand, clip or hook, and whether the head tilts. A fan that only rests on the floor can get kicked."
  },
  {
    "criterion": "Timers and light",
    "explanation": "A timer shuts the fan off after you sleep and saves battery. A light turns it into a tent lamp. Look for both in the bullet points rather than assuming."
  }
];

export const faq = [
  {
    "q": "Can I run a small camping fan all night?",
    "a": "It depends on the speed and the battery. The FRIZCOL 24000mAh Fan lists up to 60 hours at low speed, so a full night is realistic. The Gazeled D-Cell Fan depends on how fresh the D cells are."
  },
  {
    "q": "What is the common mistake with small fans?",
    "a": "Choosing on top-speed airflow alone. Noise and runtime decide whether you actually use the fan. Check both before buying."
  },
  {
    "q": "Is the FRIZCOL worth it over the Gazeled?",
    "a": "For most campers, yes. The FRIZCOL 24000mAh Fan is quieter and adds a timer and a light. The Gazeled D-Cell Fan wins only when you cannot charge."
  },
  {
    "q": "How do I place a small fan in a tent?",
    "a": "Aim it across your body, not at your face, and set it above the floor where it cannot be kicked. Use low speed for sleep. A cross breeze from a vent helps."
  },
  {
    "q": "How do I care for the batteries?",
    "a": "Charge the FRIZCOL fully before long trips and store it somewhere cool. Remove D cells from the Gazeled fan when storing it so leaks cannot damage the unit. Keep both dry."
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
