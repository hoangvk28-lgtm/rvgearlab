import { silos, siloGroups, type SiloGroup } from "@/data/silos";

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNav: NavItem[] = [
  { label: "RV Gear", href: "/guide", children: silos.filter((s) => s.group === "rv").map((s) => ({ label: s.name, href: `/${s.slug}`, description: s.tagline })) },
  { label: "Camping Gear", href: "/guide", children: silos.filter((s) => s.group === "camping").map((s) => ({ label: s.name, href: `/${s.slug}`, description: s.tagline })) },
  { label: "How We Review", href: "/how-we-review" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  categories: silos.map((s) => ({ label: s.name, href: `/${s.slug}` })),
  company: [
    { label: "About Us", href: "/about" },
    { label: "How We Review", href: "/how-we-review" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

// ── RV Gear Lab editorial navigation ──────────────────────────────────
// Two pillars (RV, Camping), each built from data/silos.ts so the menus never
// drift from the real routes.

export interface PillarNav {
  slug: SiloGroup;
  label: string;
  tagline: string;
  items: { label: string; href: string; description: string }[];
}

export const pillarNav: PillarNav[] = siloGroups.map((g) => ({
  slug: g.slug,
  label: g.name,
  tagline: g.tagline,
  items: silos.filter((s) => s.group === g.slug).map((s) => ({ label: s.name, href: `/${s.slug}`, description: s.tagline })),
}));

/** Every silo, RV first then Camping (sitemap-style lists, legacy consumers). */
export const departmentNav: { label: string; href: string; description: string }[] = pillarNav.flatMap((p) => p.items);

export const secondaryNav: { label: string; href: string }[] = [
  { label: "All Guides", href: "/guide" },
  { label: "How We Review", href: "/how-we-review" },
];
export const companyNav: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "How We Review", href: "/how-we-review" },
  { label: "Editorial Policy", href: "/how-we-review#editorial-policy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/privacy-policy#terms" },
];
