export const guideSlug = "best-canvas-tents-under-500";
export const guideTitle = "4 Best Canvas Tents Under 500 in 2026";
export const metaTitle = "Best Canvas Tents Under 500 in 2026";
export const metaDescription = "Best canvas tents under $500 compared on diameter, fabric weight, stove jacks and floors, for families and groups who want a stove-ready bell or cabin tent.";
export const mainKeyword = "best canvas tents under 500";
export const introParagraphs = [
  "At $500 you stop shopping for small bells and start choosing between roomy 13 to 16 foot bells and boxy cabins that suit cots. The fabric spec matters more here, since a lightweight Oxford shell is a very different tent than a 200 gsm poly-cotton one.",
  "Four tents are here, ranked by fabric quality, stove readiness and usable space. Few good options sit near the top of the range, so this guide covers the strongest values in the middle."
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
    "id": "best-canvas-tents-under-500-1",
    "rank": 1,
    "badge": "Best Overall Under $500",
    "name": "Glamcamp Bell Tent",
    "price": "$419.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31xYWOqmWWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B085T9SCLW?tag=rvgearlab-amz-20",
    "description": "The Glamcamp is a 4 meter bell with a 2.5 meter top and 60 cm side walls, made from 200 g per square meter poly-cotton canvas with a 3000mm waterproof PU coating. A 500 g per square meter PVC groundsheet zips out, and the weight is about 30 kg.\n\nIt combines a stated fabric weight with a flame-retardant 5 inch top stove jack and a side-wall stove hole, which the Oxford bell does not offer. It sleeps two queen beds or a bed plus two singles, and costs more than the VEVOR 4 m Bell and VELUVIA.\n\nGlamping couples and families wanting the strongest fabric and a flexible floor will like it most. A tent bag, rain cap, stakes and hammer ship with it, and setup takes under 20 minutes.",
    "specs": [
      "4 m, 200 gsm poly-cotton",
      "3000mm PU coating, zip-out floor",
      "5 in top jack and side stove hole"
    ],
    "pros": [
      "Stated fabric weight and coating",
      "Two stove openings give placement options",
      "Zip-out PVC floor insulates from damp",
      "Setup in under 20 minutes"
    ],
    "cons": [
      "Highest price in the group",
      "Weighs about 30 kg"
    ],
    "bestFor": "Glamping couples and families",
    "take": "The best-specified fabric and floor of the group.",
    "catch": "Cover the zipper with the canvas skirt and fit the rain cap in wet weather."
  },
  {
    "id": "best-canvas-tents-under-500-2",
    "rank": 2,
    "badge": "Best Value Bell Tent",
    "name": "VEVOR Canvas Tent Bell Tent",
    "price": "$320.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41E-2hTT46L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CWNKXQSD?tag=rvgearlab-amz-20",
    "description": "The VEVOR 4 m bell is 13.12 feet across and sleeps up to 6, made from TC technical cotton. It has a 3 inch stove hole under a 43 by 43 cm flame-resistant cover, 12 reflective ropes with tensioners, a rain cap, stakes and a bag.\n\nIt costs about $100 less than the Glamcamp and keeps the same 4 meter footprint. Against the Oxford 16.4 ft bell it has a cotton blend that breathes and a named flame-resistant stove cover.\n\nA match for groups of up to six wanting a bell tent with a stove hole at a moderate price. The fabric breathes better than a coated polyester shell.",
    "specs": [
      "4 m, 13.12 ft, TC cotton",
      "3 in stove hole with flame-resistant cover",
      "12 ropes, rain cap, stakes"
    ],
    "pros": [
      "Sleeps up to six",
      "TC fabric breathes and limits condensation",
      "Flame-resistant stove-hole cover",
      "Rain cap and stakes in the box"
    ],
    "cons": [
      "No waterproof rating is given",
      "TC fabric needs sealing for steady rain"
    ],
    "bestFor": "Groups of up to six",
    "take": "The most bell tent per dollar once you pass $300.",
    "catch": "Treat the seams before a wet trip, since no waterproof number is given."
  },
  {
    "id": "best-canvas-tents-under-500-3",
    "rank": 3,
    "badge": "Best Cabin Layout",
    "name": "4 Season Hot Tent with Stove Jack",
    "price": "$339.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51+zttLFe4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H1L3614G?tag=rvgearlab-amz-20",
    "description": "The VELUVIA is a 6 to 8 person cabin hot tent with a 6.5 foot center peak and 4.6 foot vertical walls. It has a 210g poly-cotton roof, a flame-retardant stove jack for 2.7 to 4.7 inch pipes, a PU3000 sidewall, steel poles and six mesh windows.\n\nIts vertical walls give cots and tables more usable floor than a bell tent of similar size, and it takes a wider range of stovepipes than the VEVOR 4 m Bell. It sets up in about 10 minutes with one person.\n\nIt suits families who camp past summer and want a boxy layout for cots and a stove. The poly-cotton roof helps limit dripping.",
    "specs": [
      "6 to 8 person cabin",
      "210g TC roof, PU3000 sidewall",
      "Stove jack for 2.7 to 4.7 in pipe"
    ],
    "pros": [
      "Tall vertical walls fit cots",
      "Stove jack fits a wide pipe range",
      "Dual doors and six mesh windows",
      "About 10 minute setup"
    ],
    "cons": [
      "Steel poles add weight",
      "Boxy shape sheds wind less than a bell"
    ],
    "bestFor": "Cot-based family camping",
    "take": "A roomy cabin layout with a flexible stove jack.",
    "catch": "Plan on a drive-up pitch and a stove-safe setup."
  },
  {
    "id": "best-canvas-tents-under-500-4",
    "rank": 4,
    "badge": "Best Lightweight Large Bell",
    "name": "Bell Tent with Stove Jack",
    "price": "$307.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51oFLJKsBVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FVSVNSF6?tag=rvgearlab-amz-20",
    "description": "This bell tent is 16.4 feet across and sleeps 4 to 8 with a high central pole, a reinforced stove jack and multiple mesh windows. The shell is lightweight Oxford fabric that sheds light rain and keeps the carry easier than canvas.\n\nIt is the largest tent in the group and the lowest priced, and it trades the poly-cotton breathability of the VEVOR 4 m Bell for a lighter pack. A rainfly is offered for wet weather.\n\nLarge groups and event campers who value size and portability over canvas feel get the most from it. Mosquito-proof doors keep bugs out during summer.",
    "specs": [
      "16.4 ft diameter, high center",
      "Reinforced stove jack",
      "Lightweight Oxford fabric"
    ],
    "pros": [
      "Largest floor in the group",
      "Lighter to carry than canvas",
      "Reinforced stove jack",
      "Mesh windows and bug-proof doors"
    ],
    "cons": [
      "Oxford traps more condensation than TC",
      "Extra rainfly needed for wet weather"
    ],
    "bestFor": "Large groups and events",
    "take": "The biggest space for the least money, in a lighter fabric.",
    "catch": "Fit the rainfly for wet trips, since the shell is only for light rain."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fabric spec",
    "description": "Compared stated gsm, PU coatings and blend type."
  },
  {
    "title": "Stove setup",
    "description": "Checked jack size, flap material and a second stove option."
  },
  {
    "title": "Floor",
    "description": "Weighed zip-out, sewn-in and mesh floors."
  },
  {
    "title": "Space",
    "description": "Compared diameter, peak and wall height for usable room."
  },
  {
    "title": "Price tier",
    "description": "Ranked quality delivered between $300 and $500."
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
    "subheading": "By Group",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Couple or glamping pair",
          "Glamcamp 4 m Bell",
          "Best fabric and floor."
        ],
        [
          "Group of up to six",
          "VEVOR 4 m Bell",
          "Most bell for the money."
        ],
        [
          "Family with cots",
          "VELUVIA Cabin",
          "Vertical walls fit cots."
        ],
        [
          "Large events",
          "Oxford 16.4 ft Bell",
          "Largest floor, lightest shell."
        ],
        [
          "Winter weekends",
          "Glamcamp 4 m Bell",
          "Two stove openings."
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
          "$300 to $330",
          "Oxford 16.4 ft Bell or VEVOR 4 m Bell"
        ],
        [
          "$330 to $420",
          "VELUVIA Cabin or Glamcamp 4 m Bell"
        ]
      ]
    }
  },
  {
    "subheading": "Bell vs Cabin",
    "cards": [
      {
        "label": "Bell",
        "text": "A central pole and sloped walls make a bell sturdy in wind and easy to heat from the middle. The Glamcamp 4 m Bell, VEVOR 4 m Bell and Oxford 16.4 ft Bell are bells."
      },
      {
        "label": "Cabin",
        "text": "Vertical walls give more usable floor near the edges for cots and tables, but the box catches more wind. The VELUVIA Cabin is the cabin."
      }
    ],
    "note": "Choose the Glamcamp 4 m Bell for quality or the VELUVIA Cabin if cots are your priority."
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
          "About $308, large lightweight",
          "Oxford 16.4 ft Bell"
        ],
        [
          "About $321, value bell",
          "VEVOR 4 m Bell"
        ],
        [
          "About $340, cot layout",
          "VELUVIA Cabin"
        ],
        [
          "About $420, best fabric",
          "Glamcamp 4 m Bell"
        ]
      ]
    }
  },
  {
    "subheading": "Heated Family Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stove jack with a flame-resistant sleeve, a PU3000 coating and a floor that insulates from damp."
      },
      {
        "label": "In this comparison",
        "text": "The Glamcamp 4 m Bell has a top jack plus a side hole, and the VELUVIA Cabin adds a pipe range of 2.7 to 4.7 inches."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend up to the cap on the Glamcamp 4 m Bell for the best fabric spec and a zip-out floor, or on the VELUVIA Cabin when you sleep on cots."
      },
      {
        "label": "Save if",
        "text": "Save with the VEVOR 4 m Bell for 6 people and a stove at about $100 less, or take the Oxford 16.4 ft Bell for space on a tight budget."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fabric weight and coating",
    "explanation": "A 200 gsm poly-cotton canvas with a 3000mm PU coating balances breathing and rain tolerance. Lightweight Oxford is cheaper and lighter but traps condensation, and an uncoated TC fabric breathes best but leaks in steady rain. Look for gsm and a millimeter coating rating on the product page."
  },
  {
    "criterion": "Bell or cabin shape",
    "explanation": "A bell tent has a central pole and sloped walls that shed wind and heat evenly, while a cabin has vertical walls that fit cots and tables. A 6.5 foot cabin peak with 4.6 foot walls gives more usable corners than a bell of similar diameter. Choose a shape by how you sleep and what furniture you bring."
  },
  {
    "criterion": "Stove jack placement",
    "explanation": "A top jack suits a center stove and keeps pipe clear of the walls, while a side-wall hole lets you place the stove near the edge. A flame-retardant sleeve and a 4 to 5 inch opening fit standard pipe. Check jack position, size and whether a second option exists."
  },
  {
    "criterion": "Floor type",
    "explanation": "A zip-out PVC floor of 500 gsm insulates from damp and wipes clean, and unzipping it lets you set the stove on a pad on bare ground. A stitched-in floor keeps bugs out but cannot be removed for summer. Check floor weight and whether the floor zips or sews."
  },
  {
    "criterion": "Weight and setup crew",
    "explanation": "A 4 meter bell can weigh around 30 kg or more, and pitching takes two people for the center pole. Cabins with steel poles add weight but pitch quickly with a single person. Look for the packed weight and the setup person count in the instructions before you buy."
  }
];

