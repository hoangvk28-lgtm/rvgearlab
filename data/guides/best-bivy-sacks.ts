export const guideSlug = "best-bivy-sacks";
export const guideTitle = "4 Best Bivy Sacks in 2026";
export const metaTitle = "Best Bivy Sacks in 2026";
export const metaDescription = "Best bivy sacks compared on listed size, weight and heat-reflecting material, for hikers and car campers who want a packable emergency or backup shelter.";
export const mainKeyword = "best bivy sacks";
export const introParagraphs = [
  "Most bivy sacks sold at low prices are reflective mylar sleeves built to hold body heat in an emergency, not breathable weather shells for nightly sleeping. That is a useful tool, but it changes what to look for, namely length, width, weight and what comes in the pack.",
  "Four sacks are ranked here after their listings were compared on dimensions, stated weight, material and extras such as whistles or head covers. Where several pack sizes of one product exist, they are treated as one pick."
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
    "id": "best-bivy-sacks-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Sierra Madre Emergency Sleeping Bag",
    "price": "$79.20",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41IzgoS3ixL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F22XTWLB?tag=rvgearlab-20",
    "description": "The Sierra Madre thermal bivy is made from PET mylar that reflects 90% of body heat, weighs about 6 ounces on its listing and packs into a drawstring stuff sack. It is sold in packs of 1, 2 or 10, so one design covers a single kit or a group.\n\nIt is one of the few listings that states a weight and calls the bag durable and reusable, which the Zmoon and NovaMedic listings do not. The pack-of-10 option also suits groups and classrooms.\n\nIt fits hikers and drivers who want one dependable emergency layer in a pack or glove box. The drawstring stuff sack keeps repacking simple.",
    "specs": [
      "Reflects 90% of body heat",
      "About 6 oz",
      "Packs of 1, 2 or 10"
    ],
    "pros": [
      "About 6 ounces on the listing",
      "Reusable with drawstring stuff sack",
      "Waterproof and windproof mylar",
      "Sold in several pack sizes"
    ],
    "cons": [
      "Thin mylar tears if snagged",
      "Size in inches is not stated"
    ],
    "bestFor": "Single-person backup layer",
    "take": "A light, reusable mylar bivy with pack sizes from one to ten.",
    "catch": "Mylar is thin, and the listing gives no length and width."
  },
  {
    "id": "best-bivy-sacks-2",
    "rank": 2,
    "badge": "Best for Signaling",
    "name": "Emergency Sleeping Bag Survival Bag 2 Pack",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51vClL5A6AL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01HGV8R50?tag=rvgearlab-20",
    "description": "The Leberna sack measures 84 x 36 inches, with a 21 inch wide head cover and a bright black strip on the edge for visibility. A 120 decibel whistle is included, and each pack weighs 2.8 oz (3.0 oz with the carry bag).\n\nIt beats the Sierra Madre on listed length and signaling features, and it also lists a head cover the Zmoon does not. Its 2.8 oz per bag is the lowest stated weight in this list.\n\nIt suits car kits and hiking packs where an alert tool counts as much as warmth. The two-pack size covers a couple.",
    "specs": [
      "84 x 36 inches, 2 pack",
      "2.8 oz each",
      "120 dB whistle"
    ],
    "pros": [
      "Large 84 inch length for tall adults",
      "Head cover pulls over the head",
      "Whistle for calling help",
      "Each bag has its own drawstring pouch"
    ],
    "cons": [
      "Mylar is thin by design",
      "Not a breathable overnight bag"
    ],
    "bestFor": "Signaling and head coverage",
    "take": "A longer bivy with a head cover and a whistle in the pack.",
    "catch": "The listing itself warns that the mylar is very thin."
  },
  {
    "id": "best-bivy-sacks-3",
    "rank": 3,
    "badge": "Best Two-Pack Value",
    "name": "NovaMedic Emergency Sleeping Bag 2 Pack",
    "price": "$14.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41lR9wQvGUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H1Y1L2DQ?tag=rvgearlab-20",
    "description": "The NovaMedic bivy is an 84 x 36 inch mylar sack sold as two individually packed bags. It folds small for glove boxes, bug-out bags and travel luggage, and it blocks wind and rain as a thermal layer.\n\nIt matches the Leberna on size and pack count, and it ranks lower because the listing names no whistle or head cover. It costs less than the Leberna and the Sierra Madre two-pack.\n\nIt fits budget-minded households that want two bags, one for the car and one for the pack. The simple design keeps the weight down.",
    "specs": [
      "84 x 36 inches",
      "Two individually packed bags",
      "Thermal mylar, wind and rain"
    ],
    "pros": [
      "Large 84 inch size for adults",
      "Two bags, each packed separately",
      "Folds small for a glove box",
      "Low price for a two-pack"
    ],
    "cons": [
      "No whistle or head cover listed",
      "No weight figure on the listing"
    ],
    "bestFor": "Car plus pack pairing",
    "take": "A plain two-pack that keeps one bag in the car and one on you.",
    "catch": "It gives no listed weight, whistle or extras."
  },
  {
    "id": "best-bivy-sacks-4",
    "rank": 4,
    "badge": "Best Wide Cut",
    "name": "Zmoon Emergency Sleeping Bags 2 Pack Portable Waterproof Thermal Bivy Sacks",
    "price": "$11.30",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oJvyEjrZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07VLY4558?tag=rvgearlab-20",
    "description": "The Zmoon bivy unfolds to 78 x 47 inches, a wider cut than the 36 inch bags, and its mylar foil reflects 95% of body heat. It comes with a small carry bag and is sold as a 2 pack or 4 pack.\n\nWidth is the point against the Sierra Madre and Leberna, which are longer and narrower, so larger campers can turn inside it. The 78 inch length is shorter than the 84 inch picks, which matters for tall users.\n\nIt suits hikers who want room to move, or a wrap that works as a blanket for two. The 4 pack suits family kits.",
    "specs": [
      "78 x 47 inches",
      "Reflects 95% of body heat",
      "Sold in 2 or 4 packs"
    ],
    "pros": [
      "Wider cut for more movement",
      "Higher stated heat reflection",
      "Works as a bivy or blanket",
      "Low cost, multi-pack options"
    ],
    "cons": [
      "Shorter length for tall adults",
      "No weight listed"
    ],
    "bestFor": "Wide cut for movement",
    "take": "A wider bag for people who dislike a snug mylar sleeve.",
    "catch": "At 78 inches long, taller users will find the foot end tight."
  }
];

