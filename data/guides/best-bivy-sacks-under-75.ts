export const guideSlug = "best-bivy-sacks-under-75";
export const guideTitle = "5 Best Bivy Sacks Under 75 in 2026";
export const metaTitle = "Best Bivy Sacks Under 75 in 2026";
export const metaDescription = "Best bivy sacks under $75, compared on waterproof breathability, seams, weight and shelter type, from a military-spec cover to a 2.9 lb bivy tent.";
export const mainKeyword = "best bivy sacks under 75";
export const introParagraphs = [
  "Seventy-five dollars is where bivy sacks stop being emergency foil and start being real shelter: breathable waterproof covers, sealed seams and one-person bivy tents. The big choice is whether you want a cover for your sleeping bag or a small tent that holds you inside.",
  "Five picks fit the cap, ordered by how much dependable weather protection each gives. Prices sit near the top for the two headline picks, and the cheaper two cover specific jobs."
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
    "id": "best-bivy-sacks-under-75-1",
    "rank": 1,
    "badge": "Best Military-Spec Cover",
    "name": "Genuine U.S. Military Modular Sleep System Waterproof Bivy Cover",
    "price": "$74.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41F51mvzKeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H6Y8YKXD?tag=rvgearlab-amz-20",
    "description": "This bivy cover is built by Tennier Industries in the USA under NSN 8465-01-547-2644 and made to fit over modular sleeping bag systems. It uses a moisture-vapor permeable waterproof fabric, heat-sealed seams and a 2-way side zipper for ventilation from top or bottom.\n\nAmong these five it is the only one made to a military specification, which shows in the sealed seams and breathable fabric. The GEERTOP is a full tent and weighs more, while this stays a lean shell that slips over a bag and pad.\n\nIt suits campers with a bulky winter bag who want a breathable weather shell without carrying a tent. Pair it with a ground sheet in wet grass.",
    "specs": [
      "Made in USA by Tennier",
      "Breathable waterproof fabric",
      "Heat-sealed seams, 2-way zipper"
    ],
    "pros": [
      "Breathable fabric lowers condensation",
      "Heat-sealed seams add durability",
      "2-way zipper adjusts airflow",
      "Fits modular and cold-weather bags"
    ],
    "cons": [
      "Costs the most in this group",
      "Needs a ground sheet on rough soil"
    ],
    "bestFor": "Winter and wet-weather sleeping bags",
    "take": "The best bivy cover for the money if you value breathable, sealed construction.",
    "catch": "Look up the packed weight before taking it on a long hike."
  },
  {
    "id": "best-bivy-sacks-under-75-2",
    "rank": 2,
    "badge": "Best Bivy Tent",
    "name": "GEERTOP Ultralight Bivy Tent",
    "price": "$74.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41FfqMrO6uL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DTKDG5MY?tag=rvgearlab-amz-20",
    "description": "The GEERTOP is a one-person bivy tent weighing 2.9 pounds and packing to 17 by 5 by 5 inches. It has a PU5000 rainfly and a PU8000 floor with taped, double-stitched seams, plus a 3-pole frame and a top mesh panel.\n\nNext to the Military Modular Bivy, it gives you actual headroom, with 84.6 by 29.5 inches of floor and a 24 inch height. It also pitches in about two minutes with shock-corded aluminum poles.\n\nIt suits solo backpackers who want a true shelter in rain and wind. The mesh panel and wind vents manage condensation on warm nights.",
    "specs": [
      "2.9 lb one-person bivy tent",
      "PU5000 fly, PU8000 floor",
      "84.6x29.5x24 inch interior"
    ],
    "pros": [
      "Taped seams and strong waterproof ratings",
      "Headroom of 24 inches",
      "Two-minute pitch with a 3-pole frame",
      "Mesh panel and vents for airflow"
    ],
    "cons": [
      "Heavier than a bivy cover",
      "Only fits one person"
    ],
    "bestFor": "Solo backpackers needing real shelter",
    "take": "The strongest weather shelter in the group, and a good fit for wet climates.",
    "catch": "At 2.9 pounds it is much heavier than the other four."
  },
  {
    "id": "best-bivy-sacks-under-75-3",
    "rank": 3,
    "badge": "Best Ultralight Bug Bivy",
    "name": "HIKEBURGER Sleeping Bag Survival Bivy Sack",
    "price": "$47.29",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21AtONV+KTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F3CWVH38?tag=rvgearlab-amz-20",
    "description": "The HIKEBURGER bivy sack weighs 0.56 pounds and uses mesh, 20D nylon and a silicone-coated 40D nylon base. It measures 78.74 by 23.62 by 19.68 inches and packs to about 7.9 by 3.9 by 3.3 inches.\n\nIt weighs about a fifth of the GEERTOP and fits in a coat pocket. It leans on a tarp for rain, where the GEERTOP has its own rainfly.\n\nIt suits ultralight hikers who sleep under a tarp in insect season. A foam pad fits better inside than an inflatable pad.",
    "specs": [
      "0.56 lb mesh and nylon bivy",
      "78.74x23.62x19.68 inches",
      "Packs to about 8x4x3 inches"
    ],
    "pros": [
      "Only 0.56 pounds",
      "Mesh blocks insects",
      "Tiny pack size",
      "Pairs with any tarp"
    ],
    "cons": [
      "Snug interior",
      "Needs a tarp for rain"
    ],
    "bestFor": "Ultralight summer trips",
    "take": "The lightest shelter here and a smart pick for hot, buggy nights.",
    "catch": "A tight interior makes thick pads and puffy jackets a squeeze."
  },
  {
    "id": "best-bivy-sacks-under-75-4",
    "rank": 4,
    "badge": "Best Tyvek Cover",
    "name": "Sleeping Bag Liner",
    "price": "$49.88",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41cmsfLjXOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B085WZL9G5?tag=rvgearlab-amz-20",
    "description": "Cut from DuPont Tyvek, this cover from 3F UL Gear is sold as Type A (180 by 80 centimeters, about 130 grams) or Type B (230 by 90 centimeters, about 200 grams). Either one rolls to roughly 16 by 8.5 centimeters.\n\nLightest of the five, it is also the cheapest way to keep tent condensation off a sleeping bag. The Military Modular Bivy adds heavy-duty weather protection, while this cover adds a thin breathable layer.\n\nIt suits tent campers who want to keep a down bag dry. Use it inside a tent or under a tarp, since it is not a stand-alone shelter.",
    "specs": [
      "DuPont Tyvek, 130g or 200g",
      "Two sizes, 180x80 or 230x90 cm",
      "Folds to 16x8.5 cm"
    ],
    "pros": [
      "Ultralight 130 gram option",
      "Breathable fabric reduces condensation",
      "Folds very small",
      "Two sizes for different bags"
    ],
    "cons": [
      "Needs a sleeping bag",
      "No insulation added"
    ],
    "bestFor": "Condensation control in a tent",
    "take": "A light, simple layer for a sleeping bag you already own.",
    "catch": "Not a rain shelter by itself."
  },
  {
    "id": "best-bivy-sacks-under-75-5",
    "rank": 5,
    "badge": "Best Basic Cover",
    "name": "Waterproof Bivy",
    "price": "$69.92",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/317DDBx2zXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HM6JTFTR?tag=rvgearlab-amz-20",
    "description": "This bivy is a sleeping bag liner cover that serves as an inner layer and an outer protective shell. Its surface repels water splashes, blocks dust and debris, and has a simple structure for quick setup.\n\nIt costs less than the Military Modular Bivy and is simpler, with no vent zipper or sealed seams listed. It suits light weather and splash protection over a sleeping bag.\n\nIt suits camping in a tent or shelter where you want an extra layer between your bag and the ground. Use it as a liner on cool nights.",
    "specs": [
      "Liner and outer cover",
      "Repels water splashes",
      "Quick, simple setup"
    ],
    "pros": [
      "Works as both liner and shell",
      "Repels splashes and dust",
      "Simple to set up",
      "Lower price than the military shell"
    ],
    "cons": [
      "Few construction details given",
      "Not for heavy rain"
    ],
    "bestFor": "Light weather protection",
    "take": "A basic, low-fuss cover for mild nights.",
    "catch": "The maker gives little detail about size or seams, so compare it to your bag first."
  }
];

