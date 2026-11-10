export const guideSlug = "best-camping-pillows-under-30";
export const guideTitle = "5 Best Camping Pillows Under 30 in 2026";
export const metaTitle = "Best Camping Pillows Under 30 in 2026";
export const metaDescription = "Best camping pillows under $30: five inflatable, foam and stuffed pillows compared on thickness, weight and what $30 buys over a $15 pillow.";
export const mainKeyword = "best camping pillows under 30";
export const introParagraphs = [
  "Thirty dollars barely moves the camping pillow market past twenty, since most good pillows below $20 already do the job. What the extra ten dollars buys is a thicker memory foam pillow for side sleepers, and the rest of this list overlaps with cheaper picks on purpose.",
  "The five here run from about $15 to $29, and the guide asks whether the stretch above $20 earns its keep. The top spot goes to the one pillow that clearly does, and the others are placed by weight, cleaning and how they feel."
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
    "id": "best-camping-pillows-under-30-1",
    "rank": 1,
    "badge": "Best Value Under $30",
    "name": "IWVE Thick Camping Memory Foam Pillow",
    "price": "$28.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Soc1nNy5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FXWYC51B?tag=rvgearlab-amz-20",
    "description": "The IWVE uses 4 inches of memory foam in a pillow weighing 400 grams, with a cover that comes off for washing in either season. The shape cradles the neck and doubles as lumbar support.\n\nIt costs about $29, nearly twice the Hikenture Inflatable, and it is the only pick with real memory foam at this thickness. The stated 4 inch height suits side sleepers better than the 1 MIDDLE ONE Foam Pillow.\n\nIt suits side sleepers wanting a thick, supportive pillow without the premium price. Use it as a back cushion on long drives.",
    "specs": [
      "10 cm (4 inch) memory foam",
      "400 g, packs to 25 cm",
      "Removable dual-season cover"
    ],
    "pros": [
      "Stated 4 inch thickness for side sleepers",
      "Compresses to half its size",
      "Removable dual-season cover",
      "Doubles as a lumbar cushion"
    ],
    "cons": [
      "About 14 ounces, heavier than inflatables",
      "Memory foam sleeps warm"
    ],
    "bestFor": "Side sleepers",
    "take": "The one pillow where the extra money buys a real upgrade.",
    "catch": "It weighs 14 ounces, so it suits car camping better than backpacking."
  },
  {
    "id": "best-camping-pillows-under-30-2",
    "rank": 2,
    "badge": "Best Ultralight Inflatable",
    "name": "Gear Doctors 3.5oz Compact Ultralight Inflatable Camping Pillow",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4125Lv8vjXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0833T8KMZ?tag=rvgearlab-amz-20",
    "description": "The Gear Doctors is a 3.5 oz inflatable that packs to a soda-can 2.4 by 4.7 inches and inflates in about three breaths to 12 by 17 inches, 4.3 inches thick. It has an anti-leak valve and hexagon-pattern TPU fabric.\n\nIt costs about $15, half the IWVE Memory Foam, and it weighs about a tenth as much. It gives less support for a restless side sleeper than foam.\n\nIt suits backpackers and thru-hikers who count every ounce. A 4.3 inch loft is enough for most back sleepers.",
    "specs": [
      "3.5 oz, packs 2.4 x 4.7 in",
      "Inflates to 12 x 17 x 4.3 in",
      "Anti-leak valve, TPU fabric"
    ],
    "pros": [
      "Packs to a soda-can size",
      "Thick 4.3 inch loft for the weight",
      "Inflates in about three breaths",
      "Anti-leak valve system"
    ],
    "cons": [
      "Needs inflating every night",
      "Inflatable feels bouncy"
    ],
    "bestFor": "Ultralight backpacking",
    "take": "The lightest and cheapest pillow worth buying.",
    "catch": "A leak ruins the night, so carry a repair patch."
  },
  {
    "id": "best-camping-pillows-under-30-3",
    "rank": 3,
    "badge": "Best Inflatable With Cover",
    "name": "Hikenture Camping Pillow with Removable Cover",
    "price": "$19.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410WML9OwGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0896WCB5D?tag=rvgearlab-amz-20",
    "description": "The Hikenture is an ergonomic ultralight inflatable with a removable, washable cotton cover and a one-click valve. Its leak-resistant build adds a layer beneath the fabric, and it supports back and side sleepers.\n\nIt costs about $20, a third less than the IWVE Memory Foam, and the soft cover feels better on skin than the bare TPU on the Gear Doctors. It weighs more than the Gear Doctors.\n\nIt suits campers who like an inflatable and want a cover. The cover can go in the washing machine.",
    "specs": [
      "Ergonomic ultralight inflatable",
      "Removable washable cover",
      "One-click valve"
    ],
    "pros": [
      "Ergonomic shape supports the neck",
      "Soft cover is machine washable",
      "One-click valve inflates fast",
      "Leak-resistant design"
    ],
    "cons": [
      "Heavier than the Gear Doctors",
      "Still needs inflating"
    ],
    "bestFor": "Inflatable fans who want comfort",
    "take": "A comfortable inflatable at a low price.",
    "catch": "It is bulkier than the Gear Doctors."
  },
  {
    "id": "best-camping-pillows-under-30-4",
    "rank": 4,
    "badge": "Best Shredded Foam",
    "name": "1 MIDDLE ONE Travel Pillow for Sleeping Camping",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51YIkqa30eL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DZHLNM69?tag=rvgearlab-amz-20",
    "description": "The 1 MIDDLE ONE Foam Pillow is a 15.5 by 12 inch pillow filled with shredded memory foam mixed with polyester fiber, in a breathable microfiber cover with a travel bag. Machine-washable cover and a kids' size are offered.\n\nIt costs about $18, $11 less than the IWVE Memory Foam, and the shredded fill lets you press it flatter or fluff it up. It is smaller than the IWVE and not as thick.\n\nIt suits campers who want a real-pillow feel in a small package. Let it relax for 48 hours after unpacking.",
    "specs": [
      "15.5 x 12 inch shredded foam",
      "Breathable microfiber cover",
      "Travel bag included"
    ],
    "pros": [
      "Feels like a real pillow",
      "Fill can be pressed flatter",
      "Breathable microfiber cover",
      "Travel bag included"
    ],
    "cons": [
      "Lower loft than the IWVE",
      "Needs 48 hours to expand"
    ],
    "bestFor": "Everyday camp comfort",
    "take": "A small pillow with a home feel.",
    "catch": "It takes a day or two to fluff up."
  },
  {
    "id": "best-camping-pillows-under-30-5",
    "rank": 5,
    "badge": "Best Budget Stuffed Pillow",
    "name": "TETON Sports Camp Pillow; Great for Travel",
    "price": "$16.46",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31xXXCkVR+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00DDP3B1Y?tag=rvgearlab-amz-20",
    "description": "The TETON Camp Pillow springs back to full size on its own once unpacked and ships with a pillowcase that goes in the wash. Its fabric matches the lining of TETON sleeping bags.\n\nIt costs about $16, roughly half the IWVE Memory Foam, and it needs no inflating. It is softer and less supportive than foam.\n\nIt suits car campers, kids and people who want a plain pillow. It washes with its case.",
    "specs": [
      "Self-lofting soft pillow",
      "Washable pillow and case",
      "Packs down tight"
    ],
    "pros": [
      "Lofts on its own",
      "Washes with its pillowcase",
      "Soft fill feels like home",
      "Packs small for its type"
    ],
    "cons": [
      "Less support than foam",
      "Bulkier than an inflatable"
    ],
    "bestFor": "Car camping and kids",
    "take": "A cheap, no-fuss pillow.",
    "catch": "Back sleepers may find it too soft."
  }
];

