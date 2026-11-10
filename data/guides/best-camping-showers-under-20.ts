export const guideSlug = "best-camping-showers-under-20";
export const guideTitle = "4 Best Camping Showers Under 20 in 2026";
export const metaTitle = "Best Camping Showers Under 20 in 2026";
export const metaDescription = "Best camping showers under $20: four 5-gallon solar shower bags compared on heating, temperature indicators, hoses and value for off-grid rinsing.";
export const mainKeyword = "best camping showers under 20";
export const introParagraphs = [
  "Under $20, a camping shower means a 5-gallon solar bag: fill it, leave it in the sun and hang it from a branch. Four options are worth buying here, from about $10 to $14, and all of them rely on gravity rather than a pump or battery, so pressure is gentle.",
  "They were compared on rated heat-up time, temperature feedback, hose and shower head hardware and whether the price covers one bag or two. The ranking rewards the set that gives the most dependable warm rinse, and the notes say plainly what a bag at this price cannot do."
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
    "id": "best-camping-showers-under-20-1",
    "rank": 1,
    "badge": "Best Value Under $20",
    "name": "DkOvn 2 Pack Solar Shower Bag",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-+9UeMTaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BPG2Z6NL?tag=rvgearlab-amz-20",
    "description": "This DkOvn box holds two black 20L (5 gallon) solar bags, and every bag has its own shutoff switch, a hook sling for hanging and a carry strap. Filled at breakfast and left on a sunny rock, they deliver a warm gravity rinse by mid-afternoon, roughly two quick showers per bag.\n\nAt about $14 for two bags it works out to $7 per bag, less than the RISEPRO or any single bag here. A second bag means two people can rinse back to back, or one bag can warm while the other is in use.\n\nIt suits families, pairs of friends and anyone camping with a partner. Simplicity wins here, with no battery, charger or heater to manage.",
    "specs": [
      "Two 5 gallon bags",
      "On/off switch, hook sling",
      "Handle belt for carrying"
    ],
    "pros": [
      "Two bags for one low price",
      "No battery or charger needed",
      "Packs small and light",
      "Hangs from a branch or rack"
    ],
    "cons": [
      "Water only warms with sun",
      "Gravity flow means low pressure"
    ],
    "bestFor": "Pairs and families",
    "take": "Two bags for the price of one is hard to beat for a sunny trip.",
    "catch": "Low pressure, and water stays cool on cloudy days."
  },
  {
    "id": "best-camping-showers-under-20-2",
    "rank": 2,
    "badge": "Best Temperature Feedback",
    "name": "RISEPRO Solar Shower Bag",
    "price": "$11.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418wvC8m0CL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01H1UC02C?tag=rvgearlab-amz-20",
    "description": "The RISEPRO is a 5 gallon (20L) bag made of black PVC that absorbs sunlight and heats water to 113F (45C) in about 3 hours of direct sun. A built-in temperature indicator shows the water temperature in Celsius and Fahrenheit.\n\nAt about $12 it costs $2 less than the DkOvn 2-Pack and has the only built-in thermometer in this guide. A hose, a shower head and a water tap come in the box, and the tap swaps in for the shower head to fill bottles.\n\nIt suits campers who want to know when the water is warm enough. The indicator saves guessing at the end of a long afternoon.",
    "specs": [
      "5 gallon black PVC bag",
      "Built-in temperature indicator",
      "Hose, head and tap included"
    ],
    "pros": [
      "Temperature indicator shows heat",
      "Heats to 113F in 3 hours of sun",
      "Tap swaps in for filling bottles",
      "Leak-proof PVC build"
    ],
    "cons": [
      "Needs direct sun for 3 hours",
      "Single bag only"
    ],
    "bestFor": "Warm-water planning",
    "take": "Pick this one when you want to read the water temperature, not guess.",
    "catch": "Heats only in direct sun and takes about 3 hours."
  },
  {
    "id": "best-camping-showers-under-20-3",
    "rank": 3,
    "badge": "Best Cheapest Working Bag",
    "name": "ailker Solar Shower Bag for Camp",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JsTqO4zlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F6CKF9ML?tag=rvgearlab-amz-20",
    "description": "The ailker is a 5 gallon (20L) bag good for about three showers, with an on/off switch, a removable hose and a hanging hook sling. Under direct sun it heats water to 105F (40C) in about 3 hours.\n\nAt about $10 it costs the least of the group, less than the RISEPRO, and it has a lower stated peak temperature of 105F against 113F. It still has an on/off valve, which helps you save water.\n\nIt suits first-time campers and beach trips who want the lowest price. A removable hose makes it easy to rinse and store.",
    "specs": [
      "5 gallon, about three showers",
      "105F in 3 hours of sun",
      "On/off switch, removable hose"
    ],
    "pros": [
      "Lowest price in this guide",
      "On/off switch saves water",
      "Removable hose is easy to store",
      "Hook sling for hanging"
    ],
    "cons": [
      "Lower stated peak temperature",
      "No temperature indicator"
    ],
    "bestFor": "First bag on a tight budget",
    "take": "The cheapest bag here that still has an on/off valve.",
    "catch": "Peaks around 105F, which is warm rather than hot."
  },
  {
    "id": "best-camping-showers-under-20-4",
    "rank": 4,
    "badge": "Best Roomy Bag",
    "name": "YIKANGHENG Solar Heating Shower Bag",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41lbZgSb5AL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DRFM2NB1?tag=rvgearlab-amz-20",
    "description": "The YIKANGHENG is a 23.6 by 15.7 inch PVC bag holding 20L (5 gallons), packaged with a flexible tube, a rigid tube, a hanging hook and cord and a shower head. The black PVC absorbs sun to warm the water.\n\nAt about $10 it costs the same as the ailker and offers a larger bag footprint with a rigid tube for better aim. It lacks the ailker's removable hose switch and the RISEPRO's thermometer.\n\nIt suits campers who want a simple bag with a stiff tube for a steady flow. The rope and hook hang it from a tree limb.",
    "specs": [
      "23.6 by 15.7 inch PVC bag",
      "Flexible and rigid tubes",
      "Hook, cord and shower head"
    ],
    "pros": [
      "Rigid tube improves aim",
      "Hook and cord included",
      "Large bag for 20L of water",
      "Lowest price tier"
    ],
    "cons": [
      "No temperature indicator",
      "Basic hardware only"
    ],
    "bestFor": "Simple hang-and-rinse use",
    "take": "A basic bag with a stiff tube, priced with the cheapest.",
    "catch": "Basic hardware, with no thermometer and no clear peak temperature."
  }
];

