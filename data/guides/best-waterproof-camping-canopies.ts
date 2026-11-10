export const guideSlug = "best-waterproof-camping-canopies";
export const guideTitle = "4 Best Waterproof Camping Canopies in 2026";
export const metaTitle = "Best Waterproof Camping Canopies in 2026";
export const metaDescription = "Best waterproof camping canopies compared on coatings, seam sealing, fabric weight and wall options for wet-weather camping trips.";
export const mainKeyword = "best waterproof camping canopies";
export const introParagraphs = [
  "Waterproof is the claim that most often falls apart on a canopy, because many listings quote UV protection and call it rain-ready. This list favors listings that name a coating, a seam treatment or a millimeter rating.",
  "Four shelters are ranked here, from a 10x30 commercial canopy to a tarp awning with poles. Each one states some form of water protection, and the cons say where that protection stops."
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
    "id": "best-waterproof-camping-canopies-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "CROWN SHADES 10x30 Commercial Pop Up Canopy Tent",
    "price": "$359.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21Rp7ELZV8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GZVBPHJ6?tag=rvgearlab-20",
    "description": "The Crown Shades 10x30 uses 400D Oxford fabric that is described as waterproof and seam-sealed, with UPF 50+ protection that blocks 99 percent of UV. A CenterLOK one-push frame opens with no tools, with three adjustable leg heights.\n\nIt is by far the largest pick here at 10x30 ft, and the only one whose listing combines heavy 400D fabric with sealed seams. Against the Jojoka it uses a solid roof instead of mesh walls, and the thickened steel frame is built for the long span.\n\nCamp hosts and group leaders with an events-size area to keep dry will get the most from it. Sto-N-Go wheels let the canopy store with fabric attached.",
    "specs": [
      "400D Oxford, seam-sealed",
      "10x30 ft CenterLOK frame",
      "Sto-N-Go roller bag"
    ],
    "pros": [
      "400D fabric with sealed seams",
      "Thickened steel frame for the long span",
      "Sto-N-Go bag keeps fabric attached",
      "Three leg height settings"
    ],
    "cons": [
      "Highest price in this group",
      "Too large for small campsites"
    ],
    "bestFor": "Large rainy group camps",
    "take": "The most complete waterproof canopy here, sealed seams and all.",
    "catch": "A 10x30 footprint is a lot of canopy, so check the pad size before ordering."
  },
  {
    "id": "best-waterproof-camping-canopies-2",
    "rank": 2,
    "badge": "Best Rain Tarp",
    "name": "Camping Tarp with Poles & Retainer",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41DKFjmDGLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HG9GQL7C?tag=rvgearlab-20",
    "description": "The HOEYITO is a 14.5 x 11 ft camping tarp awning in 210D Oxford with a PU9000mm rating and a silver UV coating that blocks 99.99 percent of UV. It comes with poles and a double retainer system for sand, gravel and lawn.\n\nIts waterproof number is the highest on this list, ahead of the Crown Shades which only names sealed seams. It weighs 8.9 lbs and packs to 17.3 x 6.3 x 4.72 inches, and the listing covers 6 to 8 campers.\n\nBackpack-friendly campers and drivers who want a stronger rain shelter without a frame will like it. It also goes up as a hammock fly.",
    "specs": [
      "PU9000mm, 210D Oxford",
      "14.5 x 11 ft, 8.9 lbs",
      "Poles and dual retainers"
    ],
    "pros": [
      "PU9000mm is the highest rating listed",
      "Packs to 17.3 x 6.3 x 4.72 inches",
      "Shelters 6 to 8 campers",
      "Poles and retainers included"
    ],
    "cons": [
      "No walls or mesh included",
      "Tarp setup takes more tuning than pop-ups"
    ],
    "bestFor": "Light, high-rated rain cover",
    "take": "The best rain rating here at the lowest price, though it is a tarp shelter.",
    "catch": "A tarp awning needs guylines and staking skill, and offers no sidewalls."
  },
  {
    "id": "best-waterproof-camping-canopies-3",
    "rank": 3,
    "badge": "Best Screened Pick",
    "name": "Jojoka 13x13FT Pop Up Screen Canopy Tent",
    "price": "$170.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51NRRGGx8mL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HBPW7VT4?tag=rvgearlab-20",
    "description": "The Jojoka is a 13x13 ft instant gazebo with about 169 sq ft of coverage and UPF 50+ Oxford fabric that resists light rain. A pre-assembled steel frame opens with one push and it comes with six removable privacy and wind panels, mesh walls, guy ropes and ground stakes.\n\nIt gives more bug protection than the Crown Shades and more coverage than the HOEYITO. Its reinforced, powder-coated steel frame is stated for lasting durability, which separates it from the Aoxun's fiberglass poles.\n\nFamilies who want a screened room that sheds light rain are its target. The panels can be removed one at a time to tune the airflow.",
    "specs": [
      "13x13 ft, about 169 sq ft",
      "UPF 50+ light-rain Oxford",
      "Six panels, mesh walls"
    ],
    "pros": [
      "Mesh walls keep bugs out",
      "Six removable panels tune airflow",
      "Powder-coated steel frame",
      "Guy ropes and stakes included"
    ],
    "cons": [
      "Only light rain resistance is stated",
      "Wind panels limit visibility"
    ],
    "bestFor": "Screened rainy afternoons",
    "take": "A spacious screened gazebo that shrugs off light rain.",
    "catch": "The listing says resists light rain, so heavy downpours are better handled by the Crown Shades."
  },
  {
    "id": "best-waterproof-camping-canopies-4",
    "rank": 4,
    "badge": "Best Bug Shelter",
    "name": "Aoxun 12x12ft Pop Up Canopy Tent",
    "price": "$139.63",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51S+dIhMlLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G5N9K9PF?tag=rvgearlab-20",
    "description": "The Aoxun is a 12x12 ft pop-up gazebo in thickened 300D Oxford with fine polyester mesh, and the listing claims over 99 percent UV blocking. It stays upright on fiberglass poles with windproof ropes and luminous ground stakes.\n\nSix detachable wind cloths, two with windows, give wind and privacy control that the Crown Shades does not offer. Compared with the Jojoka it is a slightly smaller footprint with a lighter pole frame.\n\nBug-prone campsites with an occasional shower suit it, with the wind cloths for cooler evenings. Setup needs no tools.",
    "specs": [
      "12x12 ft, 300D Oxford",
      "Fiberglass poles, glow stakes",
      "6 wind cloths, 2 windows"
    ],
    "pros": [
      "Thicker 300D Oxford top",
      "Six wind cloths, two with windows",
      "Luminous stakes help at night",
      "Tool-free pop-up setup"
    ],
    "cons": [
      "No waterproof rating is stated",
      "Fiberglass poles flex in gusts"
    ],
    "bestFor": "Bug-free camps, light showers",
    "take": "A solid screened gazebo with wind cloths for camps with passing showers.",
    "catch": "The listing never names a waterproof rating, so treat it as showers-only."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated waterproofing",
    "description": "Millimeter ratings, sealed seams and coating types came first."
  },
  {
    "title": "Fabric weight",
    "description": "Denier figures such as 210D, 300D and 400D were compared."
  },
  {
    "title": "Shape and walls",
    "description": "Open tarps, mesh gazebos and solid canopies were weighed for the rain they handle."
  },
  {
    "title": "Carry and setup",
    "description": "Packed size, weight and tool-free frames were included."
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
    "subheading": "By how much rain to expect",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Steady rain over a big group",
          "Crown Shades 10x30 Commercial Canopy",
          "400D fabric with sealed seams"
        ],
        [
          "Hard rain, light packing",
          "HOEYITO 14.5 x 11 ft Tarp Canopy",
          "PU9000mm rating at 8.9 lbs"
        ],
        [
          "Showers and bugs",
          "Jojoka 13x13 Screen Canopy",
          "Light-rain Oxford plus mesh walls"
        ],
        [
          "Passing showers, mosquito country",
          "Aoxun 12x12 Screen Gazebo",
          "300D fabric with six wind cloths"
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
          "$50 to $140",
          "HOEYITO 14.5 x 11 ft Tarp Canopy or Aoxun 12x12 Screen Gazebo"
        ],
        [
          "$170 to $360",
          "Jojoka 13x13 Screen Canopy or Crown Shades 10x30 Commercial Canopy"
        ]
      ]
    }
  },
  {
    "subheading": "Pop-up canopy vs tarp awning",
    "cards": [
      {
        "label": "Pop-up canopy",
        "text": "A frame lifts the roof and the fabric stays tensioned, and setup takes minutes. Crown Shades 10x30 Commercial Canopy, Jojoka 13x13 Screen Canopy and Aoxun 12x12 Screen Gazebo are pop-ups."
      },
      {
        "label": "Tarp awning",
        "text": "Poles and guylines hold a rated sheet, which packs far smaller and handles hard rain well. HOEYITO 14.5 x 11 ft Tarp Canopy is the tarp pick."
      }
    ],
    "note": "Pick Crown Shades 10x30 Commercial Canopy for convenience, or HOEYITO 14.5 x 11 ft Tarp Canopy when a rating and pack size matter most."
  },
  {
    "subheading": "By portability",
    "table": {
      "headers": [
        "If you need",
        "Recommended pick"
      ],
      "rows": [
        [
          "A small pack",
          "HOEYITO 14.5 x 11 ft Tarp Canopy"
        ],
        [
          "A wheeled roller bag",
          "Crown Shades 10x30 Commercial Canopy"
        ],
        [
          "A carry bag for a screened room",
          "Jojoka 13x13 Screen Canopy"
        ],
        [
          "A pop-up that packs flat",
          "Aoxun 12x12 Screen Gazebo"
        ]
      ]
    }
  },
  {
    "subheading": "For rainy campouts Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A coating rating, sealed seams and a roof angle that sheds water instead of pooling it."
      },
      {
        "label": "In this comparison",
        "text": "HOEYITO 14.5 x 11 ft Tarp Canopy states PU9000mm, and Crown Shades 10x30 Commercial Canopy states seam-sealed 400D Oxford."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Crown Shades 10x30 Commercial Canopy if you shelter a large group, since 400D fabric and sealed seams are real storm gear. Jojoka 13x13 Screen Canopy adds bug cover too."
      },
      {
        "label": "Save if",
        "text": "Save with HOEYITO 14.5 x 11 ft Tarp Canopy, which gives the highest stated rating for the least money. Aoxun 12x12 Screen Gazebo suits showers and bugs at a mid price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Millimeter rating",
    "explanation": "A figure such as PU9000mm shows how much water pressure a coating resists before leaking, so higher is better. Many listings skip the number and just say waterproof. Look for it in the title, the bullets or the spec table."
  },
  {
    "criterion": "Seam sealing",
    "explanation": "Stitch holes let water through even on a waterproof fabric, so sealed or taped seams matter as much as the coating. Without them a canopy drips along the roof lines. Check that the listing names sealed or heat-sealed seams."
  },
  {
    "criterion": "Fabric denier",
    "explanation": "Denier measures thread weight, and 400D resists wear and flex longer than 150D. Heavy fabric adds pounds to the carry. Look for the denier and for a PU or silver coating on top."
  },
  {
    "criterion": "Roof slope and ponding",
    "explanation": "Flat roof panels let water sit in a sag and force seams. A steep or tensioned roof sheds it. Check roof shape and whether the poles keep the top tight."
  },
  {
    "criterion": "Mesh vs solid walls",
    "explanation": "Mesh keeps bugs out and lets rain blow in under sideways wind. Solid walls block it. Look for removable panels if you want both."
  }
];

export const faq = [
  {
    "q": "Does UPF 50+ mean waterproof?",
    "a": "No. UPF measures sun protection and says nothing about rain. A canopy needs a coating or sealed seams to keep water out. The Crown Shades and HOEYITO name both a rating and seam or coating details."
  },
  {
    "q": "What is the common waterproof canopy mistake?",
    "a": "Assuming mesh walls shed rain. Mesh is for bugs, so sideways rain will pass straight through. Close wall panels when weather turns."
  },
  {
    "q": "Is the Crown Shades worth it over a tarp?",
    "a": "For groups, yes, since the pop-up frame and sealed seams give more cover. For one or two campers, the HOEYITO tarp costs far less. Match shelter to group size."
  },
  {
    "q": "How do I set up a tarp awning in rain?",
    "a": "Pitch it with one side higher so water runs off, and stake it taut. The HOEYITO retainers and poles hold it on soft ground. Check tension after the first shower."
  },
  {
    "q": "How do I prevent roof pooling?",
    "a": "Keep the canopy top tight and tilt it slightly with leg heights. Empty water pockets by pushing up from underneath. Pooling can bend a frame."
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
