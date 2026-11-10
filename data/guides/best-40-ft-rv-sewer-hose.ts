export const guideSlug = "best-40-ft-rv-sewer-hose";
export const guideTitle = "3 Best 40 Ft RV Sewer Hose in 2026";
export const metaTitle = "Best 40 Ft RV Sewer Hose in 2026";
export const metaDescription = "Forty foot RV sewer hose options compared by true single-run length, TPE build and kit extras, for very long runs to a distant dump point.";
export const mainKeyword = "best 40 ft rv sewer hose";
export const introParagraphs = [
  "A 40 foot sewer hose is for the longest routes, such as a big park pad or a seasonal site far from the riser. Only one hose here is listed at 40 feet, and the other two are Camco 20 foot kits that show what a shorter branded setup looks like.",
  "The three picks are compared on stated length, wall build and included parts. A true 40 foot single run covers the distance in one piece, while 20 foot kits need support and extra length."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41jWuxhnwML._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-40-ft-rv-sewer-hose-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "AVERONR 40 FT Extra Long Camper RV Sewer Hose with Swivel Bayonet Fittings",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41jWuxhnwML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GTKBW83M?tag=rvgearlab-amz-20",
    "description": "The AVERONR 40 ft hose is a true 40 foot run of commercial-grade TPE with swivel bayonet fittings. It is listed as resistant to crushing, abrasion, punctures, chemicals and sun, and flexible in low temperatures.\n\nIt is the only pick that reaches 40 feet and it costs somewhat more than the Camco RhinoEXTREME 20 Ft. The kink-resistant build is what lets it route over gravel, grass or pavement.\n\nBest for owners with a seasonal site and a long route to the riser. A direct match for a 40 foot need.",
    "specs": [
      "40 ft commercial-grade TPE",
      "Swivel bayonet fittings",
      "Freeze-resistant flexible build"
    ],
    "pros": [
      "True 40 foot reach in one hose",
      "Kink-resistant over rough ground",
      "Freeze-resistant material"
    ],
    "cons": [
      "Costs more than 20 ft kits",
      "Bulky to store and carry"
    ],
    "bestFor": "Overall"
  },
  {
    "id": "best-40-ft-rv-sewer-hose-2",
    "rank": 2,
    "badge": "Best Branded Base",
    "name": "Camco RhinoEXTREME 20 Ft RV Sewer Hose Kit",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51JhNvtlPcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07ZPJN2N9?tag=rvgearlab-amz-20",
    "description": "The RhinoEXTREME 20 ft is a pre-assembled kit of two 10 foot sections with a 24 mil TPE wall and swivel fittings. It is made in the USA with a reinforced exoskeleton design.\n\nIt gives half the reach of the AVERONR and adds brand support and pre-attached fittings. Compared with the Rhino Ultimate Combo, it skips the storage box and costs slightly more.\n\nBest for owners who want a tough base hose for a mid-length run. A solid pick if reach grows later.",
    "specs": [
      "2 x 10 ft, 24 mil TPE",
      "Pre-assembled swivel fittings",
      "Made in the USA"
    ],
    "pros": [
      "Strong exoskeleton wall",
      "Fittings come ready to use",
      "Reusable locking rings"
    ],
    "cons": [
      "Only 20 ft, half of 40",
      "Priciest of the three"
    ],
    "bestFor": "Branded Base"
  },
  {
    "id": "best-40-ft-rv-sewer-hose-3",
    "rank": 3,
    "badge": "Best With Storage",
    "name": "Camco Rhino Ultimate 20' RV Sewer Hose Combo Kit",
    "price": "$85.09",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TCrWia1-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DZ3YYH57?tag=rvgearlab-amz-20",
    "description": "The Rhino Ultimate 20 ft combo is an 11-piece kit with a 20 foot hose, a pre-attached clear elbow, a storage box and a secure lid. The box doubles as the start and end hose supports.\n\nIt costs a little less than the plain RhinoEXTREME 20 Ft and bundles a carry box. Against the AVERONR 40 Ft, it trades length for convenience.\n\nBest for campers who want a hose, elbow and box in one package. A tidy choice for storage-conscious owners.",
    "specs": [
      "20 ft hose, 11-piece kit",
      "Storage box with snap lid",
      "Box serves as hose supports"
    ],
    "pros": [
      "Box carries and supports the hose",
      "Pre-attached clear elbow",
      "Handles for easy transport"
    ],
    "cons": [
      "Only 20 ft, half of 40",
      "Box takes bay space"
    ],
    "bestFor": "With Storage"
  }
];

