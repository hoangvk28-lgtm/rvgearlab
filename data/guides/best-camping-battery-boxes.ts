export const guideSlug = "best-camping-battery-boxes";
export const guideTitle = "4 Best Camping Battery Boxes in 2026";
export const metaTitle = "Best Camping Battery Boxes in 2026";
export const metaDescription = "Best camping battery boxes compared on battery group fit, venting, hold-down straps and built-in ports, for trailers, tents and small off-grid power setups.";
export const mainKeyword = "best camping battery boxes";
export const introParagraphs = [
  "A battery box keeps a camping battery contained, held down and protected from splashes, but the right box depends on battery size and chemistry. Four boxes cover a small lithium battery, two group sizes of lead-acid and a double box for two golf-cart batteries.",
  "They were compared on which battery sizes they fit, ventilation, hold-down method and extras like ports. Always match the box to the exact battery you own."
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
    "id": "best-camping-battery-boxes-1",
    "rank": 1,
    "badge": "Best for Two Batteries",
    "name": "Camco Double Battery Box",
    "price": "$35.69",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41np3Hs7vBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07V4482W1?tag=rvgearlab-20",
    "description": "The Camco Double Battery Box holds two 6V Group GC2 batteries or two 12V Group 24/24M batteries. Inner dimensions are 21.5 by 7.375 by 11.19 inches, and it includes two straps and four strap clamps with screws.\n\nAgainst the Camco Large box, it takes a pair of batteries, which is the layout for 12V from two 6V golf-cart cells. The listing says it meets USCG CFR 183.420 and ABYC E-10.7 specifications with two GC2 batteries.\n\nIt suits trailer and truck-camper owners with a two-battery bank. The corrosion-resilient polymer shell is made in the USA.",
    "specs": [
      "Holds 2 GC2 or 2 Group 24",
      "21.5 by 7.375 by 11.19 inches",
      "USCG and ABYC specs named"
    ],
    "pros": [
      "Takes two batteries",
      "Straps and clamps included",
      "USCG and ABYC specs named",
      "Corrosion-resilient polymer"
    ],
    "cons": [
      "Does not fit Group 27 batteries",
      "Box only, batteries not included"
    ],
    "bestFor": "Two-battery trailer banks",
    "take": "The two-battery pick with straps and marine specs named.",
    "catch": "It is built for GC2 and Group 24, so measure bigger batteries first."
  },
  {
    "id": "best-camping-battery-boxes-2",
    "rank": 2,
    "badge": "Best Value Lead-Acid",
    "name": "Camco Large Battery Box",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ufSOUQISL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00EOX2OKS?tag=rvgearlab-20",
    "description": "The Camco Large Battery Box fits group size 27, 30 and 31 batteries, with inside dimensions of 7.25 by 13.25 by 8.625 inches. It includes a lift-off lid, a woven hold-down strap, foot clamps and stainless steel screws, and the shell is lightweight polypropylene.\n\nCompared with the Attwood, it fits a wider group range and costs a little less. The lid lifts off for full access.\n\nIt suits trailer tongues and truck beds with a single large lead-acid battery. The listing says it meets USCG CFR 183.420 and ABYC E-10.7.",
    "specs": [
      "Fits Group 27, 30 and 31",
      "Lift-off lid, woven strap",
      "USCG and ABYC specs named"
    ],
    "pros": [
      "Fits three group sizes",
      "Lift-off lid and strap included",
      "Stainless steel screws",
      "Lowest price of the lead-acid boxes"
    ],
    "cons": [
      "No vent design is named",
      "Sized for large lead-acid batteries"
    ],
    "bestFor": "Single large battery in a trailer",
    "take": "A low-cost box that fits three common group sizes.",
    "catch": "The listing names no vents, so check how your battery type needs to breathe."
  },
  {
    "id": "best-camping-battery-boxes-3",
    "rank": 3,
    "badge": "Best Vented Box",
    "name": "Attwood 9067-1 Vented Battery Box with Mounting Strap",
    "price": "$26.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41P+K4CybtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B001O0D6QK?tag=rvgearlab-20",
    "description": "The Attwood 9067-1 fits Group 27 batteries up to 10.5 inches high, with interior measures of 13.06 by 6.9 by 10.5 inches. The polypropylene shell is impact rated from -20F to +120F, and a vented design lets battery gases escape.\n\nAgainst the Camco Large, it adds a stated vent and a stronger 40 inch strap rated for 350 lbs of force. It is built for one battery size, so the fit is precise.\n\nIt suits boat, trailer and camper owners with a flooded Group 27 battery that needs ventilation. The listing says it complies with ABYC E-10 and USCG 183.420.",
    "specs": [
      "Fits Group 27 up to 10.5 inches",
      "Vented, -20F to +120F rated",
      "40 inch strap, 350 lb rating"
    ],
    "pros": [
      "Vented for battery gases",
      "Strap rated for 350 lbs",
      "Wide temperature rating",
      "ABYC and USCG compliance named"
    ],
    "cons": [
      "Fits Group 27 only",
      "Not sized for small lithium batteries"
    ],
    "bestFor": "Flooded Group 27 batteries",
    "take": "A vented, precisely fitted box with a rated strap.",
    "catch": "It fits one group size, so measure your battery."
  },
  {
    "id": "best-camping-battery-boxes-4",
    "rank": 4,
    "badge": "Best for Lithium",
    "name": "12V Portable Waterproof Battery Box for 30/20/10Ah Lifepo4 Battery RV Boat",
    "price": "$55.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rK2xAS0FL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D2K7HL64?tag=rvgearlab-20",
    "description": "The POWO Carlife box holds 30, 20, 18, 16 or 10Ah batteries, with dual QC3.0 and PD ports, a 30A overload protection and an Anderson plug for solar charging. The listing describes a waterproof, dustproof seal.\n\nCompared with the Camco boxes, it is a powered portable box, not a plain tray. It suits small lithium batteries at a higher price.\n\nIt suits campers who want a ready power hub for lights, phone charging and a solar input. The listing names camping, fishing and photography among the uses.",
    "specs": [
      "Fits 10 to 30Ah batteries",
      "Dual QC3.0 plus PD ports",
      "30A overload protection"
    ],
    "pros": [
      "USB ports built in",
      "Anderson plug for solar",
      "Waterproof and dustproof seal named",
      "30A overload protection"
    ],
    "cons": [
      "Priciest box here",
      "Battery not included"
    ],
    "bestFor": "Small lithium power hub",
    "take": "A sealed box with ports and a solar plug for small lithium batteries.",
    "catch": "You supply the battery, and the box fits only 30Ah and smaller."
  }
];

