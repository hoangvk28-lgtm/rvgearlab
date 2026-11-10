export const guideSlug = "best-5-person-dome-tents";
export const guideTitle = "3 Best 5 Person Dome Tents in 2026";
export const metaTitle = "Best 5 Person Dome Tents in 2026";
export const metaDescription = "Three dome tents sold for five campers compared on stated capacity, floor size, layers and price, with honest notes on what each listing does and does not say.";
export const mainKeyword = "best 5 person dome tents";
export const introParagraphs = [
  "A five person dome tent sounds like a simple purchase until you look at what the label really means. Tent makers rate capacity by squeezing sleeping pads shoulder to shoulder with no room for gear, so a five person tent is often comfortable for three or four adults and workable for five only with kids. Families who camp from an RV often use a tent as extra sleeping space beside the coach, for teenagers, grandkids or guests, and that use rewards headroom, an easy pitch and a floor that handles a few dewy mornings.",
  "Dome tents earn their popularity for good reasons. The crossing poles create a self-supporting frame, so you can pitch one on a gravel RV pad where stakes will not hold, and the rounded shape sheds wind and rain better than a flat-sided cabin tent. The downside is that the sloping walls steal usable floor area near the edges and reduce standing room away from the center. Anyone shopping a dome for five people should pay attention to the stated floor dimensions and peak height rather than the headline number of sleepers.",
  "Only three products made this lineup, and they are very different. The 12 by 10 by 8 foot dome at $169.95 is the one that names 5 to 6 sleepers, with 190T polyester, a double layer and a four-season label. The Rotihom Bubble Tent at $284.99 is a clear PVC dome rated for 4 to 5 people with a 360 degree view. The Happy Travel Camping Tent at $69.99 is the budget option, sold in 4 and 6 person sizes, which means it does not directly state a 5 person capacity. Our review is built from stated dimensions and camper comments, and we explain any gaps in plain terms.",
  "Because the group is small, the decision comes down to what kind of camping you want to do. A traditional family tent suits most trips, a bubble tent suits stargazing at a fixed site, and a budget dome suits a casual weekend. The sections below tie each situation to a named pick so you can decide quickly.",
  "One last tip before you read on: check the poles and the stake points in any photo before you buy, and plan to seam-seal and groundsheet any tent you intend to use more than a few nights a year. Those two small steps matter more than the difference between most tents in this price range."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "/images/editorial/home-golden-hour-campsite.webp";
export const heroImageAlt = "Dome tent and hammock at a forest campsite at golden hour";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
  "take"?: string;
  "catch"?: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-5-person-dome-tents-1",
    "rank": 1,
    "badge": "Best Stated Capacity",
    "name": "12'x10'x8'Dome Camping Tent 5-6 Person 4 Season Double Layers Waterproof Anti-UV Windproof Tents Family Outdoo",
    "price": "$169.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ZqaK539ML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GCH8VK23?tag=rvgearlab-amz-20",
    "description": "The 12'x10'x8' Dome Camping Tent names 5 to 6 sleepers, with a 12 by 10 foot floor, an 8 foot peak and a two-layer build with mesh. It uses 190T polyester and 150D Oxford fabric and carries a four-season label at $169.95.\n\nCompared with the Rotihom bubble tent below it, this dome offers more floor area and a fabric shell that stays cooler in sun. Compared with the Happy Travel, it adds a four-season label, a two-layer build and a taller roof for standing room.\n\nIt is the right tent for families of five who want a roomy base camp, stand-up headroom and weather coverage for a few nights beside the coach.",
    "specs": [
      "5 to 6 person, 12x10x8 ft",
      "190T polyester, 150D Oxford",
      "4 season, double layer"
    ],
    "pros": [
      "Names 5 to 6 sleepers",
      "Tall 8 foot roof",
      "Double layer with mesh",
      "Four-season label"
    ],
    "cons": [
      "Tipi-like shape wastes corners",
      "Hard to judge weight"
    ],
    "bestFor": "Families of five",
    "take": "The one dome that states 5 to 6 sleepers and gives standing room.",
    "catch": "A conical shape reduces usable floor near the walls."
  },
  {
    "id": "best-5-person-dome-tents-2",
    "rank": 2,
    "badge": "Best Clear Dome",
    "name": "Rotihom 12x7 Ft Bubble Tent",
    "price": "$284.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/516affr565L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FWR12YC8?tag=rvgearlab-amz-20",
    "description": "The Rotihom 12x7 Ft Bubble Tent is a clear PVC dome rated for 4 to 5 people, offering a 360 degree view. Snap-fit pole connectors, a thick frame with supports and a large zipper make it quick to pitch at $284.99.\n\nCompared with the fabric domes in this roundup, the Rotihom turns the whole shelter into a window on the sky, ideal for stargazing at a fixed site. Compared with the 12 by 10 foot dome above it, it gives an experience no fabric tent can match.\n\nIt is a wonderful fit for couples and small groups who camp at a single spot and want to sleep under the stars while staying sheltered.",
    "specs": [
      "4 to 5 person, 12x7 ft",
      "Clear PVC, 360 degree view",
      "Snap-fit pole connectors"
    ],
    "pros": [
      "360 degree view",
      "Snap-fit setup",
      "Thick frame with supports",
      "Large zipper"
    ],
    "cons": [
      "Clear PVC gets hot in sun",
      "Costs far more than regular domes"
    ],
    "bestFor": "Stargazing groups",
    "take": "A clear dome for 4 to 5 people with a full view.",
    "catch": "Heat builds up in sunshine, so ventilate."
  },
  {
    "id": "best-5-person-dome-tents-3",
    "rank": 3,
    "badge": "Best Budget Dome",
    "name": "Happy Travel Camping Tent",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31J8olyf7WL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DHP333DP?tag=rvgearlab-amz-20",
    "description": "The Happy Travel Camping Tent comes in 4 and 6 person sizes, with the 4 person at 8.7 by 8 feet. It uses 190T taffeta and a removable rainfly, includes a large mesh top for stargazing and has an electrical access port, at $69.99.\n\nCompared with the 12 by 10 foot dome above it, this tent delivers a quick, light setup at a fraction of the price. Compared with the bubble tent, it gives airy mesh views and a rainfly you can leave off in warm weather.\n\nIt suits budget campers, kids camping beside an RV and summer weekends where a fan or light needs a cord through the electrical port.",
    "specs": [
      "4 or 6 person sizes",
      "8.7x8 ft for the 4-person",
      "190T taffeta, rainfly"
    ],
    "pros": [
      "Lowest price of the three",
      "Large mesh top for stars",
      "Electrical access port",
      "Removable rainfly"
    ],
    "cons": [
      "Capacity comes in 4 or 6, not 5",
      "Water rating is not in view"
    ],
    "bestFor": "Budget groups",
    "take": "The cheapest dome here, sold in 4 or 6 person sizes.",
    "catch": "Five people means buying the 6 person size."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated capacity versus five people",
    "description": "The keyword asks for five people, so we checked what each listing says. The 12x10x8 dome names 5 to 6 persons, the Rotihom names 4 to 5 persons, and the Happy Travel sells 4 or 6 person sizes, so it does not name five."
  },
  {
    "title": "Floor size and headroom",
    "description": "Floor area and peak height decide real comfort. We compared the 12 by 10 foot floor and 8 foot roof on the large dome, the 12 by 7 foot footprint on the Rotihom and the 8.7 by 8 foot footprint on the 4 person Happy Travel."
  },
  {
    "title": "Weather protection and layers",
    "description": "Layers and fabric decide how a tent handles rain and wind. We noted the double layer and four-season label on the large dome, the removable rainfly on the Happy Travel, and the clear PVC shell of the Rotihom, which is different from fabric."
  },
  {
    "title": "Setup and construction",
    "description": "A tent that takes an hour to pitch is a chore. We weighed the snap-fit pole connectors and thick frame on the Rotihom, the dome pole structure on the other two and the large zipper on the Rotihom door."
  },
  {
    "title": "Price and honest listing gaps",
    "description": "Prices range from $69.99 to $284.99. We weighed cost against what each listing states, and we flagged that the Happy Travel does not show a water rating and the large dome's weight is hard to judge."
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
    "subheading": "By How Many People Really Sleep",
    "intro": "Rated capacity and comfortable capacity are different numbers. Use the table to match your group to a floor size.",
    "table": {
      "headers": [
        "Your group",
        "Tent to pick",
        "Why"
      ],
      "rows": [
        [
          "Five people, including kids",
          "12'x10'x8' Dome Camping Tent 5-6 Person",
          "Names 5 to 6 sleepers on a 12 by 10 foot floor."
        ],
        [
          "Four adults who want some space",
          "Rotihom 12x7 Ft Bubble Tent",
          "Rated for 4 to 5 people with a 12 by 7 foot footprint."
        ],
        [
          "Three or four campers on a budget",
          "Happy Travel Camping Tent",
          "The 4 person size has an 8.7 by 8 foot floor for $69.99."
        ],
        [
          "Two adults with a lot of gear",
          "12'x10'x8' Dome Camping Tent 5-6 Person",
          "The big floor stores gear and leaves room to move."
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "These three sit at very different price points, so the money question settles things quickly.",
    "table": {
      "headers": [
        "Budget",
        "Tent to pick"
      ],
      "rows": [
        [
          "Under $100",
          "Happy Travel Camping Tent at $69.99, with a large mesh top and an electrical access port."
        ],
        [
          "About $170",
          "12'x10'x8' Dome Camping Tent at $169.95, with a tall roof and four-season label."
        ],
        [
          "Over $280",
          "Rotihom 12x7 Ft Bubble Tent at $284.99, a clear dome made for views."
        ]
      ]
    }
  },
  {
    "subheading": "Traditional Fabric Dome vs Clear Bubble Tent",
    "intro": "These two shapes use very different materials, and the choice depends on how you want to use the tent.",
    "cards": [
      {
        "label": "Fabric dome",
        "text": "The 12 by 10 by 8 foot dome and the Happy Travel use polyester shells with mesh panels and a rainfly. They are light, they breathe better and they stay cooler in sun, and they cost far less than the clear dome."
      },
      {
        "label": "Clear bubble",
        "text": "The Rotihom uses a clear PVC dome with a 360 degree view, snap-fit pole connectors and a thick frame. It is striking for stargazing at a fixed site, and the clear walls get hot in sun and offer little privacy."
      }
    ],
    "note": "Most families should choose a fabric dome, and the Rotihom suits stargazing at a fixed site."
  },
  {
    "subheading": "By Camping Style",
    "intro": "Camping habits give a second filter, since a tent for a one-night stop differs from one for a week at a lake.",
    "table": {
      "headers": [
        "Your style",
        "Tent to pick",
        "Why"
      ],
      "rows": [
        [
          "Four-season or shoulder-season camping",
          "12'x10'x8' Dome Camping Tent",
          "Four-season label, double layer and a tall wall."
        ],
        [
          "Stargazing at a fixed site",
          "Rotihom 12x7 Ft Bubble Tent",
          "Clear walls and a 360 degree view."
        ],
        [
          "Warm summer weekends",
          "Happy Travel Camping Tent",
          "Large mesh top for stars and airflow, with a removable rainfly."
        ],
        [
          "Powering a fan or light inside",
          "Happy Travel Camping Tent",
          "Includes an electrical access port."
        ]
      ]
    }
  },
  {
    "subheading": "For Families Camping Beside an RV Specifically",
    "intro": "A tent beside a motorhome is a sleeping annex, so it has to pitch quickly on a pad and stand up to a stay of a few nights.",
    "cards": [
      {
        "label": "Look for",
        "text": "A floor big enough for the whole group with gear, a tall center roof, a door that a child can work and a design that can be pitched without stakes if the pad is gravel or concrete."
      },
      {
        "label": "In this comparison",
        "text": "The 12 by 10 by 8 foot dome at $169.95 gives the biggest floor and a tall 8 foot roof for a full family. The Happy Travel at $69.99 suits kids who will sleep in it for a few nights beside the coach."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "At these prices, extra money buys either space and weather coverage or a specialized experience.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Commit $169.95 to the 12 by 10 by 8 foot dome if you need room for five and want a double layer, or $284.99 for the Rotihom if the clear view is the whole point."
      },
      {
        "label": "Save if",
        "text": "Pay $69.99 for the Happy Travel if you camp in good weather, sleep three or four and want a quick, inexpensive tent. Spend the savings on pads and sleeping bags."
      }
    ],
    "note": "A budget tent paired with good sleeping pads often beats an expensive tent paired with thin ones."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Real capacity and floor size",
    "explanation": "Tent makers rate capacity by packing sleeping pads side by side with no room for gear, so a five person tent is a snug fit for three or four adults. The floor dimensions show the true size. Look for the stated length and width in feet, and subtract about 20 percent for gear and movement before trusting the headline capacity."
  },
  {
    "criterion": "Peak height and wall shape",
    "explanation": "Dome walls slope inward, which reduces standing room near the edges. A tall peak height gives you more room to change clothes and move around. Check the stated height, such as the 8 foot peak on the large dome, and note that sloping walls often cut usable floor space near the sides."
  },
  {
    "criterion": "Rainfly and layers",
    "explanation": "A double layer tent has an inner mesh body and an outer fly that sheds rain and cuts condensation. A removable fly gives flexibility in warm weather. Look for a stated water rating or a taped seam note, and be careful when a listing leaves out the water rating, as the Happy Travel does."
  },
  {
    "criterion": "Pole structure and setup",
    "explanation": "Dome tents rely on crossing poles that hold the shape without stakes. Thicker poles resist wind, and snap-fit connectors speed up setup. Check the pole material and the connectors in the listing, and look at the number of poles, since more poles usually mean a longer pitch."
  },
  {
    "criterion": "Ventilation and mesh",
    "explanation": "A closed tent fills with moisture and heat overnight, and condensation soaks the walls. Large mesh panels and a mesh roof let air flow and give a view of the sky. Look for mesh windows, roof vents and a rainfly that can be rolled back, and remember that clear PVC walls trap heat in sun. In humid climates, ventilation matters more than extra insulation, since a tent that cannot breathe turns every breath into water on the walls by morning."
  },
  {
    "criterion": "Weight and pack size",
    "explanation": "A family tent is heavy, and a heavy tent is a chore to carry from the car. For RV camping, weight matters less, though storage space does. Look for a stated packed weight and size, and note that some listings, like the large dome, make weight hard to judge. If the number is missing, a seller question or a look at recent buyer photos often settles it, and a bag that weighs more than you can comfortably lift is a sign to consider a smaller tent."
  }
];

export const faq = [
  {
    "q": "Will five adults fit in a five person tent?",
    "a": "Usually not comfortably. Capacity ratings assume sleeping pads shoulder to shoulder with no gear. For five adults, look at a six person tent, such as the 5 to 6 person dome at $169.95, and plan on storing bags outside or in a vestibule. If the group includes small children, they take less room, and a five person tent can work well for two adults and three kids."
  },
  {
    "q": "What should I do before the first night in a new tent?",
    "a": "Skipping a practice pitch at home. A new tent can have confusing poles and sleeves, and learning in the dark in the rain is miserable. Pitch it once in the yard, and seam-seal any seams that the maker recommends. Another common error is pitching on a slope or over sharp stones, which wears the floor out quickly, so clear the ground and use a groundsheet under the tent."
  },
  {
    "q": "Is the Rotihom bubble tent worth $284.99?",
    "a": "Only if the clear view matters. It offers a 360 degree look and snap-fit setup, though the clear PVC gets hot in sun and offers little privacy. A fabric dome gives more space for the money. If you do want the bubble, plan on shading it with a tarp during the day and carrying a fan, since the sun heats a clear shell much faster than a fabric tent."
  },
  {
    "q": "How do I pitch a dome tent on a gravel pad?",
    "a": "Dome tents are self-supporting, so lay the footprint, assemble the poles and clip the body on. Weigh the corners down with water jugs or sandbags instead of stakes. Guy lines and heavy rocks help in wind. Face the lowest profile of the dome toward the prevailing wind, and always close the door before a gust arrives, since an open door turns a dome into a sail."
  },
  {
    "q": "How do I keep condensation down inside?",
    "a": "Open the vents and mesh panels, pitch the tent away from standing water and avoid cooking inside. A removable rainfly lets you roll back one side in warm weather. Wipe the walls in the morning and dry the tent before packing."
  },
  {
    "q": "How should I store the tent?",
    "a": "Dry it completely before packing, since damp fabric grows mildew in days. Store it loosely in a cool, dry place instead of stuffed tight. Clean the zippers with a toothbrush and keep the poles in their bag. Before the next trip, lay the tent out, check each seam and replace any bent pole section, so a small repair at home does not become a failure at the campsite."
  }
];

export const bottomLine = [
  "For a family of five, the 12 by 10 by 8 foot dome at $169.95 is the best choice, since it names 5 to 6 sleepers and has a double layer, a four-season label and a tall 8 foot roof. The Happy Travel at $69.99 suits budget campers who sleep three or four and want a large mesh top for stars.",
  "Choose the Rotihom bubble tent at $284.99 only for stargazing at a fixed site. Remember that rated capacity assumes no gear, so size up when in doubt, practice a pitch at home and dry the tent before storing it. A sensible tent and a good sleeping pad do more for a camping trip than any other piece of gear, and a groundsheet, a few extra stakes and a small whisk broom for the floor will keep the tent in good shape for many seasons."
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best Backpacking Tents",
    "href": "/tents-shelter/best-backpacking-tents"
  },
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
  }
];
