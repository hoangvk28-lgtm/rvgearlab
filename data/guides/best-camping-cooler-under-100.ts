export const guideSlug = "best-camping-cooler-under-100";
export const guideTitle = "5 Best Camping Cooler Under 100 in 2026";
export const metaTitle = "Best Camping Cooler Under 100 in 2026";
export const metaDescription = "Best camping coolers under $100: five soft-sided and backpack coolers compared on capacity, stated hold times, leak protection and comfort when carried.";
export const mainKeyword = "best camping cooler under 100";
export const introParagraphs = [
  "Under $100 buys a soft cooler that does its job for a weekend, not a rotomolded ice chest. The picks here are insulated bags and backpacks, and every one of them costs well under the ceiling, so the real question is what each trades away to stay cheap.",
  "We compared capacity, stated hold times, liner material and how they carry. Soft coolers lose to hard coolers on multi-day ice retention, so these are best matched to weekend trips, day hikes and car camping with a pre-chilled load."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/kitchen-campfire-skillet.webp";
export const heroImageAlt = "Breakfast cooking in a cast iron skillet over a campfire";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-camping-cooler-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "INSMEER Collapsible Soft Cooler with Hard Shell & 4 Cup Holders",
    "price": "$36.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41WkcniqaQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GL8DM2SM?tag=rvgearlab-20",
    "description": "INSMEER is a 40L collapsible cooler that holds up to 55 cans, with 8mm foam insulation and a leakproof liner. Each of its four sides is reinforced with PP boards, so it stands like a hard cooler.\n\nA rigid hard-shell top doubles as a mini table with four cup holders, which none of the backpack coolers offer. The rated 12-hour insulation is in line with the others here.\n\nChoose it for car camping when you want a bag that stands up and packs flat. The spare tabletop is a bonus at a picnic site.",
    "specs": [
      "40L, holds up to 55 cans",
      "Reinforced PP board walls",
      "Hard-shell top, 4 cup holders"
    ],
    "pros": [
      "Rigid walls stand like a hard cooler",
      "Lid doubles as a mini table",
      "Collapses flat for storage",
      "Leakproof liner, 8mm foam"
    ],
    "cons": [
      "Rated for about 12 hours",
      "Bulkier than a backpack cooler"
    ],
    "bestFor": "Car campers who want a stand-up bag",
    "take": "A soft cooler that acts like a hard one. The table lid is a real convenience.",
    "catch": "The 12-hour hold time means it needs ice swaps on a long weekend."
  },
  {
    "id": "best-camping-cooler-under-100-2",
    "rank": 2,
    "badge": "Best Large Backpack",
    "name": "Large 60 Can Insulated Waterproof Leakproof Cooler Backpack",
    "price": "$47.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-CL09WgwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GSVKVQN6?tag=rvgearlab-20",
    "description": "YOUNGOA is a 37L backpack cooler that fits up to 60 cans, with 8mm EPE foam, a 600D inner liner and a food-grade PEVA leakproof seal. Thickened shoulder straps, a chest strap and a foam back panel spread the load.\n\nIt lists 20 hours of insulation, the longest rated hold among the soft coolers here. It is bigger than the Picnic Time Zuma by a wide margin.\n\nChoose it for long walks from the car to a beach or a tailgate. The backpack carry keeps hands free.",
    "specs": [
      "37L, up to 60 cans",
      "20H insulation per listing",
      "Padded straps and back panel"
    ],
    "pros": [
      "Longest rated hold time here",
      "Leakproof PEVA liner",
      "Padded straps with chest strap",
      "Fits up to 60 cans"
    ],
    "cons": [
      "Heavy when fully loaded",
      "No hard shell for cup holders or a table"
    ],
    "bestFor": "Long carries to the beach or trailhead",
    "take": "A big, comfortable backpack for a full day out. It carries a lot of weight well.",
    "catch": "A full 37L pack is heavy and not meant for multi-day ice."
  },
  {
    "id": "best-camping-cooler-under-100-3",
    "rank": 3,
    "badge": "Best Dry-and-Wet Split",
    "name": "TOURIT 2-Zone Soft Cooler Bag",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rdJBtq8EL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGGHFG9Y?tag=rvgearlab-20",
    "description": "TOURIT has two independent side-by-side zones, so wet and dry items stay apart, in 30-can or 48-can sizes. The listing states 12-hour insulation and a heat-welded leakproof liner that is stain-resistant.\n\nThat split is the feature that sets it apart from the single-chamber Vankor. The compact size weighs 0.9 kg.\n\nChoose it for trips with sandwiches and drinks that should not share a compartment. It works as a lunch cooler too.",
    "specs": [
      "Two insulated zones",
      "30 or 48 can sizes",
      "12H insulation per listing"
    ],
    "pros": [
      "Separate zones for dry and wet",
      "Heat-welded leakproof liner",
      "Ice pack friendly",
      "Compact 30-can size weighs 0.9 kg"
    ],
    "cons": [
      "Rated for about 12 hours",
      "Two zones mean smaller compartments"
    ],
    "bestFor": "Packed lunches and drinks",
    "take": "A tidy way to keep food off wet ice. Priced low for what it does.",
    "catch": "Each zone is smaller than a single big chamber."
  },
  {
    "id": "best-camping-cooler-under-100-4",
    "rank": 4,
    "badge": "Best Budget Backpack",
    "name": "Vankor Insulated Backpack Cooler Leakproof",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/61d-LS7rKhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BDZB4XJ4?tag=rvgearlab-20",
    "description": "Vankor is an insulated backpack cooler in 33-can and 45-can sizes with leakproof PEVA insulation and an adjustable strap. It is described as compact and lightweight for travel.\n\nIt is the lowest priced pick here, and a good backpack carry costs less than the YOUNGOA. A simple layout keeps it light.\n\nChoose it if you want a basic cooler pack for day trips. It suits hikers and picnickers on a tight budget.",
    "specs": [
      "33 or 45 can sizes",
      "PEVA leakproof insulation",
      "Adjustable carry strap"
    ],
    "pros": [
      "Lowest price in the group",
      "Leakproof PEVA lining",
      "Lightweight for travel",
      "Two size options"
    ],
    "cons": [
      "No hold time stated",
      "Thin on organizing features"
    ],
    "bestFor": "Day trips on a tight budget",
    "take": "A basic, cheap backpack cooler. Fine for a day out.",
    "catch": "The listing gives no hold time, so treat it as a day cooler."
  },
  {
    "id": "best-camping-cooler-under-100-5",
    "rank": 5,
    "badge": "Best Small Pack",
    "name": "ONIVA",
    "price": "$37.07",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41g51XSunUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00GXWAV26?tag=rvgearlab-20",
    "description": "The Picnic Time Zuma is a soft backpack cooler in durable polyester that holds up to 13 cans. A top mesh section with drawstring closure holds wet clothes, and it measures 19 x 11 x 7 inches.\n\nIt is the smallest pick here and the only one with a dry storage section for gear. A cell phone pocket and air mesh straps add comfort.\n\nChoose it for a hike or a day at the lake. It works for a solo hiker or a couple.",
    "specs": [
      "Holds up to 13 cans",
      "Top mesh dry storage",
      "19 x 11 x 7 inches"
    ],
    "pros": [
      "Mesh section for wet clothes",
      "Air mesh shoulder straps",
      "Cell phone pocket",
      "Slim shape packs easily"
    ],
    "cons": [
      "Holds only about 13 cans",
      "Not for groups"
    ],
    "bestFor": "Solo hikers and couples",
    "take": "A compact pack for a day outing. It has a place for wet gear.",
    "catch": "At 13 cans, it is too small for a family weekend."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Cans and liters."
  },
  {
    "title": "Hold time",
    "description": "Rated hours."
  },
  {
    "title": "Liner",
    "description": "Leakproof PEVA."
  },
  {
    "title": "Carry",
    "description": "Straps and handles."
  },
  {
    "title": "Value",
    "description": "Price band."
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
    "subheading": "By Group and Trip Length",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Weekend for two to four",
          "INSMEER Collapsible Cooler",
          "40L with a rigid stand-up body"
        ],
        [
          "Long carry with a family",
          "YOUNGOA Backpack Cooler",
          "37L pack with a chest strap"
        ],
        [
          "Packed lunches, drinks and snacks",
          "TOURIT 2-Zone Cooler",
          "Dry and wet zones"
        ],
        [
          "Solo hike",
          "Picnic Time Zuma",
          "13 cans plus a dry mesh section"
        ],
        [
          "Cheapest day pack",
          "Vankor Backpack Cooler",
          "Lowest price here"
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
          "Vankor Backpack Cooler or TOURIT 2-Zone Cooler"
        ],
        [
          "$30 to $40",
          "INSMEER Collapsible Cooler or Picnic Time Zuma"
        ],
        [
          "$40 to $50",
          "YOUNGOA Backpack Cooler"
        ]
      ]
    }
  },
  {
    "subheading": "Backpack vs Stand-Up Bag",
    "cards": [
      {
        "label": "Backpack coolers",
        "text": "Hands-free for long carries, though they sag when half empty. YOUNGOA Backpack Cooler, Vankor Backpack Cooler and Picnic Time Zuma."
      },
      {
        "label": "Stand-up bags",
        "text": "Easier to pack and use at camp, but you carry them by handle. INSMEER Collapsible Cooler and TOURIT 2-Zone Cooler."
      }
    ],
    "note": "Most car campers should take INSMEER Collapsible Cooler, and hikers should take YOUNGOA Backpack Cooler."
  },
  {
    "subheading": "By Budget Within the Ceiling",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price",
          "Vankor Backpack Cooler"
        ],
        [
          "Mid-range bag",
          "TOURIT 2-Zone Cooler"
        ],
        [
          "Stronger build",
          "INSMEER Collapsible Cooler"
        ],
        [
          "Largest capacity",
          "YOUNGOA Backpack Cooler"
        ]
      ]
    }
  },
  {
    "subheading": "For Weekend Car Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A bag that stands up, holds a weekend of food and carries easily from car to site. Pre-chill the load and use frozen packs."
      },
      {
        "label": "In this comparison",
        "text": "INSMEER Collapsible Cooler stands like a hard cooler, and YOUNGOA Backpack Cooler lists 20 hours of insulation."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on INSMEER Collapsible Cooler or YOUNGOA Backpack Cooler for rigid walls and stronger hold times."
      },
      {
        "label": "Save if",
        "text": "Save with Vankor Backpack Cooler or Picnic Time Zuma if you only need a day pack."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Capacity versus how much you carry",
    "explanation": "A 30L to 40L bag holds 48 to 60 cans, but a full bag with ice gets heavy. Cans plus ice usually fill more volume than the can count suggests. Look for liters or can counts, and plan about half the space for ice."
  },
  {
    "criterion": "Stated hold time",
    "explanation": "A soft cooler rated for 12 to 20 hours is meant for a day or a night, not a long weekend. Hold times assume ice packs and a pre-chilled load. Check the number on the listing and treat anything unstated as a few hours."
  },
  {
    "criterion": "Leakproof liner",
    "explanation": "A heat-sealed or welded PEVA liner keeps melted ice from soaking through. Cheap stitched liners leak at the seams. Look for words like heat-welded or seamless, and avoid anything that only says water-resistant."
  },
  {
    "criterion": "Carry style",
    "explanation": "Backpack straps free your hands for a long walk, while a shoulder strap or handle suits short trips. Padding and a chest strap matter once a pack weighs 30 pounds. Check strap padding on the listing."
  },
  {
    "criterion": "Rigid versus floppy walls",
    "explanation": "A bag with reinforced walls stands upright and packs neatly, while a floppy one collapses when half full. A standing bag is easier to load and to reach into. Look for board or panel reinforcement in the description."
  },
  {
    "criterion": "Extra features",
    "explanation": "A dry compartment, a table lid or cup holders can matter more day to day than a few extra hours of ice. Features you use at every stop earn their cost, while ones that look good on the listing do not. Decide which extras fit how you camp, then look for them by name."
  }
];

