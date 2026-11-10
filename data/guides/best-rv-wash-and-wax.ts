export const guideSlug = "best-rv-wash-and-wax";
export const guideTitle = "6 Best RV Wash And Wax in 2026";
export const metaTitle = "Best RV Wash And Wax in 2026";
export const metaDescription = "Compare six RV wash and wax products, from foaming bucket washes to waterless sprays, by dilution, protection claims and cost per wash.";
export const mainKeyword = "best rv wash and wax";
export const introParagraphs = [
  "Wash and wax products clean and leave a thin protective layer in one pass, which is convenient but not the same as a dedicated wax or paint correction. They split into two camps: foaming concentrates you dilute in a bucket, and waterless sprays you wipe with towels.",
  "This hub ranks six picks across those subtypes and shows how to choose by wash method, water access and protection claims. None of these should be treated as an oxidation remover, since a wash-and-wax is a maintenance product for a sound finish."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31HZHmoxi8L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-wash-and-wax-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Thetford Premium RV Wash and Wax",
    "price": "$15.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31HZHmoxi8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00KARB4TO?tag=rvgearlab-20",
    "description": "The Thetford Premium RV Wash and Wax is a 64 oz 2-in-1 detergent and wax for RVs, boats, trucks and cars. It cleans black streaks, dried bugs, bird droppings and road film, and leaves a non-oily, anti-static, water-repellent finish with UV protection.\n\nAgainst the Camco Wash & Wax, it gives a larger bottle at a lower price. Against the 303 Wash & Seal, it offers a wax finish rather than a sealer, but gives less dilution detail.\n\nBest for routine bucket washes of an RV. Check the dilution on the label and rinse well.",
    "specs": [
      "64 oz 2-in-1 wash and wax",
      "Anti-static, water-repellent",
      "UV protection stated"
    ],
    "pros": [
      "Cleans streaks, bugs, bird droppings and road film",
      "Leaves a non-oily, water-repellent finish",
      "Large 64 oz bottle",
      "UV protection claim"
    ],
    "cons": [
      "Dilution ratio not on the listing",
      "Wax protection is light"
    ],
    "bestFor": "Routine washing"
  },
  {
    "id": "best-rv-wash-and-wax-2",
    "rank": 2,
    "badge": "Best pH-Neutral Wash",
    "name": "303 RV Wash & Seal",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41SXDW51+tS._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0971KD799?tag=rvgearlab-20",
    "description": "The 303 RV Wash & Seal is a pH-neutral, high-foaming wash with a streak-free finish and UV protection for paint. The directions say to add 1 ounce to 5 gallons of water, scrub with a wash mitt and rinse.\n\nCompared with the Thetford, it states a dilution and is pH-neutral but costs more per bottle. Compared with the Camco, it is a seal rather than a carnauba wax.\n\nBest for owners who want a stated dilution and a gentle wash. Check the bottle size for the price.",
    "specs": [
      "pH-neutral, high foam",
      "1 oz per 5 gallons",
      "UV protection"
    ],
    "pros": [
      "pH-neutral high-foam formula",
      "Clear 1 ounce per 5 gallons dilution",
      "UV protection against fading and cracking",
      "Streak-free finish stated"
    ],
    "cons": [
      "Higher price per bottle",
      "Seal is lighter than a paste wax"
    ],
    "bestFor": "Gentle washing"
  },
  {
    "id": "best-rv-wash-and-wax-3",
    "rank": 3,
    "badge": "Best Carnauba Formula",
    "name": "Camco Wash & Wax Cleaner for RVs",
    "price": "$28.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41toeFxGwtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00SL2NG5K?tag=rvgearlab-20",
    "description": "The Camco Wash & Wax Cleaner contains 100 percent carnauba wax and is said to give a clean, shiny finish without buffing. It creates waterproof beading action and is described as safe for all finishes.\n\nVersus the Thetford, it states carnauba content and beading but costs more. Versus the Aero Cosmetics, it is a wash rather than a waterless spray.\n\nBest for owners who like carnauba protection. The listing gives no bottle size or dilution detail.",
    "specs": [
      "100% carnauba wax",
      "No buffing needed",
      "Beading action"
    ],
    "pros": [
      "Contains 100% carnauba wax",
      "No buffing required",
      "Creates water beading",
      "Safe for all finishes per the listing"
    ],
    "cons": [
      "No dilution detail on the listing",
      "Costs more than the Thetford"
    ],
    "bestFor": "Carnauba fans"
  },
  {
    "id": "best-rv-wash-and-wax-4",
    "rank": 4,
    "badge": "Best Waterless Spray",
    "name": "Aero Cosmetics Wash Wax ALL Waterless Car Wash RV Boat Spray Detailer",
    "price": "$28.76",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31KtLAn9BvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B003WM9RZW?tag=rvgearlab-20",
    "description": "The Aero Cosmetics Wash Wax ALL is a waterless spray using the damp-towel method: spray, damp towel, dry towel. It washes and leaves a wax coating and is water-based, with no alcohol, ammonia or citrus.\n\nAgainst the Aero Kit, it is the bottle alone at a lower price. Against the Thetford, it needs no hose or bucket, so it suits water-restricted sites.\n\nBest for waterless washes at campgrounds with restrictions. A badly soiled rig needs a pre-rinse.",
    "specs": [
      "Waterless spray wash and wax",
      "Damp towel method",
      "Water-based, no alcohol"
    ],
    "pros": [
      "No water needed for washing",
      "Cleans and leaves a wax coat in one job",
      "Water-based, no alcohol, ammonia or citrus",
      "Safe on paint, chrome and glass"
    ],
    "cons": [
      "Heavy dirt needs a rinse first",
      "Cost per square foot is high"
    ],
    "bestFor": "Waterless washing"
  },
  {
    "id": "best-rv-wash-and-wax-5",
    "rank": 5,
    "badge": "Best Waterless Kit",
    "name": "Aero Cosmetics Wash Wax ALL Waterless Car Wash Kit RV Boat Spray Detailer",
    "price": "$35.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41arhEW1ZaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00X04JRMU?tag=rvgearlab-20",
    "description": "The Aero Cosmetics Wash Wax ALL Kit bundles the waterless spray detailer for RV and boat use with towels as part of a kit. It uses the same damp-towel method and states it meets Boeing and Airbus cleaning specifications.\n\nCompared with the Aero Wash Wax ALL bottle, it adds kit contents for a higher price. Compared with the Thetford, it avoids water entirely.\n\nBest for first-time waterless buyers who want everything in one box. Check what the kit includes.",
    "specs": [
      "Waterless kit with towels",
      "Damp towel method",
      "Meets Boeing and Airbus specs"
    ],
    "pros": [
      "Kit includes what you need to start",
      "Damp towel lifts dirt without scratching",
      "Water-based, safe on all surfaces",
      "Meets Boeing and Airbus cleaning specifications"
    ],
    "cons": [
      "Higher price than the bottle",
      "Kit contents depend on the listing"
    ],
    "bestFor": "First waterless kit"
  },
  {
    "id": "best-rv-wash-and-wax-6",
    "rank": 6,
    "badge": "Best Concentrated Carnauba",
    "name": "Gel Gloss RV Wash & Wax Concentrated Carnauba Formula",
    "price": "$20.83",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+twlyWN9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B001FCE5AI?tag=rvgearlab-20",
    "description": "The Gel-Gloss RV Wash & Wax is a 32 oz concentrated carnauba formula described as streak-free. The listing gives almost no other detail.\n\nCompared with the Thetford, it is a smaller, concentrated bottle with little supporting detail. It costs more per ounce.\n\nBest for owners who already know and trust the brand. Read the label for dilution before use.",
    "specs": [
      "32 oz concentrated carnauba",
      "Streak-free formula",
      "RV wash and wax"
    ],
    "pros": [
      "Concentrated formula",
      "Carnauba wax content stated",
      "Streak-free claim",
      "Smaller 32 oz bottle is easy to store"
    ],
    "cons": [
      "Little detail on the listing",
      "Smaller bottle than Thetford"
    ],
    "bestFor": "Brand loyalists"
  }
];

