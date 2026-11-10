export const guideSlug = "best-12-volt-lithium-battery-for-rv";
export const guideTitle = "6 Best 12V Lithium Batteries for RVs in 2026";
export const metaTitle = "Best 12V Lithium Batteries for RVs (2026)";
export const metaDescription = "Compare the best 12V lithium RV batteries from 100Ah to 280Ah, sized for house power, with real BMS limits, dimensions, and cold-charge protection noted.";
export const mainKeyword = "best 12v lithium battery for rv";
export const introParagraphs = [
  "Most RV house systems run at 12 volts, so the real decision is not voltage but capacity, physical size, and how much current the battery can actually deliver to your inverter and DC loads.",
  "This roundup spans 100Ah to 280Ah 12V LiFePO4 options, ranked on usable energy per dollar, BMS headroom, fit in common battery trays, and how clearly each listing documents low-temperature charge protection."
];
export const lastUpdated = "2026-10-01";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41TU+jCREwL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-12-volt-lithium-battery-for-rv-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "LiTime 12V 200Ah Mini LiFePO4 Battery with Bluetooth",
    "price": "$629.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TU+jCREwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GS8FRF41?tag=rvgearlab-20",
    "description": "The LiTime 200Ah Mini earns the top spot because it solves the problem most RV owners hit first: there is only one battery tray. At 13.11 x 6.93 x 10.04 inches it drops into a Group 31 sized space while holding 200Ah, and its 200A continuous BMS rating is high enough to run a typical 2000W inverter without tripping.\n\nThe ELEFAST 200Ah ranked below it costs roughly half as much, but its listing describes a 100A BMS in one bullet and 200A in another, and it does not claim the same compact Group 31 fit. The LiTime also adds a documented low-temperature charge cutoff and app monitoring, so you are paying for space savings and clearer specs rather than more raw capacity.\n\nThis is the pick for trailers and vans where tray space, not budget, is the constraint. The caveat is cost: if you have room for a larger box, the ECO-WORTHY 280Ah gives more energy for less money.",
    "specs": [
      "200Ah, 2560Wh",
      "Fits Group 31 trays",
      "200A continuous, 1000A surge"
    ],
    "pros": [
      "Packs 200Ah into a Group 31 sized footprint",
      "200A BMS can feed a 2000W class inverter",
      "Bluetooth app shows charge level and voltage",
      "Low-temp charge cutoff built into the BMS"
    ],
    "cons": [
      "Priciest 200Ah option in this roundup",
      "44.5 lbs is a real two-handed lift",
      "Needs a lithium charger to wake Bluetooth first time"
    ],
    "bestFor": "RVers replacing a single Group 31 tray with double capacity"
  },
  {
    "id": "best-12-volt-lithium-battery-for-rv-2",
    "rank": 2,
    "badge": "Best 200Ah Value",
    "name": "ELEFAST 12V 200Ah LiFePO4 Battery with Bluetooth",
    "price": "$329.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OQF+XE2SL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DLXXRHHL?tag=rvgearlab-20",
    "description": "The ELEFAST 200Ah is the value route to 200Ah from a single 12V battery. Its BMS tolerates a 600A inrush for one second, which helps when a compressor fridge or pump kicks on, and the listing states a full charge in about five hours from a 20A lithium charger.\n\nCompared with the LiTime Mini above it, you save a large chunk of money but give up a confirmed compact footprint and a single, consistent BMS rating. Its listing mentions both 100A and 200A figures, so treat sustained output as 100A until the seller confirms otherwise. It still beats the Dumfume 150Ah below on capacity per dollar.\n\nBuy it if you want 200Ah and have a roomy battery bay. If you plan to run a 2000W inverter hard, confirm the continuous BMS current with ELEFAST before ordering.",
    "specs": [
      "200Ah, 2560Wh",
      "600A one-second inrush",
      "UL, IEC tested cells"
    ],
    "pros": [
      "Around half the price of the top pick",
      "Handles 600A startup bursts from motors",
      "Listing cites UL and IEC testing",
      "Low-temperature charging protection included"
    ],
    "cons": [
      "Listing is inconsistent on 100A vs 200A BMS",
      "No compact Group 31 size claim"
    ],
    "bestFor": "budget-minded owners wanting 200Ah from one battery"
  },
  {
    "id": "best-12-volt-lithium-battery-for-rv-3",
    "rank": 3,
    "badge": "Best High Capacity",
    "name": "ECO-WORTHY EnergyRock 12V 280Ah Metal Case LiFePO4",
    "price": "$529.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4152WgrC3+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G79296WJ?tag=rvgearlab-20",
    "description": "The ECO-WORTHY EnergyRock is the largest single battery in this 12V roundup at 280Ah. Its metal enclosure ships with four mounting feet, so it bolts down inside a compartment without a separate battery box, and an onboard switch disconnects the output for storage or maintenance.\n\nIt offers more capacity than either 200Ah pick above for a price between them, but it will not fit a Group 24 or Group 31 tray, which is why it ranks behind the LiTime Mini. It also documents recommended solar controller settings (14.6V absorption, float disabled), a detail the cheaper picks below leave out.\n\nIt suits larger rigs replacing two or three lead-acid batteries with one unit. Measure your bay first, because this is a box-sized battery, not a drop-in.",
    "specs": [
      "280Ah, 3584Wh",
      "Steel case with mounting feet",
      "200A BMS, on/off switch"
    ],
    "pros": [
      "Metal case mounts directly without a battery box",
      "Built-in switch cuts output for storage",
      "Bluetooth plus low-temp charge cutoff",
      "Listing gives exact charge controller settings"
    ],
    "cons": [
      "Large and heavy for small trailers",
      "May ship in several separate packages"
    ],
    "bestFor": "fifth wheels and motorhomes with a dedicated battery bay"
  },
  {
    "id": "best-12-volt-lithium-battery-for-rv-4",
    "rank": 4,
    "badge": "Best Mid-Size",
    "name": "Dumfume 12V 150Ah LiFePO4 Battery, IP65",
    "price": "$185.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Jx-+XkGEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G8HHKDMQ?tag=rvgearlab-20",
    "description": "The Dumfume 150Ah fills the gap between 100Ah and 200Ah. It stores 1920Wh in a 10.04 x 7.68 x 9.84 inch case at 41 lbs, and its listing rates it for over 4,000 cycles to 80 percent capacity.\n\nIt costs well under the 200Ah picks above, but its 100A BMS caps continuous draw near 1,280W, so it cannot run the same inverter loads as the LiTime or ECO-WORTHY. It also lacks the Bluetooth app that the BUKNUWO below includes at a lower price.\n\nIt is a good fit for campers running lights, a fan, and a 12V fridge over a long weekend. The listing does not state a specific low-temperature charge cutoff, so winter users should look elsewhere.",
    "specs": [
      "150Ah, 1920Wh",
      "10.04 x 7.68 x 9.84 in",
      "100A BMS"
    ],
    "pros": [
      "50 percent more energy than a 100Ah battery",
      "Compact enough for many Group 31 boxes",
      "4,000+ cycles to 80 percent capacity"
    ],
    "cons": [
      "100A BMS limits inverter size to about 1000W",
      "No Bluetooth monitoring",
      "Low-temp protection is vaguely described"
    ],
    "bestFor": "weekend campers who outgrew 100Ah but lack space for 200Ah"
  },
  {
    "id": "best-12-volt-lithium-battery-for-rv-5",
    "rank": 5,
    "badge": "Best 100Ah with App",
    "name": "BUKNUWO 12V 100Ah LiFePO4 Battery with Bluetooth",
    "price": "$142.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41yLVdD9T3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GHJJN1K5?tag=rvgearlab-20",
    "description": "The BUKNUWO 100Ah is the entry point for owners swapping out one lead-acid battery. It weighs 22 lbs, adds Bluetooth monitoring of state of charge, current, and power, and carries a 5-year warranty, which is unusual at this price.\n\nCompared with the Dumfume 150Ah above, you give up a third of the capacity but gain the app and a longer stated warranty. Against the POERUNI below, it costs a little more mainly for that Bluetooth monitoring.\n\nIt suits travel trailers that mostly camp with hookups and want a lighter, longer-lasting battery. Plan on two in parallel if you intend to run a microwave or coffee maker off an inverter.",
    "specs": [
      "100Ah, 1280Wh, 22 lbs",
      "Bluetooth 5.0 app",
      "5-year warranty"
    ],
    "pros": [
      "Bluetooth app shows charge, current, and power",
      "5-year warranty at a low price",
      "Automatic high and low temperature cutoff",
      "Light 22 lbs body is easy to install"
    ],
    "cons": [
      "100A BMS limits inverter to about 1000W",
      "ABS case is only lightly water resistant"
    ],
    "bestFor": "first-time lithium upgraders replacing one Group 24 or 27"
  },
  {
    "id": "best-12-volt-lithium-battery-for-rv-6",
    "rank": 6,
    "badge": "Best Budget",
    "name": "POERUNI 12V 100Ah LiFePO4 Battery",
    "price": "$128.09",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41uF1pLqN5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FVWPVB33?tag=rvgearlab-20",
    "description": "The POERUNI 100Ah is the cheapest way into 12V LiFePO4 here. It is a sealed 24 lb battery measuring 10.24 x 8.23 x 6.65 inches that can mount in any position except inverted, and the listing claims 15,000 cycles at 80 percent depth of discharge.\n\nIt ranks last because its spec sheet is thin: no BMS amp rating, no app, and only a general mention of low-temperature protection. The BUKNUWO above costs only a little more and answers those questions.\n\nIt is fine for light loads such as lights, a water pump, and phone charging. Ask the seller for the continuous current rating before pairing it with any inverter.",
    "specs": [
      "100Ah, 1280Wh, 24 lbs",
      "10.24 x 8.23 x 6.65 in",
      "Sealed, mounts any upright"
    ],
    "pros": [
      "Lowest price in this roundup",
      "Mounts in any orientation except upside down",
      "Rated 15,000 cycles at 80 percent depth"
    ],
    "cons": [
      "No Bluetooth or app monitoring",
      "BMS current rating not stated on listing",
      "Short spec sheet compared with rivals"
    ],
    "bestFor": "tight budgets needing a simple 12V lead-acid replacement"
  }
];

