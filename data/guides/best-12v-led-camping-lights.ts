export const guideSlug = "best-12v-led-camping-lights";
export const guideTitle = "5 Best 12v Led Camping Lights in 2026";
export const metaTitle = "Best 12v Led Camping Lights in 2026";
export const metaDescription = "Best 12V LED camping lights compared on lumens, power draw, mounting and weather rating for van, RV and battery-powered campsite lighting.";
export const mainKeyword = "best 12v led camping lights";
export const introParagraphs = [
  "12V LED camping lights run straight from a car socket, an RV battery or a power station, so they suit campers with a battery already on hand. The numbers that matter are watts drawn, lumens and the connectors in the box.",
  "Five picks made the list, from a 4-bar light kit to a COB panel and a clamp-on bulb. They were sorted by listed lumens, wattage, connector set, weather rating and mounting."
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
    "id": "best-12v-led-camping-lights-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "12V LED Interior Light Bar Kit",
    "price": "$54.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51vu7GV+iGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F4JBLCS3?tag=rvgearlab-amz-20",
    "description": "The Welmotive kit has four 550 mm aluminum bars with 120 5050 LEDs, listed at 2880 lumens total and 24W (6W per bar at 0.5A each at 12V). It is IP67 rated and offers a 3 m cigarette lighter cable, alligator clips, USB and Type-C power, with magnets and 8 straps for mounting.\n\nIt is the brightest and most flexible 12V kit here and carries more connector options than the TopAutoGear. It costs more than the others.\n\nVan and RV owners will like that the bars strap on or stick to metal surfaces. The kit ships with a carry bag and a dimmer.",
    "specs": [
      "4 bars, 2880 lumens, 24W",
      "IP67, 6063 aluminum",
      "12V cable, clips, USB, Type-C"
    ],
    "pros": [
      "Bright 2880 lumens in total",
      "IP67 sealed build",
      "Many power connectors",
      "Magnets and straps for mounting"
    ],
    "cons": [
      "Priciest kit in the list",
      "Four bars take space to pack"
    ],
    "bestFor": "Van and tent lighting",
    "take": "The brightest, most flexible 12V kit here.",
    "catch": "Its total draw is 24W, so a small battery drains within hours."
  },
  {
    "id": "best-12v-led-camping-lights-2",
    "rank": 2,
    "badge": "Best Two-Color Kit",
    "name": "12V LED Light",
    "price": "$20.74",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ZWcAgJfDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DCVQVSVD?tag=rvgearlab-amz-20",
    "description": "The TopAutoGear kit has 2 white and 2 amber 20 inch aluminum bars, each with 30 5050 LEDs, an IP67 rating, built-in magnets and straps. It includes a 10 ft quick-connect lead with a cigarette lighter plug and a battery clamp, a dimmer and a carry bag.\n\nIt is cheaper than the Welmotive and adds amber bars for warm light. The amber bars cut insects and glare.\n\nIt suits campers who want white work light and amber ambiance from one kit. The 10 ft lead reaches across a tent.",
    "specs": [
      "2 white, 2 amber 20 inch bars",
      "IP67, 5050 LEDs",
      "10 ft lead, clamp, dimmer"
    ],
    "pros": [
      "Amber bars for warm light",
      "IP67 weatherproof connectors",
      "Magnets and straps",
      "Dimmer and carry bag included"
    ],
    "cons": [
      "Lumens and watts are not stated",
      "Fewer power options than the Welmotive"
    ],
    "bestFor": "White and amber camp lighting",
    "take": "A two-color bar kit at a lower price.",
    "catch": "No lumen or wattage figure is listed."
  },
  {
    "id": "best-12v-led-camping-lights-3",
    "rank": 3,
    "badge": "Best Tall Light",
    "name": "Telescopic Camping Light with Remote",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31vDtVSJcHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H375K6R7?tag=rvgearlab-amz-20",
    "description": "The telescopic 12V light lists 10,000 lumens from 228 COB LEDs, 3 brightness levels at 25%, 50% and 100%, an IP65 rating and a remote. It has a maximum height of 118 inches and connects to 12V by battery clips or a cigarette lighter plug.\n\nIt is the tallest and the brightest on paper here, with a lumen figure above the Welmotive's total. It lists a remote and a stand-up design.\n\nIt suits campers who want a floodlight on a pole for a big site. The telescoping mast raises it above tents.",
    "specs": [
      "10,000 lumens, 228 COB LEDs",
      "IP65, 3 brightness levels",
      "118 inch mast, remote"
    ],
    "pros": [
      "Very bright at 10,000 lumens listed",
      "Mast raises the light high",
      "IP65 water rating",
      "Remote control included"
    ],
    "cons": [
      "Brand is generic with few details",
      "Draw in watts is not stated"
    ],
    "bestFor": "Large-site floodlighting",
    "take": "A tall, bright pole light for open campsites.",
    "catch": "Power draw is not stated, so use a fused battery lead."
  },
  {
    "id": "best-12v-led-camping-lights-4",
    "rank": 4,
    "badge": "Best Slim Panel",
    "name": "symbuth Ultra Bright DC 12V COB LED Panel Light with Remote Control Dimmer",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+8GFFFuNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08S6ZLJSG?tag=rvgearlab-amz-20",
    "description": "The symbuth is a 12V DC COB LED panel with 336 FLIP chips, a 70W maximum, an RF remote with 10 brightness levels and 8 modes. It measures 8.7 by 4.4 inches, is under 4 mm thick and takes up to 5A from any 12V source.\n\nIt is the thinnest and one of the cheapest picks, and it is a bare module with no mount or case. The listing says it equals a 350W halogen lamp.\n\nIt suits DIY campers who want a slim panel for a camper or a build. A heat sink is not needed at 12V constant voltage.",
    "specs": [
      "12V DC, 70W max, 5A",
      "336 LEDs, 8.7 by 4.4 inches",
      "RF remote, 10 levels"
    ],
    "pros": [
      "Under 4 mm thin",
      "Remote with 10 brightness levels",
      "Works from any 12V source",
      "Low price"
    ],
    "cons": [
      "Bare module with no case or mount",
      "Needs wiring knowledge"
    ],
    "bestFor": "DIY van and camper lighting",
    "take": "A slim, cheap COB panel for DIY lighting.",
    "catch": "It is a bare board, so you must mount and fuse it."
  },
  {
    "id": "best-12v-led-camping-lights-5",
    "rank": 5,
    "badge": "Best Budget",
    "name": "DC 12V LED Light Bulb Emergency Lamp Lights with 3 Meter Clamp Wiring & Switch for Camping Light",
    "price": "$15.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51yZPu7F3oL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJWYWJ3K?tag=rvgearlab-amz-20",
    "description": "The UILFHX is a 12V LED bulb offered in 6W, 12W and 18W versions, with a 6500K light and a 50,000 hour life. It has a stainless steel lamp head, a 3 m clamp wiring harness with a switch and a red-and-black connection to a battery.\n\nIt is the simplest and cheapest pick, with clips for direct battery use. It gives a single point of light, not a bar.\n\nIt suits campers and boaters who want a quick emergency light. It is listed for caravan, van, boat and truck use.",
    "specs": [
      "12V, 6W, 12W or 18W",
      "6500K, 50,000 hour life",
      "3 m clamp wiring and switch"
    ],
    "pros": [
      "Lowest price in the list",
      "Clamps straight onto a battery",
      "Three wattage versions",
      "3 m lead with a switch"
    ],
    "cons": [
      "Single bulb gives a point of light",
      "Check which wattage you receive"
    ],
    "bestFor": "Quick battery emergency light",
    "take": "A cheap clamp-on 12V bulb for quick light.",
    "catch": "Pick the wattage that suits your battery."
  }
];

