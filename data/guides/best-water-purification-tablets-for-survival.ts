export const guideSlug = "best-water-purification-tablets-for-survival";
export const guideTitle = "2 Best Water Purification Tablets For Survival in 2026";
export const metaTitle = "Best Water Purification Tablets For Survival";
export const metaDescription = "Best water purification tablets for survival: two Aquatabs formats for go-bags and storage compared on dose, count and documented claims.";
export const mainKeyword = "best water purification tablets for survival";
export const introParagraphs = [
  "Few listings target this exact use, so this guide is short. The two genuine fits are both Aquatabs, one built for single bottles and foil-sealed, the other a large-dose tablet for four gallons.",
  "Choose by what you will actually treat. A go-bag holds bottles and a flood kit holds containers, and neither format removes silt, so keep a cloth to strain cloudy water."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/furniture-chairs-campfire-night.webp";
export const heroImageAlt = "Two people in folding chairs around a campfire in autumn woods";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-water-purification-tablets-for-survival-1",
    "rank": 1,
    "badge": "Best Go-Bag Tablet",
    "name": "Aquatabs 49mg Water Purification Tablets",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hmcr5QMmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09B2TVKGB?tag=rvgearlab-amz-20",
    "description": "The Aquatabs 49mg 100-Pack is sealed in individual foil strips so each tablet stays dry in a disaster kit. The page claims both bacteria and virus removal, at 99.9999 and 99.99 percent, and says it leaves no iodine-style flavor.\n\nPer tablet it treats a small volume, which suits drinking bottles. Next to the 397mg bottle, it is lighter for a go-bag and easier to ration, and it carries a lower price.\n\nIt suits families building a bug-out or flood kit who want a documented tablet. A hundred strips cover many bottles.",
    "specs": [
      "49mg tablets, 100 foil strips",
      "Bacteria and virus removal stated",
      "No iodine taste claim"
    ],
    "pros": [
      "Foil strips protect each tablet",
      "Virus and bacteria removal stated",
      "100 count for a family",
      "Light enough for a go-bag"
    ],
    "cons": [
      "Small dose, so count per bottle",
      "Does not remove silt"
    ],
    "bestFor": "Go-bags and flood kits",
    "take": "The practical go-bag tablet with sealed strips.",
    "catch": "Silt stays in the water, and the small dose needs counting per bottle."
  },
  {
    "id": "best-water-purification-tablets-for-survival-2",
    "rank": 2,
    "badge": "Best for Storage Tanks",
    "name": "Aquatabs Water Purification Tablets",
    "price": "$36.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41PR4yq3z3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09FFQN924?tag=rvgearlab-amz-20",
    "description": "The Aquatabs 397mg tablet comes in a 100-pack and is stated to purify 4 gallons in 30 minutes. The page calls it a trusted emergency tablet that avoids the taste of iodine products.\n\nA single tablet handles a whole four-gallon container, so it suits storage tanks and large emergency stocks. Compared with the 49mg strips, it is built for volume rather than bottles.\n\nIt suits households stocking water barrels and RV tanks for emergencies. A hundred tablets treat hundreds of gallons.",
    "specs": [
      "397mg tablet, 100 count",
      "Treats 4 gallons in 30 minutes",
      "Emergency storage tablet"
    ],
    "pros": [
      "One tablet treats four gallons",
      "100 count for storage",
      "No iodine aftertaste",
      "Suits barrels and tanks"
    ],
    "cons": [
      "Too strong for single bottles",
      "Not individually sealed"
    ],
    "bestFor": "Households with water storage",
    "take": "The big-dose tablet for stored water.",
    "catch": "It is built for four gallons, so it is awkward in a bug-out bag."
  }
];

