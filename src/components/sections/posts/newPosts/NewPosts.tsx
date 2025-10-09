"use client";

import { useMemo, useState } from "react";
import PostCard from "@/shared-ui/post-card/PostCard";
import Typography from "@/shared-ui/typography/Typography";
import PaginationBar from "@/shared-ui/pagination-bar/PaginationBar";
import { Article } from "@/types/article";

const PAGE_SIZE = 9; // 3 x 3

interface NewPostProps {
  articles: Article[];
}

export default function NewPosts({ articles }: NewPostProps) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return articles.slice(start, start + PAGE_SIZE);
  }, [articles, page]);

  return (
    <div className="w-full max-w-[1200px] mx-auto lg:px-0 flex flex-col gap-10 items-center">
      <Typography variant="h3" className="text-left text-[#1E1E1E]">
        News posts
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 [&>*]:h-full">
        {pageItems.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            multimedia={post.multimedia ?? undefined}
            href={post.url}
          />
        ))}
      </div>

      <PaginationBar
        page={page}
        totalPages={totalPages}
        onChange={setPage}
        className="w-full"
      />
    </div>
  );
}