export const howWeEvaluated = [
  {
    "title": "Wattage and lumens",
    "description": "Stated watts and lumens were compared."
  },
  {
    "title": "Connectors",
    "description": "Cigarette plugs, clips, USB and Type-C were compared."
  },
  {
    "title": "Weather rating",
    "description": "IP67 and IP65 ratings were noted."
  },
  {
    "title": "Mounting",
    "description": "Magnets, straps and poles were noted."
  },
  {
    "title": "Build",
    "description": "Aluminum bars and bare modules were compared."
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
    "subheading": "By Setup",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Van or RV bar lighting",
          "Welmotive 4-Bar LED Kit",
          "2880 lumens and many connectors."
        ],
        [
          "White and amber light",
          "TopAutoGear 12V LED Kit",
          "Two white and two amber bars."
        ],
        [
          "Floodlight for a large site",
          "Light Ranger Telescopic 12V Lantern",
          "10,000 lumens on a mast."
        ],
        [
          "DIY build",
          "symbuth 12V COB Panel",
          "Slim panel with a remote."
        ],
        [
          "Quick emergency light",
          "UILFHX 12V LED Bulb",
          "Clamps onto a battery."
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
          "UILFHX 12V LED Bulb or symbuth 12V COB Panel"
        ],
        [
          "$20 to $40",
          "TopAutoGear 12V LED Kit or Light Ranger Telescopic 12V Lantern"
        ],
        [
          "$50 to $60",
          "Welmotive 4-Bar LED Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Light Bars vs Single Light",
    "cards": [
      {
        "label": "Light bars",
        "text": "The Welmotive 4-Bar LED Kit and TopAutoGear 12V LED Kit spread light along strips."
      },
      {
        "label": "Single light",
        "text": "The Light Ranger Telescopic 12V Lantern, symbuth 12V COB Panel and UILFHX 12V LED Bulb give one source."
      }
    ],
    "note": "Most campers should pick the Welmotive 4-Bar LED Kit."
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
          "Under $16",
          "UILFHX 12V LED Bulb"
        ],
        [
          "Around $17",
          "symbuth 12V COB Panel"
        ],
        [
          "Around $21",
          "TopAutoGear 12V LED Kit"
        ],
        [
          "Around $40",
          "Light Ranger Telescopic 12V Lantern"
        ],
        [
          "Around $55",
          "Welmotive 4-Bar LED Kit"
        ]
      ]
    }
  },
  {
    "subheading": "Van Interior Lighting Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Strip lights with magnets and a dimmer."
      },
      {
        "label": "In this comparison",
        "text": "The Welmotive 4-Bar LED Kit lists magnets, straps and a dimmer, and the TopAutoGear 12V LED Kit lists the same plus amber bars."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Welmotive 4-Bar LED Kit if you want the brightest kit and the most connectors."
      },
      {
        "label": "Save if",
        "text": "Save with the UILFHX 12V LED Bulb if you want a basic clamp-on light."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Watts and amps",
    "explanation": "A 24W kit at 12V draws about 2 amps, so a 100Ah battery runs it for many hours. A 70W panel draws nearly 6 amps. Divide watts by 12 to find the current."
  },
  {
    "criterion": "Fusing and wire",
    "explanation": "A 12V light on a battery needs a fuse near the terminal. Thin wire can overheat at 5A. Check wire gauge and add a fuse."
  },
  {
    "criterion": "Connector types",
    "explanation": "Cigarette plugs, alligator clips and USB cover different sources. A kit with several is easier to use. Check the connector list."
  },
  {
    "criterion": "Warm versus cool light",
    "explanation": "Amber or warm light suits tents and attracts fewer bugs, while cool white suits tasks. A kit with both is flexible. Check color options."
  },
  {
    "criterion": "Weather rating",
    "explanation": "IP67 handles immersion, and IP65 handles jets. A light left outside needs a rating. Check the code."
  }
];

export const faq = [
  {
    "q": "Can I run these from a power station?",
    "a": "Many power stations have a 12V DC output. Check the plug and the watt limit. Use the kit's USB or Type-C if it has one."
  },
  {
    "q": "What is the common mistake?",
    "a": "Wiring a light to a battery without a fuse. A short can start a fire. Add a fuse near the battery."
  },
  {
    "q": "Is a 12V light worth it over a lantern?",
    "a": "12V gives bigger, steady light for a van or a site. A lantern is simpler for a tent. Pick by setup."
  },
  {
    "q": "How do I hook it up?",
    "a": "Use the cigarette plug or clamp to the battery, red to positive and black to negative. Add a fuse. Check the switch."
  },
  {
    "q": "How do I care for it?",
    "a": "Wipe the bars and keep connectors dry. Store them in the bag. Check the cable for cracks."
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
