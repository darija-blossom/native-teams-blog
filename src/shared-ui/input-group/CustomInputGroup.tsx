"use client";

import {
  InputGroup,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ThankYouPopover from "../popovers/ThankYouPopover";

interface CustomInputGroupProps {
  title?: string;
  buttonLabel?: string;
  variant?: "search" | "signup";
  className?: string;
  onSearch?: (value: string) => void;
}

export default function CustomInputGroup({
  title = "Search for posts",
  buttonLabel = "Search",
  variant = "search",
  className,
  onSearch,
}: CustomInputGroupProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch?.(e.target.value);
  };

  const isSearch = variant === "search";

  const button =
    variant === "signup" ? (
      <ThankYouPopover />
    ) : (
      <InputGroupButton
        className={cn(
          "rounded-full font-semibold px-6 h-[49px] transition-colors duration-200",
          "w-full sm:w-auto bg-[#5152FB] text-white hover:bg-[#303094]"
        )}
      >
        {buttonLabel}
      </InputGroupButton>
    );

  return (
    <div className={cn("relative", className)}>
      <InputGroup
        className={cn(
          "!block sm:!flex sm:items-center sm:gap-0",
          "w-full min-h-[49px] h-[49px] rounded-full overflow-hidden",
          "bg-[#F0F2F7]"
        )}
      >
        <InputGroupInput
          placeholder={title}
          value={value}
          onChange={handleChange}
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
    </div>
  );
}
