export const guideSlug = "best-agm-rv-battery";
export const guideTitle = "6 Best AGM RV Batteries in 2026";
export const metaTitle = "Best AGM RV Batteries in 2026";
export const metaDescription = "We compared 12V AGM RV batteries from 90Ah to 200Ah by usable capacity, size, cold weather behavior, and dual-purpose ability for house and starting use.";
export const mainKeyword = "best agm rv battery";
export const introParagraphs = [
  "AGM batteries remain the easy upgrade for RVers who want sealed, spill-proof power without switching to lithium. They need no watering, tolerate freezing nights better than LiFePO4 when charging, and work with nearly every stock RV converter, which is why many rigs still ship with them.",
  "This roundup compares 12V AGM batteries from Renogy, Interstate, Weize, and Mighty Max, covering pure deep cycle house batteries and dual-purpose units that can also crank an engine. We evaluated rated capacity, physical group size, published temperature ranges, warranty length, and buyer feedback, keeping in mind that you should only use about half of an AGM's rated amp-hours if you want it to last."
];
export const lastUpdated = "2026-10-01";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31hWBJ9YLXL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-agm-rv-battery-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Renogy 12V 200Ah Deep Cycle AGM Battery",
    "price": "$296.30",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31hWBJ9YLXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075RGX1WR?tag=rvgearlab-amz-20",
    "description": "Renogy's 200Ah AGM puts the capacity of two 100Ah batteries into a single sealed case. Renogy publishes a full capacity table, from 152.9Ah at the 3-hour rate up to 200Ah at the 20-hour rate, and quotes monthly self-discharge below 3% at 77F.\n\nIt ranks above the Interstate group 31 because it doubles the energy in one battery for roughly the same price as a single premium 100Ah unit, which makes it the best value per amp-hour among our sealed house batteries. The tradeoff is physical: it is far larger and heavier than a group 31, so it will not fit a typical tongue box.\n\nBest for Class A and fifth-wheel owners with a basement battery bay who want maximum sealed capacity. The caveat is installation: Renogy recommends mounting it upright, and you will want a helper to lift it.",
    "specs": [
      "12V 200Ah at C20",
      "Under 3% monthly self-discharge",
      "Rated for use below 32F"
    ],
    "pros": [
      "200Ah in one case means fewer interconnects",
      "Published C3 to C20 capacity ratings",
      "Self-discharge under 3% suits stored rigs",
      "Discharges well in freezing temperatures"
    ],
    "cons": [
      "Very heavy for a single battery",
      "Should not be installed upside down",
      "Larger than most group 27 or 31 trays"
    ],
    "bestFor": "Motorhomes with a large bay wanting one big sealed battery"
  },
  {
    "id": "best-agm-rv-battery-2",
    "rank": 2,
    "badge": "Best Dual Purpose",
    "name": "Interstate 31-AGM5 12V 100Ah Group 31 AGM Marine/RV Battery",
    "price": "$284.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31zt+XjvDCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BHX3FBCQ?tag=rvgearlab-amz-20",
    "description": "Interstate's 31-AGM5 is a pure lead AGM in group 31 size, rated 100Ah with 925 cold cranking amps and 1110 cranking amps. Interstate claims around three times the service life of conventional flooded batteries and twice that of alloyed lead AGM.\n\nIt sits second because it does two jobs well: deep cycling for house loads and enough cranking power to start an engine. Against the Renogy 200Ah above, it stores half the energy for a similar price, but fits a common group 31 tray and can double as a chassis battery.\n\nBest for Class B and C motorhome owners who want one premium battery that can handle either role. The caveat is value for pure house use: if you never need cranking power, the Renogy or Weize AGMs give more amp-hours per dollar.",
    "specs": [
      "12V 100Ah, group 31",
      "925 CCA, 1110 CA",
      "Pure lead AGM"
    ],
    "pros": [
      "Pure lead plates for long deep-cycle life",
      "925 CCA can start a motorhome engine",
      "Standard group 31 size fits many trays",
      "Retail network for warranty and recycling"
    ],
    "cons": [
      "Pricier per amp-hour than the Renogy 200Ah",
      "Marketing is focused on boats rather than RVs"
    ],
    "bestFor": "Motorhomes needing one battery for starting and house loads"
  },
  {
    "id": "best-agm-rv-battery-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "Weize 12V 100Ah Deep Cycle AGM Battery",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bqV6Wt2oL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07SW353M8?tag=rvgearlab-amz-20",
    "description": "Weize's 100Ah AGM is a straightforward sealed deep cycle battery measuring 12.99 x 6.73 x 8.43 inches. It lists a charging range of 14F to 122F and a discharging range of 5F to 122F, plus a 1100A five-second maximum discharge.\n\nIt undercuts the Interstate above by a wide margin on price for the same 100Ah rating, though it lacks pure lead plates and cranking ratings. Against the Mighty Max below, it is cheaper and lighter in specification, but its warranty is one year versus two.\n\nBest for weekend trailer owners who want a sealed upgrade from a worn stock battery without spending much. The caveat is warranty: one year is short, and Amazon does not process battery returns, so you will deal directly with Weize.",
    "specs": [
      "12V 100Ah, 12.99 x 6.73 x 8.43 in",
      "Charges from 14F to 122F",
      "1100A 5-second max discharge"
    ],
    "pros": [
      "Lowest price per amp-hour among single 100Ah picks",
      "Published charging range down to 14F",
      "Self-discharge of 1 to 3% per month",
      "Compact enough for most group 31 trays"
    ],
    "cons": [
      "Only a one year warranty",
      "Returns go through the seller, not Amazon"
    ],
    "bestFor": "Budget-minded campers replacing a stock 12V battery"
  },
  {
    "id": "best-agm-rv-battery-4",
    "rank": 4,
    "badge": "Best Group 31 Capacity",
    "name": "Mighty Max MM-G31M 12V 110Ah Group 31M Dual Purpose AGM",
    "price": "$249.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41AQrCOTTqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7LQ87LG?tag=rvgearlab-amz-20",
    "description": "The MM-G31M squeezes 110Ah into a group 31M case measuring 13.00 x 6.81 x 8.35 inches, with 825 CCA and 240 minutes of reserve capacity. Mighty Max publishes up to 700 cycles at 50% depth of discharge and backs it with a two-year warranty.\n\nIt ranks behind the Weize because it costs more, but it offers 10Ah more capacity, a real cycle-life figure, and double the warranty. Compared with the Interstate group 31, it gives more amp-hours for less money, while Interstate wins on pure lead construction and retail support.\n\nBest for travel trailer owners with a group 31 box who want the most sealed capacity without changing trays. The caveat is weight: at about 70.7 pounds, lifting it into a tongue box is a two-person job.",
    "specs": [
      "12V 110Ah, group 31M",
      "825 CCA, 240 RC",
      "Up to 700 cycles at 50% DoD"
    ],
    "pros": [
      "110Ah is the most capacity in a group 31 here",
      "Published 700 cycles at 50% depth of discharge",
      "Backed by a two-year limited warranty",
      "Rugged ABS case resists heat and impact"
    ],
    "cons": [
      "70.7 lbs is heavy to lift into a tray",
      "Reserve and cranking specs aimed at boats"
    ],
    "bestFor": "Owners who want extra amp-hours in a standard group 31 tray"
  },
  {
    "id": "best-agm-rv-battery-5",
    "rank": 5,
    "badge": "Best Two Battery Bank",
    "name": "Renogy 12V 100Ah Deep Cycle AGM Battery (2 Pack)",
    "price": "$369.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31xlvdaK8VL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C9LYT6NQ?tag=rvgearlab-amz-20",
    "description": "This Renogy two-pack gives you a matched pair of 12V 100Ah AGM batteries, which is the safest way to build a parallel bank since both start with identical age and chemistry. Renogy rates discharge performance from -4F to 140F and covers both batteries with a two-year warranty.\n\nIt ranks below the single Renogy 200Ah because it costs more for the same total capacity and needs extra cabling. The upside versus the single battery is handling: each 100Ah unit is much lighter to install, and the pair fits the dual tray many trailers already have.\n\nBest for travel trailers with two side-by-side battery trays. The caveat is wiring: use equal length cables and connect loads diagonally across the bank so both batteries share the load evenly.",
    "specs": [
      "Two 12V 100Ah batteries",
      "Rated -4F to 140F discharge",
      "2-year warranty"
    ],
    "pros": [
      "Matched pair for a 200Ah parallel bank",
      "Published discharge range from -4F to 140F",
      "Two-year materials and workmanship warranty",
      "Two smaller batteries are easier to lift"
    ],
    "cons": [
      "Costs more than the single Renogy 200Ah",
      "Needs space and cables for two batteries"
    ],
    "bestFor": "Trailers with dual group 31 trays wanting a matched sealed bank"
  },
  {
    "id": "best-agm-rv-battery-6",
    "rank": 6,
    "badge": "Best Compact",
    "name": "Weize Group 24M Dual Purpose AGM Battery, 12V 90Ah, 550 CCA",
    "price": "$189.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fj1LvTddL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRQSKG3G?tag=rvgearlab-amz-20",
    "description": "Weize's group 24M is a 90Ah dual purpose AGM with 550 CCA and 150 minutes of reserve capacity. Weize recommends charging at 14.4V with up to 15.8A, and backs this model with a two-year warranty.\n\nIt ranks last on capacity, but it is the only pick that fits a group 24 box, which is common on smaller travel trailers and pop-ups. Compared with the Weize 100Ah above, it gives up 10Ah but adds cranking ability and a longer warranty in a smaller case.\n\nBest for owners of compact trailers who cannot fit a group 31. The caveat is runtime: at 90Ah, plan on about 45Ah of usable energy, which is enough for lights and a water pump but not long furnace use.",
    "specs": [
      "12V 90Ah, group 24M",
      "550 CCA, 150 RC",
      "2-year warranty"
    ],
    "pros": [
      "Group 24 size fits smaller trailer trays",
      "Dual purpose for starting and house loads",
      "2-year warranty, double Weize's 100Ah model",
      "Charges up to five times faster than flooded"
    ],
    "cons": [
      "Least capacity among the picks",
      "Needs a 14.4V charge setting for best results"
    ],
    "bestFor": "Small trailers and pop-ups with a group 24 battery box"
  }
];

