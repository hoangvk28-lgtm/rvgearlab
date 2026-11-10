export const guideSlug = "best-quiet-tent-fans";
export const guideTitle = "3 Best Quiet Tent Fans in 2026";
export const metaTitle = "Best Quiet Tent Fans in 2026";
export const metaDescription = "Best quiet tent fans compared: three fans with listed noise levels or low-noise motor claims for sleeping, from a corded USB model to rechargeables.";
export const mainKeyword = "best quiet tent fans";
export const introParagraphs = [
  "A tent fan has two jobs at night: move air and not keep you awake. Noise is the whole angle here, and the three picks differ in how they claim it, from a stated decibel number to a motor and grille description.",
  "I kept only fans whose listings say something concrete about noise, then compared the numbers, the motor types and the speed settings. Fans that never mention noise did not make this list."
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
    "id": "best-quiet-tent-fans-1",
    "rank": 1,
    "badge": "Best Stated Low Noise",
    "name": "FRIZCOL 3-in-1 Camping Fan",
    "price": "$28.48",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51NiObDHKzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BVTHPXLB?tag=rvgearlab-20",
    "description": "The FRIZCOL lists noise below 30 dB, a premium motor and an ultra-thin blade, with four speeds topping out at 3950 r/min. Its 24000mAh battery gives a stated 11 to 60 hours, and a remote, three timers and a two-level light come with it.\n\nIt is the only pick here that pairs a decibel figure with a big battery and remote control. The Roodike lists a higher noise number and the Gaiatop gives no number at all.\n\nIt suits a light sleeper who wants a remote and a timer so the fan can stop on its own. Run it on a low speed overnight and it stays closest to that listed figure.",
    "specs": [
      "Under 30 dB claim",
      "24000mAh, 11 to 60 hours",
      "Remote, timers, light"
    ],
    "pros": [
      "Decibel figure given on the listing",
      "Large battery for long nights",
      "Remote and three timer settings",
      "Non-slip pads and sturdy ABS body"
    ],
    "cons": [
      "Noise figure applies at low speed",
      "No oscillation listed"
    ],
    "bestFor": "Light sleepers",
    "take": "The quietest claim on paper, with a remote for the 2 a.m. adjustments.",
    "catch": "At the top of its four speeds the 3950 r/min motor may sound very different from the low-speed figure."
  },
  {
    "id": "best-quiet-tent-fans-2",
    "rank": 2,
    "badge": "Best Corded Ceiling Fan",
    "name": "Roodike 17\" Portable USB Ceiling Fan for Camping Tent Gazebo RV Cruise",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31RWclZgsRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSVN13HM?tag=rvgearlab-20",
    "description": "The Roodike is a 17-inch USB ceiling fan with five blades, 330 RPM rotation and a listed 36 dB. A 13.2 ft UL-listed cord with an on/off button runs it from a power bank, car charger or wall adapter at 5W.\n\nSlow rotation is its quiet mechanism, and the long cord means no battery to drain. Compared with the FRIZCOL it has no runtime limit, and compared with the Gaiatop it gives a decibel number.\n\nIt suits a car camper or RV-adjacent camper who has USB power all night and wants a slow, steady breeze. Hang it from the tent ceiling and run the cord out the door vent.",
    "specs": [
      "36 dB, 330 RPM",
      "17-inch, five blades",
      "13.2 ft cord, UL listed cord"
    ],
    "pros": [
      "Stated 36 dB at a slow 330 RPM",
      "No battery to run flat",
      "Long UL-listed cord",
      "Low 5W power draw"
    ],
    "cons": [
      "Needs USB power all night",
      "Listing calls it small for big spaces"
    ],
    "bestFor": "Powered campsites",
    "take": "A slow, corded ceiling fan for a night with USB power on hand.",
    "catch": "No built-in battery, so it is only as portable as your power bank."
  },
  {
    "id": "best-quiet-tent-fans-3",
    "rank": 3,
    "badge": "Best Quiet Lantern Fan",
    "name": "Gaiatop Portable Camping Fan with LED Lantern",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YudlPWbSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQP23DVV?tag=rvgearlab-20",
    "description": "The Gaiatop is a rechargeable camping fan with an upgraded motor and aerodynamic grille aimed at lower noise. It offers three speeds, 360 degree manual adjustment, a foldable hook and a lantern with eight LED beads, with 5 to 17 hours per charge.\n\nIt gives no decibel figure, so it ranks under the FRIZCOL and Roodike. It does the lantern job in the same body, which neither of them does.\n\nIt suits a solo camper who wants a hanging fan and light in one unit and values low-noise design over a stated number. The USB desk-fan mode lets it run while charging.",
    "specs": [
      "5 to 17 hours per charge",
      "Three speeds, 360 degree head",
      "Eight-bead LED lantern"
    ],
    "pros": [
      "Lantern and fan in one body",
      "Hook folds away for packing",
      "Runs while charging",
      "Aerodynamic grille aimed at lower noise"
    ],
    "cons": [
      "No noise figure on the listing",
      "Shortest listed runtime of the two battery fans"
    ],
    "bestFor": "Solo campers wanting a lantern",
    "take": "A hang-it-and-forget-it fan with a lantern, for small tents.",
    "catch": "The noise claim is wording, not a measured number."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated noise",
    "description": "I looked for decibel numbers on each listing and ranked picks with a figure above those that only describe a quiet design."
  },
  {
    "title": "Motor and blade design",
    "description": "RPM, motor type and blade or grille descriptions were compared as the reason behind each noise claim."
  },
  {
    "title": "Speed range",
    "description": "A fan that is quiet only at its lowest speed is less useful than one with several usable steps, so I compared speed counts."
  },
  {
    "title": "Power source",
    "description": "Battery fans and a corded USB fan were separated, since a battery fan has no cord and the corded fan has no runtime limit."
  },
  {
    "title": "Night features",
    "description": "Remotes, timers and lights were noted because they let you change settings without waking up."
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
    "subheading": "By Noise Evidence",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Wants a stated decibel number and a big battery",
          "FRIZCOL 24000mAh Fan",
          "Under 30 dB claim with a 24000mAh battery."
        ],
        [
          "Wants the slowest rotation",
          "Roodike 17-Inch USB Fan",
          "330 RPM with a 36 dB figure."
        ],
        [
          "Wants a lantern too",
          "Gaiatop Lantern Fan",
          "Lantern and fan share one body."
        ],
        [
          "Sleeps with a remote nearby",
          "FRIZCOL 24000mAh Fan",
          "Remote and three timers."
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
          "Roodike 17-Inch USB Fan"
        ],
        [
          "$10 to $20",
          "Gaiatop Lantern Fan"
        ],
        [
          "$20 to $30",
          "FRIZCOL 24000mAh Fan"
        ]
      ]
    }
  },
  {
    "subheading": "Corded vs battery",
    "cards": [
      {
        "label": "Corded fan",
        "text": "The Roodike 17-Inch USB Fan runs from USB power and can turn slowly all night with no runtime limit, which suits sites with a power bank or car charger."
      },
      {
        "label": "Battery fans",
        "text": "The FRIZCOL 24000mAh Fan and Gaiatop Lantern Fan carry their own cells and go anywhere, with the quietest claims at low speed only."
      }
    ],
    "note": "Most light sleepers should default to the FRIZCOL 24000mAh Fan unless they have all-night USB power, where the Roodike is quieter at its slow speed."
  },
  {
    "subheading": "By Extras",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Remote and timers",
          "FRIZCOL 24000mAh Fan"
        ],
        [
          "Long cord, no battery",
          "Roodike 17-Inch USB Fan"
        ],
        [
          "Built-in lantern",
          "Gaiatop Lantern Fan"
        ]
      ]
    }
  },
  {
    "subheading": "For Light Sleepers Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A decibel figure, a low RPM or a quiet motor description, plus a timer."
      },
      {
        "label": "In this comparison",
        "text": "The FRIZCOL 24000mAh Fan is the strongest match: a stated figure under 30 dB, a remote and three timers so it can shut off after you drift off."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the FRIZCOL 24000mAh Fan if sleep matters, since it gives a decibel figure, a big battery and a remote in one unit."
      },
      {
        "label": "Save if",
        "text": "Save with the Roodike 17-Inch USB Fan if you already own a power bank, as it lists 36 dB at a slow 330 RPM with no battery to pay for."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Decibel figures on a listing",
    "explanation": "A decibel number describes how loud a fan is at a stated speed and distance, and it is usually measured at the lowest setting. A 30 dB fan sounds like a whisper, while 60 dB is closer to conversation. Look for the figure and for which speed it applies to, since the high-speed noise is rarely listed."
  },
  {
    "criterion": "RPM and blade count",
    "explanation": "Fewer rotations per minute usually means less blade noise, and more blades at slow RPM give a smoother breeze. A fan listing 330 RPM will sound very different from one at 3950 r/min. Check the RPM figure, not just the quiet claim in the title."
  },
  {
    "criterion": "Corded versus battery",
    "explanation": "A battery fan has a motor that works to deliver high airflow, which can hum on high speed. A corded fan runs steady and can be slow without worrying about runtime. Pick based on whether your site has USB power overnight."
  },
  {
    "criterion": "Remote and timer",
    "explanation": "The quietest moment is the one you do not have to get up for. A remote lets you drop the speed from your bag, and a timer ends the fan when you are asleep. Look for timers and a remote listed on the product page."
  },
  {
    "criterion": "Mounting and vibration",
    "explanation": "A fan that rattles against a pole is louder than the decibel claim, so how it mounts matters. Non-slip pads, a hook and a stable base reduce rattle. Look for those details and hang the fan clear of the tent walls."
  }
];

