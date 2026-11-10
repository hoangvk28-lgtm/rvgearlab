export const guideSlug = "best-solar-panels-under-100";
export const guideTitle = "5 Best Solar Panels Under 100 in 2026";
export const metaTitle = "Best Solar Panels Under 100 in 2026";
export const metaDescription = "Best solar panels under $100: five 100 to 150W rigid and foldable panels compared on bifacial design, controllers, voltage and carry size for RVs and camps.";
export const mainKeyword = "best solar panels under 100";
export const introParagraphs = [
  "A $100 budget covers 200W of rigid panels or a 150W foldable kit with its own controller. The five picks cost from about $60 to $100 and differ in voltage, how they fold and what comes in the box.",
  "At this price the real decision is rigid roof panels against foldable camp panels. The notes below show what each style gives and what the cheapest options leave out."
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
    "id": "best-solar-panels-under-100-1",
    "rank": 1,
    "badge": "Best Value Under $100",
    "name": "100W Solar Panel",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41XE6ylIRuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DSHPWMH2?tag=rvgearlab-amz-20",
    "description": "This set ships two 100W N-type panels with 18BB cells at up to 25 percent efficiency, wired for 12V or 24V systems. The aluminum frames carry pre-drilled holes and the glass is impact-resistant tempered glass, so the pair gives 200W for about $90.\n\nIt is the only pick that doubles the output of the others for the same money. The DOKIO folds and has a controller, while this pair is fixed to a roof or frame and needs a controller of your own.\n\nChoose it for a van, a trailer roof or a shed where you want 200W of rigid solar at the lowest cost. Wire the two in parallel for 12V.",
    "specs": [
      "Two 100W N-type panels, 18BB",
      "12V or 24V system wiring",
      "Pre-drilled aluminum frames"
    ],
    "pros": [
      "200W of solar for about $90",
      "N-type cells at up to 25% efficiency",
      "Pre-drilled holes for mounting",
      "Impact-resistant tempered glass"
    ],
    "cons": [
      "Rigid panels do not fold",
      "Needs a separate charge controller"
    ],
    "bestFor": "Roof or shed arrays",
    "take": "The most watts per dollar in the guide.",
    "catch": "Buy a controller sized for 200W."
  },
  {
    "id": "best-solar-panels-under-100-2",
    "rank": 2,
    "badge": "Best Foldable Kit",
    "name": "DOKIO 150W Portable Foldable Solar Panel Kit for 12V Battery Charging",
    "price": "$99.77",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51SyNN01llL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07WX6L3V6?tag=rvgearlab-amz-20",
    "description": "DOKIO is a 150W foldable kit that folds to 20 by 21 by 1.1 inches and weighs 7.3 lb. It includes a standalone PWM controller that guards against reverse polarity, overcharge and overload, a 9.85 foot cable and USB ports on the controller for phones.\n\nAt about $100 it is the pick that works out of the box on a 12V battery with no extra purchase, and it carries more watts than any portable alternative. The pair of N-type panels beats it on cost per watt, and this one beats them on portability.\n\nChoose it for RV, van and tent trips where the panel moves. The long lead lets you set it in the sun and keep the controller in shade.",
    "specs": [
      "150W foldable, 7.3 lb",
      "Folds to 20 x 21 x 1.1 inches",
      "PWM controller, 9.85 ft cable"
    ],
    "pros": [
      "Controller included for 12V batteries",
      "Folds to 20 x 21 inches",
      "Long cable keeps the controller shaded",
      "USB ports on the controller"
    ],
    "cons": [
      "PWM controller wastes some power",
      "Some stations cap solar input below 150W"
    ],
    "bestFor": "Moving panel for 12V batteries",
    "take": "A ready-to-use 150W foldable kit.",
    "catch": "Check your station's solar input limit."
  },
  {
    "id": "best-solar-panels-under-100-3",
    "rank": 3,
    "badge": "Best Cheap Portable",
    "name": "CTOLITY 100W Portable Solar Panel for Power Station Generator",
    "price": "$64.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41GQs7zcmlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H2J3T7TF?tag=rvgearlab-amz-20",
    "description": "CTOLITY is a portable 100W panel rated at 19.8V with an XT60 connector, 23.7 percent monocrystalline cells and ETFE lamination rated for 10 to 70 degrees Celsius. It folds in two and has adjustable kickstands, and it can be joined in series or parallel with a second panel.\n\nAt about $65 it costs less than the DOKIO and gives 50W less, with no controller. It outputs through XT60 only, which many power stations accept and 12V batteries do not.\n\nChoose it to charge a power station and add a second panel later. The kickstands let you tilt it toward the sun.",
    "specs": [
      "19.8V, 100W with XT60",
      "23.7% monocrystalline cells",
      "10 to 70 C temperature range"
    ],
    "pros": [
      "Series or parallel for a second panel",
      "Kickstands for angling to the sun",
      "ETFE surface for durability",
      "Lowest price among portables"
    ],
    "cons": [
      "12A maximum for 12V batteries",
      "XT60 output only"
    ],
    "bestFor": "Charging a power station",
    "take": "A cheap portable that can grow with a second panel.",
    "catch": "Check that your station takes XT60."
  },
  {
    "id": "best-solar-panels-under-100-4",
    "rank": 4,
    "badge": "Best For Partial Shade",
    "name": "Callsun 120W Bifacial Solar Panel",
    "price": "$85.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51wTv8wAaaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7DNL1KD?tag=rvgearlab-amz-20",
    "description": "Callsun is a 120W bifacial panel with N-type 16BB cells at up to 25 percent efficiency, an IP68 rating and TwinCell circuitry that lets it keep charging when part of it is covered. The dual-side design captures reflected light from the rear, with a maker claim of up to 30 percent more power.\n\nAt about $85 it is the pick for roofs with a vent or an antenna that casts shade, and it is smaller than a typical 100W panel for the same space. The 2x100W pair gives more watts, and this panel gives better shade tolerance.\n\nChoose it for an RV roof or boat with obstacles and limited space. A reinforced anodized aluminum frame keeps it stiff on a roof.",
    "specs": [
      "120W bifacial, N-type 16BB",
      "TwinCell anti-shade design",
      "IP68, anodized aluminum frame"
    ],
    "pros": [
      "TwinCell circuitry keeps charging in shade",
      "Bifacial back side adds power",
      "IP68 waterproof rating",
      "Compact for 120W"
    ],
    "cons": [
      "Bifacial gains need a reflective surface",
      "Fixed frame, not foldable"
    ],
    "bestFor": "Shaded RV roofs and boats",
    "take": "A compact roof panel that handles shade well.",
    "catch": "Mount it with a gap for airflow."
  },
  {
    "id": "best-solar-panels-under-100-5",
    "rank": 5,
    "badge": "Best Low-Maintenance Roof Panel",
    "name": "STAR 100 Watt Solar Panel",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31V1k93DfnL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DD4BNTG4?tag=rvgearlab-amz-20",
    "description": "STAR is a 100W frameless panel with 25 percent cells, listed as a 24V panel and certified to ETL, ISO9001 and CE standards. The frameless edge stops dust and standing water, and the maker claims 15 percent more output from a clean surface.\n\nAt about $60 it is the cheapest panel in the guide and the one that needs the least cleaning. It is a 24V panel, so it needs an MPPT controller for a 12V battery, which the DOKIO's PWM controller does not do well.\n\nChoose it for a roof where you rarely climb up to clean. Snow slides off faster without a frame.",
    "specs": [
      "100W frameless, 25% cells",
      "24V panel, ETL certified",
      "Self-cleaning edge design"
    ],
    "pros": [
      "Frameless edge sheds dust and snow",
      "ETL, ISO9001 and CE certified",
      "25 percent efficient cells",
      "Lowest price here"
    ],
    "cons": [
      "24V nominal needs an MPPT controller",
      "Frameless glass edges need careful handling"
    ],
    "bestFor": "Low-maintenance roof arrays",
    "take": "A roof panel that stays clean.",
    "catch": "Budget for an MPPT controller."
  }
];

