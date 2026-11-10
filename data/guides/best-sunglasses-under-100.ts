export const guideSlug = "best-sunglasses-under-100";
export const guideTitle = "6 Best Sunglasses Under 100 in 2026";
export const metaTitle = "Best Sunglasses Under 100 in 2026";
export const metaDescription = "Best sunglasses under $100 for outdoor use: six polarized, UV400 picks and multi-packs compared on frames, lens claims and what the box includes.";
export const mainKeyword = "best sunglasses under 100";
export const introParagraphs = [
  "A hundred dollars is a generous ceiling for outdoor sunglasses, and this list shows it. Every pair here sits far below it, so the real question is which cheap pair or multi-pack gives you polarization, UV400 lenses and a frame that will not fall apart in a pack.",
  "Six polarized options were compared on lens claims, frame style, hinge details, what ships in the box and how clearly each listing names outdoor use. Several come as 3-packs and 4-packs, which matters for a hiker who loses sunglasses on trails."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/hiking-backpacker-mountain.webp";
export const heroImageAlt = "Hiker with a loaded backpack climbing a mountain trail";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-sunglasses-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Ofwin Polarized Sports Sunglasses for Men Women",
    "price": "$15.19",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31zacBpEkmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C13T4WVL?tag=rvgearlab-20",
    "description": "The Ofwin Sports Polarized is a wrap-around sports pair with TAC polarized lenses and a 99 percent UV400 coating that the listing says blocks UVA, UVB, UVC and blue light. Metal 3+2 hinges flex to fit the face, and the lens is 64 mm wide with a 141 mm frame.\n\nCompared with the MEETSUN Sport Polarized, it adds metal hinges and a zipper box, plus a sports lanyard and a polarizing test card. Against the multi-packs, it gives one better-equipped pair instead of three or four basic ones.\n\nIt is the best fit for hikers, anglers and cyclists who want a single dependable pair with a lanyard. The hardware details lift it above the other picks.",
    "specs": [
      "TAC polarized, 99% UV400 coating",
      "Metal 3+2 hinges",
      "Zipper box, lanyard, test card"
    ],
    "pros": [
      "Metal hinges fit the face well",
      "Includes lanyard and test card",
      "Wrap-around design stays put",
      "Wide lens, 64 mm"
    ],
    "cons": [
      "Single pair only",
      "Wrap-around style is not for dressy wear"
    ],
    "bestFor": "A single pair for hiking and driving",
    "take": "The best equipped single pair here, with a lanyard and sturdy hinges.",
    "catch": "One pair means no spare if you lose it."
  },
  {
    "id": "best-sunglasses-under-100-2",
    "rank": 2,
    "badge": "Best Multi-Pack",
    "name": "KALIYADI Sports Polarized Sunglasses Men UV400 Protection for Fishing Driving Cycling",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41HviLGzKTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DFG311CH?tag=rvgearlab-20",
    "description": "The KALIYADI Sports 4-Pack gives four pairs of polarized sport sunglasses with UV400 lenses and integrated nose pads. Each pair comes with a pouch, cleaning cloth and glasses strap, and the set arrives in a gift box.\n\nCompared with the Ofwin Sports Polarized, it provides four pairs and four straps, with plainer hinges. Against the FURISHQI 4-Pack, it leans toward sport use, with running, cycling, fishing and hiking named.\n\nIt suits families, scout groups and anyone who keeps spares in the car, tent and pack. Every pair comes with its own strap.",
    "specs": [
      "Four polarized UV400 pairs",
      "Integrated nose pads",
      "Pouch, cloth, strap per pair"
    ],
    "pros": [
      "Four pairs in one order",
      "A strap and pouch with each pair",
      "Sport styling for outdoor use",
      "UV400 lenses throughout"
    ],
    "cons": [
      "Frame and hinge detail is thin",
      "Four pairs share the same basic design"
    ],
    "bestFor": "Families and shared gear",
    "take": "A four-pack with straps for every pair. Good for shared outdoor kit.",
    "catch": "The listing gives few frame details."
  },
  {
    "id": "best-sunglasses-under-100-3",
    "rank": 3,
    "badge": "Best Documented Fit",
    "name": "MEETSUN Polarized Sunglasses for Men & Women",
    "price": "$15.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41wFK3BjcPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CBRPMWZF?tag=rvgearlab-20",
    "description": "The MEETSUN Sport Polarized has TAC polarized lenses with UV400 protection and a lightweight wrap-around frame in high-grade plastic. The listing gives exact numbers: a 143 mm frame width, 42 mm lens height, 56 mm lens width and 129 mm temples.\n\nThose dimensions let you compare the fit with your own pair, which the Ofwin and KALIYADI listings do less clearly. A paper box, storage pouch, cleaning cloth and polarized test card are included.\n\nIt is a good match for runners, cyclists and drivers with an average to smaller face. The numbers make sizing easy.",
    "specs": [
      "TAC polarized, UV400",
      "143 mm frame, 56 mm lens",
      "Pouch, cloth, test card"
    ],
    "pros": [
      "Full dimensions listed",
      "Lightweight wrap-around frame",
      "Includes a polarized test card",
      "Sporty look suits many outfits"
    ],
    "cons": [
      "Single pair only",
      "Smaller 56 mm lens suits narrower faces"
    ],
    "bestFor": "Runners and drivers with a smaller face",
    "take": "A sporty pair with clear sizing numbers.",
    "catch": "The lens is narrower than the Ofwin."
  },
  {
    "id": "best-sunglasses-under-100-4",
    "rank": 4,
    "badge": "Best Retro Style",
    "name": "MEETSUN Retro Polarized Sunglasses for Women Men Classic Mirror Lens Driving Sun Glasses 100% UV Protection",
    "price": "$15.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ybjgzKPkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CF9KSD31?tag=rvgearlab-20",
    "description": "The MEETSUN Retro 3-Pack has TAC HD polarized lenses that reduce glare from roads, water and snow, with a UV400 coating the listing calls 99.99 percent protective. The vintage 80s design comes in several color combinations, and a replacement offer covers defects.\n\nNext to the MEETSUN Sport Polarized, it swaps the wrap-around sports cut for a classic mirror-lens look. Compared with the FURISHQI 4-Pack, it gives three pairs instead of four and adds a defect replacement offer.\n\nIt suits travelers and anglers who want an everyday style for driving, golf and water sports. Sailing, kayaking and canoeing are named.",
    "specs": [
      "TAC HD polarized, UV400",
      "Mirror lenses, retro frame",
      "3-pack with replacement offer"
    ],
    "pros": [
      "Three pairs in one order",
      "Glare reduction on water and snow",
      "Replacement offered for defects",
      "Retro look suits daily wear"
    ],
    "cons": [
      "Not a wrap-around sports cut",
      "Mirror lenses can scratch if not cased"
    ],
    "bestFor": "Travel and casual outdoor wear",
    "take": "A stylish three-pack for travel and water days.",
    "catch": "The classic frame may slip on a hard run."
  },
  {
    "id": "best-sunglasses-under-100-5",
    "rank": 5,
    "badge": "Best Colored Lenses",
    "name": "Polarized Sunglasses for Men and Women Matte Finish Sun glasses Color Mirror Lens 100% UV Blocking",
    "price": "$15.67",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51nxcA83R+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07MH858K9?tag=rvgearlab-20",
    "description": "The KALIYADI Matte 3-Pack has HD polarized lenses with a color mirror finish and a matte frame. The neutral lens coating is said to keep colors true, and polarization cuts glare reflected from shiny surfaces.\n\nIt pairs a 100 percent UV blocking claim with three pairs, each with a pouch and cloth. Next to the KALIYADI Sports 4-Pack, it uses a style-led matte frame instead of a sport-led one.\n\nIt works for beachgoers and drivers who want a bit of color and a set to share. A gift box makes it easy to hand off.",
    "specs": [
      "HD polarized color mirror lenses",
      "Matte frame",
      "100% UV blocking, set of 3"
    ],
    "pros": [
      "Mirror lenses add color",
      "Matte finish looks modern",
      "Three pairs in one box",
      "Polarized to cut glare"
    ],
    "cons": [
      "Frame details are not listed",
      "Mirror lenses can scratch"
    ],
    "bestFor": "Beach and driving use",
    "take": "A colorful three-pack with polarized lenses.",
    "catch": "Little detail on frame material or fit."
  },
  {
    "id": "best-sunglasses-under-100-6",
    "rank": 6,
    "badge": "Best Spare Pairs",
    "name": "FURISHQI 4 PACK Classic Polarized Sunglasses for Men and Women Retro Style Semi Rimless Frame Sun Glasses 100%",
    "price": "$17.56",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tO6KAa4xL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B7MYYX44?tag=rvgearlab-20",
    "description": "The FURISHQI Retro 4-Pack is a set of four polarized semi-rimless retro sunglasses with 100 percent UV protection. The title names classic men's and women's styles.\n\nThe listing carries the least detail in the group, so the pick is about cost per pair and style rather than a long spec sheet. Compared with the MEETSUN Retro 3-Pack, it gives an extra pair and a semi-rimless frame.\n\nIt suits anyone who wants spare pairs for the car, desk and day pack. Four pairs go a long way.",
    "specs": [
      "4 polarized pairs",
      "Semi-rimless retro frame",
      "100% UV protection"
    ],
    "pros": [
      "Four pairs in one order",
      "Low cost per pair",
      "Unisex retro look",
      "Polarized lenses"
    ],
    "cons": [
      "Few listed specs or accessories",
      "Semi-rimless frames leave lens edges open"
    ],
    "bestFor": "Cheap spares for the car and pack",
    "take": "An easy, low-cost way to carry several pairs.",
    "catch": "Less detail than the other picks."
  }
];

