export const guideSlug = "best-portable-generators-under-150";
export const guideTitle = "5 Best Portable Generators Under 150 in 2026";
export const metaTitle = "Best Portable Generators Under 150 in 2026";
export const metaDescription = "Best portable generators under $150: five gas and battery generators compared on output, weight and fuel for camping, tailgating and power cuts.";
export const mainKeyword = "best portable generators under 150";
export const introParagraphs = [
  "At $150 you can finally choose between a small two-stroke gas generator and a battery station with real AC output. The five picks run from about $59 to $140 and split into those two families.",
  "Gas wins on runtime and loses on noise, fumes and fuss, while batteries win on silence and indoor safety. The notes below explain which family suits which buyer."
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
    "id": "best-portable-generators-under-150-1",
    "rank": 1,
    "badge": "Best Value Under $150",
    "name": "DARAN Portable Power Station",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41P62EDaNTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DN9QHGG8?tag=rvgearlab-20",
    "description": "DaranEner stores 288Wh in LiFePO4 and puts out 350W (600W peak) from two AC outlets, plus a 60W USB-C port. It measures 10 by 6.6 by 8.2 inches, weighs 8.2 lb and charges from a wall outlet, a car socket or a solar panel.\n\nIt holds nearly double the Apowking kit and delivers 3.5 times its AC power, for $20 more. The PowerSmart runs for hours longer on fuel, and this one runs silently and indoors.\n\nChoose it for CPAP nights, a small fan, a laptop and phone charging. It suits campers who want quiet power with no fuel to carry.",
    "specs": [
      "288Wh LiFePO4, 350W AC",
      "8.2 lb, 10 x 6.6 x 8.2 inches",
      "Two AC outlets, 60W USB-C"
    ],
    "pros": [
      "350W AC with 600W peak",
      "LiFePO4 cells for long life",
      "Silent with no fumes",
      "Wall, car or solar charging"
    ],
    "cons": [
      "Needs a separate panel for solar",
      "288Wh runs out fast with a fridge"
    ],
    "bestFor": "Quiet nights and small appliances",
    "take": "The best mix of capacity and power for the price.",
    "catch": "Avoid appliances over 350W."
  },
  {
    "id": "best-portable-generators-under-150-2",
    "rank": 2,
    "badge": "Best Gas Pick",
    "name": "PowerSmart 1200 Watt Portable Generator for Camping",
    "price": "$139.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hdcAPTtaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C4NY2BYY?tag=rvgearlab-20",
    "description": "PowerSmart is a 71cc two-stroke gas generator rated for 900 running and 1200 surge watts. It weighs 34 lb, has a 120V 7.5A AC outlet and a 12V 5.3A DC output with a charging cable, and meets ANSI/PGMA G300, UL2201 and EPA standards.\n\nIt is the only real engine at this price, which means it keeps running as long as you carry fuel. The DaranEner needs a wall outlet or panel to refill, and this one needs mixed gas and oil.\n\nChoose it for tailgates, work sites and long outages with lights, tools and a slow cooker. Run it outdoors at least 20 feet from tents and windows, and add a CO alarm to any nearby shelter.",
    "specs": [
      "900 rated, 1200 surge watts",
      "34 lb, 71cc two-stroke",
      "120V 7.5A and 12V 5.3A"
    ],
    "pros": [
      "Real gas runtime beyond any battery",
      "34 lb, light for a generator",
      "DC output with charging cable",
      "Meets UL2201 and EPA standards"
    ],
    "cons": [
      "Two-stroke needs oil mixed into the fuel",
      "Noisy and not an inverter generator"
    ],
    "bestFor": "Tailgates and long outages",
    "take": "The only gas engine under $150.",
    "catch": "Never run it in a tent or camper."
  },
  {
    "id": "best-portable-generators-under-150-3",
    "rank": 3,
    "badge": "Best Name-Brand Station",
    "name": "Westinghouse iGen400s 400 Watt",
    "price": "$139.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/419J+SgMmpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GD91M81M?tag=rvgearlab-20",
    "description": "Westinghouse iGen400s holds 183Wh and gives 400W through nine outlets: two 120V AC, three 30W USB-C, one 100W USB-C, two USB-A and a 12V DC. It charges to 80 percent in 2 hours from a wall outlet with a 100W adapter, and runs with no noise or fumes.\n\nIt offers more AC power than the Apowking and a bigger brand name, and stores about a third less than the DaranEner. A tri-mode light is built in.\n\nChoose it for a laptop-heavy desk setup or a car camp, with a USB-C 100W port for modern laptops. It suits people who want a recognized brand.",
    "specs": [
      "183Wh, 400W, nine outlets",
      "100W USB-C plus three 30W",
      "80% charge in 2 hours"
    ],
    "pros": [
      "400W output from nine ports",
      "100W USB-C for laptops",
      "Tri-mode light",
      "Safe to use indoors"
    ],
    "cons": [
      "Smaller battery than the DaranEner",
      "No panel in the box"
    ],
    "bestFor": "Laptop and USB-C heavy setups",
    "take": "A name-brand station with many ports.",
    "catch": "Buy a 100W AC adapter for the fastest charge."
  },
  {
    "id": "best-portable-generators-under-150-4",
    "rank": 4,
    "badge": "Best Kit With Panel",
    "name": "Solar Powered Generator",
    "price": "$119.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OKaG04ZNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CWGWTSFS?tag=rvgearlab-20",
    "description": "Apowking bundles a 146Wh station with a 40W monocrystalline panel rated at 20.5 percent efficiency. It has seven outputs, including two 110V AC outlets within 100W (200W peak), and a dual LED flashlight with three modes.\n\nAt about $120 it is the only pick that includes solar, so it can be refilled with no wall outlet. The DaranEner holds twice the energy with no panel, and the Apowking trades capacity for independence.\n\nChoose it if you want a complete solar starter for phones, lights and a laptop. It suits first-time buyers who camp off-grid.",
    "specs": [
      "146Wh with 40W panel",
      "Two AC outlets, 100W (200W peak)",
      "Seven outputs, dual flashlight"
    ],
    "pros": [
      "40W panel in the box",
      "Seven outputs",
      "Dual LED flashlight with SOS",
      "Battery protections built in"
    ],
    "cons": [
      "Only 100W of AC output",
      "40W panel takes a full day to refill"
    ],
    "bestFor": "First solar kit",
    "take": "A complete off-grid starter at a low price.",
    "catch": "Plan on a full day of sun."
  },
  {
    "id": "best-portable-generators-under-150-5",
    "rank": 5,
    "badge": "Best Budget Station",
    "name": "Portable Power Station 122.8Wh",
    "price": "$59.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41vZtm9ylGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DR89VFT8?tag=rvgearlab-20",
    "description": "SinKeu uses a UL-certified LiFePO4 battery of 122.8Wh with 3500 or more cycles and pass-through charging. It provides 150W of continuous AC, weighs 4 lb and measures about 7.5 by 4.5 inches.\n\nAt about $59 it is the cheapest pick in the guide, less than half the price of the DaranEner. It holds less than half the energy and puts out less than half the AC power.\n\nChoose it for the lowest price on a LiFePO4 station. It suits phones, cameras and a mini-fridge under 100W.",
    "specs": [
      "122.8Wh LiFePO4, 3500 cycles",
      "150W continuous AC",
      "4 lb, pass-through charging"
    ],
    "pros": [
      "LiFePO4 at the lowest price",
      "Pass-through charging",
      "150W continuous AC",
      "UL-certified battery"
    ],
    "cons": [
      "Modest capacity",
      "Fewer features than pricier picks"
    ],
    "bestFor": "The tightest budget",
    "take": "A LiFePO4 station for about $59.",
    "catch": "Do not expect to run a fridge."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fuel or battery",
    "description": "Gas and battery generators were separated, since they serve different jobs."
  },
  {
    "title": "Output watts",
    "description": "Running and surge watts were compared against real loads."
  },
  {
    "title": "Weight",
    "description": "Weights from 4 lb to 34 lb were compared."
  },
  {
    "title": "Safety",
    "description": "Indoor use, CO risk and certifications were noted."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is under $150, and the top pick offers the best mix of capacity and power."
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
    "subheading": "By load",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Lights and small tools for hours",
          "PowerSmart 1200W",
          "900 running watts with gas."
        ],
        [
          "CPAP and fan overnight",
          "DaranEner 288Wh",
          "288Wh and 350W, silent."
        ],
        [
          "Laptop desk and phones",
          "Westinghouse iGen400s",
          "100W USB-C and nine outlets."
        ],
        [
          "Off-grid solar starter",
          "Apowking 146Wh Kit",
          "40W panel included."
        ],
        [
          "Lowest price, small loads",
          "SinKeu 122.8Wh",
          "LiFePO4 at about $59."
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
          "$50 to $120",
          "SinKeu 122.8Wh or Apowking 146Wh Kit"
        ],
        [
          "$130 to $140",
          "Westinghouse iGen400s or DaranEner 288Wh"
        ],
        [
          "$130 to $140",
          "PowerSmart 1200W"
        ]
      ]
    }
  },
  {
    "subheading": "Gas vs battery",
    "cards": [
      {
        "label": "Gas",
        "text": "The PowerSmart 1200W runs as long as you have fuel, but it is loud and must run outdoors. It suits work sites and tailgates."
      },
      {
        "label": "Battery",
        "text": "The DaranEner 288Wh, Westinghouse iGen400s, Apowking 146Wh Kit and SinKeu 122.8Wh are silent and safe indoors. Capacity is limited."
      }
    ],
    "note": "Most campers should take the DaranEner 288Wh, and only buyers who need hours of power should take the PowerSmart 1200W."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Budget band",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $59",
          "SinKeu 122.8Wh"
        ],
        [
          "About $120",
          "Apowking 146Wh Kit"
        ],
        [
          "About $139",
          "Westinghouse iGen400s"
        ],
        [
          "About $140",
          "DaranEner 288Wh"
        ],
        [
          "About $140",
          "PowerSmart 1200W"
        ]
      ]
    }
  },
  {
    "subheading": "For a power outage specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for outlets for a phone, a light and a router, plus 150Wh or more, and safe operation."
      },
      {
        "label": "In this comparison",
        "text": "The DaranEner 288Wh gives 288Wh with 350W, and the PowerSmart 1200W gives hours of gas power outdoors."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you need hours of runtime or 1000W of output, because $150 buys only the PowerSmart 1200W in gas form. For a fridge, step up to a 500Wh station."
      },
      {
        "label": "Save if",
        "text": "Save if you only need phones, a router and lights, since the SinKeu 122.8Wh costs about $59 and has LiFePO4 cells."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Gas or battery",
    "explanation": "A gas generator can run as long as you carry fuel, but it is noisy, makes carbon monoxide and must sit outdoors. A battery station is silent and indoor-safe but limited to 122 to 288Wh at this price. Decide how many hours you need, then choose the family."
  },
  {
    "criterion": "Running vs surge watts",
    "explanation": "Running watts are the sustained limit, and surge watts only cover a split-second start-up. The PowerSmart 1200W is rated 900 running and 1200 surge, so a 1000W load will overload it. Add up your appliance watts and keep running load under 80 percent, so match the rating to your biggest single load."
  },
  {
    "criterion": "Fuel type",
    "explanation": "A two-stroke engine needs oil mixed into gasoline at a fixed ratio, which is easy to get wrong and smokes more. Four-stroke engines are cleaner but cost more. Check the fuel mix ratio in the manual before buying a two-stroke unit, and keep a clearly labeled fuel can for the mix."
  },
  {
    "criterion": "Carbon monoxide safety",
    "explanation": "Gas generators produce carbon monoxide, which is invisible and deadly. Run them at least 20 feet from tents, windows and doors, never in a garage or tent, and use a battery CO alarm in your shelter. If you cannot follow those rules, choose a battery station."
  },
  {
    "criterion": "Battery chemistry",
    "explanation": "LiFePO4 cells in the DaranEner and SinKeu last around 3000 cycles, while lithium-ion cells last about 500. For regular campers the extra cost pays back. Check the cell type and cycle rating on the product page, so ask how many charge cycles the maker claims and at what depth of discharge, because a cycle rating without that detail means little."
  },
  {
    "criterion": "Ports and pass-through",
    "explanation": "Pass-through charging lets you power gear while the station recharges, which suits a desk setup. Count your AC outlets, USB-C ports and DC ports against your gear. A 100W USB-C port charges most laptops, and choose a station whose ports match the devices you already own, such as a USB-C laptop charger or a 12V cooler plug, so you do not need adapters that waste power."
  }
];

