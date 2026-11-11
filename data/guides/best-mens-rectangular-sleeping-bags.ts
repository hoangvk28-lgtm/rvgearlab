export const guideSlug = "best-mens-rectangular-sleeping-bags";
export const guideTitle = "2 Best Mens Rectangular Sleeping Bags in 2026";
export const metaTitle = "Best Mens Rectangular Sleeping Bags in 2026";
export const metaDescription = "Two flannel-lined rectangular sleeping bags for men: a 91 inch REDCAMP for tall campers and a MEREZA rated 32 to 50F with a pillow included.";
export const mainKeyword = "best mens rectangular sleeping bags";
export const introParagraphs = [
  "Rectangular bags suit men who toss and turn, since the cut gives shoulders and knees room that a mummy cannot. Few listings combine a rectangular shape with a men's label, so this guide covers the two that give clear sizes and temperature ranges.",
  "Both are budget flannel bags aimed at car camping and cool nights. One leans on length and the other on a lower printed range, so the choice comes down to height and how cold the nights get."
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
    "id": "best-mens-rectangular-sleeping-bags-1",
    "rank": 1,
    "badge": "Best for Tall Campers",
    "name": "REDCAMP Cotton Flannel Sleeping Bag for Adults",
    "price": "$41.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51s2Z1boayL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N33DYXD?tag=rvgearlab-amz-20",
    "description": "REDCAMP makes this XL bag at 91 x 35 inches for adults up to 6 ft 6 in, with an 80% cotton flannel lining and a 210T polyester ripstop shell. A 2 lb fill option is comfortable at 50F and spans 41 to 59F, and a 3 lb fill is listed for comfort at 41F.\n\nIt is longer and wider than the MEREZA Flannel, and it offers a choice of fill weights so you can match it to your nights. Two-way zippers let it join a second bag, and an internal stuff pocket keeps small items close.\n\nA strong match for tall or broad men who like space. It can also grow into a double. It packs to about 18 x 8 x 8 inches in its sack.",
    "specs": [
      "91 x 35 inch XL cut",
      "Fill options: 2 lb or 3 lb",
      "Fits campers to 6 ft 6 in"
    ],
    "pros": [
      "Fits campers up to 6 ft 6 in",
      "Two-way zippers join a second bag",
      "Offers 2 lb or 3 lb fill",
      "Internal pocket for small items"
    ],
    "cons": [
      "2 lb fill only suits cool weather",
      "Bulkier pack at 18 x 8 x 8 inches"
    ],
    "bestFor": "Tall or broad car campers",
    "take": "The longest, widest bag in this pair, with two fill weights to choose from.",
    "catch": "The 2 lb fill is a cool-weather bag only, so choose the 3 lb for colder nights."
  },
  {
    "id": "best-mens-rectangular-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Printed Range",
    "name": "MEREZA Flannel Sleeping Bag for Adults Mens with Pillow",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TINwVGGVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G62PLVS7?tag=rvgearlab-amz-20",
    "description": "MEREZA rates this 86.6 x 32.3 inch rectangle from 32 to 50F, with a genuine flannel lining and a windproof 210T tear-resistant polyester shell. The box adds a 220 g plush pillow along with a compression sack.\n\nIt reaches lower on the thermometer than the REDCAMP Flannel XL 2 lb option, and it prints one clean range. It is shorter and fits sleepers only up to 6 ft, so tall men should look at the REDCAMP.\n\nBest for campers around 6 ft who want a pillow and a clear range in one purchase. The compression sack keeps the pack small.",
    "specs": [
      "86.6 x 32.3 inch rectangle",
      "32 to 50F printed range",
      "220 g pillow included"
    ],
    "pros": [
      "Prints a 32 to 50F range",
      "Pillow included in the kit",
      "Windproof 210T shell",
      "Compression sack included"
    ],
    "cons": [
      "Fits sleepers only up to 6 ft",
      "Comfort range starts at 50F"
    ],
    "bestFor": "Cool-night camping with pillow",
    "take": "A printed 32 to 50F range with a pillow included.",
    "catch": "It fits campers only up to 6 ft, and its comfort range starts at 50F."
  }
];

