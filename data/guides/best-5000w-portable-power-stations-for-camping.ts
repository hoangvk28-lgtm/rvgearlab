export const guideSlug = "best-5000w-portable-power-stations-for-camping";
export const guideTitle = "4 Best 5000w Portable Power Stations in 2026";
export const metaTitle = "Best 5000w Portable Power Stations in 2026";
export const metaDescription = "Best 5000W-class portable power stations compared on 5kWh capacity, 3,600W output and 5,000W surge for RVs, cabins and big camps.";
export const mainKeyword = "best 5000w portable power stations";
export const introParagraphs = [
  "The 5000W label is used two ways: stations with 5kWh batteries, and stations with a 5,000W surge. No portable unit here gives 5,000W of steady output, so this guide separates the big-battery boxes from the surge-rated ones.",
  "Four stations are compared, from a 5,120Wh P5000 Plus to a 2,500W SolarPlay with a 5,000W peak. Each is labeled by what it actually delivers, so you can match the number on the box to the work you need done."
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
    "id": "best-5000w-portable-power-stations-1",
    "rank": 1,
    "badge": "Best Capacity",
    "name": "P5000 Plus 5120Wh Portable Power Station",
    "price": "$1499.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OkvDQjtIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GTCZLRWY?tag=rvgearlab-20",
    "description": "The P5000 Plus packs 5,120Wh of LiFePO4 behind a 3,600W pure sine wave inverter with five AC outlets sharing 3,600W. It accepts 1,800W AC and 1,000W solar for a full recharge in 2.2 hours and lists an EPS switchover under 0.01 seconds.\n\nIt holds about 1,300Wh more than the ABOK and roughly 1,500Wh more than the Jackery, at a lower price than the Jackery. The pack is rated for over 3,500 cycles and up to 20 years.\n\nIt suits cabin owners and long RV stays that run heavy appliances for hours. Fifteen ports cover most devices.",
    "specs": [
      "5,120Wh LiFePO4, 3,600W",
      "2.2 hour full recharge",
      "Five AC outlets, EPS"
    ],
    "pros": [
      "Biggest battery at 5,120Wh",
      "1,800W AC and 1,000W solar input",
      "Sub 0.01 second EPS",
      "15 ports including five AC"
    ],
    "cons": [
      "Brand name is not on the listing",
      "Weight is not on the feature list"
    ],
    "bestFor": "Cabins and long RV stays",
    "take": "The biggest battery in the group at a lower price than the Jackery.",
    "catch": "Weight and warranty terms are not clear on the listing."
  },
  {
    "id": "best-5000w-portable-power-stations-2",
    "rank": 2,
    "badge": "Best Home Backup",
    "name": "Jackery HomePower 3600 Plus Power Station",
    "price": "$1899.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31MKjmDYAXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FM8653F1?tag=rvgearlab-20",
    "description": "The Jackery HomePower 3600 Plus holds 3,584Wh with 3,600W output, rising to 7,200W when two units run in parallel at 120V and 240V. High-temperature ceramic membrane cells are tested at 302 degrees F, and a full recharge takes 2 hours via hybrid AC and DC.\n\nIt is billed as the lightest 3.6kWh LFP station, 34% smaller and 29.3% lighter than other models. It has less capacity than the P5000 Plus and costs more.\n\nIt suits households that want plug-and-play backup with a transfer switch. Parallel use lets you reach 240V.",
    "specs": [
      "3,584Wh LFP, 3,600W",
      "7,200W parallel, 240V",
      "Full recharge in 2 hours"
    ],
    "pros": [
      "Lightest 3.6kWh LFP per listing",
      "240V in parallel",
      "Ceramic cells tested at 302 F",
      "Plug-and-play transfer option"
    ],
    "cons": [
      "Highest price of the four",
      "Parallel needs a second unit"
    ],
    "bestFor": "Home backup",
    "take": "A brand-name home-backup unit with a 240V path.",
    "catch": "A second unit is required for 240V power."
  },
  {
    "id": "best-5000w-portable-power-stations-3",
    "rank": 3,
    "badge": "Best Expandable",
    "name": "ABOK Ark3600 Portable Power Station 3600W",
    "price": "$1139.05",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41C+1aHks5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F47JVR5B?tag=rvgearlab-20",
    "description": "The ABOK Ark3600 delivers 3,600W rated and 4,500W peak from 3,840Wh, with expansion up to 11,520Wh. It has 15 output ports including one 30A AC and four 20A AC outlets, plus an extendable handle and wheels.\n\nIt lists a 4,500W peak from a single unit and the strongest growth path. The Jackery 3600 Plus holds slightly less at 3,584Wh.\n\nIt suits RV and off-grid cabin owners who may add capacity later. Wheels and a telescoping handle make moving it easier.",
    "specs": [
      "3,840Wh LiFePO4, 3,600W",
      "4,500W peak, 11,520Wh expansion",
      "Wheels and telescoping handle"
    ],
    "pros": [
      "Expands to 11,520Wh",
      "One 30A AC outlet for RV cords",
      "Wheels and a telescoping handle",
      "15 output ports"
    ],
    "cons": [
      "Extra batteries cost more",
      "Weight not stated in the listing"
    ],
    "bestFor": "RVs growing a system",
    "take": "A rolling, expandable unit with a 30A outlet for RV cords.",
    "catch": "Capacity growth depends on buying the extra batteries."
  },
  {
    "id": "best-5000w-portable-power-stations-4",
    "rank": 4,
    "badge": "Best 5,000W Surge",
    "name": "SolarPlay Portable Power Station 2500W",
    "price": "$699.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4176znNi+ML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DTQ2T42W?tag=rvgearlab-20",
    "description": "The SolarPlay lists 2,500W continuous with a 5,000W surge and 2,304Wh of LFP cells. It recharges fully in 1.5 hours with 1,100W AC plus a 500W solar panel, and adjustable AC input lets you set 300W, 500W, 700W, 900W or more.\n\nIt is the one pick with a 5,000W surge number, and it costs less than half the Jackery. It holds the least energy of the four and is rated for 3,500 or more cycles.\n\nIt suits campers who need to start a big motor or compressor with a 5,000W surge. It has 14 ports and an 18 month warranty.",
    "specs": [
      "2,304Wh LFP, 2,500W / 5,000W surge",
      "1.5 hour fast recharge",
      "14 ports, 0.02 s UPS"
    ],
    "pros": [
      "5,000W surge for motor starts",
      "Adjustable AC input power",
      "3,500+ cycle LFP pack",
      "4 AC outlets"
    ],
    "cons": [
      "2,500W continuous only",
      "Warranty is 18 months"
    ],
    "bestFor": "Big motor starts",
    "take": "A budget way to get the 5,000W surge number.",
    "catch": "Steady output is only half of the 5,000W peak."
  }
];

