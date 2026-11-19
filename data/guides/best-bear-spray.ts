export const guideSlug = "best-bear-spray";
export const guideTitle = "6 Best Bear Spray in 2026";
export const metaTitle = "Best Bear Spray in 2026";
export const metaDescription = "Six EPA-registered bear sprays compared by range, spray time, holster and size, for campers and hikers heading into bear country.";
export const mainKeyword = "best bear spray";
export const introParagraphs = [
  "Bear spray is a deterrent used at close range, and the label tells you far more than the brand name does. The product must be EPA-registered and labeled for bears, which is not the same thing as human pepper spray sold for personal defense. Range, how long the can sprays and the expiration date on the can are the figures that decide whether it is worth carrying.",
  "The six picks here are all labeled for bears and come in two broad styles: 40 foot cans with a dense fog and 35 foot Trail Boss cans, plus a 9 ounce Mace with a long spray time, offered as a single or a two-pack. Spray time varies from about 5 to 9 seconds, and the real difference between them is what ships in the box, since most include a holster.",
  "We evaluated each listing for EPA registration, stated range and duration, formula strength, holster and extras. Bear spray belongs on your belt or chest strap where you can reach it, not buried in a pack, and you should check the rules of the park or agency where you camp, along with any seasonal guidance from rangers."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/414C7RSA3kL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-bear-spray-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "SABRE Frontiersman MAX Bear Spray",
    "price": "$39.02",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/414C7RSA3kL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FLLDXG8K?tag=rvgearlab-amz-20",
    "description": "The SABRE Frontiersman MAX is EPA-registered for nine animal species, including bears, mountain lions, coyotes, moose and bison. It uses 2 percent major capsaicinoids and a 40 foot range, deploying a dense fog about 6 feet wide for 6 to 7 seconds of total spray.\n\nCompared with the Trail Boss cans, it adds five more feet of listed range and a quick-draw elastic belt holster with a glow-in-the-dark safety clip that is easy to find in low light. It also includes a bell for hiking, and every batch is lab-tested by HPLC to check strength and consistency. The listing adds that it is approved by the EPA and Health Canada and uses an eco-friendly propellant.\n\nIt suits campers and hikers who want a well-rounded can with a stated range, a stated spray time and a holster in one package. The glow-in-the-dark wedge helps you find the safety by feel and by sight at night. It sits mid-pack on price, a clear step below the Griz Guard.",
    "specs": [
      "40 ft range, 6 to 7 second spray",
      "2 percent major capsaicinoids",
      "Elastic belt holster with glow clip"
    ],
    "pros": [
      "Stated 40 foot range and 6 to 7 second spray",
      "Glow-in-the-dark safety wedge and clip",
      "Belt holster and bell in the package",
      "Every batch is lab verified for strength"
    ],
    "cons": [
      "Shorter spray time than the 9 second Mace",
      "Bell may not suit every camper"
    ],
    "bestFor": "A well-equipped all-around can"
  },
  {
    "id": "best-bear-spray-2",
    "rank": 2,
    "badge": "Best Maximum Strength",
    "name": "Griz Guard 260GG2 Bear Spray W/Holster 40 ft Range",
    "price": "$74.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51a-IpOhAsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09Y2KNC3S?tag=rvgearlab-amz-20",
    "description": "The Griz Guard 260GG2 is designed by a grizzly attack survivor and made in the USA. It carries 2 percent major capsaicinoids, which the listing calls the strongest formula the EPA allows for bears, and a 40 foot (12 meter) range.\n\nWhere the SABRE Frontiersman focuses on a belt holster and glow-in-the-dark clip, the Griz Guard emphasizes a high-volume blast that deploys in a dense fog. The listing says it is federally registered with the EPA to deter bears, mountain lions, coyotes, dogs and moose. A holster is included.\n\nIt suits buyers who want a maker with a bear-country background and a stated maximum-strength formula. It is the most expensive can in this guide, and that cost buys the brand pedigree and the high-volume fog pattern. Choose it when strength and spray power are your first concerns.",
    "specs": [
      "40 ft range, 2 percent capsaicinoids",
      "EPA-registered for five animals",
      "Holster included, made in USA"
    ],
    "pros": [
      "Maximum 2 percent capsaicinoid formula",
      "Stated 40 foot, 12 meter range",
      "Dense, high-volume fog deployment",
      "Designed by a bear attack survivor"
    ],
    "cons": [
      "Most expensive can in this guide",
      "No spray duration listed on the listing"
    ],
    "bestFor": "Maximum strength and high-volume spray"
  },
  {
    "id": "best-bear-spray-3",
    "rank": 3,
    "badge": "Best Two-Pack",
    "name": "Mace Bear Spray Guard Alaska w/ Holster Max Strength OC Self Defense",
    "price": "$59.40",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51fw9oGxrhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FVBHZGNZ?tag=rvgearlab-amz-20",
    "description": "The Mace Guard Alaska 2-Pack contains two 9 ounce cans, each EPA-registered and sold with a holster. The listing gives up to 9 seconds of spray and a fogger pattern that keeps a safe distance from a charging bear.\n\nCompared with the single Mace Guard Alaska, the two-pack puts a spare can in your gear at a lower cost per can, which suits a family or a group. A finger loop handle makes carrying and quick deployment easy, and a heavy-duty nylon holster with a hook-and-loop closure keeps the can secure. To use it, you pull the orange safety wedge and press the actuator.\n\nIt suits two campers who each want their own can, or one camper who wants a backup for a longer trip. Having two cans means a replacement is ready when one reaches its expiration date. It is the second most expensive pick here, since you buy two.",
    "specs": [
      "Two 9 oz cans with holsters",
      "Up to 9 seconds of spray",
      "Finger loop handle, orange safety wedge"
    ],
    "pros": [
      "Two cans for two people or a spare",
      "Up to 9 seconds of spray per can",
      "Nylon holster with hook-and-loop closure",
      "Finger loop handle for quick access"
    ],
    "cons": [
      "Higher upfront cost since you buy two",
      "Range figure is not on the listing"
    ],
    "bestFor": "Two people or a spare can"
  },
  {
    "id": "best-bear-spray-4",
    "rank": 4,
    "badge": "Best Budget",
    "name": "Mace Bear Spray Guard Alaska w/ Holster Max Strength OC Self Defense",
    "price": "$33.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Ls3n4stPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0007VO7H4?tag=rvgearlab-amz-20",
    "description": "The Mace Guard Alaska single is a 9 ounce can that is EPA-registered and sold with a holster. It uses a powerful fogger pattern and gives up to 9 seconds of spray, the longest spray time listed among these cans.\n\nNext to the SABRE Frontiersman, it trades the lab-tested batch claim for a longer listed spray time and a lower cost. A finger loop handle lets you pull the can quickly, and a hook-and-loop nylon holster keeps it on your belt. It is the lowest priced can on this list.\n\nIt suits campers who want a plain, long-spraying can at the lowest cost. The orange safety wedge pulls off and the actuator presses down, so the controls are simple. Choose it when you want one can with a long spray time.",
    "specs": [
      "9 oz can, up to 9 second spray",
      "Nylon holster with hook-and-loop",
      "Finger loop handle, safety wedge"
    ],
    "pros": [
      "Longest listed spray time at 9 seconds",
      "Lowest priced can in this guide",
      "Holster included in the package",
      "Simple wedge and actuator controls"
    ],
    "cons": [
      "No stated range on the listing",
      "No glow-in-the-dark safety clip"
    ],
    "bestFor": "A single can with a long spray time"
  },
  {
    "id": "best-bear-spray-5",
    "rank": 5,
    "badge": "Best Quick Deploy",
    "name": "Trail Boss Bear Spray",
    "price": "$37.83",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418engk8o+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F5RSS4JP?tag=rvgearlab-amz-20",
    "description": "The SABRE Trail Boss lists a 35 foot range, 2 percent major capsaicinoids and a 5 second full deployment. The listing says it is EPA-registered and comes in 7.9 ounce and 13.4 ounce options.\n\nCompared with the SABRE Frontiersman, it has a slightly shorter range but a shorter deployment time, and this version includes a quick, quiet holster that keeps the can ready for fast access. The holster is the reason to choose this listing over the other Trail Boss. It keeps the can on your belt where you can reach it.\n\nIt suits hikers and campers who want a compact can with a holster and a quick-deploy claim. The size options let you choose a smaller can for a daypack belt or a larger can for camp. It sits in the middle of the shortlist on price.",
    "specs": [
      "35 ft range, 5 second deployment",
      "2 percent major capsaicinoids",
      "Holster included, two size options"
    ],
    "pros": [
      "Holster included for quick access",
      "Stated 35 foot range",
      "Full deployment in 5 seconds",
      "Two sizes to choose from"
    ],
    "cons": [
      "Shorter range than the 40 foot cans",
      "Holster raises the cost over the plain version"
    ],
    "bestFor": "A compact can with a holster"
  },
  {
    "id": "best-bear-spray-6",
    "rank": 6,
    "badge": "Best Value Can",
    "name": "Trail Boss Bear Spray",
    "price": "$36.37",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Q1kAtF6XL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F5QYVS9Z?tag=rvgearlab-amz-20",
    "description": "The SABRE Trail Boss without the holster listing shares the 35 foot range and 2 percent major capsaicinoid formula. It deploys in 5 seconds and is EPA-approved and field-tested.\n\nIt costs a little less than the Holster version, which makes it a straightforward choice if you already own a holster or a chest harness. Compared with the Mace Single, it lists a range and a quick deployment, while the Mace lists a longer spray time. The listing describes it as proven effective against bears.\n\nIt suits campers who already have a carry system and want a can that is EPA-approved and labeled for bears. The two size options let you match a can to your pack. It is a solid choice for a tight budget.",
    "specs": [
      "35 ft range, 5 second deployment",
      "2 percent major capsaicinoids",
      "7.9 oz and 13.4 oz options"
    ],
    "pros": [
      "Stated 35 foot range",
      "Maximum strength 2 percent formula",
      "Full deployment in 5 seconds",
      "Costs a little less than the holster version"
    ],
    "cons": [
      "A holster is not listed on the listing",
      "Shorter range than the 40 foot cans"
    ],
    "bestFor": "Campers who already own a holster"
  }
];

