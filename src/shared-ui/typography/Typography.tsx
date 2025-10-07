import { cn } from "@/lib/utils"; // if you have a className merge util (like shadcn does)
import { JSX, ReactNode } from "react";

type Variant = "h1" | "h2" | "h3" | "p" | "small";

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
    h2: "text-[#151515] text-[32px] md:text-[48px] font-bold leading-[100%]  text-center",
    h3: "text-[#5125FB] text-[18px] md:text-[32px] font-bold leading-[100%]",
    p: "text-[16px] md:text-[18px] text-gray-700 leading-relaxed",
    small: "text-[14px] text-gray-500",
  };

  const Tag = variant as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn(base, variants[variant], className)}>{children}</Tag>
  );
}
