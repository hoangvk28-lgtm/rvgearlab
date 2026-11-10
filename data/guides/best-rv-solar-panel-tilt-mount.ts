export const guideSlug = "best-rv-solar-panel-tilt-mount";
export const guideTitle = "2 Best RV Solar Panel Tilt Mount in 2026";
export const metaTitle = "Best RV Solar Panel Tilt Mount in 2026";
export const metaDescription = "Two 30W solar kits with adjustable tilt brackets for RVs compared: the Voltset 30W with a 60 degree arm and the Hoysicy 30W with 360 degree adjustment.";
export const mainKeyword = "best rv solar panel tilt mount";
export const introParagraphs = [
  "A tilted panel can collect noticeably more energy than a flat one, especially in winter or when parked facing the wrong way. Tilt brackets let you chase the sun, but only if they hold their angle in wind. This guide compares two 30W kits, both with controllers included, and explains who benefits from tilting and when a bigger fixed panel beats them."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/518vbRRp47L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-solar-panel-tilt-mount-1",
    "rank": 1,
    "badge": "Best Budget",
    "name": "Hoysicy 12V Solar Battery Charger 30W Solar Panel Kit",
    "price": "$44.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/518vbRRp47L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GHMWY4G3?tag=rvgearlab-amz-20",
    "description": "The Hoysicy 30W kit has a 10A controller with an LCD display and dual USB ports, plus a bracket described as adjustable 360 degrees. It is IP65 rated, works with 12V LiFePO4, AGM and other batteries, and costs $44.99.\n\nIt is $25.00 cheaper than the Voltset 30W and adds an LCD and USB ports, while the Voltset adds an MPPT controller. Pick this if you want a screen and a cheap tilting setup. The caveat: the listing does not say MPPT or PWM, so output may be lower.",
    "specs": [
      "30W, 10A controller",
      "LCD plus dual USB",
      "IP65, adjustable bracket"
    ],
    "pros": [
      "LCD display shows charging status at a glance",
      "Dual USB ports charge phones directly",
      "Costs $25.00 less than the Voltset 30W"
    ],
    "cons": [
      "Controller type is not stated as MPPT",
      "A 30W panel is small for real loads"
    ],
    "bestFor": "Cheap tilting kit with USB ports"
  },
  {
    "id": "best-rv-solar-panel-tilt-mount-2",
    "rank": 2,
    "badge": "Best for MPPT Charging",
    "name": "Voltset 30W Solar Panel Kit 12V Solar Battery Trickle Charger Maintainer",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Otq8BEJhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C9PRGVKM?tag=rvgearlab-amz-20",
    "description": "The Voltset 30W includes a 10A MPPT controller said to generate 20 to 30% more power than ordinary controllers, plus a 60 degree heavy-duty bracket with an alloy ball joint. It has LED status lights and an aluminum frame and costs $69.99.\n\nIt costs $25.00 more than the Hoysicy 30W but has the MPPT controller and ball-joint bracket. Pick this if you want the best energy from 30W. The caveat: the bracket tilts 60 degrees, and the claim of 20 to 30% extra is a manufacturer figure.",
    "specs": [
      "30W with 10A MPPT",
      "60 degree ball-joint bracket",
      "LED status indicators"
    ],
    "pros": [
      "MPPT controller squeezes more from a small panel",
      "Alloy ball joint locks the tilt angle",
      "Aluminum frame with tempered glass surface"
    ],
    "cons": [
      "Costs $25.00 more than the Hoysicy 30W",
      "No screen, only three LED lights"
    ],
    "bestFor": "Squeezing the most from 30W"
  }
];

