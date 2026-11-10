export const guideSlug = "best-water-filters-under-200";
export const guideTitle = "4 Best Water Filters Under 200 in 2026";
export const metaTitle = "Best Water Filters Under 200 in 2026";
export const metaDescription = "Best water filters under $200: four premium under-sink systems compared on contaminant coverage, flow rate and filter life for cabins and tiny homes.";
export const mainKeyword = "best water filters under 200";
export const introParagraphs = [
  "Two hundred dollars covers the premium under-sink systems, yet very few are priced between $155 and $200, so only four genuinely good options sit under this cap. They range from about $111 to $155, and the guide is about what the last $50 beyond the $150 tier actually buys.",
  "That answer is flow rate, a wider contaminant list and a better-known name. Three of these picks also appear in the $150 guide, since no new product sits near the cap."
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
    "id": "best-water-filters-under-200-1",
    "rank": 1,
    "badge": "Best Under $200",
    "name": "Aquasana Under Sink Water Filter System",
    "price": "$154.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415PkFW3nqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00CHYLXLW?tag=rvgearlab-20",
    "description": "Aquasana reduces up to 99 percent of 78 contaminants, including lead, PFOA and PFOS, chlorine and pesticides, and flows about half a gallon of water per minute. The filter lasts 6 months or 600 gallons and costs less than 10 cents per gallon.\n\nAt about $155 it is the only pick above the $150 mark and the fastest, which means no waiting for a glass of water. The CuZn UC-200 lasts 5 years, while this one trades filter life for flow.\n\nFamilies that fill pitchers and pots often will like the half-gallon-per-minute flow. It suits a kitchen with a dedicated drinking tap.",
    "specs": [
      "Reduces up to 99% of 78 contaminants",
      "Flows 0.5 gallons per minute",
      "6 months or 600 gallons"
    ],
    "pros": [
      "Fast flow of half a gallon a minute",
      "Lists 78 contaminants",
      "Low cost per gallon",
      "Well-known brand"
    ],
    "cons": [
      "Filter changes every 6 months",
      "Costs the most of the four"
    ],
    "bestFor": "Families wanting fast flow",
    "take": "The fastest and most name-brand option under $200.",
    "catch": "Plan on two filter changes per year."
  },
  {
    "id": "best-water-filters-under-200-2",
    "rank": 2,
    "badge": "Best Long-Life Value",
    "name": "CuZn UC-200 Under Sink Water Filter",
    "price": "$149.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31JDcOlHF+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B000923524?tag=rvgearlab-20",
    "description": "The CuZn UC-200 is a 3-stage filter with micro sediment membranes, KDF-55 and coconut shell carbon, rated for 5 years and certified to NSF/ANSI 42 and 372. It reduces PFAS, lead and chlorine and installs inline without drilling.\n\nAt about $150 it costs $5 less than the Aquasana and lasts ten times longer on paper. The Aquasana flows faster.\n\nCabin owners and busy households who dislike filter changes will like the five-year life. It is the lowest-maintenance system here.",
    "specs": [
      "5-year filter life",
      "NSF/ANSI 42 and 372",
      "3-stage, no-drill install"
    ],
    "pros": [
      "Five years between changes",
      "Certified lead-free materials",
      "No-drill inline install",
      "Keeps beneficial minerals"
    ],
    "cons": [
      "No dedicated faucet",
      "Slower than the Aquasana"
    ],
    "bestFor": "Low-maintenance households",
    "take": "A five-year filter for people who hate changing cartridges.",
    "catch": "Check the flow rate before you buy."
  },
  {
    "id": "best-water-filters-under-200-3",
    "rank": 3,
    "badge": "Best Mid-Price Faucet Kit",
    "name": "EcoPure ECOP20 2 Stage Under Sink Water Filter System",
    "price": "$122.06",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41CJNtf-W0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00BA1DX84?tag=rvgearlab-20",
    "description": "EcoPure ECOP20 is a 2-stage system certified to reduce 58 contaminants, including chlorine taste and odor, lead and cysts. It includes a dedicated faucet and connects to a 3/8 inch cold line.\n\nAt about $122 it costs $33 less than the Aquasana and has a smaller contaminant list. The faucet is included.\n\nHouseholds that want a separate tap and a mid-priced system will like it. It suits a standard kitchen.",
    "specs": [
      "2-stage, 58 contaminants",
      "Dedicated faucet included",
      "3/8 inch cold line"
    ],
    "pros": [
      "Dedicated faucet in the box",
      "58 certified contaminants",
      "Reduces cysts and lead",
      "DIY installation"
    ],
    "cons": [
      "Fewer contaminants than the Aquasana",
      "Needs room for a second faucet"
    ],
    "bestFor": "Households wanting a faucet kit",
    "take": "A solid mid-priced system with a faucet.",
    "catch": "The Aquasana is faster."
  },
  {
    "id": "best-water-filters-under-200-4",
    "rank": 4,
    "badge": "Best Certified System",
    "name": "A. O. Smith Under Sink Water Filter System",
    "price": "$111.11",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41IZ6mcRu4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07NJ4P99G?tag=rvgearlab-20",
    "description": "The AO Smith AO-US-200 is a 2-stage Claryum system with a dedicated faucet that reduces up to 99 percent of 78 contaminants, including lead and PFAS, while leaving essential minerals. The full system is certified to NSF/ANSI 42, 43 and 401.\n\nAt about $111 it is the cheapest pick and matches the Aquasana's 78 contaminant list. It has a lower flow claim than the Aquasana.\n\nBuyers who want full-system certification at the lowest price will like it. It suits a family kitchen.",
    "specs": [
      "2-stage Claryum, 78 contaminants",
      "Dedicated drinking faucet",
      "NSF/ANSI 42, 43, 401 certified"
    ],
    "pros": [
      "Lowest price of the four",
      "Full-system NSF certification",
      "Dedicated faucet included",
      "Leaves essential minerals"
    ],
    "cons": [
      "Needs a hole for the faucet",
      "Cold water only"
    ],
    "bestFor": "Certification-minded buyers",
    "take": "The best certified option at the lowest price.",
    "catch": "It gives up the Aquasana's flow rate."
  }
];

