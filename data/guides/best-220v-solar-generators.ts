export const guideSlug = "best-220v-solar-generators";
export const guideTitle = "3 Best 220v Solar Generators in 2026";
export const metaTitle = "Best 220v Solar Generators in 2026";
export const metaDescription = "Best 220V solar generators compared on 120V/240V split-phase output, capacity, solar input and expansion for RV, cabin and home backup.";
export const mainKeyword = "best 220v solar generators";
export const introParagraphs = [
  "North American 220V usually means 240V split-phase, the circuit that powers a dryer, an electric range or a well pump. Very few portable solar generators can supply it, and the ones that do are big, heavy and expensive.",
  "Two listings state 120V and 240V output, so they lead this short list. A third, 120V-class unit with a big 2600W rating is included as the nearest fit for readers who only want a larger solar kit."
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
    "id": "best-220v-solar-generators-1",
    "rank": 1,
    "badge": "Best Overall 240V",
    "name": "Jackery Solar Generator 5000 Plus and 2x200W Panels",
    "price": "$3729.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41k-qip9YhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWM1V7P6?tag=rvgearlab-amz-20",
    "description": "The Jackery Solar Generator 5000 Plus kit holds 5,040Wh and lists 7,200W rated output, with 14,400W of surge and both 120V and 240V support. Two 200W panels are included, solar input reaches 4,000W, and capacity expands up to 60kWh with a 60A Smart Transfer Switch for 12 circuits at 120V or 6 circuits at 240V.\n\nIt stores 1,400Wh more than the OSCAL PowerMax 6000 kit and outputs 1,200W more. It is also the only pick that names a transfer switch for whole-home circuit backup.\n\nIt suits households that want whole-home backup with both 120V and 240V. The capacity can run a house for days.",
    "specs": [
      "5,040Wh, 7,200W, 120V/240V",
      "14,400W surge, 4,000W solar input",
      "Expands to 60kWh"
    ],
    "pros": [
      "Both 120V and 240V output",
      "Largest capacity and output here",
      "Expandable up to 60kWh",
      "Pairs with a 60A transfer switch"
    ],
    "cons": [
      "Highest price of the three",
      "Large and costly for casual camping"
    ],
    "bestFor": "Whole-home 240V backup",
    "take": "The big-house pick. It is overkill for a camper but ideal for a 240V well pump or dryer.",
    "catch": "It is the priciest option, and its size is not for portable use."
  },
  {
    "id": "best-220v-solar-generators-2",
    "rank": 2,
    "badge": "Best Mid-Size 240V Kit",
    "name": "OSCAL PowerMax 6000 Solar Generator with 3×400W Solar Panel",
    "price": "$3099.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51k1bng6tfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F5MK8TMF?tag=rvgearlab-amz-20",
    "description": "The OSCAL PowerMax 6000 kit includes three 400W panels and a 3,600Wh LiFePO4 station with 6,000W of split-phase 120V/240V output and 9,000W surge. It charges from 0 to 100 percent in 1.44 hours on 2,200W AC and 2,400W solar, and an EPS switchover takes 5 to 8ms.\n\nIts three included 400W panels give it a 1,200W array, three times the 400W that comes with the Jackery 5000 Plus. The BLUETTI Elite 200 V2 offers less output and stores about 1,500Wh less.\n\nIt suits cabin and RV owners who want 240V from a roughly 3.6kWh battery with a meaningful panel array included. The EPS makes it a workable backup for critical loads.",
    "specs": [
      "3,600Wh LiFePO4, 6,000W",
      "120V/240V split phase, 9,000W surge",
      "3 x 400W panels included"
    ],
    "pros": [
      "Panels included in the kit",
      "Full recharge in 1.44 hours",
      "120V and 240V split-phase output",
      "Quick 5 to 8ms EPS switchover"
    ],
    "cons": [
      "Less capacity than the Jackery",
      "Heavy kit with large panels"
    ],
    "bestFor": "A 240V kit with real solar",
    "take": "A more affordable way to 240V with panels in the box.",
    "catch": "Panel size makes it a fixed-site setup more than a camp one."
  },
  {
    "id": "best-220v-solar-generators-3",
    "rank": 3,
    "badge": "Best 120V Kit",
    "name": "BLUETTI Elite 200 V2 Solar Generator & 2x200W Solar Panel Included 2073.6Wh",
    "price": "$1499.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Q6JjGYa7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FSJM6NZC?tag=rvgearlab-amz-20",
    "description": "The BLUETTI Elite 200 V2 kit includes 2 x 200W panels and a 2,073.6Wh station with 2,600W of continuous AC output. It lists a standby draw of 10W, a CNAS-certified automotive-grade LiFePO4 battery rated over 6,000 cycles and a full recharge in 5.5 hours from 400W of panels.\n\nIt carries the lowest price tag in this trio and the smallest output, with only 120V use on its listing. Next to the OSCAL PowerMax 6000 kit it stores less and cannot run 240V loads.\n\nIt suits RV and cabin buyers who want a compact 120V solar kit and not 240V. The 6,000 cycle rating suits daily cycling.",
    "specs": [
      "2,073.6Wh, 2,600W continuous",
      "2 x 200W panels included",
      "6,000+ cycle LiFePO4"
    ],
    "pros": [
      "Panels included in the box",
      "Very long 6,000+ cycle rating",
      "10W standby draw",
      "Lowest price of the three"
    ],
    "cons": [
      "No 240V output listed",
      "Smallest capacity of the three"
    ],
    "bestFor": "A 120V solar kit for RVs",
    "take": "A nearest-fit pick for those who do not need 240V after all. It does 120V well.",
    "catch": "The listing does not name 240V output, so heavy 240V loads are out."
  }
];

