export const guideSlug = "best-emergency-solar-lanterns";
export const guideTitle = "5 Best Emergency Solar Lanterns in 2026";
export const metaTitle = "Best Emergency Solar Lanterns in 2026";
export const metaDescription = "Solar emergency lanterns compared on backup charging routes, hand crank, light output and storage size for power outages, storms and camp kits.";
export const mainKeyword = "best emergency solar lanterns";
export const introParagraphs = [
  "In an outage the best lantern is the one you can still power after the wall outlet and the AA stash are gone. This guide compares five solar lanterns on the backup routes they offer, from a hand crank to AA batteries.",
  "They were judged on charging routes, stated light output, runtime, size and water rating. Solar charging is slow on every model, so USB or crank top-ups matter too."
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
    "id": "best-emergency-solar-lanterns-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Raynic 6000 LED Camping Lantern",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41dd66LykhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BR3RCM9C?tag=rvgearlab-amz-20",
    "description": "The Raynic lists 650 lumens with smooth rotary dimming from 0 to 650, and about 200 hours at 50 lumens on a full charge. It charges mainly by 5V 2A micro USB, with a solar panel and a hand crank as backups.\n\nIt is the only pick with a hand crank, a third route the Lichamp 4-Pack and XTAUTO do not list. At 6.4 x 4.1 x 4.1 inches and 0.83 lb with a metal handle, it is a sturdy table-top unit.\n\nIt suits households building an outage kit who want the most backup routes and a strong, dimmable light. The warm-to-white transition helps in a living room.",
    "specs": [
      "650 lumens, rotary dimming",
      "About 200 hours at 50 lumens",
      "USB, solar and hand crank"
    ],
    "pros": [
      "Three charging routes",
      "Smooth 0 to 650 lumen dimming",
      "200 hour low-light runtime",
      "Metal handle, 0.83 lb"
    ],
    "cons": [
      "Solar and crank only top up slowly",
      "Bulkier than collapsible lanterns"
    ],
    "bestFor": "Whole-home outage kit",
    "take": "The most prepared lantern of the group, with a crank for the worst case. Great for kits.",
    "catch": "Solar and crank charging only maintain power slowly."
  },
  {
    "id": "best-emergency-solar-lanterns-2",
    "rank": 2,
    "badge": "Best Family Kit",
    "name": "Lichamp 4-Pack Solar Camping Lantern",
    "price": "$45.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410w1AkpevL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DW47WDML?tag=rvgearlab-amz-20",
    "description": "The Lichamp 4-Pack gives four pop-up lanterns that each run on USB, solar or AA batteries. It lists military-grade ABS, overcharge protection, three light modes and a power bank function.\n\nIt has three power routes per lantern, where the Raynic has three on one unit. Four lanterns cover four rooms, and each collapses to about smartphone size.\n\nIt suits families who want a light in every room plus a spare AA route. The overcharge protection is a plus for long storage.",
    "specs": [
      "Four pop-up lanterns",
      "USB, solar or AA power",
      "Overcharge protection"
    ],
    "pros": [
      "Four lanterns in one pack",
      "AA backup if the sun fails",
      "Overcharge protection listed",
      "Collapses to phone size"
    ],
    "cons": [
      "Highest pack price of the five",
      "No lumen figure is stated"
    ],
    "bestFor": "Outage kit for four rooms",
    "take": "The best way to light a whole house in an outage. A good fit for hurricane kits.",
    "catch": "The listing does not state lumens."
  },
  {
    "id": "best-emergency-solar-lanterns-3",
    "rank": 3,
    "badge": "Best Budget Pair",
    "name": "2-Pack Collapsible Camping Lantern XTAUTO Solar USB Rechargeable Portable Lightweight Waterproof LED Flashligh",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41U5j1DLWpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09WN3TNSV?tag=rvgearlab-amz-20",
    "description": "The XTAUTO is a two-pack of collapsible solar lanterns with 6+1 LED chips and a 1600mAh battery in each. It lists more than 25 hours of light, solar and USB charging, and an automatic power-off.\n\nIt costs the least of the five per pair and gives two lanterns. It folds to about the size of a phone.\n\nIt suits households that want inexpensive backups for two spaces. The folding handle hangs on a hook or tent loop.",
    "specs": [
      "Two lanterns, 1600mAh each",
      "6+1 LEDs, 25+ hours",
      "Solar and USB, auto off"
    ],
    "pros": [
      "Lowest price in the list",
      "Two lanterns per pack",
      "25 hours of light listed",
      "Auto power-off protection"
    ],
    "cons": [
      "No lumen figure is given",
      "Water rating is general only"
    ],
    "bestFor": "Cheap backup pair",
    "take": "A low-cost pair that covers basic outage needs. Keep it in a drawer and a car.",
    "catch": "The listing gives no lumen figure or IP rating."
  },
  {
    "id": "best-emergency-solar-lanterns-4",
    "rank": 4,
    "badge": "Best for Phone Top-Up",
    "name": "Lichamp Collapsible Portable Solar Camping Lantern",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rc3BHlyWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DW48CVCY?tag=rvgearlab-amz-20",
    "description": "The Lichamp Collapsible combines a flashlight with a 360 degree lantern at 300 lumens. It charges by solar or USB, has overcharge protection and a USB output port for Android devices.\n\nNo other lantern here names a phone output port. Unlike the Lichamp 4-Pack, it is one light, so it fits a day pack.\n\nIt suits people who want a light and a phone top-up in one body. The ABS body is described as military grade.",
    "specs": [
      "300 lumens, flashlight handle",
      "Solar and USB charging",
      "USB output for phones"
    ],
    "pros": [
      "Phone output port included",
      "Flashlight and lantern in one",
      "Overcharge protection listed",
      "Tough ABS body"
    ],
    "cons": [
      "Battery size is not stated",
      "One light only"
    ],
    "bestFor": "Phone top-up and light",
    "take": "A multi-use unit for a go-bag. Pick it if you also need a small power source.",
    "catch": "The listing does not state battery capacity."
  },
  {
    "id": "best-emergency-solar-lanterns-5",
    "rank": 5,
    "badge": "Best Waterproof",
    "name": "LuminAID Nova Inflatable Solar LED Lantern for Camping",
    "price": "$32.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31bDvDLLx3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0716JV1SG?tag=rvgearlab-amz-20",
    "description": "Inflated, the LuminAID Nova gives 75 lumens in several brightness steps from a sealed IP67 shell. It claims up to 24 hours per charge and uses no spare cells at all.\n\nIt has the highest water rating of the five and packs flattest when deflated. Output is lower than the Raynic's 650 lumens.\n\nIt suits flood-prone homes, boat kits and kayak trips where waterproofing matters most. Its shatterproof body is safe around children.",
    "specs": [
      "75 lumens, 24 hours",
      "IP67 waterproof",
      "Inflatable, solar only"
    ],
    "pros": [
      "IP67 handles full immersion",
      "Packs flat",
      "Shatterproof body",
      "No batteries to buy"
    ],
    "cons": [
      "Only 75 lumens",
      "Solar charging only"
    ],
    "bestFor": "Flood and boat kits",
    "take": "The most water-ready lantern here. Choose it for wet environments.",
    "catch": "75 lumens is soft and recharging depends on sun."
  }
];

