export const guideSlug = "best-backpacking-sleeping-bags";
export const guideTitle = "4 Best Backpacking Sleeping Bags in 2026";
export const metaTitle = "Best Backpacking Sleeping Bags in 2026";
export const metaDescription = "Best backpacking sleeping bags compared on temperature range, listed weight, hood and zipper design, sorted by how cold your trips actually get.";
export const mainKeyword = "best backpacking sleeping bags";
export const introParagraphs = [
  "A backpacking sleeping bag is a weight-versus-warmth decision, and the first thing to settle is the lowest temperature you plan to sleep in. Amazon listings in this price range lean either cold-weather mummy or warm-weather envelope, and the labels do not always agree with the numbers.",
  "Four bags are compared across that range, from a 0F mummy to a 1.7 lb summer envelope. Two near-identical TETON Trailhead listings count as one pick, and few listings here state a weight, so we point out which ones do."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/sleep-tent-sleeping-bag.webp";
export const heroImageAlt = "Camper sitting inside a tent next to an unrolled sleeping bag";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-backpacking-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Cold-Weather Mummy",
    "name": "Coleman North Rim 0°F Sleeping Bag",
    "price": "$94.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OdlULxekL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D643KDKN?tag=rvgearlab-amz-20",
    "description": "The Coleman North Rim is a mummy rated to 0F with an adjustable hood and a Thermolock draft tube running the length of the zipper. It is cut for campers up to 6 ft 2 in and uses hollow polyester insulation.\n\nAgainst the TETON Trailhead it states a colder rating and adds a longer-lasting draft barrier, so it holds up for later-season trips. The two mummies share a similar shape, and this one carries the colder figure.\n\nIt suits backpackers who start trips in early spring or late fall. The adjustable hood lets you seal in heat or vent when it warms up.",
    "specs": [
      "0F rated mummy",
      "Thermolock zipper draft tube",
      "Adjustable hood"
    ],
    "pros": [
      "Mummy shape holds heat close",
      "Draft tube blocks zipper leaks",
      "Fits sleepers up to 6 ft 2 in",
      "Hood adjusts for warmth or venting"
    ],
    "cons": [
      "Mummy cut feels snug for restless sleepers",
      "Shorter than the oversize rectangular bags"
    ],
    "bestFor": "Cold-season backpacking",
    "take": "The coldest-rated mummy here, for early spring and late fall hikes.",
    "catch": "The 0F figure is a limit-style number, so expect comfortable sleep well above it."
  },
  {
    "id": "best-backpacking-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Mid-Range Mummy",
    "name": "TETON Sports Trailhead",
    "price": "$66.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/316CFmR-OuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DWVF4RXP?tag=rvgearlab-amz-20",
    "description": "Rated at 20 degrees, the TETON Trailhead mummy pairs microfiber fill with a generous footbox, a draft tube behind the zipper and a brushed liner. It ships with a compression sack and hang loops for loose storage between trips.\n\nIt sits warmer than the ECOOPRO and the MalloMe and a little less cold than the Coleman North Rim. The footbox gives toes more room than most mummies at the same price.\n\nIt suits three-season hikers who want a mummy with real cold-night capability. The hood draws closed to cut drafts.",
    "specs": [
      "20F mummy",
      "Roomy footbox, draft tube",
      "Compression sack, hang loops"
    ],
    "pros": [
      "Rated to 20F",
      "Hood closes up drafts",
      "Compression sack included",
      "Hang loops preserve loft"
    ],
    "cons": [
      "No weight is listed",
      "Mummy cut limits knee room"
    ],
    "bestFor": "Three-season hiking",
    "take": "A well-equipped 20F bag that covers most hiking seasons.",
    "catch": "Synthetic fill packs larger than down, and the listing gives no weight."
  },
  {
    "id": "best-backpacking-sleeping-bags-3",
    "rank": 3,
    "badge": "Lightest Pack Pick",
    "name": "ECOOPRO Warm Weather Sleeping Bag",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fu3se401L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B011AZ3O9W?tag=rvgearlab-amz-20",
    "description": "The ECOOPRO is a warm-weather envelope bag measuring 83 by 30 inches with a nylon shell and a polyester lining. The listing gives a weight of 1.7 lb and a compressed height of 11 inches, with a stated range of 55 to 60F.\n\nIt is the only bag in this group with both weight and compressed size on the page, and it beats the roughly 3 lb MalloMe for carry. Against the TETON Trailhead it gives up the cold rating for a much lighter load.\n\nIt suits summer hikers and scouts who want a small, waterproof bag. Consider a liner to extend the range.",
    "specs": [
      "83 by 30 in envelope",
      "1.7 lb, 11 in compressed",
      "55 to 60F range"
    ],
    "pros": [
      "1.7 lb with a stated packed height",
      "Waterproof nylon shell",
      "Breathable polyester lining",
      "Compression sack included"
    ],
    "cons": [
      "Warm-weather range only",
      "Narrow 30 inch width"
    ],
    "bestFor": "Summer and warm-night hikes",
    "take": "A light, cheap envelope for the warmest months.",
    "catch": "Its stated 55 to 60F range makes it a summer-only bag."
  },
  {
    "id": "best-backpacking-sleeping-bags-4",
    "rank": 4,
    "badge": "Best Easy-Care Pick",
    "name": "MalloMe Sleeping Bags for Adults Cold Weather & Warm",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51TnRkxW-6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B077XQDZW4?tag=rvgearlab-amz-20",
    "description": "The MalloMe is listed with a 50 to 77F temperature range and weighs about 3 lb. It fits an adult up to 6 ft, with a waterproof outer shell that wipes clean and a liner that is machine washable.\n\nIt carries more weight than the ECOOPRO and offers a slightly wider range, starting at 50F. The easy-wash design suits family trips where a bag takes abuse.\n\nIt suits casual backpackers who want one bag for hiking and the car-camp. Kids and adults can share it.",
    "specs": [
      "About 3 lb",
      "50F to 77F rated",
      "Wipe-clean waterproof shell"
    ],
    "pros": [
      "Wipe-clean waterproof shell",
      "Machine washable liner",
      "Fits adults up to 6 feet",
      "Works for kids and adults"
    ],
    "cons": [
      "Heaviest of the four",
      "Warm-weather rating only"
    ],
    "bestFor": "Mixed family use",
    "take": "A forgiving, easy-clean bag for casual trips.",
    "catch": "At about 3 lb it is the heaviest bag here, and serious hikers will feel it."
  }
];

