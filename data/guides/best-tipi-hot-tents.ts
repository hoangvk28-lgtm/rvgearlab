export const guideSlug = "best-tipi-hot-tents";
export const guideTitle = "4 Best Tipi Hot Tents in 2026";
export const metaTitle = "Best Tipi Hot Tents in 2026";
export const metaDescription = "Best tipi hot tents with stove jacks compared on floor size, headroom, venting and setup, for cold-weather campers who want a center-pole shelter.";
export const mainKeyword = "best tipi hot tents";
export const introParagraphs = [
  "A tipi hot tent tapers to a single peak, which gives standing room in the middle and a natural place for the stovepipe to exit. That shape is why tipis are the classic stove shelter, and it also means every listing is really a question of diameter, venting and how the stove jack sits.",
  "Four tipis made this list, ranging from a two-person floorless model to a 4-8 person family shelter. Each was compared on listed floor size, door and vent layout, fabric ratings and whether an inner tent comes in the box."
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
    "id": "best-tipi-hot-tents-1",
    "rank": 1,
    "badge": "Best Two-Room Layout",
    "name": "Night Cat Tipi Hot Tent: 4 Season Family Camping Tent with Stove Jack",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31aBWfPdjvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FWRQGJNN?tag=rvgearlab-amz-20",
    "description": "The Night Cat Tipi pairs a separate outer fly with an enclosed inner sleeping room for up to three people, plus a front room for boots, furniture and firewood. It has a built-in stove jack, a full-mesh inner tent, dual doors and side mesh windows.\n\nWhere the FireHiking and Naturehike share one open floor, this one splits sleeping from living space, which keeps wet gear and stove traffic away from beds. Setup is a staked outline, a raised center pole and tightened guylines, with no pole sleeves to fight.\n\nIt suits a small family that wants a bedroom and a gear room under one roof. The double-layer build adds a rain barrier over the sleeping area.",
    "specs": [
      "Sleeps three, plus front room",
      "Built-in stove jack",
      "Full-mesh inner tent"
    ],
    "pros": [
      "Separate bedroom keeps beds clean",
      "Center-pole setup with no pole sleeves",
      "Dual doors and side mesh windows",
      "Outer fly adds a second rain layer"
    ],
    "cons": [
      "Sleeps only three in the inner room",
      "Highest price of the four tipis"
    ],
    "bestFor": "Families wanting bedroom and gear room",
    "take": "Choose it for a small family that wants a closed bedroom and a front room for boots and firewood.",
    "catch": "The inner room tops out at three sleepers, so larger groups need the FireHiking."
  },
  {
    "id": "best-tipi-hot-tents-2",
    "rank": 2,
    "badge": "Best for Groups",
    "name": "FireHiking Camping Hot Tent 4-8 Person Tipi Tent with Stove Jack for Bushcraft",
    "price": "$179.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31eAwwVm-SL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09XM8FXRF?tag=rvgearlab-amz-20",
    "description": "The FireHiking tipi lists 4 to 5 people with its semi inner tent and 4 to 8 people without it, built from 70D polyester with a 3000mm rain rating. Two opposite doors and a vent set (two mesh-covered at the top, two larger ones at the bottom) handle airflow.\n\nIt is the largest tent in this comparison, which separates it from the 2-4 person Naturehike and the 2-person Longeek. The opposing doors give a cross path for fresh air along the floor.\n\nIt suits bushcraft groups and hunting parties that cook and heat in one big shared room. The tipi shape gives the most standing space in the middle.",
    "specs": [
      "Holds 4 to 8 people",
      "70D polyester, 3000mm rated",
      "Two opposite doors"
    ],
    "pros": [
      "Biggest capacity in this list",
      "Top and bottom mesh vents",
      "Cross-flow doors on opposite sides",
      "Semi inner tent is optional"
    ],
    "cons": [
      "Larger tent needs a bigger stove plan",
      "Polyester is bulkier than nylon"
    ],
    "bestFor": "Hunting parties and shared hot-tent camps",
    "take": "A roomy tipi for a crew that wants to cook and warm up together.",
    "catch": "Bigger volume takes longer to heat, so plan fuel and stove size around the tent."
  },
  {
    "id": "best-tipi-hot-tents-3",
    "rank": 3,
    "badge": "Best Value Double-Wall",
    "name": "Naturehike Ranch Fire Teepee Tent",
    "price": "$127.20",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31s1MdOIU7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CDBYTG89?tag=rvgearlab-amz-20",
    "description": "The Naturehike Ranch Fire is a double-walled tipi that comes with a mesh inner tent and a snow skirt. Its floor runs 10.8 ft each way under a 6.9 ft peak, and the 210T flame retardant polyester shell weighs about 10.6 lb with a fire-rated stove jack.\n\nNext to the FireHiking it trims the volume and gains a snow skirt plus a stated flame-retardant fabric. Compared with the Longeek, it brings a full inner tent and two doors for a similar spend.\n\nIt suits three or four people who want a cold-weather tipi that still packs to 23.6 by 7.5 by 35 inches. Two top vent windows add airflow for warm trips.",
    "specs": [
      "10.8 ft square floor",
      "Flame retardant 210T polyester",
      "About 10.6 lb"
    ],
    "pros": [
      "Snow skirt blocks wind and drifts",
      "Flame retardant fabric on the walls",
      "Includes mesh inner tent",
      "Packs to a modest size"
    ],
    "cons": [
      "About 10.6 lb is not ultralight",
      "Smaller than the FireHiking"
    ],
    "bestFor": "Three-person cold-weather trips",
    "take": "A compact double-wall tipi with a snow skirt for two to four people.",
    "catch": "At roughly 10.6 lb it is more of a car-camp tipi than a pack-in one."
  },
  {
    "id": "best-tipi-hot-tents-4",
    "rank": 4,
    "badge": "Best Budget",
    "name": "Longeek 2 Person Camping Hot Tent 4 Season Ultralight Easy Up Teepee",
    "price": "$100.30",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21RbmDTw5gL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08PNRNF7Q?tag=rvgearlab-amz-20",
    "description": "The Longeek is an octagonal tipi with a 3.2 m maximum floor diameter and 1.6 m height, built from ripstop fabric with PU3000mm waterproofing. One window doubles as a stove jack, with two screened vents and two opposite zipper doors.\n\nIt is the cheapest tipi here and the only floorless one, which gives air circulation and more room than a four- or six-sided shape. It also includes aviation aluminum poles and 16 pegs, where others focus on fabric ratings.\n\nIt suits a solo camper or pair who wants a stove tipi at the lowest cost. It can also be pitched under a tree without the pole for extra headroom.",
    "specs": [
      "3.2 m floor diameter",
      "Ripstop, PU3000mm",
      "Aluminum poles and 16 pegs"
    ],
    "pros": [
      "Lowest price among the tipis",
      "Floorless layout improves airflow",
      "Aluminum poles included",
      "Two zipper doors and two screened vents"
    ],
    "cons": [
      "Stovepipe not included",
      "Floorless design offers no ground barrier"
    ],
    "bestFor": "Solo campers and pairs on a budget",
    "take": "The entry-level pick for two people who want a stove-ready tipi without spending much.",
    "catch": "The stovepipe is sold separately and the floorless build lets in cold ground drafts."
  }
];

