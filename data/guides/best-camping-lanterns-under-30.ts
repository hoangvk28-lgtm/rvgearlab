export const guideSlug = "best-camping-lanterns-under-30";
export const guideTitle = "6 Best Camping Lanterns Under 30 in 2026";
export const metaTitle = "Best Camping Lanterns Under 30 in 2026";
export const metaDescription = "Best camping lanterns under $30: six USB-C, AAA and rechargeable LED lanterns from 80 to 4000 lumens compared on battery, brightness and weather rating.";
export const mainKeyword = "best camping lanterns under 30";
export const introParagraphs = [
  "Thirty dollars buys a very capable camping lantern, but the budget decides what kind. The cheapest picks run on AAA cells or a small USB-C battery, while the top of the range packs a 10,500mAh pack or a 4000 lumen output into one hanging body.",
  "I ranked the six by usable light per dollar, then by how long they run and how well they handle rain. The list also shows where the cheapest lanterns cut corners, mostly on battery size and the weather rating."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/gear-lit-tent-night.webp";
export const heroImageAlt = "Tent lit from inside in the middle of a forest at night";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-camping-lanterns-under-30-1",
    "rank": 1,
    "badge": "Best Value Under $30",
    "name": "Tent Light LED Rechargeable Camping Portable Hanging Lantern",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41wiOv7wtJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CW3CZJR5?tag=rvgearlab-20",
    "description": "The Amkulop is a rechargeable hanging lantern with an IPX5 water-resistant body and a 10,500mAh battery. It is built to light a tent through a long night and doubles as a power source for small devices through its USB port.\n\nAt about $26 it costs a dollar more than the iodoo 4000LM and holds a much larger battery than the Lepro AAA 4-Pack or the VAVOFO. It gives up the highest lumen number in the guide for a bigger battery.\n\nIt suits families who leave a lantern on all night in a tent. The IPX5 rating shrugs off rain at the pole.",
    "specs": [
      "10,500mAh rechargeable",
      "IPX5 water resistant",
      "Hanging tent design"
    ],
    "pros": [
      "Big 10,500mAh battery runs long",
      "IPX5 handles rain",
      "Hangs from a tent loop",
      "Charges a phone in a pinch"
    ],
    "cons": [
      "Heavier than the AAA lanterns",
      "Costs near the cap"
    ],
    "bestFor": "Overnight tent lighting",
    "take": "The biggest battery under $30 with a weather rating.",
    "catch": "Recharge it before a long trip."
  },
  {
    "id": "best-camping-lanterns-under-30-2",
    "rank": 2,
    "badge": "Best Brightest Pick",
    "name": "4000LM Flashlight Portable LED Camping Light Tent Lights",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31j9HrfOs4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08YY4S4PJ?tag=rvgearlab-20",
    "description": "The iodoo claims 4000 lumens from a rechargeable body with an IPX5 rating. A hook and a magnetic base let it hang from a pole or stick to a metal surface, and it hangs upside down for wide light.\n\nAt about $25 it costs a dollar less than the Amkulop and carries the highest lumen number in the guide. The Amkulop beats it on battery size, and the Lepro AAA pack beats it on weight.\n\nIt suits a group site where one lantern must light a picnic table. The magnet base helps on a truck or trailer.",
    "specs": [
      "4000 lumens claimed",
      "IPX5 waterproof",
      "Hook and magnet base"
    ],
    "pros": [
      "Highest lumens in the guide",
      "IPX5 handles heavy weather",
      "Hangs upside down for wide light",
      "Magnetic base sticks to metal"
    ],
    "cons": [
      "Sealed battery cannot be replaced",
      "Heavier than the AAA lanterns"
    ],
    "bestFor": "Picnic table lighting",
    "take": "The brightest option for a group campsite.",
    "catch": "Run time drops fast on the highest setting."
  },
  {
    "id": "best-camping-lanterns-under-30-3",
    "rank": 3,
    "badge": "Best Dimmable Pick",
    "name": "VAVOFO 20W LED Camping Lantern Rechargeable",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ltDmReucL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GDWKCV4C?tag=rvgearlab-20",
    "description": "VAVOFO is a 20W lantern with 25 LEDs rated at 1200 lumens, a 3000mAh battery and a Type-C port with the cable included. It weighs 150g, measures 5.7 by 3.15 inches, and offers stepless dimming plus an emergency flash mode.\n\nAt about $10 it costs $16 less than the Amkulop and holds a third of the battery. The stepless dimming lets you trade brightness for run time, which the three-mode lanterns cannot do.\n\nIt suits a car camper who wants one cheap rechargeable lantern. It also works for a power outage.",
    "specs": [
      "1200 lumens, 25 LEDs",
      "3000mAh, Type-C charging",
      "Stepless dimming, 150g"
    ],
    "pros": [
      "Stepless dimming trades light for runtime",
      "150g, easy to carry",
      "Emergency flash mode",
      "Type-C cable included"
    ],
    "cons": [
      "Smaller battery than the Amkulop",
      "Plastic body"
    ],
    "bestFor": "Budget rechargeable use",
    "take": "A bright, dimmable rechargeable for about $10.",
    "catch": "Dim it to stretch the battery."
  },
  {
    "id": "best-camping-lanterns-under-30-4",
    "rank": 4,
    "badge": "Best Foldable Pick",
    "name": "Collapsible Portable Ultra Bright LED Camping Lantern 1500 Lumens USB-C Rechargeable Tent Light 5 Modes 3 Ligh",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Xz6V2KytL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GL1TGW1S?tag=rvgearlab-20",
    "description": "YZMYUKS lists 1500 lumens, a Type-C port, five modes across three light colors and a foldable body that weighs 0.64 lb. The body collapses flat for packing.\n\nAt about $10 it costs the same as the VAVOFO and offers three light colors, with a body that folds. It gives up the stepless dimming of the VAVOFO.\n\nIt suits a packed trunk or a backpacker's kit. Choose the warm color for the tent.",
    "specs": [
      "1500 lumens, Type-C",
      "Five modes, three colors",
      "0.64 lb, foldable"
    ],
    "pros": [
      "Type-C rechargeable",
      "Three light colors",
      "Folds to a slim body",
      "Light at 0.64 lb"
    ],
    "cons": [
      "Slim body limits battery size",
      "Rated lumens apply to top mode"
    ],
    "bestFor": "Packed bags and backpacking",
    "take": "A foldable lantern that packs small.",
    "catch": "Top lumens drain the battery quickly."
  },
  {
    "id": "best-camping-lanterns-under-30-5",
    "rank": 5,
    "badge": "Best AAA Pack",
    "name": "Lepro LED Camping Lantern with 3 Light Modes",
    "price": "$15.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413TbkOsSVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B083TXB5QY?tag=rvgearlab-20",
    "description": "The Lepro pack contains four small LED lanterns that run on AAA batteries, three of which come with each lantern. Each weighs 55g, shines from 80 to 140 lumens in three modes and has a hook for tent loops.\n\nAt about $16 it costs about $6 more than the VAVOFO and gives you four lights. Each lantern is far dimmer than the rechargeable picks, and the AAA cells are easy to swap on the road.\n\nIt suits a family tent where each child needs a light. Replacement cells are cheap.",
    "specs": [
      "Four lanterns, AAA powered",
      "80 to 140 lumens, 3 modes",
      "55g, hook design"
    ],
    "pros": [
      "Four lights in one pack",
      "Batteries included",
      "Light at 55g each",
      "Hook for tent loops"
    ],
    "cons": [
      "Much dimmer than rechargeable lanterns",
      "AAA cells run out on long trips"
    ],
    "bestFor": "Kids and tent sharing",
    "take": "A cheap four-pack with swappable batteries.",
    "catch": "Carry spare AAA cells."
  },
  {
    "id": "best-camping-lanterns-under-30-6",
    "rank": 6,
    "badge": "Best Lowest Price",
    "name": "Portable LED Camping Lantern，Hang Anywhere Hook",
    "price": "$4.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31klqisFs0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FSKZ47Y5?tag=rvgearlab-20",
    "description": "This compact lantern weighs 55g, has three warm brightness levels and a spring-loaded top hook. It charges by USB-C from empty to full in about 2 hours and has a shatterproof PC shade.\n\nAt about $5 it is the lowest-priced pick and costs $5 less than the VAVOFO. It is also the smallest, so it fits an emergency kit or a pack pocket.\n\nIt suits a backpack, a glove box or a bedside table. The warm glow is easier on the eyes in a tent.",
    "specs": [
      "55g, three warm levels",
      "USB-C, 2-hour charge",
      "Spring-loaded hook"
    ],
    "pros": [
      "Lowest price in the guide",
      "Warm glow at night",
      "Shatterproof shade",
      "Quick 2-hour USB-C charge"
    ],
    "cons": [
      "Small battery",
      "Low light output"
    ],
    "bestFor": "Emergency kits and packs",
    "take": "A tiny warm lantern for almost nothing.",
    "catch": "It lights a tent, not a table."
  }
];

