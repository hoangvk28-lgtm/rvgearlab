export const guideSlug = "best-hiking-hat";
export const guideTitle = "5 Best Hiking Hat in 2026";
export const metaTitle = "Best Hiking Hat in 2026";
export const metaDescription = "Five hiking hats compared by UPF rating, brim width, ventilation and neck coverage, from wide-brim sun hats to a neck-flap visor and a running cap.";
export const mainKeyword = "best hiking hat";
export const introParagraphs = [
  "A hat is the cheapest sun protection a hiker can buy, and it works from the top down: the scalp, ears, nose and neck take the most direct exposure on an open trail. A wide brim shades all of those at once, which is why it beats a baseball cap for long, exposed days. The right hat also does quiet comfort work, moving sweat away from the brow and letting heat escape through vents.",
  "Not every trail asks for the same hat. A desert hike calls for a wide brim with a neck cover, a forest walk can get away with a cap, and a hike through open meadow might want a detachable face flap. The five picks here span those jobs, so the right one for you depends on the sun you actually hike in.",
  "We compared UPF ratings, brim widths, vents, sweatbands and fit adjustments, and we kept the claims tied to what each listing says. Where a listing claims third-party testing or a specific UV percentage, we note it as the maker's figure."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41lSrvH7ysL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-hiking-hat-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Sun Hats for Men Breathable UPF 80+ Wide Brim Bucket Hat",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41lSrvH7ysL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJDHYM3J?tag=rvgearlab-amz-20",
    "description": "This wide-brim bucket hat carries a UPF 80+ rating and, according to the listing, blocks 99.9 percent of UVA and UVB rays using a high-density nylon fabric. Side airflow vents and a moisture-wicking inner sweatband move heat and sweat away from the head.\n\nA generous brim shades the face, ears and neck, which sets it apart from the FURTALK Wide Brim Hat that uses a narrower brim. An adjustable chin strap with a cord lock and a 360 degree inner band keep it secure in wind.\n\nIt suits hikers who want a full-coverage sun hat that stays on through gusts and sweaty climbs. A water-resistant, quick-dry finish handles passing showers and river crossings. It is a dependable all-day hat that rarely needs adjusting once the strap is set.",
    "specs": [
      "UPF 80+ wide-brim bucket",
      "Side vents, wicking sweatband",
      "Chin strap with cord lock"
    ],
    "pros": [
      "UPF 80+ rating for strong sun protection",
      "Side vents and wicking band keep you cool",
      "Chin strap with cord lock resists wind",
      "Water-resistant, quick-dry fabric"
    ],
    "cons": [
      "A wide brim can catch gusts",
      "Stiffer brim packs less flat"
    ],
    "bestFor": "Exposed, sunny trails"
  },
  {
    "id": "best-hiking-hat-2",
    "rank": 2,
    "badge": "Best Convertible Brim",
    "name": "FURTALK Sun Hats for Men Fishing Hat UPF Protection Wide Brim Bucket Hat",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Zl43qHOrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DSHMRHJV?tag=rvgearlab-amz-20",
    "description": "The FURTALK Sun Hat has a 9.5 cm brim that provides wide coverage, large ventilation holes for air circulation and a breathable, lightweight build. Side buttons let you fold the brim up for a different look and feel.\n\nCompared with the UPF 80 Bucket, it offers a smaller brim and a two-style design, with brim down for full shade and brim up for work or breeze. The light, durable material suits fishing, hiking and yard work alike.\n\nIt suits hikers and campers who want a hat that adapts between trail and campsite. A quick button change takes it from sun defense to a more open feel. The foldable brim is a handy trick when you want a clearer view while resting at a viewpoint.",
    "specs": [
      "9.5 cm wide brim",
      "Large ventilation holes",
      "Side buttons fold the brim up"
    ],
    "pros": [
      "Brim folds up with side buttons",
      "Large vents move air across the head",
      "Light, durable fabric for active use",
      "Works for hiking, fishing and yard work"
    ],
    "cons": [
      "Brim is narrower than the top pick",
      "Button snaps may loosen over time"
    ],
    "bestFor": "Switching between trail and camp"
  },
  {
    "id": "best-hiking-hat-3",
    "rank": 3,
    "badge": "Best Neck Protection",
    "name": "OLIKER Women Sun Hats UV Protection Wide Brim with Bucket Ponytail Hole",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41sJXF+RbyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7YYF7CH?tag=rvgearlab-amz-20",
    "description": "The OLIKER Women's Sun Hat uses 100 percent nylon with a UPF 50+ rating and comes with a neck cover for all-around protection. Breathable flat-top vents promote air circulation, and a ponytail hole suits longer hair.\n\nUnlike a regular bucket hat, the attached neck cover shades the back of the neck, a spot the FURTALK Wide Brim Hat leaves open. It folds into a compact size for a backpack or beach bag and holds its shape afterward.\n\nIt suits women hikers who burn easily on the neck or ears and want a packable hat for a long day. The vents keep heat from building under the crown. It is a good fit for hikers who want some insurance against a sunburned neck on exposed switchbacks.",
    "specs": [
      "UPF 50+, 100% nylon",
      "Attached neck cover",
      "Ponytail hole, flat-top vents"
    ],
    "pros": [
      "Neck cover shades the back of the neck",
      "Flat-top vents promote air circulation",
      "Ponytail hole fits longer hair",
      "Packs small and keeps its shape"
    ],
    "cons": [
      "Neck cover can feel warm in humid air",
      "Women's fit only"
    ],
    "bestFor": "Sun-sensitive necks and ears"
  },
  {
    "id": "best-hiking-hat-4",
    "rank": 4,
    "badge": "Best Budget Coverage",
    "name": "Outdoor Sun Hat Detachable Neck Face Flap UPF 50+UV Protection Visor Fishing Hats with Neck Flap for Men & Wom",
    "price": "$6.29",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/414OEj+SpuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C27F3Y2K?tag=rvgearlab-amz-20",
    "description": "This outdoor sun hat has a detachable neck and face flap, a UPF 50+ rating and breathable mesh that the listing says keeps the head cool and sweat free. It is designed for fishing, hiking and safari-style use.\n\nIt is the lowest priced pick here, and the detachable flap lets you add face protection when the sun is harsh or remove it for a lighter feel. Compared with the OLIKER Neck Cover Sun Hat, it adds a face flap for even more coverage.\n\nIt suits hikers who want maximum coverage at the lowest cost. The lightweight, foldable build makes it easy to stow. It is a practical, low-risk hat to keep in a car or pack for sun-heavy days.",
    "specs": [
      "UPF 50+, breathable mesh",
      "Detachable neck and face flap",
      "Lightweight, foldable"
    ],
    "pros": [
      "Detachable flap covers neck and face",
      "Breathable mesh keeps heat down",
      "Lightweight and foldable for packing",
      "Lowest price in this guide"
    ],
    "cons": [
      "Flap limits peripheral vision",
      "Visor style offers less shade than a full brim"
    ],
    "bestFor": "High-sun days on a budget"
  },
  {
    "id": "best-hiking-hat-5",
    "rank": 5,
    "badge": "Best Cap Style",
    "name": "UPF 50+ Running Hat for Women",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31TrJmeF5hL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GPW2JZR8?tag=rvgearlab-amz-20",
    "description": "This women's UPF 50+ cap is described as third-party tested and includes a UPF hangtag. Quick-dry, breathable fabric and a 3D rubber mountain print give it a clean outdoor look.\n\nAn adjustable baseball cap strap fits head sizes from 22 to 23.6 inches, and the cap works with the hair down, unlike the OLIKER Neck Cover Sun Hat that needs a different style. It offers a lighter, more casual option than any of the wide-brim picks.\n\nIt suits runners and hikers who prefer a cap on shorter trails and mixed outings. The clean look blends into everyday wear. It pairs well with a buff or neck gaiter when you want extra coverage.",
    "specs": [
      "UPF 50+ cap, hangtag included",
      "Quick-dry, breathable fabric",
      "Adjustable strap, 22 to 23.6 inches"
    ],
    "pros": [
      "UPF 50+ claim with a hangtag",
      "Quick-dry fabric handles sweat",
      "Adjustable strap fits 22 to 23.6 inch heads",
      "Light cap style for everyday trails"
    ],
    "cons": [
      "Does not shade ears or neck",
      "Women's fit only"
    ],
    "bestFor": "Short hikes and runs"
  }
];

