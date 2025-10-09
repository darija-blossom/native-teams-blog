"use client";

import DecorativeIcons from "../decorative/DecorativeIcons";
import Typography from "@/shared-ui/typography/Typography";
import CustomInputGroup from "@/shared-ui/input-group/CustomInputGroup";
import Categories from "@/shared-ui/categories/Categories";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Link from "next/link";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Article } from "@/types/article";
import { useArticlesStore } from "@/store/articlesStore";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const { setSelectedArticle } = useArticlesStore();

  const { data: results = [], isFetching } = useQuery({
    queryKey: ["search", query],
    queryFn: async () => {
      if (!query.trim()) return [];
      const res = await fetch(`/api/nyt?q=${encodeURIComponent(query)}`);
      if (!res.ok) return [];
      const data = await res.json();
      return data.articles || [];
    },
    enabled: query.length > 2,
  });

  return (
    <section className="relative flex flex-col items-center text-center pt-10 pb-14">
      <DecorativeIcons />

      <Typography variant="h3" className="mt-4">
        Native Teams Blog
      </Typography>

      <Typography
        variant="h2"
        className="max-w-[300px] md:max-w-[990px] mt-2 px-2"
      >
        Resources, Tips and Tricks About the Modern Way of Working
      </Typography>

      <div className="relative w-full md:max-w-lg mt-8">
        <CustomInputGroup
          variant="search"
          title="Search for posts"
          buttonLabel="Search"
          className="w-full"
          onSearch={(val) => setQuery(val)}
        />

        {/* Dropdown appears below input */}
        {query.length > 2 && (
          <div className="absolute top-[60px] left-0 w-full z-20 bg-white border border-gray-200 rounded-lg shadow-lg">
            <Command className="rounded-lg border-none shadow-none">
              <CommandList>
                <CommandEmpty>
                  {isFetching ? "Searching..." : "No results found"}
                </CommandEmpty>
                <CommandGroup heading="Articles">
                  {results.map((article: Article) => (
                    <Link
                      key={article.id}
                      href={`/post/${encodeURIComponent(article.slug)}`}
                      onClick={() => setSelectedArticle(article)}
                      className="block"
                    >
                      <CommandItem className="cursor-pointer hover:bg-gray-100 transition-colors">
                        <div className="flex flex-col text-left">
                          <span className="font-semibold text-[#1E1E1E]">
                            {article.title}
                          </span>
                          <span className="text-xs text-gray-500">
                            {article.section || "General"}
                          </span>
                        </div>
                      </CommandItem>
                    </Link>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        )}
      </div>

      <Categories />
    </section>
  );
}
