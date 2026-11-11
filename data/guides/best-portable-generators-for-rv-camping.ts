export const guideSlug = "best-portable-generators-for-rv-camping";
export const guideTitle = "5 Best Portable Generators For RV Camping in 2026";
export const metaTitle = "Best Portable Generators For RV Camping in 2026";
export const metaDescription = "Best portable generators for RV camping compared on running watts, RV outlets, noise and CO protection for travel trailers and motorhomes.";
export const mainKeyword = "best portable generators for rv camping";
export const introParagraphs = [
  "An RV generator has one job at camp: keep the fridge, lights and an air conditioner alive when shore power is far away. The numbers to read are running watts, the RV outlet type and how loud the engine is at 23 feet.",
  "Six gas generators are ranked here from a 3,000-watt inverter to a 4,800-watt unit, with two near-identical Oxseryn listings counted as a single line. They were weighed on listed rated watts, RV receptacles, runtime and safety features."
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
    "id": "best-portable-generators-for-rv-camping-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "WEN Quiet and Lightweight 4800-Watt RV-Ready Portable Inverter Generator with Fuel Shut Off",
    "price": "$573.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/5152RZuvf6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C1QF2SCF?tag=rvgearlab-amz-20",
    "description": "The WEN 56477i delivers 4,000 rated and 4,800 surge watts from a 224cc engine, with four 120V outlets, a TT-30R RV receptacle, a 12V DC outlet and two USB ports. A CO Watchdog shutdown, fuel shut-off, onboard wheels, a telescoping handle and a three-year warranty are all listed.\n\nIt has the most rated watts of the six and clean inverter power for electronics. It out-produces the Generac 3,300 and the WEN 3600 by 1,500 and 1,100 running watts.\n\nIt suits travel trailer owners who want to run an air conditioner and a few appliances. The wheels and handle make moving it at a campground easier.",
    "specs": [
      "4,000W rated, 4,800W surge",
      "TT-30R and four 120V outlets",
      "CO Watchdog shutdown"
    ],
    "pros": [
      "Most rated watts in the group",
      "TT-30R RV receptacle",
      "CO shutdown sensor",
      "Three-year warranty"
    ],
    "cons": [
      "Weight is not stated on the listing",
      "Priced above the open-frame picks"
    ],
    "bestFor": "Air conditioner trailers",
    "take": "The powerhouse for a 30A trailer with an air conditioner.",
    "catch": "Weight is not stated, so plan on using the wheels and handle."
  },
  {
    "id": "best-portable-generators-for-rv-camping-2",
    "rank": 2,
    "badge": "Best Safety Tech",
    "name": "Generac 3",
    "price": "$637.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/515W7jwOXEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DD1R1CXC?tag=rvgearlab-amz-20",
    "description": "The Generac gives 2,500 running and 3,300 starting watts, with TruePower Technology holding distortion under 3% and PowerRush adding starting capacity. COsense monitors CO and shuts it down, and Economy Mode adjusts speed to save fuel.\n\nIt gives less output than the WEN 56477i 4800 and carries a more active safety feature set. The listing says a 1.06-gallon tank runs up to 7 hours at 25% load.\n\nIt suits campers who run a fridge, TV and chargers overnight in a small trailer. The USB charging ports cover phones without an adapter.",
    "specs": [
      "2,500W running, 3,300W starting",
      "COsense CO shutdown",
      "TruePower under 3% THD"
    ],
    "pros": [
      "COsense monitors carbon monoxide",
      "PowerRush adds starting capacity",
      "Economy Mode saves fuel",
      "USB charging included"
    ],
    "cons": [
      "Gas only, no propane option",
      "Highest price per watt here"
    ],
    "bestFor": "Small trailer overnight",
    "take": "A compact Generac with an active CO sensor for small trailers.",
    "catch": "A small tank means frequent refuels on long weekends."
  },
  {
    "id": "best-portable-generators-for-rv-camping-3",
    "rank": 3,
    "badge": "Best Lightweight",
    "name": "WEN 3600-Watt Portable Inverter Generator",
    "price": "$420.74",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41v48x8PTeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C1Q4K2G7?tag=rvgearlab-amz-20",
    "description": "The WEN 56360i produces 2,900 rated and 3,600 surge watts from a 149cc engine and weighs a listed 46 pounds. It has two 120V outlets, a TT-30R RV receptacle, a 12V DC port, two USB ports and a three-year warranty.\n\nAt 46 pounds it is the lightest in the group, with a lower output than the WEN 56477i. Compared with the Generac it matches the starting watts and adds an RV receptacle.\n\nIt suits solo travelers and small trailers that need a TT-30R without the weight. A fuel shut-off protects the carburetor between trips.",
    "specs": [
      "2,900W rated, 3,600W surge",
      "46 lb with fuel shut-off",
      "TT-30R and two USB ports"
    ],
    "pros": [
      "Lightest in the group",
      "TT-30R RV receptacle",
      "Fuel shut-off protects carburetor",
      "Three-year warranty"
    ],
    "cons": [
      "No CO sensor named on the listing",
      "Little headroom for a rooftop air conditioner"
    ],
    "bestFor": "Light trailers, solo trips",
    "take": "A light RV-ready inverter for small travel trailers.",
    "catch": "Rated watts are limited, so one small appliance at a time."
  },
  {
    "id": "best-portable-generators-for-rv-camping-4",
    "rank": 4,
    "badge": "Best Value Watts",
    "name": "Oxseryn 4400-Watts Inverter Generator",
    "price": "$254.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51KrlC-jVkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FXLTM47G?tag=rvgearlab-amz-20",
    "description": "The Oxseryn lists 3,400 running and 4,400 peak watts, two 120V outlets, a 30A RV port and a 12V DC port. A 2-gallon tank gives up to 14 hours at 25% load in a 56-pound open-frame body.\n\nIt carries more running watts than the WEN 56360i and Generac for a lower price. Low oil shutdown, overload protection and cold start technology are listed.\n\nIt suits budget-minded RV owners with a 30A cord who want maximum watts. ECO mode throttles the engine to save fuel.",
    "specs": [
      "3,400W running, 4,400W peak",
      "30A RV port, 2-gallon tank",
      "ECO mode"
    ],
    "pros": [
      "High rated watts for the price",
      "30A RV port",
      "Up to 14 hours at 25% load",
      "56 lb with a fuel gauge"
    ],
    "cons": [
      "No CO sensor named on the listing",
      "Open-frame design is louder"
    ],
    "bestFor": "Budget 30A trailers",
    "take": "Big watts at a modest price for a 30A trailer.",
    "catch": "No carbon monoxide shutdown is named, so keep it far from the camper."
  },
  {
    "id": "best-portable-generators-for-rv-camping-5",
    "rank": 5,
    "badge": "Best Quiet and Light",
    "name": "Evernexta 3000W Inverter Generator",
    "price": "$339.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4161THDoHGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HCNM426T?tag=rvgearlab-amz-20",
    "description": "The Evernexta provides 2,350 running and 3,000 starting watts from a 97.7cc engine, with 53 to 56 dB at 23 feet and THD under 3%. It weighs 41.8 pounds and has dual 120V 20A outlets, USB-A and USB-C, a 12V DC port and parallel connection.\n\nIt is the lightest unit in the group and the only one that lists a decibel range, with a USB-C output among its ports. It gives fewer running watts than the Oxseryn.\n\nIt suits tailgaters and small-camper owners who value noise and weight over output. Operate it outdoors, away from doors, windows and vents.",
    "specs": [
      "2,350W running, 3,000W starting",
      "53 to 56 dB at 23 ft",
      "41.8 lb, parallel connection"
    ],
    "pros": [
      "Lightest listed at 41.8 pounds",
      "Only unit with a stated dB range",
      "USB-C and USB-A ports",
      "Parallel connection"
    ],
    "cons": [
      "No 30A RV outlet in the listing",
      "Lowest running watts of the six"
    ],
    "bestFor": "Quiet, light car camping",
    "take": "The lightest unit and the only one with a stated noise range, for small campers and tailgating.",
    "catch": "There is no named RV receptacle, so check your inlet type."
  }
];

