export const guideSlug = "best-sleeping-bag-under-100";
export const guideTitle = "4 Best Sleeping Bag Under 100 in 2026";
export const metaTitle = "Best Sleeping Bag Under 100 in 2026";
export const metaDescription = "Four adult sleeping bags under $100 compared by temperature rating, size, weight and fabric, from a 10F big and tall Coleman to a $17.99 budget bag.";
export const mainKeyword = "best sleeping bag under 100";
export const introParagraphs = [
  "A hundred dollars buys a surprisingly capable sleeping bag, as long as you accept what that money is for. At this price you are shopping for car campers, RV guest beds and backyard sleepovers, not ultralight mountain gear, and the useful questions change accordingly. How cold will the nights really be? How big is the sleeper? Will the bag live in a camper bay or ride in a pack? A bag that answers those questions beats a more expensive bag that answers none of them.",
  "Temperature ratings are where budget shoppers get burned. A rating printed on a bag is not a promise of comfort at that number, and many cheap bags print a range such as 50 to 68 degrees Fahrenheit, which tells you plainly that they are warm weather products. The Coleman in this guide stands apart with a 10 degree rating, and it carries about 5 pounds of fill to match, so it belongs in a truck or a trailer rather than on your back. Size is the second gotcha. Roomy bags suit side sleepers and bigger adults, and snug bags keep you warmer per ounce.",
  "Lining and shell fabric round out the choice. Cotton flannel feels soft and cozy against the skin and dries slowly, while polyester shells feel slick and shed moisture. A wipe clean shell is a real convenience for kids, and a compression sack makes a difference when storage is tight in a camper cabinet.",
  "RV Gear Lab compared four bags under $100: the Coleman Heritage Big and Tall 10F flannel bag at $67.58, a 100 percent cotton flannel XXL bag at $39.99, the MalloMe bag at $24.69 and a lightweight 190T polyester bag at $17.99. We researched stated ratings, dimensions, weight, lining and extras, then matched each bag to the weather and sleeper it suits.",
  "Layering decisions often matter more than the bag itself. A sleeping pad under the bag adds the missing insulation from the ground, a fleece liner adds several degrees and a warm hat keeps heat from escaping through your head. Together they can stretch a budget bag across a wider temperature range than its label suggests, which is a far cheaper approach than buying a colder rated bag you will rarely need.",
  "Think about care as well. Cotton flannel bags take a long time to dry, so a tent or camper that gets damp overnight means a slow morning of airing the bag out. Polyester shells shed moisture and dry faster, which makes them handy for kids and for trips with surprise rain. Pick the shell that suits your weather habits, and keep a clothesline or a bag stand handy at camp.",
  "Finally, consider how often the bag will really be used. A bag that sees two trips a year can be simple and cheap, while one that sleeps a family every weekend deserves a sturdier zipper and a washable build."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/sleep-tent-sleeping-bag.webp";
export const heroImageAlt = "Camper sitting inside a tent next to an unrolled sleeping bag";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  "take"?: string;
  "catch"?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-sleeping-bag-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Coleman Heritage Big & Tall 10°F Flannel Sleeping Bag",
    "price": "$67.58",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41keO1KCq5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B004J2FB5Y?tag=rvgearlab-amz-20",
    "description": "The Coleman Heritage Big and Tall is rated to 10 degrees Fahrenheit, measures 40 by 84 inches and uses about 5 pounds of Holofill 808 insulation, with a flannel lining and a fit that accommodates sleepers up to 6 feet 7 inches. It costs $67.58.\n\nIt is the only bag in this guide with a cold weather rating, and the 40 inch width gives larger adults room to turn that narrower bags cannot match. FiberLock construction keeps the fill from shifting, and the bag is machine washable, which makes upkeep easy. Compared with the $39.99 flannel bag, it adds a real 10 degree rating and a roomier cut for under $28 more.\n\nBig and tall campers, cold weather car campers and anyone who wants one bag that handles chilly nights will find it the best overall pick.",
    "specs": [
      "10F rated, 40 x 84 inches",
      "5 lb Holofill 808 insulation",
      "Fits to 6 ft 7 in"
    ],
    "pros": [
      "Rated to 10F",
      "Very roomy 40 inch width",
      "FiberLock keeps fill in place",
      "Machine washable"
    ],
    "cons": [
      "Heavy at about 5 lb of fill",
      "Too bulky for hiking"
    ],
    "bestFor": "Big and tall car campers",
    "take": "The only bag under the cap that handles real cold.",
    "catch": "It is large, so keep it for car camping."
  },
  {
    "id": "best-sleeping-bag-under-100-2",
    "rank": 2,
    "badge": "Best Cozy Flannel",
    "name": "100% Cotton Flannel XXL 3 Season Waterproof Sleeping Bags for Adults",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31HRqoidMZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G491T759?tag=rvgearlab-amz-20",
    "description": "The 100 percent cotton flannel XXL bag measures 36 by 87 inches, with a cotton flannel lining, a three season design and a stated 50 to 68 degree range at $39.99. It has a two way zipper and zipper fastening straps for neat storage.\n\nThe brushed flannel lining feels soft against the skin, and the wide 36 inch cut gives side sleepers room to bend knees and shift position. Compared with the MalloMe at $24.69, it adds the cozy lining and extra length of 87 inches, and next to the Coleman it costs about $28 less for milder weather use.\n\nSide sleepers, guests in an RV and families who camp in mild weather and want a comfortable, roomy bag will enjoy it.",
    "specs": [
      "36 x 87 inch size",
      "Cotton flannel lining",
      "50F to 68F range"
    ],
    "pros": [
      "Soft brushed flannel lining",
      "Wide 36 inch cut for side sleepers",
      "Zipper fastening straps",
      "Two-way zipper"
    ],
    "cons": [
      "Mild weather only",
      "Comfort temperature listing is unclear"
    ],
    "bestFor": "Side sleepers in mild weather",
    "take": "A roomy, soft bag for three-season car camping.",
    "catch": "The temperature text in the listing is confusing, so treat 50F as the low end."
  },
  {
    "id": "best-sleeping-bag-under-100-3",
    "rank": 3,
    "badge": "Best Light Option",
    "name": "MalloMe Sleeping Bags for Adults Cold Weather & Warm",
    "price": "$24.69",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51TnRkxW-6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B077XQDZW4?tag=rvgearlab-amz-20",
    "description": "The MalloMe weighs about 3 pounds, carries a 50 to 77 degree rating and has a wipe clean waterproof shell, at $24.69. It is machine washable and fits adults up to about 6 feet tall.\n\nIts light 3 pound weight is the lowest of the larger bags in this guide, and the wipe clean shell makes it a good match for kids and muddy campsites. Compared with the $17.99 budget bag, it adds a washable build and a wider warm weather range for about $7, and compared with the Coleman it weighs roughly 2 pounds less.\n\nSummer campers, scout troops and Rig owners wanting a bag that cleans up fast for warm nights get the best return here.",
    "specs": [
      "About 3 lb",
      "50F to 77F rated",
      "Wipe-clean shell"
    ],
    "pros": [
      "Light at about 3 lb",
      "Wipe-clean waterproof shell",
      "Machine washable",
      "Fits adults up to 6 feet"
    ],
    "cons": [
      "Warm weather only",
      "No draft tube mentioned"
    ],
    "bestFor": "Warm-weather campers",
    "take": "The light pick for summer trips.",
    "catch": "It only suits nights above 50F."
  },
  {
    "id": "best-sleeping-bag-under-100-4",
    "rank": 4,
    "badge": "Best Budget",
    "name": "Lightweight Sleeping Bag for Adults",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ZcOYqq3fL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GSVJ3Z8Y?tag=rvgearlab-amz-20",
    "description": "The Lightweight Sleeping Bag for Adults has a comfort range of 50 to 68 degrees Fahrenheit, a 190T polyester shell, a two way zipper and a compression sack, at $17.99, the lowest price in the guide.\n\nIt comes with a compression sack that makes it easy to store in a small bay, and it undercuts every other bag by at least $6. Compared with the MalloMe at $24.69, it saves about $7 and keeps a stated comfort range, so you can plan with a real number.\n\nBudget campers, guest bed backups and anyone who needs a basic bag for summer nights or a sleepover will find it the cheapest way to get a bag that works.",
    "specs": [
      "Comfort 50F to 68F",
      "190T polyester shell",
      "Compression sack included"
    ],
    "pros": [
      "Lowest price in the group",
      "Comfort range stated",
      "Two-way zipper",
      "Compression sack included"
    ],
    "cons": [
      "Mild weather only",
      "Thin shell"
    ],
    "bestFor": "Budget campers",
    "take": "The cheapest bag with a clear comfort range.",
    "catch": "It will not warm you below about 50F."
  }
];

