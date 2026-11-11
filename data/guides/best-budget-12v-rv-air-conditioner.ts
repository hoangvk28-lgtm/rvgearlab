export const guideSlug = "best-budget-12v-rv-air-conditioner";
export const guideTitle = "6 Best Budget 12V RV Air Conditioners in 2026";
export const metaTitle = "Best Budget 12V RV Air Conditioner (2026)";
export const metaDescription = "Six budget 12V DC RV air conditioners compared on real amp draw, stated battery runtime, cooling output, noise and install type for off-grid campers.";
export const mainKeyword = "best budget 12v rv air conditioner";
export const introParagraphs = [
  "A 12V air conditioner promises the thing off-grid campers want most: cooling that runs from the house battery with no generator and no inverter. The reality sits in the amps. Watts divided by 12 gives the current the battery must supply, and a unit that looks modest at 600 watts is pulling about 50 amps, which is a serious load for any bank and for the cables that feed it. Plenty of budget listings skip that math entirely, and the buyer discovers the truth at two in the morning when the low-voltage alarm sounds.",
  "That is why this comparison is organized around draw and runtime, not just BTU. Every listing below states some mix of wattage, rated current, a runtime on a named battery size, or a low-voltage cutoff, and those numbers let you work out whether your system can carry the unit through a night. Where a listing leaves a number out, we say so as a buying tip rather than guessing. That approach rewards makers who publish their specs and exposes those who only publish adjectives, which is exactly what a battery-bound buyer needs to see.",
  "We evaluated six units from the cheapest split system to a gasketed rooftop unit with a long runtime claim, reading each listing for capacity, draw, noise and mounting, and we kept a running tally of which numbers each maker actually publishes. Each pick is placed against its neighbors on price, with the mechanism behind each step up spelled out, so you can see which off-grid camper should stop at the low end and which should pay for a more complete package. The cheapest option is not automatically the most economical once cable, fuse and battery costs enter the picture, and that is why we compare the whole system, not just the unit."
];
export const lastUpdated = "2026-10-02";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41hObg9Wm3L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-budget-12v-rv-air-conditioner-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Gidrox 10000 BTU 12V DC RV Air Conditioner, Battery Powered, Low Power Consumption, Ultra Quiet, Fast Cooling",
    "price": "$799.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hObg9Wm3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWGPP643?tag=rvgearlab-amz-20",
    "description": "The Gidrox Cooling unit delivers up to 10,000 BTU from a 12V DC rooftop body that uses inverter technology, so it needs no separate inverter. The listing quotes an average night draw of about 350 watts, which works out to roughly 29 amps from a 12V bank, a figure that is easy to plan around.\n\nIt runs at 40 dB in Sleep mode with a brushless fan and sound-insulation design, and it weighs 54 pounds, with all mounting hardware and a 19.7 foot power cable included. Control comes through a Bluetooth app, infrared remote or the physical panel, which gives three ways to adjust it from bed. The unit cools the cabin without drawing on shore power at any point, which suits remote camps.\n\nSitting just below the heated Gidrox on price, it is the lowest-cost version of this design that still carries the quoted low draw, and the saving comes from leaving the heater element out. It suits owners who live in warm country and want 12V cooling that a mid-size lithium bank can sustain through the night without a generator.",
    "specs": [
      "10,000 BTU, 12V DC inverter",
      "About 350W night draw quoted",
      "40 dB Sleep mode, 54 lbs"
    ],
    "pros": [
      "Quoted night draw near 29 amps",
      "40 dB Sleep mode for quiet nights",
      "Includes hardware and a 19.7 foot cable",
      "App, remote and panel controls"
    ],
    "cons": [
      "No heater built in, cooling alone",
      "Draw figure applies to night conditions"
    ],
    "bestFor": "Boondockers who want a quoted low draw and a quiet 12V rooftop unit."
  },
  {
    "id": "best-budget-12v-rv-air-conditioner-2",
    "rank": 2,
    "badge": "Best With Heat",
    "name": "Gidrox 10000 BTU 12V DC RV Air Conditioner with Heater, Battery Powered, Low Power Consumption, Ultra Quiet",
    "price": "$819.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hObg9Wm3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWGP3D2G?tag=rvgearlab-amz-20",
    "description": "The Gidrox Heater shares the cooling side of the Gidrox Cooling unit and adds PTC heating that the listing says delivers warmth quickly, even on below-freezing mornings. It still runs directly from the 12V battery with no inverter, and the same quoted night draw of about 350 watts applies to its cooling operation, which keeps the planning math identical for both Gidrox units.\n\nThe 40 dB Sleep mode, 54 pound body, mounting hardware and 19.7 foot cable carry over from the cooling version, along with the app, remote and panel controls. It is a small step up from the Gidrox Cooling version on price, and what the money buys is the instant heating element that the cooler sibling does not carry.\n\nPick it for a camper who stays out from spring through fall and wants one 12V box instead of leaning on a furnace for chilly starts. Because it shares the inverter design of its sibling, the draw planning stays the same, and the PTC element takes over when the thermostat calls for warmth, so the furnace and its fan can stay off.",
    "specs": [
      "10,000 BTU, 12V DC with PTC heat",
      "About 350W night draw quoted",
      "40 dB Sleep mode, 54 lbs"
    ],
    "pros": [
      "PTC heater warms cool mornings quickly",
      "Shares the quoted low cooling draw",
      "App, remote and panel controls",
      "Hardware and power cable included"
    ],
    "cons": [
      "Costs more than the cooling-only version",
      "Heater draw is not stated on the listing"
    ],
    "bestFor": "Four-season boondockers who want PTC heat from the same 12V unit."
  },
  {
    "id": "best-budget-12v-rv-air-conditioner-3",
    "rank": 3,
    "badge": "Best Runtime Claim",
    "name": "OutEquip RV Air Conditioner, 12V 10000 BTU Rooftop Air Conditioner for RVs, Trucks, Vans, Campers",
    "price": "$895.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/219s7r9dm5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DWDMPL3S?tag=rvgearlab-amz-20",
    "description": "The OutEquip 10000 is a 12V, 10,000 BTU rooftop air conditioner powered directly from the vehicle or house system. The listing states eight hours of cooling from a 480Ah source and ten hours from a 600Ah source while parked, which is the clearest bank-to-runtime pairing in this group and the easiest one to turn into a battery shopping list.\n\nUV-stabilized ABS, an EPDM foam gasket and a zinc-coated condenser protect it from sun and rain, while brushless copper motor fans, spring-supported mounts and a directional duct keep noise and vibration down. Remote control, temperature monitoring and Eco, Sleep and Turbo modes cover the daily settings, so you can trade speed for battery life with a button.\n\nAs the priciest pick in this guide, it charges a step up that pays for the weatherproof build and a runtime statement you can plan a battery around, which is useful when you are buying lithium cells by the amp-hour. It fits an owner who wants a conservative 12V unit with a documented bank size rather than the lowest possible draw, and who values a gasketed housing that will sit under sun and rain for many seasons.",
    "specs": [
      "10,000 BTU, 12V DC",
      "8 hours on 480Ah, 10 on 600Ah",
      "UV ABS, zinc condenser"
    ],
    "pros": [
      "Runtime stated for 480Ah and 600Ah banks",
      "Weatherproof gasket and coated condenser",
      "Spring mounts reduce roof vibration",
      "Eco, Sleep and Turbo modes"
    ],
    "cons": [
      "Most expensive pick in this guide",
      "Implies a large draw on the bank"
    ],
    "bestFor": "Owners sizing a bank to a clear eight to ten hour runtime claim."
  },
  {
    "id": "best-budget-12v-rv-air-conditioner-4",
    "rank": 4,
    "badge": "Best Mid-Range Pick",
    "name": "Tyoyfong 12V RV Air Conditioner 10200 BTU Non-Ducted, 2-in-1 RV Rooftop Air Conditioner for Heater and Cooling",
    "price": "$687.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YmLyHuq9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GTY66NCW?tag=rvgearlab-amz-20",
    "description": "The Tyoyfong 10200 is a non-ducted 12V rooftop air conditioner and heater rated at 10,200 BTU, built around a high-performance scroll inverter compressor that the maker says offers steadier performance and better durability. A scroll design with inverter control runs smoothly at variable speeds, which suits the steady, modest draw a battery bank prefers over repeated hard starts that spike the current.\n\nNoise is listed at 50 decibels, the shell is high-strength ABS built to resist deformation and UV, and the unit fits a standard 14 by 14 inch roof vent. The minimum opening is a generous 8.86 by 11.8 inches, so it can drop into an existing cutout without a new hole in the roof. That generous range also helps owners who are replacing an older vent. A heating mode in the same unit adds shoulder-season use and spares the propane furnace on mild mornings.\n\nIt sits mid-pack on price, a step below the Gidrox pair, and the money goes to the scroll inverter compressor and the 2-in-1 heating and cooling layout. Camper owners wanting scroll compressor quality and heating at a middle price will find enough capacity for a mid-size cabin and a standard roof vent that most rigs already have.",
    "specs": [
      "10,200 BTU cool and heat, 12V",
      "Scroll inverter compressor",
      "50 dB, standard 14 inch vent"
    ],
    "pros": [
      "Scroll inverter compressor runs smoothly",
      "Heating and cooling in one unit",
      "Fits standard 14 inch roof vents",
      "UV-resistant, high-strength ABS shell"
    ],
    "cons": [
      "Listing gives no amp draw figure",
      "50 dB sits above the quietest picks"
    ],
    "bestFor": "Mid-size campers wanting a scroll inverter unit with heating."
  },
  {
    "id": "best-budget-12v-rv-air-conditioner-5",
    "rank": 5,
    "badge": "Most Transparent Specs",
    "name": "Aspligo 12v Rooftop RV Air Conditioner 9000BTU 12v DC Air Conditioner with Heat 12 Volt AC Unit",
    "price": "$519.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/314iWAi2zdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GY3X1PJT?tag=rvgearlab-amz-20",
    "description": "The Aspligo 9000 publishes the numbers other listings skip: 9000 BTU of cooling at about 2300 watts of cooling power, 4500 BTU of heating at about 1000 watts, a power consumption of 750 watts and a rated current of 30 to 62 amps. Those figures let a buyer size cables and a battery bank with confidence.\n\nA DC variable-frequency compressor paired with a 200Ah lithium battery is described as running eight to ten hours in ECO mode overnight, which works out to an average near 240 to 300 watts. Built-in voltage monitoring protects the battery with a 12V cutoff point around 10.5 volts, so a long night of cooling will not quietly drain the bank below a safe level.\n\nIt sits near the entry of this shortlist on price, well below the Gidrox pair, and the thin 7 inch body keeps the roof profile low. A careful installer who wants published specs and a built-in battery protection point will like it, with a modest 9000 BTU rating that suits a compact cabin. Remote control and a quick-start layout round out the package.",
    "specs": [
      "9000 BTU, 750W consumption",
      "Rated current 30 to 62A",
      "Low-voltage protection near 10.5V"
    ],
    "pros": [
      "Publishes watts and a rated current range",
      "Built-in low-voltage battery protection",
      "Thin 7 inch body, remote included",
      "DC variable-frequency compressor"
    ],
    "cons": [
      "Lowest BTU among the rooftop units",
      "Rated current peaks near 62 amps"
    ],
    "bestFor": "Buyers who want published watts and amps to size a lithium bank."
  },
  {
    "id": "best-budget-12v-rv-air-conditioner-6",
    "rank": 6,
    "badge": "Cheapest Entry",
    "name": "Fenjidrop 12V RV Air Conditioner, 11000BTU 12 Volt AC Unit for Trucks, Campers, Vans, Split System with Remote",
    "price": "$180.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51zqeA5FHpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HJ2SRZ5L?tag=rvgearlab-amz-20",
    "description": "The Fenjidrop 11000 is a split-system 12V air conditioner rated at 11,000 BTU, with 2200 to 2400 watts of cooling power and airflow between 250 and 450 cubic meters per hour. It operates at 400 to 600 watts, a draw of roughly 33 to 50 amps, and the maker describes it as suited to vehicles with 1000W generators and 100Ah-plus batteries.\n\nA sturdy iron casing, an aluminum condenser and a plastic liner make up the body, with external dimensions of 47 by 28 by 38 centimeters, a compact footprint for tight van and truck spaces. A remote, five speed settings, a digital display and low-voltage protection at 11 volts round out the controls, so the unit guards your battery while you sleep.\n\nAs the entry pick of the guide, it costs a fraction of the rooftop units, which is the mechanism of the saving: a split layout with a separate indoor part rather than a self-contained roof box. It fits vans, truck campers and trailers where the buyer wants the lowest cost and can handle a split install. The compact casing also leaves more flexibility about where the indoor and outdoor pieces sit.",
    "specs": [
      "11,000 BTU split system, 12V",
      "400 to 600W operating draw",
      "47 by 28 by 38 cm body"
    ],
    "pros": [
      "Lowest cost entry into 12V cooling",
      "Published 400 to 600W operating draw",
      "Remote, display and five fan speeds",
      "Low-voltage protection at 11 volts"
    ],
    "cons": [
      "Split install is more involved than a roof drop-in",
      "Brand and build details are thin"
    ],
    "bestFor": "Tight-budget owners of vans and trucks comfortable with a split install."
  }
];

