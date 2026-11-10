export const guideSlug = "best-solar-panels-under-75";
export const guideTitle = "5 Best Solar Panels Under 75 in 2026";
export const metaTitle = "Best Solar Panels Under 75 in 2026";
export const metaDescription = "Best solar panels under $75: five 30 to 100W panels compared on watts, frameless and foldable designs, controllers and fit for RVs and camping.";
export const mainKeyword = "best solar panels under 75";
export const introParagraphs = [
  "Seventy-five dollars is the tier where 100W panels are common, so this guide is about picking the right kind of 100W panel. The five picks run from about $31 to $60 and include a frameless 24V panel, a rigid 12V panel, a kit with a controller and two smaller panels.",
  "More watts alone does not make a better panel at this price. The notes explain which are good for a roof and which are better for a bag."
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
    "id": "best-solar-panels-under-75-1",
    "rank": 1,
    "badge": "Best Value Under $75",
    "name": "STAR 100 Watt Solar Panel",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31V1k93DfnL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DD4BNTG4?tag=rvgearlab-20",
    "description": "STAR is a 100W frameless panel with 25 percent cells, listed as a 24V panel and certified to ETL, ISO9001 and CE standards. The frameless design stops dust and water from building up at the edge, and the maker claims 15 percent more output from a clean surface.\n\nAt about $60 it costs $10 more than the HQST, and adds a self-cleaning, low-maintenance design. The Sanpyl is $29 cheaper and includes a controller.\n\nChoose it for an RV roof where you want fewer chores and snow that slides off. A 24V panel suits a 24V bank, or a 12V battery through an MPPT controller.",
    "specs": [
      "100W frameless, 25% cells",
      "24V panel, ETL and CE certified",
      "Self-cleaning edge design"
    ],
    "pros": [
      "Frameless edge sheds dust and snow",
      "25 percent efficient cells",
      "ETL, ISO9001 and CE certifications",
      "100W at under $60"
    ],
    "cons": [
      "24V panel needs an MPPT controller for 12V",
      "Frameless glass needs careful handling"
    ],
    "bestFor": "RV roofs",
    "take": "A low-maintenance 100W panel for roofs.",
    "catch": "Pair it with an MPPT controller."
  },
  {
    "id": "best-solar-panels-under-75-2",
    "rank": 2,
    "badge": "Best 12V Panel",
    "name": "HQST 100W 12V Solar Panel",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41XfEtRGmNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H4152J7K?tag=rvgearlab-20",
    "description": "HQST is a 100W 12V monocrystalline panel with Grade A+ cells at up to 23 percent efficiency, 31.8 by 27.5 by 1.18 inches in size and an IP65 junction box. It resists 2400Pa wind and 5400Pa snow and has pre-drilled mounting holes.\n\nAt about $50 it is the pick that connects directly to a 12V controller with no 24V conversion. The STAR costs $10 more for a different design.\n\nChoose it for a van, a shed or a boat with a standard 12V battery bank. It carries a 5-year product assurance.",
    "specs": [
      "100W 12V, up to 23% efficiency",
      "31.8 x 27.5 x 1.18 inches",
      "IP65 box, 5-year assurance"
    ],
    "pros": [
      "12V panel works with any PWM controller",
      "Wind and snow load ratings",
      "Pre-drilled mounting holes",
      "5-year product assurance"
    ],
    "cons": [
      "Rigid, not foldable",
      "Needs a controller"
    ],
    "bestFor": "12V vans, sheds and boats",
    "take": "The simplest 100W panel for a 12V bank.",
    "catch": "Do not forget the controller."
  },
  {
    "id": "best-solar-panels-under-75-3",
    "rank": 3,
    "badge": "Best Kit With Controller",
    "name": "Sanpyl 100W 12V Solar Panel Kit",
    "price": "$30.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41HcPu2itxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJXNQ911?tag=rvgearlab-20",
    "description": "Sanpyl is a 100W monocrystalline panel kit at 23 percent efficiency with a 12V controller that has USB, Type-C and DC outputs and a display for voltage, current and power. The frame is corrosion-resistant aluminum and the junction box and connector are IP67 rated.\n\nAt about $31 it is the cheapest 100W option and includes the controller that the HQST and STAR leave out. The panel itself is less proven than the HQST's.\n\nChoose it for a first solar setup where you want a controller included. It suits small 12V batteries and USB charging.",
    "specs": [
      "100W kit, 23% efficiency",
      "12V controller with display",
      "USB, Type-C and DC outputs"
    ],
    "pros": [
      "Controller included in the box",
      "Display shows voltage and current",
      "IP67 junction box and connector",
      "Lowest price for 100W"
    ],
    "cons": [
      "Brand is little known",
      "Controller outputs are small"
    ],
    "bestFor": "First-time solar setup",
    "take": "A complete 100W kit for about $31.",
    "catch": "Treat it as a starter system."
  },
  {
    "id": "best-solar-panels-under-75-4",
    "rank": 4,
    "badge": "Best Foldable Pack",
    "name": "MARBERO Portable Solar Panel 30W Solar Panel Charger 23% High Efficiency Foldable Solar Panels QC3.0 USB & DC ",
    "price": "$48.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41MicNx9-aL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B092872NYT?tag=rvgearlab-20",
    "description": "MARBERO is a foldable 30W panel measuring 8.9 by 12 by 1.8 inches folded and weighing 2.4 lb. It has a USB-C port with 5, 9 and 12V profiles, a QC3.0 port and a DC output, and an IP65 rating.\n\nAt about $49 it is the only portable pick here, and the 30W is a third of the output of the 100W panels. It trades output for size.\n\nChoose it for hiking and tent camping, to keep phones and small power banks full. It folds to the size of a laptop bag.",
    "specs": [
      "30W foldable, 2.4 lb",
      "USB-C 5/9/12V, QC3.0, DC",
      "8.9 x 12 x 1.8 in folded"
    ],
    "pros": [
      "Folds to laptop-bag size",
      "USB-C with voltage profiles",
      "DC adapters for small stations",
      "IP65 rating"
    ],
    "cons": [
      "Only 30W of output",
      "Costs more than the 100W kits"
    ],
    "bestFor": "Hiking and tents",
    "take": "A pack-size panel for phones.",
    "catch": "Plan on a slow charge for big batteries."
  },
  {
    "id": "best-solar-panels-under-75-5",
    "rank": 5,
    "badge": "Best 50W Option",
    "name": "Callsun 50 Watt Solar Panel",
    "price": "$43.69",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41pgRw+njcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DNJK223C?tag=rvgearlab-20",
    "description": "Callsun pairs 16BB N-type cells with low-iron tempered glass in a 50W panel and adds an IP67 junction box. Either a PWM or an MPPT controller will drive it, and 12V AGM, gel and lithium banks all suit it.\n\nAt about $44 it is the smallest and cheapest rigid panel of the five. It makes half the output of the HQST in a smaller footprint.\n\nChoose it for a small trailer battery, a cabin pump or a tender. It suits compact roofs.",
    "specs": [
      "50W N-type, 25% efficiency",
      "IP67 junction box",
      "Low-iron tempered glass"
    ],
    "pros": [
      "N-type cells at 25 percent",
      "IP67 junction box",
      "Pre-drilled mounting holes",
      "Works with PWM and MPPT"
    ],
    "cons": [
      "Half the output of a 100W panel",
      "Not foldable"
    ],
    "bestFor": "Small 12V loads",
    "take": "A compact, N-type panel for tenders.",
    "catch": "Choose a 100W panel for more than a tender."
  }
];