export const howWeEvaluated = [
  {
    "title": "Thickness",
    "description": "Loft in inches was compared for side and back sleepers."
  },
  {
    "title": "Weight",
    "description": "Ounces and grams were compared."
  },
  {
    "title": "Pack size",
    "description": "Packed dimensions were compared."
  },
  {
    "title": "Covers",
    "description": "Washable covers were credited."
  },
  {
    "title": "Price against the cap",
    "description": "All five are under $30."
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
    "subheading": "By sleeper",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Side sleeper at the car",
          "IWVE Memory Foam",
          "4 inches of memory foam."
        ],
        [
          "Ultralight backpacker",
          "Gear Doctors Ultralight",
          "3.5 oz and soda-can size."
        ],
        [
          "Inflatable with a cover",
          "Hikenture Inflatable",
          "Washable cotton cover."
        ],
        [
          "Real-pillow feel",
          "1 MIDDLE ONE Foam Pillow",
          "Shredded foam fill."
        ],
        [
          "Lowest-cost soft pillow",
          "TETON Camp Pillow",
          "About $16 and self-lofting."
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
          "$10 to $20",
          "Gear Doctors Ultralight or TETON Camp Pillow"
        ],
        [
          "$10 to $20",
          "1 MIDDLE ONE Foam Pillow or Hikenture Inflatable"
        ],
        [
          "$20 to $30",
          "IWVE Memory Foam"
        ]
      ]
    }
  },
  {
    "subheading": "Inflatable vs foam",
    "cards": [
      {
        "label": "Inflatable",
        "text": "The Gear Doctors Ultralight and Hikenture Inflatable pack small and weigh a few ounces."
      },
      {
        "label": "Foam or stuffed",
        "text": "The IWVE Memory Foam, 1 MIDDLE ONE Foam Pillow and TETON Camp Pillow cannot leak but weigh more."
      }
    ],
    "note": "Choose the Gear Doctors Ultralight for backpacking and the IWVE Memory Foam for side sleeping."
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
          "About $15",
          "Gear Doctors Ultralight"
        ],
        [
          "About $16",
          "TETON Camp Pillow"
        ],
        [
          "About $18",
          "1 MIDDLE ONE Foam Pillow"
        ],
        [
          "About $20",
          "Hikenture Inflatable"
        ],
        [
          "About $29",
          "IWVE Memory Foam"
        ]
      ]
    }
  },
  {
    "subheading": "For side sleepers specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a stated loft of 4 inches or more and a firm fill."
      },
      {
        "label": "In this comparison",
        "text": "The IWVE Memory Foam states 4 inches, and the Gear Doctors Ultralight inflates to 4.3 inches."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you sleep on your side: the IWVE Memory Foam adds a stated 4 inch loft, and the Hikenture Inflatable adds a washable cover."
      },
      {
        "label": "Save if",
        "text": "Save if you back sleep or backpack: the Gear Doctors Ultralight is about $15 and weighs 3.5 ounces."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Loft for your sleep position",
    "explanation": "Side sleepers need about 4 inches of loft to keep the neck level, while back sleepers do well with 3 inches. A pillow that is too thin lets your neck bend, which causes a sore neck. Look for the stated loft in inches, not just the size."
  },
  {
    "criterion": "Foam vs inflatable",
    "explanation": "An inflatable pillow weighs 3.5 to 5 ounces and packs to the size of a soda can, but it bounces, feels cold and can leak overnight. A foam pillow weighs 12 to 14 ounces and never fails, though it takes more pack space and sleeps warmer. Choose inflatable if you carry the pillow on your back and foam if you drive to camp."
  },
  {
    "criterion": "Removable cover",
    "explanation": "A cover you can machine wash keeps a pillow clean after sweaty nights, which a sealed inflatable cannot match as easily. Cotton and microfiber covers feel better on the cheek than bare TPU and add a little warmth in cool weather. Check the product details for a removable or washable cover, and wash it after every few trips."
  },
  {
    "criterion": "Valve and leak protection",
    "explanation": "An anti-leak valve keeps an inflatable firm all night, and a one-click valve makes inflating quicker with cold fingers. A cheap valve leaks slowly and wakes you at 3 a.m. with your head on the ground. Look for a named valve system and a repair note, and carry a small patch for the trail."
  },
  {
    "criterion": "Pack size",
    "explanation": "A soda-can pillow slips into a pocket, while a 25 cm foam pillow takes up the space of a water bottle. If you carry the pillow on your back, the packed size and weight decide whether it makes the cut. Check the packed dimensions in the specs and compare them with your pack's free space."
  }
];