export const faq = [
  {
    "q": "Can I run a refrigerator from these?",
    "a": "A full-size fridge draws 100 to 150W running with a surge near 600W on start. The PowerSmart 1200W handles it, while the battery picks do not. Use a gas unit outdoors or step up to a larger station for a fridge."
  },
  {
    "q": "How do I mix fuel for a two-stroke generator?",
    "a": "Follow the ratio in the manual, commonly 40 to 1 gasoline to two-stroke oil, and mix in a separate can. Using straight gas ruins the engine. Shake before filling and use fresh fuel and store the mix no longer than 30 days."
  },
  {
    "q": "Are battery generators safe to use in a tent?",
    "a": "Yes, because they make no fumes, and the Westinghouse iGen400s is made for indoors and outdoors. Keep them dry and away from sleeping bags. Never use a gas generator in a tent and never cover a running station with a blanket."
  },
  {
    "q": "Can I recharge from my car?",
    "a": "Most stations such as the DaranEner 288Wh accept a car socket, which gives about 8 to 10 amps. A full charge from the car can take 6 hours or more. Run the engine to avoid draining the car battery."
  },
  {
    "q": "How do I maintain a gas generator?",
    "a": "Run it for a few minutes a month, drain or stabilize the fuel before storage, and check the spark plug. Keep it covered and dry. Stale fuel is the most common reason a generator will not start."
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
