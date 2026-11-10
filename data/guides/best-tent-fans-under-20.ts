export const guideSlug = "best-tent-fans-under-20";
export const guideTitle = "3 Best Tent Fans Under 20 in 2026";
export const metaTitle = "Best Tent Fans Under 20 in 2026";
export const metaDescription = "Best tent fans under $20, compared on battery size, timers, remote range and light modes, so a cheap fan can keep a sleeping tent from turning into an oven.";
export const mainKeyword = "best tent fans under 20";
export const introParagraphs = [
  "Under $20, tent fans are almost all small ceiling-style units that hang from the tent roof and run on a built-in battery. Three of them are worth buying, and they are close cousins, so the differences come down to battery size, wind modes and how long a charge lasts.",
  "That is a short list on purpose. The three are ordered by how much runtime and control each adds for the money, with the best-equipped model first."
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
    "id": "best-tent-fans-under-20-1",
    "rank": 1,
    "badge": "Best Value Under $20",
    "name": "Camping Fan with Light & Remote",
    "price": "$14.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/315R9AKhXhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GS5C8SV7?tag=rvgearlab-20",
    "description": "The Yueidung is a detachable ceiling-style tent fan with an 8000mAh battery, four speeds that include a natural wind mode and a three-level light. A four-hour fast charge gives about ten hours of fan use, and the remote works from up to 3 meters away.\n\nIt carries a bigger battery than the two 7200mAh fans below it and adds a natural wind mode that varies airflow to feel like a breeze. It costs about $1 to $2 more, which is the price of that extra capacity.\n\nIt suits campers who run the fan through a warm night and want the longest runtime at this price. Charge it from a power bank on the way to camp.",
    "specs": [
      "8000mAh, four speeds",
      "Natural wind mode, 3-level light",
      "Remote with 3 meter range"
    ],
    "pros": [
      "Biggest battery in this group",
      "Natural wind mode feels like a breeze",
      "About ten hours per fast charge",
      "Remote works from the cot"
    ],
    "cons": [
      "Costs a little more than the other two",
      "Small fan covers a small tent"
    ],
    "bestFor": "Warm nights in a small tent",
    "take": "The one to buy if you want the longest runtime under $20.",
    "catch": "A fan this small cools a one or two person tent best."
  },
  {
    "id": "best-tent-fans-under-20-2",
    "rank": 2,
    "badge": "Best Budget Pick",
    "name": "Portable Ceiling Fan",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31f83bRsK8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWQF31DW?tag=rvgearlab-20",
    "description": "Measuring 9.25 by 3.53 inches and weighing 0.86 pounds (390g), the Yorflowe has four speeds, three light levels and 2, 4, 6 or 8 hour timers. A 7200mAh battery charges in four to six hours and gives up to 12 hours of cooling or 20 hours of light.\n\nIt is the cheapest pick here and the one with the stand and hook for flexible placement. It trails the Yueidung on battery by about 800mAh.\n\nIt suits backpackers and car campers who want an inexpensive fan with a timer. The timer lets the fan shut off after you fall asleep.",
    "specs": [
      "9.25x3.53 in, 0.86 lb",
      "7200mAh, 12 hours of cooling",
      "2 to 8 hour timers"
    ],
    "pros": [
      "Lowest price of the three",
      "Up to 12 hours of cooling per charge",
      "Timer stops it after you fall asleep",
      "Stand and hook for placement"
    ],
    "cons": [
      "Smaller battery than the Yueidung",
      "No natural wind mode"
    ],
    "bestFor": "Backpackers and budget campers",
    "take": "The cheapest fan with a timer, and a light one to carry.",
    "catch": "Treat the 12 hour figure as the low-speed best case."
  },
  {
    "id": "best-tent-fans-under-20-3",
    "rank": 3,
    "badge": "Best Remote Timer Pick",
    "name": "FIALAME Portable Ceiling Fan with Lights Remote",
    "price": "$18.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/419lXN6DeuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GFWQB9CC?tag=rvgearlab-20",
    "description": "The FIALAME measures 9.25 by 3.53 inches and weighs 390g. It has a 7200mAh battery that charges over USB, four wind speeds, three brightness levels and a remote that sets timers of 1, 2, 6 or 8 hours.\n\nIt is nearly identical to the Yorflowe in size and battery, and it adds a one hour timer for short naps. It costs about 50 cents more than the Yorflowe.\n\nIt suits campers who want a fan, a night light and a remote in one light unit. It also works in an RV or a rooftop tent.",
    "specs": [
      "9.25x3.53 in, 390g",
      "7200mAh, USB charging",
      "Remote, 1 to 8 hour timers"
    ],
    "pros": [
      "One hour timer for short naps",
      "Four speeds and a night light",
      "USB charging cable included",
      "Fits tents, RVs and truck canopies"
    ],
    "cons": [
      "Same battery as the cheaper Yorflowe",
      "Small airflow for a family tent"
    ],
    "bestFor": "Short naps and night reading",
    "take": "A well-equipped small fan with a remote and a flexible timer.",
    "catch": "Pick it only if you want the one hour timer."
  }
];

