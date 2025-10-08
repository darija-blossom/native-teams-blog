import { create } from "zustand";

type BlogState = {
  query: string;
  section: string; // category
  page: number;
  limit: number; // clamp to 50 on server
  setQuery: (q: string) => void;
  setSection: (s: string) => void;
  setPage: (p: number) => void;
};

export const useBlogStore = create<BlogState>((set) => ({
  query: "",
  section: "",
  page: 0,
  limit: 50,
  setQuery: (query) => set({ query, page: 0 }),
  setSection: (section) => set({ section, page: 0 }),
  setPage: (page) => set({ page }),
}));
