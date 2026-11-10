export const guideSlug = "best-5-person-rooftop-tents";
export const guideTitle = "2 Best 5 Person Rooftop Tents in 2026";
export const metaTitle = "Best 5 Person Rooftop Tents in 2026";
export const metaDescription = "Two rooftop tents sold for four to five sleepers, a $1,566.75 soft shell and a $5,810 four-season hard shell, compared on capacity, seasons and roof load.";
export const mainKeyword = "best 5 person rooftop tents";
export const introParagraphs = [
  "A rooftop tent turns a truck, SUV or van into a sleeping platform that sits above wet ground, rocks and critters. For RV owners the appeal is usually a different one: a spare bed for extra family or friends at the campsite without hauling a second trailer, or a lightweight base camp on a tow vehicle while the coach stays parked. Five sleepers is an ambitious target for something that mounts on a roof rack, and that ambition is exactly where listings start to blur the facts. A tent that claims five berths can be technically correct and still be uncomfortable, so it helps to read the numbers closely.",
  "Most rooftop tents sleep two or three adults. Tents that claim room for five are rare, and they are heavy, tall and expensive to carry. Only two listings in this category clearly aim at that group size, one a soft shell sold as 4 to 5 person and one a side-open hard shell titled for five. Both ask a lot of a vehicle roof and a rack, so the first thing to do before ordering is look up your vehicle's roof rating and your rack's dynamic load capacity, which is the weight it can carry while driving, and compare it with the tent's weight plus the people inside.",
  "This guide covers those two options. We evaluated them on stated sleeping capacity, season rating, build type, price and the details the listings share about hardware and extras, judged on manufacturer specifications and owner feedback. The comparison is not close in price: the soft shell costs about a quarter of the hard shell, and that gap reflects real differences in materials and weather protection.",
  "One practical note about the listings. The soft shell's description text mentions a different model number, and the hard shell's bullet text mentions space for two to three people while the title says five. Treat both as reasons to confirm the sleeping capacity and dimensions with the seller before you order, and to compare the interior floor area with the number of sleepers you actually plan to fit. A rooftop tent rated for five people usually means five people sleeping close together, not five people with room to roll over.",
  "A ground dome tent is a different product class and is left out of this guide. If you need to sleep five people and your vehicle cannot carry a heavy tent on the roof, a large family dome is often the more practical answer, and it costs far less. The two tents here make sense only for owners with a rack and roof strong enough to carry them, and a real need for the elevated platform."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-camper-by-tent.webp";
export const heroImageAlt = "Camper standing next to a tent at a campsite";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  "take"?: string;
  "catch"?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-5-person-rooftop-tents-1",
    "rank": 1,
    "badge": "Best Soft Shell for Large Groups",
    "name": "Basecamp 190 Soft Shell Rooftop Tent 4",
    "price": "$1566.75",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411Yz68lLnL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H2GHG4PV?tag=rvgearlab-amz-20",
    "description": "The Kermode Basecamp 190 is a soft shell rooftop tent sold as 4 to 5 person, and the listing describes it as a three-season design for spring, summer and autumn. At $1,566.75 it is the more affordable option by a wide margin, and it sleeps up to five.\n\nCompared with the hard shell BVWBCR, it costs roughly a quarter as much and carries a four-to-five capacity, so the price per sleeper is far lower. A soft shell also folds flatter against the roof when closed, which helps keep the tent profile lower while driving than a tall hard shell.\n\nIt is the pick for families who camp from spring through autumn and want the most sleepers for the money, and for owners who want a rooftop platform without a five-figure budget.",
    "specs": [
      "Soft shell, 4 to 5 person",
      "Three-season build",
      "Kermode Overlanding"
    ],
    "pros": [
      "Sold for four to five people",
      "Costs about a quarter of the other pick",
      "Three-season rating",
      "Soft shell folds flatter"
    ],
    "cons": [
      "Not for winter camping",
      "Listing text names a Basecamp 240"
    ],
    "bestFor": "Warm-weather family camping on a budget",
    "take": "The affordable large-capacity soft shell.",
    "catch": "Check the exact model and size, since the text mentions a 240."
  },
  {
    "id": "best-5-person-rooftop-tents-2",
    "rank": 2,
    "badge": "Best Four-Season",
    "name": "Heavy Duty Four-Season Manufacturer Side Open Large Size Family Outdoor Camping Car Roof Top Tent",
    "price": "$5810.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418J7Uz282L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GHYXBDST?tag=rvgearlab-amz-20",
    "description": "The BVWBCR is a side-open hard shell titled 5 person and described as four-season, with ABS panels on an aluminum frame and a built-in air conditioner duct hole. The listing describes a heavy-duty family design, and it costs $5,810.00.\n\nIt is the only four-season option in this comparison, which makes it a different tool from the soft shell: the hard panels shed snow and wind better than fabric, and the duct hole lets you run a portable air conditioner into the tent in hot weather. The side-open layout also eases entry from the side of a vehicle.\n\nIt is the pick for families who camp year-round, want a hard shell and have the roof capacity to carry a heavy tent, and who value four-season use above the lowest price.",
    "specs": [
      "Side-open hard shell, 5 person",
      "Four-season build",
      "AC duct hole"
    ],
    "pros": [
      "Titled for five people",
      "Four-season rating",
      "Air conditioner duct hole",
      "ABS and aluminum build"
    ],
    "cons": [
      "Very high price",
      "Its bullet text mentions space for 2 to 3"
    ],
    "bestFor": "Year-round family camping with a hard shell",
    "take": "The four-season five-person shell, at a premium.",
    "catch": "Ask the seller about real sleeping size and weight."
  }
];

