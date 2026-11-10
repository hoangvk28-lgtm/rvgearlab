export const guideSlug = "best-4-person-truck-tents";
export const guideTitle = "3 Best 4 Person Truck Tents in 2026";
export const metaTitle = "Best 4 Person Truck Tents in 2026";
export const metaDescription = "Best 4-person truck tent options compared: one adjustable bed tent and two Napier 4-person ground tents that attach to a Napier truck tent.";
export const mainKeyword = "best 4 person truck tents";
export const introParagraphs = [
  "Few listings target a 4 person truck tent, and a standard bed tent will not sleep four. Only one stand-alone truck tent here carries a 4 person title, and its own bullets describe two adults.",
  "Two Napier link tents add room for up to four more sleepers on the ground when paired with a Napier truck tent, sold separately. Measure your bed and check your cab and bed configuration, and read each listing for what it really attaches to."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/tents-lakeside-campsite.webp";
export const heroImageAlt = "Colorful tents pitched beside a misty mountain lake";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-4-person-truck-tents-1",
    "rank": 1,
    "badge": "Best Stand-Alone Option",
    "name": "EighteenTek Adjustable Pickup Truck Tent Pop Up",
    "price": "$58.50",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/416amFSCoiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQX75WG6?tag=rvgearlab-20",
    "description": "The EighteenTek is an adjustable pop-up tent for 6 to 8.8 foot beds with a 4 person title. Its bullets describe room for up to two adults and over 6 feet of sleeping length, and it can stand on the ground without a truck.\n\nIt is the only stand-alone truck tent here and the lowest priced. The Napier links need a truck tent from the same maker, while this one works alone.\n\nIt suits buyers wanting a single shelter for the bed and the ground. A PU2000mm coating and a large double-sided zipper door come with it.",
    "specs": [
      "Adjusts to 6 to 8.8 ft beds",
      "PU2000mm, PE floor",
      "Two mesh windows"
    ],
    "pros": [
      "Length adjusts for many beds",
      "Works as a ground tent",
      "Double-sided zipper door",
      "Lowest price here"
    ],
    "cons": [
      "Real capacity is two adults",
      "Basic PU2000mm coating"
    ],
    "bestFor": "Campers who want a flexible tent",
    "take": "A cheap adjustable tent that works on the bed or on the ground.",
    "catch": "The four person title overstates the space, so plan for two adults."
  },
  {
    "id": "best-4-person-truck-tents-2",
    "rank": 2,
    "badge": "Best 4-Person Add-On",
    "name": "Napier Backroadz Link",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31O4IbVwmWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZ4FKNDV?tag=rvgearlab-20",
    "description": "The Napier Backroadz Link is an 8 by 8 foot ground tent with an attachment sleeve that connects to a Napier truck tent. It adds room for up to four more people, uses a rainfly, taped seams and storm flaps in windows and doors, and gives over 6.5 feet of headroom.\n\nIt gives the most real four-person space in this group when paired with a Napier truck tent. Compared with the Sportz Link it lists storm flaps on doors as well as windows.\n\nIt suits families who already own a Napier truck tent and want to expand sleeping room. A two-pole design sets up in under 10 minutes.",
    "specs": [
      "8x8 ft, sleeps four more",
      "Two-pole setup, 10 minutes",
      "Storm flaps on doors"
    ],
    "pros": [
      "Adds room for up to four people",
      "Over 6.5 ft headroom",
      "Taped seams and rainfly",
      "Three large windows"
    ],
    "cons": [
      "Truck tent not included",
      "Higher price than the EighteenTek"
    ],
    "bestFor": "Families with a Napier truck tent",
    "take": "The expansion tent for a Napier setup, with real room for four.",
    "catch": "It is useless without a compatible Napier truck tent."
  },
  {
    "id": "best-4-person-truck-tents-3",
    "rank": 3,
    "badge": "Best Alternate Link",
    "name": "Napier Sportz Link",
    "price": "$199.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31SexQhJHXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07CTFS7BQ?tag=rvgearlab-20",
    "description": "The Napier Sportz Link is the Model 51000 version of the 8 by 8 foot link tent for Napier pickup truck tents. It has a two-pole design, a rainfly, taped seams, storm flaps in the windows and more than 6.5 feet of headroom.\n\nIt matches the Backroadz Link in size and setup and differs in its blue and gray styling and fabric details. It is a few cents cheaper and a good fit with Napier Sportz-series truck tents.\n\nIt suits campers who own a Sportz truck tent and want a matched color and fit. A large entry door opens the front.",
    "specs": [
      "8x8 ft, up to 4 people",
      "Two-pole setup",
      "Blue and gray, Model 51000"
    ],
    "pros": [
      "Room for up to four people",
      "Matches Napier Sportz styling",
      "Large entry door",
      "Three windows for airflow"
    ],
    "cons": [
      "Truck tent sold separately",
      "Storm flaps are on windows only"
    ],
    "bestFor": "Napier Sportz owners",
    "take": "The Sportz-series match for the same 8 by 8 foot add-on room.",
    "catch": "It also needs a Napier truck tent, which is not included."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity claim",
    "description": "What each listing really sleeps."
  },
  {
    "title": "Stand-alone use",
    "description": "Whether it works without a truck tent."
  },
  {
    "title": "Size",
    "description": "Bed range or footprint."
  },
  {
    "title": "Weather",
    "description": "Coating and flaps."
  },
  {
    "title": "Compatibility",
    "description": "What it attaches to."
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
    "subheading": "By What You Own",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "No truck tent yet",
          "EighteenTek Adjustable Truck Tent",
          "Works stand-alone."
        ],
        [
          "Napier truck tent, want more room",
          "Napier Backroadz Link",
          "Storm flaps on doors."
        ],
        [
          "Napier Sportz truck tent",
          "Napier Sportz Link",
          "Model 51000."
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
          "$50 to $60",
          "EighteenTek Adjustable Truck Tent"
        ],
        [
          "$190 to $200",
          "Napier Sportz Link"
        ],
        [
          "$190 to $200",
          "Napier Backroadz Link"
        ]
      ]
    }
  },
  {
    "subheading": "Stand-Alone vs Add-On",
    "cards": [
      {
        "label": "Stand-alone",
        "text": "Works by itself. The EighteenTek Adjustable Truck Tent."
      },
      {
        "label": "Add-on",
        "text": "Needs a Napier truck tent. The Napier Backroadz Link and Napier Sportz Link."
      }
    ],
    "note": "If you do not own a Napier truck tent, start with the EighteenTek Adjustable Truck Tent."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price",
          "EighteenTek Adjustable Truck Tent"
        ],
        [
          "Add-on, mid price",
          "Napier Sportz Link"
        ],
        [
          "Add-on, premium",
          "Napier Backroadz Link"
        ]
      ]
    }
  },
  {
    "subheading": "For Four Sleepers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A ground tent footprint of 8 by 8 feet and over 6.5 feet of headroom."
      },
      {
        "label": "In this comparison",
        "text": "The Napier Backroadz Link and Napier Sportz Link each add room for up to four people."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Napier Backroadz Link if you already have a Napier truck tent and want real four-person room."
      },
      {
        "label": "Save if",
        "text": "Save with the EighteenTek Adjustable Truck Tent."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Capacity labels can mislead",
    "explanation": "A 4 person title on a bed tent may describe the bed or the maker's hope, not the sleepers. Read what the bullets say about adults. Look for a floor size in feet to judge real space."
  },
  {
    "criterion": "Attachment compatibility",
    "explanation": "A link tent only fits tents from its own maker, and a Napier link needs a Napier truck tent. Check that your truck tent is a Napier model. Read the listing for the phrase attaches to Napier."
  },
  {
    "criterion": "Stand-alone flexibility",
    "explanation": "A tent that works on the ground can leave the truck, which helps if the truck is away or you want a basecamp. Link tents are tied to the truck tent. Look for stand-alone wording."
  },
  {
    "criterion": "Headroom",
    "explanation": "Over 6.5 feet lets adults stand up inside a ground tent, and a bed tent offers far less. Headroom matters for changing clothes. Compare stated heights."
  },
  {
    "criterion": "Total cost of the setup",
    "explanation": "A link tent costs extra on top of a truck tent, so count both when comparing with a stand-alone tent. Add the prices before deciding. Check what is included in each listing."
  }
];

export const faq = [
  {
    "q": "Is there a real 4-person truck tent?",
    "a": "Not in this list. The EighteenTek Adjustable Truck Tent carries the title, but its bullets describe two adults. The Napier links add the real four-person space."
  },
  {
    "q": "What mistake do buyers make?",
    "a": "Buying a link tent without a Napier truck tent. The Napier Backroadz Link will not attach to other brands. Check the base tent first."
  },
  {
    "q": "Is the add-on worth it?",
    "a": "If you own a Napier tent, yes. The Napier Sportz Link adds room for up to four people. Without one the EighteenTek Adjustable Truck Tent is simpler."
  },
  {
    "q": "How do I set up a link tent?",
    "a": "Pitch the two poles, attach the sleeve to the truck tent and stake the corners. The Napier Backroadz Link takes under 10 minutes. Add the rainfly last."
  },
  {
    "q": "How do I store these tents?",
    "a": "Dry fully, then stuff loosely in the bag. Wipe zippers and keep the EighteenTek Adjustable Truck Tent poles together. Check seams before the next trip."
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
