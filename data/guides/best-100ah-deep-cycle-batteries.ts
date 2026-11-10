export const guideSlug = "best-100ah-deep-cycle-batteries";
export const guideTitle = "4 Best 100Ah Deep Cycle Batteries in 2026";
export const metaTitle = "Best 100Ah Deep Cycle Batteries in 2026";
export const metaDescription = "Best 100Ah deep cycle batteries compared on AGM versus LiFePO4 chemistry, size and temperature limits, for campers building a 12V house battery.";
export const mainKeyword = "best 100ah deep cycle batteries";
export const introParagraphs = [
  "A 100Ah battery is the most common size for a camper, van or portable power build, because it runs a fridge and lights for a day or two. Within that size there are two very different families: heavy sealed AGM lead-acid and light LiFePO4 lithium.",
  "Four 100Ah batteries were compared, two of each type. The comparison covers listed dimensions, discharge ratings, temperature ranges, cycle claims and the charger each type requires."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/home-golden-hour-campsite.webp";
export const heroImageAlt = "Dome tent and hammock at a forest campsite at golden hour";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-100ah-deep-cycle-batteries-1",
    "rank": 1,
    "badge": "Best Compact Lithium",
    "name": "RVLithTime 12V100Ah Group 24LiFePO4 Lithium Battery",
    "price": "$129.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31nwzLZB-TL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FL72KPBZ?tag=rvgearlab-20",
    "description": "The RVLithTime packs 100Ah of LiFePO4 at 12V into a mini Group 24 case that is 10.2 inches long, 6.65 wide and 8.39 tall. The listing claims it is 35 percent smaller than a standard Group 24 and 80 percent lighter than lead-acid, with a 100A BMS, 1280Wh and 15,000 cycles.\n\nIt is the lowest-priced battery in the list and undercuts the CHITOLI by a clear margin. Compared with the AGM batteries, it offers a built-in BMS and a long cycle claim at a fraction of the weight.\n\nIt suits campers who need 100Ah in a tight space, such as a van or small trailer. The listing recommends it for 30 to 70 lb thrust trolling motors and solar systems.",
    "specs": [
      "12V 100Ah LiFePO4, mini Group 24",
      "100A BMS, 1280Wh",
      "10.2 x 6.65 x 8.39 inches"
    ],
    "pros": [
      "Compact mini Group 24 case",
      "100A BMS with common protections",
      "Lowest price among lithium picks",
      "Listing claims 15,000 cycles"
    ],
    "cons": [
      "Needs a lithium-profile charger",
      "Not for 12V systems with lead-acid chargers"
    ],
    "bestFor": "Tight spaces",
    "take": "A small 100Ah lithium battery for vans, small trailers and tight spaces.",
    "catch": "A lead-acid charger may not fill it, so check your charger settings."
  },
  {
    "id": "best-100ah-deep-cycle-batteries-2",
    "rank": 2,
    "badge": "Best Lithium Cycle Life",
    "name": "CHITOLI 12V 100Ah TM LiFePO4 Battery",
    "price": "$152.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bRdVjy7kL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DY72MKZ2?tag=rvgearlab-20",
    "description": "The CHITOLI is a Group 24 lithium iron phosphate battery rated at 100Ah with a 100A smart BMS. The listing claims 4000+ cycles at 100 percent depth of discharge, 6000 at 80 percent and 15,000 at 60 percent, plus a 10-year lifespan and a charge in about 5 hours at 14.6V and 20A.\n\nIt lists a fuller set of cycle numbers than any other pick, covering three depths of discharge. Compared with the RVLithTime it uses the standard Group 24 size, which fits more existing boxes, and it costs a bit more.\n\nIt suits campers swapping lead-acid for lithium who want published cycle data at different depths. The listing positions it as a drop-in for lead-acid conversion.",
    "specs": [
      "12V 100Ah Group 24 LiFePO4",
      "100A smart BMS",
      "4000+ cycles at 100 percent"
    ],
    "pros": [
      "Cycle claims at three discharge depths",
      "Standard Group 24 case",
      "Smart BMS protection",
      "Charges in about 5 hours at 20A"
    ],
    "cons": [
      "Priced above the RVLithTime",
      "Needs a lithium-compatible charger"
    ],
    "bestFor": "Lead-acid conversions",
    "take": "A Group 24 lithium battery with detailed cycle data for lead-acid swaps.",
    "catch": "Charging at 14.6V and 20A requires a lithium profile."
  },
  {
    "id": "best-100ah-deep-cycle-batteries-3",
    "rank": 3,
    "badge": "Best AGM Brand",
    "name": "Renogy 12 Volt 100Ah Deep Cycle AGM Battery",
    "price": "$166.24",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31soCn59teL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075RFXHYK?tag=rvgearlab-20",
    "description": "The Renogy 100Ah is a sealed AGM battery that supports unlimited series and up to four parallel connections. The listing names a 1100A 5-second maximum discharge, operation from -4 to 140 degrees F and enough output to run a fridge, microwave and similar appliances.\n\nIt has the wider temperature range of the two AGM batteries and a price just under the WEIZE. It also publishes a clearer expansion rule, with unlimited series and up to four in parallel.\n\nIt suits campers who want sealed lead-acid without lithium's charger demands. The listing stresses stable chemistry and minimal troubleshooting.",
    "specs": [
      "12V 100Ah sealed AGM",
      "1100A 5-second discharge",
      "-4 to 140F operation"
    ],
    "pros": [
      "Wide operating temperature range",
      "Parallel up to 4 batteries",
      "Sealed AGM needs no watering",
      "No lithium charger profile needed"
    ],
    "cons": [
      "Heavy compared with lithium",
      "Usable capacity is lower than 100Ah"
    ],
    "bestFor": "AGM house battery",
    "take": "A sealed AGM 100Ah with a wide temperature range and a clear expansion rule.",
    "catch": "Avoid deep discharges to extend the life of any lead-acid battery."
  },
  {
    "id": "best-100ah-deep-cycle-batteries-4",
    "rank": 4,
    "badge": "Best Documented Limits",
    "name": "Weize Deep Cycle AGM 12 Volt 100Ah Battery",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bqV6Wt2oL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07SW353M8?tag=rvgearlab-20",
    "description": "The WEIZE is a maintenance-free 12V 100Ah AGM battery with a 12.99 inch body. The listing names a 1-3 percent monthly self-discharge, 1100A max discharge for 5 seconds, a charge range of 14 to 122 degrees F and a discharge range of 5 to 122 degrees F.\n\nIt is the only pick that spells out separate charge and discharge temperature limits, with a 1-year warranty. Against the Renogy it covers a narrower temperature window at a nearly identical price.\n\nIt suits campers who want a basic maintenance-free AGM for an RV, solar setup or trolling motor. The listing also names wheelchairs, scooters and golf carts as uses.",
    "specs": [
      "12V 100Ah AGM",
      "1-3 percent monthly self-discharge",
      "Charge 14-122F, discharge 5-122F"
    ],
    "pros": [
      "Separate charge and discharge limits listed",
      "Low monthly self-discharge",
      "Maintenance-free AGM",
      "1-year warranty stated"
    ],
    "cons": [
      "Narrower temperature range than the Renogy",
      "Heavy compared with lithium"
    ],
    "bestFor": "Basic RV or solar battery",
    "take": "A plain, sealed AGM 100Ah with clear temperature limits.",
    "catch": "Do not charge below 14 degrees F, per the listing."
  }
];

