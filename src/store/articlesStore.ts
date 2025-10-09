import { create } from "zustand";
import { Article } from "@/types/article";

interface ArticlesState {
  articles: Article[];
  page: number;
  totalPages: number;
  isLoading: boolean;
  error: string | null;
  selectedArticle: Article | null;
  setSelectedArticle: (article: Article | null) => void;
  addArticle: (article: Article) => void;
  fetchArticles: (page?: number) => Promise<void>;
}

export const useArticlesStore = create<ArticlesState>((set, get) => ({
  articles: [],
  page: 1,
  totalPages: 1,
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
    try {
      set({ isLoading: true, error: null });
      const res = await fetch(`/api/nyt?page=${page}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const articles = data.articles ?? [];
      set({
        articles,
        page,
        totalPages: Math.ceil(100 / 9),
        isLoading: false,
      });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      set({ error: errorMessage, isLoading: false });
    }
  },
}));