export const howWeEvaluated = [
  {
    "title": "Sun protection claims",
    "description": "We compared UPF numbers and UV percentages each listing states. These are maker figures, and a UPF 50+ fabric still needs a brim wide enough to shade the face."
  },
  {
    "title": "Brim and coverage",
    "description": "We looked at brim width, neck covers and face flaps. Coverage matters more on bright trails, where exposed ears and neck burn first."
  },
  {
    "title": "Ventilation",
    "description": "We checked for vents, mesh and wicking bands. A hat that traps heat will end up in your pack no matter how well it protects."
  },
  {
    "title": "Fit and stay-put features",
    "description": "We compared chin straps, cord locks, adjustable bands and stretch fits. A hat that blows off in wind is no use."
  },
  {
    "title": "Packability",
    "description": "We considered which hats fold flat or stuff into a pocket, since a bulky hat is easy to leave at home."
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
    "subheading": "By sun exposure",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Open desert or alpine trails",
          "Sun Hats UPF 80 Bucket",
          "A UPF 80+ wide brim with a chin strap and vents gives full shade that stays on in wind"
        ],
        [
          "Extreme sun on neck and face",
          "Outdoor Sun Hat Face Flap",
          "A detachable neck and face flap with UPF 50+ mesh covers areas a plain brim misses"
        ],
        [
          "Women hikers with sun-sensitive necks",
          "OLIKER Neck Cover Sun Hat",
          "An attached neck cover, ponytail hole and flat-top vents add coverage and comfort"
        ],
        [
          "Camp and trail with a flexible hat",
          "FURTALK Wide Brim Hat",
          "A 9.5 cm brim that buttons up gives shade on the trail and an open view at camp"
        ],
        [
          "Short hikes and runs",
          "UPF 50 Running Cap",
          "A UPF 50+ cap with an adjustable strap fits 22 to 23.6 inch heads"
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
          "Outdoor Sun Hat Face Flap or UPF 50 Running Cap"
        ],
        [
          "Mid of this shortlist",
          "FURTALK Wide Brim Hat or OLIKER Neck Cover Sun Hat"
        ],
        [
          "Top of this shortlist",
          "Sun Hats UPF 80 Bucket"
        ]
      ]
    }
  },
  {
    "subheading": "Wide brim vs cap",
    "cards": [
      {
        "label": "Wide brim",
        "text": "A wide-brim hat like the Sun Hats UPF 80 Bucket or the FURTALK Wide Brim Hat shades the face, ears and neck, and suits long exposed days. It catches wind and packs bulkier."
      },
      {
        "label": "Cap or visor",
        "text": "The UPF 50 Running Cap and the Outdoor Sun Hat Face Flap are lighter and sit closer to the head. They suit short trips or hikers who want less bulk."
      }
    ],
    "note": "Choose the Sun Hats UPF 80 Bucket for exposed hikes and the UPF 50 Running Cap for quick outings."
  },
  {
    "subheading": "By climate",
    "table": {
      "headers": [
        "If you hike in",
        "Recommended pick"
      ],
      "rows": [
        [
          "Hot sun with little shade",
          "Sun Hats UPF 80 Bucket"
        ],
        [
          "Mixed conditions across a day",
          "FURTALK Wide Brim Hat"
        ],
        [
          "Humid heat with a neck burn risk",
          "OLIKER Neck Cover Sun Hat"
        ]
      ]
    }
  },
  {
    "subheading": "For Windy Ridgelines Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A chin strap with a cord lock, or a snug cap strap, and a brim that does not flare wide"
      },
      {
        "label": "In this comparison",
        "text": "The Sun Hats UPF 80 Bucket includes a chin strap with a cord lock and a 360 degree inner band, while the UPF 50 Running Cap uses an adjustable strap."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on the Sun Hats UPF 80 Bucket for the strongest sun protection and wind security, or on the OLIKER Neck Cover Sun Hat for an attached neck cover."
      },
      {
        "label": "Save if",
        "text": "Save with the Outdoor Sun Hat Face Flap, the lowest priced pick here, or the UPF 50 Running Cap when you only need a cap for short outings."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "UPF rating and fabric",
    "explanation": "UPF describes how much ultraviolet radiation passes through the fabric, with UPF 50 blocking about 98 percent of UV. Higher ratings such as UPF 80 add a little protection but can make a hat warmer and less breathable. The rating applies to the fabric only, not to the open areas such as vents. Check the UPF number on the exact hat, and note whether the listing says tested or just rated. A hangtag or a named test result is more reassuring than a bare claim of sun protection, and the UPF 50 Running Cap is one of the few picks here that mentions both."
  },
  {
    "criterion": "Brim width",
    "explanation": "Brim width decides how much of the face, ears and neck stays in shade. A brim of about 3 inches or more gives meaningful shade, while a baseball cap bill only shades the face. Wider brims catch wind and can obscure peripheral vision. Check the stated brim measurement on the listing and compare it with the shade you need. A brim that is stiff enough to hold its shape in a breeze shades better than a floppy one."
  },
  {
    "criterion": "Neck and face coverage",
    "explanation": "The back of the neck and the ears are the spots hikers most often burn, because most hats leave them bare. A neck cover or detachable flap closes that gap, though it traps some heat. Flaps also limit side vision on busy trails. Look for a neck cover or flap on the listing, and check whether it detaches."
  },
  {
    "criterion": "Ventilation and sweat control",
    "explanation": "Vents, mesh panels and wicking sweatbands move heat and moisture away from your head. Without them, a hat that blocks the sun can trap enough heat to make you wear it less. Mesh and side vents do the most work in hot weather. Check the listing for vents and a moisture-wicking band, and look at photos for the vent positions. Vents placed on the sides and crown work best, since they let rising heat escape without letting direct sun in."
  },
  {
    "criterion": "Fit and wind security",
    "explanation": "A chin strap with a cord lock, an adjustable inner band or a stretch fit keeps a hat on during gusts and scrambles. Head size ranges matter, and an adjustable cap strap spans a wide range while a fixed hat may not. A hat that sits loose will shift and fail to shade. Check the stated head circumference range on the listing and measure your head. Hikers with thick hair or who wear a bandana underneath should aim for the upper end of the range, because sizing is rarely forgiving at the extremes."
  },
  {
    "criterion": "Packability and durability",
    "explanation": "A packable hat folds or crushes into a pack and recovers its shape. Nylon and polyester hats usually handle this well, while stiff brims may crease. Quick-dry fabric lets a hat dry on your pack after a wet day. Check whether the listing says packable or foldable, and how it is meant to be stored."
  }
];

