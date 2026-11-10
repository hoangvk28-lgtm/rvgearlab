export const guideSlug = "best-truck-tents-under-100";
export const guideTitle = "4 Best Truck Tents Under 100 in 2026";
export const metaTitle = "Best Truck Tents Under 100 in 2026";
export const metaDescription = "Best truck tents under $100 compared on bed fit, waterproof rating, ventilation and setup, for pickup owners who want a dry bed-top camp on a small budget.";
export const mainKeyword = "best truck tents under 100";
export const introParagraphs = [
  "A truck bed tent turns a pickup bed into a raised, flat sleeping platform, and under $100 you can buy one with a real waterproof coating. The catch is that nearly all of these tents fit only one or two bed lengths, so matching the tent to your bed matters more than any feature.",
  "Four tents made the list, from a $40 short-and-mid bed model to a $95 double-layer tent with spare poles. Few options sit under this price, and they are ranked by fit range, weather coating and extras."
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
    "id": "best-truck-tents-under-100-1",
    "rank": 1,
    "badge": "Best Value Under $100",
    "name": "WildFinder Truck Bed Tent",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51vYxVV5o9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H35K62LP?tag=rvgearlab-20",
    "description": "WildFinder gives two campers a 92.5 inch long interior and fits 5.5 to 6 foot beds on trucks such as the F150, Ram, Silverado and Tundra. Its 210D Oxford shell carries a PU3000mm coating, with a tunnel for running power cables or air conditioning and three vented windows.\n\nIt spans a wider bed range than the 5.5 foot Rightline and gives a higher waterproof rating than the JOYTUTUS 2.0. It costs less than either, which makes it the best all-round buy under the cap.\n\nIt suits couples with a short or standard bed who want an extension cord or a small fan run in from the truck. Color-coded poles keep setup simple.",
    "specs": [
      "92.5 x 65 x 66.9 in interior",
      "PU3000mm 210D Oxford",
      "Power and air tunnel"
    ],
    "pros": [
      "Spacious two-person interior",
      "PU3000 waterproof coating",
      "Connection tunnel for cords or air",
      "Three ventilated windows"
    ],
    "cons": [
      "Short and standard beds only",
      "Fiberglass poles flex in strong wind"
    ],
    "bestFor": "Short-bed couples",
    "take": "The roomiest, best-rated tent you can buy under $100.",
    "catch": "Measure your bed before ordering, since it fits only 5.5 to 6 foot beds."
  },
  {
    "id": "best-truck-tents-under-100-2",
    "rank": 2,
    "badge": "Best Budget Awning Tent",
    "name": "Truck Bed Tent for Camping",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415eMaXIpxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GXBVBDF7?tag=rvgearlab-20",
    "description": "The Nyiar tent uses 210D Oxford with a PU3000 coating and a detachable awning that attaches at the door. Dual-layer windows and doors pair an insect screen with a solid waterproof panel, and two people can pitch it in 10 to 15 minutes from illustrated instructions.\n\nIt adds shade and flexible window panels that the WildFinder skips, at the lowest price in the group. The Rightline offers a floorless design and no awning.\n\nIt suits six-foot-bed campers who want shade at the tailgate for cooking and relaxing. The awning detaches for a more open entrance.",
    "specs": [
      "210D Oxford, PU3000",
      "Detachable door awning",
      "Fits 5.5 to 6 ft beds"
    ],
    "pros": [
      "Lowest price in the group",
      "Awning attaches at the door",
      "Roll-up solid panels over insect screens",
      "Illustrated setup instructions"
    ],
    "cons": [
      "Two people are needed for setup",
      "Few brand support details"
    ],
    "bestFor": "Budget tailgate campers",
    "take": "The cheapest tent with an awning and a PU3000 coating.",
    "catch": "Plan on two people for the first pitch."
  },
  {
    "id": "best-truck-tents-under-100-3",
    "rank": 3,
    "badge": "Best Floorless Setup",
    "name": "Rightline Gear Full-Size Short Truck Bed Tent",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/414XvAj88cL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00FSBE7BE?tag=rvgearlab-20",
    "description": "The Rightline Gear tent fits 5.5 foot full-size short beds and sleeps two. Its floorless design means you can set it up without removing gear from the bed, and tape-sealed seams with PU2000mm fabric keep it dry.\n\nIt sits above the WildFinder in price and wins on setup, since gear can stay put. Heavy-duty straps and nylon buckles avoid damaging the truck finish, and a sky view vent adds light and airflow.\n\nIt suits short-bed owners who live out of the truck bed and want to pitch in minutes. It is made in the United States.",
    "specs": [
      "Floorless, 5.5 ft short bed",
      "PU2000mm, tape-sealed seams",
      "Sky view vent"
    ],
    "pros": [
      "Floorless design keeps gear in place",
      "Tape-sealed seams",
      "Nylon buckles protect paint",
      "Sky view vent for stargazing"
    ],
    "cons": [
      "PU2000 is a lower rating than PU3000",
      "Fits only 5.5 foot beds"
    ],
    "bestFor": "Short-bed gear haulers",
    "take": "A quick-pitch tent that leaves your gear alone.",
    "catch": "A floorless tent needs a bed liner or mat for the sleeping surface."
  },
  {
    "id": "best-truck-tents-under-100-4",
    "rank": 4,
    "badge": "Best Kit With Spare Poles",
    "name": "JOYTUTUS Pickup Truck Tent 2.0",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51i4zXdLOHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08XH7TK3M?tag=rvgearlab-20",
    "description": "The JOYTUTUS Pickup Truck Tent 2.0 is a two-person tent for 5.5 to 5.8 foot beds, roughly 90 inches long and 63 inches wide. It uses 210D polyester Oxford with PU2000, a double-layer build with rainfly, four fiberglass poles plus two spares and a carry bag.\n\nSpare poles come in the box, which sets it apart from every other tent in the group and explains its top price. It has a lower waterproof rating than the WildFinder and Nyiar.\n\nIt suits Ram, F150 and Silverado owners who want replacement poles in the box. Three windows give ventilation and views.",
    "specs": [
      "About 90 x 63 in floor",
      "PU2000, double layer",
      "Two spare poles included"
    ],
    "pros": [
      "Spare fiberglass poles included",
      "Three ventilated windows",
      "Double layer with rainfly",
      "Fits popular full-size trucks"
    ],
    "cons": [
      "Lowest PU rating of the four",
      "Short beds only, 5.5 to 5.8 ft"
    ],
    "bestFor": "Owners who value spares",
    "take": "The only tent here that comes with spare poles.",
    "catch": "Add seam sealer before wet trips, since PU2000 is the lowest rating."
  }
];

