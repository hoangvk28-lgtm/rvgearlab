export const guideSlug = "best-lifepo4-solar-generators";
export const guideTitle = "6 Best LIFEPO4 Solar Generators in 2026";
export const metaTitle = "Best LIFEPO4 Solar Generators in 2026";
export const metaDescription = "Six solar generators with LiFePO4 batteries from 256Wh to 3584Wh, compared on cycle life, output, panels included and how much camp each can run.";
export const mainKeyword = "best lifepo4 solar generators";
export const introParagraphs = [
  "LiFePO4 (also called LFP) cells matter for solar generators because they tolerate thousands of charge cycles and heat better than older lithium types. Every pick here states LiFePO4 or LFP in its own listing, and they span a pocketable 256Wh unit to a home-scale 3.6kWh machine.",
  "Each unit was compared on stated chemistry and cycle life, continuous output, capacity, whether solar panels are in the box and weight. Prices range widely, so the guide ties each model to a clear job."
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
    "id": "best-lifepo4-solar-generators-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Jackery Solar Generator 1000 v2 and 200W Solar Panel",
    "price": "$879.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Li2jDBgqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D2L1G66J?tag=rvgearlab-20",
    "description": "Jackery's Solar Generator 1000 v2 bundles a 1070Wh LFP station with a 200W panel, putting out 1500W AC and a 3000W surge. Three pure sine wave AC sockets sit beside USB-C, USB-A and car outputs, and the cells keep over 70 percent capacity after 4,000 cycles. An app-activated one hour emergency charge and a 30 dB quiet charging mode are listed.\n\nIt balances capacity, a bundled panel and brand support better than any other pick here. Against the BROWEY, it costs more and adds a real 200W panel, and against the 2000 v2, it is smaller and cheaper.\n\nIt suits weekend campers and van owners who want a fridge, lights and devices powered for a day. It is a ready bundle.",
    "specs": [
      "1070Wh LFP, 1500W/3000W",
      "200W panel included",
      "4,000 cycles to 70%"
    ],
    "pros": [
      "4,000 cycle LFP battery",
      "Panel included in the bundle",
      "One hour emergency charge",
      "30 dB quiet charging mode"
    ],
    "cons": [
      "Panel connector is Jackery-specific",
      "Costs several times the small units"
    ],
    "bestFor": "Weekend camps and vans",
    "take": "A balanced LFP station with a 200W panel in the box.",
    "catch": "The panel uses a Jackery-specific connector."
  },
  {
    "id": "best-lifepo4-solar-generators-2",
    "rank": 2,
    "badge": "Best Mid-Size Power",
    "name": "Jackery Explorer 2000 v2 and 2x200W Solar Panels",
    "price": "$1649.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ripynhqTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DG8NXM21?tag=rvgearlab-20",
    "description": "The Jackery Explorer 2000 v2 lists 2042Wh of LiFePO4, 2200W AC output on three ports and a weight of 39.5 pounds. AC charging reaches 80 percent in 66 minutes, emergency super charging fills it in 102 minutes, and solar charging takes 6 hours with 400W of panels. UPS switchover is within 20ms, and UL1778 testing is listed.\n\nIt holds nearly twice the energy of the 1000 v2 and runs a 2200W load. The listing calls it 41 percent lighter and 34 percent smaller than conventional 2kWh LiFePO4 stations.\n\nIt suits RV trips and long weekends with a microwave, a space heater on low or a camp kitchen. Two 200W panels are bundled.",
    "specs": [
      "2042Wh LiFePO4, 2200W AC",
      "39.5 lbs, 80% in 66 minutes",
      "Two 200W panels, UPS 20ms"
    ],
    "pros": [
      "2200W output for kitchen loads",
      "Fast AC and emergency charging",
      "UL1778 testing listed",
      "Two 200W panels in the bundle"
    ],
    "cons": [
      "Panels may ship separately",
      "Heavy at 39.5 pounds"
    ],
    "bestFor": "RV trips and kitchen loads",
    "take": "A 2kWh LiFePO4 station that runs bigger loads.",
    "catch": "A 2042Wh unit weighs 39.5 pounds, and the panels may arrive separately."
  },
  {
    "id": "best-lifepo4-solar-generators-3",
    "rank": 3,
    "badge": "Best Built-In Panel",
    "name": "BROWEY 1600W",
    "price": "$599.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41pxALKZJyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F8QRW8XK?tag=rvgearlab-20",
    "description": "The BROWEY lists 1024Wh of LiFePO4, 1600W AC output with 3200W peak and a built-in solar panel. It has eight ports including a 100W USB-C, a 3000-cycle rating to 80 percent capacity, a battery management system and an iF Design Award. AC and 100W USB-C input recharge 80 percent in 3 hours.\n\nIts built-in panel is the only one on the list, so solar works without carrying panels. Compared with the Jackery 1000 v2, it offers 100 more watts of output at a lower price, with a small built-in panel.\n\nIt suits campers who want a self-contained unit for emergencies and car camping. The accessory bag and 10 DC adapters are included.",
    "specs": [
      "1024Wh LiFePO4, 1600W",
      "3200W peak, built-in panel",
      "3000 cycles to 80%"
    ],
    "pros": [
      "Built-in solar panel",
      "1600W output for the price",
      "8 ports with 100W USB-C",
      "Includes DC adapters"
    ],
    "cons": [
      "Built-in panel gives only 40W",
      "Fewer cycles than the Jackery"
    ],
    "bestFor": "Self-contained car camping",
    "take": "A 1600W LiFePO4 unit with a panel built into the case.",
    "catch": "The built-in panel is small, so recharge from AC or a car."
  },
  {
    "id": "best-lifepo4-solar-generators-4",
    "rank": 4,
    "badge": "Best Small Power Station",
    "name": "BLUETTI Elite 30 V2 Portable Power Station 288Wh 600W LFP Solar Generator",
    "price": "$249.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YTEqBbTsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F42HLLSC?tag=rvgearlab-20",
    "description": "The Elite 30 V2 from BLUETTI packs 288Wh of LFP cells behind a 600W continuous inverter and 1500W surge in Power Lifting Mode. It weighs 9.4 pounds, recharges from the wall at up to 380W (0 to 80 percent in 45 minutes) and includes a 10ms UPS switchover.\n\nIts 600W output is more than twice the ALLWEI's 300W, in a body only 3 pounds heavier. It costs about $100 more than the ALLWEI.\n\nIt suits tent campers who run a laptop, a small fan or a light string overnight. The fast recharge fits a quick lunch stop.",
    "specs": [
      "288Wh LFP, 600W continuous",
      "1500W surge, 10ms UPS",
      "380W wall charge, 9.4 lbs"
    ],
    "pros": [
      "600W output for larger devices",
      "10ms UPS switchover",
      "0 to 80% recharge in 45 minutes",
      "LFP chemistry"
    ],
    "cons": [
      "288Wh is still modest",
      "No solar panel in the box"
    ],
    "bestFor": "Small AC loads in a tent",
    "take": "A small LFP station with a strong 600W inverter.",
    "catch": "288Wh limits runtime on anything over 100 watts."
  },
  {
    "id": "best-lifepo4-solar-generators-5",
    "rank": 5,
    "badge": "Best Budget",
    "name": "ALLWEI Portable Power Station 300W",
    "price": "$149.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41lUtZAkajL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08CXN4TZR?tag=rvgearlab-20",
    "description": "The ALLWEI lists 256Wh of LiFePO4, 300W continuous output and 600W surge on pure sine wave. It has six outputs including a USB-C PD 60W port, 3000 cycles, a 6.4 pound body and an LED light with SOS mode. Recharge takes about 3.5 to 4 hours from the wall or 4 to 5 hours from a 100W panel.\n\nIt is the lightest and cheapest on the list. Compared with the BLUETTI, it has half the output and costs about $100 less.\n\nIt suits backpack campers and day-trippers charging phones, a tablet or a light. A panel is sold separately.",
    "specs": [
      "256Wh LiFePO4, 300W",
      "600W surge, 3000 cycles",
      "6.4 lbs, USB-C PD 60W"
    ],
    "pros": [
      "Lowest price on the list",
      "6.4 pounds",
      "3000 cycle LiFePO4",
      "USB-C PD 60W"
    ],
    "cons": [
      "Only 256Wh of energy",
      "No solar panel in the box"
    ],
    "bestFor": "Phones, tablets and lights",
    "take": "The cheapest and lightest LiFePO4 station here.",
    "catch": "256Wh runs out quickly with anything over 100 watts."
  },
  {
    "id": "best-lifepo4-solar-generators-6",
    "rank": 6,
    "badge": "Best for Home Backup",
    "name": "Jackery HomePower 3600 Plus & 2x200W Solar Panels",
    "price": "$2289.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/417PSNnMsLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FMXCPWBN?tag=rvgearlab-20",
    "description": "The Jackery HomePower 3600 Plus lists 3584Wh, 3600W AC output (7200W in parallel with dual 120V and 240V) and ceramic membrane LFP cells with 6,000 cycles and a 10-year life. It recharges in 2 hours through hybrid AC and DC and expands to 21kWh per unit. Two 200W panels come with the bundle, shipped separately.\n\nIt is the largest and priciest on the list, with about 3.3 times the energy of the 1000 v2 and a 10-year life. Compared with the 2000 v2, it adds 240V and about 1500Wh more capacity.\n\nIt suits homeowners and big-rig owners who want a transfer-switch-ready backup. It runs pumps, heaters and dryers.",
    "specs": [
      "3584Wh LFP, 3600W AC",
      "120V and 240V in parallel",
      "6,000 cycles, 10-year life"
    ],
    "pros": [
      "Largest capacity on the list",
      "240V output in parallel",
      "6,000 cycle LFP",
      "Expands to 21kWh per unit"
    ],
    "cons": [
      "Priciest unit on the list",
      "Too heavy for casual camping"
    ],
    "bestFor": "Home backup and big rigs",
    "take": "The home-scale LFP station, with 240V and 6,000 cycles.",
    "catch": "It is a home machine, not a camp carry."
  }
];

