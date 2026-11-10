export const guideSlug = "best-3-season-tents";
export const guideTitle = "4 Best 3 Season Tents in 2026";
export const metaTitle = "Best 3 Season Tents in 2026";
export const metaDescription = "Best 3 season tents compared on rain protection, ventilation, weight and setup for spring, summer and fall camping from 2 to 4 people.";
export const mainKeyword = "best 3 season tents";
export const introParagraphs = [
  "A 3 season tent is built for spring, summer and fall: plenty of mesh for airflow, a rainfly for showers and poles that handle moderate wind, but not heavy snow loads. That makes ventilation and rain protection the specs to judge, since they decide comfort in the three seasons these tents are meant for.",
  "Four tents that label themselves 3 season or 3 to 4 season were compared on stated waterproof rating, floor design, ventilation and setup. Tents sold as 4 season were left out, because a winter build is a different category."
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
    "id": "best-3-season-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "OneTigris COSMITTO 2 Person Backpacking Tent Shelter- Free Standing Lightweight Waterproof 3 Season Camping Te",
    "price": "$143.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ztbU+XByL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08T1MQZRH?tag=rvgearlab-20",
    "description": "The OneTigris COSMITTO is a freestanding 2 person backpacking tent built from 20D plaid ripstop polyester with a 75D nylon floor and a 1500mm waterproof coating. It has aluminum alloy frame poles, two zippered entrances and two large gear organizer pockets.\n\nIt is the only tent here sold plainly as 3 season, with a heavier floor fabric than the Forceatt tents. Compared with the Amazon Basics it trades floor space for a lighter, more packable frame.\n\nIt suits backpackers who hike in for spring and fall trips. Setup uses a simple pole and fly arrangement that packs to a small stuff sack.",
    "specs": [
      "2 person freestanding",
      "20D ripstop, 75D floor",
      "1500mm waterproof coating"
    ],
    "pros": [
      "Rugged 75D nylon floor",
      "Aluminum alloy frame poles",
      "Two doors and gear pockets",
      "Freestanding setup"
    ],
    "cons": [
      "Lower waterproof rating than the Forceatt",
      "Only two-person capacity"
    ],
    "bestFor": "Spring and fall backpacking",
    "take": "A true 3 season backpacking tent with a tough floor.",
    "catch": "The 1500mm rating is adequate for showers, and seam sealing helps in storms."
  },
  {
    "id": "best-3-season-tents-2",
    "rank": 2,
    "badge": "Best Weather Rating",
    "name": "Forceatt Tent for 2 Person is Waterproof and Windproof",
    "price": "$75.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31LJHCY0T9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08F7HQHXQ?tag=rvgearlab-20",
    "description": "The Forceatt 2 person tent weighs 5.5 lb and has an 88.6 by 53.1 inch floor with a 43.3 inch interior height. A 3000mm waterproof index, a welded floor, 7001 series aluminum poles, two D-shaped doors and two vestibules are listed.\n\nIt has twice the stated waterproof rating of the COSMITTO and two vestibules for gear. Compared with the Forceatt 3-person it is smaller and lighter, with a lower price.\n\nIt suits couples who want a rain-ready tent that stores boots and packs in vestibules. Setup takes about 3 minutes, per the listing.",
    "specs": [
      "5.5 lb, 88.6 x 53.1 in floor",
      "3000mm waterproof",
      "Two doors, two vestibules"
    ],
    "pros": [
      "3000mm waterproof rating",
      "Two vestibules for gear",
      "Welded floor",
      "Ventilation with two ceiling vents"
    ],
    "cons": [
      "Sold as 3 to 4 seasons",
      "Floor is tight for two plus gear"
    ],
    "bestFor": "Couples in rainy seasons",
    "take": "The best rain rating and storage layout for two people.",
    "catch": "A 3 to 4 season label means mesh and vents, not a true winter build."
  },
  {
    "id": "best-3-season-tents-3",
    "rank": 3,
    "badge": "Best for Three",
    "name": "Forceatt Tent 3 Person Camping Tent",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31LJHCY0T9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B083R68NSV?tag=rvgearlab-20",
    "description": "Inside, the Forceatt 3 person tent runs 225 by 185 by 120 cm, which converts to about 88 by 73 by 47 inches. The shell is 70D polyester with a 200T coating, and airflow comes from one big mesh window plus a pair of roof openings above a welded floor.\n\nIt adds the most headroom here at about 47 inches and is the largest backpacking-style tent in the list. Compared with the 2-person Forceatt it sleeps one more person and costs more.\n\nIt suits three friends or a couple with gear who hike to the site. The listing claims a 3 minute setup with smooth No. 8 zippers.",
    "specs": [
      "225 x 185 x 120 cm interior",
      "70D polyester, 200T coating",
      "Large mesh window, two vents"
    ],
    "pros": [
      "About 47 inches of headroom",
      "Welded floor against ground water",
      "Mesh window plus roof vents",
      "Fast setup claimed at 3 minutes"
    ],
    "cons": [
      "Larger and heavier to carry",
      "Sold as 3 to 4 seasons"
    ],
    "bestFor": "Three campers",
    "take": "The roomiest of the lightweight three-person options.",
    "catch": "Weight is not stated on the listing, so check before a long hike."
  },
  {
    "id": "best-3-season-tents-4",
    "rank": 4,
    "badge": "Best for Car Camping",
    "name": "Amazon Basics 4-Person Camping Tent with Quick Setup",
    "price": "$76.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31mxD85jaYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B077Y8DLSN?tag=rvgearlab-20",
    "description": "This Amazon Basics dome is sold as a 3-season, 4-person tent on a 9 by 7 ft floor, standing 48 inches at the peak. Shock-corded poles slide through snag-free sleeves in under 6 minutes, while the rainfly lifts off and the seams are welded rather than stitched.\n\nIt has by far the most floor space, which suits car camping rather than backpacking. Compared with the COSMITTO it trades packability for a much larger living space.\n\nIt suits a family or friends camping by the car for summer weekends. An interior mesh pocket and carry bag are included.",
    "specs": [
      "9 x 7 ft floor, 48 in height",
      "Welded seams, removable fly",
      "Under 6 minute setup"
    ],
    "pros": [
      "9 by 7 ft floor fits four adults",
      "Sets up in under 6 minutes",
      "Rear window with air port",
      "Low price for four-person room"
    ],
    "cons": [
      "Water-resistant fabric, no rating listed",
      "Too bulky for backpacking"
    ],
    "bestFor": "Summer car camping",
    "take": "The roomy, quick-pitch dome for car camping on a budget.",
    "catch": "The listing gives no waterproof rating, so seal seams for storms."
  }
];

