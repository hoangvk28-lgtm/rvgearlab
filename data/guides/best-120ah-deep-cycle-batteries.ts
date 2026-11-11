export const guideSlug = "best-120ah-deep-cycle-batteries";
export const guideTitle = "4 Best 120Ah Deep Cycle Batteries in 2026";
export const metaTitle = "Best 120Ah Deep Cycle Batteries in 2026";
export const metaDescription = "Best 120Ah deep cycle batteries compared by chemistry, weight, voltage and ports for campers, boaters and small off-grid setups.";
export const mainKeyword = "best 120ah deep cycle batteries";
export const introParagraphs = [
  "A 120Ah battery sits in the middle of the deep cycle range, giving about 1536Wh at 12V in lithium form. It suits a mid-sized camp bank or a trolling motor, but the choice between a 75 lb AGM and a roughly 20 lb lithium pack changes how you carry, charge and mount it.",
  "Four 120Ah batteries made the cut: one AGM, two 12V lithium packs and one 24V lithium pack. They were compared on listed weight, BMS current, ports, voltage and how clearly each listing states its capacity."
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
    "id": "best-120ah-deep-cycle-batteries-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "GuaiGLong 12V 120Ah LiFePO4 Battery",
    "price": "$349.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41EXv9dMENL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CCJ79XY4?tag=rvgearlab-amz-20",
    "description": "The GuaiGLong is a 12V 120Ah LiFePO4 pack rated at 1536Wh with a 100A BMS and a capacity and voltage display. It weighs 8.8 kg and includes a cigarette lighter port, a waterproof LD20 port, a 50A Anderson plug, 8mm terminals and USB charging.\n\nNext to the GOKWH it offers more built-in ports and a screen, while the GOKWH relies on an app. Against the VMAX AGM it cuts weight by roughly two thirds.\n\nIt suits campers who want to plug small 12V gear straight into the battery and read charge level at a glance. A van or tent camper running lights and a fridge fits well.",
    "specs": [
      "12V 120Ah, 1536Wh",
      "Anderson, lighter, USB ports",
      "8.8 kg with display"
    ],
    "pros": [
      "Multiple ports without extra adapters",
      "Built-in capacity and voltage display",
      "8.8 kg for 120Ah",
      "Over 8000 cycles listed"
    ],
    "cons": [
      "Charging current capped at 30A",
      "Discharge capped near 100A instantaneous"
    ],
    "bestFor": "Plug-in camper power",
    "take": "A ready-to-plug 120Ah with ports and a display for people who dislike extra parts.",
    "catch": "The listing caps charging near 30A and discharge near 100A, so large inverters are out."
  },
  {
    "id": "best-120ah-deep-cycle-batteries-2",
    "rank": 2,
    "badge": "Best Budget Lithium",
    "name": "12V 120Ah LiFePO4 Marine Battery with Bluetooth APP",
    "price": "$170.55",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51t2w1cxvYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GRGPF7QX?tag=rvgearlab-amz-20",
    "description": "The GOKWH is a 12.8V 120Ah LiFePO4 battery rated at 1536Wh with a 100A BMS, low-temperature protection and Bluetooth 5.0 monitoring. It is listed as Group 24 with more than 4000 cycles.\n\nIt is the lowest priced battery here and still adds app monitoring, which the GuaiGLong replaces with an onboard screen. Against the PUPVWMHB it covers standard 12V use rather than 24V motors.\n\nIt suits budget campers and anglers who want phone monitoring on a smaller bank. The Group 24 listing helps with fit in many battery trays.",
    "specs": [
      "12.8V 120Ah, 1536Wh",
      "Bluetooth 5.0 app",
      "100A BMS, cold protection"
    ],
    "pros": [
      "Lowest price among the four picks",
      "App tracks charge, voltage and current",
      "Low-temperature protection built in",
      "Group 24 sizing for tighter boxes"
    ],
    "cons": [
      "Fewer ports than the GuaiGLong",
      "Cycle claim is lower than the other lithium picks"
    ],
    "bestFor": "Budget app-monitored bank",
    "take": "Lowest cost into lithium 120Ah, with an app thrown in.",
    "catch": "Check the box dimensions, since Group 24 and Group 31 trays differ."
  },
  {
    "id": "best-120ah-deep-cycle-batteries-3",
    "rank": 3,
    "badge": "Best 24V Motor Pick",
    "name": "24V 120AH Mini Lifepo4 Lithium Battery",
    "price": "$399.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tCDxD+HgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HHDKK6MC?tag=rvgearlab-amz-20",
    "description": "The PUPVWMHB is a 24V 120Ah mini LiFePO4 battery in Group 31 size, rated at 3072Wh with a 150A BMS, Bluetooth and a listed 15000 cycles. Its listing targets 24V trolling motors from 28 to 90 lb of thrust.\n\nIt holds twice the energy of the 12V picks and uses a higher voltage to cut current for the same power. Against the GuaiGLong it fits a different system entirely, since this one is a 24V pack.\n\nIt suits boaters and campers running a 24V trolling motor or a 24V off-grid system. The impact-resistant ABS case suits rough handling.",
    "specs": [
      "24V 120Ah, 3072Wh",
      "150A BMS, Bluetooth",
      "Group 31 mini size"
    ],
    "pros": [
      "3072Wh of stored energy",
      "150A BMS handles bigger loads",
      "Bluetooth monitoring",
      "Impact-resistant ABS casing"
    ],
    "cons": [
      "Needs a 24V system",
      "Highest price of the four"
    ],
    "bestFor": "24V motor and solar systems",
    "take": "Choose it only when your system is already 24V.",
    "catch": "A 24V pack must not be wired into 12V gear without a converter."
  },
  {
    "id": "best-120ah-deep-cycle-batteries-4",
    "rank": 4,
    "badge": "Best Sealed Lead Acid",
    "name": "VMAX MR137-120 12V 120Ah AGM Deep Cycle Marine Grp 31 Battery COMPATIBLE WITH Electric Trolling Motors",
    "price": "$279.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51sUJYwAMyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N9WOPTM?tag=rvgearlab-amz-20",
    "description": "The VMAX MR137-120 is a 12V 120Ah Group 31 AGM deep cycle battery with a 230 minute reserve capacity and 8mm terminals. It measures 12.9 by 6.8 by 8.7 inches, weighs 75 lb, and uses an electrolyte suspension system with heavy duty lead tin grids.\n\nAgainst the lithium picks it weighs roughly four times as much, while its maintenance-free sealed case can be mounted in any position. Compared with the GOKWH it carries a one year replacement warranty.\n\nIt suits trolling motor and camp bank users who want proven sealed AGM chemistry and a straightforward lead acid charger. The same battery is also sold in a two pack for 24V motors.",
    "specs": [
      "12V 120Ah AGM, Group 31",
      "230 min reserve capacity",
      "75 lb, 8mm terminals"
    ],
    "pros": [
      "Sealed and maintenance free",
      "Mounts in any position",
      "Resists shock and vibration",
      "Works with a lead acid charger"
    ],
    "cons": [
      "75 lb is heavy to carry",
      "Warranty is one year replacement"
    ],
    "bestFor": "Lead acid trolling motor use",
    "take": "A familiar sealed AGM for people who want to keep a lead acid charging setup.",
    "catch": "Weight and one-year warranty are the clear costs against lithium."
  }
];

