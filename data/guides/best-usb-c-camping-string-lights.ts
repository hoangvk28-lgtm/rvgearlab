export const guideSlug = "best-usb-c-camping-string-lights";
export const guideTitle = "3 Best USB C Camping String Lights in 2026";
export const metaTitle = "Best USB C Camping String Lights in 2026";
export const metaDescription = "Best USB-C camping string lights compared on battery size, solar backup and runtime, for campers who want to recharge on one cable.";
export const mainKeyword = "best usb c camping string lights";
export const introParagraphs = [
  "USB-C is the cable most campers already carry, and string lights that fill from it are easier to keep topped up. Only some listings name the port plainly, so this list is limited to strings that do.",
  "Three strings made the cut: a premium 44 ft solar BioLite, a 100 ft Sikitul and a pair of 32.8 ft Zocelight reels. Each was read for USB-C charging, battery size, runtime and weather rating."
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
    "id": "best-usb-c-camping-string-lights-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "BioLite Solar String Lights",
    "price": "$99.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31hL+wilmEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DXQQYF7X?tag=rvgearlab-20",
    "description": "The BioLite has a 44 ft nylon-braided string with 20 shatterproof bulbs and 40 warm white LEDs. A 4000mAh battery lists up to 40 hours on low or 8 hours on high, fills over USB-C in 3 to 5 hours and outputs through USB-C and USB-A on a detachable hub.\n\nIt is the only pick with a detachable power hub that charges devices, and the only one with a stated high and low runtime. Against the Sikitul, it trades length for a bigger battery and an IPX4 rating.\n\nIt suits campers who want one reliable, repeat-use string for campsite, patio and backyard. The string stays in place while the hub recharges.",
    "specs": [
      "4000mAh, 40 hours low",
      "USB-C in 3 to 5 hours",
      "Detachable hub, IPX4"
    ],
    "pros": [
      "Stated 40 hours low and 8 hours high",
      "Detachable hub charges devices",
      "Nylon-braided cord, shatterproof bulbs",
      "Solar panel plus USB-C"
    ],
    "cons": [
      "Priciest string by a wide margin",
      "Shorter than the 100 ft Sikitul"
    ],
    "bestFor": "Repeat-use campsites",
    "take": "A premium string with a hub that doubles as a power source.",
    "catch": "Using the hub to charge devices cuts the lighting time."
  },
  {
    "id": "best-usb-c-camping-string-lights-2",
    "rank": 2,
    "badge": "Best Long String",
    "name": "Sikitul 100FT Solar String Lights Outdoor Waterproof",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/515+ZP0yOkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GHWRY41M?tag=rvgearlab-20",
    "description": "The Sikitul covers 100 ft with 35+1 shatterproof LED bulbs, a solar panel and a USB-C cable for backup. A remote offers three lighting modes, a timer and a dimmer, and the listing notes weather-resistant construction.\n\nIt reaches more than twice the BioLite's length, and it costs a fraction of the price. The battery size and runtime are not stated, so it trails the BioLite for planning.\n\nIt suits large group sites and pavilions. It runs without outlets or extension cords.",
    "specs": [
      "100 ft, 35+1 bulbs",
      "Solar plus USB-C",
      "Remote, timer, dimmer"
    ],
    "pros": [
      "Longest string of the three",
      "Solar plus USB-C backup",
      "Remote, timer and dimmer",
      "Shatterproof bulbs"
    ],
    "cons": [
      "Battery and runtime are not stated",
      "Too long for a small tent"
    ],
    "bestFor": "Group sites",
    "take": "A long, remote-controlled string for big spaces.",
    "catch": "With no runtime listed, test a full charge before a trip."
  },
  {
    "id": "best-usb-c-camping-string-lights-3",
    "rank": 3,
    "badge": "Best Reel Pair",
    "name": "2pcs Camping String Lights",
    "price": "$35.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41qRYIkFQAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQC6CCDH?tag=rvgearlab-20",
    "description": "The Zocelight set gives two 32.8 ft reels, each with 19 lighting modes including 4 music-sync modes. A 2200mAh battery fills in 2 hours over USB-C and lists 3.5 to 10 hours of runtime, and each unit weighs 0.6 lbs.\n\nIt is the only camp-style reel of the three, with a two-hour fill that beats the BioLite's 3 to 5 hours. It has no solar panel, unlike the other two.\n\nIt suits campers with two tents or a family camp who want colourful lighting. The 4.72 inch reel packs away easily.",
    "specs": [
      "Two reels, 2200mAh each",
      "USB-C 2 hour fill",
      "19 modes, 0.6 lb each"
    ],
    "pros": [
      "Two reels per purchase",
      "Two-hour USB-C charge",
      "19 modes with music sync",
      "Light at 0.6 lbs"
    ],
    "cons": [
      "No solar panel",
      "Runtime tops out at 10 hours"
    ],
    "bestFor": "Two-tent camps",
    "take": "A fast-charging pair of party reels.",
    "catch": "Expect the short end of the range with colour modes."
  }
];

