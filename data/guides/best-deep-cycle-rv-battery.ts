export const guideSlug = "best-deep-cycle-rv-battery";
export const guideTitle = "6 Best Deep Cycle RV Batteries in 2026";
export const metaTitle = "Best Deep Cycle RV Batteries in 2026";
export const metaDescription = "We compared lithium and AGM deep cycle RV batteries in group 24 and 27 sizes by usable energy, cold charging protection, weight, and true cost per cycle.";
export const mainKeyword = "best deep cycle rv battery";
export const introParagraphs = [
  "A deep cycle battery is the one that runs your RV when it is not plugged in: lights, water pump, furnace fan, and the fridge control board. Unlike the starting battery in your tow vehicle, it is built to be drained and recharged over and over, and choosing between lithium and AGM is now the biggest decision in this category.",
  "We compared group 24 and group 27 deep cycle batteries from Power Queen, Renogy, CYCLENBATT, Mighty Max, RVLithTime, and Marxon, mixing LiFePO4 and AGM so you can see the real tradeoffs side by side. Our evaluation looked at usable energy rather than just rated amp-hours, low-temperature charging protection, published cycle life, weight, and warranty terms, along with buyer feedback."
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
    "id": "best-deep-cycle-rv-battery-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Power Queen 12V 125Ah LiFePO4 Group 27 Battery with Bluetooth",
    "price": "$264.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Oi4nZc5hL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F4WS1BGY?tag=rvgearlab-amz-20",
    "description": "Power Queen fits 125Ah of LiFePO4 into a BCI group 27 case (12.13 x 6.69 x 8.31 inches), which is about 320Wh more than a typical 100Ah lithium battery of the same size. Built-in Bluetooth 5.0 lets you check state of charge, voltage, current, and temperature from your phone.\n\nIt ranks first because it gives the most usable energy per tray slot in this roundup: lithium can be drained much deeper than the Renogy AGM, so this one battery delivers more than double the AGM's practical capacity. Against the CYCLENBATT below, you pay more but get 25Ah extra and app monitoring.\n\nBest for travel trailer and fifth-wheel owners upgrading from lead acid who want one drop-in battery. The caveat is that it is not a starting battery, and you should confirm your converter or solar controller has a lithium charging profile.",
    "specs": [
      "12V 125Ah, group 27 size",
      "Bluetooth 5.0 app",
      "Up to 15,000 cycles claimed"
    ],
    "pros": [
      "125Ah fits a standard group 27 box",
      "Bluetooth app shows charge, current, and temperature",
      "About 320Wh more than a 100Ah lithium",
      "Lists ABYC E-13 and UN38.3 compliance"
    ],
    "cons": [
      "Energy storage only, cannot start engines",
      "Costs more than a 100Ah lithium"
    ],
    "bestFor": "Trailer owners wanting maximum energy in a group 27 tray"
  },
  {
    "id": "best-deep-cycle-rv-battery-2",
    "rank": 2,
    "badge": "Best AGM",
    "name": "Renogy 12V 100Ah Deep Cycle AGM Battery",
    "price": "$174.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31soCn59teL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075RFXHYK?tag=rvgearlab-amz-20",
    "description": "Renogy's 100Ah AGM is the lead acid benchmark in this list, with a sealed design, a 1100A five-second maximum discharge, and a published discharge range from -4F to 140F. It supports unlimited series connections and up to four in parallel.\n\nIt ranks second because AGM still solves problems lithium does not: it charges in cold weather without a heater and works with older converters that lack a lithium setting. Compared with the Power Queen above, though, it offers far less usable energy and weighs much more, which is the real cost of choosing lead acid.\n\nBest for owners who camp in freezing weather or do not want to upgrade their charging system. The caveat is runtime: treat it as roughly 50Ah usable if you want it to last.",
    "specs": [
      "12V 100Ah sealed AGM",
      "Discharge rated -4F to 140F",
      "1100A 5-second max discharge"
    ],
    "pros": [
      "Sealed and maintenance-free, no watering",
      "Discharges in temperatures down to -4F",
      "Works with nearly any stock RV converter",
      "Supports up to 4 in parallel"
    ],
    "cons": [
      "Only about 50Ah usable for long life",
      "Much heavier than a lithium of equal capacity"
    ],
    "bestFor": "Cold-weather campers and rigs with older converters"
  },
  {
    "id": "best-deep-cycle-rv-battery-3",
    "rank": 3,
    "badge": "Best Lithium Value",
    "name": "CYCLENBATT 12V 100Ah LiFePO4 Group 27 Battery with Low-Temp Protection",
    "price": "$209.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+kGuAsSsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F9P5261G?tag=rvgearlab-amz-20",
    "description": "CYCLENBATT's group 27 LiFePO4 measures about 12.09 x 6.65 x 8.19 inches and includes a low-temperature cutoff: the BMS stops charging when cells drop below 32F and resumes at 40F. It comes with a five-year warranty.\n\nIt ranks third because it brings the essential lithium safety feature for RVs, cold-charge protection, at a lower price than the Power Queen. The tradeoff is 25Ah less capacity and no app, so you need a separate battery monitor to see state of charge accurately.\n\nBest for budget-conscious owners making their first lithium switch who camp in shoulder seasons. The caveat is that a cutoff only prevents damage; it does not warm the battery, so solar will not charge it on cold mornings until the battery warms above 40F.",
    "specs": [
      "12V 100Ah, group 27 fit",
      "Charge cutoff below 32F",
      "5-year warranty"
    ],
    "pros": [
      "Stops charging below 32F to protect cells",
      "5-year warranty is long for the price",
      "About 66% lighter than lead acid",
      "Series up to 48V for larger systems"
    ],
    "cons": [
      "No Bluetooth monitoring on this model",
      "Less capacity than the Power Queen 125Ah"
    ],
    "bestFor": "Budget lithium upgraders who still want cold-charge protection"
  },
  {
    "id": "best-deep-cycle-rv-battery-4",
    "rank": 4,
    "badge": "Best Dual Purpose AGM",
    "name": "Mighty Max MM-G27M 12V 100Ah Group 27M Dual Purpose AGM",
    "price": "$229.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UFwbwCKDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7M82Q7K?tag=rvgearlab-amz-20",
    "description": "The MM-G27M is a group 27M dual purpose AGM rated 100Ah, with 850 marine cranking amps and 170 minutes of reserve capacity. Mighty Max publishes up to 700 cycles at 50% depth of discharge, and the 12.06 x 6.62 x 8.25 inch case weighs 61.7 pounds.\n\nIt sits behind the CYCLENBATT because 700 cycles is a fraction of what LiFePO4 promises, but it can crank an engine, which no lithium pick here can. Against the Renogy AGM above, it adds a cranking rating and a published cycle count, while the Renogy offers a wider published cold discharge range.\n\nBest for Class C and van owners who want one sealed battery able to handle starting duties too. The caveat is lifespan: for a dedicated house battery, lithium gives far more total cycles for the money.",
    "specs": [
      "12V 100Ah, group 27M",
      "850 MCA, 170 RC",
      "Up to 700 cycles at 50% DoD"
    ],
    "pros": [
      "Can start an engine and run house loads",
      "Publishes 700 cycles at 50% depth of discharge",
      "Spill-proof ABS case resists heat and impact",
      "Backed by a two-year limited warranty"
    ],
    "cons": [
      "61.7 lbs is heavy compared with lithium",
      "Fewer cycles than any lithium pick"
    ],
    "bestFor": "Motorhomes needing one sealed battery for starting and house use"
  },
  {
    "id": "best-deep-cycle-rv-battery-5",
    "rank": 5,
    "badge": "Best Budget",
    "name": "RVLithTime 12V 100Ah Group 24 LiFePO4 Deep Cycle Battery",
    "price": "$109.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51auKKcYtqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HCY8FRX3?tag=rvgearlab-amz-20",
    "description": "RVLithTime's group 24 LiFePO4 is the cheapest battery in this roundup and still includes a 100A BMS with overcharge, over-discharge, short circuit, and low-temperature charging protection. The maker rates it for up to 15,000 cycles.\n\nIt ranks fifth because the listing is thin: there are no published dimensions, weight, or warranty term, which the CYCLENBATT above spells out clearly. In return it costs about half as much as the Power Queen, making it the easiest way to try lithium in a small trailer.\n\nBest for pop-up and small travel trailer owners on a tight budget. The caveat is the sparse spec sheet; confirm fit with the seller before ordering, and note that a 100A BMS limits you to roughly a 1000W inverter.",
    "specs": [
      "12V 100Ah, group 24",
      "100A BMS",
      "Low-temp charge protection"
    ],
    "pros": [
      "Lowest price in this roundup",
      "Low-temperature charging protection included",
      "Group 24 size fits small trailer boxes",
      "Rated for up to 15,000 cycles"
    ],
    "cons": [
      "Sparse spec sheet with no listed dimensions",
      "No Bluetooth or listed warranty term"
    ],
    "bestFor": "Small trailers wanting cheap lithium in a group 24 box"
  },
  {
    "id": "best-deep-cycle-rv-battery-6",
    "rank": 6,
    "badge": "Best for Single-Battery Rigs",
    "name": "Marxon Group 27M Dual Purpose Battery, 12V 92Ah, 800 CCA",
    "price": "$229.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41n3Oxf2T7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FDQN5377?tag=rvgearlab-amz-20",
    "description": "Marxon's group 27M is a 92Ah dual purpose lead-calcium battery with 800 CCA and 175 minutes of reserve capacity, measuring 12.05 x 6.61 x 8.19 inches. It ships with two terminal sizes and is backed by 24-month replacement through a US office.\n\nIt ranks last because it is the least capable house battery here, but it suits rigs where one battery must start the engine and run accessories. Against the Mighty Max MM-G27M, it trades 8Ah of capacity for a slightly lower price and a no-spill design rated to 45 degrees of tilt.\n\nBest for owners of compact rigs with only one battery tray. The caveat is that dual purpose batteries wear faster under daily deep discharge, so this is not the pick for frequent off-grid camping.",
    "specs": [
      "12V 92Ah, group 27M",
      "800 CCA, 175 RC",
      "24-month replacement"
    ],
    "pros": [
      "800 CCA covers engine starting duties",
      "No-spill design handles tilting to 45 degrees",
      "Includes two terminal sizes for easier wiring",
      "US office handles 24-month replacements"
    ],
    "cons": [
      "Lowest amp-hour rating in this roundup",
      "Lead-calcium dual purpose, not a true deep cycle"
    ],
    "bestFor": "Truck campers and Class B vans with room for one battery"
  }
];

