export const guideSlug = "best-solar-panels-under-750";
export const guideTitle = "4 Best Solar Panels Under 750 in 2026";
export const metaTitle = "Best Solar Panels Under 750 in 2026";
export const metaDescription = "Best solar panels under $750: four 200 to 990W rigid and portable panel sets compared on bifacial design, voltage, weight and what the budget buys.";
export const mainKeyword = "best solar panels under 750";
export const introParagraphs = [
  "Seven hundred fifty dollars buys a serious array: nearly 1000W of bifacial panels at the top, or 400W of portable panels for a station. Few good options sit under this price that are not already in the $500 tier, so this guide has four picks.",
  "The notes explain what the extra money over the last tier buys: more watts, better certification and bifacial gain, not necessarily better panels."
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
    "id": "best-solar-panels-under-750-1",
    "rank": 1,
    "badge": "Best Value Under $750",
    "name": "HQST 400W Solar Panel",
    "price": "$229.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ouu03inTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GK146PX4?tag=rvgearlab-20",
    "description": "HQST pairs two 200W N-type panels, each on 16BB Grade A+ cells that reach 25.4 percent at best, with IP65 protection and a corrosion-resistant aluminum frame. Each measures 46.3 by 30.1 by 1.2 inches and is 13 percent smaller and 14.5 percent lighter than standard panels.\n\nAt about $230 it gives 400W for the price of a single portable panel and is the lowest price per watt in this guide. The STAR gives 990W for about $430 more.\n\nChoose it for a camper van or RV roof where you want 400W of rigid solar. It is sized for Class B vans.",
    "specs": [
      "Two 200W N-type, 400W",
      "Up to 25.4% efficiency, 16BB",
      "IP65, 46.3 x 30.1 x 1.2 in"
    ],
    "pros": [
      "400W for about $230",
      "Compact for a van roof",
      "N-type cells handle low light",
      "IP65 weather protection"
    ],
    "cons": [
      "Only 400W",
      "Needs a controller"
    ],
    "bestFor": "Van and RV roofs",
    "take": "The lowest price per watt in the guide.",
    "catch": "Pair with an MPPT controller."
  },
  {
    "id": "best-solar-panels-under-750-2",
    "rank": 2,
    "badge": "Best Big Array",
    "name": "STAR 990W Bifacial Solar Panel",
    "price": "$659.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Eu3rd0LhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DFBSBWDG?tag=rvgearlab-20",
    "description": "STAR ships two 495W frameless bifacial panels with 25.6 percent N-type cells at 24V, certified to UL, ISO9001 and CE standards. Without a frame, dust and snow slide off, and the maker puts the gain at 15 percent over framed panels.\n\nAt about $660 it delivers 990W, nearly 2.5 times the HQST, for about 2.9 times the price. It carries UL 61730 certification, which the other picks do not list.\n\nChoose it for a cabin, a large RV roof or a home shed where you want a big array with little cleaning. It needs a 24V MPPT controller.",
    "specs": [
      "Two 495W bifacial panels, 990W",
      "25.6% N-type cells at 24V",
      "Frameless, UL 61730 certified"
    ],
    "pros": [
      "990W of bifacial output",
      "Frameless edge sheds snow and dust",
      "UL, ISO9001 and CE certified",
      "25.6 percent efficient cells"
    ],
    "cons": [
      "Large panels are heavy to lift",
      "Needs a 24V MPPT controller"
    ],
    "bestFor": "Cabins and big roofs",
    "take": "The most solar you can buy under $750.",
    "catch": "Plan for two people to lift them."
  },
  {
    "id": "best-solar-panels-under-750-3",
    "rank": 3,
    "badge": "Best Portable 400W",
    "name": "400W Portable Solar Panel for Power Station",
    "price": "$399.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/519hIfpanHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FCC39XY7?tag=rvgearlab-20",
    "description": "Twelseavan makes 400W in a portable foldable panel with 24 percent A+ cells, a fiberglass and polyester back and a weight of 22.7 lb. A five-way MC4 lead and three adapters are in the box.\n\nAt about $400 it costs $170 more than the HQST 2x200W and folds for travel. The STAR gives 990W for $260 more.\n\nChoose it for a large power station and a camp that needs to move. It weighs about 23 lb and is a two-hand carry.",
    "specs": [
      "400W foldable, 24% A+ cells",
      "22.7 lb, fiberglass back",
      "5-in-1 MC4 cable, three adapters"
    ],
    "pros": [
      "24 percent efficient A+ cells",
      "Light at 22.7 lb for 400W",
      "Five-in-one cable plus adapters",
      "Folds for travel"
    ],
    "cons": [
      "Costs $170 more than rigid 400W",
      "Heavy for one-handed carry"
    ],
    "bestFor": "Large power stations",
    "take": "A 400W portable for a big station.",
    "catch": "Check the station's input limit."
  },
  {
    "id": "best-solar-panels-under-750-4",
    "rank": 4,
    "badge": "Best Starter Kit",
    "name": "ECO-WORTHY 200 Watts 12 Volt/24 Volt Solar Panel Kit with High Efficiency Monocrystalline Solar Panel and 30A ",
    "price": "$189.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41WWXphNKML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09RZZHHHM?tag=rvgearlab-20",
    "description": "ECO-WORTHY is a 200W 12V/24V monocrystalline kit with a controller, pre-drilled mounting holes and a frame rated for 2400Pa wind and 5400Pa snow. It can wire in series for 24V or parallel for 12V, and the maker states up to 800Wh a day at 4 hours of sun.\n\nAt about $190 it carries the lowest price tag here and is the lone kit with a controller in the box. It offers half the watts of the HQST for $40 less.\n\nChoose it for a first solar setup that works with a battery. It comes with 1 year of support.",
    "specs": [
      "200W 12V/24V kit with controller",
      "2400Pa wind, 5400Pa snow",
      "Series or parallel wiring"
    ],
    "pros": [
      "Controller included",
      "Series or parallel wiring",
      "Pre-drilled mounting holes",
      "1 year with 24/7 support"
    ],
    "cons": [
      "Only 200W",
      "Warranty is only 1 year"
    ],
    "bestFor": "A first complete system",
    "take": "A starter kit with the controller included.",
    "catch": "Do not size it for a big battery."
  }
];

