export const guideSlug = "best-solar-generators-under-750";
export const guideTitle = "5 Best Solar Generators Under 750 in 2026";
export const metaTitle = "Best Solar Generators Under 750 in 2026";
export const metaDescription = "Best solar generators under $750: five 1 kWh and larger power stations with bundled panels compared on output, battery life and charge speed.";
export const mainKeyword = "best solar generators under 750";
export const introParagraphs = [
  "Seven hundred fifty dollars is the tier where a solar generator can run a household fridge, a window air conditioner for an hour or two, or a full RV weekend. Two of these picks bundle a 200W panel, and three are bare stations with bigger batteries.",
  "The five here cost from about $499 to $700. Compared with the $500 tier, you gain 1800W to 2400W of AC output, UPS switchover and faster charging, and the notes explain when those upgrades matter."
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
    "id": "best-solar-generators-under-750-1",
    "rank": 1,
    "badge": "Best Value Under $750",
    "name": "ABOK Ark2000 1536Wh 2000W Portable Power Station",
    "price": "$599.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41J42iP7mSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FRSCP2VS?tag=rvgearlab-amz-20",
    "description": "ABOK Ark2000 offers 2000W continuous with a 2400W A-Boost mode from 1536Wh of LiFePO4. It expands to 4608Wh with extra battery packs, takes 1200W of solar input and charges to 80 percent in 55 minutes on AC.\n\nIt has more capacity than the 1024Wh EcoFlow and BLUETTI units and a stronger inverter than the Jackery 1000 v2, for about $100 less than the two panel bundles. The Lipower holds more energy, and the ABOK adds expansion.\n\nChoose it if you want a station that grows with your needs, for a camper van or a growing home backup. Add a 400W panel set for full solar recharge in a day.",
    "specs": [
      "1536Wh LiFePO4, 2000W",
      "Expands to 4608Wh",
      "1200W solar input"
    ],
    "pros": [
      "Expandable to 4608Wh later",
      "Up to 1200W of solar input",
      "80 percent charge in 55 minutes",
      "2000W AC runs a small heater briefly"
    ],
    "cons": [
      "No panel in the box",
      "Expansion batteries cost extra"
    ],
    "bestFor": "A van or backup system that can grow",
    "take": "The best mix of power, capacity and room to grow.",
    "catch": "Budget for solar panels and expansion later."
  },
  {
    "id": "best-solar-generators-under-750-2",
    "rank": 2,
    "badge": "Best Raw Capacity",
    "name": "Lipower 2400W Portable Power Station",
    "price": "$649.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Ft8DZeyvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H5BL8YRJ?tag=rvgearlab-amz-20",
    "description": "Lipower holds 2150Wh and delivers 2400W of pure sine wave AC with a 4000W surge. It has a 10ms UPS mode, a four-way recharge system with a full wall charge in about 1.5 hours and a body the maker calls 20 percent lighter than same-capacity packs.\n\nIt stores about 40 percent more than the ABOK and twice as much as the EcoFlow, for about $50 more than the ABOK. It does not ship with a panel and does not expand, so the capacity is fixed.\n\nPick it for the longest fridge, CPAP and fan run per dollar, or as a home outage backup for essentials. It suits households that plan outages more than camping.",
    "specs": [
      "2150Wh, 2400W AC, 4000W surge",
      "10ms UPS switchover",
      "1.5 hour wall recharge"
    ],
    "pros": [
      "Largest battery of the five",
      "2400W handles kettles and coffee makers",
      "10ms UPS for routers and PCs",
      "Full wall charge in about 1.5 hours"
    ],
    "cons": [
      "No panel included",
      "Heavier than the 1 kWh units"
    ],
    "bestFor": "Long home outages and long camp stays",
    "take": "The most watt-hours you can buy under this cap.",
    "catch": "Size matters: plan for a two-person lift."
  },
  {
    "id": "best-solar-generators-under-750-3",
    "rank": 3,
    "badge": "Best Kit For Solar Speed",
    "name": "BLUETTI Solar Generator Elite 100 V2 with 200W Solar Panel Included",
    "price": "$699.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Ts7U2lIHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FD3V9LF9?tag=rvgearlab-amz-20",
    "description": "BLUETTI's Elite 100 V2 kit combines a 1024Wh station with a 200W solar panel. It gives 1800W AC (2700W Power Lifting), charges in about 70 minutes with 1200W TurboBoost AC or 1000W solar input, and has a 10ms UPS and app control over Wi-Fi and Bluetooth.\n\nIt adds a 200W panel and a quiet mode to the EcoFlow's raw specs, and its 1000W solar input refills a day faster than a 200W-limited rival. It stores less than the ABOK and Lipower, so it wins on charging flexibility, not stored energy.\n\nChoose it if you want to refill quickly from the wall or a big panel array and manage the system from a phone. It suits RV weekends and outage backup.",
    "specs": [
      "1024Wh, 1800W AC, 2700W lifting",
      "200W panel included",
      "70 minute full charge"
    ],
    "pros": [
      "200W panel in the box",
      "Full AC recharge in about 70 minutes",
      "App control by Wi-Fi and Bluetooth",
      "Quiet mode for overnight use"
    ],
    "cons": [
      "Capacity is smaller than ABOK or Lipower",
      "Price is near the top of the cap"
    ],
    "bestFor": "Fast turnaround between trips",
    "take": "A panel in the box and up to 1000W of solar input.",
    "catch": "Panels this size need open ground."
  },
  {
    "id": "best-solar-generators-under-750-4",
    "rank": 4,
    "badge": "Best Brand Support",
    "name": "Jackery Solar Generator 1000 v2 and 200W Solar Panel",
    "price": "$699.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Li2jDBgqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D2L1G66J?tag=rvgearlab-amz-20",
    "description": "Jackery's Solar Generator 1000 v2 bundles a 1070Wh LiFePO4 station with a 200W panel, delivering 1500W AC with a 3000W surge. It has three pure sine wave outlets, USB-C, USB-A and car ports, and cells that keep over 70 percent of capacity after 4000 cycles.\n\nIt offers a one-hour emergency charge and the best-known service network in the category, in return for lower AC output than the BLUETTI. Its panel connector is made for Jackery gear, which locks you into one ecosystem.\n\nChoose it if you want an established brand with a strong warranty and a simple plug-in kit. It suits first-time buyers and RV weekenders.",
    "specs": [
      "1070Wh LFP, 1500W AC, 3000W surge",
      "200W panel included",
      "4000 cycles to 70% capacity"
    ],
    "pros": [
      "4000 cycle LFP battery",
      "200W panel in the bundle",
      "Emergency charge in one hour",
      "Strong brand and warranty support"
    ],
    "cons": [
      "Panel connector fits Jackery gear",
      "Lower AC output than the BLUETTI"
    ],
    "bestFor": "First-time buyers wanting an easy kit",
    "take": "A plug-and-play kit with a strong support network.",
    "catch": "It costs about $200 more than the bare EcoFlow."
  },
  {
    "id": "best-solar-generators-under-750-5",
    "rank": 5,
    "badge": "Best Under $500 Pick",
    "name": "EF ECOFLOW Portable Power Station Delta 3 Classic",
    "price": "$498.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31F8BqUk3HL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FQVC4RF5?tag=rvgearlab-amz-20",
    "description": "EcoFlow Delta 3 Classic stores 1024Wh in LiFePO4 and outputs 1800W with a 3600W surge, with a 100W USB-C port and a 0 to 80 percent recharge in 45 minutes. A UPS under 10ms and X-Boost for higher-wattage loads round out the feature list.\n\nAt about $499 it costs $200 less than the two panel bundles, because it ships without a panel. If you already own panels, it is the cheapest way to get 1800W of AC power in this guide.\n\nPick it if you already own 12 to 48V panels or plan to buy a bigger array. It suits apartment backup and van builds.",
    "specs": [
      "1024Wh LiFePO4, 1800W AC",
      "3600W surge, X-Boost",
      "0 to 80% in 45 minutes"
    ],
    "pros": [
      "1800W AC with a 3600W surge",
      "Charges to 80 percent in 45 minutes",
      "UPS under 10ms",
      "Lowest price among the 1800W units"
    ],
    "cons": [
      "No solar panel included",
      "Capacity is only 1024Wh"
    ],
    "bestFor": "Buyers who already own panels",
    "take": "The cheapest way to get 1800W under this cap.",
    "catch": "Add a panel before relying on solar."
  }
];

