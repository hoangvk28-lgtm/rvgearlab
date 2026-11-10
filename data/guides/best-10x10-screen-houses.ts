export const guideSlug = "best-10x10-screen-houses";
export const guideTitle = "3 Best 10x10 Screen Houses in 2026";
export const metaTitle = "Best 10x10 Screen Houses in 2026";
export const metaDescription = "Best 10x10 screen houses compared: three pop-up and pole-style bug shelters at 10 by 10 feet, for six to eight people, with mesh walls and UV tops.";
export const mainKeyword = "best 10x10 screen houses";
export const introParagraphs = [
  "A 10x10 screen house is the middle size in the category: big enough for a table and four or five chairs, small enough for most campsites and patios. Only three listings here claim the size.",
  "I compared weight, setup method, wall material and what each includes. The three picks cover a quick pop-up, a light pole-style house and a budget kit."
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
    "id": "best-10x10-screen-houses-1",
    "rank": 1,
    "badge": "Best Lightweight 10x10",
    "name": "Superrella Screen House Canopy Tent 10'x 10'",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OO+pRcp0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B099ZZSRPP?tag=rvgearlab-20",
    "description": "The Superrella is a 10 by 10 foot screen house, 82 inches tall, weighing 15.44 lbs. It lists room for 6 to 8 people, a 190T polyester top with UV resistance, fine mesh and two T-shape zipped doors.\n\nIt is lighter than the 27 lb East Oak by about 11 lbs. Setup takes about 15 minutes without tools, longer than the East Oak's 60-second pop-up.\n\nIt suits a camper who carries the shelter often and values low weight over quick setup. It includes fiberglass poles, stakes and windproof guy rope.",
    "specs": [
      "10 by 10 ft, 82 inches tall",
      "15.44 lbs",
      "Two T-shape zip doors"
    ],
    "pros": [
      "Lightest of the three at 15.44 lbs",
      "Two zipped T-shape doors",
      "Fine mesh keeps small bugs out",
      "Poles, stakes and guy rope included"
    ],
    "cons": [
      "15-minute setup",
      "82 inch height is lower than the VEVOR"
    ],
    "bestFor": "Frequent carry",
    "take": "The light 10x10 for campers who carry it often.",
    "catch": "It takes about 15 minutes to pitch, not seconds."
  },
  {
    "id": "best-10x10-screen-houses-2",
    "rank": 2,
    "badge": "Best Pop-Up 10x10",
    "name": "East Oak 10×10 FT Pop Up Canopy Tent with Mesh Walls",
    "price": "$116.55",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51UroHwy5dL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F21T7XGL?tag=rvgearlab-20",
    "description": "The East Oak is a pop-up 10 by 10 foot screen house that sets up in under a minute. It has B3 mosquito netting, six sunshades, a quick-deploy rainfly and triple-layer Oxford fabric with UPF 50+.\n\nIt weighs 27 lbs, well below a 50-pound steel gazebo and above the Superrella. The six sunshades and rainfly give it the most weather options.\n\nIt suits a family that sets up and strikes camp daily and wants shade and a rain fly. A carry bag is included.",
    "specs": [
      "10 by 10 ft, 27 lbs",
      "Pop-up, under 60 seconds",
      "Six sunshades, UPF 50+"
    ],
    "pros": [
      "Sets up in about a minute",
      "Six sunshade panels for sun",
      "Rainfly included",
      "B3 mosquito netting"
    ],
    "cons": [
      "27 lbs is a real carry",
      "Priciest of the three"
    ],
    "bestFor": "Daily setup families",
    "take": "The quick pop-up for campers who move camp often.",
    "catch": "It is the heaviest and costs the most of the three."
  },
  {
    "id": "best-10x10-screen-houses-3",
    "rank": 3,
    "badge": "Best Budget Kit",
    "name": "VEVOR Pop up Screen House Tent",
    "price": "$68.31",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51a2JtQcwNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G4J4SXD6?tag=rvgearlab-20",
    "description": "The VEVOR is a 10 by 9.2 by 7.55 foot pop-up screen house for 4 to 8 people, with 360 degree mesh and a 300D Oxford canopy. Fiberglass and steel poles hold it up, and it comes with 12 stakes and carry, stake and pole bags.\n\nThe roof reaches 7.55 feet and the price is the lowest of the three. The footprint is a little under a true 10 by 10 at 9.2 feet deep.\n\nIt suits a budget camper who wants a complete kit with bags. Treat it as a size 10 by 9 shelter.",
    "specs": [
      "10 x 9.2 x 7.55 ft",
      "4 to 8 people, 360 degree mesh",
      "12 stakes, three bags"
    ],
    "pros": [
      "Lowest price of the three",
      "Roof reaches 7.55 feet",
      "Complete kit with bags",
      "Reinforced poles for wind"
    ],
    "cons": [
      "Slightly under 10 feet deep",
      "Capacity label of 4 to 8 is a loose range"
    ],
    "bestFor": "Budget kits",
    "take": "The cheapest complete kit, a bit shy of a true 10x10.",
    "catch": "At 9.2 feet deep it is not quite 10 by 10."
  }
];

