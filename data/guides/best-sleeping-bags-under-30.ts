export const guideSlug = "best-sleeping-bags-under-30";
export const guideTitle = "5 Best Sleeping Bags Under 30 in 2026";
export const metaTitle = "Best Sleeping Bags Under 30 in 2026";
export const metaDescription = "Best sleeping bags under $30: warm-weather and 3-season adult bags compared on temperature range, size, shell and packed weight.";
export const mainKeyword = "best sleeping bags under 30";
export const introParagraphs = [
  "Thirty dollars buys a warm-weather bag, not a winter one. Every pick here is a rectangular or semi-rectangular synthetic bag rated for roughly 40 to 77F, and the real differences are in size, shell fabric and whether the rating is believable.",
  "Five bags clear the cap. They run from under $20 to just under $30, and the notes show what the extra money buys: a longer cut, a draft collar or a lighter packed weight, while the cheapest bags save by using plain polyester and thin insulation."
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
    "id": "best-sleeping-bags-under-30-1",
    "rank": 1,
    "badge": "Best Value Under $30",
    "name": "BORULL 3 Season Sleeping Bag Compact Lightweight Warm for Adults Camping",
    "price": "$27.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31UF8unBJoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GRV98B9V?tag=rvgearlab-amz-20",
    "description": "The BORULL measures 87 by 34 inches and uses 300GSM one-piece synthetic fill rated for 40 to 65F, with limits of 30F and 70F. It has a draft collar, an insulated zipper guard, a two-way zipper and an adjustable half-circle hood.\n\nIt sits near the top of the budget and is the only bag here with both a draft collar and a zipper guard, which are the parts that stop cold air at the neck and along the zipper. The cheaper TANSTRIDER has a collar with no zipper guard, and the NewDoar ultralight packs smaller with less insulation.\n\nIt suits car campers and trailhead camping from spring to fall who want a roomy 3-season bag at a low price. Adults up to roughly 6 feet 4 inches fit inside.",
    "specs": [
      "87 x 34 inch cut",
      "40 to 65F range, 300GSM fill",
      "Draft collar, zipper guard"
    ],
    "pros": [
      "Wide 34 inch cut for roomy sleeping",
      "Draft collar and zipper guard",
      "One-piece fill stays in place",
      "Two-way zipper vents the feet"
    ],
    "cons": [
      "No weight figure is printed",
      "Packed size is not given"
    ],
    "bestFor": "Spring to fall car camping",
    "take": "The best-equipped bag at this price for cool shoulder-season nights.",
    "catch": "It is a basic synthetic bag, so keep it above freezing."
  },
  {
    "id": "best-sleeping-bags-under-30-2",
    "rank": 2,
    "badge": "Best Waterproof Shell",
    "name": "ECOOPRO Warm Weather Sleeping Bag",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/314Ru2qiU-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08FHP7QMR?tag=rvgearlab-amz-20",
    "description": "The ECOOPRO envelope bag runs 83 inches long and 30 wide, with a nylon waterproof shell over a polyester lining. It packs into a compression sack and works with a liner in warm weather.\n\nIt is the only bag on the list sold specifically as a warm-weather bag, and it costs the most of the five, with a nylon shell that wipes clean after a damp night. The BORULL is roomier and has a draft collar, while the ECOOPRO has a trimmer 83 inch length.\n\nIt suits summer camping, Scouts and sleepovers where the temperature stays well above 50F. Add a liner if the night turns cool.",
    "specs": [
      "83 x 30 inch envelope bag",
      "Waterproof nylon shell",
      "Compression sack included"
    ],
    "pros": [
      "Nylon shell wipes clean",
      "Compression sack saves space",
      "Works for summer and scout trips",
      "Polyester lining is breathable"
    ],
    "cons": [
      "Narrow 30 inch width",
      "No draft collar"
    ],
    "bestFor": "Summer and scout camping",
    "take": "A clean, tidy warm-weather bag for summer nights.",
    "catch": "It is not built for cool nights without a liner."
  },
  {
    "id": "best-sleeping-bags-under-30-3",
    "rank": 3,
    "badge": "Best Washable Pick",
    "name": "MalloMe Sleeping Bags for Adults Cold Weather & Warm",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51TnRkxW-6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B077XQDZW4?tag=rvgearlab-amz-20",
    "description": "The MalloMe carries a 50 to 77F temperature range and weighs about 3 lb. It fits an adult up to 6 feet, with a waterproof outer shell that wipes clean and a liner that is machine washable.\n\nIt is a good value near the bottom of the price range and weighs more than the NewDoar ultralight. The wipe-clean shell and washable liner make it easier to keep fresh than a plain polyester bag.\n\nIt suits families who share one bag between trips and need something that goes in the washing machine. It is rated for warm weather only.",
    "specs": [
      "About 3 lb, fits to 6 ft",
      "50 to 77F range",
      "Wipe-clean shell, washable liner"
    ],
    "pros": [
      "Liner goes in the washing machine",
      "Shell wipes clean in seconds",
      "Fits adults up to 6 feet",
      "Low price for an adult bag"
    ],
    "cons": [
      "Heavier than the ultralight pick",
      "Warm-weather rating only"
    ],
    "bestFor": "Shared family use",
    "take": "A practical wipe-and-wash bag for warm nights.",
    "catch": "At about 3 lb it is heavy for backpacking."
  },
  {
    "id": "best-sleeping-bags-under-30-4",
    "rank": 4,
    "badge": "Best Ultralight Pick",
    "name": "Ultralight 1.5lbs Sleeping Bag 50-70°F for Warm Weather-Blue",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ITLrJK8JL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F83BP6VQ?tag=rvgearlab-amz-20",
    "description": "The NewDoar weighs 1.5 lb and packs to an 11.8 by 6.5 inch bundle. It has a 380T ripstop nylon shell, a heavy-duty compression sack and two-way zippers, and it is rated for 50 to 70F.\n\nOf the five, this is the lightest and smallest bundle, which is why it costs a few dollars more than the heaviest bags. The two-way zippers let two bags join into a double, a feature the BORULL and ECOOPRO do not offer.\n\nIt suits backpackers and summer hikers who count ounces and sleep in warm weather. It comes in a medium size only.",
    "specs": [
      "1.5 lb, 11.8 x 6.5 inch pack",
      "380T ripstop nylon shell",
      "50 to 70F range"
    ],
    "pros": [
      "Lightest and smallest of the five",
      "Ripstop shell resists tears",
      "Zips to a second bag",
      "Packs into a small bundle"
    ],
    "cons": [
      "Rated for 50 to 70F only",
      "Medium size only"
    ],
    "bestFor": "Summer backpacking",
    "take": "The one to carry when pack weight matters more than warmth.",
    "catch": "It has little insulation, so it suits warm nights only."
  },
  {
    "id": "best-sleeping-bags-under-30-5",
    "rank": 5,
    "badge": "Best Draft Collar Under $20",
    "name": "TANSTRIDER Sleeping Bags for Adults",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41imdQSdq+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FQ4ZBCYC?tag=rvgearlab-amz-20",
    "description": "The TANSTRIDER is 31.5 inches wide and 86.6 long, and it lists a comfort range of 55 to 60F with a recommended limit of 40F. It has a draft collar with drawstrings, separate foot zippers, a water-resistant shell and a compression sack.\n\nIt is one of the two cheapest bags here and gives a roomy cut and a draft collar that the lowest-priced bags often skip. The separate foot zippers let you vent your feet without opening the whole bag, a convenience the pricier bags here do not offer.\n\nIt suits campers on a tight budget who want an adult-sized bag for summer and early fall. Sleepers to about 6 feet 1 inch fit comfortably.",
    "specs": [
      "31.5 x 86.6 inch cut",
      "Comfort 55 to 60F, limit 40F",
      "Draft collar, foot zippers"
    ],
    "pros": [
      "Draft collar at a very low price",
      "Foot zippers vent the feet",
      "Roomy cut for tall campers",
      "Compression sack included"
    ],
    "cons": [
      "Comfort range starts at 55F",
      "Water-resistant, not waterproof"
    ],
    "bestFor": "Budget adult camping",
    "take": "A budget bag with a draft collar and a roomy cut.",
    "catch": "The 55F comfort figure means it is a summer bag."
  }
];

