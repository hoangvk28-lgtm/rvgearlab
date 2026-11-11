export const guideSlug = "best-lithium-rv-battery";
export const guideTitle = "6 Best Lithium RV Batteries in 2026";
export const metaTitle = "Best Lithium RV Battery in 2026";
export const metaDescription = "Our pick of the best lithium RV batteries for 2026, ranked on BMS protection, cold-weather safety, fit, warranty, and how well each drops into a real RV.";
export const mainKeyword = "best lithium rv battery";
export const introParagraphs = [
  "Swapping lead-acid for LiFePO4 is the single biggest upgrade most RV owners make to their 12V system, but the battery itself is only half the decision. A good lithium pick has to fit your existing battery box, protect itself in freezing weather, and cooperate with the converter and solar controller already installed in your rig.",
  "This roundup ranks lithium RV batteries on overall quality rather than the lowest sticker price. We compared BMS protections, low-temperature behavior, monitoring, case size, and warranty terms across 100Ah drop-ins and 300Ah-class house banks, based on published specs and buyer feedback, so you can match a battery to how you actually camp."
];
export const lastUpdated = "2026-10-01";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41Oi4nZc5hL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-lithium-rv-battery-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Power Queen 12V 125Ah LiFePO4 Battery, Group 27, Bluetooth",
    "price": "$264.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Oi4nZc5hL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F4WS1BGY?tag=rvgearlab-amz-20",
    "description": "The Power Queen 125Ah earns the top spot because it solves the most common RV lithium problem: you have a Group 27 battery box and want more than 100Ah without rebuilding the tray. At 12.13 x 6.69 x 8.31 inches it drops into a standard Group 27 space while adding roughly 320Wh over a typical 100Ah lithium of the same footprint, and the built-in Bluetooth 5.0 app reports state of charge, current, power, and cell temperature.\n\nCompared with the ECO-WORTHY 314Ah ranked just below it, the Power Queen carries far less capacity, but it weighs a fraction as much and needs no new mounting space. The ECO-WORTHY is the better pick for a dedicated boondocking bank; the Power Queen is the better pick for the typical travel trailer that wants a clean, low-risk swap. It also lists compliance with ABYC E-13 and UN38.3, documentation many budget brands skip.\n\nBest for weekend and seasonal campers upgrading from lead-acid who want monitoring and a credible safety paper trail. The caveat: it is an energy storage battery only, so it should not double as an engine starter, and confirm your converter has a lithium charge profile before relying on it.",
    "specs": [
      "125Ah in a Group 27 case",
      "Bluetooth 5.0 app",
      "UN38.3, ABYC E-13"
    ],
    "pros": [
      "Extra 25Ah fits the same Group 27 box",
      "Bluetooth app shows SOC, current, and temperature",
      "Lists ABYC E-13 and UN38.3 compliance",
      "Rated up to 15,000 cycles"
    ],
    "cons": [
      "Not a starting battery, house loads only",
      "Group 27 is too long for Group 24 trays"
    ],
    "bestFor": "Most RV owners replacing one or two lead-acid house batteries"
  },
  {
    "id": "best-lithium-rv-battery-2",
    "rank": 2,
    "badge": "Best High Capacity",
    "name": "ECO-WORTHY 12V 314Ah LiFePO4 Battery, Bluetooth, SOC Display",
    "price": "$499.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41I1aG07jHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DS3Y9TBQ?tag=rvgearlab-amz-20",
    "description": "The ECO-WORTHY 314Ah is the pick for RVers who want one battery to do the job of a three-battery bank. It stores 4019Wh behind a 200A BMS, so a 2000W-class inverter can run a microwave or coffee maker without tripping the battery, and an on-case LED display shows charge level even when your phone is out of range of the Bluetooth app.\n\nIt ranks second behind the Power Queen 125Ah only because it asks more of the rig: the case measures 16.3 x 8.46 x 10.24 inches and weighs 60.4 lbs, so many travel trailer tongue boxes cannot take it. Against the VATRER 300Ah below it, the ECO-WORTHY offers slightly more capacity and a lower price, but it protects itself in the cold by cutting charging at 19.4°F instead of warming the cells.\n\nBest for dry campers who have floor space inside a basement compartment and want maximum runtime per dollar of quality hardware. Caveat: a single large battery means one point of failure, and the charging cutoff means winter campers still need a heated space or a heated model.",
    "specs": [
      "314Ah, 4019Wh",
      "200A BMS",
      "Charge cutoff at 19.4°F"
    ],
    "pros": [
      "Over 4kWh replaces three 100Ah batteries",
      "Built-in SOC display plus Bluetooth app",
      "Buzzer alerts you to battery faults",
      "200A BMS handles a 2000W inverter"
    ],
    "cons": [
      "60.4 lbs is a two-person lift",
      "16.3 inch case needs a large compartment"
    ],
    "bestFor": "Boondockers running a fridge, inverter, and fans off-grid"
  },
  {
    "id": "best-lithium-rv-battery-3",
    "rank": 3,
    "badge": "Best for Cold Weather",
    "name": "VATRER 12.8V 300Ah Self-Heating LiFePO4 Battery, App Monitoring",
    "price": "$599.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ntErG5hKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FKYCXTMP?tag=rvgearlab-amz-20",
    "description": "The VATRER 300Ah is here for one reason the other large batteries cannot match: a built-in self-heating function. LiFePO4 cells should not be charged below freezing, so standard batteries simply refuse solar or converter charge on a cold morning. This one warms its cells first, which keeps a solar setup useful in shoulder-season and winter camping.\n\nIt sits third because it costs about $100 more than the ECO-WORTHY 314Ah while offering slightly less capacity. The tradeoff is clear: the ECO-WORTHY stops charging when it gets cold, while the VATRER keeps working. Next to the LiFePO4 100Ah picks below it, it is in a different league for runtime, with 5000 rated cycles at 100% depth of discharge and an app that logs cycle count so you can track wear.\n\nBest for RVers who camp in freezing temperatures without shore power. Caveat: the heater draws energy to run, so plan for some capacity loss on cold nights, and the case is large enough that you should measure before ordering.",
    "specs": [
      "300Ah with self-heating",
      "App shows cycle count",
      "5000 cycles at 100% DOD"
    ],
    "pros": [
      "Self-heating lets it charge in freezing weather",
      "App tracks voltage, temperature, and cycle count",
      "Rated 5000 cycles at full depth",
      "Grade A cells with full BMS protection"
    ],
    "cons": [
      "Highest price among the 300Ah picks",
      "Brand advises against series golf cart use"
    ],
    "bestFor": "Four-season campers and ski-trip RVers"
  },
  {
    "id": "best-lithium-rv-battery-4",
    "rank": 4,
    "badge": "Best Warranty Support",
    "name": "LiTime 12V 100Ah Group 31 LiFePO4 Deep Cycle Battery",
    "price": "$302.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/313zzaBzrHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B084DB36KW?tag=rvgearlab-amz-20",
    "description": "The LiTime 100Ah Group 31 is the conservative choice: a plain, well-supported 100Ah drop-in from one of the larger LiFePO4 brands. It weighs 22.05 lbs, uses a 100A BMS, and comes with a five-year warranty plus 24-hour technical support, which matters more than any spec if a battery fails mid-trip.\n\nCompared with the VATRER 300Ah above it, you get a third of the capacity, but you can build a bank gradually by adding identical units. Against the MARSENERGY 100Ah ranked below, the LiTime costs more and lacks Bluetooth, but its larger Group 31 case and established support network are the reason it ranks higher for overall confidence.\n\nBest for RVers who want two simple, identical batteries and a brand they can reach after the sale. Caveat: with no app or display, you will want a shunt-based battery monitor to see real state of charge.",
    "specs": [
      "100Ah, Group 31 case",
      "22.05 lbs",
      "5-year warranty"
    ],
    "pros": [
      "Five-year warranty with 24-hour tech support",
      "Light enough at 22 lbs to lift alone",
      "Group 31 size fits common RV trays",
      "Covered by product liability insurance"
    ],
    "cons": [
      "No Bluetooth monitoring",
      "Pricier than other 100Ah drop-ins"
    ],
    "bestFor": "Owners who value a long warranty from an established brand"
  },
  {
    "id": "best-lithium-rv-battery-5",
    "rank": 5,
    "badge": "Best Group 24 Fit",
    "name": "MARSENERGY 12V 100Ah LiFePO4 Battery, Bluetooth, Group 24",
    "price": "$239.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51pTrg7kZKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FVYKHP94?tag=rvgearlab-amz-20",
    "description": "The MARSENERGY 100Ah is the pick for smaller rigs whose battery tray only takes a Group 24 battery. It measures 10.16 x 8.46 x 6.54 inches and weighs 21 lbs, so it drops into the same box as the lead-acid it replaces, and it adds Bluetooth monitoring that the LiTime above it lacks.\n\nIt ranks below the LiTime Group 31 because its support and certification documentation are thinner, but it ranks above the Mighty Max because it adds an app, a waterproof case, and cycle ratings of 4500 at full depth versus Mighty Max's 2500. The brand also notes cells formulated with low-temperature additives, though you should still treat freezing charging as off-limits.\n\nBest for pop-up, teardrop, and small travel trailer owners who want monitoring without moving the battery. Caveat: a 100A BMS limits a single battery to roughly a 1000W inverter.",
    "specs": [
      "Group 24 size, 21 lbs",
      "Bluetooth monitoring",
      "Low-temp cell additives"
    ],
    "pros": [
      "True Group 24 dimensions for small trays",
      "Bluetooth app included at a mid price",
      "Fully waterproof case suits tongue mounts",
      "Rated 4500 cycles at full depth"
    ],
    "cons": [
      "100A limit caps inverter size near 1000W",
      "Fewer published certifications than Power Queen"
    ],
    "bestFor": "Small trailers and pop-ups with a Group 24 tray"
  },
  {
    "id": "best-lithium-rv-battery-6",
    "rank": 6,
    "badge": "Best Basic Drop-In",
    "name": "Mighty Max ML100-12LI 12V 100Ah Lithium Battery, Group 30H",
    "price": "$259.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41WJbgAG+DL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09C283FQ9?tag=rvgearlab-amz-20",
    "description": "The Mighty Max ML100-12LI rounds out the list as the no-frills option: a 100Ah LiFePO4 battery in a 12.99 x 6.77 x 8.66 inch Group 30H case with internal thread terminals and a BMS covering high voltage, low voltage, high current, and short circuit protection. It can be wired with up to four identical batteries.\n\nCompared with the MARSENERGY above it, you give up Bluetooth and a much longer cycle rating; Mighty Max lists 2500 cycles where most picks here claim 4000 or more. Its warranty is one year, against five years for the LiTime and MARSENERGY. Those are the reasons it ranks last for quality even though it is a perfectly usable battery.\n\nBest for RVers who want the simplest possible swap and plan to add a separate monitor. Caveat: it ships minimally charged, so give it a full charge before your first trip, and no cables or mounting hardware are included.",
    "specs": [
      "100Ah, Group 30H case",
      "Internal thread terminals",
      "Up to 4 in series or parallel"
    ],
    "pros": [
      "Simple drop-in with no app to set up",
      "Supports up to four identical batteries",
      "Group 30H fits larger RV trays",
      "Widely stocked brand for quick replacement"
    ],
    "cons": [
      "Only a one-year warranty",
      "Rated 2500 cycles, lowest here"
    ],
    "bestFor": "Budget-minded owners who want a plain lead-acid replacement"
  }
];

