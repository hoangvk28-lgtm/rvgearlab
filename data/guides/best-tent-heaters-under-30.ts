export const guideSlug = "best-tent-heaters-under-30";
export const guideTitle = "3 Best Tent Heaters Under 30 in 2026";
export const metaTitle = "Best Tent Heaters Under 30 in 2026";
export const metaDescription = "Best tent heaters under $30: three budget electric and propane options compared on output, safety shutoffs, power source and tent safety.";
export const mainKeyword = "best tent heaters under 30";
export const introParagraphs = [
  "Under $30 there are only three heaters worth recommending for a tent, and none of them is a set-and-forget answer. Two are electric and need a power hookup, and one burns propane, which means ventilation and a carbon monoxide alarm are not optional.",
  "The guide is short on purpose. It ranks the three by how safely and usefully each one can warm a camp space, and it says plainly what each cannot do."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-camper-by-tent.webp";
export const heroImageAlt = "Camper standing next to a tent at a campsite";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-tent-heaters-under-30-1",
    "rank": 1,
    "badge": "Best Value Under $30",
    "name": "1500W PTC Quiet Space Heater with Remote Control",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ByxUuwacL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FSKLK3X6?tag=rvgearlab-amz-20",
    "description": "This 1500W PTC heater has a remote control, 75 degree oscillation and an adjustable thermostat with an ECO mode. It lists tip-over and overheat protection, a flame-retardant housing and a quiet brushless DC motor.\n\nIt is the most feature-rich pick here, with a remote and oscillation that the Comfort Zone lacks. It needs a campsite electric hookup, and the safety shutoffs make it a better electric choice for a tent than a bare element heater.\n\nIt suits car campers on a powered site who want quiet, even warmth. Keep it on a flat, hard surface well away from fabric walls.",
    "specs": [
      "1500W PTC with remote",
      "75 degree oscillation, ECO mode",
      "Tip-over and overheat protection"
    ],
    "pros": [
      "Remote control from your sleeping bag",
      "Oscillation spreads heat evenly",
      "Tip-over and overheat protection",
      "Quiet brushless motor"
    ],
    "cons": [
      "Needs mains power at the site",
      "Costs the most of the three"
    ],
    "bestFor": "Powered campsites",
    "take": "The best electric choice under $30 because of its safety shutoffs and remote.",
    "catch": "A generator or hookup is required, and a generator must stay outside and well away from the tent."
  },
  {
    "id": "best-tent-heaters-under-30-2",
    "rank": 2,
    "badge": "Best Basic Electric",
    "name": "Comfort Zone CZ442E Personal Energy Save Ceramic Heater",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Av9AkBPcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08KJPHVPP?tag=rvgearlab-amz-20",
    "description": "The Comfort Zone CZ442E is a 1500W ceramic heater with a manual thermostat knob, two heat settings and a fan that spreads warmth. It has a compact desktop design and tip-over protection.\n\nIt costs about $3 less than the Nutromo and has no remote or oscillation. The simple knob controls are easy to use with cold hands.\n\nIt suits solo campers who want a small heater for a cot-side table. Plug it into a GFCI-protected outlet.",
    "specs": [
      "1500W ceramic heater",
      "Manual thermostat, two heat settings",
      "Compact desktop size"
    ],
    "pros": [
      "Simple knob thermostat",
      "Two heat settings",
      "Fan spreads warmth evenly",
      "Small footprint for a tent"
    ],
    "cons": [
      "No remote or oscillation",
      "Needs mains power"
    ],
    "bestFor": "Solo tent camping with hookup",
    "take": "A plain, low-cost electric heater from a known brand.",
    "catch": "Never run it from an extension cord that is not rated for 1500 watts."
  },
  {
    "id": "best-tent-heaters-under-30-3",
    "rank": 3,
    "badge": "Best Off-Grid Pick",
    "name": "Caynel 2 in 1 Portable Propane Heater and Stove",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KpkiJFv1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CH7V9JMJ?tag=rvgearlab-amz-20",
    "description": "The Caynel is a portable propane heater and stove with a maximum output of up to 9000 BTU and an adjustable fire valve. It is made of steel and copper and is sold for camping, hiking, ice fishing and hunting.\n\nIt is the only pick here that works without electricity, and it can also cook. It is the cheapest of the three and the one with the most safety questions, since a burning flame in a small space produces carbon monoxide.\n\nIt suits outdoor warm-ups and cooking at a camp kitchen. Use it only in open air or in a space designed for fuel heaters.",
    "specs": [
      "Up to 9000 BTU propane",
      "Heater and stove in one",
      "Adjustable fire valve"
    ],
    "pros": [
      "Works with no electricity",
      "Doubles as a camp stove",
      "Adjustable fire valve",
      "Light and easy to carry"
    ],
    "cons": [
      "Open flame, so tent use is unsafe",
      "No tip-over shutoff is mentioned"
    ],
    "bestFor": "Outdoor warm-ups and cooking",
    "take": "A handy outdoor heater and stove, but not a tent heater.",
    "catch": "Do not run it inside a tent or vehicle, because it produces carbon monoxide."
  }
];

