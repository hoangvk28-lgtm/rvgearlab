export const guideSlug = "best-travel-backpacks-under-100";
export const guideTitle = "5 Best Travel Backpacks Under 100 in 2026";
export const metaTitle = "Best Travel Backpacks Under 100 in 2026";
export const metaDescription = "Best travel backpacks under $100: carry-on packs with shoe pouches, laptop sleeves and USB ports, compared by size, weight and organization.";
export const mainKeyword = "best travel backpacks under 100";
export const introParagraphs = [
  "Under $100 you can get a real carry-on backpack, and every pick here sits far below that ceiling. At this budget the trade-offs show up in zipper quality, strap padding and how honestly the listing states its dimensions.",
  "The six packs below share the same basic recipe: flight-friendly size, a laptop sleeve and a separate spot for shoes. They are ordered by how clearly their listed organization suits a short trip."
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
    "id": "best-travel-backpacks-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "EZUOLA Travel Backpack for Men",
    "price": "$20.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+XhkwDzRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVJXY54W?tag=rvgearlab-20",
    "description": "The EZUOLA measures 16.9 by 11.4 by 7.5 inches and packs a wet compartment, a waterproof shoe bag and a separate padded laptop compartment. A built-in USB port, an anti-theft back zipper pocket and a trolley sleeve round out the list.\n\nIt is the most feature-complete pick here for the money. Against the coowoz, it adds a trolley sleeve, and against the HOTOR, it adds the USB port and a dedicated shoe bag.\n\nIt suits weekend travelers who want one bag to ride on a roller and under a seat. The side-opening main compartment keeps packing tidy.",
    "specs": [
      "16.9 x 11.4 x 7.5 in",
      "Wet pocket and shoe bag",
      "USB port, trolley sleeve"
    ],
    "pros": [
      "Trolley sleeve slides over a roller handle",
      "Waterproof shoe bag keeps footwear apart",
      "Built-in USB port for a power bank",
      "Anti-theft zipper pocket on the back"
    ],
    "cons": [
      "USB port still needs your own power bank",
      "Liters are not stated on the listing"
    ],
    "bestFor": "Weekend flights with a roller bag",
    "take": "The best package at this budget. It does most things well and nothing badly.",
    "catch": "Capacity is listed in inches only, so measure your packing cubes."
  },
  {
    "id": "best-travel-backpacks-under-100-2",
    "rank": 2,
    "badge": "Best Capacity",
    "name": "coowoz Travel Backpack For Women Men",
    "price": "$20.01",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YHMhfJVCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B1882GT3?tag=rvgearlab-20",
    "description": "The coowoz offers 25L in waterproof durable polyester, with two main pockets and two laptop compartments that fit a 13 inch tablet and a 14 inch laptop. It also carries a separate shoe compartment, a wet bag, a USB port and an anti-theft pocket.\n\nIt gives you a clear liters figure, which the EZUOLA does not. Next to the Taygeer, it trades a lighter hand-carry look for a stated capacity.\n\nIt fits travelers who bring both a laptop and a tablet. The airy back panel adds ventilation on long walks to the gate.",
    "specs": [
      "25L waterproof polyester",
      "Laptop and tablet sleeves",
      "Shoe compartment and wet bag"
    ],
    "pros": [
      "States 25L capacity clearly",
      "Separate laptop and tablet compartments",
      "Waterproof polyester shell",
      "USB port and anti-theft back pocket"
    ],
    "cons": [
      "Laptop sleeve tops out at 14 inches",
      "Weight is not on the listing"
    ],
    "bestFor": "Travelers with both tablet and laptop",
    "take": "A solid all-rounder, and the one that gives the clearest volume number.",
    "catch": "Laptops larger than 14 inches will not fit the sleeve."
  },
  {
    "id": "best-travel-backpacks-under-100-3",
    "rank": 3,
    "badge": "Best Lightweight",
    "name": "Taygeer Travel Backpack for Women",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+1F47eDML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09MQWWP87?tag=rvgearlab-20",
    "description": "The Taygeer measures 16.8 by 11 by 7 inches and weighs 1.74 pounds, with three large main compartments and nine inner and side pockets. A 180 degree zipper opening speeds security checks, and a bonus shoe bag and wet pocket are included.\n\nAt 1.74 pounds it is among the lighter bags here and lists its exact weight, which coofay rounds up to 2 pounds. Compared with the EZUOLA, it adds two padded handles so the bag doubles as a handbag.\n\nIt suits travelers who carry by hand through airports and want deep organization. Padded adjustable straps keep the load comfortable.",
    "specs": [
      "16.8 x 11 x 7 in, 1.74 lb",
      "3 main compartments, 9 pockets",
      "180 degree zipper opening"
    ],
    "pros": [
      "Light at 1.74 pounds with stated weight",
      "Lots of small pockets for organization",
      "180 degree opening for security checks",
      "Padded handles let it act as a handbag"
    ],
    "cons": [
      "No USB port is mentioned",
      "Slim profile limits bulky items"
    ],
    "bestFor": "Light packers who like organization",
    "take": "My favorite for carrying through airports. The weight is low and the layout is smart.",
    "catch": "The slim 7 inch depth limits bulky items like boots."
  },
  {
    "id": "best-travel-backpacks-under-100-4",
    "rank": 4,
    "badge": "Best Budget Shoe Pocket",
    "name": "coofay Travel Backpack For Women Men Airline Approved Carry On Backpack Flight Approved Waterproof Sports Lugg",
    "price": "$17.09",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41kWWRgv4SL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B76G1SZF?tag=rvgearlab-20",
    "description": "The coofay measures 16.5 by 11.9 by 7.9 inches and weighs 2 pounds by manual measurement. Its clothes pocket takes four to six thin tops or pants, and a separate shoe compartment fits slippers or low-top sneakers beside a wet pocket.\n\nIt has a looser, roomier shape than the Taygeer and costs less. Against the HOTOR, it adds the separate shoe compartment and thick multi-panel back padding.\n\nIt fits short trips and business overnights where a pair of shoes needs its own pocket. The ventilated back keeps heat down.",
    "specs": [
      "16.5 x 11.9 x 7.9 in, 2 lb",
      "Separate shoe compartment",
      "Wet pocket included"
    ],
    "pros": [
      "Roomy clothes pocket for 4 to 6 items",
      "Shoe compartment fits low-top sneakers",
      "Thick ventilated back padding",
      "Priced below the heavier-featured picks"
    ],
    "cons": [
      "Heavier than the Taygeer",
      "Weight is a manual measurement, not exact"
    ],
    "bestFor": "Short trips with shoes to carry",
    "take": "A friendly budget bag that gives shoes their own spot.",
    "catch": "The listing says weight may vary a little from the stated 2 pounds."
  },
  {
    "id": "best-travel-backpacks-under-100-5",
    "rank": 5,
    "badge": "Best Suitcase-Style Opening",
    "name": "HOTOR Travel Backpack Flight Approved Bag Men Women",
    "price": "$15.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/414gN2L5ZOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DHKZD6Y2?tag=rvgearlab-20",
    "description": "The HOTOR measures 11.8 by 7.9 by 17.3 inches and opens like a suitcase for easy packing. It uses Oxford fabric that resists water and abrasion, with a padded 15.6 inch laptop compartment and a stated weight near 1.2 pounds.\n\nIt carries a larger laptop than the coowoz, with a 15.6 inch sleeve. Compared with the EZUOLA, it skips the USB port and costs less.\n\nIt suits travelers with a bigger laptop who want a clean, simple bag. A flight-approved size fits overhead bins and under seats.",
    "specs": [
      "11.8 x 7.9 x 17.3 in",
      "Padded 15.6 in laptop sleeve",
      "Water-resistant Oxford fabric"
    ],
    "pros": [
      "Suitcase-style opening for easy packing",
      "Fits a 15.6 inch laptop",
      "Oxford fabric resists water and abrasion",
      "Light at roughly 1.2 pounds"
    ],
    "cons": [
      "No USB port or shoe compartment named",
      "Fewer organization details than rivals"
    ],
    "bestFor": "Larger laptop owners packing simple",
    "take": "A no-frills choice for someone who wants a bigger laptop sleeve at the lowest cost.",
    "catch": "It lacks a shoe compartment and a USB port."
  }
];

