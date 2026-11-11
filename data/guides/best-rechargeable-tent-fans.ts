export const guideSlug = "best-rechargeable-tent-fans";
export const guideTitle = "6 Best Rechargeable Tent Fans in 2026";
export const metaTitle = "Best Rechargeable Tent Fans in 2026";
export const metaDescription = "Best rechargeable tent fans compared by battery size, runtime claims and charging, for campers who sleep without a hookup.";
export const mainKeyword = "best rechargeable tent fans";
export const introParagraphs = [
  "A rechargeable tent fan lives or dies on its battery. Capacities on this list run from 4000mAh to 40000mAh, and that spread decides whether the fan lasts one evening or several nights.",
  "We sorted six battery-powered fans by stated capacity, runtime claims, charging method and extras like power-bank output, then wrote each pick around what that battery lets you do. Runtime numbers below are the listings' own claims, not measured results."
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
    "id": "best-rechargeable-tent-fans-1",
    "rank": 1,
    "badge": "Best Large-Capacity Fan",
    "name": "Gazebo Outdoor Ceiling Fan Light 31.5''",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31L6nZKlHrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGHPZLN7?tag=rvgearlab-amz-20",
    "description": "The SHUNLEE is a 31.5-inch hanging fan with five long blades, a 40000mAh battery and four wind speeds. A dimmable light with 3000K to 6000K color temperature and a remote with 2, 3 or 5 hour timers come in the same unit.\n\nIt carries the biggest battery on the list by a wide margin, ahead of the FRIZCOL at 24000mAh and the VOSFEEL at 20000mAh. The wide blade span also covers far more space than the small lantern-style fans.\n\nIt is the choice for a canopy, gazebo or big family tent where one fan has to cool a lot of air. The memory function resumes your last setting.",
    "specs": [
      "40000mAh battery",
      "31.5-inch five-blade fan",
      "3000K-6000K dimmable light"
    ],
    "pros": [
      "Largest battery in this comparison",
      "Wide blade span for big spaces",
      "Dimmable light with color temperature",
      "Remote plus 2, 3 or 5 hour timers"
    ],
    "cons": [
      "Highest price of the six",
      "Oversized for a small tent"
    ],
    "bestFor": "Gazebos and big tents",
    "take": "One large fan for a pop-up canopy or a family tent, with the longest runtime potential here.",
    "catch": "At this size it is a bulky pack item and overkill inside a two-person tent."
  },
  {
    "id": "best-rechargeable-tent-fans-2",
    "rank": 2,
    "badge": "Best Runtime Value",
    "name": "FRIZCOL 3-in-1 Camping Fan",
    "price": "$28.48",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51NiObDHKzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BVTHPXLB?tag=rvgearlab-amz-20",
    "description": "The FRIZCOL is a 3-in-1 camping fan with a 24000mAh battery, four speeds up to 3950 r/min and a listed runtime of 11 to 60 hours. It adds a two-level LED light, three timers and a remote.\n\nNext to the VOSFEEL it adds more battery capacity at a lower price, and compared with the SHUNLEE it gives up blade size for a much smaller footprint. Noise is listed under 30 dB.\n\nIt suits a car camper who wants multi-night runtime from a compact fan. A non-slip base lets it sit on a table as well as hang.",
    "specs": [
      "24000mAh, 11-60 hour range",
      "Four speeds, under 30 dB",
      "Two-level light, remote"
    ],
    "pros": [
      "Big battery for a small body",
      "Runtime claim spans 11 to 60 hours",
      "Quiet at under 30 dB",
      "Non-slip pad for tabletop use"
    ],
    "cons": [
      "No oscillation or power-bank output listed",
      "Long run times need the lowest speed"
    ],
    "bestFor": "Multi-night car camping",
    "take": "A lot of battery for the money, in a fan that fits in a bin.",
    "catch": "The 60-hour figure is a low-speed claim, so expect far less at full power."
  },
  {
    "id": "best-rechargeable-tent-fans-3",
    "rank": 3,
    "badge": "Best Fan With Power Bank",
    "name": "VOSFEEL Camping Fan",
    "price": "$41.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51nXnmVvkGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSMTV23H?tag=rvgearlab-amz-20",
    "description": "The VOSFEEL packs a 20000mAh battery with two outputs, so it can charge a phone while it runs. It runs 12 to 58 hours by the listing and adds four speeds, a three-level LED lantern and a remote with timer options.\n\nCompared with the DABOUHORS it is a simpler fan with a fixed head, while its lantern is the headline feature. It is priced above the FRIZCOL and below the SHUNLEE.\n\nIt fits a backpack-size packing plan. The foldable rotatable hook hangs it anywhere in a tent.",
    "specs": [
      "20000mAh, 2 outputs",
      "12-58 hour runtime claim",
      "LED lantern, remote, timer"
    ],
    "pros": [
      "Charges a phone while running",
      "Lantern has three brightness levels",
      "Fits in a backpack",
      "Foldable hook rotates for aiming"
    ],
    "cons": [
      "Pricier than the FRIZCOL",
      "No oscillation listed"
    ],
    "bestFor": "Campers who also charge a phone",
    "take": "A fan, lantern and phone charger in one body, good for solo or two-person tents.",
    "catch": "Using the power-bank output shortens fan runtime on the same battery."
  },
  {
    "id": "best-rechargeable-tent-fans-4",
    "rank": 4,
    "badge": "Best Oscillating Fan",
    "name": "Camping Fan Rechargeable",
    "price": "$31.69",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51vVZ0ijFfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GTV3BPSH?tag=rvgearlab-amz-20",
    "description": "The DABOUHORS has a 20000mAh battery that doubles as a power bank, plus four speeds and an oscillation choice of 45 or 90 degrees. Noise is listed under 30 dB, and timers run 1, 2, 4 or 8 hours.\n\nIt is the only pick here that sweeps air across the tent, where the VOSFEEL and FRIZCOL point a steady stream. A three-level LED light and a remote complete the set.\n\nIt suits a shared tent where two people sleep at different spots. Sweeping the breeze covers both without moving the fan.",
    "specs": [
      "20000mAh with power bank",
      "45 or 90 degree oscillation",
      "1, 2, 4, 8 hour timers"
    ],
    "pros": [
      "Oscillation spreads air across the tent",
      "Quiet at under 30 dB",
      "Remote with four timer choices",
      "Three-level LED light built in"
    ],
    "cons": [
      "Oscillation adds a little to power draw",
      "Pricier than the XTAUTO"
    ],
    "bestFor": "Shared tents, wide airflow",
    "take": "Choose it when two sleepers need air from one fan hung at the ridge.",
    "catch": "Oscillating at the higher angle will pull more from the battery than a fixed fan."
  },
  {
    "id": "best-rechargeable-tent-fans-5",
    "rank": 5,
    "badge": "Best Lantern Combo",
    "name": "Portable Camping Fan with LED Lantern XTAUTO USB Rechargeable Waterproof Tent Fan with Hanging Hook Magnet Sur",
    "price": "$21.84",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41WiiNQqhBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B1J7K569?tag=rvgearlab-amz-20",
    "description": "The XTAUTO is a compact fan and lantern with a 4000mAh battery, 54 high-intensity LED chips rated at 500 lumens and three fan speeds. The listed runtime is six to eight hours, and four indicators show the charge left.\n\nIt has the smallest battery on the list, so it is a night-by-night fan next to the 20000mAh models. It adds magnets and a foldable hook so it can mount hands-free.\n\nIt fits a backpacker or a weekender who wants light and a breeze from one small unit. The ABS body is described as waterproof.",
    "specs": [
      "4000mAh, 6-8 hour runtime",
      "500 lumen, 54 LED chips",
      "Magnet and foldable hook"
    ],
    "pros": [
      "Bright lantern lights a whole tent",
      "Magnets stick to metal poles",
      "Four indicators show charge level",
      "Light and compact for packing"
    ],
    "cons": [
      "Smallest battery of the six",
      "Needs a recharge every day or two"
    ],
    "bestFor": "Light packing, overnight trips",
    "take": "The best fan-and-light combo for short trips.",
    "catch": "A 4000mAh battery is a single-night fan, not a multi-day one."
  },
  {
    "id": "best-rechargeable-tent-fans-6",
    "rank": 6,
    "badge": "Best Budget Pick",
    "name": "Camping Fan with Light & Remote",
    "price": "$14.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/315R9AKhXhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GS5C8SV7?tag=rvgearlab-amz-20",
    "description": "The Yueidung is a detachable ceiling-style fan with an 8000mAh battery, four speeds including a natural wind mode and a three-mode light. A four-hour fast charge gives up to about ten hours of fan runtime by the listing.\n\nIt has the lowest price in the list and sits between the XTAUTO and the 20000mAh models on battery size. The remote works within about 3 meters.\n\nIt suits a casual camper who wants a hanging fan and night light for a small or mid-size tent. Natural wind mode is a gentle change from steady air.",
    "specs": [
      "8000mAh, up to 10 hours",
      "4 speeds incl natural wind",
      "3 light modes, remote"
    ],
    "pros": [
      "Lowest price of the six",
      "Four-hour charge for about ten hours",
      "Natural wind mode softens the airflow",
      "Detaches from the ceiling mount"
    ],
    "cons": [
      "Ten hours is one night, not several",
      "Remote range limited to about 3 meters"
    ],
    "bestFor": "Budget weekend tent",
    "take": "The cheapest fan here that still gives a remote, light and a full night of runtime.",
    "catch": "Capacity is mid-range, so it needs charging after most trips."
  }
];

