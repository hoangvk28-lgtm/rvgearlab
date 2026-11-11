export const guideSlug = "best-power-inverters-under-150";
export const guideTitle = "6 Best Power Inverters Under 150 in 2026";
export const metaTitle = "Best Power Inverters Under $150 in 2026";
export const metaDescription = "Six inverters under $150 that show where pure sine wave becomes affordable, which devices each waveform runs, and where 3000W units make sense.";
export const mainKeyword = "best power inverters under 150";
export const introParagraphs = [
  "Pure sine used to be a feature of expensive inverters, and the $150 line is where that stops being true. Here you can buy a 500W clean-output unit for about $65 and a 1000W one for about $120, while the same budget also buys a 3000W modified sine unit for $140. That contrast is the heart of this guide: more money can mean more watts or a better waveform, and the right answer depends on which of your devices care about the difference. Knowing which side of that line your gear falls on saves real money.",
  "What changes is the list of devices that will run properly. Modified sine output is a blocky approximation that suits work lamps, simple chargers and heater coils. Pure sine output matches utility power, so it runs sensitive electronics, motors and compressors, and some microwaves, the way they were designed to run. A CPAP, a laptop, a small fridge compressor or a fan motor belongs on the clean side, while a work light or a drill charger runs fine on the cheaper kind. Skipping that distinction is how buyers end up with a buzzing charger or a stalled compressor.",
  "Six picks cover the range: a 150W power strip at about $44, two pure sine units at about $65 and $120, a 750W mid-price plug-in, and two 3000W units that need a serious battery bank. We ranked them by how much of your gear each one lets you run correctly, then by capacity, then by price. Treat the 3000W models as the choice for appliances and the pure sine pair as the choice for electronics, since no unit in this price range does both. If you cannot decide, begin with your device list rather than the price tag, because the list settles the question."
];
export const lastUpdated = "2026-11-11";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/51J-KtOqqzL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-power-inverters-under-150-1",
    "rank": 1,
    "badge": "Best Value Under $150",
    "name": "3000W Power Inverter Car/Home 12V DC to 110V/120V AC Car Converter",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51J-KtOqqzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C8HSTD6N?tag=rvgearlab-20",
    "description": "The 3000W Power Inverter converts 12V DC to 120V AC at 3,000W continuous and up to 6,000W peak. It has two 20A AC outlets, a 3.4A USB port, a 30W Type-C port and a 200 ft wireless remote, with ten built-in protections and thick pure copper battery cables in the box. At about $150 it uses the entire budget and delivers by far the largest capacity in this guide.\n\nIt sits about $10 above the Cantonape 3000W and matches its capacity, adding a Type-C fast-charge port and the cables you would otherwise buy separately. Against the BELTTT 1000Watt, it brings three times the continuous output, which is the difference between a laptop and CPAP setup and a microwave or coffee maker running from the battery bank.\n\nIt is best for RV and van owners with a real 12V battery bank who want appliance-class power on a budget. The wireless remote lets you switch it off from a camp chair, and the copper cables in the box carry a first installation through to the end. Buyers who expect to run a microwave or coffee maker should start here.",
    "specs": [
      "3,000W continuous, 6,000W peak output",
      "Two 20A outlets, 30W Type-C port",
      "200 ft wireless remote, ten protections"
    ],
    "pros": [
      "Runs high-draw appliances from a battery bank",
      "Ten layers of protection guard the load",
      "Thick pure copper cables come in the box",
      "200 ft remote switches it off from camp"
    ],
    "cons": [
      "Needs a large battery bank to run well",
      "Too big for a car lighter socket"
    ],
    "bestFor": "RV and van battery banks"
  },
  {
    "id": "best-power-inverters-under-150-2",
    "rank": 2,
    "badge": "Best Four-Outlet Option",
    "name": "Cantonape 3000W Power Inverter 12V to 110V/120V DC to AC with LCD Display",
    "price": "$139.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411FqrNufmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DLKP7BNY?tag=rvgearlab-20",
    "description": "The Cantonape 3000W is a 3,000W continuous, 6,000W surge inverter with four AC outlets, four USB ports, an LCD screen and a remote controller. It has six protections and an aluminum body that spreads heat. At about $140 it gives the most sockets in the guide, so several devices can be plugged in without a power strip.\n\nIt costs about $10 less than the 3000W Power Inverter and trades the Type-C port and copper cables for two extra AC outlets. Compared with the BELTTT 1000Watt, it offers triple the capacity and a lower price per watt, which is how the budget stretches to appliance-class power. The waveform is modified sine, so it targets simple loads.\n\nIt is best for campers who run tools, lights and chargers at the same time from a big battery. The remote lets you put the unit beside the bank and keep the screen at camp. It fits a family site where the table needs a lamp, a charger bank and a small fan going together.",
    "specs": [
      "3,000W continuous, 6,000W surge output",
      "Four AC outlets and four USB ports",
      "LCD screen, remote, aluminum body"
    ],
    "pros": [
      "Four AC outlets and four USB ports",
      "Remote keeps the display at camp",
      "Six protections and a heat-spreading aluminum body",
      "LCD shows voltage and load live"
    ],
    "cons": [
      "Modified sine waveform suits basic loads",
      "Needs heavy cables and a large battery bank"
    ],
    "bestFor": "Multi-device camp power"
  },
  {
    "id": "best-power-inverters-under-150-3",
    "rank": 3,
    "badge": "Best Pure Sine Pick",
    "name": "BELTTT 1000Watt Pure Sine Wave Inverter 12V DC to 120V AC",
    "price": "$101.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41vWnqM2vNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DCJHY3TH?tag=rvgearlab-20",
    "description": "The BELTTT 1000Watt is a pure sine wave inverter rated at 1,000W continuous and 2,000W peak, with conversion efficiency above 90 percent. It offers dual AC outlets, a 2.1A USB port, a smart LCD and 3 ft thicker cables supplied with an installation tool. At about $120 it is where clean output first appears at a capacity that can run a real appliance.\n\nIt costs around $30 under the 3000W Power Inverter and about $55 above the BESTEK Pure Sine Wave 500W. The extra money buys a clean 1,000W against that model's 500W, enough for a small fridge or a power tool charger on a deep-cycle battery. The smooth waveform lets inductive loads such as fans run with less wear than they would on the Cantonape 3000W.\n\nIt is best for campers with a CPAP, a laptop, a fridge or tool chargers that need clean power. The LCD shows input and output voltage, so a sagging battery is visible before it trips a shutdown. For an RV owner moving beyond a plug-in charger, it is the natural first pure sine purchase, and the cables in the box mean the install starts the same day.",
    "specs": [
      "1,000W continuous, 2,000W peak pure sine",
      "Efficiency above 90 percent claimed",
      "Dual AC outlets, LCD, 3 ft cables"
    ],
    "pros": [
      "Pure sine output suits sensitive electronics",
      "Efficiency above 90 percent saves battery energy",
      "LCD shows input and output voltage",
      "Heavy cables and an install tool included"
    ],
    "cons": [
      "1,000W continuous is modest for appliances",
      "Costs more per watt than the 3000W units"
    ],
    "bestFor": "CPAPs and laptops"
  },
  {
    "id": "best-power-inverters-under-150-4",
    "rank": 4,
    "badge": "Best Compact Pure Sine",
    "name": "BESTEK Pure Sine Wave 500W Power Inverter 12V DC to 110V AC Car Adapter",
    "price": "$58.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51iaQy6oWBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082MDRC64?tag=rvgearlab-20",
    "description": "The BESTEK Pure Sine Wave 500W offers two outlets plus dual USB charging, and it connects through the cigarette lighter plug or direct battery clips. It carries two 40 amp external fuses, thermal protection and a cooling fan. At about $65 it is the cheapest route to pure sine in this guide, and the cleanest on-ramp for car campers.\n\nIt costs around $55 less than the BELTTT 1000Watt and takes half the capacity, which is the reason a sensitive-electronics buyer can reach clean power for under $70. Against the TWING Car 1000W at about $69, it swaps a modified sine waveform for a pure one and gives up display and USB speed. The waveform is the point of paying for it.\n\nIt is best for car campers who want clean power for laptops and camera chargers, and who might clamp the unit to a battery for a bigger load. The dual connection style means the same inverter works from the dash and from the bank. It suits a first-time buyer comparing a basic adapter with something that runs better gear.",
    "specs": [
      "500W pure sine wave output",
      "Plugs into socket or clips to battery",
      "Two 40 amp external fuses, thermal cutoff"
    ],
    "pros": [
      "Pure sine output for sensitive electronics",
      "Plug or direct clip connection in one unit",
      "Replaceable external fuses make repairs quick and cheap",
      "Thermal protection and a cooling fan"
    ],
    "cons": [
      "500W is a ceiling for light loads",
      "A poor match for large appliances or heaters"
    ],
    "bestFor": "Car camping electronics"
  },
  {
    "id": "best-power-inverters-under-150-5",
    "rank": 5,
    "badge": "Best Mid-Price Plug-In",
    "name": "TWING Car 1000W Inverter 12V DC to 110V AC Power Inverters for Vehicles Portable Vehicle Charger for Trucks",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41kndFhr88L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082V5TC11?tag=rvgearlab-20",
    "description": "The TWING Car 1000W is a modified sine wave inverter with two AC outlets, a QC 3.0 USB port and a 30W PD USB port. It carries a digital display, a cooling fan and a slip fuse, and its page notes 750W continuous output with the larger figure as a peak. At about $69 it is the mid-range plug-in with the best USB charging.\n\nIt costs around $50 under the BELTTT 1000Watt and delivers 750W continuous against that unit's 1,000W. Beside the BESTEK Pure Sine Wave 500W, it brings 250W more capacity and faster USB for roughly the same price, which makes it the better value for loads that do not need clean power. The mechanism is the waveform: cheaper output buys more watts.\n\nIt is best for truckers and campers who want a mid-power plug-in for tools and chargers. Resistive loads such as heaters and lights suit it well, and the PD port charges a laptop without a brick. Choose it when raw capacity and USB speed matter more than waveform quality. A trucker running a work light, a heater and a phone charger gets everything needed from it.",
    "specs": [
      "750W continuous, 1000W peak output",
      "QC 3.0 USB and 30W PD USB-C",
      "Digital display, fan, slip fuse"
    ],
    "pros": [
      "30W PD and QC 3.0 ports charge fast",
      "Digital display shows what the unit is doing",
      "Slip fuse and fan protect the unit",
      "Strong 750W continuous rating for the price"
    ],
    "cons": [
      "Modified sine waveform suits basic loads",
      "Title shows 1000W but continuous is 750W"
    ],
    "bestFor": "Truckers and tools"
  },
  {
    "id": "best-power-inverters-under-150-6",
    "rank": 6,
    "badge": "Best Power Strip Style",
    "name": "PowerDrive PWD150S 150 Watt Power Strip Inverter",
    "price": "$44.27",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41vS3gPO8KL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09ZJQ8CTJ?tag=rvgearlab-20",
    "description": "The PowerDrive PWD150S is a 150W power strip inverter with three 3-prong AC outlets, a 2.4A USB port, a 3.0A USB-C port and a 12V DC socket. It protects against short circuit, overheating and overload, and the strip body keeps cords tidy on a console. At about $44 it is the lowest-priced pick here and the one built like a household power strip.\n\nIt plugs into a vehicle's 12V socket and stays within the socket's circuit rating, which is a clean contrast with the BESTEK Pure Sine Wave 500W that needs clips to reach its rating. Three AC outlets plus a USB-C port let a family share a single plug-in. Compared with the TWING Car 1000W, it trades raw watts for sheer port count.\n\nIt is best for commuters and campers who charge phones, tablets and cameras in the car. Three outlets let everyone plug in at once, and the 12V accessory socket means a tire inflator or other 12V gear still has a place. A family on a long drive will use it more than any bigger unit, because every seat gets a plug and nobody argues over the one outlet.",
    "specs": [
      "150W continuous power strip inverter",
      "Three AC outlets, USB-C and USB-A",
      "Built-in 12V DC accessory socket"
    ],
    "pros": [
      "Three AC outlets in one strip",
      "USB-C and USB-A ports for phones",
      "12V socket keeps small accessories running on the drive",
      "Short-circuit and overheat protection built in"
    ],
    "cons": [
      "150W continuous is small for any appliance",
      "No pure sine wave claim on the page"
    ],
    "bestFor": "Phones and tablets"
  }
];