export const howWeEvaluated = [
  {
    "title": "Total watts",
    "description": "Sets from 200W to 990W were compared per dollar."
  },
  {
    "title": "Format",
    "description": "Rigid and portable panels were separated."
  },
  {
    "title": "Certification",
    "description": "UL, TÜV and cell types were compared."
  },
  {
    "title": "Weight",
    "description": "Weights and mounting needs were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is under $750, and the top pick gives 400W for the lowest price per watt."
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
          "Van roof, lowest cost",
          "HQST 2x200W",
          "400W for about $230."
        ],
        [
          "Large cabin array",
          "STAR 990W Bifacial",
          "990W bifacial."
        ],
        [
          "Portable for a big station",
          "Twelseavan 400W Portable",
          "22.7 lb, adapters."
        ],
        [
          "First battery system",
          "ECO-WORTHY 200W Kit",
          "Controller included."
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
          "$180 to $230",
          "ECO-WORTHY 200W Kit or HQST 2x200W"
        ],
        [
          "$390 to $660",
          "Twelseavan 400W Portable or STAR 990W Bifacial"
        ]
      ]
    }
  },
  {
    "subheading": "Rigid vs portable",
    "cards": [
      {
        "label": "Rigid",
        "text": "The HQST 2x200W, STAR 990W Bifacial and ECO-WORTHY 200W Kit give the most watts per dollar and last decades. They need mounts."
      },
      {
        "label": "Portable",
        "text": "The Twelseavan 400W Portable folds and plugs into a station. It costs about $1.00 per watt."
      }
    ],
    "note": "Most buyers should take the HQST 2x200W for a fixed install."
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
          "About $190",
          "ECO-WORTHY 200W Kit"
        ],
        [
          "About $230",
          "HQST 2x200W"
        ],
        [
          "About $400",
          "Twelseavan 400W Portable"
        ],
        [
          "About $660",
          "STAR 990W Bifacial"
        ]
      ]
    }
  },
  {
    "subheading": "For an off-grid cabin specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a rigid set with 400W or more, 24V wiring and an MPPT controller."
      },
      {
        "label": "In this comparison",
        "text": "The STAR 990W Bifacial gives 990W at 24V, and the HQST 2x200W gives 400W for less."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you need a big array and certification, which the STAR 990W Bifacial provides at about $660. Spend on the Twelseavan 400W Portable only if you need to carry it."
      },
      {
        "label": "Save if",
        "text": "Save if 400W is enough, since the HQST 2x200W costs about $230."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watts per dollar",
    "explanation": "At about $0.57 per watt for the HQST 2x200W and $0.67 for the STAR 990W, the rigid sets beat portable panels at $1.00 per watt. A portable panel costs about 75 percent more per watt but moves with you. Divide the price by the watts before you compare."
  },
  {
    "criterion": "Certification",
    "explanation": "UL 61730 and TÜV certifications show independent safety testing and matter for insurance and permits. Cheap panels often have no listing. Check the certification in the product details, and permits or insurance for a cabin may require a listing such as UL 61730, so ask before you buy because an unlisted panel can be refused by an inspector even when it works well."
  },
  {
    "criterion": "Voltage and wiring",
    "explanation": "A 24V panel pair wired in series gives 48V, which suits a high-voltage MPPT controller, while parallel wiring keeps 24V and doubles the current. A 12V controller will not accept 48V. Check the controller input limit, so check the open-circuit voltage on a cold morning, when it can rise about 10 to 15 percent above the label, and keep the total under the controller limit."
  },
  {
    "criterion": "Weight and handling",
    "explanation": "A 495W panel weighs 50 lb or more and needs two people to lift it to a roof, while a 200W panel weighs 25 lb. Mounting large panels needs strong brackets. Check the weight before you buy, and a panel of that size catches the wind like a sail, so mounting it on a roof is a job for two people with proper brackets and a calm day."
  },
  {
    "criterion": "Bifacial gain",
    "explanation": "A bifacial panel adds 10 to 30 percent over a light surface and little over a dark roof. Mount it above gravel or a white membrane for the best gain. Check where the panel will sit, and the back side also needs clearance and airflow, so a panel flat on a dark roof will not collect the extra light the label implies."
  },
  {
    "criterion": "Controller and battery",
    "explanation": "A 990W array at 24V produces 40A, which needs a 60A MPPT controller and a battery bank that can accept the current. That cost is separate from the panels. Check the controller and battery rating, so budget $150 to $300 for the controller and a battery bank, because the panels alone do not make a working system."
  }
];

export const faq = [
  {
    "q": "How much power does 990W of solar make?",
    "a": "About 3 to 4 kWh a day in good sun, enough to run a fridge, lights and a laptop and charge a 3 kWh battery. Shade and angle cut it sharply. Winter output may be a third of that."
  },
  {
    "q": "Do I need UL certification?",
    "a": "For a permanent home or cabin install, building codes and insurers may require it. For a van or portable use it is not required but is a sign of quality. Check the local rules and it can also lower insurance questions."
  },
  {
    "q": "Can I use rigid panels with a power station?",
    "a": "Yes, if the voltage and connector match. A rigid panel has MC4 leads and needs an adapter. Check the station's input range and its maximum watts, and a short adapter cable is a cheap fix."
  },
  {
    "q": "What controller do I need for 990W?",
    "a": "A 24V or 48V MPPT controller rated at 40 to 60A. A 12V controller will not handle it. Check the controller's maximum input voltage, and check that it accepts the open-circuit voltage on a cold day."
  },
  {
    "q": "How do I mount big panels?",
    "a": "Use aluminum rails and corner mounts rated for the panel's weight and wind load, and seal every roof hole. Two people are needed. Check the panel's wind rating, and check the roof structure first and tilt them in winter."
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
