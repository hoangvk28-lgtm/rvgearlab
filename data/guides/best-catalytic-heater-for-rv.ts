export const guideSlug = "best-catalytic-heater-for-rv";
export const guideTitle = "2 Best Catalytic Heater For RV in 2026";
export const metaTitle = "Best Catalytic Heater For RV in 2026";
export const metaDescription = "Two portable catalytic propane heaters for RV life, a 6,200 BTU Blazeal and an 8,520 BTU Hotdevil, compared for campers on output and price.";
export const mainKeyword = "best catalytic heater for rv";
export const introParagraphs = [
  "Catalytic heaters are popular in RVs because they burn propane flamelessly and need no shore power. The real differences are how they ignite, how they are built and how much heat they give per dollar. These two portable catalytic burners cover a budget option and a higher-output option."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41Hz8Z6FmML._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-catalytic-heater-for-rv-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Hotdevil Portable Propane Heater Catalytic Burner with Foldable Cylinder Base，8520 BTU Power with Control Valv",
    "price": "$63.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Hz8Z6FmML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FKMWC1S6?tag=rvgearlab-amz-20",
    "description": "The Hotdevil is a portable catalytic propane heater rated at 8,520 BTU, with a combustion head twice the size of traditional models. Pulse ignition runs on two AAA batteries and the burner takes 1 lb propane cylinders.\n\nIt out-powers the Blazeal on stated BTU and adds a protective mesh guard and a stable cylinder holder. It is the stronger step up from small camp heaters for a trailer interior or an awning.",
    "specs": [
      "8,520 BTU catalytic burner",
      "Pulse ignition, AAA batteries",
      "Mesh guard, cylinder holder"
    ],
    "pros": [
      "More heat than the Blazeal at 8,520 BTU",
      "Catalytic burner cuts carbon monoxide output",
      "Wind-resistant with quick reignition"
    ],
    "cons": [
      "Batteries and propane cylinders sold separately",
      "Draws through small 1 lb cylinders quickly"
    ],
    "bestFor": "Portable high-output heat"
  },
  {
    "id": "best-catalytic-heater-for-rv-2",
    "rank": 2,
    "badge": "Best Budget Pick",
    "name": "BLAZEAL Portable Propane Heater with Upgrade Catalytic Infrared Burner & Free-Bending Snake Hose for Outdoor a",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/314j1bxUXtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FSS74JRQ?tag=rvgearlab-amz-20",
    "description": "The Blazeal is a portable propane heater with an upgraded catalytic infrared burner producing 6,200 BTU, said to heat about 200 square feet. A control knob sets the output and a brass hose connects it to the cylinder.\n\nIt sits below the Hotdevil on output but is the lowest priced catalytic heater in this list, with an all-aluminum reflector and safety mesh guard. It is the easiest way to try catalytic heating in a small camper. It suits weekend campers and van owners who only need modest heat.",
    "specs": [
      "6,200 BTU catalytic burner",
      "Heats about 200 sq. ft.",
      "Brass hose, aluminum reflector"
    ],
    "pros": [
      "Lowest price among the catalytic heaters here",
      "Adjustable heat with a simple control knob",
      "Brass hose and mesh guard add safety"
    ],
    "cons": [
      "Lower output than the Hotdevil",
      "Propane tank not included"
    ],
    "bestFor": "Small campers and occasional trips"
  }
];

