export const guideSlug = "best-pocket-knife-under-100";
export const guideTitle = "6 Best Pocket Knife Under 100 in 2026";
export const metaTitle = "Best Pocket Knife Under 100 in 2026";
export const metaDescription = "Best pocket knives under $100: six folders from about $15 to $30 that put premium-style steels and G10 handles well inside a $100 budget.";
export const mainKeyword = "best pocket knife under 100";
export const introParagraphs = [
  "A hundred dollars is a lot of pocket knife, and the picks here cost a fraction of it. At this level the question is which steel, handle and lock you want, not whether you can afford a good folder.",
  "The six knives below span from a 2.2 inch Gerber to a 3.54 inch D2 folder. They are ordered by steel, lock type and handle material, with blade length and price as tiebreakers."
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
    "id": "best-pocket-knife-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "CIVIVI Mini Praxis Folding Pocket Knife",
    "price": "$29.74",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31deuAGajeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BF8FPH5L?tag=rvgearlab-20",
    "description": "The CIVIVI Mini Praxis has a 2.98 inch D2 steel blade in a stonewashed finish, a G10 handle and a ceramic ball-bearing pivot. The listing describes it as a compact knife for a purse, backpack or pocket.\n\nIt has the smoothest-described pivot of the six and carries a recognized brand. Against the KLAKEN Virex, it has a shorter blade and a more compact build.\n\nIt suits campers who want a small, refined EDC and camp knife. The G10 handle resists moisture and temperature swings.",
    "specs": [
      "2.98 inch D2 steel blade",
      "G10 handle",
      "Ceramic ball-bearing pivot"
    ],
    "pros": [
      "D2 steel balances edge and corrosion",
      "G10 handle resists moisture",
      "Smooth ceramic bearing pivot",
      "Compact for a pocket or pack"
    ],
    "cons": [
      "Costs near the top of this group",
      "Blade is shorter than the KLAKEN"
    ],
    "bestFor": "Campers who want a refined small knife",
    "take": "A smooth, small folder with D2 steel. A strong everyday pick.",
    "catch": "Its 2.98 inch blade is a little short for bigger camp cuts."
  },
  {
    "id": "best-pocket-knife-under-100-2",
    "rank": 2,
    "badge": "Best Longest Blade",
    "name": "KLAKEN Virex Pocket Knife",
    "price": "$22.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31pIsNdHn8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FMFT54WN?tag=rvgearlab-20",
    "description": "The KLAKEN Virex has a 3.54 inch D2 blade, an ergonomic G10 handle with a non-slip texture and a ball-bearing opening system. The listing describes a military-grade locking mechanism and corrosion-resistant steel.\n\nIt has the longest blade of the six and costs less than the CIVIVI. It uses the same D2 steel as the Mini Praxis in a longer blade for camp tasks.\n\nIt suits campers who want a larger folder for food prep and cord. The textured G10 grips well in rain.",
    "specs": [
      "3.54 inch D2 blade",
      "G10 handle, non-slip texture",
      "Ball-bearing one-hand opening"
    ],
    "pros": [
      "Longest blade of the six",
      "Textured G10 grips well when wet",
      "Ball-bearing opening is smooth",
      "Lower price than the CIVIVI"
    ],
    "cons": [
      "Bigger in the pocket",
      "Brand is less established"
    ],
    "bestFor": "Campers who want a longer blade",
    "take": "The biggest blade and a solid lock. Good value for camp use.",
    "catch": "The longer blade makes it bulkier in a small pocket."
  },
  {
    "id": "best-pocket-knife-under-100-3",
    "rank": 3,
    "badge": "Best Steel Pick",
    "name": "VIRENKNIFE Folding Pocket Knife，Lightweight Pocket Knife 2.95'' 14C28N Steel Blade G10 Handle Small EDC Knife ",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31utO6gWRhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GB7NPTZP?tag=rvgearlab-20",
    "description": "The VIRENKNIFE has a 2.95 inch 14C28N stainless steel blade, a G10 handle, a crossbar lock and a ceramic ball-bearing pivot. A pocket clip carries it in a pocket or backpack.\n\nIt uses 14C28N steel, a stainless option that the listing credits for strong cutting, and it uses a crossbar lock instead of a liner lock. It costs less than the CIVIVI and KLAKEN.\n\nIt suits campers who want a stainless blade that resists rust near water. The crossbar lock suits one-handed use.",
    "specs": [
      "2.95 inch 14C28N stainless blade",
      "G10 handle, crossbar lock",
      "Ceramic ball-bearing pivot"
    ],
    "pros": [
      "14C28N stainless resists rust",
      "Crossbar lock for one-hand use",
      "G10 handle, pocket clip",
      "Lower price than the D2 knives"
    ],
    "cons": [
      "Newer, less proven brand",
      "Blade is short"
    ],
    "bestFor": "Campers near water",
    "take": "A rust-resistant steel and crossbar lock at a low price. Good for wet trips.",
    "catch": "The brand is less proven than CIVIVI or Kershaw."
  },
  {
    "id": "best-pocket-knife-under-100-4",
    "rank": 4,
    "badge": "Best Sheath Included",
    "name": "Kershaw Appa Pocket Knife",
    "price": "$16.28",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41zdLMjiNkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09T8YPT1X?tag=rvgearlab-20",
    "description": "The Kershaw Appa has a 2.75 inch reverse tanto plain-edge blade in black-oxide stainless steel and a glass-filled nylon handle. A nylon sheath with straps is included for belt carry.\n\nIt is the only knife here with a sheath, which suits a belt carry or a pack. It has a simpler handle than the G10 folders.\n\nIt suits campers who want a tactical-style blade on a belt. The reverse tanto point handles box and rope cuts.",
    "specs": [
      "2.75 inch reverse tanto blade",
      "Glass-filled nylon handle",
      "Nylon sheath included"
    ],
    "pros": [
      "Sheath is included for belt carry",
      "Black-oxide finish resists glare",
      "Tanto point is strong for piercing",
      "Low price from a known brand"
    ],
    "cons": [
      "Nylon handle is less refined than G10",
      "Short blade"
    ],
    "bestFor": "Belt carry and tactical styles",
    "take": "A known brand with a sheath for a low price. Good for belt carry.",
    "catch": "The nylon handle feels basic next to G10."
  },
  {
    "id": "best-pocket-knife-under-100-5",
    "rank": 5,
    "badge": "Best Premium Steel Claim",
    "name": "cckk 9000R Pocket Knife 3.3\" Cpm-Magnacut Steel Anodized Aluminum Handle",
    "price": "$29.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RodfTUYUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GV3GLG92?tag=rvgearlab-20",
    "description": "The cckk 9000R is listed with a 3.3 inch CPM-MagnaCut steel blade and an anodized aluminum handle with a clip. The listing describes it as a sharp folding EDC knife for camping and hiking.\n\nIt names the highest-tier steel of the six, and it costs about the same as the CIVIVI. It has less handle detail than the G10 knives.\n\nIt suits campers who want a premium steel on paper. The aluminum handle is light.",
    "specs": [
      "3.3 inch CPM-MagnaCut steel",
      "Anodized aluminum handle",
      "Pocket clip"
    ],
    "pros": [
      "Names a premium CPM-MagnaCut steel",
      "Anodized aluminum handle is light",
      "Pocket clip included",
      "Larger 3.3 inch blade"
    ],
    "cons": [
      "Little detail on locks or pivot",
      "Brand is unknown"
    ],
    "bestFor": "Steel-focused buyers",
    "take": "A premium steel named on the listing at a modest price. Check the lock before you rely on it.",
    "catch": "The listing gives few details on the lock or pivot."
  },
  {
    "id": "best-pocket-knife-under-100-6",
    "rank": 6,
    "badge": "Best Pocket Weight",
    "name": "Gerber Gear Paraframe Mini Pocket Knife",
    "price": "$15.79",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ty6OGPYFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B000KSCEH4?tag=rvgearlab-20",
    "description": "The Gerber Paraframe Mini has a 2.2 inch plain-edge stainless steel clip point blade with a nail nick, a pocket clip and a safety lock. It measures 5.25 inches overall and weighs 1.6 oz.\n\nIt is the smallest and lightest of the six and the cheapest. The clip point blade is fine for light cuts.\n\nIt suits campers who want a tiny knife that stays in a pocket all day. The weight is hard to notice.",
    "specs": [
      "2.2 inch clip point blade",
      "5.25 inches long, 1.6 oz",
      "Safety lock, pocket clip"
    ],
    "pros": [
      "Only 1.6 oz",
      "Safety lock for daily carry",
      "Nail nick opens easily",
      "Low price from a known brand"
    ],
    "cons": [
      "Blade is short at 2.2 inches",
      "Steel grade is not stated"
    ],
    "bestFor": "Light daily carry",
    "take": "A tiny, light knife for daily chores. Not a camp workhorse.",
    "catch": "At 2.2 inches the blade is small for camp tasks."
  }
];

