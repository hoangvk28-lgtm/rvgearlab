export const guideSlug = "best-double-synthetic-sleeping-bags";
export const guideTitle = "5 Best Double Synthetic Sleeping Bags in 2026";
export const metaTitle = "Best Double Synthetic Sleeping Bags in 2026";
export const metaDescription = "Five two-person bags for couples who want synthetic insulation, from NEMO's recycled-fill Jazz to budget flannel and queen-size doubles.";
export const mainKeyword = "best double synthetic sleeping bags";
export const introParagraphs = [
  "Synthetic fill keeps working when it gets damp and washes without fuss, which makes it the sensible default for a shared bag. Only three of the listings here name their insulation outright, and this guide says which ones, so you know what you are buying.",
  "NEMO Jazz, Kelty Doublewide and the MHTD canvas bag name synthetic fill. AGEMORE and BORULL sit closer to the nearest-fit end, since their listings stress polyester shells and comfort ranges without naming the fill, so read their entries with that in mind."
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
    "id": "best-double-synthetic-sleeping-bags-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "NEMO Equipment Jazz Synthetic Sleeping Bag",
    "price": "$379.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fKxchcDGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DK7PWPFQ?tag=rvgearlab-amz-20",
    "description": "NEMO's Jazz uses 100% recycled Stratofiber synthetic insulation in an overfilled quilt with a featherbed-style bottom. The 50D DWR-treated shell and taffeta liner are recycled polyester, and a removable machine-washable sheet comes with it.\n\nA blanket-fold draft collar and double zipper pulls on both sides let each sleeper vent their own feet and upper body. That individual control is more refined than anything on the Kelty Doublewide 20F or the MHTD Canvas Double.\n\nA great fit for couples who want a home-bed feel at the campsite and will pay for it. The zippers on both sides also let two bags join together.",
    "specs": [
      "Recycled Stratofiber synthetic fill",
      "50D DWR-treated shell",
      "Removable washable sheet"
    ],
    "pros": [
      "Named synthetic insulation, fully recycled",
      "Blanket fold collar blocks drafts",
      "Individual venting for each sleeper",
      "Removable sheet for easy washing"
    ],
    "cons": [
      "Priciest bag in this list",
      "No weight or rating printed in the listing"
    ],
    "bestFor": "Couples wanting a home-bed feel",
    "take": "A premium synthetic double with a washable sheet and individual venting for each sleeper.",
    "catch": "The listing prints no temperature rating or weight, so check the product page before you rely on it."
  },
  {
    "id": "best-double-synthetic-sleeping-bags-2",
    "rank": 2,
    "badge": "Best Cold Rating",
    "name": "Kelty Tru.Comfort Doublewide 2 Person Double Sleeping Bag 20F",
    "price": "$219.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41FWd4s1M3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BRQQPTNS?tag=rvgearlab-amz-20",
    "description": "Kelty's Tru.Comfort Doublewide is a 20F double built with Cloud Loft synthetic insulation, 64 inches of shoulder room and an 84 inch length. The listing adds a detachable top layer, a pair of blankets sewn in, foot vents and a big hood.\n\nIt prints the lowest temperature rating among the named-synthetic bags, ahead of the MHTD Canvas Double's 14 to 46F SGS range in daily warmth terms and well below the AGEMORE Flannel Double. Each sleeper manages their own airflow.\n\nBest for couples who camp into colder fall nights and want separate controls. The zip-off top layer converts it into a lighter bag for warm weather.",
    "specs": [
      "20F synthetic double",
      "64 in shoulders, 84 in long",
      "Independent vents, two blankets"
    ],
    "pros": [
      "Each sleeper controls ventilation",
      "Zip-off top layer for warm nights",
      "Two built-in blankets",
      "Quick-drying synthetic fill"
    ],
    "cons": [
      "No packed weight printed",
      "Only 84 inches long"
    ],
    "bestFor": "Cold-night couples",
    "take": "A 20F synthetic double where each sleeper sets their own airflow.",
    "catch": "No weight is printed, and 84 inches is short for tall sleepers."
  },
  {
    "id": "best-double-synthetic-sleeping-bags-3",
    "rank": 3,
    "badge": "Best Printed Specs",
    "name": "Cotton Canvas Double Sleeping Bag for Adults 0 Degrees Cold Weather Camping",
    "price": "$95.05",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31EC5rl163L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FKGN26XK?tag=rvgearlab-amz-20",
    "description": "MHTD wraps hollow synthetic insulation in a water-resistant cotton canvas shell with a graphene polyester pongee interior. The listing prints 8.8 lb, a compressed size of 17.3 x 14.4 x 7.5 inches, and an SGS-certified range of 14 to 46F.\n\nThat is a rare amount of printed detail, since the Kelty Doublewide 20F and NEMO Jazz Double leave out weight. It opens to 90.6 x 57 inches with double-headed YKK zippers for two-way ventilation.\n\nA smart choice for couples who care about a certified range and a known weight. The canvas shell holds up to rough ground.",
    "specs": [
      "8.8 lb, compresses to 17 inches",
      "SGS range 14 to 46F",
      "Canvas shell, synthetic fill"
    ],
    "pros": [
      "SGS-certified 14 to 46F range",
      "Weight and packed size printed",
      "Double-headed YKK zippers",
      "Water-resistant canvas shell"
    ],
    "cons": [
      "8.8 lb is a heavy carry",
      "Canvas is stiffer than nylon"
    ],
    "bestFor": "Spec-minded couples",
    "take": "A named synthetic fill with printed weight, packed size and SGS range.",
    "catch": "At 8.8 lb it is still a heavy carry, and canvas is stiffer than nylon."
  },
  {
    "id": "best-double-synthetic-sleeping-bags-4",
    "rank": 4,
    "badge": "Best Soft Budget",
    "name": "AGEMORE Cotton Flannel Double Sleeping Bag",
    "price": "$66.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51jFot28IYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F43QK29X?tag=rvgearlab-amz-20",
    "description": "AGEMORE puts brushed flannel cotton inside a 210T water-resistant polyester shell and states a 41 to 59F design range. Zippers on both sides let it act as one extra-large bag or two singles, and it compresses into a carry bag.\n\nIt costs well under the Kelty Doublewide 20F and NEMO Jazz Double, and it adds a softer feel than the MHTD Canvas Double. The listing describes it as lightweight and compact, aimed at backpacking, camping and biking.\n\nA good fit for couples on mild three-season nights. The soft lining and low price suit casual weekends.",
    "specs": [
      "41 to 59F design range",
      "210T shell, flannel lining",
      "Splits into two singles"
    ],
    "pros": [
      "Soft flannel lining",
      "Water-resistant polyester shell",
      "Splits into two single bags",
      "Compresses into a carry bag"
    ],
    "cons": [
      "Fill type not named in listing",
      "Range starts at 41F"
    ],
    "bestFor": "Mild-night couples on a budget",
    "take": "A soft flannel-lined double that splits into two singles at a modest price.",
    "catch": "The listing does not name the fill type, and the 41F low end limits it to mild weather."
  },
  {
    "id": "best-double-synthetic-sleeping-bags-5",
    "rank": 5,
    "badge": "Best Extra-Large",
    "name": "BORULL Double Sleeping Bags Queen Size for Adults Camping with 2 Pillows",
    "price": "$44.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31AO2TXCLuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GRVBW3KH?tag=rvgearlab-amz-20",
    "description": "BORULL sizes this double at 92 x 63 inches, fits sleepers up to 7 feet, and lists a 40 to 65F comfort range with a 30F limit. Two pillows, a hood with an adjustment, snag-resistant zippers and a compression sack are in the box.\n\nIt is the biggest bag here and the lowest-priced, beating the AGEMORE Flannel Double on room and the Kelty Doublewide 20F on cost. It unzips flat into a queen-size blanket or splits into two singles and is machine washable.\n\nFits tall couples and plus-size sleepers who want space. A couple of extras make it easy for casual car camping.",
    "specs": [
      "92 x 63 inch queen",
      "40 to 65F comfort range",
      "Two pillows included"
    ],
    "pros": [
      "Fits sleepers up to 7 feet",
      "30F limit is the lowest stated",
      "Two pillows come with it",
      "Splits into two single bags"
    ],
    "cons": [
      "Fill type not named in listing",
      "No weight printed"
    ],
    "bestFor": "Tall or plus-size couples",
    "take": "The largest bag here at 92 x 63 inches, with two pillows included.",
    "catch": "The listing does not name the fill type, and it prints no weight."
  }
];

