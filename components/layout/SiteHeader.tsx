import Link from "next/link";
import { pillarNav } from "@/data/nav";
import { Wordmark } from "./Wordmark";
import { MobileNav } from "./MobileNav";

export function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden className="h-5 w-5">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180 group-focus-within:rotate-180">
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const navLink = "rounded-md px-3 py-2 text-sm font-medium !text-white/75 transition-colors hover:bg-white/10 hover:!text-white focus-ring";

// Server component. Dark band header; the two pillar menus (RV Gear / Camping Gear)
// open on hover or keyboard focus with CSS only. Only the mobile toggle ships JS.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand text-ink-inverse">
      <div className="lab-stripe h-1" aria-hidden />
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Wordmark inverse />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 whitespace-nowrap">
            {pillarNav.map((pillar) => (
              <li key={pillar.slug} className="group relative">
                <Link prefetch={false} href={`/guide#${pillar.slug}`} className={`flex items-center gap-1.5 ${navLink}`}>
                  <span className={`h-2 w-2 rounded-full ${pillar.slug === "rv" ? "bg-[#4fae78]" : "bg-accent"}`} aria-hidden />
                  {pillar.label}
                  <Chevron />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 w-[36rem] pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-card border border-border bg-surface shadow-card-hover">
                    <div className="flex items-center justify-between gap-4 bg-bg px-5 py-3">
                      <p className="lab-spec text-ink-muted">{pillar.tagline}</p>
                      <Link prefetch={false} href={`/guide#${pillar.slug}`} className="lab-spec !text-cta hover:!text-cta-dark">All →</Link>
                    </div>
                    <ul className="grid grid-cols-2 gap-1 p-3">
                      {pillar.items.map((item) => (
                        <li key={item.href}>
                          <Link prefetch={false} href={item.href} className="group/item block rounded-lg px-3 py-2.5 hover:bg-bg focus-ring">
                            <span className="block text-sm font-semibold !text-ink group-hover/item:!text-cta-dark">{item.label}</span>
                            <span className="mt-0.5 block whitespace-normal text-xs leading-snug text-ink-secondary">{item.description}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
            <li><Link prefetch={false} href="/how-we-review" className={navLink}>How We Review</Link></li>
            <li><Link prefetch={false} href="/about" className={navLink}>About</Link></li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link prefetch={false} href="/guide" aria-label="Search guides" className="grid h-10 w-10 place-items-center rounded-md !text-white/80 hover:bg-white/10 hover:!text-white focus-ring">
            <SearchIcon />
          </Link>
          <Link prefetch={false} href="/guide/all" className="hidden rounded-btn bg-cta px-3.5 py-2 text-xs font-semibold !text-white transition-colors hover:bg-cta-dark sm:inline-flex">
            All Guides
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