export const howWeEvaluated = [
  {
    "title": "Rated Capacity at the 20-Hour Rate",
    "description": "We compared amp-hour ratings at the standard 20-hour rate and noted when makers also published faster-rate capacities, which are more realistic for inverter loads."
  },
  {
    "title": "Group Size and Weight",
    "description": "We matched each battery to common RV tray sizes (24, 31, and larger) and noted weights, since AGM batteries of similar capacity can differ by 10 pounds or more."
  },
  {
    "title": "Temperature Behavior",
    "description": "We checked published charge and discharge temperature ranges, because cold weather capacity is one of AGM's main advantages over lithium."
  },
  {
    "title": "Dual Purpose vs Deep Cycle",
    "description": "We separated batteries with cranking ratings from pure deep cycle models so you can match the battery to its job."
  },
  {
    "title": "Warranty Length",
    "description": "We compared warranty terms, which range from one to two years here and signal how confident the maker is in cycle life."
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
    "subheading": "By Battery Tray Size",
    "table": {
      "headers": [
        "Tray or bay",
        "Recommended pick"
      ],
      "rows": [
        [
          "Group 24 box on a small trailer",
          "Weize Group 24M"
        ],
        [
          "Single group 31 tray",
          "Mighty Max MM-G31M"
        ],
        [
          "Two group 31 trays",
          "Renogy 100Ah AGM 2 Pack"
        ],
        [
          "Large basement bay",
          "Renogy 200Ah AGM"
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
          "Under $180",
          "Weize 100Ah AGM"
        ],
        [
          "$180 to $250",
          "Weize Group 24M or Mighty Max MM-G31M"
        ],
        [
          "$250 to $300",
          "Renogy 200Ah AGM or Interstate 31-AGM5"
        ],
        [
          "About $370",
          "Renogy 100Ah AGM 2 Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Deep Cycle vs Dual Purpose",
    "cards": [
      {
        "label": "Pure deep cycle",
        "text": "Thicker plates designed for long, slow discharges like running lights and a furnace overnight. No meaningful cranking rating. In this roundup: Renogy 200Ah AGM, Weize 100Ah AGM, Renogy 100Ah AGM 2 Pack."
      },
      {
        "label": "Dual purpose",
        "text": "Plates balanced between short high-current bursts for engine starting and moderate deep cycling. Useful where one battery does both jobs. In this roundup: Interstate 31-AGM5, Mighty Max MM-G31M, Weize Group 24M."
      }
    ],
    "note": "Trailer owners should default to pure deep cycle; choose dual purpose only if the battery may also start an engine or generator."
  },
  {
    "subheading": "By Climate",
    "table": {
      "headers": [
        "Where you camp",
        "Recommended pick"
      ],
      "rows": [
        [
          "Below freezing nights often",
          "Renogy 100Ah AGM 2 Pack (rated to -4F)"
        ],
        [
          "Cold mornings, needs to charge cold",
          "Weize 100Ah AGM (charges from 14F)"
        ],
        [
          "Mostly mild weather",
          "Renogy 200Ah AGM"
        ],
        [
          "Cold starts for a motorhome engine",
          "Interstate 31-AGM5 (925 CCA)"
        ]
      ]
    }
  },
  {
    "subheading": "For Long-Term Storage Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A published monthly self-discharge rate of 3% or less, so the battery holds charge through months of storage without a maintainer."
      },
      {
        "label": "In this comparison",
        "text": "The Renogy 200Ah AGM lists self-discharge below 3% per month at 77F, so a rig parked for a season will still have usable charge, though a maintainer is still smart."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Your motorhome needs one battery that can crank the engine and run house loads, which justifies the Interstate 31-AGM5's pure lead plates."
      },
      {
        "label": "Save if",
        "text": "You only need a sealed house battery for weekend trips, where the Weize 100Ah AGM does the job for much less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Plan for 50% Usable Capacity",
    "explanation": "AGM batteries are lead acid, and regularly draining them below about half charge sharply shortens their life. A 100Ah AGM therefore delivers about 50Ah in daily use, while a 200Ah gives about 100Ah. When comparing listings, halve the rated amp-hours to estimate how long your loads will really run."
  },
  {
    "criterion": "Match the Group Size",
    "explanation": "BCI group size describes the case footprint, and RV trays are usually sized for group 24, 27, or 31. A battery that is even half an inch too long will not fit under the hold-down strap. Check the listed length, width, and height against your tray before buying, and do not assume all 100Ah batteries are the same size."
  },
  {
    "criterion": "Deep Cycle vs Dual Purpose Plates",
    "explanation": "Dual purpose batteries list CCA and MCA because they are built to start engines as well as cycle. Pure deep cycle batteries usually skip those ratings and focus on cycle life. If the battery will only power your trailer, prioritize a published cycle count or reserve capacity over CCA."
  },
  {
    "criterion": "Charging Voltage and Converter Settings",
    "explanation": "AGM batteries generally want an absorption charge around 14.4V; many older RV converters stop near 13.6V and never fully charge them. Chronic undercharging slowly sulfates the plates and reduces capacity. Look for a recommended charge voltage in the listing and compare it with your converter's spec, or plan to upgrade to a converter with an AGM setting."
  },
  {
    "criterion": "Cold Weather Ratings",
    "explanation": "Unlike lithium, AGM can usually be charged below freezing, which is a real advantage for winter campers. Ranges vary, though, so a battery rated to charge at 14F is better suited to frosty nights than one with no published range. Look for separate charge and discharge temperature ranges in the specs."
  },
  {
    "criterion": "Weight and Installation",
    "explanation": "A 100Ah AGM typically weighs around 60 to 70 pounds, and a 200Ah can be much heavier. That weight counts against your trailer's tongue weight and makes installation harder. Check the listed weight and consider two smaller batteries if lifting one large one is not practical."
  }
];

export const faq = [
  {
    "q": "Can I use an AGM battery with my stock RV converter?",
    "a": "Usually yes, since AGM is lead acid and most converters charge it adequately. However, many older converters charge at a lower voltage than AGM prefers, so the battery may never reach full charge. If your converter has a selectable profile, set it to AGM; if not, consider a converter upgrade."
  },
  {
    "q": "What mistake shortens AGM battery life the most?",
    "a": "Repeatedly running it nearly flat. Discharging below about 50% regularly, or leaving it discharged for days, causes sulfation that permanently reduces capacity. Recharge promptly after each trip and use a battery monitor to watch state of charge."
  },
  {
    "q": "Is AGM worth it over flooded lead acid?",
    "a": "For most RVers, yes, if you value no maintenance and no venting. AGM costs more per amp-hour but needs no watering and can be mounted in enclosed spaces. Flooded batteries remain cheaper and tolerant, but only if you will check water levels regularly."
  },
  {
    "q": "How do I connect two AGM batteries in parallel?",
    "a": "Connect positive to positive and negative to negative using equal length heavy gauge cables. Take the RV's main positive from one battery and the main negative from the other, so both share the load evenly. Always use two identical batteries of the same age, like the Renogy two-pack."
  },
  {
    "q": "Is AGM or lithium better for an RV?",
    "a": "Lithium offers far more usable capacity, lighter weight, and longer life, but costs more and needs heating or protection to charge below freezing. AGM is cheaper upfront, works with almost any converter, and handles cold charging better. If you camp mostly at hookups or in winter, AGM still makes sense."
  },
  {
    "q": "How should I store an AGM battery over winter?",
    "a": "Charge it fully, disconnect it or switch off the battery disconnect, and keep it somewhere it will not get extremely hot. With low self-discharge, a quality AGM can sit for months, but topping it up every two to three months, or using a maintainer, keeps it healthy."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best 6 Volt RV Battery in 2026",
    "href": "/power-electrical/best-6-volt-rv-battery"
  },
  {
    "title": "Best Deep Cycle RV Battery in 2026",
    "href": "/power-electrical/best-deep-cycle-rv-battery"
  },
  {
    "title": "Best RV Battery For The Money in 2026",
    "href": "/power-electrical/best-rv-battery-for-the-money"
  }
];