export const howWeEvaluated = [
  {
    "title": "Temperature range honesty",
    "description": "Each bag's stated range was compared with its fill type, and rated limits were separated from comfort ranges."
  },
  {
    "title": "Size and fit",
    "description": "Length and width were compared against adult heights, since a 30 inch bag fits tighter than a 34 inch one."
  },
  {
    "title": "Shell and lining",
    "description": "Waterproof, water-resistant and plain polyester shells were compared on cleaning and wet-weather use."
  },
  {
    "title": "Weight and packed size",
    "description": "Weight and packed dimensions were weighed against car camping and backpacking use."
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
          "Car camping in spring and fall",
          "BORULL 3 Season",
          "Draft collar and zipper guard on a roomy 34 inch cut."
        ],
        [
          "Summer backpacking",
          "NewDoar Ultralight",
          "1.5 lb with an 11.8 x 6.5 inch packed size."
        ],
        [
          "Damp nights and muddy sites",
          "ECOOPRO Warm Weather Bag",
          "Waterproof nylon shell wipes clean."
        ],
        [
          "Shared family bag",
          "MalloMe Year Round",
          "Machine-washable liner."
        ],
        [
          "Tight budget, tall camper",
          "TANSTRIDER Adult Bag",
          "31.5 x 86.6 inch cut for adults up to 6 feet 1 inch."
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
          "$10 to $30",
          "TANSTRIDER Adult Bag or MalloMe Year Round"
        ],
        [
          "$20 to $30",
          "BORULL 3 Season or NewDoar Ultralight"
        ],
        [
          "$20 to $30",
          "ECOOPRO Warm Weather Bag"
        ]
      ]
    }
  },
  {
    "subheading": "Roomy cut vs ultralight pack",
    "cards": [
      {
        "label": "Roomy cut",
        "text": "A wide, long bag leaves space to roll over and to wear a base layer. The BORULL 3 Season and TANSTRIDER Adult Bag are the roomiest picks here."
      },
      {
        "label": "Ultralight pack",
        "text": "A narrow, lightweight bag packs into a small bundle and saves weight. The NewDoar Ultralight is the smallest and lightest of the five."
      }
    ],
    "note": "Most campers should buy the BORULL 3 Season, and choose the NewDoar Ultralight only if you carry the bag on your back."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Spend",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $20",
          "TANSTRIDER Adult Bag"
        ],
        [
          "Around $23",
          "MalloMe Year Round"
        ],
        [
          "Around $28",
          "NewDoar Ultralight"
        ],
        [
          "Near $28 for a roomy bag",
          "BORULL 3 Season"
        ],
        [
          "Near $30 for waterproof shell",
          "ECOOPRO Warm Weather Bag"
        ]
      ]
    }
  },
  {
    "subheading": "For kids and teens specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a shorter length, a fully zipped hood and a lower weight, and avoid adult bags that are too long."
      },
      {
        "label": "In this comparison",
        "text": "The MalloMe Year Round is sold for both kids and adults, and the NewDoar Ultralight is lighter, but both run long, so measure the child against the bag length."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you need weight savings or a trusted rating, which is where the NewDoar Ultralight saves about 1.5 lb over the MalloMe Year Round. Above $30 you also start to see real 30F ratings."
      },
      {
        "label": "Save if",
        "text": "Save if you camp only in summer, because the TANSTRIDER Adult Bag gives a usable adult bag under $20."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Comfort vs limit rating",
    "explanation": "A comfort rating is the temperature at which an average sleeper stays warm, while the limit is the coldest point a bag can handle before you get cold. A bag with a comfort rating of 55F and a limit of 40F is a summer bag, not a 40F bag. Look for both numbers and plan on the comfort figure, and add a liner or a layer if the nights fall near the limit."
  },
  {
    "criterion": "Length and width",
    "explanation": "Sleeping bags are cut in lengths such as 83, 86 and 87 inches, and widths from 30 to 34 inches. A bag shorter than your height by a few inches compresses insulation at the feet, and a bag that is too narrow feels tight at the shoulders. Measure your height plus 6 inches for the length and check the shoulder width, especially if you roll over at night."
  },
  {
    "criterion": "Fill and insulation weight",
    "explanation": "Synthetic fill is rated in grams per square meter, and 300GSM is a common figure for a 3-season bag. Higher numbers mean more warmth but also more weight and bulk. Look for the fill weight and a statement of the temperature range, and be wary of a four-season claim at a very low price."
  },
  {
    "criterion": "Zipper and draft collar",
    "explanation": "A two-way zipper lets you vent the feet, and a draft collar and zipper guard stop cold air from leaking in. These details cost little to add, yet many cheap bags skip them. Look for the draft collar and zipper guard in the feature list, since a bag without them can feel colder than its rating."
  },
  {
    "criterion": "Weight and packed size",
    "explanation": "A 3 lb bag is fine for a car trunk, but a backpacker needs about 1.5 lb or less. Compression sacks cut the packed volume, and the packed size is often printed in inches. Find the packed dimensions and weight before you buy, and compare them with the space in your pack."
  }
];

