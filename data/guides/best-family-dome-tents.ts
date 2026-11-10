export const guideSlug = "best-family-dome-tents";
export const guideTitle = "3 Best Family Dome Tents in 2026";
export const metaTitle = "Best Family Dome Tents in 2026";
export const metaDescription = "Best family dome tents compared on sleeping capacity, headroom and weatherproofing, from a 9 person CORE to a two-person budget dome for small families.";
export const mainKeyword = "best family dome tents";
export const introParagraphs = [
  "Family camping asks one thing of a dome tent above all: enough floor and standing height for everyone's gear and air mattresses. Danny Walker sorted this list by what the listing says about bed fit and wall height, since the person count on the box rarely survives a real packing job.",
  "Three domes made it, covering a nine-person fiberglass dome, a mainstream Coleman with taller walls, and a very light two-person dome for a parent and one child. Picks were judged on room, weather features named in the listing and how quickly they go up."
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
    "id": "best-family-dome-tents-1",
    "rank": 1,
    "badge": "Best for Big Families",
    "name": "CORE Tent 9 Person for Outdoor Family",
    "price": "$139.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/317l4wTH3xL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B016N7DFMI?tag=rvgearlab-amz-20",
    "description": "The CORE 9 Person Dome sleeps nine and fits three queen air mattresses under a 72 inch center height. It uses traditional fiberglass poles with CORE H20 Block fabric and an adjustable ground vent.\n\nCompared with the Coleman Skydome it adds an overhead gear loft, a lantern hook and an electrical cord port, so lights and fans can run without leaving a door open. Against the UNP it is a full family-size tent where the UNP is a two-person shelter.\n\nIt suits a family of five to eight that wants one big room instead of dividers. The package includes poles, rain fly, stakes and a carry bag.",
    "specs": [
      "Sleeps 9, three queen beds",
      "72 in center height",
      "H20 Block fabric, taped seams"
    ],
    "pros": [
      "Three queen airbeds fit inside",
      "Overhead gear loft, lantern hook",
      "Closable electrical cord port",
      "Poles, fly and stakes included"
    ],
    "cons": [
      "Fiberglass poles need threading",
      "No separate rooms or porch"
    ],
    "bestFor": "Large families",
    "take": "The biggest floor here, and the only one with a cord port and a gear loft.",
    "catch": "Standard poles take longer to thread than the pre-attached Coleman design."
  },
  {
    "id": "best-family-dome-tents-2",
    "rank": 2,
    "badge": "Best Overall",
    "name": "Coleman Skydome 2/4/6/8 Person Camping Tent with 5-Minute Setup",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31w3dnjC5pL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7QL1LHC?tag=rvgearlab-amz-20",
    "description": "The Coleman Skydome comes in 2, 4, 6 and 8 person sizes with pre-attached poles that let it set up in under 5 minutes. Nearly vertical walls give 20% more headroom than traditional Coleman domes.\n\nIt beats the CORE on setup speed and adds WeatherTec welded corners and inverted seams, while its frame has been tested to withstand up to 35 mph winds. A wider door than the UNP makes it easier to carry in air beds and sleeping bags.\n\nIt is the sensible default for most family weekends, especially for first-time buyers who want to be pitched and relaxing quickly. Pick the size that matches your actual bed count rather than the largest one.",
    "specs": [
      "Pre-attached poles, 5 minutes",
      "20% more headroom",
      "35 mph tested frame"
    ],
    "pros": [
      "Sets up in under 5 minutes",
      "Welded corners and inverted seams",
      "Wide door for airbeds and gear",
      "Four sizes to match your group"
    ],
    "cons": [
      "Listing is a size family, check the exact model",
      "No gear loft or cord port named"
    ],
    "bestFor": "Everyday family weekends",
    "take": "The easy default: quick setup, taller walls and a size for most families.",
    "catch": "Make sure you select the exact size you need, since one listing covers four capacities."
  },
  {
    "id": "best-family-dome-tents-3",
    "rank": 3,
    "badge": "Best Budget Pick",
    "name": "UNP 2 Person Camping Tent Waterproof Family Dome Tent Outdoor",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VWaXUc+lL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BDRBV97P?tag=rvgearlab-amz-20",
    "description": "The UNP 2 Person Dome measures 7 ft by 5 ft with a 45 inch roof and weighs 4.8 lb. It fits one full air mattress and goes up in about 3 minutes with one person.\n\nAgainst the Coleman Skydome it is far lighter and smaller, with netting overhead, big side mesh and a small interior pocket. It has a removable rain fly, where the CORE offers a bigger floor and a gear loft.\n\nIt works for a parent and one child, or as a quick-pitch shelter for a day trip. A family of three or more should step up to the Coleman.",
    "specs": [
      "7 x 5 ft floor, 45 in high",
      "4.8 lb weight",
      "Removable rainfly, skylight net"
    ],
    "pros": [
      "Weighs only 4.8 lb",
      "One person sets it up in 3 minutes",
      "Mesh skylight and roomy side window",
      "Interior storage pocket"
    ],
    "cons": [
      "Only fits two people and one air mattress",
      "Low 45 inch roof"
    ],
    "bestFor": "Parent and one child",
    "take": "A tiny family option for one parent and one child on a tight budget.",
    "catch": "At 45 inches high it is a sleeping shelter, not a place to stand or change."
  }
];

