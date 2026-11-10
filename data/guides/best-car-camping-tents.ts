export const guideSlug = "best-car-camping-tents";
export const guideTitle = "6 Best Car Camping Tents in 2026";
export const metaTitle = "Best Car Camping Tents in 2026";
export const metaDescription = "Best car camping tents compared: six SUV and tailgate tents that attach to your vehicle, with notes on fit, size, rain rating and standalone use.";
export const mainKeyword = "best car camping tents";
export const introParagraphs = [
  "Car camping tents that attach to the back of an SUV, minivan or pickup give you a sleeping room you can walk into from the trunk. The big questions are how the sleeve seals to your vehicle and whether the tent also stands alone when you drive off.",
  "Six models are included, from an instant 6-person SUV tent to an 8 ft by 8 ft hatchback attachment. They are ranked by listed vehicle fit, floor size and rain rating."
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
    "id": "best-car-camping-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Happy Travel SUV Tents for Camping",
    "price": "$285.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KpRpgEsNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GXT6ZFD7?tag=rvgearlab-20",
    "description": "The Happy Travel SUV tent has pre-attached poles that pitch it in about a minute, helped by a hydraulic device at the top. It is 10 ft by 10 ft with an 83 inch height, fits a king-size air mattress and attaches to the tailgate of most SUVs, MPVs and trucks, including the Tesla Model Y and Jeep.\n\nAgainst the TIMBER RIDGE tents it pitches faster and offers a larger square floor. Compared with the WildFinder it has a stated 3000mm rating and a hydraulic top.\n\nIt suits families who want the fastest way to a sleeping room attached to the car. Mesh covers the top for stargazing.",
    "specs": [
      "10 x 10 ft, 83 in tall",
      "60 second instant setup",
      "Tailgate sleeve fits most SUVs"
    ],
    "pros": [
      "Pitches in about one minute",
      "Fits a king-size air mattress",
      "Fits SUVs, MPVs, trucks, hatchbacks",
      "3000mm PU-coated fabric"
    ],
    "cons": [
      "Priciest in the group",
      "Fixed hydraulic top adds weight"
    ],
    "bestFor": "Fast setup at the tailgate",
    "take": "The fastest, roomiest vehicle tent in the group, with broad vehicle fit.",
    "catch": "Check the vehicle list for your model before ordering."
  },
  {
    "id": "best-car-camping-tents-2",
    "rank": 2,
    "badge": "Best With Porch",
    "name": "TIMBER RIDGE 5-9 Person SUV Tent with Screen Porch and Awning for Camping",
    "price": "$216.57",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hjf5DCopL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CT87D3MV?tag=rvgearlab-20",
    "description": "The TIMBER RIDGE SUV tent is 13 ft by 10 ft with an 87 inch center height and a 6 ft by 8 ft screened porch with an awning. It fits up to five campers with two air mattresses, connects to the car trunk and stands alone if needed.\n\nIt has the tallest ceiling here and the only screened porch. Against the smaller TIMBER RIDGE it is bigger and costs more.\n\nIt suits families who want a bug-free area for shoes, coolers and chairs. The PU2000 fabric and double doors cover rain and airflow.",
    "specs": [
      "13 x 10 ft, 87 in tall",
      "6 x 8 ft screened porch",
      "Connects to trunk, stands alone"
    ],
    "pros": [
      "Screened porch with awning",
      "Tallest ceiling at 87 inches",
      "Trunk access stays dry in rain",
      "Works as a standalone tent"
    ],
    "cons": [
      "Rated for five despite the 5 to 9 label",
      "PU2000 is a moderate rating"
    ],
    "bestFor": "Bug-free tailgate living",
    "take": "A large SUV tent with a screened porch and the tallest ceiling.",
    "catch": "The title says 5 to 9 persons, while the listing says up to five campers."
  },
  {
    "id": "best-car-camping-tents-3",
    "rank": 3,
    "badge": "Best Mid-Size Tent",
    "name": "TIMBER RIDGE 5 Person Truck-Bed-Tents SUV Camping Tent",
    "price": "$179.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51DwI+jnWaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CGX2XLXW?tag=rvgearlab-20",
    "description": "The TIMBER RIDGE 5-person SUV tent is 10 ft by 8 ft with over 7.1 ft of height and a seamless trunk connection. It uses PU2000 waterproof coating on wear-proof polyester taffeta, has 2 mesh storage pockets and can be removed from the vehicle for standalone use.\n\nIt is smaller than the 5-9 model and costs less. Against the Portal it has a stated stand-up height and a gapless connection.\n\nIt suits couples or small families who want a standard SUV tent. It fits CUVs, SUVs, minivans and pickups with bed lids.",
    "specs": [
      "10 x 8 ft, 7.1+ ft height",
      "PU2000, polyester taffeta",
      "Stands alone off the vehicle"
    ],
    "pros": [
      "Seamless trunk connection",
      "Over 7.1 ft of headroom",
      "Two mesh storage pockets",
      "Standalone mode"
    ],
    "cons": [
      "No porch",
      "PU2000 is a modest rating"
    ],
    "bestFor": "Couples and small families",
    "take": "A mid-size vehicle tent with real standing height.",
    "catch": "No porch, so gear sits inside the tent."
  },
  {
    "id": "best-car-camping-tents-4",
    "rank": 4,
    "badge": "Best Universal Fit",
    "name": "WildFinder SUV Tent",
    "price": "$119.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51jHmCIHUgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H7RRVCN4?tag=rvgearlab-20",
    "description": "The WildFinder SUV tent has a 10 by 9 ft floor under a 78 inch peak and fits 5 to 6 adults. An adjustable elastic sleeve connects it to SUVs, CUVs, minivans and wagons, and a PU3000 coating on 190T taffeta gives rain protection.\n\nIts price is well under half of the Happy Travel, with the same stated 3000 water rating. Against the Portal it has a larger floor and a universal sleeve.\n\nIt suits campers who want one tent for several vehicles. It works connected or as a standalone ground tent.",
    "specs": [
      "10 x 9 ft, 78 in center",
      "Adjustable elastic sleeve",
      "190T, PU3000 coating"
    ],
    "pros": [
      "Elastic sleeve fits many vehicles",
      "PU3000 rain coating",
      "Standalone or connected use",
      "Large mesh windows and doors"
    ],
    "cons": [
      "PU3000 is described as light rain",
      "Not an instant frame"
    ],
    "bestFor": "Multiple vehicles",
    "take": "A universal sleeve and a 3000 coating at a moderate price.",
    "catch": "The listing calls the coating suited to light rain."
  },
  {
    "id": "best-car-camping-tents-5",
    "rank": 5,
    "badge": "Best Value With Porch",
    "name": "Portal 5-Person SUV Tent with Porch",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51XP5pP34sL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CG1MS8H8?tag=rvgearlab-20",
    "description": "The Portal SUV tent measures 10 ft by 8 ft by 7.2 ft and has a wide porch and a PU 2000mm water-resistant coating. Two large windows and a full mesh ceiling ventilate it, and it fits SUVs, MPVs, vans, pickups with bed covers and crossovers.\n\nIt is the cheapest tent here with a porch. Against the TIMBER RIDGE 5-person it adds a porch, and against the VEVOR it adds a standing height of 7.2 ft.\n\nIt suits budget campers who want a vehicle tent with a covered entry. It also works as a standalone tent.",
    "specs": [
      "10 x 8 x 7.2 ft",
      "Wide porch",
      "PU 2000mm coating"
    ],
    "pros": [
      "Includes a wide porch",
      "Full standing height",
      "Full mesh ceiling",
      "Standalone mode"
    ],
    "cons": [
      "Two people recommended to install",
      "PU2000 is a modest rating"
    ],
    "bestFor": "Budget vehicle tent with porch",
    "take": "A porch and 7.2 ft ceiling for a low price.",
    "catch": "Installation takes two people."
  },
  {
    "id": "best-car-camping-tents-6",
    "rank": 6,
    "badge": "Best Budget Attachment",
    "name": "VEVOR SUV Camping Tent",
    "price": "$88.11",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VVVPqg99L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C5JGHMQY?tag=rvgearlab-20",
    "description": "The VEVOR SUV tent attachment is 8 ft by 8 ft with a PU2000 coating, a double-layer design and thickened 9 mm fiberglass poles. It installs on hatchbacks or stands alone, with high-density mesh windows and a skylight.\n\nPriced lowest in the group, it is also the smallest. Against the Portal it has a smaller floor and no porch.\n\nIt suits hatchback owners and solo campers who want a basic attachment. The streamlined shape reduces wind resistance.",
    "specs": [
      "8 x 8 ft attachment",
      "PU2000, double layer",
      "9 mm fiberglass poles"
    ],
    "pros": [
      "Lowest price in the group",
      "Fits hatchbacks",
      "Skylight and mesh windows",
      "Thick 9 mm poles"
    ],
    "cons": [
      "Smallest floor of the six",
      "No porch"
    ],
    "bestFor": "Hatchback owners",
    "take": "The cheapest vehicle tent, sized for one or two.",
    "catch": "At 8 x 8 ft, it suits two people with little gear."
  }
];

