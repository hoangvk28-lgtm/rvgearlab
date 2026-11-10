export const guideSlug = "best-first-aid-kit-for-car";
export const guideTitle = "6 Best First Aid Kit For Car in 2026";
export const metaTitle = "Best First Aid Kit For Car in 2026";
export const metaDescription = "Best first aid kits for car: six compact kits that fit a glove box or trunk, compared on size, case type and the supplies that matter on the road.";
export const mainKeyword = "best first aid kit for car";
export const introParagraphs = [
  "A car kit has to survive heat, cold and a trunk full of luggage. It should be small enough to stay in the vehicle every day and organized enough to use at a roadside.",
  "The six kits here range from an 80-piece mini to a 320-piece hard shell. They are ordered by how well each fits a vehicle and covers road-trip and campsite problems."
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
    "id": "best-first-aid-kit-for-car-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "VRIEXSD Premium 320-Piece First Aid Kit",
    "price": "$21.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41--V4vF2dL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DF7K191C?tag=rvgearlab-amz-20",
    "description": "The VRIEXSD kit has 320 pieces in a waterproof EVA hard shell that measures 8.65 x 5.88 x 3.54 inches. Waterproof double zippers, carabiners and labeled sleeves keep the contents sorted.\n\nIt holds more pieces than the Gevoke and First Aid Only kits in a case that is smaller than the Gevoke. The EVA shell is waterproof, which the soft First Aid Only case does not claim.\n\nIt is the best fit for a family road trip or a camping car. It slides into a seat pocket or a trunk organizer.",
    "specs": [
      "320 pieces, EVA hard shell",
      "8.65 x 5.88 x 3.54 inches",
      "Waterproof zippers, carabiners"
    ],
    "pros": [
      "320 pieces in a compact case",
      "Waterproof EVA shell protects supplies",
      "Labeled sleeves make items easy to find",
      "Carabiners clip to a bag or seat"
    ],
    "cons": [
      "Not rated to a workplace standard",
      "Hard shell can be bulky in a door pocket"
    ],
    "bestFor": "Family cars and camping trips",
    "take": "The best mix of pieces, protection and size. Keep it in the trunk.",
    "catch": "The listing gives no OSHA or ANSI rating."
  },
  {
    "id": "best-first-aid-kit-for-car-2",
    "rank": 2,
    "badge": "Best Clear-Lid Hard Case",
    "name": "Gevoke Professional First Aid Kit",
    "price": "$21.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51fyeGm2WEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FT3XJS2G?tag=rvgearlab-amz-20",
    "description": "The Gevoke has 310 pieces in a high-density plastic hard case measuring 10.3 x 8.08 x 3.24 inches and weighing 1.65 lbs. A clear lid and a sliding lock clasp let you see the contents without spilling them.\n\nIt carries about the same piece count as the VRIEXSD in a bigger, boxier case. Its clear lid is the quickest to scan at a roadside, which the zippered kits lack.\n\nIt is ideal for drivers who want a kit they can read at a glance. The listing includes a CPR face shield and burn gel.",
    "specs": [
      "310 pieces, hard plastic case",
      "10.3 x 8.08 x 3.24 inches, 1.65 lbs",
      "Clear lid, sliding lock clasp"
    ],
    "pros": [
      "Clear lid shows contents instantly",
      "Impact-resistant hard case",
      "Includes a CPR face shield",
      "Lock clasp prevents spills"
    ],
    "cons": [
      "Boxier than the zipper kits",
      "Larger footprint in a glove box"
    ],
    "bestFor": "Drivers who want an easy-to-read kit",
    "take": "A hard case with a clear lid. Easy to scan when stress is high.",
    "catch": "The box shape does not fit a glove box well."
  },
  {
    "id": "best-first-aid-kit-for-car-3",
    "rank": 3,
    "badge": "Best Soft Case Value",
    "name": "First Aid Only 298-Piece Family First Aid Kit for Home & Travel",
    "price": "$18.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YWc+SKX+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B000069EYA?tag=rvgearlab-amz-20",
    "description": "The First Aid Only kit has 298 pieces in a soft-sided zippered case with two layers and clear plastic pockets. It is FSA and HSA eligible and fits a glove box or backpack.\n\nIt costs less than the Gevoke and VRIEXSD and holds nearly as many items. The soft case packs flatter than the hard shells here.\n\nIt is for people who want a known kit brand and a case that squeezes into tight spaces. The two layers keep supplies sorted.",
    "specs": [
      "298 pieces, two-layer soft case",
      "FSA and HSA eligible",
      "Fits a glove box or backpack"
    ],
    "pros": [
      "Soft case squeezes into tight spaces",
      "Two layers with clear pockets",
      "FSA and HSA eligible",
      "Fits a glove box or backpack"
    ],
    "cons": [
      "Less protection than hard shells",
      "No waterproof claim stated"
    ],
    "bestFor": "Glove boxes and backpacks",
    "take": "The easy-fit soft kit from a known maker. Good for small cars.",
    "catch": "The soft case gives less crush and water protection."
  },
  {
    "id": "best-first-aid-kit-for-car-4",
    "rank": 4,
    "badge": "Best Brand-Name Supplies",
    "name": "BAND-AID Brand All-Purpose Portable Compact First Aid Kit",
    "price": "$18.36",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413N9zx83aL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09NWH8553?tag=rvgearlab-amz-20",
    "description": "The BAND-AID kit has 160 pieces in a durable plastic case that can be refilled. It includes BAND-AID adhesive bandages, NEOSPORIN, BENADRYL and TYLENOL, per the listing.\n\nIt holds fewer pieces than the 300-plus kits and contains familiar name-brand items. The listing describes a case to refill with your own selection of supplies.\n\nIt suits households who prefer recognizable brands and want a kit they can refill. It is compact enough for a glove box.",
    "specs": [
      "160 pieces, refillable case",
      "NEOSPORIN and BENADRYL included",
      "BAND-AID bandages, wipes, gauze"
    ],
    "pros": [
      "Includes NEOSPORIN and BENADRYL",
      "Name-brand bandages",
      "Refillable plastic case",
      "Compact enough for a glove box"
    ],
    "cons": [
      "Fewer pieces than the big kits",
      "Medicines expire and need checking"
    ],
    "bestFor": "Households that prefer brand names",
    "take": "A familiar kit with real medicines. Check expiry dates.",
    "catch": "It has fewer pieces than the 300-plus kits."
  },
  {
    "id": "best-first-aid-kit-for-car-5",
    "rank": 5,
    "badge": "Best Light Camping Kit",
    "name": "First Aid Kit 276PCS Car Home Camping Essentials Red Emergency Kit AMORNING",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51JEM0ucbzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BF4MF5MZ?tag=rvgearlab-amz-20",
    "description": "The AMORNING kit has 276 pieces in an EVA bag that measures 7.8 x 5.55 x 2.9 inches and weighs about 1 lb. It includes an ice pack, a safety blanket and first aid tape.\n\nIt is smaller than the Gevoke 310pc. It adds an emergency blanket and ice pack, which the First Aid Only kit does not list.\n\nIt is for drivers who also camp and want a small kit that goes in a pack. The compact bag fits a door pocket.",
    "specs": [
      "276 pieces, about 1 lb",
      "EVA bag, 7.8 x 5.55 x 2.9 inches",
      "Ice pack, emergency blanket"
    ],
    "pros": [
      "Light at about 1 lb",
      "Includes an ice pack and emergency blanket",
      "Small enough for a door pocket",
      "Fits a pack or glove box"
    ],
    "cons": [
      "No standard is stated",
      "Bag is less rigid than a hard case"
    ],
    "bestFor": "Drivers who also camp",
    "take": "A light bag with a blanket and ice pack. Good for trunk and tent.",
    "catch": "The listing names no safety standard."
  },
  {
    "id": "best-first-aid-kit-for-car-6",
    "rank": 6,
    "badge": "Best Smallest Kit",
    "name": "BAND-AID Brand Travel Ready Portable First Aid Kit",
    "price": "$10.50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tmZKeWpGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B41MYSGP?tag=rvgearlab-amz-20",
    "description": "The BAND-AID Travel Ready kit has 80 pieces in a mini case. It includes cleansing wipes, gauze pads, antibiotic cream, pain relief caplets and adhesive bandages.\n\nIt is the smallest kit and the cheapest by a wide margin, and it holds about a quarter of the pieces in the VRIEXSD 320pc. The mini case suits a glove box or a seat pocket.\n\nIt is best as a backup kit or for commuters. It covers small cuts and scrapes.",
    "specs": [
      "80 pieces, mini case",
      "Antibiotic cream, pain relief caplets",
      "Cleansing wipes, gauze pads"
    ],
    "pros": [
      "Smallest kit here, fits any pocket",
      "Low price",
      "Includes pain relief caplets",
      "Refillable case"
    ],
    "cons": [
      "Far fewer pieces than other kits",
      "Not sized for a family"
    ],
    "bestFor": "Commuters and backup kits",
    "take": "A tiny backup kit for scrapes and cuts. Not a family kit.",
    "catch": "At 80 pieces it covers only minor cuts and scrapes."
  }
];

