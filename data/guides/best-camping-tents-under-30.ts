export const guideSlug = "best-camping-tents-under-30";
export const guideTitle = "5 Best Camping Tents Under 30 in 2026";
export const metaTitle = "Best Camping Tents Under 30 in 2026";
export const metaDescription = "Best camping tents under $30 compared on floor size, weight, waterproofing and setup, for budget campers who need a basic dry shelter for fair-weather trips.";
export const mainKeyword = "best camping tents under 30";
export const introParagraphs = [
  "Thirty dollars buys a simple shelter, not a storm tent. At this price the tradeoffs are thin fabric, fiberglass poles and light waterproof coatings, so the goal is picking the tent whose corners are cut in the least harmful places.",
  "Five tents made the cut, from a 3 lb solo shelter to a roomy 86.6 inch dome and a pop-up with metal brackets. Each is compared on floor size, packed weight, door and vent design, and what the spec sheet says about rain protection, with the best value ranked first."
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
    "id": "best-camping-tents-under-30-1",
    "rank": 1,
    "badge": "Best Value",
    "name": "JELUCAMP 1/2/4/6 Person Dome Tents for Camping Lightweight Backpacking Tent",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tyug8U+OL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSCWN2R7?tag=rvgearlab-20",
    "description": "The JELUCAMP dome stretches 86.6 inches long and 59.1 wide, weighs 4.3 lb, and so is a generous floor for a tent at the very top of a $30 budget. It uses PU3000 coated polyester over 7.9mm fiberglass poles and adds a double-layer door with a mesh inner panel.\n\nNext to the Wakeman 2P it gives up about 1.5 lb of carry weight and gains several inches of length and width. Against the Sutekus Solo it sleeps two instead of one and carries a stated waterproof coating rather than only a fabric denier.\n\nIt suits car campers on a tight budget who want two adults to stretch out without bumping the walls. The mesh door layer keeps bugs out on warm nights while the solid layer handles wind and privacy.",
    "specs": [
      "4.3 lb, 86.6 in long floor",
      "PU3000 polyester, 7.9mm poles",
      "Double-layer mesh and fabric door"
    ],
    "pros": [
      "Longest and widest floor in this group",
      "Stated PU3000 waterproof coating",
      "Mesh inner door for bug-free airflow",
      "Easy few-minute pitch for two adults"
    ],
    "cons": [
      "Fiberglass poles flex and snap sooner than aluminum",
      "The same page covers 1, 2, 4 and 6 person sizes"
    ],
    "bestFor": "Budget car camping",
    "take": "The roomiest floor you can buy for this little money, with a real waterproof rating.",
    "catch": "Several sizes share one product page, so double-check you add the 2 person version to the cart."
  },
  {
    "id": "best-camping-tents-under-30-2",
    "rank": 2,
    "badge": "Lightest Two-Person",
    "name": "Wakeman Outdoors 2 Person Camping Tent with Rain Fly and Carrying Bag",
    "price": "$18.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RBHHcBtSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0050P22VK?tag=rvgearlab-20",
    "description": "The Wakeman two-person tent measures 77 by 57 by 40 inches and weighs just 2.75 lb, built from 190T polyester on fiberglass poles. It includes a detachable rain fly, a vent window and a dual-layer door with an inner screen and an outer zipped panel.\n\nIt is the lightest two-person shelter in this group, trimming roughly 1.5 lb from the JELUCAMP Dome. The tradeoff is a smaller footprint, so it sits below the JELUCAMP on room and above the Sutekus Solo on capacity.\n\nIt suits festival weekends, fishing trips and short walk-ins where you carry the tent yourself. Pair it with a compact pad and leave the bulky gear in the car.",
    "specs": [
      "77 x 57 x 40 in, 2.75 lb",
      "190T polyester, fiberglass poles",
      "Detachable fly and vent window"
    ],
    "pros": [
      "Only 2.75 lb for a two-person tent",
      "Removable fly lets you pitch cooler for summer",
      "Dual-layer door gives airflow and privacy",
      "Includes a carry bag"
    ],
    "cons": [
      "Tight fit for two adults with gear",
      "No waterproof coating rating is given"
    ],
    "bestFor": "Short carries and festivals",
    "take": "The easiest two-person tent here to carry from the car to a distant pitch.",
    "catch": "Two adults will have little spare room, so it fits best with one person plus a duffel."
  },
  {
    "id": "best-camping-tents-under-30-3",
    "rank": 3,
    "badge": "Best Solo Camo",
    "name": "Sutekus Single Tent Camouflage Patterns Camping Tent One Person Tent for Camping Hiking 【Outdoor Equipment】",
    "price": "$28.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VHXwNqr-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07LBGFNL6?tag=rvgearlab-20",
    "description": "The Sutekus single tent is a 3 lb shelter with a camouflage print and 180D Oxford fabric. It ships with a pole pair, a set of four pegs and a stuff bag, and it has one entrance.\n\nCompared with the Wakeman Lightweight 2P it adds only a quarter pound and sleeps one rather than two. Its 180D Oxford is a heavier fabric spec than the polyester in some neighbors, which helps the tent feel less flimsy on rocky ground.\n\nIt fits solo hunters, anglers and scouts who want a low, discreet shelter. The camouflage blends into brush and woods, and the small footprint pitches in tight spots.",
    "specs": [
      "3 lb solo, 33.5 in peak",
      "180D Oxford, camo pattern",
      "Pegs and stuff bag included"
    ],
    "pros": [
      "Camo pattern helps it hide in brush",
      "Hardy 180D Oxford fabric",
      "Pegs and carry bag included",
      "Small footprint fits tight spots"
    ],
    "cons": [
      "One person only, with no room for gear inside",
      "No waterproof rating is named"
    ],
    "bestFor": "Solo hunters and anglers",
    "take": "A low solo shelter with sturdy fabric and a camo finish for backcountry blinds and fishing banks.",
    "catch": "It has one entrance and only 33.5 inches of height, so changing clothes inside is awkward."
  },
  {
    "id": "best-camping-tents-under-30-4",
    "rank": 4,
    "badge": "Fastest Setup",
    "name": "Wind Tour Lightweight Backpacking Camping Tent Waterproof Double Layer Family Tent for Hiking Fishing Outdoor ",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41V6XlN6HWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G8D8TJQ8?tag=rvgearlab-20",
    "description": "The Wind Tour is an automatic pop-up with a double-layer build, mesh windows and ventilation holes. Thickened metal brackets are meant to keep the frame stable in light to moderate wind.\n\nIt is the only pick here that skips pole threading, so it beats the JELUCAMP Dome and Wakeman models on setup speed. In exchange it gives less structural support than a pole-sleeve design in gusts.\n\nIt works for first-time campers, kids and quick lake days where the goal is shade and a place to nap. Stake it down well and keep it for settled weather.",
    "specs": [
      "Automatic pop-up frame",
      "Mesh windows and vent holes",
      "Double-layer waterproof build"
    ],
    "pros": [
      "Pops open with no pole threading",
      "Mesh windows and vents cut stuffiness",
      "Metal brackets add frame stiffness",
      "Double layer separates rain from the mesh"
    ],
    "cons": [
      "Size and weight are not clearly given",
      "Pop-up frames are bulkier to pack"
    ],
    "bestFor": "Quick day-trip shelter",
    "take": "The simplest pitch in the group, useful when you want the tent up in seconds.",
    "catch": "Measure your gear and sleeper count before ordering, since the page gives little floor detail."
  },
  {
    "id": "best-camping-tents-under-30-5",
    "rank": 5,
    "badge": "Best Storage Pocket",
    "name": "2 Person Camping Tent with Rain Fly and Carrying Bag",
    "price": "$25.75",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41V04YYaPYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07YP7JWRN?tag=rvgearlab-20",
    "description": "The Wakeman D-door tent uses two fiberglass poles, a removable rain fly and an interior storage pocket. A dual-layer door pairs an inner screen with an outer zipped panel for airflow and privacy.\n\nIt shares its basic layout with the Wakeman Lightweight 2P, and the D-shaped door makes entry easier than a straight zipper. Against the JELUCAMP Dome it stays simpler and cheaper, with a smaller stated floor.\n\nIt suits campers who like to keep headlamps, keys and phones off the floor. It is a straightforward two-person starter tent for the lowest spend in the group.",
    "specs": [
      "D-style door, two poles",
      "Removable rain fly",
      "Interior storage pocket"
    ],
    "pros": [
      "D-shaped door is easy to enter",
      "Interior pocket keeps small items handy",
      "Removable fly for warm nights",
      "Lowest-effort two-pole setup"
    ],
    "cons": [
      "Floor size and weight are not clearly given",
      "Fiberglass poles are the weak point"
    ],
    "bestFor": "First-time budget campers",
    "take": "A basic two-person starter with a door and pocket layout that is easy to live in.",
    "catch": "It has no waterproof rating stated, so keep it for dry-forecast trips."
  }
];

