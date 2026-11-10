export const guideSlug = "best-rv-battery-for-pop-up-camper";
export const guideTitle = "4 Best RV Battery For Pop Up Camper in 2026";
export const metaTitle = "Best RV Battery For Pop Up Camper in 2026";
export const metaDescription = "Four 12V batteries sized for pop-up campers, from a 22 lb lithium pair to AGM options, with weight, cold-charging and fit checks that matter.";
export const mainKeyword = "best rv battery for pop up camper";
export const introParagraphs = [
  "A pop-up camper asks less of a battery than a big trailer does, but it punishes the wrong choice in two ways: a tongue box with limited room, and a tow weight you feel on every grade. Lights, a water pump, a fan and phone charging rarely need more than 100Ah. So the real decision is lithium weight savings against cheaper AGM that you can charge in freezing weather, and these four picks split on exactly that."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41wHJq+TbjL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-battery-for-pop-up-camper-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "12V 100Ah LiFePO4 Lithium Battery Group 31",
    "price": "$345.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41wHJq+TbjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DXPX82SF?tag=rvgearlab-amz-20",
    "description": "The GRNOE set is two 12V 100Ah LiFePO4 batteries at $345, each 12.9 x 6.7 x 8.6 inches and 22.48 lb. The listing quotes a built-in 100A BMS, IP65 rating and UL/UN38.3 certification, and a 300A surge for 3 seconds. It earns the top spot because weight is the pop-up owner's constant enemy.\n\nAgainst the Renogy AGM at $174.99, the pair costs $170.01 more but gives you two batteries, so per battery it is $172.50, slightly cheaper than the AGM. Pick this if you want lightweight capacity that can be split between a tongue box and a second spot. Caveat: the BMS stops charging below 32F, so winter trips need a warmer mounting spot.",
    "specs": [
      "12V 100Ah x2, 22.48 lb each",
      "100A BMS, IP65",
      "Charge cutoff below 32F"
    ],
    "pros": [
      "Each battery weighs 22.48 lb, easy on tongue weight.",
      "Two 100Ah units give flexible mounting and later expansion.",
      "IP65 rating tolerates splashes from a front tongue box."
    ],
    "cons": [
      "Charging cuts off below 32F, limiting cold camping.",
      "Higher upfront cost than any single AGM here."
    ],
    "bestFor": "Weight-conscious owners camping above freezing"
  },
  {
    "id": "best-rv-battery-for-pop-up-camper-2",
    "rank": 2,
    "badge": "Runner-Up",
    "name": "Renogy 12 Volt 100Ah Deep Cycle AGM Battery",
    "price": "$174.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31soCn59teL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075RFXHYK?tag=rvgearlab-amz-20",
    "description": "The Renogy is a plain 12V 100Ah deep-cycle AGM at $174.99, with a 1100A 5-second maximum discharge and a stated working range of -4 to 140F. It supports parallel banks of up to four units. The listing does not give weight or dimensions, so check the spec table before buying.\n\nIt sits $170.01 under the GRNOE pair and $15.00 under the Weize 24M, and unlike the Weize it is a true deep-cycle unit rather than a starter hybrid. Pick this if you camp in cold shoulder seasons and want simple lead-acid charging behavior. Caveat: AGM batteries are heavy for their capacity, and the weight is not listed here.",
    "specs": [
      "12V 100Ah AGM deep cycle",
      "1100A for 5 seconds",
      "-4 to 140F operating range"
    ],
    "pros": [
      "Rated for discharge down to -4F in cold shoulder seasons.",
      "Up to four can be paralleled for a bigger bank.",
      "Deep-cycle build suits nightly lights and pump use."
    ],
    "cons": [
      "Weight and dimensions are not listed.",
      "AGM stays heavier than lithium for the same amp-hours."
    ],
    "bestFor": "Cold-season campers who want a simple single AGM"
  },
  {
    "id": "best-rv-battery-for-pop-up-camper-3",
    "rank": 3,
    "badge": "Best for Starting Duty",
    "name": "Weize Dual Purpose AGM Battery BCI Group 24M",
    "price": "$189.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fj1LvTddL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRQSKG3G?tag=rvgearlab-amz-20",
    "description": "The Weize is a BCI Group 24M dual-purpose AGM at $189.99, listed at 12V 90Ah with 550CCA and 150RC. It claims 20x more vibration resistance than flooded batteries, useful on rough campsite roads. Charging should be a constant 14.4V per the listing.\n\nIt costs $15.00 more than the Renogy and gives up 10Ah, but adds cranking power, and sits $9.50 above the UPLUS 24M while offering 11Ah more. Pick this if the battery may also start a tow vehicle or generator in a pinch. Caveat: dual-purpose plates handle deep cycling less gracefully than the Renogy's.",
    "specs": [
      "BCI Group 24M, 12V 90Ah",
      "550CCA, 150RC",
      "Charge at 14.4V constant"
    ],
    "pros": [
      "550CCA gives real starting power if you need a jump.",
      "Group 24M size is common and easy to replace.",
      "Sealed leak-proof case tolerates trailer vibration."
    ],
    "cons": [
      "90Ah is the lowest deep-cycle capacity here besides UPLUS.",
      "Dual-purpose design wears faster under daily deep cycling."
    ],
    "bestFor": "Owners who want one battery that also cranks"
  },
  {
    "id": "best-rv-battery-for-pop-up-camper-4",
    "rank": 4,
    "badge": "Best Budget AGM Hybrid",
    "name": "UPLUS BCI Group 24M Dual Purpose AGM Marine Battery 12V 79AH 550CCA",
    "price": "$180.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ErUzfS4yL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FDQRKM25?tag=rvgearlab-amz-20",
    "description": "The UPLUS is a Group 24M dual-purpose AGM at $180.49, listed at 12V 79Ah with 550CCA and 150RC. It is marketed as a marine battery, with vibration-resistant construction and thicker cast plates, which also suits towed trailers. Weight is not listed.\n\nIt is $9.50 cheaper than the Weize 24M but offers 11Ah less capacity, and it costs $5.50 more than the Renogy while having 21Ah less. Pick this if you want a Group 24M starter-capable unit and will only run small loads. Caveat: for a pop-up with a fridge or heater fan, 79Ah runs out fast.",
    "specs": [
      "BCI Group 24M, 12V 79Ah",
      "550CCA, 150RC",
      "Marine-style vibration build"
    ],
    "pros": [
      "Group 24M footprint fits standard battery boxes.",
      "Thicker cast plates add durability on rough roads.",
      "550CCA backs up starting a generator or tow vehicle."
    ],
    "cons": [
      "79Ah is the smallest capacity of the four.",
      "Marine marketing means RV fit must be checked yourself."
    ],
    "bestFor": "Light-load campers on a tight budget"
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight and tongue load",
    "description": "We compared listed weights and pack counts, since a pop-up tongue box tolerates little extra mass."
  },
  {
    "title": "Cold-weather behavior",
    "description": "We checked each listing's stated charge and discharge temperature limits rather than assuming cold performance."
  },
  {
    "title": "Usable capacity",
    "description": "We compared amp-hours against realistic small pop-up loads like lights, pump and fan."
  },
  {
    "title": "Fit and replacement ease",
    "description": "We looked at stated size classes such as Group 24M and flagged listings missing dimensions."
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
    "subheading": "By Weight Limit and Loads",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Light tongue, weekend lights and pump",
          "GRNOE 2-Pack",
          "At 22.48 lb per battery it adds the least weight per amp-hour."
        ],
        [
          "Cold spring trips near freezing",
          "Renogy AGM 100Ah",
          "Rated to -4F and charges without a lithium low-temp cutoff."
        ],
        [
          "Battery may also start a generator",
          "Weize 24M",
          "550CCA and 90Ah cover both jobs."
        ],
        [
          "Smallest loads and tight budget",
          "UPLUS 24M",
          "79Ah is enough for lights and a phone charger."
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
          "$170 to $190",
          "Renogy AGM 100Ah or UPLUS 24M"
        ],
        [
          "$180 to $350",
          "Weize 24M or GRNOE 2-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "Lithium vs AGM in a Pop-Up",
    "cards": [
      {
        "label": "Lithium",
        "text": "The GRNOE 2-Pack weighs 22.48 lb per battery and gives two 100Ah units, but its BMS stops charging below 32F."
      },
      {
        "label": "AGM",
        "text": "The Renogy AGM 100Ah, Weize 24M and UPLUS 24M are heavier, with lower capacity per pound, but charge in cold weather and cost less up front."
      }
    ],
    "note": "Default to the GRNOE 2-Pack unless you regularly camp below freezing, then choose the Renogy."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Best Pick",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $180",
          "Renogy AGM 100Ah"
        ],
        [
          "$180 to $190, with starting power",
          "UPLUS 24M"
        ],
        [
          "Around $190, more capacity",
          "Weize 24M"
        ],
        [
          "$345 for two lithium batteries",
          "GRNOE 2-Pack"
        ]
      ]
    }
  },
  {
    "subheading": "For Winter Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A listed discharge range below 0F and charging allowed at your lowest expected temperature."
      },
      {
        "label": "In this comparison",
        "text": "The Renogy AGM 100Ah lists -4 to 140F operation, while the GRNOE 2-Pack cuts off charging below 32F."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the GRNOE 2-Pack if tongue weight or a second battery location matters, since each battery is 22.48 lb."
      },
      {
        "label": "Save if",
        "text": "Save with the Renogy AGM 100Ah or UPLUS 24M if your loads are lights and a pump and you camp in cold weather."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Weight on the tongue",
    "explanation": "Pop-up campers carry the battery at the front, so every pound adds tongue weight and affects towing balance. A 100Ah lithium such as the GRNOE lists 22.48 lb, while AGM units in this roundup do not list weight in their bullets. Check the product specification table for shipping or net weight before ordering."
  },
  {
    "criterion": "Charging below freezing",
    "explanation": "Lithium batteries can be damaged by charging when cold, so many BMS designs stop charging at 32F. The GRNOE does exactly this, which means a tongue box in a freezing night could leave you without charging from the tow vehicle or solar. Look for a stated low-temp charge cutoff, or self-heating, in the listing bullets."
  },
  {
    "criterion": "Amp-hours versus real loads",
    "explanation": "Amp-hours show how much energy the battery holds, but pop-up loads are small: LED lights, a pump, a fan. A 79Ah battery like the UPLUS can run these for a weekend, but a heater fan or fridge changes the math. Add your device wattages, divide by 12V, and compare to about half the rated Ah for AGM."
  },
  {
    "criterion": "Group size and box fit",
    "explanation": "BCI group sizes such as 24M define the case footprint, so a replacement drops into your existing tray or tongue box. The Weize and UPLUS list 24M, while the GRNOE lists 12.9 x 6.7 x 8.6 inches. Measure your tray length, width and height, then compare to the dimensions in the listing."
  },
  {
    "criterion": "Starting versus deep cycle",
    "explanation": "Dual-purpose batteries like the Weize 24M and UPLUS 24M have high CCA, but their plates are optimized for short bursts, so repeated deep discharges age them faster. A true deep-cycle unit such as the Renogy AGM suits nightly camping better. Look for CCA and RC figures in the title to spot dual-purpose designs."
  }
];

