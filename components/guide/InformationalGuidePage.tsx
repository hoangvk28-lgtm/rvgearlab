import Link from "next/link";
import Image from "next/image";
import { readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { SITE_URL } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { getSiloBySlug, siloGroupOf } from "@/data/silos";
import { getInformationalGuidesBySilo } from "@/data/informational-guides";
import { getAuthorBySlug } from "@/data/authors";
import { getInformationalGuide, type InformationalGuide } from "@/data/informational-guides";
import { guides } from "@/data/guides";
import { canonicalGuideHref } from "@/lib/migrated-silos";
import { RichContent } from "@/components/ui/RichContent";


function headingId(value: string) {
  return value
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function plainText(value: string) {
  return value
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractFaq(markdown: string) {
  const block = markdown.match(/## (?:Frequently asked questions|FAQ)\s*\n([\s\S]*?)(?=\n## |$)/i)?.[1] ?? "";
  return [...block.matchAll(/^### (.+)\n([\s\S]*?)(?=\n### |$)/gm)].map((match) => ({
    question: plainText(match[1]),
    answer: plainText(match[2]),
  }));
}

function canonicalizeInternalLinks(html: string) {
  return html.replace(/href="\/([^"#?]+)\/?"/g, (match, rawSlug: string) => {
    const slug = rawSlug.replace(/^\/+|\/+$/g, "");
    if (slug.includes("/")) return match;
    const informational = getInformationalGuide(slug);
    if (informational) return `href="/${informational.silo}/${informational.slug}"`;
    const buyingGuide = guides.find((guide) => guide.slug === slug);
    if (buyingGuide) return `href="${canonicalGuideHref(buyingGuide)}"`;
    return match;
  });
}

function prepareImportedContent(contentFile: string) {
  const fullPath = path.join(process.cwd(), "public", "content", "informational", contentFile);
  const markdown = readFileSync(fullPath, "utf8").replace(/^# .+\n+/, "");
  const toc = [...markdown.matchAll(/^## (.+)$/gm)].map((match) => ({
    label: plainText(match[1]),
    id: headingId(plainText(match[1])),
  }));
  let html = marked.parse(markdown, { async: false }) as string;
  html = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_match, label: string) => `<h2 id="${headingId(label)}">${label}</h2>`);
  html = canonicalizeInternalLinks(html);
  return { html, toc, faq: extractFaq(markdown) };
}

