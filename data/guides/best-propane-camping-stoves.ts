export const guideSlug = "best-propane-camping-stoves";
export const guideTitle = "5 Best Propane Camping Stoves in 2026";
export const metaTitle = "Best Propane Camping Stoves in 2026";
export const metaDescription = "Best propane camping stoves compared on listed BTU, burner count, ignition and extras for cold-tolerant, fuel-flexible camp cooking.";
export const mainKeyword = "best propane camping stoves";
export const introParagraphs = [
  "Propane is the default camp stove fuel because cylinders are sold everywhere and the gas keeps flowing better in cold air than butane. The decision is how much stove you want to carry: a two-burner box, a griddle stove or a compact dual-fuel burner.",
  "Five propane-capable stoves are compared, with output listed from 15,000 to 40,000 BTU. Use them outdoors only, on a stable table, with the fuel connection checked for leaks."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/kitchen-camp-stove-coffee.webp";
export const heroImageAlt = "Single-burner camp stove brewing coffee on a riverside rock";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-propane-camping-stoves-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Camp Chef Everest 2X 2-Burner Portable Camping Stove",
    "price": "$166.05",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41np9Eiu-SL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09KNVRDNQ?tag=rvgearlab-amz-20",
    "description": "Two 20,000 BTU burners give the Camp Chef Everest 2X a 40,000 BTU total. It has a folding lid that works as a windscreen, matchless instant start ignition, a 215 square inch cooking surface, a drip tray and a carry handle.\n\nIt lists the highest output of the group and a much bigger total than the Cascade 3-in-1, while its cooking surface fits two pans plus accessories. Instant start saves hunting for a lighter.\n\nIt suits family campers and anyone who cooks full meals outdoors. The windscreen lid earns its keep on breezy sites.",
    "specs": [
      "40,000 BTU, 2 x 20,000",
      "215 square inch surface",
      "Folding lid windscreen"
    ],
    "pros": [
      "Highest BTU in the group",
      "Instant start ignition",
      "Large surface for two pans",
      "Drip tray eases cleanup"
    ],
    "cons": [
      "Pricier than the Triton",
      "Takes more trunk space"
    ],
    "bestFor": "Family propane cooking",
    "take": "The powerful, roomy propane stove for real meals.",
    "catch": "It costs well above the Triton and takes more room."
  },
  {
    "id": "best-propane-camping-stoves-2",
    "rank": 2,
    "badge": "Best Versatile",
    "name": "Coleman Cascade 3-in-1 Camp Stove",
    "price": "$204.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31NGvDTYTML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0784VYVL1?tag=rvgearlab-amz-20",
    "description": "The Coleman Cascade 3-in-1 pairs two adjustable burners rated at 24,000 total BTU with removable cast iron grill and griddle accessories. Rotary ignition, two wind guards and a removable cast iron pan support are listed.\n\nWhere the Triton cooks on the grate alone, the Cascade swaps in a grill or griddle, so one stove replaces three. A place to stow the regulator and a nylon accessory case come with it.\n\nIt suits campers who want burgers, pancakes and stews from one stove. The latch keeps it closed in transit.",
    "specs": [
      "24,000 BTU, rotary ignition",
      "Grill and griddle plates",
      "Regulator storage, nylon case"
    ],
    "pros": [
      "Grill and griddle included",
      "Matchless rotary ignition",
      "Wind guards on both sides",
      "Stores the regulator inside"
    ],
    "cons": [
      "Most expensive of the Coleman models",
      "Plates add weight and bulk"
    ],
    "bestFor": "Griddle and grill cooking",
    "take": "One propane stove that grills, griddles and boils.",
    "catch": "The plates make it heavier and pricier."
  },
  {
    "id": "best-propane-camping-stoves-3",
    "rank": 3,
    "badge": "Best Value",
    "name": "Coleman Triton 2-Burner Propane Stove",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31BW7+A0xXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09HN1C1YJ?tag=rvgearlab-amz-20",
    "description": "A 22,000 total BTU rating and knobs reworked for precise simmering define the Coleman Triton. The listing adds two wind guards, a latch and a chrome-plated grate that lifts out.\n\nIt is the least expensive of the two-burners and sits close to the Cascade in output without the plates. Compared with the Everest 2X it lists about half the BTU.\n\nIt suits families and weekend campers who want an honest, affordable propane stove. Ignition is not listed, so a lighter finishes the kit.",
    "specs": [
      "22,000 BTU, two burners",
      "Two wind guards",
      "Removable chrome grate"
    ],
    "pros": [
      "Lower price than the other two-burners",
      "Good simmer control",
      "Easy-clean grate",
      "Latch for travel"
    ],
    "cons": [
      "No ignition is listed",
      "Lower output than the Everest 2X"
    ],
    "bestFor": "Budget family cooking",
    "take": "A fair-priced propane two-burner without the extras.",
    "catch": "Bring a lighter, because no igniter is listed."
  },
  {
    "id": "best-propane-camping-stoves-4",
    "rank": 4,
    "badge": "Best Single-Burner Power",
    "name": "GasOne 15",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Lp-nhy+YL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09RN22HDQ?tag=rvgearlab-amz-20",
    "description": "The GasOne GS-3900PB is a single-burner stove rated at 15,000 BTU that works with 8 oz camping fuel or propane. A Windblocker sits on all four corners of the burner head, and piezo ignition, cartridge ejection and a gas flow cut-off are listed.\n\nIt lists far more output than the GS-3400P, and the Windblocker keeps the flame lit in wind. A carrying case is included.\n\nIt suits campers who want strong output from one burner. It is a good fit for large pots.",
    "specs": [
      "15,000 BTU, dual fuel",
      "Windblocker on four corners",
      "Piezo ignition, safety ejection"
    ],
    "pros": [
      "Strong single-burner output",
      "Windblocker protects the flame",
      "Dual fuel flexibility",
      "Carrying case included"
    ],
    "cons": [
      "One burner only",
      "Fuel is not included"
    ],
    "bestFor": "Big pots on one burner",
    "take": "A strong single burner with propane or butane.",
    "catch": "It cooks one pot at a time."
  },
  {
    "id": "best-propane-camping-stoves-5",
    "rank": 5,
    "badge": "Best Budget",
    "name": "Gas One GS-3400P Propane or Butane Stove Dual Fuel Stove Portable Camping Stove",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JavTsgoZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01HQRD8EO?tag=rvgearlab-amz-20",
    "description": "Either an 8 oz butane cartridge or a propane cylinder feeds the GasOne GS-3400P. Its listing names a piezo igniter, a heat dial and a pressure-sensor cartridge ejection feature.\n\nIt is the smallest and least expensive stove here, with a carrying case. It lists no BTU, unlike the GS-3900PB above.\n\nIt suits campers who want a basic backup or breakfast stove. Fuel is not included.",
    "specs": [
      "Butane or propane",
      "Piezo ignition, heat dial",
      "Cartridge ejection safety"
    ],
    "pros": [
      "Lowest price in the group",
      "Two fuel options",
      "Safety ejection",
      "Case included"
    ],
    "cons": [
      "No BTU is listed",
      "One burner only"
    ],
    "bestFor": "Basic backup stove",
    "take": "A cheap, flexible spare.",
    "catch": "The listing gives no BTU figure."
  }
];

