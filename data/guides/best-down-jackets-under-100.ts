export const guideSlug = "best-down-jackets-under-100";
export const guideTitle = "6 Best Down Jackets Under 100 in 2026";
export const metaTitle = "Best Down Jackets Under 100 in 2026";
export const metaDescription = "Best down jackets under $100: six puffers and parkas compared on real down fill, fill power, shell and hood design for winter camping and travel.";
export const mainKeyword = "best down jackets under 100";
export const introParagraphs = [
  "A $100 ceiling is where real down jackets start to appear, but it is also where heavy synthetic parkas crowd in at much higher sticker prices. The six jackets here span about $30 to $96, and the useful question is which price tier actually adds warmth.",
  "Each jacket was compared on fill type and fill power, shell protection, hood and length, and weight. The pick with the best warmth for the money leads, and the pricier parkas are ranked by what they add beyond a light puffer."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/hiking-backpacker-mountain.webp";
export const heroImageAlt = "Hiker with a loaded backpack climbing a mountain trail";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-down-jackets-under-100-1",
    "rank": 1,
    "badge": "Best Value Under $100",
    "name": "Pioneer Camp Quilted Puffer Jacket for Women Lightweight Water Resistant Hoodies Warm Winter Jacket Filled wit",
    "price": "$30.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31-JxlhSjkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D9LCSSTL?tag=rvgearlab-amz-20",
    "description": "The Pioneer Camp 700FP is a women's puffer with 700 fill power, 90% premium duck down, a recycled nylon shell that repels light rain and resists wind. An adjustable hood, elastic cuffs, two zip pockets and an internal waist drawcord complete it.\n\nIt costs about $30, which undercuts every other jacket on the page, and none of the others names a fill power. The 700 number puts its down in the premium range, well above the synthetic fills of the 33,000ft Packable and fit space Ripstop, and the waist drawcord shapes the fit.\n\nIt suits women who want real down for cold camps, ski trips and commutes without paying for a brand name. The water-repellent shell handles light snow.",
    "specs": [
      "700 fill power, 90% duck down",
      "Recycled nylon shell",
      "Hood, waist drawcord"
    ],
    "pros": [
      "Premium 700 fill power down",
      "Water-repellent windproof shell",
      "Waist drawcord shapes the fit",
      "Adjustable hood and elastic cuffs"
    ],
    "cons": [
      "Down loses loft when soaked",
      "Women's cut only"
    ],
    "bestFor": "Cold camps and winter commutes",
    "take": "The warmest weight-for-dollar pick here, with real premium down.",
    "catch": "Down clumps when wet, so keep a rain shell for storms."
  },
  {
    "id": "best-down-jackets-under-100-2",
    "rank": 2,
    "badge": "Best Synthetic Packable",
    "name": "33",
    "price": "$54.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41HmisryMmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08YF4Y216?tag=rvgearlab-amz-20",
    "description": "Think of the 33,000ft Packable as the synthetic answer to down: ultra light soft nylon outside, polyester insulation inside and a 3000mm DWR finish on top. Everything stows inside the left hand zipper pocket, and elastic-bound cuffs and hem hold the heat in.\n\nIt costs about $55, nearly twice the Pioneer Camp 700FP, and the premium buys water-resistance rating and synthetic fill that keeps insulating in damp weather. It is lighter and more compressible than the CREATMO Parka.\n\nBackpackers and weekend travelers get an insulating layer that survives damp air and vanishes in a pack. It works as a mid layer under a shell.",
    "specs": [
      "Windproof nylon, DWR 3000mm",
      "100% polyester insulation",
      "Packs into zip pocket"
    ],
    "pros": [
      "3000mm DWR finish",
      "Packs into its own pocket",
      "Insulation works when damp",
      "Three zip pockets"
    ],
    "cons": [
      "No hood",
      "Synthetic fill is bulkier than down"
    ],
    "bestFor": "Damp-weather backpacking",
    "take": "A good choice when the forecast is wet and the pack is small.",
    "catch": "It has no hood, so your head stays exposed in rain."
  },
  {
    "id": "best-down-jackets-under-100-3",
    "rank": 3,
    "badge": "Best Detachable-Hood Parka",
    "name": "CREATMO US Men's Water-Resistant Insulated Down Alternative Outerwear Winter Cotton Puffer Jacket Thicken Warm",
    "price": "$69.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oXlXaQDzS._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08JH5BD1X?tag=rvgearlab-amz-20",
    "description": "The CREATMO Parka is a men's insulated parka with a down alternative cotton fill and a DWR finish that sheds moisture and wet snow. It has a windproof SBS zipper, a detachable adjustable hood, stretch cuffs and a waterproof chest zipper pocket for a ski pass.\n\nIt costs about $70, the middle of this guide, and the parka length and fleece hand-warmer pockets give far more warmth at rest than the 33,000ft Packable. It is also bulkier and heavier, so it stays in the car rather than the pack.\n\nIt suits car campers, skiers and winter commuters who want an all-day parka. Take the hood off for mild days.",
    "specs": [
      "Down-alternative parka fill",
      "DWR finish, SBS zipper",
      "Detachable hood, ski-pass pocket"
    ],
    "pros": [
      "Detachable adjustable hood",
      "Fleece hand-warmer pockets",
      "Waterproof chest pocket",
      "Windproof SBS zipper"
    ],
    "cons": [
      "Bulky and heavy to carry",
      "Synthetic fill, not down"
    ],
    "bestFor": "Car camping and winter commutes",
    "take": "A real cold-weather parka that suits sitting at a cold site.",
    "catch": "It is too bulky for the pack, so use it for car camping and commuting."
  },
  {
    "id": "best-down-jackets-under-100-4",
    "rank": 4,
    "badge": "Best Ripstop Shell",
    "name": "fit space Men's Puffer Jacket Down Synthesis Lightweight Hiking Jacket Winter Warm Coat Quilted Water Resistan",
    "price": "$38.25",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41h5vLlr3BL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BJQ6JCZK?tag=rvgearlab-amz-20",
    "description": "The fit space Ripstop is a men's puffer with 200 grams of cotton insulation all around, a 20-denier 100% nylon ripstop shell and a weight of about 450 g in size M. A chest pocket, two zippered hand-warmer pockets and two big inner pockets give it storage.\n\nIt costs about $38, close to the Comfitude Collarless, and its ripstop nylon resists snags and abrasion better than the thin shell of the 33,000ft Packable. It serves as a mid layer under a shell in extreme cold.\n\nIt suits hikers and campers who scrape through brush and want a tough, light layer. Wear it as a three-season jacket or as insulation under a shell.",
    "specs": [
      "200 g insulation, ripstop nylon",
      "About 450 g in size M",
      "Chest and four more pockets"
    ],
    "pros": [
      "Ripstop shell resists snags",
      "Light at about 450 g",
      "Chest pocket plus hand warmers",
      "Two large inner pockets"
    ],
    "cons": [
      "No hood",
      "Cotton fill is bulkier than down"
    ],
    "bestFor": "Brushy hikes and mid-layer use",
    "take": "A tough, light mid layer for people who snag jackets.",
    "catch": "With no hood it needs a shell or hat in harsh weather."
  },
  {
    "id": "best-down-jackets-under-100-5",
    "rank": 5,
    "badge": "Best Fur-Hood Parka",
    "name": "BINACL Women's Fashion Hoodie Thickened Black Jacket",
    "price": "$95.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31aQDe-jimL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07XXW8V5N?tag=rvgearlab-amz-20",
    "description": "The BINACL Fur Parka is a women's parka with a thick down alternative fill, a non-removable faux fur trim hood and three pockets, two deep lined side pockets and an interior security pocket. It comes in sizes XS through 3XL and nine colors, and the length covers the waist and hips.\n\nIt costs about $96, the highest price here, and it is the warmest cut of the group for standing in cold, with the fur hood blocking wind. It is far heavier than the Pioneer Camp 700FP and is not a packable layer.\n\nIt suits women who want a full winter parka for cold-weather travel and snowy mountain days. It is machine washable on a gentle cycle.",
    "specs": [
      "Thick down alternative fill",
      "Faux fur hood, three pockets",
      "Sizes XS to 3XL"
    ],
    "pros": [
      "Fur-trimmed hood blocks wind",
      "Wide size range XS to 3XL",
      "Deep lined hand pockets",
      "Machine washable"
    ],
    "cons": [
      "Heavy and not packable",
      "Highest price here"
    ],
    "bestFor": "Cold-weather travel and snow days",
    "take": "A heavy winter parka for staying warm in the cold, not for the trail.",
    "catch": "At nearly $100, it is the least value per dollar in this list."
  },
  {
    "id": "best-down-jackets-under-100-6",
    "rank": 6,
    "badge": "Best Layering Puffer",
    "name": "Comfitude Women's Lightweight Collarless Puffer Jacket",
    "price": "$31.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31uVJxAC7bL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GZNYYM8K?tag=rvgearlab-amz-20",
    "description": "The Comfitude Collarless is a women's lightweight puffer with an open crew neckline, quilted channels, a button front and two side pockets. It folds into an included bag for a tote or carry-on.\n\nIt costs about $32, close to the Pioneer Camp 700FP, and it is the one jacket here made to slip under a blazer or wool coat without a bulky collar. It is thinner than the Pioneer Camp 700FP, so it works as an inner layer.\n\nIt suits women who want a packable mid layer for cold commutes and trips. Wear it under a coat, or alone in mild weather.",
    "specs": [
      "Collarless quilted puffer",
      "Button front, side pockets",
      "Folds into storage bag"
    ],
    "pros": [
      "Sits flat under other coats",
      "Quilted channels hold heat",
      "Folds into a bag",
      "Easy to wipe clean"
    ],
    "cons": [
      "No hood or collar",
      "Thin for winter alone"
    ],
    "bestFor": "Layering under a wool coat",
    "take": "A neat mid layer that rides in a tote.",
    "catch": "It is thin on its own, so plan to wear it under another coat."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fill type and fill power",
    "description": "Real down, down alternative and fill power were compared for warmth per ounce."
  },
  {
    "title": "Shell and wind protection",
    "description": "DWR ratings, ripstop weaves and zippers were compared for weather cover."
  },
  {
    "title": "Hood and length",
    "description": "Hoods, collars and body length were weighed for wind coverage."
  },
  {
    "title": "Weight and packability",
    "description": "Packed size and carry weight were compared for backpacking use."
  },
  {
    "title": "Price against the cap",
    "description": "All six sit under $100, and warmth for the money takes first."
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
    "subheading": "By cold and activity",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Cold camp mornings, women's",
          "Pioneer Camp 700FP",
          "Premium 700 fill power down."
        ],
        [
          "Backpacking in damp weather",
          "33,000ft Packable",
          "DWR 3000mm and fold-in pocket."
        ],
        [
          "Car camping and snow days",
          "CREATMO Parka",
          "Parka length with detachable hood."
        ],
        [
          "Hiking through brush",
          "fit space Ripstop",
          "20-denier ripstop shell."
        ],
        [
          "Standing in cold wind",
          "BINACL Fur Parka",
          "Fur hood and hip-length cut."
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
          "Pioneer Camp 700FP or Comfitude Collarless"
        ],
        [
          "$30 to $60",
          "fit space Ripstop or 33,000ft Packable"
        ],
        [
          "$60 to $100",
          "CREATMO Parka or BINACL Fur Parka"
        ]
      ]
    }
  },
  {
    "subheading": "Packable puffer vs full parka",
    "cards": [
      {
        "label": "Packable puffer",
        "text": "The Pioneer Camp 700FP, 33,000ft Packable and fit space Ripstop are light and store small, so they suit hikers and layering."
      },
      {
        "label": "Full parka",
        "text": "The CREATMO Parka and BINACL Fur Parka cover the hips, block wind and warm you at rest, at the cost of bulk and weight."
      }
    ],
    "note": "Choose the Pioneer Camp 700FP unless you spend long hours standing in the cold."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $30",
          "Pioneer Camp 700FP"
        ],
        [
          "About $32",
          "Comfitude Collarless"
        ],
        [
          "About $38",
          "fit space Ripstop"
        ],
        [
          "About $55",
          "33,000ft Packable"
        ],
        [
          "About $70 to $96",
          "CREATMO Parka or BINACL Fur Parka"
        ]
      ]
    }
  },
  {
    "subheading": "For winter car camping specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a hip-length cut or a parka with a hood, lined hand pockets and a windproof zipper."
      },
      {
        "label": "In this comparison",
        "text": "The CREATMO Parka has a detachable hood and fleece hand-warmer pockets, and the Pioneer Camp 700FP adds real down at far lower cost."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you need a true parka: the CREATMO Parka at about $70 and the BINACL Fur Parka near $96 add hip coverage and wind-blocking hoods that the Pioneer Camp 700FP lacks."
      },
      {
        "label": "Save if",
        "text": "Save if you want pure warmth per dollar: the Pioneer Camp 700FP costs about $30 and holds 700 fill power down, which beats the synthetic jackets that cost nearly twice as much."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fill power explained",
    "explanation": "Fill power measures the volume an ounce of down fills, and 700 means the down is high quality and lofts well. A jacket with a stated 700 fill power holds more heat per ounce than one with no number, and 800 to 900 is expert-level. Look for the fill power and the percentage down in the product details before buying."
  },
  {
    "criterion": "Down versus synthetic in wet weather",
    "explanation": "Down insulates better when dry, while synthetic fill keeps most of its warmth when damp. If your trips involve snow or rain, a DWR-coated synthetic jacket with a 3000mm rating is safer than unprotected down. Carry a rain shell either way, and dry a down jacket fully."
  },
  {
    "criterion": "Parka length and hood",
    "explanation": "A parka that reaches the hips and a hood with a fur trim block wind far better than a short puffer, and they add weight. Short jackets win for hiking, and long parkas win for standing around camp. Check the garment length in the size chart before ordering."
  },
  {
    "criterion": "Weight and packed size",
    "explanation": "A packable puffer that fits into its own pocket takes the room of a water bottle, while a parka fills half a daypack. Choose the one you will actually bring on the trip, because a warm jacket left in the car protects nobody. Look for a weight in grams and a pouch or fold-in pocket."
  },
  {
    "criterion": "Pockets and zippers",
    "explanation": "A windproof zipper keeps drafts out, and fleece-lined hand pockets warm cold fingers. Zipped chest pockets hold a ski pass or phone. Count the pockets, and look for words like SBS zipper or lined pockets in the product details, since a missing hand-warmer pocket matters more at a cold camp than an extra chest pocket."
  }
];

