export const guideSlug = "best-portable-solar-panels-for-home";
export const guideTitle = "5 Best Portable Solar Panels For Home in 2026";
export const metaTitle = "Best Portable Solar Panels For Home in 2026";
export const metaDescription = "Best portable solar panels for home use: five foldable panels from 10W to 150W for outage backup, compared on watts, weight and what they plug into.";
export const mainKeyword = "best portable solar panels for home";
export const introParagraphs = [
  "Portable panels earn a spot at home when the power goes out. A foldable panel plus a power station keeps phones, lights and a router running, and it stores in a closet until you need it.",
  "The five panels here run from a 150W kit to a 10W phone charger. They are ordered by how much real charging they can feed a home backup battery, with weight and connectors as tie-breakers."
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
    "id": "best-portable-solar-panels-for-home-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "DOKIO 150W Portable Foldable Solar Panel Kit with Charge Controller",
    "price": "$94.77",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51SyNN01llL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07Y8CT1W9?tag=rvgearlab-20",
    "description": "The DOKIO 150W kit folds to 19.3 x 20.9 x 1.1 inches at 7.3 lbs and includes a standalone PWM charge controller with reverse polarity, overcharge, overload and short-circuit protection. A 9.8 foot cable lets the panel sit in sun while the controller stays in shade.\n\nIt carries the most wattage of the five, and the separate controller suits 12V battery setups, which the ZOUPW and FlexSolar do not list. It also adds USB ports for direct phone top-ups.\n\nIt fits homeowners who keep a 12V battery or RV-style backup. The long cable makes it practical to set up in a yard.",
    "specs": [
      "150W foldable, 7.3 lbs",
      "PWM controller with protections",
      "9.8 foot cable"
    ],
    "pros": [
      "Highest wattage of the group",
      "Standalone PWM controller included",
      "9.8 foot cable for shade placement",
      "USB ports for quick top-ups"
    ],
    "cons": [
      "PWM controller is basic",
      "Some power stations cap solar input at 60 to 100W"
    ],
    "bestFor": "12V battery backup",
    "take": "The most power here and a controller in the box. Good for a 12V battery setup.",
    "catch": "Check your power station input limit first, since many cap at 100W."
  },
  {
    "id": "best-portable-solar-panels-for-home-2",
    "rank": 2,
    "badge": "Best Universal Connectors",
    "name": "ZOUPW 100W Portable Solar Panel for Power Station",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41O9ZbgIgkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CR42CFJ9?tag=rvgearlab-20",
    "description": "The ZOUPW is a 100W foldable panel with 23.5% efficient Grade A+ monocrystalline cells, an IP67 ETFE coating and a 5-in-1 universal connector cable. It weighs 9.48 lbs and folds to 24.13 x 21.06 x 1.77 inches.\n\nCompared with the FlexSolar, it carries a built-in charge hub with USB-C PD 15V/3A and two USB-A ports. The five-connector cable fits more power stations than a typical 4-in-1 cable.\n\nIt suits households with a Jackery or similar station where connector fit is the main worry. The magnetic carry handle helps with storage.",
    "specs": [
      "100W, 23.5% efficient cells",
      "5-in-1 universal connector cable",
      "IP67 ETFE, 9.48 lbs"
    ],
    "pros": [
      "Five connectors fit many stations",
      "Direct USB-C and USB-A charging hub",
      "IP67 waterproof ETFE coating",
      "Magnetic carry handle"
    ],
    "cons": [
      "9.48 lbs is heavier than the FlexSolar",
      "Needs a sunny open spot"
    ],
    "bestFor": "Home backup with Jackery-style stations",
    "take": "It fits the widest range of power stations. A good choice if you are unsure of your plug.",
    "catch": "Heavier than the FlexSolar, so storage space matters."
  },
  {
    "id": "best-portable-solar-panels-for-home-3",
    "rank": 3,
    "badge": "Best Lightweight",
    "name": "FlexSolar 100W Foldable Portable Solar Panel Charger IP67 Waterproof",
    "price": "$80.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/512HvRFtq1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DX25J31F?tag=rvgearlab-20",
    "description": "The FlexSolar is a 100W panel weighing only 4.1 lbs with a 0.59 inch profile, IP67 waterproof and dustproof rating and E-Film lamination. Outputs include PD 3.0 45W USB-C, 18W USB-A and a 100W DC port.\n\nAt less than half the weight of the ZOUPW, it is the easiest panel to carry out and set up on a porch. Its 23%+ efficiency matches the other 100W options.\n\nIt fits older owners, apartment dwellers and anyone who wants a panel that is easy to move in and out of a closet. The 100W DC output feeds most stations directly.",
    "specs": [
      "100W, 4.1 lbs, 0.59 inch thin",
      "PD 3.0 45W USB-C, 18W USB-A",
      "IP67, 23%+ monocrystalline"
    ],
    "pros": [
      "Only 4.1 lbs for 100W",
      "USB-C PD 3.0 45W output",
      "IP67 waterproof and dustproof",
      "Slim 0.59 inch profile"
    ],
    "cons": [
      "No separate charge controller",
      "Fewer connector adapters listed"
    ],
    "bestFor": "Easy storage and setup",
    "take": "The lightest 100W panel here. Ideal for quick setup on a patio.",
    "catch": "Match its DC plug to your power station first."
  },
  {
    "id": "best-portable-solar-panels-for-home-4",
    "rank": 4,
    "badge": "Best Mid-Size Charger",
    "name": "60W Portable Solar Panels Charger with USB-C",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TJGq5CNYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FF9VHZS9?tag=rvgearlab-20",
    "description": "The MHPOWOS 60W panel folds to briefcase size with a kickstand and has three outputs: a 5A DC port, a USB-C port and a USB-A port. It lists 23% conversion with IP67 water resistance.\n\nIt sits between the 100W panels and the 10W BLAVOR, enough for phones, power banks, speakers and small electronics. Compared with the FlexSolar, it trades wattage for a lower price.\n\nIt suits households that only need to keep small devices charged during outages. It is easy to prop up with the kickstand.",
    "specs": [
      "60W foldable, 23% conversion",
      "USB-C, USB-A and 5A DC outputs",
      "Kickstand, IP67 water resistance"
    ],
    "pros": [
      "Three output ports",
      "Kickstand for easy setup",
      "IP67 water resistance",
      "Folds to briefcase size"
    ],
    "cons": [
      "Only 60W of input",
      "Slow for a large station"
    ],
    "bestFor": "Phones and small electronics",
    "take": "A balanced panel for small loads. It is easy to prop up and carry.",
    "catch": "60W takes a long day to refill a big battery."
  },
  {
    "id": "best-portable-solar-panels-for-home-5",
    "rank": 5,
    "badge": "Best Phone Charger",
    "name": "BLAVOR 10W Portable Solar Charger",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51P3tJfJAKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BJDBQXQ3?tag=rvgearlab-20",
    "description": "The BLAVOR 10W is a small foldable solar charger with 5V/2A max output and two USB outputs, listing up to 24% efficiency with ETFE lamination. It weighs 0.81 lbs and folds to 7.4 x 7.5 x 1 inches, with carabiners and a USB-A to USB-C cable included.\n\nIt is the lightest and most compact of the five and the only one that fits in a go bag. It is meant for phone-sized loads, and it clips onto a pack with the two carabiners.\n\nIt suits a go bag, a window ledge or a car dashboard during an outage. Two USB outputs mean two phones can charge at once.",
    "specs": [
      "10W, 5V/2A max, 2 USB ports",
      "0.81 lbs, folds small",
      "24% efficiency listed"
    ],
    "pros": [
      "Weighs only 0.81 lbs",
      "Two USB outputs for two devices",
      "Oxford cloth with ETFE panel",
      "Carabiners and cable included"
    ],
    "cons": [
      "Phone-sized charging only",
      "Slow in cloud or shade"
    ],
    "bestFor": "Phones in a go bag",
    "take": "A tiny backup charger for phones. Light enough to leave in any bag.",
    "catch": "It cannot run a laptop or a station."
  }
];

