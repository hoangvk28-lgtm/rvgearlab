export const guideSlug = "best-300w-portable-power-stations-for-camping";
export const guideTitle = "6 Best 300w Portable Power Stations in 2026";
export const metaTitle = "Best 300w Portable Power Stations in 2026";
export const metaDescription = "Best 300W portable power stations compared on capacity, AC outlets, USB-C output and weight for campers running laptops, fans and lights.";
export const mainKeyword = "best 300w portable power stations";
export const introParagraphs = [
  "A 300W power station handles a laptop, a small fan, camp lights and a phone or two at once, which is why it is the sweet spot for car camping. The numbers to watch are watt hours for runtime and whether the unit has an AC outlet at all.",
  "Six 300W-class stations are compared, from a Jackery Explorer 300 to budget lithium units around 250 to 290Wh. One Anker model is a DC-only design with no AC outlet on its listing, which the write-up flags."
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
    "id": "best-300w-portable-power-stations-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Jackery Explorer 300 Portable Power Station",
    "price": "$239.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-Ey75o-WL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082TMBYR6?tag=rvgearlab-20",
    "description": "The Jackery Explorer 300 is a 7.5 pound station with 292Wh of LiFePO4 capacity, 300W continuous output and a 600W peak. Beyond two wall sockets it adds a 100W PD USB-C jack, a pair of USB-A jacks and a 120W car socket, and it gets to 80% in about 2.8 hours from a 100W Jackery panel.\n\nIt is the heaviest of the six, in exchange for the highest capacity and the best-known solar pairing. The listing quotes more than 4,000 cycles to 70% capacity.\n\nIt suits campers who want a trusted name, a handle and an easy solar plan. The kit includes an AC adapter and a car charger cable.",
    "specs": [
      "292Wh LiFePO4, 300W rated",
      "600W peak, two AC outlets",
      "100W USB-C PD port"
    ],
    "pros": [
      "Highest listed capacity at 292Wh",
      "4,000+ cycle LiFePO4 cells",
      "Two AC and a 100W USB-C",
      "Fast solar charging with Jackery panels"
    ],
    "cons": [
      "7.5 lb is the heaviest here",
      "Highest price of the six"
    ],
    "bestFor": "Reliable solar camping",
    "take": "The dependable all-rounder with strong solar pairing.",
    "catch": "Solar panels are sold separately."
  },
  {
    "id": "best-300w-portable-power-stations-2",
    "rank": 2,
    "badge": "Best Fast Recharge",
    "name": "DaranEner 300W Portable Power Station",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41D2iTEmNsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GKYDWMTW?tag=rvgearlab-20",
    "description": "The DaranEner 300W stores 192Wh in LiFePO4 cells and delivers 300W with a 600W surge from two pure sine wave AC outlets. It recharges from 0 to 100% in about 2 hours through a 100W wall input, and has a 60W USB-C port.\n\nIt weighs 5.73 pounds and has less capacity than the Jackery and Anker, in return for the quickest refills. The listing says the cells tolerate temperatures up to 140 degrees F.\n\nIt suits campers who top up between outings and want a lighter box. The 140 degree F tolerance suits hot car trunks.",
    "specs": [
      "192Wh, 300W / 600W surge",
      "2 hour AC recharge",
      "5.73 lb, 60W USB-C"
    ],
    "pros": [
      "Fast 2 hour AC refill",
      "300W with 600W surge",
      "5.73 lb weight",
      "Two pure sine AC outlets"
    ],
    "cons": [
      "Only 192Wh of energy",
      "Smaller capacity than the Anker"
    ],
    "bestFor": "Frequent quick refills",
    "take": "A light 300W station that refills in about two hours.",
    "catch": "192Wh runs a 100W load for less than two hours."
  },
  {
    "id": "best-300w-portable-power-stations-3",
    "rank": 3,
    "badge": "Best USB-C Output",
    "name": "Anker SOLIX C300 DC Portable Power Station",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31pF9S5+P0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D62PMB3R?tag=rvgearlab-20",
    "description": "The Anker SOLIX C300 DC carries 288Wh and 300W with LiFePO4 cells and a 3-year guarantee. Ports include two 140W USB-C, one 100W USB-C, one 15W USB-C, two 12W USB-A and a 120W car socket.\n\nIt has the strongest USB-C output of the six, with two 140W ports, and the body is listed as 30% smaller than similar stations. The listing shows no AC outlet, so it suits devices that charge by USB-C or 12V.\n\nIt suits campers with laptops, drones, cameras and a 12V fridge. Pair it with a USB-C charger for the first activation.",
    "specs": [
      "288Wh LiFePO4, 300W",
      "Two 140W USB-C ports",
      "120W car socket"
    ],
    "pros": [
      "Two 140W USB-C ports",
      "288Wh LiFePO4 capacity",
      "Three-year guarantee",
      "Compact 30% smaller body"
    ],
    "cons": [
      "No AC outlet on the listing",
      "Strap sold separately"
    ],
    "bestFor": "USB-C laptops and 12V gear",
    "take": "A compact DC station for USB-C laptops and a 12V fridge.",
    "catch": "Check that none of your gear needs a wall plug."
  },
  {
    "id": "best-300w-portable-power-stations-4",
    "rank": 4,
    "badge": "Best Budget Capacity",
    "name": "EnginStar Solar Generator",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41AT-tNKNgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09SHB84J2?tag=rvgearlab-20",
    "description": "The EnginStar 300W holds 296Wh in a 9 by 5.5 by 7.5 inch body and has two pure sine wave 110V AC outlets. Protections cover overload, over-discharge, over-charge, overheating and short circuits, and it recharges in about 7 hours from the wall.\n\nIt stores about as much as the Jackery for much less, with a slow wall recharge. The package adds a home charger, a car charger cable and a 12-month limited service period.\n\nIt suits budget-minded car campers with plenty of time to refill overnight. A built-in battery management system keeps output stable.",
    "specs": [
      "296Wh, 300W pure sine AC",
      "Two 110V AC outlets",
      "7 hour AC recharge"
    ],
    "pros": [
      "296Wh at a low price",
      "Two pure sine AC outlets",
      "Five named protections",
      "Wall and car chargers included"
    ],
    "cons": [
      "Seven hours to recharge",
      "12-month service period only"
    ],
    "bestFor": "Budget overnight camping",
    "take": "A lower-cost 296Wh option for slow overnight refills.",
    "catch": "A 7 hour recharge means planning ahead."
  },
  {
    "id": "best-300w-portable-power-stations-5",
    "rank": 5,
    "badge": "Best Lightweight",
    "name": "Bailibatt Portable Power Station 300W",
    "price": "$139.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hUZehXtRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F3CXVQ6J?tag=rvgearlab-20",
    "description": "The Bailibatt 300W weighs 4.6 pounds and carries a 257Wh pack with two 120V pure sine wave AC outlets, two 12V 10A DC ports at 120W total, a 24W USB-C PD port and QC3.0. The listing quotes a clear LCD screen and a battery management system.\n\nIt is the lightest of the 250Wh-plus units, 2.9 pounds lighter than the Jackery. The USB-C port is a low 24W, which is below the Daran and Anker.\n\nIt suits solo campers and backpackers with a short walk to the site. Solar input is available with a separate panel.",
    "specs": [
      "257Wh, 4.6 lb, 300W",
      "Two pure sine AC outlets",
      "Dual 12V 10A DC ports"
    ],
    "pros": [
      "4.6 lb for 257Wh",
      "Two pure sine AC outlets",
      "Two 12V ports at 120W",
      "LCD shows status"
    ],
    "cons": [
      "USB-C is only 24W",
      "Rated for 1,500+ cycles only"
    ],
    "bestFor": "Lighter 300W carry",
    "take": "The lightest pick with a full-size AC and 12V port set.",
    "catch": "A 24W USB-C port will not fast-charge a laptop."
  },
  {
    "id": "best-300w-portable-power-stations-6",
    "rank": 6,
    "badge": "Lowest Price Pick",
    "name": "Portable Power Station 300W",
    "price": "$116.81",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41poUu4jdBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQQKSQ3H?tag=rvgearlab-20",
    "description": "The ZeroKor 300W lists 280Wh with two AC outlets at 300W max, one DC output, three 5V 3A USB ports and a QC USB port. It weighs about 5 pounds and is sold without a solar panel, which uses a DC5521 13V to 23V input.\n\nIt has the lowest price in the group, and its listing names fewer specifics on chemistry and cycles than the Jackery or Daran. The BMS covers short circuit, over-current, over-voltage and overload protection.\n\nAnyone spending as little as possible on a 300W AC box will find it here. The 7 by 24 hour customer service line is listed.",
    "specs": [
      "280Wh, 300W max AC",
      "About 5 lb, two AC outlets",
      "DC5521 solar input"
    ],
    "pros": [
      "Lowest price of the six",
      "Two AC outlets at 300W max",
      "About 5 lb to carry",
      "Protections listed in the BMS"
    ],
    "cons": [
      "Cell chemistry and cycle life not stated",
      "Solar panel sold separately"
    ],
    "bestFor": "First-time budget buyers",
    "take": "The cheapest 300W box for light camp use.",
    "catch": "The listing is thin on chemistry, so lean toward the others for long-term use."
  }
];

