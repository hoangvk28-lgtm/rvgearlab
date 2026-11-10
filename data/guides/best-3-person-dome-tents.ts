export const guideSlug = "best-3-person-dome-tents";
export const guideTitle = "4 Best 3 Person Dome Tents in 2026";
export const metaTitle = "Best 3 Person Dome Tents in 2026";
export const metaDescription = "Best 3-person dome tents compared on floor size, headroom, waterproof rating and setup, for couples with gear and small families on car-camping trips.";
export const mainKeyword = "best 3 person dome tents";
export const introParagraphs = [
  "A three-person dome is the awkward middle size: two adults fit with gear and a small child makes three. The difference between models shows up in floor length, queen-bed fit and how much headroom the curved roof leaves.",
  "Four tents made the list. Two state a 3-person capacity outright, one is a 4-person dome that stays within one person of the target, and the fourth is a popular size-family model with a 3-person version."
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
    "id": "best-3-person-dome-tents-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Coleman Sundome Camping Tent with Rainfly",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31yLvb7cHKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7QHXVKJ?tag=rvgearlab-20",
    "description": "The Coleman Sundome is sold as a 2/3/4/6 person size family, and this listing is for the 3-person size. The interior fits one queen-size airbed, and WeatherTec welded corners, inverted seams, a ground vent and large windows form the build.\n\nNext to the CORE 3 it lists a concrete 10 minute pitch, thanks to clip-on poles and snag-free sleeves. Compared with the CAMPROS it costs more and adds welded corners that the CAMPROS does not list.\n\nIt is the pick for couples and small families who want a queen bed and a brand backed shell. Polyguard fabric packs into a carry bag.",
    "specs": [
      "3-person size, one queen bed",
      "WeatherTec welded corners",
      "Insta-Clip poles, 10 min pitch"
    ],
    "pros": [
      "Fits one queen air mattress",
      "Welded corners and inverted seams",
      "Large windows and ground vent",
      "Snag-free pole sleeves"
    ],
    "cons": [
      "No stated waterproof millimeters",
      "Pitching takes about 10 minutes"
    ],
    "bestFor": "Couples with a queen bed",
    "take": "A queen-bed dome with a weather system that is clearly documented.",
    "catch": "Be sure the 3-person size is selected, since the listing covers a family of sizes."
  },
  {
    "id": "best-3-person-dome-tents-2",
    "rank": 2,
    "badge": "Best Rain Rating",
    "name": "CORE 3 Person Dome Tent with Quick Setup",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31hWXKEYEZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DPNDRZVJ?tag=rvgearlab-20",
    "description": "The CORE 3-Person uses a ball-and-socket system for fast assembly and has a 42 inch center height. H2O Block technology on 1200mm fabric, a fully taped rainfly, sealed seams and zipped windows form the weather shell.\n\nIt has the only stated millimeter rating among the four and adds an overhead gear loft with a lantern hook. Against the Coleman it trades a lower roof for a documented rain rating, and the listing rates it for one person with gear or up to three without.\n\nIt suits campers who face rain and want a fly with taped seams. The gear loft keeps small items off the floor.",
    "specs": [
      "Three person, 42 in center",
      "1200mm fabric, taped fly",
      "Ball-and-socket quick setup"
    ],
    "pros": [
      "1200mm rating and taped fly",
      "Overhead loft with lantern hook",
      "Lower vents and mesh ceiling",
      "Quick ball-and-socket assembly"
    ],
    "cons": [
      "Honest fit is one person with gear",
      "Low 42 inch center height"
    ],
    "bestFor": "Rainy trips",
    "take": "The weather-first pick, with the strongest documented rain shell here.",
    "catch": "The listing sets comfort at one person with gear, so size up for two adults."
  },
  {
    "id": "best-3-person-dome-tents-3",
    "rank": 3,
    "badge": "Best Budget",
    "name": "CAMPROS CP 3 Person Tent",
    "price": "$47.48",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31jbfgKc4TL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G2C6CRHZ?tag=rvgearlab-20",
    "description": "The CAMPROS CP 3-Person is a 7 ft by 7 ft dome with a 47 inch center height that fits one queen mattress. A coated fabric with sealed seams and a waterproof strip handles weather, and mesh covers the top and doors.\n\nIt is the lowest priced pick, and the 7 by 7 ft floor is squarer than the Amazon Basics. Where the Coleman lists welded corners, this tent lists a gear loft with a lantern hook and mesh pockets.\n\nIt suits budget campers who want a queen-bed fit and a loft. Two people can pitch it in about 5 minutes.",
    "specs": [
      "7 x 7 ft, 47 in center",
      "Fits one queen mattress",
      "Gear loft, mesh pockets"
    ],
    "pros": [
      "Lowest price of the four",
      "Gear loft with lantern hook",
      "Sealed seams and waterproof strip",
      "Mesh top and doors"
    ],
    "cons": [
      "No millimeter rating listed",
      "Two people recommended to pitch"
    ],
    "bestFor": "Budget couples",
    "take": "The cheapest way to get a queen-bed floor and a loft in a three-person dome.",
    "catch": "The coating is described only as high-tech, so check the fly seams before heavy rain."
  },
  {
    "id": "best-3-person-dome-tents-4",
    "rank": 4,
    "badge": "Best Roomy Option",
    "name": "Amazon Basics 4-Person Camping Tent with Quick Setup",
    "price": "$76.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31mxD85jaYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B077Y8DLSN?tag=rvgearlab-20",
    "description": "The Amazon Basics 4-person dome has a 9 ft by 7 ft floor and a 48 inch center height. Welded seams, a removable rainfly, a back window with a cool-air port and shock-corded poles listed at under 6 minutes make up the build.\n\nIt is a four-person dome, one person above the target, so a three-person group gets more floor than in the CAMPROS. Against the CAMPROS it adds two feet of floor length and a back window with a cool-air port.\n\nIt suits three adults who prefer room over weight, or couples who want space for bags. The compact carry bag holds the tent, poles and stakes.",
    "specs": [
      "9 x 7 ft, 48 in center",
      "Welded seams, removable fly",
      "Pitches in under 6 minutes"
    ],
    "pros": [
      "Biggest floor of the four",
      "Shock-corded poles pitch fast",
      "Back window with cool-air port",
      "Interior mesh pocket"
    ],
    "cons": [
      "Rated for four, not three",
      "No millimeter rating listed"
    ],
    "bestFor": "Roomy three-person use",
    "take": "An extra person of floor for three campers who hate being squeezed.",
    "catch": "A four-person label is a no-gear count, so it is a roomy three at best."
  }
];

