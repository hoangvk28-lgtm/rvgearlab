export const guideSlug = "best-portable-power-stations-for-air-conditioners";
export const guideTitle = "Best Portable Power Stations for Air Conditioners";
export const metaTitle = "Best Power Stations for Air Conditioners";
export const metaDescription = "Six portable power stations for running RV and window air conditioners, compared by inverter size, surge, battery capacity and price.";
export const mainKeyword = "best portable power stations for air conditioners";
export const introParagraphs = [
  "Running an air conditioner from a battery is the hardest job you can give a portable power station. A rooftop RV unit typically draws somewhere between 800 and 2,000 watts while it runs, and the compressor can ask for two to three times that for a split second at startup. A station that handles a fridge and a laptop easily can still trip off the moment the compressor kicks in, which is why shopping by battery size alone leads people astray.",
  "Two numbers decide whether a power station can cool a camper, and they answer different questions. The inverter's continuous and surge ratings tell you whether the compressor will start and keep running. The battery's watt-hours tell you for how long. A 1,024Wh battery running a 1,000W unit lasts under an hour, while a 3,600Wh battery lasts three or so hours, and a 5kWh pack stretches that further. Add background loads such as the fridge and converter, and the real runtime shrinks again.",
  "This comparison spans a wide range on purpose. At the small end, two compact stations suit window units and low-draw cooling in a van or tent. In the middle, a 3.6kWh and a 2.7kWh station handle most RV air conditioners for a few hours. At the top, a 6000W split-phase unit and a 7.2kW whole-home system can run central air. Prices run from $559 to $4,709, and the spread mostly tracks inverter size and capacity.",
  "None of these is a substitute for good habits. A soft-start device on the compressor, a pre-cooled rig, shade and reflective window covers can cut the energy demand by a third or more, which is the cheapest way to extend any battery. Use the how-to-choose tables to match your unit's size to a named pick, and check your air conditioner's data tag before you buy."
];
export const lastUpdated = "2026-11-11";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41AYzvs0fvL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-portable-power-stations-for-air-conditioners-1",
    "rank": 1,
    "badge": "Best for RV Air Conditioning",
    "name": "BLUETTI Apex 300 with Hub D1",
    "price": "$1798.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41AYzvs0fvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJ1XXXGD?tag=rvgearlab-amz-20",
    "description": "The BLUETTI Apex 300 is the most convincing air conditioner partner in this group for an RV. Its six AC outputs share 3840W continuous with a 7680W surge, which is the kind of headroom a compressor start needs, and it delivers 120V and 240V at the same time. The 2,764.8Wh LFP battery sits in a modular system that expands with an expansion battery, and the Hub D1 module adds a 50 amp Anderson DC port for 12 volt gear.\n\nCompared with the EcoVolt PowerMax 6000 below it, the Apex 300 gives up about 2,000 watts of continuous output and trades that for a more compact, RV-oriented layout with a 6,000-cycle LFP battery rated for 17 years. Against the Grecell 2400W, it adds 1,440W of continuous power and about 920Wh of storage for roughly $1,240 more.\n\nIt suits an RVer who wants to cool the trailer for a few hours at a time from a single, well-built system, with the option to add the expansion battery and solar later. Bluetti quotes a 6400W fast solar input that fills 5.5kWh in 1.9 hours with the expansion battery, so solar days can refill the system quickly.",
    "specs": [
      "2,764.8Wh LFP, 3840W AC, 7680W surge",
      "120V and 240V output, 50A Anderson DC via Hub D1",
      "6,000-cycle battery, expandable with a B300K"
    ],
    "pros": [
      "7680W surge starts a rooftop compressor easily",
      "120V and 240V output at the same time",
      "Hub D1 adds a 50A Anderson DC port",
      "6,000 cycle battery for long service life"
    ],
    "cons": [
      "Hub D1 and expansion batteries add to the total cost",
      "2,764.8Wh gives only a couple of hours of cooling"
    ],
    "bestFor": "RV owners who want to run a rooftop air conditioner from the battery"
  },
  {
    "id": "best-portable-power-stations-for-air-conditioners-2",
    "rank": 2,
    "badge": "Most Output per Dollar",
    "name": "EcoVolt PowerMax 6000",
    "price": "$1999.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UJY0DmtqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H8XQQ2WR?tag=rvgearlab-amz-20",
    "description": "The EcoVolt PowerMax 6000 offers a 6000W split-phase inverter with a 9000W peak, a 3,600Wh LiFePO4 battery and expansion up to 57.6kWh. At $1,999, it is the cheapest way here to get enough output for a pair of air conditioners or a central unit, and it refills from AC in about 1.96 hours. LiFePO4 cells are rated for up to 3,500 cycles.\n\nCompared with the BLUETTI Apex 300 above, the PowerMax delivers about 2,160W more continuous power for about $200 more, with 835Wh extra battery capacity. Against the EcoFlow DELTA Pro, it adds 2,400W of continuous output at a similar price and gives you a clean 120/240V split phase.\n\nIt works for a large motorhome with two rooftop units, a tiny home, or a workshop air conditioner, where startup surge is the limiting factor. Smartphone control through an app lets you switch outlets, change charging speed and watch the battery from outside the rig.",
    "specs": [
      "3,600Wh LiFePO4, 6000W continuous, 9000W peak",
      "120/240V split phase output",
      "Full AC recharge in about 1.96 hours"
    ],
    "pros": [
      "6000W output runs two air conditioners at once",
      "Split-phase 120/240V for larger appliances",
      "Expands to 57.6kWh for multi-day cooling",
      "App control for charging speed and outlets"
    ],
    "cons": [
      "Brand has little track record compared with EcoFlow or Bluetti",
      "Large and heavy for a small camper"
    ],
    "bestFor": "Owners who need 6000W for a big air conditioner or two"
  },
  {
    "id": "best-portable-power-stations-for-air-conditioners-3",
    "rank": 3,
    "badge": "Best Budget for Small AC",
    "name": "GRECELL 2400W 1843Wh Power Station",
    "price": "$559.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41SnC3yjKYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CHRFJ7F5?tag=rvgearlab-amz-20",
    "description": "The GRECELL 2400W station packs 1,843.2Wh of LiFePO4 storage and a 2400W inverter into a $559.99 package, which is the best price per watt in the group. Four AC outlets share the 2400W, and 12 devices can run at once through a mix of USB-A QC and 100W USB-C PD ports. An intelligent UPS mode switches within 0.1 seconds to protect a desktop or a router during outages.\n\nStepping up from the Jackery Explorer 1000 v2, the Grecell nearly doubles the continuous output and nearly doubles the capacity for about the same price. Stepping up to the BLUETTI Apex 300 adds a 7680W surge rating and RV-focused DC outputs at about three times the price.\n\nIt suits a van, a small trailer with a compact air conditioner, or a camper who needs about an hour or two of cooling in the heat of the afternoon. The bidirectional inverter lets it charge and discharge at the same time, which is helpful when you run it from a campground outlet.",
    "specs": [
      "1,843.2Wh LiFePO4, 2400W AC output",
      "4 AC outlets, 100W USB-C PD ports",
      "UPS switching within 0.1 seconds"
    ],
    "pros": [
      "Best value in this group at $559.99",
      "2400W covers many small air conditioners",
      "Charges and discharges at the same time",
      "Four AC outlets and fast USB-C ports"
    ],
    "cons": [
      "Surge rating is not stated in the listing",
      "Less capacity than the 3kWh class for long cooling"
    ],
    "bestFor": "Van and small trailer owners with a modest air conditioner"
  },
  {
    "id": "best-portable-power-stations-for-air-conditioners-4",
    "rank": 4,
    "badge": "Best Compact Option",
    "name": "Jackery Explorer 1000 v2",
    "price": "$559.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/319bA1rsZGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7PPG25F?tag=rvgearlab-amz-20",
    "description": "The Jackery Explorer 1000 v2 is the small, portable pick here: 1,024Wh of LFP storage, 1,500W of continuous output and a 3,000W surge, in a box that fits behind a seat. Jackery lists AC units among the appliances it can run, and its 10ms UPS switchover protects electronics. Recharging takes about 50 minutes with emergency mode on the app, and a 30dB quiet charging mode is available overnight.\n\nCompared with the GRECELL 2400W, the Jackery offers a more polished app and a 10 year battery life with over 70 percent capacity retained after 4,000 cycles. The Grecell offers more capacity and watts at a similar price, so the Jackery wins on brand support and weight.\n\nIt works for a small window or portable air conditioner in a tent or van, for a fridge and fan in a camper, and for a day at a campsite where a heavy 3kWh unit would be overkill. Treat it as a short-burst cooler rather than an all-night one.",
    "specs": [
      "1,024Wh LFP, 1,500W output, 3,000W peak",
      "50-minute emergency recharge via the app",
      "10ms UPS, 4,000-cycle battery"
    ],
    "pros": [
      "Compact and light for a 1kWh battery",
      "50-minute emergency recharge via the app",
      "Quiet 30dB overnight charging mode",
      "Long-life LFP cells keep 70 percent after 4,000 cycles"
    ],
    "cons": [
      "Only suited to small air conditioners",
      "1,024Wh runs a 1,000W unit for under an hour"
    ],
    "bestFor": "Tent, van and window-unit users who want a light, portable battery"
  },
  {
    "id": "best-portable-power-stations-for-air-conditioners-5",
    "rank": 5,
    "badge": "Best for Expansion",
    "name": "EcoFlow DELTA Pro",
    "price": "$1799.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41pVhqDjojL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C1Z4GLKS?tag=rvgearlab-amz-20",
    "description": "The EcoFlow DELTA Pro is a proven 3,600Wh LFP station with a 3600W AC output that boosts to 4500W with X-Boost, and two units can be paired for 7200W. A 240V outlet charges it from empty in 1.8 hours, a 1800W wall outlet takes 2.7 hours, and four 400W panels fill it in 2.8 hours. Expansion batteries take it up to 25kWh.\n\nCompared with the EcoVolt PowerMax 6000, the DELTA Pro offers a more established brand, a mature app and five ways to charge, including EV stations, while the PowerMax offers more continuous output. Against the Grecell 2400W, it roughly doubles capacity at about three times the price.\n\nUse it for a small or medium RV air conditioner for a few hours, with a soft-start device to keep the surge down, or as part of a system that grows with extra batteries. It also makes a strong backup for a home fridge, sump pump and furnace fan.",
    "specs": [
      "3,600Wh LFP, 3600W, 4500W X-Boost",
      "Two units pair for 7200W",
      "1.8-hour recharge on a 240V outlet"
    ],
    "pros": [
      "Pairs two units for 7200W of power",
      "Five charging options including EV stations",
      "Expands up to 25kWh",
      "Mature app with detailed monitoring"
    ],
    "cons": [
      "Older design with a higher price per watt-hour than newer units",
      "Heavy and bulky for a small rig"
    ],
    "bestFor": "Owners who want to start with 3.6kWh and expand to 25kWh"
  },
  {
    "id": "best-portable-power-stations-for-air-conditioners-6",
    "rank": 6,
    "badge": "Best for Whole-Home Cooling",
    "name": "EcoFlow TITAN Plus with 2x400W Panels",
    "price": "$4709.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31yAI3u3SqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HN4BSLN6?tag=rvgearlab-amz-20",
    "description": "The EcoFlow TITAN Plus is a different class of product: 5,017Wh of LFP storage with 7.2kW of continuous output, expandable to 10kW with solar and to 30kWh with five expansion batteries. It delivers 120V and 240V split-phase power with up to 5kW on a single circuit, enough, EcoFlow says, to run a 3-ton central air conditioner. Two 400W panels are included.\n\nCompared with the EcoVolt PowerMax 6000, the Titan Plus adds about 1,400Wh of battery for more than twice the price and adds UL 9540 certification, a home-energy platform and generator charging up to 7.2kW. Compared with the DELTA Pro, it moves from a portable station to a semi-permanent system.\n\nChoose it for a tiny home, a cabin or a home backup that must cool a whole space, rather than for a camper. UL 9540 and UL 9540A testing, plus AI-based energy management, make it a more serious installation than a camping product.",
    "specs": [
      "5,017Wh LFP, 7.2kW continuous, 120V/240V",
      "Expandable to 30kWh, two 400W panels included",
      "UL 9540 certified, up to 7.6kW AC input"
    ],
    "pros": [
      "Runs a 3-ton central air conditioner",
      "UL 9540 certified for home installation",
      "Two 400W panels included",
      "Expands from 5kWh to 30kWh"
    ],
    "cons": [
      "At $4,709, it is by far the highest price here",
      "Far too large for a camper or van"
    ],
    "bestFor": "Cabin and house owners who need central air from a battery"
  }
];