export const howWeEvaluated = [
  {
    "title": "Temperature rating",
    "description": "A rating tells you what weather a bag is built for. We compared the Coleman's 10 degree rating with the 50 to 68 and 50 to 77 degree ranges of the lighter bags, and treated all of them as products for their stated range only. We assumed that ratings describe the coldest comfortable night for an average sleeper and recommended margins accordingly."
  },
  {
    "title": "Size and fit",
    "description": "Width and length decide comfort. We compared the Coleman's 40 by 84 inches, the flannel bag's 36 by 87 inches and the fit limits of the lighter bags, to match each to a body type and sleeping style. Fit was judged for common heights, and we noted sleepers who might feel cramped."
  },
  {
    "title": "Weight and packability",
    "description": "From about 3 pounds to about 5 pounds of fill, weight changes where a bag can go. We compared stated weights and the compression sack on the budget bag to judge storage in a camper. We noted that listed weights usually describe fill, not the whole bag with its shell and lining."
  },
  {
    "title": "Lining and shell",
    "description": "Flannel, polyester and wipe clean shells feel and perform differently. We compared linings and shell fabrics, from cotton flannel to 190T polyester, for comfort and ease of cleaning. Care instructions were weighed too, since a bag that cannot be washed ends up smelling stale."
  },
  {
    "title": "Price and washing",
    "description": "From $17.99 to $67.58, prices vary a lot. We weighed each bag's price against its rating and noted which are machine washable. Price was compared against warmth, size and washability together, not any single feature."
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
    "subheading": "By Expected Low Temperature",
    "intro": "Temperature is the first filter, because a bag used far outside its range is miserable. Use the coldest night in your forecast and add a margin.",
    "table": {
      "headers": [
        "Overnight low",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Near or below freezing",
          "Coleman Heritage Big & Tall 10°F Flannel Sleeping Bag",
          "A 10 degree rating with about 5 pounds of Holofill 808."
        ],
        [
          "Cool, 50s",
          "100% Cotton Flannel XXL 3 Season Waterproof Sleeping Bags for Adults",
          "Flannel lining and a 50 to 68 degree range."
        ],
        [
          "Warm summer nights",
          "MalloMe Sleeping Bags for Adults Cold Weather & Warm",
          "A 50 to 77 degree range and a wipe clean shell."
        ],
        [
          "Mild nights on a tight budget",
          "Lightweight Sleeping Bag for Adults",
          "A 50 to 68 degree comfort range for $17.99."
        ]
      ]
    },
    "note": "If your trip's lows are borderline, choose the colder rated bag, since it is easy to vent a warm bag and impossible to warm up a cold one."
  },
  {
    "subheading": "By Budget",
    "intro": "The four bags span a $50 range, and the right price depends on how cold your nights get.",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $20",
          "Lightweight Sleeping Bag at $17.99 with a compression sack."
        ],
        [
          "$20 to $30",
          "MalloMe at $24.69 for a washable, 3 pound bag."
        ],
        [
          "$35 to $45",
          "Cotton Flannel XXL at $39.99 for a roomy flannel bag."
        ],
        [
          "$65 to $70",
          "Coleman Heritage Big & Tall at $67.58 for 10 degree warmth."
        ]
      ]
    },
    "note": "A cheaper bag plus a good pad usually sleeps warmer than a pricier bag alone."
  },
  {
    "subheading": "Heavy Insulated Bag vs Light Warm-Weather Bag",
    "intro": "These two styles serve different trips, and understanding the tradeoff avoids buying a bag that does not fit your season.",
    "cards": [
      {
        "label": "Heavy insulated",
        "text": "The Coleman uses about 5 pounds of Holofill 808 and carries a 10 degree rating. It is warm, roomy and washable, and it takes up a lot of space and is far too bulky for hiking."
      },
      {
        "label": "Light warm weather",
        "text": "The MalloMe at about 3 pounds and the 190T bag with a compression sack suit warm nights. They pack small and cost less, and they should not be trusted below their stated range."
      }
    ],
    "note": "Choose the Coleman if you camp in cold weather, and a light bag if summer or guest use is the plan."
  },
  {
    "subheading": "By Sleeper Size",
    "intro": "A bag that is too tight is uncomfortable, and one that is too big is colder. Size is the second decision after warmth.",
    "table": {
      "headers": [
        "Sleeper",
        "Recommended pick"
      ],
      "rows": [
        [
          "Tall or broad adult, up to 6 feet 7 inches",
          "Coleman Heritage Big & Tall, 40 by 84 inches."
        ],
        [
          "Side sleeper who needs width",
          "Cotton Flannel XXL, 36 by 87 inches."
        ],
        [
          "Average adult up to 6 feet",
          "MalloMe, which fits adults up to 6 feet."
        ],
        [
          "Teen or smaller adult",
          "Lightweight Sleeping Bag for Adults, a simple compact fit."
        ]
      ]
    },
    "note": "Taller sleepers should confirm interior length, not just the label size."
  },
  {
    "subheading": "For RV Guests and Backup Bedding Specifically",
    "intro": "A bag kept in an RV for visitors needs to be comfortable, easy to wash and small enough to store.",
    "cards": [
      {
        "label": "Look for",
        "text": "A soft lining, a washable build, a range that covers your coldest guest night and a compression sack or stuff sack for storage. A roomy cut helps guests of different sizes."
      },
      {
        "label": "In this comparison",
        "text": "Cotton Flannel XXL feels cozy for guests, MalloMe wipes clean and washes in a machine, and the $17.99 bag includes a compression sack for tight storage."
      }
    ],
    "note": "Kids grow quickly, so a washable budget bag makes more sense for them than a pricey one."
  },
  {
    "subheading": "When to Spend More",
    "intro": "The Coleman costs about four times the cheapest bag, and the gap reflects a different class of warmth.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Choose the Coleman at $67.58 if you camp near freezing, need a big and tall cut or want a durable bag for years of car camping. The 10 degree rating and the roomy cut are worth the money."
      },
      {
        "label": "Save if",
        "text": "Choose the $17.99 or $24.69 bag if you camp only in summer, need guest bedding or want a spare for kids. Spend the saved money on a sleeping pad."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Temperature rating or range",
    "explanation": "A temperature rating is the manufacturer's guide to the lowest night temperature a bag handles, often shown as a range. It matters because a warm weather bag used in cold conditions is unsafe as well as uncomfortable. Look for explicit Fahrenheit numbers, like 10 degrees on the Coleman or 50 to 68 on the flannel bag, and add a margin of at least ten degrees. Cold sleepers should treat the low end of a range as a limit, not a target."
  },
  {
    "criterion": "Dimensions and fit",
    "explanation": "Size is listed as width by length in inches. A bag too narrow squeezes shoulders and hips, and one too long leaves empty space to warm. Compare the listing with your height and build, such as the Coleman's 40 by 84 inches for tall sleepers. A wider bag feels roomier and sleeps cooler, so choose the fit that matches your build. Kids and smaller adults can use a roomy bag with a liner, which reduces empty space and adds warmth."
  },
  {
    "criterion": "Weight of the bag and fill",
    "explanation": "Weight tells you how far the bag can travel and how much insulation it carries. A bag with 5 pounds of fill is warm and heavy, and a 3 pound bag packs easily. Check the stated weight, and decide whether you will carry the bag or leave it in a vehicle. Heavy bags are fine in a vehicle, though a long carry from the parking lot to a site makes weight matter."
  },
  {
    "criterion": "Lining and shell fabric",
    "explanation": "Lining touches your skin, and the shell touches the weather. Flannel feels soft but dries slowly, polyester sheds moisture and feels slick, and a wipe clean shell handles spills. Look for named fabrics and finishes, like cotton flannel or 190T polyester, in the bullet points. Cotton flannel absorbs odors, so air the bag out after each trip."
  },
  {
    "criterion": "Zipper and draft control",
    "explanation": "A two way zipper lets you vent your feet, and a draft tube behind the zipper stops cold air leaking through. They matter on cool nights and in tents. Check for a two way zipper in the listing, and note that the MalloMe listing does not mention a draft tube. A zipper that snags is a common complaint, so test it at home before the first trip."
  },
  {
    "criterion": "Washing and storage",
    "explanation": "Bags collect sweat and dirt, and a machine washable build extends life. A compression or stuff sack saves space in a camper. Look for washing instructions and a sack in the box, and store the bag loose between trips. Compression sacks help in storage, though they should not be used for long term keeping."
  }
];

