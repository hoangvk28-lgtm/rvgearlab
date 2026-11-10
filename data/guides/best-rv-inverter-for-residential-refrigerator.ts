export const guideSlug = "best-rv-inverter-for-residential-refrigerator";
export const guideTitle = "3 Best RV Inverter For Residential Refrigerator in 2026";
export const metaTitle = "Best RV Inverter For Residential Refrigerator";
export const metaDescription = "Three inverters for a residential refrigerator in an RV: 12V 3000W, 48V 2500W and a 1000W modified sine budget unit, with startup surge and waveform advice.";
export const mainKeyword = "best rv inverter for residential refrigerator";
export const introParagraphs = [
  "Swapping the RV absorption fridge for a residential model saves money and adds space, but it changes your power plan. A residential compressor fridge has a larger startup spike than a compact RV unit, and many have electronic controls that dislike rough waveforms. So sizing here starts with surge, waveform and the voltage of your bank. The three picks below cover a standard 12V system, a 48V solar bank and a bare-minimum budget option with real caveats."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/51TYodIldvL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-inverter-for-residential-refrigerator-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Jlouneo 3000 Watt Inverter",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51TYodIldvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FWRPPTFL?tag=rvgearlab-20",
    "description": "The Jlouneo 3000W is a 12V pure sine inverter built for AGM, gel and LiFePO4 batteries, with remote control and LCD monitoring. At $199.99 it has the capacity to start a full-size residential fridge compressor and clean waveform for the electronics.\n\nIt costs $30.00 less than the ZETAWALE 48V and $144.01 more than the YSOLX 1000W. The cleaner output and larger rating are why it ranks first for most coaches. Pick this if you have a 12V bank and a 18 to 25 cubic foot fridge. Caveat: 3000W at 12V can pull about 250 amps, so plan heavy cable.",
    "specs": [
      "3000W pure sine, 12V",
      "AGM, gel, LiFePO4 ready",
      "Remote and LCD monitoring"
    ],
    "pros": [
      "Pure sine output suits residential fridge electronics",
      "Remote LCD tracks load during compressor starts",
      "Works with lithium, AGM and gel banks"
    ],
    "cons": [
      "Peaks near 250A at full load on 12V",
      "Idle draw is not listed"
    ],
    "bestFor": "12V coach with a full-size fridge"
  },
  {
    "id": "best-rv-inverter-for-residential-refrigerator-2",
    "rank": 2,
    "badge": "Best for Solar Banks",
    "name": "48V 2500W Pure Sine Wave Inverter 48V DC to 120V AC Converter",
    "price": "$229.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UFYASCvGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DMVFGJF9?tag=rvgearlab-20",
    "description": "The ZETAWALE 48V 2500W is a pure sine inverter with 5000W peak, designed for off-grid solar and residential energy systems, with overload, over-voltage and thermal protection. At $229.99 it is aimed at 48V banks, where the same load needs only a quarter of the current of a 12V system.\n\nIt costs $30.00 more than the Jlouneo 3000W while giving 500W less capacity, so the premium is for the 48V input. Pick this if your coach or tiny home already runs 48V lithium. Caveat: it cannot connect to a 12V battery, so it is the wrong choice for a standard RV.",
    "specs": [
      "2500W, 5000W peak",
      "48V DC input, pure sine",
      "Thermal and overload protection"
    ],
    "pros": [
      "48V input cuts current to about 52A at full load",
      "5000W peak covers a residential fridge start",
      "Built for solar and residential energy setups"
    ],
    "cons": [
      "Only works with a 48V battery bank",
      "2500W continuous is lower than the Jlouneo"
    ],
    "bestFor": "48V solar and lithium bank"
  },
  {
    "id": "best-rv-inverter-for-residential-refrigerator-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "YSOLX 1000W Power Inverter 12V to 110V/120V for RV Camping",
    "price": "$55.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51dP3v+IQOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0927P7P66?tag=rvgearlab-20",
    "description": "The YSOLX 1000W is a modified sine inverter with three AC outlets, LED battery display and a silent cooling fan. At $55.98 it is the cheapest way to try powering a small fridge, but modified sine output is the weakest fit for compressors.\n\nIt is $144.01 below the Jlouneo 3000W and gives up pure sine and two thirds of the capacity. Pick this only for a compact or older fridge on short use. Caveat: modified sine can hum or overheat compressor motors, and many residential fridges start above 1000W, so confirm the nameplate first.",
    "specs": [
      "1000W modified sine",
      "3 AC outlets",
      "LED battery display"
    ],
    "pros": [
      "Lowest price of the three at $55.98",
      "Three outlets for a fridge and small devices",
      "Silent cooling fan is listed to keep the bay quiet"
    ],
    "cons": [
      "Modified sine can stress and overheat compressor motors",
      "1000W may not start a full-size fridge"
    ],
    "bestFor": "Compact fridge on short use"
  }
];