export const howWeEvaluated = [
  {
    "title": "Output",
    "description": "We compared stated BTU."
  },
  {
    "title": "Ignition",
    "description": "We noted igniters."
  },
  {
    "title": "Extras",
    "description": "We looked for grills, griddles and cases."
  },
  {
    "title": "Fuel",
    "description": "We noted propane and dual-fuel options."
  },
  {
    "title": "Price",
    "description": "We compared costs."
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
    "subheading": "By Cooking Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Full family meals",
          "Camp Chef Everest 2X",
          "40,000 BTU and 215 square inches."
        ],
        [
          "Burgers and pancakes",
          "Coleman Cascade 3-in-1",
          "Grill and griddle plates."
        ],
        [
          "Simple affordable cooking",
          "Coleman Triton",
          "22,000 BTU for less."
        ],
        [
          "Single big pot",
          "GasOne 15K Dual Fuel",
          "15,000 BTU with Windblocker."
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
          "$20 to $60",
          "GasOne GS-3400P Dual Fuel or GasOne 15K Dual Fuel"
        ],
        [
          "$80 to $170",
          "Coleman Triton or Camp Chef Everest 2X"
        ],
        [
          "$200 to $210",
          "Coleman Cascade 3-in-1"
        ]
      ]
    }
  },
  {
    "subheading": "Two-Burner vs Single Burner",
    "cards": [
      {
        "label": "Two-burner",
        "text": "The Camp Chef Everest 2X, Coleman Cascade 3-in-1 and Coleman Triton cook two dishes at once."
      },
      {
        "label": "Single burner",
        "text": "The GasOne 15K Dual Fuel and GasOne GS-3400P Dual Fuel are compact and take butane too."
      }
    ],
    "note": "Most families should start with the Camp Chef Everest 2X or Coleman Triton."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest cost",
          "GasOne GS-3400P Dual Fuel"
        ],
        [
          "Mid cost",
          "Coleman Triton"
        ],
        [
          "Griddle and grill",
          "Coleman Cascade 3-in-1"
        ],
        [
          "Top output",
          "Camp Chef Everest 2X"
        ]
      ]
    }
  },
  {
    "subheading": "For Cold-Weather Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Propane fuel, wind protection and a regulator that suits your cylinder."
      },
      {
        "label": "In this comparison",
        "text": "The Camp Chef Everest 2X has a folding windscreen lid, and the GasOne 15K Dual Fuel has a Windblocker."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Camp Chef Everest 2X for the highest output and largest surface. The Coleman Cascade 3-in-1 is the step up if you want a griddle."
      },
      {
        "label": "Save if",
        "text": "Save with the Coleman Triton or GasOne GS-3400P Dual Fuel for simple trips."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Total BTU",
    "explanation": "BTU is heat per hour, and a two-burner total is split between burners. 40,000 BTU is strong, while 22,000 BTU suits most families. Divide the total by the burners and compare with your pots."
  },
  {
    "criterion": "Ignition",
    "explanation": "Matchless ignition lights the burner at a push or twist. It saves a lighter and works in wind. Treat a missing mention as no igniter."
  },
  {
    "criterion": "Accessories",
    "explanation": "Grills and griddles widen what you can cook. They add price and weight. Check what is included."
  },
  {
    "criterion": "Fuel hookup",
    "explanation": "Small cylinders suit light trips, while bulk tanks suit long stays. Some stoves need a hose and regulator. Check the box contents."
  },
  {
    "criterion": "Wind protection",
    "explanation": "Wind steals heat. Windscreens and guards save fuel. Look for them in the listing."
  }
];

