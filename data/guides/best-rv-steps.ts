export const guideSlug = "best-rv-steps";
export const guideTitle = "5 Best RV Steps in 2026";
export const metaTitle = "Best RV Steps in 2026";
export const metaDescription = "Five RV entry step options compared, from full quad assemblies to a single replacement step, to help owners match rise, width and weight rating to their door.";
export const mainKeyword = "best rv steps";
export const introParagraphs = [
  "An entry step is the one piece of RV hardware you use every single time you leave or return, so a wobbly or worn assembly gets noticed fast. Replacement steps range from a one-tread bolt-on to a four-tread assembly with legs that reach the ground, and the right choice depends on how high your door sits above the pavement. Getting that height wrong leaves you with a stair that is either too short to reach or too tall to fold away.",
  "This list sticks to steps that serve as the primary way in and out of a trailer or fifth wheel, whether that means a fixed assembly mounted at the threshold or a portable folding stair that sets up at the door. Picks are ordered by how complete a solution they are, from the legged four-tread unit that replaces a whole factory entry down to the single step that simply adds a tread where one is missing.",
  "Rise, tread width, weight rating and how the unit stows are the four specs that separate these picks. Measuring from the door threshold to the ground and then to the nearest storage space inside the doorway answers most of the buying question before you ever compare brands."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/414tZR+OIoL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-steps-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Lippert Solid Step 3.0 Premium 26\" Quad Manual RV Entry Steps",
    "price": "$429.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/414tZR+OIoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07V6MRQDM?tag=rvgearlab-amz-20",
    "description": "The Lippert Solid Step 3.0 is a quad manual entry assembly, 26 inches wide, with an 8 inch rise, a 13 inch extra-large top tread and 8.5 inch lower treads. The treads are aluminum with anti-slip surfaces, and the steel step structure is built to cut bounce, which is the complaint most owners have about the stock stairs they are replacing.\n\nCompared with the MORryde StepAbove, the Solid Step adds a fourth tread, so each individual rise is shorter and easier on knees at taller doors. Its legs adjust for uneven ground and the feet are recessed so they do not catch a toe, a detail the single-step Flynsu and the two-tread Lippert Radius do not offer in the same way because neither one reaches the ground on legs.\n\nThe unit folds up into the doorway for travel and ships with mounting and installation hardware. It suits owners of taller fifth wheels and travel trailers who want a step that feels like part of a house and is willing to measure carefully against the sizing guide before ordering.",
    "specs": [
      "Quad 26 inch assembly",
      "13 inch extra-large top tread",
      "Adjustable legs, recessed feet"
    ],
    "pros": [
      "Four treads keep each rise short at tall doors",
      "Wide 13 inch top tread gives confident footing",
      "Legs adjust for uneven campsites",
      "Recessed feet reduce tripping at the base"
    ],
    "cons": [
      "Tall quad assembly needs careful measuring against the sizing guide",
      "Most expensive option in this shortlist"
    ],
    "bestFor": "Tall fifth wheels and trailers needing a full entry"
  },
  {
    "id": "best-rv-steps-2",
    "rank": 2,
    "badge": "Best Freestanding",
    "name": "RV Steps Foldable",
    "price": "$369.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41F4h-Tf0bL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DCBBDW33?tag=rvgearlab-amz-20",
    "description": "The FURVSTA is a four-step aluminum stair that stands on its own instead of mounting to the RV. It adjusts from 17 to 27 inches in height, supports up to 700 lb, and has a single-sided handrail plus a leaf-pattern textured tread surface for wet and dry traction.\n\nWhere the Lippert Solid Step bolts into the doorway and stays with the coach, the FURVSTA sets up tool-free and folds away, so one stair can serve a travel trailer today and a fifth wheel next season. It also carries a higher stated weight rating than the MORryde StepAbove, and the handrail is something none of the fixed units here include.\n\nIt is the pick for owners who rent, swap rigs, or want a stair they can also use at a cabin or hot tub. Buyers who want something that rides inside the door should look at the fixed assemblies instead.",
    "specs": [
      "17 to 27 inch adjustable height",
      "700 lb weight rating",
      "Single-sided handrail"
    ],
    "pros": [
      "Handrail adds support that fixed steps lack",
      "Tool-free setup with no door modification",
      "Leaf-pattern treads grip in wet and dry weather",
      "Works at other doors, decks and tubs too"
    ],
    "cons": [
      "Listing notes a small amount of natural movement",
      "Stays separate from the RV, so it needs storage space"
    ],
    "bestFor": "Renters and owners who swap rigs"
  },
  {
    "id": "best-rv-steps-3",
    "rank": 3,
    "badge": "Best Build Quality",
    "name": "MORryde",
    "price": "$349.66",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31w0EZovsIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B092CQGSKW?tag=rvgearlab-amz-20",
    "description": "The MORryde StepAbove 2nd Generation is a US-made entry step with legs that extend to the ground, a wider top step, and an industry-leading 500 lb rating according to the maker. A redesigned, gradual step slope mimics a residential stair so each foot lands more naturally.\n\nIts quick-release leg adjustment lets you set leg length by hand to deal with sloped sites, and the recessed feet keep the base from becoming a trip hazard. Against the Lippert Solid Step, it trades a fourth tread for a simpler, lighter unit, and its rating sits well above the 300 lb Lippert Radius.\n\nInstallation takes just a few screws, and the step stores inside the door threshold with a quick-release hinge that also makes the unit easy to remove. It is a strong fit for owners who want a premium, USA-built replacement without stepping up to the full quad assembly.",
    "specs": [
      "500 lb rating",
      "Quick-release leg adjustment",
      "Gradual step slope"
    ],
    "pros": [
      "Quick-release legs adjust without tools",
      "Gradual slope feels like a house stair",
      "Made in the USA with a 500 lb rating",
      "Simple screw-in installation"
    ],
    "cons": [
      "Fewer treads than the Lippert Solid Step",
      "Premium price over the Radius and Flynsu"
    ],
    "bestFor": "Buyers who want a premium US-made single assembly"
  },
  {
    "id": "best-rv-steps-4",
    "rank": 4,
    "badge": "Best Value Assembly",
    "name": "Lippert Radius 24\" Double Manual RV Step Assembly",
    "price": "$136.79",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RK+AHRqFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00JMHHFVE?tag=rvgearlab-amz-20",
    "description": "The Lippert Radius is a 24 inch double manual step assembly with an 8 inch rise, anti-slip grip tape on each tread, and a 300 lb capacity. It expands or collapses with one hand thanks to a compact design, and the black powder-coat finish resists chipping.\n\nIt sits well below the MORryde StepAbove and Lippert Solid Step on price, because it has two treads and no ground-reaching legs. That makes it a good match for lower-slung trailers where the door is only a short climb above the ground and a full leg system would be overkill.\n\nIt comes in single, double and triple configurations, so owners with a different door height can size up within the same family. It is the right answer for a no-fuss, budget-aware replacement of a bent or worn factory step.",
    "specs": [
      "24 inch double manual",
      "8 inch rise",
      "One-hand expand or collapse"
    ],
    "pros": [
      "One-hand operation makes stowing quick",
      "Single, double and triple sizes available",
      "Anti-slip grip tape on both treads",
      "Powder-coat finish resists weather wear"
    ],
    "cons": [
      "300 lb rating is the lowest among full assemblies",
      "No legs reaching the ground"
    ],
    "bestFor": "Lower doors needing a simple replacement"
  },
  {
    "id": "best-rv-steps-5",
    "rank": 5,
    "badge": "Best Budget",
    "name": "Manual Retractable RV Steps",
    "price": "$85.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41PiWZD0o5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D61V3GG1?tag=rvgearlab-amz-20",
    "description": "The Flynsu is a manual retractable single-step aluminum unit rated at 440 lb, with steel support plates in a black powder coat and a widened, textured entry tread. A dual-spring connection gives smooth, moderate-force opening and closing.\n\nMultiple mounting holes let it fit RVs, campers, motorhomes, vans and trailers, a flexibility the larger Lippert and MORryde assemblies do not claim. It carries a higher stated rating than the Lippert Radius despite being the least expensive pick on the list.\n\nThe package includes the mounting hardware and an instruction manual. It is the right fit for a van, small camper or utility trailer where one added step does the job.",
    "specs": [
      "Single aluminum step",
      "440 lb capacity",
      "Dual-spring action"
    ],
    "pros": [
      "Highest rating-for-price among manual steps here",
      "Multiple mounting holes fit many vehicle types",
      "Dual springs give smooth open and close",
      "Hardware and instructions included"
    ],
    "cons": [
      "Single tread only adds one rise",
      "No legs for uneven ground"
    ],
    "bestFor": "Vans and small campers needing one added step"
  }
];

