// Topic-first top-level sections for RV Gear Lab, split into two pillars:
// RV (rigs, hookups, upkeep) and Camping (tents, sleep, kitchen, trail).
// Each silo is a real route (e.g. /power-electrical) hosting /<silo>/<slug>.

export type SiloGroup = "rv" | "camping";

export interface Silo {
  group: SiloGroup;
  slug: string;
  name: string;
  tagline: string;
  description: string;
}

export const siloGroups: { slug: SiloGroup; name: string; tagline: string }[] = [
  { slug: "rv", name: "RV Gear", tagline: "Power, water, towing, upkeep and comfort for life on the road" },
  { slug: "camping", name: "Camping Gear", tagline: "Tents, sleep systems, camp kitchens and trail gear" },
];

export const silos: Silo[] = [
  { group: "rv", slug: "power-electrical", name: "Power & Electrical", tagline: "Power stations, generators, solar and shore power",
    description: "Buying guides for portable power stations, inverter generators, solar generators, transfer switches and 30/50-amp hookups, matched to the loads you actually run on the road." },
  { group: "rv", slug: "water-plumbing", name: "Water & Plumbing", tagline: "Fresh water, laundry and the gear that uses it",
    description: "Guides to RV water gear and water-hungry appliances: compact washers, washer-dryer combos and portable dishwashers sized for tanks, hookups and tight bays." },
  { group: "rv", slug: "towing-leveling", name: "Towing & Leveling", tagline: "Hitches, levelers, chocks and safe setup",
    description: "Guides to hitches, sway control, leveling blocks, wheel chocks and stabilizers for setting up a rig safely and quickly at every site." },
  { group: "rv", slug: "rv-care", name: "RV Care", tagline: "Moisture control, cleaning and upkeep",
    description: "Guides to dehumidifiers, covers, cleaners and maintenance gear that keep an RV dry, clean and road-ready between trips." },
  { group: "rv", slug: "interior-comfort", name: "Interior & Comfort", tagline: "Compact kitchens, climate control and living space",
    description: "Guides to RV-sized microwaves, air fryers, ice makers, heaters, fans and portable air conditioners chosen around limited space and limited power." },
  { group: "rv", slug: "camping-travel", name: "Camping & Travel", tagline: "Off-grid power, campsite gear and life on the road",
    description: "Guides to camping generators, solar kits, power banks, travel routers and campsite gear for weekend trips, boondocking and van life." },
  { group: "camping", slug: "tents-shelter", name: "Tents & Shelter", tagline: "Tents, tarps and canopies",
    description: "Guides to backpacking and family tents, tarps, canopies and screen rooms, compared on real floor size, weather ratings, setup time and packed weight." },
  { group: "camping", slug: "sleep-gear", name: "Sleep Gear", tagline: "Sleeping bags, pads and cots",
    description: "Guides to sleeping bags, sleeping pads, air mattresses, cots and camp pillows, matched to temperature ratings, R-values and how you actually camp." },
  { group: "camping", slug: "camp-kitchen", name: "Camp Kitchen", tagline: "Stoves, coolers and camp cooking",
    description: "Guides to camp stoves, cookware, coolers, coffee makers and water gear for cooking well at the campsite or the trailhead." },
  { group: "camping", slug: "camp-power", name: "Camp Power", tagline: "Power stations, generators and solar",
    description: "Guides to portable power stations, quiet generators, solar panels and power banks sized to the devices you run off-grid." },
  { group: "camping", slug: "camp-furniture", name: "Camp Furniture", tagline: "Chairs, tables and campsite comfort",
    description: "Guides to camping chairs, zero gravity loungers, stools, tables and hammocks chosen for weight capacity, packed size and comfort." },
  { group: "camping", slug: "campsite-gear", name: "Campsite Gear", tagline: "Lighting, navigation and campsite essentials",
    description: "Guides to lanterns, headlamps, GPS units, projectors and the campsite essentials that make a weekend outdoors easier." },
  { group: "camping", slug: "packs-hiking", name: "Packs & Hiking", tagline: "Backpacks, navigation and trail gear",
    description: "Guides to backpacking and day packs, trekking poles, GPS units, hiking watches and the trail gear that gets you to camp and back." },
  { group: "camping", slug: "clothing-footwear", name: "Clothing & Footwear", tagline: "Jackets, layers, boots and socks",
    description: "Guides to rain jackets, insulated layers, base layers, hiking boots, trail shoes and socks, compared on warmth, weather protection, fit and weight." },
];

export function getSilosByGroup(group: SiloGroup): Silo[] {
  return silos.filter((s) => s.group === group);
}
// Kept for compatibility with components that expect aggregate hubs.
export const departmentHubs: Silo[] = [];

export function getSiloBySlug(slug: string): Silo | undefined {
  return silos.find((s) => s.slug === slug) ?? departmentHubs.find((s) => s.slug === slug);
}

/** Which pillar a silo belongs to ("rv" when unknown). */
export function siloGroupOf(siloSlug: string | undefined): SiloGroup {
  return silos.find((s) => s.slug === siloSlug)?.group ?? "rv";
}