export const howWeEvaluated = [
  {
    "title": "Output and surge",
    "description": "Continuous AC output from 1500W to 2400W and surge ratings were compared against real loads such as a kettle, a compressor and a toaster."
  },
  {
    "title": "Capacity",
    "description": "Stored energy from 1024Wh to 2150Wh was ranked against price, with expandability noted."
  },
  {
    "title": "Recharge speed",
    "description": "Wall and solar charge times were compared, from 45 minutes to 80 percent up to 1.5 hours for a full charge."
  },
  {
    "title": "What is in the box",
    "description": "Whether a panel is included changes the true price by $150 to $250."
  },
  {
    "title": "Price against the cap",
    "description": "All five sit at or under $750, and the top pick offers the best mix of watt-hours and power per dollar."
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
    "subheading": "By use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Growing van or RV system",
          "ABOK Ark2000",
          "Expands to 4608Wh with extra packs."
        ],
        [
          "Longest outage runtime",
          "Lipower 2400W",
          "2150Wh and 2400W AC."
        ],
        [
          "Fast turnaround between trips",
          "BLUETTI Elite 100 V2 Kit",
          "70 minute full recharge."
        ],
        [
          "First kit, brand support",
          "Jackery 1000 v2 Kit",
          "200W panel and a strong warranty."
        ],
        [
          "Already own panels",
          "EcoFlow Delta 3 Classic",
          "1800W AC at the lowest price."
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
          "$490 to $600",
          "EcoFlow Delta 3 Classic or ABOK Ark2000"
        ],
        [
          "$640 to $700",
          "Lipower 2400W or BLUETTI Elite 100 V2 Kit"
        ],
        [
          "$690 to $700",
          "Jackery 1000 v2 Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Bundle vs bare station",
    "cards": [
      {
        "label": "Bundles",
        "text": "The BLUETTI Elite 100 V2 Kit and Jackery 1000 v2 Kit ship with a 200W panel, so you can recharge off-grid on day one. The panel connectors can limit you to the brand's accessories."
      },
      {
        "label": "Bare stations",
        "text": "The ABOK Ark2000, Lipower 2400W and EcoFlow Delta 3 Classic cost less up front and give you more capacity or output per dollar. You add the panels yourself."
      }
    ],
    "note": "Most buyers should take the ABOK Ark2000 and buy a panel, since it expands later."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Budget band",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $499",
          "EcoFlow Delta 3 Classic"
        ],
        [
          "About $599",
          "ABOK Ark2000"
        ],
        [
          "About $650",
          "Lipower 2400W"
        ],
        [
          "About $699",
          "BLUETTI Elite 100 V2 Kit"
        ],
        [
          "About $699",
          "Jackery 1000 v2 Kit"
        ]
      ]
    }
  },
  {
    "subheading": "For RV weekends specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for 1500W or more of AC and a 200W or larger solar input to run a fridge, a fan and a laptop for two days."
      },
      {
        "label": "In this comparison",
        "text": "The BLUETTI Elite 100 V2 Kit and Jackery 1000 v2 Kit include 200W panels, and the ABOK Ark2000 adds 2000W of AC."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a panel in the box and a brand with service centers, which is what the Jackery 1000 v2 Kit and BLUETTI Elite 100 V2 Kit deliver. The Lipower 2400W justifies its price if outages are your main concern."
      },
      {
        "label": "Save if",
        "text": "Save if you already own panels or only need an 1800W inverter, because the EcoFlow Delta 3 Classic costs about $499 and the ABOK Ark2000 offers a larger battery for $100 more."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "True kit price",
    "explanation": "A panel bundle can look expensive until you add the panel to a bare station. A 200W portable panel costs $150 to $250, so a $699 kit and a $499 bare unit plus a panel come out almost the same. Total the whole system before comparing price tags."
  },
  {
    "criterion": "Continuous vs surge watts",
    "explanation": "Continuous watts are the sustained limit and surge only covers a 1 to 2 second start-up peak. A 1500W unit runs a toaster or kettle, a 1800W unit adds a small microwave, and 2400W runs a coffee maker with a fan. Check the continuous AC number, not just the surge number in the headline."
  },
  {
    "criterion": "Capacity against loads",
    "explanation": "Divide watt-hours by the load, then take about 85 percent for losses. A 1024Wh unit runs a 150W fridge for about 5.8 hours, and a 2150Wh unit for about 12. Add up your must-run devices and choose a battery that gives at least a day."
  },
  {
    "criterion": "UPS switchover",
    "explanation": "A UPS mode swaps to battery in 10ms or less, which keeps desktops, routers and CPAPs running during an outage. Not every station offers it, and some take 20 to 30ms, which can restart a computer. If you want backup for equipment, look for the 10ms figure in the specs."
  },
  {
    "criterion": "Solar input capacity",
    "explanation": "Input from 200W to 1200W decides how quickly a day of sun refills the battery. A 200W panel adds roughly 600 to 800Wh on a sunny day, while a 1200W array can fill a 1.5 kWh battery in about 1.2 hours. Match the input rating to the panel array you plan to buy."
  },
  {
    "criterion": "Expansion and warranty",
    "explanation": "Expandable systems like the ABOK Ark2000 let you add battery packs later at a cost, while fixed units cap your capacity. Warranty lengths range from 3 to 5 years among major brands. Check whether the warranty covers the cells, not only the electronics, and note how long the maker takes to ship a replacement. A longer warranty from a company with a US service center is worth more than a long promise with no local support."
  }
];

