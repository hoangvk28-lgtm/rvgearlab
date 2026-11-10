export const guideSlug = "best-hanging-camping-fans";
export const guideTitle = "2 Best Hanging Camping Fans in 2026";
export const metaTitle = "Best Hanging Camping Fans in 2026";
export const metaDescription = "Best hanging camping fans compared on battery size, remote control, light modes and mounting, for tent ceilings and awning frames where floor space is scarce.";
export const mainKeyword = "best hanging camping fans";
export const introParagraphs = [
  "Hanging a fan from the tent ceiling frees the floor and sends air down over a bed. Two listings fit this brief, a compact three-in-one and an oscillating fan with a big battery.",
  "They were compared on battery, remote control, lighting modes, hanging method and noise. A spec the listing leaves out is flagged as a buyer tip."
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
    "id": "best-hanging-camping-fans-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Xynover Portable Fan Rechargeable Camping Lantern-40Hrs",
    "price": "$13.78",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41kuJws8TwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F2MR9CF6?tag=rvgearlab-amz-20",
    "description": "The Xynover pairs a 20,000mAh power hub with an oscillating fan and six lighting modes, from warm white and cool daylight to emergency strobe. Three wind speeds start at a gentle 28 dB breeze, and a remote adjusts it all.\n\nAgainst the DUKUSEEK, it holds far more energy and adds oscillation. It also hangs magnetically on metal surfaces, sits on a desk or hangs in a tent.\n\nIt suits campers who want a fan, a light and a charging bank in one hanging unit. The 20,000mAh cell can charge a phone via the USB and Type-C ports.",
    "specs": [
      "20,000mAh, 28 dB low speed",
      "Oscillating, 3 speeds, remote",
      "6 lighting modes, magnetic hang"
    ],
    "pros": [
      "Big 20,000mAh battery",
      "Oscillating airflow with remote",
      "Six lighting modes",
      "Hangs by magnet or hook"
    ],
    "cons": [
      "Weather rating is not stated",
      "Listed 40 hours is a low-speed best case"
    ],
    "bestFor": "Fan, light and charger in one",
    "take": "A big battery, oscillation and a remote at a very low price.",
    "catch": "The 40 hour claim applies to low speed, so plan less at turbo."
  },
  {
    "id": "best-hanging-camping-fans-2",
    "rank": 2,
    "badge": "Best Compact",
    "name": "DUKUSEEK Tent Ceiling Fans for Camping Hanging",
    "price": "$13.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41GJK-GMfoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09WXZYT87?tag=rvgearlab-amz-20",
    "description": "The DUKUSEEK combines a camping lantern, a hanging fan and an emergency power bank in one small unit. It uses a brushless motor, a remote with timer mode and a high-strength ABS body, and lists CE and FCC certification.\n\nCompared with the Xynover, it is smaller, lighter and simpler. It gives up the oscillation and the large battery for compact hanging.\n\nIt suits solo tents and hammocks where a small fan that doubles as a lantern is enough. The remote and timer make bedtime simple.",
    "specs": [
      "3-in-1 fan, lantern, power bank",
      "Brushless motor, remote, timer",
      "CE and FCC listed"
    ],
    "pros": [
      "Three functions in one small unit",
      "Remote with timer mode",
      "CE and FCC certification listed",
      "Compact for small tents"
    ],
    "cons": [
      "Battery size is not stated",
      "Small blades move less air"
    ],
    "bestFor": "Solo tents and hammocks",
    "take": "A compact hanging fan, lantern and power bank for small tents.",
    "catch": "Neither the battery size nor the fan diameter is printed on the listing."
  }
];