export const howWeEvaluated = [
  {
    "title": "Heat output",
    "description": "We compared stated BTU ratings and coverage areas against typical RV living spaces."
  },
  {
    "title": "Ignition type",
    "description": "Piezo and battery pulse start were compared for reliability off grid."
  },
  {
    "title": "Safety build",
    "description": "Shut-off valves, guards and hose materials were weighed."
  },
  {
    "title": "Portability",
    "description": "Weight, base design and cylinder handling were considered for moving between camps."
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
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Short trips in a small trailer",
          "Blazeal Catalytic Heater",
          "Adequate 6,200 BTU at the lowest price"
        ],
        [
          "Chilly nights, bigger space",
          "Hotdevil 8520 Heater",
          "Highest portable output at 8,520 BTU"
        ],
        [
          "Awning or patio use",
          "Hotdevil 8520 Heater",
          "Wind-resistant catalytic burner"
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
          "$20 to $30",
          "Blazeal Catalytic Heater"
        ],
        [
          "$60 to $70",
          "Hotdevil 8520 Heater"
        ]
      ]
    }
  },
  {
    "subheading": "Pulse Ignition vs Manual Lighting",
    "cards": [
      {
        "label": "Pulse ignition",
        "text": "Hotdevil 8520 Heater lights with a pulse spark from two AAA batteries."
      },
      {
        "label": "Knob control",
        "text": "Blazeal Catalytic Heater is adjusted by a control knob and costs less."
      }
    ],
    "note": "Choose Hotdevil 8520 Heater for colder trips and Blazeal Catalytic Heater for mild ones."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest cost",
          "Blazeal Catalytic Heater"
        ],
        [
          "Best heat per dollar",
          "Hotdevil 8520 Heater"
        ],
        [
          "Most BTU",
          "Hotdevil 8520 Heater"
        ]
      ]
    }
  },
  {
    "subheading": "For Winter Weekends Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Enough BTU for the trailer length plus a mesh guard."
      },
      {
        "label": "In this comparison",
        "text": "Hotdevil 8520 Heater gives 8,520 BTU for cold nights, while Blazeal Catalytic Heater suits milder weather."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Hotdevil 8520 Heater if nights drop well below freezing."
      },
      {
        "label": "Save if",
        "text": "Save with Blazeal Catalytic Heater if you only need light heat a few nights a year."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What catalytic means",
    "explanation": "A catalytic burner oxidizes propane across a heated pad instead of using an open flame, giving gentler radiant heat and fewer emissions. It still consumes oxygen. Look for the word catalytic in the product name or bullets."
  },
  {
    "criterion": "BTU and room size",
    "explanation": "BTU measures heat output per hour. About 6,000 BTU is a typical figure for 200 square feet, and an 8,000 plus unit suits larger spaces. Match the stated coverage to your trailer length."
  },
  {
    "criterion": "Ignition style",
    "explanation": "Piezo lighters need no power, while battery pulse ignition needs AAA cells you must carry. The Hotdevil uses pulse ignition with two AAA batteries. Check which type each listing names."
  },
  {
    "criterion": "Fuel connection",
    "explanation": "Small 1 lb cylinders are convenient but run dry fast. A hose to a larger tank gives longer runtime. See which fuel options the listing allows."
  },
  {
    "criterion": "Ventilation needs",
    "explanation": "All propane heaters consume oxygen and create moisture. Crack a vent and keep a carbon monoxide alarm working. Look for oxygen or safety shut-off features on the product page."
  }
];

export const faq = [
  {
    "q": "Can I run a catalytic heater while sleeping?",
    "a": "Only if it has an oxygen or shut-off safeguard, you vent the RV and a working carbon monoxide alarm is present."
  },
  {
    "q": "Is a catalytic heater better than a radiant one?",
    "a": "Catalytic units burn more cleanly and quietly, but they still need ventilation and cost more."
  },
  {
    "q": "What fuel do these use?",
    "a": "Propane. Both the Hotdevil and the Blazeal run on 1 lb cylinders, which are sold separately."
  },
  {
    "q": "How should I store it?",
    "a": "Let it cool, disconnect the cylinder and keep the burner pad dry and clean."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Catalytic Heater For Large RV",
    "href": "/interior-comfort/best-catalytic-heater-for-large-rv"
  },
  {
    "title": "Best Catalytic Heater With Piezo Ignition",
    "href": "/interior-comfort/best-catalytic-heater-with-piezo-ignition"
  },
  {
    "title": "Best 1500 Watt Space Heater For RV",
    "href": "/interior-comfort/best-1500-watt-space-heater-for-rv"
  },
  {
    "title": "Best Anode Rod For RV Water Heater",
    "href": "/water-plumbing/best-anode-rod-for-rv-water-heater"
  }
];