export const howWeEvaluated = [
  {
    "title": "Water capacity",
    "description": "All four hold 5 gallons, so one or two showers per bag was compared."
  },
  {
    "title": "Heat-up time",
    "description": "Stated times of about 3 hours in direct sun were compared."
  },
  {
    "title": "Temperature feedback",
    "description": "A thermometer versus guessing was compared."
  },
  {
    "title": "Hardware",
    "description": "Hoses, valves, hooks and shower heads were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick sits at or under $20, and the top pick gives the most water per dollar."
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
    "subheading": "By trip type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Pairs, families, back to back",
          "DkOvn 2-Pack",
          "Two 5 gallon bags for about $14."
        ],
        [
          "Want to read the temperature",
          "RISEPRO Indicator Bag",
          "Built-in thermometer."
        ],
        [
          "First bag, lowest price",
          "ailker 20L",
          "About $10 with an on/off valve."
        ],
        [
          "Steady aim with a stiff tube",
          "YIKANGHENG 20L",
          "Rigid tube and cord."
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
          "$0 to $10",
          "ailker 20L or YIKANGHENG 20L"
        ],
        [
          "$10 to $20",
          "RISEPRO Indicator Bag or DkOvn 2-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "One bag vs two",
    "cards": [
      {
        "label": "One bag",
        "text": "The RISEPRO Indicator Bag, ailker 20L and YIKANGHENG 20L give 20 liters, enough for one or two showers."
      },
      {
        "label": "Two bags",
        "text": "The DkOvn 2-Pack gives 40 liters, so two people can rinse or one bag can heat while the other is used."
      }
    ],
    "note": "Take the DkOvn 2-Pack for two campers and the RISEPRO Indicator Bag for a solo trip."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $10",
          "ailker 20L"
        ],
        [
          "About $10, stiff tube",
          "YIKANGHENG 20L"
        ],
        [
          "About $12",
          "RISEPRO Indicator Bag"
        ],
        [
          "About $14, two bags",
          "DkOvn 2-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "For a beach or river day trip specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a bag with an on/off valve and a hook sling that hangs from a car roof rack or beach umbrella."
      },
      {
        "label": "In this comparison",
        "text": "The ailker 20L has an on/off switch and a hook sling, and the DkOvn 2-Pack gives two bags for a group."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a thermometer or two bags: the RISEPRO Indicator Bag costs about $2 more than the ailker 20L and the DkOvn 2-Pack costs about $4 more."
      },
      {
        "label": "Save if",
        "text": "Save if you only need a quick rinse: the ailker 20L and YIKANGHENG 20L cost about $10 each and still hold 5 gallons."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Capacity and showers per fill",
    "explanation": "A 5 gallon bag holds 20 liters, enough for about two short showers of 2 to 3 minutes each with the valve closed while you soap. A longer rinse will empty it in under 4 minutes of continuous flow. Plan on one bag per person per day, or buy a two-pack if you travel as a pair."
  },
  {
    "criterion": "Heat-up time and sun exposure",
    "explanation": "Black PVC absorbs sunlight and heats water to about 105 to 113F in roughly 3 hours of direct sun. Cloud, shade and cold air slow that sharply, and a bag left too long can scald in midsummer. Lay the bag on a dark surface in full sun and test the water with your hand before you hang it."
  },
  {
    "criterion": "Temperature indicator",
    "explanation": "A built-in thermometer, like the one on the RISEPRO Indicator Bag, shows when the water is warm enough or too hot. Without one you test by hand, which can burn you if the bag has baked all afternoon. Choose an indicator if you camp in hot, sunny places."
  },
  {
    "criterion": "On/off valve and hose",
    "explanation": "A shower head with an on/off switch lets you pause while you soap, which stretches 20 liters into two or three showers. A removable hose makes cleaning and drying easier, which prevents mildew. Check that the valve holds without dripping before you hang the bag."
  },
  {
    "criterion": "Hanging hardware",
    "explanation": "A bag weighs about 44 lb when full, so the hook, cord and branch must carry it. A sturdy handle belt and a hook sling help, and you should hang the bag at head height or slightly above. Test the hanging point with a full bag before you stand under it."
  },
  {
    "criterion": "Material and leaks",
    "explanation": "PVC bags are cheap and flexible, yet they can crack at the seams if folded wet or left in a hot car. Dry the bag fully, store it loose and inspect the seams before each trip. Replace a bag that weeps at the seams, because a leak will only get worse once the bag is hung full of water."
  }
];

