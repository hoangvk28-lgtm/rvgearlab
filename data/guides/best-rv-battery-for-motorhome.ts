export const guideSlug = "best-rv-battery-for-motorhome";
export const guideTitle = "2 Best RV Battery For Motorhome in 2026";
export const metaTitle = "Best RV Battery For Motorhome in 2026";
export const metaDescription = "Two 12V 100Ah house batteries for motorhomes, a Group 24 LiFePO4 and a Weize AGM, compared on usable energy, warranty, size and price.";
export const mainKeyword = "best rv battery for motorhome";
export const introParagraphs = [
  "A motorhome house battery has to survive vibration, dry camping and long stretches between charges. Chemistry matters more than brand: AGM is cheap and proven, LiFePO4 gives far more usable energy per pound. These two 12V 100Ah options show that trade clearly. Keep your chassis starting battery separate, since neither is a starter battery."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41IQJe4qFqL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-battery-for-motorhome-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "power queen 12V 100Ah LiFePO4 Battery",
    "price": "$242.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41IQJe4qFqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLRY5J2N?tag=rvgearlab-20",
    "description": "The Power Queen G24 is a 12V 100Ah LiFePO4 battery in a Group 24 case with 1280Wh of usable energy. The listing cites 4000 cycles at 100% depth of discharge, a 5-year warranty and 1/3 the weight of Group 24 AGM. Price is $242.99.\n\nIt costs $73.00 more than the Weize AGM 100Ah but delivers about 1280Wh versus roughly 600Wh of usable AGM at 50% depth. Pick this for a motorhome house bank you want to drain deeply. Caveat: LiFePO4 needs a charger with a lithium profile.",
    "specs": [
      "12V 100Ah, 1280Wh",
      "Group 24, 5-year warranty",
      "4000 cycles at 100% DOD"
    ],
    "pros": [
      "Full 1280Wh usable, not half like AGM",
      "Five-year warranty is listed, versus one year on AGM",
      "About one third the weight of Group 24 AGM"
    ],
    "cons": [
      "Needs a charger or converter with a lithium profile",
      "Costs $73.00 more upfront than the AGM pick"
    ],
    "bestFor": "Deep-cycle house banks"
  },
  {
    "id": "best-rv-battery-for-motorhome-2",
    "rank": 2,
    "badge": "Best Budget",
    "name": "Weize Deep Cycle AGM 12 Volt 100Ah Battery",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bqV6Wt2oL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07SW353M8?tag=rvgearlab-20",
    "description": "The Weize AGM 100Ah is a sealed lead-acid battery at 12.99 x 6.73 x 8.43 inches. It charges from 14°F to 122°F, self-discharges 1 to 3% a month, and lists 1100A for 5 seconds. Price is $169.99, with a 1-year warranty.\n\nIt is $73.00 cheaper than the Power Queen G24, but AGM gives usable energy only down to about 50% depth. Pick this for a low-cost replacement on a motorhome with a standard charger. Caveat: the listing does not give weight, and you must keep it charged.",
    "specs": [
      "12V 100Ah AGM",
      "14°F to 122°F charging",
      "1-year warranty"
    ],
    "pros": [
      "Lowest upfront price of the two at $169.99",
      "Maintenance free and spill proof design",
      "Works with standard lead-acid converters, no upgrade needed"
    ],
    "cons": [
      "Only about half the capacity is practically usable",
      "One-year warranty is short for a house battery"
    ],
    "bestFor": "Low-cost replacement with standard charger"
  }
];

