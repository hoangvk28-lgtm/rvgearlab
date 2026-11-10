export const guideSlug = "best-lithium-solar-generators";
export const guideTitle = "4 Best Lithium Solar Generators in 2026";
export const metaTitle = "Best Lithium Solar Generators in 2026";
export const metaDescription = "Best lithium solar generators compared on battery size, output, weight and solar recharge for tent camping, car trips and basic backup.";
export const mainKeyword = "best lithium solar generators";
export const introParagraphs = [
  "Every portable solar generator uses a lithium battery these days, but the listings differ on how much they say about it. Some name a battery type, others only say lithium, and the capacity range runs from 230Wh to over 1,000Wh.",
  "Four models are compared by what their listings state: capacity, output, weight and solar recharge. One lists no cell chemistry at all, so it sits last on the chemistry question and high on power."
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
    "id": "best-lithium-solar-generators-1",
    "rank": 1,
    "badge": "Best Power and Panel",
    "name": "BLUETTI Solar Generator Elite 100 V2 with 100W Solar Panel",
    "price": "$629.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31alDcISAQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F4253JB6?tag=rvgearlab-amz-20",
    "description": "The BLUETTI Elite 100 V2 kit pairs a 1,024Wh station with a 100W solar panel that ships separately. It lists 1,800W AC output (2,700W Power Lifting), 11 ports, a 25 pound body of 17L volume, an instant switchover for routers and PCs, and a 30dB quiet mode.\n\nIt stores three to four times the energy of the 296Wh EnginStar and outputs six times the 300W rating of the small units. The full charge from the 100W panel is listed at about 7 hours.\n\nCampers and home-backup buyers who need to run a bigger appliance with solar in the kit are its audience. The hidden handle makes it a one-handed carry.",
    "specs": [
      "1,024Wh, 1,800W AC",
      "11 ports, 25 lb",
      "100W panel, about 7 hour solar charge"
    ],
    "pros": [
      "Biggest battery and output of the four",
      "Panel included in the kit",
      "30dB quiet operation",
      "Instant UPS-style switchover"
    ],
    "cons": [
      "Cell chemistry is not named on the listing",
      "Panel ships separately"
    ],
    "bestFor": "A bigger appliance with solar",
    "take": "The most capable kit here. Check the cell type with the seller if chemistry matters to you.",
    "catch": "At 25 pounds it is a two-hand carry on long walks."
  },
  {
    "id": "best-lithium-solar-generators-2",
    "rank": 2,
    "badge": "Best Kit With Spare",
    "name": "Portable Solar Generator with Panel",
    "price": "$199.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51OSwyfZg2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F8J39B45?tag=rvgearlab-amz-20",
    "description": "The ZeroKor kit has a 300W station with a 280Wh lithium-ion pack, a 40W foldable solar panel and a second 100W power pack with its own AC outlet. Beyond its two AC sockets, the main unit adds DC and USB ports, a QC3.0 fast-charge port and an SOS flashlight.\n\nIt is the only kit that includes a second battery pack, and its 280Wh is close to the 296Wh of the EnginStar. It sits above the GRECELL 330W on price and below the BLUETTI.\n\nIt suits families and tent campers who want a lithium-ion kit with a panel and a spare pack for a second tent. The BMS covers short circuit and overload.",
    "specs": [
      "280Wh lithium-ion, 300W",
      "40W panel, 100W spare pack",
      "SOS flashlight, QC3.0 port"
    ],
    "pros": [
      "Second 100W pack included",
      "Lithium-ion type named",
      "Built-in SOS flashlight",
      "BMS with overload protection"
    ],
    "cons": [
      "40W panel recharges slowly",
      "Two packs to keep charged"
    ],
    "bestFor": "Two packs for a family",
    "take": "A flexible, lower-cost kit. Good for tents and car trips.",
    "catch": "Charge time on the 40W panel stretches across a full day."
  },
  {
    "id": "best-lithium-solar-generators-3",
    "rank": 3,
    "badge": "Best Light Simple Unit",
    "name": "EnginStar 296Wh Portable Solar Generator",
    "price": "$133.94",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411K6EBF2ML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FKMF2JSB?tag=rvgearlab-amz-20",
    "description": "The EnginStar 296Wh is a compact 6.5 pound box with two pure sine wave AC sockets, a built-in LED light and a large LCD. It charges by wall in about 7 hours, by car or by a compatible solar panel, and the box includes a wall charger and a car cable.\n\nIt is lighter than every other pick and costs the least of the four. The listing advises a full recharge every 2 to 3 months to keep the cells healthy, which is useful storage advice.\n\nIt suits campers who want a lightweight lithium box with an LCD for monitoring. A solar panel is not included.",
    "specs": [
      "296Wh lithium, 300W",
      "Two pure sine AC outlets",
      "6.5 lb, LCD and LED light"
    ],
    "pros": [
      "6.5 pounds, easy to carry",
      "LCD shows battery status",
      "Wall and car chargers included",
      "Two pure sine wave outlets"
    ],
    "cons": [
      "No solar panel included",
      "7 hour wall recharge"
    ],
    "bestFor": "Light weekend camping",
    "take": "A simple, light unit. Add your own panel for solar.",
    "catch": "The 7 hour wall charge needs planning."
  },
  {
    "id": "best-lithium-solar-generators-4",
    "rank": 4,
    "badge": "Best Fast USB-C",
    "name": "Portable Power Station 330W",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41x6adFhCqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B286D2V7?tag=rvgearlab-amz-20",
    "description": "The GRECELL 330W holds 230.88Wh and lists 330W of pure sine wave output with a 600W surge. It has a 60W USB-C PD port, an 18W USB-C PD port, two USB-A QC ports, one AC outlet and a car port, plus a built-in MPPT solar controller and three recharge routes.\n\nIt has the smallest battery of the four and a low price. The 60W USB-C port charges laptops faster than the EnginStar's lower-power USB ports.\n\nIt suits commuters, day trippers and light campers who need a laptop and phones charged. The listing says it supports CPAP-class devices, so ask your device maker before relying on it.",
    "specs": [
      "230.88Wh, 330W, 600W surge",
      "60W USB-C PD, 6 ports",
      "Built-in MPPT controller"
    ],
    "pros": [
      "Low price for a 330W unit",
      "60W USB-C PD fast charging",
      "Built-in MPPT solar controller",
      "Three recharge routes"
    ],
    "cons": [
      "Smallest battery of the four",
      "One AC outlet only"
    ],
    "bestFor": "Phones and a laptop on a budget",
    "take": "A low-cost way into a lithium solar generator. Fits light, short trips.",
    "catch": "At 230.88Wh, it covers a laptop and phones, not much more."
  }
];

