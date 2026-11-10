export const guideSlug = "best-telescopic-led-camping-lights";
export const guideTitle = "2 Best Telescopic Led Camping Lights in 2026";
export const metaTitle = "Best Telescopic Led Camping Lights in 2026";
export const metaDescription = "Best telescopic LED camping lights compared on extending height, battery size, brightness range and packed length for campers who want light raised.";
export const mainKeyword = "best telescopic led camping lights";
export const introParagraphs = [
  "Few listings pair the word telescopic with a real camping light, so this guide has two picks rather than a long ranking. Both extend or retract to change how the light is carried and placed, which is the whole point of the category.",
  "The pair was compared on how each one extends, stated battery size, brightness steps and what else the body does. Where a listing leaves out a weight or a rating, the guide says so as a buyer tip."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/lighting-headlamp-tent.webp";
export const heroImageAlt = "Camper wearing a headlamp in front of a tent at night";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-telescopic-led-camping-lights-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "BUBRA Rechargeable Camping Light with Stand",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31S60+ds9pL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HJYM7R6G?tag=rvgearlab-20",
    "description": "The BUBRA lifts three 1000 lumen LED panels on a telescopic tripod for a combined 3000 lumens, with a 450 lumen flashlight mode on top. Each head turns 360 degrees and tilts 100 degrees downward, and an 8000mAh battery runs up to 10 hours on high or 30 on low.\n\nAgainst the Qinzhuo, it is the one that actually raises light on a stand, so a picnic table or kitchen area gets overhead light instead of a lantern sitting beside the plates. The body collapses to 2.44 by 15.7 inches and weighs 1.7 lbs.\n\nIt suits car campers and backpackers who cook, play cards or work after dark and want to aim light where it is needed. The same unit also serves as a flashlight and an emergency lantern.",
    "specs": [
      "3 panels, 3000 lumens",
      "8000mAh, 10H high, 30H low",
      "1.7 lbs, 2.44 by 15.7 inches"
    ],
    "pros": [
      "Telescopic tripod lifts the light",
      "Three heads rotate and tilt",
      "Light at 1.7 lbs",
      "Up to 30 hours on low"
    ],
    "cons": [
      "Weather rating is not stated",
      "Larger LED panels draw the battery fast"
    ],
    "bestFor": "Raised light for cooking and cards",
    "take": "The telescopic pick that actually lifts light above the table, and it packs small.",
    "catch": "No waterproof rating is named, so keep it out of heavy rain."
  },
  {
    "id": "best-telescopic-led-camping-lights-2",
    "rank": 2,
    "badge": "Best Budget",
    "name": "Telescopic Camping Light",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41i0aaoNlIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GL7Q22RY?tag=rvgearlab-20",
    "description": "The Qinzhuo is a retractable camping lamp with a 4500mAh rechargeable battery that also works as a charging bank. Three brightness levels sit on top of a color temperature that slides from 1800K warm to 6500K cold, and the title lists a magnetic mount and a waterproof body.\n\nIt costs less than the BUBRA and gives up the stand and the multi-head spread. In return it adds the smooth color temperature range, which suits reading, cooking and quiet evenings better than one fixed white.\n\nIt suits campers who want an adjustable warm-to-cold lantern that tucks away, hangs or sticks to metal. Anglers and hikers who like a phone top-up from the lamp will use the charging bank feature.",
    "specs": [
      "4500mAh, doubles as power bank",
      "1800K to 6500K adjustable",
      "Retractable, magnetic mount"
    ],
    "pros": [
      "Smooth warm to cold color range",
      "Works as a phone charging bank",
      "Retractable body packs down",
      "Lower price than the BUBRA"
    ],
    "cons": [
      "Lumen output is not stated",
      "Smaller battery than the BUBRA"
    ],
    "bestFor": "Warm reading light on a budget",
    "take": "A cheaper retractable lamp with adjustable warm-to-cold color and a charging bank.",
    "catch": "The listing prints no lumen figure, so judge brightness in person."
  }
];