export const howWeEvaluated = [
  {
    "title": "Battery capacity",
    "description": "We compared stated mAh across all six fans, from 4000mAh up to 40000mAh."
  },
  {
    "title": "Runtime claims",
    "description": "Listed hours were noted along with the speed they apply to, since low-speed figures overstate real use."
  },
  {
    "title": "Charging method",
    "description": "USB-C, USB and charge times were compared because a four-hour charge fits a day, a twelve-hour one does not."
  },
  {
    "title": "Extras on the battery",
    "description": "Power-bank outputs, lights and timers were counted because each competes for the same battery."
  },
  {
    "title": "Fan size and price",
    "description": "Blade size and cost were weighed against capacity to see which fans deliver the most runtime per dollar."
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
    "subheading": "By Trip Length",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "One night, light packing",
          "XTAUTO Lantern Fan",
          "4000mAh for a night with a bright light."
        ],
        [
          "Weekend tent trip",
          "Yueidung Ceiling Fan",
          "8000mAh and a four-hour fast charge."
        ],
        [
          "Three or four nights off-grid",
          "FRIZCOL 24000mAh Fan",
          "24000mAh with an 11 to 60 hour range."
        ],
        [
          "Week-long trip with a solar panel",
          "SHUNLEE 31.5-Inch Fan",
          "40000mAh gives the most reserve."
        ],
        [
          "Phone charging as well",
          "VOSFEEL 20000mAh Fan",
          "20000mAh with two output ports."
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
          "Yueidung Ceiling Fan or XTAUTO Lantern Fan"
        ],
        [
          "$20 to $40",
          "FRIZCOL 24000mAh Fan or DABOUHORS Oscillating Fan"
        ],
        [
          "$40 to $80",
          "VOSFEEL 20000mAh Fan or SHUNLEE 31.5-Inch Fan"
        ]
      ]
    }
  },
  {
    "subheading": "Compact Fan vs Canopy Fan",
    "cards": [
      {
        "label": "Compact",
        "text": "XTAUTO Lantern Fan, Yueidung Ceiling Fan, VOSFEEL 20000mAh Fan, DABOUHORS Oscillating Fan and FRIZCOL 24000mAh Fan are small enough to pack in a bin and hang in a tent."
      },
      {
        "label": "Canopy",
        "text": "SHUNLEE 31.5-Inch Fan uses wide blades and a huge battery to cool a gazebo or pop-up, at higher cost and pack size."
      }
    ],
    "note": "Most tent campers should pick a compact fan like FRIZCOL 24000mAh Fan and leave the canopy size to shade structures."
  },
  {
    "subheading": "By Extra Feature",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Sweeping airflow",
          "DABOUHORS Oscillating Fan"
        ],
        [
          "Brightest lantern",
          "XTAUTO Lantern Fan"
        ],
        [
          "Natural wind mode",
          "Yueidung Ceiling Fan"
        ],
        [
          "Dimmable warm-to-cool light",
          "SHUNLEE 31.5-Inch Fan"
        ]
      ]
    }
  },
  {
    "subheading": "For Off-Grid Weekends Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A capacity of about 20000mAh or more and a charge time you can complete with a power bank or solar panel."
      },
      {
        "label": "In this comparison",
        "text": "FRIZCOL 24000mAh Fan and VOSFEEL 20000mAh Fan meet that mark, with VOSFEEL adding a phone charging port."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want oscillation or a very large battery, since DABOUHORS Oscillating Fan sweeps air and SHUNLEE 31.5-Inch Fan holds 40000mAh for long trips."
      },
      {
        "label": "Save if",
        "text": "Save if trips are short, because Yueidung Ceiling Fan and XTAUTO Lantern Fan handle a night or two at the lowest prices here."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What mAh actually tells you",
    "explanation": "Milliamp-hours measure how much charge a battery stores, but not how long a fan runs, because that depends on fan power. A 20000mAh battery in a low-power fan can run far longer than a 20000mAh battery in a large one. Compare the capacity against the listed runtime hours to see how efficient the fan is."
  },
  {
    "criterion": "Runtime claims and speed",
    "explanation": "A runtime like 11 to 60 hours covers the range from highest to lowest speed. The long figure is the lowest speed and the short figure is the highest, so a hot night at full power is nearer the short number. Check which speed the listing ties its longest claim to."
  },
  {
    "criterion": "Charging time and port",
    "explanation": "A big battery takes longer to refill, and a USB-C port usually charges faster than a micro-USB. A four to six hour charge fits a day at the campsite with a power bank or solar panel. Look for the stated charge time and port type on the listing."
  },
  {
    "criterion": "Power bank output",
    "explanation": "Some fans also work as a power bank for a phone, which is handy but shares the same battery. Using it for charging cuts fan runtime. Check that the listing names a USB output and its current if you plan to charge a phone."
  },
  {
    "criterion": "Blade size and airflow",
    "explanation": "A larger blade moves more air at the same speed, but also takes more pack space and more battery. A small 9 to 11 inch fan cools a person, while a 31 inch fan cools a canopy. Match the blade span to the space, not to the biggest number."
  },
  {
    "criterion": "Mounting and weight",
    "explanation": "A hanging fan rests on a loop, pole or ridge line, and a heavier fan puts more load on a thin tent loop. Most small fans weigh well under a kilogram, while a 40000mAh canopy fan is much heavier. Look for the listed weight and the hook design before you hang it."
  }
];

