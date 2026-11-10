export const guideSlug = "best-lithium-portable-power-stations";
export const guideTitle = "6 Best Lithium Portable Power Stations in 2026";
export const metaTitle = "Best Lithium Portable Power Stations in 2026";
export const metaDescription = "Best lithium portable power stations compared by cell chemistry, capacity and ports, from LiFePO4 workhorses to compact lithium-ion boxes.";
export const mainKeyword = "best lithium portable power stations";
export const introParagraphs = [
  "Almost every portable power station is lithium, but the chemistry inside changes lifespan, heat tolerance and price. LiFePO4 cells usually list thousands of cycles, while ordinary lithium-ion packs cost less and list far fewer or none.",
  "Six stations are compared here, from a 1,843Wh LiFePO4 home-sized unit to a 2.3 pound lithium box. Where a listing names its chemistry, the guide says so, and where it does not, it flags the gap so you know what you are buying."
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
    "id": "best-lithium-portable-power-stations-1",
    "rank": 1,
    "badge": "Best LiFePO4 Capacity",
    "name": "EBL 2400W Portable Power Station LiFePO4 Battery for Home Use",
    "price": "$658.32",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Rscin7aaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQZT4SP8?tag=rvgearlab-20",
    "description": "The EBL Acc2400 holds 1,843.2Wh in lithium iron phosphate cells and delivers 2,400W through four AC ports. The listing quotes over 3,500 cycles and a 10-year service life, and an emergency mode that switches to backup in 0.1 seconds.\n\nIt carries about six times the energy of the 300Wh-class boxes and is the only pick that names a cycle count above 3,000. At 55 pounds and 16.9 by 11.8 by 11 inches it is also the heaviest.\n\nIt suits RV and base-camp users who want long cell life for a household-scale load. It charges 12 devices at once.",
    "specs": [
      "1,843.2Wh LiFePO4, 2,400W",
      "3,500+ cycles, 10+ years",
      "55 lb, 12 devices"
    ],
    "pros": [
      "Named LiFePO4 chemistry",
      "3,500+ cycle rating",
      "4 AC ports for 2,400W",
      "Dual-side carry handles"
    ],
    "cons": [
      "55 lb is heavy",
      "Highest price in the group"
    ],
    "bestFor": "Base camp and RV loads",
    "take": "The long-life LiFePO4 choice for big loads.",
    "catch": "At 55 pounds it stays at the camp rather than traveling."
  },
  {
    "id": "best-lithium-portable-power-stations-2",
    "rank": 2,
    "badge": "Best LiFePO4 Carry",
    "name": "Portable Power Station 300W",
    "price": "$158.69",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rkQTd8ICL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GY97PKHJ?tag=rvgearlab-20",
    "description": "This 192Wh station uses a stable lithium iron phosphate battery with 300W output and a 600W surge through two AC outlets, a 45W USB-C and two 18W USB-A ports. It comes in a water-resistant backpack with double zippers and an LED indicator that includes SOS.\n\nIt is the only LiFePO4 pick that ships with a carry bag, and its chemistry is named where the ENOFLO and EnginStar listings only say lithium. It stores less energy than the 296Wh units.\n\nIt suits hikers and beach campers who carry the station on their back. An 80% charge takes about 3 hours from the wall.",
    "specs": [
      "192Wh LiFePO4, 300W / 600W",
      "Water-resistant backpack",
      "45W USB-C, 3 hour 80% charge"
    ],
    "pros": [
      "Named LiFePO4 chemistry",
      "Backpack carry bag included",
      "45W USB-C port",
      "Solar and car recharge"
    ],
    "cons": [
      "Brand name is not on the listing",
      "Less capacity than the 296Wh units"
    ],
    "bestFor": "Hiking and beach carry",
    "take": "A LiFePO4 box in a pack, for carry-in trips.",
    "catch": "Low capacity means short runtimes for anything over a laptop."
  },
  {
    "id": "best-lithium-portable-power-stations-3",
    "rank": 3,
    "badge": "Best Lithium-ion Value",
    "name": "ENOFLO Portable Power Station 600W",
    "price": "$209.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-2snYZSvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BN38DH9F?tag=rvgearlab-20",
    "description": "The ENOFLO holds 296Wh in a lithium-ion pack and offers two pure sine wave AC outlets at 600W max, two USB-C at 18W, two QC 3.0 USB-A ports and an LED light. It recharges fully in about 3 hours from the wall, and the BMS covers overload, over-voltage and over-temperature.\n\nIt beats the unbranded LiFePO4 for capacity and the EnginStar for recharge speed, at a modest price. The chemistry is lithium-ion, so cycle life is lower than the LiFePO4 picks.\n\nIt suits occasional campers who want quick refills and 600W of AC capacity. The emergency LED light doubles as a tent lantern.",
    "specs": [
      "296Wh lithium-ion, 600W max",
      "3 hour full recharge",
      "Two AC, two USB-C, two USB-A"
    ],
    "pros": [
      "3 hour full recharge",
      "600W max AC output",
      "Emergency LED light",
      "Named overload and temperature protection"
    ],
    "cons": [
      "Lithium-ion has no cycle rating stated",
      "USB-C ports are only 18W"
    ],
    "bestFor": "Occasional trips, quick refills",
    "take": "A fast-refilling lithium-ion box for casual use.",
    "catch": "No cycle count is stated, so long-term life is uncertain."
  },
  {
    "id": "best-lithium-portable-power-stations-4",
    "rank": 4,
    "badge": "Best Light Lithium",
    "name": "EnginStar 296Wh Portable Solar Generator",
    "price": "$133.94",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411K6EBF2ML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FKMF2JSB?tag=rvgearlab-20",
    "description": "The EnginStar 296Wh weighs 6.5 pounds in a 9 by 5.5 by 7.5 inch body, with two 110V pure sine wave AC outlets, a built-in LED light and a large LCD. Protections cover overloading, over-discharge, overcharge, overheating and short circuits, and a full wall charge takes about 7 hours.\n\nIt holds about the same energy as the ENOFLO and takes four hours longer to recharge from the wall. The listing suggests fully charging it every 2 to 3 months to keep the battery healthy.\n\nIt suits budget campers who carry the box a short distance and charge overnight. The pack includes a home charger and a car charger cable.",
    "specs": [
      "296Wh lithium, 6.5 lb",
      "Two pure sine AC outlets",
      "7 hour wall charge, LCD"
    ],
    "pros": [
      "6.5 lb with a handle",
      "Two pure sine wave outlets",
      "LCD and built-in LED light",
      "Wall and car chargers included"
    ],
    "cons": [
      "7 hour wall recharge",
      "Chemistry is only listed as lithium"
    ],
    "bestFor": "Light overnight charging",
    "take": "A light, simple lithium box for slow overnight refills.",
    "catch": "Charge it every 2 to 3 months in storage to protect the cells."
  },
  {
    "id": "best-lithium-portable-power-stations-5",
    "rank": 5,
    "badge": "Best Compact Lithium-ion",
    "name": "Portable Power Station 120W",
    "price": "$67.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TQRbhEFxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLVHPGDZ?tag=rvgearlab-20",
    "description": "The ZeroKor 120W has a 97.6Wh, 26,400mAh lithium-ion pack with two 120W max AC outlets, a 12V to 16.8V DC port, QC and USB-C ports and a screen display. Its battery management system lists protection against shorts, surges and heat.\n\nIt is the second smallest of the six and carries more energy than the HOWEASY. Its 97.6Wh falls just under the 100Wh line that airlines commonly use for carry-on batteries, per general guidance.\n\nIt suits solo campers and flyers who want a laptop and phone charger with an AC outlet. Recharging works from a USB-C wall adapter, solar or car.",
    "specs": [
      "97.6Wh lithium-ion, 120W max",
      "Two AC outlets, USB-C, QC",
      "Screen display"
    ],
    "pros": [
      "97.6Wh stays under 100Wh",
      "Two 120W AC outlets",
      "Screen shows status",
      "Lowest price of the six"
    ],
    "cons": [
      "Only 120W of AC output",
      "Lithium-ion, no cycle rating"
    ],
    "bestFor": "Solo and flying trips",
    "take": "A small lithium pack for laptops and phones on the go.",
    "catch": "Check your airline's rules for batteries before flying."
  },
  {
    "id": "best-lithium-portable-power-stations-6",
    "rank": 6,
    "badge": "Smallest and Lightest",
    "name": "HOWEASY Portable Power Station",
    "price": "$76.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JkdSPMuML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09YLWLFLF?tag=rvgearlab-20",
    "description": "The HOWEASY holds 88Wh and offers 120W with a 240W peak through two AC sockets, an 18W USB-C, two QC 3.0 ports and an LED light with SOS. It weighs 2.3 pounds in a 6.6 by 4 by 3 inch body with a hidden handle, and comes with a 24-month warranty.\n\nNothing else in the group is smaller or lighter, and it holds a little less energy than the ZeroKor. In return it carries a 24-month warranty.\n\nIt suits day trips and light phone, tablet and light charging. The AC adapter and car charger are in the box.",
    "specs": [
      "88Wh lithium, 120W / 240W peak",
      "2.3 lb, 6.6 x 4 x 3 in",
      "24-month warranty"
    ],
    "pros": [
      "2.3 lb and easy to pack",
      "24-month warranty",
      "Two AC sockets",
      "Pocket-size 6.6 x 4 x 3 in body"
    ],
    "cons": [
      "Just 88Wh of energy",
      "Chemistry only listed as lithium"
    ],
    "bestFor": "Day trips, light loads",
    "take": "The smallest, lightest lithium box in the group.",
    "catch": "Only suitable for phones, tablets and small lights."
  }
];

