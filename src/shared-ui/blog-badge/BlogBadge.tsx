"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BlogBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

export default function BlogBadge({ children, className }: BlogBadgeProps) {
  return (
    <Badge
      className={cn(
        "inline-flex items-center justify-center px-3 py-[6px] rounded-[6px] w-fit transition-colors duration-200",
        "bg-[#5152FB] text-white border-none",
        className
      )}
    >
      {children}
    </Badge>
  );
}
