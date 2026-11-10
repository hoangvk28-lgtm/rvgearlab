export const guideSlug = "best-beach-tents-under-100";
export const guideTitle = "5 Best Beach Tents Under 100 in 2026";
export const metaTitle = "Best Beach Tents Under 100 in 2026";
export const metaDescription = "Best beach tents under $100 compared on canopy size, frame material, anchors and privacy, for families who want a sturdier setup than the entry-level pop-ups.";
export const mainKeyword = "best beach tents under 100";
export const introParagraphs = [
  "A $100 ceiling moves you from fiberglass pop-ups to steel-framed canopies, larger Lycra shelters and silver-coated cabanas. That is a real jump in wind resistance and shade area, though it also brings heavier carries and longer pitch times.",
  "Five shelters made the list, spread from a 4 person pop-up cabin up to a large 10 by 10 foot Lycra canopy near the top of the range. They are ranked by how much frame strength and shade area each adds over the cheaper picks, with the best all-round value first."
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
    "id": "best-beach-tents-under-100-1",
    "rank": 1,
    "badge": "Best Value Under $100",
    "name": "10x10 Pop Up Canopy Tent Blue Instant Setup Outdoor Beach Shade Camping",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51vp2R+MdFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HDRS4HQX?tag=rvgearlab-amz-20",
    "description": "The blue 10 by 10 foot canopy has a center-lock steel frame, a silver-coated 210D Oxford top rated UPF 50+ and no sidewalls. It weighs 35 pounds, folds to about a 4 foot bundle, and comes with eight steel stakes, four wind ropes and four sandbags.\n\nNo other pick in this group ships a complete anchor kit with ropes, stakes and bags, and neither the Vinabilia nor the Family Beach Tent canopy matches it. The steel frame is heavier than the Hqeeun aluminum poles and costs about the same.\n\nIt suits families who take the car right to the shoreline and want the sturdiest anchoring for the money. The open sides keep sea air moving through all day.",
    "specs": [
      "10x10 steel center-lock frame",
      "210D Oxford, UPF 50+",
      "Stakes, ropes and sandbags included"
    ],
    "pros": [
      "Full anchor kit in the box",
      "Rust-resistant powder-coated steel frame",
      "One person can pop it up",
      "Folds to a 4 ft bundle"
    ],
    "cons": [
      "35 pounds is heavy for a long beach walk",
      "No sidewalls for wind or privacy"
    ],
    "bestFor": "Drive-up beach days",
    "take": "The best anchored setup under the cap, with every stake and bag included.",
    "catch": "It is a steel frame, so carry it on a cart if the parking lot is far from the sand."
  },
  {
    "id": "best-beach-tents-under-100-2",
    "rank": 2,
    "badge": "Best Large Lycra Shade",
    "name": "Family Beach Tent Canopy Sun Shade",
    "price": "$81.21",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/510CVlsOfJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08R5Q9CLN?tag=rvgearlab-amz-20",
    "description": "This family canopy is sold in a 10 by 10 foot size and a smaller 7 by 7.5 foot size, with Lycra fabric rated UPF 50+ and water-resistant. Four tall poles hold it at full height, and fillable sandbag anchors, stakes and elastic-cord poles are part of the build.\n\nIt has the stretchiest and lightest fabric here, which beats the 210D Oxford canopy on packed weight. It does not include the wind ropes the Blue 10x10 Steel Canopy has, so it relies on sandbags and stakes to stay put.\n\nIt suits groups of up to eight who want a big open umbrella of shade at the beach, a lake or a soccer field. The elastic cord keeps the poles joined and quick to set.",
    "specs": [
      "10x10 Lycra, UPF 50+",
      "Four tall stability poles",
      "Sandbag anchors and stakes"
    ],
    "pros": [
      "Big 10x10 coverage",
      "Lycra is light and packs small",
      "Elastic cord links the poles",
      "Also suits lawns and field days"
    ],
    "cons": [
      "Relies on sandbags and stakes alone",
      "Smaller size sold on the same page"
    ],
    "bestFor": "Groups and sports days",
    "take": "A light, wide Lycra canopy that covers a crowd.",
    "catch": "Pick the 10x10 option on the page, since a smaller 7 by 7.5 size shares it."
  },
  {
    "id": "best-beach-tents-under-100-3",
    "rank": 3,
    "badge": "Best Adjustable Canopy",
    "name": "Vinabilia 10x10 Pop Up Canopy Tent with One-Push Center Lock",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41g0bQEYWbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GLFFMS4R?tag=rvgearlab-amz-20",
    "description": "The Vinabilia is a 10 by 10 foot one-push canopy with a maximum interior height of 8.9 feet and three adjustable leg heights. Its powder-coated steel frame supports 120 pounds, the UPF 50+ fabric has heat-sealed seams and it folds to 46 inches in an Oxford bag.\n\nThe one-push center lock opens faster than the Blue 10x10 Steel Canopy and gives taller headroom than the Hqeeun or EchoSmile. It costs more than the Blue canopy and ships without a rope and sandbag kit.\n\nIt suits campers who also use the shade at the campsite, backyard or a tailgate, since the three height settings suit different seating. A tall roof lets adults stand and keeps the heat higher overhead.",
    "specs": [
      "10x10, 8.9 ft interior",
      "Three leg height settings",
      "Heat-sealed UPF 50+ seams"
    ],
    "pros": [
      "Taller roof than most beach shelters",
      "Folds to a 46 in bundle",
      "Heat-sealed seams shed light rain",
      "Reinforced foot pads grip grass"
    ],
    "cons": [
      "Anchoring gear is extra",
      "Priciest of the steel-frame picks"
    ],
    "bestFor": "Beach plus campsite shade",
    "take": "A taller, more flexible canopy that earns its keep beyond the beach.",
    "catch": "Bring sandbags or stakes of your own for sand."
  },
  {
    "id": "best-beach-tents-under-100-4",
    "rank": 4,
    "badge": "Best Silver-Coated Cabana",
    "name": "Hqeeun Beach Cabana",
    "price": "$56.81",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Q6O0O2hzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GY1CS1CB?tag=rvgearlab-amz-20",
    "description": "The Hqeeun cabana covers 8 by 8 feet, over 64 square feet, with a 300D fabric that has a double-layer silver coating rated UPF 50+. A thickened aluminum alloy pole frame, sandbags and a side wall come with it, and one person can pop it up.\n\nIts metal poles are lighter than the steel on the Blue 10x10 Steel Canopy and sturdier than the fiberglass on the EchoSmile. It sits mid-range in the group, with less floor than any of the 10 by 10 foot canopies.\n\nA good fit for four-person families wanting a cooler, reflective cabana with a side wall for low sun. The silver coating also helps keep the shaded air a little cooler.",
    "specs": [
      "8x8 ft, 300D silver coating",
      "Aluminum alloy pole frame",
      "Side wall and sandbags"
    ],
    "pros": [
      "Silver coating reflects heat",
      "Aluminum frame is light and sturdy",
      "Side wall blocks low sun",
      "Sandbags included"
    ],
    "cons": [
      "Smaller than the 10x10 canopies",
      "Only one side wall"
    ],
    "bestFor": "Hot, sunny beaches",
    "take": "A tough, reflective cabana for hot days and a family of four.",
    "catch": "No stakes or guy ropes are mentioned, so check sand anchoring before a windy day."
  },
  {
    "id": "best-beach-tents-under-100-5",
    "rank": 5,
    "badge": "Best Private Pop-Up",
    "name": "EchoSmile Pop Up Tent for 4 Person Family",
    "price": "$40.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fTPHQRM1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GCF78HND?tag=rvgearlab-amz-20",
    "description": "The EchoSmile is an automatic pop-up for four with 190T silver-coated polyester that screens about 98 percent of UV. It has a 5.0mm anti-deformation fiberglass frame, sandbags, stakes and wind ropes, and a zippered front door.\n\nOf the five picks it is the only one you can zip shut, which gives a private spot for changing or nursing. It costs the least here, and its fiberglass frame is thinner than the metal frames on the Hqeeun and Blue canopies.\n\nIt suits families with small children who need a nap tent and changing room more than a big shaded lounge. Set it up in seconds and leave the chairs outside.",
    "specs": [
      "Automatic pop-up for four",
      "190T silver-coated polyester",
      "Zippered front door, wind ropes"
    ],
    "pros": [
      "Zip door for changing or naps",
      "Sandbags, stakes and ropes included",
      "Sets up with no tools",
      "Lowest price of the five"
    ],
    "cons": [
      "Thin fiberglass frame flexes in gusts",
      "Smaller than the canopies"
    ],
    "bestFor": "Families with toddlers",
    "take": "A private, quick-pitch cabin for naps and quick changes.",
    "catch": "It is a small cabin, so chairs usually stay outside."
  }
];

