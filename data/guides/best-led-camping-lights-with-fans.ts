export const guideSlug = "best-led-camping-lights-with-fans";
export const guideTitle = "2 Best Led Camping Lights With Fans in 2026";
export const metaTitle = "Best Led Camping Lights With Fans in 2026";
export const metaDescription = "Best LED camping lights with fans compared on battery size, light modes, airflow style and mounting, for tent campers who want cooling and light in one unit.";
export const mainKeyword = "best led camping lights with fans";
export const introParagraphs = [
  "A light with a fan saves a hook and a charger, and in a hot tent that is a real gain. Two listings fit this brief well, a pedestal-style unit and an 18-inch ceiling fan with a built-in light.",
  "They were compared on battery capacity, stated runtime, light modes, airflow design and mounting. A listing silent on weather rating gets that noted as a buyer tip."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/lighting-headlamp-tent.webp";
export const heroImageAlt = "Camper wearing a headlamp in front of a tent at night";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-led-camping-lights-with-fans-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Camping LED Fan with Light",
    "price": "$47.24",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51BQVDPSLYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQW6SWTZ?tag=rvgearlab-20",
    "description": "The Doublepow pairs a 20000mAh battery that lists 8 to 100 hours of use with 16 LED beads and 5 brightness settings, three cold and two warm. A double clover blade design, 4 fan speeds and 270 degree rotation are included, with separate fan and light controls.\n\nAgainst the Coycomn, it is a base-and-hook style unit with a bigger cell and more light modes. Four battery lights and four speed lights show its status at a glance.\n\nIt suits tent campers who want one body to cool and light a space, with separate switches for each. The ABS body is described as fall-proof for rough floors.",
    "specs": [
      "20000mAh, 8 to 100 hours",
      "16 LEDs, cold and warm modes",
      "4 speeds, 270 degree rotation"
    ],
    "pros": [
      "Huge 20000mAh cell",
      "Fan and light switch separately",
      "Warm and cold light modes",
      "Hook and base mounting"
    ],
    "cons": [
      "Weather rating is not stated",
      "Higher price than the Coycomn"
    ],
    "bestFor": "Fan and lamp in one tent unit",
    "take": "A big battery and separate controls give the best all-round fan and light.",
    "catch": "Runtime depends heavily on speed, so check the low setting for overnight use."
  },
  {
    "id": "best-led-camping-lights-with-fans-2",
    "rank": 2,
    "badge": "Best Large Fan",
    "name": "Upgraded Large Size 18-Inch Rechargeable Camping Ceiling Fan with LED Light",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31MRXZSsRkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GV5YR6Z6?tag=rvgearlab-20",
    "description": "The Coycomn is an 18-inch ceiling fan with a built-in LED light and a 15,600mAh battery that the listing puts at up to 25 hours. The blades detach for storage, and the listing names quiet operation.\n\nCompared with the Doublepow, it moves air across a larger area from a hanging position and costs less. It gives up some battery and light modes for that size.\n\nIt suits larger tents, canopies and gazebos where air needs to spread across a group. Hanging it from the ceiling keeps it off the floor.",
    "specs": [
      "18-inch, 15,600mAh",
      "Up to 25 hours listed",
      "Built-in LED, detachable blades"
    ],
    "pros": [
      "Large 18-inch blades cover more space",
      "Cordless with up to 25 hours",
      "Built-in LED light",
      "Blades detach for storage"
    ],
    "cons": [
      "Smaller battery than the Doublepow",
      "Weather rating is not stated"
    ],
    "bestFor": "Large tents and gazebos",
    "take": "A big hanging fan with a light at a fair price for group spaces.",
    "catch": "No waterproof rating is listed, so avoid direct rain."
  }
];

