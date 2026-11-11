export const guideSlug = "best-beach-tents";
export const guideTitle = "5 Best Beach Tents in 2026";
export const metaTitle = "Best Beach Tents in 2026";
export const metaDescription = "Best beach tents compared on UPF rating, sandbag and stake anchoring, floor size and packed weight, for beachgoers who want reliable shade on open sand.";
export const mainKeyword = "best beach tents";
export const introParagraphs = [
  "A beach tent lives in wind, sand and strong sun, so anchoring and sun protection matter more than headline person counts. The tents below range from open canopy shelters to pop-up cabanas with a floor, and they anchor with sandbags, stakes or both.",
  "Five tents made this list after a comparison of listed UPF rating, anchoring hardware, frame diameter, floor extension and packed size. Capacity claims were read against actual dimensions, since a six person label rarely means six adults on towels."
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
    "id": "best-beach-tents-1",
    "rank": 1,
    "badge": "Best Wind Anchoring",
    "name": "Beach Tent Sun Shelter 10x10FT",
    "price": "$68.84",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51lHflALnBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G5N4XQRJ?tag=rvgearlab-amz-20",
    "description": "This 10 x 10 ft canopy uses a triangular windproof structure and ships with 8 sandbags, 4 aluminum poles, 8 sand stakes and 8 grass stakes. Its Lycra fabric with 12% spandex blocks 98% of harmful rays on the listing.\n\nIt lists the largest anchoring kit of the five, with eight sandbags and two kinds of stake. The Wolfwise 6P and WhiteFang list three sandbags each, and the SUN NINJA names stability poles and anchors without a count.\n\nIt suits a large group on an open, breezy beach that needs real shade for up to eight people and their chairs. One person can set it up, and a sand shovel comes in the box.",
    "specs": [
      "10 x 10 ft shaded area",
      "8 sandbags, 16 stakes",
      "98% UV block, UPF 50+"
    ],
    "pros": [
      "Eight sandbags plus two stake types",
      "Triangular structure aimed at wind",
      "Shades up to eight people",
      "Sand shovel and storage bag included"
    ],
    "cons": [
      "Open canopy has no floor or walls",
      "Pole assembly takes more steps"
    ],
    "bestFor": "Windy open-sand beach days",
    "take": "The heaviest-anchored shelter here, built for big groups on windy sand.",
    "catch": "No floor or side walls, so kids and sand blow right through."
  },
  {
    "id": "best-beach-tents-2",
    "rank": 2,
    "badge": "Best Size Range",
    "name": "SUN NINJA Beach Tent Sun Shelter",
    "price": "$128.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41i219FVJ6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B087CBLLWV?tag=rvgearlab-amz-20",
    "description": "The SUN NINJA beach tent is a pop-up sun shelter with UPF 50+ water-resistant fabric, stability poles, anchors and a travel bag. It comes in 4, 6 and 8 person sizes, including a 10 x 10 pop-up canopy format.\n\nIt is the pick with the widest size choice, so a couple and a big group can both buy it. Compared with the Sandbag 10x10 Shelter it leans on pop-up simplicity rather than a long anchor list.\n\nFamilies who want a pop-up ready in minutes can pick the size that fits their group. The anchors allow use on sand, grass or rocky ground.",
    "specs": [
      "UPF 50+ water-resistant fabric",
      "4, 6 or 8 person sizes",
      "Stability poles and anchors"
    ],
    "pros": [
      "Pop-up design sets up in minutes",
      "Sizes from couples to large groups",
      "Stability poles and ground pegs included",
      "Travel bag for carrying"
    ],
    "cons": [
      "Highest price in this list",
      "Check which size you are buying"
    ],
    "bestFor": "Choosing a size for any group",
    "take": "A flexible pop-up that scales from a couple to a gathering.",
    "catch": "It costs well above the other tents, and the size is chosen at purchase."
  },
  {
    "id": "best-beach-tents-3",
    "rank": 3,
    "badge": "Best Roomy Cabana",
    "name": "Wolfwise Beach Tent Sun Shelter Portable",
    "price": "$45.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YiE0iEJjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GMZSJLF5?tag=rvgearlab-amz-20",
    "description": "The Wolfwise six person cabana opens to 106.3 x 106.3 x 63 inches and fits four beach chairs. It uses thickened 8.5 mm fiberglass poles, 190T fabric with UPF 50+ and three adjustable mesh windows.\n\nIt rises to 63 inches and costs far less than the SUN NINJA, with a third of the sandbag count of the Sandbag 10x10 Shelter. The Gorich and WhiteFang list floor extensions, where this one focuses on interior volume.\n\nIt fits groups who want to sit in chairs under cover and need airflow on hot days. A large storage bag keeps the packed size manageable.",
    "specs": [
      "106.3 x 106.3 x 63 inches",
      "8.5 mm fiberglass poles",
      "UPF 50+, 3 mesh windows"
    ],
    "pros": [
      "Fits four beach chairs inside",
      "Thick 8.5 mm poles for stability",
      "Three adjustable mesh windows",
      "Mid-range price for its size"
    ],
    "cons": [
      "Only three sandbags in the box",
      "Fiberglass poles can flex in gusts"
    ],
    "bestFor": "Chairs and shade for groups",
    "take": "A tall cabana that keeps four chairs shaded.",
    "catch": "Three sandbags are light anchoring for a big shelter, so add stakes in wind."
  },
  {
    "id": "best-beach-tents-4",
    "rank": 4,
    "badge": "Best Packed Size",
    "name": "Gorich Beach Tent Sun Shelter for 3/4/6/8/10 Person with UPF 50＋ UV Protection",
    "price": "$33.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31I4ljXsPgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BNQDD2ZN?tag=rvgearlab-amz-20",
    "description": "The Gorich tent is 86.6 x 59 x 48 inches inside and folds to a 17 x 4 x 4 inch bundle at 3.9 lb. It uses silver-coated fabric, 8 mm fiberglass poles, three large mesh windows and a floor that extends 40 inches.\n\nIt is the only tent here with a stated weight and packed size, which the Wolfwise 6P does not give. The WhiteFang matches it on price, with a similar floor and a different zipper layout.\n\nIt suits couples or small families who walk to the beach and want a light, compact shelter. Four-sided ventilation helps keep heat down.",
    "specs": [
      "3.9 lb, folds to 17 inches",
      "Silver-coated UPF 50+ fabric",
      "Floor extends 40 inches"
    ],
    "pros": [
      "Weighs 3.9 lb with a small pack",
      "Extended floor gives lounging space",
      "Three big mesh windows for airflow",
      "Low price for a 3 to 4 person size"
    ],
    "cons": [
      "Smaller footprint for chairs",
      "Fewer anchoring accessories listed"
    ],
    "bestFor": "Walk-in beach trips",
    "take": "A light, compact cabana with an extended floor.",
    "catch": "Sandbag and stake counts are not listed, so bring your own extras."
  },
  {
    "id": "best-beach-tents-5",
    "rank": 5,
    "badge": "Best Floor Zipper Design",
    "name": "WhiteFang Beach Tent Anti-UV Portable Sun Shade Shelter for 3 Person",
    "price": "$30.26",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41XRfvOQF3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08SJGS7M7?tag=rvgearlab-amz-20",
    "description": "The WhiteFang is a three person beach tent with 8 mm thickened fiberglass rods and 190T coated polyester that blocks 98% of UV. It includes three sandbags, eight steel stakes and sand stakes, plus three large mesh windows.\n\nIts omni-directional zipper opens the floor mat from inside, outside or both sides, a detail the Gorich does not list. It sits at nearly the same price as the Gorich and has a clear anchoring list.\n\nIt fits one or two adults with kids who want a privacy door and a floor panel they can open for sand play. Anchors are included in the box.",
    "specs": [
      "8 mm fiberglass rods",
      "3 sandbags, steel and sand stakes",
      "Omni-directional floor zipper"
    ],
    "pros": [
      "Anchoring hardware listed in detail",
      "Floor mat opens from several sides",
      "Large mesh windows for airflow",
      "Lowest price in the list"
    ],
    "cons": [
      "Three-person size is on the small side",
      "Weight is not stated in the listing"
    ],
    "bestFor": "Small families on a budget",
    "take": "The cheapest option, with a clear anchor list and a flexible floor.",
    "catch": "A three person size gets tight with chairs and coolers."
  }
];

