export const guideSlug = "best-collapsible-water-containers";
export const guideTitle = "5 Best Collapsible Water Containers in 2026";
export const metaTitle = "Best Collapsible Water Containers in 2026";
export const metaDescription = "Best collapsible water containers compared on capacity, spigot and handle design, pack count and price per jug for camping, RV trips and home emergency use.";
export const mainKeyword = "best collapsible water containers";
export const introParagraphs = [
  "A collapsible water container is the cheapest way to carry a day of water to a campsite, then fold it flat for the drive home. The real differences are capacity, how the spigot seals, and how many jugs come in the box.",
  "These five span 2 gallon to 5.3 gallon jugs and two-packs to four-packs. Capacity is listed in each product title, and the choice mostly comes down to how many people you camp with and how much you carry."
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
    "id": "best-collapsible-water-containers-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "WMXWAN 4 Pack 5.3Gal Collapsible Water Containers with Spigot",
    "price": "$28.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bp4r+VewL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FRYBCJGK?tag=rvgearlab-20",
    "description": "The WMXWAN is a set of four 5.3 gallon containers made of LDPE4 plastic that is BPA-free, with dual handles for easier carrying. Each has a heavy-duty PP spigot with ON/OFF control, a wide cap that fits most faucets and a one-piece molded outlet that the listing says leaves no leaking points.\n\nIt works out to the lowest cost per 5.3 gallon container of the three large packs, and the dual handles are not described on the ITRAZ or Gowithwind jugs. The listing also says it can hold dry goods such as beans, flour, rice or coffee.\n\nIt suits families, groups and RV travelers who want several large jugs at a low cost per jug. The dual handles help when you carry a full one.",
    "specs": [
      "Four 5.3 gal containers",
      "Dual handles, LDPE4",
      "PP spigot with ON/OFF"
    ],
    "pros": [
      "Lowest cost per large jug",
      "Dual handles for easier carrying",
      "Wide cap fits most faucets",
      "One-piece molded outlet"
    ],
    "cons": [
      "Four jugs take space to store",
      "No air vent described"
    ],
    "bestFor": "Large groups and RV trips",
    "take": "The best-value large pack, with dual handles on every jug.",
    "catch": "Four full jugs weigh about 44 lb each, so fill them partway for easy lifting."
  },
  {
    "id": "best-collapsible-water-containers-2",
    "rank": 2,
    "badge": "Best Pour",
    "name": "ITRAZ BPA-Free Collapsible Water Container with Spigot",
    "price": "$42.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41C0WtXGpEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B1LYT9ZM?tag=rvgearlab-20",
    "description": "The ITRAZ is a four-pack of 5.3 gallon containers with an LDPE body and PP valve, a soft molded handle and a removable gasketless spigot with an adjustable angle pipe. A capped air vent speeds flow to about 1 gallon per minute, which the listing says is 20 percent faster than traditional designs.\n\nThe vent separates it from the WMXWAN and Gowithwind, because the stream stays smooth while pouring. The listing frames one 5.3 gallon jug as enough water for three people for one day.\n\nIt suits campers who fill pots and bottles all day and want a smooth, controllable flow. The removable spigot rinses clean.",
    "specs": [
      "Four 5.3 gal containers",
      "Capped air vent, about 1 gal per minute",
      "Removable gasketless spigot"
    ],
    "pros": [
      "Air vent gives smooth pouring",
      "Adjustable angle spigot pipe",
      "Removable spigot cleans easily",
      "One jug covers three people for a day"
    ],
    "cons": [
      "Higher cost per jug than the WMXWAN",
      "Single soft handle"
    ],
    "bestFor": "Cooking and filling bottles",
    "take": "The smoothest pourer of the group, thanks to a capped air vent.",
    "catch": "A single soft handle means a full jug is awkward to carry far."
  },
  {
    "id": "best-collapsible-water-containers-3",
    "rank": 3,
    "badge": "Best Small Set",
    "name": "BPA Free Collapsible Water Container Jug with Spigot",
    "price": "$23.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31WVkdkGyuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07D38LLP1?tag=rvgearlab-20",
    "description": "The Gowithwind is a two-pack of 5.3 gallon BPA-free LDPE jugs with a patented leak-proof spigot and an outer lid to prevent leakage in transport. The listing lists a free 36-page eBook on camping and emergency preparedness.\n\nIt gives you two large jugs without committing to a four-pack, and the outer lid protects the spigot in a vehicle. Against the ITRAZ 4-Pack it offers fewer jugs, and the cost per jug is higher than either four-pack.\n\nIt suits pairs and small families after two large jugs at a modest price. The outer lid keeps the spigot clean in the trunk.",
    "specs": [
      "Two 5.3 gal jugs",
      "Leak-proof spigot with outer lid",
      "Free 36 page eBook"
    ],
    "pros": [
      "Outer lid protects the spigot in transit",
      "Two jugs without four-pack bulk",
      "BPA-free LDPE",
      "Bonus camping eBook"
    ],
    "cons": [
      "Higher cost per jug than the WMXWAN",
      "No air vent or dual handles listed"
    ],
    "bestFor": "Couples and small families",
    "take": "A modest two-pack whose outer lid keeps the spigot safe in a car.",
    "catch": "Only two jugs means refills on longer trips."
  },
  {
    "id": "best-collapsible-water-containers-4",
    "rank": 4,
    "badge": "Best Mid-Size Jug",
    "name": "CoreMuse 3.17 Gallon/12L Collapsible Water Container with Spigot",
    "price": "$11.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Wo7m2-uvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H355FBR9?tag=rvgearlab-20",
    "description": "The CoreMuse is a 12 liter (3.17 gallon) container with a built-in spigot and a multi-layer food-safe construction. The listing says it carries 50 percent more water than the brand's 8 liter jug, folds flat when empty and comes with a lifetime warranty.\n\nAt 3.17 gallons it is a step smaller than the 5.3 gallon jugs, which makes a full container lighter to lift. The listing says to loosen the top cap slightly during use for smoother flow.\n\nIt suits solo campers, camp kitchens and RV trips that want a lighter jug. The lifetime warranty adds peace of mind.",
    "specs": [
      "12 L / 3.17 gal",
      "Built-in spigot",
      "Lifetime warranty"
    ],
    "pros": [
      "Lighter to lift than 5.3 gal jugs",
      "Folds flat when empty",
      "Lifetime warranty on the listing",
      "No plastic taste or odor"
    ],
    "cons": [
      "Smaller capacity per jug",
      "No air vent described"
    ],
    "bestFor": "Solo camps and light lifting",
    "take": "A mid-size jug that is easier to lift when full.",
    "catch": "At 12 liters it holds less than half of a 5.3 gallon jug."
  },
  {
    "id": "best-collapsible-water-containers-5",
    "rank": 5,
    "badge": "Best Budget Pick",
    "name": "TiddieBair 2 Pack Collapsible Water Container",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41E0MD58QrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H36L9RG4?tag=rvgearlab-20",
    "description": "The TiddieBair is a two-pack of 2 gallon collapsible jugs made from thick material, with independent inlet and outlet openings for steadier flow and a practical spout. The listing says the material is odorless and sturdy enough for outdoor use.\n\nIt carries the lowest price on the page and the lowest cost per jug, while the jugs hold the least water here. The independent inlet and outlet lets air flow in while water pours, which the listing says keeps it steady.\n\nIt suits day trips, picnics and small groups where 2 gallons per jug is enough. The jugs fold flat when empty.",
    "specs": [
      "Two 2 gal jugs",
      "Independent inlet and outlet",
      "Thick, odorless material"
    ],
    "pros": [
      "Lowest price and lowest cost per jug",
      "Steady flow from separate inlet",
      "Odorless material",
      "Folds small for storage"
    ],
    "cons": [
      "Smallest capacity here",
      "Handle and spigot details are sparse"
    ],
    "bestFor": "Day trips and picnics",
    "take": "The cheapest way to carry two small jugs of water.",
    "catch": "At 2 gallons each, a weekend group will need several refills."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "We compared per-jug capacity and total water per pack."
  },
  {
    "title": "Spigot and flow",
    "description": "We checked each spigot design and which listings mention an air vent or separate inlet."
  },
  {
    "title": "Handles and carry",
    "description": "We noted handle count and style, since a full jug is heavy."
  },
  {
    "title": "Material",
    "description": "We compared stated plastics and BPA-free or food-safe claims."
  },
  {
    "title": "Cost per jug",
    "description": "We worked out the cost per container, not just the sticker price of the pack."
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
    "subheading": "By Group Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Large groups and RV trips",
          "WMXWAN 5.3 Gal 4-Pack",
          "Four large jugs at a low cost per jug."
        ],
        [
          "Cooking and bottle filling",
          "ITRAZ 5.3 Gal 4-Pack",
          "Capped air vent for smooth pouring."
        ],
        [
          "Couples and small families",
          "Gowithwind 5.3 Gal 2-Pack",
          "Two large jugs with a protected spigot."
        ],
        [
          "Solo campers who lift carefully",
          "CoreMuse 3.17 Gal",
          "12 liters, lighter when full."
        ],
        [
          "Picnics and day trips",
          "TiddieBair 2 Gal 2-Pack",
          "Cheapest two-pack."
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
          "TiddieBair 2 Gal 2-Pack or CoreMuse 3.17 Gal"
        ],
        [
          "$20 to $30",
          "Gowithwind 5.3 Gal 2-Pack or WMXWAN 5.3 Gal 4-Pack"
        ],
        [
          "$40 to $50",
          "ITRAZ 5.3 Gal 4-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Large vs Small Jugs",
    "cards": [
      {
        "label": "Large 5.3 gallon",
        "text": "The WMXWAN 5.3 Gal 4-Pack, ITRAZ 5.3 Gal 4-Pack and Gowithwind 5.3 Gal 2-Pack hold the most per refill but weigh about 44 lb full."
      },
      {
        "label": "Small 2 to 3 gallon",
        "text": "The CoreMuse 3.17 Gal and TiddieBair 2 Gal 2-Pack are easier to carry and cheaper per jug, but need more refills."
      }
    ],
    "note": "Choose the WMXWAN 5.3 Gal 4-Pack for groups and the CoreMuse 3.17 Gal for solo trips."
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
          "Lowest cost per large jug",
          "WMXWAN 5.3 Gal 4-Pack"
        ],
        [
          "Lowest overall price",
          "TiddieBair 2 Gal 2-Pack"
        ],
        [
          "Smoother pour, higher price",
          "ITRAZ 5.3 Gal 4-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "For Car Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A leak-proof spigot, a handle you can carry when full and a capacity that suits your group."
      },
      {
        "label": "In this comparison",
        "text": "The WMXWAN 5.3 Gal 4-Pack lists dual handles and a one-piece molded outlet, and the ITRAZ 5.3 Gal 4-Pack lists a capped air vent."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ITRAZ 5.3 Gal 4-Pack if you pour a lot and want the air vent and adjustable spigot pipe."
      },
      {
        "label": "Save if",
        "text": "Save with the WMXWAN 5.3 Gal 4-Pack for large groups, or the TiddieBair 2 Gal 2-Pack for day trips."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Capacity per jug",
    "explanation": "A 5.3 gallon jug weighs about 44 lb when full, and a 2 gallon jug about 17 lb. Bigger jugs mean fewer refills but harder lifting. Pick the capacity you can carry comfortably from the car to the camp."
  },
  {
    "criterion": "Spigot seal",
    "explanation": "A gasketless spigot has fewer parts to leak, and an outer lid protects it in transport. A leaking spigot empties a jug in a bag. Look for a leak-proof spigot description and a lid over it."
  },
  {
    "criterion": "Air vent or separate inlet",
    "explanation": "Without an air path, water glugs out of a sealed jug. A capped air vent, as on the ITRAZ, or a separate inlet, as on the TiddieBair, gives a steady stream. Check the listing for either feature."
  },
  {
    "criterion": "Handles",
    "explanation": "A single soft handle is fine for a half-full jug, and dual handles help when full. Look at how the handles attach and whether they are molded in. Dual handles are listed on the WMXWAN."
  },
  {
    "criterion": "Cost per jug",
    "explanation": "Pack price hides the real cost. Divide the price by the count to compare a two-pack with a four-pack. Include capacity as well, since a smaller jug is cheaper per jug but not per gallon."
  }
];

export const faq = [
  {
    "q": "Is 5.3 gallons enough for a weekend?",
    "a": "For one person, about 1 to 2 gallons per day covers drinking and basic cooking. Four people over a weekend need several jugs. The ITRAZ listing frames a jug as one day for three people."
  },
  {
    "q": "Can I put drinking water in these?",
    "a": "The listings call the materials BPA-free and food-safe. A container does not treat water, so start with tap or treated water. Rinse a new jug before first use."
  },
  {
    "q": "Which jug is best for RV use?",
    "a": "The WMXWAN 5.3 Gal 4-Pack and ITRAZ 5.3 Gal 4-Pack are the largest sets here. Both fold flat in a compartment. The WMXWAN costs less per jug."
  },
  {
    "q": "How do I stop the jug glugging?",
    "a": "Use a jug with an air vent or separate inlet, or loosen the top cap slightly as the CoreMuse listing suggests. Tilt slowly. Place the jug on a table."
  },
  {
    "q": "How should I store collapsible jugs?",
    "a": "Drain, rinse and air dry them open before folding. Store them flat away from heat. Never fold a damp jug."
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
