export const guideSlug = "best-500-lumens-rechargeable-lanterns";
export const guideTitle = "2 Best 500 Lumens Rechargeable Lanterns in 2026";
export const metaTitle = "Best 500 Lumens Rechargeable Lanterns in 2026";
export const metaDescription = "Best 500 lumen rechargeable lanterns compared on dimming range, warm light, backup power and weather rating for tent, patio and outage use.";
export const mainKeyword = "best 500 lumens rechargeable lanterns";
export const introParagraphs = [
  "Five hundred lumens is a comfortable all-purpose lantern brightness: enough to light a picnic table or tent without the glare of a 2000 lumen unit. Few listings state that exact number, so this guide is short and says so plainly.",
  "Two lanterns made the list, one that states 500 lumens exactly and one that states 1000 lumens as the nearest brighter fit. They were compared on stated output, dimming range, power options and the weather rating each listing names."
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
    "id": "best-500-lumens-rechargeable-lanterns-1",
    "rank": 1,
    "badge": "Best Exact Match",
    "name": "LUXPRO Rechargeable Retro Lantern LED Camping Lantern",
    "price": "$38.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41WqCFaMYAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H6GYLVVZ?tag=rvgearlab-amz-20",
    "description": "The LUXPRO retro lantern lists 500 lumens with a rotary dial that dims from 5 to 500 lumens and switches between warm and white light. It runs on a built-in 2000mAh battery that charges over USB-C, with four AA batteries as backup.\n\nIt is the only pick here that states 500 lumens, and the dial gives a far wider low-end range than the five fixed modes on the Westinghouse 1000 Lumen. The AA backup also keeps it running when no charger is near.\n\nIt suits campers and storm-prep households who want a warm, dimmable lantern for a tent, patio or nightstand. A built-in handle and a 6.5 inch height make it easy to hang or stash, and it is sold as a 2-pack, with single lanterns in white and black.",
    "specs": [
      "500 lumens, 5 lumen minimum",
      "2000mAh USB-C plus 4 AA backup",
      "Warm or white, up to 320 hours"
    ],
    "pros": [
      "Smooth dial from 5 to 500 lumens",
      "Warm and white light in one lantern",
      "AA batteries serve as a backup",
      "Compact 6.5 inch body with handle"
    ],
    "cons": [
      "IPX rating is not given, only water resistant",
      "Built-in battery is a small 2000mAh"
    ],
    "bestFor": "Warm tent and patio light",
    "take": "The better pick for most camps, with the right brightness and a backup power option. Buy the 2-pack if you want one for the tent and one for the table.",
    "catch": "The listing says water-resistant but does not name an IP rating."
  },
  {
    "id": "best-500-lumens-rechargeable-lanterns-2",
    "rank": 2,
    "badge": "Best Brighter Option",
    "name": "Solar Rechargeable Camping Lantern",
    "price": "$45.46",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+EfiRa4IL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GTYWCJHX?tag=rvgearlab-amz-20",
    "description": "The Westinghouse lists 1000 lumens of 5000K daylight white with high, medium and low steps plus an SOS flash. It charges by solar panel or fast USB-C and carries an IPX4 rating.\n\nIt states twice the output of the LUXPRO 500 Lumen Retro, which makes it the pick for lighting a bigger campsite. Its solar top-up and named IPX4 rating add features the LUXPRO does not list.\n\nIt suits campers who want one stronger lantern with a solar backup for multi-day trips. An integrated handle makes it easy to carry or hang from a tent.",
    "specs": [
      "1000 lumens, 5000K white",
      "Solar and USB-C charging",
      "IPX4 with SOS flash"
    ],
    "pros": [
      "Twice the stated brightness",
      "Solar and USB-C charging options",
      "SOS mode for emergencies",
      "Integrated handle for hanging"
    ],
    "cons": [
      "Above the 500 lumen target",
      "Daylight white only, no warm option"
    ],
    "bestFor": "Brighter camp-wide lighting",
    "take": "A good step up if 500 lumens feels dim. The solar panel is a useful extra on longer trips.",
    "catch": "Solar alone is a slow top-up for 1000 lumens, so plan on USB-C."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated lumens",
    "description": "Looked for a listing that names 500 lumens or the closest higher figure."
  },
  {
    "title": "Dimming range",
    "description": "Compared how low each lantern can be turned down for tent and bedside use."
  },
  {
    "title": "Power and backup",
    "description": "Noted battery type, charging port and whether a spare power source is available."
  },
  {
    "title": "Weather rating",
    "description": "Checked whether the listing gives an IP rating or only general water-resistance wording."
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
    "subheading": "By Brightness Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Tent and nightstand light",
          "LUXPRO 500 Lumen Retro",
          "Dims to 5 lumens with warm tone"
        ],
        [
          "Picnic table and patio",
          "LUXPRO 500 Lumen Retro",
          "500 lumens is enough at close range"
        ],
        [
          "Lighting a wider campsite",
          "Westinghouse 1000 Lumen",
          "Twice the stated output"
        ],
        [
          "Emergency signaling",
          "Westinghouse 1000 Lumen",
          "SOS flash mode"
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
          "$30 to $40",
          "LUXPRO 500 Lumen Retro"
        ],
        [
          "$40 to $50",
          "Westinghouse 1000 Lumen"
        ]
      ]
    }
  },
  {
    "subheading": "Retro dial vs solar panel",
    "cards": [
      {
        "label": "Retro dial",
        "text": "The LUXPRO 500 Lumen Retro uses a rotary dial and AA backup, which favors fine dimming and no-charger reliability."
      },
      {
        "label": "Solar panel",
        "text": "The Westinghouse 1000 Lumen adds a solar panel and fast USB-C, which favors longer trips without a wall outlet."
      }
    ],
    "note": "Most campers should default to the LUXPRO 500 Lumen Retro unless they need solar topping up on multi-day trips."
  },
  {
    "subheading": "By Power Preference",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "AA batteries as backup",
          "LUXPRO 500 Lumen Retro"
        ],
        [
          "Solar topping up",
          "Westinghouse 1000 Lumen"
        ],
        [
          "Fast USB-C charging",
          "Westinghouse 1000 Lumen"
        ],
        [
          "Warm light option",
          "LUXPRO 500 Lumen Retro"
        ]
      ]
    }
  },
  {
    "subheading": "For Hurricane and Outage Kits Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Backup power that does not rely on a wall outlet"
      },
      {
        "label": "In this comparison",
        "text": "The LUXPRO 500 Lumen Retro accepts AA batteries when the USB-C pack is empty, and the Westinghouse 1000 Lumen offers a solar panel."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Westinghouse 1000 Lumen if you want solar charging, a named IPX4 rating and a brighter top step for a large site."
      },
      {
        "label": "Save if",
        "text": "Save with the LUXPRO 500 Lumen Retro if you want a warm, dimmable lantern with AA backup, and buy singles in white or black if one lantern is enough."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 500 lumens looks like",
    "explanation": "Five hundred lumens fills a tent or lights a table at close range, and it is about the brightness of a mid-size household LED bulb. Higher figures help only when you light a large area from one point. Read the stated lumens at the top step, and assume a lower figure when dimmed."
  },
  {
    "criterion": "Low-end dimming range",
    "explanation": "A lantern that dims to 5 or 10 lumens is much more comfortable in a tent at night than one that bottoms out at 100. This is the setting you will use most. Look for the minimum lumen number in the listing, or a stepless dial rather than two or three fixed steps."
  },
  {
    "criterion": "Warm versus daylight white",
    "explanation": "Warm light around 2700K to 3000K is easier on the eyes and attracts fewer insects than blue-white light. Daylight white around 5000K shows color and detail better for cooking or repairs. Check the listing for a color temperature figure or a mode that switches tones."
  },
  {
    "criterion": "Backup power options",
    "explanation": "A built-in battery is convenient until it runs flat in a long power cut. Lanterns that accept AA batteries or a solar panel can recover without a wall outlet. Read the listing for backup battery type and whether the cells are included."
  },
  {
    "criterion": "IP rating wording",
    "explanation": "Terms such as water-resistant are vague, while IPX4 means protection against splashes from any direction. If your lantern will sit in drizzle, the exact code tells you whether to trust it. Look for the IP code in the specs, and treat missing codes as unknown."
  }
];

export const faq = [
  {
    "q": "Is 500 lumens enough for a campsite?",
    "a": "It lights a table or tent well. For a whole campsite with several people, a 1000 lumen unit such as the Westinghouse 1000 Lumen reaches further."
  },
  {
    "q": "Can the LUXPRO run on AA batteries?",
    "a": "The listing says it runs on a built-in 2000mAh rechargeable pack or four AA backup batteries. Keep a fresh set in the lantern so it works when the pack is empty."
  },
  {
    "q": "Are the single lanterns the same as the 2-pack?",
    "a": "The LUXPRO is sold as a 2-pack in sage green and as single lanterns in white and black. The listings describe the same 500 lumen retro design, so choose by color and count."
  },
  {
    "q": "How do I use a lantern in a tent safely?",
    "a": "Hang it from a loop or set it on a flat surface away from the sleeping bag. Use a low warm setting for the night, and keep it out of rain even if the listing says water-resistant."
  },
  {
    "q": "How long will the battery last?",
    "a": "Runtime depends on the brightness level. The LUXPRO listing quotes up to 320 hours on low, and the figure drops fast near 500 lumens, so keep spare batteries or a charger on long trips."
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
