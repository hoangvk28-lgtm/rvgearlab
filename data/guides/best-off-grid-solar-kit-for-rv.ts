export const guideSlug = "best-off-grid-solar-kit-for-rv";
export const guideTitle = "4 Best Off Grid Solar Kit For RV in 2026";
export const metaTitle = "Best Off Grid Solar Kit For RV in 2026";
export const metaDescription = "Four off-grid RV solar kits compared by daily watt-hours, controller type, voltage and what is in the box, from a 100W starter to a 1440W system.";
export const mainKeyword = "best off grid solar kit for rv";
export const introParagraphs = [
  "A solar kit's nameplate watts mean little until you convert them into daily watt-hours and check that the controller and battery voltage match. Four hours of good sun turns 400W into roughly 1,600Wh, before wiring and heat losses. We compared four kits on what they actually include, how they charge, and what each can run, and we flag the specs a listing leaves vague."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/51EqzMZUi3L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-off-grid-solar-kit-for-rv-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ECO-WORTHY 1.6KWH Complete Solar Panel Kit 400W 12V for RV Off Grid",
    "price": "$1149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51EqzMZUi3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BN5ZWPK2?tag=rvgearlab-20",
    "description": "The ECO-WORTHY is a full 12V kit at $1,149.99: four 100W bifacial panels, a 40A MPPT controller, a 2000W pure sine inverter and two 12V 100Ah lithium batteries with a Bluetooth module. It claims 1.6kWh a day under 4 hours of sun.\n\nIt costs $960.00 more than the ZOUPW 220W but includes the battery and inverter that one lacks, and it is $1,349.01 below the AUECOOR 1440W. Pick this if you want one box for a mid-size trailer. Caveat: 400W of panels fills 200Ah slowly, and the listing's daily Wh figures contradict each other.",
    "specs": [
      "4 x 100W panels, 40A MPPT",
      "2000W inverter, 2 x 12V 100Ah",
      "Bluetooth module included"
    ],
    "pros": [
      "Panels, MPPT, inverter and batteries all in one kit",
      "Two 100Ah lithium batteries give about 2.5kWh",
      "MPPT controller beats PWM in weak sun"
    ],
    "cons": [
      "Listing quotes conflicting daily watt-hour numbers",
      "Only 400W of solar for 200Ah of battery"
    ],
    "bestFor": "A weekend and week-long trailer starting from scratch"
  },
  {
    "id": "best-off-grid-solar-kit-for-rv-2",
    "rank": 2,
    "badge": "Best for Large Rigs",
    "name": "3000W 24V Solar Power System Complete Kit with 1440W",
    "price": "$2499.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51aTr9vRRDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G8KQQKM1?tag=rvgearlab-20",
    "description": "The AUECOOR is a $2,499 system with twelve 120W panels totaling 1440W, a 60A MPPT controller, a 3000W pure sine inverter, a 4-to-1 combiner box and a lithium battery listed as 5.12kWh. Four hours of sun would give about 5,760Wh at nameplate.\n\nIt runs $1,349.01 above the ECO-WORTHY 400W and brings 3.6 times the panel wattage. Pick this if you have roof space for twelve panels and heavy loads. Caveat: the title says 24V while the battery is listed at 12.8V 100Ah, so confirm the system voltage with the seller before ordering.",
    "specs": [
      "12 x 120W panels, 60A MPPT",
      "3000W inverter, 4-to-1 combiner",
      "5.12kWh battery listed"
    ],
    "pros": [
      "1440W of solar charges a large bank in a day",
      "Combiner box includes DC surge protection",
      "3000W inverter can run an air conditioner"
    ],
    "cons": [
      "System voltage is stated inconsistently in the listing",
      "Twelve panels need a lot of roof or ground space"
    ],
    "bestFor": "A big fifth wheel or a stationary cabin-style rig"
  },
  {
    "id": "best-off-grid-solar-kit-for-rv-3",
    "rank": 3,
    "badge": "Best Panel Kit Add-On",
    "name": "ZOUPW 220 Watt Solar Panel Kit for 12V/24V Battery",
    "price": "$189.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/519J7Gb7XLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FX9RW11B?tag=rvgearlab-20",
    "description": "The ZOUPW is a $189.99 panel kit with two 110W N-type panels, a 30A PWM controller with LCD and dual USB, plus brackets and cables. It senses 12V or 24V and lists compatibility with lithium, gel, sealed and flooded batteries, with 1.1kWh a day at 5 hours of sun.\n\nIt sits $80.00 above the Topsolar 100W for double the wattage, and $960.00 below the ECO-WORTHY 400W, but it has no battery or inverter. Pick this if you already own a bank and need panels. Caveat: PWM wastes some panel output compared with MPPT.",
    "specs": [
      "2 x 110W N-type panels",
      "30A PWM, 12V/24V auto-sense",
      "10 year panel warranty listed"
    ],
    "pros": [
      "Controller detects 12V or 24V automatically",
      "Panel warranty is 10 years, controller 2 years",
      "Double the wattage of Topsolar 100W for $80.00 more"
    ],
    "cons": [
      "PWM controller wastes some panel output",
      "No battery or inverter in the box"
    ],
    "bestFor": "Adding charging to a bank you already own"
  },
  {
    "id": "best-off-grid-solar-kit-for-rv-4",
    "rank": 4,
    "badge": "Best Budget Starter",
    "name": "Topsolar Solar Panel Kit 100 Watt 12 Volt Monocrystalline Off Grid System",
    "price": "$109.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51soAlJOb1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07S2B2QGV?tag=rvgearlab-20",
    "description": "The Topsolar is a $109.99 starter with one 100W monocrystalline panel, a 30A PWM controller and Z brackets. The panel measures 45.6 by 20 inches, weighs 15.84 lb and lists Vmp 23V and Imp 4.3A, with wind and snow ratings.\n\nIt costs $80.00 less than the ZOUPW 220W and gives you half the watts, enough for roughly 400Wh in 4 sun hours. Pick this if you only need to keep a battery topped up. Caveat: there is no battery or inverter, and 100W will not run much.",
    "specs": [
      "100W, Vmp 23V, Imp 4.3A",
      "30A PWM controller",
      "15.84 lb, 45.6 x 20 in"
    ],
    "pros": [
      "Full panel dimensions and electrical specs are listed",
      "Cheapest entry at $109.99, mounts included",
      "Light at 15.84 lb for a roof"
    ],
    "cons": [
      "100W gives only about 400Wh on a good day",
      "No battery or inverter included, so budget extra for both"
    ],
    "bestFor": "Keeping a single house battery topped up"
  }
];