export const howWeEvaluated = [
  {
    "title": "BMS Current vs Real RV Loads",
    "description": "Compared each BMS continuous rating against common RV inverter sizes, since a 100A BMS caps a single 12V battery near 1000W while 200A supports a 2000W unit."
  },
  {
    "title": "Cold-Weather Charging Behavior",
    "description": "Checked whether each battery cuts off charging below freezing, at what listed temperature, or warms its own cells, since charging LiFePO4 below 32°F damages it."
  },
  {
    "title": "Physical Fit in RV Battery Boxes",
    "description": "Matched listed dimensions to BCI group sizes (24, 27, 30H, 31) so a pick can actually replace the lead-acid already in a tongue box or compartment."
  },
  {
    "title": "Warranty and Documentation",
    "description": "Weighted warranty length, published certifications like UN38.3, and support access, since a 10-year lifespan claim means little without a reachable seller."
  },
  {
    "title": "Monitoring Without Extra Hardware",
    "description": "Gave credit for built-in Bluetooth or an on-case display that shows state of charge, since lithium voltage stays flat and makes a voltmeter a poor fuel gauge."
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
    "subheading": "By How You Camp",
    "intro": "Match capacity to the way you actually use the rig, not the biggest number on the page.",
    "table": {
      "headers": [
        "Your camping style",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Campgrounds with hookups, occasional dry night",
          "Power Queen 125Ah",
          "125Ah covers lights, fans, and the water pump overnight in a stock box"
        ],
        [
          "Multi-day boondocking with an inverter",
          "ECO-WORTHY 314Ah",
          "4019Wh and a 200A BMS run a fridge and microwave"
        ],
        [
          "Winter or ski trips without shore power",
          "VATRER 300Ah Self-Heating",
          "Self-heating lets solar keep charging below freezing"
        ],
        [
          "Pop-up or teardrop with a small tray",
          "MARSENERGY 100Ah",
          "True Group 24 size at 21 lbs"
        ],
        [
          "Build a bank gradually over seasons",
          "LiTime 100Ah Group 31",
          "Add identical Group 31 units with warranty backing"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick",
        "What you get"
      ],
      "rows": [
        [
          "Under $250",
          "MARSENERGY 100Ah",
          "Bluetooth and Group 24 fit for about $240"
        ],
        [
          "$250 to $300",
          "Power Queen 125Ah",
          "125Ah, Bluetooth, and ABYC E-13 listing for about $265"
        ],
        [
          "$250 to $310, no app needed",
          "LiTime 100Ah Group 31",
          "Five-year warranty and established support"
        ],
        [
          "$500 to $600",
          "ECO-WORTHY 314Ah",
          "Highest capacity per dollar among the large picks"
        ],
        [
          "About $600",
          "VATRER 300Ah Self-Heating",
          "Pay the extra for self-heating"
        ]
      ]
    }
  },
  {
    "subheading": "One Large Battery vs Several 100Ah Batteries",
    "cards": [
      {
        "label": "One large battery",
        "text": "A single 300Ah-class battery uses one BMS and one set of cables, so there are fewer connections to balance and corrode. The downside is weight over 60 lbs and one point of failure. In this roundup: ECO-WORTHY 314Ah and VATRER 300Ah Self-Heating."
      },
      {
        "label": "Several 100Ah-class batteries",
        "text": "Identical smaller batteries wired in parallel can each be lifted by one person, fit standard trays, and let you spread cost over time. You need matched units and equal-length cables. In this roundup: Power Queen 125Ah, LiTime 100Ah Group 31, MARSENERGY 100Ah, and Mighty Max ML100-12LI."
      }
    ],
    "note": "Most travel trailer owners should start with one or two 100Ah-class batteries like the Power Queen 125Ah; choose a single large battery only if you have the floor space and want 300Ah or more."
  },
  {
    "subheading": "By Monitoring Preference",
    "table": {
      "headers": [
        "How you want to track charge",
        "Recommended pick",
        "Notes"
      ],
      "rows": [
        [
          "Glance at the battery itself",
          "ECO-WORTHY 314Ah",
          "On-case SOC display plus app"
        ],
        [
          "Phone app with cycle history",
          "VATRER 300Ah Self-Heating",
          "App logs cycle count and temperature"
        ],
        [
          "Phone app on a small battery",
          "MARSENERGY 100Ah",
          "Bluetooth on a Group 24 drop-in"
        ],
        [
          "Separate shunt monitor already installed",
          "LiTime 100Ah Group 31",
          "No app to duplicate your existing gauge"
        ],
        [
          "Cheapest possible, add monitor later",
          "Mighty Max ML100-12LI",
          "Plain BMS, pair with a shunt"
        ]
      ]
    }
  },
  {
    "subheading": "For Solar Boondocking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A BMS rated at least 150A to 200A if you run an inverter, low-temperature charge protection or self-heating so cold mornings do not damage cells, and enough capacity to cover two cloudy days. Set your solar controller to a LiFePO4 profile with equalization disabled."
      },
      {
        "label": "In this comparison",
        "text": "The ECO-WORTHY 314Ah is the strongest solar boondocking pick in warm and mild weather because of its 4019Wh and 200A BMS. Switch to the VATRER 300Ah Self-Heating if your trips regularly see overnight frost."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You camp in freezing weather or run high-draw appliances off an inverter. The VATRER 300Ah Self-Heating adds heating and the ECO-WORTHY 314Ah adds a 200A BMS and 4kWh, both of which change what your rig can do off-grid."
      },
      {
        "label": "Save if",
        "text": "You mostly stay at hookup sites and only need overnight power. The MARSENERGY 100Ah or Mighty Max ML100-12LI gives you the lithium weight savings and depth of discharge without paying for capacity you will not use."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "BMS Continuous Current Rating",
    "explanation": "The battery management system sets how many amps the battery will deliver before shutting itself off. That matters because inverter draw scales fast: a 1000W load pulls roughly 85A to 100A from a 12V battery, so a 100A BMS is at its limit while a 200A BMS has headroom for a 2000W unit. Look for the continuous BMS figure in the title or bullets, and ignore short surge numbers when sizing an inverter."
  },
  {
    "criterion": "Low-Temperature Charge Protection",
    "explanation": "LiFePO4 cells can be permanently damaged if they are charged below freezing, even though they can discharge in the cold. A battery with low-temperature cutoff simply stops accepting charge, while a self-heating battery warms its cells first so solar keeps working. Check the listing for the exact cutoff temperature, often 32°F or 19.4°F, or the words self-heating."
  },
  {
    "criterion": "Physical Group Size",
    "explanation": "RV battery trays and tongue boxes are built around BCI group sizes such as 24, 27, and 31, and a battery that is half an inch too long will not close the lid. Lithium lets you fit more amp hours in the same box, which is why a 125Ah Group 27 battery is worth seeking out. Measure your tray and compare it to the listed length, width, and height rather than trusting the word drop-in."
  },
  {
    "criterion": "Charging Compatibility with Your Converter",
    "explanation": "Many older RV converters are built for lead-acid and hold the battery at a float voltage that never fully charges lithium. A LiFePO4 battery wants roughly 14.2V to 14.6V absorption with float disabled or low. Check your converter label for a lithium mode before buying, and budget for a lithium-capable converter if it lacks one."
  },
  {
    "criterion": "Warranty Length and Support",
    "explanation": "Most listings promise a 10-year life, but the warranty is the only part of that promise you can enforce. Five years is common among established brands, while some budget batteries carry only one year. Read the warranty line in the listing and look for a named support channel, not just a lifespan claim."
  },
  {
    "criterion": "Built-In Monitoring",
    "explanation": "Lithium voltage stays nearly flat from 90% to 20% charge, so a simple voltmeter tells you almost nothing about remaining capacity. Bluetooth apps or on-case displays read the BMS and show true state of charge and cell temperature. If a battery has neither, plan on adding a shunt-based monitor, which adds cost to the cheaper picks."
  }
];