export const howWeEvaluated = [
  {
    "title": "Voltage",
    "description": "Checked whether each listing states 120V/240V split-phase or only 120V."
  },
  {
    "title": "Output and surge",
    "description": "Compared rated AC watts and surge watts."
  },
  {
    "title": "Capacity and expansion",
    "description": "Looked at stated watt-hours and any expansion packs."
  },
  {
    "title": "Solar",
    "description": "Noted included panels and maximum solar input."
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
    "subheading": "By Appliance",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Well pump or dryer on 240V",
          "Jackery 5000 Plus",
          "7,200W and 240V"
        ],
        [
          "Cabin with a 240V mini-split",
          "OSCAL PowerMax 6000",
          "6,000W split phase"
        ],
        [
          "RV with only 120V loads",
          "BLUETTI Elite 200 V2",
          "2,600W, 120V class"
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
          "$1490 to $1500",
          "BLUETTI Elite 200 V2"
        ],
        [
          "$3090 to $3100",
          "OSCAL PowerMax 6000"
        ],
        [
          "$3720 to $3730",
          "Jackery 5000 Plus"
        ]
      ]
    }
  },
  {
    "subheading": "Whole-home vs cabin scale",
    "cards": [
      {
        "label": "Whole-home",
        "text": "The Jackery 5000 Plus offers 5,040Wh and a transfer switch option for multiple circuits."
      },
      {
        "label": "Cabin scale",
        "text": "The OSCAL PowerMax 6000 and BLUETTI Elite 200 V2 cover fewer loads but cost less."
      }
    ],
    "note": "Most buyers needing 240V should default to the OSCAL PowerMax 6000 unless they want whole-home backup."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Largest spend",
          "Jackery 5000 Plus"
        ],
        [
          "Mid spend, 240V",
          "OSCAL PowerMax 6000"
        ],
        [
          "Lowest spend",
          "BLUETTI Elite 200 V2"
        ]
      ]
    }
  },
  {
    "subheading": "For Well Pump and Dryer Backup Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated 120V/240V split-phase output"
      },
      {
        "label": "In this comparison",
        "text": "The Jackery 5000 Plus lists 6 circuits at 240V with its transfer switch, and the OSCAL PowerMax 6000 lists 120V/240V split phase."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Jackery 5000 Plus if you want whole-home 240V and room to expand to 60kWh."
      },
      {
        "label": "Save if",
        "text": "Save with the BLUETTI Elite 200 V2 if you only need 120V, or the OSCAL PowerMax 6000 for 240V on a smaller budget."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 220V and 240V mean",
    "explanation": "In North America, 220V loads actually run on 240V split-phase, two 120V legs combined. A dryer, an electric range, a well pump and a large air conditioner use it. Check the listing for the words 120V/240V or split phase, not just a big wattage."
  },
  {
    "criterion": "Rated watts for 240V loads",
    "explanation": "A 240V appliance still draws watts, so total output must exceed the load. A 5,000W well pump needs a station rated beyond that, plus surge. Look at the continuous AC figure and the surge figure."
  },
  {
    "criterion": "Capacity and runtime",
    "explanation": "A 3,600Wh battery runs a 3,000W load for roughly an hour. Divide stored watt-hours by load watts. A 240V circuit for a well pump usually runs in short cycles."
  },
  {
    "criterion": "Transfer switch and wiring",
    "explanation": "Feeding a house panel needs an approved transfer switch and often a licensed electrician. Never backfeed through a standard outlet. Look for a named transfer switch accessory on the listing."
  },
  {
    "criterion": "Solar input and panel kit",
    "explanation": "Maximum solar input in watts sets the fastest refill. A kit with three 400W panels gives more daily energy than a single 100W panel. Match the panel voltage range to the station's input."
  }
];

export const faq = [
  {
    "q": "Is 220V the same as 240V?",
    "a": "In North America, yes for practical purposes: appliances labeled 220V or 240V run on the 240V split-phase circuit. The Jackery 5000 Plus and OSCAL PowerMax 6000 both list 120V and 240V."
  },
  {
    "q": "Can I plug a 240V dryer into the station?",
    "a": "Only with the right outlet type and a matching adapter or transfer inlet. Ask the maker about the correct connection and have an electrician check the wiring."
  },
  {
    "q": "Is a 240V solar generator worth it over a 120V one?",
    "a": "Only if you own a 240V appliance. Otherwise a 120V kit like the BLUETTI Elite 200 V2 is lighter and cheaper."
  },
  {
    "q": "How do I connect panels?",
    "a": "Plug them into the solar input with the right cable. Stay inside the listed voltage and watt limits."
  },
  {
    "q": "How do I store the system?",
    "a": "Store at partial charge in a cool dry place. Fold panels flat and keep them clean."
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
