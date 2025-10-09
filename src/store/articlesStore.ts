import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Article } from "@/types/article";

interface ArticlesState {
  articles: Article[]; // current page view
  allArticles: Article[]; // merged dataset across pages
  cache: Record<number, Article[]>; // per-page cache
  page: number;
  totalPages: number;
  isLoading: boolean;
  error: string | null;
  selectedArticle: Article | null;
  activeCategory: string;

  setSelectedArticle: (article: Article | null) => void;
  setActiveCategory: (category: string) => void;
  addArticle: (article: Article) => void;
  fetchArticles: (page?: number) => Promise<void>;
  prefetchNextPage: (page: number) => void;
  clearCache: () => void;
  getArticlesBySection: (section: string, page?: number) => Article[];
}

export const useArticlesStore = create<ArticlesState>()(
  persist(
    (set, get) => ({
      articles: [],
      allArticles: [],
      cache: {},
      page: 1,
      totalPages: 12,
      isLoading: false,
      error: null,
      selectedArticle: null,
      activeCategory: "All",

      setSelectedArticle: (article) => set({ selectedArticle: article }),
      setActiveCategory: (category) => set({ activeCategory: category }),

      addArticle: (article) => {
        const { allArticles } = get();
        const exists = allArticles.some((a) => a.id === article.id);
        if (!exists) set({ allArticles: [...allArticles, article] });
      },

      fetchArticles: async (page = 1) => {
        const { cache, totalPages } = get();

        // ✅ Use cached page if available
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
          const newArticles = data.articles ?? [];

          // 🔥 Merge into global allArticles, cache separately
          const merged = mergeUnique(get().allArticles, newArticles);

          set((state) => ({
            articles: newArticles,
            allArticles: merged,
            cache: { ...state.cache, [page]: newArticles },
            page,
            totalPages: Math.ceil(100 / 9),
            isLoading: false,
          }));

          if (page < totalPages) get().prefetchNextPage(page);
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
            const merged = mergeUnique(get().allArticles, data.articles);
            set((state) => ({
              cache: { ...state.cache, [nextPage]: data.articles },
              allArticles: merged,
            }));
          }
        } catch {
          // silent fail
        }
      },

      getArticlesBySection: (section: string, page?: number) => {
        const { cache, allArticles } = get();

        // 🔍 if a page is passed → filter only that cached page
        if (page && cache[page]) {
          const pageArticles = cache[page];
          if (section === "All") return pageArticles;
          return pageArticles.filter(
            (a) => a.section?.toLowerCase() === section.toLowerCase()
          );
        }

        // otherwise → full dataset (used for search)
        if (section === "All") return allArticles;
        return allArticles.filter(
          (a) => a.section?.toLowerCase() === section.toLowerCase()
        );
      },

      clearCache: () => set({ cache: {}, articles: [], allArticles: [] }),
    }),

    {
      name: "articles-store",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        cache: state.cache,
        articles: state.articles,
        allArticles: state.allArticles,
        selectedArticle: state.selectedArticle,
        page: state.page,
        totalPages: state.totalPages,
        activeCategory: state.activeCategory,
      }),
    }
  )
);

// helper
function mergeUnique(existing: Article[], incoming: Article[]): Article[] {
  const map = new Map<string, Article>();
  [...existing, ...incoming].forEach((a) => map.set(a.id, a));
  return Array.from(map.values());
}
