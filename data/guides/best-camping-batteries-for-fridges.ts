export const guideSlug = "best-camping-batteries-for-fridges";
export const guideTitle = "3 Best Camping Batteries For Fridges in 2026";
export const metaTitle = "Best Camping Batteries For Fridges in 2026";
export const metaDescription = "Best camping batteries for fridges compared on capacity, fridge compatibility and DC output, for campers running a 12V cooler off-grid.";
export const mainKeyword = "best camping batteries for fridges";
export const introParagraphs = [
  "A 12V camping fridge draws steady current, and a battery that cannot supply it cleanly will cut out mid-night. The right pack matches your fridge's connector and voltage, and holds enough watt-hours for a cool night.",
  "Three batteries made the list: two fridge-specific lithium packs and a 250Wh power station. They were compared on capacity, named fridge models, outputs and charging methods."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/kitchen-campfire-skillet.webp";
export const heroImageAlt = "Breakfast cooking in a cast iron skillet over a campfire";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-camping-batteries-for-fridges-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ICECO PB250 Portable Power Station",
    "price": "$111.20",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31t7RLCM4jL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GRFR9LST?tag=rvgearlab-amz-20",
    "description": "The ICECO PB250 is a 250Wh power station with a magnetic design, an MPPT controller for solar and an aluminum frame. The listing says it adjusts its voltage with consumption and targets 12V refrigerators.\n\nIt works with devices beyond one fridge brand and is not limited to named models. Its 250Wh rating is stated plainly in the title.\n\nIt suits campers who want one battery for a fridge, phones and a camera. MPPT solar charging lets it recharge off-grid.",
    "specs": [
      "250Wh, MPPT solar input",
      "Auto voltage adjustment",
      "Aluminum frame, magnetic"
    ],
    "pros": [
      "Not locked to one fridge brand",
      "MPPT controller for solar",
      "Rugged aluminum frame",
      "Works with phones and cameras too"
    ],
    "cons": [
      "Fridge runtime depends on its draw",
      "No fridge models are named"
    ],
    "bestFor": "Fridge plus devices",
    "take": "The flexible choice, not locked to one fridge brand.",
    "catch": "Check your fridge's DC connector and draw before buying."
  },
  {
    "id": "best-camping-batteries-for-fridges-2",
    "rank": 2,
    "badge": "Best Alpicool Match",
    "name": "Dqkhoicvf 15600mAh Car Refrigerator Battery",
    "price": "$155.82",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31pAZlkD9kL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FCYJVHT9?tag=rvgearlab-amz-20",
    "description": "The Dqkhoicvf is a 15,600mAh removable lithium battery for Alpicool CFJ, TWW, CFIM, CFG and CFW car refrigerators. The listing mentions an energy-saving mode, auto downshift on low charge and a built-in cooling fan.\n\nIt is a removable design that swaps in and out of the fridge, unlike the ICECO. The listing says to keep the air outlet 15 cm from obstructions.\n\nIt suits owners of the named Alpicool models. Check the model number against the listing.",
    "specs": [
      "15,600mAh removable battery",
      "Alpicool CFJ, TWW, CFIM, CFG, CFW",
      "Auto downshift on low charge"
    ],
    "pros": [
      "Removable and easy to swap",
      "Auto downshift prolongs life",
      "Built-in cooling fan",
      "Matches named Alpicool models"
    ],
    "cons": [
      "Only fits named fridge models",
      "Price is higher than the ICECO"
    ],
    "bestFor": "Alpicool owners",
    "take": "A drop-in battery for named Alpicool fridges.",
    "catch": "A battery that fits one fridge brand will not help another."
  },
  {
    "id": "best-camping-batteries-for-fridges-3",
    "rank": 3,
    "badge": "Best EUHOMY Match",
    "name": "EUHOMY Car Refrigerator Battery for CFJ/TWW/CFIM/CFG/CFW",
    "price": "$148.78",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41A8MGcfKNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B096B32KHN?tag=rvgearlab-amz-20",
    "description": "The EUHOMY battery is a 15,600mAh rechargeable lithium pack for the CFJ, TWW, CFIM, CFG and CFW car refrigerators. It charges inside the fridge's battery compartment, and the listing mentions about 4 hours on MAX and about 6 hours on ECO.\n\nIt matches the Dqkhoicvf on capacity and model list, and it states runtime figures. The listing says it is only for EUHOMY refrigerators.\n\nIt suits EUHOMY fridge owners. It charges in place, which keeps things simple.",
    "specs": [
      "15,600mAh lithium pack",
      "Charges in the fridge",
      "About 4 hours MAX, 6 hours ECO"
    ],
    "pros": [
      "Charges inside the fridge",
      "Runtime stated for two modes",
      "Matches EUHOMY models",
      "Simple drop-in design"
    ],
    "cons": [
      "Only for EUHOMY refrigerators",
      "Short runtime next to a power station"
    ],
    "bestFor": "EUHOMY owners",
    "take": "The matching battery for EUHOMY fridges, with stated runtimes.",
    "catch": "Four hours on MAX means a second battery for overnight use."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fridge compatibility",
    "description": "Checked which fridge models each listing names."
  },
  {
    "title": "Capacity",
    "description": "Compared Wh and mAh."
  },
  {
    "title": "Outputs",
    "description": "Looked at DC and USB ports."
  },
  {
    "title": "Charging",
    "description": "Noted solar and in-fridge charging."
  },
  {
    "title": "Runtime claims",
    "description": "Read stated hours per mode."
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
    "subheading": "By Fridge",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Any 12V fridge",
          "ICECO PB250 Station",
          "Not locked to one brand."
        ],
        [
          "Alpicool CFJ, TWW, CFIM, CFG or CFW",
          "Dqkhoicvf 15600mAh Battery",
          "Named in the listing."
        ],
        [
          "EUHOMY refrigerators",
          "EUHOMY Fridge Battery",
          "Made for EUHOMY models."
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
          "$110 to $120",
          "ICECO PB250 Station"
        ],
        [
          "$140 to $150",
          "EUHOMY Fridge Battery"
        ],
        [
          "$150 to $160",
          "Dqkhoicvf 15600mAh Battery"
        ]
      ]
    }
  },
  {
    "subheading": "Fridge-Specific vs Power Station",
    "cards": [
      {
        "label": "Fridge-specific",
        "text": "The Dqkhoicvf 15600mAh Battery and EUHOMY Fridge Battery drop into named fridges and charge in place."
      },
      {
        "label": "Power station",
        "text": "The ICECO PB250 Station powers fridges and other devices, with solar input."
      }
    ],
    "note": "Most campers should pick the ICECO PB250 Station unless they own a named fridge."
  },
  {
    "subheading": "By Charging",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Solar input",
          "ICECO PB250 Station"
        ],
        [
          "Charge in the fridge",
          "EUHOMY Fridge Battery"
        ],
        [
          "Swap batteries",
          "Dqkhoicvf 15600mAh Battery"
        ]
      ]
    }
  },
  {
    "subheading": "For Overnight Fridge Use Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Enough watt-hours for your fridge's draw and a stated runtime."
      },
      {
        "label": "In this comparison",
        "text": "The EUHOMY Fridge Battery lists about 6 hours on ECO, and the ICECO PB250 Station holds 250Wh."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ICECO PB250 Station if you want solar charging and device flexibility."
      },
      {
        "label": "Save if",
        "text": "Save with the Dqkhoicvf 15600mAh Battery or EUHOMY Fridge Battery by matching the pack to a named fridge model."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fridge model match",
    "explanation": "A fridge battery is often brand-specific. The listing names compatible models. Match your model number exactly."
  },
  {
    "criterion": "Watt-hours",
    "explanation": "A fridge draws 35W or more when running, so a 250Wh pack gives a few hours of runtime. Divide Wh by the fridge's draw. Check the fridge's rating."
  },
  {
    "criterion": "DC output",
    "explanation": "A 12V socket usually supports about 150W, which is plenty for most compressor fridges. The connector and voltage still have to match. Check the output list and your fridge's connector."
  },
  {
    "criterion": "Charging temperature",
    "explanation": "Lithium batteries should not be charged below freezing. Cold camps need a plan. Check the listing."
  },
  {
    "criterion": "Runtime by mode",
    "explanation": "ECO mode runs longer than MAX. Treat listing hours as a guide. Look for named modes."
  },
  {
    "criterion": "Solar charging",
    "explanation": "MPPT inputs let a panel recharge a station. Fridge-specific packs may not accept solar. Check for solar input."
  }
];

export const faq = [
  {
    "q": "How long will a battery run my fridge?",
    "a": "Divide watt-hours by the fridge's draw. The EUHOMY Fridge Battery lists about 6 hours on ECO. Real runtime varies."
  },
  {
    "q": "What is the common mistake?",
    "a": "Buying a battery that does not fit. The Dqkhoicvf 15600mAh Battery fits only named Alpicool models."
  },
  {
    "q": "Is a power station better than a fridge battery?",
    "a": "It is more flexible. The ICECO PB250 Station powers other devices and takes solar. A fridge-specific pack is simpler if you own a named model."
  },
  {
    "q": "How do I connect a battery to a fridge?",
    "a": "Use the matching DC cable and plug it into the fridge's DC port. Check the polarity and connector type before powering up. Keep cables short and away from the fridge's fan outlet."
  },
  {
    "q": "How do I care for the battery?",
    "a": "Store it partly charged in a cool, dry place. Avoid charging it in freezing temperatures. Keep vents clear while the fridge is running."
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
