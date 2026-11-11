export const guideSlug = "best-water-bottles-under-20";
export const guideTitle = "6 Best Water Bottles Under 20 in 2026";
export const metaTitle = "Best Water Bottles Under 20 in 2026";
export const metaDescription = "Best water bottles under $20: six insulated steel, Tritan and filtering bottles for hikes and campsites, compared on size, insulation and lid design.";
export const mainKeyword = "best water bottles under 20";
export const introParagraphs = [
  "Twenty dollars is enough for a vacuum-insulated steel bottle, a half-gallon jug or a filtering bottle, and the choice depends on whether ice-cold water or light weight matters more on your trail. The six here run from about $10 to $20 and cover four sizes from 18 to 64 ounces.",
  "The ranking looks at insulation claims, lid design, size and cleaning, then asks what each extra few dollars adds. The top spot goes to the best all-round bottle near the cap, and the lightest and cheapest options are placed by the trip they suit."
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
    "id": "best-water-bottles-under-20-1",
    "rank": 1,
    "badge": "Best Value Under $20",
    "name": "POWCAN 26 oz Insulated Water Bottle with 2-in-1 Straw and Spout Lid",
    "price": "$14.24",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21G7mO60XbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D8J2ZB8P?tag=rvgearlab-amz-20",
    "description": "The POWCAN is a 26 oz double-wall vacuum insulated bottle in 18/8 stainless steel. It keeps drinks cold for 24 hours and warm for 12, and its 2-in-1 lid gives you a straw and a spout.\n\nIt costs about $13, around $6 less than the Watersy 64 oz and $2 more than the Fanhaw, and it holds more than the 20 oz Fanhaw. It fits most car cup holders, which the Watersy does not.\n\nIt suits day hikers, campers and commuters who want one bottle for ice water and hot coffee. The wide mouth makes it easy to add ice and clean.",
    "specs": [
      "26 oz, 18/8 stainless steel",
      "Cold 24 hours, warm 12 hours",
      "2-in-1 straw and spout lid"
    ],
    "pros": [
      "Keeps drinks cold for a full day",
      "Straw and spout in one lid",
      "Fits most car cup holders",
      "Wide mouth cleans easily"
    ],
    "cons": [
      "Cup must be hand washed",
      "Heavier than plastic bottles"
    ],
    "bestFor": "All-round camping and hiking",
    "take": "The best balance of size, insulation and price under $20.",
    "catch": "Hand wash the cup, since only the lid is dishwasher-safe."
  },
  {
    "id": "best-water-bottles-under-20-2",
    "rank": 2,
    "badge": "Best Half-Gallon Jug",
    "name": "64oz Insulated Water Bottle",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51a86nR+CLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F2FJRPN5?tag=rvgearlab-amz-20",
    "description": "The Watersy is a 64 oz insulated jug in 18/8 stainless steel with three-layer copper-plated vacuum insulation. It keeps drinks cold for up to 48 hours and hot for 24, and its leak-proof spout lid includes a silicone loop, with a straw lid in the box.\n\nIt costs about $20, the top of the budget and $7 more than the POWCAN, and it holds 38 oz more. That capacity covers a day of hiking water for one person, which no smaller bottle matches.\n\nIt suits car campers, gym users and long hikers who want one large reservoir. It also fills the cooler in the tent.",
    "specs": [
      "64 oz, three-layer vacuum",
      "Cold 48 hours, hot 24",
      "18/8 stainless, straw lid"
    ],
    "pros": [
      "Holds half a gallon",
      "Cold for up to 48 hours",
      "Leak-proof silicone loop in spout",
      "Straw lid included"
    ],
    "cons": [
      "Bulky and heavy when full",
      "Will not fit a cup holder"
    ],
    "bestFor": "Car camping and long days",
    "take": "Pay up to the cap for a half-gallon of ice water.",
    "catch": "At 64 ounces it weighs a lot when full."
  },
  {
    "id": "best-water-bottles-under-20-3",
    "rank": 3,
    "badge": "Best Compact Bottle",
    "name": "Fanhaw 20oz Stainless Steel Water Bottle with Chug Lid",
    "price": "$11.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31bK6EVQ2JL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09RVRLKNT?tag=rvgearlab-amz-20",
    "description": "The Fanhaw is a 20 oz double-wall vacuum bottle in food-grade 18/8 stainless steel with a powder-coated exterior. It keeps beverages cold for up to 24 hours, and a one-hand chug lid has a dust cover over the spout.\n\nIt costs about $12, nearly $2 less than the POWCAN, and the bottle is dishwasher safe, which the POWCAN cup is not. It is smaller than the POWCAN, and it fits snugly into any cup holder.\n\nIt suits commuters, students and day hikers who want a smaller bottle. The one-hand lid helps while driving or on the trail.",
    "specs": [
      "20 oz, 18/8 stainless",
      "Cold up to 24 hours",
      "One-hand chug lid"
    ],
    "pros": [
      "Dust cover protects the spout",
      "Bottle is dishwasher safe",
      "Fits cup holders and bag pockets",
      "Powder-coated grip"
    ],
    "cons": [
      "Smaller than the POWCAN",
      "Lid must be hand washed"
    ],
    "bestFor": "Commutes and day hikes",
    "take": "A compact, easy-clean steel bottle.",
    "catch": "It holds only 20 ounces."
  },
  {
    "id": "best-water-bottles-under-20-4",
    "rank": 4,
    "badge": "Best Filtering Bottle",
    "name": "Brita Hard-Sided Plastic Premium Filtering Water Bottle",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21SoBRBP0NL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08FSBNYQC?tag=rvgearlab-amz-20",
    "description": "The Brita Hard-Sided Filtering Bottle is a 26 oz BPA-free bottle whose carbon filter trims chlorine taste and odor as you sip. It adds an easy-sip straw, a carry loop and a leakproof push-button lid, and it is top-rack dishwasher safe.\n\nIt costs about $18, $5 above the POWCAN, and it filters as you drink, which the other bottles do not. It is not a water purifier bottle, so it suits treated tap water only.\n\nIt suits campers on developed sites, travelers and anyone who dislikes chlorine taste. Replace the filter about every 2 months.",
    "specs": [
      "26 oz BPA-free bottle",
      "Carbon block filter",
      "Easy-sip straw, carry loop"
    ],
    "pros": [
      "Cuts chlorine taste and odor",
      "Leakproof push-button lid",
      "Top-rack dishwasher safe",
      "Replaces up to 300 plastic bottles"
    ],
    "cons": [
      "Not a purifier",
      "No insulation"
    ],
    "bestFor": "Treated tap water",
    "take": "A tap-water bottle that tastes better.",
    "catch": "It will not make stream water safe."
  },
  {
    "id": "best-water-bottles-under-20-5",
    "rank": 5,
    "badge": "Best Lightweight Plastic",
    "name": "Opard Plastic Water Bottle BPA Free for School Sport Travel",
    "price": "$11.69",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41NWJaIXPUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07RPKTV14?tag=rvgearlab-amz-20",
    "description": "The Opard Zip is a 20 oz Tritan bottle that is BPA free, shatter resistant and top-rack dishwasher safe in every part. A sliding button lock replaced the old ring lock, and a coating keeps the surface from feeling sticky.\n\nIt costs about $12, matching the Fanhaw, and it weighs far less than any steel bottle. It has no insulation, which is the trade for the light weight.\n\nIt suits kids, school bags and hikers who count ounces and drink water at air temperature. It is easy to carry.",
    "specs": [
      "20 oz Tritan, BPA free",
      "Sliding button lock",
      "Top-rack dishwasher safe"
    ],
    "pros": [
      "Light and shatter resistant",
      "One-hand sliding lock",
      "Every part is dishwasher safe",
      "Smooth non-sticky coating"
    ],
    "cons": [
      "No insulation",
      "Smaller than steel bottles"
    ],
    "bestFor": "Kids and light hiking",
    "take": "The light plastic choice for people who do not need ice water.",
    "catch": "Water warms in a hot car."
  },
  {
    "id": "best-water-bottles-under-20-6",
    "rank": 6,
    "badge": "Best Budget Steel",
    "name": "Fijinhom 18 oz Insulated Water Bottle",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tdU2X1uZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GD15RRHD?tag=rvgearlab-amz-20",
    "description": "The Fijinhom is an 18 oz double-wall bottle in 304 stainless that keeps water cold for 24 hours. A 2-in-1 lid combines a wide spout and a hidden straw, with two straws and a soft silicone handle in the box.\n\nIt costs about $10, the lowest in the group and $3 less than the POWCAN. It is the smallest bottle here, which is how the price stays so low.\n\nIt suits kids, short walks and anyone who needs a cheap insulated bottle. It fits most car cup holders.",
    "specs": [
      "18 oz, 304 stainless",
      "Cold 24 hours",
      "2-in-1 lid, two straws"
    ],
    "pros": [
      "Lowest price for a steel bottle",
      "Soft silicone handle",
      "Two straws included",
      "Smooth-turning lid"
    ],
    "cons": [
      "Smallest bottle here",
      "Thin spec detail"
    ],
    "bestFor": "Short trips",
    "take": "The cheapest way to get insulated steel.",
    "catch": "It holds just 18 ounces."
  }
];

