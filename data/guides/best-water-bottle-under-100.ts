export const guideSlug = "best-water-bottle-under-100";
export const guideTitle = "5 Best Water Bottle Under 100 in 2026";
export const metaTitle = "Best Water Bottle Under 100 in 2026";
export const metaDescription = "Best water bottles under $100: five big-capacity picks from a 32 oz Nalgene to a 128 oz jug, none near $100, chosen for camp use and daily hydration.";
export const mainKeyword = "best water bottle under 100";
export const introParagraphs = [
  "A water bottle under $100 is a low bar, and the five picks here are all far below it. The better question is what size and lid you need for camp, car or trail, since extra money past about $30 mostly buys a brand name.",
  "The picks run from a 32 oz wide-mouth bottle to a 64 oz insulated jug and a 128 oz drink-tracking jug. They are ordered by how useful each is outdoors, with insulation and lids as tiebreakers."
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
    "id": "best-water-bottle-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Nalgene 32 oz Wide Mouth Water Bottle",
    "price": "$16.07",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/312ko3GFsxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B9T4KCV7?tag=rvgearlab-20",
    "description": "The Nalgene 32 oz wide-mouth bottle is described as impact-resistant and leak-proof, with curved corners for easy scrubbing and measurement lines on the side. It is dishwasher safe and survives drops on trails and subway floors.\n\nIt is the simplest and lightest-weight design here, with no insulation to add weight. It fits water filters and powder mixes through a wide opening that the ENCOOL and CIVAGO straw lids do not offer.\n\nIt suits hikers, campers and commuters who want a bottle that lasts for years. The measurement lines help track intake.",
    "specs": [
      "32 oz wide-mouth, impact-resistant",
      "Leak-proof lid",
      "Dishwasher safe, measurement lines"
    ],
    "pros": [
      "Survives drops on trails",
      "Wide mouth for ice and mixes",
      "Curved corners scrub clean",
      "Dishwasher safe"
    ],
    "cons": [
      "No insulation",
      "Plastic can retain odors"
    ],
    "bestFor": "Hikers and campers",
    "take": "The simple, proven bottle for trail and camp. No insulation.",
    "catch": "It does not keep water cold."
  },
  {
    "id": "best-water-bottle-under-100-2",
    "rank": 2,
    "badge": "Best Insulated Pick",
    "name": "CIVAGO 32 oz Insulated Stainless Steel Water Bottle With Straw and 3 Lids",
    "price": "$15.29",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Wi1KFCmbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09LLZNJYV?tag=rvgearlab-20",
    "description": "The CIVAGO 32 oz bottle is 304 stainless steel with vacuum insulation rated for 24 hours of cold. It includes three leak-proof lids: a flip-up straw, a twist spout and a third option.\n\nIt offers three lids in one bottle, which the ENCOOL lacks, and it costs a little less. It is heavier than the Nalgene.\n\nIt suits campers who want cold water all day and the flexibility of several lids. The steel body is rust-free.",
    "specs": [
      "32 oz 304 stainless, vacuum insulated",
      "Cold up to 24 hours",
      "Three leak-proof lids"
    ],
    "pros": [
      "Cold for up to 24 hours",
      "Three lids for different uses",
      "Rust-free 304 stainless",
      "Lower price than the ENCOOL"
    ],
    "cons": [
      "Heavier than plastic",
      "Steel can dent"
    ],
    "bestFor": "Campers who want cold water",
    "take": "A cold, versatile steel bottle. Three lids make it flexible.",
    "catch": "It is heavier than the Nalgene."
  },
  {
    "id": "best-water-bottle-under-100-3",
    "rank": 3,
    "badge": "Best Straw and Chug",
    "name": "ENCOOL Insulated Water Bottle with Straw Stainless Steel Water Bottle",
    "price": "$15.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31FMaPlgfHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F5S3SQJK?tag=rvgearlab-20",
    "description": "The ENCOOL is a double-wall stainless steel bottle with a straw lid for sipping and a twist cap for deep drinks. The listing rates it for 24 hours of cold, with zero condensation and multiple sizes.\n\nIt gives a straw and a chug cap, which is more flexibility than the Nalgene. It is a little more expensive than the CIVAGO.\n\nIt suits campers who like a straw for the car and a cap for the trail. The multiple sizes let you scale up or down.",
    "specs": [
      "Double-wall stainless steel",
      "Straw lid and twist cap",
      "24 hours cold, no condensation"
    ],
    "pros": [
      "Cold up to 24 hours",
      "Straw and chug options",
      "No condensation on the outside",
      "Multiple sizes"
    ],
    "cons": [
      "Costs more than the CIVAGO",
      "Exact capacity varies by size"
    ],
    "bestFor": "Campers who want two ways to drink",
    "take": "A steel bottle with a sip and a swig option. Check the size you order.",
    "catch": "Capacity depends on the size you pick."
  },
  {
    "id": "best-water-bottle-under-100-4",
    "rank": 4,
    "badge": "Best Half-Gallon Jug",
    "name": "Under Armour Insulated Water Bottle with Handle & Fence Hook",
    "price": "$28.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41aqM6B-23L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BT8K88SR?tag=rvgearlab-20",
    "description": "The Under Armour 64 oz jug keeps drinks cold for up to 10 hours with foam insulation. It has a handle, a fence hook for hanging, marked measurements and a leak-resistant design.\n\nIt holds twice the volume of the 32 oz bottles and costs more than any of them. The foam insulation is rated for 10 hours, which is shorter than the steel bottles.\n\nIt suits car campers, teams and families who want a jug that stays at the campsite. The fence hook hangs it from a chair or rail.",
    "specs": [
      "64 oz foam-insulated jug",
      "Cold up to 10 hours",
      "Handle, fence hook, measurements"
    ],
    "pros": [
      "Holds a half gallon",
      "Cold for up to 10 hours",
      "Handle and fence hook for hanging",
      "Marked measurements track intake"
    ],
    "cons": [
      "Bulky for hiking",
      "Insulation is shorter than steel"
    ],
    "bestFor": "Car camps and teams",
    "take": "A half-gallon jug for the camp table. Too big for a day pack.",
    "catch": "It is too bulky for hiking."
  },
  {
    "id": "best-water-bottle-under-100-5",
    "rank": 5,
    "badge": "Best Gallon Jug",
    "name": "WEMEET Leakproof Water Bottle Motivational with Straw & Strap",
    "price": "$19.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/416eExVhERL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GFWJWZS6?tag=rvgearlab-20",
    "description": "The WEMEET is a 128 oz BPA-free plastic jug with a straw, a strap, volume graduations and time markers. An integrated handle with anti-slip granules and a leakproof design complete it.\n\nIt holds twice the volume of the Under Armour and costs less. It is not insulated and is built for the gym, so it suits a camp more than a trail.\n\nIt suits campers who want a gallon of water at the campsite. The time markers help track daily intake.",
    "specs": [
      "128 oz BPA-free plastic jug",
      "Straw, strap, time markers",
      "Anti-slip integrated handle"
    ],
    "pros": [
      "A full gallon in one jug",
      "Time markers track intake",
      "Handle with anti-slip granules",
      "Strap for carrying"
    ],
    "cons": [
      "Not insulated",
      "Built for the gym, bulky outdoors"
    ],
    "bestFor": "Car camps wanting a gallon",
    "take": "The most water per dollar. Leave it at camp.",
    "catch": "It is a gym jug, so it is bulky for trails."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Compared stated ounces from 32 oz to a 128 oz gallon."
  },
  {
    "title": "Insulation",
    "description": "Looked at stated cold hours and insulation type."
  },
  {
    "title": "Lid and carry",
    "description": "Checked lids, handles and hooks."
  },
  {
    "title": "Camp use",
    "description": "Considered how each bottle works on a trail or at a campsite."
  },
  {
    "title": "Value",
    "description": "Weighed price against features, with every pick far below $100."
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
          "Day hike",
          "Nalgene 32oz Wide Mouth",
          "Light, tough and easy to clean."
        ],
        [
          "Hot day, cold water",
          "CIVAGO 32oz 3-Lid",
          "24 hours cold in steel."
        ],
        [
          "Car camp, couple",
          "Under Armour 64oz Jug",
          "Half a gallon with a handle and hook."
        ],
        [
          "Family camp",
          "WEMEET 128oz Jug",
          "A full gallon in one jug."
        ],
        [
          "Straw in the car, chug on the trail",
          "ENCOOL Insulated",
          "A straw lid and a twist cap."
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
          "CIVAGO 32oz 3-Lid or ENCOOL Insulated"
        ],
        [
          "$10 to $20",
          "Nalgene 32oz Wide Mouth or WEMEET 128oz Jug"
        ],
        [
          "$20 to $30",
          "Under Armour 64oz Jug"
        ]
      ]
    }
  },
  {
    "subheading": "Insulated Steel vs Plastic Jug",
    "cards": [
      {
        "label": "Insulated steel",
        "text": "Steel keeps water cold for 24 hours. The CIVAGO 32oz 3-Lid and ENCOOL Insulated are steel."
      },
      {
        "label": "Plastic or foam jug",
        "text": "Plastic is light and cheap, and foam jugs hold a lot. The Nalgene 32oz Wide Mouth, WEMEET 128oz Jug and Under Armour 64oz Jug fit here."
      }
    ],
    "note": "Choose steel like the CIVAGO 32oz 3-Lid for hot days, and the Nalgene 32oz Wide Mouth for simple hiking."
  },
  {
    "subheading": "By Size",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "32 oz",
          "Nalgene 32oz Wide Mouth"
        ],
        [
          "32 oz insulated",
          "CIVAGO 32oz 3-Lid"
        ],
        [
          "64 oz",
          "Under Armour 64oz Jug"
        ],
        [
          "128 oz",
          "WEMEET 128oz Jug"
        ]
      ]
    }
  },
  {
    "subheading": "For Car Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A big capacity, a handle and a lid that works with one hand"
      },
      {
        "label": "In this comparison",
        "text": "The Under Armour 64oz Jug has a handle and fence hook, so it works well at a campsite."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ENCOOL Insulated or CIVAGO 32oz 3-Lid when you want 24 hours of cold water."
      },
      {
        "label": "Save if",
        "text": "Save with the Nalgene 32oz Wide Mouth or WEMEET 128oz Jug when cold water is not a priority."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What $100 buys",
    "explanation": "Every bottle here costs a fraction of $100, and the premium brands cost more mainly for name and finish. A $15 to $30 bottle covers most camp needs. Compare capacity and lid design instead of price."
  },
  {
    "criterion": "Capacity",
    "explanation": "A 32 oz bottle covers a two-hour hike, and a 64 oz or 128 oz jug serves a campsite. Match the size to how far from the water source you will be. Look for the stated ounces in the title."
  },
  {
    "criterion": "Insulation",
    "explanation": "Steel keeps water cold for 24 hours, and foam insulation lasts about 10 hours. Plastic does not insulate. Look for double-wall, vacuum or foam wording and the stated hours."
  },
  {
    "criterion": "Lid type",
    "explanation": "A wide mouth takes ice, filters and powders, and a straw lid is easy in the car. A twist cap suits big gulps. Look for the lid options on the listing."
  },
  {
    "criterion": "Weight and carry",
    "explanation": "A full 64 oz jug weighs about 4 lbs, which is too heavy for a trail. A handle or strap helps at camp. Look for handle and hook details."
  }
];