export const howWeEvaluated = [
  {
    "title": "Battery capacity",
    "description": "Stated mAh figures and listed hours were compared across speeds."
  },
  {
    "title": "Light modes",
    "description": "Brightness steps, warm and cold options and whether lights run separately from the fan were noted."
  },
  {
    "title": "Airflow design",
    "description": "Blade size, speed count and rotation were compared for tents of different sizes."
  },
  {
    "title": "Mounting",
    "description": "Hook, base and hanging options were weighed for different camp setups."
  },
  {
    "title": "Build",
    "description": "Body material and drop resistance were noted where listed."
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
          "Solo or two-person tent",
          "Doublepow 20000mAh Fan Light",
          "Compact body with 270 degree rotation."
        ],
        [
          "Family or large tent",
          "Coycomn 18in Ceiling Fan",
          "18-inch blades cover more air."
        ],
        [
          "Gazebo or canopy",
          "Coycomn 18in Ceiling Fan",
          "Hangs from the ceiling."
        ],
        [
          "Long hot nights",
          "Doublepow 20000mAh Fan Light",
          "Up to 100 hours on low."
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
          "Coycomn 18in Ceiling Fan"
        ],
        [
          "$40 to $50",
          "Doublepow 20000mAh Fan Light"
        ]
      ]
    }
  },
  {
    "subheading": "Base Unit vs Hanging Fan",
    "cards": [
      {
        "label": "Base unit",
        "text": "A pedestal style sits on a surface and aims where you choose. The Doublepow 20000mAh Fan Light is this type."
      },
      {
        "label": "Hanging fan",
        "text": "A ceiling fan hangs from the roof and spreads air widely. The Coycomn 18in Ceiling Fan is this type."
      }
    ],
    "note": "Pick the Doublepow 20000mAh Fan Light for small tents and the Coycomn 18in Ceiling Fan for large spaces."
  },
  {
    "subheading": "By Light Need",
    "table": {
      "headers": [
        "Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Reading with warm light",
          "Doublepow 20000mAh Fan Light"
        ],
        [
          "General area light",
          "Coycomn 18in Ceiling Fan"
        ],
        [
          "Separate fan and light control",
          "Doublepow 20000mAh Fan Light"
        ]
      ]
    }
  },
  {
    "subheading": "Hot Tent Nights",
    "cards": [
      {
        "label": "Look for",
        "text": "Low-speed runtime hours, quiet operation and a mount that frees floor space."
      },
      {
        "label": "In this comparison",
        "text": "The Doublepow 20000mAh Fan Light lists up to 100 hours, and the Coycomn 18in Ceiling Fan lists up to 25 hours with quiet operation."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Doublepow 20000mAh Fan Light if you want the biggest battery and separate controls."
      },
      {
        "label": "Save if",
        "text": "Save with the Coycomn 18in Ceiling Fan if a large hanging fan and light suit your tent."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Light and fan on one battery",
    "explanation": "Combined units share a single battery, so running both shortens runtime. A 20000mAh cell lasts longer than 15,600mAh, but the hours depend on speed and brightness. Check whether the listing separates fan and light hours."
  },
  {
    "criterion": "Warm versus cold light",
    "explanation": "Warm light is gentler for reading and attracts fewer insects than cold white. Cold light is better for tasks. Look for both modes in the bullet points."
  },
  {
    "criterion": "Airflow and blade size",
    "explanation": "Larger blades move more air at a lower speed, which is quieter. Small blades need higher speeds. Match blade size to your tent."
  },
  {
    "criterion": "Mounting style",
    "explanation": "A hanging fan frees up floor space, and a base unit sits anywhere. Check that your tent has a loop or pole for hanging. A hook helps either way."
  },
  {
    "criterion": "Weather and dust",
    "explanation": "Tents see dew, rain and dust, so a rating helps. A listing without one means treating it as dry-use only. Check the bullet points for IP ratings."
  }
];

export const faq = [
  {
    "q": "Can a fan with a light run all night?",
    "a": "On low, yes. The Doublepow 20000mAh Fan Light lists up to 100 hours at the lowest setting, while the Coycomn 18in Ceiling Fan lists up to 25. Running both fan and light shortens that."
  },
  {
    "q": "What is the common mistake with fan lights?",
    "a": "Buying on the headline hours. The best-case number applies to the lowest speed and light off. Check the hours at the settings you will use."
  },
  {
    "q": "Is the Doublepow worth it over the Coycomn?",
    "a": "If you want a bigger battery and separate controls, yes. The Doublepow 20000mAh Fan Light is more flexible, while the Coycomn 18in Ceiling Fan covers more floor area."
  },
  {
    "q": "How do I hang a camping ceiling fan?",
    "a": "Use the loop or hook at the top and a tent pole or ridge line. Keep the cord tidy and make sure it hangs clear of your head. The Coycomn 18in Ceiling Fan has detachable blades for storage."
  },
  {
    "q": "How should I charge and store it?",
    "a": "Charge to full before a trip and store it dry. Keep it out of hot cars. Check the charging cable and port for dust."
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