export const howWeEvaluated = [
  {
    "title": "How it extends",
    "description": "Telescopic tripod stands were compared with retractable lamp bodies, since the two solve different problems."
  },
  {
    "title": "Battery and runtime",
    "description": "Stated mAh figures and listed run times at high and low were set side by side."
  },
  {
    "title": "Brightness range",
    "description": "Printed lumens, dimming steps and color temperature options were noted where given."
  },
  {
    "title": "Packed size and weight",
    "description": "Collapsed length and stated weight were compared for pack and glove box carry."
  },
  {
    "title": "Extra functions",
    "description": "Flashlight, charging bank and magnetic mount features were weighed as secondary benefits."
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
    "subheading": "By Camp Task",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Cooking and card tables",
          "BUBRA Tripod Light",
          "Raised heads and 3000 lumens reach across a table."
        ],
        [
          "Tent reading and bedside",
          "Qinzhuo Retractable Lamp",
          "Warm 1800K light and three brightness steps."
        ],
        [
          "Backpack weight matters",
          "BUBRA Tripod Light",
          "Listed at 1.7 lbs and collapses to 15.7 inches."
        ],
        [
          "Need to top up a phone",
          "Qinzhuo Retractable Lamp",
          "The 4500mAh cell doubles as a charging bank."
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
          "Qinzhuo Retractable Lamp"
        ],
        [
          "$40 to $50",
          "BUBRA Tripod Light"
        ]
      ]
    }
  },
  {
    "subheading": "Tripod Stand vs Retractable Body",
    "cards": [
      {
        "label": "Tripod stand",
        "text": "A telescopic stand raises panels above eye level, which spreads light further and reduces glare. The BUBRA Tripod Light is the only stand in this guide."
      },
      {
        "label": "Retractable body",
        "text": "A retractable lamp collapses small and sits or hangs where you place it. The Qinzhuo Retractable Lamp is the only one of this type here."
      }
    ],
    "note": "Choose the BUBRA Tripod Light for work light and the Qinzhuo Retractable Lamp for ambient light."
  },
  {
    "subheading": "By Battery Priority",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Longest listed runtime",
          "BUBRA Tripod Light"
        ],
        [
          "Phone charging on the side",
          "Qinzhuo Retractable Lamp"
        ],
        [
          "Magnetic mounting on a vehicle",
          "Qinzhuo Retractable Lamp"
        ]
      ]
    }
  },
  {
    "subheading": "Backpacking Trips",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated weight and collapsed length, plus a battery you can top up from a power bank."
      },
      {
        "label": "In this comparison",
        "text": "The BUBRA Tripod Light lists 1.7 lbs and 15.7 inches collapsed, and the Qinzhuo Retractable Lamp offers a smaller retractable body without a printed weight."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BUBRA Tripod Light if you want real work light on a stand with three adjustable heads."
      },
      {
        "label": "Save if",
        "text": "Save with the Qinzhuo Retractable Lamp if soft adjustable light and a phone charging option are enough."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What telescopic really means",
    "explanation": "A telescopic light extends in sections, either as a stand that raises the lamp or as a body that pulls out to open the lantern. A stand changes where the light sits, while a retractable body mostly changes size. Read the listing to see which one you are buying, since both use the word."
  },
  {
    "criterion": "Extended height and stability",
    "explanation": "A tripod lifts light above shadows, but a tall thin stand can tip on soft ground. Check that the base spreads wider than the stand is tall and look for a stated height. A lower, wider stance is safer in wind."
  },
  {
    "criterion": "Battery size and runtime",
    "explanation": "Bigger panels draw the battery down fast, so a listing that gives hours at high and at low is more useful than a bare mAh number. A rule of thumb is to plan on the low setting for a whole evening. Compare the high-setting hours between lights."
  },
  {
    "criterion": "Brightness and color",
    "explanation": "Lumens measure total light, while color temperature changes the mood. Warm light around 2700K is easier on eyes at camp and attracts fewer insects than cold white. Look for a light that offers both warm and cold settings."
  },
  {
    "criterion": "Weather rating",
    "explanation": "Most camping lights are used under an awning, yet dew and sudden rain happen. An IPX4 or higher rating means it handles splashes, and no rating means you should treat it as indoor only. Look for the rating in the bullet points, not the marketing title."
  }
];

export const faq = [
  {
    "q": "Is a telescopic camping light better than a normal lantern?",
    "a": "It depends on the job. A stand raises light above the table, which helps when cooking or playing cards. A plain lantern is simpler and often tougher, so choose a telescopic light only if you want that height."
  },
  {
    "q": "What is the common mistake when buying one?",
    "a": "Assuming telescopic means waterproof or tall. Check the listing for a stated height and an IP rating, because neither is guaranteed by the word. The BUBRA Tripod Light names a collapsed size but no weather rating."
  },
  {
    "q": "Is the BUBRA worth it over the Qinzhuo?",
    "a": "If you need real brightness and a stand, yes. The BUBRA Tripod Light lists 3000 lumens across three heads, while the Qinzhuo Retractable Lamp prints no lumen figure. For quiet tent light the cheaper lamp is enough."
  },
  {
    "q": "How do I set up a tripod light on uneven ground?",
    "a": "Spread the legs fully and extend the stand only as far as you need. Press the base firmly into the ground and keep heads aimed low in wind. A short, wide stance is steadier than full height."
  },
  {
    "q": "How should I store a rechargeable camping light?",
    "a": "Charge it partway and keep it somewhere cool and dry. Avoid leaving it in a hot car. Top the battery up before each trip so it has a full charge when you need it."
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
