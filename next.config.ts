import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the workspace root explicitly. An unrelated stray lockfile at
  // /home/admin1/package-lock.json was making Next.js infer the workspace
  // root as the whole home directory instead of this project folder,
  // which made the dev server trace/watch far more of the filesystem
  // than it needed to (contributing to the dev-server memory blowups).
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: path.join(__dirname),
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.google-analytics.com *.clarity.ms; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' *.google-analytics.com *.supabase.co *.clarity.ms; style-src 'self' 'unsafe-inline'; frame-ancestors 'self';" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // non-www → www (301 permanent — tells Google which is canonical)
      {
        source: "/:path*",
        has: [{ type: "host", value: "rvgearlab.com" }],
        destination: "https://www.rvgearlab.com/:path*",
        permanent: true,
      },
      { source: "/author", destination: "/about", permanent: true },
      // Round 4 keywords merged into a sibling guide (duplicate intent or no genuine products).
      { source: "/guide/best-rv-leveling-ramps", destination: "/towing-leveling/best-drive-on-rv-levelers", permanent: true },
      { source: "/power-electrical/best-rv-leveling-ramps", destination: "/towing-leveling/best-drive-on-rv-levelers", permanent: true },
      { source: "/towing-leveling/best-rv-leveling-ramps", destination: "/towing-leveling/best-drive-on-rv-levelers", permanent: true },
      { source: "/rv-care/best-rv-leveling-ramps", destination: "/towing-leveling/best-drive-on-rv-levelers", permanent: true },
      { source: "/camping-travel/best-rv-leveling-ramps", destination: "/towing-leveling/best-drive-on-rv-levelers", permanent: true },
      { source: "/interior-comfort/best-rv-leveling-ramps", destination: "/towing-leveling/best-drive-on-rv-levelers", permanent: true },
      { source: "/guide/best-automatic-rv-leveling-system", destination: "/towing-leveling/best-electric-rv-leveling-system", permanent: true },
      { source: "/power-electrical/best-automatic-rv-leveling-system", destination: "/towing-leveling/best-electric-rv-leveling-system", permanent: true },
      { source: "/towing-leveling/best-automatic-rv-leveling-system", destination: "/towing-leveling/best-electric-rv-leveling-system", permanent: true },
      { source: "/rv-care/best-automatic-rv-leveling-system", destination: "/towing-leveling/best-electric-rv-leveling-system", permanent: true },
      { source: "/camping-travel/best-automatic-rv-leveling-system", destination: "/towing-leveling/best-electric-rv-leveling-system", permanent: true },
      { source: "/interior-comfort/best-automatic-rv-leveling-system", destination: "/towing-leveling/best-electric-rv-leveling-system", permanent: true },
      { source: "/guide/best-rv-cover-for-humid-climates", destination: "/rv-care/best-rv-cover-for-coastal-storage", permanent: true },
      { source: "/power-electrical/best-rv-cover-for-humid-climates", destination: "/rv-care/best-rv-cover-for-coastal-storage", permanent: true },
      { source: "/towing-leveling/best-rv-cover-for-humid-climates", destination: "/rv-care/best-rv-cover-for-coastal-storage", permanent: true },
      { source: "/rv-care/best-rv-cover-for-humid-climates", destination: "/rv-care/best-rv-cover-for-coastal-storage", permanent: true },
      { source: "/camping-travel/best-rv-cover-for-humid-climates", destination: "/rv-care/best-rv-cover-for-coastal-storage", permanent: true },
      { source: "/interior-comfort/best-rv-cover-for-humid-climates", destination: "/rv-care/best-rv-cover-for-coastal-storage", permanent: true },
      { source: "/guide/best-rv-cell-booster-for-one-device", destination: "/camping-travel/best-rv-cell-booster-for-mobile-hotspot", permanent: true },
      { source: "/power-electrical/best-rv-cell-booster-for-one-device", destination: "/camping-travel/best-rv-cell-booster-for-mobile-hotspot", permanent: true },
      { source: "/towing-leveling/best-rv-cell-booster-for-one-device", destination: "/camping-travel/best-rv-cell-booster-for-mobile-hotspot", permanent: true },
      { source: "/rv-care/best-rv-cell-booster-for-one-device", destination: "/camping-travel/best-rv-cell-booster-for-mobile-hotspot", permanent: true },
      { source: "/camping-travel/best-rv-cell-booster-for-one-device", destination: "/camping-travel/best-rv-cell-booster-for-mobile-hotspot", permanent: true },
      { source: "/interior-comfort/best-rv-cell-booster-for-one-device", destination: "/camping-travel/best-rv-cell-booster-for-mobile-hotspot", permanent: true },
      { source: "/guide/best-catalytic-heater-with-tip-over-protection", destination: "/interior-comfort/best-catalytic-heater-for-rv", permanent: true },
      { source: "/power-electrical/best-catalytic-heater-with-tip-over-protection", destination: "/interior-comfort/best-catalytic-heater-for-rv", permanent: true },
      { source: "/towing-leveling/best-catalytic-heater-with-tip-over-protection", destination: "/interior-comfort/best-catalytic-heater-for-rv", permanent: true },
      { source: "/rv-care/best-catalytic-heater-with-tip-over-protection", destination: "/interior-comfort/best-catalytic-heater-for-rv", permanent: true },
      { source: "/camping-travel/best-catalytic-heater-with-tip-over-protection", destination: "/interior-comfort/best-catalytic-heater-for-rv", permanent: true },
      { source: "/interior-comfort/best-catalytic-heater-with-tip-over-protection", destination: "/interior-comfort/best-catalytic-heater-for-rv", permanent: true },
      { source: "/guide/best-hydraulic-rv-leveling-system", destination: "/towing-leveling/best-electronic-rv-leveler", permanent: true },
      { source: "/power-electrical/best-hydraulic-rv-leveling-system", destination: "/towing-leveling/best-electronic-rv-leveler", permanent: true },
      { source: "/towing-leveling/best-hydraulic-rv-leveling-system", destination: "/towing-leveling/best-electronic-rv-leveler", permanent: true },
      { source: "/rv-care/best-hydraulic-rv-leveling-system", destination: "/towing-leveling/best-electronic-rv-leveler", permanent: true },
      { source: "/camping-travel/best-hydraulic-rv-leveling-system", destination: "/towing-leveling/best-electronic-rv-leveler", permanent: true },
      { source: "/interior-comfort/best-hydraulic-rv-leveling-system", destination: "/towing-leveling/best-electronic-rv-leveler", permanent: true },
      { source: "/guide/best-rv-vent-fan-that-installs-from-inside", destination: "/interior-comfort/best-rv-vent-fan", permanent: true },
      { source: "/power-electrical/best-rv-vent-fan-that-installs-from-inside", destination: "/interior-comfort/best-rv-vent-fan", permanent: true },
      { source: "/towing-leveling/best-rv-vent-fan-that-installs-from-inside", destination: "/interior-comfort/best-rv-vent-fan", permanent: true },
      { source: "/rv-care/best-rv-vent-fan-that-installs-from-inside", destination: "/interior-comfort/best-rv-vent-fan", permanent: true },
      { source: "/camping-travel/best-rv-vent-fan-that-installs-from-inside", destination: "/interior-comfort/best-rv-vent-fan", permanent: true },
      { source: "/interior-comfort/best-rv-vent-fan-that-installs-from-inside", destination: "/interior-comfort/best-rv-vent-fan", permanent: true },
      { source: "/guide/best-rubber-rv-leveling-blocks", destination: "/towing-leveling/best-rv-leveling-blocks", permanent: true },
      { source: "/power-electrical/best-rubber-rv-leveling-blocks", destination: "/towing-leveling/best-rv-leveling-blocks", permanent: true },
      { source: "/towing-leveling/best-rubber-rv-leveling-blocks", destination: "/towing-leveling/best-rv-leveling-blocks", permanent: true },
      { source: "/rv-care/best-rubber-rv-leveling-blocks", destination: "/towing-leveling/best-rv-leveling-blocks", permanent: true },
      { source: "/camping-travel/best-rubber-rv-leveling-blocks", destination: "/towing-leveling/best-rv-leveling-blocks", permanent: true },
      { source: "/interior-comfort/best-rubber-rv-leveling-blocks", destination: "/towing-leveling/best-rv-leveling-blocks", permanent: true },
      // P3 keywords that duplicate an existing guide's search intent.
      { source: "/guide/best-1000wh-portable-power-station", destination: "/power-electrical/best-1000wh-portable-power-stations", permanent: true },
      { source: "/power-electrical/best-1000wh-portable-power-station", destination: "/power-electrical/best-1000wh-portable-power-stations", permanent: true },
      { source: "/guide/best-2000wh-portable-power-station", destination: "/power-electrical/best-2000wh-portable-power-stations", permanent: true },
      { source: "/power-electrical/best-2000wh-portable-power-station", destination: "/power-electrical/best-2000wh-portable-power-stations", permanent: true },
      { source: "/guide/best-3000wh-portable-power-station", destination: "/power-electrical/best-3000wh-portable-power-stations", permanent: true },
      { source: "/power-electrical/best-3000wh-portable-power-station", destination: "/power-electrical/best-3000wh-portable-power-stations", permanent: true },
      { source: "/guide/best-300wh-portable-power-station", destination: "/power-electrical/best-300wh-portable-power-stations", permanent: true },
      { source: "/power-electrical/best-300wh-portable-power-station", destination: "/power-electrical/best-300wh-portable-power-stations", permanent: true },
      { source: "/guide/best-5000wh-portable-power-station", destination: "/power-electrical/best-5000wh-portable-power-stations", permanent: true },
      { source: "/power-electrical/best-5000wh-portable-power-station", destination: "/power-electrical/best-5000wh-portable-power-stations", permanent: true },
      { source: "/guide/best-500wh-portable-power-station", destination: "/power-electrical/best-500wh-portable-power-stations", permanent: true },
      { source: "/power-electrical/best-500wh-portable-power-station", destination: "/power-electrical/best-500wh-portable-power-stations", permanent: true },
      { source: "/guide/best-700wh-portable-power-station", destination: "/power-electrical/best-700wh-portable-power-stations", permanent: true },
      { source: "/power-electrical/best-700wh-portable-power-station", destination: "/power-electrical/best-700wh-portable-power-stations", permanent: true },
      { source: "/guide/best-budget-portable-power-station", destination: "/power-electrical/best-budget-portable-power-stations", permanent: true },
      { source: "/power-electrical/best-budget-portable-power-station", destination: "/power-electrical/best-budget-portable-power-stations", permanent: true },
      { source: "/guide/best-lightweight-portable-power-station", destination: "/power-electrical/best-lightweight-portable-power-stations", permanent: true },
      { source: "/power-electrical/best-lightweight-portable-power-station", destination: "/power-electrical/best-lightweight-portable-power-stations", permanent: true },
      { source: "/guide/best-dual-fuel-inverter-generator-for-rv", destination: "/power-electrical/best-dual-fuel-inverter-generator", permanent: true },
      { source: "/power-electrical/best-dual-fuel-inverter-generator-for-rv", destination: "/power-electrical/best-dual-fuel-inverter-generator", permanent: true },
      { source: "/guide/best-tri-fuel-inverter-generator-for-rv", destination: "/power-electrical/best-tri-fuel-inverter-generator", permanent: true },
      { source: "/power-electrical/best-tri-fuel-inverter-generator-for-rv", destination: "/power-electrical/best-tri-fuel-inverter-generator", permanent: true },
      { source: "/guide/best-quiet-inverter-generator-for-rv", destination: "/power-electrical/best-quiet-rv-generator", permanent: true },
      { source: "/power-electrical/best-quiet-inverter-generator-for-rv", destination: "/power-electrical/best-quiet-rv-generator", permanent: true },
      { source: "/guide/best-rv-inverter-generator", destination: "/power-electrical/best-inverter-generator-for-rv", permanent: true },
      { source: "/power-electrical/best-rv-inverter-generator", destination: "/power-electrical/best-inverter-generator-for-rv", permanent: true },
      { source: "/guide/best-self-heating-lithium-rv-battery", destination: "/power-electrical/best-heated-lithium-rv-battery", permanent: true },
      { source: "/power-electrical/best-self-heating-lithium-rv-battery", destination: "/power-electrical/best-heated-lithium-rv-battery", permanent: true },
      { source: "/guide/best-lithium-rv-battery-upgrade-kit", destination: "/power-electrical/best-lithium-rv-battery-conversion-kit", permanent: true },
      { source: "/power-electrical/best-lithium-rv-battery-upgrade-kit", destination: "/power-electrical/best-lithium-rv-battery-conversion-kit", permanent: true },
      { source: "/guide/best-lithium-rv-battery-for-dry-camping", destination: "/power-electrical/best-lithium-rv-battery-for-boondocking", permanent: true },
      { source: "/power-electrical/best-lithium-rv-battery-for-dry-camping", destination: "/power-electrical/best-lithium-rv-battery-for-boondocking", permanent: true },
      { source: "/guide/best-rv-converter-upgrade-for-lithium-batteries", destination: "/power-electrical/best-rv-converter-for-lithium-batteries", permanent: true },
      { source: "/power-electrical/best-rv-converter-upgrade-for-lithium-batteries", destination: "/power-electrical/best-rv-converter-for-lithium-batteries", permanent: true },
      { source: "/guide/best-replacement-rv-converter", destination: "/power-electrical/best-rv-converter", permanent: true },
      { source: "/power-electrical/best-replacement-rv-converter", destination: "/power-electrical/best-rv-converter", permanent: true },
      { source: "/guide/best-rv-battery-monitor-with-display", destination: "/power-electrical/best-rv-battery-monitor", permanent: true },
      { source: "/power-electrical/best-rv-battery-monitor-with-display", destination: "/power-electrical/best-rv-battery-monitor", permanent: true },
      { source: "/guide/best-rv-inverter-charger-with-transfer-switch", destination: "/power-electrical/best-rv-inverter-with-transfer-switch", permanent: true },
      { source: "/power-electrical/best-rv-inverter-charger-with-transfer-switch", destination: "/power-electrical/best-rv-inverter-with-transfer-switch", permanent: true },
      { source: "/guide/best-built-in-rv-generator", destination: "/power-electrical/best-rv-generator", permanent: true },
      { source: "/power-electrical/best-built-in-rv-generator", destination: "/power-electrical/best-rv-generator", permanent: true },
      // Routes inherited from the template that this site does not use.
      { source: "/categories/:slug", destination: "/:slug", permanent: false },
      { source: "/categories", destination: "/", permanent: false },
      { source: "/compare/:path*", destination: "/", permanent: false },
      { source: "/deals", destination: "/", permanent: false },
      { source: "/reviews/:path*", destination: "/", permanent: false },
    ];
  },
  experimental: {
    // Keep local production builds within the 14 GiB workstation's memory
    // budget. This project prerenders 1600+ pages, and the default worker
    // count caused several concurrent Node processes to exhaust RAM + swap.
    cpus: 2,
    staticGenerationMaxConcurrency: 2,
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  // Type-checking already runs locally (`npx tsc --noEmit`) before every push per the
  // pre-commit gate. With 1600+ static guide pages, Next's in-build tsc pass was taking
  // long enough to hit the Vercel Hobby plan's ~45min build timeout, causing build errors
  // and backing up the deploy queue. Skip the redundant in-build check.
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
  },
};

export default nextConfig;