export const faq = [
  {
    "q": "Is a soft cooler enough for camping under $100?",
    "a": "For a weekend car trip, yes, if you pre-chill the load and use frozen packs. For several days of ice, a hard cooler is better. Soft coolers shine for day hikes, beaches and short camping trips."
  },
  {
    "q": "How long will ice last in these coolers?",
    "a": "Listings state 12 to 20 hours for the soft coolers that give a number. Real results depend on temperature, how often you open it and how full it is. Treat the number as a best case."
  },
  {
    "q": "Is a backpack cooler worth it over a bag?",
    "a": "If you walk more than a few minutes from the car, yes. Hands-free carrying saves your arms. If you stay at the site, a stand-up bag is easier to use."
  },
  {
    "q": "How do I pack a soft cooler?",
    "a": "Chill the food and drinks the night before, put frozen packs on the bottom and sides, and pack in layers with ice on top. Keep the bag in the shade and limit openings."
  },
  {
    "q": "How do I clean and store a soft cooler?",
    "a": "Wipe the liner with mild soap and warm water, rinse and dry fully with the lid open. Collapse or fold it only when completely dry to avoid mildew."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Coolers",
    "href": "/camp-kitchen/best-camping-coolers"
  },
  {
    "title": "Best Backpacking Cookpots",
    "href": "/camp-kitchen/best-backpacking-cookpots"
  },
  {
    "title": "Best Backpacking Stoves",
    "href": "/camp-kitchen/best-backpacking-stoves"
  },
  {
    "title": "Best Camping Coffee",
    "href": "/camp-kitchen/best-camping-coffee"
  }
];
