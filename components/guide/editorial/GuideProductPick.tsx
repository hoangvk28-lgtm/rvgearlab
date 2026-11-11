import type { GuideProduct } from "@/components/guide/RichGuidePage";
import { withAmazonTag } from "@/lib/affiliate";
import { SafeImage } from "@/components/editorial/SafeImage";

const MARKETPLACE_POINT = /(?:review|rating|buyer feedback|customer feedback|recognized by|hgTV|usa today|price|costs? more|least expensive)/i;
const REMOVED_CLAIM = "Compared using published specifications, included components, compatibility, and practical trade-offs.";

function lowerFirst(value: string) {
  const clean = value.trim().replace(/[.;,:]+$/, "");
  return clean ? `${clean[0].toLowerCase()}${clean.slice(1)}` : "";
}

function stableVariant(value: string) {
  return [...value].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 4;
}

function usablePoint(value: string) {
  return Boolean(value) && value !== REMOVED_CLAIM && !MARKETPLACE_POINT.test(value);
}

function firstMeasurement(product: GuideProduct) {
  for (const spec of product.specs) {
    const match = spec.match(/(\d+(?:\.\d+)?)\s*(ft|feet|inches|inch|in\.?|lb|lbs|psi|v|ah|gal|gallon|minutes?|mins?|mph|cfm)\b/i);
    if (match) return { value: Number(match[1]), unit: match[2].toLowerCase().replace(/\.$/, ""), label: spec };
  }
  return null;
}

