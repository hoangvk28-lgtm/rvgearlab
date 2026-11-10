export const guideSlug = "best-300w-solar-generators";
export const guideTitle = "3 Best 300w Solar Generators in 2026";
export const metaTitle = "Best 300w Solar Generators in 2026";
export const metaDescription = "Best 300W solar generators compared on battery size, included panel wattage and weight for tent camping, car trips and basic phone and laptop use.";
export const mainKeyword = "best 300w solar generators";
export const introParagraphs = [
  "A 300W solar generator is a small battery box with an AC outlet and a folding panel, enough for phones, tablets, laptops and a few lights. It is not a fridge or heater machine, and the included panel is usually only 40W to 60W.",
  "Three kits made the list, all with a 300W AC rating and a bundled panel. They differ in battery size from 220Wh to 296Wh, panel wattage and how much each weighs."
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
    "id": "best-300w-solar-generators-1",
    "rank": 1,
    "badge": "Best Overall 300W",
    "name": "Portable Solar Generator 300W Power Station with 60W Foldable Solar Panel",
    "price": "$209.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/519M0Y5tHeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FKMK7RX5?tag=rvgearlab-20",
    "description": "The EnginStar kit pairs a 296Wh lithium pack with a 60W foldable solar panel and two 110V pure sine wave AC outlets rated at 300W. The body measures 9 by 5.5 by 7.5 inches and weighs 6.5 pounds, and the listing names a battery management system with voltage and temperature control.\n\nIt has the largest battery and the largest panel of the three, so the sun refills it faster than the 40W panels in the ZeroKor and Apowking kits. It weighs more than the Apowking at 5 pounds.\n\nIt suits tent campers and car travelers who want the most stored energy and solar input in a small kit. Three charging routes cover wall, car and the panel.",
    "specs": [
      "296Wh, 300W pure sine AC",
      "60W foldable solar panel",
      "6.5 lb, 9 x 5.5 x 7.5 in"
    ],
    "pros": [
      "Largest battery and panel of the three",
      "Two pure sine wave AC outlets",
      "Charges by wall, car or solar",
      "Battery management system"
    ],
    "cons": [
      "Panel still takes a full day to refill",
      "Heavier than the Apowking"
    ],
    "bestFor": "Phones, laptops and camp lights",
    "take": "The most capable of the small kits. Good if you want more solar and more battery.",
    "catch": "A 60W panel needs many hours of strong sun to refill 296Wh."
  },
  {
    "id": "best-300w-solar-generators-2",
    "rank": 2,
    "badge": "Best Lightest",
    "name": "Portable Solar Generator",
    "price": "$159.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51vwGtV2bXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DHC51QJV?tag=rvgearlab-20",
    "description": "The Apowking kit has a 220Wh (60000mAh) Li-ion pack in a 5 pound body measuring 8.5 by 6.7 by 4.1 inches, with a 40W monocrystalline panel rated at 24 percent efficiency. It offers 6 outputs, 2 AC, 3 USB and 1 USB-C, a fanless design and a large LED light that covers about 100 square feet.\n\nIt is the lightest and lowest priced of the three, giving up 76Wh of battery next to the EnginStar. The built-in LED backlight gives it a camp-light role that the other kits lack.\n\nIt suits hikers, backpackers and car campers who put weight and price first. The BMS shuts down in under 0.1 seconds on a fault.",
    "specs": [
      "220Wh Li-ion, 300W",
      "40W panel, 24% efficiency",
      "5 lb, fanless, LED light"
    ],
    "pros": [
      "Lightest at 5 pounds",
      "Lowest price of the three",
      "Large built-in LED light",
      "Fanless and quiet"
    ],
    "cons": [
      "Smallest battery of the three",
      "40W panel refills slowly"
    ],
    "bestFor": "Backpack and tent trips",
    "take": "A light starter kit with a built-in lamp. Great as a first solar generator.",
    "catch": "The 220Wh battery covers a phone and a laptop, not much more."
  },
  {
    "id": "best-300w-solar-generators-3",
    "rank": 3,
    "badge": "Best Two-Pack",
    "name": "Portable Solar Generator with Panel",
    "price": "$199.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51OSwyfZg2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F8J39B45?tag=rvgearlab-20",
    "description": "The ZeroKor kit includes a 300W station with a 280Wh lithium pack, a 40W foldable solar panel and a second 100W portable power pack with its own AC outlet. The main station has two 110V/300W max AC outlets, a DC port, three 5V/3A USB ports, a QC3.0 port and an SOS flashlight.\n\nThe extra 100W pack gives it two power sources in one box, which neither the EnginStar nor the Apowking offer. Its 280Wh sits between those two.\n\nIt suits families who want a second small pack for a tent or car. A built-in BMS guards against short circuits, over-current, over-voltage and overload.",
    "specs": [
      "300W station, 280Wh",
      "40W panel plus 100W pack",
      "SOS flashlight, QC3.0 port"
    ],
    "pros": [
      "Second 100W pack included",
      "Built-in SOS flashlight",
      "Pure sine wave AC outlets",
      "Short circuit and overload protection"
    ],
    "cons": [
      "40W panel recharges slowly",
      "Two units to keep charged"
    ],
    "bestFor": "A family kit with a spare pack",
    "take": "A flexible low-cost kit. Take it if you want two power sources for a tent and a car.",
    "catch": "Two packs mean two things to charge and keep track of."
  }
];

