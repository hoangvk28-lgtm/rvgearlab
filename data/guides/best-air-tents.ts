export const guideSlug = "best-air-tents";
export const guideTitle = "5 Best Air Tents in 2026";
export const metaTitle = "Best Air Tents in 2026";
export const metaDescription = "Best air tents for camping: five inflatable-beam tents compared on setup, size, stove readiness and fabric, for families and glampers.";
export const mainKeyword = "best air tents";
export const introParagraphs = [
  "An air tent swaps metal or fiberglass poles for inflatable beams, so one person with a pump can raise the whole frame. That changes the camp-setup routine more than any spec on the label, which is why this list starts with how each frame inflates.",
  "Five inflatable tents made the cut, sorted by sleeping capacity, fabric weight and the extras each listing names, such as stove jacks, awnings and AC ports. A children's play fort was left out because it is a living-room toy, not a shelter."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/home-golden-hour-campsite.webp";
export const heroImageAlt = "Dome tent and hammock at a forest campsite at golden hour";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-air-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Inflatable Tent with Detachable Awning",
    "price": "$299.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4145D1z1OAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HB31DHVR?tag=rvgearlab-amz-20",
    "description": "The Soboyo inflatable tent is built for 4 to 6 people and pairs a pump-inflated frame with 420D Oxford fabric. The listing names a detachable awning, a skylight window and a stove jack in the same package.\n\nNext to the Ytaoeo it gives up the second room and the AC port, yet it keeps the stove jack and adds an awning that the Ytaoeo does not list. Against the IYGLKD it swaps a lighter 300D fabric for heavier 420D Oxford.\n\nIt suits a family that wants an air-beam tent with shade and a cold-weather option without paying the canvas premium. The 4 to 6 person rating keeps it practical for weekend trips.",
    "specs": [
      "4 to 6 person capacity",
      "420D Oxford, stove jack",
      "Detachable awning, skylight"
    ],
    "pros": [
      "Detachable awning adds shade",
      "Built-in stove jack for hot-tent use",
      "Heavy 420D Oxford fabric",
      "Pump included, no poles to thread"
    ],
    "cons": [
      "No second room listed",
      "Stove use needs a safe stove setup"
    ],
    "bestFor": "Family camping with shade",
    "take": "The most complete package here for the money: awning, skylight and a stove jack on a 4 to 6 person frame.",
    "catch": "Wood-stove use needs its own safe stove, pipe and clearance, none of which come with the tent."
  },
  {
    "id": "best-air-tents-2",
    "rank": 2,
    "badge": "Best for Big Groups",
    "name": "8-10 Person Large Inflatable Tents for Camping",
    "price": "$399.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UBfsuxECL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FBFYLJQY?tag=rvgearlab-amz-20",
    "description": "The Ytaoeo is the biggest tent in this group, with a 13 ft by 9 ft footprint and a 6.5 ft center height. It is split into two rooms and carries PU3000mm Oxford fabric with UPF50+ sun protection.\n\nCompared with the Soboyo it adds a second room, four large mesh windows and a dedicated AC port beside the stove jack. Against the Panda it cuts the price by a wide margin while using coated Oxford instead of canvas.\n\nIt is the pick for a group that wants separate sleeping zones. One tent then handles both a wood stove and a portable air conditioner.",
    "specs": [
      "13 x 9 ft, 6.5 ft peak",
      "PU3000mm, UPF50+ Oxford",
      "Stove jack and AC port"
    ],
    "pros": [
      "Two rooms for privacy",
      "Both stove jack and AC port",
      "Four mesh windows, two doors",
      "Inflates in about 5 minutes"
    ],
    "cons": [
      "Title says 8 to 10, body says 6 to 8",
      "Large footprint needs a big pitch"
    ],
    "bestFor": "Large groups, all seasons",
    "take": "Two rooms and both heating and cooling ports make this the group-camping air tent.",
    "catch": "The listing gives two capacity figures, so plan on the lower 6 to 8 for real comfort."
  },
  {
    "id": "best-air-tents-3",
    "rank": 3,
    "badge": "Best Canvas Air Tent",
    "name": "RBM Outdoors Panda Medium Inflatable Tents for Camping Canvas Airtent Beige",
    "price": "$1089.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51HEOA+fmVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GS3VGNTS?tag=rvgearlab-amz-20",
    "description": "The RBM Outdoors Panda Medium is a canvas air-beam tent sized for 2 to 4 people. Its waterproof canvas is described as breathable, which helps with humidity, and an included hand pump inflates the frame in about five minutes.\n\nWhere the Soboyo and IYGLKD use synthetic Oxford, the Panda uses canvas and adds a roof window and TPU side windows. It is the smallest and most expensive pick here, and it is the only one built around natural fabric.\n\nIt suits a couple or a small family who want the feel of canvas. The air beams spare them from wrestling steel poles.",
    "specs": [
      "2 to 4 people, canvas",
      "Hand pump, 5 minute inflate",
      "Roof window, stove jack"
    ],
    "pros": [
      "Breathable canvas fabric",
      "Roof window brightens the interior",
      "Stove jack for cooler nights",
      "No metal poles to assemble"
    ],
    "cons": [
      "Priciest tent in this group",
      "Rated for above 32F only"
    ],
    "bestFor": "Couples wanting canvas",
    "take": "Pick it if canvas comfort matters more than raw floor space or price.",
    "catch": "Cold-weather limits are stated as above 32F, so it is not a deep-winter tent."
  },
  {
    "id": "best-air-tents-4",
    "rank": 4,
    "badge": "Best Fast Inflation",
    "name": "Inflatable Tent",
    "price": "$219.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41eqEsJ2EFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GV831FX8?tag=rvgearlab-amz-20",
    "description": "The IYGLKD inflatable tent measures 9.8 ft by 6.9 ft by 6.5 ft and is listed for 2 to 6 people. Its high-pressure pump fills the beams in about a minute, and the 300D Oxford shell comes with a repair kit and accessories.\n\nAgainst the Fseoot it adds more floor area and a sturdier fabric weight. Compared with the Soboyo it inflates faster and keeps the shape simpler, with no awning or stove jack to manage.\n\nIt works for anyone who wants a fast shelter for picnics, campsite lounging or emergency backup. Sleeping in it is one use among several.",
    "specs": [
      "9.8 x 6.9 x 6.5 ft",
      "300D Oxford, UV protection",
      "1 minute pump inflation"
    ],
    "pros": [
      "Pump inflates beams in about one minute",
      "One person can pitch it",
      "Repair kit and accessories included",
      "Doubles as a picnic or emergency shelter"
    ],
    "cons": [
      "No stove jack or awning named",
      "Wide 2 to 6 range feels optimistic"
    ],
    "bestFor": "Quick pitch, mixed use",
    "take": "Fastest inflation on the list and a useful size for day shelter or a small group.",
    "catch": "Six adults would be packed tight on a 6.3 square meter floor."
  },
  {
    "id": "best-air-tents-5",
    "rank": 5,
    "badge": "Best Budget Air Tent",
    "name": "Quick Automatic Inflatable Camping Tent",
    "price": "$159.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51f3UDDnf2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FCM6YMMZ?tag=rvgearlab-amz-20",
    "description": "The Fseoot is the least expensive air tent here, with a push-button pump that shuts itself off once the beams are full. It measures about 6.9 ft by 6.9 ft by 5.7 ft and uses 210D silver-coated Oxford with a 3000mm PU coating.\n\nIt is smaller than the IYGLKD and has no stove jack. It keeps two doors and mesh roof vents. Against the Panda it costs a fraction of the price for the same pump-up convenience.\n\nIt fits two campers who want the air-beam routine at the lowest entry cost. Keep the group small and it does the job.",
    "specs": [
      "One-touch auto inflation",
      "210D silver-coated Oxford",
      "6.9 x 6.9 ft footprint"
    ],
    "pros": [
      "Pump stops on its own",
      "Solo pitch in about two minutes",
      "Two doors and mesh vents",
      "Lowest price in this list"
    ],
    "cons": [
      "Listing says 3 to 4, best for 2",
      "Small interior and low roof"
    ],
    "bestFor": "Two campers on a budget",
    "take": "The cheapest way into air-beam camping, sized honestly for two.",
    "catch": "The 5.7 ft roof height means stooping, and gear space is tight."
  }
];

