export const guideSlug = "best-2000w-inverters-for-camping";
export const guideTitle = "6 Best 2000w Inverters For Camping in 2026";
export const metaTitle = "Best 2000W Camping Inverters (2026)";
export const metaDescription = "Six 2000W inverters for camping, vans and trailers, compared on surge rating, cable and fuse needs, wiring options and fan noise in tight spaces.";
export const mainKeyword = "best 2000w inverters for camping";
export const introParagraphs = [
  "A 2000W inverter sits at the top of what a 12V camp or van system can reasonably feed, and the printed number tells only part of the story. Continuous watts describe the load the unit can hold for hours, while surge watts describe the brief spike a compressor, pump or power tool pulls in its first moments. A box that lists 2000W with a modest peak can feel perfectly capable on a laptop and then trip the moment a fridge compressor kicks on. This guide ranks six units by how they handle those two numbers.",
  "Everything downstream of the inverter matters just as much as the inverter. At 2000W, a 12V system moves roughly 170 amps, which is why cable gauge and fusing decide whether the unit runs at its rating or overheats the wiring. The cable has to be short and very thick, and a fuse belongs close to the battery, sized to the maker's table rather than to a guess. Plug-in car sockets are fused for roughly 150W and are not an option at this size, so every pick here is a battery-terminal install.",
  "The last variable is noise and heat. High-wattage units run cooling fans, and a fan that barks at idle is hard to live with when the inverter sits inside a van or a tent vestibule. We compared listings for remote controllers, heat sink design, protection lists and waveform labeling, then ranked the six. Waveform matters too, because a modified sine unit can run a lamp and a charger while a motor-driven appliance may refuse to start on it."
];
export const lastUpdated = "2026-11-11";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/51YRaqKOevL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-2000w-inverters-for-camping-1",
    "rank": 1,
    "badge": "Highest Surge Rating",
    "name": "Ampeak 2000W Pure Sine Wave Power Inverter 6000W Surge Peak 12V DC to 120V AC 3 AC Outlets with 20A Outlet",
    "price": "$179.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51YRaqKOevL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HDC2THVV?tag=rvgearlab-20",
    "description": "The Ampeak is the ceiling of this group, a 2000W pure sine wave unit with a 6000W surge peak, three times its continuous rating. That headroom is exactly what a motor or compressor startup spike demands, and it separates a unit that merely lists 2000W from one built to ride through the first second of a heavy load.\n\nAgainst the OYPSX just below it, the Ampeak spends its advantage on startup capability and a 20A outlet rather than remote placement, so the heaviest plug in a camp kit goes straight in without an adapter. Voltage regulation on the output keeps loads running steadily late in an evening, as the battery voltage drifts downward.\n\nChoose it when the load list includes a compressor, a pump or a power tool, and the bank behind it is deep enough to feed roughly 170 amps at full draw. For a van or trailer with lithium storage and a short, thick cable run, it is the most capable single box here.",
    "specs": [
      "2000W pure sine with 6000W surge peak",
      "Three AC outlets, one rated 20A",
      "LCD display and voltage regulation"
    ],
    "pros": [
      "Highest surge rating of the six at 6000W",
      "Pure sine wave output suits sensitive electronics",
      "The 20A outlet takes heavier plugs",
      "Voltage regulation helps avoid late-evening shutdowns"
    ],
    "cons": [
      "Highest price of the six at $179.99",
      "Heavy 12V current demands very thick cable and fuse"
    ],
    "bestFor": "Heavy startup loads on a deep battery bank"
  },
  {
    "id": "best-2000w-inverters-for-camping-2",
    "rank": 2,
    "badge": "Best Remote Placement",
    "name": "OYPSX 2000W Power Inverter 12V to 110V 120V AC Pure Sine Wave Inverter for RV Truck Camping",
    "price": "$159.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UYcmNK7OL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FXRD65C1?tag=rvgearlab-20",
    "description": "The OYPSX pairs 2000W of pure sine wave output with a wired controller on a 5 meter cable, the longest of the six. That length lets the inverter live in a battery compartment or under a bed platform while the display and switch sit within reach, which keeps fan noise and heat away from where people sleep.\n\nCompared with the Ampeak above it, this unit trades a published surge headline for control and diagnostics: the LCD reports fault codes, and seven protections are listed, including reverse polarity. Compared with the OUBOTEK below it, the extra cable length gives more freedom in where the main body gets mounted.\n\nIt suits a camper van or truck-bed build where the battery sits in one corner and the operator sits in another. Anyone who wants to read a fault code instead of guessing why the unit went quiet will appreciate the display.",
    "specs": [
      "2000W pure sine wave output",
      "Wired controller on a 5 meter cable",
      "Seven protections listed, LCD fault codes"
    ],
    "pros": [
      "Longest controller cable of the six at 5 meters",
      "Reverse polarity protection is listed by name",
      "LCD shows fault codes for quicker diagnosis",
      "Pure sine wave output for sensitive electronics"
    ],
    "cons": [
      "Seller gives no clear surge figure, so size with margin",
      "Second-highest price of the six at $159.95"
    ],
    "bestFor": "Vans where the unit lives out of sight"
  },
  {
    "id": "best-2000w-inverters-for-camping-3",
    "rank": 3,
    "badge": "Best Mid-Price Hardwire",
    "name": "OUBOTEK 2000W Pure Sine Wave Inverter 12V DC to 120V AC Converter for Vehicles Boat Camping Outdoor Solar Syst",
    "price": "$121.19",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51B-GK2252L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C744F31N?tag=rvgearlab-20",
    "description": "The OUBOTEK delivers 2000W continuous with a 4000W peak, and it adds a 25A terminal block alongside four 15A AC outlets. That combination is unusual at this price: the outlets cover everyday plugs, while the terminal lets a hardwired circuit feed a small distribution panel in a van or a solar shed.\n\nLike the Ampeak it carries the pure sine waveform, with a 4000W peak in place of the 6000W one and a price about $59 lower. Its LCD shows frequency and load, and a 3 m wired remote keeps the controls within reach.\n\nIt fits an off-grid build where a few fixed circuits matter more than the biggest possible startup spike. A camper who wants several plugs plus a hardwire option, without paying for the top surge rating, lands here.",
    "specs": [
      "2000W continuous with 4000W peak",
      "Four 15A AC outlets plus terminal",
      "3 m wired remote, LCD readout"
    ],
    "pros": [
      "Four 15A outlets cover a full camp kit",
      "A 25A terminal block supports hardwired circuits",
      "LCD displays frequency and load at a glance",
      "Pure sine wave power at a mid-range price"
    ],
    "cons": [
      "Lower surge rating than the Ampeak",
      "Remote cable is shorter than the OYPSX one"
    ],
    "bestFor": "Solar or battery boxes with a hardwired subpanel"
  },
  {
    "id": "best-2000w-inverters-for-camping-4",
    "rank": 4,
    "badge": "Steadiest Output",
    "name": "Vansdon 2000W Pure Sine Wave Inverter 12V DC to 120V AC Inverters for RV",
    "price": "$115.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41s3I8uZ45L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G6Z76YFC?tag=rvgearlab-20",
    "description": "The Vansdon regulates its output to a steady 110 to 120V, so a battery that has drifted down late in the evening still delivers usable voltage to the plug. Dual cooling with aluminum heat sinks shares the thermal load between airflow and metal, which is the design approach that lets fans work gently at light loads.\n\nNext to the OUBOTEK above it, the Vansdon adds a 30W USB-C PD port that charges a laptop or phone without a separate adapter, and it keeps the hardwire terminal for larger loads. Against the 2000W Power unit below, it carries the pure sine waveform that motor-driven gear prefers.\n\nIt is a natural pick for a van where the inverter shares air with the people living in it. Anyone charging devices overnight and running a few mid-size appliances by day gets the right mix.",
    "specs": [
      "Regulated 110 to 120V output",
      "Hardwire terminal and 30W USB-C PD port",
      "Dual cooling with aluminum heat sinks"
    ],
    "pros": [
      "Output stays near 110V when the battery sags",
      "Hardwired terminal supports bigger fixed loads",
      "30W USB-C PD charges laptops directly",
      "Dual cooling with heat sinks eases fan work"
    ],
    "cons": [
      "4000W surge sits below the Ampeak's figure",
      "A wired remote is not part of the listing"
    ],
    "bestFor": "Quiet-minded van builds that run on a sagging battery"
  },
  {
    "id": "best-2000w-inverters-for-camping-5",
    "rank": 5,
    "badge": "Modified Sine Saver",
    "name": "2000W Power Inverter 12V DC to 110V/120V AC with LCD Display for Vehicles",
    "price": "$104.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51St+6OMH7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GL1ZPKYJ?tag=rvgearlab-20",
    "description": "This 2000W unit is labeled modified sine wave, and that honest labeling is the key to understanding its place. It spends nothing on waveform refinement, which is why it lands at $104.97 with an LCD display and a five-layer protection scheme, and why it names LiFePO4, AGM, GEL and lead-acid batteries as compatible.\n\nBeside the Vansdon above it, this unit gives up the pure sine waveform and the USB-C port in exchange for a lower price. Beside the YSOLX below it, the display and the stated battery chemistries give a clearer picture of what the unit expects from its source.\n\nIt works for lights, heating elements, chargers and other resistive gear, where waveform shape makes no difference. A camper running a kettle, a work light and a battery charger can save real money here.",
    "specs": [
      "2000W modified sine wave output",
      "Works with LiFePO4, AGM, GEL, lead-acid",
      "Five-layer protection and LCD display"
    ],
    "pros": [
      "Names every compatible battery chemistry clearly",
      "Clear modified sine wave labeling up front",
      "Five-layer protection guards the battery and unit",
      "Priced below the pure sine models"
    ],
    "cons": [
      "Modified sine wave limits some motor-driven devices",
      "Needs a separate external 12V battery"
    ],
    "bestFor": "Resistive loads on a tight budget"
  },
  {
    "id": "best-2000w-inverters-for-camping-6",
    "rank": 6,
    "badge": "Lowest Price",
    "name": "YSOLX 2000W Power Inverter 12V to 110V",
    "price": "$89.24",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/414BMJC4JGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07PJJR7DB?tag=rvgearlab-20",
    "description": "The YSOLX is the lowest-priced unit here at $89.24, and it still carries a 2000W rating with a 4000W peak, three AC outlets and FCC, CE and RoHS certification marks. For a camper who wants an inverter on hand for the occasional heavy-ish load, that price opens the door to a 2000W class unit.\n\nCompared with the 2000W Power unit above it, the YSOLX adds regulatory marks and a 30-day return and exchange window in place of an LCD readout and a named battery chemistry list. Installation follows the plug-and-play style that suits a first hookup.\n\nIt makes sense as a spare, a garage backup or an occasional-use unit in a trailer that sees a handful of weekends a year. A buyer who values the return window and the certification marks over extra features will be comfortable with it.",
    "specs": [
      "2000W continuous with 4000W peak",
      "Three AC outlets, plug-and-play install",
      "FCC, CE and RoHS certified"
    ],
    "pros": [
      "Lowest price of the six at $89.24",
      "FCC, CE and RoHS certification marks listed",
      "30-day return and exchange gives buying confidence",
      "Plug-and-play installation keeps the first hookup simple"
    ],
    "cons": [
      "Waveform type is not clearly stated by the seller",
      "No remote or LCD is shown in the details"
    ],
    "bestFor": "Backup or occasional use on a tight budget"
  }
];

