export const guideSlug = "best-rv-water-pump";
export const guideTitle = "6 Best RV Water Pump in 2026";
export const metaTitle = "Best RV Water Pump in 2026";
export const metaDescription = "Compare six 12V RV fresh water pumps by GPM, PSI, amp draw and replacement fit so you can match the right pump to your RV plumbing.";
export const mainKeyword = "best rv water pump";
export const introParagraphs = [
  "An RV fresh water pump is a flow, pressure and fit decision, and the numbers are not additive. A higher GPM does not mean better pressure, and a 55 PSI pump can overstress older fixtures that were built for lower pressure.",
  "This hub explains the real spec choices and ranks six pumps, from direct replacements for popular models to higher-flow options. Confirm your plumbing's pressure tolerance first, then match port size, amp draw and any named replacement model."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41RexXi4k5L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-water-pump-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "SEAFLO 42 Series 12V RV Water Pump",
    "price": "$64.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RexXi4k5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01CQ7DD0S?tag=rvgearlab-20",
    "description": "The SEAFLO 42 Series is a 12V pump rated at 3.0 GPM and 55 PSI with a bypass, self-priming to 6 feet and a 7.0 amp maximum draw. The listing names NSF/ANSI/CAN 61 and 372 testing for potable water contact and a 4-year limited warranty.\n\nAgainst the wassermann 3.0 GPM, it adds the longer warranty and named potable certifications at a slightly higher price. Against the Kohree 5.5 GPM, it offers less flow but more documented specs.\n\nBest for owners who want a well-documented pump with a warranty. Confirm the port fittings and bypass need.",
    "specs": [
      "3.0 GPM, 55 PSI, 12V",
      "Self-priming 6 ft",
      "NSF/ANSI/CAN 61 and 372"
    ],
    "pros": [
      "Names NSF/ANSI/CAN 61 and 372 testing",
      "4-year limited warranty",
      "Self-priming to 6 feet with bypass",
      "7.0 amp maximum draw stated"
    ],
    "cons": [
      "Flow is lower than the 4 to 5.5 GPM pumps",
      "Costs more than generic pumps"
    ],
    "bestFor": "Documented replacement"
  },
  {
    "id": "best-rv-water-pump-2",
    "rank": 2,
    "badge": "Best High Flow",
    "name": "Kohree 12V RV Water Pump 5.5GPM 55 PSI",
    "price": "$59.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51bS9VaS2HL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09879SQZ7?tag=rvgearlab-20",
    "description": "The Kohree 12V pump delivers 5.5 GPM at 55 PSI, is self-priming up to 3 meters and has run-dry and thermal overload protection. It runs on a continuous cycle with an open flow.\n\nCompared with the SEAFLO 42 Series, it moves much more water but gives less spec detail. Compared with the MAXZONE, it lists higher flow.\n\nBest for owners who want fast fill and strong flow. Confirm that your plumbing can handle 55 PSI.",
    "specs": [
      "5.5 GPM, 55 PSI",
      "Self-priming to 3 meters",
      "Run dry, thermal protection"
    ],
    "pros": [
      "5.5 GPM for fast water delivery",
      "Run-dry and thermal overload protection",
      "Self-primes up to 3 meters",
      "Leak-proof factory inspection stated"
    ],
    "cons": [
      "No potable certification named",
      "Higher flow draws more amps"
    ],
    "bestFor": "High-flow users"
  },
  {
    "id": "best-rv-water-pump-3",
    "rank": 3,
    "badge": "Best Adjustable Pressure",
    "name": "Gidrox 12V RV Water Pump",
    "price": "$38.69",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VNUk3lUcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGGMZMW7?tag=rvgearlab-20",
    "description": "The Gidrox is a 12V pump with 4.0 GPM at a preset 45 PSI and an adjustable range of 30 to 80 PSI. It lists a 10 foot self-prime, a 158 degree thermal safeguard and vortex noise reduction with a rubber base.\n\nVersus the MAXZONE, it adds adjustable pressure and a quieter design. Versus the wassermann 3.5 GPM, it offers more flow.\n\nBest for owners who want to tune pressure. Do not raise pressure beyond what your plumbing handles.",
    "specs": [
      "4.0 GPM, 45 PSI preset",
      "30 to 80 PSI adjustable",
      "10 ft self-prime"
    ],
    "pros": [
      "Pressure adjustable from 30 to 80 PSI",
      "10 foot self-priming lift",
      "Rubber vibration-damping base",
      "Low price for the flow"
    ],
    "cons": [
      "No potable certification named",
      "80 PSI can damage fixtures"
    ],
    "bestFor": "Pressure tuning"
  },
  {
    "id": "best-rv-water-pump-4",
    "rank": 4,
    "badge": "Best 4 GPM Budget",
    "name": "RV Fresh Water Diaphragm Pump 12 Volt DC 4.0 GPM 50PSI",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51mGi47ch8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BV6JN54M?tag=rvgearlab-20",
    "description": "The MAXZONE is a 12V diaphragm pump at 4.0 GPM and 50 PSI with a self-priming design that can run dry for a short time. The kit includes two 1/2 inch barbed adapters and a 50 mesh inlet strainer, and lists a 30 PSI maximum inlet pressure.\n\nCompared with the Gidrox, it has fixed pressure and fewer comfort features. Compared with the SEAFLO 42 Series, it offers more flow at a lower price.\n\nBest for budget owners who want 4 GPM and an inlet strainer. Watch the 30 PSI inlet limit.",
    "specs": [
      "4.0 GPM, 50 PSI",
      "50 mesh inlet strainer",
      "Max inlet 30 PSI"
    ],
    "pros": [
      "4.0 GPM flow at 50 PSI",
      "Includes 50 mesh inlet strainer",
      "Two 1/2 inch barbed adapters included",
      "Can run dry for short periods"
    ],
    "cons": [
      "30 PSI maximum inlet pressure",
      "No potable certification named"
    ],
    "bestFor": "Budget flow"
  },
  {
    "id": "best-rv-water-pump-5",
    "rank": 5,
    "badge": "Best Model Replacement 2088",
    "name": "WASSERMANN RV Water Pump 12V DC 2088-554-144 Replacement",
    "price": "$62.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41up0RNCKPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GH6B59JS?tag=rvgearlab-20",
    "description": "The wassermann pump is a 3.5 GPM, 45 PSI three-chamber diaphragm pump designed to replace the 2088-554-144 model. It works with an automatic pressure switch and is described as self-priming.\n\nAgainst the wassermann 3.0 GPM, it has more flow but lower pressure and replaces a different model. Against the SEAFLO 42 Series, it costs less and lacks the named certifications.\n\nBest for owners replacing a 2088-554-144 pump. Verify the model number before ordering.",
    "specs": [
      "3.5 GPM, 45 PSI",
      "Replaces 2088-554-144",
      "Three-chamber diaphragm"
    ],
    "pros": [
      "Direct replacement for the 2088-554-144",
      "Automatic pressure switch included",
      "Three-chamber diaphragm design",
      "Lower pressure may be gentler on fixtures"
    ],
    "cons": [
      "Only a drop-in for one named model",
      "No potable certification named"
    ],
    "bestFor": "2088 replacement"
  },
  {
    "id": "best-rv-water-pump-6",
    "rank": 6,
    "badge": "Best Model Replacement 4008",
    "name": "WASSERMANN RV Water Pump 12V DC 4008-101-A65/E65 Replacement",
    "price": "$56.84",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tm1v88bhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FK9DKZS9?tag=rvgearlab-20",
    "description": "The wassermann pump is a 3.0 GPM, 55 PSI four-chamber pump designed to replace 4008-101-A65 and E65 models. It uses a pressure switch and is sold as quiet.\n\nVersus the wassermann 3.5 GPM, it runs at higher pressure with a four-chamber design. Versus the SEAFLO 42 Series, it costs less but lacks the warranty and certification.\n\nBest for owners replacing a 4008-101 pump. Verify the model before ordering.",
    "specs": [
      "3.0 GPM, 55 PSI",
      "Replaces 4008-101-A65/E65",
      "Four-chamber, pressure switch"
    ],
    "pros": [
      "Direct replacement for 4008-101-A65 and E65",
      "Four-chamber design",
      "Pressure switch included",
      "Lower price than SEAFLO"
    ],
    "cons": [
      "Only a drop-in for named models",
      "No potable certification named"
    ],
    "bestFor": "4008 replacement"
  }
];

