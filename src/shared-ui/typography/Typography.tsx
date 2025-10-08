import { cn } from "@/lib/utils";
import { JSX, ReactNode } from "react";

type Variant = "h1" | "h2" | "h3" | "h4" | "p" | "small" | "badge";

interface TypographyProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export default function Typography({
  variant = "p",
  className,
  children,
}: TypographyProps) {
  const base = "text-gray-900";

  const variants: Record<Variant, string> = {
    h1: "text-[32px] md:text-[48px] font-bold leading-tight text-gray-900",
    h2: "text-[#151515] text-[24px] md:text-[48px] font-bold leading-[100%] text-center",
    h3: "text-[#5125FB] text-[18px] md:text-[32px] font-bold leading-[100%]",
    h4: "text-[#1E1E1E] text-[18px] md:text-[24px] font-bold leading-[100%] tracking-[0.025em]",
    // pick one leading utility (you had both leading-relaxed and leading-[152%])
    p: "text-[16px] md:text-[18px] text-gray-700 leading-[152%]",
    small: "text-[14px] text-gray-500",
    badge: "text-[12px] font-semibold leading-[152%]",
  };

  // Map each variant to a valid intrinsic element
  const tagMap: Record<Variant, keyof JSX.IntrinsicElements> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    small: "small",
    badge: "span", // <- important
  };

  const Tag = tagMap[variant];

  return (
    <Tag className={cn(base, variants[variant], className)}>{children}</Tag>
  );
}
