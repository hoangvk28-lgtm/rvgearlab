export const guideSlug = "best-foldable-solar-panels-for-backpacking";
export const guideTitle = "2 Best Foldable Solar Panels For Backpacking in 2026";
export const metaTitle = "Best Foldable Solar Panels For Backpacking";
export const metaDescription = "Two foldable USB solar panels sized for backpacking, a 28W and a 40W, compared on stated weight, ports, weather rating and how they carry on a pack.";
export const mainKeyword = "best foldable solar panels for backpacking";
export const introParagraphs = [
  "Backpackers need a panel that weighs a pound or two, not the 10 pound suitcase kits that fit car camping. Only two listings here fit the pack-sized USB class, so this guide compares a 28W panel with a stated weight against a 40W panel with a higher water rating.",
  "Both were compared on stated wattage, ports and per-port output, weight and folded size, water rating and the carry features each listing names. Panels this small charge phones, headlamps and power banks, not power stations."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/power-station-campsite.webp";
export const heroImageAlt = "Jeep camp with a tent, solar panels and a portable power station at a pine forest campsite";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-foldable-solar-panels-for-backpacking-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "BigBlue 28W High-Efficiency Solar Panel Charger with Dual USB-C and USB-A",
    "price": "$74.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41jiYtfANJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01EXWCPLC?tag=rvgearlab-amz-20",
    "description": "The BigBlue 28W has two USB-C ports and one USB-A port at 5V and 3A each, with 4.8A combined, and folds to 11 by 6 by 1.4 inches. It weighs 1.5 pounds, lists 25.4 percent cell efficiency with a shadow-free surface and carries an IP44 rating.\n\nIt is the only panel here that states weight and folded size, which backpackers need to plan a pack. Against the FlexSolar, it has fewer watts and a lower water rating, with three ports instead of two.\n\nIt suits hikers and small groups who share one panel across several phones and headlamps. The size fits in a pack's lid pocket.",
    "specs": [
      "28W, 25.4% efficiency",
      "3 USB ports, 4.8A combined",
      "1.5 lb, folds to 11x6x1.4 in"
    ],
    "pros": [
      "Stated 1.5 pound weight",
      "Three ports charge at once",
      "Stated folded size",
      "Shadow-free cell surface"
    ],
    "cons": [
      "IP44 handles splashes only",
      "Priciest panel per watt"
    ],
    "bestFor": "Sharing one panel across several devices",
    "take": "A small, light panel with stated weight and three ports.",
    "catch": "IP44 means keep it out of heavy rain."
  },
  {
    "id": "best-foldable-solar-panels-for-backpacking-2",
    "rank": 2,
    "badge": "Best Output",
    "name": "FlexSolar 40W Foldable Solar Panel Charger",
    "price": "$67.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41gqznkn6rL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09H6GGK55?tag=rvgearlab-amz-20",
    "description": "The FlexSolar 40W has 24 percent monocrystalline cells, two fast outputs (USB-A with QC3.0 and USB-C with PD2.0) rated 18W apiece, plus a 19V DC output. A smart IC chip detects each device, an LED shows charging status, and the panel carries an IP67 rating with 2 carabiners for hanging it from a pack.\n\nIt states per-port wattage clearly and has the higher water rating. Compared with the BigBlue, it adds 12 watts and a DC output.\n\nIt suits backpackers who charge a phone and a power bank together and expect rain. The carabiners let the panel dry on a pack while walking.",
    "specs": [
      "40W, 24% cells, IP67",
      "USB-A QC3.0 and USB-C PD2.0, 18W each",
      "DC output, IC chip, 2 carabiners"
    ],
    "pros": [
      "Two fast ports at 18W each",
      "IP67 weather rating",
      "Smart chip detects devices",
      "Carabiners included"
    ],
    "cons": [
      "No weight is printed",
      "No folded size is printed"
    ],
    "bestFor": "Rainy trips with two devices",
    "take": "A 40W panel with fast ports and an IP67 rating.",
    "catch": "Weight and folded size are not printed, so judge its carry feel by the images."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated weight",
    "description": "Printed pounds and folded size were compared, since both decide pack space."
  },
  {
    "title": "Wattage and ports",
    "description": "Panel watts and per-port output were compared."
  },
  {
    "title": "Weather rating",
    "description": "IP44 and IP67 ratings were compared."
  },
  {
    "title": "Carry features",
    "description": "Carabiners and fold design were noted."
  },
  {
    "title": "Use case",
    "description": "Panels were judged for phones, headlamps and power banks only."
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
    "subheading": "By Trip Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Weight matters, shared charging",
          "BigBlue 28W",
          "1.5 pounds and three ports."
        ],
        [
          "Rain and two fast ports",
          "FlexSolar 40W",
          "IP67 and 18W per port."
        ],
        [
          "Want a stated size",
          "BigBlue 28W",
          "11 by 6 by 1.4 inches."
        ],
        [
          "Want more watts",
          "FlexSolar 40W",
          "40 watts."
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
          "$60 to $70",
          "FlexSolar 40W"
        ],
        [
          "$70 to $80",
          "BigBlue 28W"
        ]
      ]
    }
  },
  {
    "subheading": "28W vs 40W",
    "cards": [
      {
        "label": "28W",
        "text": "Light and compact with a stated weight, charging phones and small gear. The BigBlue 28W is in this group."
      },
      {
        "label": "40W",
        "text": "More watts and a higher water rating, at an unstated weight. The FlexSolar 40W is in this group."
      }
    ],
    "note": "Pick the BigBlue 28W for weight planning and the FlexSolar 40W for wet trips."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lower price per panel",
          "FlexSolar 40W"
        ],
        [
          "Higher price, stated weight",
          "BigBlue 28W"
        ]
      ]
    }
  },
  {
    "subheading": "Multi-Day Hikes With a Power Bank",
    "cards": [
      {
        "label": "Look for",
        "text": "A pack-sized panel with a printed weight, USB ports and a rating that matches the weather."
      },
      {
        "label": "In this comparison",
        "text": "The BigBlue 28W prints weight and folded size, and the FlexSolar 40W adds IP67 and carabiners."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BigBlue 28W for stated weight and size."
      },
      {
        "label": "Save if",
        "text": "Save with the FlexSolar 40W for more watts at a lower price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What backpack panels can do",
    "explanation": "A 28W to 40W panel in full sun can top up a phone in a couple of hours and a small power bank over a day. It cannot run a laptop reliably. Look for the per-port output on the listing."
  },
  {
    "criterion": "Weight versus watts",
    "explanation": "Roughly 1.5 pounds buys 28W, and more watts add ounces. Add up what you actually charge. Look for a printed weight."
  },
  {
    "criterion": "Charge a bank, not a phone",
    "explanation": "Plugging a phone directly into a panel works, but clouds interrupt charging. Charging a power bank in the sun and the phone later from the bank is steadier. Check for pass-through or smart chip wording."
  },
  {
    "criterion": "Water rating",
    "explanation": "IP44 handles splashes, and IP67 handles heavy rain and brief dunks. A panel hanging on a pack in rain needs the higher rating. Look for the IP number."
  },
  {
    "criterion": "Hanging and angling",
    "explanation": "Panels charge best facing the sun at about 45 degrees. A pack-mounted panel changes angle as you walk. Look for loops, carabiners or grommets."
  }
];

export const faq = [
  {
    "q": "Are these panels good enough for backpacking?",
    "a": "For phones, headlamps and power banks, yes. Both the BigBlue 28W and FlexSolar 40W are pack-sized. They do not run laptops."
  },
  {
    "q": "What is the biggest mistake with backpacking panels?",
    "a": "Charging a phone directly in changing light. Cloud interruptions stop and restart charging. Charge a power bank in the sun instead."
  },
  {
    "q": "Is the FlexSolar worth it over the BigBlue?",
    "a": "For rainy trips, yes, because it lists IP67. For weight planning, the BigBlue 28W states its weight."
  },
  {
    "q": "How do I use a panel on the trail?",
    "a": "Clip it to the pack facing the sun, plug in a power bank and check the charging light. Angle it toward the sun when you stop."
  },
  {
    "q": "How do I care for a folding panel?",
    "a": "Fold along the seams, keep it dry and out of heat. Wipe off dirt that shades the cells."
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
