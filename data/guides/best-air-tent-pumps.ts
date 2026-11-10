export const guideSlug = "best-air-tent-pumps";
export const guideTitle = "5 Best Air Tent Pumps in 2026";
export const metaTitle = "Best Air Tent Pumps in 2026";
export const metaDescription = "Best air tent pumps compared by pressure, power source and nozzles: four electric pumps and a hand pump for inflating beam-frame tents.";
export const mainKeyword = "best air tent pumps";
export const introParagraphs = [
  "An air tent is only as quick to set up as its pump, and pump specs matter more than they look. Pressure in PSI, battery size and nozzle fit decide whether a pump finishes the job or stalls halfway up the beam.",
  "We compared five pumps by maximum pressure, power source, included nozzles and what the listing says about air tents. One hand pump is included for campers who want a battery-free backup."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-lakeside-campsite.webp";
export const heroImageAlt = "Colorful tents pitched beside a misty mountain lake";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-air-tent-pumps-1",
    "rank": 1,
    "badge": "Best Made-for-Air-Tents Pump",
    "name": "SENLEETO 40L/min High Pressure Eletric Air Pump for Inflatable Tents",
    "price": "$36.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/414SLhxT6dL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H2952RL5?tag=rvgearlab-20",
    "description": "The SENLEETO electric pump is built for air tents, with a dedicated nozzle, 7 PSI pressure, 40 L/min flow and auto-shutoff. A 2000mAh battery charges by Type-C and gives four inflations of a 6.7 square meter tent or two of a 12 square meter tent.\n\nNext to the OUTZATA it adds a stated tent pressure and per-charge tent counts, and against the Mojimdo it gives a tent-specific nozzle at a much lower price. The listing says small tents inflate in 5 to 8 minutes and larger ones in 10 to 15.\n\nIt suits a family with a mid-size air tent who wants a pump matched to the job. A travel lock keeps it from switching on in the bag.",
    "specs": [
      "7 PSI, 40 L/min flow",
      "2000mAh, Type-C charging",
      "Auto-off, dedicated tent nozzle"
    ],
    "pros": [
      "Built for air tents, with a dedicated nozzle",
      "Stated tent inflations per charge",
      "Auto-shutoff stops at pressure",
      "Travel lock for the pack"
    ],
    "cons": [
      "Smaller battery than the OUTZATA",
      "Needs a recharge between trips"
    ],
    "bestFor": "Mid-size air tents",
    "take": "The most tent-focused electric pump here at a mid price.",
    "catch": "Two inflations on a 12 square meter tent means a bigger tent needs a recharge."
  },
  {
    "id": "best-air-tent-pumps-2",
    "rank": 2,
    "badge": "Best Battery Capacity",
    "name": "Portable Air Pump for Inflatable Tent & Air Mattress",
    "price": "$35.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41j8+baduPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GYDF3FVL?tag=rvgearlab-20",
    "description": "The OUTZATA pump weighs 1.40 lbs, measures 3.35 by 6.42 inches and holds a 6000mAh battery that charges through Type-C from a power bank, laptop, car charger or wall adapter. The listing says it can inflate 25 to 30 camping tents on a charge.\n\nIt lists the largest battery capacity in the group and is far lighter than the 2.9 lb Mojimdo. Against the SENLEETO it comes with a single nozzle, designed for inflatable tents and thick air mattresses.\n\nIt suits a camper who wants one light pump for the tent and the air mattress. It charges from many sources.",
    "specs": [
      "6000mAh, Type-C charging",
      "1.40 lb, 3.35 x 6.42 inch",
      "25-30 tents per charge"
    ],
    "pros": [
      "Largest listed battery capacity",
      "Light at 1.40 lb",
      "Charges from a power bank or car",
      "Fits a tent and a thick mattress"
    ],
    "cons": [
      "Only one nozzle in the box",
      "Needs cooling after 10 minutes of running"
    ],
    "bestFor": "Light packing, many inflations",
    "take": "A compact pump with the biggest battery of the group.",
    "catch": "The listing says not to run it over 10 minutes at a stretch."
  },
  {
    "id": "best-air-tent-pumps-3",
    "rank": 3,
    "badge": "Best Nozzle Kit",
    "name": "Rechargeable Electric Air Pump for Camping Tents",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Q59jNBFUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H9Y74N29?tag=rvgearlab-20",
    "description": "The Dierraotdr pump is rated for 10 PSI maximum pressure and has dual top and bottom ports for inflating and deflating. It comes with two tent valve adapters, a multi-nozzle set and a Type-C charging cable.\n\nIt is the only pick that ships tent valve adapters as well as a nozzle set, and it has a higher pressure ceiling than the SENLEETO's 7 PSI. It costs more than the SENLEETO and OUTZATA.\n\nIt suits a camper with several valve styles to cover. Deflation saves the end-of-trip squeeze.",
    "specs": [
      "10 PSI max, dual ports",
      "2 tent valve adapters, nozzles",
      "Type-C rechargeable battery"
    ],
    "pros": [
      "Higher 10 PSI ceiling",
      "Two tent valve adapters included",
      "Inflates and deflates",
      "Rechargeable, no cord"
    ],
    "cons": [
      "Battery size is not listed",
      "Costs more than the SENLEETO"
    ],
    "bestFor": "Several valve types",
    "take": "A flexible pump kit for odd valves.",
    "catch": "The listing gives no battery capacity, so run time is hard to judge."
  },
  {
    "id": "best-air-tent-pumps-4",
    "rank": 4,
    "badge": "Best Multi-Use Pump",
    "name": "20PSI Electric Paddle Board Pump",
    "price": "$68.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41IXTMtduAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F1TGW8J5?tag=rvgearlab-20",
    "description": "The Mojimdo is a 20 PSI smart pump with five presets, including a Tent Mode at 4.5 PSI, a SUP mode at 12 PSI and a pool float mode. It adds a deflation mode with 0.5 PSI control and a 12V car connector.\n\nIt is the most powerful and the priciest pump here, and a good fit for owners with paddle boards or kayaks as well. The listing says it weighs 2.9 lbs and measures 7 by 6 by 3 inches.\n\nIt suits a camper who also owns a paddle board or kayak. The preset buttons take the guesswork out of pressure.",
    "specs": [
      "20 PSI, 5 presets",
      "Tent Mode 4.5 PSI",
      "12V car connector"
    ],
    "pros": [
      "Five presets, including a tent mode",
      "12V car adapter for extra power",
      "Deflation mode with fine control",
      "Handles paddle boards too"
    ],
    "cons": [
      "Priciest pump in this list",
      "Heavier at 2.9 lbs"
    ],
    "bestFor": "Tents plus paddle gear",
    "take": "A do-it-all pump if tents are only one of your inflatables.",
    "catch": "Tent Mode is set at 4.5 PSI, so check your tent's rated pressure first."
  },
  {
    "id": "best-air-tent-pumps-5",
    "rank": 5,
    "badge": "Best Hand Pump",
    "name": "SENLEETO 15 PSI High Pressure Hand Pump with Gauge",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41qwx4xHwKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H2PRCGSZ?tag=rvgearlab-20",
    "description": "The SENLEETO hand pump delivers 6 liters of air per stroke at up to 15 PSI and includes a pressure gauge and five nozzles. It weighs 0.85 kg (1.87 lbs) and has an aluminum piston shaft and anti-slip handles.\n\nUnlike the electric pumps it needs no battery and costs the least. A gauge lets you stop at your tent's rated pressure.\n\nIt suits a camper who wants a backup or a battery-free pump. It also inflates other gear with its nozzle set.",
    "specs": [
      "6 L per stroke, 15 PSI",
      "Pressure gauge, 5 nozzles",
      "0.85 kg, aluminum shaft"
    ],
    "pros": [
      "No battery to charge",
      "Built-in pressure gauge",
      "Five nozzles fit many valves",
      "Lowest price in this list"
    ],
    "cons": [
      "Pumping a big tent takes effort",
      "Slower than electric pumps"
    ],
    "bestFor": "Backup for any air tent",
    "take": "A dependable battery-free backup.",
    "catch": "Filling a large air tent by hand is a workout, so keep it as a backup."
  }
];

