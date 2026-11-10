export const guideSlug = "best-first-aid-kits-under-30";
export const guideTitle = "6 Best First Aid Kits Under 30 in 2026";
export const metaTitle = "Best First Aid Kits Under 30 in 2026";
export const metaDescription = "Best first aid kits under $30: six camp and car kits from a 110-piece case to a 348-piece two-in-one, compared on piece count, case and portability.";
export const mainKeyword = "best first aid kits under 30";
export const introParagraphs = [
  "Thirty dollars buys a first aid kit with hundreds of pieces, and the difference between a $9 case and a $30 case is the container, the dressing sizes and whether the kit is built for a backpack or a truck bed. The six here run from about $8 to $30 and range from 110 to 348 pieces.",
  "The ranking asks what the last $20 buys over a basic 110-piece kit: a tougher case, a bigger piece count and a second small kit to carry. The top spot goes to the most useful kit for camping, and the metal job-site kits are placed by who needs them. Treat any kit as a starter set and add your own medications."
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
    "id": "best-first-aid-kits-under-30-1",
    "rank": 1,
    "badge": "Best Value Under $30",
    "name": "Swiss Safe 2-in-1 348 Pcs Large First Aid Kit for Camping",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51gh8Ygj8ML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07C7K5PHQ?tag=rvgearlab-amz-20",
    "description": "The Swiss Safe is a two-in-one kit with 348 pieces in an impact-absorbing hard case that opens from the front or the back. It also includes a 32-piece mini kit that fits a backpack or glove box.\n\nIt costs about $28, near the top of the budget and $1 less than the Everlit, and it has twice the piece count of the metal job-site kits. The extra mini kit lets you split supplies between a tent and a day pack.\n\nIt suits campers, families and road trippers who want one kit for the car and one for the trail. The dual access design speeds up finding supplies.",
    "specs": [
      "348 pieces plus 32-piece mini kit",
      "Hard case, dual access opening",
      "Fits camping, travel and car"
    ],
    "pros": [
      "Huge piece count for the price",
      "Bonus mini kit for a day pack",
      "Impact-absorbing hard case",
      "Two-way front and back opening"
    ],
    "cons": [
      "Larger than a pocket kit",
      "Piece count includes many small items"
    ],
    "bestFor": "Camping and road trips",
    "take": "The most complete camp kit under $30, with a mini kit to carry.",
    "catch": "Add your own medications and any prescriptions."
  },
  {
    "id": "best-first-aid-kits-under-30-2",
    "rank": 2,
    "badge": "Best Metal Job-Site Kit",
    "name": "First Aid Only 25-Person Contractor First Aid Kit for Jobsites",
    "price": "$29.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/314Sb+1HmfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B006RNSPYM?tag=rvgearlab-amz-20",
    "description": "The First Aid Only 25-Person Contractor kit holds 178 supplies including bandages, antibiotic ointment, BZK antiseptic wipes, burn cream packets, gauze, gloves, scissors and tweezers. It comes in a wall-mountable metal case with a carry handle and an easy-release latch.\n\nIt costs about $30, a dollar more than the Everlit 185, and it comes from a long-time first aid maker. It is bulkier and heavier than the Swiss Safe 348 Pc.\n\nIt suits trailers, work trucks and base camps where the kit lives on a wall or in a cab. It is also FSA and HSA eligible.",
    "specs": [
      "178 supplies, metal case",
      "Wall mountable, carry handle",
      "BZK wipes, burn cream, gauze"
    ],
    "pros": [
      "Durable metal case",
      "Wall-mountable for a trailer",
      "Quick-release latch",
      "FSA and HSA eligible"
    ],
    "cons": [
      "Heavy for a backpack",
      "Fewer pieces than the Swiss Safe"
    ],
    "bestFor": "Trailers and trucks",
    "take": "A sturdy metal kit for a vehicle or base camp.",
    "catch": "The metal case is not made for hiking."
  },
  {
    "id": "best-first-aid-kits-under-30-3",
    "rank": 3,
    "badge": "Best OSHA-Style Metal Kit",
    "name": "EVERLIT 185 Pcs Metal First Aid Kit for Contractors",
    "price": "$29.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41NkFGoQUcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FNVSVP54?tag=rvgearlab-amz-20",
    "description": "The Everlit is a 185-piece kit in a wall-mountable metal cabinet that measures 11 by 7.5 by 2.5 inches and weighs 3.85 pounds, with a carry handle and dual latches. It is described as OSHA 1910.151(b) compliant and covers cuts, burns and minor wounds.\n\nIt costs about $30, a dollar more than the Swiss Safe 348 Pc, and it has seven more pieces than the First Aid Only 25-Person. It is a bit heavier than the plastic cases.\n\nIt suits work sites, RV bays and campgrounds hosts who need a robust box. Mount it inside a cabinet.",
    "specs": [
      "185 pieces, metal cabinet",
      "11 x 7.5 x 2.5 in, 3.85 lb",
      "Dual latches, carry handle"
    ],
    "pros": [
      "Rugged metal cabinet",
      "185 supplies",
      "Carry handle and dual latches",
      "Wall mountable"
    ],
    "cons": [
      "3.85 pounds",
      "Fewer pieces than the Swiss Safe"
    ],
    "bestFor": "RV bays and job sites",
    "take": "A solid metal option for a fixed spot.",
    "catch": "It is heavier than most camp kits."
  },
  {
    "id": "best-first-aid-kits-under-30-4",
    "rank": 4,
    "badge": "Best Mid-Size Hard Shell",
    "name": "Premium First Aid Kit",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31qJN+4f64L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FM3JHMYT?tag=rvgearlab-amz-20",
    "description": "The Premium 305 Piece kit is a dual-color hard shell with a fluorescent interior that holds wound care bandages, gauze pads, tweezers, safety pins, gloves and burn gel, all latex free. It measures 8.3 by 5.5 by 2.6 inches.\n\nIt costs about $17, nearly half the Swiss Safe 348 Pc, and it carries 305 pieces in a size that fits a large backpack. It has no bonus mini kit.\n\nIt suits hikers and families who want a bigger kit that still fits in a backpack. The bright interior helps you find items at night.",
    "specs": [
      "305 pieces, hard shell",
      "8.3 x 5.5 x 2.6 inches",
      "Latex-free items"
    ],
    "pros": [
      "Hard shell protects contents",
      "305 pieces at a low price",
      "Bright interior for low light",
      "Latex-free supplies"
    ],
    "cons": [
      "No bonus mini kit",
      "Bulkier than a 150-piece kit"
    ],
    "bestFor": "Backpacks and cars",
    "take": "A strong value hard shell for under $20.",
    "catch": "It is bulky for ultralight packs."
  },
  {
    "id": "best-first-aid-kits-under-30-5",
    "rank": 5,
    "badge": "Best Basic Case",
    "name": "Be Smart Get Prepared 110 Pc First Aid Kit",
    "price": "$8.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51uWuN0lFrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00CYBXH7G?tag=rvgearlab-amz-20",
    "description": "The Be Smart Get Prepared kit packs 110 pieces in a rugged, impact-resistant plastic case measuring 7.5 by 2.5 by 6.8 inches. It has organized compartments and easy-slide latches.\n\nIt costs about $8, less than a third of the Swiss Safe 348 Pc, and it is from a large first aid maker with an FDA medical device listing. It carries fewer pieces than any other kit here.\n\nIt suits glove boxes, desk drawers and short trips. It tucks under a car seat.",
    "specs": [
      "110 pieces in a rugged case",
      "7.5 x 2.5 x 6.8 inches",
      "Easy-slide latches"
    ],
    "pros": [
      "Lowest price in the group",
      "Impact-resistant plastic case",
      "Compact size fits under a seat",
      "Organized compartments"
    ],
    "cons": [
      "Basic piece count",
      "Not sized for groups"
    ],
    "bestFor": "Glove boxes and short trips",
    "take": "A tough little kit for the car.",
    "catch": "Add dressings if you camp for days."
  },
  {
    "id": "best-first-aid-kits-under-30-6",
    "rank": 6,
    "badge": "Best Pack Kit",
    "name": "Mini First Aid Kit",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411tLyA56aL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DB794BKQ?tag=rvgearlab-amz-20",
    "description": "The Mini 150pc kit is a waterproof EVA hard shell about 6.4 inches long and 2.7 inches deep, with 150 pieces in separate sleeves and carabiner clips. It weighs 0.73 pounds.\n\nIt costs about $10, a third of the Swiss Safe 348 Pc, and it clips to a pack. It carries few large dressings.\n\nIt suits day hikers, kayakers and bikers who want something small. It fits a hip belt pocket.",
    "specs": [
      "150 pieces, EVA hard shell",
      "6.4 x 4.9 x 2.7 inches",
      "Waterproof, carabiner clips"
    ],
    "pros": [
      "Waterproof hard shell protects contents",
      "Separate sleeves for each category",
      "Light at 0.73 pounds",
      "Carabiners clip to a pack"
    ],
    "cons": [
      "Smaller than a family kit",
      "Few large dressings"
    ],
    "bestFor": "Day hikes and paddling",
    "take": "A tiny waterproof kit for the trail.",
    "catch": "Add larger dressings for group trips."
  }
];

