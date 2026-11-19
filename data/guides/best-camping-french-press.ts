export const guideSlug = "best-camping-french-press";
export const guideTitle = "6 Best Camping French Press in 2026";
export const metaTitle = "Best Camping French Press in 2026";
export const metaDescription = "Six camp French presses and press-style brewers compared by material, size, insulation and stove compatibility, for campers who want a full-bodied cup.";
export const mainKeyword = "best camping french press";
export const introParagraphs = [
  "Immersion brewing is forgiving, which is exactly what you want at a campsite where water temperature, timing and grind are all a little improvised. Coffee steeps in hot water, a mesh plunger pushes the grounds down and the cup that results is full-bodied with all its natural oils intact. The trade-off is cleanup, because wet grounds in the bottom of a carafe are the main chore of the morning.",
  "The six picks here cover a lot of ground. There is a stovetop-safe stainless press, an insulated single-serve travel press, an AeroPress that presses with air instead of a plunger, a lightweight aluminum pot with a press, a silicone press sized for Jetboil cups and a glass carafe. The right one depends mostly on whether you brew on a fire, a stove or a pot of hot water poured from a kettle.",
  "We evaluated each listing for body material, volume, how the filter works, what heat source the listing names and how the pieces pack. We then grouped the picks by the type of camper they suit, from solo backpackers to groups sharing a morning pot."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/419QW9SMx4L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-camping-french-press-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Coghlan's Stainless Steel French Press Coffee Maker",
    "price": "$39.92",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/419QW9SMx4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FGZW7M84?tag=rvgearlab-amz-20",
    "description": "The Coghlan's Stainless Steel French Press holds 4 cups (32 oz) and is built from 304 stainless steel that the listing says is safe for campfires, open flames and stovetops. A fine mesh plunger and stainless filter give a full-bodied cup with less grit.\n\nIt weighs only 1.06 lbs and folds its handles for packing, which gives it a different job from the glass Utopia Kitchen carafe, since it can sit directly on the heat. Stamped interior measurements and a drip-free precision spout make pouring easy.\n\nIt suits campers who want to brew in the pot over a fire or stove without a separate kettle. It is also dishwasher safe, so it can move straight from camp to a home kitchen.",
    "specs": [
      "32 oz 304 stainless steel press",
      "Safe for campfires and stovetops",
      "1.06 lbs, folding handles"
    ],
    "pros": [
      "Sits right on a campfire or stovetop",
      "Fine mesh plunger keeps grit out of the cup",
      "Only 1.06 lbs with folding handles",
      "Stamped measurements and a drip-free spout"
    ],
    "cons": [
      "Most expensive pick in this guide",
      "Single wall body does not hold heat long"
    ],
    "bestFor": "Brewing right on the fire or stove"
  },
  {
    "id": "best-camping-french-press-2",
    "rank": 2,
    "badge": "Best Insulated",
    "name": "Travel French Press Coffee Maker Set",
    "price": "$36.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41mE7vIrHEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G56L77BS?tag=rvgearlab-amz-20",
    "description": "The JennLee Travel French Press is a 12 oz double-wall stainless press that the listing says keeps drinks hot for 4 hours or more. It is plastic free, with two high-density mesh filters and a spring on the plunger to separate grounds fully.\n\nIt comes with two mini steel canisters for loose tea or coffee grounds and a hard shell travel case, which no other pick includes. Compared with the Coghlan's Stainless, it is a single-serve cup you carry rather than a pot you heat on the flame.\n\nIt suits solo campers and early-morning hikers who want to steep coffee, close the lid and carry it. The silicone grip protects hands from heat and the double wall keeps the drink warm on a cold trail.",
    "specs": [
      "12 oz double-wall stainless press",
      "Dual stainless filters, 2 canisters",
      "Keeps drinks hot 4+ hours"
    ],
    "pros": [
      "Double wall holds heat for hours on cold mornings",
      "Two canisters and a hard case are included",
      "No plastic touches the coffee",
      "Silicone grip protects hands from heat"
    ],
    "cons": [
      "Single serve size only",
      "Not meant for use directly over a flame"
    ],
    "bestFor": "Solo campers who carry their coffee"
  },
  {
    "id": "best-camping-french-press-3",
    "rank": 3,
    "badge": "Best Cleanup",
    "name": "AeroPress Original Coffee Press",
    "price": "$29.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31-3hkNS8GL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0047BIWSK?tag=rvgearlab-amz-20",
    "description": "The AeroPress Original is a manual brewer that blends French press, pour-over and espresso styles into one press-through device. You add coffee and water, wait 30 seconds, then press for a clean cup, and the box includes 50 paper micro-filters.\n\nWhere the Coghlan's Stainless leaves wet grounds in a carafe, the AeroPress pushes grounds out as a compact puck that tips into the trash. The listing says it gives control over brew time, temperature and grind size, which makes it the most adjustable pick here.\n\nIt suits campers who care about clean cups and quick cleanup in a small space. The press and puck routine is also friendly to anyone who brews one cup at a time.",
    "specs": [
      "Press-style single cup brewer",
      "50 paper micro-filters included",
      "2 minute brew and clean"
    ],
    "pros": [
      "Grounds eject as a puck, so cleanup is fast",
      "Controls brew time, temperature and grind size",
      "Paper micro-filters give a clean, low-bitterness cup",
      "Brews and cleans in about 2 minutes"
    ],
    "cons": [
      "Makes one cup at a time",
      "Needs extra paper filters when the first 50 run out"
    ],
    "bestFor": "Clean cups and fast cleanup"
  },
  {
    "id": "best-camping-french-press-4",
    "rank": 4,
    "badge": "Best Backpacking",
    "name": "widesea Camping Coffee Pot 750ML",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413nfJi0XRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07VJ4RXZ4?tag=rvgearlab-amz-20",
    "description": "The widesea Camping Coffee Pot has a 900 ml total volume with a stainless steel press and an aluminum pot, and the listing says it holds 750 ml of coffee. It weighs 225 g (7.94 oz) and has a collapsible handle for packing.\n\nThe press section can be removed and used as a mug, and the listing says the pot can be heated on a butane stove and used as cookware. That versatility gives it a different role from the Coghlan's Stainless, since it doubles as a pot for oatmeal or noodles as well as a coffee maker.\n\nIt suits backpackers and hikers who carry one pot for several jobs. At just under 8 ounces it is the lightest pot of the six.",
    "specs": [
      "750 ml coffee, 900 ml total volume",
      "225 g, collapsible handle",
      "Removable press doubles as a mug"
    ],
    "pros": [
      "Weighs only about 8 ounces",
      "Pot heats on a butane stove",
      "Press section can double as a camping mug",
      "Collapsible handle packs flat"
    ],
    "cons": [
      "Aluminum pot dents more easily than stainless",
      "Handle heat protection is not described"
    ],
    "bestFor": "Backpackers who want one multi-use pot"
  },
  {
    "id": "best-camping-french-press-5",
    "rank": 5,
    "badge": "Best Jetboil Add-On",
    "name": "Jetboil Silicone French Press Coffee Maker Camping Stoves",
    "price": "$21.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31LMutDBnzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082XXZ36S?tag=rvgearlab-amz-20",
    "description": "The Jetboil Silicone French Press fits Jetboil Flash, MicroMo and Zip cups, as well as 1L tall and 0.8L spare cups. A silicone ring forms a secure seal so grounds stay below the filter during plunging, which the listing describes as eliminating cowboy coffee.\n\nA micro-filter and high-temperature plastic reduce sediment in the pot. The basket can also steam fresh fish or vegetables at dinner, which is a use none of the other picks list.\n\nIt suits Jetboil owners who want a French press without carrying a separate pot. It sits near the entry end of this guide on price, and it is built around the stove you already pack.",
    "specs": [
      "Fits Jetboil Flash, MicroMo, Zip",
      "Silicone ring seals the plunger",
      "Micro-filter reduces sediment"
    ],
    "pros": [
      "Turns a Jetboil cup into a press pot",
      "Silicone ring keeps grounds out during plunging",
      "Basket also steams fish or vegetables",
      "Adds almost no weight to a stove kit"
    ],
    "cons": [
      "Only fits Jetboil cups listed on the box",
      "Plastic parts need to stay off direct flame"
    ],
    "bestFor": "Jetboil stove owners"
  },
  {
    "id": "best-camping-french-press-6",
    "rank": 6,
    "badge": "Best Budget",
    "name": "Utopia Kitchen Borosilicate Glass French Press Coffee Maker 34 Oz",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31aMnzdrt1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N78X92P?tag=rvgearlab-amz-20",
    "description": "The Utopia Kitchen French Press is a 34 oz borosilicate glass carafe, and the listing says it withstands rapid temperature changes. A 4-filter sieve system and an 80 mesh filter handle straining, and a coffee spoon is included.\n\nIt is the entry pick of the six on price. Compared with the Coghlan's Stainless, it is a pour-hot-water-in carafe for a picnic table or camper counter, since glass does not go on an open flame.\n\nIt suits RV campers and car campers who boil water in a kettle and brew at the table. It also handles tea, hot chocolate and cold brew, and the glass beaker, plunger and filter are dishwasher safe.",
    "specs": [
      "34 oz borosilicate glass carafe",
      "4-filter sieve, 80 mesh",
      "Includes coffee spoon"
    ],
    "pros": [
      "Large 34 oz glass carafe for groups",
      "Heat-resistant borosilicate handles hot water",
      "Works for tea and cold brew too",
      "Dishwasher safe beaker, plunger and filter"
    ],
    "cons": [
      "Glass can break in a pack or camp box",
      "Not for direct use over a flame"
    ],
    "bestFor": "RV and car camping at the table"
  }
];

