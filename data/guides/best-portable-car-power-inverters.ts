export const guideSlug = "best-portable-car-power-inverters";
export const guideTitle = "4 Best Portable Car Power Inverters in 2026";
export const metaTitle = "Best Portable Car Power Inverters in 2026";
export const metaDescription = "Best portable car power inverters compared on weight, size, power source and ports, for travelers who want AC power that fits a bag or glove box.";
export const mainKeyword = "best portable car power inverters";
export const introParagraphs = [
  "Portable usually means one of two things: small enough to leave in the glove box, or independent enough to carry beyond the car. This list covers both, from plug-in inverters to a model that runs on a power-tool battery.",
  "Four inverters were compared on listed weight and size, continuous watts, ports and the power source each one needs. Small does not mean unlimited, so each pick also carries the load warnings its listing prints."
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
    "id": "best-portable-car-power-inverters-1",
    "rank": 1,
    "badge": "Best Quiet Pick",
    "name": "DEWALT DXAEPI140 Power Inverter for Vehicles",
    "price": "$36.82",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oaEUqX4YL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B06Y549WB9?tag=rvgearlab-20",
    "description": "The DEWALT DXAEPI140 is a 140W continuous inverter that plugs into the vehicle's 12V socket, with a 25W USB-C port and a 15W USB-A port. The listing describes a fan-free, silent design, low-voltage auto shut-off and an installation kit for permanent mounting.\n\nIt is the only pick without a fan, and the only one with a mounting kit that lets it stay installed. Against the BESTEK and PiSFAU it offers less wattage in return for silent operation and a name behind the shut-off protection.\n\nIt suits drivers who charge a phone and laptop on commutes and want no fan noise. The low-voltage shutoff helps prevent battery drain.",
    "specs": [
      "140W continuous, plugs into 12V",
      "25W USB-C, 15W USB-A",
      "Fan-free, silent design"
    ],
    "pros": [
      "Fan-free and silent in use",
      "Auto shut-off protects the battery",
      "Mounting kit for permanent install",
      "USB-C and USB-A ports"
    ],
    "cons": [
      "Lowest wattage of the plug-ins",
      "AC outlet count is not stated"
    ],
    "bestFor": "Silent in-car charging",
    "take": "A quiet, low-power inverter that can stay mounted in the vehicle.",
    "catch": "At 140W it handles laptops and chargers, not heavier loads."
  },
  {
    "id": "best-portable-car-power-inverters-2",
    "rank": 2,
    "badge": "Best Overall Plug-In",
    "name": "BESTEK Power Inverter DC 12-17V to AC 110V",
    "price": "$24.69",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hEeE+OZhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B004MDXS0U?tag=rvgearlab-20",
    "description": "The BESTEK provides 300W continuous through two 110V AC outlets and two 4.8A USB ports. It lists a 40 amp fuse built in, an aluminum shell, an input window of 11 to 17V and a 32 inch cord on an iPhone-sized body.\n\nIt offers 160W more than the DEWALT and 100W more than the PiSFAU, with two AC outlets and a named fuse. Compared with the Kzreect it needs a vehicle socket, not a tool battery.\n\nIt suits travelers who want a sturdy, small inverter for laptops and tablets. The aluminum shell takes knocks in a packed bag.",
    "specs": [
      "300W continuous, 40A fuse",
      "Two AC plus two 4.8A USB",
      "iPhone-sized, 32 inch cord"
    ],
    "pros": [
      "Two AC outlets at 300W",
      "Named 40 amp fuse",
      "Aluminum housing resists bumps",
      "iPhone-sized for easy carry"
    ],
    "cons": [
      "Needs a running vehicle socket",
      "Socket fuse limits actual output"
    ],
    "bestFor": "Laptop and tablet travel",
    "take": "A small, sturdy inverter that fits most vehicles and travel bags.",
    "catch": "Vehicle sockets are fused far below the 300W label, so use light loads."
  },
  {
    "id": "best-portable-car-power-inverters-3",
    "rank": 3,
    "badge": "Smallest Plug-In",
    "name": "PiSFAU 200W Car Power Inverter",
    "price": "$19.34",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TnIJVNvzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CFB6T2QN?tag=rvgearlab-20",
    "description": "The PiSFAU is a 200W plug-in inverter built around a fully insulated ABS shell, listed at 8.5 oz and shaped like a phone. Its sockets are a pair of standard AC outlets plus four USB ports, backed by overheat, undervoltage, overvoltage, overload and short-circuit protection.\n\nIt carries twice as many USB ports as the DEWALT at the lowest price of the plug-ins. Against the BESTEK it gives up 100W of headline power.\n\nIt suits travelers who prioritize size and charging many phones at once. The listing calls it the same size as a cell phone.",
    "specs": [
      "200W, 2 AC plus 4 USB",
      "8.5 oz, phone-sized",
      "Insulated ABS shell"
    ],
    "pros": [
      "Smallest footprint and light weight",
      "Four USB ports charge many devices",
      "Lowest price among plug-ins",
      "Multiple protections named"
    ],
    "cons": [
      "Lower wattage than the BESTEK",
      "No USB-C PD port listed"
    ],
    "bestFor": "Compact device charging",
    "take": "The smallest and cheapest plug-in for phones, tablets and a laptop.",
    "catch": "It is meant for small electronics and not for appliances."
  },
  {
    "id": "best-portable-car-power-inverters-4",
    "rank": 4,
    "badge": "Best Off-Vehicle Pick",
    "name": "2 Pack 220W Power Inverter Compatible with Dewalt 20V Battery",
    "price": "$50.14",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51S+W-XObNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DRJW3MLD?tag=rvgearlab-20",
    "description": "The Kzreect is a 2-pack of 220W inverters that run on a compatible DEWALT 20V battery, sold without the battery. Each has a 110V AC outlet, a 30W USB-C PD port, two 18W USB-A QC ports, a 400 lumen LED work light with a strobe mode and weighs 0.68 lb.\n\nIt is the only pick that works away from a vehicle, and it comes as two inverters. Compared with the vehicle-socket models it needs a battery pack, which is not included.\n\nIt suits campers and tradespeople who already own DEWALT 20V packs and want AC power off-grid. The LED work light doubles as a camp light.",
    "specs": [
      "220W from a DEWALT 20V pack",
      "30W USB-C, two 18W USB-A",
      "400 lumen LED, 0.68 lb"
    ],
    "pros": [
      "Runs without a vehicle",
      "Two inverters in the pack",
      "Built-in work light with strobe",
      "Slide-on battery lock"
    ],
    "cons": [
      "Battery packs not included",
      "Only works with compatible packs"
    ],
    "bestFor": "Off-vehicle camp power",
    "take": "A tool-battery inverter for camps where the car is not nearby.",
    "catch": "It is a third-party adapter, so check your pack model against the compatibility list."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight and size",
    "description": "Listed weights and dimensions were compared for glove-box and bag carry."
  },
  {
    "title": "Power source",
    "description": "Vehicle-socket plug-ins were separated from tool-battery models."
  },
  {
    "title": "Watts",
    "description": "Continuous output from 140W to 300W was compared."
  },
  {
    "title": "Ports",
    "description": "AC outlets, USB-C and USB-A ports were counted."
  },
  {
    "title": "Protections",
    "description": "Fuses, shut-offs, fans and housing were noted."
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
    "subheading": "By Power Source",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Vehicle socket, silent",
          "DEWALT DXAEPI140 Inverter",
          "Fan-free with auto shut-off."
        ],
        [
          "Vehicle socket, two AC outlets",
          "BESTEK 300W Inverter",
          "300W with 40A fuse."
        ],
        [
          "Vehicle socket, smallest",
          "PiSFAU 200W Inverter",
          "8.5 oz with four USB ports."
        ],
        [
          "No vehicle, DEWALT 20V packs",
          "Kzreect Tool-Battery Inverter",
          "Runs on a compatible tool battery."
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
          "$10 to $30",
          "PiSFAU 200W Inverter or BESTEK 300W Inverter"
        ],
        [
          "$30 to $60",
          "DEWALT DXAEPI140 Inverter or Kzreect Tool-Battery Inverter"
        ]
      ]
    }
  },
  {
    "subheading": "Vehicle Socket vs Tool Battery",
    "cards": [
      {
        "label": "Vehicle socket",
        "text": "Plug-in inverters draw from the car and need no battery pack. The DEWALT DXAEPI140 Inverter, BESTEK 300W Inverter and PiSFAU 200W Inverter work this way."
      },
      {
        "label": "Tool battery",
        "text": "A tool-battery model uses a battery you carry and works away from the car. The Kzreect Tool-Battery Inverter is built for this."
      }
    ],
    "note": "Most travelers should pick the BESTEK 300W Inverter unless they already own DEWALT 20V packs."
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
          "Lowest price",
          "PiSFAU 200W Inverter"
        ],
        [
          "Low price with more power",
          "BESTEK 300W Inverter"
        ],
        [
          "Mid price, silent",
          "DEWALT DXAEPI140 Inverter"
        ],
        [
          "Mid price, two inverters",
          "Kzreect Tool-Battery Inverter"
        ]
      ]
    }
  },
  {
    "subheading": "Weekend Road Trips Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A light unit with a named shutoff or fuse and USB-C for phones."
      },
      {
        "label": "In this comparison",
        "text": "The DEWALT DXAEPI140 Inverter adds a USB-C port and auto shut-off, and the PiSFAU 200W Inverter packs four USB ports."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the DEWALT DXAEPI140 Inverter if you want silent operation and an install kit."
      },
      {
        "label": "Save if",
        "text": "Save with the PiSFAU 200W Inverter if you only need compact device charging."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Real output versus label",
    "explanation": "A portable inverter's label is a ceiling. A vehicle socket is typically fused around 10 to 15 amps, which means about 120 to 180 watts in practice. Plan for the lower figure when choosing."
  },
  {
    "criterion": "Power source",
    "explanation": "A plug-in inverter needs a running vehicle or a 12V port. A tool-battery inverter uses a battery pack you own. Check which batteries you have before buying."
  },
  {
    "criterion": "Size and weight",
    "explanation": "Phone-sized inverters fit a glove box, and heavier units need space. Listed weights range from 0.68 lb to a few ounces more. Check dimensions and weight."
  },
  {
    "criterion": "Ports and charging speed",
    "explanation": "USB-C PD at 25W to 30W can charge phones and some laptops fast. USB-A at 15W to 18W is slower. Look at the port wattage."
  },
  {
    "criterion": "Battery drain and protections",
    "explanation": "Inverters drain batteries, so a low-voltage shut-off helps. Look for overload, overheat and short-circuit protection. Do not use portable inverters for heaters."
  }
];

export const faq = [
  {
    "q": "Can a portable inverter run a laptop?",
    "a": "Yes, if the label wattage and vehicle socket cover the charger. The BESTEK 300W Inverter and DEWALT DXAEPI140 Inverter fit most laptops. Keep the load small."
  },
  {
    "q": "What is the biggest mistake?",
    "a": "Treating a small inverter as a power station. Heaters and hair dryers are beyond them. Check the wattage first."
  },
  {
    "q": "Is the Kzreect worth it?",
    "a": "Only if you own compatible DEWALT 20V packs. The battery is not included. The vehicle-socket models cost less per use."
  },
  {
    "q": "How do I use a tool-battery inverter?",
    "a": "Slide the battery in, check the compatibility list, and plug the device in. Keep it ventilated. Follow the Kzreect Tool-Battery Inverter instructions."
  },
  {
    "q": "Can an inverter drain my car battery?",
    "a": "Yes, with the engine off. Unplug it when not in use. The DEWALT DXAEPI140 Inverter lists auto shut-off to help."
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