export const faq = [
  {
    "q": "How long will a rechargeable tent fan really run?",
    "a": "The hours on a listing are best-case figures at the lowest speed. At a mid setting you will get fewer hours, and at the top speed fewer still. Plan on the shorter end of the range for hot nights."
  },
  {
    "q": "Can I charge a rechargeable tent fan from a solar panel or power bank?",
    "a": "Yes, most are charged by USB cable, so a power bank or small solar panel can top them off. A larger battery takes longer, so a 40000mAh fan needs a stronger source than a 4000mAh one. Check the listed charge port and input before you rely on solar."
  },
  {
    "q": "Is a bigger battery always better?",
    "a": "No, a bigger battery adds weight, cost and charging time. A 4000mAh fan is plenty for a short weekend if you can recharge each day. Choose capacity to match the number of nights between charges."
  },
  {
    "q": "How should I hang a rechargeable fan in a tent?",
    "a": "Use the built-in hook on a ceiling loop or pole, and position it so the breeze crosses your sleeping bag. A fan hung near the roof circulates warm air, and one hung low cools you directly. Keep the cord and remote clear of the zipper."
  },
  {
    "q": "How do I look after the battery between trips?",
    "a": "Charge it after a trip and top it up every month or two in storage, as most lithium batteries prefer partial charge. Keep it out of a hot car. Wipe the blades and grille dry before storing."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
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
  },
  {
    "title": "Best 4 Season Tent Under 300",
    "href": "/tents-shelter/best-4-season-tent-under-300"
  }
];
