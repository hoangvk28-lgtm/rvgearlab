export const guideSlug = "best-portable-generators-under-300";
export const guideTitle = "5 Best Portable Generators Under 300 in 2026";
export const metaTitle = "Best Portable Generators Under 300 in 2026";
export const metaDescription = "Best portable generators under $300: four gas inverter generators and one battery station compared on running watts, weight, noise and CO safety.";
export const mainKeyword = "best portable generators under 300";
export const introParagraphs = [
  "Three hundred dollars gets you a gas inverter generator with real running watts, in sizes from 1200W to 3400W. That is enough for a fridge, a few lights and a laptop, or a small RV air conditioner on the biggest unit.",
  "Four of the five picks burn gasoline and must run outdoors, and the fifth is a battery station for buyers who need silence. The notes below say which suits a tailgate, an RV pad and a power cut."
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
    "id": "best-portable-generators-under-300-1",
    "rank": 1,
    "badge": "Best Value Under $300",
    "name": "Evernexta 4000W Gas-Powered Inverter Generator",
    "price": "$255.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51JdXA0Q6NL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GY9Q7ML9?tag=rvgearlab-amz-20",
    "description": "Evernexta uses a 208cc engine to deliver 4000 starting and 3400 running watts at under 3 percent THD. It has a 30A outlet, two 120V AC outlets and a 12V DC port, a 2 gallon tank for up to 6.5 hours at 50 percent load, and an ECO mode that slows the engine under light loads.\n\nIt has roughly double the running watts of the 1800W units here for about $55 less. The cost is weight, 55 lb in an open frame, and a louder engine than the enclosed Aceup.\n\nChoose it for an RV with a 30A inlet, a cabin or a site with a fridge and a small air conditioner. Overload protection, an AC breaker and low-oil shutdown are built in.",
    "specs": [
      "4000 starting, 3400 running watts",
      "30A outlet, two 120V, 12V DC",
      "2 gallon tank, 6.5 hours at 50%"
    ],
    "pros": [
      "3400 running watts for the price",
      "30A outlet suits RV cords",
      "ECO mode saves fuel at light loads",
      "Low-oil shutdown and overload protection"
    ],
    "cons": [
      "55 lb open frame is a two-hand lift",
      "Louder than enclosed inverter units"
    ],
    "bestFor": "RV and cabin power",
    "take": "The most running watts you can buy under $300.",
    "catch": "Never run it in a tent, garage or camper."
  },
  {
    "id": "best-portable-generators-under-300-2",
    "rank": 2,
    "badge": "Best Light With CO Shutdown",
    "name": "2000W Portable Inverter Generator for Home Use",
    "price": "$299.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41a7mVV4WaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWD6HGVF?tag=rvgearlab-amz-20",
    "description": "All Power's inverter generator has a 79.7cc engine that delivers 2000 starting and 1800 running watts at 39.6 lb. It runs as low as 62 dBA at a quarter load, gives up to 6.5 hours at half load on 0.88 gallons and has a CO detect shutdown sensor.\n\nIt carries a CO sensor where the Evernexta and LIFAN rely on the owner, and it weighs 15 lb less than the Evernexta. It gives up 1600 running watts to get there.\n\nChoose it for camping and tailgating with lights, a fan, a TV and a laptop. A low-oil alarm, overload alarm and CO warning light sit on the panel.",
    "specs": [
      "2000 starting, 1800 running watts",
      "39.6 lb, as low as 62 dBA",
      "CO detect shutdown sensor"
    ],
    "pros": [
      "Built-in CO shutdown sensor",
      "Only 39.6 lb",
      "Eco Mode saves fuel",
      "Panel with low-oil and overload alarms"
    ],
    "cons": [
      "Small 0.88 gallon tank",
      "Not enough for an RV air conditioner"
    ],
    "bestFor": "Camping with a safety margin",
    "take": "A light inverter unit with a CO sensor.",
    "catch": "A sensor is a backup, not permission to run it close to a tent."
  },
  {
    "id": "best-portable-generators-under-300-3",
    "rank": 3,
    "badge": "Best Parallel-Ready",
    "name": "LIFAN 2300W Portable Gas Inverter Generator for Camping",
    "price": "$299.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RK8XmeKAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLZTGNYW?tag=rvgearlab-amz-20",
    "description": "LIFAN lists 2300 peak and 1800 running watts from a gas inverter generator aimed at camping and tailgating. Eco mode manages engine speed under light loads, and a parallel-ready design supports a compatible second unit for more output.\n\nIt matches the All Power on running watts and adds the option to double up later. It does not have a CO sensor, so a battery CO alarm is a must near your campsite.\n\nChoose it if you want to start with one unit and add a second when your needs grow. It suits RV trips and event stands.",
    "specs": [
      "2300 peak, 1800 running watts",
      "Eco mode engine control",
      "Parallel-ready design"
    ],
    "pros": [
      "1800 running watts for lights and fans",
      "Parallel-ready for a second unit",
      "Eco mode trims fuel use",
      "Inverter output for electronics"
    ],
    "cons": [
      "Second unit and parallel cable cost extra",
      "Heavier than a battery station"
    ],
    "bestFor": "Growing to a two-unit setup",
    "take": "A flexible gas unit that can double its output.",
    "catch": "Do not run it near sleeping areas."
  },
  {
    "id": "best-portable-generators-under-300-4",
    "rank": 4,
    "badge": "Best Clean Power",
    "name": "Aceup Energy Super Quiet 1500 Watt Portable Inverter Generator",
    "price": "$254.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41U5glQ08BL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DJSR8W1Q?tag=rvgearlab-amz-20",
    "description": "Aceup is a 1500 peak and 1200 running watt inverter generator with a 4-stroke OHV engine and a fully enclosed case. It gives up to 6 hours at half load on 0.6 gallons, and has a 120V AC outlet, a 12V DC outlet, USB-A and USB-C ports and a digital display.\n\nTHD below 1.5 percent is the cleanest sine wave here, which protects phones, TVs and laptops. It has the lowest running watts of the gas units.\n\nChoose it for a tailgate or a small camp where electronics matter more than raw power. It carries a 2-year warranty and lifetime technical support.",
    "specs": [
      "1500 peak, 1200 running watts",
      "THD below 1.5%",
      "Digital display, USB-C"
    ],
    "pros": [
      "THD under 1.5 percent protects electronics",
      "Enclosed case for quieter running",
      "Digital display and USB-C",
      "2-year warranty"
    ],
    "cons": [
      "1200 running watts limits large loads",
      "Tiny 0.6 gallon tank"
    ],
    "bestFor": "Sensitive electronics at a tailgate",
    "take": "The cleanest power in the guide.",
    "catch": "Refuel often on long events."
  },
  {
    "id": "best-portable-generators-under-300-5",
    "rank": 5,
    "badge": "Best Silent Alternative",
    "name": "Jackery Explorer 300 Portable Power Station",
    "price": "$239.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-Ey75o-WL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082TMBYR6?tag=rvgearlab-amz-20",
    "description": "Jackery's Explorer 300 holds 292Wh in LiFePO4 cells rated for 4000 or more cycles and weighs 7.5 lb. It has a 300W inverter with a 600W peak, a 100W USB-C PD jack plus a 120W car socket.\n\nIt stores a fraction of what a gas unit can run on, and it makes no noise, no fumes and no refueling trips. It is the only pick safe to use inside a tent.\n\nChoose it for CPAP nights, phones and lights where a generator would be noisy. It suits buyers who camp in quiet hours.",
    "specs": [
      "292Wh LiFePO4, 4000+ cycles",
      "300W rated, 600W peak",
      "100W USB-C PD, 120W car port"
    ],
    "pros": [
      "Silent and safe indoors",
      "LiFePO4 rated for 4000 cycles",
      "100W USB-C PD",
      "Light at 7.5 lb"
    ],
    "cons": [
      "300W limit rules out heaters",
      "Small capacity next to gas"
    ],
    "bestFor": "Quiet, indoor power",
    "take": "The one pick you can use inside the tent.",
    "catch": "Do not plan on running a fridge for long."
  }
];