export const howWeEvaluated = [
  {
    "title": "Compressor start",
    "description": "We compared peak watts against the startup spike of a residential compressor."
  },
  {
    "title": "Waveform",
    "description": "We separated pure sine from modified sine and what each does to fridge electronics."
  },
  {
    "title": "Bank voltage",
    "description": "We checked the DC input voltage and the resulting amp draw."
  },
  {
    "title": "Cost",
    "description": "We compared price against capacity and the cable it forces you to buy."
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
    "subheading": "By Fridge Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "18 to 25 cu ft residential fridge on 12V",
          "Jlouneo 3000W",
          "3000W clears a large compressor start"
        ],
        [
          "Mid-size fridge on a 48V bank",
          "ZETAWALE 48V",
          "5000W peak with low DC current"
        ],
        [
          "Compact dorm-size fridge, short trips",
          "YSOLX 1000W",
          "Lowest cost for a small load"
        ],
        [
          "Fridge plus a few outlets nightly",
          "Jlouneo 3000W",
          "Spare capacity for other loads"
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
          "$50 to $60",
          "YSOLX 1000W"
        ],
        [
          "$190 to $200",
          "Jlouneo 3000W"
        ],
        [
          "$220 to $230",
          "ZETAWALE 48V"
        ]
      ]
    }
  },
  {
    "subheading": "Pure Sine vs Modified Sine",
    "cards": [
      {
        "label": "Pure sine",
        "text": "Smooth waveform, quieter compressors and safe for control boards. Jlouneo 3000W and ZETAWALE 48V offer it."
      },
      {
        "label": "Modified sine",
        "text": "Cheaper but can hum or overheat compressors. YSOLX 1000W is the example."
      }
    ],
    "note": "Most residential fridge installs should default to a pure sine unit such as the Jlouneo 3000W."
  },
  {
    "subheading": "By Battery Voltage",
    "table": {
      "headers": [
        "Best pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "12V RV battery bank",
          "Jlouneo 3000W"
        ],
        [
          "48V lithium solar bank",
          "ZETAWALE 48V"
        ],
        [
          "Any 12V, minimal load",
          "YSOLX 1000W"
        ]
      ]
    }
  },
  {
    "subheading": "For Swapping an RV Fridge for a Residential Model Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "The fridge's nameplate running watts, locked rotor or startup amps and the inverter's peak rating."
      },
      {
        "label": "In this comparison",
        "text": "Jlouneo 3000W gives margin for the start on a 12V bank; ZETAWALE 48V does the same at 48V."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Jlouneo 3000W because pure sine and capacity protect a costly residential fridge."
      },
      {
        "label": "Save if",
        "text": "Save with the YSOLX 1000W only for a small fridge you can afford to replace."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Startup surge of compressors",
    "explanation": "Residential fridges can spike to several times running watts at start. If the inverter cannot supply it, the fridge never starts. Read the nameplate and compare to peak watts on the listing."
  },
  {
    "criterion": "Waveform and control boards",
    "explanation": "Modern residential fridges use electronic boards sensitive to waveform. Modified sine can trigger error codes. Look for pure sine in the title."
  },
  {
    "criterion": "Battery voltage match",
    "explanation": "A 48V inverter will not run from 12V. Matching voltage sets the amp draw: 2500W at 48V is about 52A, while 3000W at 12V is about 250A. Check the DC input line on the listing."
  },
  {
    "criterion": "Daily energy use",
    "explanation": "A residential fridge uses roughly 1 to 2 kWh per day. That is 100 to 170 amp-hours at 12V. Read the EnergyGuide label before buying."
  },
  {
    "criterion": "Cable and fusing",
    "explanation": "High current demands thick cable and a fuse. Size to the inverter's maximum DC current. Check the listing for recommended cable gauge."
  }
];

export const faq = [
  {
    "q": "Can a 1000W modified sine inverter run a residential fridge?",
    "a": "Sometimes for compact models, but it is risky. The YSOLX 1000W is for small loads only."
  },
  {
    "q": "Why pick 48V?",
    "a": "The same load needs far less current, so cables are thinner. ZETAWALE 48V only suits 48V banks."
  },
  {
    "q": "How much does a residential fridge use per day?",
    "a": "About 1 to 2 kWh, depending on size and room temperature."
  },
  {
    "q": "Do these include a transfer switch?",
    "a": "No listing mentions one, so add a separate switch if you need shore power handoff."
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
