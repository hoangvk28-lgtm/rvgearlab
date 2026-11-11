export const guideSlug = "best-water-purification-tablets";
export const guideTitle = "Best Water Purification Tablets";
export const metaTitle = "Best Water Purification Tablets (2026)";
export const metaDescription = "Six water purification tablets for backpacking, camping and emergency storage, compared by chemistry, wait time, tablet count and cost per tablet.";
export const mainKeyword = "best water purification tablets";
export const introParagraphs = [
  "Water purification tablets are the lightest, cheapest and longest-lasting way to treat water, which is why they live in two places: the lid pocket of a backpack and the bottom of an emergency kit. A bottle of tablets weighs a few ounces, takes no batteries, does not freeze or clog, and sits on a shelf for years. The trade is time and taste. Tablets need a wait that runs from half an hour to four hours, and some chemistries leave a flavor that others do not.",
  "The chemistry matters more than the brand. Chlorine dioxide tablets, such as Katadyn Micropur MP1, state a wait of 15 minutes in clear water and up to 4 hours in cold or cloudy water, and they are the family most often relied on for broader pathogen coverage. Chlorine-based tablets such as Aquatabs treat larger volumes per tablet and are common in disaster relief. Some older-style tablets are marketed only as making water bacteriologically suitable, and their listings name fewer organisms. Reading the label for named organisms, dose and wait time is the single best habit when you shop for tablets.",
  "This guide covers both trips and stockpiles. The picks include a small backpacking pack, a bulk 100-count bottle of high-dose tablets and cheap emergency bottles. Prices run from $11.47 to $39.99, but the tablet count differs, so cost per tablet runs from about 12 cents to about a dollar. The how-to-choose tables sort the picks by trip, budget and storage.",
  "One more point on shelf life, since many buyers stock tablets for years. Individually foil-sealed tablets protect against moisture, which is the main enemy, and each package carries a printed date. Check that date when you buy and again when you rotate your kit, and store the tablets cool, dry and out of direct sun."
];
export const lastUpdated = "2026-11-11";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41UJgs4vekL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-water-purification-tablets-1",
    "rank": 1,
    "badge": "Best for Backpacking",
    "name": "Katadyn Micropur MP1 Tablets 20 Count",
    "price": "$19.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UJgs4vekL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B000H3DNF4?tag=rvgearlab-20",
    "description": "The Katadyn Micropur MP1 is a pack of 20 chlorine dioxide tablets, each individually sealed. The listing notes chlorine dioxide is the same chemical used in municipal water plants, with no iodine off-taste, at a 4 ppm in-use concentration. One tablet treats 1 liter of water, with a wait of 15 minutes in clear water and up to 4 hours in cold or cloudy water.\n\nCompared with the Aquatabs 49mg below, the Micropur MP1 costs about 73 cents more per tablet and gives a named chlorine dioxide chemistry and a published wait window, while the Aquatabs offers a lower cost per tablet. Compared with the Potable Aqua two-bottle pack, it is a more compact pack with sealed single doses for roughly $8 more.\n\nIt suits a backpacker who wants a light backup to a filter, a traveler who needs a fast chemical purifier and a thru-hiker rotating a few tablets at a time. Twenty individually sealed tablets cover about 20 liters, which is a week of backup for most trips.",
    "specs": [
      "20 chlorine dioxide tablets, one per liter",
      "15 minutes in clear water, up to 4 hours cold or cloudy",
      "Individually sealed, no iodine taste"
    ],
    "pros": [
      "Chlorine dioxide with a published wait window",
      "Each tablet is individually sealed",
      "No iodine taste or chemical residue",
      "Compact pack for a pack lid pocket"
    ],
    "cons": [
      "Costs about $1 per tablet",
      "Cold or cloudy water needs up to 4 hours"
    ],
    "bestFor": "Backpackers who want chlorine dioxide with a clear wait time and sealed tablets"
  },
  {
    "id": "best-water-purification-tablets-2",
    "rank": 2,
    "badge": "Best Value for Travelers",
    "name": "Aquatabs 49mg Tablets 100 Pack",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hmcr5QMmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09B2TVKGB?tag=rvgearlab-20",
    "description": "The Aquatabs 49mg tablets come in a 100 pack and list removal of 99.9999 percent of bacteria and 99.99 percent of viruses. Each tablet treats a range of about 0.75 to 2 liters, according to the listing, which fits a water bottle or a hydration bladder. They are individually sealed in foil strips designed for longevity, and the treated water has no bad taste, color or odor compared with iodine products.\n\nCompared with the Katadyn Micropur MP1, the Aquatabs 49mg costs about 73 cents less per tablet and offers five times the count, while the Katadyn publishes a clear wait window. Compared with the Aquatabs 397mg, it is a smaller dose for bottle-size volumes at $13 less.\n\nIt suits an international traveler, a family camping kit or a stock for a car emergency bin. Foil strips keep each tablet dry until you use it, and a bottle-sized dose is easy to portion.",
    "specs": [
      "100 tablets, 49mg each",
      "99.9999% bacteria and 99.99% viruses listed",
      "0.75 to 2 liters per tablet, foil-sealed"
    ],
    "pros": [
      "Names bacteria and virus removal percentages",
      "About 27 cents per tablet",
      "Sized for a bottle or a bladder",
      "Foil strips protect each tablet"
    ],
    "cons": [
      "Wait time is not stated in the listing",
      "Chlorine taste can vary by water source"
    ],
    "bestFor": "Travelers and campers who want a low cost per tablet and named virus claims"
  },
  {
    "id": "best-water-purification-tablets-3",
    "rank": 3,
    "badge": "Lowest Cost per Tablet",
    "name": "Potable Aqua Tablets 2 Bottle Pack",
    "price": "$11.47",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51lfUdR5pNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01GPK4LVW?tag=rvgearlab-20",
    "description": "The Potable Aqua pack includes two bottles of 50 tablets, for 100 tablets at $11.47, which works out to about 11 cents per tablet. The listing says the tablets make water bacteriologically suitable to drink and are effective against Giardia lamblia when used as directed, and it positions them for camping, hiking, international travel and disaster preparedness.\n\nCompared with the Coghlan's, it gives double the count for $1 less. Compared with the single bottle of Potable Aqua at $23.95, it gives twice the tablets for half the price, so the two-bottle pack is the better buy of the pair.\n\nIt suits a stock-up for a go-bag, a glove box, a boat or a basement shelf where you want many tablets cheaply. Two bottles let you split the kit between two places.",
    "specs": [
      "Two bottles of 50 tablets each",
      "Effective against Giardia lamblia as directed",
      "About 11 cents per tablet"
    ],
    "pros": [
      "Cheapest per tablet at about 11 cents",
      "Two bottles split between kit locations",
      "Positioned for emergency and travel use",
      "Low entry price at $11.47"
    ],
    "cons": [
      "Listing names Giardia but few other organisms",
      "Confirm the dose and wait time on the label"
    ],
    "bestFor": "Budget buyers stocking an emergency kit with many tablets"
  },
  {
    "id": "best-water-purification-tablets-4",
    "rank": 4,
    "badge": "Best for Bulk Storage",
    "name": "Aquatabs 397mg Tablets 100 Pack",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41PR4yq3z3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09FFQN924?tag=rvgearlab-20",
    "description": "The Aquatabs 397mg tablets come in a 100 pack, each dosed to treat about 4 gallons in 30 minutes according to the listing. They are sold for boating, camping and emergency use, and the listing says the water has no iodine taste. A larger dose per tablet makes them suited to jugs, carboys and storage tanks rather than a single bottle.\n\nCompared with the Aquatabs 49mg, the 397mg tablet treats far more water per tablet and costs $13 more per pack. Compared with the Katadyn Micropur MP1, it provides 100 tablets for about $20 more and treats a container instead of a liter.\n\nIt suits a home water-storage plan, a boat, a campsite with a large jug or an emergency shelter. One tablet per 4 gallons stretches 100 tablets to hundreds of gallons.",
    "specs": [
      "100 tablets, 397mg each",
      "Treats about 4 gallons in 30 minutes",
      "No iodine taste, foil sealed"
    ],
    "pros": [
      "One tablet treats about 4 gallons",
      "Thirty-minute treatment time",
      "Good for jugs, boats and storage tanks",
      "About 40 cents per tablet but far less per gallon"
    ],
    "cons": [
      "Too strong a dose for a single bottle",
      "Highest price in the group at $39.99"
    ],
    "bestFor": "Households and boat owners who treat larger containers"
  },
  {
    "id": "best-water-purification-tablets-5",
    "rank": 5,
    "badge": "Best Cheap Backup",
    "name": "Coghlan's Germicidal Tablets 50 Count",
    "price": "$12.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/314wKtgSyfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B000ESB8WW?tag=rvgearlab-20",
    "description": "The Coghlan's Drinking Water Germicidal Tablets come in a 50 count bottle at $12.49. The listing describes them as making most water bacteriologically suitable for drinking, handy to have while hiking or camping, and intended for short term or limited emergency use. They are a simple, no-frills backup.\n\nCompared with the Potable Aqua two-bottle pack, the Coghlan's gives half the tablets for about $1 more. Compared with the Aquatabs 49mg, it costs about 25 cents per tablet and offers fewer named claims.\n\nIt suits a small kit tucked into a daypack, a glove box emergency bag or a first-time buyer who wants a basic backup. The 50 count covers a short trip.",
    "specs": [
      "50 germicidal tablets per bottle",
      "Bacteriologically suitable for most water",
      "For short term or limited emergency use"
    ],
    "pros": [
      "Low price at $12.49",
      "Simple, familiar bottle for a daypack",
      "Intended as a short-term emergency backup",
      "Easy to stash in a car or kit"
    ],
    "cons": [
      "Listing gives few details on dose or wait time",
      "Names no viruses or protozoa"
    ],
    "bestFor": "Campers who want a simple, low-cost emergency backup"
  },
  {
    "id": "best-water-purification-tablets-6",
    "rank": 6,
    "badge": "Single Bottle Option",
    "name": "Potable Aqua Tablets Single Bottle 50 Count",
    "price": "$23.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4143T43Jt4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B001949TKS?tag=rvgearlab-20",
    "description": "The Potable Aqua single bottle holds 50 tablets and is priced at $23.95, or about 48 cents per tablet. The listing says the tablets provide travel and emergency water purification, are effective against Giardia lamblia when used as directed and make questionable water bacteriologically suitable to drink.\n\nCompared with the two-bottle pack of the same brand at $11.47, this bottle costs more than twice as much for half the tablets, so the larger pack is the better value. Compared with the Coghlan's, it costs $11.46 more per bottle for the same count.\n\nIt suits a buyer who wants exactly one bottle for a camping accessories box, or a replacement for a kit that already has a different brand. A single bottle is easy to store in a small pocket.",
    "specs": [
      "One bottle of 50 tablets",
      "Effective against Giardia lamblia as directed",
      "Travel and emergency water treatment"
    ],
    "pros": [
      "Familiar brand in a single bottle",
      "Sized for a small pack or kit",
      "Tablets suit travel and emergency use",
      "Easy to label and rotate in a kit"
    ],
    "cons": [
      "Costs more than twice the two-bottle pack",
      "Listing names Giardia but few other organisms"
    ],
    "bestFor": "Buyers who want one bottle of Potable Aqua for a small kit"
  }
];