export const howWeEvaluated = [
  {
    "title": "Wash method",
    "description": "We separated bucket washes from waterless sprays because each needs different gear and water."
  },
  {
    "title": "Protection claims",
    "description": "We noted carnauba, sealant and UV claims and did not treat them as test results."
  },
  {
    "title": "Dilution and cost",
    "description": "We compared stated dilution and bottle size for cost per wash."
  },
  {
    "title": "Surface safety",
    "description": "We looked at pH, ingredient and surface statements."
  },
  {
    "title": "Limits",
    "description": "We noted that none is an oxidation corrector."
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
    "subheading": "By Wash Method",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Hose and bucket wash",
          "Thetford 64 oz",
          "Large bottle for routine washes."
        ],
        [
          "Gentle foaming wash",
          "303 Wash & Seal",
          "pH-neutral with stated dilution."
        ],
        [
          "Carnauba finish",
          "Camco Wash & Wax",
          "100% carnauba with beading."
        ],
        [
          "Water-restricted site",
          "Aero Wash Wax ALL",
          "Waterless spray, no hose needed."
        ],
        [
          "First waterless purchase",
          "Aero Wash Wax Kit",
          "Spray plus towels in one box."
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
          "$10 to $30",
          "Thetford 64 oz or Gel Gloss 32 oz"
        ],
        [
          "$20 to $30",
          "303 Wash & Seal or Aero Wash Wax ALL"
        ],
        [
          "$20 to $40",
          "Camco Wash & Wax or Aero Wash Wax Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Bucket Wash vs Waterless",
    "cards": [
      {
        "label": "Bucket wash",
        "text": "The Thetford 64 oz, 303 Wash & Seal, Camco Wash & Wax and Gel Gloss 32 oz use water and rinse away heavy dirt well. They suit a full wash."
      },
      {
        "label": "Waterless",
        "text": "The Aero Wash Wax ALL and Aero Wash Wax Kit need no hose and fit water-limited sites. They suit light dirt and quick touch-ups."
      }
    ],
    "note": "Most owners should use a bucket wash such as the Thetford 64 oz unless water is restricted, when the Aero Wash Wax ALL is the better pick."
  },
  {
    "subheading": "By Protection Priority",
    "table": {
      "headers": [
        "Priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "UV protection",
          "303 Wash & Seal"
        ],
        [
          "Carnauba gloss",
          "Camco Wash & Wax"
        ],
        [
          "Lowest cost per wash",
          "Thetford 64 oz"
        ],
        [
          "Quick touch-up",
          "Aero Wash Wax ALL"
        ]
      ]
    }
  },
  {
    "subheading": "For Washing at a Campground with Water Limits Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A waterless method, a towel kit and a rinse-free finish, as the Thetford 64 oz listing shows."
      },
      {
        "label": "In this comparison",
        "text": "The Aero Wash Wax ALL and Aero Wash Wax Kit use the damp towel method with no hose. Pre-rinse only if the rig is heavily soiled."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the 303 Wash & Seal or Aero Wash Wax Kit if you want a stated dilution, UV protection or a complete waterless kit."
      },
      {
        "label": "Save if",
        "text": "Save with the Thetford 64 oz if you wash with a hose and want a large bottle at a low price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Wash method",
    "explanation": "A bucket wash needs a hose and room to rinse, while a waterless spray needs towels and works anywhere. Campgrounds with water rules favor waterless. Look for the method on the label."
  },
  {
    "criterion": "Wax or sealant type",
    "explanation": "Carnauba gives a warm gloss and shorter life, while sealants and polymers last longer. A wash-and-wax adds only a thin layer. Look for the named protection and expect to reapply."
  },
  {
    "criterion": "Dilution and cost per wash",
    "explanation": "A concentrate diluted 1 ounce per 5 gallons lasts many washes, while a ready spray costs more per use. That makes the sticker price misleading. Compare price against the stated dilution."
  },
  {
    "criterion": "Surface safety",
    "explanation": "pH-neutral soaps are gentle on decals and graphics, while strong cleaners can dull them. That matters on graphics you cannot easily replace. Look for pH and surface lists."
  },
  {
    "criterion": "Residue and streaking",
    "explanation": "Leftover film attracts dirt and shows as streaks. A non-streaking claim and a rinse step help. Wash in shade."
  },
  {
    "criterion": "What it cannot do",
    "explanation": "A wash-and-wax does not remove oxidation or repair chalky gelcoat. Oxidized surfaces need a polish. Check whether the product claims abrasives."
  }
];

