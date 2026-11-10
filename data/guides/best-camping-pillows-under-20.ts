export const guideSlug = "best-camping-pillows-under-20";
export const guideTitle = "6 Best Camping Pillows Under 20 in 2026";
export const metaTitle = "Best Camping Pillows Under 20 in 2026";
export const metaDescription = "Best camping pillows under $20: inflatable and shredded-foam camp pillows compared on packed size, thickness, cover and washability, from $9 to $20.";
export const mainKeyword = "best camping pillows under 20";
export const introParagraphs = [
  "Twenty dollars covers a good camping pillow, and the choice comes down to air or foam. An inflatable packs to pocket size and an adjustable loft, while a foam pillow feels like home and needs no blowing up.",
  "Six pillows clear the cap, from a $9 five-pack of basic inflatables to a $20 pillow with a washable cover. Moving toward the cap buys a thicker, better-shaped body and a removable cover, and the cheapest options save by using thin flocked PVC."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/sleep-tent-sleeping-bag.webp";
export const heroImageAlt = "Camper sitting inside a tent next to an unrolled sleeping bag";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-camping-pillows-under-20-1",
    "rank": 1,
    "badge": "Best Value Under $20",
    "name": "Gear Doctors 3.5oz Compact Ultralight Inflatable Camping Pillow",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4125Lv8vjXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0833T8KMZ?tag=rvgearlab-20",
    "description": "Gear Doctors makes this inflatable pillow weigh 3.5 oz and pack to 2.4 by 4.7 inches, about the size of a soda can. It inflates to 12 by 17 inches and 4.3 inches thick in about three breaths, and an anti-leak valve locks the air in overnight.\n\nIt is the thickest pillow of the six when inflated and the only one with a hexagon-pattern TPU shield fabric. The foam pillows feel more natural, while this one packs to a fraction of their size and adjusts to your loft.\n\nIt suits backpackers and side sleepers who want a thick, tiny pillow for under $15. It also works as lumbar support in a car seat.",
    "specs": [
      "3.5 oz, packs 2.4 x 4.7 inches",
      "Inflates to 12 x 17 x 4.3 inches",
      "Anti-leak valve, TPU fabric"
    ],
    "pros": [
      "Soda-can packed size",
      "Thick 4.3 inch loft for side sleepers",
      "About three breaths to fill",
      "Valve locks in air overnight"
    ],
    "cons": [
      "Inflatable shell can feel slick",
      "Needs a pillowcase for comfort"
    ],
    "bestFor": "Backpackers and side sleepers",
    "take": "A tiny, thick inflatable that gives real pillow height for a low price.",
    "catch": "Wrap it in a shirt or a case because the bare fabric feels slippery."
  },
  {
    "id": "best-camping-pillows-under-20-2",
    "rank": 2,
    "badge": "Best Compact Foam",
    "name": "1 MIDDLE ONE Travel Pillow for Sleeping Camping",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51YIkqa30eL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DZHLNM69?tag=rvgearlab-20",
    "description": "This pillow holds shredded memory foam mixed with polyester fiber in a 15.5 by 12 inch body with a breathable microfiber cover. It includes a travel bag and the cover washes.\n\nIt costs about $3 more than the Gear Doctors, and feels like a bed pillow instead of a tube of air. The fill can be pressed flat or fluffed up, which helps stomach and back sleepers who dislike a tall pillow.\n\nIt suits car campers and travelers who want a familiar foam feel in a small pillow. It also fits a flight bag.",
    "specs": [
      "15.5 x 12 inch shredded foam",
      "Breathable microfiber cover",
      "Travel bag included"
    ],
    "pros": [
      "Feels like a real pillow",
      "Fill can be pressed flatter",
      "No inflating or leaks",
      "Washable cover"
    ],
    "cons": [
      "Bulkier than an inflatable",
      "Takes time to loft after packing"
    ],
    "bestFor": "Foam feel without a big pillow",
    "take": "A small shredded-foam pillow that behaves like a real one.",
    "catch": "Fluff the fill each morning so it keeps its shape."
  },
  {
    "id": "best-camping-pillows-under-20-3",
    "rank": 3,
    "badge": "Best Medium-Firm Pillow",
    "name": "PEUJEW Small Shredded Memory Foam Pillow",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ruAKpHpBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRDW513B?tag=rvgearlab-20",
    "description": "PEUJEW fills a 12 by 16 inch pillow with shredded memory foam for a medium-firm feel. The microfiber cover comes off for washing, and the foam compresses for packing.\n\nIt costs a dollar less than the 1 MIDDLE ONE and gives a slightly larger footprint at 16 inches long. The Hikenture below it adds an inflatable core instead of foam.\n\nIt suits campers who want a firmer pillow with support under the neck. Push foam to the ends to adjust the loft.",
    "specs": [
      "12 x 16 inch shredded foam",
      "Medium-firm feel",
      "Removable microfiber cover"
    ],
    "pros": [
      "Medium-firm neck support",
      "Foam compresses for packing",
      "Cover is machine washable",
      "Loft is easy to shape"
    ],
    "cons": [
      "Shredded foam can clump over time",
      "Larger packed size than an inflatable"
    ],
    "bestFor": "Neck support in a tent",
    "take": "A firm, supportive foam pillow at a low price.",
    "catch": "Reshape the foam before bed to avoid clumps."
  },
  {
    "id": "best-camping-pillows-under-20-4",
    "rank": 4,
    "badge": "Best Washable Poly Pillow",
    "name": "TETON Sports Camp Pillow; Great for Travel",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31pePsp4-rL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00DDP38EO?tag=rvgearlab-20",
    "description": "The TETON camp pillow lofts on its own with no inflating and washes with its pillowcase. Each pillow matches the lining of one or more TETON sleeping bags and packs down tight.\n\nIt costs about the same as the Gear Doctors and gives the familiar feel of a soft polyester pillow rather than air or foam. It is the simplest option to look after, because the case and pillow wash together.\n\nIt suits families and car campers who want a plain, soft pillow that does not need a pump or a puff. The matching color is a bonus for TETON sleeping bag owners.",
    "specs": [
      "Self-lofting soft pillow",
      "Washable pillow and case",
      "Packs down tight"
    ],
    "pros": [
      "Lofts on its own",
      "Washes with its pillowcase",
      "Soft fill feels like home",
      "Packs small for its type"
    ],
    "cons": [
      "Less support than foam",
      "Bulkier than an inflatable"
    ],
    "bestFor": "Families and car camping",
    "take": "A simple, soft pillow that you wash like bedding.",
    "catch": "Expect a soft feel, so side sleepers may want an extra layer."
  },
  {
    "id": "best-camping-pillows-under-20-5",
    "rank": 5,
    "badge": "Best Multi-Pack",
    "name": "Maitys 5 Pcs Inflatable Camping Pillow",
    "price": "$9.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rNPSgbmkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BVZXLGV2?tag=rvgearlab-20",
    "description": "Maitys sells five inflatable pillows that each measure about 13.6 by 9.5 inches when inflated. The flocked fabric and PVC body hold air for a few days.\n\nIt costs about $9 for five, which is the lowest price here and the best choice if you need pillows for a group. The pillows are thinner and less durable than the Gear Doctors.\n\nIt suits scout groups, kids and family trips where the group needs several cheap pillows. It also suits spare pillows kept in the car.",
    "specs": [
      "Five pillows, 13.6 x 9.5 inches",
      "Flocked fabric and PVC",
      "Holds air for days"
    ],
    "pros": [
      "Five pillows for about $9",
      "Easy blow-up valve",
      "Flocked surface feels soft",
      "Good for groups"
    ],
    "cons": [
      "Thin and less durable than TPU",
      "Small size for adults"
    ],
    "bestFor": "Groups and kids",
    "take": "The cheapest way to equip a whole campsite with pillows.",
    "catch": "Do not expect one of these to last for years of use."
  },
  {
    "id": "best-camping-pillows-under-20-6",
    "rank": 6,
    "badge": "Best Removable Cover",
    "name": "Hikenture Camping Pillow with Removable Cover",
    "price": "$19.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410WML9OwGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0896WCB5D?tag=rvgearlab-20",
    "description": "The Hikenture is an ultralight inflatable pillow shaped to cradle the neck and lower back. It has a removable washable cover and an upgraded leak-resistant design.\n\nIt is the most expensive pillow here, about $5 above the Gear Doctors, and the cover is what the extra money buys. The Gear Doctors is thicker and lighter, while the Hikenture gives a soft touch you can wash.\n\nIt suits backpackers who like a shaped pillow with a soft removable cover. The cover also works to absorb sweat.",
    "specs": [
      "Ergonomic ultralight inflatable",
      "Removable washable cover",
      "Leak-resistant design"
    ],
    "pros": [
      "Ergonomic shape supports the neck",
      "Soft cover is machine washable",
      "Packs down small",
      "Leak-resistant build"
    ],
    "cons": [
      "Costs the most of the six",
      "Inflatable cushion is thin"
    ],
    "bestFor": "Backpackers who want a soft cover",
    "take": "A shaped inflatable with a washable cover.",
    "catch": "The cover is soft, but the pillow is thin, so side sleepers may want more loft."
  }
];

