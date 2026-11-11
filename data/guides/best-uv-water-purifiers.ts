export const guideSlug = "best-uv-water-purifiers";
export const guideTitle = "4 Best Uv Water Purifiers in 2026";
export const metaTitle = "Best Uv Water Purifiers in 2026";
export const metaDescription = "Best handheld UV water purifiers compared on weight, battery type, treatment count and display for backpackers, travelers and emergency kits.";
export const mainKeyword = "best uv water purifiers";
export const introParagraphs = [
  "A UV pen treats a liter in about 90 seconds with no pumping and no tablets, as long as the water is clear. Four SteriPen models make up this guide, and the real differences are battery type, weight and how the pen tells you it worked.",
  "Picks are ranked by what a trip demands: travel days with no outlet favor replaceable batteries, thru-hikes favor low weight, and gadget fans get a display. Every pen here needs clear water, so a pre-filter or a coffee filter is part of the kit."
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
    "id": "best-uv-water-purifiers-1",
    "rank": 1,
    "badge": "Best Ultralight",
    "name": "SteriPen Ultralight UV Water Purifier",
    "price": "$102.15",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21In1cg7tTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07L52FLJV?tag=rvgearlab-amz-20",
    "description": "The SteriPen Ultralight weighs 3 ounces and turns on when it touches water, then stops by itself. The lamp is rated for 8,000 treatments, and the listing cites 90 seconds per liter.\n\nIt undercuts the SteriPen Ultra on weight and price while giving up the display, and one USB charge covers about 20 treatments. Battery life per charge is shorter than the AA-powered Classic 3.\n\nGood for thru-hikers who pass through towns with USB power and want the lightest purifier. No button to push, so no accidental drain in the pack.",
    "specs": [
      "3 oz pen",
      "8,000-treatment lamp",
      "USB charge, about 20 treatments"
    ],
    "pros": [
      "Only 3 ounces",
      "Starts on contact with water",
      "8,000 treatment lamp rating",
      "Recharges over USB"
    ],
    "cons": [
      "About 20 treatments per charge",
      "No display for treatment confirmation"
    ],
    "bestFor": "Thru-hikers and weight savers",
    "take": "A 3 ounce UV pen that starts on contact with water and charges over USB.",
    "catch": "A full charge gives only about 20 treatments, so long stretches without power need a bank."
  },
  {
    "id": "best-uv-water-purifiers-2",
    "rank": 2,
    "badge": "Best Display and Rechargeable",
    "name": "SteriPen Ultra UV Water Purifier",
    "price": "$129.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41cvQdV0zGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00NK9948M?tag=rvgearlab-amz-20",
    "description": "The SteriPen Ultra carries a full OLED display that shows treatment confirmation, a running count of treatments and battery status. An internal rechargeable battery powers up to 8,000 liters per lamp lifetime.\n\nIt charges from a computer, wall outlet or solar panel, and it treats 1 liter in 90 seconds or 0.5 liter in under a minute. Compared with the SteriPen Ultralight it adds the display and the longer rechargeable run.\n\nA strong choice for travelers and off-grid campers who like seeing a count and a battery gauge. The watertight seals and rubber grips handle trail wear.",
    "specs": [
      "OLED treatment display",
      "Rechargeable, 8,000 L per lamp",
      "1 L in 90 seconds"
    ],
    "pros": [
      "OLED confirms each treatment",
      "Counts treatments and shows battery",
      "Charges by USB or solar",
      "Watertight seals and rubber grips"
    ],
    "cons": [
      "Highest price of the four",
      "Internal battery cannot be swapped"
    ],
    "bestFor": "Off-grid travelers who want data",
    "take": "The only pen here with an OLED screen, and it recharges from USB or solar.",
    "catch": "It is the most expensive of the four, and an internal battery means no swapping cells."
  },
  {
    "id": "best-uv-water-purifiers-3",
    "rank": 3,
    "badge": "Best for Battery Flexibility",
    "name": "SteriPen Classic 3 UV Water Purifier",
    "price": "$94.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31lxGdoXA1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09SG6V9WC?tag=rvgearlab-amz-20",
    "description": "The SteriPen Classic 3 runs on four AA batteries: 25 treatments on alkaline, 150 on lithium or 100 on rechargeable NiMH. An LED panel shows treatment size, battery level and lamp life remaining.\n\nIt trades the rechargeable battery of the Ultra for cells you can buy almost anywhere, and its tapered neck fits most wide-mouth bottles. At 90 seconds for 1 liter it matches the others.\n\nThe right pen for long trips through places where USB charging is rare. Pack lithium AAs and it runs for 150 treatments.",
    "specs": [
      "4 AA batteries",
      "150 treatments on lithium",
      "LED lamp-life panel"
    ],
    "pros": [
      "Runs on common AA cells",
      "150 treatments on lithium",
      "LED shows battery and lamp life",
      "Tapered neck fits wide bottles"
    ],
    "cons": [
      "Four AAs add weight",
      "Only 25 treatments on alkaline"
    ],
    "bestFor": "Remote trips with no outlets",
    "take": "Takes four AA cells, so lithium gives 150 treatments between swaps.",
    "catch": "It uses four AA cells, which adds weight and bulk compared with the 3 ounce Ultralight."
  },
  {
    "id": "best-uv-water-purifiers-4",
    "rank": 4,
    "badge": "Best Value With a Light",
    "name": "SteriPen Adventurer Opti UV Water Purifier",
    "price": "$94.38",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/217M1ePprmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B003A1MURC?tag=rvgearlab-amz-20",
    "description": "The SteriPen Adventurer Opti is a 6 inch pen at 3.6 ounces powered by two CR123 lithium batteries, which are included. One set gives 60 treatments, and an optical sensor starts the lamp when it is submerged.\n\nWhere the Classic 3 runs on four AA cells, the Opti uses two compact CR123s and adds a built-in LED flashlight for emergencies. A neoprene case comes with it, and it carries the smallest price tag in this group.\n\nA practical choice for backpackers and emergency kits that want a pen with a flashlight on the side. Spare CR123 cells store well for years.",
    "specs": [
      "3.6 oz, 6 inch pen",
      "2 CR123 included, 60 treatments",
      "Optical sensor and flashlight"
    ],
    "pros": [
      "Lowest price of the four",
      "Batteries included, 60 treatments",
      "Doubles as a flashlight",
      "Neoprene case included"
    ],
    "cons": [
      "CR123 cells are pricier than AAs",
      "60 treatments per battery set"
    ],
    "bestFor": "Emergency kits and backpacks",
    "take": "A 3.6 ounce pen with a flashlight, a neoprene case and the lowest price here.",
    "catch": "CR123 batteries cost more than AAs and are harder to find in small towns."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight and size",
    "description": "We compared the listed weights and pen lengths, since carry weight is the main reason to buy a UV pen."
  },
  {
    "title": "Power source",
    "description": "We separated USB-rechargeable pens from those using AA or CR123 batteries and noted treatments per charge or set."
  },
  {
    "title": "Treatment feedback",
    "description": "We looked at displays and indicators that confirm a treatment."
  },
  {
    "title": "Treatment time",
    "description": "We recorded the stated seconds per half liter and per liter."
  },
  {
    "title": "Clear-water limit",
    "description": "We noted that every listing says UV works on clear water only."
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
    "subheading": "By Trip Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Thru-hike with town charging",
          "SteriPen Ultralight",
          "3 ounces, USB"
        ],
        [
          "Remote trip, no outlets",
          "SteriPen Classic 3",
          "Common AA cells"
        ],
        [
          "Solar or USB off-grid, want a count",
          "SteriPen Ultra",
          "OLED display and rechargeable"
        ],
        [
          "Emergency kit",
          "SteriPen Adventurer Opti",
          "Batteries included, flashlight"
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
          "$90 to $100",
          "SteriPen Adventurer Opti or SteriPen Classic 3"
        ],
        [
          "$100 to $130",
          "SteriPen Ultralight or SteriPen Ultra"
        ]
      ]
    }
  },
  {
    "subheading": "Rechargeable vs Replaceable Batteries",
    "cards": [
      {
        "label": "Rechargeable",
        "text": "The SteriPen Ultra and SteriPen Ultralight charge from USB, which is light but needs a power source."
      },
      {
        "label": "Replaceable cells",
        "text": "The SteriPen Classic 3 uses AA cells and the SteriPen Adventurer Opti uses CR123 cells. Both work far from any outlet."
      }
    ],
    "note": "Most backpackers should pick the SteriPen Ultralight, and remote-trip travelers the SteriPen Classic 3."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price",
          "SteriPen Adventurer Opti"
        ],
        [
          "Low price, AA power",
          "SteriPen Classic 3"
        ],
        [
          "Mid price, lightest",
          "SteriPen Ultralight"
        ],
        [
          "Top price, display",
          "SteriPen Ultra"
        ]
      ]
    }
  },
  {
    "subheading": "Backcountry Hikes Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Weight, treatment count per charge and a way to confirm a treatment."
      },
      {
        "label": "In this comparison",
        "text": "The SteriPen Ultralight is the lightest at 3 ounces, and the SteriPen Ultra confirms each treatment on a display."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the SteriPen Ultra for the display and rechargeable run, or the SteriPen Ultralight for the lowest weight."
      },
      {
        "label": "Save if",
        "text": "Save with the SteriPen Adventurer Opti or SteriPen Classic 3 if cell batteries suit your trips."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Power source",
    "explanation": "A UV lamp is only as dependable as its battery. USB pens need a charger or bank, while AA and CR123 pens use cells you carry. Count treatments per charge and match it to the days between outlets."
  },
  {
    "criterion": "Clear water only",
    "explanation": "UV light cannot pass through murky water, so particles shield microorganisms. Pre-filter cloudy water through a cloth or coffee filter before using the pen. If water looks thick, pick a filter instead."
  },
  {
    "criterion": "Stir and bottle fit",
    "explanation": "The pen needs a wide-mouth bottle and a gentle stir for the full 90 seconds per liter. Narrow bottles will not fit. Check your bottle opening against the pen length."
  },
  {
    "criterion": "Lamp life",
    "explanation": "Lamps are rated in treatments, with 8,000 listed for several pens here. Divide that by your daily use for a trip estimate. A display that counts treatments helps you track it."
  },
  {
    "criterion": "Failure risk",
    "explanation": "Electronics fail with drops and cold. Carry a backup such as tablets for emergencies. A pen with a visible status light or display tells you when it is working."
  }
];