export const howWeEvaluated = [
  {
    "title": "Watts",
    "description": "Output from 30W to 100W was compared against price."
  },
  {
    "title": "Voltage",
    "description": "12V and 24V panels were separated, since they need different controllers."
  },
  {
    "title": "Design",
    "description": "Frameless, rigid and foldable designs were compared."
  },
  {
    "title": "Controller",
    "description": "Whether a controller is included was noted."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is at or under $75, and the top pick offers the best combination of watts and design."
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
          "RV roof, low maintenance",
          "STAR 100W Frameless",
          "Self-cleaning edge."
        ],
        [
          "12V van or shed",
          "HQST 100W",
          "12V and simple."
        ],
        [
          "First kit with controller",
          "Sanpyl 100W Kit",
          "Controller included."
        ],
        [
          "Hiking and phones",
          "MARBERO 30W Foldable",
          "2.4 lb foldable."
        ],
        [
          "Small tender",
          "Callsun 50W",
          "50W N-type."
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
          "$30 to $50",
          "Sanpyl 100W Kit or Callsun 50W"
        ],
        [
          "$40 to $50",
          "MARBERO 30W Foldable or HQST 100W"
        ],
        [
          "$50 to $60",
          "STAR 100W Frameless"
        ]
      ]
    }
  },
  {
    "subheading": "Rigid vs foldable",
    "cards": [
      {
        "label": "Rigid",
        "text": "The STAR 100W Frameless, HQST 100W, Sanpyl 100W Kit and Callsun 50W suit fixed mounting. They give more watts per dollar."
      },
      {
        "label": "Foldable",
        "text": "The MARBERO 30W Foldable packs small and charges phones. It gives far fewer watts."
      }
    ],
    "note": "Most buyers should take the HQST 100W for a fixed install."
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
          "About $31",
          "Sanpyl 100W Kit"
        ],
        [
          "About $44",
          "Callsun 50W"
        ],
        [
          "About $49",
          "MARBERO 30W Foldable"
        ],
        [
          "About $50",
          "HQST 100W"
        ],
        [
          "About $60",
          "STAR 100W Frameless"
        ]
      ]
    }
  },
  {
    "subheading": "For an RV roof specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for 100W or more, mounting holes or a low-profile design, and an MPPT controller for a 24V panel."
      },
      {
        "label": "In this comparison",
        "text": "The STAR 100W Frameless sheds snow and dust, and the HQST 100W suits a 12V system."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a self-cleaning roof panel, which the STAR 100W Frameless offers at about $60. The next tier gives 150W to 200W."
      },
      {
        "label": "Save if",
        "text": "Save if you want a kit with a controller, since the Sanpyl 100W Kit costs about $31."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "12V or 24V",
    "explanation": "A 12V panel connects to a 12V battery through a simple controller, while a 24V panel needs an MPPT controller to charge a 12V battery. Mixing them is a common mistake. Check the nominal voltage in the title and match your controller, and a 24V string into a 12V controller can overheat it."
  },
  {
    "criterion": "Frameless design",
    "explanation": "A frameless panel has no raised edge for dust, leaves and snow to collect, so it stays cleaner and sheds snow faster. The glass edges are more exposed, so handle them with care. Look for the panel's weight and thickness, and look for the weight and glass thickness in the specs because thin frameless glass can crack under a falling branch."
  },
  {
    "criterion": "Controller included",
    "explanation": "A controller regulates charging and protects the battery, and a kit like the Sanpyl 100W Kit includes one. PWM controllers cost about $15 and MPPT about $40 or more separately. Check the box contents, and a controller rated for less current than the panel produces will overheat on a hot day, so match the amp rating to your panel."
  },
  {
    "criterion": "Efficiency",
    "explanation": "23 to 25 percent efficiency is normal for modern cells, and a 2 percent difference means about 2W on a 100W panel. It matters more on a small roof than for a camper. Compare the watts and the physical size, so for a limited roof choose the highest-wattage panel that fits and treat efficiency as a tiebreaker."
  },
  {
    "criterion": "Foldable or fixed",
    "explanation": "A fixed panel gives more watts per dollar, while a foldable one moves with you. A 30W foldable panel makes about 100Wh a day, and a 100W fixed panel about 300Wh. Decide whether you stay in one place, and the fixed panel is the cheaper way to fill a big battery, so count your daily watt-hours."
  },
  {
    "criterion": "Warranty",
    "explanation": "A 5-year product assurance is typical for known brands, and cheaper brands may offer less. Output warranties of 80 percent after 25 years cover cell fade. Check what is covered and who handles claims, so ask about shipping costs for a replacement panel, because a bulky 100W panel can cost $30 to return and a cheap brand may not cover that."
  }
];