export const howWeEvaluated = [
  {
    "title": "Flight size",
    "description": "Stated dimensions were compared with common airline under-seat and carry-on limits, since a bag that is half an inch too big can be gate-checked."
  },
  {
    "title": "Organization",
    "description": "Laptop sleeves, shoe compartments and wet pockets were weighed for how well each separates a short trip."
  },
  {
    "title": "Weight and comfort",
    "description": "Stated weight, strap padding and back ventilation were compared for airport miles."
  },
  {
    "title": "Budget value",
    "description": "Features were compared against price within the ceiling, so cheaper bags had to justify what they leave out."
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
    "subheading": "By Trip Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Weekend flight with a roller",
          "EZUOLA Carry-On",
          "Trolley sleeve and full organization."
        ],
        [
          "Laptop plus tablet",
          "coowoz 25L",
          "Two sleeves and a stated 25L."
        ],
        [
          "Light packers, carry by hand",
          "Taygeer Flight",
          "1.74 pounds with 9 pockets."
        ],
        [
          "Short trip with shoes",
          "coofay Travel",
          "Separate shoe compartment."
        ],
        [
          "Larger laptop, simple bag",
          "HOTOR Medium",
          "15.6 inch sleeve at the lowest weight."
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
          "HOTOR Medium or coofay Travel"
        ],
        [
          "$10 to $30",
          "Taygeer Flight or coowoz 25L"
        ],
        [
          "$20 to $30",
          "EZUOLA Carry-On"
        ]
      ]
    }
  },
  {
    "subheading": "Packed Features vs Simple Design",
    "cards": [
      {
        "label": "Feature-packed",
        "text": "More pockets, USB ports and sleeves, at the cost of some weight. The EZUOLA Carry-On, coowoz 25L and Taygeer Flight fall here."
      },
      {
        "label": "Simple design",
        "text": "Fewer features and lower weight, with a suitcase-style opening. The HOTOR Medium and coofay Travel lean this way."
      }
    ],
    "note": "Most travelers should pick the EZUOLA Carry-On unless the extra pockets would go unused."
  },
  {
    "subheading": "By Laptop Size",
    "table": {
      "headers": [
        "Laptop",
        "Recommended pick"
      ],
      "rows": [
        [
          "13 inch tablet or 14 inch laptop",
          "coowoz 25L"
        ],
        [
          "15.6 inch laptop",
          "HOTOR Medium"
        ],
        [
          "Wants USB port",
          "EZUOLA Carry-On"
        ],
        [
          "Wants handbag carry",
          "Taygeer Flight"
        ]
      ]
    }
  },
  {
    "subheading": "For Budget Airline Personal Items Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Dimensions under common under-seat limits and a slim profile."
      },
      {
        "label": "In this comparison",
        "text": "The Taygeer Flight at 16.8 by 11 by 7 inches and the HOTOR Medium at 11.8 by 7.9 by 17.3 inches stay slim, which helps under tighter seats."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the EZUOLA Carry-On if you want the USB port, trolley sleeve and fuller organization."
      },
      {
        "label": "Save if",
        "text": "Save with the HOTOR Medium or coofay Travel if you only need a laptop sleeve or a shoe pocket."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Check the dimensions, not the label",
    "explanation": "Flight approved is a sales phrase, not a rule. Airlines publish their own limits, and under-seat limits are tighter than overhead bins. Compare the listed inches with your airline page before you buy."
  },
  {
    "criterion": "Laptop sleeve size",
    "explanation": "A sleeve for a 14 inch laptop will not take a 15.6 inch model. The coowoz lists 14 inch and 13 inch sleeves while the HOTOR lists 15.6 inches. Match the sleeve to your actual device."
  },
  {
    "criterion": "Where shoes go",
    "explanation": "A shoe compartment keeps dirt away from clothes, which matters on a trip. The coofay and EZUOLA list separate shoe space. Check the compartment dimensions if you wear larger sizes."
  },
  {
    "criterion": "Weight before packing",
    "explanation": "A heavy empty bag cuts into airline weight limits and your shoulders. The Taygeer lists 1.74 pounds and the HOTOR near 1.2 pounds. Look for stated weight, not just fabric details."
  },
  {
    "criterion": "Zippers and stitching",
    "explanation": "At this budget, zippers and seams are where bags fail. Look for metal or large-tooth zippers and reinforced stitching in the listing photos. Do not overstuff a bag in the first trips."
  }
];

