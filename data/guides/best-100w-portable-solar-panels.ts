export const guideSlug = "best-100w-portable-solar-panels";
export const guideTitle = "6 Best 100w Portable Solar Panels in 2026";
export const metaTitle = "Best 100w Portable Solar Panels in 2026";
export const metaDescription = "Best 100W portable solar panels compared for 12V battery kits, power station charging, expandable setups and built-in USB ports for off-grid camp power.";
export const mainKeyword = "best 100w portable solar panels";
export const introParagraphs = [
  "A 100W portable panel is the easiest first step into solar camping, with enough output to keep a small station or a 12V battery from sagging. This list leans toward kits with controllers and expandable designs rather than just the lightest folder.",
  "Six panels were compared on included controllers, connectors, weatherproofing, expandability and USB ports. Two are kits for 12V batteries, and the rest are built for power stations."
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
    "id": "best-100w-portable-solar-panels-1",
    "rank": 1,
    "badge": "Best Plug-and-Play Kit",
    "name": "Renogy 100W Portable Solar Panel",
    "price": "$229.30",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412e0s8giHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B079JVBVL3?tag=rvgearlab-20",
    "description": "The Renogy kit lists 25 percent N-type cells, a pre-installed waterproof 20A PWM charge controller and alligator clip cables. It folds into a suitcase-sized case at 17.42 lbs, with low-iron tempered glass, an aluminum frame and an IP65 junction box.\n\nNo other panel here pairs a built-in controller with a rigid glass panel, so it charges a 12V battery with no extra parts. The CTOLITY and DOKIO need extra gear or run as station panels.\n\nIt suits van and trailer owners who want a ready-to-use kit for a 12V battery. The bypass diodes reduce losses from shade hotspots.",
    "specs": [
      "25% N-type, 20A PWM controller",
      "Tempered glass, 17.42 lbs",
      "Alligator clips, IP65 box"
    ],
    "pros": [
      "Controller is pre-installed",
      "Tempered glass is sturdy",
      "Bypass diodes limit hotspot losses",
      "Clip cables included"
    ],
    "cons": [
      "Heaviest panel here at 17.42 lbs",
      "Costs the most of the six"
    ],
    "bestFor": "12V battery charging",
    "take": "The easiest way to start charging a 12V battery from solar.",
    "catch": "It is heavy and priced above the lighter fold-up panels."
  },
  {
    "id": "best-100w-portable-solar-panels-2",
    "rank": 2,
    "badge": "Best Power Station Charger",
    "name": "ZOUPW 100W Portable Solar Panel for Power Station",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41O9ZbgIgkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CR42CFJ9?tag=rvgearlab-20",
    "description": "The ZOUPW lists 23.5 percent A+ cells, a 5-in-1 connector cable, IP67 ETFE and a weight of 9.48 lbs with a magnetic carry handle. A built-in hub offers 1 USB-C PD at 15V/3A and 2 USB-A ports.\n\nIt offers more connector types than the 4-in-1 cables on the SOKIOVOLA and DOKIO, and adds a USB hub the EBL does not state. It costs a little less than the EBL.\n\nIt suits campers with several brands of station. The magnetic handle makes the folded panel easier to carry.",
    "specs": [
      "23.5% cells, 9.48 lbs",
      "5-in-1 connector, IP67",
      "USB-C PD plus 2 USB-A"
    ],
    "pros": [
      "Five connector types in the cable",
      "IP67 ETFE coating",
      "Direct USB hub for devices",
      "Magnetic carry handle"
    ],
    "cons": [
      "Heavier than the SOKIOVOLA",
      "Folded size is bulkier than slim kits"
    ],
    "bestFor": "Mixed-brand station owners",
    "take": "A connector-rich panel for people who own more than one station.",
    "catch": "At 9.48 lbs it is a car-camping panel more than a backpacking one."
  },
  {
    "id": "best-100w-portable-solar-panels-3",
    "rank": 3,
    "badge": "Best Kickstand Setup",
    "name": "EBL Solar Panel 100W Portable Solar Panel for 300/500/1000 Power Station",
    "price": "$109.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41C0dipdfdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B8YVBHXG?tag=rvgearlab-20",
    "description": "The EBL lists 23 percent efficiency, two kickstands that hold a 45 degree angle and IP65 water resistance. The kit includes MC4 to Anderson and MC4 to DC5521 cables plus two adapters.\n\nIt leans on the kickstand tilt, while the ZOUPW leans on connector count. Against the CTOLITY, it adds more included adapters and is aimed at 300, 500 and 1000 stations.\n\nIt suits campers who set up on flat ground and want an angled, stable panel. The adapters cover common plug sizes.",
    "specs": [
      "23% efficiency, 2 kickstands",
      "IP65 ETFE water resistance",
      "MC4 to Anderson, DC5521 cables"
    ],
    "pros": [
      "Kickstands hold a 45 degree tilt",
      "Adapters for common station ports",
      "ETFE laminate resists splashes",
      "Aimed at 300 to 1000 stations"
    ],
    "cons": [
      "IP65 is not rated for heavy rain",
      "No USB output is listed"
    ],
    "bestFor": "Stable angled setup",
    "take": "A simple, stable panel for pairing with popular stations.",
    "catch": "Weight is not stated in the main bullets."
  },
  {
    "id": "best-100w-portable-solar-panels-4",
    "rank": 4,
    "badge": "Best Expandable",
    "name": "CTOLITY 100W Portable Solar Panel for Power Station Generator",
    "price": "$68.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41GQs7zcmlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H2J3T7TF?tag=rvgearlab-20",
    "description": "The CTOLITY lists 19.8V/100W output with an XT60 connector, supporting 12V batteries up to 12A max. It uses 23.7 percent monocrystalline cells, a bifold design with adjustable kickstands and ETFE lamination rated for 10 to 70 degrees Celsius.\n\nIt lists series and parallel connection so two panels double the output, which the EBL does not state. It is the lowest-priced pick here, a few cents under the DOKIO.\n\nIt suits campers who plan to add a second panel later. The temperature range is stated for hot sites.",
    "specs": [
      "19.8V, 100W with XT60",
      "Series and parallel expansion",
      "ETFE, 10 to 70C range"
    ],
    "pros": [
      "Pairs with a second panel",
      "Listed temperature range",
      "Kickstands for angling",
      "Very low price"
    ],
    "cons": [
      "12A maximum for 12V batteries",
      "Brand has little track record"
    ],
    "bestFor": "Starter with upgrade path",
    "take": "A cheap way to start small and add power later.",
    "catch": "It outputs only XT60, so confirm your station accepts it."
  },
  {
    "id": "best-100w-portable-solar-panels-5",
    "rank": 5,
    "badge": "Best Lightweight",
    "name": "SOKIOVOLA 100W Portable Solar Panel MC-4 Foldable Solar Panel Charger Kits 18V IP68 Waterproof Lightweight and",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Jq3ZcWPBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRB3DFRV?tag=rvgearlab-20",
    "description": "The SOKIOVOLA lists a weight of 4.6 lbs, a folded size of 14.69 x 8.67 x 1.78 inches and an 18V IP68 rating. It includes a 7.2 ft 4-in-1 extension cable.\n\nIt is the lightest panel in this list and about a quarter of the weight of the Renogy kit. Compared with the ZOUPW, it gives up USB ports for a lighter body.\n\nIt suits hikers and bike campers who carry the panel on their back. The long cable allows shade for the station.",
    "specs": [
      "4.6 lbs, 14.7 in folded",
      "IP68 ETFE laminated",
      "7.2 ft 4-in-1 cable"
    ],
    "pros": [
      "Lightest panel in this list",
      "Long extension cable",
      "IP68 rating is named",
      "Folds slim for a pack"
    ],
    "cons": [
      "No USB ports named",
      "No controller included"
    ],
    "bestFor": "Hiking and bike camping",
    "take": "A very light panel for carrying far.",
    "catch": "Without USB or a controller, it needs a station or battery system."
  },
  {
    "id": "best-100w-portable-solar-panels-6",
    "rank": 6,
    "badge": "Best Budget 12V",
    "name": "DOKIO 100W Portable Foldable Solar Panel Kit for 12V Battery Charging",
    "price": "$68.77",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51qFGApIH+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0748FYFSK?tag=rvgearlab-20",
    "description": "The DOKIO lists 6 lbs, a 19 x 26 x 0.5 inch fold, a 9.84 ft cable and a standalone PWM controller. USB ports run phones and small gadgets from a 12V battery.\n\nIt offers a controller like the Renogy kit at under a third of the cost. It is also slimmer than the SOKIOVOLA when folded flat.\n\nIt suits budget campers charging a small 12V battery. The listing warns some stations cap input, so full 100W may not reach the battery.",
    "specs": [
      "6 lbs, 0.5 in thick folded",
      "PWM controller included",
      "9.84 ft cable, USB ports"
    ],
    "pros": [
      "Controller included at a low price",
      "Very thin when folded",
      "USB ports for phones",
      "Long cable"
    ],
    "cons": [
      "PWM controller wastes some power",
      "Station input caps can limit charge"
    ],
    "bestFor": "Cheap 12V charging",
    "take": "A budget kit with a built-in safe charge controller.",
    "catch": "A PWM controller is less efficient than the MPPT type."
  }
];