export const howWeEvaluated = [
  {
    "title": "Sleeping capacity claim",
    "description": "We compared how each listing states its capacity: the Kermode is sold as 4 to 5 person, and the BVWBCR is titled 5 person while its bullet text mentions two to three. A clear capacity statement scored higher than a conflicting one. Because capacity drives the entire purchase, a vague claim is a reason for caution rather than a minor detail."
  },
  {
    "title": "Season rating",
    "description": "Weather protection decides when you can use the tent. We compared the three-season rating of the Kermode with the four-season rating of the BVWBCR, and considered what each means for snow, wind and cold nights. Fabric walls and hard panels handle wind and condensation differently, so the rating is a starting point rather than a guarantee."
  },
  {
    "title": "Build type",
    "description": "Soft shell and hard shell tents behave differently. We compared the soft shell's flatter fold with the hard shell's ABS and aluminum construction, including setup speed and how each rides on the road. Height matters too, since a tall closed tent adds drag and can limit where you can park or drive."
  },
  {
    "title": "Price and value",
    "description": "At $1,566.75 and $5,810.00 the two tents sit in different budget classes. We weighed what the extra money buys, such as four-season use, a duct hole and a side-open hard shell. We also considered the likely number of nights per year, since a tent used a few weekends each season does not need to earn back a premium."
  },
  {
    "title": "Roof and rack demands",
    "description": "A five-person tent is heavy. We considered what each build asks of a roof and rack, and noted that dynamic load ratings on your vehicle should be checked before ordering. A tent that exceeds the rating is not a safe purchase no matter how good the other features are."
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
    "subheading": "By Season Of Use",
    "intro": "When you plan to camp decides how much shell you need. A tent that only handles warm weather is a poor buy for a winter trip.",
    "table": {
      "headers": [
        "Your camping season",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Late spring through early autumn",
          "Kermode Basecamp 190 Soft Shell",
          "Described as a three-season design for spring, summer and autumn."
        ],
        [
          "Year-round including snow",
          "BVWBCR Four-Season Side Open Hard Shell",
          "The only four-season option in this guide, with hard ABS panels."
        ],
        [
          "Summer heat with a portable air conditioner",
          "BVWBCR Four-Season Side Open Hard Shell",
          "Includes a built-in air conditioner duct hole."
        ],
        [
          "A few weekends a year in mild weather",
          "Kermode Basecamp 190 Soft Shell",
          "Lower price suits occasional use."
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "These two tents sit far apart in price. The decision is whether the extra features justify the cost.",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "Around $1,500 to $1,600",
          "Kermode Basecamp 190 at $1,566.75, sold for four to five people."
        ],
        [
          "Around $5,800",
          "BVWBCR Four-Season at $5,810.00 for a hard shell with a duct hole."
        ],
        [
          "Less than $1,500",
          "Neither tent; a ground family tent is a more practical way to sleep five."
        ]
      ]
    }
  },
  {
    "subheading": "Soft Shell vs Hard Shell",
    "intro": "The two tents are built differently, and the construction shapes how they set up, how they ride and how they handle weather.",
    "cards": [
      {
        "label": "Soft shell",
        "text": "The Kermode Basecamp 190 folds flatter against the roof and uses fabric walls, which usually means a lower profile and a lower price. It suits three-season camping and owners who want the most sleepers for the least money."
      },
      {
        "label": "Hard shell",
        "text": "The BVWBCR uses ABS panels on an aluminum frame and a side-open layout. Hard shells usually set up quickly and shed weather well, and this model is described as four-season. They suit year-round use and cost much more."
      }
    ],
    "note": "Most families camping in warm months will be well served by the soft shell, and should only pay for the hard shell if they truly need four seasons."
  },
  {
    "subheading": "By Vehicle and Rack",
    "intro": "A five-person tent is heavy, and the roof, rack and crossbars all have limits. This second axis is about what your vehicle can carry.",
    "table": {
      "headers": [
        "Your vehicle setup",
        "Recommended pick"
      ],
      "rows": [
        [
          "A full-size truck with a strong rack",
          "BVWBCR if you need four seasons, or Kermode if three seasons are enough."
        ],
        [
          "An SUV with limited roof capacity",
          "Kermode Basecamp 190 Soft Shell, and confirm the dynamic load rating first."
        ],
        [
          "A vehicle with no suitable rack",
          "Neither tent; consider a ground dome tent instead."
        ],
        [
          "A rack with a rated dynamic load that exceeds the tent weight plus margin",
          "Either tent, chosen by season and budget."
        ]
      ]
    }
  },
  {
    "subheading": "For Families Sleeping Five Specifically",
    "intro": "Five sleepers in one tent is a tight fit. Floor area, entry style and door layout all matter for a family.",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated floor area that suits five, a clear capacity claim, a side-open or easy entry style and a build that matches your season. Confirm the interior dimensions with the seller if bullet text conflicts with the title."
      },
      {
        "label": "In this comparison",
        "text": "The Kermode Basecamp 190 is sold as 4 to 5 person and is the budget route to five sleepers. The BVWBCR is titled 5 person with a side-open hard shell, though its bullet text mentions two to three."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "With a gap of more than four thousand dollars, the question is what you gain from the hard shell.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend $5,810.00 on the BVWBCR if you camp in all four seasons, want a hard shell with ABS panels and an aluminum frame and want to run an air conditioner into the tent."
      },
      {
        "label": "Save if",
        "text": "Save with the Kermode Basecamp 190 at $1,566.75 if you camp from spring to autumn, want to sleep up to five and prefer to put the difference toward a rack or other gear."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Stated sleeping capacity",
    "explanation": "Capacity is the number of people a tent is designed to sleep, and for rooftop tents it usually reflects shoulder-to-shoulder sleeping. A five-person claim leaves very little room for gear. Look for the number in the title and bullet points, and treat any conflicting text, such as a bullet that says two to three, as a prompt to ask the seller."
  },
  {
    "criterion": "Roof and rack load rating",
    "explanation": "Your vehicle has a dynamic load limit, which is the weight it can carry while moving, and a higher static limit for when it is parked. A tent plus mounting hardware can take much of that limit before anyone climbs in. Check your owner's manual and rack rating, and compare them with the tent's listed weight. If the listing does not state a weight, ask the seller before ordering, since that number decides whether the tent can ride on your vehicle at all."
  },
  {
    "criterion": "Season rating",
    "explanation": "Three-season means spring, summer and autumn, and four-season adds the capability to handle winter wind and snow. Soft fabric walls usually insulate and shed snow less than hard shells. Read the season wording in the title and bullets, and match it to the coldest night you expect to camp. If you are unsure, plan for the cooler end of your trips, since you can always vent a warm tent but cannot add insulation to a thin one."
  },
  {
    "criterion": "Soft shell or hard shell",
    "explanation": "A soft shell uses fabric walls and folds flat, and a hard shell uses rigid panels, often ABS or aluminum. The choice affects setup time, wind noise, weather handling and price. Look at the construction named in the listing, and think about how much time and effort you want to spend at each campsite. If you move camp every night, a faster setup counts for more than any other feature."
  },
  {
    "criterion": "Entry layout and access",
    "explanation": "A side-open tent opens along the side of the vehicle, while others open from the rear. This changes how you get in, where the ladder lands and how much clearance you need. Check the layout in the listing and picture your usual parking spot and doors. A side-open tent needs clearance beside the vehicle, which can be a problem in narrow campsites or against a wall."
  },
  {
    "criterion": "Extras and ventilation",
    "explanation": "A duct hole for an air conditioner, windows and vents change comfort. They add to the price but can make a hot night bearable. Look for these extras in the bullet points and consider whether you will actually use them. A duct hole is only useful if you own a portable air conditioner and have power at the campsite."
  }
];