export const howWeEvaluated = [
  {
    "title": "UPF and UV block",
    "description": "UPF 50+ and the percent of UV blocked on each listing were compared, since coatings differ."
  },
  {
    "title": "Anchoring hardware",
    "description": "Sandbag and stake counts were compared because wind is the main cause of failure."
  },
  {
    "title": "Floor and walls",
    "description": "Whether the tent has a floor, side walls or none was weighed for kids, sand and privacy."
  },
  {
    "title": "Pole thickness",
    "description": "Fiberglass rod diameter and aluminum use were compared for stability."
  },
  {
    "title": "Packed size and weight",
    "description": "Carry size was compared for beach walks, since dune distances add up."
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
    "subheading": "By Group Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Two adults on towels",
          "Gorich Cabana",
          "3.9 lb with an extended floor."
        ],
        [
          "Small family with kids",
          "WhiteFang Cabana",
          "Floor opens from several sides and has a clear anchor list."
        ],
        [
          "Four people in chairs",
          "Wolfwise 6P",
          "Fits four beach chairs at 63 inches tall."
        ],
        [
          "Large group of up to eight",
          "Sandbag 10x10 Shelter",
          "10 x 10 ft shade with eight sandbags."
        ],
        [
          "Mixed groups",
          "SUN NINJA Cabana",
          "Sold in 4, 6 and 8 person sizes."
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
          "$30 to $40",
          "WhiteFang Cabana or Gorich Cabana"
        ],
        [
          "$40 to $70",
          "Wolfwise 6P or Sandbag 10x10 Shelter"
        ],
        [
          "$120 to $130",
          "SUN NINJA Cabana"
        ]
      ]
    }
  },
  {
    "subheading": "Open Canopy vs Closed Cabana",
    "cards": [
      {
        "label": "Open canopy",
        "text": "The Sandbag 10x10 Shelter and SUN NINJA Cabana open on several sides, which gives airflow and room for chairs but no protection from blowing sand."
      },
      {
        "label": "Closed cabana",
        "text": "The Gorich Cabana, WhiteFang Cabana and Wolfwise 6P have a back wall and floor panels, which block sand and wind at the cost of airflow."
      }
    ],
    "note": "Pick an open canopy such as the Sandbag 10x10 Shelter for large groups, and a closed cabana for families with small children."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest spend",
          "WhiteFang Cabana"
        ],
        [
          "Light and compact",
          "Gorich Cabana"
        ],
        [
          "Mid spend, headroom",
          "Wolfwise 6P"
        ],
        [
          "Large canopy",
          "Sandbag 10x10 Shelter"
        ],
        [
          "Most flexible sizes",
          "SUN NINJA Cabana"
        ]
      ]
    }
  },
  {
    "subheading": "For Windy Beaches Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A high sandbag count, both sand and grass stakes and poles of 8 mm or more."
      },
      {
        "label": "In this comparison",
        "text": "The Sandbag 10x10 Shelter lists 8 sandbags and 16 stakes, and the Wolfwise 6P lists 8.5 mm poles."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the SUN NINJA Cabana if you want a choice of sizes, or the Sandbag 10x10 Shelter for the strongest anchoring."
      },
      {
        "label": "Save if",
        "text": "Save with the WhiteFang Cabana or Gorich Cabana if you are a small group walking to the beach."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "UPF rating and coating",
    "explanation": "UPF 50+ means the fabric lets through about 2 percent or less of UV radiation, and many listings pair it with a silver coating. A tent without a stated rating gives no assurance, however dark the color. Look for UPF 50+ in the title or bullets and for a percent-blocked figure."
  },
  {
    "criterion": "Anchoring for sand",
    "explanation": "Sand holds stakes poorly and wind lifts a tent like a sail. Sandbags filled at the beach and sand stakes work together better than either alone. Count the bags and stakes in the box, and carry extra bags if you shelter in strong wind."
  },
  {
    "criterion": "Open canopy vs closed cabana",
    "explanation": "A canopy gives airflow and more shade area, and a cabana gives wind and sand protection plus a changing space. Open canopies cannot block blowing sand, while cabanas can trap heat if vents are closed. Match the style to your priority and check mesh windows."
  },
  {
    "criterion": "Realistic capacity",
    "explanation": "A person count on a beach tent assumes people sit upright or squeeze together. Four beach chairs need roughly 100 inches of width, so a 86 inch tent suits three on towels. Check the dimensions and compare them with your chairs and cooler."
  },
  {
    "criterion": "Pole type and wind",
    "explanation": "Thick fiberglass poles of 8 mm or more flex without snapping, and thin ones break in gusts. No beach tent is safe in storm wind. Look for pole diameter in the listing and take the tent down in high wind."
  },
  {
    "criterion": "Packed size and weight",
    "explanation": "Beach walks can cross a long stretch of soft sand, and a heavy bag becomes tiring. Compact designs fold to a small bundle. Check the packed size and weight in the listing and compare it with your car space."
  }
];

export const faq = [
  {
    "q": "Do I need sandbags for a beach tent?",
    "a": "Yes, on sand. Stakes alone pull out of dry sand, so fill the bags and bury them. The Sandbag 10x10 Shelter ships with eight."
  },
  {
    "q": "What is the most common mistake?",
    "a": "Facing the open side into the wind, which turns the tent into a sail. Face the back to the wind and add anchors on the windward side. Take the tent down in storms."
  },
  {
    "q": "Is the SUN NINJA worth its price over the Wolfwise 6P?",
    "a": "Choose the SUN NINJA for its size range and pop-up design. The Wolfwise 6P gives more headroom and chair space for much less. Most families do fine with the cheaper tent."
  },
  {
    "q": "How do I set up a beach tent on sand?",
    "a": "Unfold the frame, thread the poles, stake the corners at an angle and bury filled sandbags on the windward side. Zip the windows open for airflow. Practice once at home."
  },
  {
    "q": "How do I clean a beach tent?",
    "a": "Shake out sand, rinse with fresh water and dry fully before packing. Salt and sand wear fabric and zippers over time. Store in the bag in a dry place."
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
