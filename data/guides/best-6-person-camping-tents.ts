export const guideSlug = "best-6-person-camping-tents";
export const guideTitle = "6 Best 6 Person Camping Tents in 2026";
export const metaTitle = "Best 6 Person Camping Tents in 2026";
export const metaDescription = "Best 6-person camping tents compared on floor size, headroom, instant versus dome setup and weather build for family trips.";
export const mainKeyword = "best 6 person camping tents";
export const introParagraphs = [
  "A six-person camping tent is the family workhorse, large enough for two queen air beds and a corner of gear. The choices split between instant tents that pitch in a minute and classic domes that cost less and take a few minutes longer.",
  "Six tents are included, from a Coleman instant model to a budget Amazon Basics dome. They were ranked by how plainly each listing backs its capacity with a floor size, a center height or an air-bed count."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-camper-by-tent.webp";
export const heroImageAlt = "Camper standing next to a tent at a campsite";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-6-person-camping-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Coleman 4/6/8/10 Person Instant Camping Tent with 1-Minute Setup",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31FPNquhvfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D6NQKDWJ?tag=rvgearlab-20",
    "description": "The Coleman instant tent has a 10 ft by 9 ft floor in the 6-person size and goes up in as fast as 1 minute. It uses double-thick Polyguard 2X fabric, welded corners with inverted seams and an integrated rainfly that improves airflow.\n\nAgainst the Skydome it has a faster pitch and a heavier fabric, and costs about 70 dollars more. Compared with the Fanttik it has a larger stated floor and a brand-name weather system.\n\nIt suits families who camp often and want the fastest, sturdiest pitch. The listing spans 4 to 10 person sizes, so pick the 6-person one.",
    "specs": [
      "10 x 9 ft, 1 minute setup",
      "Polyguard 2X fabric",
      "Integrated rainfly"
    ],
    "pros": [
      "Pitches in about one minute",
      "Double-thick Polyguard 2X fabric",
      "Welded corners, inverted seams",
      "Rainfly built into the frame"
    ],
    "cons": [
      "Highest price of the six",
      "Listing spans several sizes"
    ],
    "bestFor": "Frequent family weekends",
    "take": "The fastest and sturdiest six-person tent here, built for people who pitch often.",
    "catch": "The listing covers 4, 6, 8 and 10 person sizes, so select 6 at checkout."
  },
  {
    "id": "best-6-person-camping-tents-2",
    "rank": 2,
    "badge": "Best Classic Dome",
    "name": "Coleman Sundome Camping Tent with Rainfly",
    "price": "$114.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31PIc2XOSmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7QFZNS7?tag=rvgearlab-20",
    "description": "The Coleman Sundome 6-person dome fits two queen airbeds and has a 6 foot center height. Welded corners and inverted seams keep water out, large windows and a ground vent move air, and continuous pole sleeves with Insta-Clip attachments speed up setup.\n\nIt costs about 15 dollars less than the Skydome and is a simpler dome than the instant Coleman. Against the Amazon Basics it has the taller 6 foot peak and a stated airbed fit.\n\nIt suits families that want standing room at a mid price. The tent packs into an included carry bag.",
    "specs": [
      "Two queen airbeds",
      "6 ft center height",
      "Insta-Clip pole attachments"
    ],
    "pros": [
      "Six foot center height",
      "Fits two queen air mattresses",
      "Ground vent and large windows",
      "Continuous pole sleeves"
    ],
    "cons": [
      "Needs about 10 minutes to pitch",
      "Dome walls cut corner space"
    ],
    "bestFor": "Standing room on a mid budget",
    "take": "A roomy classic dome with a 6 foot peak and a stated two-airbed floor.",
    "catch": "The listing spans 2, 3, 4 and 6 person sizes."
  },
  {
    "id": "best-6-person-camping-tents-3",
    "rank": 3,
    "badge": "Best Headroom Dome",
    "name": "Coleman Skydome 2/4/6/8 Person Camping Tent with 5-Minute Setup",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31w3dnjC5pL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7QL1LHC?tag=rvgearlab-20",
    "description": "The Coleman Skydome pitches in under 5 minutes on poles already attached to the body, and its nearly vertical walls give 20 percent more headroom than traditional Coleman domes. Its frame is tested to 35 mph winds, and a wider door eases air beds and bags in and out.\n\nIt sits between the Sundome and the instant model on price and pitch speed. Against the Fanttik it uses a dome shape with a taller wall instead of a pop-up cabin.\n\nIt suits families who want taller walls and a wide door at a mid price. Welded corners and inverted seams handle rain.",
    "specs": [
      "Pre-attached poles, 5 minutes",
      "20 percent more headroom",
      "35 mph tested frame"
    ],
    "pros": [
      "Walls are almost vertical",
      "Frame tested to 35 mph",
      "Wider door for air beds",
      "Pre-attached poles save time"
    ],
    "cons": [
      "No floor dimensions in the listing",
      "Listing spans 2 to 8 sizes"
    ],
    "bestFor": "Taller walls, wide door",
    "take": "A mid-priced dome with taller walls and a tested frame.",
    "catch": "Pick the 6-person size from the listing's options."
  },
  {
    "id": "best-6-person-camping-tents-4",
    "rank": 4,
    "badge": "Best Value Instant",
    "name": "FanttikOutdoor Zeta C6 Pro 6 Person Tent for Camping Setup in 60s",
    "price": "$121.58",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41eLu13lAoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CR144NCS?tag=rvgearlab-20",
    "description": "The Fanttik Zeta C6 Pro measures 120 by 108 inches and pitches in under 60 seconds. Airflow comes from windows on every side, plus low vents and a mesh ceiling, and a door drainage channel and power cord entrance round it out.\n\nIt costs about 78 dollars less than the instant Coleman and offers a stated frank capacity. Against the ADSMART it has a taller build and a cord port.\n\nIt suits families that want a fast pitch without the top price. The listing says 6 for sleeping only and 3 with camping gear.",
    "specs": [
      "120 x 108 in, 60 second setup",
      "Mesh on four sides",
      "Drainage channel, cord port"
    ],
    "pros": [
      "Pitches in under 60 seconds",
      "Four-sided mesh and floor vents",
      "Door drainage channel",
      "Frank capacity: 3 with gear"
    ],
    "cons": [
      "Real comfort is 3 with gear",
      "Smaller floor than 10 x 9 ft rivals"
    ],
    "bestFor": "Fast pitch, mid budget",
    "take": "A well-priced instant tent with honest sizing.",
    "catch": "It sleeps three comfortably with gear, so treat 6 as a squeeze."
  },
  {
    "id": "best-6-person-camping-tents-5",
    "rank": 5,
    "badge": "Best Packed Size",
    "name": "ADSMART Instant Tents for Camping 6 Person Tent Waterproof for Outdoor",
    "price": "$87.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/310T2i6VSNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJSK8VZ9?tag=rvgearlab-20",
    "description": "The ADSMART instant tent is 10 ft by 9 ft by 66 inches with pre-attached poles that set up in 60 seconds. It folds to 8 by 8 by 42 inches and weighs 16 pounds, with 3 large mesh windows and 4 steel leg poles.\n\nIt costs less than any of the Colemans here. Against the Fanttik it has a bigger stated floor with a lower 66 inch roof.\n\nIt suits campers with a small trunk who want an instant tent. The listing includes a stake kit with it.",
    "specs": [
      "10 x 9 ft, 66 in tall",
      "16 lbs, folds 42 in",
      "Three mesh windows"
    ],
    "pros": [
      "Folds to 8 x 8 x 42 inches",
      "Only 16 pounds",
      "60 second setup",
      "Three large mesh windows"
    ],
    "cons": [
      "Low 66 inch roof",
      "No waterproof rating named"
    ],
    "bestFor": "Small trunk, quick pitch",
    "take": "A compact instant tent that fits small cars.",
    "catch": "At 66 inches tall, adults cannot stand upright inside."
  },
  {
    "id": "best-6-person-camping-tents-6",
    "rank": 6,
    "badge": "Best Budget Dome",
    "name": "Amazon Basics 6-Person Dome Camping Tent with Easy Setup",
    "price": "$73.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Nuz9EptIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DDSYHYVX?tag=rvgearlab-20",
    "description": "The Amazon Basics 6-person dome is a three-season free-standing tent in water-resistant coated polyester with welded seams. Shock-corded poles with snag-free sleeves set it up in under 6 minutes, and a rainfly has a back window and a cool-air port.\n\nPriced lowest of the six, it works as a dome for camping or hiking. Against the instant tents it takes a few more minutes to pitch.\n\nIt suits first-time families on a budget. An interior mesh pocket and a compact storage bag are included.",
    "specs": [
      "Three-season free-standing dome",
      "Welded seams, coated polyester",
      "Pitches in under 6 minutes"
    ],
    "pros": [
      "Lowest price of the six",
      "Free-standing dome",
      "Back window and cool-air port",
      "Mesh pocket and storage bag"
    ],
    "cons": [
      "No floor dimensions listed",
      "Water-resistant, not rated in mm"
    ],
    "bestFor": "First-time family camping",
    "take": "The cheapest six-person dome, with a simple pitch.",
    "catch": "The listing gives no floor size, so check the product page before buying."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity honesty",
    "description": "Stated sleeper counts, air bed fits and with-gear numbers were compared."
  },
  {
    "title": "Floor and headroom",
    "description": "Footprints and center heights from 66 inches to 6 feet were compared."
  },
  {
    "title": "Pitch method",
    "description": "Instant, pre-attached and shock-corded dome setups were compared by minutes."
  },
  {
    "title": "Weather build",
    "description": "Seam welding, rainfly design and tested frames were compared."
  },
  {
    "title": "Pack size and weight",
    "description": "Folded size and weight were compared for small trunks."
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
          "Pitch every weekend",
          "Coleman 6-Person Instant Tent",
          "1 minute setup with Polyguard 2X fabric."
        ],
        [
          "Standing room on a mid budget",
          "Coleman Sundome 6-Person Dome",
          "6 ft center height."
        ],
        [
          "Taller walls and a wide door",
          "Coleman Skydome 6-Person Tent",
          "20 percent more headroom."
        ],
        [
          "Fast pitch without the top price",
          "Fanttik Zeta C6 Pro Instant Tent",
          "Under 60 seconds."
        ],
        [
          "Small trunk",
          "ADSMART 6-Person Instant Tent",
          "Folds to 42 inches."
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
          "$70 to $90",
          "Amazon Basics 6-Person Dome Tent or ADSMART 6-Person Instant Tent"
        ],
        [
          "$110 to $130",
          "Coleman Sundome 6-Person Dome or Fanttik Zeta C6 Pro Instant Tent"
        ],
        [
          "$120 to $200",
          "Coleman Skydome 6-Person Tent or Coleman 6-Person Instant Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Instant vs Dome",
    "cards": [
      {
        "label": "Instant",
        "text": "Coleman 6-Person Instant Tent, Fanttik Zeta C6 Pro Instant Tent and ADSMART 6-Person Instant Tent pitch in about a minute."
      },
      {
        "label": "Dome",
        "text": "Coleman Sundome 6-Person Dome, Coleman Skydome 6-Person Tent and Amazon Basics 6-Person Dome Tent take 5 to 10 minutes and cost less."
      }
    ],
    "note": "Choose Coleman Sundome 6-Person Dome for most families, and an instant model if you pitch weekly."
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
          "Under 90 dollars",
          "Amazon Basics 6-Person Dome Tent"
        ],
        [
          "90 to 125 dollars",
          "Fanttik Zeta C6 Pro Instant Tent"
        ],
        [
          "Around 115 to 130 dollars",
          "Coleman Sundome 6-Person Dome"
        ],
        [
          "Around 200 dollars",
          "Coleman 6-Person Instant Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For Families With Two Queen Beds Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "a floor around 10 x 9 ft and a center height above 5 ft"
      },
      {
        "label": "In this comparison",
        "text": "Coleman Sundome 6-Person Dome states a two-airbed fit, while Coleman 6-Person Instant Tent has a 10 x 9 ft floor."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you camp most weekends, because Coleman 6-Person Instant Tent is quicker and has heavier fabric. Coleman Skydome 6-Person Tent adds headroom."
      },
      {
        "label": "Save if",
        "text": "Save with Amazon Basics 6-Person Dome Tent or ADSMART 6-Person Instant Tent if you camp a few times a year. Both cost under 90 dollars."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Real six-person capacity",
    "explanation": "A six-person label counts bags side by side. Two queen air beds fit in about a 10 x 9 ft floor. Look for an air bed count or a with-gear number."
  },
  {
    "criterion": "Center height",
    "explanation": "A 6 foot center lets adults stand, while 66 inches forces a crouch. Wall shape matters as much. Check the height in the listing."
  },
  {
    "criterion": "Instant vs dome",
    "explanation": "Instant tents have poles attached and pitch in a minute. Domes take 5 to 10 minutes and cost less. Choose by how often you camp."
  },
  {
    "criterion": "Seam construction",
    "explanation": "Welded or taped seams stop leaks at stitching. A tub floor lifts water away from the bed. Check the seam wording on the listing."
  },
  {
    "criterion": "Ventilation",
    "explanation": "Mesh windows, ground vents and a cool-air port reduce condensation. Four-sided mesh beats one back window. Count the vents."
  },
  {
    "criterion": "Pack size",
    "explanation": "A 6-person tent weighs about 16 lbs or more. A 42 inch folded length fits a small trunk. Check dimensions."
  }
];

export const faq = [
  {
    "q": "Can six adults sleep in a 6-person tent?",
    "a": "Only without gear. Fanttik says 6 for sleeping only and 3 with gear. Plan on a family of four."
  },
  {
    "q": "What is the common 6-person tent mistake?",
    "a": "Ignoring the peak. A 66 inch roof means stooping. Check the center height."
  },
  {
    "q": "Is the instant Coleman worth it over the Sundome?",
    "a": "It costs about 85 dollars more and adds a one-minute pitch and heavier fabric. Coleman Sundome 6-Person Dome has a taller listed peak. Pay for instant if you camp often."
  },
  {
    "q": "How do I set up a dome tent?",
    "a": "Lay out the body, thread the poles and flex them into the corners. Clip the body, add the fly and stake it. Two people take about 5 to 10 minutes."
  },
  {
    "q": "How do I stop condensation?",
    "a": "Open the roof and ground vents and keep wet gear outside. Pitch away from wet grass. Dry the fly before packing."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
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
  },
  {
    "title": "Best 4 Season Tent Under 300",
    "href": "/tents-shelter/best-4-season-tent-under-300"
  }
];
