export const guideSlug = "best-ultralight-backpacking-tents";
export const guideTitle = "5 Best Ultralight Backpacking Tents in 2026";
export const metaTitle = "Best Ultralight Backpacking Tents in 2026";
export const metaDescription = "Best ultralight backpacking tents compared on listed weight, packed size, waterproof ratings and trail trade-offs for solo hikers and couples.";
export const mainKeyword = "best ultralight backpacking tents";
export const introParagraphs = [
  "Ultralight in tent shopping means every ounce is traded against something: thinner fabric, smaller floor or fewer doors. The only fair comparison is the weight each listing actually states, ideally the minimum trail weight without stakes and stuff sack.",
  "Five tents were kept because their listed weights land between about 2.2 and 4.5 lb. Listings that use the word ultralight but weigh more than that, such as the Naturehike Mongar at 5.3 lb, were left out."
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
    "id": "best-ultralight-backpacking-tents-1",
    "rank": 1,
    "badge": "Lightest Pick",
    "name": "TGpao Easy Set Up Ultralight 1 Person Bivy Tent for Camping",
    "price": "$84.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VmjAIuWrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FNPVH7DB?tag=rvgearlab-20",
    "description": "The TGpao is a one-person bivy-style tent weighing 2.2 lb with 7001 aluminum poles, a freestanding seven-section frame and a compact carry bag. The outer tent lists a 2000 to 3000mm waterproof rating over a PU2000 base, and a zippered mosquito net is included.\n\nAt 2.2 lb it is the lightest listed tent here, 0.56 lb under the Naturehike Star Trail 2-person. Compared with the Clostnature 1P it saves about 1.8 lb of listed weight in exchange for a lower stated rain rating.\n\nIt suits solo hikers and bikepackers who count ounces. The 80 by 230 cm interior suits people under 6 ft 4 in.",
    "specs": [
      "2.2 lb, 7001 aluminum poles",
      "Freestanding seven-section frame",
      "Outer 2000 to 3000mm, PU2000 floor"
    ],
    "pros": [
      "Lightest listed weight at 2.2 lb",
      "Freestanding pole frame",
      "Zippered mosquito net",
      "Fits hikers up to 6 ft 4 in"
    ],
    "cons": [
      "Lower waterproof numbers than the others",
      "Solo only"
    ],
    "bestFor": "Bikepacking and solo hikes",
    "take": "The lightest tent here, for solo trips.",
    "catch": "Taller sleepers over 6 ft 4 in may feel cramped, as the listing says."
  },
  {
    "id": "best-ultralight-backpacking-tents-2",
    "rank": 2,
    "badge": "Best Light Two-Person",
    "name": "Naturehike Star Trail Ultralight Backpacking Tent",
    "price": "$127.20",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31bPCXq3cOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G2LBTWWV?tag=rvgearlab-20",
    "description": "The Naturehike Star Trail comes as a 2.3 lb one-person or a 2.76 lb two-person tent that stuffs down to under 18 inches long. Its 10D nylon outer carries PU1500mm+ and the 20D inner floor and footprint carry PU3000mm, and the two-person interior is 82.7 by 51.2 by 39.3 inches.\n\nIt is the lightest two-person tent here by more than a pound over the Cloud-Up 2. Compared with the Cloud-Up it gives up some of the waterproof margin for that saving.\n\nIt suits couples who want a full 3 season mesh inner at 2.76 lb. The listing says it pitches in about 3 minutes.",
    "specs": [
      "2.76 lb two-person, 2.3 lb solo",
      "10D outer PU1500mm+",
      "Full mesh inner tent"
    ],
    "pros": [
      "Two-person tent at 2.76 lb",
      "20D floor with PU3000mm",
      "Full mesh inner airflow",
      "Pitches in about 3 minutes"
    ],
    "cons": [
      "10D fly is thin and needs care",
      "Fly rating is PU1500mm+"
    ],
    "bestFor": "Couples counting ounces",
    "take": "The lightest two-person tent in this guide.",
    "catch": "A 10D fly saves weight and demands careful pitching on rough ground."
  },
  {
    "id": "best-ultralight-backpacking-tents-3",
    "rank": 3,
    "badge": "Best Weather Margin",
    "name": "Naturehike Cloud-Up 2 Person Tent Lightweight Backpacking Tent with Footprint",
    "price": "$127.20",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31KI2nvfQfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D31F6PBB?tag=rvgearlab-20",
    "description": "At 3.97 lb the Naturehike Cloud-Up 2 stuffs down to a roughly 16 inch roll. Silicone-coated 20D nylon gives a PU4000mm rating, the corners and seams are taped, and a footprint ships with it.\n\nIt carries the strongest rain rating of the five and a ventilation window above the door. Compared with the Star Trail it is heavier by about 1.2 lb and much sturdier in fabric.\n\nIt suits hikers who accept a lighter-than-typical two-person tent and still want weather margin. The double-layer design and B3 mesh help airflow.",
    "specs": [
      "3.97 lb listed weight",
      "20D silicone nylon, PU4000mm",
      "Footprint included"
    ],
    "pros": [
      "PU4000mm silicone-coated nylon",
      "Footprint included",
      "Taped corners and seams",
      "Ventilation window over door"
    ],
    "cons": [
      "Heavier than the Star Trail",
      "Narrow 49 inch floor"
    ],
    "bestFor": "Wet-weather ultralight",
    "take": "The best weather margin among the light two-person tents.",
    "catch": "At 49 inches wide, two wide pads leave no spare room."
  },
  {
    "id": "best-ultralight-backpacking-tents-4",
    "rank": 4,
    "badge": "Best Budget Solo",
    "name": "Clostnature 1 Person Lightweight Backpacking Tent",
    "price": "$61.74",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51ehXDJpryL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0893QB42Z?tag=rvgearlab-20",
    "description": "The Clostnature 1P weighs 4 lb total or 2.97 lb at minimum trail weight with fly and inner tent. It has a PU 5000 coating, freestanding two-pole aluminum structure, mesh walls, a pole repair kit and 14 aluminum stakes in the box.\n\nIt gives a freestanding solo tent at a lower price than the TGpao and a higher listed PU rating than the Naturehike. Compared with the Clostnature 2P it saves roughly 1.5 lb of minimum trail weight.\n\nIt suits solo hikers who want a high PU number on a budget. Adjustable guy lines help hold it in wind.",
    "specs": [
      "4 lb total, 2.97 lb minimum",
      "PU 5000 fly and floor",
      "Freestanding, 2 aluminum poles"
    ],
    "pros": [
      "2.97 lb minimum trail weight",
      "PU 5000 coating",
      "Pole repair kit included",
      "14 stakes supplied"
    ],
    "cons": [
      "4 lb total is heavier than the TGpao",
      "Solo only"
    ],
    "bestFor": "Budget solo hikers",
    "take": "A budget solo tent with a high rain number and a stated trail weight.",
    "catch": "The 2.97 lb figure strips stakes and bag, so total weight is 4 lb."
  },
  {
    "id": "best-ultralight-backpacking-tents-5",
    "rank": 5,
    "badge": "Best Budget Two-Person",
    "name": "Clostnature 2 Person Lightweight Backpacking Tent",
    "price": "$61.74",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41XP3ccIaiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07D4J3J2R?tag=rvgearlab-20",
    "description": "The Clostnature 2P weighs 5.29 lb total or 4.52 lb at minimum trail weight, and gives a floor 4 ft 11 in wide under a 3 ft 10 in roof. Its fly and floor share a PU 5000 coating, and each side gets a D-shaped door plus a vestibule, all on two aluminum poles.\n\nIt is the heaviest and roomiest pick here, with the most generous floor at 4 ft 11 in wide. Compared with the Cloud-Up 2 it weighs about 0.5 lb more at trail weight and costs far less.\n\nIt suits couples who want two doors and space on a budget. Full mesh walls give strong ventilation.",
    "specs": [
      "4.52 lb minimum, 5.29 lb total",
      "4 ft 11 in wide floor",
      "Two doors, two vestibules"
    ],
    "pros": [
      "Wider 4 ft 11 in floor for two",
      "Two doors and two vestibules",
      "PU 5000 coating",
      "Lowest price here"
    ],
    "cons": [
      "Heaviest of the five",
      "Less ultralight than the Naturehike"
    ],
    "bestFor": "Budget couples",
    "take": "The cheapest two-person tent that still gets near ultralight weight.",
    "catch": "Total weight of 5.29 lb is heavy for strict ultralight standards."
  }
];