export const howWeEvaluated = [
  {
    "title": "Pressure",
    "description": "We compared maximum PSI and any tent-specific pressure each listing names."
  },
  {
    "title": "Power source",
    "description": "Battery size, charging port and 12V options were compared."
  },
  {
    "title": "Nozzles and valves",
    "description": "Included nozzles and tent valve adapters were counted."
  },
  {
    "title": "Capacity claims",
    "description": "Inflations per charge were noted where listed."
  },
  {
    "title": "Weight and price",
    "description": "Weight and cost were compared across the five."
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
    "subheading": "By Tent Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Mid-size air tent, wants a matched pump",
          "SENLEETO 7 PSI Electric Pump",
          "Tent nozzle, 4 inflations of a 6.7 sq m tent."
        ],
        [
          "Several tents or beds, long trip",
          "OUTZATA 6000mAh Portable Pump",
          "Largest listed battery, 25-30 tents claimed."
        ],
        [
          "Odd valve types",
          "Dierraotdr 10 PSI Pump",
          "Two tent valve adapters plus nozzles."
        ],
        [
          "Tent plus paddle board",
          "Mojimdo 20 PSI Smart Pump",
          "Five presets with a tent mode."
        ],
        [
          "Battery-free backup",
          "SENLEETO 15 PSI Hand Pump",
          "Gauge and five nozzles."
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
          "$20 to $40",
          "SENLEETO 15 PSI Hand Pump or OUTZATA 6000mAh Portable Pump"
        ],
        [
          "$30 to $60",
          "SENLEETO 7 PSI Electric Pump or Dierraotdr 10 PSI Pump"
        ],
        [
          "$60 to $70",
          "Mojimdo 20 PSI Smart Pump"
        ]
      ]
    }
  },
  {
    "subheading": "Electric vs Hand Pump",
    "cards": [
      {
        "label": "Electric",
        "text": "SENLEETO 7 PSI Electric Pump, OUTZATA 6000mAh Portable Pump, Dierraotdr 10 PSI Pump and Mojimdo 20 PSI Smart Pump inflate quickly and can auto-stop."
      },
      {
        "label": "Hand",
        "text": "SENLEETO 15 PSI Hand Pump needs no power and has a gauge, but takes effort on a large tent."
      }
    ],
    "note": "Most campers should carry an electric pump like SENLEETO 7 PSI Electric Pump and keep SENLEETO 15 PSI Hand Pump as a backup."
  },
  {
    "subheading": "By Power Source",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Power bank or car charger",
          "OUTZATA 6000mAh Portable Pump"
        ],
        [
          "12V car connector",
          "Mojimdo 20 PSI Smart Pump"
        ],
        [
          "Type-C only, tent nozzle",
          "SENLEETO 7 PSI Electric Pump"
        ],
        [
          "No power",
          "SENLEETO 15 PSI Hand Pump"
        ]
      ]
    }
  },
  {
    "subheading": "For Family Air Tents Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A pump with auto-off, a tent nozzle and enough battery for a large tent."
      },
      {
        "label": "In this comparison",
        "text": "SENLEETO 7 PSI Electric Pump lists a 6.7 and 12 square meter tent capacity, and OUTZATA 6000mAh Portable Pump lists more battery."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you also inflate paddle boards or need a 12V connector, since Mojimdo 20 PSI Smart Pump adds presets and a car adapter."
      },
      {
        "label": "Save if",
        "text": "Save if you only need a backup, because SENLEETO 15 PSI Hand Pump costs least and needs no charge."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match pressure to the tent",
    "explanation": "An air tent beam inflates to a low pressure, and the listings here quote 4.5 and 7 PSI for tents. Higher pressure can damage the beams. A pump with a gauge or auto-stop protects the beams. Check your tent's rated PSI before you buy."
  },
  {
    "criterion": "Battery size and inflations",
    "explanation": "Pump batteries range from 2000mAh to 6000mAh. A bigger battery means more tent inflations per charge. Look for the stated inflations per charge on the listing."
  },
  {
    "criterion": "Nozzle and valve fit",
    "explanation": "A pump that does not fit the tent valve is useless. Some pumps ship with one nozzle, others with a full set or adapters. Check the nozzle list against your tent's valve."
  },
  {
    "criterion": "Auto-shutoff",
    "explanation": "An auto-off stops the pump at the set pressure, which protects the beams. Without it you must watch the gauge. Look for auto-off or a gauge."
  },
  {
    "criterion": "Charging method",
    "explanation": "Type-C charging works with power banks and car chargers. A 12V car connector adds another source. Check the charging port and options."
  },
  {
    "criterion": "Duty cycle",
    "explanation": "Some pumps must rest after ten minutes of running. A big tent can take a long time. Look for run-time limits on the listing."
  }
];

