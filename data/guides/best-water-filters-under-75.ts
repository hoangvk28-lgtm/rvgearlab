export const guideSlug = "best-water-filters-under-75";
export const guideTitle = "5 Best Water Filters Under 75 in 2026";
export const metaTitle = "Best Water Filters Under 75 in 2026";
export const metaDescription = "Best water filters under $75: five under-sink and RV filter systems compared on filter life, certifications and installation for campers, cabins and vans.";
export const mainKeyword = "best water filters under 75";
export const introParagraphs = [
  "Seventy-five dollars is where a real filter system becomes possible, and the five picks here run from about $36 to $59. One is a large RV hose-end system, and four are under-sink units that connect to a cold water line.",
  "These suit a camper's home base, a cabin, a tiny home or a van with pressurized cold water rather than a backcountry trip. The notes explain what each one filters, how long it lasts and what it takes to install."
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
    "id": "best-water-filters-under-75-1",
    "rank": 1,
    "badge": "Best Value Under $75",
    "name": "ICEPURE Under Sink Water Filter System",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51poV+pwHBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08NDWW4DH?tag=rvgearlab-amz-20",
    "description": "ICEPURE is an under-sink filter rated for 3 years or 22,000 gallons on municipal water, tested to NSF/ANSI 42 and certified to NSF/ANSI 372 for lead-free materials. It installs on a cold line in about 3 minutes and fits 1/2 or 3/8 inch connections.\n\nAt about $50 it carries one of the longest lifespans in this range, and the replacement cost per gallon is low. The Waterdrop 10UA lasts a year and costs about $6 less, while this one lasts three times longer.\n\nCabin owners, van builders and tiny-home residents who want a long-life filter without maintenance will like it. It also suits a camper's home base.",
    "specs": [
      "3 years or 22,000 gallons",
      "NSF/ANSI 42 and 372",
      "1/2 or 3/8 inch cold line"
    ],
    "pros": [
      "Three-year filter life",
      "NSF/ANSI 42 tested",
      "Installs in about 3 minutes",
      "Coconut shell carbon media"
    ],
    "cons": [
      "Cold water line only",
      "Needs a spot under the sink"
    ],
    "bestFor": "Cabins, vans and tiny homes",
    "take": "The longest life per dollar under $75.",
    "catch": "Do not connect it to hot water."
  },
  {
    "id": "best-water-filters-under-75-2",
    "rank": 2,
    "badge": "Best For RV Fill-Ups",
    "name": "FS-TFC RV Water Filter System Reduces Bad Taste",
    "price": "$35.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4144zYdmYTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09GLH58F2?tag=rvgearlab-amz-20",
    "description": "FS-TFC is a hose-end RV filter system with a composite activated carbon block at 0.2 micron accuracy, a transparent housing and a twist-in cartridge. The maker cites NSF/ANSI 58 certification and says it lasts three to five times longer than regular hose filters.\n\nNear $36, the FS-TFC is the lowest priced here and the only hose-end unit, so it travels with your RV. The under-sink systems filter a home or cabin tap, and this one filters the fill hose.\n\nRVers who fill their tank from campground spigots and want a sturdier filter will like it. The clear housing shows when it is dirty.",
    "specs": [
      "0.2 micron carbon block",
      "Transparent housing",
      "Twist-in cartridge"
    ],
    "pros": [
      "Clear housing shows dirt buildup",
      "Bigger and sturdier than basic hose filters",
      "Hooks to a standard hose",
      "Quick cartridge swaps"
    ],
    "cons": [
      "Larger than a basic hose filter",
      "Hose-end filters need to be removed in freezing weather"
    ],
    "bestFor": "RVers filling tanks",
    "take": "A sturdier hose-end filter for campground fill-ups.",
    "catch": "Remove it before a freeze."
  },
  {
    "id": "best-water-filters-under-75-3",
    "rank": 3,
    "badge": "Best Compact Under-Sink",
    "name": "Waterdrop 10UA Under Sink Water Filter System",
    "price": "$43.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ei5RLPynL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B083NPW1DN?tag=rvgearlab-amz-20",
    "description": "The Waterdrop 10UA is an under-sink filter certified to NSF/ANSI 42, with a twist-and-lock install that takes about three minutes and push-to-connect fittings. The filter has a 20 times larger dirt-holding area and lasts about a year.\n\nAt about $44 it costs less than the ICEPURE and the PUREPLUS, and the replacement filter is under $26. The shorter lifespan is the trade for the lower price.\n\nRenters and van dwellers who want the lowest cost under-sink filter will like it. It uses only cold water.",
    "specs": [
      "NSF/ANSI 42, 1 year",
      "Twist-and-lock install",
      "20X dirt-holding area"
    ],
    "pros": [
      "Lowest price among under-sink picks",
      "Installs in about 3 minutes",
      "Push-to-connect fittings",
      "Replacement filter under $26"
    ],
    "cons": [
      "One-year filter life",
      "Cold water only"
    ],
    "bestFor": "Renters and van builds",
    "take": "A low-cost way into under-sink filtration.",
    "catch": "Plan a yearly filter swap."
  },
  {
    "id": "best-water-filters-under-75-4",
    "rank": 4,
    "badge": "Best No-Drill Pick",
    "name": "Waterdrop UL12A Under Sink Water Filter",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410j8qTKJpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DLGPZN8Y?tag=rvgearlab-amz-20",
    "description": "The Waterdrop UL12A is a freestanding no-drill under-sink filter that reduces PFAS, PFOA and PFOS, lead, chlorine and heavy metals, and it is IAPMO certified. It includes a 3/8 inch line, a twist-and-lock setup and a time reminder.\n\nIt costs about $50, $6 more than the 10UA, and adds PFAS reduction, a reminder and a freestanding design. The ICEPURE lasts longer, while this one is easier to place.\n\nRenters, vans and campers who cannot drill into a cabinet will like it. The reminder helps avoid late changes.",
    "specs": [
      "IAPMO certified, reduces PFAS",
      "Freestanding, no drilling",
      "Time reminder"
    ],
    "pros": [
      "No drilling needed",
      "Reduces PFAS, lead and chlorine",
      "Filter change reminder",
      "Twist-and-lock install"
    ],
    "cons": [
      "Cold water only",
      "Costs more than the 10UA"
    ],
    "bestFor": "Renters and van builds",
    "take": "A no-drill filter for places where you cannot modify the cabinet.",
    "catch": "Replacement filters cost about $31."
  },
  {
    "id": "best-water-filters-under-75-5",
    "rank": 5,
    "badge": "Best High Capacity",
    "name": "PUREPLUS Under Sink Water Filter System",
    "price": "$58.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Il86xGL1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08ZSNVF1W?tag=rvgearlab-amz-20",
    "description": "PUREPLUS carries a 22,000 gallon, 5-year capacity certified by IAPMO, NSF/ANSI 42 certification and NSF/ANSI 372 lead-free materials. It uses a 6-in-1 composite filter and a quick-connect design for cold water only.\n\nAt about $59 this is the top price in the guide, and the maker claims 99.99 percent chlorine reduction. The ICEPURE costs $9 less with a 3-year rating.\n\nHouseholds and cabins with high water use will like the long rated life. It also suits a tiny home with a family.",
    "specs": [
      "22,000 gallons, 5 years",
      "NSF/ANSI 42 and 372",
      "6-in-1 composite filter"
    ],
    "pros": [
      "5-year, 22,000 gallon capacity",
      "Certified lead-free materials",
      "99.99 percent chlorine reduction claim",
      "Quick-connect install"
    ],
    "cons": [
      "Costs the most of the five",
      "Cold water only"
    ],
    "bestFor": "High-use households",
    "take": "The longest capacity rating in this range.",
    "catch": "Few vans or campers use enough water to need five years of capacity."
  }
];

