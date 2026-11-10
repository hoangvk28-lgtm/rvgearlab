export const guideSlug = "best-solar-generators-for-rv-camping";
export const guideTitle = "2 Best Solar Generators For RV Camping in 2026";
export const metaTitle = "Best Solar Generators For RV Camping in 2026";
export const metaDescription = "Best solar generators for RV camping compared on watt-hours, AC output, included panels and weight for rigs without shore power.";
export const mainKeyword = "best solar generators for rv camping";
export const introParagraphs = [
  "A solar generator pairs a battery with panels so an RV or camper can run lights, a fridge and electronics without a campground hookup. Watt-hours decide how long it runs, and the watt rating decides what you can plug in at once.",
  "Only two listings here clearly combine a power station with solar panels at different sizes, so the shortlist is a full-size Jackery kit and a small ZeroKor starter set. They were compared on watt-hours, AC output, panel wattage and ports."
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
    "id": "best-solar-generators-for-rv-camping-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Jackery Solar Generator 1000 v2 and 2x200W Panels",
    "price": "$1189.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31aRjvEft0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GLNK2BPD?tag=rvgearlab-20",
    "description": "The Jackery Solar Generator 1000 v2 pairs a 1070Wh LiFePO4 power station with two 200W panels. It supplies 1500W AC with a 3000W surge, three pure sine wave outlets, two USB-C ports including 100W PD, one USB-A and a car port, in a unit of about 23.8 lb.\n\nCompared with the ZeroKor kit it offers more than three times the capacity and 400W of solar input. The listing names a 0 to 80 percent solar charge in about 3 hours.\n\nIt suits RVers who run a fridge, lights and a laptop through a weekend off grid. The LiFePO4 cells are rated for over 70 percent capacity after 4000 charge cycles.",
    "specs": [
      "1070Wh, 1500W AC output",
      "Two 200W solar panels",
      "LiFePO4, 4000-cycle rating"
    ],
    "pros": [
      "Enough output for a fridge and electric pot",
      "Two panels give 400W solar charging",
      "App with quiet 30dB overnight charging",
      "Lightweight for its capacity"
    ],
    "cons": [
      "Costs far more than a starter kit",
      "1070Wh covers a weekend, not a week"
    ],
    "bestFor": "Weekend RV camps",
    "take": "A full-featured solar kit with enough capacity and output for a weekend on batteries.",
    "catch": "A big AC load such as an air conditioner will drain it quickly, so plan for small appliances."
  },
  {
    "id": "best-solar-generators-for-rv-camping-2",
    "rank": 2,
    "badge": "Best Budget",
    "name": "Portable Solar Generator with Panel",
    "price": "$199.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51OSwyfZg2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F8J39B45?tag=rvgearlab-20",
    "description": "The ZeroKor kit includes a 300W power station with a 280Wh lithium-ion battery, a 40W foldable solar panel and a 100W power pack. The main unit offers two 110V pure sine wave AC outlets, a DC port, three USB ports and a built-in SOS flashlight with short circuit and overload protection.\n\nIt is far smaller than the Jackery, and it adds a second 100W power bank in the same box. The price is less than a fifth of the Jackery kit.\n\nIt suits tent campers and van travelers who need to charge phones, tablets and laptops. It is not a fit for fridges or heating appliances.",
    "specs": [
      "300W station, 280Wh battery",
      "40W panel, 100W pack included",
      "Pure sine wave AC outlets"
    ],
    "pros": [
      "Includes a second 100W power pack",
      "Pure sine wave outlets for electronics",
      "Built-in SOS flashlight",
      "Low price for a full kit"
    ],
    "cons": [
      "280Wh is small for RV loads",
      "40W panel recharges slowly"
    ],
    "bestFor": "Phones and laptops at the campsite",
    "take": "A low-cost starter kit that keeps small electronics charged away from hookups.",
    "catch": "The 40W panel will take a long sunny day to refill even part of the battery."
  }
];

