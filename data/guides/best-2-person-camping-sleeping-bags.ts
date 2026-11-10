export const guideSlug = "best-2-person-camping-sleeping-bags";
export const guideTitle = "3 Best 2 Person Camping Sleeping Bags in 2026";
export const metaTitle = "Best 2 Person Camping Sleeping Bags in 2026";
export const metaDescription = "Best 2 person camping sleeping bags compared on listed comfort range, size, lining and extras for couples who want one roomy bag or two singles.";
export const mainKeyword = "best 2 person camping sleeping bags";
export const introParagraphs = [
  "A two-person bag shares body heat and packs into one sack, but it can also be unzipped into two singles when you want your own space. The key variables are the printed temperature range, the width and length, and whether the zippers actually split the bag.",
  "Few listings are clear on cold-weather performance, so the three double bags here are described by the ranges they print. All three are mild-weather bags in the 30 to 65 degree F zone, and none is a winter bag."
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
    "id": "best-2-person-camping-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "BORULL Double Sleeping Bags Queen Size for Adults Camping with 2 Pillows",
    "price": "$42.74",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31tASX7-CHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GRV6WZDT?tag=rvgearlab-20",
    "description": "The BORULL is a 92 by 63 inch double bag with a printed comfort range of 40 to 65 degrees F and a limit of 30 degrees F. It fits adults up to 7 feet, includes two pillows, an adjustable hood and anti-snag zippers, and unzips flat or splits into two singles.\n\nIt is the only pick here that prints both a comfort and a limit figure, which makes its true range easy to read. It is also the largest of the three, with room for taller sleepers.\n\nIt suits couples and tall campers who want one roomy bag for spring to summer car camping. The adjustable hood helps on cooler mornings.",
    "specs": [
      "92 x 63 in double",
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
      "Comfort starts at 40 degrees F",
      "Bulky for one sleeper"
    ],
    "bestFor": "Tall couples, spring to summer",
    "take": "The roomiest double with the clearest temperature figures.",
    "catch": "At a 40 degree F comfort floor, it is a spring-to-summer bag."
  },
  {
    "id": "best-2-person-camping-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Warm Lining",
    "name": "AGEMORE Cotton Flannel Double Sleeping Bag for Camping",
    "price": "$66.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51z0CN852PL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B077TC9NS5?tag=rvgearlab-20",
    "description": "The AGEMORE is a queen-size double with a brushed cotton flannel lining and a 210T water-resistant polyester exterior. The listing says it is designed for 41 to 59 degrees F, compresses into an included bag, and has zippers on both sides so it splits into two singles.\n\nThe flannel lining is something the oaskys and BORULL listings do not describe. One version of the listing states a wider 32 to 59 degree range, so the printed range varies between listings.\n\nIt suits couples who prize a cozy lining for cool nights and want the option to split the bag. The water-resistant shell handles dew.",
    "specs": [
      "Brushed cotton flannel lining",
      "210T water-resistant exterior",
      "41 to 59 degrees F design"
    ],
    "pros": [
      "Soft flannel lining",
      "Water-resistant polyester shell",
      "Splits into two single bags",
      "Compresses into a carry bag"
    ],
    "cons": [
      "Range varies between listings",
      "No limit rating printed"
    ],
    "bestFor": "Cool-night couples",
    "take": "A cozy flannel-lined double for cool nights.",
    "catch": "The temperature range differs between listings, so treat 41 degrees F as the safe floor."
  },
  {
    "id": "best-2-person-camping-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Budget Pick",
    "name": "oaskys Double Sleeping Bag for Adults with 2 Pillows",
    "price": "$42.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xnUFD9y4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BZRQZFTN?tag=rvgearlab-20",
    "description": "The oaskys is a queen XL double measuring about 220 by 145 cm, sold with two pillows. The listing gives a design range of 10 to 20 degrees C, a 210T anti-tearing polyester shell, a 190T pongee lining and a compression sack with straps.\n\nIt is priced about the same as the BORULL and prints its range in Celsius, which works out to roughly 50 to 68 degrees F. It is smaller than the BORULL and does not print a limit rating.\n\nIt suits couples on a tight budget who camp on mild summer nights. The compression sack helps it pack down.",
    "specs": [
      "220 x 145 cm double",
      "10 to 20C design range",
      "Two pillows included"
    ],
    "pros": [
      "Two pillows in the box",
      "Splits into two single bags",
      "Compression sack with straps",
      "Low price"
    ],
    "cons": [
      "Range is only 10 to 20C",
      "Smaller than the BORULL"
    ],
    "bestFor": "Mild-night budget couples",
    "take": "A low-cost double with two pillows for mild nights.",
    "catch": "Its 10 to 20 C range means summer use only, with no printed limit."
  }
];

