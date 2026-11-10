export const guideSlug = "best-camping-sleeping-bags";
export const guideTitle = "5 Best Camping Sleeping Bags in 2026";
export const metaTitle = "Best Camping Sleeping Bags in 2026";
export const metaDescription = "Best camping sleeping bags for car camping compared on size, stated temperature ratings, fill and price, including two doubles for couples.";
export const mainKeyword = "best camping sleeping bags";
export const introParagraphs = [
  "Car campers can choose by room and comfort instead of ounces, and prices are low enough to fit most budgets. Five bags are compared here, from a 17.99 dollar mild-weather single to two double bags for couples.",
  "The ranking weighs printed temperature figures, size and extras like pillows and fleece. Listings that print no rating are flagged."
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
    "id": "best-camping-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Coleman Brazos Sleeping Bag",
    "price": "$53.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JmzLs-hzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D6416YYW?tag=rvgearlab-20",
    "description": "The Coleman Brazos is rated for 30 degrees F and suits campers to 5 ft 11 in. It has a Thermolock draft tube along the zipper, Fiberlock construction to keep insulation in place and a no-snag zipper.\n\nIt carries a colder rating than the other singles here and is the only one from a well-known camping brand. It is smaller in fit than the FARLAND.\n\nIt suits average-height campers on cool nights. Tall campers should look elsewhere.",
    "specs": [
      "Rated to 30F",
      "Fits up to 5 ft 11 in",
      "Thermolock draft tube"
    ],
    "pros": [
      "Rated for cool nights",
      "Draft tube blocks zipper leaks",
      "Fiberlock keeps fill in place",
      "No-snag zipper"
    ],
    "cons": [
      "Tall campers will not fit",
      "No weight is stated"
    ],
    "bestFor": "Cool-night car camping",
    "take": "A dependable 30F bag from a known name.",
    "catch": "The 5 ft 11 in limit rules it out for taller campers."
  },
  {
    "id": "best-camping-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Cozy Lining",
    "name": "FARLAND Sleeping Bags for Adults Cold Weather & Camping",
    "price": "$59.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41EgTwc8-eL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJS2CVCK?tag=rvgearlab-20",
    "description": "The FARLAND is an 86.6 by 32.68 inch bag with a 290T nylon shell, a microplush fleece lining and 400 g of fill. The shell is described as waterproof and windproof, and it fits sleepers up to 6 ft.\n\nIt is the plushest bag in the group and costs a little more than the Coleman Brazos. It prints no temperature rating.\n\nIt suits campers who want a soft, cozy bag for chilly camps. Fleece linings feel warm quickly.",
    "specs": [
      "86.6 x 32.68 inch size",
      "290T nylon shell",
      "Microplush fleece lining"
    ],
    "pros": [
      "Soft fleece lining",
      "Waterproof windproof shell",
      "Heavy 400 g fill",
      "Fits sleepers up to 6 feet"
    ],
    "cons": [
      "No temperature rating printed",
      "Heavy for hiking"
    ],
    "bestFor": "Chilly, cozy car camps",
    "take": "The most comfortable lining of the group, for cool car camps.",
    "catch": "Fleece-lined bags run warm, and no rating is printed."
  },
  {
    "id": "best-camping-sleeping-bags-3",
    "rank": 3,
    "badge": "Best for Couples",
    "name": "BORULL Double Sleeping Bags Queen Size for Adults Camping with 2 Pillows",
    "price": "$42.74",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31tASX7-CHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GRV6WZDT?tag=rvgearlab-20",
    "description": "The BORULL is a 92 by 63 inch double bag with a stated comfort of 40 to 65 degrees F and a limit of 30 degrees F, fitting adults up to 7 ft. It includes two pillows, an adjustable hood and anti-snag zippers, and it unzips flat or splits into two singles.\n\nIt costs less than the FARLAND single while covering two sleepers and prints both a comfort and a limit figure. The oaskys is smaller and cheaper.\n\nIt suits couples and tall campers who want one roomy bag. The 40F comfort floor means cool spring to mild summer.",
    "specs": [
      "92 x 63 inch double",
      "Comfort 40 to 65F, limit 30F",
      "Two pillows included"
    ],
    "pros": [
      "Comfort and limit both printed",
      "Two pillows included",
      "Splits into two singles",
      "Fits tall sleepers to 7 ft"
    ],
    "cons": [
      "Comfort starts at 40F",
      "Bulky for one sleeper"
    ],
    "bestFor": "Couples and tall campers",
    "take": "A roomy double with honest ratings and pillows.",
    "catch": "At a 40F comfort floor, it is a spring-to-summer bag."
  },
  {
    "id": "best-camping-sleeping-bags-4",
    "rank": 4,
    "badge": "Best Budget Double",
    "name": "oaskys Double Sleeping Bag for Adults with 2 Pillows",
    "price": "$42.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xnUFD9y4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BZRQZFTN?tag=rvgearlab-20",
    "description": "The oaskys is a queen XL double measuring about 220 by 145 cm, sold with two pillows. The listing gives a design range of 10 to 20 degrees C, a 210T anti-tearing polyester shell, a 190T pongee lining and a compression sack.\n\nIt is cheaper than the BORULL and prints a temperature range in Celsius. It splits into two singles when unzipped.\n\nIt suits couples on a tight budget on mild nights. A wipe-clean shell eases cleanup.",
    "specs": [
      "220 x 145 cm double",
      "10 to 20C design range",
      "Two pillows included"
    ],
    "pros": [
      "Lower price than the BORULL",
      "Two pillows in the box",
      "Splits into two single bags",
      "Compression sack with straps"
    ],
    "cons": [
      "Range is only 10 to 20C",
      "Smaller than the BORULL"
    ],
    "bestFor": "Budget couples, mild nights",
    "take": "A cheap double for two, with pillows included.",
    "catch": "Its 10 to 20C range is mild, about 50 to 68F."
  },
  {
    "id": "best-camping-sleeping-bags-5",
    "rank": 5,
    "badge": "Best Lowest Price",
    "name": "Lightweight Sleeping Bag for Adults",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ZcOYqq3fL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GSVJ3Z8Y?tag=rvgearlab-20",
    "description": "The YANLIFY lists a comfort temperature of 50 to 68 degrees F, a 190T polyester shell, a two-way zipper and a compression sack. It is sold as a 3-season waterproof bag.\n\nIt is the cheapest in the list by a wide margin and prints a clear range. The shell is thinner than the Coleman Brazos.\n\nIt suits casual campers on warm nights. Do not rely on it for cold.",
    "specs": [
      "Comfort 50 to 68F",
      "190T polyester shell",
      "Compression sack included"
    ],
    "pros": [
      "Lowest price in the list",
      "Comfort range is stated",
      "Two-way zipper",
      "Compression sack included"
    ],
    "cons": [
      "Mild weather only",
      "Thin shell"
    ],
    "bestFor": "Warm-night casual camping",
    "take": "The cheapest bag with a clear comfort range.",
    "catch": "It will not warm you below about 50F."
  }
];

