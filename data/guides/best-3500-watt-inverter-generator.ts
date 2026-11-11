export const guideSlug = "best-3500-watt-inverter-generator";
export const guideTitle = "3 Best 3500 Watt Inverter Generator in 2026";
export const metaTitle = "Best 3500 Watt Inverter Generator in 2026";
export const metaDescription = "Three 3500W inverter generators compared on running watts, 30A RV outlets, eco mode runtime and price, with a clear pick for each camper setup.";
export const mainKeyword = "best 3500 watt inverter generator";
export const introParagraphs = [
  "At 3500 watts the question changes from whether a generator can hold a fridge to whether it can handle one RV air conditioner. The three picks here all list 3000 or more running watts and a 30 amp RV outlet, but they separate on runtime and open frame design. Prices span $279 to $399.99, so we checked what each extra dollar buys before ranking them."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/51Xsjm+woeL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-3500-watt-inverter-generator-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "MaXpeedingrods 3500 Watt Portable Inverter Generator EPA Compliant",
    "price": "$399.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Xsjm+woeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09PBFVWFK?tag=rvgearlab-amz-20",
    "description": "This unit lists 3500 peak and 3000 running watts, a 30A RV outlet, two 20A outlets and two USB ports. Its Eco mode is rated at 8.3 hours at 25% load (750W), and it sells for $399.99 with EPA compliance.\n\nIt costs $24.84 more than the AFOERIT and $120.99 more than the All Power America, and the listing documents runtime at a stated load. It is the most fully described of the three. Pick this if you want clear runtime data; the caveat is the highest price.",
    "specs": [
      "3500W peak, 3000W running",
      "8.3 hrs at 25% load",
      "30A RV outlet, 2 x 20A"
    ],
    "pros": [
      "Runtime is listed at a stated 25% load",
      "Has a 30A RV outlet plus two 20A outlets",
      "EPA compliant listing for broader state use"
    ],
    "cons": [
      "Costs the most of the three picks",
      "Weight is not listed"
    ],
    "bestFor": "Campers who want documented runtime"
  },
  {
    "id": "best-3500-watt-inverter-generator-2",
    "rank": 2,
    "badge": "Runner-Up",
    "name": "3500 Watt Generator Portable Inverter Power RV Camping CO Protect",
    "price": "$375.15",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41X4X6UtTeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CWRWVMM9?tag=rvgearlab-amz-20",
    "description": "The AFOERIT lists 3500 peak and about 3000 typical running watts, with CO protection and a handle for carrying. It costs $375.15 and is aimed at RV camping.\n\nIt sits $24.84 below the maXpeedingrods, but the listing is thinner on runtime and outlet detail. The saving is real, yet you get less data to verify claims. Pick this if you want CO protection at a lower price; the caveat is that quiet operation is described without a dB figure.",
    "specs": [
      "3500W peak, 3000W running",
      "CO protection included",
      "Handle for transport"
    ],
    "pros": [
      "CO protection is built in for safer camping",
      "Lists 3000W typical running output for steady loads",
      "Cheaper than the top ranked pick"
    ],
    "cons": [
      "No dB figure behind its quiet claim",
      "Runtime figures are not listed"
    ],
    "bestFor": "Budget minded campers wanting CO protection"
  },
  {
    "id": "best-3500-watt-inverter-generator-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "3500 Watts Inverter Generator Gas Powered",
    "price": "$279.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41MUWLm4HAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H6WTL5BJ?tag=rvgearlab-amz-20",
    "description": "This open frame unit lists 3500 running and 4375 peak watts, a 3 gallon tank, one 20A plug and a 30A RV outlet. At $279 it is the cheapest of the three and has the largest tank.\n\nIt costs $96.15 less than the AFOERIT and $120.99 less than the maXpeedingrods, and its running watts exceed both. The trade is an open frame body that is likely noisier and bulkier. Pick this if you want maximum running watts per dollar; the caveat is that noise and weight are not listed.",
    "specs": [
      "3500W running, 4375W peak",
      "3 gallon fuel tank",
      "20A plug and 30A RV outlet"
    ],
    "pros": [
      "Highest running watts of the group",
      "Largest fuel tank at 3 gallons",
      "Lowest price in this roundup, with big tank"
    ],
    "cons": [
      "Only one 20A plug plus the 30A outlet",
      "Open frame design and noise figure unclear"
    ],
    "bestFor": "Maximum running watts per dollar"
  }
];