export const faq = [
  {
    "q": "What temperature rating do I need?",
    "a": "Pick a bag rated at or below the coldest night you expect, then add ten degrees as a margin. The Coleman's 10 degree rating suits cold camping, while the 50 to 68 and 50 to 77 degree bags are for mild to warm weather. Do not use a warm weather bag in near freezing nights. Check forecast lows and wind chill if you camp in exposed areas."
  },
  {
    "q": "Is the Coleman worth $67.58 compared with the cheaper bags?",
    "a": "If you camp in cold weather or need a big and tall cut, yes. It has a 10 degree rating, a 40 by 84 inch cut and about 5 pounds of Holofill 808 insulation. For summer use, the cheaper bags work well and save money. If you share a campsite with kids, consider two lighter bags rather than one heavy one, so each sleeper gets the right warmth."
  },
  {
    "q": "Can I use a flannel bag for backpacking?",
    "a": "Not comfortably. Cotton flannel is heavy and slow to dry, which makes it better for car camping and RV guest use. For hiking, choose a synthetic or down bag built for weight. A very cheap bag is fine as a guest bag if the guests sleep in a heated RV."
  },
  {
    "q": "How do I wash a sleeping bag at home?",
    "a": "Choose a roomy laundromat machine without an agitator, wash on delicate with light detergent and dry on a cool setting with a few tennis balls. Follow the care label. Fully dry the bag before storage to prevent mildew. Spot clean small stains with a damp cloth between full washes to extend the bag's life."
  },
  {
    "q": "How do I stay warmer in a bag that is too thin?",
    "a": "Add a sleeping pad underneath, wear dry layers and a hat and place a blanket over the bag. Eat a snack before bed and keep the bag dry. A liner adds a few degrees. A hot water bottle placed near your feet adds noticeable warmth on a cool night."
  },
  {
    "q": "How should I store a sleeping bag long term?",
    "a": "Hang it or store it loosely in a large cotton sack, not in its compression sack. Keep it dry and cool, away from direct sun. A damp RV bay can cause mildew, so check the bag at the start of every season. Check the bag for odors and moisture at the beginning of every season."
  }
];

