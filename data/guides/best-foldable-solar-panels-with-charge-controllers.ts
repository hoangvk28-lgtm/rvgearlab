export const guideSlug = "best-foldable-solar-panels-with-charge-controllers";
export const guideTitle = "5 Best Foldable Solar Panels With Charge Controllers in 2026";
export const metaTitle = "Best Foldable Solar Panels With Charge";
export const metaDescription = "Five foldable solar panels that ship with a charge controller, compared on wattage, controller type, cable length and weight for 12V battery charging.";
export const mainKeyword = "best foldable solar panels with charge controllers";
export const introParagraphs = [
  "A foldable panel with a controller in the box is the shortest path from sunshine to a 12V battery, because the controller sits between the panel and the battery and stops overcharging. All five here pair a panel with a PWM controller, so the choice comes down to wattage, fold and what the controller shows.",
  "Each kit was compared on stated panel wattage, controller type and display, cable length, weight and folded size, and warranty. PWM controllers are simple and cheap, so the guide also explains when the more efficient MPPT type is worth adding yourself."
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
    "id": "best-foldable-solar-panels-with-charge-controllers-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Holdwell S 100W Portable Solar Panel Kit",
    "price": "$70.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/515v8mtq8SL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GK7K62VC?tag=rvgearlab-amz-20",
    "description": "The Holdwell S is a 100W suitcase panel with A+ monocrystalline cells at up to 25 percent efficiency, a glass surface and an IP67 rating. Its 20A PWM controller has a backlit LCD and LED indicators, and the box includes an MC4 to bare wire cable and an alligator clip.\n\nIt is the only kit here with a controller display and a glass panel, which makes charging easy to read. Compared with the DOKIO 100W kits, it adds an LCD and IP67 at a similar price.\n\nVan and RV owners who like to check panel output at a glance will value it on a 12V battery. The suitcase fold sets up with an adjustable stand.",
    "specs": [
      "100W, 25% efficiency, IP67",
      "20A PWM controller with LCD",
      "Glass panel, adjustable stand"
    ],
    "pros": [
      "Backlit LCD on the controller",
      "Glass panel rated IP67",
      "Adjustable stand included",
      "Alligator clip and MC4 cable in the box"
    ],
    "cons": [
      "PWM controllers are less efficient than MPPT",
      "Bulkier fold than the soft DOKIO panels"
    ],
    "bestFor": "Reading output on a 12V battery",
    "take": "The only kit with a controller display and an IP67 glass panel.",
    "catch": "The folded suitcase is 2.4 inches thick and bulky to pack."
  },
  {
    "id": "best-foldable-solar-panels-with-charge-controllers-2",
    "rank": 2,
    "badge": "Best High Wattage",
    "name": "DOKIO 200W Portable Foldable Solar Panel Kit for 12V Battery Charging",
    "price": "$134.77",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51QvAmMKeVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075SZMFP2?tag=rvgearlab-amz-20",
    "description": "The DOKIO 200W kit lists 9.7 pounds, a folded size of 20 by 27 by 1.1 inches, a standalone PWM controller and a 9.84 foot cable. Dual USB ports supply phones, lamps and small gadgets.\n\nIt is the highest-watt kit here and still slim, with the controller included. Compared with the Holdwell S, it doubles the panel wattage and drops the LCD and glass.\n\nIt suits vans and trailers running a 12V battery bank that need more charge each day. At 1.1 inches thick when folded, it slides under a bed or seat.",
    "specs": [
      "200W, 9.7 lbs, 1.1 in folded",
      "Separate PWM controller",
      "9.84 ft cable, dual USB"
    ],
    "pros": [
      "Highest wattage in the group",
      "Thin when folded",
      "Controller included",
      "Long 9.84 foot cable"
    ],
    "cons": [
      "PWM controller is less efficient than MPPT",
      "Stations may cap input below 200W"
    ],
    "bestFor": "Vans and trailers with a battery bank",
    "take": "A slim 200W kit with a controller and a long cable.",
    "catch": "Some power stations cap input below 200W, so the full output may not reach them."
  },
  {
    "id": "best-foldable-solar-panels-with-charge-controllers-3",
    "rank": 3,
    "badge": "Best Mid Wattage",
    "name": "DOKIO 150W Foldable Solar Panel Suitcase with Charge Controller",
    "price": "$124.77",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51RkNDAseuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GY8684FH?tag=rvgearlab-amz-20",
    "description": "The DOKIO 150W suitcase uses a detachable 12V PWM controller that guards against reversed polarity, overcharging, overload and shorts. Alligator clips go straight on a battery, the cable reaches 9.8 feet, and an adjustable bracket tilts the panel toward the sun. A 25-year transferable power output warranty is listed.\n\nIt sits between the 100W and 200W DOKIO kits on wattage and price. Compared with the Holdwell S, it lists a long warranty and a tilt bracket instead of a display.\n\nIt suits campers who want a plug-and-play 12V charger with a lasting warranty. The rubber handle makes carrying easy.",
    "specs": [
      "150W suitcase, PWM controller",
      "9.8 ft cable, tilt bracket",
      "25-year output warranty"
    ],
    "pros": [
      "Detachable controller with four protections",
      "Alligator clips work out of the box",
      "Adjustable tilt bracket",
      "25-year output warranty"
    ],
    "cons": [
      "Polarity must be checked when clipping on",
      "PWM controller is less efficient than MPPT"
    ],
    "bestFor": "Plug-and-play 12V charging",
    "take": "A 150W suitcase with a long warranty and a tilt bracket.",
    "catch": "Clip red to positive carefully, since polarity matters."
  },
  {
    "id": "best-foldable-solar-panels-with-charge-controllers-4",
    "rank": 4,
    "badge": "Best Compact Kit",
    "name": "DOKIO 100W Portable Foldable Solar Panel Kit with Charge Controller",
    "price": "$83.77",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51rFZlfvrrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07VL3XF96?tag=rvgearlab-amz-20",
    "description": "The DOKIO 100W kit folds to 21 by 20 by 1 inch and weighs 6 pounds. Included are a separate 12V PWM controller, a 9.85 foot extension cable and dual USB ports that work with a 12V battery or in sunlight.\n\nIt weighs the same as the DOKIO 100W Flex and sells for a little more. Compared with the Holdwell S, it is lighter and thinner, with no display.\n\nIt suits van and road trip campers who want a light 100W panel with a long cable. With the extra reach, the controller can rest in shade as the panel faces the sun.",
    "specs": [
      "100W, 6 lbs, 21x20x1 in",
      "Standalone PWM controller",
      "9.85 ft cable, dual USB"
    ],
    "pros": [
      "Light at 6 pounds",
      "Folds to 1 inch thick",
      "Long 9.85 foot cable",
      "Dual USB ports"
    ],
    "cons": [
      "Some power stations accept under 100W",
      "PWM controller is less efficient than MPPT"
    ],
    "bestFor": "Light road trip charging",
    "take": "A light 100W kit with a long cable and USB ports.",
    "catch": "The panel cannot exceed a power station's input cap."
  },
  {
    "id": "best-foldable-solar-panels-with-charge-controllers-5",
    "rank": 5,
    "badge": "Best Budget",
    "name": "DOKIO 100W Portable Foldable Solar Panel Kit for 12V Battery Charging",
    "price": "$68.77",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51qFGApIH+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0748FYFSK?tag=rvgearlab-amz-20",
    "description": "The DOKIO 100W Flex lists 6 pounds, a 19 by 26 by 0.5 inch fold, a 9.84 foot cable and a standalone PWM controller. USB ports run phones and small gadgets from a 12V battery.\n\nIt is the cheapest kit here and the thinnest when folded. Compared with the DOKIO 100W Kit, it is half the thickness and costs less.\n\nIt suits budget campers charging a small 12V battery. The thin fold slides behind a seat or into a van door.",
    "specs": [
      "100W, 6 lbs, 0.5 in folded",
      "PWM controller included",
      "9.84 ft cable, USB ports"
    ],
    "pros": [
      "Lowest price in the group",
      "Very thin when folded",
      "USB ports for phones",
      "Long 9.84 foot cable"
    ],
    "cons": [
      "PWM controller wastes some power",
      "Station input caps can limit charge"
    ],
    "bestFor": "Small 12V batteries on a budget",
    "take": "The cheapest and thinnest controller kit here.",
    "catch": "A PWM controller is less efficient than the MPPT type."
  }
];

