export const guideSlug = "best-camping-tents";
export const guideTitle = "5 Best Camping Tents in 2026";
export const metaTitle = "Best Camping Tents in 2026";
export const metaDescription = "Best camping tents compared across pop-up, dome and backpacking styles, with floor size, weight, rain rating and setup notes for first-time buyers.";
export const mainKeyword = "best camping tents";
export const introParagraphs = [
  "A good camping tent starts with the trip, not the brand. A solo hiker, a couple at a festival and a family at a lake each need a different size, weight and setup, so this list covers a range.",
  "Five tents are included, from a one-person backpacking tent to a four-person pop-up. They are ranked by how well each listing backs its size, rain rating and setup claims with real numbers."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-camper-by-tent.webp";
export const heroImageAlt = "Camper standing next to a tent at a campsite";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-camping-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Pop Up Tents for Camping 4 Person Waterproof Military Popup Tent Camping Easy Up Camping Tents Instant Pop Up ",
    "price": "$84.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41v-SB66U2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08RYX1ZL7?tag=rvgearlab-20",
    "description": "The Londtren pop-up tent has a 9.2 ft by 6.6 ft floor that fits 3 to 4 people in sleeping bags or 2 to 3 people with lots of gear. Pre-assembled poles let it pop open from its bag, and a 190T polyester shell, a 110G PE groundsheet and a vestibule are listed.\n\nIt is the biggest tent here and the only one that pitches by letting go of the bag. Against the Amazon Basics dome it sets up faster and adds a vestibule.\n\nIt suits car campers who want a fast, roomy tent for festivals and weekends. Mesh front and back doors give airflow.",
    "specs": [
      "9.2 x 6.6 ft floor",
      "Pop-up, pre-assembled poles",
      "190T shell, vestibule"
    ],
    "pros": [
      "Pops open from the bag",
      "Vestibule keeps shoes outside",
      "Mesh front and back doors",
      "Fits 3 to 4 in sleeping bags"
    ],
    "cons": [
      "Priciest in this group",
      "No water rating number named"
    ],
    "bestFor": "Festivals and car camping",
    "take": "The easiest and roomiest tent in the group for casual camping.",
    "catch": "Folding a pop-up tent takes practice."
  },
  {
    "id": "best-camping-tents-2",
    "rank": 2,
    "badge": "Best Budget Dome",
    "name": "Amazon Basics Dome Camping Tent with Easy Setup for Hiking and Backpacking",
    "price": "$41.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31U+A9gSG-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DDSZML1C?tag=rvgearlab-20",
    "description": "Amazon Basics sells this two-person dome as a three-season, self-supporting tent made of coated polyester with welded seams. A removable rainfly with a back window and cool-air port, shock-corded poles that set up in under 4 minutes, a mesh pocket and a compact bag are listed.\n\nIt is the best-known dome at a low price and sets up quickly. Against the Clostnature it uses welded seams and a back window.\n\nIt suits first-time campers and hikers on a budget. The free-standing frame can be moved without taking it down.",
    "specs": [
      "Three-season free-standing dome",
      "Welded seams, back window",
      "Up in under 4 minutes"
    ],
    "pros": [
      "Free-standing dome",
      "Welded seams on polyester",
      "Quick four-minute pitch",
      "Mesh pocket and bag included"
    ],
    "cons": [
      "Only sleeps two",
      "No rain rating in mm"
    ],
    "bestFor": "First tent, two people",
    "take": "A simple, quick dome that covers the basics for two.",
    "catch": "No millimeter rating is given for the fly."
  },
  {
    "id": "best-camping-tents-3",
    "rank": 3,
    "badge": "Best Backpacking Tent",
    "name": "Night Cat Backpacking Tent for One 1 to 2 Persons Lightweight Waterproof Camping Hiking Tent for Adults Kids S",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31uxxwrBNWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07WR1V29Y?tag=rvgearlab-20",
    "description": "Night Cat builds this one-to-two person backpacking tent at about 4.4 lb (2 kg), with an inner floor of 7 ft long and under 4 ft wide. Taped seams under a 3000mm PU fly and fiberglass poles with protective cases come with a pack that rolls up to 16.5 inches.\n\nIt has the highest listed rain rating here. Against the Clostnature it is narrower and lighter.\n\nIt suits solo hikers who want a taped-seam tent at a very low weight. One to two minutes is the stated setup time.",
    "specs": [
      "7.0 x 3.8 x 3.6 ft, 4.4 lb",
      "PU 3000mm, taped seams",
      "Packs to 16.5 inches"
    ],
    "pros": [
      "Only 4.4 lbs",
      "PU 3000mm with taped seams",
      "Pole protection cases",
      "Packs to 16.5 inches long"
    ],
    "cons": [
      "Tight for two with gear",
      "Low 3.6 ft roof"
    ],
    "bestFor": "Solo hiking trips",
    "take": "A light, taped-seam tent for one hiker with gear.",
    "catch": "At 3.8 ft wide, two people fit with no room for gear."
  },
  {
    "id": "best-camping-tents-4",
    "rank": 4,
    "badge": "Best Everyday Two-Person",
    "name": "Clostnature Waterproof Camping Tent for 2 Person",
    "price": "$36.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41EXGv3DbIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BRX514YX?tag=rvgearlab-20",
    "description": "The Clostnature two-person dome stands on its own with an X-pole frame and a PU 2000 coated fly. Factory-sealed seams, a net-and-fabric double door, 8 stakes, 4 ropes and a carry sack are part of the kit.\n\nIt costs less than the Amazon Basics dome and includes a stake and rope set. Compared with the Wakeman it has a rated fly and a double-layer door.\n\nIt suits couples who want a cheap, free-standing tent. A one-year guarantee is listed.",
    "specs": [
      "Free-standing X-pole dome",
      "PU 2000, sealed seams",
      "Stakes, ropes, carry sack"
    ],
    "pros": [
      "Free-standing X-pole frame",
      "Factory-sealed seams",
      "Double-layer door with net",
      "Stakes and ropes included"
    ],
    "cons": [
      "PU 2000 is a modest rating",
      "Small interior for two with gear"
    ],
    "bestFor": "Couples on a budget",
    "take": "A cheap free-standing dome with a stake kit.",
    "catch": "The 2000 rating suits showers rather than storms."
  },
  {
    "id": "best-camping-tents-5",
    "rank": 5,
    "badge": "Best Lowest Price",
    "name": "2-Person Camping Tent",
    "price": "$25.75",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JAmQXcakL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07XPKZRGS?tag=rvgearlab-20",
    "description": "The Wakeman 2-person tent measures 77 by 57 by 40 inches, weighs 2.75 lbs and uses 190T polyester with 3mm fiberglass poles. It has a removable rain fly, a ventilation window and a dual-layer door with an inner screen and an outer zipper.\n\nIt is the cheapest tent here and weighs far less than the Londtren. Against the Clostnature it has a simpler frame and no rating number.\n\nIt suits festival-goers and beach campers who want a very cheap two-person shelter. The carry bag is 23 inches long.",
    "specs": [
      "77 x 57 x 40 in, 2.75 lbs",
      "190T, fiberglass poles",
      "Dual-layer door"
    ],
    "pros": [
      "Lowest price in the group",
      "Only 2.75 lbs",
      "Removable rain fly",
      "Dual-layer door"
    ],
    "cons": [
      "Low 40 inch roof",
      "Thin 3mm poles"
    ],
    "bestFor": "Festivals and beach days",
    "take": "The cheapest and lightest shelter for two at a festival.",
    "catch": "No waterproof rating is named, so plan for dry weather."
  }
];

