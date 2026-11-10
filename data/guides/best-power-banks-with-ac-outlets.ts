export const guideSlug = "best-power-banks-with-ac-outlets";
export const guideTitle = "4 Best Power Banks With AC Outlets in 2026";
export const metaTitle = "Best Power Banks With AC Outlets in 2026";
export const metaDescription = "Best power banks with AC outlets for camping, comparing two true 65W AC models and wall-plug banks that skip the charger brick.";
export const mainKeyword = "best power banks with ac outlets";
export const introParagraphs = [
  "Few power banks have a real AC outlet, so this guide leads with the two that do and adds two nearest-fit banks with a built-in wall plug. Two listings run household 110V or 120V appliances up to 65W, and the other two use the plug only to recharge the bank itself.",
  "Four banks were compared on whether the AC feature is an outlet or a plug, the stated wattage, battery capacity, recharge method and extras such as solar input. This is a smaller list than usual because few listings truly deliver AC power."
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
    "id": "best-power-banks-with-ac-outlets-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Portable Solar Power Bank with AC Outlet 65W 110V External Battery Pack",
    "price": "$89.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41h1U+eC4sL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CWLBNXKH?tag=rvgearlab-20",
    "description": "The ZeroKor lists a 24000mAh lithium-ion pack with one 110V 65W maximum AC outlet, a 9V to 12.6V 10A DC output and two USB ports. A 30W solar panel is included, and the pack recharges from wall, solar or a car adapter.\n\nNo other bank in this list ships with a solar panel in the box, and the powkey kit lists only chargers. Compared with the wall-plug banks, it can run an actual AC device.\n\nIt suits a camper who wants AC power for a small laptop charger or a camera battery, and off-grid recharge. Short-circuit, over-current and overload protection are named.",
    "specs": [
      "24000mAh, 110V 65W AC outlet",
      "30W solar panel included",
      "Three charging ways"
    ],
    "pros": [
      "Real AC outlet at up to 65W",
      "Solar panel comes in the box",
      "Three ways to recharge",
      "Short-circuit and overload protection"
    ],
    "cons": [
      "Priciest bank in this list",
      "AC output tops out at 65W"
    ],
    "bestFor": "Small AC devices off-grid",
    "take": "The only AC bank that includes its own solar panel. A good fit for slow weekends off-grid.",
    "catch": "65W max means no hair dryers, kettles or large appliances."
  },
  {
    "id": "best-power-banks-with-ac-outlets-2",
    "rank": 2,
    "badge": "Best Compact AC",
    "name": "Portable Power Station with AC Outlet 120V",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bJaaGxfDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C1SH2R19?tag=rvgearlab-20",
    "description": "The powkey lists 24000mAh, 88.8Wh, with a 120V 65W AC outlet, two USB outputs (QC 3.0 9V/2A and 5V/3A) and a DC 9 to 12.6V 10A output. It recharges in under 4 hours from a 30W DC15V/2A input, with an LED display.\n\nIt matches the ZeroKor on capacity and AC wattage at a lower price. The 88.8Wh rating is printed, which puts it under common carry-on limits.\n\nIt suits a car camper after a compact AC source for a laptop charger or a small fan. The kit includes a car charger and a cigarette lighter adapter.",
    "specs": [
      "24000mAh, 88.8Wh",
      "120V 65W AC outlet",
      "Under 4 hour recharge"
    ],
    "pros": [
      "AC outlet at a lower price",
      "88.8Wh rating printed",
      "Under 4 hour recharge",
      "Car charger in the kit"
    ],
    "cons": [
      "No solar panel in the box",
      "Same 65W AC cap"
    ],
    "bestFor": "Car camping AC power",
    "take": "A leaner, cheaper AC bank with the Wh rating spelled out.",
    "catch": "Solar charging needs a panel bought separately."
  },
  {
    "id": "best-power-banks-with-ac-outlets-3",
    "rank": 3,
    "badge": "Best Big Wall-Plug Bank",
    "name": "Portable Charger Power Bank 50000mAh Massive Capacity with Wall Plug Black",
    "price": "$34.18",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fCXdcwwKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJM7TXYL?tag=rvgearlab-20",
    "description": "The Sucrosey lists 50000mAh with a built-in foldable AC plug that recharges it from a 100V to 240V outlet in about 6 hours. It measures 4.61 x 2.87 x 1.26 inches, weighs 0.79 lb, and offers 22.5W from its USB-C port, built-in USB-C cable and USB-A port.\n\nNote that its AC plug recharges the bank and does not supply AC power. It beats the other two on capacity, with the AIFENG at 10000mAh, and its pass-through charging powers devices while recharging.\n\nIt suits a camper who wants a big phone bank with no charger brick to remember. It is for phones and tablets, not for plug-in appliances.",
    "specs": [
      "50000mAh, 22.5W USB-C",
      "Foldable AC plug, 6 hour recharge",
      "Pass-through charging"
    ],
    "pros": [
      "Wall plug removes the charger brick",
      "50000mAh in a light 0.79 lb body",
      "22.5W on three outputs",
      "12-month warranty listed"
    ],
    "cons": [
      "Does not provide AC output",
      "Full recharge takes about 6 hours"
    ],
    "bestFor": "Phone charging with no brick",
    "take": "A big phone bank with a plug built in. Treat it as a recharge convenience, not an inverter.",
    "catch": "The AC plug is input only, so no appliance can run from it."
  },
  {
    "id": "best-power-banks-with-ac-outlets-4",
    "rank": 4,
    "badge": "Best Compact Wall-Plug Bank",
    "name": "Portable Charger Power Bank 10000mAh",
    "price": "$33.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31HMFAPGhUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GYPZ92VM?tag=rvgearlab-20",
    "description": "The AIFENG lists 10000mAh in a 3.66 x 2.36 inch body at 7.05 oz, with a foldable AC plug that recharges it in about 2.5 hours. It carries built-in cables, 22.5W fast charging and charges up to four devices at once.\n\nIts plug serves only recharging, like the Sucrosey, and it trades capacity for a body that is up to 45 percent smaller than average banks. The 2.5 hour wall recharge is quicker than the Sucrosey's.\n\nIt suits a minimalist who wants a small daily bank with built-in cables and a fold-out plug. It is carry-on friendly for travel days.",
    "specs": [
      "10000mAh, 7.05 oz",
      "Foldable plug, 2.5 hour recharge",
      "Built-in cables, 22.5W"
    ],
    "pros": [
      "Lightest and smallest bank in this list",
      "Wall recharge in about 2.5 hours",
      "Built-in cables for travel",
      "Charges four devices at once"
    ],
    "cons": [
      "No AC output for appliances",
      "Only about two phone charges"
    ],
    "bestFor": "Light everyday carry",
    "take": "Small, fast to refill and cable-free. Good as a day bank.",
    "catch": "Capacity is small and the plug supplies no AC power."
  }
];

