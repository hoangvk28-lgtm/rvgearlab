import type { Metadata } from "next";
import Link from "next/link";
import { getPublicGuides } from "@/lib/public-guides";
import { createResolver, type ArticleView } from "@/lib/homepage";
import { homepageEditorial as cfg } from "@/data/homepage-editorial";
import { siloGroups, silos } from "@/data/silos";
import { informationalGuides } from "@/data/informational-guides";
import { SafeImage } from "@/components/editorial/SafeImage";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 86400;

export const metadata: Metadata = buildMetadata({
  title: "RV Gear Lab | RV & Camping Gear Buying Guides",
  description:
    "RV and camping gear buying guides: power, water, towing and RV upkeep, plus tents, sleep systems and camp kitchens, compared on real specs.",
  path: "/",
  image: "/images/brand/og.jpg",
});

// What each section's guides are compared on: shown as spec chips on the category cards.
const SILO_SPECS: Record<string, string[]> = {
  "power-electrical": ["Wh capacity", "30/50 amp", "Inverter W"],
  "water-plumbing": ["GPM", "Tank fit", "Spin dry"],
  "towing-leveling": ["Tongue wt", "Drop", "Sensors"],
  "rv-care": ["UV rating", "Seal life", "Coverage"],
  "interior-comfort": ["BTU", "Watts", "Footprint"],
  "camping-travel": ["Range", "Ports", "12V draw"],
  "tents-shelter": ["Floor sq ft", "HH rating", "Setup min"],
  "sleep-gear": ["°F rating", "R-value", "Packed size"],
  "camp-kitchen": ["BTU", "Ice days", "Fuel type"],
  "camp-power": ["Wh", "dB", "Solar input"],
  "camp-furniture": ["lb capacity", "Seat height", "Packed wt"],
  "campsite-gear": ["Lumens", "Runtime", "IPX"],
  "packs-hiking": ["Liters", "Torso fit", "Weight"],
  "clothing-footwear": ["Fill power", "Waterproof", "Fit"],
};

function GuideCard({ a, eager = false }: { a: ArticleView; eager?: boolean }) {
  const isPhoto = Boolean(a.image?.startsWith("/"));
  return (
    <Link prefetch={false} href={a.href} className="group overflow-hidden rounded-card border border-border bg-surface transition-all hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="relative h-48 border-b border-border bg-white">
        {a.image && (
          <SafeImage
            src={a.image}
            alt={a.imageAlt}
            fill
            priority={eager}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`${isPhoto ? "object-cover" : "object-contain p-6"} transition-transform duration-300 group-hover:scale-105`}
            unoptimized={!isPhoto}
          />
        )}
      </div>
      <div className="p-5">
        <p className="lab-spec mb-2 text-ink-muted">{a.eyebrow} · {a.readTime}</p>
        <h3 className="text-lg leading-snug transition-colors group-hover:text-cta-dark">{a.title}</h3>
      </div>
    </Link>
  );
}

