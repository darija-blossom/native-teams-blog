"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useArticlesStore } from "@/store/articlesStore";

export default function Categories() {
  const { articles, activeCategory, setActiveCategory } = useArticlesStore();

  const sections = React.useMemo(() => {
    const uniqueSections = Array.from(
      new Set(articles.map((a) => a.section).filter(Boolean))
    ) as string[];

    const limited = uniqueSections.slice(0, 5); // limit to first 5
    return ["All", ...limited];
  }, [articles]);

  return (
    <section className="flex flex-col items-center w-full mt-16">
      <Tabs
        value={activeCategory}
        onValueChange={setActiveCategory}
        className="flex w-full max-w-[1200px] overflow-x-auto 
                  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth 
                  mb-10 h-[49px]"
      >
        <TabsList
          className={cn(
            "flex justify-start gap-3 sm:gap-4 py-2 sm:py-3 bg-transparent h-[49px]"
          )}
        >
          {sections.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className={cn(
                "data-[state=active]:bg-[#5152FB] data-[state=active]:text-white data-[state=active]:hover:bg-[#303094]",
                "hover:bg-[#bdbdbf]",
                "bg-[#F0F2F7] cursor-pointer rounded-full h-[49px] px-4 sm:px-6 py-[10px] text-[14px] font-medium transition-colors duration-200"
              )}
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </section>
  );
}