export const howWeEvaluated = [
  {
    "title": "Watts",
    "description": "Panel output."
  },
  {
    "title": "Connectors",
    "description": "Plug fit."
  },
  {
    "title": "Weight",
    "description": "Pounds."
  },
  {
    "title": "Weather",
    "description": "IP rating."
  },
  {
    "title": "Controller",
    "description": "Built-in or separate."
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
    "subheading": "By Backup Goal",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Keep a 12V battery topped up",
          "DOKIO 150W Panel Kit",
          "PWM controller in the box"
        ],
        [
          "Jackery-style power station",
          "ZOUPW 100W Foldable",
          "5-in-1 connector cable"
        ],
        [
          "Easy carry and storage",
          "FlexSolar 100W Ultralight",
          "4.1 lbs for 100W"
        ],
        [
          "Phones and small devices",
          "MHPOWOS 60W Panel",
          "USB-C and USB-A outputs"
        ],
        [
          "Go bag charging",
          "BLAVOR 10W Charger",
          "0.81 lbs"
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
          "$30 to $70",
          "BLAVOR 10W Charger or MHPOWOS 60W Panel"
        ],
        [
          "$80 to $100",
          "FlexSolar 100W Ultralight or DOKIO 150W Panel Kit"
        ],
        [
          "$90 to $100",
          "ZOUPW 100W Foldable"
        ]
      ]
    }
  },
  {
    "subheading": "Panel With Controller vs Plug-In Panel",
    "cards": [
      {
        "label": "With Controller",
        "text": "A separate controller is needed for 12V batteries. DOKIO 150W Panel Kit includes one."
      },
      {
        "label": "Plug-In",
        "text": "Connects straight to a station or a device. ZOUPW 100W Foldable, FlexSolar 100W Ultralight, MHPOWOS 60W Panel and BLAVOR 10W Charger."
      }
    ],
    "note": "Most homeowners with a power station should choose ZOUPW 100W Foldable or FlexSolar 100W Ultralight."
  },
  {
    "subheading": "By Storage Space",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Closet shelf",
          "FlexSolar 100W Ultralight"
        ],
        [
          "Garage or bin",
          "DOKIO 150W Panel Kit"
        ],
        [
          "Backpack",
          "BLAVOR 10W Charger"
        ],
        [
          "Mid-size bag",
          "MHPOWOS 60W Panel"
        ]
      ]
    }
  },
  {
    "subheading": "For Power Outages Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A panel that matches your station plug and rated at the station's solar input limit."
      },
      {
        "label": "In this comparison",
        "text": "ZOUPW 100W Foldable and FlexSolar 100W Ultralight both list 100W with IP67 ratings."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on DOKIO 150W Panel Kit or ZOUPW 100W Foldable if you rely on a bigger battery."
      },
      {
        "label": "Save if",
        "text": "Save with BLAVOR 10W Charger or MHPOWOS 60W Panel if you only keep phones and lights going."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Panel wattage versus station input",
    "explanation": "A 150W panel does not charge faster than your station allows. Many portable stations cap solar input at 60 to 100W, so a bigger panel can waste capacity. Check your station's maximum solar input before buying."
  },
  {
    "criterion": "Connector compatibility",
    "explanation": "Panels and stations use different plugs, such as DC8020, XT60 and Anderson. A 5-in-1 cable covers more cases than a 4-in-1 cable. Check your station's input port name and the connectors in the panel's listing."
  },
  {
    "criterion": "Weight and fold size",
    "explanation": "A panel you can lift with one hand is a panel you will actually deploy. A 4 lb panel feels easy, while a 9 lb panel is a chore for some. Check weight and folded size."
  },
  {
    "criterion": "Weather rating",
    "explanation": "IP67 means the panel resists dust and brief immersion, which handles rain. A rating without a number is not a guarantee. Look for the IP number and the surface material, such as ETFE."
  },
  {
    "criterion": "Charge controller",
    "explanation": "A panel that connects straight to a power station does not need a separate controller. A 12V battery does need one. Check whether a PWM or MPPT controller is included."
  },
  {
    "criterion": "Realistic output at home",
    "explanation": "Panels rarely produce their rated watts, since angle, shade and clouds cut output. Plan on about half in typical use. Place the panel in direct sun and tilt it toward the sun."
  }
];

export const faq = [
  {
    "q": "How many watts do I need to charge a power station at home?",
    "a": "A 100W panel refills a small station over a few sunny days. Bigger stations need more panels or a longer wait."
  },
  {
    "q": "Can I plug a portable panel into any power station?",
    "a": "Not always. Match the connector and the station's maximum solar input. ZOUPW 100W Foldable includes a 5-in-1 cable to cover many plugs."
  },
  {
    "q": "Is a 150W panel worth it over a 100W panel?",
    "a": "Only if your station accepts more than 100W of input. DOKIO 150W Panel Kit lists a note that many stations cap at 60 to 100W."
  },
  {
    "q": "How do I set up a portable panel during an outage?",
    "a": "Place it in direct sun, angle it toward the sun and connect it to the station. FlexSolar 100W Ultralight sets up in moments on a porch or in a yard."
  },
  {
    "q": "How do I store a portable solar panel?",
    "a": "Fold it flat, keep it dry and store it away from sharp objects. A slim panel like FlexSolar 100W Ultralight slides into a closet."
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
    "title": "Best Power Station Under 100",
    "href": "/camp-power/best-power-station-under-100"
  }
];
