export const guideSlug = "best-portable-water-filter-for-rv";
export const guideTitle = "Best Portable Water Filters for RV";
export const metaTitle = "Best Portable Water Filters for RV (2026)";
export const metaDescription = "Six portable RV hose-connect water filters from $28 to $150 compared on micron rating, certification, capacity, cartridges and what each removes.";
export const mainKeyword = "best portable water filter for rv";
export const introParagraphs = [
  "Portable in an RV context means a filter you can screw onto a hose at the spigot, carry in a storage bay and move to the next trailer or boat, rather than a plumbed under-sink unit. That makes it the first line of defense against the three things campground water tends to bring: sediment from old pipes, chlorine taste and odor, and whatever else a given park's supply happens to carry. It does not turn any tap into a lab-tested source, but it takes a lot of the unpleasantness out of the first glass.",
  "Filters in this class fall into two families that are easy to confuse. Disposable inline filters with granular activated carbon and a copper-zinc medium called KDF are cheap, swap out every few months and mostly improve taste and odor. Larger housings with replaceable cartridges, including a carbon block rated to NSF/ANSI 42 and 53 or an ultrafiltration stage, aim at finer particles and, in some cases, health-related contaminants. Standard 42 covers aesthetic effects like chlorine taste, and Standard 53 covers health effects such as lead, so the number in the listing matters.",
  "We evaluated six filters on the micron rating and filtration stages, on whether a certification is named, on stated capacity and replacement interval, and on what ships in the box. Prices run from about $28 to $150, and the ranking favors the filter that explains what it does and backs it with a named standard, not the biggest capacity number."
];
export const lastUpdated = "2026-11-11";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41InXGLnDfL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-portable-water-filter-for-rv-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "FRIZZLIFE MV99 NSF 42 and 53 Inline Filter",
    "price": "$71.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41InXGLnDfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08PCJNPHR?tag=rvgearlab-20",
    "description": "The FRIZZLIFE MV99 is an inline hose filter that the listing says is certified by IAPMO R&T against NSF/ANSI 42 and 53, using a composite activated carbon block with 0.5 micron filtration accuracy. It is described as reducing chlorine, lead, heavy metals and odors, uses lead-free solid brass connections, and ships with a holder that has metal pegs to keep it upright and reduce hose kinking. It costs about $72.\n\nCompared with the Camco TastePURE below it, the FRIZZLIFE steps up from a 20 micron sediment-and-taste filter to a 0.5 micron carbon block with certification against health-related contaminants, and it carries two to four times the service life according to the listing. Against the Caredear above it in price, the FRIZZLIFE is smaller and simpler, and it focuses on the certified carbon block rather than a multi-stage system. Brass fittings and the upright holder suit repeated use at campsites.\n\nIt suits campers and boaters who care about lead and heavy metal reduction and want a named standard, and anyone who will carry one filter from site to site and wants it to sit upright on a post or the ground.",
    "specs": [
      "Composite carbon block, 0.5 micron",
      "Certified to NSF/ANSI 42 and 53 per listing",
      "Lead-free brass fittings, upright holder"
    ],
    "pros": [
      "Names NSF/ANSI 42 and 53 certification",
      "0.5 micron carbon block filters finely",
      "Solid brass connections resist leaks",
      "Holder keeps the filter upright"
    ],
    "cons": [
      "Costs more than disposable inline filters",
      "Cartridge replacement adds ongoing cost"
    ],
    "bestFor": "Campers who want a named NSF/ANSI 42 and 53 certification in a hose-connect filter"
  },
  {
    "id": "best-portable-water-filter-for-rv-2",
    "rank": 2,
    "badge": "Best Multi-Stage System",
    "name": "Caredear 3-Stage 0.01 Micron Ultrafiltration System",
    "price": "$149.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41lywMyFAaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FY2CVFDF?tag=rvgearlab-20",
    "description": "The Caredear is a 3-stage RV filter system combining PP sediment, activated carbon and ultrafiltration down to 0.01 micron, and the listing says it removes sand, chlorine and bad tastes. The housing has 0.39 inch thick food-grade walls tested to 125 psi, and the box includes two wrenches, two spare O-rings, plumber's tape, two 1 inch to 3/4 inch adapters and a manual. It costs about $150, the highest price in the group.\n\nCompared with the FRIZZLIFE below it, the Caredear adds an ultrafiltration stage with a much finer 0.01 micron rating and a complete kit that fits both 1 inch and 3/4 inch hookups, in a heavy-duty housing built for repeated use. Against the VEVOR below, the Caredear is rated to a finer micron level and ships with adapters and wrenches, at a higher price and with a bulkier footprint. The housing is designed for RV parks, marinas, motorhomes, campgrounds and car washes.\n\nIt makes sense for full-time RVers, owners of larger rigs and anyone who wants a long-lasting, finer filter with everything needed in the box.",
    "specs": [
      "PP sediment, carbon and 0.01 micron UF",
      "Tested to 125 psi, 0.39 inch walls",
      "Kit with wrenches, O-rings and adapters"
    ],
    "pros": [
      "0.01 micron ultrafiltration stage",
      "Fits 1 inch or 3/4 inch hookups",
      "Thick housing tested to 125 psi",
      "Wrenches, O-rings and adapters included"
    ],
    "cons": [
      "Highest price in this comparison",
      "Larger and heavier than inline filters"
    ],
    "bestFor": "Owners who want the finest filtration and a full kit for an RV or marina hookup"
  },
  {
    "id": "best-portable-water-filter-for-rv-3",
    "rank": 3,
    "badge": "Best High-Capacity Value",
    "name": "VEVOR 5-Micron 3-Stage RV Filter System",
    "price": "$60.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31uZHIvxzWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GZM89ZCP?tag=rvgearlab-20",
    "description": "The VEVOR is a 3-stage RV filter system rated at 5 microns that ships with three cartridges, and the listing says it reduces sediment, residual chlorine and certain heavy metals. It claims up to 80,000 gallons of filtration capacity, stable pressure from 20 to 125 psi and a 3 gpm flow rate, which suits washing and cooking in a camper. It costs about $61.\n\nCompared with the Caredear above it, the VEVOR costs less than half as much and states a coarser 5 micron rating, so it is aimed at sediment, chlorine and general water quality rather than the ultrafiltration range. Against the FRIZZLIFE above it, the VEVOR has three cartridges for multi-stage filtering where the FRIZZLIFE uses a single certified carbon block, and its flow rate is stated in gallons per minute. Both are portable systems for RVs and campers, with a lightweight design for moving between sites.\n\nIt works for travelers who want multi-stage filtering and a stated flow rate, and for owners who value the extra cartridges in the box over named certification.",
    "specs": [
      "5 micron, 3 stage system with 3 cartridges",
      "20 to 125 psi, 3 gpm flow",
      "Listed capacity up to 80,000 gallons"
    ],
    "pros": [
      "Three cartridges included in the box",
      "States 3 gpm flow for showers and cooking",
      "Works across 20 to 125 psi",
      "Large rated capacity"
    ],
    "cons": [
      "No NSF certification is named",
      "5 micron is coarser than the Caredear"
    ],
    "bestFor": "Travelers who want a three-cartridge system and a large rated capacity at a moderate price"
  },
  {
    "id": "best-portable-water-filter-for-rv-4",
    "rank": 4,
    "badge": "Best Four-Filter Season Pack",
    "name": "Camco TastePURE 20-Micron 4-Pack",
    "price": "$48.88",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41SP0q7QmYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00BEDNXTW?tag=rvgearlab-20",
    "description": "The Camco TastePURE is a wide-body inline filter that combines granular activated carbon with KDF and a sediment filter that removes particles larger than 20 microns. The KDF is there to discourage microorganism growth inside the filter when it is idle, each filter lasts about three months on average, and the four-pack covers a full 12 months. It costs about $49, or about $12 per filter.\n\nCompared with the Waterdrop below it, the Camco is a four-pack against a single filter, which lowers the cost per filter and the hassle of reordering. Against the FRIZZLIFE above it, the Camco is a coarser 20 micron design without a named health standard, so it improves taste and clears sediment rather than targeting lead. Any standard garden or water hose connects to it, and installation is just a matter of screwing it into the line.\n\nIt suits seasonal campers who want a year of filters on the shelf, families who care about chlorine taste in drinking and cooking water, and owners who want the simplest possible inline setup.",
    "specs": [
      "20 micron sediment, GAC and KDF",
      "About 3 months per filter on average",
      "Four-pack covers about 12 months"
    ],
    "pros": [
      "Four filters cover about a year",
      "KDF discourages growth when idle",
      "Wide body for more filter volume",
      "Fits any standard hose"
    ],
    "cons": [
      "20 micron rating is coarse",
      "No health-contaminant certification is named"
    ],
    "bestFor": "Campers who want an easy, disposable inline filter for taste and sediment all year"
  },
  {
    "id": "best-portable-water-filter-for-rv-5",
    "rank": 5,
    "badge": "Best Single Inline Filter",
    "name": "Waterdrop RV Inline KDF Filter",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ziYaGIj-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FGX95MHF?tag=rvgearlab-20",
    "description": "The Waterdrop RV inline filter uses KDF, the copper-zinc medium, together with advanced granular activated carbon, and the listing says it reduces chlorine, odor, bad taste and sediment. It is described as lasting about three months, or an entire camping season, and as NSF/ANSI certified, made with food-grade materials. It attaches to any standard garden hose, and it costs about $28.\n\nCompared with the Camco four-pack above it, the Waterdrop is a single filter, so the unit cost is higher, and it names an NSF/ANSI certification in the title that the Camco listing leaves out. Against the Drupany below it, the Waterdrop is a single-purpose filter with a similar three-month life, while the Drupany adds hose protectors and a four-pack, so the Waterdrop makes sense when you only need one. The listing also says it works for gardening, brewing, car washing and pools.\n\nIt works for casual campers, boaters, seasonal sites and anyone who wants one certified filter to try before buying a larger set. Check which NSF/ANSI standard the listing cites before relying on it for a specific contaminant.",
    "specs": [
      "KDF and GAC filtration",
      "Lasts about three months",
      "NSF/ANSI certified per listing"
    ],
    "pros": [
      "Names an NSF/ANSI certification",
      "KDF and carbon target chlorine and odor",
      "Food-grade materials",
      "Fits any standard garden hose"
    ],
    "cons": [
      "The specific standard needs checking",
      "Single filter has a higher unit cost"
    ],
    "bestFor": "Campers who want a single KDF and GAC filter that is NSF/ANSI certified"
  },
  {
    "id": "best-portable-water-filter-for-rv-6",
    "rank": 6,
    "badge": "Best Budget Multi-Pack",
    "name": "Drupany 4-Pack Inline Filter With Hose Protector",
    "price": "$29.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Gkmtp4oaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GX6FLYPM?tag=rvgearlab-20",
    "description": "The Drupany pack gives you four inline filters that combine KDF media with granular activated carbon, plus two flexible hose protectors, for about $30, which works out to roughly $7.50 per filter. Each is listed for up to 1,350 gallons or about three months, depending on water quality and use, and it reduces chlorine, taste, odor and sediment.\n\nCompared with the Camco four-pack above it, the Drupany is about $19 cheaper and adds two flexible hose protectors, which reduce hose strain and kinking at the spigot. Against the single Waterdrop above it, the Drupany costs about the same total but gives four filters instead of one, with a stated gallon capacity per filter. Installation needs no tools: attach it to a standard garden hose, an RV hose, a camper hookup or an outdoor water system.\n\nIt suits long-trip campers, owners of several vehicles and seasonal users who want a stock of replacement filters on hand at the lowest per-filter cost. It is the most economical way to keep fresh filters in the bay.",
    "specs": [
      "Four KDF and GAC inline filters",
      "Up to 1,350 gallons or 3 months each",
      "Includes two flexible hose protectors"
    ],
    "pros": [
      "Lowest cost per filter at about $7.50",
      "Two hose protectors included",
      "Stated 1,350 gallon capacity per filter",
      "Tool-free hose installation"
    ],
    "cons": [
      "No named certification in the main bullets",
      "Few details on the media beyond KDF and carbon"
    ],
    "bestFor": "Budget campers who want four filters and hose protectors for long trips"
  }
];