export const howWeEvaluated = [
  {
    "title": "Watt-hours",
    "description": "Stated battery capacity from 280Wh to 1070Wh was compared."
  },
  {
    "title": "AC output",
    "description": "Continuous and surge watts were read against common RV loads."
  },
  {
    "title": "Solar included",
    "description": "Panel wattage and charge times were compared."
  },
  {
    "title": "Ports",
    "description": "AC, USB-C PD and car ports were counted."
  },
  {
    "title": "Weight and chemistry",
    "description": "Weight and battery chemistry were noted."
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
    "subheading": "By Camp Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Weekend RV with fridge and lights",
          "Jackery Explorer 1000 v2 Kit",
          "1070Wh and 1500W AC output."
        ],
        [
          "Tent camp with phones and laptop",
          "ZeroKor 300W Solar Kit",
          "280Wh with a 40W panel."
        ],
        [
          "Electric pot or small appliances",
          "Jackery Explorer 1000 v2 Kit",
          "3000W surge handles startup."
        ],
        [
          "First solar kit on a budget",
          "ZeroKor 300W Solar Kit",
          "Includes panel and power pack."
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
          "$190 to $200",
          "ZeroKor 300W Solar Kit"
        ],
        [
          "$1180 to $1190",
          "Jackery Explorer 1000 v2 Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Big Kit vs Starter Kit",
    "cards": [
      {
        "label": "Big kit",
        "text": "A 1000Wh class station with 400W panels powers fridges, pots and laptops for a weekend. The Jackery Explorer 1000 v2 Kit is the big option."
      },
      {
        "label": "Starter kit",
        "text": "A 300Wh class set keeps phones and a laptop alive. The ZeroKor 300W Solar Kit fits this need."
      }
    ],
    "note": "Most RVers should pick the Jackery Explorer 1000 v2 Kit, since the starter kit cannot run RV appliances."
  },
  {
    "subheading": "By Charging Speed",
    "table": {
      "headers": [
        "Need",
        "Recommended pick"
      ],
      "rows": [
        [
          "Fast solar charging",
          "Jackery Explorer 1000 v2 Kit"
        ],
        [
          "Quiet overnight charging",
          "Jackery Explorer 1000 v2 Kit"
        ],
        [
          "Light packing weight",
          "ZeroKor 300W Solar Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Off-Grid RV Weekends Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Enough watt-hours for the fridge and lights plus panels that refill it in a day of sun."
      },
      {
        "label": "In this comparison",
        "text": "The Jackery Explorer 1000 v2 Kit lists 1070Wh and two 200W panels, which is the combination built for that."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Jackery Explorer 1000 v2 Kit if you plan to run a fridge or small appliances away from hookups."
      },
      {
        "label": "Save if",
        "text": "Save with the ZeroKor 300W Solar Kit if the plan is only phones, tablets and a laptop."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watt-hours versus watts",
    "explanation": "Watt-hours are the size of the tank and watts are how fast you can draw from it. A 1070Wh unit running a 100W fridge cycle could last many hours, while a 1500W load empties it in under an hour. Check both numbers against your loads."
  },
  {
    "criterion": "Solar input and panel size",
    "explanation": "A 400W solar input can refill a 1000Wh battery in a few sunny hours, while a 40W panel needs far longer. Real output depends on sun angle and shade, and is usually below the rating. Check the panel wattage and the charge time on the listing."
  },
  {
    "criterion": "LiFePO4 versus lithium-ion",
    "explanation": "LiFePO4 cells tolerate more charge cycles and heat than standard lithium-ion cells, which suits daily RV use. The cell chemistry affects lifespan and safety, not output. Look for a named chemistry and a cycle rating."
  },
  {
    "criterion": "Outlet types and pure sine wave",
    "explanation": "Pure sine wave AC output runs sensitive electronics and appliance motors cleanly. A 12V car port is limited to about 150W, so it is for small devices only. Check the outlet count and type against your devices."
  },
  {
    "criterion": "Weight and portability",
    "explanation": "A 1000Wh unit around 24 lb is easy to lift into an RV, while a bigger unit may need two hands or wheels. Panels add folded size and weight. Check the listing for the stated weight and panel dimensions."
  }
];

export const faq = [
  {
    "q": "Can a solar generator run an RV fridge?",
    "a": "A 1070Wh unit like the Jackery Explorer 1000 v2 Kit can, since a compressor fridge draws modest average power. The ZeroKor 300W Solar Kit is too small for that. Add up the fridge's daily watt-hours first."
  },
  {
    "q": "What mistake do first-time buyers make?",
    "a": "Trusting the solar panel rating as real output. Clouds, shade and angle cut it by a lot. Plan for about half or less of the rating on an average day."
  },
  {
    "q": "Is LiFePO4 worth paying for?",
    "a": "For frequent use, yes, because cycle life is much longer. The Jackery Explorer 1000 v2 Kit lists LiFePO4 cells. The ZeroKor 300W Solar Kit uses a lithium-ion pack."
  },
  {
    "q": "How do I set up the panels?",
    "a": "Unfold the panels in direct sun, tilt them toward the sun and connect them with the supplied cable to the solar input. Keep cables out of the walking path. Move the panels as the sun shifts."
  },
  {
    "q": "How do I store a solar generator?",
    "a": "Charge it to a partial level and store it cool and dry. Top it up every few months. Keep panels folded and clean."
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
