export const guideSlug = "best-foldable-solar-panels-for-caravans";
export const guideTitle = "2 Best Foldable Solar Panels For Caravans in 2026";
export const metaTitle = "Best Foldable Solar Panels For Caravans in 2026";
export const metaDescription = "Two foldable solar panels for caravan use compared: a clip-on 100W suitcase for a leisure battery and a slim 200W panel for a portable power station.";
export const mainKeyword = "best foldable solar panels for caravans";
export const introParagraphs = [
  "Caravan owners usually ask for one of two things from a foldable panel: charge the leisure battery on a site with no mains, or feed a portable power station. Only two listings fit cleanly, one for each job, so this guide is a short, honest pairing.",
  "The pair was compared on stated wattage, how each connects, weight, folded size, warranty and cable length. Neither is a roof-mounted panel, so both suit owners who prefer to park the caravan in shade and set the panel in the sun."
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
    "id": "best-foldable-solar-panels-for-caravans-1",
    "rank": 1,
    "badge": "Best for Leisure Batteries",
    "name": "DOKIO Foldable Solar Panel 100 Watt Monocrystalline Solar Suitcase Portable with Controller to Charge 12V Batt",
    "price": "$84.77",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51ZoRLmsG6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07VN68ZBV?tag=rvgearlab-20",
    "description": "The DOKIO 100W suitcase clips straight onto a 12V battery with alligator leads and a smart PWM controller. The listing gives a 9.8 foot lead, two 5V 2A USB outlets and a transferable 25 year output guarantee, and names vented, AGM and gel batteries.\n\nIt needs no extra gear to charge a leisure battery, and the long cable lets the panel stand in sun while the battery sits in shade. Compared with the GRECELL, it costs far less and has half the watts.\n\nIt suits caravaners who want to top up a leisure battery on a campsite with no mains. The USB ports charge phones from the panel.",
    "specs": [
      "100W, smart PWM controller",
      "9.8 ft cable, USB 5V 2A",
      "Clip-on 12V battery charging"
    ],
    "pros": [
      "Clips straight onto the 12V battery",
      "Long cable keeps the battery in shade",
      "USB ports charge phones",
      "25-year output warranty listed"
    ],
    "cons": [
      "Clip polarity must be checked",
      "PWM controller is less efficient than MPPT"
    ],
    "bestFor": "Topping up a leisure battery",
    "take": "A plug-and-play 100W panel for a leisure battery.",
    "catch": "Clip polarity matters, so match red to positive carefully."
  },
  {
    "id": "best-foldable-solar-panels-for-caravans-2",
    "rank": 2,
    "badge": "Best for Power Stations",
    "name": "200W Portable Solar Panel for Power Station Generator",
    "price": "$189.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41EY-TitQPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B9SMD8BC?tag=rvgearlab-20",
    "description": "The GRECELL UB200 lists 23.5 percent cells, 10.14 pounds and a folded size of 21.46 by 22.95 by 1.77 inches. It has four connectors (DC7909, XT60, aviation and Anderson) and auto-optimization that reconnects when sunlight returns.\n\nIt weighs far less than a rigid suitcase kit and gives twice the watts of the DOKIO. Compared with the DOKIO, it connects to a station's solar input instead of clipping onto a battery.\n\nIt suits caravan owners who run a portable power station for lights, a fridge and devices. The slim fold stores flat behind a seat.",
    "specs": [
      "200W, 23.5% cells, 10.14 lbs",
      "21.5 x 23 x 1.8 in folded",
      "4 connectors, auto reconnect"
    ],
    "pros": [
      "Light at 10.14 pounds",
      "Slim 1.77 inch fold",
      "Four connector types",
      "Reconnects after clouds pass"
    ],
    "cons": [
      "No IP rating is stated",
      "Priced well above the DOKIO"
    ],
    "bestFor": "Feeding a portable power station",
    "take": "A slim, light 200W panel with four connector types.",
    "catch": "It flexes only to a limited angle."
  }
];