export const howWeEvaluated = [
  {
    "title": "Watts per dollar",
    "description": "Panels from 100W to 200W were compared per dollar."
  },
  {
    "title": "Portability",
    "description": "Rigid and foldable panels were separated."
  },
  {
    "title": "Voltage and connectors",
    "description": "12V, 19.8V and 24V panels and connectors were compared."
  },
  {
    "title": "Extras",
    "description": "Controllers, shade tolerance and cleaning needs were noted."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is at or under $100, and the top pick gives the most output for the money."
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
          "Van or shed roof, lowest cost",
          "2x100W N-Type Pair",
          "200W for about $90."
        ],
        [
          "12V battery, panel moves",
          "DOKIO 150W Kit",
          "150W foldable with controller."
        ],
        [
          "Charging a station, small budget",
          "CTOLITY 100W",
          "Portable with XT60."
        ],
        [
          "Shaded roof or boat",
          "Callsun 120W Bifacial",
          "TwinCell anti-shade."
        ],
        [
          "Low-maintenance roof",
          "STAR 100W Frameless",
          "Frameless edge."
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
          "$50 to $70",
          "STAR 100W Frameless or CTOLITY 100W"
        ],
        [
          "$80 to $90",
          "Callsun 120W Bifacial or 2x100W N-Type Pair"
        ],
        [
          "$90 to $100",
          "DOKIO 150W Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Rigid vs foldable",
    "cards": [
      {
        "label": "Rigid",
        "text": "The 2x100W N-Type Pair, Callsun 120W Bifacial and STAR 100W Frameless give the most watts per dollar and last for years. They need a roof or a frame."
      },
      {
        "label": "Foldable",
        "text": "The DOKIO 150W Kit and CTOLITY 100W pack away and follow the sun. They cost more per watt."
      }
    ],
    "note": "Most buyers with a fixed roof should take the 2x100W N-Type Pair, and campers who move should take the DOKIO 150W Kit."
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
          "About $60",
          "STAR 100W Frameless"
        ],
        [
          "About $65",
          "CTOLITY 100W"
        ],
        [
          "About $85",
          "Callsun 120W Bifacial"
        ],
        [
          "About $90",
          "2x100W N-Type Pair"
        ],
        [
          "About $100",
          "DOKIO 150W Kit"
        ]
      ]
    }
  },
  {
    "subheading": "For a charging a power station specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a connector your station accepts (XT60, Anderson or DC), a voltage within its input range and enough watts."
      },
      {
        "label": "In this comparison",
        "text": "The CTOLITY 100W has an XT60 output at 19.8V, and the DOKIO 150W Kit connects through its controller."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you need a foldable panel with a controller, which is what the DOKIO 150W Kit provides at about $100. The next price tier brings 200W portable panels."
      },
      {
        "label": "Save if",
        "text": "Save if you can mount panels on a roof, since the 2x100W N-Type Pair gives 200W for about $90 and the STAR 100W Frameless costs about $60."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Panel voltage",
    "explanation": "A 12V panel feeds a 12V controller, a 19.8V portable panel feeds a power station that accepts 12 to 24V, and a 24V panel needs an MPPT controller to charge a 12V battery. Buying the wrong voltage is the most common mistake. Read the nominal and open-circuit voltage on the label and match your controller or station."
  },
  {
    "criterion": "PWM vs MPPT controllers",
    "explanation": "A PWM controller is cheap, around $15, and wastes the extra voltage as heat, which can cost 10 to 30 percent of the panel's power. An MPPT controller costs more, $40 or more, and converts the extra voltage into charge current. Check which one comes in the box."
  },
  {
    "criterion": "Bifacial panels",
    "explanation": "A bifacial panel captures light from the rear as well as the front, with a claimed gain of up to 30 percent over a white or reflective surface. Mounted flat on a dark roof the gain is closer to a few percent. Look for the surface you will mount over."
  },
  {
    "criterion": "Shade tolerance",
    "explanation": "Standard panels lose most of their output when even one cell is shaded, because cells are wired in series. Split-cell or TwinCell designs and bypass diodes keep the rest working. Check for bypass diodes or an anti-shade design if your roof has vents, so on a roof with a vent or satellite dish an anti-shade panel can out-produce a bigger standard one."
  },
  {
    "criterion": "Foldable or fixed",
    "explanation": "A fixed panel gives the most watts per dollar and lasts for years on a roof, and a foldable panel gives portability. A 150W foldable weighs about 7 lb and folds to 20 by 21 inches. Check whether you will leave the panel up or move it."
  },
  {
    "criterion": "Connectors and cables",
    "explanation": "MC4 is the standard roof connector, XT60 and Anderson are common on power stations. An adapter costs $8 to $15, and a cable that is too thin loses power over long runs. Check the connector and cable length before buying, and a 10 foot extension of thin 18 gauge wire can lose 5 percent or more on a 100W panel, so use 12 or 10 gauge for long runs."
  }
];

