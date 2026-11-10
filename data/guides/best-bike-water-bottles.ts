export const guideSlug = "best-bike-water-bottles";
export const guideTitle = "4 Best Bike Water Bottles in 2026";
export const metaTitle = "Best Bike Water Bottles in 2026";
export const metaDescription = "Bike water bottles compared by capacity and valve: 24 oz CamelBak, a 30 oz HydraPak, a GEMFUL 2-pack and a 33 oz ZEFAL for rides of every length.";
export const mainKeyword = "best bike water bottles";
export const introParagraphs = [
  "A good bike bottle fits your cage, squeezes easily and does not leak when you toss it back in. Size and valve design matter more than color.",
  "At RV Gear Lab, we compared four bottles by capacity, material, valve and grip. They run from a 24 oz everyday bottle to a 33 oz endurance bottle so you can match the bottle to the ride."
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
    "id": "best-bike-water-bottles-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "CamelBak Podium Water Bottle 24oz",
    "price": "$13.40",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ZwssiiweL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07HGR3S45?tag=rvgearlab-20",
    "description": "CamelBak Podium 24 oz is shaped to stay in most bike cages on road, gravel and mountain terrain. A high-flow self-sealing cap delivers more water per sip while helping prevent splatter, and the body squeezes easily with less hand fatigue.\n\nIt is the best everyday size of the group, with a cap that stays clean between sips. It is lighter and smaller than the 30 oz and 33 oz picks.\n\nRoad, gravel and trail riders who want a dependable bottle will like it. It is an easy bottle to grab and drink from without slowing down.",
    "specs": [
      "24 oz squeezable bottle",
      "High-flow self-sealing cap",
      "Fits most bike cages"
    ],
    "pros": [
      "Self-sealing high-flow cap",
      "Easy squeeze body",
      "Fits most cages",
      "Reduced splatter"
    ],
    "cons": [
      "Smaller than 30 oz bottles",
      "Mid-range price"
    ],
    "bestFor": "Everyday riding",
    "take": "The dependable all-round bike bottle.",
    "catch": "24 oz may be small for long rides."
  },
  {
    "id": "best-bike-water-bottles-2",
    "rank": 2,
    "badge": "Best Large Squeeze Bottle",
    "name": "HydraPak Breakaway Surge Lightweight Bike Water Bottle",
    "price": "$22.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31k0kO7WwfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FCYZ8FM5?tag=rvgearlab-20",
    "description": "HydraPak Breakaway Surge holds 30 oz in a lightweight, 100% BPA-free design with a minimalist single-wall build. Flexible, ultra-light materials and a grip groove make it easy to squeeze.\n\nIt holds more than the CamelBak Podium and is designed for bike cages across frame sizes. The grip groove helps you hold it without looking down.\n\nLong-ride cyclists and gravel riders will like the bigger volume. Fewer refills mean more riding time.",
    "specs": [
      "30 oz BPA-free bottle",
      "Single-wall lightweight design",
      "Grip groove, high-flow squeeze"
    ],
    "pros": [
      "30 oz capacity",
      "BPA-free materials",
      "Easy squeeze with grip groove",
      "Light single-wall build"
    ],
    "cons": [
      "Higher price",
      "Single wall does not insulate"
    ],
    "bestFor": "Long rides",
    "take": "The big bottle for long days.",
    "catch": "Price is above most bottles."
  },
  {
    "id": "best-bike-water-bottles-3",
    "rank": 3,
    "badge": "Best Value Pair",
    "name": "GEMFUL MTB Bike Water Bottles 2 Pack 24oz BPA-Free",
    "price": "$12.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/417AA9t5-qL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DT8QZWF3?tag=rvgearlab-20",
    "description": "GEMFUL provides two 24 oz bottles made from food-grade PP plastic that is 100% BPA free. A self-sealing silicone valve allows one-handed squeeze-to-drink, and the ergonomic notch grip suits bike cages.\n\nTwo bottles at a price close to a single CamelBak give you a spare for the next rider or ride. The valve is leakproof.\n\nRiders who want a spare or a bottle for a partner will like the pair. Keep one in each cage or hand one to a friend.",
    "specs": [
      "Two 24 oz BPA-free bottles",
      "Self-sealing silicone valve",
      "Notch grip for cages"
    ],
    "pros": [
      "Two bottles per pack",
      "Leakproof valve",
      "Food-grade BPA-free plastic",
      "One-handed drinking"
    ],
    "cons": [
      "Less known brand",
      "Same size as CamelBak"
    ],
    "bestFor": "Pairs and spares",
    "take": "Two bottles at a fair price.",
    "catch": "Check the bottle fits your cage."
  },
  {
    "id": "best-bike-water-bottles-4",
    "rank": 4,
    "badge": "Best Endurance Bottle",
    "name": "ZEFAL Magnum 975ml Bike Water Bottle",
    "price": "$6.23",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31aBlMf6k0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CW6KD15C?tag=rvgearlab-20",
    "description": "ZEFAL Magnum holds 975ml (33 oz) of water and is made from premium polypropylene that is BPA free and odorless. A soft cap with a food-grade silicone nozzle gives a smooth drinking experience.\n\nIt is the biggest bottle in the group and the cheapest, which minimizes refill stops on long rides. The soft nozzle works one-handed.\n\nEndurance and touring riders will like fewer stops. One bottle can carry most of a medium ride.",
    "specs": [
      "975ml (33 oz) bottle",
      "BPA-free polypropylene",
      "Soft cap and silicone nozzle"
    ],
    "pros": [
      "33 oz capacity",
      "Odorless polypropylene",
      "Soft silicone nozzle",
      "Lowest price"
    ],
    "cons": [
      "May not fit small cages",
      "Bulkier to handle"
    ],
    "bestFor": "Long rides and touring",
    "take": "The largest and cheapest bottle here.",
    "catch": "Check your cage fits 33 oz."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Compared ounces and milliliters."
  },
  {
    "title": "Valve and cap",
    "description": "Looked at self-sealing and nozzle designs."
  },
  {
    "title": "Material",
    "description": "Considered BPA-free plastics."
  },
  {
    "title": "Grip",
    "description": "Compared squeeze and grip features."
  },
  {
    "title": "Price",
    "description": "Weighed cost per bottle."
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
    "subheading": "By Ride Length",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Short and medium rides",
          "CamelBak Podium 24 oz",
          "24 oz."
        ],
        [
          "Long rides",
          "HydraPak Breakaway Surge 30 oz",
          "30 oz."
        ],
        [
          "Spare bottle",
          "GEMFUL 2-Pack",
          "Two 24 oz."
        ],
        [
          "Touring",
          "ZEFAL Magnum 975ml",
          "33 oz."
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
          "ZEFAL Magnum 975ml or GEMFUL 2-Pack"
        ],
        [
          "$10 to $30",
          "CamelBak Podium 24 oz or HydraPak Breakaway Surge 30 oz"
        ]
      ]
    }
  },
  {
    "subheading": "Standard vs Large Bottle",
    "cards": [
      {
        "label": "Standard 24 oz",
        "text": "Fits every cage and weighs less. CamelBak Podium 24 oz and GEMFUL 2-Pack are 24 oz."
      },
      {
        "label": "Large 30 to 33 oz",
        "text": "Fewer refills on long rides. HydraPak Breakaway Surge 30 oz and ZEFAL Magnum 975ml are large."
      }
    ],
    "note": "Most riders should default to CamelBak Podium 24 oz."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "If you want",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price",
          "ZEFAL Magnum 975ml"
        ],
        [
          "Two bottles",
          "GEMFUL 2-Pack"
        ],
        [
          "Grip groove",
          "HydraPak Breakaway Surge 30 oz"
        ]
      ]
    }
  },
  {
    "subheading": "For Gravel Rides Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A bottle that stays in the cage on rough ground."
      },
      {
        "label": "In this comparison",
        "text": "CamelBak Podium 24 oz is shaped to stay in most cages."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on HydraPak Breakaway Surge 30 oz for volume."
      },
      {
        "label": "Save if",
        "text": "Save with ZEFAL Magnum 975ml."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Bottle size",
    "explanation": "A 24 oz bottle covers a ride of an hour or two in mild weather, while 30 to 33 oz suits long rides or hot days. Larger bottles may not fit smaller cages or the lower mount of a frame. Check the ounces and compare them with your cage."
  },
  {
    "criterion": "Valve and cap design",
    "explanation": "A self-sealing valve stops drips between sips, and a soft silicone nozzle makes one-handed drinking easier. Hard caps can be awkward at speed. Check the valve and cap description on the listing."
  },
  {
    "criterion": "Material and taste",
    "explanation": "BPA-free food-grade plastic is the standard, and polypropylene is odorless. Single-wall bottles do not insulate, so water warms in the sun. Check the material in the title and bullet points."
  },
  {
    "criterion": "Squeeze and grip",
    "explanation": "A soft body and a grip groove make it easy to squeeze water out while riding. Stiff bottles are harder to use with gloves. Check for squeeze or grip features before you buy."
  },
  {
    "criterion": "Cage fit",
    "explanation": "Slim, tapered bottles hold best in cages, and wide ones can rattle or pop out. Standard cages fit bottles around 2.75 to 3 inches wide. Check the bottle diameter against your cage and read the fit notes."
  }
];

export const faq = [
  {
    "q": "What size bike bottle do I need?",
    "a": "A 24 oz bottle suits rides under two hours, and 30 oz or more suits long days. Carry two bottles on hot rides. Match the size to your cage."
  },
  {
    "q": "Do bike bottles leak?",
    "a": "Self-sealing caps like those on CamelBak Podium 24 oz and GEMFUL 2-Pack are designed to stop drips. Make sure the cap is fully closed before putting it in the cage. Replace the cap if it cracks."
  },
  {
    "q": "Is BPA-free important on a bike bottle?",
    "a": "Yes, since you drink from it directly. All four bottles here list BPA-free materials. Look for the claim when you buy."
  },
  {
    "q": "How do I clean a bike bottle?",
    "a": "Wash with warm soapy water and a bottle brush, then air dry with the cap off. Mold forms if you leave water in it. Replace the nozzle if it stains."
  },
  {
    "q": "Will every bottle fit every cage?",
    "a": "Not always. Large bottles like ZEFAL Magnum 975ml may be snug or loose in some cages. Test your cage before a long ride."
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