export const howWeEvaluated = [
  {
    "title": "Floor size",
    "description": "Compared stated length, width and height against a 6 ft sleeper and a duffel, since cheap tents often hide cramped footprints."
  },
  {
    "title": "Weight and pack size",
    "description": "Ranked carry weight from 2.75 lb to 4.3 lb because a light tent decides how far you can walk it."
  },
  {
    "title": "Waterproofing claims",
    "description": "Noted which tents state a coating rating and which only describe fabric, and treated unrated tents as fair-weather only."
  },
  {
    "title": "Pole and frame material",
    "description": "Weighed fiberglass poles and metal brackets for flex, repairability and wind behavior."
  },
  {
    "title": "Value at the cap",
    "description": "Judged what each tent gives for a price under $30 and ranked the best overall balance first."
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
    "subheading": "By Camping Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Car camping with two adults",
          "JELUCAMP Dome",
          "Largest floor and a stated PU3000 coating."
        ],
        [
          "Festival or fishing carry",
          "Wakeman Lightweight 2P",
          "Only 2.75 lb for two sleepers."
        ],
        [
          "Solo hunter or angler",
          "Sutekus Solo",
          "Camo pattern, 180D Oxford and a 3 lb weight."
        ],
        [
          "Kids and quick day trips",
          "Wind Tour Pop-Up",
          "Opens without threading poles."
        ],
        [
          "Small items and easy entry",
          "Wakeman D-Door 2P",
          "D-shaped door and an interior pocket."
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
          "$20 to $30",
          "Wakeman D-Door 2P or Wind Tour Pop-Up"
        ],
        [
          "$20 to $30",
          "Sutekus Solo or Wakeman Lightweight 2P"
        ],
        [
          "$20 to $30",
          "JELUCAMP Dome"
        ]
      ]
    }
  },
  {
    "subheading": "Pole Tent vs Pop-Up",
    "cards": [
      {
        "label": "Pole tent",
        "text": "A pole tent uses sleeves or clips and takes a few minutes, but the frame stays stiffer and easier to repair. The JELUCAMP Dome, Wakeman Lightweight 2P, Wakeman D-Door 2P and Sutekus Solo are all pole designs."
      },
      {
        "label": "Pop-up tent",
        "text": "A pop-up opens on its own in seconds, but the frame is bulkier and tends to flex in gusts. The Wind Tour Pop-Up is the only one in this group."
      }
    ],
    "note": "Most budget campers should default to the JELUCAMP Dome unless speed of setup beats floor space."
  },
  {
    "subheading": "By Group Size",
    "table": {
      "headers": [
        "Group",
        "Recommended pick"
      ],
      "rows": [
        [
          "One camper",
          "Sutekus Solo"
        ],
        [
          "Two campers who pack light",
          "Wakeman Lightweight 2P"
        ],
        [
          "Two campers who want elbow room",
          "JELUCAMP Dome"
        ],
        [
          "Weekend couples who like pockets",
          "Wakeman D-Door 2P"
        ]
      ]
    }
  },
  {
    "subheading": "For First-Time Campers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A tent that pitches in a few minutes, a rain fly and a door you can close fully."
      },
      {
        "label": "In this comparison",
        "text": "The Wind Tour Pop-Up has the shortest setup, while the JELUCAMP Dome adds a fly and a double-layer door for real weather coverage."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want aluminum poles or a stated rain rating above PU3000, because the JELUCAMP Dome and the Wakeman Lightweight 2P both use fiberglass."
      },
      {
        "label": "Save if",
        "text": "Save with the Sutekus Solo or the Wakeman D-Door 2P if you camp only in dry weather and want the lowest outlay."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Floor size versus sleepers",
    "explanation": "Floor size is the stated length and width, and it matters more than the person rating on the label. A true two-person floor needs about 50 inches of width so two pads can sit side by side. Check the dimensions rather than the 2P badge, and add 6 inches of length beyond your height."
  },
  {
    "criterion": "Waterproof coating rating",
    "explanation": "A PU coating rating, such as PU3000, tells you the water column the fabric resists before leaking, measured in millimeters. Anything under about 1500mm is a fair-weather fabric, while 3000mm is a sensible floor for steady rain. Look for the number in the title or bullets, and treat a tent with no number as dry-weather only."
  },
  {
    "criterion": "Pole material and flex",
    "explanation": "Fiberglass poles are the norm under $30 because they are cheap, but they flex in wind and can splinter after a few seasons. Aluminum poles resist bending and cost more. Pick a tent with a pole repair sleeve or buy spare poles, and stake out guy lines in any breeze."
  },
  {
    "criterion": "Door and ventilation design",
    "explanation": "A single-layer tent with no vents traps breath moisture and drips condensation on sleepers. Mesh windows, a screen door layer or vent holes let humid air escape while bugs stay outside. Count the mesh panels, and make sure a rain fly can cover them without sealing every vent shut. Two opposite openings give the best cross breeze on a warm night."
  },
  {
    "criterion": "Carry weight and packed size",
    "explanation": "A tent that weighs under 3 lb suits walk-in sites and a tent over 4 lb is fine for car camping. Packed size matters too, because a long pole bag will not fit a small daypack. Check the listed weight and the packed length before ordering."
  }
];

