export const guideSlug = "best-headlamps-under-30";
export const guideTitle = "6 Best Headlamps Under 30 in 2026";
export const metaTitle = "Best Headlamps Under 30 in 2026";
export const metaDescription = "Best headlamps under $30: six rechargeable and kids headlamps compared on beam width, runtime and water rating for camping and chores.";
export const mainKeyword = "best headlamps under 30";
export const introParagraphs = [
  "Thirty dollars is only a little more than twenty, so this list repeats little of the cheaper tier. The new picks include a 4000mAh headlamp with a motion sensor, a waterproof diving-style lamp and a kid-friendly lightweight model.",
  "I ranked them by runtime and features per dollar, then by comfort and water rating. The extra $10 over the $20 tier buys battery size and weatherproofing more than brightness."
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
    "id": "best-headlamps-under-30-1",
    "rank": 1,
    "badge": "Best Value Under $30",
    "name": "PINSAI High Power LED Headlamp Super Bright Adult Motion Sensor Headlight Spotlight Waterproof Rechargeable Ou",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51PLNDOCENL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BJ71HR34?tag=rvgearlab-20",
    "description": "PINSAI is a high-power rechargeable headlamp with a motion sensor and a claimed reach of up to 1650 feet. A roughly 4000mAh battery recharges in about 2.5 hours and a plastic body shrugs off knocks.\n\nAt about $25 it is the priciest pick and costs $12 more than the Foxelli. It has the biggest battery here, which suits full-weekend trips.\n\nIt suits campers who want a big battery and a motion switch. It is also good for fishing.",
    "specs": [
      "~4000mAh, 2.5 hour charge",
      "Motion sensor switch",
      "1650 ft claimed reach"
    ],
    "pros": [
      "Biggest battery in the guide",
      "Motion sensor switch",
      "Fast 2.5 hour charge",
      "Tough plastic body"
    ],
    "cons": [
      "Costs the most here",
      "Claimed reach is the top mode"
    ],
    "bestFor": "Long weekends",
    "take": "A big-battery headlamp for long trips.",
    "catch": "The reach claim is for the top mode."
  },
  {
    "id": "best-headlamps-under-30-2",
    "rank": 2,
    "badge": "Best Two-Pack",
    "name": "GearLight USB Rechargeable Headlamp Flashlight for Running",
    "price": "$23.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/512S1rQoalL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B096M2M91S?tag=rvgearlab-20",
    "description": "GearLight's S500 comes as a pack of two headlamps that weigh 1.8 oz each. They have seven modes, a 45 degree pivot and USB rechargeable batteries with a USB-C cable.\n\nAt about $24 it costs $1 less than the PINSAI and gives two lamps. Each lamp is lighter than the Foxelli.\n\nIt suits a couple or a family. Keep one as a backup.",
    "specs": [
      "Two lamps, 1.8 oz each",
      "Seven modes, 45 degree pivot",
      "USB-C rechargeable"
    ],
    "pros": [
      "Two lamps in the pack",
      "Light at 1.8 oz",
      "Seven modes",
      "45 degree pivot"
    ],
    "cons": [
      "No IP rating stated",
      "Less zoom than the VAVOFO"
    ],
    "bestFor": "Couples and families",
    "take": "Two light, pivoting lamps for one price.",
    "catch": "Check the strap fits."
  },
  {
    "id": "best-headlamps-under-30-3",
    "rank": 3,
    "badge": "Best Waterproof",
    "name": "Goldengulf Waterproof Diving Swimming Hiking Camping Hunting Fishing Headlamp Underwater 1200 Lumen Safety Hea",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/511i1tGhwhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01BWQ4C7W?tag=rvgearlab-20",
    "description": "Goldengulf is a waterproof headlamp suited to diving, swimming, hiking and fishing. It has three modes (high, low, strobe) and ships with a rechargeable battery and a charger.\n\nAt about $20 it costs $5 less than the PINSAI and is the only waterproof lamp for wet work. It gives up the motion sensor and the big battery.\n\nIt suits kayak and fishing camps. Rain is no concern.",
    "specs": [
      "Waterproof design",
      "High, low, strobe modes",
      "Battery and charger included"
    ],
    "pros": [
      "Waterproof for wet work",
      "Battery and charger included",
      "Three simple modes",
      "Suits fishing and kayaking"
    ],
    "cons": [
      "Only three modes",
      "Basic controls"
    ],
    "bestFor": "Kayak and fishing trips",
    "take": "A truly wet-weather headlamp.",
    "catch": "It is a basic lamp."
  },
  {
    "id": "best-headlamps-under-30-4",
    "rank": 4,
    "badge": "Best Lightweight",
    "name": "Foxelli Kids Headlamp",
    "price": "$12.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410CUDAmrYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01GD463NE?tag=rvgearlab-20",
    "description": "Foxelli is a 160 lumen USB-C rechargeable headlamp that weighs 2.4 oz and gives up to 30 hours of light on a 4 hour charge. It reaches 200 feet and is IPX5 water resistant, with white or red light.\n\nAt about $13 it costs $12 less than the PINSAI and works well for kids and adults. It has the most runtime per lumen in the guide.\n\nIt suits kids, trail walks and bedtime reading. The ergonomic strap is adjustable.",
    "specs": [
      "160 lumens, 200 ft reach",
      "2.4 oz, 30 hours",
      "IPX5, USB-C"
    ],
    "pros": [
      "Lightweight at 2.4 oz",
      "30 hours of light",
      "IPX5 water resistant",
      "White or red light"
    ],
    "cons": [
      "Only 160 lumens",
      "Short reach"
    ],
    "bestFor": "Kids and bedtime",
    "take": "A light, long-running lamp for kids.",
    "catch": "It is not for long trail sprints."
  },
  {
    "id": "best-headlamps-under-30-5",
    "rank": 5,
    "badge": "Best Wide Beam",
    "name": "Demlaies Headlamp Rechargeable with Red Light",
    "price": "$12.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41A20BA8AoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FNRK925P?tag=rvgearlab-20",
    "description": "Demlaies is a two-pack of rechargeable headlamps with a 230 degree wide beam, adjustable focus and eight light modes, including COB high, COB low and LED flood. Each gives up to 30 hours and fully charges in about 6 hours.\n\nAt about $12 it is the cheapest pick and costs half as much as the GearLight pack. It also includes a red light.\n\nIt suits campers who want a wide chores beam. Keep one lamp as a spare.",
    "specs": [
      "230 degree wide beam",
      "Eight light modes, red light",
      "30 hours, 6 hour charge"
    ],
    "pros": [
      "Very wide 230 degree beam",
      "Eight modes",
      "30 hours of runtime",
      "Two lamps for $12"
    ],
    "cons": [
      "Slow 6 hour charge",
      "Beam is wide rather than long"
    ],
    "bestFor": "Camp chores",
    "take": "A wide-beam pair at the lowest price.",
    "catch": "Not for long-range trail use."
  },
  {
    "id": "best-headlamps-under-30-6",
    "rank": 6,
    "badge": "Best Wave Sensor",
    "name": "Everbeam H6 Pro LED Head Torch Headlamp",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ML--iW4VL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07PF5VCMH?tag=rvgearlab-20",
    "description": "Everbeam H6 Pro is a 650 lumen headlamp with a tested 126 m reach, five modes, a wave sensor, a 1200mAh battery and an IPX4 rating. It runs 6.5 hours on white and 2.5 on high.\n\nAt about $19 it costs $6 more than the Foxelli and $6 less than the PINSAI. It is the lowest-priced sensor-switch lamp here.\n\nIt suits hikers who want a hands-free switch. The red mode saves night vision.",
    "specs": [
      "650 lumens, 126 m beam",
      "Wave motion sensor",
      "1200mAh, IPX4"
    ],
    "pros": [
      "Wave sensor",
      "6.5 hours on white light",
      "Red mode",
      "IPX4 weather rating"
    ],
    "cons": [
      "High mode lasts 2.5 hours",
      "Smaller battery than the PINSAI"
    ],
    "bestFor": "Hands-free hiking",
    "take": "A good all-rounder with a wave switch.",
    "catch": "Use low mode for runtime."
  }
];

