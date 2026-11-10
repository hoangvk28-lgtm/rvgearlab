export const guideSlug = "best-cabin-tents";
export const guideTitle = "3 Best Cabin Tents in 2026";
export const metaTitle = "Best Cabin Tents in 2026";
export const metaDescription = "Best cabin tents for car camping: three instant and pop-up cabins compared on wall shape, standing height, pitch time and packed length.";
export const mainKeyword = "best cabin tents";
export const introParagraphs = [
  "A cabin tent trades the curved dome roof for near-vertical walls, and that one shape change is why you can stand at the bed, set up a cot or change clothes without crouching. This guide looks at what separates one cabin from another once the walls are straight.",
  "Three instant cabins made the list because each one lists a real standing height, a pitch time and a packed size. Pole-by-pole cabins from big-name brands sit in the sibling guides by size, so this page stays on grab-and-go models."
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
    "id": "best-cabin-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "FanttikOutdoor Alpha C6 Pro Camping Tent 6 Person Pop Up Instant Cabin Setup in 60 Seconds",
    "price": "$279.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41IMjqIeXwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7J25N49?tag=rvgearlab-amz-20",
    "description": "The Alpha C6 Pro is a 6-person pop-up cabin with an integrated fiberglass frame and a 90.5 inch stand-up height. It pitches in about 60 seconds and folds to a 41.7 inch package that slides into a trunk.\n\nNext to the EVER ADVANCED it adds three independent doors, nine interior-operated vents and windows, and a reinforced 140gsm PE floor. Against the Alpha C4 Ultra it raises the headcount from four to six and the roof by several inches.\n\nIt is the pick for a family that wants a tall room, quick pitching and storm-ready details in one box. Taped seams and a rainfly are part of the standard kit.",
    "specs": [
      "6 person, 90.5 in headroom",
      "60 second pop-up setup",
      "Packs to 41.7 in"
    ],
    "pros": [
      "Tallest roof of the three",
      "Three doors stop traffic jams",
      "Nine vents and windows from inside",
      "Fully taped seams and rainfly"
    ],
    "cons": [
      "Highest price of the three",
      "Instant frame adds carrying weight"
    ],
    "bestFor": "Tall families, quick pitch",
    "take": "The roomiest of the three, with a standing height most adults will never touch the roof under.",
    "catch": "Six sleepers is a no-gear count, so plan on four people with bags and bins."
  },
  {
    "id": "best-cabin-tents-2",
    "rank": 2,
    "badge": "Best Compact Cabin",
    "name": "FanttikOutdoor Alpha C4 Ultra Camping Tent 4 Person Pop Up Instant Cabin Setup in 60 Seconds Portable Hub Tent",
    "price": "$186.19",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41qtFPpYBlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D2W12RYZ?tag=rvgearlab-amz-20",
    "description": "The Alpha C4 Ultra is a 94 inch by 94 inch cabin with four vertical walls and a pop-up X-frame. A removable rain cover, sealed seams at doors and windows and a 300D bottom fabric make up the weather kit.\n\nThe packing length is 57.8 inches, which the listing calls 9.8 inches shorter than typical tents. Each side carries three double-paned windows with rollable eaves, a ventilation setup the EVER ADVANCED does not match.\n\nIt suits couples and small families who want a square, tall room that stores easily. Setup is listed at 60 seconds.",
    "specs": [
      "94 x 94 in square floor",
      "Packs 57.8 in long",
      "Three windows per side"
    ],
    "pros": [
      "Square floor uses space well",
      "Packed length shorter than typical",
      "Wear-resistant 300D bottom",
      "Rollable eaves open the walls"
    ],
    "cons": [
      "Four-person limit is firm",
      "Smaller headroom than the C6 Pro"
    ],
    "bestFor": "Couples and small families",
    "take": "A square, four-wall room for two to four campers, with a pack length the listing calls shorter than typical.",
    "catch": "At four people, gear and air beds fill the floor fast."
  },
  {
    "id": "best-cabin-tents-3",
    "rank": 3,
    "badge": "Best Blackout Sleeper",
    "name": "EVER ADVANCED 6 Person Camping Tent",
    "price": "$161.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410w6Eos1zL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CH81KHF8?tag=rvgearlab-amz-20",
    "description": "This EVER ADVANCED cabin opens to 9 ft by 9 ft by 73 inches and packs to 7.9 by 7.9 by 47.6 inches. Blackout fabric, three zippered mesh roll-up windows, an overhead net window and a skylight sit alongside a 60-second setup that one person can handle.\n\nCompared with the Fanttik pair it is the only dark-interior option, and it is also the lowest priced. Inside it adds storage bags, a woven belt for lights or clothes and a pass-through for external power.\n\nIt is best for sleepers, kids who nap and families who arrive after dark. Daylight stays out until you choose to open the skylight.",
    "specs": [
      "9 x 9 ft, 73 in peak",
      "Blackout fabric",
      "Packs 7.9 x 7.9 x 47.6 in"
    ],
    "pros": [
      "Blackout fabric keeps mornings dark",
      "Lowest price of the three",
      "Power cord pass-through",
      "Setup works for one person"
    ],
    "cons": [
      "Lowest peak of the three",
      "No rain specs on the listing"
    ],
    "bestFor": "Sleep-in families",
    "take": "The dark-room option, and the cheapest way into an instant cabin on this page.",
    "catch": "The listing gives no waterproof rating, so treat it as a fair-weather cabin."
  }
];

