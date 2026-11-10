export const guideSlug = "best-portable-power-station-for-home-backup";
export const guideTitle = "7 Best Portable Power Stations for Home Backup in 2026";
export const metaTitle = "Best Power Station for Home Backup 2026";
export const metaDescription = "Portable power stations for home backup compared on capacity, continuous output, UPS speed, expandability, and recharge time, from 1kWh units to 3.6kWh systems.";
export const mainKeyword = "best portable power station for home backup";
export const introParagraphs = [
  "Home backup asks more of a power station than a camping trip does. A refrigerator runs around the clock, a furnace blower or sump pump has a startup surge, and an outage can last a day or more. That pushes the useful range toward 2kWh and up, with a UPS function that switches over fast enough that a router or CPAP never notices the grid dropped.",
  "We compared capacity, continuous AC output, UPS switch time, expandability with extra batteries, and how fast each unit recharges from the wall or solar. Several of these also have an RV TT-30 port, which makes them useful in a trailer when they are not backing up the house."
];
export const lastUpdated = "2026-10-01";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31nIt8F0o1L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-portable-power-station-for-home-backup-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Jackery HomePower 3000 Portable Power Station, 3072Wh, 3600W",
    "price": "$1,349.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31nIt8F0o1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FFSLG3WZ?tag=rvgearlab-20",
    "description": "The Jackery HomePower 3000 is our top home backup pick for its balance of capacity, output, and size. It stores 3072Wh, delivers 3600W continuous with a 7200W surge, includes a UL-certified UPS that switches within 20ms, and recharges in 1.7 hours using AC and DC together. The LiFePO4 pack is rated for 4,000 cycles, and a TT-30 port covers RV use.\n\nCompared with the EcoFlow DELTA Pro ranked next, it matches 3600W output with slightly less capacity but is much lighter and smaller, and costs about $550 less. Against the PECRON E3600LFP, it is more compact and has a stronger documented UPS, while PECRON offers bigger expansion for less money.\n\nThis suits households wanting a fridge, lights, WiFi, and fans through an overnight outage. The caveat is limited expandability compared with modular systems.",
    "specs": [
      "3072Wh, 3600W / 7200W surge",
      "UL-certified UPS, 20ms",
      "1.7 hr hybrid recharge"
    ],
    "pros": [
      "3600W output runs most essential appliances",
      "UL-certified UPS keeps devices running",
      "1.7 hour recharge with AC and DC",
      "TT-30 port doubles as RV power"
    ],
    "cons": [
      "Less expandable than modular systems",
      "Fast recharge needs AC and DC together"
    ],
    "bestFor": "households backing up essentials overnight"
  },
  {
    "id": "best-portable-power-station-for-home-backup-2",
    "rank": 2,
    "badge": "Best Expandable",
    "name": "EcoFlow DELTA Pro Portable Power Station, 3600Wh, 3600W",
    "price": "$1,898.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41pVhqDjojL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C1Z4GLKS?tag=rvgearlab-20",
    "description": "The EcoFlow DELTA Pro is the expandable heavyweight. It stores 3600Wh of LFP capacity, outputs 3600W (up to 4500W with X-Boost), and can pair with a second unit for 7200W. It recharges in 1.8 hours from a 240V outlet, 2.7 hours from 1800W wall power, or 2.8 hours with four 400W panels, and charges from EV stations too.\n\nIt ranks behind Jackery mainly on price and weight. Its advantage is growth: add extra batteries or a smart generator to build a larger system, which the Jackery cannot match. Against the EcoFlow DELTA 3 Max Plus, it has more base capacity and output but older UPS behavior.\n\nThis suits homeowners planning a larger backup system over time. The caveat is a cost near $1,900 and a heavy unit to move.",
    "specs": [
      "3600Wh, 3600W / 4500W X-Boost",
      "Expandable with extra batteries",
      "EV station charging"
    ],
    "pros": [
      "Expands with extra batteries and smart generators",
      "Two units pair for 7200W",
      "Five ways to charge including EV stations"
    ],
    "cons": [
      "Most expensive pick here",
      "Heavy to move between rooms"
    ],
    "bestFor": "homes planning to expand capacity over time"
  },
  {
    "id": "best-portable-power-station-for-home-backup-3",
    "rank": 3,
    "badge": "Best UPS",
    "name": "EcoFlow DELTA 3 Max Plus Power Station, 2048Wh, 3000W",
    "price": "$1,149.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31yJK0Fb-xL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FQV9Q9J2?tag=rvgearlab-20",
    "description": "The DELTA 3 Max Plus is the pick for sensitive electronics. It switches to battery in under 10ms, outputs 3000W with up to 3800W in X-Boost, uses a LiFePO4 battery rated for a decade of daily use, reaches 80 percent in 43 minutes, and expands from 2kWh to 10kWh with extra batteries.\n\nIt has less base capacity than the Jackery and DELTA Pro above but switches twice as fast, which matters for desktop PCs and medical equipment. Compared with the DJI Power 2000 at similar capacity, it offers more output and app scheduling for time-of-use savings.\n\nPick it if you work from home and cannot afford a reboot during an outage. The caveat is 2048Wh base capacity, which runs a fridge for a shorter time without expansion.",
    "specs": [
      "2048Wh, 3000W / 3800W X-Boost",
      "Under 10ms UPS switch",
      "Expandable to 10kWh"
    ],
    "pros": [
      "Under 10ms switch protects PCs and medical gear",
      "80 percent charge in 43 minutes",
      "Expandable to 10kWh with extra batteries"
    ],
    "cons": [
      "Smaller base capacity than the 3kWh picks",
      "Full X-Boost output is not continuous rating"
    ],
    "bestFor": "home offices and medical equipment"
  },
  {
    "id": "best-portable-power-station-for-home-backup-4",
    "rank": 4,
    "badge": "Best Capacity Value",
    "name": "PECRON E3600LFP Power Station, 3072Wh, 3600W",
    "price": "$999.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41b1QdWQKaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D83QYRDS?tag=rvgearlab-20",
    "description": "PECRON's E3600LFP delivers 3072Wh and 3600W for under $1,000. It has 16 outputs including four AC outlets and a TT-30R, charges in 1.3 hours at 3200W AC or 1.5 hours with eight 300W panels, and expands to 18.43kWh with four EP3800 batteries. It ships with both 15A and 30A AC cables and solar cables.\n\nIt matches the Jackery on capacity and output for about $350 less and expands much further. It ranks fourth because UPS behavior is not documented in this listing, so it is better for planned backup than for seamless switching. Against the Anker S2000, it doubles output.\n\nThis suits budget-minded homeowners wanting maximum watt-hours. The caveat is undocumented UPS switch time.",
    "specs": [
      "3072Wh, 3600W",
      "Expandable to 18.43kWh",
      "1.3 hr charge at 3200W"
    ],
    "pros": [
      "3kWh and 3600W for under $1,000",
      "Expands to 18.43kWh with extra batteries",
      "Ships with 30A cable and solar cables",
      "TT-30R port for RV use"
    ],
    "cons": [
      "UPS switch time not documented",
      "Fastest charging needs 3200W input"
    ],
    "bestFor": "maximum capacity per dollar"
  },
  {
    "id": "best-portable-power-station-for-home-backup-5",
    "rank": 5,
    "badge": "Quietest",
    "name": "DJI Power 2000 Portable Power Station, 2048Wh",
    "price": "$749.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31xyTUiOmSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FBRD1B8C?tag=rvgearlab-20",
    "description": "The DJI Power 2000 is the quiet option for bedrooms and living rooms. It runs as low as 30 dB, switches to UPS in 10ms, reaches 80 percent in 55 minutes, has 15 ports including dual SDC ports, and expands up to 22.5kWh with extra batteries. A five-year warranty backs it.\n\nAgainst the DELTA 3 Max Plus at similar capacity, it matches the 10ms switch and is quieter, but DJI notes MPPT and car charging modules are not built in, so solar needs extra hardware. That makes it more of a wall-charged home unit than a solar generator.\n\nPick it if the station lives in a bedroom near a CPAP. The caveat is the extra cost of solar charging modules.",
    "specs": [
      "2048Wh LFP",
      "10ms UPS, as low as 30 dB",
      "Expandable to 22.5kWh"
    ],
    "pros": [
      "As quiet as 30 dB for bedroom use",
      "10ms UPS switch keeps routers and PCs online",
      "Five-year warranty covers long-term ownership"
    ],
    "cons": [
      "Solar needs a separate MPPT module",
      "No built-in car charging"
    ],
    "bestFor": "bedrooms and quiet living spaces"
  },
  {
    "id": "best-portable-power-station-for-home-backup-6",
    "rank": 6,
    "badge": "Best Long-Life",
    "name": "Anker SOLIX S2000 Portable Power Station, 2010Wh, 1500W",
    "price": "$679.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oUWN32k+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GY4TQ2P8?tag=rvgearlab-20",
    "description": "Anker's SOLIX S2000 focuses on efficiency and lifespan. Its 314Ah LFP cells are rated for 10,000 cycles and a 15-year life, it draws just 6W at idle and claims up to 35 hours of fridge backup, it weighs 35.7 pounds, and it switches within 10ms.\n\nIts 1500W output is the lowest among the 2kWh picks, so it will not run a microwave alongside a fridge. It wins on cycle life and low idle drain, which stretch runtime during long outages. Unlike most picks here, it has no 12V DC port.\n\nThis suits owners who want years of reliable fridge and router backup. The caveat is limited output for big appliances.",
    "specs": [
      "2010Wh, 1500W / 3000W peak",
      "10,000-cycle LFP cells",
      "35.7 lbs, 6W idle draw"
    ],
    "pros": [
      "Rated for 10,000 cycles and 15 years",
      "6W idle draw stretches outage runtime",
      "Lightest 2kWh unit at 35.7 pounds"
    ],
    "cons": [
      "1500W output limits big appliances",
      "No 12V DC port",
      "400W solar input is modest"
    ],
    "bestFor": "long-lasting fridge and router backup"
  },
  {
    "id": "best-portable-power-station-for-home-backup-7",
    "rank": 7,
    "badge": "Best Budget",
    "name": "BLUETTI AC180 Portable Power Station, 1152Wh, 1800W",
    "price": "$449.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Bklv+8yZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C1SMJTDT?tag=rvgearlab-20",
    "description": "The BLUETTI AC180 is the budget entry for short outages. It stores 1152Wh, outputs 1800W with a 2700W boost via the app, charges fully in about one hour at 1440W, accepts 500W solar input, and provides UPS backup within 20ms. A five-year warranty is included.\n\nWith about half the capacity of the 2kWh picks, it handles a fridge for several hours or a router and lights overnight rather than a full day. It costs about $230 less than the Anker S2000.\n\nPick it for short outages and apartment backup. The caveat is limited runtime for whole-day outages.",
    "specs": [
      "1152Wh, 1800W / 2700W boost",
      "20ms UPS",
      "1 hr full AC charge"
    ],
    "pros": [
      "Full charge in about one hour",
      "Five-year warranty at a budget price",
      "500W solar input for its size"
    ],
    "cons": [
      "Half the capacity of 2kWh picks",
      "2700W boost is not continuous output"
    ],
    "bestFor": "short outages and apartments"
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity vs Real Loads",
    "description": "Compared watt-hour capacity against typical fridge, router, and light consumption across an overnight outage."
  },
  {
    "title": "Continuous Output",
    "description": "Weighed continuous AC output and surge for startup loads, separating boost modes from true ratings."
  },
  {
    "title": "UPS Switch Time",
    "description": "Compared documented switchover times for computers and medical devices."
  },
  {
    "title": "Expandability and Recharge",
    "description": "Checked extra battery support and AC and solar recharge speeds."
  },
  {
    "title": "Lifespan and Warranty",
    "description": "Considered cycle ratings, LFP chemistry, and warranty length."
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
    "subheading": "By Outage Length",
    "table": {
      "headers": [
        "Expected outage",
        "Pick"
      ],
      "rows": [
        [
          "A few hours",
          "BLUETTI AC180"
        ],
        [
          "Overnight with fridge",
          "Anker SOLIX S2000 or EcoFlow DELTA 3 Max Plus"
        ],
        [
          "A full day of essentials",
          "Jackery HomePower 3000"
        ],
        [
          "Multiple days",
          "EcoFlow DELTA Pro with extra batteries"
        ],
        [
          "Multiple days on a budget",
          "PECRON E3600LFP with expansion"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Budget",
        "Pick"
      ],
      "rows": [
        [
          "Under $500",
          "BLUETTI AC180"
        ],
        [
          "$650 to $750",
          "Anker SOLIX S2000 or DJI Power 2000"
        ],
        [
          "$1,000 to $1,150",
          "PECRON E3600LFP or EcoFlow DELTA 3 Max Plus"
        ],
        [
          "$1,300 to $1,900",
          "Jackery HomePower 3000 or EcoFlow DELTA Pro"
        ]
      ]
    }
  },
  {
    "subheading": "Fixed Capacity vs Expandable",
    "cards": [
      {
        "label": "Fixed capacity",
        "text": "One self-contained unit with simpler setup and lower cost, but no room to grow. In this comparison: Jackery HomePower 3000, Anker SOLIX S2000, and BLUETTI AC180."
      },
      {
        "label": "Expandable",
        "text": "Add extra batteries later to extend runtime for longer outages. In this comparison: EcoFlow DELTA Pro, EcoFlow DELTA 3 Max Plus, PECRON E3600LFP, and DJI Power 2000."
      }
    ],
    "note": "Choose expandable if you expect multi-day outages; otherwise a fixed unit sized to your fridge is simpler."
  },
  {
    "subheading": "By Household Priority",
    "table": {
      "headers": [
        "Priority",
        "Pick"
      ],
      "rows": [
        [
          "Seamless switching for PCs or CPAP",
          "EcoFlow DELTA 3 Max Plus"
        ],
        [
          "Quiet in a bedroom",
          "DJI Power 2000"
        ],
        [
          "Longest lifespan",
          "Anker SOLIX S2000"
        ],
        [
          "Most capacity per dollar",
          "PECRON E3600LFP"
        ]
      ]
    }
  },
  {
    "subheading": "For Keeping a Refrigerator Running Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "At least 2kWh of capacity, low idle draw, and enough surge for compressor startup."
      },
      {
        "label": "In this comparison",
        "text": "The Anker SOLIX S2000 claims up to 35 hours of fridge backup with its 6W idle draw, and the Jackery HomePower 3000 adds headroom for other loads."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You face multi-day outages; the EcoFlow DELTA Pro expands into a whole-home style system."
      },
      {
        "label": "Save if",
        "text": "Outages are short; the BLUETTI AC180 covers a router, lights, and a few hours of fridge for under $500."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Capacity in Watt-Hours",
    "explanation": "Watt-hours measure stored energy. A typical refrigerator uses around 1 to 2kWh per day depending on size and age. Check the Wh figure in the listing and compare it to your essential loads over your expected outage length."
  },
  {
    "criterion": "Continuous Output vs Boost",
    "explanation": "Continuous output is what the inverter sustains, while boost modes like X-Boost lower voltage to run resistive loads and are not true ratings. Startup surge matters for fridges and pumps. Use continuous watts when sizing, not boost figures."
  },
  {
    "criterion": "UPS Switch Time",
    "explanation": "A UPS function switches loads to battery when grid power drops. Under 20ms usually keeps most electronics running, while under 10ms is safer for desktops. Check the stated switch time in the listing."
  },
  {
    "criterion": "Expandability",
    "explanation": "Expansion batteries extend runtime without buying a second unit. Not every station supports them. Check the maximum expanded capacity and the cost of extra batteries."
  },
  {
    "criterion": "Recharge Speed and Paths",
    "explanation": "Fast AC recharge matters when grid power returns briefly between outages, and solar input matters during longer outages. Check hours to full charge from the wall and the maximum solar watts."
  },
  {
    "criterion": "Battery Chemistry and Cycles",
    "explanation": "LiFePO4 (LFP) batteries last thousands of cycles and are more thermally stable than older lithium chemistries. All picks here use LFP. Check the cycle rating and warranty years."
  }
];