export const howWeEvaluated = [
  {
    "title": "Chemistry",
    "description": "Named cell chemistry and any cycle rating were compared across the six."
  },
  {
    "title": "Capacity",
    "description": "Watt hours from 88Wh to 1,843Wh were compared."
  },
  {
    "title": "Output and ports",
    "description": "AC watts and USB-C wattage were checked."
  },
  {
    "title": "Weight",
    "description": "Weights where listed were compared."
  },
  {
    "title": "Price",
    "description": "Price against watt hours and warranty."
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
    "subheading": "By Trip Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Base camp or RV, big loads",
          "EBL 2400W Acc2400",
          "1,843.2Wh LiFePO4 with 3,500+ cycles."
        ],
        [
          "Hiking or beach, carry on back",
          "Unbranded 300W LiFePO4 Bag",
          "LiFePO4 in a backpack."
        ],
        [
          "Occasional weekends, quick refill",
          "ENOFLO 600W 296Wh",
          "3 hour full recharge."
        ],
        [
          "Flying with a battery",
          "ZeroKor 120W 97.6Wh",
          "Under the common 100Wh limit."
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
          "$60 to $80",
          "ZeroKor 120W 97.6Wh or HOWEASY 120W 88Wh"
        ],
        [
          "$130 to $160",
          "EnginStar 296Wh 6.5lb or Unbranded 300W LiFePO4 Bag"
        ],
        [
          "$200 to $700",
          "ENOFLO 600W 296Wh or EBL 2400W Acc2400"
        ]
      ]
    }
  },
  {
    "subheading": "LiFePO4 vs Lithium-ion",
    "cards": [
      {
        "label": "LiFePO4",
        "text": "The EBL 2400W Acc2400 and Unbranded 300W LiFePO4 Bag name lithium iron phosphate and long cycle lives."
      },
      {
        "label": "Lithium-ion",
        "text": "The ENOFLO 600W 296Wh and ZeroKor 120W 97.6Wh use lithium-ion, which costs less and lists fewer cycles."
      }
    ],
    "note": "Most campers should choose LiFePO4 like the EBL 2400W Acc2400 when it fits their budget."
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
          "ZeroKor 120W 97.6Wh"
        ],
        [
          "Low spend, lightest",
          "HOWEASY 120W 88Wh"
        ],
        [
          "Mid-range 296Wh",
          "EnginStar 296Wh 6.5lb"
        ],
        [
          "Pay for long life",
          "EBL 2400W Acc2400"
        ]
      ]
    }
  },
  {
    "subheading": "For Flying Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A pack under 100Wh or airline approval for larger packs."
      },
      {
        "label": "In this comparison",
        "text": "The ZeroKor 120W 97.6Wh and HOWEASY 120W 88Wh sit under the usual 100Wh line."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the EBL 2400W Acc2400 if you want LiFePO4 with 3,500 or more cycles for big loads. It is the only pick that makes a long-life case."
      },
      {
        "label": "Save if",
        "text": "Save with the ZeroKor 120W 97.6Wh or HOWEASY 120W 88Wh if you only charge phones and tablets. The ENOFLO 600W 296Wh saves money for mid-size loads."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "LiFePO4 versus lithium-ion",
    "explanation": "LiFePO4 cells list 3,000 or more cycles and tolerate heat better, while lithium-ion packs cost less and list fewer or no cycles. For a station you will use for years, LiFePO4 is worth the premium. Check the listing for the words lithium iron phosphate."
  },
  {
    "criterion": "Cycle ratings",
    "explanation": "A cycle rating tells you how many full charges before capacity falls, usually to 80%. 3,500 cycles equals about ten years of weekly use. Pick listings that state the number."
  },
  {
    "criterion": "Unnamed chemistry",
    "explanation": "Some listings say only lithium, which leaves you guessing. Unnamed chemistry often means lithium-ion. Look for a named cell type before paying for long life."
  },
  {
    "criterion": "Airline limit",
    "explanation": "Most airlines commonly cap carry-on batteries near 100Wh without approval. A 97.6Wh pack fits where a 296Wh pack does not. Check your airline's current policy."
  },
  {
    "criterion": "Storage care",
    "explanation": "Lithium packs last longer when stored around half charge and topped up every few months. The EnginStar listing suggests a full charge every 2 to 3 months. Look for storage advice in the manual."
  }
];

export const faq = [
  {
    "q": "Is LiFePO4 better than lithium-ion for camping?",
    "a": "LiFePO4 lasts more cycles and tolerates heat better, which suits hot cars and frequent use. Lithium-ion packs are lighter per Wh and cost less. Both work for occasional trips."
  },
  {
    "q": "Can I fly with a portable power station?",
    "a": "Airlines commonly allow batteries up to 100Wh in carry-on and ban larger ones without approval. Only the ZeroKor and HOWEASY here fit. Check the carrier's current rules."
  },
  {
    "q": "How many cycles does a lithium power station last?",
    "a": "LiFePO4 listings quote 3,500 or more cycles. Lithium-ion listings often give none. Prefer a stated number."
  },
  {
    "q": "How do I store a lithium power station?",
    "a": "Keep it around half charge in a cool, dry place and top it up every few months. Avoid heat and freezing temperatures when charging. The EnginStar listing advises charging every 2 to 3 months."
  },
  {
    "q": "What can a 600W lithium station run?",
    "a": "Laptops, phones, fans and small appliances up to 600W. The ENOFLO lists 600W max. Check each device's rated watts."
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