export const howWeEvaluated = [
  {
    "title": "Usable energy",
    "description": "We compared rated capacity and depth of discharge limits."
  },
  {
    "title": "Charging needs",
    "description": "We checked charger profile and temperature limits."
  },
  {
    "title": "Fit and weight",
    "description": "We compared case dimensions and weight claims."
  },
  {
    "title": "Price and warranty",
    "description": "We weighed cost against warranty length."
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
    "subheading": "By Dry Camping Days",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Weekend trips with shore power",
          "Weize AGM 100Ah",
          "Lower cost for light use."
        ],
        [
          "Several nights off-grid",
          "Power Queen G24",
          "1280Wh usable."
        ],
        [
          "Solar plus inverter",
          "Power Queen G24",
          "Deep cycling suits solar."
        ],
        [
          "Standard converter, no upgrade",
          "Weize AGM 100Ah",
          "Works with lead-acid charger."
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
          "$160 to $170",
          "Weize AGM 100Ah"
        ],
        [
          "$240 to $250",
          "Power Queen G24"
        ]
      ]
    }
  },
  {
    "subheading": "Lithium vs AGM",
    "cards": [
      {
        "label": "LiFePO4",
        "text": "Power Queen G24 gives 1280Wh usable and 4000 cycles but needs a lithium charge profile."
      },
      {
        "label": "AGM",
        "text": "Weize AGM 100Ah costs less and charges on any converter, but practical usable energy is about half."
      }
    ],
    "note": "Default to lithium if you can update your charger."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Recommended",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $200",
          "Weize AGM 100Ah"
        ],
        [
          "Over $200, long-term value",
          "Power Queen G24"
        ]
      ]
    }
  },
  {
    "subheading": "For Converter Upgrades Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A lithium or LiFePO4 charge profile on your converter."
      },
      {
        "label": "In this comparison",
        "text": "The Power Queen G24 needs one; the Weize AGM 100Ah does not."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "if you dry camp often, the $242.99 Power Queen G24 gives about double the usable energy."
      },
      {
        "label": "Save if",
        "text": "if you stay plugged in, the $169.99 Weize AGM 100Ah saves $73.00."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Usable versus rated capacity",
    "explanation": "AGM batteries last longer if drained only to about 50%. The Power Queen G24 lists 1280Wh at 100% usable. Compare usable Wh."
  },
  {
    "criterion": "Charger and converter compatibility",
    "explanation": "Lithium needs a lithium profile. Check your converter manual. A converter set to an AGM profile may undercharge lithium, leaving a full-looking bank at 80%."
  },
  {
    "criterion": "Group size and tray fit",
    "explanation": "The Power Queen G24 is Group 24, the Weize AGM 100Ah is 12.99 x 6.73 x 8.43 inches. Measure your tray. A battery that is taller than the compartment shelf will not close the door or hatch."
  },
  {
    "criterion": "Cold temperature charging limits",
    "explanation": "The Weize AGM lists charging from 14°F. Check low-temperature charge limits for lithium. Lithium charging below 32°F can damage cells, so a cold storage bay needs a heated option or an inside mount."
  },
  {
    "criterion": "Warranty length versus price",
    "explanation": "The Power Queen G24 lists 5 years, the Weize AGM 1 year. Compare warranty to price. A one-year warranty on a $169.99 battery is normal for AGM, but a five-year term on lithium spreads the cost over more seasons."
  }
];

export const faq = [
  {
    "q": "Can I use these as starter batteries?",
    "a": "No. Both are house-bank style deep-cycle batteries, so keep your chassis battery separate."
  },
  {
    "q": "Is lithium worth the extra $73.00?",
    "a": "For frequent dry camping, yes, because usable energy nearly doubles. For plugged-in use, AGM is fine."
  },
  {
    "q": "Does the Weize AGM need maintenance?",
    "a": "The listing describes it as maintenance free, but keep it charged."
  },
  {
    "q": "Will the Power Queen work with my converter?",
    "a": "Only if the converter has a lithium profile or suitable voltage. Check the manual."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best RV Battery Box For Lithium Batteries",
    "href": "/power-electrical/best-rv-battery-box-for-lithium-batteries"
  },
  {
    "title": "Best RV Battery For Fifth Wheel",
    "href": "/power-electrical/best-rv-battery-for-fifth-wheel"
  },
  {
    "title": "Best RV Battery For Pop Up Camper",
    "href": "/power-electrical/best-rv-battery-for-pop-up-camper"
  },
  {
    "title": "Best RV Battery For Travel Trailer",
    "href": "/power-electrical/best-rv-battery-for-travel-trailer"
  }
];
