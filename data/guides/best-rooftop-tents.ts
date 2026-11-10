export const guideSlug = "best-rooftop-tents";
export const guideTitle = "3 Best Rooftop Tents in 2026";
export const metaTitle = "Best Rooftop Tents in 2026";
export const metaDescription = "Best rooftop tents for SUV, truck and Jeep campers, compared on sleeping capacity, shell build, setup time and what comes in the box.";
export const mainKeyword = "best rooftop tents";
export const introParagraphs = [
  "A rooftop tent turns your vehicle into the bed, which means no ground scouting and a fast pack-up, but it also adds real weight to your roof. This guide looks at three full hard shell tents and how they differ on capacity, shell material and bundled gear.",
  "Only complete rooftop tents qualify, so the stage tents, annex rooms and accessories that show up in Amazon searches were left out. The three picks were compared on listed dimensions, setup claims, weather ratings and included equipment."
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
    "id": "best-rooftop-tents-1",
    "rank": 1,
    "badge": "Best for Families",
    "name": "Naturnest Rooftop Tent Hard Shell",
    "price": "$1799.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51CNo00J3EL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G4WJPH9H?tag=rvgearlab-amz-20",
    "description": "The Naturnest is a large hard shell rooftop tent listed for four people, built with an ABS shell, an aluminum frame and sound and thermal insulating honeycomb panels. It uses a 1.97 inch non-deformed mattress, blackout fabric and a ladder-down setup that the seller times at about 30 seconds.\n\nIt is the largest by capacity here, ahead of the 2-3 person WildFinder and HEYFUN Adventurer Pro. It also includes roof crossbars for carrying solar panels, skis or bikes, which neither of the others advertise.\n\nIt suits families or groups who want one shelter on the roof and need extra cargo capacity on top. The replaceable tear-resistant fabric extends the tent's service life.",
    "specs": [
      "Sleeps four people",
      "ABS shell, aluminum frame",
      "Roof crossbars included"
    ],
    "pros": [
      "Biggest sleeping area of the three",
      "Honeycomb panels add insulation and sound damping",
      "Crossbars carry bikes, skis or panels",
      "Replaceable tear-resistant fabric"
    ],
    "cons": [
      "Highest price of the three",
      "Large footprint needs a strong roof rack"
    ],
    "bestFor": "Families wanting four-person capacity",
    "take": "A big hard shell for families, with insulated panels and crossbars for extra gear.",
    "catch": "It is the priciest option and a four-person tent adds a lot of weight overhead."
  },
  {
    "id": "best-rooftop-tents-2",
    "rank": 2,
    "badge": "Best Equipped Value",
    "name": "WildFinder Rooftop Tent",
    "price": "$1099.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51vMn0i3JlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DHKCYXFX?tag=rvgearlab-amz-20",
    "description": "The WildFinder is a 100 percent aluminum alloy hard shell with a stainless steel air pressure lever and polyester fabric. It lists a recessed marine pad, a condensation pad, a comfort mattress and level 6 wind resistance with 5000 mm rain protection.\n\nBeside the Naturnest it leans on kit: a 7.5 ft telescoping ladder, ladder organizer, LED strip, two shoe organizers and three mesh windows are all listed. Against the HEYFUN Adventurer Pro it adds a complete accessory pack and a stated level 4 heavy snow protection.\n\nIt suits campers who want an all-metal shell with the ladder, lights and organizers already supplied. The mattress is paired with a marine pad to cut dampness.",
    "specs": [
      "100 percent aluminum alloy shell",
      "5000 mm rain, level 6 wind",
      "7.5 ft telescoping ladder included"
    ],
    "pros": [
      "Complete accessory pack in the box",
      "Marine pad and condensation pad",
      "Three mesh windows for airflow",
      "Stainless steel air pressure lever"
    ],
    "cons": [
      "Sleep capacity is not clearly stated",
      "Weight is not clearly stated"
    ],
    "bestFor": "Campers wanting a full kit",
    "take": "An all-aluminum shell with ladder, lighting and organizers included for the price.",
    "catch": "Check the listing for capacity and total weight before matching it to your rack."
  },
  {
    "id": "best-rooftop-tents-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "Adventurer Pro Rooftop Tent Hard Shell",
    "price": "$1079.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/516NsWH4ewL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DPNC8F91?tag=rvgearlab-amz-20",
    "description": "The HEYFUN Adventurer Pro is a 2-3 person aluminum hardshell closing to 83.86 by 51.57 by 7 inches and opening to 62.99 inches tall. A hydraulic automatic lid opens or closes in about 5 seconds, and a flocked lining floor, built-in LED and attachable side awning are listed.\n\nNo tent here costs less, and its hydraulic lid is the quickest to open, ahead of the WildFinder's lever system. The flat 7 inch closed height also keeps the roofline low.\n\nIt suits couples who want the fastest open and close at the lowest cost. The side awning attaches for extra shade at camp.",
    "specs": [
      "2-3 person aluminum hardshell",
      "5 second hydraulic open/close",
      "Flocked lining floor"
    ],
    "pros": [
      "Cheapest of the three tents",
      "Opens or closes in about 5 seconds",
      "Closed height is only 7 inches",
      "Side awning and LED are listed"
    ],
    "cons": [
      "Fewer bundled accessories than the WildFinder",
      "Smaller than the Naturnest"
    ],
    "bestFor": "Couples wanting a quick lid",
    "take": "The lowest-cost, fastest-opening hard shell for two people.",
    "catch": "Capacity tops out at 2-3 people, so families should look at the Naturnest."
  }
];

