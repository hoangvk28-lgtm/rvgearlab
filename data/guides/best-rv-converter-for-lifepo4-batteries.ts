export const guideSlug = "best-rv-converter-for-lifepo4-batteries";
export const guideTitle = "5 Best RV Converters for LiFePO4 Batteries in 2026";
export const metaTitle = "Best RV Converters for LiFePO4 in 2026";
export const metaDescription = "Five drop-in WF-8955 converter sections for LiFePO4 batteries, compared on 14.6V charging, mode switching, fit in WF-8900 power centers, and warranty.";
export const mainKeyword = "best rv converter for lifepo4 batteries";
export const introParagraphs = [
  "Many travel trailers do not have a separate converter box at all. The converter lives inside a WFCO WF-8900 series power center, the same panel that holds the breakers and DC fuses, and the part that actually charges the battery is a slide-out main board assembly, usually labeled WF-8955-MBA. If you just moved to LiFePO4, replacing that one section is often the cleanest way to get proper lithium charging without rebuilding the panel.",
  "So this guide sticks to 55 amp drop-in sections for that panel family. We compared how each one reaches the 14.6V a 12V LiFePO4 battery needs, whether the mode is automatic or locked by a switch, how exactly it fits the WF-8955 footprint, and what warranty backs it. Five units genuinely fit the brief; the rest of the market was standalone converters better covered in our other guides."
];
export const lastUpdated = "2026-10-01";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/514nJu1ZqxL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-converter-for-lifepo4-batteries-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Rugaest WF-8955-MBA 55A Converter Section, Manual Lead-Acid/LiFePO4",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/514nJu1ZqxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H8RLRZK4?tag=rvgearlab-amz-20",
    "description": "The Rugaest WF-8955-MBA tops this list because it pairs a clear LiFePO4 profile with the widest documented fit. One button switches between lead-acid and LiFePO4 charging, with 14.6V bulk and 13.6V float at 55 amps continuous, and it is listed as a direct replacement for WF-8955-MBA, WF-8955-AD-MBA, WF-8955-AN, WF-8955PEC, and WF-8955REP boards as well as WF-8900 and WF-8900-AD converters.\n\nAgainst the genuine WFCO section ranked second, it costs about $179 less and lets you lock the lithium profile by hand, while the WFCO relies on factory auto-detection. It also has a load-based cooling fan that ramps with demand instead of waiting for heat, and a 5-year warranty, both of which put it ahead of the WAVLINK below.\n\nThis is the best fit for most owners upgrading to LiFePO4 in a WF-8900 panel. The caveat: measure first. Rugaest lists 9.53 x 7.17 x 3.56 inches and asks you to compare mounting holes and wire routing with your existing section.",
    "specs": [
      "55A, 14.6V bulk / 13.6V float",
      "One-button LiFePO4 mode",
      "5-year warranty"
    ],
    "pros": [
      "Fits WF-8955 boards and WF-8900 series panels",
      "One button locks the LiFePO4 profile",
      "Fan ramps with load, not just heat",
      "5-year warranty"
    ],
    "cons": [
      "Third-party clone, not WFCO original",
      "Must confirm dimensions against your panel"
    ],
    "bestFor": "most owners upgrading a WF-8900 panel to LiFePO4"
  },
  {
    "id": "best-rv-converter-for-lifepo4-batteries-2",
    "rank": 2,
    "badge": "Best Genuine OEM Part",
    "name": "WFCO WF-8955-AD-MBA Main Board Assembly for WF-8900-AD Power Centers",
    "price": "$248.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41EL01VApZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B46SCH3T?tag=rvgearlab-amz-20",
    "description": "This is WFCO's own main board assembly for the WF-8900-AD series, the auto-detect generation of the power center many trailers ship with. It is a three-stage converter charger rated at 950 watts from a 105 to 130VAC input and weighs about 5 pounds.\n\nIt ranks below the Rugaest because its listing is sparse and it costs roughly $249, more than three times as much. What you buy is the exact factory part, which matters if your RV is under warranty or you want the panel to stay all WFCO. Compared with the WAVLINK and Onylraep sections below, there is no manual lithium switch; the AD board handles detection on its own.\n\nChoose this for a warranty-sensitive rig or an owner who wants to avoid any clone. The caveat is that the product page gives little detail on lithium voltages, so check WFCO's AD documentation if you need exact figures.",
    "specs": [
      "950W, three-stage",
      "For WF-8900-AD panels",
      "Genuine WFCO part"
    ],
    "pros": [
      "Exact factory part for WF-8900-AD panels",
      "Keeps the panel all WFCO for warranty peace of mind",
      "Three-stage charging from a 950W board"
    ],
    "cons": [
      "Costs over three times the clones",
      "Listing lacks lithium voltage details",
      "No manual mode lock"
    ],
    "bestFor": "owners who want the genuine factory section"
  },
  {
    "id": "best-rv-converter-for-lifepo4-batteries-3",
    "rank": 3,
    "badge": "Best Multi-Mode",
    "name": "WAVLINK WF-8955-MBA 55A RV Converter Section",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51xA8rEBJlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G488M9FM?tag=rvgearlab-amz-20",
    "description": "The WAVLINK WF-8955-MBA gives a drop-in section more modes than any other here. It has a lead-acid mode, a lithium mode, and a customizable fixed voltage range from 13.0V to 16.5V, with a temperature-controlled fan and short circuit, software over-voltage, thermal, current limiting, and reverse polarity protection.\n\nNext to the Rugaest above, it lacks the published fit list and the 5-year warranty, and its fan waits for heat rather than load. It costs the same as the Onylraep below but offers that fixed voltage mode, useful for a battery maker that specifies an unusual setpoint.\n\nPick it if you want flexibility in a WF-8955 slot. The caveat is that 16.5V is far too high for a 12V LiFePO4 battery, so stay in lithium mode for everyday charging.",
    "specs": [
      "55A output",
      "Lead, lithium, fixed modes",
      "13.0V to 16.5V fixed range"
    ],
    "pros": [
      "Three modes including a fixed voltage setting",
      "Five listed electrical protections",
      "Metal case helps shed heat"
    ],
    "cons": [
      "16.5V fixed setting can overcharge if misused",
      "Fit list less detailed than the Rugaest"
    ],
    "bestFor": "owners whose battery specifies a custom voltage"
  },
  {
    "id": "best-rv-converter-for-lifepo4-batteries-4",
    "rank": 4,
    "badge": "Best Switch With Indicator",
    "name": "Onylraep WF-8955-AD-MBA 55A Converter, Lead-Acid and Lithium",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51fykK-A1xL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D795VY6Y?tag=rvgearlab-amz-20",
    "description": "The Onylraep WF-8955-AD-MBA uses a physical switch with labeled orange LEDs: LA lights for lead-acid at 13.6V and LI lights for lithium at 14.6V. It also lists compatibility with WF-8955 and Parallax 7155 converters, which widens the panels it can serve.\n\nAgainst the WAVLINK above, it drops the fixed voltage mode but makes the active mode easier to see at a glance, which helps when someone else in the family flips breakers. The fan stays off until load requires it. Compared with the SUPLIFE below, the Onylraep can still serve lead-acid if you ever switch back.\n\nBuy it if you have a Parallax 7155 style panel or want an obvious mode indicator. The caveat: pulling the reverse polarity fuse interrupts output in both modes, and the listing shows its after-sale support without a stated warranty length.",
    "specs": [
      "55A, 14.6V lithium mode",
      "LA / LI indicator LEDs",
      "Fits Parallax 7155 too"
    ],
    "pros": [
      "Labeled LEDs show the active battery mode",
      "Lists Parallax 7155 compatibility",
      "Fan stays off at light load"
    ],
    "cons": [
      "No warranty length stated",
      "No fixed voltage option"
    ],
    "bestFor": "Parallax 7155 or mixed-panel owners"
  },
  {
    "id": "best-rv-converter-for-lifepo4-batteries-5",
    "rank": 5,
    "badge": "Best Lithium-Only Budget",
    "name": "SUPLIFE WF-8955-MBA 55A Section for WF-8955PEC, 14.6V Lithium",
    "price": "$77.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41L3sLR+EmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DHXM155J?tag=rvgearlab-amz-20",
    "description": "The SUPLIFE WF-8955-MBA is the simplest LiFePO4 section here. It is built for 12V lithium only, charging to 14.6V before dropping into a trickle mode, and it mounts to the WF-8955PEC power converter as a replacement for WF-8955-AD-MBA and WF-8955-MBA boards.\n\nThere is no mode switch, so it ranks below the switchable units above. If you have committed to lithium for good, that simplicity can be a plus because nothing can be bumped into the wrong mode. It costs about $12 less than the Onylraep and adds a 3-year warranty.\n\nThis is for owners who are sure they will never go back to lead-acid. The caveat is exactly that: if you ever reinstall lead-acid, this board's lithium-only profile is the wrong fit and you would need another section.",
    "specs": [
      "14.6V lithium-only charging",
      "Mounts to WF-8955PEC",
      "3-year warranty"
    ],
    "pros": [
      "Lithium-only design avoids wrong-mode mistakes",
      "Charges to 14.6V then trickles",
      "Fan speed follows battery temperature",
      "3-year warranty"
    ],
    "cons": [
      "Cannot charge lead-acid correctly",
      "Fit described mainly for WF-8955PEC"
    ],
    "bestFor": "owners committed to LiFePO4 for good"
  }
];