export const howWeEvaluated = [
  {
    "title": "Size and capacity",
    "description": "Floors from 3.8 ft wide to 9.2 ft long were compared with stated capacity."
  },
  {
    "title": "Weight",
    "description": "Weights from 2.75 to about 10 lbs were compared."
  },
  {
    "title": "Rain protection",
    "description": "Millimeter ratings and seam types were compared."
  },
  {
    "title": "Setup",
    "description": "Pop-up, free-standing dome and pole sleeves were compared by minutes."
  },
  {
    "title": "Use case fit",
    "description": "Backpacking, festival and car camping uses were separated."
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
          "Car camping with family",
          "Londtren 4-Person Pop-Up Tent",
          "9.2 x 6.6 ft floor with a vestibule."
        ],
        [
          "First tent, two people",
          "Amazon Basics 2-Person Dome Tent",
          "Free-standing with welded seams."
        ],
        [
          "Solo backpacking",
          "Night Cat 1-2 Person Backpacking Tent",
          "4.4 lbs with taped seams."
        ],
        [
          "Couples on a budget",
          "Clostnature 2-Person Dome Tent",
          "X-pole dome with stakes."
        ],
        [
          "Festival or beach",
          "Wakeman 2-Person Pop-Up Tent",
          "2.75 lbs at the lowest price."
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
          "$20 to $40",
          "Wakeman 2-Person Pop-Up Tent or Clostnature 2-Person Dome Tent"
        ],
        [
          "$30 to $50",
          "Night Cat 1-2 Person Backpacking Tent or Amazon Basics 2-Person Dome Tent"
        ],
        [
          "$80 to $90",
          "Londtren 4-Person Pop-Up Tent"
        ]
      ]
    }
  },
  {
    "subheading": "Pop-Up vs Dome",
    "cards": [
      {
        "label": "Pop-up",
        "text": "Londtren 4-Person Pop-Up Tent and Wakeman 2-Person Pop-Up Tent open in seconds."
      },
      {
        "label": "Dome",
        "text": "Amazon Basics 2-Person Dome Tent, Night Cat 1-2 Person Backpacking Tent and Clostnature 2-Person Dome Tent use poles and take 1 to 4 minutes."
      }
    ],
    "note": "Choose Amazon Basics 2-Person Dome Tent for most buyers, and Londtren 4-Person Pop-Up Tent for casual car camping."
  },
  {
    "subheading": "By Weight",
    "table": {
      "headers": [
        "Weight",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lightest, 2.75 lbs",
          "Wakeman 2-Person Pop-Up Tent"
        ],
        [
          "4.4 lbs",
          "Night Cat 1-2 Person Backpacking Tent"
        ],
        [
          "Mid weight dome",
          "Clostnature 2-Person Dome Tent"
        ],
        [
          "Heavier family size",
          "Londtren 4-Person Pop-Up Tent"
        ]
      ]
    }
  },
  {
    "subheading": "For First-Time Campers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "a free-standing dome, a rainfly and a quick pitch"
      },
      {
        "label": "In this comparison",
        "text": "Amazon Basics 2-Person Dome Tent has a four-minute pitch, while Londtren 4-Person Pop-Up Tent opens from the bag."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you camp as a family, because Londtren 4-Person Pop-Up Tent gives the floor and vestibule. Night Cat 1-2 Person Backpacking Tent is worth it for taped seams on the trail."
      },
      {
        "label": "Save if",
        "text": "Save with Wakeman 2-Person Pop-Up Tent or Clostnature 2-Person Dome Tent for casual trips. Both cost under 40 dollars."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Choose the tent by trip",
    "explanation": "A solo hike, a festival and a car-camping weekend need different tents. Weight matters for hikers and floor size for car campers. Decide the trip first."
  },
  {
    "criterion": "Floor size and capacity",
    "explanation": "A 2-person label often means two sleeping pads with no gear room. A 9 ft floor fits 3 to 4 in bags. Look for floor dimensions."
  },
  {
    "criterion": "Free-standing design",
    "explanation": "A free-standing tent holds its shape without stakes. That helps on rocky or sandy ground. Check the listing for free-standing."
  },
  {
    "criterion": "Rain rating",
    "explanation": "A rating of PU 3000mm resists steady rain, and 2000mm suits showers. Seam sealing matters too. Check both."
  },
  {
    "criterion": "Weight",
    "explanation": "A backpacking tent should weigh under 5 lbs. A family tent can weigh 10 lbs or more. Check listed weight."
  },
  {
    "criterion": "Setup speed",
    "explanation": "Pop-up tents open in seconds. Domes take 4 minutes. Choose by patience."
  }
];

