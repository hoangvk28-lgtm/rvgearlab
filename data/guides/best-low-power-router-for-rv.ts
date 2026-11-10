export const guideSlug = "best-low-power-router-for-rv";
export const guideTitle = "2 Best Low Power Router For RV in 2026";
export const metaTitle = "Best Low Power Router For RV in 2026";
export const metaDescription = "Two ultra-low-power 5G RedCap routers for RV and solar setups, compared on idle power draw, rugged rating and Ethernet port options.";
export const mainKeyword = "best low power router for rv";
export const introParagraphs = [
  "On battery or solar power, a router that idles at under a watt can matter more than raw speed. The two routers here are both Semtech AirLink 5G RedCap models, with dual SIM or LTE fallback and quoted idle draw below 1 W. They differ in rugged rating, port layout and price."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/313C8X7BT2L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-low-power-router-for-rv-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Semtech AirLink RX400 5G Redcap Industrial Cellular Router",
    "price": "$929.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/313C8X7BT2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GM8NTCS5?tag=rvgearlab-amz-20",
    "description": "The AirLink RX400 is a 5G RedCap industrial cellular router with LTE Cat-4 fallback and dual SIM. It idles at 756 mW, which suits solar and battery installations, and carries an IP64 rating in a compact rugged body.\n\nAgainst the EX400, it posts the lower idle figure and a stronger rugged rating. It suits RV owners who mount the router outdoors or in a compartment and want the lowest draw.",
    "specs": [
      "756 mW idle power",
      "IP64 rugged enclosure",
      "5G RedCap with LTE fallback"
    ],
    "pros": [
      "Idles at only 756 mW for solar setups",
      "IP64 enclosure resists dust and splashes",
      "Dual SIM with LTE Cat-4 fallback"
    ],
    "cons": [
      "Industrial router with no consumer app",
      "Costs more than the EX400"
    ],
    "bestFor": "Solar and battery installs"
  },
  {
    "id": "best-low-power-router-for-rv-2",
    "rank": 2,
    "badge": "Best Port Options",
    "name": "Semtech AirLink EX400 5G Redcap IoT Router",
    "price": "$752.34",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21CLsHNVo3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GM971XQQ?tag=rvgearlab-amz-20",
    "description": "The AirLink EX400 is a semi-rugged 5G RedCap IoT router with LTE Cat-4, dual Ethernet and USB-C. Idle power is as low as 840 mW, and it uses a 2x2 RedCap radio with dual-band GNSS.\n\nCompared with the RX400, it adds a second gigabit Ethernet port and USB-C for more wired devices. It suits RV owners who connect a camera or access point by cable.",
    "specs": [
      "840 mW idle power",
      "Dual Gigabit Ethernet and USB-C",
      "IP30 semi-rugged body"
    ],
    "pros": [
      "Two gigabit Ethernet ports for wired gear",
      "Idles as low as 840 mW",
      "Same footprint as AirLink RV series"
    ],
    "cons": [
      "IP30 rating is for indoor mounting only",
      "Draws slightly more than the RX400"
    ],
    "bestFor": "Wired setups indoors"
  }
];

