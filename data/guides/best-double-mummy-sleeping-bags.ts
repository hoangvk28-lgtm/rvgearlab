export const guideSlug = "best-double-mummy-sleeping-bags";
export const guideTitle = "2 Best Double Mummy Sleeping Bags in 2026";
export const metaTitle = "Best Double Mummy Sleeping Bags in 2026";
export const metaDescription = "No true tapered double mummy exists on Amazon, so this guide covers the closest two-person bags: the hooded Kelty Doublewide 20F and the AGEMORE flannel double.";
export const mainKeyword = "best double mummy sleeping bags";
export const introParagraphs = [
  "Mummy bags taper to save heat, and the listings for two-person bags are almost all roomy rectangles. No two-person bag on Amazon is plainly sold as a tapered mummy, so this guide covers the two closest: the Kelty Tru.Comfort Doublewide with an oversized hood, and the AGEMORE flannel double that splits into singles.",
  "Neither bag is a mummy in the strict sense, and the guide says so in each entry. If you want a tapered cut, two single mummy bags zipped side by side may serve better than either of these."
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
    "id": "best-double-mummy-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Kelty Tru.Comfort Doublewide 2 Person Double Sleeping Bag 20F",
    "price": "$219.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41FWd4s1M3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BRQQPTNS?tag=rvgearlab-20",
    "description": "Kelty's Tru.Comfort Doublewide is a 20F synthetic double with Cloudloft insulation, an oversized hood, two built-in blankets, independent ventilation and a zip-off top layer. Shared shoulder room runs 64 inches across, and the bag is 84 inches end to end.\n\nCompared with the AGEMORE Flannel Double, it is far colder-rated and gives each sleeper control over venting. Two-way zip foot vents and a hood bring it closer to a mummy's heat control than most doubles.\n\nA strong match for couples and families who camp through three seasons and want the nearest thing to a hooded, heat-controlled double. The fill is compressible and quick-drying.",
    "specs": [
      "20F synthetic double",
      "64 in shoulders, 84 in long",
      "Independent vents, two blankets"
    ],
    "pros": [
      "Each sleeper controls ventilation",
      "Zip-off top layer for warm nights",
      "Two built-in blankets",
      "Quick-drying synthetic fill"
    ],
    "cons": [
      "Highest price here",
      "Only 84 inches long"
    ],
    "bestFor": "Three-season couples and families",
    "take": "A 20F double with a big hood, independent vents and removable top layer.",
    "catch": "No weight is printed, and it is the priciest pick, so check the 84 inch length if either of you is tall."
  },
  {
    "id": "best-double-mummy-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Budget Pick",
    "name": "AGEMORE Cotton Flannel Double Sleeping Bag",
    "price": "$66.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51jFot28IYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F43QK29X?tag=rvgearlab-20",
    "description": "AGEMORE lines this double with brushed flannel cotton under a 210T water-resistant polyester shell and states a 41 to 59F design range. Zippers on both sides let it work as one extra-large bag or two singles.\n\nIt costs far less than the Kelty Doublewide 20F and splits into two bags that you can use separately, which suits couples who may want tapered singles later. The listing says it compresses tightly for packing and puffs up in use.\n\nA fit for couples who camp in mild spring and fall weather and want a flexible, budget two-person bag. The flannel feels soft against the skin.",
    "specs": [
      "41 to 59F design range",
      "210T shell, flannel lining",
      "Splits into two singles"
    ],
    "pros": [
      "Soft flannel lining",
      "Water-resistant polyester shell",
      "Splits into two single bags",
      "Compresses into a carry bag"
    ],
    "cons": [
      "Range starts at 41F",
      "No hood shaping"
    ],
    "bestFor": "Mild-weather couples",
    "take": "A soft flannel double that splits into two singles at a modest price.",
    "catch": "The 41F low end limits it to mild weather, and it has no hood design."
  }
];

