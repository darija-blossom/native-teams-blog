"use client";
import { useQuery } from "@tanstack/react-query";
import { useBlogStore } from "@/store/useBlogStore";
import { Article } from "@/types/article";

export function useArticles() {
  const { query, section, page, limit } = useBlogStore();
  const key = ["nyt", { query, section, page, limit }];

  return useQuery({
    queryKey: key,
    queryFn: async (): Promise<Article[]> => {
      const params = new URLSearchParams({
        limit: String(limit),
        page: String(page),
      });
      if (query) params.set("q", query);
      if (section) params.set("section", section);

      const res = await fetch(`/api/nyt?${params.toString()}`, {
        cache: "no-store",
      });
      if (!res.ok) {
        const msg = await res.text().catch(() => "");
        throw new Error(msg || `Request failed: ${res.status}`);
      }
      const json = await res.json();
      return json.articles ?? [];
    },
    staleTime: 60_000,
    refetchOnWindowFocus: false,
  });
}
