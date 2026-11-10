export const guideSlug = "best-solar-panels-under-150";
export const guideTitle = "5 Best Solar Panels Under 150 in 2026";
export const metaTitle = "Best Solar Panels Under 150 in 2026";
export const metaDescription = "Best solar panels under $150: five 100 to 200W flexible, rigid and portable panels compared on watts per dollar, weight and mounting for vans and RVs.";
export const mainKeyword = "best solar panels under 150";
export const introParagraphs = [
  "A $150 budget finally buys a full 200W panel, with a few flexible, foldable and portable alternatives for situations where a rigid panel does not work. The five picks cost from about $88 to $150.",
  "Which one is right depends on where it goes: a curved roof, a flat roof, a campsite or a specific power station. The notes below match each pick to the job."
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
    "id": "best-solar-panels-under-150-1",
    "rank": 1,
    "badge": "Best Value Under $150",
    "name": "HQST 200W Solar Panel",
    "price": "$107.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51OsxlaXCcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJZZVNHV?tag=rvgearlab-amz-20",
    "description": "HQST is a 200W rigid N-type panel with 16BB Grade A+ cells at up to 25.4 percent efficiency, measuring 46.3 by 30.1 by 1.2 inches. It is 13 percent smaller and 14.5 percent lighter than conventional panels, carries a 30-year service life claim and has an IP65 rated frame.\n\nAt about $108 it gives 200W for $42 less than the cap, which is the lowest price per watt in this guide. The WUZECK flexes, and the ZOUPW and DOKIO fold, so this one is the best choice for a roof.\n\nChoose it for a van roof, an RV or a shed where you want the most watts for the money. It is sized for Class B vans.",
    "specs": [
      "200W N-type, up to 25.4% efficient",
      "46.3 x 30.1 x 1.2 inches",
      "IP65, 30-year service life claim"
    ],
    "pros": [
      "200W for about $108",
      "Compact for a Class B van roof",
      "N-type cells perform in low light",
      "IP65 weather protection"
    ],
    "cons": [
      "Rigid, so it needs a flat mounting surface",
      "Needs a controller"
    ],
    "bestFor": "Van and RV roof arrays",
    "take": "The lowest price per watt in this guide.",
    "catch": "Pair with an MPPT controller."
  },
  {
    "id": "best-solar-panels-under-150-2",
    "rank": 2,
    "badge": "Best Flexible Panel",
    "name": "WUZECK Flexible Solar Panel 12 Volts 150W Fiberglass Module",
    "price": "$113.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4181dvWVirL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DRBHNX7B?tag=rvgearlab-amz-20",
    "description": "WUZECK is a 12V 150W flexible panel with a dual-layer fiberglass composite film, a profile 2.5mm thick and a weight of 6.6 lb. It bends up to 240 degrees, resists 2400Pa wind and 5400Pa snow loads and mounts with adhesive backing or pre-drilled holes.\n\nAt about $114 it costs $6 more than the HQST and delivers 50W less, and it is the only pick that fits a curved roof. The HQST needs a flat surface.\n\nChoose it for a boat, a camper van with a curved roof or any surface where weight matters. Pre-installed waterproof connectors allow a plug-and-play hookup.",
    "specs": [
      "150W flexible, 6.6 lb",
      "Bends up to 240 degrees",
      "2400Pa wind, 5400Pa snow"
    ],
    "pros": [
      "Bends to fit curved roofs",
      "Only 6.6 lb and 2.5mm thin",
      "Adhesive or bolt-down mounting",
      "Waterproof pre-installed connectors"
    ],
    "cons": [
      "Less watts than the HQST",
      "Flexible panels run hotter and age faster"
    ],
    "bestFor": "Curved roofs and boats",
    "take": "A lightweight panel for surfaces a rigid panel cannot fit.",
    "catch": "Leave airflow behind it for cooling."
  },
  {
    "id": "best-solar-panels-under-150-3",
    "rank": 3,
    "badge": "Best Foldable With Controller",
    "name": "DOKIO 150W Portable Foldable Solar Panel Kit with Charge Controller",
    "price": "$94.77",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51SyNN01llL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07Y8CT1W9?tag=rvgearlab-amz-20",
    "description": "DOKIO is a 150W foldable kit that weighs 7.3 lb and folds to about 21 by 20 inches, with a standalone PWM controller, a 9.8 foot cable and USB ports. The controller protects a 12V battery against reverse polarity, overcharge and overload.\n\nAt about $95 it costs $13 less than the HQST for 50W less, and it includes a controller and the ability to move with you. The ZOUPW 100W has a built-in USB hub and no controller.\n\nChoose it for a camping trip with a 12V battery or a van parked in changing light. It stores easily behind a seat.",
    "specs": [
      "150W foldable, 7.3 lb",
      "PWM controller with protections",
      "9.8 foot cable with USB ports"
    ],
    "pros": [
      "Controller included",
      "Folds to about 21 x 20 inches",
      "9.8 foot cable for shade placement",
      "USB ports for small devices"
    ],
    "cons": [
      "PWM controller is basic",
      "Some power stations cap solar input"
    ],
    "bestFor": "12V battery and camp use",
    "take": "A foldable kit that works with a battery from day one.",
    "catch": "Match your station's solar limit."
  },
  {
    "id": "best-solar-panels-under-150-4",
    "rank": 4,
    "badge": "Best For Power Stations",
    "name": "ZOUPW 100W Portable Solar Panel for Power Station",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41O9ZbgIgkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CR42CFJ9?tag=rvgearlab-amz-20",
    "description": "ZOUPW's 100W foldable panel pairs A+ monocrystalline cells rated 23.5 percent with a 5-in-1 cable with DC8020, XT60, Anderson and other connectors to fit most power stations. It has IP67 ETFE lamination, a magnetic carry handle and a built-in hub with a USB-C PD 15V/3A port and two USB-A ports.\n\nAt about $88 it is the cheapest pick and the one that can charge a phone directly. It weighs 9.48 lb and folds to 24.13 by 21.06 inches, which is bigger than the DOKIO.\n\nChoose it for a power station that needs an adapter-ready panel. The built-in USB hub works without a station.",
    "specs": [
      "100W foldable, 23.5% cells",
      "5-in-1 cable, IP67 ETFE",
      "USB-C PD and two USB-A"
    ],
    "pros": [
      "5-in-1 cable fits most stations",
      "Built-in USB-C and USB-A ports",
      "IP67 ETFE coating",
      "Magnetic carry handle"
    ],
    "cons": [
      "Only 100W",
      "9.48 lb and bulky folded"
    ],
    "bestFor": "Pairing with a power station",
    "take": "A panel that fits most power stations.",
    "catch": "Check the station's input voltage."
  },
  {
    "id": "best-solar-panels-under-150-5",
    "rank": 5,
    "badge": "Best For VTOMAN Stations",
    "name": "VTOMAN 110W 19V Portable Solar Panel for Solar Generator",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41yq3I3zBjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HJWG6MV1?tag=rvgearlab-amz-20",
    "description": "VTOMAN's VS110 is a 110W foldable panel at 19V with MC4, Anderson, XT60 and DC5521 connectors, 23 percent monocrystalline cells, two adjustable kickstands and four hanging holes. It carries an IP67 splash rating.\n\nPriced near $150, it has the highest price tag here and the fewest watts per dollar. Its value is as a matched accessory for VTOMAN Jump power stations.\n\nChoose it if you own a VTOMAN station and want a panel the maker specifies. It folds for travel and hangs from a tent loop.",
    "specs": [
      "110W foldable, 19V working voltage",
      "MC4, Anderson, XT60, DC5521",
      "Two kickstands, IP67"
    ],
    "pros": [
      "Matches VTOMAN stations",
      "Four connector types included",
      "Adjustable kickstands",
      "IP67 splash rating"
    ],
    "cons": [
      "Highest price for the watts",
      "Not for submerging"
    ],
    "bestFor": "VTOMAN station owners",
    "take": "A matched panel for a specific station brand.",
    "catch": "Skip it if you own a different station."
  }
];

