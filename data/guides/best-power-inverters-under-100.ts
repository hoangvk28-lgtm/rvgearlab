export const guideSlug = "best-power-inverters-under-100";
export const guideTitle = "6 Best Power Inverters Under 100 in 2026";
export const metaTitle = "Best Power Inverters Under 100 in 2026";
export const metaDescription = "Best power inverters under $100: six car inverters from 100W to 1000W compared on pure sine output, USB-C power and what the extra $25 over $75 buys.";
export const mainKeyword = "best power inverters under 100";
export const introParagraphs = [
  "Moving the cap from $75 to $100 mostly buys one thing: either a clean pure sine wave at 300W or a 1000W unit with a USB-C port. Below that, the budget picks cover phones and laptops. All six run from a 12V source and fit a car or a van.",
  "The list is ordered by how well each pick spends its price, with the pure sine 300W first for most campers. The 1000W model shows where the money starts to stretch, and the 100W model shows where the corners are cut."
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
    "id": "best-power-inverters-under-100-1",
    "rank": 1,
    "badge": "Best Value Under $100",
    "name": "BESTEK Pure Sine Wave Power Inverter",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412rMoe7qxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07KQ4Q2L5?tag=rvgearlab-20",
    "description": "The BESTEK delivers 300W continuous and 700W peak as pure sine wave, with 2 AC outlets and 2 USB ports at up to 2.4A each. It accepts 11 to 17V, so it suits newer vehicles, and it has a 40A fuse and an 18 month warranty.\n\nAt about $39 it costs a little more than the Goodway and less than the 1000W model. It is the only pick here that combines pure sine with a warranty, which the modified sine units cannot offer.\n\nIt suits campers who plug in a laptop, camera batteries and a small fan. It is small enough to sit in a glove box.",
    "specs": [
      "300W pure sine, 700W peak",
      "2 AC outlets, 2 USB ports",
      "11-17V input, 40A fuse"
    ],
    "pros": [
      "Pure sine for laptops and cameras",
      "Works with newer vehicle voltage",
      "18 month warranty",
      "Glove-box size"
    ],
    "cons": [
      "300W limits larger appliances",
      "No USB-C port"
    ],
    "bestFor": "Laptops and camera gear",
    "take": "Clean 300W power at a mid-budget price.",
    "catch": "Three hundred watts will not run a blender."
  },
  {
    "id": "best-power-inverters-under-100-2",
    "rank": 2,
    "badge": "Best Most Power",
    "name": "1000W Power Inverter 12V DC to 110V/120V AC Car Converter for Vehicles",
    "price": "$56.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ctUZeiwqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQY798SV?tag=rvgearlab-20",
    "description": "The Dual-AC 1000W delivers 1000W continuous and 2000W peak across dual AC sockets, 36W Type-C and a 5V/3A USB-A port. An LCD shows input and output voltage, battery state and protection codes.\n\nAt about $73 it gives three times the watts of the BESTEK 300W and has the fastest USB-C here. It does not name its waveform, so it is a safer pick for tools and lights than for delicate electronics.\n\nIt suits a van or truck camper that runs a small appliance from the battery. Use thick cables and keep the engine on.",
    "specs": [
      "1000W continuous, 2000W peak",
      "36W USB-C, 5V/3A USB",
      "LCD with protection codes"
    ],
    "pros": [
      "Most watts for the price",
      "36W USB-C charges laptops",
      "LCD shows protection codes",
      "Six safety protections"
    ],
    "cons": [
      "Only two AC outlets",
      "Waveform is not named"
    ],
    "bestFor": "Appliances from the battery",
    "take": "The most power you can get for under $100.",
    "catch": "Wire it to a healthy battery with the engine on."
  },
  {
    "id": "best-power-inverters-under-100-3",
    "rank": 3,
    "badge": "Best Battery-Pack Pick",
    "name": "EtnalSolar 250W Power Inverter Compatible with DeWALT 20V Battery Converter",
    "price": "$26.63",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rMujvRW4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H7VZLVBQ?tag=rvgearlab-20",
    "description": "The Etnal runs from a DeWalt 18V or 20V pack and provides 250W continuous and 500W peak. It weighs 0.75 lb, measures 4.49 by 2.83 by 3.74 inches and includes a 400 lumen work light with three brightness levels.\n\nAt about $27 it is the only pick that works with the engine off, so it removes the dead-battery worry the plug-in units carry. The Goodway beats it on continuous watts, while this one wins on portability.\n\nIt suits anyone with spare DeWalt packs who wants quiet AC power at a campsite. Add a second pack for longer evenings.",
    "specs": [
      "250W continuous, 500W peak",
      "DeWalt 18V/20V input",
      "400 lumen work light"
    ],
    "pros": [
      "Runs with the car off",
      "Weighs only 0.75 lb",
      "Work light built in",
      "Compact pocket size"
    ],
    "cons": [
      "Needs a DeWalt pack",
      "Runtime depends on pack size"
    ],
    "bestFor": "DeWalt battery owners",
    "take": "Portable AC power from a tool battery.",
    "catch": "No battery or charger is included."
  },
  {
    "id": "best-power-inverters-under-100-4",
    "rank": 4,
    "badge": "Best Metal Body",
    "name": "Goodway Power Compact and Lightweight Modified sine Wave Power Inverter DC12V to AC110-120V 60Hz with Rated Ou",
    "price": "$22.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JQSZsN9BL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G884FFXZ?tag=rvgearlab-20",
    "description": "Goodway rates 400W continuous and 800W surge from an anodized aluminium case with metal end plates for cooling. It has one AC socket, a 2.4A USB-A port and an 18W USB-C port, with a 10 to 15.5V input range.\n\nAt about $23 it costs less than the Etnal and offers more continuous watts from a single AC outlet. It is the simple budget option when the Dual-AC 1000W is more than you need.\n\nIt suits a car that needs one reliable AC plug for a laptop. The metal case handles longer loads.",
    "specs": [
      "400W continuous, 800W surge",
      "One AC, USB-A and 18W USB-C",
      "Anodized aluminium case"
    ],
    "pros": [
      "Metal body sheds heat",
      "18W USB-C port",
      "400W for about $23",
      "Wide 10 to 15.5V input"
    ],
    "cons": [
      "One AC outlet only",
      "Modified sine wave"
    ],
    "bestFor": "A tight budget with one outlet",
    "take": "A metal-bodied 400W unit for the lowest price.",
    "catch": "Only one AC socket, so two devices need a strip."
  },
  {
    "id": "best-power-inverters-under-100-5",
    "rank": 5,
    "badge": "Best Everyday Charger",
    "name": "Ampeak 150W Car Power Inverter",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41uhBR9EnzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CFQMXVMV?tag=rvgearlab-20",
    "description": "Ampeak's 150W unit offers 300W peak, one AC outlet and two 2.4A USB ports in a 2.8 by 1.5 by 5.4 inch body. It lists 11 protection layers, 88 percent conversion efficiency and a quiet cooling fan.\n\nAt about $20 it costs less than the Goodway and stays within what a lighter socket can supply, so it avoids the clip-on cables. It gives up the extra watts of the pricier picks.\n\nIt suits a commuter or camper who only charges phones and a laptop. It also fits a cup holder.",
    "specs": [
      "150W, 300W peak",
      "One AC, two 2.4A USB",
      "88 percent efficiency"
    ],
    "pros": [
      "Stays within the lighter socket limit",
      "Quiet cooling fan",
      "Slim body fits a cup holder",
      "Eleven protection layers"
    ],
    "cons": [
      "Only 150W",
      "One AC outlet"
    ],
    "bestFor": "Laptop and phone charging",
    "take": "A small plug-in unit sized for the lighter socket.",
    "catch": "Skip it for anything with a motor."
  },
  {
    "id": "best-power-inverters-under-100-6",
    "rank": 6,
    "badge": "Best Cheapest Pick",
    "name": "Ampeak 100W Car Power Inverter",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OCW3vyKkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B072LM88F9?tag=rvgearlab-20",
    "description": "Ampeak's 100W unit has one AC outlet and two 2.4A USB ports with a 200W peak. It features 11 layers of protection, a pivoting head for awkward sockets and faster USB charging than older 2.1A ports.\n\nAt about $18 it is the lowest-priced pick and gives up 50W against the Ampeak 150W. It is a charger-class unit, not a power source.\n\nIt suits a spare in the glove box for laptop and phone charging. Do not plan on running anything bigger.",
    "specs": [
      "100W, 200W peak",
      "One AC, two 2.4A USB",
      "Pivoting head"
    ],
    "pros": [
      "Lowest price here",
      "Pivoting head fits tight sockets",
      "Fast 2.4A USB ports",
      "Eleven protection layers"
    ],
    "cons": [
      "Only 100W",
      "Barely covers a larger laptop"
    ],
    "bestFor": "A spare charger",
    "take": "The cheapest inverter that handles a laptop brick.",
    "catch": "A big laptop adapter may exceed 100W."
  }
];