export const howWeEvaluated = [
  {
    "title": "Dose",
    "description": "We compared the volume each tablet treats."
  },
  {
    "title": "Packaging",
    "description": "We looked at foil strips against loose bottles."
  },
  {
    "title": "Claims",
    "description": "We compared the pathogens each page names."
  },
  {
    "title": "Count and storage",
    "description": "We looked at pack counts for a household."
  },
  {
    "title": "Taste",
    "description": "We noted taste and odor claims."
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
    "subheading": "By Kit Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Bug-out bag with bottles",
          "Aquatabs 49mg 100-Pack",
          "Foil strips and bacteria and virus claims"
        ],
        [
          "Water barrel or RV tank",
          "Aquatabs 397mg 100-Pack",
          "One tablet treats four gallons"
        ],
        [
          "Family flood kit",
          "Aquatabs 49mg 100-Pack",
          "100 count for many bottles"
        ],
        [
          "Group storage",
          "Aquatabs 397mg 100-Pack",
          "Large-dose tablet"
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
          "$20 to $30",
          "Aquatabs 49mg 100-Pack"
        ],
        [
          "$30 to $40",
          "Aquatabs 397mg 100-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Small Dose vs Large Dose",
    "cards": [
      {
        "label": "Small Dose",
        "text": "The Aquatabs 49mg 100-Pack treats a bottle at a time and seals each tablet."
      },
      {
        "label": "Large Dose",
        "text": "The Aquatabs 397mg 100-Pack treats four gallons per tablet."
      }
    ],
    "note": "Choose the Aquatabs 49mg 100-Pack for go-bags and the Aquatabs 397mg 100-Pack for storage."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lower price",
          "Aquatabs 49mg 100-Pack"
        ],
        [
          "Fewest tablets for a barrel",
          "Aquatabs 397mg 100-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Flood and Storm Kits Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for sealed packaging, a stated dose and a pathogen list."
      },
      {
        "label": "In this comparison",
        "text": "The Aquatabs 49mg 100-Pack lists foil strips and viruses, and the Aquatabs 397mg 100-Pack lists four gallons per tablet."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Aquatabs 397mg 100-Pack if you store large containers."
      },
      {
        "label": "Save if",
        "text": "Save with the Aquatabs 49mg 100-Pack for bottles."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match dose to container",
    "explanation": "A 49mg tablet is for a bottle and a 397mg tablet is for four gallons. Using the wrong dose wastes tablets or under-treats. Match the dose to the container."
  },
  {
    "criterion": "Contact time",
    "explanation": "Chemical tablets need time to work, often 30 minutes, and cold or dirty water needs longer. Plan for the wait. Read the label."
  },
  {
    "criterion": "Silt and clarity",
    "explanation": "Tablets do not remove silt, and dirty water weakens chlorine. Strain through cloth first. Add a filter to the kit if you can."
  },
  {
    "criterion": "Pathogens named",
    "explanation": "The 49mg page states bacteria and viruses. Read the page for protozoa claims, since chlorine is weaker against some of them. Check the label timings."
  },
  {
    "criterion": "Shelf life and storage",
    "explanation": "Keep tablets sealed, dry and cool. Foil strips protect better than a bottle opened often. Check dates yearly."
  }
];

export const faq = [
  {
    "q": "Which tablets are best for survival?",
    "a": "Pick by container size. The 49mg strips suit bottles and the 397mg tablet suits tanks."
  },
  {
    "q": "What mistake do people make with emergency tablets?",
    "a": "Skipping the wait. Tablets need contact time, and cold water takes longer."
  },
  {
    "q": "Is the 397mg worth it over the 49mg?",
    "a": "Only if you treat four-gallon containers. For bottles, the 49mg strips are more practical."
  },
  {
    "q": "How do I treat cloudy flood water?",
    "a": "Strain it through cloth, let it settle, then dose and wait. Heavy contamination calls for boiling or a filter."
  },
  {
    "q": "How long do tablets last?",
    "a": "Stored sealed, cool and dry, they last for years. Check the date on the package."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Chlorine Water Purification Tablets",
    "href": "/packs-hiking/best-chlorine-water-purification-tablets"
  },
  {
    "title": "Best Water Purification Tablets",
    "href": "/packs-hiking/best-water-purification-tablets"
  },
  {
    "title": "Best Water Purification Tablets For Drinking Water",
    "href": "/packs-hiking/best-water-purification-tablets-for-drinking-water"
  }
];
