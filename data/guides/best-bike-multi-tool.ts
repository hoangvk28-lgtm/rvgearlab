export const guideSlug = "best-bike-multi-tool";
export const guideTitle = "5 Best Bike Multi Tool in 2026";
export const metaTitle = "Best Bike Multi Tool in 2026";
export const metaDescription = "Bike multi-tools compared for trailside repairs: hex, spoke and chain tools from Crankbrothers and Vibrelli to compact 6-in-1 and 16-in-1 options.";
export const mainKeyword = "best bike multi tool";
export const introParagraphs = [
  "A bike multi-tool turns a stranded ride into a two-minute fix. The things that matter are hex sizes, a chain tool and how well the tool fits in your hand with gloves on.",
  "At RV Gear Lab, we compared five multi-tools by listed tool count, chain tool compatibility, materials and size. They range from a full-featured Crankbrothers to a 6-tool pocket kit, so match the tool to how far from help you ride."
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
    "id": "best-bike-multi-tool-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Crankbrothers Multi Tool M 19 Matte Black",
    "price": "$34.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fKYwsg2mL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00ZDUGHCW?tag=rvgearlab-amz-20",
    "description": "Crankbrothers M19 lists hex wrenches in sizes 2 to 8, open wrenches at 8mm and 10mm, spoke wrenches in sizes 0 to 3 and screwdrivers. A chain tool works with 8, 9, 10, 11 and 12 speed chains, and side grips give a secure hold even with gloves on.\n\nThe 8 to 12 speed chain tool suits riders with modern drivetrains. The ergonomic side grips make it easier to use than slim tools like the KIEVODE.\n\nMountain bikers and tourers who ride far from help will like the full set and sturdy feel. It handles a wheel true, a chain fix and a seat adjustment in one stop.",
    "specs": [
      "Hex 2 to 8mm, spoke wrenches",
      "Chain tool for 8 to 12 speed",
      "Side grips for glove use"
    ],
    "pros": [
      "Chain tool fits 8 to 12 speed",
      "Full hex range 2 to 8mm",
      "Ergonomic side grips",
      "Spoke wrenches included"
    ],
    "cons": [
      "Highest price here",
      "Heavier than mini tools"
    ],
    "bestFor": "Serious riders",
    "take": "The most complete tool for remote rides.",
    "catch": "Larger than a saddle-bag mini tool."
  },
  {
    "id": "best-bike-multi-tool-2",
    "rank": 2,
    "badge": "Best Mid-Price Crankbrothers",
    "name": "Crankbrothers Multi Tool M 17 Gold",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41MFx7Mu6DL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B002VG40AM?tag=rvgearlab-amz-20",
    "description": "Crankbrothers M17 lists hex wrenches 2 to 8, open wrenches at 8mm and 10mm, and spoke wrenches in sizes 0 to 3. A chain tool covers 8, 9, 10, 11 and 12 speed chains, with ergonomic side grips.\n\nIt lists the same hex range, spoke wrenches and chain tool range as the M19 and costs less. The ergonomic grips make it usable with gloves.\n\nRiders who want Crankbrothers quality at a lower price will like it. It rides well in a saddle bag or a frame pack.",
    "specs": [
      "Hex 2 to 8mm, spoke wrenches",
      "Chain tool for 8 to 12 speed",
      "Ergonomic side grips"
    ],
    "pros": [
      "Same chain tool range as M19",
      "Full hex range",
      "Glove-friendly grips",
      "Lower price than M19"
    ],
    "cons": [
      "Price is above budget tools",
      "Heavier than mini tools"
    ],
    "bestFor": "Value-minded riders",
    "take": "A trusted tool at a friendlier price.",
    "catch": "Slightly less complete than the M19."
  },
  {
    "id": "best-bike-multi-tool-3",
    "rank": 3,
    "badge": "Best With Carry Case",
    "name": "Vibrelli Bike Multi Tool V19",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41BPTlSLA9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B06XGWMGB9?tag=rvgearlab-amz-20",
    "description": "Vibrelli V19 packs 19 precision tools, including hex sizes 2 to 8, a universal chain breaker and spoke wrenches in M7, M9 and other sizes. It measures 3 by 2 inches, weighs 6.5 oz and comes with a carry case.\n\nIt meets the MIL-STD 810G durability standard, a claim the other tools here do not make, and the carry case keeps it tidy. It costs less than either Crankbrothers tool.\n\nRiders who toss a tool in a pack and forget it will like the durability. The slim 3 by 2 inch size fits any pocket.",
    "specs": [
      "19 tools, 6.5 oz",
      "3x2 inch slim profile",
      "MIL-STD 810G durability claim"
    ],
    "pros": [
      "19 tools in 6.5 oz",
      "Carry case included",
      "Durability standard listed",
      "Lower price than Crankbrothers"
    ],
    "cons": [
      "Dense layout takes practice",
      "Slim body is harder to hold"
    ],
    "bestFor": "Everyday riders",
    "take": "A well-priced 19-tool kit with a case.",
    "catch": "Many tools in a small body."
  },
  {
    "id": "best-bike-multi-tool-4",
    "rank": 4,
    "badge": "Best Budget Full Tool",
    "name": "ROCKBROS Bike Multitool Lightweight 16-in-1 MTB Bicycle Multitool Compact",
    "price": "$10.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41XJ2wPeNDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GTKN8SQR?tag=rvgearlab-amz-20",
    "description": "ROCKBROS 16-in-1 includes Allen wrenches in 2, 2.5, 3, 4, 5 and 6 sizes, plus other repair tools. It is built from high-strength galvanized steel, weighs about 205 g and measures 90 by 44 by 25 mm.\n\nIt is compact enough for a saddle bag and costs far less than the Crankbrothers or Vibrelli. It resists rust.\n\nCommuters and casual mountain bikers will like the price and size. It stays tucked away until you need it.",
    "specs": [
      "16 tools, galvanized steel",
      "About 205 g",
      "90 x 44 x 25 mm"
    ],
    "pros": [
      "Resists rust",
      "Fits a saddle bag",
      "16 tools in one",
      "Low price"
    ],
    "cons": [
      "Fewer hex sizes than M19",
      "Heavier than a mini tool"
    ],
    "bestFor": "Casual riders",
    "take": "A cheap, complete multi-tool.",
    "catch": "Check for an 8mm hex before buying."
  },
  {
    "id": "best-bike-multi-tool-5",
    "rank": 5,
    "badge": "Best Mini Tool",
    "name": "KIEVODE Bike Multi-Tool Mini Multitool Kit",
    "price": "$11.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Z45tKBvFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C6G3KSFH?tag=rvgearlab-amz-20",
    "description": "KIEVODE is a compact multi-tool with six tools made of premium carbon steel and aluminum alloy. It handles on-the-ride adjustments of brakes, handlebars, saddles and derailleurs.\n\nIt is the smallest and cheapest tool here and it covers the common adjustments. It slips into a jersey pocket.\n\nRoad cyclists and commuters who want a tiny emergency tool will like it. It weighs almost nothing in a jersey.",
    "specs": [
      "6 tools, carbon steel",
      "Aluminum alloy body",
      "Brakes, saddle, derailleur"
    ],
    "pros": [
      "Smallest and cheapest here",
      "Covers common adjustments",
      "Carbon steel and aluminum",
      "Pockets easily"
    ],
    "cons": [
      "No chain tool listed",
      "Only six tools"
    ],
    "bestFor": "Road commuters",
    "take": "A tiny tool for quick fixes.",
    "catch": "Not for chain repairs."
  }
];

