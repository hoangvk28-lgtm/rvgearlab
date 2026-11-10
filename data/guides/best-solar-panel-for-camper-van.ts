export const guideSlug = "best-solar-panel-for-camper-van";
export const guideTitle = "4 Best Solar Panel For Camper Van in 2026";
export const metaTitle = "Best Solar Panel For Camper Van in 2026";
export const metaDescription = "Camper van solar panels compared by roof fit, daily watt-hours and wiring: two Renogy kits and two flexible 100W panels, with honest tradeoffs for each.";
export const mainKeyword = "best solar panel for camper van";
export const introParagraphs = [
  "A camper van gives you maybe 12 to 20 square feet of usable roof once the fan, vent and rails take their share, so nameplate watts mean little until you check footprint. Panel size, weight and wiring decide whether a pick actually fits your van. Here you get four options from a 400W kit down to a 0.1 inch flexible panel, plus daily watt-hour math at 3, 5 and 7 sun hours, the limits of the included controllers, and which pick suits a vented roof, a curved roof or a full-time rig."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41CahWS3ohL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-solar-panel-for-camper-van-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Renogy 200W 12V Monocrystalline Solar Panel Kit + 30A PWM Charge Controller",
    "price": "$229.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41CahWS3ohL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00BCRG22A?tag=rvgearlab-amz-20",
    "description": "The Renogy 200W kit pairs two panels with a Wanderer 30A PWM controller that handles sealed, gel, flooded and lithium batteries. Renogy rates it at about 1000Wh a day on 5 hours of direct sun, and the cells are listed at 22% efficiency. Z-brackets and cables come in the box.\n\nAgainst the Renogy 400W Kit it costs $294.08 less and fits a typical van roof without crowding the vent. It also gives you real mounting hardware, which the flexible panels do not. Pick this if you want a complete plug in system for a van with a 100Ah to 200Ah bank. The caveat is PWM charging, which wastes some voltage headroom versus MPPT.",
    "specs": [
      "200W, 12V kit",
      "30A PWM controller",
      "About 1000Wh at 5 sun hours"
    ],
    "pros": [
      "Includes cables, Z-brackets and controller, so nothing extra to buy",
      "Controller accepts lithium, AGM, gel and flooded battery banks",
      "Pre-drilled frame holes make roof mounting straightforward"
    ],
    "cons": [
      "PWM controller wastes some panel voltage compared with MPPT",
      "Rigid frames are harder to fit on curved van roofs"
    ],
    "bestFor": "Most vans with a flat roof section"
  },
  {
    "id": "best-solar-panel-for-camper-van-2",
    "rank": 2,
    "badge": "Best for Big Loads",
    "name": "Renogy 400Watt Premium Solar Kit with 40A MPPT Charge Controller",
    "price": "$524.07",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41al2vtltlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07CTKT56Y?tag=rvgearlab-amz-20",
    "description": "The Renogy 400W kit is the biggest system here, at $524.07, and the listing only states a 32V maximum battery voltage, so check the controller type and panel count on the product page before ordering. Four times 100W worth of glass gives the most daily energy, roughly double what the 200W class makes.\n\nCompared with the Renogy 200W Kit you pay $294.08 more for twice the nameplate watts. That only pays off if the roof has room for it, since a van with a fan and a vent often cannot fit that much rigid area. Pick this if you run a compressor fridge, laptop and induction cooktop. The caveat is that the listing leaves out weight and dimensions.",
    "specs": [
      "400W kit",
      "32V max battery voltage",
      "Weight not listed"
    ],
    "pros": [
      "Largest output here, built for heavy cooking and work loads",
      "Same Renogy brand and warranty path as the 200W kit",
      "Leaves headroom for a bigger lithium bank later"
    ],
    "cons": [
      "Listing gives few specs, so confirm contents before buying",
      "Needs a lot of flat roof area most vans lack"
    ],
    "bestFor": "Full-time vans with a large battery bank"
  },
  {
    "id": "best-solar-panel-for-camper-van-3",
    "rank": 3,
    "badge": "Best for Curved Roofs",
    "name": "Renogy Flexible Solar Panel 100 Watt",
    "price": "$104.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41zmkmE-4cL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07BMNGVV3?tag=rvgearlab-amz-20",
    "description": "The Renogy Flexible 100W panel bends up to 240 degrees, sits about a tenth of an inch thick and weighs 70% less than a standard panel. The listing rates it for 2400 Pa wind and 5400 Pa snow loads. That makes it the practical choice for a high top van with a curved roof where rigid frames will not lie flat.\n\nIt costs $104.49, which is $34.50 more than the Topunive Flex 100W for the same nameplate wattage. You pay for the brand and its support. Pick this if you want a stealth look and no roof drilling beyond the cable gland. The caveat is that this is panel only, so you must buy a controller and wiring separately.",
    "specs": [
      "100W flexible, 240° bend",
      "0.1 inch thick",
      "2400 Pa wind rated"
    ],
    "pros": [
      "Bends 240 degrees to follow curved high top roofs",
      "About 70% lighter than rigid panels of equal wattage",
      "Just 0.1 inch thick for a low stealth profile"
    ],
    "cons": [
      "Sold as a panel only, no controller included",
      "Only 100W per panel, so two are needed for 200W"
    ],
    "bestFor": "Curved or stealth van roofs"
  },
  {
    "id": "best-solar-panel-for-camper-van-4",
    "rank": 4,
    "badge": "Best Budget",
    "name": "Topunive 100W 12V Flexible Solar Panel 9BB Monocrystalline Cell 12 Volt Semi-Flexible for Marine RV Trailer Bo",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51xRPn8m1ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BQ1Y8JMH?tag=rvgearlab-amz-20",
    "description": "The Topunive 100W flexible panel measures 36.22 by 23.22 inches, weighs 4.4 lb and bends to a minimum radius of 17.7 inches. It uses 9 busbar monocrystalline cells with ETFE surface and an IP67 junction box. At $69.99 it is the cheapest panel in this comparison.\n\nIt undercuts the Renogy Flex 100W by $34.50 for the same wattage, but you lose the larger brand's support network. The 17.7 inch minimum radius also means very tight curves are off the table. Pick this if you want to add 100W to a small van on a budget. The caveat is no controller or mounting hardware, and ETFE glued panels tend to run hotter than framed ones.",
    "specs": [
      "100W, 4.4 lb",
      "36.22 x 23.22 inch",
      "IP67 junction box"
    ],
    "pros": [
      "Costs $69.99, the lowest price of the four picks",
      "Weighs only 4.4 lb, easy to carry onto the roof",
      "Bends to a 17.7 inch radius for mild curves"
    ],
    "cons": [
      "No controller or cables included in the listing",
      "Minimum bend radius rules out sharply curved roofs"
    ],
    "bestFor": "Small vans on a tight budget"
  }
];