export const howWeEvaluated = [
  {
    "title": "Shade area",
    "description": "Compared floor space from 4 person cabins to 10 by 10 foot canopies, since shade is the main job."
  },
  {
    "title": "Frame material",
    "description": "Weighed steel, aluminum and fiberglass for wind resistance, weight and rust."
  },
  {
    "title": "Anchor kits",
    "description": "Looked for sandbags, stakes and ropes in the box and treated a full kit as value."
  },
  {
    "title": "Fabric and UPF",
    "description": "Compared denier, silver coatings and Lycra against heat, UV and durability."
  },
  {
    "title": "Price against the cap",
    "description": "Ranked what each tent adds over cheaper models up to the $100 ceiling."
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
    "subheading": "By Beach Day",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Drive-up beach with a full cooler",
          "Blue 10x10 Steel Canopy",
          "Steel frame and full anchor kit."
        ],
        [
          "Long walk from parking",
          "Family Beach Tent Canopy",
          "Light Lycra, packs small."
        ],
        [
          "Beach plus campsite use",
          "Vinabilia One-Push",
          "Taller roof, adjustable legs."
        ],
        [
          "Hot sun and a family of four",
          "Hqeeun Silver Cabana",
          "Silver coating, side wall."
        ],
        [
          "Toddler naps and changing",
          "EchoSmile 4P Cabin",
          "Zip door gives privacy."
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
          "$40 to $60",
          "EchoSmile 4P Cabin or Hqeeun Silver Cabana"
        ],
        [
          "$50 to $70",
          "Blue 10x10 Steel Canopy or Vinabilia One-Push"
        ],
        [
          "$80 to $90",
          "Family Beach Tent Canopy"
        ]
      ]
    }
  },
  {
    "subheading": "Canopy vs Cabin",
    "cards": [
      {
        "label": "Canopy",
        "text": "A canopy is a 10 by 10 foot roof on poles with open sides, so it lets air through and fits a crowd. The Blue 10x10 Steel Canopy, Family Beach Tent Canopy and Vinabilia One-Push are canopies."
      },
      {
        "label": "Cabin",
        "text": "A cabin encloses most sides, which blocks sand and gives privacy but holds more heat. The Hqeeun Silver Cabana and EchoSmile 4P Cabin work this way."
      }
    ],
    "note": "Choose a canopy for groups and a cabin for toddlers, then pick the Blue 10x10 Steel Canopy as the default."
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
          "Around $40, private pop-up",
          "EchoSmile 4P Cabin"
        ],
        [
          "Around $57, silver cabana",
          "Hqeeun Silver Cabana"
        ],
        [
          "Around $60, best value",
          "Blue 10x10 Steel Canopy"
        ],
        [
          "Around $70, tall roof",
          "Vinabilia One-Push"
        ],
        [
          "Around $81, large Lycra",
          "Family Beach Tent Canopy"
        ]
      ]
    }
  },
  {
    "subheading": "A Large Family Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "At least 100 square feet of shade, a complete anchor kit and a center height that lets adults stand."
      },
      {
        "label": "In this comparison",
        "text": "The Blue 10x10 Steel Canopy and Family Beach Tent Canopy both give 10 by 10 feet, and the Vinabilia One-Push adds headroom."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend toward the cap on the Family Beach Tent Canopy or Vinabilia One-Push when you need 100 square feet of shade for a big group, or on the Blue 10x10 Steel Canopy for the best anchoring."
      },
      {
        "label": "Save if",
        "text": "Save with the EchoSmile 4P Cabin when privacy and speed matter more than lounge space, or choose the Hqeeun Silver Cabana for a mid-priced metal frame."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Steel, aluminum or fiberglass",
    "explanation": "Steel frames are strongest and heaviest, aluminum is lighter and resists rust, and fiberglass is cheapest but flexes. A 35 pound steel canopy stays put in a gust that lifts a 6 pound fiberglass pop-up. Look for the frame material in the title or bullet points, not just the word sturdy."
  },
  {
    "criterion": "Complete anchor kit",
    "explanation": "A beach tent without anchors is only a sail. Four sandbags, eight steel stakes and four wind ropes can hold a 10 by 10 foot canopy through a steady 15 mph breeze, while a lone set of plastic stakes will not. Check which anchors come with the tent before adding to the cart."
  },
  {
    "criterion": "Canopy or enclosed cabin",
    "explanation": "Open canopies move air and fit a crowd but give no privacy or wind break. Enclosed cabins block sand and let you change clothes, though they run hotter. Decide up front whether you want to lounge with a crowd or shelter a small group, because that choice changes which shape is right. Check whether the tent has a zip door and how many sides are solid."
  },
  {
    "criterion": "Height at the center",
    "explanation": "Roof height decides whether adults can stand and how hot the air feels at head level. A canopy with an 8.9 foot center feels roomier than a 5 foot cabin. Check the interior height figure if you plan to stand or set up tall chairs."
  },
  {
    "criterion": "Carry weight and packed size",
    "explanation": "A steel 10 by 10 canopy can weigh 35 pounds, while a Lycra one is much lighter. If the walk from parking is more than a couple of hundred yards, weight matters more than size. Look for the packed length so it fits your trunk and your cart."
  }
];

