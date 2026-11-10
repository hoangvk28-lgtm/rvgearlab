export const guideSlug = "best-camping-string-lights-under-30";
export const guideTitle = "5 Best Camping String Lights Under 30 in 2026";
export const metaTitle = "Best Camping String Lights Under 30 in 2026";
export const metaDescription = "Best camping string lights under $30: five 30 ft outdoor sets compared on waterproof rating, bulb count and plug-in versus solar power for campsites.";
export const mainKeyword = "best camping string lights under 30";
export const introParagraphs = [
  "Under $30, 30 ft string lights are a solved problem for the camper with a power post or a generator, and a small step up for anyone who wants solar. Five sets here run from about $17 to $25, so the real differences are waterproof rating, how many bulbs share the 30 ft, and whether the cord needs an outlet.",
  "Each set was compared on ingress rating, certification, bulb type, dimming and how it hangs from an awning, a tree or a camper rail. The ranking favors the set that gives the most protection for the least money, not the cheapest cord."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/gear-lit-tent-night.webp";
export const heroImageAlt = "Tent lit from inside in the middle of a forest at night";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-camping-string-lights-under-30-1",
    "rank": 1,
    "badge": "Best Value Under $30",
    "name": "Brightown Outdoor String Lights",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/518uXBdYvfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FLK173DR?tag=rvgearlab-20",
    "description": "The Brightown is a 30 ft set with 11 shatterproof ST38 LED bulbs plus one spare, an IP65 rating and UL certification. Each E12 socket has two built-in hooks, and the bulbs dim on most standard dimmers.\n\nIt costs about $20, which is less than the GPATIO 15-bulb set. It is the only plug-in pick that pairs the higher IP65 rating with a UL mark, so it is the one left out through a rainy week with the least worry.\n\nIt suits campers with a power post who want a durable awning set at a low price. Fewer bulbs than the 15-bulb sets means wider, softer spacing.",
    "specs": [
      "IP65, UL certified",
      "11 ST38 bulbs plus spare",
      "Two hooks per socket"
    ],
    "pros": [
      "IP65 rating handles rain and snow",
      "UL certification on the cord",
      "Shatterproof PET bulbs",
      "Spare bulb included"
    ],
    "cons": [
      "Only 11 bulbs over 30 ft",
      "Needs an outlet or generator"
    ],
    "bestFor": "Rainy-week awning lighting",
    "take": "The safest bet for a plug-in set you leave up for the season.",
    "catch": "Eleven bulbs spread thinly, so the glow is softer than the 15-bulb sets."
  },
  {
    "id": "best-camping-string-lights-under-30-2",
    "rank": 2,
    "badge": "Best Globe Glow",
    "name": "GPATIO Outdoor String Lights",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51t6jsRAaxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B5DM8MS8?tag=rvgearlab-20",
    "description": "The GPATIO carries 15 shatterproof globe bulbs plus one spare at 2700K warm white, with an ETL listing and IP45 sealed sockets. The bulbs are dimmable and up to 32 strings can be linked end to end.\n\nIt costs about $25, the top of this budget and more than the Brightown. In return it packs four more bulbs into the same 30 ft, which gives a fuller glow around a picnic table.\n\nIt suits a campsite that doubles as a party spot, where brighter, denser light matters more than the last few dollars. Pair it with a dimmer to tame it at bedtime.",
    "specs": [
      "15 globe bulbs, 2700K",
      "ETL listed, IP45 sockets",
      "Links up to 32 strings"
    ],
    "pros": [
      "Denser bulb spacing than the Brightown",
      "Warm 2700K glow",
      "ETL listing on the cord",
      "Dimmable with common dimmers"
    ],
    "cons": [
      "IP45 is below the Brightown's IP65",
      "Highest price in this guide"
    ],
    "bestFor": "Social campsites",
    "take": "Pick this for the fullest light per foot when price is secondary.",
    "catch": "IP45 resists splashes, not driving rain, so take it down in storms."
  },
  {
    "id": "best-camping-string-lights-under-30-3",
    "rank": 3,
    "badge": "Best No-Outlet Pick",
    "name": "Svater Solar String Lights Outdoor Waterproof LED 30 FT",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41iHxh8EqNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FX3TS72M?tag=rvgearlab-20",
    "description": "The Svater is a solar set with 10 shatterproof 1W ST38 bulbs spaced 1.87 ft apart, a 3W solar panel and a USB charging port. A full day of sun buys about 8 to 12 hours of light, and the remote dims it across four modes.\n\nIt costs about $20, close to the Brightown, and it is the only pick that needs no outlet at all. It has the lowest waterproof rating here at IP44, which suits sheltered pitches better than open ones.\n\nIt suits tent campers on unpowered sites who still want a lit table. Stake the panel in full sun and the lights come on by themselves at dusk.",
    "specs": [
      "3W panel plus USB charging",
      "10 bulbs, remote dimming",
      "Auto on at dusk"
    ],
    "pros": [
      "Works with no power post",
      "Auto on and off at dusk",
      "Remote dims four modes",
      "Panel stakes into the ground"
    ],
    "cons": [
      "Needs full sun to fill the battery",
      "IP44 is the lowest rating here"
    ],
    "bestFor": "Unpowered tent sites",
    "take": "The only choice here if your site has no hookup.",
    "catch": "Shade or a cloudy week cuts runtime well below the claimed 8 to 12 hours."
  },
  {
    "id": "best-camping-string-lights-under-30-4",
    "rank": 4,
    "badge": "Best Cozy Warm Tone",
    "name": "Ollny Outdoor String Lights 30FT",
    "price": "$17.13",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41R8iAAZMtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQ28N5P1?tag=rvgearlab-20",
    "description": "The Ollny runs 15 shatterproof ST38 bulbs plus one spare at a very warm 2200K, with an IP45 rating. The 30 ft string links to as many as 30 sets and comes with hooks attached for quick hanging.\n\nIt costs about $17, the lowest price in the group, and its amber tone is warmer than the GPATIO at 2700K. The rating sits at IP45 like the GPATIO, below the Brightown.\n\nIt suits campers who like a candle-style glow and want the lowest price. Use it under a canopy rather than in open rain.",
    "specs": [
      "15 bulbs at 2200K",
      "IP45 splash resistant",
      "Links up to 30 sets"
    ],
    "pros": [
      "Amber glow suits relaxed evenings",
      "15 bulbs over 30 ft",
      "Lowest price in this guide",
      "Hooks already attached"
    ],
    "cons": [
      "IP45 does not suit open rain",
      "Warm tone is dimmer for tasks"
    ],
    "bestFor": "Cozy, low-cost glow",
    "take": "A candle-like glow for the least money.",
    "catch": "The 2200K tone is too dim for cooking or card games."
  },
  {
    "id": "best-camping-string-lights-under-30-5",
    "rank": 5,
    "badge": "Best For Dimmer Control",
    "name": "GLUROO Outdoor String Lights",
    "price": "$20.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51S3elenovL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BCP2Y97C?tag=rvgearlab-20",
    "description": "The GLUROO uses 15 E12 sockets with 16 vintage-style 1W LED bulbs in unbreakable PET, on 0.5mm square wire. The bulbs are dimmable and the string is connectable to additional sets.\n\nIt costs about $21, between the Ollny and the GPATIO. The wire is thicker than a typical thin cord, which helps with repeated hanging and taking down.\n\nIt suits campers who set up and break down often and want a sturdier cord. It is a solid middle pick when a dimmer is part of the plan.",
    "specs": [
      "15 sockets, 16 vintage bulbs",
      "1W LED bulbs, PET shell",
      "0.5mm square wire"
    ],
    "pros": [
      "Thicker wire for repeated setup",
      "1W bulbs use little power",
      "Dimmable and connectable",
      "Unbreakable PET bulbs"
    ],
    "cons": [
      "Only 1W bulbs, soft for tasks",
      "Thin glow beside the globe sets"
    ],
    "bestFor": "Frequent setup and teardown",
    "take": "A sturdy cord for people who pack and unpack every weekend.",
    "catch": "Look up its rating before leaving it out overnight."
  }
];

