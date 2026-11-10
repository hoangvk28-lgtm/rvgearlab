export const guideSlug = "best-10-degree-rectangular-sleeping-bags";
export const guideTitle = "3 Best 10 Degree Rectangular Sleeping Bags in 2026";
export const metaTitle = "Best 10 Degree Rectangular Sleeping Bags in 2026";
export const metaDescription = "Three roomy cold-weather sleeping bags labeled 0F to -35F for campers near 10 degrees: PO PO BEAR, RIOYALO and TETON Deer Hunter.";
export const mainKeyword = "best 10 degree rectangular sleeping bags";
export const introParagraphs = [
  "No rectangular bag on Amazon prints a 10 degree label, so this guide gathers roomy cold-weather bags labeled 0F or colder. Only the PO PO BEAR listing uses the word rectangular, and the other two are picked for their wide, non-tapered dimensions and hood design.",
  "Few listings target this exact need, which is why the list has three picks. We compared size, insulation and what each listing says about warmth, so you can see the difference between a budget bag and a canvas workhorse."
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
    "id": "best-10-degree-rectangular-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "PO PO BEAR 0 Degree Sleeping Bag for Adults",
    "price": "$63.74",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31HxfehxbAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DJQDMT5Z?tag=rvgearlab-amz-20",
    "description": "PO PO BEAR calls this a 0 degree bag in a wide rectangular shape that measures 84 x 40 inches. The listing mentions a soft flannel lining, a compression bag, machine washing, and use in RVs and truck sleeper cabs.\n\nIt is the only pick here whose listing spells out the rectangular design, with more legroom than the narrow mummy bags. Against the RIOYALO, it is wider and longer, and neither prints a fill weight.\n\nA good match for big and tall campers, truck drivers and RV travelers who want space more than low packed weight. Throw it in the wash after a muddy trip.",
    "specs": [
      "84 x 40 inch rectangle",
      "Soft flannel lining",
      "Machine washable, compression bag"
    ],
    "pros": [
      "Wide rectangular cut for roomy sleep",
      "Soft flannel lining",
      "Machine washable",
      "Fits RV and truck cab use"
    ],
    "cons": [
      "No temperature rating printed",
      "No fill type named"
    ],
    "bestFor": "Big and tall sleepers",
    "take": "A wide, washable 0 degree rectangle for tall campers and travelers.",
    "catch": "The listing prints no comfort rating or fill type, so the 0 degree label cannot be checked."
  },
  {
    "id": "best-10-degree-rectangular-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Budget",
    "name": "RIOYALO 0 Degree Winter Sleeping Bags for Adults",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JkMSqFwtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075HGJ54K?tag=rvgearlab-amz-20",
    "description": "RIOYALO fills this 0 degree bag with 450GSM microfiber and wraps it in a 210T ripstop shell with a 190T pongee lining. It measures about 74.8 x 30.7 inches, fits people up to 6 ft 10 in, and packs to 15.6 inches tall.\n\nIt costs the least here and adds a wind buffer along the zipper and a grosgrain ribbon to stop snags. Against the PO PO BEAR it is narrower, so the rectangular label is an inference from its straight dimensions rather than a printed claim.\n\nPick it for campers who want a cold-weather label on a tight budget. Treat it as a short-trip bag.",
    "specs": [
      "450GSM microfiber fill",
      "74.8 x 30.7 inch cut",
      "Wind buffer, compression sack"
    ],
    "pros": [
      "Lowest price of the three",
      "Wind buffer behind the zipper",
      "Ripstop shell, anti-pinch ribbon",
      "Fits up to 6 ft 10 in"
    ],
    "cons": [
      "5 lb weight is heavy",
      "Listing does not name the cut"
    ],
    "bestFor": "Budget cold-weather camping",
    "take": "The lowest-cost bag here, with a 0 degree label and a wind buffer.",
    "catch": "At 5 lb it suits short trips, and the listing does not call the shape rectangular."
  },
  {
    "id": "best-10-degree-rectangular-sleeping-bags-3",
    "rank": 3,
    "badge": "Best for Extreme Cold",
    "name": "Teton -35F Degree Deer Hunter Sleeping Bag. Warm and Comfortable Camping Sleeping Bags",
    "price": "$179.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31yoKovYwuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00E9SUXXI?tag=rvgearlab-amz-20",
    "description": "TETON builds the Deer Hunter with a Teton Tough canvas shell, double-layer construction and innovative fiber fill, and the title gives a -35F label. The lining is soft poly-flannel, and the hood is a half-circle design.\n\nIt is the only canvas bag here and the only one labeled far below 0, which puts it in a different class from the PO PO BEAR and RIOYALO. The listing does not name the shape, while the roomy canvas build is closer to a rectangle than a tapered mummy.\n\nA fit for hunters and winter campers who need a rated margin and a tough shell. It is the priciest of the three.",
    "specs": [
      "-35F label, canvas shell",
      "Double-layer fiber fill",
      "Poly-flannel lining, half-circle hood"
    ],
    "pros": [
      "Tough canvas shell",
      "Label far below 10F",
      "Double-layer construction",
      "Soft poly-flannel lining"
    ],
    "cons": [
      "Priciest of the three",
      "Listing prints no weight or shape"
    ],
    "bestFor": "Hunters and winter camps",
    "take": "A canvas bag with a -35F label for the coldest nights.",
    "catch": "The -35F label is a brand figure, and the listing prints no weight, so expect a heavy bag."
  }
];