export const howWeEvaluated = [
  {
    "title": "Wall shape",
    "description": "Straight walls and peak heights from 73 to 90.5 inches were compared."
  },
  {
    "title": "Pitch and pack",
    "description": "Setup claims of 60 seconds were set against packed lengths from 41.7 to 57.8 inches."
  },
  {
    "title": "Real capacity",
    "description": "Listed sleeper counts were weighed against gear space on each floor."
  },
  {
    "title": "Weather kit",
    "description": "Rainflys, taped seams and floor fabric were compared where listings give them."
  },
  {
    "title": "Light and airflow",
    "description": "Blackout fabric, windows and vents were checked for daytime comfort."
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
    "subheading": "By Camping Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Big family, tall parents",
          "Fanttik Alpha C6 Pro Cabin",
          "90.5 inch headroom and three doors."
        ],
        [
          "Couple plus one kid",
          "Fanttik Alpha C4 Ultra Cabin",
          "Square 94 inch floor, three windows per side."
        ],
        [
          "Kids who nap, late arrivals",
          "EVER ADVANCED Blackout Cabin",
          "Blackout fabric and skylight."
        ],
        [
          "Windy, damp weekends",
          "Fanttik Alpha C6 Pro Cabin",
          "Rainfly with fully taped seams."
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
          "$160 to $170",
          "EVER ADVANCED Blackout Cabin"
        ],
        [
          "$180 to $190",
          "Fanttik Alpha C4 Ultra Cabin"
        ],
        [
          "$270 to $280",
          "Fanttik Alpha C6 Pro Cabin"
        ]
      ]
    }
  },
  {
    "subheading": "Pop-Up Cabin vs Blackout Cabin",
    "cards": [
      {
        "label": "Pop-up frame",
        "text": "Fanttik Alpha C6 Pro Cabin and Fanttik Alpha C4 Ultra Cabin use pop-up frames and open windows. They are brighter inside."
      },
      {
        "label": "Blackout",
        "text": "EVER ADVANCED Blackout Cabin darkens the interior and cuts daytime heat. It is the best sleeper but offers fewer weather details."
      }
    ],
    "note": "Most families should start with Fanttik Alpha C6 Pro Cabin, and switch to EVER ADVANCED Blackout Cabin if sleep-in is the priority."
  },
  {
    "subheading": "By Packed Size",
    "table": {
      "headers": [
        "Pack length",
        "Recommended pick"
      ],
      "rows": [
        [
          "Shortest listed, 41.7 inches",
          "Fanttik Alpha C6 Pro Cabin"
        ],
        [
          "47.6 inch long, 7.9 inch slim",
          "EVER ADVANCED Blackout Cabin"
        ],
        [
          "57.8 inches, shorter than typical",
          "Fanttik Alpha C4 Ultra Cabin"
        ]
      ]
    }
  },
  {
    "subheading": "For Car Camping With Kids Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "a quick pitch, a floor tall enough to stand in and mesh windows"
      },
      {
        "label": "In this comparison",
        "text": "Fanttik Alpha C6 Pro Cabin gives 90.5 inches of headroom and three doors, while EVER ADVANCED Blackout Cabin keeps nappers in the dark."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you camp as a family of five or six, because Fanttik Alpha C6 Pro Cabin adds the tall roof, three doors and storm-ready seams that Fanttik Alpha C4 Ultra Cabin lacks."
      },
      {
        "label": "Save if",
        "text": "Save with EVER ADVANCED Blackout Cabin if you camp in fair weather. It is the lowest priced and gives a 9 x 9 ft floor."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Why wall angle matters",
    "explanation": "A cabin tent uses near-vertical walls so the full floor has usable headroom, while a dome slopes the walls away. That is why a cabin feels a size bigger than its floor figure. Compare the center height and the wall description, and confirm both are listed."
  },
  {
    "criterion": "Peak height in inches",
    "explanation": "Peak height is the tallest point inside, usually at the roof center. At 73 inches a tall adult ducks near the edges, while 90.5 inches clears nearly everyone. Read the stand-up height number in the listing, not just the word spacious."
  },
  {
    "criterion": "Instant frame vs poles",
    "explanation": "An instant cabin has the poles attached to the fabric, so the frame unfolds and locks in about a minute. The cost is a longer, heavier carry bag than a sleeve-and-clip dome. Check the packed length against your trunk before buying."
  },
  {
    "criterion": "Blackout and ventilation",
    "explanation": "Blackout fabric blocks daylight but can trap heat unless the windows are generous. Check how many mesh windows and vents the listing counts. A dark tent with three big windows is easier to live in than one with a single vent."
  },
  {
    "criterion": "Weather details",
    "explanation": "A rainfly, taped seams and a thick floor decide whether a cabin survives a shower. Look for the words taped or sealed seams and a floor fabric weight. When a listing leaves out waterproof details, treat the tent as fair-weather."
  }
];