export const howWeEvaluated = [
  {
    "title": "Waveform",
    "description": "The pure sine BESTEK was separated from the modified sine units and the unnamed-wave 1000W."
  },
  {
    "title": "Continuous watts",
    "description": "Continuous output from 100W to 1000W was weighed against what each unit costs."
  },
  {
    "title": "USB-C power",
    "description": "The 36W and 18W USB-C ports were compared with plain USB-A charging."
  },
  {
    "title": "Connection",
    "description": "Plug-in, clip-on and tool-battery inputs were compared for real camping use."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is at or under $100, and the top pick gives clean power for the money."
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
    "subheading": "By what you run",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Laptop and camera batteries",
          "BESTEK 300W Pure Sine",
          "Pure sine, 300W."
        ],
        [
          "Small appliance or tool",
          "Dual-AC 1000W",
          "1000W continuous."
        ],
        [
          "Phone and laptop only, low cost",
          "Ampeak 150W",
          "Sized for the lighter socket."
        ],
        [
          "One AC plug, metal case",
          "Goodway 400W",
          "400W, aluminium body."
        ],
        [
          "Tool-battery owners",
          "Etnal 250W DeWalt",
          "Runs without the car."
        ],
        [
          "Glove-box spare",
          "Ampeak 100W",
          "About $18."
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
          "Ampeak 100W or Ampeak 150W"
        ],
        [
          "$20 to $30",
          "Goodway 400W or Etnal 250W DeWalt"
        ],
        [
          "$30 to $80",
          "BESTEK 300W Pure Sine or Dual-AC 1000W"
        ]
      ]
    }
  },
  {
    "subheading": "Pure sine vs modified sine",
    "cards": [
      {
        "label": "Pure sine",
        "text": "The BESTEK 300W Pure Sine runs electronics more cleanly and carries a warranty, at a higher price per watt."
      },
      {
        "label": "Modified sine",
        "text": "The Goodway 400W, Ampeak 150W, Ampeak 100W and Etnal 250W DeWalt are cheaper for simple loads, and the Dual-AC 1000W does not name its waveform."
      }
    ],
    "note": "Take the BESTEK 300W Pure Sine unless you need more than 300 watts."
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
          "About $18",
          "Ampeak 100W"
        ],
        [
          "About $20",
          "Ampeak 150W"
        ],
        [
          "About $23",
          "Goodway 400W"
        ],
        [
          "About $27",
          "Etnal 250W DeWalt"
        ],
        [
          "About $39",
          "BESTEK 300W Pure Sine"
        ],
        [
          "About $73",
          "Dual-AC 1000W"
        ]
      ]
    }
  },
  {
    "subheading": "For a laptop and phones on road trips specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a pure sine or USB-C output at 30W or more, and enough watts for your laptop adapter."
      },
      {
        "label": "In this comparison",
        "text": "The BESTEK 300W Pure Sine suits most laptops because of its clean wave and 2.4A USB ports. The Dual-AC 1000W adds a 36W USB-C port for charging a laptop without a brick."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want clean power or an appliance-class inverter: the BESTEK 300W Pure Sine for laptops and the Dual-AC 1000W for tools."
      },
      {
        "label": "Save if",
        "text": "Save if you only charge phones: the Ampeak 100W and Ampeak 150W cost about $20 or less and the Goodway 400W adds spare headroom."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What the extra budget buys",
    "explanation": "Moving from $75 to $100 mostly adds a pure sine option or a 1000W unit. If you only charge devices, the extra money buys little. Decide whether you need clean power or more watts before you spend it, which is where most buyers in this price band find the right fit."
  },
  {
    "criterion": "Continuous vs peak",
    "explanation": "The 1000W unit holds 1000 watts continuously and 2000 watts for a moment, and motor loads can start at two to three times their running watts. Size by continuous watts and leave a margin of about 20 percent. Add up the labels on everything that will run together."
  },
  {
    "criterion": "Pure sine vs modified sine",
    "explanation": "Pure sine suits laptops, camera chargers and small medical devices. Modified sine is cheaper and can make some chargers hum. Check the waveform in the product title, and treat an unnamed waveform as modified and which pick carries a pure sine wave, since a quiet charger is a good sign."
  },
  {
    "criterion": "USB-C power delivery",
    "explanation": "A 36W USB-C port can charge a phone fast and top up a small laptop, while an 18W port is closer to phone speed. USB-A at 2.4A is slow for tablets. Check the wattage printed next to the port before you assume a laptop will charge."
  },
  {
    "criterion": "Input voltage and fuses",
    "explanation": "Newer vehicles can reach 14.5V or more while charging, and an 11 to 17V input range tolerates that. A 40A fuse protects the wiring. Look for both numbers in the specifications, plus any overload and over-temperature protections that are named and in the manual because a missing number is a warning sign."
  },
  {
    "criterion": "Lighter plug vs clamps",
    "explanation": "A lighter socket supplies about 150 watts at most because of its 10 to 15 amp fuse. Anything above that needs clamps on the battery. Check that clamps are in the box before you buy and what gauge the cables are you plan to run."
  }
];