export const howWeEvaluated = [
  {
    "title": "Printed ratings",
    "description": "Comfort and limit figures."
  },
  {
    "title": "Size",
    "description": "Length, width and doubles."
  },
  {
    "title": "Fill and lining",
    "description": "Named fill and lining."
  },
  {
    "title": "Extras",
    "description": "Pillows and splitting."
  },
  {
    "title": "Price",
    "description": "Cost against detail."
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
    "subheading": "By Camper",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Average height, cool nights",
          "Coleman Brazos 30F",
          "30F rated."
        ],
        [
          "Chilly camps, cozy",
          "FARLAND Fleece-Lined",
          "Fleece lining."
        ],
        [
          "Couples, tall",
          "BORULL Double Queen",
          "92 x 63, 7 ft."
        ],
        [
          "Budget couples",
          "oaskys Double Queen XL",
          "Cheaper double."
        ],
        [
          "Warm nights",
          "YANLIFY 3-Season",
          "Cheapest."
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
          "$10 to $40",
          "YANLIFY 3-Season or oaskys Double Queen XL"
        ],
        [
          "$40 to $60",
          "BORULL Double Queen or Coleman Brazos 30F"
        ],
        [
          "$50 to $60",
          "FARLAND Fleece-Lined"
        ]
      ]
    }
  },
  {
    "subheading": "Single vs Double",
    "cards": [
      {
        "label": "Single",
        "text": "Easy to size and pack. The Coleman Brazos 30F, FARLAND Fleece-Lined and YANLIFY 3-Season are singles."
      },
      {
        "label": "Double",
        "text": "Shared space, bulkier. The BORULL Double Queen and oaskys Double Queen XL are doubles."
      }
    ],
    "note": "Choose the BORULL Double Queen for two and the Coleman Brazos 30F for one."
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
          "Under $20",
          "YANLIFY 3-Season"
        ],
        [
          "Near $38",
          "oaskys Double Queen XL"
        ],
        [
          "Near $50",
          "BORULL Double Queen"
        ],
        [
          "Near $54",
          "Coleman Brazos 30F"
        ],
        [
          "Near $59",
          "FARLAND Fleece-Lined"
        ]
      ]
    }
  },
  {
    "subheading": "Car Camping Couples Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A double with printed ratings and pillows."
      },
      {
        "label": "In this comparison",
        "text": "The BORULL Double Queen prints comfort and limit figures and includes two pillows."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BORULL Double Queen for printed ratings and size."
      },
      {
        "label": "Save if",
        "text": "Save with the YANLIFY 3-Season or oaskys Double Queen XL for mild nights."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rating you can trust",
    "explanation": "A printed comfort figure tells you when you will be warm. The BORULL prints 40 to 65F with a 30F limit, and the Coleman Brazos prints 30F. Favor listings that print numbers."
  },
  {
    "criterion": "Length and width",
    "explanation": "A bag that is too short crushes your feet. The BORULL fits up to 7 ft and the Coleman Brazos to 5 ft 11 in. Compare to your height."
  },
  {
    "criterion": "Single or double",
    "explanation": "A double suits couples but is bulky for one. The BORULL and oaskys both split. Choose by how many sleepers you have."
  },
  {
    "criterion": "Lining and shell",
    "explanation": "A fleece lining like the FARLAND's feels warm instantly, while a 190T shell like the YANLIFY's is thin. The lining touches your skin all night, so it shapes comfort more than most buyers expect. Look at the lining and shell fabric."
  },
  {
    "criterion": "Pillows and extras",
    "explanation": "Included pillows save packing. The BORULL and oaskys include two. Check what is in the box."
  }
];