export const howWeEvaluated = [
  {
    "title": "What the filter is rated to do",
    "description": "We compared micron ratings from 20 micron to 0.01 micron and the stages involved, because sediment, taste and odor, and health-related contaminants need different media."
  },
  {
    "title": "Named certification",
    "description": "Only the FRIZZLIFE spells out NSF/ANSI 42 and 53, and the Waterdrop cites an NSF/ANSI certification without a specific number in the title. We credited named standards and noted where the claim is general."
  },
  {
    "title": "Capacity and replacement interval",
    "description": "Capacity ranges from a three-month life per disposable filter to an 80,000 gallon claim on the VEVOR. We compared stated gallons and months and ignored unsupported superlatives."
  },
  {
    "title": "Flow and pressure",
    "description": "A filter that chokes your shower is a bad filter. We looked at stated flow and pressure ranges, including the VEVOR's 3 gpm at 20 to 125 psi and the Caredear's 125 psi housing test."
  },
  {
    "title": "What is in the box and cost over time",
    "description": "Adapters, wrenches, spare O-rings, hose protectors and multi-packs change the true cost, so we compared the kits and calculated cost per filter where possible."
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
    "subheading": "By What You Want Removed",
    "intro": "Filters differ most in what they are rated to remove, so start with your concern.",
    "table": {
      "headers": [
        "Your concern",
        "Recommended pick",
        "Why it fits"
      ],
      "rows": [
        [
          "Lead and heavy metals with a named standard",
          "FRIZZLIFE MV99 NSF 42 and 53 Inline Filter",
          "Certified against NSF/ANSI 42 and 53 per the listing"
        ],
        [
          "The finest particle filtration",
          "Caredear 3-Stage 0.01 Micron Ultrafiltration System",
          "An ultrafiltration stage rated to 0.01 micron"
        ],
        [
          "Sediment and chlorine in a multi-stage system",
          "VEVOR 5-Micron 3-Stage RV Filter System",
          "Three cartridges at a 5 micron rating"
        ],
        [
          "Chlorine taste and odor on a season plan",
          "Camco TastePURE 20-Micron 4-Pack",
          "GAC with KDF and a 12-month supply"
        ],
        [
          "A single certified taste-and-odor filter",
          "Waterdrop RV Inline KDF Filter",
          "KDF and GAC with an NSF/ANSI certification claim"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "These six cost from about $28 to $150. This table uses the real prices on this page.",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick",
        "What you get"
      ],
      "rows": [
        [
          "Under $30",
          "Waterdrop RV Inline KDF Filter",
          "A single certified KDF and GAC filter for $27.99, or the Drupany four-pack at $29.98"
        ],
        [
          "About $49",
          "Camco TastePURE 20-Micron 4-Pack",
          "Four filters covering about a year for $48.88"
        ],
        [
          "About $61 to $72",
          "VEVOR 5-Micron 3-Stage RV Filter System",
          "Three cartridges and 3 gpm flow for $60.90, or the FRIZZLIFE at $71.99 with NSF 42 and 53"
        ],
        [
          "About $150",
          "Caredear 3-Stage 0.01 Micron Ultrafiltration System",
          "An ultrafiltration kit with adapters for $149.99"
        ]
      ]
    }
  },
  {
    "subheading": "Disposable Inline vs Housing System",
    "intro": "The main fork in this category is whether you want a simple throwaway filter or a system with replaceable cartridges.",
    "cards": [
      {
        "label": "Disposable inline filter",
        "text": "A sealed filter screws onto the hose, lasts about three months and is thrown away, which keeps cost and effort low but limits filtration to taste, odor and sediment. The Camco TastePURE, Waterdrop and Drupany fall in this group."
      },
      {
        "label": "Housing system with cartridges",
        "text": "A durable housing takes replaceable cartridges, can reach finer ratings and certified media, and costs more up front. The FRIZZLIFE MV99, Caredear and VEVOR fall in this group."
      }
    ],
    "note": "Choose a disposable inline filter for taste and simplicity, and a housing system when you care about finer filtration or named certification."
  },
  {
    "subheading": "By Capacity and Replacement Cost",
    "intro": "A second axis is how long a filter lasts and what it costs over a season.",
    "table": {
      "headers": [
        "Priority",
        "Recommended pick",
        "Reason"
      ],
      "rows": [
        [
          "Lowest cost per filter",
          "Drupany 4-Pack Inline Filter With Hose Protector",
          "About $7.50 per filter with two hose protectors"
        ],
        [
          "A full year of filters in one box",
          "Camco TastePURE 20-Micron 4-Pack",
          "About three months each across four filters"
        ],
        [
          "The largest stated capacity",
          "VEVOR 5-Micron 3-Stage RV Filter System",
          "Up to 80,000 gallons with three cartridges"
        ],
        [
          "Long service life from a single carbon block",
          "FRIZZLIFE MV99 NSF 42 and 53 Inline Filter",
          "Described as two to four times the life of typical hose filters"
        ],
        [
          "One filter to try first",
          "Waterdrop RV Inline KDF Filter",
          "Lasts about three months at about $28"
        ]
      ]
    }
  },
  {
    "subheading": "For Full-Time Living Specifically",
    "intro": "Full-timers drink and cook with campground water every day, so filtration needs more than a seasonal taste fix.",
    "cards": [
      {
        "label": "Look for",
        "text": "A named certification, a stated flow rate, a replaceable cartridge rather than a throwaway, and a kit that fits both 3/4 inch and 1 inch hookups, as the Caredear 3-Stage system includes."
      },
      {
        "label": "In this comparison",
        "text": "The Caredear 3-Stage 0.01 Micron Ultrafiltration System ships with adapters for both sizes, and the FRIZZLIFE MV99 names NSF/ANSI 42 and 53 certification."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "The jump from $30 to $150 buys finer filtration and a more complete kit, not simply a bigger name.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You live in the RV, drink the water or park at older sites. The Caredear 3-Stage 0.01 Micron Ultrafiltration System at $149.99 and the FRIZZLIFE MV99 at $71.99 add finer or certified filtration."
      },
      {
        "label": "Save if",
        "text": "You use the RV on weekends and mostly want better taste. The Drupany 4-Pack at $29.98 and the Waterdrop RV Inline KDF Filter at $27.99 cover that for little."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Micron rating and filtration stages",
    "explanation": "A micron is one millionth of a meter, and a lower rating means a filter stops smaller particles. A 20 micron filter removes grit and sand, a 5 micron filter catches finer silt, and a 0.5 or 0.01 micron stage reaches much smaller particles. Look for the number in the title or bullets and for the stages named, such as sediment, carbon and ultrafiltration, and match them to what you want removed."
  },
  {
    "criterion": "NSF/ANSI 42 versus 53",
    "explanation": "Standard 42 covers aesthetic effects such as chlorine taste and odor, while Standard 53 covers health effects such as lead. A filter that claims only the first will improve taste without addressing lead. Look for the number in the listing and who certified it, and treat a general claim of NSF certified as a prompt to check which standard applies."
  },
  {
    "criterion": "Capacity and replacement interval",
    "explanation": "Every filter clogs eventually, and a clogged filter chokes flow and can stop treating water. Disposable inline filters last about three months, and housing cartridges can be rated in thousands of gallons. Look for the life in months or gallons, and plan a replacement date rather than waiting for a trickle."
  },
  {
    "criterion": "Flow rate and pressure range",
    "explanation": "A fine filter can drop your pressure noticeably, which shows up as a weak shower. A stated flow such as 3 gpm and a working range such as 20 to 125 psi tell you the filter is designed for RV use. Look for these numbers, and place the filter where it does not strain a hose."
  },
  {
    "criterion": "Connections, adapters and fit",
    "explanation": "Most RV hookups use 3/4 inch garden hose thread, while some marina and park fittings are 1 inch. A filter without the right adapter sits in the box. Look for the kit contents, such as 1 inch to 3/4 inch adapters, wrenches and O-rings, and check that the housing can stand upright without pulling on the hose."
  },
  {
    "criterion": "Cost over a season",
    "explanation": "The sticker price hides what you will spend on cartridges. A $28 single filter is about $9 per month, a four-pack at $12 each is roughly $4 per month, and a certified cartridge system has its own refill cost. Add up the price of a year of filters, not just the first box."
  }
];

export const faq = [
  {
    "q": "What does a portable RV water filter remove?",
    "a": "Most hose-connect filters reduce sediment, chlorine, odor and bad taste, and a few add certified reduction of lead and heavy metals. The FRIZZLIFE names NSF/ANSI 42 and 53, while the Camco and Drupany packs are aimed at taste and sediment. Read the listing for the specific claims."
  },
  {
    "q": "Do I need a filter if the campground says the water is safe?",
    "a": "A filter does not replace a safe source, but it improves taste and catches sediment from old pipes and hoses. If you want specific contaminant reduction, choose a certified filter and check which standard it names."
  },
  {
    "q": "What is the most common mistake with RV water filters?",
    "a": "Leaving a disposable filter on too long. Past its life, it clogs, cuts flow and can stop working. Mark the install date, replace around the three-month mark or sooner if flow drops, and keep a spare in the bay."
  },
  {
    "q": "Is a finer 0.01 micron filter always better?",
    "a": "Not always. A finer filter costs more, can restrict flow and clogs sooner on silty water. The Caredear suits owners who want ultrafiltration and a full kit, while a 5 micron or 20 micron filter is enough for sediment and taste."
  },
  {
    "q": "Where do I put the filter in my hose setup?",
    "a": "Many owners connect the filter to the spigot or after the pressure regulator, then run the hose to the RV inlet. Check the manufacturer's instructions for the order your filter requires, and keep it supported so it does not pull on the hose."
  },
  {
    "q": "How should I store a filter between trips?",
    "a": "Drain a housing system, store it dry in a bay and keep a fresh cartridge handy. For a disposable filter, remove it at the end of the season and replace it at the next, since a filter that sat wet for months can grow odors."
  }
];

export const bottomLine = "For most RVers who want more than a taste fix, the FRIZZLIFE MV99 is the best overall hose filter, with a named NSF/ANSI 42 and 53 certification and a fine 0.5 micron carbon block at a moderate price. The Caredear is the premium ultrafiltration kit, the VEVOR is the multi-cartridge value, the Camco and Drupany packs are the economical season-long choices and the Waterdrop is a simple certified single filter. Match the filter to what you want removed, check the standard it names and plan your replacement schedule.";

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best RV Water Filter",
    "href": "/water-plumbing/best-rv-water-filter"
  },
  {
    "title": "Best RV Water Filter System",
    "href": "/water-plumbing/best-rv-water-filter-system"
  },
  {
    "title": "Best Inline RV Water Filter",
    "href": "/water-plumbing/best-inline-rv-water-filter"
  },
  {
    "title": "Best 2 Stage RV Water Filter",
    "href": "/water-plumbing/best-2-stage-rv-water-filter"
  }
];