export const faq = [
  {
    "q": "Can I connect these to a power station?",
    "a": "Only if the voltage and connector match. The CTOLITY 100W outputs at 19.8V through an XT60, which many stations accept, while rigid roof panels have MC4 leads that need an adapter. Check the station's input range."
  },
  {
    "q": "Do I need a charge controller?",
    "a": "For a 12V battery, yes. The DOKIO 150W Kit includes a PWM controller, and the 2x100W N-Type Pair and STAR 100W Frameless do not. A power station has its own controller, so a panel can plug in directly."
  },
  {
    "q": "How many watts will a 100W panel really make?",
    "a": "About 70 to 85W in good sun, and 300 to 450Wh over a day with 4 to 5 peak sun hours. Heat, shade and the wrong angle all cut output. A 150W kit gives roughly half again as much."
  },
  {
    "q": "Is a bifacial panel worth it?",
    "a": "On a flat RV roof the rear side sees little light, so the gain is small. Mounted on a stand over a light surface, the Callsun 120W Bifacial can gain 10 to 20 percent. It also handles shade better thanks to its TwinCell design."
  },
  {
    "q": "How do I wire two panels?",
    "a": "In parallel to keep 12V and add the current, or in series to add the voltage. Check your controller's input limits first, and use fuses on a parallel string. The 2x100W N-Type Pair can do either."
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
