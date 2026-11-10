export const guideSlug = "best-hanging-tent-fans";
export const guideTitle = "3 Best Hanging Tent Fans in 2026";
export const metaTitle = "Best Hanging Tent Fans in 2026";
export const metaDescription = "Best hanging tent fans compared: three battery fans that hang from a tent loop, hook or canopy frame, sized from a one-person dome to a big pop-up.";
export const mainKeyword = "best hanging tent fans";
export const introParagraphs = [
  "A hanging fan works from the highest point of the tent, so the air falls over everyone and the floor stays clear for sleeping pads and bags. What separates the three here is size, since a 31.5-inch ceiling fan and a hook-on lantern fan are very different loads for a tent frame.",
  "I sorted the three by how they hang, how much of the shelter they cool and how long the battery can carry the fan. Each pick is written for one tent type, from a pop-up canopy down to a two-person dome."
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
    "id": "best-hanging-tent-fans-1",
    "rank": 1,
    "badge": "Best for Big Canopies",
    "name": "Gazebo Outdoor Ceiling Fan Light 31.5''",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31L6nZKlHrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGHPZLN7?tag=rvgearlab-20",
    "description": "The SHUNLEE is a 31.5-inch ceiling fan with five lengthened blades, four speeds and a 40000mAh battery. It carries a dimmable light with adjustable color temperature, a hanging hook and a remote that mirrors the body buttons.\n\nIt moves far more air than the FIALAME and the Coolice because its blade span is far wider. A memory function and 2, 3 and 5 hour timers keep its settings between sessions.\n\nPick it for a pop-up canopy, a gazebo or a large family tent where a small fan would only cool one corner. It earns its place when the frame can take the weight.",
    "specs": [
      "40000mAh battery",
      "31.5-inch, five blades",
      "Dimmable light, remote"
    ],
    "pros": [
      "Wide blade span cools a whole canopy",
      "Four speeds with memory function",
      "Remote and body buttons both work",
      "Timers for 2, 3 and 5 hours"
    ],
    "cons": [
      "Biggest fan of the three, so a bigger hang load",
      "Most expensive of the three"
    ],
    "bestFor": "Pop-up canopies and big family tents",
    "take": "The one to hang when you are cooling a big canopy, not a single bunk.",
    "catch": "A 31.5-inch fan needs a strong overhead point and is overkill in a two-person dome."
  },
  {
    "id": "best-hanging-tent-fans-2",
    "rank": 2,
    "badge": "Best Mid-Size Ceiling Fan",
    "name": "Tent Fan",
    "price": "$32.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31JvPPBch4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GX73FQVJ?tag=rvgearlab-20",
    "description": "The FIALAME is an 18-inch ceiling fan with a 15600mAh battery, three speeds, three LED light settings and an LED display. The listing gives 8, 13 and 25 hours of runtime at low, medium and high.\n\nIt sits between the SHUNLEE and the Coolice in size, so it covers a cabin tent without the oversize frame load of the biggest fan. The three detachable blades go on in under a minute, and the remote runs the 2, 4, 6 and 8 hour timers from a sleeping bag.\n\nIt suits a four to six person tent where one hanging fan should handle both night cooling and a soft light. The runtime ladder makes it easy to plan the night.",
    "specs": [
      "15600mAh, 8 to 25 hours",
      "Three speeds, LED display",
      "Remote, 2/4/6/8h timer"
    ],
    "pros": [
      "Runtime figures given for each speed",
      "Detachable blades pack down",
      "Remote controls fan, light and timer",
      "Three brightness settings"
    ],
    "cons": [
      "Smaller airflow than the 31.5-inch SHUNLEE",
      "Blades must be fitted at every setup"
    ],
    "bestFor": "Four to six person cabin tents",
    "take": "A mid-size fan with honest runtime numbers, good for a cabin tent.",
    "catch": "It will not cool a gazebo-size space the way the big SHUNLEE can."
  },
  {
    "id": "best-hanging-tent-fans-3",
    "rank": 3,
    "badge": "Best Hook-On Fan",
    "name": "Camping Fan with Remote Control",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Ha9f+oyLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BS6P2M1N?tag=rvgearlab-20",
    "description": "The Coolice is a compact camping fan with a 12000mAh battery, three speeds and a built-in foldable hook. A nine-bead LED lantern is rated up to 600 lux, and the head turns 360 degrees both ways.\n\nIt hangs from a loop, a pole or a hanger rather than from a ceiling hub, which is simpler than either bigger fan. A remote with timing and USB-C 5V/2A charging round it out at the lowest price of the three.\n\nIt suits one or two campers in a small dome who want to aim air at the sleeping bag. Pack it in a pocket and hang it on the first tent loop you find.",
    "specs": [
      "12000mAh, 65-hour claim",
      "600 lux lantern, 3 speeds",
      "Foldable hook, 360 degree head"
    ],
    "pros": [
      "Hooks onto any loop or pole",
      "Aimable head sends air where needed",
      "Lantern and remote built in",
      "Lowest price of the three"
    ],
    "cons": [
      "Moves less air than the ceiling fans",
      "Only three speeds"
    ],
    "bestFor": "Solo and two-person tents",
    "take": "The simple hook-on fan for a small tent, with a lantern thrown in.",
    "catch": "The 65-hour figure applies to low speed, so expect far less at full power."
  }
];

