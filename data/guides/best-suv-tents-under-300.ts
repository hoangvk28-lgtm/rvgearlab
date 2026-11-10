export const guideSlug = "best-suv-tents-under-300";
export const guideTitle = "5 Best Suv Tents Under 300 in 2026";
export const metaTitle = "Best Suv Tents Under 300 in 2026";
export const metaDescription = "Best SUV tents under $300 compared on setup speed, floor size, rain rating and screened rooms, for families who want a fast or roomy car-camping tent.";
export const mainKeyword = "best suv tents under 300";
export const introParagraphs = [
  "Between $150 and $300 you reach instant-pitch SUV tents and screened tailgate rooms that cost far more at premium brands. The tradeoff is weight, since the frames that open in a minute are heavier than pole tents.",
  "Five tents made the list, ranked by setup speed, floor size and extras such as a movie screen. Prices run from about $103 to $286."
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
    "id": "best-suv-tents-under-300-1",
    "rank": 1,
    "badge": "Best Value Under $300",
    "name": "KingCamp SUV Tent",
    "price": "$269.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51HG7UBui2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQ7DV8GC?tag=rvgearlab-20",
    "description": "The KingCamp is an instant SUV tent, 9.2 by 9.2 by 7.2 feet, sleeping 6 to 8 with a quick-open frame that sets up and packs down in 3 minutes. It uses 150D Oxford with a PU3000mm coating, three large windows and a mesh roof panel.\n\nA detachable vehicle sleeve lets the tent stand alone, and a movie screen option adds entertainment. It costs about $16 less than the Happy Travel and has a similar quick pitch.\n\nIt suits families who want fast setup, a PU3000 coating and a big floor. Mesh and windows cut condensation.",
    "specs": [
      "9.2 x 9.2 x 7.2 ft, 6-8 people",
      "Quick-open frame, 3 minute setup",
      "150D Oxford, PU3000"
    ],
    "pros": [
      "Sets up in about 3 minutes",
      "PU3000 waterproof coating",
      "Three windows and mesh roof",
      "Detachable sleeve"
    ],
    "cons": [
      "Frame is heavier than pole tents",
      "Close to the price cap"
    ],
    "bestFor": "Families who value speed",
    "take": "A fast, waterproof instant tent with room for a crowd.",
    "catch": "Instant frames weigh more, so plan a vehicle carry."
  },
  {
    "id": "best-suv-tents-under-300-2",
    "rank": 2,
    "badge": "Best Instant Pitch",
    "name": "Happy Travel SUV Tents for Camping",
    "price": "$285.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KpRpgEsNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GXT6ZFD7?tag=rvgearlab-20",
    "description": "The Happy Travel has pre-attached poles that pitch in about a minute with a hydraulic device at the top. It measures 10 by 10 feet with an 83 inch height, fits a king-size air mattress and attaches to the tailgate of most SUVs, MPVs and trucks.\n\nIt pitches faster than the KingCamp and offers a larger square floor than the 9.2 foot KingCamp. A 3000mm PU-coated fabric and a mesh roof add comfort.\n\nIt suits families who want the fastest route from parking to sleeping room. It covers many vehicle types.",
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
      "Hydraulic top adds weight"
    ],
    "bestFor": "Families who hate pitching",
    "take": "The fastest and roomiest instant tent in the group.",
    "catch": "Check the vehicle list for your model before ordering."
  },
  {
    "id": "best-suv-tents-under-300-3",
    "rank": 3,
    "badge": "Best Budget Dome",
    "name": "UNP SUV Dome Tent for Camping Outdoor 6 Person Car Camping Tent",
    "price": "$109.27",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410+UJ3nFuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DFYCMFWG?tag=rvgearlab-20",
    "description": "The UNP Dome gives a 10 by 10 foot floor under an 84 inch ceiling for 4 to 6 adults, with four mesh windows and a rainfly that has taped seams. A heavy-duty elastic sleeve with adjustable straps wraps the car.\n\nIt offers the same floor size as the Happy Travel at well under half the price. Poles are threaded by hand, so it pitches slower than the instant tents.\n\nBudget buyers with CUVs, SUVs and minivans get standing room without paying for an instant frame. Pole threading is the only extra work.",
    "specs": [
      "10 ft square, 84 in center",
      "Elastic vehicle sleeve",
      "Four windows, taped rainfly"
    ],
    "pros": [
      "Lowest price in the group after the screen room",
      "Tallest standing height tied with Happy Travel",
      "Taped rainfly seams",
      "Fits CUVs, SUVs and minivans"
    ],
    "cons": [
      "Poles are threaded by hand",
      "Six adults will be snug"
    ],
    "bestFor": "Budget family camping",
    "take": "The same 10 by 10 foot floor as the instant tents at far less.",
    "catch": "Setup takes longer than the instant tents."
  },
  {
    "id": "best-suv-tents-under-300-4",
    "rank": 4,
    "badge": "Best Screened Tailgate Room",
    "name": "VEVOR Screen House Tent",
    "price": "$102.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51j5A6CE-aL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G4W542PV?tag=rvgearlab-20",
    "description": "The VEVOR connects to an SUV tailgate and opens as a 6 by 6 foot pop-up screen house for 4 to 6 people. High-density mesh walls keep mosquitoes out, fabric panels give shade and a curved roof sheds rain.\n\nCheapest of the five and the lone screened room, it does a different job than the sleeping tents. Fiberglass and steel poles make a sturdy frame, and a ground cloth, stakes and carry bag are in the box.\n\nIt suits families who eat and relax at the back of the vehicle. It pairs well with a sleeping tent.",
    "specs": [
      "6 x 6 ft pop-up screen house",
      "Fiberglass and steel poles",
      "Ground cloth, stakes included"
    ],
    "pros": [
      "Mesh walls block mosquitoes",
      "Pop-up setup without tools",
      "Curved roof sheds rain",
      "Ground cloth and stakes included"
    ],
    "cons": [
      "Seats four to six at most",
      "Mesh gives shade, not full weather cover"
    ],
    "bestFor": "Bug-free lounging",
    "take": "A pop-up screened room that hooks onto the back of an SUV.",
    "catch": "The 6 by 6 foot footprint fills fast with chairs and a table."
  },
  {
    "id": "best-suv-tents-under-300-5",
    "rank": 5,
    "badge": "Best Compact Waterproof Tent",
    "name": "SUV Tent for Camping with Rainfly",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31c5BpWBheL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DS9KF52L?tag=rvgearlab-20",
    "description": "This hatch-attached tent offers an 8 by 8 by 7.2 foot floor for 4 to 6 adults, a PU3000mm shell, sealed seams and two layers of fabric. It connects to SUVs, crossovers, minivans and pickups and stands alone too.\n\nIt carries the same PU3000 rating as the instant tents while costing about half as much, and it pitches in roughly five minutes with a helper. The trade is a smaller floor and slower setup than the instant frames.\n\nWaterproof camping without an instant-frame premium is its job. The carry bag measures 23.6 by 11 by 11 inches.",
    "specs": [
      "Sealed PU3000 shell",
      "8 ft square, 7.2 ft tall",
      "Hatch or standalone use"
    ],
    "pros": [
      "PU3000 rating at half the price",
      "Sleeve connects to the hatch",
      "Stands alone when needed",
      "Fits in a compact bag"
    ],
    "cons": [
      "Smaller floor than the instant tents",
      "Poles take longer than instant frames"
    ],
    "bestFor": "Waterproof on a budget",
    "take": "Instant-tent rain protection at about half the cost.",
    "catch": "At 8 by 8 feet it suits two to four adults."
  }
];