export const howWeEvaluated = [
  {
    "title": "Daily watt-hours",
    "description": "We converted nameplate watts into estimated daily Wh using 4 to 5 sun hours instead of trusting headline output."
  },
  {
    "title": "Controller type",
    "description": "We compared MPPT against PWM and checked that the controller amps match the panel and battery voltage."
  },
  {
    "title": "Kit completeness",
    "description": "We listed which kits include a battery, inverter and combiner, and which need extra purchases."
  },
  {
    "title": "Voltage clarity",
    "description": "We checked that system voltage, battery voltage and inverter input are stated consistently."
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
    "subheading": "By Daily Energy Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Keep one battery topped up, lights and phones",
          "Topsolar 100W",
          "About 400Wh in 4 sun hours covers small loads."
        ],
        [
          "Top up an existing bank at about 1kWh a day",
          "ZOUPW 220W",
          "220W gives roughly 1.1kWh at 5 sun hours with a 30A PWM controller."
        ],
        [
          "Run a fridge, lights and a TV off a new system",
          "ECO-WORTHY 400W",
          "1.6kWh a day with a 2000W inverter and about 2.5kWh of battery."
        ],
        [
          "Run an air conditioner or heavy loads",
          "AUECOOR 1440W",
          "1440W of panels and a 3000W inverter handle large daily use."
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
          "$100 to $190",
          "Topsolar 100W or ZOUPW 220W"
        ],
        [
          "$1140 to $2500",
          "ECO-WORTHY 400W or AUECOOR 1440W"
        ]
      ]
    }
  },
  {
    "subheading": "Complete Kit vs Panel Kit",
    "cards": [
      {
        "label": "Complete kit",
        "text": "Includes panels, controller, inverter and batteries, so wiring is the only task. ECO-WORTHY 400W and AUECOOR 1440W are in this group."
      },
      {
        "label": "Panel kit",
        "text": "Includes panels and a controller only, so you choose battery and inverter. ZOUPW 220W and Topsolar 100W fit here."
      }
    ],
    "note": "Most new owners should default to a complete kit like ECO-WORTHY 400W unless they already own a battery bank."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Best match",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $150",
          "Topsolar 100W"
        ],
        [
          "$150 to $250",
          "ZOUPW 220W"
        ],
        [
          "$1,000 to $1,500",
          "ECO-WORTHY 400W"
        ],
        [
          "Over $2,000",
          "AUECOOR 1440W"
        ]
      ]
    }
  },
  {
    "subheading": "For an Off-Grid Week With No Hookups Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Daily watt-hours covering your loads, MPPT control and enough battery for two cloudy days."
      },
      {
        "label": "In this comparison",
        "text": "The ECO-WORTHY 400W meets this at about 1.6kWh and 2.5kWh of battery, while the AUECOOR 1440W is the choice if you run an air conditioner."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the AUECOOR 1440W if you run heavy loads, because its 1440W of panels recovers a big bank in one sunny day."
      },
      {
        "label": "Save if",
        "text": "Save with the Topsolar 100W if you only maintain one battery, at $109.99 and enough for small loads."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watts to daily watt-hours",
    "explanation": "Nameplate watts are a peak figure under ideal sun, so daily energy is watts times sun hours, minus losses. 400W for 4 hours gives 1,600Wh before roughly 15 to 25 percent of wiring, heat and controller loss. Multiply the panel total by 4 and subtract a fifth to estimate real harvest."
  },
  {
    "criterion": "MPPT versus PWM",
    "explanation": "An MPPT controller converts extra panel voltage into extra charging current, while PWM simply connects the panel to the battery. In weak sun or cold, MPPT can recover noticeably more energy. Check the controller name on the listing; the ECO-WORTHY 400W and AUECOOR 1440W are MPPT, the other two are PWM."
  },
  {
    "criterion": "System voltage match",
    "explanation": "Panels, controller, battery and inverter must agree on 12V or 24V, or the kit will not work. A listing that mixes a 24V title with a 12.8V battery, as the AUECOOR 1440W does, needs a question to the seller. Confirm the inverter input voltage and controller auto-detect before buying."
  },
  {
    "criterion": "Controller amps and panel wattage",
    "explanation": "A controller has a maximum charging current, so a 40A unit on 12V handles roughly 500W of panels. Oversized arrays waste output past that point. Divide controller amps times battery volts to find its wattage ceiling and compare with your panel total."
  },
  {
    "criterion": "Battery capacity versus recharge",
    "explanation": "A 200Ah 12V bank holds about 2.5kWh, and 400W of panels refills about 1.6kWh a day. Two cloudy days can leave the bank empty before it recovers. Match panel daily Wh to what you use, and keep reserves for two low-sun days."
  }
];