export const howWeEvaluated = [
  {
    "title": "Surge and continuous output",
    "description": "We compared rated continuous watts and any stated surge against the starting demands of RV and window air conditioners, since a compressor start is where most stations trip."
  },
  {
    "title": "Battery capacity and runtime",
    "description": "Based on product specs, we compared watt-hours and expansion options, then estimated how many hours each battery could support a typical air conditioner alongside background loads."
  },
  {
    "title": "Charging and solar refill",
    "description": "We looked at AC input, 240V charging, solar input limits and alternator options, because cooling all afternoon only works if the battery can recover overnight."
  },
  {
    "title": "Size and fit for the job",
    "description": "We matched each unit to a use: van or tent, small trailer, motorhome or whole-home, rather than ranking everything on one scale."
  },
  {
    "title": "Price and scoring",
    "description": "We compared prices from $559 to $4,709. The RV Gear Lab Fit Score is an editorial assessment from structured criteria, based on product specs and published buyer feedback, not a lab measurement."
  }
];

export interface HowToChooseSection {
  subheading: string; intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Air Conditioner Type",
    "intro": "The air conditioner you own decides the inverter and battery size you need, so start with its nameplate watts.",
    "table": {
      "headers": [
        "Air conditioner",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Small window or portable unit in a van or tent",
          "Jackery Explorer 1000 v2",
          "1,500W output and 3,000W surge cover a small unit for short stretches."
        ],
        [
          "Compact unit in a small trailer",
          "GRECELL 2400W 1843Wh Power Station",
          "2400W and 1,843.2Wh at $559.99."
        ],
        [
          "Standard RV rooftop unit",
          "BLUETTI Apex 300 with Hub D1",
          "3840W continuous and a 7680W surge handle compressor starts."
        ],
        [
          "Two rooftop units in a large motorhome",
          "EcoVolt PowerMax 6000",
          "6000W continuous with a 9000W peak."
        ],
        [
          "Rooftop unit with long runtime",
          "EcoFlow DELTA Pro",
          "3,600Wh with expansion to 25kWh."
        ],
        [
          "Central air in a cabin or tiny home",
          "EcoFlow TITAN Plus with 2x400W Panels",
          "7.2kW output for a 3-ton central unit."
        ]
      ]
    },
    "note": "Check your air conditioner's data tag for running and starting watts before choosing any of these."
  },
  {
    "subheading": "By Budget",
    "intro": "The price range is wide, from $559 to $4,709, so each tier is a different class of use.",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick",
        "What you get"
      ],
      "rows": [
        [
          "Under $600",
          "GRECELL 2400W 1843Wh Power Station",
          "1,843.2Wh and 2400W for $559.99."
        ],
        [
          "Under $600 (compact)",
          "Jackery Explorer 1000 v2",
          "1,024Wh in a portable LFP box for $559."
        ],
        [
          "$1,700 to $1,850",
          "BLUETTI Apex 300 with Hub D1",
          "3840W, 120V/240V, an RV-ready DC hub for $1,798."
        ],
        [
          "$1,700 to $1,850 (expansion)",
          "EcoFlow DELTA Pro",
          "3,600Wh expandable to 25kWh for $1,799."
        ],
        [
          "$2,000",
          "EcoVolt PowerMax 6000",
          "6000W split phase for $1,999."
        ],
        [
          "$4,700",
          "EcoFlow TITAN Plus with 2x400W Panels",
          "A whole-home 5,017Wh system with panels for $4,709."
        ]
      ]
    }
  },
  {
    "subheading": "Portable Station vs Home-Scale System",
    "intro": "Two kinds of product compete for the air conditioner job, and the mechanism behind each differs.",
    "cards": [
      {
        "label": "Portable stations",
        "text": "The Jackery Explorer 1000 v2, GRECELL 2400W 1843Wh Power Station, BLUETTI Apex 300 with Hub D1 and EcoFlow DELTA Pro can be moved by one or two people and plug into a trailer. They suit camping and short outages, with runtime measured in hours for an air conditioner."
      },
      {
        "label": "Home-scale systems",
        "text": "The EcoVolt PowerMax 6000 and EcoFlow TITAN Plus with 2x400W Panels offer split-phase 120/240V and 6000W to 7.2kW output with expansion to tens of kilowatt-hours. They suit a cabin, tiny home or large motorhome, where central air or two units run together."
      }
    ],
    "note": "If you move the system every trip, stay with the portable group; if it lives in one place, the home-scale pair is the better value."
  },
  {
    "subheading": "By Runtime Goal",
    "intro": "Cooling time is set by watt-hours, so decide how many hours you need before shopping.",
    "table": {
      "headers": [
        "Runtime goal",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "About an hour of afternoon cooling",
          "Jackery Explorer 1000 v2",
          "1,024Wh fits a short burst with a small unit."
        ],
        [
          "Two hours of cooling on a hot day",
          "GRECELL 2400W 1843Wh Power Station",
          "1,843.2Wh covers a modest unit for two hours."
        ],
        [
          "Three hours with fridge and lights",
          "BLUETTI Apex 300 with Hub D1",
          "2,764.8Wh, expandable for more time."
        ],
        [
          "Four hours or more with expansion",
          "EcoFlow DELTA Pro",
          "3,600Wh now, expandable to 25kWh."
        ],
        [
          "All-night cooling with solar refill",
          "EcoVolt PowerMax 6000",
          "3,600Wh expandable to 57.6kWh."
        ],
        [
          "Days of central air",
          "EcoFlow TITAN Plus with 2x400W Panels",
          "5,017Wh and two panels, expandable to 30kWh."
        ]
      ]
    }
  },
  {
    "subheading": "For RV Rooftop Units Specifically",
    "intro": "A rooftop compressor draws more than a window unit and starts with a heavy surge.",
    "cards": [
      {
        "label": "Look for",
        "text": "A surge rating of at least twice your unit's running watts, a continuous rating above its running watts and enough watt-hours for the hours you need. The BLUETTI Apex 300 with Hub D1 and EcoVolt PowerMax 6000 are the first two to check."
      },
      {
        "label": "In this comparison",
        "text": "The BLUETTI Apex 300 with Hub D1 offers a 7680W surge, the EcoVolt PowerMax 6000 a 9000W peak, and the EcoFlow DELTA Pro offers 4500W through X-Boost with expansion. The Jackery Explorer 1000 v2 stays in the small-unit group."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "A larger inverter and battery are the only ways to cool longer, so the extra money buys real hours.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You camp in hot weather or want to run two units. The EcoVolt PowerMax 6000 at $1,999 and the EcoFlow TITAN Plus at $4,709 add continuous watts and storage."
      },
      {
        "label": "Save if",
        "text": "You cool a small space for a short time. The GRECELL 2400W at $559.99 and the Jackery Explorer 1000 v2 at $559 cover that for far less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Running and starting watts",
    "explanation": "An air conditioner has two power numbers: the running watts it draws once the compressor is going, usually 800 to 2,000 for an RV unit, and the starting watts it demands for a split second, often two to three times higher. If the station's inverter cannot supply the surge, it shuts off at startup, even if the battery is full. Find the data tag on your unit for running amps and locked-rotor amps, then multiply by 120 volts. On the listing, compare your starting watts against the surge or peak rating, not only the continuous rating."
  },
  {
    "criterion": "Battery capacity and honest runtime",
    "explanation": "Capacity in watt-hours divided by your load in watts gives hours of runtime, less around 10 percent for inverter losses. A 1,024Wh battery runs a 1,000W air conditioner for roughly 55 minutes, and a 3,600Wh battery runs it for roughly three hours. Add the fridge, lights and converter, which can draw 150 to 300 watts together, and the number drops again. Look for watt-hours in the title and calculate hours before you buy."
  },
  {
    "criterion": "Soft-start devices and compressor type",
    "explanation": "A soft-start kit eases the compressor into motion and can cut the starting surge by more than half, which lets a smaller inverter start a unit it could not otherwise. This matters because it can mean the difference between buying a 1500W station and a 3600W one. Inverter-type air conditioners ramp up gradually and often need less surge by design. Check your air conditioner's manual for a soft-start option, and look for it in the listing of any aftermarket kit."
  },
  {
    "criterion": "Voltage and outlet type",
    "explanation": "Most RV air conditioners run on 120V from a 15 or 20 amp circuit, while larger homes and some motorhomes use 240V split-phase for central air. A station that only offers 120V cannot run a 240V unit directly, and a 120V-only station cannot pair for 240V unless it says so. Look for 120V/240V or split phase in the title if you need it, and for a TT-30 or NEMA outlet if you plan to plug a trailer in."
  },
  {
    "criterion": "Charging and solar recovery",
    "explanation": "Cooling for three hours empties a battery, so how fast it refills is part of the decision. A 1800W AC input fills a 3kWh battery in under two hours, while a 400W solar array adds around 1.5 to 2kWh across a sunny day. If you plan to use the air conditioner every afternoon, solar alone must replace what you used. Check AC input watts, maximum solar input and the time to 80 percent in the listing."
  },
  {
    "criterion": "Weight, expansion and safety certification",
    "explanation": "Stations in this group range from about 25 pounds to well over 100 pounds, so the largest are semi-permanent. Expansion batteries extend runtime, but they add cost and weight and they need the same inverter. For installed systems, a UL 9540 listing, which applies to energy storage systems, is a mark of safety testing that a camping unit may not carry. Check weight, expansion options and any named safety certification on the listing."
  }
];

export const faq = [
  {
    "q": "Can a portable power station run an RV air conditioner at all?",
    "a": "Yes, within limits. A rooftop unit needs an inverter that can supply its starting surge and a battery big enough for the hours you want. The BLUETTI Apex 300 with Hub D1 and EcoVolt PowerMax 6000 have the headroom for most units, while the Jackery Explorer 1000 v2 suits only small window-style units for short stretches."
  },
  {
    "q": "Why does my station shut off when the compressor starts?",
    "a": "The compressor's startup surge exceeds the inverter's limit, even when the battery is full. Add a soft-start device, switch off other loads before starting, or move to a station with a higher surge rating, such as the BLUETTI Apex 300 at 7680W or the EcoVolt PowerMax 6000 at 9000W peak."
  },
  {
    "q": "Is the EcoFlow DELTA Pro still a good choice for air conditioning?",
    "a": "It is a solid unit with 3,600Wh, 3600W output and 4500W X-Boost, and it expands to 25kWh. Newer units offer higher continuous output and sometimes lower prices per watt-hour, so choose it for the ecosystem and expansion rather than for peak output."
  },
  {
    "q": "How do I connect a station to an RV with a 30 amp cord?",
    "a": "Use a station with a TT-30 outlet or a proper adapter from a 20 amp outlet, and keep the total load under the station's rating. Switch off the water heater element and converter charging, because both add hundreds of watts. Do not plug the station's output into a live shore plug."
  },
  {
    "q": "How many hours of cooling will I get from 1,000Wh?",
    "a": "Around one hour for a unit that draws about 1,000W, since the inverter loses roughly 10 percent. A Jackery Explorer 1000 v2 gives about that. A 3,600Wh DELTA Pro gives about three hours, and the EcoVolt PowerMax 6000 gives the same before expansion."
  },
  {
    "q": "How can I make a battery last longer under an air conditioner?",
    "a": "Pre-cool the rig while plugged in, park in shade, cover windows with reflective panels and set the thermostat a few degrees higher. These steps can reduce the compressor's duty cycle by a third or more, which is like adding hundreds of watt-hours without spending anything. Recharge from solar during the day."
  }
];

export const bottomLine = "For an RV with a standard rooftop unit, the BLUETTI Apex 300 with Hub D1 at $1,798 is the best balance of surge, output and system design in this group. Buyers who need to run two units or a very large one should pay $1,999 for the EcoVolt PowerMax 6000, and anyone cooling a van or a small trailer should look at the GRECELL 2400W at $559.99 or the Jackery Explorer 1000 v2 at $559. The EcoFlow DELTA Pro suits owners who want to expand to 25kWh, and the EcoFlow TITAN Plus at $4,709 is for cabins and tiny homes that need central air. Read your air conditioner's data tag, compare its starting watts with the surge rating, and plan on hours of cooling rather than all-night comfort.";

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