export const howWeEvaluated = [
  {
    "title": "Running watts",
    "description": "Rated running watts were compared against a typical trailer's fridge, lights and air conditioner."
  },
  {
    "title": "RV outlets",
    "description": "We checked each listing for a TT-30R or 30A RV port."
  },
  {
    "title": "Noise",
    "description": "Decibel claims at 23 feet were compared."
  },
  {
    "title": "Weight and portability",
    "description": "Weights and wheel kits were considered for moving at camp."
  },
  {
    "title": "Safety",
    "description": "CO shutdown, low oil cutoff and warranty coverage were checked."
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
    "subheading": "By RV Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Travel trailer with rooftop AC",
          "WEN 56477i 4800",
          "4,000 rated watts and a TT-30R."
        ],
        [
          "Small trailer, fridge and lights",
          "Generac 3300 Inverter",
          "COsense and clean power."
        ],
        [
          "Pop-up or teardrop, light load",
          "WEN 56360i 3600",
          "Lightest RV-ready unit."
        ],
        [
          "Budget 30A trailer",
          "Oxseryn 4400 Inverter",
          "Most running watts for the price."
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
          "$320 to $340",
          "Oxseryn 4400 Inverter or Evernexta 3000W"
        ],
        [
          "$540 to $580",
          "WEN 56360i 3600 or WEN 56477i 4800"
        ],
        [
          "$630 to $640",
          "Generac 3300 Inverter"
        ]
      ]
    }
  },
  {
    "subheading": "Open Frame vs Enclosed",
    "cards": [
      {
        "label": "Open frame",
        "text": "The Oxseryn 4400 Inverter is open frame, which lowers cost and cooling needs but raises noise."
      },
      {
        "label": "Enclosed inverter",
        "text": "The WEN 56477i 4800, Generac 3300 Inverter and Evernexta 3000W are inverters in enclosed bodies for quieter, cleaner power."
      }
    ],
    "note": "Most RV owners should lean toward an enclosed inverter like the WEN 56477i 4800."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Maximum watts",
          "WEN 56477i 4800"
        ],
        [
          "Quietest and lightest",
          "Evernexta 3000W"
        ],
        [
          "CO sensor from the maker",
          "Generac 3300 Inverter"
        ],
        [
          "Lowest cost per watt",
          "Oxseryn 4400 Inverter"
        ]
      ]
    }
  },
  {
    "subheading": "For Travel Trailer Air Conditioners Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Rated watts above the AC's running draw and a TT-30R receptacle."
      },
      {
        "label": "In this comparison",
        "text": "The WEN 56477i 4800 offers 4,000 rated watts and a TT-30R, the strongest match here."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the WEN 56477i 4800 if you run an air conditioner, since it has the most rated watts and a CO shutdown. The Generac 3300 Inverter is the other premium for its safety tech."
      },
      {
        "label": "Save if",
        "text": "Save with the Oxseryn 4400 Inverter, which gives high running watts at a low price. The Evernexta 3000W is also a lower spend for quiet camps."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Running watts for your rig",
    "explanation": "Add the running watts of everything you will use together, then pick a generator that covers the total. A small 13,500 BTU air conditioner often needs around 1,500 running watts and a larger starting surge. The WEN 56477i at 4,000 rated watts has the headroom, while the 3,000-watt class suits one load at a time."
  },
  {
    "criterion": "30A RV receptacle",
    "explanation": "Most travel trailers use a 30A TT-30R inlet. A generator with a built-in TT-30R lets you plug the shore cord in directly. Without one, an adapter is needed and the listing will not say it is included."
  },
  {
    "criterion": "Noise at 23 feet",
    "explanation": "Decibel ratings are measured at a set distance, usually 23 feet. A number near 53 to 58 dBA is roughly conversation level, while open frames can run louder. Look for the dBA figure and the load at which it was measured."
  },
  {
    "criterion": "Fuel and runtime",
    "explanation": "A bigger tank holds more fuel but adds weight. Runtime figures are usually at 25% load, which is much lighter than a trailer running an air conditioner. Plan fuel for your actual load, not the best case."
  },
  {
    "criterion": "Carbon monoxide risk",
    "explanation": "Generators produce deadly carbon monoxide and must run outdoors, away from vents and sleeping areas. A shutdown sensor is a safeguard, not a license to run near the camper. Keep the exhaust pointed away from the RV."
  }
];