export const howWeEvaluated = [
  {
    "title": "AC outlet versus AC plug",
    "description": "Listings were read for whether the bank outputs household AC or only accepts it for charging."
  },
  {
    "title": "Stated wattage",
    "description": "The 65W AC output figure and the 22.5W USB figure were used as the main power measures."
  },
  {
    "title": "Capacity and Wh",
    "description": "mAh and any printed Wh rating were compared for runtime and carry-on rules."
  },
  {
    "title": "Recharge options",
    "description": "Wall, solar and car recharge routes were weighed for camp use."
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
    "subheading": "By What You Plan to Power",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Laptop charger or camera charger",
          "powkey 24000mAh AC",
          "65W AC outlet at a lower price."
        ],
        [
          "Small AC device off-grid",
          "ZeroKor 24000mAh Solar",
          "Includes a 30W solar panel."
        ],
        [
          "Many phones, no wall charger",
          "Sucrosey 50000mAh Plug",
          "50000mAh with a built-in plug."
        ],
        [
          "Small day bank",
          "AIFENG 10000mAh Plug",
          "Smallest and fastest to refill by wall."
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
          "$30 to $40",
          "AIFENG 10000mAh Plug or Sucrosey 50000mAh Plug"
        ],
        [
          "$50 to $90",
          "powkey 24000mAh AC or ZeroKor 24000mAh Solar"
        ]
      ]
    }
  },
  {
    "subheading": "AC outlet bank vs wall-plug bank",
    "cards": [
      {
        "label": "AC outlet bank",
        "text": "Outputs household voltage up to 65W, so it can run a standard plug device. The ZeroKor 24000mAh Solar and powkey 24000mAh AC fit here."
      },
      {
        "label": "Wall-plug bank",
        "text": "The plug only recharges the bank, which removes the charger brick. The Sucrosey 50000mAh Plug and AIFENG 10000mAh Plug fit here."
      }
    ],
    "note": "If you need to run a plug-in device, buy the powkey 24000mAh AC and skip the wall-plug banks."
  },
  {
    "subheading": "By Recharge Preference",
    "table": {
      "headers": [
        "Choose",
        "Recommended pick"
      ],
      "rows": [
        [
          "Solar included",
          "ZeroKor 24000mAh Solar"
        ],
        [
          "Fast wall recharge",
          "AIFENG 10000mAh Plug"
        ],
        [
          "Wh printed",
          "powkey 24000mAh AC"
        ],
        [
          "Largest cell",
          "Sucrosey 50000mAh Plug"
        ]
      ]
    }
  },
  {
    "subheading": "For Running a Laptop Charger at Camp Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A listed 65W AC outlet or higher and a Wh rating."
      },
      {
        "label": "In this comparison",
        "text": "The powkey 24000mAh AC lists a 120V 65W outlet at 88.8Wh, and the ZeroKor 24000mAh Solar adds the solar panel."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ZeroKor 24000mAh Solar if you want a solar panel in the box. It is the only pick that charges itself off-grid."
      },
      {
        "label": "Save if",
        "text": "Save with the powkey 24000mAh AC for the same AC wattage, or choose the AIFENG 10000mAh Plug if you only charge phones."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Real AC output versus a wall plug",
    "explanation": "A power bank with an AC outlet outputs household voltage, and a bank with a foldable plug only uses that plug to recharge itself. This matters because the second kind cannot run a device with a standard plug. Check whether the listing says AC output, AC outlet or AC plug."
  },
  {
    "criterion": "What 65W of AC can run",
    "explanation": "A 65W AC outlet suits laptop chargers, camera chargers, small fans and phone bricks. A coffee maker, hair dryer or heater needs far more and will trip the protection. Add up the wattage printed on your device's label."
  },
  {
    "criterion": "Wh and carry-on rules",
    "explanation": "Capacity in Wh decides whether a bank can fly. Airlines generally limit carry-on banks to 100Wh, and the powkey prints 88.8Wh. Look for a Wh figure or multiply mAh by 3.7 and divide by 1000."
  },
  {
    "criterion": "Pure sine or modified sine",
    "explanation": "Many small AC banks do not state their wave type. Sensitive electronics and motor loads can run poorly on a modified sine output. The listing does not state the waveform for these AC banks, so use them for simple chargers."
  },
  {
    "criterion": "Recharge routes",
    "explanation": "A bank that charges from wall, car and solar is easier to keep full. A solar panel adds off-grid use but works slowly in cloud. Compare the input wattage and any included panel."
  }
];

export const faq = [
  {
    "q": "Can these banks run a coffee maker or heater?",
    "a": "No. The AC outlets top out at 65W and the plug banks have no AC output. Heating appliances need far more power."
  },
  {
    "q": "Are the wall-plug banks AC power banks?",
    "a": "They are not. The plug is how they recharge, and they output USB only. They are listed here as the nearest fit."
  },
  {
    "q": "Is an AC power bank worth it over an inverter?",
    "a": "For one laptop charger, a 65W AC bank is far simpler. An inverter and a battery serve larger loads. Choose by the wattage you need."
  },
  {
    "q": "How do I charge a laptop from the AC outlet?",
    "a": "Plug the laptop's own charger into the outlet and switch the bank on. Check the charger's wattage stays under 65W. Stop if the bank gets hot."
  },
  {
    "q": "Is a printed Wh rating important?",
    "a": "Yes, since it shows whether the bank is carry-on friendly and how much energy it holds. The powkey prints 88.8Wh. Compute Wh from mAh when the listing does not."
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
