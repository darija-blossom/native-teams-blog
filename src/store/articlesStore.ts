import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Article } from "@/types/article";

interface ArticlesState {
  articles: Article[];
  cache: Record<number, Article[]>; // Cached pages
  page: number;
  totalPages: number;
  isLoading: boolean;
  error: string | null;
  selectedArticle: Article | null;

  setSelectedArticle: (article: Article | null) => void;
  addArticle: (article: Article) => void;
  fetchArticles: (page?: number) => Promise<void>;
  prefetchNextPage: (page: number) => void;
  clearCache: () => void;
}

export const useArticlesStore = create<ArticlesState>()(
  persist(
    (set, get) => ({
      articles: [],
      cache: {},
      page: 1,
      totalPages: 12,
      isLoading: false,
      error: null,
      selectedArticle: null,

      setSelectedArticle: (article) => set({ selectedArticle: article }),

      addArticle: (article) => {
        const { articles } = get();
        const exists = articles.some((a) => a.id === article.id);
        if (!exists) set({ articles: [...articles, article] });
      },

      fetchArticles: async (page = 1) => {
        const { cache, totalPages } = get();

        if (cache[page]) {
          set({
            articles: cache[page],
            page,
            isLoading: false,
            error: null,
          });
          get().prefetchNextPage(page);
          return;
        }

        try {
          set({ isLoading: true, error: null });

          const res = await fetch(`/api/nyt?page=${page}`);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);

          const data = await res.json();
          const articles = data.articles ?? [];

          set((state) => ({
            articles,
            cache: { ...state.cache, [page]: articles },
            page,
            totalPages: Math.ceil(100 / 9),
            isLoading: false,
          }));

          if (page < totalPages) {
            get().prefetchNextPage(page);
          }
        } catch (err: unknown) {
          const errorMessage = err instanceof Error ? err.message : String(err);
          set({ error: errorMessage, isLoading: false });
        }
      },

      prefetchNextPage: async (page: number) => {
        const nextPage = page + 1;
        const { cache, totalPages } = get();

        if (nextPage > totalPages || cache[nextPage]) return;

        try {
          const res = await fetch(`/api/nyt?page=${nextPage}`);
          if (!res.ok) return;

          const data = await res.json();
          if (data?.articles) {
            set((state) => ({
              cache: { ...state.cache, [nextPage]: data.articles },
            }));
          }
        } catch {
          // silent fail (prefetch shouldn't break main logic)
        }
      },

      clearCache: () => set({ cache: {}, articles: [] }),
    }),

    {
      name: "articles-store",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        cache: state.cache,
        articles: state.articles,
        selectedArticle: state.selectedArticle,
        page: state.page,
        totalPages: state.totalPages,
      }),
    }
  )
);
