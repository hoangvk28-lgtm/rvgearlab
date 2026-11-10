export const guideSlug = "best-rv-converter-for-lithium-batteries";
export const guideTitle = "6 Best RV Converters for Lithium Batteries in 2026";
export const metaTitle = "Best RV Converters for Lithium in 2026";
export const metaDescription = "Six standalone RV converters for lithium batteries in small rigs, compared on 35 to 75 amp sizing, adjustable output, auto-detect, and install effort.";
export const mainKeyword = "best rv converter for lithium batteries";
export const introParagraphs = [
  "Small trailers, teardrops, truck campers, and van builds rarely need the 55 to 100 amp converters sold for big fifth wheels. A 35 or 45 amp unit is often enough to run the lights and fan while topping up a single lithium battery, and it is gentler on a battery whose BMS limits charge current. What matters more at this size is getting the lithium voltage right.",
  "For this roundup we looked at standalone converters you can mount on their own, separate from a power center. We compared how each sets a lithium charge, whether by adjustable output, a dedicated mode, or automatic detection, plus the amp size, protections, and how much rewiring the install takes. One larger 75 amp unit is included for owners who need headroom."
];
export const lastUpdated = "2026-10-01";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41msVhfhcML._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-converter-for-lithium-batteries-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "PowerMax PM4 45A RV Converter with 3-Stage Charger, Lithium Compatible",
    "price": "$129.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41msVhfhcML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01ER3LH3O?tag=rvgearlab-20",
    "description": "The PowerMax PM4 45A leads this guide because it gives small-rig owners precise lithium control at a fair price. Its output adjusts from 13V to 16.5V DC so you can set it to your battery maker's charge voltage, and its 3-stage routine of bulk, absorption, and float covers AGM, gel, flooded, and LiFePO4.\n\nCompared with the WFCO WF-9835-AD-CB ranked second, it trades automatic detection and UL listing for adjustability and about $64 in savings. It also outclasses the PM3-45-SME below on documentation, with protections for reverse polarity, overload, and thermal shutdown spelled out, and PowerMax says the install takes under 10 minutes without rewiring.\n\nPick this for a teardrop, van, or small trailer with one or two lithium batteries. The caveat is that adjustability cuts both ways: setting it near 16.5V by mistake can trip a LiFePO4 BMS, so check the voltage with a meter after setup.",
    "specs": [
      "45A, adjustable 13V to 16.5V",
      "3-stage, LiFePO4 compatible",
      "No-rewire install"
    ],
    "pros": [
      "Output adjusts to match your lithium charge voltage",
      "3-stage bulk, absorption, float charging",
      "Reverse polarity and thermal shutdown protection",
      "Installs in about 10 minutes per PowerMax"
    ],
    "cons": [
      "Upper adjustment range can overcharge if misset",
      "No UL listing documented"
    ],
    "bestFor": "small trailers and vans with one or two lithium batteries"
  },
  {
    "id": "best-rv-converter-for-lithium-batteries-2",
    "rank": 2,
    "badge": "Best Auto-Detect",
    "name": "WFCO WF-9835-AD-CB 35A Deck-Mount Converter Charger, Auto-Detect",
    "price": "$193.07",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ICCrSyjhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B4817YK6?tag=rvgearlab-20",
    "description": "The WFCO WF-9835-AD-CB brings the brand's patented Auto-Detect to a 35 amp size. It recognizes lead-acid or LiFePO4 and adjusts its multi-stage charging on its own, keeps full output down to 100 volts of shore input, and is UL/CSA listed and FCC compliant.\n\nIt ranks second because it costs about $193 for 35 amps, the least current here at the highest price, and you cannot fine-tune the voltage like the PowerMax PM4 above. In exchange you get third-party safety certification and nothing to adjust. Compared with the PowerMax PM3-45-SME below, it gives up 10 amps but adds certification and low-voltage tolerance.\n\nThis suits a small trailer owner who wants set-and-forget lithium charging from an OEM brand. The caveat: 35 amps may feel slow if you run several 12V loads while charging.",
    "specs": [
      "35A, auto lead/LiFePO4",
      "Full output down to 100V",
      "UL/CSA listed"
    ],
    "pros": [
      "Auto-Detect handles lithium with no settings",
      "Full output even at 100V shore input",
      "UL/CSA listed and FCC compliant"
    ],
    "cons": [
      "Most expensive per amp in this list",
      "35A charges slower under heavy loads"
    ],
    "bestFor": "owners who want certified, hands-off lithium charging"
  },
  {
    "id": "best-rv-converter-for-lithium-batteries-3",
    "rank": 3,
    "badge": "Best Adjustable Alternative",
    "name": "PowerMax PM3-45-SME 45A Converter Charger, Adjustable Lithium",
    "price": "$149.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31RBtSMTBKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G2TFYLZ8?tag=rvgearlab-20",
    "description": "The PowerMax PM3-45-SME is a 45 amp standalone deck-mount converter whose adjustable output supports properly configured lithium charging, with multi-stage charging for lead-acid and current limiting, reverse-polarity, and thermal safeguards.\n\nIt ranks below the PM4 45A because PowerMax documents it less fully and it costs about $20 more. Against the RecPro below it offers adjustable output that RecPro does not mention, which matters if your battery maker specifies a charge voltage such as 14.4V.\n\nChoose it if you prefer PowerMax's PM3 line or find it in stock when the PM4 is not. The caveat is a thinner spec sheet, so confirm the adjustment range with PowerMax before setting it for lithium.",
    "specs": [
      "45A regulated output",
      "Adjustable lithium output",
      "Standalone deck mount"
    ],
    "pros": [
      "Adjustable output for lithium setups",
      "45A suits single-battery small rigs",
      "Thermal and reverse-polarity protection"
    ],
    "cons": [
      "Adjustment range not listed",
      "Costs more than the better documented PM4"
    ],
    "bestFor": "owners who want a PowerMax PM3 series unit"
  },
  {
    "id": "best-rv-converter-for-lithium-batteries-4",
    "rank": 4,
    "badge": "Best 4-Stage Pick",
    "name": "RecPro 45A RV Power Converter and Battery Charger",
    "price": "$139.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51ai+U7de-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B092W5LMGH?tag=rvgearlab-20",
    "description": "The RecPro 45 amp converter is a straightforward 120VAC to 12VDC unit with 4-stage charging that RecPro lists for both lead and lithium batteries, and it powers 12V lights and appliances while it charges.\n\nIt ranks fourth because RecPro does not describe how the lithium profile is chosen or what voltage it uses, details the PowerMax units above cover. Its 4-stage logic adds a maintenance stage that the VEVOR below does not describe as clearly, and it costs about $77 more than that VEVOR.\n\nThis suits owners who want an RV brand with the option to buy the same line in 35 to 100 amps later. The caveat is the missing lithium detail; ask the seller to confirm the lithium charge voltage before relying on it.",
    "specs": [
      "45A, 4-stage charging",
      "Lead and lithium compatible",
      "Sold in 35A to 100A"
    ],
    "pros": [
      "4-stage charging for long storage periods",
      "Runs 12V loads while charging the battery",
      "Same line available in larger sizes"
    ],
    "cons": [
      "Lithium voltage not published",
      "Pricier than the VEVOR with fewer details"
    ],
    "bestFor": "owners loyal to an RV parts brand"
  },
  {
    "id": "best-rv-converter-for-lithium-batteries-5",
    "rank": 5,
    "badge": "Best Budget",
    "name": "VEVOR 45A RV Power Converter Battery Charger",
    "price": "$62.91",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Sy2O1GpUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FX2CFWG9?tag=rvgearlab-20",
    "description": "The VEVOR 45 amp converter is the cheapest way into proper lithium charging here at about $63. It offers dedicated lead-acid and LiFePO4 modes, a fixed voltage mode at 13.0V, 14.6V, or 16.5V, six listed protections, and an included copper cable.\n\nIt costs less than half the PowerMax PM4 45A ranked first while matching its 45 amps, but VEVOR gives fewer staging details and no UL listing. VEVOR itself sizes it for small 30 to 50Ah batteries, which makes it a good fit for teardrops and van builds.\n\nPick it for a tight budget or a small lithium battery. The caveat is the 16.5V fixed option, which is too high for 12V LiFePO4, so keep it in the dedicated lithium mode.",
    "specs": [
      "45A, LiFePO4 mode",
      "Fixed 13.0V, 14.6V, 16.5V",
      "Six listed protections"
    ],
    "pros": [
      "Lowest price in this roundup",
      "Dedicated LiFePO4 charging mode",
      "Copper cable included in the box"
    ],
    "cons": [
      "16.5V fixed mode is unsafe for 12V lithium",
      "Sized by VEVOR for small 30 to 50Ah batteries"
    ],
    "bestFor": "teardrops and vans with a small lithium battery"
  },
  {
    "id": "best-rv-converter-for-lithium-batteries-6",
    "rank": 6,
    "badge": "Best for More Headroom",
    "name": "PowerMax PM3-75LK 75 Amp Converter, Lithium Compatible",
    "price": "$128.94",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41c4PQc+S+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00F8MC43Q?tag=rvgearlab-20",
    "description": "The PowerMax PM3-75LK is in this guide for owners who outgrow 45 amps. It is listed as a 75 amp lithium compatible converter with 3-stage smart charging and adjustable power supply modes, and PM3 units can be wired in series or parallel for even more output.\n\nIt has the most current of any pick here for about $129, less than the 45A PowerMax PM4, which makes it the best value per amp. It ranks last for this small-rig guide because 75 amps exceeds what a single 100Ah lithium battery usually accepts, and the listing text is inconsistent, mentioning a 55 amp output in one bullet.\n\nChoose it if you run two or more lithium batteries and want faster recharge. The caveat: confirm the actual output with PowerMax given that conflicting figure, and size cables and fuses for the higher current.",
    "specs": [
      "75A rated, lithium compatible",
      "3-stage smart charging",
      "Series or parallel capable"
    ],
    "pros": [
      "Most amps per dollar in this list",
      "3-stage charging protects battery life",
      "PM3 units can be paralleled for more output"
    ],
    "cons": [
      "Listing also mentions 55A, confirm rating",
      "Too much current for one 100Ah battery"
    ],
    "bestFor": "owners with two or more lithium batteries"
  }
];

