export const guideSlug = "best-axe-under-50";
export const guideTitle = "4 Best Axe Under 50 in 2026";
export const metaTitle = "Best Axe Under 50 in 2026";
export const metaDescription = "Best axes under $50: four camp hatchets from 10 to 14.7 inches, hand-forged to folding, compared on handle, steel and sheath.";
export const mainKeyword = "best axe under 50";
export const introParagraphs = [
  "Under $50 you are buying a hatchet more than an axe, so the question is which one holds an edge and survives a season. Handle material, steel type and the sheath matter more than the brand.",
  "These four run from a hand-forged hatchet with a hickory handle to a 10 inch mini hatchet. They are ordered by build quality, then size and price."
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
    "id": "best-axe-under-50-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Purple Dragon Camping Hatchet 14.7 Inch Hand Forged Splitting Axe",
    "price": "$44.44",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41IKmM2CZ6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CW33P1PB?tag=rvgearlab-amz-20",
    "description": "The Purple Dragon is a 14.7 inch hand-forged hatchet with a cow-foot shape ideal for splitting and delimbing. The splitting face is carbon-manganese steel, the S-curve handle is hickory and protective lips and a hand-stitched sheath are included.\n\nIt is the best-made hatchet here, with a hickory handle that absorbs shock better than fiberglass. It is also the heaviest on features, ahead of the DESHIL and 14 inch mini hatchet.\n\nIt fits bushcraft fans and campers who want a quality hatchet for kindling and limbing. The rubber protective lips guard the edge between uses.",
    "specs": [
      "14.7 inch hand-forged",
      "Carbon-manganese steel, hickory S-curve",
      "Protective lips, hand-stitched sheath"
    ],
    "pros": [
      "Hand-forged carbon-manganese steel",
      "Hickory S-curve handle",
      "Hand-stitched sheath included",
      "Cow-foot design for splitting"
    ],
    "cons": [
      "Highest price of the four",
      "Wood handle needs care"
    ],
    "bestFor": "Bushcraft and camp splitting",
    "take": "The best-made hatchet under $50. It looks and works like a tool that lasts.",
    "catch": "Keep the wood handle dry."
  },
  {
    "id": "best-axe-under-50-2",
    "rank": 2,
    "badge": "Best Warranty",
    "name": "14\" Outdoor Hatchet Axe",
    "price": "$12.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31EmxWSVtqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GKTJW4BT?tag=rvgearlab-amz-20",
    "description": "This 14 inch hatchet has a proprietary blade grinding the listing says holds an edge longer and cuts three times deeper, a hammer back for tent stakes and balanced weight. A 60-day refund policy and a 1-year warranty are listed.\n\nIt has the most generous return terms in the group and a hammer back, which the Purple Dragon lacks. It is a lighter-duty tool.\n\nIt fits first-time buyers who want a safety net. The hammer back also drives tent stakes.",
    "specs": [
      "14 inch hatchet, hammer back",
      "Proprietary blade grinding",
      "60-day refund, 1-year warranty"
    ],
    "pros": [
      "Hammer back drives tent stakes",
      "60-day refund policy",
      "1-year warranty",
      "Balanced weight"
    ],
    "cons": [
      "No brand name in the title",
      "No sheath listed"
    ],
    "bestFor": "First-time buyers",
    "take": "A hatchet with the best return policy in this group. Good for first-time camping.",
    "catch": "No sheath is listed."
  },
  {
    "id": "best-axe-under-50-3",
    "rank": 3,
    "badge": "Best Folding",
    "name": "LIANTRAL Survival Camping Axe",
    "price": "$25.88",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/419ogH-Qg8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07GBNNKM8?tag=rvgearlab-amz-20",
    "description": "The Liantral is a folding survival axe with steel head, aluminum alloy handle and extension bars. It lists chop, split, hammer, whistle and compass functions and carries in a sheath.\n\nIt is the only folding axe in this group, packing smaller than the hatchets. Its adjustable length is unusual at this price.\n\nIt fits backpackers and kit builders who want one tool to do several jobs. The sheath makes it safe to carry.",
    "specs": [
      "Folding, extension bars",
      "Steel head, aluminum handle",
      "Whistle, compass, sheath"
    ],
    "pros": [
      "Folds to pack small",
      "Adjustable length",
      "Sheath included",
      "Whistle and compass built in"
    ],
    "cons": [
      "Folding joints are weaker",
      "Not for large wood"
    ],
    "bestFor": "Compact emergency kits",
    "take": "A fold-up axe for kits and packs. Great as a backup tool.",
    "catch": "Not for heavy chopping."
  },
  {
    "id": "best-axe-under-50-4",
    "rank": 4,
    "badge": "Best Budget",
    "name": "DESHIL 10 inch Outdoor Hatchet Axe Mini Camping Axe with Sheath-Blue",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31upSzXIiuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D6QJ16RN?tag=rvgearlab-amz-20",
    "description": "The DESHIL is a 10 inch mini hatchet with a carbon steel 45 head heat treated in six steps, a fiberglass shock-absorbing handle, a flat hammer back and a protective blade cover. The head and handle are inseparable.\n\nIt is the smallest and lowest priced axe here, with a hammer back that is useful for stakes. It is for kindling and light camp work.\n\nIt fits day hikers and kids' camp kits. The blade cover keeps it safe in a pack.",
    "specs": [
      "10 inch, carbon steel 45",
      "Fiberglass shock handle",
      "Hammer back, blade cover"
    ],
    "pros": [
      "Smallest and lightest option",
      "Fiberglass shock-absorbing handle",
      "Hammer back for stakes",
      "Blade cover included"
    ],
    "cons": [
      "Short handle limits power",
      "Only for kindling"
    ],
    "bestFor": "Day hikes and kids kits",
    "take": "The cheapest axe here. Fine for kindling and stakes.",
    "catch": "It is too small for larger wood."
  }
];

