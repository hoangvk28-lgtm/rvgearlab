export const guideSlug = "best-budget-rv-soft-start";
export const guideTitle = "5 Best Budget RV Soft Starts in 2026";
export const metaTitle = "Best Budget RV Soft Start in 2026";
export const metaDescription = "Five affordable RV air conditioner soft start kits compared on LRA fit, startup-current cut and install effort, so a small generator can start your roof unit.";
export const mainKeyword = "best budget rv soft start";
export const introParagraphs = [
  "A rooftop air conditioner is a motor that wants a huge gulp of current for a fraction of a second, and that gulp is what trips a 30 amp breaker or stalls a 2,200 watt generator. A soft start module smooths the gulp. The budget question is how little you can spend and still get a device that matches your compressor, survives roof weather and installs without a service call. Spend too little and the module will not match the compressor, and spend too much and you have bought a brand name you did not need.",
  "The five kits here span three kinds of buyer: the owner who wants the lowest outlay that still names a generator size, the owner with a broad non-inverter roof unit who wants wide voltage tolerance, and the owner whose air conditioner has a manufacturer-matched kit. Every maker's startup reduction figure is a claim, not a measurement, and we treat it that way. The prices below are placed by band against each other, and the reasoning for each step up is spelled out so you can decide where to stop on a roof you know.",
  "Read this guide with your air conditioner's data plate open. The Locked Rotor Amperage printed there decides which of these kits is right, and no listing that says it fits every RV air conditioner has told you anything you can act on. We evaluated listings and product specs; we did not bench-test any module. Where a listing leaves the sizing to you, we say so plainly and tell you how to close the gap yourself. That is the honest way to shop in a category full of universal-fit claims. Keep the data plate number handy."
];
export const lastUpdated = "2026-10-02";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/51os22rWmfL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-budget-rv-soft-start-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "TURBRO RV AC Soft Start Kit for Smooth Startup Under Low-Power Condition",
    "price": "$119.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51os22rWmfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DK8BXHWH?tag=rvgearlab-amz-20",
    "description": "The TURBRO kit is aimed at rooftop units that pull more than 40 amps at startup and are rated up to 15,000 BTU, a description that fits a large share of conventional non-inverter RV air conditioners. The maker claims it cuts the power needed to start the compressor by 60 to 75 percent. Three indicator lights on the case report what the module is doing, and a 6-wire installation ties it into the compressor circuit.\n\nIts 100 to 240 volt, 60 Hz operating range is wider than the 115 volt window most rivals publish, which gives it room to work on the sagging voltage of a crowded campground pedestal. A waterproof outer shell and an epoxy-sealed circuit board give it two layers of IPX5 protection, the right habit for a part that lives in a hot rooftop control box. Next to the MACH Coleman Kit it is not tied to one air conditioner family.\n\nThe listing also describes two air conditioners sharing a 30 amp hookup when their combined running amperage stays under 30 amps, with a module on each unit. That is the claim a dual-AC owner wants to hear without paying for a 50 amp upgrade. Choose it as the default when the nameplate LRA is above the 40 amp mark and the roof unit is a standard non-inverter model.",
    "specs": [
      "Up to 15,000 BTU units",
      "100-240V, 60 Hz",
      "Dual IPX5, epoxy-sealed board"
    ],
    "pros": [
      "Wide 100 to 240 volt input range",
      "Three indicator lights show module status",
      "Waterproof shell plus epoxy-sealed circuit board",
      "Supports two air conditioners on one 30 amp hookup"
    ],
    "cons": [
      "Meant for non-inverter air conditioners only",
      "Six-wire hookup takes more patience than a kit with color-coded leads",
      "Sits above the generic kits on price"
    ],
    "bestFor": "Non-inverter roof units over 40 amps at startup, up to 15,000 BTU."
  },
  {
    "id": "best-budget-rv-soft-start-2",
    "rank": 2,
    "badge": "Lowest Cost Starter",
    "name": "RV Air Conditioner Soft Start Kit by Mtsooning",
    "price": "$43.19",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41vQgztDt5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FXXKKV88?tag=rvgearlab-amz-20",
    "description": "The Mtsooning kit is the cheapest way into soft start protection in this guide, and it still lists a flame-retardant ABS housing with IP67 waterproof cables. The maker states a 70 percent cut in startup current, enough to bring a 15,000 BTU unit within reach of a 2,200 watt generator. It supports 20 or 30 amp circuits and lists a working range from minus 40 to 185 degrees Fahrenheit.\n\nColor-coded wires and pre-crimped terminals are what make the stated 15-minute DIY install believable, since nothing needs stripping or crimping inside the control box. Compared with the HQPASFY Soft Start, the next rung up on price, it adds IP67 sealing and a published temperature window, both of which matter on a roof that sees summer sun and winter storage.\n\nThe listing adds protection against surges and overheating with an automatic reset after a power loss, so the module recovers by itself after a campground outage. Pick it when the goal is starting one rooftop unit from a portable generator at the lowest outlay and you have already matched the module to the LRA on your data plate.",
    "specs": [
      "Supports 20A or 30A circuits",
      "IP67 cables, ABS housing",
      "Pre-crimped, color-coded wires"
    ],
    "pros": [
      "Cheapest kit in this guide",
      "Color-coded wires with pre-crimped terminals",
      "IP67 waterproof cables and wide temperature range",
      "Auto-resets after a power loss"
    ],
    "cons": [
      "Listing gives no LRA ceiling, so you match it yourself",
      "Lesser-known brand than Coleman-Mach"
    ],
    "bestFor": "One roof unit on a portable generator at the smallest outlay."
  },
  {
    "id": "best-budget-rv-soft-start-3",
    "rank": 3,
    "badge": "Best Documented Install",
    "name": "Aoteda Soft Start for RV Air Conditioner, Upgraded HVAC RV AC Soft Start Kit",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xIvpFTyqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F98TNVHS?tag=rvgearlab-amz-20",
    "description": "The Aoteda kit is sold as a general-purpose RV soft starter, with a stated 65 to 70 percent cut in the air conditioner's starting current and short-cycle protection built in. That protection helps keep a compressor from restarting too soon after it shuts off. The listing describes it as a way to bring an air conditioner within reach of a small generator while leaving power for other appliances.\n\nIts wiring package is the most beginner-friendly of the generic kits: a detailed wiring diagram and an instruction manual come with it, and the five wires are color-coded for easy identification and connection. A dust-proof ABS plastic shell protects the module. The HQPASFY Soft Start leans on pictures and video links, whereas the Aoteda puts a diagram and manual in the box.\n\nThe listing describes running an air conditioner from a 20 amp domestic connection, or two air conditioners at once on a 30 amp connection with one soft starter fitted to each. It sits mid-pack on price, a small step above the HQPASFY Soft Start and well below the TURBRO Soft Start. Choose it for a first-time installer who wants a manual and color-coded wires without paying for a named-model kit.",
    "specs": [
      "65-70% startup-current cut claimed",
      "Five color-coded wires",
      "Dust-proof ABS shell"
    ],
    "pros": [
      "Wiring diagram and instruction manual included",
      "Five color-coded wires for easy hookup",
      "Short-cycle protection built in",
      "Supports two air conditioners on one 30 amp connection"
    ],
    "cons": [
      "No LRA ceiling or BTU limit named",
      "Listing wording on generator size is unclear"
    ],
    "bestFor": "First-time installers who want a wiring diagram and manual in the box."
  },
  {
    "id": "best-budget-rv-soft-start-4",
    "rank": 4,
    "badge": "Best Second Budget Option",
    "name": "Soft Start for RV Air Conditioner by HQPASFY",
    "price": "$56.60",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JZF1nsa-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DBVK5V5P?tag=rvgearlab-amz-20",
    "description": "The HQPASFY soft start targets 15,000 BTU rooftop units and is described as workable with a 2,200 watt generator, a straightforward promise for boondockers. The maker claims a 65 to 70 percent drop in starting current and a reduction in compressor noise and vibration at startup, which a sleeping household notices on every cycle. It also names no particular air conditioner brand, which widens the field of roofs it can serve.\n\nIt sits just above the Mtsooning Kit on price and, like that kit, names its generator size outright, giving the budget end a second option with a different seller behind it. The listing includes installation pictures and points buyers to video tutorials, which gives a first-timer something visual to follow while the control box is open.\n\nIt also lists support for running ordinary appliances beside the air conditioner, a refrigerator and television among them, which mirrors how most generator campers actually load their system. On a 2,200 watt generator feeding a 15,000 BTU roof unit, it is the pick for anyone comfortable following picture-based wiring steps. That combination is the practical sweet spot for a generator camper on a tight budget.",
    "specs": [
      "Powers a 15,000 BTU unit",
      "Works with a 2,200W generator",
      "65-70% startup-current cut claimed"
    ],
    "pros": [
      "Names a 15,000 BTU and 2,200 watt pairing",
      "Installation pictures included in the listing",
      "Aims to cut compressor noise and vibration",
      "Low entry price near the cheapest kit"
    ],
    "cons": [
      "Listing leans toward professional installation",
      "No waterproof rating stated in the listing",
      "No LRA ceiling named"
    ],
    "bestFor": "15,000 BTU roofs on a 2,200 watt generator with a fridge and TV running."
  },
  {
    "id": "best-budget-rv-soft-start-5",
    "rank": 5,
    "badge": "Best for Coleman-Mach",
    "name": "Coleman-Mach Soft Start Kit for RV Air Conditioner, 1497-3601",
    "price": "$214.40",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41co8oT6++L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CF41ZW4W?tag=rvgearlab-amz-20",
    "description": "This kit is made for Coleman-Mach Series 45000, 47000 and 48000 air conditioners, so compatibility is answered by the series number printed on the unit. The maker states it cuts inrush amperage by up to 75 percent, and it uses a ramped power draw at each cycle start to smooth out voltage spikes. The maker also says it lessens overall power consumption, which suits an owner running a coach for long stretches.\n\nA short-cycle protection feature is built in, and the unibody enclosure shields the module in a range of weather without changing the outward look of the air conditioner. Installation is done from the exterior of the coach, which keeps the interior ceiling panel untouched. Together those details make it the neatest install of the five on a unit it was built for, and the module sits protected in its own enclosure year-round.\n\nThe warranty terms stand out. A 2 year limited warranty is included, and the listing says installing the kit will not adversely affect the existing Coleman-Mach warranty, which removes the worry that stops many owners from touching a factory roof unit. Moving to the most expensive pick here buys series-specific fit and warranty clarity instead of a broad universal claim.",
    "specs": [
      "Coleman-Mach 45000/47000/48000",
      "Up to 75% inrush reduction claimed",
      "2 year limited warranty"
    ],
    "pros": [
      "Named series fit, no amp-range guessing",
      "Installs from the exterior of the coach",
      "Two year warranty, existing warranty unaffected",
      "Short-cycle protection built in"
    ],
    "cons": [
      "Fits only three Coleman-Mach series",
      "Top of the price range for a soft start"
    ],
    "bestFor": "Coleman-Mach 45000, 47000 or 48000 series roof units."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fit to a named rating",
    "description": "We compared each listing on how it tells you it fits. A model or series name, such as the Coleman-Mach series, settles fit completely. A BTU ceiling or an amp threshold gets you close, and a general claim that a kit suits RV air conditioners leaves the matching to you."
  },
  {
    "title": "Startup claims read as claims",
    "description": "Every kit here quotes a percentage cut in startup current, and every one of those figures comes from the maker. We used them to rank how ambitious each claim is, not as measured results. A kit that also names a generator size gives you something more concrete to hold it to."
  },
  {
    "title": "Installation effort",
    "description": "Color-coded leads, wiring diagrams and pre-crimped terminals shorten a rooftop wiring job, and a bare set of leads lengthens it. We weighed what each package includes against what a first-time installer would need to buy or learn. Exterior-access designs and picture guides also counted."
  },
  {
    "title": "Weather and road durability",
    "description": "A soft start module lives in a roof control box that cycles from summer heat to winter cold and shakes on every mile. We looked at waterproof ratings, sealed circuit boards, published temperature windows and vibration claims. Kits that publish a rating scored above kits that only say weatherproof."
  },
  {
    "title": "Position on the price ladder",
    "description": "Because the subject is budget, we placed each pick relative to its neighbors and asked what the step up buys. Sometimes it is a matched fit and a clear warranty, sometimes a wider voltage range, sometimes nothing but a brand name. Where the step up buys nothing a buyer needs, the cheaper kit ranked higher."
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
    "subheading": "By Your Air Conditioner's Startup Rating",
    "intro": "Match the kit to the LRA on your data plate and to the roof unit's make. The row that describes your air conditioner decides the pick.",
    "table": {
      "headers": [
        "Your roof unit",
        "Pick",
        "Why"
      ],
      "rows": [
        [
          "Non-inverter unit up to 15,000 BTU with startup above 40 amps",
          "TURBRO Soft Start",
          "Its listing is written for exactly that threshold and BTU ceiling."
        ],
        [
          "Coleman-Mach 45000, 47000 or 48000 series",
          "MACH Coleman Kit",
          "Fit is named by series, with a warranty statement for the existing unit."
        ],
        [
          "Non-inverter roof unit, first install, wants a diagram and manual",
          "Aoteda Soft Start",
          "Its box includes a detailed wiring diagram, a manual and five color-coded wires."
        ],
        [
          "15,000 BTU unit started from a 2,200 watt generator, tightest outlay",
          "Mtsooning Kit",
          "It names the generator pairing and sells at the entry of this shortlist."
        ],
        [
          "15,000 BTU unit started from a 2,200 watt generator, with a fridge and TV also running",
          "HQPASFY Soft Start",
          "Its listing describes powering ordinary appliances alongside the air conditioner."
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "Prices in this shortlist stretch from a very low entry to a kit several times that, and each rung buys something different. We place picks by band, not by figure.",
    "table": {
      "headers": [
        "Price band",
        "Pick",
        "What the money buys"
      ],
      "rows": [
        [
          "Entry of this shortlist",
          "Mtsooning Kit",
          "IP67 cables, pre-crimped terminals and a named generator pairing."
        ],
        [
          "Just above entry",
          "HQPASFY Soft Start",
          "A second generic kit with picture-based install steps."
        ],
        [
          "Mid of this shortlist",
          "Aoteda Soft Start",
          "A wiring diagram, a manual and color-coded wires for a first install."
        ],
        [
          "Upper-mid of this shortlist",
          "TURBRO Soft Start",
          "Wide 100 to 240 volt range, indicator lights and a sealed circuit board."
        ],
        [
          "Top of this shortlist",
          "MACH Coleman Kit",
          "Series-specific fit, exterior installation and a warranty carve-out."
        ]
      ]
    }
  },
  {
    "subheading": "Documented vs Bare-Lead Installs",
    "intro": "The biggest practical difference between these kits is how much wiring you do on a hot roof.",
    "cards": [
      {
        "label": "Documented",
        "text": "The Aoteda Soft Start ships a wiring diagram, a manual and five color-coded wires, and the Mtsooning Kit supplies color-coded leads with pre-crimped terminals. These are the lower-risk routes for a first install and for anyone who dislikes electrical work."
      },
      {
        "label": "Bare leads",
        "text": "The TURBRO Soft Start uses a 6-wire hookup and the HQPASFY Soft Start leans on installation pictures. You do more of the work, and the kits are priced to reflect it."
      }
    ],
    "note": "Pick the Aoteda Soft Start if the wiring worries you; pick the Mtsooning Kit if you are comfortable and want the lowest outlay."
  },
  {
    "subheading": "By Generator and Circuit",
    "intro": "What feeds the air conditioner narrows the field as much as the roof unit does.",
    "table": {
      "headers": [
        "Your power source",
        "Pick",
        "Why"
      ],
      "rows": [
        [
          "Portable 2,200 watt generator, one roof unit",
          "Mtsooning Kit",
          "The listing pairs a 15,000 BTU unit with a 2,200 watt generator."
        ],
        [
          "Two roof units on one 30 amp connection, one module each",
          "Aoteda Soft Start",
          "Its listing describes two air conditioners at once on a 30 amp connection."
        ],
        [
          "30 amp pedestal, two roof units with nothing else running",
          "TURBRO Soft Start",
          "Its listing describes two units under a combined 30 amps."
        ],
        [
          "20 or 30 amp household-style outlet at a campground",
          "Mtsooning Kit",
          "It lists support for both 20 and 30 amp circuits."
        ],
        [
          "Mixed generator use with a fridge and TV on",
          "HQPASFY Soft Start",
          "The listing describes running appliances alongside the air conditioner."
        ]
      ]
    }
  },
  {
    "subheading": "For Boondocking Specifically",
    "intro": "Off-grid owners care about the generator or inverter that carries the load more than about the shore power inlet.",
    "cards": [
      {
        "label": "Look for",
        "text": "A kit that names a generator size, as the Mtsooning Kit does, with a stated startup reduction and sealed weatherproofing. Remember that the module lowers only the startup surge, so your generator or inverter must still carry the air conditioner's running load."
      },
      {
        "label": "In this comparison",
        "text": "The Mtsooning Kit and HQPASFY Soft Start both name a 2,200 watt generator with a 15,000 BTU unit, and the Aoteda Soft Start adds short-cycle protection to a similar 65 to 70 percent claim. The TURBRO Soft Start suits owners who also move between generator and pedestal power."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "The step up from the entry kit buys fit certainty and wiring help, not a different kind of protection.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Your roof unit is a named model. The MACH Coleman Kit removes compatibility guesswork and adds a warranty statement that protects the unit you already own."
      },
      {
        "label": "Save if",
        "text": "You have read the LRA and are comfortable wiring. The Mtsooning Kit, HQPASFY Soft Start or Aoteda Soft Start start the same class of roof unit from a small generator at the entry of this shortlist."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "The LRA on your own data plate",
    "explanation": "Locked Rotor Amperage is the current a compressor demands for the instant it starts, and it is stamped on the air conditioner's data plate. That figure, not the BTU rating, is the sizing number for a soft start, because published typical ranges disagree and two units with the same BTU label can differ widely. A kit that quotes an amp threshold or a model fit can be checked against that plate, while a kit that says it fits all RV air conditioners cannot be checked at all. Read the plate on the roof unit, write the LRA down, then compare it to the listing's stated threshold."
  },
  {
    "criterion": "What a startup-reduction figure really means",
    "explanation": "The 60 to 75 percent figures on these listings describe how much lower the starting surge becomes compared with the compressor's locked-rotor current. They are the maker's claims, and the result you see depends on your unit and your supply. Because it lowers startup draw only, a soft start will not make a small generator carry an air conditioner that could never run continuously. Compare the generator size a listing names against the running wattage of your own unit before trusting the reduction to bridge the gap."
  },
  {
    "criterion": "Whether your air conditioner already has one",
    "explanation": "Some newer rooftop air conditioners ship with soft start built into the compressor control, which makes an aftermarket module a wasted outlay. Inverter-driven units are a separate case, because the TURBRO listing, for one, is aimed at non-inverter air conditioners. Look up your exact model number in its manual or the maker's spec sheet and search for the words soft start or inverter before ordering anything. If the model already limits inrush, the money is better spent on a larger generator or battery bank."
  },
  {
    "criterion": "One device per air conditioner",
    "explanation": "Each module is wired to a single compressor, so a two-air-conditioner rig needs two modules, one per roof unit. The dual-AC claims in the Aoteda and TURBRO listings describe two units each fitted with its own module sharing a 30 amp inlet, and they depend on nothing else running at the same moment. Count your roof units first and plan the shopping list around that count. Skipping this step leaves one compressor starting hard, and that one can still trip the shared breaker."
  },
  {
    "criterion": "Installation effort and warranty exposure",
    "explanation": "Installation is an in-line wiring job in the rooftop unit's control box, and the package decides whether it takes twenty minutes or an afternoon. Pre-wired harnesses and pre-crimped terminals remove the fiddly work, while bare leads assume you can splice and crimp correctly. Whether installing it affects the air conditioner's own warranty depends on that manufacturer's terms, and the MACH Coleman Kit is the one listing here that addresses it directly. Read the warranty paperwork before cutting into any factory wiring."
  },
  {
    "criterion": "Weatherproofing for a roof life",
    "explanation": "The module sits in a control box exposed to sun, rain, road vibration and temperature swings, so a vague claim of weatherproof design deserves less trust than a published rating. IP67 cables, a dual IPX5 shell with an epoxy-sealed board, and a stated temperature window are all things you can compare across listings. A module without a rating is not necessarily poor, but it gives you nothing to hold the seller to if it fails in its first summer. Look for the rating in the specifications rather than in a marketing headline."
  }
];

export const faq = [
  {
    "q": "Is a soft start the same as a surge protector?",
    "a": "No. A soft start reduces the current surge when the compressor starts, while a surge protector guards against voltage spikes and wiring faults in the supply. Low voltage, an open neutral or a miswired pedestal are all beyond a soft start's reach. Many owners fit both, because they protect against different problems."
  },
  {
    "q": "Will a soft start let a small generator run my air conditioner?",
    "a": "It lowers the starting demand, which is what stalls small generators, so it can bring a unit within reach of a 2,200 watt generator as the Mtsooning Kit and HQPASFY Soft Start listings describe. It does not reduce the running draw. If the air conditioner could never run continuously on that generator, the soft start will not change that."
  },
  {
    "q": "How do I find my air conditioner's LRA?",
    "a": "Look for the data plate on the roof unit or on its housing, where the compressor's Locked Rotor Amperage is printed beside the rated load amps. If the plate is hard to reach, the model number lets you find the same figure in the manufacturer's manual. Write it down before you shop, then compare it with each listing's stated threshold."
  },
  {
    "q": "Do I need one module for each air conditioner?",
    "a": "Yes. Each module is wired to a single compressor, so a rig with two roof units needs two kits. The dual-AC claims in the TURBRO Soft Start and Aoteda Soft Start listings assume each unit has its own module and that nothing else heavy is running at the same time."
  },
  {
    "q": "Is the Mtsooning Kit good enough, or is the step up worth it?",
    "a": "For one non-inverter roof unit that you have matched to the LRA, the Mtsooning Kit covers the essentials with IP67 cables and pre-crimped terminals. The step up pays for fit certainty or convenience: the Aoteda Soft Start for a wiring diagram and manual in the box, or the MACH Coleman Kit for series-specific fit and warranty language."
  },
  {
    "q": "Could installing one void my air conditioner warranty?",
    "a": "It depends on the air conditioner maker's terms, which differ between brands. The MACH Coleman Kit listing states that installation will not adversely affect the existing Coleman-Mach warranty. For any other combination, read your air conditioner's warranty paperwork or ask the maker before cutting into the wiring."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "href": "/power-electrical/best-budget-hardwired-soft-start-for-rv-ac",
    "title": "Best Budget Hardwired Soft Start for RV AC"
  },
  {
    "href": "/power-electrical/best-budget-soft-start-for-13500-btu-rv-ac",
    "title": "Best Budget Soft Start for 13500 BTU RV AC"
  },
  {
    "href": "/power-electrical/best-budget-soft-start-for-15000-btu-rv-ac",
    "title": "Best Budget Soft Start For 15000 Btu Rv Ac"
  }
];
