export const guideSlug = "best-240v-solar-generators";
export const guideTitle = "3 Best 240v Solar Generators in 2026";
export const metaTitle = "Best 240v Solar Generators in 2026";
export const metaDescription = "Best 240V solar generators compared on split-phase output, capacity, solar input and expansion for RV, cabin and home backup power.";
export const mainKeyword = "best 240v solar generators";
export const introParagraphs = [
  "A 240V solar generator can run what a 120V unit cannot: a well pump, a clothes dryer or a big RV air conditioner. The price of that capability is size, weight and a bigger battery.",
  "Three distinct generators state 120V/240V output. Listings of the same 6,000W model from different sellers were counted as one, and each was judged on capacity, solar input and expansion."
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
    "id": "best-240v-solar-generators-1",
    "rank": 1,
    "badge": "Best Overall 240V",
    "name": "PECRON F5000LFP Power Station",
    "price": "$2199.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41PiecN6XbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVMSFTXX?tag=rvgearlab-20",
    "description": "The Pecron F5000LFP is a 5,120Wh LiFePO4 solar generator with 7,200W output and dual 120V/240V voltage. It lists 6,400W of solar input across two ports, two 20A and one 30A 0ms online UPS outlets, and 12 output ports including 6 AC and 6 DC.\n\nIt stores more than the OSCAL PowerMax 6000 and the BLUETTI Apex 300 and outputs more than either. The 6,400W solar input lets it refill fast from a large array.\n\nIt suits home backup and cabins where 240V loads run for hours. The 30A UPS outlet suits an RV cord.",
    "specs": [
      "5,120Wh LiFePO4, 7,200W",
      "120V/240V, 6,400W solar",
      "0ms UPS outlets, 12 ports"
    ],
    "pros": [
      "Largest capacity and output of the three",
      "6,400W solar input",
      "0ms online UPS outlets",
      "Includes a 30A outlet"
    ],
    "cons": [
      "Needs a big array to use 6,400W",
      "Large for casual camping"
    ],
    "bestFor": "Home and cabin 240V backup",
    "take": "The big-capacity choice. It keeps 240V loads running for hours.",
    "catch": "It's a fixed-site system more than a camp one."
  },
  {
    "id": "best-240v-solar-generators-2",
    "rank": 2,
    "badge": "Best Kit With Panels",
    "name": "OSCAL PowerMax 6000 Solar Generator with 3×400W Solar Panel",
    "price": "$3099.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51k1bng6tfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F5MK8TMF?tag=rvgearlab-20",
    "description": "The OSCAL PowerMax 6000 kit includes three 400W solar panels with a 3,600Wh LiFePO4 station, 6,000W of 120V/240V split-phase output and 9,000W surge. It recharges to full in 1.44 hours on 2,200W AC and 2,400W solar, and switches over in 5 to 8ms.\n\nThe kit stores less than the Pecron F5000LFP and ships with 1,200W of panels, so it can charge on day one. Sister listings of the same 6,000W unit without panels cost less.\n\nIt suits RV and cabin buyers who want 240V and a ready solar array from one box. The EPS switchover keeps essential loads running during outages.",
    "specs": [
      "3,600Wh, 6,000W split phase",
      "9,000W surge, 1.44 hour charge",
      "3 x 400W panels included"
    ],
    "pros": [
      "Three 400W panels included",
      "Full charge in 1.44 hours",
      "9,000W surge for motor starts",
      "5 to 8ms EPS switchover"
    ],
    "cons": [
      "Smaller battery than the Pecron",
      "Panels add bulk and weight"
    ],
    "bestFor": "Ready-to-charge 240V kit",
    "take": "A complete 240V kit. Take it if you want panels and power in one purchase.",
    "catch": "Capacity is lower than the Pecron."
  },
  {
    "id": "best-240v-solar-generators-3",
    "rank": 3,
    "badge": "Best Expandable Compact",
    "name": "BLUETTI Apex 300 Portable Power Station 2764.8Wh 3840W LFP Solar Generator",
    "price": "$1499.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415i1uvAWBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F42JY551?tag=rvgearlab-20",
    "description": "The BLUETTI Apex 300 holds 2,764.8Wh of LFP with 3,840W output and a 120V/240V switch controlled by the app or onboard buttons. It expands with B300K or B500K batteries, and accessories such as the Hub D1 add RV 12V DC loads.\n\nIt has the smallest battery of the three, and it is the only one that lists a single-unit 120V/240V switch plus add-ons for alternator charging. The Pecron F5000LFP and OSCAL PowerMax 6000 offer more capacity.\n\nIt suits RV and van owners who want 240V occasionally from a modular system. Add-on batteries let it scale later.",
    "specs": [
      "2,764.8Wh LFP, 3,840W",
      "120V/240V switchable",
      "Expands with B300K, B500K"
    ],
    "pros": [
      "Single unit switches to 240V",
      "Modular battery expansion",
      "Accessories for alternator charging",
      "0ms UPS claim for outages"
    ],
    "cons": [
      "Smallest capacity of the three",
      "Accessories cost extra"
    ],
    "bestFor": "A modular 240V RV system",
    "take": "The compact, grow-as-you-go option. Good for RVs that need 240V now and then.",
    "catch": "Heavy 240V use drains it faster than the others."
  }
];

