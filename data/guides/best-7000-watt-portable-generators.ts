export const guideSlug = "best-7000-watt-portable-generators";
export const guideTitle = "3 Best 7000 Watt Portable Generators in 2026";
export const metaTitle = "Best 7000 Watt Portable Generators in 2026";
export const metaDescription = "Best 7000 watt portable generators compared on running watts, fuel type, noise and RV outlets for large trailers and home essentials.";
export const mainKeyword = "best 7000 watt portable generators";
export const introParagraphs = [
  "A 7000 watt generator is the first size that comfortably handles two RV air conditioners or a well-pump and fridge during an outage. It is also where weight, noise and price jump, so the right pick depends on how fixed or mobile your use is.",
  "Three 7000 watt generators made the list, one premium inverter and two lower-cost units. They were compared on the stated output, fuel options, noise and the safety features each listing names."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/furniture-chairs-campfire-night.webp";
export const heroImageAlt = "Two people in folding chairs around a campfire in autumn woods";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-7000-watt-portable-generators-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Honda EU7000iS 7000 Watt 120/240V Inverter Generator",
    "price": "$4999.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Mx8NlNsPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FNRZWFWK?tag=rvgearlab-amz-20",
    "description": "The Honda EU7000iS is a 7000 watt, 120/240V inverter generator with electric start, an app and Bluetooth for remote operation and monitoring, and CO-MINDER carbon monoxide detection. It runs 6.4 to 16 hours on a 5.1 gallon tank at 52 to 58 dB(A).\n\nIt is the quietest of the three, with a stated noise range of 52 to 58 dB(A), against the 69 dB of the Efurden. CO-MINDER shuts the generator down before CO levels near the unit rise, a feature the Powerhorse names only as detection.\n\nIt suits RV owners and households who run a generator for long stretches and want low noise and monitoring. The My Generator app tracks operation from a phone.",
    "specs": [
      "7000W, 120/240V inverter",
      "52 to 58 dB(A), electric start",
      "CO-MINDER, Bluetooth app"
    ],
    "pros": [
      "Quietest of the three",
      "CO-MINDER shutdown before CO builds",
      "App and Bluetooth monitoring",
      "6.4 to 16 hours per tank"
    ],
    "cons": [
      "Highest price by a wide margin",
      "No propane option is listed"
    ],
    "bestFor": "Quiet long-run RV and home use",
    "take": "The benchmark for quiet, long-running power. Worth it if you run a generator for many hours.",
    "catch": "It costs several times more than the other two."
  },
  {
    "id": "best-7000-watt-portable-generators-2",
    "rank": 2,
    "badge": "Best Dual Fuel",
    "name": "Powerhorse Portable Generator with Electric Start",
    "price": "$699.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Twaslf85L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F3CP4RV5?tag=rvgearlab-amz-20",
    "description": "The Powerhorse is a 7,000 watt generator with electric start that switches between gasoline and propane without shutting down. A 298cc engine with a cast iron cylinder sleeve, an automatic voltage regulator with multimeter and a control panel showing run time, voltage and frequency back the output.\n\nIt has the fuel flexibility the Honda lacks and costs far less than the Honda EU7000iS. CO detection with an indicator light warns of excessive emissions.\n\nIt suits campers and backup-power buyers who want propane as an option and a fair price. The multimeter helps check voltage.",
    "specs": [
      "7,000 watts, dual fuel",
      "298cc, cast iron sleeve",
      "CO detection light, multimeter"
    ],
    "pros": [
      "Switches fuel without shutting down",
      "Electric start",
      "Automatic voltage regulator and meter",
      "CO detection with indicator light"
    ],
    "cons": [
      "Weight and size are not stated",
      "No noise figure is stated"
    ],
    "bestFor": "Dual fuel backup power",
    "take": "A fuel-flexible workhorse at a fair price. Good for emergency backup.",
    "catch": "The listing gives no decibel rating."
  },
  {
    "id": "best-7000-watt-portable-generators-3",
    "rank": 3,
    "badge": "Best Mobile Inverter",
    "name": "Efurden 7000 Watt Inverter Generator Quiet",
    "price": "$689.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Qh0xT4CDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HC9XWF8N?tag=rvgearlab-amz-20",
    "description": "The Efurden is a 7000 peak and 5500 running watt inverter generator with a 223cc OHV engine, a 30A RV outlet, THD under 2 percent and a 3.5 gallon tank. The listing quotes up to 11 hours at 25 percent load, 69 dB at 23 feet, an 89 pound body and rolling wheels.\n\nIt is the most affordable of the three, rolls on wheels at 89 pounds and states the lowest THD figure. It states running watts of 5500, which is the number to compare with the Honda's 7000.\n\nIt suits trailer owners who want inverter power on wheels for a lower price. The ECO mode adjusts to the load.",
    "specs": [
      "7000 peak, 5500 running watts",
      "223cc, 30A RV outlet",
      "89 lb with wheels, 69 dB"
    ],
    "pros": [
      "Lowest price of the three",
      "Wheels and handle on an 89 lb body",
      "THD under 2% for electronics",
      "ECO mode with 3.5 gallon tank"
    ],
    "cons": [
      "5500 running watts, not 7000",
      "Louder at 69 dB"
    ],
    "bestFor": "Mobile inverter power for trailers",
    "take": "A value inverter with a clear running watt rating. Check it against your AC load.",
    "catch": "Running watts are 5500, so size the load to that figure."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated watts",
    "description": "Compared the stated output and noted the running figure where it appears."
  },
  {
    "title": "Fuel",
    "description": "Looked at gasoline and propane options."
  },
  {
    "title": "Noise and weight",
    "description": "Noted decibel ratings and carry weight."
  },
  {
    "title": "Safety",
    "description": "Checked for CO detection and shutdown."
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
    "subheading": "By Use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Long run times, quiet",
          "Honda EU7000iS",
          "52 to 58 dB(A) and CO-MINDER"
        ],
        [
          "Propane option on a budget",
          "Powerhorse 7000",
          "Dual fuel with electric start"
        ],
        [
          "Inverter power on wheels",
          "Efurden 7000",
          "89 pounds, 30A outlet"
        ],
        [
          "Phone monitoring",
          "Honda EU7000iS",
          "Bluetooth app"
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
          "$680 to $690",
          "Efurden 7000"
        ],
        [
          "$690 to $700",
          "Powerhorse 7000"
        ],
        [
          "$4990 to $5000",
          "Honda EU7000iS"
        ]
      ]
    }
  },
  {
    "subheading": "Premium vs value",
    "cards": [
      {
        "label": "Premium",
        "text": "The Honda EU7000iS offers quiet running, CO-MINDER and an app, at a much higher price."
      },
      {
        "label": "Value",
        "text": "The Powerhorse 7000 and Efurden 7000 give lower-cost power with propane or inverter electronics."
      }
    ],
    "note": "Most buyers should default to the Powerhorse 7000 for value, or the Honda EU7000iS if noise and long runs justify the cost."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest noise",
          "Honda EU7000iS"
        ],
        [
          "Fuel flexibility",
          "Powerhorse 7000"
        ],
        [
          "Lowest cost",
          "Efurden 7000"
        ],
        [
          "Clean electronics power",
          "Efurden 7000"
        ]
      ]
    }
  },
  {
    "subheading": "For Large Travel Trailers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Running watts above AC load and a 30A or 50A outlet"
      },
      {
        "label": "In this comparison",
        "text": "The Honda EU7000iS is a 120/240V unit, and the Efurden 7000 has a 30A RV outlet with 5500 running watts."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Honda EU7000iS if you will run it long hours near neighbors or a campsite and want CO-MINDER and monitoring."
      },
      {
        "label": "Save if",
        "text": "Save with the Powerhorse 7000 or Efurden 7000 if you only need occasional backup power."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Peak versus running watts",
    "explanation": "Seven thousand peak watts is what a generator can surge for a moment, while the running figure is the limit. The Efurden lists 5500 running watts, so it cannot hold two large air conditioners and a fridge the way a 7000 running unit could. Look for the continuous figure."
  },
  {
    "criterion": "Inverter versus open frame",
    "explanation": "Inverters produce clean power for electronics and run quieter at low load, but weigh and cost more per watt. Open frames suit tools and heavy loads. Check the THD figure and whether the listing says inverter."
  },
  {
    "criterion": "Propane flexibility",
    "explanation": "Propane stores for years and burns cleaner, though output is usually lower than gasoline. Dual fuel units can switch without shutting down. Check the listing for propane watts."
  },
  {
    "criterion": "CO detection and shutdown",
    "explanation": "CO-MINDER and similar systems stop the engine when carbon monoxide rises. They are a backup, so placement outdoors and well away from tents and doors still matters. Look for the shutdown behavior in the listing."
  },
  {
    "criterion": "Weight and wheels",
    "explanation": "A 7000 watt unit can weigh well over 100 pounds, and wheels and a handle make a difference. The Efurden is stated at 89 pounds. Check the weight and the wheel kit."
  }
];

export const faq = [
  {
    "q": "What can a 7000 watt generator run?",
    "a": "Two RV air conditioners, a fridge and lights, as long as the running total fits. Check start surges and use a soft start if needed."
  },
  {
    "q": "Is Honda worth the price?",
    "a": "It is quieter, with CO-MINDER and an app, and suits long run times. For occasional use, the lower-cost units do the job."
  },
  {
    "q": "Is propane worth it?",
    "a": "It stores well and starts easily in the cold. Output is lower than gasoline, so check the derated watts."
  },
  {
    "q": "How do I place a generator at a campsite?",
    "a": "Outdoors, level, 20 feet from tents and doors, exhaust pointed away. Never run it inside."
  },
  {
    "q": "How do I maintain it?",
    "a": "Change oil on the schedule, check the filter and run it every few months. Keep fuel fresh."
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
