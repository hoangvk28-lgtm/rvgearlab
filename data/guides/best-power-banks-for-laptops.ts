export const guideSlug = "best-power-banks-for-laptops";
export const guideTitle = "5 Best Power Banks For Laptops in 2026";
export const metaTitle = "Best Power Banks For Laptops in 2026";
export const metaDescription = "Best power banks for laptops compared on total output, AC outlets, capacity and cables for campers who work from a tent or van.";
export const mainKeyword = "best power banks for laptops";
export const introParagraphs = [
  "A power bank for a laptop needs far more than phone-class output: 65W to 165W on USB-C, or an AC outlet that can power a standard laptop brick. Capacity in watt-hours decides how many hours of work you get, so the numbers matter more than the mAh headline.",
  "Five banks made the shortlist, from a 165W aluminum USB-C pack to two 27000mAh banks with a 100W AC outlet and a mini power station. They were compared on output, capacity, cable design, airline notes and ports."
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
    "id": "best-power-banks-for-laptops-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "AsperX Laptop Power Bank",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-pIKSQBfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F5PSC7L1?tag=rvgearlab-20",
    "description": "The AsperX lists 165W charging from a 20,000mAh battery, an aluminum unibody case, a built-in retractable cable and a large color TFT display that shows battery level, remaining time and input and output power. The listing calls the design space-saving.\n\nIt matches the Anker's 165W at lower capacity and a lower price, and it adds a retractable cable. The aluminum case sets it apart from the plastic Anker.\n\nIt suits laptop users who want high output in a premium, compact body. The display shows live power so you can plan.",
    "specs": [
      "20,000mAh, 165W fast charging",
      "Aluminum unibody, retractable cable",
      "Color TFT power display"
    ],
    "pros": [
      "165W handles power-hungry laptops",
      "Aluminum body feels premium",
      "Display shows time left and wattage",
      "Retractable cable reduces clutter"
    ],
    "cons": [
      "20,000mAh is smaller than the Anker",
      "Price is high for the capacity"
    ],
    "bestFor": "Power-hungry laptops",
    "take": "A premium 165W bank with a metal body and a detailed display.",
    "catch": "The retractable cable is a fixed part, so treat it gently."
  },
  {
    "id": "best-power-banks-for-laptops-2",
    "rank": 2,
    "badge": "Best Multi-Port",
    "name": "Anker Laptop Power Bank",
    "price": "$119.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31BN5UBXRJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DCBB2YTR?tag=rvgearlab-20",
    "description": "The Anker lists 25,000mAh with 165W total output across three 100W USB-C ports, a USB-A port and two built-in USB-C cables, one extendable to 2.3 feet. It can charge up to four devices at once.\n\nIt has 5,000mAh more than the AsperX and three 100W ports, which is the biggest port count here. It costs more than the AsperX.\n\nIt suits campers running two laptops and a phone from one bank. The listing names week-long trips.",
    "specs": [
      "25,000mAh, 165W total",
      "Three 100W USB-C ports",
      "Two built-in USB-C cables"
    ],
    "pros": [
      "Three 100W ports charge several laptops",
      "25,000mAh for long trips",
      "Two built-in cables",
      "Four devices at once"
    ],
    "cons": [
      "Highest price among the USB-C banks",
      "Larger and heavier than the AsperX"
    ],
    "bestFor": "Two laptops at once",
    "take": "The multi-laptop pick, with three 100W ports and two built-in cables.",
    "catch": "Total power is shared, so two laptops at full speed will not both reach 100W."
  },
  {
    "id": "best-power-banks-for-laptops-3",
    "rank": 3,
    "badge": "Best AC Outlet",
    "name": "Portable Power Bank with AC Outlet",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41CQeTs7kzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLFY6TGQ?tag=rvgearlab-20",
    "description": "The Paopaoyu offers a 100W AC outlet, a 65W PD USB-C port that works for both input and output, a 12W and an 18W USB port, and 27000mAh in 98Wh. It is TSA compliant and carries FCC, CE and RoHS certifications.\n\nIt matches the Lvssci on capacity, outlet and price, and it names its certifications. Against the USB-C-only banks, it runs a standard laptop adapter without a USB-C cable.\n\nIt suits campers with laptops that use a barrel plug or a regular AC brick. The AC port also handles small appliances under 100W.",
    "specs": [
      "27,000mAh, 98Wh, 100W AC",
      "65W PD USB-C in and out",
      "TSA compliant, FCC and CE"
    ],
    "pros": [
      "AC outlet runs a normal laptop brick",
      "65W PD port for USB-C laptops",
      "Under 100Wh for flights",
      "FCC, CE and RoHS certifications"
    ],
    "cons": [
      "Heavier than the USB-C-only banks",
      "100W AC outlet limits big loads"
    ],
    "bestFor": "Barrel-plug laptops and AC loads",
    "take": "An AC-outlet bank with a 65W PD port and named certifications.",
    "catch": "AC output wastes some energy to conversion, so runtime is below the Wh figure."
  },
  {
    "id": "best-power-banks-for-laptops-4",
    "rank": 4,
    "badge": "Best Accessories",
    "name": "Lvssci Portable Power Bank with 100W AC Outlet",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/319l4fyCndL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DLB27472?tag=rvgearlab-20",
    "description": "The Lvssci lists a 110V 100W AC outlet, 27000mAh at 99.9Wh, a 65W PD bidirectional port and USB-A outputs. It adds a smart cooling fan, four LED flashlights, an EVA carrying box and a Type-C cable.\n\nIt matches the Paopaoyu on capacity and price and brings a cooling fan, flashlights and a carrying case. The fan runs faster under load to extend life.\n\nIt suits campers who want a laptop bank with a built-in light and a protective box. The AC outlet powers appliances under 100W.",
    "specs": [
      "27,000mAh, 99.9Wh, 100W AC",
      "65W PD bidirectional port",
      "Cooling fan, four flashlights"
    ],
    "pros": [
      "Cooling fan keeps heat in check",
      "Four LED flashlights for emergencies",
      "Carrying box and cable included",
      "AC and USB outputs in one bank"
    ],
    "cons": [
      "Fan noise under heavy load",
      "Same 100W AC limit as the Paopaoyu"
    ],
    "bestFor": "AC bank with extras",
    "take": "An AC bank with a fan, flashlights and a carry case in the box.",
    "catch": "A fan can be a small noise at night, so keep loads light."
  },
  {
    "id": "best-power-banks-for-laptops-5",
    "rank": 5,
    "badge": "Best Mini Power Station",
    "name": "Daran Portable Power Station 89.6Wh LiFePO4 Battery 100W",
    "price": "$75.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51RqhJSR3sL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQT5G1ZR?tag=rvgearlab-20",
    "description": "The DaranEner is a small LiFePO4 power station with 89.6Wh, a 100W AC output (200W peak), two AC sockets, 7 output ports and four charging methods. It weighs 2.54 lb and charges from 0 to 80 percent in about 1.5 hours.\n\nIt runs a laptop and more with two AC sockets, and it is a different kind of product from the banks above. LiFePO4 cells are rated for 3500 plus cycles.\n\nIt suits campers who want a fanless, silent unit for sleeping near. The built-in 4-level LED flashlight has SOS modes.",
    "specs": [
      "89.6Wh LiFePO4, 100W AC",
      "2 AC sockets, 7 outputs",
      "3500 plus cycle rating"
    ],
    "pros": [
      "Two AC sockets for two chargers",
      "Silent, fanless operation",
      "LiFePO4 cells last 3500 plus cycles",
      "Four ways to recharge"
    ],
    "cons": [
      "2.54 lb is heavier than a bank",
      "Lower capacity than the 27000mAh banks"
    ],
    "bestFor": "Quiet nights and AC devices",
    "take": "A mini power station that behaves like an AC bank, with a long-life battery.",
    "catch": "At 89.6Wh, it is on the small side for a full workday."
  }
];