export const howWeEvaluated = [
  {
    "title": "Contaminant coverage",
    "description": "Lists of 58 to 78 contaminants were compared against the standards that back them."
  },
  {
    "title": "Flow rate",
    "description": "Stated flow rates were compared for fill speed."
  },
  {
    "title": "Filter life",
    "description": "Rated lives from 6 months to 5 years were compared."
  },
  {
    "title": "Certification",
    "description": "Full-system and component certifications were compared."
  },
  {
    "title": "Cost per gallon",
    "description": "Replacement costs and gallon ratings were compared."
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
    "subheading": "By priority",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Fast flow",
          "Aquasana Claryum",
          "Half a gallon per minute."
        ],
        [
          "Lowest maintenance",
          "CuZn UC-200",
          "Five-year filter life."
        ],
        [
          "Faucet kit at mid price",
          "EcoPure ECOP20",
          "Faucet included, 58 contaminants."
        ],
        [
          "Full-system certification",
          "AO Smith AO-US-200",
          "NSF/ANSI 42, 43 and 401."
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
          "$110 to $130",
          "AO Smith AO-US-200 or EcoPure ECOP20"
        ],
        [
          "$140 to $160",
          "CuZn UC-200 or Aquasana Claryum"
        ]
      ]
    }
  },
  {
    "subheading": "Fast flow vs long life",
    "cards": [
      {
        "label": "Fast flow",
        "text": "A fast-flow system fills containers quickly but uses cartridges that need changing every 6 months. The Aquasana Claryum is the fast one."
      },
      {
        "label": "Long life",
        "text": "A five-year filter costs less to maintain and flows slower. The CuZn UC-200 is the long-life pick."
      }
    ],
    "note": "Most households should buy the CuZn UC-200, and busy kitchens that value speed should buy the Aquasana Claryum."
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
          "Around $111",
          "AO Smith AO-US-200"
        ],
        [
          "Around $122",
          "EcoPure ECOP20"
        ],
        [
          "Around $150",
          "CuZn UC-200"
        ],
        [
          "Around $155",
          "Aquasana Claryum"
        ]
      ]
    }
  },
  {
    "subheading": "For a household of four specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a flow of about 0.5 gallons per minute, a dedicated faucet and a filter rated for at least 600 gallons."
      },
      {
        "label": "In this comparison",
        "text": "The Aquasana Claryum flows 0.5 gallons per minute and is rated 600 gallons, and the AO Smith AO-US-200 adds a dedicated faucet."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if flow and brand matter, which makes the Aquasana Claryum worth its place at about $155. The AO Smith AO-US-200 costs $44 less and lists the same 78 contaminants."
      },
      {
        "label": "Save if",
        "text": "Save if you want the same coverage for less, since the AO Smith AO-US-200 at about $111 is certified and includes a faucet."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Flow rate",
    "explanation": "A flow of 0.5 gallons per minute fills a pitcher in about 15 seconds, while a slower filter takes several times longer. Flow matters if you cook and fill bottles often. Look for the gallons-per-minute figure in the title or bullets, and compare it across systems."
  },
  {
    "criterion": "Filter change schedule",
    "explanation": "A 6-month filter needs two changes a year, while a 5-year system needs one, so over five years the 6-month design uses ten cartridges and the long-life design uses one. Each change costs money and a few minutes of work. Look for the schedule and the cost of a replacement set, then calculate the yearly cost before you commit."
  },
  {
    "criterion": "Contaminant list and standard",
    "explanation": "Lists of 78 contaminants reflect testing against more substances than lists of 58, and the standard behind each claim matters more than the count. A claim backed by NSF/ANSI 53 or 58 is stronger than a generic reduces claim in a bullet point. Look for the standard and the contaminants it covers, and check that lead and PFAS are named if they matter to you."
  },
  {
    "criterion": "Dedicated faucet",
    "explanation": "A dedicated faucet keeps filtered water separate from the main tap, but it needs a spare hole in the counter or sink. Many sinks have a soap dispenser hole that works, and some do not have any hole at all. Look for the faucet in the box and its finish, and check your sink for a spare hole before you order."
  },
  {
    "criterion": "Total cost of ownership",
    "explanation": "Add the system price and five years of filters to compare real cost. A $155 system with $60 in yearly filters costs about $455 over five years, while a $150 system with one 5-year filter costs about the same as its sticker price. Look for the replacement price and schedule in the product details before you decide."
  }
];

