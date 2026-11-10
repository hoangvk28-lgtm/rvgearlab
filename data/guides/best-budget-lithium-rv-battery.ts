export const guideSlug = "best-budget-lithium-rv-battery";
export const guideTitle = "6 Best Budget Lithium RV Batteries in 2026";
export const metaTitle = "Best Budget Lithium RV Battery (2026)";
export const metaDescription = "Budget lithium RV batteries from about $80 to $180, including 30Ah, 50Ah, and 100Ah picks for pop-ups, teardrops, and light loads that do not need a big bank.";
export const mainKeyword = "best budget lithium rv battery";
export const introParagraphs = [
  "Not every RV needs a $500 battery bank. A teardrop with LED lights and a fan, a pop-up that mostly stays on hookups, or a truck camper that only needs to run a water pump overnight can get every lithium benefit, light weight and full usable capacity, from a battery that costs less than $180.",
  "This guide stays under that line. We compared six budget LiFePO4 batteries from 30Ah to 100Ah on usable capacity, weight, BMS limits, and warranty, based on published specs and buyer feedback, and we note which ones make sense as a main house battery and which are better as a small second battery."
];
export const lastUpdated = "2026-10-01";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41uF1pLqN5L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-budget-lithium-rv-battery-1",
    "rank": 1,
    "badge": "Best Overall Budget",
    "name": "POERUNI 12V 100Ah LiFePO4 Battery, 1280Wh",
    "price": "$128.09",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41uF1pLqN5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FVWPVB33?tag=rvgearlab-20",
    "description": "The POERUNI 100Ah is the best overall budget pick because it delivers a full 100Ah and 1280Wh for about $128, which is roughly $1.28 per Ah and well below the 50Ah options on this list. It weighs about 24 lbs, measures 10.24 x 8.23 x 6.65 inches, and the sealed case can be mounted in any position except upside down.\n\nThe CHITOLI ranked second costs about $25 more but publishes a 100A BMS rating and a true Group 24 size. The POERUNI wins because the price difference is meaningful at this budget, and most small rigs never pull more than a few dozen amps.\n\nBest for teardrop, pop-up, and small travel trailer owners who want to replace one lead-acid battery as cheaply as possible. Caveat: the listing does not state a BMS amp limit or an exact charge cutoff temperature, so do not pair it with a large inverter or charge it below freezing.",
    "specs": [
      "100Ah for about $128",
      "24 lbs, 10.24 x 8.23 x 6.65 in",
      "Rated -4°F to 140°F"
    ],
    "pros": [
      "Full 100Ah for about $128",
      "Sealed case mounts in any upright position",
      "Weighs about 24 lbs",
      "Rated 15,000 cycles at 80% depth"
    ],
    "cons": [
      "BMS amp rating is not published",
      "No Bluetooth or display"
    ],
    "bestFor": "Pop-up and small trailer owners wanting cheap 100Ah"
  },
  {
    "id": "best-budget-lithium-rv-battery-2",
    "rank": 2,
    "badge": "Best Budget Group 24",
    "name": "CHITOLI 12V 100Ah LiFePO4 Battery, Group 24, 100A BMS",
    "price": "$152.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bRdVjy7kL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DY72MKZ2?tag=rvgearlab-20",
    "description": "The CHITOLI 100Ah is the choice if your tray is built for a Group 24 battery and you want a published spec sheet. It weighs 22.57 lbs, uses a 100A BMS, and CHITOLI recommends charging at 14.6V and 20A for a full charge in about five hours. It comes with a five-year warranty.\n\nCompared with the POERUNI above it, you pay about $25 more for a clear Group 24 size and a named BMS rating, which matter if you plan to run a small inverter. Against the 50Ah picks below, it offers twice the capacity for a similar or lower price than the Power Queen and ECO-WORTHY 50Ah.\n\nBest for owners of small trailers and pop-ups who want a no-surprises 100Ah swap. Caveat: there is no app, so a basic battery monitor helps you avoid running it flat.",
    "specs": [
      "Group 24 size, 22.57 lbs",
      "100A BMS",
      "5-year warranty"
    ],
    "pros": [
      "True Group 24 fit for small RV trays",
      "Published 100A BMS rating",
      "Five-year warranty with 24-hour service",
      "Full charge in about 5 hours at 20A"
    ],
    "cons": [
      "About $25 more than POERUNI",
      "No Bluetooth monitoring"
    ],
    "bestFor": "Small rigs with a Group 24 tray and a modest inverter"
  },
  {
    "id": "best-budget-lithium-rv-battery-3",
    "rank": 3,
    "badge": "Best Budget 50Ah",
    "name": "NERMAK 12V 50Ah LiFePO4 Battery, 100A BMS",
    "price": "$117.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/417sY6HW6OL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FBK6J924?tag=rvgearlab-20",
    "description": "The NERMAK 50Ah is the least expensive way into lithium on this list at about $118. It weighs just 10.6 lbs, uses a 100A BMS with 50A continuous output, accepts a 25A quick charge, and can be wired with up to four identical batteries.\n\nIt ranks below both 100Ah picks because it costs nearly as much for half the capacity, so its per-Ah price is close to double the POERUNI. It ranks above the Power Queen 50Ah because it is about $44 cheaper with a similar weight and capacity.\n\nBest for teardrops that run LED lights, a vent fan, and phone charging, or as a portable battery for a small camper. Caveat: the warranty is only 12 months, and NERMAK notes a fully automatic lead-acid charger may not fully charge it.",
    "specs": [
      "50Ah, 10.6 lbs",
      "100A BMS, 50A continuous",
      "25A quick charge"
    ],
    "pros": [
      "Cheapest 50Ah in this roundup",
      "At 10.6 lbs, easy to carry",
      "Accepts a 25A quick charge",
      "Low self-discharge holds charge in storage"
    ],
    "cons": [
      "Only a 12-month warranty",
      "Needs a LiFePO4 charger for full charge"
    ],
    "bestFor": "Teardrops and light-duty campers with small loads"
  },
  {
    "id": "best-budget-lithium-rv-battery-4",
    "rank": 4,
    "badge": "Best Light 50Ah",
    "name": "Power Queen 12V 50Ah LiFePO4 Battery",
    "price": "$161.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/417vT+sZK8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLG378WV?tag=rvgearlab-20",
    "description": "The Power Queen 50Ah weighs only 11.57 lbs, roughly a sixth of a 100Ah lead-acid, and holds its voltage above 12.8V through its usable capacity. It is rated for 4000 cycles at full depth and supports up to 4P4S expansion if you want to add batteries later.\n\nCompared with the NERMAK above, it costs about $44 more for similar capacity, and what you get is Power Queen's established support and documentation. Against the ECO-WORTHY 50Ah below, it is cheaper but lacks Bluetooth and the XT60 accessory port.\n\nBest for owners who want a small battery from a recognized brand, for a teardrop or as a dedicated battery for a specific load. Caveat: at around $3.24 per Ah, it is poor value if you actually need 100Ah, so buy the POERUNI or CHITOLI instead.",
    "specs": [
      "50Ah, 11.57 lbs",
      "4000 cycles at full depth",
      "Up to 4P4S expansion"
    ],
    "pros": [
      "Holds above 12.8V across its capacity",
      "At 11.57 lbs, about a sixth of lead-acid weight",
      "Rated 4000 cycles at 100% depth",
      "Brand with established support"
    ],
    "cons": [
      "Costs about $3.24 per Ah, over double POERUNI",
      "Not suitable as a starting battery"
    ],
    "bestFor": "Owners who want a known brand in a small battery"
  },
  {
    "id": "best-budget-lithium-rv-battery-5",
    "rank": 5,
    "badge": "Best Budget Bluetooth",
    "name": "ECO-WORTHY 12V 50Ah LiFePO4 Battery, Bluetooth, XT60 Port",
    "price": "$179.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41feljzftkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F5WPJ2DQ?tag=rvgearlab-20",
    "description": "The ECO-WORTHY 50Ah is the only budget pick here with Bluetooth. The app shows voltage, current, capacity, and estimated remaining time, and the battery includes an XT60 port with an adapter for 12V accessories. Its BMS cuts charging below 19.4°F and discharging below 4°F, resuming above 32°F.\n\nIt ranks fifth because it is the most expensive 50Ah battery in the lineup at about $180, more than the 100Ah POERUNI and CHITOLI. The extra money is for monitoring and portability, which the Power Queen and NERMAK lack.\n\nBest for campers who move the battery between a small trailer, a tent site, and a vehicle, and want to see charge on their phone. Caveat: charging through the XT60 port must stay under 30A, and the battery may need a pulse-activation charger if it arrives deeply discharged.",
    "specs": [
      "50Ah, 640Wh",
      "Bluetooth 5.1 app",
      "XT60 port and adapter"
    ],
    "pros": [
      "Bluetooth app shows remaining runtime",
      "XT60 port plugs in 12V accessories",
      "Charge cutoff at 19.4°F",
      "Light at 12.65 lbs"
    ],
    "cons": [
      "Highest price among 50Ah picks",
      "XT60 port limited to 30A"
    ],
    "bestFor": "Campers who want a monitored, portable small battery"
  },
  {
    "id": "best-budget-lithium-rv-battery-6",
    "rank": 6,
    "badge": "Best Starter Battery Bank",
    "name": "ECO-WORTHY 12V 30Ah LiFePO4 Battery",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xT33k2BrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09N9BBS68?tag=rvgearlab-20",
    "description": "The ECO-WORTHY 30Ah is the smallest and cheapest battery here at about $80 and 7.2 lbs. It is rated for more than 3000 cycles, includes a BMS with cell balancing, and supports up to four in series or unlimited batteries in parallel.\n\nIt ranks last because 30Ah covers only light loads, roughly LED lights and a vent fan for a night, and its per-Ah cost is the highest on the list. Compared with the 50Ah picks above, it gives up capacity for a lower total price and smaller size.\n\nBest for teardrops with minimal electrical needs, a dedicated battery for a specific device, or a low-risk first step into lithium. Caveat: ECO-WORTHY notes it is not a motorcycle starter battery, and most RVers will outgrow it quickly.",
    "specs": [
      "30Ah, 7.2 lbs",
      "3000 plus cycles",
      "Unlimited parallel connections"
    ],
    "pros": [
      "Lowest price here at about $80",
      "Only 7.2 lbs for easy placement",
      "Allows unlimited parallel connections",
      "Mounts in positions lead-acid cannot"
    ],
    "cons": [
      "30Ah only covers light overnight loads",
      "Cycle rating is lower than larger picks"
    ],
    "bestFor": "Very light loads, backup, or a first lithium experiment"
  }
];

