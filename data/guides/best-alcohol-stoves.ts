export const guideSlug = "best-alcohol-stoves";
export const guideTitle = "5 Best Alcohol Stoves in 2026";
export const metaTitle = "Best Alcohol Stoves in 2026";
export const metaDescription = "Best alcohol stoves compared on listed weight, boil time, fuel capacity and flame control, for campers who want a simple, quiet burner without canisters.";
export const mainKeyword = "best alcohol stoves";
export const introParagraphs = [
  "Alcohol stoves have almost no moving parts, run silently and burn cheap denatured alcohol, which is why backpackers and hobby cooks keep coming back to them. The trade is slower boiling and a flame that is hard to see in daylight.",
  "The five picks range from a 3.51 oz hobby burner to a 304 stainless siphon system with a 200 ml tank. Use any alcohol stove outdoors only, on a flat surface, and never refill it while it is still hot."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/kitchen-campfire-skillet.webp";
export const heroImageAlt = "Breakfast cooking in a cast iron skillet over a campfire";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-alcohol-stoves-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ALOCS 2250W Alcohol Stove Set with Foldable Stand Camping Stove",
    "price": "$34.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4173KUIJwUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F6W93DW6?tag=rvgearlab-20",
    "description": "The ALOCS is a 304 stainless steel alcohol stove with a 2250W stated output and a 200 ml fuel tank. The listing gives a 5 second preheat, a 4 minute boil time, a leak-proof silicone seal and a 22 lb load capacity.\n\nIt lists more fuel capacity and burn time than the aluminum burners here, up to 45 minutes on high and 2 hours on low. The Vortex-Siphon design and double wall sit well above a simple brass cup like the Keweis Mini.\n\nIt suits campers and backpackers who want fast boiling and a stable, foldable stand. Cookware from 3.1 to 10.2 inches fits the supports.",
    "specs": [
      "2250W with 5 second preheat",
      "200 ml tank, 45 min on high",
      "304 stainless, 22 lb load"
    ],
    "pros": [
      "Stated 4 minute boil time",
      "Long burn time without refilling",
      "Stable stand with big load rating",
      "Leak-proof silicone cover"
    ],
    "cons": [
      "Heavier at 13.6 oz",
      "Pricier than the simple burners"
    ],
    "bestFor": "Fast boils with a big tank",
    "take": "The most capable alcohol system in this group.",
    "catch": "At 13.6 oz it is not the lightest choice."
  },
  {
    "id": "best-alcohol-stoves-2",
    "rank": 2,
    "badge": "Best Budget Pick",
    "name": "Keweis Portable Outdoor Mini Alcohol Stove Burner Ultralight Camping Cookware Set for Outdoor Camping",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TVlUYezUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07NXY47BH?tag=rvgearlab-20",
    "description": "The Keweis is a brass alcohol burner with an aluminum alloy stand, weighing 145 g (5 oz) with a 3.86 by 3.86 by 2.29 inch base. A rubber o-ring seals the cover, and a foldable handle on the flame regulator controls and extinguishes the flame.\n\nIt lists a burn of about 50 minutes on 100 ml of alcohol, a figure the Gexdes Mini does not give. It is also among the lowest priced in the group.\n\nIt suits first-time alcohol stove buyers who want a proven simple design and a stand with some wind protection. The listing mentions a cookware set.",
    "specs": [
      "145 g, brass burner",
      "Rubber o-ring seals the cover",
      "About 50 min on 100 ml"
    ],
    "pros": [
      "Among the lowest prices here",
      "Burn time on 100 ml is stated",
      "Foldable handle controls the flame",
      "O-ring seals fuel in the cup"
    ],
    "cons": [
      "Aluminum stand is basic",
      "No boil time is stated"
    ],
    "bestFor": "First alcohol stove",
    "take": "A cheap, proven burner to learn alcohol cooking on.",
    "catch": "The listing gives no boil time."
  },
  {
    "id": "best-alcohol-stoves-3",
    "rank": 3,
    "badge": "Best Lightweight Kit",
    "name": "Gexdes Mini Alcohol Camping Stove Aluminum Spirit Burner with Stand",
    "price": "$22.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Ch1R+vk-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FBQZHL81?tag=rvgearlab-20",
    "description": "The Gexdes is an aluminum-magnesium alloy burner weighing 3.51 oz (about 100 g) that lists a boil of 550 ml in 8 minutes. It uses 95 percent or higher denatured alcohol and includes an empty pouring bottle, a heat-resistant rubber ring and a carry bag.\n\nThat boil time puts a number on performance where the REDCAMP Mini gives none, and the ready kit saves buying a bottle. The one-piece design avoids loose parts that can get lost in a pack.\n\nIt suits backpackers and hikers who want a light, complete starter kit. Fuel is sold separately.",
    "specs": [
      "3.51 oz, one-piece design",
      "Boils 550 ml in 8 minutes",
      "Pouring bottle and bag included"
    ],
    "pros": [
      "Stated boil time",
      "Complete kit in the box",
      "Very light at 3.51 oz",
      "No loose parts to lose"
    ],
    "cons": [
      "Fuel is not included",
      "Slower than the ALOCS"
    ],
    "bestFor": "Lightweight starter kit",
    "take": "A hiker's starter kit that weighs about 100 g.",
    "catch": "It needs 95 percent or higher denatured alcohol bought separately."
  },
  {
    "id": "best-alcohol-stoves-4",
    "rank": 4,
    "badge": "Best Warranty",
    "name": "REDCAMP Mini Alcohol Stove Camping for Backpacking",
    "price": "$16.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412dUgfzw6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0794NZXZG?tag=rvgearlab-20",
    "description": "The REDCAMP Mini is a brass burner with an aluminum alloy stand that weighs about 5 oz (145 g) and comes with a velvet bag. A base with windscreen steadies the pot, and a foldable handle on the flame regulator controls and extinguishes the flame.\n\nIt lists the same design details as the Keweis Mini and adds a 365-day limited manufacturer warranty. The listing gives about 50 minutes of fire per 100 ml of alcohol.\n\nIt suits buyers who want a basic alcohol stove with a warranty behind it. The velvet bag keeps soot off the rest of your kit.",
    "specs": [
      "145 g, brass burner",
      "Wind screen base steadies pots",
      "365-day warranty"
    ],
    "pros": [
      "365-day warranty listed",
      "Velvet bag included",
      "About 50 min on 100 ml",
      "Foldable regulator handle"
    ],
    "cons": [
      "Same basic design as cheaper twins",
      "No boil time is stated"
    ],
    "bestFor": "Buyers who want a warranty",
    "take": "A basic burner with a year of warranty cover.",
    "catch": "It costs a little more than the Keweis Mini for nearly the same stove."
  },
  {
    "id": "best-alcohol-stoves-5",
    "rank": 5,
    "badge": "Best Foldable Stand",
    "name": "THTYBROS Alcohol Stove Set with Foldable Stand Camping Stove",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41T-pUU2nqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GXVYFK6L?tag=rvgearlab-20",
    "description": "The THTYBROS is an aluminum alloy alcohol stove set with a flame regulating valve and a surrounding wind guard shell. Foldable pot support brackets with a serrated bracket design hold cookware steady, and a mesh bag is included.\n\nIt is stackable and light, and the wind guard shell is built in rather than added later. Next to the Keweis Mini it trades an o-ring seal listing for a valve and wind shell.\n\nIt suits campers who cook in breezy spots and want a stand that folds away. Simmering and boiling are both mentioned in the listing.",
    "specs": [
      "Flame regulating valve",
      "Wind guard shell, air openings",
      "Foldable serrated brackets"
    ],
    "pros": [
      "Wind guard shell built in",
      "Brackets fold flat",
      "Valve lets you tune the flame",
      "Mesh bag included"
    ],
    "cons": [
      "No weight or boil time listed",
      "Aluminum alloy wears faster than stainless"
    ],
    "bestFor": "Windy campsites",
    "take": "A folding set with wind protection built in.",
    "catch": "The listing gives no weight or boil time."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight",
    "description": "We compared stated weights, since alcohol stoves are chosen by backpackers who count ounces."
  },
  {
    "title": "Boil time",
    "description": "We looked for stated boil times and noted which listings give none."
  },
  {
    "title": "Fuel capacity",
    "description": "We compared tank size and stated burn times per fuel load."
  },
  {
    "title": "Flame control",
    "description": "We checked each listing for a regulator, valve or simmer cover."
  },
  {
    "title": "Build and extras",
    "description": "We compared materials, stands, bags and warranty details."
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
          "Weekend hikes, fast boils",
          "ALOCS 2250W",
          "4 minute boil time and a 200 ml tank."
        ],
        [
          "First alcohol stove, small budget",
          "Keweis Mini",
          "Proven design at a low price."
        ],
        [
          "Ultralight packers",
          "Gexdes Mini",
          "3.51 oz with a complete kit."
        ],
        [
          "Breezy camps",
          "THTYBROS Set",
          "Wind guard shell built in."
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
          "Keweis Mini or THTYBROS Set"
        ],
        [
          "$10 to $30",
          "REDCAMP Mini or Gexdes Mini"
        ],
        [
          "$30 to $40",
          "ALOCS 2250W"
        ]
      ]
    }
  },
  {
    "subheading": "Stainless System vs Simple Burner",
    "cards": [
      {
        "label": "Stainless system",
        "text": "The ALOCS 2250W has a siphon design, a big tank and a 22 lb load rating, at a higher weight and price."
      },
      {
        "label": "Simple burner",
        "text": "The Keweis Mini, REDCAMP Mini and Gexdes Mini are small brass or aluminum burners that weigh little and cost less."
      }
    ],
    "note": "Most campers should start with the Gexdes Mini and move to the ALOCS 2250W for bigger meals."
  },
  {
    "subheading": "By Priority",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price",
          "Keweis Mini"
        ],
        [
          "Warranty",
          "REDCAMP Mini"
        ],
        [
          "Lightest",
          "Gexdes Mini"
        ],
        [
          "Large tank",
          "ALOCS 2250W"
        ]
      ]
    }
  },
  {
    "subheading": "For Quiet Camp Cooking Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated boil time, a flame cover or valve, and a stable stand."
      },
      {
        "label": "In this comparison",
        "text": "The Gexdes Mini lists 550 ml in 8 minutes, and the ALOCS 2250W lists a 4 minute boil."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the ALOCS 2250W if you boil water for several people and want the biggest tank. Its stainless build lasts longer than aluminum burners."
      },
      {
        "label": "Save if",
        "text": "Save with the Keweis Mini, which gives a proven basic design at one of the lowest prices."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Boil time and wattage",
    "explanation": "A listing that states a boil time, such as 550 ml in 8 minutes, tells you more than a marketing wattage figure. Faster boils save fuel and daylight at camp. Look for the water volume that goes with the time."
  },
  {
    "criterion": "Fuel capacity and burn time",
    "explanation": "A bigger tank lets you cook without refilling, which is safer, because refilling a hot stove is risky. Burn time is often quoted per 100 ml. Check how many milliliters you must carry for your usual meals."
  },
  {
    "criterion": "Flame control",
    "explanation": "Many simple alcohol stoves have no real simmer control, so a regulator or cover is a useful extra. It lets you reduce the flame or put it out quickly. Check for a lid, valve or simmer ring in the listing."
  },
  {
    "criterion": "Material",
    "explanation": "Brass and stainless last longer under repeated heating than thin aluminum. Aluminum is lighter and cheaper. Choose by how much you care about weight versus longevity."
  },
  {
    "criterion": "Fuel type",
    "explanation": "Most of these burn denatured alcohol, and the Gexdes lists a 95 percent or higher purity. Read the fuel line, because wrong fuel gives sooty or weak flames. Never use gasoline."
  }
];

