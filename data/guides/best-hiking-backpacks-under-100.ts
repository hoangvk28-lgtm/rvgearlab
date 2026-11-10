export const guideSlug = "best-hiking-backpacks-under-100";
export const guideTitle = "5 Best Hiking Backpacks Under 100 in 2026";
export const metaTitle = "Best Hiking Backpacks Under 100 in 2026";
export const metaDescription = "Best hiking backpacks under $100: five 50L to 100L packs, including two internal-frame models, compared on suspension, capacity and weight.";
export const mainKeyword = "best hiking backpacks under 100";
export const introParagraphs = [
  "At $100 the first internal-frame hiking packs appear, and that frame is what separates a pack you can carry 25 pounds in from one that sags on your shoulders. The five here run from about $36 to $100 and span 50L to 100L.",
  "The ranking asks what the extra money over a $50 frameless pack buys: a frame, torso adjustment and a real hip belt. The top spot goes to the best-supported pack under the cap, and the oversized frameless packs are placed by their volume."
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
    "id": "best-hiking-backpacks-under-100-1",
    "rank": 1,
    "badge": "Best Value Under $100",
    "name": "Teton 55L Scout Internal Frame Backpack for Hiking",
    "price": "$95.86",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4192T9HVA1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09DQZBBFG?tag=rvgearlab-amz-20",
    "description": "The TETON Scout is a 55L internal frame pack with multi-position torso adjustment for medium and tall users, an open-cell foam lumbar pad with molded channels and a large sleeping bag compartment. It includes a rain cover, multi-directional compression straps and a hydration pocket.\n\nIt costs about $96, around $4 less than the Mardingtop 70L, and its torso adjustment makes it the best-fitting pack here. It holds 15 liters less than the Mardingtop and weighs less than the 100L packs.\n\nIt suits weekend backpackers who want a framed pack to carry 25 to 30 pounds. The molded lumbar channels improve airflow.",
    "specs": [
      "55L internal frame",
      "Multi-position torso adjustment",
      "Lumbar pad, rain cover"
    ],
    "pros": [
      "Torso fit adjusts for medium to tall users",
      "Molded lumbar channels aid comfort",
      "Sleeping bag compartment",
      "Rain cover included"
    ],
    "cons": [
      "Near the top of the budget",
      "Torso range is not given in numbers"
    ],
    "bestFor": "Weekend backpacking with a frame",
    "take": "The best-supported pack under $100, with real torso adjustment.",
    "catch": "Measure your torso, since the range is not printed."
  },
  {
    "id": "best-hiking-backpacks-under-100-2",
    "rank": 2,
    "badge": "Best Frame Capacity",
    "name": "Mardingtop 70L Internal Frame Backpack",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413ZwAmFKpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09YLZQ7XS?tag=rvgearlab-amz-20",
    "description": "The Mardingtop is a 70L internal frame pack in 600D polyester with YKK zippers and a rain cover. It has multi-position torso adjustment, a padded sternum strap and hip belt, a breathable mesh back and MOLLE webbing, with 4,272 cubic inches of space.\n\nIt costs about $100, the top of the budget and $4 more than the TETON 55L Scout, and it holds 15 liters more. It is tactical in style and bulkier than the TETON.\n\nIt suits hunters and long-trip hikers who need volume and a frame. The grid zipper bag and bladder compartment help organization.",
    "specs": [
      "70L internal frame",
      "Torso adjustment, MOLLE",
      "Rain cover, YKK zippers"
    ],
    "pros": [
      "70L with an internal frame",
      "Multi-position torso adjustment",
      "Water bladder compartment",
      "Rain cover included"
    ],
    "cons": [
      "Bulky tactical profile",
      "Costs the full budget"
    ],
    "bestFor": "Long trips with a frame",
    "take": "More volume with a frame than the TETON, at a similar price.",
    "catch": "It fits better to medium-to-tall torsos."
  },
  {
    "id": "best-hiking-backpacks-under-100-3",
    "rank": 3,
    "badge": "Best Lightweight Frameless",
    "name": "Loowoko 50L Hiking Backpack with Rain Cover for Both Men & Women",
    "price": "$53.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41DkmlxeXiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07FR2HF77?tag=rvgearlab-amz-20",
    "description": "The Loowoko is a 50L pack weighing 2.8 pounds, with a rain cover pouch at the base, a shoe divider and six external pockets. It has no internal frame.\n\nIt costs about $53, about half the TETON 55L Scout, and it weighs far less than the framed packs. It gives up the load-carrying ability of the TETON for lighter weight.\n\nIt suits light travelers and hikers who keep gear under about 20 pounds. The shoe divider helps with organization.",
    "specs": [
      "50L with rain cover",
      "Shoe divider, six pockets",
      "No internal frame"
    ],
    "pros": [
      "Rain cover pouch at the base",
      "Shoe divider and six external pockets",
      "Light at 2.8 pounds",
      "Fits a 3 to 5 day trip"
    ],
    "cons": [
      "No internal frame by design",
      "Not for heavy loads"
    ],
    "bestFor": "Light travel and hiking",
    "take": "A light 50L for people who pack light.",
    "catch": "Frameless packs sag past 20 pounds."
  },
  {
    "id": "best-hiking-backpacks-under-100-4",
    "rank": 4,
    "badge": "Best Expandable Pack",
    "name": "Vaupan Hiking Backpack",
    "price": "$31.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oxsOXu09L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CXJ9L9PP?tag=rvgearlab-amz-20",
    "description": "The Vaupan is a 70L pack that expands to 100L, weighing 3.31 pounds in 600D Oxford with MOLLE webbing. It has widened S-type shoulder straps and is water resistant.\n\nIt costs about $32, a third of the TETON 55L Scout, and it carries far more volume than any framed pack. It has no internal frame for a pack this big.\n\nIt suits campers who need a large volume for bulky gear on a car-supported trip. MOLLE webbing carries extra pouches.",
    "specs": [
      "70L expands to 100L",
      "3.31 lb, 600D Oxford",
      "MOLLE webbing"
    ],
    "pros": [
      "Huge capacity for long trips",
      "MOLLE webbing for extra gear",
      "Water-resistant 600D Oxford",
      "Widened S-type shoulder straps"
    ],
    "cons": [
      "No frame for a 100L load",
      "Bulky silhouette"
    ],
    "bestFor": "Bulky gear",
    "take": "The most volume at the lowest price.",
    "catch": "A big, unframed load will sag."
  },
  {
    "id": "best-hiking-backpacks-under-100-5",
    "rank": 5,
    "badge": "Best With Belt Bag",
    "name": "King'sGuard 100L Camping Hiking Backpack Molle Rucksack Military Camping Backpacking Daypack",
    "price": "$36.32",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ety2e0BKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B4SZ16J4?tag=rvgearlab-amz-20",
    "description": "The King'sGuard is a 80/100L pack with four large external hanging systems, 902D Oxford fabric and an independent belt bag that doubles as a shoulder bag. A 3D breathable back system and a 4 cm honeycomb foam pad cushion the back.\n\nIt costs about $36, close to the Vaupan 100L, and it adds a detachable belt bag. It has no internal frame.\n\nIt suits campers who want a large pack and a small sling for day trips. The pad improves ventilation.",
    "specs": [
      "80/100L, 902D Oxford",
      "Independent belt bag",
      "Honeycomb foam pad"
    ],
    "pros": [
      "Detachable belt bag",
      "Thick 4 cm back pad",
      "902D Oxford fabric",
      "Four external hanging systems"
    ],
    "cons": [
      "No internal frame",
      "Very bulky"
    ],
    "bestFor": "Car-supported trips",
    "take": "A huge pack with a bonus bag.",
    "catch": "It is for gear volume, not for long trails."
  }
];