export const faq = [
  {
    "q": "Can a rooftop tent really sleep five adults?",
    "a": "It can on paper, but it is a tight fit. Tents sold for five people typically assume everyone sleeps close together with little space for gear. Check the floor area and the seller's capacity statement, and consider whether children or adults will be using it before you rely on the full number. A realistic plan for five sleepers is two adults and three children, not five adults."
  },
  {
    "q": "How do I know if my vehicle can carry the tent?",
    "a": "Look up the roof's dynamic load rating in your owner's manual and the rating on your rack and crossbars. Add the tent's weight to the weight of any other roof gear and keep a margin. The tent also affects fuel economy, wind noise and clearance at garages and gas stations. Measure the loaded height of your vehicle and write it on a sticky note on the dashboard so you do not forget it."
  },
  {
    "q": "Is the BVWBCR worth the price over the Kermode?",
    "a": "It is worth it only if you need the features. At $5,810.00 it adds a four-season rating, ABS panels on an aluminum frame, a side-open hard shell and an air conditioner duct hole. The Kermode at $1,566.75 covers three seasons for roughly a quarter of the price."
  },
  {
    "q": "How hard is it to set up a rooftop tent?",
    "a": "Soft shells usually unfold and need a few minutes to set up, and hard shells often open faster. Practice once at home before your first trip so you know how the ladder, poles and covers work. Always check that the tent is fully latched before you drive."
  },
  {
    "q": "How do I keep condensation down inside?",
    "a": "Open the vents or windows slightly even in cold weather, since breath and body heat create moisture. Air out the tent after each trip and never pack it away wet. A dry tent lasts longer and avoids mildew. If you must pack up in the rain, open the tent as soon as you reach home and let it dry fully before storing it."
  },
  {
    "q": "Can I use a rooftop tent on a camper van or trailer?",
    "a": "It depends on the roof's strength. Many RV roofs are not designed to carry a rooftop tent, so check the manufacturer's guidance before mounting anything. A tow vehicle with a proper rack is usually a safer base, and the added height and weight can affect handling in wind, so drive more cautiously with a tent mounted."
  }
];

export const bottomLine = [
  "For most families, the Kermode Basecamp 190 at $1,566.75 is the practical pick: a soft shell sold for four to five people and described as a three-season design. The BVWBCR at $5,810.00 is the better tent only if you camp in all four seasons and want a hard shell with an air conditioner duct hole.",
  "Before ordering either one, check your vehicle's dynamic roof load, your rack rating and the seller's capacity statement. RV Gear Lab suggests treating five sleepers as a maximum and planning for fewer if you want room for gear.",
  "If a rooftop tent proves more than you need, a ground tent with a cot or air mattress is a far cheaper way to add sleeping space beside your coach, and it avoids the weight and wind concerns of a roof mount. The two tents here make the most sense for owners who already have a strong rack and a real reason to sleep off the ground."
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
