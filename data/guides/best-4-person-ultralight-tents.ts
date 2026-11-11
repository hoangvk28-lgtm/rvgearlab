export const guideSlug = "best-4-person-ultralight-tents";
export const guideTitle = "3 Best Lightweight 4 Person Backpacking Tents in 2026";
export const metaTitle = "Best Lightweight 4 Person Backpacking Tents";
export const metaDescription = "Lightweight four-person backpacking tents compared on packed weight, pole type, floor size and weather build for groups splitting the load.";
export const mainKeyword = "best 4 person ultralight tents";
export const introParagraphs = [
  "Four-person tents seldom stay light, and the listings here confirm it. One comes from an ultralight line, one quotes a weight for its smaller model and one is simply named Ultra.",
  "Three picks made the list. They were compared on weight wording, pole material, floor space and how the fly handles rain, with a note wherever the listing does not give a four-person weight."
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
    "id": "best-4-person-ultralight-tents-1",
    "rank": 1,
    "badge": "Best Lightweight Build",
    "name": "Big Agnes Copper Spur UL",
    "price": "$849.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31M1soehZbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DSLZ579Y?tag=rvgearlab-20",
    "description": "The Big Agnes Copper Spur UL 4 is a four-person freestanding backpacking tent built on the HyperBead fabric line. It has awning-style doors, a TipLok buckle that handles pole tips, fly attachment and stakes, and an interior pocket system.\n\nIt is the only pick built around an ultralight fabric, and it costs about four times what the Kelty does. The Kelty is simpler and cheaper, while the TETON gives more mesh.\n\nIt suits groups that count ounces and will pay for a premium frame. Roomy volume and protected doors help in wet camps.",
    "specs": [
      "Four-person freestanding",
      "HyperBead ultralight fabric",
      "Awning-style doors"
    ],
    "pros": [
      "Ultralight fabric line",
      "Generous interior volume",
      "Protected entry in rain",
      "Smart pole-tip buckles"
    ],
    "cons": [
      "Very high price",
      "No packed weight in the feature list"
    ],
    "bestFor": "Weight-conscious groups",
    "take": "The only ultralight-line fabric here, with a price to match.",
    "catch": "A premium tent is overkill if you rarely carry it."
  },
  {
    "id": "best-4-person-ultralight-tents-2",
    "rank": 2,
    "badge": "Best Value Packable",
    "name": "Kelty Grand Mesa Backpacking Tent",
    "price": "$218.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/314y+8S2TML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082P6XWN2?tag=rvgearlab-20",
    "description": "The Kelty Grand Mesa 4 is a freestanding backpacking tent with two aluminum press-fit poles and 68D polyester for the floor and fly. The listing quotes 4 lbs 1 oz for the 2-person size, and the tent has Quick Corners, an EZ-Zip vestibule and fully taped seams.\n\nIt costs about a quarter of the Big Agnes and still uses aluminum poles. The four-person weight is not quoted, so the Big Agnes keeps the edge for weight.\n\nIt suits groups who want a proven backpacking design at a fair price. Color-coded clips speed up setup.",
    "specs": [
      "Freestanding with aluminum poles",
      "68D polyester, taped seams",
      "EZ-Zip vestibule"
    ],
    "pros": [
      "Aluminum poles keep weight down",
      "Fully taped seams",
      "Quick Corners speed up setup",
      "Fair price for a backpacking tent"
    ],
    "cons": [
      "Weight quoted only for the 2-person size",
      "Less volume than Big Agnes"
    ],
    "bestFor": "Budget backpacking groups",
    "take": "A proven backpacking design at about a quarter of the Big Agnes cost.",
    "catch": "The quoted weight is for the 2-person version."
  },
  {
    "id": "best-4-person-ultralight-tents-3",
    "rank": 3,
    "badge": "Best Mesh Ventilation",
    "name": "Teton Mountain Ultra Tent; 4 Person Backpacking Dome Tent for Camping; Grey",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31COGJizQ3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B085WV6HJR?tag=rvgearlab-20",
    "description": "The TETON Mountain Ultra is a four-person backpacking dome with a full mesh top for stargazing and a micro-mesh inner. The waterproof rainfly includes a 360-degree ventilation system, and the footprint is sold separately.\n\nIt leans on mesh and airflow more than the Kelty and costs less than it. The listing is silent on weight, so the Big Agnes remains the lighter option.\n\nIt suits warm-weather groups who want a view and a cool night. The tent packs down tight for hiking.",
    "specs": [
      "Four-person dome",
      "Full dome mesh top",
      "360-degree ventilation fly"
    ],
    "pros": [
      "Mesh top for stargazing",
      "Strong airflow",
      "Packs down tight",
      "Lower price than the Kelty"
    ],
    "cons": [
      "No weight listed",
      "Footprint sold separately"
    ],
    "bestFor": "Warm-weather hikers",
    "take": "A mesh-forward four-person dome at a modest price.",
    "catch": "No weight is given, so ultralight is a claim in name only."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight clues",
    "description": "Quoted weight or ultralight line."
  },
  {
    "title": "Poles",
    "description": "Aluminum or fiberglass."
  },
  {
    "title": "Floor space",
    "description": "Length, width and height."
  },
  {
    "title": "Fly and seams",
    "description": "Taped seams and vestibules."
  },
  {
    "title": "Ventilation",
    "description": "Mesh and vents."
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
    "subheading": "By Carry Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Lightest shelter",
          "Big Agnes Copper Spur UL 4",
          "Ultralight fabric line."
        ],
        [
          "Value and aluminum poles",
          "Kelty Grand Mesa 4",
          "Taped seams and aluminum poles."
        ],
        [
          "Warm nights and airflow",
          "TETON Mountain Ultra 4",
          "Full mesh top."
        ],
        [
          "Splitting weight",
          "Big Agnes Copper Spur UL 4",
          "Premium frame."
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
          "$190 to $200",
          "TETON Mountain Ultra 4"
        ],
        [
          "$210 to $220",
          "Kelty Grand Mesa 4"
        ],
        [
          "$840 to $850",
          "Big Agnes Copper Spur UL 4"
        ]
      ]
    }
  },
  {
    "subheading": "Premium vs Value",
    "cards": [
      {
        "label": "Premium",
        "text": "Higher cost and lighter fabric. The Big Agnes Copper Spur UL 4 is the example."
      },
      {
        "label": "Value",
        "text": "Lower cost and a proven design. The Kelty Grand Mesa 4 and TETON Mountain Ultra 4 sit here."
      }
    ],
    "note": "Choose the Kelty Grand Mesa 4 unless every ounce matters."
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
          "Around $200",
          "TETON Mountain Ultra 4"
        ],
        [
          "Around $220",
          "Kelty Grand Mesa 4"
        ],
        [
          "Around $850",
          "Big Agnes Copper Spur UL 4"
        ],
        [
          "Weather first",
          "Kelty Grand Mesa 4"
        ]
      ]
    }
  },
  {
    "subheading": "For Group Backpackers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A freestanding frame, taped seams and a stated ultralight line or weight."
      },
      {
        "label": "In this comparison",
        "text": "The Big Agnes Copper Spur UL 4 uses an ultralight fabric line, and the Kelty Grand Mesa 4 lists taped seams."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Big Agnes Copper Spur UL 4 if weight is the priority. It is the lightest-line build here."
      },
      {
        "label": "Save if",
        "text": "Save with the Kelty Grand Mesa 4 for a proven backpacking tent. The TETON Mountain Ultra 4 is similar in cost."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Look for a weight number",
    "explanation": "A tent called Ultra can be heavy. Only a stated weight proves it is light. Check the spec sheet for weight per person."
  },
  {
    "criterion": "Understand the weight listing",
    "explanation": "Brands often quote a minimum weight, which excludes stakes and the stuff sack. Trail weight and packed weight differ. Compare like with like."
  },
  {
    "criterion": "Aluminum versus fiberglass",
    "explanation": "Aluminum poles cut weight and bend less than fiberglass. They cost more. Look at the pole material in the listing."
  },
  {
    "criterion": "Check vestibule and seams",
    "explanation": "Taped seams and a vestibule keep gear dry. Skipping them saves ounces but costs comfort. Look for the words taped seams."
  },
  {
    "criterion": "Count the sleepers",
    "explanation": "A four-person tent often fits three comfortably with gear. Compare floor length and width. Add a size up if you can."
  }
];

export const faq = [
  {
    "q": "Are these truly ultralight?",
    "a": "Only the Big Agnes uses an ultralight line. The others use ultra or lightweight in the name. Check the weight."
  },
  {
    "q": "What is the common mistake?",
    "a": "Trusting the person count. A four-person tent suits three with gear. Plan accordingly."
  },
  {
    "q": "Is the Big Agnes worth it?",
    "a": "For frequent hiking, yes. For occasional use a cheaper tent works."
  },
  {
    "q": "How do I pitch a freestanding tent?",
    "a": "Lay the body, thread the poles and clip the fly. Stake the corners. Two people can do it in minutes."
  },
  {
    "q": "How do I dry it after rain?",
    "a": "Shake out the fly, hang it in the sun and wipe the floor. Pack once dry. Store loosely."
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
