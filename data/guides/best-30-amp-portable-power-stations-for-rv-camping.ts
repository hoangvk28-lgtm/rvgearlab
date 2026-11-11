export const guideSlug = "best-30-amp-portable-power-stations-for-rv-camping";
export const guideTitle = "Best 30 Amp Portable Power Stations for RV Camping";
export const metaTitle = "Best 30 Amp RV Power Stations (2026)";
export const metaDescription = "Six portable power stations for 30 amp RV camping, compared by TT-30 outlet, continuous watts, capacity, charging speed and price.";
export const mainKeyword = "best 30 amp portable power stations for rv camping";
export const introParagraphs = [
  "A 30 amp travel trailer is wired around a single 120 volt circuit, which tops out near 3,600 watts. That ceiling shapes everything about choosing a battery to power it. A portable power station with a TT-30 outlet, the 30 amp RV plug, lets you connect the trailer's own shore cord without adapters, so the outlets inside the rig, the converter and the fridge all keep working. Without that outlet you end up running an extension cord to one appliance at a time, which is not the same as powering the camper.",
  "The catch is that a 30 amp plug does not mean the station can deliver 30 amps. A unit with a 2400W inverter delivers about 20 amps at 120 volts, and a 3600W inverter delivers the full 30. Most trailer loads do not reach either limit, because the air conditioner, microwave and water heater element rarely run together, but it is worth understanding what you are plugging in. The other number that matters is capacity in watt-hours, since a 2,048Wh station and a 3,840Wh station differ by hours of overnight fridge, furnace fan and lights.",
  "These six picks cover three different strategies. One is a mid-size 2,048Wh unit with a TT-30 outlet and fast alternator charging. Three are larger, around 3kWh to 3.8kWh, with wheels and big solar intake. The last two lean on expansion and high continuous output, which make sense if you intend to build a system over time. Prices run from $739 to $1,999.99, which is a wide spread, and the cheapest options trade away either capacity or a stated RV outlet.",
  "Use the how-to-choose tables to match your trailer's loads to a named pick. If you only run a fridge, lights and fans, the smaller units here are plenty; if the plan includes a rooftop air conditioner, look at the 3600W units and plan for about two hours of cooling per 2,000Wh of battery."
];
export const lastUpdated = "2026-11-11";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41iJKYxROtL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-30-amp-portable-power-stations-for-rv-camping-1",
    "rank": 1,
    "badge": "Best Overall for 30 Amp",
    "name": "Anker SOLIX C2000 Gen 2",
    "price": "$949.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iJKYxROtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FVFGL38H?tag=rvgearlab-amz-20",
    "description": "The Anker SOLIX C2000 Gen 2 hits the sweet spot for a 30 amp trailer. It stores 2,048Wh in LiFePO4 cells, delivers 2,400W rated and 4,000W peak, and has a TT-30 socket the listing describes as powering your RV directly. Anker says that rated power is enough for most window and RV air conditioners, and the unit can expand to 4kWh with an extra battery.\n\nCompared with the BLUETTI Elite 300 right below it, the Anker saves about $250 and gives up roughly a thousand watt-hours, and what it adds is more charging flexibility: six ways to recharge, a full refill in 58 minutes on AC and solar, and an 800W alternator input that fills the battery in about three hours while you drive. For an RVer who moves every few days, that road charging is the headline feature.\n\nIt suits a weekend or week-long camper with a fridge, lights, fans and a microwave, who wants an easy, familiar unit to plug the trailer into. The expansion option means you can add capacity later without replacing the inverter.",
    "specs": [
      "2,048Wh LiFePO4, 2,400W rated, 4,000W peak",
      "TT-30 outlet, 800W alternator charging",
      "58-minute full recharge, expandable to 4kWh"
    ],
    "pros": [
      "TT-30 socket plugs the trailer in directly",
      "Charges from the alternator while you drive",
      "Full recharge in under an hour with AC and solar",
      "Add a battery later to reach 4kWh"
    ],
    "cons": [
      "2,048Wh does not cover a full day of air conditioning",
      "Extra battery is a separate purchase"
    ],
    "bestFor": "RV owners who want a TT-30 outlet and fast recharging in a mid-size box"
  },
  {
    "id": "best-30-amp-portable-power-stations-for-rv-camping-2",
    "rank": 2,
    "badge": "Best for RV Living",
    "name": "BLUETTI Elite 300",
    "price": "$1199.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31JMyZy68zL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GT3SNGJM?tag=rvgearlab-amz-20",
    "description": "The BLUETTI Elite 300 packs 3,014Wh of LFP storage into a case Bluetti calls 59 percent smaller than traditional large stations. It is built for RV use, with a TT-30 port and a 12V/30A DC output for running 12 volt gear straight from the battery. A 2400W continuous inverter with 4800W surge covers a fridge, microwave, routers and a CPAP together, and a 10ms UPS switch protects electronics during dropouts.\n\nStepping up from the Anker C2000 Gen 2 buys another thousand watt-hours of runtime and a native 12V/30A DC port, which is useful for a 12 volt fridge or a DC air compressor. Stepping over to the SolarPlay Q3600 swaps the compact footprint for 3600W of output and about 800Wh more battery for a similar price.\n\nChoose it if you live in the rig for weeks at a time and want the largest battery that still moves with one person. The compact size makes it practical to stow in a bay or under a dinette, and the 12V port means DC devices skip the inverter losses entirely.",
    "specs": [
      "3,014Wh LFP, 2400W continuous, 4800W surge",
      "TT-30 port and 12V/30A DC output",
      "10ms UPS switchover"
    ],
    "pros": [
      "Compact case for 3kWh of storage",
      "TT-30 plus a high-current 12V/30A DC port",
      "4800W surge starts demanding appliances",
      "10ms UPS switch protects sensitive gear"
    ],
    "cons": [
      "Continuous output is capped at 2400W, below the 3600W units",
      "Charging details are less prominent in the listing"
    ],
    "bestFor": "Full-time and long-stay RVers who want 3kWh in a compact case"
  },
  {
    "id": "best-30-amp-portable-power-stations-for-rv-camping-3",
    "rank": 3,
    "badge": "Best Capacity per Dollar",
    "name": "SolarPlay Q3600",
    "price": "$1199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41QPPt83nmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FMJVB9FD?tag=rvgearlab-amz-20",
    "description": "The SolarPlay Q3600 offers 3,840Wh of LiFePO4 storage and a 3600W pure sine wave inverter with a 5500W peak for $1,199.99, which is a lot of capacity for the price. A NEMA TT-30 port sits among fifteen outputs, and it accepts up to 2000W of solar input across an 11.5V to 160V window, so a large rooftop array can refill it fast.\n\nAgainst the BLUETTI Elite 300 above, the SolarPlay trades the compact case for 826Wh more capacity and 1200W more continuous output at the same price, and wheels with a telescopic handle make the 93.7 pound weight manageable. Against the Growatt HELIOS 3600 below, it costs about the same and adds integrated wheels, while the Growatt answers with a larger expansion ecosystem and parallel 240V.\n\nThis is the pick for a boondocker who wants to run a rooftop air conditioner for a few hours, then recharge from panels the next day. UL certification with twelve safety protocols, and a rated 4000-plus cycle life, support a long-term purchase.",
    "specs": [
      "3,840Wh LiFePO4, 3600W AC, 5500W peak",
      "NEMA TT-30 port, 15 outputs",
      "Up to 2000W solar input, wheels and handle"
    ],
    "pros": [
      "Largest battery per dollar in this group",
      "3600W output supports a rooftop air conditioner",
      "TT-30 port among fifteen outputs",
      "Wheels and a telescopic handle ease moving"
    ],
    "cons": [
      "At 93.7 pounds it is heavy to lift into a truck",
      "Newer brand with a shorter track record"
    ],
    "bestFor": "Boondockers who want 3,840Wh and 3600W for about $1,200"
  },
  {
    "id": "best-30-amp-portable-power-stations-for-rv-camping-4",
    "rank": 4,
    "badge": "Best for a Growing System",
    "name": "GROWATT HELIOS 3600",
    "price": "$1198.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41x7AJfYL4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DF7SZJWY?tag=rvgearlab-amz-20",
    "description": "The GROWATT HELIOS 3600 combines a 3,600Wh LFP battery with a 3600W inverter, and two units can be paralleled for 240V and 7200W output. The platform expands up to 36kWh, which puts it more in the territory of a home battery than a camping cooler. A 2000W solar input refills the battery in about 2.8 hours, and a quick-response switchover under 15 milliseconds keeps sensitive loads running.\n\nNext to the SolarPlay Q3600, the Growatt costs about the same and gives you the parallel 240V option plus a cold-start capability for winter use. Against the AFERIY P280 below, it adds 1,552Wh of battery for roughly $460 more, which buys about a day of extra fridge time.\n\nIt is the right fit for an owner who might later move the system into a cabin, a shop or a house as a backup, or who wants a path to grow past a single unit. Buyers who want a simple plug-and-camp unit will be happier with the TT-30 models above.",
    "specs": [
      "3,600Wh LFP, 3600W output",
      "Parallel two units for 240V, 7200W",
      "2000W solar input, under 15ms switchover"
    ],
    "pros": [
      "Pair two units for 240V and 7200W",
      "Expands up to 36kWh for serious backup",
      "2000W solar input fills it in under three hours",
      "Cold-start operation helps in winter camping"
    ],
    "cons": [
      "TT-30 outlet is not listed, so check before buying",
      "Parallel kits and batteries add cost"
    ],
    "bestFor": "Owners planning 240V or whole-camper backup with expansion"
  },
  {
    "id": "best-30-amp-portable-power-stations-for-rv-camping-5",
    "rank": 5,
    "badge": "Best Budget Power",
    "name": "AFERIY P280",
    "price": "$739.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41FEOGNT1bL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FWK74W5M?tag=rvgearlab-amz-20",
    "description": "The AFERIY P280 delivers a 2800W pure sine wave inverter with a 5600W peak, and a 2,048Wh LFP battery, at $739. That is the lowest price in the group, and the inverter is the strongest of the 2,048Wh class. Charging is the trick: 1800W AC input plus 1200W of PV input across two inputs takes it from 0 to 80 percent in about 38 minutes.\n\nCompared with the Anker C2000 Gen 2, the AFERIY costs $210 less, adds 400W of continuous output and charges to 80 percent quicker, while the Anker adds a stated TT-30 outlet and alternator charging. Against the Growatt HELIOS 3600 it gives up capacity for a lower price and a much lighter load.\n\nIt works well for a weekend camper who runs a fridge, a coffee maker and a few devices, or a budget builder who plans to expand to 10.24kWh later with extra batteries. Dual PV inputs make a two-panel array simple, since there is no separate MPPT box to add.",
    "specs": [
      "2,048Wh LiFePO4, 2800W, 5600W peak",
      "1800W AC plus 1200W PV input",
      "Expandable to 10.24kWh, under 10ms UPS"
    ],
    "pros": [
      "Lowest price in this group at $739",
      "2800W inverter is strong for its size",
      "Dual PV inputs make solar setup simple",
      "Fills to 80 percent in about 38 minutes"
    ],
    "cons": [
      "TT-30 outlet is not stated in the listing",
      "2,048Wh runs out quickly with air conditioning"
    ],
    "bestFor": "Budget buyers who want 2800W output and quick refills"
  },
  {
    "id": "best-30-amp-portable-power-stations-for-rv-camping-6",
    "rank": 6,
    "badge": "Best Bundle for Solar",
    "name": "ABOK Ark3600 with 2x400W Panels",
    "price": "$1999.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51GPm+ar94L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F47HQVC5?tag=rvgearlab-amz-20",
    "description": "The ABOK Ark3600 is the only pick here that bundles a serious solar array, two 400W panels, with a 3,840Wh LiFePO4 station rated at 3600W with a 7200W peak. A TT-30 RV port sits among fifteen outputs, and combined AC and solar input of 3500W takes it from 0 to 80 percent in about 1.1 hours. EVE LiFePO4 cells and a BMS back the long-term claim, and capacity expands up to 11,520Wh.\n\nAgainst the SolarPlay Q3600 the capacity and output match, and the ABOK adds the panels and a 7200W surge ceiling at the cost of about $800 more. That premium works out to roughly the price of two 400W panels, so it is fair if you want a single box ready to run off the sun.\n\nChoose it if you want to go off-grid in one purchase, camp in sunny regions, and need an inverter that can start an air conditioner repeatedly. The listing notes the station and panels were on backorder, so check the shipping date before ordering.",
    "specs": [
      "3,840Wh LFP, 3600W, 7200W peak, expandable to 11,520Wh",
      "TT-30 port, 15 outputs",
      "Two 400W panels, 3500W combined charging"
    ],
    "pros": [
      "Two 400W panels included for off-grid use",
      "TT-30 port and 3600W output",
      "7200W peak starts big compressors",
      "Expands up to 11,520Wh"
    ],
    "cons": [
      "Highest price in the group at $1,999.99",
      "Listing notes stock and shipping delays"
    ],
    "bestFor": "Buyers who want a station and 800W of panels in one purchase"
  }
];