export function InformationalGuidePage({ guide }: { guide: InformationalGuide }) {
  const silo = getSiloBySlug(guide.silo)!;
  const isCamping = siloGroupOf(guide.silo) === "camping";
  const author = getAuthorBySlug(isCamping ? "danny-walker" : "bowen-higgins")!;
  const INFORMATIONAL_AUTHOR = author.name;
  const INFORMATIONAL_AUTHOR_PATH = `/author/${author.slug}`;
  const canonicalUrl = `${SITE_URL}/${guide.silo}/${guide.slug}`;
  const imported = guide.contentFile ? prepareImportedContent(guide.contentFile) : null;
  const faqItems = imported?.faq.length ? imported.faq : guide.faq;
  const tocItems = imported?.toc ?? guide.sections.map((section, index) => ({ label: section.heading, id: `section-${index + 1}` }));
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.lastUpdated,
    dateModified: guide.lastUpdated,
    author: {
      "@type": author.isPerson ? "Person" : "Organization",
      name: INFORMATIONAL_AUTHOR,
      url: `${SITE_URL}${INFORMATIONAL_AUTHOR_PATH}`,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  const pillarLabel = isCamping ? "Camping Gear" : "RV Gear";
  const moreHowTo = getInformationalGuidesBySilo(guide.silo).filter((g) => g.slug !== guide.slug).slice(0, 4);
  const shopGuides = guides
    .filter((g) => g.subcategorySlug === guide.silo)
    .slice(0, 4)
    .map((g) => ({ title: g.title, href: canonicalGuideHref(g), description: g.description }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: silo.name, item: `${SITE_URL}/${silo.slug}` },
      { "@type": "ListItem", position: 3, name: guide.title, item: canonicalUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Header band ── */}
      <section className="relative overflow-hidden bg-brand text-ink-inverse">
        <div className="lab-grid-bg absolute inset-0" aria-hidden />
        <div className="absolute -left-24 -bottom-40 h-[24rem] w-[24rem] rounded-full bg-forest/40 blur-3xl" aria-hidden />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs">
            <ol className="flex flex-wrap items-center gap-1.5 text-white/45">
              <li><Link prefetch={false} href="/" className="!text-white/70 hover:!text-white">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link prefetch={false} href={`/guide#${isCamping ? "camping" : "rv"}`} className="!text-white/70 hover:!text-white">{pillarLabel}</Link></li>
              <li aria-hidden>/</li>
              <li><Link prefetch={false} href={`/${silo.slug}`} className="!text-white/70 hover:!text-white">{silo.name}</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-white/85">How-To</li>
            </ol>
          </nav>
          <div className={`grid items-center gap-10 ${guide.heroImage ? "lg:grid-cols-[1fr_380px]" : ""}`}>
            <div>
              <p className="lab-spec mb-3 text-cta">{isCamping ? "Practical Camping Guide" : "Practical RV Guide"} · {guide.readTime} read</p>
              <h1 className="mb-4 max-w-4xl text-[2rem] leading-[1.08] tracking-tight !text-white sm:text-[2.75rem] lg:text-[3.25rem]">{guide.title}</h1>
              <p className="max-w-2xl text-lg !text-white/70">{guide.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link prefetch={false} href={INFORMATIONAL_AUTHOR_PATH} className="group flex items-center gap-3">
                  <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-white/10 ring-2 ring-cta">
                    {author.avatarUrl ? (
                      <Image src={author.avatarUrl} alt={INFORMATIONAL_AUTHOR} fill sizes="44px" className="object-cover" />
                    ) : (
                      <Image src="/images/brand/mark.png" alt="" width={28} height={28} unoptimized />
                    )}
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-semibold !text-white group-hover:!text-cta">By {INFORMATIONAL_AUTHOR}</span>
                    <span className="lab-spec block normal-case !text-white/55">{author.role}</span>
                  </span>
                </Link>
                <span className="lab-spec !text-white/60">Updated <time dateTime={guide.lastUpdated}>{formatDate(guide.lastUpdated)}</time></span>
              </div>
            </div>
            {guide.heroImage && (
              <div className="relative h-60 overflow-hidden rounded-card bg-white">
                <Image src={guide.heroImage} alt={guide.title} fill priority sizes="(max-width: 1024px) 100vw, 380px" className="object-contain p-4" unoptimized />
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 max-w-[780px]">
            {!imported && guide.directAnswer && (
              <section aria-labelledby="quick-answer" className="mb-10 rounded-card border-l-4 border-cta bg-surface p-6 shadow-card">
                <p className="lab-spec mb-2 text-cta">Quick answer</p>
                <h2 id="quick-answer" className="sr-only">Quick answer</h2>
                <p className="text-[1.0625rem] leading-relaxed !text-ink">{guide.directAnswer}</p>
              </section>
            )}

            {!imported && guide.keyTakeaways.length > 0 && (
              <section aria-labelledby="key-takeaways" className="mb-10 rounded-card border border-border bg-surface p-6">
                <p className="lab-spec mb-1.5 text-forest">Key takeaways</p>
                <h2 id="key-takeaways" className="sr-only">Key takeaways</h2>
                <ul className="space-y-2.5">
                  {guide.keyTakeaways.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink">
                      <span aria-hidden className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-forest text-[11px] font-bold text-white">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {imported ? (
              <RichContent html={imported.html} className="lab-article" />
            ) : (
              <div className="lab-article">
                {guide.sections.map((section, index) => (
                  <section key={section.heading} id={`section-${index + 1}`} className="scroll-mt-28">
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                  </section>
                ))}
                {guide.faq.length > 0 && (
                  <section id="faq" className="scroll-mt-28">
                    <h2>Frequently asked questions</h2>
                    {guide.faq.map((item) => (
                      <div key={item.question}>
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                      </div>
                    ))}
                  </section>
                )}
              </div>
            )}

            {guide.sources.length > 0 && (
              <section className="mt-12 rounded-card border border-border bg-surface p-6" aria-labelledby="sources-heading">
                <p className="lab-spec mb-1.5 text-ink-muted">References</p>
                <h2 id="sources-heading" className="text-xl">Sources and further reading</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {guide.sources.map((source) => (
                    <li key={source.href}>
                      <a href={source.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                        {source.label}<span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {shopGuides.length > 0 && (
              <section className="mt-12 rounded-card bg-brand p-6 text-ink-inverse sm:p-8" aria-labelledby="shop-heading">
                <p className="lab-spec mb-2 text-cta">Ready to buy?</p>
                <h2 id="shop-heading" className="mb-5 text-2xl !text-white">Compare the gear: {silo.name}</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {shopGuides.map((g) => (
                    <Link prefetch={false} key={g.href} href={g.href} className="rounded-lg bg-white/[0.07] p-4 transition-colors hover:bg-white/[0.14]">
                      <p className="mb-1 text-sm font-semibold !text-white">{g.title}</p>
                      <p className="line-clamp-2 text-xs !text-white/60">{g.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {(guide.related.length > 0 || moreHowTo.length > 0) && (
              <section className="mt-12" aria-labelledby="related-heading">
                <p className="lab-spec mb-1.5 text-cta">Keep reading</p>
                <h2 id="related-heading" className="mb-5 text-2xl">More {silo.name} how-tos</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[...guide.related.map((r) => ({ title: r.title, href: r.href })), ...moreHowTo.map((g) => ({ title: g.title, href: `/${g.silo}/${g.slug}` }))]
                    .filter((item, idx, all) => all.findIndex((x) => x.href === item.href) === idx)
                    .slice(0, 6)
                    .map((item) => (
                      <Link prefetch={false} key={item.href} href={item.href} className="group flex items-center justify-between gap-3 rounded-card border border-border bg-surface p-4 transition-colors hover:border-cta">
                        <span className="text-sm font-semibold text-ink group-hover:text-cta-dark">{item.title}</span>
                        <span className="text-cta" aria-hidden>→</span>
                      </Link>
                    ))}
                </div>
              </section>
            )}
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              {tocItems.length > 0 && (
                <nav aria-label="On this page" className="max-h-[70vh] overflow-y-auto rounded-card border border-border bg-surface p-4">
                  <p className="lab-spec mb-3 text-ink-muted">On this page</p>
                  <ol className="space-y-0.5">
                    {tocItems.map((item) => (
                      <li key={item.id}><a href={`#${item.id}`} className="block py-1 text-sm leading-snug !text-ink-secondary hover:!text-cta-dark">{item.label}</a></li>
                    ))}
                  </ol>
                </nav>
              )}
              <Link prefetch={false} href={`/${silo.slug}`} className="block rounded-card bg-brand p-4 transition-colors hover:bg-brand-dark">
                <p className="lab-spec mb-1 text-cta">{pillarLabel}</p>
                <p className="text-sm font-semibold !text-white">Browse all {silo.name} guides →</p>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