export const howWeEvaluated = [
  {
    "title": "Size in inches",
    "description": "Length and width were compared against an average and a tall adult."
  },
  {
    "title": "Stated weight",
    "description": "Listed ounces were compared because weight decides what ends up in a pack."
  },
  {
    "title": "Material and heat reflection",
    "description": "Material type and percent of body heat reflected were read for each listing."
  },
  {
    "title": "Extras in the pack",
    "description": "Whistles, head covers and carry bags were counted as real value."
  },
  {
    "title": "Pack quantity",
    "description": "Pack sizes were weighed against price for solo and group use."
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
    "subheading": "By Use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Single reusable backup in a pack",
          "Sierra Madre Bivy",
          "Reusable design with a stated 6 ounces."
        ],
        [
          "Car kit with signaling",
          "Leberna Bivy",
          "Includes a whistle and a head cover."
        ],
        [
          "Two bags on a budget",
          "NovaMedic Bivy",
          "Two individually packed 84 x 36 inch bags."
        ],
        [
          "Larger or restless sleepers",
          "Zmoon Bivy",
          "78 x 47 inch cut gives more room."
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
          "Zmoon Bivy or NovaMedic Bivy"
        ],
        [
          "$10 to $80",
          "Leberna Bivy or Sierra Madre Bivy"
        ]
      ]
    }
  },
  {
    "subheading": "Single Pack vs Multi-Pack",
    "cards": [
      {
        "label": "Single or pair",
        "text": "The Sierra Madre Bivy and Leberna Bivy sell small packs that suit one person or a couple and keep the weight low."
      },
      {
        "label": "Multi-pack",
        "text": "The Zmoon Bivy, NovaMedic Bivy and larger Sierra Madre packs cost less per bag, which suits families, vehicles and group first-aid kits."
      }
    ],
    "note": "Most solo hikers should buy one Sierra Madre Bivy and keep the rest of the budget for a proper sleeping bag."
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
          "Lowest cost per bag",
          "Zmoon Bivy"
        ],
        [
          "Two bags, simple",
          "NovaMedic Bivy"
        ],
        [
          "Extras included",
          "Leberna Bivy"
        ],
        [
          "Larger pack counts",
          "Sierra Madre Bivy"
        ]
      ]
    }
  },
  {
    "subheading": "For Car Emergency Kits Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A long 84 inch bag, a whistle, and a drawstring pouch that fits a glove box."
      },
      {
        "label": "In this comparison",
        "text": "The Leberna Bivy lists a whistle and head cover, and the NovaMedic Bivy lists two individually packed bags."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Sierra Madre Bivy for its reusable design and pack options, or the Leberna Bivy for the whistle and head cover."
      },
      {
        "label": "Save if",
        "text": "Save with the Zmoon Bivy or NovaMedic Bivy if you only need basic heat reflection."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Mylar vs breathable shell",
    "explanation": "A mylar sack is a thin reflective film that traps heat and blocks wind but does not breathe, so sweat condenses inside. A breathable bivy shell is a cover for a sleeping bag. Look at the listing for whether the sack is mylar or a fabric shell, since the two serve different jobs."
  },
  {
    "criterion": "Length and width",
    "explanation": "A bivy that is too short leaves feet outside and one that is too narrow constricts shoulders. Adults over 6 ft need roughly 84 inches. Check the length and width in inches in the listing, since many only state one pack count."
  },
  {
    "criterion": "Condensation",
    "explanation": "Without ventilation, body moisture builds up inside a mylar sack and soaks clothing. Leave a gap at the face and dress in dry layers. Look for words about ventilation or a loose head opening."
  },
  {
    "criterion": "Weight and pack size",
    "explanation": "Emergency bivies weigh a few ounces and fold smaller than a fist. A listing that gives weight per bag is more useful than one that only gives the pack weight. Check whether the number covers one bag or the whole set."
  },
  {
    "criterion": "Durability",
    "explanation": "Mylar is thin and can tear on rocks or sticks. Reusable claims mean careful handling, not rugged use. Put a groundsheet or pad under the bag and check for taped or reinforced seams in the description."
  },
  {
    "criterion": "Extras that matter",
    "explanation": "A whistle, a drawstring pouch or a head cover can matter in a real emergency. A reflective color helps rescuers spot you. Check the listing for these extras and count them as part of the price comparison."
  }
];

export const faq = [
  {
    "q": "Can I sleep in a mylar bivy every night?",
    "a": "They are built for emergencies, not nightly use. They do not breathe, so condensation builds up. The Sierra Madre Bivy is reusable but still thin."
  },
  {
    "q": "What is the common mistake?",
    "a": "Packing one and never opening it. Practice getting in once at home so you know how it feels. Dress in dry layers first."
  },
  {
    "q": "Is the Leberna worth it over the NovaMedic?",
    "a": "The Leberna adds a whistle, a head cover and a visibility strip for little extra money. Choose it if you will use the kit in a vehicle or on the trail. The NovaMedic suits plain heat retention."
  },
  {
    "q": "How do I use a mylar bivy sack correctly?",
    "a": "Unroll it, slide in feet first and leave a small gap at the face for air. Put insulation between you and the ground. Pull the head cover on if your bag has one."
  },
  {
    "q": "How do I store a bivy sack?",
    "a": "Fold it along the original creases and keep it in its pouch. Avoid hot cars for months, since heat degrades thin film. Check for tears every season."
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
