export const guideSlug = "best-90w-power-banks";
export const guideTitle = "4 Best 90w Power Banks in 2026";
export const metaTitle = "Best 90w Power Banks in 2026";
export const metaDescription = "Best 90W power banks for campers who need to charge a laptop, compared on dual USB-C output, 20000mAh capacity, cables and port layout.";
export const mainKeyword = "best 90w power banks";
export const introParagraphs = [
  "Ninety watts is enough to run many laptops, which is why a 90W bank earns a place in a camper's kit. Every listing here pairs that output with a 20000mAh cell, so the choices come down to cables, port layout and recharge speed.",
  "Four distinct models were compared from two brands, each sold in more than one listing variant. The ranking looks at the cable setup, number of USB-C and USB-A ports, recharge claims and how clearly each listing names its limits."
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
    "id": "best-90w-power-banks-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "JUOVI Power Bank 90W 20000mAh Laptop Portable Charger with Detachable Cable",
    "price": "$53.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31m98zgXoAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GQLVMXT2?tag=rvgearlab-20",
    "description": "The JUOVI lists two USB-C ports that each reach 90W on their own, two USB-A ports at 27W and 65W self-charging in about 2.5 hours. A 2-in-1 detachable cable works as a charger and a lanyard.\n\nIt posts the most detailed spec list of the four, including the 20000mAh cell that charges a 14 inch MacBook Pro once. Against the NOBIS attached-cable model it keeps the cable removable, and next to the JUOVI 4-port it adds that cable.\n\nIt suits a remote worker who wants one bank for a laptop, a phone and a tablet. The listing names overcharge, overheat and short-circuit protection.",
    "specs": [
      "90W on each USB-C port",
      "20000mAh, 65W self-charge",
      "Detachable 2-in-1 cable"
    ],
    "pros": [
      "Each USB-C port hits 90W alone",
      "Recharges at 65W in about 2.5 hours",
      "Detachable cable doubles as lanyard",
      "Charges four devices together"
    ],
    "cons": [
      "90W drops when ports share load",
      "Cable can be misplaced"
    ],
    "bestFor": "Laptop work from camp",
    "take": "The most complete 90W pick, with a detachable cable and fast refill.",
    "catch": "With several ports in use the 90W figure is split, so laptop charging slows."
  },
  {
    "id": "best-90w-power-banks-2",
    "rank": 2,
    "badge": "Best Attached Cable",
    "name": "NOBIS 90W Portable Charger 20000mAh Power Bank with Detachable C-Cable",
    "price": "$52.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31R2Ywjk70L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVYBWNCR?tag=rvgearlab-20",
    "description": "The NOBIS lists 90W charging that takes a laptop to 52 percent and an iPhone 17 Pro to 70 percent in 30 minutes, with self-charging to 100 percent in 1.8 hours. An attached USB-C cable and four ports ride on a flight-friendly 20000mAh cell.\n\nIt recharges faster than the JUOVI, which lists 2.5 hours, and the attached cable removes one thing to forget. Compared with the NOBIS 4-port model, it keeps a built-in cable for quick plug-in use.\n\nIt suits a traveler who wants fast recharge and a cable that stays attached. The 1 percent accurate display keeps tabs on the remaining charge.",
    "specs": [
      "90W, 1.8 hour self-charge",
      "Attached USB-C cable",
      "20000mAh, flight-friendly"
    ],
    "pros": [
      "Self-charges to full in 1.8 hours",
      "Cable stays with the bank",
      "Display accurate to 1 percent",
      "Low-current mode for small devices"
    ],
    "cons": [
      "Attached cable is only USB-C",
      "Cannot swap a damaged cable"
    ],
    "bestFor": "Fast turnaround between trips",
    "take": "Quickest refill of the four. A good fit for back-to-back weekends.",
    "catch": "If the integrated cable fails, you carry a spare."
  },
  {
    "id": "best-90w-power-banks-3",
    "rank": 3,
    "badge": "Best Port Mix",
    "name": "JUOVI Portable Charger",
    "price": "$44.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41jJAxCdYwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGZ447T2?tag=rvgearlab-20",
    "description": "The JUOVI 4-port lists 90W fast charging with two USB-C and two USB-A ports and support for PD, PPS, QC, FCP and SCP protocols. It is described as airline-compliant and compatible with MacBook, Dell and ThinkPad laptops.\n\nIt is the lowest priced JUOVI of the group and drops the detachable cable. Against the NOBIS 4-port model, it names more protocols and lists an automatic stop when a device is full.\n\nIt suits a camper with mixed laptop and phone chargers who wants wide protocol support. The four-port layout keeps chargers from competing for a single socket.",
    "specs": [
      "90W laptop charging",
      "2 USB-C plus 2 USB-A",
      "PD, PPS, QC, FCP, SCP"
    ],
    "pros": [
      "Wide fast-charging protocol list",
      "Four ports for mixed devices",
      "Airline-compliant claim on listing",
      "Automatic stop when charged"
    ],
    "cons": [
      "No cable included in the title",
      "Listing is light on recharge details"
    ],
    "bestFor": "Mixed laptop and phone gear",
    "take": "A protocol-rich pick for mixed devices at a lower price than the JUOVI Detachable.",
    "catch": "Recharge details are light, so plan on a long refill."
  },
  {
    "id": "best-90w-power-banks-4",
    "rank": 4,
    "badge": "Best Budget",
    "name": "NOBIS 90W Portable Charger 20000mAh Laptop Power Bank Fast Charging",
    "price": "$42.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31RnCHCDIDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GHMXFP11?tag=rvgearlab-20",
    "description": "The NOBIS 4-port lists up to 90W output with 65W self-recharging, two USB-C and two USB-A ports and a 20000mAh cell. A low-current mode keeps small devices running for up to 2 hours without auto-shutdown.\n\nIt is the lowest priced option and matches the other three on output wattage. Compared with the NOBIS Attached Cable model, it drops the cable and the faster 1.8 hour refill for a lower price.\n\nIt suits a budget laptop camper who already owns the cables. The low-current mode helps with a GPS or a watch.",
    "specs": [
      "90W, 65W self-recharge",
      "2 USB-C and 2 USB-A",
      "Low-current mode"
    ],
    "pros": [
      "Lowest price of the four",
      "65W recharge input",
      "Low-current mode runs small devices",
      "Display shows remaining charge"
    ],
    "cons": [
      "No cable in the listing",
      "Fewer details on safety protections"
    ],
    "bestFor": "Budget laptop charging",
    "take": "The cheapest way into 90W. Bring your own cable.",
    "catch": "The listing names fewer protection details than the JUOVI Detachable."
  }
];

