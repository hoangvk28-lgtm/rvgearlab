export const guideSlug = "best-axe";
export const guideTitle = "6 Best Axe in 2026";
export const metaTitle = "Best Axe in 2026";
export const metaDescription = "Axes and hatchets compared for camping: a 33.5 inch felling axe, a 28 inch chopping axe and compact hatchets for kindling, from Fiskars to budget picks.";
export const mainKeyword = "best axe";
export const introParagraphs = [
  "An axe or hatchet turns a pile of logs into campfire wood, and the right size depends on what you chop. Long axes fell and split big rounds, while short hatchets split kindling and ride in a pack.",
  "At RV Gear Lab, we compared six axes and hatchets by handle length, head material, handle design and sheath. We sorted them from full-size splitting axes to a 10 inch mini, so you can match the tool to the wood and the weight you want to carry."
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
    "id": "best-axe-1",
    "rank": 1,
    "badge": "Best Overall Chopping Axe",
    "name": "Fiskars A-Series Chopping Axe 28\"",
    "price": "$47.86",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31svk0Ex9pL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BZTC6V7M?tag=rvgearlab-amz-20",
    "description": "Fiskars A-Series is a 28 inch chopping axe described for felling small trees and splitting logs. It uses a precision-balanced design with a low-friction coating that reduces drag and keeps the axe from wedging in wood.\n\nIt sits between the 14 inch X7 hatchet and the 33.5 inch THANKSFINE felling axe, which makes it the best size for car campers. The low-friction coating helps it bite and release cleanly.\n\nCampers who process their own firewood will like how it balances. It earns its trunk space every trip.",
    "specs": [
      "28 inch chopping axe",
      "Low-friction coating",
      "Precision-balanced blade"
    ],
    "pros": [
      "Good midsize reach",
      "Low-friction coating",
      "Balanced for clean cuts",
      "Fiskars build quality"
    ],
    "cons": [
      "Too long for a pack",
      "Higher price than hatchets"
    ],
    "bestFor": "Car camping firewood",
    "take": "The best all-round axe for campsite wood.",
    "catch": "Takes trunk space."
  },
  {
    "id": "best-axe-2",
    "rank": 2,
    "badge": "Best Hatchet",
    "name": "Fiskars X7 Small Hatchet Axe 14\"",
    "price": "$37.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rrCRz6jSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0002YTO7E?tag=rvgearlab-amz-20",
    "description": "Fiskars X7 is a 14 inch hatchet for chopping small to medium kindling and prepping firewood. Its blade is ground to stay sharper longer, and the head is insert-molded to the handle for durability.\n\nIt is shorter and lighter than the A-Series 28 inch, so you can carry it in a pack. The balanced weight gives power with each swing.\n\nBackpackers and car campers who split kindling will like it. Slide it in a pack and it barely adds weight.",
    "specs": [
      "14 inch hatchet",
      "Proprietary blade grind",
      "Insert-molded head"
    ],
    "pros": [
      "Stays sharp longer",
      "Light and well balanced",
      "Insert-molded head",
      "Packs easily"
    ],
    "cons": [
      "Too small for big logs",
      "Short handle limits reach"
    ],
    "bestFor": "Kindling and light chopping",
    "take": "The go-to hatchet for most campers.",
    "catch": "Won't fell trees."
  },
  {
    "id": "best-axe-3",
    "rank": 3,
    "badge": "Best Heavy Splitter",
    "name": "4.5 LB Felling Axe",
    "price": "$30.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51IUX+F0w2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GR541K78?tag=rvgearlab-amz-20",
    "description": "THANKSFINE is a 4.5 pound felling and splitting axe with a carbon steel head and a 33.5 inch shock-absorbing fiberglass handle. The long handle gives reach and swing control.\n\nIt brings the most weight and reach in the group, and it costs less than the Fiskars A-Series. The fiberglass handle absorbs vibration.\n\nCabin owners and base campers who split lots of logs will like the power. It makes quick work of seasoned rounds.",
    "specs": [
      "4.5 lb carbon steel head",
      "33.5 inch handle",
      "Shock-absorbing fiberglass"
    ],
    "pros": [
      "Heavy head for splitting",
      "Long handle for reach",
      "Fiberglass absorbs shock",
      "Low price for the size"
    ],
    "cons": [
      "Heavy to carry",
      "Needs room to swing"
    ],
    "bestFor": "Base camp splitting",
    "take": "A big splitter at a good price.",
    "catch": "Too heavy for casual use."
  },
  {
    "id": "best-axe-4",
    "rank": 4,
    "badge": "Best Mid-Priced Hatchet",
    "name": "KSEIBI 274150 Camping Hatchet Axe",
    "price": "$18.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31hH0QEmbkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B088FHZ8BG?tag=rvgearlab-amz-20",
    "description": "KSEIBI 274150 is a camping hatchet for splitting wood and kindling. It has a fiberglass shock-reduction handle with an anti-slip grip and works as a hand maul.\n\nIt costs less than the Fiskars X7 and offers its own shock-reducing handle. It is a straightforward tool for light duty.\n\nWeekend campers who need a basic hatchet will like it. Keep it in a camp box for kindling duty.",
    "specs": [
      "Camping hatchet",
      "Fiberglass shock reduction handle",
      "Hand maul use"
    ],
    "pros": [
      "Shock-reducing handle",
      "Anti-slip grip",
      "Works as a hand maul",
      "Low price"
    ],
    "cons": [
      "Less refined than Fiskars",
      "Short reach"
    ],
    "bestFor": "Weekend campers",
    "take": "A solid basic hatchet.",
    "catch": "Basic edge needs sharpening."
  },
  {
    "id": "best-axe-5",
    "rank": 5,
    "badge": "Best With Sheath",
    "name": "Freelander Hatchet Axe with Sheath",
    "price": "$19.79",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41r1IUvyuhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DKBSM45G?tag=rvgearlab-amz-20",
    "description": "Freelander is a multi-functional tactical hatchet with a reinforced handle and a sheath. A precision-sharp blade handles cutting and chopping, and it fits in a side pocket of a pack.\n\nIt is the most pack-friendly of the hatchets here and includes the sheath. The tomahawk shape is lighter than the X7.\n\nHikers and bushcrafters who carry a small tool will like it. It stays covered and safe in the pack.",
    "specs": [
      "Tactical hatchet with sheath",
      "Reinforced handle",
      "Fits in a pack pocket"
    ],
    "pros": [
      "Sheath included",
      "Compact and light",
      "Reinforced handle",
      "Low price"
    ],
    "cons": [
      "Light head for big wood",
      "Tactical styling"
    ],
    "bestFor": "Hikers",
    "take": "A small hatchet that rides on a pack.",
    "catch": "Not for large logs."
  },
  {
    "id": "best-axe-6",
    "rank": 6,
    "badge": "Best Budget Mini Axe",
    "name": "DESHIL 10 inch Outdoor Hatchet Axe Mini Camping Axe with Sheath-Blue",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31upSzXIiuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D6QJ16RN?tag=rvgearlab-amz-20",
    "description": "DESHIL is a 10 inch mini hatchet with a carbon steel 45 head that has been heat treated with a six-step process. It has a fiberglass shock reduction handle and a flat back for use as a hammer.\n\nIt is the smallest and cheapest axe in the group, and the hammer back drives tent stakes. It comes with a sheath.\n\nBackpackers and light campers will like how small it is. It tucks into a day pack easily.",
    "specs": [
      "10 inch mini hatchet",
      "Carbon steel 45, heat treated",
      "Hammer back, with sheath"
    ],
    "pros": [
      "Smallest and lightest",
      "Hammer back drives stakes",
      "Heat treated carbon steel",
      "Lowest price"
    ],
    "cons": [
      "Only for small kindling",
      "Short handle limits power"
    ],
    "bestFor": "Light backpacking",
    "take": "A cheap mini hatchet for kindling.",
    "catch": "Too short for logs."
  }
];

