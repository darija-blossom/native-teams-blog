"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Typography from "@/shared-ui/typography/Typography";
import BlogBadge from "@/shared-ui/blog-badge/BlogBadge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface PostCardProps {
  slug: string;
  title: string;
  description?: string;
  multimedia?: string;
  readTime?: string;
  className?: string;
}

export default function PostCard({
  slug,
  title,
  description,
  multimedia,
  readTime = "6 min read",
  className,
}: PostCardProps) {
  return (
    <Card
      className={cn(
        "relative flex flex-col rounded-[10px] border border-[#E1E1E1] overflow-hidden",
        "bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-md",
        "w-full max-w-[370px] max-h-[399px] pt-0",
        "shadow-sm hover:shadow-[-5px_7px_0px_#5152FB]",
        className
      )}
    >
      <CardHeader className="p-0">
        <div className="relative w-full aspect-[4/3] bg-[#E1E1E1] max-h-[221px]">
          <Image
            src={multimedia || "/assets/placeholder.png"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 50vw, 370px"
            priority={false}
          />
        </div>
        <BlogBadge className="absolute top-[50%] rounded-l-[0px]">
          <Typography variant="badge" className="text-white">
            {readTime}
          </Typography>
        </BlogBadge>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 px-4">
        <Link
          href={`/post/${encodeURIComponent(slug)}`}
          aria-label={`Open post: ${title}`}
        >
          <Typography
            variant="h4"
            className="text-[#1E1E1E] text-[18px] font-semibold leading-[130%] line-clamp-2 hover:underline"
          >
            {title}
          </Typography>
        </Link>

        {description && (
          <Typography
            variant="p"
            className="text-[#1E1E1E]/80 text-[15px] leading-[150%] line-clamp-2"
          >
            {description}
          </Typography>
        )}
      </CardContent>

      <CardFooter className="mt-auto">
        <Link
          href={`/post/${encodeURIComponent(slug)}`}
          className="group inline-flex items-center gap-1 text-[#5152FB] font-medium text-[15px] hover:underline"
          aria-label={`Read more: ${title}`}
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
}
