export const guideSlug = "best-first-aid-kits-under-20";
export const guideTitle = "5 Best First Aid Kits Under 20 in 2026";
export const metaTitle = "Best First Aid Kits Under 20 in 2026";
export const metaDescription = "Best first aid kits under $20: six camping and car kits from 20 to 300 pieces compared on case design, contents, size and what each covers on the trail.";
export const mainKeyword = "best first aid kits under 20";
export const introParagraphs = [
  "A first aid kit under $20 gets you bandages, wipes, gauze and tape for cuts, blisters and scrapes, and it does not get you trauma gear. Six kits here run from about $3 to $18 and from 20 to 300 pieces, so the useful question is how much of that count is real wound care.",
  "Each kit was compared on case protection, compartment layout, contents, weight and size. The kit with a waterproof case and organized contents ranks first, and larger piece counts are weighed against how bulky the kit becomes."
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
    "id": "best-first-aid-kits-under-20-1",
    "rank": 1,
    "badge": "Best Value Under $20",
    "name": "Mini First Aid Kit",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411tLyA56aL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DB794BKQ?tag=rvgearlab-20",
    "description": "The Mini 150pc EVA is a 150-piece kit with bandages, gloves, povidone-iodine prep pads and more in a waterproof EVA hard-shell case. It measures 6.4 by 4.9 by 2.7 inches, weighs 0.73 lbs and has bonus carabiners and premium zippers.\n\nIt costs about $10, nearly half the 300pc Bag, and it is the only kit in this group with a rigid waterproof shell and separate sleeves for each category. The Care Science 110pc comes close on count in a softer pouch.\n\nIt suits campers, kayakers and boaters who need the contents to stay dry. The carabiners clip it to a pack.",
    "specs": [
      "150 pieces, EVA hard shell",
      "6.4 by 4.9 by 2.7 inches",
      "Waterproof, carabiner clips"
    ],
    "pros": [
      "Waterproof hard shell protects contents",
      "Separate sleeves for each category",
      "Light at 0.73 lbs",
      "Carabiners clip to a pack"
    ],
    "cons": [
      "Smaller than a family kit",
      "Few large dressings"
    ],
    "bestFor": "Wet trips and boats",
    "take": "The best-protected kit under $20 at a fair price.",
    "catch": "Without large dressings it handles scrapes, not major bleeding."
  },
  {
    "id": "best-first-aid-kits-under-20-2",
    "rank": 2,
    "badge": "Best For Groups",
    "name": "First Aid Kit 300PCS Car Home Camping Essentials Red 1st Aid",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51drvjOIcCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C5J8MVDD?tag=rvgearlab-20",
    "description": "The 300pc Bag has 300 pieces in a compact red bag with plastic compartments, an emergency blanket and a triangular bandage. It is sold for hikes, camping and the car.\n\nIt costs about $18, the most in this guide, and it holds twice the pieces of the Mini 150pc EVA. The extra count includes a blanket and a sling bandage, which the smaller kits skip.\n\nIt suits families and small groups who want volume in one bag. Keep it in the car or the camp kitchen.",
    "specs": [
      "300 pieces in a bag",
      "Emergency blanket, triangular bandage",
      "Plastic compartments"
    ],
    "pros": [
      "300 pieces at a modest price",
      "Includes an emergency blanket",
      "Triangular bandage for slings",
      "Bag packs easily for a hike"
    ],
    "cons": [
      "Zipper edge is not waterproof",
      "Many pieces are small bandages"
    ],
    "bestFor": "Family and group camping",
    "take": "The most supplies for the money, with a sling and blanket.",
    "catch": "A soft bag will not keep contents dry in a downpour."
  },
  {
    "id": "best-first-aid-kits-under-20-3",
    "rank": 3,
    "badge": "Best Name Brand Mini",
    "name": "BAND-AID Brand Travel Ready Portable First Aid Kit",
    "price": "$10.50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tmZKeWpGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B41MYSGP?tag=rvgearlab-20",
    "description": "The BAND-AID 80pc is a Travel Ready kit with 80 pieces in a mini case, including cleansing wipes, gauze pads, antibiotic cream, pain relief caplets and adhesive bandages. The case is refillable.\n\nIt costs about $11, and it is the smallest of the branded options with antibiotic cream and caplets that the generic kits skip. It holds under half the pieces of the Mini 150pc EVA.\n\nIt suits day hikers and drivers who want a pocket-sized kit with trusted bandages and basic medicine. Add any prescriptions yourself.",
    "specs": [
      "80 pieces, mini case",
      "Antibiotic cream, pain relief",
      "Cleansing wipes, gauze pads"
    ],
    "pros": [
      "Fits a pocket or seat pouch",
      "Branded bandages and cream",
      "Includes pain relief caplets",
      "Refillable case"
    ],
    "cons": [
      "Far fewer pieces than other kits",
      "Not sized for a family"
    ],
    "bestFor": "Day hikes and glove boxes",
    "take": "A small branded kit with medicine included.",
    "catch": "It is light on pieces, so carry extra bandages."
  },
  {
    "id": "best-first-aid-kits-under-20-4",
    "rank": 4,
    "badge": "Best Pouch Organization",
    "name": "Care Science First Aid Kit",
    "price": "$7.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51IJV3GwkxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08127GKPR?tag=rvgearlab-20",
    "description": "The Care Science 110pc is a 110-piece kit with physician-recommended supplies in organized pouches that open for easy access and refilling. It is sold for travel, work, school, home and car.\n\nIt costs about $8, under the Mini 150pc EVA, and its pouches keep the contents sorted at a lower piece count. It gives up the waterproof shell of the Mini 150pc EVA.\n\nIt suits campers and travelers who want to find a bandage fast. The pouches let you refill one section.",
    "specs": [
      "110 pieces",
      "Organized refillable pouches",
      "Physician-recommended supplies"
    ],
    "pros": [
      "Pouches keep contents sorted",
      "Refill one section at a time",
      "Under $8",
      "Fits a bag or glove box"
    ],
    "cons": [
      "Soft case, not waterproof",
      "Fewer pieces than 150-piece kits"
    ],
    "bestFor": "Organized kit for a bag",
    "take": "A tidy, inexpensive kit that is easy to restock.",
    "catch": "The soft case does not keep contents dry in a heavy downpour."
  },
  {
    "id": "best-first-aid-kits-under-20-5",
    "rank": 5,
    "badge": "Best Pocket Kit",
    "name": "DMI First Aid Kit",
    "price": "$3.29",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rjYoRVsTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BQJQZ46L?tag=rvgearlab-20",
    "description": "The DMI 20pc is a mini kit with 6 alcohol swabs, 2 gauze pads, a bandage roll, bandage tape and 10 adhesive bandages in a durable water-resistant case. It measures 4 by 3.5 by 1 inches and weighs 0.13 lbs.\n\nIt costs about $3, the lowest price in this guide, and it fits a pocket or a bookbag. It has only 20 pieces, so it is a stopgap next to the Mini 150pc EVA.\n\nIt suits hikers, cyclists and travelers who want a tiny kit for blisters and scrapes. It is also a useful add-on for a backpack.",
    "specs": [
      "20 pieces",
      "Water-resistant case",
      "4 by 3.5 by 1 inches"
    ],
    "pros": [
      "Weighs only 0.13 lbs",
      "Water-resistant case",
      "Fits a pocket",
      "Under $4"
    ],
    "cons": [
      "Only 20 pieces",
      "Not enough for a group"
    ],
    "bestFor": "Pocket kit for blisters and scrapes",
    "take": "A tiny add-on kit for each pack in the family.",
    "catch": "With 20 pieces it covers only minor scrapes."
  }
];