export const howWeEvaluated = [
  {
    "title": "Flow and pressure",
    "description": "We compared GPM and PSI as separate numbers, not a combined score."
  },
  {
    "title": "Electrical draw",
    "description": "We noted amp draw where listed since it affects battery and wiring."
  },
  {
    "title": "Self-prime and protection",
    "description": "We compared prime lift and dry-run or thermal protection."
  },
  {
    "title": "Replacement fit",
    "description": "We noted named model replacements and ports."
  },
  {
    "title": "Water-contact claims",
    "description": "We separated named certifications from general claims."
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
    "subheading": "By Replacement Situation",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Replacing a 2088-554-144",
          "wassermann 3.5 GPM",
          "Named replacement for that model."
        ],
        [
          "Replacing a 4008-101 pump",
          "wassermann 3.0 GPM",
          "Named replacement for 4008-101 models."
        ],
        [
          "Want a warranty and potable testing",
          "SEAFLO 42 Series",
          "4-year warranty and NSF/ANSI/CAN 61."
        ],
        [
          "Fast fill, strong flow",
          "Kohree 5.5 GPM",
          "5.5 GPM with protections."
        ],
        [
          "Pressure tuning",
          "Gidrox 4.0 GPM",
          "Adjusts from 30 to 80 PSI."
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
          "$30 to $50",
          "Gidrox 4.0 GPM or MAXZONE 4.0 GPM"
        ],
        [
          "$50 to $60",
          "wassermann 3.0 GPM or Kohree 5.5 GPM"
        ],
        [
          "$60 to $70",
          "wassermann 3.5 GPM or SEAFLO 42 Series"
        ]
      ]
    }
  },
  {
    "subheading": "High Flow vs Low Pressure",
    "cards": [
      {
        "label": "High flow",
        "text": "The Kohree 5.5 GPM and MAXZONE 4.0 GPM move more water but draw more amps. They suit fast fills."
      },
      {
        "label": "Gentle pressure",
        "text": "The wassermann 3.5 GPM at 45 PSI and Gidrox 4.0 GPM at a 45 PSI preset are easier on older fixtures. The Gidrox 4.0 GPM can also be adjusted."
      }
    ],
    "note": "Most owners should choose a balanced pump like the SEAFLO 42 Series unless the Kohree 5.5 GPM flow is needed."
  },
  {
    "subheading": "By Plumbing Concern",
    "table": {
      "headers": [
        "Concern",
        "Recommended pick"
      ],
      "rows": [
        [
          "Older fixtures, lower pressure",
          "wassermann 3.5 GPM"
        ],
        [
          "Documented warranty",
          "SEAFLO 42 Series"
        ],
        [
          "Budget 4 GPM",
          "MAXZONE 4.0 GPM"
        ],
        [
          "Quiet cabin",
          "Gidrox 4.0 GPM"
        ]
      ]
    }
  },
  {
    "subheading": "For Replacing a Failing Original Pump Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A named replacement model, matching ports and similar amp draw so wiring stays the same, as the SEAFLO 42 Series listing shows."
      },
      {
        "label": "In this comparison",
        "text": "The wassermann 3.5 GPM and wassermann 3.0 GPM name exact models. The SEAFLO 42 Series states a 7.0 amp draw."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the SEAFLO 42 Series if you want a warranty and named potable testing, or the Kohree 5.5 GPM if high flow matters."
      },
      {
        "label": "Save if",
        "text": "Save with the MAXZONE 4.0 GPM or wassermann 3.5 GPM if you want a basic, lower-priced pump."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Flow in GPM",
    "explanation": "Flow decides how fast a shower or sink fills, and it falls as pressure rises. A pump rated 5.5 GPM at open flow may deliver less in your plumbing. Compare GPM at the stated pressure."
  },
  {
    "criterion": "Pressure and cut-in",
    "explanation": "Pressure is how hard the pump pushes, and cut-in and cut-out define when it starts and stops. Higher pressure can stress fixtures. Match PSI to your plumbing and avoid raising it blindly."
  },
  {
    "criterion": "Amp draw",
    "explanation": "Pumps draw several amps when running, and the draw grows with flow. A weak wire or fuse causes voltage drop. Look for the maximum amp draw and check your wire gauge."
  },
  {
    "criterion": "Self-priming lift",
    "explanation": "Self-priming lift lets the pump draw water from a tank below it. A pump with a short lift can fail when the tank is low. Look for the lift in feet or meters."
  },
  {
    "criterion": "Protection and noise",
    "explanation": "Dry-run and thermal protection prevent burnout, and rubber feet cut vibration. This matters when a tank runs dry. Look for those features by name."
  },
  {
    "criterion": "Port size and fit",
    "explanation": "Ports vary between 1/2 inch and 3/4 inch, and replacement models match specific mounts. A mismatch needs adapters. Check the port size and the model number listed."
  }
];

