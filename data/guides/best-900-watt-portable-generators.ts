export const guideSlug = "best-900-watt-portable-generators";
export const guideTitle = "3 Best 900 Watt Portable Generators in 2026";
export const metaTitle = "Best 900 Watt Portable Generators in 2026";
export const metaDescription = "Three small 71cc gas generators in the 800 to 950 watt rated class, compared on exact rated watts, weight, fuel mix and runtime for light camp loads.";
export const mainKeyword = "best 900 watt portable generators";
export const introParagraphs = [
  "Only one listing here states 900 rated watts exactly. The other two are nearest fits at 800 and 950 rated watts, and all three are small two-stroke units that burn mixed fuel and suit lights, fans, phone chargers and a slow cooker, not an air conditioner.",
  "Each generator was compared on stated rated and surge watts, weight, tank size, runtime claim, fuel-oil mix and outlets. Where a listing contradicts itself on watts, the guide says so."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/furniture-chairs-by-tent.webp";
export const heroImageAlt = "Two folding camping chairs beside a tent in a redwood forest";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-900-watt-portable-generators-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "PowerSmart 1200W 2-Stroke Portable Generator",
    "price": "$139.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ZwHtkN-DL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01MS4DZTH?tag=rvgearlab-20",
    "description": "The PowerSmart lists 1200 surge and 900 rated watts from a 71cc two-stroke engine, weighing only 34 pounds. It has a 120V AC outlet, a 12V DC output for battery charging, a 1.1 gallon tank for about 5 hours at 50 percent load and a 40:1 fuel-to-oil mix.\n\nIt is the only unit that states exactly 900 rated watts and the lightest of the three. Compared with the YolloBike, it lists a lower rating and a shorter runtime, and compared with the generic 800W unit, it adds 100 rated watts.\n\nIt suits campers who want a very light generator for lights, slow cookers, fans and small tools. The EPA-compliant design and F5TC spark plug are listed.",
    "specs": [
      "1200 surge, 900 rated watts",
      "34 lbs, 71cc two-stroke",
      "120V outlet, 12V DC, 40:1 mix"
    ],
    "pros": [
      "Exactly 900 rated watts",
      "Lightest at 34 pounds",
      "12V DC battery charging",
      "EPA compliant"
    ],
    "cons": [
      "Two-stroke needs mixed fuel",
      "Only about 5 hours at half load"
    ],
    "bestFor": "Light camp loads and tailgating",
    "take": "The one 900 rated watt unit, and the lightest.",
    "catch": "Mixed two-stroke fuel and 5 hours at half load suit short trips."
  },
  {
    "id": "best-900-watt-portable-generators-2",
    "rank": 2,
    "badge": "Best Runtime",
    "name": "1200W Portable Gas Powered Generator",
    "price": "$158.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41yywnUUgpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HHDDLJ9R?tag=rvgearlab-20",
    "description": "The YolloBike lists 1200W and 950 rated watts from a 71cc two-stroke engine, weighing 35.3 pounds, with a 1 gallon tank that is said to give up to 8 hours. It has a 120V AC outlet, a 12V DC output rated 8.3A and a 50:1 mix.\n\nIt has the highest rated watts and the longest runtime claim of the three. Compared with the PowerSmart, it adds 50 rated watts and a longer claimed runtime for a higher price.\n\nIt suits campers who run lights and chargers overnight and want fewer refuelings. The 12V output charges a battery.",
    "specs": [
      "950 rated, 1200 surge watts",
      "35.3 lbs, 1 gallon tank",
      "Up to 8 hours, 12V 8.3A DC"
    ],
    "pros": [
      "Highest rated watts of the three",
      "Longest runtime claim",
      "12V DC at 8.3A",
      "Light at 35.3 pounds"
    ],
    "cons": [
      "Listing gives two different watt figures",
      "Priciest of the three"
    ],
    "bestFor": "Overnight light loads",
    "take": "The strongest and longest-running of the small two-strokes.",
    "catch": "A bullet also lists 1500 starting and 1200 running watts, so ask which is right."
  },
  {
    "id": "best-900-watt-portable-generators-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "Portable Outdoor Generator",
    "price": "$130.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KccdMrL8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DP7F4WC3?tag=rvgearlab-20",
    "description": "The yellow 71cc two-stroke generator lists 900 peak and 800 rated watts, weighs 38.5 pounds and has a 1.1 gallon tank for about 5 hours at 50 percent load. Remote reset circuit protection guards against overheating, and the box includes a spark plug wrench, a DC charging cable and an attachable handle.\n\nIts sticker is the smallest in the trio. Compared with the PowerSmart, it has 100 fewer rated watts and 4.5 more pounds.\n\nIt suits campers with the lightest loads, such as a few LED lights and chargers, who want the lowest cost. It is the nearest 800 watt fit.",
    "specs": [
      "900 peak, 800 rated watts",
      "38.5 lbs, 71cc two-stroke",
      "1.1 gal, DC charging cable"
    ],
    "pros": [
      "Lowest price of the three",
      "Circuit protection with remote reset",
      "DC charging cable included",
      "Handle and tools in the box"
    ],
    "cons": [
      "Lowest rated watts",
      "Heaviest of the three"
    ],
    "bestFor": "Lightest loads on a budget",
    "take": "The cheapest of the three, for a few lights and chargers.",
    "catch": "At 800 rated watts, it has the least headroom."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated rated watts",
    "description": "Rated watts were compared against the 900 watt target."
  },
  {
    "title": "Weight",
    "description": "Printed pounds were compared."
  },
  {
    "title": "Runtime and tank",
    "description": "Tank size and runtime claims were compared."
  },
  {
    "title": "Fuel mix",
    "description": "Two-stroke mix ratios were noted."
  },
  {
    "title": "Consistency",
    "description": "Contradictory listing numbers were flagged."
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
    "subheading": "By Load",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Lights, fans, slow cooker",
          "PowerSmart 900W Rated",
          "Exactly 900 rated watts."
        ],
        [
          "Overnight runs",
          "YolloBike 950W",
          "Up to 8 hours claimed."
        ],
        [
          "Lights and chargers only",
          "Generic 800W Rated",
          "Lowest price."
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
          "$130 to $140",
          "Generic 800W Rated"
        ],
        [
          "$130 to $140",
          "PowerSmart 900W Rated"
        ],
        [
          "$150 to $160",
          "YolloBike 950W"
        ]
      ]
    }
  },
  {
    "subheading": "Exact Rating vs Higher Rating",
    "cards": [
      {
        "label": "Exact 900 rated",
        "text": "Matches the target and keeps weight lowest. The PowerSmart 900W Rated is in this group."
      },
      {
        "label": "Nearby ratings",
        "text": "950 rated gives more headroom and 800 rated saves money. The YolloBike 950W and Generic 800W Rated are in this group."
      }
    ],
    "note": "Most campers should pick the PowerSmart 900W Rated."
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
          "Lowest",
          "Generic 800W Rated"
        ],
        [
          "Mid",
          "PowerSmart 900W Rated"
        ],
        [
          "Highest",
          "YolloBike 950W"
        ]
      ]
    }
  },
  {
    "subheading": "Quick Weekends With Light Loads",
    "cards": [
      {
        "label": "Look for",
        "text": "A rated figure above your loads, a light body and a clear fuel mix."
      },
      {
        "label": "In this comparison",
        "text": "The PowerSmart 900W Rated is the lightest at 34 pounds and lists a 40:1 mix."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the YolloBike 950W for the longest runtime claim."
      },
      {
        "label": "Save if",
        "text": "Save with the Generic 800W Rated if the loads are tiny."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 900 watts runs",
    "explanation": "900 watts covers LED lights, phone chargers, a fan and a slow cooker or a small TV, but not a microwave or air conditioner. Add up your loads before choosing. Check the running watts, not the surge."
  },
  {
    "criterion": "Two-stroke fuel",
    "explanation": "These engines need oil mixed into the gasoline at a set ratio, 40:1 or 50:1. The wrong ratio causes smoke or damage. Read the manual's ratio, since one line lists both."
  },
  {
    "criterion": "Rated versus surge",
    "explanation": "Surge watts last for seconds, and rated watts are what the unit holds. A small fridge compressor may exceed the surge briefly. Look for the rated figure."
  },
  {
    "criterion": "Carbon monoxide",
    "explanation": "These units have no CO sensor listed. Run them outdoors at least 20 feet from tents, windows and vents, exhaust pointing away. Never run one inside a tent or vehicle."
  },
  {
    "criterion": "Noise and sensitive electronics",
    "explanation": "Non-inverter two-strokes are loud and produce less clean power. Avoid plugging laptops and CPAP machines without a surge protector. Check for inverter wording; none of these list it."
  }
];

export const faq = [
  {
    "q": "Is a 900 watt generator enough for camping?",
    "a": "For lights, fans, chargers and a slow cooker, yes. It cannot run an air conditioner. The PowerSmart 900W Rated suits those loads."
  },
  {
    "q": "What is the biggest mistake with two-stroke generators?",
    "a": "Mixing the wrong fuel ratio. The PowerSmart 900W Rated lists 40:1 and the YolloBike 950W lists 50:1. Follow the manual."
  },
  {
    "q": "Is the YolloBike worth it over the PowerSmart?",
    "a": "If you need longer runtime and 50 more rated watts, yes. Otherwise the PowerSmart 900W Rated is lighter."
  },
  {
    "q": "How do I start a small generator?",
    "a": "Mix fuel, fill the tank, set the choke and pull the cord. Let it warm, then plug in loads one at a time."
  },
  {
    "q": "How should I store it?",
    "a": "Run the fuel out or use stabilizer, and keep it dry and cool. Mixed fuel goes stale, so use fresh mix each trip."
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