export const faq = [
  {
    "q": "Is a tent under $30 waterproof enough for rain?",
    "a": "Only if it states a coating rating. The JELUCAMP Dome lists PU3000 polyester, which handles light to steady rain when pitched with its fly and taut guy lines. Tents without a rating, like the Wakeman D-Door 2P, are best kept for dry forecasts."
  },
  {
    "q": "How many people really fit in a budget 2 person tent?",
    "a": "Expect two adults on narrow pads with little gear space. The Wakeman Lightweight 2P is 57 inches wide, which fits two slim pads shoulder to shoulder. For comfort, buy the next size up or pick the wider JELUCAMP Dome."
  },
  {
    "q": "Is the Wind Tour Pop-Up worth it over a pole tent?",
    "a": "It is worth it when setup speed matters more than structure, such as for kids or beach trips. A pole tent such as the JELUCAMP Dome holds shape better in wind and packs flatter. If your campsite is exposed, choose the pole tent."
  },
  {
    "q": "How do I pitch a cheap tent so it lasts?",
    "a": "Stake all corners, tension the guy lines and keep the fly taut so rain does not pool in folds. Set the tent on a smooth patch and clear sharp stones before laying the floor. A cheap ground cloth under the floor protects thin fabric."
  },
  {
    "q": "How should I clean and store a budget tent?",
    "a": "Dry the tent fully before packing, because wet nylon mildews within days. Wipe the floor with a damp cloth and avoid washing machines, which strip coatings. Loosely fold it in a cool, dry closet to protect the waterproof layer."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
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
  },
  {
    "title": "Best 4 Season Tent Under 200",
    "href": "/tents-shelter/best-4-season-tent-under-200"
  }
];
