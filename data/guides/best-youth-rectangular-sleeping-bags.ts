export const guideSlug = "best-youth-rectangular-sleeping-bags";
export const guideTitle = "3 Best Youth Rectangular Sleeping Bags in 2026";
export const metaTitle = "Best Youth Rectangular Sleeping Bags in 2026";
export const metaDescription = "Three rectangular-style sleeping bags for youth: a TETON Junior rated 20F, a glow-in-the-dark Coleman rated 50F and a budget HTMEYBG that opens into a blanket.";
export const mainKeyword = "best youth rectangular sleeping bags";
export const introParagraphs = [
  "Rectangular youth bags let kids sprawl and unzip into a blanket for movie nights, but few listings say the shape outright. This guide covers the three that fit youth and describe a roomy, open cut, and it says plainly how thin the field is.",
  "They span 20F to 50F comfort labels and ages 6 and up. The right choice depends on whether your child camps in cool weather or mostly on warm nights and sleepovers."
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
    "id": "best-youth-rectangular-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Teton Junior",
    "price": "$57.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31CbZOTBS+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B007JTLQHQ?tag=rvgearlab-amz-20",
    "description": "The TETON Junior is a youth bag with a 20 degree label that comes in either a taffeta or canvas outer. Behind its two-way zippers runs a draft tube the length of the bag, and the lining hides a pocket for a flashlight or phone. A stuff sack and hang loops finish the kit.\n\nNo other bag here is rated for real cold, and the draft tube blocks air along the zipper in a way the other two never describe. Its price is higher than both, which is what the lower rating costs.\n\nA strong choice for kids who camp in spring and fall. It also works for cold sleepovers in a drafty cabin.",
    "specs": [
      "20 degree rated kids bag",
      "Full-length zipper draft tube",
      "Lining pocket, stuff sack"
    ],
    "pros": [
      "Rated to 20 degrees",
      "Draft tube along the zipper",
      "Pocket for a phone or light",
      "Hang loops preserve loft"
    ],
    "cons": [
      "No weight printed",
      "Higher price than the others"
    ],
    "bestFor": "Cool-weather youth camping",
    "take": "The only bag here rated for real cold, with a draft tube and a pocket.",
    "catch": "The highest price of the three, and no weight is printed."
  },
  {
    "id": "best-youth-rectangular-sleeping-bags-2",
    "rank": 2,
    "badge": "Best for Younger Kids",
    "name": "Coleman Kids Sleeping Bag",
    "price": "$42.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4112E3ObzEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CVSDQXJB?tag=rvgearlab-amz-20",
    "description": "Coleman rates this kids' bag to 50F for ages 6 and older, up to 5 ft tall. It glows in the dark, has an interior flashlight pocket and a no-snag zipper.\n\nIt has the clearest age and height fit of the three, and the glow design helps a child find the zipper at night. It is a warm-weather bag, so it sits well below the TETON Junior 20F in cold range.\n\nGood for school-age kids who want a fun bag for sleepovers and warm camps. A liner or pad covers cooler mornings.",
    "specs": [
      "Rated to 50F",
      "Ages 6 up, to 5 ft",
      "Glow in the dark"
    ],
    "pros": [
      "Clear age and height fit",
      "Glow-in-the-dark design",
      "Interior flashlight pocket",
      "Trusted camping brand"
    ],
    "cons": [
      "Only 50F rated",
      "No weight printed"
    ],
    "bestFor": "Sleepovers and warm nights",
    "take": "A clear age and height fit, with a glow design and flashlight pocket.",
    "catch": "Rated to 50F only, with no weight printed."
  },
  {
    "id": "best-youth-rectangular-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Budget Blanket Bag",
    "name": "Sleeping Bag",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Okhm6cC9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CL3B2DX3?tag=rvgearlab-amz-20",
    "description": "For the HTMEYBG, the seller gives a 50 to 68F comfort zone and a wider 41 to 77F usable span. The body runs 86.6 by 31.5 inches at roughly 3.3 lb, with a nylon outer, a pongee inner and a bottom zipper.\n\nCheapest of the group, it is also the only one that gives a weight and a size. It opens fully into a blanket for picnics, which the TETON Junior 20F and Coleman Glow Kids 50F do not mention.\n\nBest for teens and older youth who want a budget bag that doubles as a blanket. The listing says it suits teenagers and adults.",
    "specs": [
      "Comfort 50 to 68F, limit 41F",
      "3.3 lb, 86.6 inches long",
      "Opens flat as a blanket"
    ],
    "pros": [
      "Lowest price here",
      "Weight and size printed",
      "Opens fully into a blanket",
      "Wipes clean easily"
    ],
    "cons": [
      "Comfort starts at 50F",
      "Heavier than lighter picks"
    ],
    "bestFor": "Teens on a budget",
    "take": "The lowest price with weight, size and a full-open blanket mode.",
    "catch": "Its comfort range stops at 50F, and it is long for small kids."
  }
];