export const howWeEvaluated = [
  {
    "title": "Floor size and capacity",
    "description": "Listed diameters, square footage and the sleeper ratings each seller gives."
  },
  {
    "title": "Stove jack placement",
    "description": "How each listing describes its stove jack and the fabric around it."
  },
  {
    "title": "Ventilation layout",
    "description": "Door count, top and bottom vents and mesh panels."
  },
  {
    "title": "Packed size and weight",
    "description": "Listed packed dimensions and weight where available."
  },
  {
    "title": "Inner tent and floor",
    "description": "Whether a mesh inner is included and whether the floor is open or sewn."
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
          "Solo or two on a budget",
          "Longeek 2 Person",
          "Smallest, cheapest, floorless octagon."
        ],
        [
          "Three or four campers",
          "Naturehike Ranch Fire",
          "10.8 ft footprint with a mesh inner."
        ],
        [
          "Families of three with gear",
          "Night Cat Tipi",
          "Bedroom and front room split."
        ],
        [
          "Crew of five to eight",
          "FireHiking 4-8 Person",
          "Largest tipi here."
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
          "$100 to $130",
          "Longeek 2 Person or Naturehike Ranch Fire"
        ],
        [
          "$170 to $200",
          "FireHiking 4-8 Person or Night Cat Tipi"
        ]
      ]
    }
  },
  {
    "subheading": "Floorless vs Inner Tent",
    "cards": [
      {
        "label": "Floorless open tipi",
        "text": "Longeek 2 Person and the no-inner FireHiking 4-8 Person layout trade a floor for airflow and stove flexibility. Ground cold and bugs come in, so plan a groundsheet."
      },
      {
        "label": "Inner tent plus fly",
        "text": "Night Cat Tipi and Naturehike Ranch Fire add a mesh inner for bugs and a drier sleeping zone. They give up some floor space to the inner."
      }
    ],
    "note": "Most cold-weather campers should pick the Naturehike Ranch Fire for a good balance of inner tent and cost."
  },
  {
    "subheading": "By Camp Style",
    "table": {
      "headers": [
        "Priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Packed tight on a budget",
          "Longeek 2 Person"
        ],
        [
          "Winter with a snow skirt",
          "Naturehike Ranch Fire"
        ],
        [
          "Separate bedroom and gear room",
          "Night Cat Tipi"
        ],
        [
          "Big shared cooking tent",
          "FireHiking 4-8 Person"
        ]
      ]
    }
  },
  {
    "subheading": "Safe Stove Setup Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stove jack, vent count and a maker-approved stove, plus clearance rules"
      },
      {
        "label": "In this comparison",
        "text": "Naturehike Ranch Fire pairs its jack with flame retardant cloth, while Longeek 2 Person lists a fireproof stove jack and a stovepipe-free package. Pair either with an approved stove and a CO alarm."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Night Cat Tipi if you want a closed bedroom, or on FireHiking 4-8 Person if a crew needs space for cooking and heat together."
      },
      {
        "label": "Save if",
        "text": "Save with Longeek 2 Person or Naturehike Ranch Fire, which cover one to four sleepers at a lower price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Stove jack and approved stoves",
    "explanation": "A stove jack is a heat-resistant opening for the stovepipe, positioned on the tipi wall or roof. It matters because a tipi's slanting walls bring fabric close to any chimney, and the wrong stove can scorch a wall. Use only a stove approved for the tent as general safety guidance, and look for the stove-jack wording in the listing."
  },
  {
    "criterion": "Ventilation for a stove",
    "explanation": "Vents are the openings that let fresh air in while the stove exhausts out. A sealed tipi with a burning stove can build up smoke and carbon monoxide, which is a real danger while you sleep. Count the top and bottom vents on the listing and keep one open at all times."
  },
  {
    "criterion": "Carbon monoxide alarm",
    "explanation": "Carbon monoxide is an odorless gas from any combustion heat source, and fabric tents do not remove it. A battery CO alarm hung in the tent is the only way to notice it. Treat the alarm as a required item, since no listing can promise the air stays safe."
  },
  {
    "criterion": "Floor design and ground cold",
    "explanation": "Floorless tipis breathe well but admit cold air and bugs, while sewn-in floors keep drafts out and trap moisture. This choice shapes stove traffic, sleeping layout and how you pack. Check whether the listing names a floor or says floorless."
  },
  {
    "criterion": "Pole and peg system",
    "explanation": "A center pole or telescopic pole decides how fast the tipi goes up and how it handles wind. Aluminum poles save weight and resist rust. Check the listing's pole material and peg count before choosing a windy site."
  },
  {
    "criterion": "Inner tent versus open floor",
    "explanation": "An inner mesh tent adds a bug barrier and some warmth, but it takes floor space from the stove and gear. Open floors give flexible room for cots and stoves. Look for the sleeping capacity with and without the inner."
  }
];

export const faq = [
  {
    "q": "Can I use a wood stove in any tipi?",
    "a": "Only use a stove the tent maker approves, and always keep fabric clear of the stove and pipe. A stove jack is only an opening, so clearance and a spark arrestor are your job."
  },
  {
    "q": "What is the biggest mistake with tipi hot tents?",
    "a": "Sleeping with a stove burning and every vent closed. Carbon monoxide can build up in an enclosed tent, so use a battery alarm and keep vents open."
  },
  {
    "q": "Is a bigger tipi worth it over a two-person model?",
    "a": "Only if you carry more than three people or cots. A larger tent takes more fuel and time to heat, and the Longeek 2 Person is easier to warm for a pair."
  },
  {
    "q": "How do I set up a tipi hot tent?",
    "a": "Stake the base outline, raise the center pole and tension the guylines. Then fit the stovepipe through the jack once the stove is cold and check clearance."
  },
  {
    "q": "How should I clean up after stove use?",
    "a": "Let the stove and pipe cool fully, then brush soot from the jack and wipe the fabric. Dry the tent before packing so mildew does not form."
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