export const bottomLine = [
  "The Coleman Heritage Big and Tall at $67.58 is the best under $100 bag for cold weather, big and tall sleepers and anyone who wants a warm, roomy bag that washes easily. It is the only one with a 10 degree rating.",
  "The Cotton Flannel XXL at $39.99 suits mild weather and side sleepers, the MalloMe at $24.69 is a light, wipe clean bag for warm nights and the $17.99 Lightweight Sleeping Bag is the cheapest option with a compression sack.",
  "Match the bag's range to the coldest night you expect, and add a sleeping pad for warmth underneath. A good bag at this price is mostly about choosing the right season.",
  "If you remain unsure, think about the coldest night you have actually camped in over the past two years, not the coldest you imagine. Buy for the real number and add a pad and a liner for the unusual night. That approach keeps the budget low and the sleep good.",
  "Pair your bag with a pad, a liner and a warm hat and you have a system that works across most car camping weather. Bags in this price range are tools for comfortable camping near the car or the RV, and the cheapest ones are perfectly honest about that when you read the rating.",
  "Whichever bag you buy, test it at home in the driveway or the RV before the first trip, so that surprises about size or warmth show up near a warm bed."
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Pillows For Side Sleepers",
    "href": "/sleep-gear/best-backpacking-pillows-for-side-sleepers"
  },
  {
    "title": "Best Backpacking Pillow For Stomach Sleepers",
    "href": "/sleep-gear/best-backpacking-pillow-for-stomach-sleepers"
  },
  {
    "title": "Best Backpacking Pillow For Back Sleepers",
    "href": "/sleep-gear/best-backpacking-pillow-for-back-sleepers"
  },
  {
    "title": "Best Backpacking Sleeping Bags Under 100",
    "href": "/sleep-gear/best-backpacking-sleeping-bags-under-100"
  }
];