export const howWeEvaluated = [
  {
    "title": "Insulation",
    "description": "Stated hours of cold and hot were compared."
  },
  {
    "title": "Capacity",
    "description": "Sizes from 18 to 64 oz were compared."
  },
  {
    "title": "Lid design",
    "description": "Straw, spout and leakproof seals were compared."
  },
  {
    "title": "Cleaning",
    "description": "Dishwasher safety and mouth width were compared."
  },
  {
    "title": "Price against the cap",
    "description": "All six are under $20."
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
    "subheading": "By trip",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Day hike or commute",
          "POWCAN 26 oz Insulated",
          "24 hour cold and a 2-in-1 lid."
        ],
        [
          "Car camping all day",
          "Watersy 64 oz Jug",
          "Half a gallon, cold 48 hours."
        ],
        [
          "Compact steel bottle",
          "Fanhaw 20 oz Chug Lid",
          "One-hand lid and dishwasher-safe body."
        ],
        [
          "Treated tap water, better taste",
          "Brita Hard-Sided Bottle",
          "Carbon filter in the bottle."
        ],
        [
          "Light plastic",
          "Opard Zip 20 oz",
          "No insulation, easy to carry."
        ],
        [
          "Cheap insulated steel",
          "Fijinhom 18 oz Insulated",
          "Cold 24 hours for about $10."
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
          "$0 to $20",
          "Fijinhom 18 oz Insulated or Opard Zip 20 oz"
        ],
        [
          "$10 to $20",
          "Fanhaw 20 oz Chug Lid or POWCAN 26 oz Insulated"
        ],
        [
          "$10 to $20",
          "Brita Hard-Sided Bottle or Watersy 64 oz Jug"
        ]
      ]
    }
  },
  {
    "subheading": "Steel vs Tritan plastic",
    "cards": [
      {
        "label": "Insulated steel",
        "text": "The POWCAN 26 oz Insulated, Watersy 64 oz Jug, Fanhaw 20 oz Chug Lid and Fijinhom 18 oz Insulated keep drinks cold or hot and weigh more."
      },
      {
        "label": "Plastic",
        "text": "The Opard Zip 20 oz and Brita Hard-Sided Bottle are light and cheap and have no insulation."
      }
    ],
    "note": "Choose the POWCAN 26 oz Insulated for temperature and the Opard Zip 20 oz for weight."
  },
  {
    "subheading": "By price tier",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $10",
          "Fijinhom 18 oz Insulated"
        ],
        [
          "About $12",
          "Fanhaw 20 oz Chug Lid"
        ],
        [
          "About $12",
          "Opard Zip 20 oz"
        ],
        [
          "About $13",
          "POWCAN 26 oz Insulated"
        ],
        [
          "About $18",
          "Brita Hard-Sided Bottle"
        ],
        [
          "About $20",
          "Watersy 64 oz Jug"
        ]
      ]
    }
  },
  {
    "subheading": "For hot summer hikes specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for vacuum insulation, a stated 24 hour cold claim and a size of 26 oz or more."
      },
      {
        "label": "In this comparison",
        "text": "The POWCAN 26 oz Insulated keeps drinks cold for 24 hours, and the Watersy 64 oz Jug stores half a gallon."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you drink a lot: the Watersy 64 oz Jug holds half a gallon, and the Brita Hard-Sided Bottle improves tap taste."
      },
      {
        "label": "Save if",
        "text": "Save if you take short trips: the Fijinhom 18 oz Insulated costs about $10, and the Opard Zip 20 oz about $12."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Insulation hours",
    "explanation": "A double-wall vacuum bottle keeps drinks cold for 24 hours at best, and a 48 hour claim like the Watersy 64 oz still depends on how often you open it. Plastic bottles have none. Look for stated hours for both cold and hot in the product details."
  },
  {
    "criterion": "Capacity for the trip",
    "explanation": "A day hike in mild weather needs about 1 liter, which is roughly 34 oz, while hot hikes need more. A 20 oz bottle covers a short walk, and a 64 oz jug covers a day. Plan your water from the trip, not from the bottle."
  },
  {
    "criterion": "Lid design and leaks",
    "explanation": "A straw lid is easy for sipping while you walk, a wide spout is better for chugging after a climb, and a 2-in-1 lid gives you both. The silicone seal inside the lid is the part that wears and leaks over a season. Look for a leak-proof claim, a lid you can take apart for cleaning and a replaceable seal."
  },
  {
    "criterion": "Material and taste",
    "explanation": "Food-grade 18/8 and 304 stainless steel do not hold flavors and do not give water a metal taste, while Tritan plastic is light, clear and shatter resistant. Cheap steel bottles can dent when dropped, though the vacuum seal usually survives light knocks. Look for 18/8 or 304 in the title for steel, and BPA free for plastic."
  },
  {
    "criterion": "Cleaning and care",
    "explanation": "A wide mouth lets you reach the bottom with a brush, which stops film from building up after weeks of sports drinks or coffee. A dishwasher-safe body saves time, but insulated cups and lids with seals usually need hand washing. Read the care instructions before you buy, and plan to rinse the bottle after every trip."
  }
];