export const howWeEvaluated = [
  {
    "title": "USB-C stated in the listing",
    "description": "Included only strings whose listings name USB-C."
  },
  {
    "title": "Battery and runtime",
    "description": "Compared stated mAh and hours."
  },
  {
    "title": "Solar backup",
    "description": "Checked for a panel."
  },
  {
    "title": "Weather rating",
    "description": "Read IPX and splash claims."
  },
  {
    "title": "Length and format",
    "description": "Compared 32.8 ft reels with 44 ft and 100 ft strings."
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
    "subheading": "By Camp",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Repeat-use campsite",
          "BioLite 44 ft Solar Lights",
          "4000mAh and a power hub."
        ],
        [
          "Large group site",
          "Sikitul 100 ft Solar Lights",
          "100 ft with a remote."
        ],
        [
          "Two tents",
          "Zocelight 2-Pack Reels",
          "Two reels with 2 hour USB-C fill."
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
          "Sikitul 100 ft Solar Lights"
        ],
        [
          "$30 to $40",
          "Zocelight 2-Pack Reels"
        ],
        [
          "$90 to $100",
          "BioLite 44 ft Solar Lights"
        ]
      ]
    }
  },
  {
    "subheading": "Solar Backup vs Fast Cable Fill",
    "cards": [
      {
        "label": "Solar backup",
        "text": "The BioLite 44 ft Solar Lights and Sikitul 100 ft Solar Lights add a panel for off-grid top-ups."
      },
      {
        "label": "Fast cable fill",
        "text": "The Zocelight 2-Pack Reels fill in about 2 hours over USB-C and depend on a power bank."
      }
    ],
    "note": "Most campers should pick a solar-plus-USB-C string like the BioLite 44 ft Solar Lights and carry a power bank."
  },
  {
    "subheading": "By Weather",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Splashes and rain",
          "BioLite 44 ft Solar Lights"
        ],
        [
          "Dry tent interior",
          "Zocelight 2-Pack Reels"
        ],
        [
          "Large open site",
          "Sikitul 100 ft Solar Lights"
        ]
      ]
    }
  },
  {
    "subheading": "For One-Cable Camp Kits Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "USB-C named in the listing plus a stated charge time."
      },
      {
        "label": "In this comparison",
        "text": "The BioLite 44 ft Solar Lights lists USB-C in 3 to 5 hours, and the Zocelight 2-Pack Reels lists USB-C in 2 hours."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BioLite 44 ft Solar Lights for a stated 40 hour runtime and a power hub."
      },
      {
        "label": "Save if",
        "text": "Save with the Sikitul 100 ft Solar Lights or Zocelight 2-Pack Reels for a simple glow."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "USB-C stated plainly",
    "explanation": "Many listings say USB rechargeable, which can mean micro-USB or USB-A. USB-C is faster, reversible and uses the cable in your phone kit. Look for USB-C or Type-C in the title or product details."
  },
  {
    "criterion": "Battery size and runtime",
    "explanation": "A 4000mAh battery stated at 40 hours on low is easy to plan around. A string with no battery figure leaves you guessing. Read the mAh and the hours at a named brightness."
  },
  {
    "criterion": "Charge time",
    "explanation": "A 2 hour fill suits an afternoon top-up, while 3 to 5 hours needs more planning. Fast charging matters on a weekend. Check the stated charge time."
  },
  {
    "criterion": "Solar backup",
    "explanation": "Solar adds an off-grid top-up but takes most of a day. USB-C is the dependable route. Check whether a panel is listed."
  },
  {
    "criterion": "Weather rating",
    "explanation": "IPX4 handles splashes from any direction. A string in a rainy site needs at least that. Look for the IP code."
  },
  {
    "criterion": "Length and weight",
    "explanation": "A 32.8 ft reel packs small, while 100 ft takes a bag. Choose a length for the space you light. Read the length and weight in the listing."
  }
];

export const faq = [
  {
    "q": "Can I charge these from a power bank?",
    "a": "Yes. The Zocelight 2-Pack Reels fills in about 2 hours over USB-C, and the BioLite 44 ft Solar Lights takes 3 to 5 hours. Use a 5V charger."
  },
  {
    "q": "What is the common mistake?",
    "a": "Assuming USB lights use USB-C. Many do not. Read the listing for the port name."
  },
  {
    "q": "Is the BioLite worth the price?",
    "a": "For repeat use, it can be. It states 40 hours on low and has a hub that charges devices. For casual trips, the Zocelight 2-Pack Reels costs far less."
  },
  {
    "q": "How do I set up a string at camp?",
    "a": "Hang the string, then place the panel in sun or plug in USB-C. The BioLite 44 ft Solar Lights keeps the string in place while the hub recharges."
  },
  {
    "q": "How do I store them?",
    "a": "Wind the cord loosely so the wire is not kinked. Charge the battery partway before storage. Keep the reels dry and cool."
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
