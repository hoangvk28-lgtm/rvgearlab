export const guideSlug = "best-800w-portable-power-stations-for-camping";
export const guideTitle = "5 Best 800w Portable Power Stations in 2026";
export const metaTitle = "Best 800w Portable Power Stations in 2026";
export const metaDescription = "Best 800W portable power stations compared: true 800W units plus nearest-fit picks, judged on capacity, surge and recharge time for camp and van power.";
export const mainKeyword = "best 800w portable power stations";
export const introParagraphs = [
  "Few portable power stations are sold at exactly 800W, so this size sits in a gap between 600W gadget boxes and 1,000W workhorses. Two units here carry a true 800W rating, and the rest are the nearest fits: a larger 2,400W station, and two compact boxes with an 800W peak.",
  "Each pick is labeled for what it really is, so you can see whether the 800W number is continuous output or only a surge. The comparison weighs watt hours, outlets, recharge speed and weight, since an 800W load drains a small battery in well under an hour."
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
    "id": "best-800w-portable-power-stations-1",
    "rank": 1,
    "badge": "Best True 800W",
    "name": "OUKITEL P800 Portable Power Station",
    "price": "$299.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412oll4P5ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HK3PBH4C?tag=rvgearlab-amz-20",
    "description": "The OUKITEL P800 delivers 800W continuous and 1,600W surge from 512Wh of LiFePO4, and alongside the AC sockets sits a 100W USB-C PD jack, a QC 3.0 port and a 120W car outlet. The listing says it recharges in about an hour from up to 500W AC and rates the cells at 4,000 cycles.\n\nIt is one of two picks with a true 800W rating, and it adds a built-in MPPT controller for 200W of solar and a UPS transfer under 10ms. It holds less energy than the powkey R1000 at 740Wh, in return for a much faster refill.\n\nIt suits campers who run a coffee maker, laptop or fan and want to recharge between outings. The listing calls it 20% lighter than comparable stations.",
    "specs": [
      "512Wh LiFePO4, 800W / 1600W",
      "1 hour AC recharge, 200W solar",
      "100W USB-C PD, UPS under 10ms"
    ],
    "pros": [
      "True 800W continuous rating",
      "About 1 hour AC recharge",
      "4,000 cycle LiFePO4 cells",
      "MPPT solar and UPS switchover"
    ],
    "cons": [
      "512Wh drains quickly at 800W",
      "Weight is not stated on the listing"
    ],
    "bestFor": "Short, powerful loads",
    "take": "A true 800W unit that refills fast, ideal for short high-draw uses.",
    "catch": "At full load, 512Wh lasts well under an hour."
  },
  {
    "id": "best-800w-portable-power-stations-2",
    "rank": 2,
    "badge": "Best Capacity at 800W",
    "name": "800W Portable Power Station",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+p8tHsi7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09JBWH86G?tag=rvgearlab-amz-20",
    "description": "The powkey R1000 packs 740Wh into a lithium-ion pack with three AC outlets sharing 800W of pure sine wave output. It adds two USB-A, two USB-C, two 10W wireless pads, two 12V DC ports and Anderson and DC charging ports.\n\nIt holds about 45% more energy than the OUKITEL P800 and puts wireless pads on the lid. The AC adapter and car charger come in the box.\n\nIt suits car campers who want an 800W budget unit for a fan, cooler and laptop. Charging comes from a wall, car port or a backup battery source.",
    "specs": [
      "740Wh lithium-ion, 800W AC",
      "Three AC outlets, pure sine",
      "Two 10W wireless pads"
    ],
    "pros": [
      "740Wh gives real runtime",
      "Three AC outlets",
      "Wireless pads on top",
      "AC adapter and car cable included"
    ],
    "cons": [
      "Lithium-ion, not LiFePO4",
      "No UPS or recharge time named"
    ],
    "bestFor": "Budget 800W car camping",
    "take": "A budget 740Wh box with the most outlets and real 800W output.",
    "catch": "The listing names no cycle count or recharge hours."
  },
  {
    "id": "best-800w-portable-power-stations-3",
    "rank": 3,
    "badge": "Best If You Step Up",
    "name": "Anker SOLIX C2000 Gen 2 Portable Power Station",
    "price": "$999.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iJKYxROtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FVFGL38H?tag=rvgearlab-amz-20",
    "description": "The Anker SOLIX C2000 Gen 2 stores 2,048Wh and delivers 2,400W rated with 4,000W peak, enough for most window and RV air conditioners per the listing. It uses 9W on standby, charges to 100% in 58 minutes and takes 800W alternator charging in a vehicle.\n\nIt is far beyond 800W, so it is the step-up option rather than a true fit. An expansion battery lifts capacity to 4kWh, and a dual-door fridge can run for 32 hours.\n\nIt suits van and RV campers who want 800W loads to last hours instead of minutes. It is the only pick with alternator charging.",
    "specs": [
      "2,048Wh, 2,400W rated",
      "4,000W peak, 58 minute charge",
      "800W alternator charging"
    ],
    "pros": [
      "2,048Wh runs 800W for hours",
      "Expandable to 4kWh",
      "Six ways to recharge",
      "9W standby draw"
    ],
    "cons": [
      "Far larger than an 800W need",
      "Most expensive pick by far"
    ],
    "bestFor": "Van or RV with 800W+ loads",
    "take": "The step-up option for those whose 800W loads run all day.",
    "catch": "Cost and size are far above what an 800W user needs."
  },
  {
    "id": "best-800w-portable-power-stations-4",
    "rank": 4,
    "badge": "Best Light Peak Pick",
    "name": "AFERIY Portable Power Station 800W Peak/400W Rated",
    "price": "$189.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RgJx852vL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7TFCBKT?tag=rvgearlab-amz-20",
    "description": "The AFERIY Nomad400 is rated 400W with an 800W peak and holds 256Wh of LiFePO4. It weighs 8.8 pounds, takes 300W from the wall for a 45 minute fast charge, and offers a 100W PD USB-C port and a 10ms UPS.\n\nIt is a nearest fit by peak watts, with the smallest battery of the five and a body under 9 pounds. Next to the Flashfish K53 it recharges faster and carries a 4,000-cycle pack.\n\nIt suits backpackers and weekenders whose real load stays under 400W and who want a surge reserve. A bidirectional inverter replaces the bulky adapter.",
    "specs": [
      "256Wh LiFePO4, 400W / 800W peak",
      "45 minute fast charge",
      "8.8 lb, 100W USB-C"
    ],
    "pros": [
      "8.8 lb is easy to carry",
      "45 minute fast charge",
      "4,000+ cycle LiFePO4 pack",
      "100W USB-C PD output"
    ],
    "cons": [
      "400W rated, not 800W continuous",
      "256Wh runs out quickly"
    ],
    "bestFor": "Light carry with surge reserve",
    "take": "A light unit with an 800W peak but only 400W continuous.",
    "catch": "Do not plug in a continuous 800W device."
  },
  {
    "id": "best-800w-portable-power-stations-5",
    "rank": 5,
    "badge": "Best Budget Peak Pick",
    "name": "Flashfish Portable Power Station",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41XDplmDjwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HJ7B7RR9?tag=rvgearlab-amz-20",
    "description": "The Flashfish K53 offers 400Wh and 400W continuous with an 800W peak, one AC outlet and nine ports in total. It weighs about 8.44 pounds and measures 9.2 by 5.8 by 6.0 inches.\n\nIt holds more energy than the AFERIY Nomad400 at the lowest price here, with a single AC outlet. The listing names solar, wall and car charging, with a full recharge quoted at 9 to 10 hours.\n\nIt suits budget campers who need an 800W surge capacity for a pump or blender. It is a nearest fit rather than an 800W unit.",
    "specs": [
      "400Wh, 400W / 800W peak",
      "9 ports, one AC outlet",
      "8.44 lb, 9.2 x 5.8 x 6.0 in"
    ],
    "pros": [
      "Lowest price in the group",
      "400Wh beats the AFERIY",
      "Nine output ports",
      "8.44 lb with a handle"
    ],
    "cons": [
      "400W rated, not 800W continuous",
      "Only one AC outlet"
    ],
    "bestFor": "Budget peak-load backup",
    "take": "The cheapest nearest-fit pick for short surges.",
    "catch": "A full recharge takes 9 to 10 hours, so plan ahead."
  }
];

