export const guideSlug = "best-heavy-duty-cabin-tents";
export const guideTitle = "5 Best Heavy Duty Cabin Tents in 2026";
export const metaTitle = "Best Heavy Duty Cabin Tents in 2026";
export const metaDescription = "Best heavy-duty cabin tents compared on fabric, frame, anchoring and weather shell, from canvas hot tents to steel-pole family cabins.";
export const mainKeyword = "best heavy duty cabin tents";
export const introParagraphs = [
  "Heavy-duty in a cabin tent comes down to three things: fabric that survives sun and wind, a frame that holds a tall wall, and enough anchors to keep it down. A glossy label means little without those numbers.",
  "Five tents are ranked here, from a canvas inflatable glamping cabin to a light-duty instant family cabin. The listings with the strongest fabric and frame details come first, and the weaker fits are called out in the cons."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-camper-by-tent.webp";
export const heroImageAlt = "Camper standing next to a tent at a campsite";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-heavy-duty-cabin-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Luxury Inflatable Canvas Tent for Camping with Stove Jack",
    "price": "$820.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51FNZyCsisL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FXB48YYZ?tag=rvgearlab-amz-20",
    "description": "The Mohuihui is an inflatable canvas cabin sized for 6 to 10 people, with a 12 square meter floor and tech-cotton fabric. It adds a built-in stove jack, a transparent skylight, reinforced seams, a heavy-duty groundsheet and multiple tie-down points.\n\nNext to the VELUVIA it swaps steel poles for air beams, so it inflates rather than assembles. Against the CORE 12 it uses canvas instead of 1200mm coated polyester, which is the heavier-duty fabric choice.\n\nIt suits groups that want a cabin-style canvas shelter for all seasons. The air-beam frame removes the pole-threading step.",
    "specs": [
      "6 to 10 person, 12 sq m",
      "Tech-cotton canvas fabric",
      "Stove jack and skylight"
    ],
    "pros": [
      "Canvas fabric breathes and lasts",
      "Air beams replace poles",
      "Heavy-duty groundsheet, tie-down points",
      "Stove jack and skylight included"
    ],
    "cons": [
      "Highest price in this guide",
      "Needs a pump and careful inflation"
    ],
    "bestFor": "Group glamping, all seasons",
    "take": "The sturdiest-fabric cabin here, for groups that want canvas without poles.",
    "catch": "At the top of the price range, it costs more than any other cabin in this guide."
  },
  {
    "id": "best-heavy-duty-cabin-tents-2",
    "rank": 2,
    "badge": "Best Hot Tent Cabin",
    "name": "4 Season Hot Tent with Stove Jack",
    "price": "$339.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51+zttLFe4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H1L3614G?tag=rvgearlab-amz-20",
    "description": "The VELUVIA is a cabin hot tent for 6 to 8 people with a 6.5 ft center peak and 4.6 ft vertical walls. It carries a 210g poly-cotton roof, a flame-retardant stove jack for 2.7 to 4.7 inch pipes, steel poles and six mesh windows.\n\nCompared with the Mohuihui, it costs less and uses steel poles, with a 10-minute single-person setup. Against the CORE 12, it adds a stove jack and poly-cotton roof for cold-weather use.\n\nIt suits families that camp past summer and want a boxy layout for cots. The poly-cotton roof also helps limit condensation.",
    "specs": [
      "6 to 8 person cabin",
      "210g TC roof, stove jack",
      "6.5 ft peak, steel poles"
    ],
    "pros": [
      "Flame-retardant stove jack included",
      "Poly-cotton roof limits dripping",
      "Tall vertical walls for cots",
      "Dual doors and six mesh windows"
    ],
    "cons": [
      "Steel poles add weight",
      "Stove use needs a safe setup"
    ],
    "bestFor": "Cold-season cabin camping",
    "take": "A steel-pole hot tent cabin priced well below the canvas option.",
    "catch": "Steel poles and a canvas-blend roof make it heavy to carry, so plan on a vehicle pitch."
  },
  {
    "id": "best-heavy-duty-cabin-tents-3",
    "rank": 3,
    "badge": "Best Large Family Cabin",
    "name": "CORE 12 Person Tent",
    "price": "$379.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41O9Tt32E7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07QY3KZPR?tag=rvgearlab-amz-20",
    "description": "The CORE 12 measures 16 by 11 feet with an 86 inch center height and fits four queen air beds. H2O Block fabric rated 1200mm, a fully taped rainfly, sealed seams and guylines with steel stakes form its weather shell.\n\nIt has the biggest floor and tallest ceiling in the group, while the VELUVIA brings a stove jack and the Mohuihui brings canvas. A room divider and storage pockets are included.\n\nIt suits large car-camping families that mostly camp in warm to rainy weather. The label says up to 12 without gear, and the listing treats 6 as the comfortable count.",
    "specs": [
      "16 x 11 ft, 86 in peak",
      "1200mm H2O Block fabric",
      "Room divider, steel stakes"
    ],
    "pros": [
      "Fits four queen air beds",
      "Fully taped rainfly and sealed seams",
      "Steel stakes and guylines included",
      "Room divider adds privacy"
    ],
    "cons": [
      "Comfortable at 6 people with gear",
      "No stove jack listed"
    ],
    "bestFor": "Large families, rainy weekends",
    "take": "The biggest and tallest cabin here, with real anchors in the box.",
    "catch": "It is built for three-season use, and the 12-person label assumes no gear inside."
  },
  {
    "id": "best-heavy-duty-cabin-tents-4",
    "rank": 4,
    "badge": "Best Instant Cabin",
    "name": "Naturehike Village Instant Tent",
    "price": "$319.36",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31XwAXj+lML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DCVQ7JTR?tag=rvgearlab-amz-20",
    "description": "The Naturehike Village is a 12.96 x 8.86 x 6 ft instant cabin with a pre-attached pole structure that sets up in 60 seconds. Its 150D blackout fabric is UPF50+, and the listing names five-sided ventilation and USB built-in lights.\n\nCompared with the CORE 12, it is lighter-duty and smaller, and it pitches in a fraction of the time. Against the Purebox it adds blackout fabric and built-in lighting at a higher price.\n\nIt suits campers who want a cabin that goes up fast and sleeps four on two air mattresses. The 8-person label counts sleeping pads side by side.",
    "specs": [
      "12.96 x 8.86 x 6 ft",
      "150D blackout, UPF50+",
      "60 second instant setup"
    ],
    "pros": [
      "Pitches in about 60 seconds",
      "Blackout fabric with UPF50+",
      "Built-in USB lights",
      "Five-sided ventilation"
    ],
    "cons": [
      "Lighter-duty than the canvas picks",
      "Real comfort is four people"
    ],
    "bestFor": "Quick pitching, small groups",
    "take": "A fast-pitching cabin with blackout fabric and built-in lights.",
    "catch": "Fabric is 150D polyester, a lighter duty than the canvas and steel-pole tents above."
  },
  {
    "id": "best-heavy-duty-cabin-tents-5",
    "rank": 5,
    "badge": "Best Budget Cabin",
    "name": "6 Person Tents for Camping Waterproof Family Cabin Tent with Full Rainfly",
    "price": "$180.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41x5s9iBs4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGH11Q27?tag=rvgearlab-amz-20",
    "description": "The Purebox is a 6-person cabin with near-vertical walls, two entry doors, four oversized mesh windows and a full-coverage rainfly with skirts. Its rainfly extends into a front awning that adds covered outdoor space.\n\nPrice is the lowest here and the build the lightest-duty, trading canvas and steel for a pre-attached instant frame. Against the Naturehike Village, it gives a bigger awning with no built-in lights.\n\nIt suits budget families that want a dependable fly and awning for fair-weather camping. Two doors help foot traffic with kids.",
    "specs": [
      "6-person near-vertical cabin",
      "Full-coverage rainfly, skirts",
      "Front awning, instant frame"
    ],
    "pros": [
      "Rainfly with skirts covers the walls",
      "Extended awning adds shaded space",
      "Two doors, four mesh windows",
      "Lowest price in this group"
    ],
    "cons": [
      "Lightest-duty fabric and frame here",
      "No stove jack or canvas option"
    ],
    "bestFor": "Budget family cabin",
    "take": "The affordable pick here, with a full fly and a shaded front awning.",
    "catch": "Instant frames suit mild conditions, so this is the weakest fit for a heavy-duty brief."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fabric type",
    "description": "Canvas and poly-cotton were weighed above coated polyester."
  },
  {
    "title": "Frame strength",
    "description": "Steel poles, air beams and instant frames were compared for stability."
  },
  {
    "title": "Anchoring",
    "description": "Steel stakes, tie-down points and guylines count toward wind security."
  },
  {
    "title": "Weather shell",
    "description": "Millimeter ratings, taped seams and rainfly coverage were checked."
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
    "subheading": "By weather you expect",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Cold nights with a stove",
          "VELUVIA 4-Season Poly-Cotton Cabin Tent",
          "Stove jack and 210g TC roof"
        ],
        [
          "All seasons, canvas durability",
          "Mohuihui Inflatable Canvas Tent",
          "Tech-cotton fabric and reinforced seams"
        ],
        [
          "Heavy rain, large family",
          "CORE 12-Person Cabin Tent",
          "1200mm fabric, taped fly and sealed seams"
        ],
        [
          "Mild weather, fast pitch",
          "Naturehike Village Instant Tent",
          "60 second setup under a blackout fly"
        ],
        [
          "Fair weather on a budget",
          "Purebox 6-Person Cabin Tent",
          "Full fly with skirts and awning"
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
          "$180 to $320",
          "Purebox 6-Person Cabin Tent or Naturehike Village Instant Tent"
        ],
        [
          "$330 to $380",
          "VELUVIA 4-Season Poly-Cotton Cabin Tent or CORE 12-Person Cabin Tent"
        ],
        [
          "Around $820",
          "Mohuihui Inflatable Canvas Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Canvas vs coated polyester",
    "cards": [
      {
        "label": "Canvas and poly-cotton",
        "text": "Heavier, breathable fabrics that resist UV and handle stove heat. Mohuihui Inflatable Canvas Tent and VELUVIA 4-Season Poly-Cotton Cabin Tent use them."
      },
      {
        "label": "Coated polyester",
        "text": "Lighter and cheaper with a waterproof coating, but less durable under sun. CORE 12-Person Cabin Tent, Naturehike Village Instant Tent and Purebox 6-Person Cabin Tent use it."
      }
    ],
    "note": "Most buyers should choose VELUVIA 4-Season Poly-Cotton Cabin Tent for durability per dollar, and polyester only if weight matters."
  },
  {
    "subheading": "By setup effort",
    "table": {
      "headers": [
        "If you want",
        "Recommended pick"
      ],
      "rows": [
        [
          "No poles at all",
          "Mohuihui Inflatable Canvas Tent"
        ],
        [
          "A solo 10-minute pitch",
          "VELUVIA 4-Season Poly-Cotton Cabin Tent"
        ],
        [
          "One-minute instant frame",
          "Naturehike Village Instant Tent"
        ],
        [
          "Instant frame, low cost",
          "Purebox 6-Person Cabin Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For windy campsites Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Steel poles or air beams, steel stakes, guylines and low-profile walls."
      },
      {
        "label": "In this comparison",
        "text": "CORE 12-Person Cabin Tent ships steel stakes and guylines, and VELUVIA 4-Season Poly-Cotton Cabin Tent adds steel poles with glow-in-the-dark stakes."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Mohuihui Inflatable Canvas Tent or VELUVIA 4-Season Poly-Cotton Cabin Tent if you camp past summer. Canvas-type fabric and a stove jack are real durability and warmth upgrades."
      },
      {
        "label": "Save if",
        "text": "Save with Purebox 6-Person Cabin Tent or Naturehike Village Instant Tent if you camp in fair weather. CORE 12-Person Cabin Tent adds a real weather shell at a mid price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fabric weight and type",
    "explanation": "Canvas and poly-cotton fabrics resist UV and abrasion longer than thin coated polyester, and they breathe better. They weigh more, so they suit vehicle camps. Look for named fabric weights such as 210g or a denier number like 150D."
  },
  {
    "criterion": "Frame material",
    "explanation": "Steel poles resist bending in wind but add pounds, while fiberglass and thin aluminum flex. Air beams spread load differently. Check the listing for pole material and diameter."
  },
  {
    "criterion": "Anchors and guylines",
    "explanation": "A tall cabin wall acts like a sail, so stakes and guylines decide whether it stays up. Short plastic stakes slip in soft ground. Look for steel stakes and a count of guy points."
  },
  {
    "criterion": "Waterproof rating and seams",
    "explanation": "A millimeter rating shows coating pressure resistance, and taped seams stop leaks at the stitch. A tent with a number but no taped seams still leaks. Check both on the listing."
  },
  {
    "criterion": "Honest capacity",
    "explanation": "A 12-person label is usually bodies with no gear, so divide by two for comfort. Floor dimensions tell the truth. Compare them with the number of queen air beds listed."
  }
];

export const faq = [
  {
    "q": "Is a heavy-duty cabin tent harder to set up?",
    "a": "Steel-pole and canvas models take longer, with the VELUVIA listed at about 10 minutes for one person. Air-beam and instant frames shorten the work. Plan on two people for the CORE 12."
  },
  {
    "q": "What mistake do campers make with canvas?",
    "a": "Packing it wet. Canvas and poly-cotton mildew quickly, so dry the roof fully before storing. Season new canvas as the maker recommends."
  },
  {
    "q": "Is the Mohuihui worth it over the VELUVIA?",
    "a": "Only if you want air beams and canvas walls for a larger group. VELUVIA 4-Season Poly-Cotton Cabin Tent costs far less and also has a stove jack. Choose the Mohuihui for fabric and group size."
  },
  {
    "q": "How do I anchor a tall cabin tent?",
    "a": "Drive stakes at 45 degrees and run every guyline. Use steel stakes in hard soil, as shipped with the CORE 12. Re-tension after the first night."
  },
  {
    "q": "Can I use a stove inside a hot tent?",
    "a": "Only inside a tent with a stove jack and a stove rated for tent use. Keep the stove away from walls, and use a carbon monoxide alarm. The VELUVIA and Mohuihui both include a jack."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
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
  },
  {
    "title": "Best 4 Season Tent Under 300",
    "href": "/tents-shelter/best-4-season-tent-under-300"
  }
];
