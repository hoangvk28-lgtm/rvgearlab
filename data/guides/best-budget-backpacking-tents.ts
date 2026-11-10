export const guideSlug = "best-budget-backpacking-tents";
export const guideTitle = "5 Best Budget Backpacking Tents in 2026";
export const metaTitle = "Best Budget Backpacking Tents in 2026";
export const metaDescription = "Best budget backpacking tents compared on listed weight, floor size and pole material, for hikers who want a cheap shelter that still packs small.";
export const mainKeyword = "best budget backpacking tents";
export const introParagraphs = [
  "A budget backpacking tent trades fabric weight, pole quality and seam finish for a low price, so the useful question is which trade-offs hurt least on a trail. Weight, floor size and pole material show up on every listing and sort these tents faster than adjectives do.",
  "Five budget tents are ranked here, running from an entry-level two-person with fiberglass poles to a freestanding four-person with aluminum poles and a one-person pop-up with taped seams. The ranking weights stated weight and waterproof rating first, then included stakes and ease of pitching."
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
    "id": "best-budget-backpacking-tents-1",
    "rank": 1,
    "badge": "Best Budget Weight",
    "name": "JELUCAMP 1/2/4/6 Person Dome Tents for Camping Lightweight Backpacking Tent",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31XC6vQGRqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSC7BB38?tag=rvgearlab-20",
    "description": "The JELUCAMP is a 1 to 2 person dome that weighs 4.3 lb on its listing and is 86.6 inches long, 59.1 wide and 43.3 tall. It uses PU3000 coated polyester over 7.9mm fiberglass poles, with a double-layer door for ventilation and insect protection.\n\nAmong the budget picks it pairs a low listed weight with a stated PU3000 coating, which the Wakeman at a similar spend does not give. The Forceatt has aluminum poles and costs more, with no weight figure on its listing.\n\nIt suits a solo hiker or couple on short trips who care about price and a sub 5 lb carry. Setup takes just a few minutes on its listing.",
    "specs": [
      "4.3 lb listed weight",
      "PU3000 polyester fabric",
      "86.6 x 59.1 in floor"
    ],
    "pros": [
      "Light enough for a short backpacking trip",
      "Double-layer door for bugs and airflow",
      "Stated PU3000 waterproof coating",
      "Low price for a dome with a rainfly"
    ],
    "cons": [
      "Fiberglass poles flex in strong wind",
      "Narrow 59 inch width for two"
    ],
    "bestFor": "Light solo or couple trips",
    "take": "A low-cost dome with a stated 4.3 lb weight, good for short trails.",
    "catch": "Fiberglass poles are the weak point if the wind picks up."
  },
  {
    "id": "best-budget-backpacking-tents-2",
    "rank": 2,
    "badge": "Best Poles and Vestibules",
    "name": "Forceatt Camping Tent",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Yb0O8oi1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CB7MJ8TS?tag=rvgearlab-20",
    "description": "The Forceatt is a two-person tent with 7001 aluminum poles, a PU3000 to PU5000 coated polyester rainfly and bathtub floor, and two D-shaped doors with side vestibules. Inside it measures 86.6 x 51.1 x 43.3 inches.\n\nIt improves on the JELUCAMP with aluminum poles and two vestibules for packs, and it undercuts the BISINNA on price. The listing mentions a package size rather than a weight, so the JELUCAMP stays the lighter documented pick.\n\nIt fits two hikers who want gear storage at each door and sturdier poles for the money. A claimed 3 minute setup suits quick camps.",
    "specs": [
      "7001 aluminum poles",
      "Two doors and two vestibules",
      "PU3000 to PU5000 coating"
    ],
    "pros": [
      "Aluminum poles are stronger than fiberglass",
      "Two vestibules for packs and boots",
      "Bathtub floor with taped coating",
      "Quick claimed 3 minute pitch"
    ],
    "cons": [
      "Weight is not stated in the listing",
      "Iron stakes are heavier than alloy"
    ],
    "bestFor": "Two hikers with packs",
    "take": "Aluminum poles and two vestibules at a budget price.",
    "catch": "The listing gives pack dimensions rather than a total weight, so ask the seller."
  },
  {
    "id": "best-budget-backpacking-tents-3",
    "rank": 3,
    "badge": "Best Freestanding Space",
    "name": "BISINNA 2/4 Person Camping Tent Lightweight Waterproof Backpacking Tent",
    "price": "$72.79",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Qjossgk4S._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08RBTRWCR?tag=rvgearlab-20",
    "description": "The BISINNA is listed as a 2/4 person freestanding backpacking tent with aluminum poles. It uses 190T polyester taffeta for the inner and fly, B3 no-see-um mesh, 2 D-shaped doors, 13 aluminum stakes and 4 wind ropes.\n\nIt offers the most room here at 92.5 x 86.6 x 51.1 inches, well above the Forceatt, and it is freestanding so it pitches in under 10 minutes. The Reactive Outdoor tent is the one that pitches faster, while the BISINNA wins on floor area.\n\nIt suits a family or two friends sharing a heavier load who want standing room and a freestanding frame. Mesh sections and two doors improve ventilation.",
    "specs": [
      "92.5 x 86.6 x 51.1 inches",
      "Freestanding, aluminum poles",
      "3-season, 2 D-shaped doors"
    ],
    "pros": [
      "Roomy enough for four people on paper",
      "Freestanding frame pitches quickly",
      "Aluminum alloy stakes included",
      "Large mesh panels and two doors"
    ],
    "cons": [
      "Weight is not listed in the listing",
      "Rated for three seasons only"
    ],
    "bestFor": "Shared loads and more space",
    "take": "The roomiest freestanding budget tent in this list.",
    "catch": "A larger tent usually weighs more, so check the weight before a long hike."
  },
  {
    "id": "best-budget-backpacking-tents-4",
    "rank": 4,
    "badge": "Best Fast Pitch",
    "name": "Reactive Outdoor Tent",
    "price": "$119.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41mLgOWpqRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CV436MTL?tag=rvgearlab-20",
    "description": "The Reactive Outdoor 3 Second Tent is a one-person pop-up with a self-locking mechanism, a double layer and an HH rating of 3000mm. The listing notes fully taped seams and a wide-mouth bag with buckle straps.\n\nIt pitches faster than any other tent here and keeps the seams sealed, which the cheaper Wakeman does not claim. It costs more than the rest of the list, so it sits at the top of the budget range.\n\nIt suits solo hikers, festival goers and car campers who want an instant shelter more than a low weight. The easy-pack bag helps with repacking in the rain.",
    "specs": [
      "3000mm HH, taped seams",
      "Self-locking pop-up frame",
      "One-person double layer"
    ],
    "pros": [
      "Pitch in seconds by one person",
      "Taped seams on a 3000mm fly",
      "Wide opening bag packs easily",
      "Double layer for condensation control"
    ],
    "cons": [
      "Highest price among the budget picks",
      "Weight is not stated in the listing"
    ],
    "bestFor": "Solo fast pitching",
    "take": "An instant shelter that spends its budget on speed and sealed seams.",
    "catch": "Spend is highest here, and solo-only sizing limits sharing."
  },
  {
    "id": "best-budget-backpacking-tents-5",
    "rank": 5,
    "badge": "Best Entry Price",
    "name": "Wakeman Outdoors 2 Person Camping Tent with Rain Fly and Carrying Bag",
    "price": "$18.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RBHHcBtSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0050P22VK?tag=rvgearlab-20",
    "description": "The Wakeman is a two-person tent listed at 77 x 57 x 40 inches and 2.75 lb with 190T polyester and fiberglass poles. Extras on the listing are a detachable fly, a vent window and a screen-and-fabric door.\n\nIt carries the lowest weight figure and lowest price of the five, ahead of the JELUCAMP on both. The JELUCAMP offers a roomier floor and a stated PU3000 coating that this listing does not give.\n\nIt suits occasional campers, festival trips and day-hike bivouacs where price is the first filter. A 23 inch carry bag keeps the pack small.",
    "specs": [
      "2.75 lb, 77 x 57 x 40 in",
      "190T polyester, fiberglass",
      "Removable rain fly"
    ],
    "pros": [
      "Lowest listed weight at 2.75 lb",
      "Lowest price in the list",
      "Dual-layer door and vent window",
      "Compact 23 inch carry bag"
    ],
    "cons": [
      "Tight fit for two adults",
      "No waterproof rating given"
    ],
    "bestFor": "Occasional low-spend trips",
    "take": "The cheapest and lightest listed tent, best for fair-weather trips.",
    "catch": "The listing gives no waterproof rating or seam detail."
  }
];