export const faq = [
  {
    "q": "What fuel do alcohol stoves use?",
    "a": "Most listings name denatured alcohol, and the Gexdes Mini states 95 percent or higher purity. Check each listing before you buy fuel."
  },
  {
    "q": "Are alcohol stoves safe to use?",
    "a": "They need care. The flame can be hard to see in daylight, so keep your hands clear. Use outdoors on a flat surface and never refill while hot."
  },
  {
    "q": "Is an alcohol stove better than a canister stove?",
    "a": "It is simpler, quieter and lighter, but it boils slower and has less flame control. A canister stove wins for convenience, and an alcohol stove wins for simplicity."
  },
  {
    "q": "How do I light and put out an alcohol stove?",
    "a": "Pour a measured amount of fuel, light with a lighter or match, and wait for the flame to settle. Snuff it with the lid, regulator or cover rather than blowing it out."
  },
  {
    "q": "How do I clean and store it?",
    "a": "Let it cool, empty remaining fuel into a sealed bottle if the cover is not leak-proof, and wipe soot with a cloth. The Keweis Mini and ALOCS 2250W list sealing covers or silicone seals for storing fuel."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Cookpots",
    "href": "/camp-kitchen/best-backpacking-cookpots"
  },
  {
    "title": "Best Backpacking Stoves",
    "href": "/camp-kitchen/best-backpacking-stoves"
  },
  {
    "title": "Best Camping Coffee",
    "href": "/camp-kitchen/best-camping-coffee"
  },
  {
    "title": "Best Camping Coffeemakers",
    "href": "/camp-kitchen/best-camping-coffeemakers"
  }
];
