export const guideSlug = "best-mummy-sleeping-bags-for-cold-weather";
export const guideTitle = "2 Best Mummy Sleeping Bags For Cold Weather in 2026";
export const metaTitle = "Best Mummy Sleeping Bags For Cold Weather (2026)";
export const metaDescription = "Best mummy sleeping bags for cold weather: two synthetic options compared on warmth features, weight and pack size, with plain notes on missing ratings.";
export const mainKeyword = "best mummy sleeping bags for cold weather";
export const introParagraphs = [
  "Cold-weather mummies earn their keep with a hood, a draft tube and enough insulation to hold a pad-supported night near freezing. Few listings pair those features with a stated temperature, and only two budget synthetics came through this search as true mummy fits.",
  "Both rely on synthetic fill and both include a stuff sack, but they approach cold differently, one with a 0 degree class label and one with a measured weight and pack size. Read the details below before assuming either is a winter bag."
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
    "id": "best-mummy-sleeping-bags-for-cold-weather-1",
    "rank": 1,
    "badge": "Best Cold-Class Mummy",
    "name": "Teton Celsius Regular",
    "price": "$84.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/419KkXH3iCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B005EPRM4I?tag=rvgearlab-amz-20",
    "description": "TETON sells the Celsius Regular as a 0 degree class bag with innovative fiber fill, double-layer construction and draft tubes. A soft poly-flannel lining, a half-circle mummy-style hood and a stuff sack with heavy-duty straps complete the kit.\n\nOf the two, it carries the colder label, and double-layer construction keeps the fill from shifting. The flannel lining feels warmer to the touch than the BISINNA's pongee liner.\n\nIt suits adults and kids who camp in cold weather and sleep on an insulated pad. TETON advises fluffing the bag and wearing a stocking cap to hold heat.",
    "specs": [
      "0 degree class, fiber fill",
      "Poly-flannel lining",
      "Draft tubes, stuff sack"
    ],
    "pros": [
      "Colder label than the BISINNA",
      "Draft tubes keep warm air in",
      "Soft flannel lining",
      "Fits adults and kids"
    ],
    "cons": [
      "No weight or pack size printed",
      "Bulky for its warmth class"
    ],
    "bestFor": "Cold-weather camping",
    "take": "A budget cold-class mummy with draft tubes and a flannel lining.",
    "catch": "The listing prints no weight or comfort rating, so treat 0 degrees as a limit label."
  },
  {
    "id": "best-mummy-sleeping-bags-for-cold-weather-2",
    "rank": 2,
    "badge": "Best Documented Numbers",
    "name": "BISINNA Mummy Sleeping Bag for Adults Cold Weather 3-4 Season",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411ihNiFP0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F5Q92K35?tag=rvgearlab-amz-20",
    "description": "The BISINNA is a 7 ft mummy with a 40D nylon shell that carries a durable water-repellent coating, a 210T pongee lining and an adjustable drawstring hood. Total weight is listed at 1.8 kg, and the compression sack squeezes it into a 15.7 by 11 inch bundle with a mesh storage bag on top.\n\nIt prints a weight and a packed size, which the TETON Celsius does not, and a full-length insulated draft tube blocks breezes along the zipper. It costs less than the TETON.\n\nIt suits campers up to 6 ft 1 who want a documented, machine-washable bag. The fill type is not named.",
    "specs": [
      "1.8 kg, packs to 15.7 by 11 in",
      "40D nylon with DWR coating",
      "Full-length draft tube"
    ],
    "pros": [
      "Water-repellent 40D shell",
      "Full-length insulated draft tube",
      "Mesh storage bag included",
      "Machine washable"
    ],
    "cons": [
      "Fill type is not named",
      "1.8 kg is heavy for hiking"
    ],
    "bestFor": "Documented budget bag",
    "take": "A good shell and draft control, with numbers printed on the page.",
    "catch": "The listing does not say whether the fill is synthetic, so check before you buy."
  }
];

