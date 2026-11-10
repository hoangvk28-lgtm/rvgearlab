export const guideSlug = "best-tent-fans-under-30";
export const guideTitle = "5 Best Tent Fans Under 30 in 2026";
export const metaTitle = "Best Tent Fans Under 30 in 2026";
export const metaDescription = "Best tent fans under $30, compared on battery, solar charging, misting and lantern modes, to help you choose a ceiling, lantern or misting fan.";
export const mainKeyword = "best tent fans under 30";
export const introParagraphs = [
  "Thirty dollars opens up tent fans with different jobs: ceiling-style fans with big batteries, lantern fans that double as a light, a misting fan and a solar-charging unit. Pick by how you camp, since a fan that suits a family tent can be pointless in a hammock.",
  "Five fans make the list, ordered by how well each solves a common camping problem. The first is the best all-round fan to hang overhead."
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
    "id": "best-tent-fans-under-30-1",
    "rank": 1,
    "badge": "Best Value Under $30",
    "name": "Tonree Ceiling Fan Light",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21amLxu6yfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH6NGNJN?tag=rvgearlab-20",
    "description": "The Tonree is a gazebo-style ceiling fan light with a 15600mAh rechargeable battery, a brushless motor and a bright LED light. The blades detach for storage, and the unit hangs without tools.\n\nIts battery is more than three times the XTAUTO's and nearly double the AMACOOL's, which is what you need to run all night. It is built from high-strength PC panels, and the remote lets you adjust it from your sleeping bag.\n\nIt suits car campers with a family tent or a gazebo who want an overhead fan and light in one. The blades fold away for the trunk.",
    "specs": [
      "15600mAh battery",
      "Brushless motor, bright LED",
      "Detachable blades, remote"
    ],
    "pros": [
      "Biggest battery in this group",
      "Quiet brushless motor",
      "Blades detach for storage",
      "Light and fan in one"
    ],
    "cons": [
      "Larger than a lantern fan",
      "Needs a ceiling hook or loop"
    ],
    "bestFor": "Family tents and gazebos",
    "take": "The best overhead fan under $30 for all-night runtime.",
    "catch": "It hangs from a ridge, so it needs a sturdy loop."
  },
  {
    "id": "best-tent-fans-under-30-2",
    "rank": 2,
    "badge": "Best Solar Charging",
    "name": "Hoklen Solar Powered Fan",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51bQXe7lyvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HBB5CLNB?tag=rvgearlab-20",
    "description": "The Hoklen is a portable fan with a built-in solar panel, USB and Type-C charging, a digital power display and a timer of 2, 4 or 8 hours. It runs below 30 decibels, has a 90 degree adjustable head and a hidden hook.\n\nIt is the only pick that charges in sunlight, which helps on long stays far from power. The Tonree has a bigger battery, while this one keeps going with a sunny day.\n\nIt suits off-grid campers who want a fan they can recharge by hanging it in the sun. The power display shows the battery level.",
    "specs": [
      "Solar panel plus USB and Type-C",
      "Digital power display, timers",
      "Below 30 dB, 90 degree head"
    ],
    "pros": [
      "Charges in sunlight",
      "Digital display shows battery level",
      "Very quiet at under 30 dB",
      "90 degree adjustable head"
    ],
    "cons": [
      "Solar charging is slow",
      "Smaller overall airflow than a ceiling fan"
    ],
    "bestFor": "Off-grid camps",
    "take": "A good choice for a long stay with no power.",
    "catch": "Solar panels need direct sun to recharge."
  },
  {
    "id": "best-tent-fans-under-30-3",
    "rank": 3,
    "badge": "Best Misting Fan",
    "name": "USONE Portable Misting Fan",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41w2RSVoOML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GRZR8HB9?tag=rvgearlab-20",
    "description": "The USONE is a 5-in-1 misting fan with a 300ml tank, a 10000mAh battery, an LED light, a timer and a USB-A output that charges phones. At full power with fan, mist and light it runs 9 to 10 hours, and on low fan only it runs more than 24 hours.\n\nIt adds cooling mist, which helps in dry heat, and the power-bank output is a bonus. It is not waterproof, so keep the charging port dry.\n\nIt suits car campers in hot, dry climates and families who want a fan, light and phone charger in one. A 360 degree hook hangs it from the tent ceiling.",
    "specs": [
      "300ml mist tank, 10000mAh",
      "Fan, mist, light and phone charger",
      "Timer 1 to 4 hours"
    ],
    "pros": [
      "Mist cools dry air",
      "Charges a phone over USB-A",
      "Runs over 24 hours on low fan",
      "360 degree hook for hanging"
    ],
    "cons": [
      "Mist adds humidity in a closed tent",
      "Not waterproof"
    ],
    "bestFor": "Hot, dry climates",
    "take": "A multi-tool for hot days, and best used in open shade.",
    "catch": "Skip the mist inside a small closed tent."
  },
  {
    "id": "best-tent-fans-under-30-4",
    "rank": 4,
    "badge": "Best Lantern Fan",
    "name": "AMACOOL Portable Camping Fan with LED Lantern- 40H Work Time Rechargeable",
    "price": "$21.27",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JI6cPwc9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07TCLB39D?tag=rvgearlab-20",
    "description": "The AMACOOL combines a tent fan, a camping light and an aroma diffuser in a 2.4 by 5.3 by 7.1 inch body that weighs 11.3 ounces. A 5000mAh battery lasts from 5.5 to 35 hours depending on speed, and 12 LEDs give light.\n\nIt rotates by hand through 360 degrees vertically and horizontally, and it hangs from a built-in hook or sits on a table. It is smaller than the Tonree and a better fit for a tent that needs a lantern as well.\n\nIt suits campers who want one device for light and air. It runs from a USB cable when the battery is low.",
    "specs": [
      "5000mAh, up to 35 hours",
      "Fan, light and aroma diffuser",
      "11.3 oz, built-in hook"
    ],
    "pros": [
      "Fan, light and diffuser in one",
      "Up to 35 hours at low speed",
      "Light and compact",
      "Runs from a USB cable too"
    ],
    "cons": [
      "Smaller airflow than ceiling fans",
      "Brightness is modest"
    ],
    "bestFor": "Tent light and air in one",
    "take": "A tidy lantern fan for solo and couple tents.",
    "catch": "Hang it at head height for the best airflow."
  },
  {
    "id": "best-tent-fans-under-30-5",
    "rank": 5,
    "badge": "Best Budget Pick",
    "name": "Portable Camping Fan with LED Lantern XTAUTO USB Rechargeable Waterproof Tent Fan with Hanging Hook Magnet Sur",
    "price": "$13.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41MjsmjlI+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B1J7NM38?tag=rvgearlab-20",
    "description": "The XTAUTO is a camping fan with an LED lantern, 54 LED chips giving 500 lumens and three fan speeds. A 4000mAh battery runs 6 to 8 hours and the unit has a hook and magnets.\n\nIt is the cheapest pick, and it adds a bright lantern. Its battery is the smallest, so it runs shorter than the Tonree.\n\nIt suits campers who want the lowest price and a bright light. The magnets let you stick it to metal.",
    "specs": [
      "500 lumens, 54 LEDs",
      "4000mAh, 6 to 8 hours",
      "Hook and magnets"
    ],
    "pros": [
      "Lowest price in the group",
      "Bright 500 lumen lantern",
      "Hook and magnets for placement",
      "Three fan speeds"
    ],
    "cons": [
      "Shortest runtime",
      "Small battery"
    ],
    "bestFor": "Budget lantern and fan",
    "take": "A cheap combo that works for weekend trips.",
    "catch": "Charge it before every night out."
  }
];

