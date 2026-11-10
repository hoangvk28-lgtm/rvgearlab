export const guideSlug = "best-rectangular-sleeping-bags";
export const guideTitle = "5 Best Rectangular Sleeping Bags in 2026";
export const metaTitle = "Best Rectangular Sleeping Bags in 2026";
export const metaDescription = "Best rectangular sleeping bags compared on printed ratings, size, fill and construction, for campers who want room to move and a bag that opens flat.";
export const mainKeyword = "best rectangular sleeping bags";
export const introParagraphs = [
  "Rectangular sleeping bags trade packability for room. They open flat into a blanket, let you roll over and bend your knees, and they suit car camping, cabins and kids' sleepovers far better than a trail.",
  "Five rectangles are compared, from a standard-size Coleman to an oversize 90 by 39 inch bag and a canvas hunting bag. Most are cool-weather or cold-weather designs, so the notes below separate the temperature figures that listings print from the ones they only imply."
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
    "id": "best-rectangular-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "HiZYNICE Sleeping Bags for Adults XXL Cold Weather",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KeBZJkCgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09825XKBF?tag=rvgearlab-20",
    "description": "Cut wide at 90 by 39 inches for sleepers to 6 ft 7, the HiZYNICE XXL is the roomiest bag in the group. It prints three temperature figures, 30F comfort, 15F limit and 0F extreme, and adds a cotton flannel lining, a zipper draft tube and a dual-pull two-way zipper.\n\nAgainst the Coleman Brazos it is wider and prints more rating detail, which makes it the easiest rectangle here to plan around. Next to the Kanyak it is bigger and offers a colder limit figure.\n\nIt suits taller or broader campers who car camp in cool weather. The bag is machine washable.",
    "specs": [
      "30F comfort, 15F limit",
      "90 by 39 in XXL cut",
      "Cotton flannel lining"
    ],
    "pros": [
      "Three clearly stated temperature ratings",
      "Sized for sleepers to 6 ft 7",
      "Zipper draft tube cuts heat loss",
      "Machine washable"
    ],
    "cons": [
      "Comfort rating is only 30F",
      "Bulky and heavy to carry"
    ],
    "bestFor": "Tall and broad car campers",
    "take": "Plan on the 30F comfort figure and the bag delivers.",
    "catch": "It is oversized, so the extra air space takes more body heat to warm."
  },
  {
    "id": "best-rectangular-sleeping-bags-2",
    "rank": 2,
    "badge": "Best for Couples",
    "name": "KANYAK Outdoor Rectangular Sleeping Bag",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/416uiYdBf-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BGHD64PJ?tag=rvgearlab-20",
    "description": "At 86.6 by 32.48 inches and 4 lb, the KANYAK rectangle carries printed ratings of 41F comfort and 32F limit. It has three zippers including a separate foot zipper, a 210T polyester shell and a compressed size of 11 to 14.2 inches.\n\nTwo KANYAK bags can splice into a double, something the Coleman bags do not list. It is also the lightest rectangle with a printed weight in this guide.\n\nIt suits couples who car camp in cool weather and want to join two singles. The foot zipper vents heat when it warms up.",
    "specs": [
      "Comfort 41F, limit 32F",
      "86.6 by 32.48 in, 4 lb",
      "Splicable, three zippers"
    ],
    "pros": [
      "Comfort and limit both printed",
      "Foot zipper for venting",
      "Splices with a second bag",
      "Packs to 11 to 14.2 inches"
    ],
    "cons": [
      "4 lb is heavy for its warmth",
      "Comfort 41F is cool-weather only"
    ],
    "bestFor": "Couples and cool car camping",
    "take": "Honest numbers on the page, plus a zip-together design for two.",
    "catch": "At 41F comfort, it is a cool-weather bag only."
  },
  {
    "id": "best-rectangular-sleeping-bags-3",
    "rank": 3,
    "badge": "Best for Cold Car Camps",
    "name": "Coleman Heritage Big & Tall 10°F Flannel Sleeping Bag",
    "price": "$67.58",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41keO1KCq5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B004J2FB5Y?tag=rvgearlab-20",
    "description": "The Coleman Heritage Big & Tall holds 5 lb of Holofill 808 insulation and is rated to 10F. It measures 40 by 84 inches, takes campers to 6 ft 7, and layers a cotton cover over a synthetic flannel liner with FiberLock construction.\n\nIt states the coldest rating among the rectangles besides the TETON Deer Hunter's 0 degree label, and the thick fill makes it feel like a blanket. It weighs far more than the Kanyak.\n\nIt suits cabin, truck-bed and car campers who care about thickness and have no weight limit. The Wrap 'N' Roll system keeps it tidy in storage.",
    "specs": [
      "10F rated, 5 lb Holofill 808",
      "40 by 84 in big and tall",
      "FiberLock, no-snag zipper"
    ],
    "pros": [
      "Thick fill suits real winter nights",
      "Sized for sleepers to 6 ft 7",
      "FiberLock keeps insulation in place",
      "Cotton cover with flannel liner"
    ],
    "cons": [
      "Very heavy for backpacking",
      "Takes a lot of storage space"
    ],
    "bestFor": "Winter car camping",
    "take": "Heavy, thick and cozy, earning its weight on cold car-camp nights.",
    "catch": "At 5 pounds of fill alone it is strictly a vehicle-based bag."
  },
  {
    "id": "best-rectangular-sleeping-bags-4",
    "rank": 4,
    "badge": "Best Standard Size",
    "name": "Coleman Brazos Sleeping Bag",
    "price": "$53.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JmzLs-hzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D6416YYW?tag=rvgearlab-20",
    "description": "Coleman sells the Brazos in standard size in 30F and 20F ratings, for campers to 5 ft 11. Features include a Thermolock draft tube, Fiberlock insulation that stays put and a no-snag zipper.\n\nIt costs less than the HiZYNICE and uses less material in its standard cut, which also makes it easier to store. The two ratings let you choose by season.\n\nIt suits casual campers under 5 ft 11 in who want a familiar brand. Fasteners keep the roll tight.",
    "specs": [
      "30F or 20F rating",
      "To 5 ft 11 in",
      "Thermolock draft tube"
    ],
    "pros": [
      "Rated for cool nights",
      "Draft tube blocks zipper leaks",
      "Fiberlock keeps fill in place",
      "No-snag zipper"
    ],
    "cons": [
      "Tall campers will not fit",
      "No weight stated"
    ],
    "bestFor": "Casual cool-weather camping",
    "take": "A dependable standard-size bag from a known name.",
    "catch": "The 5 ft 11 in limit rules it out for taller campers."
  },
  {
    "id": "best-rectangular-sleeping-bags-5",
    "rank": 5,
    "badge": "Best Rugged Shell",
    "name": "Teton 0F Degree Deer Hunter Sleeping Bag. Warm and Comfortable Camping Sleeping Bags",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ggZVlyhTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00A4VLHSE?tag=rvgearlab-20",
    "description": "The TETON Deer Hunter is a 0 degree bag with a tough canvas shell, fiber fill, a poly-flannel lining and a half-circle mummy-style hood. A second listing for the same bag is counted as one product here.\n\nIts canvas shell is the toughest in the group, suited to hunting camps and cabins. It costs more than every other rectangle and gives no comfort figure, unlike the HiZYNICE.\n\nIt suits hunters and cabin users who put their gear through hard use. The hood adds warmth on cold nights.",
    "specs": [
      "Canvas shell, fiber fill",
      "Poly-flannel lining",
      "Half-circle hood"
    ],
    "pros": [
      "Tough canvas shell built to last",
      "Fiber fill with double-layer build",
      "Soft poly-flannel lining",
      "Hood adds warmth for cold nights"
    ],
    "cons": [
      "Highest price in the list",
      "No comfort rating printed"
    ],
    "bestFor": "Hunting camps and cabins",
    "take": "A rugged canvas bag for rough use.",
    "catch": "It prints no comfort number, so use the 0 degree label as a limit class."
  }
];

