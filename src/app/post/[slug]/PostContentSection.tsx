"use client";

import Image from "next/image";
import Typography from "@/shared-ui/typography/Typography";
import { Article } from "@/types/article";
import { generateMockHtml } from "@/lib/mockArticle";

interface PostContentSectionProps {
  article: Article;
}

export default function PostContentSection({
  article,
}: PostContentSectionProps) {
  const mockHtml = generateMockHtml(article.abstract);

  return (
    <section className="max-w-[800px] mx-auto px-6 flex flex-col gap-6">
      <Typography variant="h1" className="text-4xl font-bold text-[#1E1E1E]">
        {article.title}
      </Typography>

      <Typography variant="p" className="text-gray-600 text-sm">
        {new Date(article.publishedAt).toLocaleDateString()} · 6 min read
      </Typography>

      {article.multimedia && (
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-[#E1E1E1]">
          <Image
            src={article.multimedia}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      )}

      {/* Render mock rich HTML */}
      <div
        className="prose prose-lg max-w-none text-[#1E1E1E]/90"
        dangerouslySetInnerHTML={{ __html: mockHtml }}
      />
    </section>
  );
}
