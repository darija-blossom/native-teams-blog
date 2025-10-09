"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useRouter } from "next/navigation";
import { useArticlesStore } from "@/store/articlesStore";

interface BlogBreadcrumbProps {
  category?: string;
  title: string;
}

export default function BlogBreadcrumb({
  category = "All",
  title,
}: BlogBreadcrumbProps) {
  const router = useRouter();
  const { setActiveCategory } = useArticlesStore();

  const handleClick = (cat: string) => {
    setActiveCategory(cat);
    router.push("/");
  };

  return (
    <Breadcrumb className="w-full flex self-start">
      <BreadcrumbList className="flex items-center justify-start gap-1 sm:gap-2 text-sm">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <button
              onClick={() => handleClick("All")}
              className="text-[#5152FB] hover:underline"
            >
              Home
            </button>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <button
              onClick={() => handleClick(category)}
              className="text-[#5152FB] hover:underline"
            >
              {category}
            </button>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage className="text-[#1E1E1E]">{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
