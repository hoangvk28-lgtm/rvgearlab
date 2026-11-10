export const guideSlug = "best-4000w-portable-generators";
export const guideTitle = "3 Best 4000w Portable Generators in 2026";
export const metaTitle = "Best 4000w Portable Generators in 2026";
export const metaDescription = "Best 4000W portable generators compared on running watts, outlets, weight and runtime for RV air conditioners and campsite backup.";
export const mainKeyword = "best 4000w portable generators";
export const introParagraphs = [
  "A 4000W inverter generator is the step up for campers who want to run a 13,500 BTU air conditioner or a fridge plus a microwave. The running figure sits near 3200 to 3400 watts, which is what matters for a trailer.",
  "Few listings state 4000W, so this guide is short: three inverter generators made the list. They were sorted by running watts, the 30A outlet, noise, weight and the runtime each listing states."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/furniture-chairs-by-tent.webp";
export const heroImageAlt = "Two folding camping chairs beside a tent in a redwood forest";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-4000w-portable-generators-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Evernexta 4000W Gas-Powered Inverter Generator",
    "price": "$255.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51JdXA0Q6NL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GY9Q7ML9?tag=rvgearlab-20",
    "description": "The Evernexta 208cc delivers 4000 starting watts and 3400 running watts under 3 percent THD, with a 30A outlet, two 120V outlets and a 12V DC port. The 2 gallon tank gives up to 6.5 hours at 50 percent load, ECO mode lowers engine speed at light loads and protection includes overload, an AC breaker and low-oil shutdown.\n\nIt states 200 more running watts than the Pulsar and the other Evernexta, which gives the largest cushion for an RV air conditioner. The open-frame build weighs 55 pounds.\n\nIt suits trailer owners who want to run an AC and a few appliances. EPA compliance and a 2-year warranty are listed.",
    "specs": [
      "4000 start, 3400 running watts",
      "30A outlet, 2 gallon tank",
      "EPA compliant, ECO mode"
    ],
    "pros": [
      "Highest running watts of the three",
      "30A outlet for RV hookup",
      "6.5 hours at 50 percent load",
      "Overload and low-oil protection"
    ],
    "cons": [
      "Heavier than the 48 pound Evernexta",
      "No noise figure is stated"
    ],
    "bestFor": "RV air conditioner backup",
    "take": "The best running watts and the lowest price of the three. A solid choice for a trailer.",
    "catch": "A decibel rating is not stated, so expect it to be audible."
  },
  {
    "id": "best-4000w-portable-generators-2",
    "rank": 2,
    "badge": "Best Lightweight",
    "name": "Evernexta 4000W Portable Inverter Generator for Home Use",
    "price": "$379.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41gIYK0mCRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HD6KJZRR?tag=rvgearlab-20",
    "description": "This Evernexta lists 4000 peak and 3200 running watts at 59 dB from 23 feet, with THD below 3 percent. It weighs 48 pounds and has two 120V 20A outlets, a 120V 30A L5-30R outlet and a 12V DC 8.3A output.\n\nIt is lighter than the Evernexta 208cc by 7 pounds and states a 59 dB noise figure, which the 208cc does not. ECO mode adjusts engine speed with load.\n\nIt suits campers who move the generator often and want a stated noise rating. The 30A outlet fits RV hookups.",
    "specs": [
      "4000 peak, 3200 running watts",
      "59 dB at 23 feet",
      "48 lb, 30A outlet"
    ],
    "pros": [
      "Lighter than the Evernexta 208cc",
      "Stated 59 dB noise rating",
      "Two 20A outlets and one 30A",
      "ECO mode adjusts engine speed"
    ],
    "cons": [
      "Lower running watts than the 208cc",
      "Costs more than the 208cc"
    ],
    "bestFor": "Portable campsite power",
    "take": "Lighter and quieter on paper than its sibling. Pick it when carrying matters.",
    "catch": "Running watts are 3200, so size your AC load carefully."
  },
  {
    "id": "best-4000w-portable-generators-3",
    "rank": 3,
    "badge": "Best AC Compatibility",
    "name": "Pulsar PGD40ISCO Ultra Light Quiet 4000W Portable Gas Inverter Generator",
    "price": "$450.07",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41217Z50LIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BS7B3YMG?tag=rvgearlab-20",
    "description": "The Pulsar lists 4000 peak and 3200 rated watts, a 1 gallon tank for 4 hours at half load and 59 dB operation. The listing states it suits air conditioning units up to 13,500 BTU and RV use, and names clean power for sensitive electronics.\n\nIts listing names a 13,500 BTU limit, which helps match the generator to a rooftop AC. The 1 gallon tank is half the size of the 2 gallons on the Evernexta 208cc.\n\nIt suits RV owners with a single rooftop AC who want a stated BTU match. The brand offers an ultra-light design.",
    "specs": [
      "4000 peak, 3200 rated watts",
      "Up to 13,500 BTU AC",
      "59 dB, 1 gallon tank"
    ],
    "pros": [
      "States a 13,500 BTU AC limit",
      "59 dB operation",
      "Ultra-light design",
      "Clean power for electronics"
    ],
    "cons": [
      "Only 4 hours at half load",
      "Highest price of the three"
    ],
    "bestFor": "RV rooftop AC users",
    "take": "A generator with a clear AC match. The short tank means frequent refills.",
    "catch": "A 1 gallon tank runs only about 4 hours at half load."
  }
];

