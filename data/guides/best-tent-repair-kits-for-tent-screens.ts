export const guideSlug = "best-tent-repair-kits-for-tent-screens";
export const guideTitle = "3 Best Tent Repair Kits For Tent Screens in 2026";
export const metaTitle = "Best Tent Repair Kits For Tent Screens in 2026";
export const metaDescription = "Best tent screen repair patches compared: three peel-and-stick mesh kits for no-see-um netting, screen doors and screen-house panels.";
export const mainKeyword = "best tent repair kits for tent screens";
export const introParagraphs = [
  "Tent screen is fine mesh, so the repair has to be mesh too, and the patch must not block air or let insects through. A nylon fabric tape would plug the hole but would also close off the vent.",
  "Three mesh patch kits qualify: two 20-piece round sets and one small four-patch pack. They differ in count, diameter and whether the listing names no-see-um mesh."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/home-golden-hour-campsite.webp";
export const heroImageAlt = "Dome tent and hammock at a forest campsite at golden hour";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  take?: string; catch?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-tent-repair-kits-for-tent-screens-1",
    "rank": 1,
    "badge": "Best Large Patch Set",
    "name": "20 Pieces Tape Repair Patches",
    "price": "$5.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Ci9awdSGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B128F6KM?tag=rvgearlab-20",
    "description": "The Grevosea set contains 20 round mesh patches, each about 4 inches (10 cm) across, with an adhesive back. The listing names door and window screens, patio door net, tent mesh, RV screens and camping tarps.\n\nAt 4 inches across, each patch covers more than the Tondiamo's 3.15 inch rounds, and the set costs less. It is described as waterproof and lightweight, with strong adhesion.\n\nIt suits a camper with a screen house or a family tent with big mesh panels. Twenty patches also cover home screens.",
    "specs": [
      "20 pieces, 4 inch rounds",
      "Self-adhesive mesh patches",
      "Door, window, tent screens"
    ],
    "pros": [
      "Larger 4 inch patches cover bigger holes",
      "Twenty patches in the pack",
      "Lower price than the Tondiamo",
      "No tools needed"
    ],
    "cons": [
      "Mesh fineness is not stated",
      "Large round patches can show on small screens"
    ],
    "bestFor": "Screen houses and family tents",
    "take": "A big bag of large patches at a good price.",
    "catch": "The listing does not say the mesh blocks no-see-ums, so check before fine-mesh use."
  },
  {
    "id": "best-tent-repair-kits-for-tent-screens-2",
    "rank": 2,
    "badge": "Best Air-Flow Patches",
    "name": "Tent Repair Patches",
    "price": "$8.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51A+6UoxaML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09P55YZNG?tag=rvgearlab-20",
    "description": "The Tondiamo kit includes 20 round mesh patches, each about 8 cm (3.15 inches) across. The listing says the patches keep good air permeability so airflow is not blocked.\n\nThey are smaller than the Grevosea rounds and cost more per pack. The listing calls them simple enough for amateurs and says they work on tents, screen tents and RV awnings.\n\nIt suits a camper who wants smaller patches for pinholes. Airflow stays open at the patch.",
    "specs": [
      "20 pieces, 3.15 inch rounds",
      "Black mesh with adhesive",
      "Air permeable, no sewing"
    ],
    "pros": [
      "Small 3.15 inch patches suit pinholes",
      "Twenty in a pack",
      "Airflow stays open through the patch",
      "Works on tents and RV awnings"
    ],
    "cons": [
      "Priciest in this list",
      "Smaller patches cover less area"
    ],
    "bestFor": "Pinholes and small tears",
    "take": "Small mesh rounds for small holes.",
    "catch": "A large screen tear needs several overlapping patches."
  },
  {
    "id": "best-tent-repair-kits-for-tent-screens-3",
    "rank": 3,
    "badge": "Best Fine No-See-Um Mesh",
    "name": "Coghlan's Mesh Repair Patches",
    "price": "$4.47",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41akSES+wcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BPJ86NHT?tag=rvgearlab-20",
    "description": "The Coghlan's pack holds four self-adhesive fine-net patches for mosquito netting, bug screens and camping gear. The listing says the fine mesh keeps out even no-see-ums.\n\nIt is the cheapest pack here and the only one that names no-see-um protection. Each patch can be used whole for a large hole or cut in half for a small one.\n\nIt suits a camper who wants a small pack for a gear bag. Coghlan's is a familiar camp brand.",
    "specs": [
      "4 patches, fine net",
      "Blocks no-see-ums, listing says",
      "Cut to size, peel and stick"
    ],
    "pros": [
      "Fine net keeps no-see-ums out",
      "Cut a patch in half for small holes",
      "Cheapest pack in this list",
      "Light and easy to pack"
    ],
    "cons": [
      "Only four patches in the pack",
      "Patch size is not listed"
    ],
    "bestFor": "Mosquito nets and bug screens",
    "take": "The one to pack when no-see-ums are the concern.",
    "catch": "Four patches go quickly on a worn screen."
  }
];

