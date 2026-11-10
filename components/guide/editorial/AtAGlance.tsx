"use client";

import { useState } from "react";
import { SafeImage } from "@/components/editorial/SafeImage";

export interface AtAGlanceItem {
  rank: number;
  badge?: string;
  name: string;
  imageUrl: string;
  affiliateUrl: string;
  pros: string[];
  cons: string[];
  anchorId: string;
}

function Row({ item }: { item: AtAGlanceItem }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-border last:border-0">
      <div className="flex items-center gap-4 px-1 py-4">
        <span className="hidden w-6 shrink-0 text-center font-[family-name:var(--font-mono)] text-xs text-ink-muted sm:block">{String(item.rank).padStart(2, "0")}</span>
        <a href={`#${item.anchorId}`} aria-label={`Jump to the ${item.name} review`} className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-border bg-white transition-colors hover:border-cta">
          {item.imageUrl && <SafeImage src={item.imageUrl} alt={item.name} fill sizes="64px" className="object-contain p-1" unoptimized />}
        </a>
        <div className="min-w-0 flex-1">
          {item.badge && <a href={`#${item.anchorId}`} className="lab-spec mb-0.5 inline-block !text-cta-dark hover:!text-cta">{item.badge}</a>}
          <a href={`#${item.anchorId}`} className="line-clamp-2 block text-sm font-semibold leading-snug !text-ink hover:!text-cta-dark">{item.name}</a>
          <a href={`#${item.anchorId}`} className="mt-0.5 inline-block text-[11px] !text-ink-muted hover:!text-forest">↓ See why we picked it</a>
        </div>
        <a href={item.affiliateUrl} target="_blank" rel="nofollow sponsored noopener noreferrer" className="shrink-0 whitespace-nowrap rounded-btn bg-cta px-4 py-2 text-xs font-bold !text-white transition-colors hover:bg-cta-dark">
          Check price
        </a>
      </div>
      {(item.pros.length > 0 || item.cons.length > 0) && (
        <>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex w-full items-center justify-center gap-1.5 border-t border-dashed border-border py-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-ink-muted transition-colors hover:text-ink"
          >
            {open ? "Hide pros & cons" : "Show pros & cons"}
            <svg className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
            </svg>
          </button>
          {open && (
            <div className="grid grid-cols-2 gap-4 bg-bg px-4 pb-4 pt-3">
              <div>
                <p className="lab-spec mb-2 text-green-800">Pros</p>
                <ul className="space-y-1.5">{item.pros.map((t, i) => <li key={i} className="flex gap-1.5 text-xs text-ink"><span className="font-bold text-green-700">+</span>{t}</li>)}</ul>
              </div>
              <div>
                <p className="lab-spec mb-2 text-amber-800">Cons</p>
                <ul className="space-y-1.5">{item.cons.map((t, i) => <li key={i} className="flex gap-1.5 text-xs text-ink"><span className="font-bold text-amber-700">&minus;</span>{t}</li>)}</ul>
              </div>
            </div>
          )}
        </>
      )}
    </li>
  );
}

export function AtAGlance({ items }: { items: AtAGlanceItem[] }) {
  return (
    <div className="overflow-hidden rounded-card border border-border bg-surface shadow-card">
      <div className="flex items-center gap-2 bg-brand px-5 py-3.5">
        <svg className="h-4 w-4 shrink-0 text-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
        </svg>
        <p className="lab-spec !text-white">At a glance · {items.length} picks</p>
      </div>
      <ol className="px-4">{items.map((item) => <Row key={item.anchorId} item={item} />)}</ol>
    </div>
  );
}