export const howWeEvaluated = [
  {
    "title": "Chemistry and named claims",
    "description": "We compared the active chemistry where the listing names it, and the organisms and percentages each product states, giving more weight to named claims."
  },
  {
    "title": "Dose and wait time",
    "description": "Based on product specs, we looked at volume per tablet and the stated treatment time, from 15 minutes to 4 hours."
  },
  {
    "title": "Cost per tablet and per liter",
    "description": "We divided price by tablet count and by treated volume, which separates a cheap bottle from a cheap liter."
  },
  {
    "title": "Storage and packaging",
    "description": "We looked at individual foil sealing and bottle format, since packaging protects tablets from moisture over long storage."
  },
  {
    "title": "Price and scoring",
    "description": "We compared prices from $11.47 to $39.99. The RV Gear Lab Fit Score is an editorial assessment from structured criteria, based on product specs and published buyer feedback, not a lab measurement."
  }
];

export interface HowToChooseSection {
  subheading: string; intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Use Case",
    "intro": "Tablets serve very different jobs, so start with how you will use them.",
    "table": {
      "headers": [
        "Use case",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Backpacking backup to a filter",
          "Katadyn Micropur MP1 Tablets 20 Count",
          "Individually sealed chlorine dioxide with a clear wait window."
        ],
        [
          "International travel with bottle-size treatment",
          "Aquatabs 49mg Tablets 100 Pack",
          "Lists bacteria and virus claims, 0.75 to 2 liters each."
        ],
        [
          "Household or boat storage tanks",
          "Aquatabs 397mg Tablets 100 Pack",
          "One tablet treats about 4 gallons."
        ],
        [
          "Budget emergency kit",
          "Potable Aqua Tablets 2 Bottle Pack",
          "100 tablets for $11.47."
        ],
        [
          "Short-term daypack backup",
          "Coghlan's Germicidal Tablets 50 Count",
          "A simple 50 count bottle at $12.49."
        ],
        [
          "A single replacement bottle",
          "Potable Aqua Tablets Single Bottle 50 Count",
          "One bottle of 50 for $23.95."
        ]
      ]
    },
    "note": "For most hikers, the Katadyn Micropur MP1 is the tablet to carry."
  },
  {
    "subheading": "By Budget",
    "intro": "Prices run from $11.47 to $39.99, but the tablet count changes the real cost.",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick",
        "What you get"
      ],
      "rows": [
        [
          "Under $12",
          "Potable Aqua Tablets 2 Bottle Pack",
          "100 tablets for $11.47, about 11 cents each."
        ],
        [
          "$12 to $13",
          "Coghlan's Germicidal Tablets 50 Count",
          "50 tablets for $12.49."
        ],
        [
          "$19 to $20",
          "Katadyn Micropur MP1 Tablets 20 Count",
          "20 chlorine dioxide tablets for $19.95."
        ],
        [
          "$23 to $24",
          "Potable Aqua Tablets Single Bottle 50 Count",
          "50 tablets for $23.95."
        ],
        [
          "$26 to $27",
          "Aquatabs 49mg Tablets 100 Pack",
          "100 bottle-size tablets for $26.99."
        ],
        [
          "$40",
          "Aquatabs 397mg Tablets 100 Pack",
          "100 container-size tablets for $39.99."
        ]
      ]
    }
  },
  {
    "subheading": "Chlorine Dioxide vs Other Tablet Types",
    "intro": "The active chemistry changes the wait time, taste and the organisms covered, so it is the main tradeoff.",
    "cards": [
      {
        "label": "Named chlorine dioxide",
        "text": "The Katadyn Micropur MP1 Tablets 20 Count lists chlorine dioxide at 4 ppm with 15 minutes in clear water and up to 4 hours in cold or cloudy water. It is the pick for backpackers who want a published wait window and no iodine taste."
      },
      {
        "label": "Chlorine-dose tablets and basic treatments",
        "text": "The Aquatabs 49mg Tablets 100 Pack and Aquatabs 397mg Tablets 100 Pack list bacteria and virus or container-size claims at lower cost, while the Potable Aqua and Coghlan's tablets are sold on bacteriological suitability and Giardia, with fewer details."
      }
    ],
    "note": "Choose chlorine dioxide for backpacking, and bulk chlorine tablets for storage and larger volumes."
  },
  {
    "subheading": "By Storage and Shelf Life",
    "intro": "If you buy tablets for an emergency kit, packaging and rotation matter as much as chemistry.",
    "table": {
      "headers": [
        "Storage need",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Long-term kit with sealed doses",
          "Katadyn Micropur MP1 Tablets 20 Count",
          "Each tablet is individually sealed."
        ],
        [
          "Large stockpile in foil strips",
          "Aquatabs 49mg Tablets 100 Pack",
          "Foil strips designed for longevity."
        ],
        [
          "Bulk water-tank treatment",
          "Aquatabs 397mg Tablets 100 Pack",
          "100 high-dose tablets in one bottle."
        ],
        [
          "Split across two locations",
          "Potable Aqua Tablets 2 Bottle Pack",
          "Two bottles, two kits."
        ],
        [
          "Small car emergency bag",
          "Coghlan's Germicidal Tablets 50 Count",
          "One compact bottle."
        ],
        [
          "A spare bottle for rotation",
          "Potable Aqua Tablets Single Bottle 50 Count",
          "Swap into an old kit."
        ]
      ]
    }
  },
  {
    "subheading": "For Emergency and Survival Stockpiles Specifically",
    "intro": "A stockpile has to work after years on a shelf, so packaging and dosing matter most.",
    "cards": [
      {
        "label": "Look for",
        "text": "Individual foil sealing, a printed date, a named chemistry and a dose that fits your containers. Rotate the stock and keep it cool and dry. The Aquatabs 49mg and Katadyn Micropur MP1 are the first two to check."
      },
      {
        "label": "In this comparison",
        "text": "The Aquatabs 397mg Tablets 100 Pack treats about 4 gallons per tablet for storage tanks, the Aquatabs 49mg Tablets 100 Pack suits bottle-size use, and the Potable Aqua Tablets 2 Bottle Pack gives 100 tablets for $11.47."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "Higher prices in this group buy clearer chemistry and sealed doses.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You rely on tablets as your main treatment. The Katadyn Micropur MP1 at $19.95 and the Aquatabs 397mg at $39.99 provide named chemistry and sealed doses."
      },
      {
        "label": "Save if",
        "text": "You are building a backup kit. The Potable Aqua 2 Bottle Pack at $11.47 and the Coghlan's at $12.49 cover that for little."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Active chemistry and named organisms",
    "explanation": "Tablets work by releasing a disinfectant, usually chlorine dioxide, a chlorine compound or iodine, and each has a different range of organisms it handles well. A listing that names viruses, bacteria and protozoa gives you more to go on than one that says only suitable to drink. A tablet that handles Giardia may not be rated for Cryptosporidium, which is far more chlorine-resistant. Check the label for named organisms and percentages."
  },
  {
    "criterion": "Wait time and water temperature",
    "explanation": "Disinfection is slower in cold or cloudy water, so a tablet that takes 15 minutes in clear water may need up to 4 hours in cold or murky water. If you drink before the wait is over, you are not protected. Plan your treatment before you are thirsty. Look for the stated times for clear and cold water."
  },
  {
    "criterion": "Dose per tablet and container size",
    "explanation": "A 49mg tablet is sized for a bottle, a 397mg tablet for several gallons, and a one-per-liter tablet for a single bottle. Using the wrong size either wastes tablets or under-treats the water. Match the dose to your containers. Check liters or gallons per tablet in the bullets."
  },
  {
    "criterion": "Cost per tablet and per liter",
    "explanation": "A bottle that looks cheap may hold few tablets, and a pricey bottle may treat more water per tablet. Dividing price by count shows about 11 cents for a two-bottle pack and about a dollar for the Micropur MP1. Then divide by liters treated. Calculate both numbers before you buy."
  },
  {
    "criterion": "Packaging and shelf life",
    "explanation": "Moisture degrades tablets, so individual foil sealing protects each dose until you tear it open. A printed date tells you how long the maker expects the tablets to last, and the figure varies by product. A loose-tablet bottle opened often will not last as long as sealed strips. Check the packaging type and the date on the package."
  },
  {
    "criterion": "Taste and treatment side effects",
    "explanation": "Iodine tablets leave a distinct flavor and are not suited to everyone, while chlorine dioxide and chlorine tablets leave little taste. A bad taste tempts people to skip treatment. Look for taste claims in the listing, and add a drink mix if needed."
  }
];

export const faq = [
  {
    "q": "How long do I have to wait after dropping in a tablet?",
    "a": "It depends on the product. The Katadyn Micropur MP1 lists 15 minutes in clear water and up to 4 hours in cold or cloudy water, and the Aquatabs 397mg lists 30 minutes. Follow the label for your product and use the longer wait for cold or murky water."
  },
  {
    "q": "Do tablets remove viruses?",
    "a": "Some list virus claims. The Aquatabs 49mg lists 99.99 percent of viruses and 99.9999 percent of bacteria. The Potable Aqua, Coghlan's and some other listings name only bacteria or Giardia, so read the label."
  },
  {
    "q": "How should I store tablets for an emergency kit?",
    "a": "Keep them cool, dry and out of direct sun, in their original packaging. Individually sealed tablets like the Micropur MP1 or Aquatabs strips resist moisture. Check the printed date each year and rotate older stock into your regular trips."
  },
  {
    "q": "Can tablets replace a filter?",
    "a": "They can purify water but do not remove sediment or taste. For muddy water, strain it through a cloth first. Many backpackers pair a filter with tablets as backup, and the Micropur MP1 is a common choice."
  },
  {
    "q": "Which tablet suits a household water tank?",
    "a": "The Aquatabs 397mg, which treats about 4 gallons per tablet in 30 minutes, is sized for containers. Use the label dose for your tank size, and let the water sit for the stated time."
  },
  {
    "q": "Are tablets safe for everyone?",
    "a": "Follow the label. Some tablets are not recommended for certain people, such as those with thyroid conditions in the case of iodine products. If you have a medical concern, check with a doctor before relying on chemical treatment."
  }
];

export const bottomLine = "For most backpackers, the Katadyn Micropur MP1 at $19.95 is the tablet to carry: named chlorine dioxide, sealed single doses and a clear wait window. Travelers and families who want low cost per tablet and virus claims should choose the Aquatabs 49mg 100 pack at $26.99, and anyone treating tanks or jugs should look at the Aquatabs 397mg at $39.99. For an emergency stockpile on a tight budget, the Potable Aqua two-bottle pack at $11.47 and the Coghlan's at $12.49 give the most tablets for the least. Read the label for named organisms and wait times, store tablets sealed and dry, and rotate stock every year.";

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Chlorine Water Purification Tablets",
    "href": "/packs-hiking/best-chlorine-water-purification-tablets"
  },
  {
    "title": "Best Water Purification Tablets For Drinking Water",
    "href": "/packs-hiking/best-water-purification-tablets-for-drinking-water"
  },
  {
    "title": "Best Water Purification Tablets For Hiking",
    "href": "/packs-hiking/best-water-purification-tablets-for-hiking"
  }
];
