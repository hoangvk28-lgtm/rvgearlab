export const guideSlug = "best-power-inverters-under-75";
export const guideTitle = "6 Best Power Inverters Under 75 in 2026";
export const metaTitle = "Best Power Inverters Under 75 in 2026";
export const metaDescription = "Best power inverters under $75: six car and battery-pack inverters from 75W to 750W, compared on continuous watts, outlets and USB ports for camping.";
export const mainKeyword = "best power inverters under 75";
export const introParagraphs = [
  "A budget under $75 splits into two tiers. At the bottom, 75W plug-in units only top up phones and a small laptop, while the top of the range buys 400W to 750W with battery clamps. All six picks run from a 12V car socket or, in one case, a power-tool battery.",
  "I ranked them by how much usable power each one adds per dollar, then by outlets and protection. The notes explain where the cheapest units stop being useful and why the 750W model is the one to stretch for."
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
    "id": "best-power-inverters-under-75-1",
    "rank": 1,
    "badge": "Best Value Under $75",
    "name": "Ampeak 750W Power Inverter",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51HfwPULhhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07PWDR869?tag=rvgearlab-20",
    "description": "The Ampeak delivers 750W continuous and 1500W peak through 2 AC outlets and 2 USB ports. It ships with a battery clip cable for heavy loads, two replaceable 50A external fuses and a cooling fan that starts at about 122 degrees F.\n\nIt costs about $60, which is less than the BESTEK 500W Classic and buys 250W more. The Pro Chaser 400W is cheaper, and this one is the only pick that can run a small blender or a power tool from the car battery.\n\nIt suits campers who want one inverter for a laptop on the road and a tool or coffee maker at the campsite. Clip it to the battery with the engine running for anything past phone-charging loads.",
    "specs": [
      "750W continuous, 1500W peak",
      "2 AC outlets, 2 USB ports",
      "Clip cable, two 50A fuses"
    ],
    "pros": [
      "Most continuous watts in this guide",
      "Replaceable external fuses",
      "Fan runs only when needed",
      "Clip cable included for big loads"
    ],
    "cons": [
      "Modified sine wave output",
      "Needs battery clips above lighter-socket limits"
    ],
    "bestFor": "Tools and bigger loads",
    "take": "The only pick here that can run a real appliance. Clip it to the battery, not the lighter socket.",
    "catch": "Lighter sockets cap near 150W, so use the clips for anything bigger."
  },
  {
    "id": "best-power-inverters-under-75-2",
    "rank": 2,
    "badge": "Best Pure Sine",
    "name": "BESTEK Pure Sine Wave 500W Power Inverter 12V DC to 110V AC Car Adapter",
    "price": "$58.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51iaQy6oWBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082MDRC64?tag=rvgearlab-20",
    "description": "The BESTEK 500W Classic is a pure sine wave inverter with two AC outlets and dual 4.2A USB ports. It plugs into the lighter socket for small loads and clamps to the battery for the full 500 watts.\n\nIt costs about $65, close to the cap and more than the Ampeak 750W, and it gives 250W less. In return it produces the cleaner waveform that laptops, camera chargers and small medical devices prefer.\n\nIt suits anyone whose gear is sensitive to power quality. Pick it over the Ampeak when waveform matters more than raw watts.",
    "specs": [
      "500W pure sine wave",
      "Dual AC, dual 4.2A USB",
      "Plug or battery clamps"
    ],
    "pros": [
      "Pure sine suits sensitive electronics",
      "Clamps unlock the full 500W",
      "Under-voltage protection",
      "Spring-loaded 12V plug"
    ],
    "cons": [
      "Most expensive pick here",
      "No USB-C port"
    ],
    "bestFor": "Laptops and sensitive gear",
    "take": "Clean power for electronics, at the top of this budget.",
    "catch": "Pure sine costs more per watt than the Ampeak."
  },
  {
    "id": "best-power-inverters-under-75-3",
    "rank": 3,
    "badge": "Best Plug-In Mid Power",
    "name": "Pro Chaser 400W Power Inverters for Vehicles DC 12v to AC 110v Car Inverter",
    "price": "$34.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41MNF0L0feL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CPDGXT5H?tag=rvgearlab-20",
    "description": "The Pro Chaser gives 400W continuous and 800W peak through two AC sockets and two 3.1A USB ports. It is phone-sized, has a 30 inch cord and turns its fan on at about 113 degrees F.\n\nAt about $35 it costs roughly half the Ampeak 750W and delivers just over half the watts. It keeps a simple plug-in shape that the Etnal and the 75W units cannot match for outlet count.\n\nIt suits a car or van where a laptop and a phone share the dash. Stay under about 150W through the lighter plug.",
    "specs": [
      "400W continuous, 800W peak",
      "Two AC, two 3.1A USB",
      "30 inch cord"
    ],
    "pros": [
      "Two AC sockets in a small body",
      "Fast USB ports",
      "Fan starts at a set temperature",
      "About half the price of the Ampeak"
    ],
    "cons": [
      "Modified sine wave",
      "Lighter socket limits real output"
    ],
    "bestFor": "Dash charging with two AC plugs",
    "take": "A compact middle step between the 75W units and the Ampeak.",
    "catch": "The lighter socket limits output well below 400W."
  },
  {
    "id": "best-power-inverters-under-75-4",
    "rank": 4,
    "badge": "Best Battery-Pack Pick",
    "name": "EtnalSolar 250W Power Inverter Compatible with DeWALT 20V Battery Converter",
    "price": "$26.63",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rMujvRW4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H7VZLVBQ?tag=rvgearlab-20",
    "description": "The Etnal runs on a DeWalt 18V or 20V lithium battery and delivers 250W continuous and 500W peak. It weighs 0.75 lb, measures 4.49 by 2.83 by 3.74 inches and has a 400 lumen dimmable work light.\n\nAt about $27 it is the only pick here that works with the car off, so it avoids the lighter socket and the dead-battery risk the Pro Chaser carries. It needs a DeWalt pack that you already own because none is included.\n\nIt suits campers and contractors who already carry DeWalt batteries. A fresh pack gives quiet AC power at a campsite without starting an engine.",
    "specs": [
      "250W continuous, 500W peak",
      "DeWalt 18V/20V battery input",
      "400 lumen work light"
    ],
    "pros": [
      "Works with the car off",
      "Weighs only 0.75 lb",
      "Built-in work light",
      "Pocket-sized body"
    ],
    "cons": [
      "Needs a DeWalt battery",
      "Runtime depends on the pack size"
    ],
    "bestFor": "DeWalt battery owners",
    "take": "Silent AC power from a tool battery, no vehicle needed.",
    "catch": "Battery and charger are not included."
  },
  {
    "id": "best-power-inverters-under-75-5",
    "rank": 5,
    "badge": "Best Tiny Charger",
    "name": "BESTEK 75W Power Inverter DC 12V to 110V AC Car Inverter Power Converter",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41uswU0glJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B003Q54V88?tag=rvgearlab-20",
    "description": "The BESTEK 75W has one AC outlet and two USB ports at 3.1A total. It outputs 75W continuous and 200W peak, and its head pivots to fit awkward dash sockets.\n\nAt about $20 it costs a third of the Pro Chaser and handles phones, a camera charger and a small laptop brick. It has the fan and shutdown protections that the larger units use.\n\nIt suits a car that already has USB charging and wants one wall-style plug now and then. Keep it to charger duty.",
    "specs": [
      "75W continuous, 200W peak",
      "One AC outlet, two USB",
      "Pivoting head"
    ],
    "pros": [
      "Pivoting head fits tight sockets",
      "Cooling fan and auto shutdown",
      "Low price from a known brand",
      "Two USB ports with one AC"
    ],
    "cons": [
      "Only one AC outlet",
      "75W is charger-class only"
    ],
    "bestFor": "A spare car outlet",
    "take": "A tiny charger-class unit for a laptop brick and a phone.",
    "catch": "Seventy-five watts will not run a hair dryer or a kettle."
  },
  {
    "id": "best-power-inverters-under-75-6",
    "rank": 6,
    "badge": "Best Lowest Price",
    "name": "Amazon Basics 75W Portable Car Power Inverter",
    "price": "$16.66",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41W4R0wFsjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B5KGRWRT?tag=rvgearlab-20",
    "description": "The Amazon Basics inverter offers one AC outlet and one USB port at up to 2.1A, rated at 75 watts. It protects against high voltage, low voltage, a drained battery, short circuits and overheating.\n\nAt about $17 it is the cheapest pick, and it matches the BESTEK 75W on watts with one fewer USB port. It is the plain option when all you need is a laptop charger in the car.\n\nIt suits an emergency kit or a glove box spare. Treat it as a charger adapter, not a power source.",
    "specs": [
      "75W, one AC outlet",
      "One 2.1A USB port",
      "Five protection types"
    ],
    "pros": [
      "Lowest price in the guide",
      "Full set of electrical protections",
      "Simple plug-in design",
      "Fits an emergency kit"
    ],
    "cons": [
      "One USB port only",
      "Only 75W of AC"
    ],
    "bestFor": "Emergency kit spare",
    "take": "The cheapest way to add one wall outlet to a car.",
    "catch": "A single 2.1A USB port is slow for a tablet."
  }
];