export const howWeEvaluated = [
  {
    "title": "EPA registration and label",
    "description": "We checked that each listing states EPA registration and names bears. A product labeled for bears is what you want, not human pepper spray."
  },
  {
    "title": "Range and spray time",
    "description": "We compared the stated ranges of 35 and 40 feet and the spray times from 5 to 9 seconds. These figures set how much distance and time you have."
  },
  {
    "title": "Formula strength",
    "description": "We noted the 2 percent major capsaicinoid figure, which the listings describe as the maximum the EPA allows. Where a listing names a different measure, we left it as the maker states it."
  },
  {
    "title": "Holster and access",
    "description": "We checked for belt holsters, finger loops and safety wedges. A can in a pack is slow to reach, so carry matters."
  },
  {
    "title": "Pack size and extras",
    "description": "We compared one-can listings with the two-pack and size options. Extras such as bells and glow-in-the-dark clips were noted as small conveniences."
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
    "subheading": "By what matters most",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Maximum listed range and strength",
          "GRIZ GUARD 260GG2",
          "It lists a 40 foot range and the 2 percent formula"
        ],
        [
          "A complete kit with a bell and glow clip",
          "SABRE Frontiersman",
          "It has a belt holster, bell and glow-in-the-dark safety clip"
        ],
        [
          "The longest spray time",
          "Mace Single",
          "It lists up to 9 seconds of spray in a 9 ounce can"
        ],
        [
          "A spare for a second person",
          "Mace 2-Pack",
          "It contains two 9 ounce cans with holsters"
        ],
        [
          "A quick deploy with a holster",
          "SABRE Trail Boss Holster",
          "It lists a 5 second full deployment and a 35 foot range"
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
          "Entry of this shortlist",
          "Mace Single or SABRE Trail Boss"
        ],
        [
          "Mid of this shortlist",
          "SABRE Trail Boss Holster or SABRE Frontiersman"
        ],
        [
          "Top of this shortlist",
          "Mace 2-Pack or GRIZ GUARD 260GG2"
        ]
      ]
    }
  },
  {
    "subheading": "40 foot range vs 35 foot range",
    "cards": [
      {
        "label": "40 foot cans",
        "text": "These reach five feet farther and are made for maximum distance. The GRIZ GUARD 260GG2 and SABRE Frontiersman work this way."
      },
      {
        "label": "35 foot cans",
        "text": "These list a shorter range but a faster deployment and a lower cost. The SABRE Trail Boss Holster and SABRE Trail Boss work this way."
      }
    ],
    "note": "Choose the SABRE Frontiersman for the best mix of range and extras, or the SABRE Trail Boss if you already have a holster."
  },
  {
    "subheading": "By how you carry it",
    "table": {
      "headers": [
        "If you want",
        "Recommended pick"
      ],
      "rows": [
        [
          "A glow-in-the-dark safety clip",
          "SABRE Frontiersman"
        ],
        [
          "A finger loop handle",
          "Mace Single"
        ],
        [
          "A holster in the box and a small can",
          "SABRE Trail Boss Holster"
        ],
        [
          "A can for an existing harness",
          "SABRE Trail Boss"
        ]
      ]
    }
  },
  {
    "subheading": "For Group Camping Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A can for each adult, with a holster and a printed expiration date"
      },
      {
        "label": "In this comparison",
        "text": "The Mace 2-Pack gives two cans with holsters, and the SABRE Frontiersman lists a belt holster for each camper."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the GRIZ GUARD 260GG2 for its maximum-strength formula and 40 foot range, or on the Mace 2-Pack to cover two people."
      },
      {
        "label": "Save if",
        "text": "Save with the Mace Single, the lowest priced can here, or the SABRE Trail Boss if you already own a holster."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "EPA registration for bears",
    "explanation": "Bear spray is a registered product, and it must be labeled for bears. Human pepper spray is not designed for the volume and distance needed against a bear. Without bear on the label you do not have a bear deterrent. Read the product label and listing for the EPA registration and the word bear before you buy."
  },
  {
    "criterion": "Spray range",
    "explanation": "Range is how far the stream reaches in calm air, and it is listed in feet, such as 35 or 40. A longer range gives you more time and more room, which is what the can is for. Wind changes the real distance, so treat the figure as a best case. Compare the stated range on the label across brands."
  },
  {
    "criterion": "Spray duration",
    "explanation": "Duration is how many seconds the can sprays before it empties, and it ranges from about 5 to 9 seconds on these picks. A longer spray gives you more than one burst if the first miss happens. A short spray with a fast deployment may suit a user who practices. Look for the number of seconds on the label."
  },
  {
    "criterion": "Carrying it where you can reach it",
    "explanation": "A can buried in a pack is useless in a few seconds. A belt holster or chest strap keeps it at hand, and a safety wedge keeps it from firing by accident. Practice drawing it. Check the listing for the holster type, and make sure it fits your belt or harness."
  },
  {
    "criterion": "Expiration date and replacement",
    "explanation": "Bear spray has an expiration date printed on the can, and the propellant loses pressure over time. An expired can may not reach its stated range. This is why a two-pack, like the Mace 2-Pack, helps with rotating a spare. Check the date on arrival and write it on your calendar."
  },
  {
    "criterion": "Rules and local guidance",
    "explanation": "Parks and land agencies publish their own guidance on bear spray, food storage and camping in bear country. Rules can differ by area and by season. Check with the agency where you camp, and carry the can in line with their guidance. Bear spray is one tool, not a substitute for good food storage."
  }
];