export const howWeEvaluated = [
  {
    "title": "Usable Energy, Not Just Amp-Hours",
    "description": "We compared lithium at about 80 to 100% usable capacity against AGM at about 50%, since rated amp-hours alone make the two chemistries look closer than they are."
  },
  {
    "title": "Cold Charging Protection",
    "description": "For every LiFePO4 pick we checked for a low-temperature charge cutoff, because charging lithium below freezing can permanently damage cells."
  },
  {
    "title": "Fit and Weight",
    "description": "We matched each battery to group 24 or 27 trays and compared weight, which affects tongue weight and installation."
  },
  {
    "title": "Published Cycle Life and Warranty",
    "description": "We looked for real cycle-life statements and warranty terms, giving more credit to specific numbers than vague lifetime claims."
  },
  {
    "title": "Job Match",
    "description": "We separated pure deep cycle house batteries from dual purpose units that can also start an engine."
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
    "subheading": "By Camping Style",
    "table": {
      "headers": [
        "How you camp",
        "Recommended pick"
      ],
      "rows": [
        [
          "Off-grid weekends with solar",
          "Power Queen 125Ah"
        ],
        [
          "Winter or shoulder season trips",
          "Renogy 100Ah AGM"
        ],
        [
          "First lithium upgrade on a budget",
          "CYCLENBATT 100Ah"
        ],
        [
          "Mostly hookups, occasional overnight",
          "RVLithTime 100Ah"
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
          "Around $110",
          "RVLithTime 100Ah"
        ],
        [
          "$170 to $210",
          "Renogy 100Ah AGM or CYCLENBATT 100Ah"
        ],
        [
          "$230",
          "Mighty Max MM-G27M or Marxon 27M"
        ],
        [
          "About $265",
          "Power Queen 125Ah"
        ]
      ]
    }
  },
  {
    "subheading": "LiFePO4 vs AGM",
    "cards": [
      {
        "label": "LiFePO4 lithium",
        "text": "Lithium iron phosphate cells managed by a BMS. Can use most of its rated capacity, weighs about a third as much, and lasts thousands of cycles, but must not be charged below freezing. In this roundup: Power Queen 125Ah, CYCLENBATT 100Ah, RVLithTime 100Ah."
      },
      {
        "label": "AGM lead acid",
        "text": "Sealed lead acid with absorbed electrolyte. Cheap upfront, tolerant of cold charging, and compatible with any converter, but only about half its capacity is usable and cycle life is far shorter. In this roundup: Renogy 100Ah AGM, Mighty Max MM-G27M, Marxon 27M."
      }
    ],
    "note": "Most RVers should default to LiFePO4 for house power unless they regularly charge in freezing temperatures or must start an engine."
  },
  {
    "subheading": "By Tray Size",
    "table": {
      "headers": [
        "Your battery box",
        "Recommended pick"
      ],
      "rows": [
        [
          "Group 24",
          "RVLithTime 100Ah"
        ],
        [
          "Group 27, want most capacity",
          "Power Queen 125Ah"
        ],
        [
          "Group 27, lithium on a budget",
          "CYCLENBATT 100Ah"
        ],
        [
          "Group 27M, needs cranking power",
          "Mighty Max MM-G27M"
        ]
      ]
    }
  },
  {
    "subheading": "For Monitoring Without Extra Hardware Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A built-in Bluetooth BMS that reports state of charge, current, and temperature, since RV voltage panels are inaccurate for lithium."
      },
      {
        "label": "In this comparison",
        "text": "The Power Queen 125Ah is the only pick with built-in Bluetooth, which saves buying a separate shunt monitor for a single-battery setup."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You camp off grid often and want the most energy per tray, which makes the Power Queen 125Ah worth it over the CYCLENBATT 100Ah."
      },
      {
        "label": "Save if",
        "text": "Your trips are short and mostly at hookups, where the RVLithTime 100Ah or Renogy 100Ah AGM covers overnight needs."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Usable Capacity by Chemistry",
    "explanation": "Rated amp-hours describe total storage, but you can only use part of it without harming the battery. LiFePO4 handles 80 to 100% depth of discharge, while lead acid like AGM should stay above about 50%. Compare usable amp-hours, not the label number, so a 100Ah lithium roughly equals a 200Ah AGM in practice."
  },
  {
    "criterion": "Low-Temperature Charge Protection",
    "explanation": "Charging LiFePO4 below 32F can plate lithium on the cells and permanently reduce capacity. A BMS with a low-temperature cutoff blocks charging until the battery warms up. Look for an explicit statement like charging stops below 32F in the listing; if it is missing, assume the battery has no protection."
  },
  {
    "criterion": "Charger and Converter Compatibility",
    "explanation": "Lithium wants a charge around 14.4 to 14.6V and no long float, while many older RV converters are tuned for lead acid. A mismatch can leave lithium undercharged or keep it held at a high float. Check your converter label for a lithium mode, and look for recommended charge settings in the battery listing."
  },
  {
    "criterion": "BMS Current Rating",
    "explanation": "The BMS limits how much current the battery can supply, which caps the size of inverter you can run. A 100A BMS supports roughly 1000 to 1200W at 12V, while bigger loads like a microwave or air conditioner need more. Find the BMS amp rating in the specs and compare it with your largest AC load."
  },
  {
    "criterion": "Group Size and Weight",
    "explanation": "RV trays are usually group 24 or 27, and lithium often fits more capacity into the same space. Weight matters too: a group 27 AGM can weigh around 60 pounds versus about 22 to 30 pounds for lithium. Check listed dimensions against your box and factor weight into tongue load."
  },
  {
    "criterion": "Starting vs House Duty",
    "explanation": "Deep cycle lithium batteries are energy storage only and are not designed to start engines. Dual purpose AGM batteries list CCA or MCA ratings and can do both. If the battery must also crank an engine, choose a model with a cranking rating; otherwise a pure deep cycle battery will last longer."
  }
];

