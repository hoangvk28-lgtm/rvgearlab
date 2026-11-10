export const guideSlug = "best-lantern";
export const guideTitle = "5 Best Lantern in 2026";
export const metaTitle = "Best Lantern in 2026";
export const metaDescription = "Camping lanterns compared: rechargeable, battery and solar models from a 135-LED 5000mAh lantern to 4-packs and a pocket pull-up light.";
export const mainKeyword = "best lantern";
export const introParagraphs = [
  "A lantern lights the whole table instead of a single spot, which makes cooking, card games and tent time more comfortable. Power source, color modes and how small it folds decide which one fits your trips.",
  "At RV Gear Lab, we compared these five lanterns by battery type, light modes, claimed runtime and packability. They cover a rechargeable workhorse, a collapsible solar light, a multi-pack and a patio-style solar set."
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
    "id": "best-lantern-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Glocusent LED Rechargeable Camping Lantern",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41k+wuj4GKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FL22QSGP?tag=rvgearlab-amz-20",
    "description": "Glocusent is a rechargeable lantern with 135 LEDs that throw a full 360 degree beam. A built-in 5000mAh battery is listed for up to 200 hours of light, and it has three color modes for different situations.\n\nIt carries the biggest battery and the longest listed runtime of the group, which lets it outlast the AAA and D-cell models on a long weekend. Three color modes let you switch from bright task light to a softer evening glow.\n\nCampers who want one dependable lantern for a week of trips will like the runtime and the modes. It works as a tent light and a table light in one.",
    "specs": [
      "135 LEDs, 360 degree beam",
      "5000mAh, up to 200 hours",
      "3 color modes"
    ],
    "pros": [
      "Up to 200 hours listed runtime",
      "Three color modes",
      "Big 5000mAh battery",
      "Lights a whole campsite"
    ],
    "cons": [
      "Needs a USB recharge",
      "Heavier than pocket lanterns"
    ],
    "bestFor": "Week-long trips",
    "take": "A dependable rechargeable lantern for most campers.",
    "catch": "Charge it fully before leaving home."
  },
  {
    "id": "best-lantern-2",
    "rank": 2,
    "badge": "Best Packable Solar",
    "name": "Collapsible Portable LED Camping Lantern XTAUTO Lightweight Waterproof Solar USB Rechargeable LED Flashlight S",
    "price": "$25.69",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51L3CGPQubL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0915B6X66?tag=rvgearlab-amz-20",
    "description": "XTAUTO is a collapsible lantern that charges by solar or USB and uses 6+1 high-intensity LED chips. It collapses to about the size of a phone, with a folding handle.\n\nIt packs smaller than any lantern in this group, which makes it the one for a daypack or a kayak hatch. The ABS body is described as waterproof and heat resistant.\n\nHikers and paddlers who want a small light will like how little room it takes. It clips to a pack strap while you walk.",
    "specs": [
      "6+1 LED chips, 360 degree",
      "Collapses phone-size",
      "Solar and USB charging"
    ],
    "pros": [
      "Folds to phone size",
      "Solar and USB charging",
      "Waterproof ABS body",
      "Folding handle"
    ],
    "cons": [
      "Dimmer than big lanterns",
      "Solar charge is slow"
    ],
    "bestFor": "Hiking and paddling",
    "take": "The smallest lantern in the group.",
    "catch": "Do not count on solar alone."
  },
  {
    "id": "best-lantern-3",
    "rank": 3,
    "badge": "Best Multi-Pack",
    "name": "Etekcity LED Camping Lanterns",
    "price": "$23.37",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/517Fd8eCAAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01C5QSENQ?tag=rvgearlab-amz-20",
    "description": "Etekcity gives you four collapsible lanterns with batteries included, each with 30 LED bulbs and up to 154 lumens in a 360 degree glow. Each folds to roughly smartphone size and can be dimmed.\n\nFour lanterns for the price of one big rechargeable cover every tent and the table, and batteries come in the box. It lights up by simply expanding the lantern.\n\nFamilies and groups who want light everywhere will like the pack. Hand one to each kid and everyone has a light.",
    "specs": [
      "Four lanterns, batteries included",
      "30 LEDs, up to 154 lumens",
      "Dimmable, phone-size fold"
    ],
    "pros": [
      "Four lanterns in the box",
      "Batteries included",
      "Dimmable brightness",
      "Collapses to phone size"
    ],
    "cons": [
      "Lower brightness each",
      "Needs batteries later"
    ],
    "bestFor": "Families and groups",
    "take": "The best way to light every tent.",
    "catch": "Each lantern is dimmer than a single big one."
  },
  {
    "id": "best-lantern-4",
    "rank": 4,
    "badge": "Best Warm Solar Set",
    "name": "KOOPER 4 Pack Solar Lanterns Outdoor Waterproof",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51au7WPaH4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G5ZFGN7F?tag=rvgearlab-amz-20",
    "description": "KOOPER includes four hanging solar lanterns with warm 3000K LED light and an automatic on and off. Each stands 5.9 inches tall with an upgraded solar panel, and the shadows play across a patio or deck.\n\nIt is the best looking of the group and charges itself by day, which no battery lantern can do. The warm light feels calmer than cool white.\n\nCampsite decorators and backyard campers will like the glow. Hang them around a picnic table for a soft glow.",
    "specs": [
      "Four solar lanterns, 3000K warm",
      "Auto on and off",
      "5.9 inch tall each"
    ],
    "pros": [
      "Charges itself in sunlight",
      "Warm 3000K glow",
      "Auto on and off",
      "Four in the pack"
    ],
    "cons": [
      "Too soft for tasks",
      "Needs sunny days"
    ],
    "bestFor": "Ambience",
    "take": "A decorative set for relaxed evenings.",
    "catch": "Not bright enough for cooking."
  },
  {
    "id": "best-lantern-5",
    "rank": 5,
    "badge": "Best Budget Light",
    "name": "MalloMe Camping Lights LED Lantern Flashlights",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fuhgVhgoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGWHJ8XJ?tag=rvgearlab-amz-20",
    "description": "MalloMe is a pocket-sized lantern using COB LED technology for up to 300 lumens of 360 degree light. You pull it up to turn on and push it down to switch off, with no buttons.\n\nIt is the cheapest light here and the easiest to use in the dark. It is water resistant and collapses flat for storage.\n\nKids and casual campers will like how simple it is. It fits in a jacket pocket.",
    "specs": [
      "Up to 300 lumens, COB LED",
      "Pull up on, push down off",
      "Water-resistant body"
    ],
    "pros": [
      "No buttons to find",
      "Pocket-sized design",
      "Lowest price here",
      "Collapses flat"
    ],
    "cons": [
      "Single brightness",
      "Needs batteries"
    ],
    "bestFor": "Kids and tents",
    "take": "The cheapest, easiest lantern.",
    "catch": "Battery powered, with no dimming."
  }
];

