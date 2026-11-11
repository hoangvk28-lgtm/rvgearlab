export const guideSlug = "best-water-purifiers-for-backpacking";
export const guideTitle = "Best Water Purifiers for Backpacking";
export const metaTitle = "Best Water Purifiers for Backpacking (2026)";
export const metaDescription = "Six backpacking water purifiers compared: Grayl press bottle, SteriPen UV pens, a LARQ UV bottle and a PURIBLOC pod, by method, weight and price.";
export const mainKeyword = "best water purifiers for backpacking";
export const introParagraphs = [
  "A purifier does one thing a basic filter cannot: it deals with viruses as well as bacteria and protozoa. For most North American backcountry trips a filter is enough, but on crowded routes, near livestock, after flooding or abroad, the extra margin is cheap insurance. Purifiers get there by different mechanisms, a pressed cartridge, ultraviolet light or a chemical medium, and each mechanism has its own habits: how long you wait, what it needs from the water and what it needs from you.",
  "The six picks here show three families. The GRAYL GeoPress presses water through a purifier cartridge in seconds. Three SteriPen pens use UV-C light, which treats a liter in about 90 seconds but works only on clear water and needs power. The LARQ PureVis 2 and PURIBLOC GOpure are different animals: one is a self-cleaning UV bottle with a chemical-reducing straw, the other a pod that adsorbs contaminants, and their listings are about everyday drinking water more than backcountry streams. Both are included because buyers search for them, and the how-to-choose tables explain what each is and is not suited for.",
  "UV pens deserve one practical warning. Ultraviolet light treats only what it can reach, so cloudy or silty water must be strained or pre-filtered first, and a dead battery means no purification at all. That makes a pen a good partner for a clear alpine source and a poor stand-alone choice for a muddy river. A press bottle has no battery and handles murky water better, at the cost of a replaceable cartridge.",
  "Prices run from $56.95 to $134.95. The tables below match each trip and budget to a named pick, and the faq covers care and the batteries you will need."
];
export const lastUpdated = "2026-11-11";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31bsnWlLSCL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-water-purifiers-for-backpacking-1",
    "rank": 1,
    "badge": "Best Overall Purifier",
    "name": "GRAYL GeoPress 24 oz Purifier Bottle",
    "price": "$99.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31bsnWlLSCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08TTXBHRW?tag=rvgearlab-amz-20",
    "description": "The GRAYL GeoPress is a 24 ounce press purifier: fill the outer bottle, press the inner one down and drink. The listing names removal of viruses such as rotavirus, norovirus and hepatitis A, bacteria such as E. coli and salmonella, and protozoa such as giardia, cryptosporidium and amoebae. It also filters particulates and adsorbs VOCs, PFAS, chemicals, pesticides, herbicides and heavy metals. The replaceable cartridge is good for 65 gallons, about 250 liters.\n\nCompared with the SteriPen Classic 3 below, the GeoPress costs $5 less, needs no batteries and works on murky water, while the pen treats a liter in 90 seconds with a lamp rated for 8,000 treatments. Compared with the LARQ PureVis 2, it adds named virus and protozoa removal for $29 less.\n\nIt suits a solo backpacker, a traveler who fills from taps and streams alike and a car camper who wants a simple routine. Nothing to charge, pump or wait for makes it the easiest purifier to live with.",
    "specs": [
      "24 oz press purifier, no pumps or batteries",
      "Names virus, bacteria and protozoa removal",
      "Cartridge good for 65 gallons (250L)"
    ],
    "pros": [
      "Names virus, bacteria and protozoa removal",
      "No batteries, pumps or tablets to manage",
      "Works on cloudy water as well as clear",
      "Adsorbs PFAS, pesticides and heavy metals"
    ],
    "cons": [
      "Cartridge replacement is a recurring cost",
      "Treats one 24 oz bottle at a time"
    ],
    "bestFor": "Backpackers who want one battery-free purifier that handles viruses, bacteria and protozoa"
  },
  {
    "id": "best-water-purifiers-for-backpacking-2",
    "rank": 2,
    "badge": "Best UV Pen for Reliability",
    "name": "SteriPen Classic 3 UV Purifier",
    "price": "$104.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31lxGdoXA1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09SG6V9WC?tag=rvgearlab-amz-20",
    "description": "The SteriPen Classic 3 is a UV-C pen that purifies clear water with no chemicals, no taste change and no waiting for tablets. It runs on four AA batteries, with about 25 treatments from alkaline, 150 from lithium or 100 from rechargeable NiMH cells, and an LED panel shows treatment size, battery level and remaining lamp life. The lamp is rated for 8,000 treatments, and the tapered neck fits most wide-mouth bottles. You stir gently for 90 seconds per liter or 48 seconds per half liter.\n\nCompared with the SteriPen Ultralight, the Classic 3 costs $3.82 less and runs on swappable AA cells that you can buy in any trail town, while the Ultralight is lighter and USB rechargeable. Compared with the SteriPen Ultra, it saves $30 and swaps the OLED screen for an LED panel.\n\nIt suits a thru-hiker or an international traveler who prefers common batteries over a charging cable. Lithium AA cells stretch it to 150 treatments.",
    "specs": [
      "UV-C pen, 1L in 90 seconds, 8,000-treatment lamp",
      "4 AA cells: 25 alkaline, 150 lithium treatments",
      "LED panel shows lamp life and battery level"
    ],
    "pros": [
      "AA batteries are available worldwide",
      "Lithium cells give about 150 treatments",
      "LED panel confirms each treatment",
      "No chemicals, no taste change"
    ],
    "cons": [
      "Works only on clear water",
      "Needs batteries to work at all"
    ],
    "bestFor": "Long trips where AA batteries are easy to resupply"
  },
  {
    "id": "best-water-purifiers-for-backpacking-3",
    "rank": 3,
    "badge": "Best Ultralight Pen",
    "name": "SteriPen Ultralight UV Purifier",
    "price": "$108.77",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21In1cg7tTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07L52FLJV?tag=rvgearlab-amz-20",
    "description": "The SteriPen Ultralight is a 3 ounce pen-style UV purifier that activates on contact with water and stops automatically, so it never runs down in your pack. The 8,000-treatment lamp purifies a liter in 90 seconds, and the USB rechargeable battery gives about 20 treatments per charge from any USB source.\n\nCompared with the Classic 3, the Ultralight costs $3.82 more and drops to 3 ounces with water-activated operation and USB charging, which suits hikers who already carry a power bank. Compared with the SteriPen Ultra, it costs $26 less and has no display, which keeps the weight down.\n\nIt suits a thru-hiker who charges at town stops, a weekend hiker on clear alpine sources and a gram counter. Water activation means there is no button to forget, and a pocket-sized body slips into a hip-belt pouch.",
    "specs": [
      "3 oz UV-C pen, water-activated",
      "8,000-treatment lamp, 1L in 90 seconds",
      "USB rechargeable, about 20 treatments per charge"
    ],
    "pros": [
      "Just 3 ounces for a full UV purifier",
      "Water-activated, with no button to forget",
      "Charges from any USB source",
      "About 20 treatments per charge"
    ],
    "cons": [
      "Needs clear water and a charged battery",
      "Only about 20 treatments between charges"
    ],
    "bestFor": "Weight-conscious hikers who can recharge by USB"
  },
  {
    "id": "best-water-purifiers-for-backpacking-4",
    "rank": 4,
    "badge": "Best UV Pen Display",
    "name": "SteriPen Ultra UV Purifier",
    "price": "$134.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41cvQdV0zGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00NK9948M?tag=rvgearlab-amz-20",
    "description": "The SteriPen Ultra is the top of the pen line, with a high-contrast OLED display that confirms each treatment, keeps a running count and shows battery status. An internal rechargeable battery powers up to 8,000 liters per lamp lifetime and charges from a computer, wall outlet or a solar panel sold separately. It purifies 1 liter in 90 seconds, or 0.5 liter in under a minute, with watertight seals and rubber protection.\n\nCompared with the Classic 3, the Ultra costs $30 more and swaps AA cells for an internal USB rechargeable battery with an OLED display. Compared with the Ultralight, it costs $26 more and adds the display and a running treatment count.\n\nIt suits a gadget-minded hiker who wants proof that each liter was treated, a traveler who tracks usage and anyone who wants a rechargeable pen with a screen.",
    "specs": [
      "UV-C pen with OLED treatment display",
      "USB rechargeable, up to 8,000 liters per lamp",
      "1L in 90 seconds, 0.5L in under a minute"
    ],
    "pros": [
      "OLED display confirms every treatment",
      "Running count of treatments is shown",
      "Rechargeable by USB, wall or solar",
      "Watertight seals with rubber protection"
    ],
    "cons": [
      "Highest price in the group at $134.95",
      "Needs clear water and a charged battery"
    ],
    "bestFor": "Hikers who want treatment confirmation and a rechargeable pen"
  },
  {
    "id": "best-water-purifiers-for-backpacking-5",
    "rank": 5,
    "badge": "Best Everyday Smart Bottle",
    "name": "LARQ PureVis 2 Self-Cleaning Bottle",
    "price": "$129.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41736aNeyBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D8BNWTCS?tag=rvgearlab-amz-20",
    "description": "The LARQ PureVis 2 is an insulated stainless steel bottle with a UV-C LED that activates every 2 hours to keep the bottle and water clean, eliminating 99 percent of bio-contaminants such as E. coli and mold. Its nano filter straw reduces chlorine, VOCs, PFAS and pharmaceuticals, tested to NSF/ANSI 42 and 53, with one filter lasting 40 gallons. Double-wall vacuum insulation keeps drinks cold for up to 24 hours, and one USB-C charge runs 2 to 3 weeks.\n\nCompared with the GRAYL GeoPress, the LARQ costs $29 more and adds insulation, an app and a self-cleaning cycle, while the Grayl names virus and protozoa removal for stream water. Compared with the PURIBLOC GOpure, it adds UV cleaning and insulation for about $72 more.\n\nIt suits a day hiker, a commuter, a trailhead camper or a traveler who wants cold, clean-tasting tap water and a bottle that cleans itself. A cap sensor logs sips for the optional hydration app.",
    "specs": [
      "Insulated steel bottle with UV-C LED every 2 hours",
      "Nano filter straw, NSF/ANSI 42 and 53, 40 gallons",
      "USB-C charging, 2 to 3 weeks per charge"
    ],
    "pros": [
      "Self-cleaning UV-C keeps the bottle fresh",
      "Straw reduces chlorine, VOCs and PFAS",
      "Insulation keeps drinks cold for 24 hours",
      "One USB-C charge lasts 2 to 3 weeks"
    ],
    "cons": [
      "Built for everyday water, not backcountry stream purification",
      "Filter straw needs replacing every 40 gallons"
    ],
    "bestFor": "Day hikers and travelers who want a clean bottle and straw filtering for tap water"
  },
  {
    "id": "best-water-purifiers-for-backpacking-6",
    "rank": 6,
    "badge": "Lowest Price Pod",
    "name": "PURIBLOC GOpure Pod Water Purifier",
    "price": "$56.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412af798FjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09BP4BSZD?tag=rvgearlab-amz-20",
    "description": "The PURIBLOC GOpure is a thumb-sized pod that drops into any bottle, pitcher or glass. It is made from a blend of food-grade ingredients including diatomaceous earth, which adsorbs trace contaminants such as chlorine and heavy metals, and the listing says it optimizes pH and improves taste. The pod is meant to keep water fresher for longer and is positioned for hiking, camping and backpacking, with an environmentally sustainable design.\n\nCompared with the LARQ PureVis 2, the GOpure costs about $72 less and gives a simple, battery-free pod you can move between bottles. Compared with the GRAYL GeoPress, it costs $43 less and focuses on taste and contaminants such as chlorine and metals.\n\nIt suits a camper who filters tap water before a trip, a traveler improving the taste of hotel water or a buyer who wants a low-cost, no-moving-parts companion in the water bottle.",
    "specs": [
      "Thumb-sized pod with diatomaceous earth blend",
      "Adsorbs chlorine and heavy metals",
      "Works in any bottle, pitcher or glass"
    ],
    "pros": [
      "Lowest price in the group at $56.95",
      "No batteries, pumps or moving parts",
      "Drops into any bottle or pitcher",
      "Improves taste by adsorbing chlorine"
    ],
    "cons": [
      "Listing does not name virus or protozoa removal",
      "Better suited to tap water than wild streams"
    ],
    "bestFor": "Light users who want to improve the taste and clarity of tap or bottled water"
  }
];

