export const guideSlug = "best-cabin-tents-under-200";
export const guideTitle = "6 Best Cabin Tents Under 200 in 2026";
export const metaTitle = "Best Cabin Tents Under 200 in 2026";
export const metaDescription = "Best cabin tents under $200 compared on room size, wall height and rain gear, from a 12-person two-room cabin to a pop-up hexagon and a six-person family tent.";
export const mainKeyword = "best cabin tents under 200";
export const introParagraphs = [
  "Two hundred dollars is the point where cabins reach twelve-person floors. The question is no longer whether you can afford space but how much of it you will actually use, so the ranking weighs floor size against weight and pitch time.",
  "Six tents are ordered from the best large-floor value down to compact cabins. Each is judged on stated dimensions, wall height, fly design and what the extra budget buys over a $150 tent."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-lakeside-campsite.webp";
export const heroImageAlt = "Colorful tents pitched beside a misty mountain lake";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-cabin-tents-under-200-1",
    "rank": 1,
    "badge": "Best Value",
    "name": "KTT Extra Large Tent 12 Person",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/416cjawrvOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08MDTJTZP?tag=rvgearlab-20",
    "description": "The KTT cabin gives you a fourteen by ten foot floor under a 6.58 ft ceiling, with space for four full air mattresses split across two rooms. Three doors and three windows are all screened in mesh, and eight corner hooks plus a center hook hold lamps.\n\nIt is assembled by hand from folding poles, so it packs smaller than instant cabins and costs far less than the 12-14 person KTT. Compared with the bay-window version it leaves out the bay windows and one pole set.\n\nLarge families who like a straight-wall layout and do not mind building the tent by hand will enjoy the volume. Oxford polyester and a PE-coated floor form the shell.",
    "specs": [
      "14 ft by 10 ft, 6.58 ft peak",
      "Two rooms, three doors",
      "Hooks for lamps"
    ],
    "pros": [
      "Fits four full air mattresses",
      "Straight walls for headroom",
      "Three doors and windows with mesh",
      "Folding poles pack small"
    ],
    "cons": [
      "Hand assembly takes time",
      "Needs a large flat pitch"
    ],
    "bestFor": "Large families",
    "take": "The best large floor for the money, with two rooms and plenty of doors.",
    "catch": "It is not an instant tent, so expect a longer first pitch."
  },
  {
    "id": "best-cabin-tents-under-200-2",
    "rank": 2,
    "badge": "Best Ventilation Cabin",
    "name": "KTT Extra Large Tent 12 Person",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51sN9ZV97nL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DRVSDJPD?tag=rvgearlab-20",
    "description": "This KTT version spans 14.1 ft by 10 ft with a 6.58 ft ceiling, a full rainfly, two bay windows and a curtain that splits it into two rooms. A trio of doors and screened windows add airflow, and the door curtain can be propped on two poles.\n\nThe bay windows and full fly separate it from the plain KTT, giving more light and better rain cover. It is the same price at the cap, so the choice depends on whether you want extra ventilation.\n\nWarm-weather families will like the extra windows. Fiberglass pole sections for the bay windows are included.",
    "specs": [
      "14.1 ft by 10 ft, 6.58 ft peak",
      "Full rainfly, two bay windows",
      "Curtain divides two rooms"
    ],
    "pros": [
      "Full rainfly gives better rain cover",
      "Bay windows bring light",
      "Curtain propped on poles makes a porch",
      "Three doors plus mesh windows"
    ],
    "cons": [
      "More poles to assemble",
      "Heavy to carry"
    ],
    "bestFor": "Warm-weather families",
    "take": "A large cabin with extra windows and a full fly.",
    "catch": "Allow a long first pitch and a flat site."
  },
  {
    "id": "best-cabin-tents-under-200-3",
    "rank": 3,
    "badge": "Best Budget Cabin",
    "name": "BravArrk Camping Tent for 6 Person",
    "price": "$109.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51c34Dn6EjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H1N15P7J?tag=rvgearlab-20",
    "description": "The BravArrk cabin has a ten by nine foot interior with a 78 inch center, holding two air mattresses or six sleeping bags. A large mesh door, several windows and a mesh roof deliver airflow, and a pair of adults can usually pitch it in around five minutes.\n\nIt costs around half of the KTT tents and pitches much faster. It lacks a second room and the full-length rainfly that the KTT bay-window version has.\n\nFamilies on a budget will like it. One person can assemble it with a little extra time.",
    "specs": [
      "Ten ft by nine ft, 78 in peak",
      "Fits two air mattresses",
      "Mesh door, windows, roof"
    ],
    "pros": [
      "Quick five-minute pitch with two",
      "78 inch peak",
      "Mesh door, windows and roof",
      "Half the price of the KTT cabins"
    ],
    "cons": [
      "Single open room",
      "Details on waterproofing are brief"
    ],
    "bestFor": "Budget families",
    "take": "A tall, fast cabin at roughly half the price of the larger ones.",
    "catch": "Bring a tarp for a porch, as there is no built-in one."
  },
  {
    "id": "best-cabin-tents-under-200-4",
    "rank": 4,
    "badge": "Quickest Setup",
    "name": "Chihee Camping Tents Pop-Up Stand-up Tent",
    "price": "$113.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41eR11q7+hL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DSJ5JVJX?tag=rvgearlab-20",
    "description": "The Chihee is a hexagon cabin about nine feet across and five feet high at the center. Its flysheet is 210D Oxford with a 3000mm black polyurethane coat, UV50+ protection, aluminum pegs and thick guy ropes.\n\nOf everything here it raises fastest and takes up the least ground. The KTT tents offer far more space, while the Chihee brings an awning porch and an easy pitch.\n\nCouples and small families who value ease over volume will enjoy it. The black coating blocks UV on sunny pitches.",
    "specs": [
      "Hexagon, about 9 ft across",
      "210D Oxford, 3000mm coat",
      "Awning porch"
    ],
    "pros": [
      "Pop-up structure raises quickly",
      "3000mm waterproof coating",
      "UV50+ rated fabric",
      "Awning porch for shade"
    ],
    "cons": [
      "Small floor for families",
      "Heavy for its size"
    ],
    "bestFor": "Couples and small families",
    "take": "A quick, compact cabin with an awning and a strong rain rating.",
    "catch": "It sleeps two to three, so it is not a family tent."
  },
  {
    "id": "best-cabin-tents-under-200-5",
    "rank": 5,
    "badge": "Best Rated for Rain",
    "name": "Happy Travel Tent 4 Person Tents for Camping",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41MUwytM0FL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FHQBQZ2R?tag=rvgearlab-20",
    "description": "This four-person Happy Travel cabin measures eight feet by seven under a 75 inch center, with 190T taffeta coated to 3000mm. Mesh doors, a removable fly and an electrical port are included.\n\nIt carries the highest stated waterproof rating in the list at the lowest price. The trade-off is the smallest floor here, well below the KTT tents.\n\nCouples with a child will find it a snug, rain-ready cabin. The e-port keeps a fan cord out of the door.",
    "specs": [
      "Eight by seven ft floor",
      "3000mm on 190T taffeta",
      "E-port and mesh doors"
    ],
    "pros": [
      "3000mm waterproof rating",
      "Lowest price in the list",
      "75 inch center height",
      "Removable rainfly"
    ],
    "cons": [
      "Small floor for four adults",
      "Single room layout"
    ],
    "bestFor": "Small families",
    "take": "The best-sealed small cabin in the list.",
    "catch": "Four adults will be cramped, so treat it as a three-person tent."
  },
  {
    "id": "best-cabin-tents-under-200-6",
    "rank": 6,
    "badge": "Best Porch Cabin",
    "name": "Castle Unicorn 4-6 Person Camping Tent",
    "price": "$111.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31uLlEH3nvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D9N9FW3L?tag=rvgearlab-20",
    "description": "The Castle Unicorn is a two-room cabin about ten feet long and seven wide, with a 69 inch peak, 150D Oxford and a 1500mm polyurethane coating. Poles lift the door flaps into a porch that rolls away when not needed.\n\nThat porch is a feature the KTT cabins skip. The KTT tents offer more floor, while the Castle Unicorn is lighter and cheaper to carry.\n\nFamilies who want a shaded entry and a bedroom divider will like it. Two big doors and a mesh roof keep warm nights breezy.",
    "specs": [
      "About 10 ft by 7 ft floor",
      "150D Oxford, 1500mm coat",
      "Porch from door flaps"
    ],
    "pros": [
      "Two rooms for privacy",
      "Porch rolls up when not in use",
      "150D Oxford shell",
      "Large mesh roof"
    ],
    "cons": [
      "Lower 69 inch peak",
      "Smaller than the KTT tents"
    ],
    "bestFor": "Families who want a porch",
    "take": "A two-room cabin with a rollaway porch at a modest price.",
    "catch": "At 69 inches tall, adults will stoop near the walls."
  }
];

