export const guideSlug = "best-ultralight-canister-stoves";
export const guideTitle = "5 Best Ultralight Canister Stoves in 2026";
export const metaTitle = "Best Ultralight Canister Stoves in 2026";
export const metaDescription = "Best ultralight canister stoves compared on weight, fuel compatibility, ignition and wind handling for hikers who screw a stove onto a gas canister.";
export const mainKeyword = "best ultralight canister stoves";
export const introParagraphs = [
  "Canister stoves are the easiest backpacking burners to run because there is nothing to prime or pour. The question for a lightweight build is how much stove you get per gram, and which fuel connection the listing actually supports.",
  "Five canister stoves are compared here, from a 25 g titanium burner to a 95.5 g remote model with a built-in windscreen. Run any of them outdoors only, in open air, never in a tent or vehicle, and keep the canister away from the flame."
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
    "id": "best-ultralight-canister-stoves-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "MSR PocketRocket 2 Ultralight Camping and Backpacking Stove",
    "price": "$49.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412+dzwvEQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N5O7551?tag=rvgearlab-20",
    "description": "The MSR PocketRocket 2 weighs 2.6 oz and folds small and then opens out to 4.8 by 4.8 by 3.6 inches. It runs on self-sealing isobutane-propane canisters, and MSR gives a boil time of 3.5 minutes per liter.\n\nIt offers more pot-support range than the BRS-3000T, because serrated supports hold a wide range of pot sizes. Against the Fire-Maple Petrel it is simpler to pack, since the stove sits directly on the canister.\n\nIt suits hikers who want a stove that works with the canisters sold in most countries. A protective case is included and no priming or preheating is needed.",
    "specs": [
      "2.6 oz, folds to 2x2x3 in",
      "Boils 1 L in 3.5 minutes",
      "Isobutane-propane canisters"
    ],
    "pros": [
      "Canisters sold in most countries",
      "Simmer to rolling boil",
      "Many pot sizes supported",
      "Case included"
    ],
    "cons": [
      "No igniter is listed",
      "Heavier than the BRS-3000T"
    ],
    "bestFor": "General canister backpacking",
    "take": "The safe default canister stove for most hikers.",
    "catch": "It needs a lighter or matches, since no igniter is listed."
  },
  {
    "id": "best-ultralight-canister-stoves-2",
    "rank": 2,
    "badge": "Lightest Burner",
    "name": "BRS Outdoor BRS-3000T Ultra-Light Titanium Alloy Miniature Portable Picnic Camping Gas Cooking Stove Portable ",
    "price": "$16.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41MP+LromxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00NNMF70U?tag=rvgearlab-20",
    "description": "The BRS-3000T is a 25 g titanium alloy burner rated at 2700 W that twists directly onto a canister. Rated boil time for 1 L is roughly 2:58, with gas use around 140 g per hour.\n\nIt weighs a fraction of the MSR PocketRocket 2 and costs far less. Its legs flip out for use, and a 110 g canister plus the stove can be carried together in a 750 ml pot.\n\nIt suits ultralight solo hikers who mostly boil water. The listing advises making sure the control valve is fully off before twisting it onto the canister.",
    "specs": [
      "25 g titanium, 2700 W",
      "Boils 1 L in 2:58",
      "Nests with 110 g canister"
    ],
    "pros": [
      "Lightest burner in the list",
      "Very low price",
      "Fast stated boil time",
      "Nests in a 750 ml pot"
    ],
    "cons": [
      "No igniter is listed",
      "Small supports suit narrow pots"
    ],
    "bestFor": "Gram-counting solo hikers",
    "take": "The lightest and cheapest way to run a canister.",
    "catch": "Small pot supports mean larger pots can wobble."
  },
  {
    "id": "best-ultralight-canister-stoves-3",
    "rank": 3,
    "badge": "Best Light Igniter Stove",
    "name": "Fire-Maple Greenpeak 1 Camping Stove with Piezo Ignition Portable Gas Stove",
    "price": "$19.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/312K0+YdclL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D14D7LS2?tag=rvgearlab-20",
    "description": "The Fire-Maple Greenpeak 1 weighs 85 g (3 oz) and folds to 2.1 by 2.8 inches with a piezo igniter built in. It is made from stainless steel, ceramic, aluminum alloy and silicone.\n\nIt adds an igniter that the BRS-3000T lacks, and it costs less than either the MSR or the Petrel. The listing suggests pairing it with the Fire-Maple G3 pot and notes it does not work with the Z1 adapter.\n\nIt suits hikers on a budget who want a lighter-free start. It is a compact upright stove that sits on the canister.",
    "specs": [
      "85 g (3 oz), piezo ignition",
      "Folds to 2.1 x 2.8 inches",
      "Stainless steel and ceramic"
    ],
    "pros": [
      "Igniter is built in",
      "Folds very small",
      "Lower price than MSR",
      "Uses fuel efficiently per listing"
    ],
    "cons": [
      "No boil time is listed",
      "Not compatible with the Z1 adapter"
    ],
    "bestFor": "Budget hikers wanting an igniter",
    "take": "A light stove that lights itself without the MSR price.",
    "catch": "The listing does not state output or boil time."
  },
  {
    "id": "best-ultralight-canister-stoves-4",
    "rank": 4,
    "badge": "Most Fuel Flexibility",
    "name": "Odoland 3500W Windproof Camp Stove Camping Gas Stove with Fuel Canister Adapter",
    "price": "$23.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oxFcZEApL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0829RKQXZ?tag=rvgearlab-20",
    "description": "The Odoland 3500W stove is rated at up to 3500 W and takes around 3 minutes to boil 1 L of water per the listing. It has a windshield design, piezo ignition, a flame controller and a carrying case.\n\nIt is the only stove here that lists two kinds of connector, so it suits different gas tanks through an adapter. Its listing names 7/16 thread single canisters of propane or butane-propane mix (EN 417), which gives it a wider fuel choice than the MSR.\n\nIt suits car campers and hikers who already own different canisters. The aluminum alloy and stainless build folds into its case.",
    "specs": [
      "Up to 3500 W output",
      "About 3 min to boil 1 L",
      "Two connectors, piezo ignition"
    ],
    "pros": [
      "Two fuel connectors included",
      "Windshield for breezy sites",
      "Piezo ignition and flame control",
      "Carry case included"
    ],
    "cons": [
      "No weight is listed",
      "Boil time varies with weather"
    ],
    "bestFor": "Mixed canister collections",
    "take": "A flexible, wind-aware burner for hikers with different canisters.",
    "catch": "The listing does not give a weight, so it may weigh more than the ultralight picks."
  },
  {
    "id": "best-ultralight-canister-stoves-5",
    "rank": 5,
    "badge": "Best Remote Stove",
    "name": "‌Fire-Maple Petrel Titanium Ultralight Backpack Stove Light Remote Stove",
    "price": "$54.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21KHp8H5h4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FS7QWCGT?tag=rvgearlab-20",
    "description": "The Fire-Maple Petrel weighs 95.5 g (3.4 oz) and folds to 3.7 by 3.4 by 1.3 inches. Its titanium body is rated at 2.7 kW (9213 BTU/h) and the listing says it boils 0.5 L in 1 minute 48 seconds.\n\nAs a remote stove it places the canister and valve away from the flame, giving a lower center of gravity than the upright MSR and BRS stoves. A foldable aluminum windscreen is included, and it supports larger pots.\n\nIt suits fast-packers and thru-hikers who cook in wind. The layout is stable enough for bigger pots than an upright burner.",
    "specs": [
      "95.5 g titanium, 2.7 kW",
      "Boils 0.5 L in 1:48",
      "Foldable aluminum windscreen"
    ],
    "pros": [
      "Windscreen is included",
      "Low-center-of-gravity layout",
      "Supports larger pots",
      "Fast stated boil time"
    ],
    "cons": [
      "Highest price in the list",
      "More parts to set up"
    ],
    "bestFor": "Windy trips and bigger pots",
    "take": "The most stable stove here for windy camps and big pots.",
    "catch": "It costs the most and takes a little longer to set up."
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight",
    "description": "We compared the weight and folded size each listing gives, from 25 g to 95.5 g."
  },
  {
    "title": "Fuel connection",
    "description": "We looked at the canister thread and fuel type each stove accepts, since a wrong fit means no stove."
  },
  {
    "title": "Ignition",
    "description": "We compared built-in igniters, since a piezo spark saves a lighter but can fail in damp."
  },
  {
    "title": "Stated boil time",
    "description": "We noted boil times only where a listing gives one, and for which volume."
  },
  {
    "title": "Stability and wind",
    "description": "We compared stove layout, pot supports and any windscreen."
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
    "subheading": "By Cooking Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Everyday backpacking",
          "MSR PocketRocket 2",
          "Balanced weight, pot support and simmer control"
        ],
        [
          "Boil water only, minimum grams",
          "BRS-3000T",
          "25 g and a 2:58 stated boil for 1 L"
        ],
        [
          "Budget with an igniter",
          "Fire-Maple Greenpeak 1",
          "85 g and a built-in piezo igniter"
        ],
        [
          "Mixed canisters or car camping",
          "Odoland 3500W",
          "Two connectors and a 3500 W rating"
        ],
        [
          "Windy cooking with big pots",
          "Fire-Maple Petrel",
          "Remote layout and included windscreen"
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
          "BRS-3000T or Fire-Maple Greenpeak 1"
        ],
        [
          "$20 to $50",
          "Odoland 3500W or MSR PocketRocket 2"
        ],
        [
          "$50 to $60",
          "Fire-Maple Petrel"
        ]
      ]
    }
  },
  {
    "subheading": "Upright vs Remote Layout",
    "cards": [
      {
        "label": "Upright",
        "text": "The MSR PocketRocket 2, BRS-3000T, Fire-Maple Greenpeak 1 and Odoland 3500W sit directly on the canister. They save weight and pack space, but a tall pot on a small base can be tippy."
      },
      {
        "label": "Remote",
        "text": "The Fire-Maple Petrel keeps the canister and valve away from the flame, which lowers the center of gravity and allows bigger pots. It adds some weight and setup."
      }
    ],
    "note": "Pick an upright stove like the MSR PocketRocket 2 unless wind or large pots are a regular part of your trips."
  },
  {
    "subheading": "By Price Tier",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest price",
          "BRS-3000T"
        ],
        [
          "Low price with a lighter-free start",
          "Fire-Maple Greenpeak 1"
        ],
        [
          "Low price with fuel flexibility",
          "Odoland 3500W"
        ],
        [
          "Mid price proven brand",
          "MSR PocketRocket 2"
        ],
        [
          "Premium remote stove",
          "Fire-Maple Petrel"
        ]
      ]
    }
  },
  {
    "subheading": "Mixed Canister Collections",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a stated thread such as 7/16 and a listed adapter or second connector."
      },
      {
        "label": "In this comparison",
        "text": "The Odoland 3500W lists two kinds of connector and 7/16 thread single canisters in propane or butane-propane mix (EN 417), which suits owners of more than one brand."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Fire-Maple Petrel if wind and larger pots are common on your trips, or on the MSR PocketRocket 2 for its proven pot support range."
      },
      {
        "label": "Save if",
        "text": "Save with the BRS-3000T if you only boil water, or with the Odoland 3500W if you want fuel flexibility at a low price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Canister thread and fuel",
    "explanation": "The threaded valve on a canister must match the stove's connection. Listings name the thread, such as 7/16, and the fuel, such as isobutane-propane. A mismatch means the stove will not fit, so read the fuel line before you buy. Buy canisters from the same listing family as the stove if you are unsure."
  },
  {
    "criterion": "Weight against fuel use",
    "explanation": "The weight of the stove is only part of the load, because fuel is heavy. A stove that boils faster or uses gas efficiently can save a small canister on a longer trip. Compare any gas-use figure, such as roughly 140 g per hour for the BRS-3000T, against how many days you cook."
  },
  {
    "criterion": "Pot support and stability",
    "explanation": "A canister stove perches on top of its fuel, so the support spread matters. Narrow supports tip heavy pots, and a remote layout sits lower and steadier. Match the pot you carry to what the listing says the supports hold."
  },
  {
    "criterion": "Ignition reliability",
    "explanation": "A piezo igniter is a convenience, not a guarantee, because it can fail when wet or after drops. Treat a lighter as a standard backup. If a listing names no igniter, carry one."
  },
  {
    "criterion": "Wind and cold behavior",
    "explanation": "Canister output falls when the fuel is cold, and wind steals heat from the flame. A windscreen, a broad burner or a regulator helps. Keep the canister warm before use, and never wrap a canister in a screen that traps heat."
  },
  {
    "criterion": "Compatibility with adapters",
    "explanation": "Some stoves list adapters for other tanks. Check that the adapter you need is named and compatible, since the Greenpeak 1 listing says it is not compatible with the Z1 adapter. Do not assume a brand adapter fits across product lines."
  }
];

export const faq = [
  {
    "q": "Do all canister stoves fit all canisters?",
    "a": "No. The valve thread must match, and listings name it, such as 7/16 for the Odoland and isobutane-propane for the MSR. A mismatch cannot be fixed without an adapter, so check the fuel line first."
  },
  {
    "q": "What is the most common mistake with canister stoves?",
    "a": "Overloading small supports with a large pot is the usual one. Keep the pot size within what the listing states, and never run the stove inside a tent because of carbon monoxide."
  },
  {
    "q": "Is a remote stove like the Petrel worth it over an upright one?",
    "a": "If you cook in wind or with larger pots, the lower center of gravity and included windscreen help. For simple water boiling, an upright stove such as the BRS-3000T is lighter and cheaper."
  },
  {
    "q": "How do I attach the stove to a canister safely?",
    "a": "Make sure the control valve is fully closed, then twist the stove onto the canister until it seats. Open the valve slowly and light outdoors on level ground."
  },
  {
    "q": "How should I store canisters and stoves?",
    "a": "Keep canisters out of heat and direct sun and store the stove with its valve off. Remove the stove from the canister for travel if the listing advises it, and keep the O-ring clean."
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
