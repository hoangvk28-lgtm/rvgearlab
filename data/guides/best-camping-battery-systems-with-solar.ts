export const guideSlug = "best-camping-battery-systems-with-solar";
export const guideTitle = "3 Best Camping Battery Systems With Solar in 2026";
export const metaTitle = "Best Camping Battery Systems With Solar in 2026";
export const metaDescription = "Best camping battery systems with solar compared on battery chemistry, panel wattage in the box, AC output and recharge time for off-grid weekends.";
export const mainKeyword = "best camping battery systems with solar";
export const introParagraphs = [
  "A true battery system with solar means the battery, inverter and panel arrive together and work out of the box. Three kits fit that brief, from a 237Wh weekend set to a 1070Wh base-camp system. Panel-only kits were left out because they come without a battery.",
  "The kits were compared on battery size and chemistry, panel wattage, AC output and recharge time. Panel size is the main limit, so each entry says how fast the included panel can realistically refill the battery."
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
    "id": "best-camping-battery-systems-with-solar-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Jackery Solar Generator 1000 v2 and 100W Solar Panel",
    "price": "$749.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41uRYFJL8OL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F6YN3XJ4?tag=rvgearlab-20",
    "description": "The Jackery Solar Generator 1000 v2 kit pairs a 1,070Wh LiFePO4 station with a 100W panel. Output reaches 1,500W with a 3,000W surge from three pure sine AC sockets, with two USB-C, one USB-A and a DC car outlet filling out the panel.\n\nAgainst the Jackery 300 kit, it holds more than three times the energy and runs bigger appliances. Compared with the MARBERO, it uses a battery rated for more than 70 percent capacity after 4,000 cycles.\n\nIt suits base camps, van setups and outages where a fridge, a laptop and lights run together. App control and a one hour emergency charge are listed.",
    "specs": [
      "1,070Wh LiFePO4, 1,500W",
      "100W panel included",
      "4,000 cycle LFP, 3 AC ports"
    ],
    "pros": [
      "Most energy of the three kits",
      "1,500W output, 3,000W surge",
      "4,000 cycle LFP battery",
      "One hour emergency charge listed"
    ],
    "cons": [
      "Highest price here",
      "One 100W panel refills slowly"
    ],
    "bestFor": "Base camps and small appliances",
    "take": "The most capable all-in-one kit, with a long-life LFP battery.",
    "catch": "A single 100W panel needs days of sun to refill a big battery."
  },
  {
    "id": "best-camping-battery-systems-with-solar-2",
    "rank": 2,
    "badge": "Best Compact",
    "name": "Jackery Solar Generator 300 and 40W Solar Panel",
    "price": "$319.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41S0DhkhCvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G429L5B4?tag=rvgearlab-20",
    "description": "The Jackery Solar Generator 300 kit pairs a 292Wh LiFePO4 station weighing 7.5 pounds with a 40W Air solar panel. Output is 300W with a 600W surge, through a pair of AC sockets plus 100W PD USB-C, USB-A and a 120W car jack.\n\nCompared with the 1000 v2 kit, it is a fraction of the weight and size, and it still uses the long-life LiFePO4 chemistry. The panel, AC and car chargers are all in the box.\n\nIt suits backpack-in sites, paddle trips and weekend tents with phones, lights and a laptop. The cells keep over 70 percent after 4,000 cycles.",
    "specs": [
      "292Wh LiFePO4, 300W / 600W",
      "40W Air panel included",
      "7.5 lb, 4,000+ cycles"
    ],
    "pros": [
      "Long-life LiFePO4 battery",
      "100W USB-C PD port",
      "Panel, AC and car chargers in the box",
      "Light at 7.5 lb"
    ],
    "cons": [
      "40W panel refills slowly",
      "Small capacity for big loads"
    ],
    "bestFor": "Light weekend camping",
    "take": "The dependable small kit with a long-lasting battery.",
    "catch": "Pair it with a bigger panel for longer trips."
  },
  {
    "id": "best-camping-battery-systems-with-solar-3",
    "rank": 3,
    "badge": "Best Budget Kit",
    "name": "MARBERO 237Wh Solar Generator with Solar Panel Included Portable Power Station 300W Pure Sine Wave with Foldab",
    "price": "$179.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Rfqfec41L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZDX262N?tag=rvgearlab-20",
    "description": "The MARBERO M823 kit pairs a 237Wh, 64,000mAh lithium-ion battery with 300W of rated output and a 375W peak across a pair of pure sine AC sockets. A foldable 60W panel with a 21.5 to 23.5 percent conversion rate comes in the box, along with a smart DC adapter set.\n\nCompared with the Jackery 300 kit, it ships a stronger 60W panel and costs less. It uses lithium-ion rather than LiFePO4, so no cycle rating is listed.\n\nIt suits campers who want a mid-size kit that costs less. The built-in flashlight has an SOS mode.",
    "specs": [
      "237Wh lithium-ion, 300W AC",
      "60W foldable panel included",
      "LED flashlight with SOS"
    ],
    "pros": [
      "60W panel in the box",
      "Pure sine AC outlets",
      "Flashlight with SOS mode",
      "Lower price than the Jackery kits"
    ],
    "cons": [
      "Lithium-ion, no cycle rating listed",
      "Less capacity than the Jackery 1000 v2"
    ],
    "bestFor": "Budget weekend solar",
    "take": "A mid-size kit with a stronger panel for the money.",
    "catch": "A 60W panel takes a full sunny day to fill 237Wh."
  }
];

