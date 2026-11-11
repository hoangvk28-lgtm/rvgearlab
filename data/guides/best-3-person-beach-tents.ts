export const guideSlug = "best-3-person-beach-tents";
export const guideTitle = "6 Best 3 Person Beach Tents in 2026";
export const metaTitle = "Best 3 Person Beach Tents in 2026";
export const metaDescription = "Best 3 person beach tents compared on interior size, UPF protection, anchoring and packed weight for small families and friend groups.";
export const mainKeyword = "best 3 person beach tents";
export const introParagraphs = [
  "Three people and a cooler is a tight fit in most beach shelters, so interior length and height matter more than the headline capacity. Anchoring matters just as much, because a light pop-up shade acts like a sail in sea breeze.",
  "Six beach tents sold for three people were compared on listed interior size, UV rating, weight, sand anchors and ventilation. All of them are shade shelters rather than rain tents, so none is a substitute for a camping tent."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-lakeside-campsite.webp";
export const heroImageAlt = "Colorful tents pitched beside a misty mountain lake";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-3-person-beach-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Wolfwise Pop Up Beach Tent",
    "price": "$42.73",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41aPqSBnWoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B06XWRLDML?tag=rvgearlab-amz-20",
    "description": "The Wolfwise is a pop-up beach tent for three, measuring 86 by 57 by 47 inches and weighing 4.2 pounds. It uses 190T anti-tear polyester with a silver coating rated UPF 50+ and a reinforced fiberglass pole frame.\n\nOnly it and the Glymnis are true pop-ups, so it opens and folds in seconds with no assembly. Pole-frame tents like the Abahub list larger anchor kits.\n\nIt suits families who want shade up quickly after a long carry from the car. Mesh windows on several sides give 360 degree ventilation, and two pockets under each window keep small items off the sand.",
    "specs": [
      "86 x 57 x 47 in, 4.2 lb",
      "190T polyester, UPF 50+",
      "360 degree mesh ventilation"
    ],
    "pros": [
      "Pops up and folds down in seconds",
      "Mesh windows on all sides",
      "Two pockets under each window",
      "Taped seams on water-repellent fabric"
    ],
    "cons": [
      "Highest price of the six",
      "Pop-up frames catch wind without anchors"
    ],
    "bestFor": "Quick family shade",
    "take": "A true pop-up for three that is up as soon as you unzip the bag.",
    "catch": "Light fabric lifts in gusts, so fill all the sand pockets."
  },
  {
    "id": "best-3-person-beach-tents-2",
    "rank": 2,
    "badge": "Best Lightweight Carry",
    "name": "Gorich Beach Tent Sun Shelter for 3/4/6/8/10 Person with UPF 50＋ UV Protection",
    "price": "$33.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31I4ljXsPgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BNQDD2ZN?tag=rvgearlab-amz-20",
    "description": "The Gorich fits three to four people in an 86.6 by 59 by 48 inch space, and folds to 17 by 4 by 4 inches at 3.9 pounds. It has 8mm imported fiberglass poles, silver-coated fabric, three mesh windows and 40 more inches of floor at the front.\n\nIt weighs less than the Wolfwise and folds into a slimmer bundle than the Glymnis disc. Compared with the Abahub it is a little wider, and its extended floor adds 40 inches of sand-free lounging.\n\nIt suits families who carry everything in one trip and need a long floor for kids. The curtains close for changing.",
    "specs": [
      "3.9 lb, 17 x 4 x 4 in fold",
      "8mm fiberglass poles",
      "40 inch floor extension"
    ],
    "pros": [
      "Lightest listed weight at 3.9 lb",
      "Folds small for carrying",
      "Extended floor for lounging",
      "Curtains close for privacy"
    ],
    "cons": [
      "Listing mixes sizes from 3 to 10 person",
      "Poles need assembling each time"
    ],
    "bestFor": "Light, easy carry",
    "take": "The lightest of the group, with a floor extension for kids.",
    "catch": "Check you pick the 3-4 person size from the listing's size menu."
  },
  {
    "id": "best-3-person-beach-tents-3",
    "rank": 3,
    "badge": "Best Sandbag Setup",
    "name": "Abahub 3-Person Beach Tent Sun Shelter with UPF 50+ UV Protection",
    "price": "$37.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41cv6v20GxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GLPGBRDY?tag=rvgearlab-amz-20",
    "description": "The Abahub is a 3-person tent measuring 82.7 by 55.9 by 45.7 inches, with a floor extension that adds 52 inches of usable space. It has two doors, two mesh windows, 8mm fiberglass poles, four sandbags, four steel stakes and eight plastic stakes.\n\nIt carries a bigger anchor kit than the Gorich and a floor extension longer than the Gorich's 40 inches. Against the Wolfwise it takes a few minutes to pitch.\n\nIt suits windy shoreline days where you want more anchor points than a simple pop-up offers. The wide floor extension gives extra room for towels.",
    "specs": [
      "82.7 x 55.9 x 45.7 in",
      "Extended floor adds 52 in",
      "4 sandbags, 12 stakes"
    ],
    "pros": [
      "Long 52 inch floor extension",
      "Big anchor kit of sandbags and stakes",
      "Two doors and two windows",
      "8mm fiberglass poles"
    ],
    "cons": [
      "Slower to set up than a pop-up",
      "Interior is smaller than the Wolfwise and Gorich"
    ],
    "bestFor": "Windy beach days",
    "take": "A well-anchored three-person shelter with a long floor for towels.",
    "catch": "More parts means a few extra minutes to pitch and pack."
  },
  {
    "id": "best-3-person-beach-tents-4",
    "rank": 4,
    "badge": "Best Floor Zipper Design",
    "name": "WhiteFang Beach Tent Anti-UV Portable Sun Shade Shelter for 3 Person",
    "price": "$30.26",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41XRfvOQF3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08SJGS7M7?tag=rvgearlab-amz-20",
    "description": "The WhiteFang is a 3-person tent with 8.0mm thickened fiberglass rods and 190T sun-proof coated polyester that blocks 98 percent of UV. It includes three sandbags, eight steel stakes and six sand stakes, plus three large mesh windows.\n\nIt lists three sandbags plus steel stakes and sand stakes for loose beach sand. Its omni-directional floor zipper opens the mat from inside, outside or both sides.\n\nIt suits groups that move in and out of the tent often and want the floor opened from either side. The thick rods keep their shape in a breeze.",
    "specs": [
      "8.0mm fiberglass rods",
      "UPF 50+, 98% UV block",
      "3 sandbags, 14 stakes"
    ],
    "pros": [
      "Floor zippers open from both sides",
      "Thick 8.0mm fiberglass rods",
      "Mix of steel and sand stakes",
      "Three large mesh windows"
    ],
    "cons": [
      "Interior size is not in the listing summary",
      "Needs pole assembly"
    ],
    "bestFor": "Frequent in-and-out use",
    "take": "A sturdy, well-staked tent with a floor zipper you can reach from anywhere.",
    "catch": "Without a stated weight, check the shipping weight before a long beach walk."
  },
  {
    "id": "best-3-person-beach-tents-5",
    "rank": 5,
    "badge": "Best Pop-Up Choice for Four",
    "name": "Glymnis Pop Up Beach Tent for 3-4 Person",
    "price": "$39.94",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VNnqlxoNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CNT63FYB?tag=rvgearlab-amz-20",
    "description": "The Glymnis Pop Up Beach Tent comes in a small size for one or two and a large for three or four, opening at 86.6 by 74.8 by 53.1 inches. It uses silver-coated 190T polyester rated UPF 50+, 7 by 2mm poles, four guy ropes and ten pegs.\n\nIt is the widest tent here at 74.8 inches, so it suits three adults who want elbow room. Compared with the Wolfwise it takes a larger 24 inch folded circle in exchange for that width.\n\nIt suits groups of three or four who want pop-up convenience and extra width. A big mesh window lets the breeze through.",
    "specs": [
      "86.6 x 74.8 x 53.1 in",
      "190T silver-coated, UPF 50+",
      "4 guy ropes, 10 pegs"
    ],
    "pros": [
      "Widest interior of the group",
      "Pop-up opens quickly",
      "Four guy ropes and ten pegs",
      "Big mesh window for airflow"
    ],
    "cons": [
      "Folds to a 24 inch round disc",
      "Pick the large size for three"
    ],
    "bestFor": "Wider three-adult space",
    "take": "The roomiest pop-up here, if you pick the large size.",
    "catch": "The 24 inch folded circle is bulky to carry on foot."
  },
  {
    "id": "best-3-person-beach-tents-6",
    "rank": 6,
    "badge": "Best Budget Pick",
    "name": "Beach Tent",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41b5s+kFDdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DPMMS8P4?tag=rvgearlab-amz-20",
    "description": "The Etto beach tent lists dimensions of 98 by 59 by 63 inches, with an 8.0mm imported fiberglass frame in a cross design and silver-coated fabric. It blocks up to 98 percent of UV, comes in four sizes and sets up in three steps.\n\nIt stands taller at 63 inches than any other tent here, so adults can sit up and change comfortably. No tent here is priced lower.\n\nIt suits budget buyers who want a roomy, tall shelter. The cross frame adds stability in light wind.",
    "specs": [
      "98 x 59 x 63 in",
      "UPF 50+, 98% UV",
      "8.0mm fiberglass cross frame"
    ],
    "pros": [
      "Tallest tent at 63 inches",
      "Lowest price in the group",
      "Three-step setup",
      "Silver coating for UV protection"
    ],
    "cons": [
      "Sold in four sizes, so pick carefully",
      "Anchor kit is not detailed"
    ],
    "bestFor": "Tall, low-cost shade",
    "take": "The tallest and cheapest of the six for sitting upright.",
    "catch": "Check the size menu, since the listing covers 2, 3, 4 and 6 to 8 person tents."
  }
];

