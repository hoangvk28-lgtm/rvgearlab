export const guideSlug = "best-12-volt-solar-charge-controller";
export const guideTitle = "5 Best 12 Volt Solar Charge Controller in 2026";
export const metaTitle = "Best 12 Volt Solar Charge Controller in 2026";
export const metaDescription = "Five solar charge controllers for 12V RV and camper batteries, with amp sizing math (watts divided by 12) and notes on PWM, MPPT and lead-acid-only units.";
export const mainKeyword = "best 12 volt solar charge controller";
export const introParagraphs = [
  "Most RV house banks run at 12V, which makes sizing simple: divide your panel watts by 12 to get the minimum controller amps. This guide covers five controllers that work on a 12V battery, from a 20A MPPT with an app to 30A PWM units and a 100A multi-voltage MPPT.",
  "This guide looks at which units are 12V only versus auto-detecting, which name lithium and which are lead-acid only, and what array size each can realistically take. Specs quoted are the ones each listing states."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41vdeeUbUwL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-12-volt-solar-charge-controller-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "20A 12V/24V MPPT Wireless Solar Charge Controller",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41vdeeUbUwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C817H3L1?tag=rvgearlab-20",
    "description": "Bateria Power's 20A MPPT handles 12V or 24V banks, with a phone app and a USE mode for custom battery parameters. Bateria Power's 20A MPPT controller auto-monitors 12V or 24V systems and adds a phone app with a USE mode for custom battery parameters. The listing states that PV voltage cannot exceed 60V and that it is not for higher-voltage batteries.\n\nIt has more tracking sophistication than the PWM units below it and a built-in phone app that Renogy Wanderer Li 30A does not describe. The listing caps PV at 60V, which limits series strings.\n\nBest for a 12V rig with up to a few hundred watts that wants app monitoring. Cold-weather Voc can climb past 60V on long strings, so check your panels' open-circuit voltage first.",
    "specs": [
      "20A MPPT, 12V/24V",
      "App control, custom mode",
      "PV limit 60V"
    ],
    "pros": [
      "Phone app for remote monitoring",
      "USE mode for custom battery parameters",
      "Auto-monitors 12V and 24V systems",
      "MPPT with a stated high tracking efficiency"
    ],
    "cons": [
      "PV input cannot exceed 60V",
      "20A limits the panel wattage"
    ],
    "bestFor": "12V MPPT with app"
  },
  {
    "id": "best-12-volt-solar-charge-controller-2",
    "rank": 2,
    "badge": "Best 30A PWM",
    "name": "Renogy Wanderer Li 30A PWM Solar Charge Controller 12V for Solar Panels",
    "price": "$27.29",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41I-Q4YSrFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07G1PL1B9?tag=rvgearlab-20",
    "description": "Renogy's Wanderer Li is a 12V-only 30A PWM with a four-stage charge that names lithium, AGM, gel and flooded batteries. Renogy's Wanderer Li is a 12V 30A four-stage PWM controller whose listing names lithium, AGM, gel and flooded batteries. It measures 5.5 by 3.9 by 1.8 inches and carries an IP32 waterproof rating, so it suits an indoor or protected compartment.\n\nIt has more amps than Bateria Power 20A but uses PWM, so extra panel voltage is wasted. It also costs more than the Rolokit units.\n\nBest for a 12V RV with one to three panels and a lithium or AGM bank. It is 12V only, so a 24V bank needs a different model, and Bluetooth needs the separate BT-1 module.",
    "specs": [
      "30A PWM, 12V only",
      "5.5 x 3.9 x 1.8 inch body",
      "Lithium, AGM, gel, flooded"
    ],
    "pros": [
      "Four-stage PWM charging with a lithium option",
      "Compact 5.5 by 3.9 by 1.8 inch body",
      "Names lithium, AGM, gel and flooded batteries",
      "Bluetooth possible through a separate BT-1 module"
    ],
    "cons": [
      "12V only, with no 24V support",
      "Waterproofing is only IP32 rated"
    ],
    "bestFor": "12V PWM with lithium"
  },
  {
    "id": "best-12-volt-solar-charge-controller-3",
    "rank": 3,
    "badge": "Best for Growth",
    "name": "Solar Charge Controller 100A 12V 24V 36V 48V Intelligent Recognition LCD Display Battery Intelligent Regulator",
    "price": "$45.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oNd2nkV+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FFSJ7Y88?tag=rvgearlab-20",
    "description": "Qigreesol's 100A model works on 12V, 24V, 36V and 48V and accepts up to 100V of panel input. The listing describes a 100A MPPT unit that accepts up to 100V of panel input and adapts to 12V, 24V, 36V and 48V battery systems. A backlit LCD reports battery voltage, PV and discharge current, temperature and error codes, and the controller can switch a load on a timer or by light level.\n\nIt is far larger than Bateria Power 20A and gives you room to move to a higher-voltage bank later. For a typical 12V trailer it is more capacity than you can use.\n\nBest for a 12V rig that may grow into a bigger system. The amp rating is generous for a small array, so match it to your panel watts rather than paying for headroom you will never use.",
    "specs": [
      "100A MPPT, 12V to 48V",
      "100V max PV input",
      "LCD with dual USB"
    ],
    "pros": [
      "Auto-adapts to 12V, 24V, 36V and 48V systems",
      "Backlit LCD shows voltage, current and error codes",
      "Timed and light-controlled load switching built in",
      "Lists sealed, gel, flooded and LiFePO4 support"
    ],
    "cons": [
      "Rating is far beyond what most RV roofs need",
      "A 100A unit demands thick cable and big fuses"
    ],
    "bestFor": "Room to grow"
  },
  {
    "id": "best-12-volt-solar-charge-controller-4",
    "rank": 4,
    "badge": "Best Budget 30A",
    "name": "30A PWM Solar Charge Controller",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415v2j+wfjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSD6HGGH?tag=rvgearlab-20",
    "description": "Rolokit's 30A PWM works on 12V or 24V lead-acid batteries with an LCD and dual USB ports. Rolokit's single 30A PWM controller auto-adapts to 12V or 24V systems and adds an LCD with dual USB ports. As with its two-pack, the listing says it suits lead-acid batteries only.\n\nIt costs far less than Renogy Wanderer Li 30A but is lead-acid only. Against the Rolokit two-pack it is the single-unit version.\n\nBest for a flooded or AGM 12V bank. Choose it as an inexpensive controller for a flooded or AGM bank, not for lithium.",
    "specs": [
      "30A PWM, 12V/24V",
      "Dual USB, LCD display",
      "Lead-acid batteries"
    ],
    "pros": [
      "Simple 30A PWM at a very low price",
      "LCD with adjustable parameters",
      "Dual USB charging ports",
      "Built-in industrial microcontroller"
    ],
    "cons": [
      "Listing says lead-acid batteries only",
      "PWM design wastes unused panel voltage"
    ],
    "bestFor": "Lead-acid 30A"
  },
  {
    "id": "best-12-volt-solar-charge-controller-5",
    "rank": 5,
    "badge": "Best Two-Pack",
    "name": "2PCS 30A PWM Solar Charge Controller 12V Solar Panel Intelligent Regulator",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/518PyZ6n80L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F42LB87Q?tag=rvgearlab-20",
    "description": "Rolokit's two-pack gives two 30A PWM controllers for 12V or 24V lead-acid systems. This Rolokit listing sells two 30A PWM controllers that auto-detect 12V or 24V systems, each with an LCD and adjustable settings. The listing says they suit lead-acid batteries only and lists overcurrent, short, reverse and open-circuit protection.\n\nIt matches Rolokit 30A on specs but doubles the units. That helps two small systems and is wasted on one.\n\nBest for a trailer plus a second small battery system. A two-pack is only useful if you will use both, for example in a second small system.",
    "specs": [
      "Two 30A PWM units, 12V",
      "12V/24V auto, lead-acid",
      "LCD with adjustable settings"
    ],
    "pros": [
      "Two controllers per order",
      "Built-in industrial microcontroller",
      "LCD allows parameter changes",
      "Overcurrent, short and reverse protection"
    ],
    "cons": [
      "Listing says lead-acid batteries only",
      "PWM design, no voltage conversion"
    ],
    "bestFor": "Two small systems"
  }
];

