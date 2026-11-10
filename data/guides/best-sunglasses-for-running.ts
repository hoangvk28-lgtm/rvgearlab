export const guideSlug = "best-sunglasses-for-running";
export const guideTitle = "6 Best Sunglasses For Running in 2026";
export const metaTitle = "Best Sunglasses For Running in 2026";
export const metaDescription = "Best sunglasses for running: six polarized wrap-around pairs compared for weight, bounce control, anti-fog vents and field of view on the road and trail.";
export const mainKeyword = "best sunglasses for running";
export const introParagraphs = [
  "Running is the hardest job a pair of sunglasses gets. They bounce with every stride, collect sweat and need to stay light enough that you forget they are there.",
  "These six polarized pairs were compared on weight claims, nose pad and temple grip, ventilation, lens width and what each listing says about running specifically. Straps and cases were counted too, since a run often ends with the glasses in a hand."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/hiking-backpacker-mountain.webp";
export const heroImageAlt = "Hiker with a loaded backpack climbing a mountain trail";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-sunglasses-for-running-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Lamicall Polarized Sports Sunglasses for Men Women",
    "price": "$22.79",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31BZfGqnywL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FGJMG4S1?tag=rvgearlab-20",
    "description": "The Lamicall Air Vent is a 24 g sports pair in TR90 frame material with TAC HD polarized lenses and 99.9 percent UV400 protection. Three adjustable nose pad levels, skin-friendly silicone temples and an air-vent design are all named on the listing.\n\nCompared with the DUCO Metal Frame, it weighs far less at 24 g and adds a cylindrical lens for a wider field of view. Against the Lamicall Anti-Fog, it is the same frame with a ventilation focus rather than the anti-fog description.\n\nIt is the right choice for runners who sweat heavily and want something close to weightless. The adjustable pads let you dial in the fit.",
    "specs": [
      "24 g TR90 frame",
      "TAC HD polarized, 99.9% UV400",
      "Three-level nose pads, air vents"
    ],
    "pros": [
      "Weighs only 24 g",
      "Adjustable nose pads and soft temples",
      "Cylindrical lens for wide view",
      "Hard case with clip included"
    ],
    "cons": [
      "Single pair only",
      "Costs more than the budget pairs"
    ],
    "bestFor": "Heavy sweaters and long runs",
    "take": "The lightest, most adjustable pair here. Made for long runs.",
    "catch": "It costs more than the budget picks."
  },
  {
    "id": "best-sunglasses-for-running-2",
    "rank": 2,
    "badge": "Best Anti-Fog Pick",
    "name": "Lamicall Polarized Sports Sunglasses for Men Women",
    "price": "$22.79",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31esDRcDkDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DYV8TGD1?tag=rvgearlab-20",
    "description": "The Lamicall Anti-Fog uses the same 24 g TR90 frame as the Air Vent, with TAC HD polarized lenses and 99.9 percent UV400 protection. The listing calls out an anti-fog design, along with three adjustable nose pad levels and silicone temples.\n\nIt differs from the Lamicall Air Vent only in the venting and fog emphasis, which suits runners in cool, humid conditions. Next to the FAGUMA Polarized, it is lighter and more adjustable.\n\nIt suits runners who train in early morning mist or cold air. A hardshell case with a clip comes in the set.",
    "specs": [
      "24 g TR90, anti-fog design",
      "TAC HD polarized, 99.9% UV400",
      "Three-level nose pads"
    ],
    "pros": [
      "Anti-fog design for cool runs",
      "Same featherweight 24 g frame",
      "Adjustable nose pads",
      "Hardshell case with clip"
    ],
    "cons": [
      "Near-twin of the Air Vent listing",
      "Single pair only"
    ],
    "bestFor": "Cool, humid morning runs",
    "take": "The Air Vent frame, aimed at fog-prone runs.",
    "catch": "It is nearly the same product as the Air Vent."
  },
  {
    "id": "best-sunglasses-for-running-3",
    "rank": 3,
    "badge": "Best Durable Frame",
    "name": "DUCO Mens Sports Polarized Sunglasses UV Protection Sunglasses for Men 8177",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Bms2bX6jL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00SMRN2DU?tag=rvgearlab-20",
    "description": "The DUCO Metal Frame is a semi-rimless sports pair with an Al-Mg metal alloy frame that the listing calls unbreakable and corrosion resistant. TAC polarized lenses with a UV400 coating, adjustable soft nose pads and a flexible metal hinge round out the design.\n\nIts 68 mm wide lens and 144 mm frame give more coverage than the Lamicall pairs. Against the FAGUMA Polarized, it adds a case with a carabiner and a metal frame instead of plastic.\n\nIt suits runners with larger faces who want a metal frame that handles drops. The carabiner case clips to a bag.",
    "specs": [
      "Al-Mg metal alloy frame",
      "TAC polarized, UV400",
      "68 mm lens, 144 mm frame"
    ],
    "pros": [
      "Metal frame resists corrosion",
      "Adjustable soft nose pads",
      "Wide 68 mm lens for coverage",
      "Case with carabiner included"
    ],
    "cons": [
      "Metal is heavier than TR90",
      "Semi-rimless leaves lens edges open"
    ],
    "bestFor": "Larger faces and rough use",
    "take": "A metal frame that suits larger faces and rough handling.",
    "catch": "Heavier than the Lamicall plastic frames."
  },
  {
    "id": "best-sunglasses-for-running-4",
    "rank": 4,
    "badge": "Best Multi-Pack",
    "name": "Foliful Sports Polarized Sunglasses Men Women for Running Baseball Hiking",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41uqd7YYN+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FMNKCGSM?tag=rvgearlab-20",
    "description": "The Foliful 3-Pack gives three pairs of sporty wrap-around polarized sunglasses that the listing names for running, baseball and hiking. A widened curved lens aims to remove blind spots, and an adjustable strap keeps the frame in place.\n\nEach pair comes with a pouch and polarization test card, plus one case and one cloth for the set. Compared with the Lamicall pairs, it offers three pairs and a strap instead of ultra-light specs.\n\nIt is a smart buy for runners who run with a group, or who want spares for the car and gym bag. The strap helps on rough ground.",
    "specs": [
      "Three polarized wrap-arounds",
      "Curved lens, wide vision",
      "Adjustable strap, test cards"
    ],
    "pros": [
      "Three pairs in one order",
      "Adjustable strap steadies the fit",
      "Curved lens widens vision",
      "Named for running and hiking"
    ],
    "cons": [
      "Weight is not listed",
      "Single case for three pairs"
    ],
    "bestFor": "Group runs and spares",
    "take": "Three pairs with a strap for a modest outlay.",
    "catch": "No weight is given, so lightness is unclear."
  },
  {
    "id": "best-sunglasses-for-running-5",
    "rank": 5,
    "badge": "Best Value Pair",
    "name": "FAGUMA Polarized Sports Sunglasses For Men UV400 Protection",
    "price": "$12.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31YiqNnqInL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07YSQMBZN?tag=rvgearlab-20",
    "description": "The FAGUMA Polarized is a UV400 sports pair with TAC HD polarized lenses that the listing says block 99 percent of UVA and UVB light. The frame is polycarbonate coated with elastic paint, and the lens runs 65 mm wide and 39 mm tall.\n\nA nose bridge of 19 mm and 126 mm temples give clear sizing numbers. Compared with the suoso Wrap Around, it lists more lens and frame detail, and it costs slightly more.\n\nIt suits runners and cyclists who want a lightweight polycarbonate frame at a modest price. Running, climbing and trekking are all named.",
    "specs": [
      "TAC HD polarized, UV400",
      "Polycarbonate, elastic paint",
      "65 mm lens, 126 mm temples"
    ],
    "pros": [
      "Clear sizing numbers listed",
      "Polycarbonate frame is light",
      "Skin-friendly elastic coating",
      "Named for running and trekking"
    ],
    "cons": [
      "No grip or strap details",
      "No case contents listed"
    ],
    "bestFor": "Runners on a modest budget",
    "take": "A light, simple pair with clear sizing data.",
    "catch": "It lists fewer extras than the Foliful."
  },
  {
    "id": "best-sunglasses-for-running-6",
    "rank": 6,
    "badge": "Best Budget",
    "name": "suoso Polarized Sports Sunglasses for Men: UV400 Protection Glasses Wrap Around Goggles for Driving Fishing",
    "price": "$7.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41MymYgtOUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BZDBFCKL?tag=rvgearlab-20",
    "description": "The suoso Wrap Around is a polarized TAC lens pair with UV400 protection and a polycarbonate frame. Rubber nose pads and flexible temples keep the frame in place during hard efforts, and running, cycling and hiking are named uses.\n\nIt costs less than every other pair in this group, and its rubber nose pads give more grip than the FAGUMA Polarized listing mentions. Next to the Foliful 3-Pack, you get one pair and no strap or test card.\n\nIt suits runners who want a first pair of sports sunglasses or a spare. After-sales service is listed.",
    "specs": [
      "Polarized TAC, UV400",
      "PC frame, rubber nose pads",
      "Flexible temples"
    ],
    "pros": [
      "Lowest price in this group",
      "Rubber nose pads grip sweat",
      "Flexible temples fit more heads",
      "Light wrap-around design"
    ],
    "cons": [
      "No case or strap listed",
      "Detail on weight and size is thin"
    ],
    "bestFor": "A first pair of running shades",
    "take": "The cheapest way to try sports shades on a run.",
    "catch": "The listing says little about size and weight."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight and balance",
    "description": "Stated weights and frame materials were compared for long runs."
  },
  {
    "title": "Grip and bounce",
    "description": "Nose pads, temples and straps were weighed for stability."
  },
  {
    "title": "Ventilation and fog",
    "description": "Vents and anti-fog claims were checked."
  },
  {
    "title": "Field of view",
    "description": "Lens shape and width were compared for peripheral vision."
  },
  {
    "title": "Value",
    "description": "Price was balanced against weight and what is included."
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
    "subheading": "By Running Surface",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Long road runs with heavy sweat",
          "Lamicall Air Vent",
          "24 g frame with vents."
        ],
        [
          "Cool, misty morning runs",
          "Lamicall Anti-Fog",
          "Anti-fog design."
        ],
        [
          "Rough trails and drops",
          "DUCO Metal Frame",
          "Al-Mg metal frame."
        ],
        [
          "Group runs and spares",
          "Foliful 3-Pack",
          "Three pairs with a strap."
        ],
        [
          "Road running on a budget",
          "FAGUMA Polarized",
          "Light polycarbonate frame."
        ],
        [
          "First pair of running shades",
          "suoso Wrap Around",
          "Lowest price with rubber pads."
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
          "$0 to $20",
          "suoso Wrap Around or FAGUMA Polarized"
        ],
        [
          "$10 to $20",
          "Foliful 3-Pack or DUCO Metal Frame"
        ],
        [
          "$20 to $30",
          "Lamicall Air Vent or Lamicall Anti-Fog"
        ]
      ]
    }
  },
  {
    "subheading": "Ultralight Plastic vs Metal Frame",
    "cards": [
      {
        "label": "Ultralight plastic",
        "text": "Frames in TR90 or polycarbonate weigh little and flex without breaking. The Lamicall Air Vent, Lamicall Anti-Fog, FAGUMA Polarized and suoso Wrap Around use plastic."
      },
      {
        "label": "Metal alloy",
        "text": "A metal frame resists corrosion and can survive drops, with more weight on the face. The DUCO Metal Frame uses an Al-Mg alloy."
      }
    ],
    "note": "Most runners should start with the Lamicall Air Vent, and anyone who drops glasses often can try the DUCO Metal Frame."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price",
          "suoso Wrap Around"
        ],
        [
          "Low, three pairs",
          "Foliful 3-Pack"
        ],
        [
          "Low, single pair",
          "FAGUMA Polarized"
        ],
        [
          "Mid, metal frame",
          "DUCO Metal Frame"
        ],
        [
          "Mid to upper, anti-fog",
          "Lamicall Anti-Fog"
        ],
        [
          "Top of this group",
          "Lamicall Air Vent"
        ]
      ]
    }
  },
  {
    "subheading": "For Sweaty Summer Runs Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated light weight, grippy nose pads and vents or anti-fog."
      },
      {
        "label": "In this comparison",
        "text": "The Lamicall Air Vent lists a 24 g frame, three adjustable nose pad levels and silicone temples, and the suoso Wrap Around adds rubber nose pads at a lower price."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Lamicall Air Vent for the lightest build and adjustable pads, or on the DUCO Metal Frame for a tougher metal frame."
      },
      {
        "label": "Save if",
        "text": "Save with the suoso Wrap Around or FAGUMA Polarized when you want a light polarized pair at a low price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Frame weight",
    "explanation": "A pair that weighs 24 g feels like nothing after an hour, while a heavier metal frame can press on the nose bridge. Lighter frames matter more on long runs. Look for a stated weight or a light material such as TR90 on the listing."
  },
  {
    "criterion": "Nose pad and temple grip",
    "explanation": "Sweat makes plastic frames slide, so rubber or silicone grip points are the main defense. Adjustable nose pads let you fit a narrow or wide nose. Check whether the listing names rubber, silicone or adjustable pads."
  },
  {
    "criterion": "Ventilation and anti-fog",
    "explanation": "Lenses fog when warm breath and sweat meet cold lens surfaces. Vents or an anti-fog design give air a path across the lens. Look for vent or anti-fog wording in the title and bullet points."
  },
  {
    "criterion": "Field of view",
    "explanation": "A wider or curved lens reduces blind spots at the edges, which matters on a road with cyclists or on a technical trail. Check the lens width in millimeters on the listing. Compare it with a pair you already wear comfortably."
  },
  {
    "criterion": "UV400 and polarization",
    "explanation": "UV400 is the actual eye protection, and polarization reduces glare off wet roads and water. Some runners dislike polarization when reading a phone or watch screen. Check that the listing names UV400."
  },
  {
    "criterion": "Strap or no strap",
    "explanation": "A strap keeps the pair on your neck if they come off, which is useful on a trail or a hot day. Cheap packs often include one. Check the box contents on the listing."
  }
];

