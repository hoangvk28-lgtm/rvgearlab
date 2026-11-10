export const guideSlug = "best-rv-solar-generator";
export const guideTitle = "5 Best RV Solar Generator in 2026";
export const metaTitle = "Best RV Solar Generator in 2026";
export const metaDescription = "RV solar generators are power stations plus panels; compare Jackery, BLUETTI, EcoFlow and Anker on capacity, AC output and real daily solar harvest.";
export const mainKeyword = "best rv solar generator";
export const introParagraphs = [
  "A solar generator is a battery with an inverter and panels, so it has no engine, no fuel and no noise, but it also has a finite capacity. A 1,000 Wh unit runs a 12V fridge for a day or two, but a 13,500 BTU AC would drain it in about an hour. A 200W panel yields at most about 1,000 Wh on a perfect day and closer to 600 to 800 Wh in practice. Size capacity first, then panels."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41zMCcqZTFL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-solar-generator-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "BLUETTI AC180 Solar Generator with 200W Solar Panel Included",
    "price": "$729.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41zMCcqZTFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C2ZCPTNB?tag=rvgearlab-20",
    "description": "The BLUETTI AC180 kit pairs a 1,152Wh, 1,800W power station with a 200W solar panel and 11 outlets. The listing says it refills in 4.8 to 9.6 hours from solar, accepts 1,440W flash charging in one hour and can boost to 2,700W in the app.\n\nAt $729 it costs $30 more than the Jackery 1000 v2 and gives 82Wh and 300W more. Against the Anker C2000 it is $170.99 cheaper but holds 896Wh less. Pick this if you want fast charging and a panel included. Caveat: 1,800W will not start a large rooftop AC.",
    "specs": [
      "1152Wh, 1800W AC",
      "200W panel included",
      "1-hour flash charging"
    ],
    "pros": [
      "Fully recharges in about an hour on a wall outlet",
      "200W solar panel ships with it",
      "11 outlets cover most RV loads"
    ],
    "cons": [
      "1,800W cannot start a 13,500 BTU AC",
      "Panel ships separately from the power station"
    ],
    "bestFor": "Weekend off-grid trips"
  },
  {
    "id": "best-rv-solar-generator-2",
    "rank": 2,
    "badge": "Best Battery Life",
    "name": "Jackery Solar Generator 1000 v2 and 200W Solar Panel",
    "price": "$699.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Li2jDBgqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D2L1G66J?tag=rvgearlab-20",
    "description": "The Jackery Solar Generator 1000 v2 includes a 200W panel with a 1,070Wh LFP station rated 1,500W AC and 3,000W surge. Jackery lists 70% capacity after 4,000 cycles, which suggests about a decade.\n\nAt $699 it is $30 under the BLUETTI AC180 and the same price as the EcoFlow Delta 3 Classic, offering 46Wh more capacity than EcoFlow. Pick this if long battery life and a simple app matter. Caveat: its 1,500W output is the lowest AC rating here.",
    "specs": [
      "1070Wh, 1500W AC",
      "200W panel included",
      "4,000 cycles to 70%"
    ],
    "pros": [
      "LFP battery rated 4,000 cycles to 70% capacity",
      "3,000W surge covers fridge compressor starts",
      "Includes a 200W solar panel in the kit"
    ],
    "cons": [
      "1,500W is the lowest AC output here",
      "Full recharge from 0% takes an hour only in emergency mode"
    ],
    "bestFor": "Long-term battery life"
  },
  {
    "id": "best-rv-solar-generator-3",
    "rank": 3,
    "badge": "Best Fast Charging",
    "name": "EF ECOFLOW Solar Generator Delta 3 Classic with 220W Solar Panel",
    "price": "$699.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31k4M4wngWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FRMQPZF6?tag=rvgearlab-20",
    "description": "The EcoFlow Delta 3 Classic kit offers 1,024Wh, 1,800W output with 3,600W surge via X-Boost, and a 220W panel. EcoFlow lists 0 to 80% in 45 minutes on AC and a 5.8 hour solar refill.\n\nAt $699 it matches the Jackery 1000 v2 on price but has 46Wh less capacity and 300W more output. Against the BLUETTI AC180 it is $30 cheaper with a larger 220W panel. Pick this if fast AC charging matters. Caveat: panel and station ship separately.",
    "specs": [
      "1024Wh, 1800W (3600W surge)",
      "220W panel, 5.8 hr solar",
      "0 to 80% in 45 minutes"
    ],
    "pros": [
      "Charges 0 to 80% in 45 minutes on AC",
      "220W panel is the largest in the cheap tier",
      "X-Boost lifts surge output to 3,600W"
    ],
    "cons": [
      "Lowest capacity of the four kits here",
      "Station and panel may arrive in separate boxes"
    ],
    "bestFor": "Short stops and fast refills"
  },
  {
    "id": "best-rv-solar-generator-4",
    "rank": 4,
    "badge": "Best for Running an AC",
    "name": "Anker SOLIX C2000 Gen 2 Portable Power Station",
    "price": "$899.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iJKYxROtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FVFGL38H?tag=rvgearlab-20",
    "description": "The Anker SOLIX C2000 Gen 2 holds 2,048Wh with 2,400W rated and 4,000W peak output, enough, per the listing, for most window and RV ACs. It expands to 4kWh and charges to 100% in 58 minutes, with 800W alternator charging.\n\nAt $899.99 it is $170.99 over the BLUETTI AC180 for 896Wh more storage. It is $899.01 under the Jackery HomePower 3000. Pick this if an AC is on your list. Caveat: the listing title shows the station alone, so panels are extra.",
    "specs": [
      "2048Wh, 2400W (4000W peak)",
      "Expands to 4kWh",
      "58 minute recharge"
    ],
    "pros": [
      "4,000W peak handles most RV AC starting surges",
      "Uses only 9W on standby, saving stored energy",
      "800W alternator charging refills it while you drive"
    ],
    "cons": [
      "Solar panels are not included in this listing",
      "Expansion battery is an extra purchase"
    ],
    "bestFor": "Short AC runs on battery"
  },
  {
    "id": "best-rv-solar-generator-5",
    "rank": 5,
    "badge": "Best Capacity",
    "name": "Jackery HomePower 3000 and 2x200W Solar Panels",
    "price": "$1799.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413GZxMHAnL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FFSDCNR4?tag=rvgearlab-20",
    "description": "The Jackery HomePower 3000 holds 3,072Wh with 3,600W AC output (7,200W surge), two 200W solar panels, a 20ms UPS and a 1.7 hour hybrid recharge. It is the only kit here that could run a rooftop AC for a couple of hours.\n\nAt $1,799 it costs $899.01 more than the Anker C2000 and holds 1,024Wh more. Pick this if you want the biggest battery and have storage for it. Caveat: it is a heavy home-backup style unit and the listing gives no weight.",
    "specs": [
      "3072Wh, 3600W AC",
      "2x200W panels included",
      "Hybrid 1.7 hr recharge"
    ],
    "pros": [
      "3,072Wh can run an AC for hours",
      "Two 200W panels ship with it",
      "7,200W surge covers heavy starting loads"
    ],
    "cons": [
      "Costs $1,799, the most of the five kits",
      "Weight and size are not in the listing"
    ],
    "bestFor": "Big AC capacity off-grid"
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity vs load",
    "description": "Watt-hours were compared against a typical 12V fridge, lights and charging load."
  },
  {
    "title": "AC output",
    "description": "Continuous and surge watts decide which appliances start."
  },
  {
    "title": "Solar harvest",
    "description": "Included panel wattage and stated recharge hours were weighed, not nameplate alone."
  },
  {
    "title": "Listing gaps",
    "description": "Weight and noise were scored only where stated."
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
    "subheading": "By Daily Energy Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "About 1,000 Wh a day",
          "BLUETTI AC180",
          "1,152Wh with 200W panel"
        ],
        [
          "Long battery life",
          "Jackery 1000 v2",
          "4,000 cycles to 70%"
        ],
        [
          "Quick refills between stops",
          "EcoFlow Delta 3",
          "0 to 80% in 45 minutes"
        ],
        [
          "Short AC runs",
          "Anker C2000 Gen 2",
          "4,000W peak output"
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
          "$690 to $700",
          "Jackery 1000 v2 or EcoFlow Delta 3"
        ],
        [
          "$720 to $900",
          "BLUETTI AC180 or Anker C2000 Gen 2"
        ],
        [
          "$1790 to $1800",
          "Jackery HomePower 3000"
        ]
      ]
    }
  },
  {
    "subheading": "Solar Generator vs Gas Generator",
    "cards": [
      {
        "label": "Solar",
        "text": "BLUETTI AC180 and Jackery 1000 v2 are silent and fuel-free but cap at about 1,100Wh."
      },
      {
        "label": "Gas",
        "text": "A gas inverter keeps running for hours but needs fuel and makes noise; a Jackery 1000 v2 or Anker C2000 Gen 2 does neither, but empties fast under an AC."
      }
    ],
    "note": "Default to solar for fridge, lights and charging; keep gas for AC."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Best pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "$699 to $729",
          "BLUETTI AC180"
        ],
        [
          "$699 with 220W panel",
          "EcoFlow Delta 3"
        ],
        [
          "Around $900",
          "Anker C2000 Gen 2"
        ],
        [
          "Near $1,800",
          "Jackery HomePower 3000"
        ]
      ]
    }
  },
  {
    "subheading": "For Winter Boondocking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Panel wattage at least 400W and a cold-charging rating."
      },
      {
        "label": "In this comparison",
        "text": "Jackery HomePower 3000 ships with two 200W panels, giving 400W."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want an AC, which means the Anker C2000 Gen 2 at $899.99 or Jackery HomePower 3000."
      },
      {
        "label": "Save if",
        "text": "Save if you only need a fridge and lights, since the Jackery 1000 v2 at $699 is enough."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Capacity in watt-hours",
    "explanation": "Watt-hours is how much energy is stored, unlike watts, which is how fast it can be used. A 1,000Wh unit runs a 100W load for about 10 hours. Check Wh, not mAh, on the listing."
  },
  {
    "criterion": "Daily solar harvest",
    "explanation": "A 200W panel produces at most about 1,000Wh on a perfect 5-sun-hour day and typically 600 to 800Wh. That does not recharge a 2,000Wh unit in a day. Check how many panels ship in the box."
  },
  {
    "criterion": "Continuous vs surge watts",
    "explanation": "Continuous watts is what the inverter holds, surge is a brief spike. An RV AC may need over 3,000W to start. Compare the surge number to your biggest appliance."
  },
  {
    "criterion": "Voltage and input range",
    "explanation": "Solar input has a voltage window, and a series-wired panel pair can exceed it. Mismatch means the unit charges slowly or not at all. Check the max input volts and watts on the spec sheet."
  },
  {
    "criterion": "Battery chemistry and cycles",
    "explanation": "LFP batteries last 3,000 to 4,000 cycles versus about 800 for older lithium types. That is years of daily use. Look for LFP or LiFePO4 in the listing."
  }
];