export const howWeEvaluated = [
  {
    "title": "Watt-hours",
    "description": "Capacity per unit was compared, with 192Wh to 296Wh covering the group."
  },
  {
    "title": "Ports",
    "description": "AC, USB-C PD and 12V outputs were checked against laptop and fan use."
  },
  {
    "title": "Weight",
    "description": "Listed weights were compared where given."
  },
  {
    "title": "Recharge",
    "description": "Wall and solar recharge times were weighed."
  },
  {
    "title": "Chemistry and protection",
    "description": "Cell type, cycle life and named safety features were checked."
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
    "subheading": "By Loads",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Laptop plus lights, 2 nights",
          "Jackery Explorer 300",
          "Biggest capacity at 292Wh."
        ],
        [
          "USB-C laptop and 12V fridge",
          "Anker SOLIX C300 DC",
          "Two 140W USB-C ports."
        ],
        [
          "Quick top-ups between outings",
          "DaranEner 300W",
          "Recharges in about 2 hours."
        ],
        [
          "Light carry to a remote site",
          "Bailibatt 300W",
          "4.6 lb for 257Wh."
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
          "$120 to $140",
          "ZeroKor 300W or Bailibatt 300W"
        ],
        [
          "$140 to $200",
          "EnginStar 300W or DaranEner 300W"
        ],
        [
          "$190 to $290",
          "Anker SOLIX C300 DC or Jackery Explorer 300"
        ]
      ]
    }
  },
  {
    "subheading": "AC Outlets vs DC Only",
    "cards": [
      {
        "label": "AC outlets",
        "text": "The Jackery Explorer 300, DaranEner 300W, EnginStar 300W, Bailibatt 300W and ZeroKor 300W include 110V AC outlets for wall-plug gear."
      },
      {
        "label": "DC only",
        "text": "The Anker SOLIX C300 DC drops the AC outlet to stay small, so it suits USB-C and 12V devices."
      }
    ],
    "note": "Most campers should choose a station with AC, such as the Jackery Explorer 300."
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
          "Lowest spend",
          "ZeroKor 300W"
        ],
        [
          "Mid-range capacity",
          "EnginStar 300W"
        ],
        [
          "Mid-range fast refill",
          "DaranEner 300W"
        ],
        [
          "Pay for brand and capacity",
          "Jackery Explorer 300"
        ]
      ]
    }
  },
  {
    "subheading": "For Solar Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A solar input range that matches your panel and a stated MPPT or charge time."
      },
      {
        "label": "In this comparison",
        "text": "The Jackery Explorer 300 lists 80% in about 2.8 hours with a 100W panel, the clearest solar figure in the group."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Jackery Explorer 300 for the highest capacity, a clear solar plan and over 4,000 cycles. The Anker SOLIX C300 DC is the premium for USB-C laptop charging."
      },
      {
        "label": "Save if",
        "text": "Save with the ZeroKor 300W or EnginStar 300W if you charge from the wall and use it for short trips. Both give 280Wh or more at a low price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "AC outlet or not",
    "explanation": "Some 300W stations are DC-only and have no wall-style AC outlet, which limits you to USB-C and 12V devices. The Anker SOLIX C300 DC is one. Look at the port list for the words AC outlet and pure sine wave."
  },
  {
    "criterion": "Watt-hours and runtime",
    "explanation": "A 292Wh unit like the Jackery Explorer 300 runs a 60W laptop for around four hours after losses. Use Wh divided by watts, then subtract about 20%. Compare Wh rather than the mAh figure in some listings."
  },
  {
    "criterion": "USB-C power",
    "explanation": "A laptop that needs 65W or 100W will not charge quickly from a 24W port. The Anker has two 140W ports and the Daran 60W. Check the PD wattage on the port list."
  },
  {
    "criterion": "Cell type and cycles",
    "explanation": "LiFePO4 packs listed with 3,500 to 4,000 cycles last far longer than packs that list 1,500. Listings that do not name a chemistry leave you guessing. Prefer a stated chemistry for long-term use."
  },
  {
    "criterion": "Weight and carry",
    "explanation": "A 300W station ranges from about 4.6 to 7.5 pounds in this list. A handle and compact body matter for a walk to the site. Check the listing weight before buying."
  }
];

export const faq = [
  {
    "q": "What can a 300W power station run?",
    "a": "Laptops, phones, fans, camp lights and small speakers are easy. A kettle or hair dryer exceeds the rating. Add the rated watts of your devices together."
  },
  {
    "q": "Is 300W enough for a mini fridge?",
    "a": "Many mini fridges draw under 60W while running but pull a surge at start. A 300W unit can run one briefly, though battery size limits hours. Check your fridge's starting watts."
  },
  {
    "q": "How do I charge it from solar?",
    "a": "Match the panel's connector and voltage to the station's solar input. The Jackery Explorer 300 pairs with Jackery panels, while others use DC5521 or other inputs. Check the manual."
  },
  {
    "q": "Can it run a CPAP overnight?",
    "a": "Some listings mention CPAP machines. Confirm compatibility and power draw with the CPAP maker, and do not rely on runtime estimates. Heated humidifiers raise the draw."
  },
  {
    "q": "How do I extend battery life?",
    "a": "Avoid fully draining it and keep it out of heat. Store it at around half charge. Recharge it every few months."
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