export const howWeEvaluated = [
  {
    "title": "Running watts",
    "description": "Running watts from 1200W to 3400W were compared, since starting watts only last a moment."
  },
  {
    "title": "Weight",
    "description": "Weights from 7.5 lb to 55 lb were compared."
  },
  {
    "title": "Noise and safety",
    "description": "Decibel claims, CO shutdown and enclosed designs were noted."
  },
  {
    "title": "Fuel and runtime",
    "description": "Tank size and hours at half load were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is at or under $300, and the top pick gives the most running watts per dollar."
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
    "subheading": "By use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "RV with a 30A inlet",
          "Evernexta 4000W",
          "3400 running watts, 30A outlet."
        ],
        [
          "Camping with a CO sensor",
          "All Power 2000W",
          "CO detect shutdown at 39.6 lb."
        ],
        [
          "Starting small, adding a second unit",
          "LIFAN 2300W",
          "Parallel-ready."
        ],
        [
          "Phones and laptops at a tailgate",
          "Aceup 1500W",
          "THD under 1.5%."
        ],
        [
          "Quiet CPAP and lights",
          "Jackery Explorer 300",
          "Silent LiFePO4."
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
          "$240 to $260",
          "Evernexta 4000W or Aceup 1500W"
        ],
        [
          "$250 to $300",
          "Jackery Explorer 300 or All Power 2000W"
        ],
        [
          "$290 to $300",
          "LIFAN 2300W"
        ]
      ]
    }
  },
  {
    "subheading": "Gas vs battery",
    "cards": [
      {
        "label": "Gas",
        "text": "The Evernexta 4000W, All Power 2000W, LIFAN 2300W and Aceup 1500W run for hours but make noise and carbon monoxide. They must run outdoors."
      },
      {
        "label": "Battery",
        "text": "The Jackery Explorer 300 is silent and indoor-safe but holds only 292Wh. It suits small loads."
      }
    ],
    "note": "Most buyers who need real power should take the Evernexta 4000W, and quiet-hour campers the Jackery Explorer 300."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Budget band",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $243",
          "Evernexta 4000W"
        ],
        [
          "About $255",
          "Aceup 1500W"
        ],
        [
          "About $259",
          "Jackery Explorer 300"
        ],
        [
          "About $300",
          "All Power 2000W"
        ],
        [
          "About $300",
          "LIFAN 2300W"
        ]
      ]
    }
  },
  {
    "subheading": "For an RV campsite specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for 1800W or more running, a 30A or TT-30 outlet and a CO safety plan."
      },
      {
        "label": "In this comparison",
        "text": "The Evernexta 4000W has a 30A outlet and 3400 running watts, and the All Power 2000W has a CO sensor."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you need an RV air conditioner and a fridge together, which calls for 3000W running and a larger unit than any pick here except the Evernexta 4000W. Step up to the next tier for quieter enclosed models."
      },
      {
        "label": "Save if",
        "text": "Save if you only need lights, a fan and phone charging, since the Aceup 1500W at about $255 or the Jackery Explorer 300 handle that."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Running vs starting watts",
    "explanation": "Starting watts only last a second or two to start a motor, and the running rating is what the engine sustains. The Evernexta 4000W lists 4000 starting and 3400 running, while the LIFAN lists 2300 peak and 1800 running. Add up your loads and compare them to the running number only."
  },
  {
    "criterion": "CO safety",
    "explanation": "Gas generators make carbon monoxide, which is invisible, odorless and deadly in minutes. Run any gas unit outdoors at least 20 feet from tents, windows and doors, point the exhaust away, and place a battery CO alarm in your shelter. A CO shutdown sensor adds protection but never replaces distance."
  },
  {
    "criterion": "Weight and frame",
    "explanation": "An open-frame unit like the 55 lb Evernexta is cheaper for its output but louder, while an enclosed case like the Aceup cuts noise. Under 40 lb is easy to lift into a trunk, and over 50 lb needs two hands or a cart. Check the weight and your carry."
  },
  {
    "criterion": "Fuel tank and runtime",
    "explanation": "A 2 gallon tank gives 6.5 hours at half load, while a 0.6 gallon tank gives 6 hours at half load on a smaller engine. Fuel cost and refueling trips add up on long stays. Check the hours at 50 percent load, not the best-case quarter load number."
  },
  {
    "criterion": "Clean power for electronics",
    "explanation": "Inverter generators produce a sine wave with total harmonic distortion (THD) under 3 to 5 percent, which is safe for laptops, phones and TVs. An open-frame conventional generator can exceed 20 percent and damage electronics. Look for the THD figure in the specs, so look for a THD number in the specs, because a missing figure often means a conventional generator."
  },
  {
    "criterion": "Warranty and support",
    "explanation": "A 2-year limited warranty is typical at this price, with some brands adding free technical support. Parts and service networks vary a lot. Check where warranty service is available before you buy, so compare the length, whether labor is covered and whether the maker has a US parts depot near you, because a cheap generator with no local service can sit broken for weeks after a fault."
  }
];