export const howWeEvaluated = [
  {
    "title": "Temperature range",
    "description": "We looked at the stated rating on each page and flagged mismatches between title and bullets."
  },
  {
    "title": "Packed weight",
    "description": "We recorded listed weights and packed sizes, and noted when a listing gives none."
  },
  {
    "title": "Shape and hood",
    "description": "We compared mummy and envelope cuts and hood and draft-tube design."
  },
  {
    "title": "Zipper and details",
    "description": "We checked listed zipper type, footbox and stuff sack."
  },
  {
    "title": "Value",
    "description": "We weighed price against the temperature range the bag actually covers."
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
    "subheading": "By Lowest Night Temperature",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Near 0F",
          "Coleman North Rim",
          "Rated 0F with a draft tube and adjustable hood"
        ],
        [
          "Near 20F",
          "TETON Trailhead 20F",
          "20F rating, footbox and hang loops"
        ],
        [
          "Above 55F, lightest pack",
          "ECOOPRO Warm Weather",
          "1.7 lb with a listed packed height"
        ],
        [
          "Above 50F, easy to clean",
          "MalloMe Year Round",
          "Wipe-clean shell and machine-washable liner"
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
          "$20 to $30",
          "MalloMe Year Round or ECOOPRO Warm Weather"
        ],
        [
          "$60 to $70",
          "TETON Trailhead 20F or Coleman North Rim"
        ]
      ]
    }
  },
  {
    "subheading": "Cold Mummy vs Warm Envelope",
    "cards": [
      {
        "label": "Cold mummy",
        "text": "The Coleman North Rim and TETON Trailhead taper at the body and carry hoods and draft tubes. They are the picks for spring and fall hikes, though they pack larger and cost more."
      },
      {
        "label": "Warm envelope",
        "text": "The ECOOPRO Warm Weather and MalloMe Year Round are rectangular-style bags with wide ranges starting at 50 to 55F. They are lighter and cheaper but only suit summer."
      }
    ],
    "note": "Most backpackers should choose the TETON Trailhead for three-season hiking unless trips stay above 55F, where the ECOOPRO Warm Weather is lighter."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest cost summer bag",
          "MalloMe Year Round"
        ],
        [
          "Lowest weight summer bag",
          "ECOOPRO Warm Weather"
        ],
        [
          "Mid cost three-season",
          "TETON Trailhead 20F"
        ],
        [
          "Highest cost cold mummy",
          "Coleman North Rim"
        ]
      ]
    }
  },
  {
    "subheading": "Cold-Season Trips Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a stated rating of 20F or lower, a hood and a zipper draft tube."
      },
      {
        "label": "In this comparison",
        "text": "The Coleman North Rim lists 0F with a Thermolock draft tube, and the TETON Trailhead lists 20F with a draft tube and roomy footbox, so these are the two that suit cold-season hikes."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Coleman North Rim if you hike into freezing nights and want the colder figure with a hood and draft tube."
      },
      {
        "label": "Save if",
        "text": "Save with the ECOOPRO Warm Weather or MalloMe Year Round if your trips stay above 50F and the main goal is a low carry weight and easy care."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match the rating to your coldest night",
    "explanation": "Think of the lowest temperature you will realistically see and shop for a bag at least 10F colder than that. A 55F bag is a summer bag no matter what the title says. The bullet with the temperature figure is the one to read."
  },
  {
    "criterion": "Weight is usually missing",
    "explanation": "Only some listings print a weight, such as the ECOOPRO at 1.7 lb and the MalloMe at about 3 lb. A missing weight is a gap you have to fill with the brand's site or the product photos. Compare any bag against a target of 3 lb or less for a trail bag."
  },
  {
    "criterion": "Mummy or envelope",
    "explanation": "A mummy hugs the body and traps heat with less fabric, which is why the Coleman North Rim and TETON Trailhead suit colder trips. An envelope gives space and a zip-flat blanket but carries more air to warm. Pick based on your sleeping position and the lowest temperature."
  },
  {
    "criterion": "Hood and draft tube",
    "explanation": "Heat escapes from the head and the zipper line. A hood you can cinch and a draft tube behind the zipper stop that. Look for both in the feature list on any bag meant for below 40F."
  },
  {
    "criterion": "Waterproof claims",
    "explanation": "A waterproof or water-resistant shell helps against tent condensation, but it will not keep a soaked bag warm. Treat these claims as light protection and keep the bag in a dry sack. Synthetic fill tolerates moisture better than down."
  },
  {
    "criterion": "Compression and storage",
    "explanation": "A compression sack saves pack space but wears insulation if used for storage. Carry the bag in the sack and store it loose at home. Hang loops, as on the TETON Trailhead, make loose storage easy."
  }
];