export const howWeEvaluated = [
  {
    "title": "Backup charging routes",
    "description": "We counted the power routes each lantern offers beyond solar, such as USB, crank and AA."
  },
  {
    "title": "Light output",
    "description": "Lumen figures and dimming range were compared."
  },
  {
    "title": "Storage and size",
    "description": "Collapsed size, weight and pack counts were compared for kits."
  },
  {
    "title": "Water resistance",
    "description": "Stated IP ratings were compared for storm and flood use."
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
    "subheading": "By Emergency Plan",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Maximum backup routes",
          "Raynic Hand Crank",
          "USB, solar and hand crank."
        ],
        [
          "Light for four rooms",
          "Lichamp 4-Pack",
          "Four lanterns with an AA backup."
        ],
        [
          "Cheapest backup pair",
          "XTAUTO 2-Pack",
          "Two lanterns at the lowest price."
        ],
        [
          "Go-bag with phone top-up",
          "Lichamp Collapsible",
          "USB output port for devices."
        ],
        [
          "Floods and boats",
          "LuminAID Nova",
          "IP67 and inflatable."
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
          "XTAUTO 2-Pack or Lichamp Collapsible"
        ],
        [
          "$20 to $40",
          "Raynic Hand Crank or LuminAID Nova"
        ],
        [
          "$40 to $50",
          "Lichamp 4-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Hand Crank vs AA Backup",
    "cards": [
      {
        "label": "Crank",
        "text": "The Raynic Hand Crank lets you make power with no supplies."
      },
      {
        "label": "AA",
        "text": "The Lichamp 4-Pack accepts AA cells that you store separately."
      }
    ],
    "note": "Pick the Raynic Hand Crank when you want no dependence on stored cells."
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
          "Low cost",
          "XTAUTO 2-Pack"
        ],
        [
          "Mid cost",
          "Raynic Hand Crank"
        ],
        [
          "Full kit cost",
          "Lichamp 4-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "For Hurricane Kits Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Multiple charging routes, a waterproof body and storable size."
      },
      {
        "label": "In this comparison",
        "text": "The Raynic Hand Crank adds a crank route, and the LuminAID Nova adds IP67 for flooding."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Lichamp 4-Pack for whole-home coverage, or the Raynic Hand Crank for the best backup routes."
      },
      {
        "label": "Save if",
        "text": "Save with the XTAUTO 2-Pack for basic backups at the lowest price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Number of charging routes",
    "explanation": "Solar alone fails in a week of clouds. A second route such as USB, hand crank or AA batteries covers the gap. Look for each route named on the listing."
  },
  {
    "criterion": "Solar charging time",
    "explanation": "Solar lanterns usually need many hours of direct sun for a full charge. A charge that takes a full day is only a backup. Check the hours stated."
  },
  {
    "criterion": "Brightness and runtime",
    "explanation": "Outage lighting needs lasting dim light more than bright light. A lantern that runs 200 hours at 50 lumens beats one that burns out in hours. Compare low-mode runtime."
  },
  {
    "criterion": "Storage and shelf life",
    "explanation": "Lanterns that sit in a drawer lose charge slowly. Pop-up and inflatable types store small. Look for battery protection features."
  },
  {
    "criterion": "Water protection",
    "explanation": "Storms and floods wet lanterns. IP67 survives immersion, while general waterproof claims do not. Look for the IP number."
  },
  {
    "criterion": "Pack size",
    "explanation": "A multi-pack lights several rooms, while a single lantern is easier to carry. Counting rooms before buying avoids paying for lights you never use. Match the count to your home."
  }
];

export const faq = [
  {
    "q": "How long does solar charging take?",
    "a": "It varies by lantern but is often many hours of direct sun. Use USB when you can."
  },
  {
    "q": "What is the biggest mistake with emergency lanterns?",
    "a": "Never testing them. Charge and run each one before storm season."
  },
  {
    "q": "Is a hand crank worth it?",
    "a": "It is a last-resort route, since it yields little power per minute. The Raynic Hand Crank adds it with solar and USB."
  },
  {
    "q": "How do I store them?",
    "a": "Charge to partial, keep dry and cool. Check every few months."
  },
  {
    "q": "Can I leave them in the car?",
    "a": "Heat can harm batteries. Avoid long hot storage."
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