export const howWeEvaluated = [
  {
    "title": "Waterproof rating",
    "description": "IP65 and IP45 were compared because they differ in what rain they stop."
  },
  {
    "title": "Bulb count",
    "description": "Bulbs per 30 ft decide how soft or dense the glow looks."
  },
  {
    "title": "Power source",
    "description": "Plug-in sets were separated from the one solar set."
  },
  {
    "title": "Certification",
    "description": "UL and ETL marks were noted where a pick carries one."
  },
  {
    "title": "Price against the cap",
    "description": "Every pick sits under $30, and the top pick delivers the most protection per dollar."
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
    "subheading": "By campsite situation",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Powered site, rain likely",
          "Brightown 30ft",
          "IP65 and UL on a cord at about $20."
        ],
        [
          "Powered site, party table",
          "GPATIO Globe",
          "15 globe bulbs and 2700K light."
        ],
        [
          "Unpowered tent site",
          "Svater Solar",
          "Panel and USB mean no outlet."
        ],
        [
          "Candle-style glow, tight budget",
          "Ollny 2200K",
          "Warmest tone at the lowest price."
        ],
        [
          "Frequent pack and unpack",
          "GLUROO Vintage",
          "Thicker 0.5mm wire for repeat use."
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
          "Ollny 2200K or Brightown 30ft"
        ],
        [
          "$10 to $30",
          "Svater Solar or GLUROO Vintage"
        ],
        [
          "$20 to $30",
          "GPATIO Globe"
        ]
      ]
    }
  },
  {
    "subheading": "Higher rating vs more bulbs",
    "cards": [
      {
        "label": "Higher IP rating",
        "text": "The Brightown 30ft carries IP65 and a UL mark, and holds up in sustained rain with fewer bulbs."
      },
      {
        "label": "More bulbs",
        "text": "The GPATIO Globe, Ollny 2200K and GLUROO Vintage carry 15 bulbs for denser light at a lower IP45 splash rating."
      }
    ],
    "note": "Take the Brightown 30ft unless you leave the set up only on dry weekends."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "About $17",
          "Ollny 2200K"
        ],
        [
          "About $20",
          "Brightown 30ft"
        ],
        [
          "About $21",
          "GLUROO Vintage"
        ],
        [
          "About $25",
          "GPATIO Globe"
        ],
        [
          "Solar at $20",
          "Svater Solar"
        ]
      ]
    }
  },
  {
    "subheading": "For an awning or camper rail specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for hooks built into each socket and a cord long enough to span the awning with a drop to the plug."
      },
      {
        "label": "In this comparison",
        "text": "The Brightown 30ft has two hooks per socket and an IP65 rating, so it handles a camper awning in all weather. The GLUROO Vintage adds thicker wire for repeated setup."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want the fullest glow and an ETL mark: the GPATIO Globe adds four bulbs over the Brightown 30ft for about $5 extra, and the Svater Solar is worth it when no outlet exists."
      },
      {
        "label": "Save if",
        "text": "Save if you only need a dim, cozy glow under a canopy: the Ollny 2200K costs about $17 and still gives 15 bulbs, though the Brightown 30ft is a better buy for weather."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Waterproof rating that matches weather",
    "explanation": "IP stands for ingress protection, and the second digit rates water. IP45 resists splashing, while IP65 resists jets of water, so it is the safer choice for open sites in sustained rain. Check the rating in the title or bullets, and take IP45 and IP44 sets down before storms."
  },
  {
    "criterion": "Bulb count over 30 feet",
    "explanation": "Eleven bulbs over 30 ft leaves a bulb about every 3 ft, while 15 bulbs sits closer to every 2 ft. More bulbs make a brighter table, but they also draw more power from a generator. Count the bulbs listed in the title and plan on one hook per 4 to 5 ft."
  },
  {
    "criterion": "Plug-in versus solar power",
    "explanation": "A plug-in string needs an outlet or generator, and a solar string needs several hours of direct sun. A 3W panel can give 8 to 12 hours of light after a sunny day, but shade cuts that sharply. Pick plug-in for campgrounds with posts and solar for dry camping."
  },
  {
    "criterion": "Cert marks on the cord",
    "explanation": "UL and ETL listings mean an independent lab tested the cord for fire and shock safety. That matters in a damp tent or under a canopy, where a cheap uncertified plug is the weak point. Look for the mark on the plug itself and in the product details."
  },
  {
    "criterion": "Warm tone and dimming",
    "explanation": "A 2200K bulb is amber and relaxed, while 2700K is closer to a household bulb. Warmer tones dim well in the evening but are poor for cooking or reading. Choose a dimmer-compatible set such as the GPATIO Globe or GLUROO Vintage if you want both modes, and buy the dimmer separately because none is included."
  },
  {
    "criterion": "Hanging hardware",
    "explanation": "Built-in hooks, mounting ties and cup hooks decide how fast a set goes up. Two hooks per socket let you loop the cord around a rail, while ties suit a tree limb. Bring a few spare zip ties and carabiners regardless, because a 30 ft cord is heavy enough to sag between two hooks in wind."
  }
];

