export const guideSlug = "best-foldable-solar-panels";
export const guideTitle = "6 Best Foldable Solar Panels in 2026";
export const metaTitle = "Best Foldable Solar Panels in 2026";
export const metaDescription = "Best foldable solar panels across sizes compared, from 10W phone chargers to 480W bifacial panels, so campers can match wattage to what they power.";
export const mainKeyword = "best foldable solar panels";
export const introParagraphs = [
  "The right foldable solar panel depends almost entirely on what you power, and the range runs from a 10W phone charger to a 480W panel for a large station. This overview spans six sizes so you can find your tier first and then go deeper in the size-specific guides.",
  "The six picks cover 10W, 10W, 40W, 100W, 450W and 480W. They were compared on stated weight, folded size, ports, voltage and waterproofing within their own tier."
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
    "id": "best-foldable-solar-panels-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "FlexSolar 100W Foldable Portable Solar Panel Charger IP67 Waterproof",
    "price": "$80.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/512HvRFtq1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DX25J31F?tag=rvgearlab-amz-20",
    "description": "The FlexSolar 100W lists 4.1 lbs, a 0.59 inch profile and three outputs: USB-C PD 3.0 at 45W, USB-A at 18W and a 100W DC port. It carries an IP67 rating with E-film lamination and monocrystalline cells.\n\nIt is the best fit for most campers, sitting between the 40W and the large 450W panels. It weighs far less than the ZOUPW panels and costs a fraction of them.\n\nIt suits weekend campers who want to charge a laptop, phone and small station from one panel. The slim fold stores flat.",
    "specs": [
      "100W, 4.1 lbs, 0.59 in thin",
      "USB-C PD 45W, USB-A 18W",
      "100W DC, IP67 E-film"
    ],
    "pros": [
      "Three outputs in one panel",
      "Thin 0.59 inch profile",
      "IP67 rating",
      "Light at 4.1 lbs"
    ],
    "cons": [
      "Too small for a large station",
      "Output drops in cloud"
    ],
    "bestFor": "Most weekend campers",
    "take": "The one-panel answer for phones, laptops and small stations.",
    "catch": "100W will take a long time to fill a large station."
  },
  {
    "id": "best-foldable-solar-panels-2",
    "rank": 2,
    "badge": "Best Large Station",
    "name": "ZOUPW 450W Portable Solar Panel N-Type 16BB for Power Station",
    "price": "$474.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41WNDLOe3dL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DGT547L7?tag=rvgearlab-amz-20",
    "description": "The ZOUPW 450W lists N-type 16BB cells, a 45.9V open-circuit voltage for 40 to 60V station inputs and a fiberglass build at 29.5 lbs. It carries an IP68 rating with ETFE and ships with a 4-in-1 adapter cable.\n\nIt is the heavy-duty choice for high-capacity stations and weighs 7 lbs more than the bifacial 480W. It costs about $130 less than the 480W.\n\nIt suits RV owners with a large station that accepts high voltage. The fiberglass build is lighter than glass.",
    "specs": [
      "450W N-type, 45.9V Voc",
      "29.5 lbs, fiberglass",
      "IP68, 4-in-1 cable"
    ],
    "pros": [
      "IP68 rating",
      "Fiberglass build is lighter than glass",
      "High voltage for large stations",
      "Shade resistant per the listing"
    ],
    "cons": [
      "Needs a 40 to 60V station input",
      "Costly and heavy"
    ],
    "bestFor": "Large-station RV owners",
    "take": "A big, tough panel for high-capacity stations.",
    "catch": "It is useless with a station that cannot take 40V or more."
  },
  {
    "id": "best-foldable-solar-panels-3",
    "rank": 3,
    "badge": "Best Bifacial Power",
    "name": "ZOUPW 480W Bifacial Portable Solar Panel N-Type 16BB for Power Station",
    "price": "$599.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JiOFXoSdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G3PJF9W8?tag=rvgearlab-amz-20",
    "description": "The ZOUPW 480W lists bifacial N-type 16BB cells with up to 30 percent extra gain, a 42.5V high-voltage design and composite materials weighing 22.5 lbs. It is rated IP68.\n\nIt is the most powerful and priciest pick here, and it weighs 7 lbs less than the 450W. The extra gain depends on reflective ground.\n\nIt suits off-grid setups that want maximum wattage from a folding panel. The composite build avoids heavy glass.",
    "specs": [
      "480W bifacial N-type",
      "42.5V high voltage, 22.5 lbs",
      "IP68, composite build"
    ],
    "pros": [
      "Highest wattage here",
      "Bifacial gain up to 30%",
      "Lighter than the 450W",
      "IP68 rating"
    ],
    "cons": [
      "Highest price by far",
      "High voltage limits station options"
    ],
    "bestFor": "High-capacity off-grid power",
    "take": "The most power in the group, and lighter than the 450W.",
    "catch": "The 30 percent gain needs bright reflective ground."
  },
  {
    "id": "best-foldable-solar-panels-4",
    "rank": 4,
    "badge": "Best Adapter Kit",
    "name": "40W Foldable Solar Panel for iPhone",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KdwoRNOpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08S7B46CB?tag=rvgearlab-amz-20",
    "description": "The SinKeu lists 22 percent monocrystalline cells, 3.3 lbs and a folded size of 12.6 x 9.1 x 2 inches. It has a DC output at 18V/2.27A max, USB-C and QC3.0 USB, 10 DC adapters and a TIR-C device-detection chip.\n\nIt brings the widest adapter set among the small panels. It costs less than the FlexSolar 100W and weighs a little less.\n\nIt suits campers who need to feed a station and charge phones. The adapters cover many station inputs.",
    "specs": [
      "40W, 22%, 3.3 lbs",
      "12.6 x 9.1 x 2 in folded",
      "DC 18V/2.27A, 10 adapters"
    ],
    "pros": [
      "Ten DC adapters",
      "Three output types",
      "Device-detection chip",
      "Low price"
    ],
    "cons": [
      "Water resistance is not rated",
      "Thicker fold at 2 inches"
    ],
    "bestFor": "Feeding small stations",
    "take": "A flexible 40W with plenty of adapters.",
    "catch": "No IP rating is listed."
  },
  {
    "id": "best-foldable-solar-panels-5",
    "rank": 5,
    "badge": "Best Compact Phone Charger",
    "name": "BLAVOR 10W Portable Solar Charger",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51P3tJfJAKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BJDBQXQ3?tag=rvgearlab-amz-20",
    "description": "The BLAVOR lists a 10W panel at 5V/2A max, 24 percent efficiency, 0.81 lbs and a folded size of 7.4 x 7.5 x 1 inches. It has 2 USB outputs and oxford cloth construction.\n\nIt is the pricier 10W pick and the only one with two USB ports. It includes a USB A-USB C cable and two carabiners.\n\nIt suits hikers who charge two small devices. The oxford cloth is wear-resistant.",
    "specs": [
      "10W, 5V/2A, 24%",
      "0.81 lbs, 7.4 x 7.5 in",
      "2 USB, oxford cloth"
    ],
    "pros": [
      "Two USB outputs",
      "Cable and carabiners included",
      "Wear-resistant oxford cloth",
      "Very light"
    ],
    "cons": [
      "Only 10W of power",
      "Costs more than other 10W panels"
    ],
    "bestFor": "Light hikers",
    "take": "A compact 10W with two USB ports and a cable.",
    "catch": "Ten watts only tops up a phone slowly."
  },
  {
    "id": "best-foldable-solar-panels-6",
    "rank": 6,
    "badge": "Best Budget",
    "name": "10W Solar Panels Portable",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41e2nJ5vYUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C4DVT32Z?tag=rvgearlab-amz-20",
    "description": "The FlexSolar 10W lists 5V/2A max, 24 percent monocrystalline cells with an IP67 rating, a folded size of 8.8 x 7.6 x 0.7 inches and 0.66 lbs. It has one USB port and includes 2 carabiners.\n\nIt is the cheapest listing here and has a stated IP67 rating the BLAVOR does not. It has one USB port against the BLAVOR's two.\n\nIt suits budget hikers who just need to charge a phone or small fan. The thin fold slips into a pack.",
    "specs": [
      "10W, 24%, IP67",
      "0.66 lbs, 8.8 x 7.6 x 0.7 in",
      "One USB port"
    ],
    "pros": [
      "Lowest price in the group",
      "IP67 rating",
      "Very light at 0.66 lbs",
      "Carabiners included"
    ],
    "cons": [
      "One USB port",
      "Only 10W of power"
    ],
    "bestFor": "Budget phone charging",
    "take": "The cheapest way to start with solar.",
    "catch": "It cannot charge laptops or stations."
  }
];