export const howWeEvaluated = [
  {
    "title": "Floor size",
    "description": "Floors from 7 x 7 ft to 9 x 7 ft were compared against queen-bed fit."
  },
  {
    "title": "Real three-person space",
    "description": "Stated counts with and without gear set honest capacity."
  },
  {
    "title": "Headroom",
    "description": "Center heights from 42 to 48 inches were compared for sitting comfort."
  },
  {
    "title": "Rain and seams",
    "description": "Millimeter ratings, taped seams and welded corners were weighed."
  },
  {
    "title": "Pitch speed",
    "description": "Listed setup times and pole systems were compared."
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
    "subheading": "By Camping Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Couple with a queen bed",
          "Coleman Sundome 3-Person Dome",
          "Queen airbed fit, welded corners."
        ],
        [
          "Wet climate",
          "CORE 3-Person Dome",
          "1200mm fabric, taped fly."
        ],
        [
          "Tight budget",
          "CAMPROS CP 3-Person Dome",
          "Lowest price, queen fit."
        ],
        [
          "Three adults, want space",
          "Amazon Basics 4-Person Dome",
          "9 x 7 ft floor."
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
          "$40 to $80",
          "CAMPROS CP 3-Person Dome or Amazon Basics 4-Person Dome"
        ],
        [
          "$70 to $100",
          "CORE 3-Person Dome or Coleman Sundome 3-Person Dome"
        ]
      ]
    }
  },
  {
    "subheading": "Documented Rain Rating vs Roomier Floor",
    "cards": [
      {
        "label": "Documented shell",
        "text": "CORE 3-Person Dome and Coleman Sundome 3-Person Dome state seam and fly details. They give less floor."
      },
      {
        "label": "Roomy floor",
        "text": "Amazon Basics 4-Person Dome and CAMPROS CP 3-Person Dome lead on space and price. Their weather specifics are lighter."
      }
    ],
    "note": "Pick CORE 3-Person Dome for rain and Amazon Basics 4-Person Dome for space."
  },
  {
    "subheading": "By Floor",
    "table": {
      "headers": [
        "Floor",
        "Recommended pick"
      ],
      "rows": [
        [
          "Biggest, 9 x 7 ft",
          "Amazon Basics 4-Person Dome"
        ],
        [
          "7 x 7 ft, queen fit",
          "CAMPROS CP 3-Person Dome"
        ],
        [
          "Queen airbed, family sizes",
          "Coleman Sundome 3-Person Dome"
        ]
      ]
    }
  },
  {
    "subheading": "For Couples With a Queen Mattress Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "a floor that fits a 60 x 80 inch mattress and a rain fly"
      },
      {
        "label": "In this comparison",
        "text": "Coleman Sundome 3-Person Dome lists a one-queen fit, and CAMPROS CP 3-Person Dome gives the same fit for less."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you camp in wet climates, because CORE 3-Person Dome prints the 1200mm rating and taped fly, and Coleman Sundome 3-Person Dome adds welded corners."
      },
      {
        "label": "Save if",
        "text": "Save with CAMPROS CP 3-Person Dome. It is the lowest priced and keeps a queen-bed floor and a loft."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Queen-bed fit",
    "explanation": "A queen air mattress is 60 by 80 inches, so a 7 by 7 ft floor fits one with narrow side space. A single queen bed is the best test for a three-person dome. Check whether the listing states a queen fit."
  },
  {
    "criterion": "Headroom",
    "explanation": "A dome's center height is the only place you can sit upright. At 42 to 48 inches you sit and change on the bed. Check the center-height figure and expect crouching at the sides."
  },
  {
    "criterion": "Waterproof rating",
    "explanation": "A stated millimeter rating on the fly shows how the fabric performs in rain. Welded corners and inverted seams also help. Check the listing for both the rating and the seam description."
  },
  {
    "criterion": "Honest capacity",
    "explanation": "A three-person rating usually counts bodies side by side without bags. With gear, two adults is realistic. Read both numbers when the listing gives them."
  },
  {
    "criterion": "Setup time",
    "explanation": "A 5 to 10 minute pitch is typical for a two-person crew. Continuous sleeves and clip poles save minutes. Check the stated pitch time and the number of people it assumes."
  }
];

export const faq = [
  {
    "q": "Can three adults sleep in a 3-person dome?",
    "a": "Only side by side in bags and with minimal gear. A realistic count is two adults and one small child. Pick the 4-person Amazon Basics for roomier use."
  },
  {
    "q": "What mistake do campers make when buying a 3-person tent?",
    "a": "They assume the label includes gear. It rarely does. Subtract one person for bags and packs."
  },
  {
    "q": "Is the Coleman worth over the CAMPROS?",
    "a": "It adds welded corners, inverted seams and brand support at a higher cost. The CAMPROS wins on price. Choose Coleman for weather."
  },
  {
    "q": "How do I pitch a 3-person dome?",
    "a": "Spread the floor, run the poles through the sleeves and flex them. Clip the fly and stake the corners. Two people can do it in about 5 minutes."
  },
  {
    "q": "How do I keep condensation down?",
    "a": "Open the vents and the fly flaps and avoid camping in a hollow. Wipe the walls in the morning. Pitch the fly taut so it does not touch the mesh."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
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
  },
  {
    "title": "Best 4 Season Tent Under 300",
    "href": "/tents-shelter/best-4-season-tent-under-300"
  }
];
