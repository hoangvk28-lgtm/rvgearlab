export const guideSlug = "best-3-person-suv-tents";
export const guideTitle = "4 Best 3 Person Suv Tents in 2026";
export const metaTitle = "Best 3 Person Suv Tents in 2026";
export const metaDescription = "Best 3-person SUV tents compared on how each listing counts a third sleeper, bed size, fabric and mounting, for small families camping from an SUV.";
export const mainKeyword = "best 3 person suv tents";
export const introParagraphs = [
  "No SUV tent listing here claims a flat three adults, and the closest wording is 2 to 3 people. That makes the third sleeper a question of floor size, mattress width and how much gear you carry in with you.",
  "Four listings qualify, two roof-mounted hardshell and inflatable tents and a tailgate tent that can stand alone. They are ordered by how much usable sleeping area each one gives a small family, with price and setup effort as tie-breakers."
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
    "id": "best-3-person-suv-tents-1",
    "rank": 1,
    "badge": "Best for a Third Sleeper",
    "name": "Naturnest Rooftop Tent Hard Shell",
    "price": "$1549.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/518XYiAlYPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DNZ2QVYD?tag=rvgearlab-amz-20",
    "description": "The Naturnest hardshell sleeps 2 to 3 people and uses an ABS shell over an aluminum frame, with a 1.97 inch mattress and blackout fabric. It comes with roof crossbars for lightweight gear and opens in about 30 seconds after the locks release and the ladder drops.\n\nIt carries a thicker mattress than the Sirius, and the included crossbars add cargo room the inflatable WGOS does not offer. The Mount peak costs a small fraction of this price and keeps everyone on the ground instead.\n\nIt suits a small family that camps a lot and wants a dark, quick bed on the roof. The shell stays closed and tidy between trips.",
    "specs": [
      "2 to 3 person hardshell",
      "1.97 in mattress, blackout fabric",
      "Crossbars included"
    ],
    "pros": [
      "Thick mattress for longer sleeps",
      "Blackout fabric helps kids nap",
      "Crossbars carry extra gear",
      "Opens in about 30 seconds"
    ],
    "cons": [
      "Price is far above ground tents",
      "Roof weight needs a strong rack"
    ],
    "bestFor": "Families who camp often",
    "take": "The thickest mattress here and a shell that opens fast, so a third sleeper is not an afterthought.",
    "catch": "Add up rack load, tent weight and sleepers before you buy."
  },
  {
    "id": "best-3-person-suv-tents-2",
    "rank": 2,
    "badge": "Best Budget for Three",
    "name": "SUV Tailgate Tent Universal 2-3 Person Water-Resistant Easy Setup Camping",
    "price": "$134.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31W1mLb7TLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GYHP3FKS?tag=rvgearlab-amz-20",
    "description": "The Mount peak is a tailgate tent that fits 2 to 3 adults depending on gear. The main body measures about 9.8 by 4.9 by 6.9 feet, with a 7.2 foot awning, silver-coated 210D Oxford at PU2000 and B3 nylon mesh windows.\n\nIts floor is the only one on this list that you can judge in square feet, and it keeps the extra person on the ground. Roof tents give a flatter, thicker bed at many times the price.\n\nIt suits a family of three that wants room to sit and store bags under a shaded awning. It can also stand on its own at a campsite.",
    "specs": [
      "2 to 3 adults, 9.8x4.9 ft",
      "7.2 ft front awning",
      "PU2000 silver-coated Oxford"
    ],
    "pros": [
      "Lowest price of the four",
      "Large floor and standing height",
      "Awning shades chairs and gear",
      "Works without the vehicle"
    ],
    "cons": [
      "Third adult is a tight fit with gear",
      "PU2000 limits heavy rain use"
    ],
    "bestFor": "Budget families of three",
    "take": "Floor space for three small campers at a price far under any roof tent.",
    "catch": "Gear and sleepers share one floor, so a third adult will feel snug."
  },
  {
    "id": "best-3-person-suv-tents-3",
    "rank": 3,
    "badge": "Best Inflatable Pick",
    "name": "WGOS Inflatable Rooftop Tent",
    "price": "$431.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51ktJxUTiIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H6NG8NLT?tag=rvgearlab-amz-20",
    "description": "The WGOS is an air-beam roof tent for 2 to 3 people with a pump, inflatable mattress and ladder included. Its shell uses 420D Oxford with 280G poly-cotton and carries a UV50+ rating.\n\nIt costs about a third of the Naturnest hardshell and ships in a smaller package. The tradeoff is an inflatable mattress rather than a foam one, and an inflation routine at each camp.\n\nIt suits a family that wants an elevated bed with everything bundled. Air beams make the frame easy to carry and store.",
    "specs": [
      "Inflatable 2 to 3 person",
      "Pump, mattress, ladder included",
      "420D Oxford, UV50+"
    ],
    "pros": [
      "Everything in one kit",
      "Air frame avoids pole threading",
      "Much cheaper than a hardshell",
      "UV50+ fabric for sunny sites"
    ],
    "cons": [
      "Air mattress can lose pressure",
      "Pump time at each stop"
    ],
    "bestFor": "Families wanting a bundled kit",
    "take": "A complete roof tent kit, positioned between ground tents and hardshells on price.",
    "catch": "Air mattresses sleep cooler and need a top-up, so pack the pump."
  },
  {
    "id": "best-3-person-suv-tents-4",
    "rank": 4,
    "badge": "Best Compact Hardshell",
    "name": "Naturnest Sirius 1 Hardshell Rooftop Tent",
    "price": "$1429.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51BU4M7--6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DNZ1GDX6?tag=rvgearlab-amz-20",
    "description": "The Naturnest Sirius is a clamshell that sleeps two adults and a child, with an 82.6 by 63 inch floor and 47.2 inches of headroom. It uses ABS polymer over an aluminum frame, a hydraulic boom for a 30-second open and double key locks.\n\nIts floor is narrower than the 2 to 3 person hardshell above it, which is why it ranks second among the shells. It costs less than that model and still delivers the quick open and the locking lid.\n\nIt suits a family of two adults and one small child who value fast setup. A 1.2 inch mattress is already built in.",
    "specs": [
      "Two adults and a child",
      "82.6x63 in floor",
      "Hydraulic boom, key locks"
    ],
    "pros": [
      "Clear two adults plus child wording",
      "Opens in about 30 seconds",
      "Locking shell protects the bed",
      "Lower price than the other hardshell"
    ],
    "cons": [
      "Thinner mattress than its sibling",
      "Floor is tight for older kids"
    ],
    "bestFor": "Two adults plus one small child",
    "take": "The compact hardshell for a couple with a young child.",
    "catch": "A child outgrows the 63 inch width, so plan for a few seasons only."
  }
];

