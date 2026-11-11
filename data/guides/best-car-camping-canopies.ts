export const guideSlug = "best-car-camping-canopies";
export const guideTitle = "5 Best Car Camping Canopies in 2026";
export const metaTitle = "Best Car Camping Canopies in 2026";
export const metaDescription = "Best car camping canopies compared on vehicle attachment, shade area, rain cover and setup, from tailgate tents to side awnings.";
export const mainKeyword = "best car camping canopies";
export const introParagraphs = [
  "Car camping canopies fall into two families: shelters that clip onto your vehicle and canopy-style shades that stand beside it. The right one depends on whether you want a screened room off the tailgate or a big roof of shade.",
  "Five shelters stayed on the list, ordered by shade coverage, vehicle fit and how little pitching effort each listing describes. Two colours of one cube tent are counted once."
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
    "id": "best-car-camping-canopies-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "GEERTOP Car Tailgate Awning 19 x 16 FT",
    "price": "$79.19",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/211lwi6gvhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DDXWFR2R?tag=rvgearlab-amz-20",
    "description": "The GEERTOP awning is a 19 x 16 ft sheet of 210T polyester that gives roughly 215 square feet of shade, held up by two telescopic poles adjustable from 72 to 83 inches. Buckle straps connect it to Jeeps, SUVs, vans and trucks.\n\nIt offers the most stated shade in this guide and three pitch options, including a single-pole A-frame and a dual-pole awning. Next to the HipierFx it is larger and ships with telescoping poles, while the JOYTUTUS gives enclosure rather than roof area.\n\nCamp-kitchen cooks and groups of four or more get the best use from it. One piece of fabric covers a table, chairs and the tailgate.",
    "specs": [
      "About 215 sq ft of shade",
      "Poles adjust 72 to 83 inches",
      "Buckles fit SUVs, vans, trucks"
    ],
    "pros": [
      "Largest shade area in this group",
      "Three pitch layouts, A-frame included",
      "Adjustable poles handle uneven ground",
      "Buckle system fits many vehicle types"
    ],
    "cons": [
      "No walls or bug protection",
      "Wind makes a large flat sheet work hard"
    ],
    "bestFor": "Camp kitchens and group shade",
    "take": "The biggest roof here, for crews who want a table under cover.",
    "catch": "It is an open awning, so bugs and sideways rain can reach the table."
  },
  {
    "id": "best-car-camping-canopies-2",
    "rank": 2,
    "badge": "Best Screen Room",
    "name": "VEVOR SUV Tailgate Tent",
    "price": "$102.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51j5A6CE-aL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G4W542PV?tag=rvgearlab-amz-20",
    "description": "The VEVOR connects directly to an SUV tailgate and opens as a 6 x 6 ft pop-up screen house for 4 to 6 people. High-density mesh walls keep mosquitoes out, with fabric panels for shade and a curved roof to shed rain.\n\nCompared with the GEERTOP, it gives bug-free walls in place of open shade, and its fiberglass and steel poles are a sturdier frame than the awning poles. Against the JOYTUTUS it is a screen house, while the JOYTUTUS is a sleeping and privacy tent.\n\nFamilies that eat and relax at the back of the vehicle will use it most. A ground cloth, stakes and carry bag arrive in the box.",
    "specs": [
      "6 x 6 ft pop-up screen house",
      "Fiberglass and steel poles",
      "Ground cloth, stakes included"
    ],
    "pros": [
      "Mesh walls block mosquitoes",
      "Pop-up setup without tools",
      "Curved roof sheds rain",
      "Ground cloth and stakes are included"
    ],
    "cons": [
      "Seats four to six at most",
      "Mesh gives shade, not full weather cover"
    ],
    "bestFor": "Bug-free tailgate living room",
    "take": "A pop-up screened room that hooks onto the back of an SUV.",
    "catch": "The 6 x 6 ft footprint fills fast with chairs and a table."
  },
  {
    "id": "best-car-camping-canopies-3",
    "rank": 3,
    "badge": "Best Hatchback Tent",
    "name": "JOYTUTUS SUV Tailgate Tent with Awning Shade",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41dv4mhh+IL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BRZ68W3P?tag=rvgearlab-amz-20",
    "description": "The JOYTUTUS tailgate tent uses 150D polyester oxford with a PU2000 coating and adds a waterproof canopy that covers the car roof from the rear to the windshield. An expandable awning and breathable mesh round out the build.\n\nIt is the most car-integrated pick, built around upward-opening hatchbacks, SUVs, vans and MPVs with adjustable straps. Next to the VEVOR it covers the vehicle itself and installs in about 8 minutes, while the VEVOR is a free-standing screen house.\n\nDrivers who sleep in the back of an SUV and want privacy will like it. The package packs to 17.3 by 7.8 by 7.8 inches and includes two steel poles.",
    "specs": [
      "150D oxford, PU2000 coating",
      "Roof cover to windshield",
      "About 8 minute install"
    ],
    "pros": [
      "Covers the roof down to the windshield",
      "PU2000 coating sheds rain",
      "Packs to 17.3 x 7.8 inches",
      "Fits hatchbacks, SUVs, vans, MPVs"
    ],
    "cons": [
      "Only fits upward-opening hatches",
      "Uses a few stakes and guylines"
    ],
    "bestFor": "Sleeping in an SUV",
    "take": "A tent that wraps around the hatch and roof for private SUV camping.",
    "catch": "It needs an upward-opening tailgate, so sedans and side-door vans are out."
  },
  {
    "id": "best-car-camping-canopies-4",
    "rank": 4,
    "badge": "Best Budget Awning",
    "name": "10x16 ft Car Side Awning with Pole Outdoor Camping Tent Tarp Waterproof Car Tent Canopy Shade Sun Shelter",
    "price": "$54.14",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/512V5DUtwsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQ797MKT?tag=rvgearlab-amz-20",
    "description": "The HipierFx is a 10 x 16 ft car side awning in 190T ripstop polyester with a silver PU coating rated to 3000mm and a UV50+ rating. Eight pulling points anchor the sheet, and the whole kit weighs about 2.5 kg.\n\nIt is the least expensive pick and carries a higher stated waterproof number than the JOYTUTUS. Compared with the GEERTOP, it covers less ground and does not list telescoping poles.\n\nBudget campers who want a car-side rain and sun shelter that also serves as a tarp should consider it. The listing names uses as a hammock fly, kitchen shelter and tent footprint.",
    "specs": [
      "10 x 16 ft, 3000mm coating",
      "190T ripstop, UV50+ rating",
      "8 pulling points, 2.5 kg"
    ],
    "pros": [
      "Lowest price in this group",
      "3000mm waterproof coating",
      "Ripstop weave with double stitching",
      "Doubles as a tarp or hammock fly"
    ],
    "cons": [
      "Smaller shade area than the GEERTOP",
      "No walls or mesh included"
    ],
    "bestFor": "Light budget shade",
    "take": "A cheap, light rain and sun sheet that doubles as a camp tarp.",
    "catch": "It has no tailgate fitting listed, so you rig it to your own tie points."
  },
  {
    "id": "best-car-camping-canopies-5",
    "rank": 5,
    "badge": "Best Sleeping Cube",
    "name": "UNP Cube Tent for Camping",
    "price": "$113.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41kijdyg6nL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D4QBC8RV?tag=rvgearlab-amz-20",
    "description": "The UNP cube tent is a 10 x 10 pop-up canopy attachment that uses a pole-and-clip system and mesh panels with adjustable vents. It adds an enclosed room to a canopy frame, and it is sold in grey and ocean blue.\n\nUnlike the GEERTOP and HipierFx, it is an enclosure rather than a roof, so it pairs with a canopy instead of a vehicle. It also differs from the VEVOR by working with the 10 x 10 frame you may already own.\n\nCar campers who already carry a 10 x 10 canopy get a sleep or changing room from it. Its mesh and vents help limit condensation.",
    "specs": [
      "10 x 10 canopy attachment",
      "Pole and clip assembly",
      "Mesh panels, adjustable vents"
    ],
    "pros": [
      "Turns a canopy into a closed room",
      "Mesh panels with adjustable vents",
      "Pole-and-clip assembly is simple",
      "Comes in two colours"
    ],
    "cons": [
      "Needs a compatible 10 x 10 canopy",
      "Does not attach to a car"
    ],
    "bestFor": "Canopy owners wanting privacy",
    "take": "A cube room for the 10 x 10 canopy already in your trunk.",
    "catch": "The listing is generic about fabric and ratings, so treat it as a fair-weather add-on."
  }
];

