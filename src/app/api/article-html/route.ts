import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function POST(req: Request) {
  try {
    const { url, abstract } = await req.json();
    if (!url) {
      return NextResponse.json({ error: "Missing URL" }, { status: 400 });
    }

    const res = await fetch(url);
    const html = await res.text();

    const $ = cheerio.load(html);
    let content = $("article").html() || $("main").html();

    // ✅ Fallback if site uses JS rendering or dynamic layout
    if (!content || content.trim().length < 50) {
      content = `
        <p>${abstract || "No content available."}</p>
        <h2>Background</h2>
        <p>This article was originally published on The New York Times website.</p>
        <p><em>Click 'Read the full article' to view the complete version online.</em></p>
      `;
    }

    return NextResponse.json({ content });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch or parse article" },
      { status: 500 }
    );
  }
}