export const howWeEvaluated = [
  {
    "title": "Listed weight",
    "description": "Minimum trail and total weights where stated."
  },
  {
    "title": "Packed size",
    "description": "Packed dimensions."
  },
  {
    "title": "Waterproofing",
    "description": "PU ratings on fly and floor."
  },
  {
    "title": "Floor room",
    "description": "Interior dimensions."
  },
  {
    "title": "Trade-offs",
    "description": "Thin fabric and door count."
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
    "subheading": "By Group",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Solo, lightest possible",
          "TGpao 1-Person Pop-Up",
          "2.2 lb."
        ],
        [
          "Couple, lightest",
          "Naturehike Star Trail",
          "2.76 lb."
        ],
        [
          "Couple in wet weather",
          "Naturehike Cloud-Up 2",
          "PU4000mm."
        ],
        [
          "Solo on a budget",
          "Clostnature 1P Ultralight",
          "2.97 lb minimum."
        ],
        [
          "Couple, room and price",
          "Clostnature 2P Ultralight",
          "Wider floor and two doors."
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
          "$60 to $70",
          "Clostnature 1P Ultralight or Clostnature 2P Ultralight"
        ],
        [
          "$80 to $130",
          "TGpao 1-Person Pop-Up or Naturehike Star Trail"
        ],
        [
          "$120 to $130",
          "Naturehike Cloud-Up 2"
        ]
      ]
    }
  },
  {
    "subheading": "Thin Fly vs Sturdier Fly",
    "cards": [
      {
        "label": "Thin fly",
        "text": "Saves grams but needs careful use. The Naturehike Star Trail has a 10D fly."
      },
      {
        "label": "Sturdier fabric",
        "text": "Costs weight but gains durability. The Naturehike Cloud-Up 2 and Clostnature 2P Ultralight use heavier fabrics."
      }
    ],
    "note": "Choose the Naturehike Star Trail for tight weight and the Naturehike Cloud-Up 2 for margin."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "Premium",
          "Naturehike Star Trail"
        ],
        [
          "Mid",
          "TGpao 1-Person Pop-Up"
        ],
        [
          "Low",
          "Clostnature 1P Ultralight"
        ],
        [
          "Lowest two-person",
          "Clostnature 2P Ultralight"
        ]
      ]
    }
  },
  {
    "subheading": "Thru-Hike Style Trips",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated minimum trail weight under 3 lb and a footprint in the box."
      },
      {
        "label": "In this comparison",
        "text": "The TGpao 1-Person Pop-Up lists 2.2 lb, and the Naturehike Cloud-Up 2 includes a footprint."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Naturehike Star Trail or Naturehike Cloud-Up 2 for the best weight-to-protection balance."
      },
      {
        "label": "Save if",
        "text": "Save with the Clostnature 1P Ultralight or Clostnature 2P Ultralight."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Which weight to trust",
    "explanation": "Minimum trail weight excludes stakes, stuff sack and repair kit, so it reads lower than the total. A listing that gives both is easier to compare. Add stakes and a footprint to get what you carry."
  },
  {
    "criterion": "Fabric thickness",
    "explanation": "10D and 20D nylon save grams but need care on rough ground. A footprint protects thin floors. Check the denier on the listing."
  },
  {
    "criterion": "Waterproof rating",
    "explanation": "PU1500mm+ suits showers, while PU4000mm and higher suit steady rain. Taped seams matter too. Look for fly and floor ratings."
  },
  {
    "criterion": "Floor width and sleeping room",
    "explanation": "Two pads need about 50 inches. A 49 inch floor fits narrow pads only. Compare widths."
  },
  {
    "criterion": "Freestanding and doors",
    "explanation": "Freestanding tents pitch on rock and move easily. Two doors reduce climbing over a partner. Single-door tents save weight."
  }
];

