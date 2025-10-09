"use client";

import { useArticlesStore } from "@/store/articlesStore";
import { useParams } from "next/navigation";
import PostContentSection from "./PostContentSection";
import AuthorSection from "./AuthorSection";
import BlogBreadcrumb from "@/shared-ui/breadcrumb/BlogBreadcrumb";
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
      <BlogBreadcrumb
        category={article.section ?? undefined}
        title={article.title}
      />

      <PostContentSection article={article} />
      <AuthorSection authorName={article.byline ?? undefined} />
    </article>
  );
}
