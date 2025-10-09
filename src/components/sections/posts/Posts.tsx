"use client";

import { useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";
import FeaturedPost from "./featuredPost/FeaturedPost";
import NewPosts from "./newPosts/NewPosts";
import { useArticlesStore } from "@/store/articlesStore";

export default function Posts() {
  const { articles, isLoading, fetchArticles } = useArticlesStore();

  useEffect(() => {
    fetchArticles(1);
  }, [fetchArticles]);

  if (isLoading) return <Spinner aria-label="spinner" />;

  if (!articles.length) return <p>No articles found.</p>;

  return (
    <section className="flex flex-col items-center gap-10 mb-20">
      <FeaturedPost featuredArticle={articles[0]} />
      <NewPosts />
    </section>
  );
}
