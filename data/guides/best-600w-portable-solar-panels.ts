export const guideSlug = "best-600w-portable-solar-panels";
export const guideTitle = "3 Best 600w Portable Solar Panels in 2026";
export const metaTitle = "Best 600w Portable Solar Panels in 2026";
export const metaDescription = "Best 600W portable solar panels compared on fold format, voltage, cable length and wiring, with a 480W bifacial step-down for lighter carry.";
export const mainKeyword = "best 600w portable solar panels";
export const introParagraphs = [
  "True 600W portable panels are rare, and the listings split into two camps: one book-style folding panel and one set of six flexible 100W modules. A 480W bifacial panel rounds out the list for buyers who want a lighter carry at the cost of 120 watts.",
  "Three options were compared on stated wattage, voltage, weight, cable length, ingress rating and how each one gets power to a station or battery. A very low-priced 600W battery kit that lists a weight of only 15 ounces was left out as unrealistic."
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
    "id": "best-600w-portable-solar-panels-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "EYONGPV 600W Foldable Solar Panel",
    "price": "$588.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41guV+M7-tL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G1GHFWKF?tag=rvgearlab-amz-20",
    "description": "The EYONGPV 600W has HPBC monocrystalline cells rated up to 26 percent in a book-style folding structure with a built-in handle. A 30A Anderson output and a 4.5 m extension cable carry power to stations and 12V systems, under an IP65 ETFE and EVA dual-layer lamination.\n\nIt is the only pick here that is one folding unit at a true 600W. The DOKIO needs wiring and mounting, while the ZOUPW 480W is lighter yet smaller.\n\nIt suits campers with a large station who want 600W without building an array. The long cable keeps the station in shade.",
    "specs": [
      "600W HPBC, up to 26%",
      "30A Anderson, 4.5 m cable",
      "IP65, book-style fold"
    ],
    "pros": [
      "One folding unit at a full 600W",
      "4.5 m extension cable included",
      "Up to 26 percent efficiency",
      "Unfolds in seconds"
    ],
    "cons": [
      "IP65 handles splashes, not immersion",
      "Weight is not stated on the listing"
    ],
    "bestFor": "Large station, full 600W",
    "take": "The only single folding panel here at a true 600W, with a long cable.",
    "catch": "Weight and folded size are not on the listing, so allow plenty of storage room."
  },
  {
    "id": "best-600w-portable-solar-panels-2",
    "rank": 2,
    "badge": "Best Flexible Set",
    "name": "DOKIO 600W Flexible Solar Panels",
    "price": "$284.77",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51ZCfJCDDdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GFD65723?tag=rvgearlab-amz-20",
    "description": "The DOKIO set is six 100W, 18V ETFE panels totaling 600W for 12V systems. The modules wire in series or parallel, bend through a 30 degree arc and are lighter than glass panels.\n\nCompared with the EYONGPV, it costs about half as much and spreads the load over six small pieces that fit curved roofs. Against the ZOUPW 480W, it needs a controller and wiring where the ZOUPW plugs in directly.\n\nIt suits van, boat and trailer owners building a roof array on a budget. The listing asks for ventilation space behind the panels.",
    "specs": [
      "Six 100W 18V ETFE panels",
      "Series or parallel wiring",
      "30 degree bending arc"
    ],
    "pros": [
      "Lowest price among 600W options",
      "Expand by wiring more modules",
      "Light enough to handle singly",
      "Fits curved surfaces"
    ],
    "cons": [
      "Needs a charge controller and wiring",
      "Needs ventilation space behind the panels"
    ],
    "bestFor": "Budget roof array",
    "take": "A modular 600W at about half the price of the EYONGPV.",
    "catch": "Separate controller, fuses and wire are needed, and installation is a project."
  },
  {
    "id": "best-600w-portable-solar-panels-3",
    "rank": 3,
    "badge": "Best Light Step-Down",
    "name": "ZOUPW 480W Bifacial Portable Solar Panel N-Type 16BB for Power Station",
    "price": "$599.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JiOFXoSdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G3PJF9W8?tag=rvgearlab-amz-20",
    "description": "The ZOUPW 480W is a double-sided panel that adds up to 30 percent from reflected light, with a 42.5V design and IP68 rating. A composite build brings the weight to 22.5 lbs.\n\nIt trails the EYONGPV by 120 watts and costs a little more. Against the DOKIO, it unfolds in minutes where the DOKIO needs a build.\n\nIt suits station owners who value IP68 protection and a lighter carry. The high voltage matches large power stations.",
    "specs": [
      "480W bifacial N-type",
      "42.5V, 22.5 lbs",
      "IP68, composite build"
    ],
    "pros": [
      "Stated 22.5 lb weight",
      "Bifacial gain up to 30 percent",
      "IP68 rating",
      "Plug-and-play with large stations"
    ],
    "cons": [
      "Rated 480W, not 600W",
      "Needs a high-voltage station input"
    ],
    "bestFor": "IP68 protection and lighter carry",
    "take": "A lighter, IP68-rated bifacial panel when 480W is enough.",
    "catch": "The 30 percent gain needs bright reflective ground."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated wattage",
    "description": "Listings were checked for a stated 600W total, and a 480W panel was labeled as the step-down."
  },
  {
    "title": "Format",
    "description": "A single folding unit was separated from a multi-panel set."
  },
  {
    "title": "Voltage",
    "description": "Panel voltage was compared with station and controller inputs."
  },
  {
    "title": "Cable and output",
    "description": "Cable length and connector types were compared."
  },
  {
    "title": "Weather rating",
    "description": "IP65, IP68 and ETFE claims were compared."
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
    "subheading": "By Setup",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Large station, one folding unit",
          "EYONGPV 600W HPBC",
          "True 600W, 4.5 m cable."
        ],
        [
          "Budget van or trailer roof",
          "DOKIO 600W Flexible Set",
          "Six 100W modules at half the price."
        ],
        [
          "Lighter carry, IP68",
          "ZOUPW 480W Bifacial",
          "22.5 lbs and bifacial."
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
          "$280 to $290",
          "DOKIO 600W Flexible Set"
        ],
        [
          "$580 to $590",
          "EYONGPV 600W HPBC"
        ],
        [
          "$590 to $600",
          "ZOUPW 480W Bifacial"
        ]
      ]
    }
  },
  {
    "subheading": "Folding Unit vs Flexible Set",
    "cards": [
      {
        "label": "Folding unit",
        "text": "One panel unfolds and connects, which suits moving camps. The EYONGPV 600W HPBC and ZOUPW 480W Bifacial work this way."
      },
      {
        "label": "Flexible set",
        "text": "Six modules wire together and mount on a roof. The DOKIO 600W Flexible Set works this way."
      }
    ],
    "note": "Most campers who move often should choose the EYONGPV 600W HPBC."
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
          "Lowest budget",
          "DOKIO 600W Flexible Set"
        ],
        [
          "Mid budget, full 600W",
          "EYONGPV 600W HPBC"
        ],
        [
          "Higher budget, IP68",
          "ZOUPW 480W Bifacial"
        ]
      ]
    }
  },
  {
    "subheading": "Large Stations on Long Trips",
    "cards": [
      {
        "label": "Look for",
        "text": "A voltage window your station accepts, a cable long enough to reach shade, and a weather rating."
      },
      {
        "label": "In this comparison",
        "text": "The EYONGPV 600W HPBC includes a 4.5 m cable, and the ZOUPW 480W Bifacial carries IP68."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the EYONGPV 600W HPBC if you want a full 600W in one folding unit."
      },
      {
        "label": "Save if",
        "text": "Save with the DOKIO 600W Flexible Set if you can wire a roof array yourself."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fold unit versus array",
    "explanation": "A single folding 600W unit sets up in minutes and goes in a trunk, while six modules take a build but fit curved roofs. Decide whether the panels will travel or stay. Check how the listing says it connects."
  },
  {
    "criterion": "Voltage and controller",
    "explanation": "A 12V array of 18V panels needs a charge controller sized to the amps, and a 42.5V panel needs a station that accepts it. Read the station or controller input limit. Match them before ordering."
  },
  {
    "criterion": "Real 600W output",
    "explanation": "Expect 360 to 480 watts in strong sun, less in heat. The station's solar input cap may be lower still. Choose a size that your station can use."
  },
  {
    "criterion": "Cable length and connectors",
    "explanation": "A 4.5 m cable keeps the station in shade, and a 30A Anderson plug carries current well. Check the cable list. A short cable forces the station into the sun."
  },
  {
    "criterion": "Weather and mounting",
    "explanation": "IP65 resists splashes, IP68 handles immersion, and flexible modules need airflow behind them. Do not mount on combustible materials without space. Read the installation notes."
  }
];

export const faq = [
  {
    "q": "Is 600W portable realistic?",
    "a": "It is for a large station. The EYONGPV 600W HPBC is one folding unit, though weight is not listed, so plan storage."
  },
  {
    "q": "What is the biggest mistake with a 600W panel?",
    "a": "Ignoring the station's input limit. A panel above the voltage window can damage the station. Check the manual."
  },
  {
    "q": "Is the flexible set worth it over the folding unit?",
    "a": "For a fixed roof build, yes, and it costs about half. For a moving camp, the EYONGPV 600W HPBC is easier."
  },
  {
    "q": "How do I set up a 600W folding panel?",
    "a": "Unfold it facing the sun on level ground, secure the corners and connect the Anderson cable. Keep the cable clear of walkways. Re-aim every couple of hours."
  },
  {
    "q": "Can the flexible panels be used while portable?",
    "a": "They can lie on the ground, though they are meant to be mounted with airflow. Do not leave them on combustible surfaces. Wire them with the right fuses."
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