export const howWeEvaluated = [
  {
    "title": "Brewing method",
    "description": "We separated true immersion presses from the AeroPress, which presses by air, since the method decides body, cleanup and what you can use it for."
  },
  {
    "title": "Material and heat use",
    "description": "We compared stainless, aluminum, glass and silicone builds against the heat source each listing names. A glass carafe and a flame-safe stainless pot answer different questions."
  },
  {
    "title": "Volume and weight",
    "description": "We looked at volumes from 12 oz to 34 oz and weights such as 1.06 lbs and 225 g. Volume decides how many people one brew serves, and weight decides how far you carry it."
  },
  {
    "title": "Filter design",
    "description": "We checked how each press keeps grounds out, from dual mesh filters to a silicone seal. A tight filter means less sediment at the bottom of the cup."
  },
  {
    "title": "Cleanup at camp",
    "description": "We considered how easily grounds leave each design and which parts are dishwasher safe. Camp cleaning happens with limited water, so this counts for a lot."
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
    "subheading": "By heat source",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "A campfire or open flame",
          "Coghlan's Stainless",
          "304 stainless steel built for campfires, open flames and stovetops"
        ],
        [
          "A Jetboil or similar stove cup",
          "Jetboil Silicone Press",
          "Fits Jetboil Flash, MicroMo and Zip cups with a silicone sealing ring"
        ],
        [
          "A butane stove and a lightweight pack",
          "widesea Pot",
          "An aluminum pot with a stainless press at 225 g that heats on a butane stove"
        ],
        [
          "Hot water from a kettle at a table",
          "Utopia Glass Press",
          "A 34 oz borosilicate carafe that takes hot water poured in"
        ],
        [
          "Hot water carried in a flask",
          "JennLee Travel",
          "A 12 oz double wall press that holds heat for 4+ hours"
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
          "Entry of this shortlist",
          "Utopia Glass Press or Jetboil Silicone Press"
        ],
        [
          "Mid of this shortlist",
          "widesea Pot or AeroPress Original"
        ],
        [
          "Top of this shortlist",
          "JennLee Travel or Coghlan's Stainless"
        ]
      ]
    }
  },
  {
    "subheading": "Immersion press vs air press",
    "cards": [
      {
        "label": "Immersion press",
        "text": "Coffee steeps with all its oils and a mesh plunger pushes grounds down, as in the Coghlan's Stainless, JennLee Travel, widesea Pot, Jetboil Silicone Press and Utopia Glass Press. The cup is full-bodied and may carry a little sediment."
      },
      {
        "label": "Air press",
        "text": "The AeroPress Original presses coffee through a paper micro-filter, which leaves a clean cup and a compact puck of grounds. It makes one cup per press."
      }
    ],
    "note": "Choose the Coghlan's Stainless for a full pot over the fire, or the AeroPress Original for a clean cup and quick cleanup."
  },
  {
    "subheading": "By group size",
    "table": {
      "headers": [
        "If you brew for",
        "Recommended pick"
      ],
      "rows": [
        [
          "One person on a trail",
          "JennLee Travel"
        ],
        [
          "One or two people in an RV",
          "AeroPress Original"
        ],
        [
          "A small group at a campsite",
          "Coghlan's Stainless"
        ],
        [
          "A larger group at a picnic table",
          "Utopia Glass Press"
        ]
      ]
    }
  },
  {
    "subheading": "For Backpacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A low stated weight, a pot that heats on a small stove and a removable press that doubles as a mug"
      },
      {
        "label": "In this comparison",
        "text": "The widesea Pot weighs 225 g and the press section works as a mug, and the Jetboil Silicone Press adds almost no weight to a Jetboil kit."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Coghlan's Stainless for a flame-safe steel pot, or the JennLee Travel for double wall insulation and a hard case with two canisters."
      },
      {
        "label": "Save if",
        "text": "Save with the Utopia Glass Press, the entry pick here, or the Jetboil Silicone Press if you already carry a Jetboil stove."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Flame-safe or not",
    "explanation": "Some presses are made to sit on a fire or stove, and some only take hot water poured in. A stainless pot such as the Coghlan's can go on the heat, while a glass carafe cannot be heated directly and can crack if it is. This matters at camp, because a press you cannot heat needs a second pot or kettle in the kit. Look for the listing to state campfire or stovetop safe, and be careful where it names only dishwasher use."
  },
  {
    "criterion": "Capacity and servings",
    "explanation": "Presses range from single-serve cups of about 12 oz to carafes of 34 oz. A French press makes best coffee when it is close to full, so a big carafe is a poor choice for a solo camper. A rough guide is 2 tablespoons of coarse grounds for each 8 oz of water. Check the stated ounces and compare them with the mugs you take."
  },
  {
    "criterion": "Insulation and heat hold",
    "explanation": "A double-wall press keeps coffee hot for hours, while a single wall carafe loses heat within minutes, which matters in cold mornings or a drafty tent. Immersion brewing also keeps extracting while coffee sits on the grounds, so a pot left too long turns bitter. Pour the finished coffee into a mug soon after pressing. Look for double wall or vacuum insulated in the listing."
  },
  {
    "criterion": "Filter quality and sediment",
    "explanation": "A French press filter is a mesh screen, and a finer or double mesh screen leaves less grit in the cup. A coarse grind is what the method needs, because fine grounds slip through any screen and make the coffee muddy and bitter. Seals around the plunger matter too, since a loose fit lets grounds past the edge. Look for words such as fine mesh, dual filter, micro-filter or sieve in the listing."
  },
  {
    "criterion": "Weight and packing",
    "explanation": "A backpacker counts ounces, while a car camper counts shelf space. A pot at roughly 8 ounces suits a pack, while a 1.06 lb steel press suits a car or canoe. Folding handles, a removable press and nesting parts all cut pack volume. Look for stated weights and note whether handles fold."
  },
  {
    "criterion": "Cleanup and materials",
    "explanation": "Wet grounds are the main cleanup problem with a French press, and camp rules say grounds go in the trash, not on the ground. Stainless and glass hold no odors, while plastic parts can pick up coffee oils over time. A dishwasher-safe note helps once you are home. Look for removable filters, plastic-free statements and cleaning notes."
  }
];

