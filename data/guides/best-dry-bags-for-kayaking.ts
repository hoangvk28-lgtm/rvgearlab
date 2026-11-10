export const guideSlug = "best-dry-bags-for-kayaking";
export const guideTitle = "6 Best Dry Bags For Kayaking in 2026";
export const metaTitle = "Best Dry Bags For Kayaking in 2026";
export const metaDescription = "Best dry bags for kayaking: six roll-top bags from a 3-pack to a 5-pack and a 20L PVC bag, compared on seam type, sizes and carry options.";
export const mainKeyword = "best dry bags for kayaking";
export const introParagraphs = [
  "On a kayak the dry bag is the only thing between your phone, spare layers and the river. A bag with welded seams and a firm roll-top will survive a splash, while a thin, stitched one will not survive a capsize.",
  "These six cover single bags, multi-bag sets and a backpack-style option. They are ordered by how well they protect gear and how easy they make packing a kayak hatch."
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
    "id": "best-dry-bags-for-kayaking-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Earth Pak 20L Waterproof Dry Bag",
    "price": "$24.75",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KVXX3qwoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B06XD2N14J?tag=rvgearlab-20",
    "description": "The Earth Pak is a 20L roll-top bag made of abrasion-resistant 500D PVC and listed as marine-ready for kayaking, paddleboarding, rafting and canoeing. It includes an IPX8 certified waterproof phone case, and bags at 10L and 20L include a 24 to 42 inch adjustable shoulder strap.\n\nIt is the sturdiest bag in this set and the one that comes with a phone case, which the Unigear and Frelaxy do not. The size range runs from 5L to 55L, so you can match the bag to your hatch.\n\nIt fits paddlers who want one tough bag for overnight gear. The strap makes portaging easier.",
    "specs": [
      "20L, 500D PVC roll-top",
      "IPX8 phone case included",
      "Adjustable shoulder strap"
    ],
    "pros": [
      "Tough 500D PVC fabric",
      "Includes IPX8 phone case",
      "Adjustable shoulder strap",
      "Sizes from 5L to 55L"
    ],
    "cons": [
      "Heavier than ripstop bags",
      "Costs more than most packs"
    ],
    "bestFor": "Overnight kayak trips",
    "take": "A rugged marine bag with a phone case included. It stays dry through rough water.",
    "catch": "It is heavier than ripstop sets."
  },
  {
    "id": "best-dry-bags-for-kayaking-2",
    "rank": 2,
    "badge": "Best Budget Welded",
    "name": "Unigear Dry Bag Waterproof",
    "price": "$6.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41W4xez1ZIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07SYPGNWY?tag=rvgearlab-20",
    "description": "The Unigear bag is made from stiff 500D PVC with fully welded seams made by high-frequency technology and a roll-top closure. It floats and resists tearing and abrasion.\n\nIt matches the Earth Pak on fabric weight and seam welding at a fraction of the price. It is more basic, with no phone case or extra straps.\n\nIt fits paddlers on a budget who want a tough, floating bag. It suits kayaking, boating, fishing and camping.",
    "specs": [
      "500D PVC, welded seams",
      "Roll-top closure",
      "Floats on water"
    ],
    "pros": [
      "Fully welded seams",
      "500D PVC resists tears",
      "Floats if dropped",
      "Lowest price here"
    ],
    "cons": [
      "No phone case or strap included",
      "Stiff fabric is hard to pack"
    ],
    "bestFor": "Budget paddlers",
    "take": "The cheapest welded PVC bag. A good way to start kayaking.",
    "catch": "It is bare-bones."
  },
  {
    "id": "best-dry-bags-for-kayaking-3",
    "rank": 3,
    "badge": "Best Organizing Set",
    "name": "Frelaxy Dry Bag 5 Pack",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tbddTkGWS._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B095K6PQ1T?tag=rvgearlab-20",
    "description": "The Frelaxy set has five ultralight dry sacks in 3L, 5L, 10L, 15L and 20L, each in a different color. They use waterproof polyester with a fully taped seam and roll-top closure, and weigh from 35g to 60g each.\n\nThe color-coded sizes make it easy to sort gear in a hatch, which the single-bag picks cannot do. They have a rectangular base for packing and D-rings to clip.\n\nIt fits paddlers who want to separate clothes, food and electronics. The ultralight weight suits backpacking too.",
    "specs": [
      "Five bags, 3L to 20L",
      "210T polyester, taped seams",
      "35g to 60g each"
    ],
    "pros": [
      "Five color-coded sizes",
      "Fully taped seams",
      "35g to 60g per bag",
      "D-rings for clipping"
    ],
    "cons": [
      "Not as rugged as PVC",
      "Lower fabric weight"
    ],
    "bestFor": "Sorting gear in a hatch",
    "take": "Five bags for the price of one. The best way to organize a kayak.",
    "catch": "Thin polyester is not as tough as PVC."
  },
  {
    "id": "best-dry-bags-for-kayaking-4",
    "rank": 4,
    "badge": "Best Starter Set",
    "name": "Pimoys Dry Bag Waterproof 3 Pack Lightweight Dry Sack",
    "price": "$12.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418xPqShs+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GT4DZJHP?tag=rvgearlab-20",
    "description": "The Pimoys set has three ultralight dry bags in 6L, 10L and 20L, made of 210T ripstop polyester with an internal waterproof coating and double stitching. A rectangular base stacks neatly and a roll-top seals the bag.\n\nIt is smaller than the Frelaxy set and costs less. The buckle closure is simple to use, and the bags fold flat for storage.\n\nIt fits day paddlers who want three sizes at a low price. The roll-top is simple to operate in cold wet hands.",
    "specs": [
      "6L, 10L and 20L set",
      "210T ripstop with waterproof coating",
      "Rectangular base, roll-top"
    ],
    "pros": [
      "Three sizes in one set",
      "Ripstop polyester fabric",
      "Rectangular base stacks well",
      "Folds flat for storage"
    ],
    "cons": [
      "Stitched seams, not welded",
      "Coating can wear over time"
    ],
    "bestFor": "Day paddling",
    "take": "A good low-price set of three bags. Fine for day trips.",
    "catch": "Stitched seams are less watertight."
  },
  {
    "id": "best-dry-bags-for-kayaking-5",
    "rank": 5,
    "badge": "Best Phone Pouch Bag",
    "name": "TILYMOL Waterproof Dry Bag for Kayaking",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xuoS-uXbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWDG7LWJ?tag=rvgearlab-20",
    "description": "The TILYMOL is a 5L transparent dry bag with seamless welding and a roll-top closure. It includes a floating phone pouch with an emergency whistle and a removable adjustable strap.\n\nThe clear PVC lets you see contents without unrolling, and a reinforced bottom resists abrasion. It is smaller than the Earth Pak and aimed at small valuables.\n\nIt fits paddleboarders and kayakers who want phone, keys and wallet in one view. The whistle adds a small safety tool.",
    "specs": [
      "5L transparent PVC",
      "Seamless welded, roll-top",
      "Floating phone pouch with whistle"
    ],
    "pros": [
      "Transparent so you see contents",
      "Floating phone pouch with whistle",
      "Seamless welded construction",
      "Removable adjustable strap"
    ],
    "cons": [
      "Only 5L",
      "Clear PVC shows scratches"
    ],
    "bestFor": "Phone and valuables",
    "take": "A small clear bag with a floating phone pouch. Ideal for a day paddle.",
    "catch": "It is too small for spare clothes."
  },
  {
    "id": "best-dry-bags-for-kayaking-6",
    "rank": 6,
    "badge": "Best Backpack Style",
    "name": "HEETA Dry Bag Waterproof Backpack with Phone Case",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Z-OyeBHpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07PM1R4N8?tag=rvgearlab-20",
    "description": "The HEETA is a 5L transparent dry bag backpack made of PVC that is 0.6 mm thick on the bottom and 0.3 mm on the sides. It has adjustable shoulder straps, a side handle and a phone case.\n\nIt is the only backpack style in this group, which makes it comfortable on a long carry from car to put-in. It comes in sizes from 5L to 40L.\n\nIt fits paddlers and beachgoers who carry gear on foot. The side handle gives a second way to carry.",
    "specs": [
      "5L transparent PVC backpack",
      "0.6 mm base, 0.3 mm sides",
      "Phone case and side handle"
    ],
    "pros": [
      "Backpack straps for carrying",
      "Thick PVC base resists wear",
      "Phone case included",
      "Side handle for hand carry"
    ],
    "cons": [
      "Only 5L in this listing",
      "PVC can stiffen in cold"
    ],
    "bestFor": "Carrying on foot",
    "take": "The only backpack-style bag here. Handy for walks to the water.",
    "catch": "It is small for overnight gear."
  }
];

