export const guideSlug = "best-rv-range-hood-fan";
export const guideTitle = "1 Best RV Range Hood Fan in 2026";
export const metaTitle = "Best RV Range Hood Fan in 2026";
export const metaDescription = "A 12V slim RV range hood with a dual-speed fan, LED light and charcoal filter, reviewed for fit, airflow and who it suits in compact kitchens.";
export const mainKeyword = "best rv range hood fan";
export const introParagraphs = [
  "Cooking in a small coach fills the cabin with steam, grease and odors in minutes. A frying pan on a two-burner cooktop can leave the whole rig smelling like last night's dinner, and the grease settles on cabinets, curtains and ceilings. A real range hood captures that air right above the cooktop, which is far more effective than cracking a window or running a roof fan across the room.",
  "Be careful with search results for this topic. Many listings that appear for range hood fan are actually replacement motors, roof vent fans or bathroom exhaust fans, which do not sit above a cooktop and do not have a light, a filter or a hood shape. A genuine RV range hood is a slim housing with a fan, a lamp and usually a filter, built to fit a standard cabinet opening and run from the coach's 12 volt system.",
  "This guide covers one genuine 12V RV range hood, the Greystone 22 inch slim model, and weighs it against the two things owners usually use instead: a roof vent fan over the stove, or a recirculating clip-on unit. We looked at width, airflow, speed settings, lighting and filter type. The decision is whether a dedicated hood is worth installing over a simple vent, and whether 22 inches fits your cabinet opening."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31hidBkF7ZL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-range-hood-fan-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Greystone",
    "price": "$92.22",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31hidBkF7ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FCFX15TD?tag=rvgearlab-amz-20",
    "description": "The Greystone is a 22 inch super slim, vented range hood that runs on 12 volts, so it works straight from the coach battery system. It moves about 200 cubic meters of air per hour through a dual-speed fan, and it includes a built-in 12 volt LED lamp over the cooktop. A three-layer charcoal filter helps absorb odors, and the low profile preserves headroom in a compact kitchen. It costs $92.22.\n\nCompared with a roof vent fan, which sits several feet from the stove, the Greystone captures steam and grease at the source before it spreads through the cabin. Against a basic clip-on or recirculating unit, it brings real airflow and a two-speed fan that adjusts to light simmering or heavy frying. The LED light also replaces the dim glow of a cabin overhead, making it easier to see what you are cooking.\n\nThis is the pick for owners replacing a worn hood or adding one above a cooktop in a travel trailer, camper van or small motorhome. It suits cooks who fry or boil often and want to keep their small living space fresh and clean.",
    "specs": [
      "22 inch slim profile",
      "200 m3/h airflow",
      "Dual-speed, 12V LED light"
    ],
    "pros": [
      "Slim profile saves space in compact kitchens",
      "Dual-speed fan adjusts to light or heavy cooking",
      "Built-in 12V LED lights the cooktop",
      "Three-layer charcoal filter helps with odors"
    ],
    "cons": [
      "22 inch width must match your cabinet opening",
      "Charcoal filters need periodic replacement"
    ],
    "bestFor": "Owners adding a hood above an RV cooktop"
  }
];

