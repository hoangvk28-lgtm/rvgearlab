export const guideSlug = "best-foldable-solar-panels-with-xt60-connectors";
export const guideTitle = "2 Best Foldable Solar Panels With Xt60 Connectors in 2026";
export const metaTitle = "Best Foldable Solar Panels With Xt60 Connectors";
export const metaDescription = "Two foldable solar panels that list XT60 connectors, a 400W and a 200W, compared on voltage, weight, kickstands and station compatibility.";
export const mainKeyword = "best foldable solar panels with xt60 connectors";
export const introParagraphs = [
  "Few foldable panels name XT60 in the listing, because many sellers ship MC4 plugs and leave adapters to the buyer. Two do: a 400W panel that includes an adapter cable set, and a 200W panel with XT60 and Anderson connectors built in.",
  "They were compared on stated wattage and voltage, weight, kickstands, waterproof rating and which power stations the listing names. Loose XT60 cables and adapters were left out because they are accessories, not panels."
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
    "id": "best-foldable-solar-panels-with-xt60-connectors-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ALLWEI 200W Portable Solar Panel for 1200W 2400W Power Station Solar Generator",
    "price": "$299.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41O4XSnk1TL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BJFM63TN?tag=rvgearlab-amz-20",
    "description": "The ALLWEI is an 18V, 200W foldable panel with built-in M20 XT60 and Anderson connectors and a 2 meter cable. It has four adjustable kickstands, a magnetic buckle fold and a TPE rubber handle, 23 percent monocrystalline cells and over-current, overload and short-circuit protection.\n\nIt weighs 14 pounds and plugs straight into stations with XT60 inputs, with no adapter set. Against the MHPOWOS, it has half the watts and a lower 18V rating, and the plug sits on the panel instead of on a separate cable.\n\nIt suits owners of mid-size stations that accept XT60, such as the models named in the listing. The listing gives charge-time examples for two station sizes.",
    "specs": [
      "200W, 18V, built-in XT60 and Anderson",
      "4 kickstands, magnetic buckle",
      "14 lbs, 23% efficiency"
    ],
    "pros": [
      "Built-in XT60 and Anderson connectors",
      "Four adjustable kickstands",
      "Protection against overload and shorts",
      "Charge-time examples listed"
    ],
    "cons": [
      "Names specific stations only",
      "Heavy at 14 pounds"
    ],
    "bestFor": "Mid-size stations with XT60 inputs",
    "take": "A 200W panel with the XT60 plug built in.",
    "catch": "The compatibility examples cover specific stations, so check yours."
  },
  {
    "id": "best-foldable-solar-panels-with-xt60-connectors-2",
    "rank": 2,
    "badge": "Best High Wattage",
    "name": "400W 31V Portable Solar Panel for Power Station",
    "price": "$369.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hjpOSgVVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DP21CZ7J?tag=rvgearlab-amz-20",
    "description": "The MHPOWOS is a 400W, 31V foldable panel using A+ monocrystalline cells rated at 23.5 percent and an IP67 body. A solar extension cable with Anderson, XT60, DC7909, DC5521, DC8020, DC5525 and DC35135 ends comes in the box, along with a zippered accessory pouch and an 18 month warranty.\n\nIt has double the watts of the ALLWEI and the widest connector set, which suits larger stations and series charging. Compared with the ALLWEI, it costs more and the XT60 is on the cable, not the panel.\n\nIt suits campers with large power stations who want faster daily recharges. The IP67 rating handles rain and dust.",
    "specs": [
      "400W, 31V, 23.5% efficiency",
      "IP67, zippered pouch",
      "Cable to XT60, Anderson and more"
    ],
    "pros": [
      "400W for fast recharges",
      "Cable set covers seven connector types",
      "IP67 dust and water rating",
      "Accessory pouch included"
    ],
    "cons": [
      "Priciest panel here",
      "Station input limits may cap the 400W"
    ],
    "bestFor": "Large stations and fast recharging",
    "take": "A 400W panel with a cable that covers seven connector types.",
    "catch": "Many stations cap solar input below 400W, so excess watts go unused."
  }
];

