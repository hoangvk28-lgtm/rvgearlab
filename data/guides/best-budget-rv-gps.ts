export const guideSlug = "best-budget-rv-gps";
export const guideTitle = "4 Best Budget RV Gps in 2026";
export const metaTitle = "Best Budget RV Gps in 2026";
export const metaDescription = "See which budget GPS units fit an RV, from sub-$100 7 and 9 inch navigators with free map updates to a Garmin RV Cam 795 with a built-in dash cam.";
export const mainKeyword = "best budget rv gps";
export const introParagraphs = [
  "Budget RV navigation is a trade between price and how much your rig's size is respected. The cheapest units use car-style maps with a vehicle profile, while a Garmin RV model brings full RV routing at several times the cost.",
  "This list orders the picks from the one RV-specific premium unit down to the lowest-cost options. It also includes one non-navigation item, so read the notes on it before ordering."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31Dvanec4+L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-budget-rv-gps-1",
    "rank": 1,
    "badge": "Best Premium Step-Up",
    "name": "Garmin RV Cam 795",
    "price": "$597.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Dvanec4+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09ZJNSF1C?tag=rvgearlab-amz-20",
    "description": "The Garmin RV Cam 795 is a 7 inch RV navigator with custom routing for RV or trailer profile and a built-in dash cam. It also lists forward collision and lane departure warnings.\n\nIt is the only pick here with true RV routing from a brand that builds it, which puts it far above the sub-$100 units on routing depth. The dash cam adds recording that none of the budget units list in the same way.\n\nIt is the right pick when a budget is flexible and routing quality matters most. It suits owners who also want a dash cam from one device.",
    "specs": [
      "7 inch RV navigator",
      "Built-in dash cam",
      "Collision and lane warnings"
    ],
    "pros": [
      "True custom RV routing",
      "Dash cam built into the unit",
      "Forward collision warnings listed",
      "Brand-name map content"
    ],
    "cons": [
      "Costs many times budget units",
      "Dash cam use is regulated in some places"
    ],
    "bestFor": "Routing and dash cam"
  },
  {
    "id": "best-budget-rv-gps-2",
    "rank": 2,
    "badge": "Best Budget Routing",
    "name": "GPS Navigator for Car Truck RV",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41NGzpkL0sL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HJCWG7L9?tag=rvgearlab-amz-20",
    "description": "The HINYFVOZ 7 inch GPS accepts vehicle height, weight, length and width for custom routing. It carries 2026 North America maps, free lifetime updates and voice guidance in 25 plus languages on a bright touchscreen.\n\nIt undercuts the LONGRUF and Dizvgoy on cost while naming dimension entry directly. That makes it the best fit here for a trailer or motorhome owner who wants profile input.\n\nPick it as a low-cost RV navigator for occasional trips. It works for casual campers who want free updates.",
    "specs": [
      "7 inch HD touchscreen",
      "Vehicle dimension routing",
      "Free lifetime updates"
    ],
    "pros": [
      "Enter height, weight, length and width",
      "Voice in 25 plus languages",
      "Free lifetime map updates",
      "Low price"
    ],
    "cons": [
      "No RV park directory named",
      "Less detailed than Garmin"
    ],
    "bestFor": "Casual campers"
  },
  {
    "id": "best-budget-rv-gps-3",
    "rank": 3,
    "badge": "Best Big Screen Budget",
    "name": "GPS Navigator for Car Truck RV",
    "price": "$88.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418wSumFBTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HB3KT2ZV?tag=rvgearlab-amz-20",
    "description": "The LONGRUF is a 9 inch touchscreen GPS with 2026 US, Canada and Mexico maps and free lifetime updates. It offers four route options (fast, green, short and easy) and search by postcode, address, coordinates or POI.\n\nIts large display sets it apart from the 7 inch budget units. It adds speed cameras and traffic light warnings, which the Dizvgoy also lists.\n\nIt fits drivers who want to read the map at a glance on a big windshield or dash. On budget rv gps, big-screen budget is where it fits.",
    "specs": [
      "9 inch touchscreen",
      "US, Canada, Mexico maps",
      "Four route options"
    ],
    "pros": [
      "Large 9 inch display",
      "Four route choices",
      "Speed camera and light warnings",
      "Free lifetime updates"
    ],
    "cons": [
      "Truck and RV profile not detailed",
      "Bigger unit needs more mounting room"
    ],
    "bestFor": "Big-screen budget"
  },
  {
    "id": "best-budget-rv-gps-4",
    "rank": 4,
    "badge": "Best Basic Navigator",
    "name": "GPS Navigator for Car",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51BmTfY6zqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HDSL6K7V?tag=rvgearlab-amz-20",
    "description": "The Dizvgoy 7 inch GPS offers 2026 North America maps, free lifetime updates and turn-by-turn voice guidance. It adds speed alerts, address, zip and POI search, and an FM transmitter.\n\nIt is close to the HINYFVOZ on price but lacks the dimension entry. It works for cars, trucks and buses, according to its listing.\n\nChoose it for a simple, inexpensive unit with free updates. It suits owners using a small towable and a basic route.",
    "specs": [
      "7 inch, 2026 maps",
      "FM transmitter audio",
      "Free lifetime updates"
    ],
    "pros": [
      "Simple turn-by-turn guidance",
      "Speed alerts included",
      "Free updates",
      "Search by address, zip or POI"
    ],
    "cons": [
      "No vehicle dimension routing named",
      "No RV directory"
    ],
    "bestFor": "Basic navigation"
  }
];

