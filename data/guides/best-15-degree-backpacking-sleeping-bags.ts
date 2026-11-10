export const guideSlug = "best-15-degree-backpacking-sleeping-bags";
export const guideTitle = "5 Best 15 Degree Backpacking Sleeping Bags in 2026";
export const metaTitle = "Best 15 Degree Backpacking Sleeping Bags in 2026";
export const metaDescription = "Best 15 degree backpacking sleeping bags compared on stated ratings, fill, packed size and weight for shoulder-season and winter trips.";
export const mainKeyword = "best 15 degree backpacking sleeping bags";
export const introParagraphs = [
  "A 15 degree bag is the all-rounder for three-season trips that sometimes drop below freezing. Few listings state 15 degrees F exactly, so this list includes the closest ratings from 5 to 20 degrees and says which is which.",
  "The comparison weighs stated temperature ratings, fill power and weight, packed size and shape. Two NEMO listings that differ only by width are treated as one product."
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
    "id": "best-15-degree-backpacking-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "NEMO Equipment Disco Down Sleeping Bag",
    "price": "$299.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Bot5lfELL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DK7R8746?tag=rvgearlab-amz-20",
    "description": "The NEMO Disco is a 15 degree F men's down bag filled with 650 FP hydrophobic, PFAS-free, RDS-certified down. Its Thermo Gill vents, Blanket Fold draft collar and spoon shape give extra elbow and knee room.\n\nIt is the only bag here with a true 15 degree F rating, and the multistage vent system extends its comfort range for warm nights. It costs well above every other pick, which buys the hydrophobic down and the vent design.\n\nIt suits backpackers who want a premium down bag with ventilation and side-sleeper room. A Regular Wide size is also available.",
    "specs": [
      "15F men's down bag",
      "650 FP hydrophobic RDS down",
      "Thermo Gill vents"
    ],
    "pros": [
      "True 15F rating in the listing",
      "Thermo Gill vents regulate warmth",
      "Spoon shape adds knee and elbow room",
      "Oversized Blanket Fold collar"
    ],
    "cons": [
      "Highest price in the list",
      "Men's cut, not unisex"
    ],
    "bestFor": "Premium three-season backpacking",
    "take": "The only true 15 degree bag in the list, and the most refined.",
    "catch": "At several times the price of the budget picks, it is a splurge."
  },
  {
    "id": "best-15-degree-backpacking-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Down Value",
    "name": "ZOOOBELIVES 10 Degree Down Sleeping Bag for Adults",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ghlgseeBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08TQYGG1N?tag=rvgearlab-amz-20",
    "description": "The ZOOOBELIVES is a 10 degree F down mummy with 35 oz of 550+ fill power down, a 20D ripstop shell, an insulated draft tube and a 3D foot box. It measures 83 by 31 inches and packs to 10 by 7 by 15 inches.\n\nIt holds more rated warmth than the TETON Trailhead for a modest premium, and it costs far less than the NEMO Disco. Its YKK anti-snag zipper and face draft collar tidy up the fit.\n\nIt suits backpackers who want real down at a low price. Check the 10 degree label as a limit-style class.",
    "specs": [
      "35 oz of 550+ fill down",
      "10F label, 4-season",
      "20D ripstop, 10 x 7 x 15 in"
    ],
    "pros": [
      "35 oz of down at a low price",
      "Insulated draft tube and 3D footbox",
      "Packs to 10 x 7 x 15 inches",
      "YKK anti-snag zipper"
    ],
    "cons": [
      "Fill power is 550+ only",
      "No ISO comfort figure printed"
    ],
    "bestFor": "Budget down for cold trips",
    "take": "A lot of down for the money, with a roomy mummy cut.",
    "catch": "The 10 degree rating is a brand label, so plan on a warmer comfort range."
  },
  {
    "id": "best-15-degree-backpacking-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Colder Rating",
    "name": "Teton Tracker",
    "price": "$165.53",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41F+v0t1fiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00SWE08BW?tag=rvgearlab-amz-20",
    "description": "The TETON Tracker is a 5 degree mummy with microfiber insulation, a hood designed to close gaps around the head, zipper draft tubes and vaulted footboxes. A compression sack with heavy-duty straps is included.\n\nIt carries a colder label than the NEMO or ZOOOBELIVES, and it costs far less than the NEMO. It prints no weight or ISO figure, unlike the NEMO listing.\n\nIt suits backpackers who want a cold-rated bag on a middle budget. It is the heavier, bulkier option next to the down bags.",
    "specs": [
      "5 degree mummy label",
      "Microfiber insulation",
      "Zipper draft tube, vaulted footbox"
    ],
    "pros": [
      "Colder label than the others",
      "Draft tubes keep heat in",
      "Vaulted footbox for toe room",
      "Compression sack included"
    ],
    "cons": [
      "No weight or ISO rating listed",
      "Packed size is not listed"
    ],
    "bestFor": "Colder trips on a mid budget",
    "take": "A colder-rated bag at a fair price, with the standard TETON features.",
    "catch": "The listing prints no weight, so compare it with the down bags yourself."
  },
  {
    "id": "best-15-degree-backpacking-sleeping-bags-4",
    "rank": 4,
    "badge": "Best Budget Mummy",
    "name": "Teton Trailhead",
    "price": "$73.30",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31HtpgF5i4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D47YFZGW?tag=rvgearlab-amz-20",
    "description": "Sold under a 20 degree label, the TETON Trailhead has microfiber insulation, zipper draft tubes, a head-gap-closing hood and a vaulted footbox. A compression sack comes in the box.\n\nIts 20 degree label is the mildest here, and it costs less than half the Tracker. That suits trips that stay above freezing better than the colder-rated bags.\n\nIt suits budget backpackers on three-season trips. Choose the Tracker if you want a colder rating.",
    "specs": [
      "20 degree mummy label",
      "Microfiber insulation",
      "Zipper draft tube"
    ],
    "pros": [
      "Low price for a mummy",
      "Draft tubes keep heat in",
      "Vaulted footbox",
      "Compression sack in the box"
    ],
    "cons": [
      "20 degree label is mildest here",
      "No weight or ISO figures"
    ],
    "bestFor": "Three-season budget hikers",
    "take": "A simple budget mummy for trips above freezing.",
    "catch": "It is the warmest-weather bag here, so it is not a 15 degree pick."
  },
  {
    "id": "best-15-degree-backpacking-sleeping-bags-5",
    "rank": 5,
    "badge": "Best Lowest Price",
    "name": "Bessport Mummy Sleeping Bag",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41kGiiAVfWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07XBJ9C6D?tag=rvgearlab-amz-20",
    "description": "The Bessport is sold as a 3-4 season mummy for 15 to 45 degrees F, with a 210T ripstop polyester shell, a taffeta liner, double SBS zippers and a quilted, insulated footbox. It fits adults 6 ft 1 to 6 ft 6 in.\n\nIt is the cheapest bag in the list, and its title names a 15 to 45 degree F range. It lists shoulder, hip and foot girth of 63, 50.3 and 33 inches, so you can check fit.\n\nIt suits budget hikers who want a washable, water-repellent mummy for cool trips. Treat 15 degrees as the extreme end.",
    "specs": [
      "15 to 45F range in title",
      "210T ripstop shell",
      "Girth 63, 50.3, 33 inches"
    ],
    "pros": [
      "Lowest price in the list",
      "Water-repellent ripstop shell",
      "Girth measurements listed",
      "Double SBS zippers"
    ],
    "cons": [
      "15F is an extreme figure",
      "Fill and weight not stated"
    ],
    "bestFor": "Cool-weather budget trips",
    "take": "The cheapest way to a 15 degree-labeled bag, if you accept the caveat.",
    "catch": "The 15 degree figure is at the extreme end, so comfort is much warmer."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated rating",
    "description": "How close each listing gets to 15 degrees F."
  },
  {
    "title": "Fill",
    "description": "Down weight and fill power or named microfiber."
  },
  {
    "title": "Pack size and weight",
    "description": "Listed dimensions and weights."
  },
  {
    "title": "Fit",
    "description": "Shape, hood and footbox."
  },
  {
    "title": "Price",
    "description": "Cost per degree of stated rating."
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
    "subheading": "By Trip",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Premium three-season trips",
          "NEMO Disco 15 Down",
          "True 15F rating with vents."
        ],
        [
          "Budget down for cold trips",
          "ZOOOBELIVES 10 Degree Down",
          "35 oz of down."
        ],
        [
          "Colder, mid budget",
          "TETON Tracker 5",
          "5 degree label."
        ],
        [
          "Mild trips above freezing",
          "TETON Trailhead 20",
          "20 degree mummy."
        ],
        [
          "Lowest price",
          "Bessport 15-45F Mummy",
          "Named 15 to 45F range."
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
          "$40 to $80",
          "Bessport 15-45F Mummy or TETON Trailhead 20"
        ],
        [
          "$90 to $170",
          "ZOOOBELIVES 10 Degree Down or TETON Tracker 5"
        ],
        [
          "$290 to $300",
          "NEMO Disco 15 Down"
        ]
      ]
    }
  },
  {
    "subheading": "Down vs Microfiber",
    "cards": [
      {
        "label": "Down",
        "text": "Light and compressible. The NEMO Disco 15 Down and ZOOOBELIVES 10 Degree Down use down."
      },
      {
        "label": "Microfiber",
        "text": "Handles damp better. The TETON Tracker 5 and TETON Trailhead 20 use microfiber insulation."
      }
    ],
    "note": "Choose the ZOOOBELIVES 10 Degree Down for dry cold, and the TETON Tracker 5 for wetter trips."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Near $50",
          "Bessport 15-45F Mummy"
        ],
        [
          "Near $75",
          "TETON Trailhead 20"
        ],
        [
          "Near $100 for down",
          "ZOOOBELIVES 10 Degree Down"
        ],
        [
          "Near $165",
          "TETON Tracker 5"
        ],
        [
          "Near $300 and up",
          "NEMO Disco 15 Down"
        ]
      ]
    }
  },
  {
    "subheading": "Shoulder-Season Backpacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated rating near 15F and a way to vent on warm nights."
      },
      {
        "label": "In this comparison",
        "text": "The NEMO Disco 15 Down lists 15F and Thermo Gill vents, and the ZOOOBELIVES 10 Degree Down lists a draft collar and tube."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the NEMO Disco 15 Down for the true 15 degree rating and vents."
      },
      {
        "label": "Save if",
        "text": "Save with the Bessport 15-45F Mummy or TETON Trailhead 20 if your trips stay above freezing."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Extreme versus comfort rating",
    "explanation": "A 15 degree label may be an extreme or limit figure, not a comfort rating. A person sleeps warmly at a higher temperature. Plan for a comfort figure about 10 to 20 degrees above the label unless the listing says otherwise."
  },
  {
    "criterion": "Down versus microfiber",
    "explanation": "Down packs smaller for the warmth, while microfiber copes better with moisture. The ZOOOBELIVES and NEMO listings name down, and the TETON bags name microfiber. Choose by expected wetness and pack size."
  },
  {
    "criterion": "Ventilation for warm nights",
    "explanation": "A 15 degree bag can overheat in a mild shoulder season. The NEMO Disco has Thermo Gill vents with a multistage zipper. Look for vents or two-way zippers."
  },
  {
    "criterion": "Fit and spoon shape",
    "explanation": "A spoon shape gives more elbow and knee room than a tight mummy, which helps side sleepers. The NEMO Disco uses it. Look for girth numbers if listed."
  },
  {
    "criterion": "Pad pairing",
    "explanation": "The ground steals more heat than the air, so a pad with enough R-value matters as much as the bag. A cold-rated bag on a thin pad still feels cold. Match the pad to the bag."
  }
];

export const faq = [
  {
    "q": "Is a 15 degree bag enough for winter?",
    "a": "It suits mild winter nights and shoulder seasons. For hard freezes pick a colder rating such as the TETON Tracker 5. Use a warm pad."
  },
  {
    "q": "What is hydrophobic down?",
    "a": "It is down treated to resist moisture. The NEMO Disco 15 Down lists 650 FP hydrophobic, PFAS-free down. It helps but does not make the bag waterproof."
  },
  {
    "q": "Is the NEMO worth the extra cost?",
    "a": "If you want the vents, the true 15F rating and premium down, yes. For budget, the ZOOOBELIVES 10 Degree Down gives plenty of down."
  },
  {
    "q": "How do I vent a bag on a warm night?",
    "a": "Use the multistage zipper on the NEMO Disco 15 Down, or unzip partway on any two-way zipper. Stick a foot out to cool off."
  },
  {
    "q": "How do I pack a bag for backpacking?",
    "a": "Stuff it into the compression sack from the bottom up rather than rolling it. Use a dry bag inside the pack. Do not store it compressed."
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
