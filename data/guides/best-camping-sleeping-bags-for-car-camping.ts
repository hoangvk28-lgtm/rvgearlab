export const guideSlug = "best-camping-sleeping-bags-for-car-camping";
export const guideTitle = "2 Best Camping Sleeping Bags For Car Camping in 2026";
export const metaTitle = "Best Camping Sleeping Bags For Car Camping";
export const metaDescription = "Best camping sleeping bags for car camping: two roomy picks compared on temperature figures, size and extras, for campers who never carry the bag far.";
export const mainKeyword = "best camping sleeping bags for car camping";
export const introParagraphs = [
  "Car camping removes the weight limit, so a good bag here is judged on room, warmth you can read on the page and how easily it fits the vehicle. Few listings target this use directly, and only two genuine sleeping bags came out of the search, so this is a short list.",
  "The other results were a foam mattress pad and a mylar emergency bivy, which are not sleeping bags and were left out. The two picks below are a 0 degree single and a queen-size double."
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
    "id": "best-camping-sleeping-bags-for-car-camping-1",
    "rank": 1,
    "badge": "Best Single Bag",
    "name": "TETON Sports Celsius XXL",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31McqzoK49L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B001D6TB8W?tag=rvgearlab-amz-20",
    "description": "The TETON Celsius XXL is a 0 degree single built with SuperLoft Elite fiber fill, a poly-flannel lining and double-layer construction with draft tubes. It has a half-circle mummy hood and ships with a stuff sack with heavy-duty compression straps.\n\nAgainst the BORULL Double Queen it is the colder-rated pick, and the extra-long XXL cut gives taller campers real room. Its right-zip layout suits solo sleepers who want a bag that stays put.\n\nIt suits tall or broad campers who camp in cold weather and keep the bag in the trunk. The flannel lining feels soft against skin.",
    "specs": [
      "SuperLoft Elite fiber fill",
      "Poly-flannel lining",
      "Right-zip, draft tubes"
    ],
    "pros": [
      "Soft poly-flannel lining feels cozy",
      "Double-layer construction with draft tubes",
      "Extra-long cut for tall campers",
      "Stuff sack with compression straps"
    ],
    "cons": [
      "Bulky to pack",
      "Zipper side is fixed at right"
    ],
    "bestFor": "Cold-weather solo car camping",
    "take": "A roomy 0 degree option with a soft lining for taller campers.",
    "catch": "It is a car-camping bag, too bulky to carry on the trail."
  },
  {
    "id": "best-camping-sleeping-bags-for-car-camping-2",
    "rank": 2,
    "badge": "Best Double Bag",
    "name": "BORULL Double Sleeping Bags Queen Size for Adults Camping with 2 Pillows",
    "price": "$42.74",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31tASX7-CHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GRV6WZDT?tag=rvgearlab-amz-20",
    "description": "The BORULL Double Queen measures 92 by 63 inches and prints a comfort range of 40 to 65F with a limit of 30F. Sleepers up to 7 feet fit inside, and the package adds two pillows, a cinchable hood and snag-resistant zippers.\n\nWhere the TETON Celsius XXL is a single, this bag sleeps two and unzips flat or splits into two singles. It prints both comfort and limit numbers, which makes its actual range easy to read.\n\nIt suits couples and families who car camp in spring through early fall. The pillows are included in the price.",
    "specs": [
      "92 by 63 in double",
      "Comfort 40 to 65F, limit 30F",
      "Two pillows included"
    ],
    "pros": [
      "Comfort and limit both printed",
      "Fits sleepers up to 7 feet",
      "Two pillows included",
      "Splits into two singles"
    ],
    "cons": [
      "Comfort starts at 40F",
      "Bulky for one sleeper"
    ],
    "bestFor": "Couples and families",
    "take": "The roomiest double with the clearest temperature figures.",
    "catch": "At a 40F comfort floor, it is a spring-to-summer bag."
  }
];