export const howWeEvaluated = [
  {
    "title": "Frame and fit",
    "description": "Internal frames and torso adjustment came first."
  },
  {
    "title": "Capacity",
    "description": "Liters were compared against trip length."
  },
  {
    "title": "Weight",
    "description": "Empty pack weights were compared."
  },
  {
    "title": "Organization",
    "description": "Compartments and rain covers were credited."
  },
  {
    "title": "Price against the cap",
    "description": "All five are under $100."
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
    "subheading": "By trip",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Weekend backpacking with a frame",
          "TETON 55L Scout",
          "Torso-adjustable internal frame."
        ],
        [
          "Long trip with volume",
          "Mardingtop 70L",
          "70L internal frame."
        ],
        [
          "Light travel",
          "Loowoko 50L",
          "2.8 lb and six pockets."
        ],
        [
          "Bulky gear, car support",
          "Vaupan 100L",
          "70L expands to 100L."
        ],
        [
          "Large pack plus sling",
          "King'sGuard 100L",
          "Detachable belt bag."
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
          "Vaupan 100L or King'sGuard 100L"
        ],
        [
          "$50 to $100",
          "Loowoko 50L or TETON 55L Scout"
        ],
        [
          "$90 to $100",
          "Mardingtop 70L"
        ]
      ]
    }
  },
  {
    "subheading": "Framed vs frameless",
    "cards": [
      {
        "label": "Framed",
        "text": "The TETON 55L Scout and Mardingtop 70L carry 25 to 30 pounds on your hips."
      },
      {
        "label": "Frameless",
        "text": "The Loowoko 50L, Vaupan 100L and King'sGuard 100L are lighter and cheaper and suit light or car-supported loads."
      }
    ],
    "note": "Choose the TETON 55L Scout for trails and the Vaupan 100L for volume."
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
          "About $32",
          "Vaupan 100L"
        ],
        [
          "About $36",
          "King'sGuard 100L"
        ],
        [
          "About $53",
          "Loowoko 50L"
        ],
        [
          "About $96",
          "TETON 55L Scout"
        ],
        [
          "About $100",
          "Mardingtop 70L"
        ]
      ]
    }
  },
  {
    "subheading": "For beginners specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a torso adjustable frame, a padded hip belt and a rain cover."
      },
      {
        "label": "In this comparison",
        "text": "The TETON 55L Scout adjusts to your torso and includes a rain cover, and the Mardingtop 70L adds a bladder compartment."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you carry over 20 pounds: the TETON 55L Scout and Mardingtop 70L add a frame and torso adjustment."
      },
      {
        "label": "Save if",
        "text": "Save if you carry light: the Loowoko 50L at about $53 and Vaupan 100L at about $32 suit short, light trips."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Internal frame",
    "explanation": "An internal frame carries weight to your hips and keeps the load stable, while a frameless pack sags above about 20 pounds and pulls on your shoulders. The frame is the main reason to pay near $100 rather than $50. Look for the words internal frame in the title, and for aluminum stays or a frame sheet in the details."
  },
  {
    "criterion": "Torso adjustment",
    "explanation": "A pack that is too short or too tall for your torso puts the load on your shoulders instead of your hips. Multi-position torso adjustment lets you set the hip belt right at your hip bones. Measure your torso from the bump at the base of your neck to your hip line, and compare it with the size range."
  },
  {
    "criterion": "Capacity vs weight",
    "explanation": "A 100L pack invites overpacking and adds weight, while a 55L pack forces discipline. For 2 to 4 nights, 50 to 65L is plenty, and extra volume only helps with bulky winter gear. Pick the smallest pack that fits your sleeping bag, tent and food, and check the stated empty weight."
  },
  {
    "criterion": "Hip belt and sternum strap",
    "explanation": "A padded hip belt carries most of the weight, and a sternum strap stops the shoulder straps sliding off. Packs without a real belt rely on your shoulders alone, which tires you after an hour. Look for a padded belt and sternum strap in the description, and check they adjust to your size."
  },
  {
    "criterion": "Rain cover and fabric",
    "explanation": "600D polyester and Oxford fabrics resist abrasion from branches and rocks, and a rain cover keeps the contents dry in a storm. Stitching at the strap anchors is where cheap packs fail first. Look for a cover in the box, YKK or similar zippers and the fabric denier in the title."
  }
];

