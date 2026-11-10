export const guideSlug = "best-solar-panels-under-500";
export const guideTitle = "5 Best Solar Panels Under 500 in 2026";
export const metaTitle = "Best Solar Panels Under 500 in 2026";
export const metaDescription = "Best solar panels under $500: five 400 to 800W panel sets compared on cell type, voltage, portability and mounting for RV, cabin and station arrays.";
export const mainKeyword = "best solar panels under 500";
export const introParagraphs = [
  "Five hundred dollars is the array tier: 400W to 800W for a van roof, a cabin shed or a large power station. The five picks cost from about $230 to $490 and split into rigid sets and foldable portable panels.",
  "At this scale voltage, wiring and mounting matter as much as watts. The notes below explain what each pick needs from the rest of your system."
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
    "id": "best-solar-panels-under-500-1",
    "rank": 1,
    "badge": "Best Value Under $500",
    "name": "500W TÜV Certification Solar Panel",
    "price": "$237.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OQ-rWaiyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HDY6WZ8C?tag=rvgearlab-amz-20",
    "description": "ECOBOSS ships five 100W 12V N-type panels with 16BB cells at up to 25.8 percent efficiency and TÜV certification. The low-profile frames have pre-drilled mounting points, and a low temperature coefficient keeps output up in heat.\n\nAt about $237 it gives 500W for $8 more than the ECO-WORTHY 400W set. Five small panels also fit a roof more flexibly than two big ones, and they cost more to wire.\n\nChoose it for a van or shed roof where you need to work around vents. TÜV certification is a mark of independent testing for safety and reliability.",
    "specs": [
      "Five 100W N-type panels, 500W",
      "Up to 25.8% efficiency, 16BB",
      "TÜV certified, pre-drilled"
    ],
    "pros": [
      "500W for about $237",
      "TÜV certified for quality",
      "Small panels fit tight roofs",
      "Low temperature coefficient"
    ],
    "cons": [
      "Five panels to wire and mount",
      "Needs a controller"
    ],
    "bestFor": "Van roofs and sheds",
    "take": "The most watts for the money, with certification.",
    "catch": "Plan the wiring before you buy."
  },
  {
    "id": "best-solar-panels-under-500-2",
    "rank": 2,
    "badge": "Best Bifacial Set",
    "name": "ECO-WORTHY 400W Solar Panels N-Type 4pcs 100 Watt 18V Monocrystalline",
    "price": "$229.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51MfdHGrerL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CYH13JJK?tag=rvgearlab-amz-20",
    "description": "ECO-WORTHY ships four 100W bifacial N-type panels built on 16BB cells with efficiency up to 25 percent. Each has 35 inch cables, bypass diodes in an IP68 junction box and a 1.18 inch thick body for heat dissipation, and the set suits 12V or 24V systems.\n\nAt about $230 it is the cheapest set in the guide and the only one with bifacial panels. The ECOBOSS gives 100W more for $8 more.\n\nChoose it for a ground mount or a flat roof where reflected light helps. It suits cabins and sheds.",
    "specs": [
      "Four 100W bifacial N-type, 400W",
      "Up to 25% efficiency, 16BB",
      "IP68 box, bypass diodes"
    ],
    "pros": [
      "Bifacial back side adds output",
      "Cheapest set in the guide",
      "Bypass diodes handle shade",
      "Fits 12V or 24V systems"
    ],
    "cons": [
      "Only 400W",
      "Four panels to wire"
    ],
    "bestFor": "Ground mounts and cabins",
    "take": "The cheapest bifacial array.",
    "catch": "Mount over a light surface."
  },
  {
    "id": "best-solar-panels-under-500-3",
    "rank": 3,
    "badge": "Best Portable 400W",
    "name": "VLAIAN 400W Portable Solar Panel for Power Station Generator",
    "price": "$299.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Td7E73d8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FCC747WN?tag=rvgearlab-amz-20",
    "description": "VLAIAN is a foldable 400W panel with 23.5 percent monocrystalline cells, an ETFE surface and IP68 waterproofing. It has a support bracket for angling, comes with a 5.25 foot cable with MC4 to Anderson, XT60, XT90, DC7909 and DC5521 adapters and a 3-in-1 DC connector.\n\nAt about $300 it costs about $70 more than the rigid 400W set and folds to travel. The DOKIO 800W gives twice the watts for $190 more.\n\nChoose it for a big power station that accepts 400W of solar and a camp where the panel moves. It suits overlanding.",
    "specs": [
      "400W foldable, 23.5% cells",
      "ETFE, IP68, support bracket",
      "MC4 plus Anderson, XT60, XT90"
    ],
    "pros": [
      "Folds for travel at 400W",
      "IP68 waterproof ETFE surface",
      "Adapters for most stations",
      "Support bracket for angling"
    ],
    "cons": [
      "Costs more than rigid sets",
      "Large and heavy to carry"
    ],
    "bestFor": "Overlanding with a big station",
    "take": "A 400W portable panel for large stations.",
    "catch": "Check the station's solar limit."
  },
  {
    "id": "best-solar-panels-under-500-4",
    "rank": 4,
    "badge": "Best For High-Voltage Stations",
    "name": "LVYUAN 500W Portable Solar Panel",
    "price": "$439.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fB7Q6bcHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GXYT9C87?tag=rvgearlab-amz-20",
    "description": "LVYUAN is a 500W foldable blanket panel with a 48V Vmp and 56.64V Voc rating, IP64 protection and four adapters. It packs down to roughly 19 by 22 inches.\n\nAt about $440 it costs $140 more than the VLAIAN and is made for a station whose high-voltage input accepts 48V. The 48V rating limits which stations work.\n\nChoose it for a high-voltage power station and a compact fold. The voltage ratings are stated clearly.",
    "specs": [
      "500W, 48V Vmp, 56.64V Voc",
      "Folds near 19 by 22 inches",
      "IP64, four adapters"
    ],
    "pros": [
      "500W in a compact fold",
      "Voltage and amps spelled out",
      "Four adapters included",
      "Lower price than similar-brand panels"
    ],
    "cons": [
      "IP64 handles splashes only",
      "High voltage limits station options"
    ],
    "bestFor": "High-voltage power stations",
    "take": "A compact 500W panel for the right station.",
    "catch": "Confirm the station's maximum voltage."
  },
  {
    "id": "best-solar-panels-under-500-5",
    "rank": 5,
    "badge": "Best Big Array",
    "name": "DOKIO 800W Solar Panels",
    "price": "$489.77",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51IW3hgoNdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DMSKP7JD?tag=rvgearlab-amz-20",
    "description": "DOKIO ships two 400W 31V monocrystalline panels with glass and aluminum frames and 3 meter MC4 leads on each panel. The set suits 12V or 24V systems and totals 800W.\n\nAt about $490 it is the most expensive pick and gives the most watts, about $0.61 per watt against $0.47 for the ECOBOSS. The panels are large rigid panels that need a roof or ground frame.\n\nChoose it for an off-grid cabin or an RV roof that needs 800W of solar. It needs a controller and brackets.",
    "specs": [
      "Two 400W 31V panels, 800W",
      "Glass and aluminum frames",
      "3 meter MC4 leads"
    ],
    "pros": [
      "800W for about $490",
      "Sturdy glass and aluminum frames",
      "Long leads on each panel",
      "12V or 24V systems"
    ],
    "cons": [
      "Rigid panels are not portable",
      "Needs a controller and mounts"
    ],
    "bestFor": "Cabins and big RV roofs",
    "take": "The biggest array under $500.",
    "catch": "Plan structure for large panels."
  }
];

