export const guideSlug = "best-camping-lanterns-for-backpacking";
export const guideTitle = "6 Best Camping Lanterns For Backpacking in 2026";
export const metaTitle = "Best Camping Lanterns For Backpacking in 2026";
export const metaDescription = "Packable camping lanterns for backpacking compared on weight, packed size, brightness and battery type, from inflatable solar to collapsible AA models.";
export const mainKeyword = "best camping lanterns for backpacking";
export const introParagraphs = [
  "On the trail every ounce and cubic inch counts, so a backpacking lantern is judged by how small it packs and how long it runs, not by peak lumens. This list covers six lights that collapse, inflate or fit in a palm.",
  "Listings were compared on stated weight or packed size, light output, power source and water rating. Several do not give a weight, so the guide points out where to check before you buy."
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
    "id": "best-camping-lanterns-for-backpacking-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "DIBMS Solar Camping Lantern",
    "price": "$8.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ZN2nw+TNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CHJ637HV?tag=rvgearlab-20",
    "description": "The DIBMS is a collapsible lantern that lists 300 lumens from six LED chips and an 8.02 ounce weight. It has a built-in 1600mAh battery that charges by USB cable in about 4 hours or by solar in 9 hours of direct sun.\n\nIt is the only pick that combines a collapsible body, a built-in battery and solar charging, which the Lewis N. Clark and ILEEDear lack. It also lists 6 to 11 hours of light and IPX4 protection.\n\nIt suits backpackers who want a rechargeable light that packs down and needs no spare batteries. A folding hook lets it hang from a tent loop.",
    "specs": [
      "300 lumens, 8.02 oz",
      "1600mAh, USB or solar",
      "Collapsible, IPX4"
    ],
    "pros": [
      "Lists a weight under half a pound",
      "Charges by USB or solar",
      "Collapses for packing",
      "No spare batteries needed"
    ],
    "cons": [
      "Solar charging needs 9 hours of sun",
      "6 to 11 hours of light per charge"
    ],
    "bestFor": "Rechargeable, packable all-rounder",
    "take": "The light that best matches the packing and charging needs of a trail trip. Good value for a collapsible solar lantern.",
    "catch": "Full solar charging takes about 9 hours of direct sunlight."
  },
  {
    "id": "best-camping-lanterns-for-backpacking-2",
    "rank": 2,
    "badge": "Best Ultralight Packability",
    "name": "LuminAID Nova Inflatable Solar LED Lantern for Camping",
    "price": "$32.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31bDvDLLx3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0716JV1SG?tag=rvgearlab-20",
    "description": "Blow it up and the LuminAID Nova becomes a 75 lumen solar lantern with several brightness steps and an IP67 body. A full charge is listed at up to 24 hours, with no spare cells to carry.\n\nIt packs flatter than any other pick here and carries the highest water rating, at IP67. Compared with the DIBMS, it trades brightness for a body that deflates to almost nothing.\n\nIt suits trekkers who prize space over output, such as kayak-camp or river trips. A shatterproof body suits rough handling in a pack.",
    "specs": [
      "75 lumens, 24 hours",
      "IP67 waterproof",
      "Inflatable, shatterproof"
    ],
    "pros": [
      "Packs flat when deflated",
      "IP67 handles full immersion",
      "Shatterproof body",
      "No batteries to carry"
    ],
    "cons": [
      "Only 75 lumens",
      "Solar charging only"
    ],
    "bestFor": "Packing flat and wet trips",
    "take": "The pick for minimal pack volume and wet conditions. Plan it as a table or tent light, not a camp floodlight.",
    "catch": "At 75 lumens it gives soft light and depends on sun to recharge."
  },
  {
    "id": "best-camping-lanterns-for-backpacking-3",
    "rank": 3,
    "badge": "Best Collapsible AA",
    "name": "Lewis N. Clark Collapsible Camping Lantern",
    "price": "$10.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VE1uggPDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CXC229ZC?tag=rvgearlab-20",
    "description": "The Lewis N. Clark is a collapsible lantern that packs down to 5 inches tall and lists 300 lumens. It runs on 3 AA batteries, which are included, and has an IPX4 body with a carry handle.\n\nIts sliding collapse lets you set brightness by how far it is extended, which the fixed-output FLY2SKY cannot do. It needs no charging time, unlike the DIBMS.\n\nIt suits backpackers who prefer swappable AA cells for long trips. The included batteries mean it works the moment it is unboxed.",
    "specs": [
      "300 lumens, 3 AA included",
      "Packs down to 5 inches",
      "IPX4 weather resistant"
    ],
    "pros": [
      "Batteries come in the box",
      "Slide to set brightness",
      "Packs to about 5 inches",
      "Carry handle for hanging"
    ],
    "cons": [
      "Weight is not stated",
      "AA cells add pack weight"
    ],
    "bestFor": "Swappable-battery trips",
    "take": "A simple lantern that runs on common AA cells. Pick it when charging options are limited.",
    "catch": "The listing gives no weight, and spare AA cells add to what you carry."
  },
  {
    "id": "best-camping-lanterns-for-backpacking-4",
    "rank": 4,
    "badge": "Best Palm-Sized Pack",
    "name": "FLY2SKY Tent Lamp 5 Packs Portable Tent Light Clip Hook Hurricane Emergency Lights LED Camping Light Bulb Camp",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4144XMHQopL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CR659LBG?tag=rvgearlab-20",
    "description": "The FLY2SKY is a five-pack of palm-sized tent lights, each 5.7 by 2.1 inches with three LED beads and 150 lumens. Each runs on 3 AAA batteries (not included) and lists IPX8 water resistance with a carabiner hook.\n\nIt is the lightest way to light several spots, since each lamp is far smaller than the Lewis N. Clark. It also lists the strongest water rating after the LuminAID.\n\nIt suits groups who want a light per tent or per person on a trail trip. Three modes cover high, low and strobe.",
    "specs": [
      "150 lumens each, five lamps",
      "Palm size 5.7 x 2.1 inches",
      "IPX8, carabiner hook"
    ],
    "pros": [
      "Five lamps in one set",
      "Small enough for a pocket",
      "IPX8 water resistance listed",
      "Carabiner clips to a pack"
    ],
    "cons": [
      "Batteries are not included",
      "150 lumens each is modest"
    ],
    "bestFor": "Lighting a group with minimal weight",
    "take": "A small lamp for every tent and pack, with a rain rating to match. Easy to share among a group.",
    "catch": "AAA batteries are sold separately and each lamp is modest in output."
  },
  {
    "id": "best-camping-lanterns-for-backpacking-5",
    "rank": 5,
    "badge": "Best Budget Pair",
    "name": "ILEEDear LED Camping Lantern",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41lYJ7l-Q-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BNZB7WNX?tag=rvgearlab-20",
    "description": "The ILEEDear is a two-pack of battery lanterns listed at 350 lumens with 360 degree light and three brightness levels of 20, 50 and 100 percent. The body is described as rugged and waterproof.\n\nIt gives the highest lumen figure in the list for the least money, ahead of the Lewis N. Clark's 300. It does not collapse, which sets it apart from that pick and the DIBMS.\n\nIt suits budget backpackers who want a spare light or a pair for two tents. Three fixed steps keep operation simple.",
    "specs": [
      "350 lumens, 2-pack",
      "20, 50, 100 percent levels",
      "360 degree light"
    ],
    "pros": [
      "Two lanterns in one set",
      "Highest lumens listed here",
      "Three clear brightness steps",
      "Kid-friendly operation"
    ],
    "cons": [
      "Battery type and weight not stated",
      "Does not collapse"
    ],
    "bestFor": "Budget pair for two tents",
    "take": "The best low-cost way to get two lights. Choose it for car-to-trail hybrid camping where weight matters less.",
    "catch": "The listing does not give the battery type or weight, so check before packing it."
  },
  {
    "id": "best-camping-lanterns-for-backpacking-6",
    "rank": 6,
    "badge": "Best Battery",
    "name": "ZMNT LED Camping Lantern Rechargeable 1000LM",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31LK3sZEb3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09GY73946?tag=rvgearlab-20",
    "description": "This light puts out 1000 lumens from a 6700mAh pack and claims as much as 300 hours when dimmed to its lowest level. It sticks to metal with a magnet or hangs from a hook, and carries an IPX5 rating.\n\nIt has the biggest battery of the six and the longest stated runtime, ahead of the DIBMS at 1600mAh. It also doubles as a phone power bank per the listing.\n\nIt suits long section hikers who can carry a heavier light for fewer charges. The 2-year warranty named in the listing adds some confidence.",
    "specs": [
      "1000 lumens, 6700mAh",
      "Up to 300 hours low",
      "IPX5, magnet and hook"
    ],
    "pros": [
      "Largest battery of the six",
      "Phone power bank use",
      "Magnet and hook for hanging",
      "IPX5 water resistance"
    ],
    "cons": [
      "Heavier than the packable picks",
      "Peak lumens drain it quickly"
    ],
    "bestFor": "Long hikes with fewer charges",
    "take": "The long-runtime pick when pack weight is not the first concern. Treat it as a base-camp light.",
    "catch": "Weight is not stated and it is bulkier than the collapsible options."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight and packed size",
    "description": "We compared stated weights and collapsed or palm-size dimensions, noting where the listing gives neither."
  },
  {
    "title": "Power source",
    "description": "Built-in rechargeable, solar and swappable AA or AAA cells were compared for how they suit multi-day trips."
  },
  {
    "title": "Output and runtime",
    "description": "Lumen figures were read alongside the hours listed, with the dimmest setting treated separately."
  },
  {
    "title": "Weather rating",
    "description": "IP ratings were compared since a trail light often rides outside the pack and hangs in the rain."
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
    "subheading": "By Pack Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Smallest possible packed size",
          "LuminAID Nova Inflatable",
          "It deflates flat and runs on sun alone."
        ],
        [
          "Rechargeable and collapsible",
          "DIBMS Solar Collapsible",
          "USB or solar with a listed 8.02 ounce weight."
        ],
        [
          "Swappable cells, no charging",
          "Lewis N. Clark Pop-Up",
          "Three AA batteries are included."
        ],
        [
          "A light for each tent",
          "FLY2SKY Tent Lamp 5-Pack",
          "Five palm-sized lamps in one set."
        ],
        [
          "Two lights on a budget",
          "ILEEDear Battery Lantern 2-Pack",
          "A pair with 350 lumens each."
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
          "DIBMS Solar Collapsible or ILEEDear Battery Lantern 2-Pack"
        ],
        [
          "$10 to $20",
          "Lewis N. Clark Pop-Up or FLY2SKY Tent Lamp 5-Pack"
        ],
        [
          "$20 to $40",
          "ZMNT 6700mAh or LuminAID Nova Inflatable"
        ]
      ]
    }
  },
  {
    "subheading": "Built-in Battery vs Swappable Cells",
    "cards": [
      {
        "label": "Built-in",
        "text": "The DIBMS Solar Collapsible and ZMNT 6700mAh charge by cable, and the DIBMS also charges by solar. They save battery weight but need a charge source."
      },
      {
        "label": "Swappable",
        "text": "The Lewis N. Clark Pop-Up, FLY2SKY and ILEEDear run on AA or AAA cells you can replace on the trail. They add spare-cell weight but never need a charger."
      }
    ],
    "note": "Most weekend backpackers do well with the DIBMS Solar Collapsible, while long remote trips favor swappable cells."
  },
  {
    "subheading": "By Brightness Need",
    "table": {
      "headers": [
        "Need",
        "Recommended pick"
      ],
      "rows": [
        [
          "Soft tent light only",
          "LuminAID Nova Inflatable"
        ],
        [
          "Cooking and camp tasks",
          "Lewis N. Clark Pop-Up"
        ],
        [
          "Maximum output at base camp",
          "ZMNT 6700mAh"
        ]
      ]
    }
  },
  {
    "subheading": "For Ultralight Hikers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated weight under about half a pound, a collapsed or deflated body and a built-in or solar charging route."
      },
      {
        "label": "In this comparison",
        "text": "The DIBMS Solar Collapsible lists 8.02 ounces and collapses. The LuminAID Nova Inflatable packs flatter for kayak or river camps, at lower output."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ZMNT 6700mAh if you want a long runtime and a phone power bank at base camp, or the DIBMS Solar Collapsible for a light that fits trail packing."
      },
      {
        "label": "Save if",
        "text": "Save with the ILEEDear Battery Lantern 2-Pack for two lights at the lowest cost, or the FLY2SKY Tent Lamp 5-Pack when several people need small lights."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Weight and pack volume",
    "explanation": "Weight is what you feel after ten miles, and collapsed size decides what else fits in the pack. A light listed at 8 ounces behaves very differently from an unlisted weight. Look for an ounce or gram figure and a stated packed height in the listing."
  },
  {
    "criterion": "Power source on the trail",
    "explanation": "Built-in rechargeable cells need a power bank or sun, while AA and AAA cells can be swapped anywhere. On trips longer than three nights, spare batteries often weigh more than a small charging bank. Check whether batteries are included and what charge cable is in the box."
  },
  {
    "criterion": "Real brightness for camp tasks",
    "explanation": "Backpacking tasks such as cooking, reading and tent setup need roughly 100 to 300 lumens, not thousands. Very high lumen claims often drain a small battery in an hour or two. Look for brightness levels and the runtime listed at each."
  },
  {
    "criterion": "Water and impact resistance",
    "explanation": "A lantern strapped to a pack faces rain, drops and condensation. IPX4 resists splashes, IPX5 handles jets and IP67 handles brief immersion. Read the actual IP number rather than the word waterproof."
  },
  {
    "criterion": "Hanging and standing options",
    "explanation": "A light you cannot hang is hard to use in a small tent. A hook, magnet or handle puts the light overhead, where it spreads best. Look for the hanging method named on the listing and check it fits your tent loops."
  },
  {
    "criterion": "Single light or multi-pack",
    "explanation": "Packs offer a light per tent or per person and lower the cost of each lamp. A single lantern is simpler and usually brighter. Think about group size before choosing."
  }
];