export const howWeEvaluated = [
  {
    "title": "Shelter or cover",
    "description": "Compared a bivy tent, a mesh bivy, a Tyvek cover and two bag covers by the job they do."
  },
  {
    "title": "Seams and ratings",
    "description": "Looked at heat-sealed or taped seams and stated waterproof ratings such as PU5000 and PU8000."
  },
  {
    "title": "Weight and pack size",
    "description": "Compared weights from 130 grams to 2.9 pounds and packed sizes."
  },
  {
    "title": "Airflow and condensation",
    "description": "Weighed breathable fabric, vents and mesh against how much moisture each design traps."
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
    "subheading": "By trip",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Winter or wet weather with a thick bag",
          "Military Modular Bivy",
          "Breathable waterproof shell with sealed seams."
        ],
        [
          "Solo trip in rain and wind",
          "GEERTOP Bivy Tent",
          "PU5000 fly, PU8000 floor and a pole frame."
        ],
        [
          "Ultralight summer under a tarp",
          "HIKEBURGER Mesh Bivy",
          "0.56 pounds with mesh."
        ],
        [
          "Condensation in a tent",
          "3F UL Gear Tyvek Cover",
          "130 gram breathable layer."
        ],
        [
          "Mild nights, basic cover",
          "Waterproof Bivy Liner Cover",
          "Splash protection at a lower price."
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
          "HIKEBURGER Mesh Bivy or 3F UL Gear Tyvek Cover"
        ],
        [
          "$60 to $80",
          "Waterproof Bivy Liner Cover or GEERTOP Bivy Tent"
        ],
        [
          "$70 to $80",
          "Military Modular Bivy"
        ]
      ]
    }
  },
  {
    "subheading": "Cover vs bivy tent",
    "cards": [
      {
        "label": "Cover",
        "text": "A cover like the Military Modular Bivy slips over your bag and weighs little, which suits mild or wet nights. It has no headroom."
      },
      {
        "label": "Bivy tent",
        "text": "A bivy tent like the GEERTOP Bivy Tent has poles, headroom and a rainfly. It weighs 2.9 pounds and takes about two minutes to pitch."
      }
    ],
    "note": "Most campers should start with a cover like the Military Modular Bivy and choose the GEERTOP Bivy Tent when they expect long rain."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Around $47",
          "HIKEBURGER Mesh Bivy"
        ],
        [
          "Around $50",
          "3F UL Gear Tyvek Cover"
        ],
        [
          "Around $70",
          "Waterproof Bivy Liner Cover"
        ],
        [
          "Around $74 tent",
          "GEERTOP Bivy Tent"
        ],
        [
          "Around $75 cover",
          "Military Modular Bivy"
        ]
      ]
    }
  },
  {
    "subheading": "For rainy climates specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for taped seams, a PU rating of 5000 or more and a rainfly."
      },
      {
        "label": "In this comparison",
        "text": "The GEERTOP Bivy Tent has PU5000 and PU8000 ratings and taped seams, and the Military Modular Bivy has heat-sealed seams."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you expect long rain and want headroom, which means the GEERTOP Bivy Tent. If you need a breathable cover for a thick bag, the Military Modular Bivy is the better value."
      },
      {
        "label": "Save if",
        "text": "Save if you camp in mild conditions, because the HIKEBURGER Mesh Bivy and 3F UL Gear Tyvek Cover cost less than $50 each."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Seam construction",
    "explanation": "Seams are where a waterproof fabric leaks, because each stitch makes a tiny hole. Heat-sealed or taped seams close those holes. Look for the words sealed, taped or double-stitched in the title or specs, and treat their absence as a reason to carry a tarp."
  },
  {
    "criterion": "Waterproof ratings",
    "explanation": "A PU rating in millimeters, such as PU5000 for a rainfly and PU8000 for a floor, shows how much water pressure the fabric resists. Floors need higher numbers because your weight presses water through. Look for both numbers, and accept lower numbers only if you will use a tarp."
  },
  {
    "criterion": "Breathability",
    "explanation": "A fully waterproof shell traps body moisture and makes your bag damp by morning. Breathable membranes, vents and Tyvek let vapor out. Look for moisture-vapor permeable or breathable in the description. Fabric that only says waterproof is usually sealed and will leave you damp by morning on a cold night."
  },
  {
    "criterion": "Weight versus shelter",
    "explanation": "A bivy cover can weigh under a pound, while a bivy tent runs about 3 pounds and offers headroom. If you hike far, every ounce counts. Decide whether you need a place to sit up and change clothes, because that headroom is what the extra 2 pounds buys, and use the shell for everything else."
  },
  {
    "criterion": "Bag fit",
    "explanation": "A bivy must fit your sleeping bag and pad without squeezing the insulation. Check the stated length and width against your bag's packed dimensions. A modular bag needs a larger shell than a slim mummy bag, so measure the stuffed width of your bag before you order."
  }
];