export const howWeEvaluated = [
  {
    "title": "Floor size",
    "description": "Compared stated floors with air mattress counts."
  },
  {
    "title": "Wall height",
    "description": "Compared center heights and wall shape."
  },
  {
    "title": "Rain protection",
    "description": "Looked at fly coverage and stated ratings."
  },
  {
    "title": "Pitch effort",
    "description": "Compared pole counts, hand assembly and pop-ups."
  },
  {
    "title": "Price tiers",
    "description": "Spread picks from about $100 to the cap."
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
    "subheading": "By Group Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Six to eight, two rooms",
          "KTT 12P Two-Room Cabin",
          "Fits four air beds."
        ],
        [
          "Warm weather, more windows",
          "KTT 12P Bay-Window Cabin",
          "Bay windows."
        ],
        [
          "Family on a budget",
          "BravArrk 6P Standing Cabin",
          "78 inch peak."
        ],
        [
          "Couple, fast pitch",
          "Chihee Hexagon Pop-Up Cabin",
          "Pop-up."
        ],
        [
          "Rainy trips, small family",
          "Happy Travel 4P Cabin Tall",
          "3000mm."
        ],
        [
          "Porch and divider",
          "Castle Unicorn 4-6P Porch Cabin",
          "Porch."
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
          "$90 to $110",
          "Happy Travel 4P Cabin Tall or BravArrk 6P Standing Cabin"
        ],
        [
          "$110 to $120",
          "Castle Unicorn 4-6P Porch Cabin or Chihee Hexagon Pop-Up Cabin"
        ],
        [
          "$190 to $200",
          "KTT 12P Two-Room Cabin or KTT 12P Bay-Window Cabin"
        ]
      ]
    }
  },
  {
    "subheading": "Big Hand-Built vs Small Quick Cabin",
    "cards": [
      {
        "label": "Large pole cabin",
        "text": "Large cabins offer floor but need time. The KTT 12P Two-Room Cabin and KTT 12P Bay-Window Cabin are examples."
      },
      {
        "label": "Small quick cabin",
        "text": "Smaller cabins pitch quickly. The Chihee Hexagon Pop-Up Cabin and BravArrk 6P Standing Cabin are examples."
      }
    ],
    "note": "Pick the KTT 12P Two-Room Cabin for space and the BravArrk 6P Standing Cabin for speed."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Around $100",
          "Happy Travel 4P Cabin Tall"
        ],
        [
          "Around $110",
          "BravArrk 6P Standing Cabin"
        ],
        [
          "Around $200",
          "KTT 12P Two-Room Cabin"
        ],
        [
          "Warm-weather upgrade",
          "KTT 12P Bay-Window Cabin"
        ]
      ]
    }
  },
  {
    "subheading": "For Large Groups Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A floor that fits four air beds and two rooms."
      },
      {
        "label": "In this comparison",
        "text": "The KTT 12P Two-Room Cabin and KTT 12P Bay-Window Cabin both fit four full air mattresses."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the KTT 12P Bay-Window Cabin for windows and a full fly."
      },
      {
        "label": "Save if",
        "text": "Save with the BravArrk 6P Standing Cabin for families."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Twelve-person ratings",
    "explanation": "A 12-person rating assumes sleeping bags laid side by side with no gear in the tent. Count the air mattresses instead, because a 14 by 10 ft floor fits four full-size air beds, which suits six to eight people comfortably. Divide the label by roughly two before comparing."
  },
  {
    "criterion": "Straight-wall design",
    "explanation": "Straight walls give standing room across most of the floor, where a dome slopes away. They need more poles and more fabric, which raises weight. Check wall height as well as center height, and picture where you will stand to dress, which helps most when the whole family dresses at the same time."
  },
  {
    "criterion": "Full rainfly coverage",
    "explanation": "A full rainfly covers the roof and the walls, keeping rain off the seams and windows. A partial fly leaves the sides exposed to wind-driven rain. Look for a fly that reaches within a few inches of the ground, and re-check the stakes after the first rain because wet fabric stretches."
  },
  {
    "criterion": "Bay windows and door curtains",
    "explanation": "Bay windows add light and ventilation, and a door curtain propped on two poles makes a small porch. Both depend on extra poles. Check the pole count and the pitch time before you order, and make sure the extra poles are not the reason a tent takes an hour to pitch."
  },
  {
    "criterion": "Hand-built versus instant",
    "explanation": "Hand-assembled cabins cost less and pack smaller, but they take 20 minutes or more. Instant cabins pitch in a minute and weigh more. Choose by how often you camp and who will help, so keep a short checklist for the pole order at home, and keep spare stakes handy."
  }
];