export const howWeEvaluated = [
  {
    "title": "Lithium voltage control",
    "description": "We compared how each unit reaches a lithium charge voltage: adjustable output, a dedicated LiFePO4 mode, or auto-detect."
  },
  {
    "title": "Right-sizing for small rigs",
    "description": "Amp ratings from 35 to 75 were matched to typical single and dual battery setups and common BMS charge limits."
  },
  {
    "title": "Standalone install effort",
    "description": "We weighed mounting, rewiring, and cable needs, since these units install outside a power center."
  },
  {
    "title": "Documented protections and listing",
    "description": "Reverse polarity, thermal, and overload protection, plus any UL or CSA listing, counted toward each score."
  },
  {
    "title": "Cost per amp",
    "description": "Price was compared against output current and the depth of each listing's technical detail."
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
    "subheading": "By Battery Setup",
    "table": {
      "headers": [
        "Your setup",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "One 50Ah battery in a teardrop",
          "VEVOR 45A",
          "VEVOR sizes it for 30 to 50Ah"
        ],
        [
          "One 100Ah battery",
          "PowerMax PM4 45A",
          "45A with adjustable lithium voltage"
        ],
        [
          "One 100Ah, hands-off owner",
          "WFCO WF-9835-AD-CB",
          "Auto-Detect and UL listing"
        ],
        [
          "Two or more 100Ah batteries",
          "PowerMax PM3-75LK",
          "75A shortens recharge time"
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
          "Under $70",
          "VEVOR 45A"
        ],
        [
          "About $125 to $130",
          "PowerMax PM4 45A or PowerMax PM3-75LK"
        ],
        [
          "About $140 to $150",
          "RecPro 45A or PowerMax PM3-45-SME"
        ],
        [
          "About $190",
          "WFCO WF-9835-AD-CB"
        ]
      ]
    }
  },
  {
    "subheading": "Adjustable Output vs Auto-Detect",
    "cards": [
      {
        "label": "Adjustable output",
        "text": "You dial in the exact voltage your battery maker specifies, which gives precision but needs a meter and care. The PowerMax PM4 45A, PowerMax PM3-45-SME, and PowerMax PM3-75LK use this approach."
      },
      {
        "label": "Auto-Detect",
        "text": "The converter identifies lead-acid or LiFePO4 and selects the profile itself, so there is nothing to set. In this comparison that is the WFCO WF-9835-AD-CB."
      }
    ],
    "note": "Choose Auto-Detect if you want zero setup; choose adjustable if your battery has a specific charge voltage."
  },
  {
    "subheading": "By Install Situation",
    "table": {
      "headers": [
        "Situation",
        "Recommended pick"
      ],
      "rows": [
        [
          "Van build with custom wiring",
          "PowerMax PM4 45A"
        ],
        [
          "Replacing a dead factory converter quickly",
          "WFCO WF-9835-AD-CB"
        ],
        [
          "Mounting near the battery in a cargo trailer",
          "PowerMax PM3-45-SME"
        ],
        [
          "Adding a second charger alongside solar",
          "VEVOR 45A"
        ]
      ]
    }
  },
  {
    "subheading": "For Van and Teardrop Builds Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A compact 35 to 45 amp unit with a clear lithium setting, since small batteries and short cable runs do not need high current."
      },
      {
        "label": "In this comparison",
        "text": "The PowerMax PM4 45A offers adjustable output and a quick install, and the VEVOR 45A covers small batteries for about $63."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want certified safety and no settings; the WFCO WF-9835-AD-CB is UL/CSA listed and auto-detects LiFePO4."
      },
      {
        "label": "Save if",
        "text": "You are comfortable with a meter; the VEVOR 45A or PowerMax PM4 45A handle lithium for far less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Amp rating matched to the battery",
    "explanation": "A converter's amp rating is the most current it can deliver to loads and battery together. Small lithium batteries often accept only 20 to 50 amps of charge, so a huge converter brings no benefit and can trip the BMS. Compare the converter rating with the max charge current on your battery spec sheet before choosing a size."
  },
  {
    "criterion": "How the lithium voltage is set",
    "explanation": "Lithium charging depends on reaching about 14.2 to 14.6V. Some units adjust by dial, some have a dedicated LiFePO4 mode, and some detect the battery automatically, each with a different chance of user error. Read how the listing says lithium is selected, and avoid units that only say compatible without a mechanism."
  },
  {
    "criterion": "Fixed and maximum voltage limits",
    "explanation": "Several units can output up to 16.5V for special uses. That is well above a 12V LiFePO4 battery's safe range, and an accidental setting can trigger BMS shutdown. Note the maximum voltage in the listing and plan to verify your setting with a multimeter."
  },
  {
    "criterion": "Standalone wiring needs",
    "explanation": "A standalone converter needs its own AC feed, DC cables to the battery or fuse panel, and correct fusing. In a van build that is easy to plan; in a trailer it may mean running new cable. Check the manual for cable gauge and fuse size, and add those parts to your budget."
  },
  {
    "criterion": "Shore power tolerance",
    "explanation": "Low campground voltage can reduce some converters' output, slowing charging. A published minimum input voltage at full output shows the unit was designed for weak pedestals. Look for a number like the WFCO's 100V rating instead of a broad input range alone."
  },
  {
    "criterion": "Protection and certification",
    "explanation": "Reverse polarity, overload, and thermal protection guard against wiring mistakes and hot compartments. A UL or CSA listing adds independent safety review. Check the listing for named protections and an explicit certification mark."
  }
];

