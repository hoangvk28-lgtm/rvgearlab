export const guideSlug = "best-lightweight-headlamps";
export const guideTitle = "5 Best Lightweight Headlamps in 2026";
export const metaTitle = "Best Lightweight Headlamps in 2026";
export const metaDescription = "Best lightweight headlamps for camping, compared on stated ounces, band comfort, battery type and brightness, with weights called out where listings give them.";
export const mainKeyword = "best lightweight headlamps";
export const introParagraphs = [
  "Weight is the whole point of this list, yet only two of the five listings print an actual ounce figure. The other three describe themselves as lightweight, so the order leans on stated numbers first and comfort claims second.",
  "Each lamp was compared on stated weight, battery type, band design, brightness and splash rating. Where a listing gives no weight, the guide says so plainly rather than guessing."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/lighting-headlamp-tent.webp";
export const heroImageAlt = "Camper wearing a headlamp in front of a tent at night";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-lightweight-headlamps-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "LHKNL Headlamp Flashlight",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51URfm2B1TL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08D66HCXW?tag=rvgearlab-amz-20",
    "description": "The LHKNL headlamp lists a weight of 1.87 ounces, the lightest stated figure in this group. The head rotates 60 degrees and locks in place, there are 8 modes with a motion sensor, and a 3 second long press turns it off from any mode. It carries an IPX4 splash rating and is sold as a set of two.\n\nAgainst the BIAT, it is about half an ounce lighter and adds a locking tilt head. Compared with the two Energizer packs, it is rechargeable, so there are no spare cells to carry.\n\nIt suits backpackers, runners and car campers who want a known, very low weight on the forehead. The two-lamp set also covers a partner or a spare.",
    "specs": [
      "1.87 oz, 8 modes",
      "Motion sensor, long-press off",
      "60 degree locking head, IPX4"
    ],
    "pros": [
      "Lightest stated weight here",
      "Head locks at the angle you set",
      "Motion sensor and long-press off",
      "Sold as a two-lamp set"
    ],
    "cons": [
      "IPX4 handles splashes only",
      "Battery size is not listed"
    ],
    "bestFor": "Known low weight for hiking",
    "take": "The only pick that prints a real ounce figure and still gives 8 modes.",
    "catch": "Rain protection is splash-level, so heavy storms call for a drybag."
  },
  {
    "id": "best-lightweight-headlamps-2",
    "rank": 2,
    "badge": "Best Wide Beam",
    "name": "Headlamp Rechargeable",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41l3WPyp8TL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B4KJ3MWK?tag=rvgearlab-amz-20",
    "description": "The BIAT headlamp throws a 230 degree wide beam from a COB LED and adds a spotlight, with six modes in total. The soft silicone and elastic band weighs 2.47 ounces and the shell is rated IPX4. A motion sensor switches it on and off with a wave, and the listing says it works through gloves.\n\nIt is about half an ounce heavier than the LHKNL and throws a much wider flood for camp chores. Compared with the DanForce, it gives up brightness and a red light mode for a lower weight.\n\nIt suits campers who mostly light up a tent, a cooking area or a map rather than a far trail. The silicone band is soft against the forehead.",
    "specs": [
      "2.47 oz silicone and elastic band",
      "230 degree COB flood plus spot",
      "Six modes, IPX4"
    ],
    "pros": [
      "Stated weight of 2.47 ounces",
      "Very wide flood beam",
      "Wave sensor works with gloves",
      "Soft silicone band"
    ],
    "cons": [
      "Battery capacity is not listed",
      "IPX4 covers splashes only"
    ],
    "bestFor": "Wide light for camp chores",
    "take": "A light band and a very wide beam that suits tent and kitchen work.",
    "catch": "No runtime is printed, so bring a charged backup for long nights."
  },
  {
    "id": "best-lightweight-headlamps-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "Energizer Universal LED Headlamp 2-Pack",
    "price": "$6.34",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41qcw4e1+wL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08WC2VYMS?tag=rvgearlab-amz-20",
    "description": "The Energizer Universal set gives two headlamps with a red light mode, 100 lumens and a beam that reaches 40 meters. The lamps are IPX4 water resistant, survive a 1 meter drop and come with 4 batteries in the box. The listing describes them as lightweight and compact without printing a weight.\n\nThe lowest price on this list comes with the only set that includes cells in the pack. Against the Energizer PRO pack, it drops brightness from 260 lumens to 100 in return for the cheapest entry.\n\nIt suits families, kids and glove-box emergency kits where two simple lights matter more than rechargeability. The red mode keeps night vision intact at camp.",
    "specs": [
      "100 lumens, 40 meter beam",
      "Red light mode",
      "IPX4, 1 meter drop rated"
    ],
    "pros": [
      "Lowest price on the list",
      "Two lamps with batteries included",
      "Red light mode for night use",
      "Drop rated to 1 meter"
    ],
    "cons": [
      "Only 100 lumens of output",
      "Uses replaceable batteries, not USB"
    ],
    "bestFor": "Cheap spare lights for the family",
    "take": "Two cheap lamps with batteries in the box for kids and kits.",
    "catch": "Brightness is modest, so it will not light a far trail."
  },
  {
    "id": "best-lightweight-headlamps-4",
    "rank": 4,
    "badge": "Best Two-Pack Brightness",
    "name": "Energizer LED Headlamp PRO",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41evvXVMkIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BN4HDWQ2?tag=rvgearlab-amz-20",
    "description": "The Energizer PRO pack gives two 260 lumen headlamps with an 80 meter beam. Three modes cover high, spot and wide, dimming runs from 10 to 100 percent, and the housing is IPX4 water resistant.\n\nIt is brighter than the Energizer Universal and costs only a little more. Against the LHKNL, it is not rechargeable, which trades a USB cable for a pack of cells you can swap in the dark.\n\nIt suits campers who like the Energizer name and want a step up in output for walks to the bathroom or a night hike. The two lamps cover a partner.",
    "specs": [
      "260 lumens, 80 meter beam",
      "Spot, wide and high modes",
      "10 to 100 percent dimming"
    ],
    "pros": [
      "260 lumens from a trusted brand",
      "Dimming from 10 to 100 percent",
      "Two lamps in one pack",
      "Spot and wide beams"
    ],
    "cons": [
      "No weight figure is printed",
      "Not listed as rechargeable"
    ],
    "bestFor": "Brighter two-pack for the glove box",
    "take": "A familiar brand with real dimming and two lamps per pack.",
    "catch": "No ounces are printed, so judge the weight in your hand."
  },
  {
    "id": "best-lightweight-headlamps-5",
    "rank": 5,
    "badge": "Best for Brightness",
    "name": "Headlamp. USB Rechargeable LED Head Lamp. Ultra Bright LUMINUS 1080 Lumen Headlamp Flashlight + Red Light. Hea",
    "price": "$35.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51wEsOW1M-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07FLK7V3H?tag=rvgearlab-amz-20",
    "description": "The DanForce Bold-S is a USB rechargeable headlamp with a Luminus LED rated at 1080 lumens, a red light and a zoomable beam. The aluminum body and adjustable headband are described as a lightweight fit for long use.\n\nIts listed output is far above every other lamp here, with the only zoom beam in the group. Compared with the LHKNL, it asks for more weight on the forehead in return for reach.\n\nIt suits night hikers and campers who want to see far and keep a red light for the tent. The aluminum shell reads as sturdier than plastic.",
    "specs": [
      "1080 lumens, Luminus LED",
      "USB rechargeable, red light",
      "Zoomable beam, aluminum body"
    ],
    "pros": [
      "Highest listed brightness here",
      "Zoom switches flood and spot",
      "Red light keeps night vision",
      "Aluminum construction"
    ],
    "cons": [
      "Highest price on the list",
      "No weight figure is printed"
    ],
    "bestFor": "Brightness first, weight second",
    "take": "The brightest lamp in the group, with a zoomable beam.",
    "catch": "Aluminum and a big LED add weight, and no ounces are listed."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated weight",
    "description": "Listings that print an ounce figure ranked above those that only say lightweight."
  },
  {
    "title": "Band and fit",
    "description": "Silicone, elastic and adjustable bands were compared for how they sit on the forehead."
  },
  {
    "title": "Battery type",
    "description": "Built-in rechargeable cells were weighed against replaceable AAA packs for trip logistics."
  },
  {
    "title": "Brightness and beam",
    "description": "Stated lumens, beam distance and wide versus spot patterns were noted."
  },
  {
    "title": "Splash rating",
    "description": "IPX4 and similar ratings were compared, with none treated as submersible."
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
    "subheading": "By Weight Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Want the lowest stated weight",
          "LHKNL Featherweight",
          "1.87 ounces is printed, the lowest here."
        ],
        [
          "Light band, wide camp light",
          "BIAT Wide-Beam",
          "2.47 ounces with a silicone and elastic band."
        ],
        [
          "Two spare lights for kids or a partner",
          "Energizer Universal 2-Pack",
          "Cheapest set, batteries included."
        ],
        [
          "Brighter pair, replaceable cells",
          "Energizer PRO 2-Pack",
          "260 lumens in each of two lamps."
        ],
        [
          "Need reach over weight",
          "DanForce Bold-S",
          "1080 listed lumens and a zoom beam."
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
          "Energizer Universal 2-Pack or BIAT Wide-Beam"
        ],
        [
          "$10 to $20",
          "Energizer PRO 2-Pack or LHKNL Featherweight"
        ],
        [
          "$30 to $40",
          "DanForce Bold-S"
        ]
      ]
    }
  },
  {
    "subheading": "USB Rechargeable vs Replaceable Cells",
    "cards": [
      {
        "label": "USB rechargeable",
        "text": "A built-in cell charges from a cable and saves buying batteries, but it needs a power source on long trips. The LHKNL Featherweight, BIAT Wide-Beam and DanForce Bold-S are in this group."
      },
      {
        "label": "Replaceable cells",
        "text": "Standard cells swap in seconds and need no charger, at the cost of carrying spares. The Energizer Universal 2-Pack and Energizer PRO 2-Pack are in this group."
      }
    ],
    "note": "Most campers should pick the LHKNL Featherweight unless there is no way to charge on the trip."
  },
  {
    "subheading": "By Brightness Need",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Tent and kitchen light",
          "BIAT Wide-Beam"
        ],
        [
          "Bathroom walks, reading",
          "Energizer Universal 2-Pack"
        ],
        [
          "General camp and trail",
          "Energizer PRO 2-Pack"
        ],
        [
          "Night hikes with reach",
          "DanForce Bold-S"
        ]
      ]
    }
  },
  {
    "subheading": "Ultralight Backpacking",
    "cards": [
      {
        "label": "Look for",
        "text": "An ounce figure on the listing, a flat band and a rechargeable cell you can top up from a small power bank."
      },
      {
        "label": "In this comparison",
        "text": "The LHKNL Featherweight is the only pick with a printed weight under 2 ounces, and the BIAT Wide-Beam is the next lightest at 2.47 ounces."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the DanForce Bold-S if you hike at night and want reach and a red light, or on the Energizer PRO 2-Pack for a brighter pair with replaceable cells."
      },
      {
        "label": "Save if",
        "text": "Save with the Energizer Universal 2-Pack for spare lamps, or the LHKNL Featherweight if low weight is the only goal."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Stated ounces versus 'lightweight'",
    "explanation": "Any seller can call a lamp lightweight, but only a printed figure lets you compare. Under about 3 ounces a headlamp disappears on the head, while lamps near 6 ounces start to pull on the band. Look for the ounce or gram figure on the listing and note whether it includes batteries."
  },
  {
    "criterion": "Battery weight",
    "explanation": "The cells are often half the mass of the lamp. Three AAA cells add roughly 1.5 ounces, while a small lithium cell adds less. Check whether a printed weight includes batteries, since the number can differ by an ounce."
  },
  {
    "criterion": "Band comfort",
    "explanation": "A band that sits flat and does not squeeze keeps a light lamp comfortable for hours. Silicone grips a hat or bare forehead, and wide elastic spreads pressure. Look for an adjustable band and a tilt head, since a lamp that cannot tilt makes you bend your neck."
  },
  {
    "criterion": "Brightness you actually need",
    "explanation": "Around 100 to 300 lumens covers camp tasks, and extra output mostly drains the cell faster. High numbers on titles are often inflated, so look at the mode table. A dimmer lamp with a low mode stretches runtime and keeps weight low."
  },
  {
    "criterion": "Charging versus cells",
    "explanation": "USB lamps are lighter over a trip because you carry one cable, while AAA lamps let you swap cells mid-trail. Think about whether you will have a power bank. If not, a lamp that takes standard cells is the safer light for a long trek."
  }
];

export const faq = [
  {
    "q": "Does a headlamp's weight include the batteries?",
    "a": "Not always. A listing may print the lamp body weight alone, which can differ by an ounce or more once cells are added. The LHKNL Featherweight and BIAT Wide-Beam give ounce figures, so read the bullet for whether cells are counted."
  },
  {
    "q": "What is the biggest mistake when buying a light headlamp?",
    "a": "Chasing lumens. High outputs add weight and drain the cell quickly, while camp tasks rarely need more than a few hundred. A modest lamp with a low mode, like the Energizer PRO 2-Pack, often serves better."
  },
  {
    "q": "Is the DanForce Bold-S worth it over the LHKNL?",
    "a": "Only if you need reach. The DanForce Bold-S lists 1080 lumens and a zoom beam, while the LHKNL Featherweight is lighter and cheaper. For camp tasks and short walks, the lighter lamp is enough."
  },
  {
    "q": "How do I wear a headlamp for comfort?",
    "a": "Place the band low across the forehead and keep the rear strap snug but not tight. Tilt the head down so the beam hits the ground ahead of you. A lamp with a locking tilt, like the LHKNL Featherweight, keeps that angle on the move."
  },
  {
    "q": "How should I store a rechargeable headlamp?",
    "a": "Charge it partly and store it somewhere cool and dry, and avoid leaving it in a hot car. Switch it off fully or lock it if the lamp has a lock mode, so a button press in the pack does not drain it. Top it up before every trip."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Towels",
    "href": "/campsite-gear/best-camping-towels"
  },
  {
    "title": "Best Dry Bags",
    "href": "/campsite-gear/best-dry-bags"
  },
  {
    "title": "Best Camping Lanterns And Camping Lights",
    "href": "/campsite-gear/best-camping-lanterns-and-camping-lights"
  },
  {
    "title": "Best Headlamps",
    "href": "/campsite-gear/best-headlamps"
  }
];