export const howWeEvaluated = [
  {
    "title": "Setup speed",
    "description": "Compared stated pitch times from 1 to 10 minutes."
  },
  {
    "title": "Floor and height",
    "description": "Compared 6 by 6, 8 by 8, 9.2 and 10 foot floors."
  },
  {
    "title": "Rain rating",
    "description": "Looked at PU3000 and sealed seams."
  },
  {
    "title": "Extras",
    "description": "Counted screens, sleeves and rooms."
  },
  {
    "title": "Price",
    "description": "Ranked value between $103 and $286."
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
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Fast setup and big floor",
          "KingCamp 6-8 Instant",
          "3 minute frame."
        ],
        [
          "Fastest possible pitch",
          "Happy Travel 6-Person",
          "About one minute."
        ],
        [
          "Roomy on a budget",
          "UNP 10x10 Dome",
          "10 by 10 floor."
        ],
        [
          "Bug-free lounge",
          "VEVOR 6x6 Screen Room",
          "Mesh walls."
        ],
        [
          "Waterproof on a budget",
          "Waterproof SUV Tent PU3000",
          "PU3000 for half the price."
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
          "$100 to $130",
          "VEVOR 6x6 Screen Room or UNP 10x10 Dome"
        ],
        [
          "$140 to $270",
          "Waterproof SUV Tent PU3000 or KingCamp 6-8 Instant"
        ],
        [
          "$280 to $290",
          "Happy Travel 6-Person"
        ]
      ]
    }
  },
  {
    "subheading": "Instant Frame vs Pole Tent",
    "cards": [
      {
        "label": "Instant frame",
        "text": "The frame is attached and pops open in minutes. The KingCamp 6-8 Instant and Happy Travel 6-Person use it."
      },
      {
        "label": "Pole tent",
        "text": "Poles thread through sleeves, taking longer but weighing less. The UNP 10x10 Dome and Waterproof SUV Tent PU3000 are pole tents."
      }
    ],
    "note": "Pick an instant tent such as the KingCamp 6-8 Instant if you pitch often."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $103, screen room",
          "VEVOR 6x6 Screen Room"
        ],
        [
          "About $122, dome",
          "UNP 10x10 Dome"
        ],
        [
          "About $150, waterproof",
          "Waterproof SUV Tent PU3000"
        ],
        [
          "About $270, instant",
          "KingCamp 6-8 Instant"
        ],
        [
          "About $286, fastest",
          "Happy Travel 6-Person"
        ]
      ]
    }
  },
  {
    "subheading": "Family Weekend Trips Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A floor of at least 9 by 9 feet, a PU3000 coating and a quick pitch."
      },
      {
        "label": "In this comparison",
        "text": "The KingCamp 6-8 Instant and Happy Travel 6-Person both hit that mark."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend up to the cap on the Happy Travel 6-Person for the quickest pitch, or on the KingCamp 6-8 Instant for the best value."
      },
      {
        "label": "Save if",
        "text": "Save with the UNP 10x10 Dome or Waterproof SUV Tent PU3000 if you do not mind poles."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Instant versus pole tent",
    "explanation": "An instant frame opens in one to three minutes and packs down just as fast, while pole tents take five to fifteen minutes to pitch. The frame adds weight and bulk to the carry. Decide how often you move camp before paying extra for the speed, because weekend campers benefit most."
  },
  {
    "criterion": "Floor size and mattress",
    "explanation": "A 10 by 10 foot floor holds a king air mattress or two queens with room to step around, while 8 by 8 feet fits a single queen plus a little gear. Check the dimensions against your mattress size. Gear also takes space, so add roughly a quarter to your estimate."
  },
  {
    "criterion": "Waterproof coating",
    "explanation": "PU3000 handles steady rain and is common on the instant tents, while PU2000 suits showers and dry-season trips. Sealed seams matter as much as the coating because the stitching is where most leaks start. Look for the PU figure and seam notes in the product details, and treat a missing figure as a fair-weather tent."
  },
  {
    "criterion": "Vehicle sleeve",
    "explanation": "A sleeve ties the tent to the hatch and keeps rain out of the doorway. It must fit your vehicle type, and not every sleeve works with trucks or unusual hatch shapes. Check the vehicle compatibility note on the page and measure the opening before you order."
  },
  {
    "criterion": "Screen room versus sleeping tent",
    "explanation": "A screen room is for sitting and eating without bugs, while a sleeping tent is for sleeping. A 6 by 6 foot room seats four with a small table and little else. Think about whether you need both, and whether your sleeping setup already has mesh."
  }
];

