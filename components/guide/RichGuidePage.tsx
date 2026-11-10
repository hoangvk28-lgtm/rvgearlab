import Link from "next/link";
import Image from "next/image";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { AMAZON_TAG, withAmazonTag } from "@/lib/affiliate";
import { formatDate } from "@/lib/utils";
import { getGuideBySlug } from "@/lib/helpers";
import { canonicalGuidePath, siloForGuide } from "@/lib/migrated-silos";
import { getSiloBySlug, siloGroupOf } from "@/data/silos";
import { guideDeks } from "@/data/guide-deks";
import { guideSectionHeadings, type GuideSectionHeadings } from "@/lib/guide-headings";
import { SafeImage } from "@/components/editorial/SafeImage";
import { TrustBlock } from "@/components/editorial/TrustBlock";
import { AuthorBox } from "@/components/editorial/AuthorBox";
import { getAuthorByName, getAuthorBySlug } from "@/data/authors";
import { GuideProductPick, BuyButton } from "@/components/guide/editorial/GuideProductPick";
import { AtAGlance } from "@/components/guide/editorial/AtAGlance";
import { MobileProductCTA } from "@/components/guide/editorial/MobileProductCTA";

export interface GuideProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  imageUrl: string;
  amazonUrl: string;
  description: string;
  specs: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  /** Optional; rendered as "Skip if" only when a guide's data provides it. */
  skipIf?: string | string[];
  /** Optional short editorial verdict ("Our Take"); derived from the description when absent. */
  take?: string;
  /** Optional meaningful trade-off ("The Catch"); derived from the review when absent. */
  catch?: string;
  /** Optional one-sentence reason the pick is in the guide (Quick Picks). */
  summary?: string;
}

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export interface RichGuidePageProps {
  slug: string;
  guideTitle: string;
  /** Short label for breadcrumbs when the H1 is an editorial headline. */
  breadcrumbLabel?: string;
  metaDescription: string;
  mainKeyword?: string;
  introParagraphs?: string[];
  lastUpdated: string;
  readTime: string;
  heroImage: string;
  heroImageAlt?: string;
  products: GuideProduct[];
  howWeEvaluated?: { title: string; description: string }[];
  howToChoose?: HowToChooseSection[];
  buyingCriteria?: { criterion: string; explanation: string }[];
  faq?: { q: string; a: string }[];
  /** Editorial conclusion paragraphs; replaces the generated Bottom Line when present. */
  bottomLine?: string[];
  /** Per-guide overrides for generated section headings. */
  sectionHeadings?: Partial<GuideSectionHeadings>;
  relatedGuides?: { href: string; title: string }[];
}

// Mirrors scripts/generate-guide-page.mjs's toBreadcrumbTitle/toAmazonSearchQuery
// helpers, so demoted guides keep their breadcrumb and Amazon search link. Section
// headings come from lib/guide-headings.ts.
function toBreadcrumbTitle(guideTitle: string) {
  return guideTitle.replace(/^\d+\s+/, "").replace(/\s+in\s+2026$/i, "");
}

/**
 * Keep the full search topic intact while giving the on-page headline a
 * RV Gear Lab editorial voice distinct from the source registry.
 */
function toEditorialHeadline(guideTitle: string, group: "rv" | "camping") {
  const clean = guideTitle.replace(/\s*\(2026\)\s*$/i, "").trim();
  if (/^best\s+/i.test(clean)) {
    return `Our Guide to ${clean.replace(/^best\s+/i, "the Best ")}`;
  }
  return `${clean}: A Practical ${group === "camping" ? "Camping" : "RV"} Guide`;
}

function toAmazonSearchQuery(mainKeyword: string | undefined, slug: string) {
  const kw = mainKeyword || slug.replace(/^best-/, "").replace(/-/g, " ");
  return kw.replace(/\s+/g, "+");
}

const REMOVED_MARKETPLACE_CLAIM =
  "Compared using published specifications, included components, compatibility, and practical trade-offs.";
const NON_EDITORIAL_BULLET = /(?:review|rating|buyer feedback|customer feedback|recognized by|hgtv|usa today|price|pricing|costs? more|lowest cost|least expensive|budget pick)/i;

