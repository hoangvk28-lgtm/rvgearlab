export const guideSlug = "best-solar-panels-under-300";
export const guideTitle = "5 Best Solar Panels Under 300 in 2026";
export const metaTitle = "Best Solar Panels Under 300 in 2026";
export const metaDescription = "Best solar panels under $300: five 200 to 300W foldable, flexible and kit panels compared on weight, bend, controllers and connectors for RVs and camps.";
export const mainKeyword = "best solar panels under 300";
export const introParagraphs = [
  "Three hundred dollars is the 300W tier. For the money you can buy a foldable kit with a controller, two flexible panels that stick to a curved roof, or a portable panel for a power station.",
  "The five picks run from about $128 to $190. The notes below sort them by how they mount, what they connect to and what the cheapest ones leave out."
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
    "id": "best-solar-panels-under-300-1",
    "rank": 1,
    "badge": "Best Value Under $300",
    "name": "DOKIO 300W Foldable Solar Panel Kit with PWM Controller and USB Ports",
    "price": "$179.77",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51drxNtUqsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJSQSYM1?tag=rvgearlab-20",
    "description": "DOKIO is a 300W foldable kit with monocrystalline cells that weighs 15.2 lb and folds to a slab barely over an inch thick. It includes a separate PWM controller with protection against reverse polarity, overcharge, overload and short circuit, a 9.85 foot cable and two USB ports.\n\nAt about $180 it is the only 300W pick that works with a 12V battery out of the box. The flexible panels cost $30 to $50 less and need a controller bought separately, and the LVYUAN costs $10 more and targets power stations.\n\nChoose it for an RV or van with a 12V battery that wants 300W that stores behind a seat. A 3 meter lead keeps the controller in the shade.",
    "specs": [
      "300W foldable, 15.2 lb",
      "Folds barely over 1 inch thick",
      "PWM controller, two USB ports"
    ],
    "pros": [
      "Controller included for 12V batteries",
      "Folds to 1.1 inches thick",
      "9.85 foot cable keeps the controller cool",
      "Two USB ports for phones"
    ],
    "cons": [
      "PWM controller wastes some power",
      "Some stations cap solar input below 300W"
    ],
    "bestFor": "A 12V battery in a van or RV",
    "take": "A complete 300W kit that stores flat.",
    "catch": "Do not run it into a station limited to 100W."
  },
  {
    "id": "best-solar-panels-under-300-2",
    "rank": 2,
    "badge": "Best For Power Stations",
    "name": "300W Portable Solar Panel Foldable",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41i7SbGskiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H6VTCYCW?tag=rvgearlab-20",
    "description": "LVYUAN offers 300W in a portable panel with 23.5 percent cells, IP65 protection and a 24-month warranty, and it folds to roughly 27 by 26 by 1.6 inches. It can be wired in parallel at 23.6V or in series at 47.2V to suit different station inputs.\n\nAt about $190 it costs $10 more than the DOKIO and is built for a power station with a high-voltage solar input. The DOKIO has a controller for a battery, and this one does not.\n\nChoose it for a station with a 300W solar input and a car camp where the panel travels. It folds inward to a slim size.",
    "specs": [
      "300W portable, 23.5% cells",
      "Folds to about 27 by 26 inches",
      "Parallel 23.6V or series 47.2V"
    ],
    "pros": [
      "Two wiring modes with voltages spelled out",
      "Slim inward fold",
      "IP65 protection",
      "24-month warranty"
    ],
    "cons": [
      "No controller for a 12V battery",
      "Heavier to carry than a flexible panel"
    ],
    "bestFor": "Power stations with 300W inputs",
    "take": "A portable 300W panel for stations.",
    "catch": "Check the station's input voltage first."
  },
  {
    "id": "best-solar-panels-under-300-3",
    "rank": 3,
    "badge": "Best Light Foldable",
    "name": "200 Watt Solar Panel",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51amCAQRP7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FCC9L58Z?tag=rvgearlab-20",
    "description": "This 200W foldable panel uses monocrystalline cells at 23.5 percent efficiency, weighs 17.6 lb and folds in four with a magnetic carry handle. It has an IP67 rating, kickstands and MC4 leads with adapters for Anderson, XT60, XT90, DC7909, DC5521 and a 3-in-1 DC connector.\n\nAt about $170 it gives 100W less than the DOKIO and ships with six connector adapters, the most of any pick here. The flexible panels give more watts for less money and do not fold.\n\nChoose it for a power station that needs an unusual connector. It suits car camping where 200W is enough.",
    "specs": [
      "200W foldable, 23.5% cells",
      "17.6 lb, four-fold design",
      "MC4 plus six adapters"
    ],
    "pros": [
      "Six connector adapters for stations",
      "Kickstands for angling",
      "IP67 weather rating",
      "Magnetic carry handle"
    ],
    "cons": [
      "Only 200W",
      "No controller for a 12V battery"
    ],
    "bestFor": "Stations with unusual connectors",
    "take": "A portable panel that fits almost any station.",
    "catch": "Do not size it for a 300W input."
  },
  {
    "id": "best-solar-panels-under-300-4",
    "rank": 4,
    "badge": "Best For Curved Roofs",
    "name": "300W Flexible Solar Panel",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41lud9xa04L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HC7DGZ4S?tag=rvgearlab-20",
    "description": "This 300W flexible panel uses monocrystalline cells under an IP68 rated polymer surface and works from -40 to 185 degrees Fahrenheit. It is 2mm thin, bends up to 240 degrees and comes with adhesive backing and six reinforced mounting holes.\n\nAt about $150 it costs $30 less than the DOKIO and gives the same watts, and it only fits where flexible panels fit. It is thinner and lighter, and it lacks a controller and a fold-away carry.\n\nChoose it for a curved camper roof, a boat or a trailer with limited weight allowance. It is not meant to be moved from site to site.",
    "specs": [
      "300W flexible, 2mm thin",
      "Bends up to 240 degrees",
      "IP68 polymer surface"
    ],
    "pros": [
      "Bends to fit curved roofs",
      "Adhesive backing and six mounting holes",
      "Works from -40 to 185 F",
      "300W at about $150"
    ],
    "cons": [
      "Flexible panels run hotter and age faster",
      "Needs a controller"
    ],
    "bestFor": "Curved roofs and boats",
    "take": "300W for a surface a rigid panel cannot fit.",
    "catch": "Leave airflow behind it."
  },
  {
    "id": "best-solar-panels-under-300-5",
    "rank": 5,
    "badge": "Best Lowest Price Per Watt",
    "name": "300 Watt Ultra Light Flexible Solar Panel",
    "price": "$127.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418IhUyFXDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GHVB3HJR?tag=rvgearlab-20",
    "description": "This 300W ultra-light flexible panel is 0.11 inches thick with A+ monocrystalline cells rated up to 24 percent efficiency, a fiberglass back and an ETFE coating. It bends up to 270 degrees, handles -40 to 185 degrees Fahrenheit and has six pre-drilled holes or adhesive mounting.\n\nAt about $128 it is the cheapest 300W in the guide by $22, and it is the thinnest. The other flexible panel costs $22 more and bends 30 degrees less.\n\nChoose it for the lowest price per watt on a curved roof or a van. It suits owners who can mount it permanently.",
    "specs": [
      "300W flexible, 0.11 in thick",
      "Up to 24% A+ cells, 270 degree bend",
      "ETFE coating, six holes"
    ],
    "pros": [
      "Lowest price for 300W",
      "Bends up to 270 degrees",
      "ETFE coating resists weather",
      "Six pre-drilled holes or adhesive"
    ],
    "cons": [
      "Flexible panels age faster",
      "Needs a controller"
    ],
    "bestFor": "Budget 300W on a curved surface",
    "take": "The cheapest way to get 300W of solar.",
    "catch": "Treat it as a fixed install."
  }
];