export const howWeEvaluated = [
  {
    "title": "Total Price Under $180",
    "description": "Kept every pick under about $180 so the list stays genuinely budget, then compared cost per Ah within that ceiling."
  },
  {
    "title": "Right-Sized Capacity",
    "description": "Matched 30Ah, 50Ah, and 100Ah options to the light loads common in pop-ups and teardrops rather than assuming every rig needs 100Ah."
  },
  {
    "title": "Published BMS and Charging Specs",
    "description": "Gave credit for listings that state BMS amps, charge current, and cutoff temperatures, since budget sellers often omit them."
  },
  {
    "title": "Warranty at the Low End",
    "description": "Compared warranty terms from 12 months to five years, since budget batteries vary most on after-sale support."
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
    "subheading": "By Nightly Power Use",
    "table": {
      "headers": [
        "Your typical loads",
        "Recommended pick",
        "Capacity"
      ],
      "rows": [
        [
          "LED lights and a phone charger",
          "ECO-WORTHY 30Ah",
          "30Ah"
        ],
        [
          "Lights, fan, and water pump",
          "NERMAK 50Ah",
          "50Ah"
        ],
        [
          "Same, with app monitoring",
          "ECO-WORTHY 50Ah Bluetooth",
          "50Ah"
        ],
        [
          "Lights, pump, furnace fan overnight",
          "POERUNI 100Ah",
          "100Ah"
        ],
        [
          "Plus a small inverter for a laptop",
          "CHITOLI 100Ah Group 24",
          "100Ah, 100A BMS"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick",
        "What you get"
      ],
      "rows": [
        [
          "Under $100",
          "ECO-WORTHY 30Ah",
          "30Ah, 7.2 lbs"
        ],
        [
          "$110 to $130",
          "NERMAK 50Ah or POERUNI 100Ah",
          "50Ah or full 100Ah"
        ],
        [
          "$150 to $165",
          "CHITOLI 100Ah Group 24 or Power Queen 50Ah",
          "Group 24 100Ah or brand-name 50Ah"
        ],
        [
          "About $180",
          "ECO-WORTHY 50Ah Bluetooth",
          "50Ah with Bluetooth"
        ]
      ]
    }
  },
  {
    "subheading": "50Ah vs 100Ah",
    "cards": [
      {
        "label": "50Ah or smaller",
        "text": "Smaller batteries are lighter, easier to place, and cheaper upfront, but they cost more per Ah and run out faster with a furnace fan or water pump. In this roundup: NERMAK 50Ah, Power Queen 50Ah, ECO-WORTHY 50Ah Bluetooth, and ECO-WORTHY 30Ah."
      },
      {
        "label": "100Ah",
        "text": "A 100Ah battery costs little more than the better 50Ah units here and doubles your runtime, which usually covers a full night of typical RV loads. In this roundup: POERUNI 100Ah and CHITOLI 100Ah Group 24."
      }
    ],
    "note": "Unless weight or space is very tight, most budget buyers should choose a 100Ah battery like the POERUNI 100Ah, because it costs less per Ah than any 50Ah pick."
  },
  {
    "subheading": "By Monitoring Need",
    "table": {
      "headers": [
        "How you check charge",
        "Recommended pick",
        "Notes"
      ],
      "rows": [
        [
          "Phone app",
          "ECO-WORTHY 50Ah Bluetooth",
          "Bluetooth 5.1 with runtime estimate"
        ],
        [
          "Existing RV panel or shunt",
          "CHITOLI 100Ah Group 24",
          "Published specs simplify monitor setup"
        ],
        [
          "Rough voltage check is fine",
          "POERUNI 100Ah",
          "Cheapest full 100Ah"
        ],
        [
          "Not needed for light loads",
          "ECO-WORTHY 30Ah",
          "Smallest and simplest"
        ]
      ]
    }
  },
  {
    "subheading": "For a Teardrop Trailer Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A battery light enough to move by hand, enough capacity for LED lights, a vent fan, and device charging overnight, and a charging source with a LiFePO4 profile."
      },
      {
        "label": "In this comparison",
        "text": "The NERMAK 50Ah covers typical teardrop loads at 10.6 lbs for about $118. Choose the ECO-WORTHY 50Ah Bluetooth if you want app monitoring and an XT60 port for accessories."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You run a small inverter or want a defined BMS rating and five-year warranty. The CHITOLI 100Ah Group 24 costs about $25 more than the cheapest 100Ah and documents both."
      },
      {
        "label": "Save if",
        "text": "Your loads are lights and phones. The POERUNI 100Ah gives you 100Ah for about $128, and the ECO-WORTHY 30Ah covers the lightest loads for about $80."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Usable Capacity for Your Loads",
    "explanation": "Capacity in Ah tells you how much energy the battery stores, and LiFePO4 lets you use nearly all of it. A 50Ah lithium battery delivers roughly what a 100Ah lead-acid does when lead-acid is kept above half charge. Add up your overnight loads in amp hours and pick a battery with some margin."
  },
  {
    "criterion": "Cost per Ah, Not Just Price",
    "explanation": "At the budget end, small batteries often cost more per Ah than a 100Ah unit. A $118 50Ah battery is about $2.36 per Ah, while a $128 100Ah battery is about $1.28. Do the division before assuming the cheapest listing is the best deal."
  },
  {
    "criterion": "Charger Compatibility",
    "explanation": "LiFePO4 wants a charger that holds around 14.4V to 14.6V and does not equalize or desulfate. Some budget listings warn that automatic lead-acid chargers may not fully charge the battery, which leaves you with less capacity than you paid for. Check your converter or charger for a lithium mode."
  },
  {
    "criterion": "Warranty Length",
    "explanation": "Budget lithium warranties range from 12 months to five years, a bigger spread than any spec difference. A longer warranty on a cheap battery is a strong signal the seller expects it to last. Read the warranty line in the listing before ordering."
  },
  {
    "criterion": "Cold-Weather Charging Limits",
    "explanation": "No battery on this list is heated, so none should be charged below freezing. Some publish an exact charge cutoff, such as 19.4°F, while others only give an operating range. If you camp in spring or fall, look for a stated cutoff and plan to charge after the battery warms."
  }
];

export const faq = [
  {
    "q": "Is a 50Ah lithium battery enough for a pop-up camper?",
    "a": "For lights, a fan, and phone charging, often yes for one night. Running a furnace fan or water pump heavily will drain it faster, so a 100Ah battery like the POERUNI is safer for longer stays."
  },
  {
    "q": "Is the CHITOLI 100Ah worth it over the POERUNI 100Ah?",
    "a": "If you have a Group 24 tray or plan to run a small inverter, yes. You get a published 100A BMS, a true Group 24 size, and a five-year warranty for about $25 more."
  },
  {
    "q": "Can I use my old lead-acid charger with a budget lithium battery?",
    "a": "It may charge it partially, but many lead-acid chargers stop short of a full lithium charge or apply desulfation modes that are not suitable. A LiFePO4-compatible charger is the reliable choice."
  },
  {
    "q": "What is the biggest mistake with cheap lithium batteries?",
    "a": "Buying too small. Many owners pick a 30Ah or 50Ah battery to save money, then find it will not last the night, when a 100Ah battery cost only a little more and lowered the cost per Ah."
  },
  {
    "q": "How do I keep a budget lithium battery healthy in storage?",
    "a": "Store it partially charged, disconnect it from the RV so small draws do not drain it, and keep it out of freezing temperatures if you plan to charge it. Check it every few months."
  }
];

export const relatedGuides = [
  {
    "title": "Best Lithium RV Battery for the Money",
    "href": "/power-electrical/best-lithium-rv-battery-for-the-money"
  },
  {
    "title": "Best Lithium RV Battery on Amazon",
    "href": "/power-electrical/best-lithium-rv-battery-on-amazon"
  },
  {
    "title": "Best 12V Lithium Battery for RV",
    "href": "/power-electrical/best-12-volt-lithium-battery-for-rv"
  },
  {
    "title": "Best Lithium RV Battery",
    "href": "/power-electrical/best-lithium-rv-battery"
  }
];