export const howWeEvaluated = [
  {
    "title": "Draw and amp math",
    "description": "We converted every stated wattage to amps by dividing by 12 and compared it to the bank sizes the makers quote. Listings that publish watts or a rated current scored ahead of those that rely on adjectives. This is an editorial assessment based on product specs."
  },
  {
    "title": "Runtime claims against bank size",
    "description": "Each runtime claim was checked that it names a battery size, since hours without a bank size mean little. Pairs such as eight hours on 480Ah are checkable arithmetic, while vague promises earned less credit. We also noted whether a unit's mode is stated."
  },
  {
    "title": "Compressor and efficiency",
    "description": "We separated scroll, rotary and variable-frequency compressors and inverter control from fixed-speed designs. Variable-speed designs ease the load on a bank. We did not credit efficiency claims that offer no number."
  },
  {
    "title": "Battery protection and wiring",
    "description": "We looked for low-voltage cutoffs, such as 10.5 volts on the Aspligo and 11 volts on the Fenjidrop, and for included cable. A cutoff protects the bank from deep discharge. Cable and hardware inclusion counted for DIY owners."
  },
  {
    "title": "Price position inside the shortlist",
    "description": "Each step up in cost across the six units is tied to a mechanism, such as a split layout or a heater. Cheaper units made the cut only if their stated specs held up. Our wider approach is on the How We Review page."
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
    "subheading": "By Battery Bank Size",
    "intro": "The bank you already own is the first filter for a 12V unit.",
    "table": {
      "headers": [
        "Your bank",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "About 100Ah, short runs",
          "Fenjidrop 11000",
          "Designed around 100Ah-plus batteries"
        ],
        [
          "200Ah lithium",
          "Aspligo 9000",
          "Quotes eight to ten hours on 200Ah in ECO"
        ],
        [
          "Mid-size lithium bank",
          "Gidrox Cooling",
          "Quoted draw near 350 watts at night"
        ],
        [
          "480Ah or 600Ah bank",
          "OutEquip 10000",
          "Runtime stated on both bank sizes"
        ],
        [
          "Mid bank, want heating",
          "Tyoyfong 10200",
          "Scroll inverter with 2-in-1 heat"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "Where each pick sits in the shortlist, and what the money buys.",
    "table": {
      "headers": [
        "Price band",
        "Recommended pick",
        "What the money buys"
      ],
      "rows": [
        [
          "Entry of this shortlist",
          "Fenjidrop 11000",
          "Lowest cost with a split layout"
        ],
        [
          "Entry of this shortlist",
          "Aspligo 9000",
          "Published watts and a battery cutoff"
        ],
        [
          "Mid of this shortlist",
          "Tyoyfong 10200",
          "Scroll inverter compressor and heat"
        ],
        [
          "Top of this shortlist",
          "Gidrox Cooling",
          "Quoted low draw and 40 dB sleep"
        ],
        [
          "Top of this shortlist",
          "OutEquip 10000",
          "Weatherproof build and a clear runtime"
        ]
      ]
    }
  },
  {
    "subheading": "Rooftop vs Split System",
    "intro": "Layout affects cost, install effort and where the unit can go.",
    "cards": [
      {
        "label": "Rooftop unit",
        "text": "The Gidrox Cooling, Gidrox Heater, OutEquip 10000, Tyoyfong 10200 and Aspligo 9000 are self-contained boxes that drop into a roof opening."
      },
      {
        "label": "Split system",
        "text": "The Fenjidrop 11000 separates indoor and outdoor parts, costing noticeably less but demanding a more involved install."
      }
    ],
    "note": "Choose a rooftop box such as the Gidrox Cooling for a simple install, or the Fenjidrop 11000 to save money."
  },
  {
    "subheading": "By Heating Need",
    "intro": "A built-in heater changes how many months the unit earns its place.",
    "table": {
      "headers": [
        "Your season",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Summer only",
          "Gidrox Cooling",
          "Cooling-focused design with a low quoted draw"
        ],
        [
          "Spring through fall",
          "Gidrox Heater",
          "PTC heat for cool mornings"
        ],
        [
          "Mild shoulder seasons",
          "Tyoyfong 10200",
          "2-in-1 heating and cooling"
        ],
        [
          "Thin roof profile and heat",
          "Aspligo 9000",
          "4500 BTU heating in a 7 inch body"
        ]
      ]
    }
  },
  {
    "subheading": "For Off-Grid Boondocking Specifically",
    "intro": "Boondocking rewards stated numbers and battery protection.",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated draw, a runtime tied to a named bank size, a low-voltage cutoff and included cable, as with the Aspligo 9000."
      },
      {
        "label": "In this comparison",
        "text": "The Aspligo 9000 publishes rated current, the OutEquip 10000 states runtime on two banks, and the Gidrox Cooling quotes its night draw."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "Spending more helps just when it buys draw clarity or build.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want a documented runtime and a weatherproof shell from the OutEquip 10000, or a quoted low draw and app from the Gidrox Cooling."
      },
      {
        "label": "Save if",
        "text": "You have a modest van and a careful install in mind, where the Fenjidrop 11000 or Aspligo 9000 already do the job."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Amps, not BTU, set the real load",
    "explanation": "BTU describes cooling output, but the battery cares about amps, and watts divided by 12 gives that number. A 350 watt unit pulls about 29 amps, a 750 watt unit about 62 amps, so two units with similar BTU can load a bank very differently. Look for a stated wattage or rated current, as the Gidrox and Aspligo listings give. A listing with no draw figure leaves you guessing, so ask the seller before buying."
  },
  {
    "criterion": "Battery chemistry and usable capacity",
    "explanation": "A 480Ah bank holds about 5,760 watt-hours, and eight hours of cooling from it implies an average draw near 720 watts. Lead-acid banks should not be drained fully, so their usable share is much smaller than lithium, which tolerates deep discharge. Read the runtime claim against the chemistry you own. A bank half the size of the one in the claim gets about half the runtime."
  },
  {
    "criterion": "Cables, fuses and the 30 to 60 amp reality",
    "explanation": "A load that peaks near 62 amps needs heavy cable, a correctly rated fuse and short runs, because voltage drop in thin wire starves the compressor. The Aspligo's published rated current helps an installer choose wire size. A unit that hides its draw makes that choice a guess. Compressors also draw a surge at startup. Plan the wiring as carefully as the unit."
  },
  {
    "criterion": "Low-voltage cutoff",
    "explanation": "A cutoff shuts the unit off before the battery sinks too low, which protects expensive lithium or preserves a lead-acid bank's life. The Aspligo lists a point near 10.5 volts and the Fenjidrop lists 11 volts. A unit with no stated cutoff can run a bank flat. Check the number against your battery management system."
  },
  {
    "criterion": "Inverter and scroll compressors",
    "explanation": "A variable-speed compressor eases back once the cabin cools, which keeps the average draw lower than a fixed-speed design. The Tyoyfong lists a scroll inverter compressor, and the Gidrox lists inverter technology. A cheaper rotary compressor can still work, but it tends to run harder. The compressor type predicts how long the bank lasts."
  },
  {
    "criterion": "Rooftop versus split layouts",
    "explanation": "A rooftop unit is one self-contained box that drops into a roof opening, while a split system like the Fenjidrop separates the indoor and outdoor parts. The split layout costs less and can fit unusual bodies, but the install is more involved. Decide which your rig allows before comparing price. A layout your body cannot accept makes the saving irrelevant."
  }
];

export const faq = [
  {
    "q": "How many amps does a 12V RV air conditioner really draw?",
    "a": "Divide watts by 12. A unit listed at 350 watts draws about 29 amps, a 600 watt unit about 50 amps, and the Aspligo's 750 watts is about 62 amps. These are large loads, so size cables, fuses and the bank accordingly."
  },
  {
    "q": "Can I run one all night on a 200Ah battery?",
    "a": "The Aspligo listing says eight to ten hours on a 200Ah lithium battery in ECO mode, which implies an average of roughly 240 to 300 watts. Higher modes draw more and cut the runtime. Lead-acid banks will not deliver that, since they should not be fully drained."
  },
  {
    "q": "Is a 12V unit better than a 115V unit with an inverter?",
    "a": "A 12V unit avoids inverter conversion losses and extra equipment, which saves watts. A 115V unit costs less per BTU but needs a large inverter and surge capacity. For off-grid use, a pure 12V design is simpler."
  },
  {
    "q": "Why is the Fenjidrop so much cheaper?",
    "a": "It is a split system with separate indoor and outdoor parts, which costs less to make than a self-contained roof unit. The install takes more work, and the listing offers fewer details than the Gidrox pair. It fits tight budgets and handy owners. Expect to spend extra time on the install, and check the wiring and mounting before you commit."
  },
  {
    "q": "Do I need a low-voltage cutoff?",
    "a": "Yes, it protects your battery. The Aspligo lists a point near 10.5 volts and the Fenjidrop 11 volts. If a unit has none, check that your battery management system will disconnect safely."
  },
  {
    "q": "Is the Gidrox Heater worth the extra money?",
    "a": "It is worth it if you camp in cool weather, because the PTC heater warms the cabin quickly and spares the furnace. For summer-only use, the Gidrox Cooling costs a little less and cools the same way. The planning math for the battery is identical on both."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "href": "/interior-comfort/best-budget-48v-rv-air-conditioner",
    "title": "Best Budget 48V RV Air Conditioner"
  },
  {
    "href": "/interior-comfort/best-budget-energy-efficient-rv-air-conditioner",
    "title": "Best Budget Energy Efficient RV Air Conditioner"
  },
  {
    "href": "/interior-comfort/best-budget-rv-air-conditioner-for-small-rv",
    "title": "Best Budget RV Air Conditioner for a Small RV"
  }
];