export const faq = [
  {
    "q": "Are warm-weather bags safe for backpacking?",
    "a": "Yes, if you plan trips above 55F and carry a layer. The ECOOPRO lists 1.7 lb and a 55 to 60F range, so it works for summer only."
  },
  {
    "q": "What mistake do first-time backpackers make with ratings?",
    "a": "They read the lowest number as a comfort figure. A 0F bag like the North Rim is a limit-style rating, so comfort sits warmer."
  },
  {
    "q": "Is the Coleman North Rim worth it over the TETON Trailhead?",
    "a": "Only if your trips go below freezing. The TETON Trailhead handles 20F at a similar price and is easier to shop around, while the North Rim adds the colder figure."
  },
  {
    "q": "How do I pack a synthetic bag on the trail?",
    "a": "Stuff it without folding into the compression sack, tighten the straps, and keep it at the bottom of the pack in a dry bag. This protects the loft."
  },
  {
    "q": "How do I keep a bag clean on long trips?",
    "a": "Wear clean base layers inside, air the bag each morning, and wash it when it is dirty. The MalloMe lists a machine-washable liner and a wipe-clean shell."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Sleeping Bags",
    "href": "/sleep-gear/best-camping-sleeping-bags"
  },
  {
    "title": "Best Backpacking Pillows For Side Sleepers",
    "href": "/sleep-gear/best-backpacking-pillows-for-side-sleepers"
  },
  {
    "title": "Best Backpacking Pillow For Stomach Sleepers",
    "href": "/sleep-gear/best-backpacking-pillow-for-stomach-sleepers"
  },
  {
    "title": "Best Backpacking Pillow For Back Sleepers",
    "href": "/sleep-gear/best-backpacking-pillow-for-back-sleepers"
  }
];