export const howWeEvaluated = [
  {
    "title": "Wattage tier",
    "description": "We grouped panels by size and compared within each tier."
  },
  {
    "title": "Weight and fold",
    "description": "We compared stated weight and folded size."
  },
  {
    "title": "Outputs",
    "description": "We compared USB and DC outputs."
  },
  {
    "title": "Voltage",
    "description": "We noted high-voltage inputs."
  },
  {
    "title": "Weather",
    "description": "We compared IP ratings."
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
    "subheading": "By What You Power",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Phone only, budget",
          "FlexSolar 10W",
          "Cheapest, IP67"
        ],
        [
          "Phone plus small device",
          "BLAVOR 10W",
          "2 USB ports"
        ],
        [
          "Phone and small station",
          "SinKeu 40W",
          "10 DC adapters"
        ],
        [
          "Laptop and small station",
          "FlexSolar 100W",
          "PD 45W and 100W DC"
        ],
        [
          "Large RV station",
          "ZOUPW 450W",
          "450W, 45.9V"
        ],
        [
          "Maximum wattage",
          "ZOUPW 480W Bifacial",
          "480W bifacial"
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
          "$10 to $40",
          "FlexSolar 10W or BLAVOR 10W"
        ],
        [
          "$50 to $90",
          "SinKeu 40W or FlexSolar 100W"
        ],
        [
          "$460 to $600",
          "ZOUPW 450W or ZOUPW 480W Bifacial"
        ]
      ]
    }
  },
  {
    "subheading": "Small USB Panel vs Station Panel",
    "cards": [
      {
        "label": "Small USB panel",
        "text": "Small panels top up phones and banks. FlexSolar 10W and BLAVOR 10W are USB-only."
      },
      {
        "label": "Station panel",
        "text": "Larger panels feed stations through DC. SinKeu 40W, FlexSolar 100W, ZOUPW 450W and ZOUPW 480W Bifacial do."
      }
    ],
    "note": "Most campers should choose the FlexSolar 100W unless they only charge a phone."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $20",
          "FlexSolar 10W"
        ],
        [
          "Under $60",
          "SinKeu 40W"
        ],
        [
          "Under $100",
          "FlexSolar 100W"
        ],
        [
          "Premium",
          "ZOUPW 480W Bifacial"
        ]
      ]
    }
  },
  {
    "subheading": "For Weekend Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A panel under 5 lbs with USB and DC outputs."
      },
      {
        "label": "In this comparison",
        "text": "The FlexSolar 100W lists 4.1 lbs with PD 45W USB-C and 100W DC."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you own a large station, which points to the ZOUPW 450W or ZOUPW 480W Bifacial."
      },
      {
        "label": "Save if",
        "text": "Save if you only charge phones, since the FlexSolar 10W and BLAVOR 10W cost very little."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Pick your wattage tier",
    "explanation": "A 10W panel charges a phone, a 40W panel charges phones and tablets, a 100W panel can feed a small station and a 450W panel suits a large one. Buying above what your station accepts wastes money. Check your station's maximum solar input."
  },
  {
    "criterion": "Match station voltage",
    "explanation": "Large stations may need 40 to 60V solar input, while small ones accept 12 to 24V. A panel outside the range will not charge or may be refused. Compare the Voc to your manual."
  },
  {
    "criterion": "Bifacial claims",
    "explanation": "Bifacial panels add power from reflected light, but only over bright ground. The 30 percent figure is a best case. Treat it as a ceiling."
  },
  {
    "criterion": "Weight versus watts",
    "explanation": "A 10W panel weighs under 1 lb and a 480W panel over 22 lbs. Match weight to how far you carry. Check stated weights."
  },
  {
    "criterion": "USB or DC outputs",
    "explanation": "Small panels use USB for phones, while larger panels use DC to feed stations. Pick the output you need. Check the port types."
  },
  {
    "criterion": "Waterproof rating",
    "explanation": "IP67 and IP68 panels handle heavy rain, while IP65 handles splashes. Panels left out need a high rating. Check the number."
  }
];

export const faq = [
  {
    "q": "How big a solar panel do I need?",
    "a": "Match the panel to your station's input and your use. A 100W panel suits small stations and a 450W panel suits large ones."
  },
  {
    "q": "What mistake do buyers make?",
    "a": "Buying a big panel for a station that limits input. The extra watts go unused."
  },
  {
    "q": "Is a 480W panel worth it over a 450W panel?",
    "a": "Only if your station accepts the extra watts and you camp over reflective ground. Otherwise the ZOUPW 450W is cheaper."
  },
  {
    "q": "How do I set up a panel?",
    "a": "Unfold it in full sun, angle it and connect the cable. Watch the input display."
  },
  {
    "q": "How do I take care of it?",
    "a": "Wipe it clean and fold carefully. Keep ports dry."
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