export const howWeEvaluated = [
  {
    "title": "Case protection",
    "description": "Waterproof hard shells and soft bags were compared for keeping contents dry."
  },
  {
    "title": "Contents",
    "description": "Real wound care items were counted ahead of piece totals."
  },
  {
    "title": "Organization",
    "description": "Pouches and compartments were compared for fast access."
  },
  {
    "title": "Size and weight",
    "description": "Case dimensions and weight were compared for pack carry."
  },
  {
    "title": "Price against the cap",
    "description": "All six sit under $20, and protection per dollar takes first."
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
    "subheading": "By trip type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Wet trips and boats",
          "Mini 150pc EVA",
          "Waterproof hard shell with sleeves."
        ],
        [
          "Family or group camp",
          "300pc Bag",
          "300 pieces with a blanket."
        ],
        [
          "Day hikes and glove box",
          "BAND-AID 80pc",
          "Branded bandages and cream."
        ],
        [
          "Stocking multiple cars",
          "Care Science 110pc",
          "110 pieces for about $8."
        ],
        [
          "Pocket kit for each pack",
          "DMI 20pc",
          "0.13 lbs and 20 pieces."
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
          "DMI 20pc or Care Science 110pc"
        ],
        [
          "$0 to $20",
          "Mini 150pc EVA or BAND-AID 80pc"
        ],
        [
          "$10 to $20",
          "300pc Bag"
        ]
      ]
    }
  },
  {
    "subheading": "Hard shell vs soft bag",
    "cards": [
      {
        "label": "Hard shell",
        "text": "The Mini 150pc EVA protects contents from water and crushing and costs a little more."
      },
      {
        "label": "Soft bag or pouch",
        "text": "The 300pc Bag and Care Science 110pc pack flat and cost less, with less protection."
      }
    ],
    "note": "Pick the Mini 150pc EVA if you paddle or hike in rain and a soft kit for the car."
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
          "Under $4",
          "DMI 20pc"
        ],
        [
          "About $8",
          "Care Science 110pc"
        ],
        [
          "About $10",
          "Mini 150pc EVA"
        ],
        [
          "About $11",
          "BAND-AID 80pc"
        ],
        [
          "About $18",
          "300pc Bag"
        ]
      ]
    }
  },
  {
    "subheading": "For backpacking and kayaking specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a waterproof shell, a weight under a pound and carabiners to clip the kit to a pack."
      },
      {
        "label": "In this comparison",
        "text": "The Mini 150pc EVA has all three, and the DMI 20pc is the lightest add-on for a hip belt."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if your trips are wet or long: the Mini 150pc EVA at about $10 adds a waterproof shell that the soft kits lack, and the 300pc Bag at about $18 adds a blanket and sling for groups."
      },
      {
        "label": "Save if",
        "text": "Save if the kit stays in a car: the Care Science 110pc at about $8 and the DMI 20pc at about $3 cover minor cuts well enough, and you can upgrade the contents yourself."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Piece count versus real contents",
    "explanation": "A 300-piece kit usually counts every adhesive bandage and wipe as a piece, so the number says little about care. A 150-piece kit with gauze, tape and prep pads can handle more than a 300-piece one packed with small bandages. Read the contents list in the product details and count gauze pads, tape and gloves."
  },
  {
    "criterion": "Waterproof case",
    "explanation": "A rigid EVA shell or a sealed case keeps bandages and wipes dry through rain, creek splashes and kayak spray. A soft bag with a plain zipper takes in water and ruins gauze. Look for the words waterproof or water-resistant in the product details, and bag the kit in a zip-top bag for wet trips."
  },
  {
    "criterion": "Organization",
    "explanation": "Separate sleeves, pouches or compartments let you find a bandage in seconds, which matters when someone is bleeding. A single open pocket turns into a jumble after a week in a pack. Look at the images for labeled sections or sleeves, and prefer a kit where you can see every category at a glance, because a stressful moment is a bad time to dig through a pile of loose wrappers."
  },
  {
    "criterion": "Size and weight",
    "explanation": "A 0.73 lb kit with a hard shell fits in a daypack but not a pocket, while a 0.13 lb kit vanishes in a jacket. A larger kit is better in a car or camp box. Match the kit to where it rides, and consider having both."
  },
  {
    "criterion": "What a kit cannot do",
    "explanation": "A budget kit has bandages and wipes, not a tourniquet, splint or prescription medicine. Add any personal medicines, an epinephrine auto-injector if prescribed, and a plan for calling for help. Take a first aid course before relying on any kit, since a wilderness first aid class teaches the skills that no number of bandages replaces."
  }
];