export const howWeEvaluated = [
  {
    "title": "Chemistry",
    "description": "AGM lead-acid and LiFePO4 lithium were separated."
  },
  {
    "title": "Size and fit",
    "description": "Listed dimensions and group sizes were compared."
  },
  {
    "title": "Discharge and BMS",
    "description": "Maximum discharge ratings and BMS amp ratings were noted."
  },
  {
    "title": "Temperature limits",
    "description": "Operating ranges and charge limits were compared."
  },
  {
    "title": "Cycle claims",
    "description": "Published cycle counts at stated depths of discharge were noted."
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
    "subheading": "By Space and Weight",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Tight space, lightest",
          "RVLithTime 100Ah Mini",
          "10.2 inch case, 80 percent lighter than lead-acid."
        ],
        [
          "Group 24 replacement",
          "CHITOLI 100Ah Group 24",
          "Group 24 with published cycles."
        ],
        [
          "Sealed AGM, wide temperatures",
          "Renogy 100Ah AGM",
          "-4 to 140F operation."
        ],
        [
          "Basic AGM with clear temperature limits",
          "WEIZE 100Ah AGM",
          "Separate charge and discharge ranges."
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
          "$120 to $160",
          "RVLithTime 100Ah Mini or CHITOLI 100Ah Group 24"
        ],
        [
          "$160 to $170",
          "Renogy 100Ah AGM or WEIZE 100Ah AGM"
        ]
      ]
    }
  },
  {
    "subheading": "AGM vs Lithium",
    "cards": [
      {
        "label": "AGM",
        "text": "AGM is heavy and tolerant of charger choices. The Renogy 100Ah AGM and WEIZE 100Ah AGM use it."
      },
      {
        "label": "Lithium",
        "text": "LiFePO4 is lighter with a longer stated cycle life and needs a lithium charger. The RVLithTime 100Ah Mini and CHITOLI 100Ah Group 24 use it."
      }
    ],
    "note": "Most campers who can afford it should pick lithium like the RVLithTime 100Ah Mini; choose AGM if you want to keep a standard lead-acid charger."
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
          "Lowest lithium price",
          "RVLithTime 100Ah Mini"
        ],
        [
          "Mid-price lithium",
          "CHITOLI 100Ah Group 24"
        ],
        [
          "AGM near the lithium price",
          "Renogy 100Ah AGM"
        ],
        [
          "Highest price of the four",
          "WEIZE 100Ah AGM"
        ]
      ]
    }
  },
  {
    "subheading": "Van or Small Trailer Build Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A box-fitting size, a charge profile your charger supports and a fuse."
      },
      {
        "label": "In this comparison",
        "text": "The RVLithTime 100Ah Mini is the smallest, and the CHITOLI 100Ah Group 24 fits Group 24 boxes."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the CHITOLI 100Ah Group 24 if you want published cycle data and a Group 24 fit."
      },
      {
        "label": "Save if",
        "text": "Save with the RVLithTime 100Ah Mini, which is the lowest-priced battery in the list."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "AGM versus LiFePO4 at 100Ah",
    "explanation": "Both give 100Ah on paper, but lead-acid should not be drained much below half, while lithium can go much deeper. That makes the usable capacity of a lithium 100Ah closer to 100Ah. Compare the usable range, not just the label."
  },
  {
    "criterion": "Depth of discharge and cycle life",
    "explanation": "A cycle claim only means something with the depth it was measured at. CHITOLI lists three depths, others list one. Compare at the depth you will use."
  },
  {
    "criterion": "Temperature limits",
    "explanation": "Lead-acid and lithium have different charge limits, and lithium should not be charged when frozen. The WEIZE lists 14 to 122 degrees F for charging. Check the listing for your climate."
  },
  {
    "criterion": "Charger compatibility",
    "explanation": "Lithium needs about 14.4 to 14.6V, and AGM uses a different profile. A mismatched charger undercharges or harms the battery. Check the charger before buying."
  },
  {
    "criterion": "Box fit, fusing and ventilation",
    "explanation": "Measure your battery box against the listed dimensions. Fuse the positive cable close to the battery and ventilate lead-acid. Use correct cable gauge."
  }
];

export const faq = [
  {
    "q": "Is a 100Ah battery enough for a camping fridge?",
    "a": "Often yes, for a day or two. It depends on your fridge and other loads. The RVLithTime 100Ah Mini and CHITOLI 100Ah Group 24 give more usable capacity than AGM."
  },
  {
    "q": "What is the biggest mistake?",
    "a": "Using the wrong charger. Lithium needs a 14.4 to 14.6V profile. Check before buying."
  },
  {
    "q": "Is lithium worth it over AGM at 100Ah?",
    "a": "If weight and cycle life matter, yes. The CHITOLI 100Ah Group 24 lists 4000+ cycles at 100 percent depth. AGM batteries keep a familiar lead-acid charging profile."
  },
  {
    "q": "How do I wire a 100Ah battery?",
    "a": "Use a fuse near the positive terminal, correct cable gauge and tight connections. Follow the Renogy 100Ah AGM instructions for parallel limits. Keep it ventilated."
  },
  {
    "q": "How do I store a 100Ah battery?",
    "a": "Store it charged and cool, and disconnect loads. The WEIZE 100Ah AGM lists low self-discharge. Recharge periodically."
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