export const faq = [
  {
    "q": "Can I use a mattress pump on an air tent?",
    "a": "Only if it reaches the tent's pressure and fits the valve. Many mattress pumps top out at low pressure. Check the pump's PSI and the tent's rating."
  },
  {
    "q": "What PSI do air tents need?",
    "a": "The pump listings here quote 4.5 and 7 PSI for tents, but each tent has its own rating. Check the tent's manual. A gauge or auto-stop avoids over-inflation."
  },
  {
    "q": "Is the higher pressure of the Mojimdo better?",
    "a": "Not for tents, since the beams do not need 20 PSI. The Mojimdo's Tent Mode is set to 4.5 PSI. Higher maximum helps for paddle boards."
  },
  {
    "q": "How do I attach the pump to the tent valve?",
    "a": "Remove the valve cap, fit the matching nozzle and lock it in. Start the pump and let it stop at pressure. Close the valve cap."
  },
  {
    "q": "How do I take care of a pump battery?",
    "a": "Charge it after a trip and top it up every few months. Keep it out of hot cars. Let it cool after long runs."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Tents",
    "href": "/tents-shelter/best-camping-tents"
  },
  {
    "title": "Best Tent Stakes",
    "href": "/tents-shelter/best-tent-stakes"
  },
  {
    "title": "Best 4 Season Tent Under 200",
    "href": "/tents-shelter/best-4-season-tent-under-200"
  },
  {
    "title": "Best 4 Season Tent Under 300",
    "href": "/tents-shelter/best-4-season-tent-under-300"
  }
];