export const howWeEvaluated = [
  {
    "title": "True 40 ft length",
    "description": "Checked which listing is sold at 40 feet and which are 20 foot kits."
  },
  {
    "title": "TPE build",
    "description": "Compared stated TPE walls and kink or crush resistance."
  },
  {
    "title": "Kit extras",
    "description": "Looked at boxes, elbows and fittings in each package."
  },
  {
    "title": "Cold behavior",
    "description": "Checked statements on freeze resistance and flexibility."
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
    "subheading": "By route",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Need a full 40 ft",
          "AVERONR 40 Ft",
          "True 40 foot hose"
        ],
        [
          "About 20 ft, tough kit",
          "Camco RhinoEXTREME 20 Ft",
          "24 mil TPE, pre-assembled"
        ],
        [
          "About 20 ft, with box",
          "Camco Rhino Ultimate Combo",
          "Hose, elbow and storage box"
        ],
        [
          "Long route in cold weather",
          "AVERONR 40 Ft",
          "Freeze-resistant TPE listed"
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
          "$80 to $90",
          "Camco Rhino Ultimate Combo"
        ],
        [
          "$80 to $90",
          "Camco RhinoEXTREME 20 Ft"
        ],
        [
          "$90 to $100",
          "AVERONR 40 Ft"
        ]
      ]
    }
  },
  {
    "subheading": "One long hose vs shorter kit",
    "cards": [
      {
        "label": "One long hose",
        "text": "The AVERONR 40 Ft covers the whole route with no joint."
      },
      {
        "label": "Shorter kit",
        "text": "The Camco RhinoEXTREME 20 Ft and Camco Rhino Ultimate Combo cover half the distance with a stronger brand build."
      }
    ],
    "note": "Most buyers with a true 40 foot route should default to the AVERONR 40 Ft."
  },
  {
    "subheading": "By storage",
    "table": {
      "headers": [
        "Storage",
        "Recommended pick"
      ],
      "rows": [
        [
          "Want a storage box",
          "Camco Rhino Ultimate Combo"
        ],
        [
          "Bumper tube",
          "Camco RhinoEXTREME 20 Ft"
        ],
        [
          "Large bin",
          "AVERONR 40 Ft"
        ]
      ]
    }
  },
  {
    "subheading": "For Seasonal Sites Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A hose listed at 40 feet with kink and freeze resistance."
      },
      {
        "label": "In this comparison",
        "text": "The AVERONR 40 Ft lists kink and freeze resistance for the long run."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want the box: the Camco Rhino Ultimate Combo adds storage."
      },
      {
        "label": "Save if",
        "text": "Save if the route is shorter: the Camco RhinoEXTREME 20 Ft or AVERONR 40 Ft only if needed."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "True sold length",
    "explanation": "Only the AVERONR is sold at 40 feet, and the Camco kits are 20 feet total. A kit listed as 20 ft is two 10 foot hoses, not one long run. Read the length in the title and bullets before you order."
  },
  {
    "criterion": "Kink and crush resistance",
    "explanation": "A 40 foot hose is dragged and stepped on more than a short one, so it needs to resist kinks and crushing. The AVERONR lists a kink-resistant TPE build. Look for a stated crush or kink claim on any long hose."
  },
  {
    "criterion": "Support and slope",
    "explanation": "Forty feet of hose sags unless it has support or a gentle slope, and a sag holds waste. The Rhino Ultimate box can act as supports at the ends. Plan the route and where the supports go."
  },
  {
    "criterion": "Storage size",
    "explanation": "Even collapsed, a 40 foot hose is bulky and may not fit a bumper tube. Plan a bin or a large carrier. Check the packed dimensions if the listing gives them."
  },
  {
    "criterion": "Cold weather behavior",
    "explanation": "A stiff hose kinks in the cold and traps waste. The AVERONR lists freeze resistance and cold flexibility. If you camp in winter, look for that wording."
  }
];

export const faq = [
  {
    "q": "Is a 40 ft hose too long?",
    "a": "Only if your route is shorter. Excess hose sags and holds waste, so measure the route first. Add two feet for bends and stop there."
  },
  {
    "q": "Can I use 20 ft kits for 40 feet?",
    "a": "Two 20 ft kits could reach 40 feet if their fittings are compatible. Each joint adds a place to leak. Do not mix macerator hoses with gravity sewer hoses."
  },
  {
    "q": "What compatibility mistake costs the most?",
    "a": "Ignoring slope. A long hose needs steady downhill flow from the outlet to the port. Add supports so there are no dips."
  },
  {
    "q": "Is the AVERONR worth its price?",
    "a": "If you need 40 feet in one piece, yes. The Camco RhinoEXTREME 20 Ft costs less but reaches half as far. Choose by the distance you really need."
  },
  {
    "q": "How do I store a 40 ft hose?",
    "a": "Collapse it and use a large bin or carrier. Cap both ends and rinse the hose first. Keep it out of direct sun."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best 10 Ft RV Sewer Hose",
    "href": "/water-plumbing/best-10-ft-rv-sewer-hose"
  },
  {
    "title": "Best 15 Ft RV Sewer Hose",
    "href": "/water-plumbing/best-15-ft-rv-sewer-hose"
  },
  {
    "title": "Best 20 Ft RV Sewer Hose",
    "href": "/water-plumbing/best-20-ft-rv-sewer-hose"
  },
  {
    "title": "Best 25 Ft RV Sewer Hose",
    "href": "/water-plumbing/best-25-ft-rv-sewer-hose"
  }
];