export const howWeEvaluated = [
  {
    "title": "Usable Energy per Dollar",
    "description": "We compared listed Ah and Wh against price, since all LiFePO4 cells deliver close to full rated capacity unlike lead-acid."
  },
  {
    "title": "BMS Current Headroom",
    "description": "We checked the continuous BMS rating against common RV inverter sizes, because a 100A BMS will shut off a 2000W inverter under load."
  },
  {
    "title": "Tray and Bay Fit",
    "description": "We weighed published dimensions against Group 24, 27, and 31 trays, the sizes most RVs ship with."
  },
  {
    "title": "Cold-Charge Protection",
    "description": "We favored listings that state a specific low-temperature charge cutoff, since charging LiFePO4 below freezing damages cells."
  },
  {
    "title": "Documentation Quality",
    "description": "We noted inconsistent or missing specs, such as conflicting BMS figures, as a ranking penalty."
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
    "subheading": "By Daily Energy Use",
    "table": {
      "headers": [
        "Your typical day",
        "Approx. use",
        "Pick"
      ],
      "rows": [
        [
          "Lights, pump, phone charging",
          "300 to 600Wh",
          "POERUNI 12V 100Ah"
        ],
        [
          "Add a 12V fridge and fans",
          "600 to 1,200Wh",
          "BUKNUWO 12V 100Ah"
        ],
        [
          "Weekend boondocking with a fridge and TV",
          "1,200 to 1,800Wh",
          "Dumfume 12V 150Ah"
        ],
        [
          "Coffee maker or microwave via inverter",
          "2,000Wh plus",
          "Litime 12V 200Ah Mini"
        ],
        [
          "Full-time off-grid with solar",
          "3,000Wh plus",
          "ECO-WORTHY 280Ah Metal Case"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Budget",
        "Pick",
        "Why"
      ],
      "rows": [
        [
          "Under $135",
          "POERUNI 12V 100Ah",
          "Cheapest 100Ah"
        ],
        [
          "$135 to $150",
          "BUKNUWO 12V 100Ah",
          "100Ah plus app and 5-year warranty"
        ],
        [
          "$150 to $200",
          "Dumfume 12V 150Ah",
          "150Ah for mid-size loads"
        ],
        [
          "$300 to $350",
          "ELEFAST 12V 200Ah",
          "200Ah from one battery"
        ],
        [
          "$500 to $650",
          "ECO-WORTHY 280Ah Metal Case or Litime 12V 200Ah Mini",
          "Most capacity or most compact 200Ah"
        ]
      ]
    }
  },
  {
    "subheading": "One Big Battery vs Two Smaller Ones",
    "cards": [
      {
        "label": "One large battery",
        "text": "A single high-capacity battery means fewer cables and no balancing between units. In this roundup that is the Litime 12V 200Ah Mini, ELEFAST 12V 200Ah, and ECO-WORTHY 280Ah Metal Case."
      },
      {
        "label": "Two 100Ah in parallel",
        "text": "Two matched 100Ah batteries double both capacity and BMS current, and fit two smaller trays. The BUKNUWO 12V 100Ah and POERUNI 12V 100Ah work well paired with an identical second unit."
      }
    ],
    "note": "Most single-tray RVs should buy one larger battery; choose two 100Ah units only if you have two trays or want redundancy."
  },
  {
    "subheading": "By Inverter Size",
    "table": {
      "headers": [
        "Inverter",
        "Continuous draw at 12V",
        "Pick"
      ],
      "rows": [
        [
          "Up to 1000W",
          "About 85A",
          "BUKNUWO 12V 100Ah"
        ],
        [
          "1000W, budget",
          "About 85A",
          "POERUNI 12V 100Ah"
        ],
        [
          "1500W to 2000W",
          "125 to 170A",
          "Litime 12V 200Ah Mini"
        ],
        [
          "2000W, large bank",
          "About 170A",
          "ECO-WORTHY 280Ah Metal Case"
        ]
      ]
    }
  },
  {
    "subheading": "For Replacing a Factory Group 24 Battery Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A 100Ah battery near 10.2 x 6.6 x 8.3 inches with a stated low-temp charge cutoff, plus a converter that has a lithium charging mode."
      },
      {
        "label": "In this comparison",
        "text": "The BUKNUWO 12V 100Ah is the closest drop-in, and its app helps you see whether your old converter is actually reaching full charge."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You run an inverter above 1000W or have just one tray. The Litime 12V 200Ah Mini puts 200Ah and a 200A BMS in a Group 31 footprint."
      },
      {
        "label": "Save if",
        "text": "You camp mostly on hookups. The POERUNI 12V 100Ah or BUKNUWO 12V 100Ah covers overnight 12V loads for a fraction of the cost."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match Capacity to Real Use",
    "explanation": "Amp-hours times 12.8 volts gives watt-hours, the energy you can actually spend. A 100Ah LiFePO4 battery gives about 1,280Wh, enough for lights, a pump, and a 12V fridge overnight. Add up your devices' watts multiplied by hours used per day, then add 20 percent. Check the listing for both Ah and Wh and make sure they agree."
  },
  {
    "criterion": "Check the BMS Continuous Rating",
    "explanation": "The battery management system limits how much current the battery can deliver. A 100A BMS supports roughly a 1000W inverter, while a 200A BMS supports about 2000W, and exceeding it makes the battery shut off mid-use. Look for the word continuous next to the amp figure, not just a surge or peak number."
  },
  {
    "criterion": "Measure the Tray Before Buying",
    "explanation": "RV trays are usually Group 24, 27, or 31, and many larger lithium batteries simply will not fit. A battery that does not fit forces you to build a new mount, which adds cost and risk. Compare the listing's length, width, and height in inches to your tray, and check terminal height under any hold-down bar."
  },
  {
    "criterion": "Confirm Low-Temperature Charge Cutoff",
    "explanation": "LiFePO4 cells must not be charged below about 32F, or lithium plating permanently reduces capacity. A BMS with a low-temp cutoff blocks charging until the battery warms up. Look for a specific temperature in the listing, such as charging pauses below 32F, instead of vague cold-weather wording."
  },
  {
    "criterion": "Plan for Your Charger",
    "explanation": "Older RV converters use lead-acid profiles that may undercharge lithium or never reach full. You may need a converter with a lithium mode, typically 14.4 to 14.6V absorption with float disabled or low. Check your converter's model label and the battery listing's recommended charge voltage before ordering."
  },
  {
    "criterion": "Value Monitoring and Warranty",
    "explanation": "Bluetooth monitoring shows state of charge, which a voltmeter cannot read reliably on flat-voltage lithium. A 5-year warranty also signals a seller that expects the battery to last. Look for a named app and a stated warranty term rather than a generic satisfaction promise."
  }
];

export const faq = [
  {
    "q": "Will a 12V lithium battery work with my RV's existing converter?",
    "a": "Often, but not always well. Many older converters charge at lead-acid voltages that leave lithium partly charged. Check for a lithium mode, or plan to swap the converter for one that charges at 14.4 to 14.6V."
  },
  {
    "q": "What is the most common mistake when switching to lithium?",
    "a": "Buying a battery whose BMS cannot handle the inverter. A 100A battery will shut off when a 2000W inverter runs a microwave. Match BMS continuous amps to your largest load."
  },
  {
    "q": "Is a 200Ah battery worth it over two 100Ah batteries?",
    "a": "If you have one tray, yes, because a compact 200Ah like the LiTime Mini fits where two 100Ah batteries will not. With two trays, two 100Ah batteries cost less and double the BMS current too."
  },
  {
    "q": "How do I install a 12V lithium battery in my RV?",
    "a": "Turn off shore power and the battery disconnect, remove the old battery negative cable first, then positive. Install the lithium battery, connect positive then negative, and set your converter or solar controller to a lithium profile."
  },
  {
    "q": "Can I store my RV with the lithium battery connected over winter?",
    "a": "Parasitic loads can drain it, so use the disconnect switch or remove the battery. Store it around 50 to 60 percent charged in a place above freezing, and do not charge it while it is cold."
  },
  {
    "q": "Can I mix a new lithium battery with my old lead-acid battery?",
    "a": "No. The two chemistries charge at different voltages and the lead-acid battery will drag the system down. Replace the whole bank and only parallel identical lithium batteries."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Lithium RV Battery",
    "href": "/power-electrical/best-lithium-rv-battery"
  },
  {
    "title": "Best 300Ah Lithium RV Battery",
    "href": "/power-electrical/best-300ah-lithium-rv-battery"
  },
  {
    "title": "Best Group 24 Lithium RV Battery",
    "href": "/power-electrical/best-group-24-lithium-rv-battery"
  },
  {
    "title": "Best RV Converter For Lithium Batteries",
    "href": "/power-electrical/best-rv-converter-for-lithium-batteries"
  }
];
