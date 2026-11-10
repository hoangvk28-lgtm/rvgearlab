export const guideSlug = "best-womens-backpacking-sleeping-bags";
export const guideTitle = "3 Best Womens Backpacking Sleeping Bags in 2026";
export const metaTitle = "Best Womens Backpacking Sleeping Bags in 2026";
export const metaDescription = "Best women's backpacking sleeping bags: a true women's synthetic mummy and two unisex bags with women's-friendly ratings, compared on warmth, weight and fit.";
export const mainKeyword = "best womens backpacking sleeping bags";
export const introParagraphs = [
  "Only one listing in this search is a genuine women's cut, the Marmot Trestles. The other two are unisex bags whose pages mention women, so we flag where the fit claim is thin.",
  "We ordered the three by how well each page documents warmth, weight and fit. If you sleep cold, the comfort numbers matter more than the label on the stuff sack."
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
    "id": "best-womens-backpacking-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Marmot Women’s Trestles 15° Sleeping Bag",
    "price": "$149.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31uYJysgEgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B06WGSNZ66?tag=rvgearlab-amz-20",
    "description": "The Marmot Women's Trestles is a 15 degree synthetic bag insulated with SpiraFil high-loft fiber and finished with a water-resistant shell. It has an anatomical 3D footbox, wave construction on top and blanket construction below, and a locking YKK two-way zipper.\n\nIt is the only bag here designed for a women's body, and it carries a much colder label than the KANYAK or the JEAOUIA. The compression stuff sack is included, and the left-zip layout comes in a Long size.\n\nIt suits women who sleep on their side and want real three-season performance from a mountain brand. The footbox gives cold feet room to move.",
    "specs": [
      "15° rated, SpiraFil insulation",
      "Anatomical 3D footbox",
      "Locking YKK two-way zipper"
    ],
    "pros": [
      "Women-specific shaped design",
      "Footbox gives feet space to move",
      "Synthetic fill keeps insulating when damp",
      "Compression stuff sack included"
    ],
    "cons": [
      "Costs far more than the others here",
      "Mummy-style cut limits sprawling"
    ],
    "bestFor": "Women wanting cold-weather performance",
    "take": "The only true women's cut, and the warmest bag here by a wide margin.",
    "catch": "It is the priciest pick and the snuggest cut, so check the fit if you toss around."
  },
  {
    "id": "best-womens-backpacking-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Printed Numbers",
    "name": "KANYAK Water-Resistant Portable Purple Sleeping Bag for Adults Teens and Kids",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41kXZue5u0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09MMX7SBW?tag=rvgearlab-amz-20",
    "description": "The KANYAK measures 86.6 by 32.48 inches, weighs 4 lb and packs to 11 to 14.2 inches. Its page prints a comfort rating of 41F, described as the warmth level a woman would want, and a limit of 32F.\n\nNext to the JEAOUIA, it prints more numbers and offers a splicable design from its side zippers. The foot zipper vents heat, and the 210T shell is anti-tearing polyester.\n\nIt suits hikers who want straight figures and a bag that pairs with a second one. A purple option is available.",
    "specs": [
      "86.6 x 32.48 inch cut",
      "4 lb, compressed 11 to 14 in",
      "Comfort 41F, limit 32F"
    ],
    "pros": [
      "Comfort, limit and weight all printed",
      "Foot zipper for venting",
      "Splices with a second bag",
      "210T anti-tearing shell"
    ],
    "cons": [
      "4 lb is heavy for its warmth",
      "Comfort 41F is not four-season"
    ],
    "bestFor": "Women who want plain numbers",
    "take": "The listing that spells out comfort and limit, with a pairing option.",
    "catch": "At 4 lb and 41F comfort it is heavy for the warmth, and it is unisex rather than women's cut."
  },
  {
    "id": "best-womens-backpacking-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "Sleeping Bags for Adults Women Backpacking Lightweight Waterproof- Summer Weather Sleeping Bag for Girls Warm ",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41LcfXUmlTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B092D68L7B?tag=rvgearlab-amz-20",
    "description": "The JEAOUIA is a 31.5 by 86.6 inch bag that weighs about 3 lb and packs to 7.9 to 14.2 inches. It has a drawstring hood, a foot zipper and a 190T nylon shell with an easy-clean finish.\n\nThe lightest and least expensive of the trio, it sits at the warm end of the list. Compared with the Marmot, it is much simpler and meant for summer backpacking.\n\nIt suits light packers who want a cheap summer bag for warm nights. The foot zipper lets you cool off without leaving the bag.",
    "specs": [
      "About 3 lb, packs to 7.9 in",
      "31.5 x 86.6 inch cut",
      "190T nylon, foot zipper"
    ],
    "pros": [
      "Light enough for backpacking",
      "Foot zipper vents warm nights",
      "Hood drawstring holds in heat",
      "Wipes clean easily"
    ],
    "cons": [
      "Summer rating only",
      "Height limit under 6 ft"
    ],
    "bestFor": "Light packers on warm nights",
    "take": "A cheap and light summer bag with vents and a hood.",
    "catch": "It suits warm weather only, and taller campers will find it short."
  }
];