export const faq = [
  {
    "q": "Does a steel or aluminum frame matter at the beach?",
    "a": "Yes, because wind and salt air punish weak frames. Steel on the Blue 10x10 Steel Canopy resists bending, and aluminum on the Hqeeun Silver Cabana resists rust. Thin fiberglass flexes and can crack after a few seasons."
  },
  {
    "q": "What do I do if my tent has no anchors?",
    "a": "Add four 10 to 15 pound sandbags or a set of long stakes and wind ropes before heading to the shore. Fill each bag with wet sand and tie it to the leg near the base. Never leave an unanchored canopy standing unattended."
  },
  {
    "q": "Is the Vinabilia worth more than the Blue canopy?",
    "a": "The Vinabilia One-Push costs more and gives a higher roof and quicker setup. The Blue 10x10 Steel Canopy includes stakes, ropes and sandbags. Pick the Vinabilia for headroom and the Blue canopy when anchoring is the priority."
  },
  {
    "q": "How do I set up a 10x10 canopy by myself?",
    "a": "Stand in the middle of the folded frame and pull one side out while holding the center lock. Extend each leg a notch at a time to keep the frame level. Clip the top on, push the center up and finish with the sandbags."
  },
  {
    "q": "How should I store a beach canopy after salt exposure?",
    "a": "Rinse the poles and fabric with fresh water, then dry everything fully before folding. Salt corrodes steel joints and weakens the fabric coating if left in a damp bag. Store it in the carry bag in a cool, dry place."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Beach Tents",
    "href": "/tents-shelter/best-beach-tents"
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