export const howWeEvaluated = [
  {
    "title": "Watts per dollar",
    "description": "Panels from 200W to 300W were compared per dollar."
  },
  {
    "title": "Format",
    "description": "Foldable, flexible and portable panels were separated."
  },
  {
    "title": "Weight and thickness",
    "description": "Weights from 17.6 lb for the 200W portable to 15.2 lb for the 300W kit and flexible thickness were compared."
  },
  {
    "title": "Connectors",
    "description": "Controllers, adapters and wiring options were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is under $300, and the top pick gives a working 300W system."
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
          "12V battery in a van",
          "DOKIO 300W Kit",
          "Controller included."
        ],
        [
          "Power station with 300W input",
          "LVYUAN 300W Portable",
          "Series or parallel wiring."
        ],
        [
          "Odd station connector",
          "200W Foldable Portable",
          "Six adapters."
        ],
        [
          "Curved roof",
          "300W Flexible Panel",
          "Bends 240 degrees."
        ],
        [
          "Lowest price per watt",
          "300W Ultra-Light Flexible",
          "300W at about $128."
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
          "$120 to $150",
          "300W Ultra-Light Flexible or 300W Flexible Panel"
        ],
        [
          "$160 to $180",
          "200W Foldable Portable or DOKIO 300W Kit"
        ],
        [
          "$180 to $190",
          "LVYUAN 300W Portable"
        ]
      ]
    }
  },
  {
    "subheading": "Foldable vs flexible",
    "cards": [
      {
        "label": "Foldable",
        "text": "The DOKIO 300W Kit, LVYUAN 300W Portable and 200W Foldable Portable fold and move with you. They weigh 15 to 18 lb."
      },
      {
        "label": "Flexible",
        "text": "The 300W Flexible Panel and 300W Ultra-Light Flexible stick to a roof, bend and weigh little. They cost $128 to $150."
      }
    ],
    "note": "Most RV owners should take the DOKIO 300W Kit unless the roof is curved."
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
          "About $128",
          "300W Ultra-Light Flexible"
        ],
        [
          "About $150",
          "300W Flexible Panel"
        ],
        [
          "About $170",
          "200W Foldable Portable"
        ],
        [
          "About $180",
          "DOKIO 300W Kit"
        ],
        [
          "About $190",
          "LVYUAN 300W Portable"
        ]
      ]
    }
  },
  {
    "subheading": "For an RV roof specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a flat or curved match, a weight under 20 lb and an MPPT controller for a 12V battery."
      },
      {
        "label": "In this comparison",
        "text": "The 300W Flexible Panel bends 240 degrees, and the DOKIO 300W Kit includes a controller."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a complete kit with a controller and a way to stow it, which is what the DOKIO 300W Kit offers. The LVYUAN 300W Portable adds series wiring for power stations."
      },
      {
        "label": "Save if",
        "text": "Save if you can mount a flexible panel permanently, because the 300W Ultra-Light Flexible costs about $128."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Foldable vs flexible",
    "explanation": "A foldable panel stores in a van and moves with you, while a flexible panel is stuck down for good but fits curves and adds almost no weight. A flexible 300W panel costs $30 to $50 less than a foldable kit. Choose based on whether you need to move it."
  },
  {
    "criterion": "Controller included",
    "explanation": "A 12V battery needs a charge controller, and a kit like the DOKIO 300W Kit includes a PWM one. Power stations have their own controller, so a panel plugs straight in. Check what the box includes before buying a second device, and if you buy a bare panel, add $15 to $40 for a controller sized to its amps."
  },
  {
    "criterion": "Heat and flexible panels",
    "explanation": "A flexible panel stuck flat to a roof cannot shed heat, so output can drop 10 to 15 percent in summer and the cells age faster. An inch of airflow behind a rigid or foldable panel keeps it cooler. Check how the flexible panel is mounted."
  },
  {
    "criterion": "Station solar input",
    "explanation": "Many stations accept 100 to 300W of solar and 12 to 28V, so a 300W panel on a 100W limit gives only 100W. Series wiring raises voltage and parallel wiring raises current. Check the station's input range before you buy, so a panel bigger than the limit mostly adds cloudy-day insurance, which is still useful."
  },
  {
    "criterion": "Weight and bend",
    "explanation": "A 15 to 18 lb foldable panel is a real carry, while a flexible panel adds only a few pounds to a roof. A 240 to 270 degree bend fits most curved roofs. Check the weight and the bend rating, and a roof with a tight curve may need the greater 270 degree bend, so measure the curve with a flexible ruler."
  },
  {
    "criterion": "Temperature range",
    "explanation": "A panel rated from -40 to 185 degrees Fahrenheit survives desert roofs and winter nights. Output falls about 0.3 to 0.4 percent per degree above 77 degrees. Check the temperature rating and the coefficient, so a panel rated to the full -40 to 185 range on a dark desert roof loses power, but it will not fail, and a gap of an inch behind it helps; look for the temperature coefficient in the specs."
  }
];