export const howWeEvaluated = [
  {
    "title": "Packed size",
    "description": "Packed dimensions were compared, from a soda-can inflatable to a foam pillow that fills a stuff sack."
  },
  {
    "title": "Loft and comfort",
    "description": "Inflated thickness and foam firmness were compared across sleeping positions."
  },
  {
    "title": "Cover and washing",
    "description": "Removable covers and washable bodies were compared on cleaning and sweat."
  },
  {
    "title": "Durability and price",
    "description": "Fabrics from flocked PVC to TPU were compared against prices from $9 to $20."
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
    "subheading": "By sleeping position",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Side sleeper",
          "Gear Doctors Ultralight",
          "4.3 inch thick inflatable loft."
        ],
        [
          "Back sleeper, wants foam",
          "PEUJEW Shredded Foam",
          "Medium-firm shredded foam."
        ],
        [
          "Stomach sleeper",
          "1 MIDDLE ONE Foam Pillow",
          "Fill can be pressed flat."
        ],
        [
          "Wants a washable soft pillow",
          "TETON Camp Pillow",
          "Washes with its pillowcase."
        ],
        [
          "Group of kids",
          "Maitys 5-Pack Inflatable",
          "Five pillows for about $9."
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
          "$0 to $20",
          "Maitys 5-Pack Inflatable or Gear Doctors Ultralight"
        ],
        [
          "$10 to $20",
          "TETON Camp Pillow or PEUJEW Shredded Foam"
        ],
        [
          "$10 to $20",
          "1 MIDDLE ONE Foam Pillow or Hikenture Inflatable"
        ]
      ]
    }
  },
  {
    "subheading": "Inflatable vs foam",
    "cards": [
      {
        "label": "Inflatable",
        "text": "An inflatable weighs 2 to 4 oz and packs to pocket size. The Gear Doctors Ultralight, Hikenture Inflatable and Maitys 5-Pack Inflatable are inflatable."
      },
      {
        "label": "Foam",
        "text": "A foam pillow feels like home and never leaks, and it takes more room. The 1 MIDDLE ONE Foam Pillow and PEUJEW Shredded Foam use shredded memory foam."
      }
    ],
    "note": "Most campers should buy the Gear Doctors Ultralight for a pack and the PEUJEW Shredded Foam for a car."
  },
  {
    "subheading": "By budget",
    "table": {
      "headers": [
        "Spend",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $10",
          "Maitys 5-Pack Inflatable"
        ],
        [
          "About $15",
          "Gear Doctors Ultralight"
        ],
        [
          "About $15 for a soft pillow",
          "TETON Camp Pillow"
        ],
        [
          "About $17",
          "PEUJEW Shredded Foam"
        ],
        [
          "About $18",
          "1 MIDDLE ONE Foam Pillow"
        ],
        [
          "Near $20",
          "Hikenture Inflatable"
        ]
      ]
    }
  },
  {
    "subheading": "For backpacking specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Look for a weight under 4 oz, a packed size smaller than a soda can and an anti-leak valve."
      },
      {
        "label": "In this comparison",
        "text": "The Gear Doctors Ultralight weighs 3.5 oz and packs to 2.4 by 4.7 inches, and the Hikenture Inflatable adds a washable cover."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if you want a washable cover on an inflatable, which is what the Hikenture Inflatable provides. The PEUJEW Shredded Foam and 1 MIDDLE ONE Foam Pillow are the step up for foam comfort."
      },
      {
        "label": "Save if",
        "text": "Save if you camp only occasionally, because the Maitys 5-Pack Inflatable costs about $9 for five pillows and the Gear Doctors Ultralight covers a backpacking trip for about $15."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Inflatable vs foam",
    "explanation": "An inflatable packs to pocket size and lets you set the firmness with each breath, but it can feel slick and cold. A shredded foam pillow feels like a bed pillow and needs no blowing up, but it takes more space. Choose by how much room you have, since backpackers prefer air and car campers prefer foam."
  },
  {
    "criterion": "Loft and your sleep position",
    "explanation": "Side sleepers need 4 inches or more of loft to keep the neck level, while back sleepers do well with 3 inches and stomach sleepers with 2 inches or less. An inflatable adjusts, and shredded foam can be pressed flat or piled up. Look for the thickness in the product details and match it to your position."
  },
  {
    "criterion": "Cover and cleaning",
    "explanation": "A removable cover keeps sweat and dirt off the pillow and goes in the washing machine. Bare inflatable fabric can feel slick, so a shirt or a pillowcase helps. Look for words such as removable or machine washable, since cleaning a sealed pillow is awkward."
  },
  {
    "criterion": "Valve and leak resistance",
    "explanation": "Inflatables fail at the valve and the seams, and a leaking pillow wakes you at 2 a.m. Look for an anti-leak valve and a TPU coating, which are more durable than thin flocked PVC. Test the pillow by inflating it at home and leaving it overnight."
  },
  {
    "criterion": "Packed size and weight",
    "explanation": "Inflatable pillows weigh 2 to 4 oz and pack to the size of a soda can, while foam pillows weigh 6 to 10 oz and fill a small stuff sack. The difference matters in a pack but not in a car. Check the packed dimensions and weight in the product details."
  }
];

