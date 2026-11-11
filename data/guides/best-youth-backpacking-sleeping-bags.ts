export const guideSlug = "best-youth-backpacking-sleeping-bags";
export const guideTitle = "4 Best Youth Backpacking Sleeping Bags in 2026";
export const metaTitle = "Best Youth Backpacking Sleeping Bags in 2026";
export const metaDescription = "Best youth backpacking sleeping bags: four bags for kids and teens compared on size, temperature figures and weight, with a clear note on fit for small campers.";
export const mainKeyword = "best youth backpacking sleeping bags";
export const introParagraphs = [
  "Only one listing here is truly sized for kids, the Big Agnes Little Red. The other three are adult-length bags that list boys, girls or youth among their users, so we flag where they run long.",
  "We ordered them by how well each listing documents a child's fit and warmth. Expect to add a pad and a liner, since a youth bag is only as warm as the ground allows."
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
    "id": "best-youth-backpacking-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Big Agnes Little Red",
    "price": "$99.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31BOM8FuMnL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DSQXGVC9?tag=rvgearlab-amz-20",
    "description": "The Big Agnes Little Red is sized for young campers up to 4 ft tall, with recycled Fireline Core Eco synthetic insulation that stays warm when wet. A PadLok system keeps squirmy sleepers on their pad, and a contoured hood and draft collar add warmth.\n\nIt is the only genuinely kid-sized bag in this list and carries the coldest label at 20 degrees. The REM storage sleeve doubles as a stuff sack that cannot be lost.\n\nIt suits kids on family backpacking trips who need a bag that fits their frame. Kids can adjust their own hood and zipper.",
    "specs": [
      "Fits kids up to 4 ft",
      "Fireline Core Eco synthetic",
      "20 degree label, PadLok system"
    ],
    "pros": [
      "Cut to fit kids up to 4 ft",
      "Insulation stays warm when wet",
      "PadLok keeps sleepers on the pad",
      "Storage sleeve cannot get lost"
    ],
    "cons": [
      "Highest price of the four",
      "Kids outgrow it by about 4 ft"
    ],
    "bestFor": "Kids up to 4 ft tall",
    "take": "A real kid-sized bag with features that help small campers.",
    "catch": "It costs the most of the four, and kids taller than 4 ft will outgrow it."
  },
  {
    "id": "best-youth-backpacking-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Budget Teen Pick",
    "name": "Sleeping Bag",
    "price": "$19.65",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41929YIcptL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CL3BQWKJ?tag=rvgearlab-amz-20",
    "description": "The HTMEYBG lists a comfort range of 50 to 68F and a limit of 41 to 77F. It measures 86.6 by 31.5 inches, weighs about 3.3 lb and includes a compression bag.\n\nIt is the cheapest in the guide and the only adult-length pick that prints both a comfort and a limit range. A bottom zipper vents warm nights, and the bag opens fully as a blanket.\n\nIt suits teenagers and older kids on summer trips who need a cheap bag. The shell wipes clean.",
    "specs": [
      "50 to 68F comfort range",
      "86.6 x 31.5 in, 3.3 lb",
      "Compression bag included"
    ],
    "pros": [
      "Comfort and limit ranges printed",
      "Bottom zipper vents heat",
      "Opens fully as a blanket",
      "Lowest price of the four"
    ],
    "cons": [
      "Too long for small kids",
      "3.3 lb is heavy for young carriers"
    ],
    "bestFor": "Teens on summer trips",
    "take": "A cheap, adult-length bag that prints comfort and limit figures.",
    "catch": "At 86.6 inches it is too long for young kids, and 3.3 lb is heavy for a child to carry."
  },
  {
    "id": "best-youth-backpacking-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Mixed Family",
    "name": "Sportneer Sleeping Bag for Adults & Kids",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41D5OIW3qtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQNPR4VD?tag=rvgearlab-amz-20",
    "description": "The Sportneer bag measures 31.5 by 87 inches and is sold for adults and kids. A two-way separating zip at the bottom frees the feet, and the build uses a 190T polyester taffeta shell and a pongee lining.\n\nCompared with the HTMEYBG, it is slightly longer and states no temperature range. It costs less than the Big Agnes and gives families one bag that works for a teen or a parent.\n\nIt suits families who want one inexpensive bag to share among older kids and adults. The foot vent lets sleepers cool off.",
    "specs": [
      "31.5 x 87 inch size",
      "Two-way foot zipper",
      "190T polyester shell"
    ],
    "pros": [
      "Low price",
      "Foot vent for warm nights",
      "Rated for 3-4 seasons",
      "Compact and portable"
    ],
    "cons": [
      "No temperature rating stated",
      "Runs long for small children"
    ],
    "bestFor": "Families sharing one bag",
    "take": "A low-price bag that fits a teen or an adult, with a foot vent.",
    "catch": "The listing names no temperature rating, and the 87 inch cut runs long for small children."
  },
  {
    "id": "best-youth-backpacking-sleeping-bags-4",
    "rank": 4,
    "badge": "Best Rider Style",
    "name": "Sleeping Bags for Adults Warm Weather -Backpacking Ultralight Waterproof Sleeping Bag for Boys Girls Youth for",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41vAZ5ucejL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BV9YZS9H?tag=rvgearlab-amz-20",
    "description": "The JEAOUIA measures 31.5 by 86.6 inches and is built from 210T nylon with a polyester pongee lining. The listing gives a design range of 59 to 77F, a drawstring hood and a foot zipper.\n\nIt is the warmest-weather pick of the group, and a little wider than the ECOOPRO bags that fill other lists. A compression sack comes in the box, and the listing names boys, girls and youth as users.\n\nIt suits older kids on summer trips who need a roomy shell. The foot zipper helps on hot nights.",
    "specs": [
      "31.5 by 86.6 in, 210T nylon",
      "Design range 59 to 77F",
      "Drawstring hood, foot zipper"
    ],
    "pros": [
      "Wider at 31.5 inches",
      "Foot zipper vents heat",
      "Drawstring hood",
      "Compression sack included"
    ],
    "cons": [
      "No weight is listed",
      "Height limit is 5 ft 11 in"
    ],
    "bestFor": "Older kids on summer trips",
    "take": "A wide summer bag that lists youth among its users.",
    "catch": "No weight is listed, and the height limit is 5 ft 11 in."
  }
];