export const howWeEvaluated = [
  {
    "title": "XT60 claim",
    "description": "Listings were kept only if XT60 appears as a built-in or included connection."
  },
  {
    "title": "Wattage and voltage",
    "description": "Rated watts and volts were compared against typical station inputs."
  },
  {
    "title": "Weight and setup",
    "description": "Printed weight, kickstands and folds were compared."
  },
  {
    "title": "Weather rating",
    "description": "IP67 and similar claims were noted."
  },
  {
    "title": "Warranty and protection",
    "description": "Warranty length and protection features were compared."
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
    "subheading": "By Station Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Mid-size station, 200W input",
          "ALLWEI 200W",
          "Built-in XT60 and Anderson."
        ],
        [
          "Large station with high input",
          "MHPOWOS 400W",
          "400W with a seven-end cable."
        ],
        [
          "Want one-step plug in",
          "ALLWEI 200W",
          "XT60 is on the panel."
        ],
        [
          "Want extra connector choices",
          "MHPOWOS 400W",
          "Cable covers seven connectors."
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
          "$290 to $300",
          "ALLWEI 200W"
        ],
        [
          "$360 to $370",
          "MHPOWOS 400W"
        ]
      ]
    }
  },
  {
    "subheading": "Built-in XT60 vs Included Cable",
    "cards": [
      {
        "label": "Built-in XT60",
        "text": "The plug is on the panel, so setup has fewer parts. The ALLWEI 200W is in this group."
      },
      {
        "label": "Included cable",
        "text": "An extension cable carries the XT60 end and several others, giving more flexibility. The MHPOWOS 400W is in this group."
      }
    ],
    "note": "Most mid-size station owners should pick the ALLWEI 200W."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lower cost",
          "ALLWEI 200W"
        ],
        [
          "Higher output",
          "MHPOWOS 400W"
        ]
      ]
    }
  },
  {
    "subheading": "Mid-Size XT60 Stations",
    "cards": [
      {
        "label": "Look for",
        "text": "A panel at or near your station's solar input limit and a plug that fits directly."
      },
      {
        "label": "In this comparison",
        "text": "The ALLWEI 200W lists charge-time examples for two station sizes and carries the XT60 on the panel."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the MHPOWOS 400W if your station accepts a 400W input and you want faster recharges."
      },
      {
        "label": "Save if",
        "text": "Save with the ALLWEI 200W if your station takes about 200W of input."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What XT60 is",
    "explanation": "XT60 is a compact yellow connector used on many portable power stations and RC batteries. A panel with MC4 plugs needs an MC4 to XT60 cable, which is an easy add-on. Look for XT60 in the title or bullets, or buy a cable with the panel."
  },
  {
    "criterion": "Check the voltage window",
    "explanation": "Every station accepts solar input in a voltage range and an amp limit. Panels above that voltage can shut the input off. Check the input range in your station manual against the panel's volts."
  },
  {
    "criterion": "Match watts to the input",
    "explanation": "A station caps solar input at its rated watts, so a 400W panel into a 200W input wastes the extra. The surplus is not stored for later. Look at the station's maximum solar input before buying."
  },
  {
    "criterion": "Polarity and plug direction",
    "explanation": "XT60 plugs are keyed, but cables built with reversed polarity exist. Check positive and negative before connecting. Look for polarity markings on the listing."
  },
  {
    "criterion": "Cable length and gauge",
    "explanation": "A thin or long cable between panel and station loses power. A 10 gauge cable loses less than 14 gauge at the same length. Check the cable gauge and length when you add an extension."
  }
];

export const faq = [
  {
    "q": "Do all power stations use XT60 connectors?",
    "a": "No. Many use XT60, others use Anderson, DC7909 or DC5521. The MHPOWOS 400W cable covers seven connector types, while the ALLWEI 200W has XT60 and Anderson built in."
  },
  {
    "q": "What is the biggest mistake when matching a panel to XT60?",
    "a": "Ignoring the voltage window. A panel that exceeds the station's input voltage may not charge. Check the manual."
  },
  {
    "q": "Is the 400W panel worth it over the 200W?",
    "a": "Only if your station accepts 400W. The MHPOWOS 400W costs more, and a lower input limit wastes the extra watts."
  },
  {
    "q": "How do I set up the panel?",
    "a": "Unfold the panel in full sun, set the kickstands, connect the cable to the station and check the input watts. Keep the station in shade."
  },
  {
    "q": "Can I add an XT60 cable to any panel?",
    "a": "Yes, if the panel's connector type matches the cable's other end. Check the gauge and length, since long thin cables lose power."
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
