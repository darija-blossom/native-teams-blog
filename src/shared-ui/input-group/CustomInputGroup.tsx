"use client";

import {
  InputGroup,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

interface CustomInputGroupProps {
  title?: string; // placeholder text
  buttonLabel?: string;
  variant?: "search" | "signup";
  className?: string;
}

export default function CustomInputGroup({
  title = "Search for posts",
  buttonLabel = "Search",
  variant = "search",
  className,
}: CustomInputGroupProps) {
  const isSearch = variant === "search";
  const button = (
    <InputGroupButton
      className={cn(
        "rounded-full font-semibold px-6 h-[49px] transition-colors duration-200",
        "w-full sm:w-auto",
        isSearch
          ? "bg-[#5152FB] text-white hover:bg-[#3b3ccf]"
          : "bg-[#5B43F1] text-white hover:bg-[#4a36c3]"
      )}
    >
      {buttonLabel}
    </InputGroupButton>
  );

  return (
    <>
      <InputGroup
        className={cn(
          "!block sm:!flex sm:items-center sm:gap-0",
          "w-full min-h-[49px] h-[49px] rounded-full overflow-hidden",
          isSearch ? "bg-[#F0F2F7]" : "bg-white/10",
          className
        )}
      >
        <InputGroupInput
          placeholder={title}
          className={cn(
            "flex-1 w-full h-[49px] border-none bg-transparent focus:outline-none",
            "text-[14px] font-light leading-[142%]",
            isSearch
              ? "text-[#1E1E1E]/80 placeholder:text-[#1E1E1E]/40"
              : "text-white placeholder:text-gray-300"
          )}
        />

        <div className="hidden sm:block">{button}</div>
      </InputGroup>
      <div className="block sm:hidden mt-2 w-full">{button}</div>
    </>
  );
}
