export interface Category {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  subcategories: string[];
  /**
   * Optional list of underlying guide categorySlug/subcategorySlug values this
   * category aggregates. When present, guide matching uses this array instead
   * of a single exact `categorySlug === slug` check. Existing categories that
   * omit this keep their original single-slug matching behavior unchanged.
   */
  matchSlugs?: string[];
}

export const categories: Category[] = [
  {
    slug: "power-electrical",
    name: "Power & Electrical",
    description: "Power stations, generators, solar and shore power.",
    shortDescription: "Power stations, generators, solar and shore power.",
    icon: "Truck",
    color: "brand",
    subcategories: ["power-electrical"],
    matchSlugs: ["power-electrical"],
  },
  {
    slug: "water-plumbing",
    name: "Water & Plumbing",
    description: "Fresh water, laundry and the gear that uses it.",
    shortDescription: "Fresh water, laundry and the gear that uses it.",
    icon: "Truck",
    color: "brand",
    subcategories: ["water-plumbing"],
    matchSlugs: ["water-plumbing"],
  },
  {
    slug: "towing-leveling",
    name: "Towing & Leveling",
    description: "Hitches, levelers, chocks and safe setup.",
    shortDescription: "Hitches, levelers, chocks and safe setup.",
    icon: "Truck",
    color: "brand",
    subcategories: ["towing-leveling"],
    matchSlugs: ["towing-leveling"],
  },
  {
    slug: "rv-care",
    name: "RV Care",
    description: "Moisture control, cleaning and upkeep.",
    shortDescription: "Moisture control, cleaning and upkeep.",
    icon: "Truck",
    color: "brand",
    subcategories: ["rv-care"],
    matchSlugs: ["rv-care"],
  },
  {
    slug: "interior-comfort",
    name: "Interior & Comfort",
    description: "Compact kitchens, climate control and living space.",
    shortDescription: "Compact kitchens, climate control and living space.",
    icon: "Truck",
    color: "brand",
    subcategories: ["interior-comfort"],
    matchSlugs: ["interior-comfort"],
  },
  {
    slug: "camping-travel",
    name: "Camping & Travel",
    description: "Off-grid power, campsite gear and life on the road.",
    shortDescription: "Off-grid power, campsite gear and life on the road.",
    icon: "Truck",
    color: "brand",
    subcategories: ["camping-travel"],
    matchSlugs: ["camping-travel"],
  },
  {
    slug: "tents-shelter",
    name: "Tents & Shelter",
    description: "Tents, tarps, canopies and screen rooms.",
    shortDescription: "Tents, tarps, canopies and screen rooms.",
    icon: "Tent",
    color: "brand",
    subcategories: ["tents-shelter"],
    matchSlugs: ["tents-shelter"],
  },
  {
    slug: "sleep-gear",
    name: "Sleep Gear",
    description: "Sleeping bags, pads, cots and camp pillows.",
    shortDescription: "Sleeping bags, pads, cots and camp pillows.",
    icon: "Tent",
    color: "brand",
    subcategories: ["sleep-gear"],
    matchSlugs: ["sleep-gear"],
  },
  {
    slug: "camp-kitchen",
    name: "Camp Kitchen",
    description: "Stoves, cookware, coolers and coffee gear.",
    shortDescription: "Stoves, cookware, coolers and coffee gear.",
    icon: "Tent",
    color: "brand",
    subcategories: ["camp-kitchen"],
    matchSlugs: ["camp-kitchen"],
  },
  {
    slug: "camp-power",
    name: "Camp Power",
    description: "Power stations, generators, solar and power banks.",
    shortDescription: "Power stations, generators, solar and power banks.",
    icon: "Tent",
    color: "brand",
    subcategories: ["camp-power"],
    matchSlugs: ["camp-power"],
  },
  {
    slug: "camp-furniture",
    name: "Camp Furniture",
    description: "Chairs, tables, stools and hammocks.",
    shortDescription: "Chairs, tables, stools and hammocks.",
    icon: "Tent",
    color: "brand",
    subcategories: ["camp-furniture"],
    matchSlugs: ["camp-furniture"],
  },
  {
    slug: "campsite-gear",
    name: "Campsite Gear",
    description: "Lanterns, headlamps, GPS and campsite essentials.",
    shortDescription: "Lanterns, headlamps, GPS and campsite essentials.",
    icon: "Tent",
    color: "brand",
    subcategories: ["campsite-gear"],
    matchSlugs: ["campsite-gear"],
  },
  {
    slug: "packs-hiking",
    name: "Packs & Hiking",
    description: "Backpacks, trekking poles, GPS units and trail gear.",
    shortDescription: "Backpacks, trekking poles, GPS units and trail gear.",
    icon: "Tent",
    color: "brand",
    subcategories: ["packs-hiking"],
    matchSlugs: ["packs-hiking"],
  },
  {
    slug: "clothing-footwear",
    name: "Clothing & Footwear",
    description: "Rain jackets, insulated layers, base layers, boots and socks.",
    shortDescription: "Rain jackets, insulated layers, base layers, boots and socks.",
    icon: "Tent",
    color: "brand",
    subcategories: ["clothing-footwear"],
    matchSlugs: ["clothing-footwear"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
