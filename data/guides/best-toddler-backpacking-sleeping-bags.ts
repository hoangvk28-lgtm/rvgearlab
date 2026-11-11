export const guideSlug = "best-toddler-backpacking-sleeping-bags";
export const guideTitle = "2 Best Toddler Backpacking Sleeping Bags in 2026";
export const metaTitle = "Best Toddler Backpacking Sleeping Bags in 2026";
export const metaDescription = "Two lightweight kids sleeping bags that suit toddlers on short backpacking trips: a Wake In Cloud sized for ages 3 to 8 and a tuphen rated 40 to 77F.";
export const mainKeyword = "best toddler backpacking sleeping bags";
export const introParagraphs = [
  "Almost no sleeping bag is made specifically for toddlers who backpack, and most kids' bags are sized for ages 3 to 8. This guide covers the two lightweight options with backpack-style sacks and clear ratings that fit that range, and it is open about how few exist.",
  "Both are budget bags in the 2.9 lb range or lighter, with water-resistant shells and compression sacks. A toddler will not carry them far, so think of these as bags a parent packs while the child carries the sack for the last bit."
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
    "id": "best-toddler-backpacking-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Wake In Cloud",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41J1VZZ9b0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DTH3GG4H?tag=rvgearlab-amz-20",
    "description": "Wake In Cloud measures this bag at 61 x 26 inches, weighs 2.9 lb and says it suits children ages 3 to 8, who can carry the backpack-style sack themselves. It has a 210T water-repellent polyester shell, a 240T pongee lining and soft polyester filling, with a 45 to 77F rated range.\n\nThat is the clearest fit and weight story of the two, with a hook-and-loop closure over the zipper, a drawstring hood and a two-way bottom zipper that frees the feet on warm nights. The tuphen 3-Season states a lower range and leaves out the size.\n\nA good match for preschool to early school-age campers who like fun designs and want a bag they can carry. It also works for sleepovers at home.",
    "specs": [
      "61 x 26 inch, 2.9 lb",
      "45 to 77F rated range",
      "Fits ages 3 to 8"
    ],
    "pros": [
      "Size, weight and age range all printed",
      "Backpack-style sack kids can carry",
      "Two-way bottom zipper vents feet",
      "Hook-and-loop zipper guard"
    ],
    "cons": [
      "Range starts at 45F",
      "2.9 lb is heavy for a toddler to carry"
    ],
    "bestFor": "Preschool to early-school campers",
    "take": "A clearly sized kids' bag with printed weight and a backpack-style sack.",
    "catch": "A 45F low end means it is a mild-weather bag, and toddlers need help carrying it."
  },
  {
    "id": "best-toddler-backpacking-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Lower Range",
    "name": "tuphen Kids Sleeping Bag",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/516RRizmZ+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJZPHKRC?tag=rvgearlab-amz-20",
    "description": "tuphen rates this three-season kids' bag from 40 to 77F, with a waterproof, breathable polyester shell and 210T poly taffeta lining. Double S-stitching and 3D inner fibers hold the fill, and a compression sack with straps is designed as a backpack-style carry.\n\nIt reaches five degrees lower than the Wake In Cloud Kids Bag and costs about the same. The listing prints no length or weight, so it takes a little more checking before you buy.\n\nA reasonable choice for toddlers on spring and fall overnights, from preschool trips to backyard camping. A 2-way zipper makes it easier to open.",
    "specs": [
      "40 to 77F printed range",
      "Waterproof breathable shell",
      "Backpack-style compression sack"
    ],
    "pros": [
      "Prints a 40 to 77F range",
      "Waterproof breathable shell",
      "Double S-stitching holds fill",
      "2-way zipper opens easily"
    ],
    "cons": [
      "No length or weight printed",
      "Fewer details than the Wake In Cloud"
    ],
    "bestFor": "Spring and fall toddler overnights",
    "take": "A 40 to 77F range with a waterproof shell at a low price.",
    "catch": "The listing prints no length or weight, so check the size against your child."
  }
];

