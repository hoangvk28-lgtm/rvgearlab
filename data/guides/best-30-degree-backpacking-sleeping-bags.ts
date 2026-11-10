export const guideSlug = "best-30-degree-backpacking-sleeping-bags";
export const guideTitle = "2 Best 30 Degree Backpacking Sleeping Bags in 2026";
export const metaTitle = "Best 30 Degree Backpacking Sleeping Bags in 2026";
export const metaDescription = "Two 30F bags for backpacking: the Kelty Galactic Down 30 for packable warmth and the VENTURE 4TH XXL for a budget car-to-trail option.";
export const mainKeyword = "best 30 degree backpacking sleeping bags";
export const introParagraphs = [
  "Two listings fit a 30 degree backpacking brief well enough to rank: a Kelty down bag that is purpose-built for the trail, and a VENTURE 4TH 3-season bag stated for 30 to 70F. They sit at opposite ends of price and pack size.",
  "That makes this guide a straight choice between a lighter, more packable down bag and a roomy synthetic bag that costs far less. We compared fill, weight, packed size and stated range."
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
    "id": "best-30-degree-backpacking-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Kelty Galactic Down 30 Degree Sleeping Bag",
    "price": "$189.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412MHL+E9DL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B096SXWTCP?tag=rvgearlab-20",
    "description": "Kelty fills the Galactic with 21 oz of 550 fill power RDS-traceable down and rates it 30 degrees. The listing gives 2 lb 14 oz, a 15 x 8 inch stuffed size, a fit up to 6 ft and an included stuff sack.\n\nNext to the VENTURE 4TH, it packs much smaller and gives a stated down fill, which is what backpackers pay for. Two-way zippers allow foot venting, a mid-section cinch cord tailors the fit, and two bags zip together into a double.\n\nA reliable choice for trail-focused campers who want a name-brand down bag at a mid price. PFC-free fabrics are a plus for the environmentally minded.",
    "specs": [
      "550FP RDS down, 21 oz fill",
      "2 lb 14 oz, 15 x 8 in",
      "Zips together for two"
    ],
    "pros": [
      "Down packs small for the trail",
      "Two-way zippers vent the feet",
      "Cinch cord tailors the fit",
      "Zips to a second bag"
    ],
    "cons": [
      "Shape is not named",
      "Costs far more than the VENTURE"
    ],
    "bestFor": "Trail-focused backpackers",
    "take": "A packable 30F down bag with printed fill, weight and packed size.",
    "catch": "It costs several times the VENTURE price, and the listing does not name the shape."
  },
  {
    "id": "best-30-degree-backpacking-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Budget Pick",
    "name": "VENTURE 4TH 3-Season XXL Camping Sleeping Bag",
    "price": "$54.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51-jLsd7A7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B081VTZH2F?tag=rvgearlab-20",
    "description": "VENTURE 4TH states a 30 to 70F comfort range for this XXL 3-season bag, which measures 90 x 39 inches. A lifetime replacement guarantee, an included compression sack, a water-resistant polyester shell and anti-snag zippers are all listed.\n\nIt costs a fraction of the Kelty and gives far more room, while packing larger and aiming at camping more than trail weight. The 30F lower end of its range makes it a fit for the brief on mild nights.\n\nA good fit for tall campers on a budget who walk short distances to camp. The compression sack shrinks the bag enough for a short carry.",
    "specs": [
      "30 to 70F stated range",
      "90 x 39 inch XXL cut",
      "Lifetime replacement guarantee"
    ],
    "pros": [
      "Very low price",
      "Lifetime replacement guarantee",
      "Room for tall campers",
      "Machine washable"
    ],
    "cons": [
      "Weight not printed",
      "Bulky for a long hike"
    ],
    "bestFor": "Short walk-in campers",
    "take": "A roomy, low-cost 3-season bag with a 30F lower range.",
    "catch": "No weight is printed, and the bag is large for a long carry."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated range",
    "description": "We used each listing's range or rating near 30F."
  },
  {
    "title": "Pack size",
    "description": "We compared packed dimensions and weight."
  },
  {
    "title": "Fill",
    "description": "We noted fill type and quantity."
  },
  {
    "title": "Fit",
    "description": "We checked fit height and shape."
  },
  {
    "title": "Price gap",
    "description": "We weighed the large gap between the two."
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
          "Multi-day backpacking",
          "Kelty Galactic Down 30",
          "2 lb 14 oz, 15 x 8 in"
        ],
        [
          "Short walk-in sites",
          "VENTURE 4TH 3-Season XXL",
          "90 x 39 inch cut, low price"
        ],
        [
          "Tall camper on a budget",
          "VENTURE 4TH 3-Season XXL",
          "XXL size"
        ],
        [
          "Couple who wants to zip together",
          "Kelty Galactic Down 30",
          "Two bags zip into a double"
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
          "VENTURE 4TH 3-Season XXL"
        ],
        [
          "$180 to $190",
          "Kelty Galactic Down 30"
        ]
      ]
    }
  },
  {
    "subheading": "Down vs Synthetic at 30F",
    "cards": [
      {
        "label": "Down",
        "text": "The Kelty Galactic Down 30 compresses well and weighs less for its warmth."
      },
      {
        "label": "Synthetic",
        "text": "The VENTURE 4TH 3-Season XXL costs less and is more forgiving of damp."
      }
    ],
    "note": "Choose the Kelty Galactic Down 30 if you carry the bag, and the VENTURE for car-adjacent camping."
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
          "Low price",
          "VENTURE 4TH 3-Season XXL"
        ],
        [
          "Mid price, down",
          "Kelty Galactic Down 30"
        ]
      ]
    }
  },
  {
    "subheading": "30F Backpacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed weight, a packed size and a 30F lower end."
      },
      {
        "label": "In this comparison",
        "text": "The Kelty Galactic Down 30 prints 2 lb 14 oz and 15 x 8 inches, while the VENTURE 4TH 3-Season XXL prints a 30 to 70F range."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Kelty Galactic Down 30 if you carry the bag more than a mile."
      },
      {
        "label": "Save if",
        "text": "Save with the VENTURE 4TH 3-Season XXL for short carries."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Down vs synthetic for 30F",
    "explanation": "Down packs smaller for the warmth, which is why backpackers choose it. Synthetic costs less and tolerates damp. For 30F, either works when paired with a pad."
  },
  {
    "criterion": "Packed size",
    "explanation": "A pack has limited space, so compressed volume matters more than width. Compare printed packed dimensions. If none is printed, assume bulk."
  },
  {
    "criterion": "Comfort range vs rating",
    "explanation": "A range such as 30 to 70F tells you the lower end. A single number may be a limit. Look for a range or comfort statement."
  },
  {
    "criterion": "Fit height",
    "explanation": "A bag that is too short leaves your feet pressed against the end and cold. A bag that is too long wastes fill and weight on empty space. Match the stated fit height to your own height before ordering."
  },
  {
    "criterion": "Zip-together options",
    "explanation": "Some bags are sold in left-zip and right-zip versions so a pair can join into a double. That helps couples who split gear between two packs. Check the listing for the word zip together or a side marking."
  }
];

export const faq = [
  {
    "q": "Is a 30F bag enough for backpacking in fall?",
    "a": "For early fall and spring, yes. For late fall, choose a colder bag or add a liner. Pair either bag with an insulated pad."
  },
  {
    "q": "What mistake do backpackers make with a 30F bag?",
    "a": "They choose a wide bag that eats pack space and then carry it a long way. Check the packed size before buying. A bag that fits the pack makes the trip easier."
  },
  {
    "q": "Is the Kelty worth it over the VENTURE?",
    "a": "If you carry the bag more than a short walk, yes, because it packs smaller and names its down. If you camp near the car, the VENTURE saves money and gives more room."
  },
  {
    "q": "How do I pack a down bag?",
    "a": "Stuff it loosely into the sack from the foot end and keep it dry. A pack liner or dry bag protects it from rain. Avoid cranking the compression straps for days."
  },
  {
    "q": "How do I keep warm in a 30F bag?",
    "a": "Use an insulated pad, a hat and dry socks. Close the draft collar and cinch the hood. Eat a snack before bed."
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