export const howWeEvaluated = [
  {
    "title": "Method and what it treats",
    "description": "We sorted the picks by method, press cartridge, UV-C light and adsorption pod, and by the organisms or contaminants each listing names."
  },
  {
    "title": "Water condition requirements",
    "description": "Based on product specs, we noted which products need clear water, such as UV pens, and which handle cloudy sources."
  },
  {
    "title": "Power and consumables",
    "description": "We compared batteries, USB charging, cartridge life and filter replacement, since a purifier is only as good as its power or consumables on day six."
  },
  {
    "title": "Weight and speed",
    "description": "We looked at stated weight, treatment time per liter and bottle size."
  },
  {
    "title": "Price and scoring",
    "description": "We compared prices from $56.95 to $134.95. The RV Gear Lab Fit Score is an editorial assessment from structured criteria, based on product specs and published buyer feedback, not a lab measurement."
  }
];

export interface HowToChooseSection {
  subheading: string; intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Water Source",
    "intro": "Water clarity and source decide which method works, so start with where you will drink from.",
    "table": {
      "headers": [
        "Water source",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Clear alpine lakes and streams",
          "SteriPen Ultralight UV Purifier",
          "UV-C works well on clear water at 3 ounces."
        ],
        [
          "Cloudy or silty rivers",
          "GRAYL GeoPress 24 oz Purifier Bottle",
          "A press cartridge handles particulates."
        ],
        [
          "Remote trips with resupply of AA cells",
          "SteriPen Classic 3 UV Purifier",
          "Lithium AA cells give about 150 treatments."
        ],
        [
          "Tap and hotel water at trailheads",
          "LARQ PureVis 2 Self-Cleaning Bottle",
          "Straw reduces chlorine, VOCs and PFAS."
        ],
        [
          "Taste and chlorine improvement",
          "PURIBLOC GOpure Pod Water Purifier",
          "A pod adsorbs chlorine and metals."
        ],
        [
          "Any source with proof of treatment",
          "SteriPen Ultra UV Purifier",
          "OLED display confirms each treatment."
        ]
      ]
    },
    "note": "For mixed water, the GRAYL GeoPress is the safest single choice."
  },
  {
    "subheading": "By Budget",
    "intro": "Prices run from $56.95 to $134.95, and each step buys a different method.",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick",
        "What you get"
      ],
      "rows": [
        [
          "Under $60",
          "PURIBLOC GOpure Pod Water Purifier",
          "A simple adsorption pod for $56.95."
        ],
        [
          "$99 to $100",
          "GRAYL GeoPress 24 oz Purifier Bottle",
          "A press purifier with 65 gallons for $99.95."
        ],
        [
          "$104 to $109",
          "SteriPen Classic 3 UV Purifier",
          "A UV pen on AA cells for $104.95."
        ],
        [
          "$108 to $109",
          "SteriPen Ultralight UV Purifier",
          "A 3 ounce USB pen for $108.77."
        ],
        [
          "$129 to $130",
          "LARQ PureVis 2 Self-Cleaning Bottle",
          "An insulated UV bottle for $129."
        ],
        [
          "$135",
          "SteriPen Ultra UV Purifier",
          "An OLED rechargeable pen for $134.95."
        ]
      ]
    }
  },
  {
    "subheading": "UV Pen vs Press Bottle",
    "intro": "The two main backcountry methods differ in what they need from you and from the water.",
    "cards": [
      {
        "label": "UV pens",
        "text": "The SteriPen Classic 3, SteriPen Ultralight and SteriPen Ultra treat a liter in about 90 seconds with no chemicals or taste change, and weigh little. They need clear water and a working battery, either AA cells or a USB charge."
      },
      {
        "label": "Press bottle",
        "text": "The GRAYL GeoPress 24 oz Purifier Bottle needs no power, handles cloudy water and doubles as a drinking bottle, and it carries a replaceable cartridge rated for 65 gallons. It is heavier than a pen and treats one bottle at a time."
      }
    ],
    "note": "Choose a pen for light weight on clear sources, and a press when water quality is unpredictable."
  },
  {
    "subheading": "By Power Source",
    "intro": "What keeps the purifier running on day six is a second way to decide.",
    "table": {
      "headers": [
        "Power preference",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "No batteries at all",
          "GRAYL GeoPress 24 oz Purifier Bottle",
          "A press needs only your hands."
        ],
        [
          "Common AA cells",
          "SteriPen Classic 3 UV Purifier",
          "25 alkaline or 150 lithium treatments."
        ],
        [
          "USB charging from a power bank",
          "SteriPen Ultralight UV Purifier",
          "About 20 treatments per charge."
        ],
        [
          "USB or solar with a display",
          "SteriPen Ultra UV Purifier",
          "Charges by USB, wall or solar."
        ],
        [
          "Weeks between charges",
          "LARQ PureVis 2 Self-Cleaning Bottle",
          "One USB-C charge lasts 2 to 3 weeks."
        ],
        [
          "Zero power and zero moving parts",
          "PURIBLOC GOpure Pod Water Purifier",
          "A pod with no electronics."
        ]
      ]
    }
  },
  {
    "subheading": "For Backcountry Trips Specifically",
    "intro": "Wild water raises the stakes, so a purifier must name what it handles.",
    "cards": [
      {
        "label": "Look for",
        "text": "Named virus and protozoa removal, a method that fits your water clarity and a plan for power or cartridges. The GRAYL GeoPress and SteriPen Classic 3 are the first two to check."
      },
      {
        "label": "In this comparison",
        "text": "The GRAYL GeoPress 24 oz Purifier Bottle names virus, bacteria and protozoa removal, and the SteriPen Classic 3 UV Purifier and SteriPen Ultralight UV Purifier treat clear water with UV-C. The LARQ PureVis 2 and PURIBLOC GOpure suit tap water more than streams."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "A higher price in this group buys convenience, display or insulation.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want proof of treatment or insulation. The SteriPen Ultra at $134.95 adds an OLED display and the LARQ PureVis 2 at $129 adds a cold, self-cleaning bottle."
      },
      {
        "label": "Save if",
        "text": "You want a simple routine. The GRAYL GeoPress at $99.95 and the PURIBLOC GOpure Pod at $56.95 do the job for less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "What the purifier is rated to remove",
    "explanation": "A true purifier lists viruses, bacteria and protozoa, while a taste pod or smart bottle may list chlorine, VOCs or a percentage of bio-contaminants. Drinking from a stream with a pod aimed at tap water is a risk, since taste improvement is not pathogen removal. Match the claim to your source. Look for named organisms and percentages in the bullets."
  },
  {
    "criterion": "Water clarity requirements",
    "explanation": "UV-C light treats only the water it can reach, so silt and cloudiness shield microbes and reduce effectiveness. A cloudy river needs a pre-strain or a different method. A press cartridge handles particulates, and a UV pen does not. Look for words such as clear water in the listing and plan a pre-filter if needed."
  },
  {
    "criterion": "Power and batteries",
    "explanation": "A UV pen is a battery device, and a dead battery means no purification. AA cells give about 25 alkaline or 150 lithium treatments, and a USB pen gives about 20 per charge. On a long trip, count liters per day against treatments. Check the battery type, treatments per charge and charging options."
  },
  {
    "criterion": "Speed and volume",
    "explanation": "A pen treats a liter in 90 seconds, a press treats 24 ounces in seconds and a pod works as water sits. Speed matters when you are thirsty and volume matters for cooking and groups. Check treatment time per liter and bottle size."
  },
  {
    "criterion": "Weight and packability",
    "explanation": "A 3 ounce pen vanishes in a pocket, while a press bottle replaces a water bottle and an insulated bottle adds weight. Weight matters most over many miles. Check weight in ounces and whether the device doubles as a bottle."
  },
  {
    "criterion": "Consumables and long-term cost",
    "explanation": "A 65 gallon cartridge, a 40 gallon filter straw and an 8,000-treatment lamp all wear out at different rates. A cheap device with expensive refills can cost more than a pricey one with long-life parts. Divide replacement cost by volume to compare. Look for rated volume or treatments for each consumable."
  }
];

export const faq = [
  {
    "q": "Do UV purifiers work in cloudy water?",
    "a": "Not well. UV-C needs to reach the microbes, so silt shields them. Strain cloudy water through a cloth or filter first, or choose the GRAYL GeoPress, which handles particulates. SteriPen listings describe their use on clear water."
  },
  {
    "q": "How long does a SteriPen last?",
    "a": "The lamp is rated for 8,000 treatments. Battery life differs: about 25 treatments from alkaline AA cells and 150 from lithium on the Classic 3, and about 20 per USB charge on the Ultralight."
  },
  {
    "q": "Is the LARQ bottle a backpacking purifier?",
    "a": "Its UV-C cycle keeps the bottle and water clean and the straw reduces chlorine and chemicals, which suits tap water and day trips. For wild streams, choose a purifier that names virus and protozoa removal, such as the GRAYL GeoPress."
  },
  {
    "q": "How do I use the GRAYL GeoPress?",
    "a": "Fill the outer bottle, set the inner press on top and push down on a firm surface, then drink from the inner bottle. Replace the cartridge after about 65 gallons."
  },
  {
    "q": "Can I use a purifier pod on stream water?",
    "a": "The PURIBLOC GOpure listing focuses on chlorine, heavy metals and taste, so it fits tap and bottled water. For stream water, choose a product that names pathogens."
  },
  {
    "q": "How should I store a purifier in cold weather?",
    "a": "Keep cartridges and batteries warm, since freezing can damage a cartridge and cold drains batteries faster. Sleep with your press or pen in your bag on freezing nights."
  }
];

export const bottomLine = "For most backpackers, the GRAYL GeoPress 24 oz at $99.95 is the best purifier in this group: named virus, bacteria and protozoa removal, no batteries and a 65-gallon cartridge. Weight-conscious hikers on clear sources should choose the SteriPen Ultralight at $108.77, and those who prefer AA cells the SteriPen Classic 3 at $104.95. The SteriPen Ultra at $134.95 adds an OLED display, the LARQ PureVis 2 at $129 is a smart bottle for everyday water and the PURIBLOC GOpure at $56.95 is a taste-focused pod. Match the method to your water clarity, plan for power or cartridges and read what each product claims to remove.";

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Water Filter For Groups",
    "href": "/packs-hiking/best-backpacking-water-filter-for-groups"
  },
  {
    "title": "Best Water Filter For Backpacking Trip",
    "href": "/packs-hiking/best-water-filter-for-backpacking-trip"
  },
  {
    "title": "Best Affordable Backpacking Water Filters",
    "href": "/packs-hiking/best-affordable-backpacking-water-filters"
  }
];