export const howWeEvaluated = [
  {
    "title": "Mesh type",
    "description": "We checked listings for fine-net or no-see-um claims."
  },
  {
    "title": "Patch size",
    "description": "Diameters were compared against typical tears."
  },
  {
    "title": "Pack count",
    "description": "Counts of 4 and 20 were compared."
  },
  {
    "title": "Airflow",
    "description": "Claims about airflow through the patch were noted."
  },
  {
    "title": "Price",
    "description": "Cost per pack was compared."
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
    "subheading": "By Hole Size",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Pinholes and small tears",
          "Tondiamo 20-Piece Mesh Patches",
          "3.15 inch rounds keep airflow."
        ],
        [
          "Medium rips in screen panels",
          "Grevosea 20-Piece Mesh Patches",
          "4 inch rounds cover more."
        ],
        [
          "No-see-um country",
          "Coghlan's 4-Piece Mesh Patches",
          "Fine net named for no-see-ums."
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
          "$0 to $10",
          "Coghlan's 4-Piece Mesh Patches"
        ],
        [
          "$0 to $10",
          "Grevosea 20-Piece Mesh Patches"
        ],
        [
          "$0 to $10",
          "Tondiamo 20-Piece Mesh Patches"
        ]
      ]
    }
  },
  {
    "subheading": "Many Small Patches vs a Few Fine Ones",
    "cards": [
      {
        "label": "Many",
        "text": "Grevosea 20-Piece Mesh Patches and Tondiamo 20-Piece Mesh Patches give twenty patches each, so they last through many repairs."
      },
      {
        "label": "Few",
        "text": "Coghlan's 4-Piece Mesh Patches gives just four patches, with a fine net named for no-see-ums."
      }
    ],
    "note": "Most campers should pack Coghlan's 4-Piece Mesh Patches for the trip kit and Grevosea 20-Piece Mesh Patches for home."
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
          "Lowest price",
          "Coghlan's 4-Piece Mesh Patches"
        ],
        [
          "Best price per patch",
          "Grevosea 20-Piece Mesh Patches"
        ],
        [
          "Airflow-focused",
          "Tondiamo 20-Piece Mesh Patches"
        ]
      ]
    }
  },
  {
    "subheading": "For Screen Houses Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Large patches that overlap a hole with ease and a mesh that blocks insects."
      },
      {
        "label": "In this comparison",
        "text": "Grevosea 20-Piece Mesh Patches gives 4 inch rounds for screen panels, and Coghlan's 4-Piece Mesh Patches covers fine mesh."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more if no-see-ums are the issue, since Coghlan's 4-Piece Mesh Patches names fine net and Tondiamo 20-Piece Mesh Patches adds airflow claims."
      },
      {
        "label": "Save if",
        "text": "Save if you have a big screen house, because Grevosea 20-Piece Mesh Patches gives twenty large patches for a low price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match the mesh",
    "explanation": "Tent screen can be coarse or fine, and no-see-um mesh is very fine. A patch with a coarser weave leaves a gap that tiny insects pass. Look for a fine-net or no-see-um claim on the listing."
  },
  {
    "criterion": "Patch size and overlap",
    "explanation": "A patch should overlap the hole by at least half an inch on every side. A 3.15 inch round covers a hole of about two inches, and a 4 inch round covers a bit more. Check the diameter."
  },
  {
    "criterion": "Adhesive on mesh",
    "explanation": "Adhesive that sticks to mesh must not clog it. Press firmly and let it set. Look for a peel-and-stick design on the listing."
  },
  {
    "criterion": "Pack count",
    "explanation": "Twenty patches cover many repairs, while four patches cover only a few. Think about how many screens you have. Look at the count."
  },
  {
    "criterion": "Color of mesh",
    "explanation": "Black is the usual color for screens. A white patch shows on a black screen. Check the listed color."
  },
  {
    "criterion": "Airflow and view",
    "explanation": "A fine mesh patch keeps airflow, while a solid patch does not. Look for air permeability in the listing. A tent that cannot breathe also gets stuffy."
  }
];

export const faq = [
  {
    "q": "Can I patch a no-see-um screen with a regular patch?",
    "a": "A coarser mesh leaves gaps that tiny insects pass through. Use a fine-net patch such as the Coghlan's, which names no-see-um protection. Test the repair at dusk."
  },
  {
    "q": "How do I apply a mesh patch?",
    "a": "Clean the area, trim loose threads, peel the backing and press the patch over the hole so it overlaps. Press from the center out. Let it set before use."
  },
  {
    "q": "Are 20-piece sets worth it over a 4-piece pack?",
    "a": "Twenty patches suit many screens or a family of tents. A small pack suits a gear bag. Think about how many repairs you expect."
  },
  {
    "q": "Will a patch block airflow?",
    "a": "Mesh patches are meant to keep air moving, and the Tondiamo listing says so. A solid fabric tape would block airflow. Use mesh for screens."
  },
  {
    "q": "How do I fix a big tear in a screen?",
    "a": "Overlap several patches, or replace the screen panel if the tear is longer than a patch. Round the corners on large patches. Stitch loose edges first if you can."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camping Tents",
    "href": "/tents-shelter/best-camping-tents"
  },
  {
    "title": "Best Tent Stakes",
    "href": "/tents-shelter/best-tent-stakes"
  },
  {
    "title": "Best 4 Season Tent Under 200",
    "href": "/tents-shelter/best-4-season-tent-under-200"
  },
  {
    "title": "Best 4 Season Tent Under 300",
    "href": "/tents-shelter/best-4-season-tent-under-300"
  }
];