function cleanEditorialText(value: string | undefined, fallback: string) {
  return !value || value === REMOVED_MARKETPLACE_CLAIM ? fallback : value;
}

export function RichGuidePage(props: RichGuidePageProps) {
  const {
    slug, guideTitle, metaDescription, mainKeyword, readTime,
    heroImage, products: rawProducts, lastUpdated,
  } = props;
  const registryEntry = getGuideBySlug(slug);
  const group = siloGroupOf(registryEntry?.subcategorySlug);
  const isCamping = group === "camping";
  const author =
    getAuthorByName(registryEntry?.author ?? "") ??
    getAuthorBySlug(isCamping ? "danny-walker" : "bowen-higgins")!;
  const authorHref = `/author/${author.slug}`;
  const introParagraphs = props.introParagraphs ?? [];
  const products = rawProducts.map((product) => ({
    ...product,
    badge: cleanEditorialText(product.badge, "Also Consider"),
    description: cleanEditorialText(product.description, "This option is included for its documented specifications and fit for the job described in this guide."),
    bestFor: NON_EDITORIAL_BULLET.test(product.bestFor)
      ? "buyers comparing capacity, compatibility, included components and storage needs"
      : cleanEditorialText(product.bestFor, "buyers comparing capacity, compatibility, included components and storage needs"),
    pros: product.pros.filter((item) => item !== REMOVED_MARKETPLACE_CLAIM && !NON_EDITORIAL_BULLET.test(item)),
    cons: product.cons.filter((item) => item !== REMOVED_MARKETPLACE_CLAIM && !NON_EDITORIAL_BULLET.test(item)),
  }));
  const howWeEvaluated = (props.howWeEvaluated ?? []).map((item) => ({
    title: cleanEditorialText(item.title, "Documented specifications"),
    description: cleanEditorialText(item.description, "We compared capacity, compatibility, included components, operating limits and warranty documentation."),
  }));
  const howToChoose = (props.howToChoose ?? []).map((section) => ({
    ...section,
    subheading: cleanEditorialText(section.subheading, "Match the product to the job"),
    cards: section.cards?.map((card) => ({
      label: cleanEditorialText(card.label, "Verify before ordering"),
      text: cleanEditorialText(card.text, "Confirm dimensions, compatibility and included components for your setup."),
    })),
  }));
  const buyingCriteria = (props.buyingCriteria ?? []).map((item) => ({
    criterion: cleanEditorialText(item.criterion, "Verify the complete configuration"),
    explanation: cleanEditorialText(item.explanation, "Confirm capacity, dimensions, compatibility, included components, warranty coverage and storage requirements before choosing."),
  }));
  const faq = (props.faq ?? []).map((item) => ({
    q: cleanEditorialText(item.q, "What should I verify before ordering?"),
    a: cleanEditorialText(item.a, "Confirm the model number, dimensions, capacity, included components, compatibility, warranty coverage and storage requirements."),
  }));
  const relatedGuides = props.relatedGuides ?? [];

  const breadcrumbTitle = props.breadcrumbLabel ?? toBreadcrumbTitle(guideTitle);
  const editorialHeadline = toEditorialHeadline(guideTitle, group);
  const amazonQuery = toAmazonSearchQuery(mainKeyword, slug);
  const headings = guideSectionHeadings(breadcrumbTitle, props.sectionHeadings, group);
  const productNounPlural = breadcrumbTitle.replace(/^Best\s+/i, "").trim();

  // Canonical URL + breadcrumb parent come from where the guide is actually
  // served (its topic silo when migrated), not the legacy /guide/ path.
  const registryGuide = getGuideBySlug(slug);
  const canonicalPath = registryGuide ? canonicalGuidePath(registryGuide) : `/guide/${slug}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const siloSlug = registryGuide ? siloForGuide(registryGuide.categorySlug, registryGuide.subcategorySlug) : undefined;
  const parentSilo = siloSlug && canonicalPath.startsWith(`/${siloSlug}/`) ? getSiloBySlug(siloSlug) : undefined;
  const parent = parentSilo
    ? { name: parentSilo.name, href: `/${parentSilo.slug}` }
    : { name: "Buying Guides", href: "/guide" };
  const dek = guideDeks[slug] ?? metaDescription;

  // Related links stored as /guide/<slug> resolve to their canonical URL at render time.
  const resolveHref = (href: string) => {
    const m = href.match(/^\/guide\/([^/?#]+)(.*)$/);
    const g = m ? getGuideBySlug(m[1]) : undefined;
    return g ? canonicalGuidePath(g) + m![2] : href;
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guideTitle,
    description: metaDescription,
    datePublished: lastUpdated,
    dateModified: lastUpdated,
    author: author.isPerson
      ? { "@type": "Person", name: author.name, jobTitle: author.role, url: `${SITE_URL}${authorHref}` }
      : { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/about` },
    ...(heroImage?.startsWith("/") ? { image: `${SITE_URL}${heroImage}` } : {}),
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    about: [{ "@type": "Thing", name: breadcrumbTitle }],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: parent.name, item: `${SITE_URL}${parent.href}` },
      { "@type": "ListItem", position: 3, name: breadcrumbTitle, item: canonicalUrl },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: guideTitle,
    description: metaDescription,
    numberOfItems: products.length,
    itemListElement: products.map((p) => ({
      "@type": "ListItem",
      position: p.rank,
      name: `${p.name} - ${p.badge}`,
      url: `${canonicalUrl}#${p.id}`,
    })),
  };

  const firstPick = products[0];
  const distinguishingSpecs = products
    .slice(0, 3)
    .map((product) => product.specs[0])
    .filter((spec, index, all): spec is string => Boolean(spec) && all.indexOf(spec) === index);
  const firstTradeoff = products.flatMap((product) => product.cons).find(Boolean);
  const rigFitChecks: { label: string; text: string }[] = [];
  if (firstPick?.bestFor) {
    rigFitChecks.push({
      label: "Start with the job",
      text: `${firstPick.name} leads this shortlist for ${firstPick.bestFor}. Use that fit as a reference point, then compare the alternatives against your own space and workload.`,
    });
  }
  if (distinguishingSpecs.length > 0) {
    rigFitChecks.push({
      label: "Specs that separate the picks",
      text: `The first details to compare are ${distinguishingSpecs.join(", ")}. Confirm the exact model and included components before ordering.`,
    });
  }
  if (firstTradeoff) {
    rigFitChecks.push({ label: "Trade-off to plan for", text: firstTradeoff });
  }


  const pillarLabel = isCamping ? "Camping Gear" : "RV Gear";
  const heroIsPhoto = Boolean(heroImage) && heroImage.startsWith("/");
  const showHero = Boolean(heroImage) && !products.some((p) => p.imageUrl === heroImage);
  const tagged = products.map((p) => ({ ...p, href: withAmazonTag(p.amazonUrl) }));

  const tocItems = [
    { id: "top-picks", label: "Top picks" },
    ...(rigFitChecks.length > 0 ? [{ id: "rig-fit-check", label: isCamping ? "Campsite fit check" : "Rig fit check" }] : []),
    ...(buyingCriteria.length > 0 ? [{ id: "what-to-look-for", label: "What to look for" }] : []),
    { id: "our-picks", label: "Detailed reviews" },
    ...(howWeEvaluated.length > 0 ? [{ id: "how-we-chose", label: "How we chose" }] : []),
    ...(howToChoose.length > 0 ? [{ id: "comparison", label: "How to choose" }] : []),
    ...(faq.length > 0 ? [{ id: "faq", label: "FAQ" }] : []),
    { id: "bottom-line", label: "Bottom line" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* ── Header band ── */}
      <section className="relative overflow-hidden bg-brand text-ink-inverse">
        <div className="lab-grid-bg absolute inset-0" aria-hidden />
        <div className="absolute -right-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-cta/15 blur-3xl" aria-hidden />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs">
            <ol className="flex flex-wrap items-center gap-1.5 text-white/45">
              <li><Link prefetch={false} href="/" className="!text-white/70 hover:!text-white">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link prefetch={false} href={`/guide#${group}`} className="!text-white/70 hover:!text-white">{pillarLabel}</Link></li>
              <li aria-hidden>/</li>
              <li><Link prefetch={false} href={parent.href} className="!text-white/70 hover:!text-white">{parent.name}</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-white/85">{breadcrumbTitle}</li>
            </ol>
          </nav>
          <div className={`grid items-center gap-10 ${showHero ? "lg:grid-cols-[1fr_400px]" : ""}`}>
            <div>
              <p className="lab-spec mb-3 text-cta">Buying guide · {readTime} read · Updated {formatDate(lastUpdated)}</p>
              <h1 className="mb-4 max-w-4xl text-[2rem] leading-[1.08] tracking-tight !text-white sm:text-[2.75rem] lg:text-[3.25rem]">{editorialHeadline}</h1>
              <p className="max-w-2xl text-lg !text-white/70">{dek}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link prefetch={false} href={authorHref} className="group flex items-center gap-3">
                  {author.avatarUrl ? (
                    <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-cta">
                      <Image src={author.avatarUrl} alt={author.name} fill sizes="44px" className="object-cover" />
                    </span>
                  ) : (
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 ring-2 ring-cta">
                      <Image src="/images/brand/mark.svg" alt="" width={28} height={28} unoptimized />
                    </span>
                  )}
                  <span className="leading-tight">
                    <span className="block text-sm font-semibold !text-white group-hover:!text-cta">By {author.name}</span>
                    <span className="lab-spec block normal-case !text-white/55">{author.role}</span>
                  </span>
                </Link>
                <span className="lab-spec !text-white/60">{products.length} products compared</span>
                <span className="lab-spec !text-white/60">Spec-sheet researched</span>
              </div>
            </div>
            {showHero && (
              <div className={`relative h-64 overflow-hidden rounded-card ${heroIsPhoto ? "" : "bg-white p-4"}`}>
                <SafeImage
                  src={heroImage}
                  alt={props.heroImageAlt || breadcrumbTitle}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className={heroIsPhoto ? "object-cover" : "object-contain p-4"}
                  unoptimized={!heroIsPhoto}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0">
            <section id="top-picks" className="mb-12 scroll-mt-28">
              <SectionTitle kicker="At a glance" title="Our top picks" />
              <AtAGlance
                items={tagged.map((p) => ({
                  rank: p.rank,
                  badge: p.badge,
                  name: p.name,
                  imageUrl: p.imageUrl,
                  affiliateUrl: p.href,
                  pros: p.pros,
                  cons: p.cons,
                  anchorId: p.id,
                }))}
              />
            </section>

            {introParagraphs.length > 0 && (
              <section className="mb-12 max-w-[72ch] space-y-4 text-[1.0625rem] leading-relaxed">
                {introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
              </section>
            )}

            {rigFitChecks.length > 0 && (
              <section id="rig-fit-check" className="mb-12 scroll-mt-28 rounded-card border-l-4 border-forest bg-surface p-6 shadow-card">
                <p className="lab-spec mb-1.5 text-forest">RV Gear Lab field notes</p>
                <h2 className="text-2xl sm:text-[1.75rem]">{isCamping ? "The Campsite Fit Check" : "The Rig Fit Check"}</h2>
                <dl className="mt-4 divide-y divide-border">
                  {rigFitChecks.map((item) => (
                    <div key={item.label} className="py-3 sm:grid sm:grid-cols-[190px_1fr] sm:gap-6">
                      <dt className="font-semibold text-ink">{item.label}</dt>
                      <dd className="mt-1 text-[0.9375rem] leading-relaxed text-ink-secondary sm:mt-0">{item.text}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {buyingCriteria.length > 0 && (
              <section id="what-to-look-for" className="mb-14 scroll-mt-28">
                <SectionTitle kicker="Before you buy" title={headings.whatToLookFor} sub="Key buying criteria so you get the right fit the first time." />
                <ol className="space-y-4">
                  {buyingCriteria.map((item, i) => (
                    <li key={i} className="flex gap-4 rounded-card border border-border bg-surface p-5">
                      <span className="lab-spec grid h-8 w-8 shrink-0 place-items-center rounded bg-brand text-cta">{String(i + 1).padStart(2, "0")}</span>
                      <div className="min-w-0">
                        <h3 className="mb-1.5 text-lg">{item.criterion}</h3>
                        {item.explanation.split("\n\n").map((para, j) => (
                          <p key={j} className={`text-[0.9375rem] leading-relaxed ${j > 0 ? "mt-2" : ""}`}>{para}</p>
                        ))}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <TrustBlock group={group} />

            <section id="our-picks" className="mb-4 mt-14 scroll-mt-28">
              <SectionTitle kicker="Detailed reviews" title={`The ${products.length} best ${productNounPlural.toLowerCase()}, explained`} />
              {tagged.map((product) => (
                <GuideProductPick key={product.id} product={product} products={products} total={products.length} />
              ))}
            </section>

            {howWeEvaluated.length > 0 && (
              <section id="how-we-chose" className="mb-14 scroll-mt-28">
                <SectionTitle kicker="Methodology" title={headings.howWeChose} sub={`Each pick was assessed across ${howWeEvaluated.length} criteria weighted for real-world use.`} />
                <div className="grid gap-4 sm:grid-cols-2">
                  {howWeEvaluated.map((item, i) => (
                    <div key={i} className="rounded-card border border-border bg-surface p-5">
                      <p className="lab-spec mb-2 text-cta">{String(i + 1).padStart(2, "0")}</p>
                      <h3 className="mb-1.5 text-base">{item.title}</h3>
                      <p className="text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {howToChoose.length > 0 && (
              <section id="comparison" className="mb-14 scroll-mt-28">
                <SectionTitle kicker="Decision guide" title={headings.howToChoose} />
                <div className="space-y-10">
                  {howToChoose.map((sub, i) => (
                    <div key={i}>
                      <h3 className="mb-3 text-xl">{sub.subheading}</h3>
                      {sub.intro && <p className="mb-4 text-[0.9375rem] leading-relaxed">{sub.intro}</p>}
                      {sub.table && (
                        <div role="region" aria-label={`${sub.subheading} (table)`} tabIndex={0} className="mb-3 overflow-x-auto rounded-card border border-border bg-surface focus-ring">
                          <table className={`w-full text-sm ${sub.table.headers.length > 2 ? "min-w-[36rem]" : ""}`}>
                            <thead>
                              <tr className="bg-brand text-white">
                                {sub.table.headers.map((h, hi) => <th key={hi} scope="col" className="lab-spec px-4 py-3 text-left font-medium">{h}</th>)}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                              {sub.table.rows.map((row, ri) => (
                                <tr key={ri} className="hover:bg-cta-light/40">
                                  {row.map((cell, ci) =>
                                    ci === 0 ? (
                                      <th key={ci} scope="row" className="px-4 py-3 text-left align-top font-medium text-ink">{cell}</th>
                                    ) : (
                                      <td key={ci} className="px-4 py-3 align-top text-ink-secondary">{cell}</td>
                                    )
                                  )}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                      {sub.cards && (
                        <div className="mb-3 grid gap-4 sm:grid-cols-2">
                          {sub.cards.map((c, ci) => (
                            <div key={ci} className="rounded-card border border-border border-t-4 border-t-cta bg-surface p-5">
                              <p className="mb-1.5 font-[family-name:var(--font-display)] font-semibold text-ink">{c.label}</p>
                              <p className="text-sm leading-relaxed">{c.text}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {sub.note && <p className="rounded-lg border border-accent/30 bg-accent-light/60 px-4 py-3 text-sm !text-ink">{sub.note}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {faq.length > 0 && (
              <section id="faq" className="mb-14 scroll-mt-28">
                <SectionTitle kicker="FAQ" title="Before You Bring One Home" />
                <div className="space-y-3">
                  {faq.map((item, i) => (
                    <details key={i} className="group rounded-card border border-border bg-surface open:shadow-card" open={i === 0}>
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-[family-name:var(--font-display)] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                        <h3 className="text-base font-semibold sm:text-[1.0625rem]">{item.q}</h3>
                        <span className="text-xl leading-none text-cta transition-transform group-open:rotate-45" aria-hidden>+</span>
                      </summary>
                      <p className="px-5 pb-5 text-[0.9375rem] leading-relaxed">{item.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <section id="bottom-line" className="mb-14 scroll-mt-28 rounded-card bg-brand p-6 text-ink-inverse sm:p-8">
              <p className="lab-spec mb-2 text-cta">Bottom line</p>
              <h2 className="mb-5 text-2xl !text-white">The short version</h2>
              {props.bottomLine && props.bottomLine.length > 0 && (
                <div className="mb-5 space-y-3">
                  {props.bottomLine.map((p, i) => <p key={i} className="!text-white/75">{p}</p>)}
                </div>
              )}
              <ul className="space-y-3">
                {tagged.map((p) => (
                  <li key={p.id} className="flex flex-col justify-between gap-3 border-b border-white/10 pb-3 last:border-0 sm:flex-row sm:items-center">
                    <div>
                      <p className="lab-spec !text-white/50">{p.badge}</p>
                      <a href={`#${p.id}`} className="font-semibold !text-white hover:!text-cta">{p.name}</a>
                    </div>
                    <BuyButton href={p.href} name={p.name} label="Check price" compact />
                  </li>
                ))}
              </ul>
              <a
                href={`https://www.amazon.com/s?k=${amazonQuery}&tag=${AMAZON_TAG}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-6 inline-block text-sm !text-white/70 underline underline-offset-4 hover:!text-white"
              >
                Browse more {productNounPlural.toLowerCase()} on Amazon →
              </a>
            </section>

            <AuthorBox author={author} />

            {relatedGuides.length > 0 && (
              <section className="mt-14">
                <SectionTitle kicker="Keep reading" title="Related guides" />
                <div className="grid gap-3 sm:grid-cols-2">
                  {relatedGuides.map((g) => {
                    const isExternal = /^https?:\/\//.test(g.href);
                    const href = isExternal ? g.href : resolveHref(g.href);
                    const cls = "group flex items-center justify-between gap-3 rounded-card border border-border bg-surface p-4 transition-colors hover:border-cta";
                    const inner = (<><span className="text-sm font-semibold text-ink group-hover:text-cta-dark">{g.title}</span><span className="text-cta" aria-hidden>→</span></>);
                    return isExternal ? (
                      <a key={g.href} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                    ) : (
                      <Link prefetch={false} key={g.href} href={href} className={cls}>{inner}</Link>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <nav className="rounded-card border border-border bg-surface p-4" aria-label="On this page">
                <p className="lab-spec mb-3 text-ink-muted">On this page</p>
                <ul className="space-y-0.5">
                  {tocItems.map((t) => (
                    <li key={t.id}><a href={`#${t.id}`} className="block py-1 text-sm !text-ink-secondary hover:!text-cta-dark">{t.label}</a></li>
                  ))}
                </ul>
              </nav>
              {tagged[0] && (
                <div className="rounded-card border border-border bg-surface p-4">
                  <p className="lab-spec mb-2 text-cta">Top pick</p>
                  <div className="relative mb-3 h-32">
                    {tagged[0].imageUrl && <SafeImage src={tagged[0].imageUrl} alt={tagged[0].name} fill sizes="220px" className="object-contain" unoptimized />}
                  </div>
                  <p className="mb-3 text-sm font-semibold leading-snug text-ink">{tagged[0].name}</p>
                  <BuyButton href={tagged[0].href} name={tagged[0].name} label="Check price" />
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
      <MobileProductCTA items={tagged.map((p) => ({ id: p.id, name: p.name, amazonUrl: p.href }))} />
    </>
  );
}

function SectionTitle({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mb-6">
      <p className="lab-spec mb-1.5 text-cta">{kicker}</p>
      <h2 className="text-2xl tracking-tight sm:text-3xl">{title}</h2>
      {sub && <p className="mt-2 max-w-2xl text-sm">{sub}</p>}
    </div>
  );
}