export const howWeEvaluated = [
  {
    "title": "Voltage and energy",
    "description": "Each pack was converted to watt hours using its listed voltage to compare real energy stored."
  },
  {
    "title": "Weight and fit",
    "description": "Listed weight and Group 24 or Group 31 sizing were compared for portability and tray fit."
  },
  {
    "title": "Protection and current",
    "description": "BMS ratings, charge limits and discharge limits were compared for motors, inverters and small camp loads."
  },
  {
    "title": "Monitoring and ports",
    "description": "Displays, apps and built-in ports were compared for ease of day-to-day use."
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
    "subheading": "By Application",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Camper bank with ports",
          "GuaiGLong 12V 120Ah",
          "Anderson, lighter and USB ports on the case"
        ],
        [
          "Lowest-cost lithium",
          "GOKWH 12V 120Ah",
          "Bluetooth app at the lowest price"
        ],
        [
          "24V trolling motor",
          "PUPVWMHB 24V 120Ah",
          "28 to 90 lb thrust motors"
        ],
        [
          "Lead acid charger already owned",
          "VMAX MR137-120 AGM",
          "Sealed AGM, no lithium profile needed"
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
          "$170 to $280",
          "GOKWH 12V 120Ah or VMAX MR137-120 AGM"
        ],
        [
          "$340 to $400",
          "GuaiGLong 12V 120Ah or PUPVWMHB 24V 120Ah"
        ]
      ]
    }
  },
  {
    "subheading": "AGM vs Lithium",
    "cards": [
      {
        "label": "AGM",
        "text": "VMAX MR137-120 AGM is sealed, mounts in any position and works with a standard lead acid charger. It weighs 75 lb and gives less usable capacity."
      },
      {
        "label": "Lithium",
        "text": "GuaiGLong 12V 120Ah, GOKWH 12V 120Ah and PUPVWMHB 24V 120Ah weigh far less and use most of their rated capacity. They need a lithium-compatible charger."
      }
    ],
    "note": "Most campers should default to the GuaiGLong 12V 120Ah unless a lead acid charger or an existing AGM bank is the deciding factor."
  },
  {
    "subheading": "By Monitoring Style",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Onboard screen",
          "GuaiGLong 12V 120Ah"
        ],
        [
          "Phone app on a budget",
          "GOKWH 12V 120Ah"
        ],
        [
          "Phone app and 150A BMS",
          "PUPVWMHB 24V 120Ah"
        ],
        [
          "No electronics at all",
          "VMAX MR137-120 AGM"
        ]
      ]
    }
  },
  {
    "subheading": "For Trolling Motors and Camp Banks Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "The motor voltage, the battery group size and the BMS current rating, before price."
      },
      {
        "label": "In this comparison",
        "text": "GOKWH 12V 120Ah and VMAX MR137-120 AGM both suit 12V motor setups, while PUPVWMHB 24V 120Ah is the pick for 24V motors up to 90 lb of thrust."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the PUPVWMHB 24V 120Ah for a 24V motor or system, or the GuaiGLong 12V 120Ah if built-in ports and a display save you buying parts."
      },
      {
        "label": "Save if",
        "text": "Save with the GOKWH 12V 120Ah for the cheapest lithium bank, or stay with the VMAX MR137-120 AGM if you already own a lead acid charger."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "12V versus 24V packs",
    "explanation": "Many 120Ah batteries are 12V, but some are 24V and hold twice the energy. A 24V pack will damage 12V gear if connected directly. Check the voltage in the title and the nominal volts in the specs before ordering."
  },
  {
    "criterion": "Amp hours alone do not compare",
    "explanation": "A 120Ah lead acid battery is usually discharged to about 50% to protect its life, so it gives roughly 60Ah. A lithium 120Ah can often be used to near 100%. Compare watt hours and recommended depth of discharge to judge what you can actually run."
  },
  {
    "criterion": "BMS current and your largest load",
    "explanation": "A BMS limits the current a lithium pack will deliver, such as 100A or 150A. Divide by 12 or 24 volts to find the safe watts, then stay well below that with your inverter and appliances. Fuse the battery to the cable gauge."
  },
  {
    "criterion": "Ports and wiring convenience",
    "explanation": "Some packs include Anderson plugs, lighter sockets or USB outputs for small loads. These are handy for lights and phones but are limited in current. Anything over about 150W should use heavier cable and proper terminals instead of the lighter socket."
  },
  {
    "criterion": "Weight, ventilation and mounting",
    "explanation": "AGM packs are heavy and should be strapped down in a tray. Sealed batteries vent less than flooded ones but still need airflow when charging. Lithium is lighter, though it should stay secured and out of enclosed tents."
  }
];