export const faq = [
  {
    "q": "Is the Glamcamp worth its higher price?",
    "a": "Pay extra if you want a stated fabric weight and a 3000mm coating with a zip-out floor. The VEVOR 4 m Bell gives the same footprint for about $100 less with fewer documented specs. For occasional trips the VEVOR is enough."
  },
  {
    "q": "Is Oxford fabric okay for a bell tent?",
    "a": "Oxford is a lightweight polyester that sheds light rain and packs smaller than canvas. It condenses more inside and does not resist sparks like cotton blends. The Oxford 16.4 ft Bell suits summer events more than winter stove camps."
  },
  {
    "q": "Do I need a rainfly on a canvas tent?",
    "a": "TC canvas tents shed rain by themselves when the weave swells, so a fly is optional on most. Oxford shells and uncoated cotton benefit from one in steady rain. Check whether a rainfly is included before you buy."
  },
  {
    "q": "How do I keep a stove from burning canvas?",
    "a": "Use a stove with a spark arrestor, a flame-retardant jack and a heat shield. Keep 3 feet of clearance from the canvas and a CO alarm on at all times. Let the pipe cool fully before removing it."
  },
  {
    "q": "How long does a bell tent take to pitch?",
    "a": "Expect 20 to 40 minutes the first time, and 15 to 25 once you have practiced. Pitching with two people helps lift the center pole. A calm, dry day makes the first setup much easier, so practice in the yard before a trip."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Canvas Tents",
    "href": "/tents-shelter/best-canvas-tents"
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
