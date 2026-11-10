export const guideSlug = "best-ultralight-synthetic-sleeping-bags";
export const guideTitle = "2 Best Ultralight Synthetic Sleeping Bags in 2026";
export const metaTitle = "Best Ultralight Synthetic Sleeping Bags in 2026";
export const metaDescription = "Best ultralight synthetic sleeping bags: a 41F polyester-fill mummy and a 30 degree tapered rectangle compared on weight claims, fill and stated ratings.";
export const mainKeyword = "best ultralight synthetic sleeping bags";
export const introParagraphs = [
  "Light synthetic bags are rare because synthetic fill carries weight. The two genuine fits are very different: a mummy built around a 30 percent lighter claim, and a tapered rectangle that prints a real weight.",
  "We ordered them by how well each listing supports its ultralight claim. Treat both as three-season or two-season bags rather than cold-weather gear."
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
    "id": "best-ultralight-synthetic-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Naturehike 41℉ Lightweight Sleeping Bag for Camping Hiking Backpacking",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/318QujwlAIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GQT35Q5V?tag=rvgearlab-amz-20",
    "description": "The Naturehike 41F is a mummy filled with SUNDOUCE Gold Label polyester fibers that the listing compares with 550 fill power down. The page claims it is about 30 percent lighter than other mummy bags with the same rating, and the blue MG120 model lists an ISO comfort of 41F.\n\nAgainst the Sea to Summit Boab it is built for carrying, with zippers on both sides and a wearable layout. It also uses PFAS-free fabrics that are machine washable.\n\nIt suits backpackers who want a cheap synthetic mummy for spring through fall. The side zippers let you reach gear without leaving the bag.",
    "specs": [
      "SUNDOUCE polyester fibers",
      "ISO comfort 41F (blue model)",
      "PFAS-free, machine washable"
    ],
    "pros": [
      "Light-weight claim backed by an ISO comfort figure",
      "Zippers on both sides",
      "PFAS-free machine-washable fabric",
      "Priced below the Boab"
    ],
    "cons": [
      "No weight in pounds printed",
      "Comfort figure suits mild nights only"
    ],
    "bestFor": "Backpackers wanting a light synthetic mummy",
    "take": "The one built for the weight claim, with an ISO comfort figure printed.",
    "catch": "The listing prints no weight in pounds, so the 30 percent claim cannot be checked."
  },
  {
    "id": "best-ultralight-synthetic-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Roomy Pick",
    "name": "Sea to Summit Boab Synthetic 2-Season Sleeping Bag",
    "price": "$134.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21ExpHUSEgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DSVH2GND?tag=rvgearlab-amz-20",
    "description": "The Sea to Summit Boab is a tapered rectangular synthetic bag rated 30 degrees F that measures 85 by 29.9 inches. The Regular size weighs 3.07 lb and a Short size weighs 2.71 lb.\n\nCompared with the Naturehike, it is heavier by a good margin and roomier at the shoulders. A full zipper runs through the footbox to turn it into a blanket, and double sliders adjust venting.\n\nIt suits side sleepers who dislike tapered mummies and want room to shift. The shoulder snap keeps it closed when you roll.",
    "specs": [
      "30 degrees F, 3.07 lb Regular",
      "85 x 29.9 in tapered rectangle",
      "Footbox zipper converts to blanket"
    ],
    "pros": [
      "Roomy tapered cut for side sleeping",
      "Full zipper opens to a blanket",
      "Double sliders adjust ventilation",
      "Draft tube along the zipper"
    ],
    "cons": [
      "Heavier than a trail-weight bag",
      "Rated only 2-season"
    ],
    "bestFor": "Side sleepers who dislike mummies",
    "take": "A roomy rectangle with printed weights that converts to a blanket.",
    "catch": "At 3.07 lb it is not ultralight, and it is labeled a two-season bag."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight claims",
    "description": "We checked which listings print a weight and which print a percentage claim."
  },
  {
    "title": "Fill",
    "description": "We compared fill fibers and the way each listing describes them."
  },
  {
    "title": "Stated rating",
    "description": "We noted which figures are ISO comfort numbers and which are brand labels."
  },
  {
    "title": "Cut",
    "description": "We compared mummy, tapered and rectangular shapes for sleep and carry."
  },
  {
    "title": "Care",
    "description": "We checked washing and shell finishes."
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
    "subheading": "By Sleeper Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Back sleepers who carry far",
          "Naturehike 41F Mummy",
          "Light mummy with ISO comfort 41F"
        ],
        [
          "Side sleepers who roll",
          "Sea to Summit Boab 30",
          "85 by 29.9 inch tapered rectangle"
        ],
        [
          "Wanting a blanket for warm nights",
          "Sea to Summit Boab 30",
          "Full zipper opens through the footbox"
        ],
        [
          "Wanting to reach gear in the night",
          "Naturehike 41F Mummy",
          "Zippers on both sides"
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
          "$60 to $70",
          "Naturehike 41F Mummy"
        ],
        [
          "$130 to $140",
          "Sea to Summit Boab 30"
        ]
      ]
    }
  },
  {
    "subheading": "Mummy vs Tapered Rectangle",
    "cards": [
      {
        "label": "Mummy",
        "text": "The Naturehike 41F Mummy holds heat at the shoulders and cuts weight. It limits movement."
      },
      {
        "label": "Tapered Rectangle",
        "text": "The Sea to Summit Boab 30 gives more room and opens flat. It weighs 3.07 lb."
      }
    ],
    "note": "Choose the Naturehike 41F Mummy for carried miles, and the Sea to Summit Boab 30 for comfort."
  },
  {
    "subheading": "By Rating Preference",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "An ISO comfort figure",
          "Naturehike 41F Mummy"
        ],
        [
          "A printed weight",
          "Sea to Summit Boab 30"
        ],
        [
          "The lighter roll",
          "Naturehike 41F Mummy"
        ]
      ]
    }
  },
  {
    "subheading": "Mild-Weather Backpacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a comfort rating at or below your coldest night."
      },
      {
        "label": "In this comparison",
        "text": "The Naturehike 41F Mummy states ISO comfort 41F for the blue model, and the Sea to Summit Boab 30 states 30 degrees F."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Sea to Summit Boab 30 if you want the roomy cut and blanket conversion."
      },
      {
        "label": "Save if",
        "text": "Save with the Naturehike 41F Mummy if you want the lighter bag at a lower price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "A weight in numbers",
    "explanation": "Relative claims, such as 30 percent lighter, are hard to check. A weight in pounds is easy to compare. The Boab prints 3.07 lb, while the Naturehike prints a percentage."
  },
  {
    "criterion": "ISO figures",
    "explanation": "An ISO or EN comfort figure comes from a standard test and is more reliable than a brand label. The Naturehike names ISO comfort for its blue model. Look for the standard's name on the listing."
  },
  {
    "criterion": "Synthetic trade",
    "explanation": "Synthetic fill weighs more than down for the same warmth, but it tolerates damp. Light synthetic bags save weight by using less of it. Expect milder ratings."
  },
  {
    "criterion": "Shape and sleep",
    "explanation": "A tapered rectangle gives room to turn and loses some heat. A mummy holds heat and limits movement. Choose by how you sleep."
  },
  {
    "criterion": "Fabric finish",
    "explanation": "PFAS-free and bluesign labels describe how the fabric was made. They do not tell you how it performs. Check the listing for a water-repellent finish if you camp in damp."
  }
];

export const faq = [
  {
    "q": "Is synthetic good for ultralight use?",
    "a": "It is heavier than down, but it handles damp. Light synthetic bags cut weight by using less fill and carrying milder ratings."
  },
  {
    "q": "What do buyers get wrong about percentage claims?",
    "a": "They treat 30 percent lighter as a weight. Ask lighter than what, and look for ounces."
  },
  {
    "q": "Is the Sea to Summit Boab worth it over the Naturehike?",
    "a": "If you sleep on your side and want a blanket option, yes. For carry weight, the Naturehike is the better call."
  },
  {
    "q": "How do I wash these bags?",
    "a": "Both are machine washable per their listings. Use a gentle cycle and dry on low."
  },
  {
    "q": "How do I pick between the two models of the Naturehike?",
    "a": "The blue model lists an ISO comfort of 41F. Check the listing for the other model's figure before ordering."
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
