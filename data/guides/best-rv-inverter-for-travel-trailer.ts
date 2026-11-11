export const guideSlug = "best-rv-inverter-for-travel-trailer";
export const guideTitle = "3 Best RV Inverter For Travel Trailer in 2026";
export const metaTitle = "Best RV Inverter For Travel Trailer in 2026";
export const metaDescription = "Three compact 12V inverters sized for travel trailers, from an 800W pure sine unit to a 2500W model, with tongue battery, wiring and 30A shore power notes.";
export const mainKeyword = "best rv inverter for travel trailer";
export const introParagraphs = [
  "Travel trailers are the tightest installs in RV life. The battery usually sits on the tongue, the inverter has to fit in a small front compartment or under a bed, and most trailers have 30 amp shore service with a 12V converter already built in. That changes what a good inverter looks like: modest wattage, short cable runs and no need for its own charger. These three picks stay small and honest about what they can run."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41xOH7epGGL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-inverter-for-travel-trailer-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "WZRELB 800W Pure Sine Wave Inverter 12V DC to 110V 120V AC",
    "price": "$75.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xOH7epGGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DJVHTFY7?tag=rvgearlab-amz-20",
    "description": "The WZRELB 800W is a pure sine inverter with dual AC outlets, an LED display and soft start, measuring 10.1 by 3.8 by 2.5 inches and weighing 2.64 lb. At $75.99 it is small enough to tuck in a tongue box or cabinet and clean enough for laptops, TVs and CPAPs.\n\nIt is $79.01 under the TVNIKD 2500W and $6.00 more than the OLTEANP 1000W. The extra six dollars buys pure sine output, which the other low-cost units do not clearly list. Pick this if your trailer loads are electronics. Caveat: 800W will not run a microwave, and its idle draw is not listed.",
    "specs": [
      "800W pure sine wave",
      "10.1 x 3.8 x 2.5 inches",
      "2.64 lb, soft start"
    ],
    "pros": [
      "Compact 2.64 lb body fits a tongue box",
      "Soft start eases the AC voltage up smoothly",
      "Pure sine output protects laptops and CPAPs"
    ],
    "cons": [
      "800W is too small to run a microwave",
      "Idle draw is not listed"
    ],
    "bestFor": "Electronics from a tongue battery"
  },
  {
    "id": "best-rv-inverter-for-travel-trailer-2",
    "rank": 2,
    "badge": "Best Budget",
    "name": "1000W Power Inverter 12V DC to 110V/120V AC Car Converter for Vehicles",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iXQ6oro1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D8T8Q92V?tag=rvgearlab-amz-20",
    "description": "The OLTEANP 1000W gives 1000W continuous and 2000W peak with six safety protections, a temperature controlled fan and an LCD showing voltage and battery state. At $69.99 it is the cheapest unit here and designed for car, truck and camping use.\n\nIt is $6.00 under the WZRELB 800W and $85.01 below the TVNIKD 2500W. You gain 200W of capacity over the WZRELB but the excerpt does not state a pure sine waveform. Pick this if you run a coffee maker or small appliance and want to spend little. Caveat: waveform and dimensions are not stated.",
    "specs": [
      "1000W, 2000W peak",
      "Six listed protections",
      "Temperature controlled fan"
    ],
    "pros": [
      "Lowest price of the three at $69.99 for 1000W",
      "LCD shows voltage and battery state",
      "1000W runs a coffee maker or blender"
    ],
    "cons": [
      "Waveform is not clearly listed, so confirm before buying",
      "Aimed at vehicle use, not permanent installs"
    ],
    "bestFor": "Cheap backup for small appliances"
  },
  {
    "id": "best-rv-inverter-for-travel-trailer-3",
    "rank": 3,
    "badge": "Best for Bigger Loads",
    "name": "TVNIKD 2500 Watt car Power Inverter 12V to 110V /120V",
    "price": "$155.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51clmwjfdpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09JGHKFXD?tag=rvgearlab-amz-20",
    "description": "The TVNIKD 2500W has three AC outlets, a 2A USB port, an updated LCD, ten 30A built-in fuses and three cooling fans. At $155 it is the only pick here with enough capacity for a microwave or small air fryer in a travel trailer.\n\nIt costs $79.01 more than the WZRELB 800W and $85.01 more than the OLTEANP 1000W. The jump is for the capacity and fuse set. Pick this if you want kitchen loads from the trailer battery. Caveat: at 2500W it draws about 208 amps from 12V, which a single tongue battery cannot sustain, and the excerpt does not state waveform.",
    "specs": [
      "2500W, 3 AC outlets",
      "10 x 30A built-in fuses",
      "3 cooling fans, LCD"
    ],
    "pros": [
      "2500W runs a microwave or air fryer",
      "Ten built-in 30A fuses protect the unit",
      "LCD shows live battery status while the load runs"
    ],
    "cons": [
      "About 208A draw strains a single tongue battery",
      "Waveform is not stated"
    ],
    "bestFor": "Microwave use with a large battery"
  }
];