export const howWeEvaluated = [
  {
    "title": "Inflation system",
    "description": "How each frame fills and how long the listing says it takes, from one minute to about five."
  },
  {
    "title": "Capacity honesty",
    "description": "Stated sleeper counts were checked against the listed footprint, since several titles stretch the range."
  },
  {
    "title": "Fabric and coating",
    "description": "Oxford denier, PU rating and canvas content were compared for rain, sun and condensation."
  },
  {
    "title": "Cold and hot weather extras",
    "description": "Stove jacks, AC ports and awnings were noted as real functional additions."
  },
  {
    "title": "Package contents",
    "description": "Pumps, repair kits and carry gear were counted, since air beams need them to work."
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
    "subheading": "By Camping Scenario",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Family of four to six with shade needs",
          "Soboyo Awning Air Tent",
          "Detachable awning and skylight on a 4 to 6 person frame."
        ],
        [
          "Group of six or more wanting two rooms",
          "Ytaoeo Two-Room Air Tent",
          "13 x 9 ft footprint split into two rooms."
        ],
        [
          "Couple wanting canvas feel",
          "RBM Panda Canvas Air Tent",
          "Breathable canvas with a roof window."
        ],
        [
          "Fast setup for a day at the park",
          "IYGLKD One-Minute Air Tent",
          "Pump fills the frame in about a minute."
        ],
        [
          "Two people on a tight budget",
          "Fseoot Auto-Inflate Tent",
          "Auto-stop pump at the lowest price here."
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
          "$150 to $220",
          "Fseoot Auto-Inflate Tent or IYGLKD One-Minute Air Tent"
        ],
        [
          "$290 to $400",
          "Soboyo Awning Air Tent or Ytaoeo Two-Room Air Tent"
        ],
        [
          "$1080 to $1090",
          "RBM Panda Canvas Air Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Canvas vs Oxford Fabric",
    "cards": [
      {
        "label": "Canvas",
        "text": "RBM Panda Canvas Air Tent uses breathable waterproof canvas, which moves moisture better and feels cooler in humidity but costs the most and weighs more."
      },
      {
        "label": "Oxford",
        "text": "Soboyo Awning Air Tent, Ytaoeo Two-Room Air Tent, IYGLKD One-Minute Air Tent and Fseoot Auto-Inflate Tent use coated Oxford polyester, which is lighter, cheaper and rated by millimeter water column."
      }
    ],
    "note": "Most buyers should default to Oxford, like Soboyo Awning Air Tent, unless canvas feel is the whole point."
  },
  {
    "subheading": "By Extras You Want",
    "table": {
      "headers": [
        "Feature",
        "Recommended pick"
      ],
      "rows": [
        [
          "Stove jack and AC port",
          "Ytaoeo Two-Room Air Tent"
        ],
        [
          "Detachable awning",
          "Soboyo Awning Air Tent"
        ],
        [
          "Push-button auto pump",
          "Fseoot Auto-Inflate Tent"
        ],
        [
          "Roof window in canvas",
          "RBM Panda Canvas Air Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For Solo Setup Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "a pump that does the work, a one-person pitch claim and a repair kit"
      },
      {
        "label": "In this comparison",
        "text": "IYGLKD One-Minute Air Tent lists single-person setup and a one-minute pump, while Fseoot Auto-Inflate Tent shuts its pump off on its own."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want canvas or two rooms, since RBM Panda Canvas Air Tent and Ytaoeo Two-Room Air Tent bring materially different builds. The extra cost buys comfort, not just a bigger label."
      },
      {
        "label": "Save if",
        "text": "Save if you camp a few weekends a year, where Fseoot Auto-Inflate Tent or IYGLKD One-Minute Air Tent give the pump-up routine at a modest price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "How the beams work",
    "explanation": "An air tent holds its shape with inflatable tubes instead of rigid poles. The pump pressurizes the tubes, and the pressure keeps the walls up. Check that the listing names a pump and a repair kit, because a punctured beam needs a patch to stand."
  },
  {
    "criterion": "Capacity versus floor size",
    "explanation": "Sleeper counts on air tents stretch quickly. A 2 to 6 person tent with a 6.3 square meter floor fits two comfortably and six only as a squeeze. Compare the footprint in feet against the number of sleeping pads you plan to lay."
  },
  {
    "criterion": "Fabric type and rain rating",
    "explanation": "Oxford polyester with a PU coating is rated in millimeters of water column, such as 3000mm, and higher numbers resist more rain. Canvas breathes better but weighs more and costs more. Look for the rating on the listing rather than a vague waterproof claim."
  },
  {
    "criterion": "Stove jack and port safety",
    "explanation": "A stove jack is a heat-resistant opening for stovepipe. A tent with one still needs a proper stove, a spark arrestor and clearance from the fabric. Treat the jack as a feature that makes heating possible, not as proof that any stove is safe inside."
  },
  {
    "criterion": "Weight and pack size",
    "explanation": "Air beams add pump and tube weight, and a large tent can weigh as much as a small cabin tent. Check the packed dimensions if you load a small car. The listing usually states a carry bag, so look for its size."
  },
  {
    "criterion": "Wind and anchoring",
    "explanation": "Inflatable frames flex in gusts, which helps, but the walls still act like sails. Guy lines and stakes keep a tall tent planted. Look for listed guylines, and plan to stake every corner when winds are forecast."
  }
];

export const faq = [
  {
    "q": "Do air tents need a special pump?",
    "a": "Each tent comes with its own pump, and the listings name hand, electric or auto-stop types. Use the supplied pump so the pressure suits the beams. Overinflating can stress seams."
  },
  {
    "q": "What is the most common mistake with an air tent?",
    "a": "Setting it up on sharp ground without a footprint. A puncture in a beam can sag a wall. Clear sticks and stones first, and keep the repair kit in the bag."
  },
  {
    "q": "Is the RBM Panda worth it over the Soboyo?",
    "a": "Only if you want canvas fabric and a roof window. Soboyo Awning Air Tent costs far less, fits more people and adds an awning. Choose the Panda for fabric feel, not for space."
  },
  {
    "q": "How do I pitch an air tent alone?",
    "a": "Peg the corners lightly, connect the pump and inflate the beams until firm. Then tension the guylines and stake the rest. The listings for IYGLKD and Fseoot both describe one-person setup."
  },
  {
    "q": "How should I store an air tent?",
    "a": "Dry it fully, deflate the beams and fold it loosely. Store it in the carry bag away from heat. A damp packed tent can mildew within days."
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
