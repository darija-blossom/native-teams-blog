"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PageLike = number | "ellipsis";

export default function PaginationBar({
  page,
  totalPages,
  onChange,
  className,
}: {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
  className?: string;
}) {
  const go = (p: number) => onChange(Math.min(Math.max(1, p), totalPages));

  const pages: PageLike[] = (() => {
    if (totalPages <= 7)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    const arr: PageLike[] = [1];
    if (page > 3) arr.push("ellipsis");
    for (
      let i = Math.max(2, page - 1);
      i <= Math.min(totalPages - 1, page + 1);
      i++
    )
      arr.push(i);
    if (page < totalPages - 2) arr.push("ellipsis");
    arr.push(totalPages);
    return arr;
  })();

  return (
    <Pagination className={className}>
      <div className="w-full flex items-center justify-between px-0 md:px-0">
        <PaginationContent className="flex flex-1 items-center justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                go(page - 1);
              }}
              aria-disabled={page === 1}
              className={[
                "bg-transparent",
                "text-[#838A90] font-[700]",
                "text-[16px] md:text-[24px] leading-[100%]",
                "transition-colors",
                page === 1
                  ? "pointer-events-none opacity-40"
                  : "hover:text-[#5152FB] hover:bg-transparent",
              ].join(" ")}
            >
              Previous
            </PaginationPrevious>
          </PaginationItem>

          <div className="flex items-center gap-[10px] md:gap-[16px]">
            {pages.map((p, idx) =>
              p === "ellipsis" ? (
                <PaginationItem key={`e-${idx}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={p}>
                  <PaginationLink
                    href="#"
                    isActive={p === page}
                    onClick={(e) => {
                      e.preventDefault();
                      go(p);
                    }}
                    className={[
                      "min-w-[26px] h-[29px]",
                      "px-[7px] text-center flex items-center justify-center",
                      "text-[14px] md:text-[16px] font-semibold leading-[100%]",
                      "rounded-[5px] transition-colors duration-200",
                      p === page
                        ? "bg-[#EBF3FF] text-[#5152FB]"
                        : "bg-transparent text-[#1E1E1E]/70 hover:bg-[#F4F6F8]",
                    ].join(" ")}
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
          </div>

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                go(page + 1);
              }}
              aria-disabled={page === totalPages}
              className={[
                "bg-transparent",
                "text-[#838A90] font-[700]",
                "text-[16px] md:text-[24px] leading-[100%]",
                "transition-colors",
                page === totalPages
                  ? "pointer-events-none opacity-40"
                  : "text-[#5152FB] hover:text-[#2e2e8a] hover:bg-transparent",
              ].join(" ")}
            >
              Next
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </div>
    </Pagination>
  );
}