export const howWeEvaluated = [
  {
    "title": "True youth sizing",
    "description": "We noted which listings describe a bag sized for a child and which are adult length."
  },
  {
    "title": "Temperature figures",
    "description": "We compared the stated ranges and noted the limit figures."
  },
  {
    "title": "Weight a child carries",
    "description": "We checked printed weights, since kids carry a share of the load."
  },
  {
    "title": "Features for kids",
    "description": "We looked at hoods, zippers and anything built for small campers."
  },
  {
    "title": "Value",
    "description": "We compared what each bag costs against what it states."
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
    "subheading": "By Child's Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Young child up to 4 ft",
          "Big Agnes Little Red 20F",
          "Cut for kids up to 4 ft"
        ],
        [
          "Older kid or teen, summer",
          "HTMEYBG 3 Season",
          "50 to 68F comfort range printed"
        ],
        [
          "Teen sharing with an adult",
          "Sportneer Adult and Kids",
          "31.5 by 87 inches for a bigger frame"
        ],
        [
          "Rider or traveler on warm nights",
          "JEAOUIA Warm Weather",
          "59 to 77F design range"
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
          "HTMEYBG 3 Season or Sportneer Adult and Kids"
        ],
        [
          "$20 to $100",
          "JEAOUIA Warm Weather or Big Agnes Little Red 20F"
        ]
      ]
    }
  },
  {
    "subheading": "Kid-Sized vs Adult-Length",
    "cards": [
      {
        "label": "Kid-Sized",
        "text": "The Big Agnes Little Red 20F is cut for young campers and holds heat close. It fits kids up to 4 ft."
      },
      {
        "label": "Adult-Length",
        "text": "The HTMEYBG 3 Season, the Sportneer Adult and Kids and the JEAOUIA Warm Weather run 86 to 87 inches. They last longer as kids grow and waste space on small ones."
      }
    ],
    "note": "Choose the Big Agnes Little Red 20F for kids under 4 ft, and an adult-length pick for teens."
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
          "Lowest cost",
          "HTMEYBG 3 Season"
        ],
        [
          "Mixed family use",
          "Sportneer Adult and Kids"
        ],
        [
          "Best fit for a small child",
          "Big Agnes Little Red 20F"
        ]
      ]
    }
  },
  {
    "subheading": "Family Backpacking Trips Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a stated height limit, a hood and a pad-holding system."
      },
      {
        "label": "In this comparison",
        "text": "The Big Agnes Little Red 20F lists a PadLok system and a 4 ft fit, and the HTMEYBG 3 Season prints comfort and limit ranges."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Big Agnes Little Red 20F if your child is under 4 ft and you want a bag that fits."
      },
      {
        "label": "Save if",
        "text": "Save with the HTMEYBG 3 Season for a teen who will use the bag on warm trips."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Length matters",
    "explanation": "A bag much longer than the child leaves air to heat and a footbox to fold. The Big Agnes is made for kids up to 4 ft, while the others run 86 inches or more. Check the fit height on the page."
  },
  {
    "criterion": "Weight for small backs",
    "explanation": "A child can carry roughly a fifth of their body weight in total. A 3.3 lb bag takes a big share of that. Look for printed weights and add up the pack."
  },
  {
    "criterion": "Warmth and the pad",
    "explanation": "Kids lose heat to the ground faster than they lose it to the air. A pad with a stated R-value matters more than extra fill. Pair the bag with a proper pad."
  },
  {
    "criterion": "Hood and draft collar",
    "explanation": "Heat leaves through the neck, and kids kick off covers. A contoured hood and draft collar help keep warmth in. Check for these on the page."
  },
  {
    "criterion": "Rating you can trust",
    "explanation": "A limit figure is the lowest temperature at which a child survives, not sleeps well. The HTMEYBG prints both ranges. Plan around the comfort figure."
  }
];

export const faq = [
  {
    "q": "What size youth bag does my child need?",
    "a": "Match the bag to the child's height, not age. The Big Agnes Little Red 20F fits up to 4 ft."
  },
  {
    "q": "What do parents get wrong with adult-length bags?",
    "a": "They assume a kid will grow into it. A too-long bag leaves cold air at the feet and tangles zippers."
  },
  {
    "q": "Is the Big Agnes worth it over the cheaper bags?",
    "a": "For young campers, yes, because it actually fits. For teens on summer trips, the HTMEYBG costs less."
  },
  {
    "q": "How do I pack a youth bag?",
    "a": "Stuff it into the sack and let the child help, so they learn where it goes. Keep it in a dry bag."
  },
  {
    "q": "How do I keep a child warm?",
    "a": "Use a pad with a high R-value, add a hat and dry base layers and check them in the night. A warm drink before bed helps."
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
