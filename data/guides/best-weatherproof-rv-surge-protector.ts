export const guideSlug = "best-weatherproof-rv-surge-protector";
export const guideTitle = "5 Best Weatherproof RV Surge Protector in 2026";
export const metaTitle = "Best Weatherproof RV Surge Protector in 2026";
export const metaDescription = "Weatherproof RV surge protectors compared by IP rating, fault coverage and cutoff behavior: three 50A units and two 30A units, with honest tradeoffs.";
export const mainKeyword = "best weatherproof rv surge protector";
export const introParagraphs = [
  "A surge protector lives outdoors at the pedestal, so rain, sprinklers and puddles matter as much as joules. Weatherproof claims range from an IP67 sealed cover to a plain all weather shield with no rating at all. This guide compares five units, three 50A and two 30A, by listed ingress rating, the faults each one detects, whether it cuts power and resets itself, and how its joule number should be read against a very different 825J rated rival."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41hMI-M1k6L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-weatherproof-rv-surge-protector-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "2026 𝐍𝐞𝐰 RV Surge Protector 50 Amp with Smart App & Bluetooth",
    "price": "$119.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hMI-M1k6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H4KV71CX?tag=rvgearlab-amz-20",
    "description": "The Edovaf 50A is rated IP67 with a sealed dust tight cover and a flame retardant housing. It lists 22,000J of surge protection, auto shutoff and reset, a built in circuit analyzer, and Bluetooth app monitoring of voltage, current, wattage and frequency. The plug is a standard NEMA TT-50P and the listing says UL listed.\n\nIt costs $50.00 more than the Toujreo 50A, and the extra money buys the app with remote cutoff and the IP67 sealed cover. Pick this if you want to watch the pedestal from inside the rig during a storm. The caveat is that the listing gives no cutoff voltages, so check the manual for exact trip points.",
    "specs": [
      "50A, 22,000J",
      "IP67 sealed cover",
      "Bluetooth app, auto reset"
    ],
    "pros": [
      "IP67 cover keeps rain and sand out of the plug",
      "App shows voltage and current from inside the rig",
      "Auto shutoff and reset after unsafe power returns to normal"
    ],
    "cons": [
      "Costs $50.00 more than a basic 50A unit",
      "Exact cutoff voltages are not stated"
    ],
    "bestFor": "Wet climates and storm season stays"
  },
  {
    "id": "best-weatherproof-rv-surge-protector-2",
    "rank": 2,
    "badge": "Best Value 50A",
    "name": "Toujreo RV Surge Protector 50 Amp - 20000J RV Accessories",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51a0zZ7x1lL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJ62JD6C?tag=rvgearlab-amz-20",
    "description": "The Toujreo 50A lists 20,000J of surge protection, an IP68 weatherproof cover and a LED circuit analyzer with error codes. Housing is V-1 flame retardant, and the unit is FCC tested. It plugs in with no tools and works with campers, motorhomes and travel trailers.\n\nAt $69.99 it is $22.00 more than the RVRVHOMM 50A and $50.00 less than the Edovaf 50A. You give up the app, keeping a screen readout with real time voltage. Pick this if you want a rugged cover and diagnostics without Bluetooth. The caveat is that the listing does not state auto reset behavior or a warranty.",
    "specs": [
      "50A, 20,000J",
      "IP68 weatherproof cover",
      "LED circuit analyzer"
    ],
    "pros": [
      "IP68 cover shields against rain, wind and dust",
      "LED display shows voltage and error codes at the plug",
      "V-1 flame retardant housing adds fire resistance"
    ],
    "cons": [
      "No app, so no remote monitoring from inside",
      "Warranty and auto reset behavior not listed"
    ],
    "bestFor": "Campers wanting a rugged cover without apps"
  },
  {
    "id": "best-weatherproof-rv-surge-protector-3",
    "rank": 3,
    "badge": "Best Budget 50A",
    "name": "RVRVHOMM 30000J 50Amp RV Surge Protector 50 Amp Flag Design - Upgraded Power Surges Voltage Protection Circuit",
    "price": "$47.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VzE7mbjTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F6K3YCWG?tag=rvgearlab-amz-20",
    "description": "The RVRVHOMM 50A lists 30,000J of absorption with MOV, GDT and TVS layers, and a rating of 50A, 125V and 6250W. It carries an IP68 waterproof cover, a 3 year warranty and a circuit analyzer that flags open neutral, open ground, reverse polarity and missing L1 or L2.\n\nAt $47.99 it is $22.00 under the Toujreo 50A, and it states the most fault types of any 50A pick here. The flag styled housing is cosmetic. Pick this if you want the lowest 50A price with a real warranty. The caveat is that a brand with little track record means support is less proven than Progressive's.",
    "specs": [
      "50A/125V/6250W, 30,000J",
      "IP68 waterproof cover",
      "3 year warranty"
    ],
    "pros": [
      "Names nine fault conditions its analyzer can flag",
      "Three year warranty is longer than most budget units",
      "Lowest price among the 50A picks"
    ],
    "cons": [
      "Brand is new, so long term support is unproven",
      "Joule rating does not equal real protection"
    ],
    "bestFor": "Budget 50A pedestals"
  },
  {
    "id": "best-weatherproof-rv-surge-protector-4",
    "rank": 4,
    "badge": "Best 30A Protection",
    "name": "Progressive Industries SSP-30XL Portable RV Smart Surge Protector",
    "price": "$51.55",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41T7u17wX+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B015Y9MX38?tag=rvgearlab-amz-20",
    "description": "The Progressive Industries SSP-30XL is a 30A, 120V portable unit rated at 3,600W and 825 joules. It warns on high and low voltage, open ground and neutral, reverse polarity, surge failure and frequency problems. It includes an all weather shield assembly, thermal protection and a Lexan housing, and is made in the USA.\n\nAt $51.55 it costs $21.56 more than the PlugSaf 30A and lists far fewer joules. Progressive's EMS style behavior is the draw, since it cuts power on bad conditions. The shield is not given an IP rating, so use it in sheltered spots. Pick this if you have a 30A rig and value cutoffs over big joule numbers. The caveat is no app.",
    "specs": [
      "30A, 120V, 3,600W",
      "825J, thermal protection",
      "All weather shield assembly"
    ],
    "pros": [
      "Warns on seven fault types including frequency",
      "Thermal protection shuts it down when overheating",
      "Lexan housing built in the USA"
    ],
    "cons": [
      "Only 825J listed versus 20,000J claims elsewhere",
      "Shield has no listed IP weather rating"
    ],
    "bestFor": "30A rigs wanting reliable cutoffs"
  },
  {
    "id": "best-weatherproof-rv-surge-protector-5",
    "rank": 5,
    "badge": "Best Budget 30A",
    "name": "22000J RV Surge Protector 30 Amp with Auto Shutoff & Reset",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41mZGZOSiEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GDF44K4L?tag=rvgearlab-amz-20",
    "description": "The PlugSaf 30A lists 22,000J, an LED display of voltage, current and power, and auto shutoff for over voltage, under voltage and over temperature. It resets after conditions recover, and its oversized waterproof cover is described as roomy enough for the plug. The listing says ETL and FCC certified.\n\nAt $29.99 it is $21.56 under the Progressive SSP-30XL, the cheapest pick here. The cover is called waterproof but no IP rating is given. Pick this if you have a 30A trailer and want protection plus a readout cheaply. The caveat is that cutoff voltages and warranty are not stated.",
    "specs": [
      "30A, 22,000J",
      "Auto shutoff and reset",
      "ETL and FCC certified"
    ],
    "pros": [
      "Costs only $29.99, the lowest of the five picks",
      "Cuts power on over voltage, under voltage and heat",
      "Large cover fits the plug with room to spare"
    ],
    "cons": [
      "Waterproof cover has no stated IP rating",
      "Warranty length is not listed"
    ],
    "bestFor": "30A trailers on a tight budget"
  }
];