export const howWeEvaluated = [
  {
    "title": "Correct LiFePO4 voltage",
    "description": "We checked that each section publishes a lithium charge near 14.6V and a lower hold voltage, the range a 12V LiFePO4 battery expects."
  },
  {
    "title": "Drop-in fit for WF-8900 panels",
    "description": "We compared listed model compatibility and dimensions so the section slides into the existing power center without rewiring."
  },
  {
    "title": "Mode control",
    "description": "Units were compared on auto-detect, labeled switches, and lithium-only designs, weighing how easy it is to confirm the active mode."
  },
  {
    "title": "Cooling and protection",
    "description": "We looked at fan behavior and documented protections, since the section sits inside an enclosed panel."
  },
  {
    "title": "Warranty and price gap to genuine",
    "description": "Clone pricing was weighed against warranty length and the cost of the genuine WFCO board."
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
    "subheading": "By Power Center Model",
    "table": {
      "headers": [
        "Your panel or board",
        "Recommended pick"
      ],
      "rows": [
        [
          "WF-8900-AD, keeping it all WFCO",
          "WFCO WF-8955-AD-MBA"
        ],
        [
          "WF-8955-MBA, WF-8955-AN, or WF-8900",
          "Rugaest WF-8955-MBA"
        ],
        [
          "WF-8955PEC, lithium only",
          "SUPLIFE WF-8955-MBA"
        ],
        [
          "Parallax 7155 or 7145 power center",
          "Onylraep WF-8955-AD-MBA"
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
          "Under $80",
          "SUPLIFE WF-8955-MBA"
        ],
        [
          "About $70 to $90",
          "Rugaest WF-8955-MBA or Onylraep WF-8955-AD-MBA"
        ],
        [
          "About $90 with extra modes",
          "WAVLINK WF-8955-MBA"
        ],
        [
          "About $250",
          "WFCO WF-8955-AD-MBA"
        ]
      ]
    }
  },
  {
    "subheading": "Switchable vs Lithium-Only",
    "cards": [
      {
        "label": "Switchable",
        "text": "A switch or button chooses lead-acid or LiFePO4, so the board still works if batteries change or the RV is sold. That covers the Rugaest WF-8955-MBA, WAVLINK WF-8955-MBA, and Onylraep WF-8955-AD-MBA."
      },
      {
        "label": "Lithium-only",
        "text": "The board charges only to the LiFePO4 profile, which removes any risk of the wrong mode but locks you in. That is the SUPLIFE WF-8955-MBA."
      }
    ],
    "note": "Most owners should choose switchable; lithium-only only makes sense if you will never reinstall lead-acid."
  },
  {
    "subheading": "By Mode Visibility",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Clear labeled light for each mode",
          "Onylraep WF-8955-AD-MBA"
        ],
        [
          "Single button with lock-in",
          "Rugaest WF-8955-MBA"
        ],
        [
          "Factory auto handling",
          "WFCO WF-8955-AD-MBA"
        ],
        [
          "Custom voltage setpoint",
          "WAVLINK WF-8955-MBA"
        ]
      ]
    }
  },
  {
    "subheading": "For a First LiFePO4 Swap in a Factory Trailer Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A section that matches your exact board model, charges at 14.6V in lithium mode, and keeps a lead-acid mode in case the old battery goes back in for a trip."
      },
      {
        "label": "In this comparison",
        "text": "The Rugaest WF-8955-MBA fits the widest list of WF-8955 boards, locks LiFePO4 with one button, and has a 5-year warranty."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Your RV is under warranty or a dealer services it; the WFCO WF-8955-AD-MBA keeps the panel original."
      },
      {
        "label": "Save if",
        "text": "You do your own maintenance; the Rugaest WF-8955-MBA covers LiFePO4 charging for under $70."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "14.6V lithium charge voltage",
    "explanation": "A 12V LiFePO4 battery reaches full near 14.2 to 14.6V, while many original WF-8955 boards sit near 13.6V. At 13.6V the battery fills slowly and often stops well below full, so your 100Ah may behave like far less. Confirm the listing names 14.6V or a similar lithium bulk voltage, not just the words lithium ready."
  },
  {
    "criterion": "Exact board compatibility",
    "explanation": "WF-8900 series panels use slide-in main board assemblies, and model suffixes such as AD, AN, PEC, and REP matter. A board that does not match can leave wires short or mounting holes off. Read the label on your current section and match it to the listing's compatibility list, then compare dimensions."
  },
  {
    "criterion": "Hold voltage after charging",
    "explanation": "Unlike lead-acid, LiFePO4 does not need a constant float and is happier resting a little below full. A section that drops to around 13.6V or a trickle mode after bulk keeps loads running without stressing cells on long hookups. Look for a stated float, idle, or trickle voltage in the description."
  },
  {
    "criterion": "Mode switch or auto-detect",
    "explanation": "Auto-detect boards choose a profile based on battery behavior, which can be fooled by solar input or a deeply discharged bank. A labeled switch costs nothing in convenience once set and removes the guess. Check whether the listing describes the indicator light for each mode so you can verify it later."
  },
  {
    "criterion": "Cooling inside the panel",
    "explanation": "The section lives in a closed power center, often under a cabinet, so heat builds when it runs near 55 amps. Fans that ramp with load act before temperature climbs, while heat-triggered fans react later. Look for a description of fan control and make sure the panel vents are clear after install."
  },
  {
    "criterion": "Low-temperature charging protection",
    "explanation": "LiFePO4 should not be charged below about 32F, and none of these sections measure battery temperature. That job falls to the battery's BMS or a self-heating battery. Before winter camping, check your battery's spec sheet for a low temperature charge cutoff."
  }
];