export const howWeEvaluated = [
  {
    "title": "Hood and draft tube",
    "description": "We compared hoods and the draft tubes along each zipper."
  },
  {
    "title": "Stated warmth",
    "description": "We noted ratings, labels and which are limit-style figures."
  },
  {
    "title": "Weight and pack size",
    "description": "We recorded printed weights and packed dimensions."
  },
  {
    "title": "Shell and lining",
    "description": "We compared outer fabrics and linings."
  },
  {
    "title": "Value",
    "description": "We weighed price against detail."
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
    "subheading": "By Cold Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Coldest label",
          "TETON Celsius Regular",
          "0 degree class with draft tubes"
        ],
        [
          "Printed weight and size",
          "BISINNA 3-4 Season",
          "1.8 kg and 15.7 by 11 inch pack"
        ],
        [
          "Kids and adults sharing",
          "TETON Celsius Regular",
          "Listed for adults and kids"
        ],
        [
          "Wet-conditions shell",
          "BISINNA 3-4 Season",
          "40D nylon with DWR coating"
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
          "$50 to $60",
          "BISINNA 3-4 Season"
        ],
        [
          "$80 to $90",
          "TETON Celsius Regular"
        ]
      ]
    }
  },
  {
    "subheading": "Flannel Lining vs Pongee Lining",
    "cards": [
      {
        "label": "Flannel",
        "text": "The TETON Celsius Regular uses a poly-flannel lining that feels warm on entry. It dries more slowly."
      },
      {
        "label": "Pongee",
        "text": "The BISINNA 3-4 Season uses a 210T pongee lining that feels slick and dries faster. It feels cooler on first contact."
      }
    ],
    "note": "Choose the TETON Celsius Regular for the cold label and soft lining, and the BISINNA 3-4 Season for printed numbers."
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
          "Lower price",
          "BISINNA 3-4 Season"
        ],
        [
          "Higher price, colder label",
          "TETON Celsius Regular"
        ]
      ]
    }
  },
  {
    "subheading": "Below-Freezing Camps Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a draft tube, a hood and a stated cold rating."
      },
      {
        "label": "In this comparison",
        "text": "The TETON Celsius Regular lists draft tubes and a mummy-style hood on a 0 degree class bag, and the BISINNA 3-4 Season lists a full-length insulated draft tube."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the TETON Celsius Regular if you camp near freezing and want the colder label and flannel lining."
      },
      {
        "label": "Save if",
        "text": "Save with the BISINNA 3-4 Season if you want printed weight and pack size and camp in cool, not freezing, weather."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Hood, tube and collar",
    "explanation": "In cold weather, the head and the zipper line lose the most heat. A cinchable hood and a draft tube seal both. Look for them in the feature list."
  },
  {
    "criterion": "0 degree labels",
    "explanation": "A bag labeled 0 degrees is rarely comfortable at 0. TETON uses the term as a class, and the listing prints no comfort figure. Plan on comfort being 15 to 20 degrees warmer."
  },
  {
    "criterion": "Fill and loft",
    "explanation": "Synthetic fill keeps loft when damp, which helps in cold camps with condensation. The TETON names fiber fill, while the BISINNA names none. Check the fill name."
  },
  {
    "criterion": "Weight and pack size",
    "explanation": "A cold bag is bulky. The BISINNA lists 1.8 kg and 15.7 by 11 inches. Compare against your pack."
  },
  {
    "criterion": "Pad and base layers",
    "explanation": "A sleeping pad often decides the night. Use an insulated pad and wear dry layers. Tips from the TETON listing include a stocking cap and hydration."
  },
  {
    "criterion": "Length and fit",
    "explanation": "The BISINNA fits to 6 ft 1. Too short a bag crushes the insulation at the feet. Check the maximum height."
  }
];

export const faq = [
  {
    "q": "Is a mummy bag good for cold weather?",
    "a": "Yes, because the taper cuts air to heat. Pair it with a pad and a hood."
  },
  {
    "q": "What do cold campers get wrong?",
    "a": "Trusting the label. A 0 degree class label is not a comfort rating."
  },
  {
    "q": "Is the TETON worth it over the BISINNA?",
    "a": "For colder camps, yes. The BISINNA prints weight and pack size at a lower price."
  },
  {
    "q": "How do I stay warm in a mummy?",
    "a": "Cinch the hood, use a pad and wear dry layers. Fluff the bag before use."
  },
  {
    "q": "How do I store it?",
    "a": "Store it loose, not compressed. Dry it fully first."
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
