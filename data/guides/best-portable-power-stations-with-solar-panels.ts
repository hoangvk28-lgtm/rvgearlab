export const guideSlug = "best-portable-power-stations-with-solar-panels";
export const guideTitle = "4 Best Portable Power Stations With Solar Panels in 2026";
export const metaTitle = "Best Portable Power Stations With Solar Panels";
export const metaDescription = "Best portable power stations with solar panels included, compared on panel wattage, battery size and ports for campers who want a complete kit.";
export const mainKeyword = "best portable power stations with solar panels";
export const introParagraphs = [
  "A power station that ships with its own panel solves the first-time question of what to pair it with. The catch is that bundled panels are usually small, so the real test is whether the panel can refill the battery in a realistic camp weekend.",
  "Four kits are compared, from a 1024Wh unit with a built-in panel to small 100W and 300W stations with 40W to 60W foldable panels. The ZeroKor family appears once, since its 100W, 300W and kit versions share one design."
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
    "id": "best-portable-power-stations-with-solar-panels-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "BROWEY 1600W",
    "price": "$599.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41R8KCK94EL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F4D67J3L?tag=rvgearlab-amz-20",
    "description": "The BROWEY 1600W combines 1,024Wh of LiFePO4 with 1,600W pure sine wave output and 3,200W peak, and folds a solar panel into the body. It won the iF Design Award 2022 and lists 3,000 or more cycles to 80% capacity with a protective BMS.\n\nIt is the only pick with the panel built in, which removes cable and panel storage, and it has several times the energy of the other kits. AC and a 100W PD USB-C port together recharge 80% in about 3 hours.\n\nIt suits campers who want a fridge-capable station in one piece. The listing says it can run refrigerators, CPAP machines and tools.",
    "specs": [
      "1,024Wh LiFePO4, 1,600W / 3,200W",
      "Built-in solar panel",
      "3,000+ cycles, 80% in 3 hours"
    ],
    "pros": [
      "Solar panel built into the body",
      "1,600W with 3,200W peak",
      "LiFePO4 with 3,000+ cycles",
      "80% in about 3 hours"
    ],
    "cons": [
      "Highest price of the four",
      "Panel wattage is not stated"
    ],
    "bestFor": "Fridge-capable all-in-one",
    "take": "A big-battery kit with a built-in panel for weekend and backup use.",
    "catch": "The listing does not state the built-in panel's wattage."
  },
  {
    "id": "best-portable-power-stations-with-solar-panels-2",
    "rank": 2,
    "badge": "Best Mid-Size Kit",
    "name": "MARBERO 237Wh Solar Generator with Solar Panel Included Portable Power Station 300W Pure Sine Wave with Foldab",
    "price": "$179.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Rfqfec41L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZDX262N?tag=rvgearlab-amz-20",
    "description": "The MARBERO M823 pairs a 237Wh, 64,000mAh lithium-ion battery with 300W rated output and 375W peak through two pure sine wave AC outlets. A foldable panel with a 21.5 to 23.5% conversion rate comes in the box, along with a smart DC adapter set for connecting.\n\nIt has a stronger 60W panel than the 40W kits and carries more battery than the 100W stations. An LED flashlight with strobe and SOS modes is built in.\n\nIt suits campers who want a lighter kit for lights, phones and a laptop. A how-to sequence for the adapters is in the listing.",
    "specs": [
      "237Wh lithium-ion, 300W AC",
      "60W foldable panel included",
      "LED flashlight with SOS"
    ],
    "pros": [
      "60W foldable panel in the box",
      "300W pure sine AC outlets",
      "Flashlight with SOS mode",
      "21.5 to 23.5% panel efficiency"
    ],
    "cons": [
      "Lithium-ion, no cycle rating",
      "Less battery than the BROWEY"
    ],
    "bestFor": "Weekend lights and laptops",
    "take": "A mid-size kit with a stronger panel for the money.",
    "catch": "A 60W panel fills 237Wh over a full sunny day."
  },
  {
    "id": "best-portable-power-stations-with-solar-panels-3",
    "rank": 3,
    "badge": "Best Value Kit",
    "name": "Portable Solar Generator 300W Portable Power Station with 60W Solar Panel",
    "price": "$170.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51N0Qi-dPkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CHFM3V8Q?tag=rvgearlab-amz-20",
    "description": "The ZeroKor 300W kit includes a 60W monocrystalline solar panel with a 20.5% conversion rate, plus two 300W max AC outlets, a DC port, three 5V 3A USB ports and a QC port. A built-in MPPT accepts 13V to 23V DC5521 panels, and the battery management system lists several shutdown protections.\n\nIt costs less than the MARBERO for the same 60W panel and 300W class output. The same line also sells a 40W kit and a 100W station, which count as one family here.\n\nIt suits budget buyers who want a panel and a 300W box in one purchase. A 40W plus 100W bundle exists for those who want two stations.",
    "specs": [
      "300W station, 60W panel",
      "Built-in MPPT, 13-23V DC",
      "Two 300W max AC outlets"
    ],
    "pros": [
      "60W panel included",
      "Built-in MPPT controller",
      "Two 300W AC outlets",
      "Lower price than MARBERO"
    ],
    "cons": [
      "Capacity not stated in the listing",
      "No cycle rating stated"
    ],
    "bestFor": "Budget panel-and-box kit",
    "take": "A lower-priced 60W kit for casual weekends.",
    "catch": "The listing does not give watt hours, so runtime is hard to predict."
  },
  {
    "id": "best-portable-power-stations-with-solar-panels-4",
    "rank": 4,
    "badge": "Best Small Kit",
    "name": "Solar Powered Generator 100W",
    "price": "$119.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41QABmA8V1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G24B6VW6?tag=rvgearlab-amz-20",
    "description": "The Apowking kit includes 40W solar panels with 20.5% conversion and a 146Wh, 39,600mAh power station with seven outputs. Two 110V AC outlets handle devices up to 100W with a 200W peak, and a dual LED flashlight has flashlight, strobe and SOS modes.\n\nPriced under every other kit here, it also carries the smallest panel. Next to the ZeroKor 300W kit it gives less AC output.\n\nIt suits solo campers who charge phones, a tablet and lights. Cooling vents on the back and a BMS manage temperature.",
    "specs": [
      "146Wh, 100W AC, 200W peak",
      "40W solar panels included",
      "Dual LED flashlight"
    ],
    "pros": [
      "Lowest price of the four",
      "40W panels included",
      "Seven outputs",
      "Dual LED flashlights"
    ],
    "cons": [
      "Only 100W of AC output",
      "40W panel recharges slowly"
    ],
    "bestFor": "Solo phone and light charging",
    "take": "The cheapest kit for phones, lights and a tablet.",
    "catch": "A 40W panel needs a full day of sun to move a meaningful charge."
  }
];