export const howWeEvaluated = [
  {
    "title": "Rated versus peak watts",
    "description": "Each listing was separated into true 800W continuous output and peak-only claims."
  },
  {
    "title": "Capacity",
    "description": "Watt hours were compared since 800W drains small batteries fast."
  },
  {
    "title": "Recharge",
    "description": "Wall, solar and vehicle recharge options were checked."
  },
  {
    "title": "Weight and ports",
    "description": "Listed weight and outlet counts were compared."
  },
  {
    "title": "Value",
    "description": "Price against capacity and stated cycles."
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
    "subheading": "By Load",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Coffee maker or blender, true 800W",
          "OUKITEL P800",
          "The only true 800W continuous rating."
        ],
        [
          "Fan, cooler and laptop, long runtime",
          "powkey R1000",
          "740Wh and three AC outlets."
        ],
        [
          "800W loads running for hours",
          "Anker SOLIX C2000 Gen 2",
          "2,048Wh and 2,400W rated."
        ],
        [
          "Light carry, surge reserve",
          "AFERIY Nomad400",
          "8.8 lb with an 800W peak."
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
          "$140 to $190",
          "Flashfish K53 or AFERIY Nomad400"
        ],
        [
          "$190 to $300",
          "powkey R1000 or OUKITEL P800"
        ],
        [
          "$990 to $1000",
          "Anker SOLIX C2000 Gen 2"
        ]
      ]
    }
  },
  {
    "subheading": "True 800W vs Peak Only",
    "cards": [
      {
        "label": "True 800W",
        "text": "The OUKITEL P800 and powkey R1000 give 800W continuous, so heavy loads run without tripping."
      },
      {
        "label": "Peak only",
        "text": "The AFERIY Nomad400 and Flashfish K53 handle brief 800W surges with 400W continuous."
      }
    ],
    "note": "Most campers should choose a true 800W unit like the OUKITEL P800 unless weight decides."
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
          "Lowest spend",
          "Flashfish K53"
        ],
        [
          "Light and fast",
          "AFERIY Nomad400"
        ],
        [
          "Mid-range 800W",
          "powkey R1000"
        ],
        [
          "Pay for a true 800W with fast charge",
          "OUKITEL P800"
        ]
      ]
    }
  },
  {
    "subheading": "For Van or RV Use Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Capacity of 1kWh or more and a vehicle or solar charging path."
      },
      {
        "label": "In this comparison",
        "text": "The Anker SOLIX C2000 Gen 2 lists alternator charging and expansion, the strongest van fit here."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the OUKITEL P800 if you need real 800W output with an hour-long refill. The Anker SOLIX C2000 Gen 2 is the premium if loads run for hours."
      },
      {
        "label": "Save if",
        "text": "Save with the Flashfish K53 or powkey R1000 if you only run short loads at camp. Both give usable watt hours at lower prices."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Continuous versus peak",
    "explanation": "A station labelled 800W peak might only deliver 400W continuously. Plugging in an 800W device then trips the overload protection. Check which number is rated output and which is surge."
  },
  {
    "criterion": "Watt hours at heavy loads",
    "explanation": "An 800W load drains a 512Wh unit in roughly 35 minutes after inverter loss. A 740Wh unit gives around 50 minutes. Check the Wh and divide by your load, then subtract about 20%."
  },
  {
    "criterion": "Recharge method",
    "explanation": "Fast AC charging near 500W refills in about an hour, while a 100W solar panel takes much longer. Vehicle alternator charging is the quickest on the road. Look for the stated input wattage."
  },
  {
    "criterion": "Heating appliances",
    "explanation": "Kettles and toasters often draw over 1,000W and will exceed an 800W unit. Coffee makers and blenders vary widely. Check the rated watts on the appliance label."
  },
  {
    "criterion": "Chemistry and cycles",
    "explanation": "LiFePO4 cells list 3,000 to 4,000 cycles, while lithium-ion cells list fewer or none. The listing should name both. Look for them before paying for a long-life claim."
  }
];

export const faq = [
  {
    "q": "What can an 800W power station run?",
    "a": "Coffee makers, blenders, small fans, laptops and lights fit. Kettles, toasters and hair dryers often exceed 800W. Check the appliance label."
  },
  {
    "q": "Is an 800W peak the same as 800W output?",
    "a": "No, a peak rating covers a brief surge. The AFERIY Nomad400 and Flashfish K53 are 400W continuous. Match your device's continuous watts to the rated figure."
  },
  {
    "q": "How long does an 800W load last on 512Wh?",
    "a": "About 35 minutes after losses. Smaller loads last far longer. Divide watt hours by load and subtract roughly 20%."
  },
  {
    "q": "Can I charge these from my car?",
    "a": "The Anker SOLIX C2000 Gen 2 supports 800W alternator charging, and others use a 12V car port. Check the listing for charging wattage."
  },
  {
    "q": "Can any of these power a CPAP?",
    "a": "Some listings mention CPAP machines. Confirm with the CPAP maker, and do not rely on a runtime estimate. Humidifier heaters raise the draw."
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