export const faq = [
  {
    "q": "Which camping bag is best for most people?",
    "a": "For cool nights, the Coleman Brazos 30F with a printed rating. For couples, the BORULL Double Queen."
  },
  {
    "q": "Are doubles warmer?",
    "a": "Two people share heat, but the bag still has its rating. The BORULL Double Queen prints a 30F limit."
  },
  {
    "q": "Is fleece lining worth it?",
    "a": "It feels warm and cozy, as in the FARLAND Fleece-Lined, but adds weight. It is for car camps."
  },
  {
    "q": "How do I wash a camping bag?",
    "a": "Check the tag, use a large machine and air dry. Doubles may need a laundromat."
  },
  {
    "q": "How do I stay warm?",
    "a": "Use a pad, a hat and dry socks. Fluff the bag before bed."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Sleeping Bags",
    "href": "/sleep-gear/best-backpacking-sleeping-bags"
  },
  {
    "title": "Best Backpacking Pillows For Side Sleepers",
    "href": "/sleep-gear/best-backpacking-pillows-for-side-sleepers"
  },
  {
    "title": "Best Backpacking Pillow For Stomach Sleepers",
    "href": "/sleep-gear/best-backpacking-pillow-for-stomach-sleepers"
  },
  {
    "title": "Best Backpacking Pillow For Back Sleepers",
    "href": "/sleep-gear/best-backpacking-pillow-for-back-sleepers"
  }
];
