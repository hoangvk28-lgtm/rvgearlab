export const guideSlug = "best-camping-ceiling-fans";
export const guideTitle = "6 Best Camping Ceiling Fans in 2026";
export const metaTitle = "Best Camping Ceiling Fans in 2026";
export const metaDescription = "Best camping ceiling fans compared on blade span, battery or plug power, light and remote for tents, gazebos and canopies.";
export const mainKeyword = "best camping ceiling fans";
export const introParagraphs = [
  "A camping ceiling fan hangs from the center pole of a tent or the roof of a gazebo and pushes air down over everyone beneath it. The useful numbers are blade span, how it is powered and whether it is rated for rain.",
  "Six fans made the list, from a solar-charged 20-inch unit to a plug-in 28-inch gazebo fan and a small USB fan. They were sorted by listed battery size, blade diameter, power source, remote control and weather rating."
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
    "id": "best-camping-ceiling-fans-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "21\" Portable Ceiling Fan with Light & Remote",
    "price": "$54.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YIf3scW4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GFW1X5BZ?tag=rvgearlab-20",
    "description": "The Ausic is a 21-inch portable ceiling fan with a 20,400mAh battery, a brushless motor, a detachable lantern design and a remote that works from up to 40 ft with 360 degree coverage. It lists 40% more LED bulbs than typical outdoor ceiling fans.\n\nIt has a larger battery than the 15,600mAh Coycomn and a longer remote range than most, and it costs less than the Lumtide. The detachable part means the light can leave the fan and act as a lantern.\n\nIt suits campers with a canopy, gazebo or big tent who want one hanging unit with light and a remote. Patio and cruise use are also listed.",
    "specs": [
      "21-inch, 20,400mAh battery",
      "Brushless motor, 40 ft remote",
      "Detachable lantern design"
    ],
    "pros": [
      "Large 20,400mAh battery",
      "Remote works up to 40 ft",
      "Detachable lantern doubles as a light",
      "Brushless motor runs quietly"
    ],
    "cons": [
      "Weatherproof rating is not stated",
      "Mid-high price tier"
    ],
    "bestFor": "Canopy and gazebo cooling",
    "take": "A well-rounded battery ceiling fan with a long-range remote and a lantern.",
    "catch": "No waterproof rating is named, so keep it under cover."
  },
  {
    "id": "best-camping-ceiling-fans-2",
    "rank": 2,
    "badge": "Best Solar Option",
    "name": "Lumtide Solar Ceiling Fan 20''",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UYHtdssgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWVNX4YQ?tag=rvgearlab-20",
    "description": "The Lumtide is a 20-inch ceiling fan with a 20,000mAh battery and a 30W solar panel, four speeds, and a dimmable light from 3000K to 6000K with stepless dimming from 10 to 100 percent. It uses a 2.4G wireless remote with 360 degree coverage and detachable blades for storage.\n\nIt is the only pick here that can recharge itself from the sun, which sets it apart from the Ausic. The Type-C port can also power small gadgets.\n\nIt suits campers on multi-day trips who want to recharge from solar. It hangs, mounts or sits on a surface with the included hook.",
    "specs": [
      "20-inch, 20,000mAh, 30W solar",
      "3000K to 6000K dimmable light",
      "2.4G remote, detachable blades"
    ],
    "pros": [
      "Solar panel charges it at camp",
      "Dimmable light with three color temperatures",
      "Detachable blades pack small",
      "Type-C port powers small devices"
    ],
    "cons": [
      "Listing says it is not waterproof",
      "Priciest fan in this list"
    ],
    "bestFor": "Multi-day solar camping",
    "take": "The only ceiling fan here that charges itself from the sun.",
    "catch": "It is not waterproof, so keep it under shelter and indoors in rain."
  },
  {
    "id": "best-camping-ceiling-fans-3",
    "rank": 3,
    "badge": "Best Large Plug-In",
    "name": "LANMEL Outdoor Gazebo Ceiling Fan with Light and Remote",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51OyQI2-+AL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G8F4JXJH?tag=rvgearlab-20",
    "description": "The LANMEL is a 28-inch ceiling fan with a 16.5 ft plug-in cord, hook and screws, a 6-speed remote, a 3000K to 6000K light and timing. It has an IP65 waterproof rating for rain and snow and is listed for gazebos, pergolas, patios and garages.\n\nIt has the widest blades here by a margin, and it is the only weather-rated pick. Against the battery fans it needs an outlet or generator, which the Ausic does not.\n\nIt suits campers with a power source who want a big, rain-ready fan over a picnic area. The listing says it installs without an electrician.",
    "specs": [
      "28-inch, IP65 waterproof",
      "16.5 ft plug-in cord",
      "6 speeds, remote, light"
    ],
    "pros": [
      "Widest blades in the list",
      "IP65 rating handles rain and snow",
      "Six-speed remote",
      "Light with three color temperatures"
    ],
    "cons": [
      "Needs a plug-in power source",
      "Not a cordless camping fan"
    ],
    "bestFor": "Powered campsite and gazebo cooling",
    "take": "A big, weather-rated fan for sites with power.",
    "catch": "It is corded, so it needs an outlet, generator or power station."
  },
  {
    "id": "best-camping-ceiling-fans-4",
    "rank": 4,
    "badge": "Best Value Battery",
    "name": "Upgraded Large Size 18-Inch Rechargeable Camping Ceiling Fan with LED Light",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31MRXZSsRkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GV5YR6Z6?tag=rvgearlab-20",
    "description": "The Coycomn is an 18-inch camping ceiling fan with a 15,600mAh battery that the listing puts at up to 25 hours of cooling. It has a built-in LED light, quiet operation and detachable blades for storage.\n\nIt sits below the Ausic on battery size and above the Roodike on runtime freedom, because it needs no cord. It costs less than half the Ausic.\n\nIt suits tent and RV campers who want a quiet fan overhead with light for cooking or reading. The listing frames it for gazebo and night fishing use.",
    "specs": [
      "18-inch, 15,600mAh",
      "Up to 25 hours listed",
      "Built-in LED, detachable blades"
    ],
    "pros": [
      "Cordless with up to 25 hours listed",
      "Quiet operation named",
      "Built-in LED camping light",
      "Blades detach for storage"
    ],
    "cons": [
      "Smaller battery than the Ausic",
      "Weather rating is not stated"
    ],
    "bestFor": "Quiet tent ceiling fan",
    "take": "A cordless 18-inch fan at a fair price with light.",
    "catch": "No waterproof rating is listed, so avoid direct rain."
  },
  {
    "id": "best-camping-ceiling-fans-5",
    "rank": 5,
    "badge": "Best Compact Combo",
    "name": "DUKUSEEK Tent Ceiling Fans for Camping Hanging",
    "price": "$13.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41GJK-GMfoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09WXZYT87?tag=rvgearlab-20",
    "description": "The DUKUSEEK combines a camping lantern, a hanging fan and an emergency power bank in one small unit. It uses a brushless motor, a remote with timer mode, a high-strength ABS body and lists CE and FCC certification.\n\nIt has the lowest price here and is the most compact of the battery fans. It gives up the 20 inch blades of the Lumtide for a small tent-size fan.\n\nIt suits solo and two-person tents where a large fan would not fit. The power bank function tops up a phone.",
    "specs": [
      "3-in-1 fan, lantern, power bank",
      "Brushless motor, remote, timer",
      "CE and FCC listed"
    ],
    "pros": [
      "Three functions in one small unit",
      "Remote with timer mode",
      "CE and FCC certification listed",
      "Lowest price in the list"
    ],
    "cons": [
      "Battery size is not stated",
      "Small blades move less air"
    ],
    "bestFor": "Solo tent overhead fan",
    "take": "A compact, cheap hanging fan for small tents.",
    "catch": "Battery size and fan diameter are not stated on the listing."
  },
  {
    "id": "best-camping-ceiling-fans-6",
    "rank": 6,
    "badge": "Best USB Pick",
    "name": "Roodike 17\" Portable USB Ceiling Fan for Camping Tent Gazebo RV Cruise",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31RWclZgsRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSVN13HM?tag=rvgearlab-20",
    "description": "The Roodike is a 17-inch USB ceiling fan with 5 blades and a 330 RPM motor listed at 36 dB. It comes with a 13.2 ft UL-listed cord with an on/off button, and the listing says 5W of power use.\n\nIt is the only pick that runs straight off a power bank, car charger or laptop, and it costs little. It has no battery of its own, unlike the Coycomn.\n\nIt suits campers who already carry a power bank and want a quiet, low-draw fan for a tent or RV. The listing notes it is small for a ceiling fan.",
    "specs": [
      "17-inch, 5 blades, 330 RPM",
      "36 dB, 5W power use",
      "13.2 ft UL-listed USB cord"
    ],
    "pros": [
      "Low price for a 17-inch fan",
      "Quiet at a listed 36 dB",
      "Very low 5W power draw",
      "UL-listed cord with on/off button"
    ],
    "cons": [
      "Needs a power bank or USB source",
      "Listing admits it is small for a ceiling fan"
    ],
    "bestFor": "Power-bank tent cooling",
    "take": "A cheap, quiet USB fan that rides on a power bank.",
    "catch": "No built-in battery, so it needs a separate power bank."
  }
];