export default async function HomePage() {
  const guides = await getPublicGuides();
  const resolve = createResolver(guides);
  const latest = resolve.list([...cfg.latest, ...cfg.mostRead]).slice(0, 6);
  const rvPicks = resolve.list(cfg.departments.filter((d) => d.id !== "tents-shelter").flatMap((d) => d.articles)).slice(0, 3);
  const campPicks = resolve.list([...cfg.departments.filter((d) => d.id === "tents-shelter").flatMap((d) => d.articles), ...cfg.workspaceIdeas.articles, ...cfg.workBetter.articles]).slice(0, 3);

  const countFor = (siloSlug: string) =>
    guides.filter((g) => g.subcategorySlug === siloSlug).length + informationalGuides.filter((g) => g.silo === siloSlug).length;
  const total = guides.length + informationalGuides.length;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand text-ink-inverse">
        <div className="lab-grid-bg absolute inset-0" aria-hidden />
        <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-cta/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-40 -left-24 h-[24rem] w-[24rem] rounded-full bg-forest/50 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.25fr_1fr] lg:px-8">
          <div>
            <p className="lab-spec mb-4 text-cta">RV &amp; camping gear buying guides</p>
            <h1 className="mb-5 leading-[1.05] !text-white">
              Gear for the rig. <span className="text-cta">Gear for the campsite.</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg !text-white/70">
              We read the spec sheets, decode the ratings and compare amp draw, temperature ratings, weight and build, so you know
              exactly what you are buying before the next trip.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link prefetch={false} href="/guide" className="inline-flex items-center gap-2 rounded-btn bg-cta px-5 py-3 font-semibold !text-white transition-colors hover:bg-cta-dark">
                Browse {total.toLocaleString("en-US")} guides <span aria-hidden>→</span>
              </Link>
              <Link prefetch={false} href="/how-we-review" className="inline-flex items-center rounded-btn border border-white/25 px-5 py-3 font-semibold !text-white transition-colors hover:bg-white/10">
                How we review gear
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {siloGroups.map((g) => {
              const groupSilos = silos.filter((s) => s.group === g.slug);
              const n = groupSilos.reduce((sum, s) => sum + countFor(s.slug), 0);
              return (
                <div key={g.slug} className="rounded-card border border-white/15 bg-white/[0.05] p-5 backdrop-blur">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="lab-spec flex items-center gap-2 !text-white">
                      <span className={`h-2 w-2 rounded-full ${g.slug === "rv" ? "bg-[#4fae78]" : "bg-accent"}`} aria-hidden />
                      {g.name}
                    </p>
                    <span className="lab-spec text-cta">{n.toLocaleString("en-US")} guides</span>
                  </div>
                  <ul className="flex flex-wrap gap-1.5">
                    {groupSilos.map((s) => (
                      <li key={s.slug}>
                        <Link prefetch={false} href={`/${s.slug}`} className="inline-block rounded-full border border-white/15 px-3 py-1 text-xs font-medium !text-white/80 transition-colors hover:border-cta hover:!text-white">
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Categories by pillar */}
        {siloGroups.map((g) => (
          <section key={g.slug} id={g.slug} className="scroll-mt-24 pt-14">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className={`lab-spec mb-2 ${g.slug === "rv" ? "text-forest" : "text-accent-dark"}`}>{g.name}</p>
                <h2>{g.slug === "rv" ? "Everything the rig runs on" : "Everything you need at camp"}</h2>
                <p className="mt-2 max-w-2xl">{g.tagline}.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {silos.filter((s) => s.group === g.slug).map((s) => (
                <Link prefetch={false} key={s.slug} href={`/${s.slug}`} className={`group rounded-card border border-border border-t-4 bg-surface p-5 transition-all hover:shadow-card-hover ${g.slug === "rv" ? "border-t-forest" : "border-t-accent"}`}>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="lab-spec text-ink-muted">{String(countFor(s.slug)).padStart(3, "0")} guides</span>
                    <span className="text-cta transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                  </div>
                  <h3 className="mb-2 text-lg">{s.name}</h3>
                  <p className="mb-4 text-sm">{s.tagline}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {(SILO_SPECS[s.slug] ?? []).map((spec) => (
                      <span key={spec} className="rounded border border-border bg-bg px-2 py-0.5 font-[family-name:var(--font-mono)] text-[0.6875rem] text-ink-secondary">{spec}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* Latest */}
        {latest.length > 0 && (
          <section className="pt-16">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="lab-spec mb-2 text-cta">Fresh off the trail</p>
                <h2>Latest buying guides</h2>
              </div>
              <Link prefetch={false} href="/guide/all" className="text-sm font-semibold !text-cta-dark hover:!text-cta">View all →</Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latest.map((a, i) => <GuideCard key={a.slug} a={a} eager={i < 3} />)}
            </div>
          </section>
        )}

        {/* Two pillar spotlights */}
        <div className="grid gap-10 py-16 lg:grid-cols-2">
          {[
            { title: "Popular for RVers", href: "/guide#rv", items: rvPicks, tone: "text-forest" },
            { title: "Popular for campers", href: "/guide#camping", items: campPicks, tone: "text-accent-dark" },
          ].map((col) => (
            <section key={col.title}>
              <div className="mb-5 flex items-end justify-between">
                <h2 className="text-2xl sm:text-3xl">{col.title}</h2>
                <Link prefetch={false} href={col.href} className={`text-sm font-semibold ${col.tone}`}>More →</Link>
              </div>
              <ol className="divide-y divide-border rounded-card border border-border bg-surface">
                {col.items.map((a, i) => (
                  <li key={a.slug}>
                    <Link prefetch={false} href={a.href} className="group flex items-center gap-4 p-4">
                      <span className="font-[family-name:var(--font-display)] text-2xl font-bold tabular-nums text-cta">{String(i + 1).padStart(2, "0")}</span>
                      <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-border bg-white">
                        {a.image && <SafeImage src={a.image} alt="" fill sizes="56px" className={a.image.startsWith("/") ? "object-cover" : "object-contain p-1"} unoptimized={!a.image.startsWith("/")} />}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold leading-snug text-ink group-hover:text-cta-dark">{a.title}</span>
                        <span className="lab-spec mt-0.5 block text-ink-muted">{a.eyebrow}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </div>

      {/* Methodology band */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            ["01", "We decode the spec sheet", "Watt-hours versus watts, 30 versus 50 amp, EN temperature ratings, R-values, hydrostatic head. We explain which numbers matter and which are marketing."],
            ["02", "We match gear to the trip", "A boondocking fifth wheel, a family car-camping weekend and a solo backpacking loop need different gear. Every pick says who it suits and who should skip it."],
            ["03", "We think about season five", "Serviceable parts, battery chemistry, seam construction and warranty terms decide what gear really costs to own, so we weigh them alongside the price."],
          ].map(([n, t, d]) => (
            <div key={n}>
              <span className="lab-spec text-cta">{n}</span>
              <h3 className="mb-2 mt-2">{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