export const faq = [
  {
    "q": "Is 100Ah enough for a pop-up camper?",
    "a": "For lights, a water pump and phone charging over a weekend, yes. Add a furnace fan or fridge and you should plan for two batteries, such as the GRNOE 2-Pack."
  },
  {
    "q": "Can I use a dual-purpose battery as my house battery?",
    "a": "You can, as with the Weize 24M and UPLUS 24M, but they handle repeated deep discharges worse than deep-cycle batteries. If you camp every weekend, the Renogy AGM is the better long-term fit."
  },
  {
    "q": "Will a lithium battery work in cold weather?",
    "a": "It discharges fine, as the GRNOE lists discharge to -4F, but its BMS cuts charging below 32F. Keep it in a warmer spot or choose an AGM for freezing trips."
  },
  {
    "q": "How do I check that a battery fits my tongue box?",
    "a": "Measure the tray or box in all three dimensions and compare to the listing. The GRNOE lists 12.9 x 6.7 x 8.6 inches, while the AGM listings here give group size or no dimensions."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Flooded Lead Acid RV Battery",
    "href": "/power-electrical/best-flooded-lead-acid-rv-battery"
  },
  {
    "title": "Best Group 24 RV Battery",
    "href": "/power-electrical/best-group-24-rv-battery"
  },
  {
    "title": "Best Group 27 RV Battery",
    "href": "/power-electrical/best-group-27-rv-battery"
  },
  {
    "title": "Best Group 31 RV Battery",
    "href": "/power-electrical/best-group-31-rv-battery"
  }
];