export const howWeEvaluated = [
  {
    "title": "Steel",
    "description": "Compared the steels each listing names, such as D2, 14C28N and CPM-MagnaCut, and noted which say nothing."
  },
  {
    "title": "Lock and pivot",
    "description": "Looked at lock type and bearing or pivot details."
  },
  {
    "title": "Handle",
    "description": "Compared G10, nylon and aluminum handles for grip in wet weather."
  },
  {
    "title": "Blade length",
    "description": "Noted blade length against camp tasks and pocket size."
  },
  {
    "title": "Value",
    "description": "Weighed what each knife offers against its price well under $100."
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
    "subheading": "By Blade Length",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Light pocket carry, small tasks",
          "Gerber Paraframe Mini",
          "2.2 inches and 1.6 oz."
        ],
        [
          "Compact EDC and camp",
          "CIVIVI Mini Praxis",
          "2.98 inch D2 blade with a smooth pivot."
        ],
        [
          "Wet trips and rust risk",
          "VIRENKNIFE 14C28N",
          "Stainless 14C28N and a crossbar lock."
        ],
        [
          "Bigger camp cuts",
          "KLAKEN Virex",
          "3.54 inch D2 blade."
        ],
        [
          "Belt carry with a sheath",
          "Kershaw Appa",
          "Nylon sheath included."
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
          "Gerber Paraframe Mini or Kershaw Appa"
        ],
        [
          "$10 to $30",
          "VIRENKNIFE 14C28N or KLAKEN Virex"
        ],
        [
          "$20 to $30",
          "CIVIVI Mini Praxis or cckk 9000R"
        ]
      ]
    }
  },
  {
    "subheading": "Tanto Point vs Drop Point",
    "cards": [
      {
        "label": "Tanto point",
        "text": "A tanto point is strong for piercing and prying. The Kershaw Appa has a reverse tanto blade."
      },
      {
        "label": "Drop point",
        "text": "A drop point has a belly for slicing and food prep. The CIVIVI Mini Praxis, KLAKEN Virex and VIRENKNIFE 14C28N lean toward general-purpose shapes."
      }
    ],
    "note": "Most campers should pick a general-purpose blade like the CIVIVI Mini Praxis over a tanto."
  },
  {
    "subheading": "By Budget Tier",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $17",
          "Gerber Paraframe Mini"
        ],
        [
          "$17 to $23",
          "VIRENKNIFE 14C28N"
        ],
        [
          "$23 to $30",
          "KLAKEN Virex"
        ],
        [
          "Near $30, refined",
          "CIVIVI Mini Praxis"
        ]
      ]
    }
  },
  {
    "subheading": "For a Camp Kitchen Knife Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A blade of 3 inches or more, a locking handle and a grip that works wet"
      },
      {
        "label": "In this comparison",
        "text": "The KLAKEN Virex has a 3.54 inch D2 blade with a textured G10 grip, so it handles camp food prep best."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the CIVIVI Mini Praxis or KLAKEN Virex when you want D2 steel and a refined pivot."
      },
      {
        "label": "Save if",
        "text": "Save with the Gerber Paraframe Mini or Kershaw Appa for daily light work."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What $100 buys",
    "explanation": "Every knife here costs well under $100, and the extra money mostly buys brand and finish. At about $15 you get a basic folder, and at about $30 you get D2 or newer steel and a G10 handle. Compare steel and lock instead of price alone."
  },
  {
    "criterion": "Blade steel",
    "explanation": "D2 holds an edge well and resists rust moderately, while 14C28N resists rust better and sharpens easily. CPM-MagnaCut is a high-end stainless. Look for the named steel on the listing, and be wary of listings that say only stainless."
  },
  {
    "criterion": "Lock type",
    "explanation": "A liner lock, a crossbar lock or a lock-back holds the blade open under pressure. A knife without a stated lock is a risk. Look for the lock named on the listing."
  },
  {
    "criterion": "Handle material",
    "explanation": "G10 grips well wet or dry, nylon is cheaper and aluminum is light but slippery. For camp use, textured G10 is the safe choice. Look for the handle material on the listing."
  },
  {
    "criterion": "Blade length and laws",
    "explanation": "A blade over 3 inches handles more camp work but can run into local carry rules. Check your state or city limits before you buy. Look for the blade length in inches in the title."
  }
];

export const faq = [
  {
    "q": "Is a $100 pocket knife worth it for camping?",
    "a": "Not for most campers. The picks here cost far less and handle camp tasks well. Extra money buys better steel and finish."
  },
  {
    "q": "What is a common pocket knife mistake?",
    "a": "Buying on steel name alone. Heat treatment and the lock matter as much. Choose a knife with a stated lock."
  },
  {
    "q": "Is D2 steel better than 14C28N?",
    "a": "D2 holds an edge longer, and 14C28N resists rust better and sharpens easily. For wet trips, the VIRENKNIFE 14C28N suits. For edge life, the KLAKEN Virex suits."
  },
  {
    "q": "How do I open and close a liner-lock knife safely?",
    "a": "Open with the thumb stud or flipper until the lock clicks, test it, then keep fingers clear when you press the lock to close. Never close it with a finger in the blade path."
  },
  {
    "q": "How do I maintain a folding pocket knife?",
    "a": "Wipe it dry, add a drop of oil to the pivot, and sharpen with a stone or rod. Check the lock for wear. Store it dry."
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
