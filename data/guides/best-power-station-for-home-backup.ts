export const guideSlug = "best-power-station-for-home-backup";
export const guideTitle = "5 Best Power Station For Home Backup in 2026";
export const metaTitle = "Best Power Station For Home Backup in 2026";
export const metaDescription = "Best power stations for home backup: five stations from 292Wh to 3,584Wh, compared on capacity, output watts, UPS switchover and recharge speed.";
export const mainKeyword = "best power station for home backup";
export const introParagraphs = [
  "Home backup asks a different question than camping does. You need to know how many hours the fridge, router and a few lights will run when the grid is down, and whether the station can start a sump pump or a well pump.",
  "The five stations here span a 292Wh grab-and-go unit to a 3,584Wh whole-room system. They are ordered by how much of a home they can realistically cover, with output, capacity and recharge notes for each."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/power-station-campsite.webp";
export const heroImageAlt = "Jeep camp with a tent, solar panels and a portable power station at a pine forest campsite";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-power-station-for-home-backup-1",
    "rank": 1,
    "badge": "Best Whole-Home Capacity",
    "name": "Jackery HomePower 3600 Plus Power Station",
    "price": "$1709.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31MKjmDYAXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FM8653F1?tag=rvgearlab-amz-20",
    "description": "The Jackery HomePower 3600 Plus is a 3,584Wh station with 3,600W of AC output, 7,200W in parallel and dual 120V and 240V voltage. Its ceramic membrane LFP cells are listed as tested at 302F and it recharges in about 2 hours through hybrid AC plus DC input.\n\nIt is the only pick here sized for pumps, heaters and dryers, and the listing describes plug-and-play setup when paired with its MTS. It is 34% smaller and 29.3% lighter than comparable 3.6kWh stations according to the listing.\n\nIt suits homeowners with well pumps, sump pumps or an electric furnace blower to protect. The 240V output opens up appliances that smaller stations cannot run.",
    "specs": [
      "3,584Wh, 3,600W AC output",
      "120V and 240V, 7,200W parallel",
      "Full recharge in about 2 hours"
    ],
    "pros": [
      "3,600W output runs pumps and heaters",
      "Dual 120V and 240V voltage",
      "Fast hybrid recharge in about 2 hours",
      "Ceramic membrane LFP cells"
    ],
    "cons": [
      "Highest price by a wide margin",
      "Heavy and not a camp carry"
    ],
    "bestFor": "Whole-home backup",
    "take": "The only one here that can carry a real household load. Buy it for a pump or furnace.",
    "catch": "It costs far more than the other four combined."
  },
  {
    "id": "best-power-station-for-home-backup-2",
    "rank": 2,
    "badge": "Best Fast Recharge",
    "name": "Anker SOLIX C1000 Gen 2 Portable Power Station",
    "price": "$499.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41LPWKTY8CL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FN7MSY4L?tag=rvgearlab-amz-20",
    "description": "The Anker SOLIX C1000 Gen 2 holds 1,024Wh and delivers 2,000W with 3,000W peak across 10 ports. HyperFlash recharging reaches full in 49 minutes at 1,600W, and 600W of solar input recharges it in about 1.8 hours.\n\nIt recharges far faster than the EBL or STARYLINE, which matters when outages come in waves. The battery is rated to hold at least 80% capacity after 4,000 cycles.\n\nIt fits households that want to refill between outages and run a fridge, a space heater at low setting or a sump pump. It also works for RV and camping.",
    "specs": [
      "1,024Wh, 2,000W (3,000W peak)",
      "49 minute full recharge at 1,600W",
      "4,000 cycles to 80% capacity"
    ],
    "pros": [
      "Full recharge in 49 minutes",
      "2,000W output across 10 ports",
      "4,000 cycles to 80% capacity",
      "600W solar input"
    ],
    "cons": [
      "1,024Wh is not whole-home",
      "Fast charging needs the app enabled"
    ],
    "bestFor": "Fast turnaround between outages",
    "take": "It refills faster than anything else here. A strong all-round backup.",
    "catch": "Capacity runs a fridge, not a whole house."
  },
  {
    "id": "best-power-station-for-home-backup-3",
    "rank": 3,
    "badge": "Best Big Capacity Value",
    "name": "EBL 2400W Portable Power Station LiFePO4 Battery for Home Use",
    "price": "$499.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Rscin7aaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQZT4SP8?tag=rvgearlab-amz-20",
    "description": "The EBL 2400W station holds 1,843.2Wh with 2,400W output and four AC ports, plus a full set of other ports for 12 devices at once. It switches to backup in 0.1 seconds during a blackout and uses LiFePO4 cells rated for over 3,500 cycles.\n\nIt has nearly twice the capacity of the Anker and the STARYLINE at a similar price to the Anker. At 55 lbs it is the heaviest of the mid-size picks, with a clear display for remaining power.\n\nIt fits families that want a fridge, router and lights to run for many hours. The 0.1 second switchover protects computers during a blackout.",
    "specs": [
      "1,843.2Wh, 2,400W, 4 AC ports",
      "0.1 second backup switchover",
      "LiFePO4, 3,500+ cycles"
    ],
    "pros": [
      "Large 1,843Wh for the price",
      "0.1 second switchover to backup",
      "Four AC ports, 12 devices at once",
      "LiFePO4 cells, 3,500+ cycles"
    ],
    "cons": [
      "55 lbs is hard to carry far",
      "Slower recharge than the Anker"
    ],
    "bestFor": "Fridge and router backup",
    "take": "The best capacity per dollar here. Great for a fridge during a long outage.",
    "catch": "It weighs 55 lbs."
  },
  {
    "id": "best-power-station-for-home-backup-4",
    "rank": 4,
    "badge": "Best Mid-Price Option",
    "name": "STARYLINE 1000W Portable Power Station 1024Wh LiFePO4 for Outdoor & Home",
    "price": "$299.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41gOB71FB5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVJ6DVL9?tag=rvgearlab-amz-20",
    "description": "The STARYLINE has 1,000W continuous output and 1,024Wh of LiFePO4 capacity, with two AC outlets, a 60W PD USB-C port and two USB-A ports. The listing says it powers lights, routers and mini fridges for two to three days, and it supports up to 300W of solar input.\n\nIt weighs 27.73 lbs and has an integrated non-slip handle. Compared with the Anker, it gives up the 49 minute recharge and 2,000W output.\n\nIt suits campers and home backup buyers who want an affordable 1kWh station. It is listed as compatible with Starlink.",
    "specs": [
      "1,000W, 1,024Wh LiFePO4",
      "27.73 lbs, 3,000+ cycles",
      "300W max solar input"
    ],
    "pros": [
      "1,024Wh LiFePO4 at a mid price",
      "One person can carry 27.73 lbs",
      "Starlink-compatible per the listing",
      "300W solar input"
    ],
    "cons": [
      "1,000W cap limits bigger appliances",
      "Slower recharge than the Anker"
    ],
    "bestFor": "Router, lights and mini fridge",
    "take": "An easy-to-carry 1kWh station at a fair price. Good for a few days of basic backup.",
    "catch": "It will not start a well pump."
  },
  {
    "id": "best-power-station-for-home-backup-5",
    "rank": 5,
    "badge": "Best Grab-and-Go",
    "name": "Jackery Explorer 300 Portable Power Station",
    "price": "$259.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-Ey75o-WL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082TMBYR6?tag=rvgearlab-amz-20",
    "description": "The Jackery Explorer 300 holds 292Wh in LiFePO4 cells rated for over 4,000 cycles, weighs 7.5 lbs and has two AC outlets, a 100W USB-C PD port, two USB-A ports and a 120W car port. Output is 300W with a 600W peak.\n\nIt is the smallest and lightest here, with a handle and an easy carry between rooms. It reaches 80% capacity in about 2.8 hours with a 100W Jackery panel.\n\nIt suits renters, apartment dwellers and anyone who just needs phones, a router and a lamp running. The 120W car port also helps on road trips.",
    "specs": [
      "292Wh, 300W (600W peak)",
      "LiFePO4, 4,000+ cycles",
      "7.5 lbs, 6 ports"
    ],
    "pros": [
      "Only 7.5 lbs",
      "LiFePO4 cells for 4,000+ cycles",
      "100W USB-C PD port",
      "Pairs with Jackery panels"
    ],
    "cons": [
      "292Wh runs out fast",
      "300W cannot run larger appliances"
    ],
    "bestFor": "Phones, router and lights",
    "take": "A small station that fits any closet. Great for light outages.",
    "catch": "It will not run a fridge for long."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "Watt-hours."
  },
  {
    "title": "Output",
    "description": "Watts."
  },
  {
    "title": "Switchover",
    "description": "UPS speed."
  },
  {
    "title": "Recharge",
    "description": "Hours."
  },
  {
    "title": "Weight",
    "description": "Pounds."
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
    "subheading": "By What You Need to Run",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Pumps, heaters, 240V",
          "Jackery HomePower 3600 Plus",
          "3,600W with 240V"
        ],
        [
          "Fridge for a day or two",
          "EBL 2400W Station",
          "1,843Wh at a fair price"
        ],
        [
          "Fast refills between outages",
          "Anker SOLIX C1000 Gen 2",
          "49 minute recharge"
        ],
        [
          "Router, lights, mini fridge",
          "STARYLINE 1000W",
          "1,024Wh in 27.73 lbs"
        ],
        [
          "Phones, router, lamp",
          "Jackery Explorer 300",
          "292Wh, 7.5 lbs"
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
          "$250 to $300",
          "Jackery Explorer 300 or STARYLINE 1000W"
        ],
        [
          "$490 to $500",
          "EBL 2400W Station or Anker SOLIX C1000 Gen 2"
        ],
        [
          "$1700 to $1710",
          "Jackery HomePower 3600 Plus"
        ]
      ]
    }
  },
  {
    "subheading": "Whole-Home Station vs Mid-Size Station",
    "cards": [
      {
        "label": "Whole-Home",
        "text": "3,000W-plus output, 240V and multi-kWh capacity. Jackery HomePower 3600 Plus."
      },
      {
        "label": "Mid-Size",
        "text": "1kWh-class and 2kWh-class stations for essentials. Anker SOLIX C1000 Gen 2, EBL 2400W Station, STARYLINE 1000W and Jackery Explorer 300."
      }
    ],
    "note": "Most households should choose EBL 2400W Station or Anker SOLIX C1000 Gen 2 for essentials."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest outlay",
          "Jackery Explorer 300"
        ],
        [
          "Mid price, 1kWh",
          "STARYLINE 1000W"
        ],
        [
          "Best value capacity",
          "EBL 2400W Station"
        ],
        [
          "Premium",
          "Jackery HomePower 3600 Plus"
        ]
      ]
    }
  },
  {
    "subheading": "For Power Outage Preparedness Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Enough Wh for your fridge, a UPS switchover and a way to recharge from solar."
      },
      {
        "label": "In this comparison",
        "text": "EBL 2400W Station lists a 0.1 second switchover, and Anker SOLIX C1000 Gen 2 accepts 600W of solar."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on Jackery HomePower 3600 Plus if you must run pumps, a furnace blower or 240V loads."
      },
      {
        "label": "Save if",
        "text": "Save with Jackery Explorer 300 or STARYLINE 1000W if you only need phones, a router and lights."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match capacity to your load",
    "explanation": "List what you want to run, add the watts and multiply by hours. A 150W fridge plus a 20W router and 30W of lights is about 200W, so a 1,024Wh station runs it for roughly four to five hours. Check capacity in Wh."
  },
  {
    "criterion": "Output watts and starting surge",
    "explanation": "Motors such as sump pumps and well pumps draw several times their running watts for a second when they start. A 1,000W station may stall where a 2,000W station starts. Check the manual for your pump's start load."
  },
  {
    "criterion": "UPS switchover",
    "explanation": "A switchover of 10 milliseconds or less keeps computers on. A slower transfer may reboot some devices. Check for a stated switchover time."
  },
  {
    "criterion": "Recharge speed",
    "explanation": "A station that takes six hours to refill is weak between storms. A 49 minute refill at 1,600W is a big advantage. Check recharge time and the maximum solar input."
  },
  {
    "criterion": "Transfer switch and 240V",
    "explanation": "Plugging a station into a house circuit requires a proper transfer switch and a licensed electrician. A 240V output is needed for some well pumps and furnaces. Check what the listing says about 120V and 240V outputs."
  },
  {
    "criterion": "Battery chemistry and cycles",
    "explanation": "LiFePO4 cells last for thousands of cycles, which suits a unit used for years. A station used a few times a year will not wear its cells out, but one used often will. Check the cycle count and the capacity retention."
  }
];

