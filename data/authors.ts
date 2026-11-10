export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  avatarUrl?: string;
  isPerson?: boolean; // true → Person schema; false/undefined → Organization
  expertise: string[];
  credentials: { label: string; value: string }[];
  social: { platform: string; url: string; label: string }[];
  editorial: {
    process: string;
    independence: string;
  };
}

export const authors: Author[] = [
  {
    slug: "bowen-higgins",
    name: "Bowen Higgins",
    role: "RV Editor at RV Gear Lab",
    isPerson: true,
    avatarUrl: "/images/authors/bowen-higgins.webp",
    bio: "Bowen covers RV power, water systems, towing and leveling, upkeep and interior comfort, with a focus on matching gear to the rig, the hookups and the way you actually travel.",
    longBio:
      "Bowen Higgins edits the RV side of RV Gear Lab: portable power stations and generators, 30 and 50 amp service, water and laundry gear, hitches and levelers, RV care and interior comfort for travel trailers, fifth wheels and motorhomes.\n\nHis guides compare products on published specifications, rig fit, hookup and power compatibility, included hardware and warranty terms. He has not personally tested every product listed; where hands-on testing is not available, recommendations are based on manufacturer specifications, product documentation, use-case fit and comparative research.",
    expertise: ["Portable power and generators", "30/50 amp shore power", "RV water systems", "Towing and leveling", "RV maintenance"],
    credentials: [],
    social: [],
    editorial: {
      process: "Guides compare published specifications, rig fit, power and hookup compatibility, warranty terms and real trade-offs, and say plainly what each pick does not do well.",
      independence: "Affiliate commissions never decide which products are recommended or how they are ranked.",
    },
  },
  {
    slug: "danny-walker",
    name: "Danny Walker",
    role: "Camping Editor at RV Gear Lab",
    isPerson: true,
    avatarUrl: "/images/authors/danny-walker.webp",
    bio: "Danny covers camping gear, campsite setup, outdoor power, sleep systems and practical camping advice, with a focus on helping campers make better gear decisions.",
    longBio:
      "Danny Walker edits the camping side of RV Gear Lab: tents and shelter, sleep systems, camp kitchens, camp power, furniture, packs and clothing for car campers, families, backpackers and overlanders.\n\nHis guides compare products on campsite fit, verified specifications, setup requirements, weight, durability and real trade-offs. He has not personally tested every product listed; where hands-on testing is not available, recommendations are based on verified manufacturer specifications, product documentation, use-case fit and comparative research, and each guide says which.",
    expertise: ["Tents and shelter", "Sleep systems", "Camp kitchen gear", "Portable camp power", "Camp furniture", "Campsite setup"],
    credentials: [],
    social: [],
    editorial: {
      process: "Guides compare verified specifications, campsite fit, setup, weight, durability and real trade-offs, and say plainly what each pick does not do well.",
      independence: "Commission rates never decide which products are recommended or how they are ranked.",
    },
  },
  {
    slug: "rvgearlab-editors",
    name: "RV Gear Lab Editors",
    role: "Editorial team",
    isPerson: false,
    bio: "The RV Gear Lab editorial team researches RV and camping gear using published specifications, included hardware, compatibility details and warranty terms.",
    longBio:
      "RV Gear Lab publishes buying guides across two pillars: RV gear (power and electrical, water and plumbing, towing and leveling, RV care, interior comfort, travel) and camping gear (tents, sleep systems, camp kitchens, camp power, furniture, packs and clothing).\n\nOur comparisons are based on published specifications, included hardware, compatibility details and warranty terms. We do not claim hands-on testing unless a guide says so explicitly.",
    expertise: ["Portable power and generators", "RV appliances", "Towing and leveling gear", "Camping equipment"],
    credentials: [],
    social: [],
    editorial: {
      process: "Guides compare published specifications, compatibility, warranty terms and buyer-feedback patterns, and state trade-offs plainly.",
      independence: "Affiliate commissions never decide which products we recommend or how they are ranked.",
    },
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find(
    (a) => a.name.toLowerCase() === name.toLowerCase()
  );
}

export function authorToSlug(name: string): string {
  const match = getAuthorByName(name);
  if (match) return match.slug;
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