export const faq = [
  {
    "q": "Can I use regular pepper spray instead of bear spray?",
    "a": "No. Bear spray must be EPA-registered and labeled for bears, as the SABRE Frontiersman and GRIZ GUARD 260GG2 are. Human pepper spray is not made for the volume and range needed. Read the label before you buy."
  },
  {
    "q": "Is a longer spray time better than a longer range?",
    "a": "Both matter. The Mace Single lists up to 9 seconds, while the SABRE Frontiersman lists 6 to 7 seconds and a 40 foot range. A longer spray gives you more chances, and a longer range gives you more distance. Choose the can whose label figures match your comfort."
  },
  {
    "q": "Is the GRIZ GUARD worth it over the SABRE Trail Boss?",
    "a": "The GRIZ GUARD lists a 40 foot range and a high-volume fog, while the SABRE Trail Boss lists 35 feet and a 5 second deployment. Both use a 2 percent formula. The GRIZ GUARD costs noticeably more. Choose by range and budget."
  },
  {
    "q": "Where should I carry bear spray?",
    "a": "Carry it on your belt or chest strap in a holster, not in a pack. The SABRE Frontiersman includes a quick-draw belt holster, and the Mace Single includes a hook-and-loop holster. Practice drawing it with the safety wedge. A can you cannot reach is no help."
  },
  {
    "q": "How do I use the safety wedge?",
    "a": "On the Mace cans you pull off the orange safety wedge and press down on the actuator. The SABRE Frontiersman has a glow-in-the-dark wedge that helps you find it in low light. Practice with the wedge before a trip, without spraying. Read the label for the exact steps."
  },
  {
    "q": "How long does bear spray last?",
    "a": "Every can has an expiration date, and it should be replaced after that date. The Mace 2-Pack gives you a spare to rotate. Check the date on arrival and replace the can once it expires."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Firewood Rack",
    "href": "/campsite-gear/best-firewood-rack"
  },
  {
    "title": "Best Firewood Carrier",
    "href": "/campsite-gear/best-firewood-carrier"
  },
  {
    "title": "Best Multitool for Camping",
    "href": "/campsite-gear/best-multitool-for-camping"
  },
  {
    "title": "Best Bear Canister",
    "href": "/campsite-gear/best-bear-canister"
  }
];
