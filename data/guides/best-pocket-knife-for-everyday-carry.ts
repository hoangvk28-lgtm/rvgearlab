export const guideSlug = "best-pocket-knife-for-everyday-carry";
export const guideTitle = "6 Best Pocket Knife For Everyday Carry in 2026";
export const metaTitle = "Best Pocket Knife For Everyday Carry in 2026";
export const metaDescription = "Best pocket knives for everyday carry: six folders and slipjoints that ride well in a pocket, from a three-blade Buck to an assisted Kershaw.";
export const mainKeyword = "best pocket knife for everyday carry";
export const introParagraphs = [
  "An everyday carry knife earns its spot by being light, easy to open one-handed and comfortable at a desk, a workshop or a campsite. The best ones are knives you forget you have until you need them.",
  "The six picks run from a slipjoint three-blade to an assisted flipper and a glass-breaker pocket knife. They are ordered by how well each carries day to day, with blade steel and lock type as tiebreakers."
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
    "id": "best-pocket-knife-for-everyday-carry-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Kershaw Clash Pocket Knife",
    "price": "$28.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OtDtwyyyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0057R8SSM?tag=rvgearlab-20",
    "description": "The Kershaw Clash has a drop-point, partially serrated 8Cr13MoV blade and a glass-filled nylon handle with deep finger contours. SpeedSafe assisted opening and a built-in flipper deploy it fast, and a liner lock holds it open.\n\nIt is the quickest to open of the six and costs more than the Gerber Zilch. The partial serrations add rope-cutting ability that plain edges lack.\n\nIt suits campers and tradespeople who open a knife many times a day. Check local rules on assisted openers before carrying.",
    "specs": [
      "8Cr13MoV drop point, part serrated",
      "SpeedSafe assisted opening",
      "Glass-filled nylon handle, liner lock"
    ],
    "pros": [
      "Assisted opening with a flipper",
      "Partial serrations cut rope and straps",
      "Deep finger indentation grip",
      "Liner lock holds it open"
    ],
    "cons": [
      "Assisted opening has legal limits in some places",
      "Serrations are harder to sharpen"
    ],
    "bestFor": "Daily tasks and fast opening",
    "take": "The most capable all-round carry knife here. Check local assisted-opening rules.",
    "catch": "Assisted openers are restricted in some places."
  },
  {
    "id": "best-pocket-knife-for-everyday-carry-2",
    "rank": 2,
    "badge": "Best Plain-Edge Carry",
    "name": "Gerber Zilch EDC Folding Pocket Knife",
    "price": "$26.07",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41l910e2KiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09H3HKZ9J?tag=rvgearlab-20",
    "description": "The Gerber Zilch has a 3.1 inch plain-edge blade, an exposed barrel construction and a textured handle with two carrying options. The listing says it offers several ways to deploy.\n\nIt uses a plain edge instead of the Clash's serrations, which makes food prep and sharpening simpler. It costs a little less than the Clash.\n\nIt suits campers and office workers who want a plain, easy-to-sharpen blade. The two carry options suit pocket or bag.",
    "specs": [
      "3.1 inch plain-edge blade",
      "Exposed barrel construction",
      "Two carrying options"
    ],
    "pros": [
      "Plain edge is simple to sharpen",
      "Textured handle grips well",
      "Two carry options",
      "Several deployment options"
    ],
    "cons": [
      "Steel grade is not stated",
      "Style is not for everyone"
    ],
    "bestFor": "Plain-edge fans",
    "take": "A plain, stylish carry knife. Good for food prep and boxes.",
    "catch": "The listing gives no steel grade."
  },
  {
    "id": "best-pocket-knife-for-everyday-carry-3",
    "rank": 3,
    "badge": "Best Slipjoint Classic",
    "name": "Buck Knives 373 Trio 3-Blade Folding Pocket Knife",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/3158y-QVv1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B000EHV1AM?tag=rvgearlab-20",
    "description": "The Buck 373 Trio has three blades of 420J2 steel: a 2-1/2 inch modified clip point and two smaller ones. It weighs 1.9 oz, measures 3-1/4 inches closed and has a woodgrain handle with nickel silver bolsters.\n\nIt is the only slipjoint and the only multi-blade knife here, and it carries three blades. The three blades cover detail work and general cutting.\n\nIt suits campers who like classic style and a light pocket. Slipjoints pass rules that limit locking knives in some places.",
    "specs": [
      "Three 420J2 blades, 1.9 oz",
      "3-1/4 inches closed",
      "Woodgrain handle, nickel silver bolsters"
    ],
    "pros": [
      "Three blades for different jobs",
      "Only 1.9 oz",
      "Corrosion-resistant 420J2 steel",
      "Classic slipjoint style"
    ],
    "cons": [
      "No lock, so keep your fingers clear",
      "Small blades for big tasks"
    ],
    "bestFor": "Light carry and classic style",
    "take": "A slim classic with three blades. Light and polite in the pocket.",
    "catch": "A slipjoint has no lock, so use care under pressure."
  },
  {
    "id": "best-pocket-knife-for-everyday-carry-4",
    "rank": 4,
    "badge": "Best Budget Wood Handle",
    "name": "KEXMO Pocket Knife for Men",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RgcJFpM7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09KBDSG7Z?tag=rvgearlab-20",
    "description": "The KEXMO has a black 3Cr13 steel blade, a finger flipper, an ambidextrous thumb stud and a liner lock. A rosewood handle with finger indentions and a reversible clip complete it.\n\nIt costs about half the Kershaw Clash, and it uses two opening options. It states a more basic steel than the Clash.\n\nIt suits campers who want a wood-handle folder at a low price. The reversible clip fits either pocket.",
    "specs": [
      "3Cr13 steel blade",
      "Flipper and ambidextrous thumb stud",
      "Rosewood handle, reversible clip"
    ],
    "pros": [
      "Wood handle looks good and feels warm",
      "Flipper and thumb stud both open it",
      "Liner lock holds the blade",
      "Reversible clip"
    ],
    "cons": [
      "3Cr13 steel is entry level",
      "Wood needs care when wet"
    ],
    "bestFor": "Budget carry with a wood handle",
    "take": "A handsome budget knife with a flipper. Keep the wood dry.",
    "catch": "Wood handles need care in wet camp conditions."
  },
  {
    "id": "best-pocket-knife-for-everyday-carry-5",
    "rank": 5,
    "badge": "Best Long-Blade Budget",
    "name": "Steinbrucke Tactical Knife Pocket Knife Folding Stainless Steel 8Cr13Mov 3.4'' Blade",
    "price": "$13.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51u7p+6hO2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07J6N8FZ9?tag=rvgearlab-20",
    "description": "The Steinbrucke has a 3.4 inch 8Cr13Mov stainless blade hardened to 58 to 59 HRC with an antique finish and a reversible pocket clip. The listing calls it an EDC, camping and hunting knife.\n\nIt states a hardness figure, which most budget knives skip, and it costs less than the Clash. It lacks the assisted opening of the Clash.\n\nIt suits campers who want a long blade at a low price. The reversible clip suits left- and right-handed users.",
    "specs": [
      "3.4 inch 8Cr13Mov, 58-59 HRC",
      "Antique finish blade",
      "Reversible pocket clip"
    ],
    "pros": [
      "Hardness figure is stated",
      "3.4 inch blade for bigger tasks",
      "Reversible clip for either hand",
      "Low price"
    ],
    "cons": [
      "Brand is unknown",
      "Lock and pivot details are thin"
    ],
    "bestFor": "Budget carry with a longer blade",
    "take": "A long, stated-hardness blade at a low price. Check the lock.",
    "catch": "The listing gives few details on the lock."
  },
  {
    "id": "best-pocket-knife-for-everyday-carry-6",
    "rank": 6,
    "badge": "Best Glass Breaker",
    "name": "BRILLIRARE Pocket Knife",
    "price": "$5.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31RN8y0b+SL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BRZNJFWM?tag=rvgearlab-20",
    "description": "The BRILLIRARE has a 2.6 inch AUS10 stainless blade with a stated hardness of 60 to 62 HRC, a liner lock and a glass breaker. A premium aluminum handle and a pocket clip complete it.\n\nIt is the cheapest knife here and the only one with a glass breaker. It carries a named Japanese steel at that price.\n\nIt suits drivers and campers who want a backup in a vehicle. The glass breaker adds emergency value.",
    "specs": [
      "2.6 inch AUS10 blade, 60-62 HRC",
      "Liner lock, glass breaker",
      "Aluminum handle, pocket clip"
    ],
    "pros": [
      "Lowest price in the group",
      "Named AUS10 steel",
      "Glass breaker for emergencies",
      "Liner lock holds the blade"
    ],
    "cons": [
      "Brand is unknown",
      "Aluminum handle can be slick when wet"
    ],
    "bestFor": "Vehicle backup knife",
    "take": "The cheapest knife with a named steel and a glass breaker. Good for the glove box.",
    "catch": "The aluminum handle can feel slick when wet."
  }
];

