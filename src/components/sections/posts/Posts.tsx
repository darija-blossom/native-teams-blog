"use client";
import { Spinner } from "@/components/ui/spinner";
import FeaturedPost from "./featuredPost/FeaturedPost";
import NewPosts from "./newPosts/NewPosts";
import { useArticles } from "@/hooks/useArticles";

export default function Posts() {
  const { data: articles = [], isLoading, isError } = useArticles();

  console.log("articles", articles);

  if (isLoading) {
    return <Spinner aria-label="spinner" />;
  }

  return (
    <section className="flex flex-col items-center gap-10 mb-20">
      <FeaturedPost featuredArticle={articles[0]} />
      <NewPosts articles={articles} />
    </section>
  );
}