export const howWeEvaluated = [
  {
    "title": "Hang point",
    "description": "I looked at how each fan mounts and how much weight a tent loop, pole or hub has to carry."
  },
  {
    "title": "Coverage",
    "description": "Blade span and speed counts were compared against the tent sizes each fan is aimed at."
  },
  {
    "title": "Battery and runtime",
    "description": "Capacity and any stated runtime per speed were compared, treating the best figure as a low-speed claim."
  },
  {
    "title": "Light and remote",
    "description": "Built-in light output, timers and remote control were noted as night-use features."
  },
  {
    "title": "Pack size",
    "description": "Each fan was compared on how it stows, including detachable blades."
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
    "subheading": "By Tent Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Large canopy or gazebo",
          "SHUNLEE 31.5-Inch Fan",
          "Widest blades of the three."
        ],
        [
          "Four to six person cabin tent",
          "FIALAME 18-Inch Fan",
          "Mid-size blades with runtimes listed per speed."
        ],
        [
          "Two-person dome",
          "Coolice 12000mAh Fan",
          "Small hook fan that aims at the bag."
        ],
        [
          "One camper on a small bunk",
          "Coolice 12000mAh Fan",
          "Fast to hang and easy to point."
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
          "$20 to $30",
          "Coolice 12000mAh Fan"
        ],
        [
          "$30 to $40",
          "FIALAME 18-Inch Fan"
        ],
        [
          "$70 to $80",
          "SHUNLEE 31.5-Inch Fan"
        ]
      ]
    }
  },
  {
    "subheading": "Ceiling hub vs hook-on",
    "cards": [
      {
        "label": "Ceiling hub fans",
        "text": "The SHUNLEE 31.5-Inch Fan and FIALAME 18-Inch Fan hang from a central point and push air down across the room, which suits shared tents and gives even cooling."
      },
      {
        "label": "Hook-on fans",
        "text": "The Coolice 12000mAh Fan clips onto a loop or pole and its head turns to aim air, so it cools one person very well and a room less so."
      }
    ],
    "note": "Most family campers should default to the FIALAME 18-Inch Fan unless the tent is a canopy, where the SHUNLEE earns its size."
  },
  {
    "subheading": "By Night Routine",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Set a timer and sleep",
          "SHUNLEE 31.5-Inch Fan"
        ],
        [
          "See each speed's runtime",
          "FIALAME 18-Inch Fan"
        ],
        [
          "Want a bright lantern too",
          "Coolice 12000mAh Fan"
        ]
      ]
    }
  },
  {
    "subheading": "For Pop-Up Canopies Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A wide blade span, dimmable light and a remote you can use from a chair."
      },
      {
        "label": "In this comparison",
        "text": "The SHUNLEE 31.5-Inch Fan is the one built for that: five long blades and a 40000mAh battery cover a canopy where the other two would only reach part of it."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the SHUNLEE 31.5-Inch Fan if you camp under a canopy or in a big tent and want one fan to cool the whole space."
      },
      {
        "label": "Save if",
        "text": "Save with the Coolice 12000mAh Fan if you sleep in a small dome, since the FIALAME 18-Inch Fan adds size you cannot use there."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Overhead mounting point",
    "explanation": "A hanging fan loads one point of the tent with its full weight, so the strength of the hub or loop matters. A 31.5-inch ceiling fan carries more weight than a lantern fan on a hook. Look for the fan's weight in the listing and compare it with what the tent's ridge or hub is built to hold."
  },
  {
    "criterion": "Blade span versus tent size",
    "explanation": "Bigger blades move more air at lower speeds, which also means a quieter night. A small fan on a big tent only cools the corner under it. Match blade diameter to the number of people, and treat the listing's tent suggestions as a hint, not a measurement."
  },
  {
    "criterion": "Runtime per speed",
    "explanation": "A battery claim is almost always the low-speed figure, so a 65-hour claim may fall to a handful of hours on high. Runtime listings that give three figures, one per speed, are the honest ones. Check the number for the speed you will actually use at midnight."
  },
  {
    "criterion": "Remote and timer",
    "explanation": "A remote lets you change speed without leaving your bag, and a timer shuts the fan off after you fall asleep. Timers of 2 to 8 hours are common. Look for whether the remote also controls the light, since that saves a second reach."
  },
  {
    "criterion": "Blade handling and storage",
    "explanation": "Detachable blades pack flat and survive a bin better than fixed ones, yet they add a fitting step every night. A fixed head with a hook skips that. Check the listing to see whether the blades come off and how long assembly takes."
  },
  {
    "criterion": "Light quality at night",
    "explanation": "Light on the fan saves carrying a lantern, and adjustable color temperature lets you use warm white for sleeping. Brightness steps matter more than a top lumen figure. Look for dimming and for whether the light runs without the fan."
  }
];