export const howWeEvaluated = [
  {
    "title": "Bed fit",
    "description": "The listing's air mattress count, such as three queens or one full, was checked against the stated person capacity."
  },
  {
    "title": "Standing room",
    "description": "Center height and wall steepness decide how comfortable a family feels during a rainy afternoon."
  },
  {
    "title": "Setup method",
    "description": "Pre-attached poles and one-person setup claims were compared with traditional pole threading."
  },
  {
    "title": "Weather features",
    "description": "Taped seams, welded corners, fly design and any named wind testing were read side by side."
  },
  {
    "title": "Extras",
    "description": "Gear lofts, cord ports and storage pockets were noted where the listing names them."
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
    "subheading": "By Family Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Parent with one child",
          "UNP 2 Person Dome",
          "Light, quick, and sized for one air mattress."
        ],
        [
          "Family of four",
          "Coleman Skydome",
          "Pick the 4 or 6 person size and set up in 5 minutes."
        ],
        [
          "Family of five to eight",
          "CORE 9 Person Dome",
          "Fits three queen air mattresses."
        ],
        [
          "Rainy weekend with kids",
          "Coleman Skydome",
          "Welded corners and inverted seams."
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
          "$30 to $40",
          "UNP 2 Person Dome"
        ],
        [
          "$120 to $130",
          "Coleman Skydome"
        ],
        [
          "$130 to $140",
          "CORE 9 Person Dome"
        ]
      ]
    }
  },
  {
    "subheading": "Pre-Attached Poles vs Threaded Poles",
    "cards": [
      {
        "label": "Pre-Attached Poles",
        "text": "The poles stay in the tent body, so it opens like an umbrella. The Coleman Skydome works this way and sets up in under 5 minutes."
      },
      {
        "label": "Threaded Poles",
        "text": "Poles slide through sleeves, a slower method that usually needs two people. The CORE 9 Person Dome and UNP 2 Person Dome use this approach."
      }
    ],
    "note": "Most families should choose the Coleman Skydome unless they need nine sleeping spots."
  },
  {
    "subheading": "By Extra Features Wanted",
    "table": {
      "headers": [
        "Feature",
        "Recommended pick"
      ],
      "rows": [
        [
          "Gear loft and lantern hook",
          "CORE 9 Person Dome"
        ],
        [
          "Closable cord port for a fan",
          "CORE 9 Person Dome"
        ],
        [
          "Taller walls for standing",
          "Coleman Skydome"
        ],
        [
          "Lowest carry weight",
          "UNP 2 Person Dome"
        ]
      ]
    }
  },
  {
    "subheading": "For First-Time Family Campers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Quick setup, a wide door and clear sizing so you buy the right capacity"
      },
      {
        "label": "In this comparison",
        "text": "The Coleman Skydome has pre-attached poles and a wider door, and it sells in four sizes so you can match your actual bed count."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the CORE 9 Person Dome if the whole family sleeps in one room and you want a loft and cord port. The Coleman Skydome earns its place for faster setup and taller walls."
      },
      {
        "label": "Save if",
        "text": "Save with the UNP 2 Person Dome if only a parent and one child will camp, since it is the lightest and easiest to pitch."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Capacity versus mattress count",
    "explanation": "Person ratings assume sleeping bags shoulder to shoulder, but families usually bring air mattresses. A tent labeled for nine that fits three queens really sleeps six comfortably. Look for a stated air mattress count, like three queen beds, and plan from that."
  },
  {
    "criterion": "Center height and wall slope",
    "explanation": "Center height is the tallest point of a dome, and walls slope away from it. Steeper walls turn that height into usable room for changing clothes and moving around. Look for a nearly vertical wall claim or a center height near 72 inches."
  },
  {
    "criterion": "Pole type and setup",
    "explanation": "Traditional poles are threaded through sleeves, which takes two people and some patience. Pre-attached poles raise the frame in minutes, which helps when kids are tired or rain is coming. Check whether the listing says pre-attached or instant setup."
  },
  {
    "criterion": "Seams and floor design",
    "explanation": "Water usually enters at seams, corners and floor edges, not through the fabric itself. Welded corners, taped seams and a tub-like floor push the water line up. Look for those terms by name, plus a stated waterproof rating if one is given."
  },
  {
    "criterion": "Doors, vents and cord access",
    "explanation": "A wide door speeds up loading air mattresses, and an electrical port lets a fan or lantern run inside. Ground vents reduce condensation overnight. Check the listing for door width, a closable cord port and vent details."
  }
];

export const faq = [
  {
    "q": "What size dome tent does a family of four need?",
    "a": "Choose a 6 person tent for a family of four who want elbow room, since the listed capacity assumes sleeping bags with no gear. The Coleman Skydome sells in 6 and 8 person sizes. Match it to air mattress count when you can."
  },
  {
    "q": "Is the UNP 2 Person Dome a real family tent?",
    "a": "Only for a parent and one child. It has room for one full air mattress and a 45 inch roof, so it is a sleeping shelter rather than a family basecamp."
  },
  {
    "q": "Is the CORE worth it over the Coleman Skydome?",
    "a": "If you need nine sleeping spaces or three queen mattresses, yes, since it has a bigger floor and a loft. For four to six people, the Skydome sets up faster and has taller walls."
  },
  {
    "q": "How do I set up a dome tent with kids?",
    "a": "Stake the corners first, then pass the poles through sleeves or open the pre-attached frame. Give kids the job of clipping the rain fly at the corners. The Coleman design saves the most time here."
  },
  {
    "q": "How do I keep condensation off the walls?",
    "a": "Open vents and mesh windows even on cool nights, and keep the fly slightly away from the tent body. The CORE lists an adjustable ground vent for this reason. Wipe the walls dry before packing."
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