export const faq = [
  {
    "q": "What is a modular sleep system?",
    "a": "It is a layered military sleeping bag set that includes a patrol bag, an intermediate cold-weather bag and a bivy cover. The Military Modular Bivy is built as the outer cover for that system. It also works with standard bags that fit inside, as long as the bag and pad together are not wider than the shell. Measure your stuffed bag before you order."
  },
  {
    "q": "Is a bivy tent warmer than a regular tent?",
    "a": "A bivy tent has a small interior, so your body heat warms it faster than a large tent. The GEERTOP Bivy Tent has a mesh panel that you can open for airflow. It is not insulated, so you still need a proper sleeping bag."
  },
  {
    "q": "Do I need a ground sheet under a bivy?",
    "a": "A ground sheet protects the floor from wet grass and abrasion, and it extends the life of a thin bivy. A cheap tarp or Tyvek sheet is enough. The Military Modular Bivy is most vulnerable on rough ground."
  },
  {
    "q": "How do I reduce condensation in a bivy?",
    "a": "Open vents, leave the hood loose and avoid exhaling inside the bag. Pitching in a breezy spot helps. A mesh panel like the one on the GEERTOP Bivy Tent lets damp air escape, so leave it open unless rain is blowing sideways."
  },
  {
    "q": "How should I clean and store a bivy?",
    "a": "Wipe off dirt with a damp cloth, let it dry fully and store it loosely folded. Avoid heat and solvents that can damage seam tape. Check seams once a season for peeling, and replace seam tape if you see a lifting edge. A small repair kit makes the shell last years longer."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Bivy Sacks",
    "href": "/tents-shelter/best-bivy-sacks"
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