export const howWeEvaluated = [
  {
    "title": "Continuous watts",
    "description": "Rated continuous output from 75W to 750W was set against the price of each pick."
  },
  {
    "title": "Waveform",
    "description": "The pure sine unit was separated from the modified sine units because sensitive gear cares."
  },
  {
    "title": "Connection",
    "description": "Lighter plugs, battery clips and tool-battery input were compared for real-world use."
  },
  {
    "title": "Outlets and ports",
    "description": "AC sockets and USB ports were counted to see how many devices run at once."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick sits at or under $75, and the top pick offers the most usable power for the money."
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
    "subheading": "By what you plug in",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Phone and laptop brick only",
          "BESTEK 75W",
          "75W is enough and costs about $20."
        ],
        [
          "A cheap spare for a glove box",
          "Amazon Basics 75W",
          "Lowest price with full protections."
        ],
        [
          "Laptop plus phone, two plugs",
          "Pro Chaser 400W",
          "Two AC sockets and two USB ports."
        ],
        [
          "Power tool battery, car off",
          "Etnal 250W DeWalt",
          "Runs from a DeWalt pack."
        ],
        [
          "Sensitive electronics",
          "BESTEK 500W Classic",
          "Pure sine wave output."
        ],
        [
          "Blender or power tool",
          "Ampeak 750W",
          "750W continuous with clips."
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
          "$10 to $20",
          "Amazon Basics 75W or BESTEK 75W"
        ],
        [
          "$20 to $40",
          "Etnal 250W DeWalt or Pro Chaser 400W"
        ],
        [
          "$50 to $70",
          "Ampeak 750W or BESTEK 500W Classic"
        ]
      ]
    }
  },
  {
    "subheading": "Plug-in vs clip-on",
    "cards": [
      {
        "label": "Plug-in",
        "text": "The BESTEK 75W, Amazon Basics 75W and Pro Chaser 400W run from the lighter socket and are limited to about 150W in practice."
      },
      {
        "label": "Clip-on",
        "text": "The Ampeak 750W and BESTEK 500W Classic clamp to the battery and deliver their full rating, at the cost of opening the hood."
      }
    ],
    "note": "Most buyers get the most from the Ampeak 750W because it covers both styles."
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
          "About $17",
          "Amazon Basics 75W"
        ],
        [
          "About $20",
          "BESTEK 75W"
        ],
        [
          "About $27",
          "Etnal 250W DeWalt"
        ],
        [
          "About $35",
          "Pro Chaser 400W"
        ],
        [
          "About $60",
          "Ampeak 750W"
        ],
        [
          "About $65",
          "BESTEK 500W Classic"
        ]
      ]
    }
  },
  {
    "subheading": "For a weekend car-camping trip specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for an inverter that handles a laptop and a phone charger, with clips if you want a coffee maker or tool."
      },
      {
        "label": "In this comparison",
        "text": "The Ampeak 750W handles the laptop through the lighter plug and a tool or small appliance through the clips. The Pro Chaser 400W is the lighter-weight alternative if you only need plug-in power."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want clean power for sensitive electronics or appliance power: the BESTEK 500W Classic gives pure sine, and the Ampeak 750W gives the most watts of any pick here."
      },
      {
        "label": "Save if",
        "text": "Save if you only top up phones and a laptop: the BESTEK 75W and Amazon Basics 75W cover that for under $20, and the Etnal 250W DeWalt is a good extra if you already own the battery."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Lighter socket limit",
    "explanation": "A cigarette lighter socket is fused at 10 to 15 amps, which supports roughly 120 to 180 watts at 12V. A 400W or 750W inverter therefore needs battery clips for anything bigger than a laptop. Check the fuse rating in your vehicle manual before you plug in."
  },
  {
    "criterion": "Continuous vs peak",
    "explanation": "A 750W inverter with a 1500W peak holds 750 watts all day and 1500 watts for a split second. Motors start with two to three times their running watts. Size by continuous watts and leave a margin of about 20 percent, so a 600W blender needs a 750W unit rather than a 500W one."
  },
  {
    "criterion": "Pure sine vs modified sine",
    "explanation": "Pure sine matches household power and suits laptops, camera chargers and small medical devices. Modified sine is cheaper and can make some chargers buzz or run hot. The waveform is usually named in the product title, so look there first because the waveform is rarely printed on the box."
  },
  {
    "criterion": "Idle draw and protection",
    "explanation": "An inverter draws a fraction of an amp even with nothing plugged in, which can flatten a car battery over several days. Look for a power switch, a low-voltage shutdown and replaceable fuses. Unplug the unit when you park, and a unit with a hardware switch is easier to live with."
  },
  {
    "criterion": "Battery clips vs plug",
    "explanation": "Clips connect straight to the battery terminals and carry far more current than a lighter plug. Use short, thick cables and keep the engine running for loads above 300 watts. Check that the clip cable is included before ordering and has a fuse in line with the cable."
  },
  {
    "criterion": "Match watts to what you run",
    "explanation": "Add up the wattage printed on each device label and pick an inverter with a 20 percent margin. A laptop brick is 60 to 100 watts, a small blender about 300 and a power tool 600 or more. Under $75 only the Ampeak 750W reaches the last group."
  }
];

