export const guideSlug = "best-portable-power-stations-for-air-conditioners";
export const guideTitle = "2 Best Portable Power Stations For Air Conditioners in 2026";
export const metaTitle = "Best Portable Power Stations For Air";
export const metaDescription = "Best portable power stations for air conditioners compared on watt-hours, AC output and RV ports, with an honest look at what small stations cannot run.";
export const mainKeyword = "best portable power stations for air conditioners";
export const introParagraphs = [
  "Air conditioners are the hardest load a camper will put on a battery, and most portable stations are far too small for them. No listing here promises to run an air conditioner, so this guide covers the nearest fits and explains how to do the math yourself.",
  "The two picks were compared on watt-hours, AC output and RV ports. They sit at opposite ends of size, so the guide frames them as a serious option and a small-load option."
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
    "id": "best-portable-power-stations-for-air-conditioners-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "BLUETTI Elite 300 Portable Power Station for RV & Home Backup 3014.4Wh",
    "price": "$1199.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415Ex6a1IZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GKRTX336?tag=rvgearlab-amz-20",
    "description": "The BLUETTI Elite 300 holds 3014Wh in a body the listing calls nearly 59 percent smaller than traditional large stations, with 2400W of AC output. Ports include a TT-30 socket for RV plugs plus 30A of 12V DC, and it adds 10ms UPS switchover, app control and recharging by wall or solar.\n\nAgainst the MARBERO, it holds about thirteen times the energy, and it is the only one with an RV-style outlet. That capacity is what a cooling load needs, since an air conditioner draws power for hours.\n\nIt suits RV and van owners who want a battery big enough to try cooling and who accept the limits of a 2400W output. The TT-30 port fits an RV plug directly.",
    "specs": [
      "3014Wh, 2400W output",
      "TT-30 and 12V/30A DC outputs",
      "10ms UPS, app control"
    ],
    "pros": [
      "Most capacity at 3014Wh",
      "TT-30 RV port and 30A DC output",
      "10ms UPS switchover",
      "Compact for its capacity"
    ],
    "cons": [
      "Highest price here",
      "Weight and surge are not stated"
    ],
    "bestFor": "Serious capacity for small cooling",
    "take": "The only pick with enough capacity and an RV port to consider cooling.",
    "catch": "Weight and surge details are not in the listing, so check the AC's start surge."
  },
  {
    "id": "best-portable-power-stations-for-air-conditioners-2",
    "rank": 2,
    "badge": "Best Budget",
    "name": "Portable Power Station 300W MARBERO 237Wh Camping Solar Generator Backup Lithium Battery with Pure Sine Wave 1",
    "price": "$123.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ZtLxeqjXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CJHNCZ8T?tag=rvgearlab-amz-20",
    "description": "The MARBERO M823 is a 237Wh power station with two 300W AC outlets (375W peak), USB-A QC3.0 ports and a built-in BMS. It lists three recharge methods and two LED lights.\n\nCompared with the BLUETTI, it costs a fraction and is far smaller. Its 300W output suits a fan or small cooler, because most compressor air conditioners draw more than 300W.\n\nIt suits campers who need a cheap station for fans, lights and electronics and who will not try air conditioning. The two AC outlets cover several small chargers.",
    "specs": [
      "237Wh, two 300W AC outlets",
      "BMS, three recharge ways",
      "Two LED lights"
    ],
    "pros": [
      "Lowest price of the pair",
      "Two AC outlets",
      "Three ways to recharge",
      "BMS protection"
    ],
    "cons": [
      "Too small for most air conditioners",
      "No RV outlet"
    ],
    "bestFor": "Fans and small loads",
    "take": "A cheap station for fans, lights and chargers, not for cooling.",
    "catch": "At 300W it will not run a typical compressor air conditioner."
  }
];