export const howWeEvaluated = [
  {
    "title": "Total watts",
    "description": "Sets from 400W to 800W were compared per dollar."
  },
  {
    "title": "Format",
    "description": "Rigid and portable panels were separated."
  },
  {
    "title": "Voltage",
    "description": "12V, 24V and 48V systems were checked."
  },
  {
    "title": "Certification",
    "description": "Cell type and independent certification were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is under $500, and the top pick gives 500W for the lowest price."
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
          "Van roof with vents",
          "ECOBOSS 5x100W",
          "Small panels, TÜV certified."
        ],
        [
          "Cabin ground mount",
          "ECO-WORTHY 4x100W",
          "Bifacial and cheap."
        ],
        [
          "Overlanding with a station",
          "VLAIAN 400W Portable",
          "Folds, many adapters."
        ],
        [
          "High-voltage station",
          "LVYUAN 500W 48V",
          "48V Vmp."
        ],
        [
          "Off-grid cabin",
          "DOKIO 2x400W Set",
          "800W array."
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
          "$220 to $240",
          "ECO-WORTHY 4x100W or ECOBOSS 5x100W"
        ],
        [
          "$290 to $440",
          "VLAIAN 400W Portable or LVYUAN 500W 48V"
        ],
        [
          "$480 to $490",
          "DOKIO 2x400W Set"
        ]
      ]
    }
  },
  {
    "subheading": "Rigid vs portable",
    "cards": [
      {
        "label": "Rigid",
        "text": "The ECOBOSS 5x100W, ECO-WORTHY 4x100W and DOKIO 2x400W Set give the most watts per dollar and last decades. They need mounts."
      },
      {
        "label": "Portable",
        "text": "The VLAIAN 400W Portable and LVYUAN 500W 48V fold and travel. They cost more per watt."
      }
    ],
    "note": "Most buyers should take the ECOBOSS 5x100W for a fixed install."
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
          "About $230",
          "ECO-WORTHY 4x100W"
        ],
        [
          "About $237",
          "ECOBOSS 5x100W"
        ],
        [
          "About $300",
          "VLAIAN 400W Portable"
        ],
        [
          "About $440",
          "LVYUAN 500W 48V"
        ],
        [
          "About $490",
          "DOKIO 2x400W Set"
        ]
      ]
    }
  },
  {
    "subheading": "For a cabin or shed specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a rigid set, a 24V wiring option and an MPPT controller sized for the array."
      },
      {
        "label": "In this comparison",
        "text": "The DOKIO 2x400W Set gives 800W, and the ECO-WORTHY 4x100W gives 400W of bifacial output."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you need 800W or a high-voltage portable panel, which means the DOKIO 2x400W Set or LVYUAN 500W 48V. The extra money buys output, not quality."
      },
      {
        "label": "Save if",
        "text": "Save if 400W is enough, since the ECO-WORTHY 4x100W costs about $230."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "System voltage",
    "explanation": "A set wired in parallel keeps 12V and adds current, while series wiring adds voltage for a 24V or 48V system. Higher voltage means thinner wire and less loss. Check your controller's input limit before you choose a wiring style, since long cable runs lose less power at higher voltage."
  },
  {
    "criterion": "Panel count",
    "explanation": "Five small panels fit around roof obstacles and spread shading losses, while two large panels need less wiring and fewer mounts. A 100W panel weighs about 15 lb and a 400W panel about 45 lb. Check your roof size and your lifting ability, and five small panels give more mounting choices but five times the connectors to keep dry."
  },
  {
    "criterion": "Controller size",
    "explanation": "A 500W array at 12V can produce 40A, which needs a 40 to 60A MPPT controller that costs $100 to $200. That cost is separate from the panels. Check the controller's amp rating against the array, and a controller sized too small will limit the array and can overheat on a hot day, so add 25 percent headroom to the calculated amps."
  },
  {
    "criterion": "Bifacial and N-type",
    "explanation": "N-type cells lose less in heat and degrade slowly, and a bifacial panel adds 10 to 30 percent when mounted over a reflective surface. On a dark roof the bifacial gain is small. Check what the panels will sit above, so mounting a set a foot above light gravel or a white membrane gives the best gain, and the rear side also needs clearance for airflow."
  },
  {
    "criterion": "Portable or rigid",
    "explanation": "A portable 400W panel folds and plugs into a station but costs $70 more than a rigid set, and it weighs more to carry. Rigid sets last for decades. Decide whether the array stays or moves, so a portable panel is for movement and a rigid set for permanence; count how many nights a year the array will actually travel before paying the premium."
  },
  {
    "criterion": "Station input limits",
    "explanation": "Most stations accept 200 to 1200W of solar at 12 to 60V. A bigger array only helps up to that limit, and a panel above the voltage range can shut the input down. Check the station's maximum solar watts, its voltage window and its connector type before choosing, and keep a margin of 10 percent below the limit for cold mornings when panel voltage rises."
  }
];

