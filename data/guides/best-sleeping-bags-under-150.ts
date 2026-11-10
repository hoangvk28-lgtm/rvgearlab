export const guideSlug = "best-sleeping-bags-under-150";
export const guideTitle = "5 Best Sleeping Bags Under 150 in 2026";
export const metaTitle = "Best Sleeping Bags Under 150 in 2026";
export const metaDescription = "Best sleeping bags under $150: five cold-weather bags, four heavy canvas and flannel car-camping bags plus one mummy, compared on warmth, size and weight.";
export const mainKeyword = "best sleeping bags under 150";
export const introParagraphs = [
  "A sleeping bag budget of $150 is where the choice changes from thin 30F bags to heavy winter bags with canvas shells, flannel liners and 5 to 6 pounds of fill. The five here run from about $50 to $130 and all but one are built for cars, cabins and hunting camps, not backpacks.",
  "The ranking asks what the last hundred dollars buys: real winter insulation, extra length for tall sleepers and a build that survives years of use. The top spot goes to the best value at the cap, and the cheaper mummy is placed as the lighter, three-season alternative."
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
    "id": "best-sleeping-bags-under-150-1",
    "rank": 1,
    "badge": "Best Value Under $150",
    "name": "Coleman Heritage Big & Tall 10°F Flannel Sleeping Bag",
    "price": "$67.58",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41keO1KCq5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B004J2FB5Y?tag=rvgearlab-amz-20",
    "description": "The Coleman Heritage Big & Tall is a 10F flannel-lined bag with 5 pounds of Holofill 808 insulation, sized 40 by 84 inches to fit campers up to 6 feet 7 inches. FiberLock construction keeps the fill from shifting, and the cotton cover is machine washable.\n\nIt costs about $102, the lowest of the four heavy bags and about $28 less than the TETON Deer Hunter Canvas. It is the only pick with a big and tall cut at the lowest cold rating on a machine washable shell.\n\nIt suits tall campers, cold-weather car campers and anyone who wants a bag that goes through the laundry. It is built for cabins and vehicle camping.",
    "specs": [
      "10F rated, 5 lb Holofill 808",
      "40 x 84 inch big and tall",
      "FiberLock, anti-snag zipper"
    ],
    "pros": [
      "Thick fill suits real winter nights",
      "Roomy for sleepers to 6 ft 7 in",
      "FiberLock keeps insulation from shifting",
      "Machine washable cover"
    ],
    "cons": [
      "Heavy to carry",
      "Rated for 10F, not a comfort rating"
    ],
    "bestFor": "Tall winter car campers",
    "take": "The most bag for the money under $150, especially for tall sleepers.",
    "catch": "At 5 pounds of fill it only works for car camping."
  },
  {
    "id": "best-sleeping-bags-under-150-2",
    "rank": 2,
    "badge": "Best For Extreme Cold",
    "name": "Stansport 6 lbs. Grizzly Sleeping Bag",
    "price": "$110.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41gsi5VRJeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01L456M8I?tag=rvgearlab-amz-20",
    "description": "The Stansport Grizzly is a -10F bag with 6 pounds of Poly-Therm insulation that keeps its warmth when wet. It has a cotton canvas shell, cotton flannel liner, double-layer construction and offset stitching to prevent cold spots, and it measures 81 by 39 inches.\n\nIt costs about $111, a little above the Coleman Heritage, and it has the lowest rating and the most fill of any pick. It fits shorter than the Coleman Heritage Big & Tall at 81 inches, which is the trade for extra insulation.\n\nIt suits hunters, ice fishers and campers who sleep out in subzero weather. The wet-insulation claim helps in damp climates.",
    "specs": [
      "-10F, 6 lb Poly-Therm fill",
      "Cotton canvas shell, flannel liner",
      "81 x 39 inches"
    ],
    "pros": [
      "Lowest cold rating here",
      "Insulation holds warmth when wet",
      "Offset stitching limits cold spots",
      "Canvas shell resists abrasion"
    ],
    "cons": [
      "Heavy and bulky",
      "Shorter cut than the Coleman"
    ],
    "bestFor": "Subzero hunting camps",
    "take": "Buy this one for the coldest nights, not for comfort at 40F.",
    "catch": "The -10F rating is a limit; plan on sleeping warmer than that."
  },
  {
    "id": "best-sleeping-bags-under-150-3",
    "rank": 3,
    "badge": "Best Roomy Canvas Bag",
    "name": "AGEMORE 0 Degree Canvas Sleeping Bag for Fishing",
    "price": "$113.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51StdnCF8vL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08S3N8PNW?tag=rvgearlab-amz-20",
    "description": "The AGEMORE is a heavy-duty bag with a 270GSM canvas exterior and a 145GSM cotton flannel lining, built in two offset layers. It measures 94.5 by 35.5 inches, and the inner flannel layer can be removed to make a separate single bag.\n\nIt costs about $114, a few dollars above the Stansport Grizzly, and it is the longest bag in this guide at 94.5 inches. The text states use down to 14F, which is warmer than the title suggests, and it is the pick with the removable inner layer.\n\nIt suits tall and broad sleepers and campers who want a bag that splits into two. It works for fishing, hunting and cold-weather travel.",
    "specs": [
      "270GSM canvas, cotton flannel",
      "94.5 x 35.5 inches",
      "Removable inner flannel layer"
    ],
    "pros": [
      "Longest bag in the group",
      "Inner layer separates into a single bag",
      "Heavy canvas resists tears",
      "Flannel lining feels soft"
    ],
    "cons": [
      "Heavy and bulky",
      "Title rating is colder than the text"
    ],
    "bestFor": "Tall sleepers and hunters",
    "take": "Choose it for extra length and the splittable inner layer.",
    "catch": "Plan on 14F as the lowest use, not the 0F in the title."
  },
  {
    "id": "best-sleeping-bags-under-150-4",
    "rank": 4,
    "badge": "Best Brand-Name Canvas",
    "name": "Teton 0F Degree Deer Hunter Sleeping Bag. Warm and Comfortable Camping Sleeping Bags",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ggZVlyhTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00A4VLHSE?tag=rvgearlab-amz-20",
    "description": "The TETON Deer Hunter is a 0F bag with a canvas shell, fiber fill, poly-flannel lining and a half-circle hood. It uses double-layer construction for steady warmth.\n\nIt costs about $130, the top of this budget and about $28 above the Coleman Heritage Big & Tall. The extra money buys a canvas shell and a hood, which the Coleman lacks.\n\nIt suits hunters and cold-weather campers who want a canvas bag with a hood. It handles long seasons of rough use.",
    "specs": [
      "Canvas shell, fiber fill",
      "Poly-flannel lining",
      "Half-circle hood"
    ],
    "pros": [
      "Tough canvas shell built to last",
      "Fiber fill with double-layer build",
      "Soft poly-flannel lining",
      "Hood adds warmth for cold nights"
    ],
    "cons": [
      "Highest price in the group",
      "Heavy to haul"
    ],
    "bestFor": "Cold hunting seasons",
    "take": "A well-known canvas bag for long cold seasons.",
    "catch": "It costs the most for a rating the Stansport beats."
  },
  {
    "id": "best-sleeping-bags-under-150-5",
    "rank": 5,
    "badge": "Best Lightweight Option",
    "name": "Bessport Mummy Sleeping Bag",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41e3bnxlOpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07V5HSB91?tag=rvgearlab-amz-20",
    "description": "The Bessport is a 15 to 45F mummy bag in 210T ripstop with an insulated footbox and double zippers with an anti-snag slider. It fits adults up to 6 feet 6 inches.\n\nIt costs about $50, under half the price of the Coleman Heritage Big & Tall, and it is the only mummy cut here. It is far lighter and packs smaller than the four canvas bags, and it suits milder weather.\n\nIt suits backpackers and campers who sleep in three-season weather. A mummy cut keeps heat in a smaller space.",
    "specs": [
      "15 to 45F, mummy cut",
      "210T ripstop, insulated footbox",
      "Fits adults to 6 ft 6 in"
    ],
    "pros": [
      "Rated down to 15F",
      "Fits adults to 6 ft 6 in tall",
      "Quilted insulated footbox",
      "Double zippers with anti-snag slider"
    ],
    "cons": [
      "Mummy cut feels snug",
      "Not a deep winter bag"
    ],
    "bestFor": "Three-season camping",
    "take": "Take this if weight and price matter more than deep-winter warmth.",
    "catch": "It is rated far above the canvas bags, so do not take it below freezing without layers."
  }
];

