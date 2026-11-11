export const guideSlug = "best-budget-40-amp-solar-charge-controller";
export const guideTitle = "6 Best Budget 40 Amp Solar Charge Controllers in 2026";
export const metaTitle = "Best Budget 40 Amp Solar Controllers (2026)";
export const metaDescription = "Six budget 40 amp solar charge controllers for RV and camper rigs, compared on max PV input voltage, battery support, lithium profiles and monitoring.";
export const mainKeyword = "best budget 40 amp solar charge controller";
export const introParagraphs = [
  "A 40 amp controller is the size most owners reach for when a single roof grows past two or three panels. The rating describes the current delivered into the battery, so on a 12 volt bank it works out to roughly 500 to 570 watts of panels, and on a 24 volt bank about twice that. Sizing a 40 amp unit is therefore a question about your array and your bank voltage, and the number on the box answers only half of it. Everything else comes down to input voltage, chemistry support and how you read the numbers.",
  "Budget buyers can land a genuine 40 amp MPPT unit for far less than the brand-name Rover that most roof guides recommend. What the savings remove is easy to name: a rugged enclosure with published cold-weather behavior, a polished app, and in the cheapest case the high-voltage input that makes MPPT worth having. What stays is the part that does the work, a tracked charge into a 12 volt or 24 volt battery at up to 40 amps. For a trailer with a modest roof, that is often all the controller needs to be.",
  "We compared listings on the specs that decide whether a unit survives a real roof: the stated maximum PV input voltage, tracking claims, supported battery chemistries and how the settings are reached. Each pick below states its own 40 amp rating, and the ordering reflects who should stop at this price and who should step up. Where a listing leaves a spec unpublished, the entry says what to ask before ordering, so a gap never turns into a surprise on installation day or on the first frosty morning of the season."
];
export const lastUpdated = "2026-10-02";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/31vARSSsdJL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-budget-40-amp-solar-charge-controller-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Renogy Solar Charge Controller Rover 40A 12V/24V Auto Parameter DC Input MPPT Charge Controllers for Solar Panels Adjustable LCD for Gel Sealed Flooded Lithium Battery",
    "price": "$168.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31vARSSsdJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01MSYGZGI?tag=rvgearlab-amz-20",
    "description": "The Rover 40A is a 12V and 24V auto-detecting MPPT controller that lists 98% conversion and 99% tracking efficiency. It carries four-stage charging for lead-acid batteries and a dedicated two-stage routine for lithium, so the same unit suits a flooded bank today and a LiFePO4 swap later without replacing the controller. Rust and corrosion resistant construction is part of the build, which helps on a roof.\n\nIts distinguishing detail is the stated operating range of -40F to 149F, with built-in low-temperature protection whose cutoff can be adjusted in the Renogy DC Home app. No other pick in this guide publishes a cold-weather limit that low, which is the number that matters for a winter trailer parked under snow load, where a lithium battery must not be charged below its own safe temperature.\n\nThe app also supplies real-time data and a 30-day history, and the build adds reverse polarity, overcharge, short-circuit and reverse current protection. Buy it when the controller will live on the roof of a rig used year-round and a recognizable brand makes warranty questions simple. Owners who travel through all four seasons get the most from every feature it carries.",
    "specs": [
      "40A MPPT, 12V/24V auto-detect",
      "-40F to 149F operating range",
      "DC Home app, 30-day history"
    ],
    "pros": [
      "Cold-weather range published down to -40F",
      "Adjustable low-temperature lithium cutoff",
      "99% tracking and 98% conversion listed",
      "Full protection suite plus app history"
    ],
    "cons": [
      "Max PV input voltage is not in the listing text",
      "Most expensive pick in this guide",
      "Handles 12V and 24V banks only"
    ],
    "bestFor": "Cold-climate RV roofs with lithium banks and a 12V or 24V system."
  },
  {
    "id": "best-budget-40-amp-solar-charge-controller-2",
    "rank": 2,
    "badge": "Best App Monitoring",
    "name": "40A MPPT Solar Charge Controller, Multi-Voltage Auto-Detect, WiFi Bluetooth App, 0V LiFePO4 Recovery, Full Reverse Polarity Protection",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51eDupuXVFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H8364XZF?tag=rvgearlab-amz-20",
    "description": "This controller auto-detects 12V, 24V, 36V and 48V banks and delivers the full 40 amps without a manual voltage setting. It accepts up to 120V of PV input, with recommended array sizes of 390W at 12V, 780W at 24V, 975W at 36V and 1040W at 48V, so the numbers for sizing a string are printed in plain terms.\n\nThe standout feature is 0V LiFePO4 activation: if a battery management system shuts a pack down on low voltage, the controller can wake it using solar input alone, with no second battery or charger. Reverse polarity is detected on both the battery and PV connections before any circuit is energized, and a clear fault is shown instead of a silent failure.\n\nMonitoring runs through the Noi Solar app on iOS and Android over WiFi and Bluetooth, covering PV input, battery percentage, charge state and fault history. The body has no screen at all, which suits a unit tucked into a wiring bay that is checked from a phone. Local Bluetooth handles setup at the rig, and WiFi covers the rest.",
    "specs": [
      "40A MPPT, 12V to 48V auto-detect",
      "120V max PV input",
      "WiFi and Bluetooth app, no screen"
    ],
    "pros": [
      "Wakes a BMS-tripped LiFePO4 battery from solar",
      "Handles 12V through 48V banks automatically",
      "Fault history and live data in the app",
      "Reverse polarity caught before power-up"
    ],
    "cons": [
      "No onboard display for quick checks",
      "Three-stage charging with no four-stage option",
      "Setup and monitoring depend on the phone app"
    ],
    "bestFor": "Lithium rigs where phone monitoring and BMS wake-up matter most."
  },
  {
    "id": "best-budget-40-amp-solar-charge-controller-3",
    "rank": 3,
    "badge": "Best High-Voltage Value",
    "name": "40A Solar Panel Charge Controller MPPT, Solar Battery Regulator 12v 24v 36v 48v auto max 150v PV Input, fit for Sealed Gel AGM Flooded Lithium",
    "price": "$84.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31g8ipoItiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09Q83F257?tag=rvgearlab-amz-20",
    "description": "The OAE 40A takes a 150V maximum PV input, which is the highest ceiling in this guide short of the 160V OOYCYOO. That headroom lets panels be wired in longer series strings, where thinner and cheaper cable carries the current from the roof, and it leaves comfortable margin on a cold morning when open-circuit voltage climbs.\n\nSizing is printed for every bank voltage: 570W at 12V, 1130W at 24V, 1710W at 36V and 2270W at 48V, with automatic detection across all four. Battery temperature compensation is listed, which trims the charge voltage as the battery warms, and sealed, gel, flooded and lithium chemistries are all supported by the same controller, so one unit covers any bank.\n\nAn RS485 port is available for Wi-Fi remote monitoring through an optional module, so an app can be added later without replacing the controller. It sits below the Noi 40A on price while matching it on bank flexibility, and it is the pick for anyone who wants high-voltage input without paying for a brand name. Owners planning to grow from a small roof to a bigger one will appreciate that the same unit keeps working as the array expands.",
    "specs": [
      "40A MPPT, 150V max PV input",
      "570W at 12V up to 2270W at 48V",
      "Temperature compensation, RS485 port"
    ],
    "pros": [
      "150V PV ceiling allows long series strings",
      "Sizing printed for 12V through 48V banks",
      "Battery temperature compensation is listed",
      "RS485 port leaves room for Wi-Fi later"
    ],
    "cons": [
      "Wi-Fi monitoring is a separate purchase",
      "Few extras beyond the core controller",
      "Tracking efficiency is not quoted"
    ],
    "bestFor": "Long series strings and 24V or 48V banks on a tight budget."
  },
  {
    "id": "best-budget-40-amp-solar-charge-controller-4",
    "rank": 4,
    "badge": "Best Wide PV Window",
    "name": "OOYCYOO 40A MPPT Solar Charge Controller 12V/24V/36V/48V Auto Max 160V LCD, Adjustable Parameter Solar Panel Charge Regulator",
    "price": "$75.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Q5-MTPdqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FQJL7R1H?tag=rvgearlab-amz-20",
    "description": "OOYCYOO publishes the most complete input window of the six: 160V maximum PV, with a recommended 500W and a 20V to 80V string on a 12V system, then 1000W on a 24V system. A buyer can match a planned panel string against those figures on paper before spending anything, which removes most of the guesswork from a first solar install.\n\nCharging follows a four-stage routine of bulk, boost, float and equalization, and parameters can be preset or defined by the user for lead-acid, sealed, gel, flooded and LiFePO4 batteries. The listing quotes 99% tracking, and negative grounding is part of the design, which matches the wiring convention used on most RV chassis and keeps the install straightforward for a first-time builder.\n\nHeat is handled by a die-cast aluminum body plus a fan that switches on above 45C and off below 40C, which keeps the unit working through a summer roof or a hot battery bay. An LCD shows the working data, making this the strongest all-round unit among the mid-priced picks for a 12V to 48V build with a sizable array.",
    "specs": [
      "40A MPPT, 160V max PV input",
      "500W at 12V, 20V to 80V window",
      "Die-cast body with thermal fan"
    ],
    "pros": [
      "Published input window is easy to size against",
      "User-defined charge parameters for lithium",
      "Die-cast aluminum body with a cooling fan",
      "LCD for quick checks at the controller"
    ],
    "cons": [
      "Fan adds one more moving part",
      "No app or Bluetooth is listed",
      "Fan adds a little noise under heavy load"
    ],
    "bestFor": "Rigs with a 500W-plus array that need a documented input window."
  },
  {
    "id": "best-budget-40-amp-solar-charge-controller-5",
    "rank": 5,
    "badge": "Best Budget MPPT",
    "name": "SolaMr 40A 100V MPPT Solar Charge Controller 12V/24V, LCD Screen Solar Panel Controller with Dual USB Port for Gel Sealed Flooded Lithium",
    "price": "$64.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Q5uI9ErpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D66MHCF5?tag=rvgearlab-amz-20",
    "description": "The GM-D40 delivers 40 amps with a 100V maximum PV input, sized for up to 480W on a 12V bank or 960W on a 24V bank. Those are the figures a true MPPT unit should publish, and they put it clearly on the right side of the line that separates tracking controllers from relabeled PWM boxes. The LCD shows live data at a glance.\n\nIt lists 99.9% tracking efficiency with 98% conversion, an operating range of 14F to 149F, and seven protections covering short circuit, over-discharge, overcharge and over-current. A dual USB port on the side charges a phone straight from the controller. Magnetic rings and capacitors in the design are credited with steady operation, which suits an owner who wants a plain, reliable box.\n\nAgainst the OOYCYOO 40A it steps down to a 100V ceiling and a 12V or 24V bank, which is exactly the envelope most RV roofs with two to four panels live inside. The saving is meaningful, so it is the sensible stop for an owner who wants tracked charging without paying for flexibility they will not use.",
    "specs": [
      "40A MPPT, 100V max PV input",
      "480W at 12V, 960W at 24V",
      "LCD plus dual USB, 14F to 149F"
    ],
    "pros": [
      "Real MPPT figures published: 100V and 99.9%",
      "Sized clearly for 480W on 12V",
      "USB ports top up a phone at the roof",
      "Sensible seven-way protection list"
    ],
    "cons": [
      "Handles 12V and 24V banks only",
      "No app or Bluetooth is listed",
      "Freezing range stops at 14F"
    ],
    "bestFor": "A single 12V or 24V roof system that wants real MPPT at the lowest sensible cost."
  },
  {
    "id": "best-budget-40-amp-solar-charge-controller-6",
    "rank": 6,
    "badge": "Cheapest Way In",
    "name": "iSunergy MPPT Solar Charge Controller 40A 12V/24V Auto Solar Panel Intelligent Regulator with Dual USB Port LCD Display for Lead Acid",
    "price": "$21.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51paw4y1PgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08GBVNP67?tag=rvgearlab-amz-20",
    "description": "The iSunergy 40A is the entry pick here and the cheapest way to get a 40 amp rating with an LCD. The screen shows charging and discharging current, cumulative generation and temperature, and the controller adds light control with a delay timer and adjustable charge and discharge parameters, which makes it handy for a shed light or a small outbuilding.\n\nIt lists tracking efficiency of 99.5% or better with a maximum conversion efficiency of 98%, and two USB outputs rated at up to 2.5A for phones. Short-circuit, open-circuit, reverse, overload and reverse-current protection are all included, with self-recovery after a fault, so a wiring slip during a first install is far less likely to end the unit.\n\nThe listing states that a 12V battery accepts at most 23V of panel voltage, which defines the use case precisely: one 12V-class panel, or several wired in parallel. Within that scope it gives a cheap, readable and well-protected controller, a good fit for a small trailer, a camper shed or a spare battery bank that sees light daily use.",
    "specs": [
      "40A controller, 12V/24V auto",
      "99.5% tracking, 98% conversion listed",
      "LCD plus two 2.5A USB ports"
    ],
    "pros": [
      "Lowest cost way into a 40 amp rating",
      "Screen shows current, generation and temperature",
      "Two USB ports for phones",
      "Self-recovering protection circuits"
    ],
    "cons": [
      "23V panel limit on a 12V battery",
      "Series panel strings are ruled out",
      "Framed for lead-acid batteries"
    ],
    "bestFor": "One or two 12V panels wired in parallel on a lead-acid bank."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated Charge Rating",
    "description": "We started with the amp figure, because the number in the title is a checkable claim. Only listings that state a 40 amp rating for the unit itself were kept, and we noted which ones also give the array watts that rating supports at 12V and 24V. A rating without matching wattage guidance is harder to size a roof around."
  },
  {
    "title": "Maximum PV Input Voltage",
    "description": "We compared the stated PV ceiling of each unit, since that is the figure that protects the controller when cold panels spike above their rated voltage. A genuine MPPT unit publishes a ceiling well above battery voltage. We treated a ceiling barely above one panel's open-circuit voltage as a PWM-class limit regardless of the MPPT label."
  },
  {
    "title": "Tracking and Conversion Claims",
    "description": "We looked for a stated tracking efficiency and a stated conversion efficiency, which are different numbers. Tracking describes how well the unit finds the array's best operating point, while conversion describes losses in the electronics. We based this on product specs and gave more credit to listings that publish both."
  },
  {
    "title": "Battery Chemistry and Voltage Support",
    "description": "We checked which bank voltages each controller auto-detects and whether lithium is supported by a real profile or only by a user-adjustable setting. Temperature compensation and low-temperature handling were noted where stated. We evaluated this on listing details alone."
  },
  {
    "title": "Monitoring and Value",
    "description": "We compared screens, USB ports, app support and expansion ports, then positioned each pick within the shortlist by price band. The question for each step up was what the money buys: a higher PV ceiling, an app, a wider temperature range or a better-known warranty. Price figures were used for ordering only."
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
    "subheading": "By Array Size and Bank Voltage",
    "intro": "The array you plan to connect decides which of these six makes sense, so start by writing down your panel watts and bank voltage.",
    "table": {
      "headers": [
        "Your array",
        "Best pick",
        "Why"
      ],
      "rows": [
        [
          "One or two 12V panels in parallel",
          "iSunergy 40A",
          "Its 23V panel limit suits parallel 12V panels exactly"
        ],
        [
          "Two to four panels, 12V or 24V bank",
          "SolaMr GM-D40",
          "100V ceiling and 480W at 12V cover a typical roof"
        ],
        [
          "About 500W on a 12V roof",
          "OOYCYOO 40A",
          "Publishes a 500W and 20V to 80V window"
        ],
        [
          "Long series string or a 24V to 48V bank",
          "OAE 40A",
          "150V ceiling and sizing for every bank voltage"
        ],
        [
          "Cold winter use with a lithium bank",
          "Renogy Rover 40",
          "Cold range to -40F and an adjustable cutoff"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "The price ladder here mostly buys PV voltage headroom and extras, since every pick carries the same 40 amp rating.",
    "table": {
      "headers": [
        "Budget band",
        "Best pick",
        "What it buys"
      ],
      "rows": [
        [
          "Entry of this shortlist",
          "iSunergy 40A",
          "An LCD and a 40 amp rating for a single 12V panel setup"
        ],
        [
          "Low-mid of this shortlist",
          "SolaMr GM-D40",
          "Real MPPT with a 100V ceiling and dual USB"
        ],
        [
          "Mid of this shortlist",
          "OOYCYOO 40A",
          "A 160V window, user-defined parameters and a cooling fan"
        ],
        [
          "Upper-mid of this shortlist",
          "Noi 40A",
          "A WiFi and Bluetooth app plus 0V LiFePO4 recovery"
        ],
        [
          "Top of this shortlist",
          "Renogy Rover 40",
          "Published -40F range and a known brand behind it"
        ]
      ]
    }
  },
  {
    "subheading": "Fixed Panel Voltage vs High-Voltage Strings",
    "intro": "The real design choice is whether the panels are wired so each one sees battery-class voltage, or whether they are strung together to push higher voltage down thin cable.",
    "cards": [
      {
        "label": "Low-voltage parallel panels",
        "text": "The iSunergy 40A and, to a lesser extent, the SolaMr GM-D40 suit panels wired in parallel at 12V-class voltage. Cable runs are short on a van or small trailer, so the thicker wire this demands is not a problem."
      },
      {
        "label": "High-voltage series strings",
        "text": "The OOYCYOO 40A, OAE 40A and Noi 40A accept 120V to 160V, so panels can be wired in series and the current on the roof cable drops. The step suits a long run from a fifth-wheel roof to a basement battery bay."
      }
    ],
    "note": "Pick the SolaMr GM-D40 for a short, simple roof, or the OAE 40A when the cable run is long."
  },
  {
    "subheading": "By Battery Chemistry and Monitoring",
    "intro": "Chemistry and how you read the numbers are separate decisions, and each pick answers them differently.",
    "table": {
      "headers": [
        "What you care about",
        "Best pick",
        "Why"
      ],
      "rows": [
        [
          "Reviving a BMS-tripped LiFePO4 pack",
          "Noi 40A",
          "0V activation wakes the BMS from solar input"
        ],
        [
          "Setting custom lithium voltages",
          "OOYCYOO 40A",
          "Charging parameters can be preset or user-defined"
        ],
        [
          "Temperature-compensated charging",
          "OAE 40A",
          "Battery temperature compensation is listed"
        ],
        [
          "Cold-weather lithium charging",
          "Renogy Rover 40",
          "Low-temperature protection with an adjustable cutoff"
        ],
        [
          "A basic lead-acid bank with a screen",
          "iSunergy 40A",
          "Lead-acid framing, LCD with charge and discharge current"
        ]
      ]
    }
  },
  {
    "subheading": "For RV Roofs and Van Builds Specifically",
    "intro": "Roof space is the constraint on a rig, so the controller has to fit the array that actually fits on the roof.",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated PV ceiling above your string's cold open-circuit voltage, bank-voltage support that matches your system, and a lithium option if you run LiFePO4. A published temperature range matters on a rig that sees winter, as the Renogy Rover 40 shows."
      },
      {
        "label": "In this comparison",
        "text": "The SolaMr GM-D40 fits a typical two to four panel roof, the Noi 40A suits a lithium rig where the controller hides behind a panel, and the Renogy Rover 40 suits a trailer that stays out through winter."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "Moving up the shortlist buys voltage headroom, lithium handling or climate toughness, so spend where your rig is most exposed.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Your rig sees freezing weather, runs a lithium bank or sits far from its batteries. The Renogy Rover 40 adds the published cold range, and the Noi 40A adds BMS wake-up and app history."
      },
      {
        "label": "Save if",
        "text": "You run a small lead-acid system with one or two panels and check it at the wall. The iSunergy 40A or SolaMr GM-D40 covers that job, and the savings can go toward a second panel or heavier cable."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What the 40 Amp Rating Really Caps",
    "explanation": "The 40 amps is the current the controller can push into the battery, not the wattage of the panels you can connect. Multiply it by the battery voltage and you get the output ceiling, which is roughly 500 to 570 watts at 12 volts and about double at 24 volts. Panels beyond that ceiling are clipped, so extra wattage on a 12 volt bank is wasted money rather than extra charging. Planned array watts divided by the battery voltage give the amps, so leave around 25 percent of margin before choosing the rating."
  },
  {
    "criterion": "Max PV Input and Cold-Morning Voltage",
    "explanation": "The maximum PV input voltage is the figure that actually destroys a controller when it is exceeded. A panel's open-circuit voltage rises as temperature falls, so a string that is safe in July can spike past the limit on a frosty morning. Multiply the string's rated open-circuit voltage by the panel's cold correction factor, which comes from the panel datasheet, and keep the result below the controller's stated ceiling. A 23 volt cap on a 12 volt battery, as on the iSunergy, allows one panel and nothing wired in series."
  },
  {
    "criterion": "Spotting a Real MPPT Listing",
    "explanation": "MPPT is widely used as a sticker on cheap boxes that behave like PWM units. A genuine tracking controller publishes a high PV ceiling, often 100 volts or more, and a tracking efficiency figure of about 99 percent. If a unit lists neither, or caps panel voltage barely above the battery's, it cannot trade extra panel voltage for extra charge current. Look for the PV ceiling and the efficiency claim in the title or bullets rather than trusting the word MPPT alone."
  },
  {
    "criterion": "Battery Voltage and Lithium Profile",
    "explanation": "Confirm that the controller supports your bank voltage, because a 12 volt and 24 volt unit will not run a 48 volt system. For lithium, the listing should name a lithium setting or allow user-defined voltages, since a lead-acid routine can undercharge a LiFePO4 pack or run an equalization stage it should never see. Lithium needs no equalization, and a low-temperature cutoff only works if the controller reads the battery's own temperature. The listing's chemistry line tells you which of these you are getting."
  },
  {
    "criterion": "Temperature Range and Cooling",
    "explanation": "A 40 amp controller moves enough current to warm itself, and roofs and wiring bays add more heat. A published operating range tells you how the unit behaves when it is freezing or baking, and a die-cast body or fan shows that the maker planned for dissipation. Mounting space around the unit still matters, since a controller crammed beside the inverter will derate no matter its rating. Check whether the listing quotes both a cold and a hot limit before you pick one for a four-season rig."
  },
  {
    "criterion": "Monitoring: Screen, App or Neither",
    "explanation": "An LCD lets you read charge current and voltage on the wall beside the batteries, which suits a quick walk-by check. An app shows history and faults from your seat, but it adds a dependence on Bluetooth range and phone updates. Some units leave a monitoring port that accepts a separate module, which keeps the unit simple and lets you add a screen later. Decide where you will actually look at the numbers, then pick the form that matches."
  }
];

export const faq = [
  {
    "q": "How many watts of solar can a 40 amp controller handle?",
    "a": "Multiply 40 amps by your battery voltage for the output ceiling. That is roughly 500 to 570 watts on a 12 volt bank and about double on 24 volts. Panels beyond that are clipped rather than damaged, though the input voltage limit still applies. Leave around 25 percent of margin when you size an array."
  },
  {
    "q": "Why does the iSunergy 40A cap panel voltage at 23 volts?",
    "a": "The listing states a 23 volt panel maximum on a 12 volt battery, which is the voltage of a single 12 volt-class panel. That is why it suits one panel or panels wired in parallel. A series pair would exceed the stated limit, so treat it as a small-roof controller regardless of the MPPT label."
  },
  {
    "q": "Is a 150V or 160V input worth paying for on a small RV?",
    "a": "It is worth it when your panels are wired in series or the controller sits far from the roof. Higher voltage means lower current and thinner cable for the same power. A two-panel roof on a short run does well with the 100V SolaMr GM-D40, which is the sensible value choice."
  },
  {
    "q": "Can these controllers charge a LiFePO4 battery safely?",
    "a": "Each listing names lithium support, but the depth varies. The OOYCYOO 40A allows user-defined parameters, the Noi 40A can wake a BMS-tripped pack, and the Renogy Rover 40 has an adjustable low-temperature cutoff. Set the absorption voltage to your battery maker's figure and disable any equalization stage for lithium."
  },
  {
    "q": "Do I need an app, or is an LCD enough?",
    "a": "An LCD is enough if you can see the controller from where you work, and it never needs a phone to function. An app such as Noi's or Renogy's adds history and fault alerts, which helps with a hard-to-reach install. The OAE 40A can add Wi-Fi later through its RS485 port."
  },
  {
    "q": "Which wiring order should I follow when connecting a controller?",
    "a": "Connect the battery first, then the solar panels, then any load, because the controller reads the bank voltage when it powers on. Auto-detecting units such as the Noi 40A and the OAE 40A depend on that order. Use a fuse or breaker between controller and battery sized for 40 amps."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "href": "/power-electrical/best-budget-80-amp-solar-charge-controller",
    "title": "Best Budget 80 Amp Solar Charge Controller"
  },
  {
    "href": "/power-electrical/best-budget-80-amp-mppt-solar-charge-controller",
    "title": "Best Budget 80 Amp Mppt Solar Charge Controller"
  },
  {
    "href": "/power-electrical/best-budget-solar-charge-controller-with-ac-input",
    "title": "Best Budget Solar Charge Controller With Ac Input"
  }
];
