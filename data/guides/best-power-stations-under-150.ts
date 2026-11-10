export const guideSlug = "best-power-stations-under-150";
export const guideTitle = "6 Best Power Stations Under 150 in 2026";
export const metaTitle = "Best Power Stations Under 150 in 2026";
export const metaDescription = "Best power stations under $150: six small portable power stations compared on watt-hours, AC output and weight for phones, laptops and CPAP-free camping.";
export const mainKeyword = "best power stations under 150";
export const introParagraphs = [
  "A $150 budget buys a small power station, and the six picks here run from about $59 to $139 in capacities from 89.6 to 192 watt-hours. They run phones, laptops, lights and fans, and some will handle a small fan or a mini fridge for a night.",
  "Moving toward the cap adds capacity, higher AC output and sturdier chemistry, and the notes explain what each step buys. None of these runs a space heater, a kettle or a hair dryer, so match the watts to your gear."
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
    "id": "best-power-stations-under-150-1",
    "rank": 1,
    "badge": "Best Value Under $150",
    "name": "DaranEner Portable Power Station",
    "price": "$109.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41cRxC-B-dL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C6K5ZPNJ?tag=rvgearlab-amz-20",
    "description": "DaranEner combines a 192Wh LiFePO4 battery with two 300W pure sine wave AC outlets (600W surge), a 60W USB-C PD jack, a pair of USB-A outputs and a 12V socket. The battery is rated for 3,500 or more cycles, and an MPPT controller accepts up to 60W of solar input.\n\nAt about $110 it offers three times the AC output of the $74 192Wh compact model and the same capacity, with longer-lasting cells. The Westinghouse iGen400s costs $29 more with a lower capacity, so this one is the stronger buy.\n\nCampers who want a CPAP-friendly pure sine wave output, a fan or a small laptop setup for a weekend will like it. It runs six devices at once.",
    "specs": [
      "192Wh LiFePO4, 3,500+ cycles",
      "300W AC (600W surge), pure sine",
      "60W USB-C PD, 60W solar input"
    ],
    "pros": [
      "Pure sine wave AC at 300W",
      "LiFePO4 cells last 3,500+ cycles",
      "Two AC outlets plus USB-C PD 60W",
      "Accepts up to 60W of solar input"
    ],
    "cons": [
      "AC wall charging tops out at 100W",
      "192Wh runs a 50W fan for under 4 hours"
    ],
    "bestFor": "Weekend camping and CPAP-style loads",
    "take": "The best mix of capacity, AC power and battery life under $150.",
    "catch": "Keep the load under 300W continuous."
  },
  {
    "id": "best-power-stations-under-150-2",
    "rank": 2,
    "badge": "Best Brand-Name Pick",
    "name": "Westinghouse iGen400s 400 Watt",
    "price": "$139.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/419J+SgMmpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GD91M81M?tag=rvgearlab-amz-20",
    "description": "Westinghouse's iGen400s is a 183Wh station with 400W peak and 200W running output, nine outlets including two 120V AC, three USB-C 30W ports and one 100W USB-C. It charges to 80 percent in 2 hours from a wall outlet with a 100W adaptor, and runs without noise or fumes.\n\nAt about $139 it is the priciest pick here and offers the most ports. The DaranEner 192Wh gives more capacity and AC power for $29 less, and this one gives a recognizable brand and a 100W USB-C port.\n\nCampers who charge laptops, tablets and cameras more than they run AC gear will like the USB-C ports. It suits indoor emergency use too.",
    "specs": [
      "183Wh, 400W peak, 200W running",
      "Nine outlets, 100W USB-C",
      "80% charge in 2 hours"
    ],
    "pros": [
      "Nine outlets including a 100W USB-C",
      "Quiet, fume-free operation",
      "Fast 2 hour charge to 80%",
      "LED display shows power flow"
    ],
    "cons": [
      "200W running output is limited",
      "AC adapter is not included"
    ],
    "bestFor": "Laptop and camera charging",
    "take": "A recognizable brand with plenty of USB-C power.",
    "catch": "Buy a 100W adaptor to get the quick charge."
  },
  {
    "id": "best-power-stations-under-150-3",
    "rank": 3,
    "badge": "Best Port Count",
    "name": "EnginStar Portable Power Station",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Xg87L5uNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FB8R7N65?tag=rvgearlab-amz-20",
    "description": "EnginStar packs a 155Wh lithium battery into a 4 lb case with a 150W 110V AC outlet, two DC outputs, two USB ports and a USB-C port, six outputs in all. The pack passed UL certification and includes overvoltage, over-temperature, short circuit and overload protection.\n\nAt about $90 it costs $20 less than the DaranEner and offers lower AC output and capacity. The Daran 89.6Wh costs the same and uses LiFePO4 cells.\n\nPhone, tablet and camera charging at a campsite is the best fit. The LCD screen shows input and output.",
    "specs": [
      "155Wh, 150W AC, 6 outputs",
      "4 lb, UL certified",
      "LCD shows AC and DC input"
    ],
    "pros": [
      "UL certification and layered protections",
      "Six outputs run together",
      "LCD screen shows power flow",
      "Only 4 lb to carry"
    ],
    "cons": [
      "Lithium chemistry is not LiFePO4",
      "150W AC limits bigger gear"
    ],
    "bestFor": "Phones, cameras and tablets",
    "take": "A lightweight station with solid protections for small gear.",
    "catch": "Do not plan on a fridge or heater."
  },
  {
    "id": "best-power-stations-under-150-4",
    "rank": 4,
    "badge": "Best Compact Capacity",
    "name": "Portable Power Station 192Wh Outdoor Generator with AC Outlet 100W",
    "price": "$73.71",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31FBcuGw68L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DKFR196Q?tag=rvgearlab-amz-20",
    "description": "This station holds 192Wh in a 4.6 by 4.6 by 7 inch body, about the size of a basic DSLR camera, and weighs 3.9 lb. Outputs are a single 100W AC socket (200W surge), a USB-C pair, a USB-A pair and two DC jacks, and a two-level LED light adds an SOS mode.\n\nAt about $74 it costs $36 less than the DaranEner with the same capacity and a third of the AC power. It is the cheapest way to get 192Wh.\n\nLight users who charge phones and run a small fan or a few lights will like the capacity per dollar. It also fits a bag easily.",
    "specs": [
      "192Wh, 100W AC (200W surge)",
      "3.9 lb, 4.6 x 4.6 x 7 inches",
      "2 USB-C, 2 USB-A, 2 DC ports"
    ],
    "pros": [
      "Same capacity as the DaranEner for less",
      "Only 3.9 lb",
      "LED light with SOS",
      "Seven ports"
    ],
    "cons": [
      "100W AC output is limited",
      "Not LiFePO4"
    ],
    "bestFor": "Light users on a tight budget",
    "take": "A lot of watt-hours for the lowest price per Wh here.",
    "catch": "Match your gear to 100W."
  },
  {
    "id": "best-power-stations-under-150-5",
    "rank": 5,
    "badge": "Best Pocket-Size",
    "name": "Daran Portable Power Station 89.6Wh LiFePO4 Battery 100W",
    "price": "$75.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51RqhJSR3sL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQT5G1ZR?tag=rvgearlab-amz-20",
    "description": "Daran 89.6Wh is a pocketable power station about the size of a smartphone at 6.5 by 3.3 by 4 inches and 2.54 lb. It uses a LiFePO4 battery with 100W (200W peak) output across seven ports, including two AC outlets and two USB-C ports, and refills from empty to 80 percent in 1.5 hours.\n\nAt about $90 it holds less than half the energy of the DaranEner 192Wh and is the only fanless, silent pick. The small battery limits runtime, so it suits short use.\n\nLight packers and travelers who want silent power for a phone, a laptop and a headlamp will like it. It is also a good bedside backup.",
    "specs": [
      "89.6Wh LiFePO4, 100W AC",
      "2.54 lb, 6.5 x 3.3 x 4 inches",
      "Fanless, 0-80% in 1.5 hours"
    ],
    "pros": [
      "Smallest and lightest of the six",
      "Silent fanless operation",
      "LiFePO4 battery",
      "Fast 1.5 hour charge to 80%"
    ],
    "cons": [
      "Only 89.6Wh of capacity",
      "Priced above larger-capacity picks"
    ],
    "bestFor": "Light travelers and bedside backup",
    "take": "A silent, tiny station for short trips.",
    "catch": "It powers a laptop for about one charge."
  },
  {
    "id": "best-power-stations-under-150-6",
    "rank": 6,
    "badge": "Cheapest Pick",
    "name": "Portable Power Station 122.8Wh",
    "price": "$59.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41vZtm9ylGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DR89VFT8?tag=rvgearlab-amz-20",
    "description": "SinKeu uses a UL-certified LiFePO4 battery of 122.8Wh with 3,500 or more life cycles and pass-through charging. It provides 150W continuous AC for laptops, cameras and mini-fridges under 100W, weighs 4 lb and measures 7.5 by 4.5 by 6.5 inches.\n\nAt about $59 it costs half the price of the DaranEner and offers about two thirds of the capacity. The LiFePO4 chemistry at this price is the standout.\n\nBudget campers who want a light, long-lasting station for charging and a small mini-fridge will like it. Recharge from a wall socket in about 4 hours.",
    "specs": [
      "122.8Wh LiFePO4, 3,500+ cycles",
      "150W continuous AC",
      "4 lb, pass-through charging"
    ],
    "pros": [
      "LiFePO4 at the lowest price",
      "Pass-through charging",
      "150W continuous AC",
      "Wall charge in about 4 hours"
    ],
    "cons": [
      "Capacity is modest",
      "Fewer features than pricier picks"
    ],
    "bestFor": "Budget campers and tiny fridges",
    "take": "The cheapest LiFePO4 station here.",
    "catch": "A mini fridge will drain it in a few hours."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Capacities from 89.6Wh to 192Wh were compared against the devices each could run."
  },
  {
    "title": "AC output",
    "description": "Continuous and surge watts from 100W to 300W were compared."
  },
  {
    "title": "Battery chemistry",
    "description": "LiFePO4 and standard lithium cells were compared for cycle life."
  },
  {
    "title": "Ports",
    "description": "AC, USB-C PD and DC ports were compared."
  },
  {
    "title": "Weight",
    "description": "Weights from 2.54 lb to 4 lb were compared."
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
    "subheading": "By what you power",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Laptop, camera and phone",
          "Westinghouse iGen400s",
          "Nine outlets and a 100W USB-C port."
        ],
        [
          "A small fan and CPAP-style load",
          "DaranEner 192Wh",
          "Pure sine wave 300W and 192Wh."
        ],
        [
          "Cheapest watt-hours",
          "192Wh Compact 100W",
          "192Wh for about $74."
        ],
        [
          "Quiet bedside backup",
          "Daran 89.6Wh",
          "Fanless and pocket-size."
        ],
        [
          "Low-cost LiFePO4",
          "SinKeu 122.8Wh",
          "About $59 and 3,500 cycles."
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
          "$50 to $80",
          "SinKeu 122.8Wh or 192Wh Compact 100W"
        ],
        [
          "$80 to $90",
          "EnginStar 155Wh or Daran 89.6Wh"
        ],
        [
          "$100 to $140",
          "DaranEner 192Wh or Westinghouse iGen400s"
        ]
      ]
    }
  },
  {
    "subheading": "LiFePO4 vs standard lithium",
    "cards": [
      {
        "label": "LiFePO4",
        "text": "LiFePO4 cells last up to 3,500 cycles and tolerate heat better, with slightly more weight. The DaranEner 192Wh, Daran 89.6Wh and SinKeu 122.8Wh use this chemistry."
      },
      {
        "label": "Standard lithium",
        "text": "Standard lithium cells are lighter and cheaper but wear out sooner. The EnginStar 155Wh, 192Wh Compact 100W and Westinghouse iGen400s use lithium cells."
      }
    ],
    "note": "Most campers should buy the DaranEner 192Wh, since LiFePO4 lasts much longer."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Spend",
        "Recommended pick"
      ],
      "rows": [
        [
          "Around $59",
          "SinKeu 122.8Wh"
        ],
        [
          "Around $74",
          "192Wh Compact 100W"
        ],
        [
          "Around $90",
          "EnginStar 155Wh"
        ],
        [
          "Around $90 for LiFePO4",
          "Daran 89.6Wh"
        ],
        [
          "Around $110",
          "DaranEner 192Wh"
        ],
        [
          "Around $139",
          "Westinghouse iGen400s"
        ]
      ]
    }
  },
  {
    "subheading": "For weekend tent camping specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for at least 150Wh, a pure sine wave AC outlet and a 60W USB-C port, and keep the station outside the sleeping area."
      },
      {
        "label": "In this comparison",
        "text": "The DaranEner 192Wh offers 192Wh and 60W USB-C, and the Westinghouse iGen400s adds nine outlets."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want to run a mini fridge or a CPAP overnight, which needs 300Wh or more and moves you to the next price tier. The DaranEner 192Wh is the top value in this range."
      },
      {
        "label": "Save if",
        "text": "Save if you only charge phones and a headlamp, since the SinKeu 122.8Wh costs about $59 and covers that."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watt-hours vs runtime",
    "explanation": "Watt-hours tell you how much energy the battery holds, and runtime equals watt-hours divided by your device watts, minus about 15 percent for losses. A 192Wh station runs a 40W fan for about 4 hours. Look for the Wh figure in the title and divide it by your gear's wattage."
  },
  {
    "criterion": "Continuous vs surge watts",
    "explanation": "Continuous watts is what the station can run all night, and surge watts is a brief peak for motors starting up. A 100W station cannot run a 300W kettle even if the surge says 200W. Look at the rated output and add up your devices' watts before buying."
  },
  {
    "criterion": "LiFePO4 vs standard lithium",
    "explanation": "LiFePO4 cells last 3,000 to 4,000 cycles, compared with 500 or so for standard lithium cells, so they hold up for years. They weigh a bit more per Wh. Look for LiFePO4 or LFP in the title if you plan to use the station often."
  },
  {
    "criterion": "Pure sine wave AC",
    "explanation": "Pure sine wave output is safer for laptops, CPAP-style machines and chargers than modified sine wave, which can make electronics hum or run warm. Cheap inverters often use modified sine wave and say so in small print. Look for the words pure sine wave in the product description before you plug in anything sensitive."
  },
  {
    "criterion": "Recharging",
    "explanation": "Wall charging at 100W takes about 2 hours for a 192Wh station, and solar input up to 60W takes 4 to 5 hours of good sun. Check the maximum input watts and whether a solar panel is included. Look for the charging time in the product details."
  }
];