export const howWeEvaluated = [
  {
    "title": "Temperature rating",
    "description": "Stated ratings were compared, and comfort vs limit was noted."
  },
  {
    "title": "Insulation weight",
    "description": "Pounds of fill and shell material were compared."
  },
  {
    "title": "Length and width",
    "description": "Dimensions were checked for tall sleepers."
  },
  {
    "title": "Carry weight",
    "description": "Packability was considered for car camping vs hiking."
  },
  {
    "title": "Price against the cap",
    "description": "All five are under $150."
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
    "subheading": "By cold level",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Subzero nights",
          "Stansport Grizzly",
          "-10F rating and 6 lb fill."
        ],
        [
          "Winter car camping, tall",
          "Coleman Heritage Big & Tall",
          "10F and fits to 6 ft 7 in."
        ],
        [
          "Long frame and a splittable bag",
          "AGEMORE Canvas Bag",
          "94.5 inches with a removable inner layer."
        ],
        [
          "Hunting camps with a hood",
          "TETON Deer Hunter Canvas",
          "0F canvas with a hood."
        ],
        [
          "Three-season trips",
          "Bessport Mummy Bag",
          "15 to 45F and lighter."
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
          "$40 to $110",
          "Bessport Mummy Bag or Coleman Heritage Big & Tall"
        ],
        [
          "$110 to $120",
          "Stansport Grizzly or AGEMORE Canvas Bag"
        ],
        [
          "$120 to $130",
          "TETON Deer Hunter Canvas"
        ]
      ]
    }
  },
  {
    "subheading": "Canvas rectangular vs mummy",
    "cards": [
      {
        "label": "Canvas rectangular",
        "text": "The Coleman Heritage Big & Tall, Stansport Grizzly, AGEMORE Canvas Bag and TETON Deer Hunter Canvas give room and deep warmth but weigh 5 to 6 pounds of fill."
      },
      {
        "label": "Mummy",
        "text": "The Bessport Mummy Bag keeps heat in a smaller shape, with a 15 to 45F range."
      }
    ],
    "note": "Choose the Coleman Heritage Big & Tall for a winter car camp and the Bessport Mummy Bag for lighter trips."
  },
  {
    "subheading": "By price tier",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $50",
          "Bessport Mummy Bag"
        ],
        [
          "About $102",
          "Coleman Heritage Big & Tall"
        ],
        [
          "About $111",
          "Stansport Grizzly"
        ],
        [
          "About $114",
          "AGEMORE Canvas Bag"
        ],
        [
          "About $130",
          "TETON Deer Hunter Canvas"
        ]
      ]
    }
  },
  {
    "subheading": "For tall campers specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a stated length over 84 inches and a width of 39 inches or more."
      },
      {
        "label": "In this comparison",
        "text": "The Coleman Heritage Big & Tall fits to 6 feet 7 inches at 84 inches, and the AGEMORE Canvas Bag measures 94.5 inches."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you camp below freezing: the Stansport Grizzly offers -10F with 6 pounds of fill, and the TETON Deer Hunter Canvas adds a hood and a canvas shell."
      },
      {
        "label": "Save if",
        "text": "Save if your nights stay above 20F: the Bessport Mummy Bag is about $50 and lighter, and the Coleman Heritage Big & Tall is the cheaper heavy bag."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Comfort vs limit rating",
    "explanation": "A sleeping bag's rated temperature is often the lowest temperature at which an average sleeper survives, not stays comfortable. A bag rated 0F may feel comfortable only near 20F. Look in the product details for whether the figure is a comfort or a limit rating, and buy a bag rated 10 to 15 degrees colder than the lowest night you expect."
  },
  {
    "criterion": "Fill weight",
    "explanation": "Pounds of insulation tell you more than a marketing temperature number. The Stansport Grizzly packs 6 pounds of Poly-Therm, the Coleman Heritage 5 pounds of Holofill 808, and the Bessport far less, which is why it is a three-season bag. Heavier fill means warmer at the cost of carry weight, so compare pounds of fill across bags, and look for it in the bullet points."
  },
  {
    "criterion": "Length and width for your frame",
    "explanation": "A bag too short squashes the foot box and too narrow compresses the insulation at the shoulders. The Coleman Heritage Big & Tall fits to 6 feet 7 inches and the AGEMORE measures 94.5 inches. Match the stated length to your height plus 6 inches."
  },
  {
    "criterion": "Shell material and care",
    "explanation": "Canvas shells shed damp and resist snags and abrasion, which is why hunters like them, but they weigh more and dry slowly after a wet night. Polyester and ripstop shells are lighter and dry fast. Check whether the cover is machine washable, since a heavy bag you cannot wash will pick up odor and lose loft after a few seasons of use."
  },
  {
    "criterion": "Mummy vs rectangular",
    "explanation": "A mummy cut tapers toward the feet, which traps heat in less space and saves weight, so it is the warmer choice per pound. A rectangular bag gives room to roll over and often unzips into a blanket, but its extra air space takes more body heat to warm. Pick by how much you move at night and how far you carry the bag."
  }
];