export const faq = [
  {
    "q": "Is the Aquasana worth $44 more than the AO Smith?",
    "a": "If flow rate and a six-month change cycle suit you, yes. The Aquasana Claryum flows 0.5 gallons per minute, and the AO Smith AO-US-200 costs $44 less with the same 78 contaminant list. For a household that fills many bottles, the speed is the difference."
  },
  {
    "q": "How long do the filters last?",
    "a": "The Aquasana Claryum needs a new filter every 6 months or 600 gallons, whichever comes first. The CuZn UC-200 is rated for 5 years, so it needs a change about once. Replace on the sooner of the gallons or the time rating."
  },
  {
    "q": "Can I use these in a camper or tiny home?",
    "a": "Yes, with a pressurized cold line and a 3/8 inch connection. The CuZn UC-200 installs inline without drilling, which suits a camper or tiny home. Protect the filter from freezing and make sure the line is not fed from a hot source."
  },
  {
    "q": "What does NSF certification mean?",
    "a": "It means the product was tested to a standard, such as NSF/ANSI 42 for chlorine taste and odor. A full-system listing covers the entire unit and not only the media. The AO Smith AO-US-200 states 42, 43 and 401, which is a broad claim."
  },
  {
    "q": "Do these filters need a plumber?",
    "a": "Not usually. Most connect with push-fit or threaded fittings to a 3/8 inch cold line, and instructions are included. Turn off the water, cut the line and flush the system for several minutes before drinking."
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
    "title": "Best Water Filters Under 30",
    "href": "/packs-hiking/best-water-filters-under-30"
  }
];