export const howWeEvaluated = [
  {
    "title": "Fit and profile",
    "description": "RV kitchens have tight cabinet openings and low headroom. We compared the 22 inch width and super slim profile against typical cabinet dimensions, favoring hoods that leave room for cooking and that do not poke into the cook's head space."
  },
  {
    "title": "Airflow and fan speeds",
    "description": "A hood needs enough airflow to clear a pan's steam and smoke. We compared the stated 200 cubic meters per hour and the two-speed fan, since a low setting for simmering and a high setting for frying make the hood more useful."
  },
  {
    "title": "Lighting",
    "description": "A good hood also lights the cooktop. We looked at the built-in 12 volt LED lamp, since a bright light directly above the burners makes cooking safer and replaces the dim glow of cabin lights in a compact kitchen."
  },
  {
    "title": "Filtration and ventilation type",
    "description": "Charcoal filters help absorb odors, and a vented hood moves air outside. We compared the three-layer charcoal filter and the vented design, and we noted that filters wear out and need regular replacement to keep working."
  },
  {
    "title": "Power use and installation",
    "description": "A 12 volt hood must run from the coach battery system without drawing excessive power. We compared the 12 volt design, the wiring needs and the cutout size to judge how easily it replaces or adds a hood in common RV layouts."
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
    "subheading": "By Cabinet Opening Width",
    "intro": "The width of the cabinet opening above your cooktop is the first thing to check, since a hood that does not fit means cutting cabinets. Measure before you do anything else.",
    "table": {
      "headers": [
        "Your opening",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "About 22 inches wide above the cooktop",
          "Greystone 22 inch Slim 12V Range Hood",
          "Matches the 22 inch width and slides into a standard RV cabinet opening."
        ],
        [
          "Narrower than 22 inches",
          "A smaller hood, since the Greystone 22 inch will not fit without cabinet changes",
          "Measure first, because a 22 inch hood needs the full width."
        ],
        [
          "Wider than 22 inches",
          "Greystone 22 inch with a trim panel to fill the gap",
          "A slim 22 inch hood can be paired with trim for a clean finished look."
        ],
        [
          "No existing hood opening at all",
          "Greystone 22 inch, with a new cutout planned carefully",
          "A slim profile makes adding a hood possible in a compact kitchen."
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "RV range hoods are inexpensive compared with most appliances, and the price differences are small. Here is how the Greystone fits into a typical kitchen upgrade.",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $50 for a basic fan",
          "A simple vent fan instead of the Greystone, though it does not capture cooking fumes at the source."
        ],
        [
          "Around $92 for a real hood",
          "Greystone 22 inch at $92.22 includes a dual-speed fan, an LED lamp and a charcoal filter."
        ],
        [
          "$150 and up for a premium kitchen",
          "A larger or ducted hood with higher airflow, if your kitchen has the space for it."
        ]
      ]
    }
  },
  {
    "subheading": "Range Hood vs Roof Vent Fan",
    "intro": "Many RVs rely on a roof vent fan rather than a hood. Each approach pulls air differently, so it helps to know what you gain and lose.",
    "cards": [
      {
        "label": "Range hood",
        "text": "The Greystone 22 inch sits directly above the cooktop and captures steam and grease at the source with a dual-speed fan. The LED lamp lights the burners, and the charcoal filter helps with odors, which keeps the cabin cleaner."
      },
      {
        "label": "Roof vent fan",
        "text": "A roof vent fan pulls air from the whole cabin and exhausts it through the roof. It works well for general ventilation and humidity, but it is farther from the stove, so it is less effective at catching grease and cooking smoke."
      }
    ],
    "note": "Most owners who cook often should add a range hood, and keep the roof fan for general ventilation and humidity."
  },
  {
    "subheading": "By Cooking Style",
    "intro": "How you cook decides how much fan power and filtration you need. This second axis ties your habits to the way the hood runs and how often you will use each speed.",
    "table": {
      "headers": [
        "Your cooking",
        "Recommended pick"
      ],
      "rows": [
        [
          "Frequent frying and searing",
          "Greystone 22 inch on high speed, which moves about 200 cubic meters per hour."
        ],
        [
          "Simmering, boiling and coffee",
          "Greystone 22 inch on low speed, which keeps noise down while clearing steam."
        ],
        [
          "Occasional cooking, mostly outdoors",
          "Greystone 22 inch used sparingly, or skip the hood and rely on your roof fan."
        ]
      ]
    }
  },
  {
    "subheading": "For Compact Travel Trailer and Van Kitchens Specifically",
    "intro": "Small kitchens leave little room for bulky hoods and have shorter cooks standing close to the cooktop. A slim profile and a dedicated light matter even more here.",
    "cards": [
      {
        "label": "Look for",
        "text": "A slim housing that leaves headroom, a 12 volt design that runs from the coach battery, a dual-speed fan, a built-in LED lamp and a replaceable charcoal filter. Measure your cabinet opening and cutout depth before you order."
      },
      {
        "label": "In this comparison",
        "text": "The Greystone is a 22 inch super slim 12 volt hood with a dual-speed fan, 12 volt LED light and three-layer charcoal filter, so it covers those needs for a travel trailer or camper van kitchen."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "At $92.22, a range hood is a modest purchase, and the question is more about installation effort and filters than about the price tag. Here is how to decide.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend on the Greystone 22 inch and a supply of replacement charcoal filters if you cook daily in your RV, want a clean cabin and appreciate a dedicated cooktop light. The ongoing filter cost is small."
      },
      {
        "label": "Save if",
        "text": "Save by skipping a dedicated hood if you cook outdoors most of the time and run a roof vent fan inside. Occasional boiling water does not need a hood, and you can spend the money elsewhere."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Hood width and cabinet fit",
    "explanation": "A range hood must fit the cabinet opening, so width is the first measurement to make. The Greystone is 22 inches wide. Measure the opening above your cooktop, including depth and the distance to the cabinet face, and compare those numbers with the hood's dimensions in the product details before you order, leaving a little clearance for the mounting screws and trim."
  },
  {
    "criterion": "Airflow rating",
    "explanation": "Airflow tells you how fast a hood moves air, shown in cubic meters or cubic feet per minute. The Greystone moves about 200 cubic meters per hour, which is a respectable rate for a small kitchen. Compare the figure across hoods, and remember that a very strong fan in a tiny cabin can be noisy, so check how loud the high setting is before you buy."
  },
  {
    "criterion": "Speed settings",
    "explanation": "A single speed forces you to choose between noisy and ineffective. A dual-speed fan lets you run low for simmering and high for frying. The Greystone has two speeds. Look for the number of speeds in the title or bullet points, and check how the controls are laid out on the front, since a switch you can reach with greasy hands is a plus."
  },
  {
    "criterion": "Filter type and replacement",
    "explanation": "A charcoal filter absorbs odors, and a grease filter traps oil. The Greystone has a three-layer charcoal filter, which wears out and needs replacing every so often. Check which replacement filters fit the model, how easy they are to find and what they cost over a few years of regular cooking, because a cheap hood with costly filters is not a bargain."
  },
  {
    "criterion": "Light and 12 volt power",
    "explanation": "A good hood lights the cooktop and runs from the coach's 12 volt system. The Greystone has a built-in LED lamp and a 12 volt fan. Check the power draw if you boondock, and look at the wiring requirements, since a 12 volt hood needs a fused supply from the coach battery, with a fuse sized for the hood's draw."
  },
  {
    "criterion": "Profile and venting method",
    "explanation": "A slim profile saves headroom, and a vented hood moves air outside, while a recirculating hood filters air and returns it. The Greystone is a super slim vented hood. Check the depth and the duct or vent requirements, and plan how the exhaust will leave your RV through the wall or roof, and keep the opening weatherproof against rain and road spray."
  }
];

export const faq = [
  {
    "q": "Will a 22 inch hood fit my RV?",
    "a": "Many RV cabinet openings are around 22 inches, but sizes vary, so measure first. Check the width, depth and the distance between the cooktop and the bottom of the cabinet, and compare them with the product dimensions. If your opening is a different size, you may need trim or a different hood."
  },
  {
    "q": "Does it run on 12 volts?",
    "a": "Yes, the Greystone runs on the coach's 12 volt system, which means it works with your house batteries and does not need shore power. Wire it with a fuse suited to its draw, and check that your battery bank can handle the load if you boondock and cook often."
  },
  {
    "q": "Is a range hood worth it over a roof vent fan?",
    "a": "If you cook often, yes. At $92.22, the Greystone captures steam and grease right above the burners, which a roof fan across the room cannot do. If you rarely cook inside, a roof vent fan is enough, and you can skip the installation work and the added cost."
  },
  {
    "q": "How do I install a range hood in an RV?",
    "a": "Disconnect power, remove the old hood if there is one and confirm the cutout size. Connect the 12 volt wiring through a fused circuit, secure the hood to the cabinet and seal any vent opening to keep out weather. Follow the maker's instructions carefully, and test the fan and light before closing everything up."
  },
  {
    "q": "How often do I replace the charcoal filter?",
    "a": "Replace it when odors start to linger, which depends on how often you cook and what you cook. Many owners swap filters a few times a year. Wash any reusable grease screens regularly, and keep spare charcoal filters on hand so you never run without one."
  },
  {
    "q": "Can the hood handle grease and smoke?",
    "a": "The dual-speed fan and filter help with steam, odors and light grease, and high speed handles frying. For heavy smoke, open a window or vent as well. Clean the hood surface and screens regularly to prevent grease from building up and becoming a fire hazard."
  }
];

export const bottomLine = [
  "The Greystone 22 inch slim range hood is a practical upgrade for any RV kitchen where cooking fills the cabin with steam and odors. A 12 volt design, 200 cubic meters per hour of airflow, two speeds, an LED lamp and a three-layer charcoal filter give you a complete hood for $92.22.",
  "Measure your cabinet opening first, since 22 inches has to fit, and keep spare charcoal filters on hand. If you rarely cook inside, a roof vent fan may be enough, but for regular cooks the Greystone is a worthwhile addition."
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best RV Vent Fan",
    "href": "/interior-comfort/best-rv-vent-fan"
  },
  {
    "title": "Best Brushless RV Vent Fan",
    "href": "/interior-comfort/best-brushless-rv-vent-fan"
  },
  {
    "title": "Best RV Refrigerator Vent Fan",
    "href": "/interior-comfort/best-rv-refrigerator-vent-fan"
  },
  {
    "title": "Best RV Vent Fan With Led Light",
    "href": "/interior-comfort/best-rv-vent-fan-with-led-light"
  }
];