export const howWeEvaluated = [
  {
    "title": "Size and reach",
    "description": "Compared handle lengths from 10 to 33.5 inches."
  },
  {
    "title": "Head material",
    "description": "Looked at carbon steel and coatings."
  },
  {
    "title": "Handle design",
    "description": "Considered fiberglass shock absorption."
  },
  {
    "title": "Sheath and carry",
    "description": "Looked at sheaths and pack fit."
  },
  {
    "title": "Price",
    "description": "Weighed cost against use."
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
          "Kindling",
          "Fiskars X7 Hatchet",
          "14 inch."
        ],
        [
          "Small logs",
          "Fiskars A-Series 28 Inch",
          "28 inch."
        ],
        [
          "Large rounds",
          "THANKSFINE 4.5 lb",
          "4.5 lb head."
        ],
        [
          "Backpacking kindling",
          "DESHIL 10 Inch",
          "10 inch."
        ],
        [
          "Hiking with sheath",
          "Freelander Hatchet",
          "Compact."
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
          "DESHIL 10 Inch or KSEIBI 274150"
        ],
        [
          "$10 to $40",
          "Freelander Hatchet or THANKSFINE 4.5 lb"
        ],
        [
          "$30 to $50",
          "Fiskars X7 Hatchet or Fiskars A-Series 28 Inch"
        ]
      ]
    }
  },
  {
    "subheading": "Axe vs Hatchet",
    "cards": [
      {
        "label": "Axe",
        "text": "More power and reach. Fiskars A-Series 28 Inch and THANKSFINE 4.5 lb are axes."
      },
      {
        "label": "Hatchet",
        "text": "Compact and packable. Fiskars X7 Hatchet, KSEIBI 274150, Freelander Hatchet and DESHIL 10 Inch are hatchets."
      }
    ],
    "note": "Most campers should default to Fiskars X7 Hatchet unless they split big logs."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "If you want",
        "Recommended pick"
      ],
      "rows": [
        [
          "Sheath included",
          "Freelander Hatchet"
        ],
        [
          "Hammer back",
          "DESHIL 10 Inch"
        ],
        [
          "Lowest price",
          "DESHIL 10 Inch"
        ]
      ]
    }
  },
  {
    "subheading": "For Campfire Wood Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A hatchet or axe sized to your wood with a shock-absorbing handle."
      },
      {
        "label": "In this comparison",
        "text": "Fiskars X7 Hatchet handles kindling, and Fiskars A-Series 28 Inch handles larger wood."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Fiskars A-Series 28 Inch for balance."
      },
      {
        "label": "Save if",
        "text": "Save with KSEIBI 274150."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Handle length",
    "explanation": "A 10 to 14 inch hatchet splits kindling and rides in a pack, while a 28 to 33 inch axe splits logs and fells small trees. Longer handles give more power but need room to swing safely. Check the length in inches against the wood you plan to chop."
  },
  {
    "criterion": "Head weight",
    "explanation": "A heavy head such as 4.5 pounds splits stubborn rounds with fewer swings, while lighter heads suit kindling and tire your arms less. Heavy tools are harder to control for new users. Check the head weight on the listing."
  },
  {
    "criterion": "Handle material",
    "explanation": "Fiberglass handles absorb shock and shrug off weather, which is good for long chopping sessions. Wood feels traditional but can crack. Look for fiberglass or shock-reducing wording and an anti-slip grip."
  },
  {
    "criterion": "Edge and coating",
    "explanation": "A sharp edge and a low-friction coating reduce sticking in the wood. Carbon steel holds an edge well but needs care to prevent rust. Check blade details and plan to wipe the head dry."
  },
  {
    "criterion": "Sheath and carrying",
    "explanation": "A sheath protects the edge and your gear, which matters when a hatchet rides in a pack. Some axes ship with one and some do not. Check whether a sheath is included."
  }
];

export const faq = [
  {
    "q": "What size axe do I need for camping?",
    "a": "A 14 inch hatchet splits kindling and small logs, while a 28 inch axe handles larger wood. Choose by the wood you will actually cut. Larger is not always better."
  },
  {
    "q": "How do I chop wood safely?",
    "a": "Plant your feet wide, use a chopping block and keep other people well back. Never swing toward your legs. Wear sturdy shoes and gloves."
  },
  {
    "q": "Is a fiberglass handle better than wood?",
    "a": "Fiberglass handles absorb shock and resist weather, so they suit camp use. Wood is traditional but can crack. Fiskars A-Series 28 Inch and THANKSFINE 4.5 lb highlight shock absorption."
  },
  {
    "q": "How do I sharpen a hatchet?",
    "a": "Use a mill file or sharpening stone, working along the bevel from the edge. Keep the angle consistent and finish with light strokes. Wear gloves."
  },
  {
    "q": "How do I store an axe between trips?",
    "a": "Wipe the head dry, add a thin coat of oil and keep the edge covered with a sheath. Store in a dry place. Check for loose heads before use."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
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
  },
  {
    "title": "Best Headlamps",
    "href": "/campsite-gear/best-headlamps"
  }
];