export const howWeEvaluated = [
  {
    "title": "Battery fit",
    "description": "Listed group sizes and inner dimensions were compared."
  },
  {
    "title": "Venting",
    "description": "Whether a vent is named was noted, since flooded batteries release gas."
  },
  {
    "title": "Hold-down",
    "description": "Straps and clamps were compared."
  },
  {
    "title": "Ports and extras",
    "description": "Built-in ports and solar plugs were weighed."
  },
  {
    "title": "Standards",
    "description": "USCG and ABYC references were noted where listed."
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
    "subheading": "By Battery Setup",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Two golf-cart batteries",
          "Camco Double Battery Box",
          "Holds two GC2."
        ],
        [
          "One Group 27 flooded",
          "Attwood 9067-1 Vented Box",
          "Vented and sized."
        ],
        [
          "Group 30 or 31",
          "Camco Large Battery Box",
          "Fits three groups."
        ],
        [
          "Small lithium for lights",
          "POWO Carlife 30Ah Box",
          "10 to 30Ah and USB ports."
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
          "Camco Large Battery Box or Attwood 9067-1 Vented Box"
        ],
        [
          "$30 to $70",
          "Camco Double Battery Box or POWO Carlife 30Ah Box"
        ]
      ]
    }
  },
  {
    "subheading": "Plain Box vs Powered Box",
    "cards": [
      {
        "label": "Plain box",
        "text": "A plain box holds and protects the battery. The Camco Double Battery Box, Camco Large Battery Box and Attwood 9067-1 Vented Box are this type."
      },
      {
        "label": "Powered box",
        "text": "A powered box adds ports and a solar plug. The POWO Carlife 30Ah Box is this type."
      }
    ],
    "note": "Pick a Camco or Attwood box for lead-acid and the POWO Carlife 30Ah Box for small lithium."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price",
          "Camco Large Battery Box"
        ],
        [
          "Marine vented",
          "Attwood 9067-1 Vented Box"
        ],
        [
          "Premium power hub",
          "POWO Carlife 30Ah Box"
        ]
      ]
    }
  },
  {
    "subheading": "Trailer Tongue Mounting",
    "cards": [
      {
        "label": "Look for",
        "text": "A strap, clamps and a size matched to your battery group."
      },
      {
        "label": "In this comparison",
        "text": "The Camco Large Battery Box includes strap and foot clamps, and the Attwood 9067-1 Vented Box adds a rated strap."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the POWO Carlife 30Ah Box if you want ports and a solar plug."
      },
      {
        "label": "Save if",
        "text": "Save with the Camco Large Battery Box for a basic hold-down."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match the group size",
    "explanation": "Battery group sizes set the case dimensions, so a box must match the group. Measure your battery length, width and height. Allow headroom for terminals."
  },
  {
    "criterion": "Ventilation by chemistry",
    "explanation": "Flooded lead-acid batteries release hydrogen when charging and need ventilation. Sealed and lithium batteries are different. Check your battery maker's guidance."
  },
  {
    "criterion": "Hold-down strength",
    "explanation": "A battery that shifts can short on metal. A strap with clamps holds it still. Look for the strap's rating on the listing."
  },
  {
    "criterion": "Standards and compliance",
    "explanation": "USCG CFR 183.420 and ABYC E-10 are marine standards. A box that names them follows tested practice. Check the wording, since compliance may depend on battery type."
  },
  {
    "criterion": "Powered versus plain",
    "explanation": "A plain tray only holds the battery. A powered box adds ports and fuses. Choose by whether you want a hub."
  }
];

export const faq = [
  {
    "q": "Do all batteries need a vented box?",
    "a": "Flooded lead-acid batteries need ventilation, while sealed types differ. The Attwood 9067-1 Vented Box names venting. Follow your battery maker's guidance."
  },
  {
    "q": "What is the common mistake?",
    "a": "Buying a box by battery voltage instead of group size. Measure the battery. Allow terminal headroom."
  },
  {
    "q": "Is the Camco Double worth it over a single box?",
    "a": "If you run two batteries, yes. The Camco Double Battery Box holds two GC2. A single battery fits the Camco Large Battery Box."
  },
  {
    "q": "How do I secure a battery?",
    "a": "Seat it flat and run the strap tight over the top. Fit the clamps and screws. Check it before each trip."
  },
  {
    "q": "How do I maintain a battery box?",
    "a": "Wipe spills with a baking soda solution and check for corrosion. Keep vents clear. Inspect straps for wear."
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