export const howWeEvaluated = [
  {
    "title": "Seam construction",
    "description": "Welded or taped."
  },
  {
    "title": "Fabric",
    "description": "PVC or polyester."
  },
  {
    "title": "Size",
    "description": "Liters."
  },
  {
    "title": "Closure",
    "description": "Roll-top."
  },
  {
    "title": "Carry",
    "description": "Straps."
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
    "subheading": "By Trip Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Overnight kayak camping",
          "Earth Pak 20L Roll-Top",
          "500D PVC and strap"
        ],
        [
          "Budget welded bag",
          "Unigear Floating PVC",
          "Welded seams"
        ],
        [
          "Sorting gear",
          "Frelaxy 5 Pack",
          "Five color-coded sizes"
        ],
        [
          "Day paddling set",
          "Pimoys 3 Pack",
          "Three sizes"
        ],
        [
          "Phone and keys",
          "TILYMOL 5L Clear",
          "Floating phone pouch"
        ],
        [
          "Walk to the water",
          "HEETA 5L Backpack",
          "Backpack straps"
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
          "$0 to $10",
          "Unigear Floating PVC or TILYMOL 5L Clear"
        ],
        [
          "$10 to $20",
          "Pimoys 3 Pack or HEETA 5L Backpack"
        ],
        [
          "$20 to $30",
          "Earth Pak 20L Roll-Top or Frelaxy 5 Pack"
        ]
      ]
    }
  },
  {
    "subheading": "PVC vs Ripstop Polyester",
    "cards": [
      {
        "label": "PVC",
        "text": "Tougher and floats well, but heavier. Earth Pak 20L Roll-Top, Unigear Floating PVC, TILYMOL 5L Clear and HEETA 5L Backpack."
      },
      {
        "label": "Ripstop Polyester",
        "text": "Light and compact. Frelaxy 5 Pack and Pimoys 3 Pack."
      }
    ],
    "note": "Most kayakers should choose Earth Pak 20L Roll-Top for the main bag."
  },
  {
    "subheading": "By Packing Style",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Single big bag",
          "Earth Pak 20L Roll-Top"
        ],
        [
          "Multi-bag system",
          "Frelaxy 5 Pack"
        ],
        [
          "Valuables only",
          "TILYMOL 5L Clear"
        ],
        [
          "Backpack carry",
          "HEETA 5L Backpack"
        ]
      ]
    }
  },
  {
    "subheading": "For Kayak Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Welded seams, a 20L bag for clothes and a few smaller sacks for sorting."
      },
      {
        "label": "In this comparison",
        "text": "Earth Pak 20L Roll-Top is the main bag, and Frelaxy 5 Pack adds small sacks."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Earth Pak 20L Roll-Top if you paddle in rough water."
      },
      {
        "label": "Save if",
        "text": "Save with Unigear Floating PVC or Pimoys 3 Pack on calm lakes."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Seam type",
    "explanation": "Welded seams fuse the fabric so there are no needle holes. Taped seams are sealed with a strip, while stitched seams leak under pressure. Check for welded or taped wording."
  },
  {
    "criterion": "Fabric weight",
    "explanation": "500D PVC is stiff and abrasion resistant, while 210T ripstop polyester is light and packable. PVC suits rough gear and polyester suits weight savings. Check the denier or thickness."
  },
  {
    "criterion": "Bag sizes",
    "explanation": "A 5L bag holds a phone, wallet and snack, while 20L holds a jacket and lunch. A set of sizes lets you separate gear. Match sizes to your hatch."
  },
  {
    "criterion": "Closure and roll count",
    "explanation": "A roll-top should be folded at least three times and buckled. Fewer rolls leak. Look for a buckle and a roll count in the instructions."
  },
  {
    "criterion": "Floating and visibility",
    "explanation": "A bag that floats is easier to recover after a capsize. A transparent window lets you find items quickly. Check the product description."
  },
  {
    "criterion": "Carry options",
    "explanation": "A shoulder strap helps portage, and D-rings let you clip to a deck line. A bag with no strap is awkward on a long carry. Check for straps and clip points."
  }
];

