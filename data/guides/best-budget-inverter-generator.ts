export const guideSlug = "best-budget-inverter-generator";
export const guideTitle = "6 Best Budget Inverter Generators in 2026";
export const metaTitle = "Best Budget Inverter Generators, 2026";
export const metaDescription = "Six budget inverter generators sized by starting watts versus running watts, with outlets, runtime basis and weight compared for RV and camp use.";
export const mainKeyword = "best budget inverter generator";
export const introParagraphs = [
  "Most buying mistakes with inverter generators come from reading the biggest number on the box. A label that says 4400 watts describes a surge the engine can hold for a few seconds, while the figure that matters for running a camper all evening is the running watts, which can be a thousand watts lower. The gap between the two is a reserve for starting motors, and it is the single most useful thing to learn before you pick a unit, and it explains why two generators with similar labels can behave very differently on a hot afternoon.",
  "Sizing works in three simple steps. Add the running watts of everything that will be on at the same time, add the largest single starting surge (usually the air conditioner), and leave headroom on top so the engine is never asked for everything at once. Published surge numbers for the same rooftop unit vary widely between sources, so the nameplate on your own appliance is the only figure worth sizing from. A 30 amp label on the panel describes the plug shape, not whether the engine can start your compressor, so read the wattage lines rather than the outlet list.",
  "This shortlist covers six budget inverter units from a compact 2200-watt model up to machines rated at 3400 running watts, all compared on listings and specs rather than bench tests. Each pick is described by its starting and running figures, its surge reserve, its runtime basis and its outlets. Prices are given as bands rather than figures, because a printed price goes stale and the reasoning about what the step up buys stays true. Read the sizing steps first, then match your own loads to the surge reserve each pick offers."
];
export const lastUpdated = "2026-10-02";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41KdBRQJSQL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-budget-inverter-generator-1",
    "rank": 1,
    "badge": "Best Fuel Flexibility",
    "name": "WEN 3600-Watt Dual Fuel RV-Ready Portable Inverter Generator (DF360iX)",
    "price": "$521.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KdBRQJSQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D3WR4CFR?tag=rvgearlab-amz-20",
    "description": "The WEN DF360iX lists 3600 surge and 2900 running watts on gasoline and 3500 surge and 2600 running watts on propane. On gasoline the reserve is 700 watts, enough to cover the start of a moderate motor while the running loads keep drawing. A TT-30R RV receptacle accepts a 30 amp cord directly, next to two 120V receptacles, a 12V DC port and two 5V USB ports.\n\nAgainst the PowerSmart 3800W, the WEN swaps a little rated output for dual fuel flexibility, a tool-free LPG quick connector and a fuel shut-off that runs the carburetor dry at shutdown, which helps when the unit sits for months. A Watchdog CO shutdown sensor sits on the unit, and the listing describes quiet operation similar to conversation without giving a decibel figure.\n\nOn propane the surge number barely moves while the running figure falls by 300 watts, so size your steady loads against the 2600 figure and keep the air conditioner in mind. Well-rounded for a mid-size trailer owner who values propane storage and a direct RV outlet, and it lands at the top of this shortlist on price, which buys the dual fuel hardware and the sensor.",
    "specs": [
      "2900 W gas, 2600 W propane running",
      "TT-30R, 12V DC, two USB ports",
      "Dual fuel with CO Watchdog"
    ],
    "pros": [
      "Runs on gasoline or propane",
      "Direct TT-30R RV receptacle",
      "CO shutdown sensor included",
      "Fuel shut-off protects the carburetor"
    ],
    "cons": [
      "Most expensive pick in this guide",
      "No decibel figure in the listing"
    ],
    "bestFor": "RV owners wanting propane backup, a CO sensor and a direct 30 amp outlet."
  },
  {
    "id": "best-budget-inverter-generator-2",
    "rank": 2,
    "badge": "Best Surge Reserve",
    "name": "EFURDEN 4300W Inverter Generator",
    "price": "$459.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YcCuxXWvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GXZXX3KK?tag=rvgearlab-amz-20",
    "description": "EFURDEN lists 4300 starting and 3300 running watts, a surge reserve of 1000 watts that is among the largest of the group. That margin is what carries a compressor through its start-up spike while lights and a refrigerator keep running. Total harmonic distortion is listed under 2 percent, which keeps televisions, laptops and phones safe on the same circuit.\n\nAgainst the WEN 3600W, the EFURDEN adds 400 running watts on gasoline and a pair of 20 amp outlets next to a 30 amp port, a USB port and a QC 3.0 Type-C port. It weighs 45 pounds in an 18.5 by 11.5 by 20 inch frame, and the noise is stated at 60 dBA at 23 feet.\n\nThe 1.1 gallon tank keeps weight down and is quoted at up to 5 hours at 50 percent load, a half-load basis that is a tougher test than the quarter-load claims on some competitors. Mid-shortlist on price, it suits a camper who runs an air conditioner on a 30 amp trailer, where the extra margin pays off every afternoon.",
    "specs": [
      "3300 W running, 4300 W starting",
      "45 lb, 18.5 x 11.5 x 20 in",
      "60 dBA at 23 ft, under 2% THD"
    ],
    "pros": [
      "1000 watt gap between starting and running",
      "Under 2 percent distortion",
      "USB and Type-C ports for devices",
      "Light for the output class"
    ],
    "cons": [
      "Five hour runtime at half load",
      "No CO sensor named in the listing"
    ],
    "bestFor": "Owners whose air conditioner needs a big starting margin above the running load."
  },
  {
    "id": "best-budget-inverter-generator-3",
    "rank": 3,
    "badge": "Best Overall",
    "name": "PowerSmart 3800 Watt Portable Inverter Generator",
    "price": "$399.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412bPkgt2ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H98TT1MN?tag=rvgearlab-amz-20",
    "description": "PowerSmart lists 3800 starting and 3200 running watts of clean power with total harmonic distortion under 3 percent. The panel carries a 5-20R duplex, an L5-30R 30 amp twist-lock, a 12V 8A DC port, two 5V 2.1A USB ports and an Eco Mode switch. Those outlets cover household plugs, a 30 amp cord through an adapter and phone charging at the same time.\n\nAlongside the EFURDEN 4300W, it gives up 500 starting watts and 100 running watts and returns a lower noise claim of 59 dBA at 23 feet plus a lower price, which many campers value more than the extra surge. It weighs 47 pounds with a carry handle, and the package includes a two-year limited warranty and lifetime technical support from the maker.\n\nA 600 watt reserve is plenty for refrigerator compressors, fans and most power tools, and the unit is the balanced choice for tailgating, camping and light RV use, where one balanced machine beats a specialist. The lower-middle of the shortlist is where it sits on price. Pair it with a soft start air conditioner and it can serve a small travel trailer as well.",
    "specs": [
      "3200 W running, 3800 W starting",
      "59 dBA at 23 ft, Eco Mode",
      "47 lb, L5-30R and 5-20R outlets"
    ],
    "pros": [
      "Balanced output and noise rating",
      "Two-year warranty with lifetime support",
      "Eco Mode and USB ports included",
      "Under 3 percent distortion"
    ],
    "cons": [
      "Twist-lock 30 amp needs an adapter",
      "Surge reserve is modest at 600 watts"
    ],
    "bestFor": "Campers wanting a balanced mix of output, quiet and outlets at a middle price."
  },
  {
    "id": "best-budget-inverter-generator-4",
    "rank": 4,
    "badge": "Best Tank and Runtime",
    "name": "Oxseryn Power Equipment 4400 Watts Inverter Generator, Open Frame",
    "price": "$279.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51q0ZK+ixwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FQ5BB6SS?tag=rvgearlab-amz-20",
    "description": "Oxseryn lists 4400 peak and 3400 running watts, a running figure tied for the highest in this guide, in an open-frame inverter layout that keeps cost down. The 2 gallon tank has a fuel gauge, and runtime is quoted at up to 14 hours at 25 percent load with ECO mode switched on, which comfortably covers a night of lights and a refrigerator.\n\nIn comparison with the PowerSmart 3800W, it adds 200 running watts and a bigger tank at a noticeably lower price, while keeping a fuel gauge in view. The outlet layout includes two 120V AC ports, a 12V DC port and an RV port, and the unit weighs 56 pounds, a manageable carry for 3400 running watts.\n\nThe noise ceiling is under 72 dBA at 23 feet, the loosest ceiling in the group, so it fits camps where neighbors are far away or generator hours are generous. For a buyer who wants the most running watts and a long fill at a low price, and is relaxed about noise, this is a high-value place to stop.",
    "specs": [
      "3400 W running, 4400 W peak",
      "2 gallon tank, 14 hours at 25%",
      "56 lb open frame, 12V DC port"
    ],
    "pros": [
      "Highest running watts at a low price",
      "Big tank with a fuel gauge",
      "Long runtime at quarter load",
      "RV port plus two household outlets"
    ],
    "cons": [
      "Noise ceiling quoted under 72 dBA",
      "Fifty-six pounds is hard to lift"
    ],
    "bestFor": "Budget buyers who want a 2 gallon tank and a long quarter-load runtime."
  },
  {
    "id": "best-budget-inverter-generator-5",
    "rank": 5,
    "badge": "Best Entry for 30 Amp",
    "name": "Oxseryn 4400-Watts Inverter Generator, RV Ready 30A Outlet",
    "price": "$269.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51KrlC-jVkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FXLTM47G?tag=rvgearlab-amz-20",
    "description": "This Oxseryn lists the same 4400 peak and 3400 running watts as the Open Frame version, with a dedicated 30A RV port, two 120V AC ports and a 12V DC port. Lowest-cost way to reach a 3400 watt running rating and a 30 amp receptacle on a camper, and the 1000 watt surge reserve covers the start of an air conditioner with a soft start, which is the job most 30 amp trailers need done.\n\nBeside the Oxseryn Open Frame listing, it names ECO mode, overload protection, low oil shutdown and cold start technology, so its feature list names more of the protections buyers look for. A 2 gallon tank delivers up to 14 hours at 25 percent load, which carries a refrigerator and lights through a night, and the generator weighs 56 pounds.\n\nThe maker describes an EPA-compliant build, and every unit is factory tested before it ships. Over the ComJoy 2400W, it brings 1200 more running watts for a small step up in price, which is the biggest jump in capability anywhere on this shortlist. A trailer owner who needs a real 30 amp outlet on a tight budget will find it fits.",
    "specs": [
      "3400 W running, 4400 W peak",
      "30A RV port, two 120V, 12V DC",
      "2 gallon tank, 14 hours at 25%"
    ],
    "pros": [
      "Lowest-cost 30A RV receptacle here",
      "Overload and low-oil shutdowns listed",
      "Same long runtime as its sibling",
      "Cold start technology listed"
    ],
    "cons": [
      "No decibel figure in the listing",
      "No CO sensor named in the listing"
    ],
    "bestFor": "Cost-minded trailer owners who want a 30 amp port and a 3400 watt running rating."
  },
  {
    "id": "best-budget-inverter-generator-6",
    "rank": 6,
    "badge": "Best Light Load Pick",
    "name": "ComJoy 2400W Portable Inverter Generator",
    "price": "$249.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UuRyfKa5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HF3LLQ34?tag=rvgearlab-amz-20",
    "description": "The ComJoy lists 2400 peak and 2200 rated watts from a 97.7cc four-stroke engine, with total harmonic distortion under 3 percent. A 200 watt reserve means the unit suits steady electronics, lights and a small fridge rather than motor loads. At 41.8 pounds with an ergonomic handle, it is the lightest of the larger picks here.\n\nVersus the Oxseryn RV Ready, it trades 1200 running watts for a noise claim of 63 dBA at 23 feet at a 25 percent load, plus a lower weight and the lowest price in the group. Eco Mode adjusts engine speed to the load to stretch each tank, which helps on a small fuel supply.\n\nOverload and short-circuit protection, a carbon monoxide sensor and low-oil shut-off are listed, and parallel capability lets a second unit join later. The generator ships without oil, so add engine oil before first use. Campers with modest loads who want the cheapest, lightest way into an inverter generator and a spare unit to pair later.",
    "specs": [
      "2200 W rated, 2400 W peak",
      "63 dBA at 23 ft, 25% load",
      "41.8 lb, parallel ready"
    ],
    "pros": [
      "Lightest and cheapest in this guide",
      "CO sensor and low-oil shut-off listed",
      "Parallel ready for later growth",
      "Clean power under 3 percent distortion"
    ],
    "cons": [
      "Too light for a rooftop air conditioner",
      "Ships without oil in the crankcase"
    ],
    "bestFor": "Tent and van campers who power lights, a fan and chargers with a light carry."
  }
];

