import Link from "next/link";
import { pillarNav } from "@/data/nav";
import { guides } from "@/data/guides";
import { informationalGuides } from "@/data/informational-guides";
import { silos } from "@/data/silos";

// Homepage positioning band: the two pillars of RV Gear Lab side by side,
// each with its sections and a real guide count.
function countFor(group: string): number {
  const siloSlugs = new Set(silos.filter((s) => s.group === group).map((s) => s.slug));
  return (
    guides.filter((g) => siloSlugs.has(g.subcategorySlug)).length +
    informationalGuides.filter((g) => siloSlugs.has(g.silo)).length
  );
}

const copy: Record<string, { title: string; body: string }> = {
  rv: {
    title: "Gear for the rig",
    body: "Power stations and generators sized to your amp service, water and laundry gear that fits a tank, hitches and levelers for safe setup, and the upkeep that keeps a travel trailer, fifth wheel or motorhome road-ready.",
  },
  camping: {
    title: "Gear for the campsite",
    body: "Tents, sleeping bags and pads matched to real temperature ratings, camp stoves and coolers, chairs and tables, packs and layers for tent campers, car campers and backpackers.",
  },
};

export function PillarBand() {
  return (
    <section aria-labelledby="pillars-heading" className="mt-10 lg:mt-12">
      <h2 id="pillars-heading" className="sr-only">Browse by pillar</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {pillarNav.map((pillar) => {
          const isRv = pillar.slug === "rv";
          return (
            <div
              key={pillar.slug}
              id={pillar.slug}
              className={`rounded-card border p-6 sm:p-8 ${isRv ? "border-brand/25 bg-brand-light" : "border-accent/30 bg-accent-light"}`}
            >
              <p className={`eyebrow ${isRv ? "!text-brand" : "!text-accent-dark"}`}>
                {pillar.label} · {countFor(pillar.slug).toLocaleString("en-US")} guides
              </p>
              <h3 className="mt-2 text-[1.625rem] leading-tight sm:text-[1.875rem]">{copy[pillar.slug].title}</h3>
              <p className="mt-3 max-w-prose text-[0.9375rem] leading-relaxed text-ink-secondary">{copy[pillar.slug].body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {pillar.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      prefetch={false}
                      href={item.href}
                      className={`inline-block rounded-full border bg-surface px-3.5 py-1.5 text-sm font-medium !text-ink focus-ring ${isRv ? "border-brand/25 hover:border-brand hover:!text-brand" : "border-accent/40 hover:border-accent-dark hover:!text-accent-dark"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