export const howWeEvaluated = [
  {
    "title": "Temperature figures",
    "description": "We compared printed ratings and noted which ones separate comfort from limit."
  },
  {
    "title": "Room",
    "description": "We compared the listed length and width, since car camping puts space ahead of weight."
  },
  {
    "title": "Extras",
    "description": "We looked at included pillows, hoods, draft tubes and zipper details."
  },
  {
    "title": "Trunk space",
    "description": "We considered bulk, since a car still has limits."
  },
  {
    "title": "Fit for the use",
    "description": "We left out foam pads and emergency bivies because they are not sleeping bags."
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
    "subheading": "By Party Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Solo camper in cold weather",
          "TETON Celsius XXL",
          "0 degree rating with draft tubes and flannel lining"
        ],
        [
          "Couple in spring through fall",
          "BORULL Double Queen",
          "92 by 63 inch double with two pillows"
        ],
        [
          "Tall or broad sleeper",
          "TETON Celsius XXL",
          "Extra-long XXL cut"
        ],
        [
          "Family wanting one big bed",
          "BORULL Double Queen",
          "Fits sleepers up to 7 feet and splits into two singles"
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
          "BORULL Double Queen"
        ],
        [
          "$80 to $90",
          "TETON Celsius XXL"
        ]
      ]
    }
  },
  {
    "subheading": "Single vs Double",
    "cards": [
      {
        "label": "Single",
        "text": "The TETON Celsius XXL gives each sleeper their own warmth setting, and it carries the colder rating. It does nothing for a shared bed."
      },
      {
        "label": "Double",
        "text": "The BORULL Double Queen sleeps two and splits into singles, with two pillows. It starts at a 40F comfort figure and takes more space."
      }
    ],
    "note": "Choose the BORULL Double Queen for couples in mild weather, and the TETON Celsius XXL for cold nights or solo use."
  },
  {
    "subheading": "By Season",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Cold nights near freezing",
          "TETON Celsius XXL"
        ],
        [
          "Spring and summer nights",
          "BORULL Double Queen"
        ],
        [
          "Shared bed with pillows included",
          "BORULL Double Queen"
        ]
      ]
    }
  },
  {
    "subheading": "Trunk and Tent Fit Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for the stuff sack, stated dimensions and compression straps."
      },
      {
        "label": "In this comparison",
        "text": "The TETON Celsius XXL ships with a stuff sack and heavy-duty compression straps, and the BORULL Double Queen lists 92 by 63 inches as an open size."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the TETON Celsius XXL if you camp near freezing and want a 0 degree single with draft tubes."
      },
      {
        "label": "Save if",
        "text": "Save with the BORULL Double Queen if you camp in mild weather and want a shared bed with pillows included."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Room beats weight",
    "explanation": "Without a pack to carry, spend on size. Both picks are wide enough to roll over in. The TETON Celsius XXL is cut extra long and the BORULL measures 92 by 63 inches. Check the listing for the stated maximum height."
  },
  {
    "criterion": "Single or double",
    "explanation": "A double saves space in the car and shares heat, but it only works with a partner who sleeps at similar temperatures. A single lets each sleeper pick a rating. Decide before you shop, because a bag for two is awkward for one."
  },
  {
    "criterion": "Read the temperature figure",
    "explanation": "Comfort is the number to trust. The BORULL prints a comfort range of 40 to 65F and a 30F limit. The TETON Celsius XXL lists a 0 degree rating, which is a limit-style number, so expect comfort at higher temperatures."
  },
  {
    "criterion": "Lining and fill",
    "explanation": "Flannel and plush linings feel warm to the touch but dry slowly when damp. Fiber fill such as SuperLoft Elite keeps loft in damp air. Check the listing for lining and fill names."
  },
  {
    "criterion": "Pillows and extras",
    "explanation": "Included pillows, hoods and draft tubes save money on small items. They also make a bag feel more like a bed. Look for them in the first feature bullets."
  },
  {
    "criterion": "Pair it with a pad",
    "explanation": "A bag is only half of a sleep system, and the ground draws heat from underneath. Use a thick pad rated for the season. A foam mattress is a better answer to hard ground than a heavier bag."
  }
];

export const faq = [
  {
    "q": "Do car campers need a special sleeping bag?",
    "a": "Not special, but a roomy one. Without a weight limit you can choose a larger cut like the XXL and add pillows or a pad."
  },
  {
    "q": "What mistake do car campers make most?",
    "a": "They buy a bag for the temperature and forget the pad. Cold ground steals more heat than cold air, so add a thick pad."
  },
  {
    "q": "Is the TETON Celsius XXL worth it over the BORULL Double Queen?",
    "a": "For solo cold-weather use, yes, because it lists a colder rating. For a couple in mild weather the BORULL gives more room and a shared bed."
  },
  {
    "q": "How do I fit a big bag in the car?",
    "a": "Use the included stuff sack and straps to compress it. Store it loose in a large bag at home to protect the fill."
  },
  {
    "q": "Can I wash these bags?",
    "a": "Check the care label on the bag you receive. Most synthetic bags go in a front-loading machine on a gentle cycle, and they should dry fully before storage."
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