export const faq = [
  {
    "q": "How bright should a backpacking lantern be?",
    "a": "Around 100 to 300 lumens is plenty for cooking and reading in camp. More light drains the battery faster and rarely helps inside a small tent. Most of the picks here fall within that range."
  },
  {
    "q": "What is the most common backpacking lantern mistake?",
    "a": "Buying a heavy, high-lumen light and then leaving it at home. A packable model you actually carry beats a brighter one that stays in the car. Check weight and packed size first."
  },
  {
    "q": "Is an inflatable lantern worth it over a collapsible one?",
    "a": "An inflatable such as the LuminAID Nova Inflatable packs flatter and handles water well. A collapsible like the DIBMS Solar Collapsible is brighter and charges by USB as well as sun. Pick the inflatable for wet trips and the collapsible for brightness."
  },
  {
    "q": "How do I charge a solar lantern on the trail?",
    "a": "Clip it to the outside of your pack or set it in direct sun while you cook or rest. Direct sun gives the fastest charge, and clouds can slow it a lot. A small USB power bank is a good backup."
  },
  {
    "q": "How do I keep lantern batteries from draining in the pack?",
    "a": "Make sure the switch cannot be bumped on by turning it fully off or removing a battery. Pack it in a pocket away from the stove. Store it with a partial charge between trips."
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
