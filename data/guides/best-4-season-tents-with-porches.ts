export const guideSlug = "best-4-season-tents-with-porches";
export const guideTitle = "3 Best 4 Season Tents With Porches in 2026";
export const metaTitle = "Best 4 Season Tents With Porches in 2026";
export const metaDescription = "Best 4 season tents with porches compared on screened porch design, rainfly ratings and setup for camping families who want a covered entry.";
export const mainKeyword = "best 4 season tents with porches";
export const introParagraphs = [
  "A porch adds a covered, bug-proof entry that doubles as a gear room, but it also adds fabric, poles and stakes. On a tent sold for four seasons, the porch needs to stay stable in wind and rain.",
  "Three tents with a named screened porch or porch area are compared here. They cover a tunnel, a spring-up and a pop-up design, so the real choice is how much setup effort you accept."
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
    "id": "best-4-season-tents-with-porches-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Chihee Camping Tents Tunnel Tent 4 Person Family Tents with 2 Doors Extra Large Weatherproof Shelter 4 Seasons",
    "price": "$57.60",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41p8zoMf6rL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQRJ3NZF?tag=rvgearlab-amz-20",
    "description": "The Chihee tunnel tent sleeps four and is sold with a screened porch room and awning. It uses PU2000mm polyester, fiberglass poles with aluminum stakes and wind ropes, and a B3 mesh inner for airflow.\n\nIt is sold for four people, with two entrances so one can serve as a kitchen door. Against the Chihee pop-up it needs poles to be set, while the NORDREK uses no poles at all.\n\nIt suits families who want a standing porch beside a roomy sleeping area. Curved poles come pre-attached, which cuts the number of steps.",
    "specs": [
      "4 person tunnel, two doors",
      "PU2000mm polyester",
      "Screened porch room"
    ],
    "pros": [
      "Sleeps four with two entrances",
      "Screened porch room and awning",
      "Pre-attached curved poles",
      "Mesh inner for airflow"
    ],
    "cons": [
      "PU2000mm is a modest rain rating",
      "Tunnel needs staking to hold"
    ],
    "bestFor": "Family car camping",
    "take": "The roomiest of the three, with a real porch and two entrances.",
    "catch": "Tunnel tents need stakes and guy lines pulled tight to hold their shape."
  },
  {
    "id": "best-4-season-tents-with-porches-2",
    "rank": 2,
    "badge": "Best Quick Setup",
    "name": "Chihee Camping Tents Pop-Up Portable Tent Outdoor Shelter",
    "price": "$55.69",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OWPAFcPBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQT573ZR?tag=rvgearlab-amz-20",
    "description": "The Chihee pop-up tent springs open from an inner structure with 9.5mm automatic fiberglass poles. It has a double-layer build, two doors and two door poles that raise a porch area at the entrance.\n\nIt pitches by springing open, which skips the pole-threading the Chihee tunnel needs. Compared with the NORDREK it has two doors and a propped porch rather than a built-in screened one.\n\nIt suits campers who want quick pitching and a prop-up porch for gear. The vestibule gives a sheltered area when the door poles are placed.",
    "specs": [
      "Spring-open inner",
      "9.5mm automatic fiberglass poles",
      "Two door poles for porch"
    ],
    "pros": [
      "Pops open from the bag",
      "Two doors for entry choice",
      "Door poles create a porch",
      "Double-layer build"
    ],
    "cons": [
      "Porch needs separate poles to prop",
      "Waterproof rating is not stated"
    ],
    "bestFor": "Fast family pitching",
    "take": "A quick-pitch tent that still gives you a porch when you want one.",
    "catch": "Without a stated rain rating, seal the seams before wet weather."
  },
  {
    "id": "best-4-season-tents-with-porches-3",
    "rank": 3,
    "badge": "Best Built-In Porch",
    "name": "NORDREK Pop Up Camping Tent with Screen Porch",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-32I6g1NL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GXF34XQM?tag=rvgearlab-amz-20",
    "description": "The NORDREK is a pop-up tent for three with a built-in screened porch and mesh panels, sized 220 by 200 by 145 centimeters. Its listing describes graphene-infused fabric, and it sets up in seconds without poles.\n\nIt is the only pick with a porch built into the shell, and it needs no poles at all. Compared with the Chihee tunnel it sleeps fewer people.\n\nIt suits a couple with a child, or small groups wanting bug protection. The mesh porch keeps insects out while the door stays open.",
    "specs": [
      "3 person, 220 x 200 x 145 cm",
      "Built-in screened porch",
      "Pop-up, no poles"
    ],
    "pros": [
      "Porch is built into the shell",
      "Pops up without poles",
      "Mesh panels reduce condensation",
      "Fits two adults and a child"
    ],
    "cons": [
      "Sleeps three, fewer than the tunnel tent",
      "Graphene claims have no listed test data"
    ],
    "bestFor": "Small group pop-up",
    "take": "A pole-free pop-up tent with a screened porch already attached.",
    "catch": "Treat the graphene and warmth claims as marketing, since the listing gives no insulation numbers."
  }
];

