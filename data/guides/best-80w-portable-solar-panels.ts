export const guideSlug = "best-80w-portable-solar-panels";
export const guideTitle = "4 Best 80w Portable Solar Panels in 2026";
export const metaTitle = "Best 80w Portable Solar Panels in 2026";
export const metaDescription = "Best 80W portable solar panels compared on real wattage, ports, weight and cell type for campers who want a lighter step up from 60W.";
export const mainKeyword = "best 80w portable solar panels";
export const introParagraphs = [
  "Eighty-watt portable panels are a small niche, so only a few listings name that exact figure. This list leads with the three true 80W units and adds the nearest-fit 100W panel as a clear step up.",
  "Each pick was sorted by the listed wattage, port types, folded weight and cell technology. The point is a panel that tops up a power bank or small station without the weight of a suitcase."
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
    "id": "best-80w-portable-solar-panels-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "80W HPBC Portable Solar Panel",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51TzXnSbGFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GXVRB21M?tag=rvgearlab-20",
    "description": "The ELECAENTA UT-80H is an 80W panel with HPBC cells listed at 25.4% conversion, and it weighs only 2.58 lbs. It adds DC, USB-C and USB-A QC3.0 outputs, plus carabiners and a 3-in-1 cable with adapters.\n\nAgainst the MHPOWOS it is far lighter and lists a higher efficiency, which is the real separator in the 80W group. Compared with the Yosoo it adds the USB-C port and an IP68 laminate.\n\nIt suits campers and backpackers who want the best watts per pound. The 60W USB-C output can feed phones, tablets and many laptops.",
    "specs": [
      "80W HPBC, 25.4% conversion",
      "2.58 lbs, pocket fold",
      "IP68, DC plus USB-C PD"
    ],
    "pros": [
      "Lightest 80W in this list",
      "Highest listed efficiency of the group",
      "IP68 rated ETFE laminate",
      "Includes carabiners and adapter set"
    ],
    "cons": [
      "Small panel area limits cloudy-day charging",
      "Weighs less because the panel area is small"
    ],
    "bestFor": "Ultralight charging",
    "take": "A top choice for weight-conscious campers who still want 80W and a USB-C port.",
    "catch": "Panel area is modest, so cloudy mornings will charge slowly."
  },
  {
    "id": "best-80w-portable-solar-panels-2",
    "rank": 2,
    "badge": "Best Ports",
    "name": "MHPOWOS 80W Portable Solar Panel Charger with USB C",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VXP8HkOfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DR1YXSXQ?tag=rvgearlab-20",
    "description": "The MHPOWOS 80W offers one 5A DC output alongside USB-C and USB-A sockets on a 5.89 lb panel that folds to 12.5 by 9.6 by 2.5 inches. It lists 23% ETFE conversion and an IP65 rating, with a 5-in-1 connector for small power stations.\n\nIt weighs more than twice the ELECAENTA and offers a more complete accessory pack, including four carabiners and a 2-in-1 USB cable. Against the Yosoo it adds USB-C and a connector set for XT60 and DC plugs.\n\nIt fits campers who charge a phone, an iPad, a drone or a small fridge-class station from one panel. A 12-month warranty comes with it.",
    "specs": [
      "80W, 23% ETFE panel",
      "DC, USB-C and USB-A",
      "5-in-1 connector, IP65"
    ],
    "pros": [
      "Three output types in one panel",
      "5-in-1 connector fits many stations",
      "12-month warranty named",
      "Four carabiners for hanging"
    ],
    "cons": [
      "Over twice the weight of the lightest",
      "IP65 only, below IP68 picks"
    ],
    "bestFor": "All-round camp charging",
    "take": "A well-equipped 80W panel for people who juggle several kinds of gear.",
    "catch": "At 5.89 lbs it is a car camp panel, not an ultralight one."
  },
  {
    "id": "best-80w-portable-solar-panels-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "Folding Solar Panel 80W",
    "price": "$60.75",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51jawbTw2DL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F1N7YW21?tag=rvgearlab-20",
    "description": "The Yosoo is an 80W monocrystalline folding panel with dual USB output, a built-in voltage regulator and safety protection against overcharge, overdischarge and short circuit. It uses an ETFE folding-bag design for easy carry.\n\nIt is the lowest priced 80W listing here and the only one that names a built-in voltage regulator. Compared with the MHPOWOS, it drops the USB-C port and the connector variety.\n\nIt suits campers who want a plain 80W panel for 12V and 5V devices at a low cost. Dual USB outputs let you charge two devices at once.",
    "specs": [
      "80W monocrystalline ETFE",
      "Dual USB output",
      "Built-in voltage regulator"
    ],
    "pros": [
      "Lowest price among the 80W options",
      "Built-in voltage regulator named",
      "Overcharge and short-circuit protection",
      "Dual outputs charge two devices"
    ],
    "cons": [
      "Weight and size are not listed",
      "No USB-C port is named"
    ],
    "bestFor": "Low-cost 12V and 5V topping up",
    "take": "A budget 80W with regulator protection for basic phone and small battery charging.",
    "catch": "The listing gives no weight or folded size, so check dimensions before relying on it for packing."
  },
  {
    "id": "best-80w-portable-solar-panels-4",
    "rank": 4,
    "badge": "Nearest Step Up",
    "name": "SOLUPUP 100W Portable Solar Panels-24% High Efficiency-Compact 8-fold Design MC-4 Output for Power Station Gen",
    "price": "$91.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51xBYD2q7uL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F8B2CV88?tag=rvgearlab-20",
    "description": "The SOLUPUP is a 100W panel, so it is a step up from 80W, with 24% efficiency cells and an 8-fold design. It folds to 14 by 10 by 2.8 inches, includes a carry bag and three button kickstands, and ships with MC4-to-XT60, Anderson, DC5521 and DC7909 connectors.\n\nIt offers 20W more peak output than the 80W picks while staying a single briefcase-sized panel. Compared with the ELECAENTA it adds the MC4 output and wider power-station coverage, and it drops the USB ports.\n\nIt suits buyers who find 80W too tight and want a 300W to 500Wh power station filled faster. The listing names a 500Wh station charge claim under optimal sun.",
    "specs": [
      "100W, 24% efficiency",
      "8-fold briefcase design",
      "MC4 plus connector set"
    ],
    "pros": [
      "20W more peak output than 80W units",
      "Three kickstands and a carry bag",
      "MC4 output fits many stations",
      "24% listed cell efficiency"
    ],
    "cons": [
      "Not an 80W panel, a step above",
      "Heavier than the lightest 80W option"
    ],
    "bestFor": "Power-station recharging",
    "take": "The nearest-fit step up for anyone whose power station wants more than 80W.",
    "catch": "It is a 100W panel, so confirm your station input can take it."
  }
];

