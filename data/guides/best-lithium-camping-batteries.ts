export const guideSlug = "best-lithium-camping-batteries";
export const guideTitle = "5 Best Lithium Camping Batteries in 2026";
export const metaTitle = "Best Lithium Camping Batteries in 2026";
export const metaDescription = "Best lithium camping batteries compared: AA and AAA lithium cells for headlamps, lanterns and cold-weather gear, with shelf life and temperature range.";
export const mainKeyword = "best lithium camping batteries";
export const introParagraphs = [
  "Lithium AA and AAA cells earn a place in the camping kit because they keep their voltage in the cold and hold charge for years in a drawer. They are single-use cells, so the choice is about capacity, temperature range and how many you need per trip.",
  "Five lithium lines are compared here, from the Energizer AAA 24 pack to AA multipacks and a small 4-count AA pack. The two Energizer AAA listings in the batch are one product in different pack sizes, so they are counted as a single pick."
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
    "id": "best-lithium-camping-batteries-1",
    "rank": 1,
    "badge": "Best Brand Reliability",
    "name": "Energizer Ultimate Lithium AAA Batteries",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41y9spCjVPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07R69Y9Y6?tag=rvgearlab-20",
    "description": "The Energizer Ultimate Lithium AAA comes in a 24-pack and, per the listing, works from -40 to 140 degrees F. The cells are leak proof based on standard use and store for up to 25 years.\n\nIt is the only AAA option here, which makes it the answer for small headlamps and compact flashlights that take triple-A cells. A smaller 8-pack of the same cell exists for lighter users, while the AA lines in this list suit lanterns and larger flashlights.\n\nIt suits campers with AAA headlamps who want cells that keep working in a freezing tent. The 24-pack covers a season of trips without a restock.",
    "specs": [
      "AAA lithium, 24 pack",
      "-40 to 140 degrees F range",
      "25-year storage life"
    ],
    "pros": [
      "Only AAA pick for small headlamps",
      "Works down to -40 degrees F",
      "Leak proof with standard use",
      "25-year storage life"
    ],
    "cons": [
      "Costs the most per pack",
      "Not rechargeable"
    ],
    "bestFor": "AAA headlamps in cold",
    "take": "The AAA pick for small headlamps, and the one with the clearest cold rating.",
    "catch": "A 24-pack is a big spend for one trip, so pick the smaller pack if you only need a few."
  },
  {
    "id": "best-lithium-camping-batteries-2",
    "rank": 2,
    "badge": "Best AA Capacity",
    "name": "EBL Lithium AA Batteries 12 Pack",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41icSPG0FeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FWCN6M21?tag=rvgearlab-20",
    "description": "The EBL Super III lists 3,700mAh per AA cell in a 12-pack, with a rated range of -68 to 140 degrees F. The listing says it lasts seven times longer than alkaline and stores for 25 years.\n\nIt states the widest temperature range and the highest capacity of the AA packs, ahead of Enegitech at 3,000mAh and xuniuzero at 3,200mAh. It costs less than the 24-packs because it comes in a smaller count.\n\nIt suits winter campers running headlamps and lanterns that take AA cells. Twelve cells cover several devices through a long trip.",
    "specs": [
      "3,700mAh AA, 12 pack",
      "-68 to 140 degrees F",
      "25-year shelf life"
    ],
    "pros": [
      "Highest listed AA capacity",
      "Widest temperature range stated",
      "12-pack covers several devices",
      "25-year shelf life"
    ],
    "cons": [
      "Single-use only, no recharge",
      "Capacity claims come from the maker"
    ],
    "bestFor": "Winter AA devices",
    "take": "Highest listed capacity and the coldest rating among the AA picks.",
    "catch": "Capacity is the maker's listed figure, not a test result."
  },
  {
    "id": "best-lithium-camping-batteries-3",
    "rank": 3,
    "badge": "Best Bulk AA",
    "name": "BEVIGOR 1.5V Long-Lasting Lithium Batteries AA 24 Pack",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411UiDOAupL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09VGPLX7W?tag=rvgearlab-20",
    "description": "The BEVIGOR is a 24-pack of 1.5V lithium AA cells with a listed 20-year shelf life and less than 1% yearly self-discharge. The cells work from -40 to 140 degrees F and carry leak-proof, explosion-proof valve and short-circuit protection.\n\nIt gives the largest count of AA cells here, double the EBL's 12, and the listing says the voltage holds steady until nearly the end. Compared with Enegitech it has no stated mAh, while it offers more cells per pack.\n\nIt suits families and groups that go through AA cells in lanterns, radios and flashlights over a season. The three-layer protection suits devices that cost more than the batteries.",
    "specs": [
      "24 pack, 1.5V lithium AA",
      "-40 to 140 degrees F",
      "20-year shelf life"
    ],
    "pros": [
      "24 cells cover a season",
      "Steady 1.5V holds near end",
      "Under 1% yearly self-discharge",
      "Three-layer protection design"
    ],
    "cons": [
      "No mAh capacity stated",
      "Single-use only"
    ],
    "bestFor": "Season-long AA supply",
    "take": "A big bulk pack for groups that burn through AA cells.",
    "catch": "The listing gives no capacity number, so compare it by cell count and shelf life."
  },
  {
    "id": "best-lithium-camping-batteries-4",
    "rank": 4,
    "badge": "Best Mid-Range AA",
    "name": "Enegitech AA Lithium Battery",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51kK-KEUyZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B076MNQ16C?tag=rvgearlab-20",
    "description": "The Enegitech lists 3,000mAh per AA cell, 1.5V, with a 10-year shelf life and a -40 to 140 degrees F range. The listing calls the cells leak proof based on standard use and warns not to recharge them.\n\nIts shelf life is the shortest of the group, behind the 20 to 25 years of the BEVIGOR and EBL. It states a capacity figure that the BEVIGOR does not.\n\nIt suits trail cameras and cold-weather devices that use AA cells and do not need long storage. It is a sensible middle price between the small packs and the bulk packs.",
    "specs": [
      "3,000mAh 1.5V AA",
      "10-year shelf life",
      "-40 to 140 degrees F range"
    ],
    "pros": [
      "States a 3,000mAh capacity",
      "Rated down to -40 degrees F",
      "Leak proof with standard use",
      "Good for trail cameras"
    ],
    "cons": [
      "Shortest shelf life here",
      "Pack count is not obvious in the title"
    ],
    "bestFor": "Trail cameras, devices",
    "take": "A middle option for AA devices used within a few seasons.",
    "catch": "Ten years of storage is plenty for trips but shorter than the other AA picks."
  },
  {
    "id": "best-lithium-camping-batteries-5",
    "rank": 5,
    "badge": "Best Small Pack",
    "name": "Lithium AA Batteries 4 Count",
    "price": "$6.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51CWGy-w5hL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H5VGT3NF?tag=rvgearlab-20",
    "description": "The xuniuzero is a 4-count AA lithium pack at 3,200mAh each, 1.5V, with a 20-year shelf life and under 1% yearly self-discharge. The listing names an explosion-proof valve, anti-short-circuit valve and airtight seal.\n\nIt is the cheapest way to try lithium AA cells, with a higher listed capacity than Enegitech at 3,000mAh. Four cells only fill one or two devices, so it sits below the EBL for coverage.\n\nIt suits a single headlamp or a flashlight that needs a fresh set before a trip. It also works as a spare set in a pack.",
    "specs": [
      "4 count, 3,200mAh AA",
      "20-year shelf life",
      "Under 1% self-discharge"
    ],
    "pros": [
      "Lowest price in the group",
      "3,200mAh listed capacity",
      "Safety valve and airtight seal",
      "20-year shelf life"
    ],
    "cons": [
      "Only four cells per pack",
      "Brand is less established"
    ],
    "bestFor": "Single-device spare set",
    "take": "A low-cost way to try lithium cells or carry a spare set.",
    "catch": "Four cells run out fast in a lantern that needs more."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity and chemistry",
    "description": "The listed mAh, cell type and voltage were compared for how long they run common camp devices."
  },
  {
    "title": "Cold performance",
    "description": "We compared the stated temperature range of each pack against cold-weather camp use."
  },
  {
    "title": "Shelf life",
    "description": "The storage life each listing names was weighed for gear that sits in a drawer between trips."
  },
  {
    "title": "Pack size",
    "description": "Cell count and AA versus AAA fit were matched to headlamp, lantern and trail-camera use."
  },
  {
    "title": "Value",
    "description": "Cost per cell was compared across the five lines."
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
    "subheading": "By Device",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Small AAA headlamp, winter camping",
          "Energizer Ultimate AAA",
          "The only AAA pick, rated to -40 degrees F."
        ],
        [
          "Winter headlamp or lantern using AA",
          "EBL Super III AA",
          "Highest listed capacity and the widest cold range."
        ],
        [
          "Family camp with many AA devices",
          "BEVIGOR AA 24",
          "Biggest AA count in one pack."
        ],
        [
          "One-off spare set for a headlamp",
          "xuniuzero AA 4-Pack",
          "A small, low-priced pack of four."
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
          "xuniuzero AA 4-Pack or EBL Super III AA"
        ],
        [
          "$20 to $30",
          "Enegitech AA 3000mAh or BEVIGOR AA 24"
        ],
        [
          "$30 to $40",
          "Energizer Ultimate AAA"
        ]
      ]
    }
  },
  {
    "subheading": "Lithium vs Alkaline",
    "cards": [
      {
        "label": "Lithium",
        "text": "Lithium cells like the EBL Super III AA, BEVIGOR AA 24 and Energizer Ultimate AAA keep voltage in the cold and store for 20 or more years, at a higher price per cell."
      },
      {
        "label": "Alkaline",
        "text": "Alkaline cells are cheaper per cell but lose capacity in freezing temperatures and leak more easily. They suit a warm weekend trip, while a winter trek calls for the EBL Super III AA or similar."
      }
    ],
    "note": "Most campers who camp in cold should keep the EBL Super III AA or Energizer Ultimate AAA in the kit."
  },
  {
    "subheading": "By Pack Size",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Biggest bulk supply",
          "BEVIGOR AA 24"
        ],
        [
          "Moderate set of 12",
          "EBL Super III AA"
        ],
        [
          "Smallest trial set",
          "xuniuzero AA 4-Pack"
        ],
        [
          "Best AAA bulk",
          "Energizer Ultimate AAA"
        ]
      ]
    }
  },
  {
    "subheading": "For Winter Headlamps Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A low temperature rating of -40 degrees F or below and the correct cell size for the lamp."
      },
      {
        "label": "In this comparison",
        "text": "The Energizer Ultimate AAA suits AAA lamps and the EBL Super III AA covers AA lamps with the coldest listed range."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Energizer Ultimate AAA or EBL Super III AA if you camp in freezing weather and rely on a headlamp for safety. The listed cold range and long shelf life make them the dependable pair."
      },
      {
        "label": "Save if",
        "text": "Save with the xuniuzero AA 4-Pack or Enegitech AA 3000mAh if you only need a set for fall weekends. They cover short trips at a lower price per pack."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "AA versus AAA fit",
    "explanation": "Cell size is fixed by the device, not by preference: a headlamp that takes AAA will not use AA cells. AAA cells hold less energy than AA, so tiny lights run shorter than the lantern you carried before. Check the battery door or manual before buying a bulk pack."
  },
  {
    "criterion": "Cold temperature rating",
    "explanation": "Alkaline cells lose a lot of capacity near freezing, while lithium cells keep working far colder. Listings name a range, such as -40 to 140 degrees F, and that range is the maker's own claim. Look for the exact low temperature if you camp in winter."
  },
  {
    "criterion": "Capacity claims",
    "explanation": "A listing's mAh figure is a maker's number, and some listings give none at all. Capacity matters most for high-drain devices like bright headlamps. Compare mAh only between cells that state it, and otherwise rely on shelf life and cell count."
  },
  {
    "criterion": "Shelf life and discharge",
    "explanation": "Lithium cells lose under 1% a year when stored, which is why they suit emergency kits. A 20 to 25 year listed life lets a pack sit in the camping bin all winter. Check the storage claim on the listing before stocking up."
  },
  {
    "criterion": "Single-use disposal",
    "explanation": "These cells are not rechargeable, and attempting to charge them is unsafe. Spent lithium cells should go to a battery collection point, not the trash. Tape the terminals of used cells before bringing them out of the backcountry."
  }
];

