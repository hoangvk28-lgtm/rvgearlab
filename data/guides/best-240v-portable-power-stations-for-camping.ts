export const guideSlug = "best-240v-portable-power-stations-for-camping";
export const guideTitle = "3 Best 240v Portable Power Stations in 2026";
export const metaTitle = "Best 240v Portable Power Stations in 2026";
export const metaDescription = "Best 240V portable power stations compared on how each listing reaches 240V, capacity, output and expansion for RV, cabin and home backup use.";
export const mainKeyword = "best 240v portable power stations";
export const introParagraphs = [
  "True 240V from a portable power station is still rare. Most units output 120V only, and the ones that reach 240V do it by pairing two units or by switching a single unit's output mode.",
  "Only three listings state 240V use, so this is a short list on purpose. Each pick was compared on how it gets to 240V, what that costs in extra hardware, and how much capacity sits behind it."
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
    "id": "best-240v-portable-power-stations-1",
    "rank": 1,
    "badge": "Best Single-Unit 240V",
    "name": "BLUETTI Apex 300 Portable Power Station 2764.8Wh 3840W LFP Solar Generator",
    "price": "$1499.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415i1uvAWBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F42JY551?tag=rvgearlab-amz-20",
    "description": "The BLUETTI Apex 300 stores 2,764.8Wh in LFP cells with 3,840W of output, and its listing describes switching from 120V to 240V through the app or onboard controls. It expands with B300K or B500K batteries and takes add-ons such as a Hub D1 for RV 12V loads.\n\nIt is the only pick that describes 240V from one unit, while the GROWATT HELIOS 3600 and Anker SOLIX F3000 each need a second station for 240V. It carries less capacity than either of them, which is the trade for the simpler setup.\n\nIt suits RV owners and cabin builders who want 240V for a heavier appliance without buying two stations. Its expansion path lets the system grow after the first purchase.",
    "specs": [
      "2,764.8Wh LFP, 3,840W",
      "120V/240V switchable",
      "Expandable with B300K, B500K"
    ],
    "pros": [
      "240V from one unit, per the listing",
      "LFP chemistry with a 0ms UPS claim",
      "Expands with add-on batteries",
      "Accepts alternator and solar add-ons"
    ],
    "cons": [
      "Smallest capacity of the three",
      "Alternator charging needs extra accessories"
    ],
    "bestFor": "One-unit 240V for RV or cabin",
    "take": "The simplest way here to get 240V, because the switch is built in. Good if you do not want to buy two stations.",
    "catch": "Capacity is lower than the other two, so heavy 240V loads drain it faster."
  },
  {
    "id": "best-240v-portable-power-stations-2",
    "rank": 2,
    "badge": "Best 240V Capacity",
    "name": "GROWATT HELIOS 3600 Portable Power Station",
    "price": "$1599.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41x7AJfYL4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DF7SZJWY?tag=rvgearlab-amz-20",
    "description": "The GROWATT HELIOS 3600 pairs 3,600Wh of LFP storage with 3,600W of output, and two units in parallel are listed as delivering 240V and 7,200W. Solar input is listed at 2,000W for a 2.8 hour full charge, and the EPS switchover is under 15ms.\n\nIts 3,600Wh is the largest capacity here, ahead of the 3,072Wh Anker SOLIX F3000 and the 2,764.8Wh BLUETTI Apex 300. A pair gives 7,200Wh behind a 240V circuit, which no other pick matches on paper.\n\nIt suits households and off-grid cabins that want a transfer-switch backup for 240V items such as a well pump or dryer. The second unit is the price of entry to that 240V mode.",
    "specs": [
      "3,600Wh LFP, 3,600W",
      "240V/7,200W with two units",
      "2,000W solar charging"
    ],
    "pros": [
      "Largest capacity of the three",
      "Two units give 7,200W at 240V",
      "Fast 2,000W solar input",
      "Switchover under 15ms for outages"
    ],
    "cons": [
      "240V needs a second unit",
      "Heavy to move around a campsite"
    ],
    "bestFor": "Whole-house backup at 240V",
    "take": "The pick for big 240V loads and long outages. Plan on buying two if 240V is the point.",
    "catch": "You must buy a second unit before you can run any 240V load."
  },
  {
    "id": "best-240v-portable-power-stations-3",
    "rank": 3,
    "badge": "Best for Pairing",
    "name": "Anker SOLIX F3000 Portable Power Station",
    "price": "$1399.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31twHXJikJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F8BC2LFS?tag=rvgearlab-amz-20",
    "description": "The Anker SOLIX F3000 holds 3,072Wh with 6,000W listed and offers 120V output on its own, or 240V when two stations are paired. It lists 3,600W pass-through charging from a 120V generator and 2,400W of solar input.\n\nIt sits between the other two on capacity and tops them on listed output at 6,000W. The standby draw is low, with 125 hours of AC idle time listed, which matters for a fridge-and-lights cabin.\n\nIt suits owners who want 120V day to day and 240V occasionally, with the option to expand to 24kWh. The pass-through charging keeps appliances running while a generator tops it up.",
    "specs": [
      "3,072Wh, 6,000W listed",
      "Pair two for 240V",
      "3,600W pass-through charging"
    ],
    "pros": [
      "Highest listed output of the three",
      "Pass-through charging from a generator",
      "Low idle draw, 125 hours standby",
      "Expands up to 24kWh"
    ],
    "cons": [
      "240V requires pairing two units",
      "Full 240V setup is expensive"
    ],
    "bestFor": "Everyday 120V with 240V option",
    "take": "A strong 120V station that can grow into 240V. Pick it if 240V is an occasional need.",
    "catch": "Reaching 240V means a second station and the matching hardware."
  }
];