export const howWeEvaluated = [
  {
    "title": "Opening and lock",
    "description": "Compared assisted, flipper and thumb-stud opening and the lock type on each knife."
  },
  {
    "title": "Blade",
    "description": "Looked at blade length, edge style and steel where stated."
  },
  {
    "title": "Pocket carry",
    "description": "Compared weight, closed length and clip design."
  },
  {
    "title": "Handle",
    "description": "Noted nylon, wood and aluminum handles and their grip."
  },
  {
    "title": "Value",
    "description": "Weighed price against the features each listing names."
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
    "subheading": "By Daily Task",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Fast opening, many times a day",
          "Kershaw Clash",
          "Assisted opening and a flipper."
        ],
        [
          "Food prep and boxes",
          "Gerber Zilch",
          "Plain edge sharpens easily."
        ],
        [
          "Light pocket, classic style",
          "Buck 373 Trio",
          "1.9 oz with three blades."
        ],
        [
          "Longer blade at a low price",
          "Steinbrucke 3.4in",
          "3.4 inches at a low cost."
        ],
        [
          "Vehicle backup",
          "BRILLIRARE 2.6in",
          "Glass breaker and a low price."
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
          "BRILLIRARE 2.6in or Steinbrucke 3.4in"
        ],
        [
          "$10 to $30",
          "KEXMO Wood Handle or Gerber Zilch"
        ],
        [
          "$20 to $30",
          "Buck 373 Trio or Kershaw Clash"
        ]
      ]
    }
  },
  {
    "subheading": "Locking Folder vs Slipjoint",
    "cards": [
      {
        "label": "Locking folder",
        "text": "A locking folder holds the blade open for heavy cuts. The Kershaw Clash, Gerber Zilch, KEXMO Wood Handle, Steinbrucke 3.4in and BRILLIRARE 2.6in lock."
      },
      {
        "label": "Slipjoint",
        "text": "A slipjoint has no lock and is lighter and legal in more places. The Buck 373 Trio is the slipjoint here."
      }
    ],
    "note": "Most campers should carry a locking folder such as the Kershaw Clash, and choose the Buck 373 Trio where laws or style call for a slipjoint."
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
          "Under $10",
          "BRILLIRARE 2.6in"
        ],
        [
          "About $14, long blade",
          "Steinbrucke 3.4in"
        ],
        [
          "About $15, wood handle",
          "KEXMO Wood Handle"
        ],
        [
          "$26 to $29",
          "Kershaw Clash"
        ]
      ]
    }
  },
  {
    "subheading": "For Camping and Daily Use Together Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A locking blade, a grip that works wet and a clip that stays put"
      },
      {
        "label": "In this comparison",
        "text": "The Kershaw Clash has a liner lock, a textured nylon grip and a clip, so it does both jobs."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Kershaw Clash or Buck 373 Trio when you want a carry knife you reach for every day."
      },
      {
        "label": "Save if",
        "text": "Save with the BRILLIRARE 2.6in or Steinbrucke 3.4in for a backup or glove-box knife."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Pocket weight",
    "explanation": "A knife that feels heavy gets left at home. Under about 3 oz carries like a set of keys, and 1.9 oz is almost unnoticeable. Look for oz in the listing."
  },
  {
    "criterion": "Opening style",
    "explanation": "Assisted, flipper and thumb-stud openers each deploy fast, and slipjoints use a nail nick. One-hand opening matters when the other hand is busy. Look for the opening method on the listing."
  },
  {
    "criterion": "Edge type",
    "explanation": "A plain edge slices and sharpens easily, while a partly serrated edge saws rope and straps. Choose by the job. Look for plain or serrated in the title."
  },
  {
    "criterion": "Laws and carry",
    "explanation": "Assisted openers, locking blades and blade lengths are limited in some places. Check your local rules before you carry. Slipjoints and short blades pass in more places."
  },
  {
    "criterion": "Clip and handle",
    "explanation": "A good clip keeps the knife in place at the pocket seam. A textured handle grips when hands are wet. Look for clip type and handle material."
  }
];

export const faq = [
  {
    "q": "What blade length is best for everyday carry?",
    "a": "Most people do well with 2.5 to 3.5 inches. The Buck 373 Trio has a 2-1/2 inch main blade and the Steinbrucke 3.4in is the longest. Check local limits."
  },
  {
    "q": "What is a common EDC knife mistake?",
    "a": "Carrying a knife that is too big or heavy and leaving it behind. Choose by pocket comfort. A lighter knife gets used more."
  },
  {
    "q": "Is an assisted opener worth it?",
    "a": "An assisted opener like the Kershaw Clash is fast but is restricted in some places. A manual flipper such as the KEXMO Wood Handle is simpler. Check your local rules."
  },
  {
    "q": "How do I sharpen a pocket knife?",
    "a": "Hold the blade at about 20 degrees on a stone, push the edge across in even strokes and flip sides. A plain edge like the Gerber Zilch is easier. Strop to finish."
  },
  {
    "q": "How do I keep a wood handle in good shape?",
    "a": "Wipe it dry after use and rub on a little oil now and then. Avoid soaking it. The KEXMO Wood Handle and Buck 373 Trio both benefit."
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
