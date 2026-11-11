export const guideSlug = "best-truck-tents";
export const guideTitle = "5 Best Truck Tents in 2026";
export const metaTitle = "Best Truck Tents in 2026";
export const metaDescription = "Best truck bed tents for pickup campers compared on bed-length fit, interior size, waterproofing and setup, from a 5 ft box to a 6.5 ft box.";
export const mainKeyword = "best truck tents";
export const introParagraphs = [
  "A truck bed tent turns the box of your pickup into a raised, dry sleeping platform, which keeps you off wet ground and away from critters. The first filter is always bed length, because these tents are cut to fit a specific range and a loose fit lets rain and wind in.",
  "Five pole tents made the list after I set aside the Napier Sportz Link, a ground-tent add-on that needs a Napier truck tent to work. The five were compared on listed bed range, interior size, fabric ratings and extras like cable tunnels."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-lakeside-campsite.webp";
export const heroImageAlt = "Colorful tents pitched beside a misty mountain lake";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-truck-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Napier Backroadz Truck Tent",
    "price": "$183.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41LQM6RgQcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07HXC4QZC?tag=rvgearlab-amz-20",
    "description": "The Napier Backroadz is a two-person truck tent with a full rainfly, reinforced taped seams, storm flaps over windows, doors and vents, and nine adjustable straps that lock it to the truck. A color-coded pole system gets it up in under 10 minutes.\n\nThe listing says Napier works with automotive manufacturers' engineers on fit. That makes it the pick for a tailored fit and storm details that the cheaper brands do not spell out.\n\nIt suits couples who camp in changeable weather and want a mature design. The optimized headroom and large door make getting in easier.",
    "specs": [
      "Full rainfly, taped seams",
      "Nine adjustable straps",
      "Under 10-minute setup"
    ],
    "pros": [
      "Storm flaps cover windows, door and vents",
      "Strap system locks the tent to the truck",
      "Color-coded poles speed setup",
      "Sized for sleeping two"
    ],
    "cons": [
      "Costs far more than the other four tents",
      "Check which bed length your listing covers"
    ],
    "bestFor": "Couples facing changeable weather",
    "take": "The most polished design here, with storm flaps and a strap-down fit.",
    "catch": "It costs roughly twice the next tent, and the right bed size must be selected."
  },
  {
    "id": "best-truck-tents-2",
    "rank": 2,
    "badge": "Best Budget Family",
    "name": "VEVOR Truck Bed Tent",
    "price": "$85.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VJ20t0AcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1C8ZQYN?tag=rvgearlab-amz-20",
    "description": "The VEVOR fits beds from 5.5 to 6 ft and suits 2 to 3 people, with a PU2000mm double layer, a 120g fully sewn PE floor and 9 mm thickened fiberglass poles. It has 5.58 ft of middle headroom, a small window and a skylight.\n\nCompared with the WildFinder tents, it states more of its build details, including floor weight and pole diameter. It costs a bit more than the WildFinder 5.5-6.0 and less than the Napier.\n\nIt suits small families who want a roomy middle headroom. The listing names the Ford F150 and Dodge Ram 1500 among compatible trucks.",
    "specs": [
      "5.5 to 6 ft beds",
      "PU2000 double layer",
      "9 mm fiberglass poles"
    ],
    "pros": [
      "5.58 ft headroom in the middle",
      "Fully sewn PE floor",
      "Skylight for stargazing",
      "Fits 2 to 3 people"
    ],
    "cons": [
      "Only one small window listed",
      "PU2000 rating is below the WildFinder"
    ],
    "bestFor": "Small families on a budget",
    "take": "A mid-low priced tent that spells out its floor and poles, with good headroom.",
    "catch": "A single small window limits airflow on warm nights."
  },
  {
    "id": "best-truck-tents-3",
    "rank": 3,
    "badge": "Best for Long Short Beds",
    "name": "GoHimal Pickup Truck Bed Tent",
    "price": "$71.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418v0eY+pGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BQYNZYFG?tag=rvgearlab-amz-20",
    "description": "The GoHimal is made for 6.5 ft beds and measures 102 by 65 by 67 inches. It uses 210D Oxford polyester with PU2000, a double layer, fiberglass poles, a large entry door and two windows.\n\nIt is the only 6.5 ft pick here, so it is where a full-size short-box owner should start. A net bag and a two-in-one side storage bag keep small gear tidy, and it undercuts the VEVOR on price.\n\nIt suits two adults who need a 6.5 ft fit at a low price. The double-layer build adds ventilation and cold resistance.",
    "specs": [
      "6.5 ft bed fit",
      "102 x 65 x 67 in interior",
      "210D Oxford, PU2000"
    ],
    "pros": [
      "Only 6.5 ft fit in this list",
      "Net bag and side bag storage",
      "Large door and two windows",
      "Lower price than the VEVOR"
    ],
    "cons": [
      "Two-person capacity only",
      "Fiberglass poles flex more than aluminum"
    ],
    "bestFor": "6.5 ft bed owners",
    "take": "The bed-length-specific pick for 6.5 ft boxes at a low price.",
    "catch": "Fiberglass poles and a PU2000 coating suit fair weather rather than storms."
  },
  {
    "id": "best-truck-tents-4",
    "rank": 4,
    "badge": "Best for Power Cables",
    "name": "WildFinder Truck Bed Tent",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51zsspyICrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DWFDWD1Z?tag=rvgearlab-amz-20",
    "description": "The WildFinder 5.5-6.0 ft has an 88.6 by 74.8 by 63 inch interior for two people, with three ventilated windows and 210D polyester oxford rated PU3000mm. A connection tunnel lets power cables and air conditioning run from the truck into the tent.\n\nAgainst the VEVOR it has a higher waterproof rating and the cable tunnel, which that listing does not mention. It also costs about 25 dollars less.\n\nIt suits campers who run a cord or AC hose from the truck into the tent. The color-coded pole system and manual keep setup simple.",
    "specs": [
      "5.5 to 6.0 ft beds",
      "PU3000mm, 210D oxford",
      "Cable and AC tunnel"
    ],
    "pros": [
      "Higher waterproof rating than the VEVOR",
      "Cable and AC tunnel built in",
      "Three ventilated windows",
      "Color-coded poles"
    ],
    "cons": [
      "Sized for two people",
      "No stated pole material"
    ],
    "bestFor": "Campers running power or AC",
    "take": "A low-cost 5.5 to 6 ft tent with PU3000 fabric and a power cable tunnel.",
    "catch": "Check any AC unit's draw against your power source."
  },
  {
    "id": "best-truck-tents-5",
    "rank": 5,
    "badge": "Best for Compact Beds",
    "name": "WildFinder Truck Bed Tent",
    "price": "$55.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51zsspyICrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FFMJ6HRK?tag=rvgearlab-amz-20",
    "description": "The WildFinder 5.0-5.4 ft is made for shorter beds and lists the same connection tunnel for power cables and air conditioning. It uses 210D polyester oxford with a PU3000mm coating and a color-coded pole system.\n\nNo tent here costs less, and it is the smallest, built for 5.0 to 5.4 ft boxes where the 5.5 to 6 ft tents will not fit. Against the 5.5-6.0 model it lists the same tunnel and PU3000 fabric for a shorter bed.\n\nIt suits owners of compact pickups with short beds. Bed length, not brand, decides the fit, so measure first.",
    "specs": [
      "5.0 to 5.4 ft beds",
      "PU3000mm waterproof",
      "Cable and AC tunnel"
    ],
    "pros": [
      "Lowest price in the group",
      "Fits compact short beds",
      "Cable and AC tunnel included",
      "Color-coded poles"
    ],
    "cons": [
      "Only for 5.0 to 5.4 ft beds",
      "Interior dimensions are not clearly listed"
    ],
    "bestFor": "Compact pickup owners",
    "take": "The cheapest tent here, made for compact short-bed trucks.",
    "catch": "Match the bed range carefully, since a longer box needs a different tent."
  }
];