export const howWeEvaluated = [
  {
    "title": "Hanging method",
    "description": "Hooks, magnets and loops were compared for tent frames."
  },
  {
    "title": "Battery size",
    "description": "Listed mAh and runtime were noted, where given."
  },
  {
    "title": "Remote and timer",
    "description": "Remote control and timer modes were weighed for bedtime use."
  },
  {
    "title": "Light modes",
    "description": "Warm, cool and strobe modes were compared."
  },
  {
    "title": "Noise",
    "description": "Stated decibel levels were noted."
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
    "subheading": "By Tent Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Bed or cot in a tent",
          "Xynover 20000mAh Fan",
          "Oscillates across a bed."
        ],
        [
          "Solo tent or hammock",
          "DUKUSEEK Tent Ceiling Fan",
          "Compact three-in-one."
        ],
        [
          "Truck bed or vehicle roof",
          "Xynover 20000mAh Fan",
          "Hangs by magnet."
        ],
        [
          "Timer for sleep",
          "DUKUSEEK Tent Ceiling Fan",
          "Remote with timer mode."
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
          "Xynover 20000mAh Fan"
        ],
        [
          "$10 to $20",
          "DUKUSEEK Tent Ceiling Fan"
        ]
      ]
    }
  },
  {
    "subheading": "Oscillating vs Fixed",
    "cards": [
      {
        "label": "Oscillating",
        "text": "An oscillating head sweeps air across a wide area. The Xynover 20000mAh Fan is oscillating."
      },
      {
        "label": "Fixed",
        "text": "A fixed head aims where you point it. The DUKUSEEK Tent Ceiling Fan is fixed."
      }
    ],
    "note": "Pick the Xynover 20000mAh Fan for a bed and the DUKUSEEK Tent Ceiling Fan for a solo tent."
  },
  {
    "subheading": "By Extra Features",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Charging bank",
          "Xynover 20000mAh Fan"
        ],
        [
          "Certifications listed",
          "DUKUSEEK Tent Ceiling Fan"
        ],
        [
          "Strobe light",
          "Xynover 20000mAh Fan"
        ]
      ]
    }
  },
  {
    "subheading": "Tent Ceilings",
    "cards": [
      {
        "label": "Look for",
        "text": "A loop or magnet hang, a remote and a quiet low speed."
      },
      {
        "label": "In this comparison",
        "text": "The Xynover 20000mAh Fan lists a 28 dB gentle breeze and magnetic hanging, and the DUKUSEEK Tent Ceiling Fan lists a remote with timer."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Xynover 20000mAh Fan if you want the biggest battery and oscillation."
      },
      {
        "label": "Save if",
        "text": "Save with the DUKUSEEK Tent Ceiling Fan if a compact fan, lantern and bank is enough."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "How it hangs",
    "explanation": "A hanging fan needs a loop, hook or magnet. Check that your tent has a ridge pole or loop to hang from. A magnet helps on vehicles."
  },
  {
    "criterion": "Battery and runtime",
    "explanation": "Battery size decides runtime. Check the listed hours at the lowest speed. Plan on less at high speed."
  },
  {
    "criterion": "Remote and timer",
    "explanation": "A remote lets you change speed without getting up. A timer turns the fan off. Look for both in the bullet points."
  },
  {
    "criterion": "Noise level",
    "explanation": "A low decibel rating matters at night. Compare dB figures between fans. Gentle low speeds help sleep."
  },
  {
    "criterion": "Lighting and charging",
    "explanation": "A fan with a light saves a lantern, and a power bank saves a charger. Check that the bank has USB ports. Light use shortens runtime."
  }
];

export const faq = [
  {
    "q": "Where do I hang a camping fan?",
    "a": "From a ridge pole, ceiling loop or frame. Keep it clear of your head. The Xynover 20000mAh Fan also hangs by magnet."
  },
  {
    "q": "What is the common mistake?",
    "a": "Hanging it too low or aiming at your face. Aim it over your body. Keep cords out of the way."
  },
  {
    "q": "Is the Xynover worth it over the DUKUSEEK?",
    "a": "If you want oscillation and a big battery, yes. The Xynover 20000mAh Fan stores more, while the DUKUSEEK Tent Ceiling Fan is smaller."
  },
  {
    "q": "How do I use the remote?",
    "a": "Point it at the fan and set speed, light or timer. Replace the remote battery if it stops responding. Keep it dry."
  },
  {
    "q": "How do I clean a hanging fan?",
    "a": "Wipe the blades with a dry cloth and keep ports free of dust. Store it flat. Charge before a trip."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Portable Solar Panels",
    "href": "/camp-power/best-portable-solar-panels"
  },
  {
    "title": "Best Power Station",
    "href": "/camp-power/best-power-station"
  },
  {
    "title": "Best Solar Power Bank",
    "href": "/camp-power/best-solar-power-bank"
  },
  {
    "title": "Best Portable Solar Panels For Home",
    "href": "/camp-power/best-portable-solar-panels-for-home"
  }
];