export const faq = [
  {
    "q": "Is a $29 camping pillow worth it over a $15 one?",
    "a": "For side sleepers, yes. The IWVE Memory Foam gives a stated 4 inch loft that stays firm all night, and the 4.3 inch loft of the Gear Doctors Ultralight can compress under a heavy head. For back sleepers or backpackers, the Gear Doctors Ultralight is nearly as comfortable at about half the price."
  },
  {
    "q": "What do campers get wrong about camping pillows?",
    "a": "They pick the lightest pillow and then sleep badly. A thin or leaky pillow tires your neck, and one bad night can ruin a trip. Test the pillow at home on your usual sleeping position, and carry a patch for inflatables."
  },
  {
    "q": "Can I stuff clothes into a stuff sack instead?",
    "a": "Yes, and many campers do. A clothing pillow is free, but it shifts around and feels lumpy, and wet clothes make a cold pillow. A pillow such as the Gear Doctors Ultralight weighs only 3.5 ounces, so it is worth carrying."
  },
  {
    "q": "How do I inflate and adjust an inflatable pillow?",
    "a": "Open the valve, blow three or four breaths, close it and test the height with your head. Release a little air to soften it if it feels too firm. The Hikenture Inflatable has a one-click valve that makes this easy with cold hands."
  },
  {
    "q": "How do I clean a camping pillow?",
    "a": "Wash removable covers on a gentle cycle and air dry them. Wipe inflatables with a damp cloth and store them with the valve open. Let foam pillows relax in a dry place between trips so they keep their loft."
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
