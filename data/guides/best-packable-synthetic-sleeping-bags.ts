export const guideSlug = "best-packable-synthetic-sleeping-bags";
export const guideTitle = "3 Best Packable Synthetic Sleeping Bags in 2026";
export const metaTitle = "Best Packable Synthetic Sleeping Bags in 2026";
export const metaDescription = "Best packable synthetic sleeping bags compared on stuffed size, weight and rating, for travelers and hikers short on pack space.";
export const mainKeyword = "best packable synthetic sleeping bags";
export const introParagraphs = [
  "Packable is a volume question before it is a weight question, and synthetic bags are bulkier than down by nature. The three bags here are the ones whose listings give a real stuffed size or a compression system, so you can check them against your pack.",
  "All three are three-season bags with ratings from 40F up, and none is meant for winter. Few synthetic listings print a stuffed dimension, which is why the list is short."
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
    "id": "best-packable-synthetic-sleeping-bags-1",
    "rank": 1,
    "badge": "Smallest Stuffed Size",
    "name": "Kelty Rambler 50 Degree Synthetic Sleeping Bag",
    "price": "$69.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21xOwMW+c8S._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082P5Y6SZ?tag=rvgearlab-20",
    "description": "The Kelty Rambler 50 lists a stuffed size of 7 by 11 inches, a total weight of 2 lb 12 oz and an 11.3 oz fill of Cloudloft synthetic insulation. It is a semi-rectangular 50F bag for sleepers to 6 ft, with a J-shaped zipper, a 260T polyester shell and liner, and compression straps.\n\nIts stuffed bundle is shorter than the Kelty Cosmic's 15 by 8 inch figure, and the semi-rectangular cut is roomier than a mummy. The zipper opens fully into a two-person blanket.\n\nIt suits summer campers and travelers who want a small stuffed size and a roomy cut. The J zipper lets a foot stick out.",
    "specs": [
      "Stuffed 7 by 11 in, 2 lb 12 oz",
      "11.3 oz Cloudloft fill, 50F",
      "Semi-rectangular, J zip"
    ],
    "pros": [
      "Printed stuffed size",
      "Roomier than a mummy",
      "Opens into a two-person blanket",
      "Compression straps included"
    ],
    "cons": [
      "Rated 50 degrees only",
      "Regular size only, fits to 6 ft"
    ],
    "bestFor": "Summer travel and cowboy camping",
    "take": "The smallest listed bundle, in a roomy semi-rectangular cut.",
    "catch": "At a 50 degree limit it is for warm nights only."
  },
  {
    "id": "best-packable-synthetic-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Colder Mummy",
    "name": "Kelty Cosmic Synthetic Fill 40 Degree Backpacking Sleeping Bag with Compression Straps",
    "price": "$77.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/319sFnqrvkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082P5VGGT?tag=rvgearlab-20",
    "description": "Kelty gives the Cosmic Synthetic 40 a 2 lb 6 oz total weight, 24 oz of Cirroloft fill and an uncompressed stuff size of 15 by 8 inches. An integrated compression stuff sack with straps shrinks it further.\n\nIt is the warmest of the three at 40F and the only mummy, and it packs larger than the Rambler's printed figure before compression. Against the ECOOPRO it holds heat better.\n\nIt suits packers who need a real mummy for shoulder-season trips. A spacious footbox and a stash pocket add comfort.",
    "specs": [
      "2 lb 6 oz, 24 oz fill",
      "15 by 8 in stuff size",
      "Integrated compression sack"
    ],
    "pros": [
      "Weight and stuff size printed",
      "Integrated compression sack",
      "Spacious footbox",
      "Stash pocket for small items"
    ],
    "cons": [
      "Rated 40 degrees, not for cold snaps",
      "Bigger uncompressed than the Rambler"
    ],
    "bestFor": "Shoulder-season hikers",
    "take": "The packable choice when nights drop toward 40F.",
    "catch": "It needs compressing to match the others' small bundles."
  },
  {
    "id": "best-packable-synthetic-sleeping-bags-3",
    "rank": 3,
    "badge": "Lightest Packable",
    "name": "ECOOPRO Warm Weather Sleeping Bag",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fu3se401L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B011AZ3O9W?tag=rvgearlab-20",
    "description": "The ECOOPRO is an 83 by 30 inch envelope that compresses to 11 inches in height and weighs 1.7 lb. It has a waterproof nylon shell, a polyester lining and a smooth zipper, and it comes with a carrying sack.\n\nIt is the lightest of the three at 1.7 lb. The 55 to 60F range makes it the warmest-weather choice.\n\nIt suits summer travelers who want the lightest synthetic bag. The waterproof shell sheds dew.",
    "specs": [
      "83 by 30 in, 1.7 lb",
      "Compresses to 11 in height",
      "55 to 60F range"
    ],
    "pros": [
      "Weighs 1.7 lb",
      "Waterproof nylon shell",
      "Compresses to 11 inches",
      "Carry sack included"
    ],
    "cons": [
      "Range is only 55 to 60F",
      "Narrow 30 inch width"
    ],
    "bestFor": "Warm-weather travel",
    "take": "The lightest packable bag, for warm nights only.",
    "catch": "Its 55F-plus range makes it a summer-only bag."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stuffed size",
    "description": "We compared printed stuffed dimensions and compression systems."
  },
  {
    "title": "Weight",
    "description": "We recorded printed weights and fill amounts."
  },
  {
    "title": "Temperature range",
    "description": "We read stated ratings and flagged warm-weather limits."
  },
  {
    "title": "Compression",
    "description": "We checked compression sacks and straps."
  },
  {
    "title": "Cut",
    "description": "We compared mummy, semi-rectangular and envelope cuts."
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
    "subheading": "By Packing Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Smallest printed bundle",
          "Kelty Rambler 50",
          "Stuffed 7 by 11 inches"
        ],
        [
          "Lowest weight",
          "ECOOPRO Warm Weather",
          "1.7 lb"
        ],
        [
          "Shoulder-season warmth",
          "Kelty Cosmic 40",
          "40F mummy with compression sack"
        ],
        [
          "Roomy cut in a small pack",
          "Kelty Rambler 50",
          "Semi-rectangular and opens to a blanket"
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
          "ECOOPRO Warm Weather"
        ],
        [
          "$60 to $70",
          "Kelty Rambler 50"
        ],
        [
          "$70 to $80",
          "Kelty Cosmic 40"
        ]
      ]
    }
  },
  {
    "subheading": "Mummy vs Envelope",
    "cards": [
      {
        "label": "Mummy",
        "text": "The Kelty Cosmic 40 tapers and holds heat to 40F. It packs larger unless compressed."
      },
      {
        "label": "Semi-rectangular or envelope",
        "text": "The Kelty Rambler 50 and ECOOPRO Warm Weather open flat and sleep roomy. They are warm-weather bags with small bundles."
      }
    ],
    "note": "Choose the Kelty Cosmic 40 for fall hikes and the Kelty Rambler 50 for summer travel."
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
          "Lowest price",
          "ECOOPRO Warm Weather"
        ],
        [
          "Mid price small bundle",
          "Kelty Rambler 50"
        ],
        [
          "Higher price colder rating",
          "Kelty Cosmic 40"
        ]
      ]
    }
  },
  {
    "subheading": "Travel and Carry-On Packing Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a printed stuffed size and total weight."
      },
      {
        "label": "In this comparison",
        "text": "The Kelty Rambler 50 lists 7 by 11 inches and 2 lb 12 oz, and the ECOOPRO Warm Weather lists 11 inches in height and 1.7 lb."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Kelty Cosmic 40 if nights fall toward 40F and you want a mummy with a compression sack."
      },
      {
        "label": "Save if",
        "text": "Save with the ECOOPRO Warm Weather or Kelty Rambler 50 if you only camp in warm weather."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Stuffed size vs compressed size",
    "explanation": "Stuffed size is how big the bag is when stuffed loose in its sack, and compressed size is after you cinch straps. Listings differ on which they print. The Kelty Rambler lists 7 by 11 inches stuffed while the Kelty Cosmic lists 15 by 8 inches uncompressed."
  },
  {
    "criterion": "Fill weight",
    "explanation": "Fill weight tells you how much insulation is inside. The Rambler lists 11.3 oz and the Cosmic 24 oz. Compare it to the temperature rating to judge value."
  },
  {
    "criterion": "Compression systems",
    "explanation": "Straps squeeze air out and reduce volume. All three picks include a sack, and two list straps. Pack the sack last so you can cinch it tight."
  },
  {
    "criterion": "Rating realism",
    "explanation": "Ratings of 50F and 55F are summer figures. The Cosmic's 40F reaches into fall. Choose by the coldest night on your trip."
  },
  {
    "criterion": "Cut and volume",
    "explanation": "A mummy packs smaller than a rectangle of the same rating. The Rambler is semi-rectangular yet lists a small stuffed size. Compare printed sizes, not shapes."
  },
  {
    "criterion": "Storage between trips",
    "explanation": "Long compression wears synthetic fill. Store the bag loose. Re-fluff it before the next trip."
  }
];

export const faq = [
  {
    "q": "Are synthetic bags packable?",
    "a": "They pack bigger than down, since synthetic fill is bulkier. Even so, the Rambler lists a 7 by 11 inch stuffed size, and compression straps shrink the others."
  },
  {
    "q": "What is the biggest packing mistake?",
    "a": "Comparing uncompressed and compressed figures. Check which one the listing prints."
  },
  {
    "q": "Is the Kelty Cosmic worth it over the Rambler?",
    "a": "For fall trips, yes, for the 40F rating. For summer, the Rambler packs smaller."
  },
  {
    "q": "How do I pack a synthetic bag small?",
    "a": "Stuff it from the foot end and cinch the straps. Then put it at the bottom of the pack."
  },
  {
    "q": "How do I keep it lofty?",
    "a": "Store loose and fluff before use. Avoid long storage compressed."
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