export const faq = [
  {
    "q": "What UPF rating do I need for a hiking hat?",
    "a": "UPF 50 or higher is the standard goal, since it blocks about 98 percent of UV. The Sun Hats UPF 80 Bucket goes higher, but the brim width and coverage matter as much as the number. Pair the hat with sunscreen on exposed skin."
  },
  {
    "q": "Is a cap enough, or do I need a wide brim?",
    "a": "A cap shades the face but leaves ears and neck exposed, which suits short, shady hikes. For long, sunny days, a wide brim like the FURTALK Wide Brim Hat or the Sun Hats UPF 80 Bucket covers much more skin. Many hikers carry a cap for short outings and a brimmed hat for all-day exposure."
  },
  {
    "q": "Do I need a hat with a neck flap?",
    "a": "If you burn easily on the neck and ears, a flap earns its place. The OLIKER Neck Cover Sun Hat has an attached neck cover, and the Outdoor Sun Hat Face Flap adds a detachable face section. A plain cap like the UPF 50 Running Cap leaves both exposed, so pair it with sunscreen or a buff on long, sunny days."
  },
  {
    "q": "Is the neck cover worth it?",
    "a": "If you burn easily on the neck, yes. The OLIKER Neck Cover Sun Hat shades the back of the neck without needing a separate bandana. The Outdoor Sun Hat Face Flap goes further, adding a detachable face section, though it can run warm in humid weather."
  },
  {
    "q": "How do I keep a hat on in wind?",
    "a": "Use a chin strap with a cord lock, like the one on the Sun Hats UPF 80 Bucket, and keep the inner band snug. A cap with an adjustable strap, such as the UPF 50 Running Cap, sits closer to the head. Tuck a wide brim down if gusts get strong."
  },
  {
    "q": "How do I clean and pack a sun hat?",
    "a": "Hand wash with mild soap and air dry, away from direct heat that can warp a brim. The OLIKER Neck Cover Sun Hat folds compactly for storage and holds its shape. Avoid crushing stiff brims under heavy gear."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Camp Shoes",
    "href": "/clothing-footwear/best-camp-shoes"
  },
  {
    "title": "Best Hiking Gaiters",
    "href": "/clothing-footwear/best-hiking-gaiters"
  },
  {
    "title": "Best Merino Wool Hiking Socks",
    "href": "/clothing-footwear/best-merino-wool-hiking-socks"
  },
  {
    "title": "Best Rain Poncho for Hiking",
    "href": "/clothing-footwear/best-rain-poncho-for-hiking"
  }
];
