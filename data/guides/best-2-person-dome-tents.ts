export const guideSlug = "best-2-person-dome-tents";
export const guideTitle = "3 Best 2 Person Dome Tents in 2026";
export const metaTitle = "Best 2 Person Dome Tents in 2026";
export const metaDescription = "Best 2-person dome tents: three lightweight domes compared on floor size, packed weight, weather rating and ventilation for couples and solo campers.";
export const mainKeyword = "best 2 person dome tents";
export const introParagraphs = [
  "A two-person dome is the simplest shelter in camping: curved poles, a mesh inner and a fly. The differences between models come down to floor length, peak height and how much weight you carry.",
  "Three domes stay on the list because each one states a two-person size and the specs that matter, from pole type to waterproof coating. They run from a budget 1/2 person pack to a name-brand family-range dome."
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
    "id": "best-2-person-dome-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "UNP 2 Person Camping Tent Waterproof Family Dome Tent Outdoor",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JKurKZZlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08HGW1QC1?tag=rvgearlab-amz-20",
    "description": "The UNP 2-person dome measures 7 ft by 5 ft by 45 inches and weighs 4.8 pounds. A removable rainfly, two zippers, a skylight net, a larger mesh window and an interior storage pocket round out the setup, which the listing puts at 3 minutes for one person.\n\nAgainst the JELUCAMP it adds a skylight net and a storage pocket on a similar floor. The Coleman listing runs roughly twice the price.\n\nIt suits couples who want a standard two-person dome with a skylight and a fast pitch. One full air mattress fits inside.",
    "specs": [
      "7 x 5 ft, 45 in high",
      "4.8 lb carry weight",
      "Removable rainfly, skylight net"
    ],
    "pros": [
      "Fits one full air mattress",
      "Light 4.8 lb weight",
      "Skylight net and big mesh window",
      "Pitches in about 3 minutes"
    ],
    "cons": [
      "Short 7 ft floor length",
      "No stated waterproof rating"
    ],
    "bestFor": "Couples, short trips",
    "take": "A no-fuss two-person dome with a skylight net and storage pocket.",
    "catch": "At 7 ft long, a tall camper will touch the end wall."
  },
  {
    "id": "best-2-person-dome-tents-2",
    "rank": 2,
    "badge": "Best Budget Pack",
    "name": "JELUCAMP 1/2/4/6 Person Dome Tents for Camping Lightweight Backpacking Tent",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31XC6vQGRqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSC7BB38?tag=rvgearlab-amz-20",
    "description": "The JELUCAMP is a 1 to 2 person dome at 86.6 inches by 59.1 inches by 43.3 inches. PU3000 coated polyester, 7.9mm fiberglass poles and a double-layer door make up the build, and the listed weight is 4.3 pounds.\n\nIt undercuts the UNP on price and weighs less, and the floor is a few inches longer at 86.6 inches. The listing is a size family sold for 1/2/4/6 people, and the 1/2 person version is the one described.\n\nIt suits solo campers or couples who want a light, inexpensive dome with a numeric waterproof rating. The double-layer door gives mesh-only ventilation on warm nights.",
    "specs": [
      "Floor 86.6 by 59.1 inches",
      "PU3000 polyester, 7.9mm poles",
      "4.3 lb, double-layer door"
    ],
    "pros": [
      "Lowest price of the three",
      "Light 4.3 lb carry weight",
      "PU3000 rating is listed",
      "Floor runs 86.6 inches long"
    ],
    "cons": [
      "Narrow 59 inch width",
      "Listed for one or two people"
    ],
    "bestFor": "Solo and light budget trips",
    "take": "The cheapest of the three, with a PU3000 rating that the other two do not list.",
    "catch": "A 59 inch width is snug for two adults plus gear."
  },
  {
    "id": "best-2-person-dome-tents-3",
    "rank": 3,
    "badge": "Best Brand Name",
    "name": "Coleman Sundome Camping Tent with Rainfly",
    "price": "$78.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31LPn6klGSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7QLQNS5?tag=rvgearlab-amz-20",
    "description": "The Coleman Sundome is sold as a 2/3/4/6 person size family, and this listing is described as designed for two campers. WeatherTec welded corners and inverted seams, Insta-Clip pole attachments, continuous pole sleeves and Polyguard fabric make up the build.\n\nIt costs the most of the three and adds a ground vent and large windows, plus a frame the listing says withstands winds of 35 mph or more. Compared with the JELUCAMP it is a better-documented weather system and a little heavier.\n\nIt suits campers who want a recognized brand and wind documentation for a car-camping weekend. Setup is listed at about 10 minutes.",
    "specs": [
      "2/3/4/6 person size family",
      "WeatherTec welded corners",
      "Withstands 35+ mph winds"
    ],
    "pros": [
      "Welded corners and inverted seams",
      "Insta-Clip pole attachments",
      "Ground vent and large windows",
      "Wind-tested frame to 35+ mph"
    ],
    "cons": [
      "Priciest of the three",
      "Setup takes about 10 minutes"
    ],
    "bestFor": "Brand-name weekend camps",
    "take": "The best-documented weather build, for campers who prefer a known brand.",
    "catch": "It is a size family listing, so check that the two-person size is selected."
  }
];

