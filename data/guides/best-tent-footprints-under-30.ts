export const guideSlug = "best-tent-footprints-under-30";
export const guideTitle = "5 Best Tent Footprints Under 30 in 2026";
export const metaTitle = "Best Tent Footprints Under 30 in 2026";
export const metaDescription = "Best tent footprints under $30, compared on fabric, waterproof rating, sizing and brand-matched fit, so your tent floor gets proper protection at a fair price.";
export const mainKeyword = "best tent footprints under 30";
export const introParagraphs = [
  "Thirty dollars pays for a better footprint than the $20 tier: ripstop fabrics, PU3000 coatings, elastic corner loops and, in one case, a cut that matches a specific tent. The trade is that bigger sheets weigh more, so picking size first saves money.",
  "Five footprints fit the cap, ordered by value across typical tent sizes. Two are universal sheets, two are large sizes and one is brand-matched."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/home-golden-hour-campsite.webp";
export const heroImageAlt = "Dome tent and hammock at a forest campsite at golden hour";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-tent-footprints-under-30-1",
    "rank": 1,
    "badge": "Best Value Under $30",
    "name": "Farfly Tent Footprint Waterproof PU 3000 Easy Set up Heavy Duty Ultralight Tent Footprint for Camping",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31fK8g9MDIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLY5N3W1?tag=rvgearlab-amz-20",
    "description": "The Farfly footprint is 94 by 94 inches in 210D polyester Oxford with a PU3000 coating and 8 elastic loops plus metal grommets. It weighs 1.38 pounds and packs to about 9.8 by 8.7 by 2 inches in a drawstring sack.\n\nIt covers a three or four person tent and has more anchor points than the other universal sheets here. Compared with the OneTigris it is bigger and heavier, and compared with the Clostnature it is smaller and lighter.\n\nIt suits car campers with a mid-size family tent who want a durable, simple ground cloth. Use the loops to stake out under the tent.",
    "specs": [
      "94x94 in, 210D Oxford, PU3000",
      "8 elastic loops, metal grommets",
      "1.38 lb, compact sack"
    ],
    "pros": [
      "PU3000 coating for wet nights",
      "Eight elastic loops make staking easy",
      "Metal grommets resist tearing",
      "Fits mid-size tents"
    ],
    "cons": [
      "Heavier than backpacking sheets",
      "Square shape may not match a rectangle floor"
    ],
    "bestFor": "Family tents for three to four people",
    "take": "A sturdy, well-anchored sheet for the most common tent sizes.",
    "catch": "Measure your tent floor so the square sheet does not poke out."
  },
  {
    "id": "best-tent-footprints-under-30-2",
    "rank": 2,
    "badge": "Lightest Pick",
    "name": "OneTigris 2 Person Footprint for Backpacking Tent",
    "price": "$29.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21-H7SimTwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C5QWV2XV?tag=rvgearlab-amz-20",
    "description": "The OneTigris 2 person footprint is 78.7 by 47.24 inches in 70D ripstop polyester with a 2000 millimeter waterproof rating. It weighs 0.2 kilograms (0.45 pounds) and packs to about 9.8 by 7.9 by 1.4 inches.\n\nIt fits OneTigris Cosmitto, Stelle and Stella tents, and the PU coated side faces up. It is the lightest sheet in this group by a wide margin and the smallest.\n\nIt suits backpackers with a OneTigris tent or any two-person tent of similar size. It also works as a door mat at the tent entrance.",
    "specs": [
      "78.7x47.24 in, 70D ripstop",
      "2000mm waterproof rating",
      "0.45 lb, packs very small"
    ],
    "pros": [
      "Lightest here at 0.45 pounds",
      "70D ripstop resists tears",
      "Fits OneTigris tents",
      "Doubles as a door mat"
    ],
    "cons": [
      "Smaller than most universal sheets",
      "Waterproof rating is only 2000mm"
    ],
    "bestFor": "Backpacking with OneTigris tents",
    "take": "Best if you carry the tent on your back and want a matched fit.",
    "catch": "The coated side must face up to work as intended."
  },
  {
    "id": "best-tent-footprints-under-30-3",
    "rank": 3,
    "badge": "Best Large Sheet",
    "name": "Clostnature 118x118in Heavy Duty Tent Footprint Floor Saver",
    "price": "$24.64",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41up0Qv+ItL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09QCRSC3X?tag=rvgearlab-amz-20",
    "description": "The Clostnature footprint is 118 by 118 inches in ripstop 210T polyester with a waterproof coating, weighing 22 ounces. It is sold to fit the Clostnature 6 person tent and folds into a drawstring bag.\n\nIt is the biggest sheet in this guide, with about 55 percent more coverage than the Farfly, and costs about $2 less. Its 210T fabric is thinner, so it prefers smooth sites.\n\nIt suits families with a six-person tent who need extra coverage. Fold extra fabric under so edges stay inside the tent.",
    "specs": [
      "118x118 in, ripstop 210T",
      "22 oz in a drawstring bag",
      "Waterproof coating"
    ],
    "pros": [
      "Biggest coverage in this guide",
      "Ripstop weave resists tears",
      "Light for its size at 22 ounces",
      "Lower price than the Farfly"
    ],
    "cons": [
      "Thinner 210T fabric",
      "Too large for small tents"
    ],
    "bestFor": "Six-person family tents",
    "take": "A large and light sheet that suits family camps on smooth ground.",
    "catch": "Trim or fold the edge for a four-person tent."
  },
  {
    "id": "best-tent-footprints-under-30-4",
    "rank": 4,
    "badge": "Best Mid-Size Choice",
    "name": "Frelaxy Tent Footprint",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31F4o328qxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FPQRCF3R?tag=rvgearlab-amz-20",
    "description": "This Frelaxy footprint is 104 by 80 inches and weighs 0.9 pounds. It uses 190T PU3000 waterproof ripstop polyester with high-duty grommets and thickened straps.\n\nIt sits between the OneTigris and Farfly in size and weight, and its ripstop weave and PU3000 rating are more than the OneTigris offers. It is available in six sizes, so you can match it to your floor.\n\nIt suits two to three person tents that need more width than a solo sheet. Order the size closest to your tent floor.",
    "specs": [
      "104x80 in, 190T PU3000 ripstop",
      "0.9 lb, six sizes available",
      "Grommets and thickened straps"
    ],
    "pros": [
      "Six sizes to match your tent",
      "PU3000 waterproof rating",
      "Light at 0.9 pounds",
      "Ripstop with grommets"
    ],
    "cons": [
      "Thin 190T fabric",
      "Not tent-specific"
    ],
    "bestFor": "Two to three person tents",
    "take": "A flexible size choice for tents that fall between standard footprints.",
    "catch": "Order by your tent's floor dimensions, not by capacity."
  },
  {
    "id": "best-tent-footprints-under-30-5",
    "rank": 5,
    "badge": "Best Tent-Matched Fit",
    "name": "Kelty Discovery Trail 1 Person Tent Footprint",
    "price": "$19.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31NiBMoeEqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B096SWZQ3N?tag=rvgearlab-amz-20",
    "description": "The Kelty footprint fits the Kelty Discovery Trail 1 person tent and sits completely beneath the tent floor without overhang. It is meant to protect the floor from abrasion and dirt.\n\nIt costs about $8 less than the Farfly and is the only one here made for a particular tent. The Kelty brand builds its tents with DWR and PFC-free fabrics.\n\nIt suits owners of the Discovery Trail 1 who want a perfect fit. It is no use for other tents.",
    "specs": [
      "Fits Kelty Discovery Trail 1",
      "Sits fully under the floor",
      "PFC-free DWR fabrics"
    ],
    "pros": [
      "Cut to match the tent floor",
      "No overhang to collect rain",
      "Extends tent floor life",
      "From a conservation-minded brand"
    ],
    "cons": [
      "Only works with one tent",
      "Little detail on weight or rating"
    ],
    "bestFor": "Kelty Discovery Trail 1 owners",
    "take": "The simplest fit for a Kelty tent, and not a general-purpose choice.",
    "catch": "Check your tent's model name before ordering."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fit and size",
    "description": "Compared sizes from 78.7 by 47 inches to 118 by 118 inches and tent-specific cuts."
  },
  {
    "title": "Waterproof rating",
    "description": "Looked at stated PU2000 and PU3000 coatings."
  },
  {
    "title": "Weight",
    "description": "Compared weights from 0.45 pounds to 1.38 pounds."
  },
  {
    "title": "Anchoring",
    "description": "Counted elastic loops, grommets and straps for staking out."
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
    "subheading": "By tent type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Mid-size family tent",
          "Farfly 94x94",
          "PU3000 and eight loops."
        ],
        [
          "Backpacking tent, carried by hand",
          "OneTigris 2P",
          "0.45 pounds."
        ],
        [
          "Six-person tent",
          "Clostnature 118x118",
          "118 by 118 inches."
        ],
        [
          "Odd tent shape between sizes",
          "Frelaxy 104x80",
          "Six sizes available."
        ],
        [
          "Kelty Discovery Trail 1",
          "Kelty Discovery Trail 1",
          "Cut to fit the floor."
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
          "$10 to $30",
          "Kelty Discovery Trail 1 or Frelaxy 104x80"
        ],
        [
          "$20 to $30",
          "Clostnature 118x118 or Farfly 94x94"
        ],
        [
          "$20 to $30",
          "OneTigris 2P"
        ]
      ]
    }
  },
  {
    "subheading": "Matched cut vs universal sheet",
    "cards": [
      {
        "label": "Matched cut",
        "text": "A cut that matches your tent, such as the Kelty Discovery Trail 1 or OneTigris 2P, sits fully under the floor. It only works with one tent line."
      },
      {
        "label": "Universal sheet",
        "text": "A universal sheet like the Farfly 94x94 or Frelaxy 104x80 fits many tents but needs folding. It is usually cheaper per square foot."
      }
    ],
    "note": "Choose the matched cut if your tent has one, and the Farfly 94x94 otherwise."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Around $20",
          "Kelty Discovery Trail 1"
        ],
        [
          "Around $25",
          "Frelaxy 104x80"
        ],
        [
          "Around $26",
          "Clostnature 118x118"
        ],
        [
          "Around $28",
          "Farfly 94x94"
        ],
        [
          "Up to $30",
          "OneTigris 2P"
        ]
      ]
    }
  },
  {
    "subheading": "For family camping specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a sheet at least 94 inches on a side and PU3000."
      },
      {
        "label": "In this comparison",
        "text": "The Farfly 94x94 and Clostnature 118x118 both cover mid-size and large family tents."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a branded, tent-matched fit, which starts at the $50 tier. Under the cap, the Farfly 94x94 gives the best build and anchoring."
      },
      {
        "label": "Save if",
        "text": "Save if you camp on smooth ground, because the Clostnature 118x118 offers the largest sheet at a low price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Tent-specific vs universal",
    "explanation": "A tent-specific footprint is cut to match one floor and leaves no overhang, while a universal sheet needs trimming or folding. A matched cut is best if your tent has one, and universal sheets suit everything else. Check the model name in the product title, since sizes differ across tent lines."
  },
  {
    "criterion": "PU rating",
    "explanation": "PU2000 handles light rain, while PU3000 handles a wetter night better. A footprint with a higher rating helps if ground water seeps through. Look for the number in the specs, and accept lower numbers if you camp on dry ground. Remember that a footprint mainly stops ground moisture, so even PU2000 does a lot of the work."
  },
  {
    "criterion": "Ripstop and denier",
    "explanation": "Ripstop weaves limit tears when a stake or stone snags the fabric. 70D ripstop is stronger per ounce than basic 190T. Look for the word ripstop in the title or features. A tougher weave matters most if you camp on gravel pads or forest duff."
  },
  {
    "criterion": "Weight versus size",
    "explanation": "A bigger footprint weighs more, and 118 inches square is about 22 ounces while a 78 by 47 inch sheet is 7 ounces. Decide whether you will carry it or drive it. Check the weight in the description. Add the footprint to your gear list so you see the real total before you commit."
  },
  {
    "criterion": "Anchor points",
    "explanation": "Elastic loops and metal grommets hold the sheet in place while you pitch the tent, which saves time in wind. Without them, the sheet slides as you set up. Look for at least four anchor points. Eight small loops hold a sheet more evenly than four big ones, especially on uneven ground."
  }
];