export const howWeEvaluated = [
  {
    "title": "Panel wattage",
    "description": "Included panel wattage was compared with the battery each kit pairs it with."
  },
  {
    "title": "Battery",
    "description": "Watt hours and chemistry were checked."
  },
  {
    "title": "Output",
    "description": "AC rating and ports were compared."
  },
  {
    "title": "Setup",
    "description": "Cables and adapters in the kit were noted."
  },
  {
    "title": "Price",
    "description": "Price per panel watt and per Wh."
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
          "Fridge and CPAP-capable backup",
          "BROWEY 1600W Built-in Panel",
          "1,024Wh and 1,600W."
        ],
        [
          "Weekend laptop and lights",
          "MARBERO M823 60W Kit",
          "237Wh and a 60W panel."
        ],
        [
          "Budget panel and box",
          "ZeroKor 300W 60W Kit",
          "60W panel at a lower price."
        ],
        [
          "Solo phone charging",
          "Apowking 100W 40W Kit",
          "Cheapest kit with 40W panels."
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
          "$110 to $180",
          "Apowking 100W 40W Kit or ZeroKor 300W 60W Kit"
        ],
        [
          "$170 to $600",
          "MARBERO M823 60W Kit or BROWEY 1600W Built-in Panel"
        ]
      ]
    }
  },
  {
    "subheading": "Built-in vs Foldable Panel",
    "cards": [
      {
        "label": "Built-in panel",
        "text": "The BROWEY 1600W Built-in Panel keeps the panel in the body for a cable-free setup."
      },
      {
        "label": "Foldable panel",
        "text": "The MARBERO M823 60W Kit, ZeroKor 300W 60W Kit and Apowking 100W 40W Kit carry foldable panels that you can angle toward the sun."
      }
    ],
    "note": "Most campers should choose a foldable panel like the MARBERO M823 60W Kit for better sun alignment."
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
          "Apowking 100W 40W Kit"
        ],
        [
          "Low spend, 300W",
          "ZeroKor 300W 60W Kit"
        ],
        [
          "Mid-range 237Wh",
          "MARBERO M823 60W Kit"
        ],
        [
          "Pay for 1,024Wh",
          "BROWEY 1600W Built-in Panel"
        ]
      ]
    }
  },
  {
    "subheading": "For Weekend Car Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "At least 237Wh and a panel of 60W or more."
      },
      {
        "label": "In this comparison",
        "text": "The MARBERO M823 60W Kit and ZeroKor 300W 60W Kit both include 60W panels."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BROWEY 1600W Built-in Panel if you need fridge-capable power and long cell life. It is the only pick with LiFePO4 and 1,024Wh."
      },
      {
        "label": "Save if",
        "text": "Save with the Apowking 100W 40W Kit or ZeroKor 300W 60W Kit if phone and light charging is enough. Both bundle the panel."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Panel wattage versus battery",
    "explanation": "A panel rarely delivers its full rating, so a 40W panel takes many sunny hours to refill 146Wh. A 60W panel shortens that by roughly a third. Match the panel to the battery size."
  },
  {
    "criterion": "Panel connector",
    "explanation": "Panels use connectors like DC5521 or MC4, and a mismatched plug does nothing. Kits that include a cable set avoid this. Check the connector and voltage range in the listing."
  },
  {
    "criterion": "MPPT controller",
    "explanation": "An MPPT controller squeezes more power from a panel than a basic one. Some kits name it and some do not. Look for the word MPPT."
  },
  {
    "criterion": "Capacity",
    "explanation": "A kit that does not state watt hours leaves you guessing about runtime. 237Wh runs a 30W load for about six hours. Check the Wh figure."
  },
  {
    "criterion": "Built-in versus foldable",
    "explanation": "A built-in panel avoids cables but is limited to the body size. Foldable panels collect more but need storage. Check the panel's wattage and fold dimensions."
  }
];

export const faq = [
  {
    "q": "Is the included panel enough to charge the station?",
    "a": "For small kits, a full day of sun may fill 146Wh to 237Wh. The BROWEY's built-in panel wattage is not stated. Plan on wall charging before trips."
  },
  {
    "q": "Can I add a bigger panel?",
    "a": "Yes, if the station's solar input range and connector match. DC5521 and MC4 plugs differ. Check the manual."
  },
  {
    "q": "How long does solar charging take?",
    "a": "Roughly battery Wh divided by about 70% of panel watts. A 60W panel adds around 40W in good sun. Cloud and angle cut that sharply."
  },
  {
    "q": "Is a kit cheaper than buying parts?",
    "a": "Often, for small stations. Large panels and stations are better bought separately. Compare panel wattage and connector."
  },
  {
    "q": "Can I run a fridge from the BROWEY?",
    "a": "The listing says it can run refrigerators, CPAP machines and tools. Check your device's starting watts and confirm medical devices with their maker."
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