export const howWeEvaluated = [
  {
    "title": "Light per dollar",
    "description": "Lumens from 80 to 4000 were set against the price of each lantern."
  },
  {
    "title": "Battery and runtime",
    "description": "Battery size, charging port and replaceable cells were compared."
  },
  {
    "title": "Weather rating",
    "description": "IPX5 and unrated bodies were separated."
  },
  {
    "title": "Hanging and carry",
    "description": "Hooks, magnets, weight and folding were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is at or under $30, and the top pick spends the budget on battery and weather protection."
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
    "subheading": "By how you camp",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Overnight in a tent, all-night light",
          "Amkulop Tent Light",
          "10,500mAh."
        ],
        [
          "Group picnic table",
          "iodoo 4000LM",
          "Brightest, magnet base."
        ],
        [
          "Dimmable and cheap",
          "VAVOFO 20W",
          "Stepless dimming."
        ],
        [
          "Backpacking, packs small",
          "YZMYUKS 1500 Lumen",
          "Folds flat."
        ],
        [
          "Kids, one light each",
          "Lepro AAA 4-Pack",
          "Four lanterns."
        ],
        [
          "Emergency kit",
          "Warm Hook Lantern",
          "About $5."
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
          "Warm Hook Lantern or VAVOFO 20W"
        ],
        [
          "$0 to $20",
          "YZMYUKS 1500 Lumen or Lepro AAA 4-Pack"
        ],
        [
          "$20 to $30",
          "iodoo 4000LM or Amkulop Tent Light"
        ]
      ]
    }
  },
  {
    "subheading": "Rechargeable vs AAA",
    "cards": [
      {
        "label": "Rechargeable",
        "text": "The Amkulop Tent Light, iodoo 4000LM, VAVOFO 20W, YZMYUKS 1500 Lumen and Warm Hook Lantern charge by USB and save money on cells."
      },
      {
        "label": "AAA",
        "text": "The Lepro AAA 4-Pack runs on cells you can swap anywhere, at lower brightness."
      }
    ],
    "note": "Most campers should take the Amkulop Tent Light."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $5",
          "Warm Hook Lantern"
        ],
        [
          "About $10",
          "VAVOFO 20W"
        ],
        [
          "About $10",
          "YZMYUKS 1500 Lumen"
        ],
        [
          "About $16",
          "Lepro AAA 4-Pack"
        ],
        [
          "About $25",
          "iodoo 4000LM"
        ],
        [
          "About $26",
          "Amkulop Tent Light"
        ]
      ]
    }
  },
  {
    "subheading": "For a family tent specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a warm color, a hook and enough runtime to last a night."
      },
      {
        "label": "In this comparison",
        "text": "The Amkulop Tent Light covers a night on its 10,500mAh battery. The Lepro AAA 4-Pack gives each child a light."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want all-night run time or a bright table: the Amkulop Tent Light has the biggest battery, and the iodoo 4000LM is the brightest."
      },
      {
        "label": "Save if",
        "text": "Save if you only need a small light: the Warm Hook Lantern is about $5, and the VAVOFO 20W adds dimming for about $10."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What $30 buys",
    "explanation": "At this cap you can pick between a 10,500mAh battery, a 4000 lumen output or four lanterns in a pack. More lumens do not mean more usable light in a tent, so decide whether you need all-night run time or a bright table. Check the battery size before the lumen number."
  },
  {
    "criterion": "Lumens vs runtime",
    "explanation": "A lantern's top lumen figure is usually available only for the first minutes, then the light steps down. A 3000mAh battery at 1200 lumens might run only a couple of hours. Look for the runtime on a mid setting, not the highest one and be wary of a huge number paired with a small battery."
  },
  {
    "criterion": "Battery type",
    "explanation": "A rechargeable lantern is convenient but fails when the battery wears out, while a AAA lantern can be refilled anywhere. A USB-C port charges from a power bank. Check whether the battery is replaceable if you plan to keep the lantern for years, and keep a USB cable and a power bank in the camp box."
  },
  {
    "criterion": "Weather rating",
    "explanation": "IPX5 resists water jets, so rain at the tent loop is fine. A lantern with no rating can fail in a downpour. Look for the IP number in the product details, and for a lantern that hangs outside the tent, treat a missing rating as a reason to bring it in at the first sign of rain."
  },
  {
    "criterion": "Beam color",
    "explanation": "Warm light at about 2700K is easier on the eyes and attracts fewer insects than cool white. Three-color lanterns let you switch. Look for warm or three-color modes, and choose a warm mode for the tent, where a blue-white glare can feel harsh so you can switch between reading light and cooking light."
  },
  {
    "criterion": "Hanging options",
    "explanation": "A hook suits a tent loop, a magnet suits a truck bed, and a stand suits a table. A lantern that hangs upside down spreads light wider. Check the mounting points before you order because a hook that will not clear a thick tent pole is a daily annoyance and the strap loop or magnet strength before you rely on it."
  }
];