export const faq = [
  {
    "q": "Is 120Ah enough for a weekend of camping?",
    "a": "A 12V 120Ah lithium pack holds about 1536Wh. A compressor fridge, lights and phone charging typically use a fraction of that per day. Add up your loads in watts and hours, then keep some reserve so the battery is not fully drained."
  },
  {
    "q": "Can I use a 24V 120Ah battery for a camper?",
    "a": "Only if the system is wired for 24V. Standard camper lights, fridges and USB chargers run on 12V and would be damaged by 24V. Use a DC-DC converter and fusing, or choose a 12V pack instead."
  },
  {
    "q": "Is lithium worth it over AGM at 120Ah?",
    "a": "The main gains are weight and usable capacity, since AGM is normally cycled to about half. If you carry the battery to a site, lithium is easier. If it lives in a boat or trailer, AGM can still be a sensible lower-cost option."
  },
  {
    "q": "How do I charge a 120Ah lithium battery?",
    "a": "Use a charger or controller with a LiFePO4 profile, and stay within the maximum charge current in the listing. Some packs cap charging at 30A. Avoid charging below freezing unless the pack has heating."
  },
  {
    "q": "How should I store a 120Ah battery?",
    "a": "Store it in a cool, dry place with the loads disconnected. Keep AGM batteries topped up every few months. Keep lithium packs partly charged and away from sparks, tents and sleeping areas."
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
