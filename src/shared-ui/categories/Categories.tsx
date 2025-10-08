"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const categories = [
  "News",
  "Payments",
  "Employment",
  "Tax management",
  "Remote work",
  "Use cases",
  "People & Culture",
];

export default function Categories() {
  const [active, setActive] = React.useState("News");

  return (
    <Tabs
      value={active}
      onValueChange={setActive}
      className="flex w-full max-w-[1200px] overflow-x-auto 
                [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth 
                mt-40 h-[49px]"
    >
      <TabsList
        className={cn(
          "flex justify-start sm:justify-center gap-3 sm:gap-4 py-2 sm:py-3 bg-transparent h-[49px]"
        )}
      >
        {categories.map((cat) => (
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
  );
}