export const howWeEvaluated = [
  {
    "title": "Output",
    "description": "Continuous and surge watts were separated for each unit."
  },
  {
    "title": "Energy",
    "description": "Watt hours from 2,304Wh to 5,120Wh were compared."
  },
  {
    "title": "Expansion and 240V",
    "description": "Expansion batteries and 240V options were checked."
  },
  {
    "title": "Recharge",
    "description": "AC and solar recharge times were compared."
  },
  {
    "title": "Price",
    "description": "Price per Wh was weighed."
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
    "subheading": "By Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Longest runtime",
          "P5000 Plus 5120Wh",
          "5,120Wh behind 3,600W."
        ],
        [
          "Home backup with 240V",
          "Jackery HomePower 3600 Plus",
          "Parallel 7,200W at 240V."
        ],
        [
          "RV growth",
          "ABOK Ark3600",
          "Expands to 11,520Wh."
        ],
        [
          "Starting large motors",
          "SolarPlay 2500W",
          "5,000W surge."
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
          "$690 to $1140",
          "SolarPlay 2500W or ABOK Ark3600"
        ],
        [
          "$1490 to $1900",
          "P5000 Plus 5120Wh or Jackery HomePower 3600 Plus"
        ]
      ]
    }
  },
  {
    "subheading": "Big Battery vs Big Surge",
    "cards": [
      {
        "label": "Big battery",
        "text": "The P5000 Plus 5120Wh and ABOK Ark3600 hold 5,120Wh and 3,840Wh for long runs."
      },
      {
        "label": "Big surge",
        "text": "The SolarPlay 2500W lists a 5,000W peak but a smaller 2,304Wh battery."
      }
    ],
    "note": "Most campers should choose a big battery like the P5000 Plus 5120Wh."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest spend",
          "SolarPlay 2500W"
        ],
        [
          "Mid-range capacity",
          "P5000 Plus 5120Wh"
        ],
        [
          "Mid-range expandable",
          "ABOK Ark3600"
        ],
        [
          "Pay for brand and 240V",
          "Jackery HomePower 3600 Plus"
        ]
      ]
    }
  },
  {
    "subheading": "For Off-Grid Cabins Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A 3,600W inverter, 3kWh or more and expansion."
      },
      {
        "label": "In this comparison",
        "text": "The ABOK Ark3600 lists expansion to 11,520Wh and a 30A outlet, while the P5000 Plus gives 5,120Wh immediately."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Jackery HomePower 3600 Plus if you want a brand-name home backup with a 240V option. The ABOK Ark3600 is the premium for expansion."
      },
      {
        "label": "Save if",
        "text": "Save with the SolarPlay 2500W if you need surge power for motors. The P5000 Plus 5120Wh saves on capacity."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 5000W means",
    "explanation": "A 5000W surge is a brief peak, while 5kWh capacity is energy. Neither equals 5,000W of steady output. Check which one the listing means."
  },
  {
    "criterion": "Capacity for days",
    "explanation": "At 500W average a 5,120Wh station runs about eight hours of load or a day with duty cycling. Fridge-only loads last days. Divide Wh by watts."
  },
  {
    "criterion": "240V and parallel",
    "explanation": "The Jackery 3600 Plus reaches 240V by pairing two units. A single unit gives 120V only. Count the voltage you need."
  },
  {
    "criterion": "Recharge speed",
    "explanation": "Input of 1,800W AC plus 1,000W solar refills 5kWh in about two hours. Slower inputs take much longer. Look for the input wattage."
  },
  {
    "criterion": "Weight and moving",
    "explanation": "Stations in this class are heavy, and only the ABOK Ark3600 names wheels and a telescoping handle. Plan the lift before the trip, since moving a 5kWh box alone is risky. Check the listing for weight."
  }
];

export const faq = [
  {
    "q": "Is there a real 5000W portable power station?",
    "a": "Not in this list: output tops out at 3,600W continuous. Some units list a 5,000W peak. Check the continuous rating."
  },
  {
    "q": "How long will 5,120Wh last?",
    "a": "A 500W average load lasts about eight hours after losses. A fridge alone can run for days. Divide Wh by the average watts."
  },
  {
    "q": "What does parallel mean?",
    "a": "Two units combine to double output, as the Jackery HomePower 3600 Plus does for 240V. It requires a second unit. Read the manual."
  },
  {
    "q": "Can I charge it from solar?",
    "a": "Yes, with matching panels. The P5000 Plus accepts 1,000W of solar and the SolarPlay 500W. Check the solar input range."
  },
  {
    "q": "Can I use one for a CPAP?",
    "a": "Confirm compatibility with the CPAP maker and do not rely on runtime estimates. Humidifier heaters draw more."
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