export const howWeEvaluated = [
  {
    "title": "Features per dollar",
    "description": "Beam width, motion sensor and light modes were compared."
  },
  {
    "title": "Battery and runtime",
    "description": "Battery size and rated runtime were compared."
  },
  {
    "title": "Water rating",
    "description": "Waterproof, IPX5 and IPX4 bodies were compared."
  },
  {
    "title": "Weight and comfort",
    "description": "Weight and strap design were compared."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick is at or under $30, and the top pick spends the extra budget on battery size."
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
    "subheading": "By camper type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Long weekend, big battery",
          "PINSAI Motion",
          "~4000mAh."
        ],
        [
          "Family of four",
          "GearLight S500 2-Pack",
          "Two lamps."
        ],
        [
          "Fishing and kayaking",
          "Goldengulf Waterproof",
          "Waterproof."
        ],
        [
          "Kids and bedtime",
          "Foxelli Kids",
          "2.4 oz."
        ],
        [
          "Camp chores, wide light",
          "Demlaies 2-Pack",
          "230 degree beam."
        ],
        [
          "Hiking, hands-free",
          "Everbeam H6 Pro",
          "Wave sensor."
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
          "Demlaies 2-Pack or Foxelli Kids"
        ],
        [
          "$10 to $20",
          "Everbeam H6 Pro or Goldengulf Waterproof"
        ],
        [
          "$20 to $30",
          "GearLight S500 2-Pack or PINSAI Motion"
        ]
      ]
    }
  },
  {
    "subheading": "Single lamp vs two-pack",
    "cards": [
      {
        "label": "Single lamp",
        "text": "The PINSAI Motion, Foxelli Kids, Goldengulf Waterproof and Everbeam H6 Pro each provide one lamp."
      },
      {
        "label": "Two-pack",
        "text": "The GearLight S500 2-Pack and Demlaies 2-Pack give two lamps for one price."
      }
    ],
    "note": "Most campers should take the PINSAI Motion for long trips."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $12",
          "Demlaies 2-Pack"
        ],
        [
          "About $13",
          "Foxelli Kids"
        ],
        [
          "About $19",
          "Everbeam H6 Pro"
        ],
        [
          "About $20",
          "Goldengulf Waterproof"
        ],
        [
          "About $24",
          "GearLight S500 2-Pack"
        ],
        [
          "About $25",
          "PINSAI Motion"
        ]
      ]
    }
  },
  {
    "subheading": "For a kayak or fishing trip specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for waterproofing and a strobe for safety."
      },
      {
        "label": "In this comparison",
        "text": "The Goldengulf Waterproof is rated for wet use with a strobe. The Foxelli Kids is IPX5 and lighter for splash only."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a big battery or true waterproofing: the PINSAI Motion and Goldengulf Waterproof deliver those."
      },
      {
        "label": "Save if",
        "text": "Save if you only need chores light: the Demlaies 2-Pack is about $12 and the Foxelli Kids about $13."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What $30 buys",
    "explanation": "Compared with $20 headlamps, the extra money buys a bigger battery, a motion sensor or real waterproofing, not simply more lumens. Decide whether runtime or water protection matters more. Look at battery size and the IP rating in the details, and remember an extra pair in the pack is often the better use of money than raw brightness."
  },
  {
    "criterion": "Beam shape",
    "explanation": "A wide flood beam lights a cooking area but does not travel far, while a spot beam reaches down a trail. A zoom does both. Check for the beam angle, such as 230 degrees, in the product description so the lamp matches the chores you do after dark."
  },
  {
    "criterion": "Battery capacity",
    "explanation": "A 4000mAh battery gives far more minutes than a 1200mAh one at the same brightness. Larger batteries add weight and charge time. Look for the mAh figure in the product details and compare it with the weight, since a larger cell adds grams to your forehead and the lamp, because a big battery on a weak charger takes all night to fill."
  },
  {
    "criterion": "Waterproofing",
    "explanation": "IPX5 resists jets of water, IPX4 resists splashes and a waterproof diving lamp can get wet for long periods. Paddlers and anglers need the highest rating. Check the IP rating next to the lamp's name and test a new lamp in a sink before a trip since only a lamp with a high rating survives a kayak dunk."
  },
  {
    "criterion": "Weight for kids",
    "explanation": "A 2.4 oz lamp sits comfortably on a child's head for hours, while a 5 oz lamp can slip. Look for an adjustable ergonomic strap. Check weight in the details and test the strap on a real head if you can since a lamp that slides down is quickly abandoned."
  },
  {
    "criterion": "Charging time",
    "explanation": "A 2.5 hour charge fits an evening, while a 6 hour charge needs a night. Slow charging is a pain between trips. Look for the charge time and the USB port type and plan to plug the lamp in the afternoon before a night out since a dead lamp is no use after sunset."
  }
];

