export const guideSlug = "best-headlamps-for-hiking";
export const guideTitle = "6 Best Headlamps For Hiking in 2026";
export const metaTitle = "Best Headlamps For Hiking in 2026";
export const metaDescription = "Best headlamps for hiking compared on weight, beam shape, battery type and weather rating, from a Black Diamond to light budget two-packs.";
export const mainKeyword = "best headlamps for hiking";
export const introParagraphs = [
  "A hiking headlamp lives on your head for hours, so weight, balance and a wide, even beam matter more than raw lumens. The other big decision is power: AAA batteries that you can swap on a long hike, or a USB battery that you top up each night.",
  "Six headlamps are compared, from a Black Diamond Cosmo 350 to budget two-packs and an Energizer that ships with batteries. The write-up leans on weight, battery type and weather rating from each listing, since the lumen figures in some titles are not realistic."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/gear-lit-tent-night.webp";
export const heroImageAlt = "Tent lit from inside in the middle of a forest at night";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-headlamps-for-hiking-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "BLACK DIAMOND Cosmo 350 Headlamp",
    "price": "$33.88",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31w-LbyL25L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H1X5J79N?tag=rvgearlab-20",
    "description": "The Black Diamond Cosmo 350 produces up to 350 lumens, runs on three included AAA batteries or the rechargeable BD 1500 Li-ion pack, and is rated IP67 for 30 minutes of submersion in 1 meter of water. Dimming, strobe and red night-vision modes are listed.\n\nIt is the only pick that lets you choose AAA or a rechargeable pack, and the only one with an IP67 rating. A low-profile body and adjustable headband suit long hikes and runs.\n\nIt suits hikers who want a dependable lamp that takes cells from any store. The brand is a known outdoor name.",
    "specs": [
      "350 lumens, 3 AAA included",
      "IP67, dual fuel (AAA or BD 1500)",
      "Dimming, strobe, red mode"
    ],
    "pros": [
      "Dual fuel: AAA or rechargeable pack",
      "IP67 waterproof",
      "Dimming and red modes",
      "Low-profile comfortable fit"
    ],
    "cons": [
      "Highest price of the six",
      "Rechargeable pack sold separately"
    ],
    "bestFor": "Long hikes, wet trips",
    "take": "A rugged, flexible hiking lamp with the best weather rating here.",
    "catch": "Dry it out completely after wet use, per the listing."
  },
  {
    "id": "best-headlamps-for-hiking-2",
    "rank": 2,
    "badge": "Best Rechargeable Pair",
    "name": "Lepro Rechargeable LED Headlamp Bright Waterproof Headlight 2 Pack",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41D2kMMPwqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07Y21GMKQ?tag=rvgearlab-20",
    "description": "The Lepro 2-Pack lists a beam of up to 2,000 lux reaching 500 feet, six modes including spot, flood and red, and up to 15 hours per charge over USB-C. It weighs 2.65 ounces and tilts 45 degrees under an IPX4 rating.\n\nIt has a spare lamp for the price of one, and a stated 15 hour runtime that beats the Blukar's unstated figure. It lists lux, not lumens, which is a useful beam measure.\n\nIt suits budget hikers who want a rechargeable pair for the pack and the car. The sweat-proof headband fits adults and kids.",
    "specs": [
      "2000 lux, 500 ft reach",
      "15 hours, USB-C",
      "2.65 oz, IPX4"
    ],
    "pros": [
      "Two lamps for a low price",
      "15 hour runtime stated",
      "Spot, flood and red modes",
      "2.65 ounce weight"
    ],
    "cons": [
      "IPX4 is splash resistance only",
      "Built-in battery"
    ],
    "bestFor": "Budget rechargeable pair",
    "take": "A well-priced rechargeable pair with a stated runtime.",
    "catch": "Charge both before the trip, since neither takes AAA cells."
  },
  {
    "id": "best-headlamps-for-hiking-3",
    "rank": 3,
    "badge": "Best Wide-Beam Pair",
    "name": "Headlamp Rechargeable 2PCS",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41lukIQIYtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B4KK73NB?tag=rvgearlab-20",
    "description": "This 2-pack throws a 230-degree wide beam from a COB LED plus a spotlight, with six modes and a motion sensor that works within about 10 cm. The silicone and elastic body weighs 2.47 ounces, and the lamps are rated IPX4.\n\nIt spreads light across the trail without moving your head, a benefit that spot-only lamps cannot match. It lists the lightest weight among the rechargeable pairs.\n\nIt suits trail runners and hikers who prefer floodlight over spot. Hand-wave control works with gloves.",
    "specs": [
      "230-degree beam, COB and spot",
      "Motion sensor, six modes",
      "2.47 oz, IPX4"
    ],
    "pros": [
      "230-degree wide beam",
      "Two lamps in the pack",
      "2.47 ounces",
      "Motion sensor with gloves"
    ],
    "cons": [
      "Battery capacity not stated",
      "Motion sensor can trigger by accident"
    ],
    "bestFor": "Wide trail beam",
    "take": "A light wide-beam pair for trail travel.",
    "catch": "Short on spot reach compared with the Lepro."
  },
  {
    "id": "best-headlamps-for-hiking-4",
    "rank": 4,
    "badge": "Best Dimming Control",
    "name": "Blukar LED Headlamp Rechargeable",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51odzuo7HmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BLVT2Y9N?tag=rvgearlab-20",
    "description": "The Blukar combines COB and XPG LEDs with stepless dimming, eight modes and a motion sensor, powered by a 1200mAh USB-C battery. The removable, washable headband adjusts in length, and the lamp is rated IPX5.\n\nIt has the finest brightness control of the six and a better water rating than the Lepro's IPX4. The title's 2000L figure is a marketing number, so lean on the modes and battery.\n\nIt suits hikers who like to dial brightness for map reading and trail. The washable band keeps long trips fresher.",
    "specs": [
      "COB plus XPG, stepless dimming",
      "1200mAh USB-C, IPX5",
      "Eight modes, motion sensor"
    ],
    "pros": [
      "Stepless dimming",
      "IPX5 water rating",
      "Washable removable headband",
      "Eight modes with red"
    ],
    "cons": [
      "Lumen claim is not realistic",
      "Runtime is not stated"
    ],
    "bestFor": "Fine brightness control",
    "take": "A dimmable, washable lamp with IPX5 protection.",
    "catch": "Ignore the 2000L figure and judge it by modes and runtime."
  },
  {
    "id": "best-headlamps-for-hiking-5",
    "rank": 5,
    "badge": "Best AAA Value",
    "name": "Lepro Headlamp Battery Powered Waterproof LED Headlight 2 Pack",
    "price": "$13.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iB+0wv56L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07Y21PLQM?tag=rvgearlab-20",
    "description": "The Lepro battery-powered 2-Pack throws up to 1,300 lux at 400 feet from an XPG2 LED, runs 22 hours on the low setting and has six modes including red. The 45-degree tilt head and removable, washable headband fit hard hats as well.\n\nIt runs on replaceable batteries instead of an internal cell, so a spare set solves a dead lamp on the trail. It reaches less far than the rechargeable Lepro at 400 feet against 500.\n\nIt suits budget hikers who prefer swappable cells. It is also rated against splashes and drops.",
    "specs": [
      "1300 lux, 400 ft reach",
      "22 hours on low",
      "Six modes, 45-degree tilt"
    ],
    "pros": [
      "Replaceable batteries",
      "22 hour low runtime",
      "Six modes including red",
      "Fits hard hats"
    ],
    "cons": [
      "Battery type is not named",
      "Shorter reach than rechargeable Lepro"
    ],
    "bestFor": "Swappable-cell backup",
    "take": "A budget lamp that runs on any AAA cells you carry.",
    "catch": "Pack spare cells, because it does not charge."
  },
  {
    "id": "best-headlamps-for-hiking-6",
    "rank": 6,
    "badge": "Best Ready-to-Use",
    "name": "Energizer PRO-360 LED Headlamp",
    "price": "$12.54",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Dq0QSLrQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B083JV9DB9?tag=rvgearlab-20",
    "description": "The Energizer PRO-360 ships with three Energizer batteries and lists modes for high, low, wide, wide low, green, red and flashing. The VisionGuard feature gradually raises intensity, and the IPX4 body is rated for impact up to 1 meter with a shatterproof lens.\n\nIt costs the least of the six and works out of the box. It is also the only pick that adds a green mode.\n\nIt suits new hikers and emergency kits that want a ready lamp with batteries. The wide mode helps with campsite tasks.",
    "specs": [
      "Three batteries included",
      "Green, red, wide and spot modes",
      "IPX4, 1 meter impact"
    ],
    "pros": [
      "Batteries included",
      "Lowest price of the six",
      "Green and red modes",
      "1 meter impact rating"
    ],
    "cons": [
      "Lumen output not stated",
      "IPX4 only"
    ],
    "bestFor": "Emergency kits, new hikers",
    "take": "A cheap lamp that works out of the box with batteries.",
    "catch": "No lumen figure is given, so brightness is a guess."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight and fit",
    "description": "Listed weights and headband designs were compared."
  },
  {
    "title": "Beam",
    "description": "Beam shape, reach and lux figures were weighed over lumen claims."
  },
  {
    "title": "Power",
    "description": "AAA versus USB rechargeable was compared."
  },
  {
    "title": "Weather",
    "description": "IP ratings were noted."
  },
  {
    "title": "Value",
    "description": "Price and pack contents."
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
    "subheading": "By Trip",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Wet, long hike",
          "Black Diamond Cosmo 350",
          "IP67 and AAA or rechargeable."
        ],
        [
          "Overnight, rechargeable budget",
          "Lepro Rechargeable 2-Pack",
          "15 hours stated."
        ],
        [
          "Fast trail with wide view",
          "230-Degree 2-Pack",
          "230-degree beam."
        ],
        [
          "Emergency kit",
          "Energizer PRO-360",
          "Ships with batteries."
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
          "Energizer PRO-360 or Lepro Battery 2-Pack"
        ],
        [
          "$10 to $20",
          "Blukar 2000L or Lepro Rechargeable 2-Pack"
        ],
        [
          "$20 to $40",
          "230-Degree 2-Pack or Black Diamond Cosmo 350"
        ]
      ]
    }
  },
  {
    "subheading": "AAA vs USB Rechargeable",
    "cards": [
      {
        "label": "AAA",
        "text": "The Lepro Battery 2-Pack and Energizer PRO-360 use replaceable batteries you can swap."
      },
      {
        "label": "Rechargeable",
        "text": "The Lepro Rechargeable 2-Pack, 230-Degree 2-Pack and Blukar 2000L charge over USB."
      }
    ],
    "note": "Most hikers should choose the Black Diamond Cosmo 350, which takes either."
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
          "Lowest spend",
          "Energizer PRO-360"
        ],
        [
          "Low spend, pair",
          "Lepro Battery 2-Pack"
        ],
        [
          "Mid-range pair",
          "Lepro Rechargeable 2-Pack"
        ],
        [
          "Pay for IP67",
          "Black Diamond Cosmo 350"
        ]
      ]
    }
  },
  {
    "subheading": "For Rainy Hikes Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "An IPX5 or better rating and a sealed charge port."
      },
      {
        "label": "In this comparison",
        "text": "The Black Diamond Cosmo 350 is IP67, and the Blukar 2000L is IPX5."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Black Diamond Cosmo 350 if you hike in wet weather, since IP67 is the best rating here. It also takes AAA or a rechargeable pack."
      },
      {
        "label": "Save if",
        "text": "Save with the Energizer PRO-360 or the Lepro Battery 2-Pack if you just need a light for easy trails. Both cost little."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Weight on your head",
    "explanation": "Under about 3 ounces feels light for a full day, and an off-balance lamp causes headaches. The 230-Degree 2-Pack lists 2.47 ounces and the Lepro 2.65. Check the weight and where the battery sits."
  },
  {
    "criterion": "Beam shape",
    "explanation": "A wide flood is good for camp and close trail, while a spot reaches the next switchback. Look for both modes. Lux figures describe beam intensity at distance."
  },
  {
    "criterion": "AAA or USB",
    "explanation": "A dead USB lamp is a dead lamp unless you carry a power bank. AAA cells swap in seconds. The Black Diamond Cosmo 350 takes either."
  },
  {
    "criterion": "Waterproof rating",
    "explanation": "IPX4 handles splashes and IP67 handles submersion. For hiking in heavy rain, IPX5 or better is a good floor. Check the letters on the listing."
  },
  {
    "criterion": "Lumen claims",
    "explanation": "Titles with 2000L or 99000 lumens are marketing. A real hiking lamp is in the hundreds of lumens. Check the modes and runtime instead."
  }
];

export const faq = [
  {
    "q": "How many lumens do I need for hiking?",
    "a": "A few hundred lumens covers trail hiking. More matters for fast running or off-trail travel. Judge by beam and runtime, not title numbers."
  },
  {
    "q": "Is a rechargeable headlamp better than AAA?",
    "a": "Rechargeable saves money, while AAA lets you swap cells on the trail. Carry a power bank if you go rechargeable. The Black Diamond Cosmo 350 supports both."
  },
  {
    "q": "What does IPX4 mean?",
    "a": "It means splash resistance from any direction, not heavy rain or submersion. IPX5 and higher resist water jets. IP67 survives brief submersion."
  },
  {
    "q": "How do I stop it from turning on in my pack?",
    "a": "Use the lock mode if present, or flip a cell. Pack it with the lens facing inward. Check the manual."
  },
  {
    "q": "How do I care for a headlamp?",
    "a": "Dry it after wet use and clean the lens. Remove alkaline cells before long storage. Recharge USB models every few months."
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