export const howWeEvaluated = [
  {
    "title": "Door height first",
    "description": "We compared each unit by how many inches of rise it can cover and how many treads it uses to cover it. A stair that spaces its rise evenly beats one that jumps a large gap."
  },
  {
    "title": "Stated weight ratings",
    "description": "We compared listed weight capacities side by side, from 300 lb on the Lippert Radius up to 700 lb on the FURVSTA. Only ratings printed on the listing were used."
  },
  {
    "title": "Stowing and travel fit",
    "description": "We looked at whether each step folds inside the door, stays on the coach, or sets up separately. That decides whether you must find cargo space for it."
  },
  {
    "title": "Installation effort",
    "description": "We compared mounting methods, from tool-free setup to screw-in hardware kits. Fewer installation steps mean fewer chances for a misaligned mount."
  },
  {
    "title": "Surface and footing",
    "description": "We compared tread surfaces, from aluminum with grip tape to textured leaf patterns, with attention to wet-weather traction."
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
    "subheading": "By Door Height",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Tall fifth wheel or large trailer door",
          "Lippert Solid Step",
          "its four treads with an 8 inch rise split a tall climb into comfortable steps"
        ],
        [
          "Mid-height door where you want a premium US-built unit",
          "MORryde StepAbove",
          "its quick-release legs and 500 lb rating cover most travel trailer doors"
        ],
        [
          "Low trailer door with a short climb",
          "Lippert Radius",
          "its 24 inch double assembly with an 8 inch rise is enough for a short climb"
        ],
        [
          "Van, camper or utility trailer needing one extra tread",
          "Flynsu Single",
          "its single 440 lb step adds exactly one rise with multiple mounting holes"
        ],
        [
          "Door height changes between rigs or campsites",
          "FURVSTA Folding",
          "its 17 to 27 inch adjustable range handles several different doors"
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
          "Entry of this shortlist",
          "Flynsu Single or Lippert Radius"
        ],
        [
          "Mid of this shortlist",
          "MORryde StepAbove or FURVSTA Folding"
        ],
        [
          "Top of this shortlist",
          "Lippert Solid Step"
        ]
      ]
    }
  },
  {
    "subheading": "Fixed Assembly vs Freestanding Stair",
    "cards": [
      {
        "label": "Fixed assembly",
        "text": "A mounted step like the Lippert Solid Step, MORryde StepAbove, Lippert Radius or Flynsu Single stays with the coach and folds into the door. It deploys in seconds and cannot be left behind at a campsite."
      },
      {
        "label": "Freestanding stair",
        "text": "The FURVSTA Folding stands on its own with a handrail and moves between rigs, doors and decks. It needs separate stowage and takes a moment to set up each stop."
      }
    ],
    "note": "For daily use on one rig, pick the Lippert Solid Step or MORryde StepAbove; choose FURVSTA Folding if you need it to travel with you."
  },
  {
    "subheading": "By Handrail and Support Needs",
    "table": {
      "headers": [
        "Priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Want a handrail built in",
          "FURVSTA Folding"
        ],
        [
          "Want legs that reach the ground to cut bounce",
          "Lippert Solid Step"
        ],
        [
          "Want quick tool-free leg adjustment",
          "MORryde StepAbove"
        ],
        [
          "Want one-hand stowing",
          "Lippert Radius"
        ]
      ]
    }
  },
  {
    "subheading": "For Full-Time Living Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A high weight rating, legs that reach the ground, and an anti-slip surface that holds up to daily foot traffic."
      },
      {
        "label": "In this comparison",
        "text": "The MORryde StepAbove pairs a 500 lb rating with quick-release legs, and the Lippert Solid Step adds a fourth tread and recessed feet for the most stable daily-use setup."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Lippert Solid Step or MORryde StepAbove if you use the step several times a day, carry loads through the door, or park on sloped sites. Their ground-reaching legs and higher ratings reduce bounce over time."
      },
      {
        "label": "Save if",
        "text": "Save with the Flynsu Single or Lippert Radius if your door sits low, you only need a short climb, or you want a simple replacement for a bent step. Both cover a short rise without the leg hardware."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Door threshold to ground height",
    "explanation": "This is the vertical distance from the top of your door threshold to the ground where you park, and it sets how many treads you need. A rise much over 8 to 9 inches per tread starts to feel like a ladder rung, so a tall door needs three or four treads. Measure it on level ground and again on the slope you typically park on. Compare the number to each listing's stated rise and tread count before ordering."
  },
  {
    "criterion": "Stated weight rating",
    "explanation": "Weight rating is the load the manufacturer says the step can carry, and it matters because people carry groceries, pets and gear through the door. A 300 lb step can be marginal for a heavy adult carrying a cooler, while 440 to 700 lb leaves a safety margin. Ratings also usually assume the legs are fully deployed. Look for the number in the title or on the listing, not a marketing phrase like heavy duty."
  },
  {
    "criterion": "Tread width and depth",
    "explanation": "Tread width is how much side-to-side foot room you get, and depth is how far a foot can land. A 13 inch top tread like the Lippert Solid Step gives noticeably more room than a narrow one when you are carrying something. Wider treads also lower the chance of a missed step in the dark. Check the width and depth in inches on the listing, and compare it against the width of your door opening."
  },
  {
    "criterion": "Leg support and ground contact",
    "explanation": "Steps with legs reaching the ground transfer load into the pavement instead of into the door frame, which reduces bounce and the stress that bends mounting brackets over time. Adjustable legs also compensate for uneven campsites. Without legs, the weight sits entirely on the mount. Check whether the listing says legs, and whether they adjust by hand or need tools."
  },
  {
    "criterion": "Stowing method",
    "explanation": "A step that folds into the doorway rides with you with no extra work, while a freestanding stair needs a spot in a basement bay or the tow vehicle. Stowing matters at every stop because a step that is annoying to deploy gets skipped. Check whether the listing says folds into the doorway, retracts, or folds flat. Confirm the folded size against your doorway depth."
  },
  {
    "criterion": "Fit and mounting hardware",
    "explanation": "Entry steps have to match your door threshold width and mount pattern, so a 26 inch assembly will not suit a 22 inch opening. Buying the wrong size is the most common return reason. Hardware included in the box saves a trip to the store. Look for a measurement guide on the listing and compare it to your own measurements."
  }
];