export const howWeEvaluated = [
  {
    "title": "240V capability",
    "description": "Checked that each listing states 120V/240V split-phase output."
  },
  {
    "title": "Capacity and output",
    "description": "Compared stated watt-hours and rated AC watts."
  },
  {
    "title": "Solar and expansion",
    "description": "Looked at solar input, included panels and expansion packs."
  },
  {
    "title": "UPS and ports",
    "description": "Noted UPS switchover and outlet types."
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
    "subheading": "By Use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Whole-home 240V backup",
          "Pecron F5000LFP",
          "5,120Wh and 7,200W"
        ],
        [
          "Cabin with ready solar",
          "OSCAL PowerMax 6000",
          "Three panels in the kit"
        ],
        [
          "RV with occasional 240V",
          "BLUETTI Apex 300",
          "Switches to 240V, expandable"
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
          "BLUETTI Apex 300"
        ],
        [
          "$2190 to $2200",
          "Pecron F5000LFP"
        ],
        [
          "$3090 to $3100",
          "OSCAL PowerMax 6000"
        ]
      ]
    }
  },
  {
    "subheading": "Fixed-site vs modular",
    "cards": [
      {
        "label": "Fixed-site",
        "text": "The Pecron F5000LFP and OSCAL PowerMax 6000 are big, high-capacity units best parked at a cabin or home."
      },
      {
        "label": "Modular",
        "text": "The BLUETTI Apex 300 starts small and adds batteries, which suits RVs."
      }
    ],
    "note": "Most buyers should default to the OSCAL PowerMax 6000 kit unless they need the Pecron capacity or Apex modularity."
  },
  {
    "subheading": "By Solar Plan",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Panels included",
          "OSCAL PowerMax 6000"
        ],
        [
          "Large array",
          "Pecron F5000LFP"
        ],
        [
          "Add-on accessories",
          "BLUETTI Apex 300"
        ]
      ]
    }
  },
  {
    "subheading": "For RV Air Conditioner and Appliance Backup Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated 240V mode and a 30A or UPS outlet"
      },
      {
        "label": "In this comparison",
        "text": "The Pecron F5000LFP lists a 30A UPS outlet, and the BLUETTI Apex 300 lists RV loads at 240V."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Pecron F5000LFP for 5,120Wh and 7,200W, or the OSCAL PowerMax 6000 for a full panel kit."
      },
      {
        "label": "Save if",
        "text": "Save with the BLUETTI Apex 300 if your 240V needs are occasional."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Split-phase 240V",
    "explanation": "Split-phase output combines two 120V legs to supply 240V loads like dryers and well pumps. Check for words like 120V/240V or split phase on the listing. A plain 220V claim without detail is a flag to ask the seller."
  },
  {
    "criterion": "Rated and surge watts",
    "explanation": "A 240V motor load needs rated watts plus a surge margin. A well pump can need two to three times its running watts at startup. Compare the continuous figure and the surge figure to your appliance's label."
  },
  {
    "criterion": "Capacity and runtime",
    "explanation": "A 5,120Wh battery runs a 3,000W load for under two hours. Divide watt-hours by load watts. Plan the number of hours you really need."
  },
  {
    "criterion": "Solar input and panel voltage",
    "explanation": "A 6,400W solar input accepts a large array, but only if panels match its voltage range and ports. Check the number of solar ports and the maximum voltage and current. A kit with panels removes the guesswork."
  },
  {
    "criterion": "Transfer switch and safety",
    "explanation": "Powering a house needs an approved transfer switch or inlet, not a plug into a wall outlet. Ask the maker about the right accessory and have an electrician install it. Keep stations out of wet areas."
  }
];

export const faq = [
  {
    "q": "What does 240V give me over 120V?",
    "a": "Higher voltage loads, such as dryers, well pumps and large air conditioners, can run. Pecron F5000LFP and OSCAL PowerMax 6000 list both 120V and 240V."
  },
  {
    "q": "Can I plug an RV into a 240V station?",
    "a": "Not directly, since most RV cords are 120V. Use a matching outlet on the station and the right adapter, and ask the maker."
  },
  {
    "q": "Is 240V worth it over 120V?",
    "a": "Only if you own a 240V appliance. Otherwise a smaller 120V unit is cheaper and lighter."
  },
  {
    "q": "How do I connect panels?",
    "a": "Use the solar input ports with the right cable and stay inside the voltage and watt limits. A kit with panels, like the OSCAL PowerMax 6000, removes the matching work."
  },
  {
    "q": "How do I store it?",
    "a": "Keep it at partial charge in a dry place. Top it up every few months."
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
