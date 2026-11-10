export const guideSlug = "best-dual-battery-solar-charge-controller";
export const guideTitle = "6 Best Dual Battery Solar Charge Controller in 2026";
export const metaTitle = "Best Dual Battery Solar Charge Controller (2026)";
export const metaDescription = "Six dual-battery solar controllers and dual-input chargers for RVs that need to charge a house and starter battery, with plain notes on what each one does.";
export const mainKeyword = "best dual battery solar charge controller";
export const introParagraphs = [
  "A dual-battery controller charges two batteries, typically a house bank and a starter or second bank, from one solar array. This guide compares true dual-output solar controllers with a DC-DC charger that takes solar and alternator input, because the two are easy to confuse on listings.",
  "This guide keeps them in one list but explain what each unit actually is: a dual-output MPPT, dual-output PWM controllers with a charge priority, a programmable PWM and a dual-input DC-DC charger. Where a listing leaves out how the second output works, this guide says to check the manual."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41Ic2l3y83L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-dual-battery-solar-charge-controller-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "EPEVER 30A MPPT Dual Battery Solar Charge Controller 12V/24V Auto Max. PV 100V DuoRacer 30 Amp Controller for ",
    "price": "$134.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Ic2l3y83L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09DVWPHJW?tag=rvgearlab-20",
    "description": "EPEVER's DuoRacer is a 30A MPPT that charges two batteries at once, with tracking efficiency listed at 99.5% or better. The DuoRacer is a 30A MPPT controller that charges two batteries at once, with tracking efficiency listed at 99.5% or better. It auto-detects 12V or 24V, accepts up to 100V PV and 390W on 12V (780W on 24V), and has an LCD plus an AES control signal for a car refrigerator.\n\nIt has more capacity and tracking than the PWM EPEVER units below it and more solar focus than Renogy 30A DC-DC. It costs more than the 20A PWM models.\n\nBest for an RV or boat with a house and starter battery. It is built for an RV, camper or boat with a house and starter battery, though the listing describes a negative-ground design.",
    "specs": [
      "30A MPPT, two batteries",
      "Max PV 100V, 390W at 12V",
      "12V/24V auto, LCD"
    ],
    "pros": [
      "Charges two batteries at the same time",
      "Tracking efficiency listed at no less than 99.5%",
      "Supports AGM, gel, flooded, LiFePO4 and Li-NiCoMn",
      "Control signal for a car refrigerator"
    ],
    "cons": [
      "Negative-ground design only",
      "390W limit on a 12V system"
    ],
    "bestFor": "Dual-output MPPT"
  },
  {
    "id": "best-dual-battery-solar-charge-controller-2",
    "rank": 2,
    "badge": "Best Dual Source",
    "name": "Renogy Smart 30A DC-DC MPPT Battery Charger 12V Dual Input for RVs/Vans",
    "price": "$150.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31cSgrZrXOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B093BB3PCV?tag=rvgearlab-20",
    "description": "Renogy's 30A is a DC-DC charger with MPPT, taking solar and the vehicle alternator rather than acting as a plain solar controller. Renogy's 30A unit is a DC-DC on-board charger with MPPT, so it charges a service battery from solar panels and the vehicle's alternator rather than acting as a plain charge controller. It measures 9.6 by 5.7 inches, weighs 3.13 pounds, is 12V with 24V compatibility, and lists eight protections.\n\nIt differs from EPEVER DuoRacer 30A by charging from the alternator while driving. It is more involved to wire than the solar-only units.\n\nBest for a rig that needs alternator and solar charging. It suits a rig that needs both alternator and solar charging, but it is more involved to install than a plain controller.",
    "specs": [
      "30A DC-DC with MPPT",
      "Dual input, 12V (24V compatible)",
      "9.6 in long, 3.13 lb"
    ],
    "pros": [
      "Charges from both solar and alternator",
      "Built-in MPPT with three-stage charging",
      "Small at 9.6 inches and 3.13 pounds",
      "Eight protections listed"
    ],
    "cons": [
      "A DC-DC charger, not a plain solar controller",
      "Needs vehicle wiring plus a solar input"
    ],
    "bestFor": "Solar plus alternator"
  },
  {
    "id": "best-dual-battery-solar-charge-controller-3",
    "rank": 3,
    "badge": "Best Programmable",
    "name": "Victron Energy BlueSolar PWM Charge Controller",
    "price": "$89.25",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/316kUR3loYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FLLFFDXZ?tag=rvgearlab-20",
    "description": "Victron's BlueSolar PWM DUO is a 20A controller with an LCD, USB ports and light control. Victron's BlueSolar PWM DUO is a 20A 12/24VDC controller with an LCD, two 5V USB ports, programmable light control and three-stage charging that can be fully programmed. The listing does not describe how the second battery output works, so confirm the DUO behavior against Victron's manual.\n\nIt is more programmable than EPEVER 20A Dual PWM but its listing does not detail the second battery output. Read the manual before relying on it.\n\nBest for a user who wants a programmable PWM and a known brand. Pick it if you trust the Victron name and want a programmable PWM unit, and read the manual first for the dual-output details.",
    "specs": [
      "20A PWM, 12/24VDC",
      "LCD with two USB ports",
      "Programmable light control"
    ],
    "pros": [
      "Clear display and two 5V USB ports",
      "Programmable lighting function",
      "Three-stage charge with full programmability",
      "Fully programmable charge settings"
    ],
    "cons": [
      "Listing does not explain the second battery output",
      "PWM, so panel voltage above battery is wasted"
    ],
    "bestFor": "Programmable PWM"
  },
  {
    "id": "best-dual-battery-solar-charge-controller-4",
    "rank": 4,
    "badge": "Best Temp-Aware",
    "name": "EPEVER EPIPDB-COM Series Dual Battery Solar Charge Controller 20A 12V/24V Auto Work for RVs Caravans and Boats",
    "price": "$41.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41S5XwgOdML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B081RDBHWK?tag=rvgearlab-20",
    "description": "EPEVER's EPIPDB 20A charges two batteries independently with a settable priority such as 30/70. EPEVER's EPIPDB-COM 20A is a dual-battery solar controller for 12V/24V that charges two batteries independently with a settable priority such as 30/70. Where there is no remote temperature sensor, it calculates from its local sensor.\n\nIt has more capacity than EPEVER EPIPDB 10A and falls back to a local temperature sensor. It is PWM, unlike EPEVER DuoRacer 30A.\n\nBest for balanced charging between house and starter batteries. It suits a rig with a house and starter battery that needs sensible priority, with a remote temperature sensor optional.",
    "specs": [
      "20A, two batteries",
      "30/70 charge priority",
      "Local temp sensor fallback"
    ],
    "pros": [
      "Independent charging for two batteries",
      "Adjustable priority such as 30/70",
      "Falls back to a local temperature sensor",
      "Four listed protections including overload"
    ],
    "cons": [
      "Temperature readings come from the unit without an RTS",
      "20A limits array size"
    ],
    "bestFor": "Priority charging"
  },
  {
    "id": "best-dual-battery-solar-charge-controller-5",
    "rank": 5,
    "badge": "Best Budget 20A",
    "name": "EVPEVER 20A Solar Charge Controller 12V/24V Auto Working Dual Battery Solar Panel Charge Controller PWM 20AMP ",
    "price": "$41.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41V4j98SMsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B081GRYXNC?tag=rvgearlab-20",
    "description": "EPEVER's 20A dual PWM sets a priority split such as 80/20 for two batteries. This EPEVER 20A PWM controller charges and protects two batteries or banks independently, with a priority split such as 80/20. It auto-detects 12V or 24V, has adjustable parameters and lists sealed, gel and flooded batteries.\n\nIt matches EPEVER EPIPDB 20A on amps and price but lists fewer details on temperature handling. It names sealed, gel and flooded batteries.\n\nBest for lead-acid dual banks. Check the battery type before buying, since the listing names sealed, gel and flooded batteries only.",
    "specs": [
      "20A PWM, two batteries",
      "Priority split such as 80/20",
      "12V/24V auto working"
    ],
    "pros": [
      "Charges two banks independently with priority",
      "Short, open-circuit and reverse protection",
      "Adjustable parameters for tuning",
      "Sealed, gel and flooded batteries supported"
    ],
    "cons": [
      "Lithium is not named in the listing",
      "LED indicators rather than a color LCD"
    ],
    "bestFor": "Lead-acid dual banks"
  },
  {
    "id": "best-dual-battery-solar-charge-controller-6",
    "rank": 6,
    "badge": "Best Small Dual",
    "name": "EPEVER EPIPDB-COM Series Dual Battery Solar Charge Controller 10A 12V/24V Auto Work for RVs Caravans and Boats",
    "price": "$35.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41S5XwgOdML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B081RL6D45?tag=rvgearlab-20",
    "description": "EPEVER's 10A EPIPDB is the smallest dual-battery option here, sharing the 20A model's logic. The 10A EPEVER EPIPDB-COM shares the dual-battery design of its 20A sibling, charging two batteries independently with an adjustable priority. It auto-works on 12V/24V and falls back to a local temperature sensor when no remote sensor is fitted.\n\nIt costs less than EPEVER EPIPDB 20A but limits array size. It is best as a small second-battery charger.\n\nBest for a small second battery on a minimal array. At 10A it only suits a small panel, so it works for a tiny second-battery job.",
    "specs": [
      "10A, two batteries",
      "Priority split such as 30/70",
      "12V/24V auto work"
    ],
    "pros": [
      "Same dual-battery logic as the 20A model",
      "Adjustable charging priority",
      "Local temp sensor fallback",
      "Lowest price among the EPEVER units"
    ],
    "cons": [
      "10A is small for a roof array",
      "Pricing gap to the 20A is small"
    ],
    "bestFor": "Small second battery"
  }
];

