"use client";

import Link from "next/link";
import Typography from "@/shared-ui/typography/Typography";

export default function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<[string, string]>;
}) {
  return (
    <div>
      <Typography variant="h4" className="text-white md:text-[18px]">
        {title}
      </Typography>
      <ul className="mt-4 space-y-2">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="text-white/70 hover:text-white transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