export const howWeEvaluated = [
  {
    "title": "Vehicle fit",
    "description": "Each shelter was checked for how it attaches or whether it needs a vehicle at all."
  },
  {
    "title": "Shade area",
    "description": "Stated dimensions and square footage were compared."
  },
  {
    "title": "Weather cover",
    "description": "Waterproof coatings and mesh walls were weighed against open awnings."
  },
  {
    "title": "Setup and packing",
    "description": "Pitch time and packed size were compared for trunk use."
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
    "subheading": "By how you camp from the car",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Cooking and eating under shade",
          "GEERTOP 19 x 16 ft Tailgate Awning",
          "About 215 sq ft under adjustable poles"
        ],
        [
          "Bug-free lounging at the tailgate",
          "VEVOR 6 x 6 ft SUV Tailgate Tent",
          "Mesh walls on an attached pop-up room"
        ],
        [
          "Sleeping in the hatchback",
          "JOYTUTUS SUV Tailgate Tent",
          "Rear and roof cover with an awning"
        ],
        [
          "Cheap rain and sun cover",
          "HipierFx 10 x 16 ft Car Awning",
          "3000mm coating at the lowest price"
        ],
        [
          "Private room beside the car",
          "UNP Cube Tent Canopy Attachment",
          "Cube walls for a 10 x 10 canopy"
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
          "$50 to $60",
          "HipierFx 10 x 16 ft Car Awning or JOYTUTUS SUV Tailgate Tent"
        ],
        [
          "$70 to $110",
          "GEERTOP 19 x 16 ft Tailgate Awning or VEVOR 6 x 6 ft SUV Tailgate Tent"
        ],
        [
          "$110 to $120",
          "UNP Cube Tent Canopy Attachment"
        ]
      ]
    }
  },
  {
    "subheading": "Open awning vs enclosed shelter",
    "cards": [
      {
        "label": "Open awnings",
        "text": "They cover more ground with simple fabric and poles but give no bug or wind protection. GEERTOP 19 x 16 ft Tailgate Awning and HipierFx 10 x 16 ft Car Awning are this type."
      },
      {
        "label": "Enclosed shelters",
        "text": "Mesh or fabric walls stop insects and add privacy, though they cover less area. VEVOR 6 x 6 ft SUV Tailgate Tent, JOYTUTUS SUV Tailgate Tent and UNP Cube Tent Canopy Attachment fit here."
      }
    ],
    "note": "Pick GEERTOP 19 x 16 ft Tailgate Awning for open shade, and VEVOR 6 x 6 ft SUV Tailgate Tent if mosquitoes decide your trip."
  },
  {
    "subheading": "By vehicle type",
    "table": {
      "headers": [
        "If you drive",
        "Recommended pick"
      ],
      "rows": [
        [
          "A Jeep, SUV, van or truck",
          "GEERTOP 19 x 16 ft Tailgate Awning"
        ],
        [
          "An SUV with an upward-opening hatch",
          "JOYTUTUS SUV Tailgate Tent"
        ],
        [
          "Any SUV, with a tailgate pop-up",
          "VEVOR 6 x 6 ft SUV Tailgate Tent"
        ],
        [
          "Anything, using tie points",
          "HipierFx 10 x 16 ft Car Awning"
        ]
      ]
    }
  },
  {
    "subheading": "For rainy car camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated coating rating, a sealed roof and a shape that sheds water rather than pooling it."
      },
      {
        "label": "In this comparison",
        "text": "HipierFx 10 x 16 ft Car Awning states 3000mm, and JOYTUTUS SUV Tailgate Tent adds PU2000 plus a roof cover that keeps the rear cabin dry."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on GEERTOP 19 x 16 ft Tailgate Awning or VEVOR 6 x 6 ft SUV Tailgate Tent. The extra cost buys either the biggest shade or a bug-free living room."
      },
      {
        "label": "Save if",
        "text": "Save with HipierFx 10 x 16 ft Car Awning for simple shade, or JOYTUTUS SUV Tailgate Tent if you want hatchback coverage without the larger price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Awning, tailgate tent or cube",
    "explanation": "An awning is an open roof, a tailgate tent seals to the rear of the vehicle and a cube is a room for a canopy. Each solves a different job, so pick the shape before the brand. Read the first bullet of the listing to see which kind it is."
  },
  {
    "criterion": "Vehicle attachment method",
    "explanation": "Buckles, straps and tailgate sleeves only work if they match your vehicle shape. Hatchbacks and SUVs with upward-opening gates differ from side-door vans. Look for a named compatibility list in the listing."
  },
  {
    "criterion": "Shade area in square feet",
    "explanation": "A canopy that sounds big may only shade a table. Stated square footage or dimensions let you size it against chairs and a cooler. Look for length and width, not just a size category."
  },
  {
    "criterion": "Waterproof coating rating",
    "explanation": "PU2000 or 3000mm numbers show how much water the fabric resists before leaking. Open awnings still let rain blow under. Check that the coating number is stated and ideally matched with taped or sealed seams."
  },
  {
    "criterion": "Pole and stake kit",
    "explanation": "Poles and stakes hold the shelter up in wind, so a thin kit is a weak point. Steel and adjustable telescoping poles handle uneven ground. Look at the package list for pole type, guylines and stake count."
  }
];

export const faq = [
  {
    "q": "Will a tailgate tent fit my car?",
    "a": "The JOYTUTUS lists upward-opening hatchbacks, SUVs, vans and MPVs, and the GEERTOP lists Jeeps, SUVs, vans and trucks. Measure the opening and compare it with the listing. A sedan trunk rarely works."
  },
  {
    "q": "What is the biggest mistake with a vehicle awning?",
    "a": "Skipping the guylines. A wide sheet catches wind like a sail, so stake every corner and lower the poles when gusts rise. Take it down if the forecast turns."
  },
  {
    "q": "Is the VEVOR worth it over an awning?",
    "a": "Yes if bugs are the issue, since mesh walls beat any open sheet. A GEERTOP gives far more roof for the money. Decide whether you need walls or area."
  },
  {
    "q": "How do I set up the GEERTOP alone?",
    "a": "Buckle one edge to the roof rack or tailgate area, then raise the poles on the far side. Set the heights from 72 to 83 inches and stake the corners. Tune the tension last."
  },
  {
    "q": "How do I care for a coated awning?",
    "a": "Dry it before packing so the coating does not stick or mold. Wipe off sap and dirt. Store it loosely in the bag."
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