export const faq = [
  {
    "q": "Are cabin tents good in wind?",
    "a": "Straight walls act like sails, so stake every corner and use all guylines. A cabin is more wind-sensitive than a dome of the same floor. Set the door away from the gusts."
  },
  {
    "q": "What mistake do people make with instant cabins?",
    "a": "They skip the stakes because the frame feels solid. Stake first, then lift the frame. Staking also keeps the floor tight and the walls vertical."
  },
  {
    "q": "Is the Fanttik C6 Pro worth over the EVER ADVANCED?",
    "a": "It costs more and adds three doors, a taller roof and sealed seams. The EVER ADVANCED adds blackout fabric and a smaller pack. Pay up if you want weather coverage and size."
  },
  {
    "q": "How do I set up a pop-up cabin?",
    "a": "Lay the tent flat, stake the corners and pull the frame outward until it locks. Then attach the rainfly and tension the guylines. One person can do the EVER ADVANCED alone."
  },
  {
    "q": "How do I fold an instant cabin back up?",
    "a": "Release the frame locks, collapse the poles toward the middle and fold the fabric in thirds. Then roll it up with the bag. Dry the fabric first to avoid mildew."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
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
  },
  {
    "title": "Best 4 Season Tent Under 300",
    "href": "/tents-shelter/best-4-season-tent-under-300"
  }
];