export const faq = [
  {
    "q": "Are lithium AA batteries safe to carry on a plane?",
    "a": "Spare lithium metal batteries are generally allowed in carry-on luggage, with terminals protected. Airline rules can change, so check the carrier before flying. Keep them in their original pack or a case."
  },
  {
    "q": "Can I recharge these lithium batteries?",
    "a": "No, these are single-use cells and the listings say not to charge them. Charging a non-rechargeable cell can make it leak or overheat. Use rechargeable NiMH cells in a smart charger if you want a reusable option."
  },
  {
    "q": "Are lithium batteries worth it over alkaline for camping?",
    "a": "They cost more per cell, but they hold voltage in the cold and weigh less. For a headlamp that you rely on at night, the extra cost is small insurance. For a flashlight used a few times a year, alkaline may be enough."
  },
  {
    "q": "How do I keep lithium cells for the long term?",
    "a": "Store them in their original packaging in a cool, dry place away from metal objects. The shelf life numbers apply to unopened packs. Mark the purchase date on the pack so you use the oldest set first."
  },
  {
    "q": "Can AA lithium cells replace AAA?",
    "a": "No, they are different sizes and will not fit a AAA device. Adapters exist but are not part of any listing here. Buy the cell size printed on your headlamp's battery door."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Portable Solar Panels",
    "href": "/camp-power/best-portable-solar-panels"
  },
  {
    "title": "Best Power Station",
    "href": "/camp-power/best-power-station"
  },
  {
    "title": "Best Solar Power Bank",
    "href": "/camp-power/best-solar-power-bank"
  },
  {
    "title": "Best Portable Solar Panels For Home",
    "href": "/camp-power/best-portable-solar-panels-for-home"
  }
];
