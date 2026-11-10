export const guideSlug = "best-lithium-rv-battery-on-amazon";
export const guideTitle = "6 Best Lithium RV Batteries on Amazon in 2026";
export const metaTitle = "Best Lithium RV Battery on Amazon (2026)";
export const metaDescription = "The 12V 100Ah LiFePO4 batteries RV owners buy most on Amazon, compared on case size, Bluetooth, cold cutoff, and warranty so you can pick a real drop-in.";
export const mainKeyword = "best lithium rv battery on amazon";
export const introParagraphs = [
  "Search Amazon for a lithium RV battery and you will get hundreds of 12V 100Ah listings that look nearly identical: same capacity, same 1280Wh, same 100A BMS, and similar prices. The differences that matter are the details sellers bury in the bullet points, like case dimensions, low-temperature cutoffs, and how many years the warranty actually runs.",
  "This guide narrows the field to the 100Ah format, the most common single-battery RV upgrade, and compares six popular Amazon listings head to head. We weighed size, monitoring, cold-weather behavior, and support based on published specs and buyer feedback, so you can tell which listing fits your tray and your trips."
];
export const lastUpdated = "2026-10-01";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41wiC3GOhWL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-lithium-rv-battery-on-amazon-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "WattCycle 12V 100Ah Mini LiFePO4 Battery, Bluetooth, Group 24",
    "price": "$209.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41wiC3GOhWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSKBLH8L?tag=rvgearlab-20",
    "description": "The WattCycle Mini earns the top spot by combining the three things most Amazon shoppers want in a 100Ah battery: a small case, Bluetooth, and a real warranty. It measures 9 x 5.4 x 8.2 inches and weighs 20.94 lbs, and the app lets you rename each battery, which is handy when you run two in parallel and want to see both.\n\nThe KeepKnow 100Ah ranked third offers similar Bluetooth and cutoff features for about $80 less, but the WattCycle's case is notably smaller, and its five-year assurance comes with a stated 24-hour support response. Compared with the HQST at number two, it adds an app at the cost of a higher price.\n\nBest for travel trailer owners who may add a second battery later and want both to fit where one lead-acid used to sit. Caveat: like every 100Ah pick here, the 100A BMS limits one battery to roughly a 1000W inverter.",
    "specs": [
      "9 x 5.4 x 8.2 in, 20.94 lbs",
      "Bluetooth with custom name",
      "-4°F to 158°F range"
    ],
    "pros": [
      "Small enough to fit two in a Group 24 tray space",
      "Bluetooth app lets you rename each battery",
      "Low-temperature shutoff protects the cells",
      "Five-year assurance with 24-hour response"
    ],
    "cons": [
      "Pricier than the KeepKnow with similar specs",
      "100A BMS caps inverter use near 1000W"
    ],
    "bestFor": "Owners who want a compact, monitored 100Ah drop-in"
  },
  {
    "id": "best-lithium-rv-battery-on-amazon-2",
    "rank": 2,
    "badge": "Best No-App Pick",
    "name": "HQST 12V 100Ah LiFePO4 Battery, Group 22NF, LED Meter",
    "price": "$159.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41gOwWXBgML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CR5L3LGS?tag=rvgearlab-20",
    "description": "The HQST 100Ah takes a different approach to monitoring: instead of an app, it has an LED meter on the case, so you can check charge without pairing a phone. It uses a compact Group 22NF case, weighs 21 lbs, and its BMS suspends charging below 23°F and discharging below 5°F.\n\nIt ranks second behind the WattCycle because an app gives richer data like current draw, but it ranks above the KeepKnow for its longer support commitment and clear published temperature thresholds. Against the LiTime Xtra-Mini, it delivers similar size and protection at about half the price.\n\nBest for owners who check their battery in the compartment and do not want another app. Caveat: HQST notes it is not suitable for golf carts, and the meter is only visible if the battery is mounted where you can see it.",
    "specs": [
      "Group 22NF size, 21 lbs",
      "On-case LED meter",
      "Charge stops below 23°F"
    ],
    "pros": [
      "LED meter shows charge without a phone",
      "Charging pauses below 23°F automatically",
      "Builds up to 16 batteries in a bank",
      "10-year quality and service commitment"
    ],
    "cons": [
      "No Bluetooth for remote checks",
      "4000 cycle rating is modest for the price tier"
    ],
    "bestFor": "RVers who prefer a glance-at-the-battery gauge"
  },
  {
    "id": "best-lithium-rv-battery-on-amazon-3",
    "rank": 3,
    "badge": "Best Price",
    "name": "KeepKnow 12V 100Ah Mini LiFePO4 Battery, Bluetooth, Group 24",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tGlYRZolL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H29DMVQB?tag=rvgearlab-20",
    "description": "The KeepKnow Mini is the budget standout in this lineup: Bluetooth monitoring, a Group 24 case of 10.42 x 6.61 x 8.23 inches, and 20.94 lbs for about $130. It lists 4000 cycles at 100% depth and a five-year warranty serviced from a US warehouse.\n\nCompared with the HQST and WattCycle above it, it is the cheapest way to get an app. The reason it ranks third is its cold-weather spec: the listing says charging is blocked below 0°F, while most cells should not be charged below about 32°F, so you should not rely on the BMS alone in the cold.\n\nBest for summer and shoulder-season campers who want monitored lithium for the least money. Caveat: if your trips see frost, keep the battery in a heated space or choose the CYCLENBATT, which cuts charging at 32°F.",
    "specs": [
      "Group 24 size, 20.94 lbs",
      "Bluetooth via QR code",
      "Charge cutoff below 0°F"
    ],
    "pros": [
      "Bluetooth monitoring for about $130",
      "Group 24 case at under 21 lbs",
      "Lists three charging methods with settings",
      "US warehouse for warranty service"
    ],
    "cons": [
      "Charge cutoff at 0°F is too low for LiFePO4",
      "Newer brand with a shorter track record"
    ],
    "bestFor": "Shoppers who want Bluetooth at the lowest price"
  },
  {
    "id": "best-lithium-rv-battery-on-amazon-4",
    "rank": 4,
    "badge": "Best Compact Performance",
    "name": "LiTime 12V 100Ah Xtra-Mini LiFePO4 Battery, Bluetooth",
    "price": "$319.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41chqyzWomL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BXNJBFH3?tag=rvgearlab-20",
    "description": "The LiTime Xtra-Mini is the most power-dense battery in this comparison, fitting 1280Wh into a 9.02 x 5.43 x 8.19 inch Group 22NF case. It supports 100A continuous with a 500A surge, a one-hour fast recharge with a capable charger, and a Bluetooth app with a one-second discharge switch.\n\nIt ranks fourth because it costs about $320, roughly double the HQST, which is nearly the same size. What the extra money buys is the higher surge rating, a brand with wider support, and dust and moisture resistance claims backed by validation testing.\n\nBest for van and truck camper owners who need the absolute smallest 100Ah battery with strong surge capability. Caveat: most RV converters charge far slower than the one-hour figure, which depends on a high-current charger.",
    "specs": [
      "9.02 x 5.43 x 8.19 in",
      "100A continuous, 500A surge",
      "1-hour fast recharge"
    ],
    "pros": [
      "Smallest case here for a full 100Ah",
      "Handles a 500A surge for motor startups",
      "App includes a one-tap discharge switch",
      "Supports a 1-hour fast recharge"
    ],
    "cons": [
      "Costs about double most 100Ah picks",
      "Not for starting, golf carts, or jacks"
    ],
    "bestFor": "Vans and tight compartments that need maximum density"
  },
  {
    "id": "best-lithium-rv-battery-on-amazon-5",
    "rank": 5,
    "badge": "Best for Cold Mornings",
    "name": "CYCLENBATT 12V 100Ah Mini LiFePO4 Battery, Bluetooth",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41c2PJIIVDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FDQL2J9R?tag=rvgearlab-20",
    "description": "The CYCLENBATT Mini stands out for getting the cold-weather setting right. Its BMS cuts charging at 32°F and discharging at -4°F, which matches how LiFePO4 cells should be treated. It also adds Bluetooth control that lets you turn charging or discharging off from the app, and a 330A instant discharge rating.\n\nAgainst the KeepKnow, it costs about $70 more for similar size and Bluetooth, but its correct charge cutoff is the reason to pay it. It ranks below the LiTime Xtra-Mini on surge and brand reach, and above the GRNOE because of its app and smaller case.\n\nBest for campers in spring and fall who sometimes wake to frost and charge from solar. Caveat: it still will not charge below freezing, so winter users need a heated battery or a warm install location.",
    "specs": [
      "46% smaller than Group 31",
      "Charge cutoff at 32°F",
      "330A instant surge"
    ],
    "pros": [
      "Stops charging at 32°F, the correct threshold",
      "App can switch charge or discharge off",
      "330A instant discharge for startups",
      "Brand covers return costs for defects"
    ],
    "cons": [
      "Pricier than KeepKnow for similar size",
      "5000 cycle rating trails some rivals"
    ],
    "bestFor": "Shoulder-season campers who see frost"
  },
  {
    "id": "best-lithium-rv-battery-on-amazon-6",
    "rank": 6,
    "badge": "Best Group 31 Swap",
    "name": "GRNOE 12V 100Ah LiFePO4 Battery, Group 31, IP65",
    "price": "$159.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41FIs4+DwmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F9PJ5DH4?tag=rvgearlab-20",
    "description": "The GRNOE 100Ah is the straightforward Group 31 option, measuring 12.9 x 6.7 x 8.6 inches and weighing 22.48 lbs. It carries an IP65 rating, a 300A three-second burst rating, and a low-temperature discharge cutoff at -4°F.\n\nIt ranks last here because it lacks the monitoring the minis offer and its warranty is 36 months, shorter than the five years from WattCycle, KeepKnow, and CYCLENBATT. The upside is simplicity: if your rig already has a Group 31 tray, it fits without spacers.\n\nBest for owners swapping a Group 31 lead-acid who want lithium at a low price and already have a battery monitor. Caveat: GRNOE notes it must be activated with a 14.6V lithium-activation charger after delivery or after being switched off.",
    "specs": [
      "Group 31 size, 22.48 lbs",
      "300A for 3 seconds",
      "IP65 waterproof"
    ],
    "pros": [
      "Direct fit for Group 31 battery boxes",
      "IP65 rating handles splash and rain",
      "300A short burst for motor startups",
      "Low price for a full-size Group 31"
    ],
    "cons": [
      "Only a 36-month warranty",
      "No Bluetooth or display"
    ],
    "bestFor": "Owners replacing a Group 31 lead-acid on a budget"
  }
];

