export const guideSlug = "best-10-degree-double-sleeping-bags";
export const guideTitle = "3 Best 10 Degree Double Sleeping Bags in 2026";
export const metaTitle = "Best 10 Degree Double Sleeping Bags in 2026";
export const metaDescription = "Three cold-weather double sleeping bags rated at or near 0F for couples: TETON Mammoth, Guide Gear Canvas Hunter and WKFAMOUT, with warmth tips.";
export const mainKeyword = "best 10 degree double sleeping bags";
export const introParagraphs = [
  "No double bag on Amazon prints a 10 degree label, so this guide uses the closest cold-weather doubles: two bags labeled 0 degree and one that lists comfort at 30F. Each sleeps two adults, and each is meant for car camping rather than carrying.",
  "Only three listings were a genuine fit, so the choice comes down to weight, shell fabric and how the bag splits. We compared each on size, insulation weight and what the listing says about warmth."
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
    "id": "best-10-degree-double-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Teton Mammoth",
    "price": "$192.43",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/317e1-QW1hL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B000F38YHI?tag=rvgearlab-amz-20",
    "description": "TETON's Mammoth is a 0 degree double that measures 94 x 62 inches, which the listing says is longer and wider than a queen mattress. It has a poly-flannel lining, shoulder and zipper draft tubes, and unzips on both sides and across the bottom.\n\nNext to the Guide Gear Canvas Hunter, it swaps a heavy canvas shell for a lighter fiber-fill build with a stuff sack, so it is far easier to move from car to campsite. The extra length also suits a taller partner better than the WKFAMOUT's 86.7 inch cut.\n\nA solid choice for couples who camp when nights fall below freezing and want one roomy bag. Fluff it and add a pad underneath for the warmth the label promises.",
    "specs": [
      "94 x 62 inch double",
      "Poly-flannel lining",
      "Draft tubes at zipper and shoulders"
    ],
    "pros": [
      "Longer and wider than a queen bed",
      "Draft tubes seal zipper and shoulders",
      "Unzips on both sides and bottom",
      "Stuff sack included"
    ],
    "cons": [
      "Bulky and heavy to store",
      "Brand label, no ISO comfort figure"
    ],
    "bestFor": "Cold-night couples",
    "take": "A roomy 0 degree double with good draft control and a stuff sack.",
    "catch": "The 0 degree figure is a brand label and the listing gives no comfort rating, so plan on a warmer comfort range."
  },
  {
    "id": "best-10-degree-double-sleeping-bags-2",
    "rank": 2,
    "badge": "Best for Rugged Use",
    "name": "Guide Gear Canvas Hunter 0-Degree Double Sleeping Bag for Adults and Kids 2-Person Warm Winter Cold Weather Li",
    "price": "$139.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411QOlSvAdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B079H1LBN7?tag=rvgearlab-amz-20",
    "description": "Guide Gear builds this 0 degree double with an 8 oz cotton canvas shell, brushed cotton flannel lining and 7 lb of insulation. The listing gives a 50 x 90 inch footprint, an attached hood and a two-way full-length anti-snag zipper.\n\nCompared with the TETON Mammoth, it is narrower and denser, and the canvas shell resists snags and campfire sparks better than polyester. The WKFAMOUT beats it on packability, while this bag is the one built for hunting camps and truck beds.\n\nPick it for hunters, ranch campers and anyone who wants a tough shell for rough ground. Plan on dedicated vehicle storage.",
    "specs": [
      "8 oz canvas shell",
      "7 lb of insulation, hood",
      "50 x 90 inch, 13.6 lb"
    ],
    "pros": [
      "Tough canvas shell resists snags",
      "Brushed cotton flannel lining",
      "Attached hood retains heat",
      "Full-length two-way zipper"
    ],
    "cons": [
      "13.6 lb is very heavy",
      "50 inch width is narrower than the TETON"
    ],
    "bestFor": "Hunting camps and truck beds",
    "take": "A canvas-shell 0 degree double built for rough use.",
    "catch": "At 13.6 lb it is a vehicle-only bag, and 50 inches wide leaves less shared room than the TETON."
  },
  {
    "id": "best-10-degree-double-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Lighter Double",
    "name": "WKFAMOUT 0 Degree Double Sleeping Bag for Adults Queen Size 2 Person Sleeping Bag for Cold Weather with Compre",
    "price": "$108.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KSXpfhJ7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FX3VCTY1?tag=rvgearlab-amz-20",
    "description": "WKFAMOUT markets this as a 0 degree double that sleeps two adults up to 6 ft 2 in in an 86.7 x 59 inch envelope. Insulation is 5.73 lb of faux silk cotton, double-layered on top, and the bag splits into two single bags.\n\nIt weighs far less than the 13.6 lb Guide Gear and brings an oversized 210D Oxford compression sack, which makes it easier to pack. The listing also states a comfort level of 30F, which is the most honest number among the three.\n\nA good fit for couples who want to split the bag into two singles on milder trips. Choose it when moving the bag matters.",
    "specs": [
      "86.7 x 59 inch double",
      "5.73 lb faux silk cotton fill",
      "Splits into two singles"
    ],
    "pros": [
      "Far lighter than the canvas bag",
      "Oversized compression sack",
      "Zips apart into two singles",
      "Anti-snag threading at hood"
    ],
    "cons": [
      "Comfort stated as 30F, not 10",
      "Fits sleepers up to 6 ft 2 in"
    ],
    "bestFor": "Couples who also want singles",
    "take": "A lighter double that splits into two bags and comes with an oversized compression sack.",
    "catch": "Its listing states comfort at 30F, so the 0 degree label is optimistic, and taller sleepers outgrow it."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated warmth",
    "description": "We compared the temperature label with any comfort figure the listing prints, and flagged the gap."
  },
  {
    "title": "Shared space",
    "description": "We checked width and length for two adults, plus the maximum height each listing gives."
  },
  {
    "title": "Insulation weight",
    "description": "We looked at stated fill weight, since pounds of insulation indicate how warm the bag will run."
  },
  {
    "title": "Carry and storage",
    "description": "We noted bag weight, compression sack quality and how bulky it is when packed."
  },
  {
    "title": "Split and zip design",
    "description": "We checked whether the bag unzips into singles and how drafts are sealed."
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
    "subheading": "By Camping Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Family campground with a heated truck bed",
          "TETON Mammoth 0 Degree",
          "Roomy 94 x 62 inch cut and stuff sack"
        ],
        [
          "Hunting camp or rough ground",
          "Guide Gear Canvas Hunter 0",
          "Canvas shell resists snags"
        ],
        [
          "Couples who split bags on milder trips",
          "WKFAMOUT 0 Degree Double",
          "Zips apart into two singles"
        ],
        [
          "Tall partner needing length",
          "TETON Mammoth 0 Degree",
          "94 inches of length"
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
          "$100 to $110",
          "WKFAMOUT 0 Degree Double"
        ],
        [
          "$130 to $140",
          "Guide Gear Canvas Hunter 0"
        ],
        [
          "$190 to $200",
          "TETON Mammoth 0 Degree"
        ]
      ]
    }
  },
  {
    "subheading": "Canvas Shell vs Polyester Shell",
    "cards": [
      {
        "label": "Canvas",
        "text": "The Guide Gear Canvas Hunter 0 uses an 8 oz cotton canvas shell that resists snags but adds weight and bulk."
      },
      {
        "label": "Polyester",
        "text": "The TETON Mammoth 0 Degree and WKFAMOUT 0 Degree Double use lighter fiber builds that pack smaller and weigh less."
      }
    ],
    "note": "Most couples should start with the TETON Mammoth 0 Degree and choose canvas only for rough-ground use."
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
          "Lowest cost of the three",
          "WKFAMOUT 0 Degree Double"
        ],
        [
          "Middle cost, rugged shell",
          "Guide Gear Canvas Hunter 0"
        ],
        [
          "Highest cost, roomiest cut",
          "TETON Mammoth 0 Degree"
        ]
      ]
    }
  },
  {
    "subheading": "A Cold Night for Two Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Stated width for two adults, insulation weight and draft tubes along the zipper."
      },
      {
        "label": "In this comparison",
        "text": "The TETON Mammoth 0 Degree lists 62 inch width and draft tubes at both zipper and shoulders, while the Guide Gear Canvas Hunter 0 lists 7 lb of insulation."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the TETON Mammoth 0 Degree when two adults need real width and draft control for freezing nights."
      },
      {
        "label": "Save if",
        "text": "Save with the WKFAMOUT 0 Degree Double, which costs less, comes with a big compression sack and splits into singles."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rating gap on doubles",
    "explanation": "A double bag labeled 0 degree is usually a limit figure, and two people add warmth, so comfort tends to run warmer. Read the label as survival range, not cozy range. If the listing prints a comfort number, trust it before the label."
  },
  {
    "criterion": "Width for two adults",
    "explanation": "Shoulder width decides whether two adults fit without squeezing out the insulation. Fifty inches suits a snug couple, while 59 to 62 inches gives real room. Check the width in the listing, not only the word queen."
  },
  {
    "criterion": "Insulation weight",
    "explanation": "Fill measured in pounds is a rough guide to warmth on doubles. Seven pounds of insulation will run warmer than five. Compare the number printed on the listing, and prefer bags that state it."
  },
  {
    "criterion": "Shell fabric",
    "explanation": "Canvas resists snags and sparks but weighs more and dries slowly. Polyester is lighter and packs smaller. Choose the shell that matches how and where you camp."
  },
  {
    "criterion": "Weight and portability",
    "explanation": "Doubles run from about 10 to 14 lb, which limits them to car camping. The weight printed on the listing tells you whether you can carry it at all. If no weight appears, assume it is heavy."
  }
];

export const faq = [
  {
    "q": "Is a 0 degree double enough for 10 degree nights?",
    "a": "Usually yes with a sleeping pad and base layers, because two bodies add warmth. Comfort figures still run warmer than the label, so treat 10F as the cold edge. Add a wool hat and a closed-cell pad."
  },
  {
    "q": "What mistake do couples make with doubles?",
    "a": "They buy a bag that is too narrow and compress the insulation at the shoulders. Check the stated width, and prefer 59 inches or more. A snug bag loses warmth where bodies press the fill flat."
  },
  {
    "q": "Is a double worth it over two singles?",
    "a": "A double saves money and shares warmth, but a single bag usually seals better around each sleeper. The WKFAMOUT splits into two singles, which gives you both options. A zip-together pair of singles costs more."
  },
  {
    "q": "How do I set up a double bag in a tent?",
    "a": "Lay out a pad wide enough for two, or two pads strapped together. Then spread the bag over them and zip the sides closed. Check that the tent floor is wide enough for the bag's full width."
  },
  {
    "q": "How should I clean a canvas or flannel double?",
    "a": "Spot clean when you can, and wash gently with mild detergent only as the label allows. Dry completely before storing, because damp cotton mildews. Hang it loose after trips."
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
