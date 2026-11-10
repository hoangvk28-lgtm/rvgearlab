export const guideSlug = "best-100w-power-banks";
export const guideTitle = "5 Best 100w Power Banks in 2026";
export const metaTitle = "Best 100w Power Banks in 2026";
export const metaDescription = "Best 100W power banks compared on USB-C output, capacity, built-in cables and ports for campers who charge laptops and cameras off grid.";
export const mainKeyword = "best 100w power banks";
export const introParagraphs = [
  "A 100W power bank can keep a laptop alive at a campsite, which a 20W phone bank never will. The key details are whether the 100W comes from a port or a built-in cable, how many devices share that power, and the real capacity.",
  "Five 100W banks made the shortlist, from a 25000mAh Anker with three 100W ports to a 20000mAh bank with a retractable cable. They were compared on stated wattage, capacity, cables, display and certifications."
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
    "id": "best-100w-power-banks-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Anker Laptop Power Bank",
    "price": "$119.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31BN5UBXRJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DCBB2YTR?tag=rvgearlab-amz-20",
    "description": "The Anker 25,000mAh bank lists 165W total output with three 100W USB-C ports, two built-in USB-C cables and a USB-A port. One cable extends up to 2.3 feet and is rated for 20,000 retractions, and it can charge four devices at once.\n\nIt is the only bank here with three 100W ports and the largest capacity, which sets it apart from the INIU and the 20000mAh models. It costs nearly double the INIU 25000mAh.\n\nIt suits campers who run a laptop, a phone and a camera together. The listing names it for week-long trips.",
    "specs": [
      "25,000mAh, 165W total",
      "Three 100W USB-C ports",
      "Two built-in USB-C cables"
    ],
    "pros": [
      "Three 100W ports charge several laptops",
      "Two built-in cables for travel",
      "Charges four devices at once",
      "Largest capacity of the list"
    ],
    "cons": [
      "Highest price here",
      "Bigger and heavier than the 20K banks"
    ],
    "bestFor": "Laptop, phone and camera at once",
    "take": "The multi-device pick, with three 100W ports and two built-in cables.",
    "catch": "Total output is shared, so it runs three 100W laptops only if the load stays within 165W."
  },
  {
    "id": "best-100w-power-banks-2",
    "rank": 2,
    "badge": "Best Value 25K",
    "name": "INIU Laptop Power Bank",
    "price": "$66.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41r8xmj2o-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DBHC9F8B?tag=rvgearlab-amz-20",
    "description": "The INIU Laptop Power Bank has 25,000mAh and 100W output, and is listed as airline safe and 30 percent smaller than a soda can. A 30 minute charge takes a MacBook Pro 14 inch from 20 to 72 percent in the listing.\n\nIt matches the Anker's capacity at about half the price, and it gives up the extra ports and built-in cables. It is the one to pick for a single laptop plus a phone.\n\nIt suits remote workers and gamers who want a Steam Deck or laptop top-up. The listing states more than 4 hours of extra play.",
    "specs": [
      "25000mAh, 100W output",
      "30 percent smaller than a soda can",
      "Airline-safe capacity"
    ],
    "pros": [
      "Same capacity as the Anker at half the price",
      "Fast 100W laptop charging",
      "Compact for 25000mAh",
      "Flight friendly capacity"
    ],
    "cons": [
      "Fewer ports than the Anker",
      "No built-in cable named"
    ],
    "bestFor": "A laptop and a phone",
    "take": "The value 25K option, with real 100W output at a lower price.",
    "catch": "Bring a 100W USB-C cable, since none is built in."
  },
  {
    "id": "best-100w-power-banks-3",
    "rank": 3,
    "badge": "Best Fast Recharge",
    "name": "UGREEN Nexode 100W 20000mAh Power Bank",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31CXgItzozL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C3GTMX5M?tag=rvgearlab-amz-20",
    "description": "The UGREEN Nexode lists 100W with two USB-C ports and a 22.5W USB-A port and 20,000mAh capacity. The OUT1 port also takes in 65W so the bank itself recharges quickly.\n\nIt costs a little more than the Baseus and brings a 65W recharge input. Compared with the Anker, it is smaller and cheaper, and it has no built-in cables.\n\nIt suits campers who plug in each night and want the bank full by morning. Two USB-C ports and a USB-A port cover a phone, a laptop and a small accessory.",
    "specs": [
      "20,000mAh, 100W USB-C",
      "65W input recharging",
      "2 USB-C plus USB-A"
    ],
    "pros": [
      "65W input refills the bank fast",
      "Three ports share the load",
      "Compact for 20000mAh",
      "Charges iPhone 15 Pro about 4.5 times"
    ],
    "cons": [
      "No built-in cables",
      "Total output drops when ports are shared"
    ],
    "bestFor": "Quick recharge between sites",
    "take": "A mid-size 100W bank that refills fast, which helps with short charging windows.",
    "catch": "Plan for less than 100W per port when all three ports are in use."
  },
  {
    "id": "best-100w-power-banks-4",
    "rank": 4,
    "badge": "Best Built-In Cables",
    "name": "Baseus Portable Charger with Built in Cable",
    "price": "$55.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31WYstsSnPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGH5YC94?tag=rvgearlab-amz-20",
    "description": "The Baseus 20000mAh bank offers 100W PD charging, two built-in USB-C cables, high-capacity multi-port charging and pass-through charging. A 30 minute charge can lift an iPhone to a significant level and it can run a laptop while charging.\n\nIt adds built-in cables that the UGREEN lacks, and it costs slightly less. Compared with the REWONDER, it trades the retractable cable for dual fixed cables.\n\nIt suits travelers who want to avoid carrying cords. Pass-through charging lets you plug the bank into a wall at night and charge a phone from it.",
    "specs": [
      "20,000mAh, 100W PD",
      "Two built-in USB-C cables",
      "Pass-through charging"
    ],
    "pros": [
      "Two built-in cables reduce clutter",
      "100W PD for laptops and phones",
      "Pass-through charging while recharging",
      "Mid price for the feature set"
    ],
    "cons": [
      "Fixed cables cannot be replaced",
      "Heavier than a phone-class bank"
    ],
    "bestFor": "Cable-free travel",
    "take": "A tidy pick for travelers who want two cables built in.",
    "catch": "If a built-in cable breaks, you rely on the other port."
  },
  {
    "id": "best-100w-power-banks-5",
    "rank": 5,
    "badge": "Best Budget",
    "name": "100W Power Bank Fast Charging 20000mAh",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41a7eMEbV3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FN2MTWN4?tag=rvgearlab-amz-20",
    "description": "The REWONDER offers 100W through a 27.6 inch built-in retractable USB-C cable with magnetic storage, plus a second 100W USB-C port and dual 22.5W USB-A ports. It has a live LED percentage display and UL and FCC certification.\n\nIt is the least expensive 100W pick, with a retractable cable that tucks away magnetically. Compared with the Baseus, it names a live percentage display and UL and FCC certification.\n\nIt suits budget shoppers who want a laptop-capable bank with a visible gauge. The listing notes that full 100W from the port needs a 100W cable.",
    "specs": [
      "20,000mAh, 100W retractable cable",
      "Extra 100W USB-C, dual USB-A",
      "LED percentage display"
    ],
    "pros": [
      "Lowest price among the 100W banks",
      "27.6 inch retractable built-in cable",
      "UL and FCC certified",
      "Exact percentage display"
    ],
    "cons": [
      "Third-party brand with little track record",
      "Port needs a 100W cable for full output"
    ],
    "bestFor": "Budget laptop top-ups",
    "take": "The lowest-cost 100W option, with a long retractable cable and a clear display.",
    "catch": "Read the listing on cable requirements to reach the full 100W."
  }
];