export const faq = [
  {
    "q": "Can a 3,000-watt generator run my RV air conditioner?",
    "a": "Sometimes, depending on the air conditioner's starting draw. A 13,500 BTU unit may need more than a 3,000-watt generator offers at start. Check your air conditioner's starting watts, or use a soft start device."
  },
  {
    "q": "Do I need a TT-30R outlet?",
    "a": "If your trailer uses a 30A shore cord, a TT-30R lets you plug in directly. Without it you need an adapter. The WEN 56477i 4800, WEN 56360i 3600 and Oxseryn 4400 Inverter list RV receptacles."
  },
  {
    "q": "Is an inverter generator worth it over open frame?",
    "a": "Inverter units make cleaner power for laptops and chargers and run quieter. Open frame units cost less per watt but are louder. For a campground with quiet hours, an inverter is worth the premium."
  },
  {
    "q": "How far from my RV should I place the generator?",
    "a": "Keep it outdoors, well away from windows, doors and vents, with the exhaust pointed away. Many guides advise at least 20 feet, but follow the manual and campground rules. Never run it in an enclosed space."
  },
  {
    "q": "How do I keep the generator healthy between trips?",
    "a": "Use a fuel stabilizer or run the fuel out of the carburetor before storage. Check the oil and clean the air filter periodically. Start it once a month for a few minutes to keep seals moving."
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
