import Image from "next/image";
import Link from "next/link";
import type { Author } from "@/data/authors";

/** Author card shown at the end of guides. */
export function AuthorBox({ author }: { author: Author }) {
  const href = `/author/${author.slug}`;
  return (
    <section aria-labelledby="about-author" className="flex flex-col gap-5 rounded-card border border-border bg-surface p-6 sm:flex-row">
      <Link prefetch={false} href={href} className="relative grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-full bg-brand ring-4 ring-cta/25">
        {author.avatarUrl ? (
          <Image src={author.avatarUrl} alt={`${author.name}, ${author.role}`} fill sizes="80px" className="object-cover" />
        ) : (
          <Image src="/images/brand/mark.png" alt="" width={48} height={48} unoptimized />
        )}
      </Link>
      <div>
        <p className="lab-spec mb-1 text-cta">About the author</p>
        <h2 id="about-author" className="text-xl">
          <Link prefetch={false} href={href} className="!text-ink hover:!text-cta-dark">{author.name}</Link>
        </h2>
        <p className="mb-2 text-sm text-ink-muted">{author.role}</p>
        <p className="text-[0.9375rem] leading-relaxed">{author.bio}</p>
        <p className="mt-3 text-sm">
          <Link prefetch={false} href={href} className="font-semibold !text-cta-dark hover:!text-cta">More from {author.isPerson ? author.name.split(" ")[0] : "our editors"} →</Link>
          <span aria-hidden className="mx-2 text-ink-muted">·</span>
          <Link prefetch={false} href="/how-we-review" className="font-semibold !text-forest">Editorial standards</Link>
        </p>
      </div>
    </section>
  );
}