export const faq = [
  {
    "q": "Is real down available under $100?",
    "a": "Yes, but only a few jackets state it. The Pioneer Camp 700FP lists 700 fill power with 90% duck down for about $30. Every other jacket here uses synthetic fill, so read the fill details before assuming a jacket is down, and treat a missing fill percentage as a sign of synthetic."
  },
  {
    "q": "What do buyers get wrong about fill power?",
    "a": "They compare fill power numbers across different weights of fill, though a heavy 600 can be warmer than a light 800. Fill power measures loft per ounce, and the total fill weight decides warmth. Check the fill power of the Pioneer Camp 700FP and the thickness of the jacket together."
  },
  {
    "q": "Is a $70 parka worth it over a $30 puffer?",
    "a": "It is if you stand in the cold for hours, because the CREATMO Parka adds a longer cut, a detachable hood and hand warmer pockets. For hiking, the Pioneer Camp 700FP is lighter and warmer for the weight. Match the jacket to your activity."
  },
  {
    "q": "How do I size a winter jacket for layering?",
    "a": "Buy your normal size and check that your arms can reach forward with a fleece underneath. The BINACL Fur Parka runs XS through 3XL, and the CREATMO Parka has stretch cuffs for fit. Check the chest and sleeve measurements before ordering."
  },
  {
    "q": "How do I wash a down jacket?",
    "a": "Wash on a gentle cycle with a down-safe soap in cold water, then dry on low heat with a few tennis balls. It can take two to three hours to dry fully. Skip fabric softener, which coats the feathers and kills loft, and expect the jacket to look flat until it is fully dry."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Down Jackets Under 200",
    "href": "/clothing-footwear/best-down-jackets-under-200"
  },
  {
    "title": "Best Down Jackets Under 50",
    "href": "/clothing-footwear/best-down-jackets-under-50"
  },
  {
    "title": "Best Down Jackets Under 75",
    "href": "/clothing-footwear/best-down-jackets-under-75"
  }
];