export const faq = [
  {
    "q": "Can the Evernexta 4000W run an RV air conditioner?",
    "a": "A 13,500 BTU unit draws about 1200 to 1500W running and needs 2500 to 3000W to start. With 4000 starting and 3400 running watts, the Evernexta 4000W can often start one, especially with a soft-start kit. Do not run other big loads at the same time."
  },
  {
    "q": "How loud are these generators?",
    "a": "Quiet inverter models run 60 to 70 dBA at 23 feet, about the level of a conversation or a dishwasher. The All Power 2000W lists as low as 62 dBA at a quarter load. Many campgrounds enforce quiet hours and noise limits."
  },
  {
    "q": "Do I need to break in a new generator?",
    "a": "Most makers advise adding the correct oil before the first start, using fresh gasoline and running it for a short period under light load. The LIFAN notes first-use setup guidance for this. Follow the manual and check the oil before every use."
  },
  {
    "q": "Where should I run a generator at a campsite?",
    "a": "Outdoors, on level ground, at least 20 feet from tents and vehicles with the exhaust pointing away. Never run it in a tent, garage or camper. Use extension cords rated for the load and keep the unit dry."
  },
  {
    "q": "What does parallel-ready mean?",
    "a": "It means two matching units can be linked with a parallel kit to share the load and double output. The LIFAN 2300W supports it, but the kit is sold separately. Check that both units are the same model."
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
