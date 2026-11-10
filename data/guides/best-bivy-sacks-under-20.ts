export const guideSlug = "best-bivy-sacks-under-20";
export const guideTitle = "5 Best Bivy Sacks Under 20 in 2026";
export const metaTitle = "Best Bivy Sacks Under 20 in 2026";
export const metaDescription = "Best bivy sacks under $20, compared on weight, size, material and what is in the box, from a 260g waterproof cover to two-pack emergency bags.";
export const mainKeyword = "best bivy sacks under 20";
export const introParagraphs = [
  "Under $20 a bivy sack means one of two things: a thin waterproof cover for your sleeping bag, or a reflective emergency bag meant to be stuffed in a kit. Both are real bivy sacks, and knowing which job you want matters more than any spec on the label.",
  "Five options sit under the cap. They are ordered by how useful each is on an actual camping trip, with the reusable cover first and the pure emergency bags after it."
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
    "id": "best-bivy-sacks-under-20-1",
    "rank": 1,
    "badge": "Best Value Under $20",
    "name": "Ultra-Light Waterproof Bivy Bag for Camping and Hiking",
    "price": "$19.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31tkPyRMDDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H5QKBZFF?tag=rvgearlab-amz-20",
    "description": "This bivy bag is a nylon PU sleeping bag cover that weighs about 260 grams, folds small and sheds water and dust. It doubles as a rainproof shelter sheet, a ground cover or a sunshade when you open it flat.\n\nAmong the five picks, it is the one made as a reusable outer cover for a sleeping bag, where the others are mostly thin mylar for emergencies. It weighs far less than a sleeping bag cover from a big outdoor brand, and its price is just under the cap.\n\nIt suits backpackers who need extra wet-weather protection for a down bag. Slip your bag inside and leave the zipper for ventilation.",
    "specs": [
      "About 260g, nylon PU",
      "Waterproof and dustproof",
      "Folds into a small pack"
    ],
    "pros": [
      "Very light at about 260 grams",
      "Doubles as a ground cover or sunshade",
      "Wear-resistant nylon PU material",
      "Packs small in a backpack"
    ],
    "cons": [
      "Thin material needs careful handling",
      "No insulation of its own"
    ],
    "bestFor": "Backpackers adding rain cover",
    "take": "A practical shell for a sleeping bag, and the best way to spend under $20 on actual camping.",
    "catch": "It adds weatherproofing, not warmth, so pair it with a proper sleeping bag."
  },
  {
    "id": "best-bivy-sacks-under-20-2",
    "rank": 2,
    "badge": "Best Sturdy Emergency Bag",
    "name": "MADIKRI Camping Sleeping Bag for Adults Emergency Thermal Bivy Sacks Orange",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410OmaNSJeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H6DV6G1F?tag=rvgearlab-amz-20",
    "description": "The MADIKRI bag measures about 78 by 37.5 inches and uses tear-resistant Oxford fabric on the outside with a reflective polyester film inside. It has a half zipper and a drawstring hood.\n\nA zipper and an Oxford shell make it more durable than the foil two-packs below it, and it can be reused many times. It costs about the same as the SURVIVE kit and offers a more complete cover.\n\nIt suits car campers and hikers who want an emergency layer that survives more than one use. It packs into a bag roughly 8 by 5 inches.",
    "specs": [
      "78x37.5 in, Oxford shell",
      "Reflective film lining",
      "Half zipper, drawstring hood"
    ],
    "pros": [
      "Oxford shell resists branches and rough ground",
      "Half zipper adjusts coverage",
      "Drawstring hood holds in heat",
      "Compact pack size"
    ],
    "cons": [
      "Only 37.5 inches wide",
      "Single bag, not a two-pack"
    ],
    "bestFor": "Reusable emergency layer",
    "take": "Pick this if you want the most rugged emergency bag under $20.",
    "catch": "A narrower cut leaves little room for thick clothing."
  },
  {
    "id": "best-bivy-sacks-under-20-3",
    "rank": 3,
    "badge": "Best Two-Pack Length",
    "name": "NovaMedic Emergency Sleeping Bag 2 Pack",
    "price": "$14.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41lR9wQvGUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H1Y1L2DQ?tag=rvgearlab-amz-20",
    "description": "The NovaMedic pack includes two 84 by 36 inch thermal mylar bags that are packed separately. They are waterproof, wind-resistant and fold small enough for a glove box or a pack.\n\nAt 84 inches the NovaMedic is the longest bag here, which matters for taller campers. It is cheaper than the MADIKRI and gives you two bags for the money.\n\nIt suits families or couples who want one bag per car or pack. Keep one in the vehicle and one in your hiking kit.",
    "specs": [
      "Two 84x36 in mylar bags",
      "Individually packed",
      "Waterproof and wind-resistant"
    ],
    "pros": [
      "Longest bag at 84 inches",
      "Two bags for one price",
      "Individually packed for separate kits",
      "Folds to glove-box size"
    ],
    "cons": [
      "No zipper or hood",
      "Single-use feel in rough conditions"
    ],
    "bestFor": "Tall campers and car kits",
    "take": "Good coverage for people over six feet tall, and an easy way to stock two kits.",
    "catch": "Mylar tears if it snags, so handle it gently."
  },
  {
    "id": "best-bivy-sacks-under-20-4",
    "rank": 4,
    "badge": "Best Wide Cut",
    "name": "Zmoon Emergency Sleeping Bags 2 Pack Portable Waterproof Thermal Bivy Sacks",
    "price": "$11.30",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oJvyEjrZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07VLY4558?tag=rvgearlab-amz-20",
    "description": "The Zmoon bag opens to 78 by 47 inches and uses mylar foil that reflects about 95 percent of body heat. It comes in a small carry bag, and the set holds two sacks.\n\nIt is the widest bag in the group, wider than the 36-inch NovaMedic and the 37.5-inch MADIKRI, which gives room for winter layers. It is also the cheapest pick, so it works as a spare.\n\nIt suits larger campers who find narrow emergency bags too tight. Use it as a ground sheet if you need to cover wet soil.",
    "specs": [
      "78x47 in mylar foil",
      "Reflects about 95% of body heat",
      "Two bags, carry pouch"
    ],
    "pros": [
      "Widest cut in this group",
      "Low price for two bags",
      "Reflective foil retains heat",
      "Light and compact"
    ],
    "cons": [
      "Shorter than the NovaMedic",
      "No zipper or hood"
    ],
    "bestFor": "Larger campers",
    "take": "A roomy, low-cost emergency bag for people who find narrow ones too tight.",
    "catch": "Foil crackles loudly and can tear at a sharp edge."
  },
  {
    "id": "best-bivy-sacks-under-20-5",
    "rank": 5,
    "badge": "Best Kit With Whistle",
    "name": "SURVIVE Sleeping Bag 2 Pack",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51hZUAAokdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWS3H6MX?tag=rvgearlab-amz-20",
    "description": "The SURVIVE set includes two mylar bivy bags, each with a whistle and 14 inches of paracord. A packed bag measures about 2.5 by 4 inches and weighs 5 ounces.\n\nThe whistle and cord turn each bag into a small survival kit, which the foil-only NovaMedic and Zmoon do not offer. It costs a few dollars more than those two and has the smallest pack size.\n\nIt suits hikers and kids who want a signal tool in the same package as the bag. Clip the whistle to a pack strap.",
    "specs": [
      "Two mylar bags, 5 oz each",
      "Whistle and paracord included",
      "Packs to 2.5x4 inches"
    ],
    "pros": [
      "Whistle and cord included",
      "Very small packed size",
      "Tape removes to form a tarp",
      "Two bags per set"
    ],
    "cons": [
      "Little detail on the bag dimensions",
      "Foil is thin"
    ],
    "bestFor": "Hiking kits with a whistle",
    "take": "A good add-on to a day pack, since the whistle and cord are useful on their own.",
    "catch": "Check that the bag is long enough for you before relying on it."
  }
];

