export const guideSlug = "best-camping-coffee";
export const guideTitle = "6 Best Camping Coffee in 2026";
export const metaTitle = "Best Camping Coffee in 2026";
export const metaDescription = "Camp coffee options compared: stovetop percolators, a moka pot, a kettle-and-mug kit and instant packets for mornings at the campsite.";
export const mainKeyword = "best camping coffee";
export const introParagraphs = [
  "Good coffee changes a camp morning, and there are two ways to get it: brew it in a pot over a flame, or tear open a packet and add hot water. The right one depends on how many cups you pour and how much gear you will carry.",
  "At RV Gear Lab, we sorted this list by brewing style, comparing capacity, materials, filters and how easy each is to clean at a site. Pots brew for groups while packets win on speed and weight."
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
    "id": "best-camping-coffee-1",
    "rank": 1,
    "badge": "Best for Groups",
    "name": "KingCamp Percolator Coffee Pot",
    "price": "$34.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41q9n6LDaGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D5MJ7K9F?tag=rvgearlab-20",
    "description": "KingCamp is a 9-cup percolator made of 304 stainless steel with a wood handle, an insulated glass knob and a pointed spout. It is sized for two or three people and works on most outdoor stoves.\n\nIt holds more than the Odoland kettle and uses a stainless internal basket, which the GSI leaves out of the rest of the list. The glass knob lets you watch the brew perk.\n\nA solid choice for family car camping where coffee is a ritual. It brews enough to share without a second round.",
    "specs": [
      "9-cup 304 stainless steel",
      "Wood handle, glass knob",
      "Works on outdoor stoves"
    ],
    "pros": [
      "Big 9-cup capacity",
      "Stainless steel body",
      "Glass knob shows the brew",
      "Comfortable wood handle"
    ],
    "cons": [
      "Takes stove space",
      "Heavy to pack"
    ],
    "bestFor": "Family coffee drinkers",
    "take": "The most generous pot here for sharing mornings.",
    "catch": "The internal basket does not include a paper filter."
  },
  {
    "id": "best-camping-coffee-2",
    "rank": 2,
    "badge": "Best Classic Percolator",
    "name": "GSI Outdoors Percolator Coffee Pot",
    "price": "$34.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41vfdqBmfkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B000690JTC?tag=rvgearlab-20",
    "description": "GSI is a heavy-gauge stainless steel percolator with a heat-resistant silicone handle and a PercView knob that lets you see the brew. It needs no paper filters, and it takes apart for easy cleaning.\n\nIt is the most polished percolator here, with the silicone handle and see-through knob that the KingCamp swaps for wood. It brews strong coffee for the whole crew at campsites, cabins and RVs.\n\nA favorite for campers who want a long-lasting, no-fuss percolator. The see-through knob makes timing the brew simple.",
    "specs": [
      "Heavy-gauge stainless steel",
      "Silicone handle, PercView knob",
      "No paper filters"
    ],
    "pros": [
      "See the brew through the knob",
      "Silicone handle stays cool",
      "Disassembles for cleaning",
      "Classic campfire pot"
    ],
    "cons": [
      "Steel body is heavy",
      "Needs an open flame or stove"
    ],
    "bestFor": "Traditional brewers",
    "take": "A trusted way to make strong campfire coffee.",
    "catch": "Learn the timing to avoid over-perking."
  },
  {
    "id": "best-camping-coffee-3",
    "rank": 3,
    "badge": "Best Compact Kit",
    "name": "Odoland 1.2L Camping Coffee Pot Camp Coffee Makers",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Gc89crJgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CR445283?tag=rvgearlab-20",
    "description": "Odoland includes a 1.2L hard anodized aluminum kettle with a nonstick coating, a camping mug and a coffee filter. The foldable mug has a heat-resistant handle, and the kit works with gas or firewood.\n\nIt packs smaller and lighter than the percolators, and the extra mug means you can drink straight away. It boils water as well as brewing.\n\nA good value for solo campers and backpackers who also need hot water for meals. Weight stays low, so it rides easily in a pack.",
    "specs": [
      "1.2L hard anodized aluminum",
      "Includes mug and filter",
      "Works with gas or wood"
    ],
    "pros": [
      "Kettle, mug and filter in one",
      "Foldable heat-resistant handle",
      "Boils water fast",
      "Packs compact"
    ],
    "cons": [
      "Smaller capacity",
      "Nonstick can scratch"
    ],
    "bestFor": "Solo and backpackers",
    "take": "A compact set that handles coffee and boiling water.",
    "catch": "Size suits one or two cups, not groups."
  },
  {
    "id": "best-camping-coffee-4",
    "rank": 4,
    "badge": "Best for Espresso Lovers",
    "name": "Primula Classic Stovetop Espresso and Coffee Maker",
    "price": "$15.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31BfY6bl1BL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B001J1L59E?tag=rvgearlab-20",
    "description": "Primula is a cast aluminum stovetop moka pot that makes six demitasse servings of espresso-style coffee in minutes. Fill the lower chamber with water, add ground coffee and place it on a stove.\n\nIt is the cheapest brewer here and the smallest, with a style different from the percolators. It rinses clean with warm water.\n\nA great fit for campers who like a strong, concentrated cup. It sits happily on a small camp stove.",
    "specs": [
      "Cast aluminum moka pot",
      "Six demitasse servings",
      "Rinses clean"
    ],
    "pros": [
      "Strong espresso-style coffee",
      "Low price",
      "Small and durable",
      "Easy to rinse"
    ],
    "cons": [
      "Small servings",
      "Needs ground coffee"
    ],
    "bestFor": "Espresso drinkers",
    "take": "A tiny, tough brewer for strong coffee.",
    "catch": "Not suited to large groups."
  },
  {
    "id": "best-camping-coffee-5",
    "rank": 5,
    "badge": "Best Instant Packets",
    "name": "Death Wish Coffee Instant Dark Roast Coffee Packets",
    "price": "$11.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41qIoTs-H4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B081TMDLXF?tag=rvgearlab-20",
    "description": "Death Wish instant packets come in 8 single-serve sticks of dark roast made with Arabica and Robusta beans. Just add hot water.\n\nWhere the pots require brewing time and cleanup, these take seconds with nothing to wash. They are ideal for backpacking mornings or quick stops.\n\nA great fit for hikers who want bold coffee with zero gear. Tuck a few packets in a pocket and you are set.",
    "specs": [
      "8 single-serve packets",
      "Dark roast Arabica and Robusta",
      "Just add hot water"
    ],
    "pros": [
      "Seconds to prepare",
      "Nothing to clean",
      "Light and packable",
      "Bold dark roast"
    ],
    "cons": [
      "Higher cost per cup",
      "Instant style, not brewed"
    ],
    "bestFor": "Backpackers",
    "take": "The lightest way to get a strong cup.",
    "catch": "Not the same as brewed coffee."
  },
  {
    "id": "best-camping-coffee-6",
    "rank": 6,
    "badge": "Best Familiar Option",
    "name": "Folgers Coffee Singles",
    "price": "$8.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/517nnqFSUYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00H3TCGBW?tag=rvgearlab-20",
    "description": "Folgers Coffee Singles come 19 to a box, each a single-serve bag that steeps in hot water. They need no machine and no filter.\n\nThey are simpler than the pots and closer to brewed coffee than instant packets. A box tucks into a camp kitchen box.\n\nA good fit for campers who want familiar coffee without gear. Share a box around the picnic table and everyone gets a cup.",
    "specs": [
      "19 single-serve bags per box",
      "Steep in hot water",
      "No machine needed"
    ],
    "pros": [
      "Familiar flavor",
      "Nothing to wash",
      "Individually wrapped bags",
      "Easy to share"
    ],
    "cons": [
      "Used bags create trash",
      "Small coffee variety"
    ],
    "bestFor": "Easy camp mornings",
    "take": "A familiar cup with almost no work.",
    "catch": "Pack out the used bags."
  }
];