export const howWeEvaluated = [
  {
    "title": "Running watts",
    "description": "Compared the rated figure that the generator can hold continuously."
  },
  {
    "title": "Outlets",
    "description": "Looked at the 30A RV outlet and the household outlets."
  },
  {
    "title": "Noise and weight",
    "description": "Noted stated decibels and carry weight."
  },
  {
    "title": "Runtime",
    "description": "Checked the tank size and the hours quoted at a stated load."
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
    "subheading": "By Trailer Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Single rooftop AC and appliances",
          "Evernexta 208cc",
          "3400 running watts"
        ],
        [
          "Light carry, moves a lot",
          "Evernexta 4000W",
          "48 pounds"
        ],
        [
          "13,500 BTU AC match",
          "Pulsar PGD40ISCO",
          "States the BTU limit"
        ],
        [
          "Longer runtime",
          "Evernexta 208cc",
          "2 gallon tank"
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
          "$250 to $260",
          "Evernexta 208cc"
        ],
        [
          "$370 to $380",
          "Evernexta 4000W"
        ],
        [
          "$450 to $460",
          "Pulsar PGD40ISCO"
        ]
      ]
    }
  },
  {
    "subheading": "More watts vs lighter weight",
    "cards": [
      {
        "label": "More watts",
        "text": "The Evernexta 208cc gives 3400 running watts but weighs 55 pounds."
      },
      {
        "label": "Lighter weight",
        "text": "The Evernexta 4000W weighs 48 pounds with 3200 running watts, and the Pulsar PGD40ISCO lists a 13,500 BTU match."
      }
    ],
    "note": "Most campers should default to the Evernexta 208cc unless weight is the limit."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Highest running watts",
          "Evernexta 208cc"
        ],
        [
          "Stated noise rating",
          "Evernexta 4000W"
        ],
        [
          "Stated BTU match",
          "Pulsar PGD40ISCO"
        ],
        [
          "Lowest price",
          "Evernexta 208cc"
        ]
      ]
    }
  },
  {
    "subheading": "For Running a Rooftop AC Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Running watts above AC load and a 30A outlet"
      },
      {
        "label": "In this comparison",
        "text": "The Evernexta 208cc offers 3400 running watts and a 30A outlet, and the Pulsar PGD40ISCO states a 13,500 BTU match."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Pulsar PGD40ISCO or the Evernexta 4000W if you want a stated BTU match or a stated noise rating."
      },
      {
        "label": "Save if",
        "text": "Save with the Evernexta 208cc if running watts and tank size matter more than weight."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Air conditioner starting load",
    "explanation": "A 13,500 BTU RV air conditioner draws about 1500 to 1800 running watts but a much higher surge on start. A soft start device reduces that surge. Check your AC's starting watts against the generator's 4000 peak and 3200 to 3400 running."
  },
  {
    "criterion": "30A outlet and adapters",
    "explanation": "Trailers with a 30A plug connect straight to an L5-30R or TT-30R, while a 50A rig needs an adapter and cannot use more than the generator provides. The plug shape must match your cord, or the adapter must be rated for the amps. Check the outlet type in the listing and match it to your cord."
  },
  {
    "criterion": "Tank size and runtime",
    "explanation": "A 1 gallon tank at half load gives about 4 hours, while 2 gallons gives about 6.5. Larger tanks mean fewer middle-of-the-night refills. Check the hours and the load they apply to."
  },
  {
    "criterion": "Noise claims",
    "explanation": "A 59 dB rating at 23 feet is lower than conversation volume, but it is measured at a given load. A generator running an AC will be louder. Look for the distance and the load."
  },
  {
    "criterion": "Carbon monoxide placement",
    "explanation": "Keep a generator outdoors, 20 feet or more from tents, vehicles and doors, with the exhaust pointed away. Never run one inside a trailer or garage. Place a CO alarm in the sleeping area."
  }
];

export const faq = [
  {
    "q": "Can a 4000W generator run an RV air conditioner?",
    "a": "A 13,500 BTU unit often runs on 3200 to 3400 running watts. Check its starting watts and use a soft start device if needed."
  },
  {
    "q": "Is 4000W worth it over 2500W?",
    "a": "Yes if you need an AC or several appliances at once. A 2500W model is lighter and quieter for small loads."
  },
  {
    "q": "What cord do I need for a 30A outlet?",
    "a": "A cord rated 30A and gauged for the length. Use the shortest practical run, and avoid thin extension cords."
  },
  {
    "q": "How do I set it up?",
    "a": "Place it outside on level ground, away from tents, fill oil, fuel it and start it. Connect loads after it settles."
  },
  {
    "q": "How do I maintain it?",
    "a": "Change the oil as the manual specifies, clean the air filter and run it every few months. Store with stabilized or empty fuel."
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
