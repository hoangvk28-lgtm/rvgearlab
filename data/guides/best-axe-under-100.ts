export const guideSlug = "best-axe-under-100";
export const guideTitle = "4 Best Axe Under 100 in 2026";
export const metaTitle = "Best Axe Under 100 in 2026";
export const metaDescription = "Best axes under $100: four camp and yard axes from a 28 inch Fiskars to a folding Liantral, compared on handle, steel, weight and sheath.";
export const mainKeyword = "best axe under 100";
export const introParagraphs = [
  "A budget under $100 is enough for a good axe, but the axe that is best for you depends on whether you fell small trees at a cabin or only split kindling at camp. Handle length and head weight decide the job.",
  "These four cover a 28 inch chopping axe, a forged 14 inch camp axe, a folding multi-tool axe and a light throwing-style hatchet. They are ordered by how well each one handles real wood work for the money."
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
    "id": "best-axe-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Fiskars A-Series Chopping Axe 28\"",
    "price": "$47.86",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31svk0Ex9pL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BZTC6V7M?tag=rvgearlab-amz-20",
    "description": "The Fiskars A-Series is a 28 inch chopping axe with a precision-balanced design, a low-friction coated blade and a lifetime warranty. It is described for felling small trees and splitting logs, from campsite prep to backyard cleanup.\n\nIt is the only full-length axe here, which gives the swing power the 14 inch Estwing and Hitdudu hatchets cannot. The low-friction coating helps it avoid sticking in wood.\n\nIt fits cabin owners and campers who cut real firewood and small trees. The lifetime warranty covers the investment.",
    "specs": [
      "28 inch, precision-balanced",
      "Low-friction coated blade",
      "Lifetime warranty"
    ],
    "pros": [
      "Full 28 inch length for real swing power",
      "Low-friction coating reduces sticking",
      "Lifetime warranty",
      "Sharp, well-balanced head"
    ],
    "cons": [
      "Too long for a backpack",
      "Not a pure splitting maul"
    ],
    "bestFor": "Cabin and car camping",
    "take": "A real axe at a fair price. It handles trees and logs for years.",
    "catch": "It is too long for hiking."
  },
  {
    "id": "best-axe-under-100-2",
    "rank": 2,
    "badge": "Best Forged Hatchet",
    "name": "ESTWING Camper's Axe",
    "price": "$31.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31xGV3HH5qL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01D8STIVM?tag=rvgearlab-amz-20",
    "description": "The Estwing Camper's Axe is forged from one piece of American steel, with a patented shock reduction grip that the listing says cuts impact vibration by 70%. A ballistic nylon sheath protects the hand-sharpened 4 inch cutting edge and has a belt loop.\n\nA one-piece forged design removes the weak points of a glued head, which separates it from the Hitdudu and Liantral. A stake puller on the head doubles as a tent tool.\n\nIt fits campers who want a durable hatchet made in the USA. It works for kindling, branches and small logs.",
    "specs": [
      "14 inch, one-piece forged steel",
      "Shock reduction grip, 70% less vibration",
      "Sheath with belt loop, stake puller"
    ],
    "pros": [
      "One-piece forged steel has no weak joint",
      "Shock reduction grip",
      "Made in Rockford, Illinois",
      "Includes sheath and stake puller"
    ],
    "cons": [
      "14 inch handle limits big splitting",
      "Orange grip is not for everyone"
    ],
    "bestFor": "Lifetime camp hatchet",
    "take": "A forged camp axe that will not loosen. Great for kindling and stakes.",
    "catch": "It is a hatchet, not a splitting maul."
  },
  {
    "id": "best-axe-under-100-3",
    "rank": 3,
    "badge": "Best Light and Cheap",
    "name": "Hitdudu Camping Hatchet",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ZjVm6-ewL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09JP8CGPB?tag=rvgearlab-amz-20",
    "description": "The Hitdudu hatchet is 14.2 inches long with a 4.1 inch blade and weighs 1.98 lbs, with a forged carbon steel head and a fiberglass handle that is anti-skid and shock absorbing. A nylon sheath and a limited lifetime warranty are included.\n\nIt is the lowest priced of the group, with a lighter weight than the Estwing for easy carry. The listing says it also suits throwing.\n\nIt fits campers on a budget who want a hatchet for kindling and branches. The sheath keeps the blade covered in a pack.",
    "specs": [
      "14.2 inch, 1.98 lbs",
      "Forged carbon steel head",
      "Fiberglass handle, nylon sheath"
    ],
    "pros": [
      "Light at 1.98 lbs",
      "Fiberglass shock-absorbing handle",
      "Nylon sheath included",
      "Limited lifetime warranty"
    ],
    "cons": [
      "Short 4.1 inch blade",
      "Not for larger logs"
    ],
    "bestFor": "Budget kindling hatchet",
    "take": "A cheap, light hatchet with a sheath. Good for a camp kit.",
    "catch": "It struggles with large rounds."
  },
  {
    "id": "best-axe-under-100-4",
    "rank": 4,
    "badge": "Best Multi-Tool",
    "name": "LIANTRAL Camping Axe",
    "price": "$28.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51cOSUevXeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07NZN5X2S?tag=rvgearlab-amz-20",
    "description": "The Liantral is a folding survival axe with a steel head and aluminum alloy handle and extension bars so the length can be adjusted. The listing names functions including chop, split, hammer, whistle and compass, and it comes in a sheath.\n\nIt packs smaller than any other pick, which suits bug-out bags and hikers. Adjustable length is a unique feature among these axes.\n\nIt fits backpackers and emergency kit builders who want a compact axe. The sheath makes carry safe in a bag.",
    "specs": [
      "Folding, adjustable length",
      "Steel head, aluminum handle",
      "Whistle, compass, sheath"
    ],
    "pros": [
      "Folds small for packs",
      "Adjustable length with extension bars",
      "Compass and whistle included",
      "Sheath included"
    ],
    "cons": [
      "Joints are weaker than a solid handle",
      "Not for heavy chopping"
    ],
    "bestFor": "Backpacking and emergency kits",
    "take": "A compact multi-tool axe. Packs small for a bug-out bag.",
    "catch": "Folding joints limit heavy use."
  }
];