export const howWeEvaluated = [
  {
    "title": "Controller type",
    "description": "PWM controllers were compared, with display and protection features noted."
  },
  {
    "title": "Wattage and fold",
    "description": "Panel watts, weight and folded thickness were compared."
  },
  {
    "title": "Cable and clips",
    "description": "Cable length and battery clips were compared."
  },
  {
    "title": "Weather and build",
    "description": "IP rating, glass and warranty were noted."
  },
  {
    "title": "Power station limits",
    "description": "Notes on input caps were flagged for station users."
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
    "subheading": "By Battery Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Small 12V battery, tight budget",
          "DOKIO 100W Flex",
          "Cheapest and thinnest."
        ],
        [
          "Light road trip kit",
          "DOKIO 100W Kit",
          "6 pounds and a long cable."
        ],
        [
          "Want to read output",
          "Holdwell S 100W",
          "LCD controller."
        ],
        [
          "Plug-and-play with warranty",
          "DOKIO 150W Suitcase",
          "25-year output warranty."
        ],
        [
          "Bigger bank in a van",
          "DOKIO 200W Kit",
          "200W and slim."
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
          "$60 to $80",
          "DOKIO 100W Flex or Holdwell S 100W"
        ],
        [
          "$80 to $130",
          "DOKIO 100W Kit or DOKIO 150W Suitcase"
        ],
        [
          "$130 to $140",
          "DOKIO 200W Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Soft Panel vs Glass Suitcase",
    "cards": [
      {
        "label": "Soft panel",
        "text": "Thin and light, easy to stow in a van, with less rigid protection. The DOKIO 100W Flex, DOKIO 100W Kit and DOKIO 200W Kit are in this group."
      },
      {
        "label": "Glass suitcase",
        "text": "Rigid, with a stand and a tougher surface but bulkier to carry. The Holdwell S 100W and DOKIO 150W Suitcase are in this group."
      }
    ],
    "note": "Most vanlifers should pick a DOKIO 100W Kit, and campers who set up at one site can pick the Holdwell S 100W."
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
          "Lowest cost",
          "DOKIO 100W Flex"
        ],
        [
          "Mid price, LCD",
          "Holdwell S 100W"
        ],
        [
          "Mid price, warranty",
          "DOKIO 150W Suitcase"
        ],
        [
          "Highest watts",
          "DOKIO 200W Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Charging a Van Battery",
    "cards": [
      {
        "label": "Look for",
        "text": "A panel big enough for daily draw, a controller with the right protections and a cable that reaches shade."
      },
      {
        "label": "In this comparison",
        "text": "The DOKIO 200W Kit lists 200W with a standalone controller, and the Holdwell S 100W adds an LCD."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the DOKIO 200W Kit for more daily charge, or the Holdwell S 100W for an LCD."
      },
      {
        "label": "Save if",
        "text": "Save with the DOKIO 100W Flex for a basic controller kit."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "PWM versus MPPT",
    "explanation": "A PWM controller pulls the panel voltage down to the battery's, wasting the difference. An MPPT controller converts the extra voltage into amps, often gaining 10 to 30 percent in cool, bright conditions. PWM suits small panels and 12V batteries. Look for the controller type on the listing."
  },
  {
    "criterion": "Match panel to battery",
    "explanation": "A 100W panel in good sun makes about 5 to 6 amps at 12 volts. A 200W panel doubles that. Match the wattage to your battery size and daily draw. Check your battery's amp-hours and use."
  },
  {
    "criterion": "Battery chemistry",
    "explanation": "Lead-acid, AGM and gel cells need different charge profiles. A lithium (LiFePO4) battery may need a controller with a lithium mode. Look for the battery types the listing names."
  },
  {
    "criterion": "Polarity first",
    "explanation": "Clipping alligator clips on the wrong way can damage the controller. Connect the controller to the battery before the panel. Look for reverse polarity protection."
  },
  {
    "criterion": "Cable and shade",
    "explanation": "A long cable lets you leave the controller and battery in shade while the panel sits in sun. Shade on one corner of a panel can cut output sharply. Check the cable length."
  }
];

export const faq = [
  {
    "q": "Do I need a charge controller with a foldable panel?",
    "a": "Yes, if you charge a 12V battery directly. The controller prevents overcharging. All five kits here include one."
  },
  {
    "q": "What is the biggest mistake with panel kits?",
    "a": "Connecting the panel before the battery. Connect the controller to the battery first, then the panel. Check the polarity of the clips."
  },
  {
    "q": "Is MPPT worth it over PWM?",
    "a": "For larger panels and cold, bright conditions, yes. For a 100W panel and a small battery, the PWM controller in the DOKIO 100W Kit is enough."
  },
  {
    "q": "How do I set up a panel kit?",
    "a": "Clip the controller to the battery first, then connect the panel and angle it at the sun. Keep the controller in shade."
  },
  {
    "q": "Can I use these with a power station?",
    "a": "Some can, but station input limits vary. The DOKIO 100W Kit notes that the panel cannot exceed a station's input cap. Check your station's limit."
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