export const faq = [
  {
    "q": "Does a higher GPM pump give better pressure?",
    "a": "No. GPM is flow and PSI is pressure. A Kohree 5.5 GPM pump still runs at 55 PSI. Choose by both."
  },
  {
    "q": "Can 55 PSI harm my RV plumbing?",
    "a": "It can on older fixtures built for lower pressure. Check your plumbing rating. The wassermann 3.5 GPM runs at 45 PSI."
  },
  {
    "q": "Is the SEAFLO 42 Series worth more than the MAXZONE 4.0 GPM?",
    "a": "If you want a warranty and named potable testing, yes. If you want more flow for less, the MAXZONE is a fair budget pick."
  },
  {
    "q": "How do I install a replacement pump?",
    "a": "Shut off power, drain lines, swap the pump and connect the ports. Check for leaks. Add a strainer if the pump lacks one."
  },
  {
    "q": "How do I maintain my RV water pump?",
    "a": "Clean the inlet strainer and sanitize the lines each season. Drain before freezing weather. Never run it dry for long."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best RV Water Filter With Pump",
    "href": "/water-plumbing/best-rv-water-filter-with-pump"
  },
  {
    "title": "Best RV Water Pump Accumulator Tank",
    "href": "/water-plumbing/best-rv-water-pump-accumulator-tank"
  },
  {
    "title": "Best Heated Water Hose For RV",
    "href": "/water-plumbing/best-heated-water-hose-for-rv"
  },
  {
    "title": "Best RV Sewer Hose Fittings",
    "href": "/water-plumbing/best-rv-sewer-hose-fittings"
  }
];