export const howWeEvaluated = [
  {
    "title": "Use case split",
    "description": "Panels were sorted by whether they charge a leisure battery or a power station."
  },
  {
    "title": "Wattage and weight",
    "description": "Printed watts and pounds were compared."
  },
  {
    "title": "Connectors",
    "description": "Clips, XT60 and Anderson plugs were noted."
  },
  {
    "title": "Warranty",
    "description": "Output warranties were compared."
  },
  {
    "title": "Fold and storage",
    "description": "Folded size was noted for caravan storage."
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
    "subheading": "By Power Source",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "12V leisure battery",
          "DOKIO 100W Suitcase",
          "Clips on with its own controller."
        ],
        [
          "Portable power station",
          "GRECELL UB200",
          "200W with four connectors."
        ],
        [
          "Tight storage",
          "GRECELL UB200",
          "1.77 inch fold."
        ],
        [
          "Tight budget",
          "DOKIO 100W Suitcase",
          "Far lower price."
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
          "$80 to $90",
          "DOKIO 100W Suitcase"
        ],
        [
          "$180 to $190",
          "GRECELL UB200"
        ]
      ]
    }
  },
  {
    "subheading": "Battery Clips vs Station Connectors",
    "cards": [
      {
        "label": "Battery clips",
        "text": "Charge a 12V battery directly through a controller. The DOKIO 100W Suitcase is in this group."
      },
      {
        "label": "Station connectors",
        "text": "Plug into a power station's solar input. The GRECELL UB200 is in this group."
      }
    ],
    "note": "Pick the DOKIO 100W Suitcase for a leisure battery and the GRECELL UB200 for a power station."
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
          "DOKIO 100W Suitcase"
        ],
        [
          "Premium",
          "GRECELL UB200"
        ]
      ]
    }
  },
  {
    "subheading": "Caravans on Sites With No Mains",
    "cards": [
      {
        "label": "Look for",
        "text": "A panel that matches how your caravan stores power and a cable long enough to reach sun."
      },
      {
        "label": "In this comparison",
        "text": "The DOKIO 100W Suitcase clips to a leisure battery, and the GRECELL UB200 feeds a station."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the GRECELL UB200 for a station with a larger input."
      },
      {
        "label": "Save if",
        "text": "Save with the DOKIO 100W Suitcase for a leisure battery."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Leisure battery charging",
    "explanation": "A 12V leisure battery needs a charge controller to stop overcharging. The DOKIO 100W Suitcase includes one, and a power station has its own. Check which one your setup needs."
  },
  {
    "criterion": "Daily energy math",
    "explanation": "A 100W panel in good sun yields roughly 300 to 500 watt-hours a day. A caravan fridge and lights may use more. Add up your daily use."
  },
  {
    "criterion": "Battery type",
    "explanation": "Lead-acid, AGM and gel need different charge profiles, and lithium needs its own. A controller set for the wrong chemistry can undercharge or stress the cells. Look for the battery types named on the listing."
  },
  {
    "criterion": "Parking in shade",
    "explanation": "A caravan in shade with a panel in sun needs a long cable. A 9.8 foot cable is a minimum. Check the length."
  },
  {
    "criterion": "Roof panels vs foldable",
    "explanation": "A roof panel charges every day without setup, while a foldable needs setting out. Foldables suit shorter stays and rental caravans. Check how long your stays are."
  }
];

export const faq = [
  {
    "q": "Can I charge a caravan battery with a foldable panel?",
    "a": "Yes. The DOKIO 100W Suitcase has a controller and clips onto a 12V battery."
  },
  {
    "q": "What is the biggest mistake with caravan panels?",
    "a": "Skipping the controller. Connecting a panel directly to a battery can overcharge it. Use the included controller."
  },
  {
    "q": "Is the GRECELL worth it over the DOKIO?",
    "a": "If you run a power station, yes. If you charge a 12V battery, the DOKIO 100W Suitcase is simpler."
  },
  {
    "q": "How do I set up a foldable panel at a caravan site?",
    "a": "Place the panel in sun facing the sun, run the cable to the battery or station in shade and check the charge. Move the panel as the sun moves."
  },
  {
    "q": "Can I leave the panel out in the rain?",
    "a": "Check the rating. The GRECELL UB200 lists no IP rating, so bring it in when it rains."
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
