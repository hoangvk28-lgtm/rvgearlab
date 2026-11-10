export const guideSlug = "best-goose-down-sleeping-bags";
export const guideTitle = "3 Best Goose Down Sleeping Bags in 2026";
export const metaTitle = "Best Goose Down Sleeping Bags in 2026";
export const metaDescription = "Best goose down sleeping bags compared on named fill, listed temperature range, weight and cut, with honest notes on which listings name goose.";
export const mainKeyword = "best goose down sleeping bags";
export const introParagraphs = [
  "Goose down is the classic insulation for cold camping because it traps a lot of heat for very little weight. The catch for shoppers is that many bags titled simply down never say which bird the fill came from.",
  "Only a few listings target this exact need. One names goose down outright, and two OMVMO rectangular bags say down without naming the bird, so they are the nearest fit and are included on that basis."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/sleep-tent-sleeping-bag.webp";
export const heroImageAlt = "Camper sitting inside a tent next to an unrolled sleeping bag";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-goose-down-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "AKMAX Down Mummy Sleeping Bag -13°F Cold Weather Camping Backpacking",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31wmJXfhg+S._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B095BSGWPC?tag=rvgearlab-20",
    "description": "The AKMAX is the one bag here whose listing names goose down as the fill. It is a mummy-shaped bag with a water-resistant nylon shell and a printed temperature range of -13 to 23 degrees F.\n\nIt lists a weight of 2.37 kg (5.2 lb), and the snug mummy cut wastes less air than the two OMVMO rectangular bags. That tighter shape is what lets it claim the coldest range of the three.\n\nIt suits winter campers and backpackers who want goose down specifically and are happy to trade roominess for warmth. The shell is rated water-resistant for damp mornings.",
    "specs": [
      "Goose down fill named",
      "-13 to 23 degrees F range",
      "2.37 kg (5.2 lb)"
    ],
    "pros": [
      "Listing names goose down as the fill",
      "Printed range reaches -13 degrees F",
      "Mummy cut holds heat close",
      "Water-resistant nylon shell"
    ],
    "cons": [
      "Heavier than a trail-weight down bag",
      "Fill power is not printed"
    ],
    "bestFor": "Cold-weather goose down",
    "take": "The only bag in this list that names goose down, in a warm mummy cut.",
    "catch": "The listing prints a wide range but no fill power, so judge warmth by the lower end of the range only."
  },
  {
    "id": "best-goose-down-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Rectangular Cut",
    "name": "OMVMO Rectangular Down Sleeping Bag for Adults Camping Backpacking 0°F",
    "price": "$218.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+zD-sMB4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B2WFZ6DC?tag=rvgearlab-20",
    "description": "The OMVMO rectangular bag is rated 0 degrees F in the title and is built from over 80 independent rectangular insulation chambers that the listing says give more loft than most down bags. The shell is 400T 20D nylon with a DWR coating, and the details include draft tubes at the shoulder and along the zipper, a Velcro securing strap and a half-circle detachable hood.\n\nAgainst the AKMAX it gives up the mummy shape for a roomy rectangle, which lets you shift position without fighting the bag. A left zipper and a right zipper bag also join into a double, which the AKMAX does not describe.\n\nIt suits car campers and cold-weather sleepers who toss and turn and want a bag that opens flat as a quilt. The detachable hood adds warmth when the temperature drops.",
    "specs": [
      "0 degrees F rated",
      "80+ rectangular loft chambers",
      "400T 20D DWR nylon"
    ],
    "pros": [
      "Roomy rectangular cut for restless sleepers",
      "Draft tubes at shoulders and zipper",
      "Pairs with a second bag as a double",
      "Opens flat as a blanket"
    ],
    "cons": [
      "Listing never names the bird",
      "Highest price of the group"
    ],
    "bestFor": "Roomy cold-night sleeping",
    "take": "A roomy, zip-together down bag for sleepers who hate mummy squeeze.",
    "catch": "The listing says down without naming goose or giving a fill power, and a -10 degree F version costs more again."
  },
  {
    "id": "best-goose-down-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Budget Pick",
    "name": "OMVMO Rectangular Down Sleeping Bag for Adults Camping Hike with Arm Holes",
    "price": "$128.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JS2m6dKxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BW139J46?tag=rvgearlab-20",
    "description": "The OMVMO arm-hole bag keeps the same 400T 20D DWR nylon shell as its pricier sibling and adds zippered chest pockets, buttons at the waist and foot, and openings for your arms. The detachable half-circle hood and draft tubes around the shoulder and zipper carry over.\n\nIt undercuts both other bags on price, and the arm holes make it the only one you can read or use a phone in without unzipping. Next to the OMVMO Rectangular Down it trades the headline temperature figure for a lower price and extra convenience.\n\nIt suits cool-weather campers who want a down-filled bag that doubles as a wearable blanket by the fire. The chest pockets hold a phone or headlamp.",
    "specs": [
      "Arm holes and chest pockets",
      "400T 20D DWR nylon shell",
      "Buttons at waist and foot"
    ],
    "pros": [
      "Lowest price of the three",
      "Arm holes let you read hands-free",
      "Draft tubes around the shoulder",
      "Zips with a mate into a double"
    ],
    "cons": [
      "No temperature rating in the title",
      "Down type is not named"
    ],
    "bestFor": "Cool nights and lounging",
    "take": "The cheapest down bag here, with arm holes that make it a camp blanket too.",
    "catch": "It is not marketed for deep cold, so skip it for sub-freezing nights."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fill named",
    "description": "We checked each listing for the fill it actually names, since goose, duck and plain down keep warm in different ways."
  },
  {
    "title": "Temperature figures",
    "description": "We compared the printed temperature ranges and rated degrees, treating a wide range as a sign of a comfort-to-limit spread."
  },
  {
    "title": "Cut and shell",
    "description": "We compared mummy and rectangular shapes and the shell fabric, since cut changes how much air the bag must heat."
  },
  {
    "title": "Warmth features",
    "description": "We checked for draft tubes, hoods and zipper baffles that stop heat leaking at the shoulders."
  },
  {
    "title": "Value",
    "description": "We matched price against what each listing actually spells out, not against the label alone."
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
    "subheading": "By Winter Use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Coldest nights, mountain winter trips",
          "AKMAX Goose Down Mummy",
          "The mummy cut and a printed range down to -13 degrees F make it the coldest-rated option."
        ],
        [
          "Car camping with room to move",
          "OMVMO Rectangular Down",
          "The rectangular cut and draft tubes suit restless sleepers."
        ],
        [
          "Cool nights plus camp-chair lounging",
          "OMVMO Arm-Hole Down",
          "Arm holes and chest pockets keep your hands free."
        ],
        [
          "Two people sharing a double bed setup",
          "OMVMO Rectangular Down",
          "Left and right zip versions join into a double."
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
          "$120 to $130",
          "OMVMO Arm-Hole Down"
        ],
        [
          "$120 to $130",
          "AKMAX Goose Down Mummy"
        ],
        [
          "$210 to $220",
          "OMVMO Rectangular Down"
        ]
      ]
    }
  },
  {
    "subheading": "Goose Down vs Unnamed Down",
    "cards": [
      {
        "label": "Goose down named",
        "text": "The AKMAX Goose Down Mummy is the only listing that names goose down, so you know the fill type before buying."
      },
      {
        "label": "Down unnamed",
        "text": "The OMVMO Rectangular Down and OMVMO Arm-Hole Down both say down without naming the bird, so the quality bracket is less certain."
      }
    ],
    "note": "Most buyers who care about the fill type should start with the AKMAX Goose Down Mummy."
  },
  {
    "subheading": "By Sleeping Style",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Side or stomach sleeper wanting space",
          "OMVMO Rectangular Down"
        ],
        [
          "Back sleeper wanting a warm hood",
          "AKMAX Goose Down Mummy"
        ],
        [
          "Reader or phone user in camp",
          "OMVMO Arm-Hole Down"
        ]
      ]
    }
  },
  {
    "subheading": "For Winter Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "The bottom of the printed temperature range, a hood, and draft tubes that seal the shoulders and zipper."
      },
      {
        "label": "In this comparison",
        "text": "The AKMAX Goose Down Mummy prints the coldest range and names goose down, while the OMVMO Rectangular Down adds draft tubes and a 0 degree F title figure."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the OMVMO Rectangular Down if you want the draft tubes, a shell with DWR coating and the zip-together double option for repeat cold-season use. The AKMAX Goose Down Mummy is the better buy if the goose name and the coldest range matter most."
      },
      {
        "label": "Save if",
        "text": "Save with the OMVMO Arm-Hole Down if your nights stay above freezing and you value the arm holes and chest pockets over a cold rating."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Which bird the fill came from",
    "explanation": "Goose down is usually valued for its loft, and duck down is the common budget alternative. The name matters because it hints at the quality bracket you are paying for. Look for the words goose down in the bullet points rather than just down in the title."
  },
  {
    "criterion": "Fill power",
    "explanation": "Fill power is a loft measure, where a higher number means more warmth for the same weight. It tells you how efficiently the down traps air, which is why two bags with the same temperature rating can weigh quite differently. Check whether a number is printed, and treat a missing one as unknown rather than average."
  },
  {
    "criterion": "Temperature range versus rating",
    "explanation": "A single degree figure in a title is a marketing label, while a printed range such as -13 to 23 degrees F shows the spread from limit to comfort. Sleeping at the bottom of the range usually means being cold but safe. Plan around the upper figure if you want to sleep comfortably."
  },
  {
    "criterion": "Shape and shoulder room",
    "explanation": "A mummy bag narrows toward the feet to cut dead air, and a rectangular bag stays roomy and opens flat. The tighter shape keeps you warmer, while the roomy shape suits restless sleepers and zip-together pairs. Pick the shape you will actually sleep in, because a bag that feels cramped gets slept in badly."
  },
  {
    "criterion": "Shell and moisture",
    "explanation": "Down loses loft when it gets wet, so a water-resistant or DWR-treated shell matters. It protects against condensation and light splashes, not heavy rain or a wet tent floor. Read the shell fabric line and keep the bag in a dry sack during the day."
  }
];