export const howWeEvaluated = [
  {
    "title": "Watts per dollar",
    "description": "Panels from 100W to 200W were compared per dollar."
  },
  {
    "title": "Mounting",
    "description": "Rigid, flexible and foldable designs were compared for the surfaces they suit."
  },
  {
    "title": "Weight",
    "description": "Weights from 6.6 lb to about 14 lb were compared."
  },
  {
    "title": "Compatibility",
    "description": "Connectors and voltage for stations and batteries were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is under $150, and the top pick gives the most watts per dollar."
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
          "Flat van or RV roof",
          "HQST 200W N-Type",
          "200W at the lowest cost per watt."
        ],
        [
          "Curved roof or boat",
          "WUZECK 150W Flexible",
          "Bends 240 degrees."
        ],
        [
          "12V battery and camping",
          "DOKIO 150W Panel Kit",
          "Foldable with controller."
        ],
        [
          "Power station owners",
          "ZOUPW 100W Portable",
          "5-in-1 cable."
        ],
        [
          "VTOMAN station",
          "VTOMAN VS110",
          "Matched panel."
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
          "$80 to $100",
          "ZOUPW 100W Portable or DOKIO 150W Panel Kit"
        ],
        [
          "$100 to $120",
          "HQST 200W N-Type or WUZECK 150W Flexible"
        ],
        [
          "$140 to $150",
          "VTOMAN VS110"
        ]
      ]
    }
  },
  {
    "subheading": "Rigid vs flexible",
    "cards": [
      {
        "label": "Rigid",
        "text": "The HQST 200W N-Type gives the most watts for the price and lasts for decades. It needs a flat surface and about 46 by 30 inches of space."
      },
      {
        "label": "Flexible",
        "text": "The WUZECK 150W Flexible bends to fit curves and weighs 6.6 lb. It costs more per watt and runs hotter."
      }
    ],
    "note": "Most buyers should take the HQST 200W N-Type unless the roof is curved."
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
          "About $88",
          "ZOUPW 100W Portable"
        ],
        [
          "About $95",
          "DOKIO 150W Panel Kit"
        ],
        [
          "About $108",
          "HQST 200W N-Type"
        ],
        [
          "About $114",
          "WUZECK 150W Flexible"
        ],
        [
          "About $150",
          "VTOMAN VS110"
        ]
      ]
    }
  },
  {
    "subheading": "For a camper van specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a panel under 50 inches long, a weight you can lift to the roof and a mounting method that fits your roof curve."
      },
      {
        "label": "In this comparison",
        "text": "The HQST 200W N-Type is 46.3 by 30.1 inches and sized for Class B vans, and the WUZECK 150W Flexible fits a curved roof."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you need a flexible panel for a curved roof, which is what the WUZECK 150W Flexible provides at about $114. The next tier up brings 200W portable panels and better efficiency."
      },
      {
        "label": "Save if",
        "text": "Save if you have a flat roof, because the HQST 200W N-Type gives 200W for about $108."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rigid, flexible or foldable",
    "explanation": "A rigid panel gives the most watts per dollar and lasts decades, a flexible panel fits curves and saves weight but runs hotter and ages faster, and a foldable panel packs away for camp use. Match the type to where it will live. Decide on mounting before you decide on watts."
  },
  {
    "criterion": "Roof space",
    "explanation": "A 200W rigid panel like the HQST measures 46.3 by 30.1 inches, so measure free roof space after vents, antennas and AC units. A flexible panel can take curved space. Check the dimensions against your roof, and leave a few inches of clearance around the panel for wiring and for the airflow that keeps it cool in summer, because a panel that fits on paper may not fit once the cable gland is added."
  },
  {
    "criterion": "Weight",
    "explanation": "A 150W flexible panel at 6.6 lb is a light load, a 7.3 lb foldable kit is easy to carry and a rigid 200W panel is heavier, near 25 lb. Weight matters on a van roof with a limit. Check the weight before drilling, and remember that roof racks and van roofs have their own load ratings that may be lower than you think."
  },
  {
    "criterion": "Power station compatibility",
    "explanation": "Many stations cap solar input at 60 to 200W and accept 12 to 28V, so a larger panel will not charge faster than the limit. A 150W panel on a station with a 100W input still charges at 100W. Check the station's maximum input and connector."
  },
  {
    "criterion": "Controller needs",
    "explanation": "A panel feeding a 12V battery needs a controller, and a power station has one built in. A PWM controller, as in the DOKIO 150W Panel Kit, wastes some power compared with MPPT. Check whether the controller comes included, and a station accepts the panel directly, so only battery banks need the extra purchase."
  },
  {
    "criterion": "Heat and flexible panels",
    "explanation": "Flexible panels mounted flat against a roof cannot shed heat, which can cut output by 10 to 15 percent in summer and shorten life. A gap of an inch behind a rigid panel keeps it cooler. Check whether the flexible panel allows airflow behind it."
  }
];