export const howWeEvaluated = [
  {
    "title": "Printed range",
    "description": "We compared the comfort, limit and design ranges each listing prints, and flagged where they differ."
  },
  {
    "title": "Size",
    "description": "We lined up length and width, since a double needs room for two."
  },
  {
    "title": "Lining and shell",
    "description": "We compared linings and shells for warmth and weather resistance."
  },
  {
    "title": "Splitting",
    "description": "We checked whether each bag unzips flat or splits into two singles."
  },
  {
    "title": "Extras",
    "description": "We noted pillows, compression sacks and hoods."
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
    "subheading": "By Cold You Expect",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Spring to summer, tall sleepers",
          "BORULL Double Queen",
          "Comfort 40 to 65F, limit 30F, fits to 7 feet."
        ],
        [
          "Cool nights, 41F and up",
          "AGEMORE Flannel Double",
          "Flannel lining and a 41F design low."
        ],
        [
          "Mild summer nights",
          "oaskys Double Queen XL",
          "10 to 20 C range."
        ],
        [
          "Splitting into two singles",
          "AGEMORE Flannel Double",
          "Zippers on both sides."
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
          "$40 to $50",
          "oaskys Double Queen XL"
        ],
        [
          "$60 to $70",
          "AGEMORE Flannel Double"
        ]
      ]
    }
  },
  {
    "subheading": "Flannel vs Polyester Lining",
    "cards": [
      {
        "label": "Flannel",
        "text": "The AGEMORE Flannel Double has a brushed cotton lining that is cozy but slower to dry."
      },
      {
        "label": "Polyester",
        "text": "The BORULL Double Queen and oaskys Double Queen XL use smoother linings that dry faster."
      }
    ],
    "note": "Choose the AGEMORE Flannel Double for cool dry nights and the BORULL Double Queen for wetter camps."
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
          "Lowest cost, mild nights",
          "oaskys Double Queen XL"
        ],
        [
          "Similar cost, bigger and clearer",
          "BORULL Double Queen"
        ],
        [
          "Higher price, flannel",
          "AGEMORE Flannel Double"
        ]
      ]
    }
  },
  {
    "subheading": "For Couples Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Printed dimensions, a stated comfort range and a splitting option."
      },
      {
        "label": "In this comparison",
        "text": "The BORULL Double Queen prints 92 by 63 inches and a 40 to 65 degree F comfort range, and the AGEMORE Flannel Double splits into two singles."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the AGEMORE Flannel Double if you want a cozy lining and the two-singles option, or the BORULL Double Queen for size and clear ratings."
      },
      {
        "label": "Save if",
        "text": "Save with the oaskys Double Queen XL if you only camp on mild summer nights."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Comfort versus limit",
    "explanation": "A comfort rating is the temperature at which most sleepers will be comfortable, and a limit is the coldest they can stay in. The BORULL Double Queen prints both. When only a design range appears, assume the low end is the limit."
  },
  {
    "criterion": "Size for two",
    "explanation": "A double bag needs to fit two adults without shoulders pressed together. The BORULL is 92 by 63 inches, and the oaskys is about 220 by 145 cm. Check the printed dimensions and your combined width."
  },
  {
    "criterion": "Zipper splitting",
    "explanation": "A true double splits into two singles, which only works if the zippers mate on both sides. Look for the splitting claim, and check zipper direction. Test it at home."
  },
  {
    "criterion": "Lining and warmth",
    "explanation": "Cotton flannel feels warm and soft but dries slowly if damp. Polyester is quicker to dry. Pick the lining to match how wet your camp gets."
  },
  {
    "criterion": "Weight and packed size",
    "explanation": "A double bag is bulky, even with a compression sack. Check the carry bag and whether it suits a car or a pack. These bags are for car camping."
  }
];

export const faq = [
  {
    "q": "Can I use a double bag in cold weather?",
    "a": "These bags suit mild weather, with limits near 30 degrees F at best. Add layers and a pad for cooler nights. They are not winter bags."
  },
  {
    "q": "Do two-person bags really split?",
    "a": "The BORULL Double Queen, AGEMORE Flannel Double and oaskys Double Queen XL all say they split into two singles. Check the zipper direction. Test before you go."
  },
  {
    "q": "Is a double bag warmer than two singles?",
    "a": "Shared body heat helps, and there is less air per person. A double has more total volume, so the gain is modest. A pad under both of you matters more."
  },
  {
    "q": "What pad do I need?",
    "a": "A pad wide enough for two, or two pads side by side. A gap lets cold air in. Use a connector strap."
  },
  {
    "q": "How do I wash a double bag?",
    "a": "Check the label, then use a large front-loading machine on gentle. Air dry fully. The flannel-lined AGEMORE takes longer to dry."
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
