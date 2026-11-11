export const guideSlug = "best-led-camping-lights";
export const guideTitle = "5 Best Led Camping Lights in 2026";
export const metaTitle = "Best Led Camping Lights in 2026";
export const metaDescription = "Best LED camping lights compared on lumens, battery type, hanging design and weather rating, for campers who want tent bulbs and area lights in one kit.";
export const mainKeyword = "best led camping lights";
export const introParagraphs = [
  "LED camping lights cover everything from a pocket bulb that hangs in a tent to a 1500 lumen area light. The right choice depends on whether you want AAA cells, a USB-C pack or a magnet to stick it to the car.",
  "Five lights made the list, from a four-pack of AAA-powered bulbs to a 4000 lumen magnetic light. They were read for stated lumens, power source, hanging design and weather ratings, with notes wherever a number is missing."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/lighting-headlamp-tent.webp";
export const heroImageAlt = "Camper wearing a headlamp in front of a tent at night";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-led-camping-lights-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ZMNT LED Camping Lantern Rechargeable 1000LM",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31LK3sZEb3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09GY73946?tag=rvgearlab-amz-20",
    "description": "The ZMNT lists 1000 lumens, a 6700mAh battery rated up to 300 hours at the lowest setting and four modes including SOS. A built-in magnet and hook let you attach it to metal or hang it, and the waterproof rating is IPX5.\n\nIt has the biggest battery of the five and the longest stated runtime, ahead of the iodoo and YZMYUKS. The 2-year warranty named in the listing backs the build.\n\nIt suits campers who want a dependable all-rounder that doubles as a phone power bank. Infinite dimming handles bedside to campsite use.",
    "specs": [
      "1000 lumens, 6700mAh",
      "Up to 300 hours low",
      "IPX5, magnet and hook"
    ],
    "pros": [
      "Up to 300 hours on the lowest setting",
      "Magnet and hook for hands-free use",
      "IPX5 water resistance",
      "Power bank for a phone"
    ],
    "cons": [
      "Peak lumens drain the pack quickly",
      "Single light, not a pack"
    ],
    "bestFor": "All-round camp light",
    "take": "A big-battery light that hangs, sticks to metal and charges a phone.",
    "catch": "The 300 hour figure is the dimmest setting."
  },
  {
    "id": "best-led-camping-lights-2",
    "rank": 2,
    "badge": "Best Brightness",
    "name": "4000LM Flashlight Portable LED Camping Light Tent Lights",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31j9HrfOs4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08YY4S4PJ?tag=rvgearlab-amz-20",
    "description": "The iodoo lists 4000 lumens, IPX5 waterproofing and a hook and magnet on the base so it can hang upside down to throw light over a large area. Short presses adjust brightness and a long press starts the flash mode.\n\nIt is the brightest light on the list, well ahead of the YZMYUKS at 1500 lumens. Next to the ZMNT, it states a higher lumen figure and no runtime hours.\n\nIt suits campers who light a canopy or a large campsite. An SOS flash mode adds an emergency signal.",
    "specs": [
      "4000 lumens",
      "IPX5 waterproof",
      "Hook and magnet base"
    ],
    "pros": [
      "Highest stated lumens of the five",
      "IPX5 handles heavy weather",
      "Hangs upside down for wide light",
      "SOS flash mode"
    ],
    "cons": [
      "Battery is sealed and not replaceable",
      "No runtime hours stated"
    ],
    "bestFor": "Large campsites",
    "take": "The brightest option for lighting a canopy or table.",
    "catch": "The listing states a built-in battery that cannot be replaced, so treat it as a sealed unit."
  },
  {
    "id": "best-led-camping-lights-3",
    "rank": 3,
    "badge": "Best Battery Swap",
    "name": "Lepro LED Camping Lantern with 3 Light Modes",
    "price": "$15.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413TbkOsSVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B083TXB5QY?tag=rvgearlab-amz-20",
    "description": "The Lepro four-pack has bulbs under the size of an A19 light bulb, weighing 55g with batteries, and three AAA cells come included in each. Modes include 80 lumens daylight and soft white for 10 hours, and a 140 lumen high beam.\n\nIt is the only pick that ships with its cells in the box. Against the MalloMe, it adds a top hook and a flashlight-style handheld mode.\n\nIt suits families who want one light per person at low cost. Hook tops make them easy to hang from tent loops.",
    "specs": [
      "Three AAA included, 55g",
      "80 to 140 lumens, 3 modes",
      "Hook design"
    ],
    "pros": [
      "Batteries included in the pack",
      "Light and small at 55g",
      "Hook for tent loops",
      "Four lights per purchase"
    ],
    "cons": [
      "Lower lumen output than other picks",
      "AAA cells run out over a long trip"
    ],
    "bestFor": "Family tents",
    "take": "A cheap four-pack for people who prefer swapping cells.",
    "catch": "AAA cells run down sooner than a USB pack, so carry spares."
  },
  {
    "id": "best-led-camping-lights-4",
    "rank": 4,
    "badge": "Best Pocket Size",
    "name": "MalloMe Camping Lights LED Lantern Flashlights",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fuhgVhgoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGWHJ8XJ?tag=rvgearlab-amz-20",
    "description": "The MalloMe is a battery-operated lantern with COB LED technology producing up to 300 lumens in a 360 degree glow. It collapses to 3.7 inches tall and turns on by lifting the top, with foldaway handles.\n\nIt sits at the bottom of the price range and packs smaller than the other picks. Compared with the ZMNT, it swaps the rechargeable pack for a simple pull-up design.\n\nIt suits backpackers and emergency kits where size matters. The water-resistant build suits a drawer or glove box.",
    "specs": [
      "300 lumens, COB LED",
      "3.7 inches collapsed",
      "Pull-up, no buttons"
    ],
    "pros": [
      "Collapses to 3.7 inches",
      "Pull-up operation, no switch",
      "Among the lowest prices here",
      "Foldaway handles"
    ],
    "cons": [
      "Runtime is not stated",
      "Battery type needs checking"
    ],
    "bestFor": "Emergency kits and daypacks",
    "take": "A tiny, simple lantern that fits any pocket.",
    "catch": "With no runtime figure, carry spare batteries."
  },
  {
    "id": "best-led-camping-lights-5",
    "rank": 5,
    "badge": "Best Foldable",
    "name": "Collapsible Portable Ultra Bright LED Camping Lantern 1500 Lumens USB-C Rechargeable Tent Light 5 Modes 3 Ligh",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Xz6V2KytL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GL1TGW1S?tag=rvgearlab-amz-20",
    "description": "The YZMYUKS lists 1500 lumens, a Type-C port and five modes across three light colours. It folds, rotates 180 degrees and weighs 0.64 lb, in ABS and PC.\n\nIt is brighter than the MalloMe by a wide margin and lighter than a typical lantern. Against the iodoo, it adds Type-C charging and a foldable body.\n\nIt suits car campers on a budget who want a bright, rechargeable light. The 5.91 by 3.8 by 1.18 inch body is easy to pack.",
    "specs": [
      "1500 lumens, Type-C",
      "Five modes, three colours",
      "0.64 lb, foldable"
    ],
    "pros": [
      "Type-C rechargeable",
      "Three light colours",
      "Folds to a slim body",
      "Rotates 180 degrees"
    ],
    "cons": [
      "Battery size is not stated",
      "Rated lumens apply to the top mode"
    ],
    "bestFor": "Budget car camping",
    "take": "A cheap, bright, foldable USB-C light.",
    "catch": "Without a battery figure, runtime is a guess."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated lumens",
    "description": "Compared figures from 80 to 4000 lumens."
  },
  {
    "title": "Power source",
    "description": "Looked at AAA cells, sealed packs and USB-C charging."
  },
  {
    "title": "Hanging design",
    "description": "Noted hooks, magnets and foldable handles."
  },
  {
    "title": "Weather rating",
    "description": "Read IPX5 and water-resistant claims."
  },
  {
    "title": "Size and weight",
    "description": "Compared packed dimensions."
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
    "subheading": "By Camp Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "All-round camp light",
          "ZMNT 6700mAh Light",
          "1000 lumens and 6700mAh."
        ],
        [
          "Lighting a canopy",
          "iodoo 4000LM Light",
          "4000 lumens and a magnet base."
        ],
        [
          "One light per person",
          "Lepro AAA 4-Pack",
          "Four lights with batteries included."
        ],
        [
          "Backpack or emergency kit",
          "MalloMe 300 Pocket Light",
          "Collapses to 3.7 inches."
        ],
        [
          "Budget rechargeable",
          "YZMYUKS 1500 Lumen Light",
          "Type-C at a low price."
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
          "$0 to $10",
          "MalloMe 300 Pocket Light or YZMYUKS 1500 Lumen Light"
        ],
        [
          "$10 to $30",
          "Lepro AAA 4-Pack or iodoo 4000LM Light"
        ],
        [
          "$20 to $30",
          "ZMNT 6700mAh Light"
        ]
      ]
    }
  },
  {
    "subheading": "Replaceable Cells vs Sealed Pack",
    "cards": [
      {
        "label": "Replaceable cells",
        "text": "The Lepro AAA 4-Pack and MalloMe 300 Pocket Light use cells you can swap, which keeps the light alive on a long trip."
      },
      {
        "label": "Sealed pack",
        "text": "The ZMNT 6700mAh Light, iodoo 4000LM Light and YZMYUKS 1500 Lumen Light charge by cable, giving longer runs at the cost of a fixed battery."
      }
    ],
    "note": "Most campers should choose a rechargeable like the ZMNT 6700mAh Light and keep the Lepro AAA 4-Pack as a spare."
  },
  {
    "subheading": "By Mounting",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Magnet on metal",
          "iodoo 4000LM Light"
        ],
        [
          "Hook for tent loops",
          "Lepro AAA 4-Pack"
        ],
        [
          "Foldable stand",
          "YZMYUKS 1500 Lumen Light"
        ],
        [
          "Hook and magnet",
          "ZMNT 6700mAh Light"
        ]
      ]
    }
  },
  {
    "subheading": "For Tent Lighting Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A light of 80 to 300 lumens with a hook and a stated runtime."
      },
      {
        "label": "In this comparison",
        "text": "The Lepro AAA 4-Pack lists 80 and 140 lumen modes, a hook and included batteries."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ZMNT 6700mAh Light or iodoo 4000LM Light for runtime or brightness."
      },
      {
        "label": "Save if",
        "text": "Save with the Lepro AAA 4-Pack or MalloMe 300 Pocket Light for basic tent light."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Lumens versus the job",
    "explanation": "80 lumens lights a tent corner, 300 lumens lights a table, and 1000 lumens or more lights a canopy. Peak lumens belong to the top mode and drain the battery fastest. Find the lumen number in the title and match it to the space."
  },
  {
    "criterion": "Battery type and replacement",
    "explanation": "AAA cells swap in seconds, while sealed packs need a charger and cannot be replaced. A sealed pack is lighter and often bigger. Check the listing for the battery type and any non-removable warning."
  },
  {
    "criterion": "Hanging and magnets",
    "explanation": "A hook hangs the light from a loop, and a magnet clings to a vehicle or pole. The right mount saves you propping it up. Look for the words hook, magnet or stand in the title."
  },
  {
    "criterion": "Water rating",
    "explanation": "IPX5 means the light handles rain, while a general water-resistant claim only covers a splash. A light left out overnight needs at least IPX4. Look for an IPX code."
  },
  {
    "criterion": "Runtime on low",
    "explanation": "A big battery rated up to 300 hours on low is useful only if low is bright enough to see. Check both the runtime and the lowest lumen level. Look for hours at a named brightness."
  },
  {
    "criterion": "Pack count and cost",
    "explanation": "A four-pack costs less per light and lights each tent, but each unit is dimmer. One bright light suits a campsite. Check the pack count."
  }
];