export const howWeEvaluated = [
  {
    "title": "Battery and runtime",
    "description": "Compared 4000mAh to 15600mAh batteries and stated runtimes."
  },
  {
    "title": "Special features",
    "description": "Looked at solar charging, misting and lantern functions."
  },
  {
    "title": "Noise",
    "description": "Checked quiet-motor claims such as under 30 dB."
  },
  {
    "title": "Mounting",
    "description": "Compared hooks, magnets and ceiling mounts."
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
    "subheading": "By how you camp",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Family tent or gazebo",
          "Tonree Ceiling Fan Light",
          "15600mAh and detachable blades."
        ],
        [
          "Off-grid long stay",
          "Hoklen Solar Fan",
          "Solar panel and digital display."
        ],
        [
          "Hot, dry climate",
          "USONE Misting Fan",
          "Mist tank and phone charging."
        ],
        [
          "Light and air from one device",
          "AMACOOL Lantern Fan",
          "Fan, light and diffuser."
        ],
        [
          "Lowest price",
          "XTAUTO Lantern Fan",
          "500 lumen lantern."
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
          "$10 to $30",
          "XTAUTO Lantern Fan or Tonree Ceiling Fan Light"
        ],
        [
          "$20 to $30",
          "USONE Misting Fan or AMACOOL Lantern Fan"
        ],
        [
          "$20 to $30",
          "Hoklen Solar Fan"
        ]
      ]
    }
  },
  {
    "subheading": "Ceiling fan vs lantern fan",
    "cards": [
      {
        "label": "Ceiling fan",
        "text": "A ceiling fan like the Tonree Ceiling Fan Light has a bigger battery and more airflow. It hangs from the roof."
      },
      {
        "label": "Lantern fan",
        "text": "A lantern fan like the AMACOOL Lantern Fan or XTAUTO Lantern Fan is smaller and gives light too. The battery is smaller."
      }
    ],
    "note": "Choose the Tonree Ceiling Fan Light for a family tent, and a lantern fan for solo camping."
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
          "Around $17",
          "XTAUTO Lantern Fan"
        ],
        [
          "Around $25",
          "Tonree Ceiling Fan Light"
        ],
        [
          "Around $25 misting",
          "USONE Misting Fan"
        ],
        [
          "Around $28",
          "AMACOOL Lantern Fan"
        ],
        [
          "Around $30",
          "Hoklen Solar Fan"
        ]
      ]
    }
  },
  {
    "subheading": "For family tents specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a battery over 10000mAh and a remote for night adjustments."
      },
      {
        "label": "In this comparison",
        "text": "The Tonree Ceiling Fan Light has a 15600mAh battery and the USONE Misting Fan runs 9 to 10 hours at full power."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want solar charging, which means the Hoklen Solar Fan. If you want a bigger fan, step up to the $50 tier."
      },
      {
        "label": "Save if",
        "text": "Save if you only need a small fan, because the XTAUTO Lantern Fan costs about $17."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Battery and runtime",
    "explanation": "A 15600mAh battery can run a fan through a night, while a 4000mAh unit lasts 6 to 8 hours. Bigger batteries weigh more and charge slower. Look at the mAh in the title and compare it with the time you need. Check whether the stated hours refer to low speed, because high speed can cut that figure by two thirds."
  },
  {
    "criterion": "Solar and USB charging",
    "explanation": "A solar panel adds off-grid charging, though it recharges slowly and needs direct sun. USB-C and Type-C charge faster and work from a power bank. Look for charging ports in the product details. Plan on solar as a trickle charger rather than a primary power source, and carry a small power bank as a backup."
  },
  {
    "criterion": "Misting trade-off",
    "explanation": "A misting fan lowers the felt temperature in dry heat, yet adds moisture that can make a closed tent clammy. It also needs a clean water tank. Use it in open shade and skip it in humid climates. Fill the tank with clean water each trip and empty it afterwards so that stale water does not sour the unit."
  },
  {
    "criterion": "Lantern and fan combo",
    "explanation": "A lantern fan gives light and air from one battery. The trade is that light drains the battery faster. Look for brightness in lumens and the runtime on each mode. Look for separate battery runtimes for light and fan, since a bright lantern at full power can empty a small battery in a few hours."
  },
  {
    "criterion": "Hanging and mounting",
    "explanation": "Ceiling-style fans need a ridge loop or a hook, while lantern fans use magnets and clips. A heavy fan can sag a light tent roof. Check your tent's loops and the fan's weight before you buy. Check the fan or lantern weight against your tent loop, because a heavy unit can pull a light roof out of shape."
  }
];