export const howWeEvaluated = [
  {
    "title": "Dimension entry",
    "description": "We compared which listings let you enter vehicle height, weight and length for custom routing."
  },
  {
    "title": "Update cost",
    "description": "We looked for free lifetime updates versus bundled or paid map options."
  },
  {
    "title": "Screen size",
    "description": "We compared 7 and 9 inch displays and how readable each looks in sunlight."
  },
  {
    "title": "Extra features",
    "description": "We noted dash cams, collision warnings and FM audio listed on each page."
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
    "subheading": "By Routing Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "I want true RV routing",
          "Garmin RV Cam 795",
          "Custom RV profile routing"
        ],
        [
          "I want dimension entry for less",
          "HINYFVOZ 7in",
          "Height, weight, length, width entry"
        ],
        [
          "I want the biggest screen",
          "LONGRUF 9in",
          "9 inch touchscreen"
        ],
        [
          "I want a basic navigator",
          "Dizvgoy 7in",
          "Simple guidance with free updates"
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
          "$50 to $90",
          "HINYFVOZ 7in or LONGRUF 9in"
        ],
        [
          "$80 to $600",
          "Dizvgoy 7in or Garmin RV Cam 795"
        ]
      ]
    }
  },
  {
    "subheading": "RV Routing vs Car GPS",
    "cards": [
      {
        "label": "RV routing",
        "text": "Garmin RV Cam 795 and HINYFVOZ 7in use vehicle size when planning."
      },
      {
        "label": "Car style",
        "text": "Dizvgoy 7in and LONGRUF 9in focus on voice guidance and alerts."
      }
    ],
    "note": "Most budget buyers should pick HINYFVOZ 7in unless a Garmin is in reach."
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
          "Under $70",
          "HINYFVOZ 7in"
        ],
        [
          "$70 to $100",
          "LONGRUF 9in or Dizvgoy 7in"
        ],
        [
          "Over $500",
          "Garmin RV Cam 795"
        ]
      ]
    }
  },
  {
    "subheading": "For Occasional Camping Trips Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Dimension entry, free updates and a clear screen."
      },
      {
        "label": "In this comparison",
        "text": "HINYFVOZ 7in lists dimension entry and free updates at a low price."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Garmin RV Cam 795 if routing and recording both matter."
      },
      {
        "label": "Save if",
        "text": "Save with HINYFVOZ 7in or Dizvgoy 7in for light use."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What counts as RV routing",
    "explanation": "Real RV routing uses your rig's height, weight and length to avoid restricted roads. Some budget units say they accept dimensions, while others only offer car routes. Look for the specific dimension fields named on the listing."
  },
  {
    "criterion": "Free updates on cheap units",
    "explanation": "Cheap GPS units often advertise free lifetime updates. That means the maps refresh at no charge, but the method may need a PC or card. Read how updates arrive before relying on them."
  },
  {
    "criterion": "Screen size and glare",
    "explanation": "A 9 inch screen reads easily at a glance while a 7 inch fits more mounts. Sunlight glare can wash out cheap screens. Look for brightness or day and night mode language."
  },
  {
    "criterion": "Power and mount",
    "explanation": "A weak suction mount fails on bumpy roads. A listed car charger and mount matter. Check accessories included in the box."
  },
  {
    "criterion": "Dash cam and alerts",
    "explanation": "A built-in dash cam records incidents but may be regulated in some states. Collision warnings help alertness. Confirm local rules before using the camera."
  },
  {
    "criterion": "Product type check",
    "explanation": "Search results mix GPS devices with unrelated items such as decals. A true navigator lists maps, a touchscreen and voice guidance. Confirm the item is a navigator before you buy."
  }
];

export const faq = [
  {
    "q": "Is a budget GPS safe for an RV?",
    "a": "Treat it as an aid, not a guarantee. Entering dimensions helps, but always check posted bridge heights and weight limits yourself."
  },
  {
    "q": "Is Garmin worth the extra cost?",
    "a": "If you travel often with a large rig, the RV directory and routing are worth it. For occasional use, a budget unit may be enough."
  },
  {
    "q": "What mistake do buyers make?",
    "a": "Buying anything labeled GPS without checking the product type. One listing here is just a decal."
  },
  {
    "q": "How do I set up vehicle dimensions?",
    "a": "Open the vehicle or truck mode and enter the measurements of the loaded rig. Add roof gear to the height."
  },
  {
    "q": "How do I update the maps?",
    "a": "Follow the listing's update method, usually a PC download. Do it before long trips."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best 10 Inch RV Gps",
    "href": "/camping-travel/best-10-inch-rv-gps"
  },
  {
    "title": "Best 9 Inch RV Gps",
    "href": "/camping-travel/best-9-inch-rv-gps"
  },
  {
    "title": "Best Offline RV Gps App",
    "href": "/camping-travel/best-offline-rv-gps-app"
  },
  {
    "title": "Best RV Gps App For Android Auto",
    "href": "/camping-travel/best-rv-gps-app-for-android-auto"
  }
];