export const faq = [
  {
    "q": "Can a portable power station run my refrigerator?",
    "a": "Yes, most 2kWh and larger units can run a typical fridge for many hours. Runtime depends on the fridge, ambient temperature, and other loads. The Anker SOLIX S2000 claims up to 35 hours of fridge backup."
  },
  {
    "q": "What mistake do people make with power stations for home backup?",
    "a": "Sizing by output watts instead of capacity. A 3000W unit with small capacity drains quickly. Match watt-hours to your outage length first."
  },
  {
    "q": "Is the EcoFlow DELTA Pro worth it over the Jackery HomePower 3000?",
    "a": "If you want to expand capacity over time, yes. If you just need overnight backup of essentials, the Jackery costs less and is lighter."
  },
  {
    "q": "How do I set up a power station for home backup?",
    "a": "Keep it charged and plugged into the wall with UPS enabled, then connect essentials like a fridge, router, and lights. For hardwired circuits, use a transfer switch installed by an electrician."
  },
  {
    "q": "How should I store a power station between outages?",
    "a": "Keep it at a moderate charge in a cool, dry place, and top it up every few months. Many owners leave it plugged in with UPS active so it is always ready."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Portable RV Generator",
    "href": "/power-electrical/best-portable-rv-generator"
  },
  {
    "title": "Best Quiet RV Generator",
    "href": "/power-electrical/best-quiet-rv-generator"
  },
  {
    "title": "Best RV Inverter With Transfer Switch",
    "href": "/power-electrical/best-rv-inverter-with-transfer-switch"
  }
];
