export const guideSlug = "best-waterproof-camping-tarps";
export const guideTitle = "3 Best Waterproof Camping Tarps in 2026";
export const metaTitle = "Best Waterproof Camping Tarps in 2026";
export const metaDescription = "Best waterproof camping tarps compared on rated nylon versus poly construction, edge reinforcement and tie-down points for wet weather.";
export const mainKeyword = "best waterproof camping tarps";
export const introParagraphs = [
  "Waterproof is easy to print and hard to verify on a tarp. This list sorts the three main options by how they stay dry: a rated coated nylon fly, a heavy poly sheet and a laminated rip-stop cover.",
  "Three tarps made the cut, each with a waterproof claim backed by material details in its listing. They span ultralight pitch tarp to under-tent cover, so the right one depends on how you camp."
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
    "id": "best-waterproof-camping-tarps-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Gold Armour Rainfly Tarp Hammock",
    "price": "$35.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41EM7nhQa7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07C3PWWX7?tag=rvgearlab-amz-20",
    "description": "The Gold Armour is a rainfly tarp with a 5,000mm waterproof rating, 2 centerlines and 33 tie-down loops. It comes with stakes, ropes and tensioners, in sizes from 8 ft up to 14 ft by 12 ft.\n\nIt is the only pick with a millimeter rating and the only one built for a taut pitch rather than lying flat. Against the Amazon Basics and Vandham poly sheets, it holds a pitched shape over a hammock or tent.\n\nBackpackers and hammock campers who want rated waterproofing at a low price will like it. It also serves as a footprint or ground sheet.",
    "specs": [
      "5,000mm waterproof rating",
      "33 tie-down loops",
      "Stakes, ropes, tensioners"
    ],
    "pros": [
      "Only listing with a millimeter rating",
      "33 loops allow many pitches",
      "Stakes and tensioned ropes included",
      "Several sizes to choose from"
    ],
    "cons": [
      "Size must be picked carefully",
      "Costs more than poly sheets"
    ],
    "bestFor": "Rated rain cover for pitches",
    "take": "The only rated tarp here, with enough loops to rig almost any shape.",
    "catch": "It is a pitched shelter, so it needs poles or trees to work at all."
  },
  {
    "id": "best-waterproof-camping-tarps-2",
    "rank": 2,
    "badge": "Best Budget Rip-Stop",
    "name": "Amazon Basics Waterproof Multipurpose Camping Tarp with Reinforced Corners and Edges",
    "price": "$15.88",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41IgrwKg8YL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0748HGDVD?tag=rvgearlab-amz-20",
    "description": "The Amazon Basics tarp measures 9.5 x 11.3 ft in rip-stop fabric laminated with polyethylene on both sides. Reinforced corners and edges carry strategically placed grommets.\n\nIts rip-stop weave stops small tears from spreading, a feature the Vandham plain poly sheet does not name. Against the Gold Armour it has no rating or cord kit, and it costs less than half as much.\n\nCampers who want a cover for firewood, gear or under a tent get a tear-resistant sheet. The listing also names vehicle covers and emergency shelters.",
    "specs": [
      "9.5 x 11.3 ft rip-stop",
      "Polyethylene on both sides",
      "Reinforced corners, grommets"
    ],
    "pros": [
      "Rip-stop weave stops tear growth",
      "Polyethylene lamination on both sides",
      "Reinforced corners and edges",
      "Lowest price in this group"
    ],
    "cons": [
      "No millimeter rating or cord kit",
      "Smaller than the Vandham tarp"
    ],
    "bestFor": "Gear and firewood cover",
    "take": "A rip-stop poly tarp for covering gear and under tents.",
    "catch": "No rating is stated, so rely on its lamination rather than a number."
  },
  {
    "id": "best-waterproof-camping-tarps-3",
    "rank": 3,
    "badge": "Best Value Poly Sheet",
    "name": "Vandham Tarp Waterproof 10x12FT Multi-Purpose Green Poly Tarps Cover 8Mil",
    "price": "$16.88",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415rwuqy1NL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJ52LQL8?tag=rvgearlab-amz-20",
    "description": "The Vandham is a 10x12 ft 8 mil tarp made from high-density polyethylene. Rubber triangular reinforcements strengthen the corners, and double-layer edges carry grommets spaced every meter.\n\nIt is the larger of the two poly sheets and comes with complimentary ropes. Against the Gold Armour it has no rating and far fewer tie-down points, and it costs less than half as much.\n\nCamp-site basics like a groundsheet under the tent or a cover over the woodpile suit it. Grommets every meter give wide tie-down spacing.",
    "specs": [
      "10x12 ft, 8 mil HDPE",
      "Rubber corner reinforcements",
      "Grommets every 1 meter"
    ],
    "pros": [
      "Rubber triangles reinforce corners",
      "Free ropes are included",
      "Double-layer grommet edges",
      "Second-lowest price here"
    ],
    "cons": [
      "New tarps can smell on arrival",
      "One-meter spacing is wide for pitching"
    ],
    "bestFor": "Budget ground and gear cover",
    "take": "A budget poly tarp with reinforced corners and free ropes.",
    "catch": "Poly tarps sag between wide grommets, so use extra ties when rigging a roof."
  }
];

