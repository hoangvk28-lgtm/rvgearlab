export const guideSlug = "best-20-degree-double-sleeping-bags";
export const guideTitle = "3 Best 20 Degree Double Sleeping Bags in 2026";
export const metaTitle = "Best 20 Degree Double Sleeping Bags in 2026";
export const metaDescription = "Three 20F double sleeping bags for couples: Kelty Tru.Comfort Doublewide, TETON Mammoth 20 and Guide Gear Canvas Hunter 20, compared on room and warmth.";
export const mainKeyword = "best 20 degree double sleeping bags";
export const introParagraphs = [
  "Only three listings print a 20 degree figure for a double bag, so the choice is clear-cut: a vent-equipped Kelty, a roomy TETON and a canvas-shell Guide Gear. Each sleeps two adults and is meant for car camping rather than carrying.",
  "We compared them on shared width, insulation weight and named features, because those details separate a cozy night from a drafty one. With only three options, the guide is as much about what to look for as about which to buy."
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
    "id": "best-20-degree-double-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Kelty Tru.Comfort Doublewide 2 Person Double Sleeping Bag 20F",
    "price": "$219.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41FWd4s1M3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BRQQPTNS?tag=rvgearlab-amz-20",
    "description": "Kelty's Tru.Comfort Doublewide is a 20F synthetic double with Cloud Loft insulation, 64 inches of shared shoulder space and an 84 inch length. The listing names independent ventilation, a zip-off top layer, two built-in blankets, two-way foot vents and an oversized hood.\n\nIt beats the TETON and Guide Gear on adjustability, because each sleeper controls their own airflow. The hood fits two standard pillows, which neither of the others offers, and the quick-drying synthetic fill suits damp campsites.\n\nA strong choice for couples who run at different temperatures. Peel back the top layer on warm nights and keep the blankets for cold ones.",
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
    "bestFor": "Couples with different temperatures",
    "take": "A 20F synthetic double with independent vents and built-in blankets.",
    "catch": "No weight is printed, and it is the priciest pick, so check the length if either of you is tall."
  },
  {
    "id": "best-20-degree-double-sleeping-bags-2",
    "rank": 2,
    "badge": "Best for Room",
    "name": "Teton Mammoth",
    "price": "$165.16",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OLL3pvooL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B000F38YI2?tag=rvgearlab-amz-20",
    "description": "TETON's Mammoth 20 Degree is a 94 x 62 inch double that the listing describes as larger than a queen mattress. A poly-flannel lining, draft tubes at the zipper and shoulders, and unzipping on each side and across the bottom are all named.\n\nIt gives the most space of the three, with 10 inches more length than the Kelty and 12 inches more width than the Guide Gear. The included stuff sack makes loading simple.\n\nA fit for tall couples and for families where a child sometimes crawls in. Fluff it before bed and add a pad underneath.",
    "specs": [
      "94 x 62 inch double",
      "Poly-flannel lining",
      "Draft tubes, stuff sack"
    ],
    "pros": [
      "Longest and widest of the three",
      "Draft tubes seal zipper and shoulders",
      "Unzips on three sides",
      "Stuff sack included"
    ],
    "cons": [
      "No comfort rating printed",
      "Bulky to store"
    ],
    "bestFor": "Tall couples and families",
    "take": "A very roomy 20 degree double with draft tubes at the zipper and shoulders.",
    "catch": "The listing gives a label only, with no comfort figure, and the bag takes real storage space."
  },
  {
    "id": "best-20-degree-double-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Budget Pick",
    "name": "Guide Gear Canvas Hunter 20-Degree Double Sleeping Bag for Adults and Kids 2-Person Warm Winter Cold Weather L",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31VkAXBmYcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B079H1QBLG?tag=rvgearlab-amz-20",
    "description": "Guide Gear's Canvas Hunter 20 is a 50 x 80 inch double with 6 lb of insulation, a 210T ripstop polyester shell and a 200gsm fleece lining. The listing says it is comfort rated down to 20F and weighs 10.6 lb.\n\nIt costs the least, and the fleece lining feels soft against the skin. The cost is width, since 50 inches leaves less shared room than the TETON or Kelty.\n\nChoose it for couples on a budget who camp from a vehicle and sleep close. A full-length double-sided zipper helps with entry.",
    "specs": [
      "6 lb insulation, fleece lining",
      "50 x 80 inch, 10.6 lb",
      "Comfort rated to 20F"
    ],
    "pros": [
      "Lowest price of the three",
      "Soft fleece lining",
      "Full-length double-sided zipper",
      "Comfort rated to 20F"
    ],
    "cons": [
      "Narrow 50 inch width",
      "10.6 lb is heavy"
    ],
    "bestFor": "Budget couples",
    "take": "The lowest-cost 20F double, with a fleece lining.",
    "catch": "At 50 inches wide and 10.6 lb, it is a snug vehicle-only bag."
  }
];