export const faq = [
  {
    "q": "Do I need to spend near $100 on a water bottle?",
    "a": "No. Every pick here costs far less, and none needs more. A $15 to $30 bottle handles camp use."
  },
  {
    "q": "What is a common water bottle mistake?",
    "a": "Buying a bottle that is too big for a day pack. A full 64 oz jug is heavy. Use a 32 oz bottle on the trail."
  },
  {
    "q": "Is an insulated bottle worth it?",
    "a": "On hot days, yes. The CIVAGO 32oz 3-Lid keeps drinks cold for up to 24 hours. A plain bottle is fine for cool weather."
  },
  {
    "q": "How do I use a wide-mouth bottle with a filter?",
    "a": "Many filters screw onto wide-mouth bottles such as the Nalgene 32oz Wide Mouth. Check the filter thread size. Pack a small adapter."
  },
  {
    "q": "How do I clean a water bottle?",
    "a": "Wash with soap and a brush, rinse and dry open. The Nalgene 32oz Wide Mouth is dishwasher safe. Clean the straw weekly."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Towels",
    "href": "/campsite-gear/best-camping-towels"
  },
  {
    "title": "Best Dry Bags",
    "href": "/campsite-gear/best-dry-bags"
  },
  {
    "title": "Best Camping Lanterns And Camping Lights",
    "href": "/campsite-gear/best-camping-lanterns-and-camping-lights"
  },
  {
    "title": "Best Headlamps",
    "href": "/campsite-gear/best-headlamps"
  }
];
