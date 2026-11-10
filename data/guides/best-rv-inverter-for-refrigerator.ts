export const guideSlug = "best-rv-inverter-for-refrigerator";
export const guideTitle = "3 Best RV Inverter For Refrigerator in 2026";
export const metaTitle = "Best RV Inverter For Refrigerator in 2026";
export const metaDescription = "Three 12V pure sine inverters for powering an RV refrigerator, with duty cycle, startup surge and overnight amp-hour math to size the right one.";
export const mainKeyword = "best rv inverter for refrigerator";
export const introParagraphs = [
  "A refrigerator is a different load from a microwave. It is small while running but never really off: the compressor cycles on and off all day, spikes briefly at startup, and runs for hours in total. That makes idle draw and overnight battery drain the real cost of the inverter, not its peak rating. The three pure sine picks below all have the surge headroom a compressor needs, so the choice comes down to how much spare capacity you want and what you pay for it."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41rrhdI6ExL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-inverter-for-refrigerator-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ALLWEI 3000 Watt Pure Sine Wave Inverter - 12V DC to 120V AC Converter",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rrhdI6ExL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GKGDH65W?tag=rvgearlab-amz-20",
    "description": "The ALLWEI 3000W is a pure sine inverter with an 8 fold protection set and an LCD that shows real-time status. At $199.99 it gives plenty of surge capacity for a compressor start, and the display lets you watch the load cycle on and off during the night.\n\nIt costs $90.00 less than the ZETAWALE 3000W for the same listed 3000W rating, and $10.00 more than the ZETAWALE 2000W. Pick this if you want maximum headroom for a fridge plus a few extras at the lowest price per watt. Caveat: the excerpt does not state idle draw, and a 3000W unit may burn more idle power than a smaller one, so switch it off when not needed.",
    "specs": [
      "3000W pure sine wave",
      "8 fold protection",
      "Real-time LCD status"
    ],
    "pros": [
      "Same 3000W rating as ZETAWALE for $90 less",
      "LCD lets you watch the compressor cycle",
      "Eight protections guard against overload and low voltage"
    ],
    "cons": [
      "Idle draw is not listed",
      "Larger than a fridge needs on its own"
    ],
    "bestFor": "Fridge plus extras at lowest cost"
  },
  {
    "id": "best-rv-inverter-for-refrigerator-2",
    "rank": 2,
    "badge": "Best Right-Size",
    "name": "2000W Pure Sine Wave Inverter 12V DC to 120V AC Converter with LCD Remote",
    "price": "$189.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41uR35+VPKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DDWPM8NH?tag=rvgearlab-amz-20",
    "description": "The ZETAWALE 2000W is a pure sine 12V inverter with four AC outlets, a USB port, Type-C fast charging and a remote with LCD. At $189.99 it is the cheapest of the three and right-sized for a compressor refrigerator, which usually needs well under 1000W to start.\n\nIt is $10.00 below the ALLWEI 3000W and $100.00 below the ZETAWALE 3000W, giving up a full 1000W of headroom you likely will not use on a fridge alone. Pick this if the fridge and a few small devices are your only AC loads. Caveat: if you later add a microwave, 2000W will feel tight.",
    "specs": [
      "2000W pure sine wave",
      "4 AC outlets",
      "Type-C and USB ports"
    ],
    "pros": [
      "Lowest price of the three at $189.99, with pure sine",
      "Four outlets plus USB and Type-C charging",
      "2000W covers fridge starts with room left over"
    ],
    "cons": [
      "Little headroom if you add a microwave",
      "Idle draw and efficiency are not listed"
    ],
    "bestFor": "Fridge and small devices only"
  },
  {
    "id": "best-rv-inverter-for-refrigerator-3",
    "rank": 3,
    "badge": "Runner-Up",
    "name": "3000W Pure Sine Wave Inverter 12V DC to 120V AC Converter with LCD Remote",
    "price": "$289.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41suSTCOQ2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DDX5ZG51?tag=rvgearlab-amz-20",
    "description": "The ZETAWALE 3000W is a pure sine inverter with four AC outlets, USB and Type-C ports, and a remote LCD, built with overload and low voltage protection. At $289.99 it is the priciest of the three and brings the same outlet set as its 2000W sibling at a higher rating.\n\nIt costs $100.00 more than the ZETAWALE 2000W and $90.00 more than the ALLWEI 3000W, with no extra capacity over the ALLWEI. Pick this if you prefer the remote and port layout the ZETAWALE family offers. Caveat: for a fridge alone you are paying for headroom you do not use.",
    "specs": [
      "3000W pure sine wave",
      "4 AC outlets, USB, Type-C",
      "Remote LCD included"
    ],
    "pros": [
      "Remote and LCD show battery and load",
      "Four AC outlets plus USB and Type-C",
      "Overload and low voltage protection included"
    ],
    "cons": [
      "Costs $90 more than ALLWEI for the same rating",
      "Overkill for a fridge by itself"
    ],
    "bestFor": "Fridge plus a microwave later"
  }
];