export const faq = [
  {
    "q": "Is a bigger battery better?",
    "a": "For long trips, yes. The PINSAI Motion has about 4000mAh while the Everbeam H6 Pro has 1200mAh. A bigger battery adds weight and charge time and the PINSAI Motion makes sense for weekends, while a smaller lamp suits day hikes."
  },
  {
    "q": "Can I use a kids headlamp as an adult?",
    "a": "Yes, the Foxelli Kids is marked for kids and adults and has an adjustable strap. It is light at 2.4 oz. It has lower lumens, so it suits chores, and the Foxelli Kids is a good second lamp for the group."
  },
  {
    "q": "What does a 230 degree beam do?",
    "a": "It lights the sides as well as ahead, which helps with cooking. The Demlaies 2-Pack does this. It does not reach far and how often the chores need long range for example when you stir a pot or set up a tent."
  },
  {
    "q": "How do I keep a headlamp dry?",
    "a": "Close the charging port cover and dry the lamp after rain. The Goldengulf Waterproof can be rinsed. Store lamps in a dry bag, and wipe the contacts before charging and leave it open to air before packing."
  },
  {
    "q": "How long does a headlamp last?",
    "a": "Years if the battery is cared for. Charge lithium cells every few months in storage. The GearLight S500 2-Pack has USB-C cables and store the lamp at half charge over winter with the cable kept in the same pouch."
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
