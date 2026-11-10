import Link from "next/link";

/** Reusable "Why You Can Trust RV Gear Lab" block for buying guides. */
export function TrustBlock({ handsOnTested = false, group = "rv" }: { handsOnTested?: boolean; group?: "rv" | "camping" }) {
  return (
    <section aria-labelledby="why-trust" className="mt-12 rounded-card border border-border bg-surface p-6 shadow-card">
      <p className="lab-spec mb-1.5 text-forest">Our standards</p>
      <h2 id="why-trust" className="text-xl sm:text-2xl">Why You Can Trust RV Gear Lab</h2>
      <p className="mt-3 max-w-[68ch]">
        At RV Gear Lab, we compare products based on {group === "camping" ? "campsite fit" : "rig fit and power or hookup compatibility"}, verified specifications, usability, setup requirements,
        weight, durability, and real-world trade-offs. We do not rank products purely on marketing claims or commission rates.
      </p>
      {!handsOnTested && (
        <p className="mt-3 max-w-[68ch] text-ink-secondary">
          We have not personally tested every product listed. Where hands-on testing is not available, recommendations are based on
          verified manufacturer specifications, product documentation, use-case fit, and comparative research.
        </p>
      )}
      <p className="mt-3 text-sm">
        <Link prefetch={false} href="/how-we-review" className="font-semibold !text-cta-dark hover:!text-cta">How we review {group === "camping" ? "camping" : "RV"} gear →</Link>
      </p>
    </section>
  );
}