export const faq = [
  {
    "q": "Is a 12-person cabin worth it for a family of five?",
    "a": "Yes if you want space for gear and kids. The KTT 12P Two-Room Cabin fits four air beds and gives two rooms. For smaller families on lighter budgets, the BravArrk 6P Standing Cabin is usually enough, and the extra space is useful when the weather keeps everyone inside."
  },
  {
    "q": "How long does a 12-person cabin take to pitch?",
    "a": "Plan on 20 to 30 minutes with two adults the first time. The KTT cabins are hand-assembled with folding poles. Practice once at home, and label the pole sections so you can repeat it quickly at camp."
  },
  {
    "q": "What does a full rainfly add?",
    "a": "It covers the roof and walls and keeps rain off seams. The KTT 12P Bay-Window Cabin includes one. In wet climates it is worth the extra effort, because it also reduces condensation by shading the roof, and it protects zippers from direct sun."
  },
  {
    "q": "Do cabin tents handle wind?",
    "a": "They have flat sides that catch wind, so stake and guy them carefully. Avoid exposed ridges. In forecast gusts above 25 mph, consider a dome instead, or lower the fly and add extra guy lines, and they need extra guy lines to hold steady."
  },
  {
    "q": "How do I store a large cabin tent?",
    "a": "Dry it in the sun until the floor and seams are fully dry, then fold it loosely. Store it in a cool, dry closet or garage shelf. Avoid compressing it for months, which can crack the coating."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Cabin Tents",
    "href": "/tents-shelter/best-cabin-tents"
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