export const howWeEvaluated = [
  {
    "title": "Filter life",
    "description": "Rated gallons from 1 year to 5 years were compared across the five."
  },
  {
    "title": "Certifications",
    "description": "NSF/ANSI 42, 372 and IAPMO listings were compared."
  },
  {
    "title": "Installation",
    "description": "Time to install, drilling needs and cold-line requirements were compared."
  },
  {
    "title": "Replacement cost",
    "description": "Replacement filter prices were compared for yearly cost."
  },
  {
    "title": "Fit",
    "description": "RV hose-end versus under-sink design was compared for each use case."
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
    "subheading": "By use",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "RV tank fill-ups at campgrounds",
          "FS-TFC RV System",
          "Hose-end carbon block."
        ],
        [
          "Cabin or van with a cold line",
          "ICEPURE 22K",
          "3 years of life."
        ],
        [
          "Lowest cost under-sink",
          "Waterdrop 10UA",
          "About $44."
        ],
        [
          "Cannot drill a cabinet",
          "Waterdrop UL12A",
          "No-drill freestanding design."
        ],
        [
          "High use or large family",
          "PUREPLUS 22K",
          "22,000 gallon rating."
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
          "$30 to $50",
          "FS-TFC RV System or Waterdrop 10UA"
        ],
        [
          "$40 to $50",
          "ICEPURE 22K or Waterdrop UL12A"
        ],
        [
          "$50 to $60",
          "PUREPLUS 22K"
        ]
      ]
    }
  },
  {
    "subheading": "Hose-end vs under-sink",
    "cards": [
      {
        "label": "Hose-end filter",
        "text": "A hose-end filter goes on the fill hose and travels with the RV. The FS-TFC RV System is the one here."
      },
      {
        "label": "Under-sink filter",
        "text": "An under-sink system filters a tap and lasts years but needs a cold water line. The ICEPURE 22K, Waterdrop 10UA, Waterdrop UL12A and PUREPLUS 22K are under-sink."
      }
    ],
    "note": "Most RV owners should start with the FS-TFC RV System, and cabin or van owners should use the ICEPURE 22K."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Spend",
        "Recommended pick"
      ],
      "rows": [
        [
          "Around $36",
          "FS-TFC RV System"
        ],
        [
          "Around $44",
          "Waterdrop 10UA"
        ],
        [
          "Around $50 for life",
          "ICEPURE 22K"
        ],
        [
          "Around $50 no-drill",
          "Waterdrop UL12A"
        ],
        [
          "Around $59",
          "PUREPLUS 22K"
        ]
      ]
    }
  },
  {
    "subheading": "For vans and tiny homes specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a no-drill or compact under-sink design, a 3/8 inch connection and a cold-line-only note."
      },
      {
        "label": "In this comparison",
        "text": "The Waterdrop UL12A is freestanding with a 3/8 inch line, and the Waterdrop 10UA is compact with push-to-connect fittings."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you use a lot of water or want five years without changes, which the PUREPLUS 22K delivers at about $59. Over $75 the picks add stages and certifications."
      },
      {
        "label": "Save if",
        "text": "Save if you only need an annual filter swap, since the Waterdrop 10UA costs about $44."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rated gallons and years",
    "explanation": "A 22,000 gallon rating assumes about 12 gallons per day for 5 years, which is high for a camper or van. Real life is shorter if the water is hard or sandy. Look for both gallons and years in the title and replace at the sooner of the two."
  },
  {
    "criterion": "Certification scope",
    "explanation": "NSF/ANSI 42 covers aesthetic effects like chlorine taste and odor, NSF/ANSI 53 covers health contaminants such as lead, and NSF/ANSI 372 covers lead-free materials. A filter listed only to 42 does not claim to reduce lead. Look for the specific standard number and the contaminants it covers, not just the word certified."
  },
  {
    "criterion": "Installation and space",
    "explanation": "An under-sink system needs a cold water line and a few inches of cabinet space, and a no-drill design avoids modifying the cabinet. Check that your faucet has a 3/8 or 1/2 inch connection. Look for the install method and the fitting size in the description."
  },
  {
    "criterion": "Replacement filter cost",
    "explanation": "A system that costs $44 can need a $26 filter every year, while one at $59 can last three to five years. Dividing the replacement price by the rated years shows the real running cost. Look for the replacement model number and price before you buy, and compare yearly cost instead of the system price alone."
  },
  {
    "criterion": "Cold water only",
    "explanation": "Under-sink filters are for cold water lines, since hot water damages the media and seals and can crack the housing. In a van or small cabin, make sure the line feeding the filter is cold and pressurized. Look for the words cold water only in the title and check the maximum pressure rating before you install."
  }
];

