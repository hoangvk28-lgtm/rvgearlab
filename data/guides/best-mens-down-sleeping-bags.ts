export const guideSlug = "best-mens-down-sleeping-bags";
export const guideTitle = "4 Best Mens Down Sleeping Bags in 2026";
export const metaTitle = "Best Mens Down Sleeping Bags in 2026";
export const metaDescription = "Best men's down sleeping bags compared on cut, fill power, printed ratings and length options, for men who want warmth with room in the shoulders.";
export const mainKeyword = "best mens down sleeping bags";
export const introParagraphs = [
  "Men's down bags differ from women's mostly in cut: more length, more shoulder room and less insulation at the hips. Only one listing here is labeled men's, so the rest are chosen for sizing that suits taller or broader men, with lengths and widths stated.",
  "Four down bags are compared, from a 15F men's NEMO to a wide-cut SYWSKW. Two non-down bags in the search results were left out, and several listings print no ISO figure, which is noted below."
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
    "id": "best-mens-down-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Men's Cut",
    "name": "NEMO Equipment Disco Down Sleeping Bag",
    "price": "$299.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Bot5lfELL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DK7R8746?tag=rvgearlab-amz-20",
    "description": "NEMO's Disco Down is a men's 15F bag filled with 650 fill power hydrophobic down that is PFAS-free and RDS certified. Thermo Gill vents, an oversized Blanket Fold collar and a spoon shape add room at the knees and elbows.\n\nIt is the only true men's cut in the group and the only bag with zipper vents for regulating heat. Against the Kelty Cosmic 20 it is shaped for side sleepers, and it costs the most of the four.\n\nIt suits men who sleep on their sides and want a documented 15F rating. The vented zipper helps on mild nights.",
    "specs": [
      "15F men's down bag",
      "650 FP hydrophobic RDS down",
      "Thermo Gill vents"
    ],
    "pros": [
      "True 15F rating in the listing",
      "Thermo Gill vents regulate warmth",
      "Spoon shape adds knee and elbow room",
      "Oversized Blanket Fold collar"
    ],
    "cons": [
      "Highest price in the list",
      "Men's cut, not unisex"
    ],
    "bestFor": "Side-sleeping men",
    "take": "The most refined men's cut, with vents for warmth control.",
    "catch": "At several times the budget picks' price, it is a splurge."
  },
  {
    "id": "best-mens-down-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Verified Ratings",
    "name": "Kelty Cosmic 20 Down Mummy Sleeping Bag for Backpacking",
    "price": "$189.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Ypf-hGnNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSPKCJZK?tag=rvgearlab-amz-20",
    "description": "Kelty's Cosmic 20 pairs 550 fill power traceable down with recycled fabrics finished in PFAS-free water repellent. The listing prints an ISO limit of 21F and an extreme of minus 11F, and the Short, Regular and Long sizes fit sleepers to 5 ft 6, 6 ft or 6 ft 6 respectively.\n\nIts Long size covers men up to 6 ft 6, which the NEMO listing does not spell out. Dual-direction zippers make it easy to vent.\n\nIt suits taller men who want printed ISO figures and a sizing choice. It costs less than the NEMO.",
    "specs": [
      "550FP RDS down",
      "ISO limit 21F, extreme minus 11F",
      "Short, Regular, Long"
    ],
    "pros": [
      "ISO limit and extreme printed",
      "Long size fits to 6 ft 6",
      "PFAS-free recycled fabrics",
      "Dual-direction zippers"
    ],
    "cons": [
      "Lowest fill power here",
      "Costs more than the SYWSKW"
    ],
    "bestFor": "Tall men wanting printed ratings",
    "take": "The best verified limits in the group, in three lengths.",
    "catch": "Lower fill power means more weight for the same loft."
  },
  {
    "id": "best-mens-down-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Cold Documentation",
    "name": "Naturehike 0 Degree Ultralight Down Sleeping Bag for Adults",
    "price": "$189.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411VseDpEXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DR8CYKJQ?tag=rvgearlab-amz-20",
    "description": "The Naturehike 0 Degree line uses RDS-certified 650 fill down in a mummy top with a roomy lower body. Two models are offered, with ISO comfort at 29F for the CW700 and 12F for the CW1000, plus matching extreme figures, in medium and large.\n\nIt prints more cold-weather detail than the SYWSKW and sits at nearly the same price as the Kelty. The large size gives men with broader frames space in the shoulders.\n\nIt suits men who plan cold trips and want comfort ratings. Pick the CW1000 for the coldest nights.",
    "specs": [
      "650 fill RDS down",
      "ISO comfort 12F for CW1000",
      "Medium and large sizes"
    ],
    "pros": [
      "Real ISO comfort ratings listed",
      "Mummy top with roomy lower body",
      "Traceable down by label scan",
      "Two sizes to match your frame"
    ],
    "cons": [
      "Two models share one listing",
      "Heavier than the 40 degree down bags"
    ],
    "bestFor": "Cold-trip hikers",
    "take": "Clear warmth data for men planning cold trips.",
    "catch": "Pick the CW1000 model if you want the 12F rating."
  },
  {
    "id": "best-mens-down-sleeping-bags-4",
    "rank": 4,
    "badge": "Best Wide Cut Value",
    "name": "SYWSKW Large Down Sleeping Bag with Pillow for Cold Weather",
    "price": "$129.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31d97oh-wkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJ2VZZ3K?tag=rvgearlab-amz-20",
    "description": "The SYWSKW Large uses 680 fill power RDS duck down, an 80 g detachable pillow and a widened 33.5 inch shoulder design. The listing aims it at cold-weather and extended trips.\n\nIt gives the widest shoulders in the group and costs the least of the four. Against the Naturehike CW it includes a pillow and a roomier cut.\n\nIt suits broad-shouldered men who find mummies pinching. The pillow can come off.",
    "specs": [
      "680 fill RDS duck down",
      "33.5 inch shoulder width",
      "Detachable 80 g pillow"
    ],
    "pros": [
      "Widest shoulders in the list",
      "Detachable pillow included",
      "Down insulation compresses well",
      "Lowest price of the four"
    ],
    "cons": [
      "No ISO rating in main bullets",
      "Larger size adds weight"
    ],
    "bestFor": "Broad-shouldered men",
    "take": "Pick it if narrow mummies pinch your shoulders.",
    "catch": "The wider cut gives up some weight savings."
  }
];