export const howWeEvaluated = [
  {
    "title": "Printed ratings",
    "description": "We compared comfort, limit and extreme figures and flagged single labels."
  },
  {
    "title": "Size and fit",
    "description": "We compared lengths, widths and maximum heights."
  },
  {
    "title": "Fill and shell",
    "description": "We compared fill amounts, linings and shell materials."
  },
  {
    "title": "Features",
    "description": "We looked at draft tubes, zippers and splicing options."
  },
  {
    "title": "Price",
    "description": "We weighed price against room and documentation."
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
    "subheading": "By Camper Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Tall or broad car camper",
          "HiZYNICE XXL",
          "90 by 39 inches and three printed ratings"
        ],
        [
          "Couple wanting a double",
          "KANYAK Splicable",
          "Splices with a second bag"
        ],
        [
          "Cold nights near 10F",
          "Coleman Heritage",
          "10F rating with 5 lb of fill"
        ],
        [
          "Casual camper under 5 ft 11 in",
          "Coleman Brazos",
          "Standard size with 20F or 30F options"
        ],
        [
          "Rough hunting camps",
          "TETON Deer Hunter",
          "Canvas shell and flannel lining"
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
          "$30 to $60",
          "KANYAK Splicable or Coleman Brazos"
        ],
        [
          "$60 to $70",
          "Coleman Heritage or HiZYNICE XXL"
        ],
        [
          "$120 to $130",
          "TETON Deer Hunter"
        ]
      ]
    }
  },
  {
    "subheading": "Standard vs Oversize",
    "cards": [
      {
        "label": "Standard",
        "text": "The Coleman Brazos and KANYAK Splicable are standard in size. They use less material and are easier to store."
      },
      {
        "label": "Oversize",
        "text": "The HiZYNICE XXL and Coleman Heritage measure up to 90 inches long. They give room to roll and suit big campers, though they take more body heat to warm."
      }
    ],
    "note": "Most campers should choose the Coleman Brazos or KANYAK Splicable, and tall campers the HiZYNICE XXL."
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
          "Lowest price",
          "Coleman Brazos"
        ],
        [
          "Low price with splicing",
          "KANYAK Splicable"
        ],
        [
          "Mid price with printed ratings",
          "HiZYNICE XXL"
        ],
        [
          "Mid price cold fill",
          "Coleman Heritage"
        ],
        [
          "Premium rugged",
          "TETON Deer Hunter"
        ]
      ]
    }
  },
  {
    "subheading": "Cool-Weather Car Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a stated comfort figure and a draft tube."
      },
      {
        "label": "In this comparison",
        "text": "The HiZYNICE XXL lists 30F comfort with a zipper draft tube, and the Coleman Heritage lists 10F with 5 lb of Holofill 808."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the HiZYNICE XXL if you are tall and want three printed ratings, or on the Coleman Heritage for 10F nights."
      },
      {
        "label": "Save if",
        "text": "Save with the Coleman Brazos if you are under 5 ft 11 in and camp in cool, not cold, weather."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Why choose a rectangle",
    "explanation": "A rectangle opens flat, zips to a partner and leaves room to turn. The cost is warmth, since there is more air to heat. Pair it with a good pad to offset that."
  },
  {
    "criterion": "Read the rating type",
    "explanation": "Comfort is the planning number. The HiZYNICE prints comfort, limit and extreme, and the KANYAK prints comfort and limit. A single label like 0 degrees on the Deer Hunter is a limit-class figure."
  },
  {
    "criterion": "Size and weight",
    "explanation": "The Coleman Brazos fits to 5 ft 11 in, and the HiZYNICE fits to 6 ft 7 in. The Heritage holds 5 lb of fill. Match size to your frame."
  },
  {
    "criterion": "Fill and lining",
    "explanation": "Synthetic fill keeps warmth when damp, and flannel feels warm on entry. Canvas shells are rugged but heavy. Check the fill name on the listing."
  },
  {
    "criterion": "Splicing and zippers",
    "explanation": "Splicing lets two bags make a double. Only the KANYAK lists it. Look for matching zipper sides if you want to pair bags."
  },
  {
    "criterion": "Pad and ground",
    "explanation": "Insulation under you compresses. A thick pad does more than a thicker bag. Budget for it."
  }
];

export const faq = [
  {
    "q": "Is a rectangular bag warm enough?",
    "a": "It can be, with enough fill and a pad. The Heritage lists 10F, while the KANYAK lists 41F comfort."
  },
  {
    "q": "What is the common mistake with rectangles?",
    "a": "Ignoring the pad. The ground steals heat, so use a pad with a stated R-value."
  },
  {
    "q": "Is the HiZYNICE worth it over the Brazos?",
    "a": "If you are tall or want printed ratings, yes. For shorter campers the Brazos costs less."
  },
  {
    "q": "Can two rectangular bags zip together?",
    "a": "Some can. The KANYAK lists a splicable design, and others need matching zipper sides."
  },
  {
    "q": "How do I wash one?",
    "a": "Check the label. Most synthetic rectangles go in a front-loader on gentle and dry low."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Sleeping Bags",
    "href": "/sleep-gear/best-backpacking-sleeping-bags"
  },
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
  }
];