export const faq = [
  {
    "q": "How much power does a 300W panel make?",
    "a": "About 900 to 1200Wh on a sunny day with 4 to 5 peak sun hours, enough to refill a 1 kWh power station in a day. Shade and angle cut that sharply. Tilt the panel toward the sun for best output."
  },
  {
    "q": "Will a 300W panel work with my power station?",
    "a": "Only up to its solar input limit, and only if the voltage fits. The LVYUAN 300W Portable can be wired for 23.6V or 47.2V. Check the station's input range and the connector, and use the right adapter for the plug."
  },
  {
    "q": "Are flexible panels as good as rigid?",
    "a": "They are lighter and fit curves, but they run hotter, lose output faster and are less durable. A 300W flexible panel costs less than a foldable kit. Choose one for a permanent install where weight matters."
  },
  {
    "q": "What is a PWM controller?",
    "a": "A PWM controller connects the panel to a 12V battery and prevents overcharging, and the DOKIO 300W Kit includes one. It wastes some power compared with MPPT. For a 300W panel, MPPT gets 10 to 30 percent more."
  },
  {
    "q": "How do I mount a flexible panel?",
    "a": "Clean the roof, use the adhesive or bolt through the mounting holes with sealant, and leave an airflow gap if you can. Do not bend it past the rated angle. Seal the cable entry and keep it flat while the adhesive cures."
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