export const faq = [
  {
    "q": "Do UV pens work on cloudy water?",
    "a": "They are listed for clear water. Strain cloudy water through a cloth or coffee filter first. If it stays murky, use a filter instead."
  },
  {
    "q": "What mistake do buyers make with UV pens?",
    "a": "They forget to stir or use a narrow bottle. Use a wide-mouth bottle, stir for the full time and keep the lamp submerged. Rinse the lamp before storage."
  },
  {
    "q": "Is the SteriPen Ultra worth it over the Ultralight?",
    "a": "If you want a display and a larger rechargeable battery, yes. The Ultralight is lighter and costs less. Pick based on whether feedback matters."
  },
  {
    "q": "How do I treat a liter with a UV pen?",
    "a": "Fill a wide-mouth bottle, activate the pen and stir gently for 90 seconds for one liter. Half a liter takes less time. Treat the bottle's threads and lid as well."
  },
  {
    "q": "How do I care for the lamp?",
    "a": "Keep the lamp dry and clean, store it with its cap, and avoid drops. Replace batteries or recharge before a trip. Carry a backup such as tablets."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Water Purifiers For Backpacking",
    "href": "/packs-hiking/best-water-purifiers-for-backpacking"
  },
  {
    "title": "Best Backpacking Water Filter For Groups",
    "href": "/packs-hiking/best-backpacking-water-filter-for-groups"
  },
  {
    "title": "Best Hiking Backpack For Women With Water Bladder",
    "href": "/packs-hiking/best-hiking-backpack-for-women-with-water-bladder"
  }
];