export const howWeEvaluated = [
  {
    "title": "Bed length fit",
    "description": "Checked each tent against 5.5 to 6 foot bed ranges."
  },
  {
    "title": "Waterproof coating",
    "description": "Compared PU2000 and PU3000 ratings."
  },
  {
    "title": "Setup",
    "description": "Weighed pole systems, floorless designs and pitch times."
  },
  {
    "title": "Extras",
    "description": "Counted awnings, tunnels, spare poles and vents."
  },
  {
    "title": "Price",
    "description": "Ranked what each adds between $40 and $95."
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
    "subheading": "By Truck Bed",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Short or standard 5.5 to 6 ft bed",
          "WildFinder 5.5-6 ft",
          "Roomy interior, PU3000."
        ],
        [
          "6 ft bed with shade needs",
          "Nyiar 5.5-6 ft",
          "Detachable awning."
        ],
        [
          "Short 5.5 ft bed, gear in the bed",
          "Rightline Short Bed",
          "Floorless setup."
        ],
        [
          "Short bed, wants spares",
          "JOYTUTUS 2.0",
          "Two spare poles."
        ],
        [
          "Wants power from the truck",
          "WildFinder 5.5-6 ft",
          "Connection tunnel."
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
          "$30 to $60",
          "Nyiar 5.5-6 ft or WildFinder 5.5-6 ft"
        ],
        [
          "$80 to $100",
          "Rightline Short Bed or JOYTUTUS 2.0"
        ]
      ]
    }
  },
  {
    "subheading": "Floor vs Floorless",
    "cards": [
      {
        "label": "With floor",
        "text": "A built-in floor keeps bugs and moisture out and is easy to clean. The WildFinder 5.5-6 ft, Nyiar 5.5-6 ft and JOYTUTUS 2.0 are floored."
      },
      {
        "label": "Floorless",
        "text": "A floorless tent pitches faster and lets you leave gear in the bed, but you need a mat. The Rightline Short Bed works this way."
      }
    ],
    "note": "Most buyers should choose the WildFinder 5.5-6 ft, and gear haulers the Rightline Short Bed."
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
          "About $40, awning",
          "Nyiar 5.5-6 ft"
        ],
        [
          "About $60, best value",
          "WildFinder 5.5-6 ft"
        ],
        [
          "About $90, floorless",
          "Rightline Short Bed"
        ],
        [
          "About $95, spare poles",
          "JOYTUTUS 2.0"
        ]
      ]
    }
  },
  {
    "subheading": "Weekend Trips Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A PU3000 shell, a bed-length match and a quick pitch."
      },
      {
        "label": "In this comparison",
        "text": "The WildFinder 5.5-6 ft has PU3000 and a power tunnel, and the Rightline Short Bed pitches without unloading."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend toward the cap on the Rightline Short Bed for a faster pitch, or on the JOYTUTUS 2.0 for spare poles."
      },
      {
        "label": "Save if",
        "text": "Save with the Nyiar 5.5-6 ft or WildFinder 5.5-6 ft for PU3000 coatings at a lower cost."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Bed length first",
    "explanation": "A truck tent is cut for a specific bed length, usually 5.5 to 5.8 feet for short beds and 6.4 to 6.7 feet for standard beds. A tent that is too long sags, while one that is too short leaves a gap at the tailgate. Measure from the bulkhead to the closed tailgate and match it to the listed range."
  },
  {
    "criterion": "Rain rating that counts",
    "explanation": "PU2000 means the coating resists 2000mm of water pressure, which handles light rain, while PU3000 handles steady rain far better. Taped seams matter as much as the number, because stitching is where most leaks start. Look for a stated PU figure and seam tape in the product details, and treat any tent without one as a fair-weather shelter."
  },
  {
    "criterion": "Tailgate and truck safety",
    "explanation": "Never run a vehicle engine, generator or heater inside or near a closed truck tent, because carbon monoxide builds up quickly. Keep ventilation open and park with the exhaust away from the tent. Use a battery CO alarm if you sleep with the windows closed."
  },
  {
    "criterion": "Floor or floorless",
    "explanation": "A tent with a floor keeps bugs and moisture out of the bed and is easy to wipe clean, while a floorless one pitches faster and lets you leave gear in place. A floorless tent needs a mat or foam pad for the sleeping surface. Check whether the tent has a floor and plan your pad around that."
  },
  {
    "criterion": "Poles and extras",
    "explanation": "Fiberglass poles flex and can splinter in wind, so spare poles save a trip home. A power tunnel lets you run a cord or small fan from the truck into the tent, and an awning adds shade. Look for pole count, spares and connection features in the package list."
  }
];