export const howWeEvaluated = [
  {
    "title": "Laptop-class output",
    "description": "The 90W figure on each listing was the entry requirement, along with how it applies per port."
  },
  {
    "title": "Cell capacity",
    "description": "The 20000mAh claim and any flight-friendly language were compared across listings."
  },
  {
    "title": "Recharge speed",
    "description": "Self-charging wattage and time were weighed, since a bank is only useful when full."
  },
  {
    "title": "Cable and ports",
    "description": "Included cables and USB-C versus USB-A counts were judged for real camp use."
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
    "subheading": "By Charging Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Laptop plus phone and tablet",
          "JUOVI 90W Detachable",
          "90W on each USB-C and 65W refill."
        ],
        [
          "Fast turnaround between trips",
          "NOBIS 90W Attached Cable",
          "1.8 hour self-charge."
        ],
        [
          "Mixed laptop brands",
          "JUOVI 90W 4-Port",
          "Lists PD, PPS, QC, FCP and SCP."
        ],
        [
          "Tight budget",
          "NOBIS 90W 4-Port",
          "Lowest price with 90W output."
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
          "$40 to $50",
          "NOBIS 90W 4-Port or JUOVI 90W 4-Port"
        ],
        [
          "$50 to $60",
          "NOBIS 90W Attached Cable or JUOVI 90W Detachable"
        ]
      ]
    }
  },
  {
    "subheading": "Included cable vs bring your own",
    "cards": [
      {
        "label": "Included cable",
        "text": "A bundled cable means one less item to forget. The JUOVI 90W Detachable and NOBIS 90W Attached Cable fit this style."
      },
      {
        "label": "Bring your own",
        "text": "Skipping the cable lowers cost and lets you choose a better one. The JUOVI 90W 4-Port and NOBIS 90W 4-Port fit this style."
      }
    ],
    "note": "Most campers should pick the JUOVI 90W Detachable unless budget decides it."
  },
  {
    "subheading": "By Refill Priority",
    "table": {
      "headers": [
        "Choose",
        "Recommended pick"
      ],
      "rows": [
        [
          "Fastest refill",
          "NOBIS 90W Attached Cable"
        ],
        [
          "Widest protocol list",
          "JUOVI 90W 4-Port"
        ],
        [
          "Lowest cost",
          "NOBIS 90W 4-Port"
        ],
        [
          "Most complete kit",
          "JUOVI 90W Detachable"
        ]
      ]
    }
  },
  {
    "subheading": "For Working From a Campsite Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A 90W port, a 65W or faster input and a cable rated for the wattage."
      },
      {
        "label": "In this comparison",
        "text": "The JUOVI 90W Detachable pairs 90W per USB-C port with a detachable cable, and the NOBIS 90W Attached Cable refills in 1.8 hours."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the JUOVI 90W Detachable or NOBIS 90W Attached Cable if you want a cable included and the fastest refill."
      },
      {
        "label": "Save if",
        "text": "Save with the NOBIS 90W 4-Port or JUOVI 90W 4-Port if you already own a good USB-C cable."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 90W really delivers",
    "explanation": "A 90W port suits most thin-and-light laptops but is more than a phone needs. A laptop negotiates the voltage it accepts, so a 65W laptop will draw less. Check your laptop charger's printed wattage and pick a bank that meets or exceeds it."
  },
  {
    "criterion": "Shared versus single-port power",
    "explanation": "The 90W headline usually applies when one port is used. Add a phone on a second port and the total is divided between them. Look for a total output line in the listing, not only the headline figure."
  },
  {
    "criterion": "20000mAh versus laptop runtime",
    "explanation": "A 20000mAh bank is about 74Wh, which is roughly one full charge for a 14 inch laptop. Heavy tasks drain the laptop quickly, so plan on one charge rather than several. Use the listing's charges-per-laptop figure as a guide."
  },
  {
    "criterion": "Cable type and rating",
    "explanation": "A cheap cable can limit a 90W bank to a lower wattage. Look for a USB-C cable rated for 100W, and confirm that any bundled cable is named in the title or bullets. A detachable cable is easier to replace than an attached one."
  },
  {
    "criterion": "Self-charging time",
    "explanation": "Recharge input ranges from 1.8 hours to longer on the listings here. If you only have a short charge window before a trip, the fastest input matters more than the last 10 percent of capacity. Look for the self-charging figure in the bullet list."
  }
];

export const faq = [
  {
    "q": "Will a 90W bank charge my laptop?",
    "a": "Many USB-C laptops accept up to 90W, but a larger gaming laptop may need more. Check your laptop's charger rating before buying. Charging may be slower if the laptop draws more than the bank supplies."
  },
  {
    "q": "Do I need a special cable?",
    "a": "Use a USB-C cable rated for 100W with a 90W bank. A basic phone cable limits the speed. Some listings include a cable and some do not."
  },
  {
    "q": "Is 90W worth it over 65W?",
    "a": "Yes if you own a laptop that benefits from the extra headroom or want to charge two devices. A 65W bank is enough for thin laptops. The 90W units here also keep 65W recharge speed."
  },
  {
    "q": "How do I recharge it quickly?",
    "a": "Use a 65W or higher wall charger on the bank's USB-C input. Charging through a weak port takes much longer. Plug it in the night before you leave."
  },
  {
    "q": "Can I use it on a plane?",
    "a": "A 20000mAh bank is about 74Wh, which is under the common 100Wh carry-on limit. Pack it in your hand luggage, never in checked bags. Check your airline rules for any change."
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