export const faq = [
  {
    "q": "Is 300W pure sine enough for camping?",
    "a": "Yes for a laptop, camera chargers, a phone and a small fan, which together stay under 200 watts. It will not run a blender, a hair dryer or a microwave. Add up your devices first and keep a 20 percent margin running together."
  },
  {
    "q": "What do I need to run a 1000W inverter?",
    "a": "Thick cables, a good battery and the engine running. A 1000W load pulls about 85 amps at 12V, which a lighter socket cannot supply. Use the battery terminals and check that the battery is in good condition and the cables stay cool."
  },
  {
    "q": "Is the Dual-AC 1000W worth over $100 siblings?",
    "a": "Only if you need the watts, because the BESTEK 300W Pure Sine is cleaner and costs far less. The Dual-AC 1000W gives you a 36W USB-C port and enough power for a small blender or a tool. For electronics only, choose the BESTEK, as long as the load fits."
  },
  {
    "q": "How do I mount an inverter in a van?",
    "a": "Keep it on a flat, ventilated surface away from water and fuel. Leave a few inches of clearance around the fan and use short, thick cables. Mount it where you can reach the switch and keep it dry."
  },
  {
    "q": "Can a tool-battery inverter charge a laptop?",
    "a": "Yes, the Etnal 250W DeWalt delivers 250 watts, enough for a laptop and a phone. Runtime depends on the size of the DeWalt pack you attach. Keep a second pack charged for a long evening before heading out."
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
