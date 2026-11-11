export const guideSlug = "best-10-degree-backpacking-sleeping-bags";
export const guideTitle = "2 Best 10 Degree Backpacking Sleeping Bags in 2026";
export const metaTitle = "Best 10 Degree Backpacking Sleeping Bags in 2026";
export const metaDescription = "Two mummy bags for cold backpacking near 10F: the ZOOOBELIVES 10 Degree down bag and the TETON Altos-S 0 degree, with rating tips.";
export const mainKeyword = "best 10 degree backpacking sleeping bags";
export const introParagraphs = [
  "Few listings on Amazon pair a 10 degree label with a backpacking cut, so this guide covers the two that come closest: a down mummy printed 10 degree and a synthetic-class mummy sold as 0 degree. Both are tapered, hooded bags that fit a pack, which is the point of the niche.",
  "We left out bulk packs of emergency bags and heavy cotton rectangles, since neither belongs on a trail. What remains is a short list, so the guide spends its words on how to read a 10F label and which bag suits which kind of trip."
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
    "id": "best-10-degree-backpacking-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ZOOOBELIVES 10 Degree Down Sleeping Bag for Adults",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ghlgseeBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08TQYGG1N?tag=rvgearlab-amz-20",
    "description": "ZOOOBELIVES prints 10 degree on the title and packs 35 oz of down rated 550+ fill power into this four-season mummy. The shell is 20D ripstop nylon with a YKK anti-snag zipper, and the listing gives a contoured hood with a face draft collar.\n\nAgainst the TETON Altos-S, it is the only pick that names its fill, its fill weight and its shell fabric, which makes the warmth claim easy to weigh. The insulated draft tube and 3D foot box are the features that cut heat loss on a cold ridge.\n\nA strong match for backpackers who want a literal 10 degree down bag without paying for an ultralight brand. It packs to about 10 x 7 x 15 inches with the compression straps.",
    "specs": [
      "35 oz of 550+ fill down",
      "20D ripstop, YKK zipper",
      "Packs to 10 x 7 x 15 in"
    ],
    "pros": [
      "Fill weight and shell fabric named",
      "Draft tube plus draft collar",
      "3D foot box for toe room",
      "Down loft packs smaller than fiber"
    ],
    "cons": [
      "Fill power is only 550+",
      "No weight printed on the listing"
    ],
    "bestFor": "Cold three-season backpacking",
    "take": "The one pick that matches the 10 degree label and names its down, shell and fill weight.",
    "catch": "The 10 degree figure is a brand label, and the listing prints no ISO comfort number, so expect real comfort to run warmer."
  },
  {
    "id": "best-10-degree-backpacking-sleeping-bags-2",
    "rank": 2,
    "badge": "Best for Roomy Fit",
    "name": "Teton Altos-S 0 Degree Sleeping Bag for Adults; Lightweight Warm Mummy Sleeping Bag for Camping",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/311MLWC3MPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075JD2WGZ?tag=rvgearlab-amz-20",
    "description": "TETON sells the Altos-S as a 0 degree mummy with a built-out footbox and extra shoulder and leg room. The shell is described as water resistant, and a compression sack comes in the box.\n\nIt trades the named down fill of the ZOOOBELIVES for a roomier cut, so side sleepers and anyone who feels boxed in by a narrow mummy get more space to move. The label sits colder than 10 degrees, which gives a margin on borderline nights.\n\nGood for cold-weather hikers who want hood warmth without a tight squeeze. Keep the compression sack for the trail and store the bag loose at home.",
    "specs": [
      "0 degree label, mummy hood",
      "Built-out footbox",
      "Compression sack included"
    ],
    "pros": [
      "Roomier shoulders and legs",
      "Water-resistant shell",
      "Compression sack included",
      "0 degree label gives headroom"
    ],
    "cons": [
      "No weight or fill listed",
      "Hand wash only"
    ],
    "bestFor": "Restless sleepers on cold hikes",
    "take": "A roomy 0 degree mummy for backpackers who dislike a snug cut.",
    "catch": "The listing prints no weight, fill or packed size, so weigh it yourself before counting it as a lightweight pack item."
  }
];

