import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Article } from "@/types/article";

interface ArticlesState {
  articles: Article[];
  page: number;
  totalPages: number;
  isLoading: boolean;
  error: string | null;
  fetchArticles: (page?: number) => Promise<void>;
}

export const useArticlesStore = create<ArticlesState>()(
  persist(
    (set) => ({
      articles: [],
      page: 1,
      totalPages: 1,
      isLoading: false,
      error: null,

      fetchArticles: async (page = 1) => {
        try {
          set({ isLoading: true, error: null });

          const res = await fetch(`/api/nyt?page=${page}`);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);

          const data = await res.json();
          const articles = data.articles ?? [];

          set({
            articles,
            page,
            totalPages: Math.ceil(100 / 9), // adjust dynamically later if needed
            isLoading: false,
          });
        } catch (err: unknown) {
          const errorMessage = err instanceof Error ? err.message : String(err);
          set({ error: errorMessage, isLoading: false });
        }
      },
    }),
    {
      name: "articles-storage",
      partialize: (state) => ({
        articles: state.articles,
        page: state.page,
        totalPages: state.totalPages,
      }),
    }
  )
);