export const faq = [
  {
    "q": "What decibel level counts as quiet for a tent fan?",
    "a": "Under about 40 dB is whisper-quiet, and anything near 60 dB is roughly conversation level. The FRIZCOL lists under 30 dB and the Roodike lists 36 dB. Check which speed the number applies to."
  },
  {
    "q": "Are quiet fans weaker?",
    "a": "Usually, yes, at the same size. Low RPM means less airflow. The Roodike runs at 330 RPM for soft air, while the FRIZCOL can spin faster for more breeze at the cost of noise."
  },
  {
    "q": "Is a corded fan worth it over a battery fan?",
    "a": "If you have USB power all night, yes. The Roodike has no battery to run flat and its cord is 13.2 ft. A battery fan is the better choice for walk-in sites."
  },
  {
    "q": "How do I stop a fan rattling in a tent?",
    "a": "Hang it clear of fabric, use the non-slip pads or a flat hook, and avoid hanging it on a flexing pole. A loose hook can add more noise than the motor. Test it on low speed before you sleep."
  },
  {
    "q": "Does a lantern light change how loud a fan is?",
    "a": "No, but sharing a battery shortens runtime. The Gaiatop runs its lantern from the same cell, giving 5 to 17 hours depending on use. Turn off the light at bedtime if you want maximum airflow time."
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