export const howWeEvaluated = [
  {
    "title": "Seasonality",
    "description": "Only tents sold as 3 or 3 to 4 season were kept."
  },
  {
    "title": "Waterproofing",
    "description": "Stated mm ratings and floor welding."
  },
  {
    "title": "Ventilation",
    "description": "Mesh windows and vents."
  },
  {
    "title": "Setup",
    "description": "Listed minutes and pole type."
  },
  {
    "title": "Size",
    "description": "Floor dimensions and capacity."
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
          "Spring and fall backpacking",
          "OneTigris COSMITTO 3-Season",
          "Tough floor and freestanding frame."
        ],
        [
          "Rainy trips for two",
          "Forceatt 2-Person 3-4 Season",
          "3000mm rating and vestibules."
        ],
        [
          "Three friends hiking in",
          "Forceatt 3-Person 3-4 Season",
          "47 inches of headroom."
        ],
        [
          "Car camping with family",
          "Amazon Basics 4-Person 3-Season Dome",
          "9 by 7 ft floor."
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
          "$70 to $80",
          "Forceatt 2-Person 3-4 Season or Amazon Basics 4-Person 3-Season Dome"
        ],
        [
          "$90 to $150",
          "Forceatt 3-Person 3-4 Season or OneTigris COSMITTO 3-Season"
        ]
      ]
    }
  },
  {
    "subheading": "Backpacking vs Car Camping",
    "cards": [
      {
        "label": "Backpacking",
        "text": "Lighter tents with smaller floors. The OneTigris COSMITTO 3-Season and Forceatt 2-Person 3-4 Season fit here."
      },
      {
        "label": "Car camping",
        "text": "Bigger tents with room for gear. The Amazon Basics 4-Person 3-Season Dome and Forceatt 3-Person 3-4 Season fit here."
      }
    ],
    "note": "Choose the Forceatt 2-Person 3-4 Season for hikes and the Amazon Basics 4-Person 3-Season Dome for car trips."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest",
          "Forceatt 2-Person 3-4 Season"
        ],
        [
          "Low-mid",
          "Amazon Basics 4-Person 3-Season Dome"
        ],
        [
          "Mid",
          "Forceatt 3-Person 3-4 Season"
        ],
        [
          "Highest",
          "OneTigris COSMITTO 3-Season"
        ]
      ]
    }
  },
  {
    "subheading": "Rainy Spring and Fall Trips",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated waterproof rating of 3000mm and a welded floor."
      },
      {
        "label": "In this comparison",
        "text": "The Forceatt 2-Person 3-4 Season lists 3000mm with a welded floor and two vestibules."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the OneTigris COSMITTO 3-Season for the tougher floor and freestanding frame."
      },
      {
        "label": "Save if",
        "text": "Save with the Amazon Basics 4-Person 3-Season Dome for car camping."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 3 season means",
    "explanation": "A 3 season tent handles spring, summer and fall: rain, wind and warm nights. It is not built for heavy snow, which needs a stronger pole structure and less mesh. Check the listing for the season label rather than guessing."
  },
  {
    "criterion": "Waterproof rating",
    "explanation": "A rating of 1500mm handles showers, while 3000mm suits heavier rain. Welded or taped seams and a bathtub floor matter as much as the number. Look for the rating and the seam detail on the listing."
  },
  {
    "criterion": "Ventilation and condensation",
    "explanation": "Mesh panels and roof vents let moist air out so the inside stays dry. A fully sealed fly traps breath moisture on cool nights. Look for ceiling vents and a high-low airflow path."
  },
  {
    "criterion": "Capacity and real room",
    "explanation": "A 2 person label often means two sleeping pads with no gear space. Add one person to the rating for comfort or choose the 3 person Forceatt. Compare floor dimensions rather than the label."
  },
  {
    "criterion": "Weight, packed size and setup",
    "explanation": "Backpackers need a tent under about 6 lb that packs small. Car campers can accept a heavier tent for space. Check the listed weight and the setup time claim."
  }
];

export const faq = [
  {
    "q": "Can a 3 season tent handle snow?",
    "a": "Light snow, briefly. Heavy snow loads need a 4 season build. The Forceatt tents list 3 to 4 seasons but are still mesh-heavy."
  },
  {
    "q": "What is the common mistake?",
    "a": "Buying by person count. A 2 person tent fits two pads with no gear room. Size up one person for comfort."
  },
  {
    "q": "Is a higher waterproof rating worth it?",
    "a": "For storms, yes. 3000mm on the Forceatt 2-Person 3-4 Season beats the COSMITTO's 1500mm. Seam sealing and a good pitch matter more."
  },
  {
    "q": "How do I set up a freestanding tent?",
    "a": "Lay out the body, assemble the poles through the sleeves or clips, raise the frame, stake the corners and attach the fly. Stake the guy lines in wind. Practice at home."
  },
  {
    "q": "How do I keep a 3 season tent dry?",
    "a": "Pitch the fly taut, open vents, seal seams and avoid cooking inside. Dry the tent fully before storage. Re-seal seams every few seasons."
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