export const howWeEvaluated = [
  {
    "title": "Bed-length fit",
    "description": "The bed range each listing is cut for."
  },
  {
    "title": "Interior size",
    "description": "Listed dimensions and headroom."
  },
  {
    "title": "Waterproof build",
    "description": "PU ratings, floor and seam details."
  },
  {
    "title": "Ventilation and extras",
    "description": "Windows, skylights and cable tunnels."
  },
  {
    "title": "Setup speed",
    "description": "Pole type and instructions."
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
    "subheading": "By Bed Length",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "5.0 to 5.4 ft compact bed",
          "WildFinder 5.0-5.4 ft",
          "Built for compact boxes."
        ],
        [
          "5.5 to 6 ft bed, family",
          "VEVOR 5.5-6 ft",
          "5.58 ft headroom."
        ],
        [
          "5.5 to 6 ft bed, power",
          "WildFinder 5.5-6.0 ft",
          "Cable tunnel, PU3000."
        ],
        [
          "6.5 ft bed",
          "GoHimal 6.5FT",
          "Only 6.5 ft fit."
        ],
        [
          "Any fit with storm protection",
          "Napier Backroadz",
          "Storm flaps and straps."
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
          "$50 to $60",
          "WildFinder 5.0-5.4 ft or WildFinder 5.5-6.0 ft"
        ],
        [
          "$70 to $90",
          "GoHimal 6.5FT or VEVOR 5.5-6 ft"
        ],
        [
          "$180 to $190",
          "Napier Backroadz"
        ]
      ]
    }
  },
  {
    "subheading": "Premium Brand vs Budget Brand",
    "cards": [
      {
        "label": "Premium brand",
        "text": "Napier Backroadz costs more and spells out taped seams, storm flaps and nine straps. It suits harsher weather."
      },
      {
        "label": "Budget brands",
        "text": "VEVOR 5.5-6 ft, GoHimal 6.5FT and the WildFinder tents cost far less and keep to fair-weather protection."
      }
    ],
    "note": "Most casual campers should pick the WildFinder 5.5-6.0 ft, and storm campers the Napier Backroadz."
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
          "Under $60",
          "WildFinder 5.0-5.4 ft or WildFinder 5.5-6.0 ft"
        ],
        [
          "Around $70",
          "GoHimal 6.5FT"
        ],
        [
          "Around $85",
          "VEVOR 5.5-6 ft"
        ],
        [
          "Premium",
          "Napier Backroadz"
        ]
      ]
    }
  },
  {
    "subheading": "Running Power to the Tent Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A cable and AC tunnel and a power source sized for the load"
      },
      {
        "label": "In this comparison",
        "text": "WildFinder 5.5-6.0 ft and WildFinder 5.0-5.4 ft both list a connection tunnel for cables and AC. Size any appliance to your battery or generator, and keep generators outside and downwind."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Napier Backroadz if you camp in rough weather and want storm flaps and a strap-down fit."
      },
      {
        "label": "Save if",
        "text": "Save with the WildFinder tents or GoHimal 6.5FT if you camp in fair weather and just need a correct bed fit."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Measure your bed",
    "explanation": "Truck beds vary even within one model, so a tent made for 5.5 to 6 ft cannot cover a 6.5 ft box. A bad fit leaves gaps for wind and rain. Measure from bulkhead to closed tailgate and match the listing range."
  },
  {
    "criterion": "Waterproof rating",
    "explanation": "A PU rating shows how much water pressure the fabric resists, with PU3000 better than PU2000 in a storm. Taped seams and a rainfly matter as much as the number. Look for the PU value and the words taped seams."
  },
  {
    "criterion": "Strap and anchor system",
    "explanation": "The tent must stay on the truck in wind. Adjustable straps and tie-downs give a firm fit. Look for the number of straps and attachment points in the listing."
  },
  {
    "criterion": "Ventilation",
    "explanation": "Windows and vents limit condensation inside a small tent. A tent with a single window gets stuffy. Count the windows and check for a mesh skylight."
  },
  {
    "criterion": "Cable and AC tunnel",
    "explanation": "A tunnel lets you run power cables or an AC hose into the tent without leaving a door open. It is useful but you must size any appliance to your power source. Check whether the listing names the tunnel."
  },
  {
    "criterion": "Pole material and setup",
    "explanation": "Fiberglass poles are common and light but flex in wind, while aluminum is stronger. Color-coded poles speed setup. Look for pole material and color coding in the listing."
  }
];