export const faq = [
  {
    "q": "Do I need polarized sunglasses for running?",
    "a": "Not strictly, but polarization cuts glare from wet roads and water. All six pairs list polarized lenses. Some runners find polarized lenses make screens harder to read, so test before a race."
  },
  {
    "q": "What is the biggest mistake with running sunglasses?",
    "a": "Buying a heavy or loose pair. Frames that bounce become distracting within a mile. Pick the Lamicall Air Vent or a pair with grippy pads."
  },
  {
    "q": "Is the Lamicall worth it over a budget pair?",
    "a": "If you run long distances or sweat heavily, yes. The adjustable pads and 24 g weight matter after the first hour. The suoso Wrap Around is fine for short runs."
  },
  {
    "q": "How do I stop sunglasses from fogging?",
    "a": "Choose a vented or anti-fog frame like the Lamicall Anti-Fog, and keep the lens clean. Wipe with the microfiber cloth before you start. Pushing them up on your head between hard efforts helps too."
  },
  {
    "q": "How do I clean running sunglasses after a sweaty run?",
    "a": "Rinse with fresh water, then dry with a microfiber cloth. Salt left on the lens can scratch. Store them in the pouch or case."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Running Sunglasses Under 100",
    "href": "/clothing-footwear/best-running-sunglasses-under-100"
  },
  {
    "title": "Best Cheap Sunglasses For Big Heads",
    "href": "/clothing-footwear/best-cheap-sunglasses-for-big-heads"
  },
  {
    "title": "Best Cycling Sunglasses For Heavy Sweaters",
    "href": "/clothing-footwear/best-cycling-sunglasses-for-heavy-sweaters"
  }
];