export const howWeEvaluated = [
  {
    "title": "Roof fit",
    "description": "We compared listed dimensions and mounting style against typical vent and fan clearances on a van roof."
  },
  {
    "title": "Daily energy",
    "description": "Nameplate watts were converted to estimated watt-hours using the 3, 5 and 7 sun hour range."
  },
  {
    "title": "Controller and wiring",
    "description": "We checked whether a controller is included, its type, and which battery chemistries it supports."
  },
  {
    "title": "Price per watt",
    "description": "We divided listed price by rated watts and weighed what each package includes."
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
    "subheading": "By Roof Shape",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Flat roof with a vent and fan",
          "Renogy 200W Kit",
          "Two rigid panels fit around obstacles and include a 30A controller"
        ],
        [
          "Curved high top roof",
          "Renogy Flex 100W",
          "Bends 240 degrees so it sits flush without frames"
        ],
        [
          "Tight budget and mild curve",
          "Topunive Flex 100W",
          "Bends to a 17.7 inch radius and costs $69.99"
        ],
        [
          "Large flat roof, heavy loads",
          "Renogy 400W Kit",
          "Doubles the output of the 200W class"
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
          "$60 to $110",
          "Topunive Flex 100W or Renogy Flex 100W"
        ],
        [
          "$220 to $530",
          "Renogy 200W Kit or Renogy 400W Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Rigid Kit vs Flexible Panel",
    "cards": [
      {
        "label": "Rigid kit",
        "text": "A framed panel runs cooler and lasts longer, and the Renogy 200W Kit and Renogy 400W Kit also include a controller. The cost is weight and roof area."
      },
      {
        "label": "Flexible panel",
        "text": "Renogy Flex 100W and Topunive Flex 100W are thin and light, fit curves, and can be glued down. They sell panel only, so a controller is extra."
      }
    ],
    "note": "Default to the Renogy 200W Kit unless your roof is curved or you cannot drill."
  },
  {
    "subheading": "By Daily Energy Need",
    "table": {
      "headers": [
        "Best pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Phone, lights and a small fridge (about 300Wh a day)",
          "Topunive Flex 100W"
        ],
        [
          "Fridge, laptop and fans (about 600Wh a day)",
          "Renogy 200W Kit"
        ],
        [
          "Cooking, work gear and a bigger bank (1000Wh or more)",
          "Renogy 400W Kit"
        ],
        [
          "Stealth setup on a curved roof",
          "Renogy Flex 100W"
        ]
      ]
    }
  },
  {
    "subheading": "For Winter Van Life Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Enough watts for a 3 sun hour day, since 100W only makes about 300Wh then"
      },
      {
        "label": "In this comparison",
        "text": "The Renogy 400W Kit gives the most winter margin, while the Renogy 200W Kit is the minimum sensible size for full time use"
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Renogy 400W Kit if you cook with electricity or work on a laptop daily, since it nearly doubles winter energy over the Renogy 200W Kit."
      },
      {
        "label": "Save if",
        "text": "Save with the Topunive Flex 100W at $69.99 if the van only powers lights, a phone and a small fridge on weekend trips."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rated watts versus real watt-hours",
    "explanation": "Nameplate watts are a lab figure under ideal light, not what lands in your battery. Multiply watts by sun hours, then by roughly 0.75 for losses, so 200W at 5 sun hours gives about 750Wh. Check the listing for a stated daily output like 1000Wh and compare it to your fridge and device draw."
  },
  {
    "criterion": "Roof footprint and obstructions",
    "explanation": "A vent, fan and rails can leave only a few square feet of flat roof. A panel that does not fit forces you to cut watts or move gear. Measure the free area and compare it to the listed dimensions, such as the Topunive's 36.22 by 23.22 inches."
  },
  {
    "criterion": "Rigid versus flexible build",
    "explanation": "Rigid panels stay cooler and last longer, while flexible ETFE panels weigh less and follow curves. Heat reduces output, and glued flexible panels cannot shed it as well. Look for the stated bend radius or a 240 degree flex rating before buying for a curved roof."
  },
  {
    "criterion": "Controller type and limits",
    "explanation": "PWM controllers like the Wanderer 30A cost less but waste voltage, while MPPT recovers more energy in cold or cloudy weather. A 30A limit caps what you can add later. Check the listing for the controller type, amp rating and lithium support."
  },
  {
    "criterion": "Battery chemistry support",
    "explanation": "Lithium needs a controller with a lithium charge profile, or the bank can be under or overcharged. Many kits only list lead acid. Confirm that lithium, AGM and gel are all named on the listing before assuming the controller fits your bank."
  }
];