export const howWeEvaluated = [
  {
    "title": "Shape and roominess",
    "description": "Each listing was read for an open, roomy cut or blanket mode."
  },
  {
    "title": "Temperature rating",
    "description": "Printed ratings were compared, since they range from 20F to 50F."
  },
  {
    "title": "Age and height",
    "description": "Stated ages and height limits were compared."
  },
  {
    "title": "Weight and extras",
    "description": "Printed weights, pockets and draft tubes were noted."
  },
  {
    "title": "Honest scope",
    "description": "Only three listings give enough information to compare, so the list is short."
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
    "subheading": "By Camping Conditions",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Cool nights near 20F",
          "TETON Junior 20F",
          "Rated to 20 degrees"
        ],
        [
          "Warm sleepovers, younger kids",
          "Coleman Glow Kids 50F",
          "Glow design, ages 6 and up"
        ],
        [
          "Teens on a budget",
          "HTMEYBG 3 Season",
          "86.6 x 31.5 inches, opens flat"
        ],
        [
          "Backyard blanket nights",
          "HTMEYBG 3 Season",
          "Full-open blanket mode"
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
          "$10 to $20",
          "HTMEYBG 3 Season"
        ],
        [
          "$40 to $50",
          "Coleman Glow Kids 50F"
        ],
        [
          "$50 to $60",
          "TETON Junior 20F"
        ]
      ]
    }
  },
  {
    "subheading": "Cold-Rated vs Warm-Weather",
    "cards": [
      {
        "label": "Cold-rated",
        "text": "The TETON Junior 20F has the rating and the draft tube for chilly camps."
      },
      {
        "label": "Warm-weather",
        "text": "The Coleman Glow Kids 50F and HTMEYBG 3 Season are warm-night bags with comfort starting near 50F."
      }
    ],
    "note": "Choose the TETON Junior 20F if you camp in cool weather and either warm-night bag otherwise."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest cost",
          "HTMEYBG 3 Season"
        ],
        [
          "Mid cost, fun design",
          "Coleman Glow Kids 50F"
        ],
        [
          "Higher cost, cold rating",
          "TETON Junior 20F"
        ]
      ]
    }
  },
  {
    "subheading": "Parents of Young Campers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated age or height range, a temperature rating and a safe, easy zipper."
      },
      {
        "label": "In this comparison",
        "text": "The Coleman Glow Kids 50F prints ages 6 and up to 5 ft with a no-snag zipper, and the TETON Junior 20F offers two-way zippers."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the TETON Junior 20F if your child camps in cool weather."
      },
      {
        "label": "Save if",
        "text": "Save with the HTMEYBG 3 Season for a warm-night bag that doubles as a blanket."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Open shape and warmth",
    "explanation": "A rectangular cut lets kids sprawl, but it holds more air and loses heat faster than a mummy. Draft tubes and a snug hood offset that. Look for those parts."
  },
  {
    "criterion": "Age and height limits",
    "explanation": "A bag meant for ages 6 up to 5 ft tall will swallow a smaller child. Compare your child's height with the printed limit. Check the listing's age range."
  },
  {
    "criterion": "Temperature realism",
    "explanation": "A 50F rating is a warm-night label for kids, who chill faster. Add a pad and layers at 55F. Choose a rating ten degrees colder than your lows."
  },
  {
    "criterion": "Blanket mode",
    "explanation": "A bag that opens fully into a blanket doubles as a sleepover or picnic quilt. That makes it useful beyond camping season. Check that the zipper runs the full length and the listing says opens flat."
  },
  {
    "criterion": "Draft tubes and pockets",
    "explanation": "A tube behind the zipper blocks cold air, and a lining pocket keeps a flashlight handy. Both are small touches that matter at night. Look for them by name."
  }
];

export const faq = [
  {
    "q": "Are rectangular bags good for kids?",
    "a": "They let kids move, which many prefer. They lose heat faster than mummies. Use a pad and layers."
  },
  {
    "q": "What mistake do parents make buying a youth bag?",
    "a": "They ignore the height range. A bag too long wastes warmth. Match the printed limit to your child's height."
  },
  {
    "q": "Is the TETON Junior worth more than the others?",
    "a": "If you camp below 50F, yes. The TETON Junior 20F is rated to 20 degrees. For warm nights, the Coleman Glow Kids 50F is enough."
  },
  {
    "q": "Can these be used as blankets?",
    "a": "The HTMEYBG 3 Season opens fully into a blanket. Others have full zippers but do not say so. Check the listing."
  },
  {
    "q": "How do I clean them?",
    "a": "Wipe clean and wash as the tag allows. Dry fully. Air them between trips."
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
