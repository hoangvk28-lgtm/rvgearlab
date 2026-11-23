# Hosting on Cloudflare Pages

The site is a **static export** (`output: "export"` in `next.config.ts`). `npm run build`
prerenders every page to `out/`, then `scripts/cf-routing.mjs` writes `out/_redirects`,
`out/_headers` and the `/guide/<slug>` redirect map used by `functions/guide/[slug].js`.

Why static and not OpenNext/Workers: ~3,100 guide data modules (~61 MB of TS) are bundled
into the server. A Worker is capped at 3 MiB (free) / 10 MiB (paid) compressed, so SSR/ISR on
Cloudflare would not fit without moving guide data to R2/KV.

## What changed versus Vercel

| Vercel feature | Cloudflare replacement |
|---|---|
| ISR (`revalidate`) | None. Every page is built at deploy time; a content change needs a rebuild + deploy. |
| `next.config.ts` redirects | `cloudflare/redirects.mjs` → `out/_redirects` (max 2,000 rules). |
| `next.config.ts` headers | `cloudflare/headers.txt` → `out/_headers`. |
| non-www → www 301 | Cloudflare **Redirect Rule** (below). `_redirects` cannot match on host. |
| `/guide/<slug>` → `/<silo>/<slug>` (page-level redirect) | Pages Function `functions/guide/[slug].js`. |
| `middleware.ts` (block Bytespider/CCBot) | Cloudflare **WAF custom rule** (below). |
| `next/image` optimiser | `images.unoptimized: true`; images are served as-is. |
| `/api/cron/ping-indexnow` | Removed. Use `node scripts/indexnow.mjs <slugs>` / `--auto` after a deploy. |
| `/api/cron/ping-supabase` | Removed (it was never scheduled). |
| Unknown slug | Static `404.html` (`dynamicParams = false`). |

New redirects go in `cloudflare/redirects.mjs`, same rule as before: from `/guide/` **and** every
silo prefix.

## One-time setup (same as the sister sites)

1. Cloudflare → Workers & Pages → Create → **Pages** → Connect to Git → `hoangvk28-lgtm/rvgearlab`.
2. Build settings (do NOT keep the auto-detected Next.js preset):
   - Build command: `npm run build`. Plain `npx next build` skips `scripts/prune-export.mjs`
     and ships 30,000+ files, over the 20,000-file cap.
   - Build output directory: `out`
   - Env vars: `NODE_VERSION=22`, `NEXT_PUBLIC_SITE_URL=https://www.rvgearlab.com`, plus
     `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_CLARITY_ID`, `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`,
     `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` as on Vercel (baked in at build time).
3. Push to `main`; Cloudflare builds and deploys.
4. Pages project → Custom domains → add `www.rvgearlab.com` and `rvgearlab.com`.
5. Rules → Redirect Rules → create: *When* hostname equals `rvgearlab.com`, *Then* dynamic
   redirect to `concat("https://www.rvgearlab.com", http.request.uri.path)`, status **301**,
   preserve query string.
6. Security → WAF → Custom rules → create: `(http.user_agent contains "Bytespider") or
   (http.user_agent contains "CCBot")` → **Block**.
7. After DNS is switched and the site checks out, remove the project from Vercel.

## Build pipeline

`npm run build` = `next build` → `scripts/prune-export.mjs` (drops Next 16 `__next.*.txt` segment payloads; safe because every Link has prefetch={false}) → `scripts/cf-routing.mjs`.
