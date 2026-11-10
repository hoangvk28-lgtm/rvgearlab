export const guideSlug = "best-screen-houses-under-100";
export const guideTitle = "3 Best Screen Houses Under 100 in 2026";
export const metaTitle = "Best Screen Houses Under 100 in 2026";
export const metaDescription = "Best screen houses under $100 compared on floor space, doors, floors and canopies, for campers wanting a roomy bug-free room with better features.";
export const mainKeyword = "best screen houses under 100";
export const introParagraphs = [
  "A $100 ceiling opens up magnetic doors, perimeter floors, wind panels and 12 foot pop-up canopies with screens. The extras matter most if you eat outdoors or camp in wind, so match the features to how you camp.",
  "Three screen rooms made the list, from a 4 person pole tent to a 12 foot pop-up gazebo. Few options sit near the cap, so ranks favor features per dollar."
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
    "id": "best-screen-houses-under-100-1",
    "rank": 1,
    "badge": "Best Dining Features",
    "name": "TAILGATERZ Magnetic Screen House",
    "price": "$99.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+2lGoWjRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00KJNLYFS?tag=rvgearlab-20",
    "description": "Measuring 11 feet by 9 feet and 7.5 feet tall, the TAILGATERZ pairs magnetic front and back doors with large mesh walls. Its perimeter floor sits over a picnic table, a mud mat catches boots at the entry and a color-coded steel and fiberglass frame speeds assembly.\n\nIt has the most thoughtful dining features of the three, from the table-friendly floor to doors that close themselves. It costs about $40 more than the Abahub and gives far more headroom.\n\nIt suits tailgaters and campers who eat outdoors and want mud and bugs left outside. The 7.5 foot ceiling lets adults stand.",
    "specs": [
      "11 x 9 x 7.5 ft",
      "Magnetic front and back doors",
      "Perimeter floor and mud mat"
    ],
    "pros": [
      "Perimeter floor works over a picnic table",
      "Built-in mud mat at the entry",
      "Color-coded frame eases setup",
      "Magnetic doors close by themselves"
    ],
    "cons": [
      "Pole frame takes longer than a pop-up",
      "Priciest of the three"
    ],
    "bestFor": "Tailgaters and diners",
    "take": "The best table-ready screen room at this price.",
    "catch": "It uses poles, so allow 15 minutes for the first setup."
  },
  {
    "id": "best-screen-houses-under-100-2",
    "rank": 2,
    "badge": "Best Pop-Up Gazebo",
    "name": "Gazebo Pop up Canopy Tent for Camping 12x12 FT Screen Tent Outdoor Shade Portable Canopy with Awnings Outdoor ",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41zuxIMY8uL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F247JGQ3?tag=rvgearlab-20",
    "description": "This 12 by 12 foot pop-up gazebo has an awning, zipper ventilation, wind panels that roll up or pull out with traction rope and a 300D polyester top rated to 5000mm waterproof. The surrounding windbreak can be rolled up or lowered as needed.\n\nIt is the biggest and most weather-ready of the three, with a stronger waterproof rating than the Abahub. It costs about as much as the TAILGATERZ and has a pop-up frame instead of loose poles.\n\nIt suits groups who want shade, a screen and wind protection in one big pop-up. Zippered openings make entry easy.",
    "specs": [
      "12 x 12 ft pop-up gazebo",
      "300D polyester, 5000mm",
      "Wind panels and awning"
    ],
    "pros": [
      "Largest floor of the three",
      "5000mm waterproof top",
      "Roll-up wind panels",
      "Awning blocks direct sun"
    ],
    "cons": [
      "Heavy and bulky to carry",
      "Pop-up frames cost more to repair"
    ],
    "bestFor": "Groups needing shade and wind cover",
    "take": "A big, weather-ready gazebo for group meals and shade.",
    "catch": "Plan a vehicle carry, since a 12 foot pop-up is heavy."
  },
  {
    "id": "best-screen-houses-under-100-3",
    "rank": 3,
    "badge": "Best Budget Room",
    "name": "Abahub Portable Screen House Tent for 4 Person",
    "price": "$52.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51T3VsS5UDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GKCYMBRK?tag=rvgearlab-20",
    "description": "The Abahub 9.2 ft screen house measures 9.2 by 9.2 by 6.6 feet for four people, with two doors, a PU4000 top and manual pole setup. It weighs about 7.7 pounds packed and folds down for a backpack.\n\nIt costs about half of the other picks and carries a light-rain top. It trails both of them on headroom and floor.\n\nIt suits four campers who want a basic bug-free room at the lowest price. The top is built for sun and drizzle, not storms.",
    "specs": [
      "9.2 x 9.2 x 6.6 ft, 4 people",
      "PU4000 top",
      "About 7.7 lb packed"
    ],
    "pros": [
      "Lowest price in the group",
      "PU4000 top shades and sheds drizzle",
      "Two doors for airflow",
      "Light at about 7.7 pounds"
    ],
    "cons": [
      "Manual setup needs some experience",
      "Not meant for heavy rain"
    ],
    "bestFor": "Budget groups of four",
    "take": "The cheapest decent-sized screen room under the cap.",
    "catch": "Use a tarp over the top in storms."
  }
];