export const faq = [
  {
    "q": "Do I need a special converter for lithium batteries?",
    "a": "You need one that can reach a lithium charge voltage near 14.2 to 14.6V. A standard 13.6V converter will run loads but leaves LiFePO4 undercharged; units like the PowerMax PM4 45A or WFCO WF-9835-AD-CB solve that."
  },
  {
    "q": "What size converter do I need for a single 100Ah lithium battery?",
    "a": "Around 35 to 45 amps is a practical match for most 100Ah batteries, which often accept about 50 amps of charge. The PowerMax PM4 45A fits that range."
  },
  {
    "q": "Is the WFCO auto-detect worth it over an adjustable PowerMax?",
    "a": "If you want no settings and a UL/CSA listing, yes. If you are comfortable using a meter, the adjustable PowerMax gives more control for less money."
  },
  {
    "q": "How do I set an adjustable converter for lithium?",
    "a": "Check the battery's recommended charge voltage, set the converter to that value with the battery disconnected, and confirm with a meter. Then reconnect and watch voltage rise during charging."
  },
  {
    "q": "Can a converter heat or protect my lithium battery in the cold?",
    "a": "No. These converters do not monitor battery temperature, so rely on a battery with a low temperature charge cutoff or a heater, and avoid charging LiFePO4 below about 32F."
  },
  {
    "q": "Is a bigger converter always better?",
    "a": "No. Beyond your battery's accepted charge current, extra amps only add cost, cable size, and heat. The 75 amp PowerMax PM3-75LK makes sense only with two or more batteries."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best RV Converter Charger For Lithium Batteries",
    "href": "/power-electrical/best-rv-converter-charger-for-lithium-batteries"
  },
  {
    "title": "Best RV Converter For LiFePO4 Batteries",
    "href": "/power-electrical/best-rv-converter-for-lifepo4-batteries"
  },
  {
    "title": "Best 12V Lithium Battery For RV",
    "href": "/power-electrical/best-12-volt-lithium-battery-for-rv"
  },
  {
    "title": "Best 55 Amp RV Converter",
    "href": "/power-electrical/best-55-amp-rv-converter"
  }
];
