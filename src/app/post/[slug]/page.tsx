"use client";

import { useParams } from "next/navigation";
import { useArticlesStore } from "@/store/articlesStore";
import Typography from "@/shared-ui/typography/Typography";

export default function PostPage() {
  const params = useParams<{ slug: string }>();
  const { articles } = useArticlesStore();
  const slug = decodeURIComponent(params.slug);
  const article = articles.find((a) => a.slug === slug);

  if (!article)
    return (
      <main className="flex justify-center items-center h-screen text-2xl text-gray-500">
        Article not found
      </main>
    );

  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <Typography variant="h2" className="text-[#1E1E1E] font-bold mb-6">
        {article.title}
      </Typography>
    </main>
  );
}