export const howWeEvaluated = [
  {
    "title": "Weather rating",
    "description": "We compared listed IP ratings and cover design, noting where only a vague waterproof claim appears."
  },
  {
    "title": "Fault coverage",
    "description": "We counted the wiring faults each analyzer lists, such as open neutral and reverse polarity."
  },
  {
    "title": "Cutoff behavior",
    "description": "We checked for auto shutoff, auto reset and stated voltage limits."
  },
  {
    "title": "Price and warranty",
    "description": "We weighed price against listed warranty and certification marks."
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
    "subheading": "By Wet Weather Exposure",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Heavy rain or sprinklers at the pedestal",
          "Edovaf 50A",
          "IP67 sealed cover and app to monitor"
        ],
        [
          "Rain and wind, no app needed",
          "Toujreo 50A",
          "IP68 cover at $69.99"
        ],
        [
          "Budget 50A with solid cover",
          "RVRVHOMM 50A",
          "IP68 cover and a 3 year warranty"
        ],
        [
          "Sheltered 30A site",
          "Progressive SSP-30XL",
          "All weather shield and thermal cutoff"
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
          "$20 to $50",
          "PlugSaf 30A or RVRVHOMM 50A"
        ],
        [
          "$50 to $70",
          "Progressive SSP-30XL or Toujreo 50A"
        ],
        [
          "$110 to $120",
          "Edovaf 50A"
        ]
      ]
    }
  },
  {
    "subheading": "High Joules vs Real Cutoffs",
    "cards": [
      {
        "label": "High joule MOV",
        "text": "Edovaf 50A, Toujreo 50A, RVRVHOMM 50A and PlugSaf 30A list 20,000J to 30,000J. Joules say how many spikes it can absorb, not how fast it cuts."
      },
      {
        "label": "EMS style cutoff",
        "text": "Progressive SSP-30XL lists only 825J but warns on seven fault types and disconnects bad power."
      }
    ],
    "note": "Default to a unit with listed auto shutoff, then use joules as a tiebreaker."
  },
  {
    "subheading": "By Amp Service",
    "table": {
      "headers": [
        "Best pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "50A pedestal, want monitoring",
          "Edovaf 50A"
        ],
        [
          "50A pedestal, lowest price",
          "RVRVHOMM 50A"
        ],
        [
          "30A pedestal, best protection",
          "Progressive SSP-30XL"
        ],
        [
          "30A pedestal, lowest price",
          "PlugSaf 30A"
        ]
      ]
    }
  },
  {
    "subheading": "For Campgrounds with Storms Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated IP67 or IP68 cover and auto reset after power returns"
      },
      {
        "label": "In this comparison",
        "text": "The Edovaf 50A lists IP67 and auto reset, and the Toujreo 50A lists IP68, while the Progressive SSP-30XL relies on an unrated shield"
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Edovaf 50A if you travel through storm regions and want remote cutoff from inside the coach."
      },
      {
        "label": "Save if",
        "text": "Save with the PlugSaf 30A at $29.99 if you only visit campgrounds with sheltered pedestals."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "IP rating of the cover",
    "explanation": "An IP67 or IP68 number is a test result, while a word like waterproof is marketing. Plugs sit at ground level where puddles form. Look for a stated IP number in the title or bullets."
  },
  {
    "criterion": "Listed fault detection",
    "explanation": "A good analyzer reports open neutral, open ground, reverse polarity and missing legs before you connect. An unlisted fault can fry gear. Count the faults the listing names."
  },
  {
    "criterion": "Auto shutoff and reset",
    "explanation": "A unit that disconnects at high or low voltage and reconnects after a delay protects motors in your air conditioner. One without cutoff only absorbs spikes. Look for the words auto shutoff and reset."
  },
  {
    "criterion": "Joules versus protection",
    "explanation": "Joules measure total absorbed energy before a part fails, and big numbers are easy to print. They do not show clamp speed or voltage limits. Compare joules only among units with similar cutoff features."
  },
  {
    "criterion": "Amp rating and plug type",
    "explanation": "A 30A unit on a 50A rig, or the reverse, needs adapters that add failure points. A NEMA 14-50 plug differs from a TT-30. Match the amp number to your inlet before buying."
  }
];