export const faq = [
  {
    "q": "How much power does a 200W panel make?",
    "a": "About 600 to 800Wh on a sunny day with 4 to 5 peak sun hours, which is enough for a fridge, lights and a laptop for a day in a van. Panels tilted to the sun make 10 to 25 percent more than flat ones. Shade cuts output sharply."
  },
  {
    "q": "Can I put a flexible panel on a van roof?",
    "a": "Yes, with adhesive or bolts through the pre-drilled holes. The WUZECK 150W Flexible bends 240 degrees. Leave a gap for airflow and use a roof-safe adhesive, because it is hard to remove later and test the layout before you peel the backing."
  },
  {
    "q": "Will a bigger panel charge my power station faster?",
    "a": "Only up to the station's solar input limit. Many stations cap at 60 to 200W, so a 200W panel on a 100W limit gives 100W. Read the station's input rating before buying and a little extra panel wattage helps on cloudy days."
  },
  {
    "q": "What is the difference between PWM and MPPT?",
    "a": "MPPT converts extra voltage into charge current and gets 10 to 30 percent more from a panel, while PWM is simpler and cheaper. The DOKIO 150W Panel Kit includes PWM. For a 200W roof panel, MPPT is worth the money."
  },
  {
    "q": "How do I attach a rigid panel to a roof?",
    "a": "Use aluminum Z-brackets or corner mounts with sealant over each hole and leave an inch of airflow under the panel. Seal cable entries with a gland. Do not drill into a roof frame without checking the layout."
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
