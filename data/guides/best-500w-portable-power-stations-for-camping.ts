export const guideSlug = "best-500w-portable-power-stations-for-camping";
export const guideTitle = "5 Best 500w Portable Power Stations in 2026";
export const metaTitle = "Best 500w Portable Power Stations in 2026";
export const metaDescription = "Best 500W portable power stations compared on 500Wh-class capacity, recharge speed, weight and ports for campers who run laptops, fans and a cooler.";
export const mainKeyword = "best 500w portable power stations";
export const introParagraphs = [
  "At 500W the power station stops being a gadget charger and starts running real camp gear: a 12V cooler, a laptop, string lights and a fan can all share one box. The two numbers that decide fit are watt hours for how long it lasts and how quickly it refills before the next trip.",
  "Five 500W-class stations make the list. Two listings for the same 519Wh generic unit are counted as one, and one HOWEASY model is a 260W unit with a 500W peak, included as the nearest fit and flagged as such."
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
    "id": "best-500w-portable-power-stations-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Jackery Explorer 500 v2 Portable Power Station",
    "price": "$399.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OvVec7JvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07SM5HBK1?tag=rvgearlab-amz-20",
    "description": "The Jackery Explorer 500 v2 pairs 512Wh with 500W rated output and 1,000W surge through two pure sine wave outlets. At 14 pounds it is billed as the lightest LiFePO4 station in its class, and the cells are rated for 6,000 cycles.\n\nWhere the ALLWEI takes about 2.5 hours to fill, the Jackery quotes 0 to 80% in 52 minutes from the wall. A 10ms UPS and bypass charging mode also let it sit between a wall socket and a router or PC.\n\nCampers who run a laptop, cooler and lights for a long weekend get the most from it. The foldable handle makes loading the car simple.",
    "specs": [
      "512Wh LiFePO4, 500W / 1000W",
      "14 lb with foldable handle",
      "0 to 80% in 52 minutes"
    ],
    "pros": [
      "52 minute wall recharge to 80%",
      "6,000 cycle LiFePO4 pack",
      "10ms UPS and bypass mode",
      "Two pure sine wave outlets"
    ],
    "cons": [
      "Most expensive of the five",
      "Solar panels cost extra"
    ],
    "bestFor": "Long weekend car camping",
    "take": "A fast-refilling, long-life station that doubles as a home UPS.",
    "catch": "Price is the main ask, and the panels are not included."
  },
  {
    "id": "best-500w-portable-power-stations-2",
    "rank": 2,
    "badge": "Best Fast AC Charge",
    "name": "ANTPO 500W Portable Power Station",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413JL-PoS+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HBVJFZBW?tag=rvgearlab-amz-20",
    "description": "The ANTPO 500W has a 512Wh LiFePO4 pack, 500W continuous output with a 1,000W surge, and 3,500 or more cycles. It refills 0 to 80% in about one hour through a 500W AC input and offers PD 60W and QC3.0 ports.\n\nIts refill time rivals the Jackery for a lower price, and it carries a 24-month warranty. The retro oil-can styling is the clearest design difference from the boxy rivals.\n\nIt suits campers who want fast turnarounds and a bit of style at a moderate price. The package includes AC and car charging cables.",
    "specs": [
      "512Wh LiFePO4, 500W / 1000W",
      "0 to 80% in one hour",
      "24-month warranty"
    ],
    "pros": [
      "One hour AC recharge to 80%",
      "3,500+ cycle LiFePO4 pack",
      "PD 60W and QC3.0 ports",
      "24-month warranty"
    ],
    "cons": [
      "Retro shape may not stack neatly",
      "Weight not stated on the listing"
    ],
    "bestFor": "Quick turnaround at a mid price",
    "take": "A quick-charging LiFePO4 pick at a lower price than the Jackery.",
    "catch": "Check the weight before planning a long carry."
  },
  {
    "id": "best-500w-portable-power-stations-3",
    "rank": 3,
    "badge": "Best UPS Value",
    "name": "ALLWEI Portable Power Station 500W",
    "price": "$269.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41k8tvlD1bL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CCNTFDJJ?tag=rvgearlab-amz-20",
    "description": "The ALLWEI 500W stores 512Wh in LiFePO4 cells with a BMS and MPPT system, and refills in 2.5 hours from the wall in Q Mode. Its two AC outlets share 500W, joined by a 100W USB-C, a 36W USB-C, two USB-A, two DC5521 ports and a car port.\n\nIt gives the most port variety of the five and prices below the Jackery. The listing says the pack reaches 70% after 3,000 cycles, or about 10 years.\n\nIt suits campers who want a UPS for a desktop or server at home and a camp box on weekends. A 100W solar panel fills it in about 6.5 hours.",
    "specs": [
      "512Wh LiFePO4, 500W AC",
      "2.5 hour wall recharge",
      "100W USB-C plus car port"
    ],
    "pros": [
      "Wide port mix with 100W USB-C",
      "3,000 cycle LiFePO4 pack",
      "MPPT solar input",
      "Built-in UPS function"
    ],
    "cons": [
      "2.5 hours to refill is slower",
      "Weight not stated"
    ],
    "bestFor": "Home UPS and camping",
    "take": "A mid-priced station for both home backup and camp trips.",
    "catch": "Plan overnight charging if you use it daily."
  },
  {
    "id": "best-500w-portable-power-stations-4",
    "rank": 4,
    "badge": "Best Budget Capacity",
    "name": "Portable Power Station 500W",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415iy5vNP7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09ZKT5FQZ?tag=rvgearlab-amz-20",
    "description": "This 519.48Wh unit lists 500W with a 1,000W peak, two 120V pure sine wave outlets and room for up to 10 devices. It weighs 14.1 pounds and charges from a 100W or 200W panel, with a full solar charge in 6 to 9 hours.\n\nIt holds more watt hours than any other box here, at roughly half the Jackery's price. A second listing of the same unit exists, so the two count as one pick.\n\nIt suits shoppers who want 519Wh at the lowest price for fair-weather weekends. The listing names a built-in BMS for overload and temperature protection.",
    "specs": [
      "519.48Wh, 500W / 1000W peak",
      "Two pure sine AC outlets",
      "14.1 lb, up to 10 devices"
    ],
    "pros": [
      "Most watt hours of the group",
      "Low price for 500W",
      "Up to 10 devices at once",
      "Handle and 14.1 lb body"
    ],
    "cons": [
      "Brand name is not on the listing",
      "Cell chemistry not stated clearly"
    ],
    "bestFor": "Budget 500W weekends",
    "take": "More watt hours than anything else here at a much lower cost.",
    "catch": "No brand and little chemistry detail, so lean on the warranty terms."
  },
  {
    "id": "best-500w-portable-power-stations-5",
    "rank": 5,
    "badge": "Nearest Fit, Small Carry",
    "name": "HOWEASY Portable Power Station",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/414IJAwRTDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJXYNPPD?tag=rvgearlab-amz-20",
    "description": "The HOWEASY is rated 260W with a 500W peak, so it is the nearest fit rather than a true 500W unit. It has nine ports including two AC outlets, a 65W Type-C and three USB-A, in an 8.19 by 4.72 by 5.43 inch body at 5 pounds.\n\nIt trades the 500Wh class of capacity for a package a third the weight of the Jackery. The listing names solar input at 18 to 24V and an SOS flashlight.\n\nIt suits solo campers with a laptop, phone and lights who want a lighter box. A hidden handle keeps the shape tidy.",
    "specs": [
      "260W rated, 500W peak",
      "Nine ports, 65W Type-C",
      "5 lb, 8.19 x 4.72 x 5.43 in"
    ],
    "pros": [
      "5 lb is the lightest here",
      "65W Type-C fast charging",
      "Nine ports",
      "SOS flashlight on the body"
    ],
    "cons": [
      "Rated 260W, below a true 500W",
      "Capacity is not stated on the listing"
    ],
    "bestFor": "Light solo carry",
    "take": "A small, light option when 260W is enough.",
    "catch": "The listing gives no watt hour figure, so runtime is hard to predict."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Watt hours were compared across the 500Wh class, with the 260W unit flagged as a nearest fit."
  },
  {
    "title": "Recharge speed",
    "description": "Stated wall and solar recharge times were compared."
  },
  {
    "title": "Output and ports",
    "description": "Rated watts, surge, AC outlets and USB-C wattage were checked."
  },
  {
    "title": "Weight",
    "description": "Stated weights were compared where listings gave them."
  },
  {
    "title": "Value",
    "description": "Price per watt hour and warranty terms were weighed."
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
    "subheading": "By How You Camp",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Car camping with a cooler and laptop",
          "Jackery Explorer 500 v2",
          "512Wh, 52 minute recharge and a 6,000 cycle pack."
        ],
        [
          "Fast refills between outings",
          "ANTPO 500W",
          "One hour AC refill to 80%."
        ],
        [
          "Home UPS plus camp use",
          "ALLWEI 500W",
          "Built-in UPS and a 100W USB-C."
        ],
        [
          "Solo trip, short carry",
          "HOWEASY 260W",
          "5 lb with a 65W Type-C port."
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
          "$120 to $170",
          "HOWEASY 260W or ANTPO 500W"
        ],
        [
          "$190 to $270",
          "519Wh 500W Solar Gen or ALLWEI 500W"
        ],
        [
          "$390 to $400",
          "Jackery Explorer 500 v2"
        ]
      ]
    }
  },
  {
    "subheading": "Fast Recharge vs Big Capacity",
    "cards": [
      {
        "label": "Fast recharge",
        "text": "The Jackery Explorer 500 v2 and ANTPO 500W refill to 80% in about an hour or less, so a short break gives back most of the capacity."
      },
      {
        "label": "Big capacity",
        "text": "The 519Wh 500W Solar Gen holds the most watt hours at the lowest price and takes hours to refill."
      }
    ],
    "note": "Most campers should choose a fast-recharge model like the Jackery Explorer 500 v2 unless budget decides."
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
          "Lowest spend with 519Wh",
          "519Wh 500W Solar Gen"
        ],
        [
          "Mid-range LiFePO4",
          "ALLWEI 500W"
        ],
        [
          "Mid-range with fast charge",
          "ANTPO 500W"
        ],
        [
          "Pay for brand and 6,000 cycles",
          "Jackery Explorer 500 v2"
        ]
      ]
    }
  },
  {
    "subheading": "For Camp Coolers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A 12V or AC output that a compressor cooler can start, and enough Wh for the overnight run."
      },
      {
        "label": "In this comparison",
        "text": "The Jackery Explorer 500 v2 and ALLWEI 500W have enough watt hours and surge room for a compressor cooler."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Jackery Explorer 500 v2 if you will use it daily or as a home UPS, since its 6,000 cycle pack and fast refill pay off. The ANTPO 500W offers a quick charge at a lower price."
      },
      {
        "label": "Save if",
        "text": "Save with the 519Wh 500W Solar Gen if you only camp a few weekends a year. The HOWEASY 260W saves more if a smaller load fits your needs."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rated watts versus watt hours",
    "explanation": "Rated watts say what the box can run at once; watt hours say how long. A 500W, 512Wh station can run a 50W cooler for around eight hours before losses and a 100W load for about four. Check both figures on the listing before relying on a number."
  },
  {
    "criterion": "Recharge time to 80%",
    "explanation": "A 52 minute or one hour refill to 80% turns a station into something you can top up over lunch. A 2.5 hour or longer refill suits overnight charging. Look for the stated input wattage and the minutes to 80%."
  },
  {
    "criterion": "Cycle life",
    "explanation": "LiFePO4 packs list from 3,000 to 6,000 cycles, which equals many years of weekend use. Packs without a stated cycle count leave you guessing. Prefer a listing that names both the chemistry and the cycles."
  },
  {
    "criterion": "UPS and pass-through",
    "explanation": "A 10ms UPS keeps a router or PC alive through a power cut and lets the unit stay plugged in. Not every listing names one. Look for the word UPS and a switchover time."
  },
  {
    "criterion": "Weight and carry",
    "explanation": "A 500Wh station weighs about 14 pounds, which is manageable for a short walk but heavy for backpacking. Listings that do not state weight make it harder to plan. Look at the number in pounds and the handle design."
  }
];

export const faq = [
  {
    "q": "What can a 500W power station run at camp?",
    "a": "A laptop, lights, a fan, a phone charger and a 12V cooler fit easily. Heating appliances like kettles are out. Add up the rated watts to confirm."
  },
  {
    "q": "How long will a 512Wh station last?",
    "a": "A 100W load runs for roughly four hours after inverter loss. A 50W cooler load runs about eight hours. Real numbers vary with the device."
  },
  {
    "q": "Is a 500W station enough for a CPAP?",
    "a": "Some listings mention CPAP use, but confirm compatibility with the CPAP maker and never rely on a runtime estimate. A heated humidifier raises the draw a lot."
  },
  {
    "q": "How do I charge a station with solar?",
    "a": "Match the panel's voltage range and connector to the station's solar input. A 100W panel needs many hours in strong sun to fill 500Wh. Use the wall to start trips full."
  },
  {
    "q": "How should I store a LiFePO4 station?",
    "a": "Store it around half charge in a cool, dry room. Top it up every few months. Avoid heat and freezing temperatures when charging."
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