export const howWeEvaluated = [
  {
    "title": "Shell or emergency",
    "description": "Compared reusable shell covers against single-use mylar bags, since the two serve different jobs."
  },
  {
    "title": "Weight and pack size",
    "description": "Looked at stated weights, 260g to about 5 ounces, and packed dimensions."
  },
  {
    "title": "Size of the bag",
    "description": "Compared lengths and widths, from 78 by 37.5 to 84 by 36 and 78 by 47 inches."
  },
  {
    "title": "Extras in the box",
    "description": "Counted bags per pack and any whistle or paracord."
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
    "subheading": "By trip type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Backpacking with a down bag",
          "Ultra-Light Nylon Bivy",
          "Light waterproof cover at about 260 grams."
        ],
        [
          "Emergency layer for a car",
          "NovaMedic 84-Inch 2-Pack",
          "Two long bags for two kits."
        ],
        [
          "Tough reusable emergency bag",
          "MADIKRI Oxford Bag",
          "Oxford shell with zipper and hood."
        ],
        [
          "Larger or taller camper",
          "Zmoon 78x47 2-Pack",
          "Wide 47-inch cut."
        ],
        [
          "Hiking kit with whistle",
          "SURVIVE 2-Pack Kit",
          "Whistle and paracord in the set."
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
          "$10 to $20",
          "NovaMedic 84-Inch 2-Pack or Zmoon 78x47 2-Pack"
        ],
        [
          "$10 to $20",
          "Ultra-Light Nylon Bivy or MADIKRI Oxford Bag"
        ],
        [
          "$10 to $20",
          "SURVIVE 2-Pack Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Shell cover vs mylar bag",
    "cards": [
      {
        "label": "Shell cover",
        "text": "A shell cover like the Ultra-Light Nylon Bivy adds rain and wind protection to a sleeping bag you already own. It adds no insulation of its own."
      },
      {
        "label": "Mylar bag",
        "text": "A mylar bag like the Zmoon 78x47 2-Pack or the NovaMedic 84-Inch 2-Pack reflects body heat and works alone for a short emergency. It is not comfortable for a full night."
      }
    ],
    "note": "Choose the Ultra-Light Nylon Bivy for camping and a mylar pack only for your emergency kit."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Around $15",
          "Zmoon 78x47 2-Pack"
        ],
        [
          "Around $15 for length",
          "NovaMedic 84-Inch 2-Pack"
        ],
        [
          "Around $19.50",
          "Ultra-Light Nylon Bivy"
        ],
        [
          "Around $20 sturdier",
          "MADIKRI Oxford Bag"
        ],
        [
          "Around $20 with whistle",
          "SURVIVE 2-Pack Kit"
        ]
      ]
    }
  },
  {
    "subheading": "For car emergency kits specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for packs that include two bags and a small stuff size."
      },
      {
        "label": "In this comparison",
        "text": "The NovaMedic 84-Inch 2-Pack stores two bags in a glove box, and the SURVIVE 2-Pack Kit adds a whistle to each."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a reusable shell, which means moving up to the $30 tier for a bug bivy or a ripstop cover. Under the cap, the MADIKRI Oxford Bag is the sturdiest step up from foil."
      },
      {
        "label": "Save if",
        "text": "Save if all you need is a backup in the car, because the Zmoon 78x47 2-Pack and NovaMedic 84-Inch 2-Pack cost the least per bag."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Cover or emergency bag",
    "explanation": "A true bivy cover wraps a sleeping bag in a waterproof shell, while an emergency bag is a thin mylar sack meant to hold heat in a crisis. They look similar at this price yet serve different needs. Decide whether you want weather protection for camping or a safety item for a kit, and check the product title for the word emergency."
  },
  {
    "criterion": "Length and width",
    "explanation": "Emergency bags range from about 78 to 84 inches long and 36 to 47 inches wide, which can be tight for large campers. A narrow bag leaves no room for a thick jacket. Measure your height plus a few inches and compare it to the stated length."
  },
  {
    "criterion": "Material feel",
    "explanation": "Mylar foil is light and reflective but tears easily, while Oxford or nylon fabric resists snags. Foil also crinkles loudly and holds condensation, so a fabric shell feels less clammy at 3 a.m. Look for the fabric name in the title, and expect a shell to last several trips instead of one."
  },
  {
    "criterion": "Heat claims in context",
    "explanation": "Reflective bags are often said to return 90 or 95 percent of body heat, but that depends on a sealed fit and an insulating layer underneath. They are not a replacement for a sleeping bag in cold weather. Treat the percentage as a feature of the material and not a temperature rating."
  },
  {
    "criterion": "Pack count and extras",
    "explanation": "Two-packs, four-packs and kits add whistles, cord or stuff sacks, which can double as safety gear. Count the number of bags and extras against your plan, such as one per car and one per hiker. A multi-pack costs less per bag but leaves you carrying more than you need."
  }
];