export const howWeEvaluated = [
  {
    "title": "Kit completeness",
    "description": "We checked which listings include a charge controller and cables for 12V batteries."
  },
  {
    "title": "Connectors",
    "description": "We compared cable types and adapters for power stations."
  },
  {
    "title": "Expandability",
    "description": "We noted series and parallel options for adding more panels."
  },
  {
    "title": "Weather",
    "description": "We compared glass, ETFE and IP ratings."
  },
  {
    "title": "Weight",
    "description": "We compared stated weights and folded dimensions."
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
    "subheading": "By Setup",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Van with a 12V battery",
          "Renogy 100W Kit",
          "Controller and clips included"
        ],
        [
          "Several station brands",
          "ZOUPW 100W",
          "5-in-1 connector cable"
        ],
        [
          "Stable angle on flat ground",
          "EBL 100W Apollo",
          "45 degree kickstands"
        ],
        [
          "Plan to add a second panel",
          "CTOLITY 100W",
          "Series and parallel expansion"
        ],
        [
          "Hiking and bike trips",
          "SOKIOVOLA 100W Light",
          "4.6 lbs"
        ],
        [
          "Cheap 12V battery top-up",
          "DOKIO 100W Flex",
          "PWM controller at low price"
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
          "$60 to $70",
          "CTOLITY 100W or DOKIO 100W Flex"
        ],
        [
          "$80 to $110",
          "SOKIOVOLA 100W Light or ZOUPW 100W"
        ],
        [
          "$100 to $230",
          "EBL 100W Apollo or Renogy 100W Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Rigid Kit vs Foldable Panel",
    "cards": [
      {
        "label": "Rigid kit",
        "text": "A glass panel with controller is sturdier and charges a battery without more gear. Renogy 100W Kit is the pick."
      },
      {
        "label": "Foldable",
        "text": "Foldable ETFE panels are light and pack small for station charging. ZOUPW 100W, EBL 100W Apollo, CTOLITY 100W, SOKIOVOLA 100W Light and DOKIO 100W Flex are foldable."
      }
    ],
    "note": "Most campers should choose a foldable such as the ZOUPW 100W unless they need a fixed 12V kit."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Highest-quality kit",
          "Renogy 100W Kit"
        ],
        [
          "Mid-price connectors",
          "ZOUPW 100W"
        ],
        [
          "Lowest cost with upgrade path",
          "CTOLITY 100W"
        ],
        [
          "Lowest weight",
          "SOKIOVOLA 100W Light"
        ]
      ]
    }
  },
  {
    "subheading": "For Power Station Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A solar input connector that fits and a panel under the station's input limit."
      },
      {
        "label": "In this comparison",
        "text": "The ZOUPW 100W lists five connector types and the EBL 100W Apollo lists adapters for 300 to 1000 stations."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you need a ready-to-use 12V kit, which means the Renogy 100W Kit."
      },
      {
        "label": "Save if",
        "text": "Save if you only charge a station, since the CTOLITY 100W and SOKIOVOLA 100W Light cost far less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Panel or kit",
    "explanation": "A bare panel needs a station or controller, while a kit includes a controller for 12V batteries. Without one, a battery can be overcharged. Check the listing for a charge controller."
  },
  {
    "criterion": "PWM versus MPPT",
    "explanation": "PWM controllers are simple and cheap but waste some panel power, while MPPT units extract more. For a single 100W panel the gap is small. Check which type is named."
  },
  {
    "criterion": "Glass or ETFE",
    "explanation": "Rigid glass panels are sturdy but heavy, while ETFE fold-ups are light and flex slightly. Glass suits a fixed setup and ETFE suits travel. Check weight on the page."
  },
  {
    "criterion": "Series and parallel",
    "explanation": "Wiring two panels in series raises voltage and parallel raises amps. Station input limits cap what you can add. Read your station's maximum voltage and amps."
  },
  {
    "criterion": "Connector type",
    "explanation": "A bad connector match leaves the panel unused. XT60 and Anderson are common, and some stations need DC5521. Check the plug on the station."
  },
  {
    "criterion": "Real daily yield",
    "explanation": "A 100W panel in full sun may yield around 300 to 500Wh across a good day. Clouds and angle cut that fast. Plan for less than the label."
  }
];

export const faq = [
  {
    "q": "Does a 100W panel work with any power station?",
    "a": "Only if the connector and voltage match the station's solar input. Check the manual for the voltage range."
  },
  {
    "q": "What is the biggest buying mistake?",
    "a": "Skipping the controller on a 12V battery system. Without one, the panel can overcharge the battery."
  },
  {
    "q": "Is a rigid kit worth it over a foldable panel?",
    "a": "For a van or fixed setup, yes. For travel, a foldable panel such as the ZOUPW 100W is easier to carry."
  },
  {
    "q": "How do I connect it to a battery?",
    "a": "Connect the controller to the battery first, then connect the panel. Disconnect in the reverse order."
  },
  {
    "q": "How do I care for it?",
    "a": "Keep it clean and dry, fold it with care and store it flat. Check the cables for cracks."
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