export const faq = [
  {
    "q": "Will a truck tent fit my truck?",
    "a": "It fits if the bed length matches the tent range. Measure from the bulkhead to the closed tailgate, and compare it to the stated range. The WildFinder 5.5-6 ft covers many short and standard beds, while the Rightline Short Bed fits only 5.5 feet."
  },
  {
    "q": "Can I use a truck tent with a bed cover or topper?",
    "a": "Most truck bed tents need an open bed, so remove any tonneau cover or topper first. Some tents are made for toppers, so check the fitment note. A rolled cover can ride in the cab."
  },
  {
    "q": "Is PU3000 worth it over PU2000?",
    "a": "Yes if you camp in sustained rain, since PU3000 resists more water pressure before leaking. PU2000 is fine for showers and dry-season trips. The WildFinder 5.5-6 ft and Nyiar 5.5-6 ft offer PU3000 at a lower price than the PU2000 tents."
  },
  {
    "q": "How do I pitch a truck tent alone?",
    "a": "Lay out the poles by color, thread them one at a time and strap the tent to the bed tie-downs. A second person helps on the first try. Keep the tailgate closed and use all the straps."
  },
  {
    "q": "How do I stay warm in a truck tent?",
    "a": "Use a rated sleeping bag and a foam pad on the bed liner. Vent the tent to limit condensation, and never run a heater or engine near it. Park with your back to the wind."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Truck Tents",
    "href": "/tents-shelter/best-truck-tents"
  },
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
  }
];