export const howWeEvaluated = [
  {
    "title": "Cut and length",
    "description": "Each listing was read for printed length, width and the height it claims to fit."
  },
  {
    "title": "Temperature figures",
    "description": "Ranges and fill weights were compared, since flannel bags are cool-night bags."
  },
  {
    "title": "Lining and shell",
    "description": "Flannel content and shell fabric were noted."
  },
  {
    "title": "Extras",
    "description": "Pillows, zippers and sacks were weighed."
  },
  {
    "title": "Price tier",
    "description": "Both bags are low-cost, so the question is what each adds."
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
    "subheading": "By Camper Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Tall campers up to 6 ft 6 in",
          "REDCAMP Flannel XL",
          "91 x 35 inch cut"
        ],
        [
          "Cool nights near 32F",
          "MEREZA Flannel with Pillow",
          "Prints 32 to 50F"
        ],
        [
          "Couples joining two bags",
          "REDCAMP Flannel XL",
          "Two-way zippers join bags"
        ],
        [
          "Quick kit with a pillow",
          "MEREZA Flannel with Pillow",
          "220 g pillow included"
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
          "$30 to $40",
          "MEREZA Flannel with Pillow"
        ],
        [
          "$40 to $50",
          "REDCAMP Flannel XL"
        ]
      ]
    }
  },
  {
    "subheading": "Longer Cut vs Lower Range",
    "cards": [
      {
        "label": "Longer cut",
        "text": "The REDCAMP Flannel XL gives the length and width, plus a heavier fill option."
      },
      {
        "label": "Lower range",
        "text": "The MEREZA Flannel with Pillow prints a lower range and includes the pillow."
      }
    ],
    "note": "Choose the REDCAMP Flannel XL if you are over 6 ft, and the MEREZA Flannel with Pillow if you are shorter and want the pillow."
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
          "Lower cost, more room",
          "MEREZA Flannel with Pillow"
        ],
        [
          "A little more for length",
          "REDCAMP Flannel XL"
        ]
      ]
    }
  },
  {
    "subheading": "Rectangular-Bag Men Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A printed width of 32 inches or more, a stated fit height and a temperature range."
      },
      {
        "label": "In this comparison",
        "text": "The REDCAMP Flannel XL prints 91 x 35 inches and fits to 6 ft 6 in, and the MEREZA Flannel with Pillow prints 86.6 x 32.3 inches and 32 to 50F."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend a little more on the REDCAMP Flannel XL for length and fill choices."
      },
      {
        "label": "Save if",
        "text": "Save with the MEREZA Flannel with Pillow, which costs less and includes a pillow."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rectangular cut and room",
    "explanation": "A rectangle gives shoulders and knees room that a mummy takes away, at the cost of extra weight and cold air gaps. Widths of 32 to 35 inches are common. Check the printed width, and consider a liner if gaps bother you."
  },
  {
    "criterion": "Length for tall men",
    "explanation": "A bag that fits to 6 ft leaves feet pressed on the end for a taller camper. Add 6 to 8 inches to your height when comparing. Look for a stated fit height on the listing."
  },
  {
    "criterion": "Flannel and temperature",
    "explanation": "Flannel linings feel soft but add bulk and rarely push a bag's range below 32F. Cotton content is also slow to dry. Look for a printed range, and treat flannel bags as cool-night bags."
  },
  {
    "criterion": "Fill weight choices",
    "explanation": "A listing that offers 2 lb or 3 lb fill is two different bags in one. The 3 lb option can be comfortable at 41F where the 2 lb one is comfortable at 50F. Check which fill the price belongs to."
  },
  {
    "criterion": "Zipper and joining",
    "explanation": "Two-way zippers let you vent your feet or open the bag flat. Matching zippers join two bags into a double. Check the zipper side and the listing's joining language."
  }
];

export const faq = [
  {
    "q": "Are rectangular bags warm enough for men in fall?",
    "a": "For cool fall nights above freezing, yes, with a pad. The MEREZA Flannel with Pillow prints 32 to 50F. Both are weaker below freezing."
  },
  {
    "q": "What is the biggest mistake with flannel bags?",
    "a": "Trusting the soft feel as warmth. Flannel adds comfort, not much rating. Check the printed range."
  },
  {
    "q": "Is the REDCAMP worth more than the MEREZA?",
    "a": "For tall men, yes, since it fits to 6 ft 6 in. For campers under 6 ft, the MEREZA Flannel with Pillow is cheaper and includes a pillow."
  },
  {
    "q": "Can I join two bags?",
    "a": "The REDCAMP Flannel XL says its two-way zippers can zip two bags together. Check you have matching left and right zippers. The MEREZA listing does not mention joining."
  },
  {
    "q": "How do I clean flannel bags?",
    "a": "Wash on gentle as the tag allows and dry fully, since cotton holds moisture. Air them after damp trips. Store loose, not compressed."
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
