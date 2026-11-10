export const guideSlug = "best-camping-canopies";
export const guideTitle = "6 Best Camping Canopies in 2026";
export const metaTitle = "Best Camping Canopies in 2026";
export const metaDescription = "Best camping canopies compared across pop-up shade shelters and screen houses, with frame, fabric and size notes for campsite use.";
export const mainKeyword = "best camping canopies";
export const introParagraphs = [
  "Camping canopies come in two families, open pop-up shade tops and screen houses with mesh walls. Which one fits depends on whether you fight sun, bugs or both, and how often you want to pitch it.",
  "Six shelters earned a spot after the listings were checked for size, frame type and what each one actually protects against. Two are classic one-push canopies, and four are screen houses with different strengths."
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
    "id": "best-camping-canopies-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Coleman Oasis Instant Pop-Up Canopy Tent with Side Wall Attachment",
    "price": "$161.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ziNZlTYEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D6C5F7DZ?tag=rvgearlab-20",
    "description": "The Coleman Oasis is a one-push OnePeak canopy with a steel frame that the listing says withstands winds up to 35 mph when fully staked with guy lines. A vented roof, UPF 50+ fabric, overhanging eaves, corner gear pockets and a wheeled carry bag are listed over a 100 sq ft footprint.\n\nCompared with the Vinabilia it adds a vented roof, a pull-strap takedown and a wheeled bag at about double the price. Against the screen houses it covers sun only, with no mesh walls.\n\nIt suits campers who want a trusted brand and easy takedown. The Pinch-Free Comfort Grip buttons make setup friendlier.",
    "specs": [
      "OnePeak one-push hub",
      "35 mph rating when staked",
      "Vented roof, UPF 50+"
    ],
    "pros": [
      "Pull strap makes takedown easy",
      "Pinch-free locking buttons",
      "Vented roof lets heat escape",
      "Wheeled carry bag included"
    ],
    "cons": [
      "Priciest of the six",
      "No walls or screen included"
    ],
    "bestFor": "Campsite shade, every trip",
    "take": "The most polished open canopy, built around easy setup and takedown.",
    "catch": "It shades but does not stop bugs, so pair it with repellent."
  },
  {
    "id": "best-camping-canopies-2",
    "rank": 2,
    "badge": "Best Privacy Screen House",
    "name": "Aoxun 12x12ft Pop Up Canopy Tent",
    "price": "$139.63",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51S+dIhMlLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G5N9K9PF?tag=rvgearlab-20",
    "description": "The Aoxun is a 12x12 ft pop-up gazebo screen tent in 300D Oxford and polyester mesh that blocks over 99 percent of UV. It comes with six detachable wind cloths, two of which have windows, plus fiberglass poles, windproof ropes and luminous ground stakes.\n\nAgainst the VEVOR it has a bigger footprint and six wind cloths for full privacy. Next to the Alvantor it adds the wind cloths and heavier fabric.\n\nIt suits groups that want an enclosed, bug-free space with the option to close it for wind or privacy. It assembles without tools.",
    "specs": [
      "12x12 ft, 300D Oxford",
      "6 detachable wind cloths",
      "Bug-free mesh"
    ],
    "pros": [
      "Six wind cloths for privacy",
      "Over 99 percent UV blocked",
      "Luminous ground stakes",
      "Tool-free pop-up assembly"
    ],
    "cons": [
      "Wind cloths add pack bulk",
      "Fiberglass poles flex in strong wind"
    ],
    "bestFor": "Groups needing privacy",
    "take": "A large pop-up screen room with wind cloths for privacy.",
    "catch": "Check the packed length before loading a small car."
  },
  {
    "id": "best-camping-canopies-3",
    "rank": 3,
    "badge": "Best Convertible Screen House",
    "name": "VEVOR Pop up Gazebo Screen Tent",
    "price": "$137.19",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41d0bHoU6sL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G13S3HM6?tag=rvgearlab-20",
    "description": "The VEVOR is a 10x10 ft six-sided pop-up screen gazebo with a 7.2 ft canopy, a 300D Oxford top with UV50+ protection and six roll-up wind panels. Its door panels double as sunshade canopies, and it packs into a 4.2 ft bag.\n\nIt is smaller than the Aoxun and costs a little less. Compared with the CAMPROS it pops up instead of needing three people.\n\nIt suits campers who want a bug screen that also converts to open shade. Four seated with furniture is the stated comfort level.",
    "specs": [
      "10x10 ft, 7.2 ft high",
      "6 roll-up wind panels",
      "Doors become sunshades"
    ],
    "pros": [
      "Door panels double as awnings",
      "Pop-up hub, no tools",
      "Mesh sidewalls and roof",
      "Fits four seated with furniture"
    ],
    "cons": [
      "7.2 ft ceiling is lower than canopies",
      "Room for 6 to 8 is tight"
    ],
    "bestFor": "Bug-free dining spots",
    "take": "A pop-up screen house that doubles as open shade.",
    "catch": "At 7.2 ft tall, tall campers will stoop at the walls."
  },
  {
    "id": "best-camping-canopies-4",
    "rank": 4,
    "badge": "Best Lightweight Screen Room",
    "name": "Alvantor Screen House Room Camping Tent Outdoor Canopy Pop Up Sun Shade Hexagon Shelter Mesh Walls Not Waterpr",
    "price": "$135.82",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Q+f-PecfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07TXBB49X?tag=rvgearlab-20",
    "description": "The Alvantor Breezy Hexagonal screen house is 10 ft by 10 ft by 7 ft, weighs only 15 lbs and packs into a 39.3 inch diameter bag. A UPF 50+ fabric top, mesh walls and a large entrance with double side silicone zippers fit 4 to 6 adults.\n\nIt is the only screen house here that lists a weight, and the figure is low. Against the VEVOR it trades the wind panels for a lighter carry.\n\nIt suits campers who haul gear on foot and want a bug screen with sun cover. The listing says it is not waterproof.",
    "specs": [
      "10x10x7 ft hexagon",
      "15 lbs, 39.3 in bag",
      "UPF 50+ top, mesh walls"
    ],
    "pros": [
      "Only 15 lbs",
      "Automatic fiberglass rib open",
      "Large door with double zipper",
      "Fits 4 to 6 adults"
    ],
    "cons": [
      "Not waterproof or rainproof",
      "No wind panels for privacy"
    ],
    "bestFor": "Lightweight bug-free shade",
    "take": "The lightest screen room here, aimed at campers who carry it.",
    "catch": "The top is not rainproof, so rain means retreating to the car."
  },
  {
    "id": "best-camping-canopies-5",
    "rank": 5,
    "badge": "Best Big Budget Screen House",
    "name": "CAMPROS CP Screen House Tent 13 x 13 Ft Screened Mesh Net Wall Canopy",
    "price": "$76.79",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41F7wvD0OXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08TH9XH81?tag=rvgearlab-20",
    "description": "The CAMPROS screen house measures 13 ft by 13 ft with an 86 inch center height for 134 sq ft of shade. The top is 190T polyester for UV resistance, and it includes a carry bag, ground stakes and tie downs, with no attached floor.\n\nIt is the biggest footprint here and one of the least expensive. Against the pop-up screen houses it uses a manual frame that takes three people about ten minutes.\n\nIt suits large groups and patios that want a big shaded floor for less. A 1-year warranty is listed.",
    "specs": [
      "13x13 ft, 86 in peak",
      "134 sq ft of shade",
      "Stakes, tie downs included"
    ],
    "pros": [
      "Biggest floor at 134 sq ft",
      "86 inch center height",
      "Stakes and tie downs in the box",
      "Price is among the lowest"
    ],
    "cons": [
      "Needs three people about ten minutes",
      "No floor attached"
    ],
    "bestFor": "Large groups, patios",
    "take": "The largest, most affordable screen house for a crowd.",
    "catch": "Pitching takes three people and 10 minutes."
  },
  {
    "id": "best-camping-canopies-6",
    "rank": 6,
    "badge": "Best Budget Canopy",
    "name": "Vinabilia 10x10 Pop Up Canopy Tent with One-Push Center Lock",
    "price": "$75.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41T+ETwdfbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GLDN4FPZ?tag=rvgearlab-20",
    "description": "The Vinabilia is a 10x10 one-push canopy with an 8.9 ft interior height, no overhead crossbars and a UPF 50+ water-resistant fabric with heat-sealed seams. A powder-coated steel frame supports 120 lbs and folds to 46 by 7.9 by 7.9 inches.\n\nIt is the least expensive canopy here and roughly half the Coleman price. Compared with the screen houses it skips mesh walls and gains a faster setup.\n\nIt suits campers who want fast open shade for a table. Reinforced foot pads steady it on grass or pavement.",
    "specs": [
      "10x10, 8.9 ft interior",
      "UPF 50+, heat-sealed seams",
      "46 in folded length"
    ],
    "pros": [
      "Lowest price of the six",
      "One-push tool-free setup",
      "Folds to 46 inches long",
      "Reinforced foot pads"
    ],
    "cons": [
      "No walls or mesh",
      "Coating only repels light rain"
    ],
    "bestFor": "Budget table shade",
    "take": "A basic one-push canopy at the lowest price.",
    "catch": "Bugs and rain call for a different shelter."
  }
];