export const howWeEvaluated = [
  {
    "title": "Continuous and Surge Ratings",
    "description": "We compared each unit's continuous and peak watt figures as printed in the listing, then reasoned about what each number permits. A 2000W continuous rating covers a steady load, while a 6000W peak covers a compressor start. Where a seller gave no clear peak figure, we treated the unit as sized for steady loads and said so in the pros and cons."
  },
  {
    "title": "Waveform Labeling",
    "description": "Pure sine wave, modified sine wave and unlabeled units sit in different tiers for a reason. We separated listings that state the waveform from those that leave it open, since waveform decides whether a motor, a fridge or a laptop charger behaves correctly. Honest labeling earned credit even on the cheaper units."
  },
  {
    "title": "Wiring and Terminal Options",
    "description": "At 2000W the battery connection matters more than the printed outlets. We looked at which units offer a terminal block, how many outlets they carry and whether any outlet is rated above the common 15A. Units that support hardwiring scored better for van and solar builds, where a fixed circuit is the norm."
  },
  {
    "title": "Cooling and Controls",
    "description": "Cooling design and remote controls shape daily comfort. We weighed heat sinks, dual cooling and remote cable length, because those features decide whether the main body can be mounted away from where people sleep. Fault code displays and protection lists also counted, since they shorten troubleshooting."
  },
  {
    "title": "Price Against Capability",
    "description": "Prices run from $89.24 to $179.99 across the six, and the spread buys real differences: surge headroom, waveform and remote placement. We ranked units by how much of that capability a typical camper uses, based on product specs and the way each listing describes its features, rather than by rating counts or popularity."
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
    "subheading": "By Startup Surge Demand",
    "intro": "The size of the biggest startup spike in your kit is the first filter, because surge is what separates the six units most.",
    "table": {
      "headers": [
        "Biggest load that starts a motor",
        "Surge to plan for",
        "Pick"
      ],
      "rows": [
        [
          "Laptop, lights and chargers only",
          "Close to running watts",
          "YSOLX 2000W at $89.24 is plenty"
        ],
        [
          "Small compressor fridge or fan",
          "Up to 4000W peak",
          "OUBOTEK 2000W with a 4000W peak"
        ],
        [
          "Mid-size pump or power tool",
          "4000W peak with a steady supply",
          "Vansdon 2000W with regulated output"
        ],
        [
          "Large compressor or well-style pump",
          "Up to 6000W peak",
          "Ampeak 2000W, the highest surge of the six"
        ],
        [
          "Resistive heating only",
          "No motor spike",
          "2000W Power Inverter in modified sine"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "The six prices run from $89.24 to $179.99, and each step buys something specific.",
    "table": {
      "headers": [
        "Budget",
        "Pick",
        "What the money buys"
      ],
      "rows": [
        [
          "Under $100",
          "YSOLX 2000W at $89.24",
          "A 2000W rating, 4000W peak and certification marks"
        ],
        [
          "$100 to $110",
          "2000W Power Inverter at $104.97",
          "Modified sine with LCD and named battery types"
        ],
        [
          "$110 to $125",
          "Vansdon 2000W at $115.59 or OUBOTEK 2000W at $121.19",
          "Pure sine with a hardwire terminal, regulated output or four outlets"
        ],
        [
          "$125 to $170",
          "OYPSX 2000W at $159.95",
          "A 5 meter wired controller and fault codes"
        ],
        [
          "Over $170",
          "Ampeak 2000W at $179.99",
          "6000W surge and a 20A outlet"
        ]
      ]
    }
  },
  {
    "subheading": "Hardwired Terminal vs Plug-In Outlets",
    "intro": "At this wattage the way loads connect shapes the install, and the two approaches suit different builds.",
    "cards": [
      {
        "label": "Hardwired terminal",
        "text": "A terminal block feeds a fused subpanel, so a fridge, lighting and a few receptacles are wired as fixed circuits. The OUBOTEK 2000W has a 25A terminal block and the Vansdon 2000W has a hardwire terminal, both suited to van and solar builds."
      },
      {
        "label": "Plug-in outlets",
        "text": "Built-in sockets suit a mobile kit where gear changes between trips. The Ampeak 2000W adds a 20A outlet for heavier plugs, and the YSOLX 2000W offers three outlets with plug-and-play installation."
      }
    ],
    "note": "Pick the terminal for a permanent build and the outlets for a flexible, trip-to-trip kit."
  },
  {
    "subheading": "By Where the Inverter Sits",
    "intro": "Fan noise and heat become personal once the box is inside the space where people sleep.",
    "table": {
      "headers": [
        "Mounting spot",
        "What matters",
        "Pick"
      ],
      "rows": [
        [
          "Under the bed in a van",
          "Quiet fan at light loads",
          "Vansdon 2000W with dual cooling and heat sinks"
        ],
        [
          "Battery compartment, controls in the cab",
          "Long remote cable",
          "OYPSX 2000W with a 5 meter controller"
        ],
        [
          "Garage shelf or outdoor box",
          "Raw capability",
          "Ampeak 2000W with 6000W surge"
        ],
        [
          "Tent vestibule or porch",
          "Short remote and readable display",
          "OUBOTEK 2000W with a 3 m remote and LCD"
        ]
      ]
    }
  },
  {
    "subheading": "For Van and Tent Installs Specifically",
    "intro": "Enclosed spaces reward quiet, remote-controlled units, and the six differ here.",
    "cards": [
      {
        "label": "Look for",
        "text": "Heat sink or dual cooling designs, a remote controller on a cable long enough to place the main body away from the bed, and a display that reports faults. Regulated output helps when a bank runs low overnight, which is why the Vansdon 2000W is the reference point here."
      },
      {
        "label": "In this comparison",
        "text": "The Vansdon 2000W brings dual cooling and regulated output, the OYPSX 2000W brings the 5 meter controller and fault codes, and the OUBOTEK 2000W brings a 3 m remote with a frequency and load display."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "The top and bottom of the price range each make sense in the right build.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Your kit includes a compressor, a pump or a power tool with a big startup spike, or you want remote placement. The Ampeak 2000W at $179.99 gives the highest surge, and the OYPSX 2000W at $159.95 gives the longest controller cable."
      },
      {
        "label": "Save if",
        "text": "Your loads are chargers, lights and heating elements, or the inverter sees a few weekends a year. The YSOLX 2000W at $89.24 and the 2000W Power Inverter at $104.97 deliver the 2000W rating at the lowest cost."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Continuous versus surge watts",
    "explanation": "Continuous watts are the load an inverter sustains for hours, and surge watts are the short burst it can deliver when a motor or compressor starts. Many induction motors pull several times their running wattage for a moment, so a unit with 2000W continuous and a 4000W peak can run a 1000W appliance happily and still stumble on a pump that starts at 3500W. Add up the running watts of everything that will run together, then add the largest startup spike on top. On the listing, look for both numbers in the title or bullets, and treat a missing peak figure as a reason to leave extra margin."
  },
  {
    "criterion": "Cable gauge and fuse size",
    "explanation": "At 2000W a 12V system pulls roughly 170 amps, and more once conversion losses are included, which is far beyond what ordinary wiring tolerates. A cable that is too thin heats up, drops voltage and trips the inverter's low-voltage alarm before the battery is empty. Use the thickest, shortest cable the maker specifies, and fit a fuse close to the battery in a rating above the expected current. The manual's wire table is the reference, so look for it on the listing or the manufacturer's page before buying cable."
  },
  {
    "criterion": "Battery bank capacity",
    "explanation": "Runtime comes from the battery, not the inverter. A full 2000W load drains a 100 Ah battery in well under 40 minutes, which is why large inverters make sense only with a big lithium bank or several batteries in parallel. Many batteries also cap continuous discharge current, so a bank that can safely feed 170 amps is a requirement, not a luxury. Read the battery's maximum continuous discharge rating, and match it to the inverter's worst-case draw."
  },
  {
    "criterion": "Cooling fan noise behavior",
    "explanation": "Big inverters get warm, and a fan that spins up at idle will be heard in a van or a tent vestibule all night. Heat sink designs and temperature-controlled fans spin slowly or not at all at light loads, which keeps a laptop-charging evening quiet. Pick a model whose listing mentions heat sinks or dual cooling, and plan to mount the body away from the bed. A remote on a long cable makes that placement practical."
  },
  {
    "criterion": "Pure sine versus modified sine",
    "explanation": "Pure sine output matches household power, so motors, compressors and sensitive chargers run correctly. Modified sine is a blocky approximation that suits lights, heating elements and simple chargers, and it often costs 40 to 75 percent less. Some motor-driven appliances run poorly or refuse to start on it. Look for the waveform stated in the title or bullets, and if the listing never names it, treat the unit as a risk for anything with a motor."
  },
  {
    "criterion": "Terminal and outlet layout",
    "explanation": "Outlet count and rating decide what plugs in without adapters, while a terminal block decides whether the unit can feed a small panel. A 20A outlet accepts heavier plugs than the common 15A socket, and a hardwire terminal supports fixed circuits in a van or solar shed. Think about where each appliance will connect before you buy. The listing's photos usually show the outlet face, so count the sockets and note each rating."
  }
];

export const faq = [
  {
    "q": "Can a 2000W inverter run from a car cigarette-lighter socket?",
    "a": "No. Most 12V sockets are fused for roughly 150W, so a 2000W unit needs to be wired directly to the battery through proper cable and a fuse. The plug-in cord that comes with small inverters is designed for loads in the low hundreds of watts. Every unit in this guide belongs on battery terminals."
  },
  {
    "q": "What is the most common wiring mistake with a large inverter?",
    "a": "Using cable that is too thin or too long. At 2000W the current approaches 170 amps, and undersized cable heats up and causes voltage drop that can trigger a low-voltage shutdown. Keep the run short, use the gauge the maker's table specifies, and place a fuse near the battery."
  },
  {
    "q": "Is the Ampeak worth $179.99 over the Vansdon at $115.59?",
    "a": "It depends on the loads. The Ampeak's 6000W surge and 20A outlet matter if a compressor or pump starts under load. The Vansdon offers regulated output, a USB-C PD port and heat sink cooling at about $64 less, which suits most van setups that run laptops, lights and a fridge."
  },
  {
    "q": "How do I install a 2000W inverter safely?",
    "a": "Mount it close to the battery on a flat, ventilated surface, then connect heavy cable from the inverter's terminals to the battery through a fuse. Connect positive and negative with the right polarity, tighten the lugs firmly, and switch the unit on with nothing plugged in. Add loads one at a time and watch the display."
  },
  {
    "q": "How should I maintain an inverter in a dusty camper?",
    "a": "Keep the fan intake clear of dust and pet hair, and recheck the terminal lugs after the first few trips, since vibration can loosen them. A loose lug heats up and can melt insulation. Wipe the body with a dry cloth rather than spraying cleaner near the vents."
  },
  {
    "q": "Can I run the inverter inside a tent?",
    "a": "An inverter produces no exhaust, but it does produce heat, so it needs airflow and should sit on a hard surface away from bedding. A vestibule or a spot outside the tent door works better than the sleeping area. A remote on a long cable lets you control the unit from inside."
  }
];

export const bottomLine = [
  "For most buyers the Vansdon 2000W is the balanced choice, pairing pure sine output, regulation and heat sink cooling at $115.59. Anyone who starts compressors or pumps should step up to the Ampeak 2000W for its 6000W surge, and van builders who want controls in the cab should look at the OYPSX 2000W.",
  "Treat the wiring as part of the purchase. A 2000W inverter is only as good as its cable, fuse and battery bank, so budget for heavy cable and a lithium bank that can deliver roughly 170 amps. With that in place, any of these six will do the job they were priced for."
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