export const howWeEvaluated = [
  {
    "title": "Women's design",
    "description": "We noted which listings describe a cut made for women and which are unisex."
  },
  {
    "title": "Temperature figures",
    "description": "We compared comfort and limit numbers and marked brand labels."
  },
  {
    "title": "Weight and pack size",
    "description": "We compared printed weights and compressed sizes."
  },
  {
    "title": "Insulation",
    "description": "We looked at fill type and wet-weather behavior."
  },
  {
    "title": "Fit",
    "description": "We compared lengths, widths and the footbox design."
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
    "subheading": "By Season",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Spring through fall, down to freezing",
          "Marmot Trestles 15F",
          "15 degree label with SpiraFil insulation"
        ],
        [
          "Cool nights near 41F",
          "KANYAK 3-4 Season",
          "Comfort 41F and limit 32F printed"
        ],
        [
          "Warm summer trips",
          "JEAOUIA Women Summer",
          "About 3 lb for warm weather"
        ],
        [
          "Pairing with a partner's bag",
          "KANYAK 3-4 Season",
          "Side zippers splice two bags"
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
          "JEAOUIA Women Summer"
        ],
        [
          "$30 to $40",
          "KANYAK 3-4 Season"
        ],
        [
          "$140 to $150",
          "Marmot Trestles 15F"
        ]
      ]
    }
  },
  {
    "subheading": "Women's Cut vs Unisex",
    "cards": [
      {
        "label": "Women's Cut",
        "text": "The Marmot Trestles 15F has a footbox and shaping designed for women, and it costs more."
      },
      {
        "label": "Unisex",
        "text": "The KANYAK 3-4 Season and the JEAOUIA Women Summer are cut for general use. They cost less and fit a wider range."
      }
    ],
    "note": "Choose the Marmot Trestles 15F if fit and cold-night warmth matter, and a unisex pick for warm trips."
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
          "JEAOUIA Women Summer"
        ],
        [
          "Mid-range with printed ratings",
          "KANYAK 3-4 Season"
        ],
        [
          "Spend for warmth and fit",
          "Marmot Trestles 15F"
        ]
      ]
    }
  },
  {
    "subheading": "Side Sleepers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a footbox, a wave or baffle design and space at the hips."
      },
      {
        "label": "In this comparison",
        "text": "The Marmot Trestles 15F lists an anatomical 3D footbox, and the KANYAK 3-4 Season is 32.48 inches wide."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Marmot Trestles 15F if you camp near freezing and want a bag shaped for a woman."
      },
      {
        "label": "Save if",
        "text": "Save with the JEAOUIA Women Summer if your nights stay warm and weight matters."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Women's comfort rating",
    "explanation": "Standard test ratings give a comfort figure for a woman and a limit figure for a man, so the comfort number is the one for most women. The KANYAK explains this on its page. Read the comfort figure first."
  },
  {
    "criterion": "Women's cut",
    "explanation": "A women's bag is narrower at the shoulders, wider at the hips and extra insulated at the feet. The Marmot Trestles lists an anatomical footbox. Check the listing for the word women's and the cut details."
  },
  {
    "criterion": "Warm feet",
    "explanation": "Cold feet ruin a night, and a roomy footbox gives them space to stay warm. The Marmot's 3D footbox is built for this. Look at the footbox description."
  },
  {
    "criterion": "Weight against warmth",
    "explanation": "A 4 lb bag like the KANYAK carries more fabric than warmth. The Marmot is warmer for similar weight class. Compare printed weight with the temperature label."
  },
  {
    "criterion": "Zipper and venting",
    "explanation": "Foot zippers let you cool off at night without leaving the bag. They add small weight and give flexibility. Check the zipper list."
  }
];

export const faq = [
  {
    "q": "Do women need a women's sleeping bag?",
    "a": "Not always, but women sleep colder on average and a women's cut adds insulation at the feet and hips. The Marmot Trestles is the only true women's cut here."
  },
  {
    "q": "What do buyers get wrong about the KANYAK?",
    "a": "They read 3-4 season as winter. Its comfort figure is 41F, so it is a cool-weather bag."
  },
  {
    "q": "Is the Marmot Trestles worth it over the others?",
    "a": "For cold nights and a designed fit, yes. For summer only, the JEAOUIA is lighter and cheaper."
  },
  {
    "q": "How do I use a foot zipper?",
    "a": "Open it to vent heat on warm nights and close it as it cools. It also lets you stick a foot out without lifting the whole bag."
  },
  {
    "q": "How do I care for a synthetic bag?",
    "a": "Spot clean and wash only when needed, following the tag. Dry it fully before packing."
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