export const howWeEvaluated = [
  {
    "title": "Rating labels",
    "description": "We compared each label with 10F and noted bags labeled far colder."
  },
  {
    "title": "Cut and room",
    "description": "We checked stated dimensions and whether the listing names a rectangular cut."
  },
  {
    "title": "Insulation",
    "description": "We noted any fill type, fill weight and lining material."
  },
  {
    "title": "Weight and pack",
    "description": "We looked at printed weight and packed size."
  },
  {
    "title": "Honest scope",
    "description": "We said plainly when a listing leaves the shape or fill unstated."
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
    "subheading": "By Sleeper",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Tall sleeper, truck or RV bed",
          "PO PO BEAR Big and Tall",
          "84 x 40 inch rectangle"
        ],
        [
          "Tight budget, short cold trips",
          "RIOYALO 0 Degree",
          "Lowest price of the three"
        ],
        [
          "Hunting camp in deep cold",
          "TETON Deer Hunter -35F",
          "Canvas shell and -35F label"
        ],
        [
          "Sleepers up to 6 ft 10 in",
          "RIOYALO 0 Degree",
          "Listing states the fit height"
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
          "$40 to $50",
          "RIOYALO 0 Degree"
        ],
        [
          "$60 to $70",
          "PO PO BEAR Big and Tall"
        ],
        [
          "$170 to $180",
          "TETON Deer Hunter -35F"
        ]
      ]
    }
  },
  {
    "subheading": "Canvas Shell vs Polyester Shell",
    "cards": [
      {
        "label": "Canvas",
        "text": "The TETON Deer Hunter -35F uses a canvas shell that resists snags and sparks but adds weight."
      },
      {
        "label": "Polyester",
        "text": "The PO PO BEAR Big and Tall and RIOYALO 0 Degree use lighter shells and machine wash easily."
      }
    ],
    "note": "Choose the PO PO BEAR Big and Tall for general use and the TETON Deer Hunter -35F for hunting camps."
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
          "Lowest price",
          "RIOYALO 0 Degree"
        ],
        [
          "Mid price, widest cut",
          "PO PO BEAR Big and Tall"
        ],
        [
          "Highest price, canvas",
          "TETON Deer Hunter -35F"
        ]
      ]
    }
  },
  {
    "subheading": "A 10F Night in a Roomy Bag Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated width of 36 inches or more, a draft control feature and a printed label."
      },
      {
        "label": "In this comparison",
        "text": "The PO PO BEAR Big and Tall lists 40 inches of width, while the RIOYALO 0 Degree lists a wind buffer and a 0 degree label."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the TETON Deer Hunter -35F when nights run far below 10F."
      },
      {
        "label": "Save if",
        "text": "Save with the RIOYALO 0 Degree or PO PO BEAR Big and Tall when you camp near 10F."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rectangular warmth penalty",
    "explanation": "A rectangular bag has more empty space around the body, so it needs more insulation for the same warmth. A 0 degree rectangle can feel cooler than a 0 degree mummy. Add a liner or close the hood to cut the extra air."
  },
  {
    "criterion": "Width and length",
    "explanation": "Width is the number that makes a rectangle comfortable. Forty inches suits big and tall sleepers, while 30 inches is closer to a mummy. Check both dimensions in the listing."
  },
  {
    "criterion": "Fill and lining",
    "explanation": "Fill gives loft, and lining gives touch comfort. Flannel feels warm at first but dries slowly if damp. Look for the fill weight in grams per square meter if the listing prints it."
  },
  {
    "criterion": "Draft control",
    "explanation": "A wind buffer or draft tube behind the zipper stops heat loss on cold nights. A hood with a drawcord closes the top. Check that both are named."
  },
  {
    "criterion": "Label vs comfort",
    "explanation": "A label such as 0 degree or -35F is usually a limit, not comfort. Treat comfort as 20 to 30 degrees warmer. Look for an ISO or EN figure in the listing."
  }
];

export const faq = [
  {
    "q": "Is a 0 degree rectangle warm enough at 10F?",
    "a": "With a pad and layers, usually yes, though comfort runs warmer than the label. A rectangle leaves more air, so add a liner. Treat 10F as the edge."
  },
  {
    "q": "What mistake do buyers make with rectangular bags?",
    "a": "They assume width equals warmth. Extra room also means extra air to heat. Use a hood and a liner."
  },
  {
    "q": "Is canvas worth it over polyester?",
    "a": "Canvas lasts longer around hunting gear and sparks, but it weighs more and dries slowly. Choose it for base camps. For general camping, polyester is easier."
  },
  {
    "q": "How do I set up a rectangular bag on a pad?",
    "a": "Lay the bag over a pad of equal width, and zip it up to the chin. A wide pad keeps your shoulders off the cold floor. Check that bag and pad widths match."
  },
  {
    "q": "How do I store the bag between trips?",
    "a": "Hang it or store it loose in a large sack. Compression for months flattens loft. Dry it fully before storage."
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