export const faq = [
  {
    "q": "Will a lithium RV battery work with my existing converter?",
    "a": "It will usually power the rig, but many older converters charge with a lead-acid profile that never fully charges LiFePO4 and may float it at the wrong voltage. Check for a lithium setting on the converter label. If there is none, a lithium-compatible converter or charger is the usual fix."
  },
  {
    "q": "Can I charge a lithium RV battery from my tow vehicle's alternator?",
    "a": "Not directly in most cases. Lithium can pull far more current than lead-acid, which can overheat an alternator, so a DC-DC charger between the vehicle and the RV battery is the standard solution. It also delivers the correct lithium charge voltage."
  },
  {
    "q": "Is the Power Queen 125Ah worth it over a basic 100Ah drop-in?",
    "a": "If you have a Group 27 tray, yes for most owners. You get 25% more capacity in the same box plus Bluetooth monitoring, for a modest price increase over plain 100Ah batteries like the Mighty Max."
  },
  {
    "q": "What is the biggest mistake when switching to lithium?",
    "a": "Mixing a new lithium battery with old lead-acid batteries in the same bank. The two chemistries charge at different voltages, so remove the lead-acid batteries entirely or isolate them, and update your solar controller and converter settings to a LiFePO4 profile."
  },
  {
    "q": "How should I store a lithium RV battery over winter?",
    "a": "Charge it to roughly 50% to 70%, disconnect all loads or use the battery switch so parasitic draws do not drain it, and keep it somewhere above freezing if you plan to charge it. Check the charge every couple of months."
  },
  {
    "q": "Do I need a heated lithium battery?",
    "a": "Only if you charge in freezing temperatures, such as solar charging at a winter campsite. If the battery lives in a heated space or you only camp in mild weather, a standard battery with low-temperature charge cutoff is enough."
  }
];

export const relatedGuides = [
  {
    "title": "Best Lithium RV Battery for the Money",
    "href": "/power-electrical/best-lithium-rv-battery-for-the-money"
  },
  {
    "title": "Best Value Lithium RV Battery",
    "href": "/power-electrical/best-value-lithium-rv-battery"
  },
  {
    "title": "Best Heated Lithium RV Battery",
    "href": "/power-electrical/best-heated-lithium-rv-battery"
  },
  {
    "title": "Best RV Converter for Lithium Batteries",
    "href": "/power-electrical/best-rv-converter-for-lithium-batteries"
  }
];