export const howWeEvaluated = [
  {
    "title": "Handle length",
    "description": "Inches."
  },
  {
    "title": "Head weight",
    "description": "Pounds."
  },
  {
    "title": "Steel and forging",
    "description": "Forged or cast."
  },
  {
    "title": "Sheath",
    "description": "Edge cover."
  },
  {
    "title": "Warranty",
    "description": "Years."
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
    "subheading": "By Wood Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Felling small trees and logs",
          "Fiskars A-Series 28 Inch",
          "28 inches of swing"
        ],
        [
          "Kindling, stakes and branches",
          "ESTWING Camper's Axe 14 Inch",
          "Forged one-piece"
        ],
        [
          "Light kindling on a budget",
          "Hitdudu 14 Inch Hatchet",
          "1.98 lbs"
        ],
        [
          "Bug-out bag",
          "LIANTRAL Folding Axe",
          "Folds small"
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
          "$10 to $30",
          "Hitdudu 14 Inch Hatchet or LIANTRAL Folding Axe"
        ],
        [
          "$30 to $50",
          "ESTWING Camper's Axe 14 Inch or Fiskars A-Series 28 Inch"
        ]
      ]
    }
  },
  {
    "subheading": "Full Axe vs Hatchet",
    "cards": [
      {
        "label": "Full Axe",
        "text": "More swing power for larger wood. Fiskars A-Series 28 Inch."
      },
      {
        "label": "Hatchet",
        "text": "Compact and light for kindling. ESTWING Camper's Axe 14 Inch, Hitdudu 14 Inch Hatchet and LIANTRAL Folding Axe."
      }
    ],
    "note": "Most campers should choose Fiskars A-Series 28 Inch for car camping."
  },
  {
    "subheading": "By Carry",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Car camping",
          "Fiskars A-Series 28 Inch"
        ],
        [
          "Belt carry",
          "ESTWING Camper's Axe 14 Inch"
        ],
        [
          "Pack carry",
          "LIANTRAL Folding Axe"
        ],
        [
          "Light carry",
          "Hitdudu 14 Inch Hatchet"
        ]
      ]
    }
  },
  {
    "subheading": "For Car Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A full-size axe for real firewood and a hatchet for kindling."
      },
      {
        "label": "In this comparison",
        "text": "Fiskars A-Series 28 Inch handles logs, and ESTWING Camper's Axe 14 Inch handles kindling."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Fiskars A-Series 28 Inch or ESTWING Camper's Axe 14 Inch for lifetime durability."
      },
      {
        "label": "Save if",
        "text": "Save with Hitdudu 14 Inch Hatchet or LIANTRAL Folding Axe for occasional use."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match axe length to the job",
    "explanation": "A 28 inch axe swings with power for felling and splitting, while a 14 inch hatchet is for kindling and limbing. Choose by the biggest wood you cut. Check overall length."
  },
  {
    "criterion": "Forged versus joined heads",
    "explanation": "A one-piece forged axe has no joint to loosen. A glued or wedged head can work loose with heavy use. Look for forged in one piece wording."
  },
  {
    "criterion": "Handle material",
    "explanation": "Fiberglass resists weather and shock. Wood is classic but can swell. Check the handle material and any shock reduction claims."
  },
  {
    "criterion": "Edge protection",
    "explanation": "A sheath protects the blade and your pack. A hand-sharpened edge keeps working longer. Check for a sheath in the box."
  },
  {
    "criterion": "Warranty",
    "explanation": "A lifetime warranty covers handle and head defects. It does not cover misuse such as striking metal. Check warranty terms before buying."
  },
  {
    "criterion": "What $100 buys",
    "explanation": "Under $100 you can buy a good axe but not a premium forged one. Factory edges are often dull, so a quick pass with a file helps. Plan on sharpening it before first use."
  }
];

export const faq = [
  {
    "q": "What is a good axe for camping under $100?",
    "a": "A 28 inch Fiskars handles real firewood. A 14 inch forged hatchet handles kindling."
  },
  {
    "q": "Should I buy an axe or a hatchet for camping?",
    "a": "An axe is better for real firewood, and a hatchet is for kindling. Many campers carry both."
  },
  {
    "q": "Is a folding axe worth it?",
    "a": "For emergency kits, yes. LIANTRAL Folding Axe packs small but is not for heavy chopping."
  },
  {
    "q": "How do I use an axe safely?",
    "a": "Clear the area, use a stump and keep your free hand away. Use a sheath for transport."
  },
  {
    "q": "How do I sharpen a new axe?",
    "a": "Use a file or sharpening stone and follow the existing bevel. Hone lightly before each trip."
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