export const howWeEvaluated = [
  {
    "title": "Starting versus running watts",
    "description": "Every pick was read for its starting and running figures, and the surge reserve between them was worked out. A larger reserve means more room to start a motor while other loads run. Listings and product specs were the source, with no bench testing."
  },
  {
    "title": "Waveform and distortion",
    "description": "Total harmonic distortion was noted where stated, since a low figure matters for laptops, televisions and chargers. Listings that quote under 2 or under 3 percent earned credit. Inverter output was weighed against the open-frame layout where a listing used that term."
  },
  {
    "title": "Runtime and its basis",
    "description": "Run times were read together with the load they were quoted at, because a quarter-load claim and a half-load claim cannot be compared directly. Tank size in gallons was weighed alongside. Picks that gave both load and tank earned more credit."
  },
  {
    "title": "Outlets and expansion",
    "description": "We compared the receptacles on each panel, especially the 30 amp type, and noted parallel capability. A TT-30R fits an RV cord directly while a twist-lock needs an adapter. USB and 12V ports were counted as a convenience."
  },
  {
    "title": "Weight, noise and price position",
    "description": "Weight, listed decibel figures and the distance behind them were weighed after output. Price was used to order the shortlist and to describe the step between picks, never to print a figure. Warranty terms were recorded where stated."
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
    "subheading": "By Largest Starting Load",
    "intro": "The biggest motor you run sets the starting watts you need, so match the pick to that load.",
    "table": {
      "headers": [
        "Largest load",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Electronics, lights and a small fridge",
          "ComJoy 2400W",
          "2200 rated watts with a 200 watt reserve at the lowest weight"
        ],
        [
          "Moderate motors and power tools",
          "PowerSmart 3800W",
          "A 600 watt reserve with a 59 dBA claim"
        ],
        [
          "Rooftop air conditioner on a trailer",
          "EFURDEN 4300W",
          "A 1000 watt gap between starting and running figures"
        ],
        [
          "Air conditioner on a tight budget",
          "Oxseryn RV Ready",
          "1000 watt reserve and a 30A port at a low cost"
        ],
        [
          "Propane as a backup fuel",
          "WEN 3600W",
          "Dual fuel with a 700 watt gasoline reserve"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "The shortlist spans a wide spread, and each band shows what the step above it buys.",
    "table": {
      "headers": [
        "Price band",
        "Recommended pick",
        "What the step buys"
      ],
      "rows": [
        [
          "Entry of this shortlist",
          "ComJoy 2400W",
          "A light, quiet unit for electronics"
        ],
        [
          "Lower mid of this shortlist",
          "Oxseryn RV Ready",
          "Five times the surge reserve and a 30A port"
        ],
        [
          "Mid of this shortlist",
          "PowerSmart 3800W",
          "A 59 dBA claim and a two-year warranty"
        ],
        [
          "Upper mid of this shortlist",
          "EFURDEN 4300W",
          "A bigger starting figure and under 2 percent distortion"
        ],
        [
          "Top of this shortlist",
          "WEN 3600W",
          "Propane, CO Watchdog and a TT-30R outlet"
        ]
      ]
    }
  },
  {
    "subheading": "Light Carry vs Raw Output",
    "intro": "Weight and watts pull in opposite directions in this group, so decide which one you lift more often.",
    "cards": [
      {
        "label": "Light carry",
        "text": "ComJoy 2400W at 41.8 lb, EFURDEN 4300W at 45 lb and PowerSmart 3800W at 47 lb are the easiest to load. Small tanks keep the weight down, and the engines slow under Eco Mode, which saves fuel and noise."
      },
      {
        "label": "Raw output",
        "text": "Oxseryn Open Frame and Oxseryn RV Ready weigh 56 lb and deliver 3400 running watts from a 2 gallon tank. The mechanism is a larger fuel load and a bigger engine, which brings the most steady power and the longest quarter-load run."
      }
    ],
    "note": "Choose EFURDEN 4300W if you lift the unit often, and an Oxseryn model if the unit lives in a bay."
  },
  {
    "subheading": "By Runtime Basis",
    "intro": "Runtime claims use different loads, so line up the basis before you trust the longest figure.",
    "table": {
      "headers": [
        "What you need",
        "Recommended pick",
        "What the listing says"
      ],
      "rows": [
        [
          "Longest quarter-load run per fill",
          "Oxseryn Open Frame",
          "Up to 14 hours at 25 percent load on 2 gallons"
        ],
        [
          "Same quarter-load run with a 30A port",
          "Oxseryn RV Ready",
          "14 hours at 25 percent load and a 30A port"
        ],
        [
          "A harder half-load test",
          "EFURDEN 4300W",
          "Up to 5 hours at 50 percent load on 1.1 gallons"
        ],
        [
          "Long storage and propane range",
          "WEN 3600W",
          "Gasoline or propane on one set of controls"
        ],
        [
          "Eco Mode on light loads",
          "ComJoy 2400W",
          "Eco Mode adjusts speed, with a 25 percent load noise figure"
        ]
      ]
    }
  },
  {
    "subheading": "For Trailer Use Specifically",
    "intro": "Trailer use at 30 amps needs the right receptacle and enough surge reserve for the air conditioner.",
    "cards": [
      {
        "label": "Look for",
        "text": "A TT-30R or dedicated 30A port, a surge reserve near 1000 watts and a running figure above your steady loads, as on the EFURDEN 4300W. A soft start on the air conditioner lowers the surge you need."
      },
      {
        "label": "In this comparison",
        "text": "WEN 3600W has the TT-30R receptacle, EFURDEN 4300W and Oxseryn RV Ready carry the 1000 watt reserve, and PowerSmart 3800W uses an L5-30R twist-lock that needs an adapter."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "The step up buys fuel flexibility, a better noise claim or a bigger reserve.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want propane, a CO sensor and a TT-30R outlet in one unit with WEN 3600W, or a larger starting margin and lower distortion with EFURDEN 4300W. Both give more headroom for a 30 amp rig."
      },
      {
        "label": "Save if",
        "text": "You run light loads and carry the unit often. ComJoy 2400W is the cheapest and lightest, and Oxseryn RV Ready gives the most running watts for the lowest cost if weight is no issue."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Starting Watts Versus Running Watts",
    "explanation": "Starting watts, also called surge or peak, are the burst an engine can deliver for a few seconds, while running watts are what it can hold continuously. A motor such as an air conditioner compressor draws a spike several times its running draw when it starts. If the generator cannot cover that spike, it bogs down or trips. Look for both numbers in the listing and size your steady loads against the running figure only."
  },
  {
    "criterion": "Summing Your Own Load",
    "explanation": "Add the running watts of everything that will be on together. Then add the largest single starting surge, usually the air conditioner. As an example, steady loads of 1800 watts plus a 3000 watt starting surge point to a generator with at least 4800 starting watts and about 2000 running. Use the nameplate on your own appliance, because published surge figures for the same air conditioner vary widely and a soft start lowers the number substantially."
  },
  {
    "criterion": "Surge Reserve Margin",
    "explanation": "Subtract running watts from starting watts and you have the reserve the engine can spend on motor starts. EFURDEN 4300W and both Oxseryn models carry 1000 watts, the WEN 3600W carries 700, the PowerSmart 3800W carries 600 and the ComJoy 2400W carries only 200. A small reserve suits electronics, a large one suits compressors. Compare reserve across picks before comparing headline wattage."
  },
  {
    "criterion": "Waveform and Distortion",
    "explanation": "Inverter generators build a clean sine wave and list its total harmonic distortion as a percentage. Under 3 percent is the common claim, and under 2 percent is better. A lower figure protects laptops, televisions and CPAP machines from heat and noise on the line. Find the number in the title or bullets, because words such as clean power or pure sine wave on their own leave you guessing."
  },
  {
    "criterion": "Runtime Basis and Tank Size",
    "explanation": "A run time of 14 hours at 25 percent load and a run time of 5 hours at 50 percent load describe different tests, and the second is a harder one. Engine fuel burn rises with demand, so the same unit will run much shorter at a heavier load. Divide the tank size by the load you really carry rather than trusting the longest claim. A bigger tank adds weight, so match it to how often you refill."
  },
  {
    "criterion": "Outlet Type and Expansion",
    "explanation": "An RV cord ends in a TT-30 plug that fits a TT-30R receptacle directly, while an L5-30R twist-lock needs a small adapter. An outlet labeled 30 amp only tells you the plug shape and says nothing about whether the engine can start your air conditioner. Parallel capability lets you add a matched second unit later, though the kit is often sold separately. Count the outlets you need before you buy."
  }
];

export const faq = [
  {
    "q": "What is the difference between starting and running watts?",
    "a": "Running watts are what the generator can deliver continuously, while starting watts are a short burst for the first seconds of a motor start. An engine rated at 3400 running and 4400 starting can hold 3400 all evening and spend the extra 1000 only briefly. Size the steady load against the running figure and the biggest motor against the starting figure."
  },
  {
    "q": "How do I add up my RV loads before buying?",
    "a": "List every item that runs at once and add their running watts from the nameplates. Then find the largest starting surge, usually the air conditioner, and add that on top. Leave some headroom so the engine does not run flat out all night. A soft start device on the air conditioner can lower the surge figure by a large amount."
  },
  {
    "q": "Can a 4400-watt generator start any RV air conditioner?",
    "a": "Not automatically. Starting wattage varies a lot between air conditioners and the published surge numbers disagree across sources. The nameplate on your own unit is the figure to trust, and a soft start helps. A generator with a 1000 watt reserve, such as the EFURDEN 4300W, has better odds than one with a 200 watt reserve."
  },
  {
    "q": "Is an inverter generator worth it over an open-frame one?",
    "a": "For camping the answer is usually yes. An inverter produces cleaner power for electronics and slows its engine at part load, which saves fuel and noise. Open-frame units give more watts per unit of cost, which is why the Oxseryn picks here appeal to budget buyers who run mostly household loads."
  },
  {
    "q": "Why do the two Oxseryn listings look so similar?",
    "a": "Both state 4400 peak and 3400 running watts, a 2 gallon tank, 14 hours at 25 percent load and a weight of 56 pounds. They differ in the details each listing names: one adds a fuel gauge and a decibel ceiling, the other names overload protection, low oil shutdown and cold start technology. Pick on the features you care about."
  },
  {
    "q": "What does total harmonic distortion mean for my electronics?",
    "a": "It measures how far the generator's output wave strays from a perfect sine wave, as a percentage. Lower is cleaner, and the picks here list under 2 or under 3 percent. Laptops, televisions and CPAP machines tolerate that range well. Higher distortion can make sensitive power supplies run hot over time."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "href": "/power-electrical/best-budget-inverter-generator-with-co-shutoff",
    "title": "6 Best Budget Inverter Generators with CO Shutoff in 2026"
  },
  {
    "href": "/power-electrical/best-budget-45-amp-rv-converter",
    "title": "6 Best Budget 45 Amp RV Converters in 2026"
  },
  {
    "href": "/power-electrical/best-budget-35-amp-rv-converter",
    "title": "6 Best Budget 35 Amp RV Converters in 2026"
  }
];
