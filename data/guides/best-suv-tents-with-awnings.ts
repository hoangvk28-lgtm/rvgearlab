export const guideSlug = "best-suv-tents-with-awnings";
export const guideTitle = "3 Best Suv Tents With Awnings in 2026";
export const metaTitle = "Best Suv Tents With Awnings in 2026";
export const metaDescription = "Best SUV tents with awnings compared on shade size, screened porch and vehicle fit, for campers who want covered space beside the tailgate.";
export const mainKeyword = "best suv tents with awnings";
export const introParagraphs = [
  "An awning turns the tailgate into a shaded kitchen or sitting room, and the three tents here approach that idea in different ways. Two are full tents with a built-in screened porch and awning, and one is an awning-first hatch shelter.",
  "Each was read for the awning or porch size the listing gives, the waterproof coating and the vehicle types it names. The Napier is a different kind of tent from the other two, so its role in the list is stated plainly."
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
    "id": "best-suv-tents-with-awnings-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "WildFinder 5-9 Person SUV Tent",
    "price": "$219.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41eDKnEHY5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H3VFSYDV?tag=rvgearlab-amz-20",
    "description": "The WildFinder is a 5-9 person SUV tent with a 14.1 ft by 9.2 ft floor and an extra camping awning for dining or storing gear. It has a PU3000 coating, UPF 50+ protection and drainage mesh with large windows.\n\nIts awning is separate from the sleeping area, which keeps meals and beds apart. Next to the TIMBER RIDGE it has the higher coating, and next to the Napier it is a full tent rather than a hatch shade.\n\nIt suits families who want shade, sleep space and a sun rating in one package. It also stands alone when the vehicle leaves.",
    "specs": [
      "Extra camping awning",
      "PU3000 with UPF 50+",
      "14.1 ft by 9.2 ft floor"
    ],
    "pros": [
      "Separate awning for dining and gear",
      "PU3000 coating with UPF 50+",
      "Largest footprint of the three",
      "Stands alone when the car leaves"
    ],
    "cons": [
      "Awning size is not given in feet",
      "Costs more than the Napier"
    ],
    "bestFor": "Families who want shade and sleep space",
    "take": "A full tent with a dedicated dining awning and the strongest weather figures here.",
    "catch": "The listing does not state the awning size in feet."
  },
  {
    "id": "best-suv-tents-with-awnings-2",
    "rank": 2,
    "badge": "Best Measured Porch",
    "name": "TIMBER RIDGE 5-9 Person SUV Tent with Screen Porch and Awning for Camping",
    "price": "$229.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41npgroHzZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DSJ1NLZ1?tag=rvgearlab-amz-20",
    "description": "The TIMBER RIDGE pairs a screened porch and awning, listed at 6 by 8 ft, with a 13 by 10 ft tent that is 87 inches tall in the middle. The shell is PU2000 polyester with two doors and windows.\n\nIt is the only pick that gives the porch dimensions, so you can plan chairs and a cooler. Against the WildFinder it is taller inside, and against the Napier it adds sleeping room.\n\nIt suits groups of four or five who want a bug-free porch to store shoes, coolers and chairs. It works with SUVs, CUVs, minivans and trucks.",
    "specs": [
      "Screened porch and awning",
      "87 inches at center",
      "PU2000 polyester"
    ],
    "pros": [
      "Porch size is stated in feet",
      "Tallest interior of the three",
      "Screens keep bugs off the porch",
      "Double doors and windows for airflow"
    ],
    "cons": [
      "Priciest of the three",
      "Lowest waterproof coating here"
    ],
    "bestFor": "Groups planning a cooler and chair setup",
    "take": "The one to choose if you want to plan the porch layout with real dimensions.",
    "catch": "The PU2000 coating is the lowest of the three."
  },
  {
    "id": "best-suv-tents-with-awnings-3",
    "rank": 3,
    "badge": "Best Hatch Awning",
    "name": "Napier Sportz Cove",
    "price": "$113.06",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Ev0ZNFSEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01MUEGMLR?tag=rvgearlab-amz-20",
    "description": "The Napier Sportz Cove is a tailgate shelter that doubles the shade over the hatch, with an awning that extends for sun and rain cover. It sets up with one pole, comes in two sizes for small to large SUVs and is listed with a five minute setup.\n\nIt is the least costly and the simplest here, and it is an awning shelter rather than a sleeping tent. Compared with the WildFinder and TIMBER RIDGE it gives no room divider or floor, while it packs far smaller.\n\nIt suits tailgating, road trips and day stops where shade and privacy at the hatch are enough. Choose the size option that matches your vehicle.",
    "specs": [
      "One-pole setup, five minutes",
      "Two size options",
      "Hatch awning for sun and rain"
    ],
    "pros": [
      "One-pole setup is very quick",
      "Two sizes for small to large SUVs",
      "Lowest price of the three",
      "Gives sun and rain cover at the hatch"
    ],
    "cons": [
      "Not a sleeping tent",
      "Awning depth is not given in feet"
    ],
    "bestFor": "Day trips and tailgating",
    "take": "A quick, inexpensive hatch awning when you want shade rather than a bedroom.",
    "catch": "It is a shelter for the hatch, so it does not replace a sleeping tent."
  }
];