export const howWeEvaluated = [
  {
    "title": "Compressor start",
    "description": "We checked listed capacity against the short startup spike a refrigerator compressor draws."
  },
  {
    "title": "Overnight drain",
    "description": "We estimated overnight amp-hours and flagged where idle draw is not listed."
  },
  {
    "title": "Outlets and monitoring",
    "description": "We compared outlets, remote and display options for watching the fridge cycle."
  },
  {
    "title": "Value",
    "description": "We compared price per listed watt across the three."
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
    "subheading": "By Refrigerator Duty Cycle",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Small 120V fridge cycling about a third of the day",
          "ZETAWALE 2000W",
          "Right-sized capacity avoids oversized idle losses"
        ],
        [
          "Full-size fridge plus freezer drawer",
          "ALLWEI 3000W",
          "Extra headroom for a larger compressor start"
        ],
        [
          "Fridge plus occasional microwave",
          "ZETAWALE 3000W",
          "Remote and four outlets add convenience"
        ],
        [
          "Lowest cost per watt",
          "ALLWEI 3000W",
          "3000W for $199.99"
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
          "$180 to $190",
          "ZETAWALE 2000W"
        ],
        [
          "$190 to $200",
          "ALLWEI 3000W"
        ],
        [
          "$280 to $290",
          "ZETAWALE 3000W"
        ]
      ]
    }
  },
  {
    "subheading": "Right-Sized vs Headroom",
    "cards": [
      {
        "label": "Right-sized",
        "text": "A 2000W inverter idles lower in general and starts a fridge easily. ZETAWALE 2000W is the example."
      },
      {
        "label": "Headroom",
        "text": "3000W units absorb surprises and let you add a microwave later. ALLWEI 3000W and ZETAWALE 3000W fit here."
      }
    ],
    "note": "Most owners powering only a refrigerator should default to the ZETAWALE 2000W."
  },
  {
    "subheading": "By Overnight Battery Bank",
    "table": {
      "headers": [
        "Best pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "100Ah battery, fridge only",
          "ZETAWALE 2000W"
        ],
        [
          "200Ah battery, fridge plus lights",
          "ALLWEI 3000W"
        ],
        [
          "300Ah or more, fridge and appliances",
          "ZETAWALE 3000W"
        ]
      ]
    }
  },
  {
    "subheading": "For Overnight Boondocking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "The refrigerator's nameplate watts and a stated inverter idle draw so you can total up watt-hours across 12 hours."
      },
      {
        "label": "In this comparison",
        "text": "ZETAWALE 2000W is the lean choice because its smaller size should idle lighter, though the listing gives no figure; ALLWEI 3000W costs only $10.00 more."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ZETAWALE 3000W only if you want its outlet layout and expect to add a microwave."
      },
      {
        "label": "Save if",
        "text": "Save with the ZETAWALE 2000W if the fridge is your main AC load; it is $100.00 cheaper than the ZETAWALE 3000W."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Startup surge versus running",
    "explanation": "A compressor draws a short spike at start, often several times its running watts, then settles. If the inverter cannot supply the spike, it trips. Check the fridge nameplate for running watts and use the listed surge on the inverter, aiming for twice the nameplate figure."
  },
  {
    "criterion": "Duty cycle and daily energy",
    "explanation": "Fridges run roughly a third to half the time depending on heat. A 150W fridge at a 40 percent duty cycle uses about 1440Wh a day. Divide by battery voltage to see amp-hours, and read the fridge label for watts."
  },
  {
    "criterion": "Idle draw at night",
    "explanation": "An inverter stays on and draws current even when the fridge is off. Over 12 hours that can cost 10 to 30 amp-hours. Look for a no-load figure on the spec sheet, which these listings do not state."
  },
  {
    "criterion": "Pure sine for compressors",
    "explanation": "Compressor motors run cooler on pure sine and stay quieter. Modified sine can hum or shorten motor life. All three picks list pure sine in the title."
  },
  {
    "criterion": "Cable and fuse size",
    "explanation": "Even a small load needs the surge current delivered. A 3000W unit can pull 250 amps at full load, so fuse near the battery and keep cables short. Check the listing for recommended wire gauge."
  }
];

export const faq = [
  {
    "q": "Can a 2000W inverter run a refrigerator?",
    "a": "Yes for nearly all RV and household fridges, since compressor starts rarely exceed 1000W. The ZETAWALE 2000W has plenty of margin."
  },
  {
    "q": "How many amp-hours does a fridge use overnight?",
    "a": "A typical 120V fridge uses 50 to 100 amp-hours at 12V over a night, depending on size. Check the nameplate and your ambient heat."
  },
  {
    "q": "Should I turn the inverter off at night?",
    "a": "Not if the fridge needs power. A small unit idles less than a large one, which favors the 2000W."
  },
  {
    "q": "Does the ALLWEI 3000W list its idle draw?",
    "a": "The excerpt does not, so check the manual or measure at the battery."
  },
  {
    "q": "Is pure sine really needed for a fridge?",
    "a": "It is the safer choice because compressors run cooler and quieter on it."
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