export const howWeEvaluated = [
  {
    "title": "Third sleeper",
    "description": "How each listing counts the extra person."
  },
  {
    "title": "Floor size",
    "description": "Length and width in inches or feet."
  },
  {
    "title": "Mattress",
    "description": "Thickness and type."
  },
  {
    "title": "Mount style",
    "description": "Roof rack or tailgate."
  },
  {
    "title": "Setup effort",
    "description": "Pump, boom or poles."
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
    "subheading": "By Family Makeup",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Two adults and a growing child",
          "Naturnest Hardshell Roof Tent",
          "Thickest mattress and the widest 2 to 3 rating."
        ],
        [
          "Two adults and a toddler",
          "Naturnest Sirius Roof Tent",
          "Child-sized floor with fast open."
        ],
        [
          "Three on a tight budget",
          "Mount peak SUV Tent",
          "Biggest floor, lowest price."
        ],
        [
          "Bundle wanted, mid price",
          "WGOS Inflatable Roof Tent",
          "Pump and mattress included."
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
          "$130 to $440",
          "Mount peak SUV Tent or WGOS Inflatable Roof Tent"
        ],
        [
          "$1420 to $1550",
          "Naturnest Sirius Roof Tent or Naturnest Hardshell Roof Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Foam Hardshell vs Inflatable",
    "cards": [
      {
        "label": "Hardshell",
        "text": "Solid shell and foam mattress give faster setup and a firmer bed. The Naturnest Hardshell Roof Tent and Naturnest Sirius Roof Tent use hydraulic lifts."
      },
      {
        "label": "Inflatable",
        "text": "An air frame costs less and packs smaller. The WGOS Inflatable Roof Tent needs a pump at each stop."
      }
    ],
    "note": "Choose the Naturnest Hardshell Roof Tent if you camp monthly, the WGOS Inflatable Roof Tent if you camp a few times a year."
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
          "Under $150",
          "Mount peak SUV Tent"
        ],
        [
          "$400 to $450",
          "WGOS Inflatable Roof Tent"
        ],
        [
          "About $1,400",
          "Naturnest Sirius Roof Tent"
        ],
        [
          "About $1,500",
          "Naturnest Hardshell Roof Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For a Small Family of Three Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A 2 to 3 person label with a floor of at least 63 inches wide and a mattress already included."
      },
      {
        "label": "In this comparison",
        "text": "The Naturnest Hardshell Roof Tent ships with a 1.97 inch mattress, and the Naturnest Sirius Roof Tent is built around two adults and a child."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Naturnest Hardshell Roof Tent if you camp frequently and want a dark, firm bed that opens in seconds. The Naturnest Sirius Roof Tent is a step down in price with the same open speed."
      },
      {
        "label": "Save if",
        "text": "Save with the Mount peak SUV Tent for a few trips a year and a lot of floor space. The WGOS Inflatable Roof Tent suits families that want a roof bed without hardshell money."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Decode 2 to 3 person",
    "explanation": "A 2 to 3 person rating means two adults fit, and a third is a child or a squeeze. Compare the floor width with the sum of your pad widths. A 63 inch floor fits two 25 inch pads with little to spare."
  },
  {
    "criterion": "Mattress thickness matters",
    "explanation": "A 1.97 inch foam mattress feels very different from a thin air mattress after three nights. Thicker pads cost weight but keep hips off the shell. Look for the thickness in inches in the feature list."
  },
  {
    "criterion": "Check rack capacity",
    "explanation": "A roof tent adds weight above the vehicle, which raises the center of gravity and wind noise. Add the tent weight to the sleepers and gear when you compare with your rack's dynamic and static limits. Find these numbers in the vehicle manual or the rack maker sheet."
  },
  {
    "criterion": "Plan for headroom",
    "explanation": "A 47 inch peak lets a child sit up but not an adult. Tailgate tents offer far more standing height, often around 6.9 feet. Read the height number and decide who needs to stand."
  },
  {
    "criterion": "Weigh setup against price",
    "explanation": "A 30-second hydraulic lift saves effort on every trip, while an air pump adds a few minutes. Ground tents cost far less but sit on damp earth. Match the setup time to how often you will camp."
  }
];

export const faq = [
  {
    "q": "Can a 3-person SUV tent really sleep three adults?",
    "a": "None of these listings promise three adults. They say 2 to 3 people, which usually means two adults and a child. Measure your pads against the floor width."
  },
  {
    "q": "What goes wrong with roof tents on SUVs?",
    "a": "Roof racks have a load limit, and a heavy tent can exceed it. Check both the dynamic and static ratings. Also confirm the tent opens clear of the hatch."
  },
  {
    "q": "Is the cheaper tailgate tent a fair swap for a roof tent?",
    "a": "For a few weekends a year, yes. You give up an elevated, dry bed and quick setup. The Mount peak SUV Tent keeps gear and sleepers on one floor."
  },
  {
    "q": "How long does setup take?",
    "a": "The hardshells list about 30 seconds, and the WGOS needs an air pump. A tailgate tent takes a few minutes with poles and stakes. Practice once at home."
  },
  {
    "q": "How should I store these tents?",
    "a": "Keep roof tents dry and closed on the roof, and open a window of vent after rain. Air the fabric fully before long storage. Wipe the shell and check the seals each season."
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