export const faq = [
  {
    "q": "What temperature is a $30 sleeping bag good for?",
    "a": "Expect a comfort range around 50 to 60F and a limit near 40F. The TANSTRIDER Adult Bag lists a comfort range of 55 to 60F and a limit of 40F, which is typical of this price. For nights below 40F, add a liner or a pad with more insulation, or step up to a rated 20F bag."
  },
  {
    "q": "Are cheap sleeping bags waterproof?",
    "a": "The shells are water-resistant or wipe-clean, not waterproof. The ECOOPRO Warm Weather Bag has a waterproof nylon shell, yet seams and zippers still let moisture in during heavy rain. Keep any bag inside a tent or under cover."
  },
  {
    "q": "Is a rectangular bag better than a mummy at this price?",
    "a": "Rectangular bags give more room and cost less, but they leak more heat than a mummy shape. The budget picks here are rectangular or semi-rectangular, so they suit mild nights. Choose a mummy shape only if you camp in colder weather and accept a snugger fit."
  },
  {
    "q": "How do I pack a sleeping bag into its sack?",
    "a": "Stuff the foot of the bag in first and push the rest in without folding, since folding creates permanent creases in the fill. Then pull the compression straps tight. Take it out of the sack as soon as you reach camp so the fill can loft."
  },
  {
    "q": "How should I wash a synthetic sleeping bag?",
    "a": "Use a front-loading washer on a gentle cycle with mild soap and tumble dry on low with a few clean tennis balls. The MalloMe Year Round has a machine-washable liner, which helps between full washes. Skip fabric softener and never store the bag compressed."
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
