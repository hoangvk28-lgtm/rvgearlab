import Link from "next/link";
import { Container } from "@/components/layout/Container";
import Image from "next/image";
import { silos, siloGroups, type Silo } from "@/data/silos";

export interface SiloHubGuide {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  kind?: "how-to" | "buying";
  image?: string;
  /** Override for aggregate hubs whose guides live under another path. */
  href?: string;
}

// Shared scaffold for every topic-first silo hub (RV and Camping pillars).
// Each silo's page.tsx renders this with its own copy; guide/review/comparison
// content gets wired in separately once it's migrated into each silo. Once a
// silo has migrated guides, pass them via `guides` to list them instead of the
// "coming soon" placeholder.
export function SiloHub({ silo, guides }: { silo: Silo; guides?: SiloHubGuide[] }) {
  const group = siloGroups.find((g) => g.slug === silo.group);
  const sameGroup = silos.filter((s) => s.slug !== silo.slug && s.group === silo.group);
  const otherGroup = siloGroups.find((g) => g.slug !== silo.group);
  const crossSilos = silos.filter((s) => s.group !== silo.group);

  const buying = (guides ?? []).filter((g) => g.kind !== "how-to");
  const howTo = (guides ?? []).filter((g) => g.kind === "how-to");
  const isRv = silo.group === "rv";

  return (
    <>
    <section className="relative overflow-hidden bg-brand text-ink-inverse">
      <div className="lab-grid-bg absolute inset-0" aria-hidden />
      <div className={`absolute -right-24 -top-32 h-[24rem] w-[24rem] rounded-full blur-3xl ${isRv ? "bg-forest/50" : "bg-accent/25"}`} aria-hidden />
      <Container className="relative py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs">
          <ol className="flex flex-wrap items-center gap-1.5 text-white/45">
            <li><Link prefetch={false} href="/" className="!text-white/70 hover:!text-white">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link prefetch={false} href={`/guide#${silo.group}`} className="!text-white/70 hover:!text-white">{group?.name}</Link></li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-white/85">{silo.name}</li>
          </ol>
        </nav>
        <p className="lab-spec mb-3 flex items-center gap-2 text-cta">
          <span className={`h-2 w-2 rounded-full ${isRv ? "bg-[#4fae78]" : "bg-accent"}`} aria-hidden />
          {group?.name} · {buying.length} buying guides · {howTo.length} how-tos
        </p>
        <h1 className="mb-3 !text-white">{silo.name}</h1>
        <p className="max-w-2xl text-lg !text-white/70">{silo.description}</p>
      </Container>
    </section>

    <Container className="py-12">
      {buying.length === 0 && howTo.length === 0 && (
        <div className="mb-14 rounded-card border border-dashed border-border bg-surface p-8 text-center">
          <p className="text-sm text-ink-muted">Guides for this section are being organized here. Check back soon.</p>
        </div>
      )}

      {buying.length > 0 && (
        <section className="mb-14">
          <p className="lab-spec mb-1.5 text-cta">Buying guides</p>
          <h2 className="mb-6 text-2xl sm:text-3xl">Best {silo.name.toLowerCase()} picks</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {buying.map((guide) => {
              const isPhoto = Boolean(guide.image?.startsWith("/"));
              return (
                <Link
                  prefetch={false}
                  key={guide.slug}
                  href={guide.href ?? `/${silo.slug}/${guide.slug}`}
                  className="group flex flex-col overflow-hidden rounded-card border border-border bg-surface transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  {guide.image && (
                    <span className="relative block h-40 border-b border-border bg-white">
                      <Image src={guide.image} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" className={`${isPhoto ? "object-cover" : "object-contain p-5"} transition-transform duration-300 group-hover:scale-105`} unoptimized={!isPhoto} />
                    </span>
                  )}
                  <span className="flex flex-1 flex-col gap-2 p-5">
                    <span className="font-[family-name:var(--font-display)] text-base font-semibold leading-snug text-ink transition-colors group-hover:text-cta-dark">{guide.title}</span>
                    <span className="line-clamp-2 flex-1 text-xs leading-relaxed text-ink-secondary">{guide.description}</span>
                    <span className="lab-spec text-ink-muted">{guide.readTime} read</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {howTo.length > 0 && (
        <section className="mb-14">
          <p className="lab-spec mb-1.5 text-forest">How-to &amp; explainers</p>
          <h2 className="mb-6 text-2xl sm:text-3xl">Know-how for {silo.name.toLowerCase()}</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {howTo.map((guide) => (
              <Link
                prefetch={false}
                key={guide.slug}
                href={guide.href ?? `/${silo.slug}/${guide.slug}`}
                className="group flex items-start justify-between gap-4 rounded-card border border-border bg-surface p-4 transition-colors hover:border-cta"
              >
                <span className="min-w-0">
                  <span className="block text-sm font-semibold leading-snug text-ink group-hover:text-cta-dark">{guide.title}</span>
                  <span className="lab-spec mt-1 block text-ink-muted">{guide.readTime} read</span>
                </span>
                <span className="text-cta" aria-hidden>→</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-xl font-bold text-ink mb-4 tracking-tight">More {group?.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sameGroup.map((s) => (
            <Link
              prefetch={false}
              key={s.slug}
              href={`/${s.slug}`}
              className="group flex flex-col rounded-card border border-border border-t-4 border-t-cta bg-surface p-4 transition-all hover:shadow-card-hover"
            >
              <span className="font-semibold text-ink text-sm group-hover:text-cta-dark transition-colors">{s.name}</span>
              <span className="text-xs text-ink-muted mt-0.5">{s.tagline}</span>
            </Link>
          ))}
        </div>
      </section>

      {otherGroup && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-ink mb-4 tracking-tight">Also on RV Gear Lab: {otherGroup.name}</h2>
          <ul className="flex flex-wrap gap-2">
            {crossSilos.map((s) => (
              <li key={s.slug}>
                <Link prefetch={false} href={`/${s.slug}`} className="inline-block rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium !text-ink hover:!text-brand hover:border-brand/40">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
    </>
  );
}