export const faq = [
  {
    "q": "How many lumens do I need for a tent?",
    "a": "Around 100 to 300 lumens lights a four-person tent well. The Lepro AAA 4-Pack at 80 to 140 lumens each suits kids, and the VAVOFO 20W at 1200 lumens is far more than a tent needs. Dim it to save battery."
  },
  {
    "q": "Are rechargeable lanterns better than AAA?",
    "a": "They cost less over time and charge from a power bank, as the Amkulop Tent Light does. AAA lanterns like the Lepro AAA 4-Pack keep working when no outlet is nearby. Carry spare cells if you choose AAA."
  },
  {
    "q": "Is the iodoo worth it over the Amkulop?",
    "a": "Only for brightness. The iodoo 4000LM is brighter and has a magnet base, while the Amkulop Tent Light has a far bigger battery for all-night use. Choose by whether you need a table light or a tent light."
  },
  {
    "q": "How do I charge a lantern on a trip?",
    "a": "Use a power bank or a car USB port with the USB-C cable. The VAVOFO 20W includes its cable. Charge it fully before leaving, and keep the port dry and top it up during the day, since a lantern left at half charge may not last the night."
  },
  {
    "q": "Does IPX5 mean it is fully waterproof?",
    "a": "No, IPX5 means it resists water jets but not submersion. The Amkulop Tent Light and iodoo 4000LM handle rain at the tent. Do not leave them in a puddle, and shake out any water from the port cover before charging it again."
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