export const howWeEvaluated = [
  {
    "title": "Battery type stated",
    "description": "Noted which listings name a lithium type and which only say lithium."
  },
  {
    "title": "Capacity and output",
    "description": "Compared watt-hours and rated AC watts."
  },
  {
    "title": "Solar",
    "description": "Checked included panels, MPPT controllers and solar input."
  },
  {
    "title": "Weight and ports",
    "description": "Compared stated weight, ports and charging routes."
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
    "subheading": "By Use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Bigger appliance and solar",
          "BLUETTI Elite 100 V2 Kit",
          "1,800W and 1,024Wh"
        ],
        [
          "Family with two tents",
          "ZeroKor Solar Kit",
          "Spare 100W pack"
        ],
        [
          "Lightweight weekend",
          "EnginStar 296Wh",
          "6.5 pounds"
        ],
        [
          "Laptop and phones on a budget",
          "GRECELL 330W",
          "60W USB-C PD and MPPT"
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
          "$130 to $150",
          "EnginStar 296Wh or GRECELL 330W"
        ],
        [
          "$190 to $630",
          "ZeroKor Solar Kit or BLUETTI Elite 100 V2 Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Larger station vs small kit",
    "cards": [
      {
        "label": "Larger station",
        "text": "The BLUETTI Elite 100 V2 Kit powers bigger appliances and runs quietly."
      },
      {
        "label": "Small kit",
        "text": "The ZeroKor Solar Kit, EnginStar 296Wh and GRECELL 330W are lighter and cheaper but cover only small loads."
      }
    ],
    "note": "Most buyers should default to the ZeroKor Solar Kit unless they need to run an appliance."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price",
          "EnginStar 296Wh"
        ],
        [
          "Low price, fast USB-C",
          "GRECELL 330W"
        ],
        [
          "Mid price with panel",
          "ZeroKor Solar Kit"
        ],
        [
          "Highest price",
          "BLUETTI Elite 100 V2 Kit"
        ]
      ]
    }
  },
  {
    "subheading": "For Tent Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Light weight, USB-C and an AC outlet"
      },
      {
        "label": "In this comparison",
        "text": "The EnginStar 296Wh weighs 6.5 pounds, and the GRECELL 330W has a 60W USB-C PD port."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BLUETTI Elite 100 V2 Kit for 1,800W output and quiet operation."
      },
      {
        "label": "Save if",
        "text": "Save with the EnginStar 296Wh or GRECELL 330W if your loads stay small."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Lithium types",
    "explanation": "Lithium-ion packs are light and common, while LiFePO4 packs last longer and tolerate heat. Several listings only say lithium. Check the title for LiFePO4 or lithium-ion."
  },
  {
    "criterion": "Capacity and runtime",
    "explanation": "Watt-hours measure stored energy. A 280Wh battery runs a 60W laptop for about four hours before losses. Divide Wh by load watts."
  },
  {
    "criterion": "Solar panel and MPPT",
    "explanation": "An MPPT controller squeezes more power from a panel than a basic one. Check the panel's watts and the station's solar input range. A 40W panel refills slowly."
  },
  {
    "criterion": "Output for your loads",
    "explanation": "A 300W station covers phones and laptops, while 1,800W adds a small appliance. Add up your loads. Check the AC outlet rating."
  },
  {
    "criterion": "Battery care",
    "explanation": "Lithium cells dislike heat and deep discharge. Store at partial charge and top up every few months, as the EnginStar listing advises. Never charge below freezing."
  }
];

export const faq = [
  {
    "q": "Which of these uses LiFePO4?",
    "a": "None of the four listings name LiFePO4. The ZeroKor lists lithium-ion, and the others say lithium or leave it out."
  },
  {
    "q": "Can a small unit run a CPAP?",
    "a": "Only if your device maker confirms inverter power is safe and the watts fit. The GRECELL 330W lists CPAP support, but ask the maker."
  },
  {
    "q": "Is the BLUETTI worth the extra?",
    "a": "If you want to run a kettle or a small heater, yes. For phones and lights, the cheaper units are enough."
  },
  {
    "q": "How do I charge by solar?",
    "a": "Plug a compatible panel into the solar input and keep it in direct sun. The EnginStar 296Wh needs a panel in its 12 to 25V range."
  },
  {
    "q": "How should I store them?",
    "a": "Store at partial charge in a cool dry place. Recharge every two to three months."
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
