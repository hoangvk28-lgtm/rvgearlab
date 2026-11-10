"use client";

import { useEffect, useState } from "react";

interface Item { id: string; name: string; amazonUrl: string }

/** Mobile-only bar pinned to the bottom while a product review is on screen. */
export function MobileProductCTA({ items }: { items: Item[] }) {
  const [current, setCurrent] = useState<Item | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    if (!els.length) return;
    const onScroll = () => {
      const probe = window.innerHeight * 0.4;
      let hit: Item | null = null;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.top <= probe && r.bottom >= probe) { hit = items.find((i) => i.id === el.id) ?? null; break; }
      }
      setCurrent(hit);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  if (dismissed || !current) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 lg:hidden" style={{ paddingBottom: "max(env(safe-area-inset-bottom), 10px)" }}>
      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-brand/95 px-4 py-2.5 shadow-xl backdrop-blur-sm">
        <p className="min-w-0 flex-1 truncate text-sm font-semibold !text-white">{current.name}</p>
        <a href={current.amazonUrl} target="_blank" rel="nofollow sponsored noopener noreferrer" className="shrink-0 rounded-btn bg-cta px-3 py-2 text-xs font-bold !text-white hover:bg-cta-dark">Check price</a>
        <button type="button" onClick={() => setDismissed(true)} className="shrink-0 text-lg leading-none text-white/50 hover:text-white" aria-label="Dismiss">×</button>
      </div>
    </div>
  );
}
