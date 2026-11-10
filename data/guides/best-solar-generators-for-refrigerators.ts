export const guideSlug = "best-solar-generators-for-refrigerators";
export const guideTitle = "2 Best Solar Generators For Refrigerators in 2026";
export const metaTitle = "Best Solar Generators For Refrigerators in 2026";
export const metaDescription = "Best solar generators for refrigerators compared on watt-hours, surge output, standby draw and panels in the box for campers running a compact fridge.";
export const mainKeyword = "best solar generators for refrigerators";
export const introParagraphs = [
  "A fridge is a steady, quiet load, so the battery capacity and low standby draw of a solar generator matter more than raw output. Few kits list fridge use, so this guide covers the two BLUETTI kits that print the specs a fridge buyer needs.",
  "Both were compared on stated watt-hours, continuous and surge watts, panel wattage and recharge time. Fridge runtime is not promised by either listing, so the guide frames the math rather than a number."
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
    "id": "best-solar-generators-for-refrigerators-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "BLUETTI Elite 200 V2 Solar Generator & 2x200W Solar Panel Included 2073.6Wh",
    "price": "$1499.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Q6JjGYa7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FSJM6NZC?tag=rvgearlab-amz-20",
    "description": "The BLUETTI Elite 200 V2 kit pairs a 2,073.6Wh station with two 200W panels and 2,600W of continuous AC output. The listing gives a 10W standby draw, a 6,000 cycle LiFePO4 battery and a full recharge in 5.5 hours from 400W of panels.\n\nAgainst the Elite 100 V2, it holds about twice the watt-hours and brings a second panel. That extra capacity matters most for a fridge, since the compressor cycles on and off for many hours.\n\nThis one is for campers and RV owners keeping a fridge running through a cloudy day and recharge by panel. The low standby draw keeps idle losses small.",
    "specs": [
      "2,073.6Wh, 2,600W continuous",
      "2 x 200W panels included",
      "6,000+ cycle LiFePO4"
    ],
    "pros": [
      "Panels included in the box",
      "About twice the Elite 100 V2 energy",
      "Very long 6,000 cycle rating",
      "10W standby draw"
    ],
    "cons": [
      "No 240V output listed",
      "Higher price than the Elite 100 V2"
    ],
    "bestFor": "Running a fridge across a day",
    "take": "More energy and two panels in the box make it the safer fridge pick.",
    "catch": "The listing names no 240V output, so a 240V fridge will not run from it."
  },
  {
    "id": "best-solar-generators-for-refrigerators-2",
    "rank": 2,
    "badge": "Best Value",
    "name": "BLUETTI Solar Generator Elite 100 V2 with 200W Solar Panel Included",
    "price": "$699.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Ts7U2lIHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FD3V9LF9?tag=rvgearlab-amz-20",
    "description": "This BLUETTI Elite 100 V2 bundle gives you a 1,024Wh station, one 200W panel and 1,800W of rated AC output. Power Lifting mode stretches that to 2,700W, solar takes it from 0 to 80 percent in 4 hours, and up to 1,000W of panels can plug in later.\n\nCompared with the Elite 200 V2, it carries half the watt-hours at a much lower price. Its 1,800W output and 2,700W surge handle the start-up kick of a fridge compressor.\n\nIt suits a small fridge or cooler at a weekend camp where one overnight is the goal. Buyers can add panels later using the high solar input.",
    "specs": [
      "1,024Wh, 1,800W rated, 2,700W",
      "200W panel, 4 hour 80% solar",
      "1,000W max solar input"
    ],
    "pros": [
      "Lower price than the Elite 200 V2",
      "Surge mode reaches 2,700W",
      "Takes up to 1,000W of solar",
      "Quick 70 minute wall charge"
    ],
    "cons": [
      "About half the stored energy",
      "Single panel fills slowly"
    ],
    "bestFor": "Small fridge on weekend trips",
    "take": "The cheaper kit with enough surge for a compressor and room to add panels.",
    "catch": "Half the energy means a fridge drains it in far less time."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stored energy",
    "description": "Stated watt-hours were compared, since a fridge runs for hours and needs plenty of stored energy."
  },
  {
    "title": "Surge and continuous watts",
    "description": "Rated and surge output were noted, because a compressor draws a short spike at start."
  },
  {
    "title": "Standby draw",
    "description": "Where a listing prints idle watts, it was weighed, since a fridge keeps the inverter on all night."
  },
  {
    "title": "Solar input",
    "description": "Panel wattage in the box and maximum input were compared for realistic daily recharge."
  },
  {
    "title": "Battery chemistry",
    "description": "LiFePO4 cycle ratings were noted for long-term use."
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
    "subheading": "By Fridge Setup",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Full-size or 120V fridge, long stay",
          "BLUETTI Elite 200 V2",
          "2,073.6Wh and two panels."
        ],
        [
          "Small 120V fridge, weekend",
          "BLUETTI Elite 100 V2 Kit",
          "1,024Wh and 2,700W surge."
        ],
        [
          "Cloudy-day backup",
          "BLUETTI Elite 200 V2",
          "Twice the stored energy."
        ],
        [
          "Plan to add more panels",
          "BLUETTI Elite 100 V2 Kit",
          "Up to 1,000W solar input listed."
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
          "$690 to $700",
          "BLUETTI Elite 100 V2 Kit"
        ],
        [
          "$1490 to $1500",
          "BLUETTI Elite 200 V2"
        ]
      ]
    }
  },
  {
    "subheading": "More Energy vs Lower Cost",
    "cards": [
      {
        "label": "More energy",
        "text": "A larger battery lets a fridge cycle through a cloudy day and a night. The BLUETTI Elite 200 V2 stores about double."
      },
      {
        "label": "Lower cost",
        "text": "A smaller station fits a modest cooler or a short trip. The BLUETTI Elite 100 V2 Kit is the cheaper kit."
      }
    ],
    "note": "Choose the BLUETTI Elite 200 V2 for a full-size fridge and the BLUETTI Elite 100 V2 Kit for a small one."
  },
  {
    "subheading": "By Recharge Plan",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Panel-only recharge",
          "BLUETTI Elite 200 V2"
        ],
        [
          "Wall and quick top-up",
          "BLUETTI Elite 100 V2 Kit"
        ],
        [
          "Add panels later",
          "BLUETTI Elite 100 V2 Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Camp Fridges Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Watt-hours, surge rating, standby draw and an AC outlet matching your fridge."
      },
      {
        "label": "In this comparison",
        "text": "The BLUETTI Elite 200 V2 lists 2,073.6Wh and a 10W standby draw, and the BLUETTI Elite 100 V2 Kit lists 2,700W surge for compressor starts."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the BLUETTI Elite 200 V2 if the fridge must run all day and night with panels in the box."
      },
      {
        "label": "Save if",
        "text": "Save with the BLUETTI Elite 100 V2 Kit if the fridge is small and the trip is a weekend."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watt-hours versus fridge draw",
    "explanation": "Divide a station's watt-hours by the fridge's average draw to estimate hours, then subtract losses. A fridge that averages 50W would use roughly 1,200Wh a day, a figure that varies with temperature and door openings. Check your fridge's rated watts or its energy label before choosing."
  },
  {
    "criterion": "Surge watts at compressor start",
    "explanation": "A compressor draws a surge several times its running watts when it starts. The inverter must handle that spike, so compare the listed surge output with your fridge's start rating. The Elite 100 V2 lists 2,700W surge and the Elite 200 V2 lists 2,600W continuous."
  },
  {
    "criterion": "Idle draw of the inverter",
    "explanation": "Even with no load, the inverter uses power, so a low idle figure helps a fridge run longer overnight. The Elite 200 V2 lists 10W standby. Look for that figure on the listing."
  },
  {
    "criterion": "Solar recharge",
    "explanation": "A 200W panel makes much less than its label in poor sun, and a fridge draws power all night. Plan on more panel than the minimum if you want to recharge and run the fridge at once. Check the maximum solar input limit before adding panels."
  },
  {
    "criterion": "Voltage and outlets",
    "explanation": "Most US camp fridges are 120V, 12V or 24V. Make sure the station offers the outlet type you need. The listings here name AC plus DC ports, but neither names 240V."
  }
];

export const faq = [
  {
    "q": "Can a solar generator run a camping fridge?",
    "a": "It can if the output covers the start surge and the capacity covers the hours. Neither listing promises fridge runtime, so check your fridge's rated watts first. A compressor fridge is steadier than a heater."
  },
  {
    "q": "What is the common mistake with fridge power?",
    "a": "Sizing only by running watts. The start surge can be several times higher, so match the station's surge rating to your fridge. Also allow for losses and warm weather."
  },
  {
    "q": "Is the Elite 200 V2 worth it over the Elite 100 V2?",
    "a": "For a full-size fridge or a long stay, yes. The BLUETTI Elite 200 V2 stores about double the energy and includes two panels. For a small cooler, the BLUETTI Elite 100 V2 Kit is enough."
  },
  {
    "q": "How do I set a fridge up on a power station?",
    "a": "Place the station in shade and connect the panels in sun. Plug the fridge into the AC outlet and let it reach temperature before loading it. Watch the display for state of charge."
  },
  {
    "q": "How do I keep a fridge efficient off-grid?",
    "a": "Keep the fridge pre-chilled, shaded and full, and open it less often. A cold, full fridge cycles less than a warm empty one. Clean the vents before each trip."
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