export const howWeEvaluated = [
  {
    "title": "Battery size",
    "description": "Compared stated watt-hours and mAh figures for each kit."
  },
  {
    "title": "Panel wattage",
    "description": "Noted the included panel's wattage, since it sets the refill rate."
  },
  {
    "title": "Weight and size",
    "description": "Looked at stated weights and dimensions for carrying."
  },
  {
    "title": "Outlets and protection",
    "description": "Counted AC, USB and DC ports and checked for battery management details."
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
    "subheading": "By Trip",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Car camping with a laptop",
          "EnginStar 300W Kit",
          "296Wh and 60W panel"
        ],
        [
          "Backpacking and light use",
          "Apowking 300W Kit",
          "5 lb with a built-in LED"
        ],
        [
          "Family with a tent and a car",
          "ZeroKor Solar Kit",
          "Second 100W pack included"
        ],
        [
          "Fastest solar refill",
          "EnginStar 300W Kit",
          "Largest panel of the three"
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
          "$150 to $160",
          "Apowking 300W Kit"
        ],
        [
          "$190 to $200",
          "ZeroKor Solar Kit"
        ],
        [
          "$200 to $210",
          "EnginStar 300W Kit"
        ]
      ]
    }
  },
  {
    "subheading": "One station vs a station plus a spare pack",
    "cards": [
      {
        "label": "One station",
        "text": "The EnginStar 300W Kit and Apowking 300W Kit give a single box that is simple to keep charged."
      },
      {
        "label": "Station plus spare",
        "text": "The ZeroKor Solar Kit adds a second 100W pack for another tent or vehicle."
      }
    ],
    "note": "Most solo campers should default to the EnginStar 300W Kit unless weight or a spare pack matters more."
  },
  {
    "subheading": "By Weight and Budget",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lightest and cheapest",
          "Apowking 300W Kit"
        ],
        [
          "Largest battery",
          "EnginStar 300W Kit"
        ],
        [
          "Most accessories",
          "ZeroKor Solar Kit"
        ]
      ]
    }
  },
  {
    "subheading": "For Tent Camping Phone and Laptop Charging Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A pure sine AC outlet and enough Wh for two days of devices"
      },
      {
        "label": "In this comparison",
        "text": "The EnginStar 300W Kit has 296Wh, and the ZeroKor Solar Kit adds an SOS flashlight and a spare pack."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the EnginStar 300W Kit for the largest battery and panel of the three."
      },
      {
        "label": "Save if",
        "text": "Save with the Apowking 300W Kit if weight and price matter more than capacity."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 300W gets you",
    "explanation": "A 300W rating means the AC outlets can run up to 300 watts at once, enough for a laptop, a fan and phone chargers. A kettle or hair dryer is far over the limit. Add up the watts of what you plug in together."
  },
  {
    "criterion": "Watt-hours decide how long",
    "explanation": "A 296Wh battery runs a 60W laptop for about four to five hours before losses. Divide watt-hours by the load's watts for a rough time. Compare the Wh figure in the title, since mAh figures do not translate directly."
  },
  {
    "criterion": "Solar panel wattage",
    "explanation": "A 40W panel in full sun adds at most 40Wh per hour, so a 296Wh battery takes most of a day or more. A bigger panel refills faster. Check the panel's rated watts and that its voltage matches the station's input."
  },
  {
    "criterion": "Pure sine wave output",
    "explanation": "Pure sine wave AC is gentler on laptops and sensitive electronics than modified sine. The EnginStar and ZeroKor listings name pure sine outlets, while the Apowking listing does not say. Look for the words pure sine wave in the specs."
  },
  {
    "criterion": "Weight and portability",
    "explanation": "Under 7 pounds is easy to pack, while a second pack adds weight. Check dimensions for your daypack or car footwell. Look for stated weight rather than a vague claim like lightweight."
  }
];

export const faq = [
  {
    "q": "Can a 300W solar generator run a mini fridge?",
    "a": "Some mini fridges draw under 300W when running but surge higher at start. Check the fridge's start watts first, and expect a short runtime on 220Wh to 296Wh."
  },
  {
    "q": "Is the included panel enough?",
    "a": "It tops up slowly, since a 40W or 60W panel supplies only a fraction of the battery's capacity per day. Add a bigger panel if the input range allows."
  },
  {
    "q": "Is a 300W kit worth it over a power bank?",
    "a": "Yes if you need an AC outlet. A kit like the EnginStar 300W Kit runs a laptop charger directly. For phones alone, a plain power bank is lighter."
  },
  {
    "q": "How do I charge it by solar?",
    "a": "Unfold the panel in direct sun, plug it into the solar input and watch the indicator. Keep panels clean and angled toward the sun."
  },
  {
    "q": "How do I look after the battery?",
    "a": "Store it at about half charge in a cool dry place. Recharge every few months to avoid deep discharge."
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