export const faq = [
  {
    "q": "How long will a power station run my fridge?",
    "a": "Divide the station's Wh by the fridge's average draw. A fridge that averages about 100W runs for roughly ten hours on a 1,024Wh unit, with real-world losses lowering that."
  },
  {
    "q": "Can a power station run my whole house?",
    "a": "Only a large system such as Jackery HomePower 3600 Plus with a transfer switch can carry major loads. Small stations cover essentials."
  },
  {
    "q": "Is a bigger station worth it over a mid-size station?",
    "a": "If you must run well pumps or a furnace, yes. If you only need fridge and router backup, EBL 2400W Station or Anker SOLIX C1000 Gen 2 is enough."
  },
  {
    "q": "How do I connect a power station to my home?",
    "a": "The simplest way is plugging appliances directly into the station with extension cords. Connecting to house wiring needs a proper transfer switch installed by a licensed electrician."
  },
  {
    "q": "How do I keep a backup station ready?",
    "a": "Store it indoors, keep it near 50% to 80% charged and top it up every few months. Test it under load once a year."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Portable Solar Panels",
    "href": "/camp-power/best-portable-solar-panels"
  },
  {
    "title": "Best Power Station",
    "href": "/camp-power/best-power-station"
  },
  {
    "title": "Best Solar Power Bank",
    "href": "/camp-power/best-solar-power-bank"
  },
  {
    "title": "Best Portable Solar Panels For Home",
    "href": "/camp-power/best-portable-solar-panels-for-home"
  }
];