export const faq = [
  {
    "q": "Are instant tents worth the extra money?",
    "a": "Yes for frequent trips, because a 1 to 3 minute pitch beats a 10 minute one every time. The KingCamp 6-8 Instant and Happy Travel 6-Person deliver on that. For occasional trips a pole tent saves money."
  },
  {
    "q": "Does the Happy Travel fit a Tesla?",
    "a": "The product names the Tesla Model Y and Jeep among the vehicles it fits. Check the vehicle list for your exact model and hatch shape before ordering. The sleeve is built to wrap many hatch types, but a tight fit still depends on your opening."
  },
  {
    "q": "Can I use the VEVOR screen room as a tent?",
    "a": "No, it is a screened room for lounging and eating, not a sleeping tent. It has mesh walls and fabric shade panels with a 6 by 6 foot footprint. Pair it with a sleeping tent, or sleep in the SUV and use the room by day."
  },
  {
    "q": "How do I pack an instant tent?",
    "a": "Close the doors and zippers, push the frame inward as shown in the instructions and fold it into the carry bag. Practice at home before the first trip, since the fold takes a few tries. A bag with handles or wheels makes carrying easier."
  },
  {
    "q": "Does an instant tent hold up in wind?",
    "a": "Stake every point and use all the guy lines, because instant frames can flex in strong gusts. Face the narrow end into the wind when possible. Take it down in storms rather than risk a bent frame."
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