export const faq = [
  {
    "q": "What does the temperature rating really mean?",
    "a": "Most ratings describe the lowest temperature at which an average sleeper stays alive, not warm. A 10F bag like the Coleman Heritage Big & Tall is comfortable much higher. Add a liner and a pad rated for the same cold."
  },
  {
    "q": "What do campers get wrong about heavy bags?",
    "a": "They trust the number in the product title. The AGEMORE Canvas Bag says 0 degree in the title, yet its details state use down to 14F, so the details are the truth. Always read the temperature in the bullet points, and treat any rating as a limit, not a comfort figure."
  },
  {
    "q": "Is the Stansport worth the same price as the Coleman?",
    "a": "If you camp below 10F, yes. The Stansport Grizzly has a -10F rating and 6 pounds of fill that stays warm when damp. For milder winter nights, the Coleman Heritage Big & Tall costs a few dollars less, fits taller sleepers and goes in the washing machine."
  },
  {
    "q": "How do I stay warm in a heavy bag?",
    "a": "Use an insulated pad under the bag, wear dry layers to bed and close the hood or draw the neck tight. Heavy bags still lose heat to the cold ground, so match your pad warmth to your bag. A fleece liner adds a little extra warmth on the coldest nights."
  },
  {
    "q": "How do I wash and store a canvas bag?",
    "a": "Follow the care tag on the bag. The Coleman Heritage Big & Tall is machine washable, while canvas shells often need a gentle cycle in a large front-loading washer. Air dry fully, then store the bag loose in a big sack, never compressed for months."
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