export const faq = [
  {
    "q": "Is a $10 first aid kit enough for camping?",
    "a": "It is enough for blisters, scrapes and minor cuts. The Mini 150pc EVA suits a weekend trip, but larger groups and remote trips need more gauze, tape and a plan for emergencies. Add personal medicines, extra gauze and tape, and learn the basics of wound care. A weekend trip is a good time to check that you can find every item quickly."
  },
  {
    "q": "What mistake do buyers make with budget first aid kits?",
    "a": "They count pieces and never open the kit. Many of the pieces are tiny bandages, and the kit lacks items like trauma shears or a CPR mask. Open the kit when it arrives and add what is missing, such as trauma shears, extra gauze, a CPR mask and any personal medicines your group needs."
  },
  {
    "q": "Is the 300pc Bag worth more than the Mini 150pc?",
    "a": "For a family car, yes, because the 300pc Bag has a blanket, a sling bandage and more pieces. For a wet trip, the Mini 150pc EVA is the safer pick because of its waterproof shell. Choose by how wet and how crowded your trips are."
  },
  {
    "q": "How do I check a kit before a trip?",
    "a": "Open it, lay out the contents and check expiration dates on ointments, wipes and medicines. Replace used pieces and swap out expired items. Do this at the start of every season, and write the date on the case so you know when it was last checked."
  },
  {
    "q": "Where should I keep a first aid kit?",
    "a": "Keep one in each vehicle, one in the camp kitchen and a small one in every day pack. Store it where everyone knows to find it. Avoid a hot car trunk, which degrades ointments and adhesives, and bring the kit inside on very hot or freezing days so the contents stay usable."
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
