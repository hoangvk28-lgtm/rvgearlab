export const guideSlug = "best-sealed-deep-cycle-batteries";
export const guideTitle = "5 Best Sealed Deep Cycle Batteries in 2026";
export const metaTitle = "Best Sealed Deep Cycle Batteries in 2026";
export const metaDescription = "Best sealed deep cycle batteries compared on capacity, size, temperature range and warranty, for campers who want spill-proof, maintenance-free power.";
export const mainKeyword = "best sealed deep cycle batteries";
export const introParagraphs = [
  "A sealed deep cycle battery has no caps to open and no water to top up, which makes it a sensible choice for a camper where the battery rides in a van, a truck bed or a tent-side box. The sealed case is spill-proof, though it still has pressure valves, so it needs some air space and a charger with the right profile.",
  "Five sealed AGM or SLA batteries are compared, from a 55Ah two-pack to a 150Ah unit. Each was judged on capacity, size, the temperature range its listing states, how it handles storage and what the warranty covers."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/home-golden-hour-campsite.webp";
export const heroImageAlt = "Dome tent and hammock at a forest campsite at golden hour";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-sealed-deep-cycle-batteries-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Renogy 12 Volt 100Ah Deep Cycle AGM Battery",
    "price": "$166.24",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31soCn59teL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075RFXHYK?tag=rvgearlab-amz-20",
    "description": "The Renogy is a 12V 100Ah sealed AGM deep cycle battery that supports series connections without limit and parallel connections up to 4P. It lists a 1100A (5 second) max discharge current and a discharge temperature range of -4 to 140F.\n\nAgainst the Weize 100Ah, it lists a wider discharge temperature range and clear parallel limits. Compared with the Crown 98Ah, it costs far less for similar capacity.\n\nIt suits a camper building a small bank who wants to add a second battery later. The wide temperature spec suits shoulder-season trips.",
    "specs": [
      "12V 100Ah sealed AGM",
      "Up to 4P parallel connection",
      "-4 to 140F discharge range"
    ],
    "pros": [
      "Parallel limit of 4P is stated",
      "1100A 5-second discharge is listed",
      "Wide discharge temperature range",
      "Lowest price of the five"
    ],
    "cons": [
      "Heavier than lithium equivalents",
      "Needs an AGM-compatible charger"
    ],
    "bestFor": "Starter bank with room to expand",
    "take": "A straightforward, low-cost sealed battery with clear expansion limits. A sensible first bank for a camper.",
    "catch": "Lead-acid weight and a 50 percent comfortable discharge keep usable capacity lower."
  },
  {
    "id": "best-sealed-deep-cycle-batteries-2",
    "rank": 2,
    "badge": "Best Storage",
    "name": "Weize Deep Cycle AGM 12 Volt 100Ah Battery",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bqV6Wt2oL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07SW353M8?tag=rvgearlab-amz-20",
    "description": "The Weize is a 12V 100Ah AGM battery in a compact case, with lower self-discharge of 1 to 3 percent per month. It lists charging from 14F to 122F, discharging from 5F to 122F and a 1100A 5-second max discharge.\n\nCompared with the Renogy 100Ah, it lists both charging and discharging temperature ranges and a monthly self-discharge figure. Next to the Mighty Max 150Ah, it has a smaller, easier footprint.\n\nIt suits an occasional camper whose battery sits between trips. The low self-discharge helps it hold charge during storage.",
    "specs": [
      "12V 100Ah AGM",
      "1-3% monthly self-discharge",
      "Charges from 14F"
    ],
    "pros": [
      "Low monthly self-discharge helps storage",
      "Charge and discharge ranges are listed",
      "Compact case for a 100Ah battery",
      "Suits RV, solar and trolling motors"
    ],
    "cons": [
      "Only a 1-year warranty",
      "Seller handles battery returns"
    ],
    "bestFor": "Occasional weekend camping",
    "take": "A good pick for the casual camper who stores the battery between trips. Keep it charged during storage.",
    "catch": "The warranty is one year and returns go through the seller."
  },
  {
    "id": "best-sealed-deep-cycle-batteries-3",
    "rank": 3,
    "badge": "Best Commercial Grade",
    "name": "Crown Battery 12CRV100 12V AGM Sealed Deep Cycle Battery",
    "price": "$384.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/61PiGq+kEiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GL59Y5CH?tag=rvgearlab-amz-20",
    "description": "The Crown 12CRV100 is a BCI Group 27 sealed AGM battery rated 98Ah at the 20-hour rate with a 170 minute reserve capacity. It is described as maintenance free, spill-proof and gas-free with vibration-tolerant construction.\n\nCompared with the Renogy 100Ah, it targets commercial duty with a stated reserve capacity. Against the Weize 100Ah, it uses a standard Group 27 case.\n\nIt suits a camper with a vibrating install, such as a trailer tongue or truck, who wants a Group 27 fit. The listed reserve capacity helps compare runtime.",
    "specs": [
      "Group 27, 98Ah at 20-hour",
      "170 minute reserve capacity",
      "Sealed, spill-proof AGM"
    ],
    "pros": [
      "Standard BCI Group 27 size",
      "Reserve capacity is stated",
      "Built for vibration tolerance",
      "Spill-proof and maintenance free"
    ],
    "cons": [
      "Priciest of the five",
      "Capacity rated at the 20-hour rate"
    ],
    "bestFor": "Group 27 trays and rough roads",
    "take": "A heavy-duty drop-in for Group 27 spaces. Choose it when fit and vibration tolerance matter more than price.",
    "catch": "It costs more than twice the Renogy 100Ah."
  },
  {
    "id": "best-sealed-deep-cycle-batteries-4",
    "rank": 4,
    "badge": "Best High Capacity",
    "name": "Mighty Max Battery 12V 150AH SLA Replacement Battery for 150ah Deep Cycle Rechargeable Battery",
    "price": "$299.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418jsocrWJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08YF4SDRX?tag=rvgearlab-amz-20",
    "description": "The Mighty Max ML150-12 is a UL certified 12V 150Ah sealed lead acid battery measuring 19.09 x 6.69 x 9.49 inches. The listing describes it as spill-proof and mountable in any position, with shock and vibration resistance.\n\nCompared with the 100Ah picks, it adds 50 percent more capacity in a single long case. Against the Crown 98Ah, it is a different shape and has a one-year warranty.\n\nIt suits a camper who needs a long-running single battery for lights, a fridge and chargers. The any-position mounting helps in odd spaces.",
    "specs": [
      "12V 150Ah SLA",
      "19.09 x 6.69 x 9.49 inches",
      "UL certified, any position"
    ],
    "pros": [
      "Most capacity of the five",
      "UL certification is listed",
      "Mounts in any position",
      "Resists shock and vibration"
    ],
    "cons": [
      "Long case needs a wide space",
      "No mounting accessories included"
    ],
    "bestFor": "Long-runtime single battery",
    "take": "Choose it when capacity matters most and you have room for the long case. A good fit for fridges and lights.",
    "catch": "No wire harness or mounting accessories come with it."
  },
  {
    "id": "best-sealed-deep-cycle-batteries-5",
    "rank": 5,
    "badge": "Best Small Pair",
    "name": "Casil 12V 55Ah SLA AGM Deep Cycle Battery",
    "price": "$229.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YaHT2RrYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07S96DYRK?tag=rvgearlab-amz-20",
    "description": "The Casil is a 2-pack of 12V 55Ah sealed AGM batteries in Group 22NF, each measuring 9.06 x 5.51 x 8.15 inches. They use T3 terminals and ABS casing for shock resistance.\n\nCompared with the single 100Ah batteries, the pair is easier to lift and can sit in two small spaces. Against the Mighty Max 150Ah, it gives two separate batteries for a split system.\n\nIt suits a camper building a small dual-battery setup, such as a tent camp with two compact boxes. Each battery is small enough to carry.",
    "specs": [
      "Two 12V 55Ah AGM",
      "Group 22NF, T3 terminals",
      "ABS casing for shock resistance"
    ],
    "pros": [
      "Two batteries in one pack",
      "Small enough to carry easily",
      "ABS case resists shocks",
      "Suits UPS, solar and marine use"
    ],
    "cons": [
      "Smaller capacity per battery",
      "Wiring two batteries takes extra cable"
    ],
    "bestFor": "Compact dual-battery camp boxes",
    "take": "A flexible pair that lets you build capacity in small steps. Good for a portable camp box.",
    "catch": "Each battery is only 55Ah, so wire them in parallel for more runtime."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "We compared listed amp-hour ratings and the rate they are measured at."
  },
  {
    "title": "Size and fit",
    "description": "We looked at case dimensions and group sizes where stated."
  },
  {
    "title": "Temperature",
    "description": "We compared stated charge and discharge temperature ranges."
  },
  {
    "title": "Storage",
    "description": "We looked at self-discharge claims for time between trips."
  },
  {
    "title": "Warranty",
    "description": "We compared warranty and return terms in each listing."
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
    "subheading": "By Use Case",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "First starter bank",
          "Renogy 100Ah",
          "Low cost with clear parallel limits"
        ],
        [
          "Stored between trips",
          "Weize 100Ah",
          "Low monthly self-discharge"
        ],
        [
          "Group 27 tray",
          "Crown 98Ah",
          "Standard Group 27 case"
        ],
        [
          "Longest single runtime",
          "Mighty Max 150Ah",
          "150Ah in one battery"
        ],
        [
          "Two small boxes",
          "Casil 55Ah 2-Pack",
          "Two compact 55Ah batteries"
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
          "$160 to $170",
          "Renogy 100Ah or Weize 100Ah"
        ],
        [
          "$220 to $300",
          "Casil 55Ah 2-Pack or Mighty Max 150Ah"
        ],
        [
          "$380 to $390",
          "Crown 98Ah"
        ]
      ]
    }
  },
  {
    "subheading": "One Large vs Two Small",
    "cards": [
      {
        "label": "One large",
        "text": "One large battery has fewer connections and simpler wiring. Renogy 100Ah, Weize 100Ah, Crown 98Ah and Mighty Max 150Ah fit here."
      },
      {
        "label": "Two small",
        "text": "Two small batteries are easier to carry and can be wired in parallel for capacity. Casil 55Ah 2-Pack is the two-battery option."
      }
    ],
    "note": "Most campers should default to a Renogy 100Ah unless carrying weight is a problem."
  },
  {
    "subheading": "By Temperature",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Wide discharge range",
          "Renogy 100Ah"
        ],
        [
          "Charging below freezing",
          "Weize 100Ah"
        ],
        [
          "Mild climate",
          "Casil 55Ah 2-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "For Rough-Road Installs Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated vibration resistance and a case size that matches the tray."
      },
      {
        "label": "In this comparison",
        "text": "The Crown 98Ah lists vibration-tolerant construction in a standard Group 27 case, which suits trailers and trucks."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you need a Group 27 fit and vibration tolerance, which points to the Crown 98Ah."
      },
      {
        "label": "Save if",
        "text": "Save if you want the simplest bank, since the Renogy 100Ah and Weize 100Ah cost far less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What sealed really means",
    "explanation": "A sealed battery has no removable caps and does not need water. It still has pressure-relief valves and can release gas if overcharged. Keep it in a ventilated space and use a charger set for AGM or sealed lead-acid."
  },
  {
    "criterion": "Usable capacity",
    "explanation": "A lead-acid battery lasts longer if you stay near 50 percent depth of discharge. A 100Ah battery therefore gives about 50Ah in daily use. Look at the listing for recommended depth and plan around it."
  },
  {
    "criterion": "Charging profile",
    "explanation": "Sealed AGM and SLA batteries want a defined charge voltage and a limit on current, often 0.25C. A mismatched charger can overheat the battery. Check the charge settings in the listing."
  },
  {
    "criterion": "Group size and fit",
    "explanation": "Group 27 and Group 22NF are standard case sizes. A battery that does not fit its tray will shift on rough roads. Measure the space and compare it to the listed dimensions."
  },
  {
    "criterion": "Storage and cold",
    "explanation": "A battery held at a low charge degrades. Low self-discharge, around 1 to 3 percent a month, helps in storage. Check the temperature range if you camp in cold weather."
  },
  {
    "criterion": "Ventilation and safety",
    "explanation": "Sealed batteries can vent if overcharged, so do not enclose them tightly. Do not store them near a flame or heater, and keep terminals covered. Fuse the positive cable near the battery."
  }
];

export const faq = [
  {
    "q": "Are sealed batteries really maintenance free?",
    "a": "They need no water, but they still need correct charging and a clean, dry terminal area. Check the voltage every month or two in storage."
  },
  {
    "q": "What mistake do campers make with sealed batteries?",
    "a": "Using the wrong charger. An undersized charge profile leaves them undercharged and an aggressive one can overheat them. Use one set for AGM or sealed lead-acid."
  },
  {
    "q": "Is a sealed AGM worth it over flooded lead-acid?",
    "a": "For camping, usually yes, because it does not spill and can be mounted in more positions. Flooded batteries cost less but need watering and venting."
  },
  {
    "q": "How do I connect two Casil batteries?",
    "a": "Wire the positive terminals together and the negative terminals together for parallel, then fuse the main positive. Use identical batteries and equal-length cables."
  },
  {
    "q": "How should I store a sealed battery?",
    "a": "Store it fully charged in a cool, dry place and recharge it every few months. Low self-discharge, like the Weize 100Ah lists, makes this easier."
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