export const howWeEvaluated = [
  {
    "title": "How 240V is reached",
    "description": "Compared whether each listing describes 240V from one unit or only by pairing two stations."
  },
  {
    "title": "Capacity behind the circuit",
    "description": "Looked at stated watt-hours, since 240V loads draw down a battery quickly."
  },
  {
    "title": "Output and surge",
    "description": "Noted the stated continuous output and what the listing says about running heavy appliances."
  },
  {
    "title": "Charging and expansion",
    "description": "Checked solar input, generator pass-through and whether extra batteries are offered."
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
    "subheading": "By 240V Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "One heavy appliance, no second unit",
          "BLUETTI Apex 300",
          "Switchable 120V/240V in one unit"
        ],
        [
          "Whole-house transfer switch backup",
          "GROWATT HELIOS 3600",
          "Two units give 240V and 7,200W"
        ],
        [
          "Mostly 120V, 240V sometimes",
          "Anker SOLIX F3000",
          "Pair two only when needed"
        ],
        [
          "Cabin that may grow later",
          "Anker SOLIX F3000",
          "Expands to 24kWh"
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
          "$1390 to $1400",
          "Anker SOLIX F3000"
        ],
        [
          "$1490 to $1500",
          "BLUETTI Apex 300"
        ],
        [
          "$1590 to $1600",
          "GROWATT HELIOS 3600"
        ]
      ]
    }
  },
  {
    "subheading": "Single-unit 240V vs paired 240V",
    "cards": [
      {
        "label": "Single unit",
        "text": "The BLUETTI Apex 300 describes 240V from one station, which saves cost and floor space but caps total energy at its own pack plus add-on batteries."
      },
      {
        "label": "Paired units",
        "text": "The GROWATT HELIOS 3600 and Anker SOLIX F3000 reach 240V by linking two stations, which doubles capacity and output but doubles the purchase."
      }
    ],
    "note": "Most buyers should default to the BLUETTI Apex 300 unless they need whole-house levels of stored energy."
  },
  {
    "subheading": "By Charging Style",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Fast solar charging",
          "GROWATT HELIOS 3600"
        ],
        [
          "Generator pass-through",
          "Anker SOLIX F3000"
        ],
        [
          "Alternator and RV add-ons",
          "BLUETTI Apex 300"
        ]
      ]
    }
  },
  {
    "subheading": "For RV Air Conditioning and Large Appliances Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated 240V mode and enough watt-hours for the load"
      },
      {
        "label": "In this comparison",
        "text": "The BLUETTI Apex 300 lists 240V for heavier RV loads, and the GROWATT HELIOS 3600 lists 7,200W at 240V when two are linked."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on a pair of GROWATT HELIOS 3600 units if you want 7,200W at 240V and long outage coverage, or add BLUETTI Apex 300 batteries as needs grow."
      },
      {
        "label": "Save if",
        "text": "Save with a single BLUETTI Apex 300 or Anker SOLIX F3000 and stay at 120V until a real 240V appliance justifies the second purchase."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 240V actually means here",
    "explanation": "A standard portable station outputs 120V, the same as a household wall socket. 240V is the higher voltage used by dryers, well pumps and some RV air conditioners. Check that the listing says 240V output explicitly, not just a big wattage number."
  },
  {
    "criterion": "Pairing versus built-in",
    "explanation": "Some stations reach 240V only when two identical units are linked, which doubles the price and the weight. Others switch internally. Read the listing for words like parallel, pair or switch to see which one you are buying."
  },
  {
    "criterion": "Capacity and runtime math",
    "explanation": "Runtime in hours is roughly watt-hours divided by the load in watts, minus losses. A 3,000W 240V load drains a 3,000Wh unit in well under an hour. Match the capacity to how long the heavy appliance actually runs."
  },
  {
    "criterion": "Wiring and transfer switch",
    "explanation": "Feeding a house or RV panel from a station needs an approved transfer switch or inlet, and often an electrician. Do not backfeed a panel through a normal outlet. The listing should name the compatible connection or accessory."
  },
  {
    "criterion": "Chemistry and charging limits",
    "explanation": "LFP (LiFePO4) cells last for thousands of cycles and tolerate heat better than older chemistries. Charging below freezing can damage cells, so check the listed operating temperature. Look for a battery management system mentioned in the specs."
  }
];

export const faq = [
  {
    "q": "Do I need two units to get 240V?",
    "a": "It depends on the model. The GROWATT HELIOS 3600 and Anker SOLIX F3000 list 240V when two units are paired, while the BLUETTI Apex 300 lists switching to 240V through the app or onboard controls."
  },
  {
    "q": "Can I plug a 240V RV into one of these?",
    "a": "Only if the unit and the connection are made for it. Check the plug type and amperage on the RV cord against the station's outlets, and ask the maker about the right adapter or transfer inlet."
  },
  {
    "q": "Is 240V worth it over a 120V station?",
    "a": "It is worth it only if you own a 240V appliance such as a dryer, well pump or large air conditioner. For fridges, lights and electronics, a 120V station is simpler and cheaper."
  },
  {
    "q": "How do I set up a pair for 240V?",
    "a": "Follow the maker's parallel kit and cable instructions, using matching units and firmware. Never improvise cables, because mismatched hookups can damage the batteries or create a shock hazard."
  },
  {
    "q": "How should I store these between trips?",
    "a": "Keep them indoors at a partial charge in a dry place away from heat. Top up every few months, and keep the vents clear when charging."
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
