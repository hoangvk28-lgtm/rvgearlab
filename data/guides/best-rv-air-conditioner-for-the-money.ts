export const guideSlug = "best-rv-air-conditioner-for-the-money";
export const guideTitle = "6 Best RV Air Conditioners for the Money in 2026";
export const metaTitle = "Best RV Air Conditioner for the Money";
export const metaDescription = "Which RV air conditioner gives the most cooling and the least noise per dollar, ranked from $229 to $999.99 by cost per 1,000 BTU and stated decibels.";
export const mainKeyword = "best rv air conditioner for the money";
export const introParagraphs = [
  "Value in an air conditioner is arithmetic, and the arithmetic changes the ranking. Divide each price by its rated cooling and the $229.00 DC unit comes out near $21 per 1,000 BTU, the $773.10 Arsenda near $43, the $859.00 Arsenda near $48, and the $999.99 FOGATTI near $63. One shelf, a threefold spread. Prices run from $229.00 to $999.99 here, and the ranking sorts the picks by what each dollar actually returns in cooling, in quiet and in features that save money later, which is a different question from which unit is cheapest to buy.",
  "Noise belongs in the same equation. The cheapest unit states 45 dB, the dearer Arsenda states 50 dB, and the FOGATTI states 59 dB, so the least expensive pick is also the quietest on paper, and the dearest is the loudest. That inversion is the lesson of the value shelf: a higher price does not buy quiet by default. It buys build details, a heat pump or a name on the listing, and a buyer should decide whether those are worth the added cost before opening a wallet. Each listing below is judged on the numbers it prints.",
  "Format is the last variable that moves the ranking. Four of the six picks need both 115V AC and 12V DC, one runs on 24V and one on 12V alone. Two are ducted, which helps a coach that already has ceiling channels and means nothing in one without. The cheapest pick runs from a 12V supply, so its true cost includes the battery bank behind it, and sticker prices alone cannot settle the question. Weighing format before price keeps the dollar comparison honest for every kind of rig, from a van to a large coach."
];
export const lastUpdated = "2026-10-02";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41VazWzh0UL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-air-conditioner-for-the-money-1",
    "rank": 1,
    "badge": "Best Ducted Fit",
    "name": "FOGATTI RV Air Conditioner 16000 BTU Ducted",
    "price": "$999.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VazWzh0UL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GXY2LJ92?tag=rvgearlab-amz-20",
    "description": "The FOGATTI Ducted lists at $999.99 and rates 16,000 BTU through a ducted fit, which sends cooled air through the ceiling channels that many larger coaches already have. Dual compressors, R32 refrigerant and a stated 59 dB operating level are all printed on the listing, so the buyer knows the hardware and the sound level ahead of a purchase. That level of disclosure helps anyone planning a ducted replacement.\n\nAt about $62.50 per 1,000 BTU, this is the top-priced unit on the page per unit of cooling, and what that price buys is the ducted format and the dual-compressor design. Placed against the 18,000 BTU Arsenda units, the decision is simple: pay for compatibility with existing ducts, or spend less on a non-ducted body that delivers more rated BTU.\n\nClass A and larger Class C coaches with a ducted ceiling layout are the intended match, since a ducted unit slots into that airflow plan without new cutting. Anyone replacing a failed ducted rooftop gets a like-for-like swap with a stated noise figure. The R32 refrigerant and twin compressors give the build real substance, and a ducted layout keeps airflow even across a long coach.",
    "specs": [
      "16,000 BTU ducted",
      "Dual compressors",
      "59 dB operation"
    ],
    "pros": [
      "Ducted fit for existing ceiling channels",
      "Dual compressors",
      "R32 refrigerant",
      "Noise figure stated"
    ],
    "cons": [
      "Cooling only",
      "Needs 115V AC and 12V DC"
    ],
    "bestFor": "Ducted coaches that want a drop-in 16,000 BTU rooftop with dual compressors."
  },
  {
    "id": "best-rv-air-conditioner-for-the-money-2",
    "rank": 2,
    "badge": "Best 18K Ducted Value",
    "name": "KINGRVER RV Air Conditioner 18K BTU",
    "price": "$899.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41qPHzD-XmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H38NM29M?tag=rvgearlab-amz-20",
    "description": "Listed at $899.99, the KINGRVER 18K is a ducted rooftop unit rated at 18,000 BTU with a stated 52 dB operating level. A ducted fit sends cooled air through ceiling channels, a gray finish option is offered, and the listing pitches the cooling power at large RVs. Supply is 115V AC plus 12V DC, the same dual feed as the other rooftops here.\n\nAt $50.00 per 1,000 BTU, it lands between the Arsenda 18K Heat at about $47.70 and the FOGATTI Ducted at about $62.50. Against the FOGATTI, it costs $100.00 less, adds 2,000 BTU of rated cooling and prints a 52 dB figure that sits 7 dB under the FOGATTI's 59 dB. Both are ducted and cooling focused, so the comparison is clean.\n\nLarge coaches with an existing ceiling duct layout and no call for winter heat get the strongest ducted value on this page. Owners who already heat with a furnace avoid paying for a heat pump function, and the quiet stated rating suits a bedroom under the duct run. The gray finish option also helps match the roof to the coach.",
    "specs": [
      "18,000 BTU ducted",
      "Cooling only",
      "52 dB operation"
    ],
    "pros": [
      "Ducted fit",
      "Large-RV cooling power",
      "Quiet 52 dB rating",
      "Gray finish option"
    ],
    "cons": [
      "Cooling only",
      "Needs 115V AC and 12V DC"
    ],
    "bestFor": "Large coaches with ceiling ducts that want 18,000 BTU and a stated 52 dB."
  },
  {
    "id": "best-rv-air-conditioner-for-the-money-3",
    "rank": 3,
    "badge": "Best Heat Pump Value",
    "name": "Arsenda 18000 BTU RV Air Conditioner",
    "price": "$859.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/417L6lQRMoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GS94YT4W?tag=rvgearlab-amz-20",
    "description": "The Arsenda 18K Heat lists at $859.00 and covers up to 680 square feet with an 18,000 BTU rating, a heat pump and a stated 50 dB. A wide operating range lets the unit run in more seasons than a cooling-focused design, which spreads its cost across more months of use. Winter output of 10,236 BTU sits alongside the 18,000 BTU cooling rating.\n\nWorking out to about $47.70 per 1,000 BTU, it comes in $14 below the FOGATTI Ducted per 1,000 BTU, and it adds heat on top. Beside the cheaper Arsenda at $773.10, the extra $85.90 buys a printed noise figure and a stated 680 square foot coverage claim, so the choice reduces to whether those two numbers are worth that gap.\n\nLarge travel trailers and fifth wheels that camp in spring and fall get the most from a heat pump that shares the cooling roof opening. Shoppers wanting one appliance for every season, plus the noise level in writing, can justify the step above the entry 18K unit. Big interiors benefit from the capacity, and the heat pump covers the cool months.",
    "specs": [
      "18,000 BTU, 10,236 BTU heat",
      "50 dB operation",
      "Up to 680 sq ft"
    ],
    "pros": [
      "Covers up to 680 sq ft",
      "Wide operating range",
      "Heat pump included",
      "Quiet 50 dB rating"
    ],
    "cons": [
      "Needs 115V AC and 12V DC",
      "Higher amp draw"
    ],
    "bestFor": "Big interiors wanting 18,000 BTU, heating and a stated 50 dB."
  },
  {
    "id": "best-rv-air-conditioner-for-the-money-4",
    "rank": 4,
    "badge": "Best Value per BTU",
    "name": "Arsenda RV Air Conditioner 18000 BTU with Heat Pump and Cooling",
    "price": "$773.10",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TTzBRgFUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H6WNWDR8?tag=rvgearlab-amz-20",
    "description": "The Arsenda 18K Entry costs $773.10, the lowest price among the 18,000 BTU units, which works out to about $43 per 1,000 BTU. Heat pump heating comes with R32 refrigerant, a stated 23 to 115 degrees F outdoor range and a fit for a 14.25 inch roof opening, which is the standard size on many rigs.\n\nAmong the rooftop units past 16,000 BTU, it returns the most rated cooling for each dollar, and it adds a heating function on top. Sitting $86 below the Arsenda 18K Heat and about $227 below the FOGATTI Ducted, it carries the same 18,000 BTU rating with a lower sticker price, and the savings can cover installation hardware and cabling.\n\nValue-focused owners of large rigs, and anyone replacing a worn standard-size unit, can stop here with a clear conscience. The 14.25 inch fit keeps installation simple, and a heat pump function spreads the cost over a longer camping season. As the strongest all-round value on the shelf, it also offers a roof-opening fit that makes the swap simple for confident DIY owners.",
    "specs": [
      "18,000 BTU heat pump",
      "23°F to 115°F outdoor range",
      "R32 refrigerant"
    ],
    "pros": [
      "Heat pump adds winter use",
      "Lowest price of the 18K units",
      "Fits 14.25 inch openings"
    ],
    "cons": [
      "Needs both 115V AC and 12V DC",
      "No noise level listed"
    ],
    "bestFor": "Owners who want the most rated cooling and heat pump heating per dollar."
  },
  {
    "id": "best-rv-air-conditioner-for-the-money-5",
    "rank": 5,
    "badge": "Best Low-Profile Pick",
    "name": "24V RV Air Conditioner",
    "price": "$508.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41w38Zf5B7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FR1TDGS4?tag=rvgearlab-amz-20",
    "description": "Listed at $508.00, the 24V Thin AC rates 8,500 BTU of cooling with 3,400 BTU of heating, driven by a variable frequency compressor. Its 5.5 inch body is a standout, since it fits standard 14 inch roof vents while sitting low on the roof for tight overhead clearance. A Fahrenheit display keeps the controls familiar, and the listing states the variable-frequency design plainly.\n\nAt roughly $60 per 1,000 BTU, its appeal lies in the slim shape, the variable-speed compressor and the heating stage rather than raw capacity. Set against the $229.00 DC unit, the extra $279 pays for a thinner profile, a 24V platform and a heat function, which is a clear exchange for the right rig. Heat output adds shoulder-season value.\n\nVans, truck campers and low-roof trailers where a standard rooftop box would sit too tall will value the 5.5 inch height. A variable-frequency compressor eases battery load by adjusting output, which matters for a 24V lithium build. Owners who store the rig in a low garage or under a carport gain the same benefit, and the variable-speed compressor eases the load on a 24V battery bank.",
    "specs": [
      "8,500 BTU cool, 3,400 BTU heat",
      "Variable frequency compressor",
      "5.5 inch ultra-thin body"
    ],
    "pros": [
      "Variable-frequency compressor adjusts output",
      "5.5 inch thin body for low clearance",
      "Fits standard 14 inch roof vents",
      "Fahrenheit display"
    ],
    "cons": [
      "45 to 60 dB range is wide",
      "Lowest cooling BTU of the rooftop units"
    ],
    "bestFor": "Rigs with low clearance that want a variable-speed 24V unit."
  },
  {
    "id": "best-rv-air-conditioner-for-the-money-6",
    "rank": 6,
    "badge": "Lowest Price per BTU",
    "name": "DC 12V RV Air Conditioner",
    "price": "$229.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41kIqgM0WUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJXL4LYK?tag=rvgearlab-amz-20",
    "description": "Listed at $229.00, the DC 12V unit rates 11,000 BTU, which comes to roughly $21 per 1,000 BTU, the best figure on the page by a wide margin. It states a 350 to 750W operating range, 350 CFM of airflow, 45 dB noise and multi-layer circuit protection, which is a surprising amount of printed detail at this price.\n\nHolding a price $544 below the Arsenda 18K Heat, it posts a 45 dB figure, the lowest single decibel number on the page. Printing that figure plainly gives the buyer something firm to plan around. Where the other picks ask for 115V AC and 12V DC together, this one runs from a single 12V supply, which simplifies the electrical plan and cuts cable cost.\n\nVan builders, skoolie owners and solar-powered trailer campers with a large 12V bank get the most for their money here. Total cost depends on the battery behind it, so a buyer should price the bank before celebrating the sticker. For anyone who already owns the batteries, it is the cheapest cooling per BTU in the guide.",
    "specs": [
      "12V DC, 11,000 BTU",
      "350 to 750W range",
      "45 dB, 350 CFM"
    ],
    "pros": [
      "Lowest price of the six",
      "350 to 750W operating range",
      "Multi-layer circuit protection",
      "45 dB low-noise operation"
    ],
    "cons": [
      "Runtime depends on your battery",
      "Sparse brand history"
    ],
    "bestFor": "Battery-bank owners who want maximum cooling for the least spend."
  }
];