export const faq = [
  {
    "q": "Will these fit under an airline seat?",
    "a": "Many fit under-seat limits if they are packed lightly, but limits vary. Compare the listed inches with your airline page. A soft-sided bag can compress a little."
  },
  {
    "q": "Is a USB port worth it?",
    "a": "The port only passes power from your own power bank, so it does not charge on its own. It helps if you keep a battery in the pocket. Check the cable routing in the listing photos."
  },
  {
    "q": "Can I carry a laptop over 14 inches?",
    "a": "The coowoz sleeve stops at 14 inches, while the HOTOR lists 15.6 inches. Measure your laptop and compare with the sleeve. A tight fit strains zippers."
  },
  {
    "q": "How do I pack for a short trip?",
    "a": "Roll clothes, put shoes in the shoe pocket and keep liquids in the wet pocket. Place heavier items near the back panel. Leave a little space so zippers close easily."
  },
  {
    "q": "How do I clean a travel backpack?",
    "a": "Spot clean with a damp cloth and mild soap, and air dry fully. Avoid machine washing, which can warp padding. Wipe the wet pocket after each trip."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Hiking Baby Carrier For 6 Month Old",
    "href": "/packs-hiking/best-hiking-baby-carrier-for-6-month-old"
  },
  {
    "title": "Best Hiking Umbrella For Sun",
    "href": "/packs-hiking/best-hiking-umbrella-for-sun"
  },
  {
    "title": "Best Hiking Watches For Men",
    "href": "/packs-hiking/best-hiking-watches-for-men"
  },
  {
    "title": "Best Umbrella For Wind And Rain",
    "href": "/packs-hiking/best-umbrella-for-wind-and-rain"
  }
];