export const faq = [
  {
    "q": "How much bigger should a footprint be than my tent?",
    "a": "It should be smaller, never larger. A footprint that extends past the tent edge catches rain and sends it under the floor. The Farfly 94x94 is sized for mid-size tents, and you can fold edges under. Folding the spare edge under the tent keeps the rain out, and a trial layout in your yard will show any overhang before the first trip."
  },
  {
    "q": "Is PU3000 worth it over PU2000?",
    "a": "PU3000 holds back more water pressure, which helps if you camp on wet ground or pitch in rain. For fair-weather trips, PU2000 is enough. The Farfly 94x94 and Frelaxy 104x80 both carry PU3000. The difference shows most when you pitch on saturated ground, where water can wick up through a thin coating."
  },
  {
    "q": "What does ripstop mean?",
    "a": "Ripstop fabric has thicker threads woven in a grid so a small tear does not spread. It matters for ground cloths, which get snagged on sticks and stones. The OneTigris 2P uses 70D ripstop. It adds a few ounces to the sheet but pays off the first time a root snags the fabric, so look for the word ripstop in the title."
  },
  {
    "q": "Can a footprint go over the tent as a rain fly?",
    "a": "It can serve as an emergency cover, but a footprint is not designed for that, and its grommets may not suit your tent. Use a tarp for overhead cover instead. A footprint is best kept under the floor. A second tarp costs less than a ripped footprint, so pack a cheap poly tarp for rain cover and let the footprint stay under the floor."
  },
  {
    "q": "Do I need to stake the footprint down?",
    "a": "Yes, stake it before you pitch the tent so it does not slide. Elastic loops, as on the Farfly 94x94, make this easy. Without stakes, a footprint can shift in wind. Loops and grommets make this a one-minute job, and the sheet stays flat while you place the tent."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Tent Footprints",
    "href": "/tents-shelter/best-tent-footprints"
  },
  {
    "title": "Best Backpacking Tents",
    "href": "/tents-shelter/best-backpacking-tents"
  },
  {
    "title": "Best Camping Tents",
    "href": "/tents-shelter/best-camping-tents"
  },
  {
    "title": "Best Tent Stakes",
    "href": "/tents-shelter/best-tent-stakes"
  }
];