export const howWeEvaluated = [
  {
    "title": "Watt-hours",
    "description": "Stated energy was compared, because cooling uses a lot of it."
  },
  {
    "title": "AC output",
    "description": "Continuous output was noted against typical air conditioner draw."
  },
  {
    "title": "RV connectivity",
    "description": "Presence of a TT-30 or similar outlet was compared."
  },
  {
    "title": "Surge handling",
    "description": "Where listed, surge and UPS behavior were weighed."
  },
  {
    "title": "Recharge options",
    "description": "AC, solar and car charging were compared for off-grid use."
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
    "subheading": "By Cooling Load",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Small RV or van air conditioner",
          "BLUETTI Elite 300",
          "3014Wh and 2400W output."
        ],
        [
          "Fan only",
          "MARBERO 237Wh Station",
          "300W is plenty for a fan."
        ],
        [
          "RV plug direct",
          "BLUETTI Elite 300",
          "TT-30 port listed."
        ],
        [
          "Lights and chargers",
          "MARBERO 237Wh Station",
          "Two AC outlets and USB-A."
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
          "$120 to $130",
          "MARBERO 237Wh Station"
        ],
        [
          "$1190 to $1200",
          "BLUETTI Elite 300"
        ]
      ]
    }
  },
  {
    "subheading": "Large vs Small Station",
    "cards": [
      {
        "label": "Large station",
        "text": "A big battery with high output can try small cooling loads. The BLUETTI Elite 300 is this type."
      },
      {
        "label": "Small station",
        "text": "A small battery suits fans and electronics. The MARBERO 237Wh Station is this type."
      }
    ],
    "note": "Choose the BLUETTI Elite 300 if cooling is the goal and the MARBERO 237Wh Station otherwise."
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
          "Higher budget",
          "BLUETTI Elite 300"
        ],
        [
          "Low budget",
          "MARBERO 237Wh Station"
        ],
        [
          "Backup power at home",
          "BLUETTI Elite 300"
        ]
      ]
    }
  },
  {
    "subheading": "RV Air Conditioning",
    "cards": [
      {
        "label": "Look for",
        "text": "An AC output above the unit's start surge, a TT-30 outlet and large watt-hours."
      },
      {
        "label": "In this comparison",
        "text": "The BLUETTI Elite 300 lists 2400W and a TT-30 port, but neither listing names an air conditioner."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BLUETTI Elite 300 if cooling or RV power is the goal."
      },
      {
        "label": "Save if",
        "text": "Save with the MARBERO 237Wh Station if you only run a fan and small devices."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "AC start surge",
    "explanation": "An air conditioner's compressor draws a start surge much higher than its running watts. Check the unit's label for rated and locked-rotor amps. The station's output must exceed that surge."
  },
  {
    "criterion": "Watt-hour math",
    "explanation": "Divide the station's watt-hours by the AC's running watts to estimate hours, then subtract losses. A 1000W AC would drain 3014Wh in under three hours at best. Plan accordingly."
  },
  {
    "criterion": "Output limits",
    "explanation": "A 300W station cannot run most compressor air conditioners. A 2400W station can run smaller ones. Check the listed continuous output against the AC label."
  },
  {
    "criterion": "RV outlet",
    "explanation": "A TT-30 outlet matches many RV plugs. If your AC is wired to the RV, an adapter or the right outlet matters. Look for the port type on the listing."
  },
  {
    "criterion": "Recharge speed",
    "explanation": "Cooling drains a station fast, and a slow recharge leaves you waiting. Check solar input and wall charge time on the listing. Plan on shade and a second source."
  }
];

export const faq = [
  {
    "q": "Can a portable power station run an air conditioner?",
    "a": "Only a large one, and only a small AC. The BLUETTI Elite 300 lists 2400W but does not name air conditioners, so check your unit's label first. The MARBERO 237Wh Station is too small."
  },
  {
    "q": "What is the common mistake?",
    "a": "Ignoring the start surge. An AC may need several times its running watts for a moment. Check the label and the station's surge rating."
  },
  {
    "q": "Is the BLUETTI worth it over the MARBERO?",
    "a": "For cooling, yes. The BLUETTI Elite 300 stores much more energy and has an RV port. For a fan, the MARBERO 237Wh Station is enough."
  },
  {
    "q": "How do I connect an AC to a station?",
    "a": "Use the correct outlet and a cord rated for the load. Plug into the TT-30 or an AC socket and start the unit. Watch the display for load."
  },
  {
    "q": "How do I extend run time?",
    "a": "Pre-cool in the evening and shade the vehicle. Set the AC to a higher temperature. Recharge by solar during the day."
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
