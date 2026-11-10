export const guideSlug = "best-30-amp-portable-power-stations-for-rv-camping";
export const guideTitle = "2 Best 30 Amp Portable Power Stations For RV Camping in 2026";
export const metaTitle = "Best 30 Amp Portable Power Stations For RV";
export const metaDescription = "Best 30 amp portable power stations for RV camping compared on TT-30 outlet, capacity, expansion and recharge options for a travel trailer.";
export const mainKeyword = "best 30 amp portable power stations for rv camping";
export const introParagraphs = [
  "A 30 amp outlet is the connection most travel trailers and many motorhomes use for shore power. A portable station with a TT-30 port lets you plug that cord straight in, so the RV's own wiring and outlets work without adapters.",
  "Few listings name a 30 amp outlet, so the list is short. Both stations here list a 30A port among their outputs, and they were compared on capacity, expansion and recharge options."
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
    "id": "best-30-amp-portable-power-stations-for-rv-camping-1",
    "rank": 1,
    "badge": "Best Overall 30A",
    "name": "BLUETTI AC200PL Portable Power Station 2304Wh 2400W LiFePO4 Solar Generator",
    "price": "$949.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41zQ10TNbdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D17CW6KK?tag=rvgearlab-20",
    "description": "The BLUETTI AC200PL stores 2,304Wh in LiFePO4 cells rated for 3,000-plus cycles and puts out 2,400W through 4 AC outlets, with 11 ports in all, including a TT30 RV outlet and a 48V/8A DC port. It charges 0 to 80 percent in 60 minutes with 2,400W AC input and takes up to 1,200W of solar.\n\nIt expands to 8,448Wh with extra B300, B210P or B230 batteries, a path the ABOK Ark3600 shares at a higher ceiling. A 48V RV port charges an RV battery directly.\n\nFits RV owners wanting a TT-30 outlet plus space to grow into a whole-rig system. The fast AC charging also helps between campgrounds.",
    "specs": [
      "2,304Wh LiFePO4, 2,400W",
      "30A TT30 port, 11 ports",
      "60 minutes to 80%"
    ],
    "pros": [
      "Direct 30A TT30 RV port",
      "Expandable to 8,448Wh",
      "Up to 1,200W solar input",
      "60 minute charge to 80 percent"
    ],
    "cons": [
      "Weight is not stated on the listing",
      "Needs a big solar array to use 1,200W"
    ],
    "bestFor": "Plug a 30A RV cord straight in",
    "take": "A long-term RV power hub with the 30A port you need, and room to expand later.",
    "catch": "The listing does not give a weight, so plan for a heavy unit."
  },
  {
    "id": "best-30-amp-portable-power-stations-for-rv-camping-2",
    "rank": 2,
    "badge": "Best Larger Capacity",
    "name": "ABOK Ark3600 Portable Power Station 3600W",
    "price": "$1699.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41AbN-SfMrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FNCM7X5L?tag=rvgearlab-20",
    "description": "The ABOK Ark3600 provides 3,600W rated and 4,500W peak output from 3,840Wh of LiFePO4, expandable up to 11,520Wh. Its 15 output ports include one 30A AC outlet and four 20A AC outlets, and the listing bundle adds a 200W solar panel with a telescoping handle and wheels.\n\nIt stores about 1,500Wh more than the BLUETTI AC200PL and outputs 1,200W more, which is enough headroom for more RV loads. Its wheels make moving it easier.\n\nIt suits larger RVs and cabin owners who want more output and a path to over 11kWh. The 200W panel in the bundle starts a solar setup.",
    "specs": [
      "3,840Wh, 3,600W rated",
      "One 30A AC, four 20A AC",
      "Wheels and telescoping handle"
    ],
    "pros": [
      "30A AC outlet for RV cords",
      "Larger 3,840Wh capacity",
      "Expands to 11,520Wh",
      "Bundled 200W solar panel"
    ],
    "cons": [
      "Costs well above the AC200PL",
      "Extra batteries cost more"
    ],
    "bestFor": "A bigger RV on a growth path",
    "take": "A bigger tank and more output for a larger rig. Choose it if your RV pulls more than 2,400W.",
    "catch": "It costs noticeably more than the BLUETTI."
  }
];