export const howWeEvaluated = [
  {
    "title": "12V sizing fit",
    "description": "This guide matches each unit's amp rating and wattage limits to a 12V bank using watts divided by 12."
  },
  {
    "title": "Voltage flexibility",
    "description": "12V-only units were compared against auto-detecting 12V/24V and multi-voltage controllers."
  },
  {
    "title": "Battery chemistry",
    "description": "Lithium-capable units were separated from lead-acid-only ones."
  },
  {
    "title": "Regulation type",
    "description": "PWM and MPPT designs were weighed against typical 12V array sizes."
  },
  {
    "title": "Extras",
    "description": "App monitoring, USB ports and displays were counted as secondary."
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
    "subheading": "By 12V Array Wattage",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Up to about 150W, one portable panel",
          "Bateria Power 20A",
          "20A MPPT with a 60V PV limit."
        ],
        [
          "About 200W to 300W with lithium",
          "Renogy Wanderer Li 30A",
          "30A with a lithium option."
        ],
        [
          "About 300W on lead-acid, low budget",
          "Rolokit 30A",
          "30A PWM, lead-acid only."
        ],
        [
          "Two small systems, around 200W each",
          "Rolokit 30A 2-Pack",
          "Two 30A PWM units."
        ],
        [
          "Large array now or soon",
          "Qigreesol 100A",
          "100A with up to 100V PV."
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
          "$0 to $20",
          "Rolokit 30A or Rolokit 30A 2-Pack"
        ],
        [
          "$20 to $50",
          "Renogy Wanderer Li 30A or Qigreesol 100A"
        ],
        [
          "$60 to $70",
          "Bateria Power 20A"
        ]
      ]
    }
  },
  {
    "subheading": "PWM vs MPPT on 12V",
    "cards": [
      {
        "label": "PWM",
        "text": "PWM is simple and cheap and works well with 12V-class panels. Renogy Wanderer Li 30A and the Rolokit units are PWM."
      },
      {
        "label": "MPPT",
        "text": "MPPT recovers extra panel voltage and helps most in cold weather. Bateria Power 20A and Qigreesol 100A are MPPT-style."
      }
    ],
    "note": "Most owners with one to three small panels can use Renogy Wanderer Li 30A, and Bateria Power 20A fits when you want tracking."
  },
  {
    "subheading": "By Battery Chemistry",
    "table": {
      "headers": [
        "Chemistry",
        "Recommended pick"
      ],
      "rows": [
        [
          "LiFePO4 or AGM",
          "Renogy Wanderer Li 30A"
        ],
        [
          "Flooded or AGM only",
          "Rolokit 30A"
        ],
        [
          "Custom battery parameters",
          "Bateria Power 20A"
        ],
        [
          "Mixed or changing banks",
          "Qigreesol 100A"
        ]
      ]
    }
  },
  {
    "subheading": "For Weekend 12V Trailers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a 12V rating, amps above watts divided by 12 and a lithium profile."
      },
      {
        "label": "In this comparison",
        "text": "Renogy Wanderer Li 30A fits a one- to three-panel trailer, and Bateria Power 20A suits a smaller array with an app."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more for MPPT and an app, where Bateria Power 20A or Qigreesol 100A beats the PWM units."
      },
      {
        "label": "Save if",
        "text": "Save if your bank is lead-acid and the array is small, where Rolokit 30A is enough."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Amps for a 12V bank",
    "explanation": "The minimum controller amps for a 12V bank is panel watts divided by 12, so 300W is about 25A and 400W is about 33A. The same wattage needs half the amps on a 24V bank, which is why 12V controllers get large quickly. Add roughly 20 percent headroom and compare to the listed amp rating."
  },
  {
    "criterion": "Panel voltage on a 12V battery",
    "explanation": "On a 12V system, a PWM controller drags the panel down to the battery's level, wasting the difference between a panel's roughly 18V working voltage and the battery. MPPT recovers much of that waste. A single 12V-class panel loses less than a long string."
  },
  {
    "criterion": "Lithium compatibility at 12V",
    "explanation": "A 12V LiFePO4 battery wants an absorption voltage near 14.2 to 14.6V and no equalization. Lead-acid-only units like the Rolokit models cannot be relied on for that. Look for a named lithium mode or user-set voltage."
  },
  {
    "criterion": "12V-only versus auto-detect",
    "explanation": "Some units are fixed 12V, while others auto-detect 12V or 24V. Auto-detect adds a failure mode if the battery is deeply discharged and reads low. Pick fixed 12V if you will never change, and auto-detect only if you might."
  },
  {
    "criterion": "Panel Voc on a 12V bank",
    "explanation": "Open-circuit panel voltage rises in cold weather, so keep the series total below the controller's maximum PV input. Bateria Power 20A lists a 60V limit, which is fine for parallel panels but tight for a series pair of large panels. Check your panel labels."
  }
];