export const faq = [
  {
    "q": "How many lumens do I need for a tent?",
    "a": "About 80 to 150 lumens is plenty for a tent. The Lepro AAA 4-Pack lists 80 and 140 lumen modes. Larger spaces need 300 or more."
  },
  {
    "q": "What is the common mistake?",
    "a": "Buying on the peak lumen number alone. The iodoo 4000LM Light is bright, yet a sealed battery with no runtime stated is hard to plan around."
  },
  {
    "q": "Is a 4000 lumen light worth it?",
    "a": "For a canopy or campsite, yes. For a tent, it is more than you need, and a 300 lumen light like the MalloMe 300 Pocket Light suffices."
  },
  {
    "q": "How do I charge or power these lights?",
    "a": "The ZMNT 6700mAh Light and YZMYUKS 1500 Lumen Light charge by cable. The Lepro AAA 4-Pack takes AAA cells. Bring spares or a power bank."
  },
  {
    "q": "How do I care for LED camping lights?",
    "a": "Wipe them dry after use and keep seals closed. Remove AAA cells for long storage and top up sealed packs every few months."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Towels",
    "href": "/campsite-gear/best-camping-towels"
  },
  {
    "title": "Best Dry Bags",
    "href": "/campsite-gear/best-dry-bags"
  },
  {
    "title": "Best Camping Lanterns And Camping Lights",
    "href": "/campsite-gear/best-camping-lanterns-and-camping-lights"
  },
  {
    "title": "Best Headlamps",
    "href": "/campsite-gear/best-headlamps"
  }
];