export const howWeEvaluated = [
  {
    "title": "Interior size",
    "description": "Listed length, width and height."
  },
  {
    "title": "UV rating",
    "description": "UPF numbers and UV block claims."
  },
  {
    "title": "Anchoring",
    "description": "Sandbags, stakes and guy lines."
  },
  {
    "title": "Weight and fold",
    "description": "Listed weight and packed dimensions."
  },
  {
    "title": "Ventilation",
    "description": "Mesh windows and door options."
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
    "subheading": "By Group Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Quick pop-up shade",
          "Wolfwise 3-Person Pop-Up",
          "Opens in seconds."
        ],
        [
          "Lightest carry",
          "Gorich 3-4 Person Beach Tent",
          "3.9 lb and 17 x 4 x 4 in fold."
        ],
        [
          "Windy beach",
          "Abahub 3-Person Beach Tent",
          "Sandbags and 12 stakes."
        ],
        [
          "Entry from both sides",
          "WhiteFang 3-Person Beach Tent",
          "Omni-directional floor zipper."
        ],
        [
          "Extra width",
          "Glymnis 3-4 Person Pop-Up",
          "74.8 inches wide."
        ],
        [
          "Tall and cheap",
          "Etto Beach Tent",
          "63 inches tall."
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
          "$20 to $40",
          "Etto Beach Tent or WhiteFang 3-Person Beach Tent"
        ],
        [
          "$30 to $40",
          "Gorich 3-4 Person Beach Tent or Abahub 3-Person Beach Tent"
        ],
        [
          "$30 to $50",
          "Glymnis 3-4 Person Pop-Up or Wolfwise 3-Person Pop-Up"
        ]
      ]
    }
  },
  {
    "subheading": "Pop-Up vs Pole Frame",
    "cards": [
      {
        "label": "Pop-up",
        "text": "Opens instantly but folds into a wide disc. The Wolfwise 3-Person Pop-Up and Glymnis 3-4 Person Pop-Up use this style."
      },
      {
        "label": "Pole frame",
        "text": "Takes minutes but packs into a slim tube. The Gorich 3-4 Person Beach Tent, Abahub 3-Person Beach Tent, WhiteFang 3-Person Beach Tent and Etto Beach Tent use poles."
      }
    ],
    "note": "For short carries choose the Wolfwise 3-Person Pop-Up, and for long carries the Gorich 3-4 Person Beach Tent."
  },
  {
    "subheading": "By Anchor Kit",
    "table": {
      "headers": [
        "Kit",
        "Recommended pick"
      ],
      "rows": [
        [
          "3 sandbags, 14 stakes",
          "WhiteFang 3-Person Beach Tent"
        ],
        [
          "4 sandbags, 12 stakes",
          "Abahub 3-Person Beach Tent"
        ],
        [
          "4 guy ropes, 10 pegs",
          "Glymnis 3-4 Person Pop-Up"
        ],
        [
          "Corner sand pockets",
          "Wolfwise 3-Person Pop-Up"
        ]
      ]
    }
  },
  {
    "subheading": "For Windy Beaches",
    "cards": [
      {
        "label": "Look for",
        "text": "Sandbags plus stakes and guy ropes."
      },
      {
        "label": "In this comparison",
        "text": "The Abahub 3-Person Beach Tent and WhiteFang 3-Person Beach Tent have the biggest anchor kits."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Wolfwise 3-Person Pop-Up for the fastest setup."
      },
      {
        "label": "Save if",
        "text": "Save with the Etto Beach Tent for height, or the WhiteFang 3-Person Beach Tent for the stake kit."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Real interior size",
    "explanation": "A tent labelled 3 person often counts people lying shoulder to shoulder with no gear. For sitting and changing, height matters more. Look for numbers near 86 by 57 inches and a height over 45 inches."
  },
  {
    "criterion": "UPF rating and shade",
    "explanation": "UPF 50+ means fabric blocks about 98 percent of UV rays passing through. It does not replace sunscreen, since reflected light still reaches you. Look for the UPF figure and a silver coating."
  },
  {
    "criterion": "Wind and anchoring",
    "explanation": "A beach tent is a big sail in light fabric. Sandbags, sand stakes and guy ropes hold it down, and a staked tent should never be left unattended. Count the anchors in the listing."
  },
  {
    "criterion": "Weight and packed size",
    "explanation": "A beach walk with a cooler leaves little room for a heavy tent. Listing weights run from 3.9 to 4.2 pounds in this group. Check weight and folded size together."
  },
  {
    "criterion": "Ventilation",
    "explanation": "Closed shade tents get hot quickly. Mesh windows on several sides move air. Look for at least two mesh panels."
  }
];

export const faq = [
  {
    "q": "Do three people really fit?",
    "a": "Yes for sitting, less so for lying with gear. The Glymnis 3-4 Person Pop-Up gives the widest interior."
  },
  {
    "q": "What is a common mistake?",
    "a": "Skipping the anchors. A light tent can lift off in a gust, so always use sandbags and stakes."
  },
  {
    "q": "Is a pop-up worth it over a pole tent?",
    "a": "Pop-ups pitch faster, but they fold into a wide disc. The Gorich packs smaller."
  },
  {
    "q": "How do I set one up?",
    "a": "Face the opening away from the wind and stake the corners. Fill the sandbags, then pull the guy lines tight."
  },
  {
    "q": "How do I clean a beach tent?",
    "a": "Rinse off salt and sand, then dry it fully. Store it loose to avoid mildew."
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