export const howWeEvaluated = [
  {
    "title": "Tilt range",
    "description": "We compared the stated bracket movement of each kit."
  },
  {
    "title": "Controller",
    "description": "We checked controller type and listed amp rating."
  },
  {
    "title": "Kit contents",
    "description": "We looked at what ships in the box, including cables and mounting hardware."
  },
  {
    "title": "Missing data",
    "description": "We marked unlisted details like warranty as not listed."
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
    "subheading": "By Tilt Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Rotate fully to follow the sun",
          "Hoysicy 30W",
          "It lists 360 degree adjustment."
        ],
        [
          "Set an angle and leave it",
          "Voltset 30W",
          "The ball joint holds a 60 degree angle."
        ],
        [
          "Winter use at low sun angles",
          "Voltset 30W",
          "MPPT helps when light is weak."
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
          "$40 to $50",
          "Hoysicy 30W"
        ],
        [
          "$60 to $70",
          "Voltset 30W"
        ]
      ]
    }
  },
  {
    "subheading": "MPPT vs Display and USB",
    "cards": [
      {
        "label": "MPPT",
        "text": "MPPT controllers pull more power from the same panel. Voltset 30W has one."
      },
      {
        "label": "Display and USB",
        "text": "An LCD and USB ports give visibility and phone charging. Hoysicy 30W has both."
      }
    ],
    "note": "Most owners should pick Voltset 30W unless the screen and USB matter."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Spend level",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $50",
          "Hoysicy 30W"
        ],
        [
          "Around $70",
          "Voltset 30W"
        ],
        [
          "Phone charging priority",
          "Hoysicy 30W"
        ]
      ]
    }
  },
  {
    "subheading": "For Parked Weekend Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A bracket that locks at an angle and a controller with battery protection."
      },
      {
        "label": "In this comparison",
        "text": "Voltset 30W locks with an alloy ball; Hoysicy 30W adjusts further but its lock is not described."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Voltset 30W if you want MPPT charging on a 30W panel."
      },
      {
        "label": "Save if",
        "text": "Save $25.00 with the Hoysicy 30W if the screen and USB ports are enough."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Tilt angle for your latitude",
    "explanation": "A common rule is to tilt toward the sun by roughly your latitude, steeper in winter. Fixed flat panels lose output at low sun. Check the bracket's stated range."
  },
  {
    "criterion": "Bracket holding strength",
    "explanation": "A bracket that slips in wind wastes the benefit of tilting and can drop the panel. Ball joints and locking screws matter. Check the listing for the lock style."
  },
  {
    "criterion": "MPPT versus PWM",
    "explanation": "MPPT extracts more power in cool, low light, while PWM is simpler and cheaper. The difference is most visible in winter. Check whether the listing names the controller type."
  },
  {
    "criterion": "Wattage ceiling",
    "explanation": "A 30W panel makes only about 100 to 150Wh a day. That runs lights and a fan, not a fridge. Compare that figure with your daily use."
  },
  {
    "criterion": "Cable length",
    "explanation": "Short cables force the panel near the battery, while long runs lose voltage. Thin cable at 10A loses more. Check the cable length and gauge in the listing."
  }
];

export const faq = [
  {
    "q": "Is tilting worth it for 30W?",
    "a": "Yes for maintaining a battery in winter, no for replacing a roof array. The gain is greatest at low sun angles."
  },
  {
    "q": "Can I mount these permanently?",
    "a": "They have pre-set mounting holes, but check the brackets for roof use. Seal any drilled holes."
  },
  {
    "q": "Does the Hoysicy use MPPT?",
    "a": "The listing does not say, so assume a simpler controller. Compare with the Voltset if efficiency matters."
  },
  {
    "q": "How long do 30W kits last?",
    "a": "The listings do not state warranty, so confirm with the seller. Weather sealing is IP65 on the Hoysicy."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Lightweight Solar Panel For RV",
    "href": "/power-electrical/best-lightweight-solar-panel-for-rv"
  },
  {
    "title": "Best Portable RV Solar Panel Kit",
    "href": "/power-electrical/best-portable-rv-solar-panel-kit"
  },
  {
    "title": "Best Solar Panel For Boondocking RV",
    "href": "/power-electrical/best-solar-panel-for-boondocking-rv"
  },
  {
    "title": "Best Solar Panel For Travel Trailer",
    "href": "/power-electrical/best-solar-panel-for-travel-trailer"
  }
];