export const howWeEvaluated = [
  {
    "title": "Brewing method",
    "description": "Compared percolators, moka pots, kettle kits and instant formats."
  },
  {
    "title": "Capacity",
    "description": "Looked at cups per brew against group size."
  },
  {
    "title": "Materials",
    "description": "Compared stainless steel and aluminum for durability and weight."
  },
  {
    "title": "Cleanup",
    "description": "Considered filters, parts and rinse time."
  },
  {
    "title": "Packability",
    "description": "Weighed the size of each pot or box against trip type."
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
    "subheading": "By Group Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Family or group",
          "KingCamp Percolator",
          "9 cups."
        ],
        [
          "Couple, classic brew",
          "GSI Percolator",
          "Watch it perk."
        ],
        [
          "Solo or backpacker",
          "Odoland Kettle Set",
          "Kettle, mug and filter."
        ],
        [
          "One strong cup",
          "Primula Moka Pot",
          "Espresso style."
        ],
        [
          "No gear",
          "Death Wish Instant",
          "Packets."
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
          "$0 to $20",
          "Folgers Singles or Death Wish Instant"
        ],
        [
          "$10 to $30",
          "Primula Moka Pot or Odoland Kettle Set"
        ],
        [
          "$30 to $40",
          "GSI Percolator or KingCamp Percolator"
        ]
      ]
    }
  },
  {
    "subheading": "Pot vs Packets",
    "cards": [
      {
        "label": "Pot",
        "text": "A pot brews fresh coffee for several. KingCamp Percolator, GSI Percolator and Odoland Kettle Set are examples."
      },
      {
        "label": "Packets",
        "text": "Packets need only hot water. Death Wish Instant and Folgers Singles are the examples."
      }
    ],
    "note": "Most car campers should default to GSI Percolator and use packets for backpacking."
  },
  {
    "subheading": "By Preference",
    "table": {
      "headers": [
        "If you want",
        "Recommended pick"
      ],
      "rows": [
        [
          "Familiar brand coffee",
          "Folgers Singles"
        ],
        [
          "Bold dark roast",
          "Death Wish Instant"
        ],
        [
          "Espresso style",
          "Primula Moka Pot"
        ]
      ]
    }
  },
  {
    "subheading": "For Backpacking Mornings Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Packets or a compact kettle set, with nothing to wash."
      },
      {
        "label": "In this comparison",
        "text": "Death Wish Instant takes seconds, and Odoland Kettle Set covers coffee and boiling water."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on KingCamp Percolator or GSI Percolator if you camp with a group."
      },
      {
        "label": "Save if",
        "text": "Save with Primula Moka Pot or Folgers Singles for cheap coffee."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Brew method and taste",
    "explanation": "Percolators brew strong, moka pots make concentrated coffee, and instant packets are fastest. Decide how much work you want in the morning. Check the listing for the brewing method."
  },
  {
    "criterion": "Capacity per brew",
    "explanation": "A 9-cup pot serves a family, while 1.2L is for one or two. Check cups per brew against who will drink. Look for cups or liters."
  },
  {
    "criterion": "Heat source",
    "explanation": "Percolators and kettles go on a stove or campfire grate. Check the listing for stove compatibility. Make sure the base suits your burner or grate."
  },
  {
    "criterion": "Material and handle",
    "explanation": "Stainless steel lasts, aluminum is light, and silicone or wood handles stay cooler. Look for handle material in the title or bullets. That tells you how hot the grip will get."
  },
  {
    "criterion": "Cleanup effort",
    "explanation": "Removable parts and permanent filters make cleanup easy. Instant packets have almost none. Read the listing for filters."
  }
];

export const faq = [
  {
    "q": "What is the best way to make coffee camping?",
    "a": "A percolator suits groups and campfires. Instant packets suit backpacking. Pick based on gear space."
  },
  {
    "q": "Do I need a paper filter for a percolator?",
    "a": "Most percolators like GSI Percolator do not need one. KingCamp Percolator lists no filter included. Check your pot."
  },
  {
    "q": "Is a moka pot worth it for camping?",
    "a": "Yes for strong coffee in a small pot, since Primula Moka Pot is cheap and durable. It makes small servings only."
  },
  {
    "q": "How do I use a percolator on a stove?",
    "a": "Fill with water, add grounds to the basket and heat on medium. Watch the knob for color. Remove from heat when done."
  },
  {
    "q": "How do I clean a camp coffee pot?",
    "a": "Rinse with warm water and let parts dry. Disassemble percolators like GSI Percolator. Avoid abrasive pads."
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
    "title": "Best Camping Coffeemakers",
    "href": "/camp-kitchen/best-camping-coffeemakers"
  },
  {
    "title": "Best Camping Cookware",
    "href": "/camp-kitchen/best-camping-cookware"
  }
];
