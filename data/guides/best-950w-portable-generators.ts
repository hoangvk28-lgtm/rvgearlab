export const guideSlug = "best-950w-portable-generators";
export const guideTitle = "2 Best 950w Portable Generators in 2026";
export const metaTitle = "Best 950w Portable Generators in 2026";
export const metaDescription = "Two compact gas generators for 950 watt camp loads: a unit that lists 950 rated watts and a 900 rated watt model as the nearest fit.";
export const mainKeyword = "best 950w portable generators";
export const introParagraphs = [
  "Few small generators state a 950 watt rating, and only one listing here does. The second pick is a 900 rated watt unit that sits 50 watts below, shown as the nearest fit so buyers can compare a stated 950 with a tried-and-true 900.",
  "Both are 71cc two-stroke units that burn mixed fuel, so they suit lights, fans and chargers for a weekend rather than a camper's air conditioner. They were compared on rated watts, weight, tank, runtime, mix ratio and outlets."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/furniture-chairs-by-tent.webp";
export const heroImageAlt = "Two folding camping chairs beside a tent in a redwood forest";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-950w-portable-generators-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "1200W Portable Gas Powered Generator",
    "price": "$158.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41yywnUUgpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HHDDLJ9R?tag=rvgearlab-amz-20",
    "description": "The YolloBike is the one listing here with a stated 950 rated watt figure, along with 1200 watts of surge from a 71cc two-stroke engine. It weighs 35.3 pounds and has a 1 gallon tank with a run time of up to 8 hours, a 120V outlet, a 12V DC output rated 8.3A and a 50:1 fuel-oil mix.\n\nNext to the PowerSmart, it adds 50 rated watts and a longer claimed run time. The recoil start and ergonomic handle keep operation simple.\n\nIt suits campers who want the most headroom from a small generator for lights, a fan, a slow cooker and chargers. A battery can be topped up through the 12V output.",
    "specs": [
      "950 rated, 1200 surge watts",
      "35.3 lbs, 1 gal, up to 8 hours",
      "12V 8.3A DC, 50:1 mix"
    ],
    "pros": [
      "Stated 950 rated watts",
      "Longest runtime claim",
      "12V DC output at 8.3A",
      "Lightweight at 35.3 pounds"
    ],
    "cons": [
      "A second bullet lists different watt figures",
      "Priciest of the two"
    ],
    "bestFor": "The strongest small two-stroke",
    "take": "The only listing that states 950 rated watts.",
    "catch": "Another bullet lists 1500 starting and 1200 running watts, so ask which figure is right."
  },
  {
    "id": "best-950w-portable-generators-2",
    "rank": 2,
    "badge": "Best Nearest Fit",
    "name": "PowerSmart 1200W Portable Generator",
    "price": "$139.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41wDESe0neL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GF23ZRZD?tag=rvgearlab-amz-20",
    "description": "The PowerSmart PS50 lists 1200W surge and 900W rated from a 71cc two-stroke engine, with a 1.1 gallon tank for about 5 hours at 50 percent load. It weighs 34 pounds, measures 16 by 14 by 13.8 inches, and uses a 50:1 gas-to-oil mix of 87 octane or better.\n\nIt sits 50 rated watts below the YolloBike and costs less, weighing about 1.3 pounds less. The splash lubrication and forced air cooling are listed.\n\nIt suits campers whose loads stay under 900 watts and who want a compact, lighter generator. The F5TC spark plug and recoil start keep upkeep simple.",
    "specs": [
      "1200 surge, 900 rated watts",
      "34 lbs, 16x14x13.8 in",
      "1.1 gal, 5 h at 50%, 50:1 mix"
    ],
    "pros": [
      "Lighter at 34 pounds",
      "Compact footprint",
      "Lower price than the YolloBike",
      "Clear 50:1 mix ratio"
    ],
    "cons": [
      "50 fewer rated watts than the YolloBike",
      "Only about 5 hours at half load"
    ],
    "bestFor": "Compact weekend power under 900 watts",
    "take": "A lighter, cheaper 900 rated watt alternative.",
    "catch": "Mixed fuel and a 5 hour half-load runtime suit short trips."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated rating",
    "description": "Rated watts were compared against the 950 watt target."
  },
  {
    "title": "Weight and size",
    "description": "Printed pounds and dimensions were compared."
  },
  {
    "title": "Tank and runtime",
    "description": "Tank size and runtime claims were compared."
  },
  {
    "title": "Fuel mix",
    "description": "Gas-to-oil ratios were noted."
  },
  {
    "title": "Listing consistency",
    "description": "Contradictory watt figures were flagged."
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
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Most headroom and runtime",
          "YolloBike 950W",
          "950 rated watts, up to 8 hours."
        ],
        [
          "Lighter and cheaper",
          "PowerSmart PS50 900W",
          "34 pounds and a lower price."
        ],
        [
          "Overnight lights and chargers",
          "YolloBike 950W",
          "Longest runtime claim."
        ],
        [
          "Compact trunk storage",
          "PowerSmart PS50 900W",
          "Stated 16 by 14 by 13.8 inches."
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
          "$130 to $140",
          "PowerSmart PS50 900W"
        ],
        [
          "$150 to $160",
          "YolloBike 950W"
        ]
      ]
    }
  },
  {
    "subheading": "950 Rated vs 900 Rated",
    "cards": [
      {
        "label": "950 rated",
        "text": "More headroom and a longer runtime claim at a higher price. The YolloBike 950W is in this group."
      },
      {
        "label": "900 rated",
        "text": "Lighter and cheaper for loads under 900 watts. The PowerSmart PS50 900W is in this group."
      }
    ],
    "note": "Pick the YolloBike 950W if you need the headroom and the PowerSmart PS50 900W if you do not."
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
          "Lower price",
          "PowerSmart PS50 900W"
        ],
        [
          "More watts",
          "YolloBike 950W"
        ]
      ]
    }
  },
  {
    "subheading": "Weekend Trips With Lights and Chargers",
    "cards": [
      {
        "label": "Look for",
        "text": "A rated figure above your loads and a light, simple engine."
      },
      {
        "label": "In this comparison",
        "text": "The YolloBike 950W lists 950 rated watts, and the PowerSmart PS50 900W is lighter."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the YolloBike 950W for 950 rated watts and the longest claim."
      },
      {
        "label": "Save if",
        "text": "Save with the PowerSmart PS50 900W if your loads stay below 900 watts."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What 950 watts can run",
    "explanation": "950 watts covers lights, a fan, a phone and laptop charger and a small slow cooker, but not a microwave or a camper's air conditioner. Add your loads before you buy. Look for the rated watts."
  },
  {
    "criterion": "Rated versus starting watts",
    "explanation": "Starting watts last a moment, and rated watts are the continuous limit. A listing with two sets of figures can confuse this. Look for the lowest consistent rated figure."
  },
  {
    "criterion": "Mixed fuel",
    "explanation": "Two-stroke engines need oil in the gasoline at the stated ratio. Use fresh fuel and the right mix, and do not use ethanol-heavy blends for long storage. Check the ratio in the manual."
  },
  {
    "criterion": "Carbon monoxide",
    "explanation": "Neither listing mentions a CO sensor. Run the unit outdoors at least 20 feet from tents and vents, exhaust pointing away. Never run a generator inside a tent."
  },
  {
    "criterion": "Clean power",
    "explanation": "Basic generators produce less clean power than inverter models. Use a surge protector with laptops and Medical devices should not run on a basic generator unless the device maker approves it. Look for inverter wording on the listing."
  }
];

export const faq = [
  {
    "q": "Does any listing here state 950 rated watts?",
    "a": "Yes, the YolloBike 950W. The PowerSmart PS50 900W lists 900 and is shown as the nearest fit."
  },
  {
    "q": "What is the biggest mistake with small generators?",
    "a": "Overloading them. Add up the watts of everything you plug in and stay below the rated figure."
  },
  {
    "q": "Is the YolloBike worth it over the PowerSmart?",
    "a": "If you need 950 rated watts or longer runtime, yes. The PowerSmart PS50 900W is lighter and cheaper."
  },
  {
    "q": "How do I mix fuel?",
    "a": "Measure the oil for 50:1, add it to fresh gasoline and shake. Fill the tank outdoors with the engine off."
  },
  {
    "q": "Can I run a fridge on it?",
    "a": "A small fridge may start within the rated figure, but check its starting watts first. Run it outdoors with a surge protector."
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