export const howWeEvaluated = [
  {
    "title": "Dual-battery function",
    "description": "This guide checks which listings charge two batteries independently, which use a priority split and which are dual-input chargers instead."
  },
  {
    "title": "Regulation type",
    "description": "MPPT, PWM and DC-DC designs were compared for efficiency and wiring."
  },
  {
    "title": "Battery chemistry",
    "description": "Lead-acid and lithium support were noted for each unit."
  },
  {
    "title": "Capacity",
    "description": "Amp ratings and PV limits were matched to RV and boat arrays."
  },
  {
    "title": "Listing clarity",
    "description": "Listings that are thin on the second output are flagged."
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
    "subheading": "By Charging Source",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Solar only, two batteries, MPPT",
          "EPEVER DuoRacer 30A",
          "Charges two batteries with MPPT."
        ],
        [
          "Solar plus alternator",
          "Renogy 30A DC-DC",
          "Dual-input DC-DC with MPPT."
        ],
        [
          "Programmable PWM with USB",
          "Victron DUO 20A",
          "LCD and light control."
        ],
        [
          "Priority split, 20A",
          "EPEVER EPIPDB 20A",
          "Settable priority such as 30/70."
        ],
        [
          "Small second battery",
          "EPEVER EPIPDB 10A",
          "10A with priority logic."
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
          "$30 to $50",
          "EPEVER EPIPDB 10A or EPEVER EPIPDB 20A"
        ],
        [
          "$40 to $90",
          "EPEVER 20A Dual PWM or Victron DUO 20A"
        ],
        [
          "$130 to $160",
          "EPEVER DuoRacer 30A or Renogy 30A DC-DC"
        ]
      ]
    }
  },
  {
    "subheading": "Dual Output vs Dual Input",
    "cards": [
      {
        "label": "Dual output",
        "text": "Two outputs charge two batteries from one array. EPEVER DuoRacer 30A and the EPIPDB units do this."
      },
      {
        "label": "Dual input",
        "text": "Two inputs charge one battery from solar and the alternator. Renogy 30A DC-DC does this."
      }
    ],
    "note": "Choose EPEVER DuoRacer 30A for two batteries on solar, and Renogy 30A DC-DC to add alternator charging."
  },
  {
    "subheading": "By Battery Chemistry",
    "table": {
      "headers": [
        "Chemistry",
        "Recommended pick"
      ],
      "rows": [
        [
          "AGM, gel, flooded, LiFePO4",
          "EPEVER DuoRacer 30A"
        ],
        [
          "Sealed, gel, flooded",
          "EPEVER 20A Dual PWM"
        ],
        [
          "Settable per listing",
          "Victron DUO 20A"
        ],
        [
          "Lead-acid dual banks",
          "EPEVER EPIPDB 20A"
        ]
      ]
    }
  },
  {
    "subheading": "For Starter-Plus-House Setups Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for independent outputs and a priority setting so the house bank charges first."
      },
      {
        "label": "In this comparison",
        "text": "EPEVER EPIPDB 20A and EPEVER 20A Dual PWM both list priority splits, and EPEVER DuoRacer 30A adds MPPT."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more for MPPT and capacity, where EPEVER DuoRacer 30A beats the PWM models."
      },
      {
        "label": "Save if",
        "text": "Save if you have a small panel, where EPEVER EPIPDB 10A is enough."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "True dual output or dual input",
    "explanation": "A dual-battery controller charges two batteries from one array, while a dual-input charger takes two sources into one battery. Mixing them up leads to the wrong purchase. Check whether the listing says two batteries or two inputs."
  },
  {
    "criterion": "Charge priority control",
    "explanation": "Some units split charge by percentage, such as 80/20 or 30/70, so the house bank fills first. Without priority, the starter battery may take current it does not need. Look for a stated priority setting."
  },
  {
    "criterion": "MPPT versus PWM for two banks",
    "explanation": "MPPT recovers extra panel voltage, while PWM is simpler. Dual MPPT units like EPEVER DuoRacer 30A suit larger arrays. Pick based on array size and panel voltage."
  },
  {
    "criterion": "Battery chemistry per bank",
    "explanation": "Two different chemistries rarely want the same charge voltages, so mixing lithium and lead-acid on one controller can be a problem. Check whether the listing lets you set a profile per bank. Plan the pair of batteries around the profiles the unit actually offers."
  },
  {
    "criterion": "Wiring and fusing",
    "explanation": "Each battery needs its own fuse at the battery. Dual units add terminals, so measure the wire run and use correct gauge. Plan the layout before purchase."
  }
];