function comparisonNote(product: GuideProduct, siblings: GuideProduct[]) {
  const current = firstMeasurement(product);
  if (!current) return null;
  const comparable = siblings
    .map((item) => ({ item, measurement: firstMeasurement(item) }))
    .filter((entry): entry is { item: GuideProduct; measurement: NonNullable<ReturnType<typeof firstMeasurement>> } =>
      Boolean(entry.measurement && entry.measurement.unit === current.unit)
    );
  if (comparable.length < 2) return null;

  const ordered = comparable.sort((a, b) => a.measurement.value - b.measurement.value);
  const values = ordered.map((entry) => entry.measurement.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const currentIndex = ordered.findIndex((entry) => entry.item.id === product.id);
  const previous = ordered[currentIndex - 1]?.measurement.label;
  const next = ordered[currentIndex + 1]?.measurement.label;

  const unitContext = /^(ft|feet)$/.test(current.unit)
    ? current.value === min
      ? `At ${current.label}, this is the shortest directly comparable option. It favors easier handling and storage, but gives up reach.`
      : current.value === max
        ? `At ${current.label}, this is the longest directly comparable option. It favors reach, while requiring more room to drain, coil and store.`
        : currentIndex < ordered.length / 2
          ? `${current.label} steps up in reach from ${previous} without moving as far as ${next}. It stays on the easier-to-handle side of this shortlist.`
          : `${current.label} reaches farther than ${previous} but remains easier to manage than ${next}. It sits on the longer-reach side of this shortlist.`
    : /^(inch|inches|in)$/.test(current.unit)
      ? "Check that dimension against access points, working space and storage before choosing."
      : /^(v|ah)$/.test(current.unit)
        ? "Treat the battery platform and included charger as part of the fit, not just the headline number."
        : /^(lb|lbs)$/.test(current.unit)
          ? "Confirm whether that figure refers to tool weight or working capacity before comparing it directly."
          : "Use that number as a comparison point, then verify how it applies to your actual workload.";

  if (/^(ft|feet)$/.test(current.unit)) return unitContext;
  const position = current.value === min && current.value === max
    ? "the same documented level as the comparable picks"
    : current.value === min
      ? "the lower end of the comparable range"
      : current.value === max
        ? "the upper end of the comparable range"
        : "between the lower and upper ends of the comparable range";
  return `Its ${current.label} specification sits at ${position} in this ${comparable.length}-product comparison. ${unitContext}`;
}

function fallbackComparison(product: GuideProduct, siblings: GuideProduct[], specs: string[]) {
  const comparisonBasis = specs.length > 0
    ? specs.slice(0, 2).map(lowerFirst).join(" and ")
    : "the documented configuration and included components";
  const alternatives = Math.max(0, siblings.length - 1);

  if (alternatives > 0) {
    return `Against the other ${alternatives} picks, the useful comparison starts with ${comparisonBasis}. Those details show whether its configuration suits the job better than a neighboring recommendation.`;
  }
  return `The useful comparison starts with ${comparisonBasis}. Match those details to the size and frequency of the work rather than relying on the category label alone.`;
}

function verificationNote(product: GuideProduct) {
  const measurement = firstMeasurement(product);
  const unit = measurement?.unit;

  if (unit && /^(ft|feet)$/.test(unit)) {
    return "Measure the actual run from the hookup or outlet to where the gear will sit before choosing this length, and leave slack for uneven sites.";
  }
  if (unit && /^(inch|inches|in)$/.test(unit)) {
    return "Measure the narrowest access point and the available storage footprint before ordering. Confirm what the stated dimension refers to on the exact model and configuration.";
  }
  if (unit && /^(v|ah)$/.test(unit)) {
    return "Confirm whether the battery and charger are included with the exact package. Check platform compatibility and published runtime against the area or workload you need to cover.";
  }
  if (unit && /^(psi|cfm|mph)$/.test(unit)) {
    return "Match the stated output to the material and cleanup task you expect to handle. Confirm the included nozzle or attachments and any operating limits for the exact model.";
  }
  if (unit && /^(lb|lbs)$/.test(unit)) {
    return "Confirm whether the stated figure refers to product weight or rated working capacity. Compare it with your lifting, transport and support requirements before deciding.";
  }
  if (unit && /^(gal|gallon)$/.test(unit)) {
    return "Check whether the stated capacity leaves enough working margin for your routine. Also account for the filled weight, footprint and the space needed to empty or clean it.";
  }
  if (unit && /^(minute|minutes|min|mins)$/.test(unit)) {
    return "Compare the stated operating time with the length of a typical session. Confirm recharge time and whether a spare power source is practical for longer jobs.";
  }
  return "Confirm the exact model number and included components before ordering. Check dimensions, compatibility and maintenance needs against the way you plan to use and store it.";
}

function buildEditorialReview(product: GuideProduct, siblings: GuideProduct[]) {
  const strengths = product.pros.filter(usablePoint);
  const specs = product.specs.filter(usablePoint).slice(0, 3);
  const lead = strengths[0] ?? specs[0] ?? `a configuration suited to ${product.bestFor}`;
  const specLine = specs.length > 0
    ? `The documented setup centers on ${specs.map(lowerFirst).join(", ")}.`
    : "Confirm the exact configuration and included components before ordering.";
  const fit = product.bestFor || "buyers comparing the core specifications and fit";
  const relativePosition = comparisonNote(product, siblings) ?? fallbackComparison(product, siblings, specs);
  const verification = verificationNote(product);
  const variant = stableVariant(product.id || product.name);

  const fitParagraphs = [
    `This model is aimed at ${fit}. ${specLine}`,
    `For ${fit}, this is one of the more relevant configurations in the shortlist. ${specLine}`,
    `The intended use case is ${fit}. ${specLine}`,
    `${product.name} is positioned for ${fit}. ${specLine}`,
  ];
  const strengthOpeners = [
    `The most useful documented advantage is ${lowerFirst(lead)}.`,
    `Its case starts with ${lowerFirst(lead)}.`,
    `What separates it on paper is ${lowerFirst(lead)}.`,
    `The feature doing most of the work here is ${lowerFirst(lead)}.`,
  ];
  // "Why it made the shortlist" argues for the pick only; limitations live in the Cons list and "Skip if".
  const finalParagraph = verification;

  const variants = [
    {
      verdict: `${product.name} makes the shortlist because ${lowerFirst(lead)}.`,
    },
    {
      verdict: `The strongest case for ${product.name} is ${lowerFirst(lead)}.`,
    },
    {
      verdict: `${product.name} is the better fit when ${lowerFirst(fit)}.`,
    },
    {
      verdict: `Choose ${product.name} for ${lowerFirst(lead)}.`,
    },
  ];
  return {
    verdict: variants[variant].verdict,
    rest: [
      fitParagraphs[variant],
      `${strengthOpeners[variant]} ${relativePosition}`,
      finalParagraph,
    ],
  };
}

const toList = (v?: string | string[]) => (Array.isArray(v) ? v : v ? [v] : []);

// Sentences that argue against a pick (caveats, missing specs, price/weight penalties). "Why it made the
// shortlist" only makes the case for the product; limitations are shown in Cons and "Skip if".
const LIMITATION = /\b(caveat|catch|downside|drawback|limitation|trade-?off|weak(er|ness)?|lacks?|lacking|missing|omit(s|ted)?|not (listed|stated|named|given|included|specified|published|clear|mentioned|confirmed)|does ?n[o']t|doesn't|is ?n[o']t|isn't|cannot|can't|no (stated|listed|published|named|warranty|gauge|app|remote|display)|leaves? out|thin(ner)? (spec|listing|detail)|costs? (more|extra)|pricier|more expensive|heavier|bulkier|louder|shorter|smaller|fewer|less (detail|info|document)|confirm|verify|check (the|with|before)|ask the seller|skip (it|this)|however|unfortunately|though|although|but|only|twice|double|premium|treat (it|the|this)|listing claim|cut off|before (buying|ordering|you buy)|read the|be aware|keep in mind|watch (for|out))\b/i;

const SPLIT_SENTENCES = /(?<=[.!?]["')\]]?)\s+(?=[A-Z0-9"'(])/;

/** Splits a written description into the positive case (kept) and its limitation sentences (dropped). */
function splitDescription(description?: string): { paragraphs: string[][]; limitations: string[] } {
  const paragraphs: string[][] = [];
  const limitations: string[] = [];
  if (!description) return { paragraphs, limitations };
  for (const para of description.split(/\n\s*\n/)) {
    const kept: string[] = [];
    for (const raw of para.split(SPLIT_SENTENCES)) {
      const sentence = raw.trim();
      if (!sentence) continue;
      if (LIMITATION.test(sentence)) limitations.push(sentence);
      else kept.push(sentence);
    }
    paragraphs.push(kept);
  }
  return { paragraphs, limitations };
}

// A real trade-off for this product (not a sentence praising it against a rival).
const CATCH = /\b(trade-?off|catch|downside|drawback|heav(y|ier)|bulk(y|ier)|loud(er)?|costs? (more|extra)|pricier|more expensive|not (ideal|built|meant|designed|the best)|lacks?|no (stated|listed|warranty)|does ?n[o']t (lock|fold|include|come|state|list)|only (one|a|for|works|suits)|limited|shorter|smaller|fewer|takes (longer|up))\b/i;
const COMPARATIVE_PRAISE = /\b(unlike|than the|does not offer|doesn't offer|that the [A-Z]|which the [A-Z])\b/;

const wordCount = (t: string) => t.split(/\s+/).filter(Boolean).length;


/**
 * One product recommendation in editorial form: large image (~38%) beside the
 * verdict and reasoning (~62%). Stacks image → info → pros/cons → CTA on
 * phones. Exactly one commerce CTA per product.
 */
const AMAZON_REL = "nofollow sponsored noopener noreferrer";

export function GuideProductPick({ product: p, products, total }: { product: GuideProduct; products: GuideProduct[]; total: number }) {
  const { verdict, rest: templateRest } = buildEditorialReview(p, products);
  const { paragraphs, limitations } = splitDescription(p.description);
  const written = paragraphs.map((sentences) => sentences.join(" ")).filter((para) => wordCount(para) >= 8);

  // Our Take: the opening sentence of the "who it suits" paragraph (last one), removed from the body so it isn't repeated.
  const takeSource = paragraphs.length >= 2 ? paragraphs[paragraphs.length - 1] : paragraphs[0] ?? [];
  const take = p.take ?? (takeSource[0] && wordCount(takeSource[0]) >= 6 ? takeSource[0] : verdict);
  const body = written.length > 0
    ? paragraphs
        .map((sentences, i) => (i === paragraphs.length - 1 && take === takeSource[0] ? sentences.slice(1) : sentences).join(" "))
        .filter((para) => wordCount(para) >= 8)
    : templateRest;
  // The Catch: an explicit trade-off, or the first substantive limitation sentence from the review.
  const theCatch = p.catch ?? limitations.find((t) => wordCount(t) >= 8 && wordCount(t) <= 40 && CATCH.test(t) && !COMPARATIVE_PRAISE.test(t));
  const skipIf = toList(p.skipIf);
  const amazonHref = withAmazonTag(p.amazonUrl);

  return (
    <article id={p.id} aria-labelledby={`${p.id}-name`} className="mb-10 scroll-mt-28 overflow-hidden rounded-card border border-border bg-surface shadow-card">
      <header className="flex items-center gap-4 bg-brand px-5 py-4 text-white">
        <span className="font-[family-name:var(--font-display)] text-3xl font-bold leading-none tabular-nums text-cta">{String(p.rank).padStart(2, "0")}</span>
        <div className="min-w-0">
          <p className="lab-spec !text-white/60">{p.badge} <span className="normal-case">· {p.rank} of {total}</span></p>
          <h3 id={`${p.id}-name`} className="break-words text-lg leading-snug !text-white sm:text-xl">
            <a href={amazonHref} target="_blank" rel={AMAZON_REL} className="!text-white decoration-2 underline-offset-4 hover:!text-cta hover:underline">
              {p.name}
            </a>
          </h3>
        </div>
      </header>

      <div className="grid md:grid-cols-[260px_1fr]">
        <div className="flex flex-col gap-4 border-b border-border p-5 md:border-b-0 md:border-r">
          <a
            href={amazonHref}
            target="_blank"
            rel={AMAZON_REL}
            aria-label={`${p.name} on Amazon (opens in a new tab)`}
            className="group relative block h-56 overflow-hidden rounded-lg border border-transparent bg-white transition-colors hover:border-cta focus-ring"
          >
            {p.imageUrl && (
              <SafeImage src={p.imageUrl} alt={p.name} fill sizes="260px" className="object-contain p-3 transition-transform duration-300 group-hover:scale-105" unoptimized />
            )}
          </a>
          {p.specs.length > 0 && (
            <ul className="flex flex-wrap gap-1.5" aria-label="Key specs">
              {p.specs.map((s, i) => (
                <li key={i} className="rounded border border-border bg-bg px-2 py-1 font-[family-name:var(--font-mono)] text-[0.6875rem] leading-snug text-ink">{s}</li>
              ))}
            </ul>
          )}
          <BuyButton href={amazonHref} name={p.name} />
        </div>

        <div className="min-w-0 p-5 sm:p-6">
          {p.bestFor && (
            <div className="mb-4 rounded-lg border border-cta/20 bg-cta-light px-4 py-3 text-sm text-ink">
              <span className="font-semibold">Best for:</span> {p.bestFor.charAt(0).toUpperCase() + p.bestFor.slice(1)}
            </div>
          )}

          {take && (
            <div className="mb-5 border-l-4 border-forest pl-4">
              <p className="lab-spec text-forest">Our take</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-[1.0625rem] font-medium leading-snug !text-ink">{take}</p>
            </div>
          )}

          {body.length > 0 && (
            <section className="mb-5">
              <p className="lab-spec mb-2 text-ink-muted">Why it made the shortlist</p>
              <div className="space-y-3">
                {body.map((para, i) => (
                  <p key={i} className="text-[0.9375rem] leading-relaxed">{para}</p>
                ))}
              </div>
            </section>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            {p.pros.length > 0 && (
              <div className="rounded-lg border border-green-200 bg-green-50/60 p-4">
                <p className="lab-spec mb-2 text-green-800">What works</p>
                <ul className="space-y-1.5">
                  {p.pros.map((t, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink"><span className="font-bold text-green-700" aria-hidden>+</span>{t}</li>
                  ))}
                </ul>
              </div>
            )}
            {p.cons.length > 0 && (
              <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-4">
                <p className="lab-spec mb-2 text-amber-800">Watch out for</p>
                <ul className="space-y-1.5">
                  {p.cons.map((t, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink"><span className="font-bold text-amber-700" aria-hidden>&minus;</span>{t}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {(theCatch || skipIf.length > 0) && (
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              {theCatch && (
                <div className="rounded-lg bg-bg px-4 py-3">
                  <dt className="lab-spec text-accent-dark">The catch</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink">{theCatch}</dd>
                </div>
              )}
              {skipIf.length > 0 && (
                <div className="rounded-lg bg-bg px-4 py-3">
                  <dt className="lab-spec text-ink-muted">Skip if</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink">{skipIf.join(" ")}</dd>
                </div>
              )}
            </dl>
          )}

          <div className="mt-5 md:hidden">
            <BuyButton href={amazonHref} name={p.name} />
          </div>
        </div>
      </div>
    </article>
  );
}

const AMAZON_ICON = (
  <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.26 18.36C9.18 20.34 4.76 21.38 1 20.16c-.38-.13-.33-.44.08-.35 3.47.67 7.77-.07 10.6-1.82.47-.27.87.17.58.37zm1.06-1.17c-.43-.56-2.85-.27-3.94-.13-.33.04-.38-.25-.08-.46 1.93-1.36 5.1-.97 5.47-.51.37.46-.1 3.63-1.91 5.14-.28.23-.54.11-.42-.2.41-.98 1.32-3.28.88-3.84z" />
  </svg>
);

export function BuyButton({ href, name, label = "Check price on Amazon", compact = false }: { href: string; name?: string; label?: string; compact?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel={AMAZON_REL}
      className={`inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-btn bg-cta !text-white transition-colors hover:bg-cta-dark focus-ring ${compact ? "px-4 py-2 text-xs font-bold" : "w-full px-5 py-3 text-sm font-semibold"}`}
    >
      {AMAZON_ICON}
      {label}
      {name && <span className="sr-only"> for {name} (opens in a new tab)</span>}
    </a>
  );
}