export const faq = [
  {
    "q": "Is a bivy sack the same as a sleeping bag?",
    "a": "No. A bivy sack is a shell or emergency bag that adds weather protection and some heat retention, while a sleeping bag provides real insulation. The Ultra-Light Nylon Bivy works over a sleeping bag, and the mylar bags work only as emergency layers."
  },
  {
    "q": "Can I sleep in a mylar bag overnight?",
    "a": "You can in an emergency, but condensation builds inside because the foil does not breathe. You will wake damp unless you wear dry layers and ventilate. The MADIKRI Oxford Bag helps a little with its fabric shell and zipper."
  },
  {
    "q": "How do I stop condensation in a bivy?",
    "a": "Leave the hood or zipper partly open, keep your breath outside the bag and avoid sealing yourself in on a wet night. Condensation forms when warm air meets a cold waterproof surface. A breathable cover like the Ultra-Light Nylon Bivy still traps some moisture."
  },
  {
    "q": "Do the emergency bags come with a zipper?",
    "a": "Most do not. The MADIKRI Oxford Bag has a half zipper and a drawstring hood, while the NovaMedic, Zmoon and SURVIVE bags are simple open sacks. If you want easy entry, the zipper bag is worth the small price jump."
  },
  {
    "q": "How do I repack a mylar bag?",
    "a": "Fold it along the original creases and keep it in its pouch. Do not crumple it, since sharp creases split the foil, and store it away from a knife or pointed gear. A tidy fold keeps the SURVIVE 2-Pack Kit at its 2.5 by 4 inch size."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Bivy Sacks",
    "href": "/tents-shelter/best-bivy-sacks"
  },
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
  }
];