export const howWeEvaluated = [
  {
    "title": "Named insulation",
    "description": "Each listing was read for the fill it names, since synthetic fill is the point of this guide and not every listing says it."
  },
  {
    "title": "Printed ratings",
    "description": "Comfort ranges, limits and certified temperatures were compared, along with whether the listing shows them at all."
  },
  {
    "title": "Two-sleeper controls",
    "description": "Ventilation, zipper layouts and the option to split into singles were compared."
  },
  {
    "title": "Size and weight",
    "description": "Printed dimensions, height limits and weights were compared where the listing gives them."
  },
  {
    "title": "Price tier",
    "description": "Prices were grouped from budget flannel to premium recycled fill so the trade-offs are clear."
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
    "subheading": "By Camping Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Premium couples bed at the campsite",
          "NEMO Jazz Double",
          "Washable sheet and individual venting"
        ],
        [
          "Cold fall and early winter nights",
          "Kelty Doublewide 20F",
          "20F synthetic rating"
        ],
        [
          "Rough ground and certified range",
          "MHTD Canvas Double",
          "Canvas shell, 14 to 46F SGS range"
        ],
        [
          "Mild nights on a tight budget",
          "AGEMORE Flannel Double",
          "Flannel lining, splits in two"
        ],
        [
          "Tall couples and extras",
          "BORULL Queen 92x63",
          "92 x 63 inches with two pillows"
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
          "$40 to $70",
          "BORULL Queen 92x63 or AGEMORE Flannel Double"
        ],
        [
          "$90 to $220",
          "MHTD Canvas Double or Kelty Doublewide 20F"
        ],
        [
          "$370 to $380",
          "NEMO Jazz Double"
        ]
      ]
    }
  },
  {
    "subheading": "Named Synthetic vs Nearest Fit",
    "cards": [
      {
        "label": "Named synthetic fill",
        "text": "The NEMO Jazz Double, Kelty Doublewide 20F and MHTD Canvas Double all say synthetic insulation in the listing, so the fill claim is clear."
      },
      {
        "label": "Polyester shell, fill unstated",
        "text": "The AGEMORE Flannel Double and BORULL Queen 92x63 describe polyester shells and comfort ranges without naming the fill, so they are nearer fits."
      }
    ],
    "note": "Choose the Kelty Doublewide 20F for cold nights, and treat the other two as mild-weather options."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest cost",
          "BORULL Queen 92x63"
        ],
        [
          "Low cost with flannel",
          "AGEMORE Flannel Double"
        ],
        [
          "Mid-priced with printed specs",
          "MHTD Canvas Double"
        ],
        [
          "Higher cost, 20F rating",
          "Kelty Doublewide 20F"
        ],
        [
          "Premium comfort",
          "NEMO Jazz Double"
        ]
      ]
    }
  },
  {
    "subheading": "Couples Who Want Synthetic Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A listing that names the insulation as synthetic, a stated temperature figure, and a layout both sleepers can control."
      },
      {
        "label": "In this comparison",
        "text": "The Kelty Doublewide 20F names Cloud Loft synthetic, prints 20F and gives independent vents, while the MHTD Canvas Double names hollow synthetic with a certified range."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the NEMO Jazz Double or Kelty Doublewide 20F if you want named fill, individual venting and a refined design."
      },
      {
        "label": "Save if",
        "text": "Save with the AGEMORE Flannel Double or BORULL Queen 92x63 when nights stay mild and fill type matters less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Synthetic fill and moisture",
    "explanation": "Synthetic insulation is made from polyester fibers that trap air and keep much of that loft when damp. That matters at a humid campsite or after condensation builds inside a tent. Check that the listing names the fill, since a polyester shell alone does not mean synthetic insulation."
  },
  {
    "criterion": "Rated versus comfortable",
    "explanation": "A temperature number can describe a comfort level, a limit or a lab range, and these are different nights. A certified range such as 14 to 46F spans survival to comfort, not a cozy night at 14F. Look for the words comfort and limit, and choose a bag whose comfort figure covers your lows."
  },
  {
    "criterion": "Independent venting",
    "explanation": "Two sleepers run at different temperatures, and one zipper pull cannot serve both. Double pulls on both sides let each person open their own foot or shoulder zone. Check the zipper description for two-way or double-sided zippers."
  },
  {
    "criterion": "Length for the taller sleeper",
    "explanation": "An 84 inch bag fits a person up to about six feet before their feet press the end. A 92 inch bag gives room for people near seven feet. Compare the taller sleeper's height with the printed length and any stated height limit."
  },
  {
    "criterion": "Washability and care",
    "explanation": "Shared bags pick up dirt quickly, and flannel or removable sheets make cleaning easier. Machine-washable fabrics save money over dry cleaning. Look for a care line or a removable liner on the listing."
  }
];

export const faq = [
  {
    "q": "Is synthetic better than down for a double?",
    "a": "For shared bags, often yes. Synthetic fill keeps warmth when damp, washes easily and costs less at double sizes. The trade-off is weight and bulk, which matters little for car camping."
  },
  {
    "q": "What do buyers miss on synthetic doubles?",
    "a": "They assume every polyester shell means synthetic fill. Only the NEMO Jazz Double, Kelty Doublewide 20F and MHTD Canvas Double name it. Read the insulation line before buying."
  },
  {
    "q": "Is the NEMO Jazz worth the price over the Kelty?",
    "a": "If you value a washable sheet, a draft collar and venting for each sleeper, yes. If you want a printed 20F figure, the Kelty Doublewide 20F gives one and the NEMO listing does not."
  },
  {
    "q": "Can two bags zip together instead?",
    "a": "Yes, if the zippers match on the open side. The NEMO listing says zippers on both sides allow bags to be joined together. A true double avoids the cold seam in the middle."
  },
  {
    "q": "How do I store a synthetic double?",
    "a": "Keep it loosely in a big bag or hung, not squashed in the compression sack. Synthetic fill recovers well but loses loft if stored tight for months. Wash on gentle cycles as the care label allows."
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