export const faq = [
  {
    "q": "Can I use an under-sink filter in a van?",
    "a": "Yes, if the van has pressurized cold water and a 3/8 inch connection. The Waterdrop UL12A is freestanding, which suits a van cabinet where drilling is not an option. Keep it above freezing and away from hot lines, and secure it so it cannot shift on the road."
  },
  {
    "q": "Do these filters remove viruses?",
    "a": "No. They are carbon filters aimed at taste, chlorine, lead and particles, and none of these picks is sold as a virus or bacteria purifier. For untreated water from a stream or well, use a purifier or boil it before you drink it."
  },
  {
    "q": "How do I know when to change the filter?",
    "a": "Follow the rated gallons or years and change the filter when the flow slows or the taste changes. The Waterdrop UL12A includes a time reminder to help. Write the install date on the housing with a marker so you do not forget."
  },
  {
    "q": "Are replacement filters expensive?",
    "a": "Replacement filters range from about $26 to $31 for the Waterdrop models, and the ICEPURE and PUREPLUS last up to 3 to 5 years. Divide the replacement price by the rated years to get a yearly cost. Compare that, not just the system price."
  },
  {
    "q": "Can I filter hot water with these?",
    "a": "No. All of the under-sink systems here are cold water only, because hot water damages the filter media and seals. Connect them to the cold line ahead of the faucet, and keep the housing away from a water heater or other hot line."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Water Filters Under 100",
    "href": "/packs-hiking/best-water-filters-under-100"
  },
  {
    "title": "Best Water Filters Under 150",
    "href": "/packs-hiking/best-water-filters-under-150"
  },
  {
    "title": "Best Water Filters Under 200",
    "href": "/packs-hiking/best-water-filters-under-200"
  }
];