export const faq = [
  {
    "q": "Is a dual-battery controller the same as a DC-DC charger?",
    "a": "No. A dual-battery solar controller has two outputs, while Renogy 30A DC-DC has two inputs."
  },
  {
    "q": "What mistake do buyers make with a dual-battery controller?",
    "a": "Buying a dual-input DC-DC charger when you want two outputs, or the reverse."
  },
  {
    "q": "Is MPPT worth it for dual banks?",
    "a": "For arrays above a few hundred watts, EPEVER DuoRacer 30A recovers more energy."
  },
  {
    "q": "What is the safest way to wire a dual-battery controller?",
    "a": "Use the controller's settings to choose a split like 80/20, with the house bank highest. On a dual-battery controller, double-check polarity at every terminal before powering up and use wire sized for the rated amps."
  },
  {
    "q": "How should I maintain a dual-battery controller?",
    "a": "On a dual-battery controller, tighten terminals and inspect cable insulation at the start of each season, and keep vents, fans or heat-sink surfaces free of dust. Check both battery terminals and fuses each season."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Solar Charge Controller",
    "href": "/power-electrical/best-solar-charge-controller"
  },
  {
    "title": "Best MPPT Solar Charge Controller",
    "href": "/power-electrical/best-mppt-solar-charge-controller"
  },
  {
    "title": "Best PWM Solar Charge Controller",
    "href": "/power-electrical/best-pwm-solar-charge-controller"
  },
  {
    "title": "Best Solar Charge Controller For RV",
    "href": "/power-electrical/best-solar-charge-controller-for-rv"
  }
];