export const faq = [
  {
    "q": "How light is ultralight?",
    "a": "Many hikers treat under 3 lb for a one-person and under 4 lb for a two-person tent as the line. The TGpao 1-Person Pop-Up is 2.2 lb and the Naturehike Star Trail is 2.76 lb for two."
  },
  {
    "q": "What is the common mistake?",
    "a": "Comparing a minimum trail weight with a total weight. The Clostnature 1P Ultralight lists both. Compare like with like."
  },
  {
    "q": "Is the lightest tent worth the price?",
    "a": "If you hike daily, yes, like the Naturehike Star Trail. For occasional trips, a Clostnature 1P Ultralight is enough."
  },
  {
    "q": "How do I care for thin fabric?",
    "a": "Use a footprint, clear the ground of sticks, and avoid sharp stakes. Do not leave it in the sun. Dry it before storing."
  },
  {
    "q": "How do I pitch in wind?",
    "a": "Orient the narrow end to wind, stake all corners and use guy lines. Keep gear inside to stabilize."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Tents",
    "href": "/tents-shelter/best-backpacking-tents"
  },
  {
    "title": "Best Camping Tents",
    "href": "/tents-shelter/best-camping-tents"
  },
  {
    "title": "Best Tent Stakes",
    "href": "/tents-shelter/best-tent-stakes"
  },
  {
    "title": "Best 4 Season Tent Under 200",
    "href": "/tents-shelter/best-4-season-tent-under-200"
  }
];