export const howWeEvaluated = [
  {
    "title": "Waterproof construction",
    "description": "Rated coatings, laminations and plain poly were compared."
  },
  {
    "title": "Edge strength",
    "description": "Reinforced corners and grommet spacing were checked."
  },
  {
    "title": "Pitch ability",
    "description": "Tie-down count and cord kits decide how a tarp can be rigged."
  },
  {
    "title": "Size and weight",
    "description": "Stated dimensions were compared with the use each listing names."
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
    "subheading": "By what you will use it for",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Pitched rain fly over a hammock",
          "Gold Armour Waterproof Rainfly",
          "5,000mm rating and 33 tie-down loops"
        ],
        [
          "Covering gear and firewood",
          "Amazon Basics 9.5 x 11.3 ft Rip-Stop Tarp",
          "Rip-stop with polyethylene lamination"
        ],
        [
          "Cheap groundsheet or woodpile cover",
          "Vandham 10x12 ft HDPE Tarp",
          "8 mil HDPE with free ropes at a low price"
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
          "$10 to $20",
          "Amazon Basics 9.5 x 11.3 ft Rip-Stop Tarp"
        ],
        [
          "$10 to $20",
          "Vandham 10x12 ft HDPE Tarp"
        ],
        [
          "$30 to $40",
          "Gold Armour Waterproof Rainfly"
        ]
      ]
    }
  },
  {
    "subheading": "Coated nylon fly vs poly sheet",
    "cards": [
      {
        "label": "Coated nylon fly",
        "text": "Lighter, rated by millimeters and meant to be pitched taut. Gold Armour Waterproof Rainfly is the rated pick."
      },
      {
        "label": "Poly sheet",
        "text": "Heavier and cheaper, best lying flat or over a pile. Amazon Basics 9.5 x 11.3 ft Rip-Stop Tarp and Vandham 10x12 ft HDPE Tarp are poly."
      }
    ],
    "note": "Choose Gold Armour Waterproof Rainfly for shelter and a poly sheet for covers."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "If your budget is",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest possible, with rip-stop",
          "Amazon Basics 9.5 x 11.3 ft Rip-Stop Tarp"
        ],
        [
          "Low, with free ropes",
          "Vandham 10x12 ft HDPE Tarp"
        ],
        [
          "Moderate, for a rated fly",
          "Gold Armour Waterproof Rainfly"
        ]
      ]
    }
  },
  {
    "subheading": "For a rainy basecamp Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A rated tarp for the roof and a sturdy poly sheet for the ground or woodpile."
      },
      {
        "label": "In this comparison",
        "text": "Gold Armour Waterproof Rainfly takes the roof with 5,000mm, and Vandham 10x12 ft HDPE Tarp or Amazon Basics 9.5 x 11.3 ft Rip-Stop Tarp covers the rest."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Gold Armour Waterproof Rainfly if you plan to pitch overhead in real rain, since a stated rating and 33 loops are the real upgrade."
      },
      {
        "label": "Save if",
        "text": "Save with Vandham 10x12 ft HDPE Tarp or Amazon Basics 9.5 x 11.3 ft Rip-Stop Tarp for covers and groundsheets."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rated coating or plain poly",
    "explanation": "A PU coating has a millimeter rating, while plain polyethylene relies on thickness in mils. A rating gives you a number to compare, and mils do not. Look for the rating or the mil figure in the first lines of the listing."
  },
  {
    "criterion": "Rip-stop weave",
    "explanation": "Rip-stop fabric has a grid of heavier threads that stops a small tear from spreading. Plain poly can unzip from a puncture. Check for the word rip-stop and for reinforced corners."
  },
  {
    "criterion": "Grommet or loop spacing",
    "explanation": "Tie-down points set how tight you can pitch a roof. Wide spacing causes sag and flapping. Look for the spacing, such as every meter, or a loop count like 33."
  },
  {
    "criterion": "Seams and lamination",
    "explanation": "Seams are where tarps leak, so taped seams or two-sided lamination matter. A cheap sewn seam lets water in. Check for taped, heat-pressed or fully laminated construction."
  },
  {
    "criterion": "Intended job",
    "explanation": "A pitched rain fly, a groundsheet and a firewood cover each want a different tarp. Buying the wrong style wastes money. Look at the uses the listing names and match them to yours."
  }
];

export const faq = [
  {
    "q": "Does waterproof tarp mean it never leaks?",
    "a": "No. Even a rated tarp can leak at stitched seams or punctures. Taped or laminated construction lowers the risk. Pitch with a slope so water runs off."
  },
  {
    "q": "What is the common mistake with poly tarps?",
    "a": "Pitching one flat as a roof. Poly sags between grommets and holds water, which can tear the fabric. Tilt it and add ties."
  },
  {
    "q": "Is Gold Armour worth it over poly tarps?",
    "a": "For pitched rain protection, yes, since it lists a rating and many tie-down loops. For covers and groundsheets, the poly sheets cost less. Choose by job."
  },
  {
    "q": "How do I use a tarp under my tent?",
    "a": "Fold it so it sits inside the tent edge, since overhang channels rain beneath the floor. Poly sheets such as the Vandham work for this. Trim or tuck any excess."
  },
  {
    "q": "How do I dry a tarp?",
    "a": "Shake off water and hang it. Poly dries fast, but fold only when dry. Store it loosely out of sun."
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
