import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo";
import { getPublicGuides } from "@/lib/public-guides";
import { formatDate } from "@/lib/utils";
import { categories } from "@/data/categories";
import { silos, siloGroups } from "@/data/silos";
import { canonicalGuideHref } from "@/lib/migrated-silos";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: "RV & Camping Buying Guides",
  description:
    "Browse every RV and camping buying guide: RV power, water, towing and upkeep, plus tents, sleep gear, camp kitchens, packs and clothing.",
  path: "/guide",
});

const LATEST_COUNT = 40;
const PER_CATEGORY = 4;

function GuideCard({ guide, priority = false }: { guide: { slug: string; title: string; description: string; heroImage?: string; thumbnailImage?: string; categorySlug: string; subcategorySlug: string; readTime: string; lastUpdated: string; recommendedProductIds: string[] }; priority?: boolean }) {
  const thumb = guide.thumbnailImage || guide.heroImage;
  return (
    <Link prefetch={false}
      href={canonicalGuideHref(guide)}
      className="group flex flex-col bg-surface rounded-card border border-border hover:shadow-card-hover hover:-translate-y-0.5 transition-all overflow-hidden"
    >
      {thumb ? (
        <div className="relative w-full h-44 bg-white overflow-hidden border-b border-border">
          <Image
            src={thumb}
            alt={guide.title}
            fill
            priority={priority}
            className={`${thumb.startsWith("/") ? "object-cover" : "object-contain p-5"} group-hover:scale-[1.03] transition-transform duration-300`}
            unoptimized
          />
          <span className="absolute top-2.5 left-2.5 lab-spec text-white bg-brand px-2 py-1 rounded">
            {guide.subcategorySlug.replace(/-/g, " ")}
          </span>
        </div>
      ) : (
        <div className="w-full h-44 bg-brand-muted flex items-center justify-center relative">
          <svg className="w-10 h-10 text-brand/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </svg>
          <span className="absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-widest text-brand bg-brand-muted px-2 py-1 rounded-full border border-brand/20">
            {guide.subcategorySlug.replace(/-/g, " ")}
          </span>
        </div>
      )}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-xs text-ink-muted">{guide.readTime}</span>
          <span className="text-xs text-ink-muted">Updated {formatDate(guide.lastUpdated)}</span>
        </div>
        <h3 className="font-bold text-ink leading-snug group-hover:text-brand transition-colors text-sm">
          {guide.title}
        </h3>
        <p className="text-xs text-ink-secondary leading-relaxed line-clamp-2 flex-1">
          {guide.description}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
          <span className="text-xs text-ink-muted">
            {guide.recommendedProductIds.length > 0 ? `${guide.recommendedProductIds.length} picks evaluated` : "Full buying guide"}
          </span>
          <span className="text-xs font-semibold text-brand group-hover:text-brand-dark transition-colors flex items-center gap-0.5">
            Read guide
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default async function BuyingGuidesIndexPage() {
  const guides = await getPublicGuides();

  // 12 most recently updated guides
  const latestGuides = guides.slice(0, LATEST_COUNT);
  const latestSlugs = new Set(latestGuides.map((g) => g.slug));

  // Per-category: top 4, excluding guides already shown in Latest
  const guidesByCategory = categories
    .map((cat) => ({
      category: cat,
      guides: guides
        .filter((g) => g.subcategorySlug === cat.slug && !latestSlugs.has(g.slug))
        .slice(0, PER_CATEGORY),
    }))
    .filter((c) => c.guides.length > 0);

  const totalGuides = guides.length;

  return (
    <>
    <section className="relative overflow-hidden bg-brand text-ink-inverse">
      <div className="lab-grid-bg absolute inset-0" aria-hidden />
      <div className="absolute -right-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-cta/15 blur-3xl" aria-hidden />
      <Container className="relative py-12 sm:py-16">
        <p className="lab-spec mb-3 text-cta">Buying guides · {totalGuides.toLocaleString("en-US")} total</p>
        <h1 className="mb-3 !text-white">Every RV &amp; camping guide</h1>
        <p className="max-w-2xl text-lg !text-white/70">
          Straightforward comparisons for two kinds of trips: life in the rig and life at the campsite.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#rv" className="inline-flex items-center gap-2 rounded-btn border border-white/20 px-4 py-2 text-sm font-semibold !text-white hover:bg-white/10"><span className="h-2 w-2 rounded-full bg-[#4fae78]" aria-hidden />RV Gear</a>
          <a href="#camping" className="inline-flex items-center gap-2 rounded-btn border border-white/20 px-4 py-2 text-sm font-semibold !text-white hover:bg-white/10"><span className="h-2 w-2 rounded-full bg-accent" aria-hidden />Camping Gear</a>
          <Link prefetch={false} href="/guide/all" className="inline-flex items-center rounded-btn bg-cta px-4 py-2 text-sm font-semibold !text-white hover:bg-cta-dark">A–Z list</Link>
        </div>
      </Container>
    </section>
    <Container className="py-14">
      <div className="space-y-14">
        {/* Latest guides */}
        <section aria-labelledby="latest-guides">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 id="latest-guides" className="text-2xl font-bold text-ink tracking-tight mb-1">
                Recently Updated
              </h2>
              <p className="text-sm text-ink-secondary">Our {LATEST_COUNT} most recently updated buying guides.</p>
            </div>
            <span className="text-xs text-ink-muted hidden sm:block">{totalGuides} guides total</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {latestGuides.map((guide, i) => (
              <GuideCard key={guide.slug} guide={guide} priority={i < 3} />
            ))}
          </div>
        </section>

        {/* Per-pillar, per-category sections */}
        {siloGroups.map((group) => {
          const groupSilos = new Set(silos.filter((s) => s.group === group.slug).map((s) => s.slug));
          const sections = guidesByCategory.filter((c) => groupSilos.has(c.category.slug));
          if (sections.length === 0) return null;
          return (
            <div key={group.slug} id={group.slug} className="space-y-14 border-t-2 border-ink pt-8">
              <div>
                <p className={`eyebrow ${group.slug === "rv" ? "!text-brand" : "!text-accent-dark"}`}>{group.name}</p>
                <p className="mt-1 text-lg text-ink-secondary">{group.tagline}</p>
              </div>
              {sections.map(({ category, guides: catGuides }) => (
                <section key={category.slug} aria-labelledby={`cat-${category.slug}`}>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 id={`cat-${category.slug}`} className="text-2xl font-bold text-ink tracking-tight mb-1">
                        {category.name}
                      </h2>
                      <p className="text-sm text-ink-secondary max-w-2xl">{category.shortDescription}</p>
                    </div>
                    <Link prefetch={false} href={`/${category.slug}`} className="hidden shrink-0 text-sm font-semibold sm:block">
                      See all →
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {catGuides.map((guide) => (
                      <GuideCard key={guide.slug} guide={guide} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          );
        })}

        {/* Browse all CTA */}
        <section className="pt-4 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-card bg-brand">
            <div>
              <p className="font-bold !text-white text-lg mb-1">Looking for more guides?</p>
              <p className="text-sm !text-white/70">
                We have <strong>{totalGuides} buying guides</strong> covering RV power, water, towing, care and comfort, plus tents, sleep, camp kitchens and trail gear.
              </p>
            </div>
            <Link prefetch={false}
              href="/guide/all"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-cta !text-white font-bold text-sm hover:bg-cta-dark transition-colors"
            >
              Browse all {totalGuides} guides
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </Container>
    </>
  );
}