export const howWeEvaluated = [
  {
    "title": "Rating",
    "description": "We used each stated 20F figure and any comfort statement."
  },
  {
    "title": "Shared space",
    "description": "We compared width and length for two adults."
  },
  {
    "title": "Features",
    "description": "We looked at vents, blankets and draft tubes."
  },
  {
    "title": "Weight",
    "description": "We used printed weights."
  },
  {
    "title": "Price",
    "description": "We compared relative cost across the three."
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
    "subheading": "By Couple",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Different sleep temperatures",
          "Kelty Doublewide 20F",
          "Independent vents"
        ],
        [
          "Tall pair",
          "TETON Mammoth 20 Degree",
          "94 inches long"
        ],
        [
          "Tight budget",
          "Guide Gear Canvas Hunter 20",
          "Lowest price"
        ],
        [
          "Wants spare blankets",
          "Kelty Doublewide 20F",
          "Two built-in blankets"
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
          "Guide Gear Canvas Hunter 20"
        ],
        [
          "$160 to $170",
          "TETON Mammoth 20 Degree"
        ],
        [
          "$210 to $220",
          "Kelty Doublewide 20F"
        ]
      ]
    }
  },
  {
    "subheading": "Feature-Rich vs Value Doubles",
    "cards": [
      {
        "label": "Feature-rich",
        "text": "The Kelty Doublewide 20F adds vents, a zip-off top and two blankets for a higher price."
      },
      {
        "label": "Value",
        "text": "The Guide Gear Canvas Hunter 20 and TETON Mammoth 20 Degree spend on warmth and room instead."
      }
    ],
    "note": "Choose the TETON Mammoth 20 Degree for space and the Kelty Doublewide 20F for control."
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
          "Lowest price",
          "Guide Gear Canvas Hunter 20"
        ],
        [
          "Mid price",
          "TETON Mammoth 20 Degree"
        ],
        [
          "Highest price",
          "Kelty Doublewide 20F"
        ]
      ]
    }
  },
  {
    "subheading": "20F Couples Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated width of 60 inches or more and a shared hood."
      },
      {
        "label": "In this comparison",
        "text": "The Kelty Doublewide 20F lists 64 inches of shoulder room and a shared hood, while the TETON Mammoth 20 Degree lists 62 inches."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Kelty Doublewide 20F when you and your partner want separate airflow."
      },
      {
        "label": "Save if",
        "text": "Save with the Guide Gear Canvas Hunter 20 if you sleep close and camp from a vehicle."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Comfort versus label",
    "explanation": "A 20F figure on a double is usually a limit. Comfort tends to run 10 to 15 degrees warmer, though two sleepers add heat. Look for a comfort statement and treat the label as the cold edge."
  },
  {
    "criterion": "Shoulder room",
    "explanation": "Fifty inches is snug for two adults, and 64 inches is generous. Squeezing together compresses insulation at the shoulders and cools you. Check the stated width rather than the word queen."
  },
  {
    "criterion": "Ventilation controls",
    "explanation": "Couples often sleep at different temperatures. Independent vents or a zip-off top layer let each person adjust without waking the other. Look for foot vents and layered tops in the listing."
  },
  {
    "criterion": "Insulation weight",
    "explanation": "Six pounds of insulation is common in this class, and more is warmer. Compare the figure printed in each listing. Where none is printed, expect the bag to run lighter and cooler."
  },
  {
    "criterion": "Weight and storage",
    "explanation": "A double over 10 lb belongs in a vehicle. Check the printed weight and plan the storage space at home. Hang loops or a large sack keep the loft intact."
  }
];

export const faq = [
  {
    "q": "Is a 20F double warm enough at 20F?",
    "a": "With a pad and warm layers it keeps most couples safe. Comfort sits warmer than the label. Two sleepers add heat, which helps."
  },
  {
    "q": "What mistake do couples make with doubles?",
    "a": "They choose a narrow bag and then compress the insulation at the shoulders. They also skip a double-wide pad. Check width and pad size together."
  },
  {
    "q": "Is the Kelty worth it over the TETON?",
    "a": "If you value vents and spare blankets, yes. If you value length and width, the TETON gives more space for less. Match the choice to your sleep habits."
  },
  {
    "q": "How do I set up a double bag in a tent?",
    "a": "Lay a wide pad first, spread the bag and zip the sides. Check that the tent floor is wider than the bag. Fluff the insulation before bed."
  },
  {
    "q": "How do I clean a canvas or flannel double?",
    "a": "Spot clean when you can and wash gently as the label directs. Dry thoroughly before storage. Damp cotton and fleece mildew quickly."
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