export const faq = [
  {
    "q": "Does a $10 solar shower bag get hot enough?",
    "a": "In summer sun, yes. The ailker 20L and RISEPRO Indicator Bag reach about 105 to 113F in roughly 3 hours of direct sun. In cool or cloudy weather the water stays lukewarm, so plan a rinse for midday and keep a backup like a kettle."
  },
  {
    "q": "What mistake do campers make with solar bags?",
    "a": "Many fill the bag at the end of the day and expect hot water. It needs about 3 hours of direct sun first. Fill it in the morning, lay it on a dark surface and test the water before you hang it."
  },
  {
    "q": "Is a two-pack worth it over a single bag?",
    "a": "For two people, yes. The DkOvn 2-Pack costs about $14 for 40 liters, so one bag can heat while you use the other. For a solo camper, a single RISEPRO Indicator Bag has the thermometer."
  },
  {
    "q": "How do I hang a solar shower bag?",
    "a": "Find a strong branch or rack at or above head height, loop the cord or hook sling over it and check it holds the bag when full at about 44 lb. Hang it before you stand under it. Keep the hose clear of the ground."
  },
  {
    "q": "How do I clean and store a solar shower bag?",
    "a": "Rinse the bag and hose with clean water, drain it completely and let it dry open before folding. Store it loose, out of a hot car. Stored damp, the bag can grow mildew and smell."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Showers",
    "href": "/camp-furniture/best-camping-showers"
  },
  {
    "title": "Best Camping Tables",
    "href": "/camp-furniture/best-camping-tables"
  },
  {
    "title": "Best Camping Shower With Heater",
    "href": "/camp-furniture/best-camping-shower-with-heater"
  },
  {
    "title": "Best Camping Shower With Hot Water",
    "href": "/camp-furniture/best-camping-shower-with-hot-water"
  }
];