export const howWeEvaluated = [
  {
    "title": "Shape",
    "description": "We checked whether any double listing is plainly sold as a tapered mummy."
  },
  {
    "title": "Heat control",
    "description": "We looked at hoods, vents and layers that mimic mummy heat control."
  },
  {
    "title": "Rating",
    "description": "We compared stated ratings and ranges."
  },
  {
    "title": "Splitting",
    "description": "We noted which bags split into singles."
  },
  {
    "title": "Price",
    "description": "We compared cost."
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
          "Spring through fall, cooler nights",
          "Kelty Doublewide 20F",
          "20F rating"
        ],
        [
          "Mild weather, budget",
          "AGEMORE Flannel Double",
          "41 to 59F range"
        ],
        [
          "Want separate tapered bags later",
          "AGEMORE Flannel Double",
          "Splits into two singles"
        ],
        [
          "Couples who run hot or cold",
          "Kelty Doublewide 20F",
          "Independent vents"
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
          "AGEMORE Flannel Double"
        ],
        [
          "$210 to $220",
          "Kelty Doublewide 20F"
        ]
      ]
    }
  },
  {
    "subheading": "Hooded Double vs Splitting Double",
    "cards": [
      {
        "label": "Hooded",
        "text": "The Kelty Doublewide 20F has an oversized hood and independent vents."
      },
      {
        "label": "Splitting",
        "text": "The AGEMORE Flannel Double zips into two singles for solo use."
      }
    ],
    "note": "Choose the Kelty Doublewide 20F for cooler nights and the AGEMORE Flannel Double for mild ones."
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
          "Around 66 dollars",
          "AGEMORE Flannel Double"
        ],
        [
          "Around 220 dollars",
          "Kelty Doublewide 20F"
        ]
      ]
    }
  },
  {
    "subheading": "Couples Who Want Heat Control Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Independent vents, a hood and a removable top layer."
      },
      {
        "label": "In this comparison",
        "text": "The Kelty Doublewide 20F lists independent ventilation, a hood and a zip-off top layer, which the AGEMORE Flannel Double does not."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Kelty Doublewide 20F if you camp near 20F and want each sleeper to control heat."
      },
      {
        "label": "Save if",
        "text": "Save with the AGEMORE Flannel Double for mild nights and a lower budget."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Why double mummies are rare",
    "explanation": "A tapered shape works for one body. For two, the taper makes the bag cramped and tricky to zip. Makers sell wide rectangles instead. Expect hooded doubles, not true mummies."
  },
  {
    "criterion": "Heat control in a double",
    "explanation": "Independent vents, a hood and a draft tube help two sleepers manage heat. These features offset some of the lost taper. Check the listing for each by name."
  },
  {
    "criterion": "Two singles as an alternative",
    "explanation": "Two mummy bags with matching zippers can be joined. That gives a tapered cut for each sleeper. Check zipper sides and sizes before you buy."
  },
  {
    "criterion": "Rating and range",
    "explanation": "A 20F rating is a limit, and a 41 to 59F design range is a comfort-style number. They describe different nights. Check which one the listing prints."
  },
  {
    "criterion": "Length and width",
    "explanation": "A double should be at least 84 inches long and 59 inches wide. Tall sleepers need more. Compare printed sizes."
  }
];

export const faq = [
  {
    "q": "Is there a true double mummy bag?",
    "a": "None of the listings checked is plainly sold as one. The Kelty Doublewide 20F is the closest, with a large hood. Two zipped single mummies are another option."
  },
  {
    "q": "What mistake do couples make?",
    "a": "They buy by the word double. Shape and rating matter more. A 41F range is not a cold-weather rating."
  },
  {
    "q": "Is the Kelty worth over the AGEMORE?",
    "a": "If you camp near freezing, yes. For mild nights, the AGEMORE Flannel Double is cheaper. The Kelty also gives each sleeper vent control."
  },
  {
    "q": "How do I set up a double bag?",
    "a": "Lay it over a wide pad or two pads strapped together. Adjust vents to taste. Keep the top layer on cool nights."
  },
  {
    "q": "How do I care for it?",
    "a": "Check the tag, wash gently and dry fully. Store loose. Do not leave it compressed."
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