export const howWeEvaluated = [
  {
    "title": "What each waveform will run",
    "description": "We sorted the six picks by waveform first, because the waveform sets which devices belong on which unit. The two pure sine units cover laptops, CPAP machines and fridge motors, and the modified sine units cover lights, tools and chargers. Where a page makes no pure sine claim, we scored the unit as basic."
  },
  {
    "title": "Capacity per dollar",
    "description": "From 150W at about $44 to 3,000W at $150, we compared watts against price at every rung. The 3000W units deliver far more watts per dollar, yet most of that capacity is useless without a large bank. Based on product specs, we valued capacity a typical camper can really use over a headline figure."
  },
  {
    "title": "Battery-bank demands",
    "description": "At 12V each 1000W of load takes roughly 85 A, so a 3000W unit working hard asks for hundreds of amps, and we judged every pick by whether a normal camper can supply that. We flagged every pick that requires heavy cable and a bank of real size. The 150W strip and the 500W unit scored well for needing neither."
  },
  {
    "title": "Ports and displays",
    "description": "We counted outlets, USB ports and USB-C charging speed, then looked at LCDs and remotes. A screen that shows voltage and load helps a camper spot a sagging battery before a shutdown. The 200 ft remote on the top 3000W unit and the power-strip layout of the PowerDrive each earned separate credit."
  },
  {
    "title": "Fit under the $150 cap",
    "description": "Every pick is at or under $150, and the spread from $44 to $150 means the choice is rarely about price alone. We rewarded picks whose price matched a coherent job, such as clean power at $65 or appliance capacity at $140. A unit that blurred its purpose ranked lower."
  }
];

