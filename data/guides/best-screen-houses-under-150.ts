export const guideSlug = "best-screen-houses-under-150";
export const guideTitle = "4 Best Screen Houses Under 150 in 2026";
export const metaTitle = "Best Screen Houses Under 150 in 2026";
export const metaDescription = "Best screen houses under $150 compared on size, doors, steel frames and extras, for families who want a large, sturdy bug-free room near the top of the budget.";
export const mainKeyword = "best screen houses under 150";
export const introParagraphs = [
  "At $150 you reach 10 by 10 foot pop-ups with steel frames and 13 by 9 foot rooms with projection screens. The right pick depends on whether you want quick setup, tall headroom or movie nights.",
  "Four screen houses are ranked by size, structure and extras. Few options sit near the cap, and the winners add features rather than only size."
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
    "id": "best-screen-houses-under-150-1",
    "rank": 1,
    "badge": "Best Value Under $150",
    "name": "East Oak Pop-Up Screen House Tent",
    "price": "$129.14",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/61qaL7aHtxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B9LCR8V1?tag=rvgearlab-20",
    "description": "The East Oak is a 10 by 10 foot pop-up with four-sided D33 fine mesh, a reinforced steel main structure and UPF 50+ protection. A heavy-duty fiberglass top prevents water from accumulating and adds interior space.\n\nIt pops up much faster than the pole-assembled TAILGATERZ and DMH, and it costs less than the DMH. It leaves out the sunshade panels some canopies include.\n\nIt suits 4 to 6 people who want a sturdy-framed room for patio meals. The rating leaves space for a table.",
    "specs": [
      "10 x 10 ft pop-up",
      "D33 mesh, UPF 50+",
      "Reinforced steel frame"
    ],
    "pros": [
      "Steel main structure for stability",
      "Fiberglass roof sheds water",
      "Four-sided D33 fine mesh",
      "UPF 50+ roof protection"
    ],
    "cons": [
      "No sunshade panels included",
      "Pop-ups are heavier to carry"
    ],
    "bestFor": "Patio and camp meals",
    "take": "A sturdy 10 by 10 pop-up for the cost of a mid-range tent.",
    "catch": "Afternoon sun can reach the sides without sunshade panels."
  },
  {
    "id": "best-screen-houses-under-150-2",
    "rank": 2,
    "badge": "Best Movie Night Room",
    "name": "DMH OUTDOORS Screen House Tent 13x9FT with Netting Mesh & 2 Magnetic Doors",
    "price": "$142.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51q6o5NbKNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CVXLBBRR?tag=rvgearlab-20",
    "description": "The DMH screen house is 13 by 9 by 7.5 feet and covers nearly 120 square feet with all-around mesh. Two self-closing magnetic doors and a projection screen come in the box.\n\nIt matches the TAILGATERZ on 7.5 foot headroom and adds a projection screen. It costs the most in the group.\n\nIt suits families who use the room for outdoor movies. Magnetic doors help when carrying snacks.",
    "specs": [
      "13 x 9 x 7.5 ft",
      "Two magnetic doors",
      "Projection screen included"
    ],
    "pros": [
      "Projection screen in the box",
      "7.5 foot center height",
      "Self-closing magnetic doors",
      "All-around mesh ventilation"
    ],
    "cons": [
      "Priciest of the four",
      "Pole assembly takes time"
    ],
    "bestFor": "Movie nights",
    "take": "A tall screen room with a projection screen built in.",
    "catch": "The projector is not included, so budget for one."
  },
  {
    "id": "best-screen-houses-under-150-3",
    "rank": 3,
    "badge": "Best Table-Ready Room",
    "name": "TAILGATERZ Magnetic Screen House",
    "price": "$99.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+2lGoWjRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00KJNLYFS?tag=rvgearlab-20",
    "description": "This TAILGATERZ model gives 99 square feet under a 7.5 foot roof, with magnetic doors at both ends and big mesh walls. Its edge-only floor goes around a picnic table, a mud mat covers the entry and the poles are color-coded.\n\nIt costs about $50 less than the DMH and offers the same headroom. It is smaller than the DMH and has no projection screen.\n\nIt suits tailgaters and campers who dine outside. The color-coded poles guide setup.",
    "specs": [
      "99 sq ft under 7.5 ft roof",
      "Magnetic doors",
      "Perimeter floor and mud mat"
    ],
    "pros": [
      "Perimeter floor works over a picnic table",
      "Built-in mud mat",
      "Color-coded frame",
      "Doors close by themselves"
    ],
    "cons": [
      "Poles take longer than a pop-up",
      "Smaller than the DMH"
    ],
    "bestFor": "Tailgaters and diners",
    "take": "The best dining setup for about $100.",
    "catch": "Allow 15 minutes for the first setup."
  },
  {
    "id": "best-screen-houses-under-150-4",
    "rank": 4,
    "badge": "Best Wind-Panel Gazebo",
    "name": "Gazebo Pop up Canopy Tent for Camping 12x12 FT Screen Tent Outdoor Shade Portable Canopy with Awnings Outdoor ",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41zuxIMY8uL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F247JGQ3?tag=rvgearlab-20",
    "description": "This 12 by 12 foot pop-up gazebo has an awning, zipper ventilation and wind panels that roll up, lower or pull out on traction ropes. The 300D polyester top is rated to 5000mm waterproof.\n\nIt gives the biggest floor of the four and the strongest waterproof rating, at a price below the East Oak. The East Oak has a steel frame and the DMH has a projection screen.\n\nIt suits groups who want shade, a screen and wind cover in one big pop-up. Zippers make entry easy.",
    "specs": [
      "12 x 12 ft pop-up gazebo",
      "300D polyester, 5000mm",
      "Wind panels and awning"
    ],
    "pros": [
      "Largest floor of the four",
      "5000mm waterproof top",
      "Roll-up wind panels",
      "Awning blocks direct sun"
    ],
    "cons": [
      "Heavy and bulky to carry",
      "Frame may flex in strong gusts"
    ],
    "bestFor": "Large groups",
    "take": "A big, weatherproof gazebo for crowds.",
    "catch": "Plan a vehicle carry for the 12 foot frame."
  }
];