export const howWeEvaluated = [
  {
    "title": "Piece count",
    "description": "Count and content were compared, with notes on small items."
  },
  {
    "title": "Case type",
    "description": "Metal, hard shell and EVA cases were compared."
  },
  {
    "title": "Size and weight",
    "description": "Dimensions and pounds were compared."
  },
  {
    "title": "Supplies",
    "description": "Dressings, wipes, burn care and tools were compared."
  },
  {
    "title": "Price against the cap",
    "description": "All six are under $30."
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
    "subheading": "By use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Camping with family",
          "Swiss Safe 348 Pc",
          "348 pieces and a mini kit."
        ],
        [
          "Trailer or work truck",
          "First Aid Only 25-Person",
          "Metal case, 178 supplies."
        ],
        [
          "RV bay or job site",
          "EVERLIT 185 Metal",
          "Wall-mountable cabinet."
        ],
        [
          "Hiking and car",
          "Premium 305 Piece",
          "305 pieces in a hard shell."
        ],
        [
          "Glove box",
          "Be Smart 110 Pc",
          "Compact case."
        ],
        [
          "Hip belt or kayak",
          "Mini 150pc EVA",
          "Waterproof, 0.73 lb."
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
          "Be Smart 110 Pc or Mini 150pc EVA"
        ],
        [
          "$10 to $30",
          "Premium 305 Piece or Swiss Safe 348 Pc"
        ],
        [
          "$20 to $30",
          "First Aid Only 25-Person or EVERLIT 185 Metal"
        ]
      ]
    }
  },
  {
    "subheading": "Metal cabinet vs portable kit",
    "cards": [
      {
        "label": "Metal cabinet",
        "text": "The First Aid Only 25-Person and EVERLIT 185 Metal are rugged and wall-mountable but weigh several pounds."
      },
      {
        "label": "Portable kit",
        "text": "The Swiss Safe 348 Pc, Premium 305 Piece, Be Smart 110 Pc and Mini 150pc EVA go in a pack or glove box."
      }
    ],
    "note": "Choose the Swiss Safe 348 Pc for camping and the EVERLIT 185 Metal for a fixed spot."
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
          "About $8",
          "Be Smart 110 Pc"
        ],
        [
          "About $10",
          "Mini 150pc EVA"
        ],
        [
          "About $17",
          "Premium 305 Piece"
        ],
        [
          "About $28",
          "Swiss Safe 348 Pc"
        ],
        [
          "About $30",
          "First Aid Only 25-Person"
        ],
        [
          "About $30",
          "EVERLIT 185 Metal"
        ]
      ]
    }
  },
  {
    "subheading": "For backpacking specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a waterproof case under a pound with separate sleeves and a clip."
      },
      {
        "label": "In this comparison",
        "text": "The Mini 150pc EVA weighs 0.73 pounds and clips to a pack, and the Swiss Safe 348 Pc includes a 32-piece mini kit."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you camp with others: the Swiss Safe 348 Pc and First Aid Only 25-Person add pieces and a tougher case."
      },
      {
        "label": "Save if",
        "text": "Save if you travel light: the Be Smart 110 Pc is about $8, and the Mini 150pc EVA is about $10."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Piece count vs usefulness",
    "explanation": "A 348-piece kit sounds better than a 110-piece kit, but many counted items are tiny bandages and swabs. What matters is the mix of gauze pads, large dressings, tape, tweezers and gloves. Read the contents list and count the larger items, not just the headline number."
  },
  {
    "criterion": "Case and water protection",
    "explanation": "A rigid case protects supplies from crushing in a pack, and a waterproof EVA shell or metal cabinet protects against rain, spills and damp car trunks. A soft pouch can leave bandages soaked and ointments leaking after one wet trip. Look for a hard shell, a sealed lid or a metal case in the title, and avoid thin zip pouches for wet climates."
  },
  {
    "criterion": "Size and weight",
    "explanation": "A metal cabinet at 3.85 pounds belongs in a vehicle or on a wall, while a 0.73 pound mini kit belongs in a backpack or on a kayak deck. A kit that is too heavy to carry ends up left at home when you need it. Compare the stated pounds and dimensions with where the kit will actually live."
  },
  {
    "criterion": "Organization",
    "explanation": "Labeled compartments, sleeves and a dual-access opening let you find a bandage or tweezers in seconds, which matters when you are stressed or working by headlamp. A jumbled bag of loose items slows you down and gets damaged. Look for words like organized interior, separate sleeves or two-way opening in the description before you buy."
  },
  {
    "criterion": "Add your own",
    "explanation": "No budget kit includes your prescriptions, an epinephrine auto-injector, a splint or enough blister care for a long hike. Plan to supplement the kit with personal medication and trail-specific items for your group. Read the contents list against the needs of your group, and note how many people each kit is meant to serve."
  }
];

