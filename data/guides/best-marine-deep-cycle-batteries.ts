export const guideSlug = "best-marine-deep-cycle-batteries";
export const guideTitle = "5 Best Marine Deep Cycle Batteries in 2026";
export const metaTitle = "Best Marine Deep Cycle Batteries in 2026";
export const metaDescription = "Best marine deep cycle batteries compared on group size, cranking amps, capacity and chemistry for boats, kayaks and trolling motors.";
export const mainKeyword = "best marine deep cycle batteries";
export const introParagraphs = [
  "A marine deep cycle battery lives in a harsher spot than a car battery: it vibrates, sits near water and runs a trolling motor or electronics for hours. The labels that matter are group size, whether it also starts an engine and how many amp-hours it actually carries.",
  "Five marine-oriented batteries from 50Ah to 110Ah were compared on group size, cranking figures, capacity and chemistry. Four are sealed AGM and one is a lithium iron phosphate option the listing aims at trolling motors and RV use."
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
    "id": "best-marine-deep-cycle-batteries-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Weize BCI Group 31M Dual Purpose AGM Battery",
    "price": "$229.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41y5-nzWEhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CJVHQRHB?tag=rvgearlab-amz-20",
    "description": "The Weize BCI Group 31M is a dual-purpose AGM marine and RV battery rated 110Ah with 825 CCA and 240 RC. The listing names quick charging, vibration resistance and a leak-proof design with specialized valves.\n\nIt matches the Mighty Max 27M on price while offering 10Ah more capacity and higher CCA. Compared with the Weize 24M it is bigger and stronger in both starting and reserve capacity.\n\nIt suits boats with a large starter and a fish finder or lights. The Group 31 size fits many marine trays.",
    "specs": [
      "12V 110Ah, Group 31M",
      "825 CCA, 240 RC",
      "Quick-charge capable"
    ],
    "pros": [
      "110Ah with 825 CCA",
      "Leak-proof AGM construction",
      "Vibration resistant",
      "Same price as the Mighty Max 27M"
    ],
    "cons": [
      "Heavy for small boats",
      "Dual-purpose limits deep cycling"
    ],
    "bestFor": "Larger boats with a starter",
    "take": "The strongest dual-purpose marine AGM here for starting and house loads.",
    "catch": "Weight is not listed, so check the box and mounting."
  },
  {
    "id": "best-marine-deep-cycle-batteries-2",
    "rank": 2,
    "badge": "Best Marine-Rated Pick",
    "name": "Mighty Max Battery MM-G27M",
    "price": "$229.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fqXu0oO2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7M82Q7K?tag=rvgearlab-amz-20",
    "description": "The Mighty Max MM-G27M is a Group 27M marine AGM rated 100Ah with 800 CCA and 850 marine cranking amps. It lists up to 700 cycles at 50 percent depth of discharge.\n\nIt is the only pick here that states marine cranking amps and a cycle count. Compared with the Weize 31M it has 10Ah less capacity and adds a defined cycle figure.\n\nIt suits boaters who want marine cranking numbers on the label. It also serves as a camp-house battery on the shore.",
    "specs": [
      "12V 100Ah, Group 27M",
      "800 CCA, 850 MCA",
      "700 cycles at 50% DoD"
    ],
    "pros": [
      "Marine cranking amps stated",
      "700 cycles at 50% depth",
      "Dual-purpose use",
      "Group 27M tray fit"
    ],
    "cons": [
      "Same price as larger Weize 31M",
      "Dual-purpose compromises depth"
    ],
    "bestFor": "Boaters who want MCA",
    "take": "A marine-rated battery with an actual cycle figure.",
    "catch": "Capacity is 10Ah below the Weize 31M at the same cost."
  },
  {
    "id": "best-marine-deep-cycle-batteries-3",
    "rank": 3,
    "badge": "Best Mid-Size Pick",
    "name": "Weize Dual Purpose AGM Battery BCI Group 24M",
    "price": "$189.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fj1LvTddL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRQSKG3G?tag=rvgearlab-amz-20",
    "description": "The Weize BCI Group 24M offers 90Ah, 550 CCA and 150 RC in a sealed AGM marine and RV case. The listing names quick charging, low maintenance and vibration resistance 20 times better than flooded units.\n\nIt sits below the Weize 31M and costs less. Compared with the Newport 50Ah it nearly doubles the capacity and adds starting power.\n\nIt suits mid-size boats and small RV banks. The Group 24M size is common in smaller trays.",
    "specs": [
      "12V 90Ah, Group 24M",
      "550 CCA, 150 RC",
      "Sealed AGM, vibration resistant"
    ],
    "pros": [
      "Group 24M fits smaller trays",
      "Dual-purpose power",
      "Quick charge capable",
      "Priced below the 31M"
    ],
    "cons": [
      "Smaller than the 31M",
      "No cycle count listed"
    ],
    "bestFor": "Mid-size boats",
    "take": "A mid-range dual-purpose marine AGM at a lower price.",
    "catch": "No cycle-life figure is given."
  },
  {
    "id": "best-marine-deep-cycle-batteries-4",
    "rank": 4,
    "badge": "Best Lightweight Lithium",
    "name": "12V 100Ah LiFePO4 Lithium Battery Group 31 Deep Cycle for RV Trolling Motor",
    "price": "$146.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41LTEgM99JL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FP525PFP?tag=rvgearlab-amz-20",
    "description": "The VEMDIA is a 12V 100Ah LiFePO4 battery in Group 31 size, weighing 24 lb. It has a 100A smart BMS, a listed 15,000 cycles at 60 percent DoD and discharge from -4 to 140 degrees F.\n\nIt is far lighter than the AGM picks and cheaper than any of them per amp-hour. Compared with the Newport 50Ah it doubles capacity and handles a trolling motor and electronics.\n\nIt suits anglers who run a trolling motor all day. The listing names fast charging with a 14.6V 20A charger.",
    "specs": [
      "12V 100Ah LiFePO4, Group 31",
      "100A smart BMS",
      "24 lb"
    ],
    "pros": [
      "24 lb, listed as 70% lighter than lead-acid",
      "100A BMS protects cells",
      "Group 31 drop-in size",
      "Cycle life far above AGM"
    ],
    "cons": [
      "Not a starting battery",
      "Needs a lithium charger"
    ],
    "bestFor": "Trolling motor use",
    "take": "A light lithium battery for trolling motors and house loads.",
    "catch": "Use a lithium charger and keep it away from freezing charge conditions."
  },
  {
    "id": "best-marine-deep-cycle-batteries-5",
    "rank": 5,
    "badge": "Best Small Boat Pick",
    "name": "Newport 12V 50Ah Deep Cycle AGM Marine Battery",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41aqWZlH+YL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CT43QFML?tag=rvgearlab-amz-20",
    "description": "The Newport is a sealed 12V 50Ah AGM marine battery for trolling motors, kayaks and small boats. The listing says it is sized and optimized for Newport trolling motors and other 12V marine electronics.\n\nIt is the lowest-priced and smallest pick. Compared with the Weize 24M it cannot start an engine, and compared with the VEMDIA it carries half the capacity.\n\nIt suits kayak and jon boat anglers who need a compact trolling-motor battery. Its small size is easy to carry from truck to shore.",
    "specs": [
      "12V 50Ah sealed AGM",
      "Trolling motor optimized",
      "Compact portable size"
    ],
    "pros": [
      "Compact and portable",
      "Lowest price in the list",
      "Fully sealed AGM",
      "Sized for kayaks and small boats"
    ],
    "cons": [
      "Only 50Ah of capacity",
      "Not a starting battery"
    ],
    "bestFor": "Kayaks and small boats",
    "take": "A low-cost 50Ah battery for small boats.",
    "catch": "50Ah is only a few hours of motor time at moderate draw."
  }
];