export const howWeEvaluated = [
  {
    "title": "Porch type",
    "description": "Built-in, propped or screened."
  },
  {
    "title": "Season label",
    "description": "Tents sold as 4 season were kept."
  },
  {
    "title": "Setup",
    "description": "Pop-up, spring-open or pole-and-stake."
  },
  {
    "title": "Rain rating",
    "description": "Listed millimeter rating."
  },
  {
    "title": "Space",
    "description": "Sleeping capacity and doors."
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
          "Four campers",
          "Chihee 4-Person Tunnel Tent",
          "Sleeps four with a porch room."
        ],
        [
          "Quick pitching",
          "Chihee Pop-Up Family Tent",
          "Spring-open inner."
        ],
        [
          "Couple and a child",
          "NORDREK Pop-Up Porch Tent",
          "3 person, built-in porch."
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
          "$50 to $60",
          "Chihee Pop-Up Family Tent"
        ],
        [
          "$50 to $60",
          "Chihee 4-Person Tunnel Tent"
        ],
        [
          "$70 to $80",
          "NORDREK Pop-Up Porch Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Built-In vs Propped Porch",
    "cards": [
      {
        "label": "Built-in",
        "text": "The shell includes the porch, so no extra poles. The NORDREK Pop-Up Porch Tent is the built-in pick."
      },
      {
        "label": "Propped",
        "text": "Door poles lift a panel to make shelter. The Chihee Pop-Up Family Tent uses this method."
      }
    ],
    "note": "Choose the NORDREK Pop-Up Porch Tent for bugs, and the Chihee Pop-Up Family Tent for rain cover."
  },
  {
    "subheading": "By Setup Effort",
    "table": {
      "headers": [
        "Effort",
        "Recommended pick"
      ],
      "rows": [
        [
          "Pop-up, no poles",
          "NORDREK Pop-Up Porch Tent"
        ],
        [
          "Spring-open inner",
          "Chihee Pop-Up Family Tent"
        ],
        [
          "Pole-and-stake tunnel",
          "Chihee 4-Person Tunnel Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For Bug-Free Evenings",
    "cards": [
      {
        "label": "Look for",
        "text": "A mesh porch panel that stays closed while you sit."
      },
      {
        "label": "In this comparison",
        "text": "The NORDREK Pop-Up Porch Tent has a screened porch, and the Chihee 4-Person Tunnel Tent includes a screened porch room."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the NORDREK Pop-Up Porch Tent for the built-in porch."
      },
      {
        "label": "Save if",
        "text": "Save with the Chihee Pop-Up Family Tent or the Chihee 4-Person Tunnel Tent."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Porch design",
    "explanation": "A screened porch keeps bugs out, while a propped porch gives rain cover but no screen. Built-in porches stay part of the tent shell, so they need no extra poles. Look for the words screen porch, porch room or door poles on the listing."
  },
  {
    "criterion": "What 4 season means here",
    "explanation": "On family tents, a 4 season label usually means a double layer and decent venting, not a mountain rating. Real winter use needs a snow skirt and strong poles. Check for a skirt and pole material."
  },
  {
    "criterion": "Waterproof rating",
    "explanation": "PU2000mm resists light and moderate rain, while PU3000mm and above suits heavier storms. Tent fabric and floor ratings often differ. Look for the number on the listing."
  },
  {
    "criterion": "Setup style",
    "explanation": "Pop-up and spring-open tents pitch in seconds but fold into a wide disc. Tunnel tents pack small but need staking. Pick by how often you move camp."
  },
  {
    "criterion": "Ventilation",
    "explanation": "Closed porches trap humidity, so mesh panels matter. Cooking should stay outdoors, never inside a closed porch. Look for mesh on the porch and the inner tent."
  }
];

export const faq = [
  {
    "q": "Can I cook in the porch?",
    "a": "No. Cook outside and keep stoves out of any tent, since carbon monoxide and fire risk build quickly."
  },
  {
    "q": "What is the common mistake?",
    "a": "Assuming a 4 season label means winter-ready. These are family tents, so check the poles, skirt and rain rating."
  },
  {
    "q": "Is the NORDREK worth it over the Chihee?",
    "a": "It pitches without poles and has a built-in porch. The Chihee tunnel sleeps four."
  },
  {
    "q": "How do I prop a porch?",
    "a": "Insert the door poles, tension the guy lines and stake the corners. Check the angle so rain runs off."
  },
  {
    "q": "How do I dry the tent?",
    "a": "Open it fully in the sun at home. Pack it only when it is dry."
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
