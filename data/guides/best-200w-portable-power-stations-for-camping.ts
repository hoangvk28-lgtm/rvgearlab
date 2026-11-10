export const guideSlug = "best-200w-portable-power-stations-for-camping";
export const guideTitle = "6 Best 200w Portable Power Stations in 2026";
export const metaTitle = "Best 200w Portable Power Stations in 2026";
export const metaDescription = "Best 200W portable power stations compared on capacity, AC output, ports and recharge speed for campers who need a small battery for phones, laptops and lights.";
export const mainKeyword = "best 200w portable power stations";
export const introParagraphs = [
  "A 200W power station is the entry size for camp power: enough AC for a laptop charger, a fan or a small speaker, small and light enough to ride in a daypack. The real limits are watt hours, which set how long it runs, and the AC rating, which sets what it can start.",
  "Six small stations are lined up here, from a 4-pound 128Wh unit to 192Wh LiFePO4 boxes and a solar kit with a panel included. One listing is rated 100W with a 200W surge, so it appears as the nearest size and is labeled that way."
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
    "id": "best-200w-portable-power-stations-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "DARAN R200 Portable Power Station 192Wh",
    "price": "$129.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41raMn+AHDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H878NF4W?tag=rvgearlab-amz-20",
    "description": "The DARAN R200 holds 192Wh of LiFePO4 power with a 200W rated, 400W surge output through two pure sine wave AC outlets. A bi-directional 100W USB-C PD port both fast-charges a laptop and recharges the station, and the listing quotes about 2 hours for a full recharge.\n\nIt pairs the same 192Wh capacity as the Powkey R180 with faster refilling and a built-in MPPT controller for solar. The BLUETTI Elite 10 Mini carries less energy at 128Wh, while the DARAN adds a second AC outlet.\n\nIt suits campers who want the quickest turnaround between nights. The listing quotes 3,500 or more cycles to 80% capacity.",
    "specs": [
      "192Wh LiFePO4, 200W rated",
      "Two pure sine AC outlets",
      "100W bi-directional USB-C"
    ],
    "pros": [
      "About 2 hour recharge",
      "3,500+ cycle LiFePO4 cells",
      "Built-in MPPT for solar input",
      "Two pure sine AC outlets"
    ],
    "cons": [
      "Pricier than the other 192Wh units",
      "Weight is not in the listing"
    ],
    "bestFor": "Quick-turn camp power",
    "take": "The all-rounder with the fastest recharge and a bi-directional USB-C port.",
    "catch": "The listing gives no weight, so check it if you plan to carry it far."
  },
  {
    "id": "best-200w-portable-power-stations-2",
    "rank": 2,
    "badge": "Best Lightweight UPS",
    "name": "BLUETTI Elite 10 Mini Portable Power Station",
    "price": "$113.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31VvYAA+NUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FS6429MD?tag=rvgearlab-amz-20",
    "description": "The BLUETTI Elite 10 Mini packs 128Wh into a 4.0 pound body, with a 200W AC outlet, 100W USB-C, a built-in 10ms UPS and 350W of bypass output. The listing calls it airline friendly and says it recharges from AC in about 70 minutes at 150W.\n\nIt is the lightest here and the only one with a named UPS, which keeps a router or laptop running through an outage. It stores less energy than the 192Wh units, in return for faster refills and a Bluetooth app.\n\nIt suits hikers, flyers and travelers who treat a station as a bigger power bank. Three lighting modes include an SOS setting.",
    "specs": [
      "128Wh, 4.0 lb, 200W AC",
      "10ms UPS, 350W bypass",
      "150W AC recharge in 70 min"
    ],
    "pros": [
      "4.0 lb palm-sized body",
      "Built-in 10ms UPS switchover",
      "Airline-friendly capacity",
      "App control and three light modes"
    ],
    "cons": [
      "128Wh runs out sooner",
      "Solar input needs BLUETTI panels"
    ],
    "bestFor": "Light travel, UPS use",
    "take": "The lightest pick with fast recharge and UPS switchover for desk work.",
    "catch": "128Wh will not carry a long weekend of laptop use on its own."
  },
  {
    "id": "best-200w-portable-power-stations-3",
    "rank": 3,
    "badge": "Best With Solar Panel",
    "name": "200W Solar Powered Generator",
    "price": "$119.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51ueD7s3b6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FBS5KZKB?tag=rvgearlab-amz-20",
    "description": "The Powkey 200W Solar Kit includes a 40W solar panel with a 146Wh, 39,600mAh pure sine wave station. Two 110V AC outlets cap at 200W, with four USB outputs and seven outlets in total, and the listing gives 5 to 6 hours for a wall recharge.\n\nIt is the only pick here that ships with a panel, which saves buying one separately. The 40W panel recharges slowly, so it works for top-ups, while the 192Wh units carry more energy per charge.\n\nAnyone starting out with solar for car camping gets a station and panel in one box. The upgraded BMS adds overload and temperature protection.",
    "specs": [
      "146Wh, 200W pure sine AC",
      "40W solar panel included",
      "Seven outlets in total"
    ],
    "pros": [
      "Solar panel included in the box",
      "Two 110V pure sine AC outlets",
      "Seven outlets for many devices",
      "Three ways to recharge"
    ],
    "cons": [
      "40W panel recharges slowly",
      "Less energy than the 192Wh units"
    ],
    "bestFor": "Station and panel in one",
    "take": "A one-box kit for campers who want solar from day one.",
    "catch": "A 40W panel needs many hours of strong sun to move the 146Wh."
  },
  {
    "id": "best-200w-portable-power-stations-4",
    "rank": 4,
    "badge": "Best Value 192Wh",
    "name": "200W Portable Power Station",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Eg7EkHYHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GLYDTZHZ?tag=rvgearlab-amz-20",
    "description": "The Powkey R180 stores 192Wh in LiFePO4 cells and measures 7.1 by 5.3 by 5.5 inches at 4.7 pounds, with a foldable handle. Ports include one 120V 200W AC outlet, two USB ports, a USB-C port and two 12V 10A DC outputs, plus a dual-white LED light.\n\nIt matches the capacity of the DARAN R200 for less money, with a single AC outlet and slower wall refilling. Against the MARBERO it holds about 30% more energy.\n\nIt suits car campers who want runtime above all and will plug in overnight. The LED flashlight doubles as a small camp lantern.",
    "specs": [
      "192Wh LiFePO4, 4.7 lb",
      "One 120V 200W AC outlet",
      "Two 12V 10A DC outputs"
    ],
    "pros": [
      "192Wh at a lower price",
      "Compact 4.7 lb body",
      "Foldable handle and LED light",
      "Two 12V DC outputs"
    ],
    "cons": [
      "One AC outlet only",
      "Panel not included"
    ],
    "bestFor": "Runtime on a budget",
    "take": "The cheapest way to get 192Wh of LiFePO4 with a real AC outlet.",
    "catch": "Solar panel and cable are separate purchases."
  },
  {
    "id": "best-200w-portable-power-stations-5",
    "rank": 5,
    "badge": "Best Lighting Combo",
    "name": "MARBERO 200W Portable Power Station 148Wh Camping Solar Generator Laptop Power Bank with AC Outlet 110V",
    "price": "$94.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41H27zmeiLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B8HMDRYZ?tag=rvgearlab-amz-20",
    "description": "The MARBERO M822 has a 148Wh battery and a 110V AC inverter rated 200W with 270W max. It has two QC3.0 USB-A ports, two more USB-A ports and a PD USB-C port, and two LED flashlights act as a lantern.\n\nIts two lights, on top and on the side, make it the most useful as a tent lantern. It takes about 7 hours from a wall outlet or 9 from a car adapter, which is slower than the DARAN R200.\n\nIt suits campers who want lighting and charging in one device. Its 270W ceiling gives small surges a little room.",
    "specs": [
      "148Wh, 200W AC, 270W max",
      "QC3.0 and PD USB-C ports",
      "Two LED lights"
    ],
    "pros": [
      "Top and side LED lights",
      "270W max headroom for surges",
      "Multiple fast USB ports",
      "Wall, car or solar recharge"
    ],
    "cons": [
      "7 hour wall recharge is slow",
      "148Wh sits below the 192Wh units"
    ],
    "bestFor": "Tent lantern and charger",
    "take": "A low-cost lantern and charger in a single box for tent trips.",
    "catch": "Charging takes about 7 hours from a wall outlet."
  },
  {
    "id": "best-200w-portable-power-stations-6",
    "rank": 6,
    "badge": "Budget Nearest Fit",
    "name": "Portable Power Station 192Wh Outdoor Generator with AC Outlet 100W",
    "price": "$73.71",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31FBcuGw68L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DKFR196Q?tag=rvgearlab-amz-20",
    "description": "This 192Wh unit measures 4.6 by 4.6 by 7 inches and weighs 3.9 pounds, with LiFePO4 cells rated for over 3,000 cycles. It has one AC outlet, two Type-C, two USB-A and two DC ports, and an LED light with an SOS mode.\n\nThe AC rating is 100W with a 200W surge, so it is the nearest fit rather than a true 200W unit. It still stores the same 192Wh as the DARAN R200 and Powkey R180 at the lowest price here.\n\nIt suits laptop, phone and light charging where no heater or fan is plugged in. The listing says it is about the size of a basic DSLR.",
    "specs": [
      "192Wh, 3.9 lb, LiFePO4",
      "100W rated, 200W surge",
      "Two Type-C, two USB-A"
    ],
    "pros": [
      "Lowest price in the group",
      "3.9 lb and DSLR-sized",
      "192Wh of LiFePO4",
      "SOS mode on the LED light"
    ],
    "cons": [
      "Rated 100W, not 200W",
      "Brand name is not on the listing"
    ],
    "bestFor": "Light loads on a budget",
    "take": "The cheapest 192Wh option, as long as you stay under 100W.",
    "catch": "The 100W rating rules out hair dryers, kettles and most fans."
  }
];

