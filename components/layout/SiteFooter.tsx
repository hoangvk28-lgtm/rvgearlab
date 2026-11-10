import Link from "next/link";
import { pillarNav, companyNav } from "@/data/nav";
import { Wordmark } from "./Wordmark";

const linkCls = "text-sm !text-white/70 transition-colors hover:!text-white focus-ring";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-brand text-ink-inverse">
      <div className="lab-stripe h-1" aria-hidden />
      <div className="border-b border-white/10 bg-black/20">
        <p className="mx-auto max-w-[1280px] px-4 py-3 text-center text-xs !text-white/60 sm:px-6 lg:px-8">
          RV Gear Lab is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no extra
          cost to you. This never influences what we recommend.{" "}
          <Link prefetch={false} href="/affiliate-disclosure" className="font-semibold !text-white/85 underline underline-offset-2 hover:!text-white">
            Affiliate disclosure
          </Link>
        </p>
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Wordmark size="sm" inverse />
            <p className="mt-4 max-w-sm text-sm leading-relaxed !text-white/65">
              Gear guides for the road and the campsite: RV power, water, towing and upkeep, plus tents, sleep systems, camp kitchens
              and trail gear, compared on real specs and trade-offs.
            </p>
          </div>
          {pillarNav.map((pillar) => (
            <nav key={pillar.slug} aria-labelledby={`footer-${pillar.slug}`}>
              <h2 id={`footer-${pillar.slug}`} className="lab-spec mb-4 flex items-center gap-2 !text-white">
                <span className={`h-2 w-2 rounded-full ${pillar.slug === "rv" ? "bg-[#4fae78]" : "bg-accent"}`} aria-hidden />
                {pillar.label}
              </h2>
              <ul className="space-y-2.5">
                {pillar.items.map((l) => (
                  <li key={l.href}><Link prefetch={false} href={l.href} className={linkCls}>{l.label}</Link></li>
                ))}
              </ul>
            </nav>
          ))}
          <nav aria-labelledby="footer-company">
            <h2 id="footer-company" className="lab-spec mb-4 !text-white">RV Gear Lab</h2>
            <ul className="space-y-2.5">
              <li><Link prefetch={false} href="/guide/all" className={linkCls}>All Guides</Link></li>
              {companyNav.map((l) => (
                <li key={l.label}><Link prefetch={false} href={l.href} className={linkCls}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs !text-white/55">© {year} RV Gear Lab. All rights reserved.</p>
          <p className="max-w-md text-xs !text-white/45 sm:text-right">
            Amazon and the Amazon logo are trademarks of Amazon.com, Inc. Product images shown are representative.
          </p>
        </div>
      </div>
    </footer>
  );
}
