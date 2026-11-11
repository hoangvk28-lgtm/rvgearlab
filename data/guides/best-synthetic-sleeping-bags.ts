export const guideSlug = "best-synthetic-sleeping-bags";
export const guideTitle = "2 Best Synthetic Sleeping Bags in 2026";
export const metaTitle = "Best Synthetic Sleeping Bags in 2026";
export const metaDescription = "Best synthetic sleeping bags: two Kelty Cosmic mummies compared on printed weight, fill and temperature label, for campers wanting insulation that handles damp.";
export const mainKeyword = "best synthetic sleeping bags";
export const introParagraphs = [
  "Synthetic fill keeps insulating when it gets damp and costs less than down, which is why many first bags use it. Only two listings in our search fit this need cleanly, and both are Kelty Cosmic mummies at different temperature labels.",
  "Treat this as a short comparison between a 20 degree women's cut and a 40 degree regular cut. Both print real weights, which is the detail that makes them easy to plan around."
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
    "id": "best-synthetic-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Kelty Cosmic Synthetic 20F Degree Mummy Sleeping Bag",
    "price": "$119.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31rusGK3xIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DPNHTWP6?tag=rvgearlab-amz-20",
    "description": "The Kelty Cosmic Synthetic 20F is a women's mummy filled with Cirroloft synthetic, 30.5 oz of it, and it prints a total weight of 2 lb 13 oz. The Regular size stuffs to 16 by 9 inches and suits sleepers around 6 ft, with longer sizes offered.\n\nCompared with the 40 degree Cosmic, it adds about 7 oz of weight and 6.5 oz of fill, and that buys a much colder label. The integrated compression sack and the roomy footbox are shared across the line.\n\nIt suits women and smaller hikers who want one synthetic bag for spring through fall. The stash pocket keeps a headlamp or phone near your head.",
    "specs": [
      "Cirroloft synthetic, 30.5 oz fill",
      "2 lb 13 oz, 16 x 9 in",
      "Women's cut, 20 degree label"
    ],
    "pros": [
      "Fill and total weight both stated",
      "Integrated compression sack",
      "Spacious footbox",
      "Stash pocket for night items"
    ],
    "cons": [
      "Women's cut may not fit all",
      "Priciest synthetic here"
    ],
    "bestFor": "Women and smaller hikers, shoulder season",
    "take": "The warmer of the two with every weight figure printed.",
    "catch": "The 20 degree label is a brand figure and the cut is women's, so fit varies."
  },
  {
    "id": "best-synthetic-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Light Option",
    "name": "Kelty Cosmic Synthetic Fill 40 Degree Backpacking Sleeping Bag with Compression Straps",
    "price": "$77.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/319sFnqrvkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082P5VGGT?tag=rvgearlab-amz-20",
    "description": "The Kelty Cosmic Synthetic 40 prints its total weight at 2 lb 6 oz and its fill at 24 oz, as well as a 15 by 8 inch stuff size when uncompressed. Cirroloft synthetic fill, a compression sack with straps and a roomy footbox are included.\n\nIt is the lighter and smaller of the pair and the lower-priced one. Next to the 20 degree version it gives up cold-night headroom and gains a smaller pack footprint.\n\nIt suits summer hikers and first-time backpackers who want a bag with all its numbers printed. The stash pocket holds small items overnight.",
    "specs": [
      "2 lb 6 oz, 24 oz fill",
      "15 by 8 in stuff size",
      "Cirroloft synthetic, 40 degrees"
    ],
    "pros": [
      "Total weight and stuff size printed",
      "Integrated compression stuff sack",
      "Spacious footbox",
      "Stash pocket for small items"
    ],
    "cons": [
      "Rated 40 degrees, not for cold snaps",
      "Needs a compressed roll for small packs"
    ],
    "bestFor": "Summer hikers and first-timers",
    "take": "Easy to plan around because the page prints weight and stuff size.",
    "catch": "At 40 degrees it suits summer and shoulder seasons only."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fill type",
    "description": "We confirmed which listings state a synthetic fill and which name it."
  },
  {
    "title": "Printed weight",
    "description": "We checked for total weight and fill weight, since both help with pack planning."
  },
  {
    "title": "Temperature label",
    "description": "We compared the stated degree ratings and noted that they are brand figures."
  },
  {
    "title": "Packed size",
    "description": "We compared stuff sizes and the compression sack on each bag."
  },
  {
    "title": "Fit",
    "description": "We looked at the listed sleeper height and the footbox room."
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
          "Spring and fall trips near freezing",
          "Kelty Cosmic 20F Women's",
          "20 degree label with 30.5 oz of fill"
        ],
        [
          "Summer and warm shoulder nights",
          "Kelty Cosmic 40F",
          "40 degree label at 2 lb 6 oz"
        ],
        [
          "Smaller pack, short trips",
          "Kelty Cosmic 40F",
          "15 by 8 inch stuff size"
        ],
        [
          "Sleepers wanting extra room for layers",
          "Kelty Cosmic 20F Women's",
          "Longer sizes offered up to 6 ft 6"
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
          "$70 to $80",
          "Kelty Cosmic 40F"
        ],
        [
          "$110 to $120",
          "Kelty Cosmic 20F Women's"
        ]
      ]
    }
  },
  {
    "subheading": "Women's Cut vs Regular Cut",
    "cards": [
      {
        "label": "Women's Cut",
        "text": "The Kelty Cosmic 20F Women's uses a shape for narrower shoulders and wider hips, with a colder label."
      },
      {
        "label": "Regular Cut",
        "text": "The Kelty Cosmic 40F is built as a general backpacking bag that is lighter and warm enough for summer."
      }
    ],
    "note": "Choose the Kelty Cosmic 20F Women's for three-season use, and the Kelty Cosmic 40F for warm months."
  },
  {
    "subheading": "By Packing Priority",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest weight",
          "Kelty Cosmic 40F"
        ],
        [
          "Most cold margin",
          "Kelty Cosmic 20F Women's"
        ],
        [
          "Smallest stuff size",
          "Kelty Cosmic 40F"
        ]
      ]
    }
  },
  {
    "subheading": "Damp-Weather Hiking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a named synthetic fill and a compression sack to keep the bag dry in a pack."
      },
      {
        "label": "In this comparison",
        "text": "Both Kelty Cosmic bags use Cirroloft synthetic fill, and the Kelty Cosmic 20F Women's carries more of it."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Kelty Cosmic 20F Women's if your nights fall into the 30s and you want a printed fill weight."
      },
      {
        "label": "Save if",
        "text": "Save with the Kelty Cosmic 40F if you hike mainly in summer and want a smaller, lighter roll."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Why synthetic fill",
    "explanation": "Synthetic insulation, such as Kelty's Cirroloft, keeps much of its warmth when damp and dries faster than down. That matters in rain, condensation and tents with a wet floor. Check the listing for the fill name and the fill weight in ounces."
  },
  {
    "criterion": "Temperature label",
    "explanation": "A 20 or 40 degree label is the brand's own figure, so it is not a guarantee at that temperature. Treat it as a guide to the coldest night you might stretch to. Look for a named standard on the listing, and assume comfort sits higher."
  },
  {
    "criterion": "Fill weight against total weight",
    "explanation": "Fill weight shows how much insulation you carry, while total weight includes shell, lining and zippers. Kelty prints both, which is uncommon. Compare ounces of fill when you compare warmth."
  },
  {
    "criterion": "Women's and regular cuts",
    "explanation": "A women's bag is cut narrower at the shoulders and wider at the hips, with extra insulation in the feet. It can feel snug on broad sleepers. Check the cut and the length options on the listing."
  },
  {
    "criterion": "Stuff size",
    "explanation": "Synthetic bags pack larger than down. A 16 by 9 inch stuff size is fine for a 50 liter pack but tight in a small one. Look for the stuff size on the page before you buy."
  }
];

export const faq = [
  {
    "q": "Is synthetic better than down?",
    "a": "It stays warm when damp and costs less, but it packs larger and weighs more for the same warmth. Both Kelty Cosmic bags show that trade clearly."
  },
  {
    "q": "What is a common mistake with temperature labels?",
    "a": "Reading the number as a comfort rating. Kelty's 20 and 40 degree figures are brand labels, so add a liner or layers near the limit."
  },
  {
    "q": "Is the Kelty Cosmic 20F worth it over the 40F?",
    "a": "If you camp near freezing, yes, the extra fill is the point. For summer only, the 40F is lighter and smaller."
  },
  {
    "q": "How should I pack a synthetic bag?",
    "a": "Use the compression sack with straps and cinch evenly. At home, hang it or store it loose so the fill keeps its loft."
  },
  {
    "q": "How do I care for a synthetic bag?",
    "a": "Spot clean small marks and wash it only when needed, following the tag. Dry it fully before it goes back in its sack."
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