export const faq = [
  {
    "q": "Does a misting fan work in a tent?",
    "a": "It helps in dry heat, but it adds humidity and can leave surfaces damp in a small closed tent. Use the USONE Misting Fan in open shade or a screen room. Keep the charging port dry, since the unit is not waterproof."
  },
  {
    "q": "How long does solar charging take?",
    "a": "It depends on sun strength and panel size, and it is slower than USB charging. Use solar as a top-up and carry a power bank. The Hoklen Solar Fan also charges over USB and Type-C."
  },
  {
    "q": "Can I run a fan all night?",
    "a": "Yes, if the battery is large enough. A 15600mAh unit like the Tonree Ceiling Fan Light runs through a night on low, while a 4000mAh unit lasts 6 to 8 hours. Use a timer to save power."
  },
  {
    "q": "Is a lantern fan bright enough as a tent light?",
    "a": "The XTAUTO Lantern Fan lists 500 lumens, which is bright for a tent. The AMACOOL Lantern Fan has 12 LEDs and is gentler. Use the low setting to save battery. Low settings stretch the battery and give enough light for finding gear."
  },
  {
    "q": "How do I clean a misting fan tank?",
    "a": "Empty it after each trip, rinse with clean water and let it dry with the cap off. Stale water can grow bacteria. Use clean water only in the USONE Misting Fan. Wipe the outside with a damp cloth and keep the charging port dry."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
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
  },
  {
    "title": "Best 4 Season Tent Under 200",
    "href": "/tents-shelter/best-4-season-tent-under-200"
  }
];