export const howWeEvaluated = [
  {
    "title": "Group size",
    "description": "Tray fit across 24M, 27M, 31M and Group 31."
  },
  {
    "title": "Capacity",
    "description": "Amp-hours and reserve capacity."
  },
  {
    "title": "Cranking",
    "description": "CCA and marine cranking amps."
  },
  {
    "title": "Chemistry",
    "description": "AGM versus lithium."
  },
  {
    "title": "Marine claims",
    "description": "Marine and trolling motor labels."
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
    "subheading": "By Boat Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Large boat with a starter",
          "Weize 31M Dual-Purpose AGM",
          "110Ah and 825 CCA."
        ],
        [
          "Marine cranking needs",
          "Mighty Max 27M Marine AGM",
          "850 MCA stated."
        ],
        [
          "Mid-size boat",
          "Weize 24M Dual-Purpose AGM",
          "90Ah at a lower price."
        ],
        [
          "Trolling motor all day",
          "VEMDIA 100Ah LiFePO4",
          "24 lb with 100Ah."
        ],
        [
          "Kayak or jon boat",
          "Newport 50Ah Marine AGM",
          "Compact sealed AGM."
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
          "$120 to $150",
          "Newport 50Ah Marine AGM or VEMDIA 100Ah LiFePO4"
        ],
        [
          "$180 to $230",
          "Weize 24M Dual-Purpose AGM or Weize 31M Dual-Purpose AGM"
        ],
        [
          "$220 to $230",
          "Mighty Max 27M Marine AGM"
        ]
      ]
    }
  },
  {
    "subheading": "AGM vs Lithium",
    "cards": [
      {
        "label": "AGM",
        "text": "Sealed, familiar and cheaper to charge, but heavy. The Weize 31M Dual-Purpose AGM, Mighty Max 27M Marine AGM, Weize 24M Dual-Purpose AGM and Newport 50Ah Marine AGM fall here."
      },
      {
        "label": "Lithium",
        "text": "Light with a long cycle life, needing a lithium charger. The VEMDIA 100Ah LiFePO4 is the one pick."
      }
    ],
    "note": "Choose the VEMDIA 100Ah LiFePO4 for a trolling motor and AGM when you need starting power."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "Top",
          "Weize 31M Dual-Purpose AGM"
        ],
        [
          "Mid",
          "Weize 24M Dual-Purpose AGM"
        ],
        [
          "Lithium value",
          "VEMDIA 100Ah LiFePO4"
        ],
        [
          "Lowest",
          "Newport 50Ah Marine AGM"
        ]
      ]
    }
  },
  {
    "subheading": "Trolling Motor Days",
    "cards": [
      {
        "label": "Look for",
        "text": "Stable amp-hours, weight and a charger match."
      },
      {
        "label": "In this comparison",
        "text": "The VEMDIA 100Ah LiFePO4 offers 100Ah at 24 lb, and the Newport 50Ah Marine AGM is sized for small trolling motors."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Weize 31M Dual-Purpose AGM for starting power, or the VEMDIA 100Ah LiFePO4 for light weight."
      },
      {
        "label": "Save if",
        "text": "Save with the Newport 50Ah Marine AGM for kayaks and small boats."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Group size and tray fit",
    "explanation": "Group 24M, 27M and 31M differ in length and height, so measure the tray before buying. A battery that is too tall fails to clear the cover. Check the dimensions in the listing."
  },
  {
    "criterion": "CCA, MCA and deep cycling",
    "explanation": "Cranking amps matter only if the battery starts an engine. Marine cranking amps are measured differently, at 32 degrees F. Pure house batteries do not need high cranking figures."
  },
  {
    "criterion": "Dual-purpose versus deep cycle",
    "explanation": "A dual-purpose AGM starts an engine and runs electronics but tolerates fewer deep cycles. A pure deep cycle is better for trolling motors. Use dual-purpose only when one battery must do both."
  },
  {
    "criterion": "AGM versus lithium",
    "explanation": "AGM is heavier, sealed and cheaper per unit, while lithium is far lighter and lasts for more cycles. Lithium needs a matching charger and has charging limits in cold. Check the BMS rating and temperature notes."
  },
  {
    "criterion": "Wiring, fuses and ventilation",
    "explanation": "Fuse the positive lead close to the battery and secure the battery against pounding waves. Sealed batteries still need a ventilated tray when charging. Do not mix old and new batteries."
  }
];

export const faq = [
  {
    "q": "What size marine battery do I need?",
    "a": "Add the amp draw of your motor and electronics times the hours you run them, then double it for depth-of-discharge limits. A 100Ah battery like the Mighty Max 27M Marine AGM covers a day's light use."
  },
  {
    "q": "What is the common mistake?",
    "a": "Buying a starting battery for a trolling motor. Starters suit short bursts, while a deep cycle suits long draws. Choose by use."
  },
  {
    "q": "Is lithium worth it on a boat?",
    "a": "For weight and cycle life, yes, as with the VEMDIA 100Ah LiFePO4. AGM is fine for occasional use and cold tolerance. Match the charger to the chemistry."
  },
  {
    "q": "How do I secure and wire one?",
    "a": "Strap it in a box, fuse the positive near the battery, and use properly sized cables. Keep terminals covered. Wire in parallel only with matched batteries."
  },
  {
    "q": "How do I maintain it?",
    "a": "Keep it charged, clean terminals, and store cool. Sealed AGM like the Newport 50Ah Marine AGM needs no watering. Charge before winter storage."
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