export const faq = [
  {
    "q": "How do I know which truck tent fits my bed?",
    "a": "Measure the bed from bulkhead to closed tailgate and match it to the listing range. WildFinder 5.0-5.4 ft and 5.5-6.0 ft cover different boxes, and GoHimal 6.5FT covers 6.5 ft."
  },
  {
    "q": "What is the biggest mistake with truck tents?",
    "a": "Ordering for the truck model instead of the bed length. Beds on one model come in several lengths."
  },
  {
    "q": "Is the Napier worth it over the budget tents?",
    "a": "If you camp in storms, yes, because of the storm flaps, taped seams and nine straps. For fair weather the budget tents cover the basics."
  },
  {
    "q": "How do I set up a truck bed tent?",
    "a": "Lay the tent in the bed, assemble the poles, then strap and tension it. Add the rainfly and close the vents before sleeping."
  },
  {
    "q": "How do I run power into a truck tent?",
    "a": "Use a tunnel if the listing has one, and keep generators outside and downwind to avoid carbon monoxide. Size any appliance to your power source."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Tents",
    "href": "/tents-shelter/best-backpacking-tents"
  },
  {
    "title": "Best Camping Tents",
    "href": "/tents-shelter/best-camping-tents"
  },
  {
    "title": "Best Tent Stakes",
    "href": "/tents-shelter/best-tent-stakes"
  },
  {
    "title": "Best 4 Season Tent Under 200",
    "href": "/tents-shelter/best-4-season-tent-under-200"
  }
];