export const howWeEvaluated = [
  {
    "title": "Sleeping capacity",
    "description": "Listed person ratings and interior dimensions."
  },
  {
    "title": "Shell build",
    "description": "Aluminum alloy versus ABS and aluminum frame as described in each listing."
  },
  {
    "title": "Setup speed",
    "description": "The open and close times and the mechanism named."
  },
  {
    "title": "Weather ratings",
    "description": "Waterproof mm, wind and snow ratings named."
  },
  {
    "title": "Included gear",
    "description": "Ladder, lighting, awning, crossbars and mattress details."
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
    "subheading": "By Camping Party",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Family of four",
          "Naturnest 4 Person",
          "Only four-person tent here."
        ],
        [
          "Couple with gear",
          "WildFinder Aluminum",
          "Full accessory kit included."
        ],
        [
          "Fast open and close",
          "HEYFUN Adventurer Pro",
          "5 second hydraulic lid."
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
          "$1070 to $1080",
          "HEYFUN Adventurer Pro"
        ],
        [
          "$1090 to $1100",
          "WildFinder Aluminum"
        ],
        [
          "$1790 to $1800",
          "Naturnest 4 Person"
        ]
      ]
    }
  },
  {
    "subheading": "Large Family Tent vs Compact Pair Tent",
    "cards": [
      {
        "label": "Large tent",
        "text": "Naturnest 4 Person gives four-person space and crossbars. It costs the most and weighs more overhead."
      },
      {
        "label": "Compact tent",
        "text": "WildFinder Aluminum and HEYFUN Adventurer Pro suit two or three people and cost less. They keep the roof lower."
      }
    ],
    "note": "Most small parties should pick the WildFinder Aluminum for its included kit."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Most space",
          "Naturnest 4 Person"
        ],
        [
          "Included accessories",
          "WildFinder Aluminum"
        ],
        [
          "Lowest price",
          "HEYFUN Adventurer Pro"
        ]
      ]
    }
  },
  {
    "subheading": "Roof Rack Safety Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "The tent's weight, your vehicle's roof rating and the rack's dynamic load"
      },
      {
        "label": "In this comparison",
        "text": "HEYFUN Adventurer Pro lists a low 7 inch closed profile, which helps clearance. For any of the three, match the tent weight to the lowest of vehicle and rack ratings."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Naturnest 4 Person if you need four sleeping spots and roof crossbars, since the other two top out at two or three people."
      },
      {
        "label": "Save if",
        "text": "Save with HEYFUN Adventurer Pro or WildFinder Aluminum when you camp as a pair and want aluminum shells at lower prices."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Roof rack and load rating",
    "explanation": "A rooftop tent sits on crossbars and adds its weight to the car's roof while you drive. The dynamic load limit is the key number, since it applies in motion and is lower than static. Check the tent's weight and your vehicle and rack ratings, and follow the smallest of them."
  },
  {
    "criterion": "Capacity versus footprint",
    "explanation": "A larger tent sleeps more people but demands a longer, wider roof footprint and more rack strength. Overhang can hit tailgate or hatch clearances. Compare the closed dimensions in the listing to your roof length and door swing."
  },
  {
    "criterion": "Aluminum versus ABS shell",
    "explanation": "Aluminum alloy resists aging and warping, while ABS shells are lighter and seamless. The material affects price and how the lid handles impacts. Look for the exact material the listing names."
  },
  {
    "criterion": "Condensation control",
    "explanation": "Condensation builds when warm breath meets a cold shell and wets the mattress. Condensation pads, flocked floors and marine pads reduce it. Look for these items in the listing and keep vents cracked at night."
  },
  {
    "criterion": "Setup speed and ladder",
    "explanation": "Lid mechanisms range from lever-assisted to hydraulic in about 5 seconds. The ladder decides how safely you enter at night. Check the ladder length and whether it is included."
  },
  {
    "criterion": "Garage and height clearance",
    "explanation": "A closed tent adds height to your vehicle, which matters in garages and parking structures. A flat 7 inch closed profile helps. Measure the full vehicle height with the tent on before entering a low structure."
  }
];

export const faq = [
  {
    "q": "Do I need a special roof rack for a rooftop tent?",
    "a": "Yes, you need crossbars and a rack with a dynamic load rating above the tent's weight. Check your vehicle manual as well, and follow the lowest limit."
  },
  {
    "q": "What is the biggest mistake with rooftop tents?",
    "a": "Skipping the load math. Tent weight plus bikes or gear can exceed the vehicle roof rating, so read every number first."
  },
  {
    "q": "Is the Naturnest worth it over the cheaper tents?",
    "a": "Only if you need four sleeping spots and roof crossbars. Couples will do fine with WildFinder Aluminum or HEYFUN Adventurer Pro."
  },
  {
    "q": "How do I set up a rooftop tent?",
    "a": "Release the latches, lift the lid, extend the ladder and secure the stays. Reverse the steps and check every latch before driving."
  },
  {
    "q": "How do I care for a rooftop tent?",
    "a": "Dry the fabric fully before closing it for storage, wipe the seals and lubricate the hinges. Inspect the mounting hardware before each trip."
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