export const howWeEvaluated = [
  {
    "title": "Battery chemistry",
    "description": "LiFePO4 and lithium-ion cells were compared, with cycle ratings where listed."
  },
  {
    "title": "Panel wattage",
    "description": "Included panel size was weighed against battery size."
  },
  {
    "title": "AC output",
    "description": "Continuous and surge watts were compared."
  },
  {
    "title": "Ports",
    "description": "AC, USB-C PD and car outlets were noted."
  },
  {
    "title": "Weight and portability",
    "description": "Stated weights were compared where given."
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
    "subheading": "By Power Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Fridge, laptop and lights",
          "Jackery Explorer 1000 v2 Kit",
          "1,500W and 1,070Wh."
        ],
        [
          "Phones and a laptop",
          "Jackery Solar Gen 300 Kit",
          "100W USB-C PD port."
        ],
        [
          "Lowest cost",
          "MARBERO M823 60W Kit",
          "Panel included for less."
        ],
        [
          "Long-term use",
          "Jackery Explorer 1000 v2 Kit",
          "4,000 cycle LFP battery."
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
          "$170 to $180",
          "MARBERO M823 60W Kit"
        ],
        [
          "$370 to $380",
          "Jackery Solar Gen 300 Kit"
        ],
        [
          "$740 to $750",
          "Jackery Explorer 1000 v2 Kit"
        ]
      ]
    }
  },
  {
    "subheading": "LiFePO4 vs Lithium-Ion",
    "cards": [
      {
        "label": "LiFePO4",
        "text": "LiFePO4 cells last for thousands of cycles. The Jackery Explorer 1000 v2 Kit and Jackery Solar Gen 300 Kit use LiFePO4."
      },
      {
        "label": "Lithium-ion",
        "text": "Lithium-ion is lighter and common in budget kits. The MARBERO M823 60W Kit uses lithium-ion."
      }
    ],
    "note": "Most buyers should pick the Jackery Solar Gen 300 Kit or Jackery Explorer 1000 v2 Kit unless budget rules."
  },
  {
    "subheading": "By Panel Size",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Biggest panel",
          "Jackery Explorer 1000 v2 Kit"
        ],
        [
          "Foldable 60W panel",
          "MARBERO M823 60W Kit"
        ],
        [
          "Light 40W panel",
          "Jackery Solar Gen 300 Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Off-Grid Weekends",
    "cards": [
      {
        "label": "Look for",
        "text": "A panel in the box, AC and USB-C outputs and a battery sized to your devices."
      },
      {
        "label": "In this comparison",
        "text": "The Jackery Solar Gen 300 Kit and MARBERO M823 60W Kit both ship with panels."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Jackery Explorer 1000 v2 Kit for a fridge and a laptop together."
      },
      {
        "label": "Save if",
        "text": "Save with the MARBERO M823 60W Kit for a weekend of small devices."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Panel versus battery",
    "explanation": "A 60W panel fills 237Wh over roughly a full sunny day, and a 100W panel needs much longer for 1,070Wh. Divide watt-hours by real panel output for a refill estimate. Add panels if the station accepts more."
  },
  {
    "criterion": "Chemistry",
    "explanation": "LiFePO4 batteries last for thousands of cycles and tolerate heat well. Lithium-ion packs are lighter but usually have fewer cycles. Check the listing for a cycle rating."
  },
  {
    "criterion": "Output and surge",
    "explanation": "Continuous watts set what you can run, and surge covers start-up spikes. Match both to the heaviest appliance. Check its label."
  },
  {
    "criterion": "Charging temperature",
    "explanation": "Lithium batteries should not be charged below freezing. Keep the station warm in cold weather. Check the manual for limits."
  },
  {
    "criterion": "Ports you will use",
    "explanation": "Phones and laptops use USB-C PD, and small appliances use AC. A 12V car port suits fridges. Count your devices."
  }
];

export const faq = [
  {
    "q": "Is a solar generator the same as a battery system?",
    "a": "They are close. A solar generator bundles the battery, inverter and charge controller. The Jackery Solar Gen 300 Kit is one example."
  },
  {
    "q": "What is the common mistake?",
    "a": "Expecting a small panel to refill a large battery quickly. Check panel and battery size. Plan on a full day."
  },
  {
    "q": "Is the Jackery 1000 v2 worth it over the 300?",
    "a": "For appliances, yes. The Jackery Explorer 1000 v2 Kit stores far more. The Jackery Solar Gen 300 Kit is lighter."
  },
  {
    "q": "How do I set up the panel?",
    "a": "Face it toward the sun and angle it. Plug it into the solar port. Check the display for input watts."
  },
  {
    "q": "How do I store the station?",
    "a": "Keep it partly charged, cool and dry. Avoid freezing and hot cars. Top it up every few months."
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