export const faq = [
  {
    "q": "What size controller for a 12V system?",
    "a": "Divide panel watts by 12 and round up. For 300W that is about 25A, so a 30A unit gives margin."
  },
  {
    "q": "What mistake do buyers make with a 12V controller?",
    "a": "Buying a 24V-class panel for a 12V PWM controller. The extra voltage is wasted."
  },
  {
    "q": "Is MPPT worth it at 12V?",
    "a": "For larger arrays or cold climates, yes. For one panel, Rolokit 30A is enough."
  },
  {
    "q": "What is the safest way to wire a 12V controller?",
    "a": "Connect the battery first, then the panels, with a fuse on the battery side. On a 12V controller, double-check polarity at every terminal before powering up and use wire sized for the rated amps."
  },
  {
    "q": "How should I maintain a 12V controller?",
    "a": "On a 12V controller, tighten terminals and inspect cable insulation at the start of each season, and keep vents, fans or heat-sink surfaces free of dust. Check terminals each season and keep vents clear."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Solar Charge Controller",
    "href": "/power-electrical/best-solar-charge-controller"
  },
  {
    "title": "Best MPPT Solar Charge Controller",
    "href": "/power-electrical/best-mppt-solar-charge-controller"
  },
  {
    "title": "Best PWM Solar Charge Controller",
    "href": "/power-electrical/best-pwm-solar-charge-controller"
  },
  {
    "title": "Best Solar Charge Controller For RV",
    "href": "/power-electrical/best-solar-charge-controller-for-rv"
  }
];
