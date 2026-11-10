import Image from "next/image";
import Link from "next/link";

/**
 * Brand lockup: RV Gear Lab mark + text wordmark. `inverse` is for the dark
 * header/footer bands. The whole lockup links home.
 */
export function Wordmark({ size = "md", inverse = false }: { size?: "md" | "sm"; inverse?: boolean }) {
  const md = size === "md";
  return (
    <Link prefetch={false} href="/" aria-label="RV Gear Lab — home" className="group inline-flex items-center gap-2.5 focus-ring">
      <Image
        src="/images/brand/mark.svg"
        alt=""
        width={96}
        height={96}
        priority={md}
        unoptimized
        className={`${md ? "h-10 w-10 rounded-[9px]" : "h-9 w-9 rounded-[8px]"} shrink-0 ring-1 ring-white/10 transition-transform duration-200 group-hover:scale-[1.04]`}
      />
      <span className="flex flex-col">
        <span
          className={`font-[family-name:var(--font-display)] whitespace-nowrap font-bold leading-none tracking-[-0.02em] ${inverse ? "text-white" : "text-ink"} ${md ? "text-[1.25rem] sm:text-[1.4375rem]" : "text-[1.25rem]"}`}
        >
          RV Gear <span className="text-cta">Lab</span>
        </span>
        <span className={`mt-1 hidden whitespace-nowrap font-[family-name:var(--font-mono)] text-[0.625rem] uppercase leading-none tracking-[0.12em] sm:block ${inverse ? "text-white/55" : "text-ink-muted"}`}>
          RV · Camping · Gear Guides
        </span>
      </span>
    </Link>
  );
}