export const faq = [
  {
    "q": "Why choose propane over butane?",
    "a": "Propane keeps pressure in colder air, so the flame stays strong. It is also sold widely in cylinders. Butane is cheaper but weaker in cold."
  },
  {
    "q": "Can I use a bulk tank?",
    "a": "Many propane stoves can, with the right hose and regulator. Check each listing and use the correct fittings."
  },
  {
    "q": "Is 40,000 BTU worth it over 22,000?",
    "a": "It is worth it for big pots and groups. For two or three people the Coleman Triton is plenty."
  },
  {
    "q": "How do I connect a cylinder?",
    "a": "Screw it on by hand, then test the joint with soapy water. Light the burner with the lid open."
  },
  {
    "q": "How do I store the stove?",
    "a": "Disconnect the cylinder, let the stove cool and close the lid. Keep the cylinder upright in a ventilated space."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Stoves",
    "href": "/camp-kitchen/best-camping-stoves"
  },
  {
    "title": "Best Backpacking Cookpots",
    "href": "/camp-kitchen/best-backpacking-cookpots"
  },
  {
    "title": "Best Backpacking Stoves",
    "href": "/camp-kitchen/best-backpacking-stoves"
  },
  {
    "title": "Best Camping Coffee",
    "href": "/camp-kitchen/best-camping-coffee"
  }
];