export const howWeEvaluated = [
  {
    "title": "USB-C output",
    "description": "Per-port and total output from 100W to 165W were compared."
  },
  {
    "title": "Capacity",
    "description": "20,000mAh and 25,000mAh models were compared for laptop runtime."
  },
  {
    "title": "Cables",
    "description": "Built-in, retractable and detachable cables were noted."
  },
  {
    "title": "Ports",
    "description": "The number of 100W ports was counted."
  },
  {
    "title": "Certifications",
    "description": "UL, FCC and airline notes were checked."
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
    "subheading": "By Device Load",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Laptop, phone and camera",
          "Anker 25K 165W Laptop Bank",
          "Three 100W ports."
        ],
        [
          "One laptop and a phone",
          "INIU 25000mAh 100W",
          "Large capacity at half the price."
        ],
        [
          "Quick recharge of the bank",
          "UGREEN Nexode 100W 20K",
          "65W input."
        ],
        [
          "No cables to carry",
          "Baseus 100W 20K Built-In Cable",
          "Two built-in cables."
        ],
        [
          "Tight budget",
          "REWONDER 100W Retractable",
          "Lowest priced 100W bank."
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
          "$30 to $60",
          "REWONDER 100W Retractable or Baseus 100W 20K Built-In Cable"
        ],
        [
          "$50 to $70",
          "UGREEN Nexode 100W 20K or INIU 25000mAh 100W"
        ],
        [
          "$110 to $120",
          "Anker 25K 165W Laptop Bank"
        ]
      ]
    }
  },
  {
    "subheading": "Big Bank vs Mid Bank",
    "cards": [
      {
        "label": "Big bank",
        "text": "25000mAh banks give about 25 percent more runtime. The Anker 25K 165W Laptop Bank and INIU 25000mAh 100W are in this group."
      },
      {
        "label": "Mid bank",
        "text": "20000mAh banks are lighter and cheaper. The UGREEN Nexode 100W 20K, Baseus 100W 20K Built-In Cable and REWONDER 100W Retractable fit here."
      }
    ],
    "note": "Pick the INIU 25000mAh 100W for one laptop and a 20K bank for lighter loads."
  },
  {
    "subheading": "By Cable Preference",
    "table": {
      "headers": [
        "Cable",
        "Recommended pick"
      ],
      "rows": [
        [
          "Two built-in USB-C cables",
          "Anker 25K 165W Laptop Bank"
        ],
        [
          "Retractable cable",
          "REWONDER 100W Retractable"
        ],
        [
          "Bring your own cable",
          "UGREEN Nexode 100W 20K"
        ]
      ]
    }
  },
  {
    "subheading": "Remote Work From a Campsite Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A 100W USB-C port, at least 20,000mAh and a cable rated for 100W."
      },
      {
        "label": "In this comparison",
        "text": "The Anker 25K 165W Laptop Bank and INIU 25000mAh 100W give the most laptop hours."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Anker 25K 165W Laptop Bank if you charge a laptop, phone and camera at once."
      },
      {
        "label": "Save if",
        "text": "Save with the REWONDER 100W Retractable if a single laptop top-up is the job."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Per-port versus total output",
    "explanation": "A bank may list 100W on one port, yet the total across ports can be lower. If you plug a phone and a laptop in together, the laptop may fall under 100W. Look for a total output figure on the listing."
  },
  {
    "criterion": "Capacity and laptop runtime",
    "explanation": "A 20000mAh bank holds about 74Wh and a 25000mAh bank about 92Wh, so a 60Wh laptop battery fills roughly once. Heavy use drains it faster. Do the math: watt-hours divided by your laptop's watts."
  },
  {
    "criterion": "Required cable rating",
    "explanation": "A 100W bank needs a 100W-rated USB-C cable, and many cables are rated for 60W. A weak cable throttles the charge without warning. Check the cable rating and the listing's note."
  },
  {
    "criterion": "Pass-through charging",
    "explanation": "Pass-through lets the bank charge a device while it recharges, which is useful when you have one outlet. It also creates heat, so use it in a ventilated space. Check that the listing names pass-through."
  },
  {
    "criterion": "Airline limits",
    "explanation": "Carry-on limits are about 100Wh, and a 25000mAh pack sits near that cap. Pack the bank in carry-on only. Check the Wh on the listing."
  }
];

export const faq = [
  {
    "q": "Can a 100W power bank charge a laptop?",
    "a": "Yes for most USB-C laptops, as long as the laptop accepts USB-C PD up to 100W. The INIU 25000mAh 100W lists a MacBook Pro charge example. Use a cable rated for 100W."
  },
  {
    "q": "What is the common mistake with 100W banks?",
    "a": "Using a 60W cable and wondering why the laptop charges slowly. Match the cable to 100W. The REWONDER 100W Retractable listing says so explicitly."
  },
  {
    "q": "Is 25000mAh worth it over 20000mAh?",
    "a": "For laptop use, yes, since roughly 18Wh more is a real extra charge on a phone. For phones only, 20000mAh is plenty. The Anker 25K 165W Laptop Bank adds extra ports as well."
  },
  {
    "q": "How do I recharge a big bank quickly?",
    "a": "Use a 65W or larger USB-C wall charger on the bank's input port. The UGREEN Nexode 100W 20K accepts 65W input. Charge it overnight."
  },
  {
    "q": "How do I carry it on a plane?",
    "a": "Keep it in carry-on baggage and check its Wh rating against the airline limit. Do not pack it in checked luggage. Keep ports covered."
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