export const howWeEvaluated = [
  {
    "title": "Size and age fit",
    "description": "Each listing was read for printed size, age range and weight, since toddler fit is the main uncertainty."
  },
  {
    "title": "Temperature range",
    "description": "Printed ratings were compared, with a note on how low each reaches."
  },
  {
    "title": "Carry design",
    "description": "Backpack-style sacks and compression straps were compared."
  },
  {
    "title": "Shell and fill",
    "description": "Water-repellent shells and fill types were noted."
  },
  {
    "title": "Honest scope",
    "description": "Few listings target toddler backpacking, so the list is short."
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
    "subheading": "By Trip Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Preschool to early-school campers",
          "Wake In Cloud Kids Bag",
          "Printed size, weight and age range"
        ],
        [
          "Spring and fall overnights",
          "tuphen 3-Season",
          "Range reaches down to 40F"
        ],
        [
          "Backyard and sleepover use",
          "Wake In Cloud Kids Bag",
          "Fun designs, two-way zipper"
        ],
        [
          "Budget family trip",
          "tuphen 3-Season",
          "Low price with waterproof shell"
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
          "Wake In Cloud Kids Bag"
        ],
        [
          "$20 to $30",
          "tuphen 3-Season"
        ]
      ]
    }
  },
  {
    "subheading": "Printed Size vs Lower Range",
    "cards": [
      {
        "label": "Printed size",
        "text": "The Wake In Cloud Kids Bag prints 61 x 26 inches, 2.9 lb and ages 3 to 8."
      },
      {
        "label": "Lower range",
        "text": "The tuphen 3-Season reaches 40F but leaves out size and weight."
      }
    ],
    "note": "Choose the Wake In Cloud Kids Bag for fit confidence, and the tuphen 3-Season if you need a slightly lower range."
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
          "tuphen 3-Season"
        ],
        [
          "A little more for printed size",
          "Wake In Cloud Kids Bag"
        ]
      ]
    }
  },
  {
    "subheading": "Parents of Young Backpackers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed length, a stated weight and a backpack-style carry sack."
      },
      {
        "label": "In this comparison",
        "text": "The Wake In Cloud Kids Bag prints 61 x 26 inches and 2.9 lb with a backpack-style sack, and the tuphen 3-Season offers a strapped compression sack."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend a little more on the Wake In Cloud Kids Bag for printed size and weight."
      },
      {
        "label": "Save if",
        "text": "Save with the tuphen 3-Season if you only need a mild-weather bag."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fit for a small child",
    "explanation": "A bag too long for a toddler leaves cold air pooled at the feet, and one too short stunts growth. Look for a printed size, and pick a bag no more than 12 to 16 inches longer than the child. A 61 inch bag suits a child around 4 to 5 feet tall."
  },
  {
    "criterion": "Weight a child can carry",
    "explanation": "A 2.9 lb bag is a real load for a 3-year-old. Most toddlers will need a parent to carry it. Check the printed weight and plan who hauls it."
  },
  {
    "criterion": "Temperature realism",
    "explanation": "A rating of 45F for a toddler means a cool night needs extra layers, since small kids lose heat faster. Treat the low end as a minimum. Pick a bag rated at least ten degrees colder than the forecast."
  },
  {
    "criterion": "Sleeping pad and ground cold",
    "explanation": "A thin pad lets ground cold rise into a small body. A kids' pad with R 2 or higher helps. Plan the pad as part of the bag."
  },
  {
    "criterion": "Easy zippers for small hands",
    "explanation": "Zippers that snag frustrate a child and can wake the whole tent. A 2-way zipper with a pull that a child can grip makes bedtime easier. Look for snag-free zipper language."
  }
];

export const faq = [
  {
    "q": "Can a toddler really backpack with a sleeping bag?",
    "a": "Only for very short walks. Parents usually carry the bag. A backpack-style sack lets the child carry it a little."
  },
  {
    "q": "What do parents get wrong about toddler bags?",
    "a": "They buy for age and skip the size. The Wake In Cloud Kids Bag lists 61 inches, which suits ages 3 to 8. Check the length against your child."
  },
  {
    "q": "Is the Wake In Cloud worth more than the tuphen?",
    "a": "If you want printed size and weight, yes. The tuphen 3-Season reaches 40F but leaves out those numbers."
  },
  {
    "q": "What temperature is safe for a toddler?",
    "a": "Keep to mild nights, above about 45F, with a pad and layers. Small kids chill fast. Check the forecast and bring a backup."
  },
  {
    "q": "How do I clean a kids' bag?",
    "a": "Spot clean the shell and wash as the tag allows. Dry fully before storing. Air it between trips."
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