export const howWeEvaluated = [
  {
    "title": "Tool count",
    "description": "Compared listed tools and hex sizes."
  },
  {
    "title": "Chain tool",
    "description": "Looked at chain tool support and speed range."
  },
  {
    "title": "Materials",
    "description": "Considered steel, galvanized steel and alloy."
  },
  {
    "title": "Size and weight",
    "description": "Compared dimensions and weight."
  },
  {
    "title": "Price",
    "description": "Weighed cost against tools."
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
    "subheading": "By Ride Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Remote mountain rides",
          "Crankbrothers M19",
          "Full tool set."
        ],
        [
          "Value full set",
          "Crankbrothers M17",
          "Lower price."
        ],
        [
          "Everyday riding",
          "Vibrelli V19",
          "Carry case."
        ],
        [
          "Commuting budget",
          "ROCKBROS 16-in-1",
          "Low price."
        ],
        [
          "Road ride pocket",
          "KIEVODE 6-Tool",
          "Tiny."
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
          "ROCKBROS 16-in-1 or KIEVODE 6-Tool"
        ],
        [
          "$20 to $30",
          "Vibrelli V19 or Crankbrothers M17"
        ],
        [
          "$30 to $40",
          "Crankbrothers M19"
        ]
      ]
    }
  },
  {
    "subheading": "Full Tool vs Mini Tool",
    "cards": [
      {
        "label": "Full tool",
        "text": "More tools and a chain breaker. Crankbrothers M19, Crankbrothers M17, Vibrelli V19 and ROCKBROS 16-in-1 are full tools."
      },
      {
        "label": "Mini tool",
        "text": "Smaller but limited. KIEVODE 6-Tool is the mini."
      }
    ],
    "note": "Most riders should default to Vibrelli V19."
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
          "Chain tool for 12 speed",
          "Crankbrothers M19"
        ],
        [
          "Carry case",
          "Vibrelli V19"
        ],
        [
          "Lowest price",
          "KIEVODE 6-Tool"
        ]
      ]
    }
  },
  {
    "subheading": "For Bikepacking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A chain tool, 2 to 8mm hex keys and spoke wrenches."
      },
      {
        "label": "In this comparison",
        "text": "Crankbrothers M19 covers all three."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Crankbrothers M19 for completeness."
      },
      {
        "label": "Save if",
        "text": "Save with KIEVODE 6-Tool."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Hex key sizes",
    "explanation": "Most bike bolts use 2 to 8mm hex keys, so a tool covering that range handles nearly every adjustment. A missing 5mm or 6mm size is a common reason for a stuck ride. Check the listed hex sizes against the bolts on your bike."
  },
  {
    "criterion": "Chain tool support",
    "explanation": "A chain tool pushes out a pin so you can repair a broken chain, and it must match your speed count. Tools that list 8 to 12 speed cover most modern bikes. Check chain tool compatibility on the listing."
  },
  {
    "criterion": "Spoke wrenches",
    "explanation": "A spoke wrench lets you true a bent wheel well enough to ride home. Sizes vary with spoke type, so a set of several sizes is safer. Check which spoke sizes are included."
  },
  {
    "criterion": "Ergonomics",
    "explanation": "Side grips help you apply torque, especially with gloves on or cold hands. Slim tools are compact but harder to hold. Check the grip description and look at the photos."
  },
  {
    "criterion": "Weight and size",
    "explanation": "A tool near 6.5 oz is easy to carry in a pack, and a 205 g tool is still fine in a saddle bag. A tiny tool with six functions is lighter but limited. Check weight and dimensions."
  }
];

export const faq = [
  {
    "q": "What should a bike multi-tool include?",
    "a": "Hex keys from 2 to 8mm, a chain tool and a screwdriver cover most repairs. Spoke wrenches are a plus for mountain biking. Match the tool to your bike."
  },
  {
    "q": "Do I need a chain tool on every ride?",
    "a": "For short road rides near home, maybe not. On remote or long rides a chain tool can save the day. Crankbrothers M19 lists support for 8 to 12 speed chains."
  },
  {
    "q": "Is a bigger multi-tool always better?",
    "a": "Not always. A big tool is great for remote rides but heavier. KIEVODE 6-Tool suits pocket carry for short rides."
  },
  {
    "q": "How do I use a chain tool?",
    "a": "Line the chain pin up with the tool, turn the handle to push the pin out and reassemble with a quick link or a new pin. Practice at home first. Check your chain type."
  },
  {
    "q": "How do I care for a multi-tool?",
    "a": "Wipe it dry after rides and add a drop of light oil to joints. Check that screws stay tight. Keep it in its case."
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