export const faq = [
  {
    "q": "Is every bag here really goose down?",
    "a": "No. Only the AKMAX Goose Down Mummy names goose down. The two OMVMO bags say down in the title without naming the bird."
  },
  {
    "q": "Can I wash a down bag at home?",
    "a": "Check the care label, then use a front-loading machine on a gentle cycle with a down-specific soap. Dry it on low heat with clean tennis balls to break up clumps. Never store it compressed long term, since that flattens the loft."
  },
  {
    "q": "Is a mummy bag always warmer than a rectangular one?",
    "a": "Usually yes, because the narrower cut leaves less air to warm up. The OMVMO bags make up some of the gap with draft tubes at the shoulder and along the zipper. A rectangular bag is still the better pick if you cannot sleep in a snug cut."
  },
  {
    "q": "How should I store a down bag between trips?",
    "a": "Keep it uncompressed in a large breathable sack or hanging in a closet. Compressing it for months can damage the loft. Use the small stuff sack only for travel."
  },
  {
    "q": "Do I need a liner or a pad under a down bag?",
    "a": "Yes, a pad matters more than the bag in cold weather. The down underneath you gets crushed flat and gives almost no insulation. A closed-cell or insulated pad blocks the heat lost into the ground."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Sleeping Bags",
    "href": "/sleep-gear/best-backpacking-sleeping-bags"
  },
  {
    "title": "Best Camping Sleeping Bags",
    "href": "/sleep-gear/best-camping-sleeping-bags"
  },
  {
    "title": "Best Backpacking Pillows For Side Sleepers",
    "href": "/sleep-gear/best-backpacking-pillows-for-side-sleepers"
  },
  {
    "title": "Best Backpacking Pillow For Stomach Sleepers",
    "href": "/sleep-gear/best-backpacking-pillow-for-stomach-sleepers"
  }
];
