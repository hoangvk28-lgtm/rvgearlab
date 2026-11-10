export const guideSlug = "best-camping-sleeping-bags-for-moto-camping";
export const guideTitle = "2 Best Camping Sleeping Bags For Moto Camping in 2026";
export const metaTitle = "Best Camping Sleeping Bags For Moto Camping";
export const metaDescription = "Best camping sleeping bags for moto camping: two packable picks compared on listed pack size, weight and rating for riders short on luggage space.";
export const mainKeyword = "best camping sleeping bags for moto camping";
export const introParagraphs = [
  "Moto camping is a packing puzzle, because every liter in a saddlebag or dry bag matters. Few Amazon sleeping bags state a pack size aimed at riders, so this short list leans on bags that print a compressed dimension or ship with a compression sack.",
  "Only two bags fit that need honestly: a 4 lb splicable rectangle and a budget bag with a hood and compression sack. A third result, a 90 by 40 inch cold-weather bag, was left out because its bulk works against a bike."
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
    "id": "best-camping-sleeping-bags-for-moto-camping-1",
    "rank": 1,
    "badge": "Best Rated Bag",
    "name": "KANYAK Outdoor Rectangular Sleeping Bag",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/416uiYdBf-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BGHD64PJ?tag=rvgearlab-20",
    "description": "Weighing 4 lb, the KANYAK rectangle measures 86.6 by 32.48 inches and lists ratings of 41F comfort and 32F limit. The listing gives a compressed pack size of 11 to 14.2 inches, three zippers including a foot zipper, and a 210T polyester shell.\n\nAgainst the Amazon Basics bag it adds a colder figure and a printed pack size, so you can check it against a roll bag. Two KANYAK bags can also splice together for a couple riding two-up.\n\nIt suits riders camping in cool spring and fall weather who want their numbers on the page. The foot zipper vents heat when the night warms.",
    "specs": [
      "Comfort 41F, limit 32F",
      "86.6 by 32.48 in, 4 lb",
      "Packs to 11 to 14.2 inches"
    ],
    "pros": [
      "Comfort and limit both printed",
      "Foot zipper for venting",
      "Splices with a second bag",
      "Printed packed size"
    ],
    "cons": [
      "4 lb is heavy for its warmth",
      "Narrower than some rectangles"
    ],
    "bestFor": "Cool-night rides with a partner",
    "take": "Printed numbers you can plan around, and it zips to a partner.",
    "catch": "At 41F comfort it is a cool-weather bag only."
  },
  {
    "id": "best-camping-sleeping-bags-for-moto-camping-2",
    "rank": 2,
    "badge": "Best Budget Pick",
    "name": "Amazon Basics Sleeping Bags for Adults",
    "price": "$22.64",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31-iGbt0YsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G63GJZJV?tag=rvgearlab-20",
    "description": "The Amazon Basics bag is rated for 50F and above and measures 84 by 31.5 inches. It has synthetic fill, an integrated hood, a compression carry sack, and loops for bundling after use.\n\nAgainst the KANYAK it sits at the warm-weather end with no pack dimension listed, and its compression sack and recycled polyester make it an easy first bag. It also opens fully to act as a blanket.\n\nIt suits riders on summer trips who want a simple, cheap bag. It is machine washable.",
    "specs": [
      "Rated 50F and above",
      "84 by 31.5 inches",
      "Hood, compression sack"
    ],
    "pros": [
      "Lowest price in the group",
      "Integrated hood",
      "Machine washable",
      "Unzips into a blanket"
    ],
    "cons": [
      "Basic design",
      "Warm weather only"
    ],
    "bestFor": "Summer rides on a budget",
    "take": "The cheapest way to get a compressible bag on the bike.",
    "catch": "It is for nights at or above 50F, and the listing gives no packed size."
  }
];