export const howWeEvaluated = [
  {
    "title": "Running watts at 3500",
    "description": "We checked whether the listing's continuous rating actually approaches the 3500 label."
  },
  {
    "title": "RV outlet access",
    "description": "We confirmed each unit offers a 30 amp RV outlet for direct hookup."
  },
  {
    "title": "Runtime documentation",
    "description": "We favored listings that state hours at a specific load percentage."
  },
  {
    "title": "Price versus detail",
    "description": "We weighed each unit's price against how much it lets you verify."
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
    "subheading": "By Running Watts Required",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Need the most continuous power, 3500W",
          "All Power America 3500",
          "It lists 3500 running watts, above the others"
        ],
        [
          "Need around 3000W with documented runtime",
          "maXpeedingrods 3500",
          "Lists 8.3 hours at 25% load"
        ],
        [
          "Need 3000W with CO protection on a budget",
          "AFOERIT 3500",
          "CO protection at $375.15"
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
          "$270 to $280",
          "All Power America 3500"
        ],
        [
          "$370 to $380",
          "AFOERIT 3500"
        ],
        [
          "$390 to $400",
          "maXpeedingrods 3500"
        ]
      ]
    }
  },
  {
    "subheading": "Open Frame vs Enclosed Inverter",
    "cards": [
      {
        "label": "Open frame",
        "text": "The All Power America 3500 uses an open frame, which cuts cost and adds fuel capacity, but exposes the engine and usually runs louder."
      },
      {
        "label": "Enclosed inverter",
        "text": "The maXpeedingrods 3500 and AFOERIT 3500 are positioned as quiet campground units with a covered body."
      }
    ],
    "note": "Choose enclosed for campgrounds and open frame for backup use or job sites."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Best match",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $300",
          "All Power America 3500"
        ],
        [
          "Around $375, want CO protection",
          "AFOERIT 3500"
        ],
        [
          "Around $400, want data and 30A outlet",
          "maXpeedingrods 3500"
        ]
      ]
    }
  },
  {
    "subheading": "For One RV Air Conditioner Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A 30A RV outlet and at least 3000 running watts"
      },
      {
        "label": "In this comparison",
        "text": "The All Power America 3500 gives 3500 running watts and a 30A outlet, the most headroom for starting a single air conditioner; the maXpeedingrods 3500 is the next best at 3000."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend on the maXpeedingrods 3500 at $399.99 if you want runtime stated at a defined 25% load."
      },
      {
        "label": "Save if",
        "text": "Save with the All Power America 3500 at $279 if you want the highest running watts and can tolerate an open frame."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Running watts at 3500",
    "explanation": "A 3500W label can still be a 3000W continuous generator, as with the maXpeedingrods 3500. For air conditioning that gap matters when other loads share the circuit. Look for the running watts line in the title or specs."
  },
  {
    "criterion": "30A RV outlet",
    "explanation": "A TT-30 style outlet lets you plug a 30 amp RV cord in directly instead of using an adapter. With adapters you are limited by the weaker outlet. Confirm the listing names a 30A RV receptacle."
  },
  {
    "criterion": "Runtime at stated load",
    "explanation": "A 3 gallon tank and an 8.3 hour Eco rating are not comparable unless the load is stated. Half load runtime is typically shorter than quarter load. Find the percent load next to each runtime number."
  },
  {
    "criterion": "Open frame versus enclosed",
    "explanation": "Open frame units cost less and are easier to cool but are usually louder and less weather sheltered. Campground quiet rules make this a real consideration. Look for the word open frame in the title."
  },
  {
    "criterion": "Safety shutoff features",
    "explanation": "CO sensors and low oil shutoff protect you and the engine. Not every budget listing includes them. Search the listing for CO and oil sensor wording before buying."
  }
];

export const faq = [
  {
    "q": "Can a 3500 watt inverter generator run an RV air conditioner?",
    "a": "Usually one 13,500 BTU unit, if no other large loads run at the same time. A soft start kit improves the odds."
  },
  {
    "q": "Why do these list different peak watts at the same 3500 size?",
    "a": "Makers use different surge ratings, as the All Power America 3500 shows with 4375 peak. Compare running watts instead."
  },
  {
    "q": "Is a 3 gallon tank worth it?",
    "a": "It cuts refueling during long outages, but a bigger tank also adds weight. The All Power America 3500 has the largest tank here."
  },
  {
    "q": "Do I need a 30A outlet?",
    "a": "If your RV has a 30 amp inlet, yes, for a direct connection. All three picks list one."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best 2000 Watt Inverter Generator",
    "href": "/power-electrical/best-2000-watt-inverter-generator"
  },
  {
    "title": "Best 2200 Watt Inverter Generator",
    "href": "/power-electrical/best-2200-watt-inverter-generator"
  },
  {
    "title": "Best 2500 Watt Inverter Generator",
    "href": "/power-electrical/best-2500-watt-inverter-generator"
  },
  {
    "title": "Best 3000 Watt Inverter Generator",
    "href": "/power-electrical/best-3000-watt-inverter-generator"
  }
];