export const howWeEvaluated = [
  {
    "title": "RV connection and outlets",
    "description": "We started with how each station connects to a 30 amp trailer, looking for a TT-30 port, a 12V/30A DC output and pass-through charging, since the outlet decides whether the camper's own wiring can be used."
  },
  {
    "title": "Continuous output and surge",
    "description": "Based on product specs, we compared continuous watts and peak ratings against the loads a trailer actually runs: fridge, microwave, converter and, for the larger units, a rooftop air conditioner."
  },
  {
    "title": "Capacity and expansion",
    "description": "We looked at watt-hours stored, how far each unit expands and how quickly it refills from AC, solar and a vehicle alternator, because overnight comfort depends on both."
  },
  {
    "title": "Portability and noise",
    "description": "We weighed stated weight, carts or wheels and compact design, since a 90 pound station is a different daily routine from a 40 pound one."
  },
  {
    "title": "Value for money",
    "description": "We compared real prices from $739 to $1,999.99, noting what is bundled. The RV Gear Lab Fit Score is an editorial assessment from structured criteria, based on product specs and published buyer feedback, not a lab measurement."
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
    "subheading": "By Your RV's Biggest Load",
    "intro": "A 30 amp trailer is limited to about 3,600W at the pedestal, but your battery is limited by the inverter you choose.",
    "table": {
      "headers": [
        "Biggest load",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Fridge, lights, fans, router",
          "AFERIY P280",
          "A 2800W inverter and 2,048Wh handle the basics at $739."
        ],
        [
          "Fridge plus microwave and coffee maker",
          "Anker SOLIX C2000 Gen 2",
          "2,400W rated with a TT-30 outlet."
        ],
        [
          "Rooftop air conditioner for a few hours",
          "SolarPlay Q3600",
          "3600W output and 3,840Wh for the compressor and cooling time."
        ],
        [
          "12 volt fridge or DC compressor",
          "BLUETTI Elite 300",
          "A 12V/30A DC output skips inverter losses."
        ],
        [
          "A 240V well pump or tool",
          "GROWATT HELIOS 3600",
          "Two units pair for 240V and 7200W."
        ],
        [
          "A full off-grid solar setup",
          "ABOK Ark3600 with 2x400W Panels",
          "Includes 800W of panels with a 3600W inverter."
        ]
      ]
    },
    "note": "For most 30 amp trailers, the Anker SOLIX C2000 Gen 2 covers the typical load at a fair price."
  },
  {
    "subheading": "By Budget",
    "intro": "Real prices here run from $739 to $1,999.99, and each step buys something distinct.",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick",
        "What you get"
      ],
      "rows": [
        [
          "Under $800",
          "AFERIY P280",
          "2,048Wh and 2800W at $739."
        ],
        [
          "$900 to $1,000",
          "Anker SOLIX C2000 Gen 2",
          "A TT-30 outlet and alternator charging for $949.99."
        ],
        [
          "$1,100 to $1,200",
          "BLUETTI Elite 300",
          "3,014Wh in a compact case for $1,199."
        ],
        [
          "$1,100 to $1,200 (capacity first)",
          "SolarPlay Q3600",
          "3,840Wh and 3600W for $1,199.99."
        ],
        [
          "$1,100 to $1,200 (system growth)",
          "GROWATT HELIOS 3600",
          "3,600Wh with parallel 240V for $1,198.98."
        ],
        [
          "$2,000",
          "ABOK Ark3600 with 2x400W Panels",
          "The station plus two 400W panels at $1,999.99."
        ]
      ]
    }
  },
  {
    "subheading": "Compact Case vs Maximum Output",
    "intro": "Two design philosophies compete in this group, and the right one depends on how the trailer is used.",
    "cards": [
      {
        "label": "Compact, moderate output",
        "text": "The Anker SOLIX C2000 Gen 2 and BLUETTI Elite 300 pair 2400W inverters with a smaller footprint and lower weight, and the Elite 300 adds a 12V/30A DC port. They are easier to stow, and 2400W covers most trailer loads other than a rooftop air conditioner plus a microwave."
      },
      {
        "label": "Big inverter, big battery",
        "text": "The SolarPlay Q3600, GROWATT HELIOS 3600 and ABOK Ark3600 pair 3600W inverters with 3.6kWh or more of storage, and weigh far more. They can start a rooftop air conditioner and run another heavy load together, which the 2400W units cannot."
      }
    ],
    "note": "Choose the compact pair unless a rooftop air conditioner is a firm requirement."
  },
  {
    "subheading": "By Charging Method",
    "intro": "Where you refill is a separate decision from how much you store.",
    "table": {
      "headers": [
        "Charging style",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Charge while driving",
          "Anker SOLIX C2000 Gen 2",
          "800W alternator input fills it in about three hours."
        ],
        [
          "Refill fast at a pedestal",
          "AFERIY P280",
          "0 to 80 percent in about 38 minutes."
        ],
        [
          "Big solar array on the roof",
          "SolarPlay Q3600",
          "Up to 2000W of solar input."
        ],
        [
          "Panels included in the box",
          "ABOK Ark3600 with 2x400W Panels",
          "Two 400W panels with 3500W combined input."
        ],
        [
          "Slow, simple wall charging",
          "BLUETTI Elite 300",
          "Plug into a standard outlet and let it fill overnight."
        ],
        [
          "Generator as a backup source",
          "GROWATT HELIOS 3600",
          "2000W solar plus AC for flexible refilling."
        ]
      ]
    }
  },
  {
    "subheading": "For Boondocking Specifically",
    "intro": "Off-grid camping rewards the charging side more than the output side.",
    "cards": [
      {
        "label": "Look for",
        "text": "Strong solar input, a large battery, a TT-30 outlet for the trailer and road charging for travel days. The Anker SOLIX C2000 Gen 2 and SolarPlay Q3600 are the first two to check."
      },
      {
        "label": "In this comparison",
        "text": "The SolarPlay Q3600 accepts up to 2000W of solar and stores 3,840Wh, the ABOK Ark3600 includes two 400W panels, and the Anker SOLIX C2000 Gen 2 tops up from the alternator on the drive to camp."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "Price differences here buy storage, bundled panels and an upgrade path.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You plan to run an air conditioner or live off-grid. The SolarPlay Q3600 at $1,199.99 and the ABOK Ark3600 at $1,999.99 add storage, panels and a 3600W inverter."
      },
      {
        "label": "Save if",
        "text": "You run a fridge, lights and a few devices. The AFERIY P280 at $739 and the Anker SOLIX C2000 Gen 2 at $949.99 cover that without paying for capacity you will not use."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "TT-30 outlet versus a regular socket",
    "explanation": "A TT-30 is the 30 amp, 120 volt RV plug with a bent blade layout, and it lets your trailer's shore cord connect directly to the station. Without it you either power single appliances through household outlets or buy a dogbone adapter, and adapters add resistance and a place for heat to build. This matters because your trailer's converter, outlets and fridge are only fully powered when the whole system is connected. Look in the port list for TT-30 or RV port, and treat a missing mention as unconfirmed."
  },
  {
    "criterion": "Continuous watts and what a 30 amp plug can carry",
    "explanation": "A 30 amp plug can carry up to about 3,600 watts, but the station behind it only supplies what its inverter is rated for, so a 2400W unit delivers about 20 amps. If your air conditioner draws 1,500W and your microwave 1,400W, you are already near the limit. Add up the loads that run together, then pick an inverter with 20 percent headroom. The title and bullets state rated or continuous output; treat bigger numbers labelled peak as surge only."
  },
  {
    "criterion": "Battery capacity and daily use",
    "explanation": "Watt-hours decide how many hours the camper runs, and a typical trailer fridge, lights, fans and device charging consume about 1,200 to 2,000Wh per day. A 2,048Wh station covers about a day of that, while a 3,840Wh unit covers close to two. Air conditioning dominates the total, using roughly 1,000 to 1,500Wh per hour. Compare watt-hours in the title against your own daily total, and plan for solar to refill part of it."
  },
  {
    "criterion": "Charging inputs and speed",
    "explanation": "AC input watts, solar input watts and alternator charging each refill the battery at different rates. A unit with 1800W AC input can refill a 2kWh battery in about an hour, while a 500W solar array adds about 2kWh across a sunny day. This matters on a travel day, when you want the battery full by the next stop. Check the AC input wattage, the maximum solar input and whether a car or alternator input is listed."
  },
  {
    "criterion": "Weight and transport",
    "explanation": "A 3.8kWh station weighs about 94 pounds, and a 2kWh station about 40 to 50 pounds, which changes whether one person can load it into a truck bed or a storage bay. Wheels and a telescopic handle make a heavy unit workable, while a compact case helps with tight bays. Look for weight in pounds in the listing and for wheels or a handle in the photos."
  },
  {
    "criterion": "Expansion and warranty",
    "explanation": "Expansion batteries let you add capacity later without replacing the inverter, which can stretch a purchase over several seasons. A system that expands to 10kWh or more adds real cost, though, so it is only worth paying for if you plan to use it. Compare warranty length, since a $1,200 unit with two years of coverage differs from one with five. Look for the maximum expansion figure and the warranty term on the listing."
  }
];

export const faq = [
  {
    "q": "Can a portable power station run my RV's 30 amp shore cord directly?",
    "a": "Yes, if it has a TT-30 outlet. The Anker SOLIX C2000 Gen 2, BLUETTI Elite 300, SolarPlay Q3600 and ABOK Ark3600 list one. Plug the trailer's shore cord in, switch off high-draw appliances such as the water heater element, and watch the station's output display. The inverter only supplies what it is rated for, so a 2400W unit is not a full 30 amps."
  },
  {
    "q": "How long will it run my fridge and lights overnight?",
    "a": "A typical RV compressor fridge, lights and a fan draw around 100 to 200 watts combined, so a 2,048Wh station like the Anker SOLIX C2000 Gen 2 or AFERIY P280 runs them for about 10 to 18 hours depending on duty cycle. A 3,840Wh unit such as the SolarPlay Q3600 can roughly double that."
  },
  {
    "q": "Is a 2400W unit enough for an air conditioner?",
    "a": "For a small rooftop unit, often yes for a short period; Anker says the C2000 Gen 2 covers most window and RV air conditioners. For a 13,500 BTU unit on a hot day, the 3600W stations are safer, and battery runtime will still be about two hours per 2,000Wh."
  },
  {
    "q": "Should I buy the ABOK Ark3600 with panels or add panels to a cheaper unit?",
    "a": "The ABOK bundle costs about $800 more than the SolarPlay Q3600 and adds two 400W panels, which is a fair price for the panels. If you already own panels or want a roof-mounted array, the SolarPlay or Growatt is a better base. Check the shipping date, since the listing mentions backorder notes."
  },
  {
    "q": "What is the best way to charge on a travel day?",
    "a": "The Anker SOLIX C2000 Gen 2 accepts up to 800W from the vehicle alternator and fills in about three hours, which suits a long driving day. Other units mainly use AC or solar, so plug into a pedestal or a campground outlet when you arrive. A car outlet charges far more slowly than the alternator input."
  },
  {
    "q": "How should I store a station for winter?",
    "a": "Store it at 40 to 80 percent charge in a dry place, and top it up every few months. LiFePO4 cells age slowly when idle but dislike deep discharge and freezing temperatures during charging. If you camp in winter, look for the cold-start capability listed for the Growatt HELIOS 3600."
  }
];

export const bottomLine = "For most 30 amp trailers, the Anker SOLIX C2000 Gen 2 at $949.99 is the easiest recommendation: a TT-30 outlet, 2,048Wh of storage and the fastest road charging in the group. Step up to the BLUETTI Elite 300 at $1,199 for a compact 3kWh case, or to the SolarPlay Q3600 at $1,199.99 when you want 3,840Wh and a 3600W inverter for an air conditioner. The AFERIY P280 at $739 is the budget route, the GROWATT HELIOS 3600 is the system builder's choice, and the ABOK Ark3600 is the ready-to-go solar bundle. Match the outlet, the inverter and the battery to your trailer's loads, and confirm the TT-30 port on any listing that does not state it.";

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
