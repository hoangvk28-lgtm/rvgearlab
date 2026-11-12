import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/seo";
import sitemap from "@/app/sitemap";

export const dynamic = "force-dynamic";

// The IndexNow key is public by design: it is served verbatim at
// /<key>.txt so the search engine can verify we own this host. Falling back
// to the real key means a missing or empty Vercel env var cannot silently
// turn submissions back off. INDEXNOW_KEY still overrides it.
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "93cc4d00bcba4400ad7a916061dcef95";

// IndexNow accepts at most 10,000 URLs per request.
const MAX_URLS_PER_REQUEST = 10000;

/**
 * Submit exactly what the sitemap advertises.
 *
 * This route used to build its own URL list, which had drifted badly: it sent
 * /guide/<slug> (those 308-redirect to /<silo>/<slug>), plus /reviews/<slug>,
 * /categories/<slug>, /compare, /deals and four desk-site VS slugs, none of
 * which are routes in this project. Deriving the list from app/sitemap.ts
 * means the two can never disagree again.
 */
async function buildUrlList(): Promise<string[]> {
  const entries = await sitemap();
  return [...new Set(entries.map((e) => e.url))];
}

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const urlList = await buildUrlList();
  const host = new URL(SITE_URL).hostname;

  if (urlList.length > MAX_URLS_PER_REQUEST) {
    return NextResponse.json(
      {
        ok: false,
        error: `Sitemap has ${urlList.length} URLs, over the IndexNow per-request limit of ${MAX_URLS_PER_REQUEST}. Batch the submission before re-enabling this cron.`,
      },
      { status: 500 }
    );
  }

  const body = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });

    const indexNowStatus = res.status;

    // IndexNow answers 200 for accepted and 202 for accepted-pending-verification. Everything else is
    // a rejection, including 403 SiteVerificationNotCompleted and 422 for a bad key or URL set.
    // This used to treat anything under 500 as success, so a 403 was reported as
    // { ok: true, submitted: 3441 } while IndexNow accepted nothing: the key sat unverified from
    // 2026-11-10 until a manual submission on 2026-11-12 surfaced it. Never widen this back.
    if (indexNowStatus !== 200 && indexNowStatus !== 202) {
      const detail = await res.text().catch(() => "");
      return NextResponse.json(
        { ok: false, indexNowStatus, urls: urlList.length, detail: detail.slice(0, 500) },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      indexNowStatus,
      submitted: urlList.length,
      pingAt: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