export const faq = [
  {
    "q": "How many watts of solar does a camper van need?",
    "a": "Most vans do well with 200W to 400W on a compressor fridge, fans and a laptop. Add up your daily watt-hours and divide by 3 to 5 sun hours."
  },
  {
    "q": "Can I mount flexible panels without drilling?",
    "a": "Yes, flexible panels are usually glued to the roof with adhesive made for the job. Wiring still needs one roof entry for the cable."
  },
  {
    "q": "Do I need MPPT or is PWM enough?",
    "a": "PWM is fine for small 12V setups with matching panels. MPPT earns its price on larger arrays or in winter when voltage drops."
  },
  {
    "q": "Will a 100W panel run a van fridge?",
    "a": "A 100W panel makes about 300 to 500Wh a day, which can cover a small efficient fridge. A heavy user will want 200W or more."
  },
  {
    "q": "Does cloud cover ruin solar output?",
    "a": "Output falls sharply under heavy cloud, often to a fraction of rated watts. Plan your system around 3 sun hours, not 6."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Lightweight Solar Panel For RV",
    "href": "/power-electrical/best-lightweight-solar-panel-for-rv"
  },
  {
    "title": "Best Portable RV Solar Panel Kit",
    "href": "/power-electrical/best-portable-rv-solar-panel-kit"
  },
  {
    "title": "Best Solar Panel For Travel Trailer",
    "href": "/power-electrical/best-solar-panel-for-travel-trailer"
  },
  {
    "title": "Best Solar Panel For Pop Up Camper",
    "href": "/power-electrical/best-solar-panel-for-pop-up-camper"
  }
];