export const faq = [
  {
    "q": "What grind should I use in a camp French press?",
    "a": "Use a coarse grind, close to coarse sea salt. The Utopia Glass Press instructions call for coarse ground coffee, and a fine grind slips through any mesh. If your beans are pre-ground fine, expect some sediment at the bottom of the cup, and leave the last sip behind."
  },
  {
    "q": "Can I put a glass French press over a campfire?",
    "a": "No. The Utopia Glass Press is borosilicate glass that handles rapid temperature changes when you pour in hot water, but it is not made to sit on a flame. Use a stainless press like the Coghlan's Stainless when you want to heat the coffee in the pot."
  },
  {
    "q": "Is the AeroPress worth it over a French press at camp?",
    "a": "It is worth it if cleanup and cup clarity matter more than a full pot. The AeroPress Original ejects grounds as a puck and its paper micro-filters give a cleaner cup, although it makes one cup at a time. A press like the Coghlan's Stainless brews 32 oz in one go."
  },
  {
    "q": "How long should coffee steep in a French press?",
    "a": "Steep for roughly four minutes in water just off the boil, then plunge slowly. The JennLee Travel keeps the coffee hot for hours, so pour it into a mug soon after plunging, since grounds left in contact keep extracting. Too long and the coffee turns bitter."
  },
  {
    "q": "How do I clean a press without a lot of water?",
    "a": "Scrape the grounds into a trash bag, then rinse with a small splash of water. The AeroPress Original is the easiest since grounds leave as a puck. A stainless press like the Coghlan's Stainless is dishwasher safe for a deeper clean at home."
  },
  {
    "q": "Will the Jetboil press fit other stoves?",
    "a": "The Jetboil Silicone Press lists fit with Jetboil Flash, MicroMo and Zip cups, as well as 1L tall and 0.8L spare cups. If you use a different stove, a pot-style press like the widesea Pot is the better route. Check the cup model before you buy."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Percolator",
    "href": "/camp-kitchen/best-camping-percolator"
  },
  {
    "title": "Best Camping Pour Over Coffee Maker",
    "href": "/camp-kitchen/best-camping-pour-over-coffee-maker"
  },
  {
    "title": "Best Camping Coffee Grinder",
    "href": "/camp-kitchen/best-camping-coffee-grinder"
  },
  {
    "title": "Best Camping Kettle",
    "href": "/camp-kitchen/best-camping-kettle"
  }
];