export const howWeEvaluated = [
  {
    "title": "Chemistry",
    "description": "Only listings that state LiFePO4 or LFP were included."
  },
  {
    "title": "Cycle life",
    "description": "Stated cycles and the capacity retained were compared."
  },
  {
    "title": "Output and capacity",
    "description": "Continuous watts and watt-hours were compared."
  },
  {
    "title": "Solar in the box",
    "description": "Included or built-in panels were noted."
  },
  {
    "title": "Weight",
    "description": "Printed weights were compared."
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
    "subheading": "By Camp Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Backpack or day trip",
          "ALLWEI 300W",
          "256Wh at 6.4 pounds."
        ],
        [
          "Tent with a laptop or small fan",
          "BLUETTI Elite 30 V2",
          "600W and 288Wh."
        ],
        [
          "Car camping, self-contained",
          "BROWEY 1600W",
          "Built-in panel."
        ],
        [
          "Weekend van or small RV",
          "Jackery 1000 v2",
          "1070Wh and a panel."
        ],
        [
          "RV with kitchen loads",
          "Jackery 2000 v2",
          "2200W output."
        ],
        [
          "Home backup",
          "Jackery 3600 Plus",
          "3584Wh and 240V."
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
          "$140 to $250",
          "ALLWEI 300W or BLUETTI Elite 30 V2"
        ],
        [
          "$590 to $880",
          "BROWEY 1600W or Jackery 1000 v2"
        ],
        [
          "$1640 to $2290",
          "Jackery 2000 v2 or Jackery 3600 Plus"
        ]
      ]
    }
  },
  {
    "subheading": "Small Station vs Large Station",
    "cards": [
      {
        "label": "Small",
        "text": "Light, cheap and easy to carry, with limited runtime. The ALLWEI 300W and BLUETTI Elite 30 V2 are in this group."
      },
      {
        "label": "Large",
        "text": "More output and energy for kitchens and RVs, at higher weight and price. The Jackery 1000 v2, Jackery 2000 v2, BROWEY 1600W and Jackery 3600 Plus are in this group."
      }
    ],
    "note": "Most campers should pick the Jackery 1000 v2 for a day of power."
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
          "Under $300",
          "ALLWEI 300W"
        ],
        [
          "Mid, small",
          "BLUETTI Elite 30 V2"
        ],
        [
          "Mid, 1kWh",
          "BROWEY 1600W"
        ],
        [
          "Premium",
          "Jackery 1000 v2"
        ]
      ]
    }
  },
  {
    "subheading": "Weekend Camps With a Fridge",
    "cards": [
      {
        "label": "Look for",
        "text": "A LiFePO4 battery near 1000Wh, a panel and an inverter above the fridge's start watts."
      },
      {
        "label": "In this comparison",
        "text": "The Jackery 1000 v2 lists 1070Wh with a 200W panel, and the BROWEY 1600W has a built-in panel."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Jackery 1000 v2 or Jackery 2000 v2 for a bundle with panels and a strong brand."
      },
      {
        "label": "Save if",
        "text": "Save with the ALLWEI 300W for phones and lights, or the BROWEY 1600W for a built-in panel."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Why LiFePO4",
    "explanation": "LiFePO4 cells handle thousands of cycles and run cooler than older lithium types. They are also heavier per watt-hour. Look for LiFePO4 or LFP on the listing, not just the word lithium."
  },
  {
    "criterion": "Cycle life",
    "explanation": "3000 cycles to 80 percent is about 8 years of daily use, and 6,000 cycles doubles that. Most camping use is far lighter than daily. Look for the cycle count and the percent retained."
  },
  {
    "criterion": "Output and capacity",
    "explanation": "Output watts set what you can run, and watt-hours set how long. A 1000Wh unit runs a 100W load for about 8 hours after losses. Match both to your gear."
  },
  {
    "criterion": "Cold charging",
    "explanation": "LiFePO4 cells should not charge below freezing unless the unit warms them. Keep the station inside a tent or vehicle on cold nights. Check the charging temperature range."
  },
  {
    "criterion": "Panels and connectors",
    "explanation": "Panels may be sold separately or use a brand connector. A bundle saves matching work. Check the connector type and the solar input limit."
  }
];

export const faq = [
  {
    "q": "Are LiFePO4 solar generators worth it?",
    "a": "For repeated use, yes. LiFePO4 cells last thousands of cycles. The ALLWEI 300W and Jackery 3600 Plus both state it."
  },
  {
    "q": "What is the biggest mistake with solar generators?",
    "a": "Buying by watts and ignoring watt-hours. A 1600W unit with 1024Wh runs a heater for under an hour. Match capacity to the job."
  },
  {
    "q": "Is the Jackery worth it over the BROWEY?",
    "a": "If you want a real 200W panel and a bigger brand network, yes. The BROWEY 1600W costs less and has a built-in panel."
  },
  {
    "q": "How do I charge it with solar?",
    "a": "Place the panel in full sun, connect it to the solar input and check the input watts. Keep the station in shade."
  },
  {
    "q": "Can I use it with a CPAP?",
    "a": "Only if the maker of the device approves it. Check your device's watts and the station's pure sine wave output, and never rely on estimates for runtime."
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