export const faq = [
  {
    "q": "Are dry bags fully waterproof?",
    "a": "They resist water when rolled correctly, but few are rated for long submersion. Treat them as splash-proof."
  },
  {
    "q": "How do I roll a dry bag correctly?",
    "a": "Squeeze out air, fold the top down three times and buckle the ends. Pimoys 3 Pack lists two to three folds."
  },
  {
    "q": "Is a welded seam better than a stitched seam?",
    "a": "Yes, since welding leaves no holes. Unigear Floating PVC has fully welded seams."
  },
  {
    "q": "How do I pack a kayak hatch with dry bags?",
    "a": "Put heavy items low and in the center, small bags in gaps. Frelaxy 5 Pack helps with sorting."
  },
  {
    "q": "How do I clean and store a dry bag?",
    "a": "Rinse with fresh water, dry fully and store loosely rolled. Do not fold sharply."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Towels",
    "href": "/campsite-gear/best-camping-towels"
  },
  {
    "title": "Best Dry Bags",
    "href": "/campsite-gear/best-dry-bags"
  },
  {
    "title": "Best Camping Lanterns And Camping Lights",
    "href": "/campsite-gear/best-camping-lanterns-and-camping-lights"
  },
  {
    "title": "Best Headlamps",
    "href": "/campsite-gear/best-headlamps"
  }
];