export const howWeEvaluated = [
  {
    "title": "Idle power",
    "description": "We compared quoted idle draw, since it sets battery runtime."
  },
  {
    "title": "Ruggedness",
    "description": "We checked enclosure ratings for dust, water and vibration."
  },
  {
    "title": "Cellular features",
    "description": "We compared RedCap, LTE fallback and dual SIM."
  },
  {
    "title": "Ports",
    "description": "We looked at Ethernet and USB-C options."
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
    "subheading": "By Install Location",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Outdoor or compartment mount",
          "Semtech AirLink RX400",
          "IP64 rugged enclosure"
        ],
        [
          "Indoor cabinet",
          "Semtech AirLink EX400",
          "IP30, more ports"
        ],
        [
          "Lowest battery drain",
          "Semtech AirLink RX400",
          "756 mW idle"
        ],
        [
          "Wired camera or AP",
          "Semtech AirLink EX400",
          "Dual Ethernet"
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
          "$750 to $760",
          "Semtech AirLink EX400"
        ],
        [
          "$920 to $930",
          "Semtech AirLink RX400"
        ]
      ]
    }
  },
  {
    "subheading": "Rugged vs Port-Rich",
    "cards": [
      {
        "label": "Rugged",
        "text": "Built for outdoor mounting with the lowest idle draw. Semtech AirLink RX400 is the rugged option."
      },
      {
        "label": "Port-rich",
        "text": "Adds more wired connections for indoor use. Semtech AirLink EX400 is the port-rich option."
      }
    ],
    "note": "Most RV owners on solar should default to Semtech AirLink RX400."
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
          "Lower price",
          "Semtech AirLink EX400"
        ],
        [
          "Best power efficiency",
          "Semtech AirLink RX400"
        ],
        [
          "More wired ports",
          "Semtech AirLink EX400"
        ]
      ]
    }
  },
  {
    "subheading": "For Solar RVs Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "An idle figure under 1 W and dual SIM with LTE fallback."
      },
      {
        "label": "In this comparison",
        "text": "Semtech AirLink RX400 quotes 756 mW idle and Semtech AirLink EX400 quotes 840 mW, so both stay under 1 W."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Semtech AirLink RX400 for the lowest idle draw and IP64 rating."
      },
      {
        "label": "Save if",
        "text": "Save with Semtech AirLink EX400, which still idles under 1 W and adds a second Ethernet port."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Idle power draw",
    "explanation": "Idle draw is the power used when connected but not heavily loaded. At 1 W, a router draws about 24 Wh per day, a small share of a battery bank. Look for a milliwatt idle figure in the listing."
  },
  {
    "criterion": "5G RedCap vs full 5G",
    "explanation": "RedCap is a reduced-capability 5G mode that trades peak speed for lower power. It suits streaming and work but not the fastest downloads. Check the speed and modem class."
  },
  {
    "criterion": "Dual SIM and LTE fallback",
    "explanation": "Dual SIM means the router holds two carrier SIM cards, and LTE fallback means it drops to 4G when 5G is weak. This matters in remote campsites where 5G coverage comes and goes. Look for both terms in the product title or bullets before buying."
  },
  {
    "criterion": "Enclosure rating",
    "explanation": "IP64 means dust-tight and splash resistant, while IP30 is indoor only. An outdoor mount needs a higher rating. Check the IP rating line."
  },
  {
    "criterion": "Power input and ports",
    "explanation": "The router has to accept your RV power source, and every wired device needs an Ethernet port. A mismatch means buying an extra converter or a switch. Check the listing for supply voltage and the number of Ethernet ports."
  }
];

export const faq = [
  {
    "q": "How much power does a low-power RV router use?",
    "a": "These two idle at 756 mW and 840 mW. That is roughly 18 to 20 Wh per day. Load adds more."
  },
  {
    "q": "What mistake do buyers make with industrial routers?",
    "a": "Assuming they work like a consumer router with an app. These need setup through a web interface or management platform. Plan setup time."
  },
  {
    "q": "Is the RX400 worth it over the EX400?",
    "a": "The RX400 gives the lower idle draw and IP64 rating, while the EX400 costs less and has more ports. Choose by whether outdoor mounting or Ethernet matters more."
  },
  {
    "q": "How do I power one from an RV battery?",
    "a": "Use a supply that matches the router input, and fuse the line. Check the listing for voltage. Keep the antenna cables short."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best RV Router",
    "href": "/camping-travel/best-rv-router"
  },
  {
    "title": "Best Esim Router For RV",
    "href": "/camping-travel/best-esim-router-for-rv"
  },
  {
    "title": "Best Openwrt Router For RV",
    "href": "/camping-travel/best-openwrt-router-for-rv"
  },
  {
    "title": "Best RV Router For Starlink Failover",
    "href": "/camping-travel/best-rv-router-for-starlink-failover"
  }
];