export const howWeEvaluated = [
  {
    "title": "Steel type",
    "description": "Carbon steel."
  },
  {
    "title": "Handle material",
    "description": "Hickory or fiberglass."
  },
  {
    "title": "Size",
    "description": "Inches."
  },
  {
    "title": "Sheath",
    "description": "Cover."
  },
  {
    "title": "Return terms",
    "description": "Warranty."
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
    "subheading": "By Camp Task",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Splitting and limbing",
          "Purple Dragon 14.7 Inch",
          "Hand-forged cow-foot"
        ],
        [
          "Stakes and kindling",
          "14 Inch Mini Camp Hatchet",
          "Hammer back"
        ],
        [
          "Emergency kit",
          "LIANTRAL Survival Axe",
          "Folds small"
        ],
        [
          "Day hikes",
          "DESHIL 10 Inch Hatchet",
          "10 inches"
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
          "$0 to $20",
          "DESHIL 10 Inch Hatchet or 14 Inch Mini Camp Hatchet"
        ],
        [
          "$20 to $50",
          "LIANTRAL Survival Axe or Purple Dragon 14.7 Inch"
        ]
      ]
    }
  },
  {
    "subheading": "Hickory vs Fiberglass Handles",
    "cards": [
      {
        "label": "Hickory",
        "text": "Absorbs shock and feels classic, needs care. Purple Dragon 14.7 Inch."
      },
      {
        "label": "Fiberglass",
        "text": "Weatherproof and low maintenance. DESHIL 10 Inch Hatchet and 14 Inch Mini Camp Hatchet."
      }
    ],
    "note": "Most campers should choose Purple Dragon 14.7 Inch."
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
          "Lowest cost",
          "DESHIL 10 Inch Hatchet"
        ],
        [
          "Strong warranty",
          "14 Inch Mini Camp Hatchet"
        ],
        [
          "Folding",
          "LIANTRAL Survival Axe"
        ],
        [
          "Best build",
          "Purple Dragon 14.7 Inch"
        ]
      ]
    }
  },
  {
    "subheading": "For Campfire Kindling Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A short handle, a hammer back and a blade cover."
      },
      {
        "label": "In this comparison",
        "text": "DESHIL 10 Inch Hatchet and 14 Inch Mini Camp Hatchet both add a hammer back."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Purple Dragon 14.7 Inch if you will use it every trip."
      },
      {
        "label": "Save if",
        "text": "Save with DESHIL 10 Inch Hatchet for occasional use."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Steel and forging",
    "explanation": "Hand-forged carbon steel holds an edge longer than cast steel. A cast head can chip or crack on frozen wood. Look for forged and the steel type in the listing."
  },
  {
    "criterion": "Handle material",
    "explanation": "Hickory absorbs shock but needs care, while fiberglass resists weather. Choose by how you store it. Check the handle material."
  },
  {
    "criterion": "Hatchet length",
    "explanation": "A 10 inch hatchet is for kindling, and a 14 inch hatchet reaches larger sticks. Longer handles give more power but weigh more. Check the overall length."
  },
  {
    "criterion": "Sheath and cover",
    "explanation": "A sheath protects the edge and your gear. A hand-stitched leather sheath lasts longer than thin plastic. Check what is in the box."
  },
  {
    "criterion": "Warranty and refunds",
    "explanation": "A 1-year warranty and a 60-day refund reduce risk on a cheap tool. Cheap axes can arrive with loose heads or poor edges. Check terms before buying."
  },
  {
    "criterion": "Hammer back",
    "explanation": "A flat hammer back can drive tent stakes. This helps at a campsite. Look for a flat poll."
  }
];

export const faq = [
  {
    "q": "Is a hatchet good enough for camping?",
    "a": "Yes for kindling and small branches. For real firewood choose a longer axe."
  },
  {
    "q": "Is a hickory handle better than fiberglass?",
    "a": "Hickory feels better and absorbs shock. Fiberglass needs less care."
  },
  {
    "q": "Do I need a sheath?",
    "a": "Yes, for safety and for protecting the edge. Purple Dragon 14.7 Inch includes a hand-stitched sheath."
  },
  {
    "q": "How do I keep a cheap hatchet sharp?",
    "a": "Hone it with a stone before trips. Wipe it dry after use."
  },
  {
    "q": "Can I split logs with a hatchet?",
    "a": "Small ones, yes. For big rounds, use a splitting axe."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Axe",
    "href": "/campsite-gear/best-axe"
  },
  {
    "title": "Best Camping Towels",
    "href": "/campsite-gear/best-camping-towels"
  },
  {
    "title": "Best Dry Bags",
    "href": "/campsite-gear/best-dry-bags"
  },
  {
    "title": "Best Camping Lanterns And Camping Lights",
    "href": "/campsite-gear/best-camping-lanterns-and-camping-lights"
  }
];