export const faq = [
  {
    "q": "Does IP68 mean I can leave it in a puddle?",
    "a": "IP68 means dust tight and rated for submersion under maker conditions. Still keep it off the ground when you can."
  },
  {
    "q": "Are joules the best way to compare surge protectors?",
    "a": "No, joules show capacity, not clamp speed. Cutoff features and fault detection matter at least as much."
  },
  {
    "q": "Can I leave a surge protector plugged in all season?",
    "a": "Yes if it is weather rated and the plug stays dry. Check the connection occasionally for heat discoloration."
  },
  {
    "q": "Do I need a 30A or 50A model?",
    "a": "Match your RV inlet. Using adapters adds a failure point and can hide wiring problems."
  },
  {
    "q": "Should the protector be locked for theft?",
    "a": "Many campers use a cable lock through the housing. Some units have slots for a lock, so check the listing."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Bluetooth RV Surge Protector",
    "href": "/power-electrical/best-bluetooth-rv-surge-protector"
  },
  {
    "title": "Best Budget RV Surge Protector",
    "href": "/power-electrical/best-budget-rv-surge-protector"
  },
  {
    "title": "Best Compact RV Surge Protector",
    "href": "/power-electrical/best-compact-rv-surge-protector"
  },
  {
    "title": "Best Hardwired RV Surge Protector",
    "href": "/power-electrical/best-hardwired-rv-surge-protector"
  }
];