export const howWeEvaluated = [
  {
    "title": "Power source",
    "description": "Battery, solar, USB and plug-in designs were separated first."
  },
  {
    "title": "Blade span",
    "description": "Listed blade diameters from 17 to 28 inches were compared."
  },
  {
    "title": "Battery and runtime",
    "description": "Listed battery sizes and runtime claims were compared."
  },
  {
    "title": "Weather rating",
    "description": "IP65 and not-waterproof statements were noted."
  },
  {
    "title": "Controls and light",
    "description": "Remotes, timers and LED options were compared."
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
    "subheading": "By Shelter Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Canopy or big tent with a remote",
          "Ausic 21in Ceiling Fan",
          "20,400mAh and a 40 ft remote."
        ],
        [
          "Multi-day trip with solar",
          "Lumtide Solar Ceiling Fan",
          "30W solar panel charges it."
        ],
        [
          "Gazebo or pavilion with power",
          "LANMEL 28in Gazebo Fan",
          "28-inch IP65 with a plug-in cord."
        ],
        [
          "Quiet tent with light",
          "Coycomn 18in Ceiling Fan",
          "Quiet operation and LED."
        ],
        [
          "Solo tent",
          "DUKUSEEK Tent Ceiling Fan",
          "Compact 3-in-1 unit."
        ],
        [
          "Power bank only",
          "Roodike 17in USB Fan",
          "Runs on a power bank."
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
          "DUKUSEEK Tent Ceiling Fan or Roodike 17in USB Fan"
        ],
        [
          "$20 to $30",
          "Coycomn 18in Ceiling Fan or LANMEL 28in Gazebo Fan"
        ],
        [
          "$50 to $90",
          "Ausic 21in Ceiling Fan or Lumtide Solar Ceiling Fan"
        ]
      ]
    }
  },
  {
    "subheading": "Battery vs Plug-In",
    "cards": [
      {
        "label": "Battery",
        "text": "The Ausic 21in Ceiling Fan, Lumtide Solar Ceiling Fan, Coycomn 18in Ceiling Fan and DUKUSEEK Tent Ceiling Fan run cordless on built-in packs."
      },
      {
        "label": "Plug-in",
        "text": "The LANMEL 28in Gazebo Fan and Roodike 17in USB Fan need a power source but never run flat."
      }
    ],
    "note": "Most tent campers should pick a battery fan like the Ausic 21in Ceiling Fan unless they have power."
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
          "Under $20",
          "Roodike 17in USB Fan"
        ],
        [
          "Around $27",
          "Coycomn 18in Ceiling Fan"
        ],
        [
          "Around $30 for plug-in",
          "LANMEL 28in Gazebo Fan"
        ],
        [
          "Around $55",
          "Ausic 21in Ceiling Fan"
        ],
        [
          "Around $90",
          "Lumtide Solar Ceiling Fan"
        ]
      ]
    }
  },
  {
    "subheading": "Rainy Gazebo Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated IP rating or a waterproof claim."
      },
      {
        "label": "In this comparison",
        "text": "The LANMEL 28in Gazebo Fan lists IP65 for rain and snow, while the Lumtide Solar Ceiling Fan states it is not waterproof."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Lumtide Solar Ceiling Fan if you want to recharge from the sun on a multi-day trip."
      },
      {
        "label": "Save if",
        "text": "Save with the Roodike 17in USB Fan if you already own a power bank and want a quiet, low-draw fan."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Power source choice",
    "explanation": "A ceiling fan can run on a built-in battery, a USB feed, solar or a mains plug. A battery fan is cordless but runs down, while a plug-in fan runs forever but needs a power source. Pick by whether you camp with hookups."
  },
  {
    "criterion": "Blade span versus coverage",
    "explanation": "A 28-inch fan covers a whole gazebo, while a 17-inch fan covers a tent. A bigger span moves more air but needs a stronger hang point. Check the span and the hook rating."
  },
  {
    "criterion": "Weather rating",
    "explanation": "IP65 means rain and snow are shrugged off, and a fan that says not waterproof needs shelter. Store non-rated fans indoors. Look for the rating code, not the word outdoor."
  },
  {
    "criterion": "Remote range and control",
    "explanation": "A remote saves getting out of a sleeping bag. Ranges of 40 ft and 360 degree coverage work through tent fabric. Check the range and whether it needs aiming."
  },
  {
    "criterion": "Light and extras",
    "explanation": "Many ceiling fans add a dimmable LED or a power bank mode. These drain the same battery, so runtime shrinks. If lighting matters, look for a dimmable LED and a stated runtime with it on."
  }
];

export const faq = [
  {
    "q": "Can a ceiling fan hang in any tent?",
    "a": "It needs a center pole or a ridge line that can hold it. Check the fan weight and the hook. Light fans suit small tents best."
  },
  {
    "q": "What is the common mistake?",
    "a": "Buying a corded fan for a campsite with no power. The LANMEL 28in Gazebo Fan needs an outlet. Choose a battery fan if you camp off-grid."
  },
  {
    "q": "Is a bigger fan worth it?",
    "a": "A 28-inch fan covers a gazebo, but a tent only needs 17 to 21 inches. A bigger span needs power. Pick by space."
  },
  {
    "q": "How do I hang it?",
    "a": "Use the supplied hook on the pole or ridge, then check it holds. Keep the blades clear of walls. Test it before bed."
  },
  {
    "q": "How do I care for it?",
    "a": "Detach the blades, wipe them and dry the unit. Store it indoors, as the Lumtide Solar Ceiling Fan advises. Keep ports dry."
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