export const howWeEvaluated = [
  {
    "title": "Rating honesty",
    "description": "We compared how each listing states its temperature figure and noted when it is a brand label rather than an ISO comfort number."
  },
  {
    "title": "Insulation named",
    "description": "We looked for a stated fill type, fill power and fill weight, since those explain the warmth."
  },
  {
    "title": "Pack fit",
    "description": "We checked packed dimensions and whether a compression sack is included."
  },
  {
    "title": "Cut and hood",
    "description": "We weighed hood design, draft tubes and footbox space for cold nights."
  },
  {
    "title": "Scope of the shortlist",
    "description": "We kept only tapered, packable bags and left out bulk emergency packs."
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
          "Cold-weather backpacking with a trusted label",
          "ZOOOBELIVES 10 Degree Down",
          "Names its down, fill weight and shell"
        ],
        [
          "Weekend hike where you want room to roll",
          "TETON Altos-S",
          "Built-out footbox and roomy shoulders"
        ],
        [
          "Weight-sensitive hike, packed size matters",
          "ZOOOBELIVES 10 Degree Down",
          "Packed size is printed on the listing"
        ],
        [
          "Car-to-trailhead camping with space to spare",
          "TETON Altos-S",
          "Size is less critical, comfort is higher"
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
          "$90 to $100",
          "ZOOOBELIVES 10 Degree Down"
        ],
        [
          "$120 to $130",
          "TETON Altos-S"
        ]
      ]
    }
  },
  {
    "subheading": "Down Fill vs Synthetic-Class Fill",
    "cards": [
      {
        "label": "Named down",
        "text": "The ZOOOBELIVES 10 Degree Down lists 35 oz of 550+ fill power down, which compresses well and weighs less for its warmth."
      },
      {
        "label": "Unnamed fill",
        "text": "The TETON Altos-S does not name its fill in the main bullets, so you compare it by label and by feel. It does include a compression sack."
      }
    ],
    "note": "Choose the ZOOOBELIVES 10 Degree Down if you want a documented fill, and the TETON Altos-S if roominess matters more than specs."
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
          "Lower cost of the two, with named down",
          "ZOOOBELIVES 10 Degree Down"
        ],
        [
          "Higher cost for a roomier cut",
          "TETON Altos-S"
        ]
      ]
    }
  },
  {
    "subheading": "A 10F Night on the Trail Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A draft collar, an insulated draft tube and a hood that cinches, plus a printed fill weight."
      },
      {
        "label": "In this comparison",
        "text": "The ZOOOBELIVES 10 Degree Down lists all three and names 35 oz of down, while the TETON Altos-S lists a hood and a footbox but no fill weight."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the TETON Altos-S only if its roomier footbox keeps you from sleeping badly in a tight mummy."
      },
      {
        "label": "Save if",
        "text": "Save with the ZOOOBELIVES 10 Degree Down, which costs less and prints more specs."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What a 10F label means",
    "explanation": "A bag labeled 10 degree is usually a lower-limit figure, the temperature where a sleeper can survive curled up, not where they stay comfortable. Comfort often sits 10 to 20 degrees warmer. Look for an ISO or EN comfort figure in the listing, and if it is absent, plan for a warmer night than the label."
  },
  {
    "criterion": "Down versus synthetic fill",
    "explanation": "Down gives more warmth per ounce and packs smaller, while synthetic keeps more of its insulation when damp. For dry cold, down is the lighter choice, and for wet climates synthetic is more forgiving. Check the listing for the fill type by name rather than a vague word such as warm."
  },
  {
    "criterion": "Fill weight and fill power",
    "explanation": "Fill power measures how much space an ounce of down fills, and fill weight tells you how much down is inside. A bag with 35 oz of 550 fill power down is a different animal from one with 20 oz of 800. Look for both numbers, since a high fill power with little fill still sleeps cold."
  },
  {
    "criterion": "Hood, collar and draft tube",
    "explanation": "Heat leaves a mummy bag mostly through the neck and the zipper line. A drawcord hood, a collar and a draft tube behind the zipper are the three features that block it. Check that the listing names all three, not only the hood."
  },
  {
    "criterion": "Packed size and weight",
    "explanation": "A cold-weather bag is the biggest item in most packs, so its compressed volume sets how large a pack you need. Compare the stated packed dimensions and any printed weight. If neither appears, assume it is heavier than the listing suggests."
  }
];

export const faq = [
  {
    "q": "Is a 10 degree bag warm enough for winter?",
    "a": "A 10 degree label suits deep-autumn and mild winter nights with a good pad and warm layers. For sustained subfreezing camping, choose a colder bag or add a liner. Treat the rating as a limit, not a comfort promise."
  },
  {
    "q": "What mistake do backpackers make with cold bags?",
    "a": "They skip the sleeping pad. Ground cold travels through compressed insulation, so a pad with a high R-value matters as much as the bag. Pair either bag with an insulated pad for real warmth."
  },
  {
    "q": "Is down worth it over synthetic for backpacking?",
    "a": "Usually yes if you hike in dry cold, because down packs smaller and weighs less. Synthetic costs less and handles damp better. The ZOOOBELIVES is the down pick here, and the TETON is the budget-minded alternative."
  },
  {
    "q": "How should I pack a mummy bag on the trail?",
    "a": "Stuff it into the compression sack without rolling, starting from the foot end. Keep it inside a dry bag or pack liner so snow or rain cannot soak it. Do not over-compress it for days at a time."
  },
  {
    "q": "How do I store the bag at home?",
    "a": "Hang it loose or keep it in a large cotton storage sack. Long-term compression flattens the loft and reduces warmth. Wash only as the care label directs, and hand wash the TETON."
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