export const howWeEvaluated = [
  {
    "title": "Physical fit",
    "description": "We compared dimensions, weight and cooling needs against a tongue box or cabinet install."
  },
  {
    "title": "Load match",
    "description": "We matched wattage to typical trailer loads like laptops, TVs and small kitchen gear."
  },
  {
    "title": "Battery strain",
    "description": "We calculated amp draw at 12V to flag what a single battery can sustain."
  },
  {
    "title": "Value",
    "description": "We compared price against capacity and listed features."
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
    "subheading": "By Trailer Loads",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Laptop, TV and CPAP",
          "WZRELB 800W",
          "Pure sine and compact"
        ],
        [
          "Coffee maker or blender",
          "OLTEANP 1000W",
          "1000W at the lowest price"
        ],
        [
          "Microwave or air fryer",
          "TVNIKD 2500W",
          "2500W capacity for kitchen loads"
        ],
        [
          "Phone and light charging only",
          "WZRELB 800W",
          "Smallest draw and idle needs"
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
          "OLTEANP 1000W"
        ],
        [
          "$70 to $80",
          "WZRELB 800W"
        ],
        [
          "$150 to $160",
          "TVNIKD 2500W"
        ]
      ]
    }
  },
  {
    "subheading": "Small Pure Sine vs Bigger Capacity",
    "cards": [
      {
        "label": "Small pure sine",
        "text": "Compact, clean power, low draw. WZRELB 800W is the clearest example."
      },
      {
        "label": "Bigger capacity",
        "text": "Runs kitchen gear but draws heavy current. TVNIKD 2500W and OLTEANP 1000W trade cleanliness for watts."
      }
    ],
    "note": "Most travel trailer owners should default to the WZRELB 800W for electronics."
  },
  {
    "subheading": "By Tongue Battery Bank",
    "table": {
      "headers": [
        "Best pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "One 100Ah battery",
          "WZRELB 800W"
        ],
        [
          "Two 100Ah batteries",
          "OLTEANP 1000W"
        ],
        [
          "300Ah or more lithium",
          "TVNIKD 2500W"
        ]
      ]
    }
  },
  {
    "subheading": "For 30 Amp Trailers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A small inverter that runs only select outlets and leaves air conditioning to shore power."
      },
      {
        "label": "In this comparison",
        "text": "WZRELB 800W plugs straight into a few devices without wiring to the panel; TVNIKD 2500W needs a larger battery bank."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the TVNIKD 2500W only if you cook with a microwave off battery."
      },
      {
        "label": "Save if",
        "text": "Save with the OLTEANP 1000W if your loads stay under 600W."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fit in a tongue box",
    "explanation": "Inverters need airflow and clear access to terminals. A 10 by 4 inch body fits most tongue boxes. Measure your space and read dimensions on the listing."
  },
  {
    "criterion": "Battery size for the load",
    "explanation": "A single 100Ah battery supports roughly 800W for about an hour. Heavy loads drain batteries quickly. Divide watt-hours needed by battery voltage."
  },
  {
    "criterion": "Cable length",
    "explanation": "Cable length matters because resistance turns into voltage drop, and at 12V even a small drop can trip an inverter's low voltage alarm. A run from a tongue battery to a rear cabinet can be 15 feet or more. Keep inverter cables as short as practical, size them to the amp draw, and use the cable gauge chart in the manual."
  },
  {
    "criterion": "Waveform",
    "explanation": "Waveform describes how smooth the AC power is. Pure sine wave matches household outlets, while modified sine is a stepped approximation that can make CPAPs, laptop chargers and small motors hum, run hot or fail early. Check the listing title for the words pure sine wave, and treat unlisted waveforms as modified sine until proven otherwise."
  },
  {
    "criterion": "Converter charger separate",
    "explanation": "Most travel trailers already have a built-in 12V converter charger that charges the battery from shore power, so paying for a second charger inside an inverter charger is wasted money. A stand-alone inverter only converts battery power to AC. Check your trailer's converter amp rating in the manual, and only buy a combo unit if you plan to replace it."
  }
];

export const faq = [
  {
    "q": "Can I run a microwave in my travel trailer?",
    "a": "Yes with the TVNIKD 2500W and a large battery bank."
  },
  {
    "q": "Do I need a transfer switch?",
    "a": "Not for plug-in use of a small inverter."
  },
  {
    "q": "Where should I mount it?",
    "a": "Close to the battery with airflow around it."
  },
  {
    "q": "Can a single battery run the TVNIKD 2500W?",
    "a": "Only briefly; plan a larger bank."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Compact RV Inverter",
    "href": "/power-electrical/best-compact-rv-inverter"
  },
  {
    "title": "Best Pure Sine Wave Inverter For RV",
    "href": "/power-electrical/best-pure-sine-wave-inverter-for-rv"
  },
  {
    "title": "Best Quiet RV Inverter",
    "href": "/power-electrical/best-quiet-rv-inverter"
  },
  {
    "title": "Best RV Inverter For Boondocking",
    "href": "/power-electrical/best-rv-inverter-for-boondocking"
  }
];