export const howWeEvaluated = [
  {
    "title": "Floor and headroom",
    "description": "Compared 9.2, 11 and 12 foot floors and 6.6 to 7.5 foot ceilings."
  },
  {
    "title": "Doors and floor",
    "description": "Checked magnetic doors, mud mats and perimeter floors."
  },
  {
    "title": "Roof fabric",
    "description": "Compared PU4000 and 5000mm tops."
  },
  {
    "title": "Setup",
    "description": "Weighed pop-up frames against pole assembly."
  },
  {
    "title": "Price",
    "description": "Ranked value between $46 and $100."
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
    "subheading": "By Camper",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Table-ready diners",
          "TAILGATERZ Magnetic",
          "Perimeter floor and mud mat."
        ],
        [
          "Group needing shade and wind cover",
          "Gazebo Pop-Up 12x12",
          "Wind panels and awning."
        ],
        [
          "Budget family of four",
          "Abahub 9.2 ft",
          "Lowest price."
        ],
        [
          "Muddy campsite",
          "TAILGATERZ Magnetic",
          "Mud mat at the entry."
        ],
        [
          "Big group",
          "Gazebo Pop-Up 12x12",
          "12 foot floor."
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
          "$40 to $50",
          "Abahub 9.2 ft"
        ],
        [
          "$90 to $100",
          "TAILGATERZ Magnetic"
        ],
        [
          "$90 to $100",
          "Gazebo Pop-Up 12x12"
        ]
      ]
    }
  },
  {
    "subheading": "Pop-Up vs Pole",
    "cards": [
      {
        "label": "Pop-up",
        "text": "A pop-up frame opens in minutes and suits groups. The Gazebo Pop-Up 12x12 uses this style."
      },
      {
        "label": "Pole",
        "text": "Poles weigh less and cost less but need more setup. The TAILGATERZ Magnetic and Abahub 9.2 ft use poles."
      }
    ],
    "note": "Pick a pop-up like the Gazebo Pop-Up 12x12 only for big groups."
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
          "About $46",
          "Abahub 9.2 ft"
        ],
        [
          "About $100, dining",
          "TAILGATERZ Magnetic"
        ],
        [
          "About $100, groups",
          "Gazebo Pop-Up 12x12"
        ]
      ]
    }
  },
  {
    "subheading": "Tailgate Parties Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A table-ready floor, doors that close behind you and enough headroom."
      },
      {
        "label": "In this comparison",
        "text": "The TAILGATERZ Magnetic has a perimeter floor and a 7.5 foot ceiling."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend up to the cap on the TAILGATERZ Magnetic for dining features or the Gazebo Pop-Up 12x12 for a big group."
      },
      {
        "label": "Save if",
        "text": "Save with the Abahub 9.2 ft if you want a basic room."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Pop-up or pole frame",
    "explanation": "A pop-up frame opens in a minute or two but weighs more and can bind if bumped. Pole frames take 10 to 15 minutes and weigh less, which helps if you carry the room from the car. Choose by how often you will move the room during a trip."
  },
  {
    "criterion": "Magnetic doors",
    "explanation": "Magnetic doors close behind you and keep bugs out when your hands are full of plates, and they do not need zipping. They only work well when the magnets line up, so keep the frame square. Look for them if you eat outdoors. Ask yourself how many people will walk in and out at meals."
  },
  {
    "criterion": "Perimeter floor",
    "explanation": "A floor that only runs around the edge keeps bugs out under the walls and lets you place a table in the center without a groundsheet. A full floor is easier to clean but traps heat and damp. Check the floor style in the product description."
  },
  {
    "criterion": "Wind panels",
    "explanation": "Roll-up wind panels let you close the walls against gusts and add privacy, then open again for views and airflow. They add weight and fabric, and they also catch the wind, so stake the frame well. Check how they attach and how many sides they cover."
  },
  {
    "criterion": "Roof waterproofing",
    "explanation": "PU4000 is meant for sun and drizzle, while a 5000mm rating handles steady rain. A mesh room is never fully dry, so a tarp over the roof helps in storms. Look for a stated millimeter rating on the roof fabric in the details. Seams are usually the first place water sneaks in."
  }
];

export const faq = [
  {
    "q": "Is a pop-up screen house worth it?",
    "a": "For groups, yes, because setup takes minutes and several people can lift together. For solo trips a pole room like the Abahub 9.2 ft is lighter. The Gazebo Pop-Up 12x12 is heavy to carry, so plan a vehicle drop-off."
  },
  {
    "q": "Can a screen house replace a tent?",
    "a": "No, it has no solid floor, no privacy and little insulation. It is a sitting and dining room rather than a sleeping shelter. Pair it with a tent, or use it to extend your living space beside the car."
  },
  {
    "q": "Will it hold up in wind?",
    "a": "Stake every corner and use all guy lines. The Gazebo Pop-Up 12x12 has wind panels, but panels also catch the breeze, so anchoring still matters. Take any mesh room down before storms arrive. Check the forecast before leaving it up overnight."
  },
  {
    "q": "How do I keep bugs out at the bottom?",
    "a": "Use sandbags or stakes along the skirt, and close the doors fully every time. The TAILGATERZ Magnetic perimeter floor helps with gaps. Check the corners and zippers for gaps before dusk. Dusk is when insects find any gap, so check before dark."
  },
  {
    "q": "Does it work on a patio?",
    "a": "Yes, with weights at each leg instead of stakes. Use sandbags or water jugs on each corner, and check the wind forecast first. Never leave a mesh room unattended on a deck in strong wind."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Screen Houses",
    "href": "/tents-shelter/best-screen-houses"
  },
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
  }
];