export const howWeEvaluated = [
  {
    "title": "Power type",
    "description": "Compared rechargeable, battery and solar lanterns."
  },
  {
    "title": "Brightness and modes",
    "description": "Looked at lumens, LED counts and color modes."
  },
  {
    "title": "Runtime",
    "description": "Considered listed battery life."
  },
  {
    "title": "Portability",
    "description": "Compared collapsible designs."
  },
  {
    "title": "Price",
    "description": "Weighed cost per light."
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
          "Week-long trips",
          "Glocusent 5000mAh",
          "200 hours listed."
        ],
        [
          "Daypack or kayak",
          "XTAUTO Collapsible Solar",
          "Phone-size."
        ],
        [
          "Groups",
          "Etekcity 4-Pack",
          "Four lanterns."
        ],
        [
          "Ambience",
          "KOOPER Solar 4-Pack",
          "Warm glow."
        ],
        [
          "Budget",
          "MalloMe Pocket Lantern",
          "Pull-up switch."
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
          "$0 to $30",
          "MalloMe Pocket Lantern or Etekcity 4-Pack"
        ],
        [
          "$20 to $30",
          "XTAUTO Collapsible Solar or Glocusent 5000mAh"
        ],
        [
          "$20 to $30",
          "KOOPER Solar 4-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Rechargeable vs Battery",
    "cards": [
      {
        "label": "Rechargeable",
        "text": "Saves on batteries over time. Glocusent 5000mAh and XTAUTO Collapsible Solar recharge."
      },
      {
        "label": "Battery",
        "text": "Simple and easy to refresh. Etekcity 4-Pack and MalloMe Pocket Lantern use batteries."
      }
    ],
    "note": "Most campers should default to Glocusent 5000mAh."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "If you want",
        "Recommended pick"
      ],
      "rows": [
        [
          "Warm light",
          "KOOPER Solar 4-Pack"
        ],
        [
          "Lowest price",
          "MalloMe Pocket Lantern"
        ],
        [
          "Longest runtime",
          "Glocusent 5000mAh"
        ]
      ]
    }
  },
  {
    "subheading": "For Family Tents Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Several dimmable, collapsible lanterns."
      },
      {
        "label": "In this comparison",
        "text": "Etekcity 4-Pack gives four dimmable lanterns."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Glocusent 5000mAh for runtime."
      },
      {
        "label": "Save if",
        "text": "Save with MalloMe Pocket Lantern."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Power type",
    "explanation": "Rechargeable lanterns save on batteries, battery lanterns are easy to refill in the field, and solar lanterns recharge themselves slowly. Pick by trip length and access to a charger. Check the power type and charging methods."
  },
  {
    "criterion": "Brightness and light color",
    "explanation": "A lantern of about 150 lumens lights a small table, and 300 lumens or more lights a campsite. Warm white feels cozier, and cool white is better for tasks. Check the lumens and color modes on the listing."
  },
  {
    "criterion": "Battery life",
    "explanation": "Listed hours are best-case numbers at the lowest setting. A 5000mAh battery that lists 200 hours will run far fewer hours on high. Look at runtime for the brightness you will use."
  },
  {
    "criterion": "Size and fold",
    "explanation": "Collapsible lanterns pack to phone size, while rigid ones need a bag. Handles and hooks let you hang them in a tent. Check the folded dimensions."
  },
  {
    "criterion": "Weather protection",
    "explanation": "Water-resistant bodies handle splashes and mist. Heavy rain needs a higher rating. Check the water claim on the listing."
  }
];

export const faq = [
  {
    "q": "What is the best lantern for camping?",
    "a": "A rechargeable lantern like Glocusent 5000mAh suits most campers because it lasts days on a charge. Battery lanterns are good spares. Pick by trip length."
  },
  {
    "q": "Are solar lanterns good for camping?",
    "a": "They are fine for ambience and emergencies, but slow to charge. XTAUTO Collapsible Solar also charges by USB. Do not rely on solar alone."
  },
  {
    "q": "How many lumens do I need?",
    "a": "About 150 lumens lights a table, and 300 or more lights a campsite. Dimmable models are more comfortable. Check the listing."
  },
  {
    "q": "How do I hang a lantern in a tent?",
    "a": "Use the built-in hook or handle on a tent loop. Keep it away from fabric that could melt with heat. LED lanterns stay cool."
  },
  {
    "q": "How do I store a lantern?",
    "a": "Remove batteries from battery lanterns and charge rechargeable ones to about half. Store in a dry place. Wipe dust off before packing."
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