export const faq = [
  {
    "q": "How do I know which size entry step to order?",
    "a": "Measure the door threshold width and the vertical distance from the threshold to the ground. Compare both against the listing's size guide, because a 26 inch quad like the Lippert Solid Step will not fit a narrower opening. Keep the measurement in a note so you can cross-check any alternative before ordering."
  },
  {
    "q": "Is a single step like the Flynsu enough for my camper?",
    "a": "A single step is enough when the door sits roughly one comfortable rise above the ground, as on many vans and small campers. For taller doors, the rise becomes too large for one tread, and a double or larger assembly such as the Lippert Radius spaces the climb better. The Flynsu's 440 lb rating is strong for its size."
  },
  {
    "q": "Are fixed steps better than a freestanding stair like the FURVSTA?",
    "a": "Fixed steps deploy faster and always travel with the rig, which matters on days when you stop several times. The FURVSTA wins on flexibility, with a handrail, a 17 to 27 inch range and use at other doors. Choose based on whether one rig or several will use the step."
  },
  {
    "q": "What is the common mistake when installing a replacement entry step?",
    "a": "The most common mistake is installing without measuring the mount pattern or leaving the legs unadjusted on uneven ground. Steps like the MORryde StepAbove need only a few screws, but the legs still have to be set so the step sits level. Check that the step feels solid before loading it."
  },
  {
    "q": "How should I maintain RV entry steps?",
    "a": "Rinse off mud and road grit, then check mounting screws and leg pins at the start of each season. Light lubricant on hinge points helps a unit like the Lippert Radius keep its one-hand action. Replace any step that shows bending or cracked treads."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best RV Step Stabilizer",
    "href": "/towing-leveling/best-rv-step-stabilizer"
  },
  {
    "title": "Best RV Folding Step Stool",
    "href": "/towing-leveling/best-rv-folding-step-stool"
  },
  {
    "title": "Best RV Step Covers",
    "href": "/towing-leveling/best-rv-step-covers"
  },
  {
    "title": "Best RV Jack Pads",
    "href": "/towing-leveling/best-rv-jack-pads"
  }
];