export const howWeEvaluated = [
  {
    "title": "Pack size",
    "description": "We looked for a printed compressed size and noted where none exists."
  },
  {
    "title": "Weight",
    "description": "We compared listed weights, since a 4 lb bag takes up luggage capacity."
  },
  {
    "title": "Temperature figures",
    "description": "We compared printed comfort and limit figures against bike-trip temperatures."
  },
  {
    "title": "Compression",
    "description": "We checked for a compression sack, since loose bags waste saddlebag space."
  },
  {
    "title": "Fit for the ride",
    "description": "We left out bulky bags that suit a car, not a bike."
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
    "subheading": "By Ride Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Cool spring and fall rides",
          "KANYAK Splicable",
          "41F comfort and 32F limit"
        ],
        [
          "Summer rides on a budget",
          "Amazon Basics 50F",
          "Rated 50F and above with a compression sack"
        ],
        [
          "Two riders sharing a bed",
          "KANYAK Splicable",
          "Splices with a second bag"
        ],
        [
          "Occasional trips, low spend",
          "Amazon Basics 50F",
          "Lowest price in the group"
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
          "$20 to $30",
          "Amazon Basics 50F"
        ],
        [
          "$30 to $40",
          "KANYAK Splicable"
        ]
      ]
    }
  },
  {
    "subheading": "Warmer Rating vs Smaller Footprint",
    "cards": [
      {
        "label": "Warmer rating",
        "text": "The KANYAK Splicable prints a 41F comfort figure and 32F limit, and it weighs 4 lb. It takes more room in luggage."
      },
      {
        "label": "Cheaper and simpler",
        "text": "The Amazon Basics 50F is rated 50F and above and costs less. It prints no pack size, so measure it once it arrives."
      }
    ],
    "note": "Choose the KANYAK Splicable for cool-weather rides and the Amazon Basics 50F for summer trips."
  },
  {
    "subheading": "By Price",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price",
          "Amazon Basics 50F"
        ],
        [
          "Mid price with printed ratings",
          "KANYAK Splicable"
        ]
      ]
    }
  },
  {
    "subheading": "Saddlebag Fit Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a compression sack and a printed pack size under 15 inches."
      },
      {
        "label": "In this comparison",
        "text": "The KANYAK Splicable lists a compressed size of 11 to 14.2 inches, and the Amazon Basics 50F ships with a compression carry sack."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the KANYAK Splicable if your rides reach cool nights and you want a printed pack size and comfort figure."
      },
      {
        "label": "Save if",
        "text": "Save with the Amazon Basics 50F if you ride in summer and a basic bag with a compression sack is enough."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Packed size over weight",
    "explanation": "Riders have volume limits before weight limits. The KANYAK lists a pack size of 11 to 14.2 inches, a figure you can hold against a roll bag. When a listing prints no size, plan for a bag about the size of a large sleeping-bag stuff sack."
  },
  {
    "criterion": "Compression sacks",
    "explanation": "A compression sack shrinks the bag and keeps it dry in a roll bag. Both picks include a sack or carry bag. Check strap count and sack size on the listing."
  },
  {
    "criterion": "Temperature range",
    "explanation": "Bikes expose you to wind and cold at the start and finish of a day, so ratings matter. The Amazon Basics bag lists 50F and above, and the KANYAK lists 41F comfort. Take the comfort number as the one to plan on."
  },
  {
    "criterion": "Rectangle or mummy",
    "explanation": "Rectangular bags like both picks open flat and feel roomy, but they pack larger than a mummy of the same rating. If your luggage is tight, a mummy saves space. This list had no mummy that fit a bike well."
  },
  {
    "criterion": "Washability and wear",
    "explanation": "Road dust and spills are part of the trip. Amazon Basics lists machine washable construction. Check care instructions on any bag before you ride."
  },
  {
    "criterion": "Pad compatibility",
    "explanation": "The pad often takes more luggage room than the bag. Plan the pair together, and choose a pad with a stated R-value. A bag rated 50F plus a warm pad covers more nights than a bag alone."
  }
];

export const faq = [
  {
    "q": "What makes a sleeping bag good for moto camping?",
    "a": "Small packed size and a compression sack come first. Then add a temperature rating that suits your route. The KANYAK lists a pack size of 11 to 14.2 inches."
  },
  {
    "q": "What do riders get wrong about bags?",
    "a": "They buy a bag that fits the tent but not the luggage. Check the packed size before you buy, and measure your roll bag."
  },
  {
    "q": "Is the KANYAK worth it over the Amazon Basics bag?",
    "a": "If you ride in cool weather or share a bed, yes. For summer trips the Amazon Basics bag costs less and still has a compression sack."
  },
  {
    "q": "How do I pack a rectangular bag on a bike?",
    "a": "Compress it in the sack, then roll it inside a dry bag. Strap it low and centered on the seat or rack."
  },
  {
    "q": "Can I use a liner to extend either bag?",
    "a": "A liner adds a few degrees and keeps the bag clean. It also adds a little weight and volume, so test the pack with the liner in."
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