export const howWeEvaluated = [
  {
    "title": "Listed weight",
    "description": "Weight is the first filter for backpacking, so stated figures outrank vague claims."
  },
  {
    "title": "Waterproof rating",
    "description": "Hydrostatic head and seam notes were checked, with sealed seams ranked ahead of silent ones."
  },
  {
    "title": "Frame material",
    "description": "Aluminum and fiberglass poles were compared for wind and break risk."
  },
  {
    "title": "Floor size",
    "description": "Footprint and peak height were compared against how many people each tent really fits."
  },
  {
    "title": "Setup and included kit",
    "description": "Stakes, bags and pitch speed were noted since cheap tents often skip them."
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
    "subheading": "By Trip Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Short solo trail trip",
          "JELUCAMP Dome",
          "Lowest weight with a stated waterproof rating."
        ],
        [
          "Two hikers with packs",
          "Forceatt 2P",
          "Two doors, two vestibules and aluminum poles."
        ],
        [
          "Shared load, extra space",
          "BISINNA 4P",
          "Largest freestanding floor area."
        ],
        [
          "Festival or occasional trip",
          "Wakeman 2P",
          "Cheapest and lightest by the listing."
        ],
        [
          "Solo with a tight schedule",
          "Reactive 3 Second",
          "Pop-up frame with taped seams."
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
          "$10 to $30",
          "Wakeman 2P or JELUCAMP Dome"
        ],
        [
          "$60 to $80",
          "Forceatt 2P or BISINNA 4P"
        ],
        [
          "$110 to $120",
          "Reactive 3 Second"
        ]
      ]
    }
  },
  {
    "subheading": "Pop-Up vs Poled Dome",
    "cards": [
      {
        "label": "Pop-up",
        "text": "The Reactive 3 Second uses a self-locking frame that opens in seconds, which saves time but locks you into one shape and one size."
      },
      {
        "label": "Poled dome",
        "text": "Poled domes such as the Forceatt 2P, BISINNA 4P and JELUCAMP Dome pitch by hand but give you replaceable poles and more flexibility in size."
      }
    ],
    "note": "Most budget buyers should choose a poled dome such as the JELUCAMP Dome unless pitching speed is the whole point of the purchase."
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
          "Wakeman 2P"
        ],
        [
          "Low spend with a stated rating",
          "JELUCAMP Dome"
        ],
        [
          "Mid spend, aluminum poles",
          "Forceatt 2P"
        ],
        [
          "Top of the budget range",
          "Reactive 3 Second"
        ],
        [
          "Mid spend, more room",
          "BISINNA 4P"
        ]
      ]
    }
  },
  {
    "subheading": "For First-Time Backpackers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A listed total weight, a stated waterproof rating and aluminum or fiberglass poles you can replace."
      },
      {
        "label": "In this comparison",
        "text": "The JELUCAMP Dome gives a 4.3 lb figure and PU3000 coating, which is the clearest data in this list."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Forceatt 2P for stronger poles and vestibules, or the Reactive 3 Second if you hate pitching."
      },
      {
        "label": "Save if",
        "text": "Save with the Wakeman 2P or the JELUCAMP Dome when you hike in fair weather and want the lightest carry."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Weight vs price",
    "explanation": "Budget tents often skip carry weight on the listing, but a 4 lb tent and an 8 lb tent feel very different after ten miles. Weight matters most when you carry the tent yourself rather than park beside it. Look for a figure in the title, bullets or details and treat a missing figure as a reason to ask before buying."
  },
  {
    "criterion": "Pole material",
    "explanation": "Fiberglass poles are cheap and heavy and flex or splinter under wind load, while aluminum poles survive harsher weather. Poles are the part of a budget tent that most often fail in the field. The bullets usually name the pole material, so look for 7001, aluminum alloy or fiberglass."
  },
  {
    "criterion": "Waterproof rating",
    "explanation": "A rating such as PU3000 or 3000mm HH describes how much water pressure the fabric resists. Under about 1500mm, a rain fly leaks in steady rain, while 3000mm is a common budget target. Check the listing for the number and for taped seams, since stitching can leak even on a good fabric."
  },
  {
    "criterion": "Seam and floor quality",
    "explanation": "Sewn seams without tape allow water in through the needle holes. A bathtub floor, which turns up the sides, blocks splashes. Look for words such as taped seams or bathtub floor in the listing and treat silence as a sign to seam-seal at home."
  },
  {
    "criterion": "Real capacity",
    "explanation": "A tent labelled for two people usually fits two sleeping pads with little room for gear. Check the interior footprint in inches, since a 57 inch width is snug for two pads. If you carry packs inside, go up one size or choose a model with vestibules."
  },
  {
    "criterion": "Ventilation and bugs",
    "explanation": "Double-layer doors and mesh panels reduce condensation, which soaks sleeping bags in humid weather. A single door and no vents are an easy way for a cheap tent to feel damp. Look for the number of doors and vents in the listing before buying."
  }
];

export const faq = [
  {
    "q": "Is a budget backpacking tent safe in rain?",
    "a": "Most are fine in light to moderate rain if the fly is tight and the seams are sealed. The Reactive 3 Second lists taped seams. For others, seam-seal the stitching yourself."
  },
  {
    "q": "What is the common mistake with cheap tents?",
    "a": "Buying by person count. A 2 person label often fits two thin pads only, so the Wakeman 2P suits one person with gear. Check the inches."
  },
  {
    "q": "Is the BISINNA worth it over the JELUCAMP?",
    "a": "Choose the BISINNA for room and freestanding aluminum poles, and choose the JELUCAMP for a lower listed weight. The extra space matters most for shared trips. Solo hikers will rarely need it."
  },
  {
    "q": "How do I pitch a poled dome tent?",
    "a": "Lay the footprint, thread poles through the sleeves or clips, raise the frame and stake the corners before adding the fly. Guy out the fly in wind. Practice at home first."
  },
  {
    "q": "How do I extend the life of a cheap tent?",
    "a": "Dry it fully before storing, avoid packing it wet and brush off dirt. Use a footprint to protect the floor. Replace lost stakes with sturdier ones and seam-seal the fly if the listing does not mention taped seams."
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