export const faq = [
  {
    "q": "How many panels do I need for an RV?",
    "a": "Most RVs need 400 to 800W to run a fridge, lights and electronics through a day. A 400W array makes about 1.2 to 1.6 kWh a day in good sun. Add panels if you run air conditioning."
  },
  {
    "q": "Can I mix panels of different wattage?",
    "a": "Not in series, because the lowest-current panel limits the string. In parallel it is safer, but voltages should match. Keep the same panel in each string, and a mismatched string wastes the better panel and wire each string with its own fuse."
  },
  {
    "q": "Do I need a bigger controller for a bigger array?",
    "a": "Yes. A 500W array can produce 40A at 12V, which needs a 40 to 60A MPPT controller. Higher system voltage reduces the amps and the controller size, and size it with 25 percent headroom and check that the controller can take the voltage."
  },
  {
    "q": "Is a bifacial panel worth it?",
    "a": "Over a light surface such as gravel or sand it can add 10 to 20 percent. On a dark RV roof it adds little. The ECO-WORTHY 4x100W is the only bifacial set here and it needs clearance behind the panel."
  },
  {
    "q": "How do I protect a roof array in storms?",
    "a": "Use certified mounts, secure cables, add a fuse or breaker near the battery and ground the frame. Inspect after high winds. Check the panel's wind and snow ratings, and tighten brackets each spring and fall."
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
