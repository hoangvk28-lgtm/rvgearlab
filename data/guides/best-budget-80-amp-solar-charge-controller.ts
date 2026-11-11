export const guideSlug = "best-budget-80-amp-solar-charge-controller";
export const guideTitle = "5 Best Budget 80 Amp Solar Charge Controllers in 2026";
export const metaTitle = "Best Budget 80 Amp Solar Charge Controllers";
export const metaDescription = "Five budget 80 amp solar charge controllers sized as a whole-system decision: bank voltage, cable, PV input limits, paralleling and MPPT versus PWM.";
export const mainKeyword = "best budget 80 amp solar charge controller";
export const introParagraphs = [
  "Eighty amps is a system decision long before it is a shopping decision. At 12 volts the rating supports about 1,000 watts of panels, at 24 volts about 2,000 and at 48 volts about 4,000, and the cable, fuse and busbar around the controller all have to be sized for that current. Owners who buy an 80 amp unit for a 400 watt roof are paying for headroom they will never use, while owners with a 24 or 48 volt bank and a big array are exactly the people it was built for.",
  "That framing explains where the money goes in this price range. The units here share a common job, pushing up to 80 amps into the bank, and differ in how they handle high panel voltage, how they talk to a lithium battery, and whether a second unit can be added later. A budget 80 amp controller is a heavy piece of hardware at a light price, so the real cost often sits in the cabling, the fusing and the mounting rather than in the box itself, and that cost deserves a line in the plan.",
  "We ranked five listings that each state an 80 amp rating, including one honest PWM unit alongside the MPPT models so the technology choice stays visible. The ordering favors published input limits and expansion options over screen size or accessory ports. Pick by your bank voltage first and your array wattage second, and only then by the finish of the enclosure or the number of extras that come in the box. A listing that leaves a spec out is flagged in the cons so you know what to ask before ordering."
];
export const lastUpdated = "2026-10-02";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/31CjB8kwRbL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-budget-80-amp-solar-charge-controller-1",
    "rank": 1,
    "badge": "Best Overall Value",
    "name": "PowMr 80A MPPT Solar Charge Controller 12V 24V 36V 48V Auto, Max 150V PV Input, Solar Controller 80 Amp with DSP Control & LCD Display, for Home RV Off-Grid System",
    "price": "$84.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31CjB8kwRbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H28L1V6Z?tag=rvgearlab-amz-20",
    "description": "This PowMr takes a 150V maximum PV input and auto-detects 12V, 24V, 36V and 48V banks, with an 80 amp rated charge current behind it. That combination covers everything from a big 12V roof to a 48V off-grid cabin with one unit, and a DSP control chip handles the tracking and the charging logic, so the same hardware serves a rig now and a cabin later.\n\nIt lists 99.9% tracking efficiency and dedicated charging profiles for LiFePO4 as well as lead-acid batteries, and the three-stage routine runs bulk, boost and float. Eight layers of protection cover overload, overheating, short circuits and reverse polarity, which matters at a current that can melt a badly crimped lug and damage expensive batteries in a single bad moment.\n\nA built-in LCD shows live system data and a button interface sets the battery type, so setup does not depend on a phone or a laptop. It undercuts the EPEVER 80A on price while keeping the same 150V ceiling, which makes it the sensible default for an owner who wants high-voltage strings, plain operation and a screen they can read from across the bay.",
    "specs": [
      "80A MPPT, 150V max PV input",
      "12V/24V/36V/48V auto-detect",
      "LCD with button setup, DSP control"
    ],
    "pros": [
      "150V ceiling supports long series strings",
      "Auto-detects banks from 12V to 48V",
      "Dedicated LiFePO4 charging profile",
      "Eight protection layers for a high-current unit"
    ],
    "cons": [
      "Three-stage routine skips equalization",
      "No app or communication port is listed",
      "Display needs buttons to change settings"
    ],
    "bestFor": "Large RV or cabin arrays on a 24V or 48V bank at a modest price."
  },
  {
    "id": "best-budget-80-amp-solar-charge-controller-2",
    "rank": 2,
    "badge": "Best for Lithium Banks",
    "name": "EPEVER 80A MPPT Solar Charge Controller, 12V 24V 48V, LiFePO4, Off-Grid, 150V max PV (size to 100V), solar controller for off grid RV cabin boat",
    "price": "$179.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/210OarEjEXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FZZWFJK4?tag=rvgearlab-amz-20",
    "description": "EPEVER's 80A auto-recognizes 12V, 24V and 48V banks and offers lithium selections such as an LFP4S setting for a 12V LiFePO4 pack. It accepts 150V of PV input and lists array sizes of 1,040W at 12V, 2,080W at 24V and 4,160W at 48V, so the sizing arithmetic is done for you and a roof layout can be planned on paper.\n\nBuilt-in BMS and RS485 ports talk to lithium batteries and to BMS-Link, WiFi or Bluetooth dongles, and a built-in CAN bus parallels up to six identical units. Few controllers at this level offer communication and expansion together, which is the reason it works as the foundation of a lithium system that is expected to grow over several seasons.\n\nTerminals take cable up to 4 AWG, and a two-chamber design keeps the electronics out of the cooling airstream and away from dust. The listing advises sizing the string by open-circuit voltage and keeping it at or below 100V for cold mornings, which is the sort of guidance that protects a controller and shows the maker expects it to be installed on real roofs.",
    "specs": [
      "80A MPPT, 150V max PV, size to 100V",
      "1,040W at 12V, 4,160W at 48V",
      "RS485 and CAN, up to 6 in parallel"
    ],
    "pros": [
      "Talks to lithium BMS over RS485",
      "CAN bus parallels up to six units",
      "Two-chamber design keeps dust off electronics",
      "Clear cold-morning Voc sizing guidance"
    ],
    "cons": [
      "Costs the most in this guide",
      "Handles 12V, 24V and 48V, not 36V",
      "Dongles for WiFi or Bluetooth are separate"
    ],
    "bestFor": "Lithium off-grid rigs that need BMS communication and a path to expand."
  },
  {
    "id": "best-budget-80-amp-solar-charge-controller-3",
    "rank": 3,
    "badge": "Best for Expansion",
    "name": "PowMr 80A MPPT Solar Charge Controller, 12V 24V 36V 48V Auto, Solar Controller PV Input Max 160V, Supports up to 12 Parallel Connections",
    "price": "$105.44",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/314A1lfSpFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CYP8DSMZ?tag=rvgearlab-amz-20",
    "description": "This PowMr lists a 160V maximum PV input, the highest ceiling among the five, along with support for up to 12 units connected in parallel. A buyer can therefore begin with one 80 amp controller and add more as the array and the bank grow, instead of replacing the first controller. That makes the starting purchase a foundation rather than a dead end.\n\nIt auto-detects 12V, 24V, 36V and 48V banks and supports lead-acid, sealed, gel, AGM, flooded and lithium batteries plus user-defined settings. Three charge modes, bulk, boost and float, are built in, and the listing gives recommended input power for each bank voltage so strings can be sized in advance, long before the panels are bolted to the roof.\n\nParallel capability changes how an 80 amp rating works in practice, because 160 amps of charge current is simply two units sharing one bank. It sits mid-pack on price, below the EPEVER 80A, and suits the owner who expects the system to grow to several times its starting size over a couple of seasons without a full rewiring job.",
    "specs": [
      "80A MPPT, 160V max PV input",
      "Up to 12 units in parallel",
      "12V/24V/36V/48V, user battery mode"
    ],
    "pros": [
      "Highest PV ceiling of the five picks",
      "Up to 12 units can run in parallel",
      "Auto-detects 12V through 48V banks",
      "Supports lithium and user-defined profiles"
    ],
    "cons": [
      "Three-stage routine only",
      "No battery communication port is listed",
      "Settings are changed through button menus"
    ],
    "bestFor": "Growing arrays where a second or third controller is already in the plan."
  },
  {
    "id": "best-budget-80-amp-solar-charge-controller-4",
    "rank": 4,
    "badge": "Cheapest MPPT Entry",
    "name": "AuraSolar 80A MPPT Solar Charge Controller 12V 24V 36V 48V Auto, 80 Amp Solar Controller with LCD Display, Dual USB Port & Timer, for Home RV Off-Grid System",
    "price": "$29.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fzzpl7uKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GS98MB3C?tag=rvgearlab-amz-20",
    "description": "The AuraSolar 80A is the least expensive MPPT unit in the guide, listing 99.9% tracking efficiency and auto-detection of 12V, 24V, 36V and 48V banks. It includes dedicated charging profiles for LiFePO4 along with lead-acid types, so a lithium swap later does not mean a new controller, and the 80 amp rating leaves generous room for a growing roof.\n\nCharging runs through four stages of bulk, boost, float and equalization, which is the full lead-acid routine that the PowMr 80A 150V skips. Eight layers of protection cover overload, overheating, short circuits and reverse polarity, and an LCD with buttons sets the battery type and shows real-time data, so everything is adjustable at the controller itself.\n\nDual USB ports and a load timer round out the feature set, so the controller can also run a small light circuit or charge a phone from the same enclosure. Pick it for a first MPPT build where the goal is to prove the system works and see real charging numbers before spending on a bigger name or a more complex installation.",
    "specs": [
      "80A MPPT, 99.9% tracking listed",
      "12V to 48V auto, LiFePO4 profile",
      "Four-stage charging, dual USB, timer"
    ],
    "pros": [
      "Lowest cost way into an 80A MPPT",
      "Four-stage charging includes equalization",
      "Dual USB ports and a load timer",
      "LiFePO4 profile alongside lead-acid"
    ],
    "cons": [
      "Max PV input voltage is not in the listing",
      "No expansion or communication ports listed",
      "No dedicated lithium communication port"
    ],
    "bestFor": "Budget builds that want MPPT tracking, USB ports and a timer in one box."
  },
  {
    "id": "best-budget-80-amp-solar-charge-controller-5",
    "rank": 5,
    "badge": "Cheapest 80A Rating",
    "name": "PowMr 80A PWM Solar Charge Controller, 12V 24V 36V 48V Auto, LCD Display and Dual USB Output, Fit for AGM, Gel, FLD, Lead-Acid and Lithium Battery",
    "price": "$50.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ZWTar6X5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZ8SCC4D?tag=rvgearlab-amz-20",
    "description": "This is a PWM controller, and it says so: three-stage PWM charging with a rated 80 amp charge current and a 100V maximum PV input. Input power is listed from 960W up to 3840W depending on the bank voltage, and the unit auto-detects 12V, 24V, 36V and 48V systems, so it fits whichever bank the rest of the rig already uses.\n\nA PWM design is simpler than a tracking converter, which is why the rating arrives at a lower cost and why the controller suits a system where the panels already match the battery voltage. An LCD and two USB outputs are built in, and it works with AGM, gel, flooded, lead-acid and lithium chemistries, covering most banks.\n\nProtection covers overcharge, overload, short circuit and reverse current. For a large 12V system built from panels that are meant for a 12V battery, it delivers the amp rating at the lowest outlay in the guide, and it is the honest choice for an owner who does not want to pay for tracking and understands what a PWM design gives and what it leaves.",
    "specs": [
      "80A PWM, 100V max PV input",
      "960W to 3840W input by bank",
      "LCD plus dual USB, 12V to 48V auto"
    ],
    "pros": [
      "Cheapest way to a true 80 amp rating",
      "Labeled honestly as PWM, no sticker games",
      "LCD and dual USB outputs included",
      "Supports lead-acid and lithium batteries"
    ],
    "cons": [
      "Cannot turn extra panel voltage into amps",
      "Panel voltage must match the battery bank",
      "Cold-weather panel gains are wasted"
    ],
    "bestFor": "Panels matched to battery voltage where the lowest outlay beats tracking gains."
  }
];