export const howWeEvaluated = [
  {
    "title": "Cut and size",
    "description": "We compared stated lengths, widths and any men's-specific cut."
  },
  {
    "title": "Fill power",
    "description": "We compared listed fill power and sourcing statements."
  },
  {
    "title": "Printed ratings",
    "description": "We noted ISO comfort, limit and extreme figures where given."
  },
  {
    "title": "Features",
    "description": "We compared vents, collars, zippers and pillows."
  },
  {
    "title": "Price",
    "description": "We weighed price against the documentation provided."
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
          "Side sleeper",
          "NEMO Disco Down",
          "Spoon shape with knee and elbow room"
        ],
        [
          "Tall man, up to 6 ft 6",
          "Kelty Cosmic 20",
          "Long size with printed ISO figures"
        ],
        [
          "Broad shoulders",
          "SYWSKW Large",
          "33.5 inch shoulder width"
        ],
        [
          "Planning cold trips",
          "Naturehike CW",
          "CW1000 lists ISO comfort 12F"
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
          "$120 to $190",
          "SYWSKW Large or Kelty Cosmic 20"
        ],
        [
          "$180 to $300",
          "Naturehike CW or NEMO Disco Down"
        ]
      ]
    }
  },
  {
    "subheading": "Men's Cut vs Unisex Wide",
    "cards": [
      {
        "label": "Men's cut",
        "text": "The NEMO Disco Down is a men's design with vents and a spoon shape. It costs the most."
      },
      {
        "label": "Unisex wide",
        "text": "The Kelty Cosmic 20, Naturehike CW and SYWSKW Large are sized for a range of builds. They cost less and offer length or width choices."
      }
    ],
    "note": "Choose the NEMO Disco Down if you sleep on your side, and the Kelty Cosmic 20 if you are tall."
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
          "SYWSKW Large"
        ],
        [
          "Mid price with ISO figures",
          "Kelty Cosmic 20"
        ],
        [
          "Mid price with cold documentation",
          "Naturehike CW"
        ],
        [
          "Premium men's bag",
          "NEMO Disco Down"
        ]
      ]
    }
  },
  {
    "subheading": "Tall Men Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a stated Long size and the height it fits."
      },
      {
        "label": "In this comparison",
        "text": "The Kelty Cosmic 20 lists a Long size for sleepers to 6 ft 6, and the Naturehike CW lists a large at 86.61 by 33.46 inches."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the NEMO Disco Down if you sleep on your side and want vents and a men's spoon shape."
      },
      {
        "label": "Save if",
        "text": "Save with the SYWSKW Large if shoulder room matters more than printed ratings."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What makes a down bag men's",
    "explanation": "A men's bag is longer and broader at the shoulders and has more insulation at the torso. Only the NEMO is labeled men's here. For others, check the stated length and shoulder width."
  },
  {
    "criterion": "Length and height",
    "explanation": "A bag too short compresses the down at your feet. Kelty lists up to 6 ft 6 for the Long. Match the size chart to your height."
  },
  {
    "criterion": "Shoulder width",
    "explanation": "Narrow mummies pinch broader men and drive heat loss as you shift. The SYWSKW lists 33.5 inch shoulders. Check the width on the listing."
  },
  {
    "criterion": "Read the ISO figures",
    "explanation": "ISO ratings use comfort, limit and extreme numbers. Kelty prints limit and extreme, and Naturehike prints comfort and extreme. Compare like with like."
  },
  {
    "criterion": "Fill power and fill weight",
    "explanation": "Higher fill power gives more warmth per ounce, but the amount of down also matters. The NEMO uses 650, the SYWSKW 680 and the Kelty 550. Weigh fill power against your weight budget."
  },
  {
    "criterion": "Wet down",
    "explanation": "Down loses loft when it gets wet, and hydrophobic treatments only slow that. Keep the bag in a dry sack. A tent with good ventilation reduces condensation."
  }
];

export const faq = [
  {
    "q": "Do men need a men's down bag?",
    "a": "Not strictly. A men's bag has more length and shoulder room, and a unisex long bag can work. Match the size to your height."
  },
  {
    "q": "What is the mistake with down ratings?",
    "a": "Reading the extreme number as comfort. The Kelty prints limit and extreme, so plan on the bag being comfortable well above them."
  },
  {
    "q": "Is the NEMO Disco Down worth it over the Kelty?",
    "a": "If you sleep on your side and want vents, yes. For taller men on a budget the Kelty costs less."
  },
  {
    "q": "How do I keep down dry?",
    "a": "Store it in a dry sack and avoid tent walls. Dry it fully before packing."
  },
  {
    "q": "How do I wash a down bag?",
    "a": "Use a down wash on a gentle cycle and dry on low with tennis balls. Check the label before washing."
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