export const howWeEvaluated = [
  {
    "title": "Floor and peak",
    "description": "Floors from 7 x 5 ft to 86.6 x 59.1 inches and peaks near 43 to 45 inches were compared."
  },
  {
    "title": "Carry weight",
    "description": "Listed weights near 4.3 to 4.8 pounds were set against packability."
  },
  {
    "title": "Weather build",
    "description": "Waterproof ratings, welded corners and seam details were checked."
  },
  {
    "title": "Ventilation",
    "description": "Mesh windows, skylight nets and ground vents were compared."
  },
  {
    "title": "Setup speed",
    "description": "Listed pitch times and pole-sleeve designs were weighed."
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
    "subheading": "By Camper Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Couple, one air mattress",
          "UNP 2-Person Dome",
          "Fits one full mattress, skylight net."
        ],
        [
          "Solo or tall sleeper",
          "JELUCAMP 1-2 Person Dome",
          "86.6 inch length, 4.3 lb."
        ],
        [
          "Weekend car camper",
          "Coleman Sundome 2-Person Dome",
          "Welded corners, 35+ mph frame."
        ],
        [
          "Cheapest start",
          "JELUCAMP 1-2 Person Dome",
          "Lowest price of the three."
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
          "$20 to $30",
          "JELUCAMP 1-2 Person Dome"
        ],
        [
          "$30 to $40",
          "UNP 2-Person Dome"
        ],
        [
          "$70 to $80",
          "Coleman Sundome 2-Person Dome"
        ]
      ]
    }
  },
  {
    "subheading": "Value Pack vs Brand Build",
    "cards": [
      {
        "label": "Value pack",
        "text": "UNP 2-Person Dome and JELUCAMP 1-2 Person Dome lead on price and light weight. They list fewer weather specifics."
      },
      {
        "label": "Brand build",
        "text": "Coleman Sundome 2-Person Dome adds welded corners and wind documentation. It costs more and weighs more."
      }
    ],
    "note": "Choose JELUCAMP 1-2 Person Dome for the budget and Coleman Sundome 2-Person Dome for a brand backed shell."
  },
  {
    "subheading": "By Floor Preference",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Longest listed floor",
          "JELUCAMP 1-2 Person Dome"
        ],
        [
          "Skylight net",
          "UNP 2-Person Dome"
        ],
        [
          "Size family choice",
          "Coleman Sundome 2-Person Dome"
        ]
      ]
    }
  },
  {
    "subheading": "For First-Time Campers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "a quick pitch, a clear weather rating and a mesh door"
      },
      {
        "label": "In this comparison",
        "text": "UNP 2-Person Dome pitches in about 3 minutes with a skylight net, while Coleman Sundome 2-Person Dome adds wind and seam documentation."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if wind and rain are likely, because Coleman Sundome 2-Person Dome documents welded corners, inverted seams and a 35+ mph frame."
      },
      {
        "label": "Save if",
        "text": "Save with JELUCAMP 1-2 Person Dome. It is the lowest priced and lightest, and it lists a PU3000 coating."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Floor length",
    "explanation": "A 7 ft floor leaves a 6 ft sleeper at the walls. Length is the dimension that matters most in a two-person dome. Look for 86 inches or more if you are tall, and check the floor line in the listing."
  },
  {
    "criterion": "Peak height",
    "explanation": "A dome peaks in the center and slopes down, so a 43 to 45 inch peak means you sit and crawl. That is fine for sleeping. Check the stated peak height before assuming standing room."
  },
  {
    "criterion": "Waterproof rating",
    "explanation": "A PU3000 coating handles normal rain while an unrated fabric is a gamble. The rating appears as a PU number in millimeters. Check the title or bullet points for it."
  },
  {
    "criterion": "Fly and ventilation",
    "explanation": "A removable rainfly lets you sleep under mesh on clear nights and add cover when it rains. A double-layer door gives the same effect at the entrance. Look for removable fly and mesh details."
  },
  {
    "criterion": "Pitch method",
    "explanation": "Continuous pole sleeves and clip-on poles cut setup time. A 10 minute setup is fine, but a one-person 3 minute pitch matters when you arrive after dark. Check the listed pitch time."
  }
];

export const faq = [
  {
    "q": "Is a 2-person dome big enough for two adults?",
    "a": "Yes for sleeping, but not for gear. Two adults on a full mattress fill a 7 x 5 ft floor. Keep bags in the vestibule or the car."
  },
  {
    "q": "What mistake do two-person dome buyers make?",
    "a": "Buying by width alone. Length decides whether tall sleepers fit. Check the floor length in inches."
  },
  {
    "q": "Is the Coleman worth over the UNP?",
    "a": "It adds welded corners, a ground vent and a wind rating at a higher cost. The UNP is lighter and simpler. Pick Coleman for wind."
  },
  {
    "q": "How do I pitch a dome tent?",
    "a": "Spread the floor, thread the poles through the sleeves and flex them upright. Clip the fly and stake the corners. One person can do it."
  },
  {
    "q": "How do I clean a dome tent?",
    "a": "Spot-clean with water and a soft sponge, and dry it fully in the shade. Avoid detergents that damage the coating. Store it loose."
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