export const howWeEvaluated = [
  {
    "title": "Lens claims",
    "description": "UV400, polarization and stated UV percentages were compared."
  },
  {
    "title": "Frame and hinge build",
    "description": "Frame material, hinges and nose pads were weighed for durability."
  },
  {
    "title": "Fit data",
    "description": "Listed dimensions and adjustable parts were checked."
  },
  {
    "title": "What is in the box",
    "description": "Cases, straps and test cards were counted."
  },
  {
    "title": "Value",
    "description": "Price per pair was balanced against the extras."
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
    "subheading": "By Outdoor Use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Hiking, driving and fishing",
          "Ofwin Sports Polarized",
          "Metal hinges and a lanyard."
        ],
        [
          "Families and shared gear",
          "KALIYADI Sports 4-Pack",
          "Four pairs with straps."
        ],
        [
          "Runners with a smaller face",
          "MEETSUN Sport Polarized",
          "Full dimensions listed."
        ],
        [
          "Travel and water days",
          "MEETSUN Retro 3-Pack",
          "Mirror lenses, replacement offer."
        ],
        [
          "Beach and driving with color",
          "KALIYADI Matte 3-Pack",
          "Color mirror lenses."
        ],
        [
          "Cheap spares in several places",
          "FURISHQI Retro 4-Pack",
          "Four pairs at a low cost per pair."
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
          "$10 to $20",
          "Ofwin Sports Polarized or KALIYADI Matte 3-Pack"
        ],
        [
          "$10 to $20",
          "MEETSUN Sport Polarized or MEETSUN Retro 3-Pack"
        ],
        [
          "$10 to $20",
          "KALIYADI Sports 4-Pack or FURISHQI Retro 4-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Single Pair vs Multi-Pack",
    "cards": [
      {
        "label": "Single pair",
        "text": "Better hinges, a lanyard and a hard case for one pair. The Ofwin Sports Polarized and MEETSUN Sport Polarized are single pairs."
      },
      {
        "label": "Multi-pack",
        "text": "Cheaper per pair with spares for the car, pack and tent. The KALIYADI Sports 4-Pack, MEETSUN Retro 3-Pack, KALIYADI Matte 3-Pack and FURISHQI Retro 4-Pack are multi-packs."
      }
    ],
    "note": "Most hikers who lose sunglasses should choose the KALIYADI Sports 4-Pack, and anyone who wants one solid pair should choose the Ofwin Sports Polarized."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest cost per pair, four sport pairs",
          "KALIYADI Sports 4-Pack"
        ],
        [
          "Very low per pair, four retro pairs",
          "FURISHQI Retro 4-Pack"
        ],
        [
          "Low per pair, set of three",
          "KALIYADI Matte 3-Pack"
        ],
        [
          "Low per pair, retro three-pack",
          "MEETSUN Retro 3-Pack"
        ],
        [
          "Single pair, best hardware",
          "Ofwin Sports Polarized"
        ],
        [
          "Single pair, documented fit",
          "MEETSUN Sport Polarized"
        ]
      ]
    }
  },
  {
    "subheading": "For Hiking and Pack Use Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Metal or spring hinges, a lanyard and a hard case."
      },
      {
        "label": "In this comparison",
        "text": "The Ofwin Sports Polarized lists metal hinges, a lanyard and a zipper box, and the KALIYADI Sports 4-Pack includes a strap with each pair."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Ofwin Sports Polarized for the sturdiest hardware and a lanyard, or on the MEETSUN Sport Polarized for a documented fit."
      },
      {
        "label": "Save if",
        "text": "Save with the FURISHQI Retro 4-Pack or KALIYADI Matte 3-Pack when you want spares for the car and pack."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "UV400 versus polarized",
    "explanation": "UV400 means the lens blocks ultraviolet light up to 400 nanometers, which is the real eye protection. Polarization is a separate feature that cuts glare off water and roads. Check that the listing names both, since a polarized lens without UV400 is not enough."
  },
  {
    "criterion": "Frame hinges and material",
    "explanation": "Cheap frames often fail at the hinge, which is where metal hinges or spring hinges help. A flexible frame survives a pack better than a stiff one. Look for metal hinges, spring hinges or a named flexible plastic."
  },
  {
    "criterion": "Lens size and fit",
    "explanation": "A lens that is too small leaves gaps for light to come around the edge, and a very wide frame slips on a narrow face. Compare the listed lens width and frame width with your own pair. Use the numbers on the listing and not the size label."
  },
  {
    "criterion": "Multi-pack versus single pair",
    "explanation": "A multi-pack gives spares, but each pair is usually a basic design. A single pair can have better hinges and a better case. Choose based on how often you lose or break glasses."
  },
  {
    "criterion": "Case, strap and test card",
    "explanation": "A hard case protects lenses in a pack, a strap saves a pair on a bike or boat, and a test card lets you check the polarization yourself. These small items matter on the trail. Look at the box contents on the listing."
  },
  {
    "criterion": "Warranty and returns",
    "explanation": "Low-priced sunglasses rely on the seller for service. A listed replacement offer gives a safety net if a hinge or lens fails. Read the listing for replacement or return notes."
  }
];