export const faq = [
  {
    "q": "Can a wash and wax remove oxidation?",
    "a": "No. These are maintenance products for a sound finish. Oxidation needs a polish or compound."
  },
  {
    "q": "Is the 303 Wash & Seal worth more than the Thetford 64 oz?",
    "a": "If you want pH-neutral washing and a stated dilution, yes. Otherwise the Thetford gives a bigger bottle for less."
  },
  {
    "q": "How do I use a waterless wash?",
    "a": "Spray a panel, wipe with a damp towel and buff with a dry towel, as the Aero Wash Wax ALL directs. Use clean towels and work in shade."
  },
  {
    "q": "How often should I wash and wax?",
    "a": "Wash as dirt builds, and wax a few times a year. A wash-and-wax adds a light layer. Check beading to see if protection has faded."
  },
  {
    "q": "Will it damage decals?",
    "a": "Look for pH-neutral language like the 303 Wash & Seal. Test a small area first. Avoid strong cleaners near decals."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best RV Cleaner",
    "href": "/rv-care/best-rv-cleaner"
  },
  {
    "title": "Best RV Roof Coating",
    "href": "/rv-care/best-rv-roof-coating"
  },
  {
    "title": "Best Eternabond Tape",
    "href": "/rv-care/best-eternabond-tape"
  },
  {
    "title": "Best RV Roof Sealant",
    "href": "/rv-care/best-rv-roof-sealant"
  }
];