export const howWeEvaluated = [
  {
    "title": "Safety shutoffs",
    "description": "Compared tip-over and overheat protection across the three heaters."
  },
  {
    "title": "Power source",
    "description": "Looked at corded electric versus propane, since that decides where each can be used."
  },
  {
    "title": "Heat control",
    "description": "Compared remote control, thermostat knobs and fire valves."
  },
  {
    "title": "Fit for camping",
    "description": "Weighed size, noise and whether each is realistic for tent use."
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
    "subheading": "By campsite",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Powered site, want a remote",
          "Nutromo 1500W Remote",
          "Remote and oscillation with shutoffs."
        ],
        [
          "Powered site, simple knobs",
          "Comfort Zone CZ442E",
          "Thermostat knob and two heat settings."
        ],
        [
          "No power, outside camp kitchen",
          "Caynel 2-in-1",
          "Propane heater and stove."
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
          "Caynel 2-in-1"
        ],
        [
          "$20 to $30",
          "Comfort Zone CZ442E"
        ],
        [
          "$20 to $30",
          "Nutromo 1500W Remote"
        ]
      ]
    }
  },
  {
    "subheading": "Electric vs propane",
    "cards": [
      {
        "label": "Electric",
        "text": "Electric heaters like the Nutromo 1500W Remote and Comfort Zone CZ442E make no fumes and have shutoffs. They need mains power."
      },
      {
        "label": "Propane",
        "text": "Propane heaters like the Caynel 2-in-1 need no power. They burn oxygen and make carbon monoxide, so keep them outdoors."
      }
    ],
    "note": "For a tent, choose electric like the Nutromo 1500W Remote when you have power, and keep the Caynel 2-in-1 for outdoor use."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Around $26",
          "Caynel 2-in-1"
        ],
        [
          "Around $27",
          "Comfort Zone CZ442E"
        ],
        [
          "Around $30",
          "Nutromo 1500W Remote"
        ]
      ]
    }
  },
  {
    "subheading": "For cold-weather tent camping specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for tip-over and overheat protection and a safe distance from fabric."
      },
      {
        "label": "In this comparison",
        "text": "The Nutromo 1500W Remote and Comfort Zone CZ442E both have shutoffs, and the Nutromo adds oscillation."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a safer unit for tent use, which means moving up to a $75 or $100 propane model with a low-oxygen shutoff. Under the cap, the Nutromo 1500W Remote is the best use of money."
      },
      {
        "label": "Save if",
        "text": "Save if you only need outdoor warmth at a picnic table, because the Caynel 2-in-1 is the cheapest of the three."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Power source and site",
    "explanation": "An electric heater needs mains power, which means a hookup or a generator placed outdoors and away from the tent. A propane heater needs no cord, yet it burns oxygen and makes carbon monoxide. Decide whether your campsite offers power before you buy, and check the amperage of the site outlet."
  },
  {
    "criterion": "Tip-over and overheat protection",
    "explanation": "A heater in a tent can be knocked over by a pet or a sleeping bag, so automatic shutoff matters. Tip-over protection cuts power if the unit falls, and overheat protection cuts it if the element runs too hot. Look for both features named in the title or bullets."
  },
  {
    "criterion": "Wattage and the circuit",
    "explanation": "A 1500W heater draws about 12.5 amps, which is most of a standard 15 amp circuit. Plugging it into the same circuit as other appliances can trip a breaker. Use a heavy-gauge cord rated for the load, and never chain power strips. Total load matters most at campgrounds with 15 amp pedestals, where a coffee maker can trip the breaker."
  },
  {
    "criterion": "Distance from fabric",
    "explanation": "Tents are made of flammable material, so a heater needs clear space on every side. Keep it at least 3 feet from walls, bedding and gear, and place it on a hard, level surface. Check the maker's clearance notes. Even flame-retardant tent fabric melts under direct heat, so a tripod or table is better than the floor."
  },
  {
    "criterion": "Carbon monoxide and ventilation",
    "explanation": "Any flame heater burns oxygen and produces carbon monoxide, which you cannot see or smell. Use only gear made for tent use if you must heat inside, keep vents open and run a battery CO alarm. Never sleep with a flame heater running. Test the alarm each trip and keep it near sleeping height, because carbon monoxide builds up in low pockets first."
  }
];

export const faq = [
  {
    "q": "Can I use a propane heater in a tent?",
    "a": "Only if the heater is rated for tent use, and even then you need ventilation and a carbon monoxide alarm. The Caynel 2-in-1 is made for outdoor use, so keep it in open air and away from fabric."
  },
  {
    "q": "How much power does a 1500W heater need?",
    "a": "About 12.5 amps at 120 volts, which is most of a 15 amp circuit. Use a heavy-gauge extension cord and avoid sharing the circuit with other devices. The Nutromo 1500W Remote and Comfort Zone CZ442E both draw this much."
  },
  {
    "q": "Can I run an electric heater from a generator?",
    "a": "Yes, if the generator is rated for the load and placed outdoors, well away from the tent and downwind. A 1500W heater needs at least a 2000 watt generator. Never run a generator inside a tent."
  },
  {
    "q": "Is a heater with a thermostat worth it?",
    "a": "A thermostat cycles the heater on and off, which saves power and avoids overheating a small space. The Comfort Zone CZ442E has a manual knob, and the Nutromo 1500W Remote adds an ECO mode and 1 degree steps."
  },
  {
    "q": "What else do I need for a heated tent?",
    "a": "A battery carbon monoxide alarm, a fire extinguisher and a sleeping bag rated for the night's low. Do not rely on a heater alone. Keep the heater away from bedding and never leave it on unattended."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Tents",
    "href": "/tents-shelter/best-backpacking-tents"
  },
  {
    "title": "Best Camping Tents",
    "href": "/tents-shelter/best-camping-tents"
  },
  {
    "title": "Best Tent Stakes",
    "href": "/tents-shelter/best-tent-stakes"
  },
  {
    "title": "Best 4 Season Tent Under 200",
    "href": "/tents-shelter/best-4-season-tent-under-200"
  }
];