export const faq = [
  {
    "q": "Are sunglasses under $100 good enough for hiking?",
    "a": "Yes if the listing names UV400 and a sturdy frame. The Ofwin Sports Polarized lists a 99 percent UV400 coating and metal hinges. Pick a pair with a case and strap."
  },
  {
    "q": "What is the common mistake when buying cheap sunglasses?",
    "a": "Trusting a polarized label without UV400. Check that the listing names both. The MEETSUN Sport Polarized and KALIYADI Sports 4-Pack list UV400 lenses."
  },
  {
    "q": "Is a multi-pack worth it over a single pair?",
    "a": "If you lose or break glasses often, yes. A four-pack like the FURISHQI Retro 4-Pack gives spares. If you want better hinges, choose a single pair like the Ofwin."
  },
  {
    "q": "How do I test if lenses are polarized?",
    "a": "Use the polarized test card or look at a screen through the lens and rotate it. A polarized lens will darken a screen at some angles. The Ofwin and MEETSUN sport pairs list a test card."
  },
  {
    "q": "How should I clean polarized lenses?",
    "a": "Use the microfiber cloth and avoid rough cloth or paper towels. Rinse sand off first, and store the pair in its pouch. Scratches affect clarity."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Cycling Sunglasses Under 100",
    "href": "/clothing-footwear/best-cycling-sunglasses-under-100"
  },
  {
    "title": "Best Cycling Sunglasses Under 50",
    "href": "/clothing-footwear/best-cycling-sunglasses-under-50"
  },
  {
    "title": "Best Running Sunglasses Under 100",
    "href": "/clothing-footwear/best-running-sunglasses-under-100"
  }
];