export const faq = [
  {
    "q": "How much solar do I need for a travel trailer?",
    "a": "Add up daily watt-hours of your loads, then divide by about 4 sun hours and 0.8 for losses. A fridge, lights and a laptop often land near 300 to 400W of panels."
  },
  {
    "q": "Can I add panels to a kit later?",
    "a": "Only up to the controller's current and voltage limits, so check the amps. The ZOUPW 220W lists expandable design, while the 30A PWM limit caps how much you can add."
  },
  {
    "q": "Does the ECO-WORTHY 400W run an air conditioner?",
    "a": "Not reliably. A 2000W inverter and 2.5kWh battery cannot sustain a typical 13,500 BTU unit for long, and the AUECOOR 1440W is better suited."
  },
  {
    "q": "Do I need a combiner box?",
    "a": "Only when wiring many panels in parallel. The AUECOOR 1440W includes a 4-to-1 combiner with surge protection for its twelve panels."
  },
  {
    "q": "Is PWM good enough?",
    "a": "For topping up a battery on a small system, yes. For a daily-use bank, MPPT recovers more energy, which is why the ECO-WORTHY 400W ranks above the PWM-only kits."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Lightweight Solar Panel For RV",
    "href": "/power-electrical/best-lightweight-solar-panel-for-rv"
  },
  {
    "title": "Best Flexible Solar Panel For RV",
    "href": "/power-electrical/best-flexible-solar-panel-for-rv"
  },
  {
    "title": "Best Rigid Solar Panel For RV",
    "href": "/power-electrical/best-rigid-solar-panel-for-rv"
  },
  {
    "title": "Best 100 Watt RV Solar Panel",
    "href": "/power-electrical/best-100-watt-rv-solar-panel"
  }
];