export const faq = [
  {
    "q": "Can I run string lights from a generator?",
    "a": "Yes, because LED strings draw very little power. A 15-bulb 1W set uses about 15 watts, so even a small inverter generator handles several sets. Run the generator away from the tent and never inside, since exhaust carries carbon monoxide."
  },
  {
    "q": "What mistake do campers make with string lights?",
    "a": "Many leave plug-in sets out in storms that exceed the IP45 or IP44 rating. Water can enter the sockets and trip an outlet or short the cord. Take the set down before heavy rain, or choose the IP65 Brightown 30ft."
  },
  {
    "q": "Is solar worth it over a plug-in set?",
    "a": "Solar is worth it only when your site has no power, because the Svater Solar needs full sun and gives about 8 to 12 hours of light after a sunny day. A plug-in set like the Brightown 30ft is brighter and never runs flat. Cloudy weeks favor plug-in."
  },
  {
    "q": "How do I hang a 30 ft set on a camper?",
    "a": "Run the cord along the awning rail and clip or tie it every 4 to 5 ft. Use the built-in hooks on the Brightown 30ft, or add zip ties and clip hooks. Leave a loop of slack at the plug so wind does not pull the cord."
  },
  {
    "q": "How do I store string lights between trips?",
    "a": "Wrap the cord around a piece of cardboard or a reel, and store bulbs upright so they do not crush. Keep the plug end dry and inspect the sockets before the next trip. A zipped storage bag keeps the Ollny 2200K or GLUROO Vintage from tangling."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping String Lights",
    "href": "/campsite-gear/best-camping-string-lights"
  },
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
  }
];