export const howWeEvaluated = [
  {
    "title": "Canopy or screen house",
    "description": "Open shade tops and mesh-walled screen rooms were separated by what they protect against."
  },
  {
    "title": "Frame and setup",
    "description": "One-push hubs, pop-up ribs and manual frames were compared by effort."
  },
  {
    "title": "Fabric and rain",
    "description": "Denier, UPF rating and any not-waterproof warnings were noted."
  },
  {
    "title": "Floor size",
    "description": "Footprints from 10x10 to 13x13 ft were compared."
  },
  {
    "title": "Pack weight and bag",
    "description": "Packed size and listed weight decided portability."
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
    "subheading": "By Camping Problem",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Sun on a picnic table",
          "Coleman Oasis OnePeak Canopy",
          "OnePeak hub and vented roof."
        ],
        [
          "Bugs and privacy",
          "Aoxun 12x12 Pop-Up Gazebo",
          "Six wind cloths and mesh."
        ],
        [
          "Bug-free eating that can open up",
          "VEVOR 10x10 Six-Sided Gazebo",
          "Door panels double as shades."
        ],
        [
          "Hauling gear on foot",
          "Alvantor Lightweight Hexagon Screen House",
          "Only 15 lbs."
        ],
        [
          "Large group on a budget",
          "CAMPROS 13x13 Screen House",
          "134 sq ft of shade."
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
          "$70 to $80",
          "Vinabilia One-Push Blue Canopy or CAMPROS 13x13 Screen House"
        ],
        [
          "$130 to $140",
          "Alvantor Lightweight Hexagon Screen House or VEVOR 10x10 Six-Sided Gazebo"
        ],
        [
          "$130 to $170",
          "Aoxun 12x12 Pop-Up Gazebo or Coleman Oasis OnePeak Canopy"
        ]
      ]
    }
  },
  {
    "subheading": "Canopy vs Screen House",
    "cards": [
      {
        "label": "Canopy",
        "text": "Coleman Oasis OnePeak Canopy and Vinabilia One-Push Blue Canopy block sun and light rain and pitch in seconds."
      },
      {
        "label": "Screen house",
        "text": "Aoxun 12x12 Pop-Up Gazebo, VEVOR 10x10 Six-Sided Gazebo, Alvantor Lightweight Hexagon Screen House and CAMPROS 13x13 Screen House keep insects out."
      }
    ],
    "note": "Choose Coleman Oasis OnePeak Canopy for sun, and VEVOR 10x10 Six-Sided Gazebo when bugs matter."
  },
  {
    "subheading": "By Group Size",
    "table": {
      "headers": [
        "Group",
        "Recommended pick"
      ],
      "rows": [
        [
          "Four or five people",
          "VEVOR 10x10 Six-Sided Gazebo"
        ],
        [
          "Six to eight people",
          "Aoxun 12x12 Pop-Up Gazebo"
        ],
        [
          "Eight or more people",
          "CAMPROS 13x13 Screen House"
        ],
        [
          "A table and chairs",
          "Vinabilia One-Push Blue Canopy"
        ]
      ]
    }
  },
  {
    "subheading": "For Mosquito Season Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "full mesh walls, a zippered entrance and a gap-free base"
      },
      {
        "label": "In this comparison",
        "text": "Alvantor Lightweight Hexagon Screen House has double side zippers on its mesh, while Aoxun 12x12 Pop-Up Gazebo adds six wind cloths."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you camp most weekends, because Coleman Oasis OnePeak Canopy brings a vented roof and an easy takedown. Aoxun 12x12 Pop-Up Gazebo is worth it if privacy matters."
      },
      {
        "label": "Save if",
        "text": "Save with Vinabilia One-Push Blue Canopy or CAMPROS 13x13 Screen House if you camp occasionally. Both give shade at the lowest prices."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Canopy or screen house",
    "explanation": "A canopy is an open roof on legs that blocks sun and light rain. A screen house adds mesh walls that block insects but not wind. Pick by whether bugs or sun are the bigger problem."
  },
  {
    "criterion": "Frame style",
    "explanation": "One-push frames open from a center hub in seconds. Pop-up rib frames fold flat and spring open. Manual frames take several people. Check how many people the listing says setup needs."
  },
  {
    "criterion": "Fabric and waterproofing",
    "explanation": "Denier tells fabric weight, so 300D beats 190T for durability. Some screen house tops are sold as not waterproof. Look for any not rainproof warning."
  },
  {
    "criterion": "Floor size",
    "explanation": "Bigger floor means more shade for chairs and tables. A 10x10 ft canopy holds a table and four chairs, and a 13x13 ft screen house holds much more. Match the footprint to the group."
  },
  {
    "criterion": "Wind rating",
    "explanation": "Open canopies catch wind like sails. A listed rating, like 35 mph when staked, is a conditional claim. Stake every leg and use the guy lines."
  },
  {
    "criterion": "Pack size",
    "explanation": "Pop-up screen houses pack in long bags. A 10x10 canopy folds to 46 inches. Check dimensions against your trunk."
  }
];

export const faq = [
  {
    "q": "Do camping canopies need stakes?",
    "a": "Yes. Open canopies lift in wind. Coleman only lists its 35 mph rating when fully staked with guy lines."
  },
  {
    "q": "What is the common canopy mistake?",
    "a": "Choosing the largest size without checking the weight and pack length. A 13x13 screen house needs three people and a long bag. Match size to your team."
  },
  {
    "q": "Is Coleman worth it over Vinabilia?",
    "a": "It costs about double and adds a vented roof, a pull-strap takedown and a wheeled bag. Vinabilia One-Push Blue Canopy provides basic shade. Pay for Coleman if you set up often."
  },
  {
    "q": "How do I set up a one-push canopy?",
    "a": "Spread the frame, then push the center hub until the legs lock. Set the leg height and stake the corners. It takes about a minute."
  },
  {
    "q": "How do I clean a canopy?",
    "a": "Wipe it with a damp cloth and dry it fully before folding. Never store it wet. Sap and bird droppings are easiest to remove while fresh."
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