export const howWeEvaluated = [
  {
    "title": "Size",
    "description": "Compared 10 by 10, 11 by 9, 12 by 12 and 13 by 9 foot floors."
  },
  {
    "title": "Frame",
    "description": "Compared steel, fiberglass and pole assembly."
  },
  {
    "title": "Doors",
    "description": "Checked magnetic and zippered doors."
  },
  {
    "title": "Extras",
    "description": "Counted projection screens, wind panels and mud mats."
  },
  {
    "title": "Price",
    "description": "Ranked value between $99 and $150."
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
          "Patio meals for six",
          "East Oak 10x10 Pop-Up",
          "Steel frame, 10 by 10."
        ],
        [
          "Outdoor movies",
          "DMH 13x9 Movie Room",
          "Projection screen."
        ],
        [
          "Tailgate dining",
          "TAILGATERZ Magnetic",
          "Perimeter floor."
        ],
        [
          "Large group in wind",
          "Gazebo Pop-Up 12x12",
          "Wind panels."
        ],
        [
          "Muddy sites",
          "TAILGATERZ Magnetic",
          "Mud mat."
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
          "$90 to $100",
          "TAILGATERZ Magnetic or Gazebo Pop-Up 12x12"
        ],
        [
          "$120 to $150",
          "East Oak 10x10 Pop-Up or DMH 13x9 Movie Room"
        ]
      ]
    }
  },
  {
    "subheading": "Pop-Up vs Pole",
    "cards": [
      {
        "label": "Pop-up",
        "text": "A pop-up opens in minutes. The East Oak 10x10 Pop-Up and Gazebo Pop-Up 12x12 use this style."
      },
      {
        "label": "Pole",
        "text": "Poles weigh less and allow bigger rooms. The DMH 13x9 Movie Room and TAILGATERZ Magnetic use poles."
      }
    ],
    "note": "Choose the East Oak 10x10 Pop-Up if you pitch often."
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
          "About $100, dining",
          "TAILGATERZ Magnetic"
        ],
        [
          "About $100, big group",
          "Gazebo Pop-Up 12x12"
        ],
        [
          "About $129, pop-up",
          "East Oak 10x10 Pop-Up"
        ],
        [
          "About $150, movies",
          "DMH 13x9 Movie Room"
        ]
      ]
    }
  },
  {
    "subheading": "Outdoor Movie Nights Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A 7.5 foot ceiling, a projection screen and doors that close themselves."
      },
      {
        "label": "In this comparison",
        "text": "The DMH 13x9 Movie Room includes the screen."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend up to the cap on the DMH 13x9 Movie Room for movie nights, or the East Oak 10x10 Pop-Up for quick setup."
      },
      {
        "label": "Save if",
        "text": "Save with the TAILGATERZ Magnetic for a table-ready room."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Steel or fiberglass frame",
    "explanation": "A steel main structure resists bending in wind and holds a pop-up frame square, while fiberglass flexes and can splinter after a few seasons. Pop-up scissors use steel joints that can bind if bent. Look for the frame material in the product details. Bent joints are the usual failure point, so handle the frame gently when packing."
  },
  {
    "criterion": "Mesh density",
    "explanation": "D33 fine mesh blocks no-see-ums and tiny gnats, while standard mesh lets small insects through. A finer mesh also cuts airflow slightly, so it suits humid, buggy sites more than breezy ones. Look for a stated mesh grade in the description. If your campsite is by water, pick the finer mesh."
  },
  {
    "criterion": "Size for your table",
    "explanation": "A six-person table needs about 10 by 10 feet with walking room, and a movie setup with a screen needs more. Add a foot of clearance on each side of the table. Check the floor and ceiling dimensions rather than the person rating. Remember that a bigger room also needs a bigger flat site."
  },
  {
    "criterion": "Doors and entry",
    "explanation": "Magnetic doors close behind you and keep bugs out when your hands are full, while zippered doors seal tighter but need both hands. Poor alignment leaves gaps at the top corners. Check which door type the room uses and how many entries it has. Two entries make flow easier for a big group."
  },
  {
    "criterion": "Wind rating",
    "explanation": "Mesh rooms catch wind like sails, so stake and guy every point and use sandbags on hard surfaces. Wind panels help block gusts but add more area for the wind to push. Look for the stake count and guy points in the package list. Never leave a room staked out in a storm warning."
  }
];