export const faq = [
  {
    "q": "Can a 75W inverter run a laptop?",
    "a": "Yes, because most laptop adapters draw 45 to 100 watts. A 75W unit like the BESTEK 75W or Amazon Basics 75W is fine for a thin laptop but marginal for a gaming one. Read the wattage on your adapter label to be sure."
  },
  {
    "q": "Will an inverter drain my car battery?",
    "a": "It can. An idle inverter still draws a small current, and a load of 300 watts pulls about 25 amps at 12V. Run the engine for heavy loads, switch the inverter off when parked and unplug it overnight for the whole trip."
  },
  {
    "q": "Is the 750W Ampeak worth more than the 400W Pro Chaser?",
    "a": "Choose it if you want to run a blender, a drill charger or a heater fan, since the Pro Chaser 400W stops at smaller appliances. The Ampeak also includes a battery clip cable that the lighter-plug Pro Chaser cannot match. If you only charge devices, the Pro Chaser costs about half as much."
  },
  {
    "q": "How do I connect clips safely?",
    "a": "Connect the red clip to the positive terminal and the black clip to the negative, with the inverter switched off. Keep the cables short and away from moving parts. Disconnect the clips before jump-starting or working under the hood."
  },
  {
    "q": "Does a DeWalt-battery inverter replace a car inverter?",
    "a": "No, it complements one. The Etnal 250W DeWalt runs with the car off but depends on a charged DeWalt pack, so runtime is limited. Keep a spare pack charged for longer trips or buy a bigger one for overnight use."
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