export const faq = [
  {
    "q": "What size camping tent do I need?",
    "a": "Choose a size one person larger than your group. A 2-person tent fits two pads with no gear. Add space for packs."
  },
  {
    "q": "What is the common first tent mistake?",
    "a": "Skipping the rain rating. A fly with no rating can leak. Look for a millimeter figure or taped seams."
  },
  {
    "q": "Is Night Cat worth it over Wakeman?",
    "a": "It costs about 14 dollars more and adds taped seams, a 3000mm rating and protected poles. Wakeman 2-Person Pop-Up Tent is cheaper and lighter. Pay for Night Cat for the rain protection."
  },
  {
    "q": "How do I set up a free-standing dome?",
    "a": "Thread the poles through the sleeves, flex them into the corners and clip the body. Add the fly and stake the corners. It takes about four minutes."
  },
  {
    "q": "How do I fold a pop-up tent?",
    "a": "Twist the frame into a flat circle, then fold it into thirds. Practice at home first. The bag tightens the coil."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Tent Stakes",
    "href": "/tents-shelter/best-tent-stakes"
  },
  {
    "title": "Best 4 Season Tent Under 200",
    "href": "/tents-shelter/best-4-season-tent-under-200"
  },
  {
    "title": "Best 4 Season Tent Under 300",
    "href": "/tents-shelter/best-4-season-tent-under-300"
  },
  {
    "title": "Best 4 Season Tent For Family",
    "href": "/tents-shelter/best-4-season-tent-for-family"
  }
];