export const faq = [
  {
    "q": "How many pieces do I need in a camping first aid kit?",
    "a": "Piece count matters less than content. A kit with gauze pads, tape, tweezers, gloves and large dressings beats a kit with 300 tiny bandages. The Swiss Safe 348 Pc has a broad mix across categories, and you should still add personal medications and blister care."
  },
  {
    "q": "What do campers get wrong about first aid kits?",
    "a": "They buy a kit and never open it. Check the contents before each trip, replace expired items and learn where things are packed so you can find them in the dark. Add blister care, any prescriptions and a way to call for help."
  },
  {
    "q": "Is a metal cabinet kit worth it for camping?",
    "a": "Only for a vehicle, trailer or base camp. The EVERLIT 185 Metal weighs 3.85 pounds and is meant to mount on a wall. For backpacking or paddling, the Mini 150pc EVA at 0.73 pounds is far more practical to carry."
  },
  {
    "q": "How should I store a first aid kit?",
    "a": "Keep the kit in a cool, dry place where everyone can reach it, not in a hot trunk or direct sun. Heat degrades adhesives and ointments over time. Check the contents at the start of each camping season."
  },
  {
    "q": "When should I replace the contents?",
    "a": "Replace anything you use, and check expiration dates on ointments, wipes and any medications every year. Adhesive bandages lose stickiness as they age, and sterile packs can be damaged by moisture. Restock before big trips so the kit is ready."
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