export const howWeEvaluated = [
  {
    "title": "Battery size",
    "description": "Compared 7200mAh and 8000mAh batteries and stated runtimes."
  },
  {
    "title": "Timer and remote",
    "description": "Looked at timer steps and remote range."
  },
  {
    "title": "Light modes",
    "description": "Checked brightness levels and whether the light is a night light."
  },
  {
    "title": "Size and weight",
    "description": "Compared weights near 390g and the small 9.25 inch body."
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
    "subheading": "By need",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Longest runtime",
          "Yueidung Ceiling Fan",
          "8000mAh and natural wind mode."
        ],
        [
          "Cheapest fan with a timer",
          "Yorflowe 9.25-Inch",
          "Lowest price and 12 hours of cooling."
        ],
        [
          "Short naps and reading",
          "FIALAME 9.25-Inch",
          "One hour timer and a night light."
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
          "Yorflowe 9.25-Inch"
        ],
        [
          "$10 to $20",
          "FIALAME 9.25-Inch"
        ],
        [
          "$10 to $20",
          "Yueidung Ceiling Fan"
        ]
      ]
    }
  },
  {
    "subheading": "Natural wind vs steady speeds",
    "cards": [
      {
        "label": "Natural wind",
        "text": "A natural wind mode like the Yueidung Ceiling Fan varies the airflow to feel like a breeze. It suits sleeping."
      },
      {
        "label": "Steady speeds",
        "text": "Fixed speeds like those on the Yorflowe 9.25-Inch and FIALAME 9.25-Inch give constant airflow. They are simpler."
      }
    ],
    "note": "Choose the Yueidung Ceiling Fan if you sleep warm, and either 9.25-Inch fan if you want the lowest price."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Around $18",
          "Yorflowe 9.25-Inch"
        ],
        [
          "Around $18.50",
          "FIALAME 9.25-Inch"
        ],
        [
          "Around $20",
          "Yueidung Ceiling Fan"
        ]
      ]
    }
  },
  {
    "subheading": "For backpacking specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a weight near 390 grams and USB charging you can top up from a power bank."
      },
      {
        "label": "In this comparison",
        "text": "The Yorflowe 9.25-Inch and FIALAME 9.25-Inch weigh about 390g, and the Yueidung Ceiling Fan runs longer."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a larger fan or more airflow, which starts around $25 with an 18 inch fan. Under the cap, the Yueidung Ceiling Fan is the best step up."
      },
      {
        "label": "Save if",
        "text": "Save if you only need a small breeze, because the Yorflowe 9.25-Inch costs about $18."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Battery capacity",
    "explanation": "Battery size in milliamp hours sets how long the fan runs between charges. A 7200mAh battery gives about 12 hours on low, while an 8000mAh unit gives a little more. Look for the mAh figure in the title, and expect runtime to fall sharply on the highest speed."
  },
  {
    "criterion": "Timer options",
    "explanation": "A timer shuts the fan off after a set number of hours, which saves battery and avoids a cold, noisy tent at 4 a.m. Steps of 1, 2, 6 and 8 hours cover naps and full nights. Look for the timer steps in the description."
  },
  {
    "criterion": "Remote control range",
    "explanation": "A remote lets you adjust speed and light from your sleeping bag without climbing out into the cold. Range of 3 meters covers any small tent. Check that the remote is included and that the fan has buttons as a backup. Test the remote from where you sleep, since walls of padding and sleeping bags can reduce range."
  },
  {
    "criterion": "Wind modes",
    "explanation": "A natural wind mode varies the speed to imitate a breeze, which many campers find more comfortable than constant airflow. Basic fans offer only fixed speeds. Look for the words natural wind or breeze in the title. Natural wind modes also lower noise, because the motor spends part of the cycle at low speed."
  },
  {
    "criterion": "Mounting and weight",
    "explanation": "A fan around 390 grams hangs from a tent loop or a hook without sagging, while heavier fans need a sturdy ridge line. Look for a hook, stand or magnet in the product details. Check your tent's ceiling loops before you buy. A hook that sits snugly on a ridge loop keeps the fan from swinging and tapping the tent wall."
  }
];

export const faq = [
  {
    "q": "Will a small tent fan cool a tent on a hot night?",
    "a": "It moves air and helps you feel cooler, but it does not lower the temperature. It works best in a one or two person tent with the vents open, and it cannot beat a hot afternoon. The Yueidung Ceiling Fan is the best of these three at keeping air moving."
  },
  {
    "q": "How do I hang a tent fan?",
    "a": "Clip or hook it to the loop at the tent's ceiling peak and make sure it hangs clear of the fabric. The Yorflowe 9.25-Inch has a stand and hook that give extra options. Keep the fan away from your face to avoid a cold draft."
  },
  {
    "q": "How long does the battery last?",
    "a": "It depends on speed. A 7200mAh unit runs about 12 hours on low, while the highest speed drains it much faster. The Yueidung Ceiling Fan with 8000mAh gives about ten hours per fast charge. Use the timer to avoid wasting charge once you fall asleep."
  },
  {
    "q": "Can I charge it from a power bank?",
    "a": "Yes, since they charge over USB. A small power bank can top up the fan during the day or overnight. The FIALAME 9.25-Inch comes with a USB cable. Use a 5V charger of at least 1 amp for the quickest top-up."
  },
  {
    "q": "Is the light bright enough to read by?",
    "a": "The light is a night light, not a reading lantern. It gives soft illumination for finding things. The FIALAME 9.25-Inch and Yueidung Ceiling Fan have three brightness levels. For reading, pair the fan with a headlamp or a small lantern."
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
