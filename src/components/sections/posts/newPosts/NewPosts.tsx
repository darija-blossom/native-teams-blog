"use client";

import { useArticlesStore } from "@/store/articlesStore";
import PostCard from "@/shared-ui/post-card/PostCard";
import Typography from "@/shared-ui/typography/Typography";
import PaginationBar from "@/shared-ui/pagination-bar/PaginationBar";

export default function NewPosts() {
  const { articles, page, totalPages, fetchArticles } = useArticlesStore();

  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-10 items-center">
      <Typography variant="h3" className="text-left text-[#1E1E1E]">
        News posts
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 [&>*]:h-full">
        {articles.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            multimedia={post.multimedia ?? undefined}
            slug={post.slug}
          />
        ))}
      </div>

      <PaginationBar
        page={page}
        totalPages={totalPages}
        onChange={(newPage) => fetchArticles(newPage)}
        className="w-full"
      />
    </div>
  );
}