export const howWeEvaluated = [
  {
    "title": "Vehicle fit",
    "description": "Compared case dimensions and weight where listed against glove boxes, seat pockets and trunk organizers."
  },
  {
    "title": "Case protection",
    "description": "Looked at hard shell, EVA and soft cases for crush, water and temperature handling."
  },
  {
    "title": "Contents",
    "description": "Checked bandages, wound care, tape, blankets and any medicines against typical roadside problems."
  },
  {
    "title": "Access",
    "description": "Considered clear lids, labeled sleeves and compartments that help in a stressful moment."
  },
  {
    "title": "Value",
    "description": "Compared piece counts against price."
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
    "subheading": "By Storage Spot",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Trunk or cargo organizer",
          "VRIEXSD 320pc",
          "A waterproof hard shell with 320 pieces rides well with luggage."
        ],
        [
          "Glove box",
          "First Aid Only 298pc",
          "The soft case squeezes into a glove box."
        ],
        [
          "Driver who wants clear contents",
          "Gevoke 310pc",
          "A clear lid shows everything at a glance."
        ],
        [
          "Door pocket or seat pocket",
          "AMORNING 276pc",
          "A compact bag at about 1 lb."
        ],
        [
          "Commuter backup",
          "BAND-AID 80pc Travel",
          "Mini case for minor scrapes."
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
          "BAND-AID 80pc Travel or AMORNING 276pc"
        ],
        [
          "$10 to $20",
          "BAND-AID 160pc or First Aid Only 298pc"
        ],
        [
          "$20 to $30",
          "VRIEXSD 320pc or Gevoke 310pc"
        ]
      ]
    }
  },
  {
    "subheading": "Hard Shell vs Soft Case",
    "cards": [
      {
        "label": "Hard shell",
        "text": "A hard shell resists crush and water. The VRIEXSD 320pc and Gevoke 310pc are the hard options."
      },
      {
        "label": "Soft case",
        "text": "A soft case fits tight spaces. The First Aid Only 298pc, AMORNING 276pc and BAND-AID 160pc are soft or semi-soft."
      }
    ],
    "note": "Pick the VRIEXSD 320pc for most cars and the First Aid Only 298pc if your only space is a glove box."
  },
  {
    "subheading": "By Trip Style",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Daily commute",
          "BAND-AID 80pc Travel"
        ],
        [
          "Family road trips",
          "VRIEXSD 320pc"
        ],
        [
          "Road trips plus camping",
          "AMORNING 276pc"
        ],
        [
          "Prefer brand-name medicines",
          "BAND-AID 160pc"
        ]
      ]
    }
  },
  {
    "subheading": "For Road-Trip Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A water-resistant case, a blanket and wound care that survive a trunk"
      },
      {
        "label": "In this comparison",
        "text": "The AMORNING 276pc adds an emergency blanket and ice pack, and the VRIEXSD 320pc adds a waterproof EVA shell."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the VRIEXSD 320pc or Gevoke 310pc when you load the car with family and gear and want a hard case."
      },
      {
        "label": "Save if",
        "text": "Save with the First Aid Only 298pc or BAND-AID 80pc Travel when space or budget is tight."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Case fit and shape",
    "explanation": "A car kit needs to fit a glove box, a door pocket or a trunk organizer. A box with square corners often fails in a door pocket, while a soft bag squeezes in. Look for the listed dimensions and compare them with your storage space."
  },
  {
    "criterion": "Heat and cold",
    "explanation": "Cars reach very high temperatures in summer, which can degrade ointments and caplets. Medicines in a trunk may last better than in a glove box, away from direct sun. Look for expiry dates and plan to check them each spring."
  },
  {
    "criterion": "Hard shell or soft bag",
    "explanation": "A hard shell protects against crush from luggage and spills, while a soft bag fits tight spaces. For a loaded trunk, a hard shell is safer. Look for the words hard case or EVA on the listing."
  },
  {
    "criterion": "Roadside-specific items",
    "explanation": "Road hazards involve cuts, burns and bleeding, so gauze, tape, burn gel and a blanket matter. A CPR face shield is useful for a rare emergency. Look for these items by name in the contents list."
  },
  {
    "criterion": "Refillability",
    "explanation": "A kit that runs out of bandages quickly is less useful. Cases that are refillable or standard-sized make restocking simple. Look for a note on refilling or separate refill packs."
  }
];

export const faq = [
  {
    "q": "Where should a first aid kit live in a car?",
    "a": "Keep it where you can reach it without moving cargo, such as a seat pocket, door pocket or the top of the trunk. Avoid direct sun. The First Aid Only 298pc suits a glove box."
  },
  {
    "q": "What is the most common car kit mistake?",
    "a": "Leaving the kit unchecked for years. Heat degrades ointments and the medicines expire. Review it each spring and replace used items."
  },
  {
    "q": "Is a bigger car kit worth it?",
    "a": "A bigger kit such as the VRIEXSD 320pc helps with a family or a long trip. A mini kit covers minor scrapes. Choose by how many people ride with you."
  },
  {
    "q": "How do I organize a car first aid kit?",
    "a": "Group items by use: bleeding, burns, cuts and medicine. Labeled sleeves and clear lids like the Gevoke 310pc help. Put a small card with emergency numbers on top."
  },
  {
    "q": "Do I need a separate kit for camping?",
    "a": "A car kit covers many campsite needs, but add insect-bite treatment, blister care and any personal medicines. The AMORNING 276pc already has a blanket. Review the contents before a trip."
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