export const faq = [
  {
    "q": "Is an inflatable camping pillow comfortable?",
    "a": "Yes, if you pick one with enough loft. The Gear Doctors Ultralight inflates to 4.3 inches thick, which suits side sleepers. Add a shirt over it, since bare plastic can feel slick, and inflate it only until your neck sits level."
  },
  {
    "q": "Can I wash a camping pillow?",
    "a": "Most can. The TETON Camp Pillow washes with its pillowcase, the PEUJEW Shredded Foam has a removable microfiber cover and the Hikenture Inflatable has a washable cover. Air dry any foam pillow completely before packing it."
  },
  {
    "q": "How do I stop an inflatable pillow from leaking?",
    "a": "Check the valve and seams after inflating, and avoid overinflating. The Gear Doctors Ultralight has an anti-leak valve and a TPU fabric, which resist leaks better than flocked PVC. If it deflates overnight, dab the surface with soapy water to find the leak."
  },
  {
    "q": "Is shredded foam better than a solid foam pillow?",
    "a": "Shredded foam lets you move fill around to change the loft, and it compresses for packing. A solid foam pillow holds its shape better but packs bigger. The 1 MIDDLE ONE Foam Pillow and PEUJEW Shredded Foam use shredded fill."
  },
  {
    "q": "How many camping pillows do I need for a group?",
    "a": "Plan one per person plus a spare. The Maitys 5-Pack Inflatable gives five for about $9, which suits a scout troop or a family trip. For personal use, one good pillow such as the Gear Doctors Ultralight lasts longer."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Sleeping Bags",
    "href": "/sleep-gear/best-backpacking-sleeping-bags"
  },
  {
    "title": "Best Camping Sleeping Bags",
    "href": "/sleep-gear/best-camping-sleeping-bags"
  },
  {
    "title": "Best Backpacking Pillows For Side Sleepers",
    "href": "/sleep-gear/best-backpacking-pillows-for-side-sleepers"
  },
  {
    "title": "Best Backpacking Pillow For Stomach Sleepers",
    "href": "/sleep-gear/best-backpacking-pillow-for-stomach-sleepers"
  }
];
