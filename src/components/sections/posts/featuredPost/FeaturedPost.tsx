import Image from "next/image";
import { cn } from "@/lib/utils";
import Typography from "@/shared-ui/typography/Typography";
import BlogBadge from "@/shared-ui/blog-badge/BlogBadge";
import Link from "next/link";
import { Article } from "@/types/article";

interface FeaturedPostProps {
  featuredArticle: Article;
}

export default function FeaturedPost({ featuredArticle }: FeaturedPostProps) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse md:flex-row items-center justify-between",
        "bg-[#EBF3FF] border border-[#A8A8A8] rounded-[20px]",
        "px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-20 lg:px-[100px] lg:py-[80px]",
        "gap-10 md:gap-[80px] lg:gap-[100px]",
        "max-w-[1200px] mx-auto w-full h-auto md:min-h-[560px]"
      )}
    >
      <div
        className="relative w-full sm:w-[80%] md:w-[50%] lg:w-[470px] 
             aspect-[470/400] rounded-[10px] overflow-hidden bg-[#E1E1E1]"
      >
        <Image
          src={featuredArticle.multimedia ?? "/placeholder-image.jpg"}
          alt="Featured post image"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 470px"
        />
      </div>

      <div className="flex flex-col justify-start text-left w-full sm:w-[80%] md:w-[50%] lg:w-[470px] gap-5">
        <BlogBadge>
          <Typography variant="badge" className="text-white">
            6 min read
          </Typography>
        </BlogBadge>

        <Typography
          variant="h3"
          className="text-[#1E1E1E] text-[32px] font-bold"
        >
          {featuredArticle.title}
        </Typography>

        <Typography variant="p" className="text-[#1E1E1E]">
          {featuredArticle.abstract}
        </Typography>

        <Link
          href={`/post/${encodeURIComponent(featuredArticle.slug)}`}
          className={
            "group inline-flex items-center gap-2 text-[#5152FB] hover:underline transition-colors duration-200"
          }
        >
          <Typography
            variant="p"
            className="text-[#5152FB] font-medium text-[16px]"
          >
            Read more
          </Typography>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
