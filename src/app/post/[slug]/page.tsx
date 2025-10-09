"use client";

import Link from "next/link";
import Typography from "@/shared-ui/typography/Typography";
import { useArticlesStore } from "@/store/articlesStore";
import { useParams } from "next/navigation";
import PostContentSection from "./PostContentSection";
import AuthorSection from "./AuthorSection";
import { useEffect } from "react";

export default function PostPage() {
  const params = useParams<{ slug: string }>();
  const { articles, selectedArticle, addArticle } = useArticlesStore();
  const slug = decodeURIComponent(params.slug);
  let article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    if (!article && selectedArticle && selectedArticle.slug === slug) {
      addArticle(selectedArticle);
    }
  }, [article, selectedArticle, slug, addArticle]);

  article = articles.find((a) => a.slug === slug);

  if (!article)
    return (
      <section className="flex justify-center items-center h-screen text-gray-500">
        Article not found.
      </section>
    );

  return (
    <article className="w-full flex flex-col gap-16 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-6 self-start">
        <Typography variant="p" className="text-sm text-[#5152FB]">
          <Link href="/">News</Link> &nbsp;/&nbsp;{" "}
          <span className="text-[#1E1E1E]">{article.title}</span>
        </Typography>
      </div>

      <PostContentSection article={article} />
      <AuthorSection authorName={article.byline ?? undefined} />
    </article>
  );
}