export const faq = [
  {
    "q": "How long will a 192Wh power station run a fan?",
    "a": "A 192Wh station runs a 40W fan for about 4 hours, since runtime is capacity divided by watts with a loss of about 15 percent. The DaranEner 192Wh and 192Wh Compact 100W hold this much energy. Choose a lower-wattage fan for a full night."
  },
  {
    "q": "Can I run a CPAP overnight?",
    "a": "A CPAP machine draws about 30 to 60W, so a 192Wh station gives 3 to 5 hours, not a full night. You need around 300Wh for a whole night. Check your CPAP's watt rating before you rely on a small station."
  },
  {
    "q": "Can I use a power station in a tent?",
    "a": "Yes, because a battery station makes no exhaust, but keep it dry, off the ground and out of direct sun. Do not cover it, since it needs airflow to stay cool. Never bring a gas generator inside a tent."
  },
  {
    "q": "How do I recharge it at camp?",
    "a": "Use a 12V car socket cable, a compatible solar panel of up to 60W or a wall adapter at home, and top it up before the trip. The DaranEner 192Wh accepts up to 60W of solar, and a car socket charge takes several hours with the engine running."
  },
  {
    "q": "How do I store a power station?",
    "a": "Store it at about 50 to 80 percent charge in a cool, dry place and top it up every few months. Avoid temperatures above 100 degrees. LiFePO4 models like the Daran 89.6Wh tolerate storage better."
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
