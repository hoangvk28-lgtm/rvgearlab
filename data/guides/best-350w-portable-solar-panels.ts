export const guideSlug = "best-350w-portable-solar-panels";
export const guideTitle = "3 Best 350w Portable Solar Panels in 2026";
export const metaTitle = "Best 350w Portable Solar Panels in 2026";
export const metaDescription = "Best 350W portable solar panels compared on weight, voltage, warranty and station match for large power stations, with a 480W step-up option.";
export const mainKeyword = "best 350w portable solar panels";
export const introParagraphs = [
  "A 350W portable panel is built for big stations, and the two true 350W listings differ sharply in weight and warranty. A 480W bifacial panel is added as the step-up for buyers whose station can take more.",
  "A small power station bundle that only includes a 40W panel was left out. The three panels were compared on stated wattage, weight, open-circuit voltage, ingress rating and the support each listing names."
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
    "id": "best-350w-portable-solar-panels-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ZOUPW 350W Portable Solar Panel N-Type 16BB for Power Station",
    "price": "$349.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41LR-hOLK6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DSFT9FZT?tag=rvgearlab-amz-20",
    "description": "The ZOUPW 350W uses N-type 16-busbar cells with a 50.2V open-circuit voltage aimed at stations of 1kWh and up. It weighs 22.2 lbs, folds into a briefcase shape with a magnetic handle and carries IP68 protection with an IP67 junction box.\n\nIt weighs about 8 lbs less than the BLUETTI 350W and costs about half as much. Compared with the 480W ZOUPW, it gives up 130 watts for a lower price and an easier carry.\n\nIt suits owners of large stations who want a 350W panel with a 3-year warranty and lifetime technical support. A 4-in-1 cable, extension cable and storage bag are included.",
    "specs": [
      "350W N-type, 50.2V Voc",
      "22.2 lbs, briefcase fold",
      "IP68, 3-year warranty"
    ],
    "pros": [
      "About half the BLUETTI's price",
      "8 lbs lighter than the BLUETTI",
      "Three-year warranty and lifetime support",
      "Extension cable and bag included"
    ],
    "cons": [
      "50.2V suits only large stations",
      "Junction box rated IP67, below the panel"
    ],
    "bestFor": "Large stations and long stays",
    "take": "A 350W panel with a 3-year warranty, lighter than the BLUETTI at half the price.",
    "catch": "Its 50.2V Voc needs a station that accepts that voltage."
  },
  {
    "id": "best-350w-portable-solar-panels-2",
    "rank": 2,
    "badge": "Best for BLUETTI Stations",
    "name": "BLUETTI 350W Portable Solar Panel 23.4% High Efficiency IP67 Waterproof",
    "price": "$649.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31gcmB1NhHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09SD23Y6V?tag=rvgearlab-amz-20",
    "description": "The BLUETTI 350W uses monocrystalline cells at up to 23.4 percent efficiency with an ETFE coating and IP67 rating. Its listing names compatibility with the AC70, AC180, AC240, AC200L, Elite 200 V2, AC300 and AC500 through an MC4 connector.\n\nIt folds to 35.6 by 24.1 inches at 30.6 lbs, so it is the heaviest 350W here and the most expensive. Against the ZOUPW 350W, it brings a long named-station list and brand fit.\n\nIt suits BLUETTI owners who want a matched panel and a named compatibility list. The box includes a manual.",
    "specs": [
      "350W, 23.4%, IP67",
      "30.6 lbs, 35.6 x 24.1 in",
      "MC4, named BLUETTI stations"
    ],
    "pros": [
      "Long list of named BLUETTI stations",
      "IP67 rating",
      "ETFE coating",
      "MC4 connector standard"
    ],
    "cons": [
      "Heaviest 350W panel at 30.6 lbs",
      "Costs nearly twice the ZOUPW"
    ],
    "bestFor": "BLUETTI station owners",
    "take": "A 350W panel with a long named list of BLUETTI stations.",
    "catch": "Weight and price are high compared with the ZOUPW 350W."
  },
  {
    "id": "best-350w-portable-solar-panels-3",
    "rank": 3,
    "badge": "Best Step-Up",
    "name": "ZOUPW 480W Bifacial Portable Solar Panel N-Type 16BB for Power Station",
    "price": "$599.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JiOFXoSdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G3PJF9W8?tag=rvgearlab-amz-20",
    "description": "The ZOUPW 480W is a double-sided panel that adds as much as 30 percent from reflected light, on a 42.5V design with IP68 protection. A composite build instead of glass keeps it to 22.5 lbs.\n\nIt weighs almost the same as the ZOUPW 350W and delivers 130 more watts. It costs about 250 dollars more than that panel.\n\nIt suits large-station owners who want maximum watts for the carry weight. The rear gain adds output over bright ground.",
    "specs": [
      "480W bifacial N-type",
      "42.5V, 22.5 lbs",
      "IP68, composite build"
    ],
    "pros": [
      "Highest wattage here",
      "Bifacial gain up to 30 percent",
      "Same carry weight as the 350W",
      "IP68 rating"
    ],
    "cons": [
      "Rated 480W, not 350W",
      "Costs about 250 dollars more than the 350W"
    ],
    "bestFor": "Maximum watts per pound",
    "take": "The most power in the group at roughly the same weight as the 350W.",
    "catch": "The 30 percent gain needs bright reflective ground."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated wattage",
    "description": "True 350W listings were separated from the 480W step-up."
  },
  {
    "title": "Weight",
    "description": "Pounds were compared, since a large panel is a real carry."
  },
  {
    "title": "Voltage",
    "description": "Open-circuit voltage was compared against typical large-station inputs."
  },
  {
    "title": "Warranty and support",
    "description": "Named warranty terms were noted."
  },
  {
    "title": "Compatibility",
    "description": "Named station lists and connectors were compared."
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
    "subheading": "By Station",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Large station, longest warranty",
          "ZOUPW 350W Panel",
          "3-year warranty and 22.2 lbs."
        ],
        [
          "BLUETTI owner wanting a named match",
          "BLUETTI 350W Panel",
          "Lists AC70 through AC500."
        ],
        [
          "Station that takes 480W",
          "ZOUPW 480W Bifacial",
          "Highest watts at nearly the same weight."
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
          "$340 to $350",
          "ZOUPW 350W Panel"
        ],
        [
          "$590 to $600",
          "ZOUPW 480W Bifacial"
        ],
        [
          "$640 to $650",
          "BLUETTI 350W Panel"
        ]
      ]
    }
  },
  {
    "subheading": "Matched Brand vs Universal",
    "cards": [
      {
        "label": "Matched brand",
        "text": "A panel with a named station list is easy to match. The BLUETTI 350W Panel is built this way."
      },
      {
        "label": "Universal",
        "text": "A universal panel with a multi-connector cable fits more brands but needs a voltage check. The ZOUPW 350W Panel and ZOUPW 480W Bifacial fit here."
      }
    ],
    "note": "Most buyers should choose the ZOUPW 350W Panel unless they own a BLUETTI station."
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
          "ZOUPW 350W Panel"
        ],
        [
          "Mid budget, bigger",
          "ZOUPW 480W Bifacial"
        ],
        [
          "Highest budget, brand match",
          "BLUETTI 350W Panel"
        ]
      ]
    }
  },
  {
    "subheading": "Large Stations and Multi-Day Camps",
    "cards": [
      {
        "label": "Look for",
        "text": "A panel whose voltage fits the station, a weight you can carry, and a warranty that lasts."
      },
      {
        "label": "In this comparison",
        "text": "The ZOUPW 350W Panel offers a 3-year warranty, and the BLUETTI 350W Panel names several stations."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BLUETTI 350W Panel if you own a BLUETTI station, or on the ZOUPW 480W Bifacial for maximum watts."
      },
      {
        "label": "Save if",
        "text": "Save with the ZOUPW 350W Panel for the lowest price and weight."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Voltage first",
    "explanation": "A 350W panel often has an open-circuit voltage of 40 to 50 volts, which only large stations accept. Read the station's solar input limit and compare. Never connect above it."
  },
  {
    "criterion": "Real output",
    "explanation": "In good sun a 350W panel yields about 210 to 280 watts. Heat, haze and angle reduce it further. Plan around real output."
  },
  {
    "criterion": "Weight and carry",
    "explanation": "Panels of 22 to 31 pounds are a two-hand carry. Check folded size against your trunk. A briefcase fold stores easier than a flat one."
  },
  {
    "criterion": "Warranty length",
    "explanation": "Warranty terms vary from a few months to years, and a longer one signals confidence. Check the listing for the term and what it covers. Keep your order number."
  },
  {
    "criterion": "Named compatibility",
    "explanation": "A listing that names station models removes guesswork, and a generic one leaves it to you. Read the station input spec either way. Confirm the connector type."
  }
];

export const faq = [
  {
    "q": "Do I need a 350W portable panel?",
    "a": "Only with a large station that accepts 350W or more. Smaller stations are better served by 100W to 200W panels."
  },
  {
    "q": "What is the biggest mistake with large panels?",
    "a": "Ignoring voltage. A 50.2V Voc is more than many stations accept. Check the manual."
  },
  {
    "q": "Is the BLUETTI worth double the ZOUPW?",
    "a": "Only for the named BLUETTI match and brand support. The ZOUPW 350W Panel is lighter and carries a warranty."
  },
  {
    "q": "How do I set up a 350W panel?",
    "a": "Unfold it in open sun, set the kickstands and connect to the station with the extension cable. Secure it against wind."
  },
  {
    "q": "How do I store a large panel?",
    "a": "Wipe it dry, fold it into its bag or case and keep it away from sharp objects. Check connectors for dirt before each trip."
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