export const faq = [
  {
    "q": "Can I run a 24V panel on a 12V battery?",
    "a": "Yes, through an MPPT controller that steps the voltage down. A cheap PWM controller will not work well. The STAR 100W Frameless is a 24V panel, so budget for an MPPT controller, and check the controller can accept the panel voltage."
  },
  {
    "q": "How much does a 100W panel make a day?",
    "a": "About 300 to 450Wh on a sunny day with 4 to 5 peak sun hours. That covers lights, phones and a small fan for a day. Shade and angle can cut that in half, and a 200W panel doubles that."
  },
  {
    "q": "What does IP65 mean?",
    "a": "It means the junction box resists water jets, which is fine for rain. IP67 allows brief immersion. Neither protects against a flooded roof, so seal the cable entry and keep the cable connectors off the ground, where puddles collect."
  },
  {
    "q": "Is a kit with a controller better for beginners?",
    "a": "Yes, because the Sanpyl 100W Kit includes a controller sized for the panel. You still need a battery and cables. Check the controller's amp rating against the panel, and add fuses between the panel and the battery to protect the wiring in a short circuit."
  },
  {
    "q": "How do I wire two panels?",
    "a": "In parallel to keep the voltage and add the current, or in series to add the voltage. A parallel wiring needs fuses and a bigger controller. Match the wiring to your controller's input limits, and read the panel label for open-circuit voltage first."
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