export const faq = [
  {
    "q": "Can a solar generator run an RV air conditioner?",
    "a": "Only large units like the Anker C2000 Gen 2 or Jackery HomePower 3000, and only for a couple of hours."
  },
  {
    "q": "How long to recharge from solar?",
    "a": "The BLUETTI AC180 lists 4.8 to 9.6 hours with 200W panels, depending on sun."
  },
  {
    "q": "Do panels come in the box?",
    "a": "BLUETTI AC180, Jackery 1000 v2, EcoFlow Delta 3 and HomePower 3000 bundles include them; the Anker C2000 listing does not."
  },
  {
    "q": "Is a solar generator better than a gas one?",
    "a": "For quiet and fridge loads, yes. For AC and winter, gas is still the backup."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Diesel Generator For RV",
    "href": "/power-electrical/best-diesel-generator-for-rv"
  },
  {
    "title": "Best Dual Fuel Generator For RV",
    "href": "/power-electrical/best-dual-fuel-generator-for-rv"
  },
  {
    "title": "Best Generator For Class A Motorhome",
    "href": "/power-electrical/best-generator-for-class-a-motorhome"
  },
  {
    "title": "Best Generator For Class C Motorhome",
    "href": "/power-electrical/best-generator-for-class-c-motorhome"
  }
];