export const faq = [
  {
    "q": "How long does an insulated bottle keep water cold?",
    "a": "Up to 24 hours for most steel bottles and up to 48 hours for the Watersy 64 oz Jug when it is kept closed and filled with ice. Opening the lid often cuts that time. Fill with ice and cold water for the longest result."
  },
  {
    "q": "What do campers get wrong when buying a water bottle?",
    "a": "They buy a small bottle because it fits the pack and then run out on a hot hike. A warm-weather walk can need more than a liter, so a 20 oz bottle means frequent refills. Pick a size that matches the trip and the next water source."
  },
  {
    "q": "Is the Brita bottle safe for stream water?",
    "a": "No. The Brita Hard-Sided Bottle reduces chlorine taste and odor and is not a purifier. For stream or lake water, boil it or use a purifier first. The Brita suits treated campground taps and home water."
  },
  {
    "q": "How do I clean a steel bottle?",
    "a": "Rinse after each trip and wash with warm soapy water and a bottle brush, reaching the bottom. The Fanhaw 20 oz Chug Lid body is dishwasher safe, though its lid needs hand washing. Air dry with the lid off so no odors build up."
  },
  {
    "q": "Can I put hot drinks in these bottles?",
    "a": "Steel vacuum bottles such as the POWCAN 26 oz Insulated keep drinks warm for 12 hours, so coffee and tea work well. Leave the plastic Opard Zip 20 oz and Brita bottle for cold or room-temperature water. Check each product's care notes before filling with anything hot."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Cookpots",
    "href": "/camp-kitchen/best-backpacking-cookpots"
  },
  {
    "title": "Best Backpacking Stoves",
    "href": "/camp-kitchen/best-backpacking-stoves"
  },
  {
    "title": "Best Camping Coffee",
    "href": "/camp-kitchen/best-camping-coffee"
  },
  {
    "title": "Best Camping Coffeemakers",
    "href": "/camp-kitchen/best-camping-coffeemakers"
  }
];