export interface HowToChooseSection {
  subheading: string; intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Waveform and What Will Run",
    "intro": "The waveform tells you which devices belong on each pick. Match the gear first, then pick the capacity.",
    "table": {
      "headers": [
        "Your gear",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "CPAP, laptop or fridge compressor",
          "BELTTT 1000Watt",
          "Pure sine at 1,000W continuous."
        ],
        [
          "Camera chargers and a laptop in the car",
          "BESTEK Pure Sine Wave 500W",
          "Pure sine, plugs into the dash socket."
        ],
        [
          "Tools, lights and a coffee maker",
          "Cantonape 3000W",
          "Modified sine, four outlets, big capacity."
        ],
        [
          "Appliances with a wireless remote",
          "3000W Power Inverter",
          "6,000W peak, copper cables included."
        ],
        [
          "Phones, tablets and a camera in a car",
          "PowerDrive PWD150S",
          "Three outlets and USB-C in a strip."
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "These bands use the real prices on the page. Each step up trades something specific for capacity or waveform.",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick",
        "What the money buys"
      ],
      "rows": [
        [
          "About $44",
          "PowerDrive PWD150S",
          "Three outlets, USB-C, 12V socket"
        ],
        [
          "About $65 to $69",
          "BESTEK Pure Sine Wave 500W or TWING Car 1000W",
          "Clean 500W or fast-charging 750W"
        ],
        [
          "About $120",
          "BELTTT 1000Watt",
          "Pure sine at 1,000W continuous"
        ],
        [
          "About $140",
          "Cantonape 3000W",
          "3,000W capacity with four outlets"
        ],
        [
          "About $150",
          "3000W Power Inverter",
          "3,000W, Type-C and copper cables"
        ]
      ]
    }
  },
  {
    "subheading": "Pure Sine vs Modified Sine",
    "intro": "The price gap between them funds the whole budget, so understanding it decides whether the extra spend is worthwhile.",
    "cards": [
      {
        "label": "Pure sine",
        "text": "Matches utility power, so sensitive electronics, motors and compressors run correctly. The BELTTT 1000Watt and the BESTEK Pure Sine Wave 500W belong here, and the premium over a modified sine unit is the price of a clean waveform."
      },
      {
        "label": "Modified sine",
        "text": "A blocky approximation that is good enough for lamps, simple chargers and heater coils, and sells for 40 to 75 percent less. The Cantonape 3000W and the TWING Car 1000W belong here, and a motor-driven load may stall or struggle on them."
      }
    ],
    "note": "If your devices include a CPAP or a laptop, go pure sine with the BELTTT 1000Watt, and keep modified sine for tools."
  },
  {
    "subheading": "By Battery Bank Size",
    "intro": "The inverter is only as useful as the battery behind it, and this axis is where 3000W picks reveal their real cost.",
    "table": {
      "headers": [
        "Your battery setup",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "No bank, just the vehicle",
          "PowerDrive PWD150S",
          "Plugs in and stays inside the socket."
        ],
        [
          "One deep-cycle battery",
          "BELTTT 1000Watt",
          "1,000W draw is about 85 A for a short run."
        ],
        [
          "Clip-on to a starter battery",
          "BESTEK Pure Sine Wave 500W",
          "Clips deliver its full rating."
        ],
        [
          "A large lithium or multi-battery bank",
          "3000W Power Inverter",
          "Built for a bank that can feed hundreds of amps."
        ]
      ]
    }
  },
  {
    "subheading": "For Sensitive Electronics and a Fridge Specifically",
    "intro": "These are the loads that expose a cheap waveform first, so they set the shopping rule.",
    "cards": [
      {
        "label": "Look for",
        "text": "A pure sine claim in the title, as the BELTTT 1000Watt makes, enough continuous watts to cover the compressor with margin, and a screen that shows battery voltage. Pure sine output lets motors and compressors run the way they were designed."
      },
      {
        "label": "In this comparison",
        "text": "The BELTTT 1000Watt is the pick for a fridge or CPAP on a deep-cycle bank, and the BESTEK Pure Sine Wave 500W suits laptops and camera chargers from the dash. The modified sine picks are for everything else."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "The gap between $65 and $150 looks big, and it is the gap between clean electronics and appliance power.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need clean power at 1,000W, which points to the BELTTT 1000Watt, or appliance capacity with remote switching, which points to the 3000W Power Inverter."
      },
      {
        "label": "Save if",
        "text": "Your cargo is phones and a camera, where the PowerDrive PWD150S at about $44 is plenty, or a tool and a charger on a budget, where the TWING Car 1000W covers it."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Waveform quality",
    "explanation": "The waveform is the shape of the AC power an inverter produces. Pure sine matches utility power closely, so sensitive electronics, motors and compressors run properly, while modified sine is a stepped approximation. At this budget the gap is large, because a modified sine model of equal output sells for 40 to 75 percent below the clean one. Look for the words 'pure sine' in the product title, and treat a title that never names the waveform as basic output."
  },
  {
    "criterion": "Continuous watts versus the title figure",
    "explanation": "Continuous watts is the load the inverter holds steadily, while the larger number is a brief surge for motor startups. Some titles lead with the surge or peak figure, so a '1000W' headline can hide a 750W running rating. A fridge compressor can pull well above its running watts for the first second after it starts. Find the continuous number in the bullets, then size for it with a margin."
  },
  {
    "criterion": "Battery bank and cable demand",
    "explanation": "Every 1000W of load costs about 85 A at 12V, so a 3000W unit under load asks for more than 250 A from the bank. Against that demand, a 100 Ah battery would be flat inside an hour at 1000W. That is why the 3000W picks are built for a big lithium or multi-battery system, and why they need thick cable. Match the inverter to the bank before you order, and plan the cable run."
  },
  {
    "criterion": "Connection style",
    "explanation": "A plug-in unit draws through a lighter socket that is fused for roughly 150 W, while a clip or hardwired unit connects straight to the battery. A 500W inverter with clips can deliver its full rating, whereas the same unit plugged in cannot. Read whether the box includes cables, clips and a fuse. A model that ships with thick pure copper cables saves a separate purchase."
  },
  {
    "criterion": "Efficiency and standby draw",
    "explanation": "Conversion efficiency tells you how much battery energy reaches your device, and a figure above 90 percent wastes less. At 1,000W, a few percentage points means tens of watts of heat and a shorter evening on the same bank. An inverter also sips current when idle, so a power switch or remote matters. The efficiency figure appears in the bullets when the maker is proud of it."
  },
  {
    "criterion": "Outlets, ports and protection",
    "explanation": "The number and type of outlets sets how many devices run at once, and a USB-C port with PD charges a laptop without a brick. Named safeguards against overload, shorts, heat and a sagging battery protect both the load and the bank. A screen that shows voltage and load helps you notice a problem early. Count the sockets and read the named protections rather than trusting a layer count."
  }
];

export const faq = [
  {
    "q": "Is pure sine worth paying for under $150?",
    "a": "If you run a CPAP, a laptop, a fridge compressor or anything with a motor, yes. Pure sine matches utility power, so those devices run the way they were designed. For work lights, drill chargers and heaters, modified sine is adequate and saves 40 to 75 percent on price. The BESTEK Pure Sine Wave 500W at about $65 is the cheapest way in."
  },
  {
    "q": "Can a 3000W inverter run from a car lighter socket?",
    "a": "No. A lighter socket is fused for roughly 150 W, and a 3000W unit needs thick cables wired straight to a large battery bank. Plugging the cable in would blow the fuse or overheat the wiring. Models such as the 3000W Power Inverter and the Cantonape 3000W are built for a bank and a clean installation."
  },
  {
    "q": "Is the BELTTT 1000Watt worth it over the TWING Car 1000W?",
    "a": "It is, if the load includes electronics or motors, since the BELTTT is pure sine and the TWING is modified sine. The TWING's page also notes 750W continuous, so the BELTTT has more running capacity. The TWING costs about $50 less and charges phones faster. Pick by what you will plug in."
  },
  {
    "q": "How do I size the battery for these inverters?",
    "a": "Convert watts to amps at 12V, which is roughly 85 A per 1000W, then divide your battery's amp-hours by that figure. A 100 Ah battery runs a 1000W load for well under an hour. For a 500W load, you get roughly double that. Add a margin because batteries should not be run flat."
  },
  {
    "q": "Do these inverters need maintenance?",
    "a": "Keep the vents clear, tighten the terminals now and then and blow dust out of the fan. Check cable lugs for discoloration, which signals a loose connection. The BESTEK Pure Sine Wave 500W uses external fuses that are easy to replace. A tidy install lasts years."
  },
  {
    "q": "What happens if I plug a motor into a modified sine inverter?",
    "a": "It may run hot, buzz or refuse to start. Motors and compressors are designed around a smooth waveform, and a stepped one can add wear. Small fans often tolerate it for a while, which is why a modified sine unit can look fine at first. For a fridge or a pump, use the BELTTT 1000Watt instead."
  }
];

export const bottomLine = [
  "The BELTTT 1000Watt is the pick if your gear includes a CPAP, a laptop or a fridge, because it is where pure sine becomes affordable at a capacity that runs a real appliance. If you own a large battery bank and want microwave-class power, the 3000W Power Inverter is the strongest unit for $150, with copper cables and a long-range remote that switches it from camp.",
  "Drivers who want clean power for a laptop and camera chargers should look at the BESTEK Pure Sine Wave 500W at about $65. The Cantonape 3000W suits a site that runs tools, lights and chargers together from a big bank, and the PowerDrive PWD150S covers a family charging phones, tablets and a camera on a long drive."
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
