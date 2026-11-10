export const guideSlug = "best-canister-stoves-for-cold-weather";
export const guideTitle = "3 Best Canister Stoves For Cold Weather in 2026";
export const metaTitle = "Best Canister Stoves For Cold Weather in 2026";
export const metaDescription = "Best canister stoves for cold weather compared on regulators, inverted feed, wind resistance and weight, with honest notes on what each listing says.";
export const mainKeyword = "best canister stoves for cold weather";
export const introParagraphs = [
  "Cold weather is hard on canister stoves because the fuel loses pressure as it chills, and the flame drops. The stoves that cope best use a regulator or an inverted canister to keep the output steady.",
  "Only three stoves in this lineup are real canister stoves with cold-weather features. Fuel canisters appeared in the results too, but they are covered as a criteria tip, not ranked as stoves."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/kitchen-camp-stove-coffee.webp";
export const heroImageAlt = "Single-burner camp stove brewing coffee on a riverside rock";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-canister-stoves-for-cold-weather-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Optimus Vega 4-Season Backpacking Stove",
    "price": "$119.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415zICKwZbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0098P71UK?tag=rvgearlab-amz-20",
    "description": "The Optimus Vega is a remote canister stove built for cold, and its listing says flipping the cartridge upside down switches it to liquid fuel feed. It weighs 6.3 oz and accepts pots up to 22 cm (8.7 in) wide.\n\nThat inverted feed is the cold-weather feature the SOTO Fusion Trek replaces with a regulator, and it runs on propane, butane or isobutane EN417 cartridges. It is lighter and simpler than the Polaris Optifuel.\n\nIt suits winter hikers and climbers who cook in freezing conditions. Wide pot supports make snow melting steadier.",
    "specs": [
      "Inverted liquid feed",
      "6.3 oz remote canister",
      "Pots up to 8.7 inches"
    ],
    "pros": [
      "Liquid feed for cold nights",
      "Fuel choices include propane",
      "Wide pot supports",
      "Light for a winter stove"
    ],
    "cons": [
      "Costs more than basic stoves",
      "Canister must stay warm"
    ],
    "bestFor": "Freezing nights",
    "take": "The straightforward cold-weather canister stove.",
    "catch": "It still needs a warm canister on the coldest nights."
  },
  {
    "id": "best-canister-stoves-for-cold-weather-2",
    "rank": 2,
    "badge": "Best Regulated Stove",
    "name": "SOTO Fusion Trek Detachable Compact & Portable Camping Gas Stove with Micro Regulator Valve System",
    "price": "$99.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411-axA8Y4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09NXWKRR5?tag=rvgearlab-amz-20",
    "description": "The SOTO Fusion Trek is a detachable canister stove with a micro regulator valve system that weighs 6.4 oz. A concave burner head and short individual flames make it wind resistant, and a flame control knob adjusts heat.\n\nWhere the Vega relies on flipping the canister, the SOTO uses a regulator to keep the flame steady as fuel gets low. It also detaches from the canister for easy storage.\n\nIt suits campers who want steady output and wind resistance without inverting a canister. It works with most outdoor gas canisters.",
    "specs": [
      "Micro regulator valve",
      "Concave, wind-resistant burner",
      "6.4 oz, detachable"
    ],
    "pros": [
      "Regulator keeps the flame steady",
      "Wind-resistant burner head",
      "Detaches for compact storage",
      "Works with most canisters"
    ],
    "cons": [
      "No inverted feed is listed",
      "Pricier than simple burners"
    ],
    "bestFor": "Windy cold mornings",
    "take": "A regulated, wind-resistant stove for mixed conditions.",
    "catch": "It lacks an inverted-canister design."
  },
  {
    "id": "best-canister-stoves-for-cold-weather-3",
    "rank": 3,
    "badge": "Best for Extreme Cold",
    "name": "Optimus Polaris Optifuel Multifuel Mountaineering Stove For Expedition",
    "price": "$199.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41MkppCFt-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00SVD6368?tag=rvgearlab-amz-20",
    "description": "The Optimus Polaris Optifuel is a multifuel stove with a 4-season mode that boosts output and shortens boil times in the cold. It runs on butane, isobutane, propane, white gas, kerosene, diesel and jet fuel through one jet.\n\nIt ships with a FLIPSTOP pump, multitool, windscreen, heat reflector and stuff sack. That kit and the self-cleaning magnetic jet go beyond what the Vega and SOTO offer.\n\nIt suits expedition users and mountaineers who need a stove that works on whatever fuel is available. It also handles canister fuel.",
    "specs": [
      "4-season mode",
      "Burns seven fuel types",
      "Full field kit included"
    ],
    "pros": [
      "Boosted 4-season output",
      "Self-cleaning jet",
      "Windscreen and reflector included",
      "Fuel flexibility worldwide"
    ],
    "cons": [
      "Most expensive here",
      "Needs more care than a canister stove"
    ],
    "bestFor": "Expeditions",
    "take": "The extreme-cold choice for travelers who need fuel flexibility.",
    "catch": "It is the priciest and the most complex."
  }
];