export const howWeEvaluated = [
  {
    "title": "Output",
    "description": "165W, 100W AC and 65W ports were compared."
  },
  {
    "title": "Capacity in Wh",
    "description": "Capacity from 74Wh to 99.9Wh was compared."
  },
  {
    "title": "Ports",
    "description": "USB-C, AC and USB-A counts were noted."
  },
  {
    "title": "Cables",
    "description": "Built-in, retractable and external cables were compared."
  },
  {
    "title": "Travel notes",
    "description": "Airline notes and certifications were checked."
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
    "subheading": "By Laptop Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Power-hungry USB-C laptop",
          "AsperX 165W 20000mAh",
          "165W output."
        ],
        [
          "Two laptops and a phone",
          "Anker 25K 165W Laptop Bank",
          "Three 100W ports."
        ],
        [
          "Barrel-plug laptop",
          "Paopaoyu 27000mAh AC Bank",
          "100W AC outlet."
        ],
        [
          "AC bank with a case and fan",
          "Lvssci 27000mAh AC Bank",
          "Fan and flashlights."
        ],
        [
          "Quiet sleeping-area power",
          "DaranEner 89.6Wh Mini Station",
          "Fanless."
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
          "$70 to $90",
          "DaranEner 89.6Wh Mini Station or AsperX 165W 20000mAh"
        ],
        [
          "$80 to $90",
          "Paopaoyu 27000mAh AC Bank or Lvssci 27000mAh AC Bank"
        ],
        [
          "$110 to $120",
          "Anker 25K 165W Laptop Bank"
        ]
      ]
    }
  },
  {
    "subheading": "USB-C Bank vs AC Bank",
    "cards": [
      {
        "label": "USB-C bank",
        "text": "A USB-C bank is lighter and wastes less energy. The AsperX 165W 20000mAh and Anker 25K 165W Laptop Bank work this way."
      },
      {
        "label": "AC bank",
        "text": "An AC bank runs any laptop brick and small appliances, at more weight. The Paopaoyu 27000mAh AC Bank, Lvssci 27000mAh AC Bank and DaranEner 89.6Wh Mini Station fit here."
      }
    ],
    "note": "Most campers with a USB-C laptop should pick the AsperX 165W 20000mAh."
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
          "Premium USB-C",
          "Anker 25K 165W Laptop Bank"
        ],
        [
          "Mid-range 165W",
          "AsperX 165W 20000mAh"
        ],
        [
          "AC outlet for the money",
          "Paopaoyu 27000mAh AC Bank"
        ]
      ]
    }
  },
  {
    "subheading": "Working From a Van or Tent Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "At least 65W on USB-C or a 100W AC outlet, and 70 to 100Wh of capacity."
      },
      {
        "label": "In this comparison",
        "text": "The Anker 25K 165W Laptop Bank and Lvssci 27000mAh AC Bank give the most hours, and the DaranEner 89.6Wh Mini Station adds two AC sockets."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Anker 25K 165W Laptop Bank if two laptops must run at once."
      },
      {
        "label": "Save if",
        "text": "Save with the Paopaoyu 27000mAh AC Bank or Lvssci 27000mAh AC Bank if an AC outlet is the main need."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "USB-C versus AC outlet",
    "explanation": "Most modern laptops charge over USB-C, but older models and some gaming laptops need an AC brick. An AC bank can run either through its outlet or a USB-C port. Check your laptop's charger rating."
  },
  {
    "criterion": "Watt-hours decide runtime",
    "explanation": "A 20,000mAh bank is about 74Wh and a 27000mAh bank about 98Wh. A laptop that draws 40W runs about 1.5 hours per 60Wh. Do the math with your laptop's actual draw."
  },
  {
    "criterion": "Total versus single-port output",
    "explanation": "A 165W total means the sum of all ports, and one port may offer 100W at most. Charging a laptop and a phone together splits that. Look for both numbers."
  },
  {
    "criterion": "Airline limits",
    "explanation": "Banks under 100Wh can fly in the cabin. The 99.9Wh and 98Wh models sit right under that cap. Check the Wh on the listing before a trip."
  },
  {
    "criterion": "Conversion losses on AC",
    "explanation": "AC outlets convert battery power to 110V, which wastes some energy. You will get less runtime than the Wh figure suggests. Use USB-C when your laptop supports it."
  }
];

export const faq = [
  {
    "q": "Can a power bank charge any laptop?",
    "a": "Most USB-C laptops accept PD charging, and AC banks run any laptop with a normal brick. Check your charger's wattage. The AsperX 165W 20000mAh covers 165W demands."
  },
  {
    "q": "What is the common mistake with laptop banks?",
    "a": "Buying on mAh and ignoring watts. A 20000mAh bank at 20W cannot run a laptop. Check the output wattage."
  },
  {
    "q": "Is an AC outlet bank worth it over USB-C?",
    "a": "If your laptop needs a brick or you want a small appliance, yes. The Paopaoyu 27000mAh AC Bank has a 100W outlet. For modern laptops, USB-C is more efficient."
  },
  {
    "q": "How do I charge a laptop with a bank?",
    "a": "Use a USB-C cable rated for the bank's wattage, or plug the laptop brick into the AC outlet. Turn on the AC output first on the Lvssci 27000mAh AC Bank. Keep it ventilated."
  },
  {
    "q": "How should I store the bank?",
    "a": "Keep it partly charged, cool and dry. Top it up every few months. Do not leave it in a hot car."
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