export const howWeEvaluated = [
  {
    "title": "Exact wattage",
    "description": "The listed panel wattage was checked first, so three true 80W models lead and a 100W panel is marked as nearest fit."
  },
  {
    "title": "Weight and fold",
    "description": "Listed weight and folded dimensions decided how easy each panel is to carry."
  },
  {
    "title": "Cell technology",
    "description": "HPBC and monocrystalline cell claims and efficiency percentages were compared."
  },
  {
    "title": "Outputs",
    "description": "USB-C, USB-A, DC and MC4 outputs were compared for the gear each panel can feed."
  },
  {
    "title": "Weather and warranty",
    "description": "IP ratings and named warranty terms were noted for each listing."
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
    "subheading": "By Camper Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Weight-first backpacker",
          "ELECAENTA 80W Panel",
          "2.58 lbs with USB-C and DC."
        ],
        [
          "Gear-heavy car camper",
          "MHPOWOS 80W Panel",
          "Three output types and a full accessory set."
        ],
        [
          "Budget shopper with a 12V battery",
          "Yosoo 80W Panel",
          "Voltage regulator and protections named."
        ],
        [
          "Power station owner wanting more output",
          "SOLUPUP 100W Panel",
          "100W plus MC4 and connectors."
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
          "$60 to $80",
          "Yosoo 80W Panel or ELECAENTA 80W Panel"
        ],
        [
          "$80 to $100",
          "MHPOWOS 80W Panel or SOLUPUP 100W Panel"
        ]
      ]
    }
  },
  {
    "subheading": "True 80W vs Nearest 100W",
    "cards": [
      {
        "label": "True 80W",
        "text": "The ELECAENTA 80W Panel, MHPOWOS 80W Panel and Yosoo 80W Panel list exactly 80W, which keeps weight and cost down."
      },
      {
        "label": "Nearest 100W",
        "text": "The SOLUPUP 100W Panel is 100W with an 8-fold design, which gives more headroom for a power station."
      }
    ],
    "note": "Choose a true 80W like the ELECAENTA 80W Panel unless your station needs the extra 20W."
  },
  {
    "subheading": "By Output Need",
    "table": {
      "headers": [
        "Needs",
        "Recommended pick"
      ],
      "rows": [
        [
          "USB-C and USB-A direct",
          "ELECAENTA 80W Panel"
        ],
        [
          "DC and MC4 for a station",
          "SOLUPUP 100W Panel"
        ],
        [
          "Two USB for phones",
          "Yosoo 80W Panel"
        ],
        [
          "Mix of all three",
          "MHPOWOS 80W Panel"
        ]
      ]
    }
  },
  {
    "subheading": "Trail and Kayak Charging Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Under 3 lbs and a USB-C output so you can charge without a station."
      },
      {
        "label": "In this comparison",
        "text": "The ELECAENTA 80W Panel weighs 2.58 lbs and lists a 60W USB-C port, so it is the only pick here that suits a pack."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ELECAENTA 80W Panel if weight and USB-C power matter, since it is the lightest and most efficient true 80W."
      },
      {
        "label": "Save if",
        "text": "Save with the Yosoo 80W Panel if you charge small 12V and 5V gear and want built-in regulation at the lowest price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Real 80W availability",
    "explanation": "Few listings name an exact 80W rating, because most manufacturers sell 60W, 100W and 120W steps. If a listing says 80W, check the title and the spec line together and not just a bullet. A 100W panel is the practical alternative if no true 80W fits your gear."
  },
  {
    "criterion": "Cell technology and efficiency",
    "explanation": "HPBC and standard monocrystalline cells convert sunlight differently, with listings quoting 23% to 25.4%. A few percentage points means little in the shade but adds real watts in good sun. Treat efficiency as a tiebreaker after weight and ports."
  },
  {
    "criterion": "USB-C versus DC only",
    "explanation": "A USB-C port feeds phones, tablets and some laptops straight from the panel, with no power station required. A DC or MC4 output feeds a station or battery. Pick the output type that matches what you will actually plug in."
  },
  {
    "criterion": "Weight when you carry it",
    "explanation": "An 80W panel can weigh anywhere from 2.58 lbs to nearly 6 lbs depending on design. A lighter one suits a pack or kayak, while a heavier one suits a vehicle. Check weight in the listing text, as some do not state it."
  },
  {
    "criterion": "Protection and regulation",
    "explanation": "A panel with a voltage regulator or named overcharge protection is safer to plug into a small battery. Without regulation, a panel feeding a battery directly can overcharge it. Look for the regulator or protection list on the listing, not a generic safe claim."
  }
];

export const faq = [
  {
    "q": "Is there such a thing as an 80W portable panel?",
    "a": "Yes, but listings are scarce, with three true 80W models and a few 100W options. Always confirm the exact wattage in the title. If you need a bit more, the SOLUPUP 100W Panel is the nearest step."
  },
  {
    "q": "What mistake do buyers make with 80W panels?",
    "a": "Assuming the panel will give 80W all day. Output depends on sun angle and cloud, and a cloudy day might yield half. Aim the panel and expect a few hours of near-peak output."
  },
  {
    "q": "Is an 80W panel worth it over a 60W?",
    "a": "If you charge a power bank and a small station, the extra 20W adds a useful boost. For just phones, a 60W panel is lighter and cheaper. Pick 80W when you need faster top-ups."
  },
  {
    "q": "How do I connect it to a power station?",
    "a": "Match the plug to the station's solar input, such as XT60 or DC5521, using the adapters in the box. Plug in under full sun and watch the station's input watts. Keep the panel flat and clear of shade."
  },
  {
    "q": "How should I care for it?",
    "a": "Wipe with a damp cloth, let it dry, and fold it into its bag. Avoid sharp objects that could scratch the ETFE surface. Store it in a cool place."
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