export const faq = [
  {
    "q": "Will these sections fit any WFCO power center?",
    "a": "They are designed for the WF-8900 series and the WF-8955 board family. Check your board's exact model label, such as WF-8955-AD-MBA or WF-8955PEC, and compare it with the listing before ordering."
  },
  {
    "q": "Do I have to replace the whole power center to use LiFePO4?",
    "a": "Usually not. The charging circuit lives in the main board assembly, so swapping just that section, like the Rugaest WF-8955-MBA, upgrades charging while keeping your breakers and fuses."
  },
  {
    "q": "Is the genuine WFCO board worth it over a clone?",
    "a": "It is worth it if warranty or dealer service matters, since it is the original part. Otherwise the clones here document a 14.6V lithium mode and longer warranties for a fraction of the price."
  },
  {
    "q": "How do I swap the main board safely?",
    "a": "Disconnect shore power, switch off any inverter, and remove the battery negative. Photograph the wiring, remove the screws and leads, slide in the new section, reconnect every wire to the matching terminal, and restore battery then shore power."
  },
  {
    "q": "What happens if I leave a switchable board in lead-acid mode with LiFePO4?",
    "a": "The battery will charge to around 13.6V and stop short of full, so usable capacity drops. It is not usually dangerous, but switch to lithium mode and confirm the indicator light."
  },
  {
    "q": "Can I go back to lead-acid with the SUPLIFE board?",
    "a": "Not properly. It charges only to a lithium profile, so a lead-acid battery would not receive the correct staging; choose a switchable section if that is a possibility."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best RV Converter Charger For Lithium Batteries",
    "href": "/power-electrical/best-rv-converter-charger-for-lithium-batteries"
  },
  {
    "title": "Best RV Converter For Lithium Batteries",
    "href": "/power-electrical/best-rv-converter-for-lithium-batteries"
  },
  {
    "title": "Best 55 Amp RV Converter",
    "href": "/power-electrical/best-55-amp-rv-converter"
  },
  {
    "title": "Best Heated Lithium RV Battery",
    "href": "/power-electrical/best-heated-lithium-rv-battery"
  }
];