export const faq = [
  {
    "q": "Is an internal frame pack worth $60 more?",
    "a": "If you carry over 20 pounds, yes. The TETON 55L Scout moves the load to your hips and adjusts to your torso, which prevents shoulder and back pain on long days. For light loads, the Loowoko 50L costs about half and weighs less."
  },
  {
    "q": "What do hikers get wrong about pack size?",
    "a": "They buy too much volume. A 100L pack invites overpacking and sags without a frame, and the extra weight tires you quickly. Match the pack size to your longest trip and fill only what you need."
  },
  {
    "q": "Is the Mardingtop worth about $4 more than the TETON?",
    "a": "If you need 70L, yes. The Mardingtop gives 15 more liters than the TETON 55L Scout and a bladder compartment for about $4 more. The TETON fits more torsos with its adjustment and weighs less."
  },
  {
    "q": "How do I fit a pack?",
    "a": "Measure your torso, set the torso length on the pack, tighten the hip belt over your hip bones and then the shoulder straps. Adjust the sternum strap last. The TETON 55L Scout has multi-position torso adjustment that makes this simple."
  },
  {
    "q": "How do I care for a pack?",
    "a": "Empty the pack, shake out dirt, spot clean with a damp cloth and air dry it fully. Do not machine wash a framed pack, since the washer can bend the frame. Store it loosely packed in a dry place."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Hiking Backpacks Under 30",
    "href": "/packs-hiking/best-hiking-backpacks-under-30"
  },
  {
    "title": "Best Hiking Backpacks Under 75",
    "href": "/packs-hiking/best-hiking-backpacks-under-75"
  },
  {
    "title": "Best Backpacking Backpacks Under 100",
    "href": "/packs-hiking/best-backpacking-backpacks-under-100"
  }
];