export const faq = [
  {
    "q": "Can I drop a lithium deep cycle battery into my RV's old battery box?",
    "a": "Usually, if the dimensions fit, since group 24 and 27 lithium batteries match lead acid footprints. Check that your converter, solar controller, and any alternator charging can handle lithium settings. Some older converters will work but never fully charge the battery."
  },
  {
    "q": "What is the biggest mistake when buying a deep cycle RV battery?",
    "a": "Comparing rated amp-hours across chemistries. A 100Ah AGM gives about 50Ah of daily usable energy, while a 100Ah lithium gives most of its rating. Buyers often under-size lead acid banks or overpay for capacity they do not need."
  },
  {
    "q": "Is lithium worth it over AGM for an RV?",
    "a": "If you camp off grid regularly, usually yes, because lithium lasts thousands of cycles, weighs far less, and delivers about twice the usable energy per rated amp-hour. If you mostly use hookups or camp in freezing weather without heated batteries, AGM's lower price and cold charging can make more sense."
  },
  {
    "q": "How do I install a new deep cycle battery in my RV?",
    "a": "Turn off the battery disconnect and unplug shore power. Disconnect the negative cable first, then the positive, swap the battery, and reconnect positive first and negative last. Tighten terminals firmly, secure the hold-down, and set your charger to the correct battery profile."
  },
  {
    "q": "Can I mix lithium and AGM batteries in one bank?",
    "a": "No. They have different charge voltages and discharge curves, so one will overwork while the other is undercharged. Replace the whole bank with one chemistry, ideally identical batteries of the same age."
  },
  {
    "q": "How do I store a deep cycle RV battery between trips?",
    "a": "Charge AGM fully and keep it topped up every couple of months. Store lithium at around 50 to 70% charge with the battery disconnected, since BMS electronics can slowly drain it. Keep lithium above freezing if you plan to charge it during storage."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Agm RV Battery in 2026",
    "href": "/power-electrical/best-agm-rv-battery"
  },
  {
    "title": "Best Lithium RV Battery in 2026",
    "href": "/power-electrical/best-lithium-rv-battery"
  },
  {
    "title": "Best Group 24 Lithium RV Battery in 2026",
    "href": "/power-electrical/best-group-24-lithium-rv-battery"
  },
  {
    "title": "Best RV Battery For The Money in 2026",
    "href": "/power-electrical/best-rv-battery-for-the-money"
  }
];