export const howWeEvaluated = [
  {
    "title": "Awning size",
    "description": "We checked whether each listing gives the awning or porch dimension."
  },
  {
    "title": "Tent type",
    "description": "We separated sleeping tents from awning-only shelters."
  },
  {
    "title": "Weather rating",
    "description": "We compared waterproof coatings and sun protection."
  },
  {
    "title": "Vehicle fit",
    "description": "We read which vehicle types and sizes each names."
  },
  {
    "title": "Setup",
    "description": "We compared pole counts and setup time claims."
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
    "subheading": "By Shade Need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Dining shade beside a sleeping tent",
          "WildFinder 5-9 Person SUV Tent",
          "Separate camping awning"
        ],
        [
          "Planned porch layout",
          "TIMBER RIDGE 5-9 Person SUV Tent",
          "6 x 8 ft screened porch"
        ],
        [
          "Quick tailgate shade",
          "Napier Sportz Cove",
          "One-pole five minute setup"
        ],
        [
          "Strong sun",
          "WildFinder 5-9 Person SUV Tent",
          "UPF 50+ fabric"
        ],
        [
          "Lowest cost",
          "Napier Sportz Cove",
          "Cheapest of the three"
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
          "$110 to $120",
          "Napier Sportz Cove"
        ],
        [
          "$210 to $220",
          "WildFinder 5-9 Person SUV Tent"
        ],
        [
          "$220 to $230",
          "TIMBER RIDGE 5-9 Person SUV Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Full Tent vs Hatch Shelter",
    "cards": [
      {
        "label": "Full tent",
        "text": "A full tent sleeps people and adds an awning or porch. WildFinder 5-9 Person SUV Tent and TIMBER RIDGE 5-9 Person SUV Tent do this."
      },
      {
        "label": "Hatch shelter",
        "text": "A hatch shelter only covers the tailgate, with a smaller price and pack size. Napier Sportz Cove is the example."
      }
    ],
    "note": "Most campers should default to a full tent such as WildFinder 5-9 Person SUV Tent unless they only need day-trip shade."
  },
  {
    "subheading": "By Weather",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Long rain",
          "WildFinder 5-9 Person SUV Tent"
        ],
        [
          "Bug pressure",
          "TIMBER RIDGE 5-9 Person SUV Tent"
        ],
        [
          "Quick sun cover",
          "Napier Sportz Cove"
        ],
        [
          "Hot afternoons",
          "WildFinder 5-9 Person SUV Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For Tailgate Cooking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "An awning or porch with a listed size and enough stakes."
      },
      {
        "label": "In this comparison",
        "text": "TIMBER RIDGE 5-9 Person SUV Tent lists a 6 by 8 ft porch, while WildFinder 5-9 Person SUV Tent adds an extra dining awning."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want sleep space plus an awning, which points to WildFinder 5-9 Person SUV Tent or TIMBER RIDGE 5-9 Person SUV Tent."
      },
      {
        "label": "Save if",
        "text": "Save if you only need hatch shade, since Napier Sportz Cove costs the least."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Awning or porch",
    "explanation": "An awning gives shade, while a porch adds screens and bug protection. Meals and gear stay clean when the porch is screened. Look for a stated size such as 6 by 8 ft."
  },
  {
    "criterion": "Sleeping tent or shelter",
    "explanation": "Some products sleep people and some only shade the hatch. A shelter packs smaller but gives no floor or divider. Read the title and bullets for the word tent versus shelter."
  },
  {
    "criterion": "Waterproof coating",
    "explanation": "PU2000 resists light rain and PU3000 resists more. Awnings also need pole strength against wind. Look for both a coating number and the pole description."
  },
  {
    "criterion": "Vehicle sleeve size",
    "explanation": "The sleeve needs to fit the rear hatch. One listing offers two sizes for small to large SUVs. Measure your opening against the sleeve."
  },
  {
    "criterion": "Sun protection",
    "explanation": "UPF ratings describe how much ultraviolet light fabric blocks. A UPF 50+ fabric suits long hot afternoons. Check the listing for a UPF figure."
  },
  {
    "criterion": "Setup and stakes",
    "explanation": "An awning catches wind, so stakes and guy lines matter. One-pole designs set up fastest but can flex in gusts. Always use every stake point."
  }
];

export const faq = [
  {
    "q": "Can a tent with an awning keep rain off the cooking area?",
    "a": "Partly. An awning gives cover but wind can blow rain in sideways. Keep stoves well away from fabric and never cook inside a tent. Use stakes and guy lines on every awning."
  },
  {
    "q": "What mistake do buyers make with awnings?",
    "a": "Ignoring wind. An awning acts like a sail, so stake every corner and lower it in gusts. Take it down before leaving the site."
  },
  {
    "q": "Is a screened porch worth it over a plain awning?",
    "a": "If bugs are bad, yes. TIMBER RIDGE 5-9 Person SUV Tent has screens, while Napier Sportz Cove offers open shade. The porch costs more and packs larger."
  },
  {
    "q": "How do I set up a hatch awning?",
    "a": "Open the hatch, lay out the shelter and raise the pole. Peg the corners and clip the guy lines. Check that the hatch swings freely."
  },
  {
    "q": "How do I care for a tent awning?",
    "a": "Let it dry fully, brush off dirt and store it loose in the bag. A damp awning picks up mildew quickly."
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