export const faq = [
  {
    "q": "Can a 1 kWh solar generator run an RV air conditioner?",
    "a": "Not for long. A 13,500 BTU RV air conditioner draws 1200 to 1500W running and more at start-up, so a 1070Wh battery lasts well under an hour. The ABOK Ark2000 or Lipower 2400W can handle the surge but still only runs it for 1 to 1.5 hours."
  },
  {
    "q": "Is a 200W panel enough for a 1 kWh battery?",
    "a": "It will refill roughly 600 to 800Wh on a bright summer day, so a full recharge takes 1.5 to 2 days. The BLUETTI Elite 100 V2 accepts up to 1000W of solar input, which cuts that dramatically if you add panels."
  },
  {
    "q": "What does a 10ms UPS do for me?",
    "a": "It switches to battery fast enough that a desktop, router or CPAP does not notice a grid dropout. The Lipower 2400W, BLUETTI Elite 100 V2 Kit and EcoFlow Delta 3 Classic list this feature. It only works if the unit stays plugged into the wall."
  },
  {
    "q": "Can I add more batteries later?",
    "a": "Only on supported systems, such as the ABOK Ark2000 that expands to 4608Wh with Ark2000E packs. Fixed units such as the EcoFlow Delta 3 Classic cannot grow. If you might want more capacity, choose an expandable model now."
  },
  {
    "q": "How do I store a large power station?",
    "a": "Keep it between 40 and 80 percent charge in a dry, cool room, and top it up every few months. Do not leave it in a hot garage or a car, and do not store it fully empty, which damages cells."
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
