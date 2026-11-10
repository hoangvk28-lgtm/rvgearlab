export const guideSlug = "best-dry-bags";
export const guideTitle = "5 Best Dry Bags in 2026";
export const metaTitle = "Best Dry Bags in 2026";
export const metaDescription = "Dry bags compared by material, size and carry style, from a 3-pack of roll-tops to a 500D PVC marine bag and a dry bag backpack with phone case.";
export const mainKeyword = "best dry bags";
export const introParagraphs = [
  "A dry bag keeps your sleeping bag, spare clothes and phone dry when a river, a rainstorm or a leaky canoe tests your gear. Roll-top closures and welded seams do most of the work, so build quality matters more than color.",
  "At RV Gear Lab, we compared these five dry bags by fabric, seam construction, size mix and carry options. They cover kayak trips, hiking and day outings, so match the bag to how wet your trip gets."
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
    "id": "best-dry-bags-1",
    "rank": 1,
    "badge": "Best Set for Organizing",
    "name": "Frelaxy Waterproof Dry Bag 3 Pack",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31KKLJUnjSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CHV5NQ81?tag=rvgearlab-20",
    "description": "Frelaxy supplies three dry bags in 5L, 15L and 25L sizes. They use 210T diamond ripstop polyester with a waterproof coating and a sturdy roll-top closure.\n\nThe three sizes let you separate food, clothes and a sleeping bag, which a single bag cannot do. It is lighter than the 500D PVC Unigear and Earth Pak.\n\nCampers and hikers who like organized packs will love the range of sizes. Each bag rolls flat when empty.",
    "specs": [
      "5L, 15L and 25L set",
      "210T diamond ripstop",
      "Roll-top closure"
    ],
    "pros": [
      "Three sizes in one set",
      "Lightweight ripstop fabric",
      "Roll-top closure",
      "Fair price per bag"
    ],
    "cons": [
      "Thinner than PVC bags",
      "Not for submerging"
    ],
    "bestFor": "Organized packing",
    "take": "A flexible set for camping and hiking.",
    "catch": "Ripstop is lighter but less rugged than PVC."
  },
  {
    "id": "best-dry-bags-2",
    "rank": 2,
    "badge": "Best Marine Bag",
    "name": "Earth Pak 10L Waterproof Dry Bag",
    "price": "$20.79",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41n4a7widSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01GZCUCV8?tag=rvgearlab-20",
    "description": "Earth Pak 10L is a marine-grade roll-top dry sack made from abrasion-resistant 500D PVC. The 10L and 20L sizes include a 24 to 42 inch adjustable shoulder strap.\n\nIt is tougher than the ripstop bags and built for kayaking, boating, paddleboarding and rafting. The strap makes it easier to carry across a portage.\n\nPaddlers and boaters will like the rugged build. It handles spray, rain and the occasional dunk.",
    "specs": [
      "10L roll-top dry sack",
      "500D abrasion-resistant PVC",
      "Adjustable shoulder strap"
    ],
    "pros": [
      "Rugged 500D PVC",
      "Roll-top seal",
      "Adjustable shoulder strap",
      "Trusted on the water"
    ],
    "cons": [
      "Heavier than ripstop",
      "Stiffer when packed"
    ],
    "bestFor": "Paddling trips",
    "take": "The tough bag for wet adventures.",
    "catch": "PVC is bulkier to pack."
  },
  {
    "id": "best-dry-bags-3",
    "rank": 3,
    "badge": "Best Budget PVC Bag",
    "name": "Unigear Dry Bag Waterproof",
    "price": "$6.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41W4xez1ZIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07SYPGNWY?tag=rvgearlab-20",
    "description": "Unigear is a waterproof roll-top bag made of stiff 500D PVC with fully welded seams. It floats and resists leaks and tearing.\n\nIt offers rugged PVC for far less than the Earth Pak and has a similar welded design. It stays on the surface if dropped in water.\n\nAnglers and kayakers on a budget will like it. It fits easily under a canoe thwart.",
    "specs": [
      "500D PVC roll-top bag",
      "Fully welded seams",
      "Floats on water"
    ],
    "pros": [
      "Welded seams resist leaks",
      "Floats on water",
      "Rugged PVC",
      "Lowest price here"
    ],
    "cons": [
      "Bare-bones features",
      "Stiff material"
    ],
    "bestFor": "Budget paddlers",
    "take": "The cheapest rugged option.",
    "catch": "No shoulder strap listed."
  },
  {
    "id": "best-dry-bags-4",
    "rank": 4,
    "badge": "Best Small Items Set",
    "name": "Pimoys Dry Bag",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415cQB1A-0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08HPQG3BZ?tag=rvgearlab-20",
    "description": "Pimoys includes six ultralight dry sacks in 1.5L, 2.5L, 3L, 3.5L, 5L and 8L sizes. They use polyester with a PU coating and seams sealed with glue, plus a roll-up closure.\n\nThe small sizes handle phones, keys and snacks, which the larger Frelaxy bags cannot. They are very light.\n\nDay hikers and kayakers who carry small gear will like the variety. They stuff into corners of a pack.",
    "specs": [
      "Six sizes, 1.5L to 8L",
      "Polyester with PU coating",
      "Glued seams, roll-up closure"
    ],
    "pros": [
      "Six sizes included",
      "Ultralight fabric",
      "Great for small items",
      "Low price"
    ],
    "cons": [
      "Thin fabric",
      "Not for heavy gear"
    ],
    "bestFor": "Small gear",
    "take": "A set for keys, phones and snacks.",
    "catch": "Fabric is thin."
  },
  {
    "id": "best-dry-bags-5",
    "rank": 5,
    "badge": "Best Dry Bag Backpack",
    "name": "HEETA Dry Bag Waterproof Backpack with Phone Case",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Z-OyeBHpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07PM1R4N8?tag=rvgearlab-20",
    "description": "HEETA is a 5L waterproof dry bag backpack with a phone case in transparent black. It uses wear-resistant PVC that is 0.6 mm thick on the bottom and 0.3 mm on the sides.\n\nThe shoulder straps and side handle make it a true backpack, which no other pick here is. Seamless construction helps keep water out.\n\nBeach goers and boaters who want to carry gear hands-free will like it. The phone case keeps navigation in reach.",
    "specs": [
      "5L dry bag backpack",
      "0.6 mm base, 0.3 mm sides",
      "Phone case included"
    ],
    "pros": [
      "Backpack straps and handle",
      "Phone case included",
      "Seamless build",
      "Wear-resistant PVC"
    ],
    "cons": [
      "Small 5L capacity",
      "Not for large gear"
    ],
    "bestFor": "Water outings",
    "take": "A small waterproof pack for day trips.",
    "catch": "Only fits a few items."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fabric",
    "description": "Compared ripstop, PU-coated polyester and PVC."
  },
  {
    "title": "Seams",
    "description": "Looked at welded and glued seams."
  },
  {
    "title": "Size mix",
    "description": "Considered liters and set contents."
  },
  {
    "title": "Carry",
    "description": "Compared straps and handles."
  },
  {
    "title": "Price",
    "description": "Weighed cost per bag."
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
    "subheading": "By Trip",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Kayak or raft",
          "Earth Pak 10L",
          "500D PVC."
        ],
        [
          "Budget paddling",
          "Unigear Dry Bag",
          "Welded seams."
        ],
        [
          "Camping organization",
          "Frelaxy 3-Pack",
          "Three sizes."
        ],
        [
          "Small items",
          "Pimoys 6-Pack",
          "Six sizes."
        ],
        [
          "Beach hands-free",
          "HEETA Dry Backpack",
          "Backpack straps."
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
          "$0 to $20",
          "Unigear Dry Bag or Pimoys 6-Pack"
        ],
        [
          "$10 to $30",
          "HEETA Dry Backpack or Earth Pak 10L"
        ],
        [
          "$20 to $30",
          "Frelaxy 3-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "PVC vs Ripstop",
    "cards": [
      {
        "label": "PVC",
        "text": "Tougher and more waterproof but heavier. Earth Pak 10L, Unigear Dry Bag and HEETA Dry Backpack use PVC."
      },
      {
        "label": "Ripstop or polyester",
        "text": "Light and packable but less rugged. Frelaxy 3-Pack and Pimoys 6-Pack use these fabrics."
      }
    ],
    "note": "Most paddlers should default to Earth Pak 10L, and hikers to Frelaxy 3-Pack."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "If you want",
        "Recommended pick"
      ],
      "rows": [
        [
          "Shoulder strap",
          "Earth Pak 10L"
        ],
        [
          "Backpack straps",
          "HEETA Dry Backpack"
        ],
        [
          "Lowest price",
          "Unigear Dry Bag"
        ]
      ]
    }
  },
  {
    "subheading": "For Kayaking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "500D PVC with welded seams and a roll-top closure."
      },
      {
        "label": "In this comparison",
        "text": "Earth Pak 10L and Unigear Dry Bag both use 500D PVC."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Earth Pak 10L for ruggedness."
      },
      {
        "label": "Save if",
        "text": "Save with Unigear Dry Bag or Pimoys 6-Pack."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fabric type",
    "explanation": "PVC at 500D is tougher and heavier, while ripstop polyester is lighter and packs smaller. Choose by how rough your trip is. Check the fabric in the listing."
  },
  {
    "criterion": "Seam construction",
    "explanation": "Welded seams are fused with heat and leak less than stitched seams. Glued seams also work but may wear. Check whether seams are welded or sealed."
  },
  {
    "criterion": "Volume",
    "explanation": "A 5L bag holds a phone and a jacket, and 20L holds a sleeping bag. Pick sizes for your gear. Check the liters stated."
  },
  {
    "criterion": "Roll-top closure",
    "explanation": "Roll the top at least three times and snap it shut for a good seal. A loose roll can leak. Check the closure design."
  },
  {
    "criterion": "Carry options",
    "explanation": "Shoulder straps or backpack straps help on portages. A bag without straps is awkward on a long carry. Check the strap details before buying."
  }
];

export const faq = [
  {
    "q": "What size dry bag do I need?",
    "a": "A 10L bag holds a jacket and small items, and 20L holds more. A sleeping bag needs 15L to 25L. Pick sizes for your gear."
  },
  {
    "q": "Are dry bags fully waterproof?",
    "a": "Most resist splashes and brief dunks if rolled properly. Do not rely on them for long submersion. Check the listing."
  },
  {
    "q": "Is PVC better than ripstop?",
    "a": "PVC is tougher, while ripstop is lighter. Match it to your trip."
  },
  {
    "q": "How do I close a dry bag?",
    "a": "Fold the top over at least three times and snap the buckle. Squeeze the air out first."
  },
  {
    "q": "How do I clean a dry bag?",
    "a": "Rinse with fresh water and dry open. Avoid harsh cleaners."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Towels",
    "href": "/campsite-gear/best-camping-towels"
  },
  {
    "title": "Best Camping Lanterns And Camping Lights",
    "href": "/campsite-gear/best-camping-lanterns-and-camping-lights"
  },
  {
    "title": "Best Headlamps",
    "href": "/campsite-gear/best-headlamps"
  },
  {
    "title": "Best Lantern",
    "href": "/campsite-gear/best-lantern"
  }
];