export const howWeEvaluated = [
  {
    "title": "Real size",
    "description": "I checked whether the listing gives 10 by 10 feet or a near size."
  },
  {
    "title": "Weight and setup",
    "description": "Weight and setup time were compared, since a 10x10 is carried often."
  },
  {
    "title": "Mesh and fabric",
    "description": "Mesh type, canopy denier and UV rating were compared."
  },
  {
    "title": "Doors and weather",
    "description": "Doors, rainflies and sunshades were compared."
  },
  {
    "title": "What is included",
    "description": "Stakes, bags and guy ropes were noted."
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
    "subheading": "By Setup Habit",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Daily setup, wants a fast pop-up",
          "East Oak 10x10 Pop-Up",
          "Under 60 seconds."
        ],
        [
          "Carries the shelter far",
          "Superrella 10x10 Screen House",
          "15.44 lbs."
        ],
        [
          "Tight budget",
          "VEVOR 10x9.2 Screen House",
          "Lowest price, 12 stakes."
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
          "$60 to $70",
          "VEVOR 10x9.2 Screen House"
        ],
        [
          "$80 to $90",
          "Superrella 10x10 Screen House"
        ],
        [
          "$110 to $120",
          "East Oak 10x10 Pop-Up"
        ]
      ]
    }
  },
  {
    "subheading": "Pop-up vs pole-style",
    "cards": [
      {
        "label": "Pop-up",
        "text": "The East Oak 10x10 Pop-Up and VEVOR 10x9.2 Screen House set up fast with a hub frame."
      },
      {
        "label": "Pole-style",
        "text": "The Superrella 10x10 Screen House uses fiberglass poles for lower weight and slower setup."
      }
    ],
    "note": "Most campers should default to the East Oak 10x10 Pop-Up unless weight matters."
  },
  {
    "subheading": "By Weight",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lightest",
          "Superrella 10x10 Screen House"
        ],
        [
          "Rain and sun gear",
          "East Oak 10x10 Pop-Up"
        ],
        [
          "Lowest cost",
          "VEVOR 10x9.2 Screen House"
        ]
      ]
    }
  },
  {
    "subheading": "For a Patio Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Mesh walls, quick setup and stakes that you can leave out."
      },
      {
        "label": "In this comparison",
        "text": "The East Oak 10x10 Pop-Up pops up in under a minute with sunshades for shade."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the East Oak 10x10 Pop-Up if you set up often and want the sunshades."
      },
      {
        "label": "Save if",
        "text": "Save with the VEVOR 10x9.2 Screen House if you camp a few times a year."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Real dimensions",
    "explanation": "A 10 by 10 listing can mean the footprint or a model name. A 9.2 foot side is a bit short. Look for exact feet."
  },
  {
    "criterion": "Weight",
    "explanation": "A pop-up with steel poles can weigh 27 lbs, while a fiberglass-pole house can weigh 15 lbs. Weight decides carrying. Look for weight on the listing."
  },
  {
    "criterion": "Setup",
    "explanation": "A pop-up goes up in a minute, a pole house in 15 minutes. If you move often pick a pop-up. Look for setup time."
  },
  {
    "criterion": "Mesh quality",
    "explanation": "B3 mosquito netting and fine mesh keep small bugs out. Coarse mesh lets no-see-ums in. Look for the mesh name."
  },
  {
    "criterion": "Weather add-ons",
    "explanation": "A rainfly and sunshades add weather options, and they also add weight and setup steps. A bare mesh house is lighter. Check which extras are included."
  },
  {
    "criterion": "Doors",
    "explanation": "Two doors help traffic and airflow. Zip type matters. Look for door count."
  }
];

export const faq = [
  {
    "q": "Is 10x10 big enough for a family?",
    "a": "It fits a table and four to five chairs. The Superrella lists 6 to 8 people, though that is crowded. For more, go to 12x12."
  },
  {
    "q": "Do I need a floor?",
    "a": "None of these three listings mentions one. Use a footprint or tarp to keep ground out. Check the listing."
  },
  {
    "q": "Pop-up vs pole house?",
    "a": "Pop-ups are quick but heavier. The Superrella is 15.44 lbs. Pick by carry and setup."
  },
  {
    "q": "How do I anchor a screen house?",
    "a": "Stake all corners, use the guy ropes and add weights in wind. Take it down if gusts pick up. Check stakes."
  },
  {
    "q": "How do I store a screen house?",
    "a": "Dry it fully, fold into its bag and store it dry. Clean the mesh. Check poles."
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
