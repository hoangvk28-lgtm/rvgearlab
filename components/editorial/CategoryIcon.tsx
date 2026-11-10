import type { CategoryIconName } from "@/data/homepage-editorial";

// 1.25px RV and camping line icons drawn on a 32px grid — deliberately plain, no fills.
const paths: Partial<Record<CategoryIconName | "plug" | "flame" | "lantern", React.ReactNode>> = {
  battery: (
    <>
      <rect x="5" y="9" width="20" height="16" rx="1.5" />
      <path d="M10 9V6h3v3M17 9V6h3v3M14.5 13l-3 5h4l-3 5" />
    </>
  ),
  plug: (
    <>
      <path d="M11 4v6M21 4v6M8 10h16v5a8 8 0 0 1-16 0zM16 23v5" />
    </>
  ),
  drop: (
    <>
      <path d="M16 4c4 6 8 10.5 8 15a8 8 0 0 1-16 0c0-4.5 4-9 8-15z" />
      <path d="M12 20a4 4 0 0 0 4 4" />
    </>
  ),
  hitch: (
    <>
      <path d="M3 18h14M17 15h4v6h-4zM21 18h3" />
      <circle cx="26.5" cy="18" r="2.5" />
      <path d="M8 18v5M5 23h6" />
    </>
  ),
  wrench: (
    <>
      <path d="M20 5a6 6 0 0 0-5.6 8.2L5 22.6 9.4 27l9.4-9.4A6 6 0 0 0 27 12l-3.5 3.5-4-1-1-4L22 7a6 6 0 0 0-2-2z" />
    </>
  ),
  flame: (
    <>
      <path d="M16 4c1 5 7 8 7 15a7 7 0 0 1-14 0c0-4 2-6 3-8 1 3 2 4 3 4-1-4 0-8 1-11z" />
      <path d="M6 28h20" />
    </>
  ),
  sleep: (
    <>
      <path d="M4 22c0-4 3-7 7-7h14a3 3 0 0 1 3 3v4H4z" />
      <path d="M4 22v4M28 22v4M9 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM15 15V11h9a2 2 0 0 1 2 2v2" />
    </>
  ),
  pot: (
    <>
      <path d="M6 13h20v7a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6v-7zM3 13h26M12 9c0-2 1-3 2-4M18 9c0-2 1-3 2-4" />
    </>
  ),
  chair: (
    <>
      <path d="M9 6h14l-2 12H11L9 6zM8 18h16M10 18l-3 9M22 18l3 9M12 18l8 9M20 18l-8 9" />
    </>
  ),
  lantern: (
    <>
      <path d="M12 4h8M16 4V2M11 8h10l1 3v12l-1 3H11l-1-3V11l1-3zM13 26v3h6v-3M16 13c1.5 2 1.5 4 0 6-1.5-2-1.5-4 0-6z" />
    </>
  ),
  tent: (
    <>
      <path d="M16 5 4 26h24L16 5zM16 5v21M12 26l4-8 4 8M2 26h28" />
    </>
  ),
};


export function CategoryIcon({ name, className = "h-8 w-8" }: { name: CategoryIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