export const howWeEvaluated = [
  {
    "title": "Watt-hours",
    "description": "The Wh capacity of each box was compared against the loads campers run most: phones, laptops and lights."
  },
  {
    "title": "AC rating",
    "description": "Rated and surge watts were checked, with the one 100W-rated unit labeled as the nearest fit."
  },
  {
    "title": "Recharge speed",
    "description": "Wall, car and solar recharge times from the listing were compared."
  },
  {
    "title": "Ports",
    "description": "The mix of AC, USB-C PD, USB-A and 12V ports was matched to camp use."
  },
  {
    "title": "Weight and price",
    "description": "Weight where listed and price per Wh were compared across all six."
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
    "subheading": "By What You Run",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Phone, tablet and lights only",
          "Compact 192Wh 100W",
          "192Wh is plenty at a low price."
        ],
        [
          "Laptop work at camp",
          "DARAN R200",
          "100W USB-C PD and a fast recharge."
        ],
        [
          "Router or desk UPS use",
          "BLUETTI Elite 10 Mini",
          "Built-in 10ms UPS switchover."
        ],
        [
          "Tent lighting plus charging",
          "MARBERO M822",
          "Two LED lights on the body."
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
          "$70 to $100",
          "Compact 192Wh 100W or MARBERO M822"
        ],
        [
          "$90 to $120",
          "Powkey R180 or BLUETTI Elite 10 Mini"
        ],
        [
          "$110 to $130",
          "Powkey 200W Solar Kit or DARAN R200"
        ]
      ]
    }
  },
  {
    "subheading": "Included Panel vs Bring Your Own",
    "cards": [
      {
        "label": "Panel included",
        "text": "The Powkey 200W Solar Kit ships with a 40W panel, so the first sunny day works without extra spending."
      },
      {
        "label": "Panel separate",
        "text": "The DARAN R200, BLUETTI Elite 10 Mini and Powkey R180 take a panel you buy yourself, often with a higher wattage and better efficiency."
      }
    ],
    "note": "Most campers should start with the DARAN R200 and add a panel only if they stay out for several days."
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
          "Lowest spend for 192Wh",
          "Compact 192Wh 100W"
        ],
        [
          "Mid-range LiFePO4",
          "Powkey R180"
        ],
        [
          "Pay for fast recharge",
          "DARAN R200"
        ],
        [
          "Pay for UPS and weight",
          "BLUETTI Elite 10 Mini"
        ]
      ]
    }
  },
  {
    "subheading": "For Laptop Work at Camp Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A USB-C PD port of 60W or more and at least 150Wh of capacity."
      },
      {
        "label": "In this comparison",
        "text": "The DARAN R200 offers 100W USB-C PD and 192Wh, which charges a laptop from the same port that refills the station."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the DARAN R200 if you want a fast 2 hour recharge and a bi-directional 100W USB-C port. The BLUETTI Elite 10 Mini is the premium choice for UPS use and low weight."
      },
      {
        "label": "Save if",
        "text": "Save with the Powkey R180, which gives 192Wh and a 200W AC outlet at a lower price. The Compact 192Wh 100W saves more if you stay under 100W."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rated versus surge watts",
    "explanation": "A 200W rating is the continuous AC load; the surge figure is a brief peak. A laptop charger at 65W fits easily, while a 150W fan and a 65W laptop together approach the limit. Add up everything you will run at the same time and stay below the rated number."
  },
  {
    "criterion": "Watt-hours as runtime",
    "explanation": "Divide the Wh by the device's watts to estimate runtime, then lose about 15 to 25% to inverter loss. A 192Wh station running a 50W load lasts roughly three hours in practice. Check the Wh on the listing, not the mAh."
  },
  {
    "criterion": "Recharge methods",
    "explanation": "Most small stations take AC wall, car socket and solar input, but speeds differ widely. The DARAN R200 lists about 2 hours and the BLUETTI Elite 10 Mini about 70 minutes, while the MARBERO M822 takes about 7. Look for the recharge hours and the solar input wattage."
  },
  {
    "criterion": "Port mix",
    "explanation": "USB-C PD at 60 to 100W charges laptops directly without using the inverter, which saves energy. 12V DC outputs power camp lights and car accessories at 10A. Count the ports you need before you buy."
  },
  {
    "criterion": "Battery chemistry",
    "explanation": "LiFePO4 cells tolerate more charge cycles than standard lithium-ion, with listings quoting 3,000 or more cycles. They also handle heat better. Look for the chemistry named in the listing, and keep any station out of freezing temperatures when charging."
  }
];

export const faq = [
  {
    "q": "What can a 200W power station run?",
    "a": "Phones, tablets, laptops, camp lights, small fans and a portable speaker are easy loads. Anything that heats, such as a kettle or hair dryer, is too much. Add up the rated watts of your devices to confirm they fit."
  },
  {
    "q": "How long will a 192Wh station last?",
    "a": "A 50W load might run roughly three hours after inverter loss. A phone charge uses about 10 to 15Wh, so a 192Wh unit gives many charges. Runtime estimates in listings are best-case figures."
  },
  {
    "q": "Can I use one of these for a CPAP machine?",
    "a": "Some listings mention CPAP machines, but confirm compatibility and power draw with the CPAP maker. Do not rely on a runtime estimate for medical equipment. Heated humidifiers raise the draw significantly."
  },
  {
    "q": "How do I charge a small station with solar?",
    "a": "Match the panel's voltage and connector to the station's solar input, and use the wattage range in the manual. A 100W panel in full sun can add roughly half its rating in real conditions. Always check that the panel plug fits."
  },
  {
    "q": "How should I store a power station?",
    "a": "Keep it charged to roughly half and store it in a cool, dry place. Top it up every few months. Avoid leaving it in a hot car."
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
