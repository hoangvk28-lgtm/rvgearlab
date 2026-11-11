export const guideSlug = "best-camping-batteries-for-cpap";
export const guideTitle = "4 Best Camping Batteries For CPAP in 2026";
export const metaTitle = "Best Camping Batteries For CPAP in 2026";
export const metaDescription = "Best camping batteries for CPAP compared on capacity, CPAP cable sets and output ports, for campers who need to power a sleep device off-grid.";
export const mainKeyword = "best camping batteries for cpap";
export const introParagraphs = [
  "Powering a CPAP off-grid starts with the device itself: its voltage, whether it runs a heated humidifier and whether it takes a DC cable. The listings here state compatibility, but only your device maker can confirm yours.",
  "Four batteries made the list, three built for CPAP and one general power station that names CPAP among its uses. They were compared on watt-hours, cable sets, output ports and travel limits, with no runtime promised."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/home-golden-hour-campsite.webp";
export const heroImageAlt = "Dome tent and hammock at a forest campsite at golden hour";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-camping-batteries-for-cpap-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "BLUETTI CPAP Battery Backup X30 297Wh Power Supply with Comprehensive Set",
    "price": "$299.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31E+5ZhQK0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CN2T2TZZ?tag=rvgearlab-amz-20",
    "description": "The BLUETTI X30 is a 297Wh CPAP battery with three DC outputs (12V/5A, 15V/4A, 24V/4A) and a USB-A port. It weighs 3.9 lbs and ships with five labelled cables and an accessory bag.\n\nIt holds about the same energy as the EASYLONGER ES960 and nearly double the Freedom. The multiple DC voltages let it match more devices.\n\nIt suits campers who want labelled cables and several voltages. The listing names ResMed and Philips models, so check your exact model with the maker.",
    "specs": [
      "297Wh, three DC outputs",
      "Five labelled cables",
      "3.9 lbs, handle and bag"
    ],
    "pros": [
      "Three DC voltages for matching devices",
      "Five labelled cables included",
      "Compact at 3.9 lbs",
      "Handle and accessory bag"
    ],
    "cons": [
      "No AC outlet listed",
      "Listing shows no battery chemistry"
    ],
    "bestFor": "Multi-device CPAP kits",
    "take": "The most flexible CPAP-focused pack, with labelled cables.",
    "catch": "Check your device's voltage and cable before you buy."
  },
  {
    "id": "best-camping-batteries-for-cpap-2",
    "rank": 2,
    "badge": "Best Capacity",
    "name": "EASYLONGER CPAP Battery Backup ES960",
    "price": "$299.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41qYyeKqxCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FNQZYQTH?tag=rvgearlab-amz-20",
    "description": "The EASYLONGER ES960 is a 297.6Wh LiFePO4 pack with four CPAP cables and six output ports. The listing names ResMed AirSense 10 and 11, AirMini, Philips DreamStation 1 and 2, and Luna G3 as compatible, with a note that heated tubes are not supported.\n\nIt uses LiFePO4 with 3000+ cycles, a chemistry the Freedom does not name. It exceeds the 160Wh airline limit, which the Freedom stays under.\n\nIt suits car campers who want a power station and CPAP battery in one. It also lists compatibility with devices under 180W.",
    "specs": [
      "297.6Wh LiFePO4",
      "Four CPAP cables, six ports",
      "3000+ cycles"
    ],
    "pros": [
      "LiFePO4 with a stated 3000+ cycles",
      "Four CPAP cables included",
      "Six output ports",
      "FSA/HSA eligible per the listing"
    ],
    "cons": [
      "Exceeds the 160Wh airline limit",
      "Heated tubes are not supported"
    ],
    "bestFor": "Car camping",
    "take": "A LiFePO4 CPAP pack that also doubles as a power station.",
    "catch": "The listing notes it is not airline approved."
  },
  {
    "id": "best-camping-batteries-for-cpap-3",
    "rank": 3,
    "badge": "Best Travel",
    "name": "Freedom CPAP Battery 160Wh",
    "price": "$349.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51t3qopCAIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C4S7D5C4?tag=rvgearlab-amz-20",
    "description": "The Freedom CPAP Battery is a 160Wh pack within the FAA carry-on limit. The listing names compatibility with ResMed AirSense 10 and 11, AirMini, AirCurve 10 ASV, Philips DreamStation 1 and 2, Luna G3 and Luna TravelPAP.\n\nIt holds about half the energy of the BLUETTI X30. It is the one that fits airline rules.\n\nIt suits campers who fly to a trip. It also suits bedside outage protection.",
    "specs": [
      "160Wh, FAA carry-on size",
      "Names major CPAP brands",
      "Outage and travel use"
    ],
    "pros": [
      "Within FAA carry-on limits",
      "Names major CPAP models",
      "Compact portable design",
      "Bedside outage protection"
    ],
    "cons": [
      "Smallest capacity of the four",
      "Highest price per watt-hour"
    ],
    "bestFor": "Fly-in camping",
    "take": "A CPAP pack small enough for the airline.",
    "catch": "Confirm with your device maker how many nights it will last."
  },
  {
    "id": "best-camping-batteries-for-cpap-4",
    "rank": 4,
    "badge": "Best General Station",
    "name": "Portable Power Station 300W MARBERO 237Wh Camping Solar Generator Backup Lithium Battery with Pure Sine Wave 1",
    "price": "$123.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ZtLxeqjXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CJHNCZ8T?tag=rvgearlab-amz-20",
    "description": "The MARBERO M823 is a 237Wh power station with two 300W AC outlets (375W peak), USB-A QC3.0 ports and a built-in BMS. It lists three recharge methods, two LED lights and a title that names CPAP among its uses.\n\nIt costs the least and offers AC outlets that the CPAP-specific packs lack. It is a general station, not a CPAP-specific pack.\n\nIt suits campers who also want a station for lights and phones. The title names CPAP among its uses.",
    "specs": [
      "237Wh, two 300W AC outlets",
      "BMS, three recharge ways",
      "Two LED lights"
    ],
    "pros": [
      "Lowest price of the four",
      "Two AC outlets",
      "Three ways to recharge",
      "BMS protection"
    ],
    "cons": [
      "Not CPAP-specific",
      "No labelled CPAP cables"
    ],
    "bestFor": "General camp power",
    "take": "A cheaper all-purpose station that names CPAP among uses.",
    "catch": "Ask your device maker before using any inverter-based power for a CPAP."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated compatibility",
    "description": "Read the CPAP brands named and noted what each listing cannot confirm."
  },
  {
    "title": "Capacity",
    "description": "Compared watt-hours."
  },
  {
    "title": "Cables and ports",
    "description": "Looked at cable sets and DC voltages."
  },
  {
    "title": "Travel limits",
    "description": "Noted airline limits."
  },
  {
    "title": "Chemistry",
    "description": "Checked LiFePO4 mentions."
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
    "subheading": "By Trip Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Multi-device kit",
          "BLUETTI X30 CPAP Battery",
          "Three DC voltages and five cables."
        ],
        [
          "Car camping",
          "EASYLONGER ES960",
          "297.6Wh LiFePO4 and four cables."
        ],
        [
          "Flying to camp",
          "Freedom CPAP Battery",
          "Within FAA carry-on limits."
        ],
        [
          "General station",
          "MARBERO 237Wh Station",
          "Two AC outlets at a low price."
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
          "$120 to $300",
          "MARBERO 237Wh Station or BLUETTI X30 CPAP Battery"
        ],
        [
          "$290 to $350",
          "EASYLONGER ES960 or Freedom CPAP Battery"
        ]
      ]
    }
  },
  {
    "subheading": "CPAP-Specific vs General Station",
    "cards": [
      {
        "label": "CPAP-specific",
        "text": "The BLUETTI X30 CPAP Battery, EASYLONGER ES960 and Freedom CPAP Battery come with CPAP cables and named compatibility."
      },
      {
        "label": "General station",
        "text": "The MARBERO 237Wh Station has AC outlets but no CPAP cables, so it needs a power adapter."
      }
    ],
    "note": "Most CPAP users should pick a CPAP-specific pack like the BLUETTI X30 CPAP Battery."
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
          "Lowest price",
          "MARBERO 237Wh Station"
        ],
        [
          "Mid-range",
          "EASYLONGER ES960"
        ],
        [
          "Premium",
          "Freedom CPAP Battery"
        ]
      ]
    }
  },
  {
    "subheading": "For Airline Travel Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A battery at or under 160Wh, as airlines limit carry-on lithium."
      },
      {
        "label": "In this comparison",
        "text": "The Freedom CPAP Battery lists 160Wh and FAA compliance."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BLUETTI X30 CPAP Battery or EASYLONGER ES960 for capacity."
      },
      {
        "label": "Save if",
        "text": "Save with the MARBERO 237Wh Station if you already have the adapter your device needs."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "CPAP voltage and cable",
    "explanation": "A CPAP runs at a specific DC voltage, often 12V, 15V or 24V. A battery needs the matching output and cable. Check your device's manual and the listing's cable list."
  },
  {
    "criterion": "Humidifier and heated tube",
    "explanation": "A heated humidifier or tube can draw several times more than the machine alone. Many CPAP batteries do not support heated tubes. Check what the listing says."
  },
  {
    "criterion": "Watt-hours",
    "explanation": "Capacity decides how many nights you get, but runtime depends on pressure and settings. Treat any listing figure as a guide. Confirm with your device maker."
  },
  {
    "criterion": "Airline limit",
    "explanation": "Airlines limit lithium batteries to 160Wh in carry-on. A 297Wh pack is not approved for flights. Check the Wh against airline rules."
  },
  {
    "criterion": "Pass-through charging",
    "explanation": "Pass-through lets you run the CPAP while the battery charges. It matters during outages. Look for the term in the listing."
  },
  {
    "criterion": "Chemistry and safety",
    "explanation": "LiFePO4 cells handle heat better than other lithium types, and a battery management system protects against overload and short circuits. A bedside device deserves that protection. Check the listing for both."
  }
];

export const faq = [
  {
    "q": "Will these batteries work with my CPAP?",
    "a": "Each listing names compatible models, such as the Freedom CPAP Battery for AirSense 10 and 11. Confirm with your device maker before buying."
  },
  {
    "q": "What is the common mistake?",
    "a": "Forgetting the humidifier. A heated humidifier drains a battery much faster, and heated tubes are not supported on the EASYLONGER ES960."
  },
  {
    "q": "Is a bigger battery worth it?",
    "a": "For multi-night trips, yes. The BLUETTI X30 CPAP Battery holds more than the Freedom CPAP Battery. It is not airline approved."
  },
  {
    "q": "How do I set up a CPAP battery?",
    "a": "Connect the matching cable and test it at home before the trip. Confirm the voltage with your device maker."
  },
  {
    "q": "How do I maintain a CPAP battery?",
    "a": "Charge it before each trip and store it partly charged. Keep it dry and cool."
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