export const faq = [
  {
    "q": "What size of tent can a hanging fan realistically cool?",
    "a": "It depends on blade span. A 31.5-inch fan like the SHUNLEE suits a canopy or a large cabin tent, an 18-inch fan like the FIALAME suits a medium cabin, and a small hook fan like the Coolice suits a dome. Think of the fan as cooling the people under it, not the whole shelter."
  },
  {
    "q": "Will a hanging fan damage my tent loop?",
    "a": "It can if the fan is heavy and the loop is thin. Spread the weight across two loops or hang from a pole when the fan is large. The FIALAME and Coolice are lighter loads than the SHUNLEE, so start with the smaller ones on lighter tents."
  },
  {
    "q": "Is a ceiling fan worth it over a clip-on fan?",
    "a": "If more than one person is in the tent, yes. Overhead air moves evenly across the floor and keeps cords and fan bodies off the sleeping area. A clip-on or hook fan wins only when one person wants air aimed at their bag."
  },
  {
    "q": "How do I hang one in a tent with no center hub?",
    "a": "Use the foldable hook or a carabiner on a ridge loop, a pole sleeve or the gear loft strap. Check that the fan swings clear of the fabric at its highest speed before you sleep. A second line to a pole stops swaying."
  },
  {
    "q": "How do I keep the battery from running flat overnight?",
    "a": "Run the lowest speed that keeps you comfortable and use the timer, since most runtime figures are low-speed claims. Charge the fan during the day from a power bank or car. Keep it out of direct sun in a closed car."
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