export const howWeEvaluated = [
  {
    "title": "Like-for-Like 100Ah Comparison",
    "description": "Limited the field to 12V 100Ah LiFePO4 listings so every pick competes on the same capacity and the real differences stand out."
  },
  {
    "title": "Case Size and Group Fit",
    "description": "Compared listed dimensions against Group 22NF, 24, and 31 trays, since the mini formats can fit two batteries where one used to go."
  },
  {
    "title": "Listed Cold-Weather Thresholds",
    "description": "Recorded each listing's exact charge cutoff temperature and marked down any that permit charging well below freezing."
  },
  {
    "title": "Monitoring Method",
    "description": "Noted whether each battery offers Bluetooth, an on-case meter, or nothing, and whether the app adds controls such as a discharge switch."
  },
  {
    "title": "Warranty Terms on the Listing",
    "description": "Compared the warranty length and support channel each seller states, since many similar listings range from three to ten years."
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
    "subheading": "By Battery Box Size",
    "table": {
      "headers": [
        "Your tray or space",
        "Recommended pick",
        "Case size"
      ],
      "rows": [
        [
          "Group 31 tray",
          "GRNOE 100Ah Group 31",
          "12.9 x 6.7 x 8.6 in"
        ],
        [
          "Group 24 tray, one battery",
          "KeepKnow 100Ah Mini",
          "10.42 x 6.61 x 8.23 in"
        ],
        [
          "Group 24 tray, room for two later",
          "WattCycle 100Ah Mini",
          "9 x 5.4 x 8.2 in"
        ],
        [
          "Very tight van compartment",
          "LiTime 100Ah Xtra-Mini",
          "9.02 x 5.43 x 8.19 in"
        ],
        [
          "Small box, no app wanted",
          "HQST 100Ah Group 22NF",
          "Group 22NF"
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
        "Key feature"
      ],
      "rows": [
        [
          "About $130",
          "KeepKnow 100Ah Mini",
          "Bluetooth at the lowest price"
        ],
        [
          "About $160",
          "HQST 100Ah Group 22NF or GRNOE 100Ah Group 31",
          "LED meter or Group 31 fit"
        ],
        [
          "About $200 to $210",
          "CYCLENBATT 100Ah Mini Bluetooth or WattCycle 100Ah Mini",
          "Correct 32°F cutoff or smallest case"
        ],
        [
          "About $320",
          "LiTime 100Ah Xtra-Mini",
          "500A surge and fast recharge"
        ]
      ]
    }
  },
  {
    "subheading": "Bluetooth App vs On-Case Meter",
    "cards": [
      {
        "label": "Bluetooth app",
        "text": "The BMS sends live voltage, current, temperature, and state of charge to your phone, so you can check the battery from inside the RV. Some apps add switches to turn charging or discharging off. In this roundup: WattCycle 100Ah Mini, KeepKnow 100Ah Mini, LiTime 100Ah Xtra-Mini, and CYCLENBATT 100Ah Mini Bluetooth."
      },
      {
        "label": "On-case meter or none",
        "text": "An LED meter shows charge at a glance without pairing anything, but only when you can see the battery. Batteries with no display need a separate shunt monitor. In this roundup: HQST 100Ah Group 22NF has a meter, and GRNOE 100Ah Group 31 has neither."
      }
    ],
    "note": "Most buyers should choose a Bluetooth model, because lithium voltage barely changes as it discharges and an app is the easiest accurate gauge."
  },
  {
    "subheading": "By Cold-Weather Exposure",
    "table": {
      "headers": [
        "Coldest charging conditions",
        "Recommended pick",
        "Listed charge cutoff"
      ],
      "rows": [
        [
          "Summer only",
          "KeepKnow 100Ah Mini",
          "Below 0°F"
        ],
        [
          "Occasional frost",
          "CYCLENBATT 100Ah Mini Bluetooth",
          "32°F"
        ],
        [
          "Cool fall mornings",
          "HQST 100Ah Group 22NF",
          "Below 23°F"
        ],
        [
          "Mild climates, wide range",
          "WattCycle 100Ah Mini",
          "Shuts off at low temperature"
        ],
        [
          "Warm, mostly hookups",
          "GRNOE 100Ah Group 31",
          "Discharge cutoff at -4°F"
        ]
      ]
    }
  },
  {
    "subheading": "For a Two-Battery Parallel Bank Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Two identical batteries bought at the same time, a compact case so both fit, and an app that can name each battery so you can confirm they stay balanced. Use equal-length cables to each battery."
      },
      {
        "label": "In this comparison",
        "text": "The WattCycle 100Ah Mini is built for this, with a small case and renameable Bluetooth. The KeepKnow 100Ah Mini is the cheaper alternative if two Group 24 cases fit side by side."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You live in a van or tight compartment, or start a compressor or motor that needs high surge. The LiTime 100Ah Xtra-Mini delivers a 500A surge in the smallest case here."
      },
      {
        "label": "Save if",
        "text": "You camp in warm weather and run modest loads. The KeepKnow 100Ah Mini gives you Bluetooth and a Group 24 case for about $130, the best value in this lineup."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Exact Case Dimensions",
    "explanation": "Many 100Ah listings call themselves mini, but sizes range from a 9 inch Group 22NF case to a 13 inch Group 31. That difference decides whether one or two batteries fit in your tray, or whether the lid closes at all. Use the length, width, and height in the listing, not the photo, and measure your box with the cables attached."
  },
  {
    "criterion": "Charge Cutoff Temperature",
    "explanation": "This is the temperature at which the BMS refuses to accept charge. Because LiFePO4 can be damaged by charging below freezing, the safest listings cut off near 32°F, while some allow charging down to 0°F. Find the exact number in the low-temperature bullet and be cautious with anything well below freezing."
  },
  {
    "criterion": "Warranty Length in Writing",
    "explanation": "Similar-looking Amazon listings carry warranties ranging from 36 months to 10 years. A longer written warranty matters more than a lifespan claim because it is the part you can enforce. Look for the warranty term and the support channel, such as a US warehouse or a stated response time."
  },
  {
    "criterion": "Surge Rating",
    "explanation": "Surge describes the short burst current a BMS allows, which helps when a motor or inverter starts up. A battery rated at 100A continuous with a 300A to 500A surge handles startup spikes better than one with no surge rating. Check the bullets for a surge figure and its duration in seconds."
  },
  {
    "criterion": "Activation and Charging Notes",
    "explanation": "Some lithium batteries ship asleep and need a lithium-activation or 0V-capable charger to wake up, or after being switched off. This trips up first-time buyers who assume the battery is dead. Read the notes section of the listing before you start the install."
  }
];

export const faq = [
  {
    "q": "Are the cheap 100Ah lithium batteries on Amazon safe for RVs?",
    "a": "Most use LiFePO4 chemistry, which is stable, and include a BMS. The meaningful differences are in the low-temperature cutoff, warranty, and published certifications, so compare those rather than assuming all 100Ah listings are equal."
  },
  {
    "q": "Can I fit two mini 100Ah batteries where one lead-acid used to go?",
    "a": "Often, yes. Cases like the WattCycle at 9 x 5.4 x 8.2 inches are small enough that two may fit in a space built for one Group 27 or 31 battery. Measure the tray before ordering."
  },
  {
    "q": "Is the LiTime Xtra-Mini worth it over the HQST 100Ah?",
    "a": "Only if you need its 500A surge or extra brand support. The two are nearly the same size and both include low-temperature charge protection, and the HQST costs about half as much."
  },
  {
    "q": "Why does my new lithium battery read zero volts out of the box?",
    "a": "Many ship in a sleep mode for safety. A charger with lithium activation, or a brief connection to a charging source, usually wakes the BMS. Check the listing notes for the exact procedure."
  },
  {
    "q": "How do I wire two 100Ah batteries for 200Ah at 12V?",
    "a": "Connect them in parallel, positive to positive and negative to negative, with equal-length cables, and take the main leads from opposite corners of the bank. Charge both fully before connecting so their voltages match."
  }
];

export const relatedGuides = [
  {
    "title": "Best Lithium RV Battery",
    "href": "/power-electrical/best-lithium-rv-battery"
  },
  {
    "title": "Best Group 24 Lithium RV Battery",
    "href": "/power-electrical/best-group-24-lithium-rv-battery"
  },
  {
    "title": "Best 12V Lithium Battery for RV",
    "href": "/power-electrical/best-12-volt-lithium-battery-for-rv"
  },
  {
    "title": "Best Bluetooth RV Battery Monitor",
    "href": "/power-electrical/best-bluetooth-rv-battery-monitor"
  }
];
