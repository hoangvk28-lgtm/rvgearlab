export const guideSlug = "best-30-amp-rv-inverter-charger";
export const guideTitle = "The Best 30 Amp RV Inverter Charger in 2026: Our Top Pick";
export const metaTitle = "Best 30 Amp RV Inverter Charger in 2026";
export const metaDescription = "One genuine 30 amp RV inverter charger with a single-leg transfer switch, plus how to check pass-through rating, idle draw and charger output before buying.";
export const mainKeyword = "best 30 amp rv inverter charger";
export const introParagraphs = [
  "A real 30 amp RV inverter charger combines an inverter, a battery charger and an AC transfer switch that passes shore or generator power through at 30A. Plenty of listings that mention 30A are only a solar controller or a standalone transfer switch. We kept the one product that is actually a 3000W inverter charger with a 30A single-leg transfer switch. The sections below show how to judge pass-through rating and charger output yourself."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31S8p07qEWL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-30-amp-rv-inverter-charger-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Go Power Advanced 3000W Sine Wave Inverter Charger",
    "price": "$539.82",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31S8p07qEWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DZW2W5MH?tag=rvgearlab-amz-20",
    "description": "The Go Power Advanced 3000W is a pure sine wave inverter charger with a single-leg 30A transfer switch, priced at $539.82. It combines inverter, charger and transfer switch in one box and adds improved AC pass-through behavior with over-the-air firmware updates. It carries a 3-year support plan.\n\nIt stands alone here because the other 30A listings were solar controllers or transfer switches, not true inverter chargers. Pick this if your rig has 30A shore power and you want one box to replace a separate inverter and converter. The caveat is that the listing does not state charger amps, idle draw or efficiency, so check the manual.",
    "specs": [
      "3000W, single-leg 30A",
      "Inverter, charger, transfer switch",
      "3-year support plan"
    ],
    "pros": [
      "Inverter, charger and transfer switch fit in one box",
      "Single-leg 30A switch matches standard 30A RV shore power",
      "Firmware updates arrive over the air, with 3-year support"
    ],
    "cons": [
      "Charger amps and idle draw are not listed on the page",
      "Single-leg only, so it does not feed 50A split-phase rigs"
    ],
    "bestFor": "30A rigs wanting one combined power box"
  }
];

export const howWeEvaluated = [
  {
    "title": "True inverter charger",
    "description": "We required an inverter, charger and transfer switch in one product, not a solar controller or a switch alone."
  },
  {
    "title": "30A pass-through",
    "description": "We checked for a stated 30A AC transfer or pass-through rating."
  },
  {
    "title": "Continuous watts",
    "description": "We looked at rated inverter watts, because surge numbers alone do not describe sustained load."
  },
  {
    "title": "Missing data",
    "description": "We noted charger current, idle draw and efficiency when the listing left them out."
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
    "subheading": "By Shore Power Type",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "30A single-leg RV",
          "Go Power 3000W",
          "Its single-leg 30A transfer switch matches this service."
        ],
        [
          "50A split-phase RV",
          "Go Power 3000W",
          "Not a match without an adapter plan, since this is single-leg."
        ],
        [
          "Van or small trailer on 30A",
          "Go Power 3000W",
          "Fits if your inverter load stays under its 3000W rating."
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
          "$530 to $540",
          "Go Power 3000W"
        ]
      ]
    }
  },
  {
    "subheading": "Combined Unit vs Separate Parts",
    "cards": [
      {
        "label": "Combined (Go Power 3000W)",
        "text": "The Go Power 3000W puts inverter, charger and switch in one chassis at $539.82. Fewer wires, one place to troubleshoot."
      },
      {
        "label": "Separate parts",
        "text": "A standalone inverter plus a separate converter and transfer switch lets you replace one failure at a time. None of those parts made this list, so the Go Power 3000W is the only option compared."
      }
    ],
    "note": "Most 30A owners should default to the Go Power 3000W for simplicity."
  },
  {
    "subheading": "By Appliance Load",
    "table": {
      "headers": [
        "Best fit",
        "Recommended pick"
      ],
      "rows": [
        [
          "Microwave and coffee maker",
          "Go Power 3000W"
        ],
        [
          "Laptops and TV only",
          "Go Power 3000W"
        ],
        [
          "Air conditioner startup",
          "Go Power 3000W"
        ]
      ]
    }
  },
  {
    "subheading": "For Boondocking With Shore Backup Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A transfer switch with a stated 30A rating, plus listed charger current and idle draw"
      },
      {
        "label": "In this comparison",
        "text": "The Go Power 3000W covers the switch and 3000W inverter, but you need the manual for charger and idle numbers."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on a unit with published charger amps and efficiency if you need to size a big lithium bank around the Go Power 3000W's missing specs."
      },
      {
        "label": "Save if",
        "text": "Save with the Go Power 3000W if your battery bank is small and you mostly run light AC loads."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "30A pass-through rating",
    "explanation": "This is the amperage the transfer switch can carry from shore power to your panel. A switch rated below 30A will overheat when the air conditioner and microwave run together. Look for a stated 30A transfer or pass-through spec."
  },
  {
    "criterion": "Continuous versus surge watts",
    "explanation": "Continuous watts are what the inverter can hold for hours, while surge only covers a few seconds of startup. A 3000W label with 1500W continuous cannot run an air conditioner. Check that the listing says rated or continuous."
  },
  {
    "criterion": "Charger current and profile",
    "explanation": "Charger amps decide how fast the bank refills on shore power. A small charger takes a full day on a 200Ah bank. Find charger amps and lithium support in the specs."
  },
  {
    "criterion": "Idle draw",
    "explanation": "Inverters burn power even with nothing plugged in, sometimes 20 to 40 watts. Over a day that drains a battery silently. Look for a no-load draw number and a sleep mode."
  },
  {
    "criterion": "Single-leg or split-phase",
    "explanation": "A single-leg unit serves one 120V hot line, which matches 30A RVs. A 50A rig uses two hot legs and needs a split-phase design. Confirm the term single-leg in the listing."
  }
];

export const faq = [
  {
    "q": "Is the Go Power 3000W good for a 50A RV?",
    "a": "It is a single-leg 30A design, so it fits 30A RVs directly. A 50A split-phase rig needs a different transfer arrangement."
  },
  {
    "q": "Does it need a separate transfer switch?",
    "a": "No, the Go Power 3000W includes the transfer switch. That is what separates a true inverter charger from the stand-alone switches also sold for 30A."
  },
  {
    "q": "Can it run an air conditioner?",
    "a": "The 3000W rating gives room, but the listing does not state continuous versus surge. Check the manual and your air conditioner's startup amps first."
  },
  {
    "q": "Why not a solar inverter with a 30A controller?",
    "a": "A 30A MPPT figure describes solar input, not AC pass-through. Those products can charge from panels but do not give you 30A shore transfer."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Compact RV Inverter",
    "href": "/power-electrical/best-compact-rv-inverter"
  },
  {
    "title": "Best Pure Sine Wave Inverter For RV",
    "href": "/power-electrical/best-pure-sine-wave-inverter-for-rv"
  },
  {
    "title": "Best Quiet RV Inverter",
    "href": "/power-electrical/best-quiet-rv-inverter"
  },
  {
    "title": "Best RV Inverter For Boondocking",
    "href": "/power-electrical/best-rv-inverter-for-boondocking"
  }
];
