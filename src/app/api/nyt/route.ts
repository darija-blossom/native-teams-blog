import { NextResponse } from "next/server";
import type { NYTDoc, Article } from "@/types/article";
import { pickNYTThumbnail } from "@/lib/utils";

const BASE = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const apiKey = process.env.NYT_API_KEY;
    if (!apiKey)
      return NextResponse.json({ error: "Missing key" }, { status: 500 });

    const q = searchParams.get("q") ?? "";
    const section = searchParams.get("section") ?? "";
    const page = Math.max(0, Number(searchParams.get("page") ?? "0"));
    const limit = Math.min(Number(searchParams.get("limit") ?? "50"), 50);

    const params = new URLSearchParams({
      "api-key": apiKey,
      sort: "newest",
      page: String(page),
    });
    if (q) params.set("q", q);
    if (section) params.set("fq", `section_name:("${section}")`);

    const res = await fetch(`${BASE}?${params.toString()}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      const msg = await res.text().catch(() => "");
      return NextResponse.json(
        { error: msg || "NYT error" },
        { status: res.status }
      );
    }

    const raw = (await res.json()) as { response?: { docs?: NYTDoc[] } };
    const docs: NYTDoc[] = raw.response?.docs ?? [];

    const articles: Article[] = docs.slice(0, limit).map(
      (d): Article => ({
        id: d._id,
        title: d.headline?.main ?? "",
        abstract: d.abstract ?? d.lead_paragraph ?? "",
        url: d.web_url,
        section: d.section_name ?? null,
        subsection: d.subsection_name ?? null,
        byline: d.byline?.original ?? null,
        publishedAt: d.pub_date,
        multimedia: pickNYTThumbnail(d.multimedia), // ← thumbnail > default > null
      })
    );

    return NextResponse.json({ articles });
  } catch (err) {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