export const howWeEvaluated = [
  {
    "title": "Cold feed",
    "description": "We checked for inverted feed, regulators or a 4-season mode."
  },
  {
    "title": "Wind resistance",
    "description": "We compared burner heads and included windscreens."
  },
  {
    "title": "Fuel compatibility",
    "description": "We compared the canister standards and fuels each stove accepts."
  },
  {
    "title": "Weight",
    "description": "We compared stated weights."
  },
  {
    "title": "Value",
    "description": "We matched price to what the listing offers."
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
    "subheading": "By Cold Level",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Freezing nights with a canister",
          "Optimus Vega",
          "Flip the cartridge for liquid feed."
        ],
        [
          "Windy, mixed weather",
          "SOTO Fusion Trek",
          "Regulator and wind-resistant head."
        ],
        [
          "Extreme cold, expedition",
          "Optimus Polaris",
          "4-season mode and seven fuels."
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
          "$90 to $100",
          "SOTO Fusion Trek"
        ],
        [
          "$110 to $120",
          "Optimus Vega"
        ],
        [
          "$190 to $200",
          "Optimus Polaris"
        ]
      ]
    }
  },
  {
    "subheading": "Regulator vs Inverted Canister",
    "cards": [
      {
        "label": "Regulator",
        "text": "The SOTO Fusion Trek uses a micro regulator to keep output steady."
      },
      {
        "label": "Inverted",
        "text": "The Optimus Vega flips the canister to feed liquid fuel in the cold."
      }
    ],
    "note": "Choose the Optimus Vega for the coldest canister use, the SOTO Fusion Trek for wind."
  },
  {
    "subheading": "By Fuel Plan",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Canister only",
          "Optimus Vega"
        ],
        [
          "Most outdoor canisters",
          "SOTO Fusion Trek"
        ],
        [
          "Any liquid fuel",
          "Optimus Polaris"
        ]
      ]
    }
  },
  {
    "subheading": "For Winter Backpacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "An inverted feed or regulator, a wide pot support and a warm canister plan."
      },
      {
        "label": "In this comparison",
        "text": "The Optimus Vega accepts pots up to 8.7 inches and flips for liquid feed."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Optimus Polaris if you go to extreme cold or abroad. The Optimus Vega is the sensible canister choice."
      },
      {
        "label": "Save if",
        "text": "Save with the SOTO Fusion Trek if you hike in wind but rarely in deep freeze."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Regulator or inverted feed",
    "explanation": "Regulators hold gas pressure steady as the canister cools, and inverted feed sends liquid fuel to the burner. Both reduce the usual cold-weather sputter. Look for the word regulator or the ability to flip the canister."
  },
  {
    "criterion": "Fuel blend",
    "explanation": "Canisters with a higher propane share vaporize better in cold. The MSR IsoPro listing describes an 80/20 isobutane and propane blend. Check the blend printed on the canister."
  },
  {
    "criterion": "Wind resistance",
    "explanation": "Wind steals heat from the flame and the pot. A concave burner or a windscreen helps. Check whether a screen is included."
  },
  {
    "criterion": "Weight",
    "explanation": "A 6 oz stove is easy to carry, and a multifuel stove with a pump is heavier. Decide how much capability you need. Add the fuel weight."
  },
  {
    "criterion": "Pot support",
    "explanation": "Snow melting uses bigger pots. A wide support holds them steady. Check the listed pot width."
  }
];

export const faq = [
  {
    "q": "Why do canister stoves struggle in cold?",
    "a": "As the fuel cools, its pressure drops and the flame weakens. Regulators and inverted feed counter this, while warming the canister helps."
  },
  {
    "q": "Which canister fuel is best in cold?",
    "a": "Blends with more propane vaporize better. The MSR IsoPro listing describes an 80/20 isobutane and propane blend as better in colder temperatures."
  },
  {
    "q": "Is the SOTO Fusion Trek as good as the Vega in cold?",
    "a": "It holds steady output with a regulator, but it has no inverted feed. For deep cold the Optimus Vega is the safer choice."
  },
  {
    "q": "How do I light a stove in the cold?",
    "a": "Keep the canister warm in a jacket and shield the burner from wind. Use a lighter if the igniter fails. Never use the stove inside a tent."
  },
  {
    "q": "How do I store canisters?",
    "a": "Keep them dry and upright at room temperature. Remove them from the stove after use and cap them."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Cookpots",
    "href": "/camp-kitchen/best-backpacking-cookpots"
  },
  {
    "title": "Best Backpacking Stoves",
    "href": "/camp-kitchen/best-backpacking-stoves"
  },
  {
    "title": "Best Camping Coffee",
    "href": "/camp-kitchen/best-camping-coffee"
  },
  {
    "title": "Best Camping Coffeemakers",
    "href": "/camp-kitchen/best-camping-coffeemakers"
  }
];