export const howWeEvaluated = [
  {
    "title": "Vehicle fit",
    "description": "Listed vehicles, sleeve designs and standalone options were compared."
  },
  {
    "title": "Floor size and height",
    "description": "Floors from 8x8 ft to 13x10 ft and heights from 7.1 to 7.3 ft were compared."
  },
  {
    "title": "Rain protection",
    "description": "PU ratings from 2000 to 3000 were compared."
  },
  {
    "title": "Setup",
    "description": "Instant and pole setups were compared by minutes and crew."
  },
  {
    "title": "Porch and extras",
    "description": "Porches, awnings and skylights were counted."
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
    "subheading": "By Vehicle and Use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "SUV or truck, fast setup",
          "Happy Travel 6-Person Instant SUV Tent",
          "60 second pitch."
        ],
        [
          "Bug-free tailgate living",
          "TIMBER RIDGE 5-9 Person SUV Tent With Porch",
          "Screened porch and awning."
        ],
        [
          "Couples and small families",
          "TIMBER RIDGE 5-Person SUV Tent",
          "10 x 8 ft with 7.1 ft height."
        ],
        [
          "Several vehicles in a household",
          "WildFinder 6-Person Universal SUV Tent",
          "Adjustable elastic sleeve."
        ],
        [
          "Hatchback",
          "VEVOR 8x8 SUV Attachment Tent",
          "Lowest price, fits hatchbacks."
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
          "$80 to $100",
          "VEVOR 8x8 SUV Attachment Tent or Portal 5-Person SUV Tent With Porch"
        ],
        [
          "$110 to $180",
          "WildFinder 6-Person Universal SUV Tent or TIMBER RIDGE 5-Person SUV Tent"
        ],
        [
          "$210 to $290",
          "TIMBER RIDGE 5-9 Person SUV Tent With Porch or Happy Travel 6-Person Instant SUV Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Instant vs Pole Setup",
    "cards": [
      {
        "label": "Instant",
        "text": "Happy Travel 6-Person Instant SUV Tent has attached poles and pitches in about a minute."
      },
      {
        "label": "Pole setup",
        "text": "TIMBER RIDGE 5-9 Person SUV Tent With Porch, TIMBER RIDGE 5-Person SUV Tent, WildFinder 6-Person Universal SUV Tent, Portal 5-Person SUV Tent With Porch and VEVOR 8x8 SUV Attachment Tent use poles and cost less."
      }
    ],
    "note": "Choose Portal 5-Person SUV Tent With Porch for most buyers, and Happy Travel 6-Person Instant SUV Tent if pitch speed matters."
  },
  {
    "subheading": "By Rain Rating",
    "table": {
      "headers": [
        "Rating",
        "Recommended pick"
      ],
      "rows": [
        [
          "PU3000",
          "Happy Travel 6-Person Instant SUV Tent"
        ],
        [
          "PU3000",
          "WildFinder 6-Person Universal SUV Tent"
        ],
        [
          "PU2000, porch",
          "Portal 5-Person SUV Tent With Porch"
        ],
        [
          "PU2000, bigger floor",
          "TIMBER RIDGE 5-9 Person SUV Tent With Porch"
        ]
      ]
    }
  },
  {
    "subheading": "For Weekend Family Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "a sleeve that fits your vehicle and a floor for two air beds"
      },
      {
        "label": "In this comparison",
        "text": "TIMBER RIDGE 5-9 Person SUV Tent With Porch fits two air mattresses and a porch, while Happy Travel 6-Person Instant SUV Tent fits a king mattress."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you camp often, because Happy Travel 6-Person Instant SUV Tent pitches in a minute and TIMBER RIDGE 5-9 Person SUV Tent With Porch adds a screened porch. Both save effort."
      },
      {
        "label": "Save if",
        "text": "Save with Portal 5-Person SUV Tent With Porch or VEVOR 8x8 SUV Attachment Tent if you camp occasionally. Both cost under 100 dollars."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Vehicle compatibility",
    "explanation": "A vehicle tent connects through a sleeve that wraps around the tailgate or trunk. The sleeve has to fit your opening, so check the listed vehicle types. Pickups with a bed cover use a different connection."
  },
  {
    "criterion": "Standalone mode",
    "explanation": "Most SUV tents can also stand without the car. That lets you drive away from camp without packing everything. Check for a statement about standalone use."
  },
  {
    "criterion": "Seal around the opening",
    "explanation": "The sleeve seals with elastic or straps. A gap lets in rain and bugs. Look for a gapless connection in the listing."
  },
  {
    "criterion": "PU rating",
    "explanation": "A PU 2000 or 3000 rating tells you the coating's water resistance. 3000 is better for rain. Check the number."
  },
  {
    "criterion": "Floor and height",
    "explanation": "A 10 x 8 ft floor fits two air beds, and 13 x 10 ft fits more. A 7 ft height lets adults stand. Compare both numbers."
  },
  {
    "criterion": "Porch or awning",
    "explanation": "A porch gives a covered spot for shoes. A screened porch also blocks bugs. Check porch dimensions."
  }
];

export const faq = [
  {
    "q": "Will an SUV tent fit my vehicle?",
    "a": "Check the vehicle list on the listing. Happy Travel names SUVs, MPVs, trucks and the Tesla Model Y. Pickups with bed covers need a different fit."
  },
  {
    "q": "What is the common SUV tent mistake?",
    "a": "Leaving gaps at the sleeve. Rain and bugs enter. Tighten the straps and check the seal."
  },
  {
    "q": "Is Happy Travel worth it over WildFinder?",
    "a": "It costs more than double and adds instant setup, a hydraulic top and a king bed fit. WildFinder 6-Person Universal SUV Tent is cheaper. Pay for Happy Travel if you pitch often."
  },
  {
    "q": "How do I attach an SUV tent?",
    "a": "Back the car close, pull the sleeve over the opening and tighten the straps. Stake the tent corners. Two people make it easier."
  },
  {
    "q": "How do I use the tent when the car leaves?",
    "a": "Disconnect the sleeve and stake the tent down. Some tents close the sleeve with a flap. Check the listing for standalone use."
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