export const howWeEvaluated = [
  {
    "title": "Cost per 1,000 BTU",
    "description": "We divided each listed price by its rated cooling to get a dollars-per-1,000-BTU figure. The spread ran from about $21 to about $63 across the rooftop units. Where a unit reports separate heating, we treated that as added value, not as a substitute for cooling."
  },
  {
    "title": "Noise per dollar",
    "description": "Based on product specs, we lined up the printed decibel figures against price. The $229 unit states 45 dB while the $999.99 unit states 59 dB. Listings that print no figure were treated as unproven instead of quiet."
  },
  {
    "title": "Cost of the power behind the unit",
    "description": "A 12V cooler needs a battery bank and a 115V unit needs shore power or a generator. We counted that supporting cost when comparing sticker prices. The cheapest pick runs from 12V alone, so its supply cost matters most in that comparison."
  },
  {
    "title": "Features that repay over time",
    "description": "Heat pump heating, a variable-frequency compressor, circuit protection and a named refrigerant all extend a unit's useful months or efficiency. We credited them as value. Marketing words without numbers earned no credit."
  },
  {
    "title": "Fit and clearance",
    "description": "A bargain that needs fabrication stops being a bargain. We read the roof opening, profile and format on each listing. Standard 14 and 14.25 inch fits scored well, and ducted designs were matched to coaches that already have ducting."
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
    "subheading": "By Value Priority",
    "intro": "Value means different things to different buyers, so pick the priority first and read across to a unit.",
    "table": {
      "headers": [
        "Your priority",
        "Pick",
        "Why"
      ],
      "rows": [
        [
          "Lowest cost per BTU",
          "DC 12V 11000",
          "About $21 per 1,000 BTU on a 12V supply"
        ],
        [
          "Most cooling and heat per dollar",
          "Arsenda 18K Entry",
          "18,000 BTU heat pump at $773.10"
        ],
        [
          "Heat pump with a printed noise figure",
          "Arsenda 18K Heat",
          "50 dB and 680 square feet stated"
        ],
        [
          "Lowest profile",
          "24V Thin AC",
          "5.5 inch body with a variable-frequency compressor"
        ],
        [
          "Ducted ceiling compatibility",
          "FOGATTI Ducted",
          "16,000 BTU ducted fit with dual compressors"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "Price steps tell you what each extra dollar returns. The table lists the real prices in this guide.",
    "table": {
      "headers": [
        "Spend",
        "Pick",
        "What it buys"
      ],
      "rows": [
        [
          "About $229",
          "DC 12V 11000",
          "11,000 BTU, 45 dB and circuit protection"
        ],
        [
          "About $508",
          "24V Thin AC",
          "A thin variable-speed unit with heating"
        ],
        [
          "About $773",
          "Arsenda 18K Entry",
          "18,000 BTU with a heat pump"
        ],
        [
          "About $859 to $900",
          "Arsenda 18K Heat or KINGRVER 18K",
          "A stated 50 dB heat pump, or 18,000 BTU ducted at 52 dB"
        ],
        [
          "About $1,000",
          "FOGATTI Ducted",
          "16,000 BTU ducted with dual compressors"
        ]
      ]
    }
  },
  {
    "subheading": "Spend on the Unit vs Spend on the Power",
    "intro": "A cheap air conditioner can hide an expensive supply, and a costly one can run on equipment you already own.",
    "cards": [
      {
        "label": "Spend on the unit",
        "text": "Arsenda 18K Entry, Arsenda 18K Heat, KINGRVER 18K and FOGATTI Ducted run on shore power or a generator and carry the cooling cost in the sticker price. Pick them if you camp at hookup sites."
      },
      {
        "label": "Spend on the power",
        "text": "DC 12V 11000 is cheap to buy but leans on a battery bank that must feed its 350 to 750W range. Pick this path if you boondock and already own a bank."
      }
    ],
    "note": "If you camp on hookups, buy Arsenda 18K Entry; if you boondock with a big bank, buy DC 12V 11000."
  },
  {
    "subheading": "By Noise Evidence",
    "intro": "A printed decibel number beats an adjective. Rank the picks by how firmly the listing commits.",
    "table": {
      "headers": [
        "Evidence",
        "Pick",
        "What is printed"
      ],
      "rows": [
        [
          "One clear number, quiet",
          "DC 12V 11000",
          "45 dB at 350 CFM"
        ],
        [
          "One clear number, mid-range",
          "Arsenda 18K Heat",
          "50 dB"
        ],
        [
          "Ducted, 52 against 59 dB",
          "KINGRVER 18K",
          "52 dB, where FOGATTI Ducted prints 59 dB"
        ],
        [
          "A wide range",
          "24V Thin AC",
          "45 to 60 dB depending on speed"
        ],
        [
          "No number",
          "Arsenda 18K Entry",
          "No noise level listed"
        ]
      ]
    }
  },
  {
    "subheading": "For Boondocking Specifically",
    "intro": "Off-grid use puts the whole system on the table, not just the air conditioner.",
    "cards": [
      {
        "label": "Look for",
        "text": "A stated wattage range, circuit protection and a single 12V or 24V supply. DC 12V 11000 lists 350 to 750W and 24V Thin AC uses a variable-frequency compressor."
      },
      {
        "label": "In this comparison",
        "text": "DC 12V 11000 is the cheapest, and 24V Thin AC adds a variable-frequency compressor that adjusts output. Size the bank behind either before buying."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "The best value is not always the lowest price, and some buyers should pay up.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You run the unit daily and want heat and a printed noise figure. Arsenda 18K Heat and FOGATTI Ducted add features that repay over many seasons."
      },
      {
        "label": "Save if",
        "text": "You own a large battery bank and camp seasonally. DC 12V 11000 and Arsenda 18K Entry deliver the best cooling per dollar."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Dollars per 1,000 BTU",
    "explanation": "Dividing the price by the rated cooling in thousands of BTU puts very different units on one scale. DC 12V works out near $21, the Arsenda 18K Entry near $43, the Arsenda 18K Heat near $48 and the FOGATTI Ducted near $63. The lower the number, the more cooling each dollar returns. Run the division on any listing before comparing features, and then ask what the higher-priced options add in return."
  },
  {
    "criterion": "Quiet for the money",
    "explanation": "Decibels are the other half of value, and the correlation with price is weak. The cheapest unit prints 45 dB, the Arsenda 18K Heat prints 50 dB and the FOGATTI Ducted prints 59 dB. Listed noise on the 24V Thin AC spans 45 to 60 dB, a wide band to plan around. Seek a single stated number from a listing, and expect the higher end of any range to be what you hear."
  },
  {
    "criterion": "Cost of the power behind it",
    "explanation": "A unit's true price includes the supply it needs. The DC 12V unit lists a 350 to 750W operating range, so it depends on a battery bank that can feed that draw for the hours you run it. The 115V picks lean on shore power or a generator, and they also need a 12V feed. Price the supply you will actually use, not the supply the listing assumes. Add the cost of the power source to the unit before deciding which is cheaper."
  },
  {
    "criterion": "Profile and clearance",
    "explanation": "Height matters more than most buyers expect. At 5.5 inches tall, the 24V Thin AC fits standard 14 inch vents, which helps under low overhead structures and in tall-vehicle garages. A taller box costs nothing extra to buy but can cost a lot to live with. Find the height or profile on the listing and measure the clearance your rig actually needs."
  },
  {
    "criterion": "Heat pump value",
    "explanation": "A heat pump turns a summer appliance into a year-round one, which spreads its cost across more camping days. The Arsenda units list 10,236 BTU of heat against 18,000 BTU of cooling, and the 24V Thin AC lists 3,400 BTU of heat. A cooling-only unit like the FOGATTI Ducted leaves winter to a furnace. Count the heating months you will camp before paying for the function."
  },
  {
    "criterion": "Protection and track record",
    "explanation": "A cheap unit can be a bargain or a risk, and the listing is the best clue. Multi-layer circuit protection appears on the DC 12V unit, a concrete feature that guards the wiring. It also carries a sparse brand history, which means little support. Find the protection features and the warranty on the listing, and consider the track record when the savings are large."
  }
];

export const faq = [
  {
    "q": "How do I compare air conditioner value fairly?",
    "a": "Take the price over rated cooling in thousands of BTU, then compare noise and features. DC 12V comes to about $21 per 1,000 BTU, the Arsenda 18K Entry about $43 and the FOGATTI Ducted about $63. Ratings from different listings may use different bases, so compare like with like."
  },
  {
    "q": "Is the $229 unit a real bargain or a trap?",
    "a": "With batteries already owned, it is a bargain. Printed on the DC 12V listing are 11,000 BTU, 45 dB, a 350 to 750W range and multi-layer circuit protection, which is a lot of detail at the price. The sparse brand history is the risk, so treat support as something you provide yourself."
  },
  {
    "q": "Is a ducted 18,000 BTU unit worth paying for in a coach without ducts?",
    "a": "Usually not. A ducted fit sends cooled air through ceiling channels, which both the KINGRVER and the FOGATTI list. Without ducts the format buys nothing extra, and the Arsenda 18K Entry at $773.10 delivers 18,000 BTU for less. Match the format to your ceiling before comparing price."
  },
  {
    "q": "Why pay $1,000 for a 16,000 BTU cooling-only unit?",
    "a": "For the ducted fit and the build. The FOGATTI Ducted slots into existing ceiling ducts and lists dual compressors and R32 refrigerant. For a coach with ducting it is a sensible swap, though the KINGRVER delivers 18,000 BTU ducted for $100 less."
  },
  {
    "q": "Does a thin rooftop unit cool less?",
    "a": "Capacity depends on the rating, not the height. Capacity is rated at 8,500 BTU on the 24V Thin AC, which sits below the 11,000 and 18,000 BTU units here. Its 5.5 inch body is chosen for clearance, so buy it for the profile."
  },
  {
    "q": "Which Arsenda is the better value?",
    "a": "That comes down to the noise figure. The 18K Entry is $773.10 and the 18K Heat is $859.00, and both list 18,000 BTU with a heat pump. The dearer one adds a printed 50 dB and a 680 square foot claim, and the cheaper one saves $85.90."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "href": "/interior-comfort/best-rv-air-conditioners-under-1000",
    "title": "Best RV Air Conditioners Under $1,000"
  },
  {
    "href": "/interior-comfort/best-rv-air-conditioners-under-800",
    "title": "Best RV Air Conditioners Under $800"
  },
  {
    "href": "/interior-comfort/best-budget-rv-air-conditioner",
    "title": "Best Budget RV Air Conditioner"
  }
];