export const faq = [
  {
    "q": "Is the DMH projection screen worth it?",
    "a": "If you plan outdoor movies, yes, because it saves buying a screen and the 7.5 foot ceiling suits seating. You still need a projector and power. Otherwise the TAILGATERZ Magnetic is cheaper and offers similar headroom."
  },
  {
    "q": "Do pop-ups last as long as pole rooms?",
    "a": "Pop-up scissors can bind or bend over time if forced. The East Oak 10x10 Pop-Up has a steel frame, which helps. Store it dry and fold it exactly as the instructions show to protect the joints."
  },
  {
    "q": "What mesh blocks no-see-ums?",
    "a": "D33 fine mesh blocks tiny insects, as on the East Oak 10x10 Pop-Up. Standard mesh may let no-see-ums through. Check the mesh grade in the product details before you buy for buggy sites. Fine mesh matters most near water and woods at dusk."
  },
  {
    "q": "How do I anchor a screen house?",
    "a": "Stake all corners and guy lines in soil, or weigh the legs with sandbags on a patio. Add a stake at each wind panel pull-out. Take the room down in storms rather than risk bent poles."
  },
  {
    "q": "Can I use these in the rain?",
    "a": "Tops shed light rain, but mesh sides let wind-driven rain in. A tarp over the top helps a lot in steady rain. Keep gear and electronics off the floor and away from the walls. Pitch on a slight slope away from the door so water runs off."
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