export const howWeEvaluated = [
  {
    "title": "30A outlet",
    "description": "Checked that each listing names a 30A or TT30 AC outlet."
  },
  {
    "title": "Capacity and output",
    "description": "Compared stated watt-hours and rated AC watts."
  },
  {
    "title": "Expansion",
    "description": "Looked at stated expansion options and maximum capacity."
  },
  {
    "title": "Charging",
    "description": "Noted AC, solar and RV battery charging details."
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
          "Small travel trailer with fridge and lights",
          "BLUETTI AC200PL",
          "2,304Wh with a TT30 port"
        ],
        [
          "Larger trailer or motorhome loads",
          "ABOK Ark3600",
          "3,600W and 3,840Wh"
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
          "$940 to $950",
          "BLUETTI AC200PL"
        ],
        [
          "$1690 to $1700",
          "ABOK Ark3600"
        ]
      ]
    }
  },
  {
    "subheading": "Mid-size vs large capacity",
    "cards": [
      {
        "label": "Mid-size",
        "text": "The BLUETTI AC200PL fits lighter use and lower cost, with a 30A port and 2,400W."
      },
      {
        "label": "Large",
        "text": "The ABOK Ark3600 gives more watts and more storage, with wheels for moving it."
      }
    ],
    "note": "Most buyers should default to the BLUETTI AC200PL unless the rig draws more than 2,400W."
  },
  {
    "subheading": "By Charging Need",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Fast AC and solar",
          "BLUETTI AC200PL"
        ],
        [
          "Solar panel included",
          "ABOK Ark3600"
        ]
      ]
    }
  },
  {
    "subheading": "For Plugging In a 30A RV Cord Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A TT30 or 30A AC outlet"
      },
      {
        "label": "In this comparison",
        "text": "The BLUETTI AC200PL lists a 30A TT30 port and the ABOK Ark3600 lists one 30A AC outlet."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ABOK Ark3600 if your rig needs more output and storage."
      },
      {
        "label": "Save if",
        "text": "Save with the BLUETTI AC200PL if you run a fridge, lights and one small appliance."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "TT-30 versus 30A AC",
    "explanation": "An RV shore-power plug is a three-prong TT-30, which carries up to 30 amps at 120V, or about 3,600W. A station with a TT30 outlet accepts that plug directly. Check the port list for the exact outlet name."
  },
  {
    "criterion": "Rated watts versus a 30A circuit",
    "explanation": "A 30A circuit can carry 3,600W, but most portable stations rate less than that. A 2,400W station cannot run a 3,000W air conditioner and microwave together. Add up the watts of what you will run at once."
  },
  {
    "criterion": "Air conditioner limits",
    "explanation": "RV air conditioners need a large starting surge and can draw more than the running figure when they start. Check the surge rating and whether the maker lists air conditioner support. Run a soft starter if the unit trips."
  },
  {
    "criterion": "Capacity and runtime",
    "explanation": "Watt-hours divided by load watts gives runtime. A 1,500W load drains 2,304Wh in about 1.5 hours before losses. Match capacity to how long you will run big loads."
  },
  {
    "criterion": "Recharging while on the road",
    "explanation": "Alternator or solar charging keeps a station topped up between campgrounds. Look for 12V car input, solar watts and any 48V RV port. Read the listing for the maximum input in watts."
  }
];

export const faq = [
  {
    "q": "Can a portable power station run an RV air conditioner?",
    "a": "It depends on the AC unit's starting surge and the station's output. Check the maker's guidance and the unit's surge rating before relying on it."
  },
  {
    "q": "What adapter do I need for a 30A RV plug?",
    "a": "A station with a TT30 port takes a standard RV plug directly. A 30A AC outlet on the ABOK Ark3600 may need a matching plug type, so check the shape."
  },
  {
    "q": "Is 30A the same as 3,600W?",
    "a": "At 120V it is the maximum, but the station's own rating is usually lower. Both picks rate below 3,600W continuous or only near it."
  },
  {
    "q": "How do I charge on the road?",
    "a": "Use solar, an AC wall outlet or an alternator charging kit, depending on the model. The BLUETTI AC200PL lists 1,200W of solar input and a 48V RV port."
  },
  {
    "q": "How should I store the station?",
    "a": "Keep it at partial charge in a cool dry place. Top it up every few months so the cells stay healthy."
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