export const howWeEvaluated = [
  {
    "title": "A Stated 80 Amp Rating",
    "description": "The amp figure in the title is a claim you can check, so we required each listing to state an 80 amp rating for the unit itself. One multi-rating listing that sells 60, 80 and 100 amp variants under one title was set aside, because its buyer could receive a different rating than the one in the heading. We based this on the listing text."
  },
  {
    "title": "System Sizing Figures",
    "description": "We looked for printed array sizes at each bank voltage, because 80 amps means different wattage at 12V, 24V and 48V. Listings that give the watts for each voltage earned more credit than those that only list voltage. This is the information that lets a buyer plan a roof or an off-grid shed on paper."
  },
  {
    "title": "Technology: MPPT or PWM",
    "description": "We separated tracking controllers from PWM ones and checked whether each MPPT unit publishes a PV ceiling well above battery voltage. A tracking claim with no published input voltage was recorded as an open question for the buyer. The PWM unit is included deliberately so the tradeoff is visible."
  },
  {
    "title": "Expansion and Communication",
    "description": "We noted parallel support, CAN or RS485 ports and lithium battery communication, since an 80 amp controller often anchors a system that grows. Units that can be paralleled earned credit because a second controller doubles the charge current without replacing the first. We evaluated these features from product specs."
  },
  {
    "title": "Value Within This Shortlist",
    "description": "We placed each pick in a price band and asked what each step up buys: PV voltage headroom, communication, expansion or a better build. Price figures were used for ordering only and never to claim a saving. The answer decides who should stop at the entry units and who should pay for the top of the shortlist."
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
    "subheading": "By Bank Voltage and Array Wattage",
    "intro": "An 80 amp rating supports very different arrays depending on bank voltage, so match the pick to the voltage you actually run.",
    "table": {
      "headers": [
        "Your system",
        "Best pick",
        "Why"
      ],
      "rows": [
        [
          "A 12V RV with a large 1,000W roof",
          "PowMr 80A 150V",
          "150V ceiling and 12V detection at a modest price"
        ],
        [
          "A 24V or 48V off-grid cabin that may grow",
          "EPEVER 80A",
          "Lists 2,080W at 24V and 4,160W at 48V"
        ],
        [
          "An array you will double within two seasons",
          "PowMr 80A Parallel",
          "Up to 12 units can run in parallel"
        ],
        [
          "A first MPPT build on a tight budget",
          "AuraSolar 80A",
          "Lowest cost MPPT with a LiFePO4 profile"
        ],
        [
          "Panels already matched to a 12V bank",
          "PowMr 80A PWM",
          "PWM delivers the rating at the lowest outlay"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "The price spread across these five is wide, and the steps up buy PV headroom, communication and expansion rather than more amps.",
    "table": {
      "headers": [
        "Budget band",
        "Best pick",
        "What it buys"
      ],
      "rows": [
        [
          "Entry of this shortlist",
          "AuraSolar 80A",
          "The cheapest MPPT with four-stage charging and USB ports"
        ],
        [
          "Low-mid of this shortlist",
          "PowMr 80A PWM",
          "A genuine 80A rating with simple PWM control"
        ],
        [
          "Mid of this shortlist",
          "PowMr 80A 150V",
          "A 150V PV ceiling and eight protection layers"
        ],
        [
          "Upper-mid of this shortlist",
          "PowMr 80A Parallel",
          "A 160V ceiling and parallel support for growth"
        ],
        [
          "Top of this shortlist",
          "EPEVER 80A",
          "BMS communication, CAN paralleling and heat design"
        ]
      ]
    }
  },
  {
    "subheading": "One Big Controller vs Parallel Units",
    "intro": "Charge current can come from one large controller or from several that share a bank, and each route suits a different growth plan.",
    "cards": [
      {
        "label": "One 80A unit now",
        "text": "The PowMr 80A 150V and AuraSolar 80A are fine when the array is fixed and the bank is sized to match. There is less wiring, one display and a single point of failure to watch."
      },
      {
        "label": "Parallel units over time",
        "text": "The EPEVER 80A parallels up to six identical controllers over CAN, and the PowMr 80A Parallel lists up to 12 units. Start with one and add another when the roof or bank grows, without replacing the first."
      }
    ],
    "note": "Pick the PowMr 80A 150V for a fixed system, or the EPEVER 80A when the plan is to keep adding panels."
  },
  {
    "subheading": "By Battery Chemistry and Communication",
    "intro": "Lithium banks add a second question: does the controller simply charge to a voltage, or does it talk to the battery?",
    "table": {
      "headers": [
        "What you care about",
        "Best pick",
        "Why"
      ],
      "rows": [
        [
          "Controller that reads the lithium BMS",
          "EPEVER 80A",
          "Built-in BMS and RS485 ports plus LFP selections"
        ],
        [
          "Set-and-forget LiFePO4 profile",
          "AuraSolar 80A",
          "Dedicated LiFePO4 profile with four-stage charging"
        ],
        [
          "User-defined lithium voltages",
          "PowMr 80A Parallel",
          "Supports lithium and a user battery mode"
        ],
        [
          "Lead-acid with full equalization",
          "AuraSolar 80A",
          "Four stages including equalization are listed"
        ],
        [
          "A basic lead-acid system",
          "PowMr 80A PWM",
          "Three-stage PWM suits AGM, gel and flooded banks"
        ]
      ]
    }
  },
  {
    "subheading": "For Big Rigs and Off-Grid Cabins Specifically",
    "intro": "A large fifth wheel roof and a remote cabin both push the controller harder than a weekend camper does.",
    "cards": [
      {
        "label": "Look for",
        "text": "The PowMr 80A 150V is the model case: a PV ceiling high enough for your series strings, a bank voltage that matches the inverter, and expansion options. Heavy cable and a properly sized breaker are part of the purchase, so budget for them next to the controller."
      },
      {
        "label": "In this comparison",
        "text": "The PowMr 80A 150V suits a big fifth wheel roof, the EPEVER 80A suits a cabin with a lithium bank and a growth plan, and the PowMr 80A Parallel suits an array that is still being built."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "The extra outlay in this range buys information and expansion, not extra amps, so spend only where those matter.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You run a lithium bank with a BMS, expect to add panels, or want published heat behavior. EPEVER brings communication and CAN paralleling, and the PowMr 80A Parallel brings the highest PV ceiling."
      },
      {
        "label": "Save if",
        "text": "Your array is fixed, your bank is lead-acid or simple LiFePO4, and a screen at the controller is enough. The AuraSolar 80A or PowMr 80A PWM covers that, and the saving is better spent on cable."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 80 Amps Means for the Whole System",
    "explanation": "The rating is the current flowing into the battery, so multiplying it by bank voltage gives the output ceiling. That is roughly 1,000 watts at 12 volts, 2,000 at 24 and 4,000 at 48. A 400 watt roof on a 12 volt bank will never ask for more than a third of it, which makes the larger unit expensive headroom rather than extra charging. Divide your array watts by your bank voltage to find the amps you will actually see, and buy the rating that sits comfortably above that number."
  },
  {
    "criterion": "Cable, Fuse and Terminal Sizing",
    "explanation": "Eighty amps is enough current to heat undersized cable and trip the wrong breaker, so the wiring has to be sized before the controller is chosen. Terminals matter as well, and the EPEVER 80A, for example, states that its terminals accept up to 4 AWG. Use the cable and fuse sizes in the manufacturer's manual, and keep the run between controller and battery short, because voltage drop at high current wastes charge. A cheap controller on thin cable performs like a cheap, small controller."
  },
  {
    "criterion": "MPPT or PWM at This Size",
    "explanation": "An MPPT controller converts extra panel voltage into extra charging amps, while a PWM controller drags the panel down to the battery's voltage. The gain is greatest in cold weather and when panel voltage is well above the bank. PWM can be adequate on a small array in warm sun, but at 80 amps you are usually running a larger array where tracking pays back. Read the PV input figure to tell the two apart, since a real tracking unit publishes one well above battery voltage."
  },
  {
    "criterion": "Voltage Headroom for Series Strings",
    "explanation": "Wiring panels in series raises voltage and lowers current, which allows thinner cable between roof and battery bay. The controller's maximum PV input is the hard limit on how many panels can share a string. Panel open-circuit voltage rises as temperature falls, so a string that is comfortable in summer can spike past the ceiling on a cold morning. Apply the panel's cold correction to the string's open-circuit voltage and keep the result under the stated ceiling, as the EPEVER 80A advises when it suggests sizing to 100V."
  },
  {
    "criterion": "Paralleling and Growing Later",
    "explanation": "Arrays tend to grow, and a controller that cannot be paralleled becomes a dead end when the roof or the bank expands. Some units combine through a CAN bus or an equivalent connection, and the PowMr 80A Parallel lists support for up to 12 units. Two controllers on one bank double the charge current without a rewiring project. If you expect to add panels within a couple of seasons, treat parallel support as a spec with real value."
  },
  {
    "criterion": "Heat and Derating at High Current",
    "explanation": "A controller pushing 80 amps dissipates real heat, and many derate their output when the case gets hot. EPEVER lists an automatic derate above 113F, and a two-chamber enclosure that keeps electronics out of the cooling airstream. Mount the unit on a hard surface with open space around it, never in a sealed cabinet next to the inverter. A published derating point tells you the maker has thought about hot roofs and summer bays."
  }
];

export const faq = [
  {
    "q": "Do I really need 80 amps on a 12 volt RV?",
    "a": "Usually not. Eighty amps supports about 1,000 watts of panels on a 12 volt bank, and most RV roofs carry well under that. A 40 or 60 amp unit is often enough, and the 80 amp rating makes sense when the array is large or the bank runs at 24 or 48 volts. Work out array watts over battery voltage before deciding."
  },
  {
    "q": "How heavy does the cable need to be at 80 amps?",
    "a": "Heavy enough to carry 80 amps without heating, and the exact gauge depends on the run length and the manufacturer's table. The EPEVER 80A lists terminals that accept up to 4 AWG, which gives a sense of the scale. Keep the run short and fit a breaker or fuse sized for the controller's rating."
  },
  {
    "q": "Can a PWM controller work at 80 amps?",
    "a": "Yes, as long as the panel voltage already matches the battery voltage. The PowMr 80A PWM delivers its rating that way and costs less than the MPPT units. It cannot turn extra panel voltage into extra amps, so a 24 volt panel on a 12 volt battery wastes a large share of its potential."
  },
  {
    "q": "What does size to 100V mean on the EPEVER listing?",
    "a": "The controller accepts up to 150V of PV input, but the listing advises keeping the string at 100V or under. Panels produce a higher open-circuit voltage in the cold, so a string rated at 100V in warm weather leaves room for a frosty morning. Size by the open-circuit voltage, not the operating voltage."
  },
  {
    "q": "Can two controllers share one battery bank?",
    "a": "Yes, if each one is wired to its own panels and the bank is sized for the combined current. Units with a parallel function, such as the EPEVER 80A over CAN or the PowMr 80A Parallel, coordinate their charging. Mixing unrelated controllers can work but may fight over the charging stages."
  },
  {
    "q": "What happens if my panels exceed the controller's wattage?",
    "a": "Excess watts are generally clipped, so the controller delivers its rated current and the rest is wasted. The bigger risk is exceeding the voltage ceiling, which can damage the unit. Stay under the stated PV voltage limit and treat the printed array sizes for each bank voltage as the practical maximum."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "href": "/power-electrical/best-budget-80-amp-mppt-solar-charge-controller",
    "title": "Best Budget 80 Amp MPPT Solar Charge Controller"
  },
  {
    "href": "/power-electrical/best-budget-40-amp-solar-charge-controller",
    "title": "Best Budget 40 Amp Solar Charge Controller"
  },
  {
    "href": "/power-electrical/best-budget-solar-charge-controller-with-ac-input",
    "title": "Best Budget Solar Charge Controller With Ac Input"
  }
];
